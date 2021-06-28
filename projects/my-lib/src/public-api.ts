/*
* Public API Surface of my-lib
*/


export * as MyLib from './lib/public-api';

import * as _MyLib from './lib/public-api';

export namespace MyLib2 {
  export import MyLibModule = _MyLib.MyLibModule;
  export import MyLibComponent = _MyLib.MyLibComponent;
  export import MyLibService = _MyLib.MyLibService;
}


