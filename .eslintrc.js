module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    "react/jsx-curly-spacing": "off",
    "react/jsx-curly-newline": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "import/imports-first": ["error", "absolute-first"],
      "import/newline-after-import": "error",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": "off",
      "linebreak-style": 0,
      "no-undef": 2,
      "yoda": [1, "always"],
      "quotes": [1, "single"],
      "semi": [2, "always"],
      "no-console": [2, { "allow": ["warn", "error"] }],
      "no-underscore-dangle": 0,
      "jsx-quotes": [1, "prefer-double"],
      "arrow-body-style": 2,
      "arrow-parens": [2, "always"],
      "arrow-spacing": [2, { "before": true, "after": true }],
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/label-has-for": 0,
      "react/jsx-indent": 1,
      "react/jsx-indent-props": 1,
      "react/no-array-index-key": 0,
      "react/forbid-prop-types": 0,
      "react/no-string-refs": 0,
      "react/no-did-mount-set-state": 0,
      "react/no-did-update-set-state": 0,
      "react/jsx-no-target-blank": 0,
      "accessor-pairs": [
        2,
        {
          "getWithoutSet": false,
          "setWithoutGet": true
        }
      ],
      "block-scoped-var": 1,
      "callback-return": [1, ["callback", "done", "next"]],
      "consistent-return": 2,
      "constructor-super": 2,
      "curly": 2,
      "default-case": 1,
      "dot-location": [1, "property"],
      "dot-notation": 1,
      "eqeqeq": [2, "smart"],
      "generator-star-spacing": [2, "before"],
      "global-require": 2,
      "guard-for-in": 1,
      "handle-callback-err": 1,
      "init-declarations": [2, "always"],
      "no-alert": 2,
      "no-confusing-arrow": 0,
      "no-constant-condition": 2,
      "no-caller": 2,
      "no-case-declarations": 1,
      "no-catch-shadow": 1,
      "no-class-assign": 2,
      "no-const-assign": 2,
      "no-delete-var": 2,
      "no-div-regex": 1,
      "no-dupe-class-members": 2,
      "no-else-return": 1,
      "no-labels": 1,
      "no-empty-pattern": 1,
      "no-eq-null": 1,
      "no-eval": 2,
      "no-extend-native": 2,
      "no-extra-bind": 1,
      "no-extra-parens": 0,
      "no-floating-decimal": 1,
      "no-implicit-coercion": [
        1,
        {
          "boolean": false,
          "number": true,
          "string": true
        }
      ],
      "no-implied-eval": 2,
      "no-invalid-this": 0,
      "no-iterator": 2,
      "no-label-var": 2,
      "no-lone-blocks": 1,
      "no-magic-numbers": 0,
      "no-mixed-requires": 1,
      "no-multi-spaces": 2,
      "no-multi-str": 1,
      "no-native-reassign": 2,
      "no-new-func": 2,
      "no-new-require": 2,
      "no-new-wrappers": 2,
      "no-new": 2,
      "no-octal-escape": 2,
      "no-param-reassign": 0,
      "no-path-concat": 2,
      "no-process-env": 0,
      "no-process-exit": 2,
      "no-proto": 2,
      "no-redeclare": 2,
      "no-restricted-modules": 0,
      "no-return-assign": 0,
      "no-script-url": 2,
      "no-self-compare": 2,
      "no-shadow-restricted-names": 2,
      "no-shadow": 1,
      "no-sync": 1,
      "no-this-before-super": 2,
      "no-throw-literal": 2,
      "no-undef-init": 0,
      "no-undefined": 0,
      "no-unexpected-multiline": 2,
      "no-unused-expressions": 2,
      "no-unused-vars": 1,
      "no-use-before-define": 2,
      "no-useless-call": 2,
      "no-useless-concat": 2,
      "no-var": 2,
      "no-void": 1,
      "no-warning-comments": [
        1,
        {
          "terms": ["TODO", "FIXME"],
          "location": "start"
        }
      ],
      "no-with": 1,
      "object-shorthand": [1, "always"],
      "prefer-arrow-callback": 1,
      "prefer-spread": 1,
      "prefer-template": 1,
      "radix": 1,
      "require-yield": 2,
      "strict": [2, "global"],
      "vars-on-top": 2,
      "wrap-iife": [2, "outside"],
      "require-jsdoc": [
        1,
        {
          "require": {
            "FunctionDeclaration": false,
            "MethodDefinition": false,
            "ClassDeclaration": false
          }
        }
      ],
      "array-bracket-spacing": [1, "always"],
      "block-spacing": [1, "always"],
      "brace-style": [
        1,
        "1tbs",
        {
          "allowSingleLine": true
        }
      ],
      "camelcase": [0, {"properties": "never"}],
      "comma-spacing": [
        1,
        {
          "before": false,
          "after": true
        }
      ],
      "comma-style": [1, "last"],
      "comma-dangle": [1, "only-multiline"],
      "computed-property-spacing": [1, "never"],
      "consistent-this": [1, "self"],
      "eol-last": 1,
      "func-names": 0,
      "func-style": [
        1,
        "declaration",
        {
          "allowArrowFunctions": true
        }
      ],
      "id-length": [
        1,
        {
          "min": 1,
          "max": 40,
          "exceptions": ["i", "x", "y", "e", "j", "_", "$"]
        }
      ],
      "indent": 0,
      "lines-around-comment": 0,
      "max-depth": [1, 8],
      "max-len": [
        1,
        {
          "code": 300,
          "tabWidth": 2,
          "ignoreStrings": true,
          "ignoreUrls": true,
          "ignoreTemplateLiterals": true
        }
      ],
      "max-nested-callbacks": [1, 8],
      "max-params": [1, 8],
      "new-cap": 1,
      "new-parens": 1,
      "no-array-constructor": 1,
      "no-bitwise": 0,
      "no-continue": 0,
      "no-inline-comments": 0,
      "no-lonely-if": 1,
      "no-loop-func": 0,
      "no-mixed-spaces-and-tabs": 1,
      "no-multiple-empty-lines": 1,
      "no-negated-condition": 0,
      "no-nested-ternary": 1,
      "no-new-object": 1,
      "no-plusplus": 0,
      "no-spaced-func": 1,
      "no-ternary": 0,
      "no-trailing-spaces": 1,
      "no-unneeded-ternary": 1,
      "object-curly-spacing": "off",
      "one-var": 0,
      "operator-assignment": [1, "never"],
      "operator-linebreak": [1, "after"],
      "padded-blocks": [1, "never"],
      "quote-props": [1, "consistent-as-needed"],
      "react/jsx-props-no-spreading": "off",
      "semi-spacing": [
        1,
        {
          "before": false,
          "after": true
        }
      ],
      "sort-vars": 0,
      "keyword-spacing": 1,
      "space-before-blocks": [1, "always"],
      "space-before-function-paren": [
        1,
        {
          "anonymous": "always",
          "named": "never"
        }
      ],
      "space-in-parens": [1, "never"],
      "space-infix-ops": [
        1,
        {
          "int32Hint": true
        }
      ],
      "space-unary-ops": 2,
      "spaced-comment": [1, "always"],
      "wrap-regex": 1
  },
  'globals': {
    "fetch": false
  }
}