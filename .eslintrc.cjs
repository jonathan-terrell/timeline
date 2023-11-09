/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    env: { node: true, es2022: true },
    root: true,
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier/skip-formatting'],
    parserOptions: {
        ecmaVersion: 'latest'
    }
};
