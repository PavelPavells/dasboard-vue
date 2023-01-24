module.exports = {
  moduleNameMapper: {
    '^(.*\\.svg)\\?inline$': '$1',
  },
  transform: {
    '\\.svg$': 'vue-jest',
    '\\.vue$': 'vue-jest',
  },
};
