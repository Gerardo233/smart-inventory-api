import request from "supertest";
import mongoose from "mongoose";
import fs from "fs";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../../src/app";
import CategoryModel from "../../src/models/category.model";
import { HttpStatusCodes, HttpMethods } from "../../src/config/appResponse";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  await fs.promises.mkdir("./.tmp-mongo", { recursive: true });
  mongoServer = await MongoMemoryServer.create({
    instance: {
      dbPath: "./.tmp-mongo",
      dbName: "test",
      storageEngine: "ephemeralForTest",
      port: 27017,
    },
    binary: { version: "6.0.5" },
  });
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
  await fs.promises.rm("./.tmp-mongo", { recursive: true, force: true });
});

afterEach(async () => {
  await CategoryModel.deleteMany({});
});

//Happy path tests
describe("GET /api/categories/:id", () => {
  it("should return a category", async () => {
    const category = await CategoryModel.create({
      name: "Test Category",
      description: "Test Description",
    });
    const response = await request(app).get(`/api/categories/${category._id}`);

    expect(response.status).toBe(HttpStatusCodes.OK);
    expect(response.body.httpMethod).toBe(HttpMethods.GET);
    expect(response.body.success).toBe(true);
  });
});

describe("GET /api/categories", () => {
  it("Should return all categories", async () => {
    const categories = await CategoryModel.create([
      { name: "Category 1", description: "Description 1" },
      { name: "Category 2", description: "Description 2" },
    ]);

    const response = await request(app).get("/api/categories");

    expect(response.status).toBe(HttpStatusCodes.OK);
    expect(response.body.success).toBe(true);
    expect(response.body.data.length).toBe(categories.length);
  });
});

describe("POST /api/categories", () => {
  it("should create a new category", async () => {
    const newCategory = {
      name: "New Category",
      description: "New Description",
    };
    const response = await request(app)
      .post("/api/categories")
      .send(newCategory);

    expect(response.status).toBe(HttpStatusCodes.CREATED);
    expect(response.body.success).toBe(true);
  });
});

describe("PUT /api/categories/:id", () => {
  it("should update an existing category", async () => {
    const newCategory = await CategoryModel.create({
      name: "Category to Update",
      description: "Description to Update",
    });
    const response = await request(app)
      .put(`/api/categories/${newCategory._id}`)
      .send({ name: "Updated Category", description: "Updated Description" });

    expect(response.status).toBe(HttpStatusCodes.OK);
    expect(response.body.success).toBe(true);
  });
});
