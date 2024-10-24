import express from "express";
import { AuthControllers } from "./auth.controller";

const router = express.Router();

router.post("/create-user", AuthControllers.createUser);
export const AuthRoutes = router;
