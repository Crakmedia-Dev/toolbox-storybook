#! /usr/bin/env node
const storybook = require('@storybook/react/standalone');

storybook({
  mode: 'dev',
  port: 9009,
  configDir: '.storybook/'
});
