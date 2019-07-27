webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);







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
        className: "jsx-3999789564" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, type === 'booking' && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3999789564" + " " + "logContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3999789564" + " " + "gymName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, data.fields.name.stringValue), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://via.placeholder.com/240x90C",
        alt: "".concat(data.fields.name, " image"),
        className: "jsx-3999789564",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3999789564",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Location: ", data.fields.location.stringValue), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3999789564" + " " + "availabilityContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_12__["default"], {
        expandIcon: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }),
        "aria-controls": "panel1a-content",
        id: "panel1a-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Hours")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3999789564",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, data.fields.availability.arrayValue.values.map(function (slot, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          key: index,
          className: "jsx-3999789564" + " " + "timeSlot",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, slot.mapValue.fields.day.stringValue, " - ", slot.mapValue.fields.start_time.stringValue ? "".concat(moment__WEBPACK_IMPORTED_MODULE_16__(slot.mapValue.fields.start_time.stringValue, 'HH:mm:ss').format('h:mm a'), " - ").concat(moment__WEBPACK_IMPORTED_MODULE_16__(slot.mapValue.fields.end_time.stringValue, 'HH:mm:ss').format('h:mm a')) : slot.mapValue.fields.status.stringValue);
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3999789564" + " " + "bookBtn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        onClick: this.onHandleGymBooking,
        variant: "contained",
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Book")))), type === 'user' && data && data.map(function (log) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: log.modified,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-3999789564" + " " + "logContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
          className: "jsx-3999789564" + " " + "gymName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, log.gym_name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: "https://via.placeholder.com/240x90C",
          alt: "".concat(log.gym_name, " image"),
          className: "jsx-3999789564",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-3999789564",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "jsx-3999789564",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "Location: ", log.gym_location), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "jsx-3999789564",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, "Time booked: ", moment__WEBPACK_IMPORTED_MODULE_16__(log.start_time, 'HH:mm:ss').format('h:mm a'), " - ", moment__WEBPACK_IMPORTED_MODULE_16__(log.end_time, 'HH:mm:ss').format('h:mm a')))));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3999789564",
        __self: this
      }, "img.jsx-3999789564{margin:16px 0;}.availabilityContainer.jsx-3999789564{margin:16px 0;}.availabilityContainer.jsx-3999789564 p.jsx-3999789564{margin-left:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb2R5Y2hvaS9EZXNrdG9wL21lc2huL2NvbXBvbmVudHMvTG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGUyxBQUcyQixBQUdBLEFBR0csY0FMbkIsQUFHQSxHQUdBIiwiZmlsZSI6Ii9Vc2Vycy9jb2R5Y2hvaS9EZXNrdG9wL21lc2huL2NvbXBvbmVudHMvTG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBFeHBhbnNpb25QYW5lbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbCc7XG5pbXBvcnQgRXhwYW5zaW9uUGFuZWxTdW1tYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0V4cGFuc2lvblBhbmVsU3VtbWFyeSc7XG5pbXBvcnQgRXhwYW5zaW9uUGFuZWxEZXRhaWxzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0V4cGFuc2lvblBhbmVsRGV0YWlscyc7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgb25IYW5kbGVHeW1Cb29raW5nID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuY2hvb3NlR3ltKHRoaXMucHJvcHMuZGF0YSlcbiAgICB0aGlzLnByb3BzLm9wZW5Nb2RhbCh0aGlzLnByb3BzLmRhdGEpO1xuICAgIGxldCBkZWNvbXBvc2VkTmFtZUFycmF5ID0gdGhpcy5wcm9wcy5kYXRhLm5hbWUuc3BsaXQoJy8nKVxuICAgIGxldCBneW1Eb2NJZCA9IGRlY29tcG9zZWROYW1lQXJyYXkuc3BsaWNlKGRlY29tcG9zZWROYW1lQXJyYXkubGVuZ3RoIC0gMSlbMF1cbiAgICB0aGlzLnByb3BzLmdldEJvb2tlZFRpbWVzKGd5bURvY0lkLCAnZ3ltJylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7ZGF0YSwgdHlwZX0gPSB0aGlzLnByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAge3R5cGUgPT09ICdib29raW5nJyAmJlxuICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJneW1OYW1lXCI+XG4gICAgICAgICAgICAgIHtkYXRhLmZpZWxkcy5uYW1lLnN0cmluZ1ZhbHVlfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI0MHg5MENcIiBhbHQ9e2Ake2RhdGEuZmllbGRzLm5hbWV9IGltYWdlYH0vPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIExvY2F0aW9uOiB7ZGF0YS5maWVsZHMubG9jYXRpb24uc3RyaW5nVmFsdWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJpbGl0eUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxFeHBhbnNpb25QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYS1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhbmVsMWEtaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkhvdXJzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZmllbGRzLmF2YWlsYWJpbGl0eS5hcnJheVZhbHVlLnZhbHVlcy5tYXAoKHNsb3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aW1lU2xvdFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nsb3QubWFwVmFsdWUuZmllbGRzLmRheS5zdHJpbmdWYWx1ZX0gLSB7c2xvdC5tYXBWYWx1ZS5maWVsZHMuc3RhcnRfdGltZS5zdHJpbmdWYWx1ZSA/IGAke21vbWVudChzbG90Lm1hcFZhbHVlLmZpZWxkcy5zdGFydF90aW1lLnN0cmluZ1ZhbHVlLCAnSEg6bW06c3MnKS5mb3JtYXQoJ2g6bW0gYScpfSAtICR7bW9tZW50KHNsb3QubWFwVmFsdWUuZmllbGRzLmVuZF90aW1lLnN0cmluZ1ZhbHVlLCAnSEg6bW06c3MnKS5mb3JtYXQoJ2g6bW0gYScpfWAgOiBzbG90Lm1hcFZhbHVlLmZpZWxkcy5zdGF0dXMuc3RyaW5nVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9FeHBhbnNpb25QYW5lbERldGFpbHM+XG4gICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va0J0blwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25IYW5kbGVHeW1Cb29raW5nfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgQm9va1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgfVxuICAgICAgeyh0eXBlID09PSAndXNlcicgJiYgZGF0YSkgJiZcbiAgICAgICAgZGF0YS5tYXAobG9nID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhcGVyIGtleT17bG9nLm1vZGlmaWVkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZ3ltTmFtZVwiPlxuICAgICAgICAgICAgICAgICAge2xvZy5neW1fbmFtZX1cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI0MHg5MENcIiBhbHQ9e2Ake2xvZy5neW1fbmFtZX0gaW1hZ2VgfS8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwPkxvY2F0aW9uOiB7bG9nLmd5bV9sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICA8cD5UaW1lIGJvb2tlZDoge21vbWVudChsb2cuc3RhcnRfdGltZSwgJ0hIOm1tOnNzJykuZm9ybWF0KCdoOm1tIGEnKX0gLSB7bW9tZW50KGxvZy5lbmRfdGltZSwgJ0hIOm1tOnNzJykuZm9ybWF0KCdoOm1tIGEnKX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdmFpbGFiaWxpdHlDb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdmFpbGFiaWxpdHlDb250YWluZXIgcCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gLmJvb2tCdG4ge1xuICAgICAgICAgIC8vICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAvLyAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmRcbiAgICAgICAgICAvLyB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xuICB9XG59Il19 */\n/*@ sourceURL=/Users/codychoi/Desktop/meshn/components/Log.js */"));
    }
  }]);

  return Log;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.d0bf713270e9ebba9e5c.hot-update.js.map