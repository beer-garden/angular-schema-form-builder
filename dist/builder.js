(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["builder"] = factory(require("angular"), require("lodash"));
	else
		root["builder"] = factory(root["angular"], root["lodash"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_angular__, __WEBPACK_EXTERNAL_MODULE_lodash__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./module.js":
/*!*******************!*\
  !*** ./module.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"angular\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var postProcessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postProcessor */ \"./src/postProcessor.js\");\n/* harmony import */ var errorConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! errorConfig */ \"./src/errorConfig.js\");\n/* harmony import */ var service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! service */ \"./src/service.js\");\n\n\n\n\n\n\n\nvar moduleName = 'beer-garden.builder';\n\nangular__WEBPACK_IMPORTED_MODULE_0___default.a.module(moduleName, []).run(postProcessor__WEBPACK_IMPORTED_MODULE_1__[\"sfPostProcessor\"]).config(errorConfig__WEBPACK_IMPORTED_MODULE_2__[\"sfErrorMessageConfig\"]).factory('SFBuilderService', service__WEBPACK_IMPORTED_MODULE_3__[\"sfBuilderService\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (moduleName);\n\n//# sourceURL=webpack://%5Bname%5D/./module.js?");

/***/ }),

/***/ "./src/builder.js":
/*!************************!*\
  !*** ./src/builder.js ***!
  \************************/
/*! exports provided: buildCommonSF, buildModelSF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildCommonSF\", function() { return buildCommonSF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildModelSF\", function() { return buildModelSF; });\n/* harmony import */ var _parameterBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameterBuilder */ \"./src/parameterBuilder.js\");\n\n\n\n/**\n * buildCommonSF - * Builds the schema and form common to all commands.\n * @param  {Object} system  beer-garden system object.\n * @param  {Object} command beer-gardne command object.\n * @return {Object}         Schema-form object that is common to all commands.\n */\nfunction buildCommonSF(system, command) {\n  // SCHEMA\n  var instanceNames = [];\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = system.instances[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var instance = _step.value;\n\n      instanceNames.push(instance.name);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  var commonSchema = {\n    'system': {\n      'title': 'System Name', 'type': 'string',\n      'default': system.name, 'required': true\n    },\n    'system_version': {\n      'title': 'System Version', 'type': 'string',\n      'default': system.version, 'required': true\n    },\n    'command': {\n      'title': 'Command Name', 'type': 'string',\n      'default': command.name, 'required': true\n    },\n    'comment': {\n      'title': 'Comment', 'type': 'string',\n      'default': '', 'required': false,\n      'maxLength': 140,\n      'validationMessage': 'Maximum comment length is 140 characters'\n    },\n    'output_type': {\n      'title': 'Output Type', 'type': 'string',\n      'default': command.output_type, 'required': false\n    },\n    'instance_name': {\n      'title': 'Instance Name', 'type': 'string',\n      'required': true\n    }\n  };\n\n  if (system.instances.length == 1) {\n    commonSchema['instance_name']['default'] = instanceNames[0];\n    commonSchema['instance_name']['readonly'] = true;\n  }\n\n  // FORM\n  var instanceHelp = {\n    'type': 'help',\n    'helpvalue': '<div uib-alert class=\"alert alert-warning m-b-0\">Instance is not RUNNING, ' + 'but you can still \"Make Request\"</div><br>',\n    'condition': 'checkInstance(instance_name)'\n  };\n\n  var systemSection = {\n    'type': 'section',\n    'htmlClass': 'row',\n    'items': [{\n      'key': 'system', 'feedback': false, 'disableSuccessState': true,\n      'disableErrorState': true, 'readonly': true, 'required': true,\n      'htmlClass': 'col-md-3'\n    }, {\n      'key': 'system_version', 'feedback': false, 'disableSuccessState': true,\n      'disableErrorState': true, 'readonly': true, 'required': true,\n      'htmlClass': 'col-md-3'\n    }, {\n      'key': 'command', 'feedback': false, 'disableSuccessState': true,\n      'disableErrorState': true, 'readonly': true, 'required': true,\n      'htmlClass': 'col-md-3'\n    }, {\n      'key': 'instance_name', 'feedback': false, 'disableSuccessState': true,\n      'htmlClass': 'col-md-3', 'type': 'select', 'choices': { 'titleMap': instanceNames }\n    }]\n  };\n\n  var hr = { 'type': 'help', 'helpvalue': '<hr>' };\n  var comment = {\n    'key': 'comment', 'type': 'textarea', 'feedback': true, 'disableSuccessState': false,\n    'disableErrorState': false, 'readonly': false, 'required': false, 'fieldHtmlClass': 'm-b-3'\n  };\n\n  var buttonSection = {\n    'type': 'section',\n    'htmlClass': 'row',\n    'items': [{\n      'type': 'button', 'style': 'btn-warning w-100 ', 'title': 'Reset',\n      'onClick': 'reset(ngform, model, system, command.data)', 'htmlClass': 'col-md-2'\n    }, {\n      'type': 'submit', 'style': 'btn-primary w-100',\n      'title': 'Make Request', 'htmlClass': 'col-md-10'\n    }]\n  };\n\n  var commonForm = {\n    'type': 'fieldset', 'items': [hr, systemSection, comment, instanceHelp, buttonSection]\n  };\n\n  return {\n    schema: commonSchema,\n    form: commonForm\n  };\n};\n\n/**\n * buildModelSf - Build a schema and form for an object model.\n * @param  {Object} model     Parameter Model.\n * @param  {string} parentKey The key representing this model's parent.\n * @return {Object}           Schema-Form object for use by angular-schema-form.\n */\nfunction buildModelSF(model, parentKey) {\n  var paramSchemas = {};\n  var paramForms = [];\n\n  for (var i = 0, len = model.parameters.length; i < len; i++) {\n    var parameter = model.parameters[i];\n    var key = parameter.key;\n    var sf = Object(_parameterBuilder__WEBPACK_IMPORTED_MODULE_0__[\"buildParameterSF\"])(parameter, parentKey);\n\n    paramSchemas[key] = sf['schema'];\n    paramForms.push(sf['form']);\n  }\n\n  return {\n    schema: paramSchemas,\n    form: paramForms\n  };\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/builder.js?");

