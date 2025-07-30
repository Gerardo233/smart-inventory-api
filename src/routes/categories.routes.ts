import { Router } from "express";

const categoryRouter = Router();

//Get all categories
categoryRouter.get("/");
//Get a specific category by ID
categoryRouter.get("/:id");
//Create a new category
categoryRouter.post("/");
//Update by id
categoryRouter.put("/:id");
//Delete by id
categoryRouter.delete("/:id");

export default categoryRouter;
