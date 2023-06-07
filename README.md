
# R2N UI MONOREPO

# Troubleshooting

If this error happens

```
[ ERROR ]  TypeScript: ../../node_modules/@types/jsdom/base.d.ts:194:18
           Property '["Infinity"]' of type 'number' is not assignable to 'number' index type 'Window'.

    L193:  globalThis: DOMWindow;
    L194:  readonly ["Infinity"]: number;
    L195:  readonly ["NaN"]: number;

[ ERROR ]  TypeScript: ../../node_modules/@types/jsdom/base.d.ts:195:18
           Property '["NaN"]' of type 'number' is not assignable to 'number' index type 'Window'.

    L194:  readonly ["Infinity"]: number;
    L195:  readonly ["NaN"]: number;
    L196:  readonly undefined: undefined;

[34:19.6]  build failed in 1.03 s
```
add `// @ts-ignore` in both places https://github.com/DefinitelyTyped/DefinitelyTyped/pull/57466

```
    // @ts-ignore
    readonly ["Infinity"]: number;
    // @ts-ignore
    readonly ["NaN"]: number;
```