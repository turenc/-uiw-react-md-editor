import { ProvidePlugin } from "webpack";

const config = {
  process: "process/browser"
};

export const providePlugin = new ProvidePlugin(config);
