import type {Config} from 'jest';

const config: Config = {
    automock: false, // if true then all modules used in file test will be automocked
    bail: 1, // stop jest test when has been error happen
    verbose: true,
    testEnvironment: "node",
    preset: "ts-jest",
    roots: ["<rootDir>/"],
    setupFiles: ["dotenv/config"],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    coveragePathIgnorePatterns: ["jest-extend"],
    globalSetup: "./test-pipeline/pretest.ts",
    globalTeardown: "./test-pipeline/posttest.ts"
};

export default config;

