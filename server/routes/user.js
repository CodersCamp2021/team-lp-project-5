import express from "express";
import UserController from "../controllers/user.js";
import {
  loginRequired,
  checkIfUserHaveAccess,
} from "../../common/middlewares.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/", async (req, res) => {
  try {
    const response = await UserController.register(req.body);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const response = await UserController.login(req, res);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.get(
  "/:userId/tasks",
  loginRequired,
  checkIfUserHaveAccess,
  async (req, res) => {
    try {
      const response = await UserController.getUserTasks(req);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
);

router.post("/logout", loginRequired, async (req, res) => {
  try {
    const response = await UserController.logout(req);
    res.clearCookie("team-lp-project-5");
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export { router as userRouter };
