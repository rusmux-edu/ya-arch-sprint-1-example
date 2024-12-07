import eslintPlugin from 'eslint-plugin-eslint-plugin';
import globals from 'globals';

import localPlugin from './src/index.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...localPlugin.configs.recommended,
    eslintPlugin.configs['flat/recommended'],
    {
        languageOptions: {
            globals: {...globals.node},
        },
    },
];
