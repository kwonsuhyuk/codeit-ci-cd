import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // ...
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
  collectCoverage: true,
  coverageDirectory: "coverage", // 생성된 리포트를 저장할 디렉터리
  coverageReporters: ["json", "lcov", "text", "clover"], // 다양한 형식으로 리포트 생성
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
