module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
      rules: {
        "selector-class-pattern": null,
        "at-rule-no-unknown": null,
        "selector-pseudo-class-no-unknown": null,
        "property-no-unknown": null,
        "rule-empty-line-before": ["always", { ignore: ["first-nested"] }],
        "at-rule-empty-line-before": ["always", { ignore: ["first-nested"] }],
        "value-keyword-case": null,
        "no-descending-specificity": null,
        "block-no-empty": null,
        "color-function-notation": null,
        "alpha-value-notation": null,
        "declaration-block-no-redundant-longhand-properties": null,
      },
    },
  ],
};
