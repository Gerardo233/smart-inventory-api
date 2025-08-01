import { Router } from "express";
import {
  getAllCategories,
  createCategory,
  getCategoryByID,
} from "../controllers/category.controller";

const categoryRouter = Router();

//Get all categories
categoryRouter.get("/", getAllCategories);
categoryRouter.post("/", createCategory);
categoryRouter.get("/:id", getCategoryByID);

export default categoryRouter;
