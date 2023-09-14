const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "~api": path.resolve(__dirname, "../api/src/api/"),
      "~api-root": path.resolve(__dirname, "../api/src/"),
      "@dt-cloud/api-types": path.resolve(__dirname, "../api/types.ts"),
      "~root": path.resolve(__dirname, "./src/"),
    },
  },
};
