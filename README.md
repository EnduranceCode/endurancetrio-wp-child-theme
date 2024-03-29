# EnduranceTrio WP Child Theme

**WordPress Child Theme built with Bulma.**

## Table of Contents

1. [Introduction](#introduction)
2. [Development](#development)
    1. [Technologies](#technologies)
    2. [Installation](#installation)
3. [License](#license)

## Introduction

**EnduranceTrio WP Child Theme** is a [WordPress Child Theme](https://developer.wordpress.org/themes/advanced-topics/child-themes/) built with [Bulma](https://bulma.io/).

This is an *agnostic* WordPress child theme, meaning that it is a child theme that will work with any [WordPress theme](https://developer.wordpress.org/themes/). The only change needed is to adapt the value for the ***Template*** value on the [style.css](./src/style.css) file. Currently, it is being developed as an [Avada](https://avada.com/) child theme.

The style of this child theme is based on the CSS framework [Bulma](https://bulma.io/).

## Development

For the development of **EnduranceTrio WP Child Theme**, [Webpack](https://webpack.js.org/) is used and therefore [node](https://nodejs.org/) (and [npm](https://www.npmjs.com/)) must be installed in the development machine.

### Technologies

#### Tools

**EnduranceTrio WP Child Theme** uses the following [npm](https://www.npmjs.com/) packages for its development:

+ [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin);
+ [css-loader](https://www.npmjs.com/package/css-loader);
+ [dotenv](https://www.npmjs.com/package/dotenv);
+ [eslint](https://www.npmjs.com/package/eslint);
+ [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier);
+ [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier);
+ [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin);
+ [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin);
+ [postcss](https://www.npmjs.com/package/postcss);
+ [postcss-loader](https://www.npmjs.com/package/postcss-loader);
+ [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env);
+ [prettier](https://www.npmjs.com/package/prettier);
+ [sass](https://www.npmjs.com/package/sass);
+ [sass-loader](https://www.npmjs.com/package/sass-loader);
+ [webpack](https://www.npmjs.com/package/webpack);
+ [webpack-cli](https://www.npmjs.com/package/webpack-cli);
+ [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server).

And the following repository as a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules):

+ [endurancetrio-web-components](https://github.com/EnduranceCode/endurancetrio-web-components).

#### Build

**EnduranceTrio WP Child Theme** is built with [Bulma](https://bulma.io/) and therefore, the following [npm](https://www.npmjs.com/) package is used to build **EnduranceTrio WP Child Theme**:

+ [bulma](https://www.npmjs.com/package/bulma);

### Installation

To start developing **EnduranceTrio WP Child Theme**, clone this repository and install the required [npm](https://www.npmjs.com/) packages with the following commands:

    git clone --recursive git@github.com:EnduranceCode/endurancetrio-wp-child-theme.git
    cd endurancetrio-wp-child-theme
    npm install
    cd src/js/submodules/endurancetrio-web-components/
    npm install

To setup the environment variables file, copy the file [`.env.template`](.env.template), save it as `.env.development` and then define the variables values for the ***development*** environment. Repeat the process for the ***production*** environment, naming the correspondent environment variables file as `.env.production`.

To update the [**EnduranceTrio Web Components**](https://github.com/EnduranceCode/endurancetrio-web-components), execute the following command:

    git submodule update --remote
    cd src/js/submodules/endurancetrio-web-components/
    npm install

And then commit the update made with the above command.

## License

**EnduranceTrio WP Child Theme** is licensed under the terms of [GPL-3.0](./LICENSE).
