import express, { Request, Response } from "express";
import { TaskService } from "../services/task.service";
import {
  validateTaskCreation,
  validateTaskUpdate,
} from "../middlewares/validateTask";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(TaskService.getAll());
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const result = TaskService.getById(id);

  if (result.error) {
    return res.status(result.status).json({ error: result.error });
  }

  res.status(200).json(result.data);
});

router.post("/", validateTaskCreation, (req: Request, res: Response) => {
  const { title } = req.body;
  res.status(201).json(TaskService.create(title));
});

router.patch("/:id", validateTaskUpdate, (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, status } = req.body;
  res.status(200).json(TaskService.patchTask(id, title, status));
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(204).json(TaskService.delete(id));
});

export default router;
