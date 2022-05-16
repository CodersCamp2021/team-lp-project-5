import pool from "../server/db/setup.js";

export const loginRequired = async (req, res, next) => {
  try {
    const client = await pool.connect();
    const userInfo = await client.query(
      `SELECT user_id FROM users WHERE session=$1;`,
      [req.cookies["team-lp-project-5"]],
    );
    if (userInfo.rowCount === 1) {
      req.session = {
        logged: true,
        userId: userInfo.rows[0].user_id,
      };
    } else {
      return res
        .status(401)
        .json({ message: "You should be logged in to access this data" });
    }
    next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const checkIfUserHaveAccess = async (req, res, next) => {
  try {
    const client = await pool.connect();
    const checkIfUserExist = await client.query(
      `SELECT user_id FROM users WHERE user_id=$1;`,
      [req.params.userId],
    );
    if (!checkIfUserExist.rowCount) {
      return { message: "User with this ID does not exist" };
    }
    if (req.params.userId == req.session.userId) {
      next();
    } else {
      return res
        .status(403)
        .json({ message: "You are not allowed to do this" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
