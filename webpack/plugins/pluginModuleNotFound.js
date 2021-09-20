const fs = require('fs');
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');

const config = resolveApp('.')

export const moduleNotFoundPlugin = new ModuleNotFoundPlugin(config);
