import { Router } from "express";

import searchNews from "./search-news";
import searchByKeyword from "./search-by-keyword";

const router = Router();

// POST /api/v1/news/search
router.post("/search", searchNews);

// POST /api/v1/news/search-by-keyword
router.post("/search-by-keyword", searchByKeyword);

export default router;
