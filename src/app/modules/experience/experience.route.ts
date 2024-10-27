import express from "express";
import { ExperienceControllers } from "./experience.controller";

const router = express.Router();

router.post("/create-experience", ExperienceControllers.createExperience);

export const ExperienceRoutes = router;
