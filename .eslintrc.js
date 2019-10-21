module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "settings": {
      "react": {
        "pragma": "React",
        "version": "detect"
      }
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
      "prettier/prettier": ["error", {"dowbleQuote": true }],
      '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
    }
};
