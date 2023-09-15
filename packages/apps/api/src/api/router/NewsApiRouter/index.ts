import { Router } from "express";

import searchByKeyword from "./search-by-keyword";

const router = Router();

// GET /api/v1/news-api/search
router.get("/search", searchByKeyword);

export default router;
