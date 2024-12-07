import fs from 'node:fs';

import config from './config.js';

const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

export default {
    meta: {
        name: pkg.name,
        version: pkg.version,
    },
    configs: {recommended: config},
};
