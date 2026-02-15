import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            $components: resolve(__dirname, './src/components'),
            $layouts: resolve(__dirname, './src/layouts'),
            $uikit: resolve(__dirname, './src/uikit'),
            $types: resolve(__dirname, './src/types'),
            $enums: resolve(__dirname, './src/enums'),
            $assets: resolve(__dirname, './src/assets'),
            $resources: resolve(__dirname, './src/resources'),
            $drawers: resolve(__dirname, './src/drawers'),
            $themes: resolve(__dirname, './src/themes'),
            $providers: resolve(__dirname, './src/providers'),
        },
    },
    plugins: [
        react({
            babel: {
                plugins: [['babel-plugin-react-compiler']],
            },
        }),
    ],
});
