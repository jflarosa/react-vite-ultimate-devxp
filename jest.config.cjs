/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/__tests__/**/*.{js,ts}', '<rootDir>/**/*.{spec,test}.{js,ts}'],
  rootDir: './src',
  moduleNameMapper: {
    '^@utils(.*)$': '<rootDir>/utils$1',
    '^@features(.*)$': '<rootDir>/features$1',
    '^@data(.*)$': '<rootDir>/data$1',
    '^@ui(.*)$': '<rootDir>/ui$1',
    '^@router(.*)$': '<rootDir>/router$1',
  },
};
