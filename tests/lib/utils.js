export const test = (args) => {
  if (!args) {
    throw new SyntaxError('`test` expects args object');
  }
  return Object.assign(args, {
    parserOptions: Object.assign(
      {
        sourceType: 'module',
        ecmaVersion: 9
      },
      args.parserOptions
    )
  });
};
