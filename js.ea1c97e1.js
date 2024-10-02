// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"DEhP":[function(require,module,exports) {
module.exports = "/DAD/JavaSpotify/song1.902f4139.mp3";
},{}],"duI9":[function(require,module,exports) {
module.exports = "/DAD/JavaSpotify/song2.cb07d1cc.mp3";
},{}],"lBIj":[function(require,module,exports) {
module.exports = "/DAD/JavaSpotify/song3.98a5108b.mp3";
},{}],"NLqZ":[function(require,module,exports) {
module.exports = {
  "song1": require("./song1.mp3"),
  "song2": require("./song2.mp3"),
  "song3": require("./song3.mp3")
};
},{"./song1.mp3":"DEhP","./song2.mp3":"duI9","./song3.mp3":"lBIj"}],"pKdB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Song = exports.default = /*#__PURE__*/function () {
  function Song(key, audioPath) {
    _classCallCheck(this, Song);
    this.key = key;
    this.audioElement = new Audio(audioPath);
  }
  return _createClass(Song, [{
    key: "play",
    value: function play() {
      this.audioElement.play();
      console.log("".concat(this.key, " is playing"));
    }
  }, {
    key: "pause",
    value: function pause() {
      this.audioElement.pause();
      console.log("".concat(this.key, " is paused"));
    }
  }, {
    key: "isPlaying",
    value: function isPlaying() {
      return !this.audioElement.paused;
    }
  }]);
}();
},{}],"ERFn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Song = _interopRequireDefault(require("./Song.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Player = exports.default = /*#__PURE__*/function () {
  function Player(map) {
    _classCallCheck(this, Player);
    this.songsMap = {};
    for (var key in map) {
      this.songsMap[key] = new _Song.default(key, map[key]);
    }
  }
  return _createClass(Player, [{
    key: "playPauseSong",
    value: function playPauseSong(key) {
      key = "." + key;
      var song = this.songsMap[key];
      if (song.isPlaying()) {
        song.pause();
        return "paused";
      } else {
        song.play();
        return "playing";
      }
    }
  }]);
}();
},{"./Song.js":"pKdB"}],"QvaY":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("../assets/songs/*.mp3"));
var _Player = _interopRequireDefault(require("./Player.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var map = {};
var aux = 1;
for (var _i = 0, _Object$keys = Object.keys(_.default); _i < _Object$keys.length; _i++) {
  var key = _Object$keys[_i];
  map[".item-".concat(aux)] = _.default[key];
  aux++;
}
var player = new _Player.default(map);
document.querySelectorAll('.item').forEach(function (item) {
  item.addEventListener('click', function () {
    var key = item.classList[1];
    if (player.playPauseSong(key) === "paused") {
      item.classList.remove('playing');
    } else {
      item.classList.add('playing');
    }
  });
});
},{"../assets/songs/*.mp3":"NLqZ","./Player.js":"ERFn"}]},{},["QvaY"], null)
//# sourceMappingURL=/DAD/JavaSpotify/js.ea1c97e1.js.map