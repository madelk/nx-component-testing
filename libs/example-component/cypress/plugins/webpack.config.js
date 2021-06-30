const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
module.exports = (butts) => {
  return {
    mode: 'development',
    module: {
      rules: [{
        test: /\.css$|\.scss$|\.sass$|\.less$|\.styl$/,
        use: [
          {
            loader: require.resolve("style-loader"),
          },
          {
            loader: require.resolve("css-loader"),
          },
          {
            loader: require.resolve("sass-loader")
          },
        ],
      },
        {
          test: /\.(ts|tsx)$/,
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            "plugins": [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ],
          },
        },
      ],
    },
    resolve: {
      extensions: ['.jsx', '.ts', '.tsx', '.mjs', '...'],
      plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, '../../tsconfig.json') })],
    },
  }
}
