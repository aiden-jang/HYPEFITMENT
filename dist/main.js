/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/input */ \"./src/scripts/input.js\");\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/view */ \"./src/scripts/view.js\");\n/* harmony import */ var _scripts_wheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/wheel */ \"./src/scripts/wheel.js\");\n\n\n // document.addEventListener('keydown', key => {\n//     console.log(key);\n// });\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"canvas\");\n  var ctx = canvas.getContext(\"2d\"); // new View()\n\n  canvas.width = window.innerWidth / 1.5;\n  canvas.height = window.innerHeight / 1.3;\n  ctx.strokeStyle = \"red\";\n  var oldSetup = new _scripts_wheel__WEBPACK_IMPORTED_MODULE_2__.default(275, 40, 18, 9.5, 8);\n  var newSetup = new _scripts_wheel__WEBPACK_IMPORTED_MODULE_2__.default(295, 40, 19, 10, 8); // console.log(oldWheel);\n\n  var view = new _scripts_view__WEBPACK_IMPORTED_MODULE_1__.default(ctx, oldSetup, newSetup); // wheel.decRimOffset();\n  // console.log(wheel);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Q0FJQTtBQUNBO0FBQ0E7O0FBSUFHLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDOUMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLE1BQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVosQ0FGOEMsQ0FHOUM7O0FBRUFKLEVBQUFBLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlUCxNQUFNLENBQUNRLFVBQVAsR0FBa0IsR0FBakM7QUFDQU4sRUFBQUEsTUFBTSxDQUFDTyxNQUFQLEdBQWdCVCxNQUFNLENBQUNVLFdBQVAsR0FBbUIsR0FBbkM7QUFDQUwsRUFBQUEsR0FBRyxDQUFDTSxXQUFKLEdBQWtCLEtBQWxCO0FBR0EsTUFBSUMsUUFBUSxHQUFHLElBQUliLG1EQUFKLENBQVUsR0FBVixFQUFjLEVBQWQsRUFBaUIsRUFBakIsRUFBb0IsR0FBcEIsRUFBd0IsQ0FBeEIsQ0FBZjtBQUNBLE1BQUljLFFBQVEsR0FBRyxJQUFJZCxtREFBSixDQUFVLEdBQVYsRUFBYyxFQUFkLEVBQWlCLEVBQWpCLEVBQW9CLEVBQXBCLEVBQXVCLENBQXZCLENBQWYsQ0FYOEMsQ0FZOUM7O0FBQ0EsTUFBTWUsSUFBSSxHQUFHLElBQUloQixrREFBSixDQUFTTyxHQUFULEVBQWNPLFFBQWQsRUFBd0JDLFFBQXhCLENBQWIsQ0FiOEMsQ0FjOUM7QUFDQTtBQUNILENBaEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHlwZWZpdG1lbnQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcIi4vc2NyaXB0cy9pbnB1dFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4vc2NyaXB0cy92aWV3XCI7XG5pbXBvcnQgV2hlZWwgZnJvbSBcIi4vc2NyaXB0cy93aGVlbFwiXG5cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coa2V5KTtcbi8vIH0pO1xuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vIG5ldyBWaWV3KClcblxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoLzEuNTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0LzEuMztcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuXG4gICAgXG4gICAgdmFyIG9sZFNldHVwID0gbmV3IFdoZWVsKDI3NSw0MCwxOCw5LjUsOCk7XG4gICAgdmFyIG5ld1NldHVwID0gbmV3IFdoZWVsKDI5NSw0MCwxOSwxMCw4KTtcbiAgICAvLyBjb25zb2xlLmxvZyhvbGRXaGVlbCk7XG4gICAgY29uc3QgdmlldyA9IG5ldyBWaWV3KGN0eCwgb2xkU2V0dXAsIG5ld1NldHVwKTtcbiAgICAvLyB3aGVlbC5kZWNSaW1PZmZzZXQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh3aGVlbCk7XG59KTsiXSwibmFtZXMiOlsiSW5wdXQiLCJWaWV3IiwiV2hlZWwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInN0cm9rZVN0eWxlIiwib2xkU2V0dXAiLCJuZXdTZXR1cCIsInZpZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/input.js":
/*!******************************!*\
  !*** ./src/scripts/input.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar Input = function Input() {\n  _classCallCheck(this, Input);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbnB1dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSwrREFBZUEsS0FBZjs7SUFFTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oeXBlZml0bWVudC8uL3NyYy9zY3JpcHRzL2lucHV0LmpzPzQ0ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG5cbmNsYXNzIElucHV0IHtcbiAgICBcbn0iXSwibmFtZXMiOlsiSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/input.js\n");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar View = function View(ctx, oldSetup, newSetup) {\n  _classCallCheck(this, View);\n\n  this.ctx = ctx;\n  this.oldSetup = oldSetup;\n  this.newSetup = newSetup;\n  ctx.strokeRect(10, 10, 200, 500);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztJQUFxQkEsT0FDakIsY0FBWUMsR0FBWixFQUFpQkMsUUFBakIsRUFBMkJDLFFBQTNCLEVBQXFDO0FBQUE7O0FBQ2pDLE9BQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLE9BQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQUYsRUFBQUEsR0FBRyxDQUFDRyxVQUFKLENBQWUsRUFBZixFQUFrQixFQUFsQixFQUFxQixHQUFyQixFQUF5QixHQUF6QjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHlwZWZpdG1lbnQvLi9zcmMvc2NyaXB0cy92aWV3LmpzPzgwYzMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBvbGRTZXR1cCwgbmV3U2V0dXApIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMub2xkU2V0dXAgPSBvbGRTZXR1cDtcbiAgICAgICAgdGhpcy5uZXdTZXR1cCA9IG5ld1NldHVwO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCgxMCwxMCwyMDAsNTAwKTtcbiAgICB9XG59XG5cblxuXG4iXSwibmFtZXMiOlsiVmlldyIsImN0eCIsIm9sZFNldHVwIiwibmV3U2V0dXAiLCJzdHJva2VSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

/***/ }),

