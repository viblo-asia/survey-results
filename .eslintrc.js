module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/recommended'
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'only-multiline'],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'max-len': ['warn', 120],
        'global-require': 'off',
        'no-shadow': 'off',
        'no-param-reassign': 'off',
        'prefer-destructuring': 'off',
        'no-use-before-define': [
            'error',
            {
                functions: false
            }
        ],
        'no-underscore-dangle': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off'
    },
    overrides: {
        files: ['*.vue'],
        rules: {
            indent: 'off',
            'vue/html-indent': ['error', 4],
            'vue/script-indent': [
                'error',
                4,
                {
                    baseIndent: 1,
                    switchCase: 1
                }
            ],
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: 3
                }
            ],
            'vue/require-default-prop': 'off',
            'vue/require-prop-types': 'off'
        }
    }
}
