module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.spec.json", "tsconfig.scripts.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint/eslint-plugin", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js", "**/dist/*.js"],
  rules: {
    "prettier/prettier": ["warn", { singleQuote: false }],
    "prefer-const": [
      "warn",
      {
        destructuring: "all",
      },
    ],
    "func-style": [
      "warn",
      "declaration",
      {
        allowArrowFunctions: true,
      },
    ],
    "sort-imports": "off",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "@typescript-eslint/array-type": [
      "warn",
      {
        default: "array-simple",
      },
    ],
    "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
    //Turned off, should be 'warn', but there are a lot of problems that will be fixed one by one later.
    "@typescript-eslint/consistent-type-assertions": [
      "off",
      {
        assertionStyle: "never",
      },
    ],
    // enabled by default - you can and should override this in overrides below
    "@typescript-eslint/explicit-module-boundary-types": [
      "warn",
      // We already have 'no-explicit-any' on - no need to enforce it again
      { allowArgumentsExplicitlyTypedAsAny: true },
    ],
    "@typescript-eslint/no-invalid-void-type": "warn",
    //Turned off, should be 'warn', but there are a lot of problems that will be fixed one by one later.
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-meaningless-void-operator": "warn",
    "@typescript-eslint/no-require-imports": "warn",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-enum-initializers": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-return-this-type": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    "@typescript-eslint/prefer-ts-expect-error": "warn",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/unified-signatures": "warn",
    "@typescript-eslint/no-throw-literal": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: "(^_)",
        args: "all",
        argsIgnorePattern: "(^_)",
      },
    ],
    "array-callback-return": [
      "error",
      {
        allowImplicit: true,
        checkForEach: false,
      },
    ],
    "no-var": "warn",
    "@typescript-eslint/naming-convention": [
      "warn",
      // Override for _id, commonly used in this repo
      {
        selector: ["variableLike", "memberLike"],
        filter: {
          regex: "_id",
          match: true,
        },
        format: null,
      },
      {
        selector: "default",
        format: ["camelCase"],
      },
      // Ignore destructured variables
      {
        selector: ["variable", "parameter"],
        modifiers: ["destructured"],
        format: null,
      },
      // Additional cases for constants, enums
      {
        selector: "variable",
        modifiers: ["const"],
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
      },
      {
        selector: "enum",
        format: ["PascalCase", "UPPER_CASE"],
      },
      {
        selector: ["enumMember", "typeProperty"],
        format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"],
        //
        leadingUnderscore: "allow",
      },
      // Classes/interfaces/types
      {
        selector: ["class", "interface", "typeAlias", "typeParameter"],
        format: ["PascalCase"],
      },
      // Ignore object literal props, e.g. in prisma calls
      {
        selector: "objectLiteralProperty",
        format: null,
      },
      // Support unused variables
      {
        selector: ["variable", "parameter"],
        modifiers: ["unused"],
        leadingUnderscore: "allow",
        format: null,
      },
    ],
    "consistent-return": "warn",
    "default-case-last": "warn",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/dot-notation": [
      "warn",
      {
        allowKeywords: true,
      },
    ],
    eqeqeq: ["error", "always"],
    "grouped-accessor-pairs": "warn",
    "@typescript-eslint/lines-between-class-members": [
      "warn",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "new-cap": [
      "warn",
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    "no-alert": "warn",
    "no-console": "warn",
    "no-bitwise": "warn",
    "no-constructor-return": "error",
    "no-eval": "error",
    "@typescript-eslint/no-implied-eval": "error",
    "no-lone-blocks": "warn",
    "@typescript-eslint/no-loop-func": "warn",
    "no-multi-assign": "warn",
    "no-multi-str": "warn",
    "no-new": "warn",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": [
      "warn",
      {
        props: false,
      },
    ],
    "no-restricted-globals": [
      "warn",
      {
        name: "isFinite",
        message:
          "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
      },
      {
        name: "isNaN",
        message:
          "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
      },
    ],
    "no-proto": "warn",
    "no-extend-native": "warn",
    "no-extra-label": "warn",
    "no-iterator": "warn",
    "no-label-var": "warn",
    "no-script-url": "warn",
    "no-sequences": "warn",
    "no-restricted-properties": [
      "warn",
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "global",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      },
    ],
    "no-self-compare": "error",
    "@typescript-eslint/no-shadow": ["warn"],
    "no-template-curly-in-string": "error",
    "no-undef-init": "warn",
    "no-unneeded-ternary": [
      "warn",
      {
        defaultAssignment: false,
      },
    ],
    "no-unreachable-loop": ["warn"],
    "@typescript-eslint/no-unused-expressions": ["warn"],
    "no-useless-computed-key": "warn",
    "no-useless-concat": "warn",
    "@typescript-eslint/no-useless-constructor": "warn",
    "no-useless-rename": ["warn"],
    "no-useless-return": "warn",
    "no-void": "off",
    "object-shorthand": [
      "warn",
      "always",
      {
        avoidQuotes: true,
      },
    ],
    "operator-assignment": ["warn", "always"],
    "prefer-arrow-callback": ["warn"],
    "prefer-destructuring": [
      "warn",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
    ],
    "prefer-exponentiation-operator": "warn",
    "prefer-numeric-literals": "warn",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": [
      "warn",
      {
        allowEmptyReject: true,
      },
    ],
    "prefer-regex-literals": [
      "warn",
      {
        disallowRedundantWrapping: true,
      },
    ],
    "prefer-template": "warn",
    "spaced-comment": [
      "warn",
      "always",
      {
        line: {
          exceptions: ["-", "+"],
          markers: ["=", "!", "/"],
        },
        block: {
          exceptions: ["-", "+"],
          markers: ["=", "!", ":", "::"],
          balanced: true,
        },
      },
    ],
    strict: ["warn", "never"],
    "symbol-description": "warn",
    yoda: ["warn"],
  },
  overrides: [
    {
      // prisma calls with relations can result in complex return types
      // which may be cumbersome to define explicitly.
      // This override allows type inference in repository files, which interact with prisma.
      files: ["*.repository.ts"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
};