/***/ }),

/***/ "./src/dynamicChoices.js":
/*!*******************************!*\
  !*** ./src/dynamicChoices.js ***!
  \*******************************/
/*! exports provided: setDynamicChoices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDynamicChoices\", function() { return setDynamicChoices; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n\n\n// List of fields that shouldn't have `parentKey.` prefixed if they're used as\n// an updateOn\nvar specialFields = ['instance_name'];\n\nfunction setDynamicChoices(schema, form, parameter, parentKey) {\n  // First determine what form element to use\n  if (parameter.choices.display) {\n    if (parameter.choices.display === 'typeahead') {\n      form['type'] = 'typeahead';\n    } else if (parameter.choices.display === 'select') {\n      form['type'] = 'select';\n    } else {\n      form['type'] = 'typeahead';\n      console.error('Don\\'t know how to render choices type \\'' + parameter.choices.type + '\\', defaulting to \\'typeahead\\' ' + '(valid options are \\'typeahead\\' and \\'select\\')');\n    }\n  } else {\n    form['type'] = 'typeahead';\n  }\n\n  // Then determine if it should be strict (only really affects typeaheads)\n  if (parameter.choices.strict) {\n    form['strict'] = true;\n  }\n\n  // Then populate the choices\n  // Simple case - static list of choices\n  if (parameter.choices.type === 'static') {\n    form['choices'] = { titleMap: parameter.choices.value };\n\n    if (parameter.choices.details && parameter.choices.details.key_reference) {\n      var field = fieldPath(parameter.choices.details.key_reference, parentKey);\n\n      form['choices']['updateOn'] = field;\n      form['choices']['transforms'] = [{ lookupField: field }];\n    }\n  } else if (parameter.choices.type === 'url') {\n    form['choices'] = {\n      updateOn: [],\n      httpGet: {\n        url: parameter.choices.details['address'],\n        queryParameterFields: {}\n      }\n    };\n\n    for (var i = 0; i < parameter.choices.details['args'].length; i++) {\n      var pair = parameter.choices.details['args'][i];\n      var _field = fieldPath(pair[1], parentKey);\n\n      form['choices']['updateOn'].push(_field);\n      form['choices']['httpGet']['queryParameterFields'][pair[0]] = _field;\n    }\n  } else if (parameter.choices.type === 'command') {\n    form['choices'] = {\n      updateOn: ['instance_name'],\n      callback: {\n        function: 'createRequestWrapper',\n        arguments: [{\n          command: parameter.choices.details['name'],\n          parameterNames: []\n        }],\n        argumentFields: []\n      }\n    };\n\n    for (var _i = 0; _i < parameter.choices.details['args'].length; _i++) {\n      var _pair = parameter.choices.details['args'][_i];\n      var _field2 = fieldPath(_pair[1], parentKey);\n\n      // special fields are already in this, don't want to duplicate\n      if (!specialField(_field2)) {\n        form['choices']['updateOn'].push(_field2);\n      }\n\n      form['choices']['callback']['argumentFields'].push(_field2);\n      form['choices']['callback']['arguments'][0]['parameterNames'].push(_pair[0]);\n    }\n\n    // If it's an object then it's a fully specified command\n    if (_typeof(parameter.choices.value) === 'object') {\n      Object.assign(form['choices']['callback']['arguments'][0], {\n        system: parameter.choices.value.system,\n        system_version: parameter.choices.value.system_version,\n        instance_name: parameter.choices.value.instance_name\n      });\n    }\n  } else {\n    console.error('Don\\'t know how to handle parameter \\'%s\\' choices type (%s)', parameter.key, parameter.choices.type);\n  }\n\n  if (parameter.nullable && form['type'] === 'select') {\n    if (!Array.isArray(form['choices']['transforms'])) {\n      form['choices']['transforms'] = [];\n    }\n\n    form['choices']['transforms'].push('fixNull');\n  }\n};\n\nfunction fieldPath(field, parentKey) {\n  return specialField(field) ? field : parentKey + '.' + field;\n}\n\nfunction specialField(field) {\n  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(specialFields, field);\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/dynamicChoices.js?");

/***/ }),

