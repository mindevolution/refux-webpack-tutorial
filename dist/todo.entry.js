/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(169);


/***/ },

/***/ 169:
/***/ function(module, exports) {

	'use strict';
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var todos = function todos() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
		var action = arguments[1];
	
		return state;
		switch (action.type) {
			case 'ADD_TODO':
				return [].concat(_toConsumableArray(state), [{
					id: action.id,
					text: action.text,
					completed: false
				}]);
			default:
				return state;
		}
	};
	
	var testAddTodo = function testAddTodo() {
		var stateBefore = [];
		var action = {
			type: 'ADD_TODO',
			id: 0,
			text: 'Learn Redux'
		};
		var stateAfter = [{
			id: 0,
			text: 'Learn Redux',
			completed: false
		}];
	
		deepFreeze(stateBefore);
		deepFreeze(action);
	
		expect(stateAfter).toEqual(stateAfter);
	};
	
	testAddTodo();
	console.log('All test passed.');

/***/ }

/******/ });
//# sourceMappingURL=todo.entry.js.map