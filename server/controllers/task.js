import pool from "../db/setup.js";

export default class TaskController {
  static createTask = async (body) => {
    const client = await pool.connect();
    await client.query(
      `INSERT INTO tasks (title, description, user_id, priority, status) VALUES ($1, $2, $3, $4, $5);`,
      [body.title, body.description, body.user_id, body.priority, body.status],
    );
    return { message: "Task created" };
  };

  static changeTaskStatusOrPriority = async (body) => {
    const client = await pool.connect();
    await client.query(
      `UPDATE tasks SET priority=COALESCE($1,priority), status=COALESCE($2,status) WHERE task_id=$3;`,
      [body.priority, body.status, body.task_id],
    );
    return { message: "Task changed" };
  };

  static deleteTask = async (body) => {
    const client = await pool.connect();
    const outcome = await client.query(`DELETE FROM tasks WHERE task_id=$1;`, [
      body.task_id,
    ]);
    console.log(outcome);
    if (outcome.rowCount == 1) {
      return { message: "Task Deleted" };
    } else {
      return { message: "No task with that ID" };
    }
  };
}
