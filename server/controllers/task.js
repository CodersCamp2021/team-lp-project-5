import pool from "../db/setup.js";

export default class TaskController {
  static createTask = async (body) => {
    const client = await pool.connect();
    await client.query(
      `INSERT INTO tasks (title, description, user_id, priority, status) VALUES ($1, $2, $3, $4, $5);`,
      [body.title, body.description, body.user_id, body.priority, body.status],
    );
    return { message: "Ticket created" };
  };
}
