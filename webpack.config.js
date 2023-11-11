/*!
 * EnduranceTrio WP Child Theme
 *
 * Wordpress Child Theme built with Bulma
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
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { index: path.resolve(__dirname, 'src', 'js', 'template.js') },

  output: { clean: true, filename: 'js/template.js', path: path.resolve(__dirname, 'dist') },

  plugins: [
    new Dotenv({
      systemvars: true,
    }),
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
  ],

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ],
  },

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    open: true,
  },
};
