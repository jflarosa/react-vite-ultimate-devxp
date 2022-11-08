module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        'react',
        'react-hooks',
        'eslint-plugin-import',
        '@typescript-eslint'
    ],
    root: true,
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    }
}
