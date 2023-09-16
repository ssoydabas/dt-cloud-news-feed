import { Router } from "express";

import searchNewYorkTimes from "./search-new-york-times";

const router = Router();

// POST /api/v1/new-york-times/search
router.post("/search", searchNewYorkTimes);

export default router;
