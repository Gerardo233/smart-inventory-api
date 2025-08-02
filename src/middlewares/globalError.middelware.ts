import { Request, Response, NextFunction } from "express";
import { AppResponseFormat } from "../config/appResponse";

export class AppError extends Error {
  constructor(public message: string, public statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const globalErrorHandler = (
  err: AppError,
  req: Request,
  res: Response<AppResponseFormat>,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    code: statusCode,
    message,
    //error: process.env.NODE_ENV === "development" ? err.stack : undefined,
    data: null,
  });
};
