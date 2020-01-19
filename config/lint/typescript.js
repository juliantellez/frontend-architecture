/**
 * see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */

const rules = {
    /**
     * Using the any type defeats the purpose of using TypeScript
     */
    "@typescript-eslint/no-explicit-any": ["warn"],
    /**
     * Ban JS Primitives in favor of TS types
     * e.g. Number -> number, Boolean -> boolean
     */
    "@typescript-eslint/ban-types": ["error"],
    /**
     * types and class member ordering makes them
     * easier to read, navigate and edit.
     */
    "@typescript-eslint/member-ordering": ["error"],
    /**
     * No deleting computed keys
     * e.g
     * const container = {foo: 'baz'}
     * delete foo
     */
    "@typescript-eslint/no-dynamic-delete": ["error"],
    /**
     * No meaningless interfaces
     */
    "@typescript-eslint/no-empty-interface": ["error"],
    /**
     * Only one non-null assertion
     *
     * e.g.
     * const foo: { bar: number } | null = null;
     * const bar = foo!!!.bar;
     */
    "@typescript-eslint/no-extra-non-null-assertion": ["error"],
    /**
     * No iteration in array like objects
     */
    "@typescript-eslint/no-for-in-array": ["error"],
    /**
     * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
     */
    "@typescript-eslint/prefer-optional-chain": ["error"],
    /**
     * Empty functions are usually a mistake
     */
    "@typescript-eslint/no-empty-function": ["error"],
    /**
     * Magic numbers should be replaced by named constants
     */
    "@typescript-eslint/no-magic-numbers": ["error"],
    /**
     * Eliminate unused expressions which have no effect on the state of the program
     */
    "@typescript-eslint/no-unused-expressions": ["error"]
};

module.exports = rules;

/**
 * Using non-null assertions after an optional chain expression is wrong,
 * and introduces a serious type safety hole into your code.
 *
 * e.g.
 * foo?.bar!.baz;
 */
// "@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],
/**
 * Promises should always handle errors
 */
// "@typescript-eslint/no-floating-promises": ["error"],
// "@typescript-eslint/no-misused-promises": ["error"],
// "@typescript-eslint/explicit-module-boundary-types": ["error"],
// "@typescript-eslint/naming-convention": ["error"],
/**
 * Prevents conditionals where the type is always truthy or always falsy
 */
// "@typescript-eslint/no-unnecessary-condition": ["error"],
/**
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */
// "@typescript-eslint/prefer-nullish-coalescing": ["error"]
