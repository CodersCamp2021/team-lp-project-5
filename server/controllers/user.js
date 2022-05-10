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
    const user = await client.query(
      `SELECT * FROM users WHERE username='${body.username}';`,
    );
    if (!user) {
      throw new Error("User with this username does not exist.");
    }
    session.userId = body.username;
    await client.query(
      `UPDATE users SET session='${session.email}' WHERE username='${body.username}';`,
    );
    return { message: "Logged in successfully." };
  };
}
