import { Router } from "express";

import searchNews from "./search-news";

const router = Router();

// POST /api/v1/news/search
router.post("/search", searchNews);

export default router;
