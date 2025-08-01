import mongoose from "mongoose";
import CategoryModel, {
  CategoryInputFormat,
  ICategory,
} from "../models/category.model";

// Get all categories
export const getAll = async (): Promise<Array<ICategory>> => {
  return await CategoryModel.find({});
};

// Get a specific category by ID
export const getByID = async (id: string): Promise<ICategory | null> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID format");
  }
  const item = await CategoryModel.findById(id);

  if (!item) {
    throw new Error("Category not found");
  }
  return item;
};

// Create a new category
export const create = async (data: CategoryInputFormat): Promise<ICategory> => {
  const existingData = await CategoryModel.findOne({ name: data.name });
  if (existingData) {
    throw new Error("Item already exists");
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
    throw new Error("Invalid ID format");
  }
  const item = await CategoryModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!item) {
    throw new Error("Category not found");
  }

  return item;
};

// Delete a category by ID
export const deleteByID = async (id: string): Promise<ICategory | null> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID format");
  }
  const item = await CategoryModel.findByIdAndDelete(id);
  if (!item) {
    throw new Error("Something went wrong");
  }

  return item;
};
