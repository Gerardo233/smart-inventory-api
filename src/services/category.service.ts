import mongoose from "mongoose";
import CategoryModel, {
  CategoryInputFormat,
  ICategory,
} from "../models/category.model";

export const getAll = async (): Promise<Array<ICategory>> => {
  return await CategoryModel.find({});
};

export const getByID = async (id: string): Promise<ICategory | null> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID format");
  }
  const item = await CategoryModel.findById(id);
  return item;
};

export const create = async (data: CategoryInputFormat): Promise<ICategory> => {
  const item = new CategoryModel(data);
  return await item.save();
};

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

  return item;
};
