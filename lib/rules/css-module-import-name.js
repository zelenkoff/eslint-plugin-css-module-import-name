const isCssModule = (raw) => {
  const splited = raw.split('.');

  return splited.at(-1) === 'css' && splited.at(-2) === 'module';
};

export const cssModuleImportName = {
  meta: {
    type: 'suggestion',
    docs: {},
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: {
          message: {
            type: 'string'
          },
          validName: {
            type: 'string'
          }
        }
      }
    ]
  },
  create(context) {
    const references = [];

    const message = context.options.length > 0 ? context.options[0].message : '';

    return {
      'Program:exit'() {
        for (const node of references) {
          context.report({
            node,
            message,
            fix(fixer) {
              return fixer.replaceText(node, 's');
            }
          });
        }
      },
      ImportDeclaration(node) {
        if (!isCssModule(node.source.value)) return;

        const name = node.specifiers[0].local.name;

        if (context.options.length === 0) return;
        if (name === context.options[0].validName) return;

        const moduleReferences = context.getDeclaredVariables(node)[0].references;

        moduleReferences.forEach((ref) => {
          references.push(ref.identifier);
        });

        references.push(node.specifiers[0]);
      }
    };
  }
};
