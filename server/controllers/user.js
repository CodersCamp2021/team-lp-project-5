import pool from "../db/setup.js";

export default class UserController {
  static register = async (body) => {
    const client = await pool.connect();
    await client.query(
      `INSERT INTO users (username, first_name, second_name, password, email) VALUES ($1, $2, $3, $4, $5);`,
      [
        body.username,
        body.first_name,
        body.second_name,
        body.password,
        body.email,
      ],
    );
    return { message: "User created" };
  };

  static login = async ({ body, session }) => {
    const client = await pool.connect();
    const user = await client.query(`SELECT * FROM users WHERE username=$1;`, [
      body.username,
    ]);
    if (!user) {
      throw new Error("User with this username does not exist.");
    }
    if (body.password != user.rows[0].password) {
      throw new Error("Invalid password.");
    }
    if (user.rows[0].session) {
      session.userId = user.rows[0].user_id;
    } else {
      await client.query(`UPDATE users SET session=$1 WHERE username=$2;`, [
        JSON.stringify(session),
        body.username,
      ]);
      session.userId = user.rows[0].user_id;
    }
    return { message: "Logged in successfully." };
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
}
