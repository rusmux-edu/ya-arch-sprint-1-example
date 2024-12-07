import {pluginModuleFederation} from '@module-federation/rsbuild-plugin';
import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';

import {dependencies} from './package.json';

const hostUrl = process.env.REACT_APP_HOST_URL || 'http://localhost:8080';

export default defineConfig({
    source: {
        tsconfigPath: './jsconfig.json',
    },
    server: {
        port: 8082,
        strictPort: true,
        headers: {'Access-Control-Allow-Origin': hostUrl},
    },
    output: {
        assetPrefix: 'auto',
    },
    plugins: [
        pluginReact(),
        pluginModuleFederation({
            name: 'tasks',
            exposes: {
                './TaskList': './src/components/TaskList.js',
            },
            shared: {
                ...dependencies,
                react: {singleton: true, requiredVersion: dependencies.react},
                'react-dom': {singleton: true, requiredVersion: dependencies['react-dom']},
            },
        }),
    ],
});
