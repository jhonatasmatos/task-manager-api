import { Task } from "../types/task.type";

let tasks: Task[] = [
  {
    id: "1",
    title: "Aprender Express",
    status: "PENDING",
    createdAt: new Date(),
  },
];

export const TaskService = {
  getAll: () => tasks,

  create: (title: string) => {
    if (!title || title.length < 3) {
      throw new Error("Title must be at least 3 characters");
    }

    const newTask: Task = {
      id: (tasks.length + 1).toString(),
      title,
      status: "PENDING",
      createdAt: new Date(),
    };

    tasks.push(newTask);
    return newTask;
  },

  patchTask: (id: string, title?: string, status?: "PENDING" | "COMPLETED") => {
    const task = tasks.find((task) => task.id === id);

    if (!task) {
      throw new Error("Task not found");
    }

    task.title = title || task.title;
    task.status = status || task.status;

    return task;
  },

  delete: (id: string) => {
    const index = tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      throw new Error("Task not found");
    }

    tasks.splice(index, 1);
    return { id };
  },
};
