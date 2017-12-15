# Using importHelpers and tslib with NativeScript

(tslib)[https://www.npmjs.com/package/tslib] is a small runtime library for TypeScript that contains all of the TypeScript helper functions.

Since nativescript uses its own implementation of the helper function `__extend` tslib normally breaks NativeScript-project.

This helps with that problem, you just need three things.

First: install this module like this:
```bash
npm i nativescript-tslib
```

Second: Enable `importHelpers` in your tsconfig like so it looks like this:
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "noEmitHelpers": true,
    "noEmitOnError": true,
    "importHelpers": true,
    "lib": [
      "es6",
      "dom",
      "es2015.iterable"
    ],
    "baseUrl": ".",
    "paths": {
      "*": [
        "./node_modules/tns-core-modules/*",
        "./node_modules/*"
      ]
    }
  },
  "exclude": [
    "node_modules",
    "platforms",
    "**/*.aot.ts"
  ]
}
```

Third: Import `nativescript-tslib` as the first thing in your {N}-application.