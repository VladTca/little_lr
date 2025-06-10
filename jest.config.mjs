export default {
  preset: 'ts-jest/presets/default-esm', // Для поддержки TypeScript + ESM
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'], // Укажите корневую папку для тестов
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'identity-obj-proxy', // Маппинг для CSS
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // Маппинг для изображений
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'], // ESM расширения
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.mjs'], // Подключаем setup файл
};