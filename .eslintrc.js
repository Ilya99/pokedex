module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["standard", "standard-react"],
  "globals": {
    PRODUCTION: false
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": [
      "warn",
      "windows"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-unused-vars": [
      "warn",
      {
        "varsIgnorePattern": "config",
        "args": "after-used",
        "vars": "all"
      }
    ],
    "arrow-parens": ["error", "as-needed"],
    "camelcase": "warn",
    "vars-on-top": "warn",
    "no-console": "warn"
  }
}
