/* eslint-disable */

/** @type {import('eslint').Rule.RuleModule} */
const rule = {
  meta: {
    docs: {
      description: 'disallow expect(..).toBeDefined()',
      category: 'Possible Errors',
      recommended: false,
    },
    schema: [],
    fixable: 'code',
  },
  create: function (context) {
    return {
      CallExpression: function (node) {
        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.property.type === 'Identifier' &&
          node.callee.property.name === 'toBeDefined' &&
          node.callee.object.type === 'CallExpression' &&
          node.callee.object.callee.type === 'Identifier' &&
          node.callee.object.callee.name === 'expect' &&
          node.callee.object.arguments.length === 1 &&
          node.callee.object.arguments[0]
        ) {
          const expectCallExpression = node.callee.object
          const expectIdentifier = node.callee.object.callee

          context.report({
            node: node,
            message: '`expect(..).toBeDefined()` should be avoided because it doesn\'t provide any information to TypeScript\n\nhttps://github.com/DefinitelyTyped/DefinitelyTyped/issues/41179',
            fix: (fixer) => {
              if (!expectCallExpression.range || !expectIdentifier.range || !node.range) {
                return null;
              }

              return [
                fixer.removeRange([expectCallExpression.range[1], node.range[1]]),
                fixer.replaceTextRange(expectIdentifier.range, 'expectToBeDefined')
              ];
            },
          });
        }
      },
    };
  },
};

module.exports = {
  'disallow-expect-to-be-defined': rule,
};
