import express from "express";
import { AuthResult } from "../auth/types/auth-result.type";
import { AuthService } from "../auth/services/auth.service";

const router = express.Router();

router.get<{}, AuthResult>("/", async (_req, res) => {
  const credential = { username: "", password: "" };
  const data = await new AuthService().authenticate(credential);
  res.json(data);
});

export default router;
