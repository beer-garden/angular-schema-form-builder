
import {sfPostProcessor} from 'postProcessor';
import {sfErrorMessageConfig} from 'errorConfig';
import {sfBuilderService} from 'builder';

// your library here
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['angular'], factory);
  } else if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    // CommonJS support (for us webpack/browserify/ComponentJS folks)
    module.exports = factory(require('angular'));
  } else {
    // in the case of no module loading system
    // then don't worry about creating a global
    // variable like you would in normal UMD.
    // It's not really helpful... Just call your factory
    return factory(root.angular);
  }
}(this, function (angular) {
  'use strict';

  var moduleName = 'beergarden-builder';
  var mod = angular.module(moduleName, []);

  mod.run(sfPostProcessor);
  mod.config(sfErrorMessageConfig);
  mod.factory('SFBuilderService', sfBuilderService);

  return moduleName;
}));

