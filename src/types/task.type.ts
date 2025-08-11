export interface Task {
  id: string;
  title: string;
  status: "PENDING" | "COMPLETED";
  createdAt: Date;
}

export const tasks: Task[] = [
  {
    id: "1",
    title: "Aprender Express",
    status: "PENDING",
    createdAt: new Date(),
  },
];
