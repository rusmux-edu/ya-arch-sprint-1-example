import js from '@eslint/js';
import biome from 'eslint-config-biome';
import importPlugin from 'eslint-plugin-import';
import nodePlugin from 'eslint-plugin-n';
import perfectionist from 'eslint-plugin-perfectionist';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ['**/*.{js,ts,mjs,cjs,jsx,tsx}']},
    {ignores: ['dist']},
    {
        languageOptions: {
            globals: {...globals.browser},
            parserOptions: {
                ecmaFeatures: {impliedStrict: true, jsx: true},
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        settings: {
            // otherwise `import` fails to parse some modules
            'import/parsers': {'@typescript-eslint/parser': ['.js', '.ts', 'mjs', 'cjs', 'jsx', '.tsx']},
            'import/resolver': {
                alias: {map: [['@', './src']]},
                typescript: {alwaysTryTypes: true},
            },
            react: {version: 'detect'},
        },
    },
    js.configs.recommended,
    nodePlugin.configs['flat/recommended-script'],
    importPlugin.flatConfigs.recommended,
    perfectionist.configs['recommended-natural'],
    eslintPluginUnicorn.configs['flat/recommended'],
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    reactRefresh.configs.recommended,
    {
        plugins: {
            'react-hooks': reactHooks,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'n/no-missing-import': 'off', // eslint-plugin-import is used
            'perfectionist/sort-imports': 'off',
            'perfectionist/sort-jsx-props': 'off',
            'perfectionist/sort-objects': ['warn', {objectDeclarations: false}],
            'react/jsx-sort-props': ['warn', {callbacksLast: true}],
            'simple-import-sort/exports': 'warn',
            'unicorn/better-regex': 'warn',
            'unicorn/filename-case': ['warn', {cases: {camelCase: true, pascalCase: true}}],
            'unicorn/prevent-abbreviations': 'off',
            ...reactHooks.configs.recommended.rules,
        },
    },
    biome,
    // enable rules turned off by above Biome plugin
    {
        rules: {
            // better sorting than Biome
            'simple-import-sort/imports': 'warn',
        },
    },
];
