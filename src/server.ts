import http from "http";
import { app } from "./app";

const PORT = Number(process.env.PORT) || 3000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`HTTP listening on http://localhost:${PORT}`);
});
