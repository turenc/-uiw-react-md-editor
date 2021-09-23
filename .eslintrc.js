const path = require("path");
module.exports = {
  //parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  // plugins: ["@typescript-eslint", "react", "import"],
  plugins: ["@typescript-eslint", "react", "import"],
  env: {
    browser : true,
    node : true,
    es6 : true
  },
  extends: [
    // "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    // "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // "prettier/react", // disables react-specific linting rules that conflict with prettier
    // "eslint:recommended",
    // "plugin:react/recommended",
    // "plugin:import/errors",
    // "plugin:import/warnings",
    // "plugin:import/typescript",
    // "react-app"
  ],
  ecmaFeatures: {
    modules: true,
    spread : true,
    restParams : true
  },
  parserOptions: {
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    "no-unused-vars" : 2,
    "no-undef" : 2,
    //https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    "sort-imports": [
      "off",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false
      }
    ],
    "react/jsx-filename-extension": "off",
    "react/jsx-key": "off",
    deprecation: "off",
    "no-inferred-empty-object-type": "off",
    "import/no-named-as-default-member": "off",
    "no-fallthrough": "off",
    "import/no-named-as-default": "off",
    "no-debugger": "off",
    "no-empty": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "react/no-is-mounted": "off",
    "import/no-duplicates": "off",
    restrictedNamedExports: "off",
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/export": "off",
    "import/extensions": "off",
    "no-unused-vars": "off",
    "react/no-find-dom-node": "off",
    "no-unreachable": "off",
    "no-case-declarations": "off",
    "import/no-duplicates": "off",
    "no-undef": "off",
    "no-redeclare": "off",
    "@typescript-eslint/adjacent-overload-signatures": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-tslint-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/brace-style": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/class-literal-property-style": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/comma-spacing": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/default-param-last": "off",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/func-call-spacing": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/init-declarations": "off",
    "@typescript-eslint/keyword-spacing": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/method-signature-style": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-array-constructor": "off",
    "@typescript-eslint/no-base-to-string": "off",
    "@typescript-eslint/no-confusing-non-null-assertion": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-dupe-class-members": "off",
    "@typescript-eslint/no-duplicate-imports": "off",
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-non-null-assertion": "off",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-for-in-array": "off",
    "@typescript-eslint/no-implicit-any-catch": "off",
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-invalid-this": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/no-loop-func": "off",
    "@typescript-eslint/no-loss-of-precision": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-meaningless-void-operator": "off",
    "@typescript-eslint/no-misused-new": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "off",
    "@typescript-eslint/no-unnecessary-type-arguments": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/no-unnecessary-type-constraint": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-unused-vars-experimental": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "@typescript-eslint/padding-line-between-statements": "off",
    "@typescript-eslint/prefer-as-const": "off",
    "@typescript-eslint/prefer-enum-initializers": "off",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/prefer-function-type": "off",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/prefer-literal-enum-member": "off",
    "@typescript-eslint/prefer-namespace-keyword": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/prefer-reduce-type-parameter": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/prefer-return-this-type": "off",
    "@typescript-eslint/prefer-string-starts-ends-with": "off",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/require-array-sort-compare": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/sort-type-union-intersection-members": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/space-infix-ops": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/unified-signatures": "off",
    "prefer-spread": "off",
    "prefer-rest-params": "off",
    "no-var": "off",
    "prefer-const": "off",
    "no-console": "off",
    "react/no-direct-mutation-state": "off",
    "react/no-deprecated": "off",
    "react/no-string-refs": "off",
    "react/require-render-return": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".tsx"]
      }
    ], // also want to use with ".tsx"
    "react/prop-types": "off" // Is this incompatible with TS props type?
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      typescript: {
        project: "./tsconfig.json"
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  }
};
