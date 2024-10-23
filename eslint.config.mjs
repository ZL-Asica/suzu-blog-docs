import { zlAsicaTsConfig } from 'eslint-config-zl-asica';

export default [
  ...zlAsicaTsConfig,

  {
    ignores: [
      'docs/.vitepress/dist',
      'docs/.vitepress/cache',
      'prettier.config.cjs',
    ],
    rules: {},
  },
];
