(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1257:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(197),_storybook_addon_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(458),_src_test_results_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(459);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(Object(_storybook_addon_jest__WEBPACK_IMPORTED_MODULE_1__.withTests)({results:_src_test_results_json__WEBPACK_IMPORTED_MODULE_2__}))},1284:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(197);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1286)],module)}.call(this,__webpack_require__(1285)(module))},1286:function(module,exports,__webpack_require__){var map={"./components/Button/stories.jsx":1312,"./components/Language-dropdown/stories.jsx":1311};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1286},1311:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"RoundedLanguageDropdown",(function(){return RoundedLanguageDropdown}));var flags_round_namespaceObject={};__webpack_require__.r(flags_round_namespaceObject),__webpack_require__.d(flags_round_namespaceObject,"en",(function(){return en_default.a})),__webpack_require__.d(flags_round_namespaceObject,"fr",(function(){return fr_default.a})),__webpack_require__.d(flags_round_namespaceObject,"es",(function(){return es_default.a})),__webpack_require__.d(flags_round_namespaceObject,"it",(function(){return it_default.a})),__webpack_require__.d(flags_round_namespaceObject,"ja",(function(){return ja_default.a})),__webpack_require__.d(flags_round_namespaceObject,"nl",(function(){return nl_default.a})),__webpack_require__.d(flags_round_namespaceObject,"pt",(function(){return pt_default.a})),__webpack_require__.d(flags_round_namespaceObject,"ru",(function(){return ru_default.a}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(198),addon_knobs_dist=__webpack_require__(88),slicedToArray=(__webpack_require__(20),__webpack_require__(9),__webpack_require__(275),__webpack_require__(461)),taggedTemplateLiteral=__webpack_require__(294),styled_components_browser_esm=__webpack_require__(295);function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n      font: "," sans-serif;\n      height: ","em;\n      min-width: 7.5em;\n      background-color: #fff;\n      box-shadow: 0 0 0.4em rgba(0, 0, 0, 0.4);\n      border-radius: ","em;\n      transition: height 0.3s cubic-bezier(0.2, 0.6, 0.5, 1.3);\n      overflow: hidden;\n      cursor: pointer;\n      display: inline-flex;\n      flex-direction: column;\n\n      &,\n      * {\n        outline: 0;\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n      }\n\n      .lang {\n        height: ","em;\n        flex-shrink: 0;\n        display: block;\n\n        &.selected {\n          order: -1;\n          position: relative;\n\n          .arrow {\n            position: absolute;\n            transition: transform 0.2s linear;\n            transform: translateY(-50%)\n              ",";\n            top: 50%;\n            right: ","em;\n          }\n\n          .arrow:after {\n            content: '';\n            display: block;\n            padding: ","em;\n            border-style: solid;\n            border-color: black;\n            transform: rotate(45deg);\n            border-width: ","em 0 0 ","em;\n            margin-top: ","em;\n          }\n        }\n\n        .lang-inner {\n          font-size: 1em;\n          outline: 0;\n          border: 0;\n          text-transform: uppercase;\n          display: flex;\n          width: 100%;\n          height: 100%;\n          align-items: center;\n          background-color: transparent;\n          text-decoration: none;\n          padding: ","em ","em\n            ","em ","em;\n          color: #000;\n\n          ::-moz-focus-inner {\n            padding: 0;\n            border: 0;\n          }\n\n          img {\n            margin-right: 1em;\n            height: ","em;\n          }\n        }\n      }\n    "]);return _templateObject2=function(){return data},data}function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  ","\n"]);return _templateObject=function(){return data},data}var styles=styled_components_browser_esm.b.ul(_templateObject(),(function(_ref){var _ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?"16px":_ref$fontSize,_ref$itemCount=_ref.itemCount,itemCount=void 0===_ref$itemCount?1:_ref$itemCount,_ref$innerPadding=_ref.innerPadding,innerPadding=void 0===_ref$innerPadding?.2:_ref$innerPadding,_ref$arrowSize=_ref.arrowSize,arrowSize=void 0===_ref$arrowSize?.3:_ref$arrowSize,_ref$arrowPosition=_ref.arrowPosition,arrowPosition=void 0===_ref$arrowPosition?1:_ref$arrowPosition,isListVisible=_ref.isListVisible,_ref$itemHeight=_ref.itemHeight,itemHeight=void 0===_ref$itemHeight?2.5:_ref$itemHeight;return Object(styled_components_browser_esm.a)(_templateObject2(),fontSize,isListVisible?itemCount*itemHeight:itemHeight,itemHeight/2,itemHeight,isListVisible?"scaleY(1)":"scaleY(-1)",arrowPosition,arrowSize,arrowSize/2,arrowSize/2,1.25*arrowSize,innerPadding,2*arrowSize+2*arrowPosition,innerPadding,innerPadding,itemHeight-2*innerPadding)})),en=__webpack_require__(438),en_default=__webpack_require__.n(en),fr=__webpack_require__(439),fr_default=__webpack_require__.n(fr),es=__webpack_require__(440),es_default=__webpack_require__.n(es),it=__webpack_require__(441),it_default=__webpack_require__.n(it),ja=__webpack_require__(442),ja_default=__webpack_require__.n(ja),nl=__webpack_require__(443),nl_default=__webpack_require__.n(nl),pt=__webpack_require__(444),pt_default=__webpack_require__.n(pt),ru=__webpack_require__(445),ru_default=__webpack_require__.n(ru),LanguageItemContent=function(_ref){var code=_ref.code,fullName=_ref.fullName;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("img",{src:flags_round_namespaceObject[code],alt:code}),fullName||code)},_ref4=react_default.a.createElement("i",{className:"arrow"}),LanguageDropdown=function(_ref2){var currentLanguageIndex=_ref2.currentLanguageIndex,languages=_ref2.languages,_useState=Object(react.useState)(!1),_useState2=Object(slicedToArray.a)(_useState,2),isListVisible=_useState2[0],setListVisible=_useState2[1],toggleLanguageList=function(){setListVisible((function(prevState){return!prevState}))},languageChoices=Object(react.useMemo)((function(){return languages.map((function(_ref3,index){var code=_ref3.code,path=_ref3.path,fullName=_ref3.fullName;return react_default.a.createElement("li",{className:"lang".concat(index===currentLanguageIndex?" selected":""),key:code},index===currentLanguageIndex?react_default.a.createElement("button",{className:"lang-inner",type:"button",onClick:toggleLanguageList},react_default.a.createElement(LanguageItemContent,{code:code,fullName:fullName}),_ref4):react_default.a.createElement("a",{className:"lang-inner",href:"/".concat(code).concat(path.startsWith("/")?path:"/".concat(path))},react_default.a.createElement(LanguageItemContent,{code:code,fullName:fullName})))}))}),[languages,currentLanguageIndex]);return react_default.a.createElement(styles,{isListVisible:isListVisible,itemCount:languageChoices.length},languageChoices)};LanguageDropdown.displayName="LanguageDropdown",LanguageDropdown.defaultProps={},LanguageDropdown.__docgenInfo={description:"",methods:[],displayName:"LanguageDropdown",props:{currentLanguageIndex:{type:{name:"number"},required:!1,description:""},languages:{type:{name:"arrayOf",value:{name:"shape",value:{code:{name:"string",required:!0},fullName:{name:"string",required:!1},path:{name:"string",required:!0}}}},required:!0,description:""}}};var Language_dropdown=LanguageDropdown;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Language-dropdown\\index.jsx"]={name:"LanguageDropdown",docgenInfo:LanguageDropdown.__docgenInfo,path:"src\\components\\Language-dropdown\\index.jsx"});__webpack_exports__.default={title:"Language Dropdown",component:Language_dropdown,decorators:[dist.withA11y,addon_knobs_dist.withKnobs]};var RoundedLanguageDropdown=function(){return react_default.a.createElement(Language_dropdown,{currentLanguageIndex:Object(addon_knobs_dist.number)("currentLanguageIndex",0,"currentLanguageIndex"),languages:Object(addon_knobs_dist.object)("languages",[{code:"en",path:"/"},{code:"fr",path:"/"}],"languages")})};RoundedLanguageDropdown.displayName="RoundedLanguageDropdown",RoundedLanguageDropdown.story={parameters:{jest:["Language-dropdown/index.test.jsx"]}},RoundedLanguageDropdown.__docgenInfo={description:"",methods:[],displayName:"RoundedLanguageDropdown"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Language-dropdown\\stories.jsx"]={name:"RoundedLanguageDropdown",docgenInfo:RoundedLanguageDropdown.__docgenInfo,path:"src\\components\\Language-dropdown\\stories.jsx"})},1312:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"WithText",(function(){return WithText})),__webpack_require__.d(__webpack_exports__,"WithEmoji",(function(){return WithEmoji}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(293),addon_a11y_dist=__webpack_require__(198),addon_knobs_dist=__webpack_require__(88),Button=function(_ref){var children=_ref.children,onClick=_ref.onClick;return"button"===_ref.type?react_default.a.createElement("button",{type:"button",onClick:onClick},children):react_default.a.createElement("button",{type:"submit",onClick:onClick},children)};Button.displayName="Button",Button.defaultProps={children:null,type:"button"},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{defaultValue:{value:"null",computed:!1},type:{name:"node"},required:!1,description:""},type:{defaultValue:{value:"'button'",computed:!1},type:{name:"enum",value:[{value:"'button'",computed:!1},{value:"'submit'",computed:!1}]},required:!1,description:""},onClick:{type:{name:"func"},required:!0,description:""}}};var components_Button=Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Button\\index.jsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src\\components\\Button\\index.jsx"});__webpack_exports__.default={title:"Button",component:components_Button,decorators:[addon_a11y_dist.withA11y,addon_knobs_dist.withKnobs]};var WithText=function(){return react_default.a.createElement(components_Button,{onClick:Object(dist.action)("clicked")},Object(addon_knobs_dist.text)("children","Hello world!"))};WithText.displayName="WithText",WithText.story={parameters:{jest:["Button/index.test.jsx"]}};var WithEmoji=function(){return react_default.a.createElement(components_Button,{onClick:Object(dist.action)("clicked")},react_default.a.createElement("span",{role:"img","aria-label":"so cool"},Object(addon_knobs_dist.text)("children","😀 😎 👍 💯")))};WithEmoji.displayName="WithEmoji",WithEmoji.story={parameters:{docs:{page:null},jest:["Button/index.test.jsx"]}},WithText.__docgenInfo={description:"",methods:[],displayName:"WithText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Button\\stories.jsx"]={name:"WithText",docgenInfo:WithText.__docgenInfo,path:"src\\components\\Button\\stories.jsx"}),WithEmoji.__docgenInfo={description:"",methods:[],displayName:"WithEmoji"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Button\\stories.jsx"]={name:"WithEmoji",docgenInfo:WithEmoji.__docgenInfo,path:"src\\components\\Button\\stories.jsx"})},438:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/en.61b9de50.svg"},439:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/fr.3789f520.svg"},440:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/es.3b1c815d.svg"},441:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/it.b0a36d66.svg"},442:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ja.b6fb4d8f.svg"},443:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/nl.f7352073.svg"},444:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/pt.6e569f1c.svg"},445:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ru.5fa1fdbf.svg"},459:function(module){module.exports=JSON.parse('{"numFailedTestSuites":0,"numFailedTests":0,"numPassedTestSuites":2,"numPassedTests":7,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":2,"numTotalTests":7,"openHandles":[],"snapshot":{"added":0,"didUpdate":false,"failure":false,"filesAdded":0,"filesRemoved":0,"filesRemovedList":[],"filesUnmatched":0,"filesUpdated":0,"matched":0,"total":0,"unchecked":0,"uncheckedKeysByFile":[],"unmatched":0,"updated":0},"startTime":1586791529206,"success":true,"testResults":[{"assertionResults":[{"ancestorTitles":["Button"],"failureMessages":[],"fullName":"Button should render children elements","location":null,"status":"passed","title":"should render children elements"},{"ancestorTitles":["Button","when clicked"],"failureMessages":[],"fullName":"Button when clicked should call onClick once","location":null,"status":"passed","title":"should call onClick once"},{"ancestorTitles":["Button","when passed no type property value"],"failureMessages":[],"fullName":"Button when passed no type property value should set button type to default","location":null,"status":"passed","title":"should set button type to default"},{"ancestorTitles":["Button","when passed a type property value"],"failureMessages":[],"fullName":"Button when passed a type property value should set button type to passed value","location":null,"status":"passed","title":"should set button type to passed value"}],"endTime":1586791532344,"message":"","name":"C:\\\\dev\\\\toolbox\\\\toolbox-storybook\\\\src\\\\components\\\\Button\\\\index.test.jsx","startTime":1586791529929,"status":"passed","summary":""},{"assertionResults":[{"ancestorTitles":["LanguageDropdown"],"failureMessages":[],"fullName":"LanguageDropdown should render one selected language","location":null,"status":"passed","title":"should render one selected language"},{"ancestorTitles":["LanguageDropdown"],"failureMessages":[],"fullName":"LanguageDropdown should render list as being closed","location":null,"status":"passed","title":"should render list as being closed"},{"ancestorTitles":["LanguageDropdown","when clicked"],"failureMessages":[],"fullName":"LanguageDropdown when clicked should open list","location":null,"status":"passed","title":"should open list"}],"endTime":1586791532421,"message":"","name":"C:\\\\dev\\\\toolbox\\\\toolbox-storybook\\\\src\\\\components\\\\Language-dropdown\\\\index.test.jsx","startTime":1586791529921,"status":"passed","summary":""}],"wasInterrupted":false}')},462:function(module,exports,__webpack_require__){__webpack_require__(463),__webpack_require__(606),__webpack_require__(607),__webpack_require__(1256),__webpack_require__(1257),module.exports=__webpack_require__(1284)},525:function(module,exports){}},[[462,1,2]]]);
//# sourceMappingURL=main.7475b6b8798261484f7e.bundle.js.map