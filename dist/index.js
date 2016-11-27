(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["dgm-ng2-redactor"] = factory(require("@angular/core"), require("@angular/forms"), require("jquery"));
	else
		root["dgm-ng2-redactor"] = factory(root["@angular/core"], root["@angular/forms"], root["jquery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var redactor_component_1 = __webpack_require__(3);
var RedactorModule = (function () {
    function RedactorModule() {
    }
    RedactorModule = __decorate([
        core_1.NgModule({
            declarations: [
                redactor_component_1.Redactor,
            ],
            exports: [
                redactor_component_1.Redactor,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], RedactorModule);
    return RedactorModule;
}());
exports.RedactorModule = RedactorModule;


/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = "<textarea #content></textarea>";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/// <reference path="./index.d.ts" />
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var $ = __webpack_require__(5);
var RedactorValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return Redactor; }),
    multi: true,
};
var Redactor = (function () {
    function Redactor(host, renderer) {
        this.host = host;
        this.renderer = renderer;
        this.enableSource = true;
    }
    Redactor.prototype.ngAfterViewInit = function () {
        if (!this.content) {
            throw 'Redactor: No content child';
        }
        var elem = this.content.nativeElement;
        elem.value = this._value;
        var _onChange = this._onChange;
        var plugins = [
            this.enableSource ? 'source' : undefined,
        ].filter(function (it) { return !!it; });
        $(elem).redactor({
            plugins: plugins,
            minHeight: +this.minHeight,
            callbacks: {
                change: function redactorOnChange() {
                    _onChange(this.code.get());
                },
            },
        });
    };
    Redactor.prototype.writeValue = function (value) {
        this._value = value;
    };
    Redactor.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    Redactor.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Redactor.prototype, "minHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Redactor.prototype, "enableSource", void 0);
    __decorate([
        core_1.ViewChild('content'), 
        __metadata('design:type', core_1.ElementRef)
    ], Redactor.prototype, "content", void 0);
    Redactor = __decorate([
        core_1.Component({
            selector: '[redactor]',
            providers: [RedactorValueAccessor],
            template: __webpack_require__(2),
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], Redactor);
    return Redactor;
}());
exports.Redactor = Redactor;


/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var redactor_module_1 = __webpack_require__(1);
exports.RedactorModule = redactor_module_1.RedactorModule;


/***/ }
/******/ ])
});
;