import express from "express";
import TaskController from "../controllers/task.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const response = await TaskController.createTask(req.body);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.put("/changeStatus", async (req, res) => {
  try {
    const response = await TaskController.changeTaskStatusOrPriority(req.body);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export { router as taskRouter };
