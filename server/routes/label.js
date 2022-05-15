import express from "express";
import LabelController from "../controllers/label.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const response = await LabelController.createLabel(req.body);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export { router as labelRouter };
