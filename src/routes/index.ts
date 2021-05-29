import { Router } from "express";

import { CategoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./speficifications.routes";

const router = Router();

router.use("/categories", CategoriesRoutes);
router.use("/specifications", specificationsRoutes);

export { router };
