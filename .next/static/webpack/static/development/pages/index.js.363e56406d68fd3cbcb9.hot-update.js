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
        className: "jsx-1501408521",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, type === 'booking' && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1501408521" + " " + "logContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1501408521" + " " + "gymName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, data.fields.name.stringValue), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://via.placeholder.com/240x90C",
        alt: "".concat(data.fields.name, " image"),
        className: "jsx-1501408521",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1501408521",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Location: ", data.fields.location.stringValue), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1501408521" + " " + "availabilityContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_12__["default"], {
        expandIcon: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }),
        "aria-controls": "panel1a-content",
        id: "panel1a-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Hours")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1501408521",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, data.fields.availability.arrayValue.values.map(function (slot, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          key: index,
          className: "jsx-1501408521" + " " + "timeSlot",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, slot.mapValue.fields.day.stringValue, " - ", slot.mapValue.fields.start_time.stringValue ? "".concat(moment__WEBPACK_IMPORTED_MODULE_16__(slot.mapValue.fields.start_time.stringValue, 'HH:mm:ss').format('h:mm a'), " - ").concat(moment__WEBPACK_IMPORTED_MODULE_16__(slot.mapValue.fields.end_time.stringValue, 'HH:mm:ss').format('h:mm a')) : slot.mapValue.fields.status.stringValue);
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1501408521" + " " + "bookBtn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        onClick: this.onHandleGymBooking,
        variant: "contained",
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Book")))), type === 'user' && data && data.map(function (log) {
        console.log(log);
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: log.modified,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-1501408521" + " " + "logContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-1501408521" + " " + "logHeader",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
          className: "jsx-1501408521" + " " + "gymName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, log.gym_name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
          className: "jsx-1501408521" + " " + "bookedDay",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "Booked for: ", moment__WEBPACK_IMPORTED_MODULE_16__(log.day).format('MMMM Do YYYY'))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: "https://via.placeholder.com/240x90C",
          alt: "".concat(log.gym_name, " image"),
          className: "jsx-1501408521",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-1501408521",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "jsx-1501408521",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, "Location: ", log.gym_location), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "jsx-1501408521",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "Time booked: ", moment__WEBPACK_IMPORTED_MODULE_16__(log.start_time, 'HH:mm:ss').format('h:mm a'), " - ", moment__WEBPACK_IMPORTED_MODULE_16__(log.end_time, 'HH:mm:ss').format('h:mm a')))));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1501408521",
        __self: this
      }, "img.jsx-1501408521{margin:16px 0;}.availabilityContainer.jsx-1501408521{margin:16px 0;}.availabilityContainer.jsx-1501408521 p.jsx-1501408521{margin-left:16px;}.bookBtn.jsx-1501408521{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb2R5Y2hvaS9EZXNrdG9wL21lc2huL2NvbXBvbmVudHMvTG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGUyxBQUcyQixBQUdBLEFBR0csQUFHSixjQVJmLEFBR0EsR0FHQSx5REFJRCxpR0FBQyIsImZpbGUiOiIvVXNlcnMvY29keWNob2kvRGVza3RvcC9tZXNobi9jb21wb25lbnRzL0xvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRXhwYW5zaW9uUGFuZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRXhwYW5zaW9uUGFuZWwnO1xuaW1wb3J0IEV4cGFuc2lvblBhbmVsU3VtbWFyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbFN1bW1hcnknO1xuaW1wb3J0IEV4cGFuc2lvblBhbmVsRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbERldGFpbHMnO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcblxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIG9uSGFuZGxlR3ltQm9va2luZyA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNob29zZUd5bSh0aGlzLnByb3BzLmRhdGEpXG4gICAgdGhpcy5wcm9wcy5vcGVuTW9kYWwodGhpcy5wcm9wcy5kYXRhKTtcbiAgICBsZXQgZGVjb21wb3NlZE5hbWVBcnJheSA9IHRoaXMucHJvcHMuZGF0YS5uYW1lLnNwbGl0KCcvJylcbiAgICBsZXQgZ3ltRG9jSWQgPSBkZWNvbXBvc2VkTmFtZUFycmF5LnNwbGljZShkZWNvbXBvc2VkTmFtZUFycmF5Lmxlbmd0aCAtIDEpWzBdXG4gICAgdGhpcy5wcm9wcy5nZXRCb29rZWRUaW1lcyhneW1Eb2NJZCwgJ2d5bScpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2RhdGEsIHR5cGV9ID0gdGhpcy5wcm9wc1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7dHlwZSA9PT0gJ2Jvb2tpbmcnICYmXG4gICAgICAgIDxQYXBlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImd5bU5hbWVcIj5cbiAgICAgICAgICAgICAge2RhdGEuZmllbGRzLm5hbWUuc3RyaW5nVmFsdWV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjQweDkwQ1wiIGFsdD17YCR7ZGF0YS5maWVsZHMubmFtZX0gaW1hZ2VgfS8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgTG9jYXRpb246IHtkYXRhLmZpZWxkcy5sb2NhdGlvbi5zdHJpbmdWYWx1ZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhaWxhYmlsaXR5Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsPlxuICAgICAgICAgICAgICAgICAgICA8RXhwYW5zaW9uUGFuZWxTdW1tYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDFhLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFuZWwxYS1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+SG91cnM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvRXhwYW5zaW9uUGFuZWxTdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8RXhwYW5zaW9uUGFuZWxEZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5maWVsZHMuYXZhaWxhYmlsaXR5LmFycmF5VmFsdWUudmFsdWVzLm1hcCgoc2xvdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpbWVTbG90XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2xvdC5tYXBWYWx1ZS5maWVsZHMuZGF5LnN0cmluZ1ZhbHVlfSAtIHtzbG90Lm1hcFZhbHVlLmZpZWxkcy5zdGFydF90aW1lLnN0cmluZ1ZhbHVlID8gYCR7bW9tZW50KHNsb3QubWFwVmFsdWUuZmllbGRzLnN0YXJ0X3RpbWUuc3RyaW5nVmFsdWUsICdISDptbTpzcycpLmZvcm1hdCgnaDptbSBhJyl9IC0gJHttb21lbnQoc2xvdC5tYXBWYWx1ZS5maWVsZHMuZW5kX3RpbWUuc3RyaW5nVmFsdWUsICdISDptbTpzcycpLmZvcm1hdCgnaDptbSBhJyl9YCA6IHNsb3QubWFwVmFsdWUuZmllbGRzLnN0YXR1cy5zdHJpbmdWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgIDwvRXhwYW5zaW9uUGFuZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rQnRuXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkhhbmRsZUd5bUJvb2tpbmd9IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICBCb29rXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICB9XG4gICAgICB7KHR5cGUgPT09ICd1c2VyJyAmJiBkYXRhKSAmJlxuICAgICAgICBkYXRhLm1hcChsb2cgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGxvZylcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhcGVyIGtleT17bG9nLm1vZGlmaWVkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ0hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImd5bU5hbWVcIj57bG9nLmd5bV9uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYm9va2VkRGF5XCI+Qm9va2VkIGZvcjoge21vbWVudChsb2cuZGF5KS5mb3JtYXQoJ01NTU0gRG8gWVlZWScpfTwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjQweDkwQ1wiIGFsdD17YCR7bG9nLmd5bV9uYW1lfSBpbWFnZWB9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+TG9jYXRpb246IHtsb2cuZ3ltX2xvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlRpbWUgYm9va2VkOiB7bW9tZW50KGxvZy5zdGFydF90aW1lLCAnSEg6bW06c3MnKS5mb3JtYXQoJ2g6bW0gYScpfSAtIHttb21lbnQobG9nLmVuZF90aW1lLCAnSEg6bW06c3MnKS5mb3JtYXQoJ2g6bW0gYScpfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF2YWlsYWJpbGl0eUNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF2YWlsYWJpbGl0eUNvbnRhaW5lciBwIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm9va0J0biB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/codychoi/Desktop/meshn/components/Log.js */"));
    }
  }]);

  return Log;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.363e56406d68fd3cbcb9.hot-update.js.map