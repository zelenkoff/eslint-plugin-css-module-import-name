module.exports = {
  testEnvironment: 'node',
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
