import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateuser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/session", authenticateUserController.handle);

export { authenticateRoutes };
