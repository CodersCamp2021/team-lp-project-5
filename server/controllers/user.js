import pool from "../db/setup.js";
import bcrypt from "bcrypt";
import crypto from "crypto";

export default class UserController {
  static register = async (body) => {
    const client = await pool.connect();
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(body.password, salt);
    await client.query(
      `INSERT INTO users (username, first_name, second_name, password, email) VALUES ($1, $2, $3, $4, $5);`,
      [
        body.username,
        body.first_name,
        body.second_name,
        hashedPassword,
        body.email,
      ],
    );
    return { message: "User created" };
  };

  static login = async (req, res) => {
    const client = await pool.connect();
    const user = await client.query(`SELECT * FROM users WHERE username=$1;`, [
      req.body.username,
    ]);
    if (!user) {
      throw new Error("User with this username does not exist.");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.rows[0].password,
    );
    if (!validPassword) {
      throw new Error("Invalid password.");
    }
    const userSessionId = user.rows[0].session;
    if (userSessionId) {
      res.cookie("team-lp-project-5", userSessionId);
    } else {
      const sessionToken = crypto.randomBytes(64).toString("base64");
      await client.query(`UPDATE users SET session=$1 WHERE username=$2;`, [
        sessionToken,
        req.body.username,
      ]);
      res.cookie("team-lp-project-5", sessionToken);
    }
  };

  static getUserTasks = async (req) => {
    const client = await pool.connect();
    const checkIfUserExist = await client.query(
      `SELECT user_id FROM users WHERE user_id=$1;`,
      [req.params.userId],
    );
    if (!checkIfUserExist.rowCount) {
      return { message: "User with this ID does not exist" };
    }
    const tasks = await client.query(`SELECT * FROM tasks WHERE user_id=$1;`, [
      req.params.userId,
    ]);
    if (tasks.rowCount) {
      return { tasks: tasks.rows };
    } else {
      return { message: "No tasks found for this user" };
    }
  };

  static logout = async ({ session }) => {
    const client = await pool.connect();
    await client.query(`UPDATE users SET session='' WHERE user_id=$1;`, [
      session.userId,
    ]);
    return { message: "Logged out successfully." };
  };
}
