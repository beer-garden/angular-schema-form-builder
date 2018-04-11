
import angular from 'angular';

import {sfPostProcessor} from 'postProcessor';
import {sfErrorMessageConfig} from 'errorConfig';
import {sfBuilderService} from 'builder';

let moduleName = 'beer-garden.builder';

angular.module(moduleName, [])
  .run(sfPostProcessor)
  .config(sfErrorMessageConfig)
  .factory('SFBuilderService', sfBuilderService);

export default moduleName;

