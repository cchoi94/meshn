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
        className: "jsx-2593281450" + " " + "container",
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
        className: "jsx-2593281450" + " " + "logContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-2593281450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, data.fields.name.stringValue), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://via.placeholder.com/240x90C",
        alt: "".concat(data.fields.name, " image"),
        className: "jsx-2593281450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2593281450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Location: ", data.fields.location.stringValue), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2593281450" + " " + "availabilityContainer",
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
        className: "jsx-2593281450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, data.fields.availability.arrayValue.values.map(function (slot, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          key: index,
          className: "jsx-2593281450" + " " + "timeSlot",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, slot.mapValue.fields.day.stringValue, " ", slot.mapValue.fields.start_time.stringValue ? "".concat(moment__WEBPACK_IMPORTED_MODULE_16__(slot.mapValue.fields.start_time.stringValue, 'HH:mm:ss').format('h:mm a'), " - ").concat(moment__WEBPACK_IMPORTED_MODULE_16__(slot.mapValue.fields.end_time.stringValue, 'HH:mm:ss').format('h:mm a')) : 'closed');
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2593281450" + " " + "bookBtn",
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
          className: "jsx-2593281450" + " " + "logContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
          className: "jsx-2593281450",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, log.gym_name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: "https://via.placeholder.com/240x90C",
          alt: "".concat(log.gym_name, " image"),
          className: "jsx-2593281450",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-2593281450",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "jsx-2593281450",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "Location: ", log.gym_location), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "jsx-2593281450",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, "Time booked: ", moment__WEBPACK_IMPORTED_MODULE_16__(log.start_time, 'HH:mm:ss').format('h:mm a'), " - ", moment__WEBPACK_IMPORTED_MODULE_16__(log.end_time, 'HH:mm:ss').format('h:mm a')))));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2593281450",
        __self: this
      }, ".logContainer.jsx-2593281450{padding:16px !important;position:relative height:100%;overflow:scroll;margin:16px 0;}img.jsx-2593281450{margin:16px 0;}.availabilityContainer.jsx-2593281450{margin:16px 0;}.availabilityContainer.jsx-2593281450 p.jsx-2593281450{margin-left:16px;}.bookBtn.jsx-2593281450{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb2R5Y2hvaS9EZXNrdG9wL21lc2huL2NvbXBvbmVudHMvTG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGUyxBQUdxQyxBQU9WLEFBR0EsQUFHRyxBQUdKLGNBUmYsQUFHQSxHQUdBLE9BWmMsOEJBQ0ksZ0JBQ0YsSUFjakIsVUFiQyx1RkFhQSIsImZpbGUiOiIvVXNlcnMvY29keWNob2kvRGVza3RvcC9tZXNobi9jb21wb25lbnRzL0xvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRXhwYW5zaW9uUGFuZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRXhwYW5zaW9uUGFuZWwnO1xuaW1wb3J0IEV4cGFuc2lvblBhbmVsU3VtbWFyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbFN1bW1hcnknO1xuaW1wb3J0IEV4cGFuc2lvblBhbmVsRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbERldGFpbHMnO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcblxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIG9uSGFuZGxlR3ltQm9va2luZyA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNob29zZUd5bSh0aGlzLnByb3BzLmRhdGEpXG4gICAgdGhpcy5wcm9wcy5vcGVuTW9kYWwodGhpcy5wcm9wcy5kYXRhKTtcbiAgICBsZXQgZGVjb21wb3NlZE5hbWVBcnJheSA9IHRoaXMucHJvcHMuZGF0YS5uYW1lLnNwbGl0KCcvJylcbiAgICBsZXQgZ3ltRG9jSWQgPSBkZWNvbXBvc2VkTmFtZUFycmF5LnNwbGljZShkZWNvbXBvc2VkTmFtZUFycmF5Lmxlbmd0aCAtIDEpWzBdXG4gICAgdGhpcy5wcm9wcy5nZXRCb29rZWRUaW1lcyhneW1Eb2NJZCwgJ2d5bScpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2RhdGEsIHR5cGV9ID0gdGhpcy5wcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIHt0eXBlID09PSAnYm9va2luZycgJiZcbiAgICAgICAgPFBhcGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nQ29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgIHtkYXRhLmZpZWxkcy5uYW1lLnN0cmluZ1ZhbHVlfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI0MHg5MENcIiBhbHQ9e2Ake2RhdGEuZmllbGRzLm5hbWV9IGltYWdlYH0vPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIExvY2F0aW9uOiB7ZGF0YS5maWVsZHMubG9jYXRpb24uc3RyaW5nVmFsdWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJpbGl0eUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxFeHBhbnNpb25QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYS1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhbmVsMWEtaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkhvdXJzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZmllbGRzLmF2YWlsYWJpbGl0eS5hcnJheVZhbHVlLnZhbHVlcy5tYXAoKHNsb3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpbWVTbG90XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2xvdC5tYXBWYWx1ZS5maWVsZHMuZGF5LnN0cmluZ1ZhbHVlfSB7c2xvdC5tYXBWYWx1ZS5maWVsZHMuc3RhcnRfdGltZS5zdHJpbmdWYWx1ZSA/IGAke21vbWVudChzbG90Lm1hcFZhbHVlLmZpZWxkcy5zdGFydF90aW1lLnN0cmluZ1ZhbHVlLCAnSEg6bW06c3MnKS5mb3JtYXQoJ2g6bW0gYScpfSAtICR7bW9tZW50KHNsb3QubWFwVmFsdWUuZmllbGRzLmVuZF90aW1lLnN0cmluZ1ZhbHVlLCAnSEg6bW06c3MnKS5mb3JtYXQoJ2g6bW0gYScpfWAgOiAnY2xvc2VkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgIDwvRXhwYW5zaW9uUGFuZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rQnRuXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkhhbmRsZUd5bUJvb2tpbmd9IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICBCb29rXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICB9XG4gICAgICB7KHR5cGUgPT09ICd1c2VyJyAmJiBkYXRhKSAmJlxuICAgICAgICBkYXRhLm1hcChsb2cgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFwZXIga2V5PXtsb2cubW9kaWZpZWR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgIHtsb2cuZ3ltX25hbWV9XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNDB4OTBDXCIgYWx0PXtgJHtsb2cuZ3ltX25hbWV9IGltYWdlYH0vPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cD5Mb2NhdGlvbjoge2xvZy5neW1fbG9jYXRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+VGltZSBib29rZWQ6IHttb21lbnQobG9nLnN0YXJ0X3RpbWUsICdISDptbTpzcycpLmZvcm1hdCgnaDptbSBhJyl9IC0ge21vbWVudChsb2cuZW5kX3RpbWUsICdISDptbTpzcycpLmZvcm1hdCgnaDptbSBhJyl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmxvZ0NvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXZhaWxhYmlsaXR5Q29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXZhaWxhYmlsaXR5Q29udGFpbmVyIHAge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib29rQnRuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/codychoi/Desktop/meshn/components/Log.js */"));
    }
  }]);

  return Log;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.7a243848bdd7b8ba2f93.hot-update.js.map