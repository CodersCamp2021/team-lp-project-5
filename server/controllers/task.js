import pool from "../db/setup.js";

export default class TaskController {
  static createTask = async (req) => {
    await pool.query(
      `INSERT INTO tasks (title, description, user_id, priority, status) VALUES ($1, $2, $3, $4, $5);`,
      [
        req.body.title,
        req.body.description,
        req.session.userId,
        req.body.priority,
        req.body.status,
      ],
    );
    return { message: "Task created" };
  };

  static changeTaskStatusOrPriority = async (req) => {
    await pool.query(
      `UPDATE tasks SET priority=COALESCE($1,priority), status=COALESCE($2,status) WHERE task_id=$3;`,
      [req.body.priority, req.body.status, req.params.taskId],
    );
    return { message: "Task changed" };
  };

  static deleteTask = async (req) => {
    const outcome = await pool.query(`DELETE FROM tasks WHERE task_id=$1;`, [
      req.params.taskId,
    ]);
    if (outcome.rowCount === 1) {
      return { message: "Task Deleted" };
    } else {
      return { message: "No task with that ID" };
    }
  };
}
