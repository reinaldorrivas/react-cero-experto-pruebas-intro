/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
export default {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
};
