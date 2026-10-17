'use strict';

var kolmafia = require('kolmafia');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _checkPrivateRedeclaration(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldInitSpec(e, t, a) {
  _checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _classPrivateFieldSet2(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(t.prototype ), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}
function _wrapRegExp() {
  _wrapRegExp = function (e, r) {
    return new BabelRegExp(e, void 0, r);
  };
  var e = RegExp.prototype,
    r = new WeakMap();
  function BabelRegExp(e, t, p) {
    var o = RegExp(e, t);
    return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
  }
  function buildGroups(e, t) {
    var p = r.get(t);
    return Object.keys(p).reduce(function (r, t) {
      var o = p[t];
      if ("number" == typeof o) r[t] = e[o];else {
        for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
        r[t] = e[o[i]];
      }
      return r;
    }, Object.create(null));
  }
  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
    var t = e.exec.call(this, r);
    if (t) {
      t.groups = buildGroups(t, this);
      var p = t.indices;
      p && (p.groups = buildGroups(p, this));
    }
    return t;
  }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
    if ("string" == typeof p) {
      var o = r.get(this);
      return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) {
        if ("" === t) return e;
        var p = o[r];
        return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : "";
      }));
    }
    if ("function" == typeof p) {
      var i = this;
      return e[Symbol.replace].call(this, t, function () {
        var e = arguments;
        return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
      });
    }
    return e[Symbol.replace].call(this, t, p);
  }, _wrapRegExp.apply(this, arguments);
}

var Args = /*#__PURE__*/function () {
  function Args() {
    _classCallCheck(this, Args);
  }
  return _createClass(Args, null, [{
    key: "custom",
    value: function custom(spec, _parser, valueHelpName) {
      var _a, _b;
      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]);
      // Check that the default value actually appears in the options.
      if ("default" in spec && raw_options) {
        if (!raw_options.includes(spec.default)) {
          throw "Invalid default value ".concat(spec.default);
        }
      }
      return _objectSpread2(_objectSpread2({}, spec), {}, {
        valueHelpName: valueHelpName,
        parser: value => {
          var parsed_value = _parser(value);
          if (parsed_value === undefined || parsed_value instanceof ParseError) return parsed_value;
          if (raw_options) {
            if (!raw_options.includes(parsed_value)) {
              return new ParseError("received ".concat(value, " which was not in the allowed options"));
            }
          }
          return parsed_value;
        },
        options: (_b = spec.options) === null || _b === void 0 ? void 0 : _b.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "arrayFromArg",
    value: function arrayFromArg(spec, argFromSpec) {
      var _a, _b, _c;
      // First, construct a non-array version of this argument.
      // We do this by calling argFromSpec in order to extract the parser and
      // valueHelpName (to make it easier to define the functions below).
      //
      // The default argument of an ArraySpec is of type T[], which causes
      // problems, so we must remove it.
      var spec_without_default = _objectSpread2({}, spec); // Avoid "the operand of a 'delete' operator must be optional"
      if ("default" in spec_without_default) delete spec_without_default["default"];
      var arg = argFromSpec.call(this, spec_without_default);
      // Next, check that all default values actually appear in the options.
      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]);
      if ("default" in spec && raw_options) {
        var _iterator = _createForOfIteratorHelper(spec.default),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var default_entry = _step.value;
            if (!raw_options.includes(default_entry)) throw "Invalid default value ".concat(spec.default);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var separator = (_b = spec.separator) !== null && _b !== void 0 ? _b : ",";
      var arrayParser = value => {
        // Split the array
        var values = value.split(separator);
        if (!spec.noTrim) values = values.map(v => v.trim());
        // Parse all values, return the first error found if any
        var result = values.map(v => arg.parser(v));
        var error = result.find(v => v instanceof ParseError);
        if (error) return error;
        var failure_index = result.indexOf(undefined);
        if (failure_index !== -1) return new ParseError("components expected ".concat(arg.valueHelpName, " but could not parse ").concat(values[failure_index]));
        // Otherwise, all values are good
        return result;
      };
      return _objectSpread2(_objectSpread2({}, spec), {}, {
        valueHelpName: "".concat(arg.valueHelpName).concat(separator, " ").concat(arg.valueHelpName).concat(separator, " ..."),
        parser: arrayParser,
        options: (_c = spec.options) === null || _c === void 0 ? void 0 : _c.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "string",
    value: function string(spec) {
      return this.custom(spec, value => value, "TEXT");
    }
  }, {
    key: "strings",
    value: function strings(spec) {
      return this.arrayFromArg(spec, this.string);
    }
  }, {
    key: "number",
    value: function number(spec) {
      return this.custom(spec, value => isNaN(Number(value)) ? undefined : Number(value), "NUMBER");
    }
  }, {
    key: "numbers",
    value: function numbers(spec) {
      return this.arrayFromArg(spec, this.number);
    }
  }, {
    key: "boolean",
    value: function boolean(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "BOOLEAN");
    }
  }, {
    key: "booleans",
    value: function booleans(spec) {
      return this.arrayFromArg(spec, this.boolean);
    }
  }, {
    key: "flag",
    value: function flag(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "FLAG");
    }
  }, {
    key: "class",
    value: function _class(spec) {
      return this.custom(spec, value => {
        var match = kolmafia.Class.get(value);
        // Class.get does fuzzy matching:
        //  e.g. Class.get("sc") returns disco bandit.
        // To avoid this foot-gun, only return exact matches or id lookups.
        if (match.toString().toUpperCase() === value.toString().toUpperCase()) return match;
        if (!isNaN(Number(value))) return match;
        return undefined;
      }, "CLASS");
    }
  }, {
    key: "classes",
    value: function classes(spec) {
      return this.arrayFromArg(spec, this.class);
    }
  }, {
    key: "effect",
    value: function effect(spec) {
      return this.custom(spec, kolmafia.Effect.get, "EFFECT");
    }
  }, {
    key: "effects",
    value: function effects(spec) {
      return this.arrayFromArg(spec, this.effect);
    }
  }, {
    key: "familiar",
    value: function familiar(spec) {
      return this.custom(spec, kolmafia.Familiar.get, "FAMILIAR");
    }
  }, {
    key: "familiars",
    value: function familiars(spec) {
      return this.arrayFromArg(spec, this.familiar);
    }
  }, {
    key: "item",
    value: function item(spec) {
      return this.custom(spec, kolmafia.Item.get, "ITEM");
    }
  }, {
    key: "items",
    value: function items(spec) {
      return this.arrayFromArg(spec, this.item);
    }
  }, {
    key: "location",
    value: function location(spec) {
      return this.custom(spec, kolmafia.Location.get, "LOCATION");
    }
  }, {
    key: "locations",
    value: function locations(spec) {
      return this.arrayFromArg(spec, this.location);
    }
  }, {
    key: "monster",
    value: function monster(spec) {
      return this.custom(spec, kolmafia.Monster.get, "MONSTER");
    }
  }, {
    key: "monsters",
    value: function monsters(spec) {
      return this.arrayFromArg(spec, this.monster);
    }
  }, {
    key: "path",
    value: function path(spec) {
      return this.custom(spec, kolmafia.Path.get, "PATH");
    }
  }, {
    key: "paths",
    value: function paths(spec) {
      return this.arrayFromArg(spec, this.path);
    }
  }, {
    key: "skill",
    value: function skill(spec) {
      return this.custom(spec, kolmafia.Skill.get, "SKILL");
    }
  }, {
    key: "skills",
    value: function skills(spec) {
      return this.arrayFromArg(spec, this.skill);
    }
    /**
     * Create a group of arguments that will be printed separately in the help.
     *
     * Note that keys in the group must still be globally distinct.
     *
     * @param groupName The display name for the group in help.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     */
  }, {
    key: "group",
    value: function group(groupName, args) {
      return {
        name: groupName,
        args: args
      };
    }
    /**
     * Create a set of input arguments for a script.
     * @param scriptName Prefix for property names; often the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @param options Config options for the args and arg parser.
     * @returns An object which can hold parsed argument values. The keys of this
     *    object are identical to the keys in 'args'.
     */
  }, {
    key: "create",
    value: function create(scriptName, scriptHelp, args, options) {
      _traverse(args, (keySpec, key) => {
        if (key === "help" || keySpec.key === "help") throw "help is a reserved argument name";
      });
      var argsWithHelp = _objectSpread2(_objectSpread2({}, args), {}, {
        help: this.flag({
          help: "Show this message and exit.",
          setting: ""
        })
      });
      // Create an object to hold argument results, with a default value for
      // each argument.
      var res = _objectSpread2(_objectSpread2({}, _loadDefaultValues(argsWithHelp)), {}, {
        [specSymbol]: argsWithHelp,
        [scriptSymbol]: scriptName,
        [scriptHelpSymbol]: scriptHelp,
        [optionsSymbol]: options !== null && options !== void 0 ? options : {}
      });
      if (options === null || options === void 0 ? void 0 : options.positionalArgs) {
        var keys = [];
        var metadata = Args.getMetadata(res);
        metadata.traverse((keySpec, key) => {
          var _a;
          keys.push((_a = keySpec.key) !== null && _a !== void 0 ? _a : key);
        });
        var _iterator2 = _createForOfIteratorHelper(options.positionalArgs),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var arg = _step2.value;
            if (!keys.includes(arg)) throw "Unknown key for positional arg: ".concat(arg);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return res;
    }
    /**
     * Parse the command line input into the provided script arguments.
     * @param args An object to hold the parsed argument values, from Args.create(*).
     * @param command The command line input.
     * @param includeSettings If true, parse values from settings as well.
     */
  }, {
    key: "fill",
    value: function fill(args, command) {
      var includeSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var _a;
      var metadata = Args.getMetadata(args);
      // Load the list of keys and flags from the arg spec
      var keys = new Set();
      var flags = new Set();
      metadata.traverse((keySpec, key) => {
        var _a;
        var name = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        if (flags.has(name) || keys.has(name)) throw "Duplicate arg key ".concat(name, " is not allowed");
        if (keySpec.valueHelpName === "FLAG") flags.add(name);else keys.add(name);
      });
      // Parse values from settings.
      if (includeSettings) {
        metadata.traverseAndMaybeSet(args, (keySpec, key) => {
          var _a, _b;
          var setting = (_a = keySpec.setting) !== null && _a !== void 0 ? _a : "".concat(metadata.scriptName, "_").concat((_b = keySpec.key) !== null && _b !== void 0 ? _b : key);
          if (setting === "") return undefined; // no setting
          var value_str = kolmafia.getProperty(setting);
          if (value_str === "") return undefined; // no setting
          return parseAndValidate(keySpec, "Setting ".concat(setting), value_str);
        });
      }
      // Parse new argments from the command line
      if (command === undefined || command === "") return;
      var parsed = new CommandParser(command, keys, flags, (_a = metadata.options.positionalArgs) !== null && _a !== void 0 ? _a : []).parse();
      metadata.traverseAndMaybeSet(args, (keySpec, key) => {
        var _a;
        var argKey = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        var value_str = parsed.get(argKey);
        if (value_str === undefined) return undefined; // no setting
        return parseAndValidate(keySpec, "Argument ".concat(argKey), value_str);
      });
    }
    /**
     * Parse command line input into a new set of script arguments.
     * @param scriptName Prefix to use in property names; typically the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param spec An object specifying the script arguments.
     * @param command The command line input.
     * @param options Config options for the args and arg parser.
     */
  }, {
    key: "parse",
    value: function parse(scriptName, scriptHelp, spec, command, options) {
      var args = this.create(scriptName, scriptHelp, spec, options);
      this.fill(args, command);
      return args;
    }
    /**
     * Print a description of the script arguments to the CLI.
     *
     * First, all top-level argument descriptions are printed in the order they
     * were defined. Afterwards, descriptions for groups of arguments are printed
     * in the order they were defined.
     *
     * @param args An object of parsed arguments, from Args.create(*).
     * @param maxOptionsToDisplay If given, do not list more than this many options for each arg.
     */
  }, {
    key: "showHelp",
    value: function showHelp(args, maxOptionsToDisplay) {
      var _a;
      var metadata = Args.getMetadata(args);
      kolmafia.printHtml("".concat(metadata.scriptHelp));
      kolmafia.printHtml("");
      kolmafia.printHtml("<b>".concat((_a = metadata.options.defaultGroupName) !== null && _a !== void 0 ? _a : "Options", ":</b>"));
      metadata.traverse((arg, key) => {
        var _a, _b, _c, _d, _e;
        if (arg.hidden) return;
        var nameText = "<font color='".concat(kolmafia.isDarkMode() ? "yellow" : "blue", "'>").concat((_a = arg.key) !== null && _a !== void 0 ? _a : key, "</font>");
        var valueText = arg.valueHelpName === "FLAG" ? "" : "<font color='purple'>".concat(arg.valueHelpName, "</font>");
        var helpText = (_b = arg.help) !== null && _b !== void 0 ? _b : "";
        var defaultText = "default" in arg ? "<font color='#888888'>[default: ".concat(arg.default, "]</font>") : "";
        var settingText = arg.setting === "" ? "" : "<font color='#888888'>[setting: ".concat((_c = arg.setting) !== null && _c !== void 0 ? _c : "".concat(metadata.scriptName, "_").concat((_d = arg.key) !== null && _d !== void 0 ? _d : key), "]</font>");
        kolmafia.printHtml("&nbsp;&nbsp;".concat([nameText, valueText, "-", helpText, defaultText, settingText].join(" ")));
        var valueOptions = (_e = arg.options) !== null && _e !== void 0 ? _e : [];
        if (valueOptions.length < (maxOptionsToDisplay !== null && maxOptionsToDisplay !== void 0 ? maxOptionsToDisplay : Number.MAX_VALUE)) {
          var _iterator3 = _createForOfIteratorHelper(valueOptions),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var option = _step3.value;
              if (option.length === 1 || option[1] === undefined) {
                kolmafia.printHtml("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0]));
              } else {
                kolmafia.printHtml("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0], " - ").concat(option[1]));
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, group => {
        kolmafia.printHtml("");
        kolmafia.printHtml("<b>".concat(group.name, ":</b>"));
      });
    }
    /**
     * Load the metadata information for a set of arguments. Only for advanced usage.
     *
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @returns A class containing metadata information.
     */
  }, {
    key: "getMetadata",
    value: function getMetadata(args) {
      return new WrappedArgMetadata(args);
    }
  }]);
}();
var ParseError = /*#__PURE__*/_createClass(function ParseError(message) {
  _classCallCheck(this, ParseError);
  this.message = message;
});
/**
 * Metadata for the parsed arguments.
 *
 * This information is hidden within the parsed argument object so that it
 * is invisible to the user but available to fill(*) and showHelp(*).
 */
var specSymbol = Symbol("spec");
var scriptSymbol = Symbol("script");
var scriptHelpSymbol = Symbol("scriptHelp");
var optionsSymbol = Symbol("options");
/**
 * Parse a string into a value for a given argument, throwing if the parsing fails.
 * @param arg An argument that takes values in T.
 * @param source A description of where this value came from, for the error message.
 * @param value The value to parse.
 * @returns the parsed value.
 */
function parseAndValidate(arg, source, value) {
  var parsed_value;
  try {
    parsed_value = arg.parser(value);
  } catch (_a) {
    parsed_value = undefined;
  }
  if (parsed_value === undefined) throw "".concat(source, " expected ").concat(arg.valueHelpName, " but could not parse ").concat(value);
  if (parsed_value instanceof ParseError) throw "".concat(source, " ").concat(parsed_value.message);
  return parsed_value;
}
/**
 * A class that reveals the hidden metadata and specs for arguments.
 *
 * Only for advanced usage.
 */
var WrappedArgMetadata = /*#__PURE__*/function () {
  function WrappedArgMetadata(args) {
    _classCallCheck(this, WrappedArgMetadata);
    this.spec = args[specSymbol];
    this.scriptName = args[scriptSymbol];
    this.scriptHelp = args[scriptHelpSymbol];
    this.options = args[optionsSymbol];
  }
  /**
   * Create a parsed args object from this spec using all default values.
   */
  return _createClass(WrappedArgMetadata, [{
    key: "loadDefaultValues",
    value: function loadDefaultValues() {
      return _loadDefaultValues(this.spec);
    }
    /**
     * Traverse the spec and possibly generate a value for each argument.
     *
     * @param result The object to hold the resulting argument values, typically
     *    the result of loadDefaultValues().
     * @param setTo A function to generate an argument value from each arg spec.
     *    If this function returns undefined, then the argument value is unchanged.
     */
  }, {
    key: "traverseAndMaybeSet",
    value: function traverseAndMaybeSet(result, setTo) {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }
    /**
     * Traverse the spec and call a method for each argument.
     *
     * @param process A function to call at each arg spec.
     */
  }, {
    key: "traverse",
    value: function traverse(process, onGroup) {
      return _traverse(this.spec, process, onGroup);
    }
  }]);
}();
/**
 * Create a parsed args object from a spec using all default values.
 *
 * @param spec The spec for all arguments.
 */
function _loadDefaultValues(spec) {
  var result = {};
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      result[k] = _loadDefaultValues(argSpec.args);
    } else {
      if ("default" in argSpec) result[k] = argSpec.default;else result[k] = undefined;
    }
  }
  return result;
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param result The object to hold the resulting argument values.
 * @param setTo A function to generate an argument value from each arg spec.
 *    If this function returns undefined, then the argument value is unchanged.
 */
function _traverseAndMaybeSet(spec, result, setTo) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      var value = setTo(argSpec, k);
      if (value === undefined) continue;
      result[k] = value;
    }
  }
  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group_and_key = _groups[_i];
    _traverseAndMaybeSet(group_and_key[0].args, result[group_and_key[1]], setTo);
  }
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param process A function to call at each arg spec.
 */
function _traverse(spec, process, onGroup) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      process(argSpec, k);
    }
  }
  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {
    var group_and_key = _groups2[_i2];
    onGroup === null || onGroup === void 0 ? void 0 : onGroup(group_and_key[0], group_and_key[1]);
    _traverse(group_and_key[0].args, process, onGroup);
  }
}
/**
 * A parser to extract key/value pairs from a command line input.
 * @member command The command line input.
 * @member keys The set of valid keys that can appear.
 * @member flags The set of valid flags that can appear.
 * @member index An internal marker for the progress of the parser over the input.
 */
var CommandParser = /*#__PURE__*/function () {
  function CommandParser(command, keys, flags, positionalArgs) {
    _classCallCheck(this, CommandParser);
    this.command = command;
    this.index = 0;
    this.keys = keys;
    this.flags = flags;
    this.positionalArgs = positionalArgs;
    this.positionalArgsParsed = 0;
  }
  /**
   * Perform the parsing of (key, value) pairs.
   * @returns The set of extracted (key, value) pairs.
   */
  return _createClass(CommandParser, [{
    key: "parse",
    value: function parse() {
      var _a, _b, _c, _d;
      this.index = 0; // reset the parser
      var result = new Map();
      while (!this.finished()) {
        // A flag F may appear as !F to be parsed as false.
        var parsing_negative_flag = false;
        if (this.peek() === "!") {
          parsing_negative_flag = true;
          this.consume(["!"]);
        }
        var startIndex = this.index;
        var key = this.parseKey();
        if (result.has(key)) {
          throw "Duplicate key ".concat(key, " (first set to ").concat((_a = result.get(key)) !== null && _a !== void 0 ? _a : "", ")");
        }
        if (this.flags.has(key)) {
          // The key corresponds to a flag.
          // Parse [key] as true and ![key] as false.
          result.set(key, parsing_negative_flag ? "false" : "true");
          if (this.peek() === "=") throw "Flag ".concat(key, " cannot be assigned a value");
          if (!this.finished()) this.consume([" "]);
          this.prevUnquotedKey = undefined;
        } else if (this.keys.has(key)) {
          // Parse [key]=[value] or [key] [value]
          this.consume(["=", " "]);
          var value = this.parseValue();
          if (["'", '"'].includes((_b = this.prev()) !== null && _b !== void 0 ? _b : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          result.set(key, value);
        } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
          // Parse [value] as the next positional arg
          var positionalKey = this.positionalArgs[this.positionalArgsParsed];
          this.positionalArgsParsed++;
          this.index = startIndex; // back up to reparse the key as a value
          var _value = this.parseValue();
          if (["'", '"'].includes((_c = this.prev()) !== null && _c !== void 0 ? _c : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          if (result.has(positionalKey)) throw "Cannot assign ".concat(_value, " to ").concat(positionalKey, " (positionally) since ").concat(positionalKey, " was already set to ").concat((_d = result.get(positionalKey)) !== null && _d !== void 0 ? _d : "");
          result.set(positionalKey, _value);
        } else {
          // Key not found; include a better error message if it is possible for quotes to have been missed
          if (this.prevUnquotedKey && this.peek() !== "=") throw "Unknown argument: ".concat(key, " (if this should have been parsed as part of ").concat(this.prevUnquotedKey, ", you should surround the entire value in quotes)");else throw "Unknown argument: ".concat(key);
        }
      }
      return result;
    }
    /**
     * @returns True if the entire command has been parsed.
     */
  }, {
    key: "finished",
    value: function finished() {
      return this.index >= this.command.length;
    }
    /**
     * @returns The next character to parse, if it exists.
     */
  }, {
    key: "peek",
    value: function peek() {
      if (this.index >= this.command.length) return undefined;
      return this.command.charAt(this.index);
    }
    /**
     * @returns The character just parsed, if it exists.
     */
  }, {
    key: "prev",
    value: function prev() {
      if (this.index <= 0) return undefined;
      if (this.index >= this.command.length + 1) return undefined;
      return this.command.charAt(this.index - 1);
    }
    /**
     * Advance the internal marker over the next expected character.
     * Throws an error on unexpected characters.
     *
     * @param allowed Characters that are expected.
     */
  }, {
    key: "consume",
    value: function consume(allowed) {
      var _a;
      if (this.finished()) throw "Expected ".concat(allowed);
      if (allowed.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        this.index += 1;
      }
    }
    /**
     * Find the next occurance of one of the provided characters, or the end of
     * the string if the characters never appear again.
     *
     * @param searchValue The characters to locate.
     */
  }, {
    key: "findNext",
    value: function findNext(searchValue) {
      var result = this.command.length;
      var _iterator4 = _createForOfIteratorHelper(searchValue),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var value = _step4.value;
          var index = this.command.indexOf(value, this.index);
          if (index !== -1 && index < result) result = index;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return result;
    }
    /**
     * Starting from the internal marker, parse a single key.
     * This also advances the internal marker.
     *
     * @returns The next key.
     */
  }, {
    key: "parseKey",
    value: function parseKey() {
      var keyEnd = this.findNext(["=", " "]);
      var key = this.command.substring(this.index, keyEnd);
      this.index = keyEnd;
      return key;
    }
    /**
     * Starting from the internal marker, parse a single value.
     * This also advances the internal marker.
     *
     * Values are a single word or enclosed in matching quotes, i.e. one of:
     *    "[^"]*"
     *    '[^']*"
     *    [^'"][^ ]*
     *
     * @returns The next value.
     */
  }, {
    key: "parseValue",
    value: function parseValue() {
      var _a, _b;
      var valueEnder = " ";
      var quotes = ["'", '"'];
      if (quotes.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        valueEnder = (_b = this.peek()) !== null && _b !== void 0 ? _b : ""; // The value is everything until the next quote
        this.consume([valueEnder]); // Consume opening quote
      }
      var valueEnd = this.findNext([valueEnder]);
      var value = this.command.substring(this.index, valueEnd);
      if (valueEnder !== " " && valueEnd === this.command.length) {
        throw "No closing ".concat(valueEnder, " found for ").concat(valueEnder).concat(value);
      }
      // Consume the value (and closing quote)
      this.index = valueEnd;
      if (valueEnder !== " ") this.consume([valueEnder]);
      return value;
    }
  }]);
}();

var LogLevels;
(function (LogLevels) {
  LogLevels[LogLevels["NONE"] = 0] = "NONE";
  LogLevels[LogLevels["ERROR"] = 1] = "ERROR";
  LogLevels[LogLevels["WARNING"] = 2] = "WARNING";
  LogLevels[LogLevels["INFO"] = 3] = "INFO";
  LogLevels[LogLevels["DEBUG"] = 4] = "DEBUG";
})(LogLevels || (LogLevels = {}));
var defaultHandlers = {
  [LogLevels.INFO]: message => {
    kolmafia.printHtml("<b>[Libram Info]</b> ".concat(message));
    kolmafia.logprint("[Libram] ".concat(message));
    return;
  },
  [LogLevels.WARNING]: message => {
    kolmafia.printHtml("<span style=\"background: orange; color: white;\"><b>[Libram Warning]</b> ".concat(message, "</span>"));
    kolmafia.logprint("[Libram] ".concat(message));
    return;
  },
  [LogLevels.ERROR]: error => {
    kolmafia.printHtml("<span style=\"background: red; color: white;\"><b>[Libram Error]</b> ".concat(error.toString(), "</span>"));
    kolmafia.logprint("[Libram] ".concat(error));
    return;
  },
  [LogLevels.DEBUG]: message => {
    kolmafia.printHtml("<span style=\"background: red; color: white;\"><b>[Libram Debug]</b> ".concat(message, "</span>"));
    kolmafia.logprint("[Libram] ".concat(message));
    return;
  }
};
var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);
    _defineProperty(this, "handlers", defaultHandlers);
  }
  return _createClass(Logger, [{
    key: "level",
    get: function get() {
      return Logger.currentLevel;
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      Logger.currentLevel = level;
    }
  }, {
    key: "setHandler",
    value: function setHandler(level, callback) {
      this.handlers[level] = callback;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "log",
    value: function log(level, message) {
      if (this.level >= level) this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this.log(LogLevels.INFO, message);
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this.log(LogLevels.WARNING, message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.log(LogLevels.ERROR, message);
    }
  }, {
    key: "debug",
    value: function debug(message) {
      this.log(LogLevels.DEBUG, message);
    }
  }]);
}();
_defineProperty(Logger, "currentLevel", LogLevels.ERROR);
var logger = new Logger();

/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseDefaultProperties.ts for more information */
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "retryFailedNetworkRequests", "saveSettingsOnSet", "separateTitleAndMenuBar", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_faxDataChanged", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSatisfyWithShop", "autoSellingShorts", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "batWingsBatHoleEntrance", "batWingsBatratBurrow", "batWingsBeanbatChamber", "batWingsGuanoJunction", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "bookOfIronyAvailable", "booPeakLit", "bootsCharged", "breakfastCompleted", "burlyBodyguardReceivedBonus", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "candyCaneSwordApartmentBuilding", "candyCaneSwordBlackForest", "candyCaneSwordBowlingAlley", "candyCaneSwordCopperheadClub", "candyCaneSwordDailyDungeon", "candyCaneSwordDefiledCranny", "candyCaneSwordFunHouse", "candyCaneSwordShore", "candyCaneSwordWarFratRoom", "candyCaneSwordWarFratZetas", "candyCaneSwordWarHippyBait", "candyCaneSwordWarHippyLine", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "crAlways", "crimbo23ArmoryAtWar", "crimbo23BarAtWar", "crimbo23CafeAtWar", "crimbo23CottageAtWar", "crimbo23FoundryAtWar", "cyberDatastickCollected", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "enqueueForConsumption", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "grandpaUnlockedBlankPrescriptionSheet", "grandpaUnlockedEelSauce", "grandpaUnlockedFishyWand", "grandpaUnlockedGlowingSyringe", "grandpaUnlockedGroupieSpangles", "grandpaUnlockedHairOfTheFish", "grandpaUnlockedHalibut", "grandpaUnlockedHeavilyInvestedInPunFutures", "grandpaUnlockedJellyfishGel", "grandpaUnlockedMarineAquamarine", "grandpaUnlockedMidgetClownfish", "grandpaUnlockedSeaRadish", "grandpaUnlockedTrophyFish", "grandpaUnlockedWaterPoloCap", "grandpaUnlockedWaterPoloMitt", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasInterestingCoin", "hasOven", "hasRange", "hasShaker", "hasShrunkenHead", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "heartstoneBanishUnlocked", "heartstoneBuffUnlocked", "heartstoneKillUnlocked", "heartstoneLuckUnlocked", "heartstonePalsUnlocked", "heartstoneStunUnlocked", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "includeCodpieceGemsInOutfits", "intenseCurrents", "isMerkinGladiatorChampion", "isMerkinHighPriest", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerAscension12293", "itemBoughtPerAscension12298", "itemBoughtPerAscension12299", "itemBoughtPerAscension12300", "itemBoughtPerAscension12301", "itemBoughtPerAscension12303", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makeHandheldRadiosHardcore", "makeHandheldRadiosSoftcore", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "maximizerUseScope", "merkinElementaryBathroomUnlock", "merkinElementaryJanitorUnlock", "merkinElementaryTeacherUnlock", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsReplicaFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "permitScriptNotify", "pirateRealmUnlockedAnemometer", "pirateRealmUnlockedBlunderbuss", "pirateRealmUnlockedBreastplate", "pirateRealmUnlockedClipper", "pirateRealmUnlockedCrabsicle", "pirateRealmUnlockedFlag", "pirateRealmUnlockedFork", "pirateRealmUnlockedGoldRing", "pirateRealmUnlockedManOWar", "pirateRealmUnlockedPlushie", "pirateRealmUnlockedRadioRing", "pirateRealmUnlockedRhum", "pirateRealmUnlockedScurvySkillbook", "pirateRealmUnlockedShavingCream", "pirateRealmUnlockedSpyglass", "pirateRealmUnlockedTattoo", "pirateRealmUnlockedThirdCrewmate", "pirateRealmUnlockedTikiSkillbook", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pumpkinSpiceWhorlUsed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayDecorateJsCommands", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "serverAddsBothCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "shubJigguwattDefeated", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressCyberRealmDarkMode", "suppressCyberRealmGreenImages", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "yogUrtDefeated", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_adjustedJokestersWig", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_alliedRadioMaterielIntel", "_alliedRadioWildsunBoon", "_aprilShower", "_aprilShowerGlobsCollected", "_aprilShowerLungingThrustSmack", "_aprilShowerNorthernExplosion", "_aprilShowerSimmer", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_bastilleRewardsCollected", "_blackRoseGardenToday", "_blessingShieldColdReceived", "_blessingShieldHotReceived", "_blessingShieldPhysicalReceived", "_blessingShieldSleazeReceived", "_blessingShieldSpookyReceived", "_blessingShieldStenchReceived", "_brandishMossMedalCast", "_beachCombing", "_bearlyHeard", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bloodBagDoctorBag", "_bloodBagCloake", "_bloodBankIntimidated", "_bloodBankVisited", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_candyCaneSwordBackAlley", "_candyCaneSwordHauntedBedroom", "_candyCaneSwordHauntedLibrary", "_candyCaneSwordLyle", "_candyCaneSwordMadnessBakery", "_candyCaneSwordOvergrownLot", "_candyCaneSwordOvergrownShrine", "_candyCaneSwordPalindome", "_candyCaneSwordSouthOfTheBorder", "_candyCaneSwordSpookyForest", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_clanRumpusSpot1Visited", "_clanRumpusSpot2Visited", "_clanRumpusSpot3Visited", "_clanRumpusSpot4Visited", "_clanRumpusSpot5Visited", "_clanRumpusSpot7Visited", "_clanRumpusSpot9Visited", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_coolerYetiAdventures", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboPastDailySpecial", "_crimboPastMedicalGruel", "_crimboPastPrizeTurkey", "_crimboPastSmokingPope", "_crimboTraining", "_crimboTree", "_crToday", "_cursedKegUsed", "_cursedMicrowaveUsed", "_cyberTrashCollected", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_douseFoeSuccess", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_eleventRestEffectGained", "_elfGuardHangoverCureUsed", "_emberingHulkFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_extraGreasySliderEaten", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_faradayCageRestEffectGained", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_flagellateFlagonUsed", "_fleekMascaraUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_frostyMugUsed", "_fudgeSporkUsed", "_garbageItemChanged", "_giantGnawingBoneUsed", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadHouseRestEffectGained", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_gnomePart", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_heartstoneLuckUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_hodgmansBlanketDrunk", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_infiniteJellyUsed", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_interestingCoinHeads", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kneecappingOrdered", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_legendaryNoodlesSpleen", "_legendaryPastaWaveCast", "_legendarySpiceGhostFood", "_licenseToChillUsed", "_lightningRodCast", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_miniKiwiIntoxicatingSpiritsBought", "_miniKiwiTipiDrop", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_mobiusRingPrimed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mulliganStewEaten", "_mushroomGardenVisited", "_mushroomHouseRestEffectGained", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pickleJuiceDrunk", "_pingPongGame", "_pirateBellowUsed", "_pirateDinghyUsed", "_pirateForkUsed", "_pirateRealmSoldCompass", "_pirateRealmWindicleUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_porkElfMedicineCabinetUsed", "_porkElfNetiPotUsed", "_porkElfSinkUsed", "_porkElfToiletriesKitUsed", "_porkElfToiletUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_pumpkinRestEffectGained", "_punchingMirrorUsed", "_rainCoatCast", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_residenceCubeRestEffectGained", "_rhinestonesAcquired", "_saladForkUsed", "_seadentWaveUsed", "_seaJellyHarvested", "_septEmberBalanceChecked", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_snowballFactoryUsed", "_snowFortRestEffectGained", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_structuralEmberUsed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_takerSpaceSuppliesDelivered", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_thunderDownUnderwearCast", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_unblemishedPearlAnemoneMine", "_unblemishedPearlDiveBar", "_unblemishedPearlMadnessReef", "_unblemishedPearlMarinaraTrench", "_unblemishedPearlTheBriniestDeepests", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voodooSnuffUsed", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_waterBalloonBuffGranted", "_waterBalloonHeldByEnemy", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_yamBatteryUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "outputBufferLength", "pingDefaultTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "adventurerMeatsWorldPoints", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autopsyTweezersUsed", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableSeptEmbers", "availableStoreCredits", "availableSwagger", "avantGuardPoints", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "blessingShieldColdTier", "blessingShieldHotTier", "blessingShieldPhysicalTier", "blessingShieldSleazeTier", "blessingShieldSpookyTier", "blessingShieldStenchTier", "bloodweiserDrunk", "bodyguardCharge", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "bookOfIronyCost", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "bwApronMealsEaten", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "clubEmNextWeekMonsterTurn", "cocktailSummons", "commerceGhostCombats", "cookbookbatIngredientsCharge", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingPlansCharges", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "cupidBowFights", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "dartsThrown", "daycareEquipment", "daycareInstructorItemQuantity", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dietingPillCharges", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "droneSelfDestructChipsUsed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "exerciseLiquidityCharges", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "faxbotTimeout", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "handfulOfTipsMeat", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "intangibleAssetCharges", "ironicSwagger", "jarlsbergPoints", "juicyGarbageUsed", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lassoTrainingCount", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastKOLHSArtClassUnlockAdventure", "lastKOLHSChemClassUnlockAdventure", "lastKOLHSShopClassUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "legendaryNoodlesAmygdala", "legendaryNoodlesSkin", "legendaryNoodlesStomach", "leprecondoLastNeedChange", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "markYourTerritoryCharges", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "mechanicalSongbirdProgress", "merkinVocabularyMastery", "miniAdvClass", "miniKiwiAiolisUsed", "miniMartinisDrunk", "mixedBerryJellyUses", "moleTunnelLevel", "momSeaMonkeeProgress", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nanopolymerSpiderWebsUsed", "nextAprilBandTurn", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "peaceTurkeyIndex", "pendingMapReflections", "phosphorTracesUses", "pingpongSkill", "pirateRealmPlasticPiratesDefeated", "pirateRealmShipsDestroyed", "pirateRealmStormsEscaped", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "pokefamPoints", "poolSharkCount", "poolSkill", "powerPillProgress", "preworkoutPowderUses", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "romanCandelabraRedCasts", "romanCandelabraBlueCasts", "romanCandelabraYellowCasts", "romanCandelabraGreenCasts", "romanCandelabraPurpleCasts", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seadentConstructKills", "seadentLevel", "seaodesFound", "seaPoints", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "shrunkenHeadZombieHP", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn236", "skillBurn237", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel135", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel245", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "soybeanFuturesEaten", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "stockCertificateTurn", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "takerSpaceAnchor", "takerSpaceGold", "takerSpaceMast", "takerSpaceRum", "takerSpaceSilk", "takerSpaceSpice", "telescopeUpgrades", "tempuraSummons", "timeposedTopHats", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "toxicAssetCharges", "trainsetPosition", "tryToRememberCharges", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "wereProfessorBite", "wereProfessorKick", "wereProfessorLiver", "wereProfessorPoints", "wereProfessorRend", "wereProfessorResearchPoints", "wereProfessorStomach", "wereProfessorTransformTurns", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProgress", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "zootSpecimensPrepared", "zootomistPoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_alliedRadioDropsUsed", "_ancestralRecallCasts", "_antihangoverBonus", "_aprilShowerDiscoNap", "_aprilBandInstruments", "_aprilBandSaxophoneUses", "_aprilBandTomUses", "_aprilBandTubaUses", "_aprilBandStaffUses", "_aprilBandPiccoloUses", "_archSpadeDigs", "_astralDrops", "_augSkillsCast", "_assertYourAuthorityCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_baseballInnings", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_bastilleLockedInScore", "_bastilleVoucherGames", "_bastilleVouchersUsed", "_batWingsCauldronUsed", "_batWingsFreeFights", "_batWingsRestUsed", "_batWingsSwoopUsed", "_bczBloodGeyserCasts", "_bczRefractedGazeCasts", "_bczSweatBulletsCasts", "_bczBloodBathCasts", "_bczDialitupCasts", "_bczSweatEquityCasts", "_bczBloodThinnerCasts", "_bczSpinalTapasCasts", "_bczPheromoneCocktailCasts", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_beretBlastUses", "_beretBoastUses", "_beretBuskingUses", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candyEggsDeviled", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_clocksUsed", "_cloversPurchased", "_clubEmBattlefieldUsed", "_clubEmNextWeekUsed", "_clubEmTimeUsed", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_concoctionDatabaseRefreshes", "_cookbookbatCrafting", "_cookbookbatCombatsUntilNewQuest", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_crimboPastDailySpecialPrice", "_cupOf13sCharges", "_cupOf13sDrops", "_cupOf13sJewels", "_cyberFreeFights", "_cyberZone1Turns", "_cyberZone2Turns", "_cyberZone3Turns", "_dailySpecialPrice", "_dartsLeft", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_durableDolphinWhistleUsed", "_edDefeats", "_edLashCount", "_eldritchTentaclesFoughtToday", "_elfGuardCookingUsed", "_elronsCasts", "_enamorangs", "_energyCollected", "_ensorcelUsed", "_expertCornerCutterUsed", "_experienceSafariUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fitnessTrackingSteps", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_generateIronyUsed", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_heartstoneBanishUsed", "_heartstoneBuffUsed", "_heartstoneKillUsed", "_heartstonePalsUsed", "_heartstoneStunUsed", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holidayMultitaskingUsed", "_holoWristDrops", "_holoWristProgress", "_hoboFortRestEffectsGained", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_itemBoughtPerDay12292", "_itemBoughtPerDay12294", "_itemBoughtPerDay12295", "_itemBoughtPerDay12305", "_itemBoughtPerDay12306", "_itemBoughtPerDay12307", "_itemBoughtPerDay12308", "_itemBoughtPerDay12310", "_itemBoughtPerDay12311", "_itemBoughtPerDay12312", "_ironTricornHeadbuttUsed", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverAdvs", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_knuckleboneDrops", "_knuckleboneRests", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastFitzsimmonsHatch", "_lastMobiusStripTurn", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_laughingStockCharges", "_laughingStockFruitDropped", "_lawOfAveragesUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legendaryLasagmbieMana", "_legendaryPastaWandCrafting", "_legendaryVermincelliFreeRats", "_legionJackhammerCrafting", "_leprecondoRearrangements", "_leprecondoFurniture", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_luckyGoldRingBeachBuck", "_luckyGoldRingBit", "_luckyGoldRingCoinspiracy", "_luckyGoldRingFreddy", "_luckyGoldRingFunFunds", "_luckyGoldRingHoboNickel", "_luckyGoldRingMeat", "_luckyGoldRingRubee", "_luckyGoldRingSandDollar", "_luckyGoldRingVolcoino", "_luckyGoldRingWalmart", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayamRests", "_mayflowerDrops", "_mayflySummons", "_mcHugeLargeAvalancheUses", "_mcHugeLargeSkiPlowUses", "_mcHugeLargeSlashUses", "_meatCuteUsed", "_meatLoafUsed", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_mimicEggsDonated", "_mimicEggsObtained", "_miniKiwiDrops", "_miniMartiniDrops", "_mobiusRingPrimedTurn", "_mobiusStripEncounters", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_oldSchoolCocktailCraftingUsed", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_partialTombstonesUsed", "_pasteDrops", "_perilsForeseen", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_photoBoothEffects", "_photoBoothEquipment", "_pieDrops", "_piePartsCount", "_pirateRealmGold", "_pirateRealmGlue", "_pirateRealmGrog", "_pirateRealmGrub", "_pirateRealmGuns", "_pirateRealmIslandMonstersDefeated", "_pirateRealmSailingTurns", "_pirateRealmShipSpeed", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_pyramidRestEffectsGained", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_seadentLightningUsed", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_slimeVialsHarvested", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_smolderingSkeletonsDefeated", "_smoochArmyHQCombats", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowmanHatPlaceUsed", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spiritOfTheMountainsAdvs", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_summonResortPassesUsed", "_surprisinglySweetSlashUsed", "_surprisinglySweetStabUsed", "_sweatOutSomeBoozeUsed", "_swordOfSWordsKills", "_swordOfSWordsMonsterChanged", "_taffyRareSummons", "_taffyYellowSummons", "_tearawayPantsAdvs", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeCopsFoughtToday", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unblemishedPearlAnemoneMineProgress", "_unblemishedPearlDiveBarProgress", "_unblemishedPearlMadnessReefProgress", "_unblemishedPearlMarinaraTrenchProgress", "_unblemishedPearlTheBriniestDeepestsProgress", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_wandOfPigificationUsed", "_warbearAutoAnvilCrafting", "_waterBalloonTossStreak", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed", "lastNoncombat15", "lastNoncombat207", "lastNoncombat257", "lastNoncombat270", "lastNoncombat273", "lastNoncombat280", "lastNoncombat283", "lastNoncombat297", "lastNoncombat322", "lastNoncombat323", "lastNoncombat324", "lastNoncombat341", "lastNoncombat343", "lastNoncombat384", "lastNoncombat386", "lastNoncombat391", "lastNoncombat392", "lastNoncombat394", "lastNoncombat405", "lastNoncombat406", "lastNoncombat408", "lastNoncombat439", "lastNoncombat440", "lastNoncombat441", "lastNoncombat450", "lastNoncombat528", "lastNoncombat533", "lastNoncombat539", "lastNoncombat540", "lastNoncombat541", "lastNoncombat588", "lastNoncombat589", "lastNoncombat590", "lastNoncombat591", "lastNoncombat592"];
var monsterProperties = ["beGregariousMonster", "bodyguardChatMonster", "cameraMonster", "chateauMonster", "clubEmNextWeekMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "lastBlueVsRedNCMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "shrunkenHeadZombieMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "swordOfSWordsMonster", "waxMonster", "yearbookCameraTarget", "_afterimageMonster", "_beanballMonster", "_chainedRelativityMonster", "_chainedPurpleCandleMonster", "_chainedAfterimageMonster", "_cookbookbatQuestMonster", "_curveballMonster", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_prankCardMonster", "_relativityMonster", "_saberForceMonster", "_screwballMonster", "_skullballMonster", "_sourceTerminalDigitizeMonster", "_trickCoinMonster", "_voteMonster"];
var monsterNumericProperties = ["lastBlueVsRedNCMonster", "swordOfSWordsMonster"];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "holdHandsLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_citizenZone", "_cookbookbatQuestLastLocation", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_lastPirateRealmIsland", "_seadentWaveZone", "_sotParcelLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "gitConflictPriority", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "antiScientificMethod", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "baseballTeam", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beastSkillsAvailable", "beastSkillsKnown", "beforePVPScript", "betweenBattleScript", "blueVsRedTeam", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "coolerYetiMode", "counterScript", "copperheadClubHazard", "crimbo23ArmoryControl", "crimbo23BarControl", "crimbo23CafeControl", "crimbo23CottageControl", "crimbo23FoundryControl", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "dailyDungeonRooms", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "demonName14", "demonName14Segments", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "dreadScrollGuesses", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "everfullDartPerks", "extraCosmeticModifiers", "familiarScript", "flagellateFlagonsActive", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "heartstoneAttunementMods", "heartstoneAttunementWord", "heartstoneLetters", "holdHandsMonsterCount", "hpAutoRecoveryItems", "invalidBuffMessage", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventureContainer", "lastAdventureTrail", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "lastSelectedFaxbot", "lastSuccessfulFaxbot", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "leprecondoCurrentNeed", "leprecondoDiscovered", "leprecondoInstalled", "leprecondoNeedOrder", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "maximizerLastFilters", "mayoInMouth", "mayoMinderSetting", "merkinCatalogChoices", "merkinQuestPath", "mimicEggMonsters", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mineState1", "mineState2", "mineState3", "mineState4", "mineState5", "mineState6", "mpAutoRecoveryItems", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "noncombatForcers", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayChatCLITrigger", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "shrunkenHeadZombieAbilities", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "stockCertificateTurns", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "tavernLayout", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trackedMonsters", "trackedPhyla", "trainsetConfiguration", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "wereProfessorAdvancedResearch", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "zootGraftedMods", "zootMilkCrueltyMods", "zootMilkKindnessMods", "_automatedFutureSide", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleOptionsTaken", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_cupidBowFamiliars", "_currentDartboard", "_curveballFightsLeft", "_cyberZone1Defense", "_cyberZone1Hacker", "_cyberZone1Owner", "_cyberZone2Defense", "_cyberZone2Hacker", "_cyberZone2Owner", "_cyberZone3Defense", "_cyberZone3Hacker", "_cyberZone3Owner", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_futuristicCollarModifier", "_futuristicHatModifier", "_futuristicShirtModifier", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatActions", "_lastCombatStarted", "_locketMonstersFought", "_mayamSymbolsUsed", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_perilLocations", "_pirateRealmCrewmate", "_pirateRealmCrewmate1", "_pirateRealmCrewmate2", "_pirateRealmCrewmate3", "_pirateRealmShip", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_questPirateRealm", "_roboDrinks", "_roninStoragePulls", "_savageBeastMods", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_timeSpinnerFoodAvailable", "_trickOrTreatBlock", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505", "choiceAdventure1528", "choiceAdventure1534", "choiceAdventure1538", "choiceAdventure1539", "choiceAdventure1540", "choiceAdventure1541", "choiceAdventure1542", "choiceAdventure1545", "choiceAdventure1546", "choiceAdventure1547", "choiceAdventure1548", "choiceAdventure1549", "choiceAdventure1550", "choiceAdventure1591", "choiceAdventure1604", "choiceAdventure1605", "choiceAdventure1606", "choiceAdventure1607", "choiceAdventure1608", "choiceAdventure1609", "choiceAdventure1610", "choiceAdventure1611", "choiceAdventure1612", "choiceAdventure1613", "choiceAdventure1614", "choiceAdventure1615", "choiceAdventure1616", "choiceAdventure1617", "choiceAdventure1618", "choiceAdventure1619", "choiceAdventure1620", "choiceAdventure1621", "choiceAdventure1622", "choiceAdventure1623", "choiceAdventure1624", "choiceAdventure1625", "choiceAdventure1626", "choiceAdventure1627", "choiceAdventure1628", "choiceAdventure1629", "choiceAdventure1630", "choiceAdventure1631", "choiceAdventure1632", "choiceAdventure1633", "choiceAdventure1634", "choiceAdventure1635", "choiceAdventure1636"];
var familiarProperties = ["commaFamiliar", "cupidBowLastFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"];
var familiarNumericProperties = ["cupidBowLastFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];
var itemProperties = ["commerceGhostItem", "daycareInstructorItem", "doctorBagQuestItem", "dolphinItem", "eweItem", "guzzlrQuestBooze", "implementGlitchItem", "muffinOnOrder", "rufusDesiredArtifact", "rufusDesiredItems", "shenQuestItem", "trapperOre", "_cookbookbatQuestIngredient", "_crimboPastDailySpecialItem", "_dailySpecial", "_pirateRealmCurio"];
var itemNumericProperties = ["daycareInstructorItem", "_crimboPastDailySpecialItem"];

var booleanPropertiesSet = new Set(booleanProperties);
var numericPropertiesSet = new Set(numericProperties);
var numericOrStringPropertiesSet = new Set(numericOrStringProperties);
var stringPropertiesSet = new Set(stringProperties);
var locationPropertiesSet = new Set(locationProperties);
var monsterPropertiesSet = new Set(monsterProperties);
var familiarPropertiesSet = new Set(familiarProperties);
var statPropertiesSet = new Set(statProperties);
var phylumPropertiesSet = new Set(phylumProperties);
var itemPropertiesSet = new Set(itemProperties);
/**
 * Determine whether a property has a boolean value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a boolean value
 */
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric value
 */
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric or string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric or string value
 */
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a string value
 */
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Location value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Location value
 */
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Monster value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Monster value
 */
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Familiar value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Familiar value
 */
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Stat value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Stat value
 */
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Phylum value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Phylum value
 */
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}
/**
 * Determine whether a property has an Item value
 *
 * @param property Property to check
 * @returns Whether the supplied property has an Item value
 */
function isItemProperty(property) {
  return itemPropertiesSet.has(property);
}

var createPropertyGetter = transform => (property, default_) => {
  var value = kolmafia.getProperty(property);
  if (default_ !== undefined && value === "") {
    return default_;
  }
  return transform(value, property);
};
function createMafiaClassPropertyGetter(Type,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
toType) {
  var numericPropertyNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return createPropertyGetter((value, property) => {
    if (value === "") return null;
    var v = numericPropertyNames.includes(property) ? value.match(/^[0-9]+$/) ? toType(parseInt(value)) : null : toType(value);
    return v === Type.none ? null : v;
  });
}
var getString = createPropertyGetter(value => value);
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getFamiliar = createMafiaClassPropertyGetter(kolmafia.Familiar, kolmafia.toFamiliar, familiarNumericProperties);
var getItem = createMafiaClassPropertyGetter(kolmafia.Item, kolmafia.toItem, itemNumericProperties);
var getLocation = createMafiaClassPropertyGetter(kolmafia.Location, kolmafia.toLocation);
var getMonster = createMafiaClassPropertyGetter(kolmafia.Monster, kolmafia.toMonster, monsterNumericProperties);
var getPhylum = createMafiaClassPropertyGetter(kolmafia.Phylum, kolmafia.toPhylum);
var getStat = createMafiaClassPropertyGetter(kolmafia.Stat, kolmafia.toStat);
/**
 * Gets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param _default Default value for the property to take if not set
 * @returns Value of the mafia property
 */
function get$1(property, _default) {
  var value = getString(property);
  // Handle known properties.
  if (isBooleanProperty(property)) {
    return getBoolean(property, _default) ?? false;
  } else if (isNumericProperty(property)) {
    return getNumber(property, _default) ?? 0;
  } else if (isNumericOrStringProperty(property)) {
    return value.match(/^\d+$/) ? parseInt(value) : value;
  } else if (isLocationProperty(property)) {
    return getLocation(property, _default);
  } else if (isMonsterProperty(property)) {
    return getMonster(property, _default);
  } else if (isFamiliarProperty(property)) {
    return getFamiliar(property, _default);
  } else if (isStatProperty(property)) {
    return getStat(property, _default);
  } else if (isPhylumProperty(property)) {
    return getPhylum(property, _default);
  } else if (isItemProperty(property)) {
    return getItem(property, _default);
  } else if (isStringProperty(property)) {
    return value === "" && _default !== undefined ? _default : value;
  }
  // Not a KnownProperty from here on out.
  if (_default instanceof kolmafia.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof kolmafia.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof kolmafia.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof kolmafia.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof kolmafia.Phylum) {
    return getPhylum(property, _default);
  } else if (_default instanceof kolmafia.Item) {
    return getItem(property, _default);
  } else if (typeof _default === "boolean") {
    return value === "true" ? true : value === "false" ? false : _default;
  } else if (typeof _default === "number") {
    return value === "" ? _default : parseInt(value);
  } else if (value === "") {
    return _default === undefined ? "" : _default;
  } else {
    return value;
  }
}
/**
 * Sets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param value Value to give the property
 * @returns Value that was set
 */
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  kolmafia.setProperty(property, stringValue);
  return value;
}
/**
 * Sets the value of a set of mafia properties
 *
 * @param properties Set of properties
 */
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      prop = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    _set(prop, value);
  }
}
/**
 * Carries out a callback during which a set of properties will be set as supplied
 *
 * @param properties Properties to set during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
      prop = _ref2[0];
    return [prop, get$1(prop)];
  }));
  setProperties(properties);
  try {
    return callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
/**
 * Carries out a callback during which a property will be set as supplied
 *
 * @param property Property to set during callback
 * @param value Value to set property during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withProperty(property, value, callback) {
  return withProperties({
    [property]: value
  }, callback);
}
var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    _classCallCheck(this, PropertiesManager);
    _defineProperty(this, "properties", {});
  }
  return _createClass(PropertiesManager, [{
    key: "storedValues",
    get: function get() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */
  }, {
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          propertyName = _Object$entries2$_i[0],
          propertyValue = _Object$entries2$_i[1];
        if (!(propertyName in this.properties)) {
          this.properties[propertyName] = kolmafia.propertyExists(propertyName) ? get$1(propertyName) : PropertiesManager.EMPTY_PREFERENCE;
        }
        _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 2),
          choiceNumber = _ref6[0],
          choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */
  }, {
    key: "setChoice",
    value: function setChoice(choiceToSet, value) {
      this.setChoices({
        [choiceToSet]: value
      });
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */
  }, {
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        if (!(property in this.properties)) continue;
        var value = this.properties[property];
        if (value === PropertiesManager.EMPTY_PREFERENCE) {
          kolmafia.removeProperty(property);
        } else {
          _set(property, value);
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function resetAll() {
      this.reset.apply(this, _toConsumableArray(Object.keys(this.properties)));
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */
  }, {
    key: "clear",
    value: function clear() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        if (this.properties[property]) {
          delete this.properties[property];
        }
      }
    }
    /**
     * Clears all properties.
     */
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (get$1(property, 0) < value) {
        this.set({
          [property]: value
        });
        return true;
      }
      return false;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (get$1(property, 0) > value) {
        this.set({
          [property]: value
        });
        return true;
      }
      return false;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */
  }, {
    key: "clone",
    value: function clone() {
      var newGuy = new PropertiesManager();
      newGuy.properties = this.storedValues;
      return newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */
  }, {
    key: "clamp",
    value: function clamp(property, min, max) {
      if (max < min) return false;
      var start = get$1(property);
      this.setMinimumValue(property, min);
      this.setMaximumValue(property, max);
      return start !== get$1(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */
  }, {
    key: "equals",
    value: function equals(other) {
      var thisProps = Object.entries(this.storedValues);
      var otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size) return false;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2),
          propertyName = _thisProps$_i[0],
          propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue) return false;
      }
      return true;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var newGuy = new PropertiesManager();
      newGuy.properties = _objectSpread2(_objectSpread2({}, this.properties), other.properties);
      return newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */
  }], [{
    key: "merge",
    value: function merge() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        mergees[_key3] = arguments[_key3];
      }
      if (mergees.length === 0) return new PropertiesManager();
      return mergees.reduce((a, b) => a.merge(b));
    }
  }]);
}();
_defineProperty(PropertiesManager, "EMPTY_PREFERENCE", Symbol("empty preference"));

/**
 * Type guard against null value
 *
 * @param value Value that could be null
 * @returns Confirmation that the value is not null
 */
function notNull(value) {
  return value !== null;
}
/**
 * Parse string to number, stripping commas
 *
 * @param n Numberical string to parse
 * @returns Numerical value of string
 */
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 * @returns Clamped value
 */
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Split an array into chunkSize sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 * @returns Split array
 */
function chunk(array, chunkSize) {
  var result = [];
  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
/**
 * Count distinct values in an array
 *
 * @param array Array of values
 * @returns Map of distinct values to count
 */
function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}
/**
 * Turn map of distinct values to count into array of values
 *
 * @param map Map to turn into array
 * @returns Array of values
 */
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(_ref2 => {
    var _ref3 = _slicedToArray(_ref2, 2),
      item = _ref3[0],
      quantity = _ref3[1];
    return Array(quantity).fill(item);
  })));
}
/**
 * Stringify a counted map
 *
 * @param map Map of counted values
 * @returns String representing map of counted values
 */
function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref4 => {
    var _ref5 = _slicedToArray(_ref4, 2),
      item = _ref5[0],
      quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
/**
 * Sum an array of numbers.
 *
 * @param addends Addends to sum.
 * @param x Property or mapping function of addends to sum
 * @returns Sum of numbers
 */
function sum(addends, x) {
  return addends.reduce((subtotal, element) => subtotal + (typeof x === "function" ? x(element) : element[x]), 0);
}
/**
 * Checks if two arrays contain the same elements in the same quantity.
 *
 * @param a First array for comparison
 * @param b Second array for comparison
 * @returns Whether the two arrays are equal, irrespective of order.
 */
function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort();
  var sortedB = _toConsumableArray(b).sort();
  return a.length === b.length && sortedA.every((item, index) => item === sortedB[index]);
}
/**
 * Splits a string by commas while also respecting escaping commas with a backslash
 *
 * @param str String to split
 * @returns List of tokens
 */
function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";
  var _iterator2 = _createForOfIteratorHelper(str.split("")),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var char = _step2.value;
      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }
        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  returnValue.push(currentString.trim());
  return returnValue;
}
/**
 * Compare arrays shallowly
 *
 * @param left One array to compare
 * @param right The other array to compare
 * @returns Whether the two arrays are shallowly equal
 */
function arrayEquals(left, right) {
  if (left.length !== right.length) return false;
  return left.every((element, index) => element === right[index]);
}
/**
 * Used to collapse a Delayed<T, S> object into an entity of type "T" as represented by the object.
 *
 * @param delayedObject Object of type Delayed<T, S> that represents either a value of type T or a function returning a value of type T.
 * @param args The arguments to pass to the delay function
 * @returns The return value of the function, if delayedObject is a function. Otherwise, this returns the original element.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function undelay(delayedObject) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  return typeof delayedObject === "function" ? delayedObject.apply(void 0, args) : delayedObject;
}

var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }
  return literals.raw.reduce((acc, literal, i) => acc + literal + (placeholders[i] ?? ""), "");
};
var handleTypeGetError = (Type, error) => {
  var message = "".concat(error);
  var match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  if (match) {
    kolmafia.print("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red");
  } else {
    kolmafia.print(message);
  }
};
var createSingleConstant = (Type, converter) => {
  var tagFunction = function tagFunction(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    kolmafia.abort();
  };
  tagFunction.cls = Type;
  tagFunction.none = Type.none;
  tagFunction.get = name => {
    var value = converter(name);
    return value === Type.none ? null : value;
  };
  return tagFunction;
};
var createPluralConstant = Type => {
  var tagFunction = function tagFunction(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "") {
      return Type.all();
    }
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    kolmafia.abort();
  };
  tagFunction.all = () => Type.all();
  return tagFunction;
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Bounty, kolmafia.toBounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */
var $class = createSingleConstant(kolmafia.Class, kolmafia.toClass);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */
var $coinmaster = createSingleConstant(kolmafia.Coinmaster, kolmafia.toCoinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */
var $effect = createSingleConstant(kolmafia.Effect, kolmafia.toEffect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */
var $effects = createPluralConstant(kolmafia.Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */
var $element = createSingleConstant(kolmafia.Element, kolmafia.toElement);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */
var $familiar = createSingleConstant(kolmafia.Familiar, kolmafia.toFamiliar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */
var $familiars = createPluralConstant(kolmafia.Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */
var $item = createSingleConstant(kolmafia.Item, kolmafia.toItem);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */
var $items = createPluralConstant(kolmafia.Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */
var $location = createSingleConstant(kolmafia.Location, kolmafia.toLocation);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */
var $locations = createPluralConstant(kolmafia.Location);
/**
 * A Modifier specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Modifier, kolmafia.toModifier);
/**
 * A list of Modifiers specified by a comma-separated list of names.
 * For a list of all possible Modifiers, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Modifier);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */
var $monster = createSingleConstant(kolmafia.Monster, kolmafia.toMonster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */
var $monsters = createPluralConstant(kolmafia.Monster);
/**
 * A Path specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Path, kolmafia.toPath);
/**
 * A list of Paths specified by a comma-separated list of names.
 * For a list of all possible Paths, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Path);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */
var $phylum = createSingleConstant(kolmafia.Phylum, kolmafia.toPhylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Servant, kolmafia.toServant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */
var $skill = createSingleConstant(kolmafia.Skill, kolmafia.toSkill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */
var $skills = createPluralConstant(kolmafia.Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */
var $slot = createSingleConstant(kolmafia.Slot, kolmafia.toSlot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */
var $slots = createPluralConstant(kolmafia.Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */
var $stat = createSingleConstant(kolmafia.Stat, kolmafia.toStat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */
var $stats = createPluralConstant(kolmafia.Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Thrall, kolmafia.toThrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Thrall);

var _templateObject$F, _templateObject2$v, _templateObject3$x, _templateObject4$u, _templateObject5$t, _templateObject10$r, _templateObject11$q, _templateObject12$p, _templateObject13$o, _templateObject14$o, _templateObject15$o, _templateObject16$o, _templateObject17$n, _templateObject18$m, _templateObject19$l, _templateObject20$i, _templateObject21$i, _templateObject22$i, _templateObject23$i, _templateObject24$i, _templateObject25$i, _templateObject26$h, _templateObject27$g, _templateObject28$g, _templateObject29$g, _templateObject30$g, _templateObject31$g, _templateObject32$g, _templateObject33$g, _templateObject34$f, _templateObject35$f, _templateObject48$c, _templateObject49$b, _templateObject50$a, _templateObject51$a, _templateObject52$a, _templateObject53$9, _templateObject54$9;
/**
 * Determine whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 * @returns Whether it's a song
 */
function isSong(skillOrEffect) {
  if (skillOrEffect instanceof kolmafia.Effect && skillOrEffect.attributes.includes("song")) {
    return true;
  } else {
    var skill = skillOrEffect instanceof kolmafia.Effect ? kolmafia.toSkill(skillOrEffect) : skillOrEffect;
    return skill.class === $class(_templateObject$F || (_templateObject$F = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
  }
}
/**
 * Determine whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Minimum quantity the player must have to pass
 * @returns Whether the player meets the requirements of owning the supplied thing
 */
function have$g(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (thing instanceof kolmafia.Effect) {
    return kolmafia.haveEffect(thing) >= quantity;
  }
  if (thing instanceof kolmafia.Familiar) {
    return kolmafia.haveFamiliar(thing);
  }
  if (thing instanceof kolmafia.Item) {
    return kolmafia.availableAmount(thing) >= quantity;
  }
  if (thing instanceof kolmafia.Servant) {
    return kolmafia.haveServant(thing);
  }
  if (thing instanceof kolmafia.Skill) {
    return kolmafia.haveSkill(thing);
  }
  if (thing instanceof kolmafia.Thrall) {
    var thrall = kolmafia.myThrall();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return false;
}
/**
 * Determine whether a given item is in the player's campground
 *
 * @category General
 * @param item The Item KoLmafia uses to represent the campground item
 * @returns Whether the item is in the campground
 */
function haveInCampground(item) {
  return Object.keys(kolmafia.getCampground()).map(i => kolmafia.Item.get(i)).includes(item);
}
var Wanderer;
(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));
[Wanderer.Digitize, Wanderer.Portscan];
var foldGroupCache = new Map();
/**
 * Determines the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 * @param cache Whether to query the fold group cache
 * @returns List of items in the fold group
 */
function getFoldGroup(item) {
  var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (cache) {
    var cached = foldGroupCache.get(item);
    if (cached !== undefined) return cached;
  }
  var result = Object.entries(kolmafia.getRelated(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = _slicedToArray(_ref, 2),
      a = _ref3[1];
    var _ref4 = _slicedToArray(_ref2, 2),
      b = _ref4[1];
    return a - b;
  }).map(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 1),
      i = _ref6[0];
    return kolmafia.Item.get(i);
  });
  var _iterator = _createForOfIteratorHelper(result),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var fold = _step.value;
      foldGroupCache.set(fold, result);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
var banishSource = banisher => {
  switch (banisher.toLowerCase()) {
    case "saber force":
      return $skill(_templateObject2$v || (_templateObject2$v = _taggedTemplateLiteral(["Use the Force"])));
    case "nanorhino":
      return $skill(_templateObject3$x || (_templateObject3$x = _taggedTemplateLiteral(["Unleash Nanites"])));
    case "sea *dent":
      return $skill(_templateObject4$u || (_templateObject4$u = _taggedTemplateLiteral(["Sea *dent: Throw a Lightning Bolt"])));
  }
  var item = kolmafia.toItem(banisher);
  if ($items(_templateObject5$t || (_templateObject5$t = _taggedTemplateLiteral(["none, training scroll:  Snokebomb, tomayohawk-style reflex hammer"]))).includes(item)) {
    return kolmafia.toSkill(banisher);
  }
  return item;
};
/**
 * Translate mafia's multi-dimensional array prefs into a multi-dimensional array
 * @param prop The name of the mafia string property to process
 * @param outerDelimiter The "outer" delimiter, which separates tuples from eachother
 * @param innerDelimiter The "inner" delimieter, which separates the elements of tuples from eachother
 * @param mappers An array of string => whatever mapping functions that turn this into the actual objects we want
 * @returns An array of typed tuples, based on the given inputs
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function multiSplit(prop, outerDelimiter, innerDelimiter, mappers) {
  var initialSplit = get$1(prop).split(outerDelimiter).filter(Boolean);
  var multiDimensionalArray = outerDelimiter === innerDelimiter ? chunk(initialSplit, mappers.length) : initialSplit.map(entry => entry.split(innerDelimiter));
  return multiDimensionalArray.map(tup => mappers.map((func, index) => func(tup[index])));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 * @returns Map of banished monsters
 */
function getBanishedMonsters() {
  return new Map(multiSplit("banishedMonsters", ":", ":", [kolmafia.toMonster, banishSource, Number]).map(_ref7 => {
    var _ref8 = _slicedToArray(_ref7, 2),
      monster = _ref8[0],
      source = _ref8[1];
    return [source, monster];
  }));
}
/**
 * Parse the sort of range that KoLmafia encodes as a string
 * @param range KoLmafia-style range string
 * @returns Tuple of integers representing range
 */
function getRange(range) {
  var _range$match;
  var _ref9 = ((_range$match = range.match(/^(-?\d+)(?:-(-?\d+))?$/)) === null || _range$match === void 0 ? void 0 : _range$match.slice(1, 3).map(v => parseInt(v))) ?? [0],
    _ref0 = _slicedToArray(_ref9, 2),
    lower = _ref0[0],
    upper = _ref0[1];
  return [lower, Number.isNaN(upper) || upper === undefined ? lower : upper];
}
/**
 * Determine the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 * @returns Average value for range
 */
function getAverage(range) {
  var _getRange = getRange(range),
    _getRange2 = _slicedToArray(_getRange, 2),
    min = _getRange2[0],
    max = _getRange2[1];
  return (min + max) / 2;
}
/**
 * Determine the average adventures expected from consuming an Item
 *
 * If item is not a consumable, will just return "0".
 *
 * @param item Consumable item
 * @returns Average aventures from consumable
 */
function getAverageAdventures(item) {
  return getAverage(item.adventures);
}
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 * @returns Success
 */
function uneffect(effect) {
  return kolmafia.cliExecute("uneffect ".concat(effect.name));
}
/**
 * Determine the step as a number for a given quest property.
 *
 * @param questName Name of quest property to check.
 * @returns Quest step
 */
function questStep(questName) {
  var stringStep = get$1(questName);
  if (stringStep === "unstarted") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished" || stringStep === "") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw new Error("Quest state parsing error.");
    }
    return parseInt(stringStep.substring(4), 10);
  }
}
var EnsureError = /*#__PURE__*/function (_Error) {
  function EnsureError(cause, reason) {
    var _this;
    _classCallCheck(this, EnsureError);
    _this = _callSuper(this, EnsureError, ["Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : "")]);
    _this.name = "Ensure Error";
    return _this;
  }
  _inherits(EnsureError, _Error);
  return _createClass(EnsureError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Tries to get an effect using the default method
 *
 * @param ef effect to try to get
 * @param turns turns to aim for; default of 1
 * @throws {EnsureError} Throws an error if the effect cannot be guaranteed
 */
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (kolmafia.haveEffect(ef) < turns) {
    if (ef.default === null) {
      throw new EnsureError(ef, "No default action");
    }
    if (!kolmafia.cliExecute(ef.default) || kolmafia.haveEffect(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject10$r || (_templateObject10$r = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject11$q || (_templateObject11$q = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject12$p || (_templateObject12$p = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
/**
 * Get today's holiday wanderers
 *
 * @returns List of holiday wanderer Monsters
 */
function getTodaysHolidayWanderers() {
  return kolmafia.holiday().split("/").flatMap(holiday => holidayWanderers.get(holiday) ?? []);
}
new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject13$o || (_templateObject13$o = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject14$o || (_templateObject14$o = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject15$o || (_templateObject15$o = _taggedTemplateLiteral(["Moxie"])))]]);
new Map([["people, all of whom appear to be on fire", $element(_templateObject16$o || (_templateObject16$o = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject17$n || (_templateObject17$n = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject18$m || (_templateObject18$m = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject19$l || (_templateObject19$l = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject20$i || (_templateObject20$i = _taggedTemplateLiteral(["cold"])))]]);
new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject21$i || (_templateObject21$i = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject22$i || (_templateObject22$i = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject23$i || (_templateObject23$i = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject24$i || (_templateObject24$i = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject25$i || (_templateObject25$i = _taggedTemplateLiteral(["cold"])))]]);
new Map([["smoke rising from deeper within the maze", $element(_templateObject26$h || (_templateObject26$h = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject27$g || (_templateObject27$g = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject28$g || (_templateObject28$g = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject29$g || (_templateObject29$g = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject30$g || (_templateObject30$g = _taggedTemplateLiteral(["cold"])))]]);
new Map([["with lava slowly oozing out of it", $element(_templateObject31$g || (_templateObject31$g = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject32$g || (_templateObject32$g = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject33$g || (_templateObject33$g = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject34$f || (_templateObject34$f = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject35$f || (_templateObject35$f = _taggedTemplateLiteral(["cold"])))]]);
/**
 * Use an item with visitUrl instead of `use`; this is sometimes useful
 *
 * @param item The item you want to use
 * @returns The html of the resulting page
 */
function directlyUse(item) {
  return kolmafia.visitUrl("inv_use.php?which=3&whichitem=".concat(item.id, "&pwd"));
}
/**
 * Extracts a map of gained items from a string, for example from the result
 * of a combat.
 *
 * NOTE: Make sure you trust the source of that text.
 *
 * @param text The text to extract items from
 * @returns A map of items and their quantities
 */
function extractItems(text) {
  return new Map(Object.entries(kolmafia.extractItems(text)).map(_ref13 => {
    var _ref14 = _slicedToArray(_ref13, 2),
      itemName = _ref14[0],
      quantity = _ref14[1];
    return [kolmafia.Item.get(itemName), quantity];
  }));
}
/**
 * Calculate the total weight of a given familiar, including soup & modifiers
 * @param familiar The familiar to use--defaults to your current one
 * @param considerAdjustment Whether to include your `weightAdjustment` in the calculation
 * @returns The total weight of the given familiar
 */
function totalFamiliarWeight() {
  var familiar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : kolmafia.myFamiliar();
  var considerAdjustment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return clamp(clamp(kolmafia.familiarWeight(familiar), have$g($effect(_templateObject48$c || (_templateObject48$c = _taggedTemplateLiteral(["Fidoxene"])))) ? 20 : 0, Infinity) + familiar.soupWeight + (considerAdjustment ? kolmafia.weightAdjustment() : 0) + (familiar.feasted ? 10 : 0), 1, Infinity);
}
var regularFamiliarTags = Object.freeze(["animal", "insect", "haseyes", "haswings", "fast", "bite", "flies", "hashands", "wearsclothes", "organic", "vegetable", "hovers", "edible", "food", "sentient", "cute", "mineral", "polygonal", "object", "undead", "cantalk", "evil", "orb", "spooky", "sleaze", "aquatic", "swims", "isclothes", "phallic", "stench", "hot", "hasbeak", "haslegs", "robot", "technological", "hard", "cold", "hasbones", "hasclaws", "reallyevil", "good", "person", "humanoid", "animatedart", "software", "hasshell", "hasstinger"]);
new Set(regularFamiliarTags);
new Map([[$familiar(_templateObject49$b || (_templateObject49$b = _taggedTemplateLiteral(["Nursine"]))), ["ult_bearhug"]], [$familiar(_templateObject50$a || (_templateObject50$a = _taggedTemplateLiteral(["Caramel"]))), ["ult_sticktreats"]], [$familiar(_templateObject51$a || (_templateObject51$a = _taggedTemplateLiteral(["Smashmoth"]))), ["ult_owlstare"]], [$familiar(_templateObject52$a || (_templateObject52$a = _taggedTemplateLiteral(["Slotter"]))), ["ult_bloodbath"]], [$familiar(_templateObject53$9 || (_templateObject53$9 = _taggedTemplateLiteral(["Cornbeefadon"]))), ["ult_pepperscorn"]], [$familiar(_templateObject54$9 || (_templateObject54$9 = _taggedTemplateLiteral(["Mu"]))), ["ult_rainbowstorm"]]]);
/**
 * Determines the cost of acquiring an item taking into account your valueOfInventory preference
 *
 * @param item The item to check the price of
 * @param quantity the number of items to acquire
 * @returns The total value of the items
 */
function getAcquirePrice(item) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (quantity <= 0) return 0;
  var currentAmount = kolmafia.availableAmount(item);
  var amountNeeded = Math.max(0, quantity - currentAmount);
  var mallMinPrice = Math.max(100, 2 * kolmafia.autosellPrice(item));
  // If it's easy to meatpaste, just rely on retrieveCost
  if (kolmafia.craftType(item) === "Meatpasting") {
    var retrieveCost = kolmafia.retrievePrice(item, currentAmount + quantity) - kolmafia.retrievePrice(item, currentAmount);
    if (retrieveCost > 0) return retrieveCost;
  }
  if (kolmafia.isNpcItem(item) && kolmafia.npcPrice(item) > 0 && kolmafia.npcPrice(item) < kolmafia.mallPrice(item)) {
    // If it's best handled through NPC shops, handle it through NPC shops
    return quantity * kolmafia.npcPrice(item);
  }
  if (item.tradeable) {
    if (kolmafia.mallPrice(item) === mallMinPrice) {
      // Value the ones you have at autosell, because that's what you'd sell them at
      // Value the ones you need to buy at the price you'd buy them at
      return clamp(currentAmount, 0, quantity) * kolmafia.autosellPrice(item) + amountNeeded * kolmafia.mallPrice(item);
    }
    if (kolmafia.mallPrice(item) > mallMinPrice) {
      // Value them all at mall price
      // regardless of whether you already owned them
      return quantity * kolmafia.mallPrice(item);
    }
    // The fallthrough case here is that the mallprice is somehow below mall min
    // That shouldn't really happen
    return quantity * kolmafia.autosellPrice(item);
  }
  if (item.discardable) {
    return have$g(item, quantity) ? quantity * kolmafia.autosellPrice(item) : Infinity;
  }
  // If it can't be traded or discarded, and we're passing into this function, it's free
  // There might some day be specific items we don't want to value like this, because you receive only a limited number
  // We'll burn that bridge when we come to it.
  return 0;
}

/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseItemSkillNames.ts for more information */
var overlappingItemNames = new Set(["spider web", "really sticky spider web", "dictionary", "NG", "Cloaca-Cola", "yo-yo", "top", "ball", "kite", "yo", "red potion", "blue potion", "bowling ball", "adder", "red button", "tennis ball", "pile of sand", "mushroom", "deluxe mushroom", "spoon"]);
var overlappingSkillNames = new Set(["Lightning Bolt", "Shoot", "Thrust-Smack", "Headbutt", "Toss", "Knife in the Dark", "Sing", "Disarm", "Static Shock", "LIGHT", "BURN", "Extract", "Meteor Shower", "Snipe", "Bite", "Kick", "Punt", "Howl", "Cleave", "Boil", "Slice", "Rainbow"]);

var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name name.
 *
 * @param name Name of the macro
 * @category Combat
 * @returns {number} The macro ID.
 */
function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MACRO_NAME;
  var query = "//select[@name=\"macroid\"]/option[text()=\"".concat(name, "\"]/@value");
  var macroText = kolmafia.visitUrl("account_combatmacros.php");
  var macroMatches = kolmafia.xpath(macroText, query);
  if (macroMatches.length === 0) {
    kolmafia.visitUrl("account_combatmacros.php?action=new");
    var newMacroText = kolmafia.visitUrl("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    macroMatches = kolmafia.xpath(newMacroText, query);
  }
  if (macroMatches.length === 0) {
    // We may have hit the macro cap
    if (kolmafia.xpath(macroText, '//select[@name="macroid"]/option').length >= 100) {
      throw new InvalidMacroError("Please delete at least one existing macro to make some space for Libram");
    }
    // Otherwise who knows why it failed
    throw new InvalidMacroError("Could not find or create macro ".concat(name));
  }
  return parseInt(macroMatches[0], 10);
}
/**
 * Converts an item name to a Item, or passes through an existing instance of Item
 *
 * @param itemOrName Item name or Item instance
 * @returns KoLmafia Item instance
 */
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? kolmafia.Item.get(itemOrName) : itemOrName;
}
/**
 * Create a string of the item or items provided that is compatible with BALLS syntax and is non-ambiguous
 *
 * @param itemOrItems Item name, item instance, or 2-tuple of item name or item instance
 * @returns BALLS macro-compatible value for item or items provided
 */
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !overlappingItemNames.has(item.name) ? item.name : item.id.toFixed(0);
  }
}
/**
 * Generate a BALLS macro condition to check wither the player has either a single or a 2-tuple of combat items
 *
 * @param itemOrItems Single or 2-tuple of combat items
 * @returns BALLS macro condition
 */
function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    if (itemOrItems[0] === itemOrItems[1]) return "hastwocombatitems ".concat(itemOrItemsBallsMacroName(itemOrItems[0]));
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItemsBallsMacroName(itemOrItems));
  }
}
/**
 * Converts a skill name to a Skill, or passes through an existing instance of Skill
 *
 * @param skillOrName Skill name or Skill instance
 * @returns KoLmafia Skill instance
 */
function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return kolmafia.Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}
/**
 * Get a skill name in a form that is appropriate for BALLS macros
 *
 * @param skillOrName Skill name or Skill instance
 * @returns BALLS macro-suitable skill name
 */
function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !overlappingSkillNames.has(skill.name) ? skill.name : skill.id;
}
/**
 * Reduces a list of items into pairs to funksling.
 *
 * @param items - The items to be reduced.
 * @returns The reduced list of items or item pairs.
 */
function funkslingReduce() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }
  return items.reduce((acc, item, i, arr) => i % 2 === 0 ? acc.concat(i + 1 < arr.length ? [[item, arr[i + 1]]] : [item]) : acc, []);
}
var InvalidMacroError = /*#__PURE__*/function (_Error) {
  function InvalidMacroError() {
    _classCallCheck(this, InvalidMacroError);
    return _callSuper(this, InvalidMacroError, arguments);
  }
  _inherits(InvalidMacroError, _Error);
  return _createClass(InvalidMacroError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */
var Macro = /*#__PURE__*/function () {
  function Macro() {
    _classCallCheck(this, Macro);
    _defineProperty(this, "components", []);
    _defineProperty(this, "name", MACRO_NAME);
  }
  return _createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     *
     * @returns BALLS macro
     */
    function toString() {
      return (this.components.join(";") + ";").replace(/;;+/g, ";");
    }
    /**
     * Gives your macro a new name to be used when saving an autoattack.
     *
     * @param name The name to be used when saving as an autoattack.
     * @returns The macro in question
     */
  }, {
    key: "rename",
    value: function rename(name) {
      this.name = name;
      return this;
    }
    /**
     * Creates a new Macro with a name other than the default name.
     *
     * @param name The name to assign this macro.
     * @returns A new Macro with the assigned name.
     */
  }, {
    key: "save",
    value:
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */
    function save() {
      _set(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }
    /**
     * Load a saved macro from the Mafia property.
     *
     * @returns Loaded macro text
     */
  }, {
    key: "step",
    value:
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {
      var _ref, _this$components;
      for (var _len2 = arguments.length, nextSteps = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextSteps[_key2] = arguments[_key2];
      }
      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));
      (_this$components = this.components).push.apply(_this$components, _toConsumableArray(nextStepsStrings.filter(Boolean)));
      return this;
    }
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "submit",
    value:
    /**
     * Submit the built macro to KoL. Only works inside combat.
     *
     * @returns Contents of the fight page after macro submission
     */
    function submit() {
      var final = this.toString();
      return kolmafia.visitUrl("fight.php?action=macro&macrotext=".concat(kolmafia.urlEncode(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */
  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      var id = Macro.cachedMacroIds.get(this.name);
      if (id === undefined) {
        id = getMacroId(this.name);
        Macro.cachedMacroIds.set(this.name, id);
      }
      if (kolmafia.getAutoAttack() === 99000000 + id && this.toString() === Macro.cachedAutoAttacks.get(this.name)) {
        // This macro is already set. Don"t make the server request.
        return;
      }
      kolmafia.visitUrl("account_combatmacros.php?macroid=".concat(id, "&name=").concat(kolmafia.urlEncode(this.name), "&macrotext=").concat(kolmafia.urlEncode(this.toString()), "&action=save"), true, true);
      kolmafia.visitUrl("account.php?am=1&action=autoattack&value=".concat(99000000 + id, "&ajax=1"));
      Macro.cachedAutoAttacks.set(this.name, this.toString());
    }
    /**
     * Renames the macro, then sets it as an autoattack.
     *
     * @param name The name to save the macro under as an autoattack.
     */
  }, {
    key: "setAutoAttackAs",
    value: function setAutoAttackAs(name) {
      this.name = name;
      this.setAutoAttack();
    }
    /**
     * Clear all cached autoattacks, and delete all stored macros server-side.
     */
  }, {
    key: "abort",
    value:
    /**
     * Add an "abort" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function abort() {
      return this.step("abort");
    }
    /**
     * Create a new macro with an "abort" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "abortWithWarning",
    value:
    /**
     * Adds an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns  {Macro} This object itself.
     */
    function abortWithWarning(warning) {
      return this.step("abort \"".concat(warning, "\""));
    }
    /**
     * Create a new macro with an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns {Macro} This object itself.
     */
  }, {
    key: "strict",
    value:
    /**
     * Add a "strict" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function strict() {
      return this.step("strict");
    }
    /**
     * Add a "strict" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "lenient",
    value:
    /**
     * Add a "lenient" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function lenient() {
      return this.step("lenient");
    }
    /**
     * Add a "lenient" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "scrollWhenDone",
    value:
    /**
     * Add a "scrollwhendone" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function scrollWhenDone() {
      return this.step("scrollwhendone");
    }
    /**
     * Add a "scrollwhendone" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "icon",
    value:
    /**
     * Add an "icon [image]" step to this macro.
     *
     * @param item The item to use for the image.
     * @returns {Macro} This object itself.
     */
    function icon(item) {
      return this.step("icon ".concat(item.image.replace(/\.[^.]+$/, "")));
    }
    /**
     * Add an "icon [image]" step to this macro.
     *
     * @param item The item to use for the image.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "runaway",
    value:
    /**
     * Add a "runaway" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function runaway() {
      return this.step("runaway");
    }
    /**
     * Create a new macro with an "runaway" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @param ifFalse Optional else-branch for the macro.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue, ifFalse) {
      this.step("if ".concat(Macro.makeBALLSPredicate(condition))).step(ifTrue);
      if (ifFalse) {
        this.step("else").step(ifFalse);
      }
      return this.step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @param ifFalse Optional else-branch for the macro.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifNot",
    value:
    /**
     * Add an "if" statement to this macro, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the negated condition is true.
     * @param ifFalse Optional else-branch for the macro.
     * @returns {Macro} This object itself.
     */
    function ifNot(condition, ifTrue, ifFalse) {
      return this.if_("!".concat(Macro.makeBALLSPredicate(condition)), ifTrue, ifFalse);
    }
    /**
     * Create a new macro with an "if" statement, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the negated condition is true.
     * @param ifFalse Optional else-branch for the macro.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "while_",
    value:
    /**
     * Add a "while" statement to this macro.
     *
     * @param condition The BALLS condition for the while statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(Macro.makeBALLSPredicate(condition))).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     *
     * @param condition The BALLS condition for the while statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "externalIf",
    value:
    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue, ifFalse) {
      if (condition) return this.step(ifTrue);else if (ifFalse) return this.step(ifFalse);else return this;
    }
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "repeat",
    value:
    /**
     * Add a repeat step to the macro.
     *
     * @param condition The BALLS condition for the repeat statement, optional.
     * @returns {Macro} This object itself.
     */
    function repeat(condition) {
      return condition === undefined ? this.step("repeat") : this.step("repeat ".concat(Macro.makeBALLSPredicate(condition)));
    }
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "skill",
    value: function skill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }
      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return "skill ".concat(skillBallsMacroName(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }
      return this.step.apply(this, _toConsumableArray(skills.map(skillOrName => skillOrNameToSkill(skillOrName)).map(skill => {
        return Macro.if_(Macro.makeBALLSPredicate(skill), Macro.skill(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len5 = arguments.length, skills = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        skills[_key5] = arguments[_key5];
      }
      return this.step.apply(this, _toConsumableArray(skills.map(skillOrName => skillOrNameToSkill(skillOrName)).map(skill => {
        return Macro.if_(Macro.makeBALLSPredicate(skill), Macro.skill(skill).repeat(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }
      return this.step.apply(this, _toConsumableArray(items.map(itemOrItems => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "itemQueue",
    value:
    /**
     * Create a new macro with one or more item queue steps.
     * Items will be funkslinged if available.
     *
     * @param items Items to use.
     * @param condition The BALLS condition for the usequeue statement, optional.
     * @param single Whether we should refrain from funkslinging: `true` if you want to avoid funkslinging, defaults to `false`.
     * @returns {Macro} This object itself.
     */
    function itemQueue(items, condition) {
      var single = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (items.length === 0) return this;
      return this.step("".concat(single ? "usesinglequeue" : "usequeue", " ").concat(condition ? "until ".concat(Macro.makeBALLSPredicate(condition), " :: ") : "").concat(items.slice(0, 20).map(itemOrItemsBallsMacroName).join(", "))).itemQueue(items.slice(20), condition);
    }
    /**
     * Create a new macro with one or more item queue steps.
     * Items will be funkslinged if available.
     *
     * @param items Items to use.
     * @param condition The BALLS condition for the usequeue statement, optional.
     * @param single Whether we should refrain from funkslinging: `true` if you want to avoid funkslinging, defaults to `false`.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {
      for (var _len7 = arguments.length, items = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        items[_key7] = arguments[_key7];
      }
      return this.step.apply(this, _toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), Macro.item(item));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "funkslingItem",
    value:
    /**
     * Add one or more item steps to the macro, and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
    function funkslingItem() {
      return this.item.apply(this, _toConsumableArray(funkslingReduce.apply(void 0, arguments)));
    }
    /**
     * Create a new macro with one or more item steps, and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "tryFunkslingItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first,
     * and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
    function tryFunkslingItem() {
      return this.tryItem.apply(this, _toConsumableArray(funkslingReduce.apply(void 0, arguments)));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first,
     * and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "attack",
    value:
    /**
     * Add an attack step to the macro.
     *
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }
    /**
     * Create a new macro with an attack step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "jiggle",
    value:
    /**
     * Add a "jiggle" step to the macro.
     *
     * @returns {Macro} This object itself.
     */
    function jiggle() {
      return this.step("jiggle");
    }
    /**
     * Create a new macro with a jiggle step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
     *
     * @param macro The macro to place in the if_ statement
     * @returns This macro with supplied macro wapped in if statement matching holiday wanderers
     */
    function ifHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this;
      return this.if_(todaysWanderers.map(monster => "monsterid ".concat(monster.id)).join(" || "), macro);
    }
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching holiday wanderers
     */
  }, {
    key: "ifNotHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
     *
     * @param macro The macro to place in the if_ statement.
     * @returns This macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
    function ifNotHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this.step(macro);
      return this.if_(todaysWanderers.map(monster => "!monsterid ".concat(monster.id)).join(" && "), macro);
    }
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
  }, {
    key: "beginif",
    value:
    /**
     * Create a longer if...elif block, starting with this if statement.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns A MacroIfBlock that holds this macro on it, and will return to this macro upon calling either .else() or .endif()
     */
    function beginif(condition, ifTrue) {
      return new MacroIfBlock(this, condition, ifTrue);
    }
    /**
     * Create a Macro that begins with longer if...elif block, starting with this if statement.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns A MacroIfBlock that holds this macro on it, and will return to this macro upon calling either .else() or .endif()
     */
  }], [{
    key: "rename",
    value: function rename(name) {
      return new this().rename(name);
    }
  }, {
    key: "load",
    value: function load() {
      var _this;
      return (_this = new this()).step.apply(_this, _toConsumableArray(get$1(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */
  }, {
    key: "clearSaved",
    value: function clearSaved() {
      kolmafia.removeProperty(Macro.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;
      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function clearAutoAttackMacros() {
      var _iterator = _createForOfIteratorHelper(Macro.cachedAutoAttacks.keys()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var name = _step.value;
          var id = Macro.cachedMacroIds.get(name) ?? getMacroId(name);
          kolmafia.visitUrl("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));
          Macro.cachedAutoAttacks.delete(name);
          Macro.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
    }
  }, {
    key: "abortWithWarning",
    value: function abortWithWarning(warning) {
      return new this().abortWithWarning(warning);
    }
  }, {
    key: "strict",
    value: function strict() {
      return new this().strict();
    }
  }, {
    key: "lenient",
    value: function lenient() {
      return new this().lenient();
    }
  }, {
    key: "scrollWhenDone",
    value: function scrollWhenDone() {
      return new this().scrollWhenDone();
    }
  }, {
    key: "icon",
    value: function icon(item) {
      return new this().icon(item);
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new this().runaway();
    }
    /**
     *
     * @param condition The BALLS condition or a type to make a condition for (Monster, Item, Skill, etc.)
     * @returns {string} The BALLS condition string
     */
  }, {
    key: "makeBALLSPredicate",
    value: function makeBALLSPredicate(condition) {
      if (condition instanceof kolmafia.Monster) {
        return "monsterid ".concat(condition.id);
      } else if (condition instanceof Array) {
        if (condition[0] instanceof kolmafia.Item) return itemOrItemsBallsMacroPredicate(condition);
        return "(".concat(condition.map(entry => Macro.makeBALLSPredicate(entry)).join(" || "), ")");
      } else if (condition instanceof kolmafia.Effect) {
        return "haseffect ".concat(condition.id);
      } else if (condition instanceof kolmafia.Skill) {
        return condition.combat ? "hasskill ".concat(skillBallsMacroName(condition)) : "knowsskill ".concat(condition.id);
      } else if (condition instanceof kolmafia.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }
        return "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof kolmafia.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }
        return "snarfblat ".concat(snarfblat);
      } else if (condition instanceof kolmafia.Class) {
        if (condition.id > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }
        return condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof kolmafia.Stat) {
        return "".concat(condition.toString().toLowerCase(), "class");
      } else if (condition instanceof kolmafia.Phylum) {
        return "monsterphylum ".concat(condition);
      } else if (condition instanceof kolmafia.Element) {
        return "monsterelement ".concat(condition);
      } else if (["indoor", "outdoor", "underground", "underwater", "none"].includes(condition)) {
        return "environment ".concat(condition);
      }
      return condition;
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue, ifFalse) {
      return new this().if_(condition, ifTrue, ifFalse);
    }
  }, {
    key: "ifNot",
    value: function ifNot(condition, ifTrue, ifFalse) {
      return new this().ifNot(condition, ifTrue, ifFalse);
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function skill() {
      var _this3;
      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this4;
      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this5;
      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this6;
      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "itemQueue",
    value: function itemQueue(items, condition) {
      var single = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return new this().itemQueue(items, condition, single);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this7;
      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "funkslingItem",
    value: function funkslingItem() {
      var _this8;
      return (_this8 = new this()).funkslingItem.apply(_this8, arguments);
    }
  }, {
    key: "tryFunkslingItem",
    value: function tryFunkslingItem() {
      var _this9;
      return (_this9 = new this()).tryFunkslingItem.apply(_this9, arguments);
    }
  }, {
    key: "attack",
    value: function attack() {
      return new this().attack();
    }
  }, {
    key: "jiggle",
    value: function jiggle() {
      return new this().jiggle();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function ifHolidayWanderer(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function ifNotHolidayWanderer(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }, {
    key: "beginif",
    value: function beginif(condition, ifTrue) {
      return new this().beginif(condition, ifTrue);
    }
  }]);
}();
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */
_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
_defineProperty(Macro, "cachedMacroIds", new Map());
_defineProperty(Macro, "cachedAutoAttacks", new Map());
var MacroIfBlock = /*#__PURE__*/function () {
  function MacroIfBlock(macro, condition, ifTrue) {
    _classCallCheck(this, MacroIfBlock);
    _defineProperty(this, "root", void 0);
    _defineProperty(this, "components", []);
    _defineProperty(this, "baseClass", void 0);
    this.root = macro;
    this.baseClass = this.root.constructor;
    this.append(this.baseClass.if_(condition, ifTrue));
    this.components.pop(); // Remove "endif";
  }
  return _createClass(MacroIfBlock, [{
    key: "append",
    value: function append() {
      var _this$components2;
      for (var _len13 = arguments.length, components = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        components[_key13] = arguments[_key13];
      }
      (_this$components2 = this.components).push.apply(_this$components2, _toConsumableArray(components.flatMap(component => component instanceof Macro ? component.components : component)));
      return this;
    }
    /**
     * Append an elif statement to this if block.
     * @param condition The condition for the elif statement.
     * @param macro The macro within the elif statement.
     * @returns This same MacroIfBlock; call endif() or else() to return to your macro.
     */
  }, {
    key: "elseIf",
    value: function elseIf(condition, macro) {
      return this.append("elif ".concat(this.baseClass.makeBALLSPredicate(condition)), macro);
    }
    /**
     * End the elif block, and return to your initial macro.
     * @returns The macro that started this elif block, with all steps appended and the `if` statement closed.
     */
  }, {
    key: "endif",
    value: function endif() {
      var _this$root;
      return (_this$root = this.root).step.apply(_this$root, _toConsumableArray(this.components)).step("endif");
    }
    /**
     * End your elif block with a final `else`, and return to your initial macro.
     * @param macro The macro to pass into the `else` block.
     * @returns The macro that started this elif block, with all steps appended and the `if` statement closed.
     */
  }, {
    key: "else",
    value: function _else(macro) {
      return this.append("else", macro).endif();
    }
  }]);
}();

var _templateObject$E, _templateObject2$u, _templateObject3$w, _templateObject4$t, _templateObject5$s, _templateObject6$s, _templateObject7$s, _templateObject8$r, _templateObject9$r, _templateObject0$q, _templateObject1$q, _templateObject10$q, _templateObject11$p, _templateObject12$o, _templateObject13$n, _templateObject14$n, _templateObject15$n, _templateObject16$n, _templateObject17$m, _templateObject18$l, _templateObject19$k, _templateObject20$h, _templateObject21$h, _templateObject22$h, _templateObject23$h, _templateObject24$h, _templateObject25$h, _templateObject26$g, _templateObject27$f, _templateObject28$f, _templateObject29$f, _templateObject30$f, _templateObject31$f, _templateObject32$f, _templateObject33$f, _templateObject34$e, _templateObject35$e, _templateObject36$e, _templateObject37$e, _templateObject38$d, _templateObject39$d, _templateObject40$d, _templateObject41$d, _templateObject42$c, _templateObject43$b, _templateObject44$b, _templateObject45$b, _templateObject46$b, _templateObject47$b, _templateObject48$b;
function toMaximizerName(_ref) {
  var name = _ref.name,
    id = _ref.id;
  return name.includes(";") ? "\xB6".concat(id) : name;
}
/**
 * Merges a partial set of maximizer options onto a full set maximizer options. We merge via overriding for all boolean properties and for onlySlot, and concat all other array properties.
 *
 * @param defaultOptions MaximizeOptions to use as a "base."
 * @param addendums Options to attempt to merge onto defaultOptions.
 * @returns Merged maximizer options
 */
function mergeMaximizeOptions(defaultOptions, addendums) {
  return {
    updateOnFamiliarChange: addendums.updateOnFamiliarChange ?? defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: addendums.updateOnCanEquipChanged ?? defaultOptions.updateOnCanEquipChanged,
    updateOnLocationChange: addendums.updateOnLocationChange ?? defaultOptions.updateOnLocationChange,
    useOutfitCaching: addendums.useOutfitCaching ?? defaultOptions.useOutfitCaching,
    forceEquip: [].concat(_toConsumableArray(defaultOptions.forceEquip), _toConsumableArray(addendums.forceEquip ?? [])),
    preventEquip: [].concat(_toConsumableArray(defaultOptions.preventEquip), _toConsumableArray(addendums.preventEquip ?? [])).filter(item => {
      var _addendums$forceEquip;
      return !defaultOptions.forceEquip.includes(item) && !((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 && _addendums$forceEquip.includes(item));
    }),
    bonusEquip: new Map([].concat(_toConsumableArray(defaultOptions.bonusEquip), _toConsumableArray(addendums.bonusEquip ?? []))),
    onlySlot: addendums.onlySlot ?? defaultOptions.onlySlot,
    preventSlot: [].concat(_toConsumableArray(defaultOptions.preventSlot), _toConsumableArray(addendums.preventSlot ?? [])),
    forceUpdate: addendums.forceUpdate ?? defaultOptions.forceUpdate,
    modes: _objectSpread2(_objectSpread2({}, defaultOptions.modes), addendums.modes ?? {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnCanEquipChanged: true,
  updateOnLocationChange: false,
  useOutfitCaching: true,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: false,
  modes: {}
};
var modeableCommands$1 = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"];
var modeableItems = {
  backupcamera: $item(_templateObject$E || (_templateObject$E = _taggedTemplateLiteral(["backup camera"]))),
  umbrella: $item(_templateObject2$u || (_templateObject2$u = _taggedTemplateLiteral(["unbreakable umbrella"]))),
  snowsuit: $item(_templateObject3$w || (_templateObject3$w = _taggedTemplateLiteral(["Snow Suit"]))),
  edpiece: $item(_templateObject4$t || (_templateObject4$t = _taggedTemplateLiteral(["The Crown of Ed the Undying"]))),
  retrocape: $item(_templateObject5$s || (_templateObject5$s = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  parka: $item(_templateObject6$s || (_templateObject6$s = _taggedTemplateLiteral(["Jurassic Parka"]))),
  jillcandle: $item(_templateObject7$s || (_templateObject7$s = _taggedTemplateLiteral(["LED candle"])))
};
var modeableState = {
  backupcamera: () => kolmafia.getProperty("backupCameraMode"),
  umbrella: () => kolmafia.getProperty("umbrellaState"),
  snowsuit: () => kolmafia.getProperty("snowsuit"),
  edpiece: () => kolmafia.getProperty("edPiece"),
  retrocape: () => kolmafia.getProperty("retroCapeSuperhero") + " " + kolmafia.getProperty("retroCapeWashingInstructions"),
  parka: () => kolmafia.getProperty("parkaMode"),
  jillcandle: () => kolmafia.getProperty("ledCandleMode")
};
/**
 * Get set of current modes for modeables
 *
 * @returns Set of modes
 */
function getCurrentModes$1() {
  var modes = {};
  var _iterator = _createForOfIteratorHelper(modeableCommands$1),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      if (kolmafia.haveEquipped(modeableItems[key])) {
        modes[key] = modeableState[key]();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return modes;
}
/**
 * Apply set of modes
 *
 * @param modes Modes to apply
 */
function applyModes(modes) {
  var _iterator2 = _createForOfIteratorHelper(modeableCommands$1),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var command = _step2.value;
      if (kolmafia.haveEquipped(modeableItems[command]) && modes[command] !== undefined) {
        if (modeableState[command]() !== modes[command]) {
          kolmafia.cliExecute(command + " " + modes[command]);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
// Subset of slots that are valid for caching.
var cachedSlots = $slots(_templateObject8$r || (_templateObject8$r = _taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));
var CacheEntry = /*#__PURE__*/_createClass(function CacheEntry(equipment, rider, familiar, canEquipItemCount, modes) {
  _classCallCheck(this, CacheEntry);
  _defineProperty(this, "equipment", void 0);
  _defineProperty(this, "rider", void 0);
  _defineProperty(this, "familiar", void 0);
  _defineProperty(this, "canEquipItemCount", void 0);
  _defineProperty(this, "modes", void 0);
  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount;
  this.modes = modes;
});
var _outfitSlots = /*#__PURE__*/new WeakMap();
var _useHistory = /*#__PURE__*/new WeakMap();
var _maxSize = /*#__PURE__*/new WeakMap();
var OutfitLRUCache = /*#__PURE__*/function () {
  function OutfitLRUCache(maxSize) {
    _classCallCheck(this, OutfitLRUCache);
    // Current outfits allocated
    _classPrivateFieldInitSpec(this, _outfitSlots, []);
    // Array of indices into #outfitSlots in order of use. Most recent at the front.
    _classPrivateFieldInitSpec(this, _useHistory, []);
    _classPrivateFieldInitSpec(this, _maxSize, void 0);
    _classPrivateFieldSet2(_maxSize, this, maxSize);
  }
  return _createClass(OutfitLRUCache, [{
    key: "checkConsistent",
    value: function checkConsistent() {
      if (_classPrivateFieldGet2(_useHistory, this).length !== _classPrivateFieldGet2(_outfitSlots, this).length || !_toConsumableArray(_classPrivateFieldGet2(_useHistory, this)).sort().every((value, index) => value === index)) {
        throw new Error("Outfit cache consistency failed.");
      }
    }
  }, {
    key: "promote",
    value: function promote(index) {
      _classPrivateFieldSet2(_useHistory, this, [index].concat(_toConsumableArray(_classPrivateFieldGet2(_useHistory, this).filter(i => i !== index))));
      this.checkConsistent();
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = _classPrivateFieldGet2(_outfitSlots, this).indexOf(key);
      if (index < 0) return undefined;
      this.promote(index);
      return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function insert(key) {
      var lastUseIndex = undefined;
      if (_classPrivateFieldGet2(_outfitSlots, this).length >= _classPrivateFieldGet2(_maxSize, this)) {
        lastUseIndex = _classPrivateFieldGet2(_useHistory, this).pop();
        if (lastUseIndex === undefined) {
          throw new Error("Outfit cache consistency failed.");
        }
        _classPrivateFieldGet2(_useHistory, this).splice(0, 0, lastUseIndex);
        _classPrivateFieldGet2(_outfitSlots, this)[lastUseIndex] = key;
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet2(_outfitSlots, this).push(key) - 1;
        _classPrivateFieldGet2(_useHistory, this).splice(0, 0, index);
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldSet2(_outfitSlots, this, []);
      _classPrivateFieldSet2(_useHistory, this, []);
    }
  }]);
}();
/**
 * Save current equipment as KoL-native outfit.
 *
 * @param name Name of new outfit.
 */
_defineProperty(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");
function saveOutfit(name) {
  kolmafia.cliExecute("outfit save ".concat(name));
}
// Objective cache entries.
var cachedObjectives = {};
// Outfit cache entries. Keep 6 by default to avoid cluttering list.
var outfitCache = new OutfitLRUCache(6);
// Cache to prevent rescanning all items unnecessarily
var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
/**
 * Count the number of unique items that can be equipped.
 *
 * @returns The count of unique items.
 */
function canEquipItemCount() {
  var stats = $stats(_templateObject9$r || (_templateObject9$r = _taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min(kolmafia.myBasestat(stat), 300));
  if (stats.every((value, index) => value === cachedStats[index])) {
    return cachedCanEquipItemCount;
  }
  cachedStats = stats;
  cachedCanEquipItemCount = kolmafia.Item.all().filter(item => kolmafia.canEquip(item)).length;
  return cachedCanEquipItemCount;
}
/**
 * Checks the objective cache for a valid entry.
 *
 * @param cacheKey The cache key to check.
 * @param options Set of maximizer options
 * @returns A valid CacheEntry or null.
 */
function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];
  if (!entry) {
    return null;
  }
  if (options.updateOnFamiliarChange && kolmafia.myFamiliar() !== entry.familiar) {
    logger.warning("Equipment found in maximize cache but familiar is different.");
    return null;
  }
  if (options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    logger.warning("Equipment found in maximize cache but equippable item list is out of date.");
    return null;
  }
  return entry;
}
/**
 * Applies equipment that was found in the cache.
 *
 * @param entry The CacheEntry to apply
 * @param options Set of maximizer options
 */
function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : undefined;
  if (outfitName) {
    if (!kolmafia.isWearingOutfit(outfitName)) {
      kolmafia.outfit(outfitName);
    }
    var familiarEquip = entry.equipment.get($slot(_templateObject0$q || (_templateObject0$q = _taggedTemplateLiteral(["familiar"]))));
    if (familiarEquip) kolmafia.equip($slot(_templateObject1$q || (_templateObject1$q = _taggedTemplateLiteral(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = _createForOfIteratorHelper(entry.equipment),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
          slot = _step3$value[0],
          item = _step3$value[1];
        if (kolmafia.equippedItem(slot) !== item && kolmafia.availableAmount(item) > 0) {
          kolmafia.equip(slot, item);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);
      logger.info("Saving equipment to outfit ".concat(_outfitName, "."));
      saveOutfit(_outfitName);
    }
  }
  if (kolmafia.equippedAmount($item(_templateObject10$q || (_templateObject10$q = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject11$p || (_templateObject11$p = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    kolmafia.enthroneFamiliar(entry.rider.get($item(_templateObject12$o || (_templateObject12$o = _taggedTemplateLiteral(["Crown of Thrones"])))) || $familiar.none);
  }
  if (kolmafia.equippedAmount($item(_templateObject13$n || (_templateObject13$n = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject14$n || (_templateObject14$n = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    kolmafia.bjornifyFamiliar(entry.rider.get($item(_templateObject15$n || (_templateObject15$n = _taggedTemplateLiteral(["Buddy Bjorn"])))) || $familiar.none);
  }
  applyModes(_objectSpread2(_objectSpread2({}, entry.modes), options.modes));
}
var slotStructure = [$slots(_templateObject16$n || (_templateObject16$n = _taggedTemplateLiteral(["hat"]))), $slots(_templateObject17$m || (_templateObject17$m = _taggedTemplateLiteral(["back"]))), $slots(_templateObject18$l || (_templateObject18$l = _taggedTemplateLiteral(["shirt"]))), $slots(_templateObject19$k || (_templateObject19$k = _taggedTemplateLiteral(["weapon, off-hand"]))), $slots(_templateObject20$h || (_templateObject20$h = _taggedTemplateLiteral(["pants"]))), $slots(_templateObject21$h || (_templateObject21$h = _taggedTemplateLiteral(["acc1, acc2, acc3"]))), $slots(_templateObject22$h || (_templateObject22$h = _taggedTemplateLiteral(["familiar"])))];
/**
 * Verifies that a CacheEntry was applied successfully.
 *
 * @param entry The CacheEntry to verify
 * @param warn Whether to warn if the cache could not be applied
 * @returns If all desired equipment was appliedn in the correct slots.
 */
function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var success = true;
  var _iterator4 = _createForOfIteratorHelper(slotStructure),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var slotGroup = _step4.value;
      var desiredSlots = slotGroup.map(slot => [slot, entry.equipment.get(slot) ?? null]).filter(_ref2 => {
        var _ref3 = _slicedToArray(_ref2, 2),
          item = _ref3[1];
        return item !== null;
      });
      var desiredSet = desiredSlots.map(_ref4 => {
        var _ref5 = _slicedToArray(_ref4, 2),
          item = _ref5[1];
        return item;
      });
      var equippedSet = desiredSlots.map(_ref6 => {
        var _ref7 = _slicedToArray(_ref6, 1),
          slot = _ref7[0];
        return kolmafia.equippedItem(slot);
      });
      if (!setEqual(desiredSet, equippedSet)) {
        if (warn) {
          logger.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), "."));
        }
        success = false;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  if (kolmafia.equippedAmount($item(_templateObject23$h || (_templateObject23$h = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject24$h || (_templateObject24$h = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get($item(_templateObject25$h || (_templateObject25$h = _taggedTemplateLiteral(["Crown of Thrones"])))) !== kolmafia.myEnthronedFamiliar()) {
      if (warn) {
        logger.warning("Failed to apply ".concat(entry.rider.get($item(_templateObject26$g || (_templateObject26$g = _taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat($item(_templateObject27$f || (_templateObject27$f = _taggedTemplateLiteral(["Crown of Thrones"]))), "."));
      }
      success = false;
    }
  }
  if (kolmafia.equippedAmount($item(_templateObject28$f || (_templateObject28$f = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject29$f || (_templateObject29$f = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get($item(_templateObject30$f || (_templateObject30$f = _taggedTemplateLiteral(["Buddy Bjorn"])))) !== kolmafia.myBjornedFamiliar()) {
      if (warn) {
        logger.warning("Failed to apply".concat(entry.rider.get($item(_templateObject31$f || (_templateObject31$f = _taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat($item(_templateObject32$f || (_templateObject32$f = _taggedTemplateLiteral(["Buddy Bjorn"]))), "."));
      }
      success = false;
    }
  }
  return success;
}
/**
 * Save current equipment to the objective cache.
 *
 * @param cacheKey The cache key to save.
 * @param options Set of maximizer options
 */
function saveCached(cacheKey, options) {
  var equipment = new Map();
  var rider = new Map();
  var _iterator5 = _createForOfIteratorHelper(cachedSlots),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, kolmafia.equippedItem(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  if (kolmafia.equippedAmount($item(_templateObject33$f || (_templateObject33$f = _taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set($slot(_templateObject34$e || (_templateObject34$e = _taggedTemplateLiteral(["card-sleeve"]))), kolmafia.equippedItem($slot(_templateObject35$e || (_templateObject35$e = _taggedTemplateLiteral(["card-sleeve"])))));
  }
  if (kolmafia.equippedAmount($item(_templateObject36$e || (_templateObject36$e = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set($item(_templateObject37$e || (_templateObject37$e = _taggedTemplateLiteral(["Crown of Thrones"]))), kolmafia.myEnthronedFamiliar());
  }
  if (kolmafia.equippedAmount($item(_templateObject38$d || (_templateObject38$d = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set($item(_templateObject39$d || (_templateObject39$d = _taggedTemplateLiteral(["Buddy Bjorn"]))), kolmafia.myBjornedFamiliar());
  }
  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = _createForOfIteratorHelper(options.preventSlot),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (options.preventSlot.includes($slot(_templateObject40$d || (_templateObject40$d = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete($item(_templateObject41$d || (_templateObject41$d = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }
    if (options.preventSlot.includes($slot(_templateObject42$c || (_templateObject42$c = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete($item(_templateObject43$b || (_templateObject43$b = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }
  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = _createForOfIteratorHelper(kolmafia.Slot.all()),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _slot = _step7.value;
        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (!options.onlySlot.includes($slot(_templateObject44$b || (_templateObject44$b = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete($item(_templateObject45$b || (_templateObject45$b = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }
    if (!options.onlySlot.includes($slot(_templateObject46$b || (_templateObject46$b = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete($item(_templateObject47$b || (_templateObject47$b = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }
  var entry = new CacheEntry(equipment, rider, kolmafia.myFamiliar(), canEquipItemCount(), _objectSpread2(_objectSpread2({}, getCurrentModes$1()), options.modes));
  cachedObjectives[cacheKey] = entry;
  if (options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    logger.info("Saving equipment to outfit ".concat(outfitName, "."));
    saveOutfit(outfitName);
  }
}
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 *
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 * @returns Whether the maximize call succeeded.
 */
function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options);
  var forceEquip = fullOptions.forceEquip,
    preventEquip = fullOptions.preventEquip,
    bonusEquip = fullOptions.bonusEquip,
    onlySlot = fullOptions.onlySlot,
    preventSlot = fullOptions.preventSlot,
    forceUpdate = fullOptions.forceUpdate;
  // Sort each group in objective to ensure consistent ordering in string
  var objective = _toConsumableArray(new Set([].concat(_toConsumableArray(objectives.sort()), _toConsumableArray(forceEquip.map(item => "\"equip ".concat(toMaximizerName(item), "\"")).sort()), _toConsumableArray(preventEquip.map(item => "-\"equip ".concat(toMaximizerName(item), "\"")).sort()), _toConsumableArray(onlySlot.map(slot => "".concat(slot)).sort()), _toConsumableArray(preventSlot.map(slot => "-".concat(slot)).sort()), _toConsumableArray(Array.from(bonusEquip.entries()).filter(_ref8 => {
    var _ref9 = _slicedToArray(_ref8, 2),
      bonus = _ref9[1];
    return bonus !== 0;
  }).map(_ref0 => {
    var _ref1 = _slicedToArray(_ref0, 2),
      item = _ref1[0],
      bonus = _ref1[1];
    return "".concat(Math.round(bonus * 100) / 100, " \"bonus ").concat(toMaximizerName(item), "\"");
  }).sort())))).join(", ");
  // Items equipped in slots not touched by the maximizer must be in the cache key
  var untouchedSlots = cachedSlots.filter(slot => preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot));
  var cacheKey = [objective].concat(_toConsumableArray(untouchedSlots.map(slot => "".concat(slot, ":").concat(kolmafia.equippedItem(slot))).sort()), [have$g($effect(_templateObject48$b || (_templateObject48$b = _taggedTemplateLiteral(["Offhand Remarkable"])))), options.updateOnLocationChange && kolmafia.myLocation()]).join("; ");
  var cacheEntry = checkCache(cacheKey, fullOptions);
  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, false)) return true;
    logger.info("Equipment found in maximize cache, equipping...");
    applyCached(cacheEntry, fullOptions);
    if (verifyCached(cacheEntry)) {
      logger.info("Equipped cached ".concat(cacheKey));
      return true;
    }
    logger.warning("Maximize cache application failed, maximizing...");
  }
  var result = kolmafia.maximize(objective, false);
  saveCached(cacheKey, fullOptions);
  return result;
}
function mergeOptionalOptions(optionsA, optionsB) {
  for (var _len = arguments.length, keys = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    keys[_key - 2] = arguments[_key];
  }
  return keys.reduce((current, key) => _objectSpread2(_objectSpread2({}, current), (optionsA[key] || optionsB[key]) === undefined ? {} : {
    [key]: optionsA[key] || optionsB[key]
  }), {});
}
var _maximizeParameters = /*#__PURE__*/new WeakMap();
var _maximizeOptions = /*#__PURE__*/new WeakMap();
var Requirement = /*#__PURE__*/function () {
  /**
   * A convenient way of combining maximization parameters and options
   *
   * @param maximizeParameters Parameters you're attempting to maximize
   * @param maximizeOptions Object potentially containing forceEquips, bonusEquips, preventEquips, and preventSlots
   */
  function Requirement(maximizeParameters, maximizeOptions) {
    _classCallCheck(this, Requirement);
    _classPrivateFieldInitSpec(this, _maximizeParameters, void 0);
    _classPrivateFieldInitSpec(this, _maximizeOptions, void 0);
    _classPrivateFieldSet2(_maximizeParameters, this, maximizeParameters);
    _classPrivateFieldSet2(_maximizeOptions, this, maximizeOptions);
  }
  return _createClass(Requirement, [{
    key: "maximizeParameters",
    get: function get() {
      return _classPrivateFieldGet2(_maximizeParameters, this);
    }
  }, {
    key: "maximizeOptions",
    get: function get() {
      return _classPrivateFieldGet2(_maximizeOptions, this);
    }
    /**
     * Merges two requirements, concanating relevant arrays. Typically used in static form.
     *
     * @param other Requirement to merge with.
     * @returns A new merged Requirement
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var _optionsA$bonusEquip, _optionsB$bonusEquip;
      var optionsA = this.maximizeOptions;
      var optionsB = other.maximizeOptions;
      var optionalBooleans = mergeOptionalOptions(optionsA, optionsB, "updateOnFamiliarChange", "updateOnCanEquipChanged", "updateOnLocationChange", "forceUpdate");
      return new Requirement([].concat(_toConsumableArray(this.maximizeParameters), _toConsumableArray(other.maximizeParameters)), _objectSpread2(_objectSpread2({}, optionalBooleans), {}, {
        forceEquip: [].concat(_toConsumableArray(optionsA.forceEquip ?? []), _toConsumableArray(other.maximizeOptions.forceEquip ?? [])).filter(x => {
          var _other$maximizeOption;
          return !((_other$maximizeOption = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption !== void 0 && _other$maximizeOption.includes(x));
        }),
        preventEquip: [].concat(_toConsumableArray(optionsA.preventEquip ?? []), _toConsumableArray(other.maximizeOptions.preventEquip ?? [])).filter(x => {
          var _other$maximizeOption2;
          return !((_other$maximizeOption2 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        bonusEquip: new Map([].concat(_toConsumableArray(((_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) ?? []), _toConsumableArray(((_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) ?? []))),
        onlySlot: [].concat(_toConsumableArray(optionsA.onlySlot ?? []), _toConsumableArray(optionsB.onlySlot ?? [])),
        preventSlot: [].concat(_toConsumableArray(optionsA.preventSlot ?? []), _toConsumableArray(optionsB.preventSlot ?? []))
      }));
    }
    /**
     * Merges a set of requirements together, starting with an empty requirement.
     *
     * @param allRequirements Requirements to merge
     * @returns Merged requirements
     */
  }, {
    key: "maximize",
    value:
    /**
     * Runs maximizeCached, using the maximizeParameters and maximizeOptions contained by this requirement.
     *
     * @returns Whether the maximize call succeeded.
     */
    function maximize() {
      return maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
    /**
     * Merges requirements, and then runs maximizeCached on the combined requirement.
     *
     * @param requirements Requirements to maximize on
     */
  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce((x, y) => x.merge(y), new Requirement([], {}));
    }
  }, {
    key: "maximize",
    value: function maximize() {
      for (var _len2 = arguments.length, requirements = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        requirements[_key2] = arguments[_key2];
      }
      Requirement.merge(requirements).maximize();
    }
  }]);
}();

var _templateObject$D, _templateObject2$t, _templateObject3$v, _templateObject4$s, _templateObject5$r, _templateObject6$r, _templateObject7$r, _templateObject8$q, _templateObject9$q, _templateObject0$p, _templateObject1$p, _templateObject10$p, _templateObject11$o, _templateObject12$n, _templateObject13$m, _templateObject14$m, _templateObject15$m, _templateObject16$m, _templateObject17$l, _templateObject18$k, _templateObject19$j;
/**
 * @returns Whether the Asdon is our current active workshed
 */
function installed$2() {
  return kolmafia.getWorkshed() === $item(_templateObject$D || (_templateObject$D = _taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"])));
}
/**
 * @returns `true` if we `have` the Asdon or if it's installed
 */
function have$f() {
  return installed$2() || have$g($item(_templateObject2$t || (_templateObject2$t = _taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"]))));
}
var fuelSkiplist = $items(_templateObject3$v || (_templateObject3$v = _taggedTemplateLiteral(["cup of \"tea\", thermos of \"whiskey\", Lucky Lindy, Bee's Knees, Sockdollager, Ish Kabibble, Hot Socks, Phonus Balonus, Flivver, Sloppy Jalopy, glass of \"milk\""])));
function inventoryItems() {
  return kolmafia.Item.all().filter(isFuelItem).filter(item => have$g(item) && [100, kolmafia.autosellPrice(item)].includes(getAcquirePrice(item)));
}
function fuelEfficiency(_ref) {
  var item = _ref.item,
    price = _ref.price;
  return getAverageAdventures(item) / price;
}
var ILLEGAL_FUELS = new Set($items(_templateObject4$s || (_templateObject4$s = _taggedTemplateLiteral(["large tankard of ale"]))));
/**
 * @param it the item in question
 * @returns Can `it` be used as Asdon fuel?
 */
function isFuelItem(it) {
  return !kolmafia.isNpcItem(it) && !ILLEGAL_FUELS.has(it) && it.fullness + it.inebriety > 0 && getAverageAdventures(it) > 0 && it.tradeable && it.discardable && !fuelSkiplist.includes(it);
}
/**
 * @returns An array of all fuel items sorted by their efficiency
 */
function getBestFuels() {
  // Find all fuel items and sort them by fuel unit cost
  var candidates = kolmafia.Item.all().filter(isFuelItem).map(item => ({
    item,
    price: getAcquirePrice(item)
  }));
  candidates.sort((a, b) => fuelEfficiency(b) - fuelEfficiency(a));
  if (fuelEfficiency(candidates[0]) < 0.01) {
    throw new Error("Could not identify any fuel with efficiency better than 100 meat per fuel. " + "This means something went wrong.");
  }
  return candidates;
}
/**
 * Fuel your Asdon Martin with a given quantity of a given item
 *
 * @param it Item to fuel with.
 * @param quantity Number of items to fuel with.
 * @returns Whether we succeeded at fueling with the given items.
 */
function insertFuel(it) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var result = kolmafia.visitUrl("campground.php?action=fuelconvertor&pwd&qty=".concat(quantity, "&iid=").concat(it.id, "&go=Convert%21"));
  return result.includes("The display updates with a");
}
function tryInsert(item, count) {
  var amount = kolmafia.itemAmount(item);
  var insertionAmount = Math.min(amount, count);
  return amount > 0 && insertFuel(item, insertionAmount);
}
function insertOrBan(item, count) {
  if (!tryInsert(item, count)) {
    kolmafia.cliExecute("refresh inventory");
    if (!tryInsert(item, count)) {
      logger.debug("AsdonMartin: Failed to insert ".concat(count, " ").concat(item, ", even after refreshing inventory. Adding to ILLEGAL_FUELS."));
      ILLEGAL_FUELS.add(item);
      logger.debug("AsdonMartin: ILLEGAL_FUELS now contains ".concat(_toConsumableArray(ILLEGAL_FUELS).map(String).join(", ")));
      if (ILLEGAL_FUELS.size >= 23) throw new Error("We have marked at least 23 asdon fuel items as illegal this session, something has gone wrong.");
    }
  }
}
function fillWith(item, targetUnits, obtain) {
  while (kolmafia.getFuel() < targetUnits) {
    var _getRange = getRange(item.adventures),
      _getRange2 = _slicedToArray(_getRange, 2),
      maxFuelFromItem = _getRange2[1];
    var unitsNeeded = targetUnits - kolmafia.getFuel();
    var minimumFuel = Math.ceil(unitsNeeded / maxFuelFromItem);
    obtain(minimumFuel);
    var retrievalSuccess = kolmafia.itemAmount(item) >= minimumFuel;
    insertOrBan(item, minimumFuel);
    if (!retrievalSuccess) break;
  }
}
var obtainBread = amount => {
  var breadToMake = amount - kolmafia.itemAmount($item(_templateObject5$r || (_templateObject5$r = _taggedTemplateLiteral(["loaf of soda bread"]))));
  if (breadToMake <= 0) return;
  if (kolmafia.npcPrice($item(_templateObject6$r || (_templateObject6$r = _taggedTemplateLiteral(["wad of dough"])))) === 0 && kolmafia.npcPrice($item(_templateObject7$r || (_templateObject7$r = _taggedTemplateLiteral(["all-purpose flower"])))) > 0) {
    var maxTries = Math.ceil(breadToMake / 35); // minimum amount of wad of dough created from all-purpose flower is 35
    for (var i = 0; i < maxTries && kolmafia.availableAmount($item(_templateObject8$q || (_templateObject8$q = _taggedTemplateLiteral(["wad of dough"])))) < breadToMake; i++) {
      kolmafia.buy($item(_templateObject9$q || (_templateObject9$q = _taggedTemplateLiteral(["all-purpose flower"]))));
      kolmafia.use($item(_templateObject0$p || (_templateObject0$p = _taggedTemplateLiteral(["all-purpose flower"]))));
    }
  }
  try {
    kolmafia.retrieveItem(amount, $item(_templateObject1$p || (_templateObject1$p = _taggedTemplateLiteral(["loaf of soda bread"]))));
  } catch (e) {
    logger.debug("AsdonMartin: error retrieving soda bread: ".concat(e));
  }
};
/**
 * Fill your Asdon Martin to the given fuel level in the cheapest way possible
 *
 * @param targetUnits Fuel level to attempt to reach.
 * @returns Whether we succeeded at filling to the target fuel level.
 */
function fillTo(targetUnits) {
  if (!installed$2()) return false;
  // if in Hardcore/ronin, skip the price calculation and just use soda bread
  if (kolmafia.canInteract()) {
    var bestFuels = getBestFuels();
    var _loop = function _loop() {
      var _bestFuels$shift = bestFuels.shift(),
        currentFuel = _bestFuels$shift.item,
        currentPrice = _bestFuels$shift.price;
      logger.debug("AsdonMartin: Fuel: ".concat(currentFuel, ", price: ").concat(currentPrice));
      // Surely something has gone wrong if our fuels are this inefficient
      if (fuelEfficiency({
        item: currentFuel,
        price: currentPrice
      }) < 0.01) return 1; // break
      var _ref2 = bestFuels.at(0) ?? {
          item: null,
          price: null
        },
        nextFuel = _ref2.item,
        nextPrice = _ref2.price;
      var priceCeiling = 1 + (nextFuel ? Math.ceil(nextPrice * getAverageAdventures(currentFuel) / getAverageAdventures(nextFuel)) : currentPrice);
      logger.debug("AsdonMartin: price ceiling: ".concat(priceCeiling));
      fillWith(currentFuel, targetUnits, amount => withProperty("autoBuyPriceLimit", priceCeiling, () => kolmafia.retrieveItem(amount, currentFuel)));
    };
    while (bestFuels.length > 0 && kolmafia.getFuel() < targetUnits) {
      if (_loop()) break;
    }
  } else {
    fillWith($item(_templateObject10$p || (_templateObject10$p = _taggedTemplateLiteral(["loaf of soda bread"]))), targetUnits, obtainBread);
  }
  return kolmafia.getFuel() >= targetUnits;
}
/**
 * @param targetUnits The fuel level we aim to achieve
 * @returns Whether we successfully filled our Asdon's tank
 */
function fillWithBestInventoryItem(targetUnits) {
  var options = inventoryItems().sort((a, b) => getAverageAdventures(b) / kolmafia.autosellPrice(b) - getAverageAdventures(a) / kolmafia.autosellPrice(a));
  if (options.length === 0) return false;
  var best = options[0];
  if (kolmafia.autosellPrice(best) / getAverageAdventures(best) > 100) return false;
  var amountToUse = clamp(Math.ceil(targetUnits / getAverageAdventures(best)), 0, kolmafia.itemAmount(best));
  return insertFuel(best, amountToUse);
}
/**
 * Fill your Asdon Martin by prioritizing mallmin items in your inventory. Default to the behavior of fillTo.
 *
 * @param targetUnits Fuel level to attempt to reach.
 * @returns Whether we succeeded at filling to the target fuel level.
 */
function fillWithInventoryTo(targetUnits) {
  if (!installed$2()) return false;
  var continueFuelingFromInventory = true;
  while (kolmafia.getFuel() < targetUnits && continueFuelingFromInventory) {
    continueFuelingFromInventory && (continueFuelingFromInventory = fillWithBestInventoryItem(targetUnits));
  }
  return fillTo(targetUnits);
}
/**
 * Object consisting of the various Asdon driving styles
 */
var Driving = {
  Obnoxiously: $effect(_templateObject11$o || (_templateObject11$o = _taggedTemplateLiteral(["Driving Obnoxiously"]))),
  Stealthily: $effect(_templateObject12$n || (_templateObject12$n = _taggedTemplateLiteral(["Driving Stealthily"]))),
  Wastefully: $effect(_templateObject13$m || (_templateObject13$m = _taggedTemplateLiteral(["Driving Wastefully"]))),
  Safely: $effect(_templateObject14$m || (_templateObject14$m = _taggedTemplateLiteral(["Driving Safely"]))),
  Recklessly: $effect(_templateObject15$m || (_templateObject15$m = _taggedTemplateLiteral(["Driving Recklessly"]))),
  Intimidatingly: $effect(_templateObject16$m || (_templateObject16$m = _taggedTemplateLiteral(["Driving Intimidatingly"]))),
  Quickly: $effect(_templateObject17$l || (_templateObject17$l = _taggedTemplateLiteral(["Driving Quickly"]))),
  Observantly: $effect(_templateObject18$k || (_templateObject18$k = _taggedTemplateLiteral(["Driving Observantly"]))),
  Waterproofly: $effect(_templateObject19$j || (_templateObject19$j = _taggedTemplateLiteral(["Driving Waterproofly"])))
};
/**
 * Attempt to drive with a particular style for a particular number of turns.
 *
 * @param style The driving style to use.
 * @param turns The number of turns to attempt to get.
 * @param preferInventory Whether we should preferentially value items currently in our inventory.
 * @returns Whether we have at least as many turns as requested of said driving style.
 */
function drive(style) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var preferInventory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!Object.values(Driving).includes(style)) return false;
  if (!installed$2()) return false;
  if (kolmafia.haveEffect(style) >= turns) return true;
  var fuelNeeded = 37 * Math.ceil((turns - kolmafia.haveEffect(style)) / 30);
  (preferInventory ? fillWithInventoryTo : fillTo)(fuelNeeded);
  var casts = Math.min(Math.ceil((turns - kolmafia.haveEffect(style)) / 30), Math.ceil(kolmafia.getFuel() / 37));
  kolmafia.cliExecute("asdonmartin drive ".concat(style.name.replace("Driving ", ""), " ").concat(casts));
  return kolmafia.haveEffect(style) >= turns;
}

var _templateObject$C;
var familiar$3 = $familiar(_templateObject$C || (_templateObject$C = _taggedTemplateLiteral(["Pair of Stomping Boots"])));
/**
 * @returns whether the player has the Pair of Stomping Boots in their terrarium
 */
function have$e() {
  return have$g(familiar$3);
}
/**
 * @returns number of free runaways that have already been used today
 * @see Bandersnatch with which the Stomping Boots shares a counter
 */
function getRunaways() {
  return get$1("_banderRunaways");
}
/**
 * @param considerWeightAdjustment Include familiar weight modifiers
 * @returns total number of free runaways that the player can get from their Stomping Boots
 */
function getMaxRunaways() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return Math.floor(totalFamiliarWeight(familiar$3, considerWeightAdjustment) / 5);
}
/**
 * @param considerWeightAdjustment Whether to consider weight adjustment in free run calculation
 * @returns the number of remaining free runaways the player can get from their Stomping Boots
 */
function getRemainingRunaways() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return Math.max(0, getMaxRunaways(considerWeightAdjustment) - getRunaways());
}
/**
 * @param considerWeightAdjustment Include familiar weight modifiers
 * @returns whether the player could use their Stomping Boots to get a free run in theory
 */
function couldRunaway() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return have$e() && getRemainingRunaways(considerWeightAdjustment) > 0;
}

var Copier = /*#__PURE__*/_createClass(function Copier(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  _classCallCheck(this, Copier);
  _defineProperty(this, "couldCopy", void 0);
  _defineProperty(this, "prepare", void 0);
  _defineProperty(this, "canCopy", void 0);
  _defineProperty(this, "copiedMonster", void 0);
  _defineProperty(this, "fightCopy", null);
  this.couldCopy = couldCopy;
  this.prepare = prepare;
  this.canCopy = canCopy;
  this.copiedMonster = copiedMonster;
  if (fightCopy) this.fightCopy = fightCopy;
});

// THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseModifiers.ts for more information
var stringModifiers = ["Class", "Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Avatar", "Skill", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie", "Plumber Stat", "Recipe", "Evaluated Modifiers", "Last Available"];
new Set(stringModifiers);
var booleanModifiers = ["Softcore Only", "Single Equip", "Always Fumble", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Randomly", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Alters Page Text", "Attacks Can't Miss", "Pirate", "Blind", "Breakable", "Drops Items", "Drops Meat", "Volleyball or Sombrero", "Extra Pickpocket", "Negative Status Resist"];
new Set(booleanModifiers);
var numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water", "Spleen Drop", "Potion Drop", "Sauce Spell Damage", "Monster Level Percent", "Food Fairy", "Booze Fairy", "Candy Fairy", "Food Fairy Effectiveness", "Booze Fairy Effectiveness", "Candy Fairy Effectiveness", "Damage Aura", "Sporadic Damage Aura", "Thorns", "Sporadic Thorns", "Stomach Capacity", "Liver Capacity", "Spleen Capacity", "Free Rests", "Leaves", "Elf Warfare Effectiveness", "Pirate Warfare Effectiveness", "MPC Drop", "Piece of Twelve Drop", "Combat Item Damage Percent", "Avoid Attack", "Damage vs. Bugbears", "Damage vs. Werewolves", "Damage vs. Zombies", "Damage vs. Ghosts", "Damage vs. Vampires", "Damage vs. Skeletons", "Damage vs. Undead", "RAM", "Lantern", "Raw Combat Rate"];
var numericModifiersSet = new Set(numericModifiers);
var multiStringModifiers = ["Effect", "Rollover Effect", "Conditional Skill (Equipped)", "Conditional Skill (Inventory)", "Lantern Element"];
new Set(multiStringModifiers);

/**
 * Type guard that determines if a given string is a numeric modifier
 * @param modifier The modifier in question
 * @returns Whether the string in question is a valid numeric modifier
 */
function isNumericModifier(modifier) {
  return numericModifiersSet.has(modifier);
}

var _templateObject$B, _templateObject2$s, _templateObject3$u, _templateObject4$r, _templateObject5$q, _templateObject6$q, _templateObject7$q, _templateObject8$p, _templateObject9$p, _templateObject0$o, _templateObject1$o, _templateObject10$o, _templateObject11$n, _templateObject12$m, _templateObject13$l, _templateObject14$l, _templateObject15$l, _templateObject16$l, _templateObject17$k, _templateObject18$j, _templateObject19$i, _templateObject20$g, _templateObject21$g, _templateObject22$g, _templateObject23$g, _templateObject24$g, _templateObject25$g;
var item$5 = $item(_templateObject$B || (_templateObject$B = _taggedTemplateLiteral(["Source terminal"])));
/**
 * @returns Is the terminal currently installed & available in our campground?
 */
function have$d() {
  return haveInCampground(item$5);
}
/**
 * Buffs that can be acquired from Enhance
 *
 * - Items: +30% Item Drop
 * - Meat: +60% Meat Drop
 * - Init: +50% Initiative
 * - Critical: +10% chance of Critical Hit, +10% chance of Spell Critical Hit
 * - Damage: +5 Prismatic Damage
 * - Substats: +3 Stats Per Fight
 */
var Buffs = {
  Items: $effect(_templateObject2$s || (_templateObject2$s = _taggedTemplateLiteral(["items.enh"]))),
  Meat: $effect(_templateObject3$u || (_templateObject3$u = _taggedTemplateLiteral(["meat.enh"]))),
  Init: $effect(_templateObject4$r || (_templateObject4$r = _taggedTemplateLiteral(["init.enh"]))),
  Critical: $effect(_templateObject5$q || (_templateObject5$q = _taggedTemplateLiteral(["critical.enh"]))),
  Damage: $effect(_templateObject6$q || (_templateObject6$q = _taggedTemplateLiteral(["damage.enh"]))),
  Substats: $effect(_templateObject7$q || (_templateObject7$q = _taggedTemplateLiteral(["substats.enh"])))
};
/**
 * Acquire a buff from the Source Terminal
 *
 * @param buff The buff to acquire
 * @see Buffs
 * @returns Whether we successfully acquired the buff
 */
function enhance(buff) {
  if (!Object.values(Buffs).includes(buff)) {
    return false;
  }
  return kolmafia.cliExecute("terminal enhance ".concat(buff.name));
}
/**
 * Rollover buffs that can be acquired from Enquiry
 */
({
  /** +5 Familiar Weight */
  Familiar: $effect(_templateObject8$p || (_templateObject8$p = _taggedTemplateLiteral(["familiar.enq"]))),
  /** +25 ML */
  Monsters: $effect(_templateObject9$p || (_templateObject9$p = _taggedTemplateLiteral(["monsters.enq"]))),
  /** +5 Prismatic Resistance */
  Protect: $effect(_templateObject0$o || (_templateObject0$o = _taggedTemplateLiteral(["protect.enq"]))),
  /** +100% Muscle, +100% Mysticality, +100% Moxie */
  Stats: $effect(_templateObject1$o || (_templateObject1$o = _taggedTemplateLiteral(["stats.enq"])))
});
/**
 * Skills that can be acquired from Enhance
 */
var Skills = {
  /** Collect Source essence from enemies once per combat */
  Extract: $skill(_templateObject10$o || (_templateObject10$o = _taggedTemplateLiteral(["Extract"]))),
  /** Stagger and create a wandering monster 1-3 times per day */
  Digitize: $skill(_templateObject11$n || (_templateObject11$n = _taggedTemplateLiteral(["Digitize"]))),
  /** Stagger and deal 25% of enemy HP in damage once per combat */
  Compress: $skill(_templateObject12$m || (_templateObject12$m = _taggedTemplateLiteral(["Compress"]))),
  /** Double monster's HP, attack, defence, attacks per round and item drops once per fight and once per day (five in The Source) */
  Duplicate: $skill(_templateObject13$l || (_templateObject13$l = _taggedTemplateLiteral(["Duplicate"]))),
  /** Causes government agent/Source Agent wanderer next turn once per combat and three times per day */
  Portscan: $skill(_templateObject14$l || (_templateObject14$l = _taggedTemplateLiteral(["Portscan"]))),
  /** Increase Max MP by 100% and recover 1000 MP once per combat with a 30 turn cooldown */
  Turbo: $skill(_templateObject15$l || (_templateObject15$l = _taggedTemplateLiteral(["Turbo"])))
};
/**
 * Make a skill available.
 * The Source Terminal can give the player access to two skills at any time
 *
 * @param skills Skill or 2-tuple of Skills to learn
 * @see Skills
 * @returns Whether our current skills match the ones we asked for
 */
function educate(skills) {
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if (arrayEquals(skillsArray, getSkills())) return true;
  var _iterator = _createForOfIteratorHelper(skillsArray),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var skill = _step.value;
      if (!Object.values(Skills).includes(skill)) return false;
      kolmafia.cliExecute("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
}
/**
 * @returns The Skills currently available from Source Terminal
 */
function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(p => get$1(p)).filter(Boolean).map(s => kolmafia.Skill.get(s.slice(0, -4)));
}
/**
 * @param skills A Skill or 2-tuple of Skills to check if we currently have active
 * @returns Whether the input agrees with our current skills
 */
function isCurrentSkill(skills) {
  var currentSkills = getSkills();
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(skill => currentSkills.includes(skill));
}
/**
 * Items that can be generated by the Source Terminal
 */
new Map([[$item(_templateObject16$l || (_templateObject16$l = _taggedTemplateLiteral(["browser cookie"]))), "food.ext"], [$item(_templateObject17$k || (_templateObject17$k = _taggedTemplateLiteral(["hacked gibson"]))), "booze.ext"], [$item(_templateObject18$j || (_templateObject18$j = _taggedTemplateLiteral(["Source shades"]))), "goggles.ext"], [$item(_templateObject19$i || (_templateObject19$i = _taggedTemplateLiteral(["Source terminal GRAM chip"]))), "gram.ext"], [$item(_templateObject20$g || (_templateObject20$g = _taggedTemplateLiteral(["Source terminal PRAM chip"]))), "pram.ext"], [$item(_templateObject21$g || (_templateObject21$g = _taggedTemplateLiteral(["Source terminal SPAM chip"]))), "spam.ext"], [$item(_templateObject22$g || (_templateObject22$g = _taggedTemplateLiteral(["Source terminal CRAM chip"]))), "cram.ext"], [$item(_templateObject23$g || (_templateObject23$g = _taggedTemplateLiteral(["Source terminal DRAM chip"]))), "dram.ext"], [$item(_templateObject24$g || (_templateObject24$g = _taggedTemplateLiteral(["Source terminal TRAM chip"]))), "tram.ext"], [$item(_templateObject25$g || (_templateObject25$g = _taggedTemplateLiteral(["software bug"]))), "familiar.ext"]]);
/**
 * @returns chips currently installed to player's Source Terminal
 */
function getChips() {
  return get$1("sourceTerminalChips").split(",");
}
/**
 * @returns number of times digitize was cast today
 */
function getDigitizeUses() {
  return get$1("_sourceTerminalDigitizeUses");
}
/**
 * @returns Monster that is currently digitized, else `null`
 */
function getDigitizeMonster() {
  return get$1("_sourceTerminalDigitizeMonster");
}
/**
 * @returns maximum number of digitizes player can cast
 */
function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}
/**
 * @returns whether the player could theoretically cast Digitize
 */
function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}
/**
 * Sets Digitize to be one of our skills if it currently isn't
 *
 * @returns Whether we expect that Digitize is one of our active skills now
 */
function prepareDigitize() {
  if (!isCurrentSkill(Skills.Digitize)) {
    return educate(Skills.Digitize);
  }
  return true;
}
/**
 * Determines whether the player can cast Digitize immediately
 * This only considers whether the player has learned the skill
 * and has sufficient daily casts remaining, not whether they have sufficient MP
 *
 * @returns Whether the player can currently cast digitize, ignoring the MP cost but accounting for other factors
 */
function canDigitize() {
  return couldDigitize() && getSkills().includes(Skills.Digitize);
}
new Copier(() => couldDigitize(), () => prepareDigitize(), () => canDigitize(), () => getDigitizeMonster());
/**
 * @returns number of times duplicate was cast today
 */
function getDuplicateUses() {
  return get$1("_sourceTerminalDuplicateUses");
}
/**
 * @returns number of times enhance was cast today
 */
function getEnhanceUses() {
  return get$1("_sourceTerminalEnhanceUses");
}
/**
 * @returns maximum number of times duplicate can be used
 */
function maximumDuplicateUses() {
  return kolmafia.myPath() === kolmafia.Path.get("The Source") ? 5 : 1;
}
/**
 * @returns number of remaining times duplicate can be used today
 */
function duplicateUsesRemaining() {
  return maximumDuplicateUses() - getDuplicateUses();
}
/**
 * @returns number of times enhance can be used per day
 */
function maximumEnhanceUses() {
  return 1 + getChips().filter(chip => ["CRAM", "SCRAM"].includes(chip)).length;
}
/**
 * @returns number of remaining times enahce can be used today
 */
function enhanceUsesRemaining() {
  return maximumEnhanceUses() - getEnhanceUses();
}

var MUMMERY_MODS_PATTERN = /\[(\d*)\*fam\(([^)]*)\)/;
/**
 * Parses the _mummeryMods preference into a Map for easier use.
 *
 * @returns A map, mapping Familiars to a Tuple consisting of the NumericModifier attached to the familiar, and the value thereof.
 */
function currentCostumes() {
  return new Map(Object.entries(kolmafia.splitModifiers(get$1("_mummeryMods"))).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 2),
      modifier = _ref2[0],
      value = _ref2[1];
    if (!isNumericModifier(modifier)) return null;
    var matcher = value.match(MUMMERY_MODS_PATTERN);
    if (!matcher) return null;
    return [kolmafia.Familiar.get(matcher[2]), [modifier, Number(matcher[1])]];
  }).filter(notNull));
}

/**
 * Returns Infinity for counters that do not exist, and otherwise returns the duration of the counter
 *
 * @param counter The name of the counter in question
 * @returns Infinity if the counter does not exist; otherwise returns the duration of the counter
 */
function get(counter) {
  var value = kolmafia.getCounter(counter);
  // getCounter returns -1 for counters that don't exist, but it also returns -1 for counters whose value is -1
  if (value === -1) {
    // if we have a counter with value -1, we check to see if that counter exists via getCounters()
    // We return null if it doesn't exist
    return kolmafia.getCounters(counter, -1, -1).trim() === "" ? Infinity : -1;
  }
  return value;
}

var _templateObject$A;
var item$4 = $item(_templateObject$A || (_templateObject$A = _taggedTemplateLiteral(["SongBoom\u2122 BoomBox"])));
/**
 * @returns Whether we `have` the SongBoom™ BoomBox
 */
function have$c() {
  return have$g(item$4);
}
var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
};
var songBoomSongs = new Set(Object.keys(keywords));
/**
 * @returns The `SongBoomSong` you currently have active; `null` if none is active at this time
 */
function song() {
  var stored = get$1("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
/**
 * @returns Song changes left today.
 */
function songChangesLeft() {
  return get$1("_boomBoxSongsLeft");
}
/**
 * Change the song. Throws an error if unable.
 *
 * @param newSong Song to change to.
 * @returns Whether we successfully changed the song; `false` thus means that this was already our current song.
 */
function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0) throw new Error("Out of song changes!");
    kolmafia.cliExecute("boombox ".concat(keywords[newSong] ));
    return true;
  } else {
    return false;
  }
}

var _templateObject$z, _templateObject2$r, _templateObject3$t;
var familiar$2 = $familiar(_templateObject$z || (_templateObject$z = _taggedTemplateLiteral(["Pocket Professor"])));
/**
 * @returns Whether you `have` the Pocket Professor
 */
function have$b() {
  return have$g(familiar$2);
}
/**
 * Calculate the total number of lectures available to you given a particular familiar weight and chip-equipped status
 * @param weight The weight to calculate at--defaults to your current total familiar weight
 * @param includeChip Whether or not to include the memory chip--defaults to whether or not it's currently equipped
 * @returns The total number of lectures you're able to deliver, including ones you've already delivered today
 */
function totalAvailableLectures() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : totalFamiliarWeight(familiar$2);
  var includeChip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kolmafia.haveEquipped($item(_templateObject2$r || (_templateObject2$r = _taggedTemplateLiteral(["Pocket Professor memory chip"]))));
  return (includeChip ? 2 : 0) + Math.floor(Math.sqrt(weight - 1));
}
/**
 * @returns The number of Pocket Professor lectures you've delivered today
 */
function lecturesDelivered() {
  return get$1("_pocketProfessorLectures");
}
/**
 * Calculate the number of unused lectures available to you given a particular familiar weight and chip-equipped status
 * @param weight The weight to calculate at--defaults to your current total familiar weight
 * @param includeChip Whether or not to include the memory chip--defaults to whether or not it's currently equipped
 * @returns The number of lectures you're able to deliver, accounting for any you've already delivered today
 */
function currentlyAvailableLectures() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : totalFamiliarWeight(familiar$2);
  var includeChip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kolmafia.haveEquipped($item(_templateObject3$t || (_templateObject3$t = _taggedTemplateLiteral(["Pocket Professor memory chip"]))));
  return totalAvailableLectures(weight, includeChip) - lecturesDelivered();
}

var familiar$1 = kolmafia.Familiar.get("Red-Nosed Snapper");
/**
 * Map of phylum to item that phylum drops.
 */
var phylumItem = new Map([[kolmafia.Phylum.get("beast"), kolmafia.Item.get("patch of extra-warm fur")], [kolmafia.Phylum.get("bug"), kolmafia.Item.get("a bug's lymph")], [kolmafia.Phylum.get("constellation"), kolmafia.Item.get("micronova")], [kolmafia.Phylum.get("construct"), kolmafia.Item.get("industrial lubricant")], [kolmafia.Phylum.get("demon"), kolmafia.Item.get("infernal snowball")], [kolmafia.Phylum.get("dude"), kolmafia.Item.get("human musk")], [kolmafia.Phylum.get("elemental"), kolmafia.Item.get("livid energy")], [kolmafia.Phylum.get("elf"), kolmafia.Item.get("peppermint syrup")], [kolmafia.Phylum.get("fish"), kolmafia.Item.get("fish sauce")], [kolmafia.Phylum.get("goblin"), kolmafia.Item.get("guffin")], [kolmafia.Phylum.get("hippy"), kolmafia.Item.get("organic potpourri")], [kolmafia.Phylum.get("hobo"), kolmafia.Item.get("beggin' cologne")], [kolmafia.Phylum.get("horror"), kolmafia.Item.get("powdered madness")], [kolmafia.Phylum.get("humanoid"), kolmafia.Item.get("vial of humanoid growth hormone")], [kolmafia.Phylum.get("mer-kin"), kolmafia.Item.get("Mer-kin eyedrops")], [kolmafia.Phylum.get("orc"), kolmafia.Item.get("boot flask")], [kolmafia.Phylum.get("penguin"), kolmafia.Item.get("envelope full of Meat")], [kolmafia.Phylum.get("pirate"), kolmafia.Item.get("Shantix™")], [kolmafia.Phylum.get("plant"), kolmafia.Item.get("goodberry")], [kolmafia.Phylum.get("slime"), kolmafia.Item.get("extra-strength goo")], [kolmafia.Phylum.get("undead"), kolmafia.Item.get("unfinished pleasure")], [kolmafia.Phylum.get("weird"), kolmafia.Item.get("non-Euclidean angle")]]);
/**
 * Map of drop item to phylum it drops from.
 */
new Map(_toConsumableArray(phylumItem).map(_ref => {
  var _ref2 = _slicedToArray(_ref, 2),
    phylum = _ref2[0],
    item = _ref2[1];
  return [item, phylum];
}));
/**
 * Set snapper tracking to a certain phylum.
 *
 * @param phylum Phylum to track.
 */
function trackPhylum(phylum) {
  var currentFamiliar = kolmafia.myFamiliar();
  try {
    kolmafia.useFamiliar(familiar$1);
    kolmafia.cliExecute("snapper ".concat(phylum));
  } finally {
    kolmafia.useFamiliar(currentFamiliar);
  }
}

var _templateObject$y, _templateObject3$s;
var passive = $skill(_templateObject$y || (_templateObject$y = _taggedTemplateLiteral(["Comprehensive Cartography"])));
/**
 * Determines whether you `have` the skill Comprehensive Cartography
 *
 * @returns Whether you currently `have` the skill
 */
function have$a() {
  return have$g(passive);
}
/**
 * @returns The number of monsters you can map today
 */
function availableMaps() {
  return have$a() ? $skill(_templateObject3$s || (_templateObject3$s = _taggedTemplateLiteral(["Map the Monsters"]))).dailylimit : 0;
}
/**
 * @returns Whether or not `Map the Monsters` is currently active
 */
function currentlyMapping() {
  return get$1("mappingMonsters");
}

var orb = kolmafia.Item.get("miniature crystal ball");
/**
 * Determines whether you `have` the Miniature Crystal Ball
 *
 * @returns Whether you `have` the Miniature Crystal Ball
 */
function have$9() {
  return kolmafia.availableAmount(orb) > 0;
}
/**
 * @returns A map keyed by locations and whose values are monsters, representing all active orb predictions
 */
function getPrediction() {
  return new Map(multiSplit("crystalBallPredictions", "|", ":", [Number, kolmafia.toLocation, kolmafia.toMonster]).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 3),
      location = _ref2[1],
      monster = _ref2[2];
    return [location, monster];
  }));
}

var _templateObject$x, _templateObject2$q, _templateObject3$r, _templateObject4$q, _templateObject5$p, _templateObject6$p, _templateObject7$p, _templateObject8$o, _templateObject9$o;
var item$3 = kolmafia.Item.get("autumn-aton");
/**
 * Is the autumn-aton currently in your inventory, available to deploy?
 *
 * @returns The whether the autumn-aton is currently available for deployment
 */
function available$1() {
  return kolmafia.availableAmount(item$3) > 0;
}
/**
 * Internal function used to parse the fallbot's choice adventure to determine which zones are currently available
 *
 * @param html The pagetext of the fallbot's choice adventure
 * @returns The locations currently available to send the fallbot to
 */
function checkLocations(html) {
  return kolmafia.xpath(html, '//select[@name="heythereprogrammer"]//option[position()>1]/@value').map(id => kolmafia.toLocation(Number(id)));
}
function validateLocation(list, location) {
  return list.some(loc => loc.id === location.id);
}
/**
 * Deploy the autumn-aton to a location of your choosing.
 *
 * @param target A location to send the autumn-aton to, or a prioritized list of locations to send it to, or a function to pick which location to send it to.
 * @param upgrade Should we apply any upgrades we see available?
 * @returns Where we ended up sending the autumn-aton; null if we didn't send it off.
 */
function sendTo(target) {
  var upgrade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!available$1()) return null;
  var pageHtml = directlyUse(item$3);
  if (upgrade && kolmafia.availableChoiceOptions()[1]) kolmafia.runChoice(1);
  var locationsAvailable = checkLocations(pageHtml);
  var location = target instanceof kolmafia.Location ? target : Array.isArray(target) ? target.find(l => validateLocation(locationsAvailable, l)) : target(locationsAvailable);
  if (!location) return null;
  if (!validateLocation(locationsAvailable, location)) return null;
  if (!kolmafia.handlingChoice()) directlyUse(item$3);
  kolmafia.runChoice(2, "heythereprogrammer=".concat(location.id));
  if (kolmafia.handlingChoice()) kolmafia.visitUrl("main.php");
  return location;
}
/**
 * @returns An array containing the upgrades that you currently have on your autumn-aton.
 */
function currentUpgrades() {
  return get$1("autumnatonUpgrades").split(",");
}
({
  outdoor: {
    low: {
      item: $item(_templateObject$x || (_templateObject$x = _taggedTemplateLiteral(["autumn leaf"])))
    },
    mid: {
      item: $item(_templateObject2$q || (_templateObject2$q = _taggedTemplateLiteral(["autumn debris shield"])))
    },
    high: {
      item: $item(_templateObject3$r || (_templateObject3$r = _taggedTemplateLiteral(["autumn leaf pendant"])))
    }
  },
  indoor: {
    low: {
      item: $item(_templateObject4$q || (_templateObject4$q = _taggedTemplateLiteral(["AutumnFest ale"])))
    },
    mid: {
      item: $item(_templateObject5$p || (_templateObject5$p = _taggedTemplateLiteral(["autumn-spice donut"])))
    },
    high: {
      item: $item(_templateObject6$p || (_templateObject6$p = _taggedTemplateLiteral(["autumn breeze"])))
    }
  },
  underground: {
    low: {
      item: $item(_templateObject7$p || (_templateObject7$p = _taggedTemplateLiteral(["autumn sweater-weather sweater"])))
    },
    mid: {
      item: $item(_templateObject8$o || (_templateObject8$o = _taggedTemplateLiteral(["autumn dollar"])))
    },
    high: {
      item: $item(_templateObject9$o || (_templateObject9$o = _taggedTemplateLiteral(["autumn years wisdom"])))
    }
  }
});

var _templateObject$w;
var locket = $item(_templateObject$w || (_templateObject$w = _taggedTemplateLiteral(["combat lover's locket"])));
/**
 * @returns Whether you `have` the Combat Lover's Locket
 */
function have$8() {
  return have$g(locket);
}
function parseLocketProperty() {
  return get$1("_locketMonstersFought").split(",").filter(id => id.trim().length > 0);
}
/**
 * Determines how many reminisces remain by parsing the _locketMonstersFought property.
 *
 * @returns The number of reminisces a player has available; 0 if they lack the Locket.
 */
function reminiscesLeft() {
  return have$8() ? clamp(3 - parseLocketProperty().length, 0, 3) : 0;
}
/**
 * Determines which monsters were reminisced today by parsing the _locketMonstersFought property.
 *
 * @returns An array consisting of the Monsters reminisced today.
 */
function monstersReminisced() {
  return parseLocketProperty().map(id => kolmafia.toMonster(id));
}
/**
 * Fight a Monster using the Combat Lover's Locket
 *
 * @param monster The Monster to fight
 * @param combatParams Any parameters you'd like to pass to `runCombat`
 * @returns false if we are unable to reminisce about this monster. Else, returns whether, at the end of all things, we have reminisced about this monster.
 */
function reminisce(monster) {
  if (!have$8() || reminiscesLeft() === 0 || !kolmafia.getLocketMonsters()[monster.name]) {
    return false;
  }
  kolmafia.cliExecute("reminisce ".concat(monster));
  for (var _len = arguments.length, combatParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    combatParams[_key - 1] = arguments[_key];
  }
  kolmafia.runCombat.apply(void 0, combatParams);
  return monstersReminisced().includes(monster);
}
/**
 * Determine if a monster is currently reminiscible/reminiscable.
 * @param monster The monster in question
 * @returns Whether we can currently reminisce that monster
 */
function canReminisce(monster) {
  return have$8() && reminiscesLeft() > 0 && Boolean(kolmafia.getLocketMonsters()["".concat(monster)]);
}

var _templateObject$v;
var item$2 = $item(_templateObject$v || (_templateObject$v = _taggedTemplateLiteral(["model train set"])));
/**
 * Determines whether the Model Train Set is your current workshed
 *
 * @returns Whether the Model Train Set is your current workshed
 */
function installed$1() {
  return kolmafia.getWorkshed() === item$2;
}
var Station;
(function (Station) {
  /**
   * Unknown station
   */
  Station["UNKNOWN"] = "";
  /**
   * Empty station
   */
  Station["EMPTY"] = "empty";
  /**
   * Gain 800 meat
   */
  Station["GAIN_MEAT"] = "meat_mine";
  /**
   * Effect: Regenerate MP
   */
  Station["TOWER_FIZZY"] = "tower_fizzy";
  /**
   * Gain mus, mys, mox stats
   */
  Station["VIEWING_PLATFORM"] = "viewing_platform";
  /**
   * Effect: Hot resist, cold damage
   */
  Station["TOWER_FROZEN"] = "tower_frozen";
  /**
   * Effect: Stench resist, spooky damage
   */
  Station["SPOOKY_GRAVEYARD"] = "spooky_graveyard";
  /**
   * Get smut bridge part, or stats
   */
  Station["LOGGING_MILL"] = "logging_mill";
  /**
   * Get some candy
   */
  Station["CANDY_FACTORY"] = "candy_factory";
  /**
   * Double strength of next station
   */
  Station["COAL_HOPPER"] = "coal_hopper";
  /**
   * Effect: Cold resist, stench damage
   */
  Station["TOWER_SEWAGE"] = "tower_sewage";
  /**
   * Effect: Spooky resist, sleaze damage
   */
  Station["OIL_REFINERY"] = "oil_refinery";
  /**
   * Effect: Sleaze resist, hot damage
   */
  Station["OIL_BRIDGE"] = "oil_bridge";
  /**
   * Effect: Increased Monster Level
   */
  Station["WATER_BRIDGE"] = "water_bridge";
  /**
   * Get moxie stats
   */
  Station["GROIN_SILO"] = "groin_silo";
  /**
   * Get random booze
   */
  Station["GRAIN_SILO"] = "grain_silo";
  /**
   * Get mys stats
   */
  Station["BRAIN_SILO"] = "brain_silo";
  /**
   * Get muscle stats
   */
  Station["BRAWN_SILO"] = "brawn_silo";
  /**
   * Effect: 50% food drop
   */
  Station["PRAWN_SILO"] = "prawn_silo";
  /**
   * Dupe last food dropped, or gain random food
   */
  Station["TRACKSIDE_DINER"] = "trackside_diner";
  /**
   * Drop random ore, or trapper ore if known
   */
  Station["ORE_HOPPER"] = "ore_hopper";
})(Station || (Station = {}));
new Map([[Station.TOWER_FIZZY, kolmafia.Effect.get("Carbonated")], [Station.TOWER_FROZEN, kolmafia.Effect.get("Frozen")], [Station.SPOOKY_GRAVEYARD, kolmafia.Effect.get("Shivering Spine")], [Station.TOWER_SEWAGE, kolmafia.Effect.get("Hot Soupy Garbage")], [Station.OIL_BRIDGE, kolmafia.Effect.get("Burningly Oiled")], [Station.OIL_REFINERY, kolmafia.Effect.get("Spookily Greasy")], [Station.WATER_BRIDGE, kolmafia.Effect.get("Troubled Waters")], [Station.PRAWN_SILO, kolmafia.Effect.get("Craving Prawns")]]);
new Map([[Station.TOWER_FIZZY, kolmafia.Effect.get("Double Carbonated")], [Station.TOWER_FROZEN, kolmafia.Effect.get("Double Frozen")], [Station.SPOOKY_GRAVEYARD, kolmafia.Effect.get("Doubly Shivering Spine")], [Station.TOWER_SEWAGE, kolmafia.Effect.get("Double Hot Soupy Garbage")], [Station.OIL_BRIDGE, kolmafia.Effect.get("Doubly Burningly Oiled")], [Station.OIL_REFINERY, kolmafia.Effect.get("Doubly Spookily Greasy")], [Station.WATER_BRIDGE, kolmafia.Effect.get("Doubly Troubled Waters")], [Station.PRAWN_SILO, kolmafia.Effect.get("Doubly Craving Prawns")]]);
/**
 * Determines the current configuration of train stations
 *
 * @returns An 8-tuple consisting of the stations currently installed in your Model Train Set; this functions even if the Model Train Set isn't your active workshed
 */
function cycle() {
  return get$1("trainsetConfiguration").split(",");
}
/**
 * Determines how many turns until you can next configure the Model Train Set
 *
 * @returns How many turns until you can next configure the Model Train Set
 */
function nextConfigurable() {
  return clamp(get$1("lastTrainsetConfiguration") + 40 - get$1("trainsetPosition"), 0, 40);
}
/**
 * Determines whether you can currently configure your Model Train Set
 *
 * @returns Whether you can currently configure your Model Train Set
 */
function canConfigure() {
  return installed$1() && !nextConfigurable();
}
var pieces = [Station.EMPTY, Station.GAIN_MEAT, Station.TOWER_FIZZY, Station.VIEWING_PLATFORM, Station.TOWER_FROZEN, Station.SPOOKY_GRAVEYARD, Station.LOGGING_MILL, Station.CANDY_FACTORY, Station.COAL_HOPPER, Station.TOWER_SEWAGE, Station.UNKNOWN, Station.OIL_REFINERY, Station.OIL_BRIDGE, Station.WATER_BRIDGE, Station.GROIN_SILO, Station.GRAIN_SILO, Station.BRAIN_SILO, Station.BRAWN_SILO, Station.PRAWN_SILO, Station.TRACKSIDE_DINER, Station.ORE_HOPPER];
/**
 * Converts a given station to the integer value KoL associates with them
 *
 * @param station The station in question
 * @returns The integer value KoL assigns the train station in question
 */
function stationToInt(station) {
  return pieces.indexOf(station);
}
/**
 * Sets your model train station to the given configuration, if able
 *
 * @param configuration The cycle to try to set your model train station to
 * @returns Whether your model train station matches the given configuration
 */
function setConfiguration(configuration) {
  if (!canConfigure()) return false;
  kolmafia.visitUrl("campground.php?action=workshed");
  kolmafia.runChoice(1, "forceoption=0".concat(configuration.map((station, index) => "&slot[".concat(index, "]=").concat(stationToInt(station))).join("")));
  kolmafia.visitUrl("main.php");
  var currentConfiguration = cycle();
  return configuration.every((station, index) => station === currentConfiguration[index]);
}

var _templateObject$u, _templateObject2$p, _templateObject3$q, _templateObject4$p, _templateObject5$o, _templateObject6$o, _templateObject7$o;
var cincho = $item(_templateObject$u || (_templateObject$u = _taggedTemplateLiteral(["Cincho de Mayo"])));
/**
 * @returns Whether you `have` the Cincho de Mayo
 */
function have$7() {
  return have$g(cincho);
}
/**
 * @returns Your current cinch
 */
function currentCinch() {
  return have$7() ? clamp(100 - get$1("_cinchUsed"), 0, 100) : 0;
}
/**
 * @param currentRests The rest number to evaluate
 * @returns The amount of cinch restored by the given rest
 */
function cinchRestoredBy() {
  var currentRests = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : get$1("_cinchoRests");
  return have$7() ? clamp(50 - currentRests * 5, 5, 30) : 0;
}
/**
 * @returns Your current cinch, plus the total amount if cinch that can be generated through free rests
 */
function totalAvailableCinch() {
  var remainingRests = Math.max(0, kolmafia.totalFreeRests() - get$1("timesRested"));
  return have$7() ? currentCinch() + sum(new Array(remainingRests).fill(null).map((_, i) => i + get$1("_cinchoRests")), restNumber => cinchRestoredBy(restNumber)) : 0;
}
({
  SaltAndLime: $skill(_templateObject2$p || (_templateObject2$p = _taggedTemplateLiteral(["Cincho: Dispense Salt and Lime"]))),
  PartySoundtrack: $skill(_templateObject3$q || (_templateObject3$q = _taggedTemplateLiteral(["Cincho: Party Soundtrack"]))),
  FiestaExit: $skill(_templateObject4$p || (_templateObject4$p = _taggedTemplateLiteral(["Cincho: Fiesta Exit"]))),
  ProjectilePiñata: $skill(_templateObject5$o || (_templateObject5$o = _taggedTemplateLiteral(["Cincho: Projectile Pi\xF1ata"]))),
  PartyFoul: $skill(_templateObject6$o || (_templateObject6$o = _taggedTemplateLiteral(["Cincho: Party Foul"]))),
  ConfettiExtrava: $skill(_templateObject7$o || (_templateObject7$o = _taggedTemplateLiteral(["Cincho: Confetti Extravaganza"])))
});

var _templateObject$t;
var item$1 = $item(_templateObject$t || (_templateObject$t = _taggedTemplateLiteral(["cursed monkey's paw"])));
/**
 * @returns Whether or not we currently `have` the cursed monkey's paw
 */
function have$6() {
  return have$g(item$1);
}
/**
 * @returns The number of monkey paw wishes we have remaining
 */
function wishes() {
  return clamp(5 - get$1("_monkeyPawWishesUsed"), 0, 5);
}
/**
 * Wish for a given Item or Effect.
 * If it's an item, will `prepareForAdventure`; if an item is available in multiple locations this will pick the first one.
 *
 * @param wish The Item or Effect to wish for
 * @returns Whether we succeeded in this endeavor
 */
function wishFor(wish) {
  if (wishes() <= 0) return false;
  if (wish instanceof kolmafia.Effect) return kolmafia.monkeyPaw(wish);
  var locations = kolmafia.Location.all().filter(l => kolmafia.canAdventure(l) && kolmafia.getMonsters(l).some(m => m.copyable && kolmafia.itemDropsArray(m).some(_ref6 => {
    var drop = _ref6.drop;
    return drop === wish;
  })));
  try {
    if (locations.length) {
      kolmafia.cliExecute("checkpoint");
      kolmafia.prepareForAdventure(locations[0]);
    }
    var result = kolmafia.monkeyPaw(wish);
    if (!result) {
      logger.debug("Failed to monkeyPaw wish for ".concat(wish, "; assumed it was available in locations ").concat(locations.join(", ")));
    }
    return result;
  } finally {
    if (locations.length) kolmafia.cliExecute("outfit checkpoint");
  }
}

var _templateObject$s;
var helmet = $item(_templateObject$s || (_templateObject$s = _taggedTemplateLiteral(["Apriling band helmet"])));
/**
 * @returns whether you `have` the Apriling band helmet
 */
function have$5() {
  return have$g(helmet);
}
var MARCHING_SONGS = Object.freeze(["Apriling Band Patrol Beat", "Apriling Band Battle Cadence", "Apriling Band Celebration Bop"]);
var MARCHING_SONG_EFFECTS = Object.freeze(MARCHING_SONGS.map(song => kolmafia.toEffect(song)));
var INSTRUMENTS = Object.freeze(["Apriling band saxophone", "Apriling band quad tom", "Apriling band tuba", "Apriling band staff", "Apriling band piccolo"]);
Object.freeze(INSTRUMENTS.map(instrument => kolmafia.toItem(instrument)));
var visitConduct = () => kolmafia.visitUrl("inventory.php?pwd&action=apriling");
/**
 * @returns Whether we can currently join a new section of our Apriling band
 */
function canJoinSection() {
  return have$5() && get$1("_aprilBandInstruments") < 2;
}
function makeConductFunction(mafiaClass, canDo, set, offset) {
  return input => {
    if (!canDo()) return false;
    var _ref = typeof input === "string" ? [input, mafiaClass.get(input)] : [input.name, input],
      _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      instance = _ref2[1];
    if (have$g(instance)) return true;
    var key = set.indexOf(name);
    if (key === -1) return false;
    visitConduct();
    kolmafia.runChoice(key + offset);
    kolmafia.runChoice(9);
    return have$g(instance);
  };
}
/**
 * Joins the given section of your Apriling band, returning whether you successfully obtained its instrument
 *
 * @param section The section of your band to join--either the instrument's name as a string, or the item itself.
 *
 * @returns Whether we have the item, at the end of all things
 */
var joinSection = makeConductFunction(kolmafia.Item, canJoinSection, INSTRUMENTS, 4);
/**
 * @returns Whether we can currently change the marching song of our Apriling Band
 */
function canChangeSong() {
  return have$5() && get$1("nextAprilBandTurn") <= kolmafia.totalTurnsPlayed();
}
/**
 * Instructs your Apriling band to play the given song, returning whether it's successfully playing
 *
 * @param song The song for your band to play--either the effect's name or the effect itself.
 *
 * @returns Whether we have the effect, at the end of all things
 */
var changeSong = makeConductFunction(kolmafia.Effect, canChangeSong, MARCHING_SONGS, 1);
/**
 * Plays a given Apriling band instrument
 *
 * @param instrument The instrument to play
 * @param acquire Whether or not we should obtain the instrument if we don't currently have it
 * @returns Whether we successfully played our instrument
 */
function play(instrument) {
  var acquire = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var item = instrument instanceof kolmafia.Item ? instrument : kolmafia.Item.get(instrument);
  if (!canPlay(instrument, acquire)) return false;
  if (acquire && !have$g(item)) joinSection(item);
  var currentUsesRemaining = item.dailyusesleft;
  kolmafia.visitUrl("inventory.php?pwd=".concat(kolmafia.myHash(), "&iid=").concat(item.id, "&action=aprilplay"), false);
  return item.dailyusesleft !== currentUsesRemaining;
}
/**
 * Determine whether you can play an instrument
 * @param instrument The instrument you want to play
 * @param acquire Whether you're willing to obtain an instrument you don't already have
 * @returns Whether you can play that instrument
 */
function canPlay(instrument) {
  var acquire = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!have$5()) return false;
  var item = instrument instanceof kolmafia.Item ? instrument : kolmafia.Item.get(instrument);
  if (!have$g(item) && (!acquire || !canJoinSection())) return false;
  if (item.dailyusesleft <= 0) return false;
  return true;
}

var _templateObject$r, _templateObject3$p, _templateObject4$o;
var familiar = $familiar(_templateObject$r || (_templateObject$r = _taggedTemplateLiteral(["Chest Mimic"])));
var withBank = action => {
  var initial = kolmafia.myFamiliar();
  kolmafia.useFamiliar(familiar);
  try {
    var page = kolmafia.visitUrl("place.php?whichplace=town_right&action=townright_dna", false);
    return action(page);
  } finally {
    kolmafia.visitUrl("main.php");
    kolmafia.useFamiliar(initial);
  }
};
var canReceive = () => familiar.experience >= 100 && get$1("_mimicEggsObtained") < 11;
var makeXpath = (selectNumber, disabled) => "(//select[@name=\"mid\"])[".concat(selectNumber, "]/option").concat(disabled ? "[@disabled]" : "", "/@value");
function getMonsters(selectNumber, page) {
  var total = kolmafia.xpath(page, makeXpath(selectNumber, false));
  var disabled = new Set(kolmafia.xpath(page, makeXpath(selectNumber, true)));
  return total.filter(m => m != "" && !disabled.has(m)).map(id => kolmafia.toMonster(id));
}
/**
 * Receive an egg from the DNA bank
 *
 * @param monster The monster whose egg you want to receive
 * @returns Whether we succeeded in our endeavor
 */
function receive(monster) {
  if (!canReceive()) return false;
  return withBank(page => {
    var available = getMonsters(1, page);
    if (!available.includes(monster)) return false;
    return kolmafia.runChoice(2, "mid=".concat(monster.id)).includes("Your mimic pops into a backroom and returns a few moments later with a fresh mimic egg!");
  });
}
/**
 * Differentiate a Mimic egg into a monster, and fight it!
 *
 * @param monster The monster to differentiate your egg into
 * @param combatParams Any parameters you'd like to pass to `runCombat`
 * @returns Whether we successfully differentiated our egg
 */
function differentiate(monster) {
  var page = directlyUse($item(_templateObject3$p || (_templateObject3$p = _taggedTemplateLiteral(["mimic egg"]))));
  var monsters = getMonsters(1, page);
  if (!monsters.includes(monster)) {
    kolmafia.visitUrl("main.php");
    return false;
  }
  kolmafia.runChoice(1, "mid=".concat(monster.id));
  for (var _len = arguments.length, combatParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    combatParams[_key - 1] = arguments[_key];
  }
  kolmafia.runCombat.apply(void 0, combatParams);
  return true;
}
/**
 * @returns A Map containing all monsters available in your mimic eggs and their associated quantities
 */
function eggMonsters() {
  return new Map(multiSplit("mimicEggMonsters", ",", ":", [kolmafia.toMonster, Number]));
}
/**
 * Check how many of a monster is available to differentiate into
 *
 * @param monster The monster to differentiate your egg into
 * @returns How many of a Monster we can differentiate
 */
function differentiableQuantity(monster) {
  if (!have$g($item(_templateObject4$o || (_templateObject4$o = _taggedTemplateLiteral(["mimic egg"]))))) return 0;
  return eggMonsters().get(monster) ?? 0;
}

var _templateObject$q, _templateObject2$o, _templateObject3$o, _templateObject4$n, _templateObject5$n, _templateObject6$n, _templateObject7$n, _templateObject8$n, _templateObject9$n, _templateObject0$n, _templateObject1$n, _templateObject10$n;
/**
 * @returns Whether you `have` the Mayam calendar
 */
function have$4() {
  return have$g($item(_templateObject$q || (_templateObject$q = _taggedTemplateLiteral(["Mayam Calendar"]))));
}
/**
 * @returns The Mayam calendar symbols you've used so far today.
 */
function symbolsUsed() {
  return get$1("_mayamSymbolsUsed").split(",");
}
/**
 * Determine whether certain Mayam symbols are available for use today
 *
 * @param {...Glyph[]} symbols The symbols to check
 * @returns Whether or not the given symbols are all available for use
 */
function available() {
  for (var _len = arguments.length, symbols = new Array(_len), _key = 0; _key < _len; _key++) {
    symbols[_key] = arguments[_key];
  }
  return symbols.every(symbol => !symbolsUsed().includes(symbol));
}
/**
 * Utility function to ensure you're dealing with a `Combination` array.
 * @param combination An array containing a `CombinationString` or a `Combination` array.
 * @returns A `Combination` corresponding to the information passed in.
 */
function toCombination(combination) {
  return combination.length === 1 ? combination[0].split(" ") : combination;
}
/**
 * Enter a combination in the Mayam calendar
 * @param combination The combination to submit, either as a single string or as a series of symbols
 * @returns Whether we succeeded in our endeavor
 */
function submit() {
  for (var _len2 = arguments.length, combination = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    combination[_key2] = arguments[_key2];
  }
  if (!available.apply(void 0, _toConsumableArray(toCombination(combination)))) {
    return false;
  }
  return kolmafia.cliExecute("mayam rings ".concat(combination.join(" ").replace(/yam\d/g, "yam")));
}
Object.freeze({
  "eye yam2 eyepatch yam4": $item(_templateObject2$o || (_templateObject2$o = _taggedTemplateLiteral(["Mayam spinach"]))),
  "vessel yam2 cheese explosion": $item(_templateObject3$o || (_templateObject3$o = _taggedTemplateLiteral(["stuffed yam stinkbomb"]))),
  "yam1 meat cheese yam4": $item(_templateObject4$n || (_templateObject4$n = _taggedTemplateLiteral(["yam and swiss"]))),
  "sword yam2 eyepatch explosion": $item(_templateObject5$n || (_templateObject5$n = _taggedTemplateLiteral(["yam cannon"]))),
  "fur lightning eyepatch yam4": $item(_templateObject6$n || (_templateObject6$n = _taggedTemplateLiteral(["tiny yam cannon"]))),
  "yam1 lightning yam3 clock": $item(_templateObject7$n || (_templateObject7$n = _taggedTemplateLiteral(["yam battery"]))),
  "fur yam2 wall yam4": $item(_templateObject8$n || (_templateObject8$n = _taggedTemplateLiteral(["furry yam buckler"]))),
  "yam1 yam2 yam3 explosion": $item(_templateObject9$n || (_templateObject9$n = _taggedTemplateLiteral(["thanksgiving bomb"]))),
  "yam1 meat eyepatch yam4": $item(_templateObject0$n || (_templateObject0$n = _taggedTemplateLiteral(["yamtility belt"]))),
  "chair yam2 yam3 clock": $effect(_templateObject1$n || (_templateObject1$n = _taggedTemplateLiteral(["Caught Yam-Handed"]))),
  "yam1 yam2 cheese clock": $effect(_templateObject10$n || (_templateObject10$n = _taggedTemplateLiteral(["Memories of Cheesier Age"])))
});

var _templateObject$p, _templateObject3$n;
/**
 * @returns Whether you `have` the Bat Wings
 */
function have$3() {
  return have$g($item(_templateObject$p || (_templateObject$p = _taggedTemplateLiteral(["bat wings"]))));
}
/**
 * @returns The number of times you can rest upside down today
 */
function restUpsideDownRemaining() {
  return have$3() ? $skill(_templateObject3$n || (_templateObject3$n = _taggedTemplateLiteral(["Rest upside down"]))).dailylimit : 0;
}
/**
 * Calculates the chance of getting a free fight with the Bat Wings equipped
 * @param flaps The number of times your wings have _already_ granted a free fight for the purposes of this calculation; defaults to its current value
 * @returns The chance of getting a free fight
 */
function flapChance() {
  var flaps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : get$1("_batWingsFreeFights");
  return flaps < 5 ? 1 / (2 + flaps) : 0;
}

var _templateObject$o, _templateObject2$n, _templateObject3$m, _templateObject4$m, _templateObject5$m, _templateObject6$m, _templateObject7$m, _templateObject8$m, _templateObject9$m, _templateObject0$m, _templateObject1$m, _templateObject10$m, _templateObject11$m, _templateObject12$l, _templateObject13$k, _templateObject14$k, _templateObject15$k, _templateObject16$k, _templateObject17$j;
var item = $item(_templateObject$o || (_templateObject$o = _taggedTemplateLiteral(["TakerSpace letter of Marque"])));
/**
 * Determines whether the TakerSpace letter of Marque is your current workshed
 *
 * @returns Whether the TakerSpace letter of Marque is your current workshed
 */
function installed() {
  return kolmafia.getWorkshed() === item;
}
/**
 * Determines whether you `have` the TakerSpace letter of Marque (or if it is installed)
 *
 * @returns Whether you `have` the TakerSpace letter of Marque or it's installed
 */
function have$2() {
  return installed() || have$g(item);
}
var RESOURCES = ["Spice", "Rum", "Anchor", "Mast", "Silk", "Gold"];
var RECIPES = new Map([[$item(_templateObject2$n || (_templateObject2$n = _taggedTemplateLiteral(["deft pirate hook"]))), [0, 0, 1, 1, 0, 1]], [$item(_templateObject3$m || (_templateObject3$m = _taggedTemplateLiteral(["iron tricorn hat"]))), [0, 0, 2, 1, 0, 0]], [$item(_templateObject4$m || (_templateObject4$m = _taggedTemplateLiteral(["jolly roger flag"]))), [0, 1, 0, 1, 1, 0]], [$item(_templateObject5$m || (_templateObject5$m = _taggedTemplateLiteral(["sleeping profane parrot"]))), [15, 3, 0, 0, 2, 1]], [$item(_templateObject6$m || (_templateObject6$m = _taggedTemplateLiteral(["pirrrate's currrse"]))), [2, 2, 0, 0, 0, 0]], [$item(_templateObject7$m || (_templateObject7$m = _taggedTemplateLiteral(["tankard of spiced rum"]))), [1, 2, 0, 0, 0, 0]], [$item(_templateObject8$m || (_templateObject8$m = _taggedTemplateLiteral(["tankard of spiced Goldschlepper"]))), [0, 2, 0, 0, 0, 1]], [$item(_templateObject9$m || (_templateObject9$m = _taggedTemplateLiteral(["packaged luxury garment"]))), [0, 0, 0, 0, 3, 2]], [$item(_templateObject0$m || (_templateObject0$m = _taggedTemplateLiteral(["harpoon"]))), [0, 0, 0, 2, 0, 0]], [$item(_templateObject1$m || (_templateObject1$m = _taggedTemplateLiteral(["chili powder cutlass"]))), [5, 0, 1, 0, 0, 0]], [$item(_templateObject10$m || (_templateObject10$m = _taggedTemplateLiteral(["cursed Aztec tamale"]))), [2, 0, 0, 0, 0, 0]], [$item(_templateObject11$m || (_templateObject11$m = _taggedTemplateLiteral(["jolly roger tattoo kit"]))), [0, 6, 1, 1, 0, 6]], [$item(_templateObject12$l || (_templateObject12$l = _taggedTemplateLiteral(["golden pet rock"]))), [0, 0, 0, 0, 0, 7]], [$item(_templateObject13$k || (_templateObject13$k = _taggedTemplateLiteral(["groggles"]))), [0, 6, 0, 0, 0, 0]], [$item(_templateObject14$k || (_templateObject14$k = _taggedTemplateLiteral(["pirate dinghy"]))), [0, 0, 1, 1, 1, 0]], [$item(_templateObject15$k || (_templateObject15$k = _taggedTemplateLiteral(["anchor bomb"]))), [0, 1, 3, 1, 0, 1]], [$item(_templateObject16$k || (_templateObject16$k = _taggedTemplateLiteral(["silky pirate drawers"]))), [0, 0, 0, 0, 2, 0]], [$item(_templateObject17$j || (_templateObject17$j = _taggedTemplateLiteral(["spices"]))), [1, 0, 0, 0, 0, 0]]]);
var defaultAmount = resource => ["Silk", "Gold"].includes(resource) ? 1 : 3;
/**
 * Collect daily resources from takerspace if you haven't yet today and are able to
 * @returns Whether we successfully collected supplies
 */
function collect() {
  if (!installed() || get$1("_takerSpaceSuppliesDelivered")) return false;
  kolmafia.visitUrl("campground.php?action=workshed", false);
  return get$1("_takerSpaceSuppliesDelivered");
}
/**
 * Determine how much of a resource you will have when the TakerSpace is installed
 * @param resource The resource in question
 * @returns The amount of that resource that you will have when the TakerSpace is installed
 */
function amount(resource) {
  collect();
  return get$1("takerSpace".concat(resource)) + (!installed() && !get$1("_workshedItemUsed") ? defaultAmount(resource) : 0);
}
/**
 * Determine the Recipe for a given item
 * @param item The item in question
 * @returns The Recipe for that item, as a length-6 array in the order Spice, Rum, Anchor, Mast, Silk, Gold
 */
function recipeFor(item) {
  var result = RECIPES.get(item);
  return result ? _toConsumableArray(result) : null;
}
/**
 * @returns Your current available resources, as a length-6 array in the order Spice, Rum, Anchor, Mast, Silk, Gold
 */
function currentResources() {
  collect();
  return RESOURCES.map(amount);
}
/**
 * Determine if you have enough resources to make a particular item
 * @param item The item in question
 * @param amount The number of the item to make; defaults to one
 * @returns Whether we have enough resources available to make the amount of the item
 */
function haveEnoughFor(item) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var recipe = recipeFor(item);
  if (!recipe) return false;
  return currentResources().every((resource, index) => resource >= amount * recipe[index]);
}
/**
 * Determines if you're currently able to make a particular item
 * @param item The item in question
 * @param amount The number of the item to make; defaults to one
 * @returns Whether we currently can make the item--that is, whether the TakerSpace is in your workshed and you have enough resources
 */
function canMake(item) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return installed() && haveEnoughFor(item, amount);
}
/**
 * Attempts to make a particular item
 * @param item The item in question
 * @param amount The number of the item to make; defaults to one
 * @returns Whether we succeeded in our endeavor
 */
function make(item) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return canMake(item, amount) && kolmafia.create(item, amount);
}

var _templateObject$n, _templateObject2$m, _templateObject3$l, _templateObject4$l, _templateObject5$l, _templateObject6$l, _templateObject7$l, _templateObject8$l, _templateObject9$l, _templateObject0$l, _templateObject1$l, _templateObject10$l, _templateObject11$l, _templateObject12$k, _templateObject13$j, _templateObject14$j, _templateObject15$j, _templateObject16$j, _templateObject17$i, _templateObject18$i, _templateObject19$h, _templateObject20$f, _templateObject21$f, _templateObject22$f, _templateObject23$f, _templateObject24$f, _templateObject25$f, _templateObject26$f, _templateObject27$e, _templateObject28$e, _templateObject29$e, _templateObject30$e, _templateObject31$e, _templateObject32$e, _templateObject33$e, _templateObject34$d, _templateObject35$d, _templateObject36$d, _templateObject37$d, _templateObject38$c, _templateObject39$c, _templateObject40$c, _templateObject41$c, _templateObject42$b;
/**
 * @returns Whether you `have` the Leprecondo
 */
function have$1() {
  return have$g($item(_templateObject$n || (_templateObject$n = _taggedTemplateLiteral(["Leprecondo"]))));
}
var FURNITURE_PIECES = Object.freeze(["empty", "buckets of concrete", "thrift store oil painting", "boxes of old comic books", "second-hand hot plate", "beer cooler", "free mattress", "gigantic chess set", "UltraDance karaoke machine", "cupcake treadmill", "beer pong table", "padded weight bench", "internet-connected laptop", "sous vide laboratory", "programmable blender", "sensory deprivation tank", "fruit-smashing robot", "ManCave™ sports bar set", "couch and flatscreen", "kegerator", "fine upholstered dining set", "whiskeybed", "high-end home workout system", "complete classics library", "ultimate retro game console", "Omnipot", "fully-stocked wet bar", "four-poster bed"]);
Object.freeze({
  "beer cooler": {
    booze: $items(_templateObject2$m || (_templateObject2$m = _taggedTemplateLiteral(["beer bomb, bloody beer, ice-cold fotie, ice-cold Sir Schlitz, ice-cold Willer, overpriced \"imported\" beer, plain old beer"])))
  },
  "beer pong table": {
    booze: $items(_templateObject3$l || (_templateObject3$l = _taggedTemplateLiteral(["beer bomb, bloody beer, ice-cold fotie, ice-cold Sir Schlitz, ice-cold Willer, overpriced \"imported\" beer, plain old beer"]))),
    exercise: $item(_templateObject4$l || (_templateObject4$l = _taggedTemplateLiteral(["table tennis ball"])))
  },
  "boxes of old comic books": {
    "dumb entertainment": {
      effect: $effect(_templateObject5$l || (_templateObject5$l = _taggedTemplateLiteral(["Wasting Time"]))),
      duration: 10
    }
  },
  "buckets of concrete": {
    exercise: {
      effect: $effect(_templateObject6$l || (_templateObject6$l = _taggedTemplateLiteral(["Gym Bros"]))),
      duration: 10
    }
  },
  "complete classics library": {
    "mental stimulation": $item(_templateObject7$l || (_templateObject7$l = _taggedTemplateLiteral(["leprechaun antidepressant pill"])))
  },
  "couch and flatscreen": {
    "dumb entertainment": {
      effect: $effect(_templateObject8$l || (_templateObject8$l = _taggedTemplateLiteral(["Your Days Are Numbed"]))),
      duration: 10
    },
    sleep: {
      effect: $effect(_templateObject9$l || (_templateObject9$l = _taggedTemplateLiteral(["Good Night's Sleep"]))),
      duration: 10
    }
  },
  "cupcake treadmill": {
    exercise: {
      effect: $effect(_templateObject0$l || (_templateObject0$l = _taggedTemplateLiteral(["Your Days Are Numbed"]))),
      duration: 10
    },
    food: $item(_templateObject1$l || (_templateObject1$l = _taggedTemplateLiteral(["standard-issue cupcake"])))
  },
  "fine upholstered dining set": {
    food: $items(_templateObject10$l || (_templateObject10$l = _taggedTemplateLiteral(["boring spaghetti, delicious noodles, goat cheese pizza, sausage pizza, spicy bean burrito, spicy noodles"]))),
    sleep: {
      effect: $effect(_templateObject11$l || (_templateObject11$l = _taggedTemplateLiteral(["Sur La Table"]))),
      duration: 10
    }
  },
  empty: {},
  "four-poster bed": {
    sleep: {
      effect: $effect(_templateObject12$k || (_templateObject12$k = _taggedTemplateLiteral(["Spacious Night's Sleep"]))),
      duration: 10
    }
  },
  "free mattress": {
    sleep: {
      effect: $effect(_templateObject13$j || (_templateObject13$j = _taggedTemplateLiteral(["Good Night's Sleep"]))),
      duration: 10
    }
  },
  "fruit-smashing robot": {
    "dumb entertainment": {
      effect: $effect(_templateObject14$j || (_templateObject14$j = _taggedTemplateLiteral(["You Might Have Gotten Wet"]))),
      duration: 10
    },
    food: $items(_templateObject15$j || (_templateObject15$j = _taggedTemplateLiteral(["cherry, cranberries, grapefruit, grapes, kiwi, kumquat, lemon, lime, orange, papaya, raspberry, strawberry, tangerine"])))
  },
  "fully-stocked wet bar": {
    booze: $items(_templateObject16$j || (_templateObject16$j = _taggedTemplateLiteral(["Divine sidecar, prussian cathouse sidecar, tangarita sidecar"])))
  },
  "gigantic chess set": {
    exercise: {
      effect: $effect(_templateObject17$i || (_templateObject17$i = _taggedTemplateLiteral(["Work Out Smarter, Not Harder"]))),
      duration: 10
    },
    "mental stimulation": {
      effect: $effect(_templateObject18$i || (_templateObject18$i = _taggedTemplateLiteral(["Well Stimulated"]))),
      duration: 10
    }
  },
  "high-end home workout system": {
    exercise: $item(_templateObject19$h || (_templateObject19$h = _taggedTemplateLiteral(["scoop of pre-workout powder"])))
  },
  "internet-connected laptop": {
    "dumb entertainment": {
      effect: $effect(_templateObject20$f || (_templateObject20$f = _taggedTemplateLiteral(["Wasting Time"]))),
      duration: 10
    },
    "mental stimulation": $item(_templateObject21$f || (_templateObject21$f = _taggedTemplateLiteral(["crafting plans"])))
  },
  kegerator: {
    booze: $item(_templateObject22$f || (_templateObject22$f = _taggedTemplateLiteral(["pint of Leprechaun Stout"]))),
    food: $items(_templateObject23$f || (_templateObject23$f = _taggedTemplateLiteral(["bean burrito, plain pizza, spicy mushroom quesadilla, tofu casserole, Trollhouse cookies"])))
  },
  "ManCave™ sports bar set": {
    booze: $items(_templateObject24$f || (_templateObject24$f = _taggedTemplateLiteral(["melted Jell-o shot, shot of blackberry schnapps, shot of nepenthe schnapps, shot of peach schnapps, shot of pear schnapps, shot of rotgut"]))),
    "dumb entertainment": $item(_templateObject25$f || (_templateObject25$f = _taggedTemplateLiteral(["bar dart"])))
  },
  Omnipot: {
    food: $items(_templateObject26$f || (_templateObject26$f = _taggedTemplateLiteral(["Heck ramen, incredible mini-pizza, small beer brat, tiny burrito, tiny peach pie, savoy truffle, white chocolate chip brownies"])))
  },
  "padded weight bench": {
    exercise: {
      effect: $effect(_templateObject27$e || (_templateObject27$e = _taggedTemplateLiteral(["Gym Bros"]))),
      duration: 10
    },
    sleep: {
      effect: $effect(_templateObject28$e || (_templateObject28$e = _taggedTemplateLiteral(["Tired Muscles"]))),
      duration: 10
    }
  },
  "programmable blender": {
    booze: $items(_templateObject29$e || (_templateObject29$e = _taggedTemplateLiteral(["eggnog, extra-spicy bloody mary, grog, white lightning"]))),
    "mental stimulation": {
      effect: $effect(_templateObject30$e || (_templateObject30$e = _taggedTemplateLiteral(["Counter Intelligence"]))),
      duration: 10
    }
  },
  "second-hand hot plate": {
    food: $items(_templateObject31$e || (_templateObject31$e = _taggedTemplateLiteral(["bean burrito, chorizo taco, plain pizza, spicy mushroom quesadilla, tofu casserole, Trollhouse cookies"])))
  },
  "sensory deprivation tank": {
    "mental stimulation": {
      effect: $effect(_templateObject32$e || (_templateObject32$e = _taggedTemplateLiteral(["Alone with Your Thoughts"]))),
      duration: 10
    },
    sleep: {
      effect: $effect(_templateObject33$e || (_templateObject33$e = _taggedTemplateLiteral(["Quiet Night's Sleep"]))),
      duration: 10
    }
  },
  "sous vide laboratory": {
    food: $items(_templateObject34$d || (_templateObject34$d = _taggedTemplateLiteral(["tiny burrito, black forest ham, fishy fish, ham steak, Knoll stir-fry, spooky stir-fry"]))),
    "mental stimulation": {
      effect: $effect(_templateObject35$d || (_templateObject35$d = _taggedTemplateLiteral(["Counter Intelligence"]))),
      duration: 10
    }
  },
  "thrift store oil painting": {
    "mental stimulation": {
      effect: $effect(_templateObject36$d || (_templateObject36$d = _taggedTemplateLiteral(["Well Stimulated"]))),
      duration: 10
    }
  },
  "ultimate retro game console": {
    "dumb entertainment": $item(_templateObject37$d || (_templateObject37$d = _taggedTemplateLiteral(["phosphor traces"])))
  },
  "UltraDance karaoke machine": {
    "dumb entertainment": {
      effect: $effect(_templateObject38$c || (_templateObject38$c = _taggedTemplateLiteral(["Your Days Are Numbed"]))),
      duration: 10
    },
    exercise: {
      effect: $effect(_templateObject39$c || (_templateObject39$c = _taggedTemplateLiteral(["Vicarious Sweat"]))),
      duration: 10
    }
  },
  whiskeybed: {
    booze: $items(_templateObject40$c || (_templateObject40$c = _taggedTemplateLiteral(["Divine sidecar, lumbering jack, old-fashioned, whiskey and cola, whiskey and soda, whiskey bittersweet, whiskey sour"]))),
    sleep: {
      effect: $effect(_templateObject41$c || (_templateObject41$c = _taggedTemplateLiteral(["Moist Night's Sleep"]))),
      duration: 10
    }
  }
});
/**
 * @returns How many more times you can rearrange today
 */
function rearrangesRemaining() {
  return clamp(3 - get$1("_leprecondoRearrangements"), 0, 3);
}
/**
 * @returns the Furniture elements you've discovered
 */
function discoveredFurniture() {
  return get$1("leprecondoDiscovered").split(",").map(id => FURNITURE_PIECES[Number(id)]);
}
/**
 * @returns the Furniture elements you've installed, in descending order of importance (starting from bottom right and ending in top left)
 */
function installedFurniture() {
  return get$1("leprecondoInstalled").split(",").map(id => FURNITURE_PIECES[Number(id)]).reverse();
}
/**
 * @param furniture A spread array of furniture pieces to install, starting from bottom right and ending in top left
 * @returns Whether or not you successfully installed the desired furniture
 */
function setFurniture() {
  if (rearrangesRemaining() < 0) return false;
  for (var _len = arguments.length, furniture = new Array(_len), _key = 0; _key < _len; _key++) {
    furniture[_key] = arguments[_key];
  }
  var nonemptyFurniture = furniture.filter(f => f !== "empty");
  if (nonemptyFurniture.some(piece => !discoveredFurniture().includes(piece))) return false;
  if (new Set(nonemptyFurniture).size !== nonemptyFurniture.length) return false;
  directlyUse($item(_templateObject42$b || (_templateObject42$b = _taggedTemplateLiteral(["Leprecondo"]))));
  kolmafia.runChoice(1, furniture.map((piece, index) => "r".concat(3 - index, "=").concat(FURNITURE_PIECES.indexOf(piece))).join("&"));
  return arrayEquals(installedFurniture(), furniture);
}

var _templateObject$m;
$item(_templateObject$m || (_templateObject$m = _taggedTemplateLiteral(["Peridot of Peril"])));
/**
 * Determine if you've already used your peridot NC in a particular location today.
 * @param location The location in question.
 *
 * @returns Whether or not you've used the peridot in that location yet today.
 */
function periledToday(location) {
  return RegExp("(?:^|,)".concat(location.id, "(?:$|,)")).test(get$1("_perilLocations"));
}

var _templateObject2$l, _templateObject3$k, _templateObject4$k, _templateObject5$k, _templateObject6$k, _templateObject7$k, _templateObject8$k, _templateObject9$k, _templateObject0$k, _templateObject1$k, _templateObject10$k, _templateObject11$k, _templateObject12$j, _templateObject13$i, _templateObject14$i, _templateObject15$i, _templateObject16$i, _templateObject17$h, _templateObject18$h, _templateObject19$g, _templateObject20$e, _templateObject21$e, _templateObject22$e, _templateObject23$e, _templateObject24$e, _templateObject25$e, _templateObject26$e;
/**
 * @param skill The BCZ skill to check.
 * @param castNumber The number of times you've cast the skill
 * @returns The subtat cost to cast the skill.
 */
function skillCost(skill) {
  var castNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : timesCast(skill);
  if (castNumber <= 11) {
    var cycle = Math.floor(castNumber / 3);
    var position = castNumber % 3;
    return [11, 23, 37][position] * 10 ** cycle;
  } else if (castNumber === 12) {
    return 420_000;
  } else {
    var _cycle = Math.floor((castNumber - 13) / 3);
    var _position = (castNumber + 2) % 3;
    return [11, 23, 37][_position] * 10 ** (_cycle + 5);
  }
}
new Map([[$skill(_templateObject2$l || (_templateObject2$l = _taggedTemplateLiteral(["BCZ: Blood Geyser"]))), $stat(_templateObject3$k || (_templateObject3$k = _taggedTemplateLiteral(["SubMuscle"])))], [$skill(_templateObject4$k || (_templateObject4$k = _taggedTemplateLiteral(["BCZ: Refracted Gaze"]))), $stat(_templateObject5$k || (_templateObject5$k = _taggedTemplateLiteral(["SubMysticality"])))], [$skill(_templateObject6$k || (_templateObject6$k = _taggedTemplateLiteral(["BCZ: Sweat Bullets"]))), $stat(_templateObject7$k || (_templateObject7$k = _taggedTemplateLiteral(["SubMoxie"])))], [$skill(_templateObject8$k || (_templateObject8$k = _taggedTemplateLiteral(["BCZ: Blood Bath"]))), $stat(_templateObject9$k || (_templateObject9$k = _taggedTemplateLiteral(["SubMuscle"])))], [$skill(_templateObject0$k || (_templateObject0$k = _taggedTemplateLiteral(["BCZ: Craft a Pheromone Cocktail"]))), $stat(_templateObject1$k || (_templateObject1$k = _taggedTemplateLiteral(["SubMoxie"])))], [$skill(_templateObject10$k || (_templateObject10$k = _taggedTemplateLiteral(["BCZ: Create Blood Thinner"]))), $stat(_templateObject11$k || (_templateObject11$k = _taggedTemplateLiteral(["SubMuscle"])))], [$skill(_templateObject12$j || (_templateObject12$j = _taggedTemplateLiteral(["BCZ: Dial it up to 11"]))), $stat(_templateObject13$i || (_templateObject13$i = _taggedTemplateLiteral(["SubMysticality"])))], [$skill(_templateObject14$i || (_templateObject14$i = _taggedTemplateLiteral(["BCZ: Prepare Spinal Tapas"]))), $stat(_templateObject15$i || (_templateObject15$i = _taggedTemplateLiteral(["SubMysticality"])))], [$skill(_templateObject16$i || (_templateObject16$i = _taggedTemplateLiteral(["BCZ: Sweat Equity"]))), $stat(_templateObject17$h || (_templateObject17$h = _taggedTemplateLiteral(["SubMoxie"])))]]);
var PREFS = new Map([[$skill(_templateObject18$h || (_templateObject18$h = _taggedTemplateLiteral(["BCZ: Blood Geyser"]))), "_bczBloodGeyserCasts"], [$skill(_templateObject19$g || (_templateObject19$g = _taggedTemplateLiteral(["BCZ: Refracted Gaze"]))), "_bczRefractedGazeCasts"], [$skill(_templateObject20$e || (_templateObject20$e = _taggedTemplateLiteral(["BCZ: Sweat Bullets"]))), "_bczSweatBulletsCasts"], [$skill(_templateObject21$e || (_templateObject21$e = _taggedTemplateLiteral(["BCZ: Blood Bath"]))), "_bczBloodBathCasts"], [$skill(_templateObject22$e || (_templateObject22$e = _taggedTemplateLiteral(["BCZ: Dial it up to 11"]))), "_bczDialitupCasts"], [$skill(_templateObject23$e || (_templateObject23$e = _taggedTemplateLiteral(["BCZ: Sweat Equity"]))), "_bczSweatEquityCasts"], [$skill(_templateObject24$e || (_templateObject24$e = _taggedTemplateLiteral(["BCZ: Create Blood Thinner"]))), "_bczBloodThinnerCasts"], [$skill(_templateObject25$e || (_templateObject25$e = _taggedTemplateLiteral(["BCZ: Prepare Spinal Tapas"]))), "_bczSpinalTapasCasts"], [$skill(_templateObject26$e || (_templateObject26$e = _taggedTemplateLiteral(["BCZ: Craft a Pheromone Cocktail"]))), "_bczPheromoneCocktailCasts"]]);
/**
 * @param skill The BCZ skill to check.
 * @returns The number of casts of the skill already used, parsing the pref.
 */
function timesCast(skill) {
  var pref = PREFS.get(skill);
  if (!pref) return 0;
  return get$1(pref, 0);
}

/**
 * @returns The monster you currently have copied with Club 'Em Into Next Week.
 */
function clubIntoNextWeekMonster() {
  return get$1("clubEmNextWeekMonster");
}
/**
 * @returns The number of turns remaining until your current Club 'Em Into Next Week fight; infinity if the counter isn't currently set.
 */
function turnsUntilNextWeekFight() {
  return get("Club 'Em Into Next Week Monster");
}

var _templateObject$l, _templateObject2$k;
/**
 * @returns Whether or not you `have` The Eternity Codpiece
 */
function have() {
  return have$g($item(_templateObject$l || (_templateObject$l = _taggedTemplateLiteral(["The Eternity Codpiece"]))));
}
var SLOTS = Object.freeze($slots(_templateObject2$k || (_templateObject2$k = _taggedTemplateLiteral(["codpiece1, codpiece2, codpiece3, codpiece4, codpiece5"]))));
/**
 * @returns An array of the current gems you have equipped in your codpiece, regardless of whether the codpiece is active
 */
function currentGems() {
  return SLOTS.map(slot => kolmafia.equippedItem(slot));
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var es_error_toString = {};

var isCallable;
var hasRequiredIsCallable;
function requireIsCallable() {
  if (hasRequiredIsCallable) return isCallable;
  hasRequiredIsCallable = 1;
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  var documentAll = typeof document == 'object' && document.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  isCallable = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
    return typeof argument == 'function' || argument === documentAll;
  } : function (argument) {
    return typeof argument == 'function';
  };
  return isCallable;
}

var objectDefineProperty = {};

var fails;
var hasRequiredFails;
function requireFails() {
  if (hasRequiredFails) return fails;
  hasRequiredFails = 1;
  fails = function fails(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };
  return fails;
}

var descriptors;
var hasRequiredDescriptors;
function requireDescriptors() {
  if (hasRequiredDescriptors) return descriptors;
  hasRequiredDescriptors = 1;
  var fails = requireFails();

  // Detect IE8's incomplete defineProperty implementation
  descriptors = !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] !== 7;
  });
  return descriptors;
}

var globalThis_1;
var hasRequiredGlobalThis;
function requireGlobalThis() {
  if (hasRequiredGlobalThis) return globalThis_1;
  hasRequiredGlobalThis = 1;
  var check = function check(it) {
    return it && it.Math === Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  globalThis_1 =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || check(typeof globalThis_1 == 'object' && globalThis_1) ||
  // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();
  return globalThis_1;
}

var isObject;
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject;
  hasRequiredIsObject = 1;
  var isCallable = requireIsCallable();
  isObject = function isObject(it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
  };
  return isObject;
}

var documentCreateElement;
var hasRequiredDocumentCreateElement;
function requireDocumentCreateElement() {
  if (hasRequiredDocumentCreateElement) return documentCreateElement;
  hasRequiredDocumentCreateElement = 1;
  var globalThis = requireGlobalThis();
  var isObject = requireIsObject();
  var document = globalThis.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject(document) && isObject(document.createElement);
  documentCreateElement = function documentCreateElement(it) {
    return EXISTS ? document.createElement(it) : {};
  };
  return documentCreateElement;
}

var ie8DomDefine;
var hasRequiredIe8DomDefine;
function requireIe8DomDefine() {
  if (hasRequiredIe8DomDefine) return ie8DomDefine;
  hasRequiredIe8DomDefine = 1;
  var DESCRIPTORS = requireDescriptors();
  var fails = requireFails();
  var createElement = requireDocumentCreateElement();

  // Thanks to IE8 for its funny defineProperty
  ie8DomDefine = !DESCRIPTORS && !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a !== 7;
  });
  return ie8DomDefine;
}

var v8PrototypeDefineBug;
var hasRequiredV8PrototypeDefineBug;
function requireV8PrototypeDefineBug() {
  if (hasRequiredV8PrototypeDefineBug) return v8PrototypeDefineBug;
  hasRequiredV8PrototypeDefineBug = 1;
  var DESCRIPTORS = requireDescriptors();
  var fails = requireFails();

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  v8PrototypeDefineBug = DESCRIPTORS && fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () {/* empty */}, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });
  return v8PrototypeDefineBug;
}

var anObject;
var hasRequiredAnObject;
function requireAnObject() {
  if (hasRequiredAnObject) return anObject;
  hasRequiredAnObject = 1;
  var isObject = requireIsObject();
  var $String = String;
  var $TypeError = TypeError;

  // `Assert: Type(argument) is Object`
  anObject = function anObject(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + ' is not an object');
  };
  return anObject;
}

var functionBindNative;
var hasRequiredFunctionBindNative;
function requireFunctionBindNative() {
  if (hasRequiredFunctionBindNative) return functionBindNative;
  hasRequiredFunctionBindNative = 1;
  var fails = requireFails();
  functionBindNative = !fails(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = function () {/* empty */}.bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });
  return functionBindNative;
}

var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall) return functionCall;
  hasRequiredFunctionCall = 1;
  var NATIVE_BIND = requireFunctionBindNative();
  var call = Function.prototype.call;
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  functionCall = NATIVE_BIND ? call.bind(call) : function () {
    return call.apply(call, arguments);
  };
  return functionCall;
}

var getBuiltIn;
var hasRequiredGetBuiltIn;
function requireGetBuiltIn() {
  if (hasRequiredGetBuiltIn) return getBuiltIn;
  hasRequiredGetBuiltIn = 1;
  var globalThis = requireGlobalThis();
  var isCallable = requireIsCallable();
  var aFunction = function aFunction(argument) {
    return isCallable(argument) ? argument : undefined;
  };
  getBuiltIn = function getBuiltIn(namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
  };
  return getBuiltIn;
}

var functionUncurryThis;
var hasRequiredFunctionUncurryThis;
function requireFunctionUncurryThis() {
  if (hasRequiredFunctionUncurryThis) return functionUncurryThis;
  hasRequiredFunctionUncurryThis = 1;
  var NATIVE_BIND = requireFunctionBindNative();
  var FunctionPrototype = Function.prototype;
  var call = FunctionPrototype.call;
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
  functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
    return function () {
      return call.apply(fn, arguments);
    };
  };
  return functionUncurryThis;
}

var objectIsPrototypeOf;
var hasRequiredObjectIsPrototypeOf;
function requireObjectIsPrototypeOf() {
  if (hasRequiredObjectIsPrototypeOf) return objectIsPrototypeOf;
  hasRequiredObjectIsPrototypeOf = 1;
  var uncurryThis = requireFunctionUncurryThis();
  objectIsPrototypeOf = uncurryThis({}.isPrototypeOf);
  return objectIsPrototypeOf;
}

var environmentUserAgent;
var hasRequiredEnvironmentUserAgent;
function requireEnvironmentUserAgent() {
  if (hasRequiredEnvironmentUserAgent) return environmentUserAgent;
  hasRequiredEnvironmentUserAgent = 1;
  var globalThis = requireGlobalThis();
  var navigator = globalThis.navigator;
  var userAgent = navigator && navigator.userAgent;
  environmentUserAgent = userAgent ? String(userAgent) : '';
  return environmentUserAgent;
}

var environmentV8Version;
var hasRequiredEnvironmentV8Version;
function requireEnvironmentV8Version() {
  if (hasRequiredEnvironmentV8Version) return environmentV8Version;
  hasRequiredEnvironmentV8Version = 1;
  var globalThis = requireGlobalThis();
  var userAgent = requireEnvironmentUserAgent();
  var process = globalThis.process;
  var Deno = globalThis.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;
  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }
  environmentV8Version = version;
  return environmentV8Version;
}

var symbolConstructorDetection;
var hasRequiredSymbolConstructorDetection;
function requireSymbolConstructorDetection() {
  if (hasRequiredSymbolConstructorDetection) return symbolConstructorDetection;
  hasRequiredSymbolConstructorDetection = 1;
  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION = requireEnvironmentV8Version();
  var fails = requireFails();
  var globalThis = requireGlobalThis();
  var $String = globalThis.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });
  return symbolConstructorDetection;
}

var useSymbolAsUid;
var hasRequiredUseSymbolAsUid;
function requireUseSymbolAsUid() {
  if (hasRequiredUseSymbolAsUid) return useSymbolAsUid;
  hasRequiredUseSymbolAsUid = 1;
  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  useSymbolAsUid = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';
  return useSymbolAsUid;
}

var isSymbol;
var hasRequiredIsSymbol;
function requireIsSymbol() {
  if (hasRequiredIsSymbol) return isSymbol;
  hasRequiredIsSymbol = 1;
  var getBuiltIn = requireGetBuiltIn();
  var isCallable = requireIsCallable();
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();
  var $Object = Object;
  isSymbol = USE_SYMBOL_AS_UID ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
  };
  return isSymbol;
}

var tryToString;
var hasRequiredTryToString;
function requireTryToString() {
  if (hasRequiredTryToString) return tryToString;
  hasRequiredTryToString = 1;
  var $String = String;
  tryToString = function tryToString(argument) {
    try {
      return $String(argument);
    } catch (error) {
      return 'Object';
    }
  };
  return tryToString;
}

var aCallable;
var hasRequiredACallable;
function requireACallable() {
  if (hasRequiredACallable) return aCallable;
  hasRequiredACallable = 1;
  var isCallable = requireIsCallable();
  var tryToString = requireTryToString();
  var $TypeError = TypeError;

  // `Assert: IsCallable(argument) is true`
  aCallable = function aCallable(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + ' is not a function');
  };
  return aCallable;
}

var isNullOrUndefined;
var hasRequiredIsNullOrUndefined;
function requireIsNullOrUndefined() {
  if (hasRequiredIsNullOrUndefined) return isNullOrUndefined;
  hasRequiredIsNullOrUndefined = 1;
  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  isNullOrUndefined = function isNullOrUndefined(it) {
    return it === null || it === undefined;
  };
  return isNullOrUndefined;
}

var getMethod;
var hasRequiredGetMethod;
function requireGetMethod() {
  if (hasRequiredGetMethod) return getMethod;
  hasRequiredGetMethod = 1;
  var aCallable = requireACallable();
  var isNullOrUndefined = requireIsNullOrUndefined();

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  getMethod = function getMethod(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
  };
  return getMethod;
}

var ordinaryToPrimitive;
var hasRequiredOrdinaryToPrimitive;
function requireOrdinaryToPrimitive() {
  if (hasRequiredOrdinaryToPrimitive) return ordinaryToPrimitive;
  hasRequiredOrdinaryToPrimitive = 1;
  var call = requireFunctionCall();
  var isCallable = requireIsCallable();
  var isObject = requireIsObject();
  var $TypeError = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  ordinaryToPrimitive = function ordinaryToPrimitive(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
  };
  return ordinaryToPrimitive;
}

var sharedStore = {exports: {}};

var isPure;
var hasRequiredIsPure;
function requireIsPure() {
  if (hasRequiredIsPure) return isPure;
  hasRequiredIsPure = 1;
  isPure = false;
  return isPure;
}

var defineGlobalProperty;
var hasRequiredDefineGlobalProperty;
function requireDefineGlobalProperty() {
  if (hasRequiredDefineGlobalProperty) return defineGlobalProperty;
  hasRequiredDefineGlobalProperty = 1;
  var globalThis = requireGlobalThis();

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;
  defineGlobalProperty = function defineGlobalProperty(key, value) {
    try {
      defineProperty(globalThis, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      globalThis[key] = value;
    }
    return value;
  };
  return defineGlobalProperty;
}

var hasRequiredSharedStore;
function requireSharedStore() {
  if (hasRequiredSharedStore) return sharedStore.exports;
  hasRequiredSharedStore = 1;
  var IS_PURE = requireIsPure();
  var globalThis = requireGlobalThis();
  var defineGlobalProperty = requireDefineGlobalProperty();
  var SHARED = '__core-js_shared__';
  var store = sharedStore.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
  (store.versions || (store.versions = [])).push({
    version: '3.50.0',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
    license: 'https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });
  return sharedStore.exports;
}

var shared;
var hasRequiredShared;
function requireShared() {
  if (hasRequiredShared) return shared;
  hasRequiredShared = 1;
  var store = requireSharedStore();
  // eslint-disable-next-line es/no-object-create -- safe
  var create = Object.create || Object;
  shared = function shared(key, value) {
    return store[key] || (store[key] = value || create(null));
  };
  return shared;
}

var requireObjectCoercible;
var hasRequiredRequireObjectCoercible;
function requireRequireObjectCoercible() {
  if (hasRequiredRequireObjectCoercible) return requireObjectCoercible;
  hasRequiredRequireObjectCoercible = 1;
  var isNullOrUndefined = requireIsNullOrUndefined();
  var $TypeError = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  requireObjectCoercible = function requireObjectCoercible(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
  };
  return requireObjectCoercible;
}

var toObject;
var hasRequiredToObject;
function requireToObject() {
  if (hasRequiredToObject) return toObject;
  hasRequiredToObject = 1;
  var requireObjectCoercible = requireRequireObjectCoercible();
  var $Object = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  toObject = function toObject(argument) {
    return $Object(requireObjectCoercible(argument));
  };
  return toObject;
}

var hasOwnProperty_1;
var hasRequiredHasOwnProperty;
function requireHasOwnProperty() {
  if (hasRequiredHasOwnProperty) return hasOwnProperty_1;
  hasRequiredHasOwnProperty = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var toObject = requireToObject();
  var hasOwnProperty = uncurryThis({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
  };
  return hasOwnProperty_1;
}

var uid;
var hasRequiredUid;
function requireUid() {
  if (hasRequiredUid) return uid;
  hasRequiredUid = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var id = 0;
  var postfix = Math.random();
  var toString = uncurryThis(1.1.toString);
  uid = function uid(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
  };
  return uid;
}

var wellKnownSymbol;
var hasRequiredWellKnownSymbol;
function requireWellKnownSymbol() {
  if (hasRequiredWellKnownSymbol) return wellKnownSymbol;
  hasRequiredWellKnownSymbol = 1;
  var globalThis = requireGlobalThis();
  var shared = requireShared();
  var hasOwn = requireHasOwnProperty();
  var uid = requireUid();
  var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();
  var Symbol = globalThis.Symbol;
  var WellKnownSymbolsStore = shared('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;
  wellKnownSymbol = function wellKnownSymbol(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol('Symbol.' + name);
    }
    return WellKnownSymbolsStore[name];
  };
  return wellKnownSymbol;
}

var toPrimitive;
var hasRequiredToPrimitive;
function requireToPrimitive() {
  if (hasRequiredToPrimitive) return toPrimitive;
  hasRequiredToPrimitive = 1;
  var call = requireFunctionCall();
  var isObject = requireIsObject();
  var isSymbol = requireIsSymbol();
  var getMethod = requireGetMethod();
  var ordinaryToPrimitive = requireOrdinaryToPrimitive();
  var wellKnownSymbol = requireWellKnownSymbol();
  var $TypeError = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  toPrimitive = function toPrimitive(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call(exoticToPrim, input, pref);
      if (!isObject(result) || isSymbol(result)) return result;
      throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };
  return toPrimitive;
}

var toPropertyKey;
var hasRequiredToPropertyKey;
function requireToPropertyKey() {
  if (hasRequiredToPropertyKey) return toPropertyKey;
  hasRequiredToPropertyKey = 1;
  var toPrimitive = requireToPrimitive();
  var isSymbol = requireIsSymbol();

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  toPropertyKey = function toPropertyKey(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };
  return toPropertyKey;
}

var hasRequiredObjectDefineProperty;
function requireObjectDefineProperty() {
  if (hasRequiredObjectDefineProperty) return objectDefineProperty;
  hasRequiredObjectDefineProperty = 1;
  var DESCRIPTORS = requireDescriptors();
  var IE8_DOM_DEFINE = requireIe8DomDefine();
  var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  var anObject = requireAnObject();
  var toPropertyKey = requireToPropertyKey();
  var $TypeError = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }
    return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {/* empty */}
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  return objectDefineProperty;
}

var makeBuiltIn = {exports: {}};

var functionName;
var hasRequiredFunctionName;
function requireFunctionName() {
  if (hasRequiredFunctionName) return functionName;
  hasRequiredFunctionName = 1;
  var DESCRIPTORS = requireDescriptors();
  var hasOwn = requireHasOwnProperty();
  var FunctionPrototype = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn(FunctionPrototype, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
  functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };
  return functionName;
}

var inspectSource;
var hasRequiredInspectSource;
function requireInspectSource() {
  if (hasRequiredInspectSource) return inspectSource;
  hasRequiredInspectSource = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var isCallable = requireIsCallable();
  var store = requireSharedStore();
  var functionToString = uncurryThis(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable(store.inspectSource)) {
    store.inspectSource = function (it) {
      return functionToString(it);
    };
  }
  inspectSource = store.inspectSource;
  return inspectSource;
}

var weakMapBasicDetection;
var hasRequiredWeakMapBasicDetection;
function requireWeakMapBasicDetection() {
  if (hasRequiredWeakMapBasicDetection) return weakMapBasicDetection;
  hasRequiredWeakMapBasicDetection = 1;
  var globalThis = requireGlobalThis();
  var isCallable = requireIsCallable();
  var WeakMap = globalThis.WeakMap;
  weakMapBasicDetection = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  return weakMapBasicDetection;
}

var createPropertyDescriptor;
var hasRequiredCreatePropertyDescriptor;
function requireCreatePropertyDescriptor() {
  if (hasRequiredCreatePropertyDescriptor) return createPropertyDescriptor;
  hasRequiredCreatePropertyDescriptor = 1;
  createPropertyDescriptor = function createPropertyDescriptor(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return createPropertyDescriptor;
}

var createNonEnumerableProperty;
var hasRequiredCreateNonEnumerableProperty;
function requireCreateNonEnumerableProperty() {
  if (hasRequiredCreateNonEnumerableProperty) return createNonEnumerableProperty;
  hasRequiredCreateNonEnumerableProperty = 1;
  var DESCRIPTORS = requireDescriptors();
  var definePropertyModule = requireObjectDefineProperty();
  var createPropertyDescriptor = requireCreatePropertyDescriptor();
  createNonEnumerableProperty = DESCRIPTORS ? function (object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  return createNonEnumerableProperty;
}

var sharedKey;
var hasRequiredSharedKey;
function requireSharedKey() {
  if (hasRequiredSharedKey) return sharedKey;
  hasRequiredSharedKey = 1;
  var shared = requireShared();
  var uid = requireUid();
  var keys = shared('keys');
  sharedKey = function sharedKey(key) {
    return keys[key] || (keys[key] = uid(key));
  };
  return sharedKey;
}

var hiddenKeys;
var hasRequiredHiddenKeys;
function requireHiddenKeys() {
  if (hasRequiredHiddenKeys) return hiddenKeys;
  hasRequiredHiddenKeys = 1;
  hiddenKeys = {};
  return hiddenKeys;
}

var internalState;
var hasRequiredInternalState;
function requireInternalState() {
  if (hasRequiredInternalState) return internalState;
  hasRequiredInternalState = 1;
  var NATIVE_WEAK_MAP = requireWeakMapBasicDetection();
  var globalThis = requireGlobalThis();
  var isObject = requireIsObject();
  var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  var hasOwn = requireHasOwnProperty();
  var shared = requireSharedStore();
  var sharedKey = requireSharedKey();
  var hiddenKeys = requireHiddenKeys();
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError = globalThis.TypeError;
  var WeakMap = globalThis.WeakMap;
  var set, get, has;
  var enforce = function enforce(it) {
    return has(it) ? get(it) : set(it, {});
  };
  var getterFor = function getterFor(TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
      }
      return state;
    };
  };
  if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function set(it, metadata) {
      if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function get(it) {
      return store.get(it) || {};
    };
    has = function has(it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function set(it, metadata) {
      if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function get(it) {
      return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function has(it) {
      return hasOwn(it, STATE);
    };
  }
  internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };
  return internalState;
}

var hasRequiredMakeBuiltIn;
function requireMakeBuiltIn() {
  if (hasRequiredMakeBuiltIn) return makeBuiltIn.exports;
  hasRequiredMakeBuiltIn = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var fails = requireFails();
  var isCallable = requireIsCallable();
  var hasOwn = requireHasOwnProperty();
  var DESCRIPTORS = requireDescriptors();
  var CONFIGURABLE_FUNCTION_NAME = requireFunctionName().CONFIGURABLE;
  var inspectSource = requireInspectSource();
  var InternalStateModule = requireInternalState();
  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState = InternalStateModule.get;
  var $String = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;
  var stringSlice = uncurryThis(''.slice);
  var replace = uncurryThis(''.replace);
  var join = uncurryThis([].join);
  var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
    return defineProperty(function () {/* empty */}, 'length', {
      value: 8
    }).length !== 8;
  });
  var TEMPLATE = String(String).split('String');
  var makeBuiltIn$1 = makeBuiltIn.exports = function (value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') {
      name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      if (DESCRIPTORS) defineProperty(value, 'name', {
        value: name,
        configurable: true
      });else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
      defineProperty(value, 'length', {
        value: options.arity
      });
    }
    try {
      if (options && hasOwn(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS) defineProperty(value, 'prototype', {
          writable: false
        });
        // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) {/* empty */}
    var state = enforceInternalState(value);
    if (!hasOwn(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    }
    return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$1(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
  }, 'toString');
  return makeBuiltIn.exports;
}

var defineBuiltIn;
var hasRequiredDefineBuiltIn;
function requireDefineBuiltIn() {
  if (hasRequiredDefineBuiltIn) return defineBuiltIn;
  hasRequiredDefineBuiltIn = 1;
  var isCallable = requireIsCallable();
  var definePropertyModule = requireObjectDefineProperty();
  var makeBuiltIn = requireMakeBuiltIn();
  var defineGlobalProperty = requireDefineGlobalProperty();
  defineBuiltIn = function defineBuiltIn(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;else defineGlobalProperty(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
      } catch (error) {/* empty */}
      if (simple) O[key] = value;else definePropertyModule.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    }
    return O;
  };
  return defineBuiltIn;
}

var toStringTagSupport;
var hasRequiredToStringTagSupport;
function requireToStringTagSupport() {
  if (hasRequiredToStringTagSupport) return toStringTagSupport;
  hasRequiredToStringTagSupport = 1;
  var wellKnownSymbol = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var test = {};
  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  test[TO_STRING_TAG] = 'z';
  toStringTagSupport = String(test) === '[object z]';
  return toStringTagSupport;
}

var classofRaw;
var hasRequiredClassofRaw;
function requireClassofRaw() {
  if (hasRequiredClassofRaw) return classofRaw;
  hasRequiredClassofRaw = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var toString = uncurryThis({}.toString);
  var stringSlice = uncurryThis(''.slice);
  classofRaw = function classofRaw(it) {
    return stringSlice(toString(it), 8, -1);
  };
  return classofRaw;
}

var classof;
var hasRequiredClassof;
function requireClassof() {
  if (hasRequiredClassof) return classof;
  hasRequiredClassof = 1;
  var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  var isCallable = requireIsCallable();
  var classofRaw = requireClassofRaw();
  var wellKnownSymbol = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var $Object = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) === 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (error) {/* empty */}
  };

  // getting tag from ES6+ `Object.prototype.toString`
  classof = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  };
  return classof;
}

var toString;
var hasRequiredToString;
function requireToString() {
  if (hasRequiredToString) return toString;
  hasRequiredToString = 1;
  var classof = requireClassof();
  var $String = String;
  toString = function toString(argument) {
    if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
  };
  return toString;
}

var normalizeStringArgument;
var hasRequiredNormalizeStringArgument;
function requireNormalizeStringArgument() {
  if (hasRequiredNormalizeStringArgument) return normalizeStringArgument;
  hasRequiredNormalizeStringArgument = 1;
  var toString = requireToString();
  normalizeStringArgument = function normalizeStringArgument(argument, $default) {
    return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
  };
  return normalizeStringArgument;
}

var errorToString;
var hasRequiredErrorToString;
function requireErrorToString() {
  if (hasRequiredErrorToString) return errorToString;
  hasRequiredErrorToString = 1;
  var DESCRIPTORS = requireDescriptors();
  var fails = requireFails();
  var anObject = requireAnObject();
  var normalizeStringArgument = requireNormalizeStringArgument();
  var nativeErrorToString = Error.prototype.toString;
  var INCORRECT_TO_STRING = fails(function () {
    if (DESCRIPTORS) {
      // Chrome 32- incorrectly call accessor
      // eslint-disable-next-line es/no-object-create, es/no-object-defineproperty -- safe
      var object = Object.create(Object.defineProperty({}, 'name', {
        get: function get() {
          return this === object;
        }
      }));
      if (nativeErrorToString.call(object) !== 'true') return true;
    }
    // FF10- does not properly handle non-strings
    return nativeErrorToString.call({
      message: 1,
      name: 2
    }) !== '2: 1'
    // IE8 does not properly handle defaults
    || nativeErrorToString.call({}) !== 'Error';
  });
  errorToString = INCORRECT_TO_STRING ? function toString() {
    var O = anObject(this);
    var name = normalizeStringArgument(O.name, 'Error');
    var message = normalizeStringArgument(O.message);
    return !name ? message : !message ? name : name + ': ' + message;
  } : nativeErrorToString;
  return errorToString;
}

var hasRequiredEs_error_toString;
function requireEs_error_toString() {
  if (hasRequiredEs_error_toString) return es_error_toString;
  hasRequiredEs_error_toString = 1;
  var defineBuiltIn = requireDefineBuiltIn();
  var errorToString = requireErrorToString();
  var ErrorPrototype = Error.prototype;

  // `Error.prototype.toString` method fix
  // https://tc39.es/ecma262/#sec-error.prototype.tostring
  if (ErrorPrototype.toString !== errorToString) {
    defineBuiltIn(ErrorPrototype, 'toString', errorToString);
  }
  return es_error_toString;
}

var es_object_toString = {};

var objectToString;
var hasRequiredObjectToString;
function requireObjectToString() {
  if (hasRequiredObjectToString) return objectToString;
  hasRequiredObjectToString = 1;
  var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  var classof = requireClassof();

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  objectToString = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };
  return objectToString;
}

var hasRequiredEs_object_toString;
function requireEs_object_toString() {
  if (hasRequiredEs_object_toString) return es_object_toString;
  hasRequiredEs_object_toString = 1;
  var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  var defineBuiltIn = requireDefineBuiltIn();
  var toString = requireObjectToString();

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn(Object.prototype, 'toString', toString, {
      unsafe: true
    });
  }
  return es_object_toString;
}

var web_atob = {};

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var hasRequiredObjectPropertyIsEnumerable;
function requireObjectPropertyIsEnumerable() {
  if (hasRequiredObjectPropertyIsEnumerable) return objectPropertyIsEnumerable;
  hasRequiredObjectPropertyIsEnumerable = 1;
  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
  }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;
  return objectPropertyIsEnumerable;
}

var indexedObject;
var hasRequiredIndexedObject;
function requireIndexedObject() {
  if (hasRequiredIndexedObject) return indexedObject;
  hasRequiredIndexedObject = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var fails = requireFails();
  var classof = requireClassofRaw();
  var $Object = Object;
  var split = uncurryThis(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof(it) === 'String' ? split(it, '') : $Object(it);
  } : $Object;
  return indexedObject;
}

var toIndexedObject;
var hasRequiredToIndexedObject;
function requireToIndexedObject() {
  if (hasRequiredToIndexedObject) return toIndexedObject;
  hasRequiredToIndexedObject = 1;
  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject = requireIndexedObject();
  var requireObjectCoercible = requireRequireObjectCoercible();
  toIndexedObject = function toIndexedObject(it) {
    return IndexedObject(requireObjectCoercible(it));
  };
  return toIndexedObject;
}

var hasRequiredObjectGetOwnPropertyDescriptor;
function requireObjectGetOwnPropertyDescriptor() {
  if (hasRequiredObjectGetOwnPropertyDescriptor) return objectGetOwnPropertyDescriptor;
  hasRequiredObjectGetOwnPropertyDescriptor = 1;
  var DESCRIPTORS = requireDescriptors();
  var call = requireFunctionCall();
  var propertyIsEnumerableModule = requireObjectPropertyIsEnumerable();
  var createPropertyDescriptor = requireCreatePropertyDescriptor();
  var toIndexedObject = requireToIndexedObject();
  var toPropertyKey = requireToPropertyKey();
  var hasOwn = requireHasOwnProperty();
  var IE8_DOM_DEFINE = requireIe8DomDefine();

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {/* empty */}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
  };
  return objectGetOwnPropertyDescriptor;
}

var objectGetOwnPropertyNames = {};

var mathTrunc;
var hasRequiredMathTrunc;
function requireMathTrunc() {
  if (hasRequiredMathTrunc) return mathTrunc;
  hasRequiredMathTrunc = 1;
  var ceil = Math.ceil;
  var floor = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
  };
  return mathTrunc;
}

var toIntegerOrInfinity;
var hasRequiredToIntegerOrInfinity;
function requireToIntegerOrInfinity() {
  if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity;
  hasRequiredToIntegerOrInfinity = 1;
  var trunc = requireMathTrunc();

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  toIntegerOrInfinity = function toIntegerOrInfinity(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };
  return toIntegerOrInfinity;
}

var toAbsoluteIndex;
var hasRequiredToAbsoluteIndex;
function requireToAbsoluteIndex() {
  if (hasRequiredToAbsoluteIndex) return toAbsoluteIndex;
  hasRequiredToAbsoluteIndex = 1;
  var toIntegerOrInfinity = requireToIntegerOrInfinity();
  var max = Math.max;
  var min = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  toAbsoluteIndex = function toAbsoluteIndex(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
  };
  return toAbsoluteIndex;
}

var toLength;
var hasRequiredToLength;
function requireToLength() {
  if (hasRequiredToLength) return toLength;
  hasRequiredToLength = 1;
  var toIntegerOrInfinity = requireToIntegerOrInfinity();
  var min = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  toLength = function toLength(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };
  return toLength;
}

var lengthOfArrayLike;
var hasRequiredLengthOfArrayLike;
function requireLengthOfArrayLike() {
  if (hasRequiredLengthOfArrayLike) return lengthOfArrayLike;
  hasRequiredLengthOfArrayLike = 1;
  var toLength = requireToLength();

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  lengthOfArrayLike = function lengthOfArrayLike(obj) {
    return toLength(obj.length);
  };
  return lengthOfArrayLike;
}

var arrayIncludes;
var hasRequiredArrayIncludes;
function requireArrayIncludes() {
  if (hasRequiredArrayIncludes) return arrayIncludes;
  hasRequiredArrayIncludes = 1;
  var toIndexedObject = requireToIndexedObject();
  var toAbsoluteIndex = requireToAbsoluteIndex();
  var lengthOfArrayLike = requireLengthOfArrayLike();

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod = function createMethod(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = lengthOfArrayLike(O);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el !== el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };
  arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };
  return arrayIncludes;
}

var objectKeysInternal;
var hasRequiredObjectKeysInternal;
function requireObjectKeysInternal() {
  if (hasRequiredObjectKeysInternal) return objectKeysInternal;
  hasRequiredObjectKeysInternal = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var hasOwn = requireHasOwnProperty();
  var toIndexedObject = requireToIndexedObject();
  var indexOf = requireArrayIncludes().indexOf;
  var hiddenKeys = requireHiddenKeys();
  var push = uncurryThis([].push);
  objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn(O, key = names[i++])) {
      ~indexOf(result, key) || push(result, key);
    }
    return result;
  };
  return objectKeysInternal;
}

var enumBugKeys;
var hasRequiredEnumBugKeys;
function requireEnumBugKeys() {
  if (hasRequiredEnumBugKeys) return enumBugKeys;
  hasRequiredEnumBugKeys = 1;
  // IE8- don't enum bug keys
  enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  return enumBugKeys;
}

var hasRequiredObjectGetOwnPropertyNames;
function requireObjectGetOwnPropertyNames() {
  if (hasRequiredObjectGetOwnPropertyNames) return objectGetOwnPropertyNames;
  hasRequiredObjectGetOwnPropertyNames = 1;
  var internalObjectKeys = requireObjectKeysInternal();
  var enumBugKeys = requireEnumBugKeys();
  var hiddenKeys = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
  };
  return objectGetOwnPropertyNames;
}

var objectGetOwnPropertySymbols = {};

var hasRequiredObjectGetOwnPropertySymbols;
function requireObjectGetOwnPropertySymbols() {
  if (hasRequiredObjectGetOwnPropertySymbols) return objectGetOwnPropertySymbols;
  hasRequiredObjectGetOwnPropertySymbols = 1;
  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
  return objectGetOwnPropertySymbols;
}

var ownKeys;
var hasRequiredOwnKeys;
function requireOwnKeys() {
  if (hasRequiredOwnKeys) return ownKeys;
  hasRequiredOwnKeys = 1;
  var getBuiltIn = requireGetBuiltIn();
  var uncurryThis = requireFunctionUncurryThis();
  var getOwnPropertyNamesModule = requireObjectGetOwnPropertyNames();
  var getOwnPropertySymbolsModule = requireObjectGetOwnPropertySymbols();
  var anObject = requireAnObject();
  var concat = uncurryThis([].concat);

  // all object keys, includes non-enumerable and symbols
  ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
  };
  return ownKeys;
}

var copyConstructorProperties;
var hasRequiredCopyConstructorProperties;
function requireCopyConstructorProperties() {
  if (hasRequiredCopyConstructorProperties) return copyConstructorProperties;
  hasRequiredCopyConstructorProperties = 1;
  var hasOwn = requireHasOwnProperty();
  var ownKeys = requireOwnKeys();
  var getOwnPropertyDescriptorModule = requireObjectGetOwnPropertyDescriptor();
  var definePropertyModule = requireObjectDefineProperty();
  copyConstructorProperties = function copyConstructorProperties(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };
  return copyConstructorProperties;
}

var isForced_1;
var hasRequiredIsForced;
function requireIsForced() {
  if (hasRequiredIsForced) return isForced_1;
  hasRequiredIsForced = 1;
  var fails = requireFails();
  var isCallable = requireIsCallable();
  var replacement = /#|\.prototype\./;
  var isForced = function isForced(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
  };
  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };
  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';
  isForced_1 = isForced;
  return isForced_1;
}

var _export;
var hasRequired_export;
function require_export() {
  if (hasRequired_export) return _export;
  hasRequired_export = 1;
  var globalThis = requireGlobalThis();
  var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
  var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  var defineBuiltIn = requireDefineBuiltIn();
  var defineGlobalProperty = requireDefineGlobalProperty();
  var copyConstructorProperties = requireCopyConstructorProperties();
  var isForced = requireIsForced();

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  _export = function _export(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = globalThis;
    } else if (STATIC) {
      target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = globalThis[TARGET] && globalThis[TARGET].prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      defineBuiltIn(target, key, sourceProperty, options);
    }
  };
  return _export;
}

var validateArgumentsLength;
var hasRequiredValidateArgumentsLength;
function requireValidateArgumentsLength() {
  if (hasRequiredValidateArgumentsLength) return validateArgumentsLength;
  hasRequiredValidateArgumentsLength = 1;
  var $TypeError = TypeError;
  validateArgumentsLength = function validateArgumentsLength(passed, required) {
    if (passed < required) throw new $TypeError('Not enough arguments');
    return passed;
  };
  return validateArgumentsLength;
}

var base64Map;
var hasRequiredBase64Map;
function requireBase64Map() {
  if (hasRequiredBase64Map) return base64Map;
  hasRequiredBase64Map = 1;
  var commonAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var base64Alphabet = commonAlphabet + '+/';
  var base64UrlAlphabet = commonAlphabet + '-_';
  var inverse = function inverse(characters) {
    // TODO: use `Object.create(null)` in `core-js@4`
    var result = {};
    var index = 0;
    for (; index < 64; index++) result[characters.charAt(index)] = index;
    return result;
  };
  base64Map = {
    i2c: base64Alphabet,
    c2i: inverse(base64Alphabet),
    i2cUrl: base64UrlAlphabet,
    c2iUrl: inverse(base64UrlAlphabet)
  };
  return base64Map;
}

var hasRequiredWeb_atob;
function requireWeb_atob() {
  if (hasRequiredWeb_atob) return web_atob;
  hasRequiredWeb_atob = 1;
  var $ = require_export();
  var globalThis = requireGlobalThis();
  var getBuiltIn = requireGetBuiltIn();
  var uncurryThis = requireFunctionUncurryThis();
  var call = requireFunctionCall();
  var fails = requireFails();
  var toString = requireToString();
  var validateArgumentsLength = requireValidateArgumentsLength();
  var c2i = requireBase64Map().c2i;
  var disallowed = /[^\d+/a-z]/i;
  var whitespaces = /[\t\n\f\r ]+/g;
  var finalEq = /[=]{1,2}$/;
  var $atob = getBuiltIn('atob');
  var $Array = Array;
  var fromCharCode = String.fromCharCode;
  var charAt = uncurryThis(''.charAt);
  var replace = uncurryThis(''.replace);
  var join = uncurryThis([].join);
  var exec = uncurryThis(disallowed.exec);
  var BASIC = !!$atob && !fails(function () {
    return $atob('aGk=') !== 'hi';
  });
  var NO_SPACES_IGNORE = BASIC && fails(function () {
    return $atob(' ') !== '';
  });
  var NO_ENCODING_CHECK = BASIC && !fails(function () {
    $atob('a');
  });
  var NO_ARG_RECEIVING_CHECK = BASIC && !fails(function () {
    $atob();
  });
  var WRONG_ARITY = BASIC && $atob.length !== 1;
  var FORCED = !BASIC || NO_SPACES_IGNORE || NO_ENCODING_CHECK || NO_ARG_RECEIVING_CHECK || WRONG_ARITY;

  // `atob` method
  // https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob
  $({
    global: true,
    bind: true,
    enumerable: true,
    forced: FORCED
  }, {
    atob: function atob(data) {
      validateArgumentsLength(arguments.length, 1);
      // `webpack` dev server bug on IE global methods - use call(fn, global, ...)
      if (BASIC && !NO_SPACES_IGNORE && !NO_ENCODING_CHECK) return call($atob, globalThis, data);
      var string = replace(toString(data), whitespaces, '');
      var position = 0;
      var bc = 0;
      var length, chr, bs;
      if (!(string.length & 3)) {
        string = replace(string, finalEq, '');
      }
      length = string.length;
      var lenmod = length & 3;
      if (lenmod === 1 || exec(disallowed, string)) {
        throw new (getBuiltIn('DOMException'))('The string is not correctly encoded', 'InvalidCharacterError');
      }
      // (length >> 2) is equivalent for length / 4 floored; * 3 then multiplies the
      // number of bytes for full quanta
      // lenmod is length % 4; if there's 2 or 3 bytes it's 1 or 2 bytes of extra output
      // respectively, so -1, however use a ternary to ensure 0 does not get -1 onto length
      var output = new $Array((length >> 2) * 3 + (lenmod ? lenmod - 1 : 0));
      var outputIndex = 0;
      while (position < length) {
        chr = charAt(string, position++);
        bs = bc & 3 ? (bs << 6) + c2i[chr] : c2i[chr];
        if (bc++ & 3) output[outputIndex++] = fromCharCode(255 & bs >> (-2 * bc & 6));
      }
      return join(output, '');
    }
  });
  return web_atob;
}

var web_domException_constructor = {};

var environment;
var hasRequiredEnvironment;
function requireEnvironment() {
  if (hasRequiredEnvironment) return environment;
  hasRequiredEnvironment = 1;
  /* global Bun, Deno -- detection */
  var globalThis = requireGlobalThis();
  var userAgent = requireEnvironmentUserAgent();
  var classof = requireClassofRaw();
  var userAgentStartsWith = function userAgentStartsWith(string) {
    return userAgent.slice(0, string.length) === string;
  };
  environment = function () {
    if (userAgentStartsWith('Bun/')) return 'BUN';
    if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
    if (userAgentStartsWith('Deno/')) return 'DENO';
    if (userAgentStartsWith('Node.js/')) return 'NODE';
    if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
    if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
    if (classof(globalThis.process) === 'process') return 'NODE';
    if (globalThis.window && globalThis.document) return 'BROWSER';
    return 'REST';
  }();
  return environment;
}

var environmentIsNode;
var hasRequiredEnvironmentIsNode;
function requireEnvironmentIsNode() {
  if (hasRequiredEnvironmentIsNode) return environmentIsNode;
  hasRequiredEnvironmentIsNode = 1;
  var ENVIRONMENT = requireEnvironment();
  environmentIsNode = ENVIRONMENT === 'NODE';
  return environmentIsNode;
}

var getBuiltInNodeModule;
var hasRequiredGetBuiltInNodeModule;
function requireGetBuiltInNodeModule() {
  if (hasRequiredGetBuiltInNodeModule) return getBuiltInNodeModule;
  hasRequiredGetBuiltInNodeModule = 1;
  var globalThis = requireGlobalThis();
  var IS_NODE = requireEnvironmentIsNode();
  getBuiltInNodeModule = function getBuiltInNodeModule(name) {
    if (IS_NODE) {
      try {
        return globalThis.process.getBuiltinModule(name);
      } catch (error) {/* empty */}
      try {
        // eslint-disable-next-line no-new-func -- safe
        return Function('return require("' + name + '")')();
      } catch (error) {/* empty */}
    }
  };
  return getBuiltInNodeModule;
}

var objectDefineProperties = {};

var objectKeys;
var hasRequiredObjectKeys;
function requireObjectKeys() {
  if (hasRequiredObjectKeys) return objectKeys;
  hasRequiredObjectKeys = 1;
  var internalObjectKeys = requireObjectKeysInternal();
  var enumBugKeys = requireEnumBugKeys();

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  objectKeys = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
  };
  return objectKeys;
}

var hasRequiredObjectDefineProperties;
function requireObjectDefineProperties() {
  if (hasRequiredObjectDefineProperties) return objectDefineProperties;
  hasRequiredObjectDefineProperties = 1;
  var DESCRIPTORS = requireDescriptors();
  var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  var definePropertyModule = requireObjectDefineProperty();
  var anObject = requireAnObject();
  var toIndexedObject = requireToIndexedObject();
  var objectKeys = requireObjectKeys();

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
  };
  return objectDefineProperties;
}

var html;
var hasRequiredHtml;
function requireHtml() {
  if (hasRequiredHtml) return html;
  hasRequiredHtml = 1;
  var getBuiltIn = requireGetBuiltIn();
  html = getBuiltIn('document', 'documentElement');
  return html;
}

var objectCreate;
var hasRequiredObjectCreate;
function requireObjectCreate() {
  if (hasRequiredObjectCreate) return objectCreate;
  hasRequiredObjectCreate = 1;
  /* global ActiveXObject -- old IE, WSH */
  var anObject = requireAnObject();
  var definePropertiesModule = requireObjectDefineProperties();
  var enumBugKeys = requireEnumBugKeys();
  var hiddenKeys = requireHiddenKeys();
  var html = requireHtml();
  var documentCreateElement = requireDocumentCreateElement();
  var sharedKey = requireSharedKey();
  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO = sharedKey('IE_PROTO');
  var EmptyConstructor = function EmptyConstructor() {/* empty */};
  var scriptTag = function scriptTag(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    // eslint-disable-next-line no-useless-assignment -- avoid memory leak
    activeXDocument = null;
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var _NullProtoObject = function NullProtoObject() {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {/* ignore */}
    _NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
    : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return _NullProtoObject();
  };
  hiddenKeys[IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = _NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };
  return objectCreate;
}

var defineBuiltInAccessor;
var hasRequiredDefineBuiltInAccessor;
function requireDefineBuiltInAccessor() {
  if (hasRequiredDefineBuiltInAccessor) return defineBuiltInAccessor;
  hasRequiredDefineBuiltInAccessor = 1;
  var makeBuiltIn = requireMakeBuiltIn();
  var defineProperty = requireObjectDefineProperty();
  defineBuiltInAccessor = function defineBuiltInAccessor(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
      getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
      setter: true
    });
    return defineProperty.f(target, name, descriptor);
  };
  return defineBuiltInAccessor;
}

var anInstance;
var hasRequiredAnInstance;
function requireAnInstance() {
  if (hasRequiredAnInstance) return anInstance;
  hasRequiredAnInstance = 1;
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var $TypeError = TypeError;
  anInstance = function anInstance(it, Prototype) {
    if (isPrototypeOf(Prototype, it)) return it;
    throw new $TypeError('Incorrect invocation');
  };
  return anInstance;
}

var domExceptionConstants;
var hasRequiredDomExceptionConstants;
function requireDomExceptionConstants() {
  if (hasRequiredDomExceptionConstants) return domExceptionConstants;
  hasRequiredDomExceptionConstants = 1;
  domExceptionConstants = {
    IndexSizeError: {
      s: 'INDEX_SIZE_ERR',
      c: 1,
      m: 1
    },
    DOMStringSizeError: {
      s: 'DOMSTRING_SIZE_ERR',
      c: 2,
      m: 0
    },
    HierarchyRequestError: {
      s: 'HIERARCHY_REQUEST_ERR',
      c: 3,
      m: 1
    },
    WrongDocumentError: {
      s: 'WRONG_DOCUMENT_ERR',
      c: 4,
      m: 1
    },
    InvalidCharacterError: {
      s: 'INVALID_CHARACTER_ERR',
      c: 5,
      m: 1
    },
    NoDataAllowedError: {
      s: 'NO_DATA_ALLOWED_ERR',
      c: 6,
      m: 0
    },
    NoModificationAllowedError: {
      s: 'NO_MODIFICATION_ALLOWED_ERR',
      c: 7,
      m: 1
    },
    NotFoundError: {
      s: 'NOT_FOUND_ERR',
      c: 8,
      m: 1
    },
    NotSupportedError: {
      s: 'NOT_SUPPORTED_ERR',
      c: 9,
      m: 1
    },
    InUseAttributeError: {
      s: 'INUSE_ATTRIBUTE_ERR',
      c: 10,
      m: 1
    },
    InvalidStateError: {
      s: 'INVALID_STATE_ERR',
      c: 11,
      m: 1
    },
    SyntaxError: {
      s: 'SYNTAX_ERR',
      c: 12,
      m: 1
    },
    InvalidModificationError: {
      s: 'INVALID_MODIFICATION_ERR',
      c: 13,
      m: 1
    },
    NamespaceError: {
      s: 'NAMESPACE_ERR',
      c: 14,
      m: 1
    },
    InvalidAccessError: {
      s: 'INVALID_ACCESS_ERR',
      c: 15,
      m: 1
    },
    ValidationError: {
      s: 'VALIDATION_ERR',
      c: 16,
      m: 0
    },
    TypeMismatchError: {
      s: 'TYPE_MISMATCH_ERR',
      c: 17,
      m: 1
    },
    SecurityError: {
      s: 'SECURITY_ERR',
      c: 18,
      m: 1
    },
    NetworkError: {
      s: 'NETWORK_ERR',
      c: 19,
      m: 1
    },
    AbortError: {
      s: 'ABORT_ERR',
      c: 20,
      m: 1
    },
    URLMismatchError: {
      s: 'URL_MISMATCH_ERR',
      c: 21,
      m: 1
    },
    QuotaExceededError: {
      s: 'QUOTA_EXCEEDED_ERR',
      c: 22,
      m: 1
    },
    TimeoutError: {
      s: 'TIMEOUT_ERR',
      c: 23,
      m: 1
    },
    InvalidNodeTypeError: {
      s: 'INVALID_NODE_TYPE_ERR',
      c: 24,
      m: 1
    },
    DataCloneError: {
      s: 'DATA_CLONE_ERR',
      c: 25,
      m: 1
    }
  };
  return domExceptionConstants;
}

var errorStackClear;
var hasRequiredErrorStackClear;
function requireErrorStackClear() {
  if (hasRequiredErrorStackClear) return errorStackClear;
  hasRequiredErrorStackClear = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var $Error = Error;
  var replace = uncurryThis(''.replace);
  var TEST = function (arg) {
    return String(new $Error(arg).stack);
  }('zxcasd');
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
  var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
  errorStackClear = function errorStackClear(stack, dropEntries) {
    if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
      while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
    }
    return stack;
  };
  return errorStackClear;
}

var hasRequiredWeb_domException_constructor;
function requireWeb_domException_constructor() {
  if (hasRequiredWeb_domException_constructor) return web_domException_constructor;
  hasRequiredWeb_domException_constructor = 1;
  var $ = require_export();
  var getBuiltIn = requireGetBuiltIn();
  var getBuiltInNodeModule = requireGetBuiltInNodeModule();
  var fails = requireFails();
  var create = requireObjectCreate();
  var createPropertyDescriptor = requireCreatePropertyDescriptor();
  var defineProperty = requireObjectDefineProperty().f;
  var defineBuiltIn = requireDefineBuiltIn();
  var defineBuiltInAccessor = requireDefineBuiltInAccessor();
  var hasOwn = requireHasOwnProperty();
  var anInstance = requireAnInstance();
  var anObject = requireAnObject();
  var errorToString = requireErrorToString();
  var normalizeStringArgument = requireNormalizeStringArgument();
  var DOMExceptionConstants = requireDomExceptionConstants();
  var clearErrorStack = requireErrorStackClear();
  var InternalStateModule = requireInternalState();
  var DESCRIPTORS = requireDescriptors();
  var IS_PURE = requireIsPure();
  var DOM_EXCEPTION = 'DOMException';
  var DATA_CLONE_ERR = 'DATA_CLONE_ERR';
  var Error = getBuiltIn('Error');
  // NodeJS < 17.0 does not expose `DOMException` to global
  var NativeDOMException = getBuiltIn(DOM_EXCEPTION) || function () {
    try {
      // NodeJS < 15.0 does not expose `MessageChannel` to global
      var MessageChannel = getBuiltIn('MessageChannel') || getBuiltInNodeModule('worker_threads').MessageChannel;
      // eslint-disable-next-line es/no-weak-map, unicorn/require-post-message-target-origin -- safe
      new MessageChannel().port1.postMessage(new WeakMap());
    } catch (error) {
      if (error.name === DATA_CLONE_ERR && error.code === 25) return error.constructor;
    }
  }();
  var NativeDOMExceptionPrototype = NativeDOMException && NativeDOMException.prototype;
  var ErrorPrototype = Error.prototype;
  var setInternalState = InternalStateModule.set;
  var getInternalState = InternalStateModule.getterFor(DOM_EXCEPTION);
  var HAS_STACK = 'stack' in new Error(DOM_EXCEPTION);
  var codeFor = function codeFor(name) {
    return hasOwn(DOMExceptionConstants, name) && DOMExceptionConstants[name].m ? DOMExceptionConstants[name].c : 0;
  };
  var $DOMException = function DOMException() {
    anInstance(this, DOMExceptionPrototype);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
    var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
    var code = codeFor(name);
    setInternalState(this, {
      type: DOM_EXCEPTION,
      name: name,
      message: message,
      code: code
    });
    if (!DESCRIPTORS) {
      this.name = name;
      this.message = message;
      this.code = code;
    }
    if (HAS_STACK) {
      var error = new Error(message);
      error.name = DOM_EXCEPTION;
      defineProperty(this, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
    }
  };
  var DOMExceptionPrototype = $DOMException.prototype = create(ErrorPrototype);
  var createGetterDescriptor = function createGetterDescriptor(get) {
    return {
      enumerable: true,
      configurable: true,
      get: get
    };
  };
  var getterFor = function getterFor(key) {
    return createGetterDescriptor(function () {
      return getInternalState(this)[key];
    });
  };
  if (DESCRIPTORS) {
    // `DOMException.prototype.code` getter
    defineBuiltInAccessor(DOMExceptionPrototype, 'code', getterFor('code'));
    // `DOMException.prototype.message` getter
    defineBuiltInAccessor(DOMExceptionPrototype, 'message', getterFor('message'));
    // `DOMException.prototype.name` getter
    defineBuiltInAccessor(DOMExceptionPrototype, 'name', getterFor('name'));
  }
  defineProperty(DOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, $DOMException));

  // FF36- DOMException is a function, but can't be constructed
  var INCORRECT_CONSTRUCTOR = fails(function () {
    return !(new NativeDOMException() instanceof Error);
  });

  // Safari 10.1 / Chrome 32- / IE8- DOMException.prototype.toString bugs
  var INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails(function () {
    return ErrorPrototype.toString !== errorToString || String(new NativeDOMException(1, 2)) !== '2: 1';
  });

  // Deno 1.6.3- DOMException.prototype.code just missed
  var INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails(function () {
    return new NativeDOMException(1, 'DataCloneError').code !== 25;
  });

  // Deno 1.6.3- DOMException constants just missed
  var MISSED_CONSTANTS = INCORRECT_CONSTRUCTOR || NativeDOMException[DATA_CLONE_ERR] !== 25 || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25;
  var FORCED_CONSTRUCTOR = IS_PURE ? INCORRECT_TO_STRING || INCORRECT_CODE || MISSED_CONSTANTS : INCORRECT_CONSTRUCTOR;

  // `DOMException` constructor
  // https://webidl.spec.whatwg.org/#idl-DOMException
  $({
    global: true,
    constructor: true,
    forced: FORCED_CONSTRUCTOR
  }, {
    DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
  });
  var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
  var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
  if (INCORRECT_TO_STRING && (IS_PURE || NativeDOMException === PolyfilledDOMException)) {
    defineBuiltIn(PolyfilledDOMExceptionPrototype, 'toString', errorToString);
  }
  if (INCORRECT_CODE && DESCRIPTORS && NativeDOMException === PolyfilledDOMException) {
    defineBuiltInAccessor(PolyfilledDOMExceptionPrototype, 'code', createGetterDescriptor(function () {
      return codeFor(anObject(this).name);
    }));
  }

  // `DOMException` constants
  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    var descriptor = createPropertyDescriptor(6, constant.c);
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, descriptor);
    }
    if (!hasOwn(PolyfilledDOMExceptionPrototype, constantName)) {
      defineProperty(PolyfilledDOMExceptionPrototype, constantName, descriptor);
    }
  }
  return web_domException_constructor;
}

var web_domException_stack = {};

var functionUncurryThisAccessor;
var hasRequiredFunctionUncurryThisAccessor;
function requireFunctionUncurryThisAccessor() {
  if (hasRequiredFunctionUncurryThisAccessor) return functionUncurryThisAccessor;
  hasRequiredFunctionUncurryThisAccessor = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var aCallable = requireACallable();
  functionUncurryThisAccessor = function functionUncurryThisAccessor(object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) {/* empty */}
  };
  return functionUncurryThisAccessor;
}

var isPossiblePrototype;
var hasRequiredIsPossiblePrototype;
function requireIsPossiblePrototype() {
  if (hasRequiredIsPossiblePrototype) return isPossiblePrototype;
  hasRequiredIsPossiblePrototype = 1;
  var isObject = requireIsObject();
  isPossiblePrototype = function isPossiblePrototype(argument) {
    return isObject(argument) || argument === null;
  };
  return isPossiblePrototype;
}

var aPossiblePrototype;
var hasRequiredAPossiblePrototype;
function requireAPossiblePrototype() {
  if (hasRequiredAPossiblePrototype) return aPossiblePrototype;
  hasRequiredAPossiblePrototype = 1;
  var isPossiblePrototype = requireIsPossiblePrototype();
  var $String = String;
  var $TypeError = TypeError;
  aPossiblePrototype = function aPossiblePrototype(argument) {
    if (isPossiblePrototype(argument)) return argument;
    throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
  };
  return aPossiblePrototype;
}

var objectSetPrototypeOf;
var hasRequiredObjectSetPrototypeOf;
function requireObjectSetPrototypeOf() {
  if (hasRequiredObjectSetPrototypeOf) return objectSetPrototypeOf;
  hasRequiredObjectSetPrototypeOf = 1;
  /* eslint-disable no-proto -- safe */
  var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
  var isObject = requireIsObject();
  var requireObjectCoercible = requireRequireObjectCoercible();
  var aPossiblePrototype = requireAPossiblePrototype();

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {/* empty */}
    return function setPrototypeOf(O, proto) {
      requireObjectCoercible(O);
      aPossiblePrototype(proto);
      if (!isObject(O)) return O;
      if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);
  return objectSetPrototypeOf;
}

var inheritIfRequired;
var hasRequiredInheritIfRequired;
function requireInheritIfRequired() {
  if (hasRequiredInheritIfRequired) return inheritIfRequired;
  hasRequiredInheritIfRequired = 1;
  var isCallable = requireIsCallable();
  var isObject = requireIsObject();
  var setPrototypeOf = requireObjectSetPrototypeOf();

  // makes subclassing work correct for wrapped built-ins
  inheritIfRequired = function inheritIfRequired($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
    return $this;
  };
  return inheritIfRequired;
}

var hasRequiredWeb_domException_stack;
function requireWeb_domException_stack() {
  if (hasRequiredWeb_domException_stack) return web_domException_stack;
  hasRequiredWeb_domException_stack = 1;
  var $ = require_export();
  var globalThis = requireGlobalThis();
  var getBuiltIn = requireGetBuiltIn();
  var createPropertyDescriptor = requireCreatePropertyDescriptor();
  var defineProperty = requireObjectDefineProperty().f;
  var hasOwn = requireHasOwnProperty();
  var anInstance = requireAnInstance();
  var inheritIfRequired = requireInheritIfRequired();
  var normalizeStringArgument = requireNormalizeStringArgument();
  var DOMExceptionConstants = requireDomExceptionConstants();
  var clearErrorStack = requireErrorStackClear();
  var DESCRIPTORS = requireDescriptors();
  var IS_PURE = requireIsPure();
  var DOM_EXCEPTION = 'DOMException';
  var Error = getBuiltIn('Error');
  var NativeDOMException = getBuiltIn(DOM_EXCEPTION);
  var $DOMException = function DOMException() {
    anInstance(this, DOMExceptionPrototype);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
    var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
    var that = new NativeDOMException(message, name);
    var error = new Error(message);
    error.name = DOM_EXCEPTION;
    defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
    inheritIfRequired(that, this, $DOMException);
    return that;
  };
  var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
  var ERROR_HAS_STACK = 'stack' in new Error(DOM_EXCEPTION);
  var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis, DOM_EXCEPTION);

  // Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
  // https://github.com/Jarred-Sumner/bun/issues/399
  var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
  var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

  // `DOMException` constructor patch for `.stack` where it's required
  // https://webidl.spec.whatwg.org/#es-DOMException-specialness
  $({
    global: true,
    constructor: true,
    forced: IS_PURE || FORCED_CONSTRUCTOR
  }, {
    // TODO: fix export logic
    DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
  });
  var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
  var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
  if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
    if (!IS_PURE) {
      defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
    }
    for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
      var constant = DOMExceptionConstants[key];
      var constantName = constant.s;
      if (!hasOwn(PolyfilledDOMException, constantName)) {
        defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
      }
    }
  }
  return web_domException_stack;
}

var web_domException_toStringTag = {};

var setToStringTag;
var hasRequiredSetToStringTag;
function requireSetToStringTag() {
  if (hasRequiredSetToStringTag) return setToStringTag;
  hasRequiredSetToStringTag = 1;
  var defineProperty = requireObjectDefineProperty().f;
  var hasOwn = requireHasOwnProperty();
  var wellKnownSymbol = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  setToStringTag = function setToStringTag(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, {
        configurable: true,
        value: TAG
      });
    }
  };
  return setToStringTag;
}

var hasRequiredWeb_domException_toStringTag;
function requireWeb_domException_toStringTag() {
  if (hasRequiredWeb_domException_toStringTag) return web_domException_toStringTag;
  hasRequiredWeb_domException_toStringTag = 1;
  var getBuiltIn = requireGetBuiltIn();
  var setToStringTag = requireSetToStringTag();
  var DOM_EXCEPTION = 'DOMException';

  // `DOMException.prototype[@@toStringTag]` property
  setToStringTag(getBuiltIn(DOM_EXCEPTION), DOM_EXCEPTION);
  return web_domException_toStringTag;
}

var path;
var hasRequiredPath;
function requirePath() {
  if (hasRequiredPath) return path;
  hasRequiredPath = 1;
  var globalThis = requireGlobalThis();
  path = globalThis;
  return path;
}

var atob$1;
var hasRequiredAtob;
function requireAtob() {
  if (hasRequiredAtob) return atob$1;
  hasRequiredAtob = 1;
  requireEs_error_toString();
  requireEs_object_toString();
  requireWeb_atob();
  requireWeb_domException_constructor();
  requireWeb_domException_stack();
  requireWeb_domException_toStringTag();
  var path = requirePath();
  atob$1 = path.atob;
  return atob$1;
}

requireAtob();

// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
var _a;
var decodeMap = new Map([[0, 65533],
// C1 Unicode control character reference replacements
[128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]);
/**
 * Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
 */
var fromCodePoint =
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, n/no-unsupported-features/es-builtins
(_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : codePoint => {
  var output = "";
  if (codePoint > 65535) {
    codePoint -= 65536;
    output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
    codePoint = 56320 | codePoint & 1023;
  }
  output += String.fromCharCode(codePoint);
  return output;
};
/**
 * Replace the given code point with a replacement character if it is a
 * surrogate or is outside the valid range. Otherwise return the code
 * point unchanged.
 */
function replaceCodePoint(codePoint) {
  var _a;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
}

/*
 * Shared base64 decode helper for generated decode data.
 * Assumes global atob is available.
 */
function decodeBase64(input) {
  var binary =
  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  typeof atob === "function" ?
  // Browser (and Node >=16)
  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  atob(input) :
  // Older Node versions (<16)
  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  typeof Buffer.from === "function" ?
  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  Buffer.from(input, "base64").toString("binary") :
  // eslint-disable-next-line unicorn/no-new-buffer, n/no-deprecated-api
  new Buffer(input, "base64").toString("binary");
  var evenLength = binary.length & -2; // Round down to even length
  var out = new Uint16Array(evenLength / 2);
  for (var index = 0, outIndex = 0; index < evenLength; index += 2) {
    var lo = binary.charCodeAt(index);
    var hi = binary.charCodeAt(index + 1);
    out[outIndex++] = lo | hi << 8;
  }
  return out;
}

// Generated using scripts/write-decode-map.ts
var htmlDecodeTree = /* #__PURE__ */decodeBase64("QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IAAOA12J/c8iFvaxBhAAhOVGFjZGZnbG1vcHFzdHV4owOlA6kDsAO/A8IDxgPNA9ID8gP9AwEEFAQeBCAEJQRHAEphSAA7gNAA0EBjAHUAdABlADuAyQDJQIABYWl5ALYDuQO+A/Ihb24aYXIAYwA7gMoAykAtZG8AdAAWYXIAAOA12AjdcgBhAHYAZQA7gMgAyEDlIm1lbnQAoAgiAAFhcNYD2QNjAHIAEmF0AHkAUwLhAwAAAADpA20lYWxsU3F1YXJlAACg+yVlJ3J5U21hbGxTcXVhcmUAAKCrJQABZ3D2A/kDbwBuABhhZgAA4DXYPN3zImlsb26VY3UAAAFhaQYEDgRsAFSgdSppImxkZQAAoEIi7CNpYnJpdW0AoMwhAAFjaRgEGwRyAACgMCFtAACgcyphAJdjbQBsADuAywDLQAABaXApBC0E8yF0cwCgAyLvJG5lbnRpYWxFAKBHIYACY2Zpb3MAPQQ/BEMEXQRyBHkAJGRyAADgNdgJ3WwibGVkAFMCTAQAAAAAVARtJWFsbFNxdWFyZQAAoPwlZSdyeVNtYWxsU3F1YXJlAACgqiVwA2UEAABpBAAAAABtBGYAAOA12D3dwSFsbACgACLyI2llcnRyZgCgMSFjAPIAcQQABkpUYWJjZGZnb3JzdIgEiwSOBJMElwSkBKcEqwStBLIE5QTqBGMAeQADZDuAPgA+QO0hbWFkoJMD3GNyImV2ZQAeYYABZWl5AJ0EoASjBOQhaWwiYXIAYwAcYRNkbwB0ACBhcgAA4DXYCt0AoNkicABmAADgNdg+3eUiYXRlcgADRUZHTFNUvwTIBM8E1QTZBOAEcSJ1YWwATKBlIuUhc3MAoNsidSRsbEVxdWFsAACgZyJyI2VhdGVyAACgoirlIXNzAKB3IuwkYW50RXF1YWwAoH4qaSJsZGUAAKBzImMAcgAA4DXYotwAoGsiAARBYWNmaW9zdfkE/QQFBQgFCwUTBSIFKwVSIkRjeQAqZAABY3QBBQQFZQBrAMdiXmDpIXJjJGFyAACgDCFsJWJlcnRTcGFjZQAAoAsh8AEYBQAAGwVmAACgDSHpJXpvbnRhbExpbmUAoAAlAAFjdCYFKAXyABIF8iFvayZhbQBwAEQBMQU5BW8AdwBuAEgAdQBtAPAAAAFxInVhbAAAoE8iAAdFSk9hY2RmZ21ub3N0dVMFVgVZBVwFYwVtBXAFcwV6BZAFtgXFBckFzQVjAHkAFWTsIWlnMmFjAHkAAWRjAHUAdABlADuAzQDNQAABaXlnBWwFcgBjADuAzgDOQBhkbwB0ADBhcgAAoBEhcgBhAHYAZQA7gMwAzEAAoREhYXB/BYsFAAFjZ4MFhQVyACphaSNuYXJ5SQAAoEghbABpAGUA8wD6AvQBlQUAAKUFZaAsIgABZ3KaBZ4F8iFhbACgKyLzI2VjdGlvbgCgwiJpI3NpYmxlAAABQ1SsBbEFbyJtbWEAAKBjIGkibWVzAACgYiCAAWdwdAC8Bb8FwwVvAG4ALmFmAADgNdhA3WEAmWNjAHIAAKAQIWkibGRlAChh6wHSBQAA1QVjAHkABmRsADuAzwDPQIACY2Zvc3UA4QXpBe0F8gX9BQABaXnlBegFcgBjADRhGWRyAADgNdgN3XAAZgAA4DXYQd3jAfcFAAD7BXIAAOA12KXc8iFjeQhk6yFjeQRkgANISmFjZm9zAAwGDwYSBhUGHQYhBiYGYwB5ACVkYwB5AAxk8CFwYZpjAAFleRkGHAbkIWlsNmEaZHIAAOA12A7dcABmAADgNdhC3WMAcgAA4DXYptyABUpUYWNlZmxtb3N0AD0GQAZDBl4GawZkB2gHcAd0B80H2gdjAHkACWQ7gDwAPECAAmNtbnByAEwGTwZSBlUGWwb1IXRlOWHiIWRhm2NnAACg6ifsI2FjZXRyZgCgEiFyAACgniGAAWFleQBkBmcGagbyIW9uPWHkIWlsO2EbZAABZnNvBjQHdAAABUFDREZSVFVWYXKABp4GpAbGBssG3AYDByEHwQIqBwABbnKEBowGZyVsZUJyYWNrZXQAAKDoJ/Ihb3cAoZAhQlKTBpcGYQByAACg5CHpJGdodEFycm93AKDGIWUjaWxpbmcAAKAII28A9QGqBgAAsgZiJWxlQnJhY2tldAAAoOYnbgDUAbcGAAC+BmUkZVZlY3RvcgAAoGEp5SJjdG9yQqDDIWEAcgAAoFkpbCJvb3IAAKAKI2kiZ2h0AAABQVbSBtcGciJyb3cAAKCUIeUiY3RvcgCgTikAAWVy4AbwBmUAAKGjIkFW5gbrBnIicm93AACgpCHlImN0b3IAoFopaSNhbmdsZQBCorIi+wYAAAAA/wZhAHIAAKDPKXEidWFsAACgtCJwAIABRFRWAAoHEQcYB+8kd25WZWN0b3IAoFEpZSRlVmVjdG9yAACgYCnlImN0b3JCoL8hYQByAACgWCnlImN0b3JCoLwhYQByAACgUilpAGcAaAB0AGEAcgByAG8A9wDMAnMAAANFRkdMU1Q/B0cHTgdUB1gHXwfxJXVhbEdyZWF0ZXIAoNoidSRsbEVxdWFsAACgZiJyI2VhdGVyAACgdiLlIXNzAKChKuwkYW50RXF1YWwAoH0qaSJsZGUAAKByInIAAOA12A/dZaDYIuYjdGFycm93AKDaIWkiZG90AD9hgAFucHcAege1B7kHZwAAAkxSbHKCB5QHmwerB+UhZnQAAUFSiAeNB3Iicm93AACg9SfpJGdodEFycm93AKD3J+kkZ2h0QXJyb3cAoPYn5SFmdAABYXLcAqEHaQBnAGgAdABhAHIAcgBvAPcA5wJpAGcAaAB0AGEAcgByAG8A9wDuAmYAAOA12EPdZQByAAABTFK/B8YHZSRmdEFycm93AACgmSHpJGdodEFycm93AKCYIYABY2h0ANMH1QfXB/IAWgYAoLAh8iFva0FhAKBqIgAEYWNlZmlvc3XpB+wH7gf/BwMICQgOCBEIcAAAoAUpeQAcZAABZGzyB/kHaSR1bVNwYWNlAACgXyBsI2ludHJmAACgMyFyAADgNdgQ3e4jdXNQbHVzAKATInAAZgAA4DXYRN1jAPIA/gecY4AESmFjZWZvc3R1ACEIJAgoCDUIgQiFCDsKQApHCmMAeQAKZGMidXRlAENhgAFhZXkALggxCDQI8iFvbkdh5CFpbEVhHWSAAWdzdwA7CGEIfQjhInRpdmWAAU1UVgBECEwIWQhlJWRpdW1TcGFjZQAAoAsgaABpAAABY25SCFMIawBTAHAAYQBjAOUASwhlAHIAeQBUAGgAaQDuAFQI9CFlZAABR0xnCHUIcgBlAGEAdABlAHIARwByAGUAYQB0AGUA8gDrBGUAcwBzAEwAZQBzAPMA2wdMImluZQAKYHIAAOA12BHdAAJCbnB0jAiRCJkInAhyImVhawAAoGAgwiZyZWFraW5nU3BhY2WgYGYAAKAVIUOq7CqzCMIIzQgAAOcIGwkAAAAAAAAtCQAAbwkAAIcJAACdCcAJGQoAADQKAAFvdbYIvAjuI2dydWVudACgYiJwIkNhcAAAoG0ibyh1YmxlVmVydGljYWxCYXIAAKAmIoABbHF4ANII1wjhCOUibWVudACgCSL1IWFsVKBgImkibGRlAADgQiI4A2kic3RzAACgBCJyI2VhdGVyAACjbyJFRkdMU1T1CPoIAgkJCQ0JFQlxInVhbAAAoHEidSRsbEVxdWFsAADgZyI4A3IjZWF0ZXIAAOBrIjgD5SFzcwCgeSLsJGFudEVxdWFsAOB+KjgDaSJsZGUAAKB1IvUhbXBEASAJJwnvI3duSHVtcADgTiI4A3EidWFsAADgTyI4A2UAAAFmczEJRgn0JFRyaWFuZ2xlQqLqIj0JAAAAAEIJYQByAADgzyk4A3EidWFsAACg7CJzAICibiJFR0xTVABRCVYJXAlhCWkJcSJ1YWwAAKBwInIjZWF0ZXIAAKB4IuUhc3MA4GoiOAPsJGFudEVxdWFsAOB9KjgDaSJsZGUAAKB0IuUic3RlZAABR0x1CX8J8iZlYXRlckdyZWF0ZXIA4KIqOAPlI3NzTGVzcwDgoSo4A/IjZWNlZGVzAKGAIkVTjwmVCXEidWFsAADgryo4A+wkYW50RXF1YWwAoOAiAAFlaaAJqQl2JmVyc2VFbGVtZW50AACgDCLnJWh0VHJpYW5nbGVCousitgkAAAAAuwlhAHIAAODQKTgDcSJ1YWwAAKDtIgABcXXDCeAJdSNhcmVTdQAAAWJwywnVCfMhZXRF4I8iOANxInVhbAAAoOIi5SJyc2V0ReCQIjgDcSJ1YWwAAKDjIoABYmNwAOYJ8AkNCvMhZXRF4IIi0iBxInVhbAAAoIgi4yJlZWRzgKGBIkVTVAD6CQAKBwpxInVhbAAA4LAqOAPsJGFudEVxdWFsAKDhImkibGRlAADgfyI4A+UicnNldEXggyLSIHEidWFsAACgiSJpImxkZQCAoUEiRUZUACIKJwouCnEidWFsAACgRCJ1JGxsRXF1YWwAAKBHImkibGRlAACgSSJlJXJ0aWNhbEJhcgAAoCQiYwByAADgNdip3GkAbABkAGUAO4DRANFAnWMAB0VhY2RmZ21vcHJzdHV2XgphCmgKcgp2CnoKgQqRCpYKqwqtCrsKyArNCuwhaWdSYWMAdQB0AGUAO4DTANNAAAFpeWwKcQpyAGMAO4DUANRAHmRiImxhYwBQYXIAAOA12BLdcgBhAHYAZQA7gNIA0kCAAWFlaQCHCooKjQpjAHIATGFnAGEAqWNjInJvbgCfY3AAZgAA4DXYRt3lI25DdXJseQABRFGeCqYKbyV1YmxlUXVvdGUAAKAcIHUib3RlAACgGCAAoFQqAAFjbLEKtQpyAADgNdiq3GEAcwBoADuA2ADYQGkAbAHACsUKZABlADuA1QDVQGUAcwAAoDcqbQBsADuA1gDWQGUAcgAAAUJQ0wrmCgABYXLXCtoKcgAAoD4gYQBjAAABZWvgCuIKAKDeI2UAdAAAoLQjYSVyZW50aGVzaXMAAKDcI4AEYWNmaGlsb3JzAP0KAwsFCwkLCwsMCxELIwtaC3IjdGlhbEQAAKACInkAH2RyAADgNdgT3WkApmOgY/Ujc01pbnVzsWAAAWlwFQsgC24AYwBhAHIAZQBwAGwAYQBuAOUACgVmAACgGSGAobsqZWlvACoLRQtJC+MiZWRlc4CheiJFU1QANAs5C0ALcSJ1YWwAAKCvKuwkYW50RXF1YWwAoHwiaSJsZGUAAKB+Im0AZQAAoDMgAAFkcE0LUQv1IWN0AKAPIm8jcnRpb24AYaA3ImwAAKAdIgABY2leC2ILcgAA4DXYq9yoYwACVWZvc2oLbwtzC3cLTwBUADuAIgAiQHIAAOA12BTdcABmAACgGiFjAHIAAOA12KzcAAZCRWFjZWZoaW9yc3WPC5MLlwupC7YL2AvbC90LhQyTDJoMowzhIXJyAKAQKUcAO4CuAK5AgAFjbnIAnQugC6ML9SF0ZVRhZwAAoOsncgB0oKAhbAAAoBYpgAFhZXkArwuyC7UL8iFvblhh5CFpbFZhIGR2oBwhZSJyc2UAAAFFVb8LzwsAAWxxwwvIC+UibWVudACgCyL1JGlsaWJyaXVtAKDLIXAmRXF1aWxpYnJpdW0AAKBvKXIAAKAcIW8AoWPnIWh0AARBQ0RGVFVWYewLCgwQDDIMNwxeDHwM9gIAAW5y8Av4C2clbGVCcmFja2V0AACg6SfyIW93AKGSIUJM/wsDDGEAcgAAoOUhZSRmdEFycm93AACgxCFlI2lsaW5nAACgCSNvAPUBFgwAAB4MYiVsZUJyYWNrZXQAAKDnJ24A1AEjDAAAKgxlJGVWZWN0b3IAAKBdKeUiY3RvckKgwiFhAHIAAKBVKWwib29yAACgCyMAAWVyOwxLDGUAAKGiIkFWQQxGDHIicm93AACgpiHlImN0b3IAoFspaSNhbmdsZQBCorMiVgwAAAAAWgxhAHIAAKDQKXEidWFsAACgtSJwAIABRFRWAGUMbAxzDO8kd25WZWN0b3IAoE8pZSRlVmVjdG9yAACgXCnlImN0b3JCoL4hYQByAACgVCnlImN0b3JCoMAhYQByAACgUykAAXB1iQyMDGYAAKAdIe4kZEltcGxpZXMAoHAp6SRnaHRhcnJvdwCg2yEAAWNongyhDHIAAKAbIQCgsSHsJGVEZWxheWVkAKD0KYAGSE9hY2ZoaW1vcXN0dQC/DMgMzAzQDOIM5gwKDQ0NFA0ZDU8NVA1YDQABQ2PDDMYMyCFjeSlkeQAoZEYiVGN5ACxkYyJ1dGUAWmEAorwqYWVpedgM2wzeDOEM8iFvbmBh5CFpbF5hcgBjAFxhIWRyAADgNdgW3e8hcnQAAkRMUlXvDPYM/QwEDW8kd25BcnJvdwAAoJMhZSRmdEFycm93AACgkCHpJGdodEFycm93AKCSIXAjQXJyb3cAAKCRIechbWGjY+EkbGxDaXJjbGUAoBgicABmAADgNdhK3XICHw0AAAAAIg10AACgGiLhIXJlgKGhJUlTVQAqDTINSg3uJXRlcnNlY3Rpb24AoJMidQAAAWJwNw1ADfMhZXRFoI8icSJ1YWwAAKCRIuUicnNldEWgkCJxInVhbAAAoJIibiJpb24AAKCUImMAcgAA4DXYrtxhAHIAAKDGIgACYmNtcF8Nag2ODZANc6DQImUAdABFoNAicSJ1YWwAAKCGIgABY2huDYkNZSJlZHMAgKF7IkVTVAB4DX0NhA1xInVhbAAAoLAq7CRhbnRFcXVhbACgfSJpImxkZQAAoH8iVABoAGEA9ADHCwCgESIAodEiZXOVDZ8NciJzZXQARaCDInEidWFsAACghyJlAHQAAKDRIoAFSFJTYWNmaGlvcnMAtQ27Db8NyA3ODdsN3w3+DRgOHQ4jDk8AUgBOADuA3gDeQMEhREUAoCIhAAFIY8MNxg1jAHkAC2R5ACZkAAFidcwNzQ0JYKRjgAFhZXkA1A3XDdoN8iFvbmRh5CFpbGJhImRyAADgNdgX3QABZWnjDe4N8gHoDQAA7Q3lImZvcmUAoDQiYQCYYwABY27yDfkNayNTcGFjZQAA4F8gCiDTInBhY2UAoAkg7CFkZYChPCJFRlQABw4MDhMOcSJ1YWwAAKBDInUkbGxFcXVhbAAAoEUiaSJsZGUAAKBIInAAZgAA4DXYS93pI3BsZURvdACg2yAAAWN0Jw4rDnIAAOA12K/c8iFva2Zh4QpFDlYOYA5qDgAAbg5yDgAAAAAAAAAAAAB5DnwOqA6zDgAADg8RDxYPGg8AAWNySA5ODnUAdABlADuA2gDaQHIAb6CfIeMhaXIAoEkpcgDjAVsOAABdDnkADmR2AGUAbGEAAWl5Yw5oDnIAYwA7gNsA20AjZGIibGFjAHBhcgAA4DXYGN1yAGEAdgBlADuA2QDZQOEhY3JqYQABZGl/Dp8OZQByAAABQlCFDpcOAAFhcokOiw5yAF9gYQBjAAABZWuRDpMOAKDfI2UAdAAAoLUjYSVyZW50aGVzaXMAAKDdI28AbgBQoMMi7CF1cwCgjiIAAWdwqw6uDm8AbgByYWYAAOA12EzdAARBREVUYWRwc78O0g7ZDuEOBQPqDvMOBw9yInJvdwDCoZEhyA4AAMwOYQByAACgEilvJHduQXJyb3cAAKDFIW8kd25BcnJvdwAAoJUhcSV1aWxpYnJpdW0AAKBuKWUAZQBBoKUiciJyb3cAAKClIW8AdwBuAGEAcgByAG8A9wAQA2UAcgAAAUxS+Q4AD2UkZnRBcnJvdwAAoJYh6SRnaHRBcnJvdwCglyFpAGyg0gNvAG4ApWPpIW5nbmFjAHIAAOA12LDcaSJsZGUAaGFtAGwAO4DcANxAgAREYmNkZWZvc3YALQ8xDzUPNw89D3IPdg97D4AP4SFzaACgqyJhAHIAAKDrKnkAEmThIXNobKCpIgCg5ioAAWVyQQ9DDwCgwSKAAWJ0eQBJD00Paw9hAHIAAKAWIGmgFiDjIWFsAAJCTFNUWA9cD18PZg9hAHIAAKAjIukhbmV8YGUkcGFyYXRvcgAAoFgnaSJsZGUAAKBAItQkaGluU3BhY2UAoAogcgAA4DXYGd1wAGYAAOA12E3dYwByAADgNdix3GQiYXNoAACgqiKAAmNlZm9zAI4PkQ+VD5kPng/pIXJjdGHkIWdlAKDAInIAAOA12BrdcABmAADgNdhO3WMAcgAA4DXYstwAAmZpb3OqD64Prw+0D3IAAOA12BvdnmNwAGYAAOA12E/dYwByAADgNdiz3IAEQUlVYWNmb3N1AMgPyw/OD9EP2A/gD+QP6Q/uD2MAeQAvZGMAeQAHZGMAeQAuZGMAdQB0AGUAO4DdAN1AAAFpedwP3w9yAGMAdmErZHIAAOA12BzdcABmAADgNdhQ3WMAcgAA4DXYtNxtAGwAeGEABEhhY2RlZm9z/g8BEAUQDRAQEB0QIBAkEGMAeQAWZGMidXRlAHlhAAFheQkQDBDyIW9ufWEXZG8AdAB7YfIBFRAAABwQbwBXAGkAZAB0AOgAVAhhAJZjcgAAoCghcABmAACgJCFjAHIAAOA12LXc4QtCEEkQTRAAAGcQbRByEAAAAAAAAAAAeRCKEJcQ8hD9EAAAGxEhETIROREAAD4RYwB1AHQAZQA7gOEA4UByImV2ZQADYYCiPiJFZGl1eQBWEFkQWxBgEGUQAOA+IjMDAKA/InIAYwA7gOIA4kB0AGUAO4C0ALRAMGRsAGkAZwA7gOYA5kByoGEgAOA12B7dcgBhAHYAZQA7gOAA4EAAAWVwfBCGEAABZnCAEIQQ8yF5bQCgNSHoAIMQaABhALFjAAFhcI0QWwAAAWNskRCTEHIAAWFnAACgPypkApwQAAAAALEQAKInImFkc3ajEKcQqRCuEG4AZAAAoFUqAKBcKmwib3BlAACgWCoAoFoqAKMgImVsbXJzersQvRDAEN0Q5RDtEACgpCllAACgICJzAGQAYaAhImEEzhDQENIQ1BDWENgQ2hDcEACgqCkAoKkpAKCqKQCgqykAoKwpAKCtKQCgrikAoK8pdAB2oB8iYgBkoL4iAKCdKQABcHTpEOwQaAAAoCIixWDhIXJyAKB8IwABZ3D1EPgQbwBuAAVhZgAA4DXYUt0Ao0giRWFlaW9wBxEJEQ0RDxESERQRAKBwKuMhaXIAoG8qAKBKImQAAKBLInMAJ2DyIW94ZaBIIvEADhFpAG4AZwA7gOUA5UCAAWN0eQAmESoRKxFyAADgNdi23CpgbQBwAGWgSCLxAPgBaQBsAGQAZQA7gOMA40BtAGwAO4DkAORAAAFjaUERRxFvAG4AaQBuAPQA6AFuAHQAAKARKgAITmFiY2RlZmlrbG5vcHJzdWQRaBGXEZ8RpxGrEdIR1hErEjASexKKEn0RThNbE3oTbwB0AACg7SoAAWNybBGJEWsAAAJjZXBzdBF4EX0RghHvIW5nAKBMInAjc2lsb24A9mNyImltZQAAoDUgaQBtAGWgPSJxAACgzSJ2AY0RkRFlAGUAAKC9ImUAZABnoAUjZQAAoAUjcgBrAHSgtSPiIXJrAKC2IwABb3mjEaYRbgDnAHcRMWTxIXVvAKAeIIACY21wcnQAtBG5Eb4RwRHFEeEhdXPloDUi5ABwInR5dgAAoLApcwDpAH0RbgBvAPUA6gCAAWFodwDLEcwRzhGyYwCgNiHlIWVuAKBsInIAAOA12B/dZwCAA2Nvc3R1dncA4xHyEQUSEhIhEiYSKRKAAWFpdQDpEesR7xHwAKMFcgBjAACg7yVwAACgwyKAAWRwdAD4EfwRABJvAHQAAKAAKuwhdXMAoAEqaSJtZXMAAKACKnECCxIAAAAADxLjIXVwAKAGKmEAcgAAoAUm8iNpYW5nbGUAAWR1GhIeEu8hd24AoL0lcAAAoLMlcCJsdXMAAKAEKmUA5QBCD+UAkg9hInJvdwAAoA0pgAFha28ANhJoEncSAAFjbjoSZRJrAIABbHN0AEESRxJNEm8jemVuZ2UAAKDrKXEAdQBhAHIA5QBcBPIjaWFuZ2xlgKG0JWRscgBYElwSYBLvIXduAKC+JeUhZnQAoMIlaSJnaHQAAKC4JWsAAKAjJLEBbRIAAHUSsgFxEgAAcxIAoJIlAKCRJTQAAKCTJWMAawAAoIglAAFlb38ShxJx4D0A5SD1IWl2AOBhIuUgdAAAoBAjAAJwdHd4kRKVEpsSnxJmAADgNdhT3XSgpSJvAG0AAKClIvQhaWUAoMgiAAZESFVWYmRobXB0dXayEsES0RLgEvcS+xIKExoTHxMjEygTNxMAAkxSbHK5ErsSvRK/EgCgVyUAoFQlAKBWJQCgUyUAolAlRFVkdckSyxLNEs8SAKBmJQCgaSUAoGQlAKBnJQACTFJsctgS2hLcEt4SAKBdJQCgWiUAoFwlAKBZJQCjUSVITFJobHLrEu0S7xLxEvMS9RIAoGwlAKBjJQCgYCUAoGslAKBiJQCgXyVvAHgAAKDJKQACTFJscgITBBMGEwgTAKBVJQCgUiUAoBAlAKAMJQCiACVEVWR1EhMUExYTGBMAoGUlAKBoJQCgLCUAoDQlaSJudXMAAKCfIuwhdXMAoJ4iaSJtZXMAAKCgIgACTFJsci8TMRMzEzUTAKBbJQCgWCUAoBglAKAUJQCjAiVITFJobHJCE0QTRhNIE0oTTBMAoGolAKBhJQCgXiUAoDwlAKAkJQCgHCUAAWV2UhNVE3YA5QD5AGIAYQByADuApgCmQAACY2Vpb2ITZhNqE24TcgAA4DXYt9xtAGkAAKBPIG0A5aA9IogRbAAAoVwAYmh0E3YTAKDFKfMhdWIAoMgnbAF+E4QTbABloCIgdAAAoCIgcAAAoU4iRWWJE4sTAKCuKvGgTyI8BeEMqRMAAN8TABQDFB8UAAAjFDQUAAAAAIUUAAAAAI0UAAAAANcU4xT3FPsUAACIFQAAlhWAAWNwcgCuE7ET1RP1IXRlB2GAoikiYWJjZHMAuxO/E8QTzhPSE24AZAAAoEQqciJjdXAAAKBJKgABYXXIE8sTcAAAoEsqcAAAoEcqbwB0AACgQCoA4CkiAP4AAWVv2RPcE3QAAKBBIO4ABAUAAmFlaXXlE+8T9RP4E/AB6hMAAO0TcwAAoE0qbwBuAA1hZABpAGwAO4DnAOdAcgBjAAlhcABzAHOgTCptAACgUCpvAHQAC2GAAWRtbgAIFA0UEhRpAGwAO4C4ALhAcCJ0eXYAAKCyKXQAAIGiADtlGBQZFKJAcgBkAG8A9ABiAXIAAOA12CDdgAFjZWkAKBQqFDIUeQBHZGMAawBtoBMn4SFyawCgEyfHY3IAAKPLJUVjZWZtcz8UQRRHFHcUfBSAFACgwykAocYCZWxGFEkUcQAAoFciZQBhAlAUAAAAAGAUciJyb3cAAAFsclYUWhTlIWZ0AKC6IWkiZ2h0AACguyGAAlJTYWNkAGgUaRRrFG8UcxSuYACgyCRzAHQAAKCbIukhcmMAoJoi4SFzaACgnSJuImludAAAoBAqaQBkAACg7yrjIWlyAKDCKfUhYnN1oGMmaQB0AACgYybsApMUmhS2FAAAwxRvAG4AZaA6APGgVCKrAG0CnxQAAAAAoxRhAHSgLABAYAChASJmbKcUqRTuABMNZQAAAW14rhSyFOUhbnQAoAEiZQDzANIB5wG6FAAAwBRkoEUibwB0AACgbSpuAPQAzAGAAWZyeQDIFMsUzhQA4DXYVN1vAOQA1wEAgakAO3MeAdMUcgAAoBchAAFhb9oU3hRyAHIAAKC1IXMAcwAAoBcnAAFjdeYU6hRyAADgNdi43AABYnDuFPIUZaDPKgCg0SploNAqAKDSKuQhb3QAoO8igANkZWxwcnZ3AAYVEBUbFSEVRBVlFYQV4SFycgABbHIMFQ4VAKA4KQCgNSlwAhYVAAAAABkVcgAAoN4iYwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWlsN2E6ZHIAAOA12CjdciJlZW4AOGFjAHkARWRjAHkAXGRwAGYAAOA12FzdYwByAADgNdjA3IALQUJFSGFiY2RlZmdoamxtbm9wcnN0dXYAXhxtHHEcdRx5HN8cBx0dHTwd3B3tHfEdAR4EHh0eLB5FHrwewx7hHgkfPR9LH4ABYXJ0AGQcZxxpHHIA8gBvB/IAxQLhIWlsAKAbKeEhcnIAoA4pZ6BmIgCgiyphAHIAAKBiKWMJjRwAAJAcAACVHAAAAAAAAAAAAACZHJwcAACmHKgcrRwAANIc9SF0ZTph7SJwdHl2AKC0KXIAYQDuAFoG4iFkYbtjZwAAoegnZGyhHKMcAKCRKeUAiwYAoIUqdQBvADuAqwCrQHIAgKOQIWJmaGxwc3QAuhy/HMIcxBzHHMoczhxmoOQhcwAAoB8pcwAAoB0p6wCyGnAAAKCrIWwAAKA5KWkAbQAAoHMpbAAAoKIhAKGrKmFl1hzaHGkAbAAAoBkpc6CtKgDgrSoA/oABYWJyAOUc6RztHHIAcgAAoAwpcgBrAACgcicAAWFr8Rz4HGMAAAFla/Yc9xx7YFtgAAFlc/wc/hwAoIspbAAAAWR1Ax0FHQCgjykAoI0pAAJhZXV5Dh0RHRodHB3yIW9uPmEAAWRpFR0YHWkAbAA8YewAowbiAPccO2QAAmNxcnMkHScdLB05HWEAAKA2KXUAbwDyoBwgqhEAAWR1MB00HeghYXIAoGcpcyJoYXIAAKBLKWgAAKCyIQCiZCJmZ3FzRB1FB5Qdnh10AIACYWhscnQATh1WHWUdbB2NHXIicm93AHSgkCFhAOkAzxxhI3Jwb29uAAABZHVeHWId7yF3bgCgvSFwAACgvCHlJGZ0YXJyb3dzAKDHIWkiZ2h0AIABYWhzAHUdex2DHXIicm93APOglCGdBmEAcgBwAG8AbwBuAPMAzgtxAHUAaQBnAGEAcgByAG8A9wBlGugkcmVldGltZXMAoMsi8aFkIk0HAACaHWwAYQBuAPQAXgcAon0qY2Rnc6YdqR2xHbcdYwAAoKgqbwB0AG+gfypyoIEqAKCDKmXg2iIA/nMAAKCTKoACYWRlZ3MAwB3GHcod1h3ZHXAAcAByAG8A+ACmHG8AdAAAoNYicQAAAWdxzx3SHXQA8gBGB2cAdADyAHQcdADyAFMHaQDtAGMHgAFpbHIA4h3mHeod8yFodACgfClvAG8A8gDKBgDgNdgp3UWgdiIAoJEqYQH1Hf4dcgAAAWR1YB35HWygvCEAoGopbABrAACghCVjAHkAWWQAomoiYWNodAweDx4VHhkecgDyAGsdbwByAG4AZQDyAGAW4SFyZACgaylyAGkAAKD6JQABaW8hHiQe5CFvdEBh9SFzdGGgsCPjIWhlAKCwIwACRWFlczMeNR48HkEeAKBoInAAcKCJKvIhb3gAoIkqcaCHKvGghyo0HmkAbQAAoOYiAARhYm5vcHR3elIeXB5fHoUelh6mHqsetB4AAW5yVh5ZHmcAAKDsJ3IAAKD9IXIA6wCwBmcAgAFsbXIAZh52Hnse5SFmdAABYXKIB2weaQBnAGgAdABhAHIAcgBvAPcAkwfhInBzdG8AoPwnaQBnAGgAdABhAHIAcgBvAPcAmgdwI2Fycm93AAABbHKNHpEeZQBmAPQAxhxpImdodAAAoKwhgAFhZmwAnB6fHqIecgAAoIUpAOA12F3ddQBzAACgLSppIm1lcwAAoDQqYQGvHrMecwB0AACgFyLhAIoOZaHKJbkeRhLuIWdlAKDKJWEAcgBsoCgAdAAAoJMpgAJhY2htdADMHs8e1R7bHt0ecgDyAJ0GbwByAG4AZQDyANYWYQByAGSgyyEAoG0pAKAOIHIAaQAAoL8iAANhY2hpcXTrHu8e1QfzHv0eBh/xIXVvAKA5IHIAAOA12MHcbQDloXIi+h4AAPweAKCNKgCgjyoAAWJ19xwBH28AcqAYIACgGiDyIW9rQmEAhDwAO2NkaGlscXJCBhcfxh0gHyQfKB8sHzEfAAFjaRsfHR8AoKYqcgAAoHkqcgBlAOUAkx3tIWVzAKDJIuEhcnIAoHYpdSJlc3QAAKB7KgABUGk1HzkfYQByAACglillocMlAgdfEnIAAAFkdUIfRx9zImhhcgAAoEop6CFhcgCgZikAAWVuTx9WH3IjdG5lcXEAAOBoIgD+xQBUHwAHRGFjZGVmaGlsbm9wc3VuH3Ifoh+rH68ftx+7H74f5h/uH/MfBwj/HwsgxCFvdACgOiIAAmNscHJ5H30fiR+eH3IAO4CvAK9AAAFldIEfgx8AoEImZaAgJ3MAZQAAoCAnc6CmIXQAbwCAoaYhZGx1AJQfmB+cH28AdwDuAHkDZQBmAPQA6gbwAOkO6yFlcgCgriUAAW95ph+qH+0hbWEAoCkqPGThIXNoAKAUIOElc3VyZWRhbmdsZQCgISJyAADgNdgq3W8AAKAnIYABY2RuAMQfyR/bH3IAbwA7gLUAtUBhoiMi0B8AANMf1x9zAPQAKxFpAHIAAKDwKm8AdAA7gLcAt0B1AHMA4qESIh4TAADjH3WgOCIAoCoqYwHqH+0fcAAAoNsq8gB+GnAAbAB1APMACAgAAWRw9x/7H+UhbHMAoKciZgAA4DXYXt0AAWN0AyAHIHIAAOA12MLc8CFvcwCgPiJsobwDECAVIPQiaW1hcACguCJhAPAAEyAADEdMUlZhYmNkZWZnaGlqbG1vcHJzdHV2dzwgRyBmIG0geSCqILgg2iDeIBEhFSEyIUMhTSFQIZwhnyHSIQAiIyKLIrEivyIUIwABZ3RAIEMgAODZIjgD9uBrItIgBwmAAWVsdABNIF8gYiBmAHQAAAFhclMgWCByInJvdwAAoM0h6SRnaHRhcnJvdwCgziEA4NgiOAP24Goi0iBfCekkZ2h0YXJyb3cAoM8hAAFEZHEgdSDhIXNoAKCvIuEhc2gAoK4igAJiY25wdACCIIYgiSCNIKIgbABhAACgByL1IXRlRGFnAADgICLSIACiSSJFaW9wlSCYIJwgniAA4HAqOANkAADgSyI4A3MASWFyAG8A+AAyCnUAcgBhoG4mbADzoG4mmwjzAa8gAACzIHAAO4CgAKBAbQBwAOXgTiI4AyoJgAJhZW91eQDBIMogzSDWINkg8AHGIAAAyCAAoEMqbwBuAEhh5CFpbEZhbgBnAGSgRyJvAHQAAOBtKjgDcAAAoEIqPWThIXNoAKATIACjYCJBYWRxc3jpIO0g+SD+IAIhDCFyAHIAAKDXIXIAAAFocvIg9SBrAACgJClvoJch9wAGD28AdAAA4FAiOAN1AGkA9gC7CAABZWkGIQohYQByAACgKCntAN8I6SFzdPOgBCLlCHIAAOA12CvdAAJFZXN0/wgcISshLiHxoXEiIiEAABMJ8aFxIgAJAAAnIWwAYQBuAPQAEwlpAO0AGQlyoG8iAKBvIoABQWFwADghOyE/IXIA8gBeIHIAcgAAoK4hYQByAACg8ipzogsiSiEAAAAAxwtkoPwiAKD6ImMAeQBaZIADQUVhZGVzdABcIV8hYiFmIWkhkyGWIXIA8gBXIADgZiI4A3IAcgAAoJohcgAAoCUggKFwImZxcwBwIYQhjiF0AAABYXJ1IXohcgByAG8A9wBlIWkAZwBoAHQAYQByAHIAbwD3AD4h8aFwImAhAACKIWwAYQBuAPQAZwlz4H0qOAMAoG4iaQDtAG0JcqBuImkA5aDqIkUJaQDkADoKAAFwdKMhpyFmAADgNdhf3YCBrAA7aW4AriGvIcchrEBuAIChCSJFZHYAtyG6Ib8hAOD5IjgDbwB0AADg9SI4A+EB1gjEIcYhAKD3IgCg9iJpAHagDCLhAagJzyHRIQCg/iIAoP0igAFhb3IA2CHsIfEhcgCAoSYiYXN0AOAh5SHpIWwAbABlAOwAywhsAADg/SrlIADgAiI4A2wiaW50AACgFCrjoYAi9yEAAPohdQDlAJsJY+CvKjgDZaCAIvEAkwkAAkFhaXQHIgoiFyIeInIA8gBsIHIAcgAAoZshY3cRIhQiAOAzKTgDAOCdITgDZyRodGFycm93AACgmyFyAGkA5aDrIr4JgANjaGltcHF1AC8iPCJHIpwhTSJQIloigKGBImNlcgA2Iv0JOSJ1AOUABgoA4DXYw9zvIXJ0bQKdIQAAAABEImEAcgDhAOEhbQBloEEi8aBEIiYKYQDyAMsIcwB1AAABYnBWIlgi5QDUCeUA3wmAAWJjcABgInMieCKAoYQiRWVzAGci7glqIgDgxSo4A2UAdABl4IIi0iBxAPGgiCJoImMAZaCBIvEA/gmAoYUiRWVzAH8iFgqCIgDgxio4A2UAdABl4IMi0iBxAPGgiSKAIgACZ2lscpIilCKaIpwi7AAMCWwAZABlADuA8QDxQOcAWwlpI2FuZ2xlAAABbHKkIqoi5SFmdGWg6iLxAEUJaSJnaHQAZaDrIvEAvgltoL0DAKEjAGVzuCK8InIAbwAAoBYhcAAAoAcggARESGFkZ2lscnMAziLSItYi2iLeIugi7SICIw8j4SFzaACgrSLhIXJyAKAEKXAAAOBNItIg4SFzaACgrCIAAWV04iLlIgDgZSLSIADgPgDSIG4iZmluAACg3imAAUFldADzIvci+iJyAHIAAKACKQDgZCLSIHLgPADSIGkAZQAA4LQi0iAAAUF0BiMKI3IAcgAAoAMp8iFpZQDgtSLSIGkAbQAA4Dwi0iCAAUFhbgAaIx4jKiNyAHIAAKDWIXIAAAFociMjJiNrAACgIylvoJYh9wD/DuUhYXIAoCcpUxJqFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVCMAAF4jaSN/I4IjjSOeI8AUAAAAAKYjwCMAANoj3yMAAO8jHiQvJD8kRCQAAWNzVyNsFHUAdABlADuA8wDzQAABaXlhI2cjcgBjoJoiO4D0APRAPmSAAmFiaW9zAHEjdCN3I3EBeiNzAOgAdhTsIWFjUWF2AACgOCrvIWxkAKC8KewhaWdTYQABY3KFI4kjaQByAACgvykA4DXYLN1vA5QjAAAAAJYjAACcI24A22JhAHYAZQA7gPIA8kAAoMEpAAFibaEjjAphAHIAAKC1KQACYWNpdKwjryO6I70jcgDyAFkUAAFpcrMjtiNyAACgvinvIXNzAKC7KW4A5QDZCgCgwCmAAWFlaQDFI8gjyyNjAHIATWFnAGEAyWOAAWNkbgDRI9Qj1iPyIW9uv2MAoLYpdQDzAHgBcABmAADgNdhg3YABYWVsAOQj5yPrI3IAAKC3KXIAcAAAoLkpdQDzAHwBAKMoImFkaW9zdvkj/CMPJBMkFiQbJHIA8gBeFIChXSplZm0AAyQJJAwkcgBvoDQhZgAAoDQhO4CqAKpAO4C6ALpA5yFvZgCgtiJyAACgVipsIm9wZQAAoFcqAKBbKoABY2xvACMkJSQrJPIACCRhAHMAaAA7gPgA+EBsAACgmCJpAGwBMyQ4JGQAZQA7gPUA9UBlAHMAYaCXInMAAKA2Km0AbAA7gPYA9kDiIWFyAKA9I+EKXiQAAHokAAB8JJQkAACYJKkkAAAAALUkEQsAAPAkAAAAAAQleiUAAIMlcgCAoSUiYXN0AGUkbyQBCwCBtgA7bGokayS2QGwAZQDsABgDaQJ1JAAAAAB4JG0AAKDzKgCg/Sp5AD9kcgCAAmNpbXB0AIUkiCSLJJkSjyRuAHQAJWBvAGQALmBpAGwAAKAwIOUhbmsAoDEgcgAA4DXYLd2AAWltbwCdJKAkpCR2oMYD1WNtAGEA9AD+B24AZQAAoA4m9KHAA64kAAC0JGMjaGZvcmsAAKDUItZjAAFhdbgkxCRuAAABY2u9JMIkawBooA8hAKAOIfYAaRpzAACkKwBhYmNkZW1zdNMkIRPXJNsk4STjJOck6yTjIWlyAKAjKmkAcgAAoCIqAAFvdYsW3yQAoCUqAKByKm4AO4CxALFAaQBtAACgJip3AG8AAKAnKoABaXB1APUk+iT+JO4idGludACgFSpmAADgNdhh3W4AZAA7gKMAo0CApHoiRWFjZWlub3N1ABMlFSUYJRslTCVRJVklSSV1JQCgsypwAACgtyp1AOUAPwtjoK8qgKJ6ImFjZW5zACclLSU0JTYlSSVwAHAAcgBvAPgAFyV1AHIAbAB5AGUA8QA/C/EAOAuAAWFlcwA8JUElRSXwInByb3gAoLkqcQBxAACgtSppAG0AAKDoImkA7QBEC20AZQDzoDIgIguAAUVhcwBDJVclRSXwAEAlgAFkZnAATwtfJXElgAFhbHMAZSVpJW0l7CFhcgCgLiPpIW5lAKASI/UhcmYAoBMjdKAdIu8AWQvyIWVsAKCwIgABY2l9JYElcgAA4DXYxdzIY24iY3NwAACgCCAAA2Zpb3BzdZElKxuVJZolnyWkJXIAAOA12C7dcABmAADgNdhi3XIiaW1lAACgVyBjAHIAAOA12MbcgAFhZW8AqiW6JcAldAAAAWVpryW2JXIAbgBpAG8AbgDzABkFbgB0AACgFipzAHQAZaA/APEACRj0AG0LgApBQkhhYmNkZWZoaWxtbm9wcnN0dXgA4yXyJfYl+iVpJpAmpia9JtUm5ib4JlonaCdxJ3UnnietJ7EnyCfiJ+cngAFhcnQA6SXsJe4lcgDyAJkM8gD6AuEhaWwAoBwpYQByAPIA3BVhAHIAAKBkKYADY2RlbnFydAAGJhAmEyYYJiYmKyZaJgABZXUKJg0mAOA9IjEDdABlAFVhaQDjACAN7SJwdHl2AKCzKWcAgKHpJ2RlbAAgJiImJCYAoJIpAKClKeUA9wt1AG8AO4C7ALtAcgAApZIhYWJjZmhscHN0dz0mQCZFJkcmSiZMJk4mUSZVJlgmcAAAoHUpZqDlIXMAAKAgKQCgMylzAACgHinrALka8ACVHmwAAKBFKWkAbQAAoHQpbAAAoKMhAKCdIQABYWleJmImaQBsAACgGilvAG6gNiJhAGwA8wB2C4ABYWJyAG8mciZ2JnIA8gAvEnIAawAAoHMnAAFha3omgSZjAAABZWt/JoAmfWBdYAABZXOFJocmAKCMKWwAAAFkdYwmjiYAoI4pAKCQKQACYWV1eZcmmiajJqUm8iFvbllhAAFkaZ4moSZpAGwAV2HsAA8M4gCAJkBkAAJjbHFzrSawJrUmuiZhAACgNylkImhhcgAAoGkpdQBvAPKgHSCjAWgAAKCzIYABYWNnAMMm0iaUC2wAgKEcIWlwcwDLJs4migxuAOUAoAxhAHIA9ADaC3QAAKCtJYABaWxyANsm3ybjJvMhaHQAoH0pbwBvAPIANgwA4DXYL90AAWFv6ib1JnIAAAFkde8m8SYAoMEhbKDAIQCgbCl2oMED8WOAAWducwD+Jk4nUCdoAHQAAANhaGxyc3QKJxInISc1Jz0nRydyInJvdwB0oJIhYQDpAFYmYSNycG9vbgAAAWR1GiceJ28AdwDuAPAmcAAAoMAh5SFmdAABYWgnJy0ncgByAG8AdwDzAAkMYQByAHAAbwBvAG4A8wATBGklZ2h0YXJyb3dzAACgySFxAHUAaQBnAGEAcgByAG8A9wBZJugkcmVldGltZXMAoMwiZwDaYmkAbgBnAGQAbwB0AHMAZQDxABwYgAFhaG0AYCdjJ2YncgDyAAkMYQDyABMEAKAPIG8idXN0AGGgsSPjIWhlAKCxI+0haWQAoO4qAAJhYnB0fCeGJ4knmScAAW5ygCeDJ2cAAKDtJ3IAAKD+IXIA6wAcDIABYWZsAI8nkieVJ3IAAKCGKQDgNdhj3XUAcwAAoC4qaSJtZXMAAKA1KgABYXCiJ6gncgBnoCkAdAAAoJQp7yJsaW50AKASKmEAcgDyADwnAAJhY2hxuCe8J6EMwCfxIXVvAKA6IHIAAOA12MfcAAFidYAmxCdvAPKgGSCoAYABaGlyAM4n0ifWJ3IAZQDlAE0n7SFlcwCgyiJpAIChuSVlZmwAXAxjEt4n9CFyaQCgzinsInVoYXIAoGgpAKAeIWENBSgJKA0oSyhVKIYoAACLKLAoAAAAAOMo5ygAABApJCkxKW0pcSmHKaYpAACYKgAAAACxKmMidXRlAFthcQB1AO8ABR+ApHsiRWFjZWlucHN5ABwoHignKCooLygyKEEoRihJKACgtCrwASMoAAAlKACguCpvAG4AYWF1AOUAgw1koLAqaQBsAF9hcgBjAF1hgAFFYXMAOCg6KD0oAKC2KnAAAKC6KmkAbQAAoOki7yJsaW50AKATKmkA7QCIDUFkbwB0AGKixSKRFgAAAABTKACgZiqAA0FhY21zdHgAYChkKG8ocyh1KHkogihyAHIAAKDYIXIAAAFocmkoayjrAJAab6CYIfcAzAd0ADuApwCnQGkAO2D3IWFyAKApKW0AAAFpbn4ozQBuAHUA8wDOAHQAAKA2J3IA7+A12DDdIxkAAmFjb3mRKJUonSisKHIAcAAAoG8mAAFoeZkonChjAHkASWRIZHIAdABtAqUoAAAAAKgoaQDkAFsPYQByAGEA7ABsJDuArQCtQAABZ22zKLsobQBhAAChwwNmdroouijCY4CjPCJkZWdsbnByAMgozCjPKNMo1yjaKN4obwB0AACgairxoEMiCw5FoJ4qAKCgKkWgnSoAoJ8qZQAAoEYi7CF1cwCgJCrhIXJyAKByKWEAcgDyAPwMAAJhZWl07Sj8KAEpCCkAAWxz8Sj4KGwAcwBlAHQAbQDpAH8oaABwAACgMyrwImFyc2wAoOQpAAFkbFoPBSllAACgIyNloKoqc6CsKgDgrCoA/oABZmxwABUpGCkfKfQhY3lMZGKgLwBhoMQpcgAAoD8jZgAA4DXYZN1hAAABZHIoKRcDZQBzAHWgYCZpAHQAAKBgJoABY3N1ADYpRilhKQABYXU6KUApcABzoJMiAOCTIgD+cABzoJQiAOCUIgD+dQAAAWJwSylWKQChjyJlcz4NUCllAHQAZaCPIvEAPw0AoZAiZXNIDVspZQB0AGWgkCLxAEkNAKGhJWFmZilbBHIAZQFrKVwEAKChJWEAcgDyAAMNAAJjZW10dyl7KX8pgilyAADgNdjI3HQAbQDuAM4AaQDsAAYpYQByAOYAVw0AAWFyiimOKXIA5qAGJhESAAFhbpIpoylpImdodAAAAWVwmSmgKXAAcwBpAGwAbwDuANkXaADpAKAkcwCvYIACYmNtbnAArin8KY4NJSooKgCkgiJFZGVtbnByc7wpvinCKcgpzCnUKdgp3CkAoMUqbwB0AACgvSpkoIYibwB0AACgwyr1IWx0AKDBKgABRWXQKdIpAKDLKgCgiiLsIXVzAKC/KuEhcnIAoHkpgAFlaXUA4inxKfQpdAAAoYIiZW7oKewpcQDxoIYivSllAHEA8aCKItEpbQAAoMcqAAFicPgp+ikAoNUqAKDTKmMAgKJ7ImFjZW5zAAcqDSoUKhYqRihwAHAAcgBvAPgAIyh1AHIAbAB5AGUA8QCDDfEAfA2AAWFlcwAcKiIqPShwAHAAcgBvAPgAPChxAPEAOShnAACgaiYApoMiMTIzRWRlaGxtbnBzPCo/KkIqRSpHKlIqWCpjKmcqaypzKncqO4C5ALlAO4CyALJAO4CzALNAAKDGKgABb3NLKk4qdAAAoL4qdQBiAACg2CpkoIcibwB0AACgxCpzAAABb3VdKmAqbAAAoMknYgAAoNcq4SFycgCgeyn1IWx0AKDCKgABRWVvKnEqAKDMKgCgiyLsIXVzAKDAKoABZWl1AH0qjCqPKnQAAKGDImVugyqHKnEA8aCHIkYqZQBxAPGgiyJwKm0AAKDIKgABYnCTKpUqAKDUKgCg1iqAAUFhbgCdKqEqrCpyAHIAAKDZIXIAAAFocqYqqCrrAJUab6CZIfcAxQf3IWFyAKAqKWwAaQBnADuA3wDfQOELzyrZKtwq6SrsKvEqAAD1KjQrAAAAAAAAAAAAAEwrbCsAAHErvSsAAAAAAADRK3IC1CoAAAAA2CrnIWV0AKAWI8RjcgDrAOUKgAFhZXkA4SrkKucq8iFvbmVh5CFpbGNhQmRvAPQAIg5sInJlYwAAoBUjcgAA4DXYMd0AAmVpa2/7KhIrKCsuK/IBACsAAAkrZQAAATRm6g0EK28AcgDlAOsNYQBzorgDECsAAAAAEit5AG0A0WMAAWNuFislK2sAAAFhcxsrIStwAHAAcgBvAPgAFw5pAG0AAKA8InMA8AD9DQABYXMsKyEr8AAXDnIAbgA7gP4A/kDsATgrOyswG2QA5QBnAmUAcwCAgdcAO2JkAEMrRCtJK9dAYaCgInIAAKAxKgCgMCqAAWVwcwBRK1MraSvhAAkh4qKkIlsrXysAAAAAYytvAHQAAKA2I2kAcgAAoPEqb+A12GXdcgBrAACg2irhAHgociJpbWUAAKA0IIABYWlwAHYreSu3K2QA5QC+DYADYWRlbXBzdACFK6MrmiunK6wrsCuzK24iZ2xlAACitSVkbHFykCuUK5ornCvvIXduAKC/JeUhZnRloMMl8QACBwCgXCJpImdodABloLkl8QBdDG8AdAAAoOwlaSJudXMAAKA6KuwhdXMAoDkqYgAAoM0p6SFtZQCgOyrlInppdW0AoOIjgAFjaHQAwivKK80rAAFyecYrySsA4DXYydxGZGMAeQBbZPIhb2tnYQABaW/UK9creAD0ANERaCJlYWQAAAFsct4r5ytlAGYAdABhAHIAcgBvAPcAXQbpJGdodGFycm93AKCgIQAJQUhhYmNkZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg");

/**
 * Bit flags & masks for the binary trie encoding used for entity decoding.
 *
 * Bit layout (16 bits total):
 * 15..14 VALUE_LENGTH   (+1 encoding; 0 => no value)
 * 13     FLAG13.        If valueLength>0: semicolon required flag (implicit ';').
 *                       If valueLength==0: compact run flag.
 * 12..7  BRANCH_LENGTH  Branch length (0 => single branch in 6..0 if jumpOffset==char) OR run length (when compact run)
 * 6..0   JUMP_TABLE     Jump offset (jump table) OR single-branch char code OR first run char
 */
var BinTrieFlags;
(function (BinTrieFlags) {
  BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags[BinTrieFlags["FLAG13"] = 8192] = "FLAG13";
  BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 8064] = "BRANCH_LENGTH";
  BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));

var CharCodes;
(function (CharCodes) {
  CharCodes[CharCodes["NUM"] = 35] = "NUM";
  CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
  CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
  CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
  CharCodes[CharCodes["NINE"] = 57] = "NINE";
  CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
  CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
  CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
  CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
  CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
  CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */
var TO_LOWER_BIT = 32;
function isNumber(code) {
  return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
/**
 * Checks if the given character is a valid end character for an entity in an attribute.
 *
 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
 */
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function (EntityDecoderState) {
  EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function (DecodingMode) {
  /** Entities in text nodes that can end with any character. */
  DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
  /** Only allow entities terminated with a semicolon. */
  DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
  /** Entities in attributes have limitations on ending characters. */
  DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
/**
 * Token decoder with support of writing partial entities.
 */
var EntityDecoder = /*#__PURE__*/function () {
  function EntityDecoder(/** The tree used to decode entities. */
  // biome-ignore lint/correctness/noUnusedPrivateClassMembers: False positive
  decodeTree,
  /**
   * The function that is called when a codepoint is decoded.
   *
   * For multi-byte named entities, this will be called multiple times,
   * with the second codepoint, and the same `consumed` value.
   *
   * @param codepoint The decoded codepoint.
   * @param consumed The number of bytes consumed by the decoder.
   */
  emitCodePoint, /** An object that is used to produce errors. */
  errors) {
    _classCallCheck(this, EntityDecoder);
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors;
    /** The current state of the decoder. */
    this.state = EntityDecoderState.EntityStart;
    /** Characters that were consumed while parsing an entity. */
    this.consumed = 1;
    /**
     * The result of the entity.
     *
     * Either the result index of a numeric entity, or the codepoint of a
     * numeric entity.
     */
    this.result = 0;
    /** The current index in the decode tree. */
    this.treeIndex = 0;
    /** The number of characters that were consumed in excess. */
    this.excess = 1;
    /** The mode in which the decoder is operating. */
    this.decodeMode = DecodingMode.Strict;
    /** The number of characters that have been consumed in the current run. */
    this.runConsumed = 0;
  }
  /** Resets the instance to make it reusable. */
  return _createClass(EntityDecoder, [{
    key: "startEntity",
    value: function startEntity(decodeMode) {
      this.decodeMode = decodeMode;
      this.state = EntityDecoderState.EntityStart;
      this.result = 0;
      this.treeIndex = 0;
      this.excess = 1;
      this.consumed = 1;
      this.runConsumed = 0;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "write",
    value: function write(input, offset) {
      switch (this.state) {
        case EntityDecoderState.EntityStart:
          {
            if (input.charCodeAt(offset) === CharCodes.NUM) {
              this.state = EntityDecoderState.NumericStart;
              this.consumed += 1;
              return this.stateNumericStart(input, offset + 1);
            }
            this.state = EntityDecoderState.NamedEntity;
            return this.stateNamedEntity(input, offset);
          }
        case EntityDecoderState.NumericStart:
          {
            return this.stateNumericStart(input, offset);
          }
        case EntityDecoderState.NumericDecimal:
          {
            return this.stateNumericDecimal(input, offset);
          }
        case EntityDecoderState.NumericHex:
          {
            return this.stateNumericHex(input, offset);
          }
        case EntityDecoderState.NamedEntity:
          {
            return this.stateNamedEntity(input, offset);
          }
      }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNumericStart",
    value: function stateNumericStart(input, offset) {
      if (offset >= input.length) {
        return -1;
      }
      if ((input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
        this.state = EntityDecoderState.NumericHex;
        this.consumed += 1;
        return this.stateNumericHex(input, offset + 1);
      }
      this.state = EntityDecoderState.NumericDecimal;
      return this.stateNumericDecimal(input, offset);
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNumericHex",
    value: function stateNumericHex(input, offset) {
      while (offset < input.length) {
        var char = input.charCodeAt(offset);
        if (isNumber(char) || isHexadecimalCharacter(char)) {
          // Convert hex digit to value (0-15); 'a'/'A' -> 10.
          var digit = char <= CharCodes.NINE ? char - CharCodes.ZERO : (char | TO_LOWER_BIT) - CharCodes.LOWER_A + 10;
          this.result = this.result * 16 + digit;
          this.consumed++;
          offset++;
        } else {
          return this.emitNumericEntity(char, 3);
        }
      }
      return -1; // Incomplete entity
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNumericDecimal",
    value: function stateNumericDecimal(input, offset) {
      while (offset < input.length) {
        var char = input.charCodeAt(offset);
        if (isNumber(char)) {
          this.result = this.result * 10 + (char - CharCodes.ZERO);
          this.consumed++;
          offset++;
        } else {
          return this.emitNumericEntity(char, 2);
        }
      }
      return -1; // Incomplete entity
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */
  }, {
    key: "emitNumericEntity",
    value: function emitNumericEntity(lastCp, expectedLength) {
      var _a;
      // Ensure we consumed at least one digit.
      if (this.consumed <= expectedLength) {
        (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      // Figure out if this is a legit end of the entity
      if (lastCp === CharCodes.SEMI) {
        this.consumed += 1;
      } else if (this.decodeMode === DecodingMode.Strict) {
        return 0;
      }
      this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
      if (this.errors) {
        if (lastCp !== CharCodes.SEMI) {
          this.errors.missingSemicolonAfterCharacterReference();
        }
        this.errors.validateNumericCharacterReference(this.result);
      }
      return this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNamedEntity",
    value: function stateNamedEntity(input, offset) {
      var decodeTree = this.decodeTree;
      var current = decodeTree[this.treeIndex];
      // The length is the number of bytes of the value, including the current byte.
      var valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      while (offset < input.length) {
        // Handle compact runs (possibly inline): valueLength == 0 and SEMI_REQUIRED bit set.
        if (valueLength === 0 && (current & BinTrieFlags.FLAG13) !== 0) {
          var runLength = (current & BinTrieFlags.BRANCH_LENGTH) >> 7; /* 2..63 */
          // If we are starting a run, check the first char.
          if (this.runConsumed === 0) {
            var firstChar = current & BinTrieFlags.JUMP_TABLE;
            if (input.charCodeAt(offset) !== firstChar) {
              return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
            }
            offset++;
            this.excess++;
            this.runConsumed++;
          }
          // Check remaining characters in the run.
          while (this.runConsumed < runLength) {
            if (offset >= input.length) {
              return -1;
            }
            var charIndexInPacked = this.runConsumed - 1;
            var packedWord = decodeTree[this.treeIndex + 1 + (charIndexInPacked >> 1)];
            var expectedChar = charIndexInPacked % 2 === 0 ? packedWord & 0xff : packedWord >> 8 & 0xff;
            if (input.charCodeAt(offset) !== expectedChar) {
              this.runConsumed = 0;
              return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
            }
            offset++;
            this.excess++;
            this.runConsumed++;
          }
          this.runConsumed = 0;
          this.treeIndex += 1 + (runLength >> 1);
          current = decodeTree[this.treeIndex];
          valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        }
        if (offset >= input.length) break;
        var char = input.charCodeAt(offset);
        /*
         * Implicit semicolon handling for nodes that require a semicolon but
         * don't have an explicit ';' branch stored in the trie. If we have
         * a value on the current node, it requires a semicolon, and the
         * current input character is a semicolon, emit the entity using the
         * current node (without descending further).
         */
        if (char === CharCodes.SEMI && valueLength !== 0 && (current & BinTrieFlags.FLAG13) !== 0) {
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        }
        this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
        if (this.treeIndex < 0) {
          return this.result === 0 ||
          // If we are parsing an attribute
          this.decodeMode === DecodingMode.Attribute && (
          // We shouldn't have consumed any characters after the entity,
          valueLength === 0 ||
          // And there should be no invalid characters.
          isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
        }
        current = decodeTree[this.treeIndex];
        valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        // If the branch is a value, store it and continue
        if (valueLength !== 0) {
          // If the entity is terminated by a semicolon, we are done.
          if (char === CharCodes.SEMI) {
            return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
          }
          // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
          if (this.decodeMode !== DecodingMode.Strict && (current & BinTrieFlags.FLAG13) === 0) {
            this.result = this.treeIndex;
            this.consumed += this.excess;
            this.excess = 0;
          }
        }
        // Increment offset & excess for next iteration
        offset++;
        this.excess++;
      }
      return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */
  }, {
    key: "emitNotTerminatedNamedEntity",
    value: function emitNotTerminatedNamedEntity() {
      var _a;
      var result = this.result,
        decodeTree = this.decodeTree;
      var valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
      this.emitNamedEntityData(result, valueLength, this.consumed);
      (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
      return this.consumed;
    }
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */
  }, {
    key: "emitNamedEntityData",
    value: function emitNamedEntityData(result, valueLength, consumed) {
      var decodeTree = this.decodeTree;
      this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~(BinTrieFlags.VALUE_LENGTH | BinTrieFlags.FLAG13) : decodeTree[result + 1], consumed);
      if (valueLength === 3) {
        // For multi-byte values, we need to emit the second byte.
        this.emitCodePoint(decodeTree[result + 2], consumed);
      }
      return consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */
  }, {
    key: "end",
    value: function end() {
      var _a;
      switch (this.state) {
        case EntityDecoderState.NamedEntity:
          {
            // Emit a named entity if we have one.
            return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          }
        // Otherwise, emit a numeric entity if we have one.
        case EntityDecoderState.NumericDecimal:
          {
            return this.emitNumericEntity(0, 2);
          }
        case EntityDecoderState.NumericHex:
          {
            return this.emitNumericEntity(0, 3);
          }
        case EntityDecoderState.NumericStart:
          {
            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
          }
        case EntityDecoderState.EntityStart:
          {
            // Return 0 if we have no entity.
            return 0;
          }
      }
    }
  }]);
}();
/**
 * Creates a function that decodes entities in a string.
 *
 * @param decodeTree The decode tree.
 * @returns A function that decodes entities in a string.
 */
function getDecoder(decodeTree) {
  var returnValue = "";
  var decoder = new EntityDecoder(decodeTree, data => returnValue += fromCodePoint(data));
  return function decodeWithTrie(input, decodeMode) {
    var lastIndex = 0;
    var offset = 0;
    while ((offset = input.indexOf("&", offset)) >= 0) {
      returnValue += input.slice(lastIndex, offset);
      decoder.startEntity(decodeMode);
      var length = decoder.write(input,
      // Skip the "&"
      offset + 1);
      if (length < 0) {
        lastIndex = offset + decoder.end();
        break;
      }
      lastIndex = offset + length;
      // If `length` is 0, skip the current `&` and continue.
      offset = length === 0 ? lastIndex + 1 : lastIndex;
    }
    var result = returnValue + input.slice(lastIndex);
    // Make sure we don't keep a reference to the final string.
    returnValue = "";
    return result;
  };
}
/**
 * Determines the branch of the current node that is taken given the current
 * character. This function is used to traverse the trie.
 *
 * @param decodeTree The trie.
 * @param current The current node.
 * @param nodeIdx The index right after the current node and its value.
 * @param char The current character.
 * @returns The index of the next node, or -1 if no branch is taken.
 */
function determineBranch(decodeTree, current, nodeIndex, char) {
  var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  // Case 1: Single branch encoded in jump offset
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
  }
  // Case 2: Multiple branches encoded in jump table
  if (jumpOffset) {
    var value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
  }
  // Case 3: Multiple branches encoded in packed dictionary (two keys per uint16)
  var packedKeySlots = branchCount + 1 >> 1;
  /*
   * Treat packed keys as a virtual sorted array of length `branchCount`.
   * Key(i) = low byte for even i, high byte for odd i in slot i>>1.
   */
  var lo = 0;
  var hi = branchCount - 1;
  while (lo <= hi) {
    var mid = lo + hi >>> 1;
    var slot = mid >> 1;
    var packed = decodeTree[nodeIndex + slot];
    var midKey = packed >> (mid & 1) * 8 & 0xff;
    if (midKey < char) {
      lo = mid + 1;
    } else if (midKey > char) {
      hi = mid - 1;
    } else {
      return decodeTree[nodeIndex + packedKeySlots + mid];
    }
  }
  return -1;
}
var htmlDecoder = /* #__PURE__ */getDecoder(htmlDecodeTree);
/**
 * Decodes an HTML string.
 *
 * @param htmlString The string to decode.
 * @param mode The decoding mode.
 * @returns The decoded string.
 */
function decodeHTML(htmlString) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DecodingMode.Legacy;
  return htmlDecoder(htmlString, mode);
}

var clanIdCache = {};
var toPlayerId = player => typeof player === "string" ? kolmafia.getPlayerId(player) : player;
var LOG_FAX_PATTERN = /*#__PURE__*/_wrapRegExp(/(\d{2}\/\d{2}\/\d{2}, \d{2}:\d{2}(?:AM|PM): )<a [^>]+>([^<]+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
});
var WHITELIST_DEGREE_PATTERN = /*#__PURE__*/_wrapRegExp(/(.*?) \(\xB0(\d+)\)/, {
  name: 1,
  degree: 2
});
var Clan = /*#__PURE__*/function () {
  function Clan(id, name) {
    _classCallCheck(this, Clan);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "name", void 0);
    this.id = id;
    this.name = name;
  }
  return _createClass(Clan, [{
    key: "_check",
    value: function _check() {
      if (this.id !== kolmafia.getClanId()) {
        throw new Error("You are no longer a member of this clan");
      }
    }
    /**
     * Join clan
     *
     * @returns Joined clan
     */
  }, {
    key: "join",
    value: function join() {
      return Clan.join(this.id);
    }
    /**
     * Check that this clan is the player's current clan
     *
     * @returns Whether this is the current clan
     */
  }, {
    key: "check",
    value: function check() {
      return kolmafia.visitUrl("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
    /**
     * Determine the monster that is currently in the current clan's fax machine if any
     *
     * @returns The current fax monster
     */
  }, {
    key: "getCurrentFax",
    value: function getCurrentFax() {
      this._check();
      var logs = kolmafia.visitUrl("clan_log.php");
      var lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax) return null;
      var _lastFax = _slicedToArray(lastFax, 4),
        monsterName = _lastFax[3];
      if (!monsterName) return null;
      return kolmafia.Monster.get(monsterName);
    }
    /**
     * List available ranks (name, degree and id) from the current clan
     *
     * @returns List of ranks
     */
  }, {
    key: "getRanks",
    value: function getRanks() {
      this._check();
      var page = kolmafia.visitUrl("clan_whitelist.php");
      return kolmafia.xpath(page, '//select[@name="level"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var match = kolmafia.xpath(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN);
        var id = kolmafia.xpath(validHtml, "//@value")[0];
        if (!match || !id) return null;
        var _match = _slicedToArray(match, 3),
          encodedName = _match[1],
          degree = _match[2];
        return {
          name: decodeHTML(encodedName),
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(notNull);
    }
    /**
     * Add a player to the current clan's whitelist.
     * If the player is already in the whitelist this will change their rank or title.
     *
     * @param player Player id or name
     * @param rankName Rank to give the player. If not provided they will be given the lowest rank
     * @param title Title to give the player. If not provided, will be blank
     * @returns Success
     */
  }, {
    key: "addPlayerToWhitelist",
    value: function addPlayerToWhitelist(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      this._check();
      var playerId = toPlayerId(player);
      var ranks = this.getRanks();
      var rank = rankName ? ranks.find(r => r.name === rankName) : ranks.sort((a, b) => a.degree - b.degree)[0];
      if (!rank) return false;
      var result = kolmafia.visitUrl("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
    /**
     * Remove a player from the current clan's whitelist
     *
     * @param player Player id or name
     * @returns Success
     */
  }, {
    key: "removePlayerFromWhitelist",
    value: function removePlayerFromWhitelist(player) {
      this._check();
      var playerId = toPlayerId(player);
      var result = kolmafia.visitUrl("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
    /**
     * Return the amount of meat in the current clan's coffer
     *
     * @returns Amount of meat
     */
  }, {
    key: "getMeatInCoffer",
    value: function getMeatInCoffer() {
      this._check();
      var page = kolmafia.visitUrl("clan_stash.php");
      var _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"],
        _ref2 = _slicedToArray(_ref, 2),
        meat = _ref2[1];
      return parseNumber(meat);
    }
    /**
     * Add the given amount of meat to the current clan's coffer.
     *
     * @param amount Amount of meat to put in coffer
     * @returns Success
     */
  }, {
    key: "putMeatInCoffer",
    value: function putMeatInCoffer(amount) {
      this._check();
      var result = kolmafia.visitUrl("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
  }, {
    key: "take",
    value: function take(items) {
      this._check();
      var map = arrayToCountedMap(items);
      map.forEach((quantity, item) => {
        var needed = Math.max(0, quantity - kolmafia.availableAmount(item));
        if (needed === 0) {
          return map.set(item, 0);
        }
        var foldGroup = getFoldGroup(item);
        var _iterator = _createForOfIteratorHelper(foldGroup),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var foldable = _step.value;
            var quantityToFold = Math.min(needed, kolmafia.availableAmount(foldable));
            for (var _i2 = 0; _i2 < quantityToFold; _i2++) {
              kolmafia.cliExecute("fold ".concat(item.name));
              needed--;
            }
            return map.set(item, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        kolmafia.refreshStash();
        for (var _i = 0, _arr = [item].concat(_toConsumableArray(foldGroup)); _i < _arr.length; _i++) {
          var matchingItem = _arr[_i];
          var quantityToTake = Math.min(needed, kolmafia.stashAmount(matchingItem));
          if (quantityToTake === 0) continue;
          // If we can't take from the stash, there's no sense in iterating through the whole fold group
          if (!kolmafia.takeStash(quantityToTake, matchingItem)) return;
          if (matchingItem === item) {
            needed -= quantityToTake;
          } else {
            for (var i = 0; i < quantityToTake; i++) {
              kolmafia.cliExecute("fold ".concat(matchingItem.name));
              needed--;
            }
          }
        }
      });
      return Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "put",
    value: function put(items) {
      this._check();
      var map = arrayToCountedMap(items);
      if (!this.check()) throw new Error("Wanted to return ".concat(countedMapToString(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      map.forEach((quantity, item) => {
        kolmafia.retrieveItem(quantity, item);
        var returned = Math.min(quantity, kolmafia.availableAmount(item));
        kolmafia.putStash(returned, item);
        map.set(item, quantity - returned);
      });
      return Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "withStash",
    value: function withStash(items, callback) {
      this._check();
      var map = arrayToCountedMap(items);
      return Clan._withStash(() => this.take(map), borrowed => this.put(borrowed), callback);
    }
  }], [{
    key: "_join",
    value: function _join(id) {
      var result = kolmafia.visitUrl("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));
      if (!result.includes("clanhalltop.gif")) {
        throw new Error("Could not join clan");
      }
      return Clan.get();
    }
  }, {
    key: "_withStash",
    value: function _withStash(borrowFn,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    returnFn,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback) {
      var borrowed = borrowFn();
      var map = arrayToCountedMap(borrowed);
      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = arrayToCountedMap(returnFn(borrowed));
          map.forEach((quantity, item) => {
            var remaining = quantity - (returned.get(item) || 0);
            if (remaining > 0) {
              map.set(item, remaining);
            } else {
              map.delete(item);
            }
          });
          if (map.size > 0) {
            logger.error("Failed to return <b>".concat(countedMapToString(map), "</b> to <b>").concat(this.name, "</b> stash"));
          }
        }
      }
    }
    /**
     * Join a clan
     *
     * @param clanIdOrName Clan id or name
     * @returns Instance of joined clan
     */
  }, {
    key: "join",
    value: function join(clanIdOrName) {
      var clanId;
      if (typeof clanIdOrName === "string") {
        var clanName = clanIdOrName.toLowerCase();
        if (clanName === kolmafia.getClanName().toLowerCase()) {
          return Clan.get();
        }
        if (!(clanName in clanIdCache)) {
          var clan = Clan.getWhitelisted().find(c => c.name.toLowerCase() === clanName);
          if (!clan) {
            throw new Error("Player is not whitelisted to clan '".concat(clanIdOrName, "'"));
          }
          clanIdCache[clanName] = clan.id;
        }
        clanId = clanIdCache[clanName];
      } else {
        clanId = clanIdOrName;
        if (clanId === kolmafia.getClanId()) {
          return Clan.get();
        }
      }
      return Clan._join(clanId);
    }
    /**
     * Execute callback as a member of a clan and then restore prior membership
     *
     * @param clanIdOrName Clan id or name
     * @param callback Actions to carry out while member of specified can
     * @returns Return value from callback
     */
  }, {
    key: "with",
    value: function _with(clanIdOrName, callback) {
      var startingClan = Clan.get();
      var clan = Clan.join(clanIdOrName);
      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
  }, {
    key: "withStash",
    value: function withStash(clanIdOrName, items,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    callback) {
      return Clan._withStash(() => Clan.with(clanIdOrName, clan => clan.take(items)), borrowed => Clan.with(clanIdOrName, clan => clan.put(borrowed)), callback);
    }
    /**
     * Get the player's current clan
     *
     * @returns Player's clan
     */
  }, {
    key: "get",
    value: function get() {
      return new Clan(kolmafia.getClanId(), kolmafia.getClanName());
    }
    /**
     * Get list of clans to which the player is whitelisted
     *
     * @returns List of clans
     */
  }, {
    key: "getWhitelisted",
    value: function getWhitelisted() {
      var page = kolmafia.visitUrl("clan_signup.php");
      return kolmafia.xpath(page, '//select[@name="whichclan"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var id = Number.parseInt(kolmafia.xpath(validHtml, "//@value")[0]);
        var name = decodeHTML(kolmafia.xpath(validHtml, "//text()")[0]);
        return new Clan(id, name);
      });
    }
  }]);
}();

/**
 * Mines in the Kingdom of Loathing
 */
var Mine;
(function (Mine) {
  /** Inside of Itznotyerzitz Mine */
  Mine[Mine["ITZNOTYERZITZ"] = 1] = "ITZNOTYERZITZ";
  /** Deep Inside the Knob Shaft */
  Mine[Mine["KNOB"] = 2] = "KNOB";
  /** Anemone Mine */
  Mine[Mine["ANEMONE"] = 3] = "ANEMONE";
  /** The Gummi Mine (Retired, Crimbo 2011) */
  Mine[Mine["GUMMI"] = 4] = "GUMMI";
  /** Crimbonium Mine (Retired, Crimbo 2014) */
  Mine[Mine["CRIMBONIUM"] = 5] = "CRIMBONIUM";
  /** The Velvet / Gold Mine */
  Mine[Mine["VOLCANO"] = 6] = "VOLCANO";
})(Mine || (Mine = {}));
/**
 * @param mine Which mine
 * @param coords Coordinates at which to mine (using the in-game coordinate system)
 * @param coords."0" Column
 * @param coords."1" Row
 * @returns Items acquired from mining that coordinate, if any.
 */
function mineCoordinate(mine, _ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
    col = _ref4[0],
    row = _ref4[1];
  var page = kolmafia.visitUrl("mining.php?mine=".concat(mine, "&which=").concat(col + 8 * row, "&pwd"), true);
  return extractItems(page);
}
/**
 * Visit a mine
 *
 * @param mine Which mine
 * @returns Page contents
 */
function visit(mine) {
  return kolmafia.visitUrl("mining.php?mine=".concat(mine));
}

/**
 * The strategy to use for combat for a task, which indicates what to do
 * for each monster.
 *
 * There are two ways to specify in a task what to do for a given monster:
 *   1. Provide a macro directly through .macro(macro, ...monsters)
 *   2. Provide an action through .action(action, ...monsters)
 *
 * An action is a strategy for dealing with a monster that is not fully
 * defined in the task. The possible actions are set with the type parameter A.
 * Actions should typically end the fight.
 *
 * For example, a task may want to banish a monster but not necessarily know or
 * care which banisher is used. Instead, it is best for the engine to determine
 * which banisher to use on the monster. To facilitate this, "banish" can be
 * defined as an action, e.g. with CombatStrategy<"banish">;
 *
 * Each action can be resolved by the engine by:
 *   1. Providing a default macro for the action through ActionDefaults<A>,
 *      which can be done through combat_defaults in Engine options, or
 *   2. Providing a CombatResource for the action through CombatResources<A>.
 *      This is typically done in Engine.customize() by checking if a given
 *      action is requested by the task with combat.can(.), and then providing
 *      an appropriate resource with resources.provide(.).
 *
 * A monster may have both a macro and an action defined, and a macro or action
 * can be specified to be done on all monsters. The order of combat is then:
 * 1. The macro(s) given in .startingMacro().
 * 2. The monster-specific macro(s) from .macro().
 * 3. The general macro(s) from .macro().
 * 4. The monster-specific action from .action().
 * 5. The general action from .action().
 *
 * If an autoattack is set with .autoattack(), the order of the autoattack is:
 * 1. The monster-specific macro(s) from .autoattack().
 * 2. The general macro(s) from .autoattack().
 */
var CombatStrategy = /*#__PURE__*/function () {
  function CombatStrategy() {
    _classCallCheck(this, CombatStrategy);
    this.macros = new Map();
    this.autoattacks = new Map();
    this.actions = new Map();
    this.ccs_entries = new Map();
  }
  /**
   * Add a macro to perform for this monster. If multiple macros are given
   * for the same monster, they are concatinated.
   *
   * @param macro The macro to perform.
   * @param monsters Which monsters to use the macro on. If not given, add the
   *  macro as a general macro.
   * @param prepend If true, add the macro before all previous macros for
   *    the same monster. If false, add after all previous macros.
   * @returns this
   */
  return _createClass(CombatStrategy, [{
    key: "macro",
    value: function macro(_macro, monsters, prepend) {
      var _a, _b;
      if (monsters === undefined) {
        if (this.default_macro === undefined) this.default_macro = [];
        if (prepend) this.default_macro.unshift(_macro);else this.default_macro.push(_macro);
      } else {
        if (monsters instanceof kolmafia.Monster) monsters = [monsters];
        var _iterator = _createForOfIteratorHelper(monsters),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var monster = _step.value;
            if (!this.macros.has(monster)) this.macros.set(monster, []);
            if (prepend) (_a = this.macros.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(_macro);else (_b = this.macros.get(monster)) === null || _b === void 0 ? void 0 : _b.push(_macro);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform as an autoattack for this monster. If multiple
     * macros are given for the same monster, they are concatinated.
     *
     * @param macro The macro to perform as autoattack.
     * @param monsters Which monsters to use the macro on. If not given, add the
     *  macro as a general macro.
     * @param prepend If true, add the macro before all previous autoattack
     *    macros for the same monster. If false, add after all previous macros.
     * @returns this
     */
  }, {
    key: "autoattack",
    value: function autoattack(macro, monsters, prepend) {
      var _a, _b;
      if (monsters === undefined) {
        if (this.default_autoattack === undefined) this.default_autoattack = [];
        if (prepend) this.default_autoattack.unshift(macro);else this.default_autoattack.push(macro);
      } else {
        if (monsters instanceof kolmafia.Monster) monsters = [monsters];
        var _iterator2 = _createForOfIteratorHelper(monsters),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var monster = _step2.value;
            if (!this.autoattacks.has(monster)) this.autoattacks.set(monster, []);
            if (prepend) (_a = this.autoattacks.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(macro);else (_b = this.autoattacks.get(monster)) === null || _b === void 0 ? void 0 : _b.push(macro);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform at the start of combat.
     * @param macro The macro to perform.
     * @param prepend If true, add the macro before all previous starting
     *    macros. If false, add after all previous starting macros.
     * @returns this
     */
  }, {
    key: "startingMacro",
    value: function startingMacro(macro, prepend) {
      if (this.starting_macro === undefined) this.starting_macro = [];
      if (prepend) this.starting_macro.unshift(macro);else this.starting_macro.push(macro);
      return this;
    }
    /**
     * Add an action to perform for this monster. Only one action can be set for
     * each monster; any previous actions are overwritten.
     *
     * @param action The action to perform.
     * @param monsters Which monsters to use the action on. If not given, set the
     *  action as the general action for all monsters.
     * @returns this
     */
  }, {
    key: "action",
    value: function action(_action, monsters) {
      if (monsters === undefined) {
        this.default_action = _action;
      } else if (monsters instanceof kolmafia.Monster) {
        this.actions.set(monsters, _action);
      } else {
        var _iterator3 = _createForOfIteratorHelper(monsters),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var monster = _step3.value;
            this.actions.set(monster, _action);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return this;
    }
    /**
     * Add a separate entry in the grimoire-generated CCS file for the specified
     * monster. If multiple entries are given for the same monster, they are
     * concatinated.
     *
     * This should typically be only used rarely, on monsters for which KoL does
     * not support macros in combat (e.g. rampaging adding machine).
     *
     * @param entry The entry to add for the given monster.
     * @param monsters Which monsters to add the entry to.
     * @param prepend If true, add the entry before all previous entries. If
     *   false, add after all previous entries.
     */
  }, {
    key: "ccs",
    value: function ccs(entry, monsters, prepend) {
      var _a, _b;
      if (monsters instanceof kolmafia.Monster) monsters = [monsters];
      var _iterator4 = _createForOfIteratorHelper(monsters),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var monster = _step4.value;
          if (!this.ccs_entries.has(monster)) this.ccs_entries.set(monster, []);
          if (prepend) (_a = this.ccs_entries.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(entry);else (_b = this.ccs_entries.get(monster)) === null || _b === void 0 ? void 0 : _b.push(entry);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this;
    }
    /**
     * Check if the provided action was requested for any monsters, or for the
     * general action.
     */
  }, {
    key: "can",
    value: function can(action) {
      if (action === this.default_action) return true;
      return Array.from(this.actions.values()).includes(action);
    }
    /**
     * Return the general action (if it exists).
     */
  }, {
    key: "getDefaultAction",
    value: function getDefaultAction() {
      return this.default_action;
    }
    /**
     * Return all monsters where the provided action was requested.
     */
  }, {
    key: "where",
    value: function where(action) {
      return Array.from(this.actions.keys()).filter(key => this.actions.get(key) === action);
    }
    /**
     * Return the requested action (if it exists) for the provided monster.
     */
  }, {
    key: "currentStrategy",
    value: function currentStrategy(monster) {
      var _a;
      return (_a = this.actions.get(monster)) !== null && _a !== void 0 ? _a : this.default_action;
    }
    /**
     * Perform a deep copy of this combat strategy.
     */
  }, {
    key: "clone",
    value: function clone() {
      var result = new CombatStrategy();
      if (this.starting_macro) result.starting_macro = _toConsumableArray(this.starting_macro);
      if (this.default_macro) result.default_macro = _toConsumableArray(this.default_macro);
      var _iterator5 = _createForOfIteratorHelper(this.macros),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var pair = _step5.value;
          result.macros.set(pair[0], _toConsumableArray(pair[1]));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      if (this.default_autoattack) result.default_autoattack = _toConsumableArray(this.default_autoattack);
      var _iterator6 = _createForOfIteratorHelper(this.autoattacks),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _pair = _step6.value;
          result.autoattacks.set(_pair[0], _toConsumableArray(_pair[1]));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      result.default_action = this.default_action;
      var _iterator7 = _createForOfIteratorHelper(this.actions),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _pair2 = _step7.value;
          result.actions.set(_pair2[0], _pair2[1]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = _createForOfIteratorHelper(this.ccs_entries),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _pair3 = _step8.value;
          result.ccs_entries.set(_pair3[0], _toConsumableArray(_pair3[1]));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return result;
    }
    /**
     * Compile this combat strategy into a complete macro.
     *
     * @param resources The resources to use to fulfil actions.
     * @param defaults Macros to perform for each action without a resource.
     * @param location The adventuring location, if known.
     * @param ctx: The current engine state to be passed to task functions.
     * @returns The compiled macro.
     */
  }, {
    key: "compile",
    value: function compile(resources, defaults, location, ctx) {
      var _a, _b;
      var result = new Macro();
      // If there is macro precursor, do it now
      if (this.starting_macro) {
        result.step.apply(result, _toConsumableArray(this.starting_macro.map(macro => undelay(macro, ctx))));
      }
      // Perform any monster-specific macros (these may or may not end the fight)
      var monster_macros = new CompressedMacro();
      this.macros.forEach((value, key) => {
        var _Macro;
        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, _toConsumableArray(value.map(macro => undelay(macro, ctx)))));
      });
      result.step(monster_macros.compile());
      // Perform the non-monster specific macro
      if (this.default_macro) result.step.apply(result, _toConsumableArray(this.default_macro.map(macro => undelay(macro, ctx))));
      // Perform any monster-specific actions (these should end the fight)
      var monster_actions = new CompressedMacro();
      this.actions.forEach((action, key) => {
        var _a, _b;
        var macro = (_a = resources.getMacro(action, ctx)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[action]) === null || _b === void 0 ? void 0 : _b.call(defaults, key);
        if (macro) monster_actions.add(key, new Macro().step(macro));
      });
      result.step(monster_actions.compile());
      // Perform the non-monster specific action (these should end the fight)
      if (this.default_action) {
        var macro = (_a = resources.getMacro(this.default_action, ctx)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location);
        if (macro) result.step(macro);
      }
      return result;
    }
    /**
     * Compile the autoattack of this combat strategy into a complete macro.
     *
     * @param ctx: The current engine state to be passed to task functions.
     * @returns The compiled autoattack macro.
     */
  }, {
    key: "compileAutoattack",
    value: function compileAutoattack(ctx) {
      var result = new Macro();
      // Perform any monster-specific autoattacks (these may or may not end the fight)
      var monster_macros = new CompressedMacro();
      this.autoattacks.forEach((value, key) => {
        var _Macro2;
        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, _toConsumableArray(value.map(macro => undelay(macro, ctx)))));
      });
      result.step(monster_macros.compile());
      // Perform the non-monster specific macro
      if (this.default_autoattack) result.step.apply(result, _toConsumableArray(this.default_autoattack.map(macro => undelay(macro, ctx))));
      return result;
    }
    /**
     * Compile the CCS entries of this combat strategy into a single array.
     *
     * @returns The lines of a CCS file, not including the [default] macro.
     */
  }, {
    key: "compileCcs",
    value: function compileCcs() {
      var result = [];
      var _iterator9 = _createForOfIteratorHelper(this.ccs_entries),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var ccs_entry = _step9.value;
          result.push.apply(result, ["[".concat(ccs_entry[0].name, "]")].concat(_toConsumableArray(ccs_entry[1])));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return result;
    }
    /**
     * For advanced users, this method will generate a fluent API for requesting
     * actions. That is, it allows you to do
     *   combat.banish(monster1).kill(monster2)
     * instead of
     *   combat.action("banish", monster1).action("kill", monster2)
     *
     * Example usage:
     *   const myActions = ["kill", "banish"] as const;
     *   class MyCombatStrategy extends CombatStrategy.withActions(myActions) {}
     *
     *   const foo: MyCombatStrategy = new MyCombatStrategy();
     *   const bar: MyCombatStrategy = foo.banish($monster`crate`).kill($monster`tumbleweed`);
     */
  }], [{
    key: "withActions",
    value: function withActions(actions) {
      var CombatStrategyWithActions = /*#__PURE__*/function (_this) {
        function CombatStrategyWithActions() {
          _classCallCheck(this, CombatStrategyWithActions);
          return _callSuper(this, CombatStrategyWithActions, arguments);
        }
        _inherits(CombatStrategyWithActions, _this);
        return _createClass(CombatStrategyWithActions);
      }(this); // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var proto = CombatStrategyWithActions.prototype;
      var _iterator0 = _createForOfIteratorHelper(actions),
        _step0;
      try {
        var _loop = function _loop() {
          var action = _step0.value;
          proto[action] = function (monsters) {
            return this.action(action, monsters);
          };
        };
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
          _loop();
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
      return CombatStrategyWithActions;
    }
  }]);
}();
/**
 * A class to build a macro that combines if statements (keyed on monster) with
 * identical body into a single if statement, to avoid the 37-action limit.
 * Ex: [if x; A; if y; B; if z; A;] will turn into [if x || z; A; if y; B]
 */
var CompressedMacro = /*#__PURE__*/function () {
  function CompressedMacro() {
    _classCallCheck(this, CompressedMacro);
    this.components = new Map();
  }
  /**
   * Set the macro for a given monster (replacing any previous macros).
   */
  return _createClass(CompressedMacro, [{
    key: "add",
    value: function add(monster, macro) {
      var _a;
      var macro_text = macro.toString();
      if (macro_text.length === 0) return;
      if (!this.components.has(macro_text)) this.components.set(macro_text, [monster]);else (_a = this.components.get(macro_text)) === null || _a === void 0 ? void 0 : _a.push(monster);
    }
    /**
     * Compile the compressed form of the macro.
     */
  }, {
    key: "compile",
    value: function compile() {
      var result = new Macro();
      this.components.forEach((monsters, macro) => {
        var condition = monsters.map(mon => "monsterid ".concat(mon.id)).join(" || ");
        result.if_(condition, macro);
      });
      return result;
    }
  }]);
}();
/**
 * A class for providing resources to fulfil combat actions.
 */
var CombatResources = /*#__PURE__*/function () {
  function CombatResources() {
    _classCallCheck(this, CombatResources);
    this.resources = new Map();
  }
  /**
   * Use the provided resource to fulfil the provided action.
   * (If the resource is undefined, this does nothing).
   */
  return _createClass(CombatResources, [{
    key: "provide",
    value: function provide(action, resource) {
      if (resource === undefined) return;
      this.resources.set(action, resource);
    }
    /**
     * Return true if the provided action has a resource provided.
     */
  }, {
    key: "has",
    value: function has(action) {
      return this.resources.has(action);
    }
    /**
     * Returns the resource for the provided action, if set.
     */
  }, {
    key: "get",
    value: function get(action) {
      return this.resources.get(action);
    }
    /**
     * Return all provided combat resources.
     */
  }, {
    key: "all",
    value: function all() {
      return Array.from(this.resources.values());
    }
    /**
     * Get the macro provided by the resource for this action, or undefined if
     * no resource was provided.
     */
  }, {
    key: "getMacro",
    value: function getMacro(action, ctx) {
      var resource = this.resources.get(action);
      if (resource === undefined) return undefined;
      if (resource.do instanceof kolmafia.Item) return new Macro().item(resource.do);
      if (resource.do instanceof kolmafia.Skill) return new Macro().skill(resource.do);
      return undelay(resource.do, ctx);
    }
  }]);
}();

var _templateObject$k, _templateObject2$j, _templateObject3$j, _templateObject4$j, _templateObject5$j, _templateObject6$j, _templateObject7$j, _templateObject8$j, _templateObject9$j, _templateObject0$j, _templateObject1$j, _templateObject10$j, _templateObject11$j, _templateObject12$i, _templateObject13$h, _templateObject14$h, _templateObject15$h, _templateObject16$h, _templateObject17$g, _templateObject18$g, _templateObject19$f, _templateObject20$d, _templateObject21$d, _templateObject22$d, _templateObject23$d, _templateObject24$d, _templateObject25$d, _templateObject26$d, _templateObject27$d, _templateObject28$d, _templateObject29$d, _templateObject30$d, _templateObject31$d, _templateObject32$d, _templateObject33$d, _templateObject34$c, _templateObject35$c, _templateObject36$c, _templateObject37$c, _templateObject38$b, _templateObject39$b, _templateObject40$b, _templateObject41$b, _templateObject42$a, _templateObject43$a, _templateObject44$a, _templateObject45$a, _templateObject46$a, _templateObject47$a, _templateObject48$a, _templateObject49$a, _templateObject50$9, _templateObject51$9, _templateObject52$9, _templateObject53$8, _templateObject54$8, _templateObject55$7, _templateObject56$6, _templateObject57$6, _templateObject58$5, _templateObject59$5, _templateObject60$5, _templateObject61$5, _templateObject62$5, _templateObject63$4, _templateObject64$4, _templateObject65$4, _templateObject66$4, _templateObject67$4, _templateObject68$4, _templateObject69$4, _templateObject70$4, _templateObject71$4, _templateObject72$4, _templateObject73$4, _templateObject74$4, _templateObject75$4, _templateObject76$4, _templateObject77$4, _templateObject78$4, _templateObject79$4, _templateObject80$4;
var FORCE_REFRESH_REQUIREMENT = new Requirement([], {
  forceUpdate: true
});
var outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var weaponHands = i => i ? kolmafia.weaponHands(i) : 0;
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"];
var Outfit = /*#__PURE__*/function () {
  function Outfit() {
    _classCallCheck(this, Outfit);
    this.equips = new Map();
    this.riders = new Map();
    this.modes = {};
    this.skipDefaults = false;
    this.modifier = [];
    this.avoid = [];
    this.bonuses = new Map();
    this.postActions = [];
    this.preActions = [];
  }
  /**
   * Create an outfit from your current player state.
   */
  return _createClass(Outfit, [{
    key: "equippedAmount",
    value:
    /**
     * Check how many of an item is equipped on the outfit.
     */
    function equippedAmount(item) {
      return _toConsumableArray(this.equips.values()).filter(i => i === item).length;
    }
  }, {
    key: "isAvailable",
    value: function isAvailable(item) {
      var _a;
      if ((_a = this.avoid) === null || _a === void 0 ? void 0 : _a.includes(item)) return false;
      if (!have$g(item, this.equippedAmount(item) + 1)) return false;
      if (kolmafia.booleanModifier(item, "Single Equip") && this.equippedAmount(item) > 0) return false;
      return true;
    }
    /**
     * Check whether an item is equipped on the outfit, optionally in a specific slot.
     */
  }, {
    key: "haveEquipped",
    value: function haveEquipped(item, slot) {
      if (slot === undefined) return this.equippedAmount(item) > 0;
      return this.equips.get(slot) === item;
    }
  }, {
    key: "equipItemNone",
    value: function equipItemNone(item, slot) {
      if (item !== $item.none) return false;
      if (slot === undefined) return true;
      if (this.equips.has(slot)) return false;
      this.equips.set(slot, item);
      return true;
    }
  }, {
    key: "equipNonAccessory",
    value: function equipNonAccessory(item, slot) {
      if ($slots(_templateObject$k || (_templateObject$k = _taggedTemplateLiteral(["acc1, acc2, acc3"]))).includes(kolmafia.toSlot(item))) return false;
      if (slot !== undefined && slot !== kolmafia.toSlot(item)) return false;
      if (this.equips.has(kolmafia.toSlot(item))) return false;
      switch (kolmafia.toSlot(item)) {
        case $slot(_templateObject2$j || (_templateObject2$j = _taggedTemplateLiteral(["off-hand"]))):
          if (this.equips.has($slot(_templateObject3$j || (_templateObject3$j = _taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject4$j || (_templateObject4$j = _taggedTemplateLiteral(["weapon"]))))) !== 1) {
            return false;
          }
          break;
        case $slot(_templateObject5$j || (_templateObject5$j = _taggedTemplateLiteral(["familiar"]))):
          if (this.familiar !== undefined && !kolmafia.canEquip(this.familiar, item)) return false;
          break;
        case $slot(_templateObject6$j || (_templateObject6$j = _taggedTemplateLiteral(["weapon"]))):
          if (!weaponsCompatible(item, this.equips.get($slot(_templateObject7$j || (_templateObject7$j = _taggedTemplateLiteral(["off-hand"])))))) return false;
          break;
      }
      if (kolmafia.toSlot(item) !== $slot(_templateObject8$j || (_templateObject8$j = _taggedTemplateLiteral(["familiar"]))) && !kolmafia.canEquip(item)) return false;
      this.equips.set(kolmafia.toSlot(item), item);
      return true;
    }
  }, {
    key: "equipAccessory",
    value: function equipAccessory(item, slot) {
      if (![undefined].concat(_toConsumableArray($slots(_templateObject9$j || (_templateObject9$j = _taggedTemplateLiteral(["acc1, acc2, acc3"]))))).includes(slot)) return false;
      if (kolmafia.toSlot(item) !== $slot(_templateObject0$j || (_templateObject0$j = _taggedTemplateLiteral(["acc1"])))) return false;
      if (!kolmafia.canEquip(item)) return false;
      if (slot === undefined) {
        // We don't care which of the accessory slots we equip in
        var empty = $slots(_templateObject1$j || (_templateObject1$j = _taggedTemplateLiteral(["acc1, acc2, acc3"]))).find(s => !this.equips.has(s));
        if (empty === undefined) return false;
        this.equips.set(empty, item);
      } else {
        if (this.equips.has(slot)) return false;
        this.equips.set(slot, item);
      }
      return true;
    }
  }, {
    key: "equipUsingDualWield",
    value: function equipUsingDualWield(item, slot) {
      if (![undefined, $slot(_templateObject10$j || (_templateObject10$j = _taggedTemplateLiteral(["off-hand"])))].includes(slot)) return false;
      if (kolmafia.toSlot(item) !== $slot(_templateObject11$j || (_templateObject11$j = _taggedTemplateLiteral(["weapon"])))) return false;
      if (this.equips.has($slot(_templateObject12$i || (_templateObject12$i = _taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject13$h || (_templateObject13$h = _taggedTemplateLiteral(["weapon"]))))) !== 1) {
        return false;
      }
      if (this.equips.has($slot(_templateObject14$h || (_templateObject14$h = _taggedTemplateLiteral(["off-hand"]))))) return false;
      if (!have$g($skill(_templateObject15$h || (_templateObject15$h = _taggedTemplateLiteral(["Double-Fisted Skull Smashing"]))))) return false;
      if (weaponHands(item) !== 1) return false;
      if (!kolmafia.canEquip(item)) return false;
      if (!weaponsCompatible(this.equips.get($slot(_templateObject16$h || (_templateObject16$h = _taggedTemplateLiteral(["weapon"])))), item)) return false;
      this.equips.set($slot(_templateObject17$g || (_templateObject17$g = _taggedTemplateLiteral(["off-hand"]))), item);
      return true;
    }
  }, {
    key: "getHoldingFamiliar",
    value: function getHoldingFamiliar(item) {
      switch (kolmafia.toSlot(item)) {
        case $slot(_templateObject18$g || (_templateObject18$g = _taggedTemplateLiteral(["weapon"]))):
          return $familiar(_templateObject19$f || (_templateObject19$f = _taggedTemplateLiteral(["Disembodied Hand"])));
        case $slot(_templateObject20$d || (_templateObject20$d = _taggedTemplateLiteral(["off-hand"]))):
          return $familiar(_templateObject21$d || (_templateObject21$d = _taggedTemplateLiteral(["Left-Hand Man"])));
        case $slot(_templateObject22$d || (_templateObject22$d = _taggedTemplateLiteral(["pants"]))):
          return $familiar(_templateObject23$d || (_templateObject23$d = _taggedTemplateLiteral(["Fancypants Scarecrow"])));
        case $slot(_templateObject24$d || (_templateObject24$d = _taggedTemplateLiteral(["hat"]))):
          return $familiar(_templateObject25$d || (_templateObject25$d = _taggedTemplateLiteral(["Mad Hatrack"])));
        default:
          return undefined;
      }
    }
    /**
     * Returns the bonus value associated with a given item.
     *
     * @param item The item to check the bonus of.
     * @returns The bonus assigned to that item.
     */
  }, {
    key: "getBonus",
    value: function getBonus(item) {
      var _a;
      return (_a = this.bonuses.get(item)) !== null && _a !== void 0 ? _a : 0;
    }
    /**
     * Applies a value to any existing bonus this item has, using a rule assigned by the `reducer` parameter
     *
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @param reducer Function that combines new and current bonus
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "applyBonus",
    value: function applyBonus(item, value, reducer) {
      var previous = this.getBonus(item);
      return this.setBonus(item, reducer(value, previous));
    }
    /**
     * Sets the bonus value of an item equal to a given value, overriding any current bonus assigned.
     *
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "setBonus",
    value: function setBonus(item, value) {
      this.bonuses.set(item, value);
      return value;
    }
    /**
     * Adds a value to any existing bonus this item has
     *
     * @param item The item to try to add a bonus to.
     * @param value The value to try to add.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "addBonus",
    value: function addBonus(item, value) {
      return this.applyBonus(item, value, (a, b) => a + b);
    }
    /**
     * Apply the given items' bonuses to the outfit, using a rule given by the reducer
     *
     * @param items A map containing items and their bonuses
     * @param reducer A way of combining new bonuses with existing bonuses
     */
  }, {
    key: "applyBonuses",
    value: function applyBonuses(items, reducer) {
      var _iterator = _createForOfIteratorHelper(items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            item = _step$value[0],
            value = _step$value[1];
          this.applyBonus(item, value, reducer);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Sets the bonuses of the given items, overriding existing bonuses
     *
     * @param items Map containing items and bonuses
     */
  }, {
    key: "setBonuses",
    value: function setBonuses(items) {
      this.applyBonuses(items, a => a);
    }
    /**
     * Adds the bonuses of the given items to any existing bonuses they ahave
     *
     * @param items Map containing items and bonuses
     */
  }, {
    key: "addBonuses",
    value: function addBonuses(items) {
      this.applyBonuses(items, (a, b) => a + b);
    }
  }, {
    key: "equipUsingFamiliar",
    value: function equipUsingFamiliar(item, slot) {
      if (![undefined, $slot(_templateObject26$d || (_templateObject26$d = _taggedTemplateLiteral(["familiar"])))].includes(slot)) return false;
      if (this.equips.has($slot(_templateObject27$d || (_templateObject27$d = _taggedTemplateLiteral(["familiar"]))))) return false;
      if (kolmafia.booleanModifier(item, "Single Equip")) return false;
      var familiar = this.getHoldingFamiliar(item);
      // Hats/pants don't get the full effect on the familiar, unlike weapons/off-hands which are basically all fully functional
      if (familiar === undefined || $familiars(_templateObject28$d || (_templateObject28$d = _taggedTemplateLiteral(["Fancypants Scarecrow, Mad Hatrack"]))).includes(familiar) && slot === undefined) {
        return false;
      }
      if (!this.equip(familiar)) return false;
      this.equips.set($slot(_templateObject29$d || (_templateObject29$d = _taggedTemplateLiteral(["familiar"]))), item);
      return true;
    }
  }, {
    key: "equipItem",
    value: function equipItem(item, slot) {
      return this.haveEquipped(item, slot) || this.equipItemNone(item, slot) || this.isAvailable(item) && (this.equipNonAccessory(item, slot) || this.equipAccessory(item, slot) || this.equipUsingDualWield(item, slot) || this.equipUsingFamiliar(item, slot));
    }
  }, {
    key: "equipFamiliar",
    value: function equipFamiliar(familiar) {
      if (familiar === this.familiar) return true;
      if (this.familiar !== undefined) return false;
      if (familiar !== $familiar.none) {
        if (!have$g(familiar)) return false;
        if (Array.from(this.riders.values()).includes(familiar)) return false;
      }
      var item = this.equips.get($slot(_templateObject30$d || (_templateObject30$d = _taggedTemplateLiteral(["familiar"]))));
      if (item !== undefined && item !== $item.none && !kolmafia.canEquip(familiar, item)) return false;
      this.familiar = familiar;
      return true;
    }
  }, {
    key: "equipSpec",
    value: function equipSpec(spec) {
      var _this$avoid;
      var _a, _b, _c, _d, _e, _f;
      var succeeded = true;
      for (var _i = 0, _outfitSlots = outfitSlots; _i < _outfitSlots.length; _i++) {
        var slotName = _outfitSlots[_i];
        var slot = (_a = new Map([["famequip", $slot(_templateObject31$d || (_templateObject31$d = _taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject32$d || (_templateObject32$d = _taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : kolmafia.toSlot(slotName);
        var itemOrItems = spec[slotName];
        if (itemOrItems !== undefined && !this.equip(itemOrItems, slot)) succeeded = false;
      }
      var _iterator2 = _createForOfIteratorHelper((_b = spec === null || spec === void 0 ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          if (!this.equip(item)) succeeded = false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if ((spec === null || spec === void 0 ? void 0 : spec.familiar) !== undefined) {
        if (!this.equip(spec.familiar)) succeeded = false;
      }
      (_this$avoid = this.avoid).push.apply(_this$avoid, _toConsumableArray((_c = spec === null || spec === void 0 ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : []));
      this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : false);
      if (spec.modifier) {
        var _this$modifier;
        if (Array.isArray(spec.modifier)) (_this$modifier = this.modifier).push.apply(_this$modifier, _toConsumableArray(spec.modifier));else this.modifier.push(spec.modifier);
      }
      if (spec.modes) {
        if (!this.setModes(spec.modes)) {
          succeeded = false;
        }
      }
      if (spec.riders) {
        if (spec.riders["buddy-bjorn"] && !this.bjornify(spec.riders["buddy-bjorn"])) succeeded = false;
        if (spec.riders["crown-of-thrones"] && !this.enthrone(spec.riders["crown-of-thrones"])) succeeded = false;
      }
      if (spec.bonuses) {
        this.addBonuses(spec.bonuses);
      }
      this.beforeDress.apply(this, _toConsumableArray((_e = spec.beforeDress) !== null && _e !== void 0 ? _e : []));
      this.afterDress.apply(this, _toConsumableArray((_f = spec.afterDress) !== null && _f !== void 0 ? _f : []));
      return succeeded;
    }
    /**
     * Equip the first thing that can be equipped to the outfit.
     *
     * @param things The things to equip.
     * @param slot The slot to equip them.
     * @returns True if one of the things is equipped, and false otherwise.
     */
  }, {
    key: "equipFirst",
    value: function equipFirst(things, slot) {
      // some() returns false on an empty array, yet every() returns true.
      // This keeps behavior consistent between slotful and slotless equipping.
      if (things.length === 0) return true;
      return things.some(val => this.equip(val, slot));
    }
    /**
     * Equip a thing to the outfit.
     *
     * If no slot is given, then the thing will be equipped wherever possible
     * (possibly using dual-wielding, any of the accessory slots, or as
     * familiar equipment). If it is impossible to add this thing anywhere to
     * the outfit, this function will return false.
     *
     * If a slot is given, the item will be equipped only in that slot. If the
     * slot is filled with a different item, this function will return false.
     *
     * If the thing is already equipped in the provided slot, or if no slot is
     * given and the thing is already equipped in any slot, this function will
     * return true and not change the outfit.
     *
     * @param thing The thing or things to equip.
     * @param slot The slot to equip them.
     * @returns True if the thing was sucessfully equipped, and false otherwise.
     */
  }, {
    key: "equip",
    value: function equip(thing, slot) {
      if (Array.isArray(thing)) {
        if (slot !== undefined) return this.equipFirst(thing, slot);
        return thing.every(val => this.equip(val));
      }
      if (thing instanceof kolmafia.Item) return this.equipItem(thing, slot);
      if (thing instanceof kolmafia.Familiar) return this.equipFamiliar(thing);
      if (thing instanceof Outfit) return this.equipSpec(thing.spec());
      return this.equipSpec(thing);
    }
  }, {
    key: "equipRider",
    value:
    /**
     * Add a rider to the outfit.
     *
     * This function does *not* equip the corresponding item; it must be equipped separately.
     *
     * If a familiar is already specified as the rider that is different from the provided target, this function will return false and not change the rider.
     * @param target The familiar to use as the rider, or a ranked list of familiars to try to use as the rider.
     * @returns True if we successfully set the slot to a valid rider.
     */
    function equipRider(target, slot) {
      var current = this.riders.get(slot);
      var targets = Array.isArray(target) ? target : [target];
      if (current) {
        return targets.includes(current);
      }
      // Gather the set of riders that are equipped in other rider slots.
      var otherRiders = _toConsumableArray(this.riders.entries()).filter(_ref => {
        var _ref2 = _slicedToArray(_ref, 1),
          key = _ref2[0];
        return slot !== key;
      }).map(_ref3 => {
        var _ref4 = _slicedToArray(_ref3, 2),
          value = _ref4[1];
        return value;
      });
      var fam = targets.find(f => have$g(f) && this.familiar !== f && !otherRiders.includes(f));
      if (fam) {
        this.riders.set(slot, fam);
        return true;
      }
      return false;
    }
    /**
     * Add a bjornified familiar to the outfit.
     *
     * This function does *not* equip the buddy bjorn itself; it must be equipped separately.
     *
     * If a familiar is already specified for the buddy bjorn that is different from the provided target, this function will return false and not change the buddy bjorn.
     * @param target The familiar to bjornify, or a ranked list of familiars to try to bjornify.
     * @returns True if we successfully set the bjorn to a valid target.
     */
  }, {
    key: "bjornify",
    value: function bjornify(target) {
      return this.equipRider(target, $slot(_templateObject33$d || (_templateObject33$d = _taggedTemplateLiteral(["buddy-bjorn"]))));
    }
    /**
     * Add anenthroned familiar to the outfit.
     *
     * This function does *not* equip the crown of thrones itself; it must be equipped separately.
     *
     * If a familiar is already specified for the crown of thrones that is different from the provided target, this function will return false and not change the crown of thrones.
     * @param target The familiar to enthrone, or a ranked list of familiars to try to enthrone.
     * @returns True if we successfully set the enthrone to a valid target.
     */
  }, {
    key: "enthrone",
    value: function enthrone(target) {
      return this.equipRider(target, $slot(_templateObject34$c || (_templateObject34$c = _taggedTemplateLiteral(["crown-of-thrones"]))));
    }
    /**
     * Set the provided modes for items that may be equipped in the outfit.
     *
     * This function does *not* equip items for the set modes; they must be
     * equipped separately.
     *
     * If a mode is already set for an item that is different from the provided
     * mode, this function will return false and not change the mode for that
     * item. (But other modes might still be changed if they are compatible.)
     *
     * Note that the superhero and instuctions of a retrocape can be set
     * independently (`undefined` is treated as "don't care").
     *
     * @param modes Modes to set in this outfit.
     * @returns True if all modes were sucessfully set, and false otherwise.
     */
  }, {
    key: "setModes",
    value: function setModes(modes) {
      var _a, _b;
      var compatible = true;
      // Check if the new modes are compatible with existing modes
      for (var _i2 = 0, _modeableCommands = modeableCommands; _i2 < _modeableCommands.length; _i2++) {
        var mode = _modeableCommands[_i2];
        if (mode === "retrocape") continue; // checked below
        if (this.modes[mode] && modes[mode] && this.modes[mode] !== modes[mode]) {
          compatible = false;
        }
      }
      // Check if retrocape modes are compatible
      // (Parts that are undefined are compatible with everything)
      if (this.modes["retrocape"] && modes["retrocape"]) {
        if (this.modes["retrocape"][0] && modes["retrocape"][0] && this.modes["retrocape"][0] !== modes["retrocape"][0]) {
          compatible = false;
        }
        if (this.modes["retrocape"][1] && modes["retrocape"][1] && this.modes["retrocape"][1] !== modes["retrocape"][1]) {
          compatible = false;
        }
        this.modes["retrocape"][0] = (_a = this.modes["retrocape"][0]) !== null && _a !== void 0 ? _a : modes["retrocape"][0];
        this.modes["retrocape"][1] = (_b = this.modes["retrocape"][1]) !== null && _b !== void 0 ? _b : modes["retrocape"][1];
      }
      this.modes = _objectSpread2(_objectSpread2({}, modes), this.modes);
      return compatible;
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip().
     *
     * This does not change the current outfit.
     *
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing can be equipped.
     */
  }, {
    key: "canEquip",
    value: function canEquip(thing, slot) {
      var outfit = this.clone();
      return outfit.equip(thing, slot);
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip(); if it is, do so.
     *
     * This does change the current outfit.
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing was successfully equipped.
     */
  }, {
    key: "tryEquip",
    value: function tryEquip(thing, slot) {
      return this.canEquip(thing, slot) && this.equip(thing, slot);
    }
  }, {
    key: "afterDress",
    value: function afterDress() {
      var _this$postActions;
      (_this$postActions = this.postActions).push.apply(_this$postActions, arguments);
    }
  }, {
    key: "beforeDress",
    value: function beforeDress() {
      var _this$preActions;
      (_this$preActions = this.preActions).push.apply(_this$preActions, arguments);
    }
    /**
     * Equip this outfit.
     */
  }, {
    key: "_dress",
    value: function _dress(refreshed) {
      if (this.familiar) kolmafia.useFamiliar(this.familiar);
      var targetEquipment = Array.from(this.equips.values());
      var usedSlots = new Set();
      // First, we equip non-accessory equipment.
      var nonaccessorySlots = $slots(_templateObject35$c || (_templateObject35$c = _taggedTemplateLiteral(["weapon, off-hand, hat, back, shirt, pants, familiar"])));
      var bjorn = this.riders.get($slot(_templateObject36$c || (_templateObject36$c = _taggedTemplateLiteral(["buddy-bjorn"]))));
      if (bjorn && (this.equips.get($slot(_templateObject37$c || (_templateObject37$c = _taggedTemplateLiteral(["back"])))) === $item(_templateObject38$b || (_templateObject38$b = _taggedTemplateLiteral(["Buddy Bjorn"]))) || this.getBonus($item(_templateObject39$b || (_templateObject39$b = _taggedTemplateLiteral(["Buddy Bjorn"])))))) {
        usedSlots.add($slot(_templateObject40$b || (_templateObject40$b = _taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(_templateObject41$b || (_templateObject41$b = _taggedTemplateLiteral(["crown-of-thrones"]))));
      }
      var crown = this.riders.get($slot(_templateObject42$a || (_templateObject42$a = _taggedTemplateLiteral(["crown-of-thrones"]))));
      if (crown && (this.equips.get($slot(_templateObject43$a || (_templateObject43$a = _taggedTemplateLiteral(["hat"])))) === $item(_templateObject44$a || (_templateObject44$a = _taggedTemplateLiteral(["Crown of Thrones"]))) || this.getBonus($item(_templateObject45$a || (_templateObject45$a = _taggedTemplateLiteral(["Crown of Thrones"])))))) {
        usedSlots.add($slot(_templateObject46$a || (_templateObject46$a = _taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(_templateObject47$a || (_templateObject47$a = _taggedTemplateLiteral(["crown-of-thrones"]))));
      }
      // Then, we remove existing equipment only when it would block the new outfit:
      // 1. An existing 2-handed weapon would block offhands
      if (weaponHands(kolmafia.equippedItem($slot(_templateObject48$a || (_templateObject48$a = _taggedTemplateLiteral(["weapon"]))))) !== 1 && this.equips.has($slot(_templateObject49$a || (_templateObject49$a = _taggedTemplateLiteral(["offhand"])))) && !this.equips.has($slot(_templateObject50$9 || (_templateObject50$9 = _taggedTemplateLiteral(["weapon"]))))) kolmafia.equip($slot(_templateObject51$9 || (_templateObject51$9 = _taggedTemplateLiteral(["weapon"]))), $item.none);
      // 2. An existing dual-fisted ranged weapon would block melee weapons.
      if (!weaponsCompatible(this.equips.get($slot(_templateObject52$9 || (_templateObject52$9 = _taggedTemplateLiteral(["weapon"])))), kolmafia.equippedItem($slot(_templateObject53$8 || (_templateObject53$8 = _taggedTemplateLiteral(["off-hand"])))))) kolmafia.equip($slot(_templateObject54$8 || (_templateObject54$8 = _taggedTemplateLiteral(["off-hand"]))), $item.none);
      // 3. Equipment that will be used in a different slot than
      // where it is currently equipped, to avoid a mafia issue.
      // Order is anchored here to prevent DFSS shenanigans
      var _iterator3 = _createForOfIteratorHelper(nonaccessorySlots),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var slot = _step3.value;
          if (targetEquipment.includes(kolmafia.equippedItem(slot)) && this.equips.get(slot) !== kolmafia.equippedItem(slot) || this.avoid.includes(kolmafia.equippedItem(slot))) kolmafia.equip(slot, $item.none);
        }
        // Then we equip all the non-accessory equipment.
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(nonaccessorySlots),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _slot = _step4.value;
          var equipment = this.equips.get(_slot);
          if (equipment) {
            kolmafia.equip(_slot, equipment);
            usedSlots.add(_slot);
          }
        }
        // Next, we equip accessories
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var accessorySlots = $slots(_templateObject55$7 || (_templateObject55$7 = _taggedTemplateLiteral(["acc1, acc2, acc3"])));
      var accessoryEquips = accessorySlots.map(slot => this.equips.get(slot)).filter(item => item !== undefined);
      // To plan how to equip accessories, first check which accessories are
      // already equipped in some accessory slot. There is no need to move them,
      // since KoL doesn't care what order accessories are equipped in.
      var missingAccessories = []; // accessories that are not already equipped
      var _iterator5 = _createForOfIteratorHelper(accessoryEquips),
        _step5;
      try {
        var _loop = function _loop() {
          var accessory = _step5.value;
          var alreadyEquipped = accessorySlots.find(slot => !usedSlots.has(slot) && kolmafia.equippedItem(slot) === accessory);
          if (alreadyEquipped) {
            usedSlots.add(alreadyEquipped);
          } else {
            missingAccessories.push(accessory);
          }
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop();
        }
        // Then, for all accessories that are not currently equipped, use the first
        // open slot to place them.
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      for (var _i3 = 0, _missingAccessories = missingAccessories; _i3 < _missingAccessories.length; _i3++) {
        var accessory = _missingAccessories[_i3];
        var unusedSlot = accessorySlots.find(slot => !usedSlots.has(slot));
        if (unusedSlot === undefined) {
          // This should only occur if there is a bug in .dress()
          throw "No accessory slots remaining";
        }
        kolmafia.equip(unusedSlot, accessory);
        usedSlots.add(unusedSlot);
      }
      // Remaining slots are filled by the maximizer
      var modes = convertToLibramModes(this.modes);
      if (this.modifier.length > 0 || _toConsumableArray(this.bonuses).filter(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 2),
          value = _ref6[1];
        return value;
      }).length > 0) {
        var allRequirements = [new Requirement(this.modifier, {
          preventSlot: _toConsumableArray(usedSlots),
          preventEquip: this.avoid,
          modes: modes,
          bonusEquip: this.bonuses
        })];
        if (refreshed) allRequirements.push(FORCE_REFRESH_REQUIREMENT);
        if (!Requirement.merge(allRequirements).maximize()) {
          if (!refreshed) {
            kolmafia.cliExecute("refresh inventory");
            this._dress(true);
            return;
          } else throw new Error("Failed to maximize properly!");
        }
        kolmafia.logprint("Maximize: ".concat(this.modifier));
      }
      // Set the modes of any equipped items.
      applyModes(modes);
      // Handle the rider slots next
      if (bjorn && kolmafia.haveEquipped($item(_templateObject56$6 || (_templateObject56$6 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
        if (kolmafia.myEnthronedFamiliar() === bjorn) kolmafia.enthroneFamiliar($familiar.none);
        if (kolmafia.myBjornedFamiliar() !== bjorn) kolmafia.bjornifyFamiliar(bjorn);
      }
      if (crown && kolmafia.haveEquipped($item(_templateObject57$6 || (_templateObject57$6 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
        if (kolmafia.myBjornedFamiliar() === crown) kolmafia.bjornifyFamiliar($familiar.none);
        if (kolmafia.myEnthronedFamiliar() !== crown) kolmafia.enthroneFamiliar(crown);
      }
      // Verify that all equipment was indeed equipped
      if (this.familiar !== undefined && kolmafia.myFamiliar() !== this.familiar) throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");
      var _iterator6 = _createForOfIteratorHelper(nonaccessorySlots),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _slot2 = _step6.value;
          if (this.equips.has(_slot2) && kolmafia.equippedItem(_slot2) !== this.equips.get(_slot2)) {
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var _iterator7 = _createForOfIteratorHelper(accessoryEquips),
        _step7;
      try {
        var _loop2 = function _loop2() {
          var accessory = _step7.value;
          if (kolmafia.equippedAmount(accessory) < accessoryEquips.filter(acc => acc === accessory).length) {
            throw "Failed to fully dress (expected: acc ".concat(accessory, ")");
          }
        };
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      for (var _i4 = 0, _arr = [[$slot(_templateObject58$5 || (_templateObject58$5 = _taggedTemplateLiteral(["buddy-bjorn"]))), $item(_templateObject59$5 || (_templateObject59$5 = _taggedTemplateLiteral(["Buddy Bjorn"]))), kolmafia.myBjornedFamiliar], [$slot(_templateObject60$5 || (_templateObject60$5 = _taggedTemplateLiteral(["crown-of-thrones"]))), $item(_templateObject61$5 || (_templateObject61$5 = _taggedTemplateLiteral(["Crown of Thrones"]))), kolmafia.myEnthronedFamiliar]]; _i4 < _arr.length; _i4++) {
        var _arr$_i = _slicedToArray(_arr[_i4], 3),
          rider = _arr$_i[0],
          throne = _arr$_i[1],
          checkingFunction = _arr$_i[2];
        var wanted = this.riders.get(rider);
        if (_toConsumableArray(this.equips.values()).includes(throne) && wanted && checkingFunction() !== wanted) {
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
        }
      }
    }
  }, {
    key: "dress",
    value: function dress() {
      var _iterator8 = _createForOfIteratorHelper(this.preActions),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var action = _step8.value;
          action();
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      this._dress(false);
      var _iterator9 = _createForOfIteratorHelper(this.postActions),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _action = _step9.value;
          _action();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
    /**
     * Build an Outfit identical to this outfit.
     */
  }, {
    key: "clone",
    value: function clone() {
      var result = new Outfit();
      result.equips = new Map(this.equips);
      result.skipDefaults = this.skipDefaults;
      result.familiar = this.familiar;
      result.modifier = _toConsumableArray(this.modifier);
      result.avoid = _toConsumableArray(this.avoid);
      result.modes = _objectSpread2({}, this.modes);
      result.riders = new Map(this.riders);
      result.bonuses = new Map(this.bonuses);
      result.beforeDress.apply(result, _toConsumableArray(this.preActions));
      result.afterDress.apply(result, _toConsumableArray(this.postActions));
      return result;
    }
    /**
     * Build an OutfitSpec identical to this outfit.
     */
  }, {
    key: "spec",
    value: function spec() {
      var _a;
      var result = {
        modifier: _toConsumableArray(this.modifier),
        avoid: _toConsumableArray(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: _objectSpread2({}, this.modes),
        bonuses: new Map(this.bonuses)
      };
      if (this.familiar) result.familiar = this.familiar;
      // Add all equipment forced in a particular slot
      for (var _i5 = 0, _outfitSlots2 = outfitSlots; _i5 < _outfitSlots2.length; _i5++) {
        var slotName = _outfitSlots2[_i5];
        var entry = this.equips.get((_a = new Map([["famequip", $slot(_templateObject62$5 || (_templateObject62$5 = _taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject63$4 || (_templateObject63$4 = _taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : kolmafia.toSlot(slotName));
        if (entry) result[slotName] = entry;
      }
      // Include the riders
      var riders = {};
      var buddyRider = this.riders.get($slot(_templateObject64$4 || (_templateObject64$4 = _taggedTemplateLiteral(["buddy-bjorn"]))));
      if (buddyRider !== undefined) riders["buddy-bjorn"] = buddyRider;
      var throneRider = this.riders.get($slot(_templateObject65$4 || (_templateObject65$4 = _taggedTemplateLiteral(["crown-of-thrones"]))));
      if (throneRider !== undefined) riders["crown-of-thrones"] = throneRider;
      if (buddyRider !== undefined || throneRider !== undefined) result.riders = riders;
      if (this.preActions.length) result.beforeDress = this.preActions;
      if (this.postActions.length) result.afterDress = this.postActions;
      return result;
    }
  }], [{
    key: "current",
    value: function current() {
      var _a;
      var outfit = new Outfit();
      var familiar = kolmafia.myFamiliar();
      if (outfit.equip(familiar)) {
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar, ")");
      }
      for (var _i6 = 0, _outfitSlots3 = outfitSlots; _i6 < _outfitSlots3.length; _i6++) {
        var slotName = _outfitSlots3[_i6];
        var slot = (_a = new Map([["famequip", $slot(_templateObject66$4 || (_templateObject66$4 = _taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject67$4 || (_templateObject67$4 = _taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : kolmafia.toSlot(slotName);
        var item = kolmafia.equippedItem(slot);
        if (!outfit.equip(item, slot)) {
          throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item, ")");
        }
      }
      if (kolmafia.haveEquipped($item(_templateObject68$4 || (_templateObject68$4 = _taggedTemplateLiteral(["Crown of Thrones"]))))) outfit.riders.set($slot(_templateObject69$4 || (_templateObject69$4 = _taggedTemplateLiteral(["crown-of-thrones"]))), kolmafia.myEnthronedFamiliar());
      if (kolmafia.haveEquipped($item(_templateObject70$4 || (_templateObject70$4 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) outfit.riders.set($slot(_templateObject71$4 || (_templateObject71$4 = _taggedTemplateLiteral(["buddy-bjorn"]))), kolmafia.myBjornedFamiliar());
      outfit.setModes(getCurrentModes());
      return outfit;
    }
  }, {
    key: "from",
    value: function from(spec) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var _a;
      var outfit = new Outfit();
      if (spec instanceof Requirement) {
        var result = {};
        result.modifier = spec.maximizeParameters;
        if ((_a = spec.maximizeOptions.forceEquip) === null || _a === void 0 ? void 0 : _a.length) {
          result.equip = spec.maximizeOptions.forceEquip;
        }
        result.avoid = spec.maximizeOptions.preventEquip;
        result.bonuses = spec.maximizeOptions.bonusEquip;
        if (spec.maximizeOptions.modes) {
          result.modes = convertFromLibramModes(spec.maximizeOptions.modes);
        }
        // Not sure if this is necessary
        var cleanedResult = Object.fromEntries(_toConsumableArray(Object.entries(result)).filter(_ref7 => {
          var _ref8 = _slicedToArray(_ref7, 2),
            v = _ref8[1];
          return v !== undefined;
        }));
        return Outfit.from(cleanedResult);
      }
      var success = outfit.equip(spec);
      if (!success && error) throw error;
      return success ? outfit : null;
    }
  }]);
}();
/**
 * Get the modes of this outfit in a type compatible with Libram.
 *
 * This conversion is needed since we store the retrocape modes
 * internally as an array, but libram uses a string.
 *
 * @returns The modes equipped to this outfit.
 */
function convertToLibramModes(modes) {
  var _a;
  return {
    backupcamera: modes["backupcamera"],
    umbrella: modes["umbrella"],
    snowsuit: modes["snowsuit"],
    edpiece: modes["edpiece"],
    retrocape: (_a = modes["retrocape"]) === null || _a === void 0 ? void 0 : _a.filter(s => s !== undefined).join(" "),
    parka: modes["parka"],
    jillcandle: modes["jillcandle"]
  };
}
function convertFromLibramModes(modes) {
  return modes.retrocape ? _objectSpread2(_objectSpread2({}, modes), {}, {
    retrocape: modes.retrocape.split(" ")
  }) : modes;
}
/**
 * Get the current modes of all items.
 *
 * @returns The current mode settings for all items, equipped or not.
 */
function getCurrentModes() {
  return {
    backupcamera: getMode("backupCameraMode", ["ml", "meat", "init"]),
    umbrella: getMode("umbrellaState", ["broken", "forward-facing", "bucket style", "pitchfork style", "constantly twirling", "cocoon"]),
    snowsuit: getMode("snowsuit", ["eyebrows", "smirk", "nose", "goatee", "hat"]),
    edpiece: getMode("edPiece", ["bear", "owl", "puma", "hyena", "mouse", "weasel", "fish"]),
    retrocape: [getMode("retroCapeSuperhero", ["vampire", "heck", "robot"]), getMode("retroCapeWashingInstructions", ["hold", "thrill", "kiss", "kill"])],
    parka: getMode("parkaMode", ["kachungasaur", "dilophosaur", "ghostasaurus", "spikolodon", "pterodactyl"]),
    jillcandle: getMode("jillcandle", ["disco", "ultraviolet", "reading", "red"])
  };
}
/**
 * Get the current value for a mode in a type-safe way.
 *
 * @param property The mafia property for the mode.
 * @param options A typed list of options for the mode.
 * @returns The mode if the property value matched a valid option, or undefined.
 */
function getMode(property, options) {
  var val = get$1(property, "");
  return options.find(s => s === val); // .includes has type issues
}
/**
 * Returns true if the provided weapons are compatible for dual-wielding.
 * (Ranged weapons cannot be equipped alongside melee/myst weapons).
 */
function weaponsCompatible(weapon, offhand) {
  if (!weapon || weapon === $item(_templateObject72$4 || (_templateObject72$4 = _taggedTemplateLiteral(["none"])))) return true;
  if (!offhand || offhand === $item(_templateObject73$4 || (_templateObject73$4 = _taggedTemplateLiteral(["none"])))) return true;
  if (kolmafia.toSlot(offhand) !== $slot(_templateObject74$4 || (_templateObject74$4 = _taggedTemplateLiteral(["weapon"])))) return true;
  var weaponStat = kolmafia.weaponType(weapon);
  var offhandStat = kolmafia.weaponType(offhand);
  if (weaponStat === $stat(_templateObject75$4 || (_templateObject75$4 = _taggedTemplateLiteral(["Moxie"]))) && (offhandStat === $stat(_templateObject76$4 || (_templateObject76$4 = _taggedTemplateLiteral(["Mysticality"]))) || offhandStat === $stat(_templateObject77$4 || (_templateObject77$4 = _taggedTemplateLiteral(["Muscle"]))))) return false;
  if (offhandStat === $stat(_templateObject78$4 || (_templateObject78$4 = _taggedTemplateLiteral(["Moxie"]))) && (weaponStat === $stat(_templateObject79$4 || (_templateObject79$4 = _taggedTemplateLiteral(["Mysticality"]))) || weaponStat === $stat(_templateObject80$4 || (_templateObject80$4 = _taggedTemplateLiteral(["Muscle"]))))) return false;
  return true;
}

var _templateObject$j;
var grimoireCCS = "grimoire_macro";
/**
 * An Engine which allows for custom engine state. Most beginning users should
 * use the Engine class instead.
 */
var ContextualEngine = /*#__PURE__*/function () {
  /**
   * Create the engine.
   * @param tasks A list of tasks for looking up task dependencies.
   * @param options Basic configuration of the engine.
   */
  function ContextualEngine(tasks, options) {
    _classCallCheck(this, ContextualEngine);
    this.attempts = {};
    this.propertyManager = new PropertiesManager();
    this.tasks_by_name = new Map();
    this.cachedCcsContents = "";
    this.options = options !== null && options !== void 0 ? options : {};
    this.tasks = tasks.map(task => _objectSpread2(_objectSpread2({}, this.options.default_task_options), task));
    var _iterator = _createForOfIteratorHelper(this.tasks),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var task = _step.value;
        this.tasks_by_name.set(task.name, task);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this.initPropertiesManager(this.propertyManager);
  }
  /**
   * Determine the next task to perform.
   * By default, this is the first task in the task list that is available.
   * @returns The next task to perform, or undefined if no tasks are available.
   */
  return _createClass(ContextualEngine, [{
    key: "getNextTask",
    value: function getNextTask() {
      return this.tasks.find(task => this.available(task));
    }
    /**
     * Continually get the next task and execute it.
     * @param actions If given, only perform up to this many tasks.
     */
  }, {
    key: "run",
    value: function run(actions) {
      for (var i = 0; i < (actions !== null && actions !== void 0 ? actions : Infinity); i++) {
        var task = this.getNextTask();
        if (!task) return;
        this.execute(task);
      }
    }
    /**
     * Close the engine and reset all properties.
     * After this has been called, this object should not be used.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      this.propertyManager.resetAll();
      kolmafia.setAutoAttack(0);
    }
    /**
     * Check if the given task is available at this moment.
     * @param task: The task to check.
     * @returns true if all dependencies are complete and the task is ready.
     *  Note that dependencies are not checked transitively. That is, if
     *  A depends on B which depends on C, then A is ready if B is complete
     *  (regardless of if C is complete or not).
     */
  }, {
    key: "available",
    value: function available(task) {
      var _a, _b;
      if (((_a = task.limit) === null || _a === void 0 ? void 0 : _a.skip) !== undefined && this.attempts[task.name] >= task.limit.skip) return false;
      var _iterator2 = _createForOfIteratorHelper((_b = task.after) !== null && _b !== void 0 ? _b : []),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var after = _step2.value;
          var after_task = this.tasks_by_name.get(after);
          if (after_task === undefined) throw "Unknown task dependency ".concat(after, " on ").concat(task.name);
          if (!after_task.completed(this.getContext(task))) return false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (task.ready && !task.ready(this.getContext(task))) return false;
      if (task.completed(this.getContext(task))) return false;
      return true;
    }
    /**
     * Perform all steps to execute the provided task.
     * This is the main entry point for the Engine.
     * @param task The current executing task.
     */
  }, {
    key: "execute",
    value: function execute(task) {
      var _a, _b, _c, _d, _e;
      this.printExecutingMessage(task);
      // Determine the proper postcondition for after the task executes.
      var postcondition = (_b = (_a = task.limit) === null || _a === void 0 ? void 0 : _a.guard) === null || _b === void 0 ? void 0 : _b.call(_a, this.getContext(task));
      // Acquire any items and effects first, possibly for later execution steps.
      this.acquireItems(task);
      this.acquireEffects(task);
      // Prepare the outfit, with resources.
      var task_combat = (_d = (_c = task.combat) === null || _c === void 0 ? void 0 : _c.clone()) !== null && _d !== void 0 ? _d : new CombatStrategy();
      var outfit = this.createOutfit(task);
      var task_resources = new CombatResources();
      this.customize(task, outfit, task_combat, task_resources);
      this.dress(task, outfit);
      // Prepare combat and choices
      this.setCombat(task, task_combat, task_resources);
      this.setChoices(task, this.propertyManager);
      // Actually perform the task
      var _iterator3 = _createForOfIteratorHelper(task_resources.all()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var resource = _step3.value;
          (_e = resource.prepare) === null || _e === void 0 ? void 0 : _e.call(resource, this.getContext(task));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.prepare(task);
      this.do(task);
      while (this.shouldRepeatAdv(task)) {
        _set("lastEncounter", "");
        this.do(task);
      }
      this.post(task);
      // Mark that we tried the task, and apply limits
      this.markAttempt(task);
      this.checkLimits(task, postcondition);
    }
    /**
     * Print a message to indicate the task has begun.
     * @param task The current executing task.
     */
  }, {
    key: "printExecutingMessage",
    value: function printExecutingMessage(task) {
      kolmafia.print("");
      kolmafia.print("Executing ".concat(task.name), "blue");
    }
    /**
     * Acquire all items for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireItems",
    value: function acquireItems(task) {
      var _a;
      var acquire = undelay(task.acquire, this.getContext(task));
      var _iterator4 = _createForOfIteratorHelper(acquire || []),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var to_get = _step4.value;
          var num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1;
          var num_have = kolmafia.itemAmount(to_get.item) + kolmafia.equippedAmount(to_get.item);
          if (num_needed <= num_have) continue;
          if (to_get.useful !== undefined && !to_get.useful()) continue;
          if (to_get.get) {
            to_get.get();
          } else if (to_get.price !== undefined) {
            kolmafia.buy(to_get.item, num_needed - num_have, to_get.price);
          } else if (Object.keys(kolmafia.getRelated(to_get.item, "fold")).length > 0) {
            kolmafia.cliExecute("fold ".concat(to_get.item));
          } else {
            kolmafia.retrieveItem(to_get.item, num_needed);
          }
          if (kolmafia.itemAmount(to_get.item) + kolmafia.equippedAmount(to_get.item) < num_needed && !to_get.optional) {
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * Acquire all effects for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireEffects",
    value: function acquireEffects(task) {
      var _a;
      var effects = (_a = undelay(task.effects, this.getContext(task))) !== null && _a !== void 0 ? _a : [];
      var songs = effects.filter(effect => isSong(effect));
      if (songs.length > maxSongs()) throw "Too many AT songs";
      var extraSongs = Object.keys(kolmafia.myEffects()).map(effectName => kolmafia.toEffect(effectName)).filter(effect => isSong(effect) && !songs.includes(effect));
      while (songs.length + extraSongs.length > maxSongs()) {
        var toRemove = extraSongs.pop();
        if (toRemove === undefined) {
          break;
        } else {
          uneffect(toRemove);
        }
      }
      var _iterator5 = _createForOfIteratorHelper(effects),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var effect = _step5.value;
          ensureEffect(effect);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
    /**
     * Create an outfit for the task with all required equipment.
     * @param task The current executing task.
     */
  }, {
    key: "createOutfit",
    value: function createOutfit(task) {
      var spec = undelay(task.outfit, this.getContext(task));
      if (spec instanceof Outfit) return spec.clone();
      var outfit = new Outfit();
      if (spec !== undefined) {
        if (!outfit.equip(spec) && !this.options.allow_partial_outfits) {
          throw "Unable to equip all items for ".concat(task.name);
        }
      }
      return outfit;
    }
    /**
     * Equip the outfit for the task.
     * @param task The current executing task.
     * @param outfit The outfit for the task, possibly augmented by the engine.
     */
  }, {
    key: "dress",
    value: function dress(task, outfit) {
      if (task.do instanceof kolmafia.Location) kolmafia.setLocation(task.do);
      outfit.dress();
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    /**
     * Perform any engine-specific customization for the outfit and combat plan.
     *
     * This is a natural method to override in order to:
     *   * Enable the use of any resources in the outfit or combat (e.g., allocate banishers).
     *   * Equip a default outfit.
     *   * Determine additional monster macros at a global level (e.g., use flyers).
     * @param task The current executing task.
     * @param outfit The outfit for the task.
     * @param combat The combat strategy so far for the task.
     * @param resources The combat resources assigned so far for the task.
     */
  }, {
    key: "customize",
    value: function customize(task, outfit, combat, resources) {
      // do nothing by default
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */
    /**
     * Set the choice settings for the task.
     * @param task The current executing task.
     * @param manager The property manager to use.
     */
  }, {
    key: "setChoices",
    value: function setChoices(task, manager) {
      var _a;
      for (var _i = 0, _Object$entries = Object.entries(undelay((_a = task.choices) !== null && _a !== void 0 ? _a : {}, this.getContext(task))); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (value === undefined) continue;
        manager.setChoice(parseInt(key), value);
      }
    }
    /**
     * Save the combat macro for this task.
     * @param task The current executing task.
     * @param task_combat The completed combat strategy far for the task.
     * @param task_resources The combat resources assigned for the task.
     */
  }, {
    key: "setCombat",
    value: function setCombat(task, task_combat, task_resources) {
      var _a;
      // Save regular combat macro
      var macro = task_combat.compile(task_resources, (_a = this.options) === null || _a === void 0 ? void 0 : _a.combat_defaults, task.do instanceof kolmafia.Location ? task.do : undefined, this.getContext(task));
      macro.save();
      if (!this.options.ccs) {
        // Use the macro through a CCS file
        var otherCCSEntries = task_combat.compileCcs();
        var ccsContents = ["[default]", "\"".concat(macro.toString(), "\"")].concat(_toConsumableArray(otherCCSEntries)).join("\n");
        // Log Macro + other CCS
        kolmafia.logprint("CCS: ".concat(ccsContents.replace("\n", "\\n ")));
        if (ccsContents !== this.cachedCcsContents) {
          kolmafia.writeCcs(ccsContents, grimoireCCS);
          kolmafia.cliExecute("ccs ".concat(grimoireCCS)); // force Mafia to reparse the ccs
          this.cachedCcsContents = ccsContents;
        }
      }
      // Save autoattack combat macro
      var autoattack = task_combat.compileAutoattack(this.getContext(task));
      if (autoattack.toString().length > 1) {
        kolmafia.logprint("Autoattack macro: ".concat(autoattack.toString()));
        autoattack.setAutoAttack();
      } else {
        kolmafia.setAutoAttack(0);
      }
    }
    /**
     * Do any task-specific preparation.
     * @param task The current executing task.
     */
  }, {
    key: "prepare",
    value: function prepare(task) {
      var _a;
      (_a = task.prepare) === null || _a === void 0 ? void 0 : _a.call(task, this.getContext(task));
    }
    /**
     * Actually perform the task.
     * @param task The current executing task.
     */
  }, {
    key: "do",
    value: function _do(task) {
      var result = typeof task.do === "function" ? task.do(this.getContext(task)) : task.do;
      if (result instanceof kolmafia.Location) kolmafia.adv1(result, -1, "");
      kolmafia.runCombat();
      while (kolmafia.inMultiFight()) kolmafia.runCombat();
      if (kolmafia.choiceFollowsFight()) kolmafia.runChoice(-1);
    }
    /**
     * Check if the task.do should be immediately repeated without any prep.
     *
     * By default, this is only used to repeat a task if we hit one of:
     *   1. Halloweener dog noncombats,
     *   2. June cleaver noncombats,
     *   3. Lil' Doctor™ bag noncombat, or
     *   4. Turtle taming noncombats.
     * @param task The current executing task.
     * @returns True if the task should be immediately repeated.
     */
  }, {
    key: "shouldRepeatAdv",
    value: function shouldRepeatAdv(task) {
      return task.do instanceof kolmafia.Location && lastEncounterWasWanderingNC();
    }
    /**
     * Do any task-specific wrapup activities.
     * @param task The current executing task.
     */
  }, {
    key: "post",
    value: function post(task) {
      var _a;
      (_a = task.post) === null || _a === void 0 ? void 0 : _a.call(task, this.getContext(task));
    }
    /**
     * Mark that an attempt was made on the current task.
     * @param task The current executing task.
     */
  }, {
    key: "markAttempt",
    value: function markAttempt(task) {
      if (!(task.name in this.attempts)) this.attempts[task.name] = 0;
      this.attempts[task.name]++;
    }
    /**
     * Check if the task has passed any of its internal limits.
     * @param task The task to check.
     * @param postcondition The postcondition from the task guard.
     * @throws An error if any of the internal limits have been passed.
     */
  }, {
    key: "checkLimits",
    value: function checkLimits(task, postcondition) {
      var _a;
      if (!task.limit) return;
      var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";
      if (!task.completed(this.getContext(task))) {
        if (task.limit.tries && this.attempts[task.name] >= task.limit.tries) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
        if (task.limit.soft && this.attempts[task.name] >= task.limit.soft) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
        if (task.limit.turns && task.do instanceof kolmafia.Location && task.do.turnsSpent >= task.limit.turns) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
        if (task.limit.unready && ((_a = task.ready) === null || _a === void 0 ? void 0 : _a.call(task, this.getContext(task)))) throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
        if (task.limit.completed) throw "Task ".concat(task.name, " is not completed, but it should be. Please check what went wrong.").concat(failureMessage);
      }
      if (postcondition && !postcondition()) {
        throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
  }, {
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return this.constructor.defaultSettings;
    }
    /**
     * Initialize properties for the script.
     * @param manager The properties manager to use.
     */
  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager(manager) {
      var _a;
      // Properties adapted from garbo
      manager.set(this.getDefaultSettings());
      if (this.options.ccs !== "") {
        if (this.options.ccs === undefined && kolmafia.readCcs(grimoireCCS) === "") {
          // Write a simple CCS so we can switch to it
          kolmafia.writeCcs("[ default ]\nabort", grimoireCCS);
        }
        manager.set({
          customCombatScript: (_a = this.options.ccs) !== null && _a !== void 0 ? _a : grimoireCCS
        });
      }
    }
  }]);
}();
ContextualEngine.defaultSettings = {
  logPreferenceChange: true,
  logPreferenceChangeFilter: _toConsumableArray(new Set([].concat(_toConsumableArray(get$1("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(a => a).join(","),
  battleAction: "custom combat script",
  autoSatisfyWithMall: true,
  autoSatisfyWithNPCs: true,
  autoSatisfyWithCoinmasters: true,
  autoSatisfyWithStash: false,
  dontStopForCounters: true,
  maximizerFoldables: true,
  hpAutoRecovery: "-0.05",
  hpAutoRecoveryTarget: "0.0",
  mpAutoRecovery: "-0.05",
  mpAutoRecoveryTarget: "0.0",
  afterAdventureScript: "",
  betweenBattleScript: "",
  choiceAdventureScript: "",
  familiarScript: "",
  currentMood: "apathetic",
  autoTuxedo: true,
  autoPinkyRing: true,
  autoGarish: true,
  allowNonMoodBurning: false,
  allowSummonBurning: true,
  libramSkillsSoftcore: "none"
};
var Engine = /*#__PURE__*/function (_ContextualEngine) {
  function Engine() {
    _classCallCheck(this, Engine);
    return _callSuper(this, Engine, arguments);
  }
  _inherits(Engine, _ContextualEngine);
  return _createClass(Engine, [{
    key: "getContext",
    value:
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function getContext(task) {
      return;
    }
  }]);
}(ContextualEngine);
function maxSongs() {
  return have$g($skill(_templateObject$j || (_templateObject$j = _taggedTemplateLiteral(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = new Set([
// Halloweener dog noncombats
"Wooof! Wooooooof!", "Playing Fetch*",
// June cleaver noncombats
"Aunts not Ants", "Bath Time", "Beware of Aligator", "Delicious Sprouts", "Hypnotic Master", "Lost and Found", "Poetic Justice", "Summer Days", "Teacher's Pet",
// Lil' Doctor™ bag noncombat
"A Pound of Cure",
// 11 Things I H8 About U
"Eye-Eye-Eye!"]);
var environmentSpecificNCs = new Map([["Even Tamer Than Usual", "indoor"], ["Never Break the Chain", "indoor"], ["Close, but Yes Cigar", "indoor"], ["Armchair Quarterback", "indoor"], ["This Turtle Rocks!", "outdoor"], ["Really Sticking Her Neck Out", "outdoor"], ["It Came from Beneath the Sewer? Great!", "outdoor"], ["Don't Be Alarmed, Now", "outdoor"], ["Puttin' it on Wax", "underground"], ["More Like... Hurtle", "underground"], ["Musk! Musk! Musk!", "underground"], ["Silent Strolling", "underwater"]]);
var zoneSpecificNCs = new Map(Object.entries(kolmafia.fileToBuffer("data/encounters.txt").split("\n").reduce((obj, line) => {
  var _a;
  var _line$split = line.split("\t"),
    _line$split2 = _slicedToArray(_line$split, 3),
    location = _line$split2[0],
    type = _line$split2[1],
    name = _line$split2[2];
  if (type !== "TURTLE" || location === "*") return obj;
  return _objectSpread2(_objectSpread2({}, obj), {}, {
    [name]: [].concat(_toConsumableArray((_a = obj[name]) !== null && _a !== void 0 ? _a : []), [kolmafia.toLocation(location)])
  });
}, {})));
/**
 * Return true if the last adv was one of:
 *   1. Halloweener dog noncombats,
 *   2. June cleaver noncombats,
 *   3. Lil' Doctor™ bag noncombat, or
 *   4. Turtle taming noncombats.
 */
function lastEncounterWasWanderingNC() {
  var _a, _b, _c;
  var last = get$1("lastEncounter");
  if (zoneSpecificNCs.has(last)) {
    // Handle NCs with a duplicated name
    var zones = (_a = zoneSpecificNCs.get(last)) !== null && _a !== void 0 ? _a : [];
    return zones.includes((_b = get$1("lastAdventure")) !== null && _b !== void 0 ? _b : $location.none);
  } else {
    var environment = environmentSpecificNCs.get(last);
    if (environment === ((_c = get$1("lastAdventure")) === null || _c === void 0 ? void 0 : _c.environment)) return true;
    return wanderingNCs.has(last);
  }
}

/**
 * Extract a list of tasks from the provided quests.
 *
 * Each task name is prepended with the quest name ("Quest Name/Task Name").
 * The quest-local names referred to in task.after are updated appropriately.
 * The task completion condition is updated to include the quest completion.
 *
 * Tasks are returned in-order: all tasks from the first quest, then all tasks
 * from the second quest, etc.
 *
 * @param quests The list of quests. This method does not modify the quest
 *    objects or their tasks.
 * @param implicitAfter If true, each task with task.after = undefined will
 *    have a dependency added on the previous task in the list.
 * @returns A list of tasks from the input quests (with updated properties).
 */
function getTasks(quests) {
  var implicitAfter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var verifyTaskDependencies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var _a;
  var result = [];
  var _iterator = _createForOfIteratorHelper(quests),
    _step;
  try {
    var _loop = function _loop() {
      var quest = _step.value;
      var questCompleted = quest.completed;
      var questReady = quest.ready;
      var _iterator2 = _createForOfIteratorHelper(quest.tasks),
        _step2;
      try {
        var _loop2 = function _loop2() {
          var task = _step2.value;
          // Include quest name in task names and dependencies (unless dependency quest is given)
          var renamedTask = _objectSpread2({}, task);
          renamedTask.name = "".concat(quest.name, "/").concat(task.name);
          renamedTask.after = (_a = task.after) === null || _a === void 0 ? void 0 : _a.map(after => after.includes("/") ? after : "".concat(quest.name, "/").concat(after));
          // Include previous task as a dependency
          if (implicitAfter && task.after === undefined && result.length > 0) renamedTask.after = [result[result.length - 1].name];
          // Include quest completion in task completion
          if (questCompleted !== undefined) {
            var taskCompleted = task.completed;
            renamedTask.completed = ctx => questCompleted(ctx) || taskCompleted(ctx);
          }
          var taskReady = renamedTask.ready;
          if (questReady !== undefined && taskReady !== undefined) {
            renamedTask.ready = ctx => questReady(ctx) && taskReady(ctx);
          } else if (questReady !== undefined) {
            renamedTask.ready = ctx => questReady(ctx);
          }
          result.push(renamedTask);
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (verifyTaskDependencies) verifyDependencies(result);
  return result;
}
function verifyDependencies(tasks) {
  var _a;
  // Verify the dependency names of all tasks
  var names = new Set();
  var _iterator3 = _createForOfIteratorHelper(tasks),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var task = _step3.value;
      names.add(task.name);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = _createForOfIteratorHelper(tasks),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _task = _step4.value;
      var _iterator5 = _createForOfIteratorHelper((_a = _task.after) !== null && _a !== void 0 ? _a : []),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var after = _step5.value;
          if (!names.has(after)) {
            throw "Unknown task dependency ".concat(after, " of ").concat(_task.name);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return tasks;
}

// Commands. The original's per-account settings (seb_godRunGuard,
// seb_usePilsners, seb_postloopCommand and the seb_postLoop* switches) are
// still read straight from those preferences, so set them with the mafia CLI
// as before; see the README.
var args = Args.create("sebastian", "A grimoire port of UnderTheSea, the 11,037 Leagues Under the Sea run.", {
  sim: Args.flag({
    help: "Print the IOTM, skill and pull checklists, then stop. Spends nothing.",
    setting: "",
    default: false
  }),
  postloop: Args.flag({
    help: "Run only the postloop steps (pilsners, pearls, the eagle re-aim, the codpiece).",
    setting: "",
    default: false
  }),
  boss: Args.string({
    help: "The boss an aftercore run is for. Saved to _sebAftercoreBoss, which a run started in aftercore needs.",
    options: [["Yogurt"], ["Shub"], ["Dad"]],
    setting: ""
  })
});

var _templateObject$i, _templateObject2$i, _templateObject3$i, _templateObject4$i, _templateObject5$i, _templateObject6$i, _templateObject7$i, _templateObject8$i, _templateObject9$i, _templateObject0$i, _templateObject1$i, _templateObject10$i, _templateObject11$i, _templateObject12$h, _templateObject13$g, _templateObject14$g, _templateObject15$g, _templateObject16$g;

// Account state and small lookups shared by the whole script. Ported from the
// GLOBALS and "Account states" sections of UnderTheSeaGlobals.ash.

/** 11,037 Leagues Under the Sea. */
var SEA_PATH = 55;
function inSeaPath() {
  return kolmafia.myPath().id === SEA_PATH;
}

/** Running the sea outside the path, after the prism has broken. */
function inAftercore() {
  return kolmafia.myPath().id === 0;
}

/** Progress tracker, printed with a "SEB:" prefix as the original did with "UTS:". */
function step(message) {
  kolmafia.print("SEB: ".concat(message), "blue");
}

/** Owned anywhere: inventory, closet, storage, or worn by a familiar. */
function haveItem(item) {
  if (kolmafia.availableAmount(item) > 0 || kolmafia.storageAmount(item) > 0) return true;
  return kolmafia.Familiar.all().some(familiar => kolmafia.haveFamiliar(familiar) && kolmafia.familiarEquippedEquipment(familiar) === item);
}

/** Free fights are worth more to aftercore farming than to the run. */
function highShiny() {
  return get$1("garbo_valueOfFreeFight", 0) > get$1("valueOfAdventure");
}

/** None of the big three wish-ish IOTMs, so pulls are precious. */
function lowShiny() {
  return !haveItem($item(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["2002 Mr. Store Catalog"])))) && !haveItem($item(_templateObject2$i || (_templateObject2$i = _taggedTemplateLiteral(["cursed monkey's paw"])))) && !haveItem($item(_templateObject3$i || (_templateObject3$i = _taggedTemplateLiteral(["august scepter"]))));
}
var PEARL_RES = {
  Mysticality: "hot res",
  Moxie: "sleaze res",
  Muscle: "spooky res"
};

/** The resistance that farms pearls (and survives) in your mainstat's zone. */
function pearlRes() {
  var stat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : kolmafia.myPrimestat();
  return PEARL_RES[stat.toString()];
}

/** The zone Grandpa hides in for your mainstat; it also drops your pearl. */
function pearlLoc() {
  var stat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : kolmafia.myPrimestat();
  switch (stat) {
    case $stat(_templateObject4$i || (_templateObject4$i = _taggedTemplateLiteral(["Mysticality"]))):
      return $location(_templateObject5$i || (_templateObject5$i = _taggedTemplateLiteral(["The Marinara Trench"])));
    case $stat(_templateObject6$i || (_templateObject6$i = _taggedTemplateLiteral(["Moxie"]))):
      return $location(_templateObject7$i || (_templateObject7$i = _taggedTemplateLiteral(["The Dive Bar"])));
    default:
      return $location(_templateObject8$i || (_templateObject8$i = _taggedTemplateLiteral(["Anemone Mine"])));
  }
}

/** The guild test quest for your mainstat. */
function questProp() {
  var stat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : kolmafia.myPrimestat();
  switch (stat) {
    case $stat(_templateObject9$i || (_templateObject9$i = _taggedTemplateLiteral(["Mysticality"]))):
      return "questG07Myst";
    case $stat(_templateObject0$i || (_templateObject0$i = _taggedTemplateLiteral(["Moxie"]))):
      return "questG08Moxie";
    default:
      return "questG09Muscle";
  }
}

/** Where the guild test quest for your mainstat is done. */
function questLoc() {
  var stat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : kolmafia.myPrimestat();
  switch (stat) {
    case $stat(_templateObject1$i || (_templateObject1$i = _taggedTemplateLiteral(["Mysticality"]))):
      return $location(_templateObject10$i || (_templateObject10$i = _taggedTemplateLiteral(["The Haunted Pantry"])));
    case $stat(_templateObject11$i || (_templateObject11$i = _taggedTemplateLiteral(["Moxie"]))):
      return $location(_templateObject12$h || (_templateObject12$h = _taggedTemplateLiteral(["The Sleazy Back Alley"])));
    default:
      return $location(_templateObject13$g || (_templateObject13$g = _taggedTemplateLiteral(["The Outskirts of Cobb's Knob"])));
  }
}

/** Fax, locket and chest mimic summons left today. */
function countSummons() {
  var n = 0;
  if (!get$1("_photocopyUsed") && haveItem($item(_templateObject14$g || (_templateObject14$g = _taggedTemplateLiteral(["Clan VIP Lounge key"]))))) n += 1;
  if (have$8()) n += reminiscesLeft();
  if (have$g($familiar(_templateObject15$g || (_templateObject15$g = _taggedTemplateLiteral(["Chest Mimic"]))))) n += Math.floor($familiar(_templateObject16$g || (_templateObject16$g = _taggedTemplateLiteral(["Chest Mimic"]))).experience / 200);
  return n;
}

/** Whether the Peridot of Peril has already been spent in this zone today. */
function gotPeriled(location) {
  return periledToday(location);
}

var _templateObject$h, _templateObject2$h, _templateObject3$h, _templateObject4$h, _templateObject5$h, _templateObject6$h, _templateObject7$h, _templateObject8$h, _templateObject9$h, _templateObject0$h, _templateObject1$h, _templateObject10$h, _templateObject11$h, _templateObject12$g, _templateObject13$f, _templateObject14$f, _templateObject15$f, _templateObject16$f, _templateObject17$f, _templateObject18$f;

// Familiar choices. Ported from use_familiar(string) in UnderTheSea.ash, but
// pure: it names the familiar and the task's outfit puts it on.

// Newer than eslint-plugin-libram's data, so it is named once, here.
// eslint-disable-next-line libram/verify-constants
var swordOfSWords = $familiar(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["Sword of S Words"])));
/** Pinned item familiar, the original's chosenFamiliar. Unset by default. */
var chosenFamiliar = $familiar.none;

/** Space Jellyfish is only picked for its stench jelly, which NCforce() can chew. */
function jellyfishReady() {
  return have$g($familiar(_templateObject2$h || (_templateObject2$h = _taggedTemplateLiteral(["Space Jellyfish"]))));
}

/**
 * The familiar a role wants, or undefined to keep the current one when the
 * fallback Grouper Groupie is missing, as the original did.
 */
function pickFamiliar(role) {
  var firstOwned = familiars => familiars.find(f => kolmafia.haveFamiliar(f));
  var familiar;
  switch (role) {
    case "-combat":
      familiar = firstOwned([$familiar(_templateObject3$h || (_templateObject3$h = _taggedTemplateLiteral(["Peace Turkey"]))), $familiar(_templateObject4$h || (_templateObject4$h = _taggedTemplateLiteral(["Disgeist"])))]);
      break;
    case "combat":
      familiar = firstOwned([$familiar(_templateObject5$h || (_templateObject5$h = _taggedTemplateLiteral(["Jumpsuited Hound Dog"])))]);
      break;
    case "exp":
      // Bosses give some exp, but only to a familiar that does not attack.
      familiar = firstOwned([$familiar(_templateObject6$h || (_templateObject6$h = _taggedTemplateLiteral(["Chest Mimic"]))), $familiar(_templateObject7$h || (_templateObject7$h = _taggedTemplateLiteral(["Melodramedary"]))), $familiar(_templateObject8$h || (_templateObject8$h = _taggedTemplateLiteral(["Cooler Yeti"]))), $familiar(_templateObject9$h || (_templateObject9$h = _taggedTemplateLiteral(["Cookbookbat"])))]) ?? $familiar.none;
      break;
    case "itdrop":
      if (chosenFamiliar !== $familiar.none) familiar = chosenFamiliar;else if (kolmafia.haveFamiliar($familiar(_templateObject0$h || (_templateObject0$h = _taggedTemplateLiteral(["Red-Nosed Snapper"]))))) familiar = $familiar(_templateObject1$h || (_templateObject1$h = _taggedTemplateLiteral(["Red-Nosed Snapper"])));else if (have$g($effect(_templateObject10$h || (_templateObject10$h = _taggedTemplateLiteral(["Driving Waterproofly"])))) && kolmafia.haveFamiliar($familiar(_templateObject11$h || (_templateObject11$h = _taggedTemplateLiteral(["Jill-of-All-Trades"]))))) familiar = $familiar(_templateObject12$g || (_templateObject12$g = _taggedTemplateLiteral(["Jill-of-All-Trades"])));else if (jellyfishReady()) familiar = $familiar(_templateObject13$f || (_templateObject13$f = _taggedTemplateLiteral(["Space Jellyfish"])));
      break;
  }
  familiar ?? (familiar = $familiar(_templateObject14$f || (_templateObject14$f = _taggedTemplateLiteral(["Grouper Groupie"]))));
  if (familiar !== $familiar.none && !kolmafia.haveFamiliar(familiar)) {
    kolmafia.print("No ".concat(familiar, " to switch to; keeping ").concat(kolmafia.myFamiliar(), "."), "red");
    return undefined;
  }
  return familiar;
}

/** Prince George on whichever familiar the item setup settled on, once a day. */
function mummery() {
  if (!haveItem($item(_templateObject15$f || (_templateObject15$f = _taggedTemplateLiteral(["mumming trunk"]))))) return;
  var costumes = _toConsumableArray(currentCostumes().values());
  if (costumes.some(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
      modifier = _ref2[0];
    return modifier === "Item Drop";
  })) return;
  if (kolmafia.myFamiliar() === $familiar.none) return;
  kolmafia.cliExecute("mummery item");
}

/** Sword of S Words is set on the sea cowboy and lassos are still short. */
function doSWord() {
  if (!have$g(swordOfSWords) || get$1("swordOfSWordsMonster") !== $monster(_templateObject16$f || (_templateObject16$f = _taggedTemplateLiteral(["sea cowboy"])))) return false;
  var lassos = kolmafia.itemAmount($item(_templateObject17$f || (_templateObject17$f = _taggedTemplateLiteral(["sea lasso"]))));
  if (highShiny() && lassos < 7) return true;
  return !haveItem($item(_templateObject18$f || (_templateObject18$f = _taggedTemplateLiteral(["closed-circuit pay phone"])))) && lassos < 4;
}

var _templateObject$g, _templateObject2$g, _templateObject3$g, _templateObject4$g, _templateObject5$g, _templateObject6$g, _templateObject7$g, _templateObject8$g, _templateObject9$g, _templateObject0$g, _templateObject1$g, _templateObject10$g, _templateObject11$g, _templateObject12$f, _templateObject13$e, _templateObject14$e, _templateObject15$e, _templateObject16$e, _templateObject17$e, _templateObject18$e, _templateObject19$e;

// What the run still needs. Ported from the "Account states" and Force budget
// helpers in UnderTheSeaGlobals.ash.

function divingHelmet() {
  return $items(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["Mer-kin gladiator mask, Mer-kin scholar mask, crappy Mer-kin mask, aerated diving helmet, Elf Guard SCUBA tank"]))).find(item => have$g(item)) ?? $item.none;
}
function tailpiece() {
  return $items(_templateObject2$g || (_templateObject2$g = _taggedTemplateLiteral(["Mer-kin gladiator tailpiece, Mer-kin scholar tailpiece, crappy Mer-kin tailpiece, teflon swim fins"]))).find(item => have$g(item)) ?? $item.none;
}
function diverPartsComplete() {
  // The craft consumes all three, so an assembled helmet is the done state.
  if (have$g($item(_templateObject3$g || (_templateObject3$g = _taggedTemplateLiteral(["rusty diving helmet"]))))) return true;
  return kolmafia.itemAmount($item(_templateObject4$g || (_templateObject4$g = _taggedTemplateLiteral(["rusty rivet"])))) >= 8 && kolmafia.itemAmount($item(_templateObject5$g || (_templateObject5$g = _taggedTemplateLiteral(["rusty porthole"])))) > 0 && have$g($item(_templateObject6$g || (_templateObject6$g = _taggedTemplateLiteral(["rusty broken diving helmet"]))));
}
function diverHuntActive() {
  return !diverPartsComplete() && kolmafia.toSlot(divingHelmet()) !== $slot(_templateObject7$g || (_templateObject7$g = _taggedTemplateLiteral(["hat"])));
}
function seaCowNeeded() {
  var leather = kolmafia.itemAmount($item(_templateObject8$g || (_templateObject8$g = _taggedTemplateLiteral(["sea leather"])))) + (have$g($item(_templateObject9$g || (_templateObject9$g = _taggedTemplateLiteral(["sea chaps"])))) ? 1 : 0) + (have$g($item(_templateObject0$g || (_templateObject0$g = _taggedTemplateLiteral(["sea cowboy hat"])))) ? 1 : 0);
  return leather < 2 || kolmafia.itemAmount($item(_templateObject1$g || (_templateObject1$g = _taggedTemplateLiteral(["sea cowbell"])))) < 3;
}
function prayerbeadsShort() {
  return !have$g($item(_templateObject10$g || (_templateObject10$g = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))), 3);
}

/** Use the Force charges left on the saber today. */
function saberChargesLeft() {
  if (!haveItem($item(_templateObject11$g || (_templateObject11$g = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))))) return 0;
  return 5 - get$1("_saberForceUses");
}

/** Charges left after the two the unholy diver hunt claims. */
function forcesAfterDiver() {
  return saberChargesLeft() - (diverHuntActive() ? 2 : 0);
}
function diverForceReady() {
  return diverHuntActive() && saberChargesLeft() > 0;
}

/** Charges left after the diver's two and the healer's one. */
function forcesAfterHealer() {
  return forcesAfterDiver() - (prayerbeadsShort() ? 1 : 0);
}

/** Charges no planned Force has claimed. */
function saberForcesFree() {
  return forcesAfterHealer() - (seaCowNeeded() ? 1 : 0);
}

/** Enough lassos thrown or in hand for the twenty training throws plus taming. */
function doneWithCowboy() {
  return get$1("lassoTrainingCount") + 3 * kolmafia.itemAmount($item(_templateObject12$f || (_templateObject12$f = _taggedTemplateLiteral(["sea lasso"])))) >= 23;
}
function doneWithSeaCow() {
  return !seaCowNeeded();
}
function cheatsheetsNeeded() {
  return kolmafia.itemAmount($item(_templateObject13$e || (_templateObject13$e = _taggedTemplateLiteral(["Mer-kin cheatsheet"])))) < 9 && get$1("merkinVocabularyMastery") === 0;
}

/** Library-ready: the scholar outfit (or its lounge pieces) and the vocabulary done. */
function libraryReady() {
  return (haveItem($item(_templateObject14$e || (_templateObject14$e = _taggedTemplateLiteral(["Mer-kin scholar mask"])))) || haveItem($item(_templateObject15$e || (_templateObject15$e = _taggedTemplateLiteral(["Mer-kin facecowl"]))))) && (haveItem($item(_templateObject16$e || (_templateObject16$e = _taggedTemplateLiteral(["Mer-kin scholar tailpiece"])))) || haveItem($item(_templateObject17$e || (_templateObject17$e = _taggedTemplateLiteral(["Mer-kin waistrope"]))))) && kolmafia.itemAmount($item(_templateObject18$e || (_templateObject18$e = _taggedTemplateLiteral(["Mer-kin wordquiz"])))) * 10 + get$1("merkinVocabularyMastery") >= 90;
}

/** Items that lower Yog-Urt's and Shub's stats, one kind each. */
function delevelers() {
  return $items(_templateObject19$e || (_templateObject19$e = _taggedTemplateLiteral(["Mer-kin mouthsoap, crayon shavings, table tennis ball, sea lasso, sea cowbell"]))).filter(item => kolmafia.itemAmount(item) > 0).length;
}

/** Healings Yog-Urt's fight needs, by prayerbeads worn (0 to 3). */
var YOG_HEALINGS_NEEDED = [21, 5, 3, 1];

var _templateObject$f, _templateObject2$f, _templateObject3$f, _templateObject4$f, _templateObject5$f, _templateObject6$f, _templateObject7$f, _templateObject8$f, _templateObject9$f, _templateObject0$f, _templateObject1$f, _templateObject10$f, _templateObject11$f;

// Hagnk's pulls and luck. Ported from "Game Mechanics" in UnderTheSeaGlobals.ash.

function pulledToday(item) {
  return get$1("_roninStoragePulls").split(",").includes("".concat(item.id));
}

/** Pulls the end of the run will want, so earlier phases leave them alone. */
function reservedPulls() {
  var n = 0;
  var prayerbeads = $item(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral(["Mer-kin prayerbeads"])));
  if (kolmafia.availableAmount(prayerbeads) < 3 && !pulledToday(prayerbeads)) n += 1;
  var cowbell = $item(_templateObject2$f || (_templateObject2$f = _taggedTemplateLiteral(["sea cowbell"])));
  if (kolmafia.itemAmount(cowbell) < 3 && !pulledToday(cowbell)) n += 1;
  var combJelly = $item(_templateObject3$f || (_templateObject3$f = _taggedTemplateLiteral(["comb jelly"])));
  if (!lowShiny() && kolmafia.haveEffect($effect(_templateObject4$f || (_templateObject4$f = _taggedTemplateLiteral(["Jelly Combed"])))) === 0 && kolmafia.availableAmount(combJelly) === 0 && !pulledToday(combJelly)) {
    n += 1;
  }
  var exploit = $item(_templateObject5$f || (_templateObject5$f = _taggedTemplateLiteral(["null-day exploit"])));
  if (!get$1("shubJigguwattDefeated") && kolmafia.itemAmount($item(_templateObject6$f || (_templateObject6$f = _taggedTemplateLiteral(["crayon shavings"])))) < 4 && kolmafia.itemAmount(exploit) === 0 && !pulledToday(exploit)) {
    n += 1;
  }
  return n;
}

/**
 * Pull one of an item, buying it into storage first if Hagnk's has none.
 * Asks before paying more than autoBuyPriceLimit, like the original.
 */
function pullSequence(item) {
  if (kolmafia.pullsRemaining() === 0 || pulledToday(item)) return false;
  if (kolmafia.storageAmount(item) === 0) {
    if (kolmafia.mallPrice(item) > get$1("autoBuyPriceLimit")) {
      if (!kolmafia.userConfirm("Price of ".concat(item, " exceeds autoBuyPriceLimit, skip?"))) {
        throw new Error("Price of ".concat(item, " exceeds autoBuyPriceLimit"));
      }
    }
    kolmafia.buyUsingStorage(item);
  }
  return kolmafia.takeStorage(1, item);
}

/** Get Lucky! from the cheapest source: Aug. 2nd, the heartstone, then a clover. */
function getLucky() {
  if (have$g($effect(_templateObject7$f || (_templateObject7$f = _taggedTemplateLiteral(["Lucky!"]))))) return;
  var aug2 = $skill(_templateObject8$f || (_templateObject8$f = _taggedTemplateLiteral(["Aug. 2nd: Find an Eleven-Leaf Clover Day"])));
  if (have$g(aug2) && !get$1("_aug2Cast") && get$1("_augSkillsCast") < 5) {
    kolmafia.useSkill(aug2);
    if (have$g($effect(_templateObject9$f || (_templateObject9$f = _taggedTemplateLiteral(["Lucky!"]))))) return;
  }
  if (kolmafia.availableAmount($item(_templateObject0$f || (_templateObject0$f = _taggedTemplateLiteral(["Heartstone"])))) > 0 && get$1("heartstoneLuckUnlocked") && !get$1("_heartstoneLuckUsed")) {
    kolmafia.useSkill($skill(_templateObject1$f || (_templateObject1$f = _taggedTemplateLiteral(["Heartstone: %luck"]))));
    if (have$g($effect(_templateObject10$f || (_templateObject10$f = _taggedTemplateLiteral(["Lucky!"]))))) return;
  }
  kolmafia.use($item(_templateObject11$f || (_templateObject11$f = _taggedTemplateLiteral(["11-leaf clover"]))));
}

var _templateObject$e, _templateObject2$e, _templateObject3$e, _templateObject4$e, _templateObject5$e, _templateObject6$e, _templateObject7$e, _templateObject8$e, _templateObject9$e, _templateObject0$e, _templateObject1$e, _templateObject10$e, _templateObject11$e, _templateObject12$e, _templateObject13$d, _templateObject14$d, _templateObject15$d, _templateObject16$d, _templateObject17$d, _templateObject18$d, _templateObject19$d, _templateObject20$c, _templateObject21$c, _templateObject22$c, _templateObject23$c, _templateObject24$c, _templateObject25$c, _templateObject26$c, _templateObject27$c, _templateObject28$c, _templateObject29$c, _templateObject30$c, _templateObject31$c, _templateObject32$c, _templateObject33$c, _templateObject34$b, _templateObject35$b, _templateObject36$b, _templateObject37$b, _templateObject38$a, _templateObject39$a, _templateObject40$a, _templateObject41$a, _templateObject42$9, _templateObject43$9, _templateObject44$9, _templateObject45$9, _templateObject46$9, _templateObject47$9, _templateObject48$9, _templateObject49$9, _templateObject50$8, _templateObject51$8, _templateObject52$8, _templateObject53$7, _templateObject54$7, _templateObject55$6, _templateObject56$5, _templateObject57$5;

// Daily resources and one-shot IOTM helpers. Ported from the "REMAINING SHARED
// HELPERS" sections of UnderTheSeaGlobals.ash and summon() in UnderTheSea.ash.

/** Source Terminal items.enh, re-upped wherever +item setup happens. */
function sourceEnhance() {
  if (!have$d() || kolmafia.haveEffect($effect(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["items.enh"])))) > 0) return;
  if (enhanceUsesRemaining() <= 0) return;
  enhance($effect(_templateObject2$e || (_templateObject2$e = _taggedTemplateLiteral(["items.enh"]))));
}

/** Kremlin's Greatest Briefcase +item tab buff, through Ezandora's Briefcase script. */
function briefcase() {
  if (!haveItem($item(_templateObject3$e || (_templateObject3$e = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))))) return;
  if (kolmafia.haveEffect($effect(_templateObject4$e || (_templateObject4$e = _taggedTemplateLiteral(["Items Are Forever"])))) > 0) return;
  // An unopened case has no tabs to read, and opening it is a two-day job.
  if (!get$1("_kgbOpened")) return;
  if (get$1("_kgbClicksUsed") >= 22) return;
  kolmafia.cliExecute("briefcase buff item");
}

/** Cargo Cultist Shorts pocket 494. */
function cargoPocket() {
  if (",".concat(get$1("cargoPocketsEmptied"), ",").includes(",494,")) return;
  if (!haveItem($item(_templateObject5$e || (_templateObject5$e = _taggedTemplateLiteral(["Cargo Cultist Shorts"]))))) return;
  step("Cargo shorts: opening pocket 494");
  kolmafia.cliExecute("cargo pocket 494");
}

/** January's Garbage Tote: the broken champagne bottle. */
function garbageTote() {
  if (!haveItem($item(_templateObject6$e || (_templateObject6$e = _taggedTemplateLiteral(["January's Garbage Tote"]))))) return;
  if (haveItem($item(_templateObject7$e || (_templateObject7$e = _taggedTemplateLiteral(["broken champagne bottle"]))))) return;
  if (get$1("garbageChampagneCharge") <= 0) return;
  step("Garbage tote: fetching the broken champagne bottle");
  kolmafia.visitUrl("inv_use.php?whichitem=".concat($item(_templateObject8$e || (_templateObject8$e = _taggedTemplateLiteral(["January's Garbage Tote"]))).id, "&pwd=").concat(kolmafia.myHash()));
  // mafia may already have answered it; only answer a live choice.
  if (!kolmafia.handlingChoice()) {
    step("Tote choice was auto-resolved or never opened; skipping");
    return;
  }
  var options = Object.entries(kolmafia.availableChoiceOptions());
  var grab = options.find(_ref => {
    var _ref2 = _slicedToArray(_ref, 2),
      text = _ref2[1];
    return text.includes("champagne");
  });
  var leave = options.find(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
      text = _ref4[1];
    return text.includes("Ignore the garbage");
  });
  // Never leave the run parked inside a choice we could not read.
  var pick = grab ?? leave;
  if (pick) kolmafia.runChoice(Number(pick[0]));
}

/** Sept-Ember Censer: Septapus summoning charms, up to three. */
function censer() {
  if (!haveItem($item(_templateObject9$e || (_templateObject9$e = _taggedTemplateLiteral(["Sept-Ember Censer"]))))) return;
  if (!get$1("_septEmberBalanceChecked")) kolmafia.visitUrl("shop.php?whichshop=september");
  var wanted = Math.min(3 - kolmafia.itemAmount($item(_templateObject0$e || (_templateObject0$e = _taggedTemplateLiteral(["Septapus summoning charm"])))), Math.floor(get$1("availableSeptEmbers") / 2));
  if (wanted > 0) kolmafia.buy($coinmaster(_templateObject1$e || (_templateObject1$e = _taggedTemplateLiteral(["Sept-Ember Censer"]))), wanted, $item(_templateObject10$e || (_templateObject10$e = _taggedTemplateLiteral(["Septapus summoning charm"]))));
}
function pillKeeper(pill) {
  if (!haveItem($item(_templateObject11$e || (_templateObject11$e = _taggedTemplateLiteral(["Eight Days a Week Pill Keeper"]))))) return;
  if (get$1("_freePillKeeperUsed")) return;
  step("Pill keeper: ".concat(pill));
  kolmafia.cliExecute("pillkeeper ".concat(pill));
}

/** Noncombat forcer charges left, counting two for the pulls fallback. */
function ncForceEstimate() {
  var force = 2;
  if (haveItem($item(_templateObject12$e || (_templateObject12$e = _taggedTemplateLiteral(["Apriling band tuba"]))))) force += Math.max(0, 3 - get$1("_aprilBandTubaUses"));
  if (haveItem($item(_templateObject13$d || (_templateObject13$d = _taggedTemplateLiteral(["McHugeLarge left ski"]))))) {
    force += Math.max(0, 3 - get$1("_mcHugeLargeAvalancheUses"));
  }
  if (have$7()) {
    force += Math.min(3, Math.floor(totalAvailableCinch() / 60));
  }
  if (haveItem($item(_templateObject14$d || (_templateObject14$d = _taggedTemplateLiteral(["Jurassic Parka"]))))) force += Math.max(0, 5 - get$1("_spikolodonSpikeUses"));
  return force;
}

/** Spend the cheapest available noncombat forcer charge. */
function ncForce() {
  if (get$1("noncombatForcerActive")) return;
  if (canPlay($item(_templateObject15$d || (_templateObject15$d = _taggedTemplateLiteral(["Apriling band tuba"]))))) {
    play($item(_templateObject16$d || (_templateObject16$d = _taggedTemplateLiteral(["Apriling band tuba"]))));
  } else if (have$7() && (currentCinch() >= 60 || get$1("timesRested") < kolmafia.totalFreeRests())) {
    while (currentCinch() < 60 && get$1("timesRested") < kolmafia.totalFreeRests()) {
      // The helmet sweetens the rest but is optional.
      if (have$5()) kolmafia.equip($slot(_templateObject17$d || (_templateObject17$d = _taggedTemplateLiteral(["hat"]))), $item(_templateObject18$d || (_templateObject18$d = _taggedTemplateLiteral(["Apriling band helmet"]))));
      kolmafia.cliExecute("camp rest free");
    }
    if (currentCinch() >= 60) {
      kolmafia.equip($slot(_templateObject19$d || (_templateObject19$d = _taggedTemplateLiteral(["acc3"]))), $item(_templateObject20$c || (_templateObject20$c = _taggedTemplateLiteral(["Cincho de Mayo"]))));
      kolmafia.useSkill($skill(_templateObject21$c || (_templateObject21$c = _taggedTemplateLiteral(["Cincho: Fiesta Exit"]))));
    }
  } else if (haveItem($item(_templateObject22$c || (_templateObject22$c = _taggedTemplateLiteral(["Eight Days a Week Pill Keeper"])))) && !get$1("_freePillKeeperUsed")) {
    // Sneakisol forces a noncombat for free, so it comes before any pull.
    pillKeeper("free noncombat");
  } else if (!haveItem($item(_templateObject23$c || (_templateObject23$c = _taggedTemplateLiteral(["McHugeLarge duffel bag"])))) && !haveItem($item(_templateObject24$c || (_templateObject24$c = _taggedTemplateLiteral(["Jurassic Parka"])))) && !haveItem($item(_templateObject25$c || (_templateObject25$c = _taggedTemplateLiteral(["Allied Radio Backpack"]))))) {
    for (var _i = 0, _arr = [$item(_templateObject26$c || (_templateObject26$c = _taggedTemplateLiteral(["handheld Allied radio"]))), $item(_templateObject27$c || (_templateObject27$c = _taggedTemplateLiteral(["Clara's bell"]))), $item(_templateObject28$c || (_templateObject28$c = _taggedTemplateLiteral(["stench jelly"])))]; _i < _arr.length; _i++) {
      var item = _arr[_i];
      if (pulledToday(item)) continue;
      if (item === $item(_templateObject29$c || (_templateObject29$c = _taggedTemplateLiteral(["Clara's bell"]))) && kolmafia.storageAmount(item) === 0) continue;
      if (kolmafia.pullsRemaining() === 0) return;
      pullSequence(item);
      if (item === $item(_templateObject30$c || (_templateObject30$c = _taggedTemplateLiteral(["Clara's bell"])))) kolmafia.use(item);else if (item === $item(_templateObject31$c || (_templateObject31$c = _taggedTemplateLiteral(["handheld Allied radio"])))) kolmafia.cliExecute("alliedradio misc sniper");else kolmafia.chew(item);
      return;
    }
  }
}
function mapReady() {
  return have$a() && availableMaps() > 0 && !currentlyMapping();
}

/** Map the Monsters, but only once the Peridot is spent in this zone. */
function mapMonster(location) {
  if (!mapReady()) return;
  if (haveItem($item(_templateObject32$c || (_templateObject32$c = _taggedTemplateLiteral(["Peridot of Peril"])))) && !gotPeriled(location)) return;
  step("Map the Monsters armed for ".concat(location));
  kolmafia.useSkill($skill(_templateObject33$c || (_templateObject33$c = _taggedTemplateLiteral(["Map the Monsters"]))));
}

/** All three Sheriff props in hand, so Assert your Authority can be cast. */
function sheriffOutfit() {
  return [$item(_templateObject34$b || (_templateObject34$b = _taggedTemplateLiteral(["Sheriff moustache"]))), $item(_templateObject35$b || (_templateObject35$b = _taggedTemplateLiteral(["Sheriff badge"]))), $item(_templateObject36$b || (_templateObject36$b = _taggedTemplateLiteral(["Sheriff pistol"])))].every(item => haveItem(item));
}
function baseballPlayers() {
  return get$1("baseballTeam").split(",").filter(s => s !== "").length;
}
function bczSweatReady() {
  return kolmafia.myBasestat($stat(_templateObject37$b || (_templateObject37$b = _taggedTemplateLiteral(["submoxie"])))) - 22500 > skillCost($skill(_templateObject38$a || (_templateObject38$a = _taggedTemplateLiteral(["BCZ: Sweat Bullets"]))));
}

/** The Mom quest and CyberRealm route: eagle, server room key and both skills. */
function momNCyber() {
  return kolmafia.haveFamiliar($familiar(_templateObject39$a || (_templateObject39$a = _taggedTemplateLiteral(["Patriotic Eagle"])))) && haveItem($item(_templateObject40$a || (_templateObject40$a = _taggedTemplateLiteral(["server room key"])))) && kolmafia.haveSkill($skill(_templateObject41$a || (_templateObject41$a = _taggedTemplateLiteral(["OVERCLOCK(10)"])))) && kolmafia.haveSkill($skill(_templateObject42$9 || (_templateObject42$9 = _taggedTemplateLiteral(["Just the Facts"]))));
}

/** Lassos can be trained in the shadow rift. */
function lassoShadow() {
  return haveItem($item(_templateObject43$9 || (_templateObject43$9 = _taggedTemplateLiteral(["Monodent of the Sea"])))) && haveItem($item(_templateObject44$9 || (_templateObject44$9 = _taggedTemplateLiteral(["closed-circuit pay phone"]))));
}

/** Swim trunks (or the SCUBA tank after the prism) so the sea pages load. */
function equipSwimTrunks() {
  if (kolmafia.haveEffect($effect(_templateObject45$9 || (_templateObject45$9 = _taggedTemplateLiteral(["Driving Waterproofly"])))) > 0) return;
  if (inSeaPath()) kolmafia.equip($item(_templateObject46$9 || (_templateObject46$9 = _taggedTemplateLiteral(["really, really nice swimming trunks"]))));else if (inAftercore()) kolmafia.equip($item(_templateObject47$9 || (_templateObject47$9 = _taggedTemplateLiteral(["Elf Guard SCUBA tank"]))));
}

/**
 * Fight a monster from the locket, a fax, a mimic egg or a pocket wish, in
 * that order. False when none of them is available.
 */
function summon(monster, wishGear) {
  if (canReminisce(monster) && !monstersReminisced().includes(monster)) {
    return reminisce(monster);
  }
  if (have$8()) kolmafia.equip($slot(_templateObject48$9 || (_templateObject48$9 = _taggedTemplateLiteral(["acc3"]))), $item(_templateObject49$9 || (_templateObject49$9 = _taggedTemplateLiteral(["combat lover's locket"]))));
  if (!get$1("_photocopyUsed") && haveItem($item(_templateObject50$8 || (_templateObject50$8 = _taggedTemplateLiteral(["Clan VIP Lounge key"])))) && (kolmafia.faxbot(monster) || kolmafia.faxbot(monster) || kolmafia.faxbot(monster))) {
    kolmafia.use($item(_templateObject51$8 || (_templateObject51$8 = _taggedTemplateLiteral(["photocopied monster"]))));
    kolmafia.runCombat();
  } else if ($familiar(_templateObject52$8 || (_templateObject52$8 = _taggedTemplateLiteral(["Chest Mimic"]))).experience > 200) {
    if (differentiableQuantity(monster) === 0) receive(monster);
    if (!differentiate(monster)) {
      throw new Error("Couldn't hatch a ".concat(monster, " from a mimic egg. Rerun, and if it happens again ping FS."));
    }
    // A Force cast during the egg fight can strand the session in choice 1387.
    if (kolmafia.handlingChoice() && kolmafia.lastChoice() === 1387) kolmafia.runChoice(3);
  } else if (kolmafia.itemAmount($item(_templateObject53$7 || (_templateObject53$7 = _taggedTemplateLiteral(["pocket wish"])))) > 0) {
    wishGear === null || wishGear === void 0 || wishGear();
    kolmafia.cliExecute("genie monster ".concat(monster));
    kolmafia.runCombat();
  } else {
    return false;
  }
  return true;
}

/** Big Brother's black glass, which the Caliginous Abyss needs. */
function blackGlass() {
  var familiar = pickFamiliar("itdrop");
  if (familiar) kolmafia.useFamiliar(familiar);
  kolmafia.equip($item(_templateObject54$7 || (_templateObject54$7 = _taggedTemplateLiteral(["really, really nice swimming trunks"]))));
  kolmafia.visitUrl("monkeycastle.php?who=1");
  if (!have$g($item(_templateObject55$6 || (_templateObject55$6 = _taggedTemplateLiteral(["black glass"]))))) kolmafia.buy($coinmaster(_templateObject56$5 || (_templateObject56$5 = _taggedTemplateLiteral(["Big Brother"]))), 1, $item(_templateObject57$5 || (_templateObject57$5 = _taggedTemplateLiteral(["black glass"]))));
}

var _templateObject$d, _templateObject2$d, _templateObject3$d, _templateObject4$d, _templateObject5$d, _templateObject6$d, _templateObject7$d, _templateObject8$d, _templateObject9$d, _templateObject0$d, _templateObject1$d, _templateObject10$d, _templateObject11$d, _templateObject12$d, _templateObject13$c, _templateObject14$c, _templateObject15$c, _templateObject16$c, _templateObject17$c, _templateObject18$c, _templateObject19$c, _templateObject20$b, _templateObject21$b, _templateObject22$b, _templateObject23$b, _templateObject24$b, _templateObject25$b, _templateObject26$b, _templateObject27$b, _templateObject28$b, _templateObject29$b, _templateObject30$b, _templateObject31$b, _templateObject32$b, _templateObject33$b, _templateObject34$a, _templateObject35$a, _templateObject36$a, _templateObject37$a, _templateObject38$9, _templateObject39$9, _templateObject40$9, _templateObject41$9, _templateObject42$8, _templateObject43$8, _templateObject44$8, _templateObject45$8, _templateObject46$8, _templateObject47$8, _templateObject48$8, _templateObject49$8, _templateObject50$7, _templateObject51$7, _templateObject52$7, _templateObject54$6, _templateObject55$5, _templateObject56$4, _templateObject57$4, _templateObject58$4, _templateObject59$4, _templateObject60$4, _templateObject61$4, _templateObject62$4;

// IOTM and game-mechanic helpers. Ported from UnderTheSeaGlobals.ash.

// ─── SMALL CHECKS ─────────────────────────────────────────────────────────────

/**
 * Monsters that give a free fight: whatever mafia's monster data tags FREE
 * (the Kramco's goblins, Black Crayon monsters, trick-or-treat kids, Witchess,
 * Eldritch Tentacles...), plus the time cop, which mafia leaves untagged.
 */
function freeMonster(monster) {
  return monster === $monster(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["time cop"]))) || /(^|\s)FREE(\s|$)/.test(monster.attributes);
}
function parkaForceAvailable() {
  return haveItem($item(_templateObject2$d || (_templateObject2$d = _taggedTemplateLiteral(["Jurassic Parka"])))) && get$1("_spikolodonSpikeUses") < 5;
}
function leftSkiAvailable() {
  return haveItem($item(_templateObject3$d || (_templateObject3$d = _taggedTemplateLiteral(["McHugeLarge left ski"])))) && get$1("_mcHugeLargeAvalancheUses") < 3;
}

/** The low roll of one Saucegeyser cast. */
function geyserLowRoll() {
  var flat = kolmafia.numericModifier("Spell Damage") + Math.max(kolmafia.numericModifier("Hot Spell Damage"), kolmafia.numericModifier("Cold Spell Damage"));
  var base = 60 + Math.floor(0.4 * kolmafia.myBuffedstat($stat(_templateObject4$d || (_templateObject4$d = _taggedTemplateLiteral(["Mysticality"]))))) + flat;
  return Math.floor(base * (1 + kolmafia.numericModifier("Spell Damage Percent") / 100));
}

/**
 * Says what an unbounded zone loop is waiting for, every ten turns past the
 * mark. Call before the turn: it reads what is worn.
 */
function zoneStall(waitingFor, gate, zone, spent, mark) {
  if (spent < mark || (spent - mark) % 10 !== 0) return;
  var why;
  if (gate === $item.none) {
    var forced = kolmafia.turnsUntilForcedNoncombat(zone);
    why = "".concat(forced < 0 ? "no forced noncombat here" : "forced noncombat in ".concat(forced, " turns"), ", combat rate ").concat(Math.round(kolmafia.combatRateModifier()), "%");
  } else {
    why = "".concat(gate, " x").concat(kolmafia.itemAmount(gate), ", item ").concat(Math.round(kolmafia.numericModifier("Item Drop")), "% against this zone's ").concat(Math.round(kolmafia.numericModifier("Loc:".concat(zone), "Item Drop Penalty")), "%");
  }
  kolmafia.print("".concat(spent, " turns in ").concat(zone, " still waiting on ").concat(waitingFor, ": ").concat(why, "."), "red");
}

/** Yellow ray ready: the parka's acid, or a spitball from the shield's globs. */
function yellowRayPrep() {
  if (kolmafia.haveEffect($effect(_templateObject5$d || (_templateObject5$d = _taggedTemplateLiteral(["Everything Looks Yellow"])))) > 0) return;
  if (haveItem($item(_templateObject6$d || (_templateObject6$d = _taggedTemplateLiteral(["Jurassic Parka"]))))) {
    kolmafia.cliExecute("parka dilophosaur; equip jurassic parka");
  } else if (haveItem($item(_templateObject7$d || (_templateObject7$d = _taggedTemplateLiteral(["April Shower Thoughts shield"])))) && kolmafia.availableAmount($item(_templateObject8$d || (_templateObject8$d = _taggedTemplateLiteral(["spitball"])))) === 0 && kolmafia.itemAmount($item(_templateObject9$d || (_templateObject9$d = _taggedTemplateLiteral(["glob of wet paper"])))) > 0) {
    kolmafia.create($item(_templateObject0$d || (_templateObject0$d = _taggedTemplateLiteral(["spitball"]))));
  }
}

// ─── ETERNITY CODPIECE ────────────────────────────────────────────────────────

/** Empty the codpiece ("none"), or mount a comma list of gems in slots 1 to 5. */
function codpiece(input) {
  if (!have()) return;
  if (input === "none") {
    var _iterator = _createForOfIteratorHelper(SLOTS),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var slot = _step.value;
        kolmafia.equip(slot, $item.none);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return;
  }
  var wanted = input.split(",").map(s => kolmafia.Item.get(s.trim()));
  var placed = wanted.map((gem, i) => {
    var slot = SLOTS[i];
    if (kolmafia.equippedItem(slot) === gem) return true;
    // A gem worn elsewhere (the Peridot as an accessory) comes off first.
    var worn = kolmafia.Slot.all().find(s => !SLOTS.includes(s) && kolmafia.equippedItem(s) === gem);
    if (worn) kolmafia.equip(worn, $item.none);
    if (kolmafia.itemAmount(gem) === 0) return false;
    kolmafia.print("Inserting ".concat(gem, " into Codpiece"));
    kolmafia.equip(slot, gem);
    return true;
  });
  var mounted = currentGems();
  wanted.forEach((gem, i) => {
    if (placed[i] && mounted[i] !== gem) throw new Error("Codpiece slot incorrect");
  });
}

// ─── ANEMONE MINE ─────────────────────────────────────────────────────────────

function squareImage(n) {
  var match = new RegExp("#".concat(n, "<img src=\"[^\"]*/([^\"]+)\\.gif\"")).exec(get$1("mineLayout3"));
  return match ? match[1] : "";
}
function adjacentCaverns(x, y) {
  return [8 * y + (x - 1), 8 * y + (x + 1), 8 * (y - 1) + x, 8 * (y + 1) + x].map(squareImage).join("");
}

/** The mine square (column, row) to dig for teflon ore. */
function mineNum() {
  var at = (x, y) => [x, y];
  var page = visit(Mine.ANEMONE);
  var chunks = _toConsumableArray(page.matchAll(/Promising Chunk of Wall \((\d+),(\d+)\)/g)).map(m => [Number(m[1]), Number(m[2])]);
  // Preferred spots first.
  for (var _i = 0, _arr = [[3, 6], [3, 5], [3, 4], [3, 3], [3, 2], [2, 2], [4, 2], [5, 2]]; _i < _arr.length; _i++) {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
      x = _arr$_i[0],
      y = _arr$_i[1];
    if (!page.includes("Open Cavern (".concat(x, ",").concat(y, ")"))) return at(x, y);
  }
  // Promising chunks away from the bad ores.
  var _iterator2 = _createForOfIteratorHelper(chunks),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
        _x = _step2$value[0],
        _y = _step2$value[1];
      var adjacent = adjacentCaverns(_x, _y);
      if (_y >= 4 || adjacent.includes("velcroore") || adjacent.includes("vinylore")) continue;
      return at(_x, _y);
    }
    // The edge chunks beside a matching pair.
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = _createForOfIteratorHelper(chunks),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _step3$value = _slicedToArray(_step3.value, 2),
        _x2 = _step3$value[0],
        _y2 = _step3$value[1];
      if (_x2 === 1 && _y2 === 2 && squareImage(18) === squareImage(19)) return at(_x2, _y2);
      if (_x2 === 6 && _y2 === 2 && squareImage(21) === squareImage(20)) return at(_x2, _y2);
    }
    // Any chunk not too deep.
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = _createForOfIteratorHelper(chunks),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _step4$value = _slicedToArray(_step4.value, 2),
        _x3 = _step4$value[0],
        _y3 = _step4$value[1];
      if (_y3 < 4) return at(_x3, _y3);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  throw new Error("Generic mining did not find teflon ore, mine manually. TIP: the ores show up in adjacent veins of 5.");
}

// ─── SUSHI AND THE AUTUMN-ATON ────────────────────────────────────────────────

function eatSushi() {
  var sushi = [[$item(_templateObject1$d || (_templateObject1$d = _taggedTemplateLiteral(["beefy fish meat"]))), "beefy nigiri"], [$item(_templateObject10$d || (_templateObject10$d = _taggedTemplateLiteral(["glistening fish meat"]))), "glistening nigiri"], [$item(_templateObject11$d || (_templateObject11$d = _taggedTemplateLiteral(["slick fish meat"]))), "slick nigiri"]];
  var found = sushi.find(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
      meat = _ref2[0];
    return kolmafia.itemAmount(meat) > 0;
  });
  if (found) kolmafia.cliExecute("make ".concat(found[1]));
}

// collectionprow1 is newer than libram's Upgrade list.
var AUTUMNATON_UPGRADES = {
  "mid indoor": "rightleg1",
  "low underground": "leftleg1",
  "mid outdoor": "rightarm1",
  "low indoor": "leftarm1",
  "high underground": "collectionprow1"
};
function useAutumnaton() {
  sendTo(zones => {
    if (zones.includes($location(_templateObject12$d || (_templateObject12$d = _taggedTemplateLiteral(["Anemone Mine"])))) && kolmafia.availableAmount($item(_templateObject13$c || (_templateObject13$c = _taggedTemplateLiteral(["Mer-kin digpick"])))) === 0) {
      return $location(_templateObject14$c || (_templateObject14$c = _taggedTemplateLiteral(["Anemone Mine"])));
    }
    var rift = $location(_templateObject15$c || (_templateObject15$c = _taggedTemplateLiteral(["Shadow Rift (The Misspelled Cemetary)"])));
    if (zones.includes(rift)) return rift;
    var upgrades = currentUpgrades();
    var upgrading = zones.find(zone => {
      var upgrade = AUTUMNATON_UPGRADES["".concat(zone.difficultyLevel, " ").concat(zone.environment)];
      return upgrade && !upgrades.includes(upgrade);
    });
    return upgrading ?? $location(_templateObject16$c || (_templateObject16$c = _taggedTemplateLiteral(["Noob Cave"])));
  });
}

// ─── WANTED MONSTERS ──────────────────────────────────────────────────────────

/** The monster the Peridot, Map the Monsters and the Time-Spinner pick in each zone. */
var WANTED_MONSTER = new Map([[$location(_templateObject17$c || (_templateObject17$c = _taggedTemplateLiteral(["An Octopus's Garden"]))), 740], [$location(_templateObject18$c || (_templateObject18$c = _taggedTemplateLiteral(["The Wreck of the Edgar Fitzsimmons"]))), 745], [$location(_templateObject19$c || (_templateObject19$c = _taggedTemplateLiteral(["The Sleazy Back Alley"]))), 159], [$location(_templateObject20$b || (_templateObject20$b = _taggedTemplateLiteral(["The Haunted Pantry"]))), 145], [$location(_templateObject21$b || (_templateObject21$b = _taggedTemplateLiteral(["The Overgrown Lot"]))), 1752], [$location(_templateObject22$b || (_templateObject22$b = _taggedTemplateLiteral(["The Coral Corral"]))), 775], [$location(_templateObject23$b || (_templateObject23$b = _taggedTemplateLiteral(["The Marinara Trench"]))), 762], [$location(_templateObject24$b || (_templateObject24$b = _taggedTemplateLiteral(["Anemone Mine"]))), 765], [$location(_templateObject25$b || (_templateObject25$b = _taggedTemplateLiteral(["The Dive Bar"]))), 768], [$location(_templateObject26$b || (_templateObject26$b = _taggedTemplateLiteral(["Cyberzone 1"]))), 2458], [$location(_templateObject27$b || (_templateObject27$b = _taggedTemplateLiteral(["Mer-kin Library"]))), 840], [$location(_templateObject28$b || (_templateObject28$b = _taggedTemplateLiteral(["The Mer-Kin Outpost"]))), 773], [$location(_templateObject29$b || (_templateObject29$b = _taggedTemplateLiteral(["The Caliginous Abyss"]))), 1373], [$location(_templateObject30$b || (_templateObject30$b = _taggedTemplateLiteral(["Mer-kin Elementary School"]))), 838], [$location(_templateObject31$b || (_templateObject31$b = _taggedTemplateLiteral(["The Outskirts of Cobb's Knob"]))), 152], [$location(_templateObject32$b || (_templateObject32$b = _taggedTemplateLiteral(["Madness Bakery"]))), 1750]]);
function zoneTarget(location) {
  if (location === $location(_templateObject33$b || (_templateObject33$b = _taggedTemplateLiteral(["Mer-kin Elementary School"]))) && cheatsheetsNeeded()) return 852;
  return WANTED_MONSTER.get(location) ?? 0;
}

// ─── TIME-SPINNER ─────────────────────────────────────────────────────────────

function timeSpinnerReady() {
  return haveItem($item(_templateObject34$a || (_templateObject34$a = _taggedTemplateLiteral(["Time-Spinner"])))) && get$1("_timeSpinnerMinutesUsed") <= 7 && kolmafia.myAdventures() > 0;
}

/** Re-fight the monster just fought, walking the Time-Spinner's choice chain by hand. */
function timeSpinnerFight(monster) {
  if (!timeSpinnerReady() || kolmafia.lastMonster() !== monster) return false;
  step("Time-Spinner: refighting ".concat(monster));
  kolmafia.visitUrl("inv_use.php?whichitem=".concat($item(_templateObject35$a || (_templateObject35$a = _taggedTemplateLiteral(["Time-Spinner"]))).id, "&pwd=").concat(kolmafia.myHash()));
  if (!kolmafia.handlingChoice()) {
    step("Time-Spinner choice was auto-resolved or never opened; skipping");
    return false;
  }
  var options = Object.entries(kolmafia.availableChoiceOptions());
  var travel = options.find(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
      text = _ref4[1];
    return text.includes("Travel to a Recent Fight");
  });
  var backOut = options.find(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 2),
      text = _ref6[1];
    return text.includes("Maybe Later");
  });
  if (!travel) {
    if (backOut) kolmafia.runChoice(Number(backOut[0]));
    return false;
  }
  kolmafia.runChoice(Number(travel[0]));
  kolmafia.runChoice(1, "monid=".concat(monster.id));
  kolmafia.runCombat();
  return true;
}
function timeSpinnerRefight(location) {
  var target = zoneTarget(location);
  if (target === 0 || kolmafia.myLocation() !== location) return;
  timeSpinnerFight(kolmafia.toMonster(target));
}

// ─── SABER, CLOAKE, CHAMPAGNE, GLOVE ──────────────────────────────────────────

function saberReady() {
  return haveItem($item(_templateObject36$a || (_templateObject36$a = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))) && get$1("_saberForceUses") < 5;
}

/** False where progress gates on turns spent rather than drops (the outpost lockkey). */
function saberZone(location) {
  return location !== $location(_templateObject37$a || (_templateObject37$a = _taggedTemplateLiteral(["The Mer-Kin Outpost"])));
}
function cloakeReady() {
  return haveItem($item(_templateObject38$9 || (_templateObject38$9 = _taggedTemplateLiteral(["vampyric cloake"])))) && get$1("_vampyreCloakeFormUses") < 10;
}

/** Only the zones ground purely for a drop. */
function cloakeZone(location) {
  return $locations(_templateObject39$9 || (_templateObject39$9 = _taggedTemplateLiteral(["The Wreck of the Edgar Fitzsimmons, An Octopus's Garden, The Coral Corral, Mer-kin Library, Mer-kin Elementary School"]))).includes(location);
}
function champagneReady() {
  return haveItem($item(_templateObject40$9 || (_templateObject40$9 = _taggedTemplateLiteral(["broken champagne bottle"])))) && get$1("garbageChampagneCharge") > 0;
}

/** Whether the bottle's ounces belong in this zone: only where a fat table is rolled. */
function champagneZone(location) {
  if (!champagneReady()) return false;
  if (location === $location(_templateObject41$9 || (_templateObject41$9 = _taggedTemplateLiteral(["The Wreck of the Edgar Fitzsimmons"])))) return !diverForceReady();
  return location === $location(_templateObject42$8 || (_templateObject42$8 = _taggedTemplateLiteral(["The Coral Corral"]))) && seaCowNeeded() && forcesAfterHealer() <= 0;
}
function gloveReady() {
  return haveItem($item(_templateObject43$8 || (_templateObject43$8 = _taggedTemplateLiteral(["Powerful Glove"])))) && get$1("_powerfulGloveBatteryPowerUsed") <= 90;
}
function macroReady() {
  return kolmafia.haveSkill($skill(_templateObject44$8 || (_templateObject44$8 = _taggedTemplateLiteral(["Macrometeorite"])))) && get$1("_macrometeoriteUses") < 10;
}

// ─── POCKET PROFESSOR ─────────────────────────────────────────────────────────

function professorReady() {
  return have$b() && currentlyAvailableLectures() > 0;
}

/** Whether the Professor goes out, where lecture copies are the cheapest drop source. */
function lectureNow() {
  if (!professorReady()) return false;
  if (diverHuntActive()) return !diverForceReady();
  if (seaCowNeeded() && forcesAfterHealer() <= 0) return true;
  return !kolmafia.haveFamiliar($familiar(_templateObject45$8 || (_templateObject45$8 = _taggedTemplateLiteral(["Chest Mimic"]))));
}

// ─── BANISHES ─────────────────────────────────────────────────────────────────

var BANISH_SOURCES = [[$item(_templateObject46$8 || (_templateObject46$8 = _taggedTemplateLiteral(["spring shoes"]))), $skill(_templateObject47$8 || (_templateObject47$8 = _taggedTemplateLiteral(["Spring Kick"])))], [$item(_templateObject48$8 || (_templateObject48$8 = _taggedTemplateLiteral(["Monodent of the Sea"]))), $skill(_templateObject49$8 || (_templateObject49$8 = _taggedTemplateLiteral(["Sea *dent: Throw a Lightning Bolt"])))], [$item(_templateObject50$7 || (_templateObject50$7 = _taggedTemplateLiteral(["Heartstone"]))), $skill(_templateObject51$7 || (_templateObject51$7 = _taggedTemplateLiteral(["Heartstone: %banish"])))]];

/** The monster a banish skill is holding. */
function banished(banisher) {
  return getBanishedMonsters().get(banisher) ?? $monster.none;
}

/** Whether any banish is holding the monster. */
function isBanished(monster) {
  return _toConsumableArray(getBanishedMonsters().values()).includes(monster);
}

/** The banish item for a zone whose last banish has lapsed. */
function banishGear(location) {
  var _iterator5 = _createForOfIteratorHelper(BANISH_SOURCES),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _step5$value = _slicedToArray(_step5.value, 2),
        item = _step5$value[0],
        skill = _step5$value[1];
      if (item === $item(_templateObject52$7 || (_templateObject52$7 = _taggedTemplateLiteral(["Heartstone"]))) && !get$1("heartstoneBanishUnlocked")) continue;
      if ((kolmafia.appearanceRates(location)[banished(skill).name] ?? 0) === 0 && haveItem(item)) {
        return item;
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return $item.none;
}

// ─── TRICK OR TREAT ───────────────────────────────────────────────────────────

function candy(action) {
  {
    var house = get$1("_trickOrTreatBlock").indexOf("D");
    kolmafia.visitUrl("place.php?whichplace=town&action=town_trickortreat");
    kolmafia.visitUrl("choice.php?whichchoice=804&pwd=".concat(kolmafia.myHash(), "&option=3&whichhouse=").concat(house));
    kolmafia.runCombat();
  }
}

/** With the backup camera on a copyable fight, spend the candy map on a trick-or-treat fight. */
function useMapIfAvailable() {
  if (highShiny()) return;
  if (!kolmafia.haveEquipped($item(_templateObject54$6 || (_templateObject54$6 = _taggedTemplateLiteral(["backup camera"]))))) return;
  if (freeMonster(get$1("lastCopyableMonster") ?? $monster.none)) return;
  if (!get$1("_mapToACandyRichBlockUsed") && kolmafia.itemAmount($item(_templateObject55$5 || (_templateObject55$5 = _taggedTemplateLiteral(["map to a candy-rich block"])))) > 0) {
    kolmafia.use($item(_templateObject56$4 || (_templateObject56$4 = _taggedTemplateLiteral(["map to a candy-rich block"]))));
  }
  if (get$1("_mapToACandyRichBlockUsed")) candy();
}

// ─── TRAIN SET ────────────────────────────────────────────────────────────────

function trainset() {
  var position = get$1("trainsetPosition") % 8;
  // The order the original used, starting at the next station.
  var order = [Station.COAL_HOPPER, Station.GAIN_MEAT, Station.GRAIN_SILO, Station.ORE_HOPPER, Station.VIEWING_PLATFORM, Station.CANDY_FACTORY, Station.TOWER_FIZZY, Station.TRACKSIDE_DINER];
  var cycle = order.map((_, i) => order[(i - position + 8) % 8]);
  setConfiguration(cycle);
}

// ─── LEPRECONDO ───────────────────────────────────────────────────────────────

/**
 * Furnish with the wanted pieces (Leprecondo.FURNITURE_PIECES indices, most
 * wanted first), topped up with anything else discovered.
 */
function leprecondo(input) {
  if (rearrangesRemaining() <= 0) return;
  var discovered = discoveredFurniture().filter(piece => piece !== undefined && piece !== "empty");
  var rooms = [];
  var _iterator7 = _createForOfIteratorHelper(input.split(",").map(n => FURNITURE_PIECES[Number(n)])),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var piece = _step7.value;
      if (rooms.length < 4 && discovered.includes(piece) && !rooms.includes(piece)) {
        rooms.push(piece);
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  var _iterator8 = _createForOfIteratorHelper(discovered),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var _piece = _step8.value;
      if (rooms.length >= 4) break;
      if (!rooms.includes(_piece)) rooms.push(_piece);
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  if (rooms.length < 4) {
    kolmafia.print("Leprecondo skipped: only ".concat(rooms.length, " furniture pieces discovered."), "red");
    return;
  }
  var a = rooms[0],
    b = rooms[1],
    c = rooms[2],
    d = rooms[3];
  if (!setFurniture(a, b, c, d)) kolmafia.print("Leprecondo furnish failed: ".concat(rooms), "red");
}

// ─── BASEBALL DIAMOND ─────────────────────────────────────────────────────────

/**
 * Set the pitching order once nine players are in: the yellow ray and free
 * kill pitchers as late as their slots allow, each with two lead-up pitches.
 */
function baseballD() {
  var lineup = get$1("baseballTeam").split(",");
  if (lineup.length !== 9) return;
  var pitches = new Map();
  var fillPrereqs = (slot, pitch) => {
    var filled = 0;
    for (var before = slot - 1; filled < 2 && before >= 1; before--) {
      if (!pitches.has(before)) {
        pitches.set(before, pitch);
        filled++;
      }
    }
    if (filled < 2) throw new Error("Not enough open slots to fill prereqs for outcome at slot ".concat(slot));
  };
  var canBanish = p => {
    if (!pitches.has(9)) return false;
    for (var x = 8; x >= 6; x--) if (pitches.has(x) || x === p) return true;
    return false;
  };
  var yellowRay = 0;
  var freeKill = 0;
  var banish = 0;
  for (var x = 9; x >= 3; x--) {
    var id = lineup[x - 1];
    if (!yellowRay && ["745", "838", "775", "773", "765", "768", "762", "763"].includes(id)) {
      yellowRay = x;
      pitches.set(x, 1);
    }
    if (!freeKill && id === "2499") {
      freeKill = x;
      pitches.set(x, 3);
    }
    // The banish pitch only works once slot 9 holds another outcome.
    if (!banish && id === "764" && canBanish(x)) {
      banish = x;
      pitches.set(x, 2);
    }
  }
  if (!yellowRay && !freeKill) {
    kolmafia.print("No yellow ray or free kill pitchers in lineup, skipping.", "red");
    return;
  }
  // Latest outcome first, so its lead-up pitches take the slots closest to it.
  var outcomes = [[yellowRay, 1], [banish, 2], [freeKill, 3]];
  outcomes.sort((a, b) => b[0] - a[0]);
  for (var _i2 = 0, _outcomes = outcomes; _i2 < _outcomes.length; _i2++) {
    var _outcomes$_i = _slicedToArray(_outcomes[_i2], 2),
      slot = _outcomes$_i[0],
      pitch = _outcomes$_i[1];
    if (slot > 0) fillPrereqs(slot, pitch);
  }
  kolmafia.visitUrl("inventory.php?pwd&action=pball&pwd=".concat(kolmafia.myHash(), "&action=pball"), false);
  for (var _x4 = 1; _x4 <= 9; _x4++) kolmafia.runChoice(pitches.get(_x4) ?? 4);
  kolmafia.runChoice(6);
}

// ─── SOURCE TERMINAL ──────────────────────────────────────────────────────────

/** Keep duplicate.edu slotted so the CCS can cast Duplicate. */
function sourceEducate() {
  var duplicate = $skill(_templateObject57$4 || (_templateObject57$4 = _taggedTemplateLiteral(["Duplicate"])));
  if (!have$d() || duplicateUsesRemaining() <= 0) return;
  if (!get$1("sourceTerminalEducateKnown").includes("duplicate.edu")) return;
  if (getSkills().includes(duplicate)) return;
  educate(duplicate);
}

/** The grandma shop scholar outfit, bought while wearing nothing in those slots. */
function buyScholarGear() {
  var _iterator9 = _createForOfIteratorHelper([[$item(_templateObject58$4 || (_templateObject58$4 = _taggedTemplateLiteral(["Mer-kin scholar mask"]))), $slot(_templateObject59$4 || (_templateObject59$4 = _taggedTemplateLiteral(["hat"])))], [$item(_templateObject60$4 || (_templateObject60$4 = _taggedTemplateLiteral(["Mer-kin scholar tailpiece"]))), $slot(_templateObject61$4 || (_templateObject61$4 = _taggedTemplateLiteral(["pants"])))]]),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var _step9$value = _slicedToArray(_step9.value, 2),
        piece = _step9$value[0],
        slot = _step9$value[1];
      if (kolmafia.availableAmount(piece) > 0 || kolmafia.haveEquipped(piece)) continue;
      kolmafia.equip(slot, $item.none);
      equipSwimTrunks();
      kolmafia.buy($coinmaster(_templateObject62$4 || (_templateObject62$4 = _taggedTemplateLiteral(["Grandma Sea Monkey"]))), 1, piece);
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
}

var _templateObject$c, _templateObject2$c, _templateObject3$c, _templateObject4$c, _templateObject5$c, _templateObject6$c, _templateObject7$c, _templateObject8$c, _templateObject9$c, _templateObject0$c, _templateObject1$c, _templateObject10$c, _templateObject11$c, _templateObject12$c, _templateObject13$b, _templateObject14$b, _templateObject15$b, _templateObject16$b, _templateObject17$b, _templateObject18$b, _templateObject19$b, _templateObject20$a, _templateObject21$a, _templateObject22$a, _templateObject23$a, _templateObject24$a, _templateObject25$a, _templateObject26$a, _templateObject27$a, _templateObject28$a, _templateObject29$a, _templateObject30$a, _templateObject31$a, _templateObject32$a, _templateObject33$a, _templateObject34$9, _templateObject35$9, _templateObject36$9, _templateObject37$9;

// Outfits. Ported from tempEquipment() and the if_equip(), bathysphere(),
// freeKill(), freeRun() and delay() string builders in UnderTheSeaGlobals.ash.
// The original built a comma list of items for the maximizer; here the same
// choices go into a grimoire Outfit, first item to claim a slot wins.

/** Gems the Eternity Codpiece may be holding, emptied before they are worn. */
var CODPIECE_GEMS = new Set($items(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["Baseball Diamond, Peridot of Peril, Heartstone, blood cubic zirconia"]))));

/** Turns between Möbius strip noncombats, by encounters so far today. */
var MOBIUS_GAPS = [0, 4, 7, 13, 19, 25, 31, 41, 41, 41, 41, 41, 51, 51, 51, 51, 51, 76, 76, 76, 76];
function mobiusNCReady() {
  var gap = MOBIUS_GAPS[get$1("_mobiusStripEncounters")] ?? 76;
  return kolmafia.totalTurnsPlayed() > get$1("_lastMobiusStripTurn") + gap;
}

/** "item drop, sea" or "Drops Items, sea", picked once at startup. */
var dropsItems = "item drop, sea";
function setDropsItems(value) {
  dropsItems = value;
}
var Gear = /*#__PURE__*/function () {
  /**
   * @param modifier Maximizer string, as the original passed to tempEquipment().
   * @param location Where the outfit will adventure. The original read
   *   my_location(), which is the previous zone until the turn is spent.
   */
  function Gear(modifier) {
    var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kolmafia.myLocation();
    _classCallCheck(this, Gear);
    _defineProperty(this, "items", []);
    _defineProperty(this, "required", []);
    _defineProperty(this, "modes", {});
    this.modifier = modifier;
    this.location = location;
  }

  /** Use the familiar a role picks. */
  return _createClass(Gear, [{
    key: "forRole",
    value: function forRole(role) {
      this.role = role;
      this.familiar = pickFamiliar(role);
      return this;
    }

    /** Use this familiar. */
  }, {
    key: "fam",
    value: function fam(familiar) {
      this.role = undefined;
      this.familiar = familiar;
      return this;
    }

    /** An item the original wore unconditionally; a missing one stops the run. */
  }, {
    key: "need",
    value: function need() {
      var _this$items, _this$required;
      (_this$items = this.items).push.apply(_this$items, arguments);
      (_this$required = this.required).push.apply(_this$required, arguments);
      return this;
    }

    /** Wear the item if it is in hand, emptying the codpiece of it first. */
  }, {
    key: "ifEquip",
    value: function ifEquip() {
      for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }
      for (var _i = 0, _items = items; _i < _items.length; _i++) {
        var item = _items[_i];
        if (CODPIECE_GEMS.has(item) && have()) {
          codpiece("none");
        }
        if (item !== $item.none && kolmafia.availableAmount(item) > 0) this.items.push(item);
      }
      return this;
    }

    /** The bathysphere when the familiar cannot breathe water, else the given item. */
  }, {
    key: "bathysphere",
    value: function bathysphere() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $item.none;
      // No familiar picked means the current one stays on.
      var familiar = this.familiar ?? kolmafia.myFamiliar();
      if (!familiar.underwater && kolmafia.haveEffect($effect(_templateObject2$c || (_templateObject2$c = _taggedTemplateLiteral(["Driving Waterproofly"])))) === 0) {
        this.items.push($item(_templateObject3$c || (_templateObject3$c = _taggedTemplateLiteral(["little bitty bathysphere"]))));
        return this;
      }
      return this.ifEquip(item);
    }

    /** The baseball diamond while the team is short. */
  }, {
    key: "baseball",
    value: function baseball() {
      if (baseballPlayers() < 9 && !highShiny()) this.ifEquip($item(_templateObject4$c || (_templateObject4$c = _taggedTemplateLiteral(["Baseball Diamond"]))));
      return this;
    }

    /** A free kill source to wear. */
  }, {
    key: "freeKill",
    value: function freeKill() {
      if (kolmafia.haveEffect($effect(_templateObject5$c || (_templateObject5$c = _taggedTemplateLiteral(["Everything Looks Red"])))) === 0 && kolmafia.availableAmount($item(_templateObject6$c || (_templateObject6$c = _taggedTemplateLiteral(["Everfull Dart Holster"])))) > 0) {
        return this.ifEquip($item(_templateObject7$c || (_templateObject7$c = _taggedTemplateLiteral(["Everfull Dart Holster"]))));
      }
      if (highShiny() && (this.familiar ?? kolmafia.myFamiliar()) !== swordOfSWords && kolmafia.haveEffect($effect(_templateObject8$c || (_templateObject8$c = _taggedTemplateLiteral(["Everything Looks Yellow"])))) === 0) {
        this.modes = _objectSpread2(_objectSpread2({}, this.modes), {}, {
          parka: "dilophosaur"
        });
        return this.ifEquip($item(_templateObject9$c || (_templateObject9$c = _taggedTemplateLiteral(["Jurassic Parka"]))));
      }
      if (highShiny()) return this;
      if (get$1("_assertYourAuthorityCast") < 3 && sheriffOutfit() && [$location(_templateObject0$c || (_templateObject0$c = _taggedTemplateLiteral(["An Octopus's Garden"]))), $location(_templateObject1$c || (_templateObject1$c = _taggedTemplateLiteral(["Mer-kin Gymnasium"]))), $location(_templateObject10$c || (_templateObject10$c = _taggedTemplateLiteral(["The Caliginous Abyss"])))].includes(this.location)) {
        return this.need($item(_templateObject11$c || (_templateObject11$c = _taggedTemplateLiteral(["Sheriff moustache"]))), $item(_templateObject12$c || (_templateObject12$c = _taggedTemplateLiteral(["Sheriff badge"]))), $item(_templateObject13$b || (_templateObject13$b = _taggedTemplateLiteral(["Sheriff pistol"]))));
      }
      if (get$1("_chestXRayUsed") < 3 && haveItem($item(_templateObject14$b || (_templateObject14$b = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))))) {
        return this.need($item(_templateObject15$b || (_templateObject15$b = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
      }
      if (bczSweatReady()) return this.ifEquip($item(_templateObject16$b || (_templateObject16$b = _taggedTemplateLiteral(["blood cubic zirconia"]))));
      return this;
    }

    /** A free run source to wear, or the Stomping Boots, else a free kill. */
  }, {
    key: "freeRun",
    value: function freeRun() {
      if (kolmafia.haveEffect($effect(_templateObject17$b || (_templateObject17$b = _taggedTemplateLiteral(["Everything Looks Green"])))) === 0) {
        return this.ifEquip($item(_templateObject18$b || (_templateObject18$b = _taggedTemplateLiteral(["spring shoes"]))));
      }
      var navel = get$1("_navelRunaways");
      if (kolmafia.availableAmount($item(_templateObject19$b || (_templateObject19$b = _taggedTemplateLiteral(["Greatest American Pants"])))) > 0 && (navel < 3 || navel < 10 && highShiny()) && kolmafia.haveEffect($effect(_templateObject20$a || (_templateObject20$a = _taggedTemplateLiteral(["Driving Waterproofly"])))) > 0) {
        return this.ifEquip($item(_templateObject21$a || (_templateObject21$a = _taggedTemplateLiteral(["Greatest American Pants"]))));
      }
      if (kolmafia.availableAmount($item(_templateObject22$a || (_templateObject22$a = _taggedTemplateLiteral(["V for Vivala mask"])))) > 0 && !get$1("_vmaskBanisherUsed")) return this.ifEquip($item(_templateObject23$a || (_templateObject23$a = _taggedTemplateLiteral(["V for Vivala mask"]))));
      if (kolmafia.availableAmount($item(_templateObject24$a || (_templateObject24$a = _taggedTemplateLiteral(["latte lovers member's mug"])))) > 0 && !get$1("_latteBanishUsed")) {
        return this.ifEquip($item(_templateObject25$a || (_templateObject25$a = _taggedTemplateLiteral(["latte lovers member's mug"]))));
      }
      var boots = $familiar(_templateObject26$a || (_templateObject26$a = _taggedTemplateLiteral(["Pair of Stomping Boots"])));
      if (have$e() && couldRunaway()) {
        return this.fam(boots);
      }
      return this.freeKill();
    }

    /**
     * The saber, so a healer that slips through gets Forced for a guaranteed
     * prayerbead, while there is a charge to spare after the diver's two.
     */
  }, {
    key: "healerSaber",
    value: function healerSaber() {
      if (prayerbeadsShort() && forcesAfterDiver() > 0) {
        this.ifEquip($item(_templateObject27$a || (_templateObject27$a = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
      }
      return this;
    }

    /** Delay burning: the Kramco, then a free run. */
  }, {
    key: "delay",
    value: function delay() {
      if (haveItem($item(_templateObject28$a || (_templateObject28$a = _taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))) && !highShiny()) {
        this.ifEquip($item(_templateObject29$a || (_templateObject29$a = _taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
      }
      return this.freeRun();
    }

    /** The saber, where a turn-free exit buys something. */
  }, {
    key: "saber",
    value: function saber() {
      if (saberReady() && saberZone(this.location)) this.ifEquip($item(_templateObject30$a || (_templateObject30$a = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
      return this;
    }

    /** The saber for the summoned diver fights, so the Force is castable. */
  }, {
    key: "diverSaber",
    value: function diverSaber() {
      if (diverForceReady()) this.need($item(_templateObject31$a || (_templateObject31$a = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
      return this;
    }

    /** The vampyric cloake, in the zones ground purely for a drop. */
  }, {
    key: "cloake",
    value: function cloake() {
      if (cloakeReady() && cloakeZone(this.location)) this.need($item(_templateObject32$a || (_templateObject32$a = _taggedTemplateLiteral(["vampyric cloake"]))));
      return this;
    }

    /** The broken champagne bottle, where a fat table is being rolled. */
  }, {
    key: "champagne",
    value: function champagne() {
      if (champagneZone(this.location)) this.ifEquip($item(_templateObject33$a || (_templateObject33$a = _taggedTemplateLiteral(["broken champagne bottle"]))));
      return this;
    }

    /** The Powerful Glove's re-roll at the wreck, while Macrometeorite is spent. */
  }, {
    key: "glove",
    value: function glove() {
      if (!macroReady() && gloveReady() && this.location === $location(_templateObject34$9 || (_templateObject34$9 = _taggedTemplateLiteral(["The Wreck of the Edgar Fitzsimmons"])))) {
        this.ifEquip($item(_templateObject35$9 || (_templateObject35$9 = _taggedTemplateLiteral(["Powerful Glove"]))));
      }
      return this;
    }

    /** Set an item mode, like the original's `modes` CLI string. */
  }, {
    key: "mode",
    value: function mode(modes) {
      this.modes = _objectSpread2(_objectSpread2({}, this.modes), modes);
      return this;
    }

    /** Put the gear on now, as tempEquipment() did. */
  }, {
    key: "dress",
    value: function dress() {
      this.outfit().dress();
    }

    /** The grimoire outfit for this gear. */
  }, {
    key: "outfit",
    value: function outfit() {
      var _iterator = _createForOfIteratorHelper(this.required),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (kolmafia.availableAmount(item) === 0) throw new Error("Missing ".concat(item));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var outfit = new Outfit();
      // As the original did: take the SCUBA tank off before the maximizer runs.
      outfit.beforeDress(() => {
        if (kolmafia.haveEquipped($item(_templateObject36$9 || (_templateObject36$9 = _taggedTemplateLiteral(["Elf Guard SCUBA tank"]))))) kolmafia.cliExecute("unequip Elf Guard SCUBA tank");
      });
      if (this.familiar === $familiar.none) {
        // No familiar at all: the outfit can't equip "none", so take it off first.
        outfit.beforeDress(() => kolmafia.useFamiliar($familiar.none));
      } else if (this.familiar) {
        outfit.equip(this.familiar);
      }
      var _iterator2 = _createForOfIteratorHelper(this.items),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _item = _step2.value;
          outfit.equip(_item);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (highShiny() && mobiusNCReady()) outfit.equip($item(_templateObject37$9 || (_templateObject37$9 = _taggedTemplateLiteral(["M\xF6bius ring"]))));
      outfit.modifier.push(this.modifier);
      outfit.setModes(this.modes);
      if (this.role === "itdrop") outfit.afterDress(() => mummery());
      return outfit;
    }
  }]);
}();

// The one ASH dependency left: seedfinder, which solves the dreadscroll from
// the clues found so far. It is an ASH library with no TypeScript port, so it
// is called through a one-statement ASH bridge, as the original imported it.

var SEEDFINDER = "seedfinder/seedfinder.ash";
function seedfinder(statement) {
  return kolmafia.cliExecute("ash import <".concat(SEEDFINDER, ">; ").concat(statement));
}

/** Fill in every dreadscroll answer once the clues pin down a single seed. */
function dreadSeedCheck() {
  seedfinder("SeedData[int] s = find_seeds(); " + 'if (count(s) == 1) { foreach i, seed in s for x from 1 to 8 if (get_property("dreadScroll" + x) == "0") set_property("dreadScroll" + x, seed.dreadscroll[x - 1]); } ' + 'else print(count(s) + " possible seeds right now");');
}

/**
 * Whether the seeds left all agree on scrolls 4 and 7 (the knucklebone and
 * sushi clues), so the school can be skipped. False with no seeds at all.
 */
function isKBandSushiEnough() {
  var flag = "_sebKBandSushiEnough";
  _set(flag, false);
  seedfinder("SeedData[int] s = find_seeds(); boolean ok = count(s) > 0; boolean [string] seen; " + 'foreach i, seed in s { string key = seed.dreadscroll[3] + ":" + seed.dreadscroll[6]; if (seen contains key) ok = false; seen[key] = true; } ' + "set_property(\"".concat(flag, "\", ok);"));
  return get$1(flag, false);
}

var _templateObject$b, _templateObject2$b, _templateObject3$b, _templateObject4$b, _templateObject5$b, _templateObject6$b, _templateObject7$b, _templateObject8$b, _templateObject9$b, _templateObject0$b, _templateObject1$b, _templateObject10$b, _templateObject11$b, _templateObject12$b, _templateObject13$a, _templateObject14$a, _templateObject15$a, _templateObject16$a, _templateObject17$a, _templateObject18$a, _templateObject19$a, _templateObject20$9, _templateObject21$9, _templateObject22$9, _templateObject23$9, _templateObject24$9, _templateObject25$9, _templateObject26$9, _templateObject27$9, _templateObject28$9, _templateObject29$9, _templateObject30$9, _templateObject31$9, _templateObject32$9, _templateObject33$9, _templateObject34$8, _templateObject35$8, _templateObject36$8, _templateObject37$8, _templateObject38$8, _templateObject39$8, _templateObject40$8, _templateObject41$8, _templateObject42$7, _templateObject43$7, _templateObject44$7, _templateObject45$7, _templateObject46$7, _templateObject47$7, _templateObject48$7, _templateObject49$7, _templateObject50$6, _templateObject51$6, _templateObject52$6, _templateObject53$6, _templateObject54$5, _templateObject55$4, _templateObject56$3, _templateObject57$3, _templateObject58$3, _templateObject59$3, _templateObject60$3, _templateObject61$3, _templateObject62$3, _templateObject63$3, _templateObject64$3, _templateObject65$3, _templateObject66$3, _templateObject67$3, _templateObject68$3, _templateObject69$3, _templateObject70$3, _templateObject71$3, _templateObject72$3, _templateObject73$3, _templateObject74$3, _templateObject75$3, _templateObject76$3, _templateObject77$3, _templateObject78$3, _templateObject79$3, _templateObject80$3, _templateObject81$3, _templateObject82$3, _templateObject83$3, _templateObject84$3, _templateObject85$3, _templateObject86$3, _templateObject87$3, _templateObject88$3, _templateObject89$3, _templateObject90$3, _templateObject91$3, _templateObject92$3, _templateObject93$3, _templateObject94$3, _templateObject95$3, _templateObject96$3, _templateObject97$3, _templateObject98$3, _templateObject99$3, _templateObject100$3;

// Housekeeping after every adventure. Ported from post_adv(), setMPRecovery()
// and the dolphin whistle helpers in UnderTheSea.ash and its globals.

// ─── MP RECOVERY ──────────────────────────────────────────────────────────────

/** MP for one fight's kill: three casts of cleanUp()'s spell, at most half of max MP. */
function fightMP() {
  var kill = kolmafia.haveSkill($skill(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["Saucegeyser"])))) ? $skill(_templateObject2$b || (_templateObject2$b = _taggedTemplateLiteral(["Saucegeyser"]))) : $skill(_templateObject3$b || (_templateObject3$b = _taggedTemplateLiteral(["Saucestorm"])));
  return Math.min(Math.floor(kolmafia.myMaxmp() / 2), 3 * kolmafia.mpCost(kill));
}

/**
 * MP up to goal that meat buys in Doc Galaktik's tonics at their low roll of
 * 9, after selling drops the run never uses. Stops the run when not even one
 * fight's kill is affordable.
 */
function affordableMP(goal) {
  var price = kolmafia.npcPrice($item(_templateObject4$b || (_templateObject4$b = _taggedTemplateLiteral(["Doc Galaktik's Invigorating Tonic"]))));
  if (price <= 0) return goal;
  if (kolmafia.myMeat() < price * Math.floor((goal + 8) / 9)) {
    var _iterator = _createForOfIteratorHelper($items(_templateObject5$b || (_templateObject5$b = _taggedTemplateLiteral(["Eye Agate, Azurite, Lapis Lazuli, dense meat stack"])))),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        if (kolmafia.itemAmount(item) > 0 && !kolmafia.autosell(kolmafia.itemAmount(item), item)) {
          kolmafia.print("Couldn't autosell the ".concat(item, "."), "red");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  var fight = Math.min(goal, fightMP());
  var afford = Math.floor(kolmafia.myMeat() / price) * 9;
  if (afford < fight && kolmafia.myMp() < fight && (!kolmafia.restoreMp(fight) || kolmafia.myMp() < fight)) {
    var why = "SEB: ".concat(kolmafia.myMp(), " MP and ").concat(kolmafia.myMeat(), " meat can't cover the ").concat(fight, " MP of the next fight. Get MP or meat, then rerun.");
    kolmafia.print(why, "red");
    throw new Error(why);
  }
  return Math.min(goal, Math.max(fight, Math.floor(kolmafia.myMeat() / price) * 9));
}
var round4 = n => Math.round(n * 10000) / 10000;

/** The MP recovery target setMPRecovery() last wrote. */
var mpTargetSet = -1;

/** MP recovery up to 250 or what meat buys, starting before a fight's kill runs short. */
function setMPRecovery() {
  var target = Math.min(1, affordableMP(250) / kolmafia.myMaxmp());
  var low = Math.min(target, Math.max(target * 0.5, fightMP() / kolmafia.myMaxmp()));
  _set("mpAutoRecovery", round4(low));
  _set("mpAutoRecoveryTarget", round4(target));
  mpTargetSet = round4(target);
}

/** Re-cap MP recovery at the meat on hand, unless a phase has set its own target since. */
function refreshMPRecovery() {
  if (get$1("mpAutoRecoveryTarget") === mpTargetSet) setMPRecovery();
}

// ─── DOLPHINS ─────────────────────────────────────────────────────────────────

/** Quest items worth a turn to claim off a dolphin. */
var WHISTLE_WORTHY = new Set($items(_templateObject6$b || (_templateObject6$b = _taggedTemplateLiteral(["Mer-kin prayerbeads, Mer-kin healscroll, Mer-kin lockkey, Mer-kin hallpass, Mer-kin cheatsheet, Mer-kin bunwig, rusty rivet, rusty porthole, rusty broken diving helmet, sea leather, sea cowbell, sea lasso"]))));
function stillWanted(item) {
  switch (item) {
    case $item(_templateObject7$b || (_templateObject7$b = _taggedTemplateLiteral(["rusty broken diving helmet"]))):
    case $item(_templateObject8$b || (_templateObject8$b = _taggedTemplateLiteral(["rusty porthole"]))):
    case $item(_templateObject9$b || (_templateObject9$b = _taggedTemplateLiteral(["rusty rivet"]))):
      return diverHuntActive();
    case $item(_templateObject0$b || (_templateObject0$b = _taggedTemplateLiteral(["sea leather"]))):
      return seaCowNeeded();
    case $item(_templateObject1$b || (_templateObject1$b = _taggedTemplateLiteral(["Mer-kin cheatsheet"]))):
      // One is spent per wordquiz, and each quiz is ten of the ninety wanted.
      return kolmafia.itemAmount(item) * 10 < 90 - get$1("merkinVocabularyMastery");
    case $item(_templateObject10$b || (_templateObject10$b = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))):
      return !have$g(item, 3);
    case $item(_templateObject11$b || (_templateObject11$b = _taggedTemplateLiteral(["Mer-kin bunwig"]))):
      return !have$g(item);
  }
  return true;
}
function durableWhistleReady() {
  return kolmafia.itemAmount($item(_templateObject12$b || (_templateObject12$b = _taggedTemplateLiteral(["durable dolphin whistle"])))) > 0 && get$1("_durableDolphinWhistleUsed") < get$1("seaPoints");
}

/** Sand dollars Big Brother is still owed, so only the surplus buys whistles. */
function sandDollarsOwed() {
  var owed = 0;
  if (!have$g($item(_templateObject13$a || (_templateObject13$a = _taggedTemplateLiteral(["black glass"]))))) owed += 13;
  if (!get$1("dampOldBootPurchased")) owed += 50;
  if (tailpiece() === $item.none && !have$g($item(_templateObject14$a || (_templateObject14$a = _taggedTemplateLiteral(["waterlogged bootstraps"]))))) owed += 10;
  return owed;
}
var dolphinSaid = "";
function dolphinWhistle() {
  // The buffer holds one item and the next theft overwrites it.
  var stolen = get$1("dolphinItem") ?? $item.none;
  if (!WHISTLE_WORTHY.has(stolen) || !stillWanted(stolen) || highShiny() || kolmafia.myAdventures() === 0 || kolmafia.myInebriety() > kolmafia.inebrietyLimit()) {
    return;
  }
  var refused = false;
  if (kolmafia.itemAmount($item(_templateObject15$a || (_templateObject15$a = _taggedTemplateLiteral(["dolphin whistle"])))) === 0 && !durableWhistleReady() && kolmafia.itemAmount($item(_templateObject16$a || (_templateObject16$a = _taggedTemplateLiteral(["sand dollar"])))) > sandDollarsOwed()) {
    refused = !kolmafia.buy($coinmaster(_templateObject17$a || (_templateObject17$a = _taggedTemplateLiteral(["Big Brother"]))), 1, $item(_templateObject18$a || (_templateObject18$a = _taggedTemplateLiteral(["dolphin whistle"]))));
  }
  var whistle = durableWhistleReady() ? $item(_templateObject19$a || (_templateObject19$a = _taggedTemplateLiteral(["durable dolphin whistle"]))) : kolmafia.itemAmount($item(_templateObject20$9 || (_templateObject20$9 = _taggedTemplateLiteral(["dolphin whistle"])))) > 0 ? $item(_templateObject21$9 || (_templateObject21$9 = _taggedTemplateLiteral(["dolphin whistle"]))) : $item.none;
  if (whistle !== $item.none) kolmafia.use(whistle);
  // use() reports success mid-fight too, so the emptied buffer is what says it blew.
  var blew = get$1("dolphinItem") === null;
  var why = blew ? "blew the ".concat(whistle) : whistle !== $item.none ? "the ".concat(whistle, " would not blow") : refused ? "Big Brother would not sell a whistle" : "no whistle, and ".concat(kolmafia.itemAmount($item(_templateObject22$9 || (_templateObject22$9 = _taggedTemplateLiteral(["sand dollar"])))), " sand dollars against ").concat(sandDollarsOwed(), " owed");
  var said = "".concat(stolen, ": ").concat(why);
  if (said !== dolphinSaid) {
    step("a dolphin took ".concat(stolen, "; ").concat(why, "."));
    dolphinSaid = said;
  }
  // A later theft of the same item is a new event.
  if (blew) dolphinSaid = "";
}

// ─── FISHY ────────────────────────────────────────────────────────────────────

var PASTAS = $items(_templateObject23$9 || (_templateObject23$9 = _taggedTemplateLiteral(["Frutti di Scatoletta, Pesto alla Marziano, Arrattabbattabiata, Orzo di Riso, Pasta Grimavera, Linguini Ubriacapa, Gnocci Domani, Formica e Pepe, Tubetto Gelatto"])));
function valueOfSpleen() {
  if (!kolmafia.haveSkill($skill(_templateObject24$9 || (_templateObject24$9 = _taggedTemplateLiteral(["Sweet Synthesis"]))))) {
    return 30 * 250 * 3 - kolmafia.mallPrice($item(_templateObject25$9 || (_templateObject25$9 = _taggedTemplateLiteral(["Crimbo candied pecan"])))) * 2;
  }
  return get$1("valueOfAdventure") * 2.5 - kolmafia.mallPrice($item(_templateObject26$9 || (_templateObject26$9 = _taggedTemplateLiteral(["transdermal smoke patch"]))));
}
function seaPathFishy() {
  if (haveItem($item(_templateObject27$9 || (_templateObject27$9 = _taggedTemplateLiteral(["fishy pipe"])))) && kolmafia.itemAmount($item(_templateObject28$9 || (_templateObject28$9 = _taggedTemplateLiteral(["closed-circuit pay phone"])))) > 0 && haveItem($item(_templateObject29$9 || (_templateObject29$9 = _taggedTemplateLiteral(["Monodent of the Sea"])))) && haveItem($item(_templateObject30$9 || (_templateObject30$9 = _taggedTemplateLiteral(["Platinum Yendorian Express Card"])))) && !get$1("_fishyPipeUsed") && !lowShiny() && !highShiny()) {
    if (kolmafia.itemAmount($item(_templateObject31$9 || (_templateObject31$9 = _taggedTemplateLiteral(["fishy pipe"])))) === 0) kolmafia.cliExecute("pull fishy pipe");
    kolmafia.use($item(_templateObject32$9 || (_templateObject32$9 = _taggedTemplateLiteral(["fishy pipe"]))));
  } else if (highShiny() || lowShiny() && !pulledToday($item(_templateObject33$9 || (_templateObject33$9 = _taggedTemplateLiteral(["Aldebaran sardines"]))))) {
    var pasta = PASTAS.reduce((a, b) => kolmafia.mallPrice(b) < kolmafia.mallPrice(a) ? b : a);
    if (pullSequence(pasta)) kolmafia.eat(pasta);
    if (pullSequence($item(_templateObject34$8 || (_templateObject34$8 = _taggedTemplateLiteral(["Aldebaran sardines"]))))) kolmafia.eat($item(_templateObject35$8 || (_templateObject35$8 = _taggedTemplateLiteral(["Aldebaran sardines"]))));
  } else if (kolmafia.pullsRemaining() !== 0 && !pulledToday($item(_templateObject36$8 || (_templateObject36$8 = _taggedTemplateLiteral(["fish sauce"])))) && !pulledToday($item(_templateObject37$8 || (_templateObject37$8 = _taggedTemplateLiteral(["cuppa Gill tea"]))))) {
    if (kolmafia.mallPrice($item(_templateObject38$8 || (_templateObject38$8 = _taggedTemplateLiteral(["fish sauce"])))) + valueOfSpleen() <= kolmafia.mallPrice($item(_templateObject39$8 || (_templateObject39$8 = _taggedTemplateLiteral(["cuppa Gill tea"]))))) {
      pullSequence($item(_templateObject40$8 || (_templateObject40$8 = _taggedTemplateLiteral(["fish sauce"]))));
      kolmafia.chew($item(_templateObject41$8 || (_templateObject41$8 = _taggedTemplateLiteral(["fish sauce"]))));
    } else {
      pullSequence($item(_templateObject42$7 || (_templateObject42$7 = _taggedTemplateLiteral(["cuppa Gill tea"]))));
      kolmafia.use($item(_templateObject43$7 || (_templateObject43$7 = _taggedTemplateLiteral(["cuppa Gill tea"]))));
    }
  } else if (kolmafia.getCampground()[$item(_templateObject44$7 || (_templateObject44$7 = _taggedTemplateLiteral(["potted tea tree"]))).name] && !get$1("_pottedTeaTreeUsed")) {
    kolmafia.cliExecute("teatree cuppa Gill tea");
    kolmafia.use($item(_templateObject45$7 || (_templateObject45$7 = _taggedTemplateLiteral(["cuppa Gill tea"]))));
  } else {
    kolmafia.retrieveItem($item(_templateObject46$7 || (_templateObject46$7 = _taggedTemplateLiteral(["white rice"]))));
    eatSushi();
  }
}
function seaPathUpkeep() {
  if (kolmafia.myAdventures() === 0) {
    if (kolmafia.itemAmount($item(_templateObject47$7 || (_templateObject47$7 = _taggedTemplateLiteral(["astral six-pack"])))) > 0) kolmafia.use($item(_templateObject48$7 || (_templateObject48$7 = _taggedTemplateLiteral(["astral six-pack"]))));
    if (kolmafia.itemAmount($item(_templateObject49$7 || (_templateObject49$7 = _taggedTemplateLiteral(["astral pilsner"])))) === 0) throw new Error("no more easy diet");
    uneffect($effect(_templateObject50$6 || (_templateObject50$6 = _taggedTemplateLiteral(["Donho's Bubbly Ballad"]))));
    if (kolmafia.haveSkill($skill(_templateObject51$6 || (_templateObject51$6 = _taggedTemplateLiteral(["The Ode to Booze"]))))) kolmafia.useSkill($skill(_templateObject52$6 || (_templateObject52$6 = _taggedTemplateLiteral(["The Ode to Booze"]))));
    kolmafia.drink($item(_templateObject53$6 || (_templateObject53$6 = _taggedTemplateLiteral(["astral pilsner"]))));
  }
  if (kolmafia.haveEffect($effect(_templateObject54$5 || (_templateObject54$5 = _taggedTemplateLiteral(["Driving Waterproofly"])))) === 0 && installed$2()) {
    // libram fuels from inventory first, then buys (soda bread in ronin).
    // Without fuel the run goes on undriven rather than stopping.
    if (!drive($effect(_templateObject55$4 || (_templateObject55$4 = _taggedTemplateLiteral(["Driving Waterproofly"]))), 1, true)) {
      kolmafia.print("SEB: couldn't fuel the Asdon (".concat(kolmafia.getFuel(), " fuel), skipping Driving Waterproofly."), "red");
    }
  }
  if (kolmafia.haveEffect($effect(_templateObject56$3 || (_templateObject56$3 = _taggedTemplateLiteral(["Fishy"])))) === 0) {
    seaPathFishy();
    if (kolmafia.haveEffect($effect(_templateObject57$3 || (_templateObject57$3 = _taggedTemplateLiteral(["Fishy"])))) === 0) throw new Error("acquire fishy failed");
  }
}
function aftercoreUpkeep() {
  if (kolmafia.itemAmount($item(_templateObject58$3 || (_templateObject58$3 = _taggedTemplateLiteral(["sea lasso"])))) === 0) kolmafia.retrieveItem($item(_templateObject59$3 || (_templateObject59$3 = _taggedTemplateLiteral(["sea lasso"]))));
  if (kolmafia.myAdventures() === 0) throw new Error("Out of adventures, run consume");
  if (kolmafia.haveEffect($effect(_templateObject60$3 || (_templateObject60$3 = _taggedTemplateLiteral(["Fishy"])))) > 0) return;
  if (haveItem($item(_templateObject61$3 || (_templateObject61$3 = _taggedTemplateLiteral(["fishy pipe"])))) && !get$1("_fishyPipeUsed")) {
    kolmafia.use($item(_templateObject62$3 || (_templateObject62$3 = _taggedTemplateLiteral(["fishy pipe"]))));
  } else if (kolmafia.mySpleenUse() < kolmafia.spleenLimit()) {
    kolmafia.retrieveItem($item(_templateObject63$3 || (_templateObject63$3 = _taggedTemplateLiteral(["fish sauce"]))));
    kolmafia.chew($item(_templateObject64$3 || (_templateObject64$3 = _taggedTemplateLiteral(["fish sauce"]))));
  } else {
    throw new Error("get fishy");
  }
}

// ─── COPIED MONSTERS ──────────────────────────────────────────────────────────

/** Item familiar, or the Sword when it is still collecting lassos. */
function copyFightFamiliar(gear) {
  return doSWord() ? gear.fam(swordOfSWords) : gear.forRole("itdrop");
}
function copiedMonsterFollowUps() {
  var pearlZone = pearlLoc();
  // VHS tape monster, eight turns after it was recorded.
  if (get$1("spookyVHSTapeMonster") !== null && kolmafia.totalTurnsPlayed() >= get$1("spookyVHSTapeMonsterTurn") + 8) {
    copyFightFamiliar(new Gear("".concat(pearlRes(), ",sea"), pearlZone)).ifEquip($item(_templateObject65$3 || (_templateObject65$3 = _taggedTemplateLiteral(["legendary seal-clubbing club"])))).need($item(_templateObject66$3 || (_templateObject66$3 = _taggedTemplateLiteral(["shark jumper"]))), $item(_templateObject67$3 || (_templateObject67$3 = _taggedTemplateLiteral(["scale-mail underwear"])))).bathysphere().outfit().dress();
    kolmafia.adv1(pearlZone, -1, "");
  }

  // VHS tape recording window, in the Caliginous Abyss.
  var momProgress = get$1("momSeaMonkeeProgress");
  if (kolmafia.itemAmount($item(_templateObject68$3 || (_templateObject68$3 = _taggedTemplateLiteral(["Spooky VHS Tape"])))) > 0 && get$1("spookyVHSTapeMonster") === null && momProgress > 22 && momProgress < 33) {
    var abyss = $location(_templateObject69$3 || (_templateObject69$3 = _taggedTemplateLiteral(["The Caliginous Abyss"])));
    var gear = new Gear("item drop,sea", abyss).forRole("itdrop").need($item(_templateObject70$3 || (_templateObject70$3 = _taggedTemplateLiteral(["shark jumper"]))), $item(_templateObject71$3 || (_templateObject71$3 = _taggedTemplateLiteral(["scale-mail underwear"]))), $item(_templateObject72$3 || (_templateObject72$3 = _taggedTemplateLiteral(["black glass"])))).ifEquip($item(_templateObject73$3 || (_templateObject73$3 = _taggedTemplateLiteral(["Peridot of Peril"])))).freeKill().bathysphere($item(_templateObject74$3 || (_templateObject74$3 = _taggedTemplateLiteral(["toy Cupid bow"]))));
    if (!isBanished($monster(_templateObject75$3 || (_templateObject75$3 = _taggedTemplateLiteral(["school of many"]))))) {
      gear.need($item(_templateObject76$3 || (_templateObject76$3 = _taggedTemplateLiteral(["Monodent of the Sea"]))));
    }
    gear.outfit().dress();
    kolmafia.adv1(abyss, -1, "");
  }

  // Club 'Em Into Next Week monster.
  if (clubIntoNextWeekMonster() !== null && turnsUntilNextWeekFight() <= 0 && kolmafia.myLocation() !== $location(_templateObject77$3 || (_templateObject77$3 = _taggedTemplateLiteral(["Mer-kin Elementary School"]))) && kolmafia.myLocation() !== $location(_templateObject78$3 || (_templateObject78$3 = _taggedTemplateLiteral(["Mer-kin Library"])))) {
    new Gear("".concat(pearlRes(), ",sea"), pearlZone).forRole("itdrop").need($item(_templateObject79$3 || (_templateObject79$3 = _taggedTemplateLiteral(["legendary seal-clubbing club"])))).bathysphere().outfit().dress();
    kolmafia.adv1(pearlZone, -1, "");
  }
}

// ─── POST ADVENTURE ───────────────────────────────────────────────────────────

function postAdventure() {
  if (get$1("_lastCombatLost")) {
    if (have$g($effect(_templateObject80$3 || (_templateObject80$3 = _taggedTemplateLiteral(["Beaten Up"]))))) {
      if (kolmafia.haveSkill($skill(_templateObject81$3 || (_templateObject81$3 = _taggedTemplateLiteral(["Tongue of the Walrus"]))))) kolmafia.useSkill($skill(_templateObject82$3 || (_templateObject82$3 = _taggedTemplateLiteral(["Tongue of the Walrus"]))));else kolmafia.cliExecute("campground rest");
    }
    _set("_lastCombatLost", false);
    throw new Error("It appears you lost the last combat, look into that");
  }
  if (have$g($effect(_templateObject83$3 || (_templateObject83$3 = _taggedTemplateLiteral(["Really Quite Poisoned"]))))) uneffect($effect(_templateObject84$3 || (_templateObject84$3 = _taggedTemplateLiteral(["Really Quite Poisoned"]))));
  if (have$g($effect(_templateObject85$3 || (_templateObject85$3 = _taggedTemplateLiteral(["Marked by the Don"])))) && kolmafia.haveSkill($skill(_templateObject86$3 || (_templateObject86$3 = _taggedTemplateLiteral(["Disco Nap"]))))) {
    kolmafia.useSkill($skill(_templateObject87$3 || (_templateObject87$3 = _taggedTemplateLiteral(["Disco Nap"]))));
  }
  if (get$1("NCtoC", false)) _set("NCtoC", false);
  if (!get$1("isMerkinHighPriest") && get$1("seahorseName") !== "") {
    dreadSeedCheck();
  }
  if (available$1()) useAutumnaton();
  if (get$1("_universeCalculated") < Math.min(2, get$1("skillLevel144")) && Object.values(kolmafia.reverseNumberology()).includes(69)) {
    kolmafia.cliExecute("numberology 69");
  }
  if (canConfigure()) trainset();
  if (kolmafia.haveEffect($effect(_templateObject88$3 || (_templateObject88$3 = _taggedTemplateLiteral(["Resined"])))) === 0 && kolmafia.itemAmount($item(_templateObject89$3 || (_templateObject89$3 = _taggedTemplateLiteral(["inflammable leaf"])))) > 50) {
    kolmafia.use($item(_templateObject90$3 || (_templateObject90$3 = _taggedTemplateLiteral(["distilled resin"]))));
  }
  if (kolmafia.itemAmount($item(_templateObject91$3 || (_templateObject91$3 = _taggedTemplateLiteral(["whirled peas"])))) >= 2) kolmafia.retrieveItem($item(_templateObject92$3 || (_templateObject92$3 = _taggedTemplateLiteral(["handful of split pea soup"]))));
  if (kolmafia.haveSkill($skill(_templateObject93$3 || (_templateObject93$3 = _taggedTemplateLiteral(["Summon Taffy"])))) && kolmafia.mpCost($skill(_templateObject94$3 || (_templateObject94$3 = _taggedTemplateLiteral(["Summon Taffy"])))) < kolmafia.myMp() && get$1("_taffyYellowSummons") === 0) {
    kolmafia.useSkill($skill(_templateObject95$3 || (_templateObject95$3 = _taggedTemplateLiteral(["Summon Taffy"]))));
  }
  if (inSeaPath()) seaPathUpkeep();else if (inAftercore()) aftercoreUpkeep();
  if (restUpsideDownRemaining() > 0 && (kolmafia.myMp() < kolmafia.myMaxmp() - 1000 || kolmafia.myMp() < 150)) {
    kolmafia.equip($item(_templateObject96$3 || (_templateObject96$3 = _taggedTemplateLiteral(["bat wings"]))));
    kolmafia.useSkill($skill(_templateObject97$3 || (_templateObject97$3 = _taggedTemplateLiteral(["Rest upside down"]))));
  }
  dolphinWhistle();
  if (kolmafia.myMeat() < 300) {
    var _iterator2 = _createForOfIteratorHelper($items(_templateObject98$3 || (_templateObject98$3 = _taggedTemplateLiteral(["dull fish scale, rough fish scale"])))),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        kolmafia.autosell(kolmafia.itemAmount(item), item);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  copiedMonsterFollowUps();
  var hpTarget = Math.min(1, 570 / kolmafia.myMaxhp());
  if (kolmafia.myLocation() === $location(_templateObject99$3 || (_templateObject99$3 = _taggedTemplateLiteral(["Mer-kin Colosseum"])))) hpTarget = 1;else if (kolmafia.myLocation() === $location(_templateObject100$3 || (_templateObject100$3 = _taggedTemplateLiteral(["Mer-kin Gymnasium"])))) hpTarget = Math.min(1, 800 / kolmafia.myMaxhp());
  _set("hpAutoRecovery", round4(hpTarget * 0.75));
  _set("hpAutoRecoveryTarget", round4(hpTarget));
  setMPRecovery();
}

/** One turn in a zone with the original's adv(): MP re-cap, adv1, then post_adv(). */
function adv(location) {
  refreshMPRecovery();
  kolmafia.adv1(location, -1, "");
  postAdventure();
}

/**
 * How a task acts, without when: the outfit, setup and turn. Several tasks
 * farm the same zone the same way under different conditions, so they share
 * a body and differ only in ready() and completed().
 */

function resolve(value) {
  return typeof value === "function" ? value() : value;
}

/**
 * One of two bodies, picked in before() and kept for the rest of the
 * execution, so a turn that changes the condition can't switch bodies
 * between the outfit and the post.
 */
function branch(pick, yes, no) {
  var body = no;
  return {
    before: () => {
      var _body$before, _body;
      body = pick() ? yes : no;
      (_body$before = (_body = body).before) === null || _body$before === void 0 || _body$before.call(_body);
    },
    outfit: () => resolve(body.outfit) ?? {},
    choices: () => resolve(body.choices) ?? {},
    prepare: () => {
      var _body$prepare, _body2;
      return (_body$prepare = (_body2 = body).prepare) === null || _body$prepare === void 0 ? void 0 : _body$prepare.call(_body2);
    },
    do: () => body.do instanceof kolmafia.Location ? body.do : body.do(),
    post: () => {
      var _body$post, _body3;
      return (_body$post = (_body3 = body).post) === null || _body$post === void 0 ? void 0 : _body$post.call(_body3);
    }
  };
}

/**
 * The body with extra setup before its own before() and extra cleanup after
 * its own post(). Setting before or post beside a spread body would replace
 * the body's hook instead of adding to it, so tasks add hooks through this.
 */
function withHooks(body, hooks) {
  return _objectSpread2(_objectSpread2({}, body), {}, {
    before: () => {
      var _hooks$before, _body$before2;
      (_hooks$before = hooks.before) === null || _hooks$before === void 0 || _hooks$before.call(hooks);
      (_body$before2 = body.before) === null || _body$before2 === void 0 || _body$before2.call(body);
    },
    post: () => {
      var _body$post2, _hooks$post;
      (_body$post2 = body.post) === null || _body$post2 === void 0 || _body$post2.call(body);
      (_hooks$post = hooks.post) === null || _hooks$post === void 0 || _hooks$post.call(hooks);
    }
  });
}

/** The CCS the run fights with. It consults the combat script. */
var SEB_CCS = "seb_grimoire";
/** The bundled combat consult script, built from src/combat.ts. */
var COMBAT_SCRIPT = "sebastian_combat.js";
/** The bundled choice adventure script, built from src/choice.ts. */
var CHOICE_SCRIPT = "sebastian_choice.js";
var SebEngine = /*#__PURE__*/function (_Engine) {
  function SebEngine() {
    var _this;
    _classCallCheck(this, SebEngine);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, SebEngine, [].concat(args));
    _defineProperty(_this, "adventured", false);
    return _this;
  }
  _inherits(SebEngine, _Engine);
  return _createClass(SebEngine, [{
    key: "properties",
    get: /** Public so postloop mode can set its own properties for the engine to restore. */
    function get() {
      return this.propertyManager;
    }
  }, {
    key: "createOutfit",
    value: function createOutfit(task) {
      var _task$before;
      (_task$before = task.before) === null || _task$before === void 0 || _task$before.call(task);
      return _superPropGet(SebEngine, "createOutfit", this, 3)([task]);
    }
  }, {
    key: "do",
    value: function _do(task) {
      // Resolve the target once, so a task's do() is never called twice.
      var target = typeof task.do === "function" ? task.do() : task.do;
      this.adventured = target instanceof kolmafia.Location;
      if (target instanceof kolmafia.Location) {
        refreshMPRecovery();
        _superPropGet(SebEngine, "do", this, 3)([_objectSpread2(_objectSpread2({}, task), {}, {
          do: target
        })]);
      } else {
        _superPropGet(SebEngine, "do", this, 3)([_objectSpread2(_objectSpread2({}, task), {}, {
          do: () => target
        })]);
      }
    }
  }, {
    key: "post",
    value: function post(task) {
      if (task.postAdventure ?? this.adventured) postAdventure();
      _superPropGet(SebEngine, "post", this, 3)([task]);
    }
  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager(manager) {
      _superPropGet(SebEngine, "initPropertiesManager", this, 3)([manager]);
      manager.set({
        choiceAdventureScript: CHOICE_SCRIPT,
        mpAutoRecoveryItems: "".concat(get$1("mpAutoRecoveryItems"), ";magical mystery juice;doc galaktik's invigorating tonic"),
        // The run retunes recovery as it goes (setMPRecovery(), the bosses).
        // Registering the current values here puts them back at the end.
        hpAutoRecovery: get$1("hpAutoRecovery"),
        hpAutoRecoveryTarget: get$1("hpAutoRecoveryTarget"),
        mpAutoRecovery: get$1("mpAutoRecovery"),
        mpAutoRecoveryTarget: get$1("mpAutoRecoveryTarget")
      });
      // The saber's daily upgrade: the familiar weight chip.
      manager.setChoice(1386, 4);
      // The Force's follow-up choice must be answerable from the property
      // alone, for fights that start outside the choice script's reach.
      manager.setChoice(1387, 3);
    }
  }]);
}(Engine);

var _templateObject$a, _templateObject2$a, _templateObject3$a, _templateObject4$a, _templateObject5$a, _templateObject6$a, _templateObject7$a, _templateObject8$a, _templateObject9$a, _templateObject0$a, _templateObject1$a, _templateObject10$a, _templateObject11$a, _templateObject12$a, _templateObject13$9, _templateObject14$9, _templateObject15$9, _templateObject16$9, _templateObject17$9, _templateObject18$9, _templateObject19$9, _templateObject20$8, _templateObject21$8, _templateObject22$8, _templateObject23$8, _templateObject24$8, _templateObject25$8, _templateObject26$8, _templateObject27$8, _templateObject28$8, _templateObject29$8, _templateObject30$8, _templateObject31$8, _templateObject32$8, _templateObject33$8, _templateObject34$7, _templateObject35$7, _templateObject36$7, _templateObject37$7, _templateObject38$7, _templateObject39$7, _templateObject40$7, _templateObject41$7, _templateObject42$6, _templateObject43$6, _templateObject44$6, _templateObject45$6, _templateObject46$6, _templateObject47$6, _templateObject48$6, _templateObject49$6, _templateObject50$5, _templateObject51$5, _templateObject52$5, _templateObject53$5, _templateObject54$4, _templateObject55$3;

// Run-start checklists, also printed by "sebastian sim". Ported from
// iotmChecklist(), skillChecklist() and pullChecklist() in UnderTheSeaGlobals.ash.
// Purely informational: every use in the run is ownership-guarded anyway.

function tick(have, label) {
  kolmafia.print("".concat(have ? "✓" : "✗", " ").concat(label), have ? "blue" : "red");
  return have;
}
function iotmChecklist() {
  var items = $items(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["Monodent of the Sea, The Eternity Codpiece, closed-circuit pay phone, 2002 Mr. Store Catalog, cursed monkey's paw, august scepter, Fourth of May Cosplay Saber, Peridot of Peril, blood cubic zirconia, Baseball Diamond, Heartstone, backup camera, Jurassic Parka, spring shoes, Everfull Dart Holster, Mayam Calendar, Leprecondo, Cincho de Mayo, McHugeLarge duffel bag, Apriling band helmet, April Shower Thoughts shield, bat wings, server room key, Time-Spinner, January's Garbage Tote, Powerful Glove, combat lover's locket, Lil' Doctor\u2122 bag, mumming trunk, Kremlin's Greatest Briefcase, Cargo Cultist Shorts, Eight Days a Week Pill Keeper, Sept-Ember Censer, vampyric cloake, unwrapped knock-off retro superhero cape, Roman Candelabra, miniature crystal ball, latte lovers member's mug, V for Vivala mask, designer sweatpants, tearaway pants, autumn-aton, cosmic bowling ball, Clan VIP Lounge key"])));
  // The passive, not its combat skills: mafia only learns those from a fight page.
  var skills = $skills(_templateObject2$a || (_templateObject2$a = _taggedTemplateLiteral(["Just the Facts, Map the Monsters, Meteor Lore, Feel Nostalgic"])));
  // eslint-disable-next-line libram/verify-constants -- Sword of S Words is newer than its data
  var familiars = $familiars(_templateObject3$a || (_templateObject3$a = _taggedTemplateLiteral(["Grouper Groupie, Red-Nosed Snapper, Jill-of-All-Trades, Chest Mimic, Patriotic Eagle, Sword of S Words, Peace Turkey, Disgeist, Jumpsuited Hound Dog, Glover, Foul Ball, Space Jellyfish, Pocket Professor, Tiny Plastic Santa Claus Skeleton"])));
  kolmafia.print("IOTM check — supported IOTMs:");
  var results = [].concat(_toConsumableArray(items.map(item => tick(haveItem(item), "".concat(item)))), _toConsumableArray(skills.map(skill => tick(kolmafia.haveSkill(skill), "".concat(skill)))), _toConsumableArray(familiars.map(familiar => tick(kolmafia.haveFamiliar(familiar), "".concat(familiar)))), [tick(kolmafia.getWorkshed() !== $item.none || $items(_templateObject4$a || (_templateObject4$a = _taggedTemplateLiteral(["Asdon Martin keyfob (on ring), model train set, portable Mayo Clinic, TakerSpace letter of Marque"]))).some(item => haveItem(item)), "a workshed"), tick(!!kolmafia.getCampground()[$item(_templateObject5$a || (_templateObject5$a = _taggedTemplateLiteral(["Source terminal"]))).name], "Source Terminal")]);
  var owned = results.filter(r => r).length;
  kolmafia.print("IOTM check: ".concat(owned, " of ").concat(results.length, " supported IOTMs owned."));
}

/** 2 required, 1 big turn saver, 0 optional. */

var DROP_BUFF = "Cast while the run is hunting a specific item drop.";
var NONCOMBAT = "Fewer combats, so the noncombats the run wants arrive sooner.";
var COMBAT = "More combats, for the zones the run needs to fight through.";
var RES = "Elemental resistance for the underwater boss fights.";
var COLOSSEUM = "Buff for the Mer-kin Colosseum fights.";
var FREE_KILL = "Kills a monster for free, saving a turn.";
var THRALL = "Pastamancer thrall for a little extra damage. Any one of the three is enough.";
var ROUTE_SKILLS = [[$skill(_templateObject6$a || (_templateObject6$a = _taggedTemplateLiteral(["Saucegeyser"]))), 2, "Kills most of what you fight. Without this or Saucestorm the run stops."], [$skill(_templateObject7$a || (_templateObject7$a = _taggedTemplateLiteral(["Cannelloni Cocoon"]))), 2, "In-run healing."], [$skill(_templateObject8$a || (_templateObject8$a = _taggedTemplateLiteral(["Empathy of the Newt"]))), 2, "Cast before fighting Shub-Jigguwatt."], [$skill(_templateObject9$a || (_templateObject9$a = _taggedTemplateLiteral(["Deep Dark Visions"]))), 2, "The only way to learn the third dreadscroll answer."], [$skill(_templateObject0$a || (_templateObject0$a = _taggedTemplateLiteral(["Steely-Eyed Squint"]))), 1, "A big once-a-day item drop boost, used to force the drops the run needs."], [$skill(_templateObject1$a || (_templateObject1$a = _taggedTemplateLiteral(["Unaccompanied Miner"]))), 1, "Five free trips into the mine each day, so you need not pull a lodestone for the teflon ore."], [$skill(_templateObject10$a || (_templateObject10$a = _taggedTemplateLiteral(["Transcendent Olfaction"]))), 1, "Makes the Neptune flytrap, giant squid and Mer-kin tippler turn up far more often."], [$skill(_templateObject11$a || (_templateObject11$a = _taggedTemplateLiteral(["Holiday Multitasking"]))), 1, "Three crafts a day that cost no adventure."], [$skill(_templateObject12$a || (_templateObject12$a = _taggedTemplateLiteral(["Tongue of the Walrus"]))), 1, "Clears Beaten Up without spending turns resting."], [$skill(_templateObject13$9 || (_templateObject13$9 = _taggedTemplateLiteral(["OVERCLOCK(10)"]))), 1, "Your first ten CyberRealm fights each day are free; used for the Mom quest and to recharge the eagle screech."], [$skill(_templateObject14$9 || (_templateObject14$9 = _taggedTemplateLiteral(["Garbage Nova"]))), 1, "Extra damage against the school of many. Without it that fight just takes longer."], [$skill(_templateObject15$9 || (_templateObject15$9 = _taggedTemplateLiteral(["Saucestorm"]))), 0, "Backup finisher if you have no Saucegeyser. You need one of the two."], [$skill(_templateObject16$9 || (_templateObject16$9 = _taggedTemplateLiteral(["Snokebomb"]))), 0, "Banishes a monster you would rather not fight."], [$skill(_templateObject17$9 || (_templateObject17$9 = _taggedTemplateLiteral(["Shattering Punch"]))), 0, FREE_KILL], [$skill(_templateObject18$9 || (_templateObject18$9 = _taggedTemplateLiteral(["Gingerbread Mob Hit"]))), 0, FREE_KILL], [$skill(_templateObject19$9 || (_templateObject19$9 = _taggedTemplateLiteral(["Perpetrate Mild Evil"]))), 0, "Extra damage against the shadow slab."], [$skill(_templateObject20$8 || (_templateObject20$8 = _taggedTemplateLiteral(["Raise Backup Dancer"]))), 0, "Extra damage in the Naughty Sorceress fight."], [$skill(_templateObject21$8 || (_templateObject21$8 = _taggedTemplateLiteral(["Summon Kokomo Resort Pass"]))), 0, "A free daily summon, picked up during daily setup."], [$skill(_templateObject22$8 || (_templateObject22$8 = _taggedTemplateLiteral(["The Ode to Booze"]))), 0, "More adventures from every drink."], [$skill(_templateObject23$8 || (_templateObject23$8 = _taggedTemplateLiteral(["Ambidextrous Funkslinging"]))), 0, "Throws two potions at once, halving the fights spent identifying the murky potions."], [$skill(_templateObject24$8 || (_templateObject24$8 = _taggedTemplateLiteral(["Double-Fisted Skull Smashing"]))), 0, "Lets you wield a weapon in each hand, for better equipment."], [$skill(_templateObject25$8 || (_templateObject25$8 = _taggedTemplateLiteral(["Gallapagosian Mating Call"]))), 0, "Another way to make a monster reappear, and the only one that works on the black crayon golem."], [$skill(_templateObject26$8 || (_templateObject26$8 = _taggedTemplateLiteral(["Stuffed Mortar Shell"]))), 0, "Extra damage while finishing fights without Saucegeyser."], [$skill(_templateObject27$8 || (_templateObject27$8 = _taggedTemplateLiteral(["Bind Spice Ghost"]))), 0, THRALL], [$skill(_templateObject28$8 || (_templateObject28$8 = _taggedTemplateLiteral(["Bind Vermincelli"]))), 0, THRALL], [$skill(_templateObject29$8 || (_templateObject29$8 = _taggedTemplateLiteral(["Bind Angel Hair Wisp"]))), 0, THRALL], [$skill(_templateObject30$8 || (_templateObject30$8 = _taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))), 0, DROP_BUFF], [$skill(_templateObject31$8 || (_templateObject31$8 = _taggedTemplateLiteral(["The Ballad of Richie Thingfinder"]))), 0, DROP_BUFF], [$skill(_templateObject32$8 || (_templateObject32$8 = _taggedTemplateLiteral(["Singer's Faithful Ocelot"]))), 0, DROP_BUFF], [$skill(_templateObject33$8 || (_templateObject33$8 = _taggedTemplateLiteral(["Leash of Linguini"]))), 0, DROP_BUFF], [$skill(_templateObject34$7 || (_templateObject34$7 = _taggedTemplateLiteral(["Who's Going to Pay This Drunken Sailor?"]))), 0, DROP_BUFF], [$skill(_templateObject35$7 || (_templateObject35$7 = _taggedTemplateLiteral(["Sauce Contemplation"]))), 0, DROP_BUFF], [$skill(_templateObject36$7 || (_templateObject36$7 = _taggedTemplateLiteral(["Donho's Bubbly Ballad"]))), 0, DROP_BUFF], [$skill(_templateObject37$7 || (_templateObject37$7 = _taggedTemplateLiteral(["The Sonata of Sneakiness"]))), 0, NONCOMBAT], [$skill(_templateObject38$7 || (_templateObject38$7 = _taggedTemplateLiteral(["Hide From Seekers"]))), 0, NONCOMBAT], [$skill(_templateObject39$7 || (_templateObject39$7 = _taggedTemplateLiteral(["Smooth Movement"]))), 0, NONCOMBAT], [$skill(_templateObject40$7 || (_templateObject40$7 = _taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"]))), 0, COMBAT], [$skill(_templateObject41$7 || (_templateObject41$7 = _taggedTemplateLiteral(["Musk of the Moose"]))), 0, COMBAT], [$skill(_templateObject42$6 || (_templateObject42$6 = _taggedTemplateLiteral(["Attract Snakes"]))), 0, COMBAT], [$skill(_templateObject43$6 || (_templateObject43$6 = _taggedTemplateLiteral(["Astral Shell"]))), 0, RES], [$skill(_templateObject44$6 || (_templateObject44$6 = _taggedTemplateLiteral(["Elemental Saucesphere"]))), 0, RES], [$skill(_templateObject45$6 || (_templateObject45$6 = _taggedTemplateLiteral(["Scarysauce"]))), 0, RES], [$skill(_templateObject46$6 || (_templateObject46$6 = _taggedTemplateLiteral(["Carol of the Hells"]))), 0, COLOSSEUM], [$skill(_templateObject47$6 || (_templateObject47$6 = _taggedTemplateLiteral(["Elron's Explosive Etude"]))), 0, COLOSSEUM], [$skill(_templateObject48$6 || (_templateObject48$6 = _taggedTemplateLiteral(["Get Big"]))), 0, COLOSSEUM], [$skill(_templateObject49$6 || (_templateObject49$6 = _taggedTemplateLiteral(["The Magical Mojomuscular Melody"]))), 0, COLOSSEUM], [$skill(_templateObject50$5 || (_templateObject50$5 = _taggedTemplateLiteral(["Manicotti Meditation"]))), 0, COLOSSEUM], [$skill(_templateObject51$5 || (_templateObject51$5 = _taggedTemplateLiteral(["Moxie of the Mariachi"]))), 0, COLOSSEUM]];

/**
 * A skill held only through the current class is gone next ascension, so an
 * owned but unpermed skill is flagged. The permed list is empty until a
 * charsheet parse fills it, and then nothing is flagged.
 */
function printSkillTier(tier, label) {
  var permed = kolmafia.getPermedSkills();
  var anyPermed = Object.keys(permed).length > 0;
  kolmafia.print("Skill check \u2014 ".concat(label, ":"));
  var _iterator = _createForOfIteratorHelper(ROUTE_SKILLS),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 3),
        skill = _step$value[0],
        skillTier = _step$value[1],
        why = _step$value[2];
      if (skillTier !== tier) continue;
      if (!kolmafia.haveSkill(skill)) kolmafia.print("\u2717 ".concat(skill, " \u2014 ").concat(why), "red");else if (anyPermed && !permed[skill.name]) kolmafia.print("\u2713 ".concat(skill, " (not permed) \u2014 ").concat(why), "blue");else kolmafia.print("\u2713 ".concat(skill, " \u2014 ").concat(why), "blue");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function skillChecklist() {
  var owned = ROUTE_SKILLS.filter(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
      skill = _ref2[0];
    return kolmafia.haveSkill(skill);
  }).length;
  var missingRequired = ROUTE_SKILLS.filter(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
      skill = _ref4[0],
      tier = _ref4[1];
    return tier === 2 && !kolmafia.haveSkill(skill);
  }).length;
  printSkillTier(2, "required");
  printSkillTier(1, "big turn savers");
  printSkillTier(0, "optional");
  var missing = missingRequired > 0 ? ", ".concat(missingRequired, " REQUIRED missing") : "";
  kolmafia.print("Skill check: ".concat(owned, " of ").concat(ROUTE_SKILLS.length, " permable skills owned").concat(missing, "."));
}
function pullChecklist() {
  var pulls = $items(_templateObject52$5 || (_templateObject52$5 = _taggedTemplateLiteral(["Mer-kin sneakmask, sea lasso, shark jumper, scale-mail underwear, Congressional Medal of Insanity, Flash Liquidizer Ultra Dousing Accessory, Mer-kin digpick, lodestone, comb jelly, Elf Guard SCUBA tank, rusty rivet, sea cowbell, Mer-kin prayerbeads, Mer-kin healscroll, Mer-kin killscroll, Mer-kin worktea, Mer-kin knucklebone, Mer-kin cheatsheet, Mer-kin hallpass, Mer-kin hidepaint, pro skateboard, software glitch, pulled yellow taffy, stuffed yam stinkbomb, waffle, skate blade, null-day exploit, New Age healing crystal, soggy used band-aid, damp old wallet, fish sauce, Aldebaran sardines, pie man was not meant to eat, handheld Allied radio, Clara's bell, stench jelly, peppermint parasol, ink bladder, Mer-kin pinkslip, Louder Than Bomb, anchor bomb"])));
  var inventory = kolmafia.getInventory();
  var catalogMakes = $items(_templateObject53$5 || (_templateObject53$5 = _taggedTemplateLiteral(["pro skateboard, software glitch"])));
  kolmafia.print("Pull check — Hagnk's stock:");
  var _iterator2 = _createForOfIteratorHelper(pulls),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      // Catalog credits make these in-run; only worth stocking without it.
      if (haveItem($item(_templateObject54$4 || (_templateObject54$4 = _taggedTemplateLiteral(["2002 Mr. Store Catalog"])))) && catalogMakes.includes(item)) continue;
      var stocked = kolmafia.storageAmount(item) > 0 || (inventory[item.name] ?? 0) > 0;
      if (item === $item(_templateObject55$3 || (_templateObject55$3 = _taggedTemplateLiteral(["Congressional Medal of Insanity"]))) && !stocked) {
        kolmafia.print("\u2717 ".concat(item, " \u2014 Currently not optional, just too expensive to have the script buy on its own"), "red");
      } else if (stocked) {
        kolmafia.print("\u2713 ".concat(item), "blue");
      } else if (kolmafia.isTradeable(item)) {
        kolmafia.print("\u2717 ".concat(item, " \u2014 will be mall-bought if the route needs it"), "red");
      } else {
        kolmafia.print("\u2717 ".concat(item, " \u2014 NOT mall-buyable, acquire before it's needed"), "red");
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

var _templateObject$9, _templateObject2$9, _templateObject3$9, _templateObject4$9, _templateObject5$9, _templateObject6$9, _templateObject7$9, _templateObject8$9, _templateObject9$9, _templateObject0$9, _templateObject1$9, _templateObject10$9, _templateObject11$9, _templateObject12$9, _templateObject13$8, _templateObject14$8, _templateObject15$8, _templateObject16$8, _templateObject17$8, _templateObject18$8, _templateObject19$8, _templateObject20$7, _templateObject21$7, _templateObject22$7, _templateObject23$7, _templateObject24$7, _templateObject25$7, _templateObject26$7, _templateObject27$7, _templateObject28$7, _templateObject29$7, _templateObject30$7, _templateObject31$7, _templateObject32$7, _templateObject33$7, _templateObject34$6, _templateObject35$6, _templateObject36$6, _templateObject37$6, _templateObject38$6, _templateObject39$6, _templateObject40$6, _templateObject41$6, _templateObject42$5, _templateObject43$5, _templateObject44$5, _templateObject45$5, _templateObject46$5, _templateObject47$5, _templateObject48$5, _templateObject49$5, _templateObject50$4, _templateObject51$4, _templateObject52$4, _templateObject53$4;

// Once-a-run setup before the first quest step. Ported from initialization()
// in UnderTheSea.ash.

/** The photo booth lives in this clan; the run leaves it again at the end. */
var PHOTO_BOOTH_CLAN = 90485;
function switchFamiliar(familiar) {
  if (familiar) kolmafia.useFamiliar(familiar);
}
function checkChosenFamiliar() {
  if (chosenFamiliar === $familiar.none) return;
  kolmafia.useFamiliar($familiar.none);
  var without = kolmafia.numericModifier("Item Drop");
  kolmafia.useFamiliar(chosenFamiliar);
  if (kolmafia.numericModifier("Item Drop") <= without && !kolmafia.userConfirm("Chosen familiar is not +item, would make some RNG worse. Continue?")) {
    throw new Error("Chosen familiar is not +item.");
  }
}
function borrowSheriffProps() {
  // The borrow counter can fall behind what is in inventory, so possession decides.
  if (!sheriffOutfit() && haveItem($item(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["Clan VIP Lounge key"]))))) {
    Clan.join(PHOTO_BOOTH_CLAN);
    var _iterator = _createForOfIteratorHelper($items(_templateObject2$9 || (_templateObject2$9 = _taggedTemplateLiteral(["Sheriff pistol, Sheriff moustache, Sheriff badge"])))),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        if (!have$g(item) && !kolmafia.cliExecute("photobooth item ".concat(item))) {
          kolmafia.print("Couldn't borrow the ".concat(item, " from the photo booth."), "red");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (!sheriffOutfit()) {
    kolmafia.print("No Sheriff outfit -- either its props are not unlocked, or today's three prop borrows are spent. Skipping the Assert your Authority free kills; the run costs up to three more turns.", "blue");
  }
}
function dailies() {
  if (questStep("questM05Toot") === 0) {
    kolmafia.council();
    kolmafia.visitUrl("tutorial.php?action=toot");
    kolmafia.council();
  }
  var _iterator2 = _createForOfIteratorHelper($items(_templateObject38$6 || (_templateObject38$6 = _taggedTemplateLiteral(["letter from King Ralph XI, pork elf goodies sack, sushi-rolling mat, 2002 Mr. Store Catalog"])))),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _item = _step2.value;
      if (_item === $item(_templateObject39$6 || (_templateObject39$6 = _taggedTemplateLiteral(["2002 Mr. Store Catalog"]))) && get$1("_2002MrStoreCreditsCollected")) continue;
      if (kolmafia.itemAmount(_item) > 0) kolmafia.use(kolmafia.itemAmount(_item), _item);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  if (haveItem($item(_templateObject3$9 || (_templateObject3$9 = _taggedTemplateLiteral(["wardrobe-o-matic"]))))) kolmafia.use($item(_templateObject4$9 || (_templateObject4$9 = _taggedTemplateLiteral(["wardrobe-o-matic"]))));
  if (have$c() && song() !== "Total Eclipse of Your Meat") {
    setSong("Total Eclipse of Your Meat");
  }
  var _iterator3 = _createForOfIteratorHelper($skills(_templateObject40$6 || (_templateObject40$6 = _taggedTemplateLiteral(["Aug. 24th: Waffle Day!, Summon Kokomo Resort Pass"])))),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var skill = _step3.value;
      if (skill === $skill(_templateObject41$6 || (_templateObject41$6 = _taggedTemplateLiteral(["Aug. 24th: Waffle Day!"]))) && highShiny()) continue;
      if (kolmafia.haveSkill(skill)) kolmafia.useSkill(skill);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  if (kolmafia.myClass() === $class(_templateObject5$9 || (_templateObject5$9 = _taggedTemplateLiteral(["Pastamancer"])))) {
    // Never the Lasagmbie: its damage spoils the boss fights.
    var thrall = $skills(_templateObject6$9 || (_templateObject6$9 = _taggedTemplateLiteral(["Bind Spice Ghost, Bind Vermincelli, Bind Angel Hair Wisp"]))).find(s => kolmafia.haveSkill(s));
    if (thrall) kolmafia.useSkill(thrall);
  }
  sourceEnhance();
  // duplicate.edu now, so it is in hand for the first fat table the route kills.
  sourceEducate();
  cargoPocket();
  garbageTote();
  censer();

  // One free saber upgrade a day: the familiar weight chip.
  if (haveItem($item(_templateObject7$9 || (_templateObject7$9 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))) && get$1("_saberMod") === 0) {
    step("initialization: saber daily upgrade (choice 1386)");
    kolmafia.visitUrl("main.php?action=may4");
    // mafia may already have answered it; only answer a choice still open.
    if (kolmafia.handlingChoice() && kolmafia.lastChoice() === 1386) {
      kolmafia.runChoice(4 in kolmafia.availableChoiceOptions() ? 4 : 5);
    }
  }
  var _iterator4 = _createForOfIteratorHelper($items(_templateObject42$5 || (_templateObject42$5 = _taggedTemplateLiteral(["hamethyst, baconstone, porquoise, Kokomo Resort Pass"])))),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _item2 = _step4.value;
      if (_item2 === $item(_templateObject43$5 || (_templateObject43$5 = _taggedTemplateLiteral(["porquoise"]))) && haveItem($item(_templateObject44$5 || (_templateObject44$5 = _taggedTemplateLiteral(["portable pantogram"]))))) continue;
      kolmafia.autosell(kolmafia.itemAmount(_item2), _item2);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  var emilio = $familiar(_templateObject8$9 || (_templateObject8$9 = _taggedTemplateLiteral(["Tickle-Me Emilio"])));
  if (kolmafia.itemAmount($item(_templateObject9$9 || (_templateObject9$9 = _taggedTemplateLiteral(["tiny stillsuit"])))) > 0 && kolmafia.haveFamiliar(emilio) && kolmafia.familiarEquippedEquipment(emilio) !== $item(_templateObject0$9 || (_templateObject0$9 = _taggedTemplateLiteral(["tiny stillsuit"])))) {
    kolmafia.useFamiliar(emilio);
    kolmafia.equip($item(_templateObject1$9 || (_templateObject1$9 = _taggedTemplateLiteral(["tiny stillsuit"]))));
  }
  step("initialization: Mayam rings");
  if (have$4() && symbolsUsed().length === 0) {
    if (kolmafia.haveFamiliar($familiar(_templateObject10$9 || (_templateObject10$9 = _taggedTemplateLiteral(["Chest Mimic"]))))) kolmafia.useFamiliar($familiar(_templateObject11$9 || (_templateObject11$9 = _taggedTemplateLiteral(["Chest Mimic"]))));else switchFamiliar(pickFamiliar("itdrop"));
    submit("vessel yam2 cheese explosion");
    submit("fur lightning eyepatch yam4");
    submit("eye meat yam3 clock");
  }
  if (have$1() && installedFurniture().every(piece => piece === "empty")) {
    leprecondo(highShiny() ? "10,11,12,24,4,5,6" : "22,24,12,11,10,4,5,6");
  }
  kolmafia.visitUrl("campground.php?preaction=leaves");
  if (kolmafia.itemAmount($item(_templateObject12$9 || (_templateObject12$9 = _taggedTemplateLiteral(["S.I.T. Course Completion Certificate"])))) > 0 && !get$1("_sitCourseCompleted")) {
    kolmafia.use($item(_templateObject13$8 || (_templateObject13$8 = _taggedTemplateLiteral(["S.I.T. Course Completion Certificate"]))));
  }
  if (get$1("_aprilBandInstruments") === 0 && have$5()) {
    joinSection($item(_templateObject14$8 || (_templateObject14$8 = _taggedTemplateLiteral(["Apriling band tuba"]))));
    if (highShiny()) {
      joinSection($item(_templateObject15$8 || (_templateObject15$8 = _taggedTemplateLiteral(["Apriling band quad tom"]))));
    } else if (kolmafia.haveFamiliar($familiar(_templateObject16$8 || (_templateObject16$8 = _taggedTemplateLiteral(["Chest Mimic"]))))) {
      kolmafia.useFamiliar($familiar(_templateObject17$8 || (_templateObject17$8 = _taggedTemplateLiteral(["Chest Mimic"]))));
      joinSection($item(_templateObject18$8 || (_templateObject18$8 = _taggedTemplateLiteral(["Apriling band piccolo"]))));
      for (var i = 0; i < 3; i++) play($item(_templateObject19$8 || (_templateObject19$8 = _taggedTemplateLiteral(["Apriling band piccolo"]))));
    }
  }
  if (haveItem($item(_templateObject20$7 || (_templateObject20$7 = _taggedTemplateLiteral(["McHugeLarge duffel bag"]))))) kolmafia.visitUrl("inventory.php?action=skiduffel");
  if (!get$1("_aprilShowerGlobsCollected") && haveItem($item(_templateObject21$7 || (_templateObject21$7 = _taggedTemplateLiteral(["April Shower Thoughts shield"]))))) {
    kolmafia.visitUrl("inventory.php?action=shower");
  }
  if (get$1("availableMrStore2002Credits") === 3) {
    if (highShiny()) kolmafia.create(3, $item(_templateObject22$7 || (_templateObject22$7 = _taggedTemplateLiteral(["Spooky VHS Tape"]))));else {
      var _iterator5 = _createForOfIteratorHelper($items(_templateObject23$7 || (_templateObject23$7 = _taggedTemplateLiteral(["pro skateboard, Spooky VHS Tape, Spooky VHS Tape"])))),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var item = _step5.value;
          kolmafia.create(1, item);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }
  step("initialization: workshed");
  if (!get$1("_workshedItemUsed") && kolmafia.getWorkshed() === $item.none) {
    if (highShiny() && haveItem($item(_templateObject24$7 || (_templateObject24$7 = _taggedTemplateLiteral(["portable Mayo Clinic"]))))) {
      kolmafia.use($item(_templateObject25$7 || (_templateObject25$7 = _taggedTemplateLiteral(["portable Mayo Clinic"]))));
      kolmafia.retrieveItem($item(_templateObject26$7 || (_templateObject26$7 = _taggedTemplateLiteral(["Mayo Minder\u2122"]))));
    }
    if (have$f()) {
      kolmafia.use($item(_templateObject27$7 || (_templateObject27$7 = _taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"]))));
    } else if (kolmafia.itemAmount($item(_templateObject28$7 || (_templateObject28$7 = _taggedTemplateLiteral(["portable Mayo Clinic"])))) > 0) {
      kolmafia.use($item(_templateObject29$7 || (_templateObject29$7 = _taggedTemplateLiteral(["portable Mayo Clinic"]))));
    } else if (kolmafia.itemAmount($item(_templateObject30$7 || (_templateObject30$7 = _taggedTemplateLiteral(["model train set"])))) === 1) {
      kolmafia.use($item(_templateObject31$7 || (_templateObject31$7 = _taggedTemplateLiteral(["model train set"]))));
    } else if (have$2()) {
      kolmafia.use($item(_templateObject32$7 || (_templateObject32$7 = _taggedTemplateLiteral(["TakerSpace letter of Marque"]))));
      collect();
      make($item(_templateObject33$7 || (_templateObject33$7 = _taggedTemplateLiteral(["anchor bomb"]))));
    }
  }
  step("initialization: storage pulls");
  var _iterator6 = _createForOfIteratorHelper($items(_templateObject45$5 || (_templateObject45$5 = _taggedTemplateLiteral(["Mer-kin sneakmask, sea lasso, shark jumper, ten-leaf clover, large box, scale-mail underwear, Congressional Medal of Insanity, Flash Liquidizer Ultra Dousing Accessory"])))),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _item3 = _step6.value;
      if (have$g(_item3) || pulledToday(_item3)) continue;
      if (_item3 === $item(_templateObject46$5 || (_templateObject46$5 = _taggedTemplateLiteral(["Flash Liquidizer Ultra Dousing Accessory"]))) && (!haveItem($item(_templateObject47$5 || (_templateObject47$5 = _taggedTemplateLiteral(["closed-circuit pay phone"])))) || highShiny())) {
        continue;
      }
      if (_item3 === $item(_templateObject48$5 || (_templateObject48$5 = _taggedTemplateLiteral(["sea lasso"]))) && (lowShiny() || kolmafia.haveFamiliar(swordOfSWords) && countSummons() >= 3)) {
        continue;
      }
      if (kolmafia.storageAmount(_item3) === 0) {
        if (_item3 === $item(_templateObject49$5 || (_templateObject49$5 = _taggedTemplateLiteral(["Congressional Medal of Insanity"])))) {
          throw new Error("Get yer own CMOI, ya filthy animal!");
        }
        kolmafia.buyUsingStorage(_item3);
      }
      kolmafia.takeStorage(1, _item3);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  if (have$g($item(_templateObject34$6 || (_templateObject34$6 = _taggedTemplateLiteral(["large box"]))))) kolmafia.create($item(_templateObject35$6 || (_templateObject35$6 = _taggedTemplateLiteral(["blessed large box"]))));
  if (have$g($item(_templateObject36$6 || (_templateObject36$6 = _taggedTemplateLiteral(["blessed large box"]))))) kolmafia.use($item(_templateObject37$6 || (_templateObject37$6 = _taggedTemplateLiteral(["blessed large box"]))));
}
function initialization() {
  if (kolmafia.getRevision() < 29057) throw new Error("Please update mafia to newer than 29057");
  // A pearl farm or screech re-aim that aborted mid-loop leaves these set,
  // and the CCS reads them.
  _set("_sebPearlFarm", false);
  _set("_sebScreechReaim", false);
  checkChosenFamiliar();
  if (!get$1("autoSatisfyWithNPCs")) {
    throw new Error("set autoSatisfyWithNPCs = true, the script isn't going to work if it's false");
  }
  iotmChecklist();
  skillChecklist();
  if (inSeaPath()) pullChecklist();
  if (questStep("questS01OldGuy") === -1) {
    kolmafia.visitUrl("place.php?whichplace=sea_oldman&action=oldman_oldman");
  }
  if (!have$g($item(_templateObject50$4 || (_templateObject50$4 = _taggedTemplateLiteral(["black glass"])))) && kolmafia.itemAmount($item(_templateObject51$4 || (_templateObject51$4 = _taggedTemplateLiteral(["sand dollar"])))) > 13) blackGlass();
  borrowSheriffProps();
  if (inSeaPath()) dailies();

  // Refuel the Asdon Martin with soda bread, only after the prism breaks.
  if (inAftercore() && installed$2() && !highShiny() && !get$1("_missileLauncherUsed") && !get$1("_sebMissileFailed", false) && kolmafia.getFuel() < 100 && kolmafia.retrieveItem(17, $item(_templateObject52$4 || (_templateObject52$4 = _taggedTemplateLiteral(["loaf of soda bread"]))))) {
    insertFuel($item(_templateObject53$4 || (_templateObject53$4 = _taggedTemplateLiteral(["loaf of soda bread"]))), 17);
  }
}

var _templateObject$8, _templateObject2$8, _templateObject3$8, _templateObject4$8, _templateObject5$8, _templateObject6$8, _templateObject7$8, _templateObject8$8, _templateObject9$8, _templateObject0$8, _templateObject1$8, _templateObject10$8, _templateObject11$8, _templateObject12$8, _templateObject13$7, _templateObject14$7, _templateObject15$7, _templateObject16$7, _templateObject17$7, _templateObject18$7, _templateObject19$7, _templateObject20$6, _templateObject21$6, _templateObject22$6, _templateObject23$6, _templateObject24$6, _templateObject25$6, _templateObject26$6, _templateObject27$6, _templateObject28$6, _templateObject29$6, _templateObject30$6, _templateObject31$6, _templateObject32$6, _templateObject33$6;

// Buffs before an adventure. Ported from mood(string) in UnderTheSea.ash.

/** The item an effect's default action consumes, if it is an item. */
function effectToItem(effect) {
  var action = effect.default;
  for (var _i = 0, _arr = ["drink 1 ", "chew 1 ", "eat 1 ", "use 1 "]; _i < _arr.length; _i++) {
    var verb = _arr[_i];
    if (action.startsWith(verb)) return kolmafia.toItem(action.slice(verb.length));
  }
  return $item.none;
}
function needsMissingSkill(effect) {
  var skill = kolmafia.toSkill(effect);
  return skill !== $skill.none && !kolmafia.haveSkill(skill);
}
function photoBoothSpent() {
  return get$1("_photoBoothEffects") >= 3 || !haveItem($item(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["Clan VIP Lounge key"]))));
}
function aprilBandWaiting() {
  return !canChangeSong();
}
function getEffect(effect) {
  if (MARCHING_SONG_EFFECTS.includes(effect)) {
    changeSong(effect);
  } else {
    kolmafia.cliExecute(effect.default);
  }
}

/** The pearl-zone resistance mood for a "hot res" style modifier name. */
function resMood(res) {
  return res.replace(" ", "");
}
function mood(mode) {
  switch (mode) {
    case "superitdrop":
    case "itdrop":
      {
        var wanted = [].concat(_toConsumableArray(mode === "superitdrop" ? $effects(_templateObject2$8 || (_templateObject2$8 = _taggedTemplateLiteral(["Hustlin', Steely-Eyed Squint, Party Soundtrack, Best Pals"]))) : []), _toConsumableArray($effects(_templateObject3$8 || (_templateObject3$8 = _taggedTemplateLiteral(["Who's Going to Pay This Drunken Sailor?, Fat Leon's Phat Loot Lyric, Lubricating Sauce, Thoughtful Empathy, Singer's Faithful Ocelot, Leash of Linguini, Empathy, Donho's Bubbly Ballad, The Ballad of Richie Thingfinder"])))));
        var _iterator = _createForOfIteratorHelper(wanted),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var effect = _step.value;
            if (needsMissingSkill(effect)) continue;
            if (effect === $effect(_templateObject4$8 || (_templateObject4$8 = _taggedTemplateLiteral(["Party Soundtrack"]))) && !haveItem($item(_templateObject5$8 || (_templateObject5$8 = _taggedTemplateLiteral(["Cincho de Mayo"]))))) continue;
            if ((effect === $effect(_templateObject6$8 || (_templateObject6$8 = _taggedTemplateLiteral(["Thoughtful Empathy"]))) || effect === $effect(_templateObject7$8 || (_templateObject7$8 = _taggedTemplateLiteral(["Lubricating Sauce"])))) && !haveItem($item(_templateObject8$8 || (_templateObject8$8 = _taggedTemplateLiteral(["April Shower Thoughts shield"]))))) {
              continue;
            }
            if (kolmafia.haveEffect(effect) === 0) getEffect(effect);
          }
          // Both are guarded inside, so this only tops the buffs back up.
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        sourceEnhance();
        briefcase();
        kolmafia.print("Item drop is ".concat(kolmafia.numericModifier("Item Drop")));
        return;
      }
    case "-combat":
      {
        var _iterator2 = _createForOfIteratorHelper($effects(_templateObject9$8 || (_templateObject9$8 = _taggedTemplateLiteral(["The Sonata of Sneakiness, Ultra-Soft Steps, Wild and Westy!, Hiding From Seekers, Life Goals, Smooth Movements, Apriling Band Patrol Beat, Silent Running, Feeling Lonely"])))),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _effect = _step2.value;
            if (kolmafia.haveEffect(_effect) > 0) continue;
            if (_effect === $effect(_templateObject0$8 || (_templateObject0$8 = _taggedTemplateLiteral(["Ultra-Soft Steps"]))) && kolmafia.itemAmount($item(_templateObject1$8 || (_templateObject1$8 = _taggedTemplateLiteral(["ultra-soft ferns"])))) === 0) continue;
            if (_effect === $effect(_templateObject10$8 || (_templateObject10$8 = _taggedTemplateLiteral(["Life Goals"]))) && kolmafia.itemAmount($item(_templateObject11$8 || (_templateObject11$8 = _taggedTemplateLiteral(["Life Goals Pamphlet"])))) === 0) continue;
            if (_effect === $effect(_templateObject12$8 || (_templateObject12$8 = _taggedTemplateLiteral(["Wild and Westy!"]))) && photoBoothSpent()) continue;
            if (_effect === $effect(_templateObject13$7 || (_templateObject13$7 = _taggedTemplateLiteral(["Apriling Band Patrol Beat"]))) && aprilBandWaiting()) continue;
            if (needsMissingSkill(_effect)) continue;
            getEffect(_effect);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        kolmafia.print("Combat rate is ".concat(kolmafia.numericModifier("Combat Rate")));
        return;
      }
    case "combat":
      {
        var _iterator3 = _createForOfIteratorHelper($effects(_templateObject14$7 || (_templateObject14$7 = _taggedTemplateLiteral(["Carlweather's Cantata of Confrontation, Fresh Breath, Musk of the Moose, Crunchy Steps, Apriling Band Battle Cadence, Towering Muscles, Attracting Snakes, Bloodbathed"])))),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _effect2 = _step3.value;
            if (kolmafia.haveEffect(_effect2) > 0) continue;
            if (_effect2 === $effect(_templateObject15$7 || (_templateObject15$7 = _taggedTemplateLiteral(["Crunchy Steps"]))) && kolmafia.itemAmount($item(_templateObject16$7 || (_templateObject16$7 = _taggedTemplateLiteral(["crunchy brush"])))) === 0) continue;
            if (_effect2 === $effect(_templateObject17$7 || (_templateObject17$7 = _taggedTemplateLiteral(["Towering Muscles"]))) && (!get$1("yogUrtDefeated") || photoBoothSpent())) continue;
            if (_effect2 === $effect(_templateObject18$7 || (_templateObject18$7 = _taggedTemplateLiteral(["Fresh Breath"]))) && (get$1("_aug6Cast") || highShiny())) continue;
            if (_effect2 === $effect(_templateObject19$7 || (_templateObject19$7 = _taggedTemplateLiteral(["Bloodbathed"]))) && lowShiny()) continue;
            if (_effect2 === $effect(_templateObject20$6 || (_templateObject20$6 = _taggedTemplateLiteral(["Apriling Band Battle Cadence"]))) && aprilBandWaiting()) continue;
            if (needsMissingSkill(_effect2)) continue;
            getEffect(_effect2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        kolmafia.print("Combat rate is ".concat(kolmafia.numericModifier("Combat Rate")));
        return;
      }
    case "hotres":
    case "spookyres":
    case "stenchres":
    case "sleazeres":
    case "coldres":
      {
        var effects = $effects(_templateObject21$6 || (_templateObject21$6 = _taggedTemplateLiteral(["Astral Shell, Minor Invulnerability, Elemental Saucesphere"])));
        if (mode === "sleazeres" || mode === "coldres") effects.push($effect(_templateObject22$6 || (_templateObject22$6 = _taggedTemplateLiteral(["Scarysauce"]))));
        var _iterator4 = _createForOfIteratorHelper(effects),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _effect3 = _step4.value;
            if (_effect3 === $effect(_templateObject23$6 || (_templateObject23$6 = _taggedTemplateLiteral(["Minor Invulnerability"]))) && kolmafia.itemAmount($item(_templateObject24$6 || (_templateObject24$6 = _taggedTemplateLiteral(["scroll of minor invulnerability"])))) === 0) {
              continue;
            }
            if (needsMissingSkill(_effect3)) continue;
            if (kolmafia.haveEffect(_effect3) === 0) getEffect(_effect3);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        return;
      }
    case "colosseum":
      {
        var _iterator5 = _createForOfIteratorHelper($effects(_templateObject25$6 || (_templateObject25$6 = _taggedTemplateLiteral(["Ultraheart, Carol of the Hells, Elron's Explosive Etude, Big, Favored by Lyle, The Magical Mojomuscular Melody, Tubes of Universal Meat, Mariachi Moisture, Everybody Calls Him Gorgon"])))),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _effect4 = _step5.value;
            if (needsMissingSkill(_effect4)) continue;
            if (_effect4 === $effect(_templateObject26$6 || (_templateObject26$6 = _taggedTemplateLiteral(["Ultraheart"]))) && !get$1("heartstoneBuffUnlocked")) continue;
            if (_effect4 === $effect(_templateObject27$6 || (_templateObject27$6 = _taggedTemplateLiteral(["Everybody Calls Him Gorgon"]))) && (!lowShiny() || !haveItem($item(_templateObject28$6 || (_templateObject28$6 = _taggedTemplateLiteral(["Clan VIP Lounge key"])))))) {
              continue;
            }
            if ((_effect4 === $effect(_templateObject29$6 || (_templateObject29$6 = _taggedTemplateLiteral(["Tubes of Universal Meat"]))) || _effect4 === $effect(_templateObject30$6 || (_templateObject30$6 = _taggedTemplateLiteral(["Mariachi Moisture"])))) && !haveItem($item(_templateObject31$6 || (_templateObject31$6 = _taggedTemplateLiteral(["April Shower Thoughts shield"]))))) {
              continue;
            }
            if (kolmafia.haveEffect(_effect4) === 0) getEffect(_effect4);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        return;
      }
    case "shub":
      {
        var _iterator6 = _createForOfIteratorHelper($effects(_templateObject32$6 || (_templateObject32$6 = _taggedTemplateLiteral(["Ruthlessly Efficient, Juiced Out, Juiced, Starry-Eyed, Gummiheart, Carol of the Bulls, Song of Bravado, Quiet Desperation, Stevedave's Shanty of Superiority, Rage of the Reindeer"])))),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _effect5 = _step6.value;
            if (needsMissingSkill(_effect5)) continue;
            var item = effectToItem(_effect5);
            if (item !== $item.none && kolmafia.itemAmount(item) === 0) continue;
            if (_effect5 === $effect(_templateObject33$6 || (_templateObject33$6 = _taggedTemplateLiteral(["Starry-Eyed"]))) && get$1("telescopeUpgrades") === 0) continue;
            if (kolmafia.haveEffect(_effect5) === 0) getEffect(_effect5);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        return;
      }
  }
}

var _templateObject$7, _templateObject2$7, _templateObject3$7, _templateObject4$7, _templateObject5$7, _templateObject6$7, _templateObject7$7, _templateObject8$7, _templateObject9$7, _templateObject0$7, _templateObject1$7, _templateObject10$7, _templateObject11$7, _templateObject12$7, _templateObject13$6, _templateObject14$6, _templateObject15$6, _templateObject16$6, _templateObject17$6, _templateObject18$6, _templateObject19$6;

// Opening the guild so the shadow brick is reachable with the pay phone.
// Ported from unlockGuild() in UnderTheSea.ash.

function guildWanted() {
  return questStep("questG03Ego") === -1 && kolmafia.itemAmount($item(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["closed-circuit pay phone"])))) > 0 && inSeaPath() && !highShiny();
}
var testStep = () => questStep(questProp());
var tearawayShortcut = () => kolmafia.myPrimestat() === $stat(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteral(["Moxie"]))) && haveItem($item(_templateObject3$7 || (_templateObject3$7 = _taggedTemplateLiteral(["tearaway pants"]))));
function testGear() {
  var gear = new Gear("item drop", questLoc());
  if (doSWord()) gear.fam(swordOfSWords);else if (have$g($familiar(_templateObject4$7 || (_templateObject4$7 = _taggedTemplateLiteral(["Artistic Goth Kid"]))))) gear.fam($familiar(_templateObject5$7 || (_templateObject5$7 = _taggedTemplateLiteral(["Artistic Goth Kid"]))));else if (have$g($familiar(_templateObject6$7 || (_templateObject6$7 = _taggedTemplateLiteral(["Red-Nosed Snapper"]))))) gear.forRole("itdrop");else gear.forRole("-combat");
  gear.need($item(_templateObject7$7 || (_templateObject7$7 = _taggedTemplateLiteral(["Monodent of the Sea"])))).ifEquip($item(_templateObject8$7 || (_templateObject8$7 = _taggedTemplateLiteral(["M\xF6bius ring"]))), $item(_templateObject9$7 || (_templateObject9$7 = _taggedTemplateLiteral(["Everfull Dart Holster"]))), $item(_templateObject0$7 || (_templateObject0$7 = _taggedTemplateLiteral(["toy Cupid bow"]))));
  if (haveItem($item(_templateObject1$7 || (_templateObject1$7 = _taggedTemplateLiteral(["Greatest American Pants"]))))) {
    gear.ifEquip($item(_templateObject10$7 || (_templateObject10$7 = _taggedTemplateLiteral(["Greatest American Pants"]))));
  } else if (haveItem($item(_templateObject11$7 || (_templateObject11$7 = _taggedTemplateLiteral(["navel ring of navel gazing"]))))) {
    gear.ifEquip($item(_templateObject12$7 || (_templateObject12$7 = _taggedTemplateLiteral(["navel ring of navel gazing"]))));
  } else {
    gear.ifEquip($item(_templateObject13$6 || (_templateObject13$6 = _taggedTemplateLiteral(["designer sweatpants"]))));
  }
  return gear.delay();
}
var GuildQuest = {
  name: "Guild",
  tasks: [{
    name: "Challenge",
    ready: () => guildWanted() && testStep() !== 0,
    completed: () => testStep() === 999,
    do: () => {
      // Moxie can skip the grind in tearaway pants.
      if (tearawayShortcut()) kolmafia.equip($item(_templateObject14$6 || (_templateObject14$6 = _taggedTemplateLiteral(["tearaway pants"]))));
      kolmafia.visitUrl("guild.php?place=challenge");
    },
    limit: {
      tries: 3
    }
  }, {
    name: "Test",
    ready: () => guildWanted() && testStep() === 0 && !tearawayShortcut(),
    completed: () => testStep() !== 0,
    before: () => {
      if (haveItem($item(_templateObject15$6 || (_templateObject15$6 = _taggedTemplateLiteral(["Greatest American Pants"])))) && kolmafia.itemAmount($item(_templateObject16$6 || (_templateObject16$6 = _taggedTemplateLiteral(["Greatest American Pants"])))) === 0) {
        pullSequence($item(_templateObject17$6 || (_templateObject17$6 = _taggedTemplateLiteral(["Greatest American Pants"]))));
      }
    },
    outfit: () => testGear().outfit(),
    prepare: () => {
      if (kolmafia.myFamiliar() === $familiar(_templateObject18$6 || (_templateObject18$6 = _taggedTemplateLiteral(["Red-Nosed Snapper"])))) trackPhylum($phylum(_templateObject19$6 || (_templateObject19$6 = _taggedTemplateLiteral(["fish"]))));
      mood("itdrop");
    },
    do: () => questLoc(),
    // The original spends these turns with adv1(), skipping post_adv().
    postAdventure: false
  }, {
    name: "Open the Ego quest",
    ready: () => guildWanted() && testStep() === 999,
    completed: () => questStep("questG03Ego") >= 0,
    do: () => {
      kolmafia.visitUrl("guild.php?place=ocg");
      kolmafia.visitUrl("guild.php?place=ocg");
    },
    limit: {
      tries: 1
    }
  }]
};

var _templateObject$6, _templateObject2$6, _templateObject3$6, _templateObject4$6, _templateObject5$6, _templateObject6$6, _templateObject7$6, _templateObject8$6, _templateObject9$6, _templateObject0$6, _templateObject1$6, _templateObject10$6, _templateObject11$6, _templateObject12$6, _templateObject13$5, _templateObject14$5, _templateObject15$5, _templateObject16$5, _templateObject17$5, _templateObject18$5, _templateObject19$5, _templateObject20$5, _templateObject21$5, _templateObject22$5, _templateObject23$5, _templateObject24$5, _templateObject25$5, _templateObject26$5, _templateObject27$5, _templateObject28$5, _templateObject29$5, _templateObject30$5, _templateObject31$5, _templateObject32$5, _templateObject33$5, _templateObject34$5, _templateObject35$5, _templateObject36$5, _templateObject37$5, _templateObject38$5, _templateObject39$5, _templateObject40$5, _templateObject41$5;

// The Sea Monkees quest up to asking Grandpa about Grandma. Ported from
// SWordLasso(), flytrap(), fitzsimmons(), grandpa() and the steps between them
// in seaMonkees() in UnderTheSea.ash.

var garden = $location(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["An Octopus's Garden"])));
var wreck$1 = $location(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral(["The Wreck of the Edgar Fitzsimmons"])));
var pellet = $item(_templateObject3$6 || (_templateObject3$6 = _taggedTemplateLiteral(["wriggling flytrap pellet"])));
var sword$2 = swordOfSWords;
var havePellet = () => kolmafia.itemAmount(pellet) > 0;
var flytrapPending = () => questStep("questS02Monkees") === -1 && !havePellet();

/** The sword and spade route to the skeleton store, for saberless kits. */
var skeletonRoute = () => flytrapPending() && !highShiny() && have$g(sword$2) && kolmafia.availableAmount($item(_templateObject4$6 || (_templateObject4$6 = _taggedTemplateLiteral(["Archaeologist's Spade"])))) > 0;

/** Sword of S Words, for runs that can't lasso-train in the shadow rift. */
var LassoQuest = {
  name: "Lasso",
  tasks: [{
    name: "S Word sea cowboy",
    ready: () => have$g(sword$2) && countSummons() >= 3 && (highShiny() || !haveItem($item(_templateObject5$6 || (_templateObject5$6 = _taggedTemplateLiteral(["closed-circuit pay phone"]))))),
    completed: () => get$1("swordOfSWordsMonster") !== null,
    outfit: () => new Gear("item drop").fam(sword$2).baseball().freeKill().outfit(),
    prepare: () => {
      mood("itdrop");
      kolmafia.cliExecute("recover hp");
    },
    do: () => {
      summon($monster(_templateObject6$6 || (_templateObject6$6 = _taggedTemplateLiteral(["sea cowboy"]))));
    },
    postAdventure: true,
    limit: {
      skip: 1
    }
  }]
};
var MonkeesQuest = {
  name: "Sea Monkees",
  tasks: [{
    name: "Flytrap: set the sword",
    ready: skeletonRoute,
    completed: () => get$1("swordOfSWordsMonster") === $monster(_templateObject7$6 || (_templateObject7$6 = _taggedTemplateLiteral(["Neptune flytrap"]))) || !flytrapPending(),
    outfit: () => new Gear(dropsItems, garden).fam(sword$2).ifEquip($item(_templateObject8$6 || (_templateObject8$6 = _taggedTemplateLiteral(["Peridot of Peril"])))).baseball().bathysphere($item(_templateObject9$6 || (_templateObject9$6 = _taggedTemplateLiteral(["toy Cupid bow"])))).freeKill().outfit(),
    do: garden
  }, {
    name: "Flytrap: skeleton store",
    ready: () => skeletonRoute() && get$1("swordOfSWordsMonster") === $monster(_templateObject0$6 || (_templateObject0$6 = _taggedTemplateLiteral(["Neptune flytrap"]))),
    completed: () => !flytrapPending() || kolmafia.myLocation() === $location(_templateObject1$6 || (_templateObject1$6 = _taggedTemplateLiteral(["The Skeleton Store"]))),
    do: () => {
      if (!get$1("skeletonStoreAvailable")) kolmafia.visitUrl("shop.php?whichshop=meatsmith&action=talk");
      return $location(_templateObject10$6 || (_templateObject10$6 = _taggedTemplateLiteral(["The Skeleton Store"])));
    }
  }, {
    // Each dig refights the store's monster, while the sword keeps it a flytrap.
    name: "Flytrap: spade",
    ready: () => skeletonRoute() && kolmafia.myLocation() === $location(_templateObject11$6 || (_templateObject11$6 = _taggedTemplateLiteral(["The Skeleton Store"]))) && get$1("_archSpadeDigs") < 11,
    completed: () => !flytrapPending(),
    outfit: () => ({
      modifier: dropsItems
    }),
    do: () => kolmafia.use($item(_templateObject12$6 || (_templateObject12$6 = _taggedTemplateLiteral(["Archaeologist's Spade"]))))
  }, {
    // Citizen of a Zone or the red, white and blue ray on the flytrap.
    name: "Flytrap: eagle",
    ready: () => flytrapPending() && have$g($familiar(_templateObject13$5 || (_templateObject13$5 = _taggedTemplateLiteral(["Patriotic Eagle"])))),
    completed: () => have$g($effect(_templateObject14$5 || (_templateObject14$5 = _taggedTemplateLiteral(["Citizen of a Zone"])))) || have$g($effect(_templateObject15$5 || (_templateObject15$5 = _taggedTemplateLiteral(["Everything Looks Red, White and Blue"])))) || !flytrapPending(),
    outfit: () => {
      var gear = new Gear(dropsItems, garden).fam($familiar(_templateObject16$5 || (_templateObject16$5 = _taggedTemplateLiteral(["Patriotic Eagle"])))).baseball().bathysphere($item(_templateObject17$5 || (_templateObject17$5 = _taggedTemplateLiteral(["toy Cupid bow"])))).freeKill();
      if (!gotPeriled(garden)) gear.ifEquip($item(_templateObject18$5 || (_templateObject18$5 = _taggedTemplateLiteral(["Peridot of Peril"]))));
      return gear.outfit();
    },
    do: garden
  }, {
    name: "Flytrap: pellet",
    ready: flytrapPending,
    completed: () => !flytrapPending(),
    outfit: () => {
      var rwb = get$1("rwbMonsterCount");
      var gear = new Gear(dropsItems, garden).forRole("exp").bathysphere($item(_templateObject19$5 || (_templateObject19$5 = _taggedTemplateLiteral(["toy Cupid bow"]))));
      if (rwb <= 1 && !get$1("trackedMonsters").includes("Neptune flytrap")) {
        gear.ifEquip($item(_templateObject20$5 || (_templateObject20$5 = _taggedTemplateLiteral(["McHugeLarge left pole"]))));
      } else {
        gear.baseball();
      }
      if (rwb === 0 && !mapReady() && highShiny()) gear.need($item(_templateObject21$5 || (_templateObject21$5 = _taggedTemplateLiteral(["Monodent of the Sea"]))));
      if (get$1("_assertYourAuthorityCast") < 3 && sheriffOutfit() && !highShiny()) {
        gear.need($item(_templateObject22$5 || (_templateObject22$5 = _taggedTemplateLiteral(["Sheriff moustache"]))), $item(_templateObject23$5 || (_templateObject23$5 = _taggedTemplateLiteral(["Sheriff badge"]))), $item(_templateObject24$5 || (_templateObject24$5 = _taggedTemplateLiteral(["Sheriff pistol"]))));
      }
      return gear.freeKill().outfit();
    },
    prepare: () => {
      if (get$1("rwbMonsterCount") === 0) {
        if (!mapReady()) kolmafia.print("Initiating banishes in Octopus Garden", "red");
        mapMonster(garden);
      }
    },
    do: garden,
    post: () => timeSpinnerRefight($location(_templateObject25$5 || (_templateObject25$5 = _taggedTemplateLiteral(["An Octopus's Garden"]))))
  }, {
    name: "Flytrap: use pellet",
    ready: () => questStep("questS02Monkees") === -1 && havePellet(),
    completed: () => questStep("questS02Monkees") >= 0,
    do: () => kolmafia.use(pellet),
    limit: {
      tries: 1
    }
  }, {
    name: "Little Brother",
    ready: () => questStep("questS02Monkees") === 0,
    completed: () => questStep("questS02Monkees") >= 1,
    do: () => {
      equipSwimTrunks();
      kolmafia.visitUrl("monkeycastle.php?who=1");
    },
    limit: {
      tries: 5
    }
  }, _objectSpread2({
    name: "Wreck of the Edgar Fitzsimmons",
    ready: () => questStep("questS02Monkees") === 1,
    completed: () => questStep("questS02Monkees") >= 2
  }, branch(() => ncForceEstimate() >= 4, {
    before: ncForce,
    outfit: () => new Gear("item drop,sea, -equip peridot of peril", wreck$1).bathysphere().ifEquip($item(_templateObject26$5 || (_templateObject26$5 = _taggedTemplateLiteral(["M\xF6bius ring"])))).outfit(),
    do: wreck$1
  }, {
    outfit: () => new Gear("-combat,sea, -equip peridot of peril", wreck$1).forRole("-combat").need($item(_templateObject27$5 || (_templateObject27$5 = _taggedTemplateLiteral(["Monodent of the Sea"])))).ifEquip($item(_templateObject28$5 || (_templateObject28$5 = _taggedTemplateLiteral(["M\xF6bius ring"])))).bathysphere($item(_templateObject29$5 || (_templateObject29$5 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit(),
    prepare: () => mood("-combat"),
    do: wreck$1
  })), {
    name: "Big Brother",
    ready: () => questStep("questS02Monkees") === 2,
    completed: () => questStep("questS02Monkees") >= 3,
    do: () => {
      equipSwimTrunks();
      kolmafia.visitUrl("monkeycastle.php?who=2");
      kolmafia.visitUrl("monkeycastle.php?who=1");
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Grandpa",
    ready: () => questStep("questS02Monkees") === 4,
    completed: () => questStep("questS02Monkees") >= 5,
    before: () => {
      if (!have$g($effect(_templateObject30$5 || (_templateObject30$5 = _taggedTemplateLiteral(["Colorfully Concealed"])))) && !lowShiny()) {
        pullSequence($item(_templateObject31$5 || (_templateObject31$5 = _taggedTemplateLiteral(["Mer-kin hidepaint"]))));
        if (kolmafia.itemAmount($item(_templateObject32$5 || (_templateObject32$5 = _taggedTemplateLiteral(["Mer-kin hidepaint"])))) > 0) kolmafia.use($item(_templateObject33$5 || (_templateObject33$5 = _taggedTemplateLiteral(["Mer-kin hidepaint"]))));
      }
      if (baseballPlayers() >= 9 && get$1("_baseballInnings") <= 2) baseballD();
    },
    outfit: () => {
      var gear = new Gear("item drop, sea, -100 combat", pearlLoc());
      if (doSWord()) gear.fam(sword$2);else gear.forRole("itdrop");
      gear.need($item(_templateObject34$5 || (_templateObject34$5 = _taggedTemplateLiteral(["Monodent of the Sea"])))).delay().ifEquip($item(_templateObject35$5 || (_templateObject35$5 = _taggedTemplateLiteral(["M\xF6bius ring"])))).bathysphere($item(_templateObject36$5 || (_templateObject36$5 = _taggedTemplateLiteral(["toy Cupid bow"]))));
      var tracked = get$1("trackedMonsters");
      var stat = kolmafia.myPrimestat();
      if (baseballPlayers() < 9 && kolmafia.availableAmount($item(_templateObject37$5 || (_templateObject37$5 = _taggedTemplateLiteral(["Baseball Diamond"])))) > 0) {
        gear.baseball();
      } else if (stat === $stat(_templateObject38$5 || (_templateObject38$5 = _taggedTemplateLiteral(["Mysticality"]))) && !tracked.includes("giant squid") || stat === $stat(_templateObject39$5 || (_templateObject39$5 = _taggedTemplateLiteral(["Moxie"]))) && !tracked.includes("Mer-kin tippler")) {
        gear.ifEquip($item(_templateObject40$5 || (_templateObject40$5 = _taggedTemplateLiteral(["McHugeLarge left pole"]))));
      }
      if (get$1("_bczSweatBulletsCasts") < 9) gear.ifEquip($item(_templateObject41$5 || (_templateObject41$5 = _taggedTemplateLiteral(["blood cubic zirconia"]))));
      return gear.outfit();
    },
    prepare: () => {
      if (doSWord()) mood("itdrop");
      mood(resMood(pearlRes()));
      mood("-combat");
    },
    do: () => pearlLoc()
  }, {
    name: "Ask Grandpa about Grandma",
    ready: () => questStep("questS02Monkees") === 5,
    completed: () => questStep("questS02Monkees") >= 6,
    do: () => kolmafia.cliExecute("grandpa grandma"),
    limit: {
      tries: 1
    }
  }]
};

var _templateObject$5, _templateObject2$5, _templateObject3$5, _templateObject4$5, _templateObject5$5, _templateObject6$5, _templateObject7$5, _templateObject8$5, _templateObject9$5, _templateObject0$5, _templateObject1$5, _templateObject10$5, _templateObject11$5, _templateObject12$5;

// An Old Guy and the Ocean: fifty sand dollars for the damp old boot. Ported
// from getSandDollar() and oldGuy() in UnderTheSea.ash.

function getSandDollar() {
  if (kolmafia.itemAmount($item(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["Mer-kin thingpouch"])))) > 0) {
    kolmafia.use(kolmafia.itemAmount($item(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["Mer-kin thingpouch"])))), $item(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteral(["Mer-kin thingpouch"]))));
  } else if (kolmafia.itemAmount($item(_templateObject4$5 || (_templateObject4$5 = _taggedTemplateLiteral(["sand penny"])))) >= 100) {
    kolmafia.buy($coinmaster(_templateObject5$5 || (_templateObject5$5 = _taggedTemplateLiteral(["Wet Crap For Sale"]))), 1, $item(_templateObject6$5 || (_templateObject6$5 = _taggedTemplateLiteral(["water-logged pill"]))));
  } else if (kolmafia.storageAmount($item(_templateObject7$5 || (_templateObject7$5 = _taggedTemplateLiteral(["damp old wallet"])))) > 0 && pullSequence($item(_templateObject8$5 || (_templateObject8$5 = _taggedTemplateLiteral(["damp old wallet"]))))) {
    kolmafia.use($item(_templateObject9$5 || (_templateObject9$5 = _taggedTemplateLiteral(["damp old wallet"]))));
  } else {
    getLucky();
    adv($location(_templateObject0$5 || (_templateObject0$5 = _taggedTemplateLiteral(["The Mer-Kin Outpost"]))));
  }
}

/** One step towards the Old Guy's reward: a sand dollar, or the boot and the reward once there are fifty. */
function oldGuyTurn() {
  if (kolmafia.itemAmount($item(_templateObject1$5 || (_templateObject1$5 = _taggedTemplateLiteral(["sand dollar"])))) < 50) {
    getSandDollar();
    return;
  }
  blackGlass();
  if (!have$g($item(_templateObject10$5 || (_templateObject10$5 = _taggedTemplateLiteral(["damp old boot"])))) && questStep("questS01OldGuy") === 0) {
    kolmafia.buy($coinmaster(_templateObject11$5 || (_templateObject11$5 = _taggedTemplateLiteral(["Big Brother"]))), 1, $item(_templateObject12$5 || (_templateObject12$5 = _taggedTemplateLiteral(["damp old boot"]))));
  }
  kolmafia.visitUrl("place.php?whichplace=sea_oldman&action=oldman_oldman&preaction=pickreward&whichreward=6313");
}

var _templateObject$4, _templateObject2$4, _templateObject3$4, _templateObject4$4, _templateObject5$4, _templateObject6$4, _templateObject7$4, _templateObject8$4, _templateObject9$4, _templateObject0$4, _templateObject1$4, _templateObject10$4, _templateObject11$4, _templateObject12$4, _templateObject13$4, _templateObject14$4, _templateObject15$4, _templateObject16$4, _templateObject17$4, _templateObject18$4, _templateObject19$4, _templateObject20$4, _templateObject21$4, _templateObject22$4, _templateObject23$4, _templateObject24$4, _templateObject25$4, _templateObject26$4, _templateObject27$4, _templateObject28$4, _templateObject29$4, _templateObject30$4, _templateObject31$4, _templateObject32$4, _templateObject33$4, _templateObject34$4, _templateObject35$4, _templateObject36$4, _templateObject37$4, _templateObject38$4, _templateObject39$4, _templateObject40$4, _templateObject41$4, _templateObject42$4, _templateObject43$4, _templateObject44$4, _templateObject45$4, _templateObject46$4, _templateObject47$4, _templateObject48$4, _templateObject49$4, _templateObject50$3, _templateObject51$3, _templateObject52$3, _templateObject53$3, _templateObject54$3, _templateObject55$2, _templateObject56$2, _templateObject57$2, _templateObject58$2, _templateObject59$2, _templateObject60$2, _templateObject61$2, _templateObject62$2, _templateObject63$2, _templateObject64$2, _templateObject65$2, _templateObject66$2, _templateObject67$2, _templateObject68$2, _templateObject69$2, _templateObject70$2, _templateObject71$2, _templateObject72$2, _templateObject73$2, _templateObject74$2, _templateObject75$2, _templateObject76$2, _templateObject77$2, _templateObject78$2, _templateObject79$2, _templateObject80$2, _templateObject81$2, _templateObject82$2, _templateObject83$2, _templateObject84$2, _templateObject85$2, _templateObject86$2, _templateObject87$2, _templateObject88$2, _templateObject89$2, _templateObject90$2, _templateObject91$2, _templateObject92$2, _templateObject93$2, _templateObject94$2, _templateObject95$2, _templateObject96$2, _templateObject97$2, _templateObject98$2, _templateObject99$2, _templateObject100$2, _templateObject101$2, _templateObject102$2, _templateObject103$2, _templateObject104$2, _templateObject105$2, _templateObject106$2, _templateObject107$2, _templateObject108$2, _templateObject109$2;

// How the run farms each zone, as task bodies: the outfit, the setup and one
// turn. Tasks elsewhere pair these with their own ready() and completed().
// Ported from the "Quest Handling" and "Other Utilities" sections of
// UnderTheSea.ash.

var abyss$1 = $location(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["The Caliginous Abyss"])));
var corral$2 = $location(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["The Coral Corral"])));
var school$1 = $location(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["Mer-kin Elementary School"])));
var library$1 = $location(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteral(["Mer-kin Library"])));
var outpost$1 = $location(_templateObject5$4 || (_templateObject5$4 = _taggedTemplateLiteral(["The Mer-Kin Outpost"])));
var rift$1 = $location(_templateObject6$4 || (_templateObject6$4 = _taggedTemplateLiteral(["Shadow Rift (The Misspelled Cemetary)"])));
var gym = $location(_templateObject7$4 || (_templateObject7$4 = _taggedTemplateLiteral(["Mer-kin Gymnasium"])));
var skatePark = $location(_templateObject8$4 || (_templateObject8$4 = _taggedTemplateLiteral(["The Skate Park"])));

/** A body that spends no turn. */
function action(run) {
  return {
    do: run
  };
}

// ─── MONKEY'S PAW ─────────────────────────────────────────────────────────────

var pawWishReady = () => have$6() && wishes() > 0;

/** A wish for the item, or a turn in the corral towards it. */
function monkeypaw(item) {
  return branch(pawWishReady, action(() => wishFor(item)), corralFarm());
}

// ─── PRAYERBEADS ──────────────────────────────────────────────────────────────

/** The -combat outpost setup for prayerbead trips. */
function prayerbeadGear() {
  var gear = new Gear("-combat,sea", outpost$1).forRole("-combat").bathysphere($item(_templateObject9$4 || (_templateObject9$4 = _taggedTemplateLiteral(["toy Cupid bow"]))));
  if (lowShiny()) gear.ifEquip($item(_templateObject0$4 || (_templateObject0$4 = _taggedTemplateLiteral(["Congressional Medal of Insanity"]))));
  // Any healer that slips through the -combat stack gets Forced for a
  // guaranteed prayerbead and thingpouch, with the turn refunded.
  return gear.healerSaber();
}

/** A prayerbead from the monkey's paw, or a -combat turn at the outpost. */
function farmPrayerbeads() {
  return branch(pawWishReady, action(() => wishFor($item(_templateObject1$4 || (_templateObject1$4 = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))))), {
    outfit: () => prayerbeadGear().outfit(),
    prepare: () => mood("-combat"),
    do: outpost$1
  });
}

// ─── THE CALIGINOUS ABYSS ─────────────────────────────────────────────────────

function abyssRecallGear() {
  return new Gear("item drop,sea", abyss$1).forRole("-combat").need($item(_templateObject10$4 || (_templateObject10$4 = _taggedTemplateLiteral(["shark jumper"]))), $item(_templateObject11$4 || (_templateObject11$4 = _taggedTemplateLiteral(["scale-mail underwear"]))), $item(_templateObject12$4 || (_templateObject12$4 = _taggedTemplateLiteral(["black glass"]))), $item(_templateObject13$4 || (_templateObject13$4 = _taggedTemplateLiteral(["Monodent of the Sea"])))).ifEquip($item(_templateObject14$4 || (_templateObject14$4 = _taggedTemplateLiteral(["Peridot of Peril"])))).bathysphere().freeKill();
}

/** Comb jelly's Jelly Combed, if the pull is there. */
function combJelly() {
  if (kolmafia.haveEffect($effect(_templateObject15$4 || (_templateObject15$4 = _taggedTemplateLiteral(["Jelly Combed"])))) === 0 && pullSequence($item(_templateObject16$4 || (_templateObject16$4 = _taggedTemplateLiteral(["comb jelly"]))))) {
    kolmafia.use($item(_templateObject17$4 || (_templateObject17$4 = _taggedTemplateLiteral(["comb jelly"]))));
  }
}
function recallCaliginous() {
  return {
    before: () => {
      if (kolmafia.availableAmount($item(_templateObject18$4 || (_templateObject18$4 = _taggedTemplateLiteral(["black glass"])))) === 0) {
        kolmafia.buy($coinmaster(_templateObject19$4 || (_templateObject19$4 = _taggedTemplateLiteral(["Big Brother"]))), 1, $item(_templateObject20$4 || (_templateObject20$4 = _taggedTemplateLiteral(["black glass"]))));
      }
    },
    outfit: () => abyssRecallGear().outfit(),
    prepare: combJelly,
    do: abyss$1
  };
}
function finishCaliginous() {
  return {
    outfit: () => {
      var gear = new Gear("mys,sea", abyss$1).forRole("itdrop").need($item(_templateObject21$4 || (_templateObject21$4 = _taggedTemplateLiteral(["shark jumper"]))), $item(_templateObject22$4 || (_templateObject22$4 = _taggedTemplateLiteral(["scale-mail underwear"]))), $item(_templateObject23$4 || (_templateObject23$4 = _taggedTemplateLiteral(["black glass"])))).ifEquip($item(_templateObject24$4 || (_templateObject24$4 = _taggedTemplateLiteral(["Congressional Medal of Insanity"])))).bathysphere().ifEquip($item(_templateObject25$4 || (_templateObject25$4 = _taggedTemplateLiteral(["blood cubic zirconia"]))));
      if (!isBanished($monster(_templateObject26$4 || (_templateObject26$4 = _taggedTemplateLiteral(["school of many"]))))) gear.need($item(_templateObject27$4 || (_templateObject27$4 = _taggedTemplateLiteral(["Monodent of the Sea"]))));
      return gear.outfit();
    },
    do: abyss$1
  };
}

// ─── THE CORAL CORRAL ─────────────────────────────────────────────────────────

/** A turn in the corral for whatever of the sea cow and sea cowboy drops is still short. */
function corralFarm() {
  return {
    // Backup Fidoxene site for reruns that skip the outpost phase; the
    // free-pill guard inside makes repeat calls a no-op.
    before: () => {
      if (ncForceEstimate() >= 4) pillKeeper("free familiar");
    },
    outfit: () => {
      var gear = new Gear("item drop,sea", corral$2);
      // Lecture copies of the sea cow once the Force budget is spent.
      if (lectureNow()) gear.fam($familiar(_templateObject28$4 || (_templateObject28$4 = _taggedTemplateLiteral(["Pocket Professor"]))));else gear.forRole("itdrop");
      if (!isBanished($monster(_templateObject29$4 || (_templateObject29$4 = _taggedTemplateLiteral(["Mer-kin rustler"])))) || doneWithCowboy() && !isBanished($monster(_templateObject30$4 || (_templateObject30$4 = _taggedTemplateLiteral(["sea cowboy"])))) || doneWithSeaCow() && !isBanished($monster(_templateObject31$4 || (_templateObject31$4 = _taggedTemplateLiteral(["sea cow"]))))) {
        gear.ifEquip(banishGear(corral$2));
      }
      if (lowShiny()) gear.ifEquip($item(_templateObject32$4 || (_templateObject32$4 = _taggedTemplateLiteral(["Congressional Medal of Insanity"]))));
      return gear.saber().cloake().champagne().ifEquip($item(_templateObject33$4 || (_templateObject33$4 = _taggedTemplateLiteral(["legendary seal-clubbing club"])))).bathysphere($item(_templateObject34$4 || (_templateObject34$4 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit();
    },
    choices: () => {
      if (!doneWithSeaCow()) return {
        1589: "1&victim=775"
      };
      if (!doneWithCowboy()) return {
        1589: "1&victim=776"
      };
      return {};
    },
    prepare: () => {
      // Whichever victim is hunted, its whole table is non-conditional, so
      // once the Force budget is out the ray forces the same result.
      if (forcesAfterHealer() <= 0) yellowRayPrep();
      mood("itdrop");
      mapMonster(corral$2);
    },
    do: corral$2,
    post: () => {
      timeSpinnerRefight(corral$2);
      if (get$1("baseballTeam").includes("775") && baseballPlayers() === 9 && kolmafia.itemAmount($item(_templateObject35$4 || (_templateObject35$4 = _taggedTemplateLiteral(["sea cowbell"])))) < 3) {
        baseballD();
      }
    }
  };
}

// ─── SHADOW RIFT ──────────────────────────────────────────────────────────────

/** Whether a shadow rift visit has anything left to do today. */
function riftOpen() {
  return haveItem($item(_templateObject36$4 || (_templateObject36$4 = _taggedTemplateLiteral(["closed-circuit pay phone"])))) && (!get$1("_shadowAffinityToday") || kolmafia.haveEffect($effect(_templateObject37$4 || (_templateObject37$4 = _taggedTemplateLiteral(["Shadow Affinity"])))) > 0);
}

/** Shadow Rift fight gear. The Liquidizer grants the Douse Foe the CCS casts on a shadow slab. */
function shadowRiftGear() {
  var gear = new Gear("item drop", rift$1).ifEquip($item(_templateObject38$4 || (_templateObject38$4 = _taggedTemplateLiteral(["Flash Liquidizer Ultra Dousing Accessory"])))).need($item(_templateObject39$4 || (_templateObject39$4 = _taggedTemplateLiteral(["Monodent of the Sea"]))));
  if (get$1("lassoTrainingCount") < 20) gear.ifEquip($item(_templateObject40$4 || (_templateObject40$4 = _taggedTemplateLiteral(["sea cowboy hat"]))), $item(_templateObject41$4 || (_templateObject41$4 = _taggedTemplateLiteral(["sea chaps"]))));
  return gear.ifEquip($item(_templateObject42$4 || (_templateObject42$4 = _taggedTemplateLiteral(["bat wings"]))), $item(_templateObject43$4 || (_templateObject43$4 = _taggedTemplateLiteral(["Everfull Dart Holster"]))), $item(_templateObject44$4 || (_templateObject44$4 = _taggedTemplateLiteral(["toy Cupid bow"])))).baseball();
}
var riftQuest = () => questStep("questRufus");

/** Shadow Waters: the pay phone, the quest's noncombat, then one rift fight. */
function shadowWaters() {
  return {
    outfit: () => shadowRiftGear().outfit(),
    do: () => {
      if (riftQuest() === -1) kolmafia.use($item(_templateObject45$4 || (_templateObject45$4 = _taggedTemplateLiteral(["closed-circuit pay phone"]))));
      if (riftQuest() === 0) {
        ncForce();
        adv1Rift();
      }
      if (!get$1("_seadentWaveUsed")) kolmafia.useSkill($skill(_templateObject46$4 || (_templateObject46$4 = _taggedTemplateLiteral(["Sea *dent: Summon a Wave"]))));
      kolmafia.use($item(_templateObject47$4 || (_templateObject47$4 = _taggedTemplateLiteral(["closed-circuit pay phone"]))));
      // The noncombat force can take an accessory slot.
      shadowRiftGear().dress();
      return rift$1;
    }
  };
}

/** One Shadow Affinity fight, with the Summon a Wave and choice follow-ups. */
function shadowAffinity() {
  return {
    before: () => {
      if (get$1("encountersUntilSRChoice") > 9 && riftQuest() === -1 && kolmafia.itemAmount($item(_templateObject48$4 || (_templateObject48$4 = _taggedTemplateLiteral(["closed-circuit pay phone"])))) > 0) {
        new Gear("item drop", rift$1).need($item(_templateObject49$4 || (_templateObject49$4 = _taggedTemplateLiteral(["Flash Liquidizer Ultra Dousing Accessory"]))), $item(_templateObject50$3 || (_templateObject50$3 = _taggedTemplateLiteral(["Monodent of the Sea"])))).ifEquip($item(_templateObject51$3 || (_templateObject51$3 = _taggedTemplateLiteral(["bat wings"])))).baseball().ifEquip($item(_templateObject52$3 || (_templateObject52$3 = _taggedTemplateLiteral(["Everfull Dart Holster"])))).dress();
        kolmafia.use($item(_templateObject53$3 || (_templateObject53$3 = _taggedTemplateLiteral(["closed-circuit pay phone"]))));
      }
      if (riftQuest() === -1) kolmafia.use($item(_templateObject54$3 || (_templateObject54$3 = _taggedTemplateLiteral(["closed-circuit pay phone"]))));
    },
    outfit: () => {
      var gear = shadowRiftGear();
      if (kolmafia.haveFamiliar($familiar(_templateObject55$2 || (_templateObject55$2 = _taggedTemplateLiteral(["Jill-of-All-Trades"]))))) gear.fam($familiar(_templateObject56$2 || (_templateObject56$2 = _taggedTemplateLiteral(["Jill-of-All-Trades"]))));else gear.forRole("itdrop");
      return gear.outfit();
    },
    prepare: () => mood("itdrop"),
    do: rift$1,
    post: () => {
      if (!get$1("_seadentWaveUsed") && kolmafia.haveEffect($effect(_templateObject57$2 || (_templateObject57$2 = _taggedTemplateLiteral(["Shadow Affinity"])))) > 0) {
        adv1Rift();
        kolmafia.useSkill($skill(_templateObject58$2 || (_templateObject58$2 = _taggedTemplateLiteral(["Sea *dent: Summon a Wave"]))));
      }
      if (get$1("encountersUntilSRChoice") === 0) adv1Rift();
    }
  };
}

/** A follow-up rift turn within the same visit, on adv1() as the original had it. */
function adv1Rift() {
  setMPRecovery();
  kolmafia.adv1(rift$1, -1, "");
}

/** A sea lasso from the monkey's paw or the corral, in the sea gear it needs. */
function lassoWish() {
  return withHooks(monkeypaw($item(_templateObject59$2 || (_templateObject59$2 = _taggedTemplateLiteral(["sea lasso"])))), {
    before: () => {
      kolmafia.equip($item(_templateObject60$2 || (_templateObject60$2 = _taggedTemplateLiteral(["really, really nice swimming trunks"]))));
      kolmafia.equip($item(_templateObject61$2 || (_templateObject61$2 = _taggedTemplateLiteral(["little bitty bathysphere"]))));
    }
  });
}

/**
 * One shadow rift visit: Shadow Waters first, then the Shadow Affinity
 * fights, which want a sea lasso on hand for lasso training.
 */
function shadowRift() {
  var needLasso = () => kolmafia.haveEffect($effect(_templateObject62$2 || (_templateObject62$2 = _taggedTemplateLiteral(["Shadow Waters"])))) > 0 && kolmafia.haveEffect($effect(_templateObject63$2 || (_templateObject63$2 = _taggedTemplateLiteral(["Shadow Affinity"])))) > 0 && kolmafia.itemAmount($item(_templateObject64$2 || (_templateObject64$2 = _taggedTemplateLiteral(["sea lasso"])))) === 0;
  return branch(() => kolmafia.haveEffect($effect(_templateObject65$2 || (_templateObject65$2 = _taggedTemplateLiteral(["Shadow Waters"])))) === 0, shadowWaters(), branch(needLasso, lassoWish(), shadowAffinity()));
}

// ─── CURVEBALL ────────────────────────────────────────────────────────────────

/** The peril zone a curveball fight goes to, or the Knob's outskirts if all are periled. */
function curveballZone() {
  var zones = [["spookyres", "spooky res,sea", $location(_templateObject66$2 || (_templateObject66$2 = _taggedTemplateLiteral(["Anemone Mine"])))], ["hotres", "hot res,sea", $location(_templateObject67$2 || (_templateObject67$2 = _taggedTemplateLiteral(["The Marinara Trench"])))], ["sleazeres", "sleaze res,sea", $location(_templateObject68$2 || (_templateObject68$2 = _taggedTemplateLiteral(["The Dive Bar"])))]];
  // The mine first only while the digpick is still wanted from it.
  var order = kolmafia.availableAmount($item(_templateObject69$2 || (_templateObject69$2 = _taggedTemplateLiteral(["Mer-kin digpick"])))) === 0 ? zones : [].concat(_toConsumableArray(zones.slice(1)), [zones[0]]);
  var target = order.find(_ref => {
    var _ref2 = _slicedToArray(_ref, 3),
      zone = _ref2[2];
    return !periledToday(zone);
  });
  return target ?? [undefined, "item drop", $location(_templateObject70$2 || (_templateObject70$2 = _taggedTemplateLiteral(["The Outskirts of Cobb's Knob"])))];
}

/** Spend a baseball curveball fight in a peril zone not yet periled today. */
function curveballBurn() {
  return {
    before: () => {
      if (curveballZone()[0]) codpiece("blood cubic zirconia, peridot of peril");
    },
    outfit: () => {
      var _curveballZone = curveballZone(),
        _curveballZone2 = _slicedToArray(_curveballZone, 3),
        buffs = _curveballZone2[0],
        modifier = _curveballZone2[1],
        zone = _curveballZone2[2];
      var gear = new Gear(modifier, zone);
      if (!buffs) return gear.need($item(_templateObject71$2 || (_templateObject71$2 = _taggedTemplateLiteral(["Monodent of the Sea"])))).outfit();
      return gear.forRole("itdrop").ifEquip($item(_templateObject72$2 || (_templateObject72$2 = _taggedTemplateLiteral(["The Eternity Codpiece"])))).need($item(_templateObject73$2 || (_templateObject73$2 = _taggedTemplateLiteral(["Monodent of the Sea"])))).bathysphere().outfit();
    },
    prepare: () => {
      var buffs = curveballZone()[0];
      if (buffs) mood(buffs);
    },
    do: () => curveballZone()[2],
    post: () => codpiece("none")
  };
}

// ─── ANEMONE MINE ─────────────────────────────────────────────────────────────

/** One dig in the anemone mine for teflon ore. A page, not an adventure. */
function mineAnemone() {
  var dig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : digAnemone;
  return {
    outfit: () => {
      var familiar = pickFamiliar("itdrop");
      return familiar ? {
        familiar
      } : {};
    },
    do: dig
  };
}
function digAnemone() {
  kolmafia.equip($item(_templateObject74$2 || (_templateObject74$2 = _taggedTemplateLiteral(["Mer-kin digpick"]))));
  equipSwimTrunks();
  mineCoordinate(Mine.ANEMONE, mineNum());
  if (kolmafia.myHp() === 0) kolmafia.cliExecute("restore HP");
  if (kolmafia.itemAmount($item(_templateObject75$2 || (_templateObject75$2 = _taggedTemplateLiteral(["teflon ore"])))) > 0 && kolmafia.haveEffect($effect(_templateObject76$2 || (_templateObject76$2 = _taggedTemplateLiteral(["Beaten Up"])))) > 0) {
    if (kolmafia.haveSkill($skill(_templateObject77$2 || (_templateObject77$2 = _taggedTemplateLiteral(["Tongue of the Walrus"]))))) kolmafia.useSkill($skill(_templateObject78$2 || (_templateObject78$2 = _taggedTemplateLiteral(["Tongue of the Walrus"]))));else kolmafia.cliExecute("rest");
  }
}

// ─── GYMNASIUM AND SKATE PARK ─────────────────────────────────────────────────

function gymnasium() {
  return {
    outfit: () => {
      var gear = new Gear("combat,sea", gym).forRole("combat");
      if (get$1("skateParkStatus") === "war") {
        if (leftSkiAvailable()) gear.ifEquip($item(_templateObject79$2 || (_templateObject79$2 = _taggedTemplateLiteral(["McHugeLarge left ski"]))));else if (parkaForceAvailable()) {
          gear.ifEquip($item(_templateObject80$2 || (_templateObject80$2 = _taggedTemplateLiteral(["Jurassic Parka"])))).mode({
            parka: "spikolodon"
          });
        }
      }
      return gear.baseball().ifEquip(divingHelmet(), tailpiece()).delay().freeKill().bathysphere().outfit();
    },
    prepare: () => {
      mood("combat");
      if (get$1("noncombatForcerActive")) {
        throw new Error("Sneak active while trying to adventure in gymnasium, get rid of it");
      }
    },
    do: gym
  };
}
var skateBoard = () => highShiny() ? $item(_templateObject81$2 || (_templateObject81$2 = _taggedTemplateLiteral(["skate board"]))) : $item(_templateObject82$2 || (_templateObject82$2 = _taggedTemplateLiteral(["skate blade"])));

/** The skate park noncombat under a forcer, the gym first to spend a free one. */
function skateParkTurn() {
  return {
    before: () => {
      if (!parkaForceAvailable() && !leftSkiAvailable() && haveItem($item(_templateObject83$2 || (_templateObject83$2 = _taggedTemplateLiteral(["Allied Radio Backpack"]))))) {
        kolmafia.cliExecute("alliedradio misc sniper");
      }
      var board = skateBoard();
      if ((kolmafia.pullsRemaining() > reservedPulls() || board === $item(_templateObject84$2 || (_templateObject84$2 = _taggedTemplateLiteral(["skate board"])))) && kolmafia.availableAmount(board) === 0) {
        pullSequence(board);
      }
    },
    outfit: () => {
      if (get$1("noncombatForcerActive")) return {};
      var gear = new Gear("-combat, sea, -weapon", skatePark).forRole("-combat");
      if (kolmafia.availableAmount(skateBoard()) > 0) gear.need(skateBoard());
      return gear.bathysphere($item(_templateObject85$2 || (_templateObject85$2 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit();
    },
    prepare: () => {
      if (!get$1("noncombatForcerActive")) {
        mood("-combat");
        return;
      }
      equipSwimTrunks();
      kolmafia.cliExecute("unequip peridot");
      if (kolmafia.itemAmount(skateBoard()) > 0) kolmafia.equip(skateBoard());
    },
    do: skatePark
  };
}

/**
 * One turn towards ending the skate park war. Ready only while it's on.
 * Mafia only updates skateParkStatus from the park's page, so each turn ends
 * with a visit there and the next completed() check sees the war's real state.
 */
function skateParkWar() {
  var body = branch(() => !get$1("noncombatForcerActive") && (parkaForceAvailable() || leftSkiAvailable()), gymnasium(), skateParkTurn());
  return withHooks(body, {
    before: ncForce,
    post: () => kolmafia.visitUrl("sea_skatepark.php")
  });
}

// ─── ELEMENTARY SCHOOL AND LIBRARY ────────────────────────────────────────────

/** Hallpasses go in the closet, so the lounge noncombat doesn't eat one. */
function closetHallpasses() {
  var passes = kolmafia.itemAmount($item(_templateObject86$2 || (_templateObject86$2 = _taggedTemplateLiteral(["Mer-kin hallpass"]))));
  if (passes > 0) kolmafia.putCloset(passes, $item(_templateObject87$2 || (_templateObject87$2 = _taggedTemplateLiteral(["Mer-kin hallpass"]))));
}
function getCheatsheet() {
  return {
    before: closetHallpasses,
    outfit: () => {
      var modifier = "item drop,sea";
      if (kolmafia.itemAmount($item(_templateObject88$2 || (_templateObject88$2 = _taggedTemplateLiteral(["Mer-kin bunwig"])))) === 0 && kolmafia.availableAmount($item(_templateObject89$2 || (_templateObject89$2 = _taggedTemplateLiteral(["Mer-kin bunwig"])))) === 0) {
        modifier += ", hat drop";
      }
      var gear = new Gear(modifier, school$1).forRole("itdrop");
      if (get$1("_backUpUses") < 11 && haveItem($item(_templateObject90$2 || (_templateObject90$2 = _taggedTemplateLiteral(["backup camera"]))))) {
        gear.need($item(_templateObject91$2 || (_templateObject91$2 = _taggedTemplateLiteral(["backup camera"]))));
      } else if (kolmafia.haveSkill($skill(_templateObject92$2 || (_templateObject92$2 = _taggedTemplateLiteral(["Double-Fisted Skull Smashing"]))))) {
        gear.need($item(_templateObject93$2 || (_templateObject93$2 = _taggedTemplateLiteral(["Monodent of the Sea"]))));
      }
      return gear.saber().cloake().ifEquip(divingHelmet(), tailpiece(), $item(_templateObject94$2 || (_templateObject94$2 = _taggedTemplateLiteral(["blood cubic zirconia"]))), $item(_templateObject95$2 || (_templateObject95$2 = _taggedTemplateLiteral(["legendary seal-clubbing club"]))), $item(_templateObject96$2 || (_templateObject96$2 = _taggedTemplateLiteral(["M\xF6bius ring"])))).bathysphere($item(_templateObject97$2 || (_templateObject97$2 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit();
    },
    choices: {
      1589: "1&victim=852"
    },
    prepare: () => {
      if (!get$1("merkinElementaryTeacherUnlock")) mood("-combat");
      mood("itdrop");
      useMapIfAvailable();
      // Leftover Map charges force a monitor here; the refight buys a
      // guaranteed monitor for one turn straight after fighting one.
      mapMonster(school$1);
    },
    do: school$1,
    post: () => {
      timeSpinnerRefight(school$1);
      closetHallpasses();
    }
  };
}
function merkinLib() {
  return {
    outfit: () => {
      var scroll7 = get$1("dreadScroll7") === 0;
      var kill = kolmafia.itemAmount($item(_templateObject98$2 || (_templateObject98$2 = _taggedTemplateLiteral(["Mer-kin killscroll"]))));
      var heal = kolmafia.itemAmount($item(_templateObject99$2 || (_templateObject99$2 = _taggedTemplateLiteral(["Mer-kin healscroll"]))));
      var worktea = kolmafia.itemAmount($item(_templateObject100$2 || (_templateObject100$2 = _taggedTemplateLiteral(["Mer-kin worktea"]))));
      var knucklebone = kolmafia.itemAmount($item(_templateObject101$2 || (_templateObject101$2 = _taggedTemplateLiteral(["Mer-kin knucklebone"]))));
      var gear = new Gear(heal < 2 ? "item drop,sea" : dropsItems, library$1).forRole(scroll7 ? "itdrop" : "exp").need($item(_templateObject102$2 || (_templateObject102$2 = _taggedTemplateLiteral(["Mer-kin scholar mask"]))), $item(_templateObject103$2 || (_templateObject103$2 = _taggedTemplateLiteral(["Mer-kin scholar tailpiece"]))));
      if (lowShiny()) gear.ifEquip($item(_templateObject104$2 || (_templateObject104$2 = _taggedTemplateLiteral(["Congressional Medal of Insanity"]))));
      if (get$1("_backUpUses") < 11 && haveItem($item(_templateObject105$2 || (_templateObject105$2 = _taggedTemplateLiteral(["backup camera"])))) && !highShiny()) {
        gear.need($item(_templateObject106$2 || (_templateObject106$2 = _taggedTemplateLiteral(["backup camera"]))));
      }
      // One Force charge on the researcher lands both scrolls and frees their
      // reserved pulls. Both are weapons, so the saber only gets the slot by
      // keeping the monodent out while a truly spare charge exists.
      var saberForResearcher = (kill === 0 || heal === 0) && saberForcesFree() > 0 && haveItem($item(_templateObject107$2 || (_templateObject107$2 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
      if (!saberForResearcher && (heal === 0 || (kill === 0 || worktea === 0 || knucklebone === 0) && scroll7)) {
        gear.need($item(_templateObject108$2 || (_templateObject108$2 = _taggedTemplateLiteral(["Monodent of the Sea"]))));
      } else if (!saberForResearcher) {
        gear.delay();
      }
      gear.saber().cloake();
      if (heal < 2 || worktea === 0 && scroll7 || knucklebone === 0 && scroll7 || kill === 0 && get$1("dreadScroll5") === 0) {
        gear.ifEquip($item(_templateObject109$2 || (_templateObject109$2 = _taggedTemplateLiteral(["blood cubic zirconia"]))));
      } else {
        gear.delay();
      }
      return gear.outfit();
    },
    prepare: () => {
      mood("itdrop");
      useMapIfAvailable();
    },
    do: library$1
  };
}

var _templateObject$3, _templateObject2$3, _templateObject3$3, _templateObject4$3, _templateObject5$3, _templateObject6$3, _templateObject7$3, _templateObject8$3, _templateObject9$3, _templateObject0$3, _templateObject1$3, _templateObject10$3, _templateObject11$3, _templateObject12$3, _templateObject13$3, _templateObject14$3, _templateObject15$3, _templateObject16$3, _templateObject17$3, _templateObject18$3, _templateObject19$3, _templateObject20$3, _templateObject21$3, _templateObject22$3, _templateObject23$3, _templateObject24$3, _templateObject25$3, _templateObject26$3, _templateObject27$3, _templateObject28$3, _templateObject29$3, _templateObject30$3, _templateObject31$3, _templateObject32$3, _templateObject33$3, _templateObject34$3, _templateObject35$3, _templateObject36$3, _templateObject37$3, _templateObject38$3, _templateObject39$3, _templateObject40$3, _templateObject41$3, _templateObject42$3, _templateObject43$3, _templateObject44$3, _templateObject45$3, _templateObject46$3, _templateObject47$3, _templateObject48$3, _templateObject49$3;

// From the golem recall through the Old Guy. Ported from golemRecall(),
// outpost(), recallCaliginous(), pullPrayerbead(), farmPrayerbeads() and the
// stashbox steps in seaMonkees() in UnderTheSea.ash.

var outpost = $location(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["The Mer-Kin Outpost"])));
var sword$1 = swordOfSWords;
var habitatFightsLeft = () => get$1("_monsterHabitatsFightsLeft");
var habitatsRecalled = () => get$1("_monsterHabitatsRecalled");
var lockkeyHunt = () => get$1("merkinLockkeyMonster") !== null;
/** Item drops matter here: few forcers, or no shadow rift to fall back on. */
var scaleHunt = () => (highShiny() || lowShiny() || !haveItem($item(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["closed-circuit pay phone"]))))) && kolmafia.itemAmount($item(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["pristine fish scale"])))) < 6;

/** The outpost loop runs until the stashbox turns up or the corral opens, and through steps 6 to 8. */
function outpostActive() {
  var step = questStep("questS02Monkees");
  return kolmafia.itemAmount($item(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral(["Mer-kin stashbox"])))) === 0 && !get$1("corralUnlocked") || step >= 6 && step <= 8;
}

/** Kits without the CyberRealm route Back-to-the-Future the abyss from the outpost. */
function bofaCaliginous() {
  var step = questStep("questS02Monkees");
  return outpostActive() && inSeaPath() && !momNCyber() && lassoShadow() && habitatsRecalled() === 2 && habitatFightsLeft() === 0 && get$1("momSeaMonkeeProgress") < 40 && step >= 9 && step <= 12;
}
function outpostGear() {
  var lockkey = lockkeyHunt();
  var gear = new Gear(lockkey ? "-combat,sea" : "item drop,sea", outpost);
  if (habitatFightsLeft() === 1 && habitatsRecalled() === 2 && have$g($familiar(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteral(["Patriotic Eagle"]))))) {
    gear.fam($familiar(_templateObject6$3 || (_templateObject6$3 = _taggedTemplateLiteral(["Patriotic Eagle"]))));
  } else if (doSWord() && outpost.turnsSpent < 26 && (habitatFightsLeft() === 0 || kolmafia.availableAmount($item(_templateObject7$3 || (_templateObject7$3 = _taggedTemplateLiteral(["crayon shavings"])))) >= 9)) {
    gear.fam(sword$1);
  } else if (scaleHunt()) {
    gear.forRole("itdrop");
  } else {
    gear.forRole("-combat");
  }
  gear.bathysphere(lockkey ? $item.none : $item(_templateObject8$3 || (_templateObject8$3 = _taggedTemplateLiteral(["toy Cupid bow"]))));
  if (habitatFightsLeft() === 1 && habitatsRecalled() === 2 && !have$g($effect(_templateObject9$3 || (_templateObject9$3 = _taggedTemplateLiteral(["Everything Looks Purple"])))) && haveItem($item(_templateObject0$3 || (_templateObject0$3 = _taggedTemplateLiteral(["Roman Candelabra"]))))) {
    gear.need($item(_templateObject1$3 || (_templateObject1$3 = _taggedTemplateLiteral(["Roman Candelabra"]))));
  } else {
    gear.baseball();
  }
  if (inAftercore() && get$1("lassoTrainingCount") < 20) {
    gear.need($item(_templateObject10$3 || (_templateObject10$3 = _taggedTemplateLiteral(["sea cowboy hat"]))), $item(_templateObject11$3 || (_templateObject11$3 = _taggedTemplateLiteral(["sea chaps"]))));
  }
  if (get$1("lastCopyableMonster") === $monster(_templateObject12$3 || (_templateObject12$3 = _taggedTemplateLiteral(["Black Crayon Golem"]))) && get$1("_backUpUses") < 7 && haveItem($item(_templateObject13$3 || (_templateObject13$3 = _taggedTemplateLiteral(["backup camera"])))) && (outpost.turnsSpent < 26 || lockkey)) {
    gear.need($item(_templateObject14$3 || (_templateObject14$3 = _taggedTemplateLiteral(["backup camera"]))));
  } else if (get$1("_bczSweatBulletsCasts") < 9 && !highShiny()) {
    gear.ifEquip($item(_templateObject15$3 || (_templateObject15$3 = _taggedTemplateLiteral(["blood cubic zirconia"]))));
  } else if (lowShiny()) {
    gear.ifEquip($item(_templateObject16$3 || (_templateObject16$3 = _taggedTemplateLiteral(["Congressional Medal of Insanity"]))));
  }
  var habitat = get$1("_monsterHabitatsMonster");
  if ((habitat === $monster(_templateObject17$3 || (_templateObject17$3 = _taggedTemplateLiteral(["eye in the darkness"]))) || habitat === $monster(_templateObject18$3 || (_templateObject18$3 = _taggedTemplateLiteral(["slithering thing"])))) && habitatFightsLeft() > 0) {
    gear.need($item(_templateObject19$3 || (_templateObject19$3 = _taggedTemplateLiteral(["shark jumper"]))), $item(_templateObject20$3 || (_templateObject20$3 = _taggedTemplateLiteral(["scale-mail underwear"]))));
  }
  if ((gear.familiar ?? kolmafia.myFamiliar()) !== sword$1) gear.need($item(_templateObject21$3 || (_templateObject21$3 = _taggedTemplateLiteral(["Monodent of the Sea"]))));
  return lockkey ? gear.delay() : gear.freeKill();
}
var OutpostQuest = {
  name: "Outpost",
  tasks: [{
    name: "Golem recall",
    ready: () => questStep("questS02Monkees") === 6 && inSeaPath() && !highShiny() && kolmafia.haveSkill($skill(_templateObject22$3 || (_templateObject22$3 = _taggedTemplateLiteral(["Just the Facts"])))),
    completed: () => get$1("_monsterHabitatsMonster") !== null || questStep("questS02Monkees") > 6,
    outfit: () => new Gear("item drop").forRole(have$g($familiar(_templateObject23$3 || (_templateObject23$3 = _taggedTemplateLiteral(["Red-Nosed Snapper"])))) ? "itdrop" : "-combat").ifEquip($item(_templateObject24$3 || (_templateObject24$3 = _taggedTemplateLiteral(["legendary seal-clubbing club"]))), $item(_templateObject25$3 || (_templateObject25$3 = _taggedTemplateLiteral(["McHugeLarge left pole"])))).bathysphere($item(_templateObject26$3 || (_templateObject26$3 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit(),
    prepare: () => {
      if (kolmafia.myFamiliar() === $familiar(_templateObject27$3 || (_templateObject27$3 = _taggedTemplateLiteral(["Red-Nosed Snapper"])))) trackPhylum($phylum(_templateObject28$3 || (_templateObject28$3 = _taggedTemplateLiteral(["construct"]))));
    },
    do: () => {
      summon($monster(_templateObject29$3 || (_templateObject29$3 = _taggedTemplateLiteral(["Black Crayon Golem"]))), () => new Gear("item drop").ifEquip($item(_templateObject30$3 || (_templateObject30$3 = _taggedTemplateLiteral(["legendary seal-clubbing club"]))), $item(_templateObject31$3 || (_templateObject31$3 = _taggedTemplateLiteral(["McHugeLarge left pole"])))).outfit().dress());
    },
    limit: {
      tries: 1
    }
  }, {
    // The Old Guy's errand brings the black glass along with it.
    name: "Black glass for the abyss",
    ready: () => bofaCaliginous() && !have$g($item(_templateObject32$3 || (_templateObject32$3 = _taggedTemplateLiteral(["black glass"])))),
    completed: () => have$g($item(_templateObject33$3 || (_templateObject33$3 = _taggedTemplateLiteral(["black glass"])))),
    do: oldGuyTurn
  }, _objectSpread2({
    name: "Recall the abyss",
    ready: bofaCaliginous,
    completed: () => !bofaCaliginous()
  }, withHooks(recallCaliginous(), {
    before: () => {
      if (!have$g($item(_templateObject34$3 || (_templateObject34$3 = _taggedTemplateLiteral(["Elf Guard SCUBA tank"]))))) pullSequence($item(_templateObject35$3 || (_templateObject35$3 = _taggedTemplateLiteral(["Elf Guard SCUBA tank"]))));
    }
  })), {
    name: "Search for the stashbox",
    ready: outpostActive,
    completed: () => !outpostActive(),
    before: () => {
      if (ncForceEstimate() >= 5 && have$g($effect(_templateObject36$3 || (_templateObject36$3 = _taggedTemplateLiteral(["Driving Waterproofly"]))))) {
        pillKeeper("free familiar");
      }
      // With no squint and few forcers, burn the baseball now: the pull it
      // would save may be needed for a pearl necklace.
      if (inSeaPath() && !kolmafia.haveSkill($skill(_templateObject37$3 || (_templateObject37$3 = _taggedTemplateLiteral(["Steely-Eyed Squint"])))) && ncForceEstimate() < 4 && get$1("baseballTeam").includes("773") && baseballPlayers() === 9) {
        baseballD();
      }
      if (outpost.turnsSpent < 5) _set("stashboxChecked", "0");
      var checked = get$1("stashboxChecked");
      if (["1", "2", "3"].every(n => checked.includes(n))) {
        throw new Error("All stashbox locations checked but no stashbox — something went wrong");
      }
    },
    outfit: () => outpostGear().outfit(),
    prepare: () => {
      if (kolmafia.myFamiliar() === sword$1 || scaleHunt()) mood("itdrop");
      if (lockkeyHunt()) mood("-combat");
    },
    do: outpost,
    post: () => {
      if ([$item(_templateObject38$3 || (_templateObject38$3 = _taggedTemplateLiteral(["Grandma's Note"]))), $item(_templateObject39$3 || (_templateObject39$3 = _taggedTemplateLiteral(["Grandma's Fuchsia Yarn"]))), $item(_templateObject40$3 || (_templateObject40$3 = _taggedTemplateLiteral(["Grandma's Chartreuse Yarn"])))].every(item => kolmafia.itemAmount(item) > 0)) {
        var familiar = pickFamiliar("itdrop");
        if (familiar) kolmafia.useFamiliar(familiar);
        kolmafia.equip($item(_templateObject41$3 || (_templateObject41$3 = _taggedTemplateLiteral(["really, really nice swimming trunks"]))));
        kolmafia.cliExecute("grandpa note");
      }
      if (!outpostActive()) kolmafia.refreshStatus();
    }
  }, {
    name: "Open the stashbox",
    ready: () => kolmafia.itemAmount($item(_templateObject42$3 || (_templateObject42$3 = _taggedTemplateLiteral(["Mer-kin stashbox"])))) === 1,
    completed: () => kolmafia.itemAmount($item(_templateObject43$3 || (_templateObject43$3 = _taggedTemplateLiteral(["Mer-kin stashbox"])))) === 0,
    do: () => {
      kolmafia.use($item(_templateObject44$3 || (_templateObject44$3 = _taggedTemplateLiteral(["Mer-kin stashbox"]))));
      kolmafia.use($item(_templateObject45$3 || (_templateObject45$3 = _taggedTemplateLiteral(["Mer-kin trailmap"]))));
      equipSwimTrunks();
      kolmafia.cliExecute("grandpa currents");
    },
    limit: {
      tries: 1
    }
  }, {
    // The day's pull is free where farming costs a turn, so take it first.
    name: "Pull a prayerbead",
    ready: () => kolmafia.pullsRemaining() > 0,
    completed: () => kolmafia.availableAmount($item(_templateObject46$3 || (_templateObject46$3 = _taggedTemplateLiteral(["Mer-kin prayerbeads"])))) >= 3 || pulledToday($item(_templateObject47$3 || (_templateObject47$3 = _taggedTemplateLiteral(["Mer-kin prayerbeads"])))),
    do: () => {
      pullSequence($item(_templateObject48$3 || (_templateObject48$3 = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))));
    },
    limit: {
      skip: 1
    }
  }, _objectSpread2({
    // Short on noncombat forcers, so get prayerbeads now while -combat is up.
    name: "Prayerbeads",
    ready: () => ncForceEstimate() < 4,
    completed: () => kolmafia.availableAmount($item(_templateObject49$3 || (_templateObject49$3 = _taggedTemplateLiteral(["Mer-kin prayerbeads"])))) >= 2
  }, farmPrayerbeads()), {
    name: "Old Guy",
    ready: () => questStep("questS01OldGuy") === 0,
    completed: () => questStep("questS01OldGuy") !== 0,
    do: oldGuyTurn
  }]
};

var _templateObject$2, _templateObject2$2, _templateObject3$2, _templateObject4$2, _templateObject5$2, _templateObject6$2, _templateObject7$2, _templateObject8$2, _templateObject9$2, _templateObject0$2, _templateObject1$2, _templateObject10$2, _templateObject11$2, _templateObject12$2, _templateObject13$2, _templateObject14$2, _templateObject15$2, _templateObject16$2, _templateObject17$2, _templateObject18$2, _templateObject19$2, _templateObject20$2, _templateObject21$2, _templateObject22$2, _templateObject23$2, _templateObject24$2, _templateObject25$2, _templateObject26$2, _templateObject27$2, _templateObject28$2, _templateObject29$2, _templateObject30$2, _templateObject31$2, _templateObject32$2, _templateObject33$2, _templateObject34$2, _templateObject35$2, _templateObject36$2, _templateObject37$2, _templateObject38$2, _templateObject39$2, _templateObject40$2, _templateObject41$2, _templateObject42$2, _templateObject43$2, _templateObject44$2, _templateObject45$2, _templateObject46$2, _templateObject47$2, _templateObject48$2, _templateObject49$2, _templateObject50$2, _templateObject51$2, _templateObject52$2, _templateObject53$2, _templateObject54$2;

// After the prism: spend the sand pennies, then the opt-in postloop steps
// (pilsners, pearls and the eagle's banish re-aim, the codpiece). Ported from
// the end of seaMonkees() and pearlPostloop() through prepCodpiece() in
// UnderTheSea.ash.

var flag = name => get$1(name, false);

// ─── PEARL FARMING / EAGLE BANISH RE-AIM ──────────────────────────────────────
// One walk serves both postloop prefs. seb_postLoopRunOutEagleBanish
// (experimental): the Patriotic Eagle farms pearl zones until the screech
// recharges, spends it on the first monster at the Smut Orc Logging Camp,
// which moves the leftover construct banish onto the orc phylum, and is done.
// seb_postLoopFarmPearls: when a pearl's mall price beats the ten turns its
// farm costs at valueOfAdventure, keep walking until every open zone's daily
// pearl is claimed.
//
// Free kills, free runs and fight-enders advance neither a zone's pearl
// progress nor screechCombats; only a combat fought to a plain win on a spent
// turn counts. _sebPearlFarm tells the combat script to fight that way.
//
// The walk's state lives in daily properties, so a rerun carries on with it:
//   _sebPearlWalk      "" not started, "on", or "done"
//   _sebPearlRundown   "on" while the re-aim is still wanted
//   _sebPearlSpent     turns the walk has spent
//   _sebPearlClaimed   pearls already claimed when the walk started
//   _sebScreechNext / _sebScreechFallback / _sebScreechMisses: the re-aim's
//                      back-off, in walk turns

var PEARL_ZONES = [[$location(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["Anemone Mine"]))), "spooky", "_unblemishedPearlAnemoneMine"], [$location(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["The Dive Bar"]))), "sleaze", "_unblemishedPearlDiveBar"], [$location(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["Madness Reef"]))), "stench", "_unblemishedPearlMadnessReef"], [$location(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["The Marinara Trench"]))), "hot", "_unblemishedPearlMarinaraTrench"], [$location(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["The Briniest Deepests"]))), "cold", "_unblemishedPearlTheBriniestDeepests"]];
function pearlElement(zone) {
  var found = PEARL_ZONES.find(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
      location = _ref2[0];
    return location === zone;
  });
  if (!found) throw new Error("".concat(zone, " is not a pearl zone"));
  return found[1];
}
var claimedCount = () => PEARL_ZONES.filter(_ref3 => {
  var _ref4 = _slicedToArray(_ref3, 3),
    pref = _ref4[2];
  return flag(pref);
}).length;
/** The first open zone with today's pearl unclaimed. */
var currentZone = () => {
  var _PEARL_ZONES$find;
  return (_PEARL_ZONES$find = PEARL_ZONES.find(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 3),
      zone = _ref6[0],
      pref = _ref6[2];
    return !flag(pref) && kolmafia.canAdventure(zone);
  })) === null || _PEARL_ZONES$find === void 0 ? void 0 : _PEARL_ZONES$find[0];
};
var counter = name => get$1(name, 0);
var setCounter = (name, value) => _set(name, value);
var spent = () => counter("_sebPearlSpent");
var walking = () => get$1("_sebPearlWalk") === "on";
var rundown = () => walking() && get$1("_sebPearlRundown") === "on";
var farming = () => walking() && pearlFarmWorthIt();

/**
 * Pearl progress pays its full 10% a combat only at 18 of the zone's element.
 * Checked every turn: the resistance buffs run out mid-zone.
 */
function pearlResCheck(zone) {
  var element = pearlElement(zone);
  mood("".concat(element, "res"));
  mood("combat");
  var res = kolmafia.numericModifier("".concat(element, " resistance"));
  if (res < 18) {
    throw new Error("Pearl farming needs 18 ".concat(element, " resistance for full speed in ").concat(zone, " and only ") + "".concat(Math.floor(res), " is up; add ").concat(element, " resistance gear or buffs and rerun."));
  }
}

/** Empty Hagnk's once per ascension: the run is over, so everything may as well be on hand. */
function pullEverything() {
  if (get$1("lastEmptiedStorage") === kolmafia.myAscensions()) return;
  if (!kolmafia.cliExecute("pull all")) throw new Error("pull all didn't empty storage.");
}

/** A guaranteed Lucky! for The Brinier Deepers' Haggling, which grants 20 turns of Fishy. */
function cloverFishyReady() {
  if (!flag("seb_postLoopCloverFishy") || kolmafia.myAdventures() < 3) return false;
  if (!kolmafia.canAdventure($location(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteral(["The Brinier Deepers"]))))) return false;
  var aug2Free = kolmafia.haveSkill($skill(_templateObject7$2 || (_templateObject7$2 = _taggedTemplateLiteral(["Aug. 2nd: Find an Eleven-Leaf Clover Day"])))) && !get$1("_aug2Cast") && get$1("_augSkillsCast") < 5;
  return kolmafia.haveEffect($effect(_templateObject8$2 || (_templateObject8$2 = _taggedTemplateLiteral(["Lucky!"])))) > 0 || aug2Free || kolmafia.itemAmount($item(_templateObject9$2 || (_templateObject9$2 = _taggedTemplateLiteral(["11-leaf clover"])))) > 0 || get$1("autoSatisfyWithCoinmasters") && get$1("_cloversPurchased") < 3;
}
function reportRundownStalled(why) {
  kolmafia.print("seb_postLoopRunOutEagleBanish: ".concat(why, " after ").concat(spent(), " turns; the Patriotic Screech is still aimed at the construct phylum."), "red");
  kolmafia.print("Crates are constructs, so garbo will abort on its crate setup. Re-aim by hand: take out the Patriotic Eagle and screech in The Smut Orc Logging Camp.", "red");
}

/** Whether a pearl mall-buys for more than ten farming turns are worth. Asked once a day. */
function pearlFarmWorthIt() {
  if (!flag("seb_postLoopFarmPearls")) return false;
  var cached = get$1("_sebPearlFarmWorth");
  if (cached !== "") return cached === "true";
  var pearlPrice = kolmafia.mallPrice($item(_templateObject0$2 || (_templateObject0$2 = _taggedTemplateLiteral(["unblemished pearl"]))));
  var voa = get$1("valueOfAdventure");
  if (pearlPrice > 0 && voa <= 0) {
    // garbo's own default; an unset zero would make farming always win.
    voa = 4000;
    kolmafia.print("seb_postLoopFarmPearls: valueOfAdventure isn't set, assuming ".concat(voa, "."), "blue");
  }
  var worth = false;
  if (pearlPrice <= 0) {
    kolmafia.print("seb_postLoopFarmPearls: couldn't get a mall price for the pearl; skipping the farm.", "red");
  } else if (pearlPrice <= voa * 10) {
    kolmafia.print("seb_postLoopFarmPearls: a pearl mall-buys at ".concat(pearlPrice, " and ten farming turns are worth ").concat(voa * 10, " -- buying beats farming today."), "blue");
  } else {
    kolmafia.print("SEB: postloop: pearls sell for ".concat(pearlPrice, " against ").concat(voa * 10, " for ten farming turns -- farming"), "blue");
    worth = true;
  }
  _set("_sebPearlFarmWorth", worth);
  return worth;
}
var rundownWanted = () => flag("seb_postLoopRunOutEagleBanish") && get$1("banishedPhyla").includes("construct");

/**
 * The eagle's combats recharge the screech, so it stays out until the
 * re-aim; after that the Hound Dog's +combat means fewer noncombats per pearl.
 */
function walkFamiliar() {
  if (rundown()) return $familiar(_templateObject1$2 || (_templateObject1$2 = _taggedTemplateLiteral(["Patriotic Eagle"])));
  if (kolmafia.haveFamiliar($familiar(_templateObject10$2 || (_templateObject10$2 = _taggedTemplateLiteral(["Jumpsuited Hound Dog"]))))) return $familiar(_templateObject11$2 || (_templateObject11$2 = _taggedTemplateLiteral(["Jumpsuited Hound Dog"])));
  if (kolmafia.myFamiliar() !== $familiar.none) return kolmafia.myFamiliar();
  var fallback = $familiars(_templateObject12$2 || (_templateObject12$2 = _taggedTemplateLiteral(["Patriotic Eagle, Grouper Groupie"]))).find(f => kolmafia.haveFamiliar(f));
  if (!fallback) throw new Error("postloop pearls: no familiar out; take out any familiar and rerun.");
  return fallback;
}
function endRundown() {
  _set("_sebPearlRundown", "off");
}

/** What the re-aim fight left in _sebScreechFired, and the back-off it calls for. */
function readScreech() {
  // banishedPhyla is the ground truth; the recorded cast only explains a
  // banish that did not move.
  var fired = get$1("_sebScreechFired");
  var backOff = next => {
    setCounter("_sebScreechMisses", 0);
    if (next) setCounter("_sebScreechNext", spent() + 11);
    setCounter("_sebScreechFallback", spent() + 11);
  };
  if (!get$1("banishedPhyla").includes("construct")) {
    kolmafia.print(fired === "true" ? "Patriotic Screech re-aimed at smut orcs after ".concat(spent(), " turns; constructs are free.") : "The construct banish is gone after ".concat(spent(), " turns; constructs are free."), "blue");
    endRundown();
  } else if (fired === "true") {
    reportRundownStalled("the screech was cast but constructs are still banished");
    endRundown();
  } else if (fired === "false") {
    // Offered but rejected: back off both paths.
    backOff(true);
  } else if (fired === "unready") {
    // Not offered: wait for a farm fight to see it again.
    backOff(false);
  } else {
    // No cast attempted twice: back off both paths.
    setCounter("_sebScreechMisses", counter("_sebScreechMisses") + 1);
    if (counter("_sebScreechMisses") >= 2) backOff(true);
  }
}

/** Drink a pilsner when out of adventures, cracking a six-pack if needed. */
function pilsnerForAdventures() {
  if (kolmafia.itemAmount($item(_templateObject13$2 || (_templateObject13$2 = _taggedTemplateLiteral(["astral pilsner"])))) === 0 && kolmafia.itemAmount($item(_templateObject14$2 || (_templateObject14$2 = _taggedTemplateLiteral(["astral six-pack"])))) > 0) {
    kolmafia.use($item(_templateObject15$2 || (_templateObject15$2 = _taggedTemplateLiteral(["astral six-pack"]))));
  }
  if (kolmafia.itemAmount($item(_templateObject16$2 || (_templateObject16$2 = _taggedTemplateLiteral(["astral pilsner"])))) === 0) {
    throw new Error("seb_runOutEagleBanish: out of adventures and no astral pilsner left to drink.");
  }
  uneffect($effect(_templateObject17$2 || (_templateObject17$2 = _taggedTemplateLiteral(["Donho's Bubbly Ballad"]))));
  if (kolmafia.haveSkill($skill(_templateObject18$2 || (_templateObject18$2 = _taggedTemplateLiteral(["The Ode to Booze"]))))) kolmafia.useSkill($skill(_templateObject19$2 || (_templateObject19$2 = _taggedTemplateLiteral(["The Ode to Booze"]))));
  kolmafia.drink($item(_templateObject20$2 || (_templateObject20$2 = _taggedTemplateLiteral(["astral pilsner"]))));
}

// ─── PILSNERS ─────────────────────────────────────────────────────────────────

/** Liver left once any capacity the gear or familiar lends is set aside, since whatever runs next re-dresses. */
function pilsnerLiver() {
  var liver = kolmafia.inebrietyLimit();
  var _iterator = _createForOfIteratorHelper(kolmafia.Slot.all()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var slot = _step.value;
      liver -= Math.floor(kolmafia.numericModifier(kolmafia.equippedItem(slot), "Liver Capacity"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (kolmafia.myFamiliar() !== $familiar.none) {
    liver -= Math.floor(kolmafia.numericModifier(kolmafia.myFamiliar(), "Liver Capacity", kolmafia.familiarWeight(kolmafia.myFamiliar()), $item.none));
  }
  return Math.min(liver, kolmafia.inebrietyLimit());
}
var pilsnersLeft = () => kolmafia.itemAmount($item(_templateObject21$2 || (_templateObject21$2 = _taggedTemplateLiteral(["astral pilsner"])))) + 6 * kolmafia.itemAmount($item(_templateObject22$2 || (_templateObject22$2 = _taggedTemplateLiteral(["astral six-pack"]))));

/** seb_usePilsners: drink the astral pilsners out. */
function usePilsners() {
  if (kolmafia.storageAmount($item(_templateObject23$2 || (_templateObject23$2 = _taggedTemplateLiteral(["astral pilsner"])))) > 0 || kolmafia.storageAmount($item(_templateObject24$2 || (_templateObject24$2 = _taggedTemplateLiteral(["astral six-pack"])))) > 0) {
    pullEverything();
  }
  var liver = pilsnerLiver();
  var drunk = 0;
  var odeWarned = false;
  while (kolmafia.myInebriety() < liver) {
    if (kolmafia.itemAmount($item(_templateObject25$2 || (_templateObject25$2 = _taggedTemplateLiteral(["astral pilsner"])))) === 0 && kolmafia.itemAmount($item(_templateObject26$2 || (_templateObject26$2 = _taggedTemplateLiteral(["astral six-pack"])))) > 0 && !kolmafia.use($item(_templateObject27$2 || (_templateObject27$2 = _taggedTemplateLiteral(["astral six-pack"]))))) {
      break;
    }
    var before = kolmafia.itemAmount($item(_templateObject28$2 || (_templateObject28$2 = _taggedTemplateLiteral(["astral pilsner"]))));
    if (before === 0) break;
    if (kolmafia.haveEffect($effect(_templateObject29$2 || (_templateObject29$2 = _taggedTemplateLiteral(["Ode to Booze"])))) === 0 && kolmafia.haveSkill($skill(_templateObject30$2 || (_templateObject30$2 = _taggedTemplateLiteral(["The Ode to Booze"]))))) {
      if (!uneffect($effect(_templateObject31$2 || (_templateObject31$2 = _taggedTemplateLiteral(["Donho's Bubbly Ballad"]))))) {
        kolmafia.print("seb_usePilsners: Donho's Bubbly Ballad wouldn't shrug.", "blue");
      }
      if (!kolmafia.useSkill(1, $skill(_templateObject32$2 || (_templateObject32$2 = _taggedTemplateLiteral(["The Ode to Booze"])))) && !odeWarned) {
        kolmafia.print("seb_usePilsners: no Ode to Booze; drinking without it.", "blue");
        odeWarned = true;
      }
    }
    if (!kolmafia.drink($item(_templateObject33$2 || (_templateObject33$2 = _taggedTemplateLiteral(["astral pilsner"]))))) break;
    // A mime army shotglass makes the day's first small drink free, so
    // progress is the pilsner count falling, not inebriety.
    if (kolmafia.itemAmount($item(_templateObject34$2 || (_templateObject34$2 = _taggedTemplateLiteral(["astral pilsner"])))) >= before) break;
    drunk++;
  }
  kolmafia.print("seb_usePilsners: drank ".concat(drunk, ", ").concat(pilsnersLeft(), " pilsners left."), "blue");
}

// ─── THE CODPIECE ─────────────────────────────────────────────────────────────

/** seb_postLoopPrepCodpiece: five unblemished pearls slotted for the next run. */
function prepCodpiece() {
  if (!haveItem($item(_templateObject35$2 || (_templateObject35$2 = _taggedTemplateLiteral(["The Eternity Codpiece"]))))) {
    throw new Error("seb_postLoopPrepCodpiece: you don't own The Eternity Codpiece.");
  }
  pullEverything();
  codpiece("none");
  var pearl = $item(_templateObject36$2 || (_templateObject36$2 = _taggedTemplateLiteral(["unblemished pearl"])));
  if (kolmafia.itemAmount(pearl) < 5) kolmafia.retrieveItem(5, pearl);
  if (kolmafia.itemAmount(pearl) < 5) {
    throw new Error("seb_postLoopPrepCodpiece: couldn't get to five unblemished pearls (have ".concat(kolmafia.itemAmount(pearl), ")."));
  }
  codpiece(Array(5).fill("unblemished pearl").join(", "));
  kolmafia.print("Codpiece loaded: five unblemished pearls slotted for the next run.", "blue");
}

// ─── THE QUESTS ───────────────────────────────────────────────────────────────

/** After the prism: spend the sand pennies and see the council. */
var PathCleanupQuest = {
  name: "Path cleanup",
  ready: () => inSeaPath() && questStep("questL13Final") === 999,
  tasks: [_objectSpread2(_objectSpread2({
    name: "Sand pennies",
    completed: () => kolmafia.itemAmount($item(_templateObject37$2 || (_templateObject37$2 = _taggedTemplateLiteral(["sand penny"])))) <= 10
  }, action(() => {
    while (kolmafia.itemAmount($item(_templateObject38$2 || (_templateObject38$2 = _taggedTemplateLiteral(["sand penny"])))) > 30) {
      kolmafia.buy($coinmaster(_templateObject39$2 || (_templateObject39$2 = _taggedTemplateLiteral(["Wet Crap For Sale"]))), 1, $item(_templateObject40$2 || (_templateObject40$2 = _taggedTemplateLiteral(["water-logged pill"]))));
    }
    while (kolmafia.itemAmount($item(_templateObject41$2 || (_templateObject41$2 = _taggedTemplateLiteral(["sand penny"])))) > 10) {
      kolmafia.buy($coinmaster(_templateObject42$2 || (_templateObject42$2 = _taggedTemplateLiteral(["Wet Crap For Sale"]))), 1, $item(_templateObject43$2 || (_templateObject43$2 = _taggedTemplateLiteral(["waterlogged scroll of healing"]))));
    }
  })), {}, {
    limit: {
      tries: 1
    }
  }), _objectSpread2(_objectSpread2({
    // The storage pull pilsners may need is refused before the prism breaks.
    name: "Council",
    completed: () => get$1("_sebCouncilVisited", false)
  }, action(() => {
    kolmafia.council();
    kolmafia.council();
    _set("_sebCouncilVisited", true);
  })), {}, {
    limit: {
      tries: 1
    }
  })]
};

/** The opt-in postloop steps. Each gates on its own seb_* pref. */
var PostloopQuest = {
  name: "Postloop",
  tasks: [_objectSpread2(_objectSpread2({
    // First, since the later ones can abort and leave the supply undrunk.
    name: "Drink the astral pilsners",
    ready: () => flag("seb_usePilsners"),
    completed: () => kolmafia.myInebriety() >= pilsnerLiver() || pilsnersLeft() === 0
  }, action(usePilsners)), {}, {
    limit: {
      skip: 1
    }
  }), _objectSpread2(_objectSpread2({
    name: "Start the pearl walk",
    ready: () => rundownWanted() || pearlFarmWorthIt(),
    completed: () => get$1("_sebPearlWalk") !== ""
  }, action(() => {
    if (rundownWanted()) {
      kolmafia.print("SEB: postloop: re-aiming the Patriotic Screech off the construct phylum", "blue");
      if (!kolmafia.haveFamiliar($familiar(_templateObject44$2 || (_templateObject44$2 = _taggedTemplateLiteral(["Patriotic Eagle"]))))) {
        throw new Error("seb_postLoopRunOutEagleBanish: no Patriotic Eagle in the terrarium, so the screech can't be re-aimed.");
      }
      if (!kolmafia.canAdventure($location(_templateObject45$2 || (_templateObject45$2 = _taggedTemplateLiteral(["The Smut Orc Logging Camp"]))))) {
        throw new Error("seb_postLoopRunOutEagleBanish: The Smut Orc Logging Camp isn't open, and the re-aim needs a place to screech.");
      }
    }
    pullEverything();
    _set("_sebPearlRundown", rundownWanted() ? "on" : "off");
    setCounter("_sebPearlClaimed", claimedCount());
    setCounter("_sebPearlSpent", 0);
    // The combat script sets _sebScreechReady from each eagle fight's
    // skill list. screechCombats misses eagle chatter, so it only times
    // the fallback.
    _set("_sebScreechReady", "");
    setCounter("_sebScreechNext", 0);
    setCounter("_sebScreechFallback", Math.max(0, Math.min(get$1("screechCombats"), 11)));
    setCounter("_sebScreechMisses", 0);
    _set("_sebPearlWalk", "on");
  })), {}, {
    limit: {
      tries: 1
    }
  }), {
    // One fight at the Smut Orc Logging Camp moves the banish onto the orc
    // phylum. Zone progress holds while stepping out.
    name: "Re-aim the screech",
    ready: () => rundown() && kolmafia.myAdventures() > 0 && spent() >= counter("_sebScreechNext") && (get$1("_sebScreechReady") === "true" || spent() >= counter("_sebScreechFallback")),
    completed: () => !rundown(),
    outfit: {
      familiar: $familiar(_templateObject46$2 || (_templateObject46$2 = _taggedTemplateLiteral(["Patriotic Eagle"])))
    },
    prepare: () => {
      _set("_sebScreechFired", "");
      _set("_sebScreechReaim", true);
    },
    do: $location(_templateObject47$2 || (_templateObject47$2 = _taggedTemplateLiteral(["The Smut Orc Logging Camp"]))),
    postAdventure: false,
    post: () => {
      _set("_sebScreechReaim", false);
      setCounter("_sebPearlSpent", spent() + 1);
      readScreech();
    }
  }, _objectSpread2({
    name: "Rundown out of time",
    ready: () => rundown() && spent() >= 40,
    completed: () => !rundown()
  }, action(() => {
    reportRundownStalled("the screech still isn't ready after 40 turns");
    endRundown();
  })), _objectSpread2({
    name: "End the pearl walk",
    ready: () => walking() && (!rundown() && !farming() || currentZone() === undefined),
    completed: () => !walking()
  }, action(() => {
    if (rundown()) reportRundownStalled("no open pearl zone with today's pearl unclaimed");
    if (farming()) {
      for (var _i = 0, _PEARL_ZONES = PEARL_ZONES; _i < _PEARL_ZONES.length; _i++) {
        var _PEARL_ZONES$_i = _slicedToArray(_PEARL_ZONES[_i], 3),
          zone = _PEARL_ZONES$_i[0],
          pref = _PEARL_ZONES$_i[2];
        if (!flag(pref)) kolmafia.print("seb_postLoopFarmPearls: ".concat(zone, " left unclaimed."), "red");
      }
      kolmafia.print("seb_postLoopFarmPearls: ".concat(claimedCount() - counter("_sebPearlClaimed"), " pearls claimed in ").concat(spent(), " turns."), "blue");
    }
    _set("_sebPearlWalk", "done");
  })), _objectSpread2({
    name: "Pilsner for adventures",
    ready: () => walking() && kolmafia.myAdventures() === 0,
    completed: () => kolmafia.myAdventures() > 0
  }, action(pilsnerForAdventures)), {
    name: "Lucky Fishy",
    ready: () => walking() && kolmafia.haveEffect($effect(_templateObject48$2 || (_templateObject48$2 = _taggedTemplateLiteral(["Fishy"])))) === 0 && cloverFishyReady(),
    completed: () => kolmafia.haveEffect($effect(_templateObject49$2 || (_templateObject49$2 = _taggedTemplateLiteral(["Fishy"])))) > 0,
    before: getLucky,
    outfit: () => new Gear("combat,sea", $location(_templateObject50$2 || (_templateObject50$2 = _taggedTemplateLiteral(["The Brinier Deepers"])))).bathysphere().outfit(),
    do: () => {
      if (kolmafia.haveEffect($effect(_templateObject51$2 || (_templateObject51$2 = _taggedTemplateLiteral(["Lucky!"])))) === 0) return;
      kolmafia.print("SEB: postloop pearls: Lucky! trip to The Brinier Deepers for 20 turns of Fishy");
      return $location(_templateObject52$2 || (_templateObject52$2 = _taggedTemplateLiteral(["The Brinier Deepers"])));
    },
    postAdventure: false,
    // A wanderer can spend the turn without the Lucky!; one more visit
    // collects The Haggling.
    limit: {
      skip: 2
    }
  }, _objectSpread2({
    name: "Out of Fishy",
    ready: () => walking() && kolmafia.haveEffect($effect(_templateObject53$2 || (_templateObject53$2 = _taggedTemplateLiteral(["Fishy"])))) === 0,
    completed: () => !walking() || kolmafia.haveEffect($effect(_templateObject54$2 || (_templateObject54$2 = _taggedTemplateLiteral(["Fishy"])))) > 0
  }, action(() => {
    if (rundown()) {
      reportRundownStalled("out of Fishy, so no pearl zone is reachable");
      endRundown();
      _set("_sebPearlWalk", "done");
      return;
    }
    throw new Error("postloop pearls: out of Fishy mid-zone after ".concat(spent(), " turns with ").concat(claimedCount() - counter("_sebPearlClaimed"), " pearls claimed; today's zone progress won't survive rollover."));
  })), {
    // Resistance to the line, then +combat with the rest: the 200 weight
    // means no combat piece outbids a needed res level, and "18 max" stops
    // crediting res past the line.
    name: "Pearl zone",
    ready: walking,
    completed: () => !walking(),
    outfit: () => {
      var zone = currentZone() ?? $location.none;
      return new Gear("200 ".concat(pearlElement(zone), " res 18 max, combat,sea"), zone).fam(walkFamiliar()).bathysphere().outfit();
    },
    prepare: () => {
      if (spent() >= 90) {
        throw new Error("postloop pearls: 90 turns spent without finishing; something is wrong, bailing out.");
      }
      pearlResCheck(currentZone() ?? $location.none);
      _set("_sebPearlFarm", true);
    },
    do: () => currentZone() ?? $location.none,
    postAdventure: false,
    post: () => {
      _set("_sebPearlFarm", false);
      setCounter("_sebPearlSpent", spent() + 1);
    }
  }, _objectSpread2(_objectSpread2({
    name: "Load the codpiece",
    ready: () => flag("seb_postLoopPrepCodpiece") && !walking(),
    completed: () => get$1("_sebCodpieceLoaded", false)
  }, action(() => {
    prepCodpiece();
    _set("_sebCodpieceLoaded", true);
  })), {}, {
    limit: {
      tries: 1
    }
  }), _objectSpread2(_objectSpread2({
    name: "Postloop command",
    ready: () => get$1("seb_postloopCommand") !== "" && !walking(),
    completed: () => get$1("_sebPostloopCommandRan", false)
  }, action(() => {
    _set("_sebPostloopCommandRan", true);
    kolmafia.cliExecute(get$1("seb_postloopCommand"));
  })), {}, {
    limit: {
      tries: 1
    }
  })]
};

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7$1, _templateObject8$1, _templateObject9$1, _templateObject0$1, _templateObject1$1, _templateObject10$1, _templateObject11$1, _templateObject12$1, _templateObject13$1, _templateObject14$1, _templateObject15$1, _templateObject16$1, _templateObject17$1, _templateObject18$1, _templateObject19$1, _templateObject20$1, _templateObject21$1, _templateObject22$1, _templateObject23$1, _templateObject24$1, _templateObject25$1, _templateObject26$1, _templateObject27$1, _templateObject28$1, _templateObject29$1, _templateObject30$1, _templateObject31$1, _templateObject32$1, _templateObject33$1, _templateObject34$1, _templateObject35$1, _templateObject36$1, _templateObject37$1, _templateObject38$1, _templateObject39$1, _templateObject40$1, _templateObject41$1, _templateObject42$1, _templateObject43$1, _templateObject44$1, _templateObject45$1, _templateObject46$1, _templateObject47$1, _templateObject48$1, _templateObject49$1, _templateObject50$1, _templateObject51$1, _templateObject52$1, _templateObject53$1, _templateObject54$1, _templateObject55$1, _templateObject56$1, _templateObject57$1, _templateObject58$1, _templateObject59$1, _templateObject60$1, _templateObject61$1, _templateObject62$1, _templateObject63$1, _templateObject64$1, _templateObject65$1, _templateObject66$1, _templateObject67$1, _templateObject68$1, _templateObject69$1, _templateObject70$1, _templateObject71$1, _templateObject72$1, _templateObject73$1, _templateObject74$1, _templateObject75$1, _templateObject76$1, _templateObject77$1, _templateObject78$1, _templateObject79$1, _templateObject80$1, _templateObject81$1, _templateObject82$1, _templateObject83$1, _templateObject84$1, _templateObject85$1, _templateObject86$1, _templateObject87$1, _templateObject88$1, _templateObject89$1, _templateObject90$1, _templateObject91$1, _templateObject92$1, _templateObject93$1, _templateObject94$1, _templateObject95$1, _templateObject96$1, _templateObject97$1, _templateObject98$1, _templateObject99$1, _templateObject100$1, _templateObject101$1, _templateObject102$1, _templateObject103$1, _templateObject104$1, _templateObject105$1, _templateObject106$1, _templateObject107$1, _templateObject108$1, _templateObject109$1, _templateObject110$1, _templateObject111$1, _templateObject112$1, _templateObject113$1, _templateObject114$1, _templateObject115$1, _templateObject116$1, _templateObject117$1, _templateObject118$1, _templateObject119$1, _templateObject120$1, _templateObject121$1, _templateObject122$1, _templateObject123$1, _templateObject124$1, _templateObject125$1, _templateObject126$1, _templateObject127$1, _templateObject128$1, _templateObject129$1, _templateObject130$1, _templateObject131$1, _templateObject132$1, _templateObject133$1, _templateObject134$1, _templateObject135$1, _templateObject136$1, _templateObject137$1, _templateObject138$1, _templateObject139$1, _templateObject140$1, _templateObject141$1, _templateObject142$1, _templateObject143$1, _templateObject144$1, _templateObject145$1, _templateObject146$1, _templateObject147$1, _templateObject148$1, _templateObject149$1, _templateObject150$1, _templateObject151$1, _templateObject152$1, _templateObject153$1, _templateObject154$1, _templateObject155$1, _templateObject156$1, _templateObject157$1, _templateObject158$1, _templateObject159$1, _templateObject160$1, _templateObject161$1, _templateObject162$1, _templateObject163$1, _templateObject164$1, _templateObject165$1, _templateObject166$1, _templateObject167$1, _templateObject168$1, _templateObject169$1, _templateObject170$1, _templateObject171$1, _templateObject172$1, _templateObject173$1, _templateObject174$1, _templateObject175$1, _templateObject176$1, _templateObject177$1, _templateObject178$1, _templateObject179$1, _templateObject180$1, _templateObject181$1, _templateObject182$1, _templateObject183$1, _templateObject184$1, _templateObject185$1, _templateObject186$1, _templateObject187$1, _templateObject188$1, _templateObject189$1, _templateObject190$1, _templateObject191$1, _templateObject192$1, _templateObject193$1, _templateObject194$1, _templateObject195$1, _templateObject196$1, _templateObject197, _templateObject198;

// The seahorse branch: the diving helmet, Mom's rescue in the abyss, the
// corral, teflon ore, lasso training, the taming itself and the crappy
// disguise after it. Ported from unholyDiver() through postSeahorse() in
// UnderTheSea.ash. Every task reads its state from the game, so a rerun
// picks up wherever the last one stopped.

var wreck = $location(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["The Wreck of the Edgar Fitzsimmons"])));
var abyss = $location(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["The Caliginous Abyss"])));
var corral$1 = $location(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["The Coral Corral"])));
var rift = $location(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["Shadow Rift (The Misspelled Cemetary)"])));
var sword = swordOfSWords;
var helmetOn = () => kolmafia.toSlot(divingHelmet()) === $slot(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["hat"])));
var tamed = () => get$1("seahorseName") !== "";
var momProgress = () => get$1("momSeaMonkeeProgress");

// ─── THE ROUTE ────────────────────────────────────────────────────────────────

/**
 * The route through the diver, the abyss and the corral, by kit:
 *  - high shiny: S Word sea cow, then the abyss, max item diver, finish the corral;
 *  - squint, Mom and CyberRealm, a rift lasso and the zirconia: summon the diver,
 *    CyberRealm abyss, McTwist the corral;
 *  - anything else: the corral, the diver directly, then the abyss.
 * Picked once a day and kept in _sebSeahorseRoute, so a rerun stays on it.
 */

function route() {
  var value = get$1("_sebSeahorseRoute");
  if (value === "") {
    if (highShiny()) {
      value = "abyss:cheap,diver:direct,corral:collect";
    } else if (kolmafia.haveSkill($skill(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["Steely-Eyed Squint"])))) && momNCyber() && lassoShadow() && kolmafia.availableAmount($item(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["blood cubic zirconia"])))) > 0) {
      value = "diver:summon,abyss:cyberrealm,corral:drop";
    } else {
      value = "corral:collect,diver:direct,abyss:".concat(momNCyber() ? "cyberrealm" : "cheap");
    }
    _set("_sebSeahorseRoute", value);
  }
  return value.split(",");
}

/** Mom's progress the CyberRealm abyss stops at; the backup camera and catalog help after. */
function momTarget() {
  var target = 24;
  if (!haveItem($item(_templateObject8$1 || (_templateObject8$1 = _taggedTemplateLiteral(["backup camera"]))))) target += 4;
  if (!haveItem($item(_templateObject9$1 || (_templateObject9$1 = _taggedTemplateLiteral(["2002 Mr. Store Catalog"]))))) target += 12;
  return target;
}
var mcTwistDone = () => get$1("_epicMcTwistUsed");
var lassosDone = () => haveItem($item(_templateObject0$1 || (_templateObject0$1 = _taggedTemplateLiteral(["cursed monkey's paw"])))) || kolmafia.itemAmount($item(_templateObject1$1 || (_templateObject1$1 = _taggedTemplateLiteral(["sea lasso"])))) >= 6 || get$1("lassoTrainingCount") >= 20;
var leathersDone = () => (kolmafia.availableAmount($item(_templateObject10$1 || (_templateObject10$1 = _taggedTemplateLiteral(["sea chaps"])))) > 0 || tailpiece() !== $item.none) && kolmafia.availableAmount($item(_templateObject11$1 || (_templateObject11$1 = _taggedTemplateLiteral(["sea cowboy hat"])))) > 0;
function legDone(leg) {
  switch (leg) {
    case "diver:summon":
    case "diver:direct":
      return helmetOn();
    case "abyss:cheap":
      return !highShiny() || momProgress() >= 40;
    case "abyss:cyberrealm":
      return momProgress() >= momTarget();
    case "corral:collect":
      return leathersDone();
    case "corral:drop":
      return mcTwistDone() && lassosDone() && leathersDone();
  }
}

/** This leg is on today's route and every leg before it is done. */
function legReady() {
  for (var _len = arguments.length, legs = new Array(_len), _key = 0; _key < _len; _key++) {
    legs[_key] = arguments[_key];
  }
  if (tamed() || inAftercore()) return false;
  var legsToday = route();
  var index = legsToday.findIndex(leg => legs.includes(leg));
  return index >= 0 && legsToday.slice(0, index).every(legDone);
}
function routeDone() {
  if (tamed()) return true;
  if (inAftercore()) return helmetOn();
  return route().every(legDone);
}

// ─── UNHOLY DIVER ─────────────────────────────────────────────────────────────

var diverLeg = () => legReady("diver:summon", "diver:direct");
var summonLeg = () => legReady("diver:summon");
function diverBaseball() {
  if (baseballPlayers() >= 9 && get$1("baseballTeam").includes("745")) baseballD();
}
function diverChainReport() {
  return "".concat(kolmafia.availableAmount($item(_templateObject12$1 || (_templateObject12$1 = _taggedTemplateLiteral(["rusty broken diving helmet"])))), " broken helmet, ") + "".concat(kolmafia.itemAmount($item(_templateObject13$1 || (_templateObject13$1 = _taggedTemplateLiteral(["rusty porthole"])))), " porthole, ") + "".concat(kolmafia.itemAmount($item(_templateObject14$1 || (_templateObject14$1 = _taggedTemplateLiteral(["rusty rivet"])))), "/8 rivets");
}
var diver = $monster(_templateObject15$1 || (_templateObject15$1 = _taggedTemplateLiteral(["unholy diver"])));
var diverSummonable = () => differentiableQuantity(diver) > 0 || countSummons() >= 1;

/** A summoned diver: a mimic egg, the Time-Spinner, then summon(). */
function summonDiver() {
  return {
    outfit: () => {
      var gear = new Gear("item drop", wreck);
      var egg = diverForceReady() || kolmafia.itemAmount($item(_templateObject16$1 || (_templateObject16$1 = _taggedTemplateLiteral(["rusty rivet"])))) < 4;
      var familiar = egg ? $familiar(_templateObject17$1 || (_templateObject17$1 = _taggedTemplateLiteral(["Chest Mimic"]))) : $familiar(_templateObject18$1 || (_templateObject18$1 = _taggedTemplateLiteral(["Jill-of-All-Trades"])));
      if (kolmafia.haveFamiliar(familiar)) gear.fam(familiar);else gear.forRole("itdrop");
      return gear.diverSaber().ifEquip($item(_templateObject19$1 || (_templateObject19$1 = _taggedTemplateLiteral(["blood cubic zirconia"]))), $item(_templateObject20$1 || (_templateObject20$1 = _taggedTemplateLiteral(["Baseball Diamond"]))), $item(_templateObject21$1 || (_templateObject21$1 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit();
    },
    prepare: () => {
      if (!diverForceReady()) {
        mood("superitdrop");
        yellowRayPrep();
      }
    },
    do: () => {
      if (differentiableQuantity(diver) > 0) {
        differentiate(diver);
        if (kolmafia.handlingChoice() && kolmafia.lastChoice() === 1387) kolmafia.runChoice(3);
      } else if (!timeSpinnerFight(diver) && summon(diver)) {
        kolmafia.runCombat();
      }
    },
    post: diverBaseball
  };
}

/** One turn in the wreck: -combat for the hatch, else the diver at max item. */
function wreckTurn() {
  var hatch = {
    outfit: () => new Gear("-combat,sea", wreck).forRole("-combat").bathysphere($item(_templateObject22$1 || (_templateObject22$1 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit(),
    prepare: () => {
      mood("-combat");
      if (ncForceEstimate() > 4) ncForce();
    },
    do: wreck
  };
  var hunt = {
    before: () => {
      if (highShiny() && !get$1("_epicMcTwistUsed")) pullSequence($item(_templateObject23$1 || (_templateObject23$1 = _taggedTemplateLiteral(["pro skateboard"]))));
    },
    outfit: () => {
      var gear = new Gear("item drop,sea", wreck).forRole("itdrop");
      if (!gotPeriled(wreck)) gear.ifEquip($item(_templateObject24$1 || (_templateObject24$1 = _taggedTemplateLiteral(["Peridot of Peril"]))));
      if (highShiny()) {
        if (!get$1("_epicMcTwistUsed")) gear.ifEquip($item(_templateObject25$1 || (_templateObject25$1 = _taggedTemplateLiteral(["pro skateboard"]))));
        if (haveItem($item(_templateObject26$1 || (_templateObject26$1 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))))) gear.saber();
        return gear.bathysphere($item(_templateObject27$1 || (_templateObject27$1 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit();
      }
      var habitat = get$1("_monsterHabitatsMonster");
      if ((habitat === $monster(_templateObject28$1 || (_templateObject28$1 = _taggedTemplateLiteral(["eye in the darkness"]))) || habitat === $monster(_templateObject29$1 || (_templateObject29$1 = _taggedTemplateLiteral(["slithering thing"])))) && get$1("_monsterHabitatsFightsLeft") > 0) {
        gear.need($item(_templateObject30$1 || (_templateObject30$1 = _taggedTemplateLiteral(["shark jumper"]))), $item(_templateObject31$1 || (_templateObject31$1 = _taggedTemplateLiteral(["scale-mail underwear"]))));
      }
      if (banishGear(wreck) === $item(_templateObject32$1 || (_templateObject32$1 = _taggedTemplateLiteral(["spring shoes"]))) && kolmafia.availableAmount($item(_templateObject33$1 || (_templateObject33$1 = _taggedTemplateLiteral(["spring shoes"])))) > 0) {
        gear.need($item(_templateObject34$1 || (_templateObject34$1 = _taggedTemplateLiteral(["spring shoes"]))));
      } else if (get$1("heartstoneBanishUnlocked")) {
        gear.ifEquip($item(_templateObject35$1 || (_templateObject35$1 = _taggedTemplateLiteral(["Heartstone"]))));
      }
      return gear.saber().cloake().champagne().glove().need($item(_templateObject36$1 || (_templateObject36$1 = _taggedTemplateLiteral(["Monodent of the Sea"])))).bathysphere($item(_templateObject37$1 || (_templateObject37$1 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit();
    },
    prepare: () => {
      if (!highShiny()) {
        mood("itdrop");
        mapMonster(wreck);
      } else if (!haveItem($item(_templateObject38$1 || (_templateObject38$1 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))))) {
        mood("superitdrop");
      }
    },
    do: wreck
  };
  var body = branch(() => kolmafia.totalTurnsPlayed() >= get$1("_lastFitzsimmonsHatch") + 20, hatch, hunt);
  return withHooks(body, {
    before: () => {
      diverBaseball();
      // Every free diver source runs before this, so no adventures here
      // means nothing is left to spend on the hunt.
      if (kolmafia.myAdventures() < 1) {
        throw new Error("Out of adventures with the diving helmet chain short: ".concat(diverChainReport(), ", ") + "".concat(kolmafia.availableAmount($item(_templateObject39$1 || (_templateObject39$1 = _taggedTemplateLiteral(["bubblin' stone"])))), " bubblin' stone."));
      }
    }
  });
}
function buildHelmet() {
  if (!kolmafia.retrieveItem($item(_templateObject40$1 || (_templateObject40$1 = _taggedTemplateLiteral(["aerated diving helmet"]))))) {
    throw new Error("Could not build an aerated diving helmet: ".concat(diverChainReport(), ", ") + "".concat(kolmafia.availableAmount($item(_templateObject41$1 || (_templateObject41$1 = _taggedTemplateLiteral(["rusty diving helmet"])))), " rusty diving helmet, ") + "".concat(kolmafia.availableAmount($item(_templateObject42$1 || (_templateObject42$1 = _taggedTemplateLiteral(["bubblin' stone"])))), " bubblin' stone, ").concat(kolmafia.myAdventures(), " adventures left."));
  }
}
var diverTasks = [_objectSpread2(_objectSpread2({
  name: "Diver: Shadow Waters",
  ready: () => summonLeg() && countSummons() > 0 && !diverPartsComplete() && kolmafia.haveEffect($effect(_templateObject43$1 || (_templateObject43$1 = _taggedTemplateLiteral(["Shadow Waters"])))) === 0 && riftOpen(),
  completed: () => kolmafia.haveEffect($effect(_templateObject44$1 || (_templateObject44$1 = _taggedTemplateLiteral(["Shadow Waters"])))) > 0
}, shadowRift()), {}, {
  limit: {
    tries: 3
  }
}), _objectSpread2(_objectSpread2({
  name: "Diver: summon",
  ready: () => summonLeg() && diverSummonable(),
  completed: () => diverPartsComplete() || helmetOn()
}, summonDiver()), {}, {
  // A summon that fails doesn't use itself up; the wreck takes over.
  limit: {
    skip: 10
  }
}), _objectSpread2(_objectSpread2({
  name: "Diver: wish for rivets",
  ready: () => summonLeg() && kolmafia.itemAmount($item(_templateObject45$1 || (_templateObject45$1 = _taggedTemplateLiteral(["rusty rivet"])))) > 5 && pawWishReady() && kolmafia.availableAmount($item(_templateObject46$1 || (_templateObject46$1 = _taggedTemplateLiteral(["cursed monkey's paw"])))) > 0,
  completed: () => kolmafia.itemAmount($item(_templateObject47$1 || (_templateObject47$1 = _taggedTemplateLiteral(["rusty rivet"])))) >= 8 || diverPartsComplete() || helmetOn()
}, action(() => wishFor($item(_templateObject48$1 || (_templateObject48$1 = _taggedTemplateLiteral(["rusty rivet"])))))), {}, {
  limit: {
    tries: 3
  }
}), _objectSpread2({
  name: "Diver: wreck",
  ready: diverLeg,
  completed: () => diverPartsComplete() || helmetOn()
}, wreckTurn()), _objectSpread2(_objectSpread2({
  name: "Diver: build the helmet",
  ready: () => diverLeg() && diverPartsComplete(),
  completed: helmetOn
}, action(buildHelmet)), {}, {
  limit: {
    tries: 1
  }
})];

// ─── MOM IN THE ABYSS ─────────────────────────────────────────────────────────

var cheapLeg = () => legReady("abyss:cheap");
var cyberLeg = () => legReady("abyss:cyberrealm") && momProgress() < momTarget();
var habitat = () => get$1("_monsterHabitatsMonster");
var abyssHabitat = () => habitat() === $monster(_templateObject49$1 || (_templateObject49$1 = _taggedTemplateLiteral(["eye in the darkness"]))) || habitat() === $monster(_templateObject50$1 || (_templateObject50$1 = _taggedTemplateLiteral(["slithering thing"])));
var abyssTasks = [{
  // Sets the sword on the sea cow, for cowbells while grinding the abyss.
  name: "Abyss: S Word sea cow",
  ready: () => cheapLeg() && highShiny() && momProgress() < 36,
  completed: () => get$1("swordOfSWordsMonster") === $monster(_templateObject51$1 || (_templateObject51$1 = _taggedTemplateLiteral(["sea cow"]))),
  outfit: () => new Gear("item drop,sea", corral$1).fam(sword).ifEquip($item(_templateObject52$1 || (_templateObject52$1 = _taggedTemplateLiteral(["Peridot of Peril"])))).bathysphere($item(_templateObject53$1 || (_templateObject53$1 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit(),
  prepare: () => mood("itdrop"),
  do: corral$1,
  limit: {
    skip: 1
  }
}, {
  name: "Abyss: grind",
  ready: () => cheapLeg() && highShiny(),
  completed: () => momProgress() >= 40,
  before: () => {
    if (kolmafia.availableAmount($item(_templateObject54$1 || (_templateObject54$1 = _taggedTemplateLiteral(["black glass"])))) === 0) {
      kolmafia.buy($coinmaster(_templateObject55$1 || (_templateObject55$1 = _taggedTemplateLiteral(["Big Brother"]))), 1, $item(_templateObject56$1 || (_templateObject56$1 = _taggedTemplateLiteral(["black glass"]))));
    }
    if (kolmafia.availableAmount($item(_templateObject57$1 || (_templateObject57$1 = _taggedTemplateLiteral(["sea leather"])))) > 0 && kolmafia.availableAmount($item(_templateObject58$1 || (_templateObject58$1 = _taggedTemplateLiteral(["sea cowboy hat"])))) === 0) {
      kolmafia.create($item(_templateObject59$1 || (_templateObject59$1 = _taggedTemplateLiteral(["sea cowboy hat"]))));
    }
  },
  outfit: () => {
    var gear = new Gear("item drop,sea,-equip peridot", abyss).need($item(_templateObject60$1 || (_templateObject60$1 = _taggedTemplateLiteral(["shark jumper"]))), $item(_templateObject61$1 || (_templateObject61$1 = _taggedTemplateLiteral(["scale-mail underwear"]))), $item(_templateObject62$1 || (_templateObject62$1 = _taggedTemplateLiteral(["black glass"]))));
    if (kolmafia.availableAmount($item(_templateObject63$1 || (_templateObject63$1 = _taggedTemplateLiteral(["sea cowbell"])))) < 3 && kolmafia.haveFamiliar(sword)) gear.fam(sword);else gear.forRole("itdrop");
    if (!isBanished($monster(_templateObject64$1 || (_templateObject64$1 = _taggedTemplateLiteral(["school of many"]))))) {
      gear.need($item(_templateObject65$1 || (_templateObject65$1 = _taggedTemplateLiteral(["Monodent of the Sea"]))));
    }
    if (get$1("lassoTrainingCount") < 20 && kolmafia.availableAmount($item(_templateObject66$1 || (_templateObject66$1 = _taggedTemplateLiteral(["sea cowboy hat"])))) > 0) {
      gear.need($item(_templateObject67$1 || (_templateObject67$1 = _taggedTemplateLiteral(["sea cowboy hat"]))));
    }
    if (kolmafia.haveEffect($effect(_templateObject68$1 || (_templateObject68$1 = _taggedTemplateLiteral(["Driving Waterproofly"])))) === 0) {
      pullSequence($item(_templateObject69$1 || (_templateObject69$1 = _taggedTemplateLiteral(["Elf Guard SCUBA tank"]))));
      gear.need($item(_templateObject70$1 || (_templateObject70$1 = _taggedTemplateLiteral(["Elf Guard SCUBA tank"]))));
    }
    return gear.bathysphere($item(_templateObject71$1 || (_templateObject71$1 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit();
  },
  prepare: () => {
    if (kolmafia.myFamiliar() === $familiar(_templateObject72$1 || (_templateObject72$1 = _taggedTemplateLiteral(["Red-Nosed Snapper"])))) trackPhylum($phylum(_templateObject73$1 || (_templateObject73$1 = _taggedTemplateLiteral(["horror"]))));
    combJelly();
    mood("itdrop");
  },
  do: abyss
}, {
  name: "Abyss: banish constructs",
  ready: () => cyberLeg() && $location(_templateObject74$1 || (_templateObject74$1 = _taggedTemplateLiteral(["Madness Bakery"]))).turnsSpent < 3,
  completed: () => get$1("banishedPhyla").includes("construct"),
  before: () => {
    if (!get$1("madnessBakeryAvailable")) {
      kolmafia.visitUrl("shop.php?whichshop=armory&action=talk");
      kolmafia.runChoice(1);
    }
  },
  outfit: () => new Gear("item drop", $location(_templateObject75$1 || (_templateObject75$1 = _taggedTemplateLiteral(["Madness Bakery"])))).fam($familiar(_templateObject76$1 || (_templateObject76$1 = _taggedTemplateLiteral(["Patriotic Eagle"])))).need($item(_templateObject77$1 || (_templateObject77$1 = _taggedTemplateLiteral(["Monodent of the Sea"])))).outfit(),
  do: $location(_templateObject78$1 || (_templateObject78$1 = _taggedTemplateLiteral(["Madness Bakery"])))
}, _objectSpread2({
  name: "Abyss: recall the habitat",
  ready: () => cyberLeg() && kolmafia.haveSkill($skill(_templateObject79$1 || (_templateObject79$1 = _taggedTemplateLiteral(["Just the Facts"])))) && get$1("_monsterHabitatsRecalled") < 3,
  completed: abyssHabitat
}, recallCaliginous()), {
  name: "Abyss: cyberzone",
  ready: () => cyberLeg() && get$1("_monsterHabitatsFightsLeft") > 0 && get$1("_cyberFreeFights") < 10,
  completed: () => momProgress() >= 40,
  outfit: () => new Gear("moxie", $location(_templateObject80$1 || (_templateObject80$1 = _taggedTemplateLiteral(["Cyberzone 1"])))).fam($familiar(_templateObject81$1 || (_templateObject81$1 = _taggedTemplateLiteral(["Glover"])))).need($item(_templateObject82$1 || (_templateObject82$1 = _taggedTemplateLiteral(["shark jumper"]))), $item(_templateObject83$1 || (_templateObject83$1 = _taggedTemplateLiteral(["scale-mail underwear"]))), $item(_templateObject84$1 || (_templateObject84$1 = _taggedTemplateLiteral(["Monodent of the Sea"])))).outfit(),
  prepare: () => {
    if (kolmafia.myBuffedstat($stat(_templateObject85$1 || (_templateObject85$1 = _taggedTemplateLiteral(["Moxie"])))) < 500) throw new Error("Need 500 moxie here to be safe");
  },
  do: $location(_templateObject86$1 || (_templateObject86$1 = _taggedTemplateLiteral(["Cyberzone 1"])))
}, _objectSpread2({
  name: "Abyss: finish",
  ready: cyberLeg,
  completed: () => momProgress() >= momTarget()
}, finishCaliginous())];

// ─── THE CORAL CORRAL ─────────────────────────────────────────────────────────

var dropLeg = () => legReady("corral:drop");
var corralLeg = () => legReady("corral:collect", "corral:drop");

/** The leather piece, crafted from a sea leather or farmed for one. */
function leatherPiece(item) {
  var body = branch(() => kolmafia.itemAmount($item(_templateObject87$1 || (_templateObject87$1 = _taggedTemplateLiteral(["sea leather"])))) > 0, action(() => kolmafia.create(item)), corralFarm());
  return withHooks(body, {
    before: () => {
      if (dropLeg()) codpiece("none");
    }
  });
}
var corralTasks = [_objectSpread2(_objectSpread2({
  name: "Corral: Shadow Waters",
  ready: () => dropLeg() && !mcTwistDone() && !lowShiny() && kolmafia.haveEffect($effect(_templateObject88$1 || (_templateObject88$1 = _taggedTemplateLiteral(["Shadow Waters"])))) === 0 && riftOpen(),
  completed: () => kolmafia.haveEffect($effect(_templateObject89$1 || (_templateObject89$1 = _taggedTemplateLiteral(["Shadow Waters"])))) > 0
}, shadowRift()), {}, {
  limit: {
    tries: 3
  }
}), {
  name: "Corral: McTwist",
  ready: dropLeg,
  completed: mcTwistDone,
  before: () => {
    codpiece("blood cubic zirconia, heartstone");
    if (kolmafia.availableAmount($item(_templateObject90$1 || (_templateObject90$1 = _taggedTemplateLiteral(["pro skateboard"])))) === 0) pullSequence($item(_templateObject91$1 || (_templateObject91$1 = _taggedTemplateLiteral(["pro skateboard"]))));
  },
  outfit: () => {
    var copied = get$1("lastCopyableMonster");
    if (get$1("_backUpUses") < 11 && haveItem($item(_templateObject92$1 || (_templateObject92$1 = _taggedTemplateLiteral(["backup camera"])))) && (copied === $monster(_templateObject93$1 || (_templateObject93$1 = _taggedTemplateLiteral(["eye in the darkness"]))) || copied === $monster(_templateObject94$1 || (_templateObject94$1 = _taggedTemplateLiteral(["slithering thing"]))))) {
      return new Gear("item drop, sea, -equip peridot of peril", corral$1).forRole("itdrop").need($item(_templateObject95$1 || (_templateObject95$1 = _taggedTemplateLiteral(["shark jumper"]))), $item(_templateObject96$1 || (_templateObject96$1 = _taggedTemplateLiteral(["scale-mail underwear"])))).ifEquip(divingHelmet()).need($item(_templateObject97$1 || (_templateObject97$1 = _taggedTemplateLiteral(["pro skateboard"])))).ifEquip($item(_templateObject98$1 || (_templateObject98$1 = _taggedTemplateLiteral(["The Eternity Codpiece"])))).need($item(_templateObject99$1 || (_templateObject99$1 = _taggedTemplateLiteral(["backup camera"])))).outfit();
    }
    if (kolmafia.haveSkill($skill(_templateObject100$1 || (_templateObject100$1 = _taggedTemplateLiteral(["Steely-Eyed Squint"])))) && haveItem($item(_templateObject101$1 || (_templateObject101$1 = _taggedTemplateLiteral(["cursed monkey's paw"]))))) {
      pullSequence($item(_templateObject102$1 || (_templateObject102$1 = _taggedTemplateLiteral(["software glitch"]))));
    }
    return new Gear("item drop, sea, -equip peridot of peril, equip monodent of the sea", corral$1).forRole("itdrop").ifEquip(divingHelmet()).need($item(_templateObject103$1 || (_templateObject103$1 = _taggedTemplateLiteral(["pro skateboard"])))).ifEquip($item(_templateObject104$1 || (_templateObject104$1 = _taggedTemplateLiteral(["The Eternity Codpiece"])))).outfit();
  },
  prepare: () => {
    if (kolmafia.myFamiliar() === $familiar(_templateObject105$1 || (_templateObject105$1 = _taggedTemplateLiteral(["Red-Nosed Snapper"])))) trackPhylum($phylum(_templateObject106$1 || (_templateObject106$1 = _taggedTemplateLiteral(["mer-kin"]))));
    if (!get$1("_steelyEyedSquintUsed")) mood("superitdrop");
    mood("itdrop");
  },
  do: corral$1
}, _objectSpread2({
  name: "Corral: sea lassos",
  ready: () => dropLeg() && mcTwistDone(),
  completed: lassosDone
}, corralFarm()), _objectSpread2({
  name: "Corral: sea chaps",
  ready: corralLeg,
  completed: () => kolmafia.availableAmount($item(_templateObject107$1 || (_templateObject107$1 = _taggedTemplateLiteral(["sea chaps"])))) > 0 || tailpiece() !== $item.none
}, leatherPiece($item(_templateObject108$1 || (_templateObject108$1 = _taggedTemplateLiteral(["sea chaps"]))))), _objectSpread2({
  name: "Corral: sea cowboy hat",
  ready: corralLeg,
  completed: () => kolmafia.availableAmount($item(_templateObject109$1 || (_templateObject109$1 = _taggedTemplateLiteral(["sea cowboy hat"])))) > 0
}, leatherPiece($item(_templateObject110$1 || (_templateObject110$1 = _taggedTemplateLiteral(["sea cowboy hat"])))))];
var SeahorseRouteQuest = {
  name: "Seahorse route",
  tasks: [_objectSpread2(_objectSpread2({
    name: "Aerated diving helmet",
    ready: () => inAftercore() && !tamed(),
    completed: helmetOn
  }, action(buildHelmet)), {}, {
    limit: {
      tries: 1
    }
  })].concat(diverTasks, abyssTasks, corralTasks)
};

// ─── SHADOW RIFT AND TEFLON ───────────────────────────────────────────────────

var curveballLive = () => get$1("_curveballFightsLeft", 0) > 0 && get$1("_curveballMonster") === $monster(_templateObject111$1 || (_templateObject111$1 = _taggedTemplateLiteral(["some fish"])));
/** An Unaccompanied Miner swing, which stops the run if mining.php didn't count it. */
function freeDig() {
  var used = get$1("_unaccompaniedMinerUsed");
  digAnemone();
  if (get$1("_unaccompaniedMinerUsed") <= used) {
    throw new Error("Unaccompanied Miner swing didn't count in mining.php. Mine unlocked?");
  }
}
var teflonNeeded = () => kolmafia.itemAmount($item(_templateObject112$1 || (_templateObject112$1 = _taggedTemplateLiteral(["teflon ore"])))) === 0 && tailpiece() === $item.none;
var haveDigpick = () => kolmafia.availableAmount($item(_templateObject113$1 || (_templateObject113$1 = _taggedTemplateLiteral(["Mer-kin digpick"])))) > 0;
var affinityLeft = () => kolmafia.haveEffect($effect(_templateObject114$1 || (_templateObject114$1 = _taggedTemplateLiteral(["Shadow Affinity"])))) > 0 || !get$1("_shadowAffinityToday");
var phone = () => haveItem($item(_templateObject115$1 || (_templateObject115$1 = _taggedTemplateLiteral(["closed-circuit pay phone"]))));
var card = $item(_templateObject116$1 || (_templateObject116$1 = _taggedTemplateLiteral(["Platinum Yendorian Express Card"])));
var mine = $location(_templateObject117$1 || (_templateObject117$1 = _taggedTemplateLiteral(["Anemone Mine"])));
var riftTraining = () => inSeaPath() && get$1("lassoTrainingCount") < 20 && !highShiny() && affinityLeft() && phone();
var TeflonQuest = {
  name: "Shadow rift and teflon",
  ready: routeDone,
  tasks: [{
    name: "Rift: dial in",
    ready: () => inSeaPath() && !highShiny() && get$1("encountersUntilSRChoice") > 9 && kolmafia.itemAmount($item(_templateObject118$1 || (_templateObject118$1 = _taggedTemplateLiteral(["closed-circuit pay phone"])))) > 0,
    completed: () => questStep("questRufus") >= 0,
    before: () => {
      kolmafia.retrieveItem($item(_templateObject119$1 || (_templateObject119$1 = _taggedTemplateLiteral(["oversized sparkler"]))));
      if (kolmafia.itemAmount($item(_templateObject120$1 || (_templateObject120$1 = _taggedTemplateLiteral(["lump of loyal latite"])))) > 0) kolmafia.use($item(_templateObject121$1 || (_templateObject121$1 = _taggedTemplateLiteral(["lump of loyal latite"]))));
    },
    outfit: () => new Gear("item drop", rift).need($item(_templateObject122$1 || (_templateObject122$1 = _taggedTemplateLiteral(["Flash Liquidizer Ultra Dousing Accessory"]))), $item(_templateObject123$1 || (_templateObject123$1 = _taggedTemplateLiteral(["Monodent of the Sea"])))).ifEquip($item(_templateObject124$1 || (_templateObject124$1 = _taggedTemplateLiteral(["bat wings"]))), $item(_templateObject125$1 || (_templateObject125$1 = _taggedTemplateLiteral(["Everfull Dart Holster"]))), $item(_templateObject126$1 || (_templateObject126$1 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit(),
    prepare: () => mood("itdrop"),
    do: () => kolmafia.use($item(_templateObject127$1 || (_templateObject127$1 = _taggedTemplateLiteral(["closed-circuit pay phone"])))),
    limit: {
      tries: 1
    }
  }, _objectSpread2(_objectSpread2({
    // The digpick first, then the Yendorian express card.
    name: "Rift: curveball fights",
    ready: () => inSeaPath() && !highShiny() && curveballLive(),
    completed: () => !curveballLive() || haveItem(card) && haveDigpick()
  }, curveballBurn()), {}, {
    limit: {
      tries: 10
    }
  }), _objectSpread2(_objectSpread2({
    name: "Teflon: pull a digpick",
    ready: () => teflonNeeded() && !haveDigpick() && !lowShiny() && kolmafia.pullsRemaining() > reservedPulls(),
    completed: haveDigpick
  }, action(() => pullSequence($item(_templateObject128$1 || (_templateObject128$1 = _taggedTemplateLiteral(["Mer-kin digpick"])))))), {}, {
    limit: {
      skip: 1
    }
  }), {
    // At over 250% item the anemone mine's digpick is a sure drop.
    name: "Teflon: fight for a digpick",
    ready: () => teflonNeeded() && !haveDigpick(),
    completed: haveDigpick,
    outfit: () => new Gear("item drop,sea", mine).ifEquip($item(_templateObject129$1 || (_templateObject129$1 = _taggedTemplateLiteral(["Peridot of Peril"])))).bathysphere().outfit(),
    prepare: () => mood("itdrop"),
    do: () => {
      if (kolmafia.numericModifier("Item Drop") > 250) return mine;
      if (haveItem($item(_templateObject130$1 || (_templateObject130$1 = _taggedTemplateLiteral(["bat wings"]))))) {
        kolmafia.equip($item(_templateObject131$1 || (_templateObject131$1 = _taggedTemplateLiteral(["bat wings"]))));
        return mine;
      }
      return undefined;
    },
    post: () => {
      if (!haveDigpick()) pullSequence($item(_templateObject132$1 || (_templateObject132$1 = _taggedTemplateLiteral(["Mer-kin digpick"]))));
    },
    limit: {
      skip: 1
    }
  }, _objectSpread2(_objectSpread2({
    name: "Teflon: Unaccompanied Miner",
    ready: () => teflonNeeded() && haveDigpick() && kolmafia.haveSkill($skill(_templateObject133$1 || (_templateObject133$1 = _taggedTemplateLiteral(["Unaccompanied Miner"])))) && get$1("_unaccompaniedMinerUsed") < 5 &&
    // Muscle classes get in at the Grandpa step, the rest need Big Brother's map.
    kolmafia.canAdventure($location(_templateObject134$1 || (_templateObject134$1 = _taggedTemplateLiteral(["Anemone Mine"])))),
    completed: () => !teflonNeeded()
  }, mineAnemone(freeDig)), {}, {
    limit: {
      tries: 5
    }
  }), _objectSpread2(_objectSpread2({
    name: "Teflon: lodestone",
    ready: () => teflonNeeded() && !pulledToday($item(_templateObject135$1 || (_templateObject135$1 = _taggedTemplateLiteral(["lodestone"])))),
    completed: () => !teflonNeeded() || kolmafia.haveEffect($effect(_templateObject136$1 || (_templateObject136$1 = _taggedTemplateLiteral(["Loded"])))) > 0
  }, action(() => {
    pullSequence($item(_templateObject137$1 || (_templateObject137$1 = _taggedTemplateLiteral(["lodestone"]))));
    kolmafia.use($item(_templateObject138$1 || (_templateObject138$1 = _taggedTemplateLiteral(["lodestone"]))));
  })), {}, {
    limit: {
      skip: 1
    }
  }), _objectSpread2(_objectSpread2({
    name: "Express card",
    ready: () => inSeaPath() && haveItem(card) && !highShiny(),
    completed: () => get$1("expressCardUsed")
  }, action(() => {
    if (kolmafia.storageAmount(card) > 0 && kolmafia.itemAmount(card) === 0) kolmafia.takeStorage(1, card);
    kolmafia.use(card);
  })), {}, {
    limit: {
      tries: 1
    }
  }), _objectSpread2(_objectSpread2({
    name: "Rift: lasso training",
    ready: riftTraining,
    completed: () => get$1("lassoTrainingCount") >= 20
  }, shadowRift()), {}, {
    limit: {
      tries: 40
    }
  }), _objectSpread2(_objectSpread2({
    // The day's affinity is wasted unless spent, so spend it now.
    name: "Rift: spend the affinity",
    ready: () => inSeaPath() && (kolmafia.myTurncount() > 25 || !haveItem($item(_templateObject139$1 || (_templateObject139$1 = _taggedTemplateLiteral(["miniature crystal ball"]))))) && !highShiny() && phone(),
    completed: () => !affinityLeft()
  }, shadowRift()), {}, {
    limit: {
      tries: 40
    }
  }), _objectSpread2(_objectSpread2({
    name: "Teflon: mine while Loded",
    ready: () => teflonNeeded() && haveDigpick() && kolmafia.haveEffect($effect(_templateObject140$1 || (_templateObject140$1 = _taggedTemplateLiteral(["Loded"])))) > 0,
    completed: () => !teflonNeeded()
  }, mineAnemone()), {}, {
    limit: {
      tries: 20
    }
  }), _objectSpread2(_objectSpread2({
    name: "Teflon: mine",
    ready: () => teflonNeeded() && haveDigpick(),
    completed: () => !teflonNeeded()
  }, withHooks(mineAnemone(), {
    before: () => kolmafia.print("Failed to acquire teflon ore; can pull mining dynamite for one more try", "red")
  })), {}, {
    limit: {
      tries: 30
    }
  })]
};

// ─── LASSO TRAINING ───────────────────────────────────────────────────────────

/** Lasso training in the pearl zone, when the rift can't finish it. */
var BackupLassoQuest = {
  name: "Backup lasso training",
  ready: () => routeDone() && !riftTraining(),
  tasks: [_objectSpread2({
    name: "Sea lasso",
    ready: () => get$1("lassoTrainingCount") < 20,
    completed: () => kolmafia.itemAmount($item(_templateObject141$1 || (_templateObject141$1 = _taggedTemplateLiteral(["sea lasso"])))) > 0 || get$1("lassoTrainingCount") >= 20
  }, lassoWish()), {
    name: "Pearl zone",
    completed: () => get$1("lassoTrainingCount") >= 20,
    before: () => {
      if (phone()) kolmafia.print("Lasso training didn't finish via shadow rift", "red");
      if (!pulledToday($item(_templateObject142$1 || (_templateObject142$1 = _taggedTemplateLiteral(["Elf Guard SCUBA tank"]))))) kolmafia.cliExecute("pull elf guard scuba");
    },
    outfit: () => new Gear("".concat(pearlRes(), ",sea"), pearlLoc()).forRole("itdrop").need($item(_templateObject143$1 || (_templateObject143$1 = _taggedTemplateLiteral(["Monodent of the Sea"]))), $item(_templateObject144$1 || (_templateObject144$1 = _taggedTemplateLiteral(["sea cowboy hat"]))), $item(_templateObject145$1 || (_templateObject145$1 = _taggedTemplateLiteral(["sea chaps"])))).bathysphere().outfit(),
    prepare: () => {
      if (kolmafia.availableAmount($item(_templateObject146$1 || (_templateObject146$1 = _taggedTemplateLiteral(["pristine fish scale"])))) < 6) mood("itdrop");
    },
    do: () => pearlLoc()
  }]
};

// ─── TAMING ───────────────────────────────────────────────────────────────────

/** Cowbells to farm before taming, leaving the rest to the monkey's paw. */
function cowbellsWanted() {
  if (!have$6() || highShiny()) return 2;
  return Math.max(0, 2 - wishes());
}
var seahorseNext = () => getPrediction().get($location(_templateObject147$1 || (_templateObject147$1 = _taggedTemplateLiteral(["The Coral Corral"])))) === $monster(_templateObject148$1 || (_templateObject148$1 = _taggedTemplateLiteral(["wild seahorse"])));
var crystalBall = () => have$9();
var TamingQuest = {
  name: "Taming",
  ready: () => routeDone() && !tamed(),
  tasks: [_objectSpread2({
    name: "Farm cowbells",
    completed: () => kolmafia.itemAmount($item(_templateObject149$1 || (_templateObject149$1 = _taggedTemplateLiteral(["sea cowbell"])))) >= cowbellsWanted()
  }, corralFarm()), _objectSpread2({
    name: "Farm a sea lasso",
    ready: () => !inAftercore(),
    completed: () => kolmafia.itemAmount($item(_templateObject150$1 || (_templateObject150$1 = _taggedTemplateLiteral(["sea lasso"])))) > 0
  }, corralFarm()), _objectSpread2(_objectSpread2({
    name: "Aftercore lasso and cowbells",
    ready: inAftercore,
    completed: () => kolmafia.itemAmount($item(_templateObject151$1 || (_templateObject151$1 = _taggedTemplateLiteral(["sea cowbell"])))) >= 3 && kolmafia.itemAmount($item(_templateObject152$1 || (_templateObject152$1 = _taggedTemplateLiteral(["sea lasso"])))) > 0
  }, action(() => {
    kolmafia.retrieveItem(3, $item(_templateObject153$1 || (_templateObject153$1 = _taggedTemplateLiteral(["sea cowbell"]))));
    kolmafia.retrieveItem($item(_templateObject154$1 || (_templateObject154$1 = _taggedTemplateLiteral(["sea lasso"]))));
  })), {}, {
    limit: {
      tries: 1
    }
  }), _objectSpread2(_objectSpread2({
    name: "Pull a cowbell",
    ready: () => !pulledToday($item(_templateObject155$1 || (_templateObject155$1 = _taggedTemplateLiteral(["sea cowbell"])))),
    completed: () => kolmafia.itemAmount($item(_templateObject156$1 || (_templateObject156$1 = _taggedTemplateLiteral(["sea cowbell"])))) >= 3
  }, action(() => pullSequence($item(_templateObject157$1 || (_templateObject157$1 = _taggedTemplateLiteral(["sea cowbell"])))))), {}, {
    limit: {
      skip: 1
    }
  }), _objectSpread2({
    name: "Wish for cowbells",
    ready: () => wishes() > 0,
    completed: () => kolmafia.itemAmount($item(_templateObject158$1 || (_templateObject158$1 = _taggedTemplateLiteral(["sea cowbell"])))) >= 3
  }, monkeypaw($item(_templateObject159$1 || (_templateObject159$1 = _taggedTemplateLiteral(["sea cowbell"]))))), _objectSpread2(_objectSpread2({
    // Burn shadow affinity while the crystal ball shows something else coming.
    name: "Spend the affinity on a bad prediction",
    ready: () => crystalBall() && !seahorseNext() && (getPrediction().has($location(_templateObject160$1 || (_templateObject160$1 = _taggedTemplateLiteral(["The Coral Corral"])))) || kolmafia.itemAmount($item(_templateObject161$1 || (_templateObject161$1 = _taggedTemplateLiteral(["shadow brick"])))) === 0),
    completed: () => kolmafia.haveEffect($effect(_templateObject162$1 || (_templateObject162$1 = _taggedTemplateLiteral(["Shadow Affinity"])))) === 0
  }, shadowRift()), {}, {
    limit: {
      tries: 20
    }
  }), {
    name: "Tame the seahorse",
    completed: tamed,
    before: () => {
      if (kolmafia.itemAmount($item(_templateObject163$1 || (_templateObject163$1 = _taggedTemplateLiteral(["sea cowbell"])))) < 3) throw new Error("need more cowbells");
      if (kolmafia.itemAmount($item(_templateObject164$1 || (_templateObject164$1 = _taggedTemplateLiteral(["waffle"])))) === 0) pullSequence($item(_templateObject165$1 || (_templateObject165$1 = _taggedTemplateLiteral(["waffle"]))));
    },
    outfit: () => {
      var gear = new Gear(dropsItems, corral$1).forRole("itdrop");
      if (!periledToday(corral$1)) gear.ifEquip($item(_templateObject166$1 || (_templateObject166$1 = _taggedTemplateLiteral(["Peridot of Peril"]))));
      if (!haveItem($item(_templateObject167$1 || (_templateObject167$1 = _taggedTemplateLiteral(["august scepter"]))))) {
        gear.need($item(_templateObject168$1 || (_templateObject168$1 = _taggedTemplateLiteral(["Monodent of the Sea"])))).ifEquip($item(_templateObject169$1 || (_templateObject169$1 = _taggedTemplateLiteral(["Heartstone"]))));
      } else if (haveItem($item(_templateObject170$1 || (_templateObject170$1 = _taggedTemplateLiteral(["miniature crystal ball"]))))) {
        gear.need($item(_templateObject171$1 || (_templateObject171$1 = _taggedTemplateLiteral(["miniature crystal ball"]))));
      }
      if (curveballLive()) gear.need($item(_templateObject172$1 || (_templateObject172$1 = _taggedTemplateLiteral(["Monodent of the Sea"]))));
      // All three non-seahorse monsters banished: the tearaway pants.
      if ($monsters(_templateObject173$1 || (_templateObject173$1 = _taggedTemplateLiteral(["Mer-kin rustler, sea cowboy, sea cow"]))).every(isBanished) && haveItem($item(_templateObject174$1 || (_templateObject174$1 = _taggedTemplateLiteral(["tearaway pants"]))))) {
        gear.need($item(_templateObject175$1 || (_templateObject175$1 = _taggedTemplateLiteral(["tearaway pants"]))));
      }
      return gear.delay().outfit();
    },
    do: corral$1
  }]
};

// ─── AFTER THE SEAHORSE ───────────────────────────────────────────────────────

var noTailpiece = () => tailpiece() === $item.none;
var disguiseShort = () => kolmafia.availableAmount($item(_templateObject176$1 || (_templateObject176$1 = _taggedTemplateLiteral(["crappy Mer-kin mask"])))) === 0 || kolmafia.availableAmount($item(_templateObject177$1 || (_templateObject177$1 = _taggedTemplateLiteral(["crappy Mer-kin tailpiece"])))) === 0;
var AFTERCORE_BOSSES = ["Yogurt", "Shub", "Dad"];

/** Which boss an aftercore run is for, from the boss arg or set by hand, kept for reruns. */
var aftercoreBoss = () => get$1("_sebAftercoreBoss");

/** Mafia skips Deep Dark Visions below 500 maximum HP; under 67% spooky res a cast ends Beaten Up. */
function deepDarkVisions() {
  if (kolmafia.myMaxhp() < 500) {
    throw new Error("Deep Dark Visions needs 500 maximum HP; you have ".concat(kolmafia.myMaxhp(), "."));
  }
  var spookyRes = Math.floor(kolmafia.elementalResistance($element(_templateObject178$1 || (_templateObject178$1 = _taggedTemplateLiteral(["spooky"])))));
  if (spookyRes < 67) {
    kolmafia.print("Deep Dark Visions: ".concat(spookyRes, "% spooky resistance is too low to survive a cast."), "red");
  }
  if (!kolmafia.restoreHp(spookyRes < 67 ? 1000 : kolmafia.myMaxhp())) {
    throw new Error("Could not restore HP before Deep Dark Visions; see the message above.");
  }
  if (!kolmafia.useSkill(1, $skill(_templateObject179$1 || (_templateObject179$1 = _taggedTemplateLiteral(["Deep Dark Visions"]))))) {
    throw new Error("Could not cast Deep Dark Visions; see the message above.");
  }
}
var PostSeahorseQuest = {
  name: "After the seahorse",
  ready: tamed,
  tasks: [_objectSpread2(_objectSpread2({
    name: "Spend the affinity",
    ready: () => kolmafia.haveEffect($effect(_templateObject180$1 || (_templateObject180$1 = _taggedTemplateLiteral(["Shadow Affinity"])))) > 0,
    completed: () => kolmafia.haveEffect($effect(_templateObject181$1 || (_templateObject181$1 = _taggedTemplateLiteral(["Shadow Affinity"])))) === 0
  }, branch(curveballLive, curveballBurn(), shadowRift())), {}, {
    limit: {
      tries: 40
    }
  }), {
    name: "Rift choice",
    ready: () => phone(),
    completed: () => get$1("encountersUntilSRChoice") !== 0,
    do: rift,
    limit: {
      tries: 1
    }
  }, {
    name: "Rufus",
    completed: () => questStep("questRufus") !== 1,
    do: () => {
      kolmafia.use($item(_templateObject182$1 || (_templateObject182$1 = _taggedTemplateLiteral(["closed-circuit pay phone"]))));
      return rift;
    },
    limit: {
      tries: 1
    }
  }, _objectSpread2({
    name: "Sand dollars",
    ready: noTailpiece,
    completed: () => kolmafia.itemAmount($item(_templateObject183$1 || (_templateObject183$1 = _taggedTemplateLiteral(["sand dollar"])))) >= 10
  }, withHooks(action(getSandDollar), {
    before: equipSwimTrunks
  })), _objectSpread2({
    // The diver tasks run only while the seahorse is untamed, so a part
    // still missing here has no other route back.
    name: "Recover the diving helmet",
    ready: () => noTailpiece() && kolmafia.availableAmount($item(_templateObject184$1 || (_templateObject184$1 = _taggedTemplateLiteral(["crappy Mer-kin mask"])))) === 0 && kolmafia.availableAmount($item(_templateObject185$1 || (_templateObject185$1 = _taggedTemplateLiteral(["rusty diving helmet"])))) === 0,
    completed: () => kolmafia.availableAmount($item(_templateObject186$1 || (_templateObject186$1 = _taggedTemplateLiteral(["aerated diving helmet"])))) > 0 || diverPartsComplete()
  }, wreckTurn()), _objectSpread2(_objectSpread2({
    name: "Build the diving helmet",
    ready: () => noTailpiece() && kolmafia.availableAmount($item(_templateObject187$1 || (_templateObject187$1 = _taggedTemplateLiteral(["crappy Mer-kin mask"])))) === 0 && diverPartsComplete(),
    completed: () => kolmafia.availableAmount($item(_templateObject188$1 || (_templateObject188$1 = _taggedTemplateLiteral(["aerated diving helmet"])))) > 0
  }, action(buildHelmet)), {}, {
    limit: {
      tries: 1
    }
  }), {
    name: "Scales from the abyss",
    ready: () => noTailpiece() && disguiseShort(),
    completed: () => kolmafia.availableAmount($item(_templateObject189$1 || (_templateObject189$1 = _taggedTemplateLiteral(["pristine fish scale"])))) >= 3,
    before: () => {
      if (get$1("_cloversPurchased") >= 3) {
        throw new Error("get a total of ".concat(kolmafia.availableAmount($item(_templateObject190$1 || (_templateObject190$1 = _taggedTemplateLiteral(["pristine fish scale"])))), " pristine fish scale, out of hermitage clovers"));
      }
      getLucky();
    },
    do: () => {
      kolmafia.equip($slot(_templateObject191$1 || (_templateObject191$1 = _taggedTemplateLiteral(["acc3"]))), $item(_templateObject192$1 || (_templateObject192$1 = _taggedTemplateLiteral(["black glass"]))));
      return abyss;
    },
    limit: {
      tries: 6
    }
  }, _objectSpread2(_objectSpread2({
    name: "Crappy Mer-kin mask",
    ready: noTailpiece,
    completed: () => kolmafia.availableAmount($item(_templateObject193$1 || (_templateObject193$1 = _taggedTemplateLiteral(["crappy Mer-kin mask"])))) > 0
  }, action(() => {
    kolmafia.cliExecute("unequip sea chaps; unequip aerated diving helmet");
    if (!kolmafia.retrieveItem($item(_templateObject194$1 || (_templateObject194$1 = _taggedTemplateLiteral(["crappy Mer-kin mask"]))))) {
      throw new Error("Could not build a crappy Mer-kin mask; the aerated diving helmet chain is short.");
    }
  })), {}, {
    limit: {
      tries: 1
    }
  }), _objectSpread2(_objectSpread2({
    name: "Crappy Mer-kin tailpiece",
    completed: () => !noTailpiece()
  }, action(() => {
    kolmafia.cliExecute("unequip sea chaps");
    if (!kolmafia.retrieveItem($item(_templateObject195$1 || (_templateObject195$1 = _taggedTemplateLiteral(["crappy Mer-kin tailpiece"]))))) {
      throw new Error("Could not build a crappy Mer-kin tailpiece: ".concat(kolmafia.availableAmount($item(_templateObject196$1 || (_templateObject196$1 = _taggedTemplateLiteral(["sea chaps"])))), " sea chaps, ") + "".concat(kolmafia.availableAmount($item(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral(["teflon swim fins"])))), " swim fins, ") + "".concat(kolmafia.availableAmount($item(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral(["pristine fish scale"])))), "/3 fish scales."));
    }
  })), {}, {
    limit: {
      tries: 1
    }
  }), _objectSpread2(_objectSpread2({
    // Mafia often runs headless, where userPrompt throws, so the boss comes
    // from the boss arg or the pref instead.
    name: "Pick the aftercore boss",
    ready: inAftercore,
    completed: () => AFTERCORE_BOSSES.includes(aftercoreBoss())
  }, action(() => {
    var boss = aftercoreBoss();
    throw new Error(boss === "" ? "No aftercore boss chosen. Run \"sebastian boss=Shub\" (or Yogurt, or Dad), or set _sebAftercoreBoss." : "_sebAftercoreBoss is \"".concat(boss, "\", which isn't Yogurt, Shub or Dad."));
  })), {}, {
    limit: {
      tries: 1
    }
  }), _objectSpread2(_objectSpread2({
    name: "Deep Dark Visions",
    completed: () => get$1("dreadScroll3") !== 0,
    outfit: {
      modifier: "50 spooky res, hp"
    },
    prepare: () => mood("spookyres")
  }, action(deepDarkVisions)), {}, {
    limit: {
      tries: 10,
      message: "Cast Deep Dark Visions by hand until dreadScroll3 is set, then rerun."
    }
  })]
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196;

// The temple: the dreadscroll, Yog-Urt, the colosseum and Shub-Jigguwatt,
// then the final boss. Ported from YogUrt() through finalBoss() in
// UnderTheSea.ash.

var school = $location(_templateObject || (_templateObject = _taggedTemplateLiteral(["Mer-kin Elementary School"])));
var library = $location(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Mer-kin Library"])));
var corral = $location(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["The Coral Corral"])));
var rightDoor = $location(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Mer-kin Temple (Right Door)"])));
var leftDoor = $location(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Mer-kin Temple (Left Door)"])));
var center = $location(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Mer-kin Temple (Center Door)"])));
var colosseum = $location(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Mer-kin Colosseum"])));
var scroll = n => get$1("dreadScroll".concat(n), 0);
var vocabulary = () => get$1("merkinVocabularyMastery");
var highPriest = () => get$1("isMerkinHighPriest");
var beads = () => kolmafia.availableAmount($item(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))));

// ─── YOG-URT'S HP CHECK ───────────────────────────────────────────────────────

/** Healing items Yog-Urt's fight throws, in the order it throws them, and what each heals. */
var YOG_HEALING = [[$item(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["sea gel"]))), 500], [$item(_templateObject0 || (_templateObject0 = _taggedTemplateLiteral(["Mer-kin healscroll"]))), 300], [$item(_templateObject1 || (_templateObject1 = _taggedTemplateLiteral(["waterlogged scroll of healing"]))), 250], [$item(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["soggy used band-aid"]))), 1000], [$item(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["New Age healing crystal"]))), 500]];
function yogHealingsNeeded() {
  return YOG_HEALINGS_NEEDED[beads()] ?? 0;
}
function yogHealingsOwned() {
  return YOG_HEALING.filter(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
      item = _ref2[0];
    return kolmafia.availableAmount(item) > 0;
  }).length;
}

/** Healings short of what the fight needs, more than pulls can cover. */
function yogHealingsShort() {
  return yogHealingsNeeded() - yogHealingsOwned() > kolmafia.pullsRemaining();
}

/** Maximum HP per point of buffed Muscle, from what's worn. */
function trueHPPercent() {
  var hp = (kolmafia.myMaxhp() - kolmafia.numericModifier("Maximum HP")) / (kolmafia.myBuffedstat($stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))) + 3);
  return Math.round(hp * 100) / 100;
}

/**
 * Whether Yog-Urt's healing can keep up: the fight halves your Muscle, so
 * two hits at 90% of the predicted HP must not outrun the weakest healing.
 * Reads what is worn, so it runs once the Yog-Urt outfit is on.
 */
function yogHpCheck() {
  var maxHeal = 1001;
  var n = 0;
  var needed = beads() <= 3 ? YOG_HEALINGS_NEEDED[beads()] : 1;
  for (var _i = 0, _YOG_HEALING = YOG_HEALING; _i < _YOG_HEALING.length; _i++) {
    var _YOG_HEALING$_i = _slicedToArray(_YOG_HEALING[_i], 2),
      item = _YOG_HEALING$_i[0],
      heal = _YOG_HEALING$_i[1];
    if (n >= needed) break;
    if (kolmafia.availableAmount(item) > 0) {
      maxHeal = Math.min(maxHeal, heal);
      n++;
    }
  }
  var predictedMus = Math.round(30 * (1 + kolmafia.numericModifier("Muscle Percent") / 100)) + kolmafia.numericModifier("Muscle");
  kolmafia.print("Predicted Mus ".concat(predictedMus));
  var predictedHP = Math.round((predictedMus + 3) * trueHPPercent()) + kolmafia.numericModifier("Maximum HP");
  kolmafia.print("predicted HP ".concat(predictedHP));
  if (predictedHP * 0.9 * 2 <= predictedHP + maxHeal) return true;
  if (kolmafia.haveEffect($effect(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Gummiheart"])))) === 0) return false;
  var antidote = $item(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["soft green echo eyedrop antidote"])));
  if (kolmafia.itemAmount(antidote) === 0 && kolmafia.pullsRemaining() > reservedPulls()) pullSequence(antidote);
  if (kolmafia.itemAmount(antidote) > 0) uneffect($effect(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Gummiheart"]))));
  return kolmafia.haveEffect($effect(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Gummiheart"])))) === 0;
}

// ─── THE SCHOOL ───────────────────────────────────────────────────────────────

/**
 * The long way to the dreadscroll (cheatsheets, the teacher, the bunwig, the
 * vocabulary) or the short way, when the knucklebone and sushi pin the seed
 * (the lounge's scholar pieces). Picked once a day, since it asks seedfinder.
 */
function schoolRoute() {
  var value = get$1("_sebSchoolRoute");
  if (value === "") {
    value = !isKBandSushiEnough() || inAftercore() ? "vocabulary" : "lounge";
    _set("_sebSchoolRoute", value);
  }
  return value;
}
var vocabularyRoute = () => !highPriest() && schoolRoute() === "vocabulary";
var loungeRoute = () => !highPriest() && schoolRoute() === "lounge" && kolmafia.availableAmount($item(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Mer-kin dreadscroll"])))) === 0 && kolmafia.availableAmount($item(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Mer-kin scholar tailpiece"])))) === 0;
var teacher = () => get$1("merkinElementaryTeacherUnlock");
var loungePieces = () => kolmafia.availableAmount($item(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["Mer-kin facecowl"])))) > 0 && kolmafia.availableAmount($item(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Mer-kin waistrope"])))) > 0;
function takeHallpasses() {
  kolmafia.takeCloset(kolmafia.closetAmount($item(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Mer-kin hallpass"])))), $item(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["Mer-kin hallpass"]))));
}
var vocabularyTasks = [_objectSpread2(_objectSpread2({
  name: "Aftercore school supplies",
  ready: () => vocabularyRoute() && inAftercore(),
  completed: () => kolmafia.itemAmount($item(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["Mer-kin wordquiz"])))) >= 10 || vocabulary() >= 90
}, action(() => kolmafia.cliExecute("acquire 10 mer-kin cheatsheet, 10 mer-kin wordquiz, mer-kin killscroll, mer-kin healscroll, mer-kin knucklebone"))), {}, {
  limit: {
    skip: 1
  }
}), _objectSpread2({
  name: "Cheatsheets",
  ready: vocabularyRoute,
  completed: () => kolmafia.itemAmount($item(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Mer-kin cheatsheet"])))) >= 9 || vocabulary() > 0
}, getCheatsheet()), {
  name: "Unlock the teacher",
  ready: vocabularyRoute,
  completed: () => teacher() || libraryReady(),
  before: closetHallpasses,
  outfit: () => {
    var gear = new Gear("-combat,sea", school).need($item(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["crappy Mer-kin tailpiece"]))), $item(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["crappy Mer-kin mask"]))));
    if (get$1("_backUpUses") < 11 && haveItem($item(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["backup camera"]))))) {
      gear.need($item(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["backup camera"]))));
    } else if (kolmafia.haveSkill($skill(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Double-Fisted Skull Smashing"]))))) {
      gear.need($item(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["Monodent of the Sea"]))));
    }
    if (get$1("_clubEmBattlefieldUsed") < 5) {
      gear.ifEquip($item(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["legendary seal-clubbing club"]))));
    } else if (baseballPlayers() < 9 || !get$1("baseballTeam").includes("838")) {
      gear.ifEquip($item(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Baseball Diamond"]))));
    }
    return gear.ifEquip($item(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["blood cubic zirconia"])))).bathysphere($item(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["toy Cupid bow"])))).ifEquip($item(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["M\xF6bius ring"])))).outfit();
  },
  prepare: () => mood("-combat"),
  do: school,
  post: closetHallpasses
}, {
  name: "Bunwig",
  ready: vocabularyRoute,
  completed: () => kolmafia.availableAmount($item(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["Mer-kin bunwig"])))) > 0 || libraryReady(),
  before: () => {
    if (get$1("baseballTeam").includes("773") && baseballPlayers() === 9) baseballD();
  },
  outfit: () => new Gear("item drop, hat drop,sea", school).need($item(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["crappy Mer-kin tailpiece"]))), $item(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["crappy Mer-kin mask"])))).ifEquip($item(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["legendary seal-clubbing club"]))), $item(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["blood cubic zirconia"]))), $item(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["M\xF6bius ring"])))).bathysphere($item(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit(),
  prepare: () => {
    mood("itdrop");
    if (!teacher()) mood("-combat");
  },
  do: school,
  post: closetHallpasses
}, {
  // Library runs while Steely-Eyed Squint is up, mid-vocabulary.
  name: "Library under Squint",
  ready: () => vocabularyRoute() && vocabulary() < 90 && kolmafia.haveEffect($effect(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["Steely-Eyed Squint"])))) > 0 && library.turnsSpent < 4 && (loungePieces() || haveItem($item(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Mer-kin scholar mask"])))) && haveItem($item(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["Mer-kin scholar tailpiece"]))))),
  completed: () => library.turnsSpent >= 4,
  before: buyScholarGear,
  outfit: () => {
    var gear = new Gear("item drop,sea", library).need($item(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["Mer-kin scholar mask"]))), $item(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["Mer-kin scholar tailpiece"]))), $item(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["Monodent of the Sea"])))).ifEquip($item(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["blood cubic zirconia"]))));
    if (get$1("_backUpUses") < 11 && haveItem($item(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["backup camera"]))))) {
      gear.need($item(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["backup camera"]))));
    }
    return gear.outfit();
  },
  prepare: useMapIfAvailable,
  do: library
}, _objectSpread2({
  // A wordquiz with no cheatsheet and no pull to get one.
  name: "Cheatsheet for a wordquiz",
  ready: () => vocabularyRoute() && vocabulary() < 90 && kolmafia.itemAmount($item(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["Mer-kin wordquiz"])))) > 0 && kolmafia.pullsRemaining() === 0,
  completed: () => kolmafia.itemAmount($item(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["Mer-kin cheatsheet"])))) > 0
}, getCheatsheet()), _objectSpread2({
  name: "Vocabulary",
  ready: vocabularyRoute,
  completed: () => vocabulary() >= 90
}, withHooks(branch(() => kolmafia.itemAmount($item(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["Mer-kin wordquiz"])))) > 0, action(() => {
  if (kolmafia.itemAmount($item(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["Mer-kin cheatsheet"])))) === 0) pullSequence($item(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["Mer-kin cheatsheet"]))));
  kolmafia.use($item(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["Mer-kin wordquiz"]))));
}), {
  outfit: () => new Gear("item drop,sea", school).ifEquip(divingHelmet(), tailpiece(), $item(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["M\xF6bius ring"])))).bathysphere($item(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit(),
  do: school
}), {
  before: takeHallpasses
}))];
var loungeTasks = [{
  name: "Lounge: unlock the teacher",
  ready: loungeRoute,
  completed: () => teacher() || loungePieces(),
  before: closetHallpasses,
  outfit: () => {
    var gear = new Gear("-combat,sea", school).forRole("-combat").need($item(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["Monodent of the Sea"]))), $item(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["crappy Mer-kin tailpiece"]))), $item(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["crappy Mer-kin mask"]))));
    if (baseballPlayers() < 9 || !get$1("baseballTeam").includes("838")) {
      gear.ifEquip($item(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["Baseball Diamond"]))));
    }
    return gear.ifEquip($item(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["blood cubic zirconia"])))).bathysphere($item(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["toy Cupid bow"])))).ifEquip($item(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["M\xF6bius ring"])))).outfit();
  },
  prepare: () => {
    mood("-combat");
    zoneStall("the teacher's lounge noncombat", $item.none, school, school.turnsSpent, 20);
  },
  do: school,
  post: closetHallpasses
}, _objectSpread2(_objectSpread2({
  name: "Lounge: pull a prayerbead",
  ready: () => loungeRoute() && beads() < 3,
  completed: () => beads() >= 3 || pulledToday($item(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))))
}, action(() => pullSequence($item(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["Mer-kin prayerbeads"])))))), {}, {
  limit: {
    skip: 1
  }
}), _objectSpread2({
  name: "Lounge: prayerbeads",
  ready: loungeRoute,
  completed: () => !yogHealingsShort()
}, farmPrayerbeads()), {
  // Waiting for a piece first farms a 5% drop under -150% for the pass
  // that opens the lounge they come from.
  name: "Lounge: scholar pieces",
  ready: loungeRoute,
  completed: loungePieces,
  before: () => {
    takeHallpasses();
    uneffect($effect(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["The Sonata of Sneakiness"]))));
    if (kolmafia.availableAmount($item(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["Mer-kin hallpass"])))) === 0 && kolmafia.pullsRemaining() > reservedPulls()) {
      pullSequence($item(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["Mer-kin hallpass"]))));
    }
  },
  outfit: () => new Gear("item drop,sea", school).forRole("itdrop").ifEquip(divingHelmet(), tailpiece()).need($item(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["Monodent of the Sea"])))).ifEquip($item(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["blood cubic zirconia"]))), $item(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["M\xF6bius ring"])))).bathysphere($item(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit(),
  prepare: () => {
    mood("combat");
    mood("itdrop");
    // The lounge wants a hallpass, so that is the real gate.
    zoneStall("the scholar outfit pieces", $item(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["Mer-kin hallpass"]))), school, school.turnsSpent, 20);
  },
  do: school
}];

// ─── THE LIBRARY AND THE DREADSCROLL ──────────────────────────────────────────

var scholarGear = () => (kolmafia.availableAmount($item(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["Mer-kin scholar mask"])))) > 0 || kolmafia.haveEquipped($item(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["Mer-kin scholar mask"]))))) && (kolmafia.availableAmount($item(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["Mer-kin scholar tailpiece"])))) > 0 || kolmafia.haveEquipped($item(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["Mer-kin scholar tailpiece"])))));
var schoolDone = () => schoolRoute() === "vocabulary" ? vocabulary() >= 90 : !loungeRoute() || loungePieces();
var haveDreadscroll = () => kolmafia.availableAmount($item(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["Mer-kin dreadscroll"])))) > 0;
var libraryDone = () => haveDreadscroll() && [1, 6, 8].every(n => scroll(n) !== 0);
var hintsDone = () => [1, 2, 3, 4, 5, 6, 8].every(n => scroll(n) !== 0);
function sushiClue() {
  if (kolmafia.availableAmount($item(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["Mer-kin worktea"])))) === 0) pullSequence($item(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["Mer-kin worktea"]))));
  kolmafia.retrieveItem($item(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["white rice"]))));
  eatSushi();
}

/** A turn towards the scroll a combat hint needs: thingpouches, a pull, or prayerbead trips. */
function scrollFor(item, fromPouches) {
  return branch(() => fromPouches && kolmafia.itemAmount($item(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["Mer-kin thingpouch"])))) > 0, action(() => kolmafia.use(kolmafia.itemAmount($item(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["Mer-kin thingpouch"])))), $item(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["Mer-kin thingpouch"]))))), branch(() => !lowShiny() && kolmafia.pullsRemaining() > reservedPulls(), action(() => pullSequence(item)), farmPrayerbeads()));
}
var dreadscrollTasks = [_objectSpread2(_objectSpread2({
  name: "Scholar gear",
  ready: () => !highPriest() && schoolDone(),
  completed: scholarGear
}, action(buyScholarGear)), {}, {
  limit: {
    tries: 1
  }
}), _objectSpread2({
  name: "Library",
  ready: () => !highPriest() && schoolDone(),
  completed: libraryDone
}, withHooks(merkinLib(), {
  post: () => {
    if (haveDreadscroll()) dreadSeedCheck();
  }
})), _objectSpread2(_objectSpread2({
  name: "Knucklebone clue",
  ready: () => !highPriest() && haveDreadscroll(),
  completed: () => scroll(4) !== 0
}, action(() => {
  if (kolmafia.itemAmount($item(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["Mer-kin knucklebone"])))) === 0) pullSequence($item(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["Mer-kin knucklebone"]))));
  kolmafia.use($item(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["Mer-kin knucklebone"]))));
  dreadSeedCheck();
})), {}, {
  limit: {
    tries: 1
  }
}), _objectSpread2(_objectSpread2({
  name: "Sushi clue",
  ready: () => !highPriest() && haveDreadscroll() && vocabulary() < 90,
  completed: () => scroll(7) !== 0
}, action(() => {
  sushiClue();
  dreadSeedCheck();
})), {}, {
  limit: {
    skip: 1
  }
}), _objectSpread2({
  name: "Prayerbeads, no pulls to spare",
  ready: () => !highPriest() && libraryDone() && (lowShiny() || kolmafia.pullsRemaining() === 0),
  completed: () => beads() >= 3
}, farmPrayerbeads()), // Every clue but scroll 7 has to be in by now. The two combat scrolls'
// hints come from a gym fight with the scroll in hand.
_objectSpread2({
  name: "Killscroll for its hint",
  ready: () => !highPriest() && libraryDone() && scroll(5) === 0,
  completed: () => kolmafia.itemAmount($item(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["Mer-kin killscroll"])))) > 0
}, withHooks(scrollFor($item(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["Mer-kin killscroll"]))), true), {
  before: () => kolmafia.print("Missed the killscroll hint", "red")
})), _objectSpread2({
  name: "Healscroll for its hint",
  ready: () => !highPriest() && libraryDone() && scroll(2) === 0,
  completed: () => kolmafia.itemAmount($item(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["Mer-kin healscroll"])))) > 0
}, withHooks(scrollFor($item(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["Mer-kin healscroll"]))), false), {
  before: () => kolmafia.print("Missed the healscroll hint", "red")
})), _objectSpread2(_objectSpread2({
  name: "Gym for the scroll hints",
  ready: () => !highPriest() && libraryDone(),
  completed: () => scroll(5) !== 0 && scroll(2) !== 0
}, gymnasium()), {}, {
  limit: {
    skip: 1
  }
}), _objectSpread2(_objectSpread2({
  name: "Every hint in",
  ready: () => !highPriest() && libraryDone(),
  completed: hintsDone
}, action(() => {
  var missed = [1, 3, 4, 6, 8].find(n => scroll(n) === 0);
  if (missed) throw new Error("Missed dreadscroll ".concat(missed, " hint"));
})), {}, {
  limit: {
    tries: 1
  }
})];

// ─── BECOMING HIGH PRIEST ─────────────────────────────────────────────────────

var priestReady = () => !highPriest() && libraryDone() && hintsDone();
var tainted = () => kolmafia.haveEffect($effect(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["Deep-Tainted Mind"])))) > 0;
var skateWar = () => get$1("skateParkStatus") === "war";
var guardsMissing = () => kolmafia.itemAmount($item(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["Mer-kin thighguard"])))) === 0 || kolmafia.itemAmount($item(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["Mer-kin headguard"])))) === 0;
function skateBuff() {
  if (!get$1("_skateBuff1") && !highShiny()) {
    equipSwimTrunks();
    kolmafia.visitUrl("sea_skatepark.php?action=state2buff1");
  }
}
var priestTasks = [_objectSpread2({
  name: "Prayerbeads for Yog-Urt's healing",
  ready: priestReady,
  completed: () => !yogHealingsShort()
}, farmPrayerbeads()), _objectSpread2(_objectSpread2({
  name: "Leprecondo",
  ready: () => priestReady() && have$1() && installedFurniture().includes("padded weight bench"),
  completed: highPriest
}, action(() => leprecondo(highShiny() ? "10,24,12,8,22,13,15,4,5,6" : "22,24,12,8,13,15,10,4,5,6"))), {}, {
  limit: {
    skip: 1
  }
}), _objectSpread2(_objectSpread2({
  name: "Sushi for a god run",
  ready: () => priestReady() && kolmafia.turnsPlayed() <= 17 && get$1("seb_godRunGuard", false) && scroll(7) === 0,
  completed: () => scroll(7) !== 0
}, action(() => {
  if (kolmafia.itemAmount($item(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["Mer-kin worktea"])))) === 0) {
    throw new Error("On track for a god run, eat a sushi for the dreadscroll clue");
  }
  kolmafia.retrieveItem($item(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["white rice"]))));
  eatSushi();
})), {}, {
  limit: {
    tries: 1
  }
}), _objectSpread2(_objectSpread2({
  name: "Aftercore sushi",
  ready: () => priestReady() && inAftercore() && !tainted(),
  completed: highPriest
}, action(() => {
  if (!get$1("hasSushiMat")) kolmafia.use($item(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["sushi-rolling mat"]))));
  kolmafia.retrieveItem($item(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["Mer-kin worktea"]))));
  kolmafia.retrieveItem($item(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["white rice"]))));
  eatSushi();
})), {}, {
  limit: {
    skip: 1
  }
}), // A wrong reading leaves Deep-Tainted Mind, which only spent turns clear.
_objectSpread2(_objectSpread2({
  name: "Tainted: skate park war",
  ready: () => priestReady() && tainted() && skateWar(),
  completed: () => !tainted()
}, skateParkWar()), {}, {
  limit: {
    tries: 15
  }
}), _objectSpread2({
  name: "Tainted: gym",
  ready: () => priestReady() && tainted() && guardsMissing(),
  completed: () => !tainted()
}, withHooks(gymnasium(), {
  post: skateBuff
})), _objectSpread2({
  name: "Tainted: abyss",
  ready: () => priestReady() && tainted() && questStep("questS02Monkees") === 12,
  completed: () => !tainted()
}, finishCaliginous()), _objectSpread2({
  name: "Tainted: nowhere to go",
  ready: () => priestReady() && tainted(),
  completed: () => !tainted()
}, action(() => {
  throw new Error("Hit a 1-in-40 situation; spend 1 non-free turn somewhere and rerun script");
})), _objectSpread2(_objectSpread2({
  name: "Read the dreadscroll",
  ready: () => priestReady() && !tainted(),
  completed: highPriest
}, withHooks(action(() => kolmafia.use($item(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["Mer-kin dreadscroll"]))))), {
  before: () => uneffect($effect(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["The Sonata of Sneakiness"]))))
})), {}, {
  postAdventure: true,
  limit: {
    tries: 5
  }
})];

// ─── YOG-URT ──────────────────────────────────────────────────────────────────

var yogWanted = () => inSeaPath() && !get$1("yogUrtDefeated") || inAftercore() && aftercoreBoss() === "Yogurt";
var disguised = () => tamed() && (tailpiece() !== $item.none || kolmafia.availableAmount($item(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["crappy Mer-kin tailpiece"])))) > 0);
var skateCleanup = [_objectSpread2(_objectSpread2({
  name: "Skate park war",
  ready: skateWar,
  completed: () => !skateWar()
}, skateParkWar()), {}, {
  limit: {
    tries: 15
  }
}), _objectSpread2(_objectSpread2({
  name: "Skate park buff",
  ready: () => !highShiny(),
  completed: () => get$1("_skateBuff1")
}, action(skateBuff)), {}, {
  limit: {
    tries: 1
  }
})];

/** Prayerbeads worn, and the healing pulls that stand in for missing ones. */
function yogBeadsAndHealing() {
  kolmafia.equip($slot(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral(["acc1"]))), $item(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))));
  var pullIfMissing = item => {
    if (kolmafia.itemAmount(item) === 0 && !pulledToday(item)) {
      pullSequence(item);
      return true;
    }
    return false;
  };
  if (beads() >= 3) {
    kolmafia.equip($slot(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral(["acc2"]))), $item(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))));
    kolmafia.equip($slot(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["acc3"]))), $item(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))));
  } else if (beads() >= 2) {
    kolmafia.equip($slot(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["acc2"]))), $item(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))));
    if (!pullIfMissing($item(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["New Age healing crystal"]))))) pullIfMissing($item(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["soggy used band-aid"]))));
  } else {
    pullIfMissing($item(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["New Age healing crystal"]))));
    pullIfMissing($item(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["soggy used band-aid"]))));
  }
}

/** A prayerbead, while still in the Yog-Urt outfit: the healscroll a healer drops can fix the HP check. */
function prayerbeadNow() {
  if (pawWishReady()) {
    wishFor($item(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))));
    return;
  }
  prayerbeadGear().dress();
  mood("-combat");
  adv($location(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["The Mer-Kin Outpost"]))));
}
var YogUrtQuest = {
  name: "Yog-Urt",
  ready: () => disguised() && yogWanted(),
  tasks: [].concat(vocabularyTasks, loungeTasks, dreadscrollTasks, priestTasks, _toConsumableArray(skateCleanup.map(task => _objectSpread2(_objectSpread2({}, task), {}, {
    ready: () => highPriest() && task.ready()
  }))), [_objectSpread2({
    name: "Prayerbeads, short on pulls",
    ready: () => highPriest() && beads() < 3 && (lowShiny() || kolmafia.pullsRemaining() === 0),
    completed: () => !yogHealingsShort()
  }, farmPrayerbeads()), _objectSpread2(_objectSpread2({
    name: "Healscroll",
    ready: highPriest,
    completed: () => kolmafia.itemAmount($item(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["Mer-kin healscroll"])))) > 0
  }, action(() => pullSequence($item(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["Mer-kin healscroll"])))))), {}, {
    limit: {
      skip: 1
    }
  }), // Null Afternoon stands in for the two delevelers while it lasts.
  _objectSpread2(_objectSpread2({
    name: "Null-day exploit",
    ready: () => highPriest() && kolmafia.haveEffect($effect(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["Null Afternoon"])))) === 0 && delevelers() < 2 && !pulledToday($item(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral(["null-day exploit"])))) && kolmafia.pullsRemaining() > 0 && !lowShiny(),
    completed: () => kolmafia.haveEffect($effect(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral(["Null Afternoon"])))) > 0
  }, action(() => {
    pullSequence($item(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral(["null-day exploit"]))));
    kolmafia.use($item(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral(["null-day exploit"]))));
  })), {}, {
    limit: {
      tries: 1
    }
  }), _objectSpread2({
    name: "Delevelers from the corral",
    ready: () => highPriest() && kolmafia.haveEffect($effect(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral(["Null Afternoon"])))) === 0,
    completed: () => delevelers() >= 2
  }, withHooks(corralFarm(), {
    post: () => {
      if (corral.turnsSpent % 10 === 0) {
        kolmafia.print("Deleveler farming: ".concat(corral.turnsSpent, " turns in The Coral Corral. ") + "Yog-Urt needs 2 delevelers and ".concat(delevelers(), " are on hand."), "red");
      }
    }
  })), _objectSpread2({
    name: "Prayerbeads for the healing",
    ready: highPriest,
    completed: () => !yogHealingsShort()
  }, farmPrayerbeads()), {
    name: "Yog-Urt",
    ready: highPriest,
    completed: () => get$1("yogUrtDefeated"),
    before: () => {
      kolmafia.cliExecute("acquire waterlogged scroll of healing, sea gel, Doc Galaktik's Pungent Unguent, Doc Galaktik's Homeopathic Elixir; cast cannel");
      if (beads() < 3 && !pulledToday($item(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))))) {
        pullSequence($item(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))));
      }
    },
    outfit: () => new Gear("moxie, hot damage, cold damage, spooky damage, sleaze damage, stench damage, -hp, -equip tiny yam cannon,sea", rightDoor).forRole("exp").need($item(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral(["Mer-kin scholar mask"]))), $item(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral(["Mer-kin scholar tailpiece"])))).bathysphere($item(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral(["toy Cupid bow"])))).ifEquip($item(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral(["bat wings"])))).outfit(),
    prepare: yogBeadsAndHealing,
    do: () => {
      // Farming the outpost can move this: a healer's healscroll raises
      // the weakest healing the fight will throw.
      if (!yogHpCheck()) {
        prayerbeadNow();
        return;
      }
      // Prayerbead farming can outlast Null Afternoon; restock delevelers first.
      if (kolmafia.haveEffect($effect(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["Null Afternoon"])))) === 0 && delevelers() < 2) return;
      return rightDoor;
    },
    limit: {
      tries: 25,
      message: "Predicted HP is still too high for the healing on hand; check what is granting maximum HP, or whether Gummiheart is up."
    }
  }])
};
var finishAbyss = _objectSpread2({
  name: "Finish the abyss",
  ready: () => inSeaPath() && questStep("questS02Monkees") === 12,
  completed: () => questStep("questS02Monkees") !== 12
}, finishCaliginous());
var AfterYogUrtQuest = {
  name: "After Yog-Urt",
  ready: () => disguised() && (!inSeaPath() || get$1("yogUrtDefeated")),
  tasks: [].concat(_toConsumableArray(skateCleanup.map(task => _objectSpread2(_objectSpread2({}, task), {}, {
    ready: () => inSeaPath() && task.ready()
  }))), [_objectSpread2(_objectSpread2({
    // The comfort and cleanup items wait until Shub is dead: they once ate
    // the last pull slots right before a Shub retry needed the null-day exploit.
    name: "Late pulls",
    ready: inSeaPath,
    completed: () => kolmafia.pullsRemaining() === 0
  }, action(() => {
    if (kolmafia.itemAmount($item(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["crayon shavings"])))) < 8) pullSequence($item(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["null-day exploit"]))));
    var _iterator = _createForOfIteratorHelper($items(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["peppermint parasol, ink bladder, Mer-kin pinkslip, stuffed yam stinkbomb, Louder Than Bomb, anchor bomb"])))),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        if (item === $item(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral(["peppermint parasol"]))) && (haveItem($item(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["navel ring of navel gazing"])))) || haveItem($item(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral(["Greatest American Pants"])))))) {
          continue;
        }
        if (!pulledToday(item)) pullSequence(item);
        if (kolmafia.pullsRemaining() === 0) break;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  })), {}, {
    limit: {
      skip: 1
    }
  }), _objectSpread2(_objectSpread2({}, finishAbyss), {}, {
    ready: () => finishAbyss.ready() && get$1("spookyVHSTapeMonster") === null
  })])
};

// ─── THE COLOSSEUM AND SHUB-JIGGUWATT ─────────────────────────────────────────

/**
 * Champions come at rounds won 12 to 14 and must die to one Saucegeyser.
 * Stops before the turn when the estimate is short of the weakest one's HP,
 * or no higher than one that already failed today.
 */
function championCheck() {
  var won = get$1("lastColosseumRoundWon");
  if (won < 12 || won > 14 || !kolmafia.haveSkill($skill(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral(["Saucegeyser"])))) || get$1("isMerkinGladiatorChampion")) {
    return;
  }
  var weakest = kolmafia.monsterHp($monster(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral(["Georgepaul, the Balldodger"]))));
  // "estimate:roundsWon", written by the combat script before each champion cast.
  // A round won since then means that cast killed, so it isn't a failure.
  var _get$split = get$1("_sebChampionRanEst", "").split(":"),
    _get$split2 = _slicedToArray(_get$split, 2),
    ranEst = _get$split2[0],
    wonThen = _get$split2[1];
  var failed = ranEst !== "" && won <= kolmafia.toInt(wonThen ?? "0");
  var why = "";
  if (failed && geyserLowRoll() <= kolmafia.toInt(ranEst)) {
    why = "SEB: one Saucegeyser estimated at ".concat(ranEst, " failed to kill a Colosseum champion today, ") + "and the estimate here is ".concat(geyserLowRoll(), ". Raise Mysticality or spell damage past that, or fight it by hand, then rerun.");
  } else if (geyserLowRoll() < weakest) {
    why = "SEB: the Colosseum champions (".concat(weakest, " HP and up) must die to one Saucegeyser, estimated at ") + "".concat(geyserLowRoll(), " here. Raise Mysticality or spell damage, or fight them by hand, then rerun.");
  }
  if (why === "") {
    _set("_sebChampionRanEst", "");
    return;
  }
  kolmafia.print(why, "red");
  throw new Error(why);
}
var gladiatorGear = () => kolmafia.availableAmount($item(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral(["Mer-kin gladiator mask"])))) > 0 && kolmafia.availableAmount($item(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral(["Mer-kin gladiator tailpiece"])))) > 0;
var roundsWon = () => get$1("lastColosseumRoundWon");
var shubWanted = () => inSeaPath() || inAftercore() && aftercoreBoss() === "Shub";
var ShubQuest = {
  name: "Shub-Jigguwatt",
  ready: () => disguised() && (!inSeaPath() || get$1("yogUrtDefeated")) && shubWanted(),
  completed: () => get$1("shubJigguwattDefeated"),
  tasks: [_objectSpread2({
    name: "Gym for the guards",
    ready: () => !gladiatorGear() && guardsMissing(),
    completed: gladiatorGear
  }, gymnasium()), _objectSpread2(_objectSpread2({
    name: "Gladiator gear",
    completed: gladiatorGear
  }, action(() => {
    kolmafia.equip($slot(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral(["hat"]))), $item.none);
    kolmafia.equip($slot(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral(["pants"]))), $item.none);
    equipSwimTrunks();
    if (kolmafia.itemAmount($item(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral(["Mer-kin scholar mask"])))) > 0) {
      kolmafia.visitUrl("shop.php?whichshop=grandma&action=buyitem&quantity=1&whichrow=131");
    }
    if (kolmafia.itemAmount($item(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral(["Mer-kin scholar tailpiece"])))) > 0) {
      kolmafia.visitUrl("shop.php?whichshop=grandma&action=buyitem&quantity=1&whichrow=1619");
    }
    var _iterator2 = _createForOfIteratorHelper($items(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral(["Mer-kin gladiator mask, Mer-kin gladiator tailpiece"])))),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        if (kolmafia.availableAmount(item) === 0) kolmafia.buy($coinmaster(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral(["Grandma Sea Monkey"]))), 1, item);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    kolmafia.refreshStatus();
  })), {}, {
    limit: {
      tries: 1
    }
  }), {
    // Gladiators are insta-kill immune, so the club is the only free round
    // in the building. Past its five casts, only the bat wings can refund a round.
    name: "Colosseum",
    completed: () => roundsWon() >= 15,
    before: () => {
      if (roundsWon() >= 3 && kolmafia.haveEffect($effect(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral(["Up To 11"])))) === 0 && kolmafia.haveSkill($skill(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral(["BCZ: Dial it up to 11"]))))) {
        kolmafia.cliExecute($effect(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral(["Up To 11"]))).default);
      }
      if (roundsWon() >= 6 && kolmafia.itemAmount($item(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral(["crayon shavings"])))) < 8 && kolmafia.itemAmount($item(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral(["null-day exploit"])))) > 0 && kolmafia.haveEffect($effect(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral(["Null Afternoon"])))) === 0) {
        kolmafia.use($item(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral(["null-day exploit"]))));
      }
    },
    outfit: () => {
      var coeff = (60 + kolmafia.myBuffedstat($stat(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral(["Mysticality"])))) / 2.5) / (kolmafia.numericModifier("Spell Damage Percent") + 1);
      var gear = new Gear("".concat(coeff, " spell damage percent, mys,sea"), colosseum).need($item(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral(["Mer-kin gladiator tailpiece"]))), $item(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral(["Mer-kin gladiator mask"]))));
      if (kolmafia.haveFamiliar($familiar(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral(["Patriotic Eagle"])))) && get$1("screechCombats") > 0 && haveItem($item(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral(["Congressional Medal of Insanity"]))))) {
        gear.fam($familiar(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral(["Patriotic Eagle"]))));
      } else if (kolmafia.haveFamiliar($familiar(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral(["Foul Ball"]))))) {
        gear.fam($familiar(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral(["Foul Ball"]))));
      }
      if (get$1("_clubEmTimeUsed") < 5 && !highShiny() && !lowShiny() && haveItem($item(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral(["legendary seal-clubbing club"]))))) {
        gear.need($item(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral(["legendary seal-clubbing club"]))));
      }
      if (have$3() && flapChance() > 0) {
        gear.ifEquip($item(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral(["bat wings"]))));
      } else if (haveItem($item(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))))) {
        gear.need($item(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))).mode({
          retrocape: ["heck", "kill"]
        });
      }
      return gear.ifEquip($item(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral(["Congressional Medal of Insanity"])))).bathysphere().outfit();
    },
    prepare: () => {
      mood("colosseum");
      championCheck();
    },
    do: colosseum,
    post: () => {
      if (get$1("lastEncounter") === "Been There, Won That") {
        _set("lastColosseumRoundWon", 15);
        _set("isMerkinGladiatorChampion", true);
      }
    },
    limit: {
      tries: 30
    }
  }, finishAbyss, {
    name: "Shub-Jigguwatt",
    completed: () => get$1("shubJigguwattDefeated"),
    before: () => {
      if (inAftercore()) {
        kolmafia.retrieveItem(8, $item(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral(["crayon shavings"]))));
      } else if (kolmafia.itemAmount($item(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral(["crayon shavings"])))) < 8 && kolmafia.haveEffect($effect(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral(["Null Afternoon"])))) === 0) {
        if (kolmafia.itemAmount($item(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral(["null-day exploit"])))) > 0) kolmafia.use($item(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral(["null-day exploit"]))));else if (highShiny()) mood("shub");else throw new Error("Hit Shub without adequate delevers, this means something went wrong, sorry!");
      }
      var _iterator3 = _createForOfIteratorHelper($effects(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral(["Scarysauce"])))),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var effect = _step3.value;
          if (kolmafia.haveEffect(effect) > 0 && !uneffect(effect)) {
            kolmafia.print("Couldn't remove ".concat(effect, " before Shub-Jigguwatt."), "red");
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    },
    outfit: () => new Gear("damage absorption, mus,sea", leftDoor).forRole("exp").need($item(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral(["Mer-kin gladiator mask"]))), $item(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral(["Mer-kin gladiator tailpiece"])))).bathysphere($item(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral(["toy Cupid bow"])))).outfit(),
    prepare: () => {
      _set("hpAutoRecoveryTarget", 1);
      _set("mpAutoRecovery", -0.05);
      _set("mpAutoRecoveryTarget", -0.05);
      while (kolmafia.myHp() < kolmafia.myMaxhp()) kolmafia.useSkill($skill(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral(["Cannelloni Cocoon"]))));
      kolmafia.cliExecute("recover hp; cast * empathy");
    },
    do: leftDoor,
    limit: {
      tries: 1
    }
  }]
};

// ─── THE FINAL BOSS ───────────────────────────────────────────────────────────

var finalBossGear = () => {
  var gear = new Gear("spell damage percent, mys,sea", center).need($item(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral(["Mer-kin gladiator mask"]))), $item(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral(["Mer-kin gladiator tailpiece"]))));
  if (flapChance() > 0) {
    gear.ifEquip($item(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral(["bat wings"]))));
  } else if (haveItem($item(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))))) {
    gear.need($item(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))).mode({
      retrocape: ["heck", "kill"]
    });
  }
  return gear.ifEquip($item(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral(["Congressional Medal of Insanity"])))).bathysphere($item(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral(["toy Cupid bow"]))));
};
var FinalBossQuest = {
  name: "Final boss",
  tasks: [{
    name: "Naughty Sorceress",
    ready: () => inSeaPath() && get$1("shubJigguwattDefeated"),
    completed: () => questStep("questL13Final") >= 0,
    outfit: () => finalBossGear().outfit(),
    do: () => {
      adv(center);
      adv(center);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Dad",
    ready: () => inAftercore() && aftercoreBoss() === "Dad",
    completed: () => get$1("_sebDadFought", false),
    before: () => kolmafia.cliExecute("acquire 3 warbear whosit; acquire 3 volcanic ash; recover mp; tempura air"),
    outfit: () => new Gear("spell damage percent,sea", center).fam($familiar(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral(["Tiny Plastic Santa Claus Skeleton"])))).need($item(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral(["Goggles of Loathing"]))), $item(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral(["Stick-Knife of Loathing"]))), $item(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral(["Scepter of Loathing"]))), $item(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral(["Jeans of Loathing"]))), $item(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral(["Treads of Loathing"]))), $item(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral(["Belt of Loathing"]))), $item(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral(["little bitty bathysphere"])))).outfit(),
    prepare: () => _set("mpAutoRecoveryTarget", 1),
    do: () => {
      _set("_sebDadFought", true);
      return center;
    },
    limit: {
      tries: 1
    }
  }]
};

function main(command) {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }
  if (args.sim) {
    // Report only: the checklists the run prints at startup, and nothing else.
    iotmChecklist();
    skillChecklist();
    pullChecklist();
    return;
  }
  setDropsItems(kolmafia.maximize("Drops Items", false) ? "Drops Items, sea" : "item drop, sea");
  // Every fight goes through the ported combat script.
  kolmafia.writeCcs("[ default ]\nconsult ".concat(COMBAT_SCRIPT, "\nabort"), SEB_CCS);
  if (args.postloop) {
    // The finishing steps the run would have reached on its own, without
    // initialization() or any of the run itself. Each self-gates on its own
    // seb_postLoop* pref, so with none set this only sets up and tears down.
    var _engine = new SebEngine(getTasks([PostloopQuest]), {
      ccs: SEB_CCS
    });
    kolmafia.print("Starting UnderTheSea (postloop only)");
    try {
      // A run killed mid-walk can leave these set.
      _engine.properties.set({
        _sebPearlFarm: false,
        _sebScreechReaim: false
      });
      _engine.run();
    } catch (e) {
      _set("_lastScriptError", "".concat(e));
      throw e;
    } finally {
      _engine.destruct();
      kolmafia.print("Ending UnderTheSea");
    }
    return;
  }
  if (args.boss) _set("_sebAftercoreBoss", args.boss);
  var home = Clan.get();
  // Freeing the king at the council drops the path, which makes the aftercore
  // tasks ready. A run that starts in the path stops at the king: its sea
  // quests stay gated on the path, and only the postloop steps run after.
  var startedInPath = inSeaPath();
  var pathOnly = quest => startedInPath ? _objectSpread2(_objectSpread2({}, quest), {}, {
    ready: () => {
      var _quest$ready;
      return inSeaPath() && (((_quest$ready = quest.ready) === null || _quest$ready === void 0 ? void 0 : _quest$ready.call(quest)) ?? true);
    }
  }) : quest;
  // In seaMonkees() order: the early lasso, the guild, the quest, the outpost,
  // the seahorse, the temple, then past the prism. Every task reads its state
  // from the game, so a rerun picks up where the last one stopped.
  var engine = new SebEngine(getTasks([].concat(_toConsumableArray([LassoQuest, GuildQuest, MonkeesQuest, OutpostQuest, SeahorseRouteQuest, TeflonQuest, BackupLassoQuest, TamingQuest, PostSeahorseQuest, YogUrtQuest, AfterYogUrtQuest, ShubQuest, FinalBossQuest, PathCleanupQuest].map(pathOnly)), [// The postloop steps wait for the council visit that closes the path.
  _objectSpread2(_objectSpread2({}, PostloopQuest), {}, {
    ready: () => get$1("_sebCouncilVisited", false)
  })])), {
    ccs: SEB_CCS
  });
  kolmafia.print("Starting UnderTheSea");
  try {
    initialization();
    // Priming, in case the last run aborted mid-combat.
    postAdventure();
    engine.run();
    if (startedInPath && !inSeaPath()) {
      kolmafia.print("SEB: the king is free, so this run is done. Aftercore takes its own run.", "blue");
    } else if (inSeaPath() && questStep("questL13Final") < 999) {
      kolmafia.print("SEB: no task is ready to run, but the prism isn't broken yet. Check the log above.", "red");
    }
  } catch (e) {
    // halfloop reads this when cli_execute("sebastian") fails. abort() skips
    // both, so failures throw instead.
    _set("_lastScriptError", "".concat(e));
    throw e;
  } finally {
    engine.destruct();
    // The Sheriff props come from a photo booth in another clan.
    if (Clan.get().id !== home.id) {
      home.join();
    }
    kolmafia.print("Ending UnderTheSea");
  }
}

exports.main = main;
