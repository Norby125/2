/*
* Public API Surface of my-lib
*/

/**
 * If I comment this line, I get following error message:
 * Error: Symbol MyLibModule declared in C:/repos/LibExportTest/dist/my-lib/lib/my-lib/my-lib.module.d.ts is not exported from my-lib 
 */
export * from './lib/my-lib/public-api';

export * as MyLib from './lib/my-lib/public-api';

import * as _MyLib from './lib/my-lib/public-api';

export namespace MyLib2 {
  export import MyLibModule = _MyLib.MyLibModule;
  export import MyLibComponent = _MyLib.MyLibComponent;
  export import MyLibService = _MyLib.MyLibService;
}


