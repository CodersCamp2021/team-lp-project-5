import pool from "../db/setup.js";
import bcrypt from "bcrypt";
import crypto from "crypto";

export default class UserController {
  static register = async (body) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(body.password, salt);
    await pool.query(
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
    const user = await pool.query(`SELECT * FROM users WHERE username=$1;`, [
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
    const userSessionIdExist = user.rows[0].session;
    if (userSessionIdExist) {
      res.cookie("team-lp-project-5", userSessionIdExist);
    } else {
      const sessionToken = crypto.randomBytes(64).toString("base64");
      await pool.query(`UPDATE users SET session=$1 WHERE username=$2;`, [
        sessionToken,
        req.body.username,
      ]);
      res.cookie("team-lp-project-5", sessionToken);
    }
    return { message: "Logged in successfully.", userId: user.rows[0].user_id };
  };

  static getUserTasks = async (req) => {
    const tasks = await pool.query(`SELECT * FROM tasks WHERE user_id=$1;`, [
      req.session.userId,
    ]);
    if (tasks.rowCount) {
      return { tasks: tasks.rows };
    } else {
      return { message: "No tasks found for this user" };
    }
  };

  static logout = async (req) => {
    await pool.query(`UPDATE users SET session='' WHERE user_id=$1;`, [
      req.session.userId,
    ]);
    return { message: "Logged out successfully." };
  };
}
