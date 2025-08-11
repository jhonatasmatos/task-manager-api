import express from "express";
import { TaskService } from "../services/task.service";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(TaskService.getAll());
});
router.post("/", (req, res) => {
  const { title } = req.body;
  res.status(201).json(TaskService.create(title));
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;
  res.status(200).json(TaskService.patchTask(id, title, status));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(204).json(TaskService.delete(id));
});

export default router;
