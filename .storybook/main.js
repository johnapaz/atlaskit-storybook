const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = {
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic/com/storybook",
    "@storybook/addon-interactions",
    "@atlaskit/storybook-addon-design-system",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config, { configType }) => {
    // Add SCSS loader
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    // Add DefinePlugin
    config.plugins.push(
      new DefinePlugin({
        'process.env.CUSTOM_VARIABLE': JSON.stringify(process.env.CUSTOM_VARIABLE),
      })
    );

    // Optionally add aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../src/components'),
    };

    return config;
  },
};
