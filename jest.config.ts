import type { Config } from "jest";

const config: Config = {
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/coverage/"],
  watchPathIgnorePatterns: ["/node_modules/", "/dist/", "/coverage/"],
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },

  clearMocks: true,
  verbose: true,
};

export default config;
