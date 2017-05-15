/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// main variables
new _app2.default({}); // modules

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // imports


var _comCoderwelschQuery = __webpack_require__(4);

var _comCoderwelschQuery2 = _interopRequireDefault(_comCoderwelschQuery);

var _textData = __webpack_require__(7);

var _textData2 = _interopRequireDefault(_textData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.settings = {
			classes: {},
			selectors: {
				content: "#content"
			}
		};

		// module variables
		this.selectors = this.settings.selectors;
		this.classes = this.settings.classes;

		this.$text = new _comCoderwelschQuery2.default(this.selectors.content);

		// init
		this.initText();
	}

	_createClass(App, [{
		key: "initText",
		value: function initText() {
			this.createNodes();
		}
	}, {
		key: "createNodes",
		value: function createNodes() {
			var html = _textData2.default.text;

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = _textData2.default.splittedWords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var word = _step.value;

					console.log(new RegExp("[ ](" + word + ")[^(w|<|>)]", "gi").exec(html));

					html = html.replace(new RegExp("([ ]" + word + "[^(w|<|>)])", "gi"), "<def>$1</def>");
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			this.$text.html(html);
		}
	}, {
		key: "generateHtml",
		value: function generateHtml(word) {
			var def = _textData2.default.wordDefs[word];

			if (def && def.data.data.wordProperties) {
				var item = def.data.data.wordProperties.type;

				return "<def>$1</def>";
			}

			return word;
		}
	}]);

	return App;
}();

exports.default = App;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // imports


var _comCoderwelschUtils = __webpack_require__(5);

var _comCoderwelschUtils2 = _interopRequireDefault(_comCoderwelschUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 
var Measurements = {
	scrollbarWidth: undefined
};

var $ = function () {
	function $() {
		var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, $);

		var elem = [];

		if (typeof selector === "string" && /<[a-z][\s\S]*>/gi.test(selector)) {
			var newElem = document.createElement("div");
			newElem.innerHTML = selector;

			elem = [].slice.call(newElem.children);
		} else if (typeof selector === "string") {
			elem = document.querySelectorAll(selector);
		} else if (selector instanceof window.HTMLElement || selector === window.document || selector === window) {
			elem.push(selector);
		} else if (selector instanceof Array || selector instanceof window.NodeList) {
			elem = selector;
		} else if (selector !== null && (selector instanceof $ || selector.constructor && selector.constructor.name === "$")) {
			elem = selector.elements;
		}

		this.elements = elem;
	}

	_createClass($, [{
		key: "hasClass",
		value: function hasClass(className) {
			if (className && className.indexOf(" ") === -1 && this.elements.length) {
				if ("classList" in this.elements[0]) {
					return this.elements[0].classList.contains(className);
				} else {
					return new RegExp("(^| )" + className + "( |$)", "gi").test(this.elements[0].className);
				}
			}

			return false;
		}
	}, {
		key: "toggleClass",
		value: function toggleClass(className) {
			if (this.elements.length) {
				this.each(function ($elem) {
					if ($elem.hasClass(className)) {
						$elem.removeClass(className);
					} else {
						$elem.addClass(className);
					}
				}, true);
			}

			return this;
		}
	}, {
		key: "offset",
		value: function offset() {
			if (this.elements && this.elements.length) {
				var elem = this.get(0),
				    rectangle = elem.getBoundingClientRect(),
				    body = document.body;

				return {
					top: rectangle.top + body.scrollTop,
					left: rectangle.left + body.scrollLeft
				};
			}

			return {
				top: 0,
				left: 0
			};
		}
	}, {
		key: "appendTo",
		value: function appendTo(elem) {
			if (!this.elements.length) {
				return this;
			}

			if (elem instanceof $) {
				elem.append(this);
			} else {
				new $(elem).append(this);
			}

			return this;
		}
	}, {
		key: "append",
		value: function append(elem) {
			if (!this.elements.length) {
				return this;
			}

			// create new query object by selector/html string
			if (typeof elem === "string") {
				elem = new $(elem);
			}

			if (elem instanceof $ && elem.elements.length) {
				// reassign the object of elem.elements[ 0 ] back
				// otherwise the elem.elements[ 0 ] object will be removed / undefined
				elem.elements[0] = this.elements[0].appendChild(elem.elements[0]);
			} else if (elem instanceof window.HTMLElement) {
				// reassign the object of elem back to itself
				// otherwise the elem object will be removed / undefined
				elem = this.elements[0].appendChild(elem);
			}

			return this;
		}
	}, {
		key: "first",
		value: function first() {
			// if there is at least one element
			if (this.elements.length > 1) {
				return new $(this.elements[0]);
			}

			// if there is no element return this
			return this;
		}
	}, {
		key: "parent",
		value: function parent() {
			if (!this.elements.length) {
				return new $();
			}

			return new $(this.get(0).parentNode);
		}
	}, {
		key: "css",
		value: function css() {
			var _this = this;

			var styleProperty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
			var value = arguments[1];

			if (!this.elements.length) {
				return this;
			}

			if (typeof styleProperty === "string" && value === undefined) {
				styleProperty = $.convertSnakeCaseToCamelCase(styleProperty);

				return window.getComputedStyle(this.elements[0])[styleProperty];
			} else if (typeof styleProperty === "string" && value !== undefined) {
				styleProperty = $.convertSnakeCaseToCamelCase(styleProperty);
				this.elements[0].style[styleProperty] = value;
			} else if ((typeof styleProperty === "undefined" ? "undefined" : _typeof(styleProperty)) === "object") {
				(function () {
					var convertedKey = void 0;

					var _loop = function _loop(key) {
						if (styleProperty.hasOwnProperty(key)) {
							_this.each(function (elem) {
								convertedKey = $.convertSnakeCaseToCamelCase(key);
								elem.style[convertedKey] = styleProperty[convertedKey];
							});
						}
					};

					for (var key in styleProperty) {
						_loop(key);
					}
				})();
			}

			return this;
		}
	}, {
		key: "find",
		value: function find(selector) {
			if (!this.elements.length) {
				return new $();
			}

			var foundElems = [];

			this.each(function (item) {
				var childs = item.querySelectorAll(selector);

				if (childs !== null) {
					foundElems.push.apply(foundElems, childs);
				}
			});

			return new $(foundElems);
		}
	}, {
		key: "next",
		value: function next() {
			if (!this.elements.length) {
				return this;
			}

			var firstElem = this.get(0),
			    nextElem = firstElem.nextElementSibling;

			if (nextElem !== null && nextElem !== firstElem) {
				// if its another element
				return new $(nextElem);
			} else {
				return new $(firstElem.parentNode.firstElementChild);
			}
		}
	}, {
		key: "prev",
		value: function prev() {
			if (!this.elements.length) {
				return this;
			}

			var firstElem = this.get(0),
			    prevElem = firstElem.previousElementSibling;

			if (prevElem !== null && prevElem !== firstElem) {
				// if its another element
				return new $(prevElem);
			} else {
				prevElem = firstElem.parentNode.lastElementChild;
				return new $(prevElem);
			}
		}
	}, {
		key: "on",
		value: function on(eventName, customParams, eventHandler, isOneTime) {
			if (!this.elements.length) {
				return this;
			}

			// if custom params set
			if (!eventHandler) {
				eventHandler = customParams;
			}

			this.each(function (elem) {
				function handler(event) {
					var clonedEvent = _comCoderwelschUtils2.default.cloneEvent(event);

					if (customParams !== undefined) {
						clonedEvent.data = customParams;
					}

					clonedEvent.currentTarget = elem;
					eventHandler.call(this, clonedEvent);

					if (isOneTime) {
						event.currentTarget.removeEventListener(eventName, handler);
					}
				}

				elem.addEventListener(eventName, handler);
			});

			return this;
		}
	}, {
		key: "one",
		value: function one(eventName, customParams, eventHandler) {
			this.on(eventName, customParams, eventHandler, true);
		}
	}, {
		key: "trigger",
		value: function trigger(eventName) {
			if (!this.elements.length) {
				return this;
			}

			var event = document.createEvent("HTMLEvents");
			event.initEvent(eventName, true, false);

			this.each(function (elem) {
				elem.dispatchEvent(event);
			});
		}
	}, {
		key: "width",
		value: function width() {
			if (!this.elements.length) {
				return 0;
			} else {
				return this.elements[0].offsetWidth;
			}
		}
	}, {
		key: "height",
		value: function height() {
			if (!this.elements.length) {
				return 0;
			} else {
				return this.elements[0].offsetHeight;
			}
		}
	}, {
		key: "addClass",
		value: function addClass() {
			var classList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

			// do nothing when classList is empty
			if (!classList || !this.elements.length) {
				return this;
			}

			// split the new class names and convert to array
			classList = $.splitClassNames(classList);

			// native class list add
			if ("classList" in document.body) {
				this.each(function (elem) {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = classList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var _class = _step.value;

							elem.classList.add(_class);
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				});
			} else {
				var elemSplittedClasses = void 0,
				    currElemClass = void 0;

				this.each(function (elem) {
					currElemClass = elem.className;
					elemSplittedClasses = $.splitClassNames(currElemClass);

					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = classList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var newClass = _step2.value;

							if (elemSplittedClasses.indexOf(newClass) !== -1) {
								continue;
							}

							elem.className += " " + newClass;
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				});
			}

			return this;
		}
	}, {
		key: "removeClass",
		value: function removeClass() {
			var classList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

			// do nothing when classList is empty
			if (!classList || !this.elements.length) {
				return this;
			}

			// split the new class names and convert to array
			classList = $.splitClassNames(classList);

			// native class list add
			if ("classList" in document.body) {
				this.each(function (elem) {
					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;

					try {
						for (var _iterator3 = classList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var _class = _step3.value;

							elem.classList.remove(_class);
						}
					} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion3 && _iterator3.return) {
								_iterator3.return();
							}
						} finally {
							if (_didIteratorError3) {
								throw _iteratorError3;
							}
						}
					}
				});
			} else {
				var currElemClass = void 0;

				this.each(function (elem) {
					currElemClass = elem.className;

					var _iteratorNormalCompletion4 = true;
					var _didIteratorError4 = false;
					var _iteratorError4 = undefined;

					try {
						for (var _iterator4 = classList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
							var newClass = _step4.value;

							elem.className = currElemClass.replace(new RegExp("(^|\\b)" + newClass.split(" ").join("|") + "(\\b|$)", "gi"), " ");
						}
					} catch (err) {
						_didIteratorError4 = true;
						_iteratorError4 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion4 && _iterator4.return) {
								_iterator4.return();
							}
						} finally {
							if (_didIteratorError4) {
								throw _iteratorError4;
							}
						}
					}
				});
			}

			return this;
		}
	}, {
		key: "attr",
		value: function attr(key, value) {
			if (!key || !this.elements.length) {
				return null;
			}

			if (value !== undefined && value !== null) {
				this.each(function (elem) {
					elem.setAttribute(key, value);
				});

				return this;
			} else if (value === null) {
				// remove attribute on value = null
				this.each(function (elem) {
					elem.removeAttribute(key);
				});

				return this;
			} else {
				return this.elements[0].getAttribute(key);
			}
		}
	}, {
		key: "data",
		value: function data(key, value) {
			if (!key || !this.elements.length) {
				return null;
			}

			key = key.indexOf("data-") === 0 ? key : "data-" + key;

			return this.attr(key, value);
		}
	}, {
		key: "text",
		value: function text(_text) {
			// get html
			if (_text === undefined) {
				if (!this.elements.length) {
					return "";
				} else {
					return this.elements[0].textContent;
				}
			}

			if (this.elements.length) {
				// set text
				this.each(function (elem) {
					elem.textContent = _text;
				});
			}

			return this;
		}
	}, {
		key: "html",
		value: function html(_html) {
			// get html
			if (_html === undefined) {
				if (!this.elements.length) {
					return "";
				} else {
					return this.elements[0].innerHTML;
				}
			} else if (_html === true) {
				// return outer html
				return this.elements[0].outerHTML;
			}

			// set html
			this.each(function (elem) {
				elem.innerHTML = _html;
			});

			return this;
		}
	}, {
		key: "val",
		value: function val(value) {
			if (!this.elements.length) {
				return null;
			}

			if (value !== undefined) {
				this.elements[0].value = value;
			} else {
				return this.elements[0].value;
			}

			return this;
		}
	}, {
		key: "empty",
		value: function empty() {
			this.each(function (elem) {
				elem.innerHTML = "";
			});

			return this;
		}
	}, {
		key: "get",
		value: function get() {
			var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			if (!this.elements.length || index < 0 || index > this.elements.length - 1) {
				return null;
			}

			return this.elements[index];
		}
	}, {
		key: "each",
		value: function each(callback) {
			var returnInstances = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = this.elements[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var elem = _step5.value;

					if (returnInstances) {
						callback(new $(elem));
					} else {
						callback(elem);
					}
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}

			return this;
		}
	}, {
		key: "closest",
		value: function closest(selector) {
			if (!this.elements.length || this.get(0) === document.body) {
				return null;
			}

			var prefixedMatchesFns = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
			    matchesFnName = void 0,
			    parent = void 0;

			// find matches fn
			var _iteratorNormalCompletion6 = true;
			var _didIteratorError6 = false;
			var _iteratorError6 = undefined;

			try {
				for (var _iterator6 = prefixedMatchesFns[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
					var fn = _step6.value;

					if (typeof window.document.body[fn] === "function") {
						matchesFnName = fn;
						break;
					}
				}
			} catch (err) {
				_didIteratorError6 = true;
				_iteratorError6 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion6 && _iterator6.return) {
						_iterator6.return();
					}
				} finally {
					if (_didIteratorError6) {
						throw _iteratorError6;
					}
				}
			}

			while (this.elements[0]) {
				parent = this.elements[0].parentElement;

				if (parent && parent !== null && parent[matchesFnName](selector)) {

					return new $(parent);
				}
			}
		}
	}], [{
		key: "measureScrollbarWidth",
		value: function measureScrollbarWidth() {
			var outer = document.createElement("div"),
			    widthNoScroll = void 0,
			    inner = void 0,
			    widthWithScroll = void 0;

			if (Measurements.scrollbarWidth !== undefined) {
				return Measurements.scrollbarWidth;
			}

			// create outer div
			outer.style.visibility = "hidden";
			outer.style.width = "100px";
			outer.style.msOverflowStyle = "scrollbar";

			document.body.appendChild(outer);

			widthNoScroll = outer.offsetWidth;

			// force scrollbar
			outer.style.overflow = "scroll";

			// add inner div
			inner = document.createElement("div");
			inner.style.width = "100%";
			outer.appendChild(inner);

			widthWithScroll = inner.offsetWidth;

			// remove divs
			outer.parentNode.removeChild(outer);

			Measurements.scrollbarWidth = widthNoScroll - widthWithScroll;
			return Measurements.scrollbarWidth;
		}
	}, {
		key: "ajax",
		value: function ajax(options) {
			var request = new XMLHttpRequest(),
			    formData = void 0;

			options = _comCoderwelschUtils2.default.extend(true, {
				type: "GET",
				url: "",
				timeout: 0,
				data: null,

				callbacks: {
					done: function done(request) {}, // eslint-disable-line no-unused-vars
					fail: function fail(request) {} // eslint-disable-line no-unused-vars
				}
			}, options);

			if (options.data && options.data !== null) {
				var data = new FormData();

				for (var key in options.data) {
					data.append(key, options.data[key]);
				}

				formData = data;
			}

			request.timeout = options.timeout;
			request.open(options.type, options.url, true);
			request.addEventListener("load", function () {
				if (request.status >= 200 && request.status < 300) {
					options.callbacks.done(request, options.data);
				} else {
					options.callbacks.fail(request, options.data);
				}
			});
			request.send(formData);

			return this;
		}
	}, {
		key: "disableScrolling",
		value: function disableScrolling() {
			var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new $("body");

			if ($element.elements.length === 0) {
				return $;
			}

			var paddingRight = $element.css("padding-right"),
			    overflow = $element.css("overflow"),
			    paddingRightFloat = Number.parseFloat(paddingRight),
			    sbWidth = $.measureScrollbarWidth();

			$element.css({
				paddingRight: paddingRightFloat + sbWidth + "px",
				overflow: "hidden" }).data("query-old-padding-right", paddingRight).data("query-old-overflow", overflow);
		}
	}, {
		key: "enableScrolling",
		value: function enableScrolling() {
			var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new $("body");

			if ($element.elements.length === 0) {
				return $;
			}

			var oldPaddingRight = $element.data("query-old-padding-right"),
			    overflow = $element.data("query-old-overflow");

			$element.data("query-old-padding-right", null);
			$element.data("query-old-overflow", null);
			$element.css({
				paddingRight: oldPaddingRight,
				overflow: overflow
			});

			return $;
		}

		// thanks to: https://coderwall.com/p/iprsng/convert-snake-case-to-camelcase

	}, {
		key: "convertSnakeCaseToCamelCase",
		value: function convertSnakeCaseToCamelCase(string) {
			var find = /(\-\w)/g,
			    convert = function convert(matches) {
				return matches[1].toUpperCase();
			};

			return string.replace(find, convert);
		}
	}, {
		key: "splitClassNames",
		value: function splitClassNames(classes) {
			return classes.split(" ");
		}
	}]);

	return $;
}();

exports.default = $;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utilities = function () {
	function Utilities() {
		_classCallCheck(this, Utilities);
	}

	_createClass(Utilities, null, [{
		key: "isArray",
		value: function isArray(array) {
			if (typeof Array.isArray === "function") {
				return Array.isArray(array);
			}

			return Object.prototype.toString.call(array) === "[object Array]";
		}
	}, {
		key: "isPlainObject",
		value: function isPlainObject(obj) {
			if (!obj || Object.prototype.toString.call(obj) !== "[object Object]") {
				return false;
			}

			var hasOwnConstructor = Object.prototype.hasOwnProperty.call(obj, "constructor"),
			    hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && Object.prototype.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf");

			if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
				return false;
			}

			var key = void 0;
			for (key in obj) {/**/}

			return typeof key === "undefined" || Object.prototype.hasOwnProperty.call(obj, key);
		}
	}, {
		key: "extend",
		value: function extend(deepMerge, target, source1, source2, sourceN) {
			var options = void 0,
			    name = void 0,
			    src = void 0,
			    copy = void 0,
			    copyIsArray = void 0,
			    clone = void 0,
			    i = 1,
			    length = arguments.length,
			    deep = false;

			target = arguments[0];

			if (typeof target === "boolean") {
				deep = target;
				target = arguments[1] || {};
				i = 2;
			} else if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && typeof target !== "function" || target == null) {
				target = {};
			}

			for (; i < length; ++i) {
				options = arguments[i];

				if (options != null) {
					for (name in options) {
						src = target[name];
						copy = options[name];

						if (target !== copy) {
							// Recurse if we're merging plain objects or arrays
							if (deep && copy && (Utilities.isPlainObject(copy) || (copyIsArray = Utilities.isArray(copy)))) {
								if (copyIsArray) {
									copyIsArray = false;
									clone = src && Utilities.isArray(src) ? src : [];
								} else {
									clone = src && Utilities.isPlainObject(src) ? src : {};
								}

								// Never move original objects, clone them
								target[name] = Utilities.extend(deep, clone, copy);

								// Don't bring in undefined values
							} else if (typeof copy !== "undefined") {
								target[name] = copy;
							}
						}
					}
				}
			}

			// Return the modified object
			return target;
		}

		// https://css-tricks.com/snippets/javascript/get-url-variables/

	}, {
		key: "parseUrlParameters",
		value: function parseUrlParameters() {
			var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search.substring(1);

			var vars = string.split("&"),
			    paramObj = {};

			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split("=");

				paramObj[pair[0]] = pair[1];
			}

			return paramObj;
		}
	}, {
		key: "cloneEvent",
		value: function cloneEvent(event) {
			if (event === undefined || event === null) {
				return undefined;
			}

			var ClonedEvent = function ClonedEvent() {},
			    clone = new ClonedEvent();

			for (var p in event) {
				var d = Object.getOwnPropertyDescriptor(event, p);
				if (d && (d.get || d.set)) Object.defineProperty(clone, p, d);else clone[p] = event[p];
			}

			Object.setPrototypeOf(clone, event);

			return clone;
		}
	}, {
		key: "truncateString",
		value: function truncateString() {
			var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
			var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : string.length;

			if (string.length <= length) {
				return string;
			}

			return string.substring(0, length - 1) + "…";
		}
	}]);

	return Utilities;
}();

exports.default = Utilities;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
	"wordDefs": {
		"fuhr": {
			"word": "fuhr",
			"data": {
				"_id": "591899f0ce905c0816aaa255",
				"word": "fuhr",
				"data": {
					"description": "fahren",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/fuhr",
					"similarWords": [
						"Fuhrwerk",
						"Fuhrlohn",
						"Fuhrpark",
						"Fuhrmann",
						"Fuhrwerkslenker",
						"Fuhrwerkslenkerin",
						"Fuhrleute",
						"Fuhrwesen",
						"Ausfuhrüberschuss",
						"Ausfuhrbürgschaft",
						"Ausfuhrprämie",
						"Einfuhrprämie",
						"Fuhrmannsfluch",
						"Einfuhrvertrag",
						"Fuhrunternehmen",
						"Fuhrunternehmer",
						"Einfuhrerlaubnis",
						"Einfuhrverfahren",
						"Einfuhrbeschränkung"
					]
				}
			}
		},
		"Pension": {
			"word": "Pension",
			"data": {
				"_id": "591899f0ce905c0816aaa257",
				"word": "Pension",
				"data": {
					"description": "Substantiv, feminin - 1a. Ruhestand der Beamten und Beamtinnen; 1b. Bezüge für Beamte und Beamtinnen …1c. Bezüge für Mitglieder der gesetzlichen …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. Ruhestand der Beamten und Beamtinnen; 1b. Bezüge für Beamte und Beamtinnen …1c. Bezüge für Mitglieder der gesetzlichen …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Pension",
					"similarWords": [
						"ASVG-Pension",
						"Fremdenpension",
						"Ruhegehalt",
						"Ruhegenuss",
						"Pensionsanspruch",
						"Beamtenpension",
						"Pensionsgast",
						"Versorgungsgenuss",
						"pensionsberechtigt",
						"Ruhegeld",
						"Pensionsberechtigung",
						"Pensionserhöhung",
						"Pensionsantritt",
						"Eigenpension",
						"Pensionat",
						"Pensionist",
						"Pensionär",
						"ASVG-Pensionist",
						"Fremdenheim"
					]
				}
			}
		},
		"Hemd": {
			"word": "Hemd",
			"data": {
				"_id": "591899f0ce905c0816aaa256",
				"word": "Hemd",
				"data": {
					"description": "Substantiv, Neutrum - 1a. von männlichen Personen als Oberbekleidung …1b. als Unterwäsche getragenes, über die …2. (besonders früher) über den Kopf …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1a. von männlichen Personen als Oberbekleidung …1b. als Unterwäsche getragenes, über die …2. (besonders früher) über den Kopf …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Hemd",
					"similarWords": [
						"Hemdbrust",
						"Hemdknopf",
						"Hemdkleid",
						"Hemdblusenkleid",
						"Hemdchen",
						"Hemdbluse",
						"Hemdjacke",
						"Hemdärmel",
						"Hemdkragen",
						"hemdärmelig",
						"Hemdhose",
						"Wollhemd",
						"Oberhemd",
						"Seidenhemd",
						"Jeanshemd",
						"Button-down-Hemd",
						"Baumwollhemd",
						"Buschhemd",
						"Trikothemd"
					]
				}
			}
		},
		"wechseln": {
			"word": "wechseln",
			"data": {
				"_id": "591899f0ce905c0816aaa258",
				"word": "wechseln",
				"data": {
					"description": "schwaches Verb - 1a. bewusst etwas durch etwas anderes …1b. jemandem etwas zukommen lassen und …2a. in eine entsprechende Anzahl Scheine …",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1a. bewusst etwas durch etwas anderes …1b. jemandem etwas zukommen lassen und …2a. in eine entsprechende Anzahl Scheine …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/wechseln",
					"similarWords": [
						"umwechseln",
						"Wechselung",
						"Wechslung",
						"Fahrbahnwechsel",
						"Blickwechsel",
						"NS",
						"Profilager",
						"Verbandswechsel",
						"Verbandwechsel",
						"Pferdewechsel",
						"abchangieren",
						"Ringwechsel",
						"Wäschewechsel",
						"bim, bam",
						"kling, klang",
						"achtmonatlich",
						"sechsstündlich",
						"Pensionsgeschäft",
						"Diskontgeschäft"
					]
				}
			}
		},
		"Hose": {
			"word": "Hose",
			"data": {
				"_id": "591899f0ce905c0816aaa259",
				"word": "Hose",
				"data": {
					"description": "Substantiv, feminin - 1a. Kleidungsstück, das den Körper von …1b. Schlüpfer, Unterhose; 2. in verschiedener Weise ausgebildete Muskelpartie …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. Kleidungsstück, das den Körper von …1b. Schlüpfer, Unterhose; 2. in verschiedener Weise ausgebildete Muskelpartie …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Hose",
					"similarWords": [
						"Zipp-off-Hose",
						"Hosea",
						"Beinkleid",
						"Slacks",
						"Hosenknopf",
						"anhosen",
						"Hosenmatz",
						"Hosenband",
						"Hosenbein",
						"Hosennaht",
						"Hosenstall",
						"Hosenlatz",
						"Hosenlupf",
						"Hosenrock",
						"Hosenstoß",
						"Hosensack",
						"Hosenbund",
						"Hosenkerl",
						"Hosenknie"
					]
				}
			}
		},
		"klebte": {
			"word": "klebte",
			"data": {
				"_id": "591899f2ce905c0816aaa276",
				"word": "klebte",
				"data": {
					"similarWords": [
						"schweißverklebt",
						"Pfandsiegel",
						"kleben",
						"Kuckuck",
						"Zettel",
						"Durst",
						"Sessel",
						"daran",
						"ankleben",
						"festkleben",
						"zukleben",
						"aufkleben",
						"zusammenkleben",
						"abkleben",
						"einkleben",
						"davon",
						"Blut",
						"Kleid",
						"Linie",
						"Zunge"
					]
				}
			}
		},
		"Beinen": {
			"word": "Beinen",
			"data": {
				"_id": "591899f0ce905c0816aaa25a",
				"word": "Beinen",
				"data": {
					"similarWords": [
						"zweibeinig",
						"steifbeinig",
						"beidbeinig",
						"spreizbeinig",
						"krummbeinig",
						"vierbeinig",
						"Hosenband",
						"Beinschere",
						"Strecksitz",
						"Reitsitz",
						"Spreizsprung",
						"torklig",
						"dreibeinig",
						"breitbeinig",
						"Dreibein",
						"Röhrenjeans",
						"Röhrenhose",
						"Grätschstellung",
						"Keilhose",
						"Grätschsprung"
					]
				}
			}
		},
		"Zimmer": {
			"word": "Zimmer",
			"data": {
				"_id": "591899f0ce905c0816aaa25c",
				"word": "Zimmer",
				"data": {
					"description": "Substantiv, Neutrum - 1. (für den Aufenthalt von Menschen …2. das neue Zimmer war sehr …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. (für den Aufenthalt von Menschen …2. das neue Zimmer war sehr …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Zimmer",
					"similarWords": [
						"Zimmerer",
						"zimmern",
						"Zimmerwirt",
						"Zimmerecke",
						"Zimmertür",
						"Zimmerfrau",
						"Zimmerwand",
						"Zimmerling",
						"Zimmerpreis",
						"Zimmerbrand",
						"Zimmerherr",
						"Zimmermann",
						"zimmerwarm",
						"zimmerrein",
						"Zimmerluft",
						"Zimmertrakt",
						"Zimmerfarn",
						"Zimmerin",
						"Zimmerei"
					]
				}
			}
		},
		"fand": {
			"word": "fand",
			"data": {
				"_id": "591899f1ce905c0816aaa25d",
				"word": "fand",
				"data": {
					"description": "siehe finden",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/fand",
					"similarWords": [
						"Fandom",
						"Fandango",
						"Fandarole",
						"bergeweise",
						"begehrenswert",
						"Torgefährlichkeit",
						"Dauerarbeitsloser",
						"Ruhestatt",
						"Oppositionsrolle",
						"Schusslücke",
						"strange",
						"Göttergatte",
						"Betthupferl",
						"Unterlegenheit",
						"Gelöbnisfeier",
						"Begrüßung",
						"Frauenhand",
						"verletzend",
						"ungeteilt"
					]
				}
			}
		},
		"Tür": {
			"word": "Tür",
			"data": {
				"_id": "591899f1ce905c0816aaa25e",
				"word": "Tür",
				"data": {
					"description": "Substantiv, feminin - 1a. Vorrichtung in Form einer in …1b. als Eingang o. Ä. dienende, …2a. einer Tür ähnliche, meist jedoch …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. Vorrichtung in Form einer in …1b. als Eingang o. Ä. dienende, …2a. einer Tür ähnliche, meist jedoch …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Tuer",
					"similarWords": [
						"Türschloss",
						"Türschlitz",
						"Türschließerin",
						"türkisgrün",
						"Türkischrot",
						"Türdrücker",
						"Türschnalle",
						"Türschwelle",
						"Türöffnung",
						"Türfüllung",
						"Türkensterz",
						"türkischrot",
						"türkisch",
						"Türkisch",
						"Türblatt",
						"Türgriff",
						"Türspalt",
						"Türstock",
						"Türknauf"
					]
				}
			}
		},
		"durchgeschobenen": {
			"word": "durchgeschobenen",
			"data": {
				"_id": "591899f0ce905c0816aaa25b",
				"word": "durchgeschobenen",
				"data": {
					"similarWords": []
				}
			}
		},
		"Zettel": {
			"word": "Zettel",
			"data": {
				"_id": "591899f1ce905c0816aaa25f",
				"word": "Zettel",
				"data": {
					"description": "Substantiv, maskulin - kleines, meist rechteckiges Stück Papier, besonders Notizzettel o. Ä.",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "kleines, meist rechteckiges Stück Papier, besonders Notizzettel o. Ä."
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Zettel_Blatt_Papier_Notiz",
					"similarWords": [
						"zetteln",
						"Zettelkram",
						"Zettelei",
						"Zettelkartei",
						"Zettelkasten",
						"Zettelspieß",
						"Zettelspießer",
						"Zettelwirtschaft",
						"Zettelkatalog",
						"Schmierzettel",
						"Scheda",
						"Bestellschein",
						"Klebezettel",
						"verzetteln",
						"Blättchen",
						"Schedula",
						"Merkzettel",
						"Wunschzettel"
					]
				}
			}
		},
		"Wählen": {
			"word": "Wählen",
			"data": {
				"_id": "591899f1ce905c0816aaa260",
				"word": "Wählen",
				"data": {
					"similarWords": [
						"wählen",
						"gewählt",
						"optieren",
						"kiesen",
						"zuwählen",
						"voten",
						"Wahl",
						"Dialer",
						"auserkiesen",
						"erlesen",
						"Tastwahl",
						"erwählen",
						"zugrunde legen, zu Grunde legen",
						"krüsch",
						"Wahlmüdigkeit",
						"auserwählen",
						"Selbstmord begehen",
						"Freitod",
						"verwählen",
						"intelligent"
					]
				}
			}
		},
		"unten": {
			"word": "unten",
			"data": {
				"_id": "591899f1ce905c0816aaa262",
				"word": "unten",
				"data": {
					"description": "Adverb - 1a. an einer (absolut oder vom …1b. am unteren Ende, an der …1c. auf dem Boden, dem Grund …",
					"wordProperties": {
						"type": "Adverb",
						"definition": "1a. an einer (absolut oder vom …1b. am unteren Ende, an der …1c. auf dem Boden, dem Grund …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/unten",
					"similarWords": [
						"unten erwähnt, untenerwähnt",
						"unten genannt, untengenannt",
						"unten stehend, untenstehend",
						"von unten",
						"unten liegend, untenliegend",
						"untenan",
						"untendurch",
						"untenhin",
						"untenrum",
						"untenher",
						"untenherum",
						"untendrunter",
						"v. u.",
						"s. u.",
						"Untenstehendes, unten Stehendes",
						"Untengenanntes, unten Genanntes",
						"Untenerwähntes, unten Erwähntes",
						"hinablassen",
						"drunten"
					]
				}
			}
		},
		"stehende": {
			"word": "stehende",
			"data": {
				"_id": "591899f1ce905c0816aaa261",
				"word": "stehende",
				"data": {
					"similarWords": [
						"stehend",
						"Obenstehendes, oben Stehendes",
						"links stehend, linksstehend",
						"oben stehend, obenstehend",
						"tief stehend, tiefstehend",
						"rechts stehend, rechtsstehend",
						"zonked",
						"leer stehend, leerstehend",
						"unten stehend, untenstehend",
						"einzeln stehend, einzelnstehend",
						"Außenstehende, außen Stehende",
						"Stator",
						"frei stehend, freistehend",
						"passivisch",
						"achselständig",
						"inlautend",
						"tatverdächtig",
						"theonom",
						"fluchtverdächtig",
						"mordverdächtig"
					]
				}
			}
		},
		"Nummer": {
			"word": "Nummer",
			"data": {
				"_id": "591899f1ce905c0816aaa265",
				"word": "Nummer",
				"data": {
					"description": "Substantiv, feminin - 1a. Zahl, die etwas kennzeichnet, eine …1b. Ausgabe einer fortlaufend erscheinenden Zeitung, …1c. (bei Schuhen, Kleidungsstücken o. Ä.) …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. Zahl, die etwas kennzeichnet, eine …1b. Ausgabe einer fortlaufend erscheinenden Zeitung, …1c. (bei Schuhen, Kleidungsstücken o. Ä.) …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Nummer",
					"similarWords": [
						"PIN-Nummer",
						"E-Nummer",
						"Nummer-eins-Hit",
						"nummern",
						"Nr.",
						"nummerisch",
						"Nummerngirl",
						"Nummerung",
						"Nummernboy",
						"Nummernoper",
						"Kennnummer, Kenn-Nummer",
						"Losnummer",
						"Lizenznummer",
						"Kontonummer",
						"Kragennummer",
						"Kreditkartennummer",
						"Zeitungsnummer",
						"Numero",
						"Nummernschild"
					]
				}
			}
		},
		"sagen": {
			"word": "sagen",
			"data": {
				"_id": "591899f1ce905c0816aaa266",
				"word": "sagen",
				"data": {
					"description": "schwaches Verb - 1a. (Wörter, Sätze o. Ä.) artikulieren, …1b. (ein Wort, eine Wendung o. …1c. auf eine bestimmte Weise, mit …",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1a. (Wörter, Sätze o. Ä.) artikulieren, …1b. (ein Wort, eine Wendung o. …1c. auf eine bestimmte Weise, mit …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/sagen",
					"similarWords": [
						"sagenhaft",
						"Sagenbuch",
						"Sagenkreis",
						"Sagengestalt",
						"Sagendichtung",
						"Sagenschatz",
						"Sagenforscher",
						"Sagenkunde",
						"danksagen, Dank sagen",
						"sagenumwoben",
						"sagenumwittert",
						"Sagenforscherin",
						"Sagenforschung",
						"nichtssagend, nichts sagend",
						"vielsagend, viel sagend",
						"nebenhin",
						"Lohengrin",
						"Schmeichelwort",
						"Völva"
					]
				}
			}
		},
		"Operator": {
			"word": "Operator",
			"data": {
				"_id": "591899f1ce905c0816aaa264",
				"word": "Operator",
				"data": {
					"description": "Substantiv, maskulin - 1a. Mittel, Verfahren, Symbol o. Ä. …1b. Rechen-, Abbildungs- oder Transformationsvorschrift, die …2a. jemand, dessen Aufgabe es ist, …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "oder Transformationsvorschrift, die …2a. jemand, dessen Aufgabe es ist, …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Operator",
					"similarWords": [
						"Operment",
						"Staatsoper",
						"Opere",
						"Operatorin",
						"Maschinenbediener",
						"Rockoper",
						"Spieloper",
						"Kammeroper",
						"Barockoper",
						"Operateur",
						"operationell",
						"Operating",
						"Wagneroper, Wagner-Oper",
						"Opernfilm",
						"Zauberoper",
						"Fernsehoper",
						"Funkoper",
						"Nachoperation",
						"Scalping Operations"
					]
				}
			}
		},
		"Stichwort": {
			"word": "Stichwort",
			"data": {
				"_id": "591899f1ce905c0816aaa267",
				"word": "Stichwort",
				"data": {
					"description": "Substantiv, Neutrum - 1a. Wort, das in einem Lexikon, …1b. einzelnes Wort eines Stichwortregisters; 2a. Wort, mit dem ein Schauspieler …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1a. Wort, das in einem Lexikon, …1b. einzelnes Wort eines Stichwortregisters; 2a. Wort, mit dem ein Schauspieler …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Stichwort",
					"similarWords": [
						"Stichpunkt",
						"Merkwort",
						"stichwortartig",
						"Stichwortregister",
						"Stichwortkatalog",
						"Einsatzzeichen",
						"Stichwortverzeichnis",
						"Gedächtnisstütze",
						"Literaturhinweis",
						"sub voce",
						"lemmatisieren",
						"Schlagwort",
						"Gedächtnishilfe",
						"Karteileiche",
						"Leberreim",
						"Leitwort",
						"Lemma",
						"Phraseologie",
						"Eselsbrücke"
					]
				}
			}
		},
		"need": {
			"word": "need",
			"data": {
				"_id": "591899f1ce905c0816aaa263",
				"word": "need",
				"data": {
					"similarWords": [
						"Need",
						"Basic Needs"
					]
				}
			}
		},
		"bumerangcall": {
			"word": "bumerangcall",
			"data": {
				"_id": "591899f1ce905c0816aaa268",
				"word": "bumerangcall",
				"data": {
					"similarWords": []
				}
			}
		},
		"Glück": {
			"word": "Glück",
			"data": {
				"_id": "591899f1ce905c0816aaa26a",
				"word": "Glück",
				"data": {
					"description": "Substantiv, Neutrum - 1. etwas, was Ergebnis des Zusammentreffens …2. das personifiziert gedachte Glück; Fortuna; 3a. angenehme und freudige Gemütsverfassung, in …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. etwas, was Ergebnis des Zusammentreffens …2. das personifiziert gedachte Glück; Fortuna; 3a. angenehme und freudige Gemütsverfassung, in …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Glueck",
					"similarWords": [
						"Glück bringend, glückbringend",
						"Glück verheißend, glückverheißend",
						"Glückwunschschreiben",
						"Glückwunschkarte",
						"Glückwunschadresse",
						"glückselig",
						"Glückwunsch",
						"Glücksache",
						"Glückseligkeit",
						"glücklicherweise",
						"Glückwunschtelegramm",
						"glücklich",
						"glückhaft",
						"beglückwünschen",
						"unglücklicherweise",
						"glückstrahlend",
						"unglückselig",
						"glücklos"
					]
				}
			}
		},
		"duschte": {
			"word": "duschte",
			"data": {
				"_id": "591899f1ce905c0816aaa269",
				"word": "duschte",
				"data": {
					"similarWords": [
						"ungeduscht",
						"duschen",
						"abduschen"
					]
				}
			}
		},
		"zog": {
			"word": "zog",
			"data": {
				"_id": "591899f1ce905c0816aaa26c",
				"word": "zog",
				"data": {
					"description": "siehe ziehen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/zog",
					"similarWords": [
						"herzoglich",
						"Herzogtum",
						"erzherzoglich",
						"großherzoglich",
						"Großherzogtum",
						"Erzherzogtum",
						"Herzog",
						"Apanageherzogtum",
						"Großherzog",
						"Erzherzog",
						"Herzogshut",
						"schwadenweise",
						"Herzogswürde",
						"Erbgroßherzog",
						"zustechen",
						"Erzherzog-Thronfolger",
						"fortan",
						"Ungewitter"
					]
				}
			}
		},
		"Jeans": {
			"word": "Jeans",
			"data": {
				"_id": "591899f1ce905c0816aaa26b",
				"word": "Jeans",
				"data": {
					"description": "Substantiv, Neutrum - verwaschener blauer Farbton, der der Farbe der Bluejeans entspricht",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "verwaschener blauer Farbton, der der Farbe der Bluejeans entspricht"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Jeans_Farbe",
					"similarWords": [
						"Jean",
						"Jeansjacke",
						"Jeansanzug",
						"jeansfarben",
						"Jeanshemd",
						"Jeansrock",
						"Jeanskleid",
						"Jeansstoff",
						"Jeanshose",
						"Jeanstyp",
						"Jeansboy",
						"Jean Paul",
						"Jeannette",
						"Bluejean",
						"Röhrenjeans",
						"Boyfriendjeans, Boyfriend-Jeans",
						"Bluejeans"
					]
				}
			}
		},
		"frisches": {
			"word": "frisches",
			"data": {
				"_id": "591899f2ce905c0816aaa26e",
				"word": "frisches",
				"data": {
					"similarWords": [
						"frisch gestrichen, frischgestrichen",
						"Frisch",
						"jugendfrisch",
						"Neue",
						"quellfrisch",
						"brunnenfrisch",
						"Frischfleisch",
						"Frischei",
						"Frischdampf",
						"Neuschnee",
						"Frischmilch",
						"frisch machen, frischmachen",
						"morgenfrisch",
						"frischbacken",
						"neuwaschen",
						"fangfrisch",
						"ofenfrisch",
						"Frischluft",
						"Frischgemüse",
						"Frischware"
					]
				}
			}
		},
		"Polohemd": {
			"word": "Polohemd",
			"data": {
				"_id": "591899f1ce905c0816aaa26d",
				"word": "Polohemd",
				"data": {
					"description": "Substantiv, Neutrum - kurzärmeliges Trikothemd mit offenem Kragen",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "kurzärmeliges Trikothemd mit offenem Kragen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Polohemd",
					"similarWords": [
						"Poloshirt"
					]
				}
			}
		},
		"bestellte": {
			"word": "bestellte",
			"data": {
				"_id": "591899f2ce905c0816aaa26f",
				"word": "bestellte",
				"data": {
					"similarWords": [
						"Callcar",
						"Volksanwalt",
						"Vormundin",
						"Bestellschein",
						"Herrengedeck",
						"Kännchen",
						"Buchprüfer",
						"Verkaufsfahrer",
						"Claqueur",
						"Lieferschwierigkeit",
						"Zelge",
						"Pflichtverteidiger",
						"Besteller",
						"Bestellpraxis",
						"Trichinenschauer",
						"Kreisausschuss",
						"Kursmakler",
						"Claque",
						"Wirtschaftsprüfer",
						"Anklagevertreter"
					]
				}
			}
		},
		"nachmittags": {
			"word": "nachmittags",
			"data": {
				"_id": "591899f4ce905c0816aaa29f",
				"word": "nachmittags",
				"data": {
					"description": "Adverb - am Nachmittag, zur Nachmittagszeit; während des Nachmittags",
					"wordProperties": {
						"type": "Adverb",
						"definition": "am Nachmittag, zur Nachmittagszeit; während des Nachmittags"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/nachmittags",
					"similarWords": [
						"Nachmittagsprogramm",
						"Nachmittag",
						"Nachmittagszeit",
						"nachmittägig",
						"spätnachmittags",
						"nachm.",
						"nm.",
						"dienstagnachmittags",
						"donnerstagnachmittags",
						"freitagnachmittags",
						"montagnachmittags",
						"sonntagnachmittags",
						"mittwochnachmittags",
						"samstagnachmittags",
						"sonnabendnachmittags",
						"Nachmittagsveranstaltung",
						"Nachmittagsvorstellung",
						"Dienstagnachmittag",
						"Nachmittagsunterricht"
					]
				}
			}
		},
		"Portier": {
			"word": "Portier",
			"data": {
				"_id": "591899f2ce905c0816aaa270",
				"word": "Portier",
				"data": {
					"description": "Substantiv, maskulin - 1. jemand, der in einem Hotel, …2. Hausmeister",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. jemand, der in einem Hotel, …2. Hausmeister"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Portier",
					"similarWords": [
						"Portiersfrau",
						"Portierin",
						"Nachtportier",
						"Hotelportier",
						"Portiere",
						"Portierloge",
						"portieren",
						"Portierung",
						"Türsteherin",
						"Türhüterin",
						"Concierge",
						"Zimmerschlüssel",
						"Portiersloge",
						"Pförtnerin",
						"Türsteher",
						"Türhüter",
						"Pförtner",
						"Zerberus, Cerberus"
					]
				}
			}
		},
		"arbeitete": {
			"word": "arbeitete",
			"data": {
				"_id": "591899f2ce905c0816aaa273",
				"word": "arbeitete",
				"data": {
					"similarWords": [
						"Arbeitstempo",
						"Amethodist",
						"Hochseilartist",
						"Tonmischer",
						"Produktmanager",
						"Kopfarbeiter",
						"Krankenhausarzt",
						"Vollzeiter",
						"Verlustbetrieb",
						"Laserdrucker",
						"Scharwerker",
						"Laserprinter",
						"Teilzeiter",
						"Tintendrucker",
						"Verdater",
						"Gesenkschmied",
						"Kraftwerker",
						"Raumfahrtunternehmen",
						"Provisionsreisende",
						"Provisionsreisender"
					]
				}
			}
		},
		"Tee": {
			"word": "Tee",
			"data": {
				"_id": "591899f5ce905c0816aaa2b9",
				"word": "Tee",
				"data": {
					"description": "Substantiv, Neutrum - 1. kleiner Stift aus Holz oder …2. kleine Fläche, von der aus …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. kleiner Stift aus Holz oder …2. kleine Fläche, von der aus …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Tee_Sportgeraet_Golf",
					"similarWords": [
						"TEE",
						"Teer",
						"Teen",
						"Pu-Erh-Tee",
						"Tee-Ei, Teeei",
						"Tee-Ernte, Teeernte",
						"Teeschale",
						"Teestrauch",
						"Teestunde",
						"Teesteuer",
						"Teemütze",
						"Teegeschirr",
						"Teebrett",
						"Teeblatt",
						"Teelicht",
						"Teerose",
						"Teewurst",
						"Teetisch"
					]
				}
			}
		},
		"Möchten": {
			"word": "Möchten",
			"data": {
				"_id": "591899f2ce905c0816aaa271",
				"word": "Möchten",
				"data": {
					"similarWords": [
						"oben genannt, obengenannt",
						"sporteln",
						"heimatliebend",
						"mitsprechen",
						"mögen",
						"Halbtag",
						"mitmögen",
						"begehrt",
						"Vordruck",
						"für",
						"ruhig",
						"folgend",
						"interessiert",
						"Warteschleife",
						"Selbstbedienung",
						"Schandtat",
						"ausscheren",
						"verwalten",
						"ja",
						"kriegen"
					]
				}
			}
		},
		"Darjeeling": {
			"word": "Darjeeling",
			"data": {
				"_id": "591899f2ce905c0816aaa272",
				"word": "Darjeeling",
				"data": {
					"description": "Substantiv, maskulin - besonders aromatischer indischer Tee",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "besonders aromatischer indischer Tee"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Darjeeling",
					"similarWords": [
						"Tee"
					]
				}
			}
		},
		"milden": {
			"word": "milden",
			"data": {
				"_id": "591899f2ce905c0816aaa275",
				"word": "milden",
				"data": {
					"similarWords": [
						"Silvaner",
						"Maienzeit",
						"Müller-Thurgau",
						"Frühling",
						"loben"
					]
				}
			}
		},
		"Assam": {
			"word": "Assam",
			"data": {
				"_id": "591899f2ce905c0816aaa274",
				"word": "Assam",
				"data": {
					"description": "Substantiv, maskulin - Bundesstaat der Republik Indien",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "Bundesstaat der Republik Indien"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Assam_indischer_Bundesstaat",
					"similarWords": [
						"Assamtee"
					]
				}
			}
		},
		"bitte": {
			"word": "bitte",
			"data": {
				"_id": "591899f2ce905c0816aaa277",
				"word": "bitte",
				"data": {
					"description": "Partikel - a. Höflichkeitsformel zur Unterstreichung einer Bitte, …b. Höflichkeitsformel zur Unterstreichung einer [höflichen] …c. Höflichkeitsformel als bejahende Antwort auf …",
					"wordProperties": {
						"type": "Partikel",
						"definition": "a. Höflichkeitsformel zur Unterstreichung einer Bitte, …b. Höflichkeitsformel zur Unterstreichung einer [höflichen] …c. Höflichkeitsformel als bejahende Antwort auf …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/bitte",
					"similarWords": [
						"Bitte",
						"Bittere",
						"Bitterer",
						"bitter",
						"Bitten",
						"bitten",
						"bitter-",
						"Bitteschön",
						"Bittgebet",
						"Deesis",
						"bitterlich",
						"bitterkalt",
						"bitterarm",
						"bitterernst",
						"bittersüß",
						"Bitternis",
						"Bitterkeit",
						"Bitterklee",
						"Bittersalz"
					]
				}
			}
		},
		"Setzen": {
			"word": "Setzen",
			"data": {
				"_id": "591899f2ce905c0816aaa278",
				"word": "Setzen",
				"data": {
					"similarWords": [
						"setzen",
						"gefangen setzen",
						"instand setzen, in Stand setzen",
						"setzen lassen, setzenlassen",
						"matt setzen, mattsetzen",
						"Setzhase",
						"befluten",
						"hierhersetzen",
						"Fraktursatz",
						"Akzidenzsatz",
						"losreiten",
						"traktandieren",
						"referenzieren",
						"in eins",
						"Zeichen",
						"heransetzen",
						"auspflanzen",
						"lossegeln",
						"spaltenweise",
						"derogieren"
					]
				}
			}
		},
		"ruhig": {
			"word": "ruhig",
			"data": {
				"_id": "591899f2ce905c0816aaa279",
				"word": "ruhig",
				"data": {
					"description": "Partikel - a. meinetwegen; a. drückt Gleichgültigkeit oder …b. wenn du möchtest, wenn Sie …c. unbesorgt, getrost; c. drückt eine …",
					"wordProperties": {
						"type": "Partikel",
						"definition": "a. meinetwegen; a. drückt Gleichgültigkeit oder …b. wenn du möchtest, wenn Sie …c. unbesorgt, getrost; c. drückt eine …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/ruhig_getrost_meinetwegen",
					"similarWords": [
						"ruhig werden",
						"ruhig bleiben",
						"ruhig stellen, ruhigstellen",
						"Ruhigstellung",
						"ruhigstellen",
						"Tranquillo",
						"macklich",
						"adagietto",
						"bärenruhig",
						"geruhig",
						"Handgalopp",
						"tranquillo",
						"quieto",
						"unaufgeregt",
						"laufruhig",
						"Verkehrsanbindung",
						"Feiertagsstimmung",
						"gedrosselt"
					]
				}
			}
		},
		"Salon": {
			"word": "Salon",
			"data": {
				"_id": "591899f2ce905c0816aaa27a",
				"word": "Salon",
				"data": {
					"description": "Substantiv, maskulin - 1. größerer, repräsentativer Raum als Empfangs- …2a. [regelmäßige] Zusammenkunft von besonders literarisch …2b. Kreis von Personen, der sich …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "…2a. [regelmäßige] Zusammenkunft von besonders literarisch …2b. Kreis von Personen, der sich …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Salon",
					"similarWords": [
						"Saloon",
						"Rauchsalon",
						"Salondame",
						"Salonwagen",
						"salonfähig",
						"Salonmusik",
						"Salonlöwin",
						"Salonlöwe",
						"Salonremise",
						"Empfangszimmer",
						"Wohnstube",
						"Saloniki",
						"Salonorchester",
						"Salonkommunist",
						"Saloniker",
						"hoffähig",
						"Bräunungsstudio",
						"Ausstellungsraum",
						"Salonkommunistin"
					]
				}
			}
		},
		"bringe": {
			"word": "bringe",
			"data": {
				"_id": "591899f2ce905c0816aaa27b",
				"word": "bringe",
				"data": {
					"similarWords": [
						"Bringerin",
						"Bringer",
						"bringen",
						"zustande bringen, zu Stande bringen",
						"Pizzabringdienst",
						"Profit bringend, profitbringend",
						"Segen bringend, segenbringend",
						"Unheil bringend, unheilbringend",
						"Trost bringend, trostbringend",
						"Heil bringend, heilbringend",
						"Gefahr bringend, gefahrbringend",
						"Glück bringend, glückbringend",
						"Hilfe bringend, hilfebringend",
						"fruchtbringend, Frucht bringend",
						"Unwiederbringlichkeit",
						"fertigbringen, fertig bringen",
						"Unglück bringend, unglückbringend",
						"Verderben bringend, verderbenbringend",
						"gewinnbringend, Gewinn bringend",
						"uneinbringlich"
					]
				}
			}
		},
		"zweimal": {
			"word": "zweimal",
			"data": {
				"_id": "591899f2ce905c0816aaa27d",
				"word": "zweimal",
				"data": {
					"description": "Zahlwort - zwei Male",
					"wordProperties": {
						"type": "Zahlwort",
						"definition": "zwei Male"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/zweimal",
					"similarWords": [
						"zweimalig",
						"Halbmonatsschrift",
						"Biskotte",
						"binieren",
						"bis",
						"digen",
						"Diplegie",
						"Nachbarinsel",
						"Äquatorialregen",
						"Dissogonie",
						"diklin",
						"dihybrid",
						"sechszählig",
						"Dichromsäure",
						"Parforcehorn",
						"Dien",
						"Digramm",
						"Multiplikativum",
						"Berufsschule"
					]
				}
			}
		},
		"angerufen": {
			"word": "angerufen",
			"data": {
				"_id": "591899f2ce905c0816aaa27c",
				"word": "angerufen",
				"data": {
					"similarWords": [
						"Pestheiliger",
						"Salzamt",
						"Giftnotruf",
						"Veitstanz",
						"Nationalheilige",
						"Nationalheiliger",
						"Mariendichtung",
						"Invokavit",
						"Vokativus",
						"Heiliger",
						"Heilige",
						"Schiedsgericht",
						"anrufen",
						"zurückrufen",
						"nachdem",
						"soeben",
						"Tante",
						"ruhig werden",
						"einige, einiger, einiges",
						"bei"
					]
				}
			}
		},
		"Namen": {
			"word": "Namen",
			"data": {
				"_id": "591899f2ce905c0816aaa27e",
				"word": "Namen",
				"data": {
					"description": "Substantiv, maskulin - 1. Bezeichnung, Wort, mit dem etwas …2a. kennzeichnende Benennung eines Einzelwesens, Ortes …2b. Ruf, Renommee",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. Bezeichnung, Wort, mit dem etwas …2a. kennzeichnende Benennung eines Einzelwesens, Ortes …2b. Ruf, Renommee"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Namen",
					"similarWords": [
						"Namen-Jesu-Fest",
						"namens",
						"namenlos",
						"Namenbuch",
						"Namenwort",
						"Name",
						"namenkundlich",
						"Namenkunde",
						"Namenaktie",
						"Namenstempel",
						"Namensrecht, seltener Namenrecht",
						"Namensliste, seltener Namenliste",
						"Namensgeber, seltener Namengeber",
						"namentlich",
						"Namensbuch",
						"Namensfest",
						"Namenstag"
					]
				}
			}
		},
		"genannt": {
			"word": "genannt",
			"data": {
				"_id": "591899f2ce905c0816aaa27f",
				"word": "genannt",
				"data": {
					"description": "nennen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/genannt",
					"similarWords": [
						"viel genannt, vielgenannt",
						"oben genannt, obengenannt",
						"unten genannt, untengenannt",
						"gen.",
						"vorgenannt",
						"o. g.",
						"s. g.",
						"alias",
						"vulgo",
						"vorbezeichnet",
						"Untengenanntes, unten Genanntes",
						"zubenannt",
						"benannt",
						"besagt",
						"sogenannt, so genannt",
						"obgenannt",
						"zubenamt",
						"soi-disant",
						"meistgenannt"
					]
				}
			}
		},
		"Ausländer": {
			"word": "Ausländer",
			"data": {
				"_id": "591899f3ce905c0816aaa293",
				"word": "Ausländer",
				"data": {
					"description": "Substantiv, maskulin - Angehöriger eines fremden Staates; ausländischer Staatsangehöriger oder Staatenloser",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "Angehöriger eines fremden Staates; ausländischer Staatsangehöriger oder Staatenloser"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Auslaender",
					"similarWords": [
						"Ausländerhass",
						"Ausländerkind",
						"Ausländeramt",
						"Ausländerrecht",
						"Ausländergesetz",
						"Ausländeranteil",
						"Ausländerbeirat",
						"Ausländerkonto",
						"ausländerfeindlich",
						"Ausländerbehörde",
						"Ausländerpolitik",
						"Ausländerkolonie",
						"Ausländerin",
						"Ausland",
						"Auswärtiger",
						"Tschusch",
						"Fremdling",
						"Ausländerbeauftragte",
						"Ausländerbeauftragter"
					]
				}
			}
		},
		"verstanden": {
			"word": "verstanden",
			"data": {
				"_id": "591899f5ce905c0816aaa2ab",
				"word": "verstanden",
				"data": {
					"similarWords": [
						"wohlverstanden, wohl verstanden",
						"capito",
						"capito?",
						"Charaktereigenschaft",
						"Machtsymbol",
						"Wahrheitsbegriff",
						"ontisch",
						"unverstanden",
						"Injektomanie",
						"Wissenschaftsbegriff",
						"gottgewollt",
						"Querdenker",
						"aha",
						"roger",
						"beibiegen",
						"rüberkommen",
						"Kameraderie",
						"Patriarchalismus",
						"Deglutination",
						"Beschwichtigungspolitik"
					]
				}
			}
		},
		"mal": {
			"word": "mal",
			"data": {
				"_id": "591899f2ce905c0816aaa280",
				"word": "mal",
				"data": {
					"description": "Adverb - 1. malgenommen, multipliziert mit; 1. Ausdruck …",
					"wordProperties": {
						"type": "Adverb",
						"definition": "1. malgenommen, multipliziert mit; 1. Ausdruck …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/mal",
					"similarWords": [
						"Mal",
						"x-mal",
						"mall",
						"Malm",
						"Malz",
						"Mall",
						"-mals",
						"erst mal, erstmal",
						"noch mal, nochmal",
						"schon mal, schonmal",
						"Grand Mal",
						"Haut Mal",
						"Pall-Mall",
						"jedes Mal",
						"etliche Mal",
						"Petit Mal",
						"beide Mal"
					]
				}
			}
		},
		"anrufen": {
			"word": "anrufen",
			"data": {
				"_id": "591899f4ce905c0816aaa295",
				"word": "anrufen",
				"data": {
					"description": "starkes Verb - 1. durch Rufen jemanden auf sich …2. jemanden bitten, vermittelnd, helfend o. …3. mit jemandem telefonisch Verbindung aufnehmen",
					"wordProperties": {
						"type": "starkes",
						"definition": "1. durch Rufen jemanden auf sich …2. jemanden bitten, vermittelnd, helfend o. …3. mit jemandem telefonisch Verbindung aufnehmen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/anrufen",
					"similarWords": [
						"anpreien",
						"Anrufung",
						"antelefonieren",
						"durchrufen",
						"anfunken",
						"Telefonhörer",
						"Call",
						"preien",
						"anklingeln",
						"durchklingeln",
						"telefonieren",
						"jedoch",
						"Testifikation",
						"Telefonauskunft",
						"anläuten",
						"Call-in",
						"herumtelefonieren",
						"abtelefonieren",
						"herauswählen"
					]
				}
			}
		},
		"Adresse": {
			"word": "Adresse",
			"data": {
				"_id": "591899f4ce905c0816aaa29c",
				"word": "Adresse",
				"data": {
					"description": "Substantiv, feminin - 1a. Angabe von jemandes Namen und …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. Angabe von jemandes Namen und …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Adresse",
					"similarWords": [
						"IP-Adresse",
						"per Adresse",
						"Adressaufkleber",
						"Adr.",
						"E-Mail-Adresse",
						"Adressant",
						"p. A.",
						"Grußschreiben",
						"Anschrift",
						"Deckadresse",
						"Adressraum",
						"Grußtelegramm",
						"nachsenden",
						"und/oder",
						"nachschicken",
						"Dankschreiben",
						"Willenskundgebung",
						"Adressantin",
						"Paketkarte"
					]
				}
			}
		},
		"geben": {
			"word": "geben",
			"data": {
				"_id": "591899f4ce905c0816aaa296",
				"word": "geben",
				"data": {
					"description": "starkes Verb - 1a. (durch Übergeben, Überreichen, [Hin]reichen, Aushändigen) …1b. als Geschenk, Spende in jemandes …2. zu einem bestimmten Zweck überlassen, …",
					"wordProperties": {
						"type": "starkes",
						"definition": "1a. (durch Übergeben, Überreichen, [Hin]reichen, Aushändigen) …1b. als Geschenk, Spende in jemandes …2. zu einem bestimmten Zweck überlassen, …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/geben",
					"similarWords": [
						"verloren geben, verlorengeben",
						"bekannt geben, bekanntgeben",
						"recht geben, Recht geben",
						"Gebände, Gebende",
						"Milch gebend, milchgebend",
						"achtgeben, Acht geben",
						"freigeben, frei geben",
						"Gebenedeite",
						"gab",
						"funzeln",
						"Gabe",
						"Gegenruder",
						"Gas",
						"Vollgas",
						"Okay",
						"Gift",
						"beteiligen",
						"Knurrlaut",
						"darleihen"
					]
				}
			}
		},
		"lassen": {
			"word": "lassen",
			"data": {
				"_id": "591899f4ce905c0816aaa299",
				"word": "lassen",
				"data": {
					"description": "starkes Verb - 1. veranlassen, bewirken (dass etwas geschieht); 2a. zulassen, erlauben; dulden; nicht an …2b. jemandem etwas zugestehen; jemanden nicht …",
					"wordProperties": {
						"type": "starkes",
						"definition": "1. veranlassen, bewirken (dass etwas geschieht); 2a. zulassen, erlauben; dulden; nicht an …2b. jemandem etwas zugestehen; jemanden nicht …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/lassen",
					"similarWords": [
						"fahren lassen, fahrenlassen",
						"fallen lassen, fallenlassen",
						"kommen lassen, kommenlassen",
						"springen lassen, springenlassen",
						"laufen lassen, laufenlassen",
						"ruhen lassen, ruhenlassen",
						"bleiben lassen, bleibenlassen",
						"sausen lassen, sausenlassen",
						"gehen lassen, gehenlassen",
						"sein lassen, seinlassen",
						"sehen lassen, sehenlassen",
						"liegen lassen, liegenlassen",
						"schleifen lassen, schleifenlassen",
						"hängen lassen, hängenlassen",
						"übrig lassen, übriglassen",
						"stehen lassen, stehenlassen",
						"sitzen lassen, sitzenlassen",
						"schießen lassen, schießenlassen",
						"stecken lassen, steckenlassen"
					]
				}
			}
		},
		"bekam": {
			"word": "bekam",
			"data": {
				"_id": "591899f4ce905c0816aaa298",
				"word": "bekam",
				"data": {
					"similarWords": [
						"Damenbesuch",
						"zulosen",
						"Lebenswerk",
						"Anfangsgehalt",
						"Kosename",
						"mittelgroß",
						"lebenslänglich",
						"Gemeinschaftsarbeit",
						"Alkoholverbot",
						"Fürsprache",
						"spitzbekommen",
						"Schulanfang",
						"Hauptfigur",
						"benzen",
						"überbekommen",
						"Drall",
						"zurückbekommen",
						"verknurren",
						"ausreichend",
						"heillos"
					]
				}
			}
		},
		"eisigen": {
			"word": "eisigen",
			"data": {
				"_id": "591899f3ce905c0816aaa28c",
				"word": "eisigen",
				"data": {
					"similarWords": [
						"umblasen",
						"Schauer"
					]
				}
			}
		},
		"Schreck": {
			"word": "Schreck",
			"data": {
				"_id": "591899f4ce905c0816aaa297",
				"word": "Schreck",
				"data": {
					"description": "Substantiv, maskulin - heftige Gemütserschütterung, die meist durch das plötzliche Erkennen einer [vermeintlichen] Gefahr, Bedrohung ausgelöst wird",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "heftige Gemütserschütterung, die meist durch das plötzliche Erkennen einer [vermeintlichen] Gefahr, Bedrohung ausgelöst wird"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Schreck",
					"similarWords": [
						"-schreck",
						"Schreckschraube",
						"Schreckschusswaffe",
						"Schreckschusspistole",
						"Schreckschuss",
						"Schreckhaftigkeit",
						"Schreckgestalt",
						"Schreckaphasie",
						"Schreckreaktion",
						"Schreckmittel",
						"schreckhaft",
						"Schreckbild",
						"Schrecklaut",
						"schrecklich",
						"schreckgeweitet",
						"Schreckstoff",
						"schreckerfüllt",
						"schreckerstarrt",
						"Schreckgespenst"
					]
				}
			}
		},
		"sofort": {
			"word": "sofort",
			"data": {
				"_id": "591899f4ce905c0816aaa29a",
				"word": "sofort",
				"data": {
					"description": "Adverb - 1a. unmittelbar nach einem bestimmten Geschehen; 1b. ohne zeitliche Verzögerung; unverzüglich; 2. innerhalb kürzester Frist",
					"wordProperties": {
						"type": "Adverb",
						"definition": "1a. unmittelbar nach einem bestimmten Geschehen; 1b. ohne zeitliche Verzögerung; unverzüglich; 2. innerhalb kürzester Frist"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/sofort",
					"similarWords": [
						"Sofortvollzug",
						"Sofortwirkung",
						"Soforthilfe",
						"Sofortrente",
						"sofortig",
						"Sofortprogramm",
						"Sofortmaßnahme",
						"Sofortbildkamera",
						"augenblicks",
						"sogleich",
						"tosto",
						"Eilmeldung",
						"Umkehrfilm",
						"Direktschuss",
						"Umkehrfarbfilm",
						"a tempo",
						"schussbereit",
						"brühwarm",
						"subito"
					]
				}
			}
		},
		"Bulgare": {
			"word": "Bulgare",
			"data": {
				"_id": "591899f3ce905c0816aaa282",
				"word": "Bulgare",
				"data": {
					"description": "Substantiv, maskulin - Einwohnerbezeichnung",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "Einwohnerbezeichnung"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Bulgare",
					"similarWords": [
						"Bulgarin"
					]
				}
			}
		},
		"einfiel": {
			"word": "einfiel",
			"data": {
				"_id": "591899f3ce905c0816aaa281",
				"word": "einfiel",
				"data": {
					"similarWords": []
				}
			}
		},
		"beiger": {
			"word": "beiger",
			"data": {
				"_id": "591899f5ce905c0816aaa2a9",
				"word": "beiger",
				"data": {
					"similarWords": [
						"beige"
					]
				}
			}
		},
		"Gorilla": {
			"word": "Gorilla",
			"data": {
				"_id": "591899f3ce905c0816aaa283",
				"word": "Gorilla",
				"data": {
					"description": "Substantiv, maskulin - 1. (in den Wäldern Äquatorialafrikas lebender) …2. Leibwächter",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. (in den Wäldern Äquatorialafrikas lebender) …2. Leibwächter"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Gorilla",
					"similarWords": [
						"Silberrücken",
						"Leibwächterin",
						"Lebensraum",
						"Leibwächter",
						"Patrona",
						"Beschützerin",
						"aufrecken",
						"Beschützer"
					]
				}
			}
		},
		"Hören": {
			"word": "Hören",
			"data": {
				"_id": "591899f4ce905c0816aaa29d",
				"word": "Hören",
				"data": {
					"similarWords": [
						"hören",
						"Hörensagen",
						"hörenswert",
						"Audition colorée",
						"Wiederhören",
						"mitkriegen",
						"hinhören",
						"Audimeter",
						"Hypakusis",
						"Hyperakusie",
						"weithin",
						"Stereoakustik",
						"Gehör",
						"erhören",
						"vertönen",
						"Parakusie",
						"Parakusis",
						"hinweghören",
						"audio-, Audio-, audi-, Audi-",
						"Audition"
					]
				}
			}
		},
		"falls": {
			"word": "falls",
			"data": {
				"_id": "591899f3ce905c0816aaa284",
				"word": "falls",
				"data": {
					"description": "Konjunktion - im Falle, für den Fall, unter der Voraussetzung, dass; wenn",
					"wordProperties": {
						"type": "Konjunktion",
						"definition": "im Falle, für den Fall, unter der Voraussetzung, dass; wenn"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/falls",
					"similarWords": [
						"Zufallsprinzip",
						"Zufallsgröße",
						"Zufallstreffer",
						"beifallsfreudig",
						"Zufallsbekanntschaft",
						"Beifallsklatschen",
						"Zufallsergebnis",
						"Überfallskommando",
						"Zufallsstreubereich",
						"Anfallsleiden",
						"Anfallsbereitschaft",
						"Beifallsdonner",
						"Verfallserscheinung",
						"Zerfallserscheinung",
						"Ausfallserscheinung",
						"Einfallsreichtum",
						"Zufallsstreuung",
						"Beifallsgeschrei",
						"Verfallsstadium"
					]
				}
			}
		},
		"Fall": {
			"word": "Fall",
			"data": {
				"_id": "591899f3ce905c0816aaa285",
				"word": "Fall",
				"data": {
					"description": "Substantiv, maskulin - 1a. das Fallen; 1b. das Fallen, Hinfallen; Sturz; 2a. etwas, womit man rechnen muss",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1a. das Fallen; 1b. das Fallen, Hinfallen; Sturz; 2a. etwas, womit man rechnen muss"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Fall_stuerzen_hinfallen_Sache",
					"similarWords": [
						"im Fall, Falle[,] dass",
						"Free-Fall-Tower",
						"falls",
						"Fallschirmtruppe",
						"Fallschirmjäger",
						"fallsüchtig",
						"Fallbeispiel",
						"Fallrecht",
						"Falllaub, Fall-Laub",
						"Fallsucht",
						"Falltritt",
						"Fallstart",
						"Fallobst",
						"Fallholz",
						"Fallrohr",
						"Fallreep",
						"Fallbeil",
						"Falllaubgehölz"
					]
				}
			}
		},
		"Privatadresse": {
			"word": "Privatadresse",
			"data": {
				"_id": "591899f3ce905c0816aaa286",
				"word": "Privatadresse",
				"data": {
					"description": "Substantiv, feminin - private, nicht dienstliche Adresse",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "private, nicht dienstliche Adresse"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Privatadresse",
					"similarWords": []
				}
			}
		},
		"Klar": {
			"word": "Klar",
			"data": {
				"_id": "591899face905c0816aaa315",
				"word": "Klar",
				"data": {
					"similarWords": [
						"klar",
						"Klarschriftleser",
						"Klarstellung",
						"Klarblick",
						"Klarsicht",
						"Klarheit",
						"Klarspülmittel",
						"Klarsichthülle",
						"Klartext",
						"klargehen",
						"klarlegen",
						"klarsehen",
						"Klarschiff",
						"Klarapfel",
						"Klarsichtfolie",
						"Klarsichtmappe",
						"klarsichtig",
						"klarstellen",
						"Klarspüler"
					]
				}
			}
		},
		"Anlageberater": {
			"word": "Anlageberater",
			"data": {
				"_id": "591899f3ce905c0816aaa287",
				"word": "Anlageberater",
				"data": {
					"description": "Substantiv, maskulin - Berufsbezeichnung; jemand, der bei Anlagen berät",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "Berufsbezeichnung; jemand, der bei Anlagen berät"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Anlageberater",
					"similarWords": [
						"Anlageberaterin"
					]
				}
			}
		},
		"fragte": {
			"word": "fragte",
			"data": {
				"_id": "591899f3ce905c0816aaa28e",
				"word": "fragte",
				"data": {
					"similarWords": [
						"überfragt",
						"viel gefragt, vielgefragt",
						"meistgefragt",
						"Frager",
						"unhinterfragt",
						"forthin",
						"Kehrtwende",
						"Begehr",
						"zusteigen",
						"zurückfragen",
						"ungefragt",
						"Harmlosigkeit",
						"wer",
						"gefragt",
						"woraus",
						"zueinander",
						"abfragen",
						"gleich",
						"andauernd",
						"worunter"
					]
				}
			}
		},
		"Ähnliches": {
			"word": "Ähnliches",
			"data": {
				"_id": "591899f3ce905c0816aaa28d",
				"word": "Ähnliches",
				"data": {
					"similarWords": [
						"similär",
						"aut simile",
						"vergleichbar",
						"ähneln",
						"gleich",
						"komparabel",
						"unähnlich",
						"arten",
						"gleichartig",
						"ähnlich",
						"Entsprechung",
						"texten",
						"kommensurabel",
						"gleichkommen",
						"gleichen",
						"derlei",
						"Lyra",
						"dergleichen",
						"Ansage",
						"Tippen"
					]
				}
			}
		},
		"morgens": {
			"word": "morgens",
			"data": {
				"_id": "591899f3ce905c0816aaa28f",
				"word": "morgens",
				"data": {
					"description": "Adverb - zur Zeit des Morgens; am Morgen, jeden Morgen",
					"wordProperties": {
						"type": "Adverb",
						"definition": "zur Zeit des Morgens; am Morgen, jeden Morgen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/morgens",
					"similarWords": [
						"Morgen",
						"Morgenstern",
						"heute Morgen",
						"allmorgendlich",
						"Morgenstreich",
						"Morgenstunde",
						"Morgensonne",
						"Morgenspitze",
						"morgen",
						"morgendlich",
						"dienstagmorgens",
						"donnerstagmorgens",
						"freitagmorgens",
						"montagmorgens",
						"sonntagmorgens",
						"mittwochmorgens",
						"samstagmorgens",
						"sonnabendmorgens",
						"morgig"
					]
				}
			}
		},
		"Frühstücksraum": {
			"word": "Frühstücksraum",
			"data": {
				"_id": "591899f3ce905c0816aaa288",
				"word": "Frühstücksraum",
				"data": {
					"description": "Substantiv, maskulin - Raum in einem Hotel o. Ä., in dem das Frühstück serviert wird",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "Raum in einem Hotel o. Ä., in dem das Frühstück serviert wird"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Fruehstuecksraum",
					"similarWords": []
				}
			}
		},
		"hohe": {
			"word": "hohe",
			"data": {
				"_id": "591899f3ce905c0816aaa290",
				"word": "hohe",
				"data": {
					"similarWords": [
						"hohe, hoher, hohes",
						"Hohe Schule, hohe Schule",
						"Hohelied, Hohe Lied",
						"Hoheit",
						"Hohepriester, Hohe Priester",
						"Staatsamt",
						"Hochziel",
						"Denkerstirn",
						"Hochjagd",
						"hoheitlich",
						"Hohenlohe",
						"Hohentwiel",
						"Hoheitsakt",
						"Hohepriesteramt",
						"Hohepriesterin",
						"Spitzenpolitiker",
						"hohepriesterlich",
						"Hochwild",
						"renditeträchtig",
						"hochschulterig"
					]
				}
			}
		},
		"Flügeltür": {
			"word": "Flügeltür",
			"data": {
				"_id": "591899f3ce905c0816aaa289",
				"word": "Flügeltür",
				"data": {
					"description": "Substantiv, feminin - Tür mit zwei Flügeln",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "Tür mit zwei Flügeln"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Fluegeltuer",
					"similarWords": [
						"zuschwingen"
					]
				}
			}
		},
		"Balkon": {
			"word": "Balkon",
			"data": {
				"_id": "591899f3ce905c0816aaa291",
				"word": "Balkon",
				"data": {
					"description": "Substantiv, maskulin - 1. vom Wohnungsinnern betretbarer offener Vorbau, …2. stark erhöhter Teil des Zuschauerraums …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. vom Wohnungsinnern betretbarer offener Vorbau, …2. stark erhöhter Teil des Zuschauerraums …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Balkon",
					"similarWords": [
						"Balkontür",
						"Balkonloge",
						"Balkönchen",
						"Balkonzimmer",
						"Balkonmöbel",
						"Balkonpflanze",
						"Balkonblume",
						"Balkonkasten",
						"Balkonien",
						"Balkonbrüstung",
						"überglasen",
						"Blumenkasten",
						"umhängen",
						"Sonnenbalkon",
						"Kragplatte",
						"Altan",
						"Veranda",
						"Loggia",
						"Austritt"
					]
				}
			}
		},
		"stand": {
			"word": "stand",
			"data": {
				"_id": "591899f5ce905c0816aaa2b3",
				"word": "stand",
				"data": {
					"description": "stehen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/stand",
					"similarWords": [
						"Stand",
						"Stand-by, Standby",
						"Stand-up",
						"Standl",
						"Stand-up-Comedian",
						"Stand-by-Betrieb, Standbybetrieb",
						"One-Night-Stand",
						"Stand-by-Kredit",
						"Stand-by-Tarif",
						"Stand-up-Paddeln",
						"Stand-alone-Lösung",
						"Stand-alone-Gerät",
						"Standfußball",
						"Standquartier",
						"Standseilbahn",
						"Standstreifen",
						"Standortnachteil",
						"Standorttheorie"
					]
				}
			}
		},
		"Stra": {
			"word": "Stra",
			"data": {
				"_id": "591899f3ce905c0816aaa292",
				"word": "Stra",
				"data": {
					"similarWords": [
						"strack",
						"stramm",
						"straff",
						"Straus",
						"Strahl",
						"Strang",
						"Strak",
						"Strand",
						"Strass",
						"Straps",
						"Straßenbahn",
						"Straßenbild",
						"Straßenkind",
						"Straßendorf",
						"Straßenfest",
						"Straßennetz",
						"Straßenbord",
						"Straßenzoll",
						"Straßenecke",
						"Straßenraub"
					]
				}
			}
		},
		"Stimmen": {
			"word": "Stimmen",
			"data": {
				"_id": "591899f5ce905c0816aaa2b1",
				"word": "Stimmen",
				"data": {
					"similarWords": [
						"stimmen",
						"Stimmenfang",
						"Stimmenkauf",
						"stimmenstark",
						"Stimmenmehr",
						"Stimmengewirr",
						"Stimmenzuwachs",
						"Stimmenmehrheit",
						"Stimmenverlust",
						"Stimmengewinn",
						"Stimmenanteil",
						"Stimmeneinbruch",
						"Stimmengleichheit",
						"Stimmer",
						"mehrstimmig",
						"Partes",
						"Stimmenverhältnis",
						"Stimmenauszählung",
						"Stimmenthaltung",
						"tutti"
					]
				}
			}
		},
		"Autolärm": {
			"word": "Autolärm",
			"data": {
				"_id": "591899f5ce905c0816aaa2ac",
				"word": "Autolärm",
				"data": {
					"similarWords": []
				}
			}
		},
		"hören": {
			"word": "hören",
			"data": {
				"_id": "591899f5ce905c0816aaa2b4",
				"word": "hören",
				"data": {
					"description": "schwaches Verb - 1a. aufgrund der Beschaffenheit seines Gehörs …1b. mit dem Gehör registrieren, akustisch …2a. (eine Darbietung o. Ä.) durch …",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1a. aufgrund der Beschaffenheit seines Gehörs …1b. mit dem Gehör registrieren, akustisch …2a. (eine Darbietung o. Ä.) durch …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/hoeren",
					"similarWords": [
						"Hörensagen",
						"hörenswert",
						"mitkriegen",
						"hinhören",
						"Audimeter",
						"Audition colorée",
						"weithin",
						"Gehör",
						"Hypakusis",
						"Hyperakusie",
						"erhören",
						"vertönen",
						"Wiederhören",
						"Hörvermögen",
						"beichthören",
						"audio-, Audio-, audi-, Audi-",
						"Audition",
						"horchen",
						"verhören"
					]
				}
			}
		},
		"Sofa": {
			"word": "Sofa",
			"data": {
				"_id": "591899f5ce905c0816aaa2ae",
				"word": "Sofa",
				"data": {
					"description": "Substantiv, Neutrum - gepolstertes Sitzmöbel mit Rückenlehne und Armlehnen, dessen Sitzfläche für mehrere Personen Platz bietet",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "gepolstertes Sitzmöbel mit Rückenlehne und Armlehnen, dessen Sitzfläche für mehrere Personen Platz bietet"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Sofa",
					"similarWords": [
						"Sofaecke",
						"Sofakissen",
						"Sofamelker",
						"Sofagarnitur",
						"Liegesofa",
						"Ledersofa",
						"flegeln",
						"Plüschsofa",
						"Causeuse",
						"Ecksofa",
						"Récamiere",
						"hineinkuscheln",
						"Lotterbett",
						"hingegossen",
						"Federung",
						"Chaiselongue",
						"Ottomane",
						"Ruhekissen",
						"Wandschmuck"
					]
				}
			}
		},
		"Lesetisch": {
			"word": "Lesetisch",
			"data": {
				"_id": "591899f4ce905c0816aaa29e",
				"word": "Lesetisch",
				"data": {
					"similarWords": []
				}
			}
		},
		"verknitterten": {
			"word": "verknitterten",
			"data": {
				"_id": "591899f5ce905c0816aaa2ad",
				"word": "verknitterten",
				"data": {
					"similarWords": []
				}
			}
		},
		"schwarzen": {
			"word": "schwarzen",
			"data": {
				"_id": "591899f3ce905c0816aaa294",
				"word": "schwarzen",
				"data": {
					"similarWords": [
						"Krim",
						"schwarzbärtig",
						"Odessa",
						"Asowsches Meer",
						"Schwarzmeerflotte",
						"Kolchis",
						"Höckerschwan",
						"schwarzumflort",
						"Pont",
						"Colchicum",
						"New-Orleans-Jazz",
						"Blindenbinde",
						"Vogelkirsche",
						"Mustie",
						"Westküste",
						"Hautfarbe",
						"Schwarzmeerküste",
						"Haarfarn",
						"Liman",
						"Mustio"
					]
				}
			}
		},
		"Leinenanzug": {
			"word": "Leinenanzug",
			"data": {
				"_id": "591899f3ce905c0816aaa28a",
				"word": "Leinenanzug",
				"data": {
					"similarWords": []
				}
			}
		},
		"blätterte": {
			"word": "blätterte",
			"data": {
				"_id": "591899f3ce905c0816aaa28b",
				"word": "blätterte",
				"data": {
					"similarWords": [
						"Blätterteig",
						"zurückblättern",
						"ablenken"
					]
				}
			}
		},
		"Buch": {
			"word": "Buch",
			"data": {
				"_id": "591899f5ce905c0816aaa2a8",
				"word": "Buch",
				"data": {
					"description": "Substantiv, Neutrum - 1a. größeres, gebundenes Druckwerk; Band; 1b. in Buchform veröffentlichter literarischer, wissenschaftlicher …1c. Teil eines gegliederten [literarischen] Werkes",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1a. größeres, gebundenes Druckwerk; Band; 1b. in Buchform veröffentlichter literarischer, wissenschaftlicher …1c. Teil eines gegliederten [literarischen] Werkes"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Buch",
					"similarWords": [
						"E-Buch",
						"Abc-Buch, Abecebuch",
						"Buch führend, buchführend",
						"Bucht",
						"Pop-up-Buch",
						"Buchs",
						"Buchschrift",
						"Buchschnitt",
						"buchtenreich",
						"Buchführung",
						"Buchhandlung",
						"Buchhändler",
						"Buchkunst",
						"Buchdruck",
						"Buchecker",
						"Buchmarkt",
						"Buchblock",
						"Buchform",
						"Buchausstattung"
					]
				}
			}
		},
		"Christo": {
			"word": "Christo",
			"data": {
				"_id": "591899f4ce905c0816aaa29b",
				"word": "Christo",
				"data": {
					"similarWords": [
						"vor Christo",
						"nach Christo",
						"vor Christus",
						"v. Chr.",
						"n. Chr.",
						"Christopher",
						"Christogramm",
						"Christopher Street Day",
						"Christoph",
						"Montecristo, französisch Monte-Cristo, bei Dumas in deutscher Übersetzung Monte Christo",
						"nach Christus",
						"christologisch",
						"Christophorus",
						"Christolatrie",
						"Christozentrik",
						"Christologie",
						"Christophanie",
						"St. Christoph und Nevis",
						"christozentrisch",
						"Antichrist"
					]
				}
			}
		},
		"Jeanne": {
			"word": "Jeanne",
			"data": {
				"_id": "591899f5ce905c0816aaa2af",
				"word": "Jeanne",
				"data": {
					"description": "Eigenname - weiblicher Vorname",
					"wordProperties": {
						"type": "Eigenname",
						"definition": "weiblicher Vorname"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Jeanne",
					"similarWords": [
						"Jeanne d'Arc",
						"Jeannette"
					]
				}
			}
		},
		"Claude": {
			"word": "Claude",
			"data": {
				"_id": "591899f5ce905c0816aaa2b0",
				"word": "Claude",
				"data": {
					"similarWords": [
						"Claudel",
						"Reneklode, Reineclaude"
					]
				}
			}
		},
		"Verhüllung": {
			"word": "Verhüllung",
			"data": {
				"_id": "591899f5ce905c0816aaa2b7",
				"word": "Verhüllung",
				"data": {
					"description": "Substantiv, feminin - das Verhüllen; das Verhülltwerden",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "das Verhüllen; das Verhülltwerden"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Verhuellung",
					"similarWords": [
						"Tarnung",
						"Bedeckung",
						"Konopeum",
						"getarnt",
						"enthüllen",
						"Feigenblatt"
					]
				}
			}
		},
		"herausgebracht": {
			"word": "herausgebracht",
			"data": {
				"_id": "591899f5ce905c0816aaa2b5",
				"word": "herausgebracht",
				"data": {
					"similarWords": [
						"Sonderbriefmarke",
						"Sonderprägung",
						"Jubiläumsausgabe",
						"Jubiläumsheft",
						"autonym",
						"herausbringen",
						"Jahrgang",
						"erscheinen",
						"herauskommen"
					]
				}
			}
		},
		"Reichstag": {
			"word": "Reichstag",
			"data": {
				"_id": "591899f4ce905c0816aaa2a0",
				"word": "Reichstag",
				"data": {
					"description": "Substantiv, maskulin - 1a. im Deutschen Reich bis 1806 …1b. Vertretung der Reichsstände gegenüber dem …2a. Volksvertretung im Norddeutschen Bund von …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1a. im Deutschen Reich bis 1806 …1b. Vertretung der Reichsstände gegenüber dem …2a. Volksvertretung im Norddeutschen Bund von …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Reichstag",
					"similarWords": [
						"Reichstagsgebäude",
						"Reichstagswahl",
						"Reichstagsabgeordnete",
						"Reichsdorf",
						"Reichstagsmandat",
						"Landsting",
						"Fürstentag",
						"Grafenbank",
						"Reichstagsbrand",
						"Folketing",
						"Volksvertretung",
						"Verhüllung",
						"Protestant",
						"Reichsstände",
						"Reichsmarschall",
						"Berufung"
					]
				}
			}
		},
		"verrücktes": {
			"word": "verrücktes",
			"data": {
				"_id": "591899f4ce905c0816aaa2a1",
				"word": "verrücktes",
				"data": {
					"similarWords": [
						"spinnig",
						"crazy",
						"mannstoll",
						"Verrückte",
						"nymphomanisch",
						"jeck",
						"nymphoman",
						"flippig",
						"schrullenhaft",
						"verdreht",
						"verliebt",
						"spinnert",
						"spleenig",
						"irr",
						"verrückt",
						"widersinnig",
						"hirnrissig",
						"mall",
						"kirre machen, kirremachen",
						"versessen sein"
					]
				}
			}
		},
		"Unternehmen": {
			"word": "Unternehmen",
			"data": {
				"_id": "591899f4ce905c0816aaa2a2",
				"word": "Unternehmen",
				"data": {
					"description": "Substantiv, Neutrum - 1. etwas, was unternommen wird; Vorhaben; 2. [aus mehreren Werken, Filialen o. …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. etwas, was unternommen wird; Vorhaben; 2. [aus mehreren Werken, Filialen o. …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Unternehmen",
					"similarWords": [
						"unternehmen",
						"IT-Unternehmen",
						"US-Unternehmen",
						"Non-Profit-Unternehmen, Nonprofitunternehmen",
						"Start-up-Unternehmen",
						"Konkurrenzunternehmen",
						"Verlustbringer",
						"Stromerzeuger",
						"unternehmensübergreifend",
						"Business-to-Business",
						"Unternehmung",
						"Aktientausch",
						"Unternehmenskommunikation",
						"Handelspartner",
						"Monopolist",
						"Marktzugang",
						"Unternehmensteuer",
						"Impresario"
					]
				}
			}
		},
		"einfach": {
			"word": "einfach",
			"data": {
				"_id": "591899f4ce905c0816aaa2a4",
				"word": "einfach",
				"data": {
					"description": "Adjektiv - 1. nur einmal gemacht, gefertigt; nicht …2a. leicht verständlich, durchführbar; ohne Mühe …2b. leicht einsehbar; einleuchtend, eindeutig",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1. nur einmal gemacht, gefertigt; nicht …2a. leicht verständlich, durchführbar; ohne Mühe …2b. leicht einsehbar; einleuchtend, eindeutig"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/einfach_einmal_simpel",
					"similarWords": [
						"Einfachheit",
						"Einfaches",
						"einfachheitshalber",
						"einfachgesetzlich",
						"haploid",
						"BASIC",
						"Lowtech",
						"Simplum",
						"Feldbett",
						"Volksausgabe",
						"Feuerstelle",
						"Blechtrommel",
						"Waschstoff",
						"Landwein",
						"Marschkompass",
						"Satzform",
						"Signaltrommel",
						"Dampfmotor"
					]
				}
			}
		},
		"verrückt": {
			"word": "verrückt",
			"data": {
				"_id": "591899f4ce905c0816aaa2a3",
				"word": "verrückt",
				"data": {
					"description": "Adjektiv - 1. krankhaft wirr im Denken und …2. auf absonderliche, auffällige Weise ungewöhnlich, …3. über die Maßen, außerordentlich, sehr",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1. krankhaft wirr im Denken und …2. auf absonderliche, auffällige Weise ungewöhnlich, …3. über die Maßen, außerordentlich, sehr"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/verrueckt",
					"similarWords": [
						"Verrücktwerden",
						"Verrücktheit",
						"Verrückte",
						"Verrückter",
						"verrücktspielen",
						"spinnig",
						"crazy",
						"befotzt",
						"mannstoll",
						"nymphomanisch",
						"verdreht",
						"spinnert",
						"gschupft",
						"klapsig",
						"jeck",
						"nymphoman",
						"unsinnig",
						"ausflippen",
						"abgedreht"
					]
				}
			}
		},
		"gefällt": {
			"word": "gefällt",
			"data": {
				"_id": "591899f6ce905c0816aaa2bf",
				"word": "gefällt",
				"data": {
					"similarWords": [
						"placet",
						"Plazet",
						"schlagreif",
						"fällen",
						"belieben",
						"Räumungshieb",
						"chacun à son goût",
						"Feuerurteil",
						"Hof",
						"Sexprotz",
						"Haubarkeitsalter",
						"Kahlschlag",
						"Filesharing",
						"nett",
						"Nachhaltigkeit",
						"gefallen",
						"Gefallen",
						"hierdurch",
						"Anstrich",
						"Geschmack"
					]
				}
			}
		},
		"sagte": {
			"word": "sagte",
			"data": {
				"_id": "591899f5ce905c0816aaa2b2",
				"word": "sagte",
				"data": {
					"similarWords": [
						"hinsagen",
						"unvorsichtigerweise",
						"ungesagt",
						"Bitteschön",
						"Miesmacher",
						"wintern",
						"verknorpeln",
						"Obrigkeitsglaube",
						"bullern",
						"dementgegen",
						"jein",
						"Scherzkeks",
						"nachsprechen",
						"rischeln",
						"nachdunkeln",
						"menscheln",
						"nachschwatzen",
						"Laienverstand",
						"Dankeschön",
						"ausufern"
					]
				}
			}
		},
		"überzeugt": {
			"word": "überzeugt",
			"data": {
				"_id": "591899f4ce905c0816aaa2a6",
				"word": "überzeugt",
				"data": {
					"description": "Adjektiv - fest an etwas Bestimmtes glaubend",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "fest an etwas Bestimmtes glaubend"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/ueberzeugt",
					"similarWords": [
						"Überzeugtheit",
						"versnobt",
						"linientreu",
						"snobistisch",
						"besserwisserisch",
						"vermessen",
						"selbstbewusst",
						"selbstsicher",
						"fortschrittsgläubig",
						"Kernthese",
						"selbstgefällig",
						"unkritisch",
						"selbstherrlich",
						"eingefleischt",
						"selbstgerecht",
						"Fanatiker",
						"belehrerisch",
						"überzeugen",
						"felsenfest"
					]
				}
			}
		},
		"verändert": {
			"word": "verändert",
			"data": {
				"_id": "591899f4ce905c0816aaa2a5",
				"word": "verändert",
				"data": {
					"similarWords": [
						"sukzessive",
						"genmanipuliert",
						"genverändert",
						"entstellt",
						"eustatisch",
						"gentechnikfrei",
						"polymetamorph",
						"sarkomatös",
						"verzerrt",
						"Muton",
						"unkenntlich",
						"Wackelbild",
						"Indexregister",
						"Irisblende",
						"Kamerafahrt",
						"Kollagenose",
						"Freeware",
						"Public-Domain-Software",
						"Sondereffekt",
						"Nadeldüse"
					]
				}
			}
		},
		"Geheimnis": {
			"word": "Geheimnis",
			"data": {
				"_id": "591899f6ce905c0816aaa2bd",
				"word": "Geheimnis",
				"data": {
					"description": "Substantiv, Neutrum - 1a. etwas, was geheim bleiben soll; 1b. etwas, was nur Eingeweihten bekannt …2. etwas Unerforschtes oder nicht Erforschbares",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1a. etwas, was geheim bleiben soll; 1b. etwas, was nur Eingeweihten bekannt …2. etwas Unerforschtes oder nicht Erforschbares"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Geheimnis",
					"similarWords": [
						"geheimnisvoll",
						"Geheimnisverrat",
						"Geheimnistuer",
						"Geheimnisschutz",
						"Arkanum",
						"Produktionsgeheimnis",
						"geheimnisumwittert",
						"geheimnisumwoben",
						"geheimnistuerisch",
						"Geheimnistuerei",
						"Geheimnisträgerin",
						"Geheimnisträger",
						"Geheimnistuerin",
						"Geheimniskrämerei",
						"Geheimniskrämerin",
						"Geheimniskrämer",
						"Mystery",
						"misterioso",
						"misteriosamente"
					]
				}
			}
		},
		"liegt": {
			"word": "liegt",
			"data": {
				"_id": "591899f5ce905c0816aaa2aa",
				"word": "liegt",
				"data": {
					"similarWords": [
						"Achslager",
						"Zielkurve",
						"Komapatient",
						"Auslandsbank",
						"Hafenbucht",
						"Zwischenfarbe",
						"Oasenstadt",
						"strafrechtlich",
						"Vatikanstadt",
						"Überschallbereich",
						"Quellgebiet",
						"Seitenschiff",
						"Charakterdrama",
						"Giebelzimmer",
						"Liegezeit",
						"Psychoneurose",
						"Küstenstadt",
						"Dumpingpreis",
						"in vino veritas",
						"Pflichtenkreis"
					]
				}
			}
		},
		"Kunstkritiker": {
			"word": "Kunstkritiker",
			"data": {
				"_id": "591899f4ce905c0816aaa2a7",
				"word": "Kunstkritiker",
				"data": {
					"description": "Substantiv, maskulin - auf dem Gebiet der Kunstkritik tätiger Publizist",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "auf dem Gebiet der Kunstkritik tätiger Publizist"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Kunstkritiker",
					"similarWords": [
						"Kunstkritik",
						"Kunstkritikerin"
					]
				}
			}
		},
		"aufgefallen": {
			"word": "aufgefallen",
			"data": {
				"_id": "591899f6ce905c0816aaa2be",
				"word": "aufgefallen",
				"data": {
					"similarWords": [
						"auffallen",
						"unliebsam",
						"Berühmtheit",
						"zunächst",
						"auffällig",
						"unangenehm",
						"beide"
					]
				}
			}
		},
		"Juni": {
			"word": "Juni",
			"data": {
				"_id": "591899f5ce905c0816aaa2b8",
				"word": "Juni",
				"data": {
					"description": "Substantiv, maskulin - sechster Monat des Jahres",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "sechster Monat des Jahres"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Juni",
					"similarWords": [
						"Junius",
						"Junior",
						"A-Junior",
						"junior",
						"Juniorat",
						"Junioren-WM",
						"Juniorin",
						"A-Juniorin",
						"Juniorchef",
						"Juniperus",
						"Junikäfer",
						"Juniausgabe",
						"Juniorwahl",
						"Juniorenrennen",
						"Juniorpartner",
						"Juniorchefin",
						"A-Junioren-Bundesliga",
						"Juno",
						"Brachmonat"
					]
				}
			}
		},
		"vollendet": {
			"word": "vollendet",
			"data": {
				"_id": "591899f5ce905c0816aaa2b6",
				"word": "vollendet",
				"data": {
					"description": "Adjektiv - vollkommen, tadellos, unübertrefflich",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "vollkommen, tadellos, unübertrefflich"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/vollendet",
					"similarWords": [
						"früh vollendet, frühvollendet",
						"spät vollendet, spätvollendet",
						"Vollendetheit",
						"Vollender",
						"Perfekt",
						"Vorvergangenheit",
						"Intentionsbewegung",
						"Altersfreibetrag",
						"Präsensperfekt",
						"Fait accompli",
						"formvollendet",
						"Virtuosität",
						"Plusquamperfekt",
						"Futurum exaktum",
						"Meeresbewohnerin",
						"vollenden",
						"meisterhaft",
						"geschliffen",
						"Heranwachsender"
					]
				}
			}
		},
		"Mittsommernacht": {
			"word": "Mittsommernacht",
			"data": {
				"_id": "591899f5ce905c0816aaa2bb",
				"word": "Mittsommernacht",
				"data": {
					"description": "Substantiv, feminin - 1. Nacht im Mittsommer; 2. Nacht der Sommersonnenwende",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. Nacht im Mittsommer; 2. Nacht der Sommersonnenwende"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Mittsommernacht",
					"similarWords": [
						"Mittsommernachtstraum"
					]
				}
			}
		},
		"kunterbunt": {
			"word": "kunterbunt",
			"data": {
				"_id": "591899f6ce905c0816aaa2c5",
				"word": "kunterbunt",
				"data": {
					"description": "Adjektiv - a. bunt, vielfarbig; b. abwechslungsreich, bunt gemischt; c. ungeordnet",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "a. bunt, vielfarbig; b. abwechslungsreich, bunt gemischt; c. ungeordnet"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/kunterbunt",
					"similarWords": [
						"Kunterbunt",
						"zusammengewürfelt",
						"knallbunt",
						"koloriert",
						"vielförmig",
						"vielgestaltig",
						"mehrfarbig",
						"vielfarbig",
						"verschiedengestaltig",
						"Manga",
						"färbig",
						"Allerlei",
						"unüberschaubar",
						"farbenfreudig",
						"polymorph",
						"poppig",
						"farbenfroh",
						"farbenprächtig",
						"Vielerlei"
					]
				}
			}
		},
		"zugeht": {
			"word": "zugeht",
			"data": {
				"_id": "591899f5ce905c0816aaa2ba",
				"word": "zugeht",
				"data": {
					"similarWords": [
						"überwachen"
					]
				}
			}
		},
		"Verwechslungen": {
			"word": "Verwechslungen",
			"data": {
				"_id": "591899f5ce905c0816aaa2bc",
				"word": "Verwechslungen",
				"data": {
					"similarWords": [
						"Situationskomödie",
						"Situationsstück",
						"Verwechslung"
					]
				}
			}
		},
		"Verkleidungen": {
			"word": "Verkleidungen",
			"data": {
				"_id": "591899f6ce905c0816aaa2c0",
				"word": "Verkleidungen",
				"data": {
					"similarWords": [
						"Karnevalsflitter",
						"Verkleidung"
					]
				}
			}
		},
		"Vertauschungen": {
			"word": "Vertauschungen",
			"data": {
				"_id": "591899f6ce905c0816aaa2c1",
				"word": "Vertauschungen",
				"data": {
					"similarWords": [
						"Vertauschung"
					]
				}
			}
		},
		"sozusagen": {
			"word": "sozusagen",
			"data": {
				"_id": "591899f6ce905c0816aaa2c6",
				"word": "sozusagen",
				"data": {
					"description": "Adverb - 1. wie man es ausdrücken könnte; …2. quasi, ungefähr",
					"wordProperties": {
						"type": "Adverb",
						"definition": "1. wie man es ausdrücken könnte; …2. quasi, ungefähr"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/sozusagen",
					"similarWords": [
						"quasioffiziell",
						"gleichsam",
						"gewissermaßen",
						"quasi",
						"Inkunabel",
						"Honigtopfameise",
						"Sperrwert",
						"Arm"
					]
				}
			}
		},
		"Tagesordnung": {
			"word": "Tagesordnung",
			"data": {
				"_id": "591899f6ce905c0816aaa2c7",
				"word": "Tagesordnung",
				"data": {
					"description": "Substantiv, feminin - Programm einer Sitzung",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "Programm einer Sitzung"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Tagesordnung",
					"similarWords": [
						"Tagliste",
						"traktandieren",
						"Ordnungsantrag",
						"Geschäftsliste",
						"Traktandenliste",
						"Ablaufplan",
						"Tagesordnungspunkt",
						"Regularien",
						"Programm",
						"Agenda",
						"gangbar",
						"angesagt",
						"gängig",
						"normal",
						"übergehen",
						"aufnehmen",
						"setzen",
						"absetzen"
					]
				}
			}
		},
		"gehören": {
			"word": "gehören",
			"data": {
				"_id": "591899f6ce905c0816aaa2cc",
				"word": "gehören",
				"data": {
					"description": "schwaches Verb - 1. jemandes Besitz, jemandes Eigentum sein; 2. Glied oder Teil eines Ganzen …3. (an einer bestimmten Stelle passend) …",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1. jemandes Besitz, jemandes Eigentum sein; 2. Glied oder Teil eines Ganzen …3. (an einer bestimmten Stelle passend) …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/gehoeren",
					"similarWords": [
						"hierher gehörend, hierhergehörend",
						"zugehören",
						"gebühren",
						"Anstand",
						"Pertinenz",
						"innewohnen",
						"zusammengehören",
						"Sub",
						"Handelskonzern",
						"ASEAN-Staaten",
						"hierhergehören",
						"gehörig",
						"irregulär",
						"impertinent",
						"Themenbereich",
						"Partenreederei",
						"ziemen",
						"zustehen",
						"geziemen"
					]
				}
			}
		},
		"ästhetischste": {
			"word": "ästhetischste",
			"data": {
				"_id": "591899f6ce905c0816aaa2c2",
				"word": "ästhetischste",
				"data": {
					"similarWords": []
				}
			}
		},
		"Nacht": {
			"word": "Nacht",
			"data": {
				"_id": "591899f6ce905c0816aaa2cd",
				"word": "Nacht",
				"data": {
					"description": "Substantiv, feminin - Zeitraum etwa zwischen Sonnenuntergang und Sonnenaufgang, zwischen Einbruch der Dunkelheit und Beginn der Morgendämmerung",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "Zeitraum etwa zwischen Sonnenuntergang und Sonnenaufgang, zwischen Einbruch der Dunkelheit und Beginn der Morgendämmerung"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Nacht",
					"similarWords": [
						"nachts",
						"Nacht-und-Nebel-Aktion",
						"Nachtschwärmerin",
						"Nachtwächter",
						"Nachtquartier",
						"Nachtschatten",
						"nachtwandlerisch",
						"Nachtsichtigkeit",
						"Nachtsichtgerät",
						"Nachtschränkchen",
						"Nachtvorstellung",
						"nachtaktiv",
						"Nachtschlaf",
						"Nachtlokal",
						"Nachtgebet",
						"Nachtstück",
						"Nachtmusik",
						"Nachtlager",
						"Nachtessen"
					]
				}
			}
		},
		"Jahres": {
			"word": "Jahres",
			"data": {
				"_id": "591899f7ce905c0816aaa2e1",
				"word": "Jahres",
				"data": {
					"similarWords": [
						"dieses Jahres",
						"Gesamtjahr",
						"o. J.",
						"Jahresende",
						"Jahresbott",
						"Jahrestag",
						"Jahreshoch",
						"Jahrestief",
						"Jahressoll",
						"Jahresfrist",
						"Jahreszahl",
						"Jahreszeit",
						"Jahresrate",
						"Jahresplan",
						"Jahreslohn",
						"Jahreslauf",
						"Jahresetat",
						"Jahresziel",
						"Jahresplus",
						"Jahresgage"
					]
				}
			}
		},
		"Dinge": {
			"word": "Dinge",
			"data": {
				"_id": "591899f8ce905c0816aaa2ee",
				"word": "Dinge",
				"data": {
					"similarWords": [
						"unverrichteter Dinge",
						"dingen",
						"Ding",
						"Dingelchen, auch Dingerchen",
						"-dings",
						"Dinggedicht",
						"Boarding",
						"Dingwelt",
						"verdinglichen",
						"Freeriding, Free Riding",
						"Dings",
						"unverrichtet",
						"Berlin-Wedding",
						"Ruhpolding",
						"Snowboarding",
						"Sattelzeug",
						"Waterboarding",
						"Bookbuilding",
						"Doromanie",
						"Dinglichkeit"
					]
				}
			}
		},
		"zeigen": {
			"word": "zeigen",
			"data": {
				"_id": "591899f7ce905c0816aaa2e0",
				"word": "zeigen",
				"data": {
					"description": "schwaches Verb - 1. mit dem Finger, Arm eine …2a. jemandem etwas mit Hinweisen, Erläuterungen, …2b. jemanden etwas ansehen, betrachten lassen; …",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1. mit dem Finger, Arm eine …2a. jemandem etwas mit Hinweisen, Erläuterungen, …2b. jemanden etwas ansehen, betrachten lassen; …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/zeigen",
					"similarWords": [
						"bereit zeigen, bereitzeigen",
						"Zeigfinger",
						"Zeigefinger",
						"Gesinnungstreue",
						"opaleszieren",
						"exhibieren",
						"stabreimen",
						"Angriffsspiel",
						"Entartungserscheinung",
						"alliterieren",
						"schaustellen",
						"bekunden",
						"Zähneblecken",
						"Tellskapelle",
						"Sportsgeist",
						"Christophanie",
						"Gesprächsbereitschaft",
						"Tonbank",
						"Ristgriff"
					]
				}
			}
		},
		"Seite": {
			"word": "Seite",
			"data": {
				"_id": "591899f6ce905c0816aaa2c8",
				"word": "Seite",
				"data": {
					"description": "Substantiv, feminin - 1a. eine von mehreren ebenen Flächen, …1b. linke oder rechte, vordere oder …1c. rechter oder linker flächiger Teil …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. eine von mehreren ebenen Flächen, …1b. linke oder rechte, vordere oder …1c. rechter oder linker flächiger Teil …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Seite",
					"similarWords": [
						"A-Seite",
						"B-Seite",
						"HTML-Seite",
						"Facebook-Seite, Facebookseite",
						"seitens",
						"diesseits",
						"längsseit",
						"seit Kurzem, seit kurzem",
						"keinerseits",
						"breitseits",
						"dortseits",
						"seitwärtstreten",
						"seitlings",
						"zuseiten, zu Seiten",
						"seitenlang",
						"Seitenteil",
						"Seitenfach",
						"Seitental",
						"Seitenaus"
					]
				}
			}
		},
		"Fräulein": {
			"word": "Fräulein",
			"data": {
				"_id": "591899f7ce905c0816aaa2e2",
				"word": "Fräulein",
				"data": {
					"description": "Substantiv, Neutrum - 1. kinderlose, ledige [junge] Frau; 2a. titelähnliche, auch als Anrede verwendete …2b. als Zusatz bei Verwandtschaftsbezeichnungen",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. kinderlose, ledige [junge] Frau; 2a. titelähnliche, auch als Anrede verwendete …2b. als Zusatz bei Verwandtschaftsbezeichnungen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Fraeulein",
					"similarWords": [
						"Englische Fräulein",
						"Fräuleinwunder",
						"Fräuleinstift",
						"Frl.",
						"Serviererin",
						"Demoiselle",
						"Mademoiselle",
						"Kellnerin",
						"Aufwärterin",
						"Mamsell",
						"Bedienung",
						"englisch",
						"Tochter",
						"Amt"
					]
				}
			}
		},
		"Spinnweb": {
			"word": "Spinnweb",
			"data": {
				"_id": "591899f9ce905c0816aaa302",
				"word": "Spinnweb",
				"data": {
					"description": "Substantiv, Neutrum - Spinnwebe",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "Spinnwebe"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Spinnweb",
					"similarWords": [
						"Spinnwebe",
						"Spinnengewebe",
						"Spinnennetz",
						"World Wide Web",
						"Netz"
					]
				}
			}
		},
		"Frau": {
			"word": "Frau",
			"data": {
				"_id": "591899f9ce905c0816aaa2fc",
				"word": "Frau",
				"data": {
					"description": "Substantiv, feminin - 1. erwachsene Person weiblichen Geschlechts; 2. hebt weniger die gesetzmäßige Bindung …3. Hausherrin, Dame",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. erwachsene Person weiblichen Geschlechts; 2. hebt weniger die gesetzmäßige Bindung …3. Hausherrin, Dame"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Frau",
					"similarWords": [
						"frau",
						"V-Frau",
						"PR-Frau",
						"Frau Holle",
						"Fraulichkeit",
						"fraulich",
						"frauenfeindlich",
						"Frauchen",
						"Frauenkrankheit",
						"frauenärztlich",
						"frauenlos",
						"Fraueneis",
						"Frauschaft",
						"Frauentag",
						"Frauentyp",
						"Frauenbad",
						"Frauenpolitik",
						"Frauenfußball",
						"Frauennetzwerk"
					]
				}
			}
		},
		"Bohnenblüte": {
			"word": "Bohnenblüte",
			"data": {
				"_id": "591899f7ce905c0816aaa2de",
				"word": "Bohnenblüte",
				"data": {
					"description": "Substantiv, feminin - Blüte der Bohne",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "Blüte der Bohne"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Bohnenbluete",
					"similarWords": []
				}
			}
		},
		"grü": {
			"word": "grü",
			"data": {
				"_id": "591899f6ce905c0816aaa2c9",
				"word": "grü",
				"data": {
					"similarWords": [
						"grün",
						"Grün",
						"Grüsch",
						"grüßen",
						"grübeln",
						"Grübelei",
						"Begrüßungsrede",
						"Begrüßungsabend",
						"Begrüßungstrunk",
						"Grünenvorsitzender",
						"Grünenfraktion",
						"Begrüßungskuss",
						"Begrüßungsgeld",
						"Grünenvorsitzende",
						"vergrübelt",
						"Grünewald",
						"Eingrünung",
						"Begrünung",
						"begrüßen",
						"nachgrübeln"
					]
				}
			}
		},
		"treffen": {
			"word": "treffen",
			"data": {
				"_id": "591899face905c0816aaa317",
				"word": "treffen",
				"data": {
					"description": "starkes Verb - 1a. (von einem Geschoss, einem Schuss, …1b. (mit einem Schlag, Stoß, Wurf, …2a. jemandem Bekannten zufällig begegnen",
					"wordProperties": {
						"type": "starkes",
						"definition": "1a. (von einem Geschoss, einem Schuss, …1b. (mit einem Schlag, Stoß, Wurf, …2a. jemandem Bekannten zufällig begegnen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/treffen",
					"similarWords": [
						"Treffen",
						"wieder treffen, wiedertreffen",
						"treffend",
						"getroffen",
						"Klever",
						"Entscheidungsrecht",
						"Veteranentreffen",
						"Frauentreffen",
						"Fehlentscheidung",
						"Seniorentreff",
						"vorbeischlagen",
						"präkavieren",
						"Folgetreffen",
						"Pioniertreffen",
						"Zirkelabend",
						"Agententreff",
						"triff",
						"tröffe",
						"träfe"
					]
				}
			}
		},
		"Reggaekonzert": {
			"word": "Reggaekonzert",
			"data": {
				"_id": "591899f6ce905c0816aaa2c3",
				"word": "Reggaekonzert",
				"data": {
					"similarWords": []
				}
			}
		},
		"anhören": {
			"word": "anhören",
			"data": {
				"_id": "591899f6ce905c0816aaa2ca",
				"word": "anhören",
				"data": {
					"description": "schwaches Verb - 1a. bereitwillig, aufmerksam zuhören, was jemand …1b. [etwas] aufmerksam, bewusst bis zu …2. etwas unbeabsichtigt, unfreiwillig hören, mithören",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1a. bereitwillig, aufmerksam zuhören, was jemand …1b. [etwas] aufmerksam, bewusst bis zu …2. etwas unbeabsichtigt, unfreiwillig hören, mithören"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/anhoeren",
					"similarWords": [
						"zuhorchen",
						"raushören",
						"akroamatisch",
						"hörenswert",
						"heraushören",
						"lauschen",
						"horchen",
						"reinhören",
						"erlauschen",
						"Anhörung",
						"lauten",
						"zuhören",
						"erhören",
						"mitschreiben",
						"überhören",
						"satthören",
						"durchhören",
						"Vorbringung",
						"mithören"
					]
				}
			}
		},
		"Augenblick": {
			"word": "Augenblick",
			"data": {
				"_id": "591899face905c0816aaa318",
				"word": "Augenblick",
				"data": {
					"description": "Substantiv, maskulin - Zeitraum von sehr kurzer Dauer, Moment",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "Zeitraum von sehr kurzer Dauer, Moment"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Augenblick",
					"similarWords": [
						"augenblicks",
						"augenblicklich",
						"Momentum",
						"Momenterl",
						"momentweise",
						"dannzumal",
						"Glücksmoment",
						"Augenblicksidee",
						"Augenblickssache",
						"Halfvolleyball",
						"Halfvolley",
						"aufwimmern",
						"Augenblicksbildung",
						"Moment",
						"ad hoc",
						"Weilchen",
						"aufweinen",
						"unbewacht",
						"zeither"
					]
				}
			}
		},
		"überlegte": {
			"word": "überlegte",
			"data": {
				"_id": "591899f8ce905c0816aaa2f0",
				"word": "überlegte",
				"data": {
					"similarWords": [
						"abgerundet",
						"abgewogen",
						"ausgereift",
						"wohlerwogen, wohl erwogen",
						"überlegt",
						"geplant",
						"intentional",
						"wohlbedacht, wohl bedacht",
						"zielorientiert",
						"programmmäßig",
						"vernunftbegabt",
						"zielbewusst",
						"durchdacht",
						"gezielt",
						"tiefschürfend",
						"salomonisch",
						"vorsorglich",
						"ausgewogen",
						"gesetzt",
						"besonnen"
					]
				}
			}
		},
		"getroffen": {
			"word": "getroffen",
			"data": {
				"_id": "591899face905c0816aaa311",
				"word": "getroffen",
				"data": {
					"description": "siehe treffen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/getroffen_treffen",
					"similarWords": [
						"Mehrheitsentscheidung",
						"heimgesucht",
						"Top",
						"Neuabschluss",
						"Amor",
						"Gewissensentscheidung",
						"Eigenvorsorge",
						"Parlamentsvorbehalt",
						"Billardkegel",
						"Lebensnerv",
						"Entscheidungsstunde",
						"Herzensentscheidung",
						"Stoßball",
						"Gotcha",
						"Schussnähe",
						"Atlantikcharta",
						"Vorsichtsmaßregel",
						"Gewehrkugel"
					]
				}
			}
		},
		"Bar": {
			"word": "Bar",
			"data": {
				"_id": "591899f7ce905c0816aaa2df",
				"word": "Bar",
				"data": {
					"description": "Substantiv, Neutrum - Zeichen: bar [in der Meteorologie nur: b]; alte Maßeinheit des [Luft]drucks",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "Zeichen: bar [in der Meteorologie nur: b]; alte Maßeinheit des [Luft]drucks"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Bar_Maszeinheit_Druck",
					"similarWords": [
						"bar",
						"-bar",
						"Bar-Mizwa",
						"American Bar",
						"Oben-ohne-Bar",
						"Bart",
						"Barn",
						"Bark",
						"barg",
						"barisch",
						"barsch",
						"Barsch",
						"Barge",
						"barst"
					]
				}
			}
		},
		"spielt": {
			"word": "spielt",
			"data": {
				"_id": "591899f6ce905c0816aaa2cb",
				"word": "spielt",
				"data": {
					"similarWords": [
						"Verspieltheit",
						"Spieltag",
						"überspielt",
						"gespielt",
						"verspielt",
						"Spieltrieb",
						"Spieltisch",
						"ausgespielt",
						"unbespielt",
						"Spielteufel",
						"eingespielt",
						"abgespielt",
						"Spieltheorie",
						"Spieltherapie",
						"olivgrau",
						"olivbraun",
						"gelbbraun",
						"braunrot",
						"Bläser",
						"Spielalter"
					]
				}
			}
		},
		"Band": {
			"word": "Band",
			"data": {
				"_id": "591899f8ce905c0816aaa2f3",
				"word": "Band",
				"data": {
					"description": "Substantiv, Neutrum - 1. längerer, schmaler [Gewebe]streifen zum Schmuck, …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. längerer, schmaler [Gewebe]streifen zum Schmuck, …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Band_Gewebestreifen_Fessel",
					"similarWords": [
						"band",
						"Small Band, Smallband",
						"Big Band, Bigband",
						"Marching Band, Marchingband",
						"Bandl",
						"Dual-Band-Handy",
						"All-Star-Band",
						"Bandmitglied",
						"Bandwurmsatz",
						"Bandwebstuhl",
						"Bandmaß",
						"Bandwurm",
						"Bandholz",
						"Bandeisen",
						"Bandnudel",
						"Bandsäge",
						"Bandweber"
					]
				}
			}
		},
		"Mischung": {
			"word": "Mischung",
			"data": {
				"_id": "591899face905c0816aaa314",
				"word": "Mischung",
				"data": {
					"description": "Substantiv, feminin - 1. das Mischen; 2a. Gemischtes, Gemisch; 2b. etwas, was [noch deutlich erkennbare] …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. das Mischen; 2a. Gemischtes, Gemisch; 2b. etwas, was [noch deutlich erkennbare] …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Mischung",
					"similarWords": [
						"Mix",
						"Mixtion",
						"Zwischending",
						"Rassenmischung",
						"Denglisch",
						"Karboid",
						"Blumenerde",
						"Alligation",
						"Zumischung",
						"Mischungsverhältnis",
						"Blend",
						"Studentenfutter",
						"Frühstücksfleisch",
						"Stannum",
						"Kunterbunt",
						"Missingsch",
						"Amphimixis",
						"Diffusat",
						"Mixtur"
					]
				}
			}
		},
		"Hip": {
			"word": "Hip",
			"data": {
				"_id": "591899f8ce905c0816aaa2ef",
				"word": "Hip",
				"data": {
					"similarWords": [
						"hip",
						"Hippiemädchen",
						"Hip-Hop, Hiphop",
						"hippeln",
						"hippelig",
						"Hippolyt",
						"Hippikon",
						"Hippurit",
						"hippokratisch",
						"Hippopotamus",
						"Hipponakteus",
						"Hipparion",
						"Hippologe",
						"Hippogryph",
						"Hippielook",
						"Hip-Hopperin, Hiphopperin",
						"Hip-Hopper, Hiphopper",
						"hippotherapeutisch",
						"hippologisch",
						"Hippursäure"
					]
				}
			}
		},
		"Hop": {
			"word": "Hop",
			"data": {
				"_id": "591899f8ce905c0816aaa2ec",
				"word": "Hop",
				"data": {
					"description": "Substantiv, Neutrum - Dosis Morphium oder Heroin",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "Dosis Morphium oder Heroin"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Hop_Ration_Menge",
					"similarWords": [
						"hops",
						"hopp",
						"Hops",
						"Ex-und-hopp-",
						"hopsala",
						"hopsasa",
						"hoppeln",
						"Hopfenkaltschale",
						"Hopserei",
						"Hopfenmehltau",
						"Gehoppele",
						"Hopfenklee",
						"Hopfenfeld",
						"Hip-Hop, Hiphop",
						"Hoppelpoppel",
						"Hopfenstange",
						"Hopfengarten"
					]
				}
			}
		},
		"Reggae": {
			"word": "Reggae",
			"data": {
				"_id": "591899f6ce905c0816aaa2c4",
				"word": "Reggae",
				"data": {
					"description": "Substantiv, maskulin - aus Jamaika stammende Spielart der Popmusik, deren Rhythmus durch die Hervorhebung unbetonter Taktteile gekennzeichnet ist",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "aus Jamaika stammende Spielart der Popmusik, deren Rhythmus durch die Hervorhebung unbetonter Taktteile gekennzeichnet ist"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Reggae",
					"similarWords": [
						"Ska",
						"Dub",
						"Stilmix"
					]
				}
			}
		},
		"paar": {
			"word": "paar",
			"data": {
				"_id": "591899f9ce905c0816aaa303",
				"word": "paar",
				"data": {
					"description": "Pronomen - 1. einige; 2. wenige, nicht viele",
					"wordProperties": {
						"type": "Pronomen",
						"definition": "1. einige; 2. wenige, nicht viele"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/paar_einige_wenige",
					"similarWords": [
						"Paar",
						"Paarkreuz",
						"Paarreim",
						"Paarlauf",
						"Paartanz",
						"Paarkreuzsystem",
						"Paarvernichtung",
						"paarweise",
						"Paarhufer",
						"Paarzeher",
						"paarhufig",
						"Paarläufer",
						"Paarbildung",
						"Paarbeziehung",
						"Paarläuferin",
						"Paarerzeugung",
						"paarlaufen",
						"Paartherapie"
					]
				}
			}
		},
		"Jungs": {
			"word": "Jungs",
			"data": {
				"_id": "591899f8ce905c0816aaa2f1",
				"word": "Jungs",
				"data": {
					"similarWords": [
						"jungsch",
						"Jungsein",
						"Jungstar",
						"Jungschar",
						"Jungstier",
						"Jungspund",
						"Jung",
						"Jungsenior",
						"jung gefreit, junggefreit",
						"Jung-Stilling",
						"Jungtier",
						"Kammerjungfer",
						"blutjung",
						"Jungchen",
						"Jungsteinzeit",
						"Jungsozialist",
						"Jungseniorin",
						"jungvermählt",
						"Jungholz",
						"Ziegenlamm"
					]
				}
			}
		},
		"Jamaika": {
			"word": "Jamaika",
			"data": {
				"_id": "591899f7ce905c0816aaa2e3",
				"word": "Jamaika",
				"data": {
					"description": "Substantiv, Neutrum - Inselstaat im Karibischen Meer",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "Inselstaat im Karibischen Meer"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Jamaika",
					"similarWords": [
						"Kingston",
						"jamaikanisch",
						"Jamaikarum, Jamaika-Rum",
						"Jamaikaner",
						"Ska",
						"Dub",
						"Jamaikanerin",
						"Jamaikapfeffer, Jamaika-Pfeffer",
						"Reggae",
						"Jamaikakoalition, Jamaika-Koalition",
						"Kreolisch",
						"Kreolische",
						"Rastafari"
					]
				}
			}
		},
		"holen": {
			"word": "holen",
			"data": {
				"_id": "591899f9ce905c0816aaa306",
				"word": "holen",
				"data": {
					"description": "schwaches Verb - 1a. von einem Ort, einer Stelle, …1b. jemanden [schnell] herbeirufen, an einen …1c. von einem bestimmten Ort abholen …",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1a. von einem Ort, einer Stelle, …1b. jemanden [schnell] herbeirufen, an einen …1c. von einem bestimmten Ort abholen …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/holen",
					"similarWords": [
						"ausdocken",
						"herbeiholen",
						"länden",
						"wegholen",
						"Essenholer",
						"herbringen",
						"herrufen",
						"hierherholen",
						"heranholen",
						"Atem",
						"einatmen",
						"sonnabends",
						"Beratungsstelle",
						"beischaffen",
						"herbeordern",
						"herüberholen",
						"heranzoomen",
						"containern",
						"herunterholen"
					]
				}
			}
		},
		"sanftem": {
			"word": "sanftem",
			"data": {
				"_id": "591899f8ce905c0816aaa2e4",
				"word": "sanftem",
				"data": {
					"similarWords": [
						"Softie",
						"Dolzflöte",
						"Soul",
						"sanft"
					]
				}
			}
		},
		"Druck": {
			"word": "Druck",
			"data": {
				"_id": "591899fbce905c0816aaa326",
				"word": "Druck",
				"data": {
					"description": "Substantiv, maskulin - 1. auf eine Fläche wirkende Kraft; 2a. Betätigung durch Druck, das Drücken; 2b. Gefühl des Drucks an einer …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. auf eine Fläche wirkende Kraft; 2a. Betätigung durch Druck, das Drücken; 2b. Gefühl des Drucks an einer …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Druck_Kraft_Auszeneinwirkung",
					"similarWords": [
						"Druck-Erzeugnis, Druckerzeugnis",
						"Nass-in-Nass-Druck",
						"Druckkochtopf",
						"Drucklähmung",
						"druckempfindlich",
						"druckfrisch",
						"Drucksorte",
						"Druckwesen",
						"Druckserei",
						"Druckfarbe",
						"Druckfahne",
						"Druckwelle",
						"Drucksache",
						"Druckseite",
						"Drucktaste",
						"Druckbogen",
						"Druckpumpe",
						"Druckprobe"
					]
				}
			}
		},
		"Urträume": {
			"word": "Urträume",
			"data": {
				"_id": "591899f6ce905c0816aaa2cf",
				"word": "Urträume",
				"data": {
					"similarWords": []
				}
			}
		},
		"Stammhirn": {
			"word": "Stammhirn",
			"data": {
				"_id": "591899f8ce905c0816aaa2ed",
				"word": "Stammhirn",
				"data": {
					"description": "Substantiv, Neutrum - Gehirnstamm",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "Gehirnstamm"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Stammhirn",
					"similarWords": []
				}
			}
		},
		"Woher": {
			"word": "Woher",
			"data": {
				"_id": "591899f9ce905c0816aaa307",
				"word": "Woher",
				"data": {
					"similarWords": [
						"woher",
						"woherum",
						"wannen",
						"wovon",
						"Damast",
						"Herrenbekanntschaft",
						"Eponym",
						"Sinneswandel",
						"hintun",
						"nee",
						"überkommen",
						"ach",
						"zurückschieben",
						"ausgeschlossen",
						"unterbringen",
						"wundern",
						"nein",
						"stehlen",
						"stammen",
						"kennen"
					]
				}
			}
		},
		"fragen": {
			"word": "fragen",
			"data": {
				"_id": "591899f8ce905c0816aaa2f5",
				"word": "fragen",
				"data": {
					"description": "schwaches Verb - 1a. sich mit einer Äußerung an …1b. Fragen stellen; 2a. sich erkundigen, Auskunft über jemanden, …",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1a. sich mit einer Äußerung an …1b. Fragen stellen; 2a. sich erkundigen, Auskunft über jemanden, …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/fragen",
					"similarWords": [
						"Fragenkreis",
						"Fragenkomplex",
						"Fragenkatalog",
						"weiterfragen",
						"fratscheln",
						"Gefrage",
						"Verfassungsgericht",
						"Rechtsschrift",
						"Steuerexperte",
						"Wirtschaftsberater",
						"Aidsberatung",
						"Wirtschaftsfragen",
						"frägeln",
						"Frage",
						"K-Frage",
						"gezielt",
						"Strategieberatung",
						"curricular",
						"Planungssicherheit"
					]
				}
			}
		},
		"komme": {
			"word": "komme",
			"data": {
				"_id": "591899f8ce905c0816aaa2f4",
				"word": "komme",
				"data": {
					"similarWords": [
						"kommend",
						"Kommen",
						"Kommerz",
						"Komment",
						"Kommers",
						"kommen",
						"Komm.-Rat",
						"Komm.-Rätin",
						"Kommende",
						"darauf kommen",
						"Nicht-zustande-Kommen, Nicht-zu-Stande-Kommen",
						"zurande kommen, zu Rande kommen",
						"zustande kommen, zu Stande kommen",
						"Bewillkommnung",
						"kommensal",
						"Kommentar",
						"Kommersbuch",
						"Kommensale",
						"Kommemoration",
						"kommen lassen, kommenlassen"
					]
				}
			}
		},
		"München": {
			"word": "München",
			"data": {
				"_id": "591899f8ce905c0816aaa2f2",
				"word": "München",
				"data": {
					"description": "Eigenname - Landeshauptstadt von Bayern",
					"wordProperties": {
						"type": "Eigenname",
						"definition": "Landeshauptstadt von Bayern"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Muenchen",
					"similarWords": [
						"Münchener",
						"Münchenerin",
						"Münchener, Münchner",
						"Nymphenburg",
						"außerhalb",
						"Isar-Athen",
						"Kommunalreferat",
						"Kreisverwaltungsreferat",
						"Isarstadt",
						"Jugendstil",
						"ausgangs",
						"Direktverbindung",
						"botanisch",
						"Oktoberfest",
						"wohnhaft",
						"Tabellenführer",
						"Fernbus",
						"Mitfahrgelegenheit",
						"Bundesfinanzhof"
					]
				}
			}
		},
		"Hamburg": {
			"word": "Hamburg",
			"data": {
				"_id": "591899f7ce905c0816aaa2d0",
				"word": "Hamburg",
				"data": {
					"description": "Substantiv, Neutrum - Stadt und deutsches Bundesland",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "Stadt und deutsches Bundesland"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Hamburg",
					"similarWords": [
						"Hamburger",
						"Burger",
						"Wandsbek",
						"Barmbek",
						"hamburgisch",
						"hamburgern",
						"Blankenese",
						"Altona",
						"Sankt Pauli",
						"Alstersee",
						"Sachsenwald",
						"Hamburgerin",
						"Elbstrand",
						"Sportbund",
						"Außenalster",
						"Cheeseburger",
						"irgendeinmal"
					]
				}
			}
		},
		"Berliner": {
			"word": "Berliner",
			"data": {
				"_id": "591899fdce905c0816aaa357",
				"word": "Berliner",
				"data": {
					"description": "Adjektiv - der Berliner Bär; die Berliner Mauer; Berliner Weiße mit Schuss",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "der Berliner Bär; die Berliner Mauer; Berliner Weiße mit Schuss"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Berliner_Adjektiv",
					"similarWords": [
						"Berliner Blau",
						"Groß-Berliner",
						"SFB",
						"Berlin-Treptow",
						"Berlin-Köpenick",
						"Berlin-Pankow",
						"Berlin-Neukölln",
						"Berlin-Friedrichshain",
						"Berlin-Steglitz",
						"Berlin-Wedding",
						"Berlin-Lichtenberg",
						"Berlin-Marzahn",
						"Berlin-Dahlem",
						"Berlin-Zehlendorf",
						"Berlin-Wilmersdorf",
						"Berlin",
						"berlinern"
					]
				}
			}
		},
		"Hamburger": {
			"word": "Hamburger",
			"data": {
				"_id": "591899fcce905c0816aaa337",
				"word": "Hamburger",
				"data": {
					"description": "Adjektiv - der Hamburger Hafen",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "der Hamburger Hafen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Hamburger_Adjektiv",
					"similarWords": [
						"Hamburg",
						"Burger",
						"Wandsbek",
						"Barmbek",
						"hamburgern",
						"Blankenese",
						"Altona",
						"Sankt Pauli",
						"Alstersee",
						"Sachsenwald",
						"Hamburgerin",
						"Elbstrand",
						"Sportbund",
						"Außenalster",
						"Cheeseburger",
						"irgendeinmal",
						"Sub"
					]
				}
			}
		},
		"lachte": {
			"word": "lachte",
			"data": {
				"_id": "591899fdce905c0816aaa358",
				"word": "lachte",
				"data": {
					"similarWords": [
						"Lachter",
						"Lache, fachsprachlich meist Lachte",
						"zulachen",
						"entgegenlachen",
						"wabbeln",
						"Fortuna",
						"herauslachen",
						"schallend",
						"Lacher",
						"herzig",
						"herzerfrischend",
						"verlernen",
						"aufgekratzt",
						"ungezwungen",
						"Meckerziege",
						"schibbeln",
						"lachen",
						"anlachen",
						"unbekümmert",
						"gekünstelt"
					]
				}
			}
		},
		"pa": {
			"word": "pa",
			"data": {
				"_id": "591899f7ce905c0816aaa2d1",
				"word": "pa",
				"data": {
					"similarWords": [
						"Pa",
						"PA",
						"kPa",
						"hPa",
						"iPad®, I-Pad",
						"Papaverin",
						"Papamobil",
						"Paparazza",
						"Papamonat",
						"Papagallo",
						"Paparazzo",
						"Papachen",
						"Papalist",
						"Papageiengrün",
						"Papageitaucher",
						"papageiengrün",
						"papalistisch",
						"Papageifisch",
						"Papa"
					]
				}
			}
		},
		"hierhergekommen": {
			"word": "hierhergekommen",
			"data": {
				"_id": "591899fcce905c0816aaa335",
				"word": "hierhergekommen",
				"data": {
					"similarWords": [
						"hierherkommen",
						"Trost"
					]
				}
			}
		},
		"verhüllten": {
			"word": "verhüllten",
			"data": {
				"_id": "591899f6ce905c0816aaa2ce",
				"word": "verhüllten",
				"data": {
					"similarWords": [
						"verhüllen"
					]
				}
			}
		},
		"anzusehen": {
			"word": "anzusehen",
			"data": {
				"_id": "591899f7ce905c0816aaa2d3",
				"word": "anzusehen",
				"data": {
					"similarWords": [
						"Fair Trade",
						"Zerrüttungsprinzip",
						"Konkurrenzdenken",
						"Dezisionismus",
						"Genitalverstümmelung",
						"reizvoll",
						"Fanmeile",
						"schmählich",
						"Gesichtspunkt",
						"anbeißen",
						"wobei",
						"Knopfloch",
						"anmuten",
						"umso",
						"ansehen",
						"verleugnen",
						"ausschauen",
						"Verfall",
						"aussehen",
						"unerträglich"
					]
				}
			}
		},
		"Zufall": {
			"word": "Zufall",
			"data": {
				"_id": "591899f7ce905c0816aaa2d2",
				"word": "Zufall",
				"data": {
					"description": "Substantiv, maskulin - 1. etwas, was man nicht vorausgesehen …2. plötzlich auftretender Anfall",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. etwas, was man nicht vorausgesehen …2. plötzlich auftretender Anfall"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Zufall",
					"similarWords": [
						"Zufallsergebnis",
						"Zufallsprodukt",
						"Zufallsstreuung",
						"Zufallsauswahl",
						"Zufallsbekanntschaft",
						"Zufallstreffer",
						"per accidens",
						"zufallen",
						"zufallsbedingt",
						"Zufallsversuch",
						"aleatorisch",
						"zufälligerweise",
						"Tyche",
						"Ungefähr",
						"Tychismus",
						"Glücksumstand",
						"Zufallsprinzip",
						"Zufallsgröße"
					]
				}
			}
		},
		"Uraufführung": {
			"word": "Uraufführung",
			"data": {
				"_id": "591899f7ce905c0816aaa2d4",
				"word": "Uraufführung",
				"data": {
					"description": "Substantiv, feminin - erste Aufführung eines neuen Werkes",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "erste Aufführung eines neuen Werkes"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Urauffuehrung",
					"similarWords": [
						"Erstaufführung",
						"Premiere",
						"voraufführen",
						"Billett",
						"gleichzeitig",
						"ur-, Ur-",
						"Probe",
						"aufnehmen"
					]
				}
			}
		},
		"Theater": {
			"word": "Theater",
			"data": {
				"_id": "591899f7ce905c0816aaa2d6",
				"word": "Theater",
				"data": {
					"description": "Substantiv, Neutrum - 1a. zur Aufführung von Bühnenwerken bestimmtes …1b. Theater als kulturelle Institution; 1c. Aufführung im Theater; Vorstellung",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1a. zur Aufführung von Bühnenwerken bestimmtes …1b. Theater als kulturelle Institution; 1c. Aufführung im Theater; Vorstellung"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Theater",
					"similarWords": [
						"Kammerspiele",
						"Theaterglas",
						"Theaterwelt",
						"Theaterfrau",
						"Theatermann",
						"Theaterring",
						"Theaterraum",
						"Theatersaal",
						"Theaterbau",
						"Theaterstar",
						"Staatstheater",
						"Schaubühne",
						"Musentempel",
						"Theaterregie",
						"Theaterstück",
						"Theaterprojekt",
						"Theaterfoyer",
						"Theatergruppe",
						"Theatercafé"
					]
				}
			}
		},
		"Komponist": {
			"word": "Komponist",
			"data": {
				"_id": "591899fbce905c0816aaa321",
				"word": "Komponist",
				"data": {
					"description": "Substantiv, maskulin - jemand, der komponiert",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "jemand, der komponiert"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Komponist",
					"similarWords": [
						"Bach",
						"Strauss",
						"Grieg",
						"Egk",
						"Gluck",
						"Liszt",
						"Yun",
						"Brahms",
						"Orff",
						"Tonschöpfer",
						"Beethoven",
						"Straus",
						"Telemann",
						"Vivaldi",
						"Wagner",
						"Verdi",
						"Wolf",
						"Haydn",
						"Dvořák"
					]
				}
			}
		},
		"aufgeführt": {
			"word": "aufgeführt",
			"data": {
				"_id": "591899f7ce905c0816aaa2d7",
				"word": "aufgeführt",
				"data": {
					"similarWords": [
						"vorbezeichnet",
						"listenmäßig",
						"auf-",
						"Theaterfestival",
						"Teilnehmerliste",
						"Kammermusiksaal",
						"Dopingliste",
						"Opernhaus",
						"Abkürzungsverzeichnis",
						"Kasperlespiel",
						"grandguignolesque",
						"Operettenhaus",
						"Kammertheater",
						"Commedia dell'Arte",
						"Nährwerttabelle",
						"Gefallenenliste",
						"ungesetzt",
						"Schauspielhaus",
						"Passivseite",
						"Entremés"
					]
				}
			}
		},
		"Requiem": {
			"word": "Requiem",
			"data": {
				"_id": "591899f7ce905c0816aaa2d5",
				"word": "Requiem",
				"data": {
					"description": "Substantiv, Neutrum - 1. Totenmesse; 2a. Messe, die das Requiem zum …2b. dem Oratorium oder der Kantate …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. Totenmesse; 2a. Messe, die das Requiem zum …2b. dem Oratorium oder der Kantate …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Requiem",
					"similarWords": [
						"Totenmesse",
						"Trauerfeier",
						"Traktus",
						"Begräbnis",
						"Beerdigung",
						"Ruhe"
					]
				}
			}
		},
		"hei": {
			"word": "hei",
			"data": {
				"_id": "591899fbce905c0816aaa333",
				"word": "hei",
				"data": {
					"description": "Interjektion - Ausruf ausgelassener Freude, Munterkeit, Lustigkeit",
					"wordProperties": {
						"type": "Interjektion",
						"definition": "Ausruf ausgelassener Freude, Munterkeit, Lustigkeit"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/hei",
					"similarWords": [
						"heia",
						"heim",
						"Heim",
						"heil",
						"Heil",
						"Hein",
						"Heia",
						"Heim-WM",
						"heim-",
						"-heit",
						"heida",
						"Heißluftheizung",
						"heiß",
						"Heinz",
						"Heindl",
						"gut Heil!",
						"brennheiß",
						"aufheißen"
					]
				}
			}
		},
		"Aspiration": {
			"word": "Aspiration",
			"data": {
				"_id": "591899face905c0816aaa30e",
				"word": "Aspiration",
				"data": {
					"description": "Substantiv, feminin - 1. Bestrebung, Hoffnung, ehrgeiziger Plan; 2. [Aussprache eines Verschlusslautes mit] Behauchung",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. Bestrebung, Hoffnung, ehrgeiziger Plan; 2. [Aussprache eines Verschlusslautes mit] Behauchung"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Aspiration",
					"similarWords": [
						"Aspirator",
						"Aspirant",
						"Aspirantin",
						"Reflektantin",
						"Werberin",
						"Prätendentin",
						"Postulantin",
						"Reflektant",
						"Ehrsucht",
						"Ruhmbegierde",
						"Ruhmsucht",
						"Werber",
						"Anwärterin",
						"Postulant",
						"Bewerberin",
						"Bestrebung",
						"Interessentin",
						"Prätendent",
						"Bewerber"
					]
				}
			}
		},
		"unterschiedlichen": {
			"word": "unterschiedlichen",
			"data": {
				"_id": "591899f7ce905c0816aaa2d8",
				"word": "unterschiedlichen",
				"data": {
					"similarWords": [
						"Temperaturausgleich",
						"Badeanlage",
						"Werthaltung",
						"Theorienstreit",
						"Energiemix",
						"Viktualienmarkt",
						"Stromanbieter",
						"Wertausgleich",
						"Materialmix",
						"Schimmelbogen",
						"unterschiedlich",
						"Sammeltaxi",
						"Gezeitenkraftwerk",
						"Nichtregierungsorganisation",
						"Mülltrennung",
						"Auslegerbrücke",
						"Graustufe",
						"Druckausgleich",
						"Dunkelraum",
						"Giftfestigkeit"
					]
				}
			}
		},
		"Instrumenten": {
			"word": "Instrumenten",
			"data": {
				"_id": "591899f7ce905c0816aaa2d9",
				"word": "Instrumenten",
				"data": {
					"similarWords": [
						"Blindfliegen",
						"Raumkapsel",
						"tutti",
						"Growl",
						"Instrumentenbau",
						"Resonanzsaite",
						"Kratzputz",
						"Messwagen",
						"Aliquotsaite",
						"Instrumentenkunde",
						"Instrumentenbrett",
						"Instrumententasche",
						"Instrumentenkasten",
						"Instrumentenbauerin",
						"Instrumentenbauer",
						"Instrumentenmacherin",
						"Instrumentenmacher",
						"Instrumententafel",
						"Instrumentenflug",
						"Instrumentenschrank"
					]
				}
			}
		},
		"experimentiert": {
			"word": "experimentiert",
			"data": {
				"_id": "591899f9ce905c0816aaa2fa",
				"word": "experimentiert",
				"data": {
					"similarWords": [
						"Versuchsstadium",
						"herumexperimentieren",
						"Experimentiertheater",
						"experimentieren"
					]
				}
			}
		},
		"Instrumente": {
			"word": "Instrumente",
			"data": {
				"_id": "591899f9ce905c0816aaa305",
				"word": "Instrumente",
				"data": {
					"similarWords": [
						"Instrumental",
						"instrumentell",
						"instrumentativ",
						"Oktachord",
						"Gambang",
						"Reversionspendel",
						"Locke",
						"Instrumentator",
						"Kampfbegriff",
						"Instrumentenbau",
						"Instrumentation",
						"Instrument",
						"Tonometer",
						"Folterwerkzeug",
						"Tutti",
						"Nyktometer",
						"Hämodynamometer",
						"Kraniometer",
						"Planisphäre"
					]
				}
			}
		},
		"weitesten": {
			"word": "weitesten",
			"data": {
				"_id": "591899fdce905c0816aaa353",
				"word": "weitesten",
				"data": {
					"similarWords": [
						"meistverbreitet",
						"Konkordienbuch",
						"Innenohr",
						"Linksgalopp",
						"Rechtsgalopp",
						"Luvboje",
						"Apogäum",
						"Wirtschaftspublizistik",
						"Leeboje",
						"Luftballonwettbewerb",
						"innerste, innerster, innerstes",
						"Wendekreis",
						"äußerste, äußerster, äußerstes",
						"weit",
						"Verstand"
					]
				}
			}
		},
		"Sinn": {
			"word": "Sinn",
			"data": {
				"_id": "591899f7ce905c0816aaa2da",
				"word": "Sinn",
				"data": {
					"description": "Substantiv, maskulin - 1. Fähigkeit der Wahrnehmung und Empfindung …2. Gefühl, Verständnis für etwas; innere …3a. jemandes Gedanken, Denken",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. Fähigkeit der Wahrnehmung und Empfindung …2. Gefühl, Verständnis für etwas; innere …3a. jemandes Gedanken, Denken"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Sinn",
					"similarWords": [
						"Sinn Fein",
						"sinnbildlich",
						"sinnverwandt",
						"sinnbildhaft",
						"sinnentleert",
						"Sinnlichkeit",
						"Sinnstiftung",
						"sinnreich",
						"sinnvoll",
						"sinnfrei",
						"sinnhaft",
						"sinnentstellend",
						"Sinnfälligkeit",
						"Sinnbild",
						"sinnlich",
						"sinngleich",
						"Sinnspruch",
						"Sinnsuche",
						"Sinnkrise"
					]
				}
			}
		},
		"Atmungshilfen": {
			"word": "Atmungshilfen",
			"data": {
				"_id": "591899f9ce905c0816aaa301",
				"word": "Atmungshilfen",
				"data": {
					"similarWords": []
				}
			}
		},
		"Asthmatiker": {
			"word": "Asthmatiker",
			"data": {
				"_id": "591899f9ce905c0816aaa300",
				"word": "Asthmatiker",
				"data": {
					"description": "Substantiv, maskulin - jemand, der an Asthma leidet",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "jemand, der an Asthma leidet"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Asthmatiker",
					"similarWords": [
						"Asthmatikerin",
						"asthmatisch"
					]
				}
			}
		},
		"Blasebalg": {
			"word": "Blasebalg",
			"data": {
				"_id": "591899fece905c0816aaa372",
				"word": "Blasebalg",
				"data": {
					"description": "Substantiv, maskulin - mit Hand oder Fuß betriebenes Gerät zur Erzeugung eines Luftstromes",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "mit Hand oder Fuß betriebenes Gerät zur Erzeugung eines Luftstromes"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Blasebalg",
					"similarWords": [
						"Kalkant",
						"Bälgetreter",
						"Tretbalg",
						"Aerophor",
						"Windkanal",
						"Follikel",
						"Gebläse",
						"Fächer",
						"Wind",
						"treten"
					]
				}
			}
		},
		"Hochöfen": {
			"word": "Hochöfen",
			"data": {
				"_id": "591899f9ce905c0816aaa2ff",
				"word": "Hochöfen",
				"data": {
					"similarWords": [
						"Hochofen",
						"Cowper",
						"Waterjacket",
						"Eisenasbest"
					]
				}
			}
		},
		"Hörner": {
			"word": "Hörner",
			"data": {
				"_id": "591899fbce905c0816aaa323",
				"word": "Hörner",
				"data": {
					"similarWords": [
						"hörnern",
						"Hörnerv",
						"Hörnerschall",
						"Hörnerhaube",
						"Hörnerschlitten",
						"Hörnerableiter",
						"Horntier",
						"Horn",
						"Martin-Horn®",
						"Hornvieh",
						"Gehörn",
						"Nashorn",
						"Gnu",
						"Hahnrei",
						"Hirsch",
						"blasen"
					]
				}
			}
		},
		"Ventile": {
			"word": "Ventile",
			"data": {
				"_id": "591899fbce905c0816aaa329",
				"word": "Ventile",
				"data": {
					"similarWords": [
						"Miefquirl",
						"Lüfter",
						"Auslassventil",
						"Ventilspiel",
						"Steuerventil",
						"Gasventil",
						"Ventilator",
						"Ventilierung",
						"Entlüftungsventil",
						"Ventilsteuerung",
						"Herzklappe",
						"Einspritzdüse",
						"Deckenventilator",
						"Ablassventil",
						"Absperrventil",
						"Kegelventil",
						"Mehrventiler",
						"Ventil",
						"Ventilgummi",
						"Reduzierventil"
					]
				}
			}
		},
		"Sauerstoffzelt": {
			"word": "Sauerstoffzelt",
			"data": {
				"_id": "591899f9ce905c0816aaa2fb",
				"word": "Sauerstoffzelt",
				"data": {
					"description": "Substantiv, Neutrum - zeltähnlicher Aufbau aus Kunststoff über dem Bett eines Patienten, unter dem dem Patienten mit Sauerstoff …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "zeltähnlicher Aufbau aus Kunststoff über dem Bett eines Patienten, unter dem dem Patienten mit Sauerstoff …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Sauerstoffzelt",
					"similarWords": []
				}
			}
		},
		"Intensivstation": {
			"word": "Intensivstation",
			"data": {
				"_id": "591899fbce905c0816aaa328",
				"word": "Intensivstation",
				"data": {
					"description": "Substantiv, feminin - Krankenhausstation zur Betreuung akut lebensgefährlich erkrankter Personen (z. B. bei Herzinfarkt, Verbrennungen) unter Anwendung bestimmter …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "Krankenhausstation zur Betreuung akut lebensgefährlich erkrankter Personen (z. B. bei Herzinfarkt, Verbrennungen) unter Anwendung bestimmter …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Intensivstation",
					"similarWords": [
						"Intensivpflegestation",
						"Intensivpatient",
						"Spitzenverkehr",
						"Wachstation",
						"liegen"
					]
				}
			}
		},
		"Luft": {
			"word": "Luft",
			"data": {
				"_id": "591899f9ce905c0816aaa30b",
				"word": "Luft",
				"data": {
					"description": "Substantiv, feminin - 1a. (die Erde umgebender) hauptsächlich aus …1b. Atemluft; 2. freier Raum über dem Erdboden; …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. (die Erde umgebender) hauptsächlich aus …1b. Atemluft; 2. freier Raum über dem Erdboden; …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Luft",
					"similarWords": [
						"Luft-Luft-Rakete",
						"Luftschloss",
						"Luftschicht",
						"Luftschacht",
						"Luftschlitz",
						"Luftschutzbunker",
						"Luftschutzkeller",
						"lufttüchtig",
						"Luftfahrzeug",
						"Luftkühlung",
						"Luftschaukel",
						"Luftaufsicht",
						"Luftschleuse",
						"Luftschraube",
						"Luftschlange",
						"Luftschiffer",
						"Luftdribbeln",
						"Luftführung",
						"Lufttrichter"
					]
				}
			}
		},
		"arbeiten": {
			"word": "arbeiten",
			"data": {
				"_id": "591899f9ce905c0816aaa304",
				"word": "arbeiten",
				"data": {
					"description": "schwaches Verb - 1a. Arbeit leisten, verrichten; tätig sein; 1b. beruflich tätig, beschäftigt sein; 1c. sich mit jemandem, etwas befassen …",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1a. Arbeit leisten, verrichten; tätig sein; 1b. beruflich tätig, beschäftigt sein; 1c. sich mit jemandem, etwas befassen …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/arbeiten",
					"similarWords": [
						"Hand-in-Hand-Arbeiten",
						"Gummihandschuh",
						"barabern",
						"arbeitsunwillig",
						"kunstgewerblich",
						"Silbermine",
						"Arbeitsbesuch",
						"Arbeitswille",
						"Ausschachtungsarbeiten",
						"Gleisarbeiten",
						"tschechern",
						"advozieren",
						"sennen",
						"tagelöhnern",
						"volontieren",
						"plotten",
						"Arbeitszug",
						"patzen",
						"Vergabe"
					]
				}
			}
		},
		"Atmen": {
			"word": "Atmen",
			"data": {
				"_id": "591899f9ce905c0816aaa30a",
				"word": "Atmen",
				"data": {
					"similarWords": [
						"atmen",
						"respirieren",
						"Stertor",
						"Atembeschwerden",
						"hyperventilieren",
						"Atmung",
						"Atembeklemmung",
						"abatmen",
						"Schnappatmung",
						"Atemholen",
						"Rhonchus",
						"Atemluft",
						"Sauerstoffdusche",
						"Atemtechnik",
						"Lungenfisch",
						"hecheln",
						"Staubmaske",
						"schniefen",
						"schnaufen",
						"Giemen"
					]
				}
			}
		},
		"Vokal": {
			"word": "Vokal",
			"data": {
				"_id": "591899face905c0816aaa31b",
				"word": "Vokal",
				"data": {
					"description": "Substantiv, maskulin - a. deutlich erklingender Laut, bei dessen …b. Vokalbuchstabe",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "a. deutlich erklingender Laut, bei dessen …b. Vokalbuchstabe"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Vokal",
					"similarWords": [
						"vokal",
						"oto-, Oto-, vor Vokalen und vor h ot-, Ot-",
						"iso-, Iso-, vor Vokalen auch is-, Is-",
						"myo-, Myo-, vor Vokalen my-, My-",
						"Kryo-, vor Vokalen Kry-",
						"Selbstlaut",
						"Thio-, vor Vokalen auch Thi-",
						"Vokalharmonie",
						"Vokalismus",
						"Ektase",
						"Nasalvokal",
						"Stammvokal",
						"Endvokal",
						"Vokalwerk",
						"Vokalpart",
						"vokalisch",
						"Vokalise",
						"Vokalist",
						"Hyphärese"
					]
				}
			}
		},
		"reine": {
			"word": "reine",
			"data": {
				"_id": "591899fbce905c0816aaa320",
				"word": "reine",
				"data": {
					"similarWords": [
						"Reine",
						"reineweg",
						"Reineke Fuchs",
						"reinerbig",
						"Rainer, Reiner",
						"Reinnickel",
						"reinemachen",
						"Reinemachen",
						"Reinertrag",
						"Reinerlös",
						"rein",
						"Reinemachefrau",
						"hochrein",
						"rein machen, reinmachen",
						"Reneklode, Reineclaude",
						"Klangreinheit",
						"Reingeschmeckte",
						"Reingeschmeckter",
						"Reinverlust",
						"reinriechen"
					]
				}
			}
		},
		"Rosa": {
			"word": "Rosa",
			"data": {
				"_id": "591899f7ce905c0816aaa2db",
				"word": "Rosa",
				"data": {
					"description": "Eigenname - weiblicher Vorname",
					"wordProperties": {
						"type": "Eigenname",
						"definition": "weiblicher Vorname"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Rosa_weiblicher_Vorname",
					"similarWords": [
						"rosa",
						"Monte Rosa",
						"sub rosa",
						"rosarot",
						"Rosalia",
						"Rosalie",
						"Rosazea",
						"Rosazee",
						"Rosamund",
						"Rosarium",
						"rosafarbig",
						"rosafarben",
						"Rosalinde",
						"Rosamunde",
						"quietschrosa",
						"zuckerlrosa",
						"Rosanilin"
					]
				}
			}
		},
		"Luxemburg": {
			"word": "Luxemburg",
			"data": {
				"_id": "591899face905c0816aaa312",
				"word": "Luxemburg",
				"data": {
					"description": "Substantiv, Neutrum - belgische Provinz",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "belgische Provinz"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Luxemburg_belgische_Provinz",
					"similarWords": [
						"Luxemburger",
						"lfr",
						"luxemburgisch",
						"Echternach",
						"Lützelburg",
						"Luxemburgerin",
						"Lëtzebuerg",
						"Franc",
						"Spartakusbund",
						"Beneluxstaat, Benelux-Staat",
						"Minette",
						"Schöffenrat"
					]
				}
			}
		},
		"ungewöhnlich": {
			"word": "ungewöhnlich",
			"data": {
				"_id": "591899face905c0816aaa316",
				"word": "ungewöhnlich",
				"data": {
					"description": "Adjektiv - 1. vom Üblichen, Gewohnten, Erwarteten abweichend; …2a. das gewohnte Maß übersteigend, enorm; 2b. sehr, überaus, über alle Maßen",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1. vom Üblichen, Gewohnten, Erwarteten abweichend; …2a. das gewohnte Maß übersteigend, enorm; 2b. sehr, überaus, über alle Maßen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/ungewoehnlich",
					"similarWords": [
						"Ungewöhnlichkeit",
						"sonderlich",
						"hochelegant",
						"bannig",
						"überhart",
						"meilenlang",
						"übergroß",
						"unorthodox",
						"fremdartig",
						"Tera-",
						"ungewohnt",
						"unüblich",
						"ausgefallen",
						"wundermild",
						"Intelligenzbestie",
						"anhosen",
						"anormal",
						"doll",
						"überaus"
					]
				}
			}
		},
		"jedenfalls": {
			"word": "jedenfalls",
			"data": {
				"_id": "591899fcce905c0816aaa341",
				"word": "jedenfalls",
				"data": {
					"description": "Adverb - a. auf jeden Fall; b. zumindest, wenigstens",
					"wordProperties": {
						"type": "Adverb",
						"definition": "a. auf jeden Fall; b. zumindest, wenigstens"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/jedenfalls",
					"similarWords": [
						"allweg",
						"zumindest",
						"immerhin",
						"gleichwohl",
						"dennoch",
						"wenigstens",
						"mindestens",
						"jedoch",
						"aber"
					]
				}
			}
		},
		"Moment": {
			"word": "Moment",
			"data": {
				"_id": "591899fece905c0816aaa36f",
				"word": "Moment",
				"data": {
					"description": "Substantiv, Neutrum - 1. ausschlaggebender Umstand, Gesichtspunkt; 2. z. B. Kraft × Hebelarm; …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. ausschlaggebender Umstand, Gesichtspunkt; 2. z. B. Kraft × Hebelarm; …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Moment_Umstand_Produkt",
					"similarWords": [
						"Moment musical",
						"Momentbild",
						"momentweise",
						"Momentsache",
						"Momenterl",
						"momentan",
						"Momentum",
						"Momentaufnahme",
						"Momentanlaut",
						"Spannungsmoment",
						"Entlastungsmoment",
						"Kerninduktion",
						"Tropfenform",
						"retardieren",
						"Überraschungsmoment",
						"Magneton",
						"Elementarmagnet",
						"Jerk"
					]
				}
			}
		},
		"Schriften": {
			"word": "Schriften",
			"data": {
				"_id": "591899fcce905c0816aaa336",
				"word": "Schriften",
				"data": {
					"description": "Pluralwort - Ausweispapiere",
					"wordProperties": {
						"type": "Pluralwort",
						"definition": "Ausweispapiere"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Schriften",
					"similarWords": [
						"Schriftenreihe",
						"Schriftenverzeichnis",
						"Anepigrapha",
						"Corpus Reformatorum",
						"Schrifttum",
						"Ketubim",
						"Aristoteles",
						"Awesta",
						"Erbauungsliteratur",
						"Kommentation",
						"Originalien",
						"Glasgravierung",
						"Kirchenschriftsteller",
						"Schrift",
						"münchhausisch",
						"taciteisch",
						"xenophontisch",
						"paracelsisch",
						"gewaltverherrlichend"
					]
				}
			}
		},
		"las": {
			"word": "las",
			"data": {
				"_id": "591899face905c0816aaa313",
				"word": "las",
				"data": {
					"description": "siehe lesenlesen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/las",
					"similarWords": [
						"Las Palmas",
						"Las Vegas",
						"lass",
						"Last",
						"lasch",
						"Lastexhose®",
						"Lassalle",
						"Lascaux",
						"Lasting",
						"Lastadie",
						"Entlastungszug",
						"Lassalleaner",
						"zulasten, zu Lasten",
						"lasterhaft",
						"pelasgisch",
						"lastenfrei",
						"scholastisch",
						"Lastigkeit"
					]
				}
			}
		},
		"Bild": {
			"word": "Bild",
			"data": {
				"_id": "591899face905c0816aaa31d",
				"word": "Bild",
				"data": {
					"description": "Substantiv, Neutrum - 1a. mit künstlerischen Mitteln auf einer …1b. Fotografie; gedruckt wiedergegebene bildliche Darstellung; 1c. auf dem Fernsehschirm Erscheinendes",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1a. mit künstlerischen Mitteln auf einer …1b. Fotografie; gedruckt wiedergegebene bildliche Darstellung; 1c. auf dem Fernsehschirm Erscheinendes"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Bild",
					"similarWords": [
						"Drei-D-Bild",
						"En-face-Bild",
						"Herz-Jesu-Bild",
						"Schwarz-Weiß-Bild, Schwarzweißbild",
						"Wort-Bild-Marke",
						"Bild-Ton-Kamera",
						"bildhübsch",
						"Bildschnitt",
						"Bildschmuck",
						"bildsynchron",
						"bildkräftig",
						"Bildschärfe",
						"Bildhauerei",
						"Bildführung",
						"Bildstörung",
						"Bildfrequenz",
						"Bildhauerin",
						"Bildlichkeit",
						"Bildstreifen"
					]
				}
			}
		},
		"Transparenten": {
			"word": "Transparenten",
			"data": {
				"_id": "591899face905c0816aaa31c",
				"word": "Transparenten",
				"data": {
					"similarWords": [
						"Pulverklarlack",
						"Geodreieck®",
						"Lichtpause",
						"Spiegellinse",
						"Kristallomantie",
						"Choreo",
						"transparent",
						"Transparent"
					]
				}
			}
		},
		"trug": {
			"word": "trug",
			"data": {
				"_id": "591899face905c0816aaa319",
				"word": "trug",
				"data": {
					"description": "siehe tragen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/trug",
					"similarWords": [
						"Trug",
						"Trugschluss",
						"Trugschrift",
						"Trugbild",
						"Trugwahrnehmung",
						"Trugdolde",
						"Truggebilde",
						"Betrug",
						"Kreditbetrug",
						"Selbstbetrug",
						"Steuerbetrug",
						"Scheckbetrug",
						"Wahlbetrug",
						"Wettbetrug",
						"Trickbetrug",
						"Sinnentrug",
						"Ehebetrug",
						"Goldkette",
						"Goldring"
					]
				}
			}
		},
		"nötig": {
			"word": "nötig",
			"data": {
				"_id": "591899fcce905c0816aaa33d",
				"word": "nötig",
				"data": {
					"description": "Adjektiv - (für etwas) erforderlich; eine unerlässliche Voraussetzung für etwas [bildend]; so beschaffen, dass man es braucht, …",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "(für etwas) erforderlich; eine unerlässliche Voraussetzung für etwas [bildend]; so beschaffen, dass man es braucht, …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/noetig",
					"similarWords": [
						"nötigen",
						"Nötigung",
						"nötigenfalls",
						"desiderat",
						"erforderlichenfalls",
						"indispensabel",
						"unverzichtbar",
						"unabdinglich",
						"not",
						"unerlässlich",
						"schutzbedürftig",
						"geboten",
						"bitter",
						"dürfen",
						"notfalls",
						"erforderlich",
						"de rigueur",
						"sanierungsreif",
						"unentbehrlich"
					]
				}
			}
		},
		"lebendig": {
			"word": "lebendig",
			"data": {
				"_id": "591899fbce905c0816aaa32b",
				"word": "lebendig",
				"data": {
					"description": "Adjektiv - 1. lebend, am Leben; 2. lebhaft, munter, voll Leben",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1. lebend, am Leben; 2. lebhaft, munter, voll Leben"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/lebendig",
					"similarWords": [
						"Lebendigkeit",
						"lebig",
						"blutvoll",
						"Menschenleben",
						"Taphophobie",
						"lebensvoll",
						"belebt",
						"unlebendig",
						"Ikebana",
						"Panvitalismus",
						"avivieren",
						"lebhaft",
						"beleben",
						"lebensnah",
						"wachhalten",
						"Azoikum",
						"Chassidismus",
						"Beschwörer",
						"auferwecken"
					]
				}
			}
		},
		"diskutierte": {
			"word": "diskutierte",
			"data": {
				"_id": "591899fbce905c0816aaa32a",
				"word": "diskutierte",
				"data": {
					"similarWords": [
						"viel diskutiert, vieldiskutiert",
						"Diskussionspartner",
						"diskussionswürdig",
						"Diskussionsabend",
						"Diskussionssendung",
						"Diskussionsveranstaltung",
						"diskutierbar",
						"steuerfinanziert",
						"Zukunftsthema",
						"Grundsatzdebatte",
						"Aufreger",
						"Diskussionsforum",
						"Diskussionsthema",
						"viel",
						"Stammtisch",
						"diskutieren",
						"durchdiskutieren",
						"ausdiskutieren",
						"wegdiskutieren",
						"daran"
					]
				}
			}
		},
		"Frauengruppen": {
			"word": "Frauengruppen",
			"data": {
				"_id": "591899fcce905c0816aaa338",
				"word": "Frauengruppen",
				"data": {
					"similarWords": [
						"Frauengruppe"
					]
				}
			}
		},
		"benannten": {
			"word": "benannten",
			"data": {
				"_id": "591899fcce905c0816aaa340",
				"word": "benannten",
				"data": {
					"similarWords": [
						"Marx",
						"Osman",
						"Akkreditiv",
						"enharmonisch",
						"Levittown",
						"Dokumentenakkreditiv",
						"Antonomasie",
						"Humanitarismus",
						"Baum",
						"benennen",
						"umbenennen"
					]
				}
			}
		},
		"verordnete": {
			"word": "verordnete",
			"data": {
				"_id": "591899fcce905c0816aaa334",
				"word": "verordnete",
				"data": {
					"similarWords": [
						"Heilfasten",
						"Einfuhrverbot",
						"Importverbot",
						"Einreibung",
						"Nulldiät",
						"Heilnahrung",
						"Bettruhe",
						"Einfuhrsperre",
						"Beschäftigungstherapeut",
						"Freiluftbehandlung",
						"Moorbad",
						"Abschöpfung",
						"Bestrahlung",
						"Diät",
						"verordnen",
						"Bewegung",
						"Bad",
						"ergehen"
					]
				}
			}
		},
		"Verehrung": {
			"word": "Verehrung",
			"data": {
				"_id": "591899ffce905c0816aaa378",
				"word": "Verehrung",
				"data": {
					"description": "Substantiv, feminin - a. das Verehren; b. das Verehren",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "a. das Verehren; b. das Verehren"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Verehrung",
					"similarWords": [
						"Herz-Jesu-Verehrung",
						"Anbetung",
						"Veneration",
						"Baalsdienst",
						"Satanismus",
						"Heldenverehrung",
						"Gottesverehrung",
						"Teufelsverehrung",
						"Götzendienst",
						"Phalluskult",
						"Herrscherkult",
						"Totenkult",
						"Ahnenkult",
						"Ophiolatrie",
						"verehrungsvoll",
						"Heiligenverehrung",
						"Reliquienverehrung",
						"Sonnenkult",
						"Stierkult"
					]
				}
			}
		},
		"DDR": {
			"word": "DDR",
			"data": {
				"_id": "59189a00ce905c0816aaa38c",
				"word": "DDR",
				"data": {
					"description": "Substantiv, feminin - Deutsche Demokratische Republik (1949–1990)",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "Deutsche Demokratische Republik (1949–1990)"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/DDR",
					"similarWords": [
						"Ex-DDR",
						"DDr.",
						"DDR-Zeit",
						"DDR-Bürgerin",
						"DDR-Bürger",
						"DFF",
						"SMH",
						"Honecker",
						"Pieck",
						"Valutamark",
						"Volksmarine",
						"Volkskammer",
						"Sozialfürsorge",
						"DEFA",
						"Interflug",
						"Ostler",
						"Toni",
						"Trabant®",
						"DBD"
					]
				}
			}
		},
		"Interesse": {
			"word": "Interesse",
			"data": {
				"_id": "591899face905c0816aaa31a",
				"word": "Interesse",
				"data": {
					"description": "Substantiv, Neutrum - 1. geistige Anteilnahme, Aufmerksamkeit; 2a. Neigung, Vorliebe; 2b. Neigungen zum Erwerb, Kauf",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. geistige Anteilnahme, Aufmerksamkeit; 2a. Neigung, Vorliebe; 2b. Neigungen zum Erwerb, Kauf"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Interesse",
					"similarWords": [
						"interesselos",
						"interessehalber",
						"Interessent",
						"Desinteresse",
						"Rechtsgut",
						"Profitinteresse",
						"Luxusobjekt",
						"Interesselosigkeit",
						"Interessentin",
						"interessant",
						"anregend",
						"erlebnisreich",
						"spannungsvoll",
						"schutzwürdig",
						"Bundesanwaltschaft",
						"Schlagerspiel",
						"Kauflust",
						"Pilotsendung",
						"Pilotfilm"
					]
				}
			}
		},
		"Neugierde": {
			"word": "Neugierde",
			"data": {
				"_id": "591899f9ce905c0816aaa308",
				"word": "Neugierde",
				"data": {
					"description": "Substantiv, feminin - Beherrschtsein von dem Wunsch, etwas Bestimmtes zu erfahren, in Angelegenheiten, Bereiche einzudringen, die besonders andere …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "Beherrschtsein von dem Wunsch, etwas Bestimmtes zu erfahren, in Angelegenheiten, Bereiche einzudringen, die besonders andere …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Neugierde",
					"similarWords": [
						"Neugier",
						"Vorwitz",
						"Wissensdrang",
						"Wissensdurst",
						"Vorfreude",
						"anteasen",
						"gespannt",
						"Stielauge",
						"Schlachtenbummler",
						"Kuriosität"
					]
				}
			}
		},
		"freiwillig": {
			"word": "freiwillig",
			"data": {
				"_id": "591899f9ce905c0816aaa309",
				"word": "freiwillig",
				"data": {
					"description": "Adjektiv - aus eigenem freiem Willen geschehend; ohne Zwang ausgeführt",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "aus eigenem freiem Willen geschehend; ohne Zwang ausgeführt"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/freiwillig",
					"similarWords": [
						"FSJ",
						"Freiwilligkeit",
						"Einjährig-Freiwillige",
						"sua sponte",
						"freierdings",
						"Lohnverzicht",
						"FÖJ",
						"FSJler",
						"Freiwillige",
						"Freiwilliger",
						"Kirchgeld",
						"Entwicklungsdienst",
						"Fachverband",
						"Selbstversicherung",
						"Volontär",
						"Vorruhestand",
						"Einjähriger",
						"Kriegsfreiwilliger",
						"Ehejoch"
					]
				}
			}
		},
		"entgegengebracht": {
			"word": "entgegengebracht",
			"data": {
				"_id": "591899face905c0816aaa31e",
				"word": "entgegengebracht",
				"data": {
					"similarWords": [
						"Gastfreundlichkeit",
						"Achtungsbezeigung",
						"Sympathiebonus",
						"entgegenschlagen",
						"Muttergefühl",
						"Missachtung",
						"Misogynie",
						"Respektsperson",
						"entgegenbringen",
						"Sakrileg",
						"Kredit"
					]
				}
			}
		},
		"gekommen": {
			"word": "gekommen",
			"data": {
				"_id": "591899fcce905c0816aaa33c",
				"word": "gekommen",
				"data": {
					"description": "siehe kommen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/gekommen",
					"similarWords": [
						"Neuzugang",
						"Verkehrstote",
						"Unfalltote",
						"bejahrt",
						"ebendeshalb",
						"unbegreiflicherweise",
						"deinetwegen",
						"unfallgeschädigt",
						"basisdemokratisch",
						"Lambethwalk",
						"Unfalltoter",
						"Sühnekreuz",
						"Spätaussiedler",
						"Ölscheich",
						"Zukurzgekommene",
						"Lebendgeborene",
						"Lebendgeborener",
						"Zukurzgekommener",
						"Lebendgeburt"
					]
				}
			}
		},
		"Foto": {
			"word": "Foto",
			"data": {
				"_id": "591899fcce905c0816aaa33b",
				"word": "Foto",
				"data": {
					"description": "Substantiv, Neutrum oder Substantiv, feminin - Fotografie",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "Fotografie"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Foto_Fotografie_Bild",
					"similarWords": [
						"foto-, Foto-, photo-, Photo-",
						"Schwarz-Weiß-Foto, Schwarzweißfoto",
						"Fotothek",
						"Fotodruck",
						"Photom, Fotom",
						"Photon, Foton",
						"fototrop, phototrop",
						"fotogen, photogen",
						"fotophil, photophil",
						"fotophob, photophob",
						"Fotodesign",
						"Fotonik, Photonik",
						"Fotosatz, Photosatz",
						"Fotomodell",
						"Fotopapier",
						"Fotoalbum",
						"Fotolabor",
						"Fotoshooting"
					]
				}
			}
		},
		"Zeitung": {
			"word": "Zeitung",
			"data": {
				"_id": "591899fbce905c0816aaa327",
				"word": "Zeitung",
				"data": {
					"description": "Substantiv, feminin - 1a. täglich bzw. regelmäßig in kurzen …1b. Redaktion bzw. Unternehmung, die eine …2. Nachricht von einem Ereignis",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. täglich bzw. regelmäßig in kurzen …1b. Redaktion bzw. Unternehmung, die eine …2. Nachricht von einem Ereignis"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Zeitung",
					"similarWords": [
						"Zeitung lesend, zeitunglesend",
						"Times",
						"Weltblatt",
						"Lokalblatt",
						"Zeitunglesen",
						"Käseblatt",
						"Provinzblatt",
						"E-Paper",
						"Witzseite",
						"Klatschblatt",
						"druckfrisch",
						"zeitungslesend",
						"Zeitungsfoto",
						"Kirchenblatt",
						"Skandalblatt",
						"Wochenblatt",
						"Zeitungsabonnement",
						"Clipping",
						"Bordzeitung"
					]
				}
			}
		},
		"aufgehackten": {
			"word": "aufgehackten",
			"data": {
				"_id": "591899f7ce905c0816aaa2dc",
				"word": "aufgehackten",
				"data": {
					"similarWords": []
				}
			}
		},
		"Schweinskopf": {
			"word": "Schweinskopf",
			"data": {
				"_id": "591899fbce905c0816aaa324",
				"word": "Schweinskopf",
				"data": {
					"description": "Substantiv, maskulin - a. Kopf eines [geschlachteten] Schweins; b. menschlicher Kopf, der wie der …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "a. Kopf eines [geschlachteten] Schweins; b. menschlicher Kopf, der wie der …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Schweinskopf",
					"similarWords": [
						"Schweinekopf",
						"Schweinskopfsülze",
						"sülzen"
					]
				}
			}
		},
		"Gedenkstelle": {
			"word": "Gedenkstelle",
			"data": {
				"_id": "591899f9ce905c0816aaa2fd",
				"word": "Gedenkstelle",
				"data": {
					"similarWords": []
				}
			}
		},
		"gelegt": {
			"word": "gelegt",
			"data": {
				"_id": "591899f8ce905c0816aaa2e5",
				"word": "gelegt",
				"data": {
					"similarWords": [
						"Frischei",
						"Brandanschlag",
						"Planpreis",
						"Gipsbein",
						"Lockenfrisur",
						"Tortenplatte",
						"Mumiensarg",
						"Essigfleisch",
						"Tarifentfernung",
						"Platztritt",
						"Unterlegring",
						"Entwicklerbad",
						"Linienblatt",
						"Mantelrohr",
						"Unterbett",
						"Rechnungseinheit",
						"Unterlegscheibe",
						"Buchhülle",
						"Handkommunion",
						"Mundkommunion"
					]
				}
			}
		},
		"Leiche": {
			"word": "Leiche",
			"data": {
				"_id": "591899f8ce905c0816aaa2e7",
				"word": "Leiche",
				"data": {
					"description": "Substantiv, feminin - 1a. Körper eines Toten, Gestorbenen; 1b. totes Tier, Tierleiche; 2. Begräbnis",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. Körper eines Toten, Gestorbenen; 1b. totes Tier, Tierleiche; 2. Begräbnis"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Leiche",
					"similarWords": [
						"Fronleichnamsfest",
						"Leichenfledderei",
						"Arbeitserleichterung",
						"Steuererleichterung",
						"Fronleichnamsprozession",
						"Babyleiche",
						"Leichenteil",
						"Fronleichnamstag",
						"Leichenfund",
						"Leichengeruch",
						"Schubleichter",
						"Leichte",
						"Blutlache",
						"Pflegeleichtigkeit",
						"Erleichterungsmittel",
						"Leich",
						"leichenhaft",
						"Ötzi",
						"Lichen"
					]
				}
			}
		},
		"Landwehrkanal": {
			"word": "Landwehrkanal",
			"data": {
				"_id": "591899f7ce905c0816aaa2dd",
				"word": "Landwehrkanal",
				"data": {
					"similarWords": []
				}
			}
		},
		"geworfen": {
			"word": "geworfen",
			"data": {
				"_id": "591899f8ce905c0816aaa2e6",
				"word": "geworfen",
				"data": {
					"description": "siehe werfen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/geworfen",
					"similarWords": [
						"Geworfenheit",
						"Dartpfeil",
						"Wurfspeer",
						"Schulterwurf",
						"mittendrein",
						"Darts",
						"Hammerwerfen",
						"Speerwerfen",
						"Wurfgeschoß",
						"Hauswurfsendung",
						"Wurfpfeil",
						"Hammerwurfring",
						"Doppeltrap",
						"Diskuswerfen",
						"Fives",
						"Ringtennis",
						"Wurfgeschoss",
						"ejakulieren",
						"Angelleine"
					]
				}
			}
		},
		"dachte": {
			"word": "dachte",
			"data": {
				"_id": "591899f8ce905c0816aaa2e8",
				"word": "dachte",
				"data": {
					"description": "siehe denken",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/dachte",
					"similarWords": [
						"Dachtel",
						"dachteln",
						"Verdachtsmoment",
						"gedacht",
						"Abendandacht",
						"Bußandacht",
						"Morgenandacht",
						"Verdachtsgrund",
						"Dopingverdacht",
						"Krebsverdacht",
						"Korruptionsverdacht",
						"Marienandacht",
						"Jahresschlussandacht",
						"wohldurchdacht, wohl durchdacht",
						"Dankandacht",
						"Mordverdacht",
						"Fluchtverdacht",
						"Tatverdacht",
						"Andachtsbuch"
					]
				}
			}
		},
		"ich": {
			"word": "ich",
			"data": {
				"_id": "591899f8ce905c0816aaa2eb",
				"word": "ich",
				"data": {
					"description": "Pronomen - Person, in der man von sich selbst spricht; Bezeichnung für die eigene Person",
					"wordProperties": {
						"type": "Pronomen",
						"definition": "Person, in der man von sich selbst spricht; Bezeichnung für die eigene Person"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/ich",
					"similarWords": [
						"Ich",
						"Ich-AG",
						"Ichor",
						"Nicht-Ich",
						"Ichmensch, Ich-Mensch",
						"ichsüchtig",
						"Ichthyosis",
						"Ichthyolith",
						"Ichthyodont",
						"Ichsucht",
						"Ichlaut, Ich-Laut",
						"ichthyologisch",
						"Ichbewusstsein",
						"Ichthyophthalm",
						"Ichthyol®",
						"Ichthyotoxin",
						"Ichthyosaurus",
						"Ichthyophage",
						"Ichgefühl"
					]
				}
			}
		},
		"müsse": {
			"word": "müsse",
			"data": {
				"_id": "591899f8ce905c0816aaa2ea",
				"word": "müsse",
				"data": {
					"similarWords": [
						"müssen",
						"Universismus",
						"hirnrissig",
						"wegmüssen",
						"ranmüssen",
						"zurückmüssen",
						"weitermüssen",
						"rausmüssen",
						"vorbeimüssen",
						"reinmüssen",
						"hineinmüssen",
						"losmüssen",
						"durchmüssen",
						"heruntermüssen",
						"hinausmüssen",
						"heraufmüssen",
						"hinaufmüssen",
						"hochmüssen",
						"rübermüssen",
						"hermüssen"
					]
				}
			}
		},
		"Stadt": {
			"word": "Stadt",
			"data": {
				"_id": "591899f8ce905c0816aaa2e9",
				"word": "Stadt",
				"data": {
					"description": "Substantiv, feminin - 1a. größere, dicht geschlossene Siedlung, die …1b. Gesamtheit der Einwohner einer Stadt; 2. Verwaltung einer Stadt",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. größere, dicht geschlossene Siedlung, die …1b. Gesamtheit der Einwohner einer Stadt; 2. Verwaltung einer Stadt"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Stadt",
					"similarWords": [
						"Mexiko-Stadt",
						"Basel-Stadt",
						"Guatemala-Stadt",
						"Stadtteilfest",
						"Stadtzentrum",
						"Stadttheater",
						"Stadtführung",
						"Stadtrundgang",
						"Stadtentwicklung",
						"Stadtbibliothek",
						"Stadtschreiberin",
						"Stadtstreicherin",
						"stadteigen",
						"Stadtmitte",
						"Stadthalle",
						"Stadtfarbe",
						"Stadtmauer",
						"Stadtkasse",
						"Stadtflucht"
					]
				}
			}
		},
		"zurückkommen": {
			"word": "zurückkommen",
			"data": {
				"_id": "591899f9ce905c0816aaa2f9",
				"word": "zurückkommen",
				"data": {
					"description": "starkes Verb - 1a. wieder am Ausgangsort, -punkt ankommen; …1b. sich wieder einstellen; 1c. zurückgelegt, -gebracht o. Ä. werden",
					"wordProperties": {
						"type": "starkes",
						"definition": "1a. wieder am Ausgangsort, -punkt ankommen; …1b. sich wieder einstellen; 1c. zurückgelegt, -gebracht o. Ä. werden"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/zurueckkommen",
					"similarWords": [
						"zurückgelangen",
						"Bezug nehmen",
						"Wiederkehr",
						"heimkommen",
						"fortbleiben",
						"wieder einstellen, wiedereinstellen",
						"rezidiv",
						"Rückkunft",
						"herumrühren",
						"wiederkehren",
						"heimkehren",
						"Ritornell",
						"Comeback, Come-back",
						"wieder aufnehmen, wiederaufnehmen",
						"Rückkehr",
						"zurückwollen",
						"zurückdürfen",
						"zurückmüssen",
						"zurücksollen"
					]
				}
			}
		},
		"weggegangen": {
			"word": "weggegangen",
			"data": {
				"_id": "591899f9ce905c0816aaa2fe",
				"word": "weggegangen",
				"data": {
					"similarWords": [
						"fort",
						"weggehen",
						"beide",
						"sein"
					]
				}
			}
		},
		"schreiben": {
			"word": "schreiben",
			"data": {
				"_id": "591899face905c0816aaa31f",
				"word": "schreiben",
				"data": {
					"description": "starkes Verb - 1a. Schriftzeichen, Buchstaben, Ziffern, Noten o. …1b. (von Schreibgeräten) beim Schreiben bestimmte …1c. sich mit den gegebenen Mitteln …",
					"wordProperties": {
						"type": "starkes",
						"definition": "1a. Schriftzeichen, Buchstaben, Ziffern, Noten o. …1b. (von Schreibgeräten) beim Schreiben bestimmte …1c. sich mit den gegebenen Mitteln …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/schreiben",
					"similarWords": [
						"Schreiben",
						"Maschine schreiben",
						"wund schreiben",
						"Songwriting",
						"antedatieren",
						"geschrieben",
						"schrieb",
						"Geschreibe",
						"Schreibpult",
						"Schreibheft",
						"Dienstsache",
						"Spiegelschrift",
						"Schreibbedarf",
						"Schreibfehler",
						"weiterschreiben",
						"maschinschreiben",
						"stenografieren, stenographieren",
						"ketzern",
						"urkunden"
					]
				}
			}
		},
		"verstehen": {
			"word": "verstehen",
			"data": {
				"_id": "591899fdce905c0816aaa34a",
				"word": "verstehen",
				"data": {
					"description": "unregelmäßiges Verb - 1. (Gesprochenes) deutlich hören; 2a. den Sinn von etwas erfassen; …2b. in bestimmter Weise auslegen, deuten, …",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/verstehen",
					"similarWords": [
						"Verstehen",
						"Kartenkunde",
						"schnallen",
						"Aneidylismus",
						"Fremdsprachenkenntnis",
						"mitempfinden",
						"gicks",
						"Effeff",
						"verständlich",
						"Verständnis",
						"durchsteigen",
						"unverständlich",
						"wortlos",
						"sinnbildhaft",
						"Kunsterziehung",
						"Alternativmedizin",
						"Brauerei",
						"Demokratieverständnis",
						"Ah"
					]
				}
			}
		},
		"falsch": {
			"word": "falsch",
			"data": {
				"_id": "591899fdce905c0816aaa355",
				"word": "falsch",
				"data": {
					"description": "Adjektiv - 1a. (einer echten Sache gleicher Art) …1b. gefälscht; 2a. dem tatsächlichen Sachverhalt, der realen …",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1a. (einer echten Sache gleicher Art) …1b. gefälscht; 2a. dem tatsächlichen Sachverhalt, der realen …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/falsch",
					"similarWords": [
						"Falsch",
						"Falschmünzer",
						"Falschspieler",
						"Falschbuchung",
						"Falschmeldung",
						"falschspielen",
						"Falschmünzerin",
						"Falschspielerin",
						"Falschmünzerei",
						"Falschfahrer",
						"Falschparker",
						"falschliegen",
						"Falschgeld",
						"Falschheit",
						"Falschluft",
						"Falschfahrerin",
						"Falschparkerin",
						"Falschaussage",
						"Falscheid"
					]
				}
			}
		},
		"ziemlich": {
			"word": "ziemlich",
			"data": {
				"_id": "591899f9ce905c0816aaa2f8",
				"word": "ziemlich",
				"data": {
					"description": "Adverb - 1. in verhältnismäßig hohem, großem, reichlichem …2. annähernd, fast; ungefähr",
					"wordProperties": {
						"type": "Adverb",
						"definition": "1. in verhältnismäßig hohem, großem, reichlichem …2. annähernd, fast; ungefähr"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/ziemlich_relativ_vergleichsweise",
					"similarWords": [
						"adagietto",
						"hergeholt",
						"Ferrotitan",
						"rangnieder",
						"vogelig",
						"assai",
						"Höhenwind",
						"anpissen",
						"unliebsam",
						"umfänglich",
						"wohlgeordnet, wohl geordnet",
						"wohlunterrichtet, wohl unterrichtet",
						"annäherungsweise",
						"hochpreisig",
						"reißfest",
						"unzivilisiert",
						"unweiblich",
						"Flittchen"
					]
				}
			}
		},
		"schwierig": {
			"word": "schwierig",
			"data": {
				"_id": "591899f9ce905c0816aaa2f7",
				"word": "schwierig",
				"data": {
					"description": "Adjektiv - 1a. viel Kraft, Mühe, große Anstrengung …1b. in besonderem Maße mit der …2. schwer zu behandeln, zufriedenzustellen",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1a. viel Kraft, Mühe, große Anstrengung …1b. in besonderem Maße mit der …2. schwer zu behandeln, zufriedenzustellen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/schwierig",
					"similarWords": [
						"schwierig sein",
						"Schwierigkeit",
						"Schwierigkeitsgrad",
						"Schwierigkeitsnote",
						"spinös",
						"bitzlig",
						"Doktorfrage",
						"heavy",
						"Knaupelei",
						"komplizieren",
						"dornig",
						"knauplig",
						"Bravourarie",
						"Gewissensfrage",
						"Wahnsinnsarbeit",
						"Kletterpartie",
						"Umfangsberechnung",
						"Finanzsituation",
						"Übungsteil"
					]
				}
			}
		},
		"Versuch": {
			"word": "Versuch",
			"data": {
				"_id": "591899f8ce905c0816aaa2f6",
				"word": "Versuch",
				"data": {
					"description": "Substantiv, maskulin - 1a. Handlung, mit der etwas versucht …1b. literarisches Produkt, Kunstwerk, durch das …2a. (einmaliges) Ausführen einer Übung in …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1a. Handlung, mit der etwas versucht …1b. literarisches Produkt, Kunstwerk, durch das …2a. (einmaliges) Ausführen einer Übung in …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Versuch",
					"similarWords": [
						"Vorversuch",
						"Versucher",
						"Versuchsprojekt",
						"Abwehrversuch",
						"Versuchung",
						"versuchen",
						"Versuchsphase",
						"Versucherin",
						"Vertuschungsversuch",
						"Selbstmordversuch",
						"Laborversuch",
						"Bestechungsversuch",
						"Wiederbelebungsversuch",
						"Lösungsversuch",
						"Putschversuch",
						"Deutungsversuch",
						"Rettungsversuch",
						"Fluchtversuch",
						"Vermittlungsversuch"
					]
				}
			}
		},
		"ma": {
			"word": "ma",
			"data": {
				"_id": "591899ffce905c0816aaa37e",
				"word": "ma",
				"data": {
					"similarWords": [
						"ma.",
						"MA",
						"MA.",
						"mA",
						"Ma",
						"ma non tanto",
						"ma non troppo",
						"non tanto",
						"non troppo",
						"troppo",
						"Mamapuppe",
						"Mamachen",
						"Primamalerei",
						"Mama",
						"Milliampere",
						"Mathematiker",
						"Mathematikbuch",
						"Onomatomanie",
						"-omane",
						"Manama"
					]
				}
			}
		},
		"wei": {
			"word": "wei",
			"data": {
				"_id": "591899fcce905c0816aaa342",
				"word": "wei",
				"data": {
					"similarWords": [
						"weil",
						"weil.",
						"weit",
						"so weit",
						"EU-weit",
						"Weib",
						"Weit",
						"Wein",
						"Weih",
						"weich",
						"weiß",
						"Weiß",
						"Weiss",
						"weißt",
						"weizenblond",
						"Weißenfels",
						"Weitergabe"
					]
				}
			}
		},
		"mu": {
			"word": "mu",
			"data": {
				"_id": "591899face905c0816aaa30d",
				"word": "mu",
				"data": {
					"similarWords": [
						"μg",
						"μF",
						"μm",
						"mukös",
						"musiert",
						"Samuel",
						"Murillo",
						"Rapmusik",
						"Soulmusik",
						"Skamusik",
						"Mutität",
						"Museologie",
						"Musi",
						"Musche",
						"Musikfest",
						"Musikvideo",
						"Musentochter",
						"Uranmunition",
						"Waschmuschel",
						"Dreikantmuschel"
					]
				}
			}
		},
		"entsteht": {
			"word": "entsteht",
			"data": {
				"_id": "591899face905c0816aaa30c",
				"word": "entsteht",
				"data": {
					"similarWords": [
						"Ausgangsgestein",
						"Terminstress",
						"Tippfehler",
						"Bruchschaden",
						"plauz",
						"Schadenereignis",
						"Schadensereignis",
						"Ammoniakat",
						"Leichengift",
						"Mischfarbe",
						"Ölkrise",
						"Podsolierung",
						"Köperbindung",
						"Anlaufverlust",
						"Partialbruch",
						"abwinkeln",
						"Aktinon",
						"Umzugschaos",
						"Emanzipationsprozess",
						"Raumfilm"
					]
				}
			}
		},
		"Braves": {
			"word": "Braves",
			"data": {
				"_id": "591899fbce905c0816aaa325",
				"word": "Braves",
				"data": {
					"similarWords": [
						"brav",
						"Mädchen",
						"Seele"
					]
				}
			}
		},
		"scheitern": {
			"word": "scheitern",
			"data": {
				"_id": "59189a01ce905c0816aaa3ae",
				"word": "scheitern",
				"data": {
					"description": "schwaches Verb - a. ein angestrebtes Ziel o. Ä. …b. misslingen, missglücken, fehlschlagen",
					"wordProperties": {
						"type": "schwaches",
						"definition": "a. ein angestrebtes Ziel o. Ä. …b. misslingen, missglücken, fehlschlagen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/scheitern",
					"similarWords": [
						"baden gehen",
						"Schiffbruch erleiden",
						"totreden",
						"Stolperstein",
						"abschiffen",
						"Erzwingungsstreik",
						"stranden",
						"zunichtemachen",
						"Boygroup",
						"floppen",
						"durchrauschen",
						"durchrasseln",
						"danebengeraten",
						"baden",
						"verurteilen",
						"Aus",
						"annihilieren",
						"fehlschlagen",
						"schieflaufen"
					]
				}
			}
		},
		"gelesen": {
			"word": "gelesen",
			"data": {
				"_id": "591899fdce905c0816aaa356",
				"word": "gelesen",
				"data": {
					"description": "siehe lesen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/gelesen",
					"similarWords": [
						"viel gelesen, vielgelesen",
						"meistgelesen",
						"ungelesen",
						"Koranschule",
						"Szeneblatt",
						"Massenblatt",
						"Frauenroman",
						"Modeschriftsteller",
						"lesenswert",
						"Diskettenlaufwerk",
						"Szenemagazin",
						"RAM",
						"Hauspostille",
						"Nacherzählung",
						"Flaschenpost",
						"Lesesaal",
						"Belegleser",
						"Browser",
						"nacherzählen"
					]
				}
			}
		},
		"verbinden": {
			"word": "verbinden",
			"data": {
				"_id": "591899fcce905c0816aaa345",
				"word": "verbinden",
				"data": {
					"description": "starkes Verb - 1a. mit einem Verband versehen; 1b. (bei jemandem) einen Verband anlegen; 2. eine [Art] Binde vor, um …",
					"wordProperties": {
						"type": "starkes",
						"definition": "1a. mit einem Verband versehen; 1b. (bei jemandem) einen Verband anlegen; 2. eine [Art] Binde vor, um …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/verbinden",
					"similarWords": [
						"einfatschen",
						"Völker verbindend, völkerverbindend",
						"Schaltanlage",
						"vernieten",
						"konjungieren",
						"schragen",
						"jungieren",
						"vernuten",
						"nektieren",
						"laschen",
						"zusammenschalten",
						"anketteln",
						"verflechten",
						"einfaschen",
						"Verband",
						"Verbindungsrohr",
						"Zeising",
						"Schifferknoten",
						"verschwistern"
					]
				}
			}
		},
		"versöhnen": {
			"word": "versöhnen",
			"data": {
				"_id": "591899fcce905c0816aaa33e",
				"word": "versöhnen",
				"data": {
					"description": "schwaches Verb - 1. mit jemandem nach einem Streit …2a. (zwei miteinander im Streit liegende …2b. veranlassen, nicht länger zu grollen, …",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1. mit jemandem nach einem Streit …2a. (zwei miteinander im Streit liegende …2b. veranlassen, nicht länger zu grollen, …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/versoehnen",
					"similarWords": [
						"versühnen",
						"konzilieren",
						"reunieren",
						"Versöhnung",
						"unversöhnlich",
						"einen",
						"aussöhnen",
						"einigen",
						"abwiegeln",
						"Bußgang",
						"schlichten",
						"vergleichen",
						"vermitteln",
						"regeln",
						"herausreißen",
						"Friedenspfeife",
						"ausgleichen",
						"verbinden"
					]
				}
			}
		},
		"per": {
			"word": "per",
			"data": {
				"_id": "591899fece905c0816aaa364",
				"word": "per",
				"data": {
					"description": "Präposition - 1a. mit, durch, mittels; 1a. gibt …1b. durch; 1b. gibt das Mittel …2. zum, für; 2. zur Angabe …",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/per",
					"similarWords": [
						"Per",
						"per os",
						"per se",
						"per anum",
						"per rectum",
						"per nefas",
						"per fas",
						"per cassa",
						"per conto",
						"per Adresse",
						"per definitionem",
						"per acclamationem",
						"per annum",
						"per exemplum",
						"per accidens",
						"per abusum",
						"per ultimo",
						"per procura",
						"per saldo"
					]
				}
			}
		},
		"se": {
			"word": "se",
			"data": {
				"_id": "591899ffce905c0816aaa37d",
				"word": "se",
				"data": {
					"similarWords": [
						"Se.",
						"SE",
						"Se",
						"per se",
						"Fachwissen",
						"Coitus prolongatus",
						"Holzspiritus",
						"Scorsese",
						"mokieren",
						"Hindernis",
						"Begräbnis",
						"Tremse",
						"DNS",
						"Vorinformation",
						"Stadtexpress",
						"Semiseria",
						"Bathseba, ökumenisch Batseba",
						"Josepha, auch und österreichisch nur Josefa",
						"Laktose, Lactose",
						"Gemüsebeet"
					]
				}
			}
		},
		"ausschlie": {
			"word": "ausschlie",
			"data": {
				"_id": "591899fbce905c0816aaa332",
				"word": "ausschlie",
				"data": {
					"similarWords": [
						"ausschließen",
						"Ausschließung",
						"ausschließend",
						"ausschließlich",
						"ausschließbar",
						"exzeptiv",
						"zwangläufig",
						"Thelygenie",
						"Mundartsprecher",
						"Präklusion",
						"Pauschaltourist",
						"Menschenlaus",
						"Drumband",
						"Ausschließlichkeit",
						"dilemmatisch",
						"unfallsicher",
						"Vegetarismus",
						"Biologismus"
					]
				}
			}
		},
		"Gleichheit": {
			"word": "Gleichheit",
			"data": {
				"_id": "591899face905c0816aaa30f",
				"word": "Gleichheit",
				"data": {
					"description": "Substantiv, feminin - a. Übereinstimmung in bestimmten Merkmalen; große …b. gleiche Stellung, gleiche Rechte",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "a. Übereinstimmung in bestimmten Merkmalen; große …b. gleiche Stellung, gleiche Rechte"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Gleichheit",
					"similarWords": [
						"Egalität",
						"Isonomie",
						"Égalité",
						"Deckungsgleichheit",
						"Gleichheitssatz",
						"Gleichheitsprinzip",
						"Gleichheitszeichen",
						"Gleiche",
						"Stimmengleichheit",
						"Gleichheitsgebot",
						"Äquativ",
						"Gleichheitsgrundsatz",
						"Vollwertigkeit",
						"Gleichartigkeit",
						"Egalitarismus",
						"Parität",
						"Analogieschluss",
						"Analogie",
						"Indifferenz"
					]
				}
			}
		},
		"Freiheit": {
			"word": "Freiheit",
			"data": {
				"_id": "591899fdce905c0816aaa354",
				"word": "Freiheit",
				"data": {
					"description": "Substantiv, feminin - 1. Zustand, in dem jemand von …2. Möglichkeit, sich frei und ungehindert …3. Recht, etwas zu tun; bestimmtes …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. Zustand, in dem jemand von …2. Möglichkeit, sich frei und ungehindert …3. Recht, etwas zu tun; bestimmtes …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Freiheit",
					"similarWords": [
						"freiheitlich",
						"Libertät",
						"Freiheitsgedanke",
						"Freiheitliche",
						"Freiheitlicher",
						"freiheitsliebend",
						"Freigelassene",
						"Freigelassener",
						"Freiheitsbegriff",
						"deterministisch",
						"Libertas",
						"Vorbehaltlosigkeit",
						"Entschlussfreiheit",
						"Kultusfreiheit",
						"Privilegium",
						"Sexualverbrechen",
						"Wissenschaftsfreiheit",
						"Sexualstraftat",
						"Freiheitsbeschränkung"
					]
				}
			}
		},
		"Ausgleich": {
			"word": "Ausgleich",
			"data": {
				"_id": "591899ffce905c0816aaa388",
				"word": "Ausgleich",
				"data": {
					"description": "Substantiv, maskulin - 1a. das Ausgleichen von Ungleichheiten, Gegensätzlichkeiten, …1b. etwas, was ein Gleichgewicht wiederherstellt; …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1a. das Ausgleichen von Ungleichheiten, Gegensätzlichkeiten, …1b. etwas, was ein Gleichgewicht wiederherstellt; …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Ausgleich",
					"similarWords": [
						"Ausgleicher",
						"ausgleichbar",
						"Ausgleichbecken",
						"Ausgleichsteuer",
						"Ausgleichschicht",
						"Ausgleichszahlung",
						"Zeitausgleich",
						"Etatausgleich",
						"Temperaturausgleich",
						"Zuschussbogen",
						"ausgleichen",
						"Schadensersatz",
						"Deemphasis",
						"Schadloshaltung",
						"Mankogeld",
						"Nivellierung",
						"Härteausgleich",
						"Randausgleich",
						"Freizeitausgleich"
					]
				}
			}
		},
		"zustande": {
			"word": "zustande",
			"data": {
				"_id": "591899fcce905c0816aaa349",
				"word": "zustande",
				"data": {
					"similarWords": [
						"zustande, zu Stande",
						"zustande bringen, zu Stande bringen",
						"zustande kommen, zu Stande kommen",
						"Nicht-zustande-Kommen, Nicht-zu-Stande-Kommen",
						"Zustandekommen",
						"Zustandebringen",
						"Leerheit",
						"Isomorphie",
						"vertraglos",
						"Normalzustand",
						"unterrichten",
						"aufbringen",
						"Ergriffensein",
						"Rennfieber",
						"Roheisen",
						"Verliebtsein",
						"Pflückreife",
						"Witwenschaft",
						"Leblosigkeit",
						"Manque"
					]
				}
			}
		},
		"bringen": {
			"word": "bringen",
			"data": {
				"_id": "59189a00ce905c0816aaa38b",
				"word": "bringen",
				"data": {
					"description": "unregelmäßiges Verb - 1a. an einen bestimmten Ort schaffen, …1b. zu jemandem tragen und übergeben; 2. an einen bestimmten Ort begleiten",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/bringen",
					"similarWords": [
						"zustande bringen, zu Stande bringen",
						"Profit bringend, profitbringend",
						"Segen bringend, segenbringend",
						"Unheil bringend, unheilbringend",
						"Trost bringend, trostbringend",
						"Heil bringend, heilbringend",
						"Gefahr bringend, gefahrbringend",
						"Glück bringend, glückbringend",
						"Hilfe bringend, hilfebringend",
						"fruchtbringend, Frucht bringend",
						"fertigbringen, fertig bringen",
						"Unglück bringend, unglückbringend",
						"Verderben bringend, verderbenbringend",
						"gewinnbringend, Gewinn bringend",
						"brachte",
						"herbringen",
						"Entsatz",
						"Freudenbotschaft",
						"hinaufbringen"
					]
				}
			}
		},
		"infinitesimale": {
			"word": "infinitesimale",
			"data": {
				"_id": "591899fbce905c0816aaa331",
				"word": "infinitesimale",
				"data": {
					"similarWords": [
						"infinitesimal"
					]
				}
			}
		},
		"Politik": {
			"word": "Politik",
			"data": {
				"_id": "591899fcce905c0816aaa33f",
				"word": "Politik",
				"data": {
					"description": "Substantiv, feminin - 1. auf die Durchsetzung bestimmter Ziele …2. taktierendes Verhalten, zielgerichtetes Vorgehen",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. auf die Durchsetzung bestimmter Ziele …2. taktierendes Verhalten, zielgerichtetes Vorgehen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Politik",
					"similarWords": [
						"Vogel-Strauß-Politik",
						"Politika",
						"politikfähig",
						"Politikbetrieb",
						"Politikwechsel",
						"Politikjargon",
						"Politikum",
						"Politiker",
						"Politikus",
						"Politikfähigkeit",
						"Politikberater",
						"Stalin",
						"Ho Chi Minh",
						"Lenin",
						"Chruschtschow",
						"Medwedew",
						"Putin",
						"Prodi",
						"Rabin"
					]
				}
			}
		},
		"Bedürfnisse": {
			"word": "Bedürfnisse",
			"data": {
				"_id": "591899fece905c0816aaa367",
				"word": "Bedürfnisse",
				"data": {
					"similarWords": [
						"Bedürfnis",
						"bedürfnislos",
						"Rundum-sorglos-Paket",
						"Rundumversorgung",
						"multifunktional",
						"pflegegerecht",
						"Wirtschaftsgut",
						"Schulgrammatik",
						"Schulatlas",
						"ad hominem",
						"Mädchenarbeit",
						"Schulausgabe",
						"Schulkarte",
						"blindengerecht",
						"frauenaffin",
						"unbefriedigt",
						"Unempfänglichkeit",
						"Pilotenkoffer",
						"Spezialwörterbuch",
						"bürgernah"
					]
				}
			}
		},
		"Fähigkeiten": {
			"word": "Fähigkeiten",
			"data": {
				"_id": "591899fdce905c0816aaa35a",
				"word": "Fähigkeiten",
				"data": {
					"similarWords": [
						"Fähigkeit",
						"Vorbildung",
						"Können",
						"Soft Skill",
						"Geistesgaben",
						"Rüstzeug",
						"brachliegen",
						"Hard Skill",
						"Begabung",
						"Paragnost",
						"Höherqualifizierung",
						"Kompetenz",
						"rücksichtlich",
						"buchhändlerisch",
						"feinmotorisch",
						"Zauberpriester",
						"Fertigkeit",
						"begabt",
						"ebenbürtig",
						"unbewiesen"
					]
				}
			}
		},
		"Interessen": {
			"word": "Interessen",
			"data": {
				"_id": "591899fece905c0816aaa36a",
				"word": "Interessen",
				"data": {
					"similarWords": [
						"Interesse",
						"Interessentin",
						"volksfeindlich",
						"Cliquenbildung",
						"Interessensphäre",
						"Interessentenweg",
						"Partikularismus",
						"Treupflicht",
						"Treuepflicht",
						"dynastisch",
						"gemeinverträglich",
						"Staatswohl",
						"Hintansetzung",
						"Bauernpartei",
						"Beamtengewerkschaft",
						"Schöngeisterei",
						"Interessenabwägung",
						"Städtetag",
						"Elternverein",
						"Beamtenbund"
					]
				}
			}
		},
		"Wünsche": {
			"word": "Wünsche",
			"data": {
				"_id": "591899fcce905c0816aaa348",
				"word": "Wünsche",
				"data": {
					"similarWords": [
						"wünschen",
						"wünschenswert",
						"Wünschelrute",
						"erfüllbar",
						"Wünschelrutengängerin",
						"Wünschelrutengänger",
						"Wünschelrutengeherin",
						"Wünschelrutengeher",
						"wunschlos",
						"Wunsch",
						"zufriedenstellen, zufrieden stellen",
						"Hintanstellung",
						"wunschlos glücklich",
						"hintan-, auch hintenan-",
						"Kundenorientierung",
						"Sexualobjekt",
						"frauenaffin",
						"allerallerbeste, allerallerbester, allerallerbestes",
						"Customizing",
						"Analerotiker"
					]
				}
			}
		},
		"Zwänge": {
			"word": "Zwänge",
			"data": {
				"_id": "591899fdce905c0816aaa35c",
				"word": "Zwänge",
				"data": {
					"similarWords": [
						"zwänge",
						"Zwängerei",
						"zwängen",
						"Zwang",
						"unabweisbar",
						"extrinsisch",
						"unausweichlich",
						"einzwängen",
						"durchzwängen",
						"hindurchzwängen",
						"vorbeizwängen",
						"Selbstbestimmung",
						"abwerfen"
					]
				}
			}
		},
		"zivilen": {
			"word": "zivilen",
			"data": {
				"_id": "59189a00ce905c0816aaa38a",
				"word": "zivilen",
				"data": {
					"similarWords": [
						"Atomprogramm",
						"Dienstflucht",
						"Gouvernement",
						"Luftüberwachung",
						"Atompolitik",
						"Militarismus",
						"Militäranwärter",
						"Sicherheitsoffizier",
						"entfestigen",
						"zivil",
						"Funker",
						"Atomausstieg",
						"Dual-Use-Gut"
					]
				}
			}
		},
		"empörend": {
			"word": "empörend",
			"data": {
				"_id": "59189a00ce905c0816aaa389",
				"word": "empörend",
				"data": {
					"description": "Adjektiv - Empörung hervorrufend; unerhört, skandalös",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "Empörung hervorrufend; unerhört, skandalös"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/empoerend",
					"similarWords": [
						"hanebüchen",
						"unfasslich",
						"himmelschreiend",
						"ungeheuerlich",
						"schimpflich",
						"skandalös",
						"schreiend",
						"unglaublich",
						"unerhört",
						"monströs",
						"haarsträubend",
						"unfassbar",
						"Affenschande",
						"schändlich",
						"kriminell",
						"pervers",
						"unmöglich",
						"auspfeifen",
						"empören"
					]
				}
			}
		},
		"dumme": {
			"word": "dumme",
			"data": {
				"_id": "591899fece905c0816aaa366",
				"word": "dumme",
				"data": {
					"similarWords": [
						"Dummerl",
						"saudumm",
						"strohdumm",
						"horndumm",
						"stockdumm",
						"erzdumm",
						"dummfrech",
						"Dummenfang",
						"Dummerchen",
						"Dummerling",
						"Dummerjan",
						"Dummejungenstreich, Dumme-Jungen-Streich",
						"dumm kommen, dummkommen",
						"dummerweise",
						"Dummsdorf",
						"Gefrage",
						"Riesendummheit",
						"Erzdummheit",
						"dalken",
						"Trine"
					]
				}
			}
		},
		"Unrecht": {
			"word": "Unrecht",
			"data": {
				"_id": "591899face905c0816aaa310",
				"word": "Unrecht",
				"data": {
					"description": "Substantiv, Neutrum - 1a. dem Recht, der Gerechtigkeit entgegengesetztes, …1b. als unrecht empfundene Verhaltensweise, Handlung, …1c. als Störung der rechtlichen oder …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1a. dem Recht, der Gerechtigkeit entgegengesetztes, …1b. als unrecht empfundene Verhaltensweise, Handlung, …1c. als Störung der rechtlichen oder …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Unrecht",
					"similarWords": [
						"unrecht",
						"unrechtmäßig",
						"Rechtsempfinden",
						"Unrechtmäßigkeit",
						"Unrechtsregime",
						"Unrechtsstaat",
						"Gesetzwidrigkeit",
						"Rechtsanschauung",
						"unrechtmäßigerweise",
						"Ungerechtigkeit",
						"Rechtsverletzung",
						"Reat",
						"Diskrimination",
						"Rechtsbewusstsein",
						"Unrechtsbewusstsein",
						"Rechtsvorstellung",
						"Opfergruppe",
						"Sühnetod",
						"Opferverband"
					]
				}
			}
		},
		"Wort": {
			"word": "Wort",
			"data": {
				"_id": "591899ffce905c0816aaa37b",
				"word": "Wort",
				"data": {
					"description": "Substantiv, Neutrum - 1a. kleinste selbstständige sprachliche Einheit von …1b. Wort in speziellem Hinblick auf …2. etwas, was jemand als Ausdruck …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1a. kleinste selbstständige sprachliche Einheit von …1b. Wort in speziellem Hinblick auf …2. etwas, was jemand als Ausdruck …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Wort",
					"similarWords": [
						"Wort-Bild-Marke",
						"Wortschrift",
						"Wortschwall",
						"wortbrüchig",
						"wortmächtig",
						"Wortkargheit",
						"Wortreichtum",
						"Wortstellung",
						"Wortprägung",
						"Worttrennung",
						"Wortkreuzung",
						"Wortfrequenz",
						"Wortherkunft",
						"wortreich",
						"wortident",
						"Wortbruch",
						"Wortspiel",
						"Wortstamm",
						"Wortmüll"
					]
				}
			}
		},
		"naturgegeben": {
			"word": "naturgegeben",
			"data": {
				"_id": "591899fbce905c0816aaa32c",
				"word": "naturgegeben",
				"data": {
					"description": "Adjektiv - unabwendbar, vom menschlichen Willen nicht beeinflussbar",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "unabwendbar, vom menschlichen Willen nicht beeinflussbar"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/naturgegeben",
					"similarWords": [
						"naturgesetzlich",
						"Kunstbau",
						"gottgegeben",
						"Sozialdarwinismus",
						"vorbestimmt",
						"schicksalhaft"
					]
				}
			}
		},
		"steckt": {
			"word": "steckt",
			"data": {
				"_id": "591899fbce905c0816aaa32f",
				"word": "steckt",
				"data": {
					"similarWords": [
						"Verstecktheit",
						"Stecktuch",
						"versteckt",
						"gesteckt",
						"selbst gesteckt, selbstgesteckt",
						"hochgesteckt",
						"Steckmuschel",
						"Sattelrohr",
						"Hemdenzipfel",
						"Fahrtenmesser",
						"Examensvorbereitung",
						"cherchez la femme",
						"DNA",
						"Verschwörermiene",
						"Sparbüchse",
						"Klebe",
						"Biestigkeit",
						"Einsiedlerkrebs",
						"Mahlsand",
						"Herostrat"
					]
				}
			}
		},
		"wissen": {
			"word": "wissen",
			"data": {
				"_id": "591899fbce905c0816aaa32d",
				"word": "wissen",
				"data": {
					"description": "unregelmäßiges Verb - 1. durch eigene Erfahrung oder Mitteilung …2. über jemanden, etwas unterrichtet sein; …3. davon Kenntnis haben, sicher sein, …",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/wissen",
					"similarWords": [
						"Wissen",
						"wissen lassen, wissenlassen",
						"weiß",
						"wohl wissend",
						"meines Wissens",
						"Wissenschafter",
						"Wissenschaft",
						"wissentlich",
						"wissenswert",
						"Wissensgut",
						"wissenschaftlich",
						"Wissenschaftler",
						"Wissenschafterin",
						"Wissenschaftszweig",
						"Wissenschaftspreis",
						"Wissenschaftspark",
						"Wissenschaftsethik",
						"m. W.",
						"u. W."
					]
				}
			}
		},
		"schwere": {
			"word": "schwere",
			"data": {
				"_id": "591899fbce905c0816aaa32e",
				"word": "schwere",
				"data": {
					"similarWords": [
						"Schwere",
						"schwerelos",
						"Schwerenot",
						"Schwerefeld",
						"Schweregrad",
						"Schwerenöter",
						"Schweremessung",
						"Schwerelosigkeit",
						"Schwerenöterin",
						"Schwereanomalie",
						"Tropika",
						"Gien",
						"Gasödem",
						"Wahldebakel",
						"Tropenfieber",
						"Sittlichkeitsverbrechen",
						"Schanzarbeit",
						"Wahlschlappe",
						"Schwerverbrecher",
						"Schwerarbeit"
					]
				}
			}
		},
		"Hüftluxation": {
			"word": "Hüftluxation",
			"data": {
				"_id": "591899fbce905c0816aaa322",
				"word": "Hüftluxation",
				"data": {
					"similarWords": []
				}
			}
		},
		"natürliche": {
			"word": "natürliche",
			"data": {
				"_id": "591899fcce905c0816aaa343",
				"word": "natürliche",
				"data": {
					"similarWords": [
						"natürlicherweise",
						"Physis",
						"naturgesetzlich",
						"Genius",
						"natürlich",
						"naturnah",
						"unbearbeitet",
						"naturgetreu",
						"originalgetreu",
						"juristisch",
						"naturidentisch",
						"Naturkrause",
						"folgerichtig",
						"unverfälscht",
						"kunstlos",
						"sans gêne",
						"naturgemäß",
						"umweltverträglich",
						"außerehelich",
						"nicht ehelich, nichtehelich"
					]
				}
			}
		},
		"gesellschaftliches": {
			"word": "gesellschaftliches",
			"data": {
				"_id": "591899fdce905c0816aaa351",
				"word": "gesellschaftliches",
				"data": {
					"similarWords": [
						"Existenzberechtigung",
						"Gesellschaftsabend",
						"sozialräumlich",
						"Sozialprestige",
						"Frackzwang",
						"Kleptokratie",
						"Frauenrolle",
						"Gesellschaftsroman",
						"Korporatismus",
						"Abendeinladung",
						"gesellschaftlich",
						"soziokulturell",
						"Statusdenken",
						"Soziogenese",
						"Gleichbehandlungsgesetz",
						"Frauenrecht",
						"Interdependenz",
						"Meritokratie",
						"Konsensgesellschaft",
						"Ständeordnung"
					]
				}
			}
		},
		"auszubalancieren": {
			"word": "auszubalancieren",
			"data": {
				"_id": "591899ffce905c0816aaa379",
				"word": "auszubalancieren",
				"data": {
					"similarWords": [
						"ausbalancieren"
					]
				}
			}
		},
		"blo": {
			"word": "blo",
			"data": {
				"_id": "59189a00ce905c0816aaa394",
				"word": "blo",
				"data": {
					"similarWords": [
						"en bloc",
						"Blog",
						"bloß",
						"Block",
						"blond",
						"Bloch",
						"Blond",
						"Blockierung",
						"Blow-up, Blowup",
						"Blocking",
						"Blockung",
						"blockig",
						"blocken",
						"Blocker",
						"Blocher",
						"blochen",
						"Pop-up-Blocker"
					]
				}
			}
		},
		"Sozialmaterial": {
			"word": "Sozialmaterial",
			"data": {
				"_id": "591899fcce905c0816aaa339",
				"word": "Sozialmaterial",
				"data": {
					"similarWords": []
				}
			}
		},
		"sehen": {
			"word": "sehen",
			"data": {
				"_id": "591899fece905c0816aaa35e",
				"word": "sehen",
				"data": {
					"description": "starkes Verb - 1. mit dem Gesichtssinn, mit den …2a. den Blick irgendwohin richten, gerichtet …2b. Aufmerksamkeit, Interesse, Erwartungen auf jemanden, …",
					"wordProperties": {
						"type": "starkes",
						"definition": "1. mit dem Gesichtssinn, mit den …2a. den Blick irgendwohin richten, gerichtet …2b. Aufmerksamkeit, Interesse, Erwartungen auf jemanden, …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/sehen",
					"similarWords": [
						"sehen lassen, sehenlassen",
						"sehenswert",
						"sehenswürdig",
						"Bares",
						"Sehgewohnheit",
						"Sehenswürdigkeit",
						"Schaubegier",
						"Blutspur",
						"gesehen",
						"siehe",
						"sieht",
						"siehst",
						"sähe",
						"sieh",
						"sah",
						"äh",
						"Taubblinde",
						"Taubblinder",
						"Schockfoto"
					]
				}
			}
		},
		"Einmaligkeit": {
			"word": "Einmaligkeit",
			"data": {
				"_id": "591899fcce905c0816aaa33a",
				"word": "Einmaligkeit",
				"data": {
					"description": "Substantiv, feminin - das Einmaligsein",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "das Einmaligsein"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Einmaligkeit",
					"similarWords": [
						"Alleinstellung",
						"Einzigartigkeit",
						"Sehenswürdigkeit"
					]
				}
			}
		},
		"Unversehrtheit": {
			"word": "Unversehrtheit",
			"data": {
				"_id": "591899fbce905c0816aaa330",
				"word": "Unversehrtheit",
				"data": {
					"description": "Substantiv, feminin - das Unversehrtsein",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "das Unversehrtsein"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Unversehrtheit",
					"similarWords": [
						"körperlich",
						"Leib"
					]
				}
			}
		},
		"garantieren": {
			"word": "garantieren",
			"data": {
				"_id": "591899fece905c0816aaa35d",
				"word": "garantieren",
				"data": {
					"description": "schwaches Verb - a. (durch Versprechen) fest zusichern, zusagen; b. gewährleisten, sicherstellen, sichern; c. die Garantie übernehmen, sich verbürgen",
					"wordProperties": {
						"type": "schwaches",
						"definition": "a. (durch Versprechen) fest zusichern, zusagen; b. gewährleisten, sicherstellen, sichern; c. die Garantie übernehmen, sich verbürgen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/garantieren",
					"similarWords": [
						"Datenechtheit",
						"Grundrecht",
						"gutsagen",
						"Magna Charta",
						"verbriefen",
						"einstehen",
						"sicherstellen",
						"Integrität",
						"zubilligen",
						"bürgen",
						"zusichern",
						"verbürgen",
						"sichern",
						"Bewilligungszeitraum",
						"gewährleisten",
						"verantworten",
						"absichern",
						"haften",
						"versichern"
					]
				}
			}
		},
		"akustisch": {
			"word": "akustisch",
			"data": {
				"_id": "591899fdce905c0816aaa352",
				"word": "akustisch",
				"data": {
					"description": "Adjektiv - 1. die Akustik betreffend; 2. den Schall, Klang betreffend, klanglich, …",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1. die Akustik betreffend; 2. den Schall, Klang betreffend, klanglich, …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/akustisch",
					"similarWords": [
						"Seelentaubheit",
						"Schallzeichen",
						"Polizeisirene",
						"Hörbereich",
						"Schlaguhr",
						"Nebelboje",
						"Tonqualität",
						"Tonsignet",
						"gennemisch",
						"durchhörbar",
						"Nebelhorn",
						"Schallsignal",
						"Warnsirene",
						"Dokumentaraufnahme",
						"Spieluhr",
						"Tonspur",
						"Tonträger",
						"Audioguide",
						"Zeichenerkennung"
					]
				}
			}
		},
		"thematisieren": {
			"word": "thematisieren",
			"data": {
				"_id": "591899fdce905c0816aaa359",
				"word": "thematisieren",
				"data": {
					"description": "schwaches Verb - zum Thema von etwas machen, als Thema diskutieren",
					"wordProperties": {
						"type": "schwaches",
						"definition": "zum Thema von etwas machen, als Thema diskutieren"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/thematisieren",
					"similarWords": [
						"Thematisierung",
						"darlegen",
						"deutlich machen",
						"erhellen",
						"handeln",
						"sprechen"
					]
				}
			}
		},
		"Artikel": {
			"word": "Artikel",
			"data": {
				"_id": "59189a01ce905c0816aaa3ac",
				"word": "Artikel",
				"data": {
					"description": "Substantiv, maskulin - 1. Aufsatz, Abhandlung; Beitrag; 2a. [mit einer Nummer gekennzeichneter] Abschnitt …2b. Glaubenssatz; Abschnitt eines Bekenntnisses oder …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. Aufsatz, Abhandlung; Beitrag; 2a. [mit einer Nummer gekennzeichneter] Abschnitt …2b. Glaubenssatz; Abschnitt eines Bekenntnisses oder …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Artikel",
					"similarWords": [
						"Non-Book-Artikel, Nonbookartikel",
						"Non-Food-Artikel, Nonfoodartikel",
						"Art.",
						"Artikelreihe",
						"Artikelserie",
						"Artikelschreiber",
						"Geschlechtswort",
						"spaltenlang",
						"Handelsartikel",
						"Konsumartikel",
						"Artikelschreiberin",
						"Verkaufsartikel",
						"Einzelanfertigung",
						"Importartikel",
						"Vertragspunkt",
						"dem",
						"Zeitungsartikel",
						"Modeartikel",
						"Verkaufsprogramm"
					]
				}
			}
		},
		"Reden": {
			"word": "Reden",
			"data": {
				"_id": "591899fcce905c0816aaa344",
				"word": "Reden",
				"data": {
					"similarWords": [
						"reden",
						"Redensart",
						"Redenschreiber",
						"Redenschreiberin",
						"redensartlich",
						"blödeln",
						"schwallen",
						"Wortemacherei",
						"Parrhesie",
						"ketzern",
						"schnadern",
						"dalken",
						"losreden",
						"hämen",
						"Rede",
						"aufwieglerisch",
						"schleimen",
						"kurzfassen",
						"olynthisch",
						"ehrverletzend"
					]
				}
			}
		},
		"Briefe": {
			"word": "Briefe",
			"data": {
				"_id": "591899fece905c0816aaa362",
				"word": "Briefe",
				"data": {
					"similarWords": [
						"briefen",
						"Briefeinwurf",
						"Sendbrief",
						"Musterbrief",
						"brieflich",
						"Briefschreiber",
						"Trauerbrief",
						"Einschreibbrief",
						"Einschreibebrief",
						"Drohbrief",
						"Begleitbrief",
						"Erpresserbrief",
						"Protestbrief",
						"Wertbrief",
						"Luftpostbrief",
						"Feldpostbrief",
						"Inlandsbrief",
						"Auslandsbrief",
						"Antwortbrief",
						"Kartenbrief"
					]
				}
			}
		},
		"die": {
			"word": "die",
			"data": {
				"_id": "591899ffce905c0816aaa37a",
				"word": "die",
				"data": {
					"similarWords": [
						"an die",
						"pro die",
						"Die Linke",
						"Die Linke.PDS",
						"dies",
						"Dieb",
						"Bündnis 90/Die Grünen",
						"St. Vincent und die Grenadinen",
						"Rund-um-die-Uhr-Bewachung",
						"der, die, das",
						"Dienst",
						"Dierk",
						"Dieu le veut",
						"mon dieu",
						"dies und das",
						"Dielenbrett",
						"Dienerschar",
						"Diebesfahrt"
					]
				}
			}
		},
		"Gefängnis": {
			"word": "Gefängnis",
			"data": {
				"_id": "591899fece905c0816aaa360",
				"word": "Gefängnis",
				"data": {
					"description": "Substantiv, Neutrum - 1. Gebäude, Anstalt für Häftlinge mit …2. Gefängnisstrafe",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. Gebäude, Anstalt für Häftlinge mit …2. Gefängnisstrafe"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Gefaengnis",
					"similarWords": [
						"Gefängnishof",
						"Gefängnishaft",
						"Gefängnismauer",
						"Gefängniszelle",
						"Gefängnisarzt",
						"Gefängniswesen",
						"Fronfeste",
						"Gefängnispersonal",
						"Gefängnisstrafe",
						"Gefängnisinsasse",
						"Gefängnisinsassin",
						"Gefängnisbeamter",
						"Gefängnisdirektor",
						"Gefängnisleitung",
						"Gefängnispfarrer",
						"Gefängnisaufseher",
						"Gefängnisrevolte",
						"Gefängnisbeamtin",
						"Gefängnisärztin"
					]
				}
			}
		},
		"geschrieben": {
			"word": "geschrieben",
			"data": {
				"_id": "591899fdce905c0816aaa35b",
				"word": "geschrieben",
				"data": {
					"description": "siehe schreiben",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/geschrieben",
					"similarWords": [
						"selbst geschrieben, selbstgeschrieben",
						"akkordisch",
						"Kinderbuch",
						"Runenschrift",
						"Maschinenschrift",
						"Schreibmaschinenschrift",
						"Himmelsschrift",
						"Kammeroper",
						"Texterkennung",
						"Papsturkunde",
						"handgeschrieben",
						"Geschmiere",
						"idiografisch, idiographisch",
						"maschinenschriftlich",
						"bilingue",
						"bilinguisch",
						"spätlateinisch",
						"Gekrakele",
						"Gekrakle"
					]
				}
			}
		},
		"Liebesbriefe": {
			"word": "Liebesbriefe",
			"data": {
				"_id": "59189a00ce905c0816aaa399",
				"word": "Liebesbriefe",
				"data": {
					"similarWords": [
						"Liebesbrief",
						"Billetdoux",
						"stalken",
						"Heroide"
					]
				}
			}
		},
		"altmodischen": {
			"word": "altmodischen",
			"data": {
				"_id": "59189a00ce905c0816aaa39a",
				"word": "altmodischen",
				"data": {
					"similarWords": [
						"Spießbürger"
					]
				}
			}
		},
		"melancholischen": {
			"word": "melancholischen",
			"data": {
				"_id": "591899ffce905c0816aaa376",
				"word": "melancholischen",
				"data": {
					"similarWords": [
						"Byronismus",
						"melancholisch"
					]
				}
			}
		},
		"Keuschheit": {
			"word": "Keuschheit",
			"data": {
				"_id": "591899fece905c0816aaa35f",
				"word": "Keuschheit",
				"data": {
					"description": "Substantiv, feminin - a. sexuelle Enthaltsamkeit; b. Sittsamkeit; c. moralische Reinheit, Integrität",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "a. sexuelle Enthaltsamkeit; b. Sittsamkeit; c. moralische Reinheit, Integrität"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Keuschheit",
					"similarWords": [
						"Sittsamkeit",
						"Unverdorbenheit",
						"Enthaltung",
						"Züchtigkeit",
						"Keuschheitsgelübde",
						"Keuschheitsgürtel",
						"Abstinenz",
						"Enthaltsamkeit",
						"Einhorn",
						"Tugend",
						"Zölibat",
						"Askese",
						"Reinheit",
						"Gelübde",
						"in puncto",
						"Unschuld"
					]
				}
			}
		},
		"all": {
			"word": "all",
			"data": {
				"_id": "591899ffce905c0816aaa37c",
				"word": "all",
				"data": {
					"description": "Pronomen und Zahlwort - 1a. ganz, gesamt; 1a. auf etwas …1b. jeder, jedes, jegliches; 1b. stärker …1c. alle Leute hier; jeder Anwesende; …",
					"wordProperties": {
						"type": "Pronomen",
						"definition": "1a. ganz, gesamt; 1a. auf etwas …1b. jeder, jedes, jegliches; 1b. stärker …1c. alle Leute hier; jeder Anwesende; …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/all",
					"similarWords": [
						"All",
						"i. Allg.",
						"all-inclusive",
						"all right!",
						"all'ottava",
						"all'ongharese",
						"all'ungherese",
						"all'unisono",
						"all'ongarese",
						"allüberall",
						"Allgäuer",
						"alldeutsch",
						"Allroundspieler",
						"allmählich",
						"allzugleich",
						"alltäglich",
						"allmächtig",
						"allgäuisch"
					]
				}
			}
		},
		"Stellen": {
			"word": "Stellen",
			"data": {
				"_id": "59189a00ce905c0816aaa395",
				"word": "Stellen",
				"data": {
					"similarWords": [
						"stellen",
						"instand stellen",
						"kalt stellen, kaltstellen",
						"warm stellen, warmstellen",
						"gerade stellen, geradestellen",
						"tot stellen",
						"schräg stellen, schrägstellen",
						"scharf stellen, scharfstellen",
						"klein stellen, kleinstellen",
						"kühl stellen, kühlstellen",
						"ruhig stellen, ruhigstellen",
						"stellenlos",
						"Stellenwert",
						"Stellenmarkt",
						"Stellenplan",
						"stellenweise",
						"stellensuchend",
						"Stellenabbau",
						"Stellenlose",
						"Stellenloser"
					]
				}
			}
		},
		"abgegangen": {
			"word": "abgegangen",
			"data": {
				"_id": "591899fece905c0816aaa361",
				"word": "abgegangen",
				"data": {
					"description": "abgehen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/abgegangen",
					"similarWords": [
						"Fehlgeburt",
						"ab",
						"los",
						"Riemen",
						"ab sein",
						"abgehen",
						"fehlen",
						"verlassen"
					]
				}
			}
		},
		"Berlin": {
			"word": "Berlin",
			"data": {
				"_id": "591899fcce905c0816aaa346",
				"word": "Berlin",
				"data": {
					"description": "Substantiv, Neutrum - Hauptstadt von Deutschland und deutsches Bundesland",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "Hauptstadt von Deutschland und deutsches Bundesland"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Berlin",
					"similarWords": [
						"Alt-Berlin",
						"Berlin-Treptow",
						"Berlin-Köpenick",
						"Berlin-Pankow",
						"Berlin-Reinickendorf",
						"Berlin-Neukölln",
						"Berlin-Friedrichshain",
						"Berlin-Steglitz",
						"Berlin-Wedding",
						"Berlin-Lichtenberg",
						"Berlin-Marzahn",
						"Berlin-Dahlem",
						"Berlin-Zehlendorf",
						"Berlin-Wilmersdorf",
						"Berlin-Johannisthal",
						"Groß-Berlin",
						"Berliner",
						"Berline",
						"Berlin-Prenzlauer Berg"
					]
				}
			}
		},
		"gelebt": {
			"word": "gelebt",
			"data": {
				"_id": "591899ffce905c0816aaa387",
				"word": "gelebt",
				"data": {
					"similarWords": [
						"Eiszeitmensch",
						"lebenswert",
						"Blumenkind",
						"ungelebt",
						"Nestor",
						"Biopic",
						"Vorhölle",
						"Heiliger",
						"Heilige",
						"nebeneinanderher",
						"leben",
						"lebendig",
						"behalten",
						"Hof",
						"Zeit"
					]
				}
			}
		},
		"gearbeitet": {
			"word": "gearbeitet",
			"data": {
				"_id": "591899fcce905c0816aaa347",
				"word": "gearbeitet",
				"data": {
					"similarWords": [
						"saphiren",
						"Holzfigur",
						"Arbeitsmethode",
						"Biberpelz",
						"Schafspelz",
						"Ajourfassung",
						"Bürozeit",
						"Waffenschmied",
						"Arbeitstisch",
						"Maßsachen",
						"maßgearbeitet",
						"Nadelspitze",
						"Arbeitssitzung",
						"Kabinettmalerei",
						"Gruseleffekt",
						"Schafpelz",
						"Maßanzug",
						"Bummelstreik",
						"Schoßbluse",
						"Hohlsonde"
					]
				}
			}
		},
		"Atem": {
			"word": "Atem",
			"data": {
				"_id": "59189a01ce905c0816aaa3ab",
				"word": "Atem",
				"data": {
					"description": "Substantiv, maskulin - 1. das Atmen; Atmung; 2. ein- und ausgeatmete Luft",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "und ausgeatmete Luft"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Atem",
					"similarWords": [
						"Atemproblem",
						"Atemzentrum",
						"Atemfrequenz",
						"Atemlähmung",
						"Atemluft",
						"Atemschutzmaske",
						"Atembeschwerden",
						"Atemholen",
						"Atempause",
						"Atemmaske",
						"Atemübung",
						"Atembeklemmung",
						"atemraubend",
						"Atemtechnik",
						"atemberaubend",
						"Atemlosigkeit",
						"Atemstillstand",
						"Atemgymnastik",
						"Atemschutzgerät"
					]
				}
			}
		},
		"aufgenommen": {
			"word": "aufgenommen",
			"data": {
				"_id": "591899fece905c0816aaa363",
				"word": "aufgenommen",
				"data": {
					"similarWords": [
						"zeitlupenhaft",
						"rezeptorisch",
						"Digitalfoto",
						"Urlaubsfoto",
						"Tonbandprotokoll",
						"Weitwinkelaufnahme",
						"Ingesta",
						"mono",
						"Amateurfoto",
						"Staatsanleihe",
						"Kommunalkredit",
						"Digitalvideo",
						"Sprechplatte",
						"stereo",
						"achselzuckend",
						"körperfremd",
						"FDJ",
						"UNESCO-Welterbe",
						"Hochzeitsbild",
						"Kinderkrankenhaus"
					]
				}
			}
		},
		"denkt": {
			"word": "denkt",
			"data": {
				"_id": "59189a00ce905c0816aaa396",
				"word": "denkt",
				"data": {
					"similarWords": [
						"Denktätigkeit",
						"Denktradition",
						"Empiriker",
						"Subjektivist",
						"Querdenker",
						"Verbesserer",
						"Verbessrer",
						"mitdenken",
						"honi (auch: honni, honny) soit qui mal y pense",
						"Mördergrube",
						"vorheucheln",
						"ertappen",
						"Nächste",
						"Bewegtheit",
						"bloß",
						"Rückkehr",
						"Zungenschlag",
						"heucheln",
						"konventionell",
						"einnisten"
					]
				}
			}
		},
		"gleichmä": {
			"word": "gleichmä",
			"data": {
				"_id": "59189a00ce905c0816aaa398",
				"word": "gleichmä",
				"data": {
					"similarWords": [
						"gleichmäßig",
						"gleichmächtig",
						"Gleichmäßigkeit"
					]
				}
			}
		},
		"ig": {
			"word": "ig",
			"data": {
				"_id": "591899fdce905c0816aaa34b",
				"word": "ig",
				"data": {
					"similarWords": [
						"IG",
						"Ignoszenz",
						"-igkeit",
						"ignoszieren",
						"Ignatius",
						"Ignitron",
						"ignoramus et ignorabimus",
						"Ignipunktur",
						"Ignorantentum",
						"ignorant",
						"Ignoranz",
						"Igluzelt",
						"Neuigkeit",
						"Schlauigkeit",
						"Rauigkeit",
						"Ignorant",
						"Böigkeit",
						"ignorieren",
						"böig",
						"tauig"
					]
				}
			}
		},
		"bewegt": {
			"word": "bewegt",
			"data": {
				"_id": "591899fdce905c0816aaa34c",
				"word": "bewegt",
				"data": {
					"description": "Adjektiv - 1a. in Bewegung befindlich, unruhig; 1b. ereignisreich, unruhig; 2. durch Bewegung gekennzeichnet, von Bewegung …",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1a. in Bewegung befindlich, unruhig; 1b. ereignisreich, unruhig; 2. durch Bewegung gekennzeichnet, von Bewegung …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/bewegt",
					"similarWords": [
						"-bewegt",
						"schwach bewegt, schwachbewegt",
						"tief bewegt, tiefbewegt",
						"Bewegtheit",
						"agitato",
						"kabbelig",
						"andantino",
						"Warpschifffahrt",
						"Kiefergelenk",
						"Höhensteuer",
						"Kranwinde",
						"Kaumuskel",
						"Steckschwert",
						"Ausfallbein",
						"meno",
						"affettuoso",
						"ereignisreich",
						"Tribologie",
						"Laufband"
					]
				}
			}
		},
		"hört": {
			"word": "hört",
			"data": {
				"_id": "591899fdce905c0816aaa350",
				"word": "hört",
				"data": {
					"similarWords": [
						"Hörthörtruf",
						"Hörtest",
						"unerhört",
						"ungehört",
						"Radiohörer",
						"Rundfunkhörer",
						"verworren",
						"Hänselei",
						"Wortfetzen",
						"offensichtlich",
						"anscheinend",
						"aufjubeln",
						"offenbar",
						"Gezänk",
						"auslernen",
						"Jour fixe",
						"Vernehmen",
						"Nettigkeit",
						"Horcher"
					]
				}
			}
		},
		"genau": {
			"word": "genau",
			"data": {
				"_id": "591899fdce905c0816aaa34d",
				"word": "genau",
				"data": {
					"description": "Adjektiv - a. mit einem Muster, Vorbild, einer …b. gründlich, gewissenhaft ins Einzelne gehend; …",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "a. mit einem Muster, Vorbild, einer …b. gründlich, gewissenhaft ins Einzelne gehend; …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/genau_akkurat_gewissenhaft",
					"similarWords": [
						"genau genommen",
						"genauso gut",
						"genauso",
						"genauso häufig",
						"genauso lange",
						"genausovielmal, genauso viel Mal",
						"genauestens",
						"Genauigkeit",
						"genaustens",
						"detailgenau",
						"dosierbar",
						"gemessen",
						"hinhören",
						"skrupulös",
						"millimetergenau",
						"centgenau",
						"auskalkulieren",
						"ebendaher"
					]
				}
			}
		},
		"winzige": {
			"word": "winzige",
			"data": {
				"_id": "591899fece905c0816aaa365",
				"word": "winzige",
				"data": {
					"similarWords": [
						"klitzeklein",
						"kleinwinzig",
						"klimperklein",
						"Winzling",
						"winzig",
						"liliputanisch",
						"Winzigkeit",
						"fipsig",
						"piepsig",
						"zwergenhaft, seltener zwerghaft",
						"Liliput",
						"Neonfisch",
						"Zwergmotte",
						"Ruderfußkrebs",
						"Mini-",
						"lütt",
						"mikroskopisch",
						"Milbe",
						"Teenie, Teeny",
						"Mikrolith"
					]
				}
			}
		},
		"Veränderung": {
			"word": "Veränderung",
			"data": {
				"_id": "591899fdce905c0816aaa34e",
				"word": "Veränderung",
				"data": {
					"description": "Substantiv, feminin - 1. das Verändern; 2. das Sichverändern, das Anderswerden; 3. Ergebnis einer Veränderung",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. das Verändern; 2. das Sichverändern, das Anderswerden; 3. Ergebnis einer Veränderung"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Veraenderung",
					"similarWords": [
						"Umstellung",
						"Umänderung",
						"Modifizierung",
						"Neuregelung",
						"Heterosis",
						"Veränderungsrate",
						"einschneidend",
						"Abänderung",
						"Umformung",
						"Modulation",
						"Neugestaltung",
						"Neuordnung",
						"Verwandlung",
						"Neuorganisation",
						"Veränderungsprozess",
						"Interpolation",
						"Metabole",
						"Amöbe",
						"Mutation"
					]
				}
			}
		},
		"Schritts": {
			"word": "Schritts",
			"data": {
				"_id": "591899fdce905c0816aaa34f",
				"word": "Schritts",
				"data": {
					"similarWords": [
						"schritt",
						"fortschrittsgläubig",
						"Fortschrittsoptimismus",
						"Fortschrittsfanatikerin",
						"Fortschrittsfanatiker",
						"Fortschrittsglaube",
						"fortschrittsfeindlich",
						"Schlurfschritt",
						"Schrittsprung",
						"raumgreifend",
						"Siebenmeilenschritt",
						"Seitenschritt",
						"Vorwärtsschritt",
						"Lernschritt",
						"Marschschritt",
						"Denkschritt",
						"Unterrichtsschritt",
						"Schlenderschritt",
						"Rechenschritt",
						"Schlussschritt"
					]
				}
			}
		},
		"sieht": {
			"word": "sieht",
			"data": {
				"_id": "591899fece905c0816aaa369",
				"word": "sieht",
				"data": {
					"description": "siehe sehen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/sieht",
					"similarWords": [
						"verhauen",
						"Hoffenster",
						"Blindfisch",
						"gleichsehen",
						"Friedensregelung",
						"Sucherkamera",
						"Fliegenschimmel",
						"Räuberhöhle",
						"verschlafen",
						"scheiße",
						"Weitsichtigkeit",
						"Arbeiterschaft",
						"Eudämonismus",
						"Modalismus",
						"Doppelgänger",
						"Bewegungsraum",
						"Disjektion",
						"Schnapszahl",
						"Heinz"
					]
				}
			}
		},
		"fühlt": {
			"word": "fühlt",
			"data": {
				"_id": "591899fece905c0816aaa368",
				"word": "fühlt",
				"data": {
					"similarWords": [
						"gefühlt",
						"tief gefühlt, tiefgefühlt",
						"Element",
						"Puppenmutter",
						"Übermensch",
						"Junggebliebene, jung Gebliebene",
						"Junggebliebener, jung Gebliebener",
						"Traditionalismus",
						"Fremdling",
						"Starlet, Starlett",
						"Ingroup",
						"Adabei",
						"lausekalt",
						"Wahlheimat",
						"Outgroup",
						"nachfühlen",
						"vorverurteilen",
						"überlastet",
						"heimzahlen",
						"herumzicken"
					]
				}
			}
		},
		"Schlo": {
			"word": "Schlo",
			"data": {
				"_id": "591899ffce905c0816aaa37f",
				"word": "Schlo",
				"data": {
					"similarWords": [
						"Hagelschloße",
						"Schlot",
						"Schloße",
						"Schloss",
						"schloff",
						"schloss",
						"schloßen",
						"schlohweiß",
						"Schlorre",
						"Schlotte",
						"Schlöte",
						"schlottrig",
						"Schlosser",
						"Schlosshof",
						"Kfz-Schlosser",
						"Schlossbau",
						"schlorren",
						"schlotzen",
						"Schlösser",
						"schlöffe"
					]
				}
			}
		},
		"platz": {
			"word": "platz",
			"data": {
				"_id": "591899ffce905c0816aaa381",
				"word": "platz",
				"data": {
					"similarWords": [
						"Platz",
						"plitz, platz",
						"Platzdeckchen",
						"Platzverhältnisse",
						"Platzrunde",
						"Platzkarte",
						"Platzwunde",
						"Platzwette",
						"Platzmiete",
						"Platzhirsch",
						"Platzregen",
						"Platzregel",
						"Platzvertretung",
						"Platzkonzert",
						"Platzverweis",
						"Platzwechsel",
						"Platzgründe",
						"Platzvorteil",
						"Platzersparnis",
						"Platzvertreter"
					]
				}
			}
		},
		"geredet": {
			"word": "geredet",
			"data": {
				"_id": "591899ffce905c0816aaa380",
				"word": "geredet",
				"data": {
					"similarWords": [
						"Quasselbude",
						"stillschweigend",
						"schönreden",
						"loslegen",
						"Wörtchen",
						"absondern",
						"laut",
						"Thema",
						"reden",
						"schlecht",
						"Luft",
						"hin"
					]
				}
			}
		},
		"Barnimstra": {
			"word": "Barnimstra",
			"data": {
				"_id": "591899fece905c0816aaa36b",
				"word": "Barnimstra",
				"data": {
					"similarWords": []
				}
			}
		},
		"Hof": {
			"word": "Hof",
			"data": {
				"_id": "591899ffce905c0816aaa383",
				"word": "Hof",
				"data": {
					"description": "Substantiv, maskulin - 1. zu einem Gebäude[komplex] gehörender, von …2. landwirtschaftlicher Betrieb (mit allen Gebäuden …3a. Sitz eines regierenden Fürsten, Herrschers",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. zu einem Gebäude[komplex] gehörender, von …2. landwirtschaftlicher Betrieb (mit allen Gebäuden …3a. Sitz eines regierenden Fürsten, Herrschers"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Hof",
					"similarWords": [
						"Hof halten",
						"Hoftrauer",
						"Hofstelle",
						"Hofcharge",
						"Hofschauspieler",
						"hoffentlich",
						"Hofschranze",
						"Hoftheater",
						"hofrätlich",
						"Hofdame",
						"Hofstatt",
						"Hoferbe",
						"Hofpoet",
						"Hofzwerg",
						"Hofstaat",
						"Hofloge",
						"hofmeisterlich",
						"Hoffart",
						"Hoffärtigkeit"
					]
				}
			}
		},
		"Fliederstrauch": {
			"word": "Fliederstrauch",
			"data": {
				"_id": "591899fece905c0816aaa370",
				"word": "Fliederstrauch",
				"data": {
					"description": "Substantiv, maskulin - als Strauch wachsende Pflanze mit weißen oder hell- bis dunkellila, stark duftenden Blüten in großen …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "bis dunkellila, stark duftenden Blüten in großen …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Fliederstrauch",
					"similarWords": [
						"Flieder"
					]
				}
			}
		},
		"pflanzte": {
			"word": "pflanzte",
			"data": {
				"_id": "591899ffce905c0816aaa385",
				"word": "pflanzte",
				"data": {
					"similarWords": [
						"pflanzen",
						"fortpflanzen",
						"anpflanzen",
						"auspflanzen",
						"einpflanzen",
						"aufpflanzen",
						"umpflanzen"
					]
				}
			}
		},
		"Hotel": {
			"word": "Hotel",
			"data": {
				"_id": "591899ffce905c0816aaa382",
				"word": "Hotel",
				"data": {
					"description": "Substantiv, Neutrum - (als Gewerbebetrieb geführtes) Haus mit bestimmtem Komfort, in dem Gäste übernachten bzw. für eine bestimmte …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "(als Gewerbebetrieb geführtes) Haus mit bestimmtem Komfort, in dem Gäste übernachten bzw. für eine bestimmte …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Hotel",
					"similarWords": [
						"Hotel garni",
						"First-Class-Hotel",
						"Hotelfach",
						"Hotelbett",
						"Hotelburg",
						"Hotelkoch",
						"Hotelbar",
						"Hoteldieb",
						"Hotelgast",
						"Hotelstadt",
						"Hotelbau",
						"Hotelboy",
						"Laboer",
						"Zerbster",
						"Bagdader",
						"Botel",
						"hoteleigen",
						"Hotellerie",
						"Hotelschiff"
					]
				}
			}
		},
		"Eden": {
			"word": "Eden",
			"data": {
				"_id": "59189a00ce905c0816aaa38e",
				"word": "Eden",
				"data": {
					"description": "Substantiv, Neutrum - 1. der Garten Eden; 2. Paradies",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. der Garten Eden; 2. Paradies"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Eden",
					"similarWords": [
						"Edentate",
						"Elysium",
						"Himmelreich",
						"Paradies",
						"Garten",
						"ermüden",
						"Baum"
					]
				}
			}
		},
		"verhöhnt": {
			"word": "verhöhnt",
			"data": {
				"_id": "591899fece905c0816aaa36d",
				"word": "verhöhnt",
				"data": {
					"similarWords": [
						"verhöhnen",
						"Farce"
					]
				}
			}
		},
		"erschlagen": {
			"word": "erschlagen",
			"data": {
				"_id": "59189a00ce905c0816aaa38f",
				"word": "erschlagen",
				"data": {
					"description": "Adjektiv - erschöpft, am Ende der Kräfte",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "erschöpft, am Ende der Kräfte"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/erschlagen_entkraeftet_schwach",
					"similarWords": [
						"entsetzensvoll",
						"erschlagend",
						"verdonnert",
						"Enterbeil",
						"mikrobizid",
						"Spitzhacke",
						"konsterniert",
						"urlaubsreif",
						"entsetzt",
						"Drachensaat",
						"schockiert",
						"überwältigt",
						"angegriffen",
						"killen",
						"bestürzt",
						"fassungslos",
						"angeknackst",
						"verdattert"
					]
				}
			}
		},
		"Lichtensteinbrücke": {
			"word": "Lichtensteinbrücke",
			"data": {
				"_id": "591899fece905c0816aaa36c",
				"word": "Lichtensteinbrücke",
				"data": {
					"similarWords": []
				}
			}
		},
		"Schleuse": {
			"word": "Schleuse",
			"data": {
				"_id": "59189a00ce905c0816aaa391",
				"word": "Schleuse",
				"data": {
					"description": "Substantiv, feminin - 1a. Vorrichtung zum Absperren eines Wasserstroms, …1b. aus zwei Toren und einer …2. den einzigen Zugang zu einem …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. Vorrichtung zum Absperren eines Wasserstroms, …1b. aus zwei Toren und einer …2. den einzigen Zugang zu einem …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Schleuse",
					"similarWords": [
						"Schleuserin",
						"Schleuser",
						"schleusen",
						"Schleusentor",
						"Schleusentür",
						"Kanalschleuse",
						"Schleusenkammer",
						"Schleusenwärter",
						"ausschleusen",
						"Schleusengeld",
						"Deichschleuse",
						"Staustufe",
						"durchschleusen",
						"Schleuserbande",
						"Schleusentreppe",
						"Schleusenwärterin",
						"Leitwerk",
						"Katarakt",
						"Oberwasser"
					]
				}
			}
		},
		"dreieinhalb": {
			"word": "dreieinhalb",
			"data": {
				"_id": "591899ffce905c0816aaa374",
				"word": "dreieinhalb",
				"data": {
					"description": "Zahlwort - in Ziffern: 3 1/2",
					"wordProperties": {
						"type": "Zahlwort",
						"definition": "in Ziffern: 3 1/2"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/dreieinhalb",
					"similarWords": [
						"dreiundeinhalb",
						"dreieinhalbtausend"
					]
				}
			}
		},
		"Monate": {
			"word": "Monate",
			"data": {
				"_id": "59189a00ce905c0816aaa393",
				"word": "Monate",
				"data": {
					"similarWords": [
						"monatelang",
						"zweimonatig",
						"achtmonatig",
						"zehnmonatig",
						"d. M.",
						"v. M.",
						"dieses Monats",
						"Monat",
						"sechsmonatig",
						"einmonatig",
						"viermonatig",
						"Vierteljahr",
						"Zahlungsziel",
						"Regenmonat",
						"sechsmonatlich",
						"siebenmonatlich",
						"siebenmonatig",
						"monatlich",
						"mehrmonatig",
						"dreimonatig"
					]
				}
			}
		},
		"herausgezogen": {
			"word": "herausgezogen",
			"data": {
				"_id": "591899ffce905c0816aaa384",
				"word": "herausgezogen",
				"data": {
					"similarWords": [
						"Geburtszange",
						"Durchzugsarbeit",
						"Strangguss",
						"Coitus interruptus",
						"Mikado",
						"Extrakt",
						"herausziehen",
						"Zapfen"
					]
				}
			}
		},
		"Friedhof": {
			"word": "Friedhof",
			"data": {
				"_id": "59189a01ce905c0816aaa3af",
				"word": "Friedhof",
				"data": {
					"description": "Substantiv, maskulin - Ort, an dem die Toten bestattet werden",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "Ort, an dem die Toten bestattet werden"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Friedhof",
					"similarWords": [
						"Leichenacker",
						"Totenacker",
						"Friedhofsstille",
						"Urnenfeld",
						"Friedhofsmauer",
						"Urnenfriedhof",
						"Ehrenfriedhof",
						"Kirchhof",
						"Friedhofsordnung",
						"Gefallenenfriedhof",
						"Camposanto",
						"Friedhofsweg",
						"Urnenhain",
						"Reihengrab",
						"Friedhofskapelle",
						"Hauptweg",
						"Zömeterium",
						"Gottesacker",
						"Friedwald®"
					]
				}
			}
		},
		"Friedrichsfelde": {
			"word": "Friedrichsfelde",
			"data": {
				"_id": "591899fece905c0816aaa371",
				"word": "Friedrichsfelde",
				"data": {
					"similarWords": []
				}
			}
		},
		"beerdigt": {
			"word": "beerdigt",
			"data": {
				"_id": "59189a01ce905c0816aaa3a3",
				"word": "beerdigt",
				"data": {
					"similarWords": [
						"Ehrenhain",
						"Radieschen",
						"Grab",
						"beerdigen"
					]
				}
			}
		},
		"Grab": {
			"word": "Grab",
			"data": {
				"_id": "59189a00ce905c0816aaa38d",
				"word": "Grab",
				"data": {
					"description": "Substantiv, Neutrum - a. für die Beerdigung eines Toten …b. oft durch einen kleinen [geschmückten] …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "a. für die Beerdigung eines Toten …b. oft durch einen kleinen [geschmückten] …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Grab",
					"similarWords": [
						"Grabschmuck",
						"Grabbeltisch",
						"Grabschaufel",
						"Grablicht",
						"Grabstein",
						"Grabkreuz",
						"Grabstock",
						"Grabtuch",
						"Grabraub",
						"grabbeln",
						"Grabbepflanzung",
						"Grabscheit",
						"Grabstele",
						"Grabbelei",
						"Grabspruch",
						"Grabgabel",
						"Grabwespe",
						"Grabeinfassung",
						"Grabstätte"
					]
				}
			}
		},
		"Nazis": {
			"word": "Nazis",
			"data": {
				"_id": "59189a00ce905c0816aaa392",
				"word": "Nazis",
				"data": {
					"similarWords": [
						"Nazist",
						"nazistisch",
						"Nazismus",
						"Nazistin",
						"Nazi",
						"Vernichtungspolitik",
						"Nationalsozialist",
						"Nationalsozialistin",
						"verfemen",
						"Gleichschaltung",
						"Rassismus",
						"vor",
						"Knochen"
					]
				}
			}
		},
		"eingeebnet": {
			"word": "eingeebnet",
			"data": {
				"_id": "591899fece905c0816aaa373",
				"word": "eingeebnet",
				"data": {
					"similarWords": [
						"Planum",
						"Flatfee, Flat Fee",
						"einebnen"
					]
				}
			}
		},
		"Politbürokrat": {
			"word": "Politbürokrat",
			"data": {
				"_id": "591899ffce905c0816aaa375",
				"word": "Politbürokrat",
				"data": {
					"similarWords": []
				}
			}
		},
		"Ulbricht": {
			"word": "Ulbricht",
			"data": {
				"_id": "591899fece905c0816aaa36e",
				"word": "Ulbricht",
				"data": {
					"similarWords": []
				}
			}
		},
		"angelagert": {
			"word": "angelagert",
			"data": {
				"_id": "591899ffce905c0816aaa377",
				"word": "angelagert",
				"data": {
					"similarWords": [
						"Randmeer",
						"desorbieren",
						"Flotation",
						"Ligand"
					]
				}
			}
		},
		"starke": {
			"word": "starke",
			"data": {
				"_id": "591899ffce905c0816aaa386",
				"word": "starke",
				"data": {
					"similarWords": [
						"Starkenburg",
						"starkenburgisch",
						"bullenstark",
						"riesenstark",
						"kopfballstark",
						"spielstark",
						"nervenstark",
						"wachstumsstark",
						"löwenstark",
						"seelenstark",
						"überstark",
						"bockstark",
						"Starking",
						"stark machen, starkmachen",
						"bärenstark",
						"daumenstark",
						"Starkton",
						"Salzsee",
						"stark behaart, starkbehaart",
						"zonked"
					]
				}
			}
		},
		"zart": {
			"word": "zart",
			"data": {
				"_id": "59189a01ce905c0816aaa3ad",
				"word": "zart",
				"data": {
					"description": "Adjektiv - 1a. [auf anmutige Weise] empfindlich, verletzlich, …1b. sehr empfindlich [reagierend], sensibel; mimosenhaft; 2. auf angenehme Weise weich, mürbe …",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1a. [auf anmutige Weise] empfindlich, verletzlich, …1b. sehr empfindlich [reagierend], sensibel; mimosenhaft; 2. auf angenehme Weise weich, mürbe …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/zart",
					"similarWords": [
						"zartgliedrig",
						"zartviolett",
						"zartgrün",
						"zartgelb",
						"Zartheit",
						"Zartsinn",
						"zartblau",
						"zarthäutig",
						"Zartgefühl",
						"zartgliederig",
						"zartbitter",
						"zartfarbig",
						"Mozartzopf",
						"Zartmacher",
						"zartsinnig",
						"zartfühlend, zart fühlend",
						"zartlila",
						"zartrosa",
						"zart schmelzend, zartschmelzend"
					]
				}
			}
		},
		"stark": {
			"word": "stark",
			"data": {
				"_id": "59189a00ce905c0816aaa390",
				"word": "stark",
				"data": {
					"description": "Adjektiv - 1a. viel Kraft besitzend, über genügend …1b. (in Bezug auf seine Funktion) …2a. dick, stabil, fest und daher …",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1a. viel Kraft besitzend, über genügend …1b. (in Bezug auf seine Funktion) …2a. dick, stabil, fest und daher …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/stark",
					"similarWords": [
						"-stark",
						"PS-stark",
						"Starkbierfest",
						"Starkregen",
						"starkreden",
						"starkknochig",
						"Starkstromtechnikerin",
						"Starkstromtechnik",
						"Starkstromleitung",
						"stark machen, starkmachen",
						"stark behaart, starkbehaart",
						"stark bevölkert, starkbevölkert",
						"starkleibig",
						"starkmachen",
						"Starkbier",
						"Starkstrom",
						"Starkstromtechniker",
						"Starkton",
						"Starkult"
					]
				}
			}
		},
		"kräftig": {
			"word": "kräftig",
			"data": {
				"_id": "59189a00ce905c0816aaa39b",
				"word": "kräftig",
				"data": {
					"description": "Adjektiv - 1a. über Körperkraft verfügend, [in der …1b. von gesundem Wuchs zeugend; gut …2a. in hohem Maße ausgeprägt, vorhanden; …",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1a. über Körperkraft verfügend, [in der …1b. von gesundem Wuchs zeugend; gut …2a. in hohem Maße ausgeprägt, vorhanden; …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/kraeftig",
					"similarWords": [
						"-kräftig",
						"Kräftigkeit",
						"kräftiglich",
						"kräftigen",
						"Kräftigung",
						"bärenstark",
						"riesenstark",
						"sthenisch",
						"vigorös",
						"Kräftigungsmittel",
						"baumstark",
						"kalorienreich",
						"schneidig",
						"durchschütteln",
						"vollschlank",
						"abgehärtet",
						"kraftstrotzend",
						"markig",
						"gehaltreich"
					]
				}
			}
		},
		"körperlich": {
			"word": "körperlich",
			"data": {
				"_id": "59189a01ce905c0816aaa39e",
				"word": "körperlich",
				"data": {
					"description": "Adjektiv - den Körper betreffend; auf den Körper bezogen",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "den Körper betreffend; auf den Körper bezogen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/koerperlich",
					"similarWords": [
						"Körperlichkeit",
						"Sterin",
						"Behinderte",
						"Brachialgewalt",
						"anatomisch",
						"Körperfülle",
						"Massigkeit",
						"hylisch",
						"physiogen",
						"körperbehindert",
						"kollabeszieren",
						"somatisch",
						"Behindertensportler",
						"barabern",
						"leibhaft",
						"geschlechtlich",
						"sexuell",
						"behindert",
						"rege"
					]
				}
			}
		},
		"verletzt": {
			"word": "verletzt",
			"data": {
				"_id": "59189a00ce905c0816aaa39c",
				"word": "verletzt",
				"data": {
					"description": "Adjektiv - 1. sich eine Verletzung zugezogen habend; 2. gekränkt, beleidigt",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1. sich eine Verletzung zugezogen habend; 2. gekränkt, beleidigt"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/verletzt",
					"similarWords": [
						"leicht verletzt, leichtverletzt",
						"schwer verletzt, schwerverletzt",
						"Verletzte",
						"Verletzter",
						"lauflahm",
						"Rechtsverletzer",
						"Verletzer",
						"Schwerverletzte, schwer Verletzte",
						"Schwerverletzter, schwer Verletzter",
						"todwund",
						"Unfallverletzte",
						"Unfallverletzter",
						"Sexualverbrechen",
						"Dermatoplastik",
						"Sexualstraftat",
						"lazarettreif",
						"Leichtverletzte, leicht Verletzte",
						"Leichtverletzter, leicht Verletzter",
						"Sanitätszelt"
					]
				}
			}
		},
		"Clara": {
			"word": "Clara",
			"data": {
				"_id": "59189a01ce905c0816aaa3a5",
				"word": "Clara",
				"data": {
					"similarWords": [
						"Abraham a San[c]ta Clara",
						"Pseudogynym",
						"Novellette"
					]
				}
			}
		},
		"Zetkin": {
			"word": "Zetkin",
			"data": {
				"_id": "59189a00ce905c0816aaa397",
				"word": "Zetkin",
				"data": {
					"similarWords": []
				}
			}
		},
		"Hüte": {
			"word": "Hüte",
			"data": {
				"_id": "59189a02ce905c0816aaa3bf",
				"word": "Hüte",
				"data": {
					"similarWords": [
						"Hüterin",
						"Hüter",
						"hüten",
						"Hütehund",
						"Hütelohn",
						"Hütejunge",
						"Hut",
						"Hutmode",
						"Hutgeschäft",
						"cave canem",
						"Hutabteilung",
						"Hutmacher",
						"Reisstroh",
						"Hutablage",
						"Garderobenschrank",
						"Garderobenhaken",
						"Hutgröße",
						"ähnlich",
						"einhüten",
						"Garderobe"
					]
				}
			}
		},
		"hinguckt": {
			"word": "hinguckt",
			"data": {
				"_id": "59189a01ce905c0816aaa3a7",
				"word": "hinguckt",
				"data": {
					"similarWords": []
				}
			}
		},
		"hinkt": {
			"word": "hinkt",
			"data": {
				"_id": "59189a00ce905c0816aaa39d",
				"word": "hinkt",
				"data": {
					"similarWords": [
						"Hinkebein",
						"Hinkende",
						"Hinkender",
						"Hinkefuß",
						"hinken",
						"Vergleich",
						"hinterherhinken",
						"nachhinken"
					]
				}
			}
		},
		"geschritten": {
			"word": "geschritten",
			"data": {
				"_id": "59189a01ce905c0816aaa3a8",
				"word": "geschritten",
				"data": {
					"description": "siehe schreiten",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/geschritten",
					"similarWords": [
						"Schritttanz, Schritt-Tanz",
						"schreiten"
					]
				}
			}
		},
		"Erinnerung": {
			"word": "Erinnerung",
			"data": {
				"_id": "59189a02ce905c0816aaa3b9",
				"word": "Erinnerung",
				"data": {
					"description": "Substantiv, feminin - 1a. Fähigkeit, sich an etwas zu …1b. Besitz aller bisher aufgenommenen Eindrücke; …2. Eindruck, an den jemand sich …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. Fähigkeit, sich an etwas zu …1b. Besitz aller bisher aufgenommenen Eindrücke; …2. Eindruck, an den jemand sich …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Erinnerung",
					"similarWords": [
						"erinnerungslos",
						"Nachleben",
						"Gedächtnislücke",
						"Erinnerungsfoto",
						"Jugenderinnerung",
						"Erinnerungsfetzen",
						"Anmahnung",
						"Deckerinnerung",
						"erinnerbar",
						"Hermannsdenkmal",
						"Erinnerungsbild",
						"Auferstehungsfeier",
						"Erinnerungsvermögen",
						"Gedächtnisleistung",
						"Ehrentag",
						"Mahnruf",
						"Kindheitserinnerung",
						"Nationalfeiertag",
						"Pestsäule"
					]
				}
			}
		},
		"Hoffnungen": {
			"word": "Hoffnungen",
			"data": {
				"_id": "59189a01ce905c0816aaa3aa",
				"word": "Hoffnungen",
				"data": {
					"similarWords": [
						"Hoffnung",
						"realistischerweise",
						"Lebenszuversicht",
						"Hoffnungsträger",
						"zunichtewerden",
						"TTIP",
						"vielversprechend, viel versprechend",
						"verheißungsvoll",
						"realisierbar",
						"zunichte",
						"Pessimismus",
						"enttäuschen",
						"zuschanden, zu Schanden",
						"vorgaukeln",
						"bestehlen",
						"utopisch",
						"unerfüllt",
						"Zuversicht",
						"Schwachheit",
						"trügen"
					]
				}
			}
		},
		"Ohr": {
			"word": "Ohr",
			"data": {
				"_id": "59189a01ce905c0816aaa3b0",
				"word": "Ohr",
				"data": {
					"description": "Substantiv, Neutrum - Gehörorgan bei Mensch und Wirbeltier, dessen äußerer Teil je ein meist an beiden Seiten des …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "Gehörorgan bei Mensch und Wirbeltier, dessen äußerer Teil je ein meist an beiden Seiten des …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Ohr",
					"similarWords": [
						"Ohrschmuck",
						"Ohrspülung",
						"Ohrstöpsel",
						"Ohrknopf",
						"Ohrdruf",
						"Ohrwurm",
						"Ohrring",
						"Ohrfeige",
						"Ohrmarke",
						"Ohrpfropf",
						"Ohrwaschel",
						"Ohrmuschel",
						"Ohrstecker",
						"Ohrclip, Ohrklipp",
						"Ohrhänger",
						"Ohrhörer",
						"ohrfeigen",
						"Ohrgeräusch",
						"Ohrgehänge"
					]
				}
			}
		},
		"Stück": {
			"word": "Stück",
			"data": {
				"_id": "59189a01ce905c0816aaa3b2",
				"word": "Stück",
				"data": {
					"description": "Substantiv, Neutrum - 1a. abgetrennter oder abzutrennender Teil eines …1b. einzelner, eine Einheit bildender Teil …2. bestimmte Menge eines Stoffes, Materials …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1a. abgetrennter oder abzutrennender Teil eines …1b. einzelner, eine Einheit bildender Teil …2. bestimmte Menge eines Stoffes, Materials …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Stueck",
					"similarWords": [
						"stückweise",
						"Stückliste",
						"Stückkohle",
						"Stückgewicht",
						"stückchenweise",
						"Stücknotierung",
						"Stückgutabfertigung",
						"Stückarbeit",
						"Stückkosten",
						"Stückzinsen",
						"Stückchen",
						"Stückfass",
						"Stückwerk",
						"Stücklung",
						"Stückzahl",
						"Stücklohn",
						"Stückkauf",
						"Stückkurs",
						"Stückware"
					]
				}
			}
		},
		"Schalmeien": {
			"word": "Schalmeien",
			"data": {
				"_id": "59189a01ce905c0816aaa39f",
				"word": "Schalmeien",
				"data": {
					"similarWords": [
						"Schalmeienklang",
						"Schalmei"
					]
				}
			}
		},
		"schlichten": {
			"word": "schlichten",
			"data": {
				"_id": "59189a02ce905c0816aaa3c4",
				"word": "schlichten",
				"data": {
					"description": "schwaches Verb - 1. als unbeteiligter Dritter zwischen streitenden …2a. (eine Oberfläche) glätten; 2b. (Leder) weich und geschmeidig machen",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1. als unbeteiligter Dritter zwischen streitenden …2a. (eine Oberfläche) glätten; 2b. (Leder) weich und geschmeidig machen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/schlichten",
					"similarWords": [
						"Schlichte",
						"Schlichteisen",
						"Schlichtung",
						"Disputator",
						"schlicht",
						"Streitfall",
						"sanglos",
						"beilegen",
						"geradebiegen",
						"dazwischentreten",
						"gütlich",
						"stapeln",
						"durchgreifen",
						"einschreiten",
						"abhelfen",
						"dazwischenfahren",
						"fertigbringen",
						"eingreifen",
						"bereinigen"
					]
				}
			}
		},
		"Märsche": {
			"word": "Märsche",
			"data": {
				"_id": "59189a01ce905c0816aaa3a0",
				"word": "Märsche",
				"data": {
					"similarWords": [
						"Marsch",
						"Militärmusik",
						"Waffenlauf"
					]
				}
			}
		},
		"ablösen": {
			"word": "ablösen",
			"data": {
				"_id": "59189a01ce905c0816aaa3b3",
				"word": "ablösen",
				"data": {
					"description": "schwaches Verb - 1a. von seinem Untergrund lösen; abmachen; 1b. sich lösen; 2. die Tätigkeit, den Dienst, die …",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1a. von seinem Untergrund lösen; abmachen; 1b. sich lösen; 2. die Tätigkeit, den Dienst, die …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/abloesen",
					"similarWords": [
						"Ablöse",
						"abplatzen",
						"losbekommen",
						"abschaben",
						"lostrennen",
						"Schmolle",
						"abschuppen",
						"abschilfern",
						"alternieren",
						"abknibbeln",
						"lostreten",
						"absplittern",
						"abhacken",
						"abgelten",
						"Ablösung",
						"eluieren",
						"abwechseln",
						"abkratzen",
						"abbröckeln"
					]
				}
			}
		},
		"Neues": {
			"word": "Neues",
			"data": {
				"_id": "59189a01ce905c0816aaa3b1",
				"word": "Neues",
				"data": {
					"similarWords": [
						"neuestens",
						"Neue",
						"NF",
						"NDB",
						"N. T.",
						"N. F.",
						"New Look",
						"Neue Kerze",
						"New Age",
						"Jahreswechsel",
						"New Deal",
						"Neureglung",
						"Neueinstudierung",
						"Neuausgabe",
						"Neugliederung",
						"Neubedeutung",
						"Tochterzelle",
						"Neuinvestition",
						"Produktneuheit",
						"Trendsport"
					]
				}
			}
		},
		"Mai": {
			"word": "Mai",
			"data": {
				"_id": "59189a02ce905c0816aaa3b6",
				"word": "Mai",
				"data": {
					"description": "Substantiv, maskulin - fünfter Monat des Jahres",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "fünfter Monat des Jahres"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Mai",
					"similarWords": [
						"Main",
						"E-Mail",
						"Mail",
						"Maie",
						"Maid",
						"Mais",
						"Mainz",
						"Maine",
						"Maiß",
						"Maisch",
						"Coup de Main",
						"E-Mail-Wurm",
						"Maire",
						"Maizena®",
						"Maisäß",
						"Mainacht",
						"maischen",
						"à deux mains",
						"Maifisch"
					]
				}
			}
		},
		"Gehörtes": {
			"word": "Gehörtes",
			"data": {
				"_id": "59189a01ce905c0816aaa3b4",
				"word": "Gehörtes",
				"data": {
					"similarWords": [
						"nacherzählen",
						"Leumund",
						"Schmus",
						"vorschriftsmäßig",
						"angemessen",
						"gebührend",
						"akustisch",
						"schicklich",
						"regelrecht",
						"visuell",
						"verhältnismäßig",
						"korrekt",
						"gemessen",
						"angepasst",
						"zünftig",
						"untergehen",
						"okay",
						"würdig",
						"ordentlich",
						"gehörig"
					]
				}
			}
		},
		"Instrument": {
			"word": "Instrument",
			"data": {
				"_id": "59189a02ce905c0816aaa3c1",
				"word": "Instrument",
				"data": {
					"description": "Substantiv, Neutrum - 1. meist fein gearbeitetes, oft kompliziert …2. jemand, etwas als Mittel, dessen …3. ein schwieriges, wertvolles, altes Instrument; …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. meist fein gearbeitetes, oft kompliziert …2. jemand, etwas als Mittel, dessen …3. ein schwieriges, wertvolles, altes Instrument; …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Instrument",
					"similarWords": [
						"Instrumental",
						"instrumentell",
						"instrumentativ",
						"Oktachord",
						"Gambang",
						"Reversionspendel",
						"Locke",
						"Instrumentator",
						"Kampfbegriff",
						"Instrumentation",
						"Yantra",
						"instrumental",
						"Nomen Instrumenti",
						"Tonometer",
						"Folterwerkzeug",
						"Tutti",
						"Nyktometer",
						"Hämodynamometer"
					]
				}
			}
		},
		"Streckenarbeiter": {
			"word": "Streckenarbeiter",
			"data": {
				"_id": "59189a01ce905c0816aaa3a1",
				"word": "Streckenarbeiter",
				"data": {
					"description": "Substantiv, maskulin - Arbeiter, der beim Bau, bei der Unterhaltung, Reparatur von Gleisanlagen mit Gleisarbeiten beschäftigt ist",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "Arbeiter, der beim Bau, bei der Unterhaltung, Reparatur von Gleisanlagen mit Gleisarbeiten beschäftigt ist"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Streckenarbeiter",
					"similarWords": [
						"Streckenarbeiterin"
					]
				}
			}
		},
		"nahenden": {
			"word": "nahenden",
			"data": {
				"_id": "59189a03ce905c0816aaa3cc",
				"word": "nahenden",
				"data": {
					"similarWords": [
						"Alterserscheinung"
					]
				}
			}
		},
		"Gefahr": {
			"word": "Gefahr",
			"data": {
				"_id": "59189a02ce905c0816aaa3c5",
				"word": "Gefahr",
				"data": {
					"description": "Substantiv, feminin - Möglichkeit, dass jemandem etwas zustößt, dass ein Schaden eintritt; drohendes Unheil",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "Möglichkeit, dass jemandem etwas zustößt, dass ein Schaden eintritt; drohendes Unheil"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Gefahr",
					"similarWords": [
						"Gefahr bringend, gefahrbringend",
						"ABC-Gefahr",
						"gefahrvoll",
						"gefahrlos",
						"Gefahrgut",
						"Gefahre",
						"gefahrdrohend",
						"Gefahrstelle",
						"Gefahrzeichen",
						"Gefahrstoff",
						"gefahren",
						"Gefahrlosigkeit",
						"periklitieren",
						"gemeingefährlich",
						"Rostgefahr",
						"Steinschlaggefahr",
						"Frostgefahr",
						"Glatteisgefahr",
						"Warnlicht"
					]
				}
			}
		},
		"warnen": {
			"word": "warnen",
			"data": {
				"_id": "59189a02ce905c0816aaa3c2",
				"word": "warnen",
				"data": {
					"description": "schwaches Verb - 1. auf eine Gefahr hinweisen; 2. jemandem nachdrücklich, dringend [und unter …",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1. auf eine Gefahr hinweisen; 2. jemandem nachdrücklich, dringend [und unter …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/warnen",
					"similarWords": [
						"warnend",
						"avertieren",
						"Schuldzuweisung",
						"Warnsystem",
						"Warndienst",
						"alarmieren",
						"vorwarnen",
						"abraten",
						"widerraten",
						"Spanner",
						"Schmiere",
						"abmahnen",
						"abreden",
						"Warnung",
						"garnieren",
						"dringend",
						"Spoiler",
						"ausreden",
						"vor"
					]
				}
			}
		},
		"Art": {
			"word": "Art",
			"data": {
				"_id": "59189a02ce905c0816aaa3c6",
				"word": "Art",
				"data": {
					"description": "Substantiv, feminin - 1. angeborene Eigenart, Eigentümlichkeit; Wesen[sart], Natur, …2. häufig in intensivierender Verbindung mit …3. gutes Benehmen",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. angeborene Eigenart, Eigentümlichkeit; Wesen[sart], Natur, …2. häufig in intensivierender Verbindung mit …3. gutes Benehmen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Art",
					"similarWords": [
						"Op-Art",
						"Art.",
						"Pop-Art",
						"Eat-Art",
						"Mag. art.",
						"L'art pour l'art",
						"Junk-Art",
						"Art brut",
						"Bakk. art.",
						"artverwandt",
						"artfremd",
						"State of the Art",
						"artverschieden",
						"Artwort",
						"Minimal Art",
						"Land-Art, Landart",
						"Decorative Art",
						"Concept-Art, Conceptart",
						"Soft Art, Softart"
					]
				}
			}
		},
		"Agitpropstück": {
			"word": "Agitpropstück",
			"data": {
				"_id": "59189a01ce905c0816aaa3a2",
				"word": "Agitpropstück",
				"data": {
					"similarWords": []
				}
			}
		},
		"Musik": {
			"word": "Musik",
			"data": {
				"_id": "59189a02ce905c0816aaa3b7",
				"word": "Musik",
				"data": {
					"description": "Substantiv, feminin - 1a. Kunst, Töne in bestimmter (geschichtlich …1b. Werk, Werke der Musik; 1c. musikalische Komposition, Musikstück",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. Kunst, Töne in bestimmter (geschichtlich …1b. Werk, Werke der Musik; 1c. musikalische Komposition, Musikstück"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Musik",
					"similarWords": [
						"E-Musik",
						"U-Musik",
						"Musik liebend, musikliebend",
						"Musikfest",
						"Musikwerk",
						"Musikkorps",
						"Musikbox",
						"Musikfilm",
						"Musikpreis",
						"Musikstil",
						"Musiksaal",
						"Musikraum",
						"Musikclown",
						"Musikbuch",
						"Tonkunst",
						"Musiker",
						"Musikus",
						"musikbegabt",
						"Musikleben"
					]
				}
			}
		},
		"Arbeiter": {
			"word": "Arbeiter",
			"data": {
				"_id": "59189a02ce905c0816aaa3b5",
				"word": "Arbeiter",
				"data": {
					"description": "Substantiv, maskulin - a. jemand, der körperlich oder geistig …b. Arbeitnehmer, der überwiegend körperliche Arbeit …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "a. jemand, der körperlich oder geistig …b. Arbeitnehmer, der überwiegend körperliche Arbeit …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Arbeiter",
					"similarWords": [
						"Arbeiter-Samariter-Bund",
						"Arbeiter-und-Bauern-Fakultät",
						"Arbeiter-und-Soldaten-Rat",
						"Arbeiter-und-Bauern-Staat",
						"Arbeiter-und-Bauern-Inspektion",
						"Arbeiter-und-Bauern-Macht",
						"Arbeiterkind",
						"Arbeiterlied",
						"Arbeiterstadt",
						"Arbeiterrat",
						"Arbeitersohn",
						"Arbeiterzeit",
						"Arbeiterstand",
						"Arbeiterschaft",
						"Arbeiterjugend",
						"Arbeiterklasse",
						"Arbeiterschutz",
						"Arbeiterdenkmal",
						"Arbeiterviertel"
					]
				}
			}
		},
		"interessiert": {
			"word": "interessiert",
			"data": {
				"_id": "59189a03ce905c0816aaa3ce",
				"word": "interessiert",
				"data": {
					"description": "Adjektiv - [starken] Anteil nehmend; Interesse habend, zeigend; geistig aufgeschlossen, aufmerksam",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "[starken] Anteil nehmend; Interesse habend, zeigend; geistig aufgeschlossen, aufmerksam"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/interessiert",
					"similarWords": [
						"Interessiertheit",
						"sportbegeistert",
						"investitionsfreudig",
						"skandalsüchtig",
						"bildungsfern",
						"kunstbegeistert",
						"fußballbegeistert",
						"Lustgreis",
						"Liebhaberwert",
						"Sport liebend, sportliebend",
						"aufgeschlossen",
						"uninteressiert",
						"interessieren",
						"Allrounder",
						"beiladen",
						"lernbegierig",
						"kunstinteressiert",
						"Interessengebiet, seltener Interessensgebiet",
						"Spaßgesellschaft"
					]
				}
			}
		},
		"Gewerkschaftler": {
			"word": "Gewerkschaftler",
			"data": {
				"_id": "59189a01ce905c0816aaa3a4",
				"word": "Gewerkschaftler",
				"data": {
					"description": "Substantiv, maskulin - Gewerkschafter",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "Gewerkschafter"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Gewerkschaftler",
					"similarWords": [
						"Gewerkschaftlerin",
						"Randale"
					]
				}
			}
		},
		"organisierten": {
			"word": "organisierten",
			"data": {
				"_id": "59189a02ce905c0816aaa3c0",
				"word": "organisierten",
				"data": {
					"similarWords": [
						"Gruppennachmittag",
						"Rechtswesen",
						"Lohnkampf",
						"Desorganisation",
						"Rocker",
						"Urabstimmung",
						"desorganisieren",
						"Onlinekriminalität",
						"Speeddating, Speed-Dating",
						"Yakuza",
						"Kosak",
						"Organisierte",
						"Organisierter",
						"Preuße",
						"organisieren",
						"durchorganisieren",
						"umorganisieren",
						"nicht"
					]
				}
			}
		},
		"Kommunisten": {
			"word": "Kommunisten",
			"data": {
				"_id": "59189a02ce905c0816aaa3b8",
				"word": "Kommunisten",
				"data": {
					"similarWords": [
						"Volksfront",
						"Kommunist",
						"McCarthyismus",
						"Machtergreifung",
						"Gegendemonstration",
						"Vietcong",
						"affin",
						"Ruder",
						"rot",
						"lang"
					]
				}
			}
		},
		"fanden": {
			"word": "fanden",
			"data": {
				"_id": "59189a02ce905c0816aaa3bb",
				"word": "fanden",
				"data": {
					"similarWords": [
						"Findelhaus",
						"Stabgranate",
						"Schmauchspur",
						"irrefahren",
						"Münchhausen",
						"Rotary Club",
						"Vorsitz",
						"vorfinden",
						"unterkühlt",
						"Zuflucht",
						"durchfechten",
						"hieraus",
						"Gehör",
						"Aufnahme",
						"scheußlich",
						"finden",
						"Grund",
						"zurechtfinden",
						"abfinden",
						"hinausfinden"
					]
				}
			}
		},
		"grä": {
			"word": "grä",
			"data": {
				"_id": "59189a02ce905c0816aaa3c3",
				"word": "grä",
				"data": {
					"similarWords": [
						"gräbt",
						"Gräue",
						"gräzistisch",
						"Grän, Gran",
						"gräbst",
						"Gräzist",
						"Gräting",
						"grämeln",
						"Gräberin",
						"Graefenberg-Punkt, Graefenbergpunkt",
						"Gräberfeld",
						"Gräkomane",
						"Grädigkeit",
						"Gräberfund",
						"Gräserchen",
						"gräkolateinisch",
						"Grätenschritt",
						"Goldgräberzeit",
						"Goldgräberfieber",
						"Fischgrätenmuster"
					]
				}
			}
		},
		"lich": {
			"word": "lich",
			"data": {
				"_id": "59189a03ce905c0816aaa3cb",
				"word": "lich",
				"data": {
					"similarWords": [
						"-lich",
						"Licht",
						"licht",
						"UV-Licht",
						"Lichtenstein",
						"Lichterglanz",
						"Lichte",
						"Lichen",
						"Lichtung",
						"lichtern",
						"lichteln",
						"Lichtenberg",
						"Lichterfest",
						"Lichtermeer",
						"Lichterbaum",
						"Lichterchen",
						"Heimlichtuerei",
						"Heimlichtuerin",
						"Kenntlichmachung",
						"ähnlichschauen"
					]
				}
			}
		},
		"Massen": {
			"word": "Massen",
			"data": {
				"_id": "59189a02ce905c0816aaa3ba",
				"word": "Massen",
				"data": {
					"similarWords": [
						"Massen-",
						"gezwungenermaßen",
						"erwähntermaßen",
						"erwiesenermaßen",
						"eingestandenermaßen",
						"bekanntermaßen",
						"maßen",
						"-maßen",
						"Maßen",
						"Vermulmung",
						"Massenarbeit",
						"Massenmord",
						"Massengrab",
						"Massenfach",
						"Massenblatt",
						"Massenzahl",
						"Massenware",
						"Massensport",
						"Massenmarkt",
						"Massenstart"
					]
				}
			}
		},
		"schweigen": {
			"word": "schweigen",
			"data": {
				"_id": "59189a03ce905c0816aaa3ca",
				"word": "schweigen",
				"data": {
					"description": "starkes Verb - a. nicht [mehr] reden; nicht antworten; …b. nicht [mehr] tönen, keine Klänge, …",
					"wordProperties": {
						"type": "starkes",
						"definition": "a. nicht [mehr] reden; nicht antworten; …b. nicht [mehr] tönen, keine Klänge, …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/schweigen",
					"similarWords": [
						"Schweigen",
						"geschwiegen",
						"schwieg",
						"Verschwiegenheit",
						"Totenstille",
						"Schweigegelübde",
						"tuschen",
						"muckschen",
						"stillschweigen",
						"Grabesstille",
						"Lautlosigkeit",
						"Stillschweigen",
						"Omertà",
						"Schweigeminute",
						"Silentium obsequiosum",
						"Dienstgeheimnis",
						"ex tacendo",
						"ausschweigen",
						"stiekum"
					]
				}
			}
		},
		"falscher": {
			"word": "falscher",
			"data": {
				"_id": "59189a02ce905c0816aaa3c7",
				"word": "falscher",
				"data": {
					"similarWords": [
						"bescheidentlich",
						"Misstritt",
						"Wilhelm",
						"ektopisch",
						"Künstlername",
						"Perjuration",
						"Hackbraten",
						"Fuffziger",
						"Hase",
						"präskriptiv",
						"Übereifer",
						"Irrglauben",
						"Postiche",
						"Ermittler",
						"Falschaussage",
						"Abweg",
						"Kameraderie",
						"Haarteil",
						"Pseudonym",
						"Essstörung, Ess-Störung"
					]
				}
			}
		},
		"Ansatz": {
			"word": "Ansatz",
			"data": {
				"_id": "59189a02ce905c0816aaa3c8",
				"word": "Ansatz",
				"data": {
					"description": "Substantiv, maskulin - 1. das Angesetzte; Verlängerungsstück; 2. erstes sichtbares Zeichen; Spross, Anflug …3a. das Ansetzen",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. das Angesetzte; Verlängerungsstück; 2. erstes sichtbares Zeichen; Spross, Anflug …3a. das Ansetzen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Ansatz",
					"similarWords": [
						"Ansatzrohr",
						"ansatzweise",
						"Ansatzstück",
						"Ansatzpunkt",
						"Halsansatz",
						"Brustansatz",
						"Rohransatz",
						"Nisus",
						"Fußknöchel",
						"Veranschlagung",
						"Knacklaut",
						"Ritterling",
						"Fruchtansatz",
						"Handteller",
						"Etatansatz",
						"Keimwurzel",
						"Epiphyse",
						"Rostansatz",
						"Verlängerungsstück"
					]
				}
			}
		},
		"politische": {
			"word": "politische",
			"data": {
				"_id": "59189a03ce905c0816aaa3c9",
				"word": "politische",
				"data": {
					"similarWords": [
						"Politische",
						"Politischer",
						"politisch",
						"umerziehen",
						"unpolitisch",
						"geopolitisch",
						"Missliebigkeit",
						"arbeitgebernah",
						"Rechtsradikale",
						"Rechtsradikaler",
						"Politlandschaft",
						"Politszene",
						"Moslembruderschaft",
						"Weltlage",
						"Polis",
						"Hetzpresse",
						"Hochschulgruppe",
						"Staatspolizei",
						"Politsatire",
						"Konfliktforschung"
					]
				}
			}
		},
		"Botschaften": {
			"word": "Botschaften",
			"data": {
				"_id": "59189a01ce905c0816aaa3a9",
				"word": "Botschaften",
				"data": {
					"similarWords": [
						"Fernsehprediger",
						"Chatline, Chat-Line",
						"Audition",
						"Botschaft",
						"US-Botschaft"
					]
				}
			}
		},
		"herauszuposaunen": {
			"word": "herauszuposaunen",
			"data": {
				"_id": "59189a01ce905c0816aaa3a6",
				"word": "herauszuposaunen",
				"data": {
					"similarWords": []
				}
			}
		},
		"ästhetischen": {
			"word": "ästhetischen",
			"data": {
				"_id": "59189a02ce905c0816aaa3bc",
				"word": "ästhetischen",
				"data": {
					"similarWords": [
						"ästhetisch",
						"Gartenkunst",
						"Esoteriker",
						"Strukturproblem",
						"Typografie, Typographie",
						"Gesellschaftsdichtung",
						"Auge"
					]
				}
			}
		},
		"Voraussetzungen": {
			"word": "Voraussetzungen",
			"data": {
				"_id": "59189a02ce905c0816aaa3be",
				"word": "Voraussetzungen",
				"data": {
					"similarWords": [
						"Begabungswandel",
						"Voraussetzung",
						"flugbereit",
						"voraussetzungslos",
						"wettermäßig",
						"förderungsfähig",
						"erbfähig",
						"Putativnotwehr",
						"Erotologie",
						"Indikationsmodell",
						"Indikationenmodell",
						"Infarktpersönlichkeit",
						"Kinderzuschlag",
						"Beitragsrückerstattung",
						"Absetzbetrag",
						"Idealfall",
						"erbunfähig",
						"Bodengare",
						"Leitinstitut",
						"Parlamentsauflösung"
					]
				}
			}
		},
		"schaffen": {
			"word": "schaffen",
			"data": {
				"_id": "59189a02ce905c0816aaa3bd",
				"word": "schaffen",
				"data": {
					"description": "starkes und schwaches Verb - 1. (durch schöpferische Arbeit, schöpferisches Gestalten) …2. entstehen, zustande kommen lassen; zustande …3. sich  an etwas zu …",
					"wordProperties": {
						"type": "starkes",
						"definition": "1. (durch schöpferische Arbeit, schöpferisches Gestalten) …2. entstehen, zustande kommen lassen; zustande …3. sich  an etwas zu …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/schaffen",
					"similarWords": [
						"Schaffen",
						"Schaffenslust",
						"schaffensfreudig",
						"schaffenslustig",
						"Schaffensdrang",
						"Schaffenskraft",
						"Schaffensfreude",
						"Schaffensprozess",
						"Schaffensweise",
						"Schaffenskrise",
						"Eisen schaffend, eisenschaffend",
						"schaffig",
						"Schaffe",
						"Remedur",
						"schöpfen",
						"schaffenskräftig",
						"Essayistik",
						"Sinnstiftung",
						"umschaffen"
					]
				}
			}
		},
		"politisches": {
			"word": "politisches",
			"data": {
				"_id": "59189a03ce905c0816aaa3cd",
				"word": "politisches",
				"data": {
					"similarWords": [
						"Politische",
						"Politischer",
						"politisch",
						"umerziehen",
						"unpolitisch",
						"geopolitisch",
						"Missliebigkeit",
						"arbeitgebernah",
						"Rechtsradikale",
						"Rechtsradikaler",
						"Politlandschaft",
						"Politszene",
						"Moslembruderschaft",
						"Weltlage",
						"Polis",
						"Hetzpresse",
						"Hochschulgruppe",
						"Staatspolizei",
						"Politsatire",
						"Konfliktforschung"
					]
				}
			}
		},
		"Handeln": {
			"word": "Handeln",
			"data": {
				"_id": "59189a03ce905c0816aaa3d7",
				"word": "Handeln",
				"data": {
					"description": "Substantiv, Neutrum - jemandes Ausführung einer Handlung",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "jemandes Ausführung einer Handlung"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Handeln",
					"similarWords": [
						"handeln",
						"handeln, seltener händeln",
						"dealen",
						"Gewissenszwang",
						"Diskursanalyse",
						"amtswegig",
						"zweckhaft",
						"Literatentum",
						"Freiwilligkeit",
						"Eupraxie",
						"Militanz",
						"Erziehungsziel",
						"Windbeutelei",
						"Zweisamkeit",
						"Handlungsmöglichkeit",
						"Tatmensch",
						"Herrenfest",
						"proaktiv",
						"Renegatentum"
					]
				}
			}
		},
		"Vielfalt": {
			"word": "Vielfalt",
			"data": {
				"_id": "59189a03ce905c0816aaa3d9",
				"word": "Vielfalt",
				"data": {
					"description": "Substantiv, feminin - Fülle von verschiedenen Arten, Formen o. Ä., in denen etwas Bestimmtes vorhanden ist, vorkommt, sich …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "Fülle von verschiedenen Arten, Formen o. Ä., in denen etwas Bestimmtes vorhanden ist, vorkommt, sich …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Vielfalt",
					"similarWords": [
						"Meinungsvielfalt",
						"Angebotsvielfalt",
						"Formenreichtum",
						"Biodiversität",
						"Diversität",
						"Vielgestaltigkeit",
						"Klaviatur",
						"tierreich",
						"Buntheit",
						"Polyideismus",
						"Multiplizität",
						"Presselandschaft",
						"Artendiversität",
						"programmlich",
						"Vielfältigkeit",
						"Variationsbreite",
						"Vielseitigkeit",
						"Multikulturalität",
						"Artenvielfalt"
					]
				}
			}
		},
		"Handelnden": {
			"word": "Handelnden",
			"data": {
				"_id": "59189a03ce905c0816aaa3d6",
				"word": "Handelnden",
				"data": {
					"similarWords": [
						"Ergativ",
						"Antiheld",
						"Gesinnungsethik",
						"Heimatfilm",
						"Kammerspiel",
						"Numerus",
						"privat",
						"Mittel"
					]
				}
			}
		},
		"insistiert": {
			"word": "insistiert",
			"data": {
				"_id": "59189a03ce905c0816aaa3cf",
				"word": "insistiert",
				"data": {
					"similarWords": [
						"insistieren"
					]
				}
			}
		},
		"stellte": {
			"word": "stellte",
			"data": {
				"_id": "59189a06ce905c0816aaa41b",
				"word": "stellte",
				"data": {
					"similarWords": [
						"nachgestellt",
						"angestellt",
						"Antragsteller",
						"Troll",
						"fix angestellt, fixangestellt",
						"höhergestellt",
						"ausgestellt",
						"Selbststeller",
						"drunterstellen",
						"Standlaut",
						"Eheroman",
						"unverstellt",
						"Aktionskunst",
						"Webserver",
						"Leihgeber",
						"Sommerkollektion",
						"Augenbank",
						"Fragesteller",
						"Frauschaft",
						"Säbelrassler"
					]
				}
			}
		},
		"Tisch": {
			"word": "Tisch",
			"data": {
				"_id": "59189a03ce905c0816aaa3da",
				"word": "Tisch",
				"data": {
					"description": "Substantiv, maskulin - 1a. Möbelstück, das aus einer waagerecht …1b. Gesamtheit von Personen, die an …2. Mahlzeit, Essen",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1a. Möbelstück, das aus einer waagerecht …1b. Gesamtheit von Personen, die an …2. Mahlzeit, Essen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Tisch",
					"similarWords": [
						"Tischfußball",
						"Tischlerhandwerk",
						"Tischtuchklammer",
						"Tischgebet",
						"Tischkarte",
						"Tischrunde",
						"Tischkante",
						"Tischlampe",
						"Tischdecke",
						"Tischlerin",
						"Tischlerei",
						"Tischsitte",
						"Tischbesen",
						"Tischsegen",
						"Tischtennisball",
						"Tischtennisnetz",
						"Tischrücken",
						"Tischordnung",
						"Tischnachbar"
					]
				}
			}
		},
		"hineingetan": {
			"word": "hineingetan",
			"data": {
				"_id": "59189a03ce905c0816aaa3d0",
				"word": "hineingetan",
				"data": {
					"similarWords": [
						"packen",
						"hineintun"
					]
				}
			}
		},
		"Minuten": {
			"word": "Minuten",
			"data": {
				"_id": "59189a03ce905c0816aaa3d8",
				"word": "Minuten",
				"data": {
					"similarWords": [
						"minutenlang",
						"Minutentakt",
						"Minutenpreis",
						"Minutenzeiger",
						"Minute",
						"Dreiviertelstunde",
						"zehnminütig",
						"Arbeitsruhe",
						"Viertelstunde",
						"Schulstunde",
						"vorhin",
						"Redezeit",
						"Fahrtenschwimmer",
						"Uhrzeiger",
						"Nobody",
						"voreinstellen",
						"vorgaren",
						"vorheizen",
						"-minütlich, -minutlich",
						"Eisenbahnstunde"
					]
				}
			}
		},
		"herausnehmen": {
			"word": "herausnehmen",
			"data": {
				"_id": "59189a03ce905c0816aaa3db",
				"word": "herausnehmen",
				"data": {
					"description": "starkes Verb - 1a. aus dem Inneren eines Behälters …1b. (ein Organ) operativ entfernen; 2. jemanden nicht länger in seiner …",
					"wordProperties": {
						"type": "starkes",
						"definition": "1a. aus dem Inneren eines Behälters …1b. (ein Organ) operativ entfernen; 2. jemanden nicht länger in seiner …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/herausnehmen",
					"similarWords": [
						"rausnehmen",
						"Exemtion",
						"umheben",
						"exzidieren",
						"ausmieten",
						"herauslangen",
						"herausnehmbar",
						"wegoperieren",
						"ausknöpfen",
						"ausgrenzen",
						"auspflücken",
						"auslöffeln",
						"Herausstellung",
						"eximieren",
						"entladen",
						"ausladen",
						"entnehmen",
						"ausschlachten",
						"herausgreifen"
					]
				}
			}
		},
		"Danke": {
			"word": "Danke",
			"data": {
				"_id": "59189a04ce905c0816aaa3df",
				"word": "Danke",
				"data": {
					"similarWords": [
						"danke",
						"danken",
						"Dankeschön",
						"Danklied",
						"Verdankung",
						"merci",
						"danksagen, Dank sagen",
						"Dankbrief",
						"Dankgefühl",
						"Dank",
						"dankenswert",
						"Dankeswort",
						"Dankesrede",
						"Dankesbrief",
						"Dankesgruß",
						"Dankopfer",
						"Dankschreiben",
						"Dankward",
						"Dankesworte",
						"dank"
					]
				}
			}
		},
		"Arbeiten": {
			"word": "Arbeiten",
			"data": {
				"_id": "59189a03ce905c0816aaa3dc",
				"word": "Arbeiten",
				"data": {
					"similarWords": [
						"arbeiten",
						"Hand-in-Hand-Arbeiten",
						"Gummihandschuh",
						"barabern",
						"arbeitsunwillig",
						"kunstgewerblich",
						"Silbermine",
						"Arbeitsbesuch",
						"Arbeitswille",
						"Ausschachtungsarbeiten",
						"Gleisarbeiten",
						"tschechern",
						"advozieren",
						"sennen",
						"tagelöhnern",
						"volontieren",
						"plotten",
						"Arbeitszug",
						"Arbeit",
						"patzen"
					]
				}
			}
		},
		"Interessierte": {
			"word": "Interessierte",
			"data": {
				"_id": "59189a03ce905c0816aaa3de",
				"word": "Interessierte",
				"data": {
					"similarWords": [
						"interessiert",
						"sportbegeistert",
						"Stakeholder",
						"investitionsfreudig",
						"skandalsüchtig",
						"bildungsfern",
						"kunstbegeistert",
						"fußballbegeistert",
						"Lustgreis",
						"Liebhaberwert",
						"Sport liebend, sportliebend",
						"aufgeschlossen",
						"interessieren",
						"Allrounder",
						"beiladen",
						"lernbegierig",
						"kunstinteressiert",
						"Interessengebiet, seltener Interessensgebiet",
						"Spaßgesellschaft",
						"Lüstling"
					]
				}
			}
		},
		"wenige": {
			"word": "wenige",
			"data": {
				"_id": "59189a04ce905c0816aaa3e0",
				"word": "wenige",
				"data": {
					"similarWords": [
						"weniger",
						"umso weniger[,] als",
						"Wenig",
						"zu wenig",
						"blutwenig",
						"menschenarm",
						"mordswenig",
						"wie wenig",
						"kochsalzarm",
						"so wenig",
						"wenig",
						"meno",
						"Hinterhof",
						"Ruheposten",
						"Einzelne",
						"pochettino",
						"schlackenarm",
						"kalkarm"
					]
				}
			}
		},
		"Kennen": {
			"word": "Kennen",
			"data": {
				"_id": "59189a05ce905c0816aaa3f9",
				"word": "Kennen",
				"data": {
					"similarWords": [
						"kennen",
						"kennenlernen, kennen lernen",
						"kannte",
						"kennenswert",
						"Kennenlernpreis",
						"Kennenlerntermin",
						"gekannt",
						"Herkunftsgebiet",
						"zweieinhalb",
						"Pappenheimer",
						"Bikompositum",
						"Durchreise",
						"Volksseele",
						"Kindesbeine",
						"wiederkennen",
						"einhören",
						"inwendig",
						"Westentasche",
						"Spielregel",
						"wissenswert"
					]
				}
			}
		},
		"zeitgenössischen": {
			"word": "zeitgenössischen",
			"data": {
				"_id": "59189a05ce905c0816aaa3fa",
				"word": "zeitgenössischen",
				"data": {
					"similarWords": [
						"zeitgenössisch",
						"Neoexpressionismus",
						"Aleatorik",
						"Marxismus-Leninismus",
						"Kulturkritik",
						"Narrative Art",
						"Angebotsspektrum",
						"Verhüllung",
						"Spektrum"
					]
				}
			}
		},
		"bringt": {
			"word": "bringt",
			"data": {
				"_id": "59189a05ce905c0816aaa3fc",
				"word": "bringt",
				"data": {
					"similarWords": [
						"Ertragsmenge",
						"Erstgebärende",
						"Auswandererschiff",
						"Gefahrengebiet",
						"Siegesgöttin",
						"Unglücksbote",
						"Hochleistungsmotor",
						"Devisenbringer",
						"Alltagssorgen",
						"Herbstluft",
						"Kettenstopper",
						"Freudenbringer",
						"regen",
						"Pizzaservice",
						"Puppenkind",
						"Lotsenboot",
						"Gunstbeweis",
						"Magerwiese",
						"Schnellbremsung",
						"Modemacher"
					]
				}
			}
		},
		"befreundeter": {
			"word": "befreundeter",
			"data": {
				"_id": "59189a05ce905c0816aaa3fe",
				"word": "befreundeter",
				"data": {
					"similarWords": [
						"befreundet",
						"eng befreundet, engbefreundet",
						"Bruderland",
						"Bruderpartei",
						"Busenfreund",
						"Tussi",
						"Brudervolk",
						"Tusse",
						"freundschaftlich",
						"unzertrennlich",
						"Kastor",
						"Schulfreund",
						"in statu nascendi",
						"Gevatter",
						"dazwischentreten",
						"befreunden",
						"Fraktion",
						"beziehungsweise",
						"Freundin",
						"vertraut"
					]
				}
			}
		},
		"Buchhändler": {
			"word": "Buchhändler",
			"data": {
				"_id": "59189a03ce905c0816aaa3dd",
				"word": "Buchhändler",
				"data": {
					"description": "Substantiv, maskulin - Berufsbezeichnung; jemand, der Bücher verkauft",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "Berufsbezeichnung; jemand, der Bücher verkauft"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Buchhaendler",
					"similarWords": [
						"Buchhändlerin",
						"buchhändlerisch",
						"Sortimentsbuchhändler",
						"Merian d. Ä.",
						"Baedeker®",
						"Sortimenter",
						"Librarius",
						"Kantate",
						"Buchführer"
					]
				}
			}
		},
		"Saxophonist": {
			"word": "Saxophonist",
			"data": {
				"_id": "59189a03ce905c0816aaa3d1",
				"word": "Saxophonist",
				"data": {
					"similarWords": [
						"Saxofonist, Saxophonist",
						"Saxofonistin, Saxophonistin"
					]
				}
			}
		},
		"Tennis": {
			"word": "Tennis",
			"data": {
				"_id": "59189a05ce905c0816aaa400",
				"word": "Tennis",
				"data": {
					"description": "Substantiv, Neutrum - Ballspiel, bei dem ein kleiner Ball von zwei Spielern (oder Paaren von Spielern) nach bestimmten …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "Ballspiel, bei dem ein kleiner Ball von zwei Spielern (oder Paaren von Spielern) nach bestimmten …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Tennis",
					"similarWords": [
						"Tennisdress",
						"Tennismatch",
						"Tenniskleid",
						"Tennishose",
						"Tennisspiel",
						"Tennishemd",
						"Tenniswand",
						"Tennisschuh",
						"Tennisarm",
						"Tennisplatz",
						"Tennisball",
						"Tennisstar",
						"Tenniscrack",
						"Tenniscourt",
						"Tennisklub, Tennisclub",
						"Tennisspielen",
						"Tennisturnier",
						"Tenniskleidung",
						"Tennisspieler"
					]
				}
			}
		},
		"spiele": {
			"word": "spiele",
			"data": {
				"_id": "59189a05ce905c0816aaa3fb",
				"word": "spiele",
				"data": {
					"similarWords": [
						"Spielerei",
						"Spielerin",
						"spielend",
						"spielen",
						"Spieler",
						"CD-Spieler",
						"MP3-Spieler",
						"spielerisch",
						"Spieleabend",
						"Spielecke",
						"Spielende",
						"Fußball spielen",
						"Spielekonsole",
						"Spieleinsatz",
						"Spielerstamm",
						"Spielerfrau",
						"spielen lassen, spielenlassen",
						"Aufbauspiel",
						"Radballspiel",
						"Offensivspiel"
					]
				}
			}
		},
		"CDs": {
			"word": "CDs",
			"data": {
				"_id": "59189a04ce905c0816aaa3e1",
				"word": "CDs",
				"data": {
					"similarWords": [
						"Raubpressung",
						"Plattensammlung",
						"diskophil",
						"Plattenarchiv",
						"schwarzbrennen",
						"CD-Laufwerk",
						"Abspielgerät",
						"Doppelalbum",
						"Jewelbox",
						"Doppel-CD",
						"Schnäppchenpreis",
						"CD-Brenner",
						"Plattenladen",
						"Schallplattengeschäft",
						"Disco, Disko",
						"CD",
						"Brenner",
						"beschreibbar",
						"pressfrisch",
						"Unterhaltungsindustrie"
					]
				}
			}
		},
		"zuletzt": {
			"word": "zuletzt",
			"data": {
				"_id": "59189a05ce905c0816aaa401",
				"word": "zuletzt",
				"data": {
					"description": "Adverb - 1. an letzter Stelle; als Letztes; …2. als Letzter, Letzte, Letztes; 3. das letzte Mal",
					"wordProperties": {
						"type": "Adverb",
						"definition": "1. an letzter Stelle; als Letztes; …2. als Letzter, Letzte, Letztes; 3. das letzte Mal"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/zuletzt",
					"similarWords": [
						"zuallerletzt",
						"schlussendlich",
						"zu guter Letzt",
						"endlich",
						"letztere, letzterer, letzteres",
						"Siele",
						"wieder einstellen, wiedereinstellen",
						"Kommandogerät",
						"Papierform",
						"letztendlich",
						"last, not least",
						"schließlich",
						"glücklich",
						"Atemzug",
						"repetieren",
						"Hinterhand",
						"letztlich",
						"zuerst",
						"aufrecht"
					]
				}
			}
		},
		"Donaueschinger": {
			"word": "Donaueschinger",
			"data": {
				"_id": "59189a03ce905c0816aaa3d2",
				"word": "Donaueschinger",
				"data": {
					"similarWords": []
				}
			}
		},
		"Musiktagen": {
			"word": "Musiktagen",
			"data": {
				"_id": "59189a03ce905c0816aaa3d5",
				"word": "Musiktagen",
				"data": {
					"similarWords": []
				}
			}
		},
		"kleineres": {
			"word": "kleineres",
			"data": {
				"_id": "59189a05ce905c0816aaa3ff",
				"word": "kleineres",
				"data": {
					"similarWords": [
						"Kleinbetrieb",
						"Untätchen",
						"Erbsenbein",
						"Landungsboot",
						"Zäpflein",
						"Bisschen",
						"Kanälchen",
						"Küchlein",
						"Küchelchen",
						"Brandkasse",
						"Zielfahrt",
						"Bierstube",
						"Hops",
						"Kleinbus",
						"Beserlpark",
						"Kleinsuper",
						"Kleiner",
						"Waldstück",
						"Läsur",
						"Jade"
					]
				}
			}
		},
		"Werk": {
			"word": "Werk",
			"data": {
				"_id": "59189a04ce905c0816aaa3e2",
				"word": "Werk",
				"data": {
					"description": "Substantiv, Neutrum - 1. einer bestimmten [größeren] Aufgabe dienende …2. Handlung, Tat; 3a. Produkt schöpferischer Arbeit",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. einer bestimmten [größeren] Aufgabe dienende …2. Handlung, Tat; 3a. Produkt schöpferischer Arbeit"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Werk",
					"similarWords": [
						"-werk",
						"E-Werk",
						"Gustav-Adolf-Werk",
						"werktäglich",
						"Werktreue",
						"Werkstoff",
						"Werkstatt",
						"Werkschau",
						"Werkdruck",
						"Werkstein",
						"Werkplatz",
						"werktags",
						"werklich",
						"Werkzeug",
						"Werkstattbühne",
						"Werkbank",
						"Werkbund",
						"Werkraum",
						"Werkschaffender"
					]
				}
			}
		},
		"Lust": {
			"word": "Lust",
			"data": {
				"_id": "59189a05ce905c0816aaa405",
				"word": "Lust",
				"data": {
					"description": "Substantiv, feminin - 1a. inneres Bedürfnis, etwas Bestimmtes zu …1b. aus der Befriedigung, der Erfüllung …2a. heftiges, auf die Befriedigung sinnlicher, …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. inneres Bedürfnis, etwas Bestimmtes zu …1b. aus der Befriedigung, der Erfüllung …2a. heftiges, auf die Befriedigung sinnlicher, …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Lust",
					"similarWords": [
						"Lustschloss",
						"Lustschmerz",
						"Lustspiel",
						"Lustgreis",
						"Lustmolch",
						"lustgreis",
						"Lustfahrt",
						"lustvoll",
						"Lustmord",
						"Lusthaus",
						"Lustnerv",
						"Lustwiese",
						"Lustreise",
						"Lustknabe",
						"Lustdroge",
						"Lustesser",
						"Lustgefühl",
						"Lustbarkeit",
						"Lustprinzip"
					]
				}
			}
		},
		"leider": {
			"word": "leider",
			"data": {
				"_id": "59189a05ce905c0816aaa3fd",
				"word": "leider",
				"data": {
					"description": "Adverb - bedauerlicherweise, zu meinem, deinem usw. Bedauern",
					"wordProperties": {
						"type": "Adverb",
						"definition": "bedauerlicherweise, zu meinem, deinem usw. Bedauern"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/leider",
					"similarWords": [
						"leiderfüllt",
						"betrüblicherweise",
						"blöderweise",
						"Sommerurlaub",
						"krummgehen",
						"bedauerlicherweise",
						"fatalerweise",
						"schweineteuer",
						"gehabt",
						"Freitagfrüh",
						"weitermüssen",
						"Segelwind",
						"danebengelingen",
						"ärgerlicherweise",
						"unseligerweise",
						"Sicherheitsmangel",
						"nebbich",
						"dummerweise",
						"besetzt"
					]
				}
			}
		},
		"vorspielen": {
			"word": "vorspielen",
			"data": {
				"_id": "59189a06ce905c0816aaa407",
				"word": "vorspielen",
				"data": {
					"description": "schwaches Verb - 1a. auf einem Instrument spielen, um …1b. (ein Lied, eine Melodie) zuerst …1c. (eine Ton-, Bildaufzeichnung) mithilfe geeigneter …",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1a. auf einem Instrument spielen, um …1b. (ein Lied, eine Melodie) zuerst …1c. (eine Ton-, Bildaufzeichnung) mithilfe geeigneter …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/vorspielen",
					"similarWords": [
						"ricercare",
						"herunterspulen",
						"präludieren",
						"Vorspiel",
						"vorgaukeln",
						"Durchlauf",
						"Türke",
						"fingieren",
						"schauspielern",
						"vorschwindeln",
						"simulieren",
						"mimen",
						"heucheln",
						"vormachen",
						"markieren",
						"spinnen",
						"verstellen",
						"täuschen",
						"stellen"
					]
				}
			}
		},
		"Kassette": {
			"word": "Kassette",
			"data": {
				"_id": "59189a04ce905c0816aaa3e4",
				"word": "Kassette",
				"data": {
					"description": "Substantiv, feminin - 1. kleiner, verschließbarer Kasten aus Metall, …2a. flacher, fester Karton mit zusammengestelltem …2b. die Buchrücken frei lassender, fester …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. kleiner, verschließbarer Kasten aus Metall, …2a. flacher, fester Karton mit zusammengestelltem …2b. die Buchrücken frei lassender, fester …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Kassette",
					"similarWords": [
						"Tonbandkassette",
						"unbespielt",
						"Musikkassette",
						"Videokassette",
						"Autoreverse",
						"Kassettenfach",
						"Musikkonserve",
						"Filmkassette",
						"Kassettenfilm",
						"Tonträger",
						"Packfilm",
						"Kassettendeck",
						"Cassette",
						"Tape",
						"Hörbuch",
						"Kästchen",
						"Kassettengerät",
						"Kassettendecke",
						"Kassettenspieler"
					]
				}
			}
		},
		"Gerät": {
			"word": "Gerät",
			"data": {
				"_id": "59189a05ce905c0816aaa404",
				"word": "Gerät",
				"data": {
					"description": "Substantiv, Neutrum - 1a. [beweglicher] Gegenstand, mit dessen Hilfe …1b. zum Turnen u. a. dienende …2. Gesamtheit von Geräten, Ausrüstung",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1a. [beweglicher] Gegenstand, mit dessen Hilfe …1b. zum Turnen u. a. dienende …2. Gesamtheit von Geräten, Ausrüstung"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Geraet",
					"similarWords": [
						"CT-Gerät",
						"TV-Gerät",
						"ISDN-Gerät",
						"Schwarz-Weiß-Gerät, Schwarzweißgerät",
						"High-End-Gerät, Highendgerät",
						"All-in-one-Gerät",
						"Stand-alone-Gerät",
						"Gerätturnen",
						"Gerätschaft",
						"Gerätübung",
						"Gerätsicherung",
						"Geräteturner, fachsprachlich Gerätturner",
						"Gerätehaus",
						"Geräteübung",
						"Gerätewart",
						"Geräteglas",
						"Geräteboxen",
						"Geräteteil",
						"Geräteraum"
					]
				}
			}
		},
		"optimal": {
			"word": "optimal",
			"data": {
				"_id": "59189a04ce905c0816aaa3e3",
				"word": "optimal",
				"data": {
					"description": "Adjektiv - (unter den gegebenen Voraussetzungen, im Hinblick auf ein zu erreichendes Ziel) bestmöglich; so günstig wie …",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "(unter den gegebenen Voraussetzungen, im Hinblick auf ein zu erreichendes Ziel) bestmöglich; so günstig wie …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/optimal",
					"similarWords": [
						"optimieren",
						"Optimizer",
						"optime",
						"optimalisieren",
						"suboptimal",
						"bestmöglich",
						"hemerophob",
						"höchste, höchster, höchstes",
						"unüberbietbar",
						"energieeffizient",
						"beste, bester, bestes",
						"Perspektivteam",
						"goldrichtig",
						"vollendet",
						"ausgewählt",
						"erlesen",
						"süperb",
						"extrafein",
						"superb"
					]
				}
			}
		},
		"bekommen": {
			"word": "bekommen",
			"data": {
				"_id": "59189a04ce905c0816aaa3e7",
				"word": "bekommen",
				"data": {
					"description": "starkes Verb - 1a. von jemandem etwas als Geschenk, …1b. jemandem (als Äquivalent, als Bezahlung …1c. jemandem zugestellt, übermittelt o. ä. …",
					"wordProperties": {
						"type": "starkes",
						"definition": "1a. von jemandem etwas als Geschenk, …1b. jemandem (als Äquivalent, als Bezahlung …1c. jemandem zugestellt, übermittelt o. ä. …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/bekommen",
					"similarWords": [
						"fertig bekommen, fertigbekommen",
						"freibekommen, frei bekommen",
						"gneißen",
						"Krankheitsrisiko",
						"Herzattacke",
						"Herzkasper",
						"Rotsünder",
						"Goalgetter",
						"Fracksausen",
						"Mutterkreuz",
						"Lehnsbrief",
						"Gummiball",
						"Botenlohn",
						"spondieren",
						"zahnen",
						"Brauereigeschwür",
						"Gnadenhof",
						"Hitzefrei",
						"kratzfest"
					]
				}
			}
		},
		"Eindruck": {
			"word": "Eindruck",
			"data": {
				"_id": "59189a04ce905c0816aaa3e6",
				"word": "Eindruck",
				"data": {
					"description": "Substantiv, maskulin - 1. im Bewusstsein haftende, jemandes Vorstellung …2. in etwas hineingedrückte Spur, Stelle",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. im Bewusstsein haftende, jemandes Vorstellung …2. in etwas hineingedrückte Spur, Stelle"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Eindruck",
					"similarWords": [
						"Eindruckstelle",
						"eindrucken",
						"eindrucksvoll",
						"eindruckslos",
						"Reiseeindruck",
						"Raumbild",
						"Naturerlebnis",
						"Natureindruck",
						"Sauhaufen",
						"Raumfilm",
						"Farbeindruck",
						"Jugendeindruck",
						"unauslöschlich",
						"trutzig",
						"Stereobild",
						"Scheingefecht",
						"Gesamteindruck",
						"Sexprotz",
						"Chorknabe"
					]
				}
			}
		},
		"Ruhe": {
			"word": "Ruhe",
			"data": {
				"_id": "59189a04ce905c0816aaa3e5",
				"word": "Ruhe",
				"data": {
					"description": "Substantiv, feminin - 1a. durch kein [lärmendes] Geräusch und …1b. Bewegungslosigkeit; 2. Zustand erholsamer, beschaulicher Untätigkeit; Entspannung, …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. durch kein [lärmendes] Geräusch und …1b. Bewegungslosigkeit; 2. Zustand erholsamer, beschaulicher Untätigkeit; Entspannung, …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Ruhe",
					"similarWords": [
						"Ruhe liebend, ruheliebend",
						"ruhelos",
						"Ruhetag",
						"Ruhepol",
						"ruhen",
						"ruhend",
						"Ruhegeld",
						"Ruheplatz",
						"Ruhestatt",
						"Ruhebett",
						"Ruhezeit",
						"Ruhelage",
						"Ruhepunkt",
						"Ruhestand",
						"Ruhezone",
						"Ruhebank",
						"Ruhesitz",
						"Ruhepuls",
						"Ruheraum"
					]
				}
			}
		},
		"trinken": {
			"word": "trinken",
			"data": {
				"_id": "59189a05ce905c0816aaa402",
				"word": "trinken",
				"data": {
					"description": "starkes Verb - 1a. Flüssigkeit, ein Getränk zu sich …1b. sich in bestimmter Weise trinken …1c. durch Trinken in einen bestimmten …",
					"wordProperties": {
						"type": "starkes",
						"definition": "1a. Flüssigkeit, ein Getränk zu sich …1b. sich in bestimmter Weise trinken …1c. durch Trinken in einen bestimmten …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/trinken",
					"similarWords": [
						"Trinken",
						"leer trinken, leertrinken",
						"weitertrinken",
						"Trinkglas",
						"Tischkultur",
						"Trinkmilch",
						"Trinkkrug",
						"tschechern",
						"jausnen",
						"fuseln",
						"schickern",
						"Gaumenlust",
						"ex",
						"austrinken",
						"Trinkerei",
						"Brunnenkur",
						"Trinkbranntwein",
						"ausschlürfen",
						"zutschen"
					]
				}
			}
		},
		"stört": {
			"word": "stört",
			"data": {
				"_id": "59189a05ce905c0816aaa403",
				"word": "stört",
				"data": {
					"similarWords": [
						"Verstörtheit",
						"Ungestörtheit",
						"Geistesgestörtheit",
						"verstört",
						"gestört",
						"Störtrupp",
						"Störtebeker",
						"ungestört",
						"essgestört",
						"Störtätigkeit",
						"lerngestört",
						"sprachgestört",
						"unzerstört",
						"kriegszerstört",
						"geistesgestört",
						"Störer",
						"verhaltensgestört",
						"Friedenstörer",
						"Friedensstörer",
						"Störsender"
					]
				}
			}
		},
		"Leid": {
			"word": "Leid",
			"data": {
				"_id": "59189a04ce905c0816aaa3e9",
				"word": "Leid",
				"data": {
					"description": "Substantiv, Neutrum - 1. tiefer seelischer Schmerz als Folge …2. Unrecht, Böses, das jemandem zugefügt …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. tiefer seelischer Schmerz als Folge …2. Unrecht, Böses, das jemandem zugefügt …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Leid",
					"similarWords": [
						"leid",
						"leid sein",
						"leidlich",
						"leidvoll",
						"Leidmahl",
						"Leidwesen",
						"Leidkarte",
						"leidtragend",
						"leidgebeugt",
						"Leidtragender",
						"unleidlich",
						"mitleidvoll",
						"Leidtragende",
						"Leidzirkular",
						"Unleidlichkeit",
						"leiderfüllt",
						"leidgeprüft",
						"leidtun",
						"mitleidlos"
					]
				}
			}
		},
		"Künste": {
			"word": "Künste",
			"data": {
				"_id": "59189a04ce905c0816aaa3ea",
				"word": "Künste",
				"data": {
					"similarWords": [
						"Künstelei",
						"Kunst",
						"Tausendkünstler",
						"Magister Artium",
						"Master of Arts",
						"gekünstelt",
						"enzyklisch",
						"Minerva",
						"Liberalium Artium Magister",
						"Musaget",
						"hexisch",
						"bilden",
						"musisch",
						"Artes liberales",
						"Adept",
						"Gauklerei",
						"Hierarchisierung",
						"Enzyklopädie",
						"Gesamtkunstwerk",
						"Glasperlenspiel"
					]
				}
			}
		},
		"isoliert": {
			"word": "isoliert",
			"data": {
				"_id": "59189a05ce905c0816aaa406",
				"word": "isoliert",
				"data": {
					"description": "Adjektiv - a. keinen Kontakt, keinen Austausch habend; …b. einzeln, vereinzelt",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "a. keinen Kontakt, keinen Austausch habend; …b. einzeln, vereinzelt"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/isoliert",
					"similarWords": [
						"Isoliertheit",
						"schallisoliert",
						"kriechstromfest",
						"Emaildraht",
						"Traumatin",
						"Isolierzelle",
						"Halbleiter",
						"Isolat",
						"Exklave",
						"Literarkritik",
						"Lüsterklemme",
						"Kühltasche",
						"Kühlbox",
						"Nerd",
						"Empfindungslaut",
						"Zeugenberg",
						"zurückgezogen",
						"disjunkt",
						"kontaktscheu"
					]
				}
			}
		},
		"gehört": {
			"word": "gehört",
			"data": {
				"_id": "59189a04ce905c0816aaa3e8",
				"word": "gehört",
				"data": {
					"similarWords": [
						"unerhört",
						"audiatur et altera pars",
						"ungehört",
						"vorschriftsmäßig",
						"laut",
						"Behörde",
						"wie wenig",
						"zahllos",
						"angemessen",
						"gebührend",
						"comme il faut",
						"Alleinbesitz",
						"Fischmesser",
						"Weltklassefrau",
						"Unterweltler",
						"Schiffseigner",
						"Weltklasseläufer",
						"Weltklassespieler",
						"Weltklassefahrer",
						"Nachwuchsfahrer"
					]
				}
			}
		},
		"betrachtet": {
			"word": "betrachtet",
			"data": {
				"_id": "59189a07ce905c0816aaa428",
				"word": "betrachtet",
				"data": {
					"similarWords": [
						"Schmutzliteratur",
						"generaliter",
						"ansehenswert",
						"Zugereister",
						"Kaltstellung",
						"Brotberuf",
						"Leuchtlupe",
						"Teilkraft",
						"Nazivergangenheit",
						"Blickwinkel",
						"Gegenlicht",
						"Multiversum",
						"Akosmismus",
						"Abschaum",
						"Wackelbild",
						"Gesamtlage",
						"Informationsästhetik",
						"Schaufensterbummel",
						"Diabetrachter",
						"Krankengut"
					]
				}
			}
		},
		"vorlesen": {
			"word": "vorlesen",
			"data": {
				"_id": "59189a04ce905c0816aaa3eb",
				"word": "vorlesen",
				"data": {
					"description": "starkes Verb - etwas (Geschriebenes, Gedrucktes) [für jemanden] laut lesen",
					"wordProperties": {
						"type": "starkes",
						"definition": "etwas (Geschriebenes, Gedrucktes) [für jemanden] laut lesen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/vorlesen",
					"similarWords": [
						"sinnbetonend",
						"Rezitation",
						"Vorlesewettbewerb",
						"rückwärtslesen",
						"herunterlesen",
						"reihum",
						"kapiteln",
						"Lesung",
						"Vorlesung",
						"rezitieren",
						"lesen",
						"Levit",
						"Gedicht",
						"verlesen",
						"deklamieren",
						"Lektion",
						"ablesen",
						"diktieren",
						"vorsprechen"
					]
				}
			}
		},
		"musizieren": {
			"word": "musizieren",
			"data": {
				"_id": "59189a06ce905c0816aaa40c",
				"word": "musizieren",
				"data": {
					"description": "schwaches Verb - [mit jemandem zusammen] Musik spielen, zu Gehör bringen",
					"wordProperties": {
						"type": "schwaches",
						"definition": "[mit jemandem zusammen] Musik spielen, zu Gehör bringen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/musizieren",
					"similarWords": [
						"Musizierstil",
						"konzertieren",
						"Hobbymusiker",
						"musizierfreudig",
						"Alternatim",
						"Spielkreis",
						"Ensemblespiel",
						"extemporieren",
						"Jugendmusikbewegung",
						"Musikant",
						"Verb",
						"Band",
						"aufspielen",
						"zusammenspielen",
						"dudeln",
						"instrumental",
						"klimpern",
						"Musik",
						"Engel"
					]
				}
			}
		},
		"Kaffee": {
			"word": "Kaffee",
			"data": {
				"_id": "59189a04ce905c0816aaa3ec",
				"word": "Kaffee",
				"data": {
					"description": "Substantiv, maskulin - 1. Kaffeepflanze, -strauch; 2a. bohnenförmiger Samen des Kaffeestrauches; 2b. Menge gerösteter [gemahlener] Kaffeebohnen",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. Kaffeepflanze, -strauch; 2a. bohnenförmiger Samen des Kaffeestrauches; 2b. Menge gerösteter [gemahlener] Kaffeebohnen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Kaffee",
					"similarWords": [
						"Kaffee-Ersatz, Kaffeeersatz",
						"Kaffee-Extrakt, Kaffeeextrakt",
						"Kaffee-Ernte, Kaffeeernte",
						"Kaffee-Export, Kaffeeexport",
						"Bohnenkaffee",
						"kaffeebraun",
						"Kaffeehaus",
						"Kaffeepad",
						"Kaffeefahrt",
						"Kaffeefleck",
						"Kaffeetisch",
						"Kaffeesatz",
						"Kaffeebaum",
						"Kaffeegrund",
						"Kaffeesud",
						"Kaffeeobers",
						"Kaffeeland",
						"Kaffeesieb",
						"Kaffeemehl"
					]
				}
			}
		},
		"unterhalten": {
			"word": "unterhalten",
			"data": {
				"_id": "59189a06ce905c0816aaa40a",
				"word": "unterhalten",
				"data": {
					"description": "starkes Verb - etwas unter etwas halten",
					"wordProperties": {
						"type": "starkes",
						"definition": "etwas unter etwas halten"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/unterhalten_darunterhalten",
					"similarWords": [
						"Kohlenfeuer",
						"unter-",
						"Reisigfeuer",
						"Stadttheater",
						"Bundestheater",
						"Staatsstraße",
						"Posthoheit",
						"Amerikahaus",
						"Treuhandkonto",
						"Detektivbüro",
						"alimentieren",
						"UN-Organisation",
						"Schulträger",
						"Ratsschule",
						"Postlinie",
						"beplauschen",
						"talken",
						"entertainen"
					]
				}
			}
		},
		"manchmal": {
			"word": "manchmal",
			"data": {
				"_id": "59189a04ce905c0816aaa3ef",
				"word": "manchmal",
				"data": {
					"description": "Adverb - a. nicht regelmäßig, unterschiedlich häufig, mehr …b. in einigen Fällen",
					"wordProperties": {
						"type": "Adverb",
						"definition": "a. nicht regelmäßig, unterschiedlich häufig, mehr …b. in einigen Fällen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/manchmal",
					"similarWords": [
						"Girlie",
						"schlossern",
						"zuweilen",
						"okkasionell",
						"phasenweise",
						"Reisebeschreibung",
						"Tintling",
						"Honiggras",
						"aufklagen",
						"des Öfteren",
						"öfters",
						"bisweilen",
						"mitunter",
						"betütern",
						"fallweise",
						"Klubjacke, Clubjacke",
						"Lapislazuli",
						"überbelichten",
						"Kofferdam"
					]
				}
			}
		},
		"Jazz": {
			"word": "Jazz",
			"data": {
				"_id": "59189a06ce905c0816aaa40f",
				"word": "Jazz",
				"data": {
					"description": "Substantiv, maskulin - aus der Volksmusik der nordamerikanischen Afroamerikaner entstandene Musik mit charakteristischen Rhythmusinstrumenten und mit Bläsergruppen, die …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "aus der Volksmusik der nordamerikanischen Afroamerikaner entstandene Musik mit charakteristischen Rhythmusinstrumenten und mit Bläsergruppen, die …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Jazz",
					"similarWords": [
						"Free Jazz",
						"Cool Jazz",
						"Hot Jazz",
						"Jazzdance",
						"Jazzpreis",
						"Jazzrock",
						"Jazzband",
						"Jazzfunk",
						"Jazztanz",
						"Jazzmusik",
						"Jazzbesen",
						"Jazzmusikerin",
						"Jazzformation",
						"Jazzkonzert",
						"Jazzsänger",
						"Jazzfrühschoppen",
						"Jazzgymnastik",
						"Jazztrompeter",
						"Jazzsängerin"
					]
				}
			}
		},
		"Klassik": {
			"word": "Klassik",
			"data": {
				"_id": "59189a04ce905c0816aaa3ed",
				"word": "Klassik",
				"data": {
					"description": "Substantiv, feminin - 1. Kultur und Kunst der griechisch-römischen …2. Epoche, die sich Kultur und …3. Epoche kultureller Höchstleistung",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. Kultur und Kunst der griechisch-römischen …2. Epoche, die sich Kultur und …3. Epoche kultureller Höchstleistung"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Klassik",
					"similarWords": [
						"Klassiker",
						"Frühklassik",
						"Klassikerin",
						"Spätklassik",
						"Bildungsideal",
						"gegenklassisch",
						"Rückbesinnung",
						"Goethezeit, Goethe-Zeit",
						"Attizismus",
						"Jungdeutscher",
						"Grenzgang",
						"Jungdeutsche",
						"Romantik",
						"Cross-over, Crossover",
						"Dichtkunst",
						"Antike",
						"Rückgriff",
						"verpoppen",
						"meets"
					]
				}
			}
		},
		"Werbebranche": {
			"word": "Werbebranche",
			"data": {
				"_id": "59189a03ce905c0816aaa3d3",
				"word": "Werbebranche",
				"data": {
					"description": "Substantiv, feminin - den Bereich der Werbung umfassende Branche",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "den Bereich der Werbung umfassende Branche"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Werbebranche",
					"similarWords": [
						"Konzeptioner",
						"Werbungtreibende, Werbung Treibende",
						"Werbungtreibender, Werbung Treibender"
					]
				}
			}
		},
		"Frisur": {
			"word": "Frisur",
			"data": {
				"_id": "59189a06ce905c0816aaa410",
				"word": "Frisur",
				"data": {
					"description": "Substantiv, feminin - 1. Art und Weise, in der …2. das Frisieren",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. Art und Weise, in der …2. das Frisieren"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Frisur",
					"similarWords": [
						"Haarfrisur",
						"Schneckenfrisur",
						"Ponyfrisur",
						"Stoppelfrisur",
						"Frise",
						"Frisurenmode",
						"Gretchenfrisur",
						"Intimfrisur",
						"Kurzhaarfrisur",
						"Lockenfrisur",
						"Zottelkopf",
						"Schnittfrisur",
						"Beatlemähne",
						"Coiffure",
						"kleidsam",
						"Sturmfrisur",
						"Afrofrisur",
						"Dormeuse",
						"Hochfrisur"
					]
				}
			}
		},
		"Hab": {
			"word": "Hab",
			"data": {
				"_id": "59189a04ce905c0816aaa3f1",
				"word": "Hab",
				"data": {
					"similarWords": [
						"Dr. … habil.",
						"Hab und Gut",
						"habsüchtig",
						"Habsucht",
						"Habdala",
						"habhaft",
						"hablich",
						"Habgier",
						"Habschaft",
						"Habseligkeit",
						"Handhabbarkeit",
						"Habachtstellung",
						"habgierig",
						"Habe",
						"handhabbar",
						"recht haben, Recht haben",
						"habil",
						"gehabt",
						"Godthåb",
						"Habsburg"
					]
				}
			}
		},
		"schneiden": {
			"word": "schneiden",
			"data": {
				"_id": "59189a05ce905c0816aaa3f8",
				"word": "schneiden",
				"data": {
					"description": "unregelmäßiges Verb - 1a. (mit dem Messer oder einem …1b. (mit dem Messer oder einem …2. durch Schneiden kürzen [und in …",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/schneiden",
					"similarWords": [
						"klein schneiden, kleinschneiden",
						"kurz schneiden, kurzschneiden",
						"schneidend",
						"schnitt",
						"schneidbar",
						"Schneidewerkzeug",
						"Brotmesser",
						"Grassichel",
						"Schneidetechnik",
						"Schnittkurve",
						"Papierschere",
						"Blechschere",
						"Schneideraum",
						"anstufen",
						"Haarschere",
						"Glasstaub",
						"Schneidediamant",
						"hineinschneiden",
						"cutten"
					]
				}
			}
		},
		"Kartoffel": {
			"word": "Kartoffel",
			"data": {
				"_id": "59189a04ce905c0816aaa3ee",
				"word": "Kartoffel",
				"data": {
					"description": "Substantiv, feminin - 1. krautige Pflanze mit gefiederten Blättern …2. essbare Knolle der Kartoffel; 3. knollige Nase",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. krautige Pflanze mit gefiederten Blättern …2. essbare Knolle der Kartoffel; 3. knollige Nase"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Kartoffel",
					"similarWords": [
						"Grundbirne",
						"Herdapfel",
						"Knollenfäule",
						"Kartöffelchen",
						"Pellkartoffel",
						"Salzkartoffel",
						"Speisekartoffel",
						"Kartoffelschale",
						"Kartoffelknolle",
						"Kartoffelpflanze",
						"Futterkartoffel",
						"Genkartoffel",
						"Kartoffelnase",
						"Erdbirne",
						"Salatkartoffel",
						"Pflanzkartoffel",
						"Folienkartoffel",
						"Frühkartoffel",
						"Kipfler"
					]
				}
			}
		},
		"recherchieren": {
			"word": "recherchieren",
			"data": {
				"_id": "59189a06ce905c0816aaa40b",
				"word": "recherchieren",
				"data": {
					"description": "schwaches Verb - a. Ermittlungen, Nachforschungen anstellen; b. durch Recherchen aufdecken, herausfinden, ermitteln",
					"wordProperties": {
						"type": "schwaches",
						"definition": "a. Ermittlungen, Nachforschungen anstellen; b. durch Recherchen aufdecken, herausfinden, ermitteln"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/recherchieren",
					"similarWords": [
						"Rechercheur",
						"recherchierbar",
						"Rechercheauftrag",
						"Research",
						"rausfinden",
						"nachrecherchieren",
						"Recherche",
						"googeln",
						"nachspionieren",
						"nachschnüffeln",
						"inquirieren",
						"bloßlegen",
						"ergründen",
						"nachspüren",
						"ausmitteln",
						"ermitteln",
						"requirieren",
						"eruieren",
						"erforschen"
					]
				}
			}
		},
		"inzwischen": {
			"word": "inzwischen",
			"data": {
				"_id": "59189a06ce905c0816aaa40e",
				"word": "inzwischen",
				"data": {
					"description": "Adverb - a. unterdessen; a. gibt an, dass …b. währenddessen; b. gibt an, dass …c. bis dahin; c. gibt an, …",
					"wordProperties": {
						"type": "Adverb",
						"definition": "a. unterdessen; a. gibt an, dass …b. währenddessen; b. gibt an, dass …c. bis dahin; c. gibt an, …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/inzwischen",
					"similarWords": [
						"zwischenher",
						"unterdessen",
						"dieweil, dieweilen",
						"Interim",
						"zwischenzeitlich",
						"Glanzzeit",
						"Ergasiolipophyt",
						"zurückhaben",
						"vorbeileben",
						"alldieweil",
						"mittlerweile",
						"derweil, veraltet derweilen",
						"arriviert",
						"Surfer",
						"Brennball",
						"unterdes",
						"Holzauge",
						"geklärt",
						"einstweilen"
					]
				}
			}
		},
		"merkwürdige": {
			"word": "merkwürdige",
			"data": {
				"_id": "59189a06ce905c0816aaa412",
				"word": "merkwürdige",
				"data": {
					"similarWords": [
						"merkwürdigerweise",
						"Merkwürdigkeit",
						"befremdlich",
						"befremdend",
						"merkwürdig",
						"abwegig",
						"kauzig",
						"eigenbrötlerisch",
						"irr",
						"befremden",
						"Mucke",
						"absonderlich",
						"verwunderlich",
						"eigentümlich",
						"Eigenart",
						"verquer",
						"ausgefallen",
						"putzig",
						"abartig",
						"bizarr"
					]
				}
			}
		},
		"Geschichten": {
			"word": "Geschichten",
			"data": {
				"_id": "59189a06ce905c0816aaa40d",
				"word": "Geschichten",
				"data": {
					"similarWords": [
						"Geschichtenbuch",
						"Dönkes",
						"verwursten",
						"Geschichte",
						"Geschichtenerzählerin",
						"Geschichtenerzähler",
						"Fabelbuch",
						"Heimatkalender",
						"geheimnisumwittert",
						"Vorlesewettbewerb",
						"Döhnkes",
						"tolldreist",
						"erbaulich",
						"Märchentante",
						"Fabulant",
						"Märchenonkel",
						"Kamellen",
						"fabeln",
						"Narrative Art",
						"kindertümlich"
					]
				}
			}
		},
		"erlebt": {
			"word": "erlebt",
			"data": {
				"_id": "59189a06ce905c0816aaa416",
				"word": "erlebt",
				"data": {
					"description": "erlebte Rede (Sprachwissenschaft)",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/erlebt",
					"similarWords": [
						"Erleben",
						"erlebbar",
						"Besucherandrang",
						"Erinnerungsbild",
						"Naturerlebnis",
						"Boomjahr",
						"Boomphase",
						"Erlebnisbericht",
						"Weltgefühl",
						"Abenteuertrip",
						"Schaulust",
						"Scheinwelt",
						"Naturdichtung",
						"konfabulieren",
						"Naturlyrik",
						"Abenteuerfahrt",
						"Sehraum",
						"Setting",
						"Glanzzeit"
					]
				}
			}
		},
		"fängt": {
			"word": "fängt",
			"data": {
				"_id": "59189a06ce905c0816aaa411",
				"word": "fängt",
				"data": {
					"similarWords": [
						"Vogelfänger",
						"Krabbenfischer",
						"Garnelenfischer",
						"Schlangenfänger",
						"fangen",
						"Fanghand",
						"Angler",
						"Fänger",
						"Wolfsspinne",
						"Heringsbändiger",
						"Springspinne",
						"Bienenwolf",
						"Feldmauser",
						"pubertieren",
						"rindern",
						"Fledermaus",
						"Weihnachtsbäckerei",
						"Wolkenbruch",
						"schwätzen",
						"umdenken"
					]
				}
			}
		},
		"landet": {
			"word": "landet",
			"data": {
				"_id": "59189a06ce905c0816aaa408",
				"word": "landet",
				"data": {
					"similarWords": [
						"Mondfahrer",
						"Lander",
						"Abspiel",
						"Klapsmühle",
						"Straßengraben",
						"zwischenlanden",
						"Return",
						"anlanden",
						"Dotcom",
						"Abstoß",
						"Blattschuss",
						"abgeschlagen",
						"Flugzeug",
						"Befreiungsschlag",
						"landen",
						"Rückhand",
						"Treffer",
						"Tor"
					]
				}
			}
		},
		"woanders": {
			"word": "woanders",
			"data": {
				"_id": "59189a04ce905c0816aaa3f0",
				"word": "woanders",
				"data": {
					"description": "Adverb - an einem anderen Ort, an einer anderen Stelle",
					"wordProperties": {
						"type": "Adverb",
						"definition": "an einem anderen Ort, an einer anderen Stelle"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/woanders",
					"similarWords": [
						"woandershin",
						"woandersher",
						"anderswo",
						"unaufmerksam sein",
						"umparken",
						"andernorts",
						"ummelden",
						"fehlend",
						"gedankenfern",
						"umschreiben",
						"ausgeflogen",
						"außerhalb",
						"auswärts",
						"träumen",
						"abwesend",
						"pennen",
						"unterkommen",
						"schlafen",
						"anders"
					]
				}
			}
		},
		"anderer": {
			"word": "anderer",
			"data": {
				"_id": "59189a06ce905c0816aaa409",
				"word": "anderer",
				"data": {
					"similarWords": [
						"andererseits, anderseits, andrerseits",
						"andere, anderer, anderes",
						"anders gesinnt",
						"u. a.",
						"umstufen",
						"andre, andrer, andres",
						"anders Gesinnte, Andersgesinnte",
						"anders Gesinnter, Andersgesinnter",
						"allometrisch",
						"anpreien",
						"anders",
						"anderslautend, anders lautend",
						"Aliud",
						"Informator",
						"u. v. a. m.",
						"u. a. m.",
						"zwischendrein",
						"Sirius",
						"lichtbrechend",
						"Mitverschulden"
					]
				}
			}
		},
		"Kopf": {
			"word": "Kopf",
			"data": {
				"_id": "59189a06ce905c0816aaa414",
				"word": "Kopf",
				"data": {
					"description": "Substantiv, maskulin - 1. oft rundlicher [durch den Hals …2a. Person mit bestimmten [intellektuellen] Fähigkeiten; …2b. an der Spitze von etwas …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. oft rundlicher [durch den Hals …2a. Person mit bestimmten [intellektuellen] Fähigkeiten; …2b. an der Spitze von etwas …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Kopf",
					"similarWords": [
						"Kopf-an-Kopf-Rennen",
						"pro Kopf",
						"über Kopf, überkopf",
						"Kopfschmuck",
						"Kopfschmerz",
						"Kopfdüngung",
						"Kopffüßler",
						"kopfüber",
						"kopfscheu",
						"Kopfgrind",
						"Kopfstoß",
						"Kopfstand",
						"Kopfblatt",
						"Kopfputz",
						"Kopfteil",
						"Kopfgeld",
						"Kopftuch",
						"Kopfhaar",
						"Kopfnuss"
					]
				}
			}
		},
		"Labyrinthe": {
			"word": "Labyrinthe",
			"data": {
				"_id": "59189a05ce905c0816aaa3f3",
				"word": "Labyrinthe",
				"data": {
					"similarWords": [
						"Labyrinthitis",
						"Irrgang",
						"Irrgarten",
						"labyrinthartig",
						"labyrinthisch",
						"Minos",
						"Labyrinth",
						"Endolymphe",
						"Ikarus",
						"Ikaros",
						"Ariadnefaden",
						"Gehörknöchelchen",
						"Gewirre",
						"Gewirr",
						"herausfinden"
					]
				}
			}
		},
		"Faden": {
			"word": "Faden",
			"data": {
				"_id": "59189a05ce905c0816aaa3f4",
				"word": "Faden",
				"data": {
					"description": "Substantiv, maskulin - 1. langes, sehr dünnes, aus Fasern …2. etwas, was die Form eines …3. Maßeinheit, die etwa 1,80 m …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. langes, sehr dünnes, aus Fasern …2. etwas, was die Form eines …3. Maßeinheit, die etwa 1,80 m …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Faden",
					"similarWords": [
						"DNA-Faden",
						"fadendünn",
						"Fadenglas",
						"Fadenspiel",
						"Fadenkreuz",
						"Fadenende",
						"Fadenpilz",
						"Fadenlauf",
						"Fadenwurm",
						"fadenlos",
						"Fadennetz",
						"Spinnfaden",
						"Fädchen",
						"fadenscheinig",
						"fadenförmig",
						"Fadenheftung",
						"Fadenstärke",
						"Fadendichte",
						"Fadennudel"
					]
				}
			}
		},
		"verloren": {
			"word": "verloren",
			"data": {
				"_id": "59189a06ce905c0816aaa413",
				"word": "verloren",
				"data": {
					"description": "Adjektiv - dem Verderben preisgegeben, zum Untergang bestimmt; nicht mehr zu retten",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "dem Verderben preisgegeben, zum Untergang bestimmt; nicht mehr zu retten"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/verloren_unrettbar_erledigt",
					"similarWords": [
						"verloren gehen, verlorengehen",
						"verloren geben, verlorengeben",
						"Verlorenheit",
						"beinamputiert",
						"Wettschuld",
						"perdu",
						"armamputiert",
						"Kriegstote",
						"Kriegstoter",
						"Heimattreffen",
						"Vollwaise",
						"Laufschreiben",
						"Nachforschungsantrag",
						"unrettbar",
						"flöten gehen",
						"entgleiten",
						"uneinbringlich",
						"brustamputiert"
					]
				}
			}
		},
		"Roter": {
			"word": "Roter",
			"data": {
				"_id": "59189a05ce905c0816aaa3f2",
				"word": "Roter",
				"data": {
					"similarWords": [
						"Roterde",
						"Fuchsin",
						"Kirschenmund",
						"Barbarossa",
						"Phloxin",
						"Korallin",
						"Myoglobin",
						"Roteisenerz",
						"Roteisen",
						"Lipochrom",
						"Roteisenstein",
						"Herbstfarbe",
						"Gabelweihe",
						"Rotton",
						"Rooibostee",
						"Koschenillerot",
						"Alizarin",
						"Rhodopsin",
						"Karmesin",
						"Pinkcolour"
					]
				}
			}
		},
		"Baum": {
			"word": "Baum",
			"data": {
				"_id": "59189a05ce905c0816aaa3f5",
				"word": "Baum",
				"data": {
					"description": "Substantiv, maskulin - 1. Holzgewächs mit festem Stamm, aus …2. den Baum schmücken; 2. sie …3. Graph mit mehreren Knoten, deren …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. Holzgewächs mit festem Stamm, aus …2. den Baum schmücken; 2. sie …3. Graph mit mehreren Knoten, deren …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Baum",
					"similarWords": [
						"Ylang-Ylang-Baum, Ilang-Ilang-Baum",
						"Baumschnitt",
						"Baumschwamm",
						"Baumwollfeld",
						"Baumwolltuch",
						"Baumwollgarn",
						"Baumwollhemd",
						"baumstark",
						"baumreich",
						"Baumwuchs",
						"Baumstamm",
						"Baumwachs",
						"Baumpfahl",
						"baumhoch",
						"baumlang",
						"Baumhaus",
						"Baumharz",
						"Baumwollgewebe",
						"Baumwollpflanze"
					]
				}
			}
		},
		"bedeutet": {
			"word": "bedeutet",
			"data": {
				"_id": "59189a05ce905c0816aaa3f7",
				"word": "bedeutet",
				"data": {
					"similarWords": [
						"mikro-, Mikro-, vor Vokalen meist mikr-, Mikr-",
						"Ehrenstuhl",
						"poly-, Poly-",
						"makro-, Makro-, vor Vokalen meist makr-, Makr-",
						"Vergleichsjahr",
						"Selbstkritik",
						"Ehrenkarte",
						"Stresssituation, Stress-Situation",
						"Hammerwurf",
						"Dauerton",
						"Geldsegen",
						"Sachmangel",
						"endo-, Endo-, vor Vokalen meist end-, End-",
						"semi-, Semi-",
						"Giga-",
						"prozentualiter",
						"pan-, Pan-",
						"para-, Para-",
						"Preisgabe",
						"Neuerung"
					]
				}
			}
		},
		"Kartoffelsorte": {
			"word": "Kartoffelsorte",
			"data": {
				"_id": "59189a03ce905c0816aaa3d4",
				"word": "Kartoffelsorte",
				"data": {
					"description": "Substantiv, feminin - Sorte von Kartoffeln",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "Sorte von Kartoffeln"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Kartoffelsorte",
					"similarWords": [
						"Salatkartoffel",
						"Winterkartoffel",
						"Einkellerungskartoffel",
						"abbauen"
					]
				}
			}
		},
		"Onkel": {
			"word": "Onkel",
			"data": {
				"_id": "59189a05ce905c0816aaa3f6",
				"word": "Onkel",
				"data": {
					"description": "Substantiv, maskulin - 1. Bruder oder Schwager der Mutter …2a. [bekannter] männlicher Erwachsener; 2b. Mann",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. Bruder oder Schwager der Mutter …2a. [bekannter] männlicher Erwachsener; 2b. Mann"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Onkel_Verwandter_Erwachsener",
					"similarWords": [
						"-onkel",
						"Ohm",
						"onkeln",
						"onkelhaft",
						"Onkelehe",
						"Nennonkel",
						"Oheim",
						"Wahlonkel",
						"Sam",
						"Erbonkel",
						"angeheiratet",
						"Großtante",
						"Abbaside",
						"angeblich",
						"Fürsprache",
						"Uncle Sam",
						"gelaunt",
						"Vormund"
					]
				}
			}
		},
		"Kartoffeln": {
			"word": "Kartoffeln",
			"data": {
				"_id": "59189a06ce905c0816aaa415",
				"word": "Kartoffeln",
				"data": {
					"similarWords": [
						"Kartoffelnase",
						"festkochend",
						"ausmieten",
						"Kartoffelmehl",
						"Kartoffelernte",
						"Kartoffelsorte",
						"Kartoffelacker",
						"Einkellerungskartoffeln",
						"Pflanzkartoffeln",
						"Kartoffel",
						"Quarkkäulchen",
						"Käulchen",
						"Schneebällchen",
						"Pflanzkartoffel",
						"Kartoffelsalat",
						"Kartoffelsack",
						"Petersilienkartoffeln",
						"Nassfäule",
						"Käserösti",
						"Kartoffelkorb"
					]
				}
			}
		},
		"schmecken": {
			"word": "schmecken",
			"data": {
				"_id": "59189a06ce905c0816aaa417",
				"word": "schmecken",
				"data": {
					"description": "schwaches Verb - 1a. mit der Zunge, dem Gaumen …1b. riechen; 2a. eine bestimmte Empfindung im Mund …",
					"wordProperties": {
						"type": "schwaches",
						"definition": "1a. mit der Zunge, dem Gaumen …1b. riechen; 2a. eine bestimmte Empfindung im Mund …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/schmecken",
					"similarWords": [
						"gustatorisch",
						"wohlschmeckend, wohl schmeckend",
						"hereinschmecken",
						"Mauerpfeffer",
						"gustieren",
						"Schmackofatz",
						"munden",
						"umami",
						"strohig",
						"faulig",
						"brandig",
						"degustieren",
						"Kokos",
						"abgeschmackt",
						"herausschmecken",
						"verkosten",
						"faulenzen",
						"konvenieren",
						"missfallen"
					]
				}
			}
		},
		"einzelnen": {
			"word": "einzelnen",
			"data": {
				"_id": "59189a07ce905c0816aaa41d",
				"word": "einzelnen",
				"data": {
					"similarWords": [
						"im Einzelnen",
						"Solotanz",
						"schichtweise",
						"flockenweise",
						"tageweise",
						"rottenweise",
						"sektionsweise",
						"bahnenweise",
						"segmentär",
						"Schulautonomie",
						"Rechtsschutz",
						"Appartementhaus",
						"Apartmenthaus",
						"Festprogramm",
						"Dezision",
						"Kopfquote",
						"Klassenkonflikt",
						"Haustarif",
						"durchkomponieren",
						"Gliederarmband"
					]
				}
			}
		},
		"Sorten": {
			"word": "Sorten",
			"data": {
				"_id": "59189a07ce905c0816aaa423",
				"word": "Sorten",
				"data": {
					"similarWords": [
						"sortenrein",
						"Sortenkurs",
						"Sortenmarkt",
						"kreuzbar",
						"Sortenauswahl",
						"Sortenkreuzung",
						"Sortenhandel",
						"Sortenzettel",
						"Sortenschutz",
						"Sortenliste",
						"Käseaufschnitt",
						"Rosenschau",
						"Wurstplatte",
						"Nacktgetreide",
						"Spelzgetreide",
						"Sortengeschäft",
						"Sortenfertigung",
						"wievielerlei",
						"Aufschnitt",
						"Rohholz"
					]
				}
			}
		},
		"schmeckte": {
			"word": "schmeckte",
			"data": {
				"_id": "59189a07ce905c0816aaa41e",
				"word": "schmeckte",
				"data": {
					"similarWords": [
						"korkig",
						"Rumaroma",
						"hefig",
						"Bitterling",
						"Bitterstoff",
						"Pfefferminz",
						"weinig",
						"mmh",
						"schokoladig",
						"Hausmacherwurst",
						"Liebesknochen",
						"Gaumen",
						"schmecken",
						"hoi",
						"i",
						"unübel",
						"trinkbar",
						"Fertiggericht",
						"Schlangenfraß",
						"superb"
					]
				}
			}
		},
		"gekochtem": {
			"word": "gekochtem",
			"data": {
				"_id": "59189a07ce905c0816aaa41c",
				"word": "gekochtem",
				"data": {
					"similarWords": [
						"Fleischbrot",
						"Schinkensalat",
						"Fleischbrötchen",
						"Ochsenmaulsalat",
						"Essengeruch",
						"Reisklößchen",
						"Bulgur",
						"Ochsenschwanzsuppe",
						"Reisschleim",
						"Olla podrida",
						"Coulis",
						"Tafelspitz",
						"Cordon bleu",
						"Frikassee",
						"Mus",
						"Gemüse",
						"Salat",
						"kochen"
					]
				}
			}
		},
		"Zustand": {
			"word": "Zustand",
			"data": {
				"_id": "59189a07ce905c0816aaa42c",
				"word": "Zustand",
				"data": {
					"description": "Substantiv, maskulin - a. augenblickliches Beschaffen-, Geartetsein; Art und …b. augenblicklich bestehende Lage, Situation, Verhältnisse",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "a. augenblickliches Beschaffen-, Geartetsein; Art und …b. augenblicklich bestehende Lage, Situation, Verhältnisse"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Zustand",
					"similarWords": [
						"zustande, zu Stande",
						"Zustandsverb",
						"zustande kommen, zu Stande kommen",
						"Nicht-zustande-Kommen, Nicht-zu-Stande-Kommen",
						"Zustandspassiv",
						"Istzustand, Ist-Zustand",
						"Sollzustand, Soll-Zustand",
						"zustande bringen, zu Stande bringen",
						"Leerheit",
						"Isomorphie",
						"vertraglos",
						"Zustandekommen",
						"Zustandebringen",
						"Zustandsgröße",
						"Zustandsgleichung",
						"Zustandshaftung",
						"Zustandsdiagramm",
						"Zustandsänderung",
						"Normalzustand"
					]
				}
			}
		},
		"heraus": {
			"word": "heraus",
			"data": {
				"_id": "59189a07ce905c0816aaa421",
				"word": "heraus",
				"data": {
					"description": "Adverb - von dort drinnen hierher nach draußen",
					"wordProperties": {
						"type": "Adverb",
						"definition": "von dort drinnen hierher nach draußen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/heraus",
					"similarWords": [
						"heraus-",
						"heraus sein",
						"Herausgeld",
						"heraustun",
						"herausixen",
						"Trotzreaktion",
						"Drehschuss",
						"raus",
						"'naus",
						"Tiefstart",
						"Schwungkippe",
						"Absprungschritt",
						"herausnehmbar",
						"herausnehmen",
						"Herausgabe",
						"herausgeben",
						"herauskommen",
						"Herausbildung",
						"Herausgeber"
					]
				}
			}
		},
		"Sterben": {
			"word": "Sterben",
			"data": {
				"_id": "59189a07ce905c0816aaa41f",
				"word": "Sterben",
				"data": {
					"description": "Substantiv, Neutrum - im Sterben liegen; das große Sterben (die Pest); es ist zum Sterben langweilig (umgangssprachlich für …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "im Sterben liegen; das große Sterben (die Pest); es ist zum Sterben langweilig (umgangssprachlich für …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Sterben",
					"similarWords": [
						"sterben",
						"-sterben",
						"Sterbende",
						"Sterbender",
						"sterbensmatt",
						"Sterbenswort",
						"gestorben",
						"abberufen werden",
						"totgehen",
						"hungers",
						"todbereit",
						"verröcheln",
						"Filmtod",
						"sterbensübel",
						"sterbenskrank",
						"sterbenselend",
						"sterbensmüde",
						"Sterbensseele",
						"Sterbensangst"
					]
				}
			}
		},
		"lag": {
			"word": "lag",
			"data": {
				"_id": "59189a07ce905c0816aaa420",
				"word": "lag",
				"data": {
					"description": "siehe liegen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/lag",
					"similarWords": [
						"Lag",
						"LAG",
						"Lagg",
						"Cultural Lag",
						"Lagting",
						"stalagmitisch",
						"Lage",
						"Stalagmometer",
						"Erlagschein",
						"Stalagmit",
						"Eins-a-Lage",
						"synallagmatisch",
						"Jetlag",
						"Verlagshaus",
						"Verlagschef",
						"Verlagshandlung",
						"Lagos",
						"Verlag",
						"Lager"
					]
				}
			}
		},
		"wu": {
			"word": "wu",
			"data": {
				"_id": "59189a07ce905c0816aaa429",
				"word": "wu",
				"data": {
					"similarWords": [
						"Wu",
						"grasüberwuchert",
						"wuschelköpfig",
						"Wuchertum",
						"Preiswucher",
						"Wucherei",
						"Zellwucherung",
						"Überwucherung",
						"Bewucherung",
						"Wucherzinsen",
						"umwuchern",
						"Wukela",
						"wucherisch",
						"Wuzeltisch",
						"Wucherzins",
						"verwuscheln",
						"wuschig",
						"wuchern",
						"wuseln",
						"Wucher"
					]
				}
			}
		},
		"te": {
			"word": "te",
			"data": {
				"_id": "59189a07ce905c0816aaa42d",
				"word": "te",
				"data": {
					"similarWords": [
						"Te",
						"n-te, n-ter, n-tes",
						"x-te, x-ter, x-tes",
						"Tao-Te-King",
						"Feistheit",
						"Feiste",
						"dufte",
						"Tellur",
						"Beamtete",
						"Geröstete",
						"Plastetüte",
						"Schildkrot",
						"TED",
						"hinterst",
						"Konjugationsendung",
						"Esparsette",
						"Schrat",
						"Schrätel",
						"siebte, siebter, siebtes",
						"Annette, Anette"
					]
				}
			}
		},
		"meinte": {
			"word": "meinte",
			"data": {
				"_id": "59189a07ce905c0816aaa422",
				"word": "meinte",
				"data": {
					"similarWords": [
						"gemeint",
						"Hauptkerl",
						"ernst gemeint, ernstgemeint",
						"gut gemeint, gutgemeint",
						"Gottvertrauen",
						"Antiphrase",
						"Phantomschmerz",
						"anheimeln",
						"irrtümlicherweise",
						"bitterernst",
						"vermeintlich",
						"Behördenapparat",
						"Umschweif",
						"vorbeireden",
						"King",
						"Besserwisser",
						"meinen",
						"Zungenschlag",
						"Petrus",
						"Bündel"
					]
				}
			}
		},
		"Irgendwann": {
			"word": "Irgendwann",
			"data": {
				"_id": "59189a07ce905c0816aaa42a",
				"word": "Irgendwann",
				"data": {
					"similarWords": [
						"irgendwann",
						"irgendeinmal",
						"jemals",
						"unterjährig",
						"später",
						"späterhin",
						"je",
						"einmal",
						"spielend",
						"einst",
						"gelegentlich",
						"mal",
						"noch",
						"wann",
						"Gelegenheit",
						"früh",
						"verschwinden",
						"Tag",
						"Licht"
					]
				}
			}
		},
		"Gesangstück": {
			"word": "Gesangstück",
			"data": {
				"_id": "59189a06ce905c0816aaa419",
				"word": "Gesangstück",
				"data": {
					"description": "siehe Gesangsstück",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Gesangstueck",
					"similarWords": []
				}
			}
		},
		"lauter": {
			"word": "lauter",
			"data": {
				"_id": "59189a07ce905c0816aaa426",
				"word": "lauter",
				"data": {
					"description": "Adjektiv - 1. rein, unvermischt, ungetrübt; 2. aufrichtig, ehrlich",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1. rein, unvermischt, ungetrübt; 2. aufrichtig, ehrlich"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/lauter_anstaendig_unverdorben",
					"similarWords": [
						"Lauterkeit",
						"Lutter",
						"Siegesgeschrei",
						"Schmerzensruf",
						"Urschrei",
						"Wutschrei",
						"unvermischt",
						"grundehrlich",
						"einlinig",
						"unverstellt",
						"kreuzehrlich",
						"Triumphgeschrei",
						"Kasernenhofton",
						"Mordskrach",
						"Hosiannaruf",
						"Schmerzensschrei",
						"più forte",
						"hinschmettern"
					]
				}
			}
		},
		"letzten": {
			"word": "letzten",
			"data": {
				"_id": "59189a07ce905c0816aaa424",
				"word": "letzten",
				"data": {
					"similarWords": [
						"letztens",
						"letztendlich",
						"per ultimo",
						"letztplatziert",
						"Vorkriegsjahr",
						"Schlussgong",
						"letztwöchig",
						"letztjährig",
						"Heuriger",
						"Brachykatalexe",
						"letztmals",
						"Pokalverteidiger",
						"Realen",
						"endbetont",
						"Abschlusszensur",
						"Spätgestose",
						"Feinbrand",
						"hochschwanger",
						"Webeblatt",
						"Logisma"
					]
				}
			}
		},
		"Worten": {
			"word": "Worten",
			"data": {
				"_id": "59189a07ce905c0816aaa427",
				"word": "Worten",
				"data": {
					"similarWords": [
						"worten",
						"m. a. W.",
						"Lobeserhebung",
						"anschimpfen",
						"mit",
						"schmeichlerisch",
						"unausgesprochen",
						"Wortverdrehung",
						"anraunzen",
						"nudis verbis",
						"Redeschlacht",
						"Wortsalat",
						"wörteln",
						"wohlgesetzt, wohl gesetzt",
						"ranzen",
						"entnehmen",
						"Schlagfertigkeit",
						"Gebärdenspiel",
						"Synkategorema",
						"Nacherzählung"
					]
				}
			}
		},
		"zusammensetzt": {
			"word": "zusammensetzt",
			"data": {
				"_id": "59189a07ce905c0816aaa42b",
				"word": "zusammensetzt",
				"data": {
					"similarWords": [
						"Puzzler",
						"Mädchenband",
						"Indizienkette",
						"Familieneinkommen",
						"Maschinenschlosser",
						"Prämienlohn",
						"Zinsbogen",
						"Drei-Körbe-Modell",
						"Gewinnsumme",
						"Prämienzeitlohn",
						"Erdwärme",
						"Montierer",
						"Pekingoper",
						"Kostenmiete",
						"Fakultätsrat",
						"Raum-Zeit-Welt",
						"Scherenmonteur",
						"Koordinationsverbindung",
						"makrobiotisch",
						"Jiddisch"
					]
				}
			}
		},
		"kennen": {
			"word": "kennen",
			"data": {
				"_id": "59189a07ce905c0816aaa42e",
				"word": "kennen",
				"data": {
					"description": "unregelmäßiges Verb - 1a. mit jemandem, etwas (in seinen …1b. jemandem in bestimmter Weise, durch …1c. mit jemandem bekannt sein",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/kennen",
					"similarWords": [
						"kennenlernen, kennen lernen",
						"kannte",
						"kennenswert",
						"Kennenlernpreis",
						"Kennenlerntermin",
						"gekannt",
						"Herkunftsgebiet",
						"zweieinhalb",
						"Pappenheimer",
						"Bikompositum",
						"Durchreise",
						"Volksseele",
						"Kindesbeine",
						"wiederkennen",
						"einhören",
						"inwendig",
						"Westentasche",
						"Spielregel",
						"wissenswert"
					]
				}
			}
		},
		"Licht": {
			"word": "Licht",
			"data": {
				"_id": "59189a07ce905c0816aaa425",
				"word": "Licht",
				"data": {
					"description": "Substantiv, Neutrum - 1a. etwas, was die Umgebung hell …1b. Tageslicht; 1c. Beleuchtung",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1a. etwas, was die Umgebung hell …1b. Tageslicht; 1c. Beleuchtung"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Licht",
					"similarWords": [
						"licht",
						"UV-Licht",
						"Lichtechtheit",
						"Lichtschranke",
						"Lichtschalter",
						"Lichtschimmer",
						"Lichtstreifen",
						"lichtdurchflutet",
						"lichtempfindlich",
						"Lichtverhältnisse",
						"Lichtregie",
						"Lichtpause",
						"Lichtwelle",
						"Lichtorgel",
						"Lichtmenge",
						"Lichtseite",
						"Lichtnelke",
						"Lichtschein",
						"Lichtschutz"
					]
				}
			}
		},
		"Tschechow": {
			"word": "Tschechow",
			"data": {
				"_id": "59189a06ce905c0816aaa418",
				"word": "Tschechow",
				"data": {
					"description": "Eigenname - russischer Schriftsteller",
					"wordProperties": {
						"type": "Eigenname",
						"definition": "russischer Schriftsteller"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Tschechow",
					"similarWords": []
				}
			}
		},
		"Badenweiler": {
			"word": "Badenweiler",
			"data": {
				"_id": "59189a06ce905c0816aaa41a",
				"word": "Badenweiler",
				"data": {
					"similarWords": []
				}
			}
		},
		"Bett": {
			"word": "Bett",
			"data": {
				"_id": "59189a08ce905c0816aaa43c",
				"word": "Bett",
				"data": {
					"description": "Substantiv, Neutrum - 1. Möbelstück zum Schlafen, Ausruhen; 2. Deckbett, Bettdecke; 3. ein enges, breites, tiefes Bett; …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "Neutrum",
						"definition": "1. Möbelstück zum Schlafen, Ausruhen; 2. Deckbett, Bettdecke; 3. ein enges, breites, tiefes Bett; …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Bett",
					"similarWords": [
						"Betthäschen",
						"Bettüberzug",
						"Bettstatt",
						"Betttuch, Bett-Tuch",
						"Bettcouch",
						"Bettplatz",
						"Bettwurst",
						"bettreif",
						"Bettzeug",
						"Bettchen",
						"Bettbank",
						"Bettrost",
						"Bettrand",
						"Bettzeit",
						"Bettlaken",
						"Bettdecke",
						"Bettszene",
						"Bettfeder",
						"Bettwanze"
					]
				}
			}
		},
		"aufrichtete": {
			"word": "aufrichtete",
			"data": {
				"_id": "59189a07ce905c0816aaa42f",
				"word": "aufrichtete",
				"data": {
					"similarWords": [
						"Klitoris",
						"Seelenmassage",
						"Kitzler",
						"Trost"
					]
				}
			}
		},
		"deutsch": {
			"word": "deutsch",
			"data": {
				"_id": "59189a08ce905c0816aaa43b",
				"word": "deutsch",
				"data": {
					"description": "Adjektiv - a. die Deutschen, Deutschland betreffend; b. in der Sprache der Bevölkerung …c. in deutscher Schreibschrift [verfasst]",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "a. die Deutschen, Deutschland betreffend; b. in der Sprache der Bevölkerung …c. in deutscher Schreibschrift [verfasst]"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/deutsch",
					"similarWords": [
						"Deutsch",
						"deutsch-deutsch",
						"Deutschschweizerin",
						"Deutschlandtournee",
						"Deutschfreundlichkeit",
						"Deutschkunde",
						"Deutschrusse",
						"Deutschstämmiger",
						"Deutschlandchefin",
						"Deutschunterricht",
						"Deutschlandsender",
						"Deutschlandbesuch",
						"Deutschtürkin",
						"Deutschtümler",
						"Deutschmeister",
						"deutschblütig",
						"deutschschweizerisch",
						"Deutschfeindlichkeit",
						"Deutschordensritter"
					]
				}
			}
		},
		"sterbe": {
			"word": "sterbe",
			"data": {
				"_id": "59189a08ce905c0816aaa43a",
				"word": "sterbe",
				"data": {
					"similarWords": [
						"Sterbe",
						"Unsterblichkeitsglaube, seltener Unsterblichkeitsglauben",
						"Sterbeamt",
						"Sterbetag",
						"Sterbeort",
						"Normalsterbliche",
						"Sterblichkeitsziffer",
						"Sterblichkeitsrate",
						"Sterblingswolle",
						"Sterbet",
						"Sterben",
						"sterben",
						"-sterben",
						"Sterbegeld",
						"Sterbebuch",
						"Sterbejahr",
						"Sterbekreuz",
						"Sterbehemd",
						"Sterbebett",
						"Sterberate"
					]
				}
			}
		},
		"fiel": {
			"word": "fiel",
			"data": {
				"_id": "59189a08ce905c0816aaa43d",
				"word": "fiel",
				"data": {
					"description": "siehe fallen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/fiel",
					"similarWords": [
						"Fieldistor",
						"Fieldwork, Field-Work",
						"Sheffield",
						"Sealsfield",
						"Chesterfield",
						"Fieldworker",
						"Field-Research, Fieldresearch",
						"Fieldspaniel",
						"Spielende",
						"Fieldworkerin",
						"Gezappel",
						"Spielminute",
						"Kriegstag",
						"Lichtstreifen",
						"Heterografie, Heterographie",
						"seitlings",
						"spielentscheidend",
						"Mordanschlag"
					]
				}
			}
		},
		"starb": {
			"word": "starb",
			"data": {
				"_id": "59189a08ce905c0816aaa440",
				"word": "starb",
				"data": {
					"description": "siehe sterben",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/starb",
					"similarWords": [
						"Starboot",
						"starblind",
						"Starbrille",
						"Kreislaufversagen",
						"Unfallfolge",
						"Jugendblüte",
						"Starbesetzung",
						"Montezuma",
						"geklärt",
						"Dynastie",
						"Tröstung",
						"unerwartet",
						"blühend",
						"bevor",
						"Leiden",
						"absterben",
						"sterben",
						"Blüte",
						"Folge"
					]
				}
			}
		},
		"kurzen": {
			"word": "kurzen",
			"data": {
				"_id": "59189a08ce905c0816aaa43f",
				"word": "kurzen",
				"data": {
					"similarWords": [
						"kurzhubig",
						"kurzhaarig",
						"kurzhalsig",
						"Kurzentschlossene, kurz Entschlossene",
						"Kurzentschlossener, kurz Entschlossener",
						"kürzen",
						"kurz entschlossen, kurzentschlossen",
						"Verhaftungswelle",
						"Momentsache",
						"Teuerungswelle",
						"klackern",
						"schassieren",
						"knack",
						"krabbelig",
						"kurzstämmig",
						"kurzärmlig",
						"Fingerschnalzen",
						"Shorthornrind",
						"Rinforzando",
						"Hermelinkaninchen"
					]
				}
			}
		},
		"Ausrufe": {
			"word": "Ausrufe",
			"data": {
				"_id": "59189a08ce905c0816aaa43e",
				"word": "Ausrufe",
				"data": {
					"similarWords": [
						"Ausrufer",
						"ausrufen",
						"ui",
						"buh",
						"Ausrufewort",
						"Ausruferin",
						"Ausrufesatz",
						"Ausrufezeichen",
						"Exklamation",
						"hatzi",
						"hatschi",
						"ha",
						"hoi",
						"auweh",
						"juchheirassa",
						"juchheisa",
						"äks!",
						"hahaha",
						"haha",
						"juchheißa"
					]
				}
			}
		},
		"Worte": {
			"word": "Worte",
			"data": {
				"_id": "59189a08ce905c0816aaa441",
				"word": "Worte",
				"data": {
					"similarWords": [
						"worten",
						"Wortemacher",
						"Wortemacherei",
						"Wortemacherin",
						"Schallwort",
						"Klischeewort",
						"Lieblingswort",
						"Lallwort",
						"Erbwort",
						"Koppelwort",
						"Füllwort",
						"Slangwort",
						"Suchwort",
						"Schmeichelwort",
						"Schreckenswort",
						"Wortakzent",
						"Wortgebrauch",
						"Wortkörper",
						"Kernwort",
						"Wortinhalt"
					]
				}
			}
		},
		"sprechend": {
			"word": "sprechend",
			"data": {
				"_id": "59189a08ce905c0816aaa443",
				"word": "sprechend",
				"data": {
					"description": "Adjektiv - a. anschaulich, deutlich; überzeugend; b. ausdrucksvoll",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "a. anschaulich, deutlich; überzeugend; b. ausdrucksvoll"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/sprechend",
					"similarWords": [
						"Englisch sprechend, englischsprechend",
						"Deutsch sprechend, deutschsprechend",
						"Französisch sprechend, französischsprechend",
						"dreisprachig",
						"sprachkundig",
						"russischsprachig",
						"Anglokanadier",
						"sprechfaul",
						"Spruchkörper",
						"einsprachig",
						"englischsprachig",
						"monolingual",
						"Revolverschnauze",
						"Frankokanadier",
						"mehrsprachig",
						"ikonisch",
						"hindustanisch",
						"Dutchman",
						"vielsprachig"
					]
				}
			}
		},
		"sterben": {
			"word": "sterben",
			"data": {
				"_id": "59189a08ce905c0816aaa442",
				"word": "sterben",
				"data": {
					"description": "starkes Verb - a. aufhören zu leben, sein Leben …b. einen bestimmten Tod erleiden; c. (für etwas, jemanden) sein Leben …",
					"wordProperties": {
						"type": "starkes",
						"definition": "a. aufhören zu leben, sein Leben …b. einen bestimmten Tod erleiden; c. (für etwas, jemanden) sein Leben …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/sterben",
					"similarWords": [
						"-sterben",
						"Sterben",
						"Sterbende",
						"Sterbender",
						"gestorben",
						"abberufen werden",
						"sterbensmatt",
						"Sterbenswort",
						"totgehen",
						"hungers",
						"todbereit",
						"verröcheln",
						"Filmtod",
						"sterbensübel",
						"sterbenskrank",
						"sterbenselend",
						"sterbensmüde",
						"Sterbensseele",
						"Sterbensangst"
					]
				}
			}
		},
		"Vokalprojekt": {
			"word": "Vokalprojekt",
			"data": {
				"_id": "59189a08ce905c0816aaa430",
				"word": "Vokalprojekt",
				"data": {
					"similarWords": []
				}
			}
		},
		"Arbeit": {
			"word": "Arbeit",
			"data": {
				"_id": "59189a08ce905c0816aaa445",
				"word": "Arbeit",
				"data": {
					"description": "Substantiv, feminin - 1a. Tätigkeit mit einzelnen Verrichtungen, Ausführung …1b. das Arbeiten, Schaffen, Tätigsein; das …1c. Mühe, Anstrengung; Beschwerlichkeit, Plage",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. Tätigkeit mit einzelnen Verrichtungen, Ausführung …1b. das Arbeiten, Schaffen, Tätigsein; das …1c. Mühe, Anstrengung; Beschwerlichkeit, Plage"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Arbeit",
					"similarWords": [
						"PR-Arbeit",
						"Arbeit suchend, arbeitsuchend",
						"Arbeit sparend, arbeitsparend",
						"Bundesagentur für Arbeit",
						"arbeitsam",
						"Arbeiterlied",
						"Arbeitsanfall",
						"BA",
						"Kopfarbeit",
						"Malocher",
						"Tagesarbeit",
						"Kniffelei",
						"ASB",
						"Arbeitnehmer",
						"Arbeitgeber",
						"Arbeitsuche",
						"Arbeitsamkeit",
						"Arbeitsuchende, Arbeit Suchende",
						"Labour Party"
					]
				}
			}
		},
		"schenkte": {
			"word": "schenkte",
			"data": {
				"_id": "59189a0ace905c0816aaa45d",
				"word": "schenkte",
				"data": {
					"similarWords": [
						"Freundschaftsring",
						"Geschenkgutschein",
						"Geburtstagsgruß",
						"Vorlass",
						"Liebster",
						"Geber",
						"bezeigen",
						"Zuwendung",
						"Geschenk",
						"einschenken",
						"Aufmerksamkeit",
						"schenken",
						"verschütten",
						"ausschenken",
						"nachschenken",
						"Gehör",
						"öffnen"
					]
				}
			}
		},
		"Milch": {
			"word": "Milch",
			"data": {
				"_id": "59189a08ce905c0816aaa444",
				"word": "Milch",
				"data": {
					"description": "Substantiv, feminin - 1a. aus dem Euter von Kühen …1b. in den Milchdrüsen von Frauen …2. milchiger Saft bestimmter Pflanzen",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. aus dem Euter von Kühen …1b. in den Milchdrüsen von Frauen …2. milchiger Saft bestimmter Pflanzen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Milch",
					"similarWords": [
						"H-Milch",
						"UHT-Milch",
						"Milch gebend, milchgebend",
						"Milchmädchen",
						"Milchleistung",
						"Milchglasscheibe",
						"Milchrahmstrudel",
						"Milchdiät",
						"Milchkanne",
						"Milchziege",
						"Milchtüte",
						"Milchpumpe",
						"Milchbauer",
						"Milchschorf",
						"Milchsuppe",
						"Milchwaage",
						"milchbärtig",
						"Milchstraße",
						"Milchgesicht"
					]
				}
			}
		},
		"steckte": {
			"word": "steckte",
			"data": {
				"_id": "59189a08ce905c0816aaa446",
				"word": "steckte",
				"data": {
					"similarWords": [
						"Verstecktheit",
						"Steckmuschel",
						"Sattelrohr",
						"hochgesteckt",
						"Hemdenzipfel",
						"selbst gesteckt, selbstgesteckt",
						"Fahrtenmesser",
						"Examensvorbereitung",
						"gesteckt",
						"herausstecken",
						"DNA",
						"Verschwörermiene",
						"Sparbüchse",
						"Klebe",
						"Biestigkeit",
						"Einsiedlerkrebs",
						"Mahlsand",
						"Herostrat",
						"cherchez la femme",
						"Nelkenrevolution"
					]
				}
			}
		},
		"Rekorder": {
			"word": "Rekorder",
			"data": {
				"_id": "59189a0ace905c0816aaa45c",
				"word": "Rekorder",
				"data": {
					"similarWords": [
						"Rekorder, Recorder",
						"DAT-Rekorder, DAT-Recorder",
						"DVD-Rekorder, DVD-Recorder",
						"Höchstmarke",
						"Rekordergebnis",
						"Rekordmarke",
						"Rekordler",
						"Rekordsucht",
						"Rekordernte",
						"Rekordjahr",
						"Rekordzahl",
						"Maximalleistung",
						"Europarekord",
						"Streckenrekord",
						"Rekordversuch",
						"Minusrekord",
						"Rekordflug",
						"Landesrekord",
						"Rekord",
						"rekordverdächtig"
					]
				}
			}
		},
		"balancierte": {
			"word": "balancierte",
			"data": {
				"_id": "59189a08ce905c0816aaa431",
				"word": "balancierte",
				"data": {
					"similarWords": [
						"Slackliner",
						"Balanceakt",
						"balancieren",
						"ausbalancieren"
					]
				}
			}
		},
		"Stereolautsprecher": {
			"word": "Stereolautsprecher",
			"data": {
				"_id": "59189a08ce905c0816aaa436",
				"word": "Stereolautsprecher",
				"data": {
					"description": "Substantiv, maskulin - einer von zwei zusammengehörigen Lautsprechern für die stereofone Wiedergabe von Musik o. Ä.",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "einer von zwei zusammengehörigen Lautsprechern für die stereofone Wiedergabe von Musik o. Ä."
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Stereolautsprecher",
					"similarWords": []
				}
			}
		},
		"Lautsprecher": {
			"word": "Lautsprecher",
			"data": {
				"_id": "59189a09ce905c0816aaa44a",
				"word": "Lautsprecher",
				"data": {
					"description": "Substantiv, maskulin - (besonders zur [verstärkten] Wiedergabe von Gesprochenem oder von Musik verwendetes) Gerät, das elektrische Wechselströme in …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "(besonders zur [verstärkten] Wiedergabe von Gesprochenem oder von Musik verwendetes) Gerät, das elektrische Wechselströme in …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Lautsprecher",
					"similarWords": [
						"Lautsprecherbox",
						"Lautsprecherstimme",
						"Tweeter",
						"Lautsprecherwagen",
						"Leslie",
						"Lesley",
						"Klangtreue",
						"Kassettendeck",
						"aussteuerbar",
						"Lautsprecheranlage",
						"Lautsprecherdurchsage",
						"ortsfest",
						"Woofer",
						"Hörkopf",
						"Rotationslautsprecher",
						"Megafon, Megaphon",
						"Verstärkeranlage",
						"Elektrogitarre",
						"Tonsäule"
					]
				}
			}
		},
		"bequem": {
			"word": "bequem",
			"data": {
				"_id": "59189a09ce905c0816aaa449",
				"word": "bequem",
				"data": {
					"description": "Adjektiv - 1a. angenehm, keinerlei Beschwerden oder Missbehagen …1b. keine Anstrengung verursachend, ohne Mühe …2. leicht, mühelos",
					"wordProperties": {
						"type": "Adjektiv",
						"definition": "1a. angenehm, keinerlei Beschwerden oder Missbehagen …1b. keine Anstrengung verursachend, ohne Mühe …2. leicht, mühelos"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/bequem",
					"similarWords": [
						"bequemlich",
						"bequemen",
						"Bequemlichkeit",
						"Hauskleid",
						"Herrenleben",
						"Litewka",
						"Kniebank",
						"Sportjacke",
						"Hausjacke",
						"Bergere",
						"Lehnstuhl",
						"Lehnsessel",
						"Fernsehsessel",
						"Morgenkleid",
						"kommod",
						"fußfaul",
						"Homewear",
						"Bedienungskomfort",
						"Schlupfhose"
					]
				}
			}
		},
		"Sessel": {
			"word": "Sessel",
			"data": {
				"_id": "59189a08ce905c0816aaa447",
				"word": "Sessel",
				"data": {
					"description": "Substantiv, maskulin - 1. mit Rückenlehne, gewöhnlich auch mit …2. Stuhl",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. mit Rückenlehne, gewöhnlich auch mit …2. Stuhl"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Sessel",
					"similarWords": [
						"Sesselbahn",
						"Sessellift",
						"Sesselrad",
						"Empiresessel",
						"Sessellehne",
						"Sesselfurzer",
						"Sesselrücken",
						"Sesselleiste",
						"Sesselkleber",
						"drehbar",
						"Hochlehner",
						"Ledersessel",
						"Armsessel",
						"Prunksessel",
						"Tragsessel",
						"Klappsessel",
						"Korbsessel",
						"Decksessel",
						"Sesselfurzerin"
					]
				}
			}
		},
		"rauchte": {
			"word": "rauchte",
			"data": {
				"_id": "59189a09ce905c0816aaa44b",
				"word": "rauchte",
				"data": {
					"similarWords": [
						"angeraucht",
						"Opiumraucher",
						"Pfeifenraucher",
						"Kiffer",
						"Kettenraucher",
						"Haschischraucher",
						"verraucht",
						"Zigärrchen",
						"Hascher",
						"Zigarrenraucher",
						"Zigarettenraucher",
						"Gelegenheitsraucher",
						"Nichtraucher",
						"paffen",
						"schnurzpiepegal",
						"schnurzpiepe",
						"rauchen",
						"Viper",
						"irgendwelch",
						"Eigenbau"
					]
				}
			}
		},
		"Zigarre": {
			"word": "Zigarre",
			"data": {
				"_id": "59189a09ce905c0816aaa457",
				"word": "Zigarre",
				"data": {
					"description": "Substantiv, feminin - 1. zum Rauchen dienende dickere, an …2. grobe Zurechtweisung, Rüffel",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. zum Rauchen dienende dickere, an …2. grobe Zurechtweisung, Rüffel"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Zigarre",
					"similarWords": [
						"Brasil",
						"Zigarrenasche",
						"Cohiba®",
						"Zigarrenstummel",
						"Zigarrenspitze",
						"Havanna",
						"Importe",
						"Zigarillo",
						"Stumpen",
						"Umblatt",
						"Zigärrchen",
						"Stinkadores",
						"Giftnudel",
						"Virginia",
						"Zigarrenrauch",
						"Zigarrenetui",
						"Zigarrenqualm",
						"anrauchen",
						"Zigarrenkiste"
					]
				}
			}
		},
		"trank": {
			"word": "trank",
			"data": {
				"_id": "59189a09ce905c0816aaa448",
				"word": "trank",
				"data": {
					"description": "siehe trinken",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/trank",
					"similarWords": [
						"Trank",
						"Trankopfer",
						"Tranksame",
						"Gifttrank",
						"Zaubertrank",
						"Schlaftrank",
						"Tränkchen",
						"Tränklein",
						"Tränke",
						"Labetrank",
						"Liebestrank",
						"Göttertrank",
						"Geschmatze",
						"Schierlingsbecher",
						"Drank",
						"Gebräu",
						"Getränk",
						"Gemütsruhe",
						"Kognak"
					]
				}
			}
		},
		"hörte": {
			"word": "hörte",
			"data": {
				"_id": "59189a0ace905c0816aaa460",
				"word": "hörte",
				"data": {
					"similarWords": [
						"Hörtest",
						"beichthören",
						"Kinderlachen",
						"fernhin",
						"fuchsteufelswild",
						"gruselig",
						"dagegensetzen",
						"lärmen",
						"hören",
						"anpoltern",
						"aufhören",
						"schwarzhören",
						"abhören",
						"zuhören",
						"heraushören",
						"anhören",
						"hinhören",
						"einhören",
						"hineinhören",
						"mithören"
					]
				}
			}
		},
		"schien": {
			"word": "schien",
			"data": {
				"_id": "59189a09ce905c0816aaa459",
				"word": "schien",
				"data": {
					"description": "siehe scheinen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/schien",
					"similarWords": [
						"Schienbeinschoner",
						"Schienbeinschützer",
						"Schienbeinknöchel",
						"Schienbein",
						"Schienbeinbruch",
						"Schiene",
						"-schiene",
						"schienen",
						"Gleitschiene",
						"Rillenschiene",
						"schienengleich",
						"Wischerblatt",
						"Jackstag",
						"Eisenbahnschiene",
						"Schienenbruch",
						"Laufschiene",
						"Führungsschiene",
						"unverletzbar",
						"Rollschiene"
					]
				}
			}
		},
		"Unterschiede": {
			"word": "Unterschiede",
			"data": {
				"_id": "59189a09ce905c0816aaa44d",
				"word": "Unterschiede",
				"data": {
					"similarWords": [
						"diatopisch",
						"homograd",
						"unterschieden",
						"heterograd",
						"Einheitskleidung",
						"preislich",
						"diaphasisch",
						"tageszeitlich",
						"Elastogramm",
						"Temperatursinn",
						"diastrat",
						"diastratisch",
						"gebietlich",
						"Konfessionalismus",
						"Gleichmacherei",
						"Massenabfertigung",
						"Währungsausgleich",
						"Divergenzhypothese",
						"Zinsarbitrage",
						"Leistungsvergleich"
					]
				}
			}
		},
		"Stocken": {
			"word": "Stocken",
			"data": {
				"_id": "59189a09ce905c0816aaa450",
				"word": "Stocken",
				"data": {
					"similarWords": [
						"stocken",
						"Stockente",
						"Stockung",
						"stockig",
						"Einigungsbestrebung",
						"schlickern",
						"stucken",
						"festgefahren",
						"fließend",
						"stagnieren",
						"stecken bleiben, steckenbleiben",
						"klumpen",
						"Slip-stick-Effekt",
						"gerinnen",
						"koagulieren",
						"ausbleiben",
						"flüssig",
						"blockieren",
						"absaufen",
						"innehalten"
					]
				}
			}
		},
		"Atemanhalten": {
			"word": "Atemanhalten",
			"data": {
				"_id": "59189a08ce905c0816aaa437",
				"word": "Atemanhalten",
				"data": {
					"similarWords": []
				}
			}
		},
		"Beschleunigung": {
			"word": "Beschleunigung",
			"data": {
				"_id": "59189a0ace905c0816aaa45f",
				"word": "Beschleunigung",
				"data": {
					"description": "Substantiv, feminin - 1a. das Schnellerwerden; das Schnellermachen; 1b. Eile, Hast; 2. Zunahme der Geschwindigkeit innerhalb einer …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1a. das Schnellerwerden; das Schnellermachen; 1b. Eile, Hast; 2. Zunahme der Geschwindigkeit innerhalb einer …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Beschleunigung",
					"similarWords": [
						"Beschleunigungsvermögen",
						"Akzeleration",
						"Akzelerierung",
						"Teilchenbeschleuniger",
						"Beschleunigungswert",
						"Protonenbeschleuniger",
						"Ideenflucht",
						"Kompulsorium",
						"Erdbeschleunigung",
						"Autokatalyse",
						"Fallbeschleunigung",
						"Wachstumsbeschleunigungsgesetz",
						"Relativbeschleunigung",
						"Antreibung",
						"Ionenbeschleuniger",
						"NEAT, Neat",
						"Zyklotron",
						"Anzugsvermögen",
						"Hastigkeit"
					]
				}
			}
		},
		"kurzes": {
			"word": "kurzes",
			"data": {
				"_id": "59189a09ce905c0816aaa44e",
				"word": "kurzes",
				"data": {
					"similarWords": [
						"kurz schneiden, kurzschneiden",
						"kurzbeinig",
						"Kurzarmjacke",
						"Kurzbeschreibung",
						"Kurzbericht",
						"Kurzreise",
						"kurz gebraten, kurzgebraten",
						"kurz geschnitten, kurzgeschnitten",
						"kurz gefasst, kurzgefasst",
						"kurz geschoren, kurzgeschoren",
						"kurzschriftlich",
						"Kurzgebratenes, kurz Gebratenes",
						"Adagietto",
						"Kurzerzählung",
						"Kurzparkzone",
						"Kurzmeldung",
						"Kurzfilm",
						"Kurzschriftler",
						"ankochen",
						"Kurzstarter"
					]
				}
			}
		},
		"Husten": {
			"word": "Husten",
			"data": {
				"_id": "59189a09ce905c0816aaa454",
				"word": "Husten",
				"data": {
					"description": "Substantiv, maskulin - [Erkältungs]krankheit, bei der man oft und stark husten muss",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "[Erkältungs]krankheit, bei der man oft und stark husten muss"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Husten",
					"similarWords": [
						"husten",
						"Hustenreiz",
						"Hustensaft",
						"Hustentee",
						"Tussis",
						"aushusten",
						"kruppös",
						"Hustenbonbon",
						"Hustenmittel",
						"Hustenanfall",
						"Hustentropfen",
						"Hustenkrampf",
						"Hustenreflex",
						"Gehuste",
						"Raucherhusten",
						"hüsteln",
						"abhusten",
						"Antitussivum",
						"Ipekakuanha"
					]
				}
			}
		},
		"ausgespuckt": {
			"word": "ausgespuckt",
			"data": {
				"_id": "59189a08ce905c0816aaa435",
				"word": "ausgespuckt",
				"data": {
					"similarWords": [
						"ausspucken"
					]
				}
			}
		},
		"herausgewürgt": {
			"word": "herausgewürgt",
			"data": {
				"_id": "59189a08ce905c0816aaa432",
				"word": "herausgewürgt",
				"data": {
					"similarWords": []
				}
			}
		},
		"Gleichma": {
			"word": "Gleichma",
			"data": {
				"_id": "59189a09ce905c0816aaa44c",
				"word": "Gleichma",
				"data": {
					"similarWords": [
						"gleichmachen",
						"Gleichmacher",
						"Gleichmaß",
						"gleichmacherisch",
						"Gleichmacherin",
						"Gleichmacherei",
						"gleichgewichtig",
						"gleichmäßig",
						"gleichmächtig",
						"Gleichmäßigkeit",
						"dahinleben",
						"Rhythmus",
						"ebenmäßig"
					]
				}
			}
		},
		"umspielt": {
			"word": "umspielt",
			"data": {
				"_id": "59189a08ce905c0816aaa438",
				"word": "umspielt",
				"data": {
					"similarWords": [
						"Doppelschlag",
						"umspielen"
					]
				}
			}
		},
		"mächtigen": {
			"word": "mächtigen",
			"data": {
				"_id": "59189a09ce905c0816aaa44f",
				"word": "mächtigen",
				"data": {
					"similarWords": [
						"bemächtigen",
						"ermächtigen",
						"Elefantenhochzeit",
						"Sklavenmoral",
						"Theobromin",
						"Keiler",
						"Scherbenhaufen",
						"Feudalaristokratie",
						"Zorn",
						"mächtig",
						"Zauber",
						"Puppe",
						"Fisch",
						"aufkommen",
						"ruhen"
					]
				}
			}
		},
		"Fauchen": {
			"word": "Fauchen",
			"data": {
				"_id": "59189a0ace905c0816aaa45e",
				"word": "Fauchen",
				"data": {
					"similarWords": [
						"fauchen",
						"pfauchen",
						"Gefauch",
						"Gefauche",
						"schnauben",
						"Gans",
						"atmen",
						"anfauchen",
						"zischen"
					]
				}
			}
		},
		"furcht": {
			"word": "furcht",
			"data": {
				"_id": "59189a09ce905c0816aaa453",
				"word": "furcht",
				"data": {
					"similarWords": [
						"Furcht",
						"Furchtsamkeit",
						"Furchtbarkeit",
						"Furchtlosigkeit",
						"furchtlos",
						"furchtsam",
						"furchtbar",
						"Furcht gebietend, furchtgebietend",
						"Furcht einflößend, furchteinflößend",
						"furchterregend, Furcht erregend",
						"Ehrfurcht gebietend, ehrfurchtgebietend",
						"Gespensterfurcht",
						"Todesfurcht",
						"Entscheidungsfurcht",
						"gefurcht",
						"Ehrfurcht",
						"zerfurcht",
						"Bangigkeit",
						"Kanzerophobie",
						"arachnophob"
					]
				}
			}
		},
		"erregenden": {
			"word": "erregenden",
			"data": {
				"_id": "59189a0ace905c0816aaa461",
				"word": "erregenden",
				"data": {
					"similarWords": [
						"fieberhaft",
						"Ritter-und-Räuber-Roman",
						"schal",
						"Abenteuer",
						"Mitleid",
						"Krebs"
					]
				}
			}
		},
		"gro": {
			"word": "gro",
			"data": {
				"_id": "59189a09ce905c0816aaa452",
				"word": "gro",
				"data": {
					"similarWords": [
						"grob",
						"Gros",
						"Grog",
						"en gros",
						"groß",
						"Grosz",
						"Groll",
						"Growl",
						"Groove",
						"Groat",
						"Groom",
						"grolieresk",
						"Groteskfilm",
						"Grotesktanz",
						"Gropius",
						"Growian",
						"Groschen",
						"Gröstl"
					]
				}
			}
		},
		"Ausma": {
			"word": "Ausma",
			"data": {
				"_id": "59189a0ace905c0816aaa463",
				"word": "Ausma",
				"data": {
					"similarWords": [
						"ausmalen",
						"Ausmaß",
						"Ausmalung",
						"ausmachen",
						"Ausmarsch",
						"Ausmarchung",
						"Ausmahlung",
						"ausmahlen",
						"ausmauern",
						"ausmarchen",
						"ausmären",
						"ausmanövrieren",
						"Kolossalstatue",
						"Kolossalfigur",
						"Großbrand",
						"Kolossalbau",
						"luftverschmutzend",
						"Bergriese",
						"Ausmauerung",
						"ausmarschieren"
					]
				}
			}
		},
		"Hochofen": {
			"word": "Hochofen",
			"data": {
				"_id": "59189a0ace905c0816aaa462",
				"word": "Hochofen",
				"data": {
					"description": "Substantiv, maskulin - großer Schmelzofen zur Gewinnung von Roheisen",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "großer Schmelzofen zur Gewinnung von Roheisen"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Hochofen",
					"similarWords": [
						"Hochofenschlacke",
						"Gicht",
						"Hochöfner",
						"Schlackengrube",
						"Schlackenhalde",
						"Raffinierofen",
						"Kokshochofen",
						"Winderhitzer",
						"Gichtgas",
						"Eisenkoks",
						"Herdofen",
						"Beschickung",
						"Stichkanal",
						"Industrieofen",
						"Gießbett",
						"Brasche",
						"Rast",
						"ausblasen",
						"Stichprobe"
					]
				}
			}
		},
		"gesehen": {
			"word": "gesehen",
			"data": {
				"_id": "59189a09ce905c0816aaa45a",
				"word": "gesehen",
				"data": {
					"description": "siehe sehen",
					"wordProperties": {},
					"definitionUrl": "http://www.duden.de/rechtschreibung/gesehen",
					"similarWords": [
						"gern gesehen, gerngesehen",
						"Backbordseite",
						"wohlgelitten",
						"Steuerbord",
						"menschheitlich",
						"Unschärfebereich",
						"Stimmvieh",
						"Persona non grata",
						"Echokinesie",
						"Selbststilisierung",
						"Polyopie",
						"nahsichtig",
						"prozentualiter",
						"unwillkommen",
						"vidit",
						"vidi",
						"entwicklungsmäßig",
						"realistischerweise",
						"ungesehen"
					]
				}
			}
		},
		"feines": {
			"word": "feines",
			"data": {
				"_id": "59189a0ace905c0816aaa464",
				"word": "feines",
				"data": {
					"similarWords": [
						"fein geädert, feingeädert",
						"staubfein",
						"Feine",
						"fein vermahlen, feinvermahlen",
						"fein genarbt, feingenarbt",
						"fettfein",
						"überfein",
						"ff",
						"stinkfein",
						"superfein",
						"feinhörig",
						"feinporig",
						"pulverfein",
						"Feingebäck",
						"Feinschnitt",
						"fein geschwungen, feingeschwungen",
						"fein gemahlen, feingemahlen",
						"fein gestreift, feingestreift",
						"fein geschliffen, feingeschliffen",
						"fein gesponnen, feingesponnen"
					]
				}
			}
		},
		"Zischen": {
			"word": "Zischen",
			"data": {
				"_id": "59189a0ace905c0816aaa465",
				"word": "Zischen",
				"data": {
					"similarWords": [
						"zischen",
						"Gezische",
						"Gezisch",
						"pfauchen",
						"zischeln",
						"auszischen",
						"Fizz",
						"assibilieren",
						"Sibilant",
						"pesen",
						"flüstern",
						"düsen",
						"flitzen",
						"schöppeln",
						"kneipen",
						"picheln",
						"pietschen",
						"pokulieren",
						"tanken",
						"zechen"
					]
				}
			}
		},
		"Zerstäuber": {
			"word": "Zerstäuber",
			"data": {
				"_id": "59189a09ce905c0816aaa451",
				"word": "Zerstäuber",
				"data": {
					"description": "Substantiv, maskulin - Gerät zum Zerstäuben",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "Gerät zum Zerstäuben"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Zerstaeuber",
					"similarWords": [
						"Atomiseur",
						"Parfumzerstäuber",
						"Parfümzerstäuber",
						"Sprühflasche",
						"Fixateur",
						"Spraydose",
						"Spritze"
					]
				}
			}
		},
		"Wehen": {
			"word": "Wehen",
			"data": {
				"_id": "59189a09ce905c0816aaa45b",
				"word": "Wehen",
				"data": {
					"similarWords": [
						"wehen",
						"wehenartig",
						"wehenhemmend",
						"Wehenmittel",
						"wehenfördernd",
						"umwehen",
						"Polypnoe",
						"herunterwehen",
						"Wehe",
						"wegwehen",
						"anwehen",
						"Tachypnoe",
						"Ora",
						"Geburtseinleitung",
						"zusammenwehen",
						"Geburtswehen",
						"wacheln",
						"aufwehen",
						"fortwehen"
					]
				}
			}
		},
		"Wind": {
			"word": "Wind",
			"data": {
				"_id": "59189a09ce905c0816aaa458",
				"word": "Wind",
				"data": {
					"description": "Substantiv, maskulin - 1. spürbar stärker bewegte Luft im …2a. (bei der Orgel) durch ein …2b. bei bestimmten Prozessen (z. B. …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "maskulin",
						"definition": "1. spürbar stärker bewegte Luft im …2a. (bei der Orgel) durch ein …2b. bei bestimmten Prozessen (z. B. …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Wind",
					"similarWords": [
						"wind",
						"Winds",
						"Windröschen",
						"Windrädchen",
						"Windfangtür",
						"Windrichtung",
						"Windschatten",
						"Windscherung",
						"Windblütler",
						"windstill",
						"winddicht",
						"Windchill",
						"Windlicht",
						"Windspiel",
						"Windstoß",
						"Windkraft",
						"Windhauch",
						"Windbruch",
						"Windschur"
					]
				}
			}
		},
		"maschinelles": {
			"word": "maschinelles",
			"data": {
				"_id": "59189a0ace905c0816aaa466",
				"word": "maschinelles",
				"data": {
					"similarWords": [
						"Spracherkennung",
						"Schrifterkennung",
						"Texterfassung",
						"Texterkennung",
						"Förderwerk",
						"Förderanlage",
						"Zeichenerkennung",
						"Maschinerie",
						"Sprachverarbeitung",
						"Hollerithverfahren",
						"Kartenschläger",
						"maschinell",
						"OCR",
						"Riffelung",
						"Herstellung",
						"Operator",
						"Produkt",
						"waschen",
						"Übergang",
						"Karte"
					]
				}
			}
		},
		"Keuchen": {
			"word": "Keuchen",
			"data": {
				"_id": "59189a09ce905c0816aaa456",
				"word": "Keuchen",
				"data": {
					"similarWords": [
						"keuchen",
						"Gekeuche",
						"jappen",
						"hecheln",
						"prusten",
						"schnaufen",
						"japsen",
						"röcheln",
						"pusten",
						"atmen"
					]
				}
			}
		},
		"Nachluftringen": {
			"word": "Nachluftringen",
			"data": {
				"_id": "59189a08ce905c0816aaa434",
				"word": "Nachluftringen",
				"data": {
					"similarWords": []
				}
			}
		},
		"Durchatmen": {
			"word": "Durchatmen",
			"data": {
				"_id": "59189a08ce905c0816aaa433",
				"word": "Durchatmen",
				"data": {
					"similarWords": [
						"durchatmen",
						"Atemnot",
						"aufatmen",
						"flach"
					]
				}
			}
		},
		"Aufatmen": {
			"word": "Aufatmen",
			"data": {
				"_id": "59189a08ce905c0816aaa439",
				"word": "Aufatmen",
				"data": {
					"similarWords": [
						"aufatmen",
						"aufschnaufen",
						"durchatmen",
						"erleichtert"
					]
				}
			}
		},
		"Welt": {
			"word": "Welt",
			"data": {
				"_id": "59189a09ce905c0816aaa455",
				"word": "Welt",
				"data": {
					"description": "Substantiv, feminin - 1. Erde, Lebensraum des Menschen; 2a. Gesamtheit der Menschen; 2b. größere Gruppe von Menschen, Lebewesen, …",
					"wordProperties": {
						"type": "Substantiv",
						"genus": "feminin",
						"definition": "1. Erde, Lebensraum des Menschen; 2a. Gesamtheit der Menschen; 2b. größere Gruppe von Menschen, Lebewesen, …"
					},
					"definitionUrl": "http://www.duden.de/rechtschreibung/Welt",
					"similarWords": [
						"Dritte-Welt-Laden",
						"Raum-Zeit-Welt",
						"Dritte-Welt-Land",
						"Dritte-Welt-Gruppe",
						"Weltschmerz",
						"Weltlichkeit",
						"Weltklugheit",
						"Weltmaßstab",
						"Weltfußball",
						"Welttheater",
						"Weltbestzeit",
						"Weltkenntnis",
						"Weltcuppunkt",
						"Weltkongress",
						"Weltkonflikt",
						"Weltraumflug",
						"Weltpriester",
						"Weltvernunft",
						"weltfremd"
					]
				}
			}
		}
	},
	"text": "Ich fuhr in die Pension, um mein Hemd zu wechseln und die Hose, sie klebte mir an den Beinen.\nIn meinem Zimmer fand ich einen unter der Tür durchgeschobenen Zettel: Wählen Sie die unten stehende Nummer und\nsagen Sie zu dem Operator das Stichwort: I need a bumerangcall. Viel Glück!\nIch duschte, zog mir Jeans und ein frisches Polohemd an. Ich bestellte mir bei dem Mann, der nachmittags in der\nPension als Portier arbeitete, einen Tee.\nMöchten Sie einen Darjeeling oder einen milden Assam?\nDen Assam, bitte.\nSetzen Sie sich ruhig schon in den Salon, ich bringe Ihnen den Tee. Übrigens ist zweimal für Sie angerufen\nworden.\nVon wem?\nDie haben keine Namen genannt. Waren aber Ausländer. Der eine wollte, wenn ich ihn richtig verstanden habe, noch\nmal anrufen. Und der andere hat sich unsere Adresse geben lassen.\nIch bekam einen eisigen Schreck, weil mir sofort der Bulgare einfiel und sein beiger Gorilla. Hören Sie, falls\ndie wieder anrufen, geben Sie auf keinen Fall meine Privatadresse.\nKlar. Anlageberater? fragte der Portier.\nJa. So was Ähnliches. Ich ging in den Salon, der morgens der Frühstücksraum war. Die hohe Flügeltür zum Balkon\nstand offen. Von der Straße waren Stimmen und Autolärm zu hören. Auf dem Sofa, am Lesetisch, saß ein Mann in\neinem verknitterten schwarzen Leinenanzug, blätterte in dem Buch, das Christo und Jeanne Claude über die\nVerhüllung herausgebracht hatten.\nWaren Sie schon am Reichstag?\nJa.\nEin verrücktes Unternehmen, einfach verrückt, das mir sehr gut gefällt, sagte der Mann.\nJa, sagte ich, mir auch.\nDanach wird etwas anders sein, ich bin überzeugt, daß diese Verhüllung etwas verändert. Das Geheimnis liegt\ndarin, daß etwas anders sein könnte. Übrigens ist keinem dieser Kunstkritiker aufgefallen, daß die Verhüllung am\n23. Juni vollendet wird, also der Mittsommernacht, in der es ja kunterbunt zugeht, Verwechslungen,\nVerkleidungen, Vertauschungen sozusagen zur Tagesordnung gehören. Es ist die ästhetischste Nacht des Jahres. Die\nDinge zeigen sich von einer anderen Seite, wie auch die Menschen. Fräulein Spinnweb und Frau Bohnenblüte lassen\ngrüßen. Wenn Sie die treffen wollen, müssen Sie sich heute ein Reggaekonzert anhören.\nEinen Augenblick überlegte ich, ob ich ihm sagen sollte, daß ich Frau Spinnweb schon getroffen hätte, fragte\ndann aber nach dieser Bar.\nDa spielt eine Band, eine gute Mischung von Hip Hop und Reggae, ein paar Jungs aus Jamaika, die holen Ihnen mit\nsanftem Druck die Urträume aus dem Stammhirn. Woher kommen Sie, wenn ich fragen darf?\nIch komme aus München. Und Sie?\nIch komme aus Hamburg, bin aber Berliner.\nUnd ich bin Hamburger.\nEr lachte, das paßt zum Tag.\nSind Sie hierhergekommen, um sich diesen verhüllten Reichstag anzusehen?\nDas ist Zufall, sagte der Mann, wenn es einen gibt, ich habe morgen eine Uraufführung.\nSind Sie am Theater?\nNein, ich bin Komponist.\nUnd was wird aufgeführt?\nIch habe es ein Requiem genannt. Es heißt Aspiration. Ich habe mit unterschiedlichen Instrumenten\nexperimentiert, Instrumente im weitesten Sinn, zum Beispiel Atmungshilfen für Asthmatiker, ein Blasebalg für\nHochöfen, aber auch Hörner ohne Ventile, ein Sauerstoffzelt auf einer Intensivstation, alles Instrumente, die\nmit Luft arbeiten, auch das Atmen selbst, aber nicht als Vokal, sondern nur die reine Aspiration.\nUnd für wen ist das Requiem?\nFür Rosa Luxemburg.\nDas ist ungewöhnlich, sagte ich, jedenfalls im Moment. Vor einigen Jahren, als man ihre Schriften las, ihr Bild\nauf Transparenten durch die Straßen trug, aber jetzt?\nEben darum, sagte er, damals war es nicht nötig, sie war lebendig, ich meine, man las, man diskutierte ihre\nSchriften, Frauengruppen benannten sich nach ihr, damit meine ich nicht diese verordnete Verehrung in der DDR,\nsondern das Interesse, das ihr aus Neugierde, also freiwillig entgegengebracht wurde. Damals wäre mir das gar\nnicht in den Sinn gekommen. Aber dann, vor zwei, drei Jahren, sah ich ein Foto in der Zeitung. Einen\naufgehackten Schweinskopf. Jemand hatte ihn an die Gedenkstelle gelegt, wo die Leiche von Rosa Luxemburg in den\nLandwehrkanal geworfen worden war. Und da dachte ich, ich müsse in die Stadt zurückkommen, aus der ich vor\nzwanzig Jahren weggegangen war, ich müsse dieses Requiem schreiben, das auch eines über diese Stadt sein sollte.\nIst das nicht - verstehen Sie mich bitte nicht falsch - ziemlich schwierig?\nJa. Es ist ein Versuch. Und er ist maßlos, ich weiß. Aber maßlos muß der Versuch sein, sonst entsteht nur\nBraves. Lieber maßlos scheitern, lachte er. Ich habe die Schriften von Rosa Luxemburg wieder gelesen und erst\njetzt richtig verstanden, dieser Versuch, das zu verbinden, zu versöhnen, was sich doch per se ausschließt:\nGleichheit und Freiheit, diesen Ausgleich zustande zu bringen, also eine infinitesimale Politik, die\nBedürfnisse, Fähigkeiten, Interessen, Wünsche, Zwänge in einen zivilen Ausgleich zu bringen, das empörend dumme\nUnrecht, das in dem Wort »naturgegeben« steckt - Sie wissen, daß sie eine schwere Hüftluxation hatte - dieses\nnatürliche Unrecht durch ein gesellschaftliches Recht auf Gleichheit auszubalancieren, ohne dabei den Menschen\nals bloßes Sozialmaterial zu sehen, sondern ihm gerade wegen seiner Einmaligkeit auch seine Unversehrtheit zu\ngarantieren. Ich dachte, eben das müsse sich auch akustisch thematisieren lassen. Ich habe die Artikel, Reden,\nBriefe von ihr gelesen, gerade die, die sie aus dem Gefängnis geschrieben hat, Liebesbriefe von einer, ich kann\ndas nur mit einem etwas altmodischen Wort sagen: melancholischen Keuschheit. Ich bin all die Stellen abgegangen,\nhier in Berlin, an denen sie gelebt und gearbeitet hat, ich habe meinen Atem dabei aufgenommen, man denkt, der\nsei gleichmäßig, wenn man sich gleichmäßig bewegt, aber hört man genau hin, verändert er sich, nicht allein\ndurch die winzige Veränderung des Schritts, sondern durch das, was man hört, sieht, fühlt und denkt, auf dem\nSchloßplatz, wo sie geredet hat, in der Barnimstraße, wo sie im Gefängnis saß und im Hof einen Fliederstrauch\npflanzte, das Hotel Eden, wo sie verhöhnt und erschlagen wurde, die Lichtensteinbrücke, an der sie in den\nLandwehrkanal geworfen wurde, die Schleuse, wo ihre Leiche dreieinhalb Monate später herausgezogen wurde,\nFriedhof Friedrichsfelde, wo sie beerdigt wurde, 33 das Grab von Nazis eingeebnet, wo sich später auch ein\nPolitbürokrat wie Ulbricht angelagert hat. Es ist eine kleine, starke Frau gewesen, man möchte sagen, zart,\nnein, sie war stark, kräftig, körperlich, und doch verletzt, wenn Sie das Bild sehen von Rosa Luxemburg mit\nClara Zetkin zusammen, beide diese Hüte auf, und man sieht, wenn man hinguckt: sie hinkt. Ich bin das alles ab\ngeschritten, auch mit der Erinnerung an meine vergangenen Hoffnungen, und hatte dabei meinen Atem im Ohr. Sie\nmüssen wissen, daß ich 69 einmal ein Stück für Schalmeien geschrieben habe. Es sollte diese schlichten Märsche\nablösen, es sollte etwas Neues sein, für den 1. Mai, etwas so noch nie Gehörtes, aber eben aus diesem\nInstrument, das ja ein Instrument der Streckenarbeiter war, ein Instrument, um vor einer nahenden Gefahr zu\nwarnen. Es sollte eine Art Agitpropstück in Musik sein. Aber es hat die, für die ich es geschrieben habe, die\nArbeiter, nicht interessiert, nicht die Gewerkschaftler, nicht die organisierten Kommunisten. Die fanden das\ngräßlich. Von den Massen ganz zu schweigen. Es war ein falscher Ansatz. Es kommt nicht darauf an, politische\nBotschaften herauszuposaunen, sondern die ästhetischen Voraussetzungen dafür zu schaffen, daß politisches\nHandeln möglich wird, und zwar so, daß gerade auf Vielfalt und auf die Einmaligkeit des Handelnden insistiert\nwird.\nDer Portier kam mit dem Tee, stellte ihn auf den Tisch, sagte, ich habe den Tee eben hineingetan. Wenn Sie ihn\nin drei Minuten herausnehmen.\nDanke, sagte ich und fragte den Mann im schwarzen Leinenanzug: Wer hört jetzt Ihre Arbeiten?\nInteressierte, sagen wir es so. Wenige. Sehr wenige nur. Kennen Sie sich in der zeitgenössischen Musik aus?\nWenig. Hin und wieder bringt mir ein befreundeter Buchhändler und Saxophonist, mit dem ich Tennis spiele, CDs\nmit, zuletzt von den Donaueschinger Musiktagen. Ich würde Ihr Requiem gern hören.\nEs ist ein kleineres Werk. Wenn Sie Lust haben, können Sie morgen zur Uraufführung kommen.\nIch muß morgen leider wieder nach München zurück.\nIch kann Ihnen, wenn es Sie interessiert, ein Stück vorspielen. Ich habe es auf Kassette. Das Gerät hier ist\nnicht optimal, aber Sie bekommen einen Eindruck.\nGern, sagte ich, ich kann dann in Ruhe meinen Tee trinken, wenn es Sie nicht stört.\nÜberhaupt nicht. Es ist ein Leid, daß die Künste heute so isoliert gehört und betrachtet werden. Man sollte\nvorlesen, musizieren und dabei Kaffee trinken, sich unterhalten. Hören Sie Musik, wenn Sie arbeiten?\nJa, manchmal.\nUnd was?\nJazz, Klassik, Hip Hop.\nSind Sie in der Werbebranche?\nWie kommen Sie darauf?\nNa ja, die Frisur.\nHab ich mir heute schneiden lassen. Ich wollte was über die Kartoffel recherchieren, habe inzwischen viele\nmerkwürdige Geschichten erlebt. Man fängt mit der Kartoffel an und landet ganz woanders und ist dabei selbst\nauch ein anderer geworden, sieht man ja am Kopf.\nEr lachte. Gute Geschichten sind wie Labyrinthe.\nJa, sagte ich, inzwischen habe ich allerdings den Faden verloren. Ich würde nur noch gern wissen, was Roter Baum\nbedeutet. Kennen Sie eine Kartoffelsorte, die so heißt?\nNein. Wie kommen Sie auf diesen Namen?\nEr kommt von einem Onkel, den ich sehr mochte. Er konnte Kartoffeln schmecken. Ich meine, die einzelnen Sorten\nschmeckte er auch in gekochtem Zustand heraus. Als er im Sterben lag, sagte er noch: Roter Baum. Und niemand\nwußte, was er damit meinte.\nIrgendwann werde ich ein Gesangstück schreiben, das sich aus lauter letzten Worten zusammensetzt. Sie kennen es:\nMehr Licht. Oder aber Tschechow, als er in Badenweiler im Bett lag, sich aufrichtete und auf deutsch sagte: Ich\nsterbe. Er fiel zurück und starb. Aber es gibt nicht nur diese kurzen Ausrufe, Worte, es gibt Menschen, die\nsprechend sterben. Es ist ein Vokalprojekt.\nIch würde mir gern Ihre Arbeit anhören.\nEr ging in sein Zimmer. Ich schenkte mir Tee ein, nahm von der Milch.\nEr kam mit der Kassette, steckte sie in den Rekorder, balancierte die Stereolautsprecher aus.\nDie Lautsprecher sind hier natürlich nicht optimal.\nIch saß bequem im Sessel, rauchte eine Zigarre an, trank Tee und hörte: das Atmen, gleichmäßig, so schien es,\naber dann hörte ich doch kleine Unterschiede, ein Stocken, ein Atemanhalten, kurz nur, eine Beschleunigung, ein\nkurzes Husten, als würde etwas ausgespuckt, herausgewürgt, dann wieder ein Gleichmaß, das umspielt wurde von\neinem mächtigen Fauchen, einem furcht- erregenden Fauchen, vielleicht von dem Blasebalg, ein Blasebalg großen\nAusmaßes, wie ich ihn einmal an einem Hochofen gesehen hatte, ein feines Zischen, wie von einem Zerstäuber, ein\nWehen, so wie der Wind geht, ein maschinelles Keuchen, ein Nachluftringen, aber auch ein Durchatmen, ein\nAufatmen - das Atmen der Welt.",
	"splittedWords": [
		"fuhr",
		"Pension",
		"Hemd",
		"wechseln",
		"Hose",
		"klebte",
		"Beinen",
		"Zimmer",
		"fand",
		"Tür",
		"durchgeschobenen",
		"Zettel",
		"Wählen",
		"unten",
		"stehende",
		"Nummer",
		"sagen",
		"Operator",
		"Stichwort",
		"need",
		"bumerangcall",
		"Glück",
		"duschte",
		"zog",
		"Jeans",
		"frisches",
		"Polohemd",
		"bestellte",
		"nachmittags",
		"Portier",
		"arbeitete",
		"Tee",
		"Möchten",
		"Darjeeling",
		"milden",
		"Assam",
		"bitte",
		"Setzen",
		"ruhig",
		"Salon",
		"bringe",
		"zweimal",
		"angerufen",
		"Namen",
		"genannt",
		"Ausländer",
		"verstanden",
		"mal",
		"anrufen",
		"Adresse",
		"geben",
		"lassen",
		"bekam",
		"eisigen",
		"Schreck",
		"sofort",
		"Bulgare",
		"einfiel",
		"beiger",
		"Gorilla",
		"Hören",
		"falls",
		"Fall",
		"Privatadresse",
		"Klar",
		"Anlageberater",
		"fragte",
		"Ähnliches",
		"morgens",
		"Frühstücksraum",
		"hohe",
		"Flügeltür",
		"Balkon",
		"stand",
		"Stra",
		"Stimmen",
		"Autolärm",
		"hören",
		"Sofa",
		"Lesetisch",
		"verknitterten",
		"schwarzen",
		"Leinenanzug",
		"blätterte",
		"Buch",
		"Christo",
		"Jeanne",
		"Claude",
		"Verhüllung",
		"herausgebracht",
		"Reichstag",
		"verrücktes",
		"Unternehmen",
		"einfach",
		"verrückt",
		"gefällt",
		"sagte",
		"überzeugt",
		"verändert",
		"Geheimnis",
		"liegt",
		"Kunstkritiker",
		"aufgefallen",
		"Juni",
		"vollendet",
		"Mittsommernacht",
		"kunterbunt",
		"zugeht",
		"Verwechslungen",
		"Verkleidungen",
		"Vertauschungen",
		"sozusagen",
		"Tagesordnung",
		"gehören",
		"ästhetischste",
		"Nacht",
		"Jahres",
		"Dinge",
		"zeigen",
		"Seite",
		"Fräulein",
		"Spinnweb",
		"Frau",
		"Bohnenblüte",
		"grü",
		"treffen",
		"Reggaekonzert",
		"anhören",
		"Augenblick",
		"überlegte",
		"getroffen",
		"Bar",
		"spielt",
		"Band",
		"Mischung",
		"Hip",
		"Hop",
		"Reggae",
		"paar",
		"Jungs",
		"Jamaika",
		"holen",
		"sanftem",
		"Druck",
		"Urträume",
		"Stammhirn",
		"Woher",
		"fragen",
		"komme",
		"München",
		"Hamburg",
		"Berliner",
		"Hamburger",
		"lachte",
		"pa",
		"hierhergekommen",
		"verhüllten",
		"anzusehen",
		"Zufall",
		"Uraufführung",
		"Theater",
		"Komponist",
		"aufgeführt",
		"Requiem",
		"hei",
		"Aspiration",
		"unterschiedlichen",
		"Instrumenten",
		"experimentiert",
		"Instrumente",
		"weitesten",
		"Sinn",
		"Atmungshilfen",
		"Asthmatiker",
		"Blasebalg",
		"Hochöfen",
		"Hörner",
		"Ventile",
		"Sauerstoffzelt",
		"Intensivstation",
		"Luft",
		"arbeiten",
		"Atmen",
		"Vokal",
		"reine",
		"Rosa",
		"Luxemburg",
		"ungewöhnlich",
		"jedenfalls",
		"Moment",
		"Schriften",
		"las",
		"Bild",
		"Transparenten",
		"trug",
		"nötig",
		"lebendig",
		"diskutierte",
		"Frauengruppen",
		"benannten",
		"verordnete",
		"Verehrung",
		"DDR",
		"Interesse",
		"Neugierde",
		"freiwillig",
		"entgegengebracht",
		"gekommen",
		"Foto",
		"Zeitung",
		"aufgehackten",
		"Schweinskopf",
		"Gedenkstelle",
		"gelegt",
		"Leiche",
		"Landwehrkanal",
		"geworfen",
		"dachte",
		"ich",
		"müsse",
		"Stadt",
		"zurückkommen",
		"weggegangen",
		"schreiben",
		"verstehen",
		"falsch",
		"ziemlich",
		"schwierig",
		"Versuch",
		"ma",
		"wei",
		"mu",
		"entsteht",
		"Braves",
		"scheitern",
		"gelesen",
		"verbinden",
		"versöhnen",
		"per",
		"se",
		"ausschlie",
		"Gleichheit",
		"Freiheit",
		"Ausgleich",
		"zustande",
		"bringen",
		"infinitesimale",
		"Politik",
		"Bedürfnisse",
		"Fähigkeiten",
		"Interessen",
		"Wünsche",
		"Zwänge",
		"zivilen",
		"empörend",
		"dumme",
		"Unrecht",
		"Wort",
		"naturgegeben",
		"steckt",
		"wissen",
		"schwere",
		"Hüftluxation",
		"natürliche",
		"gesellschaftliches",
		"auszubalancieren",
		"blo",
		"Sozialmaterial",
		"sehen",
		"Einmaligkeit",
		"Unversehrtheit",
		"garantieren",
		"akustisch",
		"thematisieren",
		"Artikel",
		"Reden",
		"Briefe",
		"die",
		"Gefängnis",
		"geschrieben",
		"Liebesbriefe",
		"altmodischen",
		"melancholischen",
		"Keuschheit",
		"all",
		"Stellen",
		"abgegangen",
		"Berlin",
		"gelebt",
		"gearbeitet",
		"Atem",
		"aufgenommen",
		"denkt",
		"gleichmä",
		"ig",
		"bewegt",
		"hört",
		"genau",
		"winzige",
		"Veränderung",
		"Schritts",
		"sieht",
		"fühlt",
		"Schlo",
		"platz",
		"geredet",
		"Barnimstra",
		"Hof",
		"Fliederstrauch",
		"pflanzte",
		"Hotel",
		"Eden",
		"verhöhnt",
		"erschlagen",
		"Lichtensteinbrücke",
		"Schleuse",
		"dreieinhalb",
		"Monate",
		"herausgezogen",
		"Friedhof",
		"Friedrichsfelde",
		"beerdigt",
		"Grab",
		"Nazis",
		"eingeebnet",
		"Politbürokrat",
		"Ulbricht",
		"angelagert",
		"starke",
		"zart",
		"stark",
		"kräftig",
		"körperlich",
		"verletzt",
		"Clara",
		"Zetkin",
		"Hüte",
		"hinguckt",
		"hinkt",
		"geschritten",
		"Erinnerung",
		"Hoffnungen",
		"Ohr",
		"Stück",
		"Schalmeien",
		"schlichten",
		"Märsche",
		"ablösen",
		"Neues",
		"Mai",
		"Gehörtes",
		"Instrument",
		"Streckenarbeiter",
		"nahenden",
		"Gefahr",
		"warnen",
		"Art",
		"Agitpropstück",
		"Musik",
		"Arbeiter",
		"interessiert",
		"Gewerkschaftler",
		"organisierten",
		"Kommunisten",
		"fanden",
		"grä",
		"lich",
		"Massen",
		"schweigen",
		"falscher",
		"Ansatz",
		"politische",
		"Botschaften",
		"herauszuposaunen",
		"ästhetischen",
		"Voraussetzungen",
		"schaffen",
		"politisches",
		"Handeln",
		"Vielfalt",
		"Handelnden",
		"insistiert",
		"stellte",
		"Tisch",
		"hineingetan",
		"Minuten",
		"herausnehmen",
		"Danke",
		"Arbeiten",
		"Interessierte",
		"wenige",
		"Kennen",
		"zeitgenössischen",
		"bringt",
		"befreundeter",
		"Buchhändler",
		"Saxophonist",
		"Tennis",
		"spiele",
		"CDs",
		"zuletzt",
		"Donaueschinger",
		"Musiktagen",
		"kleineres",
		"Werk",
		"Lust",
		"leider",
		"vorspielen",
		"Kassette",
		"Gerät",
		"optimal",
		"bekommen",
		"Eindruck",
		"Ruhe",
		"trinken",
		"stört",
		"Leid",
		"Künste",
		"isoliert",
		"gehört",
		"betrachtet",
		"vorlesen",
		"musizieren",
		"Kaffee",
		"unterhalten",
		"manchmal",
		"Jazz",
		"Klassik",
		"Werbebranche",
		"Frisur",
		"Hab",
		"schneiden",
		"Kartoffel",
		"recherchieren",
		"inzwischen",
		"merkwürdige",
		"Geschichten",
		"erlebt",
		"fängt",
		"landet",
		"woanders",
		"anderer",
		"Kopf",
		"Labyrinthe",
		"Faden",
		"verloren",
		"Roter",
		"Baum",
		"bedeutet",
		"Kartoffelsorte",
		"Onkel",
		"Kartoffeln",
		"schmecken",
		"einzelnen",
		"Sorten",
		"schmeckte",
		"gekochtem",
		"Zustand",
		"heraus",
		"Sterben",
		"lag",
		"wu",
		"te",
		"meinte",
		"Irgendwann",
		"Gesangstück",
		"lauter",
		"letzten",
		"Worten",
		"zusammensetzt",
		"kennen",
		"Licht",
		"Tschechow",
		"Badenweiler",
		"Bett",
		"aufrichtete",
		"deutsch",
		"sterbe",
		"fiel",
		"starb",
		"kurzen",
		"Ausrufe",
		"Worte",
		"sprechend",
		"sterben",
		"Vokalprojekt",
		"Arbeit",
		"schenkte",
		"Milch",
		"steckte",
		"Rekorder",
		"balancierte",
		"Stereolautsprecher",
		"Lautsprecher",
		"bequem",
		"Sessel",
		"rauchte",
		"Zigarre",
		"trank",
		"hörte",
		"schien",
		"Unterschiede",
		"Stocken",
		"Atemanhalten",
		"Beschleunigung",
		"kurzes",
		"Husten",
		"ausgespuckt",
		"herausgewürgt",
		"Gleichma",
		"umspielt",
		"mächtigen",
		"Fauchen",
		"furcht",
		"erregenden",
		"gro",
		"Ausma",
		"Hochofen",
		"gesehen",
		"feines",
		"Zischen",
		"Zerstäuber",
		"Wehen",
		"Wind",
		"maschinelles",
		"Keuchen",
		"Nachluftringen",
		"Durchatmen",
		"Aufatmen",
		"Welt"
	]
};

/***/ })
/******/ ]);