"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildWebpackConfig = void 0;
var buildPlugins_1 = require("./buildPlugins");
var buildLoaders_1 = require("./buildLoaders");
var buildResolvers_1 = require("./buildResolvers");
var buildDevServer_1 = require("./buildDevServer");
function buildWebpackConfig(options) {
    var paths = options.paths, mode = options.mode, isDev = options.isDev;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: (0, buildPlugins_1.buildPlugins)(options),
        module: {
            rules: (0, buildLoaders_1.buildLoaders)(options),
        },
        resolve: (0, buildResolvers_1.buildResolvers)(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? (0, buildDevServer_1.buildDevServer)(options) : undefined,
    };
}
exports.buildWebpackConfig = buildWebpackConfig;
