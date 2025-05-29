/* eslint-disable  @typescript-eslint/naming-convention */
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import playwrightEslint from 'eslint-plugin-playwright';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,
  { ...playwrightEslint.configs['flat/recommended'], files: ['tests/**'] },
  {
    files: ['tests/**'],
    rules: {
      'playwright/max-expects': ['error', { max: 5 }],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
  },
  {
    ignores: ['node_modules/', 'playwright-report/*', 'test-results/*', 'package-lock.json'],
  },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
      ],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      'no-console': 'warn',
      'require-await': 'off',
      camelcase: 'off',
    },
  },
];
