import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { ProjectsRoutes } from "../modules/projects/projects.route";
import { BlogRoutes } from "../modules/blog/blog.route";
import { ExperienceRoutes } from "../modules/experience/experience.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/project",
    route: ProjectsRoutes,
  },
  {
    path: "/blog",
    route: BlogRoutes,
  },
  {
    path: "/experience",
    route: ExperienceRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
