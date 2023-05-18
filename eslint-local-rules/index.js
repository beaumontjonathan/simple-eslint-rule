/* eslint-disable */

const { ESLintUtils } = require('@typescript-eslint/utils');
// const tsutils = require('tsutils');

const rule = ESLintUtils.RuleCreator.withoutDocs({
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow expect(..).toBeDefined()',
      // category: 'Possible Errors',
      recommended: false,
    },
    messages: {
      errorMessage: '`expect(..).toBeDefined()` should be avoided because it doesn\'t provide any information to TypeScript\n\nhttps://github.com/DefinitelyTyped/DefinitelyTyped/issues/41179',
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
          // const parserServices = ESLintUtils.getParserServices(context);
          // const checker = parserServices.program.getTypeChecker();

          // // 2. Find the backing TS node for the ES node, then that TS type
          // const originalNode = parserServices.esTreeNodeToTSNodeMap.get(
          //   node,
          // );
          // const nodeType = checker.getTypeAtLocation(originalNode);

          // const expectCallExpression = node.callee.object
          // const expectIdentifier = node.callee.object.callee

          context.report({
            node: node,
            messageId: 'errorMessage',
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
});

module.exports = {
  'disallow-expect-to-be-defined': rule,
};
