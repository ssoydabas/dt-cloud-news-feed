import { Router } from "express";

import me from "./me";
import updateMe from "./update-me";

const router = Router();

// GET /api/v1/users/me
router.get("/me", me);

// PUT /api/v1/users/me
router.put("/me", updateMe);

export default router;
