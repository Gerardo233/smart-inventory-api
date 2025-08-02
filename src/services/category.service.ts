import mongoose from "mongoose";
import CategoryModel, {
  CategoryInputFormat,
  ICategory,
} from "../models/category.model";
import { AppError } from "../middlewares/globalError.middelware";
import { CategoryCodes } from "../types/category.types";

// Get all categories
export const getAll = async (): Promise<Array<ICategory>> => {
  const items = await CategoryModel.find({});
  return items;
};

// Get a specific category by ID
export const getByID = async (id: string): Promise<ICategory | null> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError(CategoryCodes.CATEGORY_INVALID_ID, 400);
  }
  const item = await CategoryModel.findById(id);
  if (!item) {
    throw new AppError(CategoryCodes.CATEGORY_NOT_FOUND, 404);
  }

  return item;
};

// Create a new category
export const create = async (data: CategoryInputFormat): Promise<ICategory> => {
  const existingData = await CategoryModel.findOne({ name: data.name });
  if (existingData) {
    throw new AppError(CategoryCodes.CATEGORY_ALREADY_EXISTS, 409);
  }

  const item = new CategoryModel(data);
  return await item.save();
};

// Update a category by ID
export const updateByID = async (
  id: string,
  data: Partial<CategoryInputFormat>
): Promise<ICategory | null> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError(CategoryCodes.CATEGORY_INVALID_ID, 400);
  }
  const item = await CategoryModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!item) {
    throw new AppError(CategoryCodes.CATEGORY_NOT_FOUND, 404);
  }

  return item;
};

// Delete a category by ID
export const deleteByID = async (id: string): Promise<ICategory | null> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError(CategoryCodes.CATEGORY_INVALID_ID, 400);
  }
  const item = await CategoryModel.findByIdAndDelete(id);
  if (!item) {
    throw new AppError(CategoryCodes.CATEGORY_NOT_FOUND, 404);
  }

  return item;
};
