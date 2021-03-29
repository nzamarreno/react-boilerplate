module.exports = {
  roots: ['<rootDir>/src/components', '<rootDir>/src/hooks'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(test).+(ts|tsx)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts', 'tsx'],
  setupFilesAfterEnv: [
    './setup.ts',
  ],
};
