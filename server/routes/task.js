import express from "express";
import TaskControler from "../controllers/task.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const response = await TaskControler.createTask(req.body);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export { router as taskRouter };