webpackHotUpdate("static/development/pages/book.js",{

/***/ "./components/Log.js":
/*!***************************!*\
  !*** ./components/Log.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Log; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/esm/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _styles_Log_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/Log.scss */ "./styles/Log.scss");
/* harmony import */ var _styles_Log_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_Log_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);







var _jsxFileName = "/Users/codychoi/Desktop/meshn/components/Log.js";












var Log =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Log, _React$Component);

  function Log(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Log);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Log).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onHandleGymBooking", function () {
      _this.props.chooseGym(_this.props.data);

      _this.props.openModal(_this.props.data);

      var decomposedNameArray = _this.props.data.name.split('/');

      var gymDocId = decomposedNameArray.splice(decomposedNameArray.length - 1)[0];

      _this.props.getBookedTimes(gymDocId, 'gym');
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Log, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          type = _this$props.type;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2593281450" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, type === 'booking' && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2593281450" + " " + "logContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-2593281450" + " " + "gymName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, data.fields.name.stringValue), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://via.placeholder.com/240x90C",
        alt: "".concat(data.fields.name, " image"),
        className: "jsx-2593281450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2593281450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Location: ", data.fields.location.stringValue), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2593281450" + " " + "availabilityContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_12__["default"], {
        expandIcon: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }),
        "aria-controls": "panel1a-content",
        id: "panel1a-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Hours")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2593281450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, data.fields.availability.arrayValue.values.map(function (slot, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          key: index,
          className: "jsx-2593281450" + " " + "timeSlot",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, slot.mapValue.fields.day.stringValue, " - ", slot.mapValue.fields.start_time.stringValue ? "".concat(moment__WEBPACK_IMPORTED_MODULE_17__(slot.mapValue.fields.start_time.stringValue, 'HH:mm:ss').format('h:mm a'), " - ").concat(moment__WEBPACK_IMPORTED_MODULE_17__(slot.mapValue.fields.end_time.stringValue, 'HH:mm:ss').format('h:mm a')) : slot.mapValue.fields.status.stringValue);
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2593281450" + " " + "bookBtn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        onClick: this.onHandleGymBooking,
        variant: "contained",
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Book")))), type === 'user' && data && data.map(function (log) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: log.modified,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-2593281450" + " " + "logContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
          className: "jsx-2593281450",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, log.gym_name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: "https://via.placeholder.com/240x90C",
          alt: "".concat(log.gym_name, " image"),
          className: "jsx-2593281450",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-2593281450",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "jsx-2593281450",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, "Location: ", log.gym_location), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "jsx-2593281450",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "Time booked: ", moment__WEBPACK_IMPORTED_MODULE_17__(log.start_time, 'HH:mm:ss').format('h:mm a'), " - ", moment__WEBPACK_IMPORTED_MODULE_17__(log.end_time, 'HH:mm:ss').format('h:mm a')))));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2593281450",
        __self: this
      }, ".logContainer.jsx-2593281450{padding:16px !important;position:relative height:100%;overflow:scroll;margin:16px 0;}img.jsx-2593281450{margin:16px 0;}.availabilityContainer.jsx-2593281450{margin:16px 0;}.availabilityContainer.jsx-2593281450 p.jsx-2593281450{margin-left:16px;}.bookBtn.jsx-2593281450{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb2R5Y2hvaS9EZXNrdG9wL21lc2huL2NvbXBvbmVudHMvTG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGUyxBQUdxQyxBQU9WLEFBR0EsQUFHRyxBQUdKLGNBUmYsQUFHQSxHQUdBLE9BWmMsOEJBQ0ksZ0JBQ0YsSUFjakIsVUFiQyx1RkFhQSIsImZpbGUiOiIvVXNlcnMvY29keWNob2kvRGVza3RvcC9tZXNobi9jb21wb25lbnRzL0xvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRXhwYW5zaW9uUGFuZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRXhwYW5zaW9uUGFuZWwnO1xuaW1wb3J0IEV4cGFuc2lvblBhbmVsU3VtbWFyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbFN1bW1hcnknO1xuaW1wb3J0IEV4cGFuc2lvblBhbmVsRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbERldGFpbHMnO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCAnLi4vc3R5bGVzL0xvZy5zY3NzJ1xuXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgb25IYW5kbGVHeW1Cb29raW5nID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuY2hvb3NlR3ltKHRoaXMucHJvcHMuZGF0YSlcbiAgICB0aGlzLnByb3BzLm9wZW5Nb2RhbCh0aGlzLnByb3BzLmRhdGEpO1xuICAgIGxldCBkZWNvbXBvc2VkTmFtZUFycmF5ID0gdGhpcy5wcm9wcy5kYXRhLm5hbWUuc3BsaXQoJy8nKVxuICAgIGxldCBneW1Eb2NJZCA9IGRlY29tcG9zZWROYW1lQXJyYXkuc3BsaWNlKGRlY29tcG9zZWROYW1lQXJyYXkubGVuZ3RoIC0gMSlbMF1cbiAgICB0aGlzLnByb3BzLmdldEJvb2tlZFRpbWVzKGd5bURvY0lkLCAnZ3ltJylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7ZGF0YSwgdHlwZX0gPSB0aGlzLnByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAge3R5cGUgPT09ICdib29raW5nJyAmJlxuICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJneW1OYW1lXCI+XG4gICAgICAgICAgICAgIHtkYXRhLmZpZWxkcy5uYW1lLnN0cmluZ1ZhbHVlfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI0MHg5MENcIiBhbHQ9e2Ake2RhdGEuZmllbGRzLm5hbWV9IGltYWdlYH0vPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIExvY2F0aW9uOiB7ZGF0YS5maWVsZHMubG9jYXRpb24uc3RyaW5nVmFsdWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJpbGl0eUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxFeHBhbnNpb25QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYS1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhbmVsMWEtaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkhvdXJzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZmllbGRzLmF2YWlsYWJpbGl0eS5hcnJheVZhbHVlLnZhbHVlcy5tYXAoKHNsb3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aW1lU2xvdFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nsb3QubWFwVmFsdWUuZmllbGRzLmRheS5zdHJpbmdWYWx1ZX0gLSB7c2xvdC5tYXBWYWx1ZS5maWVsZHMuc3RhcnRfdGltZS5zdHJpbmdWYWx1ZSA/IGAke21vbWVudChzbG90Lm1hcFZhbHVlLmZpZWxkcy5zdGFydF90aW1lLnN0cmluZ1ZhbHVlLCAnSEg6bW06c3MnKS5mb3JtYXQoJ2g6bW0gYScpfSAtICR7bW9tZW50KHNsb3QubWFwVmFsdWUuZmllbGRzLmVuZF90aW1lLnN0cmluZ1ZhbHVlLCAnSEg6bW06c3MnKS5mb3JtYXQoJ2g6bW0gYScpfWAgOiBzbG90Lm1hcFZhbHVlLmZpZWxkcy5zdGF0dXMuc3RyaW5nVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9FeHBhbnNpb25QYW5lbERldGFpbHM+XG4gICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va0J0blwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25IYW5kbGVHeW1Cb29raW5nfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgQm9va1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgfVxuICAgICAgeyh0eXBlID09PSAndXNlcicgJiYgZGF0YSkgJiZcbiAgICAgICAgZGF0YS5tYXAobG9nID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhcGVyIGtleT17bG9nLm1vZGlmaWVkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICB7bG9nLmd5bV9uYW1lfVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjQweDkwQ1wiIGFsdD17YCR7bG9nLmd5bV9uYW1lfSBpbWFnZWB9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+TG9jYXRpb246IHtsb2cuZ3ltX2xvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlRpbWUgYm9va2VkOiB7bW9tZW50KGxvZy5zdGFydF90aW1lLCAnSEg6bW06c3MnKS5mb3JtYXQoJ2g6bW0gYScpfSAtIHttb21lbnQobG9nLmVuZF90aW1lLCAnSEg6bW06c3MnKS5mb3JtYXQoJ2g6bW0gYScpfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5sb2dDb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF2YWlsYWJpbGl0eUNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF2YWlsYWJpbGl0eUNvbnRhaW5lciBwIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm9va0J0biB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/codychoi/Desktop/meshn/components/Log.js */"));
    }
  }]);

  return Log;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=book.js.ad756b6823286ebfdf8c.hot-update.js.map