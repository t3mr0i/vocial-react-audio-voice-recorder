(function(){"use strict";(r=>{try{if(typeof window>"u")return;var e=document.createElement("style");e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})(".audio-recorder{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px}.audio-recorder-controls{display:flex;align-items:center;justify-content:space-between;width:100%;padding:10px}.audio-recorder-submit{margin-left:auto}.audio-recorder-mic{box-sizing:content-box;cursor:pointer;height:16px;color:#000;padding:12px}.audio-recorder .audio-recorder-mic{border-radius:20px}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-icon{margin:0 8px;cursor:pointer}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{box-sizing:content-box;height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}.audio-recorder-visualizer{margin-left:15px;flex-grow:1;align-self:center;display:flex;align-items:center}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}.audio-recorder-timer,.audio-recorder-status{margin:0 8px;color:#333;font-size:14px}")})();
import it, { useState as Ae, useCallback as Ge, useEffect as ha, Suspense as xa } from "react";
function wa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bt = { exports: {} }, Xe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dn;
function ka() {
  if (Dn)
    return Xe;
  Dn = 1;
  var e = it, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(f, l, c) {
    var u, d = {}, b = null, w = null;
    c !== void 0 && (b = "" + c), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (u in l)
      r.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (f && f.defaultProps)
      for (u in l = f.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: f, key: b, ref: w, props: d, _owner: a.current };
  }
  return Xe.Fragment = n, Xe.jsx = s, Xe.jsxs = s, Xe;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn;
function Ea() {
  return Fn || (Fn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = it, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), _ = Symbol.iterator, E = "@@iterator";
    function O(o) {
      if (o === null || typeof o != "object")
        return null;
      var m = _ && o[_] || o[E];
      return typeof m == "function" ? m : null;
    }
    var F = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(o) {
      {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), S = 1; S < m; S++)
          g[S - 1] = arguments[S];
        R("error", o, g);
      }
    }
    function R(o, m, g) {
      {
        var S = F.ReactDebugCurrentFrame, U = S.getStackAddendum();
        U !== "" && (m += "%s", g = g.concat([U]));
        var H = g.map(function(Y) {
          return String(Y);
        });
        H.unshift("Warning: " + m), Function.prototype.apply.call(console[o], console, H);
      }
    }
    var P = !1, v = !1, Z = !1, te = !1, me = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Te(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === i || me || o === a || o === c || o === u || te || o === w || P || v || Z || typeof o == "object" && o !== null && (o.$$typeof === b || o.$$typeof === d || o.$$typeof === s || o.$$typeof === f || o.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === ne || o.getModuleId !== void 0));
    }
    function Me(o, m, g) {
      var S = o.displayName;
      if (S)
        return S;
      var U = m.displayName || m.name || "";
      return U !== "" ? g + "(" + U + ")" : g;
    }
    function Le(o) {
      return o.displayName || "Context";
    }
    function ie(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case f:
            var m = o;
            return Le(m) + ".Consumer";
          case s:
            var g = o;
            return Le(g._context) + ".Provider";
          case l:
            return Me(o, o.render, "ForwardRef");
          case d:
            var S = o.displayName || null;
            return S !== null ? S : ie(o.type) || "Memo";
          case b: {
            var U = o, H = U._payload, Y = U._init;
            try {
              return ie(Y(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ae = Object.assign, ve = 0, oe, ce, Pe, De, p, x, N;
    function j() {
    }
    j.__reactDisabledLog = !0;
    function A() {
      {
        if (ve === 0) {
          oe = console.log, ce = console.info, Pe = console.warn, De = console.error, p = console.group, x = console.groupCollapsed, N = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: j,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        ve++;
      }
    }
    function z() {
      {
        if (ve--, ve === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ae({}, o, {
              value: oe
            }),
            info: ae({}, o, {
              value: ce
            }),
            warn: ae({}, o, {
              value: Pe
            }),
            error: ae({}, o, {
              value: De
            }),
            group: ae({}, o, {
              value: p
            }),
            groupCollapsed: ae({}, o, {
              value: x
            }),
            groupEnd: ae({}, o, {
              value: N
            })
          });
        }
        ve < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = F.ReactCurrentDispatcher, I;
    function M(o, m, g) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (U) {
            var S = U.stack.trim().match(/\n( *(at )?)/);
            I = S && S[1] || "";
          }
        return `
` + I + o;
      }
    }
    var W = !1, L;
    {
      var ee = typeof WeakMap == "function" ? WeakMap : Map;
      L = new ee();
    }
    function y(o, m) {
      if (!o || W)
        return "";
      {
        var g = L.get(o);
        if (g !== void 0)
          return g;
      }
      var S;
      W = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = C.current, C.current = null, A();
      try {
        if (m) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (pe) {
              S = pe;
            }
            Reflect.construct(o, [], Y);
          } else {
            try {
              Y.call();
            } catch (pe) {
              S = pe;
            }
            o.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            S = pe;
          }
          o();
        }
      } catch (pe) {
        if (pe && S && typeof pe.stack == "string") {
          for (var $ = pe.stack.split(`
`), re = S.stack.split(`
`), K = $.length - 1, J = re.length - 1; K >= 1 && J >= 0 && $[K] !== re[J]; )
            J--;
          for (; K >= 1 && J >= 0; K--, J--)
            if ($[K] !== re[J]) {
              if (K !== 1 || J !== 1)
                do
                  if (K--, J--, J < 0 || $[K] !== re[J]) {
                    var le = `
` + $[K].replace(" at new ", " at ");
                    return o.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", o.displayName)), typeof o == "function" && L.set(o, le), le;
                  }
                while (K >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        W = !1, C.current = H, z(), Error.prepareStackTrace = U;
      }
      var ze = o ? o.displayName || o.name : "", Ln = ze ? M(ze) : "";
      return typeof o == "function" && L.set(o, Ln), Ln;
    }
    function fe(o, m, g) {
      return y(o, !1);
    }
    function Fe(o) {
      var m = o.prototype;
      return !!(m && m.isReactComponent);
    }
    function _e(o, m, g) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return y(o, Fe(o));
      if (typeof o == "string")
        return M(o);
      switch (o) {
        case c:
          return M("Suspense");
        case u:
          return M("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            return fe(o.render);
          case d:
            return _e(o.type, m, g);
          case b: {
            var S = o, U = S._payload, H = S._init;
            try {
              return _e(H(U), m, g);
            } catch {
            }
          }
        }
      return "";
    }
    var lt = Object.prototype.hasOwnProperty, On = {}, Sn = F.ReactDebugCurrentFrame;
    function ut(o) {
      if (o) {
        var m = o._owner, g = _e(o.type, o._source, m ? m.type : null);
        Sn.setExtraStackFrame(g);
      } else
        Sn.setExtraStackFrame(null);
    }
    function Qr(o, m, g, S, U) {
      {
        var H = Function.call.bind(lt);
        for (var Y in o)
          if (H(o, Y)) {
            var $ = void 0;
            try {
              if (typeof o[Y] != "function") {
                var re = Error((S || "React class") + ": " + g + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              $ = o[Y](m, Y, S, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (K) {
              $ = K;
            }
            $ && !($ instanceof Error) && (ut(U), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", g, Y, typeof $), ut(null)), $ instanceof Error && !($.message in On) && (On[$.message] = !0, ut(U), T("Failed %s type: %s", g, $.message), ut(null));
          }
      }
    }
    var ea = Array.isArray;
    function Ct(o) {
      return ea(o);
    }
    function ta(o) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, g = m && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return g;
      }
    }
    function na(o) {
      try {
        return Tn(o), !1;
      } catch {
        return !0;
      }
    }
    function Tn(o) {
      return "" + o;
    }
    function Pn(o) {
      if (na(o))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ta(o)), Tn(o);
    }
    var Be = F.ReactCurrentOwner, ra = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _n, An, It;
    It = {};
    function aa(o) {
      if (lt.call(o, "ref")) {
        var m = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function ia(o) {
      if (lt.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function oa(o, m) {
      if (typeof o.ref == "string" && Be.current && m && Be.current.stateNode !== m) {
        var g = ie(Be.current.type);
        It[g] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ie(Be.current.type), o.ref), It[g] = !0);
      }
    }
    function sa(o, m) {
      {
        var g = function() {
          _n || (_n = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        g.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function fa(o, m) {
      {
        var g = function() {
          An || (An = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        g.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var la = function(o, m, g, S, U, H, Y) {
      var $ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: m,
        ref: g,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function ua(o, m, g, S, U) {
      {
        var H, Y = {}, $ = null, re = null;
        g !== void 0 && (Pn(g), $ = "" + g), ia(m) && (Pn(m.key), $ = "" + m.key), aa(m) && (re = m.ref, oa(m, U));
        for (H in m)
          lt.call(m, H) && !ra.hasOwnProperty(H) && (Y[H] = m[H]);
        if (o && o.defaultProps) {
          var K = o.defaultProps;
          for (H in K)
            Y[H] === void 0 && (Y[H] = K[H]);
        }
        if ($ || re) {
          var J = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          $ && sa(Y, J), re && fa(Y, J);
        }
        return la(o, $, re, U, S, Be.current, Y);
      }
    }
    var jt = F.ReactCurrentOwner, Rn = F.ReactDebugCurrentFrame;
    function $e(o) {
      if (o) {
        var m = o._owner, g = _e(o.type, o._source, m ? m.type : null);
        Rn.setExtraStackFrame(g);
      } else
        Rn.setExtraStackFrame(null);
    }
    var Nt;
    Nt = !1;
    function Mt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Cn() {
      {
        if (jt.current) {
          var o = ie(jt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function ca(o) {
      {
        if (o !== void 0) {
          var m = o.fileName.replace(/^.*[\\\/]/, ""), g = o.lineNumber;
          return `

Check your code at ` + m + ":" + g + ".";
        }
        return "";
      }
    }
    var In = {};
    function da(o) {
      {
        var m = Cn();
        if (!m) {
          var g = typeof o == "string" ? o : o.displayName || o.name;
          g && (m = `

Check the top-level render call using <` + g + ">.");
        }
        return m;
      }
    }
    function jn(o, m) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var g = da(m);
        if (In[g])
          return;
        In[g] = !0;
        var S = "";
        o && o._owner && o._owner !== jt.current && (S = " It was passed a child from " + ie(o._owner.type) + "."), $e(o), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, S), $e(null);
      }
    }
    function Nn(o, m) {
      {
        if (typeof o != "object")
          return;
        if (Ct(o))
          for (var g = 0; g < o.length; g++) {
            var S = o[g];
            Mt(S) && jn(S, m);
          }
        else if (Mt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var U = O(o);
          if (typeof U == "function" && U !== o.entries)
            for (var H = U.call(o), Y; !(Y = H.next()).done; )
              Mt(Y.value) && jn(Y.value, m);
        }
      }
    }
    function ma(o) {
      {
        var m = o.type;
        if (m == null || typeof m == "string")
          return;
        var g;
        if (typeof m == "function")
          g = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === d))
          g = m.propTypes;
        else
          return;
        if (g) {
          var S = ie(m);
          Qr(g, o.props, "prop", S, o);
        } else if (m.PropTypes !== void 0 && !Nt) {
          Nt = !0;
          var U = ie(m);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function va(o) {
      {
        for (var m = Object.keys(o.props), g = 0; g < m.length; g++) {
          var S = m[g];
          if (S !== "children" && S !== "key") {
            $e(o), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), $e(null);
            break;
          }
        }
        o.ref !== null && ($e(o), T("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    function Mn(o, m, g, S, U, H) {
      {
        var Y = Te(o);
        if (!Y) {
          var $ = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = ca(U);
          re ? $ += re : $ += Cn();
          var K;
          o === null ? K = "null" : Ct(o) ? K = "array" : o !== void 0 && o.$$typeof === t ? (K = "<" + (ie(o.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : K = typeof o, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, $);
        }
        var J = ua(o, m, g, U, H);
        if (J == null)
          return J;
        if (Y) {
          var le = m.children;
          if (le !== void 0)
            if (S)
              if (Ct(le)) {
                for (var ze = 0; ze < le.length; ze++)
                  Nn(le[ze], o);
                Object.freeze && Object.freeze(le);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nn(le, o);
        }
        return o === r ? va(J) : ma(J), J;
      }
    }
    function pa(o, m, g) {
      return Mn(o, m, g, !0);
    }
    function ba(o, m, g) {
      return Mn(o, m, g, !1);
    }
    var ga = ba, ya = pa;
    Ke.Fragment = r, Ke.jsx = ga, Ke.jsxs = ya;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Bt.exports = ka() : Bt.exports = Ea();
var be = Bt.exports;
const Oa = (e, t, n) => {
  const [r, a] = Ae(!1), [i, s] = Ae(!1), [f, l] = Ae(0), [c, u] = Ae(), [d, b] = Ae(), [w, _] = Ae(), E = Ge(() => {
    const P = setInterval(() => {
      l((v) => v + 1);
    }, 1e3);
    b(P);
  }, [l, b]), O = Ge(() => {
    d != null && clearInterval(d), b(void 0);
  }, [d, b]), F = Ge(() => {
    d == null && navigator.mediaDevices.getUserMedia({ audio: e ?? !0 }).then((P) => {
      a(!0);
      const v = new MediaRecorder(
        P,
        n
      );
      u(v), v.start(), E(), v.addEventListener("dataavailable", (Z) => {
        _(Z.data), v.stream.getTracks().forEach((te) => te.stop()), u(void 0);
      });
    }).catch((P) => {
      console.log(P.name, P.message, P.cause), t == null || t(P);
    });
  }, [
    d,
    a,
    u,
    E,
    _,
    t,
    n
  ]), T = Ge(() => {
    c == null || c.stop(), O(), l(0), a(!1), s(!1);
  }, [
    c,
    l,
    a,
    s,
    O
  ]), R = Ge(() => {
    i ? (s(!1), c == null || c.resume(), E()) : (s(!0), O(), c == null || c.pause());
  }, [c, s, E, O]);
  return {
    startRecording: F,
    stopRecording: T,
    togglePauseResume: R,
    recordingBlob: w,
    isRecording: r,
    isPaused: i,
    recordingTime: f,
    mediaRecorder: c
  };
};
function $n(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $n(Object(n), !0).forEach(function(r) {
      Q(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $n(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Et(e) {
  "@babel/helpers - typeof";
  return Et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Et(e);
}
function Sa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ta(e, t, n) {
  return t && zn(e.prototype, t), n && zn(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function un(e, t) {
  return _a(e) || Ra(e, t) || wr(e, t) || Ia();
}
function ot(e) {
  return Pa(e) || Aa(e) || wr(e) || Ca();
}
function Pa(e) {
  if (Array.isArray(e))
    return Gt(e);
}
function _a(e) {
  if (Array.isArray(e))
    return e;
}
function Aa(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ra(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, s, f;
    try {
      for (n = n.call(e); !(a = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t)); a = !0)
        ;
    } catch (l) {
      i = !0, f = l;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw f;
      }
    }
    return r;
  }
}
function wr(e, t) {
  if (e) {
    if (typeof e == "string")
      return Gt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Gt(e, t);
  }
}
function Gt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Ca() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ia() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Yn = function() {
}, cn = {}, kr = {}, Er = null, Or = {
  mark: Yn,
  measure: Yn
};
try {
  typeof window < "u" && (cn = window), typeof document < "u" && (kr = document), typeof MutationObserver < "u" && (Er = MutationObserver), typeof performance < "u" && (Or = performance);
} catch {
}
var ja = cn.navigator || {}, Wn = ja.userAgent, Un = Wn === void 0 ? "" : Wn, Ee = cn, G = kr, Vn = Er, ct = Or;
Ee.document;
var xe = !!G.documentElement && !!G.head && typeof G.addEventListener == "function" && typeof G.createElement == "function", Sr = ~Un.indexOf("MSIE") || ~Un.indexOf("Trident/"), dt, mt, vt, pt, bt, ge = "___FONT_AWESOME___", Xt = 16, Tr = "fa", Pr = "svg-inline--fa", je = "data-fa-i2svg", Kt = "data-fa-pseudo-element", Na = "data-fa-pseudo-element-pending", dn = "data-prefix", mn = "data-icon", qn = "fontawesome-i2svg", Ma = "async", La = ["HTML", "HEAD", "STYLE", "SCRIPT"], _r = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), B = "classic", X = "sharp", vn = [B, X];
function st(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[B];
    }
  });
}
var et = st((dt = {}, Q(dt, B, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), Q(dt, X, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), dt)), tt = st((mt = {}, Q(mt, B, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Q(mt, X, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), mt)), nt = st((vt = {}, Q(vt, B, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Q(vt, X, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), vt)), Da = st((pt = {}, Q(pt, B, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Q(pt, X, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), pt)), Fa = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, Ar = "fa-layers-text", $a = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, za = st((bt = {}, Q(bt, B, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Q(bt, X, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), bt)), Rr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Ya = Rr.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Wa = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Re = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, rt = /* @__PURE__ */ new Set();
Object.keys(tt[B]).map(rt.add.bind(rt));
Object.keys(tt[X]).map(rt.add.bind(rt));
var Ua = [].concat(vn, ot(rt), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Re.GROUP, Re.SWAP_OPACITY, Re.PRIMARY, Re.SECONDARY]).concat(Rr.map(function(e) {
  return "".concat(e, "x");
})).concat(Ya.map(function(e) {
  return "w-".concat(e);
})), Ze = Ee.FontAwesomeConfig || {};
function Va(e) {
  var t = G.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function qa(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (G && typeof G.querySelector == "function") {
  var Ha = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Ha.forEach(function(e) {
    var t = un(e, 2), n = t[0], r = t[1], a = qa(Va(n));
    a != null && (Ze[r] = a);
  });
}
var Cr = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Tr,
  replacementClass: Pr,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Ze.familyPrefix && (Ze.cssPrefix = Ze.familyPrefix);
var qe = h(h({}, Cr), Ze);
qe.autoReplaceSvg || (qe.observeMutations = !1);
var k = {};
Object.keys(Cr).forEach(function(e) {
  Object.defineProperty(k, e, {
    enumerable: !0,
    set: function(n) {
      qe[e] = n, Qe.forEach(function(r) {
        return r(k);
      });
    },
    get: function() {
      return qe[e];
    }
  });
});
Object.defineProperty(k, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    qe.cssPrefix = t, Qe.forEach(function(n) {
      return n(k);
    });
  },
  get: function() {
    return qe.cssPrefix;
  }
});
Ee.FontAwesomeConfig = k;
var Qe = [];
function Ba(e) {
  return Qe.push(e), function() {
    Qe.splice(Qe.indexOf(e), 1);
  };
}
var we = Xt, de = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Ga(e) {
  if (!(!e || !xe)) {
    var t = G.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = G.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var i = n[a], s = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(s) > -1 && (r = i);
    }
    return G.head.insertBefore(t, r), e;
  }
}
var Xa = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function at() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Xa[Math.random() * 62 | 0];
  return t;
}
function He(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function pn(e) {
  return e.classList ? He(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function Ir(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ka(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(Ir(e[n]), '" ');
  }, "").trim();
}
function Pt(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function bn(e) {
  return e.size !== de.size || e.x !== de.x || e.y !== de.y || e.rotate !== de.rotate || e.flipX || e.flipY;
}
function Ja(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), f = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(s, " ").concat(f)
  }, c = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: l,
    path: c
  };
}
function Za(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? Xt : n, a = e.height, i = a === void 0 ? Xt : a, s = e.startCentered, f = s === void 0 ? !1 : s, l = "";
  return f && Sr ? l += "translate(".concat(t.x / we - r / 2, "em, ").concat(t.y / we - i / 2, "em) ") : f ? l += "translate(calc(-50% + ".concat(t.x / we, "em), calc(-50% + ").concat(t.y / we, "em)) ") : l += "translate(".concat(t.x / we, "em, ").concat(t.y / we, "em) "), l += "scale(".concat(t.size / we * (t.flipX ? -1 : 1), ", ").concat(t.size / we * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
}
var Qa = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function jr() {
  var e = Tr, t = Pr, n = k.cssPrefix, r = k.replacementClass, a = Qa;
  if (n !== e || r !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), f = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(f, ".".concat(r));
  }
  return a;
}
var Hn = !1;
function Lt() {
  k.autoAddCss && !Hn && (Ga(jr()), Hn = !0);
}
var ei = {
  mixout: function() {
    return {
      dom: {
        css: jr,
        insertCss: Lt
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Lt();
      },
      beforeI2svg: function() {
        Lt();
      }
    };
  }
}, ye = Ee || {};
ye[ge] || (ye[ge] = {});
ye[ge].styles || (ye[ge].styles = {});
ye[ge].hooks || (ye[ge].hooks = {});
ye[ge].shims || (ye[ge].shims = []);
var ue = ye[ge], Nr = [], ti = function e() {
  G.removeEventListener("DOMContentLoaded", e), Ot = 1, Nr.map(function(t) {
    return t();
  });
}, Ot = !1;
xe && (Ot = (G.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(G.readyState), Ot || G.addEventListener("DOMContentLoaded", ti));
function ni(e) {
  xe && (Ot ? setTimeout(e, 0) : Nr.push(e));
}
function ft(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, a = e.children, i = a === void 0 ? [] : a;
  return typeof e == "string" ? Ir(e) : "<".concat(t, " ").concat(Ka(r), ">").concat(i.map(ft).join(""), "</").concat(t, ">");
}
function Bn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var ri = function(t, n) {
  return function(r, a, i, s) {
    return t.call(n, r, a, i, s);
  };
}, Dt = function(t, n, r, a) {
  var i = Object.keys(t), s = i.length, f = a !== void 0 ? ri(n, a) : n, l, c, u;
  for (r === void 0 ? (l = 1, u = t[i[0]]) : (l = 0, u = r); l < s; l++)
    c = i[l], u = f(u, t[c], c, t);
  return u;
};
function ai(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      var i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function Jt(e) {
  var t = ai(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function ii(e, t) {
  var n = e.length, r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function Gn(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], a = !!r.icon;
    return a ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Zt(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, a = r === void 0 ? !1 : r, i = Gn(t);
  typeof ue.hooks.addPack == "function" && !a ? ue.hooks.addPack(e, Gn(t)) : ue.styles[e] = h(h({}, ue.styles[e] || {}), i), e === "fas" && Zt("fa", t);
}
var gt, yt, ht, Ye = ue.styles, oi = ue.shims, si = (gt = {}, Q(gt, B, Object.values(nt[B])), Q(gt, X, Object.values(nt[X])), gt), gn = null, Mr = {}, Lr = {}, Dr = {}, Fr = {}, $r = {}, fi = (yt = {}, Q(yt, B, Object.keys(et[B])), Q(yt, X, Object.keys(et[X])), yt);
function li(e) {
  return ~Ua.indexOf(e);
}
function ui(e, t) {
  var n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !li(a) ? a : null;
}
var zr = function() {
  var t = function(i) {
    return Dt(Ye, function(s, f, l) {
      return s[l] = Dt(f, i, {}), s;
    }, {});
  };
  Mr = t(function(a, i, s) {
    if (i[3] && (a[i[3]] = s), i[2]) {
      var f = i[2].filter(function(l) {
        return typeof l == "number";
      });
      f.forEach(function(l) {
        a[l.toString(16)] = s;
      });
    }
    return a;
  }), Lr = t(function(a, i, s) {
    if (a[s] = s, i[2]) {
      var f = i[2].filter(function(l) {
        return typeof l == "string";
      });
      f.forEach(function(l) {
        a[l] = s;
      });
    }
    return a;
  }), $r = t(function(a, i, s) {
    var f = i[2];
    return a[s] = s, f.forEach(function(l) {
      a[l] = s;
    }), a;
  });
  var n = "far" in Ye || k.autoFetchSvg, r = Dt(oi, function(a, i) {
    var s = i[0], f = i[1], l = i[2];
    return f === "far" && !n && (f = "fas"), typeof s == "string" && (a.names[s] = {
      prefix: f,
      iconName: l
    }), typeof s == "number" && (a.unicodes[s.toString(16)] = {
      prefix: f,
      iconName: l
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  Dr = r.names, Fr = r.unicodes, gn = _t(k.styleDefault, {
    family: k.familyDefault
  });
};
Ba(function(e) {
  gn = _t(e.styleDefault, {
    family: k.familyDefault
  });
});
zr();
function yn(e, t) {
  return (Mr[e] || {})[t];
}
function ci(e, t) {
  return (Lr[e] || {})[t];
}
function Ce(e, t) {
  return ($r[e] || {})[t];
}
function Yr(e) {
  return Dr[e] || {
    prefix: null,
    iconName: null
  };
}
function di(e) {
  var t = Fr[e], n = yn("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Oe() {
  return gn;
}
var hn = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function _t(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? B : n, a = et[r][e], i = tt[r][e] || tt[r][a], s = e in ue.styles ? e : null;
  return i || s || null;
}
var Xn = (ht = {}, Q(ht, B, Object.keys(nt[B])), Q(ht, X, Object.keys(nt[X])), ht);
function At(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, a = r === void 0 ? !1 : r, i = (t = {}, Q(t, B, "".concat(k.cssPrefix, "-").concat(B)), Q(t, X, "".concat(k.cssPrefix, "-").concat(X)), t), s = null, f = B;
  (e.includes(i[B]) || e.some(function(c) {
    return Xn[B].includes(c);
  })) && (f = B), (e.includes(i[X]) || e.some(function(c) {
    return Xn[X].includes(c);
  })) && (f = X);
  var l = e.reduce(function(c, u) {
    var d = ui(k.cssPrefix, u);
    if (Ye[u] ? (u = si[f].includes(u) ? Da[f][u] : u, s = u, c.prefix = u) : fi[f].indexOf(u) > -1 ? (s = u, c.prefix = _t(u, {
      family: f
    })) : d ? c.iconName = d : u !== k.replacementClass && u !== i[B] && u !== i[X] && c.rest.push(u), !a && c.prefix && c.iconName) {
      var b = s === "fa" ? Yr(c.iconName) : {}, w = Ce(c.prefix, c.iconName);
      b.prefix && (s = null), c.iconName = b.iconName || w || c.iconName, c.prefix = b.prefix || c.prefix, c.prefix === "far" && !Ye.far && Ye.fas && !k.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, hn());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && f === X && (Ye.fass || k.autoFetchSvg) && (l.prefix = "fass", l.iconName = Ce(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || s === "fa") && (l.prefix = Oe() || "fas"), l;
}
var mi = /* @__PURE__ */ function() {
  function e() {
    Sa(this, e), this.definitions = {};
  }
  return Ta(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i];
      var s = a.reduce(this._pullDefinitions, {});
      Object.keys(s).forEach(function(f) {
        n.definitions[f] = h(h({}, n.definitions[f] || {}), s[f]), Zt(f, s[f]);
        var l = nt[B][f];
        l && Zt(l, s[f]), zr();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var a = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(a).map(function(i) {
        var s = a[i], f = s.prefix, l = s.iconName, c = s.icon, u = c[2];
        n[f] || (n[f] = {}), u.length > 0 && u.forEach(function(d) {
          typeof d == "string" && (n[f][d] = c);
        }), n[f][l] = c;
      }), n;
    }
  }]), e;
}(), Kn = [], We = {}, Ve = {}, vi = Object.keys(Ve);
function pi(e, t) {
  var n = t.mixoutsTo;
  return Kn = e, We = {}, Object.keys(Ve).forEach(function(r) {
    vi.indexOf(r) === -1 && delete Ve[r];
  }), Kn.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(s) {
      typeof a[s] == "function" && (n[s] = a[s]), Et(a[s]) === "object" && Object.keys(a[s]).forEach(function(f) {
        n[s] || (n[s] = {}), n[s][f] = a[s][f];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(s) {
        We[s] || (We[s] = []), We[s].push(i[s]);
      });
    }
    r.provides && r.provides(Ve);
  }), n;
}
function Qt(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  var i = We[e] || [];
  return i.forEach(function(s) {
    t = s.apply(null, [t].concat(r));
  }), t;
}
function Ne(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = We[e] || [];
  a.forEach(function(i) {
    i.apply(null, n);
  });
}
function he() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Ve[e] ? Ve[e].apply(null, t) : void 0;
}
function en(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || Oe();
  if (t)
    return t = Ce(n, t) || t, Bn(Wr.definitions, n, t) || Bn(ue.styles, n, t);
}
var Wr = new mi(), bi = function() {
  k.autoReplaceSvg = !1, k.observeMutations = !1, Ne("noAuto");
}, gi = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return xe ? (Ne("beforeI2svg", t), he("pseudoElements2svg", t), he("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    k.autoReplaceSvg === !1 && (k.autoReplaceSvg = !0), k.observeMutations = !0, ni(function() {
      hi({
        autoReplaceSvgRoot: n
      }), Ne("watch", t);
    });
  }
}, yi = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Et(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: Ce(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = _t(t[0]);
      return {
        prefix: r,
        iconName: Ce(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(k.cssPrefix, "-")) > -1 || t.match(Fa))) {
      var a = At(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || Oe(),
        iconName: Ce(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof t == "string") {
      var i = Oe();
      return {
        prefix: i,
        iconName: Ce(i, t) || t
      };
    }
  }
}, se = {
  noAuto: bi,
  config: k,
  dom: gi,
  parse: yi,
  library: Wr,
  findIconDefinition: en,
  toHtml: ft
}, hi = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? G : n;
  (Object.keys(ue.styles).length > 0 || k.autoFetchSvg) && xe && k.autoReplaceSvg && se.dom.i2svg({
    node: r
  });
};
function Rt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return ft(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (xe) {
        var r = G.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function xi(e) {
  var t = e.children, n = e.main, r = e.mask, a = e.attributes, i = e.styles, s = e.transform;
  if (bn(s) && n.found && !r.found) {
    var f = n.width, l = n.height, c = {
      x: f / l / 2,
      y: 0.5
    };
    a.style = Pt(h(h({}, i), {}, {
      "transform-origin": "".concat(c.x + s.x / 16, "em ").concat(c.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function wi(e) {
  var t = e.prefix, n = e.iconName, r = e.children, a = e.attributes, i = e.symbol, s = i === !0 ? "".concat(t, "-").concat(k.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: h(h({}, a), {}, {
        id: s
      }),
      children: r
    }]
  }];
}
function xn(e) {
  var t = e.icons, n = t.main, r = t.mask, a = e.prefix, i = e.iconName, s = e.transform, f = e.symbol, l = e.title, c = e.maskId, u = e.titleId, d = e.extra, b = e.watchable, w = b === void 0 ? !1 : b, _ = r.found ? r : n, E = _.width, O = _.height, F = a === "fak", T = [k.replacementClass, i ? "".concat(k.cssPrefix, "-").concat(i) : ""].filter(function(ne) {
    return d.classes.indexOf(ne) === -1;
  }).filter(function(ne) {
    return ne !== "" || !!ne;
  }).concat(d.classes).join(" "), R = {
    children: [],
    attributes: h(h({}, d.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: T,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(E, " ").concat(O)
    })
  }, P = F && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(E / O * 16 * 0.0625, "em")
  } : {};
  w && (R.attributes[je] = ""), l && (R.children.push({
    tag: "title",
    attributes: {
      id: R.attributes["aria-labelledby"] || "title-".concat(u || at())
    },
    children: [l]
  }), delete R.attributes.title);
  var v = h(h({}, R), {}, {
    prefix: a,
    iconName: i,
    main: n,
    mask: r,
    maskId: c,
    transform: s,
    symbol: f,
    styles: h(h({}, P), d.styles)
  }), Z = r.found && n.found ? he("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : he("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, te = Z.children, me = Z.attributes;
  return v.children = te, v.attributes = me, f ? wi(v) : xi(v);
}
function Jn(e) {
  var t = e.content, n = e.width, r = e.height, a = e.transform, i = e.title, s = e.extra, f = e.watchable, l = f === void 0 ? !1 : f, c = h(h(h({}, s.attributes), i ? {
    title: i
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  l && (c[je] = "");
  var u = h({}, s.styles);
  bn(a) && (u.transform = Za({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), u["-webkit-transform"] = u.transform);
  var d = Pt(u);
  d.length > 0 && (c.style = d);
  var b = [];
  return b.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), i && b.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), b;
}
function ki(e) {
  var t = e.content, n = e.title, r = e.extra, a = h(h(h({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = Pt(r.styles);
  i.length > 0 && (a.style = i);
  var s = [];
  return s.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), s;
}
var Ft = ue.styles;
function tn(e) {
  var t = e[0], n = e[1], r = e.slice(4), a = un(r, 1), i = a[0], s = null;
  return Array.isArray(i) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(k.cssPrefix, "-").concat(Re.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(k.cssPrefix, "-").concat(Re.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(k.cssPrefix, "-").concat(Re.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: s
  };
}
var Ei = {
  found: !1,
  width: 512,
  height: 512
};
function Oi(e, t) {
  !_r && !k.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function nn(e, t) {
  var n = t;
  return t === "fa" && k.styleDefault !== null && (t = Oe()), new Promise(function(r, a) {
    if (he("missingIconAbstract"), n === "fa") {
      var i = Yr(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Ft[t] && Ft[t][e]) {
      var s = Ft[t][e];
      return r(tn(s));
    }
    Oi(e, t), r(h(h({}, Ei), {}, {
      icon: k.showMissingIcons && e ? he("missingIconAbstract") || {} : {}
    }));
  });
}
var Zn = function() {
}, rn = k.measurePerformance && ct && ct.mark && ct.measure ? ct : {
  mark: Zn,
  measure: Zn
}, Je = 'FA "6.5.1"', Si = function(t) {
  return rn.mark("".concat(Je, " ").concat(t, " begins")), function() {
    return Ur(t);
  };
}, Ur = function(t) {
  rn.mark("".concat(Je, " ").concat(t, " ends")), rn.measure("".concat(Je, " ").concat(t), "".concat(Je, " ").concat(t, " begins"), "".concat(Je, " ").concat(t, " ends"));
}, wn = {
  begin: Si,
  end: Ur
}, wt = function() {
};
function Qn(e) {
  var t = e.getAttribute ? e.getAttribute(je) : null;
  return typeof t == "string";
}
function Ti(e) {
  var t = e.getAttribute ? e.getAttribute(dn) : null, n = e.getAttribute ? e.getAttribute(mn) : null;
  return t && n;
}
function Pi(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(k.replacementClass);
}
function _i() {
  if (k.autoReplaceSvg === !0)
    return kt.replace;
  var e = kt[k.autoReplaceSvg];
  return e || kt.replace;
}
function Ai(e) {
  return G.createElementNS("http://www.w3.org/2000/svg", e);
}
function Ri(e) {
  return G.createElement(e);
}
function Vr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? Ai : Ri : n;
  if (typeof e == "string")
    return G.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(s) {
    a.setAttribute(s, e.attributes[s]);
  });
  var i = e.children || [];
  return i.forEach(function(s) {
    a.appendChild(Vr(s, {
      ceFn: r
    }));
  }), a;
}
function Ci(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var kt = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(a) {
        n.parentNode.insertBefore(Vr(a), n);
      }), n.getAttribute(je) === null && k.keepOriginalSource) {
        var r = G.createComment(Ci(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~pn(n).indexOf(k.replacementClass))
      return kt.replace(t);
    var a = new RegExp("".concat(k.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var i = r[0].attributes.class.split(" ").reduce(function(f, l) {
        return l === k.replacementClass || l.match(a) ? f.toSvg.push(l) : f.toNode.push(l), f;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", i.toNode.join(" "));
    }
    var s = r.map(function(f) {
      return ft(f);
    }).join(`
`);
    n.setAttribute(je, ""), n.innerHTML = s;
  }
};
function er(e) {
  e();
}
function qr(e, t) {
  var n = typeof t == "function" ? t : wt;
  if (e.length === 0)
    n();
  else {
    var r = er;
    k.mutateApproach === Ma && (r = Ee.requestAnimationFrame || er), r(function() {
      var a = _i(), i = wn.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
var kn = !1;
function Hr() {
  kn = !0;
}
function an() {
  kn = !1;
}
var St = null;
function tr(e) {
  if (Vn && k.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? wt : t, r = e.nodeCallback, a = r === void 0 ? wt : r, i = e.pseudoElementsCallback, s = i === void 0 ? wt : i, f = e.observeMutationsRoot, l = f === void 0 ? G : f;
    St = new Vn(function(c) {
      if (!kn) {
        var u = Oe();
        He(c).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !Qn(d.addedNodes[0]) && (k.searchPseudoElements && s(d.target), n(d.target)), d.type === "attributes" && d.target.parentNode && k.searchPseudoElements && s(d.target.parentNode), d.type === "attributes" && Qn(d.target) && ~Wa.indexOf(d.attributeName))
            if (d.attributeName === "class" && Ti(d.target)) {
              var b = At(pn(d.target)), w = b.prefix, _ = b.iconName;
              d.target.setAttribute(dn, w || u), _ && d.target.setAttribute(mn, _);
            } else
              Pi(d.target) && a(d.target);
        });
      }
    }), xe && St.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Ii() {
  St && St.disconnect();
}
function ji(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, a) {
    var i = a.split(":"), s = i[0], f = i.slice(1);
    return s && f.length > 0 && (r[s] = f.join(":").trim()), r;
  }, {})), n;
}
function Ni(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", a = At(pn(e));
  return a.prefix || (a.prefix = Oe()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = ci(a.prefix, e.innerText) || yn(a.prefix, Jt(e.innerText))), !a.iconName && k.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function Mi(e) {
  var t = He(e.attributes).reduce(function(a, i) {
    return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return k.autoA11y && (n ? t["aria-labelledby"] = "".concat(k.replacementClass, "-title-").concat(r || at()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Li() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: de,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function nr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = Ni(e), r = n.iconName, a = n.prefix, i = n.rest, s = Mi(e), f = Qt("parseNodeAttributes", {}, e), l = t.styleParser ? ji(e) : [];
  return h({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: de,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: s
    }
  }, f);
}
var Di = ue.styles;
function Br(e) {
  var t = k.autoReplaceSvg === "nest" ? nr(e, {
    styleParser: !1
  }) : nr(e);
  return ~t.extra.classes.indexOf(Ar) ? he("generateLayersText", e, t) : he("generateSvgReplacementMutation", e, t);
}
var Se = /* @__PURE__ */ new Set();
vn.map(function(e) {
  Se.add("fa-".concat(e));
});
Object.keys(et[B]).map(Se.add.bind(Se));
Object.keys(et[X]).map(Se.add.bind(Se));
Se = ot(Se);
function rr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!xe)
    return Promise.resolve();
  var n = G.documentElement.classList, r = function(d) {
    return n.add("".concat(qn, "-").concat(d));
  }, a = function(d) {
    return n.remove("".concat(qn, "-").concat(d));
  }, i = k.autoFetchSvg ? Se : vn.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(Di));
  i.includes("fa") || i.push("fa");
  var s = [".".concat(Ar, ":not([").concat(je, "])")].concat(i.map(function(u) {
    return ".".concat(u, ":not([").concat(je, "])");
  })).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  var f = [];
  try {
    f = He(e.querySelectorAll(s));
  } catch {
  }
  if (f.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var l = wn.begin("onTree"), c = f.reduce(function(u, d) {
    try {
      var b = Br(d);
      b && u.push(b);
    } catch (w) {
      _r || w.name === "MissingIcon" && console.error(w);
    }
    return u;
  }, []);
  return new Promise(function(u, d) {
    Promise.all(c).then(function(b) {
      qr(b, function() {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch(function(b) {
      l(), d(b);
    });
  });
}
function Fi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Br(e).then(function(n) {
    n && qr([n], t);
  });
}
function $i(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : en(t || {}), a = n.mask;
    return a && (a = (a || {}).icon ? a : en(a || {})), e(r, h(h({}, n), {}, {
      mask: a
    }));
  };
}
var zi = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, a = r === void 0 ? de : r, i = n.symbol, s = i === void 0 ? !1 : i, f = n.mask, l = f === void 0 ? null : f, c = n.maskId, u = c === void 0 ? null : c, d = n.title, b = d === void 0 ? null : d, w = n.titleId, _ = w === void 0 ? null : w, E = n.classes, O = E === void 0 ? [] : E, F = n.attributes, T = F === void 0 ? {} : F, R = n.styles, P = R === void 0 ? {} : R;
  if (t) {
    var v = t.prefix, Z = t.iconName, te = t.icon;
    return Rt(h({
      type: "icon"
    }, t), function() {
      return Ne("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), k.autoA11y && (b ? T["aria-labelledby"] = "".concat(k.replacementClass, "-title-").concat(_ || at()) : (T["aria-hidden"] = "true", T.focusable = "false")), xn({
        icons: {
          main: tn(te),
          mask: l ? tn(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: v,
        iconName: Z,
        transform: h(h({}, de), a),
        symbol: s,
        title: b,
        maskId: u,
        titleId: _,
        extra: {
          attributes: T,
          styles: P,
          classes: O
        }
      });
    });
  }
}, Yi = {
  mixout: function() {
    return {
      icon: $i(zi)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = rr, n.nodeCallback = Fi, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, a = r === void 0 ? G : r, i = n.callback, s = i === void 0 ? function() {
      } : i;
      return rr(a, s);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var a = r.iconName, i = r.title, s = r.titleId, f = r.prefix, l = r.transform, c = r.symbol, u = r.mask, d = r.maskId, b = r.extra;
      return new Promise(function(w, _) {
        Promise.all([nn(a, f), u.iconName ? nn(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(E) {
          var O = un(E, 2), F = O[0], T = O[1];
          w([n, xn({
            icons: {
              main: F,
              mask: T
            },
            prefix: f,
            iconName: a,
            transform: l,
            symbol: c,
            maskId: d,
            title: i,
            titleId: s,
            extra: b,
            watchable: !0
          })]);
        }).catch(_);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, a = n.attributes, i = n.main, s = n.transform, f = n.styles, l = Pt(f);
      l.length > 0 && (a.style = l);
      var c;
      return bn(s) && (c = he("generateAbstractTransformGrouping", {
        main: i,
        transform: s,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(c || i.icon), {
        children: r,
        attributes: a
      };
    };
  }
}, Wi = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, i = a === void 0 ? [] : a;
        return Rt({
          type: "layer"
        }, function() {
          Ne("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var s = [];
          return n(function(f) {
            Array.isArray(f) ? f.map(function(l) {
              s = s.concat(l.abstract);
            }) : s = s.concat(f.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(k.cssPrefix, "-layers")].concat(ot(i)).join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, Ui = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.title, i = a === void 0 ? null : a, s = r.classes, f = s === void 0 ? [] : s, l = r.attributes, c = l === void 0 ? {} : l, u = r.styles, d = u === void 0 ? {} : u;
        return Rt({
          type: "counter",
          content: n
        }, function() {
          return Ne("beforeDOMElementCreation", {
            content: n,
            params: r
          }), ki({
            content: n.toString(),
            title: i,
            extra: {
              attributes: c,
              styles: d,
              classes: ["".concat(k.cssPrefix, "-layers-counter")].concat(ot(f))
            }
          });
        });
      }
    };
  }
}, Vi = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, i = a === void 0 ? de : a, s = r.title, f = s === void 0 ? null : s, l = r.classes, c = l === void 0 ? [] : l, u = r.attributes, d = u === void 0 ? {} : u, b = r.styles, w = b === void 0 ? {} : b;
        return Rt({
          type: "text",
          content: n
        }, function() {
          return Ne("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Jn({
            content: n,
            transform: h(h({}, de), i),
            title: f,
            extra: {
              attributes: d,
              styles: w,
              classes: ["".concat(k.cssPrefix, "-layers-text")].concat(ot(c))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var a = r.title, i = r.transform, s = r.extra, f = null, l = null;
      if (Sr) {
        var c = parseInt(getComputedStyle(n).fontSize, 10), u = n.getBoundingClientRect();
        f = u.width / c, l = u.height / c;
      }
      return k.autoA11y && !a && (s.attributes["aria-hidden"] = "true"), Promise.resolve([n, Jn({
        content: n.innerHTML,
        width: f,
        height: l,
        transform: i,
        title: a,
        extra: s,
        watchable: !0
      })]);
    };
  }
}, qi = new RegExp('"', "ug"), ar = [1105920, 1112319];
function Hi(e) {
  var t = e.replace(qi, ""), n = ii(t, 0), r = n >= ar[0] && n <= ar[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Jt(a ? t[0] : t),
    isSecondary: r || a
  };
}
function ir(e, t) {
  var n = "".concat(Na).concat(t.replace(":", "-"));
  return new Promise(function(r, a) {
    if (e.getAttribute(n) !== null)
      return r();
    var i = He(e.children), s = i.filter(function(te) {
      return te.getAttribute(Kt) === t;
    })[0], f = Ee.getComputedStyle(e, t), l = f.getPropertyValue("font-family").match($a), c = f.getPropertyValue("font-weight"), u = f.getPropertyValue("content");
    if (s && !l)
      return e.removeChild(s), r();
    if (l && u !== "none" && u !== "") {
      var d = f.getPropertyValue("content"), b = ~["Sharp"].indexOf(l[2]) ? X : B, w = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? tt[b][l[2].toLowerCase()] : za[b][c], _ = Hi(d), E = _.value, O = _.isSecondary, F = l[0].startsWith("FontAwesome"), T = yn(w, E), R = T;
      if (F) {
        var P = di(E);
        P.iconName && P.prefix && (T = P.iconName, w = P.prefix);
      }
      if (T && !O && (!s || s.getAttribute(dn) !== w || s.getAttribute(mn) !== R)) {
        e.setAttribute(n, R), s && e.removeChild(s);
        var v = Li(), Z = v.extra;
        Z.attributes[Kt] = t, nn(T, w).then(function(te) {
          var me = xn(h(h({}, v), {}, {
            icons: {
              main: te,
              mask: hn()
            },
            prefix: w,
            iconName: R,
            extra: Z,
            watchable: !0
          })), ne = G.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(ne, e.firstChild) : e.appendChild(ne), ne.outerHTML = me.map(function(Te) {
            return ft(Te);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function Bi(e) {
  return Promise.all([ir(e, "::before"), ir(e, "::after")]);
}
function Gi(e) {
  return e.parentNode !== document.head && !~La.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Kt) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function or(e) {
  if (xe)
    return new Promise(function(t, n) {
      var r = He(e.querySelectorAll("*")).filter(Gi).map(Bi), a = wn.begin("searchPseudoElements");
      Hr(), Promise.all(r).then(function() {
        a(), an(), t();
      }).catch(function() {
        a(), an(), n();
      });
    });
}
var Xi = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = or, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var r = n.node, a = r === void 0 ? G : r;
      k.searchPseudoElements && or(a);
    };
  }
}, sr = !1, Ki = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Hr(), sr = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        tr(Qt("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Ii();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        sr ? an() : tr(Qt("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, fr = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(r, a) {
    var i = a.toLowerCase().split("-"), s = i[0], f = i.slice(1).join("-");
    if (s && f === "h")
      return r.flipX = !0, r;
    if (s && f === "v")
      return r.flipY = !0, r;
    if (f = parseFloat(f), isNaN(f))
      return r;
    switch (s) {
      case "grow":
        r.size = r.size + f;
        break;
      case "shrink":
        r.size = r.size - f;
        break;
      case "left":
        r.x = r.x - f;
        break;
      case "right":
        r.x = r.x + f;
        break;
      case "up":
        r.y = r.y - f;
        break;
      case "down":
        r.y = r.y + f;
        break;
      case "rotate":
        r.rotate = r.rotate + f;
        break;
    }
    return r;
  }, n);
}, Ji = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return fr(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (n.transform = fr(a)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var r = n.main, a = n.transform, i = n.containerWidth, s = n.iconWidth, f = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), c = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), u = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(l, " ").concat(c, " ").concat(u)
      }, b = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, w = {
        outer: f,
        inner: d,
        path: b
      };
      return {
        tag: "g",
        attributes: h({}, w.outer),
        children: [{
          tag: "g",
          attributes: h({}, w.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: h(h({}, r.icon.attributes), w.path)
          }]
        }]
      };
    };
  }
}, $t = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function lr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Zi(e) {
  return e.tag === "g" ? e.children : [e];
}
var Qi = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-mask"), i = a ? At(a.split(" ").map(function(s) {
          return s.trim();
        })) : hn();
        return i.prefix || (i.prefix = Oe()), n.mask = i, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, a = n.attributes, i = n.main, s = n.mask, f = n.maskId, l = n.transform, c = i.width, u = i.icon, d = s.width, b = s.icon, w = Ja({
        transform: l,
        containerWidth: d,
        iconWidth: c
      }), _ = {
        tag: "rect",
        attributes: h(h({}, $t), {}, {
          fill: "white"
        })
      }, E = u.children ? {
        children: u.children.map(lr)
      } : {}, O = {
        tag: "g",
        attributes: h({}, w.inner),
        children: [lr(h({
          tag: u.tag,
          attributes: h(h({}, u.attributes), w.path)
        }, E))]
      }, F = {
        tag: "g",
        attributes: h({}, w.outer),
        children: [O]
      }, T = "mask-".concat(f || at()), R = "clip-".concat(f || at()), P = {
        tag: "mask",
        attributes: h(h({}, $t), {}, {
          id: T,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [_, F]
      }, v = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: R
          },
          children: Zi(b)
        }, P]
      };
      return r.push(v, {
        tag: "rect",
        attributes: h({
          fill: "currentColor",
          "clip-path": "url(#".concat(R, ")"),
          mask: "url(#".concat(T, ")")
        }, $t)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, eo = {
  provides: function(t) {
    var n = !1;
    Ee.matchMedia && (n = Ee.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: h(h({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var s = h(h({}, i), {}, {
        attributeName: "opacity"
      }), f = {
        tag: "circle",
        attributes: h(h({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || f.children.push({
        tag: "animate",
        attributes: h(h({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: h(h({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(f), r.push({
        tag: "path",
        attributes: h(h({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: h(h({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: h(h({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: h(h({}, s), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, to = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return n.symbol = i, n;
      }
    };
  }
}, no = [ei, Yi, Wi, Ui, Vi, Xi, Ki, Ji, Qi, eo, to];
pi(no, {
  mixoutsTo: se
});
se.noAuto;
se.config;
se.library;
se.dom;
var on = se.parse;
se.findIconDefinition;
se.toHtml;
var ro = se.icon;
se.layer;
se.text;
se.counter;
var sn = { exports: {} }, xt = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function ao() {
  if (ur)
    return V;
  ur = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function R(v) {
    if (typeof v == "object" && v !== null) {
      var Z = v.$$typeof;
      switch (Z) {
        case t:
          switch (v = v.type, v) {
            case l:
            case c:
            case r:
            case i:
            case a:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case f:
                case u:
                case _:
                case w:
                case s:
                  return v;
                default:
                  return Z;
              }
          }
        case n:
          return Z;
      }
    }
  }
  function P(v) {
    return R(v) === c;
  }
  return V.AsyncMode = l, V.ConcurrentMode = c, V.ContextConsumer = f, V.ContextProvider = s, V.Element = t, V.ForwardRef = u, V.Fragment = r, V.Lazy = _, V.Memo = w, V.Portal = n, V.Profiler = i, V.StrictMode = a, V.Suspense = d, V.isAsyncMode = function(v) {
    return P(v) || R(v) === l;
  }, V.isConcurrentMode = P, V.isContextConsumer = function(v) {
    return R(v) === f;
  }, V.isContextProvider = function(v) {
    return R(v) === s;
  }, V.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, V.isForwardRef = function(v) {
    return R(v) === u;
  }, V.isFragment = function(v) {
    return R(v) === r;
  }, V.isLazy = function(v) {
    return R(v) === _;
  }, V.isMemo = function(v) {
    return R(v) === w;
  }, V.isPortal = function(v) {
    return R(v) === n;
  }, V.isProfiler = function(v) {
    return R(v) === i;
  }, V.isStrictMode = function(v) {
    return R(v) === a;
  }, V.isSuspense = function(v) {
    return R(v) === d;
  }, V.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === c || v === i || v === a || v === d || v === b || typeof v == "object" && v !== null && (v.$$typeof === _ || v.$$typeof === w || v.$$typeof === s || v.$$typeof === f || v.$$typeof === u || v.$$typeof === O || v.$$typeof === F || v.$$typeof === T || v.$$typeof === E);
  }, V.typeOf = R, V;
}
var q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function io() {
  return cr || (cr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function R(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === r || y === c || y === i || y === a || y === d || y === b || typeof y == "object" && y !== null && (y.$$typeof === _ || y.$$typeof === w || y.$$typeof === s || y.$$typeof === f || y.$$typeof === u || y.$$typeof === O || y.$$typeof === F || y.$$typeof === T || y.$$typeof === E);
    }
    function P(y) {
      if (typeof y == "object" && y !== null) {
        var fe = y.$$typeof;
        switch (fe) {
          case t:
            var Fe = y.type;
            switch (Fe) {
              case l:
              case c:
              case r:
              case i:
              case a:
              case d:
                return Fe;
              default:
                var _e = Fe && Fe.$$typeof;
                switch (_e) {
                  case f:
                  case u:
                  case _:
                  case w:
                  case s:
                    return _e;
                  default:
                    return fe;
                }
            }
          case n:
            return fe;
        }
      }
    }
    var v = l, Z = c, te = f, me = s, ne = t, Te = u, Me = r, Le = _, ie = w, ae = n, ve = i, oe = a, ce = d, Pe = !1;
    function De(y) {
      return Pe || (Pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(y) || P(y) === l;
    }
    function p(y) {
      return P(y) === c;
    }
    function x(y) {
      return P(y) === f;
    }
    function N(y) {
      return P(y) === s;
    }
    function j(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function A(y) {
      return P(y) === u;
    }
    function z(y) {
      return P(y) === r;
    }
    function C(y) {
      return P(y) === _;
    }
    function I(y) {
      return P(y) === w;
    }
    function M(y) {
      return P(y) === n;
    }
    function W(y) {
      return P(y) === i;
    }
    function L(y) {
      return P(y) === a;
    }
    function ee(y) {
      return P(y) === d;
    }
    q.AsyncMode = v, q.ConcurrentMode = Z, q.ContextConsumer = te, q.ContextProvider = me, q.Element = ne, q.ForwardRef = Te, q.Fragment = Me, q.Lazy = Le, q.Memo = ie, q.Portal = ae, q.Profiler = ve, q.StrictMode = oe, q.Suspense = ce, q.isAsyncMode = De, q.isConcurrentMode = p, q.isContextConsumer = x, q.isContextProvider = N, q.isElement = j, q.isForwardRef = A, q.isFragment = z, q.isLazy = C, q.isMemo = I, q.isPortal = M, q.isProfiler = W, q.isStrictMode = L, q.isSuspense = ee, q.isValidElementType = R, q.typeOf = P;
  }()), q;
}
var dr;
function Gr() {
  return dr || (dr = 1, process.env.NODE_ENV === "production" ? xt.exports = ao() : xt.exports = io()), xt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zt, mr;
function oo() {
  if (mr)
    return zt;
  mr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, f = 0; f < 10; f++)
        s["_" + String.fromCharCode(f)] = f;
      var l = Object.getOwnPropertyNames(s).map(function(u) {
        return s[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zt = a() ? Object.assign : function(i, s) {
    for (var f, l = r(i), c, u = 1; u < arguments.length; u++) {
      f = Object(arguments[u]);
      for (var d in f)
        t.call(f, d) && (l[d] = f[d]);
      if (e) {
        c = e(f);
        for (var b = 0; b < c.length; b++)
          n.call(f, c[b]) && (l[c[b]] = f[c[b]]);
      }
    }
    return l;
  }, zt;
}
var Yt, vr;
function En() {
  if (vr)
    return Yt;
  vr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Yt = e, Yt;
}
var Wt, pr;
function Xr() {
  return pr || (pr = 1, Wt = Function.call.bind(Object.prototype.hasOwnProperty)), Wt;
}
var Ut, br;
function so() {
  if (br)
    return Ut;
  br = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = En(), n = {}, r = Xr();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(i, s, f, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in i)
        if (r(i, u)) {
          var d;
          try {
            if (typeof i[u] != "function") {
              var b = Error(
                (l || "React class") + ": " + f + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            d = i[u](s, u, l, f, null, t);
          } catch (_) {
            d = _;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + f + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var w = c ? c() : "";
            e(
              "Failed " + f + " type: " + d.message + (w ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ut = a, Ut;
}
var Vt, gr;
function fo() {
  if (gr)
    return Vt;
  gr = 1;
  var e = Gr(), t = oo(), n = En(), r = Xr(), a = so(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(f) {
    var l = "Warning: " + f;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Vt = function(f, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(p) {
      var x = p && (c && p[c] || p[u]);
      if (typeof x == "function")
        return x;
    }
    var b = "<<anonymous>>", w = {
      array: F("array"),
      bigint: F("bigint"),
      bool: F("boolean"),
      func: F("function"),
      number: F("number"),
      object: F("object"),
      string: F("string"),
      symbol: F("symbol"),
      any: T(),
      arrayOf: R,
      element: P(),
      elementType: v(),
      instanceOf: Z,
      node: Te(),
      objectOf: me,
      oneOf: te,
      oneOfType: ne,
      shape: Le,
      exact: ie
    };
    function _(p, x) {
      return p === x ? p !== 0 || 1 / p === 1 / x : p !== p && x !== x;
    }
    function E(p, x) {
      this.message = p, this.data = x && typeof x == "object" ? x : {}, this.stack = "";
    }
    E.prototype = Error.prototype;
    function O(p) {
      if (process.env.NODE_ENV !== "production")
        var x = {}, N = 0;
      function j(z, C, I, M, W, L, ee) {
        if (M = M || b, L = L || I, ee !== n) {
          if (l) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = M + ":" + I;
            !x[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + M + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), x[fe] = !0, N++);
          }
        }
        return C[I] == null ? z ? C[I] === null ? new E("The " + W + " `" + L + "` is marked as required " + ("in `" + M + "`, but its value is `null`.")) : new E("The " + W + " `" + L + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`.")) : null : p(C, I, M, W, L);
      }
      var A = j.bind(null, !1);
      return A.isRequired = j.bind(null, !0), A;
    }
    function F(p) {
      function x(N, j, A, z, C, I) {
        var M = N[j], W = oe(M);
        if (W !== p) {
          var L = ce(M);
          return new E(
            "Invalid " + z + " `" + C + "` of type " + ("`" + L + "` supplied to `" + A + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return O(x);
    }
    function T() {
      return O(s);
    }
    function R(p) {
      function x(N, j, A, z, C) {
        if (typeof p != "function")
          return new E("Property `" + C + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var I = N[j];
        if (!Array.isArray(I)) {
          var M = oe(I);
          return new E("Invalid " + z + " `" + C + "` of type " + ("`" + M + "` supplied to `" + A + "`, expected an array."));
        }
        for (var W = 0; W < I.length; W++) {
          var L = p(I, W, A, z, C + "[" + W + "]", n);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return O(x);
    }
    function P() {
      function p(x, N, j, A, z) {
        var C = x[N];
        if (!f(C)) {
          var I = oe(C);
          return new E("Invalid " + A + " `" + z + "` of type " + ("`" + I + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(p);
    }
    function v() {
      function p(x, N, j, A, z) {
        var C = x[N];
        if (!e.isValidElementType(C)) {
          var I = oe(C);
          return new E("Invalid " + A + " `" + z + "` of type " + ("`" + I + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(p);
    }
    function Z(p) {
      function x(N, j, A, z, C) {
        if (!(N[j] instanceof p)) {
          var I = p.name || b, M = De(N[j]);
          return new E("Invalid " + z + " `" + C + "` of type " + ("`" + M + "` supplied to `" + A + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return O(x);
    }
    function te(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function x(N, j, A, z, C) {
        for (var I = N[j], M = 0; M < p.length; M++)
          if (_(I, p[M]))
            return null;
        var W = JSON.stringify(p, function(ee, y) {
          var fe = ce(y);
          return fe === "symbol" ? String(y) : y;
        });
        return new E("Invalid " + z + " `" + C + "` of value `" + String(I) + "` " + ("supplied to `" + A + "`, expected one of " + W + "."));
      }
      return O(x);
    }
    function me(p) {
      function x(N, j, A, z, C) {
        if (typeof p != "function")
          return new E("Property `" + C + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var I = N[j], M = oe(I);
        if (M !== "object")
          return new E("Invalid " + z + " `" + C + "` of type " + ("`" + M + "` supplied to `" + A + "`, expected an object."));
        for (var W in I)
          if (r(I, W)) {
            var L = p(I, W, A, z, C + "." + W, n);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return O(x);
    }
    function ne(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var x = 0; x < p.length; x++) {
        var N = p[x];
        if (typeof N != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Pe(N) + " at index " + x + "."
          ), s;
      }
      function j(A, z, C, I, M) {
        for (var W = [], L = 0; L < p.length; L++) {
          var ee = p[L], y = ee(A, z, C, I, M, n);
          if (y == null)
            return null;
          y.data && r(y.data, "expectedType") && W.push(y.data.expectedType);
        }
        var fe = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new E("Invalid " + I + " `" + M + "` supplied to " + ("`" + C + "`" + fe + "."));
      }
      return O(j);
    }
    function Te() {
      function p(x, N, j, A, z) {
        return ae(x[N]) ? null : new E("Invalid " + A + " `" + z + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return O(p);
    }
    function Me(p, x, N, j, A) {
      return new E(
        (p || "React class") + ": " + x + " type `" + N + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function Le(p) {
      function x(N, j, A, z, C) {
        var I = N[j], M = oe(I);
        if (M !== "object")
          return new E("Invalid " + z + " `" + C + "` of type `" + M + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var W in p) {
          var L = p[W];
          if (typeof L != "function")
            return Me(A, z, C, W, ce(L));
          var ee = L(I, W, A, z, C + "." + W, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return O(x);
    }
    function ie(p) {
      function x(N, j, A, z, C) {
        var I = N[j], M = oe(I);
        if (M !== "object")
          return new E("Invalid " + z + " `" + C + "` of type `" + M + "` " + ("supplied to `" + A + "`, expected `object`."));
        var W = t({}, N[j], p);
        for (var L in W) {
          var ee = p[L];
          if (r(p, L) && typeof ee != "function")
            return Me(A, z, C, L, ce(ee));
          if (!ee)
            return new E(
              "Invalid " + z + " `" + C + "` key `" + L + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(N[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var y = ee(I, L, A, z, C + "." + L, n);
          if (y)
            return y;
        }
        return null;
      }
      return O(x);
    }
    function ae(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(ae);
          if (p === null || f(p))
            return !0;
          var x = d(p);
          if (x) {
            var N = x.call(p), j;
            if (x !== p.entries) {
              for (; !(j = N.next()).done; )
                if (!ae(j.value))
                  return !1;
            } else
              for (; !(j = N.next()).done; ) {
                var A = j.value;
                if (A && !ae(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ve(p, x) {
      return p === "symbol" ? !0 : x ? x["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && x instanceof Symbol : !1;
    }
    function oe(p) {
      var x = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : ve(x, p) ? "symbol" : x;
    }
    function ce(p) {
      if (typeof p > "u" || p === null)
        return "" + p;
      var x = oe(p);
      if (x === "object") {
        if (p instanceof Date)
          return "date";
        if (p instanceof RegExp)
          return "regexp";
      }
      return x;
    }
    function Pe(p) {
      var x = ce(p);
      switch (x) {
        case "array":
        case "object":
          return "an " + x;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + x;
        default:
          return x;
      }
    }
    function De(p) {
      return !p.constructor || !p.constructor.name ? b : p.constructor.name;
    }
    return w.checkPropTypes = a, w.resetWarningCache = a.resetWarningCache, w.PropTypes = w, w;
  }, Vt;
}
var qt, yr;
function lo() {
  if (yr)
    return qt;
  yr = 1;
  var e = En();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, qt = function() {
    function r(s, f, l, c, u, d) {
      if (d !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, qt;
}
if (process.env.NODE_ENV !== "production") {
  var uo = Gr(), co = !0;
  sn.exports = fo()(uo.isElement, co);
} else
  sn.exports = lo()();
var mo = sn.exports;
const D = /* @__PURE__ */ wa(mo);
function hr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hr(Object(n), !0).forEach(function(r) {
      Ue(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Tt(e) {
  "@babel/helpers - typeof";
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tt(e);
}
function Ue(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function vo(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function po(e, t) {
  if (e == null)
    return {};
  var n = vo(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function fn(e) {
  return bo(e) || go(e) || yo(e) || ho();
}
function bo(e) {
  if (Array.isArray(e))
    return ln(e);
}
function go(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function yo(e, t) {
  if (e) {
    if (typeof e == "string")
      return ln(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ln(e, t);
  }
}
function ln(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ho() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xo(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, s = e.shake, f = e.flash, l = e.spin, c = e.spinPulse, u = e.spinReverse, d = e.pulse, b = e.fixedWidth, w = e.inverse, _ = e.border, E = e.listItem, O = e.flip, F = e.size, T = e.rotation, R = e.pull, P = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": s,
    "fa-flash": f,
    "fa-spin": l,
    "fa-spin-reverse": u,
    "fa-spin-pulse": c,
    "fa-pulse": d,
    "fa-fw": b,
    "fa-inverse": w,
    "fa-border": _,
    "fa-li": E,
    "fa-flip": O === !0,
    "fa-flip-horizontal": O === "horizontal" || O === "both",
    "fa-flip-vertical": O === "vertical" || O === "both"
  }, Ue(t, "fa-".concat(F), typeof F < "u" && F !== null), Ue(t, "fa-rotate-".concat(T), typeof T < "u" && T !== null && T !== 0), Ue(t, "fa-pull-".concat(R), typeof R < "u" && R !== null), Ue(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(P).map(function(v) {
    return P[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function wo(e) {
  return e = e - 0, e === e;
}
function Kr(e) {
  return wo(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var ko = ["style"];
function Eo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Oo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = Kr(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Eo(a)] = i : t[a] = i, t;
  }, {});
}
function Jr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(l) {
    return Jr(e, l);
  }), a = Object.keys(t.attributes || {}).reduce(function(l, c) {
    var u = t.attributes[c];
    switch (c) {
      case "class":
        l.attrs.className = u, delete t.attributes.class;
        break;
      case "style":
        l.attrs.style = Oo(u);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? l.attrs[c.toLowerCase()] = u : l.attrs[Kr(c)] = u;
    }
    return l;
  }, {
    attrs: {}
  }), i = n.style, s = i === void 0 ? {} : i, f = po(n, ko);
  return a.attrs.style = ke(ke({}, a.attrs.style), s), e.apply(void 0, [t.tag, ke(ke({}, a.attrs), f)].concat(fn(r)));
}
var Zr = !1;
try {
  Zr = process.env.NODE_ENV === "production";
} catch {
}
function So() {
  if (!Zr && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function xr(e) {
  if (e && Tt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (on.icon)
    return on.icon(e);
  if (e === null)
    return null;
  if (e && Tt(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function Ht(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ue({}, e, t) : {};
}
var Ie = /* @__PURE__ */ it.forwardRef(function(e, t) {
  var n = e.icon, r = e.mask, a = e.symbol, i = e.className, s = e.title, f = e.titleId, l = e.maskId, c = xr(n), u = Ht("classes", [].concat(fn(xo(e)), fn(i.split(" ")))), d = Ht("transform", typeof e.transform == "string" ? on.transform(e.transform) : e.transform), b = Ht("mask", xr(r)), w = ro(c, ke(ke(ke(ke({}, u), d), b), {}, {
    symbol: a,
    title: s,
    titleId: f,
    maskId: l
  }));
  if (!w)
    return So("Could not find icon", c), null;
  var _ = w.abstract, E = {
    ref: t
  };
  return Object.keys(e).forEach(function(O) {
    Ie.defaultProps.hasOwnProperty(O) || (E[O] = e[O]);
  }), To(_[0], E);
});
Ie.displayName = "FontAwesomeIcon";
Ie.propTypes = {
  beat: D.bool,
  border: D.bool,
  beatFade: D.bool,
  bounce: D.bool,
  className: D.string,
  fade: D.bool,
  flash: D.bool,
  mask: D.oneOfType([D.object, D.array, D.string]),
  maskId: D.string,
  fixedWidth: D.bool,
  inverse: D.bool,
  flip: D.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: D.oneOfType([D.object, D.array, D.string]),
  listItem: D.bool,
  pull: D.oneOf(["right", "left"]),
  pulse: D.bool,
  rotation: D.oneOf([0, 90, 180, 270]),
  shake: D.bool,
  size: D.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: D.bool,
  spinPulse: D.bool,
  spinReverse: D.bool,
  symbol: D.oneOfType([D.bool, D.string]),
  title: D.string,
  titleId: D.string,
  transform: D.oneOfType([D.string, D.object]),
  swapOpacity: D.bool
};
Ie.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var To = Jr.bind(null, it.createElement), Po = {
  prefix: "fas",
  iconName: "microphone",
  icon: [384, 512, [], "f130", "M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"]
}, _o = {
  prefix: "fas",
  iconName: "pause",
  icon: [320, 512, [9208], "f04c", "M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]
}, Ao = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, Ro = {
  prefix: "fas",
  iconName: "paper-plane",
  icon: [512, 512, [61913], "f1d8", "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]
};
const Co = it.lazy(async () => {
  const { LiveAudioVisualizer: e } = await import("./react-audio-visualize.es-69216c73.js");
  return { default: e };
}), jo = ({
  onSubmit: e,
  recorderControls: t,
  audioTrackConstraints: n,
  showVisualizer: r = !1,
  iconColors: a,
  classes: i
}) => {
  const [s, f] = Ae(!1), { startRecording: l, stopRecording: c, togglePauseResume: u, recordingBlob: d, isRecording: b, isPaused: w, recordingTime: _, mediaRecorder: E } = t ?? Oa(n), O = async () => {
    b && await c(), d && e && e(d);
  };
  return ha(() => {
    b || f(!1);
  }, [b]), /* @__PURE__ */ be.jsxs("div", { className: `audio-recorder ${b ? "recording" : ""} ${(i == null ? void 0 : i.AudioRecorderClass) ?? ""}`, children: [
    !b && /* @__PURE__ */ be.jsx(
      Ie,
      {
        icon: Po,
        onClick: l,
        color: a == null ? void 0 : a.start,
        size: "2x",
        className: "cursor-pointer"
      }
    ),
    /* @__PURE__ */ be.jsxs("div", { className: "audio-recorder-controls", children: [
      b && /* @__PURE__ */ be.jsx(
        Ie,
        {
          icon: w ? Ao : _o,
          onClick: u,
          color: w ? a == null ? void 0 : a.resume : a == null ? void 0 : a.pause,
          size: "2x",
          className: "cursor-pointer"
        }
      ),
      r && E && /* @__PURE__ */ be.jsx(xa, { fallback: /* @__PURE__ */ be.jsx("div", { children: "Loading visualizer..." }), children: /* @__PURE__ */ be.jsx(
        Co,
        {
          mediaRecorder: E,
          barWidth: 2,
          gap: 2,
          width: 140,
          height: 30,
          fftSize: 512,
          maxDecibels: -10,
          minDecibels: -80,
          smoothingTimeConstant: 0.4
        }
      ) }),
      b && /* @__PURE__ */ be.jsx(
        Ie,
        {
          icon: Ro,
          onClick: O,
          color: a == null ? void 0 : a.save,
          size: "2x",
          className: "cursor-pointer audio-recorder-submit"
        }
      )
    ] }),
    /* @__PURE__ */ be.jsxs("span", { className: `audio-recorder-timer ${b ? "" : "display-none"}`, children: [
      Math.floor(_ / 60),
      ":",
      String(_ % 60).padStart(2, "0")
    ] })
  ] });
};
export {
  jo as AudioRecorder,
  Oa as useAudioRecorder
};
