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

  getById: (id: string) => {
    const task = tasks.find((task) => task.id === id);

    if (!task) {
      return { error: "Task not found", status: 404 };
    }
    return { data: task, status: 200 };
  },

  create: (title: string) => {
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
