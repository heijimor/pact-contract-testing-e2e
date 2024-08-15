import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes";
import bodyParser from "body-parser";
const { exec } = require("child_process");

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser());

app.use("/", routes);
app.get("/user", (_req, res) => res.json({ id: 1, name: "John Doe" }));
app.get("/user/1", (_req, res) => {
  res.set("Content-Type", "application/json");
  res.json({ id: 1, name: "John Doe" });
});
app.get("/simulating-step-trigger", (_req, res) => {
  exec("npm test", (error: any, stdout: any, stderr: any) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res
        .status(500)
        .json({ success: false, message: `Error executing test: ${stderr}` });
    }
    // Output the test results
    console.log(`stdout: ${stdout}`);
    res.status(200).json({ success: true, message: `Test results: ${stdout}` });
  });
});
app.post("/health", (req, res) => {
  console.log(req.body);
  res.json({ data: req.body.thisPactWasPublished });
});
export default app;
