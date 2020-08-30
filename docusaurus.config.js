module.exports = {
  title: 'Reisen',
  url: 'https://ruibin.ch',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.svg',
  organizationName: 'ruibinch', // Usually your GitHub org/user name.
  projectName: 'reisen', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Reisen',
      logo: {
        alt: 'reisen',
        src: 'img/logo.svg',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {},
        blog: {
          showReadingTime: false,
          path: './blog',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
