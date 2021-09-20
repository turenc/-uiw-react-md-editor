import { join } from "path";

export default {
  main: [join(__dirname, "../../src/index.tsx"), join(__dirname, "../utils/cleanConsoleOnHMR.js")]
};
