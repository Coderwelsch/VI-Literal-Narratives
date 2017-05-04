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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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


var _comCoderwelschQuery = __webpack_require__(7);

var _comCoderwelschQuery2 = _interopRequireDefault(_comCoderwelschQuery);

var _text = __webpack_require__(2);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.settings = {
			classes: {},
			selectors: {}
		};

		// module variables
		this.selectors = this.settings.selectors;
		this.classes = this.settings.classes;

		this.text = new _text2.default();

		// init
		this.initText();
	}

	_createClass(App, [{
		key: "initText",
		value: function initText() {
			console.log(this.text.wordList.length, this.text.wordDictArray.length);

			this.text.enricheWords(function (data) {
				var $dom = new _comCoderwelschQuery2.default("<div id='images'></div>").appendTo("body");

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var item = _step.value;

						if (item && item.value) {
							$dom.append("\n\t\t\t\t\t\t<div class=\"image\" style=\"background-image: url( '" + item.value[0].contentUrl + "' );\">" + item.searchString + "</div>\n\t\t\t\t\t");
						} else {
							console.log("ERROR");
						}
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
		}
	}]);

	return App;
}();

exports.default = App;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // imports


var _bingImageSearch = __webpack_require__(6);

var _bingImageSearch2 = _interopRequireDefault(_bingImageSearch);

var _text = __webpack_require__(3);

var _text2 = _interopRequireDefault(_text);

var _stopWords = __webpack_require__(4);

var _stopWords2 = _interopRequireDefault(_stopWords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// constants
var RegExWordSplitting = /\W+/;

var Text = function () {
	function Text() {
		var baseText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _text2.default;

		_classCallCheck(this, Text);

		this.baseText = baseText;
		this.wordList = null;
		this.wordDict = null;
		this.wordDictArray = null;

		this.imageSearch = new _bingImageSearch2.default();

		this.init();
	}

	_createClass(Text, [{
		key: "init",
		value: function init() {
			var splittedText = null;

			this.baseText = this.replaceUmlauts(this.baseText);

			splittedText = this.splitText(this.baseText);
			splittedText = this.removeStopWords(splittedText);

			this.wordList = splittedText;
			this.wordDict = this.generateDict(this.wordList);
			this.wordDictArray = this.generateDict(this.wordList, true);
		}
	}, {
		key: "generateDict",
		value: function generateDict(wordList) {
			var convertToArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var dict = {};

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = wordList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var word = _step.value;

					if (!dict[word]) {
						dict[word] = 1;
					} else {
						dict[word]++;
					}
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

			if (convertToArray) {
				return Object.keys(dict);
			}

			return dict;
		}
	}, {
		key: "enricheWords",
		value: function enricheWords(callback) {
			this.imageSearch.searchList(this.wordDictArray, callback);
		}
	}, {
		key: "replaceUmlauts",
		value: function replaceUmlauts(text) {
			return text.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/Ä/g, "Ae").replace(/Ö/g, "Oe").replace(/Ü/g, "Ue");
		}
	}, {
		key: "getNarrativeText",
		value: function getNarrativeText() {
			return _text2.default;
		}
	}, {
		key: "splitText",
		value: function splitText(text) {
			return text.split(RegExWordSplitting);
		}
	}, {
		key: "removeStopWords",
		value: function removeStopWords(wordList) {
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = _stopWords2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var stopWord = _step2.value;

					for (var i = 0; i < wordList.length; i++) {
						if (stopWord === wordList[i].toLowerCase()) {
							wordList.splice(i, 1);
						}
					}
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

			return wordList;
		}
	}]);

	return Text;
}();

exports.default = Text;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "Ich fuhr in die Pension, um mein Hemd zu wechseln und die Hose, sie klebte mir an den Beinen.\nIn meinem Zimmer fand ich einen unter der Tür durchgeschobenen Zettel: Wählen Sie die unten stehende Nummer und\nsagen Sie zu dem Operator das Stichwort: I need a bumerangcall. Viel Glück!\nIch duschte, zog mir Jeans und ein frisches Polohemd an. Ich bestellte mir bei dem Mann, der nachmittags in der\nPension als Portier arbeitete, einen Tee.\nMöchten Sie einen Darjeeling oder einen milden Assam?\nDen Assam, bitte.\nSetzen Sie sich ruhig schon in den Salon, ich bringe Ihnen den Tee. Übrigens ist zweimal für Sie angerufen\nworden.\nVon wem?\nDie haben keine Namen genannt. Waren aber Ausländer. Der eine wollte, wenn ich ihn richtig verstanden habe, noch\n mal anrufen. Und der andere hat sich unsere Adresse geben lassen.\nIch bekam einen eisigen Schreck, weil mir sofort der Bulgare einfiel und sein beiger Gorilla. Hören Sie, falls\ndie wieder anrufen, geben Sie auf keinen Fall meine Privatadresse.\nKlar. Anlageberater? fragte der Portier.\nJa. So was Ähnliches. Ich ging in den Salon, der morgens der Frühstücksraum war. Die hohe Flügeltür zum Balkon\nstand offen. Von der Straße waren Stimmen und Autolärm zu hören. Auf dem Sofa, am Lesetisch, saß ein Mann in einem verknitterten schwarzen Leinenanzug,\nblätterte in dem Buch, das Christo und Jeanne Claude über die Verhüllung herausgebracht hatten.\nWaren Sie schon am Reichstag?\nJa.\nEin verrücktes Unternehmen, einfach verrückt, das mir sehr gut gefällt, sagte der Mann.\nJa, sagte ich, mir auch.\nDanach wird etwas anders sein, ich bin überzeugt, daß diese Verhüllung etwas verändert. Das Geheimnis liegt\ndarin, daß etwas anders sein könnte. Übrigens ist keinem dieser Kunstkritiker aufgefallen, daß die Verhüllung am\n 23. Juni vollendet wird, also der Mittsommernacht, in der es ja kunterbunt zugeht, Verwechslungen,\nVerkleidungen, Vertauschungen sozusagen zur Tagesordnung gehören. Es ist die ästhetischste Nacht des Jahres. Die\n Dinge zeigen sich von einer anderen Seite, wie auch die Menschen. Fräulein Spinnweb und Frau Bohnenblüte lassen\n grüßen. Wenn Sie die treffen wollen, müssen Sie sich heute ein Reggaekonzert anhören.\nEinen Augenblick überlegte ich, ob ich ihm sagen sollte, daß ich Frau Spinnweb schon getroffen hätte, fragte\ndann aber nach dieser Bar.\nDa spielt eine Band, eine gute Mischung von Hip Hop und Reggae, ein paar Jungs aus Jamaika, die holen Ihnen mit\nsanftem Druck die Urträume aus dem Stammhirn. Woher kommen Sie, wenn ich fragen darf?\nIch komme aus München. Und Sie?\nIch komme aus Hamburg, bin aber Berliner.\nUnd ich bin Hamburger.\nEr lachte, das paßt zum Tag.\nSind Sie hierhergekommen, um sich diesen verhüllten Reichstag anzusehen?\nDas ist Zufall, sagte der Mann, wenn es einen gibt, ich habe morgen eine Uraufführung.\nSind Sie am Theater?\nNein, ich bin Komponist.\nUnd was wird aufgeführt?\nIch habe es ein Requiem genannt. Es heißt Aspiration. Ich habe mit unterschiedlichen Instrumenten\nexperimentiert, Instrumente im weitesten Sinn, zum Beispiel Atmungshilfen für Asthmatiker, ein Blasebalg für\nHochöfen, aber auch Hörner ohne Ventile, ein Sauerstoffzelt auf einer Intensivstation, alles Instrumente, die\nmit Luft arbeiten, auch das Atmen selbst, aber nicht als Vokal, sondern nur die reine Aspiration.\nUnd für wen ist das Requiem?\nFür Rosa Luxemburg.\nDas ist ungewöhnlich, sagte ich, jedenfalls im Moment. Vor einigen Jahren, als man ihre Schriften las, ihr Bild\nauf Transparenten durch die Straßen trug, aber jetzt?\nEben darum, sagte er, damals war es nicht nötig, sie war lebendig, ich meine, man las, man diskutierte ihre\nSchriften, Frauengruppen benannten sich nach ihr, damit meine ich nicht diese verordnete Verehrung in der DDR,\nsondern das Interesse, das ihr aus Neugierde, also freiwillig entgegengebracht wurde. Damals wäre mir das gar\nnicht in den Sinn gekommen. Aber dann, vor zwei, drei Jahren, sah ich ein Foto in der Zeitung. Einen\naufgehackten Schweinskopf. Jemand hatte ihn an die Gedenkstelle gelegt, wo die Leiche von Rosa Luxemburg in den\nLandwehrkanal geworfen worden war. Und da dachte ich, ich müsse in die Stadt zurückkommen, aus der ich vor\nzwanzig Jahren weggegangen war, ich müsse dieses Requiem schreiben, das auch eines über diese Stadt sein sollte.\nIst das nicht - verstehen Sie mich bitte nicht falsch - ziemlich schwierig?\nJa. Es ist ein Versuch. Und er ist maßlos, ich weiß. Aber maßlos muß der Versuch sein, sonst entsteht nur\nBraves. Lieber maßlos scheitern, lachte er. Ich habe die Schriften von Rosa Luxemburg wieder gelesen und erst\njetzt richtig verstanden, dieser Versuch, das zu verbinden, zu versöhnen, was sich doch per se ausschließt:\nGleichheit und Freiheit, diesen Ausgleich zustande zu bringen, also eine infinitesimale Politik, die\nBedürfnisse, Fähigkeiten, Interessen, Wünsche, Zwänge in einen zivilen Ausgleich zu bringen, das empörend dumme\nUnrecht, das in dem Wort »naturgegeben« steckt - Sie wissen, daß sie eine schwere Hüftluxation hatte - dieses\nnatürliche Unrecht durch ein gesellschaftliches Recht auf Gleichheit auszubalancieren, ohne dabei den Menschen\nals bloßes Sozialmaterial zu sehen, sondern ihm gerade wegen seiner Einmaligkeit auch seine Unversehrtheit zu\ngarantieren. Ich dachte, eben das müsse sich auch akustisch thematisieren lassen. Ich habe die Artikel, Reden,\nBriefe von ihr gelesen, gerade die, die sie aus dem Gefängnis geschrieben hat, Liebesbriefe von einer, ich kann\ndas nur mit einem etwas altmodischen Wort sagen: melancholischen Keuschheit. Ich bin all die Stellen abgegangen,\n hier in Berlin, an denen sie gelebt und gearbeitet hat, ich habe meinen Atem dabei aufgenommen, man denkt, der\nsei gleichmäßig, wenn man sich gleichmäßig bewegt, aber hört man genau hin, verändert er sich, nicht allein\ndurch die winzige Veränderung des Schritts, sondern durch das, was man hört, sieht, fühlt und denkt, auf dem\nSchloßplatz, wo sie geredet hat, in der Barnimstraße, wo sie im Gefängnis saß und im Hof einen Fliederstrauch\npflanzte, das Hotel Eden, wo sie verhöhnt und erschlagen wurde, die Lichtensteinbrücke, an der sie in den\nLandwehrkanal geworfen wurde, die Schleuse, wo ihre Leiche dreieinhalb Monate später herausgezogen wurde,\nFriedhof Friedrichsfelde, wo sie beerdigt wurde, 33 das Grab von Nazis eingeebnet, wo sich später auch ein\nPolitbürokrat wie Ulbricht angelagert hat. Es ist eine kleine, starke Frau gewesen, man möchte sagen, zart,\nnein, sie war stark, kräftig, körperlich, und doch verletzt, wenn Sie das Bild sehen von Rosa Luxemburg mit\nClara Zetkin zusammen, beide diese Hüte auf, und man sieht, wenn man hinguckt: sie hinkt. Ich bin das alles ab\ngeschritten, auch mit der Erinnerung an meine vergangenen Hoffnungen, und hatte dabei meinen Atem im Ohr. Sie\nmüssen wissen, daß ich 69 einmal ein Stück für Schalmeien geschrieben habe. Es sollte diese schlichten Märsche\nablösen, es sollte etwas Neues sein, für den 1. Mai, etwas so noch nie Gehörtes, aber eben aus diesem\nInstrument, das ja ein Instrument der Streckenarbeiter war, ein Instrument, um vor einer nahenden Gefahr zu\nwarnen. Es sollte eine Art Agitpropstück in Musik sein. Aber es hat die, für die ich es geschrieben habe, die\nArbeiter, nicht interessiert, nicht die Gewerkschaftler, nicht die organisierten Kommunisten. Die fanden das\ngräßlich. Von den Massen ganz zu schweigen. Es war ein falscher Ansatz. Es kommt nicht darauf an, politische\nBotschaften herauszuposaunen, sondern die ästhetischen Voraussetzungen dafür zu schaffen, daß politisches\nHandeln möglich wird, und zwar so, daß gerade auf Vielfalt und auf die Einmaligkeit des Handelnden insistiert\nwird.\nDer Portier kam mit dem Tee, stellte ihn auf den Tisch, sagte, ich habe den Tee eben hineingetan. Wenn Sie ihn\nin drei Minuten herausnehmen.\nDanke, sagte ich und fragte den Mann im schwarzen Leinenanzug: Wer hört jetzt Ihre Arbeiten?\nInteressierte, sagen wir es so. Wenige. Sehr wenige nur. Kennen Sie sich in der zeitgenössischen Musik aus?\nWenig. Hin und wieder bringt mir ein befreundeter Buchhändler und Saxophonist, mit dem ich Tennis spiele, CDs\nmit, zuletzt von den Donaueschinger Musiktagen. Ich würde Ihr Requiem gern hören.\nEs ist ein kleineres Werk. Wenn Sie Lust haben, können Sie morgen zur Uraufführung kommen.\nIch muß morgen leider wieder nach München zurück.\nIch kann Ihnen, wenn es Sie interessiert, ein Stück vorspielen. Ich habe es auf Kassette. Das Gerät hier ist\nnicht optimal, aber Sie bekommen einen Eindruck.\nGern, sagte ich, ich kann dann in Ruhe meinen Tee trinken, wenn es Sie nicht stört.\nÜberhaupt nicht. Es ist ein Leid, daß die Künste heute so isoliert gehört und betrachtet werden. Man sollte\nvorlesen, musizieren und dabei Kaffee trinken, sich unterhalten. Hören Sie Musik, wenn Sie arbeiten?\nJa, manchmal.\nUnd was?\nJazz, Klassik, Hip Hop.\nSind Sie in der Werbebranche?\nWie kommen Sie darauf?\nNa ja, die Frisur.\nHab ich mir heute schneiden lassen. Ich wollte was über die Kartoffel recherchieren, habe inzwischen viele\nmerkwürdige Geschichten erlebt. Man fängt mit der Kartoffel an und landet ganz woanders und ist dabei selbst\nauch ein anderer geworden, sieht man ja am Kopf.\nEr lachte. Gute Geschichten sind wie Labyrinthe.\nJa, sagte ich, inzwischen habe ich allerdings den Faden verloren. Ich würde nur noch gern wissen, was Roter Baum\nbedeutet. Kennen Sie eine Kartoffelsorte, die so heißt?\nNein. Wie kommen Sie auf diesen Namen?\nEr kommt von einem Onkel, den ich sehr mochte. Er konnte Kartoffeln schmecken. Ich meine, die einzelnen Sorten\nschmeckte er auch in gekochtem Zustand heraus. Als er im Sterben lag, sagte er noch: Roter Baum. Und niemand\nwußte, was er damit meinte.\nIrgendwann werde ich ein Gesangstück schreiben, das sich aus lauter letzten Worten zusammensetzt. Sie kennen es:\n Mehr Licht. Oder aber Tschechow, als er in Badenweiler im Bett lag, sich aufrichtete und auf deutsch sagte: Ich\n sterbe. Er fiel zurück und starb. Aber es gibt nicht nur diese kurzen Ausrufe, Worte, es gibt Menschen, die\nsprechend sterben. Es ist ein Vokalprojekt.\nIch würde mir gern Ihre Arbeit anhören.\nEr ging in sein Zimmer. Ich schenkte mir Tee ein, nahm von der Milch.\nEr kam mit der Kassette, steckte sie in den Rekorder, balancierte die Stereolautsprecher aus.\nDie Lautsprecher sind hier natürlich nicht optimal.\nIch saß bequem im Sessel, rauchte eine Zigarre an, trank Tee und hörte: das Atmen, gleichmäßig, so schien es,\naber dann hörte ich doch kleine Unterschiede, ein Stocken, ein Atemanhalten, kurz nur, eine Beschleunigung, ein\nkurzes Husten, als würde etwas ausgespuckt, herausgewürgt, dann wieder ein Gleichmaß, das umspielt wurde von\neinem mächtigen Fauchen, einem furcht- erregenden Fauchen, vielleicht von dem Blasebalg, ein Blasebalg großen\nAusmaßes, wie ich ihn einmal an einem Hochofen gesehen hatte, ein feines Zischen, wie von einem Zerstäuber, ein\nWehen, so wie der Wind geht, ein maschinelles Keuchen, ein Nachluftringen, aber auch ein Durchatmen, ein\nAufatmen - das Atmen der Welt."

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [
	"a",
	"ab",
	"aber",
	"aber",
	"ach",
	"acht",
	"achte",
	"achten",
	"achter",
	"achtes",
	"ag",
	"alle",
	"allein",
	"allem",
	"allen",
	"aller",
	"allerdings",
	"alles",
	"allgemeinen",
	"als",
	"als",
	"also",
	"am",
	"an",
	"andere",
	"anderen",
	"andern",
	"anders",
	"au",
	"auch",
	"auch",
	"auf",
	"aus",
	"ausser",
	"außer",
	"ausserdem",
	"außerdem",
	"b",
	"bald",
	"bei",
	"beide",
	"beiden",
	"beim",
	"beispiel",
	"bekannt",
	"bereits",
	"besonders",
	"besser",
	"besten",
	"bin",
	"bis",
	"bisher",
	"bist",
	"c",
	"d",
	"da",
	"dabei",
	"dadurch",
	"dafür",
	"dagegen",
	"daher",
	"dahin",
	"dahinter",
	"damals",
	"damit",
	"danach",
	"daneben",
	"dank",
	"dann",
	"daran",
	"darauf",
	"daraus",
	"darf",
	"darfst",
	"darin",
	"darüber",
	"darum",
	"darunter",
	"das",
	"das",
	"dasein",
	"daselbst",
	"dass",
	"daß",
	"dasselbe",
	"davon",
	"davor",
	"dazu",
	"dazwischen",
	"dein",
	"deine",
	"deinem",
	"deiner",
	"dem",
	"dementsprechend",
	"demgegenüber",
	"demgemäss",
	"demgemäß",
	"demselben",
	"demzufolge",
	"den",
	"denen",
	"denn",
	"denn",
	"denselben",
	"der",
	"deren",
	"derjenige",
	"derjenigen",
	"dermassen",
	"dermaßen",
	"derselbe",
	"derselben",
	"des",
	"deshalb",
	"desselben",
	"dessen",
	"deswegen",
	"d.h",
	"dich",
	"die",
	"diejenige",
	"diejenigen",
	"dies",
	"diese",
	"dieselbe",
	"dieselben",
	"diesem",
	"diesen",
	"dieser",
	"dieses",
	"dir",
	"doch",
	"dort",
	"drei",
	"drin",
	"dritte",
	"dritten",
	"dritter",
	"drittes",
	"du",
	"durch",
	"durchaus",
	"dürfen",
	"dürft",
	"durfte",
	"durften",
	"e",
	"eben",
	"ebenso",
	"ehrlich",
	"ei",
	"ei",
	"ei",
	"eigen",
	"eigene",
	"eigenen",
	"eigener",
	"eigenes",
	"ein",
	"einander",
	"eine",
	"einem",
	"einen",
	"einer",
	"eines",
	"einige",
	"einigen",
	"einiger",
	"einiges",
	"einmal",
	"einmal",
	"eins",
	"elf",
	"en",
	"ende",
	"endlich",
	"entweder",
	"entweder",
	"er",
	"Ernst",
	"erst",
	"erste",
	"ersten",
	"erster",
	"erstes",
	"es",
	"etwa",
	"etwas",
	"euch",
	"f",
	"früher",
	"fünf",
	"fünfte",
	"fünften",
	"fünfter",
	"fünftes",
	"für",
	"g",
	"gab",
	"ganz",
	"ganze",
	"ganzen",
	"ganzer",
	"ganzes",
	"gar",
	"gedurft",
	"gegen",
	"gegenüber",
	"gehabt",
	"gehen",
	"geht",
	"gekannt",
	"gekonnt",
	"gemacht",
	"gemocht",
	"gemusst",
	"genug",
	"gerade",
	"gern",
	"gesagt",
	"gesagt",
	"geschweige",
	"gewesen",
	"gewollt",
	"geworden",
	"gibt",
	"ging",
	"gleich",
	"gott",
	"gross",
	"groß",
	"grosse",
	"große",
	"grossen",
	"großen",
	"grosser",
	"großer",
	"grosses",
	"großes",
	"gut",
	"gute",
	"guter",
	"gutes",
	"h",
	"habe",
	"haben",
	"habt",
	"hast",
	"hat",
	"hatte",
	"hätte",
	"hatten",
	"hätten",
	"heisst",
	"her",
	"heute",
	"hier",
	"hin",
	"hinter",
	"hoch",
	"i",
	"ich",
	"ihm",
	"ihn",
	"ihnen",
	"ihr",
	"ihre",
	"ihrem",
	"ihren",
	"ihrer",
	"ihres",
	"im",
	"im",
	"immer",
	"in",
	"in",
	"indem",
	"infolgedessen",
	"ins",
	"irgend",
	"ist",
	"j",
	"ja",
	"ja",
	"jahr",
	"jahre",
	"jahren",
	"je",
	"jede",
	"jedem",
	"jeden",
	"jeder",
	"jedermann",
	"jedermanns",
	"jedoch",
	"jemand",
	"jemandem",
	"jemanden",
	"jene",
	"jenem",
	"jenen",
	"jener",
	"jenes",
	"jetzt",
	"k",
	"kam",
	"kann",
	"kannst",
	"kaum",
	"kein",
	"keine",
	"keinem",
	"keinen",
	"keiner",
	"kleine",
	"kleinen",
	"kleiner",
	"kleines",
	"kommen",
	"kommt",
	"können",
	"könnt",
	"konnte",
	"könnte",
	"konnten",
	"kurz",
	"l",
	"lang",
	"lange",
	"lange",
	"leicht",
	"leide",
	"lieber",
	"los",
	"m",
	"machen",
	"macht",
	"machte",
	"mag",
	"magst",
	"mahn",
	"man",
	"manche",
	"manchem",
	"manchen",
	"mancher",
	"manches",
	"mann",
	"mehr",
	"mein",
	"meine",
	"meinem",
	"meinen",
	"meiner",
	"meines",
	"mensch",
	"menschen",
	"mich",
	"mir",
	"mit",
	"mittel",
	"mochte",
	"möchte",
	"mochten",
	"mögen",
	"möglich",
	"mögt",
	"morgen",
	"muss",
	"muß",
	"müssen",
	"musst",
	"müsst",
	"musste",
	"mussten",
	"n",
	"na",
	"nach",
	"nachdem",
	"nahm",
	"natürlich",
	"neben",
	"nein",
	"neue",
	"neuen",
	"neun",
	"neunte",
	"neunten",
	"neunter",
	"neuntes",
	"nicht",
	"nicht",
	"nichts",
	"nie",
	"niemand",
	"niemandem",
	"niemanden",
	"noch",
	"nun",
	"nun",
	"nur",
	"o",
	"ob",
	"ob",
	"oben",
	"oder",
	"oder",
	"offen",
	"oft",
	"oft",
	"ohne",
	"Ordnung",
	"p",
	"q",
	"r",
	"recht",
	"rechte",
	"rechten",
	"rechter",
	"rechtes",
	"richtig",
	"rund",
	"s",
	"sa",
	"sache",
	"sagt",
	"sagte",
	"sah",
	"satt",
	"schlecht",
	"Schluss",
	"schon",
	"sechs",
	"sechste",
	"sechsten",
	"sechster",
	"sechstes",
	"sehr",
	"sei",
	"sei",
	"seid",
	"seien",
	"sein",
	"seine",
	"seinem",
	"seinen",
	"seiner",
	"seines",
	"seit",
	"seitdem",
	"selbst",
	"selbst",
	"sich",
	"sie",
	"sieben",
	"siebente",
	"siebenten",
	"siebenter",
	"siebentes",
	"sind",
	"so",
	"solang",
	"solche",
	"solchem",
	"solchen",
	"solcher",
	"solches",
	"soll",
	"sollen",
	"sollte",
	"sollten",
	"sondern",
	"sonst",
	"sowie",
	"später",
	"statt",
	"t",
	"tag",
	"tage",
	"tagen",
	"tat",
	"teil",
	"tel",
	"tritt",
	"trotzdem",
	"tun",
	"u",
	"über",
	"überhaupt",
	"übrigens",
	"uhr",
	"um",
	"und",
	"und?",
	"uns",
	"unser",
	"unsere",
	"unserer",
	"unter",
	"v",
	"vergangenen",
	"viel",
	"viele",
	"vielem",
	"vielen",
	"vielleicht",
	"vier",
	"vierte",
	"vierten",
	"vierter",
	"viertes",
	"vom",
	"von",
	"vor",
	"w",
	"wahr?",
	"während",
	"währenddem",
	"währenddessen",
	"wann",
	"war",
	"wäre",
	"waren",
	"wart",
	"warum",
	"was",
	"wegen",
	"weil",
	"weit",
	"weiter",
	"weitere",
	"weiteren",
	"weiteres",
	"welche",
	"welchem",
	"welchen",
	"welcher",
	"welches",
	"wem",
	"wen",
	"wenig",
	"wenig",
	"wenige",
	"weniger",
	"weniges",
	"wenigstens",
	"wenn",
	"wenn",
	"wer",
	"werde",
	"werden",
	"werdet",
	"wessen",
	"wie",
	"wie",
	"wieder",
	"will",
	"willst",
	"wir",
	"wird",
	"wirklich",
	"wirst",
	"wo",
	"wohl",
	"wollen",
	"wollt",
	"wollte",
	"wollten",
	"worden",
	"wurde",
	"würde",
	"wurden",
	"würden",
	"x",
	"y",
	"z",
	"z.b",
	"zehn",
	"zehnte",
	"zehnten",
	"zehnter",
	"zehntes",
	"zeit",
	"zu",
	"zuerst",
	"zugleich",
	"zum",
	"zum",
	"zunächst",
	"zur",
	"zurück",
	"zusammen",
	"zwanzig",
	"zwar",
	"zwar",
	"zwei",
	"zweite",
	"zweiten",
	"zweiter",
	"zweites",
	"zwischen",
	"zwölf"
];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// constants
var SearchUrl = "https://api.cognitive.microsoft.com/bing/v5.0/images/search?count=1&q=",
    ApiKey = "1f84837bf1bd4112b20705311dcca0c6";

var BingImageSearch = function () {
	function BingImageSearch() {
		_classCallCheck(this, BingImageSearch);
	}

	_createClass(BingImageSearch, [{
		key: "searchList",
		value: function searchList(wordList, callback) {
			var _this = this;

			var promiseIndex = 0,
			    timeout = 0,
			    promises = wordList.map(function (word) {
				var promise = _this.getSearchPromise(word, promiseIndex * timeout, promiseIndex);
				promiseIndex++;
				return promise;
			});

			Promise.all(promises).then(callback);
		}
	}, {
		key: "getSearchPromise",
		value: function getSearchPromise(word) {
			var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

			return new Promise(function (resolve) {
				var headers = new Headers();

				headers.append("Ocp-Apim-Subscription-Key", ApiKey);
				headers.set("Content-Type", "application/json");

				window.setTimeout(function () {
					fetch(SearchUrl + word, {
						method: "GET",
						headers: headers,
						mode: "cors",
						cache: "default"
					}).then(function (response) {
						response.json().then(function (data) {
							data.searchString = word;
							resolve(data);
						});
					});
				}, timeout);
			});
		}
	}]);

	return BingImageSearch;
}();

exports.default = BingImageSearch;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // imports


var _comCoderwelschUtils = __webpack_require__(8);

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
/* 8 */
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

/***/ })
/******/ ]);