import { merge } from 'webpack-merge';
import mainConfig from './webpack.config.main.js';

export default async (env, argv) => {
    if (argv.mode === 'development') {
        let { default : devConfig } = await import('./webpack.config.dev.js');

        return merge(mainConfig, devConfig);
    }

    return mainConfig;
};