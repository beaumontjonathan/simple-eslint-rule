// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line no-undef, local-rules/disallow-expect-to-be-defined
globalThis.expectToBeDefined = (value) => expect(value).toBeDefined();
