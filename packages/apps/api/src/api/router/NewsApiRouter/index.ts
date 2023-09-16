import { Router } from "express";

import searchNewsApi from "./search-news-api";

const router = Router();

// POST /api/v1/news-api/search
router.post("/search", searchNewsApi);

export default router;
