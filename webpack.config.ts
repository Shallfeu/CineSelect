import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import 'dotenv/config'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode ?? 'development';

    // I always use --env options pattern, but it quite inconvenient
    // so I decided to do with .env right before I send it.
    // const PORT = env.port ?? 3000;
    // const apiUrl = env.apiUrl ?? 'http://localhost:8000';
    // const apiKey = env.apiKey ?? '';

    const PORT = Number(process.env.PORT) ?? 3000;
    const apiUrl =  process.env.API_URL ?? 'http://localhost:8000';
    const apiKey =  process.env.API_KEY ?? '';

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        apiKey,
    });

    return config;
};
