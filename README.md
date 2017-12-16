# Using importHelpers and tslib with NativeScript

(tslib)[https://www.npmjs.com/package/tslib] is a small runtime library for TypeScript that contains all of the TypeScript helper functions.
Unfortunately `tslib`'s `__extend`-function breaks NativeScript-projects by replacing NativeScript's version of the function.

To workaround that issue, you can use this module (or you can target es6 in your `tsconfig.json`).

***Install module***
```bash
npm i --save nativescript-tslib
```

***app/main.ts***
```typescript
import 'nativescript-tslib';

// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from 'nativescript-angular/platform';

import { AppModule } from './app.module';

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
```
