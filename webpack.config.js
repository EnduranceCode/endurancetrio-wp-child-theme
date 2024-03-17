/*!
 * EnduranceTrio WP Child Theme
 *
 * WordPress Child Theme built with Bulma
 *
 * Copyright (C) 2023 Ricardo do Canto
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https: //www.gnu.org/licenses/>.
 */

const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const envPath = path.resolve(__dirname, `.env.${ENVIRONMENT}`);
const env = dotenv.config({ path: envPath }).parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: { index: path.resolve(__dirname, 'src', 'js', 'template.js') },

  output: { clean: true, filename: 'js/template.js', path: path.resolve(__dirname, 'dist') },

  plugins: [
    new webpack.DefinePlugin(envKeys),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/template.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/style.css', to: '.' },
        { from: 'src/functions.php', to: '.' },
        { from: 'src/screenshot.png', to: '.' },
      ],
    }),
    new webpack.DefinePlugin(envKeys),
  ],

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
        exclude: /(submodules)/,
      },
      {
        test: /\.(s[ac]|c)ss$/,
        use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }],
        include: [path.resolve(__dirname, 'src/js/submodules')],
      },
    ],
  },

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    open: true,
  },
};
