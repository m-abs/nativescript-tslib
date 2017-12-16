declare const global: any;
import 'tns-core-modules/globals'

// Keep a local copy of the functions
const fns = {
  __extends: global.__extends,
  __decorate: global.__decorate,
};

// import tslib to populate global with helpers
import * as tslib from 'tslib';

// Re-bind the nativescript-helpers to global
Object.assign(global, fns);
Object.assign(tslib, fns);
