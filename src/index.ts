declare const global: any;
import 'tns-core-modules/globals'

// Keep a local copy of the functions
const __extends = global.__extends;
const __decorator = global.__decorator;

// import tslib to populate global with helpers
import 'tslib';

// Re-bind the nativescript-helpers to global
global.__extends = __extends;
global.__decorator = __decorator;
