module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    },
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.jest.json',
      },
    },
    testMatch: [
      '<rootDir>/tests/**/*.[jt]s?(x)',
      '<rootDir>/?(*.)+(spec|test).[tj]s?(x)',
    ],
  };
  