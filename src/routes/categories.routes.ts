import { Router } from "express";
import {
  getAllCategories,
  createCategory,
  getCategoryByID,
  updateCategoryByID,
  deleteCategoryByID,
} from "../controllers/category.controller";

const categoryRouter = Router();

//Get all categories
categoryRouter.get("/", getAllCategories);
categoryRouter.post("/", createCategory);
categoryRouter.get("/:id", getCategoryByID);
categoryRouter.put("/:id", updateCategoryByID);
categoryRouter.delete("/:id", deleteCategoryByID);

export default categoryRouter;
