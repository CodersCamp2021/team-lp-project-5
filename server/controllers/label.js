import pool from "../db/setup.js";

export default class labelController {
  static createLabel = async (req) => {
    await pool.query(`INSERT INTO labels (title, user_id) VALUES ($1, $2);`, [
      req.body.title,
      req.session.userId,
    ]);
    return { message: "Label created" };
  };
}
