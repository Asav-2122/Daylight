import express from "express";
import {
  addTeamMember,
  deleteTeamMember,
  getTeamMembers,
  updateTeamMember,
} from "../controllers/teamMember.controller.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

router.post("/:projectId/:teamId/teamMembers", rateLimiter, addTeamMember);
router.get("/:projectId/:teamId/teamMembers", rateLimiter, getTeamMembers);
router.put(
  "/:projectId/:teamId/teamMembers/:teamMemberId",
  rateLimiter,
  updateTeamMember
);
router.delete(
  "/:projectId/:teamId/teamMembers/:teamMemberId",
  rateLimiter,
  deleteTeamMember
);

export default router;
