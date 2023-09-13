import { Router } from "express";

import { isDevelopment } from "../../config";

import AuthRouter from "./AuthRouter";
import UsersRouter from "./UsersRouter";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/users", UsersRouter);

if (isDevelopment) {
  router.get("/error", () => {
    throw new Error("Testing error handling in development mode");
  });
}

export default router;
