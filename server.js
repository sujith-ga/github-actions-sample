// server.js
import { exec } from "child_process";
const server = exec("npx http-server -p 8080");

  server.stdout.on("data", (data) => {
    if (data.includes("Available on")) {
      console.log("Server started");
    }
  });

  server.stderr.on("data", (data) => {
    console.error(`Error: ${data}`);
  });
