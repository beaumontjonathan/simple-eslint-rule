# simple-eslint-rule

A place for simple ESLint Rule examples. Feel free to copy, paste & share.

## `disallow-expect-to-be-defined`

- Disables use of Jest's `expect(..).toBeDefined()` matcher in favour of `expectToBeDefined(..)` which is able to offer intellisense.
- Provides an auto fix which should work in all situations.
- See the code in `./eslint-local-rules`.
