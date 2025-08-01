import { CategoryCodes } from "../types/category.types";
import { httpStatusCodes } from "./httpCodes";

export interface AppResponse {
  code: httpStatusCodes;
  success: boolean;
  message: CategoryCodes | string;
  error: string;
  data: any;
  singleData: any;
}

export type AppResponseFormat = Partial<AppResponse>;
