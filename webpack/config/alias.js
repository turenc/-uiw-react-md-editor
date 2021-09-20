import { join } from "path";

import { rootDir } from "../utils/env-var-helper";

export const aliasItems = {
  "@src": join(rootDir, "src"),
  'react-native': 'react-native-web',
  'react-dom$': 'react-dom/profiling',
  'scheduler/tracing': 'scheduler/tracing-profiling'
};
