/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const webpack = require('@cypress/webpack-preprocessor');

require('dotenv-flow').config();
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  config.env.NODE_ENV = process.env.NODE_ENV;

  require('@cypress/code-coverage/task')(on, config);
  on('file:preprocessor', (file) => {
    return webpack({
      webpackOptions: {
        resolve: {
          extensions: ['.js', '.json', '.vue'],
          alias: {
            '@': path.resolve('./src')
          }
        },
        module: {
          rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            },
            {
              test: /\.less$/,
              use: [
                'vue-style-loader',
                'css-loader',
                'less-loader'
              ]
            }
          ]
        },
        plugins: [
          new VueLoaderPlugin(),
        ]
      },
      watchOptions: {}
    })(file);
  });

  return config;
};
