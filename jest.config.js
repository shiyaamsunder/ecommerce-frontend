module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage',
    '<rootDir>/dist',
  ],
  moduleDirectories: [
    '<rootDir>/node_modules',
    '<rootDir>/components',
    '<rootDir>/containers',
    '<rootDir>/hooks',
    '<rootDir>/pages',
  ],
  moduleNameMapper: {
    '@hooks/(.*)': '<rootDir>/hooks/$1',
    '@components(.*)': '<rootDir>/components/$1',
    '@containers(.*)': '<rootDir>/containers/$1',
    '@fixtures(.*)': '<rootDir>/fixtures/$1',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@styles/(.*)': '<rootDir>/styles/$1',
    '@test-utils': '<rootDir>/utils/test-utils',
    '@redux/(.*)': '<rootDir>/redux/$1',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'hooks/**/*.{js,jsx,ts,tsx}',
    'containers/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/components/icons'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
