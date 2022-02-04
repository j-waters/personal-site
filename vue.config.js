const { defineConfig } = require("@vue/cli-service");

const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default


module.exports = defineConfig({
    configureWebpack: {
        plugins: [
            new FaviconsWebpackPlugin({
                logo: "./src/assets/logo.svg",
                inject: true,
                mode: "webapp",
            }),
            new ImageminPlugin({
                disable: process.env.NODE_ENV !== 'production', // Disable during development
                pngquant: {
                    quality: '95-100'
                }
            })
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
