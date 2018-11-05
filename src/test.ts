// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
// - '/\.spec\.ts$/' - Run all the specs files that are there in your project source directory.
//                     We can run test on specific component (using its specs file) like this: '/menu\.component\.spec\.ts$/'
const context = require.context('./', true, /menu\.component\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
