import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import biome from 'eslint-config-biome';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {globals: {...globals.browser, ...globals.node}, parser: babelParser},
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
            'import/resolver': {
                typescript: {alwaysTryTypes: true},
            },
            react: {
                version: 'detect',
            },
        },
    },
    {ignores: ['dist', 'compilation.config.js', 'webpack.config.js']},
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    perfectionist.configs['recommended-natural'],
    eslintPluginUnicorn.configs['flat/recommended'],
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    {
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'import/no-dynamic-require': 'warn',
            'import/no-nodejs-modules': 'warn',
            'no-unused-vars': 'warn',
            'perfectionist/sort-imports': 'off',
            'perfectionist/sort-jsx-props': 'off',
            'perfectionist/sort-objects': [
                'warn',
                {
                    objectDeclarations: false,
                },
            ],
            'react-refresh/only-export-components': 'warn',
            'react/jsx-sort-props': [
                'warn',
                {
                    callbacksLast: true,
                },
            ],
            'simple-import-sort/exports': 'error',
            'simple-import-sort/imports': 'error',
            'unicorn/better-regex': 'warn',
            'unicorn/filename-case': [
                'error',
                {
                    cases: {
                        camelCase: true,
                        pascalCase: true,
                    },
                },
            ],
            ...reactHooks.configs.recommended.rules,
        },
    },
    biome,
];
