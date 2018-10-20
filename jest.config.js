module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage : true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/server.ts"
  ]
};
