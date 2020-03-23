// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,

  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json'],
  // coverageThreshold: { threshold: 60 },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx'
  ],

  testEnvironment: 'node'
}
