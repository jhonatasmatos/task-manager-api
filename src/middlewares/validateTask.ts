import { NextFunction, Request, Response } from "express";

export const validateStatus = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status } = req.body;

  if (
    status !== undefined &&
    !["pending", "completed"].includes(status.toLowerCase())
  ) {
    return res.status(400).json({
      error: "Status must be one of: pending or completed",
    });
  }

  next();
};

export const validateTitle = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.body;

  if (title !== undefined) {
    if (!title || title.length < 3) {
      return res.status(400).json({
        error: "Title must be at least 3 characters",
      });
    }
  }

  next();
};

export const requireTitle = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  next();
};

export const validateTaskCreation = [
  requireTitle,
  validateTitle,
  validateStatus,
];

export const validateTaskUpdate = [validateTitle, validateStatus];
