(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(module,exports,__webpack_require__){module.exports={button:"Button_button__2Lf63",small:"Button_small__1WqE1",normal:"Button_normal__1pGP4",big:"Button_big__OK2JF"}},278:function(module,exports,__webpack_require__){__webpack_require__(279),__webpack_require__(429),module.exports=__webpack_require__(430)},345:function(module,exports){},430:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(276);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(621)],module)}.call(this,__webpack_require__(431)(module))},621:function(module,exports,__webpack_require__){var map={"./components/Button/Button.stories.tsx":635};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=621},634:function(module,exports,__webpack_require__){},635:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"sizes",(function(){return Button_stories_sizes})),__webpack_require__.d(__webpack_exports__,"disabled",(function(){return Button_stories_disabled}));var dist=__webpack_require__(60),react=__webpack_require__(6),react_default=__webpack_require__.n(react),classnames=(__webpack_require__(634),__webpack_require__(277)),classnames_default=__webpack_require__.n(classnames),Button_module=__webpack_require__(171),Button_module_default=__webpack_require__.n(Button_module),Button_Button=function Button(_ref){var onClick=_ref.onClick,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,children=_ref.children,classes=classnames_default()(Button_module_default.a.button,Button_module_default.a[size]);return react_default.a.createElement("button",{className:classes,type:type,onClick:onClick,disabled:disabled},children)},components_Button_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"Simple Button encapsulating all design variations",displayName:"Button",props:{type:{defaultValue:{value:"button"},description:"Define button behavior. Default: button",name:"type",required:!1,type:{name:'"button" | "submit" | "reset"'}},size:{defaultValue:{value:"normal"},description:"Define button size. Default: normal",name:"size",required:!1,type:{name:'"normal" | "small" | "big"'}},disabled:{defaultValue:{value:!1},description:"Disable button and display the button in gray. Default: false",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Register click event handler.",name:"onClick",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={component:components_Button_Button,title:"Button"};var Button_stories_sizes=function sizes(){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",{style:{marginBottom:"2rem",textAlign:"center"}},react_default.a.createElement(components_Button_Button,{onClick:Object(dist.action)("clicked"),size:"small"},"Small")),react_default.a.createElement("div",{style:{marginBottom:"2rem",textAlign:"center"}},react_default.a.createElement(components_Button_Button,{onClick:Object(dist.action)("clicked"),size:"normal"},"Normal")),react_default.a.createElement("div",{style:{marginBottom:"2rem",textAlign:"center"}},react_default.a.createElement(components_Button_Button,{onClick:Object(dist.action)("clicked"),size:"big"},"Big")))},Button_stories_disabled=function disabled(){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",{style:{marginBottom:"2rem",textAlign:"center"}},react_default.a.createElement(components_Button_Button,{onClick:Object(dist.action)("clicked"),disabled:!0,size:"small"},"Small Disabled")),react_default.a.createElement("div",{style:{marginBottom:"2rem",textAlign:"center"}},react_default.a.createElement(components_Button_Button,{onClick:Object(dist.action)("clicked"),disabled:!0,size:"normal"},"Normal Disabled")),react_default.a.createElement("div",{style:{marginBottom:"2rem",textAlign:"center"}},react_default.a.createElement(components_Button_Button,{onClick:Object(dist.action)("clicked"),disabled:!0,size:"big"},"Big Disabled")))}}},[[278,1,2]]]);
//# sourceMappingURL=main.1f3f7600fa6d5e1ea517.bundle.js.map