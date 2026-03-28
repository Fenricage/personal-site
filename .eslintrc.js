module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'jsx-a11y',
        'import',
        'boundaries',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        'boundaries/root-path': 'src',
        'boundaries/elements': [
            { type: 'app', pattern: 'app/**/*' },
            { type: 'shared', pattern: 'shared/**/*' },
            { type: 'entities', pattern: 'entities/**/*' },
            { type: 'features', pattern: 'features/**/*' },
            { type: 'widgets', pattern: 'widgets/**/*' },
            { type: 'pages', pattern: 'pages/**/*' },
            { type: 'templates', pattern: 'templates/**/*' },
        ],
        'boundaries/ignore': [
            '**/__generated__/**',
            '**/locales/**',
        ],
    },
    rules: {
        // Отключаем правило для неиспользуемого React импорта
        'no-unused-vars': 'off', // отключаем базовое правило
        '@typescript-eslint/no-unused-vars': ['error', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^React$', // игнорируем переменную React
        }],

        // Правила для React
        'react/react-in-jsx-scope': 'off', // для React 17+ не требуется
        'react/prop-types': 'off', // используем TypeScript для проверки типов
        'react/display-name': 'off',

        // Дополнительные полезные правила
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'warn',

        // Правила для импортов
        'import/order': ['error', {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            pathGroups: [
                { pattern: '@/**', group: 'internal', position: 'before' },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
        }],
        'boundaries/dependencies': ['error', {
            default: 'allow',
            rules: [
                {
                    from: { type: 'shared' },
                    disallow: { to: { type: ['entities', 'features', 'widgets', 'app', 'pages', 'templates'] } },
                },
                {
                    from: { type: 'entities' },
                    disallow: { to: { type: ['features', 'widgets', 'app', 'pages', 'templates'] } },
                },
                {
                    from: { type: 'features' },
                    disallow: { to: { type: ['widgets', 'app', 'pages', 'templates'] } },
                },
                {
                    from: { type: 'widgets' },
                    disallow: { to: { type: ['app', 'pages', 'templates'] } },
                },
                {
                    from: { type: 'app' },
                    disallow: { to: { type: ['entities', 'widgets', 'pages', 'templates'] } },
                },
                {
                    from: { type: 'pages' },
                    disallow: { to: { type: ['app'] } },
                },
                {
                    from: { type: 'templates' },
                    disallow: { to: { type: ['app'] } },
                },
            ],
        }],
        'boundaries/element-types': 'off',
        'boundaries/entry-point': 'off',
        'boundaries/external': 'off',
        'boundaries/no-unknown': 'off',
        'boundaries/no-unknown-files': 'off',
        'boundaries/no-ignored': 'off',
        'boundaries/no-private': 'off',
        'import/no-unresolved': 'error',
        'react/no-unescaped-entities': 'error',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
    },
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
}