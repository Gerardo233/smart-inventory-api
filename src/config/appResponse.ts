import { CategoryCodes } from "../types/category.types";

export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum HttpStatusCodes {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

export interface AppResponse {
  httpMethod: HttpMethods;
  code: HttpStatusCodes;
  success: boolean;
  message: CategoryCodes | string;
  errorDetails?: string;
  data: any;
  singleData: any;
}

export type AppResponseFormat = Partial<AppResponse>;
