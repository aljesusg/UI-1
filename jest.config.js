module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  timers: 'fake',
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/test/preprocessor.js'
  },
  setupFiles: ['./test/test.env.ts'],
  testRegex: '\\.test\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  snapshotSerializers: ['jest-glamor-react', 'enzyme-to-json/serializer']
};
