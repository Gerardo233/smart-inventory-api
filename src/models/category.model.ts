import { Schema, model, Document } from "mongoose";

export interface CategoryInputFormat {
  name: string;
  description: string;
}

export interface ICategory extends Document {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const CategoryModel = model<ICategory>("Category", CategorySchema);

export default CategoryModel;
