import { Router } from "express";
import multer from "multer";

import { createCategoryControllers } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const CategoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

CategoriesRoutes.post("/", (request, response) => {
  return createCategoryControllers.handle(request, response);
});

CategoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

CategoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { CategoriesRoutes };
