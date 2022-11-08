function prohibitsRelativeImportsOnAliasesPattern({
  tsconfigPath = '../tsconfig.json',
} = {}) {
  const { paths } = require(tsconfigPath).compilerOptions;

  const pattern = [];

  Object.keys(paths).forEach((item) => {
    pattern.push(`**/${item.replace('@', '')}/**`);
  });

  return pattern;
}

module.exports = prohibitsRelativeImportsOnAliasesPattern;
