import * as categoryServices from "../services/category.service";
import { Request, Response, NextFunction } from "express";
import { AppResponseFormat } from "../config/appResponse";
import { httpStatusCodes } from "../config/httpCodes";
import { CategoryCodes } from "../types/category.types";

// Get all categories
export const getAllCategories = async (
  req: Request,
  res: Response<AppResponseFormat>,
  next: NextFunction
) => {
  try {
    const items = await categoryServices.getAll();

    res.status(200).json({
      code: httpStatusCodes.OK,
      success: true,
      message: CategoryCodes.CATEGORIES_FETCHED,
      data: items,
    });
  } catch (error: unknown) {
    next(error);
  }
};

// Get a specific category by ID
export const getCategoryByID = async (
  req: Request,
  res: Response<AppResponseFormat>,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const item = await categoryServices.getByID(id);

    res.status(200).json({
      code: httpStatusCodes.OK,
      success: true,
      message: CategoryCodes.CATEGORY_FOUND,
      singleData: item,
    });
  } catch (error) {
    next(error);
  }
};

// Create a new category
export const createCategory = async (
  req: Request,
  res: Response<AppResponseFormat>,
  next: NextFunction
) => {
  try {
    const commingData = req.body;
    const item = await categoryServices.create(commingData);

    res.status(201).json({
      code: httpStatusCodes.CREATED,
      success: true,
      message: CategoryCodes.CATEGORY_CREATED,
      singleData: item,
    });
  } catch (error: unknown) {
    next(error);
  }
};

export const updateCategoryByID = async (
  req: Request,
  res: Response<AppResponseFormat>,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const commingData = req.body;
    const item = await categoryServices.updateByID(id, commingData);

    res.status(200).json({
      code: httpStatusCodes.OK,
      success: true,
      message: CategoryCodes.CATEGORY_UPDATED,
      singleData: item,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategoryByID = async (
  req: Request,
  res: Response<AppResponseFormat>,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const item = await categoryServices.deleteByID(id);
    res.status(200).json({
      code: httpStatusCodes.OK,
      success: true,
      message: CategoryCodes.CATEGORY_DELETED,
      singleData: item,
    });
  } catch (error) {
    next(error);
  }
};