/***/ "./src/errorConfig.js":
/*!****************************!*\
  !*** ./src/errorConfig.js ***!
  \****************************/
/*! exports provided: sfErrorMessageConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sfErrorMessageConfig\", function() { return sfErrorMessageConfig; });\nsfErrorMessageConfig.$inject = ['sfErrorMessageProvider'];\n\n/**\n * sfErrorMessageConfig - Setup default error messages for nullable problems.\n * @param  {Object} sfErrorMessageProvider Provider from angular-schema-form\n */\nfunction sfErrorMessageConfig(sfErrorMessageProvider) {\n  sfErrorMessageProvider.setDefaultMessage('requiredAllowNull', 'Required');\n  sfErrorMessageProvider.setDefaultMessage('failNull', 'Required');\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/errorConfig.js?");

/***/ }),

/***/ "./src/parameterBuilder.js":
/*!*********************************!*\
  !*** ./src/parameterBuilder.js ***!
  \*********************************/
/*! exports provided: buildParameterSF, buildSimpleParameterSF, buildMultiParameterSF, buildModelParameterSF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildParameterSF\", function() { return buildParameterSF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildSimpleParameterSF\", function() { return buildSimpleParameterSF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildMultiParameterSF\", function() { return buildMultiParameterSF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildModelParameterSF\", function() { return buildModelParameterSF; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _dynamicChoices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamicChoices */ \"./src/dynamicChoices.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\n\n\n/**\n * buildParameterSF - Build a schema and form for an individual parameter.\n * @param  {Object} parameter Beer-garden parameter object.\n * @param  {string} parentKey The key representing this parameter's parent.\n * @param  {boolean} inArray  Flag to determine if the parameter is part of an array.\n * @return {Object}           Schema-Form object for use by angular-schema-form.\n */\nfunction buildParameterSF(parameter, parentKey, inArray) {\n  // Schema and form that are the same across all parameters\n  var generalSF = {\n    'schema': {\n      'title': parameter.display_name,\n      'optional': parameter.optional,\n      'nullable': parameter.nullable,\n      'description': lodash__WEBPACK_IMPORTED_MODULE_0___default.a.escape(parameter.description)\n    },\n    'form': {\n      'key': parentKey.concat(parameter.key)\n    }\n  };\n\n  if (inArray) {\n    generalSF['form']['key'].push('');\n  }\n\n  // Type-specific schema / forms\n  var builderFunction = void 0;\n  if (parameter.multi && !inArray) {\n    builderFunction = buildMultiParameterSF;\n  } else if (parameter.parameters && parameter.parameters.length > 0) {\n    builderFunction = buildModelParameterSF;\n  } else {\n    builderFunction = buildSimpleParameterSF;\n  }\n\n  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.merge({}, generalSF, builderFunction(parameter, parentKey, inArray));\n};\n\n// Build a schema and form for a parameter that's not a dictionary\n// and not an array\nfunction buildSimpleParameterSF(parameter, parentKey, inArray) {\n  var baseSF = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"baseSchemaForm\"])(parameter.type);\n  var schema = baseSF['schema'];\n  var form = baseSF['form'];\n\n  // If the set a form_input_type, we apply it to the form\n  Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"applyConstraint\"])(form, 'type', parameter.form_input_type);\n\n  // Deal with 'requiredness'\n  // ASF does some mangling before its 'required' validation, most annoyingly making empty\n  // strings appear undefined. So we have our own validation based on if the parameter is\n  // optional and whether nulls are allowed.\n  // Booleans are special. The only way they could 'fail' would be if they were nullable\n  // with a null default. If that's allowed it would require two clicks to be 'false' and\n  // look the same as how it started.\n  if (schema['type'].indexOf('boolean') === -1) {\n    if (!parameter.optional) {\n      schema[parameter.nullable ? 'requiredAllowNull' : 'required'] = true;\n    }\n\n    if (!parameter.nullable) {\n      schema['failNull'] = true;\n    }\n  }\n\n  // Now we do some setup that only makes sense if we aren't inside an array, because if we\n  // are we want to apply these things to the array itself, not this\n  if (!inArray) {\n    // Set up the default model value for this parameter\n    // FYI - It's a good idea to only specify a default for things that need it, as a default\n    // can cause ASF to treat the field differently.\n    // Parameters with NO default will not show in the model preview until they get a value.\n    var defaultValue = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"correctDefault\"])(parameter, schema['type']);\n    if (defaultValue !== undefined) {\n      if (defaultValue !== null || parameter.nullable) {\n        schema['default'] = defaultValue;\n      }\n    }\n\n    // Now map constraints that depend on the type into the schema and form\n    if (schema['type'].indexOf('string') !== -1) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"applyConstraint\"])(schema, 'maxLength', parameter['maximum']);\n      Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"applyConstraint\"])(schema, 'minLength', parameter['minimum']);\n      Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"applyConstraint\"])(schema, 'pattern', parameter['regex']);\n    } else if (schema['type'].indexOf('integer') !== -1 || schema['type'].indexOf('number') !== -1) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"applyConstraint\"])(schema, 'maximum', parameter['maximum']);\n      Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"applyConstraint\"])(schema, 'minimum', parameter['minimum']);\n    }\n  }\n\n  // Now wire up dynamic choices\n  if (parameter.choices && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(parameter.choices, {})) {\n    Object(_dynamicChoices__WEBPACK_IMPORTED_MODULE_2__[\"setDynamicChoices\"])(schema, form, parameter, parentKey);\n  }\n\n  return { schema: schema, form: form };\n};\n\nfunction buildMultiParameterSF(parameter, parentKey) {\n  // Multi parameters are represented as 'array' types with their real type\n  // definition in the 'items' definition. So first we need to construct the\n  // schema and form for this as if it weren't a multi.\n  var nestedSF = buildParameterSF(parameter, parentKey, true);\n\n  // Now tweak the result to make sense as an array item\n  // We are assuming the default for this parameter is intended for the array,\n  // so remove it from the child\n  delete nestedSF['schema']['default'];\n\n  // Tweak the display a bit so it looks better inside the array\n  nestedSF['form']['notitle'] = true;\n  nestedSF['form']['htmlClass'] = 'clear-right';\n  delete nestedSF['schema']['description'];\n\n  // A nullable object is a distinct thing and doesn't make sense inside an\n  // array (would be the same as an empty array)\n  if (nestedSF['schema']['type'] === 'object') {\n    nestedSF['schema']['nullable'] = false;\n  }\n\n  var arraySF = {\n    schema: {\n      type: ['array', 'null'],\n      items: nestedSF['schema']\n    },\n    form: {\n      startEmpty: !!parameter.nullable,\n      items: [nestedSF['form']]\n    }\n  };\n\n  // Only add a default if necessary, otherwise it breaks things\n  var arrayDefault = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"correctDefault\"])(parameter, 'array');\n  if (arrayDefault !== undefined) {\n    arraySF['schema']['default'] = arrayDefault;\n    arraySF['form']['startEmpty'] = true;\n  }\n\n  // Add array constraints\n  Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"applyConstraint\"])(arraySF['schema'], 'maxItems', parameter['maximum']);\n  Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"applyConstraint\"])(arraySF['schema'], 'minItems', parameter['minimum']);\n\n  return arraySF;\n};\n\nfunction buildModelParameterSF(parameter, parentKey, inArray) {\n  var newParentKey = inArray ? parentKey.concat(parameter.key, '') : parentKey.concat(parameter.key);\n  var innerSF = Object(_builder__WEBPACK_IMPORTED_MODULE_1__[\"buildModelSF\"])(parameter, newParentKey);\n  var objDefault = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"correctDefault\"])(parameter, 'object');\n\n  var form = {};\n  var schema = {\n    type: 'object',\n    partition: '!optional',\n    accordionHeading: 'Optional Fields',\n    properties: innerSF['schema']\n  };\n\n  if (parameter.optional && parameter.nullable && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual({}, objDefault) && !inArray) {\n    schema['format'] = 'nullable';\n  } else {\n    schema['default'] = objDefault;\n    form['items'] = innerSF['form'];\n  }\n\n  return { schema: schema, form: form };\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/parameterBuilder.js?");

