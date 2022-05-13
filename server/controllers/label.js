import pool from "../db/setup.js";

export default class labelController {
  static createLabel = async (body) => {
    const client = await pool.connect();
    await client.query(`INSERT INTO labels (title, user_id) VALUES ($1, $2);`, [
      body.title,
      body.user_id,
    ]);
    return { message: "Label created" };
  };
}
