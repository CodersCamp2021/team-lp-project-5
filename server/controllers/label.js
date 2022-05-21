import pool from "../db/setup.js";

export default class labelController {
  static createLabel = async (req) => {
    await pool.query(`INSERT INTO labels (title, user_id) VALUES ($1, $2);`, [
      req.body.title,
      req.session.userId,
    ]);
    return { message: "Label created" };
  };

  static createTaskLabelRelation = async (req) => {
    for (const label of req.body.labelId) {
      await pool.query(
        `INSERT INTO tasks_labels_relation (task_id, label_id) VALUES ($1, $2);`,
        [req.body.taskId, label],
      );
    }
    return {
      message: `Task with ID: ${req.body.taskId} is now labeled by label with ID: ${req.body.labelId}`,
    };
  };
}
