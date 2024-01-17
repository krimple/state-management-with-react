export default {
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
    transform: {
        '^.+\\tsx?$': 'ts-jest',
    },
    rootDir: 'src',
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/$1',
    },
};
