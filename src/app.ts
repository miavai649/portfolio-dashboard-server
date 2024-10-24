import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";

const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }),
);

// module routes
app.use("/api", router);

// test routes
app.get("/", (req: Request, res: Response) => {
  const a = "Hello world";

  res.send(a);
});

// global error handler middleware
app.use(globalErrorHandler);

// not found route middleware
app.use(notFound);

export default app;
