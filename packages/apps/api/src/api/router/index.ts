import { Router } from "express";

import { isDevelopment } from "../../config";

import AuthRouter from "./AuthRouter";
import UsersRouter from "./UsersRouter";
import NewYorkTimesRouter from "./NewYorkTimesRouter";
import NewsApiRouter from "./NewsApiRouter";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/users", UsersRouter);
router.use("/new-york-times", NewYorkTimesRouter);
router.use("/news-api", NewsApiRouter);

if (isDevelopment) {
  router.get("/error", () => {
    throw new Error("Testing error handling in development mode");
  });
}

export default router;
