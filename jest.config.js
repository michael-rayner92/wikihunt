const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/src/config/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage',
    '<rootDir>/dist'
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  clearMocks: true,
  resetMocks: true,
  moduleNameMapper: {
    '@components/(.*)$': '<rootDir>/src/components$1',
    '@config/(.*)$': '<rootDir>/src/config/$1',
    '@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
    '@services/(.*)$': '<rootDir>/src/services/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  }
};

module.exports = createJestConfig(customJestConfig);
