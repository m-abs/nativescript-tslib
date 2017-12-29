declare const global: any;
import 'tns-core-modules/globals'

if (global.__native) {
  Object.defineProperty(global, '__native', {
    value: global.__native,
  });
}

Object.defineProperty(global, '__extends', {
  value: global.__extends,
});

Object.defineProperty(global, '__decorate', {
  value: global.__decorate,
});

// import tslib to populate global with helpers
import * as tslib from 'tslib';

// Replace tslib __extends and __decorate with nativescript versions
Object.assign(tslib, {
  __extends: global.__extends,
  __decorate: global.__decorate,
});

// Bind the tslib helpers to global scope.
// This is needed when we don't use importHelpers, which
// breaks extending native-classes
for (const fnName of Object.keys(tslib)) {
  if (fnName in global) {
    // Don't override globals __extends and __decorate again.
    continue;
  }

  if (typeof tslib[fnName] === 'function') {
    global[fnName] = tslib[fnName];
  }
}
