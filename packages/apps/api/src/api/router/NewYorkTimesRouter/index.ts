import { Router } from "express";

import searchByKeyword from "./search-by-keyword";

const router = Router();

// GET /api/v1/new-york-times/search
router.get("/search", searchByKeyword);

export default router;
