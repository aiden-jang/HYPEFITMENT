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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar View = /*#__PURE__*/function () {\n  function View(ctx, canvas, wheel) {\n    _classCallCheck(this, View);\n\n    this.ctx = ctx;\n    this.wheel = wheel;\n    this.canvas = canvas;\n    this.calculate();\n    this.drawRim();\n    this.drawTire();\n  }\n\n  _createClass(View, [{\n    key: \"calculate\",\n    value: function calculate() {\n      this.centerX = this.canvas.width / 2 + this.wheel.rimOffset;\n      this.centerY = this.canvas.height / 2;\n      this.lengthX = this.wheel.rimWidth * 8;\n      this.lengthY = this.wheel.tireDiameter * 6;\n      this.leftX = this.centerX - this.lengthX;\n      this.rightX = this.centerX + this.lengthX;\n      this.leftY = this.centerY - this.lengthY;\n      this.rightY = this.centerY + this.lengthY;\n    }\n  }, {\n    key: \"drawSuspension\",\n    value: function drawSuspension() {}\n  }, {\n    key: \"drawRim\",\n    value: function drawRim() {\n      this.ctx.beginPath(); // left\n\n      this.ctx.moveTo(this.leftX, this.leftY);\n      this.ctx.lineTo(this.leftX, this.rightY); // top\n\n      this.ctx.moveTo(this.leftX, this.leftY);\n      this.ctx.lineTo(this.rightX, this.leftY); // right\n\n      this.ctx.moveTo(this.rightX, this.leftY);\n      this.ctx.lineTo(this.rightX, this.rightY); // bottom\n\n      this.ctx.moveTo(this.rightX, this.rightY);\n      this.ctx.lineTo(this.leftX, this.rightY);\n      this.ctx.stroke();\n    }\n  }, {\n    key: \"drawTire\",\n    value: function drawTire() {\n      this.ctx.beginPath();\n      this.ctx.moveTo(100, 20);\n      this.ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);\n      this.ctx.stroke();\n    }\n  }]);\n\n  return View;\n}(); // var oldWheel = new Wheel(275,40,18,9.5,8);\n// var newWheel = new Wheel(295,40,19,10.5,15);\n// this.tireWidth = tireWidth; 275 // 295\n// this.tireProfile = tireProfile; 40 // 40\n// this.tireDiameter = tireDiameter; 18 // 19\n// this.RimWidth = RimWidth;  9.5 // 10\n// this.RimOffset = RimOffset; 8  // 15\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUJBO0FBQ2pCLGdCQUFZQyxHQUFaLEVBQWlCQyxNQUFqQixFQUF5QkMsS0FBekIsRUFBZ0M7QUFBQTs7QUFDNUIsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0UsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBRUEsU0FBS0UsU0FBTDtBQUNBLFNBQUtDLE9BQUw7QUFDQSxTQUFLQyxRQUFMO0FBRUg7Ozs7V0FHRCxxQkFBWTtBQUNSLFdBQUtDLE9BQUwsR0FBZSxLQUFLTCxNQUFMLENBQVlNLEtBQVosR0FBb0IsQ0FBcEIsR0FBd0IsS0FBS0wsS0FBTCxDQUFXTSxTQUFsRDtBQUNBLFdBQUtDLE9BQUwsR0FBZSxLQUFLUixNQUFMLENBQVlTLE1BQVosR0FBcUIsQ0FBcEM7QUFDQSxXQUFLQyxPQUFMLEdBQWUsS0FBS1QsS0FBTCxDQUFXVSxRQUFYLEdBQXNCLENBQXJDO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLEtBQUtYLEtBQUwsQ0FBV1ksWUFBWCxHQUEwQixDQUF6QztBQUVBLFdBQUtDLEtBQUwsR0FBYSxLQUFLVCxPQUFMLEdBQWUsS0FBS0ssT0FBakM7QUFDQSxXQUFLSyxNQUFMLEdBQWMsS0FBS1YsT0FBTCxHQUFlLEtBQUtLLE9BQWxDO0FBQ0EsV0FBS00sS0FBTCxHQUFhLEtBQUtSLE9BQUwsR0FBZSxLQUFLSSxPQUFqQztBQUNBLFdBQUtLLE1BQUwsR0FBYyxLQUFLVCxPQUFMLEdBQWUsS0FBS0ksT0FBbEM7QUFDSDs7O1dBQ0QsMEJBQWlCLENBRWhCOzs7V0FFRCxtQkFBUztBQUNMLFdBQUtiLEdBQUwsQ0FBU21CLFNBQVQsR0FESyxDQUVMOztBQUNBLFdBQUtuQixHQUFMLENBQVNvQixNQUFULENBQWdCLEtBQUtMLEtBQXJCLEVBQTRCLEtBQUtFLEtBQWpDO0FBQ0EsV0FBS2pCLEdBQUwsQ0FBU3FCLE1BQVQsQ0FBZ0IsS0FBS04sS0FBckIsRUFBNEIsS0FBS0csTUFBakMsRUFKSyxDQUtMOztBQUNBLFdBQUtsQixHQUFMLENBQVNvQixNQUFULENBQWdCLEtBQUtMLEtBQXJCLEVBQTRCLEtBQUtFLEtBQWpDO0FBQ0EsV0FBS2pCLEdBQUwsQ0FBU3FCLE1BQVQsQ0FBZ0IsS0FBS0wsTUFBckIsRUFBNkIsS0FBS0MsS0FBbEMsRUFQSyxDQVFMOztBQUNBLFdBQUtqQixHQUFMLENBQVNvQixNQUFULENBQWdCLEtBQUtKLE1BQXJCLEVBQTZCLEtBQUtDLEtBQWxDO0FBQ0EsV0FBS2pCLEdBQUwsQ0FBU3FCLE1BQVQsQ0FBZ0IsS0FBS0wsTUFBckIsRUFBNkIsS0FBS0UsTUFBbEMsRUFWSyxDQVdMOztBQUNBLFdBQUtsQixHQUFMLENBQVNvQixNQUFULENBQWdCLEtBQUtKLE1BQXJCLEVBQTZCLEtBQUtFLE1BQWxDO0FBQ0EsV0FBS2xCLEdBQUwsQ0FBU3FCLE1BQVQsQ0FBZ0IsS0FBS04sS0FBckIsRUFBNEIsS0FBS0csTUFBakM7QUFFQSxXQUFLbEIsR0FBTCxDQUFTc0IsTUFBVDtBQUVIOzs7V0FFRCxvQkFBVztBQUVQLFdBQUt0QixHQUFMLENBQVNtQixTQUFUO0FBQ0EsV0FBS25CLEdBQUwsQ0FBU29CLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsRUFBckI7QUFDQSxXQUFLcEIsR0FBTCxDQUFTdUIsYUFBVCxDQUF1QixFQUF2QixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxFQUErQyxFQUEvQztBQUNBLFdBQUt2QixHQUFMLENBQVNzQixNQUFUO0FBQ0g7Ozs7S0FFRDtBQUNBO0FBQ1E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2h5cGVmaXRtZW50Ly4vc3JjL3NjcmlwdHMvdmlldy5qcz84MGMzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzLCB3aGVlbCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy53aGVlbCA9IHdoZWVsO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKCk7XG4gICAgICAgIHRoaXMuZHJhd1JpbSgpO1xuICAgICAgICB0aGlzLmRyYXdUaXJlKCk7XG5cbiAgICB9XG5cblxuICAgIGNhbGN1bGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jZW50ZXJYID0gdGhpcy5jYW52YXMud2lkdGggLyAyICsgdGhpcy53aGVlbC5yaW1PZmZzZXQ7XG4gICAgICAgIHRoaXMuY2VudGVyWSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMubGVuZ3RoWCA9IHRoaXMud2hlZWwucmltV2lkdGggKiA4IDtcbiAgICAgICAgdGhpcy5sZW5ndGhZID0gdGhpcy53aGVlbC50aXJlRGlhbWV0ZXIgKiA2XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxlZnRYID0gdGhpcy5jZW50ZXJYIC0gdGhpcy5sZW5ndGhYO1xuICAgICAgICB0aGlzLnJpZ2h0WCA9IHRoaXMuY2VudGVyWCArIHRoaXMubGVuZ3RoWDtcbiAgICAgICAgdGhpcy5sZWZ0WSA9IHRoaXMuY2VudGVyWSAtIHRoaXMubGVuZ3RoWTtcbiAgICAgICAgdGhpcy5yaWdodFkgPSB0aGlzLmNlbnRlclkgKyB0aGlzLmxlbmd0aFk7XG4gICAgfVxuICAgIGRyYXdTdXNwZW5zaW9uKCkge1xuXG4gICAgfVxuXG4gICAgZHJhd1JpbSgpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTsgXG4gICAgICAgIC8vIGxlZnRcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMubGVmdFgsIHRoaXMubGVmdFkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5sZWZ0WCwgdGhpcy5yaWdodFkpO1xuICAgICAgICAvLyB0b3BcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMubGVmdFgsIHRoaXMubGVmdFkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5yaWdodFgsIHRoaXMubGVmdFkpO1xuICAgICAgICAvLyByaWdodFxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5yaWdodFgsIHRoaXMubGVmdFkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5yaWdodFgsIHRoaXMucmlnaHRZKTtcbiAgICAgICAgLy8gYm90dG9tXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnJpZ2h0WCwgdGhpcy5yaWdodFkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5sZWZ0WCwgdGhpcy5yaWdodFkpO1xuXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpOyAgICBcblxuICAgIH1cblxuICAgIGRyYXdUaXJlKCkge1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMTAwLCAyMCk7XG4gICAgICAgIHRoaXMuY3R4LmJlemllckN1cnZlVG8oMjAsIDEwMCwgMjAwLCAxMDAsIDIwMCwgMjApO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9XG59XG4gICAgLy8gdmFyIG9sZFdoZWVsID0gbmV3IFdoZWVsKDI3NSw0MCwxOCw5LjUsOCk7XG4gICAgLy8gdmFyIG5ld1doZWVsID0gbmV3IFdoZWVsKDI5NSw0MCwxOSwxMC41LDE1KTtcbiAgICAgICAgICAgIC8vIHRoaXMudGlyZVdpZHRoID0gdGlyZVdpZHRoOyAyNzUgLy8gMjk1XG4gICAgICAgICAgICAvLyB0aGlzLnRpcmVQcm9maWxlID0gdGlyZVByb2ZpbGU7IDQwIC8vIDQwXG4gICAgICAgICAgICAvLyB0aGlzLnRpcmVEaWFtZXRlciA9IHRpcmVEaWFtZXRlcjsgMTggLy8gMTlcbiAgICAgICAgICAgIC8vIHRoaXMuUmltV2lkdGggPSBSaW1XaWR0aDsgIDkuNSAvLyAxMFxuICAgICAgICAgICAgLy8gdGhpcy5SaW1PZmZzZXQgPSBSaW1PZmZzZXQ7IDggIC8vIDE1XG5cblxuXG4iXSwibmFtZXMiOlsiVmlldyIsImN0eCIsImNhbnZhcyIsIndoZWVsIiwiY2FsY3VsYXRlIiwiZHJhd1JpbSIsImRyYXdUaXJlIiwiY2VudGVyWCIsIndpZHRoIiwicmltT2Zmc2V0IiwiY2VudGVyWSIsImhlaWdodCIsImxlbmd0aFgiLCJyaW1XaWR0aCIsImxlbmd0aFkiLCJ0aXJlRGlhbWV0ZXIiLCJsZWZ0WCIsInJpZ2h0WCIsImxlZnRZIiwicmlnaHRZIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiYmV6aWVyQ3VydmVUbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

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