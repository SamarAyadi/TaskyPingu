import express from "express";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";
import {
  exportTasksReport,
  exportUsersReport,
} from "../controllers/reportController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: Export Excel or PDF reports (admin only)
 */

/**
 * @swagger
 * /reports/export/tasks:
 *   get:
 *     summary: Export all tasks as Excel or PDF
 *     tags: [Reports]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Tasks exported successfully
 */
router.get("/export/tasks", protect, adminOnly, exportTasksReport);

/**
 * @swagger
 * /reports/export/users:
 *   get:
 *     summary: Export user-task report
 *     tags: [Reports]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User report exported successfully
 */
router.get("/export/users", protect, adminOnly, exportUsersReport);

export default router;
