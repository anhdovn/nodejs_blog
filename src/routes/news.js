import newsControllers from "../app/controllers/NewsControllers.js";

import express from "express";
const router = express.Router();

router.use('/:slug', newsControllers.show);
router.use('/', newsControllers.index);

export default router;  // Export router to use in another file. ( nodejs_blog/src/routes/index.js )