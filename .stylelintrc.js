module.exports = {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-standard-scss'
    ],
    rules: {
      'selector-class-pattern': null,
      'no-descending-specificity': null,
      'at-rule-no-unknown': null,
      'scss/at-rule-no-unknown': true
    }
  };