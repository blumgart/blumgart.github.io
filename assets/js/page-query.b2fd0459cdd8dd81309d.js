(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{38:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n(7));var u=a(n(44)),o=a(n(6)),r=n(8);t.default=function(e,t){return new Promise(function(t){var a=new RegExp("^".concat(o.default.pathPrefix)),d=(0,r.unslash)(e.path.replace(a,"/")),i=d?"/".concat(d,".json"):"/index.json";n(45)("./data".concat(i)).then(function(n){u.default.set(e.fullPath,n.default.data),t(n)})})}},44:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(1)),o={};u.default.util.defineReactive(o,"data",{});var r={set:function(e,t){return u.default.set(o.data,e,t)},delete:function(e){return u.default.delete(o.data,e)},get:function(e){return o.data[e]},has:function(e){return!!o.data[e]}};t.default=r},45:function(e,t){function n(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=45}}]);