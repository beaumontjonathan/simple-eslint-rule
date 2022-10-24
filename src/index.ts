export function safeAdd(x: number, y: number): number;
export function safeAdd(x: number | undefined, y: number | undefined): number | undefined;
export function safeAdd(x: number | undefined, y: number | undefined): number | undefined {
  if (typeof x !== 'number' || typeof y !== 'number') return undefined
  return x + y;
}
