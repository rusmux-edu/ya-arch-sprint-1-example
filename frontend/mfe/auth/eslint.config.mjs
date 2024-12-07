import localPlugin from '@example/eslint-plugin-local';

/** @type {import('eslint').Linter.Config[]} */
export default [...localPlugin.configs.recommended];
