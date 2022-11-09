const prohibitsRelativeImportsOnAliases = require("./config/prohibitsRelativeImportsOnAliases.cjs");


module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
    "settings": {
        "react": {
            "pragma": "React",  // Pragma to use, default to "React"
            "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
            "version": "detect" // React version. "detect" automatically picks the version you have installed.
        }
    },
    overrides: [],
    ignorePatterns: ["*.html"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: `${__dirname}/tsconfig.json`,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    parser: "@typescript-eslint/parser",
    plugins: [
        "react",
        "react-hooks",
        "eslint-plugin-import",
        "@typescript-eslint"
    ],
    root: true,
    rules: {
        "no-restricted-imports": [
            "error",
            {
                patterns: [
                    "src/**",
                    ...prohibitsRelativeImportsOnAliases()
                ]
            }
        ],
        // React version 17 and beyond doesn't need to import React
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                varsIgnorePattern: "^_",
                ignoreRestSiblings: true
            }
        ],
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal"],
                pathGroups: [
                    {
                        pattern: "react",
                        group: "external",
                        position: "before"
                    }
                ],
                pathGroupsExcludedImportTypes: ["react"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true
                }
            }
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "variable",
                types: ["boolean"],
                format: ["PascalCase"],
                prefix: [
                    "is",
                    "should",
                    "has",
                    "have",
                    "can",
                    "did",
                    "will",
                    "are",
                    "disabled",
                    "disable",
                    "enable",
                    "display",
                    "show",
                    "hide",
                    "open",
                    "fullWidth",
                    "fullScreen",
                    "loading",
                    "error",
                    "keepMounted",
                    "use",
                    "active",
                    "multiple"
                ]
            },
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: false
                }
            },
            {
                selector: "typeAlias",
                format: ["PascalCase"],
                custom: {
                    regex: "^T[A-Z]",
                    match: false
                }
            },
            {
                selector: "typeParameter",
                format: ["PascalCase"]
            },
            {
                selector: "enum",
                format: ["PascalCase"],
                suffix: ["Enum"]
            }
        ]
    }
};
