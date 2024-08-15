module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Transform JavaScript and TypeScript files using babel-jest
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^axios$": "axios/dist/node/axios.cjs",
  },
  globals: {
    fetch: global.fetch,
  },
};
