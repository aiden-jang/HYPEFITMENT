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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/input */ \"./src/scripts/input.js\");\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/view */ \"./src/scripts/view.js\");\n/* harmony import */ var _scripts_wheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/wheel */ \"./src/scripts/wheel.js\");\n\n\n // document.addEventListener('keydown', key => {\n//     console.log(key);\n// });\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"canvas\");\n  var ctx = canvas.getContext(\"2d\");\n  canvas.width = window.innerWidth / 1.2;\n  canvas.height = window.innerHeight / 1.3;\n  var oldWheel = new _scripts_wheel__WEBPACK_IMPORTED_MODULE_2__.default(275, 40, 18, 9.5, 8);\n  var newWheel = new _scripts_wheel__WEBPACK_IMPORTED_MODULE_2__.default(295, 40, 19, 10.5, 15); // window.addEventListener(\"resize\", () => {\n  //     canvas.width = window.innerWidth/1.5;\n  //     canvas.height = window.innerHeight/1.3;\n  // });\n  // console.log(oldWheel);\n\n  ctx.strokeStyle = \"red\";\n  var oldWheelView = new _scripts_view__WEBPACK_IMPORTED_MODULE_1__.default(ctx, canvas, oldWheel);\n  ctx.strokeStyle = \"blue\";\n  var newWheelView = new _scripts_view__WEBPACK_IMPORTED_MODULE_1__.default(ctx, canvas, newWheel); // wheel.decRimOffset();\n  // console.log(wheel);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Q0FJQTtBQUNBO0FBQ0E7O0FBSUFHLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDOUMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLE1BQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFFQUosRUFBQUEsTUFBTSxDQUFDSyxLQUFQLEdBQWVQLE1BQU0sQ0FBQ1EsVUFBUCxHQUFrQixHQUFqQztBQUNBTixFQUFBQSxNQUFNLENBQUNPLE1BQVAsR0FBZ0JULE1BQU0sQ0FBQ1UsV0FBUCxHQUFtQixHQUFuQztBQUVBLE1BQUlDLFFBQVEsR0FBRyxJQUFJWixtREFBSixDQUFVLEdBQVYsRUFBYyxFQUFkLEVBQWlCLEVBQWpCLEVBQW9CLEdBQXBCLEVBQXdCLENBQXhCLENBQWY7QUFDQSxNQUFJYSxRQUFRLEdBQUcsSUFBSWIsbURBQUosQ0FBVSxHQUFWLEVBQWMsRUFBZCxFQUFpQixFQUFqQixFQUFvQixJQUFwQixFQUF5QixFQUF6QixDQUFmLENBUjhDLENBVTlDO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBQ0FNLEVBQUFBLEdBQUcsQ0FBQ1EsV0FBSixHQUFrQixLQUFsQjtBQUNBLE1BQUlDLFlBQVksR0FBRyxJQUFJaEIsa0RBQUosQ0FBU08sR0FBVCxFQUFjSCxNQUFkLEVBQXNCUyxRQUF0QixDQUFuQjtBQUNBTixFQUFBQSxHQUFHLENBQUNRLFdBQUosR0FBa0IsTUFBbEI7QUFDQSxNQUFJRSxZQUFZLEdBQUcsSUFBSWpCLGtEQUFKLENBQVNPLEdBQVQsRUFBY0gsTUFBZCxFQUFzQlUsUUFBdEIsQ0FBbkIsQ0FwQjhDLENBcUI5QztBQUNBO0FBQ0gsQ0F2QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oeXBlZml0bWVudC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dCBmcm9tIFwiLi9zY3JpcHRzL2lucHV0XCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiLi9zY3JpcHRzL3ZpZXdcIjtcbmltcG9ydCBXaGVlbCBmcm9tIFwiLi9zY3JpcHRzL3doZWVsXCJcblxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhrZXkpO1xuLy8gfSk7XG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aC8xLjI7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodC8xLjM7XG4gICAgXG4gICAgdmFyIG9sZFdoZWVsID0gbmV3IFdoZWVsKDI3NSw0MCwxOCw5LjUsOCk7XG4gICAgdmFyIG5ld1doZWVsID0gbmV3IFdoZWVsKDI5NSw0MCwxOSwxMC41LDE1KTtcblxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAvLyAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGgvMS41O1xuICAgIC8vICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0LzEuMztcbiAgICAvLyB9KTtcbiAgICBcblxuICAgIC8vIGNvbnNvbGUubG9nKG9sZFdoZWVsKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgIHZhciBvbGRXaGVlbFZpZXcgPSBuZXcgVmlldyhjdHgsIGNhbnZhcywgb2xkV2hlZWwpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmx1ZVwiO1xuICAgIHZhciBuZXdXaGVlbFZpZXcgPSBuZXcgVmlldyhjdHgsIGNhbnZhcywgbmV3V2hlZWwpO1xuICAgIC8vIHdoZWVsLmRlY1JpbU9mZnNldCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHdoZWVsKTtcbn0pOyJdLCJuYW1lcyI6WyJJbnB1dCIsIlZpZXciLCJXaGVlbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwib2xkV2hlZWwiLCJuZXdXaGVlbCIsInN0cm9rZVN0eWxlIiwib2xkV2hlZWxWaWV3IiwibmV3V2hlZWxWaWV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar View = /*#__PURE__*/function () {\n  function View(ctx, canvas, wheel) {\n    _classCallCheck(this, View);\n\n    this.ctx = ctx;\n    this.wheel = wheel;\n    this.canvas = canvas;\n    this.drawRim(this.ctx, this.wheel);\n    this.drawTire(this.ctx, this.wheel);\n  }\n\n  _createClass(View, [{\n    key: \"drawSuspension\",\n    value: function drawSuspension() {}\n  }, {\n    key: \"drawRim\",\n    value: function drawRim(ctx) {\n      var centerX = canvas.width / 2 + this.wheel.rimOffset;\n      var centerY = canvas.height / 2;\n      var lengthX = this.wheel.rimWidth * 8;\n      var lengthY = this.wheel.tireDiameter * 6;\n      var leftX = centerX - lengthX;\n      var rightX = centerX + lengthX;\n      var leftY = centerY - lengthY;\n      var rightY = centerY + lengthY;\n      ctx.beginPath(); // left\n\n      ctx.moveTo(leftX, leftY);\n      ctx.lineTo(leftX, rightY); // top\n\n      ctx.moveTo(leftX, leftY);\n      ctx.lineTo(rightX, leftY); // right\n\n      ctx.moveTo(rightX, leftY);\n      ctx.lineTo(rightX, rightY); // bottom\n\n      ctx.moveTo(rightX, rightY);\n      ctx.lineTo(leftX, rightY);\n      ctx.stroke();\n    }\n  }, {\n    key: \"drawTire\",\n    value: function drawTire(ctx, wheel) {\n      ctx.beginPath();\n      ctx.moveTo(100, 20);\n      ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);\n      ctx.stroke();\n    }\n  }]);\n\n  return View;\n}(); // var oldWheel = new Wheel(275,40,18,9.5,8);\n// var newWheel = new Wheel(295,40,19,10.5,15);\n// this.tireWidth = tireWidth; 275 // 295\n// this.tireProfile = tireProfile; 40 // 40\n// this.tireDiameter = tireDiameter; 18 // 19\n// this.RimWidth = RimWidth;  9.5 // 10\n// this.RimOffset = RimOffset; 8  // 15\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUJBO0FBQ2pCLGdCQUFZQyxHQUFaLEVBQWlCQyxNQUFqQixFQUF5QkMsS0FBekIsRUFBZ0M7QUFBQTs7QUFDNUIsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0UsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBRUEsU0FBS0UsT0FBTCxDQUFhLEtBQUtILEdBQWxCLEVBQXVCLEtBQUtFLEtBQTVCO0FBQ0EsU0FBS0UsUUFBTCxDQUFjLEtBQUtKLEdBQW5CLEVBQXdCLEtBQUtFLEtBQTdCO0FBRUg7Ozs7V0FFRCwwQkFBaUIsQ0FFaEI7OztXQUVELGlCQUFRRixHQUFSLEVBQVk7QUFDUixVQUFJSyxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLENBQWYsR0FBbUIsS0FBS0osS0FBTCxDQUFXSyxTQUE1QztBQUNBLFVBQUlDLE9BQU8sR0FBR1AsTUFBTSxDQUFDUSxNQUFQLEdBQWdCLENBQTlCO0FBQ0EsVUFBSUMsT0FBTyxHQUFHLEtBQUtSLEtBQUwsQ0FBV1MsUUFBWCxHQUFzQixDQUFwQztBQUNBLFVBQUlDLE9BQU8sR0FBRyxLQUFLVixLQUFMLENBQVdXLFlBQVgsR0FBMEIsQ0FBeEM7QUFFQSxVQUFJQyxLQUFLLEdBQUdULE9BQU8sR0FBR0ssT0FBdEI7QUFDQSxVQUFJSyxNQUFNLEdBQUdWLE9BQU8sR0FBR0ssT0FBdkI7QUFDQSxVQUFJTSxLQUFLLEdBQUdSLE9BQU8sR0FBR0ksT0FBdEI7QUFDQSxVQUFJSyxNQUFNLEdBQUdULE9BQU8sR0FBR0ksT0FBdkI7QUFFQVosTUFBQUEsR0FBRyxDQUFDa0IsU0FBSixHQVhRLENBWVI7O0FBQ0FsQixNQUFBQSxHQUFHLENBQUNtQixNQUFKLENBQVdMLEtBQVgsRUFBa0JFLEtBQWxCO0FBQ0FoQixNQUFBQSxHQUFHLENBQUNvQixNQUFKLENBQVdOLEtBQVgsRUFBa0JHLE1BQWxCLEVBZFEsQ0FlUjs7QUFDQWpCLE1BQUFBLEdBQUcsQ0FBQ21CLE1BQUosQ0FBV0wsS0FBWCxFQUFrQkUsS0FBbEI7QUFDQWhCLE1BQUFBLEdBQUcsQ0FBQ29CLE1BQUosQ0FBV0wsTUFBWCxFQUFtQkMsS0FBbkIsRUFqQlEsQ0FrQlI7O0FBQ0FoQixNQUFBQSxHQUFHLENBQUNtQixNQUFKLENBQVdKLE1BQVgsRUFBbUJDLEtBQW5CO0FBQ0FoQixNQUFBQSxHQUFHLENBQUNvQixNQUFKLENBQVdMLE1BQVgsRUFBbUJFLE1BQW5CLEVBcEJRLENBcUJSOztBQUNBakIsTUFBQUEsR0FBRyxDQUFDbUIsTUFBSixDQUFXSixNQUFYLEVBQW1CRSxNQUFuQjtBQUNBakIsTUFBQUEsR0FBRyxDQUFDb0IsTUFBSixDQUFXTixLQUFYLEVBQWtCRyxNQUFsQjtBQUNBakIsTUFBQUEsR0FBRyxDQUFDcUIsTUFBSjtBQUVIOzs7V0FFRCxrQkFBU3JCLEdBQVQsRUFBY0UsS0FBZCxFQUFxQjtBQUVqQkYsTUFBQUEsR0FBRyxDQUFDa0IsU0FBSjtBQUNBbEIsTUFBQUEsR0FBRyxDQUFDbUIsTUFBSixDQUFXLEdBQVgsRUFBZ0IsRUFBaEI7QUFDQW5CLE1BQUFBLEdBQUcsQ0FBQ3NCLGFBQUosQ0FBa0IsRUFBbEIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckMsRUFBMEMsRUFBMUM7QUFDQXRCLE1BQUFBLEdBQUcsQ0FBQ3FCLE1BQUo7QUFDSDs7OztLQUVEO0FBQ0E7QUFDUTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHlwZWZpdG1lbnQvLi9zcmMvc2NyaXB0cy92aWV3LmpzPzgwYzMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMsIHdoZWVsKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLndoZWVsID0gd2hlZWw7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kcmF3UmltKHRoaXMuY3R4LCB0aGlzLndoZWVsKTtcbiAgICAgICAgdGhpcy5kcmF3VGlyZSh0aGlzLmN0eCwgdGhpcy53aGVlbCk7XG5cbiAgICB9XG5cbiAgICBkcmF3U3VzcGVuc2lvbigpIHtcblxuICAgIH1cblxuICAgIGRyYXdSaW0oY3R4KXtcbiAgICAgICAgdmFyIGNlbnRlclggPSBjYW52YXMud2lkdGggLyAyICsgdGhpcy53aGVlbC5yaW1PZmZzZXQ7XG4gICAgICAgIHZhciBjZW50ZXJZID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIHZhciBsZW5ndGhYID0gdGhpcy53aGVlbC5yaW1XaWR0aCAqIDggO1xuICAgICAgICB2YXIgbGVuZ3RoWSA9IHRoaXMud2hlZWwudGlyZURpYW1ldGVyICogNlxuICAgICAgICBcbiAgICAgICAgdmFyIGxlZnRYID0gY2VudGVyWCAtIGxlbmd0aFg7XG4gICAgICAgIHZhciByaWdodFggPSBjZW50ZXJYICsgbGVuZ3RoWDtcbiAgICAgICAgdmFyIGxlZnRZID0gY2VudGVyWSAtIGxlbmd0aFk7XG4gICAgICAgIHZhciByaWdodFkgPSBjZW50ZXJZICsgbGVuZ3RoWTtcblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IFxuICAgICAgICAvLyBsZWZ0XG4gICAgICAgIGN0eC5tb3ZlVG8obGVmdFgsIGxlZnRZKTtcbiAgICAgICAgY3R4LmxpbmVUbyhsZWZ0WCwgcmlnaHRZKTtcbiAgICAgICAgLy8gdG9wXG4gICAgICAgIGN0eC5tb3ZlVG8obGVmdFgsIGxlZnRZKTtcbiAgICAgICAgY3R4LmxpbmVUbyhyaWdodFgsIGxlZnRZKTtcbiAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgY3R4Lm1vdmVUbyhyaWdodFgsIGxlZnRZKTtcbiAgICAgICAgY3R4LmxpbmVUbyhyaWdodFgsIHJpZ2h0WSk7XG4gICAgICAgIC8vIGJvdHRvbVxuICAgICAgICBjdHgubW92ZVRvKHJpZ2h0WCwgcmlnaHRZKTtcbiAgICAgICAgY3R4LmxpbmVUbyhsZWZ0WCwgcmlnaHRZKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpOyAgICBcblxuICAgIH1cblxuICAgIGRyYXdUaXJlKGN0eCwgd2hlZWwpIHtcblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oMTAwLCAyMCk7XG4gICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKDIwLCAxMDAsIDIwMCwgMTAwLCAyMDAsIDIwKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbn1cbiAgICAvLyB2YXIgb2xkV2hlZWwgPSBuZXcgV2hlZWwoMjc1LDQwLDE4LDkuNSw4KTtcbiAgICAvLyB2YXIgbmV3V2hlZWwgPSBuZXcgV2hlZWwoMjk1LDQwLDE5LDEwLjUsMTUpO1xuICAgICAgICAgICAgLy8gdGhpcy50aXJlV2lkdGggPSB0aXJlV2lkdGg7IDI3NSAvLyAyOTVcbiAgICAgICAgICAgIC8vIHRoaXMudGlyZVByb2ZpbGUgPSB0aXJlUHJvZmlsZTsgNDAgLy8gNDBcbiAgICAgICAgICAgIC8vIHRoaXMudGlyZURpYW1ldGVyID0gdGlyZURpYW1ldGVyOyAxOCAvLyAxOVxuICAgICAgICAgICAgLy8gdGhpcy5SaW1XaWR0aCA9IFJpbVdpZHRoOyAgOS41IC8vIDEwXG4gICAgICAgICAgICAvLyB0aGlzLlJpbU9mZnNldCA9IFJpbU9mZnNldDsgOCAgLy8gMTVcblxuXG5cbiJdLCJuYW1lcyI6WyJWaWV3IiwiY3R4IiwiY2FudmFzIiwid2hlZWwiLCJkcmF3UmltIiwiZHJhd1RpcmUiLCJjZW50ZXJYIiwid2lkdGgiLCJyaW1PZmZzZXQiLCJjZW50ZXJZIiwiaGVpZ2h0IiwibGVuZ3RoWCIsInJpbVdpZHRoIiwibGVuZ3RoWSIsInRpcmVEaWFtZXRlciIsImxlZnRYIiwicmlnaHRYIiwibGVmdFkiLCJyaWdodFkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJiZXppZXJDdXJ2ZVRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

