import express, { Request, Response, NextFunction } from "express";
import taskRoutes from "./routes/tasks.route";

const app = express();
app.use(express.json());

app.use("/tasks", taskRoutes);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  res
    .status(err?.status || 500)
    .json({ message: err?.message || "Internal error" });
});

export { app };
