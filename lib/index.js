!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=4)}([function(e,r){e.exports=require("redux")},function(e,r){e.exports=require("react-router-redux")},function(e,r){e.exports=require("redux-logger")},function(e,r){e.exports=require("react-redux")},function(e,r,t){e.exports=t(5)},function(e,r,t){"use strict";t.r(r),t.d(r,"createReducers",function(){return n}),t.d(r,"getStore",function(){return o}),t.d(r,"createConnect",function(){return u});var n=t(6).createReducers,o=t(7).getStore,u=t(8).createConnect},function(e,r,t){"use strict";t.r(r),t.d(r,"createReducers",function(){return u});var n=t(0),o=t(1),u=function(e){var r={};return e.map(function(e){r[e.props]=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===e.type?t.data:r}}),r.routing=o.routerReducer,Object(n.combineReducers)(r)}},function(e,r,t){"use strict";t.r(r),t.d(r,"getStore",function(){return c});var n=t(0),o=t(2),u=Object(o.createLogger)({collapsed:!0,level:"info"}),c=function(e){return Object(n.createStore)(e,Object(n.applyMiddleware)(u))}},function(e,r,t){"use strict";t.r(r),t.d(r,"createConnect",function(){return c});var n=t(3),o=t(0);function u(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t={},c=[];return r.map(function(e){c=[].concat(u(c),[e.props]),t[e.setProps]=function(r){return{type:e.type,data:r}}}),Object(n.connect)(function(e){return function(e,r){var t={};return r.map(function(r){t[r]=e[r]}),t}(e,c)},function(e){return function(e,r){return Object(o.bindActionCreators)(r,e)}(e,t)})(e)}}]));