/***/ }),

/***/ "./src/scripts/wheel.js":
/*!******************************!*\
  !*** ./src/scripts/wheel.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Wheel; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Wheel = /*#__PURE__*/function () {\n  function Wheel(tireWidth, tireProfile, tireDiameter, rimWidth, rimOffset) {\n    _classCallCheck(this, Wheel);\n\n    this.tireWidth = tireWidth;\n    this.tireProfile = tireProfile;\n    this.tireDiameter = tireDiameter;\n    this.rimWidth = rimWidth;\n    this.rimOffset = rimOffset;\n  }\n\n  _createClass(Wheel, [{\n    key: \"incTireWidth\",\n    value: function incTireWidth() {\n      this.tireWidth += 5;\n    }\n  }, {\n    key: \"decTireWidth\",\n    value: function decTireWidth() {\n      this.tireWidth -= 5;\n    }\n  }, {\n    key: \"incTireProfile\",\n    value: function incTireProfile() {\n      this.tireProfile += 5;\n    }\n  }, {\n    key: \"decTireProfile\",\n    value: function decTireProfile() {\n      this.tireProfile -= 5;\n    }\n  }, {\n    key: \"incTireDiameter\",\n    value: function incTireDiameter() {\n      this.tireDiameter += 1;\n    }\n  }, {\n    key: \"decTireDiameter\",\n    value: function decTireDiameter() {\n      this.tireDiameter -= 1;\n    }\n  }, {\n    key: \"incRimWidth\",\n    value: function incRimWidth() {\n      this.RimWidth += 0.5;\n    }\n  }, {\n    key: \"decRimWidth\",\n    value: function decRimWidth() {\n      this.RimWidth -= 0.5;\n    }\n  }, {\n    key: \"incRimOffset\",\n    value: function incRimOffset() {\n      this.RimOffset += 1;\n    }\n  }, {\n    key: \"decRimOffset\",\n    value: function decRimOffset() {\n      this.RimOffset -= 1;\n    }\n  }]);\n\n  return Wheel;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy93aGVlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQTtBQUNqQixpQkFBWUMsU0FBWixFQUF1QkMsV0FBdkIsRUFBb0NDLFlBQXBDLEVBQWtEQyxRQUFsRCxFQUE0REMsU0FBNUQsRUFBdUU7QUFBQTs7QUFDL0QsU0FBS0osU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNIOzs7O1dBRUwsd0JBQWdCO0FBQ1osV0FBS0osU0FBTCxJQUFrQixDQUFsQjtBQUNIOzs7V0FFRCx3QkFBZ0I7QUFDWixXQUFLQSxTQUFMLElBQWtCLENBQWxCO0FBQ0g7OztXQUVELDBCQUFrQjtBQUNkLFdBQUtDLFdBQUwsSUFBb0IsQ0FBcEI7QUFDSDs7O1dBRUQsMEJBQWtCO0FBQ2QsV0FBS0EsV0FBTCxJQUFvQixDQUFwQjtBQUNIOzs7V0FFRCwyQkFBbUI7QUFDZixXQUFLQyxZQUFMLElBQXFCLENBQXJCO0FBQ0g7OztXQUVELDJCQUFtQjtBQUNmLFdBQUtBLFlBQUwsSUFBcUIsQ0FBckI7QUFDSDs7O1dBRUQsdUJBQWU7QUFDWCxXQUFLRyxRQUFMLElBQWlCLEdBQWpCO0FBQ0g7OztXQUVELHVCQUFlO0FBQ1gsV0FBS0EsUUFBTCxJQUFpQixHQUFqQjtBQUNIOzs7V0FFRCx3QkFBZ0I7QUFDWixXQUFLQyxTQUFMLElBQWtCLENBQWxCO0FBQ0g7OztXQUVELHdCQUFnQjtBQUNaLFdBQUtBLFNBQUwsSUFBa0IsQ0FBbEI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2h5cGVmaXRtZW50Ly4vc3JjL3NjcmlwdHMvd2hlZWwuanM/ZTMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBXaGVlbCB7XG4gICAgY29uc3RydWN0b3IodGlyZVdpZHRoLCB0aXJlUHJvZmlsZSwgdGlyZURpYW1ldGVyLCByaW1XaWR0aCwgcmltT2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLnRpcmVXaWR0aCA9IHRpcmVXaWR0aDtcbiAgICAgICAgICAgIHRoaXMudGlyZVByb2ZpbGUgPSB0aXJlUHJvZmlsZTtcbiAgICAgICAgICAgIHRoaXMudGlyZURpYW1ldGVyID0gdGlyZURpYW1ldGVyO1xuICAgICAgICAgICAgdGhpcy5yaW1XaWR0aCA9IHJpbVdpZHRoO1xuICAgICAgICAgICAgdGhpcy5yaW1PZmZzZXQgPSByaW1PZmZzZXQ7XG4gICAgICAgIH1cbiAgICBcbiAgICBpbmNUaXJlV2lkdGggKCkge1xuICAgICAgICB0aGlzLnRpcmVXaWR0aCArPSA1O1xuICAgIH1cblxuICAgIGRlY1RpcmVXaWR0aCAoKSB7XG4gICAgICAgIHRoaXMudGlyZVdpZHRoIC09IDU7XG4gICAgfVxuXG4gICAgaW5jVGlyZVByb2ZpbGUgKCkge1xuICAgICAgICB0aGlzLnRpcmVQcm9maWxlICs9IDU7XG4gICAgfVxuXG4gICAgZGVjVGlyZVByb2ZpbGUgKCkge1xuICAgICAgICB0aGlzLnRpcmVQcm9maWxlIC09IDU7XG4gICAgfVxuXG4gICAgaW5jVGlyZURpYW1ldGVyICgpIHtcbiAgICAgICAgdGhpcy50aXJlRGlhbWV0ZXIgKz0gMTtcbiAgICB9XG5cbiAgICBkZWNUaXJlRGlhbWV0ZXIgKCkge1xuICAgICAgICB0aGlzLnRpcmVEaWFtZXRlciAtPSAxO1xuICAgIH1cblxuICAgIGluY1JpbVdpZHRoICgpIHtcbiAgICAgICAgdGhpcy5SaW1XaWR0aCArPSAwLjU7XG4gICAgfVxuXG4gICAgZGVjUmltV2lkdGggKCkge1xuICAgICAgICB0aGlzLlJpbVdpZHRoIC09IDAuNTtcbiAgICB9XG4gICAgXG4gICAgaW5jUmltT2Zmc2V0ICgpIHtcbiAgICAgICAgdGhpcy5SaW1PZmZzZXQgKz0gMTtcbiAgICB9XG5cbiAgICBkZWNSaW1PZmZzZXQgKCkge1xuICAgICAgICB0aGlzLlJpbU9mZnNldCAtPSAxO1xuICAgIH1cbn1cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiV2hlZWwiLCJ0aXJlV2lkdGgiLCJ0aXJlUHJvZmlsZSIsInRpcmVEaWFtZXRlciIsInJpbVdpZHRoIiwicmltT2Zmc2V0IiwiUmltV2lkdGgiLCJSaW1PZmZzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/wheel.js\n");

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