/***/ }),

/***/ "./src/postProcessor.js":
/*!******************************!*\
  !*** ./src/postProcessor.js ***!
  \******************************/
/*! exports provided: sfPostProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sfPostProcessor\", function() { return sfPostProcessor; });\nsfPostProcessor.$inject = ['postProcess', 'schemaForm'];\n\n/**\n * sfPostProcessor - Post processes a Schema-Form (from angular-schema-form) to includes\n * our rules about nullable objects since angular-schema-form does not like the concept\n * very much.\n * @param  {type} postProcess description\n * @param  {type} schemaForm  description\n */\nfunction sfPostProcessor(postProcess, schemaForm) {\n  postProcess.addPostProcess(function (canonicalForm) {\n    // Validators\n    var requiredAllowNull = function requiredAllowNull(modelValue, viewValue) {\n      return !(modelValue === undefined);\n    };\n    var failNull = function failNull(modelValue, viewValue) {\n      return !(modelValue === null);\n    };\n\n    // Parsers\n    var emptyStringToNull = function emptyStringToNull(modelValue) {\n      return modelValue === '' ? null : modelValue;\n    };\n\n    for (var i = 0; i < canonicalForm.length; i++) {\n      schemaForm.traverseForm(canonicalForm[i], function (formObj) {\n        if (formObj.schema) {\n          var validators = {};\n          if (!!formObj.schema.requiredAllowNull) {\n            validators['requiredAllowNull'] = requiredAllowNull;\n          }\n          if (!!formObj.schema.failNull) {\n            validators['failNull'] = failNull;\n          }\n          formObj.$validators = _.merge({}, formObj.$validators, validators);\n\n          var parsers = [];\n          if (formObj.schema.type.indexOf('string') != -1 && formObj.schema.nullable) {\n            parsers.push(emptyStringToNull);\n          }\n          formObj.$parsers = formObj.$parsers === undefined ? parsers : formObj.$parsers.concat(parsers);\n        }\n      });\n    }\n    return canonicalForm;\n  });\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/postProcessor.js?");

/***/ }),

/***/ "./src/service.js":
/*!************************!*\
  !*** ./src/service.js ***!
  \************************/
/*! exports provided: sfBuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sfBuilderService\", function() { return sfBuilderService; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n\n\n\n\n/**\n * sfBuilderService - Service for converting systems, commands, and parameters into valid\n * schema-form objects for use by angular-schema-form.\n * @return {Object}                A Service for building valid schema-form objects.\n */\nfunction sfBuilderService() {\n  var SFBuilderService = {};\n\n  /**\n   * Returns a valid schema / form combination for use in angular-schema-form\n   *\n   * If there are optional fields, it will return a form which includes tabs\n   * where the required and optional fields are separated.\n   * If there are no * optional fields, then it returns a simple flat form with\n   * the required fields only.\n   *\n   * @param {Object} system - A valid beer-garden System object\n   * @param {Object} command - A valid beer-garden Command object\n   * @return {Object} schemaForm - An object with schema and form properties\n   */\n  SFBuilderService.build = function (system, command) {\n    // Build the actual schema and form for this specific command\n    var modelSF = Object(_builder__WEBPACK_IMPORTED_MODULE_1__[\"buildModelSF\"])(command, ['parameters']);\n    var modelSchema = void 0;\n    var modelForm = void 0;\n\n    // Merge the two into the final representation\n    // For the schema start with common and add the model to its parameters\n    // If the command has a custom schema then use that instead of the generated one\n    if (command.schema !== undefined && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual({}, command.schema)) {\n      modelSchema = { type: 'object', properties: command.schema };\n    } else {\n      modelSchema = { type: 'object', properties: modelSF['schema'] };\n    }\n\n    // Form is a little more tricky\n    // If the command has a custom form then use that instead of the generated one\n    if (command.form !== undefined && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual({}, command.form) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual([], command.form)) {\n      modelForm = Array.isArray(command.form) ? command.form : [command.form];\n    } else {\n      modelForm = [];\n      var required = [];\n      var optional = [];\n\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = modelSF['form'][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var item = _step.value;\n\n          // Form items can be either a string or dictionary with a key parameter\n          var itemKey = typeof item === 'string' ? item : item.key;\n\n          // The actual key itself should be an array, but if not we need to make it one\n          itemKey = typeof itemKey === 'string' ? parse(itemKey) : itemKey;\n          var schemaItem = modelSchema['properties'][itemKey[itemKey.length - 1]];\n\n          if (schemaItem.optional) {\n            optional.push(item);\n          } else {\n            required.push(item);\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      if (optional.length) {\n        if (!required.length) {\n          required.push({ 'type': 'help',\n            'helpvalue': '<div uib-alert class=\"alert alert-info m-b-0\">None! :)</div>' });\n        }\n        modelForm.push({\n          'type': 'tabs',\n          'tabs': [{ 'title': 'Required Fields', 'items': required }, { 'title': 'Optional Fields', 'items': optional }]\n        });\n      } else {\n        modelForm = required;\n      }\n    }\n\n    // Build the schema and form common to all commands\n    var commonSF = Object(_builder__WEBPACK_IMPORTED_MODULE_1__[\"buildCommonSF\"])(system, command);\n\n    // Tie in the model schema in the correct place\n    commonSF['schema']['parameters'] = modelSchema;\n\n    return {\n      schema: { type: 'object', properties: commonSF['schema'] },\n      form: modelForm.concat(commonSF['form'])\n    };\n  };\n\n  return SFBuilderService;\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/service.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: baseSchemaForm, correctDefault, applyConstraint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"baseSchemaForm\", function() { return baseSchemaForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"correctDefault\", function() { return correctDefault; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyConstraint\", function() { return applyConstraint; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n * baseSchemaForm - Get a basic schema and form for a given parameter type\n * @return {Object}                Schema and form definition object\n */\nfunction baseSchemaForm(parameterType) {\n  var type = parameterType.toLowerCase();\n\n  var typeMap = {\n    any: 'variant',\n    integer: 'integer',\n    float: 'number',\n    boolean: 'boolean',\n    dictionary: 'dictionary',\n    string: 'string',\n    date: 'integer',\n    datetime: 'integer'\n  };\n\n  // We want the schema type to default to 'string' and always also allow 'null'.\n  // That way we have finer-grained control over when null is allowed.\n  var schema = {\n    type: [typeMap[type] || 'string', 'null']\n  };\n  var form = {};\n\n  // Certain types require additional options\n  if (type === 'date') {\n    schema['format'] = 'datetime';\n    form['options'] = { format: 'MM/DD/YYYY' };\n  } else if (type === 'datetime') {\n    schema['format'] = 'datetime';\n  }\n\n  return { schema: schema, form: form };\n};\n\n/**\n * correctDefault - Get the correct default based on parameter type\n */\nfunction correctDefault(parameter, type) {\n  switch (type) {\n    case 'boolean':\n      return parameter.nullable && parameter.default === null ? null : !!parameter.default;\n\n    // If the default is null then default to an empty array\n    // Otherwise create a deep copy of the default\n    case 'array':\n      if (!!parameter.default) {\n        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.merge([], parameter.default);\n      } else if (parameter.default === null && parameter.nullable) {\n        return null;\n      } else {\n        return undefined;\n      }\n\n    // If default is defined then return a deep copy, otherwise an empty object\n    case 'object':\n      if (!!parameter.default) {\n        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.merge({}, parameter.default);\n      } else {\n        return {};\n      }\n\n    default:\n      return parameter.default;\n  }\n};\n\n/**\n * applyConstraint - Apply a contraint\n */\nfunction applyConstraint(object, createKey, paramValue) {\n  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(paramValue) && paramValue !== null) {\n    object[createKey] = paramValue;\n  }\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/utils.js?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi ./module ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/mppatrick/git/beergarden/angular-schema-form-builder/module */\"./module.js\");\n\n\n//# sourceURL=webpack://%5Bname%5D/multi_./module?");

/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_angular__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22angular%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22lodash%22?");

/***/ })

/******/ });
});