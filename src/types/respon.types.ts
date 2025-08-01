import { ICategory } from "../models/category.model";

export interface CategoryResponseFormat {
  success: boolean;
  message: string;
  data: Array<ICategory>;
  updatedData: ICategory | null;
}

export type CategoryResponse = Partial<CategoryResponseFormat>;
