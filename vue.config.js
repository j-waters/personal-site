const { defineConfig } = require('@vue/cli-service')

const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = defineConfig({
    configureWebpack: {
        plugins: [
            new FaviconsWebpackPlugin({
                logo: "./src/assets/logo.svg",
                inject: true,
                mode: "webapp",
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.md$/,
                    type: "asset/source",
                },
            ],
        },
    },
});
