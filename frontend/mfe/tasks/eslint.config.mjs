import localPlugin from '@example/eslint-plugin-local';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...localPlugin.configs.recommended,
    {
        files: ['src/utils/api.js'],
        rules: {'n/no-unsupported-features/node-builtins': 'off'},
    },
];
