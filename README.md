# tslib for nativescript

[tslib](https://www.npmjs.com/package/tslib) is a runtime library for [TypeScript](http://www.typescriptlang.org/) that contains all of the TypeScript helper functions.

Unfortunately just importing `tslib` breaks NativeScript projects.

This plugin solves this issue.

## Usage

***Install module***
```bash
npm i --save nativescript-tslib
```

***Edit: app/main.ts***
```typescript
import 'nativescript-tslib'; // <-- Add this

// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from 'nativescript-angular/platform';

import { AppModule } from './app.module';

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
```

You can enable `importHelpers` in `tsconfig.json`, but you might break your app if you extend native-classes.

## Alternative

You can set `tsconfig.json` target to es6, but when you can't extend native classes in your project.
