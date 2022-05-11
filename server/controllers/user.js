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
}