/***/ "./src/scripts/wheel.js":
/*!******************************!*\
  !*** ./src/scripts/wheel.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Wheel; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Wheel = /*#__PURE__*/function () {\n  function Wheel(tireWidth, tireProfile, tireDiameter, RimWidth, RimOffset) {\n    _classCallCheck(this, Wheel);\n\n    this.tireWidth = tireWidth;\n    this.tireProfile = tireProfile;\n    this.tireDiameter = tireDiameter;\n    this.RimWidth = RimWidth;\n    this.RimOffset = RimOffset;\n  }\n\n  _createClass(Wheel, [{\n    key: \"incTireWidth\",\n    value: function incTireWidth() {\n      this.tireWidth += 5;\n    }\n  }, {\n    key: \"decTireWidth\",\n    value: function decTireWidth() {\n      this.tireWidth -= 5;\n    }\n  }, {\n    key: \"incTireProfile\",\n    value: function incTireProfile() {\n      this.tireProfile += 5;\n    }\n  }, {\n    key: \"decTireProfile\",\n    value: function decTireProfile() {\n      this.tireProfile -= 5;\n    }\n  }, {\n    key: \"incTireDiameter\",\n    value: function incTireDiameter() {\n      this.tireDiameter += 1;\n    }\n  }, {\n    key: \"decTireDiameter\",\n    value: function decTireDiameter() {\n      this.tireDiameter -= 1;\n    }\n  }, {\n    key: \"incRimWidth\",\n    value: function incRimWidth() {\n      this.RimWidth += 0.5;\n    }\n  }, {\n    key: \"decRimWidth\",\n    value: function decRimWidth() {\n      this.RimWidth -= 0.5;\n    }\n  }, {\n    key: \"incRimOffset\",\n    value: function incRimOffset() {\n      this.RimOffset += 1;\n    }\n  }, {\n    key: \"decRimOffset\",\n    value: function decRimOffset() {\n      this.RimOffset -= 1;\n    }\n  }]);\n\n  return Wheel;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy93aGVlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQTtBQUNqQixpQkFBWUMsU0FBWixFQUF1QkMsV0FBdkIsRUFBb0NDLFlBQXBDLEVBQWtEQyxRQUFsRCxFQUE0REMsU0FBNUQsRUFBdUU7QUFBQTs7QUFDL0QsU0FBS0osU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNIOzs7O1dBRUwsd0JBQWdCO0FBQ1osV0FBS0osU0FBTCxJQUFrQixDQUFsQjtBQUNIOzs7V0FFRCx3QkFBZ0I7QUFDWixXQUFLQSxTQUFMLElBQWtCLENBQWxCO0FBQ0g7OztXQUVELDBCQUFrQjtBQUNkLFdBQUtDLFdBQUwsSUFBb0IsQ0FBcEI7QUFDSDs7O1dBRUQsMEJBQWtCO0FBQ2QsV0FBS0EsV0FBTCxJQUFvQixDQUFwQjtBQUNIOzs7V0FFRCwyQkFBbUI7QUFDZixXQUFLQyxZQUFMLElBQXFCLENBQXJCO0FBQ0g7OztXQUVELDJCQUFtQjtBQUNmLFdBQUtBLFlBQUwsSUFBcUIsQ0FBckI7QUFDSDs7O1dBRUQsdUJBQWU7QUFDWCxXQUFLQyxRQUFMLElBQWlCLEdBQWpCO0FBQ0g7OztXQUVELHVCQUFlO0FBQ1gsV0FBS0EsUUFBTCxJQUFpQixHQUFqQjtBQUNIOzs7V0FFRCx3QkFBZ0I7QUFDWixXQUFLQyxTQUFMLElBQWtCLENBQWxCO0FBQ0g7OztXQUVELHdCQUFnQjtBQUNaLFdBQUtBLFNBQUwsSUFBa0IsQ0FBbEI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2h5cGVmaXRtZW50Ly4vc3JjL3NjcmlwdHMvd2hlZWwuanM/ZTMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBXaGVlbCB7XG4gICAgY29uc3RydWN0b3IodGlyZVdpZHRoLCB0aXJlUHJvZmlsZSwgdGlyZURpYW1ldGVyLCBSaW1XaWR0aCwgUmltT2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLnRpcmVXaWR0aCA9IHRpcmVXaWR0aDtcbiAgICAgICAgICAgIHRoaXMudGlyZVByb2ZpbGUgPSB0aXJlUHJvZmlsZTtcbiAgICAgICAgICAgIHRoaXMudGlyZURpYW1ldGVyID0gdGlyZURpYW1ldGVyO1xuICAgICAgICAgICAgdGhpcy5SaW1XaWR0aCA9IFJpbVdpZHRoO1xuICAgICAgICAgICAgdGhpcy5SaW1PZmZzZXQgPSBSaW1PZmZzZXQ7XG4gICAgICAgIH1cbiAgICBcbiAgICBpbmNUaXJlV2lkdGggKCkge1xuICAgICAgICB0aGlzLnRpcmVXaWR0aCArPSA1O1xuICAgIH1cblxuICAgIGRlY1RpcmVXaWR0aCAoKSB7XG4gICAgICAgIHRoaXMudGlyZVdpZHRoIC09IDU7XG4gICAgfVxuXG4gICAgaW5jVGlyZVByb2ZpbGUgKCkge1xuICAgICAgICB0aGlzLnRpcmVQcm9maWxlICs9IDU7XG4gICAgfVxuXG4gICAgZGVjVGlyZVByb2ZpbGUgKCkge1xuICAgICAgICB0aGlzLnRpcmVQcm9maWxlIC09IDU7XG4gICAgfVxuXG4gICAgaW5jVGlyZURpYW1ldGVyICgpIHtcbiAgICAgICAgdGhpcy50aXJlRGlhbWV0ZXIgKz0gMTtcbiAgICB9XG5cbiAgICBkZWNUaXJlRGlhbWV0ZXIgKCkge1xuICAgICAgICB0aGlzLnRpcmVEaWFtZXRlciAtPSAxO1xuICAgIH1cblxuICAgIGluY1JpbVdpZHRoICgpIHtcbiAgICAgICAgdGhpcy5SaW1XaWR0aCArPSAwLjU7XG4gICAgfVxuXG4gICAgZGVjUmltV2lkdGggKCkge1xuICAgICAgICB0aGlzLlJpbVdpZHRoIC09IDAuNTtcbiAgICB9XG4gICAgXG4gICAgaW5jUmltT2Zmc2V0ICgpIHtcbiAgICAgICAgdGhpcy5SaW1PZmZzZXQgKz0gMTtcbiAgICB9XG5cbiAgICBkZWNSaW1PZmZzZXQgKCkge1xuICAgICAgICB0aGlzLlJpbU9mZnNldCAtPSAxO1xuICAgIH1cbn1cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiV2hlZWwiLCJ0aXJlV2lkdGgiLCJ0aXJlUHJvZmlsZSIsInRpcmVEaWFtZXRlciIsIlJpbVdpZHRoIiwiUmltT2Zmc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/wheel.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oeXBlZml0bWVudC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;