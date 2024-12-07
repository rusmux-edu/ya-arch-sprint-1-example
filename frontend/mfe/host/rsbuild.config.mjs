import {pluginModuleFederation} from '@module-federation/rsbuild-plugin';
import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';

import {dependencies} from './package.json';

const authUrl = process.env.REACT_APP_AUTH_URL || 'http://localhost:8081';
const tasksUrl = process.env.REACT_APP_TASKS_URL || 'http://localhost:8082';

export default defineConfig({
    source: {
        tsconfigPath: './jsconfig.json',
    },
    server: {
        port: 8080,
        strictPort: true,
    },
    html: {
        title: 'Example',
        meta: {
            viewport: 'width=device-width initial-scale=1.0',
        },
        favicon: './public/favicon.ico',
        appIcon: {
            name: 'Example',
            icons: [
                {src: './public/logo192.png', size: 192},
                {src: './public/logo512.png', size: 512},
            ],
        },
    },
    plugins: [
        pluginReact(),
        pluginModuleFederation({
            name: 'host',
            remotes: {
                auth: `auth@${authUrl}/mf-manifest.json`,
                tasks: `tasks@${tasksUrl}/mf-manifest.json`,
            },
            shared: {
                ...dependencies,
                react: {singleton: true, requiredVersion: dependencies.react},
                'react-dom': {singleton: true, requiredVersion: dependencies['react-dom']},
            },
        }),
    ],
});
