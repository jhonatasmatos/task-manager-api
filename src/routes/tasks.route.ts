import express from "express";
import { TaskService } from "../services/task.service";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(TaskService.getAll());
});

router.post("/", (req, res) => {
  const { title } = req.body;
  res.json(TaskService.create(title));
});

export default router;
