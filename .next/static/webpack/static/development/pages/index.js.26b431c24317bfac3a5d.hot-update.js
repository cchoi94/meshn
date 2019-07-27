webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions/user-actions.js":
/*!***************************************!*\
  !*** ./redux/actions/user-actions.js ***!
  \***************************************/
/*! exports provided: UPDATE_USER, SHOW_ERROR, updateUser, authListener, showError, apiRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ERROR", function() { return SHOW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authListener", function() { return authListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiRequest", function() { return apiRequest; });
/* harmony import */ var _components_Requests_FirebaseInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Requests/FirebaseInstance */ "./components/Requests/FirebaseInstance.js");
/* harmony import */ var _components_Requests_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Requests/FirebaseConfig */ "./components/Requests/FirebaseConfig.js");


var UPDATE_USER = 'users:updateUser';
var SHOW_ERROR = 'users:showError';
var updateUser = function updateUser(newUser) {
  if (newUser) {
    return {
      type: UPDATE_USER,
      payload: {
        user_email: newUser.email,
        user_password: newUser.password
      }
    };
  } else {
    return {
      type: UPDATE_USER,
      payload: null
    };
  }
};
var authListener = function authListener() {
  return function (dispatch) {
    _components_Requests_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch(updateUser(user));
      } else {
        dispatch(updateUser(null));
      }
    });
  };
};
var showError = function showError() {
  return {
    type: SHOW_ERROR,
    payload: {
      user: 'Error my dawg'
    }
  };
};
var apiRequest = function apiRequest() {
  return function (dispatch) {
    _components_Requests_FirebaseInstance__WEBPACK_IMPORTED_MODULE_0__["default"].get('/data').then(function (response) {// dispatch(updateUser(response.newUser))
    }, function (error) {
      dispatch(showError());
    });
  };
};

/***/ })

})
//# sourceMappingURL=index.js.26b431c24317bfac3a5d.hot-update.js.map