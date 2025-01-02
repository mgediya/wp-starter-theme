/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/***/ (function() {

var $ = jQuery.noConflict();
$headerHeight = $('.main-header').outerHeight();

/* Script on ready
------------------------------------------------------------------------------*/
$(() => {
  /* Do jQuery stuff when DOM is ready */
});

/* Script on load
------------------------------------------------------------------------------*/
window.onload = () => {
  /* Do jQuery stuff on Load */
};

/* Script on scroll
------------------------------------------------------------------------------*/
window.onscroll = () => {
  /* Do jQuery stuff on Scroll */
};

/* Script on resize
------------------------------------------------------------------------------*/
window.onresize = () => {
  /* Do jQuery stuff on resize */
};

/* Script all functions
------------------------------------------------------------------------------*/
/* Match height */
function sameHeight(elem, heightType) {
  var mhelem = $(elem);
  var maxHeight = 0;
  if (heightType == undefined) {
    heightType = 'min-height';
  } else {
    heightType = 'height';
  }
  mhelem.css(heightType, 'auto');
  mhelem.each(function () {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });
  mhelem.css(heightType, maxHeight);
}

/***/ }),

/***/ "./scss/styles.scss":
/*!**************************!*\
  !*** ./scss/styles.scss ***!
  \**************************/
/***/ (function() {

throw new Error("Module build failed (from ../node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ../node_modules/sass-loader/dist/cjs.js):\n2 arguments required, but only 1 was passed.\n\u001b[34m   ╷\u001b[0m\n\u001b[34m10 │\u001b[0m $font-size-base:  \u001b[31mrem(16px)\u001b[0m !default; //16px (Don't change)\r\n\u001b[34m   │\u001b[0m \u001b[31m                  ^^^^^^^^^\u001b[0m\n\u001b[34m   ╵\u001b[0m\n  source\\scss\\abstracts\\_variables.scss 10:19  @use\n  source\\scss\\abstracts\\_core.scss 2:1         @use\n  source\\scss\\styles.scss 2:1                  root stylesheet\n    at tryRunOrWebpackError (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\HookWebpackError.js:86:9)\n    at __webpack_require_module__ (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5299:12)\n    at __webpack_require__ (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5256:18)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5328:20\n    at symbolIterator (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3485:9)\n    at done (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\tapable\\lib\\Hook.js:18:14)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5234:43\n    at symbolIterator (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3463:5)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5196:16\n    at symbolIterator (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3485:9)\n    at timesSync (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3463:5)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5164:15\n    at symbolIterator (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3485:9)\n    at done (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3527:9)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5110:8\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:3531:6\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\HookWebpackError.js:67:2\n    at Hook.eval [as callAsync] (eval at create (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Cache.js:111:20)\n    at ItemCacheFacade.store (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\CacheFacade.js:141:15)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:3530:11\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Cache.js:95:34\n    at Array.<anonymous> (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\cache\\MemoryCachePlugin.js:45:13)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Cache.js:95:19\n    at Hook.eval [as callAsync] (eval at create (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:19:1)\n    at Cache.get (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Cache.js:79:18)\n    at ItemCacheFacade.get (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:3498:9)\n    at codeGen (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5098:11)\n    at symbolIterator (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3463:5)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5128:14\n    at processQueue (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\util\\processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n-- inner error --\nError: Module build failed (from ../node_modules/sass-loader/dist/cjs.js):\n2 arguments required, but only 1 was passed.\n\u001b[34m   ╷\u001b[0m\n\u001b[34m10 │\u001b[0m $font-size-base:  \u001b[31mrem(16px)\u001b[0m !default; //16px (Don't change)\r\n\u001b[34m   │\u001b[0m \u001b[31m                  ^^^^^^^^^\u001b[0m\n\u001b[34m   ╵\u001b[0m\n  source\\scss\\abstracts\\_variables.scss 10:19  @use\n  source\\scss\\abstracts\\_core.scss 2:1         @use\n  source\\scss\\styles.scss 2:1                  root stylesheet\n    at Object.<anonymous> (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[1]!D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[2]!D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[3]!D:\\Projects\\skeleton\\wp-starter-theme\\source\\scss\\styles.scss:1:7)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\javascript\\JavascriptModulesPlugin.js:494:10\n    at Hook.eval [as call] (eval at create (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\tapable\\lib\\Hook.js:14:14)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5301:39\n    at tryRunOrWebpackError (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\HookWebpackError.js:81:7)\n    at __webpack_require_module__ (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5299:12)\n    at __webpack_require__ (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5256:18)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5328:20\n    at symbolIterator (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3485:9)\n    at done (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\tapable\\lib\\Hook.js:18:14)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5234:43\n    at symbolIterator (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3463:5)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5196:16\n    at symbolIterator (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3485:9)\n    at timesSync (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3463:5)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5164:15\n    at symbolIterator (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3485:9)\n    at done (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3527:9)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5110:8\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:3531:6\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\HookWebpackError.js:67:2\n    at Hook.eval [as callAsync] (eval at create (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Cache.js:111:20)\n    at ItemCacheFacade.store (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\CacheFacade.js:141:15)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:3530:11\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Cache.js:95:34\n    at Array.<anonymous> (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\cache\\MemoryCachePlugin.js:45:13)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Cache.js:95:19\n    at Hook.eval [as callAsync] (eval at create (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:19:1)\n    at Cache.get (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Cache.js:79:18)\n    at ItemCacheFacade.get (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:3498:9)\n    at codeGen (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5098:11)\n    at symbolIterator (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\neo-async\\async.js:3463:5)\n    at D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\Compilation.js:5128:14\n    at processQueue (D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\webpack\\lib\\util\\processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n\nGenerated code for D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[1]!D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[2]!D:\\Projects\\skeleton\\wp-starter-theme\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[3]!D:\\Projects\\skeleton\\wp-starter-theme\\source\\scss\\styles.scss\n1 | throw new Error(\"Module build failed (from ../node_modules/sass-loader/dist/cjs.js):\\n2 arguments required, but only 1 was passed.\\n\\u001b[34m   ╷\\u001b[0m\\n\\u001b[34m10 │\\u001b[0m $font-size-base:  \\u001b[31mrem(16px)\\u001b[0m !default; //16px (Don't change)\\r\\n\\u001b[34m   │\\u001b[0m \\u001b[31m                  ^^^^^^^^^\\u001b[0m\\n\\u001b[34m   ╵\\u001b[0m\\n  source\\\\scss\\\\abstracts\\\\_variables.scss 10:19  @use\\n  source\\\\scss\\\\abstracts\\\\_core.scss 2:1         @use\\n  source\\\\scss\\\\styles.scss 2:1                  root stylesheet\");");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./js/scripts.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scss/styles.scss"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map