const path = require('path')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = () => {
  return {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(js|tx)x?$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              presets: [
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
                '@babel/preset-env',
                '@babel/preset-typescript',
              ],
              plugins: []
            },
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
