import express from "express";
import { multerUpload } from "../../config/multer.config";
import { bodyDataParsing } from "../../middleware/bodyDataParsing";
import { ProjectControllers } from "./projects.controller";

const router = express.Router();

router.post(
  "/create-project",
  multerUpload.fields([{ name: "projectImages" }]),
  bodyDataParsing,
  ProjectControllers.createProject,
);

export const ProjectsRoutes = router;
