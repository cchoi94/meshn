webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/actions/user-actions */ "./redux/actions/user-actions.js");
/* harmony import */ var _redux_actions_gym_actions_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../redux/actions/gym-actions.js */ "./redux/actions/gym-actions.js");
/* harmony import */ var _components_Log__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Log */ "./components/Log.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Login */ "./components/Login.js");
/* harmony import */ var _components_Requests_FirebaseConfig__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Requests/FirebaseConfig */ "./components/Requests/FirebaseConfig.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_18__);







var _jsxFileName = "/Users/codychoi/Desktop/meshn/pages/index.js";













var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "logout", function () {
      _components_Requests_FirebaseConfig__WEBPACK_IMPORTED_MODULE_17__["default"].auth().signOut();

      _this.props.onUpdateUser(null);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // this.props.onAuthListener();
      _components_Requests_FirebaseConfig__WEBPACK_IMPORTED_MODULE_17__["default"].auth().onAuthStateChanged(function (user) {
        if (user) {
          _this2.props.onUpdateUser(user);

          _this2.props.onGetBookedTimes(_this2.props.user.user_email, 'user');
        } else {
          _this2.props.onUpdateUser(null);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["4155624869", [this.props.user ? null : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.props.user ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["4155624869", [this.props.user ? null : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["4155624869", [this.props.user ? null : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Activity Log"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Log__WEBPACK_IMPORTED_MODULE_15__["default"], {
        type: "user",
        data: this.props.bookedTimes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4155624869",
        dynamic: [this.props.user ? null : 'none'],
        __self: this
      }, ".bottomNav{display:".concat(this.props.user ? null : 'none', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb2R5Y2hvaS9EZXNrdG9wL21lc2huL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDNEIsQUFJYyxxQ0FBQyIsImZpbGUiOiIvVXNlcnMvY29keWNob2kvRGVza3RvcC9tZXNobi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVwZGF0ZVVzZXIgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3VzZXItYWN0aW9ucydcbmltcG9ydCB7IGdldEJvb2tlZFRpbWVzIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9neW0tYWN0aW9ucy5qcydcbmltcG9ydCBMb2cgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2cnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbidcbmltcG9ydCBmaXJlYmFzZUFwcCBmcm9tICcuLi9jb21wb25lbnRzL1JlcXVlc3RzL0ZpcmViYXNlQ29uZmlnJ1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLnNjc3NcIlxuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGxvZ291dCA9ICgpID0+IHtcbiAgICBmaXJlYmFzZUFwcC5hdXRoKCkuc2lnbk91dCgpXG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZVVzZXIobnVsbClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIHRoaXMucHJvcHMub25BdXRoTGlzdGVuZXIoKTtcbiAgICBmaXJlYmFzZUFwcC5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0aGlzLnByb3BzLm9uVXBkYXRlVXNlcih1c2VyKVxuICAgICAgICB0aGlzLnByb3BzLm9uR2V0Qm9va2VkVGltZXModGhpcy5wcm9wcy51c2VyLnVzZXJfZW1haWwsICd1c2VyJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLnByb3BzLm9uVXBkYXRlVXNlcihudWxsKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy51c2VyID8gXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPkFjdGl2aXR5IExvZzwvcD5cbiAgICAgICAgICAgIDxMb2cgXG4gICAgICAgICAgICAgIHR5cGU9XCJ1c2VyXCJcbiAgICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5ib29rZWRUaW1lc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICA6IDxMb2dpbiAvPn1cbiAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAuYm90dG9tTmF2IHtcbiAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5wcm9wcy51c2VyID8gbnVsbCA6ICdub25lJ31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbmNvbnN0IHVzZXJTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzdGF0ZSA9PiBzdGF0ZS51c2VyLFxuICB1c2VyID0+IHVzZXJcbilcblxuY29uc3QgYm9va2VkVGltZXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzdGF0ZSA9PiBzdGF0ZS5ib29rZWRUaW1lcyxcbiAgYm9va2VkVGltZXMgPT4gYm9va2VkVGltZXNcbilcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gY3JlYXRlU2VsZWN0b3IoXG4gIHVzZXJTZWxlY3RvcixcbiAgYm9va2VkVGltZXNTZWxlY3RvcixcbiAgKHVzZXIsIGJvb2tlZFRpbWVzKSA9PiAoe1xuICAgIHVzZXIsXG4gICAgYm9va2VkVGltZXNcbiAgfSlcbik7XG5cbmNvbnN0IG1hcEFjdGlvbnNUb1Byb3BzID0ge1xuICBvblVwZGF0ZVVzZXI6IHVwZGF0ZVVzZXIsXG4gIG9uR2V0Qm9va2VkVGltZXM6IGdldEJvb2tlZFRpbWVzLFxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcEFjdGlvbnNUb1Byb3BzKShJbmRleCkpOyJdfQ== */\n/*@ sourceURL=/Users/codychoi/Desktop/meshn/pages/index.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var userSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_11__["createSelector"])(function (state) {
  return state.user;
}, function (user) {
  return user;
});
var bookedTimesSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_11__["createSelector"])(function (state) {
  return state.bookedTimes;
}, function (bookedTimes) {
  return bookedTimes;
});
var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_11__["createSelector"])(userSelector, bookedTimesSelector, function (user, bookedTimes) {
  return {
    user: user,
    bookedTimes: bookedTimes
  };
});
var mapActionsToProps = {
  onUpdateUser: _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_13__["updateUser"],
  onGetBookedTimes: _redux_actions_gym_actions_js__WEBPACK_IMPORTED_MODULE_14__["getBookedTimes"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapActionsToProps)(Index)));

/***/ })

})
//# sourceMappingURL=index.js.99ca503a772017a79fc5.hot-update.js.map