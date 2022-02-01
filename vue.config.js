const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
    configureWebpack: {
        plugins: [
            new FaviconsWebpackPlugin({
                logo: "./src/assets/logo.svg",
                inject: true,
                mode: "webapp",
            }),
        ],
    },
};