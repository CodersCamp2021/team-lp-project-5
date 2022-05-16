import pool from "../db/setup.js";

export default class labelController {
  static createLabel = async (body) => {
    await pool.query(`INSERT INTO labels (title, user_id) VALUES ($1, $2);`, [
      body.title,
      body.user_id,
    ]);
    return { message: "Label created" };
  };
}
