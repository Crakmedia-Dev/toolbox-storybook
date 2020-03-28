module.exports = {
  stories: ['../src/**/stories.[tj]s[x]'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register'
  ]
}
