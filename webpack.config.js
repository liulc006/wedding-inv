module.exports = {
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
        {
          test: /\.png/,
          type: "asset/resource",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(gif|png|jpe?g|svg|xml|mp3)$/i,
          loader: 'file-loader'
        }
      ],
    },
  };