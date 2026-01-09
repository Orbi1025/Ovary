var Wd = (e) => {
  throw TypeError(e);
};
var dl = (e, t, r) => t.has(e) || Wd("Cannot " + r);
var T = (e, t, r) => (
    dl(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  te = (e, t, r) =>
    t.has(e)
      ? Wd("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, r),
  H = (e, t, r, n) => (
    dl(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r
  ),
  $e = (e, t, r) => (dl(e, t, "access private method"), r);
var io = (e, t, r, n) => ({
  set _(s) {
    H(e, t, s, r);
  },
  get _() {
    return T(e, t, n);
  },
});
function Ly(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const s in n)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(n, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => n[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = r(s);
    fetch(s.href, i);
  }
})();
function mp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var gp = { exports: {} },
  Ra = {},
  vp = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ki = Symbol.for("react.element"),
  Dy = Symbol.for("react.portal"),
  My = Symbol.for("react.fragment"),
  Uy = Symbol.for("react.strict_mode"),
  Fy = Symbol.for("react.profiler"),
  zy = Symbol.for("react.provider"),
  By = Symbol.for("react.context"),
  Vy = Symbol.for("react.forward_ref"),
  Wy = Symbol.for("react.suspense"),
  Hy = Symbol.for("react.memo"),
  qy = Symbol.for("react.lazy"),
  Hd = Symbol.iterator;
function Ky(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hd && e[Hd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var yp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  wp = Object.assign,
  xp = {};
function Ds(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = xp),
    (this.updater = r || yp);
}
Ds.prototype.isReactComponent = {};
Ds.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ds.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _p() {}
_p.prototype = Ds.prototype;
function _c(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = xp),
    (this.updater = r || yp);
}
var bc = (_c.prototype = new _p());
bc.constructor = _c;
wp(bc, Ds.prototype);
bc.isPureReactComponent = !0;
var qd = Array.isArray,
  bp = Object.prototype.hasOwnProperty,
  Sc = { current: null },
  Sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ep(e, t, r) {
  var n,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      bp.call(t, n) && !Sp.hasOwnProperty(n) && (s[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) s.children = r;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    s.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((a = e.defaultProps), a)) s[n] === void 0 && (s[n] = a[n]);
  return {
    $$typeof: Ki,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: Sc.current,
  };
}
function Gy(e, t) {
  return {
    $$typeof: Ki,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ec(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ki;
}
function Qy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Kd = /\/+/g;
function hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Qy("" + e.key)
    : t.toString(36);
}
function jo(e, t, r, n, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ki:
          case Dy:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = n === "" ? "." + hl(o, 0) : n),
      qd(s)
        ? ((r = ""),
          e != null && (r = e.replace(Kd, "$&/") + "/"),
          jo(s, t, r, "", function (u) {
            return u;
          }))
        : s != null &&
          (Ec(s) &&
            (s = Gy(
              s,
              r +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Kd, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (n = n === "" ? "." : n + ":"), qd(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = n + hl(i, a);
      o += jo(i, t, r, l, s);
    }
  else if (((l = Ky(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + hl(i, a++)), (o += jo(i, t, r, l, s));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function oo(e, t, r) {
  if (e == null) return e;
  var n = [],
    s = 0;
  return (
    jo(e, n, "", "", function (i) {
      return t.call(r, i, s++);
    }),
    n
  );
}
function Jy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null },
  Io = { transition: null },
  Yy = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: Io,
    ReactCurrentOwner: Sc,
  };
function kp() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = {
  map: oo,
  forEach: function (e, t, r) {
    oo(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      oo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      oo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ec(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = Ds;
Y.Fragment = My;
Y.Profiler = Fy;
Y.PureComponent = _c;
Y.StrictMode = Uy;
Y.Suspense = Wy;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yy;
Y.act = kp;
Y.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = wp({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Sc.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      bp.call(t, l) &&
        !Sp.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: Ki, type: e.type, key: s, ref: i, props: n, _owner: o };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: By,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: zy, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = Ep;
Y.createFactory = function (e) {
  var t = Ep.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: Vy, render: e };
};
Y.isValidElement = Ec;
Y.lazy = function (e) {
  return { $$typeof: qy, _payload: { _status: -1, _result: e }, _init: Jy };
};
Y.memo = function (e, t) {
  return { $$typeof: Hy, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = Io.transition;
  Io.transition = {};
  try {
    e();
  } finally {
    Io.transition = t;
  }
};
Y.unstable_act = kp;
Y.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return He.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
Y.useId = function () {
  return He.current.useId();
};
Y.useImperativeHandle = function (e, t, r) {
  return He.current.useImperativeHandle(e, t, r);
};
Y.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
Y.useReducer = function (e, t, r) {
  return He.current.useReducer(e, t, r);
};
Y.useRef = function (e) {
  return He.current.useRef(e);
};
Y.useState = function (e) {
  return He.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, r) {
  return He.current.useSyncExternalStore(e, t, r);
};
Y.useTransition = function () {
  return He.current.useTransition();
};
Y.version = "18.3.1";
vp.exports = Y;
var x = vp.exports;
const N = mp(x),
  Tp = Ly({ __proto__: null, default: N }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xy = x,
  Zy = Symbol.for("react.element"),
  e0 = Symbol.for("react.fragment"),
  t0 = Object.prototype.hasOwnProperty,
  r0 = Xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  n0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cp(e, t, r) {
  var n,
    s = {},
    i = null,
    o = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (n in t) t0.call(t, n) && !n0.hasOwnProperty(n) && (s[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) s[n] === void 0 && (s[n] = t[n]);
  return {
    $$typeof: Zy,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: r0.current,
  };
}
Ra.Fragment = e0;
Ra.jsx = Cp;
Ra.jsxs = Cp;
gp.exports = Ra;
var b = gp.exports,
  Rp = { exports: {} },
  dt = {},
  Pp = { exports: {} },
  Op = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, P) {
    var $ = C.length;
    C.push(P);
    e: for (; 0 < $; ) {
      var K = ($ - 1) >>> 1,
        U = C[K];
      if (0 < s(U, P)) (C[K] = P), (C[$] = U), ($ = K);
      else break e;
    }
  }
  function r(C) {
    return C.length === 0 ? null : C[0];
  }
  function n(C) {
    if (C.length === 0) return null;
    var P = C[0],
      $ = C.pop();
    if ($ !== P) {
      C[0] = $;
      e: for (var K = 0, U = C.length, J = U >>> 1; K < J; ) {
        var Z = 2 * (K + 1) - 1,
          xe = C[Z],
          Ie = Z + 1,
          re = C[Ie];
        if (0 > s(xe, $))
          Ie < U && 0 > s(re, xe)
            ? ((C[K] = re), (C[Ie] = $), (K = Ie))
            : ((C[K] = xe), (C[Z] = $), (K = Z));
        else if (Ie < U && 0 > s(re, $)) (C[K] = re), (C[Ie] = $), (K = Ie);
        else break e;
      }
    }
    return P;
  }
  function s(C, P) {
    var $ = C.sortIndex - P.sortIndex;
    return $ !== 0 ? $ : C.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    h = null,
    f = 3,
    d = !1,
    y = !1,
    p = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(C) {
    for (var P = r(u); P !== null; ) {
      if (P.callback === null) n(u);
      else if (P.startTime <= C)
        n(u), (P.sortIndex = P.expirationTime), t(l, P);
      else break;
      P = r(u);
    }
  }
  function _(C) {
    if (((p = !1), v(C), !y))
      if (r(l) !== null) (y = !0), V(S);
      else {
        var P = r(u);
        P !== null && q(_, P.startTime - C);
      }
  }
  function S(C, P) {
    (y = !1), p && ((p = !1), g(R), (R = -1)), (d = !0);
    var $ = f;
    try {
      for (
        v(P), h = r(l);
        h !== null && (!(h.expirationTime > P) || (C && !B()));

      ) {
        var K = h.callback;
        if (typeof K == "function") {
          (h.callback = null), (f = h.priorityLevel);
          var U = K(h.expirationTime <= P);
          (P = e.unstable_now()),
            typeof U == "function" ? (h.callback = U) : h === r(l) && n(l),
            v(P);
        } else n(l);
        h = r(l);
      }
      if (h !== null) var J = !0;
      else {
        var Z = r(u);
        Z !== null && q(_, Z.startTime - P), (J = !1);
      }
      return J;
    } finally {
      (h = null), (f = $), (d = !1);
    }
  }
  var E = !1,
    k = null,
    R = -1,
    A = 5,
    j = -1;
  function B() {
    return !(e.unstable_now() - j < A);
  }
  function D() {
    if (k !== null) {
      var C = e.unstable_now();
      j = C;
      var P = !0;
      try {
        P = k(!0, C);
      } finally {
        P ? Q() : ((E = !1), (k = null));
      }
    } else E = !1;
  }
  var Q;
  if (typeof m == "function")
    Q = function () {
      m(D);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      X = I.port2;
    (I.port1.onmessage = D),
      (Q = function () {
        X.postMessage(null);
      });
  } else
    Q = function () {
      w(D, 0);
    };
  function V(C) {
    (k = C), E || ((E = !0), Q());
  }
  function q(C, P) {
    R = w(function () {
      C(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || d || ((y = !0), V(S));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (C) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = f;
      }
      var $ = f;
      f = P;
      try {
        return C();
      } finally {
        f = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, P) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var $ = f;
      f = C;
      try {
        return P();
      } finally {
        f = $;
      }
    }),
    (e.unstable_scheduleCallback = function (C, P, $) {
      var K = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? K + $ : K))
          : ($ = K),
        C)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = $ + U),
        (C = {
          id: c++,
          callback: P,
          priorityLevel: C,
          startTime: $,
          expirationTime: U,
          sortIndex: -1,
        }),
        $ > K
          ? ((C.sortIndex = $),
            t(u, C),
            r(l) === null &&
              C === r(u) &&
              (p ? (g(R), (R = -1)) : (p = !0), q(_, $ - K)))
          : ((C.sortIndex = U), t(l, C), y || d || ((y = !0), V(S))),
        C
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (C) {
      var P = f;
      return function () {
        var $ = f;
        f = P;
        try {
          return C.apply(this, arguments);
        } finally {
          f = $;
        }
      };
    });
})(Op);
Pp.exports = Op;
var s0 = Pp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var i0 = x,
  ct = s0;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ap = new Set(),
  yi = {};
function Nn(e, t) {
  Rs(e, t), Rs(e + "Capture", t);
}
function Rs(e, t) {
  for (yi[e] = t, e = 0; e < t.length; e++) Ap.add(t[e]);
}
var lr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  tu = Object.prototype.hasOwnProperty,
  o0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Gd = {},
  Qd = {};
function a0(e) {
  return tu.call(Qd, e)
    ? !0
    : tu.call(Gd, e)
    ? !1
    : o0.test(e)
    ? (Qd[e] = !0)
    : ((Gd[e] = !0), !1);
}
function l0(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function u0(e, t, r, n) {
  if (t === null || typeof t > "u" || l0(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function qe(e, t, r, n, s, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = s),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    je[e] = new qe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  je[t] = new qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  je[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  je[e] = new qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    je[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  je[e] = new qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  je[e] = new qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  je[e] = new qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  je[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var kc = /[\-:]([a-z])/g;
function Tc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(kc, Tc);
    je[t] = new qe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(kc, Tc);
    je[t] = new qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(kc, Tc);
  je[t] = new qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  je[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new qe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  je[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cc(e, t, r, n) {
  var s = je.hasOwnProperty(t) ? je[t] : null;
  (s !== null
    ? s.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (u0(t, r, s, n) && (r = null),
    n || s === null
      ? a0(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : s.mustUseProperty
      ? (e[s.propertyName] = r === null ? (s.type === 3 ? !1 : "") : r)
      : ((t = s.attributeName),
        (n = s.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (r = s === 3 || (s === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var pr = i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ao = Symbol.for("react.element"),
  Yn = Symbol.for("react.portal"),
  Xn = Symbol.for("react.fragment"),
  Rc = Symbol.for("react.strict_mode"),
  ru = Symbol.for("react.profiler"),
  Np = Symbol.for("react.provider"),
  jp = Symbol.for("react.context"),
  Pc = Symbol.for("react.forward_ref"),
  nu = Symbol.for("react.suspense"),
  su = Symbol.for("react.suspense_list"),
  Oc = Symbol.for("react.memo"),
  Tr = Symbol.for("react.lazy"),
  Ip = Symbol.for("react.offscreen"),
  Jd = Symbol.iterator;
function Hs(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Jd && e[Jd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  fl;
function ti(e) {
  if (fl === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      fl = (t && t[1]) || "";
    }
  return (
    `
` +
    fl +
    e
  );
}
var pl = !1;
function ml(e, t) {
  if (!e || pl) return "";
  pl = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = n.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (pl = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? ti(e) : "";
}
function c0(e) {
  switch (e.tag) {
    case 5:
      return ti(e.type);
    case 16:
      return ti("Lazy");
    case 13:
      return ti("Suspense");
    case 19:
      return ti("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ml(e.type, !1)), e;
    case 11:
      return (e = ml(e.type.render, !1)), e;
    case 1:
      return (e = ml(e.type, !0)), e;
    default:
      return "";
  }
}
function iu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xn:
      return "Fragment";
    case Yn:
      return "Portal";
    case ru:
      return "Profiler";
    case Rc:
      return "StrictMode";
    case nu:
      return "Suspense";
    case su:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case jp:
        return (e.displayName || "Context") + ".Consumer";
      case Np:
        return (e._context.displayName || "Context") + ".Provider";
      case Pc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Oc:
        return (
          (t = e.displayName || null), t !== null ? t : iu(e.type) || "Memo"
        );
      case Tr:
        (t = e._payload), (e = e._init);
        try {
          return iu(e(t));
        } catch {}
    }
  return null;
}
function d0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return iu(t);
    case 8:
      return t === Rc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Gr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function $p(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function h0(e) {
  var t = $p(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var s = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          (n = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (o) {
          n = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function lo(e) {
  e._valueTracker || (e._valueTracker = h0(e));
}
function Lp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = $p(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function Go(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ou(e, t) {
  var r = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Yd(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = Gr(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Dp(e, t) {
  (t = t.checked), t != null && Cc(e, "checked", t, !1);
}
function au(e, t) {
  Dp(e, t);
  var r = Gr(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? lu(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && lu(e, t.type, Gr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Xd(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function lu(e, t, r) {
  (t !== "number" || Go(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var ri = Array.isArray;
function cs(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < r.length; s++) t["$" + r[s]] = !0;
    for (r = 0; r < e.length; r++)
      (s = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== s && (e[r].selected = s),
        s && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Gr(r), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === r) {
        (e[s].selected = !0), n && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function uu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Zd(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(O(92));
      if (ri(r)) {
        if (1 < r.length) throw Error(O(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Gr(r) };
}
function Mp(e, t) {
  var r = Gr(t.value),
    n = Gr(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function eh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Up(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Up(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var uo,
  Fp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        uo = uo || document.createElement("div"),
          uo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = uo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function wi(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var oi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  f0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(oi).forEach(function (e) {
  f0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (oi[t] = oi[e]);
  });
});
function zp(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (oi.hasOwnProperty(e) && oi[e])
    ? ("" + t).trim()
    : t + "px";
}
function Bp(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        s = zp(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, s) : (e[r] = s);
    }
}
var p0 = me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function du(e, t) {
  if (t) {
    if (p0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function hu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var fu = null;
function Ac(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pu = null,
  ds = null,
  hs = null;
function th(e) {
  if ((e = Ji(e))) {
    if (typeof pu != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = ja(t)), pu(e.stateNode, e.type, t));
  }
}
function Vp(e) {
  ds ? (hs ? hs.push(e) : (hs = [e])) : (ds = e);
}
function Wp() {
  if (ds) {
    var e = ds,
      t = hs;
    if (((hs = ds = null), th(e), t)) for (e = 0; e < t.length; e++) th(t[e]);
  }
}
function Hp(e, t) {
  return e(t);
}
function qp() {}
var gl = !1;
function Kp(e, t, r) {
  if (gl) return e(t, r);
  gl = !0;
  try {
    return Hp(e, t, r);
  } finally {
    (gl = !1), (ds !== null || hs !== null) && (qp(), Wp());
  }
}
function xi(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = ja(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(O(231, t, typeof r));
  return r;
}
var mu = !1;
if (lr)
  try {
    var qs = {};
    Object.defineProperty(qs, "passive", {
      get: function () {
        mu = !0;
      },
    }),
      window.addEventListener("test", qs, qs),
      window.removeEventListener("test", qs, qs);
  } catch {
    mu = !1;
  }
function m0(e, t, r, n, s, i, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var ai = !1,
  Qo = null,
  Jo = !1,
  gu = null,
  g0 = {
    onError: function (e) {
      (ai = !0), (Qo = e);
    },
  };
function v0(e, t, r, n, s, i, o, a, l) {
  (ai = !1), (Qo = null), m0.apply(g0, arguments);
}
function y0(e, t, r, n, s, i, o, a, l) {
  if ((v0.apply(this, arguments), ai)) {
    if (ai) {
      var u = Qo;
      (ai = !1), (Qo = null);
    } else throw Error(O(198));
    Jo || ((Jo = !0), (gu = u));
  }
}
function jn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Gp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function rh(e) {
  if (jn(e) !== e) throw Error(O(188));
}
function w0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jn(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var s = r.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((n = s.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === r) return rh(s), e;
        if (i === n) return rh(s), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (r.return !== n.return) (r = s), (n = i);
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === r) {
          (o = !0), (r = s), (n = i);
          break;
        }
        if (a === n) {
          (o = !0), (n = s), (r = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === r) {
            (o = !0), (r = i), (n = s);
            break;
          }
          if (a === n) {
            (o = !0), (n = i), (r = s);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(O(189));
      }
    }
    if (r.alternate !== n) throw Error(O(190));
  }
  if (r.tag !== 3) throw Error(O(188));
  return r.stateNode.current === r ? e : t;
}
function Qp(e) {
  return (e = w0(e)), e !== null ? Jp(e) : null;
}
function Jp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Jp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Yp = ct.unstable_scheduleCallback,
  nh = ct.unstable_cancelCallback,
  x0 = ct.unstable_shouldYield,
  _0 = ct.unstable_requestPaint,
  we = ct.unstable_now,
  b0 = ct.unstable_getCurrentPriorityLevel,
  Nc = ct.unstable_ImmediatePriority,
  Xp = ct.unstable_UserBlockingPriority,
  Yo = ct.unstable_NormalPriority,
  S0 = ct.unstable_LowPriority,
  Zp = ct.unstable_IdlePriority,
  Pa = null,
  Gt = null;
function E0(e) {
  if (Gt && typeof Gt.onCommitFiberRoot == "function")
    try {
      Gt.onCommitFiberRoot(Pa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : C0,
  k0 = Math.log,
  T0 = Math.LN2;
function C0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((k0(e) / T0) | 0)) | 0;
}
var co = 64,
  ho = 4194304;
function ni(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Xo(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = r & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (n = ni(a)) : ((i &= o), i !== 0 && (n = ni(i)));
  } else (o = r & ~s), o !== 0 ? (n = ni(o)) : i !== 0 && (n = ni(i));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & s) &&
    ((s = n & -n), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - $t(t)), (s = 1 << r), (n |= e[r]), (t &= ~s);
  return n;
}
function R0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function P0(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - $t(i),
      a = 1 << o,
      l = s[o];
    l === -1
      ? (!(a & r) || a & n) && (s[o] = R0(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function vu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function em() {
  var e = co;
  return (co <<= 1), !(co & 4194240) && (co = 64), e;
}
function vl(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Gi(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = r);
}
function O0(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var s = 31 - $t(r),
      i = 1 << s;
    (t[s] = 0), (n[s] = -1), (e[s] = -1), (r &= ~i);
  }
}
function jc(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - $t(r),
      s = 1 << n;
    (s & t) | (e[n] & t) && (e[n] |= t), (r &= ~s);
  }
}
var ne = 0;
function tm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var rm,
  Ic,
  nm,
  sm,
  im,
  yu = !1,
  fo = [],
  Fr = null,
  zr = null,
  Br = null,
  _i = new Map(),
  bi = new Map(),
  Pr = [],
  A0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function sh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Fr = null;
      break;
    case "dragenter":
    case "dragleave":
      zr = null;
      break;
    case "mouseover":
    case "mouseout":
      Br = null;
      break;
    case "pointerover":
    case "pointerout":
      _i.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      bi.delete(t.pointerId);
  }
}
function Ks(e, t, r, n, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = Ji(t)), t !== null && Ic(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function N0(e, t, r, n, s) {
  switch (t) {
    case "focusin":
      return (Fr = Ks(Fr, e, t, r, n, s)), !0;
    case "dragenter":
      return (zr = Ks(zr, e, t, r, n, s)), !0;
    case "mouseover":
      return (Br = Ks(Br, e, t, r, n, s)), !0;
    case "pointerover":
      var i = s.pointerId;
      return _i.set(i, Ks(_i.get(i) || null, e, t, r, n, s)), !0;
    case "gotpointercapture":
      return (
        (i = s.pointerId), bi.set(i, Ks(bi.get(i) || null, e, t, r, n, s)), !0
      );
  }
  return !1;
}
function om(e) {
  var t = pn(e.target);
  if (t !== null) {
    var r = jn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Gp(r)), t !== null)) {
          (e.blockedOn = t),
            im(e.priority, function () {
              nm(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function $o(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = wu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (fu = n), r.target.dispatchEvent(n), (fu = null);
    } else return (t = Ji(r)), t !== null && Ic(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function ih(e, t, r) {
  $o(e) && r.delete(t);
}
function j0() {
  (yu = !1),
    Fr !== null && $o(Fr) && (Fr = null),
    zr !== null && $o(zr) && (zr = null),
    Br !== null && $o(Br) && (Br = null),
    _i.forEach(ih),
    bi.forEach(ih);
}
function Gs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    yu ||
      ((yu = !0),
      ct.unstable_scheduleCallback(ct.unstable_NormalPriority, j0)));
}
function Si(e) {
  function t(s) {
    return Gs(s, e);
  }
  if (0 < fo.length) {
    Gs(fo[0], e);
    for (var r = 1; r < fo.length; r++) {
      var n = fo[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Fr !== null && Gs(Fr, e),
      zr !== null && Gs(zr, e),
      Br !== null && Gs(Br, e),
      _i.forEach(t),
      bi.forEach(t),
      r = 0;
    r < Pr.length;
    r++
  )
    (n = Pr[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Pr.length && ((r = Pr[0]), r.blockedOn === null); )
    om(r), r.blockedOn === null && Pr.shift();
}
var fs = pr.ReactCurrentBatchConfig,
  Zo = !0;
function I0(e, t, r, n) {
  var s = ne,
    i = fs.transition;
  fs.transition = null;
  try {
    (ne = 1), $c(e, t, r, n);
  } finally {
    (ne = s), (fs.transition = i);
  }
}
function $0(e, t, r, n) {
  var s = ne,
    i = fs.transition;
  fs.transition = null;
  try {
    (ne = 4), $c(e, t, r, n);
  } finally {
    (ne = s), (fs.transition = i);
  }
}
function $c(e, t, r, n) {
  if (Zo) {
    var s = wu(e, t, r, n);
    if (s === null) Cl(e, t, n, ea, r), sh(e, n);
    else if (N0(s, e, t, r, n)) n.stopPropagation();
    else if ((sh(e, n), t & 4 && -1 < A0.indexOf(e))) {
      for (; s !== null; ) {
        var i = Ji(s);
        if (
          (i !== null && rm(i),
          (i = wu(e, t, r, n)),
          i === null && Cl(e, t, n, ea, r),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && n.stopPropagation();
    } else Cl(e, t, n, null, r);
  }
}
var ea = null;
function wu(e, t, r, n) {
  if (((ea = null), (e = Ac(n)), (e = pn(e)), e !== null))
    if (((t = jn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Gp(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ea = e), null;
}
function am(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (b0()) {
        case Nc:
          return 1;
        case Xp:
          return 4;
        case Yo:
        case S0:
          return 16;
        case Zp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dr = null,
  Lc = null,
  Lo = null;
function lm() {
  if (Lo) return Lo;
  var e,
    t = Lc,
    r = t.length,
    n,
    s = "value" in Dr ? Dr.value : Dr.textContent,
    i = s.length;
  for (e = 0; e < r && t[e] === s[e]; e++);
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === s[i - n]; n++);
  return (Lo = s.slice(e, 1 < n ? 1 - n : void 0));
}
function Do(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function po() {
  return !0;
}
function oh() {
  return !1;
}
function ht(e) {
  function t(r, n, s, i, o) {
    (this._reactName = r),
      (this._targetInst = s),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? po
        : oh),
      (this.isPropagationStopped = oh),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = po));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = po));
      },
      persist: function () {},
      isPersistent: po,
    }),
    t
  );
}
var Ms = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Dc = ht(Ms),
  Qi = me({}, Ms, { view: 0, detail: 0 }),
  L0 = ht(Qi),
  yl,
  wl,
  Qs,
  Oa = me({}, Qi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Mc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Qs &&
            (Qs && e.type === "mousemove"
              ? ((yl = e.screenX - Qs.screenX), (wl = e.screenY - Qs.screenY))
              : (wl = yl = 0),
            (Qs = e)),
          yl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : wl;
    },
  }),
  ah = ht(Oa),
  D0 = me({}, Oa, { dataTransfer: 0 }),
  M0 = ht(D0),
  U0 = me({}, Qi, { relatedTarget: 0 }),
  xl = ht(U0),
  F0 = me({}, Ms, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  z0 = ht(F0),
  B0 = me({}, Ms, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  V0 = ht(B0),
  W0 = me({}, Ms, { data: 0 }),
  lh = ht(W0),
  H0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  q0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  K0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function G0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = K0[e]) ? !!t[e] : !1;
}
function Mc() {
  return G0;
}
var Q0 = me({}, Qi, {
    key: function (e) {
      if (e.key) {
        var t = H0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Do(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? q0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Mc,
    charCode: function (e) {
      return e.type === "keypress" ? Do(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Do(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  J0 = ht(Q0),
  Y0 = me({}, Oa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  uh = ht(Y0),
  X0 = me({}, Qi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mc,
  }),
  Z0 = ht(X0),
  ew = me({}, Ms, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tw = ht(ew),
  rw = me({}, Oa, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  nw = ht(rw),
  sw = [9, 13, 27, 32],
  Uc = lr && "CompositionEvent" in window,
  li = null;
lr && "documentMode" in document && (li = document.documentMode);
var iw = lr && "TextEvent" in window && !li,
  um = lr && (!Uc || (li && 8 < li && 11 >= li)),
  ch = " ",
  dh = !1;
function cm(e, t) {
  switch (e) {
    case "keyup":
      return sw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function dm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Zn = !1;
function ow(e, t) {
  switch (e) {
    case "compositionend":
      return dm(t);
    case "keypress":
      return t.which !== 32 ? null : ((dh = !0), ch);
    case "textInput":
      return (e = t.data), e === ch && dh ? null : e;
    default:
      return null;
  }
}
function aw(e, t) {
  if (Zn)
    return e === "compositionend" || (!Uc && cm(e, t))
      ? ((e = lm()), (Lo = Lc = Dr = null), (Zn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return um && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var lw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function hh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!lw[e.type] : t === "textarea";
}
function hm(e, t, r, n) {
  Vp(n),
    (t = ta(t, "onChange")),
    0 < t.length &&
      ((r = new Dc("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var ui = null,
  Ei = null;
function uw(e) {
  Sm(e, 0);
}
function Aa(e) {
  var t = rs(e);
  if (Lp(t)) return e;
}
function cw(e, t) {
  if (e === "change") return t;
}
var fm = !1;
if (lr) {
  var _l;
  if (lr) {
    var bl = "oninput" in document;
    if (!bl) {
      var fh = document.createElement("div");
      fh.setAttribute("oninput", "return;"),
        (bl = typeof fh.oninput == "function");
    }
    _l = bl;
  } else _l = !1;
  fm = _l && (!document.documentMode || 9 < document.documentMode);
}
function ph() {
  ui && (ui.detachEvent("onpropertychange", pm), (Ei = ui = null));
}
function pm(e) {
  if (e.propertyName === "value" && Aa(Ei)) {
    var t = [];
    hm(t, Ei, e, Ac(e)), Kp(uw, t);
  }
}
function dw(e, t, r) {
  e === "focusin"
    ? (ph(), (ui = t), (Ei = r), ui.attachEvent("onpropertychange", pm))
    : e === "focusout" && ph();
}
function hw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Aa(Ei);
}
function fw(e, t) {
  if (e === "click") return Aa(t);
}
function pw(e, t) {
  if (e === "input" || e === "change") return Aa(t);
}
function mw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Dt = typeof Object.is == "function" ? Object.is : mw;
function ki(e, t) {
  if (Dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var s = r[n];
    if (!tu.call(t, s) || !Dt(e[s], t[s])) return !1;
  }
  return !0;
}
function mh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gh(e, t) {
  var r = mh(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = mh(r);
  }
}
function mm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? mm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function gm() {
  for (var e = window, t = Go(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Go(e.document);
  }
  return t;
}
function Fc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function gw(e) {
  var t = gm(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    mm(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Fc(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = r.textContent.length,
          i = Math.min(n.start, s);
        (n = n.end === void 0 ? i : Math.min(n.end, s)),
          !e.extend && i > n && ((s = n), (n = i), (i = s)),
          (s = gh(r, i));
        var o = gh(r, n);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var vw = lr && "documentMode" in document && 11 >= document.documentMode,
  es = null,
  xu = null,
  ci = null,
  _u = !1;
function vh(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  _u ||
    es == null ||
    es !== Go(n) ||
    ((n = es),
    "selectionStart" in n && Fc(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (ci && ki(ci, n)) ||
      ((ci = n),
      (n = ta(xu, "onSelect")),
      0 < n.length &&
        ((t = new Dc("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = es))));
}
function mo(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var ts = {
    animationend: mo("Animation", "AnimationEnd"),
    animationiteration: mo("Animation", "AnimationIteration"),
    animationstart: mo("Animation", "AnimationStart"),
    transitionend: mo("Transition", "TransitionEnd"),
  },
  Sl = {},
  vm = {};
lr &&
  ((vm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ts.animationend.animation,
    delete ts.animationiteration.animation,
    delete ts.animationstart.animation),
  "TransitionEvent" in window || delete ts.transitionend.transition);
function Na(e) {
  if (Sl[e]) return Sl[e];
  if (!ts[e]) return e;
  var t = ts[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in vm) return (Sl[e] = t[r]);
  return e;
}
var ym = Na("animationend"),
  wm = Na("animationiteration"),
  xm = Na("animationstart"),
  _m = Na("transitionend"),
  bm = new Map(),
  yh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function en(e, t) {
  bm.set(e, t), Nn(t, [e]);
}
for (var El = 0; El < yh.length; El++) {
  var kl = yh[El],
    yw = kl.toLowerCase(),
    ww = kl[0].toUpperCase() + kl.slice(1);
  en(yw, "on" + ww);
}
en(ym, "onAnimationEnd");
en(wm, "onAnimationIteration");
en(xm, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(_m, "onTransitionEnd");
Rs("onMouseEnter", ["mouseout", "mouseover"]);
Rs("onMouseLeave", ["mouseout", "mouseover"]);
Rs("onPointerEnter", ["pointerout", "pointerover"]);
Rs("onPointerLeave", ["pointerout", "pointerover"]);
Nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var si =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  xw = new Set("cancel close invalid load scroll toggle".split(" ").concat(si));
function wh(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), y0(n, t, void 0, e), (e.currentTarget = null);
}
function Sm(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      s = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = n.length - 1; 0 <= o; o--) {
          var a = n[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          wh(s, a, u), (i = l);
        }
      else
        for (o = 0; o < n.length; o++) {
          if (
            ((a = n[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          wh(s, a, u), (i = l);
        }
    }
  }
  if (Jo) throw ((e = gu), (Jo = !1), (gu = null), e);
}
function le(e, t) {
  var r = t[Tu];
  r === void 0 && (r = t[Tu] = new Set());
  var n = e + "__bubble";
  r.has(n) || (Em(t, e, 2, !1), r.add(n));
}
function Tl(e, t, r) {
  var n = 0;
  t && (n |= 4), Em(r, e, n, t);
}
var go = "_reactListening" + Math.random().toString(36).slice(2);
function Ti(e) {
  if (!e[go]) {
    (e[go] = !0),
      Ap.forEach(function (r) {
        r !== "selectionchange" && (xw.has(r) || Tl(r, !1, e), Tl(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[go] || ((t[go] = !0), Tl("selectionchange", !1, t));
  }
}
function Em(e, t, r, n) {
  switch (am(t)) {
    case 1:
      var s = I0;
      break;
    case 4:
      s = $0;
      break;
    default:
      s = $c;
  }
  (r = s.bind(null, t, r, e)),
    (s = void 0),
    !mu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    n
      ? s !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: s })
        : e.addEventListener(t, r, !0)
      : s !== void 0
      ? e.addEventListener(t, r, { passive: s })
      : e.addEventListener(t, r, !1);
}
function Cl(e, t, r, n, s) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var o = n.tag;
      if (o === 3 || o === 4) {
        var a = n.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = n.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = pn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            n = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  Kp(function () {
    var u = i,
      c = Ac(r),
      h = [];
    e: {
      var f = bm.get(e);
      if (f !== void 0) {
        var d = Dc,
          y = e;
        switch (e) {
          case "keypress":
            if (Do(r) === 0) break e;
          case "keydown":
          case "keyup":
            d = J0;
            break;
          case "focusin":
            (y = "focus"), (d = xl);
            break;
          case "focusout":
            (y = "blur"), (d = xl);
            break;
          case "beforeblur":
          case "afterblur":
            d = xl;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            d = ah;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = M0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = Z0;
            break;
          case ym:
          case wm:
          case xm:
            d = z0;
            break;
          case _m:
            d = tw;
            break;
          case "scroll":
            d = L0;
            break;
          case "wheel":
            d = nw;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = V0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = uh;
        }
        var p = (t & 4) !== 0,
          w = !p && e === "scroll",
          g = p ? (f !== null ? f + "Capture" : null) : f;
        p = [];
        for (var m = u, v; m !== null; ) {
          v = m;
          var _ = v.stateNode;
          if (
            (v.tag === 5 &&
              _ !== null &&
              ((v = _),
              g !== null && ((_ = xi(m, g)), _ != null && p.push(Ci(m, _, v)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < p.length &&
          ((f = new d(f, y, null, r, c)), h.push({ event: f, listeners: p }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (d = e === "mouseout" || e === "pointerout"),
          f &&
            r !== fu &&
            (y = r.relatedTarget || r.fromElement) &&
            (pn(y) || y[ur]))
        )
          break e;
        if (
          (d || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          d
            ? ((y = r.relatedTarget || r.toElement),
              (d = u),
              (y = y ? pn(y) : null),
              y !== null &&
                ((w = jn(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((d = null), (y = u)),
          d !== y)
        ) {
          if (
            ((p = ah),
            (_ = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((p = uh),
              (_ = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (w = d == null ? f : rs(d)),
            (v = y == null ? f : rs(y)),
            (f = new p(_, m + "leave", d, r, c)),
            (f.target = w),
            (f.relatedTarget = v),
            (_ = null),
            pn(c) === u &&
              ((p = new p(g, m + "enter", y, r, c)),
              (p.target = v),
              (p.relatedTarget = w),
              (_ = p)),
            (w = _),
            d && y)
          )
            t: {
              for (p = d, g = y, m = 0, v = p; v; v = zn(v)) m++;
              for (v = 0, _ = g; _; _ = zn(_)) v++;
              for (; 0 < m - v; ) (p = zn(p)), m--;
              for (; 0 < v - m; ) (g = zn(g)), v--;
              for (; m--; ) {
                if (p === g || (g !== null && p === g.alternate)) break t;
                (p = zn(p)), (g = zn(g));
              }
              p = null;
            }
          else p = null;
          d !== null && xh(h, f, d, p, !1),
            y !== null && w !== null && xh(h, w, y, p, !0);
        }
      }
      e: {
        if (
          ((f = u ? rs(u) : window),
          (d = f.nodeName && f.nodeName.toLowerCase()),
          d === "select" || (d === "input" && f.type === "file"))
        )
          var S = cw;
        else if (hh(f))
          if (fm) S = pw;
          else {
            S = hw;
            var E = dw;
          }
        else
          (d = f.nodeName) &&
            d.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (S = fw);
        if (S && (S = S(e, u))) {
          hm(h, S, r, c);
          break e;
        }
        E && E(e, f, u),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            lu(f, "number", f.value);
      }
      switch (((E = u ? rs(u) : window), e)) {
        case "focusin":
          (hh(E) || E.contentEditable === "true") &&
            ((es = E), (xu = u), (ci = null));
          break;
        case "focusout":
          ci = xu = es = null;
          break;
        case "mousedown":
          _u = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_u = !1), vh(h, r, c);
          break;
        case "selectionchange":
          if (vw) break;
        case "keydown":
        case "keyup":
          vh(h, r, c);
      }
      var k;
      if (Uc)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Zn
          ? cm(e, r) && (R = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (um &&
          r.locale !== "ko" &&
          (Zn || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Zn && (k = lm())
            : ((Dr = c),
              (Lc = "value" in Dr ? Dr.value : Dr.textContent),
              (Zn = !0))),
        (E = ta(u, R)),
        0 < E.length &&
          ((R = new lh(R, e, null, r, c)),
          h.push({ event: R, listeners: E }),
          k ? (R.data = k) : ((k = dm(r)), k !== null && (R.data = k)))),
        (k = iw ? ow(e, r) : aw(e, r)) &&
          ((u = ta(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new lh("onBeforeInput", "beforeinput", null, r, c)),
            h.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    Sm(h, t);
  });
}
function Ci(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function ta(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = xi(e, r)),
      i != null && n.unshift(Ci(e, i, s)),
      (i = xi(e, t)),
      i != null && n.push(Ci(e, i, s))),
      (e = e.return);
  }
  return n;
}
function zn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xh(e, t, r, n, s) {
  for (var i = t._reactName, o = []; r !== null && r !== n; ) {
    var a = r,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === n) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      s
        ? ((l = xi(r, i)), l != null && o.unshift(Ci(r, l, a)))
        : s || ((l = xi(r, i)), l != null && o.push(Ci(r, l, a)))),
      (r = r.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var _w = /\r\n?/g,
  bw = /\u0000|\uFFFD/g;
function _h(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _w,
      `
`
    )
    .replace(bw, "");
}
function vo(e, t, r) {
  if (((t = _h(t)), _h(e) !== t && r)) throw Error(O(425));
}
function ra() {}
var bu = null,
  Su = null;
function Eu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ku = typeof setTimeout == "function" ? setTimeout : void 0,
  Sw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  bh = typeof Promise == "function" ? Promise : void 0,
  Ew =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof bh < "u"
      ? function (e) {
          return bh.resolve(null).then(e).catch(kw);
        }
      : ku;
function kw(e) {
  setTimeout(function () {
    throw e;
  });
}
function Rl(e, t) {
  var r = t,
    n = 0;
  do {
    var s = r.nextSibling;
    if ((e.removeChild(r), s && s.nodeType === 8))
      if (((r = s.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(s), Si(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = s;
  } while (r);
  Si(t);
}
function Vr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Sh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Us = Math.random().toString(36).slice(2),
  qt = "__reactFiber$" + Us,
  Ri = "__reactProps$" + Us,
  ur = "__reactContainer$" + Us,
  Tu = "__reactEvents$" + Us,
  Tw = "__reactListeners$" + Us,
  Cw = "__reactHandles$" + Us;
function pn(e) {
  var t = e[qt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[ur] || r[qt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Sh(e); e !== null; ) {
          if ((r = e[qt])) return r;
          e = Sh(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Ji(e) {
  return (
    (e = e[qt] || e[ur]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function rs(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function ja(e) {
  return e[Ri] || null;
}
var Cu = [],
  ns = -1;
function tn(e) {
  return { current: e };
}
function ue(e) {
  0 > ns || ((e.current = Cu[ns]), (Cu[ns] = null), ns--);
}
function oe(e, t) {
  ns++, (Cu[ns] = e.current), (e.current = t);
}
var Qr = {},
  Fe = tn(Qr),
  Je = tn(!1),
  Tn = Qr;
function Ps(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Qr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in r) s[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function Ye(e) {
  return (e = e.childContextTypes), e != null;
}
function na() {
  ue(Je), ue(Fe);
}
function Eh(e, t, r) {
  if (Fe.current !== Qr) throw Error(O(168));
  oe(Fe, t), oe(Je, r);
}
function km(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var s in n) if (!(s in t)) throw Error(O(108, d0(e) || "Unknown", s));
  return me({}, r, n);
}
function sa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qr),
    (Tn = Fe.current),
    oe(Fe, e),
    oe(Je, Je.current),
    !0
  );
}
function kh(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(O(169));
  r
    ? ((e = km(e, t, Tn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      ue(Je),
      ue(Fe),
      oe(Fe, e))
    : ue(Je),
    oe(Je, r);
}
var nr = null,
  Ia = !1,
  Pl = !1;
function Tm(e) {
  nr === null ? (nr = [e]) : nr.push(e);
}
function Rw(e) {
  (Ia = !0), Tm(e);
}
function rn() {
  if (!Pl && nr !== null) {
    Pl = !0;
    var e = 0,
      t = ne;
    try {
      var r = nr;
      for (ne = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (nr = null), (Ia = !1);
    } catch (s) {
      throw (nr !== null && (nr = nr.slice(e + 1)), Yp(Nc, rn), s);
    } finally {
      (ne = t), (Pl = !1);
    }
  }
  return null;
}
var ss = [],
  is = 0,
  ia = null,
  oa = 0,
  mt = [],
  gt = 0,
  Cn = null,
  ir = 1,
  or = "";
function un(e, t) {
  (ss[is++] = oa), (ss[is++] = ia), (ia = e), (oa = t);
}
function Cm(e, t, r) {
  (mt[gt++] = ir), (mt[gt++] = or), (mt[gt++] = Cn), (Cn = e);
  var n = ir;
  e = or;
  var s = 32 - $t(n) - 1;
  (n &= ~(1 << s)), (r += 1);
  var i = 32 - $t(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    (i = (n & ((1 << o) - 1)).toString(32)),
      (n >>= o),
      (s -= o),
      (ir = (1 << (32 - $t(t) + s)) | (r << s) | n),
      (or = i + e);
  } else (ir = (1 << i) | (r << s) | n), (or = e);
}
function zc(e) {
  e.return !== null && (un(e, 1), Cm(e, 1, 0));
}
function Bc(e) {
  for (; e === ia; )
    (ia = ss[--is]), (ss[is] = null), (oa = ss[--is]), (ss[is] = null);
  for (; e === Cn; )
    (Cn = mt[--gt]),
      (mt[gt] = null),
      (or = mt[--gt]),
      (mt[gt] = null),
      (ir = mt[--gt]),
      (mt[gt] = null);
}
var lt = null,
  at = null,
  de = !1,
  It = null;
function Rm(e, t) {
  var r = vt(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Th(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (lt = e), (at = Vr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (lt = e), (at = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Cn !== null ? { id: ir, overflow: or } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = vt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (lt = e),
            (at = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ru(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pu(e) {
  if (de) {
    var t = at;
    if (t) {
      var r = t;
      if (!Th(e, t)) {
        if (Ru(e)) throw Error(O(418));
        t = Vr(r.nextSibling);
        var n = lt;
        t && Th(e, t)
          ? Rm(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), (lt = e));
      }
    } else {
      if (Ru(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (de = !1), (lt = e);
    }
  }
}
function Ch(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  lt = e;
}
function yo(e) {
  if (e !== lt) return !1;
  if (!de) return Ch(e), (de = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Eu(e.type, e.memoizedProps))),
    t && (t = at))
  ) {
    if (Ru(e)) throw (Pm(), Error(O(418)));
    for (; t; ) Rm(e, t), (t = Vr(t.nextSibling));
  }
  if ((Ch(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              at = Vr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      at = null;
    }
  } else at = lt ? Vr(e.stateNode.nextSibling) : null;
  return !0;
}
function Pm() {
  for (var e = at; e; ) e = Vr(e.nextSibling);
}
function Os() {
  (at = lt = null), (de = !1);
}
function Vc(e) {
  It === null ? (It = [e]) : It.push(e);
}
var Pw = pr.ReactCurrentBatchConfig;
function Js(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(O(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(O(147, e));
      var s = n,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!r._owner) throw Error(O(290, e));
  }
  return e;
}
function wo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Rh(e) {
  var t = e._init;
  return t(e._payload);
}
function Om(e) {
  function t(g, m) {
    if (e) {
      var v = g.deletions;
      v === null ? ((g.deletions = [m]), (g.flags |= 16)) : v.push(m);
    }
  }
  function r(g, m) {
    if (!e) return null;
    for (; m !== null; ) t(g, m), (m = m.sibling);
    return null;
  }
  function n(g, m) {
    for (g = new Map(); m !== null; )
      m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling);
    return g;
  }
  function s(g, m) {
    return (g = Kr(g, m)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, m, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((g.flags |= 2), m) : v)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function o(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, m, v, _) {
    return m === null || m.tag !== 6
      ? ((m = Ll(v, g.mode, _)), (m.return = g), m)
      : ((m = s(m, v)), (m.return = g), m);
  }
  function l(g, m, v, _) {
    var S = v.type;
    return S === Xn
      ? c(g, m, v.props.children, _, v.key)
      : m !== null &&
        (m.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Tr &&
            Rh(S) === m.type))
      ? ((_ = s(m, v.props)), (_.ref = Js(g, m, v)), (_.return = g), _)
      : ((_ = Wo(v.type, v.key, v.props, null, g.mode, _)),
        (_.ref = Js(g, m, v)),
        (_.return = g),
        _);
  }
  function u(g, m, v, _) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = Dl(v, g.mode, _)), (m.return = g), m)
      : ((m = s(m, v.children || [])), (m.return = g), m);
  }
  function c(g, m, v, _, S) {
    return m === null || m.tag !== 7
      ? ((m = kn(v, g.mode, _, S)), (m.return = g), m)
      : ((m = s(m, v)), (m.return = g), m);
  }
  function h(g, m, v) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Ll("" + m, g.mode, v)), (m.return = g), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ao:
          return (
            (v = Wo(m.type, m.key, m.props, null, g.mode, v)),
            (v.ref = Js(g, null, m)),
            (v.return = g),
            v
          );
        case Yn:
          return (m = Dl(m, g.mode, v)), (m.return = g), m;
        case Tr:
          var _ = m._init;
          return h(g, _(m._payload), v);
      }
      if (ri(m) || Hs(m))
        return (m = kn(m, g.mode, v, null)), (m.return = g), m;
      wo(g, m);
    }
    return null;
  }
  function f(g, m, v, _) {
    var S = m !== null ? m.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return S !== null ? null : a(g, m, "" + v, _);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ao:
          return v.key === S ? l(g, m, v, _) : null;
        case Yn:
          return v.key === S ? u(g, m, v, _) : null;
        case Tr:
          return (S = v._init), f(g, m, S(v._payload), _);
      }
      if (ri(v) || Hs(v)) return S !== null ? null : c(g, m, v, _, null);
      wo(g, v);
    }
    return null;
  }
  function d(g, m, v, _, S) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (g = g.get(v) || null), a(m, g, "" + _, S);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case ao:
          return (g = g.get(_.key === null ? v : _.key) || null), l(m, g, _, S);
        case Yn:
          return (g = g.get(_.key === null ? v : _.key) || null), u(m, g, _, S);
        case Tr:
          var E = _._init;
          return d(g, m, v, E(_._payload), S);
      }
      if (ri(_) || Hs(_)) return (g = g.get(v) || null), c(m, g, _, S, null);
      wo(m, _);
    }
    return null;
  }
  function y(g, m, v, _) {
    for (
      var S = null, E = null, k = m, R = (m = 0), A = null;
      k !== null && R < v.length;
      R++
    ) {
      k.index > R ? ((A = k), (k = null)) : (A = k.sibling);
      var j = f(g, k, v[R], _);
      if (j === null) {
        k === null && (k = A);
        break;
      }
      e && k && j.alternate === null && t(g, k),
        (m = i(j, m, R)),
        E === null ? (S = j) : (E.sibling = j),
        (E = j),
        (k = A);
    }
    if (R === v.length) return r(g, k), de && un(g, R), S;
    if (k === null) {
      for (; R < v.length; R++)
        (k = h(g, v[R], _)),
          k !== null &&
            ((m = i(k, m, R)), E === null ? (S = k) : (E.sibling = k), (E = k));
      return de && un(g, R), S;
    }
    for (k = n(g, k); R < v.length; R++)
      (A = d(k, g, R, v[R], _)),
        A !== null &&
          (e && A.alternate !== null && k.delete(A.key === null ? R : A.key),
          (m = i(A, m, R)),
          E === null ? (S = A) : (E.sibling = A),
          (E = A));
    return (
      e &&
        k.forEach(function (B) {
          return t(g, B);
        }),
      de && un(g, R),
      S
    );
  }
  function p(g, m, v, _) {
    var S = Hs(v);
    if (typeof S != "function") throw Error(O(150));
    if (((v = S.call(v)), v == null)) throw Error(O(151));
    for (
      var E = (S = null), k = m, R = (m = 0), A = null, j = v.next();
      k !== null && !j.done;
      R++, j = v.next()
    ) {
      k.index > R ? ((A = k), (k = null)) : (A = k.sibling);
      var B = f(g, k, j.value, _);
      if (B === null) {
        k === null && (k = A);
        break;
      }
      e && k && B.alternate === null && t(g, k),
        (m = i(B, m, R)),
        E === null ? (S = B) : (E.sibling = B),
        (E = B),
        (k = A);
    }
    if (j.done) return r(g, k), de && un(g, R), S;
    if (k === null) {
      for (; !j.done; R++, j = v.next())
        (j = h(g, j.value, _)),
          j !== null &&
            ((m = i(j, m, R)), E === null ? (S = j) : (E.sibling = j), (E = j));
      return de && un(g, R), S;
    }
    for (k = n(g, k); !j.done; R++, j = v.next())
      (j = d(k, g, R, j.value, _)),
        j !== null &&
          (e && j.alternate !== null && k.delete(j.key === null ? R : j.key),
          (m = i(j, m, R)),
          E === null ? (S = j) : (E.sibling = j),
          (E = j));
    return (
      e &&
        k.forEach(function (D) {
          return t(g, D);
        }),
      de && un(g, R),
      S
    );
  }
  function w(g, m, v, _) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Xn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case ao:
          e: {
            for (var S = v.key, E = m; E !== null; ) {
              if (E.key === S) {
                if (((S = v.type), S === Xn)) {
                  if (E.tag === 7) {
                    r(g, E.sibling),
                      (m = s(E, v.props.children)),
                      (m.return = g),
                      (g = m);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Tr &&
                    Rh(S) === E.type)
                ) {
                  r(g, E.sibling),
                    (m = s(E, v.props)),
                    (m.ref = Js(g, E, v)),
                    (m.return = g),
                    (g = m);
                  break e;
                }
                r(g, E);
                break;
              } else t(g, E);
              E = E.sibling;
            }
            v.type === Xn
              ? ((m = kn(v.props.children, g.mode, _, v.key)),
                (m.return = g),
                (g = m))
              : ((_ = Wo(v.type, v.key, v.props, null, g.mode, _)),
                (_.ref = Js(g, m, v)),
                (_.return = g),
                (g = _));
          }
          return o(g);
        case Yn:
          e: {
            for (E = v.key; m !== null; ) {
              if (m.key === E)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  r(g, m.sibling),
                    (m = s(m, v.children || [])),
                    (m.return = g),
                    (g = m);
                  break e;
                } else {
                  r(g, m);
                  break;
                }
              else t(g, m);
              m = m.sibling;
            }
            (m = Dl(v, g.mode, _)), (m.return = g), (g = m);
          }
          return o(g);
        case Tr:
          return (E = v._init), w(g, m, E(v._payload), _);
      }
      if (ri(v)) return y(g, m, v, _);
      if (Hs(v)) return p(g, m, v, _);
      wo(g, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        m !== null && m.tag === 6
          ? (r(g, m.sibling), (m = s(m, v)), (m.return = g), (g = m))
          : (r(g, m), (m = Ll(v, g.mode, _)), (m.return = g), (g = m)),
        o(g))
      : r(g, m);
  }
  return w;
}
var As = Om(!0),
  Am = Om(!1),
  aa = tn(null),
  la = null,
  os = null,
  Wc = null;
function Hc() {
  Wc = os = la = null;
}
function qc(e) {
  var t = aa.current;
  ue(aa), (e._currentValue = t);
}
function Ou(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function ps(e, t) {
  (la = e),
    (Wc = os = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Qe = !0), (e.firstContext = null));
}
function wt(e) {
  var t = e._currentValue;
  if (Wc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), os === null)) {
      if (la === null) throw Error(O(308));
      (os = e), (la.dependencies = { lanes: 0, firstContext: e });
    } else os = os.next = e;
  return t;
}
var mn = null;
function Kc(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
function Nm(e, t, r, n) {
  var s = t.interleaved;
  return (
    s === null ? ((r.next = r), Kc(t)) : ((r.next = s.next), (s.next = r)),
    (t.interleaved = r),
    cr(e, n)
  );
}
function cr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Cr = !1;
function Gc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function jm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ar(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Wr(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), ee & 2)) {
    var s = n.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (n.pending = t),
      cr(e, r)
    );
  }
  return (
    (s = n.interleaved),
    s === null ? ((t.next = t), Kc(n)) : ((t.next = s.next), (s.next = t)),
    (n.interleaved = t),
    cr(e, r)
  );
}
function Mo(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), jc(e, r);
  }
}
function Ph(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var s = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var o = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (s = i = o) : (i = i.next = o), (r = r.next);
      } while (r !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function ua(e, t, r, n) {
  var s = e.updateQueue;
  Cr = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (i = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var h = s.baseState;
    (o = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        d = a.eventTime;
      if ((n & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: d,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            p = a;
          switch (((f = t), (d = r), p.tag)) {
            case 1:
              if (((y = p.payload), typeof y == "function")) {
                h = y.call(d, h, f);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = p.payload),
                (f = typeof y == "function" ? y.call(d, h, f) : y),
                f == null)
              )
                break e;
              h = me({}, h, f);
              break e;
            case 2:
              Cr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = s.effects),
          f === null ? (s.effects = [a]) : f.push(a));
      } else
        (d = {
          eventTime: d,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = d), (l = h)) : (c = c.next = d),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (s.lastBaseUpdate = f),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = h),
      (s.baseState = l),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = c),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (o |= s.lane), (s = s.next);
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    (Pn |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function Oh(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        s = n.callback;
      if (s !== null) {
        if (((n.callback = null), (n = r), typeof s != "function"))
          throw Error(O(191, s));
        s.call(n);
      }
    }
}
var Yi = {},
  Qt = tn(Yi),
  Pi = tn(Yi),
  Oi = tn(Yi);
function gn(e) {
  if (e === Yi) throw Error(O(174));
  return e;
}
function Qc(e, t) {
  switch ((oe(Oi, t), oe(Pi, e), oe(Qt, Yi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cu(t, e));
  }
  ue(Qt), oe(Qt, t);
}
function Ns() {
  ue(Qt), ue(Pi), ue(Oi);
}
function Im(e) {
  gn(Oi.current);
  var t = gn(Qt.current),
    r = cu(t, e.type);
  t !== r && (oe(Pi, e), oe(Qt, r));
}
function Jc(e) {
  Pi.current === e && (ue(Qt), ue(Pi));
}
var fe = tn(0);
function ca(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ol = [];
function Yc() {
  for (var e = 0; e < Ol.length; e++)
    Ol[e]._workInProgressVersionPrimary = null;
  Ol.length = 0;
}
var Uo = pr.ReactCurrentDispatcher,
  Al = pr.ReactCurrentBatchConfig,
  Rn = 0,
  pe = null,
  Ee = null,
  Ce = null,
  da = !1,
  di = !1,
  Ai = 0,
  Ow = 0;
function Le() {
  throw Error(O(321));
}
function Xc(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Dt(e[r], t[r])) return !1;
  return !0;
}
function Zc(e, t, r, n, s, i) {
  if (
    ((Rn = i),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Uo.current = e === null || e.memoizedState === null ? Iw : $w),
    (e = r(n, s)),
    di)
  ) {
    i = 0;
    do {
      if (((di = !1), (Ai = 0), 25 <= i)) throw Error(O(301));
      (i += 1),
        (Ce = Ee = null),
        (t.updateQueue = null),
        (Uo.current = Lw),
        (e = r(n, s));
    } while (di);
  }
  if (
    ((Uo.current = ha),
    (t = Ee !== null && Ee.next !== null),
    (Rn = 0),
    (Ce = Ee = pe = null),
    (da = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function ed() {
  var e = Ai !== 0;
  return (Ai = 0), e;
}
function Bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ce === null ? (pe.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce;
}
function xt() {
  if (Ee === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = Ce === null ? pe.memoizedState : Ce.next;
  if (t !== null) (Ce = t), (Ee = e);
  else {
    if (e === null) throw Error(O(310));
    (Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      Ce === null ? (pe.memoizedState = Ce = e) : (Ce = Ce.next = e);
  }
  return Ce;
}
function Ni(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Nl(e) {
  var t = xt(),
    r = t.queue;
  if (r === null) throw Error(O(311));
  r.lastRenderedReducer = e;
  var n = Ee,
    s = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      (s.next = i.next), (i.next = o);
    }
    (n.baseQueue = s = i), (r.pending = null);
  }
  if (s !== null) {
    (i = s.next), (n = n.baseState);
    var a = (o = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Rn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = h), (o = n)) : (l = l.next = h),
          (pe.lanes |= c),
          (Pn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (o = n) : (l.next = a),
      Dt(n, t.memoizedState) || (Qe = !0),
      (t.memoizedState = n),
      (t.baseState = o),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    s = e;
    do (i = s.lane), (pe.lanes |= i), (Pn |= i), (s = s.next);
    while (s !== e);
  } else s === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function jl(e) {
  var t = xt(),
    r = t.queue;
  if (r === null) throw Error(O(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    s = r.pending,
    i = t.memoizedState;
  if (s !== null) {
    r.pending = null;
    var o = (s = s.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== s);
    Dt(i, t.memoizedState) || (Qe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function $m() {}
function Lm(e, t) {
  var r = pe,
    n = xt(),
    s = t(),
    i = !Dt(n.memoizedState, s);
  if (
    (i && ((n.memoizedState = s), (Qe = !0)),
    (n = n.queue),
    td(Um.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (Ce !== null && Ce.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      ji(9, Mm.bind(null, r, n, s, t), void 0, null),
      Re === null)
    )
      throw Error(O(349));
    Rn & 30 || Dm(r, t, s);
  }
  return s;
}
function Dm(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Mm(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), Fm(t) && zm(e);
}
function Um(e, t, r) {
  return r(function () {
    Fm(t) && zm(e);
  });
}
function Fm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Dt(e, r);
  } catch {
    return !0;
  }
}
function zm(e) {
  var t = cr(e, 1);
  t !== null && Lt(t, e, 1, -1);
}
function Ah(e) {
  var t = Bt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ni,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = jw.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function ji(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Bm() {
  return xt().memoizedState;
}
function Fo(e, t, r, n) {
  var s = Bt();
  (pe.flags |= e),
    (s.memoizedState = ji(1 | t, r, void 0, n === void 0 ? null : n));
}
function $a(e, t, r, n) {
  var s = xt();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (Ee !== null) {
    var o = Ee.memoizedState;
    if (((i = o.destroy), n !== null && Xc(n, o.deps))) {
      s.memoizedState = ji(t, r, i, n);
      return;
    }
  }
  (pe.flags |= e), (s.memoizedState = ji(1 | t, r, i, n));
}
function Nh(e, t) {
  return Fo(8390656, 8, e, t);
}
function td(e, t) {
  return $a(2048, 8, e, t);
}
function Vm(e, t) {
  return $a(4, 2, e, t);
}
function Wm(e, t) {
  return $a(4, 4, e, t);
}
function Hm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function qm(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), $a(4, 4, Hm.bind(null, t, e), r)
  );
}
function rd() {}
function Km(e, t) {
  var r = xt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Xc(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Gm(e, t) {
  var r = xt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Xc(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Qm(e, t, r) {
  return Rn & 21
    ? (Dt(r, t) || ((r = em()), (pe.lanes |= r), (Pn |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = r));
}
function Aw(e, t) {
  var r = ne;
  (ne = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = Al.transition;
  Al.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = r), (Al.transition = n);
  }
}
function Jm() {
  return xt().memoizedState;
}
function Nw(e, t, r) {
  var n = qr(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ym(e))
  )
    Xm(t, r);
  else if (((r = Nm(e, t, r, n)), r !== null)) {
    var s = We();
    Lt(r, e, n, s), Zm(r, t, n);
  }
}
function jw(e, t, r) {
  var n = qr(e),
    s = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Ym(e)) Xm(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, r);
        if (((s.hasEagerState = !0), (s.eagerState = a), Dt(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((s.next = s), Kc(t))
            : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (r = Nm(e, t, s, n)),
      r !== null && ((s = We()), Lt(r, e, n, s), Zm(r, t, n));
  }
}
function Ym(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function Xm(e, t) {
  di = da = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function Zm(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), jc(e, r);
  }
}
var ha = {
    readContext: wt,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  Iw = {
    readContext: wt,
    useCallback: function (e, t) {
      return (Bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: wt,
    useEffect: Nh,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        Fo(4194308, 4, Hm.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Bt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = Bt();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Nw.bind(null, pe, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ah,
    useDebugValue: rd,
    useDeferredValue: function (e) {
      return (Bt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ah(!1),
        t = e[0];
      return (e = Aw.bind(null, e[1])), (Bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = pe,
        s = Bt();
      if (de) {
        if (r === void 0) throw Error(O(407));
        r = r();
      } else {
        if (((r = t()), Re === null)) throw Error(O(349));
        Rn & 30 || Dm(n, t, r);
      }
      s.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (s.queue = i),
        Nh(Um.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        ji(9, Mm.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Bt(),
        t = Re.identifierPrefix;
      if (de) {
        var r = or,
          n = ir;
        (r = (n & ~(1 << (32 - $t(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Ai++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = Ow++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  $w = {
    readContext: wt,
    useCallback: Km,
    useContext: wt,
    useEffect: td,
    useImperativeHandle: qm,
    useInsertionEffect: Vm,
    useLayoutEffect: Wm,
    useMemo: Gm,
    useReducer: Nl,
    useRef: Bm,
    useState: function () {
      return Nl(Ni);
    },
    useDebugValue: rd,
    useDeferredValue: function (e) {
      var t = xt();
      return Qm(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Nl(Ni)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: $m,
    useSyncExternalStore: Lm,
    useId: Jm,
    unstable_isNewReconciler: !1,
  },
  Lw = {
    readContext: wt,
    useCallback: Km,
    useContext: wt,
    useEffect: td,
    useImperativeHandle: qm,
    useInsertionEffect: Vm,
    useLayoutEffect: Wm,
    useMemo: Gm,
    useReducer: jl,
    useRef: Bm,
    useState: function () {
      return jl(Ni);
    },
    useDebugValue: rd,
    useDeferredValue: function (e) {
      var t = xt();
      return Ee === null ? (t.memoizedState = e) : Qm(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = jl(Ni)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: $m,
    useSyncExternalStore: Lm,
    useId: Jm,
    unstable_isNewReconciler: !1,
  };
function Ct(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function Au(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : me({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var La = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = We(),
      s = qr(e),
      i = ar(n, s);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = Wr(e, i, s)),
      t !== null && (Lt(t, e, s, n), Mo(t, e, s));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = We(),
      s = qr(e),
      i = ar(n, s);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = Wr(e, i, s)),
      t !== null && (Lt(t, e, s, n), Mo(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = We(),
      n = qr(e),
      s = ar(r, n);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = Wr(e, s, n)),
      t !== null && (Lt(t, e, n, r), Mo(t, e, n));
  },
};
function jh(e, t, r, n, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ki(r, n) || !ki(s, i)
      : !0
  );
}
function eg(e, t, r) {
  var n = !1,
    s = Qr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = wt(i))
      : ((s = Ye(t) ? Tn : Fe.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? Ps(e, s) : Qr)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = La),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ih(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && La.enqueueReplaceState(t, t.state, null);
}
function Nu(e, t, r, n) {
  var s = e.stateNode;
  (s.props = r), (s.state = e.memoizedState), (s.refs = {}), Gc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (s.context = wt(i))
    : ((i = Ye(t) ? Tn : Fe.current), (s.context = Ps(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Au(e, t, i, r), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && La.enqueueReplaceState(s, s.state, null),
      ua(e, r, s, n),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function js(e, t) {
  try {
    var r = "",
      n = t;
    do (r += c0(n)), (n = n.return);
    while (n);
    var s = r;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Il(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function ju(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Dw = typeof WeakMap == "function" ? WeakMap : Map;
function tg(e, t, r) {
  (r = ar(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      pa || ((pa = !0), (Vu = n)), ju(e, t);
    }),
    r
  );
}
function rg(e, t, r) {
  (r = ar(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var s = t.value;
    (r.payload = function () {
      return n(s);
    }),
      (r.callback = function () {
        ju(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        ju(e, t),
          typeof n != "function" &&
            (Hr === null ? (Hr = new Set([this])) : Hr.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    r
  );
}
function $h(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Dw();
    var s = new Set();
    n.set(t, s);
  } else (s = n.get(t)), s === void 0 && ((s = new Set()), n.set(t, s));
  s.has(r) || (s.add(r), (e = Yw.bind(null, e, t, r)), t.then(e, e));
}
function Lh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Dh(e, t, r, n, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = ar(-1, 1)), (t.tag = 2), Wr(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var Mw = pr.ReactCurrentOwner,
  Qe = !1;
function Be(e, t, r, n) {
  t.child = e === null ? Am(t, null, r, n) : As(t, e.child, r, n);
}
function Mh(e, t, r, n, s) {
  r = r.render;
  var i = t.ref;
  return (
    ps(t, s),
    (n = Zc(e, t, r, n, i, s)),
    (r = ed()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        dr(e, t, s))
      : (de && r && zc(t), (t.flags |= 1), Be(e, t, n, s), t.child)
  );
}
function Uh(e, t, r, n, s) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !cd(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ng(e, t, i, n, s))
      : ((e = Wo(r.type, null, n, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : ki), r(o, n) && e.ref === t.ref)
    )
      return dr(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Kr(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ng(e, t, r, n, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ki(i, n) && e.ref === t.ref)
      if (((Qe = !1), (t.pendingProps = n = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (Qe = !0);
      else return (t.lanes = e.lanes), dr(e, t, s);
  }
  return Iu(e, t, r, n, s);
}
function sg(e, t, r) {
  var n = t.pendingProps,
    s = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(ls, nt),
        (nt |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(ls, nt),
          (nt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        oe(ls, nt),
        (nt |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      oe(ls, nt),
      (nt |= n);
  return Be(e, t, s, r), t.child;
}
function ig(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Iu(e, t, r, n, s) {
  var i = Ye(r) ? Tn : Fe.current;
  return (
    (i = Ps(t, i)),
    ps(t, s),
    (r = Zc(e, t, r, n, i, s)),
    (n = ed()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        dr(e, t, s))
      : (de && n && zc(t), (t.flags |= 1), Be(e, t, r, s), t.child)
  );
}
function Fh(e, t, r, n, s) {
  if (Ye(r)) {
    var i = !0;
    sa(t);
  } else i = !1;
  if ((ps(t, s), t.stateNode === null))
    zo(e, t), eg(t, r, n), Nu(t, r, n, s), (n = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = wt(u))
      : ((u = Ye(r) ? Tn : Fe.current), (u = Ps(t, u)));
    var c = r.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== n || l !== u) && Ih(t, o, n, u)),
      (Cr = !1);
    var f = t.memoizedState;
    (o.state = f),
      ua(t, n, o, s),
      (l = t.memoizedState),
      a !== n || f !== l || Je.current || Cr
        ? (typeof c == "function" && (Au(t, r, c, n), (l = t.memoizedState)),
          (a = Cr || jh(t, r, a, n, f, l, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (o.props = n),
          (o.state = l),
          (o.context = u),
          (n = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (o = t.stateNode),
      jm(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ct(t.type, a)),
      (o.props = u),
      (h = t.pendingProps),
      (f = o.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = wt(l))
        : ((l = Ye(r) ? Tn : Fe.current), (l = Ps(t, l)));
    var d = r.getDerivedStateFromProps;
    (c =
      typeof d == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== h || f !== l) && Ih(t, o, n, l)),
      (Cr = !1),
      (f = t.memoizedState),
      (o.state = f),
      ua(t, n, o, s);
    var y = t.memoizedState;
    a !== h || f !== y || Je.current || Cr
      ? (typeof d == "function" && (Au(t, r, d, n), (y = t.memoizedState)),
        (u = Cr || jh(t, r, u, n, f, y, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(n, y, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(n, y, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = y)),
        (o.props = n),
        (o.state = y),
        (o.context = l),
        (n = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return $u(e, t, r, n, i, s);
}
function $u(e, t, r, n, s, i) {
  ig(e, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return s && kh(t, r, !1), dr(e, t, i);
  (n = t.stateNode), (Mw.current = t);
  var a =
    o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = As(t, e.child, null, i)), (t.child = As(t, null, a, i)))
      : Be(e, t, a, i),
    (t.memoizedState = n.state),
    s && kh(t, r, !0),
    t.child
  );
}
function og(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Eh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Eh(e, t.context, !1),
    Qc(e, t.containerInfo);
}
function zh(e, t, r, n, s) {
  return Os(), Vc(s), (t.flags |= 256), Be(e, t, r, n), t.child;
}
var Lu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Du(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ag(e, t, r) {
  var n = t.pendingProps,
    s = fe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    oe(fe, s & 1),
    e === null)
  )
    return (
      Pu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Ua(o, n, 0, null)),
              (e = kn(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Du(r)),
              (t.memoizedState = Lu),
              e)
            : nd(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return Uw(e, t, o, n, a, s, r);
  if (i) {
    (i = n.fallback), (o = t.mode), (s = e.child), (a = s.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      !(o & 1) && t.child !== s
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = Kr(s, l)), (n.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = Kr(a, i)) : ((i = kn(i, o, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Du(r)
          : {
              baseLanes: o.baseLanes | r,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = Lu),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = Kr(i, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function nd(e, t) {
  return (
    (t = Ua({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function xo(e, t, r, n) {
  return (
    n !== null && Vc(n),
    As(t, e.child, null, r),
    (e = nd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Uw(e, t, r, n, s, i, o) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Il(Error(O(422)))), xo(e, t, o, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (s = t.mode),
        (n = Ua({ mode: "visible", children: n.children }, s, 0, null)),
        (i = kn(i, s, o, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && As(t, e.child, null, o),
        (t.child.memoizedState = Du(o)),
        (t.memoizedState = Lu),
        i);
  if (!(t.mode & 1)) return xo(e, t, o, null);
  if (s.data === "$!") {
    if (((n = s.nextSibling && s.nextSibling.dataset), n)) var a = n.dgst;
    return (n = a), (i = Error(O(419))), (n = Il(i, n, void 0)), xo(e, t, o, n);
  }
  if (((a = (o & e.childLanes) !== 0), Qe || a)) {
    if (((n = Re), n !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (n.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), cr(e, s), Lt(n, e, s, -1));
    }
    return ud(), (n = Il(Error(O(421)))), xo(e, t, o, n);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Xw.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (at = Vr(s.nextSibling)),
      (lt = t),
      (de = !0),
      (It = null),
      e !== null &&
        ((mt[gt++] = ir),
        (mt[gt++] = or),
        (mt[gt++] = Cn),
        (ir = e.id),
        (or = e.overflow),
        (Cn = t)),
      (t = nd(t, n.children)),
      (t.flags |= 4096),
      t);
}
function Bh(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Ou(e.return, t, r);
}
function $l(e, t, r, n, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = s));
}
function lg(e, t, r) {
  var n = t.pendingProps,
    s = n.revealOrder,
    i = n.tail;
  if ((Be(e, t, n.children, r), (n = fe.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bh(e, r, t);
        else if (e.tag === 19) Bh(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((oe(fe, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (r = t.child, s = null; r !== null; )
          (e = r.alternate),
            e !== null && ca(e) === null && (s = r),
            (r = r.sibling);
        (r = s),
          r === null
            ? ((s = t.child), (t.child = null))
            : ((s = r.sibling), (r.sibling = null)),
          $l(t, !1, s, r, i);
        break;
      case "backwards":
        for (r = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && ca(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = r), (r = s), (s = e);
        }
        $l(t, !0, r, null, i);
        break;
      case "together":
        $l(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function dr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Pn |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, r = Kr(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = Kr(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function Fw(e, t, r) {
  switch (t.tag) {
    case 3:
      og(t), Os();
      break;
    case 5:
      Im(t);
      break;
    case 1:
      Ye(t.type) && sa(t);
      break;
    case 4:
      Qc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        s = t.memoizedProps.value;
      oe(aa, n._currentValue), (n._currentValue = s);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (oe(fe, fe.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? ag(e, t, r)
          : (oe(fe, fe.current & 1),
            (e = dr(e, t, r)),
            e !== null ? e.sibling : null);
      oe(fe, fe.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return lg(e, t, r);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        oe(fe, fe.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), sg(e, t, r);
  }
  return dr(e, t, r);
}
var ug, Mu, cg, dg;
ug = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Mu = function () {};
cg = function (e, t, r, n) {
  var s = e.memoizedProps;
  if (s !== n) {
    (e = t.stateNode), gn(Qt.current);
    var i = null;
    switch (r) {
      case "input":
        (s = ou(e, s)), (n = ou(e, n)), (i = []);
        break;
      case "select":
        (s = me({}, s, { value: void 0 })),
          (n = me({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (s = uu(e, s)), (n = uu(e, n)), (i = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = ra);
    }
    du(r, n);
    var o;
    r = null;
    for (u in s)
      if (!n.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var a = s[u];
          for (o in a) a.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (yi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (
        ((a = s != null ? s[u] : void 0),
        n.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (r || (r = {}), (r[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (r || (r = {}), (r[o] = l[o]));
          } else r || (i || (i = []), i.push(u, r)), (r = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (yi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && le("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
dg = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Ys(e, t) {
  if (!de)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function De(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (r |= s.lanes | s.childLanes),
        (n |= s.subtreeFlags & 14680064),
        (n |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (r |= s.lanes | s.childLanes),
        (n |= s.subtreeFlags),
        (n |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function zw(e, t, r) {
  var n = t.pendingProps;
  switch ((Bc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return De(t), null;
    case 1:
      return Ye(t.type) && na(), De(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Ns(),
        ue(Je),
        ue(Fe),
        Yc(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (yo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), It !== null && (qu(It), (It = null)))),
        Mu(e, t),
        De(t),
        null
      );
    case 5:
      Jc(t);
      var s = gn(Oi.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        cg(e, t, r, n, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(O(166));
          return De(t), null;
        }
        if (((e = gn(Qt.current)), yo(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[qt] = t), (n[Ri] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              le("cancel", n), le("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", n);
              break;
            case "video":
            case "audio":
              for (s = 0; s < si.length; s++) le(si[s], n);
              break;
            case "source":
              le("error", n);
              break;
            case "img":
            case "image":
            case "link":
              le("error", n), le("load", n);
              break;
            case "details":
              le("toggle", n);
              break;
            case "input":
              Yd(n, i), le("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                le("invalid", n);
              break;
            case "textarea":
              Zd(n, i), le("invalid", n);
          }
          du(r, i), (s = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? n.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      vo(n.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    n.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      vo(n.textContent, a, e),
                    (s = ["children", "" + a]))
                : yi.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  le("scroll", n);
            }
          switch (r) {
            case "input":
              lo(n), Xd(n, i, !0);
              break;
            case "textarea":
              lo(n), eh(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = ra);
          }
          (n = s), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Up(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = o.createElement(r, { is: n.is }))
                : ((e = o.createElement(r)),
                  r === "select" &&
                    ((o = e),
                    n.multiple
                      ? (o.multiple = !0)
                      : n.size && (o.size = n.size)))
              : (e = o.createElementNS(e, r)),
            (e[qt] = t),
            (e[Ri] = n),
            ug(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = hu(r, n)), r)) {
              case "dialog":
                le("cancel", e), le("close", e), (s = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), (s = n);
                break;
              case "video":
              case "audio":
                for (s = 0; s < si.length; s++) le(si[s], e);
                s = n;
                break;
              case "source":
                le("error", e), (s = n);
                break;
              case "img":
              case "image":
              case "link":
                le("error", e), le("load", e), (s = n);
                break;
              case "details":
                le("toggle", e), (s = n);
                break;
              case "input":
                Yd(e, n), (s = ou(e, n)), le("invalid", e);
                break;
              case "option":
                s = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (s = me({}, n, { value: void 0 })),
                  le("invalid", e);
                break;
              case "textarea":
                Zd(e, n), (s = uu(e, n)), le("invalid", e);
                break;
              default:
                s = n;
            }
            du(r, s), (a = s);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Bp(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Fp(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (r !== "textarea" || l !== "") && wi(e, l)
                    : typeof l == "number" && wi(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (yi.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && le("scroll", e)
                      : l != null && Cc(e, i, l, o));
              }
            switch (r) {
              case "input":
                lo(e), Xd(e, n, !1);
                break;
              case "textarea":
                lo(e), eh(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Gr(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? cs(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      cs(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = ra);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return De(t), null;
    case 6:
      if (e && t.stateNode != null) dg(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(O(166));
        if (((r = gn(Oi.current)), gn(Qt.current), yo(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[qt] = t),
            (i = n.nodeValue !== r) && ((e = lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                vo(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vo(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[qt] = t),
            (t.stateNode = n);
      }
      return De(t), null;
    case 13:
      if (
        (ue(fe),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && at !== null && t.mode & 1 && !(t.flags & 128))
          Pm(), Os(), (t.flags |= 98560), (i = !1);
        else if (((i = yo(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(O(317));
            i[qt] = t;
          } else
            Os(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          De(t), (i = !1);
        } else It !== null && (qu(It), (It = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? Te === 0 && (Te = 3) : ud())),
          t.updateQueue !== null && (t.flags |= 4),
          De(t),
          null);
    case 4:
      return (
        Ns(), Mu(e, t), e === null && Ti(t.stateNode.containerInfo), De(t), null
      );
    case 10:
      return qc(t.type._context), De(t), null;
    case 17:
      return Ye(t.type) && na(), De(t), null;
    case 19:
      if ((ue(fe), (i = t.memoizedState), i === null)) return De(t), null;
      if (((n = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (n) Ys(i, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ca(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ys(i, !1),
                    n = o.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return oe(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            we() > Is &&
            ((t.flags |= 128), (n = !0), Ys(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = ca(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Ys(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !de)
            )
              return De(t), null;
          } else
            2 * we() - i.renderingStartTime > Is &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Ys(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((r = i.last),
            r !== null ? (r.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = we()),
          (t.sibling = null),
          (r = fe.current),
          oe(fe, n ? (r & 1) | 2 : r & 1),
          t)
        : (De(t), null);
    case 22:
    case 23:
      return (
        ld(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? nt & 1073741824 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : De(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function Bw(e, t) {
  switch ((Bc(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && na(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ns(),
        ue(Je),
        ue(Fe),
        Yc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Jc(t), null;
    case 13:
      if (
        (ue(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        Os();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(fe), null;
    case 4:
      return Ns(), null;
    case 10:
      return qc(t.type._context), null;
    case 22:
    case 23:
      return ld(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _o = !1,
  Ue = !1,
  Vw = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function as(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        ye(e, t, n);
      }
    else r.current = null;
}
function Uu(e, t, r) {
  try {
    r();
  } catch (n) {
    ye(e, t, n);
  }
}
var Vh = !1;
function Ww(e, t) {
  if (((bu = Zo), (e = gm()), Fc(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var s = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            h = e,
            f = null;
          t: for (;;) {
            for (
              var d;
              h !== r || (s !== 0 && h.nodeType !== 3) || (a = o + s),
                h !== i || (n !== 0 && h.nodeType !== 3) || (l = o + n),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (d = h.firstChild) !== null;

            )
              (f = h), (h = d);
            for (;;) {
              if (h === e) break t;
              if (
                (f === r && ++u === s && (a = o),
                f === i && ++c === n && (l = o),
                (d = h.nextSibling) !== null)
              )
                break;
              (h = f), (f = h.parentNode);
            }
            h = d;
          }
          r = a === -1 || l === -1 ? null : { start: a, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Su = { focusedElem: e, selectionRange: r }, Zo = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var p = y.memoizedProps,
                    w = y.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? p : Ct(t.type, p),
                      w
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (_) {
          ye(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (y = Vh), (Vh = !1), y;
}
function hi(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var s = (n = n.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        (s.destroy = void 0), i !== void 0 && Uu(t, r, i);
      }
      s = s.next;
    } while (s !== n);
  }
}
function Da(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Fu(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function hg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), hg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qt], delete t[Ri], delete t[Tu], delete t[Tw], delete t[Cw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function fg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || fg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function zu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = ra));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (zu(e, t, r), e = e.sibling; e !== null; ) zu(e, t, r), (e = e.sibling);
}
function Bu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Bu(e, t, r), e = e.sibling; e !== null; ) Bu(e, t, r), (e = e.sibling);
}
var Ae = null,
  Nt = !1;
function br(e, t, r) {
  for (r = r.child; r !== null; ) pg(e, t, r), (r = r.sibling);
}
function pg(e, t, r) {
  if (Gt && typeof Gt.onCommitFiberUnmount == "function")
    try {
      Gt.onCommitFiberUnmount(Pa, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Ue || as(r, t);
    case 6:
      var n = Ae,
        s = Nt;
      (Ae = null),
        br(e, t, r),
        (Ae = n),
        (Nt = s),
        Ae !== null &&
          (Nt
            ? ((e = Ae),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Ae.removeChild(r.stateNode));
      break;
    case 18:
      Ae !== null &&
        (Nt
          ? ((e = Ae),
            (r = r.stateNode),
            e.nodeType === 8
              ? Rl(e.parentNode, r)
              : e.nodeType === 1 && Rl(e, r),
            Si(e))
          : Rl(Ae, r.stateNode));
      break;
    case 4:
      (n = Ae),
        (s = Nt),
        (Ae = r.stateNode.containerInfo),
        (Nt = !0),
        br(e, t, r),
        (Ae = n),
        (Nt = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ue &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        s = n = n.next;
        do {
          var i = s,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Uu(r, t, o),
            (s = s.next);
        } while (s !== n);
      }
      br(e, t, r);
      break;
    case 1:
      if (
        !Ue &&
        (as(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (a) {
          ye(r, t, a);
        }
      br(e, t, r);
      break;
    case 21:
      br(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Ue = (n = Ue) || r.memoizedState !== null), br(e, t, r), (Ue = n))
        : br(e, t, r);
      break;
    default:
      br(e, t, r);
  }
}
function Hh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Vw()),
      t.forEach(function (n) {
        var s = Zw.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(s, s));
      });
  }
}
function Et(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var s = r[n];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ae = a.stateNode), (Nt = !1);
              break e;
            case 3:
              (Ae = a.stateNode.containerInfo), (Nt = !0);
              break e;
            case 4:
              (Ae = a.stateNode.containerInfo), (Nt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(O(160));
        pg(i, o, s), (Ae = null), (Nt = !1);
        var l = s.alternate;
        l !== null && (l.return = null), (s.return = null);
      } catch (u) {
        ye(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) mg(t, e), (t = t.sibling);
}
function mg(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Et(t, e), zt(e), n & 4)) {
        try {
          hi(3, e, e.return), Da(3, e);
        } catch (p) {
          ye(e, e.return, p);
        }
        try {
          hi(5, e, e.return);
        } catch (p) {
          ye(e, e.return, p);
        }
      }
      break;
    case 1:
      Et(t, e), zt(e), n & 512 && r !== null && as(r, r.return);
      break;
    case 5:
      if (
        (Et(t, e),
        zt(e),
        n & 512 && r !== null && as(r, r.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          wi(s, "");
        } catch (p) {
          ye(e, e.return, p);
        }
      }
      if (n & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = r !== null ? r.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Dp(s, i),
              hu(a, o);
            var u = hu(a, i);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                h = l[o + 1];
              c === "style"
                ? Bp(s, h)
                : c === "dangerouslySetInnerHTML"
                ? Fp(s, h)
                : c === "children"
                ? wi(s, h)
                : Cc(s, c, h, u);
            }
            switch (a) {
              case "input":
                au(s, i);
                break;
              case "textarea":
                Mp(s, i);
                break;
              case "select":
                var f = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var d = i.value;
                d != null
                  ? cs(s, !!i.multiple, d, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? cs(s, !!i.multiple, i.defaultValue, !0)
                      : cs(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Ri] = i;
          } catch (p) {
            ye(e, e.return, p);
          }
      }
      break;
    case 6:
      if ((Et(t, e), zt(e), n & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (s = e.stateNode), (i = e.memoizedProps);
        try {
          s.nodeValue = i;
        } catch (p) {
          ye(e, e.return, p);
        }
      }
      break;
    case 3:
      if (
        (Et(t, e), zt(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Si(t.containerInfo);
        } catch (p) {
          ye(e, e.return, p);
        }
      break;
    case 4:
      Et(t, e), zt(e);
      break;
    case 13:
      Et(t, e),
        zt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (od = we())),
        n & 4 && Hh(e);
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Ue = (u = Ue) || c), Et(t, e), (Ue = u)) : Et(t, e),
        zt(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (h = L = c; L !== null; ) {
              switch (((f = L), (d = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hi(4, f, f.return);
                  break;
                case 1:
                  as(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (n = f), (r = f.return);
                    try {
                      (t = n),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (p) {
                      ye(n, r, p);
                    }
                  }
                  break;
                case 5:
                  as(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Kh(h);
                    continue;
                  }
              }
              d !== null ? ((d.return = f), (L = d)) : Kh(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (s = h.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = h.stateNode),
                      (l = h.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = zp("display", o)));
              } catch (p) {
                ye(e, e.return, p);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (p) {
                ye(e, e.return, p);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Et(t, e), zt(e), n & 4 && Hh(e);
      break;
    case 21:
      break;
    default:
      Et(t, e), zt(e);
  }
}
function zt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (fg(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(O(160));
      }
      switch (n.tag) {
        case 5:
          var s = n.stateNode;
          n.flags & 32 && (wi(s, ""), (n.flags &= -33));
          var i = Wh(e);
          Bu(e, i, s);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo,
            a = Wh(e);
          zu(e, a, o);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Hw(e, t, r) {
  (L = e), gg(e);
}
function gg(e, t, r) {
  for (var n = (e.mode & 1) !== 0; L !== null; ) {
    var s = L,
      i = s.child;
    if (s.tag === 22 && n) {
      var o = s.memoizedState !== null || _o;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || Ue;
        a = _o;
        var u = Ue;
        if (((_o = o), (Ue = l) && !u))
          for (L = s; L !== null; )
            (o = L),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Gh(s)
                : l !== null
                ? ((l.return = o), (L = l))
                : Gh(s);
        for (; i !== null; ) (L = i), gg(i), (i = i.sibling);
        (L = s), (_o = a), (Ue = u);
      }
      qh(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (L = i)) : qh(e);
  }
}
function qh(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || Da(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Ue)
                if (r === null) n.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Ct(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    s,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Oh(t, i, n);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Oh(t, o, r);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (r === null && t.flags & 4) {
                r = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && Si(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Ue || (t.flags & 512 && Fu(t));
      } catch (f) {
        ye(t, t.return, f);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (L = r);
      break;
    }
    L = t.return;
  }
}
function Kh(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (L = r);
      break;
    }
    L = t.return;
  }
}
function Gh(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Da(4, t);
          } catch (l) {
            ye(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var s = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              ye(t, s, l);
            }
          }
          var i = t.return;
          try {
            Fu(t);
          } catch (l) {
            ye(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Fu(t);
          } catch (l) {
            ye(t, o, l);
          }
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (L = a);
      break;
    }
    L = t.return;
  }
}
var qw = Math.ceil,
  fa = pr.ReactCurrentDispatcher,
  sd = pr.ReactCurrentOwner,
  yt = pr.ReactCurrentBatchConfig,
  ee = 0,
  Re = null,
  be = null,
  Ne = 0,
  nt = 0,
  ls = tn(0),
  Te = 0,
  Ii = null,
  Pn = 0,
  Ma = 0,
  id = 0,
  fi = null,
  Ge = null,
  od = 0,
  Is = 1 / 0,
  tr = null,
  pa = !1,
  Vu = null,
  Hr = null,
  bo = !1,
  Mr = null,
  ma = 0,
  pi = 0,
  Wu = null,
  Bo = -1,
  Vo = 0;
function We() {
  return ee & 6 ? we() : Bo !== -1 ? Bo : (Bo = we());
}
function qr(e) {
  return e.mode & 1
    ? ee & 2 && Ne !== 0
      ? Ne & -Ne
      : Pw.transition !== null
      ? (Vo === 0 && (Vo = em()), Vo)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : am(e.type))),
        e)
    : 1;
}
function Lt(e, t, r, n) {
  if (50 < pi) throw ((pi = 0), (Wu = null), Error(O(185)));
  Gi(e, r, n),
    (!(ee & 2) || e !== Re) &&
      (e === Re && (!(ee & 2) && (Ma |= r), Te === 4 && Or(e, Ne)),
      Xe(e, n),
      r === 1 && ee === 0 && !(t.mode & 1) && ((Is = we() + 500), Ia && rn()));
}
function Xe(e, t) {
  var r = e.callbackNode;
  P0(e, t);
  var n = Xo(e, e === Re ? Ne : 0);
  if (n === 0)
    r !== null && nh(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && nh(r), t === 1))
      e.tag === 0 ? Rw(Qh.bind(null, e)) : Tm(Qh.bind(null, e)),
        Ew(function () {
          !(ee & 6) && rn();
        }),
        (r = null);
    else {
      switch (tm(n)) {
        case 1:
          r = Nc;
          break;
        case 4:
          r = Xp;
          break;
        case 16:
          r = Yo;
          break;
        case 536870912:
          r = Zp;
          break;
        default:
          r = Yo;
      }
      r = Eg(r, vg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function vg(e, t) {
  if (((Bo = -1), (Vo = 0), ee & 6)) throw Error(O(327));
  var r = e.callbackNode;
  if (ms() && e.callbackNode !== r) return null;
  var n = Xo(e, e === Re ? Ne : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = ga(e, n);
  else {
    t = n;
    var s = ee;
    ee |= 2;
    var i = wg();
    (Re !== e || Ne !== t) && ((tr = null), (Is = we() + 500), En(e, t));
    do
      try {
        Qw();
        break;
      } catch (a) {
        yg(e, a);
      }
    while (!0);
    Hc(),
      (fa.current = i),
      (ee = s),
      be !== null ? (t = 0) : ((Re = null), (Ne = 0), (t = Te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = vu(e)), s !== 0 && ((n = s), (t = Hu(e, s)))), t === 1)
    )
      throw ((r = Ii), En(e, 0), Or(e, n), Xe(e, we()), r);
    if (t === 6) Or(e, n);
    else {
      if (
        ((s = e.current.alternate),
        !(n & 30) &&
          !Kw(s) &&
          ((t = ga(e, n)),
          t === 2 && ((i = vu(e)), i !== 0 && ((n = i), (t = Hu(e, i)))),
          t === 1))
      )
        throw ((r = Ii), En(e, 0), Or(e, n), Xe(e, we()), r);
      switch (((e.finishedWork = s), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          cn(e, Ge, tr);
          break;
        case 3:
          if (
            (Or(e, n), (n & 130023424) === n && ((t = od + 500 - we()), 10 < t))
          ) {
            if (Xo(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & n) !== n)) {
              We(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = ku(cn.bind(null, e, Ge, tr), t);
            break;
          }
          cn(e, Ge, tr);
          break;
        case 4:
          if ((Or(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, s = -1; 0 < n; ) {
            var o = 31 - $t(n);
            (i = 1 << o), (o = t[o]), o > s && (s = o), (n &= ~i);
          }
          if (
            ((n = s),
            (n = we() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * qw(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = ku(cn.bind(null, e, Ge, tr), n);
            break;
          }
          cn(e, Ge, tr);
          break;
        case 5:
          cn(e, Ge, tr);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Xe(e, we()), e.callbackNode === r ? vg.bind(null, e) : null;
}
function Hu(e, t) {
  var r = fi;
  return (
    e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256),
    (e = ga(e, t)),
    e !== 2 && ((t = Ge), (Ge = r), t !== null && qu(t)),
    e
  );
}
function qu(e) {
  Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
}
function Kw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var s = r[n],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!Dt(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Or(e, t) {
  for (
    t &= ~id,
      t &= ~Ma,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - $t(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Qh(e) {
  if (ee & 6) throw Error(O(327));
  ms();
  var t = Xo(e, 0);
  if (!(t & 1)) return Xe(e, we()), null;
  var r = ga(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = vu(e);
    n !== 0 && ((t = n), (r = Hu(e, n)));
  }
  if (r === 1) throw ((r = Ii), En(e, 0), Or(e, t), Xe(e, we()), r);
  if (r === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    cn(e, Ge, tr),
    Xe(e, we()),
    null
  );
}
function ad(e, t) {
  var r = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = r), ee === 0 && ((Is = we() + 500), Ia && rn());
  }
}
function On(e) {
  Mr !== null && Mr.tag === 0 && !(ee & 6) && ms();
  var t = ee;
  ee |= 1;
  var r = yt.transition,
    n = ne;
  try {
    if (((yt.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = n), (yt.transition = r), (ee = t), !(ee & 6) && rn();
  }
}
function ld() {
  (nt = ls.current), ue(ls);
}
function En(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Sw(r)), be !== null))
    for (r = be.return; r !== null; ) {
      var n = r;
      switch ((Bc(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && na();
          break;
        case 3:
          Ns(), ue(Je), ue(Fe), Yc();
          break;
        case 5:
          Jc(n);
          break;
        case 4:
          Ns();
          break;
        case 13:
          ue(fe);
          break;
        case 19:
          ue(fe);
          break;
        case 10:
          qc(n.type._context);
          break;
        case 22:
        case 23:
          ld();
      }
      r = r.return;
    }
  if (
    ((Re = e),
    (be = e = Kr(e.current, null)),
    (Ne = nt = t),
    (Te = 0),
    (Ii = null),
    (id = Ma = Pn = 0),
    (Ge = fi = null),
    mn !== null)
  ) {
    for (t = 0; t < mn.length; t++)
      if (((r = mn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var s = n.next,
          i = r.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = s), (n.next = o);
        }
        r.pending = n;
      }
    mn = null;
  }
  return e;
}
function yg(e, t) {
  do {
    var r = be;
    try {
      if ((Hc(), (Uo.current = ha), da)) {
        for (var n = pe.memoizedState; n !== null; ) {
          var s = n.queue;
          s !== null && (s.pending = null), (n = n.next);
        }
        da = !1;
      }
      if (
        ((Rn = 0),
        (Ce = Ee = pe = null),
        (di = !1),
        (Ai = 0),
        (sd.current = null),
        r === null || r.return === null)
      ) {
        (Te = 1), (Ii = t), (be = null);
        break;
      }
      e: {
        var i = e,
          o = r.return,
          a = r,
          l = t;
        if (
          ((t = Ne),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var d = Lh(o);
          if (d !== null) {
            (d.flags &= -257),
              Dh(d, o, a, i, t),
              d.mode & 1 && $h(i, u, t),
              (t = d),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var p = new Set();
              p.add(l), (t.updateQueue = p);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              $h(i, u, t), ud();
              break e;
            }
            l = Error(O(426));
          }
        } else if (de && a.mode & 1) {
          var w = Lh(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Dh(w, o, a, i, t),
              Vc(js(l, a));
            break e;
          }
        }
        (i = l = js(l, a)),
          Te !== 4 && (Te = 2),
          fi === null ? (fi = [i]) : fi.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = tg(i, l, t);
              Ph(i, g);
              break e;
            case 1:
              a = l;
              var m = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Hr === null || !Hr.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var _ = rg(i, a, t);
                Ph(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      _g(r);
    } catch (S) {
      (t = S), be === r && r !== null && (be = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function wg() {
  var e = fa.current;
  return (fa.current = ha), e === null ? ha : e;
}
function ud() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    Re === null || (!(Pn & 268435455) && !(Ma & 268435455)) || Or(Re, Ne);
}
function ga(e, t) {
  var r = ee;
  ee |= 2;
  var n = wg();
  (Re !== e || Ne !== t) && ((tr = null), En(e, t));
  do
    try {
      Gw();
      break;
    } catch (s) {
      yg(e, s);
    }
  while (!0);
  if ((Hc(), (ee = r), (fa.current = n), be !== null)) throw Error(O(261));
  return (Re = null), (Ne = 0), Te;
}
function Gw() {
  for (; be !== null; ) xg(be);
}
function Qw() {
  for (; be !== null && !x0(); ) xg(be);
}
function xg(e) {
  var t = Sg(e.alternate, e, nt);
  (e.memoizedProps = e.pendingProps),
    t === null ? _g(e) : (be = t),
    (sd.current = null);
}
function _g(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = Bw(r, t)), r !== null)) {
        (r.flags &= 32767), (be = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Te = 6), (be = null);
        return;
      }
    } else if (((r = zw(r, t, nt)), r !== null)) {
      be = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function cn(e, t, r) {
  var n = ne,
    s = yt.transition;
  try {
    (yt.transition = null), (ne = 1), Jw(e, t, r, n);
  } finally {
    (yt.transition = s), (ne = n);
  }
  return null;
}
function Jw(e, t, r, n) {
  do ms();
  while (Mr !== null);
  if (ee & 6) throw Error(O(327));
  r = e.finishedWork;
  var s = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (O0(e, i),
    e === Re && ((be = Re = null), (Ne = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      bo ||
      ((bo = !0),
      Eg(Yo, function () {
        return ms(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = yt.transition), (yt.transition = null);
    var o = ne;
    ne = 1;
    var a = ee;
    (ee |= 4),
      (sd.current = null),
      Ww(e, r),
      mg(r, e),
      gw(Su),
      (Zo = !!bu),
      (Su = bu = null),
      (e.current = r),
      Hw(r),
      _0(),
      (ee = a),
      (ne = o),
      (yt.transition = i);
  } else e.current = r;
  if (
    (bo && ((bo = !1), (Mr = e), (ma = s)),
    (i = e.pendingLanes),
    i === 0 && (Hr = null),
    E0(r.stateNode),
    Xe(e, we()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (s = t[r]), n(s.value, { componentStack: s.stack, digest: s.digest });
  if (pa) throw ((pa = !1), (e = Vu), (Vu = null), e);
  return (
    ma & 1 && e.tag !== 0 && ms(),
    (i = e.pendingLanes),
    i & 1 ? (e === Wu ? pi++ : ((pi = 0), (Wu = e))) : (pi = 0),
    rn(),
    null
  );
}
function ms() {
  if (Mr !== null) {
    var e = tm(ma),
      t = yt.transition,
      r = ne;
    try {
      if (((yt.transition = null), (ne = 16 > e ? 16 : e), Mr === null))
        var n = !1;
      else {
        if (((e = Mr), (Mr = null), (ma = 0), ee & 6)) throw Error(O(331));
        var s = ee;
        for (ee |= 4, L = e.current; L !== null; ) {
          var i = L,
            o = i.child;
          if (L.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hi(8, c, i);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (L = h);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var f = c.sibling,
                        d = c.return;
                      if ((hg(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = d), (L = f);
                        break;
                      }
                      L = d;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var p = y.child;
                if (p !== null) {
                  y.child = null;
                  do {
                    var w = p.sibling;
                    (p.sibling = null), (p = w);
                  } while (p !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (L = o);
          else
            e: for (; L !== null; ) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hi(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (L = g);
                break e;
              }
              L = i.return;
            }
        }
        var m = e.current;
        for (L = m; L !== null; ) {
          o = L;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (L = v);
          else
            e: for (o = m; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Da(9, a);
                  }
                } catch (S) {
                  ye(a, a.return, S);
                }
              if (a === o) {
                L = null;
                break e;
              }
              var _ = a.sibling;
              if (_ !== null) {
                (_.return = a.return), (L = _);
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((ee = s), rn(), Gt && typeof Gt.onPostCommitFiberRoot == "function")
        )
          try {
            Gt.onPostCommitFiberRoot(Pa, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (ne = r), (yt.transition = t);
    }
  }
  return !1;
}
function Jh(e, t, r) {
  (t = js(r, t)),
    (t = tg(e, t, 1)),
    (e = Wr(e, t, 1)),
    (t = We()),
    e !== null && (Gi(e, 1, t), Xe(e, t));
}
function ye(e, t, r) {
  if (e.tag === 3) Jh(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Jh(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Hr === null || !Hr.has(n)))
        ) {
          (e = js(r, e)),
            (e = rg(t, e, 1)),
            (t = Wr(t, e, 1)),
            (e = We()),
            t !== null && (Gi(t, 1, e), Xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Yw(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Re === e &&
      (Ne & r) === r &&
      (Te === 4 || (Te === 3 && (Ne & 130023424) === Ne && 500 > we() - od)
        ? En(e, 0)
        : (id |= r)),
    Xe(e, t);
}
function bg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ho), (ho <<= 1), !(ho & 130023424) && (ho = 4194304))
      : (t = 1));
  var r = We();
  (e = cr(e, t)), e !== null && (Gi(e, t, r), Xe(e, r));
}
function Xw(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), bg(e, r);
}
function Zw(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        s = e.memoizedState;
      s !== null && (r = s.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  n !== null && n.delete(t), bg(e, r);
}
var Sg;
Sg = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Je.current) Qe = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (Qe = !1), Fw(e, t, r);
      Qe = !!(e.flags & 131072);
    }
  else (Qe = !1), de && t.flags & 1048576 && Cm(t, oa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      zo(e, t), (e = t.pendingProps);
      var s = Ps(t, Fe.current);
      ps(t, r), (s = Zc(null, t, n, e, s, r));
      var i = ed();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(n) ? ((i = !0), sa(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Gc(t),
            (s.updater = La),
            (t.stateNode = s),
            (s._reactInternals = t),
            Nu(t, n, e, r),
            (t = $u(null, t, n, !0, i, r)))
          : ((t.tag = 0), de && i && zc(t), Be(null, t, s, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (zo(e, t),
          (e = t.pendingProps),
          (s = n._init),
          (n = s(n._payload)),
          (t.type = n),
          (s = t.tag = tx(n)),
          (e = Ct(n, e)),
          s)
        ) {
          case 0:
            t = Iu(null, t, n, e, r);
            break e;
          case 1:
            t = Fh(null, t, n, e, r);
            break e;
          case 11:
            t = Mh(null, t, n, e, r);
            break e;
          case 14:
            t = Uh(null, t, n, Ct(n.type, e), r);
            break e;
        }
        throw Error(O(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (s = t.pendingProps),
        (s = t.elementType === n ? s : Ct(n, s)),
        Iu(e, t, n, s, r)
      );
    case 1:
      return (
        (n = t.type),
        (s = t.pendingProps),
        (s = t.elementType === n ? s : Ct(n, s)),
        Fh(e, t, n, s, r)
      );
    case 3:
      e: {
        if ((og(t), e === null)) throw Error(O(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          jm(e, t),
          ua(t, n, null, r);
        var o = t.memoizedState;
        if (((n = o.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (s = js(Error(O(423)), t)), (t = zh(e, t, n, r, s));
            break e;
          } else if (n !== s) {
            (s = js(Error(O(424)), t)), (t = zh(e, t, n, r, s));
            break e;
          } else
            for (
              at = Vr(t.stateNode.containerInfo.firstChild),
                lt = t,
                de = !0,
                It = null,
                r = Am(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Os(), n === s)) {
            t = dr(e, t, r);
            break e;
          }
          Be(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Im(t),
        e === null && Pu(t),
        (n = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        Eu(n, s) ? (o = null) : i !== null && Eu(n, i) && (t.flags |= 32),
        ig(e, t),
        Be(e, t, o, r),
        t.child
      );
    case 6:
      return e === null && Pu(t), null;
    case 13:
      return ag(e, t, r);
    case 4:
      return (
        Qc(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = As(t, null, n, r)) : Be(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (s = t.pendingProps),
        (s = t.elementType === n ? s : Ct(n, s)),
        Mh(e, t, n, s, r)
      );
    case 7:
      return Be(e, t, t.pendingProps, r), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          oe(aa, n._currentValue),
          (n._currentValue = o),
          i !== null)
        )
          if (Dt(i.value, o)) {
            if (i.children === s.children && !Je.current) {
              t = dr(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      (l = ar(-1, r & -r)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= r),
                      (l = i.alternate),
                      l !== null && (l.lanes |= r),
                      Ou(i.return, r, t),
                      (a.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(O(341));
                (o.lanes |= r),
                  (a = o.alternate),
                  a !== null && (a.lanes |= r),
                  Ou(o, r, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Be(e, t, s.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (n = t.pendingProps.children),
        ps(t, r),
        (s = wt(s)),
        (n = n(s)),
        (t.flags |= 1),
        Be(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (s = Ct(n, t.pendingProps)),
        (s = Ct(n.type, s)),
        Uh(e, t, n, s, r)
      );
    case 15:
      return ng(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (s = t.pendingProps),
        (s = t.elementType === n ? s : Ct(n, s)),
        zo(e, t),
        (t.tag = 1),
        Ye(n) ? ((e = !0), sa(t)) : (e = !1),
        ps(t, r),
        eg(t, n, s),
        Nu(t, n, s, r),
        $u(null, t, n, !0, e, r)
      );
    case 19:
      return lg(e, t, r);
    case 22:
      return sg(e, t, r);
  }
  throw Error(O(156, t.tag));
};
function Eg(e, t) {
  return Yp(e, t);
}
function ex(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function vt(e, t, r, n) {
  return new ex(e, t, r, n);
}
function cd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function tx(e) {
  if (typeof e == "function") return cd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pc)) return 11;
    if (e === Oc) return 14;
  }
  return 2;
}
function Kr(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = vt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Wo(e, t, r, n, s, i) {
  var o = 2;
  if (((n = e), typeof e == "function")) cd(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Xn:
        return kn(r.children, s, i, t);
      case Rc:
        (o = 8), (s |= 8);
        break;
      case ru:
        return (
          (e = vt(12, r, t, s | 2)), (e.elementType = ru), (e.lanes = i), e
        );
      case nu:
        return (e = vt(13, r, t, s)), (e.elementType = nu), (e.lanes = i), e;
      case su:
        return (e = vt(19, r, t, s)), (e.elementType = su), (e.lanes = i), e;
      case Ip:
        return Ua(r, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Np:
              o = 10;
              break e;
            case jp:
              o = 9;
              break e;
            case Pc:
              o = 11;
              break e;
            case Oc:
              o = 14;
              break e;
            case Tr:
              (o = 16), (n = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = vt(o, r, t, s)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function kn(e, t, r, n) {
  return (e = vt(7, e, n, t)), (e.lanes = r), e;
}
function Ua(e, t, r, n) {
  return (
    (e = vt(22, e, n, t)),
    (e.elementType = Ip),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ll(e, t, r) {
  return (e = vt(6, e, null, t)), (e.lanes = r), e;
}
function Dl(e, t, r) {
  return (
    (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function rx(e, t, r, n, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = vl(0)),
    (this.expirationTimes = vl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = vl(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function dd(e, t, r, n, s, i, o, a, l) {
  return (
    (e = new rx(e, t, r, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = vt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gc(i),
    e
  );
}
function nx(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yn,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function kg(e) {
  if (!e) return Qr;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Ye(r)) return km(e, r, t);
  }
  return t;
}
function Tg(e, t, r, n, s, i, o, a, l) {
  return (
    (e = dd(r, n, !0, e, s, i, o, a, l)),
    (e.context = kg(null)),
    (r = e.current),
    (n = We()),
    (s = qr(r)),
    (i = ar(n, s)),
    (i.callback = t ?? null),
    Wr(r, i, s),
    (e.current.lanes = s),
    Gi(e, s, n),
    Xe(e, n),
    e
  );
}
function Fa(e, t, r, n) {
  var s = t.current,
    i = We(),
    o = qr(s);
  return (
    (r = kg(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = ar(i, o)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Wr(s, t, o)),
    e !== null && (Lt(e, s, o, i), Mo(e, s, o)),
    o
  );
}
function va(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Yh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function hd(e, t) {
  Yh(e, t), (e = e.alternate) && Yh(e, t);
}
function sx() {
  return null;
}
var Cg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function fd(e) {
  this._internalRoot = e;
}
za.prototype.render = fd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Fa(e, t, null, null);
};
za.prototype.unmount = fd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    On(function () {
      Fa(null, e, null, null);
    }),
      (t[ur] = null);
  }
};
function za(e) {
  this._internalRoot = e;
}
za.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sm();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Pr.length && t !== 0 && t < Pr[r].priority; r++);
    Pr.splice(r, 0, e), r === 0 && om(e);
  }
};
function pd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ba(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Xh() {}
function ix(e, t, r, n, s) {
  if (s) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var u = va(o);
        i.call(u);
      };
    }
    var o = Tg(t, n, e, 0, null, !1, !1, "", Xh);
    return (
      (e._reactRootContainer = o),
      (e[ur] = o.current),
      Ti(e.nodeType === 8 ? e.parentNode : e),
      On(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof n == "function") {
    var a = n;
    n = function () {
      var u = va(l);
      a.call(u);
    };
  }
  var l = dd(e, 0, !1, null, null, !1, !1, "", Xh);
  return (
    (e._reactRootContainer = l),
    (e[ur] = l.current),
    Ti(e.nodeType === 8 ? e.parentNode : e),
    On(function () {
      Fa(t, l, r, n);
    }),
    l
  );
}
function Va(e, t, r, n, s) {
  var i = r._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = va(o);
        a.call(l);
      };
    }
    Fa(t, o, e, s);
  } else o = ix(r, t, e, s, n);
  return va(o);
}
rm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = ni(t.pendingLanes);
        r !== 0 &&
          (jc(t, r | 1), Xe(t, we()), !(ee & 6) && ((Is = we() + 500), rn()));
      }
      break;
    case 13:
      On(function () {
        var n = cr(e, 1);
        if (n !== null) {
          var s = We();
          Lt(n, e, 1, s);
        }
      }),
        hd(e, 1);
  }
};
Ic = function (e) {
  if (e.tag === 13) {
    var t = cr(e, 134217728);
    if (t !== null) {
      var r = We();
      Lt(t, e, 134217728, r);
    }
    hd(e, 134217728);
  }
};
nm = function (e) {
  if (e.tag === 13) {
    var t = qr(e),
      r = cr(e, t);
    if (r !== null) {
      var n = We();
      Lt(r, e, t, n);
    }
    hd(e, t);
  }
};
sm = function () {
  return ne;
};
im = function (e, t) {
  var r = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = r;
  }
};
pu = function (e, t, r) {
  switch (t) {
    case "input":
      if ((au(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var s = ja(n);
            if (!s) throw Error(O(90));
            Lp(n), au(n, s);
          }
        }
      }
      break;
    case "textarea":
      Mp(e, r);
      break;
    case "select":
      (t = r.value), t != null && cs(e, !!r.multiple, t, !1);
  }
};
Hp = ad;
qp = On;
var ox = { usingClientEntryPoint: !1, Events: [Ji, rs, ja, Vp, Wp, ad] },
  Xs = {
    findFiberByHostInstance: pn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  ax = {
    bundleType: Xs.bundleType,
    version: Xs.version,
    rendererPackageName: Xs.rendererPackageName,
    rendererConfig: Xs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Qp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Xs.findFiberByHostInstance || sx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var So = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!So.isDisabled && So.supportsFiber)
    try {
      (Pa = So.inject(ax)), (Gt = So);
    } catch {}
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ox;
dt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pd(t)) throw Error(O(200));
  return nx(e, t, null, r);
};
dt.createRoot = function (e, t) {
  if (!pd(e)) throw Error(O(299));
  var r = !1,
    n = "",
    s = Cg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = dd(e, 1, !1, null, null, r, !1, n, s)),
    (e[ur] = t.current),
    Ti(e.nodeType === 8 ? e.parentNode : e),
    new fd(t)
  );
};
dt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Qp(t)), (e = e === null ? null : e.stateNode), e;
};
dt.flushSync = function (e) {
  return On(e);
};
dt.hydrate = function (e, t, r) {
  if (!Ba(t)) throw Error(O(200));
  return Va(null, e, t, !0, r);
};
dt.hydrateRoot = function (e, t, r) {
  if (!pd(e)) throw Error(O(405));
  var n = (r != null && r.hydratedSources) || null,
    s = !1,
    i = "",
    o = Cg;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (s = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    (t = Tg(t, null, e, 1, r ?? null, s, !1, i, o)),
    (e[ur] = t.current),
    Ti(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (s = r._getVersion),
        (s = s(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, s])
          : t.mutableSourceEagerHydrationData.push(r, s);
  return new za(t);
};
dt.render = function (e, t, r) {
  if (!Ba(t)) throw Error(O(200));
  return Va(null, e, t, !1, r);
};
dt.unmountComponentAtNode = function (e) {
  if (!Ba(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (On(function () {
        Va(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ur] = null);
        });
      }),
      !0)
    : !1;
};
dt.unstable_batchedUpdates = ad;
dt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Ba(r)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Va(e, t, r, !1, n);
};
dt.version = "18.3.1-next-f1338f8080-20240426";
function Rg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rg);
    } catch (e) {
      console.error(e);
    }
}
Rg(), (Rp.exports = dt);
var Xi = Rp.exports;
const Pg = mp(Xi);
var Og,
  Zh = Xi;
(Og = Zh.createRoot), Zh.hydrateRoot;
const lx = 1,
  ux = 1e6;
let Ml = 0;
function cx() {
  return (Ml = (Ml + 1) % Number.MAX_SAFE_INTEGER), Ml.toString();
}
const Ul = new Map(),
  ef = (e) => {
    if (Ul.has(e)) return;
    const t = setTimeout(() => {
      Ul.delete(e), mi({ type: "REMOVE_TOAST", toastId: e });
    }, ux);
    Ul.set(e, t);
  },
  dx = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, lx) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((r) =>
            r.id === t.toast.id ? { ...r, ...t.toast } : r
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: r } = t;
        return (
          r
            ? ef(r)
            : e.toasts.forEach((n) => {
                ef(n.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((n) =>
              n.id === r || r === void 0 ? { ...n, open: !1 } : n
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((r) => r.id !== t.toastId) };
    }
  },
  Ho = [];
let qo = { toasts: [] };
function mi(e) {
  (qo = dx(qo, e)),
    Ho.forEach((t) => {
      t(qo);
    });
}
function hx({ ...e }) {
  const t = cx(),
    r = (s) => mi({ type: "UPDATE_TOAST", toast: { ...s, id: t } }),
    n = () => mi({ type: "DISMISS_TOAST", toastId: t });
  return (
    mi({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (s) => {
          s || n();
        },
      },
    }),
    { id: t, dismiss: n, update: r }
  );
}
function fx() {
  const [e, t] = x.useState(qo);
  return (
    x.useEffect(
      () => (
        Ho.push(t),
        () => {
          const r = Ho.indexOf(t);
          r > -1 && Ho.splice(r, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: hx,
      dismiss: (r) => mi({ type: "DISMISS_TOAST", toastId: r }),
    }
  );
}
function ke(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), r === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function tf(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Ag(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((s) => {
      const i = tf(s, t);
      return !r && typeof i == "function" && (r = !0), i;
    });
    if (r)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          typeof i == "function" ? i() : tf(e[s], null);
        }
      };
  };
}
function Mt(...e) {
  return x.useCallback(Ag(...e), e);
}
function Wa(e, t = []) {
  let r = [];
  function n(i, o) {
    const a = x.createContext(o),
      l = r.length;
    r = [...r, o];
    const u = (h) => {
      var g;
      const { scope: f, children: d, ...y } = h,
        p = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
        w = x.useMemo(() => y, Object.values(y));
      return b.jsx(p.Provider, { value: w, children: d });
    };
    u.displayName = i + "Provider";
    function c(h, f) {
      var p;
      const d = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a,
        y = x.useContext(d);
      if (y) return y;
      if (o !== void 0) return o;
      throw new Error(`\`${h}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const s = () => {
    const i = r.map((o) => x.createContext(o));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (s.scopeName = e), [n, px(s, ...t)];
}
function px(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (i) {
      const o = n.reduce((a, { useScope: l, scopeName: u }) => {
        const h = l(i)[`__scope${u}`];
        return { ...a, ...h };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
function Ku(e) {
  const t = mx(e),
    r = x.forwardRef((n, s) => {
      const { children: i, ...o } = n,
        a = x.Children.toArray(i),
        l = a.find(vx);
      if (l) {
        const u = l.props.children,
          c = a.map((h) =>
            h === l
              ? x.Children.count(u) > 1
                ? x.Children.only(null)
                : x.isValidElement(u)
                ? u.props.children
                : null
              : h
          );
        return b.jsx(t, {
          ...o,
          ref: s,
          children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null,
        });
      }
      return b.jsx(t, { ...o, ref: s, children: i });
    });
  return (r.displayName = `${e}.Slot`), r;
}
function mx(e) {
  const t = x.forwardRef((r, n) => {
    const { children: s, ...i } = r;
    if (x.isValidElement(s)) {
      const o = wx(s),
        a = yx(i, s.props);
      return (
        s.type !== x.Fragment && (a.ref = n ? Ag(n, o) : o),
        x.cloneElement(s, a)
      );
    }
    return x.Children.count(s) > 1 ? x.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var Ng = Symbol("radix.slottable");
function gx(e) {
  const t = ({ children: r }) => b.jsx(b.Fragment, { children: r });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = Ng), t;
}
function vx(e) {
  return (
    x.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Ng
  );
}
function yx(e, t) {
  const r = { ...t };
  for (const n in t) {
    const s = e[n],
      i = t[n];
    /^on[A-Z]/.test(n)
      ? s && i
        ? (r[n] = (...a) => {
            const l = i(...a);
            return s(...a), l;
          })
        : s && (r[n] = s)
      : n === "style"
      ? (r[n] = { ...s, ...i })
      : n === "className" && (r[n] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function wx(e) {
  var n, s;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
function xx(e) {
  const t = e + "CollectionProvider",
    [r, n] = Wa(t),
    [s, i] = r(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (p) => {
      const { scope: w, children: g } = p,
        m = N.useRef(null),
        v = N.useRef(new Map()).current;
      return b.jsx(s, { scope: w, itemMap: v, collectionRef: m, children: g });
    };
  o.displayName = t;
  const a = e + "CollectionSlot",
    l = Ku(a),
    u = N.forwardRef((p, w) => {
      const { scope: g, children: m } = p,
        v = i(a, g),
        _ = Mt(w, v.collectionRef);
      return b.jsx(l, { ref: _, children: m });
    });
  u.displayName = a;
  const c = e + "CollectionItemSlot",
    h = "data-radix-collection-item",
    f = Ku(c),
    d = N.forwardRef((p, w) => {
      const { scope: g, children: m, ...v } = p,
        _ = N.useRef(null),
        S = Mt(w, _),
        E = i(c, g);
      return (
        N.useEffect(
          () => (
            E.itemMap.set(_, { ref: _, ...v }), () => void E.itemMap.delete(_)
          )
        ),
        b.jsx(f, { [h]: "", ref: S, children: m })
      );
    });
  d.displayName = c;
  function y(p) {
    const w = i(e + "CollectionConsumer", p);
    return N.useCallback(() => {
      const m = w.collectionRef.current;
      if (!m) return [];
      const v = Array.from(m.querySelectorAll(`[${h}]`));
      return Array.from(w.itemMap.values()).sort(
        (E, k) => v.indexOf(E.ref.current) - v.indexOf(k.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: o, Slot: u, ItemSlot: d }, y, n];
}
var _x = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  et = _x.reduce((e, t) => {
    const r = Ku(`Primitive.${t}`),
      n = x.forwardRef((s, i) => {
        const { asChild: o, ...a } = s,
          l = o ? r : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          b.jsx(l, { ...a, ref: i })
        );
      });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function jg(e, t) {
  e && Xi.flushSync(() => e.dispatchEvent(t));
}
function Jr(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...r) => {
          var n;
          return (n = t.current) == null ? void 0 : n.call(t, ...r);
        },
      []
    )
  );
}
function bx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Jr(e);
  x.useEffect(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return (
      t.addEventListener("keydown", n, { capture: !0 }),
      () => t.removeEventListener("keydown", n, { capture: !0 })
    );
  }, [r, t]);
}
var Sx = "DismissableLayer",
  Gu = "dismissableLayer.update",
  Ex = "dismissableLayer.pointerDownOutside",
  kx = "dismissableLayer.focusOutside",
  rf,
  Ig = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  md = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: n,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...l
      } = e,
      u = x.useContext(Ig),
      [c, h] = x.useState(null),
      f =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, d] = x.useState({}),
      y = Mt(t, (k) => h(k)),
      p = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = p.indexOf(w),
      m = c ? p.indexOf(c) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      _ = m >= g,
      S = Cx((k) => {
        const R = k.target,
          A = [...u.branches].some((j) => j.contains(R));
        !_ ||
          A ||
          (s == null || s(k),
          o == null || o(k),
          k.defaultPrevented || a == null || a());
      }, f),
      E = Rx((k) => {
        const R = k.target;
        [...u.branches].some((j) => j.contains(R)) ||
          (i == null || i(k),
          o == null || o(k),
          k.defaultPrevented || a == null || a());
      }, f);
    return (
      bx((k) => {
        m === u.layers.size - 1 &&
          (n == null || n(k),
          !k.defaultPrevented && a && (k.preventDefault(), a()));
      }, f),
      x.useEffect(() => {
        if (c)
          return (
            r &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((rf = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            nf(),
            () => {
              r &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = rf);
            }
          );
      }, [c, f, r, u]),
      x.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            nf());
        },
        [c, u]
      ),
      x.useEffect(() => {
        const k = () => d({});
        return (
          document.addEventListener(Gu, k),
          () => document.removeEventListener(Gu, k)
        );
      }, []),
      b.jsx(et.div, {
        ...l,
        ref: y,
        style: {
          pointerEvents: v ? (_ ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ke(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: ke(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: ke(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        ),
      })
    );
  });
md.displayName = Sx;
var Tx = "DismissableLayerBranch",
  $g = x.forwardRef((e, t) => {
    const r = x.useContext(Ig),
      n = x.useRef(null),
      s = Mt(t, n);
    return (
      x.useEffect(() => {
        const i = n.current;
        if (i)
          return (
            r.branches.add(i),
            () => {
              r.branches.delete(i);
            }
          );
      }, [r.branches]),
      b.jsx(et.div, { ...e, ref: s })
    );
  });
$g.displayName = Tx;
function Cx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Jr(e),
    n = x.useRef(!1),
    s = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const i = (a) => {
          if (a.target && !n.current) {
            let l = function () {
              Lg(Ex, r, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = l),
                t.addEventListener("click", s.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", s.current);
          n.current = !1;
        },
        o = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(o),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", s.current);
      };
    }, [t, r]),
    { onPointerDownCapture: () => (n.current = !0) }
  );
}
function Rx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Jr(e),
    n = x.useRef(!1);
  return (
    x.useEffect(() => {
      const s = (i) => {
        i.target &&
          !n.current &&
          Lg(kx, r, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, r]),
    {
      onFocusCapture: () => (n.current = !0),
      onBlurCapture: () => (n.current = !1),
    }
  );
}
function nf() {
  const e = new CustomEvent(Gu);
  document.dispatchEvent(e);
}
function Lg(e, t, r, { discrete: n }) {
  const s = r.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }),
    n ? jg(s, i) : s.dispatchEvent(i);
}
var Px = md,
  Ox = $g,
  Yr = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  Ax = "Portal",
  Dg = x.forwardRef((e, t) => {
    var a;
    const { container: r, ...n } = e,
      [s, i] = x.useState(!1);
    Yr(() => i(!0), []);
    const o =
      r ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? Pg.createPortal(b.jsx(et.div, { ...n, ref: t }), o) : null;
  });
Dg.displayName = Ax;
function Nx(e, t) {
  return x.useReducer((r, n) => t[r][n] ?? r, e);
}
var gd = (e) => {
  const { present: t, children: r } = e,
    n = jx(t),
    s =
      typeof r == "function" ? r({ present: n.isPresent }) : x.Children.only(r),
    i = Mt(n.ref, Ix(s));
  return typeof r == "function" || n.isPresent
    ? x.cloneElement(s, { ref: i })
    : null;
};
gd.displayName = "Presence";
function jx(e) {
  const [t, r] = x.useState(),
    n = x.useRef(null),
    s = x.useRef(e),
    i = x.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, l] = Nx(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const u = Eo(n.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    Yr(() => {
      const u = n.current,
        c = s.current;
      if (c !== e) {
        const f = i.current,
          d = Eo(u);
        e
          ? l("MOUNT")
          : d === "none" || (u == null ? void 0 : u.display) === "none"
          ? l("UNMOUNT")
          : l(c && f !== d ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e);
      }
    }, [e, l]),
    Yr(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          h = (d) => {
            const p = Eo(n.current).includes(d.animationName);
            if (d.target === t && p && (l("ANIMATION_END"), !s.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          f = (d) => {
            d.target === t && (i.current = Eo(n.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", h),
          t.addEventListener("animationend", h),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", h),
              t.removeEventListener("animationend", h);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: x.useCallback((u) => {
        (n.current = u ? getComputedStyle(u) : null), r(u);
      }, []),
    }
  );
}
function Eo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ix(e) {
  var n, s;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
var $x = Tp[" useInsertionEffect ".trim().toString()] || Yr;
function Lx({ prop: e, defaultProp: t, onChange: r = () => {}, caller: n }) {
  const [s, i, o] = Dx({ defaultProp: t, onChange: r }),
    a = e !== void 0,
    l = a ? e : s;
  {
    const c = x.useRef(e !== void 0);
    x.useEffect(() => {
      const h = c.current;
      h !== a &&
        console.warn(
          `${n} is changing from ${h ? "controlled" : "uncontrolled"} to ${
            a ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (c.current = a);
    }, [a, n]);
  }
  const u = x.useCallback(
    (c) => {
      var h;
      if (a) {
        const f = Mx(c) ? c(e) : c;
        f !== e && ((h = o.current) == null || h.call(o, f));
      } else i(c);
    },
    [a, e, i, o]
  );
  return [l, u];
}
function Dx({ defaultProp: e, onChange: t }) {
  const [r, n] = x.useState(e),
    s = x.useRef(r),
    i = x.useRef(t);
  return (
    $x(() => {
      i.current = t;
    }, [t]),
    x.useEffect(() => {
      var o;
      s.current !== r &&
        ((o = i.current) == null || o.call(i, r), (s.current = r));
    }, [r, s]),
    [r, n, i]
  );
}
function Mx(e) {
  return typeof e == "function";
}
var Ux = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Fx = "VisuallyHidden",
  Ha = x.forwardRef((e, t) =>
    b.jsx(et.span, { ...e, ref: t, style: { ...Ux, ...e.style } })
  );
Ha.displayName = Fx;
var zx = Ha,
  vd = "ToastProvider",
  [yd, Bx, Vx] = xx("Toast"),
  [Mg, PC] = Wa("Toast", [Vx]),
  [Wx, qa] = Mg(vd),
  Ug = (e) => {
    const {
        __scopeToast: t,
        label: r = "Notification",
        duration: n = 5e3,
        swipeDirection: s = "right",
        swipeThreshold: i = 50,
        children: o,
      } = e,
      [a, l] = x.useState(null),
      [u, c] = x.useState(0),
      h = x.useRef(!1),
      f = x.useRef(!1);
    return (
      r.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${vd}\`. Expected non-empty \`string\`.`
        ),
      b.jsx(yd.Provider, {
        scope: t,
        children: b.jsx(Wx, {
          scope: t,
          label: r,
          duration: n,
          swipeDirection: s,
          swipeThreshold: i,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: x.useCallback(() => c((d) => d + 1), []),
          onToastRemove: x.useCallback(() => c((d) => d - 1), []),
          isFocusedToastEscapeKeyDownRef: h,
          isClosePausedRef: f,
          children: o,
        }),
      })
    );
  };
Ug.displayName = vd;
var Fg = "ToastViewport",
  Hx = ["F8"],
  Qu = "toast.viewportPause",
  Ju = "toast.viewportResume",
  zg = x.forwardRef((e, t) => {
    const {
        __scopeToast: r,
        hotkey: n = Hx,
        label: s = "Notifications ({hotkey})",
        ...i
      } = e,
      o = qa(Fg, r),
      a = Bx(r),
      l = x.useRef(null),
      u = x.useRef(null),
      c = x.useRef(null),
      h = x.useRef(null),
      f = Mt(t, h, o.onViewportChange),
      d = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      y = o.toastCount > 0;
    x.useEffect(() => {
      const w = (g) => {
        var v;
        n.length !== 0 &&
          n.every((_) => g[_] || g.code === _) &&
          ((v = h.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [n]),
      x.useEffect(() => {
        const w = l.current,
          g = h.current;
        if (y && w && g) {
          const m = () => {
              if (!o.isClosePausedRef.current) {
                const E = new CustomEvent(Qu);
                g.dispatchEvent(E), (o.isClosePausedRef.current = !0);
              }
            },
            v = () => {
              if (o.isClosePausedRef.current) {
                const E = new CustomEvent(Ju);
                g.dispatchEvent(E), (o.isClosePausedRef.current = !1);
              }
            },
            _ = (E) => {
              !w.contains(E.relatedTarget) && v();
            },
            S = () => {
              w.contains(document.activeElement) || v();
            };
          return (
            w.addEventListener("focusin", m),
            w.addEventListener("focusout", _),
            w.addEventListener("pointermove", m),
            w.addEventListener("pointerleave", S),
            window.addEventListener("blur", m),
            window.addEventListener("focus", v),
            () => {
              w.removeEventListener("focusin", m),
                w.removeEventListener("focusout", _),
                w.removeEventListener("pointermove", m),
                w.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", v);
            }
          );
        }
      }, [y, o.isClosePausedRef]);
    const p = x.useCallback(
      ({ tabbingDirection: w }) => {
        const m = a().map((v) => {
          const _ = v.ref.current,
            S = [_, ...s_(_)];
          return w === "forwards" ? S : S.reverse();
        });
        return (w === "forwards" ? m.reverse() : m).flat();
      },
      [a]
    );
    return (
      x.useEffect(() => {
        const w = h.current;
        if (w) {
          const g = (m) => {
            var S, E, k;
            const v = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !v) {
              const R = document.activeElement,
                A = m.shiftKey;
              if (m.target === w && A) {
                (S = u.current) == null || S.focus();
                return;
              }
              const D = p({ tabbingDirection: A ? "backwards" : "forwards" }),
                Q = D.findIndex((I) => I === R);
              Fl(D.slice(Q + 1))
                ? m.preventDefault()
                : A
                ? (E = u.current) == null || E.focus()
                : (k = c.current) == null || k.focus();
            }
          };
          return (
            w.addEventListener("keydown", g),
            () => w.removeEventListener("keydown", g)
          );
        }
      }, [a, p]),
      b.jsxs(Ox, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", d),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y &&
            b.jsx(Yu, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = p({ tabbingDirection: "forwards" });
                Fl(w);
              },
            }),
          b.jsx(yd.Slot, {
            scope: r,
            children: b.jsx(et.ol, { tabIndex: -1, ...i, ref: f }),
          }),
          y &&
            b.jsx(Yu, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const w = p({ tabbingDirection: "backwards" });
                Fl(w);
              },
            }),
        ],
      })
    );
  });
zg.displayName = Fg;
var Bg = "ToastFocusProxy",
  Yu = x.forwardRef((e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...s } = e,
      i = qa(Bg, r);
    return b.jsx(Ha, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...s,
      ref: t,
      style: { position: "fixed" },
      onFocus: (o) => {
        var u;
        const a = o.relatedTarget;
        !((u = i.viewport) != null && u.contains(a)) && n();
      },
    });
  });
Yu.displayName = Bg;
var Zi = "Toast",
  qx = "toast.swipeStart",
  Kx = "toast.swipeMove",
  Gx = "toast.swipeCancel",
  Qx = "toast.swipeEnd",
  Vg = x.forwardRef((e, t) => {
    const { forceMount: r, open: n, defaultOpen: s, onOpenChange: i, ...o } = e,
      [a, l] = Lx({ prop: n, defaultProp: s ?? !0, onChange: i, caller: Zi });
    return b.jsx(gd, {
      present: r || a,
      children: b.jsx(Xx, {
        open: a,
        ...o,
        ref: t,
        onClose: () => l(!1),
        onPause: Jr(e.onPause),
        onResume: Jr(e.onResume),
        onSwipeStart: ke(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ke(e.onSwipeMove, (u) => {
          const { x: c, y: h } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${h}px`
            );
        }),
        onSwipeCancel: ke(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ke(e.onSwipeEnd, (u) => {
          const { x: c, y: h } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${h}px`
            ),
            l(!1);
        }),
      }),
    });
  });
Vg.displayName = Zi;
var [Jx, Yx] = Mg(Zi, { onClose() {} }),
  Xx = x.forwardRef((e, t) => {
    const {
        __scopeToast: r,
        type: n = "foreground",
        duration: s,
        open: i,
        onClose: o,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: h,
        onSwipeCancel: f,
        onSwipeEnd: d,
        ...y
      } = e,
      p = qa(Zi, r),
      [w, g] = x.useState(null),
      m = Mt(t, (I) => g(I)),
      v = x.useRef(null),
      _ = x.useRef(null),
      S = s || p.duration,
      E = x.useRef(0),
      k = x.useRef(S),
      R = x.useRef(0),
      { onToastAdd: A, onToastRemove: j } = p,
      B = Jr(() => {
        var X;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((X = p.viewport) == null || X.focus()),
          o();
      }),
      D = x.useCallback(
        (I) => {
          !I ||
            I === 1 / 0 ||
            (window.clearTimeout(R.current),
            (E.current = new Date().getTime()),
            (R.current = window.setTimeout(B, I)));
        },
        [B]
      );
    x.useEffect(() => {
      const I = p.viewport;
      if (I) {
        const X = () => {
            D(k.current), u == null || u();
          },
          V = () => {
            const q = new Date().getTime() - E.current;
            (k.current = k.current - q),
              window.clearTimeout(R.current),
              l == null || l();
          };
        return (
          I.addEventListener(Qu, V),
          I.addEventListener(Ju, X),
          () => {
            I.removeEventListener(Qu, V), I.removeEventListener(Ju, X);
          }
        );
      }
    }, [p.viewport, S, l, u, D]),
      x.useEffect(() => {
        i && !p.isClosePausedRef.current && D(S);
      }, [i, S, p.isClosePausedRef, D]),
      x.useEffect(() => (A(), () => j()), [A, j]);
    const Q = x.useMemo(() => (w ? Jg(w) : null), [w]);
    return p.viewport
      ? b.jsxs(b.Fragment, {
          children: [
            Q &&
              b.jsx(Zx, {
                __scopeToast: r,
                role: "status",
                "aria-live": n === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: Q,
              }),
            b.jsx(Jx, {
              scope: r,
              onClose: B,
              children: Xi.createPortal(
                b.jsx(yd.ItemSlot, {
                  scope: r,
                  children: b.jsx(Px, {
                    asChild: !0,
                    onEscapeKeyDown: ke(a, () => {
                      p.isFocusedToastEscapeKeyDownRef.current || B(),
                        (p.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: b.jsx(et.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": p.swipeDirection,
                      ...y,
                      ref: m,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ke(e.onKeyDown, (I) => {
                        I.key === "Escape" &&
                          (a == null || a(I.nativeEvent),
                          I.nativeEvent.defaultPrevented ||
                            ((p.isFocusedToastEscapeKeyDownRef.current = !0),
                            B()));
                      }),
                      onPointerDown: ke(e.onPointerDown, (I) => {
                        I.button === 0 &&
                          (v.current = { x: I.clientX, y: I.clientY });
                      }),
                      onPointerMove: ke(e.onPointerMove, (I) => {
                        if (!v.current) return;
                        const X = I.clientX - v.current.x,
                          V = I.clientY - v.current.y,
                          q = !!_.current,
                          C = ["left", "right"].includes(p.swipeDirection),
                          P = ["left", "up"].includes(p.swipeDirection)
                            ? Math.min
                            : Math.max,
                          $ = C ? P(0, X) : 0,
                          K = C ? 0 : P(0, V),
                          U = I.pointerType === "touch" ? 10 : 2,
                          J = { x: $, y: K },
                          Z = { originalEvent: I, delta: J };
                        q
                          ? ((_.current = J), ko(Kx, h, Z, { discrete: !1 }))
                          : sf(J, p.swipeDirection, U)
                          ? ((_.current = J),
                            ko(qx, c, Z, { discrete: !1 }),
                            I.target.setPointerCapture(I.pointerId))
                          : (Math.abs(X) > U || Math.abs(V) > U) &&
                            (v.current = null);
                      }),
                      onPointerUp: ke(e.onPointerUp, (I) => {
                        const X = _.current,
                          V = I.target;
                        if (
                          (V.hasPointerCapture(I.pointerId) &&
                            V.releasePointerCapture(I.pointerId),
                          (_.current = null),
                          (v.current = null),
                          X)
                        ) {
                          const q = I.currentTarget,
                            C = { originalEvent: I, delta: X };
                          sf(X, p.swipeDirection, p.swipeThreshold)
                            ? ko(Qx, d, C, { discrete: !0 })
                            : ko(Gx, f, C, { discrete: !0 }),
                            q.addEventListener(
                              "click",
                              (P) => P.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                p.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  Zx = (e) => {
    const { __scopeToast: t, children: r, ...n } = e,
      s = qa(Zi, t),
      [i, o] = x.useState(!1),
      [a, l] = x.useState(!1);
    return (
      r_(() => o(!0)),
      x.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : b.jsx(Dg, {
            asChild: !0,
            children: b.jsx(Ha, {
              ...n,
              children:
                i && b.jsxs(b.Fragment, { children: [s.label, " ", r] }),
            }),
          })
    );
  },
  e_ = "ToastTitle",
  Wg = x.forwardRef((e, t) => {
    const { __scopeToast: r, ...n } = e;
    return b.jsx(et.div, { ...n, ref: t });
  });
Wg.displayName = e_;
var t_ = "ToastDescription",
  Hg = x.forwardRef((e, t) => {
    const { __scopeToast: r, ...n } = e;
    return b.jsx(et.div, { ...n, ref: t });
  });
Hg.displayName = t_;
var qg = "ToastAction",
  Kg = x.forwardRef((e, t) => {
    const { altText: r, ...n } = e;
    return r.trim()
      ? b.jsx(Qg, {
          altText: r,
          asChild: !0,
          children: b.jsx(wd, { ...n, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${qg}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
Kg.displayName = qg;
var Gg = "ToastClose",
  wd = x.forwardRef((e, t) => {
    const { __scopeToast: r, ...n } = e,
      s = Yx(Gg, r);
    return b.jsx(Qg, {
      asChild: !0,
      children: b.jsx(et.button, {
        type: "button",
        ...n,
        ref: t,
        onClick: ke(e.onClick, s.onClose),
      }),
    });
  });
wd.displayName = Gg;
var Qg = x.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...s } = e;
  return b.jsx(et.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": n || void 0,
    ...s,
    ref: t,
  });
});
function Jg(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((n) => {
      if (
        (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent),
        n_(n))
      ) {
        const s = n.ariaHidden || n.hidden || n.style.display === "none",
          i = n.dataset.radixToastAnnounceExclude === "";
        if (!s)
          if (i) {
            const o = n.dataset.radixToastAnnounceAlt;
            o && t.push(o);
          } else t.push(...Jg(n));
      }
    }),
    t
  );
}
function ko(e, t, r, { discrete: n }) {
  const s = r.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }),
    n ? jg(s, i) : s.dispatchEvent(i);
}
var sf = (e, t, r = 0) => {
  const n = Math.abs(e.x),
    s = Math.abs(e.y),
    i = n > s;
  return t === "left" || t === "right" ? i && n > r : !i && s > r;
};
function r_(e = () => {}) {
  const t = Jr(e);
  Yr(() => {
    let r = 0,
      n = 0;
    return (
      (r = window.requestAnimationFrame(
        () => (n = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
      }
    );
  }, [t]);
}
function n_(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function s_(e) {
  const t = [],
    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) => {
        const s = n.tagName === "INPUT" && n.type === "hidden";
        return n.disabled || n.hidden || s
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Fl(e) {
  const t = document.activeElement;
  return e.some((r) =>
    r === t ? !0 : (r.focus(), document.activeElement !== t)
  );
}
var i_ = Ug,
  Yg = zg,
  Xg = Vg,
  Zg = Wg,
  ev = Hg,
  tv = Kg,
  rv = wd;
function nv(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = nv(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function sv() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = nv(e)) && (n && (n += " "), (n += t));
  return n;
}
const of = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  af = sv,
  o_ = (e, t) => (r) => {
    var n;
    if ((t == null ? void 0 : t.variants) == null)
      return af(
        e,
        r == null ? void 0 : r.class,
        r == null ? void 0 : r.className
      );
    const { variants: s, defaultVariants: i } = t,
      o = Object.keys(s).map((u) => {
        const c = r == null ? void 0 : r[u],
          h = i == null ? void 0 : i[u];
        if (c === null) return null;
        const f = of(c) || of(h);
        return s[u][f];
      }),
      a =
        r &&
        Object.entries(r).reduce((u, c) => {
          let [h, f] = c;
          return f === void 0 || (u[h] = f), u;
        }, {}),
      l =
        t == null || (n = t.compoundVariants) === null || n === void 0
          ? void 0
          : n.reduce((u, c) => {
              let { class: h, className: f, ...d } = c;
              return Object.entries(d).every((y) => {
                let [p, w] = y;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...a }[p])
                  : { ...i, ...a }[p] === w;
              })
                ? [...u, h, f]
                : u;
            }, []);
    return af(
      e,
      o,
      l,
      r == null ? void 0 : r.class,
      r == null ? void 0 : r.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  iv = (...e) =>
    e
      .filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var l_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u_ = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: n,
      className: s = "",
      children: i,
      iconNode: o,
      ...a
    },
    l
  ) =>
    x.createElement(
      "svg",
      {
        ref: l,
        ...l_,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: n ? (Number(r) * 24) / Number(t) : r,
        className: iv("lucide", s),
        ...a,
      },
      [
        ...o.map(([u, c]) => x.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tt = (e, t) => {
  const r = x.forwardRef(({ className: n, ...s }, i) =>
    x.createElement(u_, {
      ref: i,
      iconNode: t,
      className: iv(`lucide-${a_(e)}`, n),
      ...s,
    })
  );
  return (r.displayName = `${e}`), r;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c_ = tt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d_ = tt("CircleDollarSign", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h_ = tt("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ov = tt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f_ = tt("Eraser", [
  [
    "path",
    {
      d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      key: "182aya",
    },
  ],
  ["path", { d: "M22 21H7", key: "t4ddhn" }],
  ["path", { d: "m5 11 9 9", key: "1mo9qw" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p_ = tt("Grid3x3", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m_ = tt("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu",
    },
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g_ = tt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const av = tt("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v_ = tt("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y_ = tt("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w_ = tt("Wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6",
    },
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x_ = tt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const __ = tt("Zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]),
  xd = "-",
  b_ = (e) => {
    const t = E_(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(xd);
        return a[0] === "" && a.length !== 1 && a.shift(), lv(a, t) || S_(o);
      },
      getConflictingClassGroupIds: (o, a) => {
        const l = r[o] || [];
        return a && n[o] ? [...l, ...n[o]] : l;
      },
    };
  },
  lv = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const r = e[0],
      n = t.nextPart.get(r),
      s = n ? lv(e.slice(1), n) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const i = e.join(xd);
    return (o = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : o.classGroupId;
  },
  lf = /^\[(.+)\]$/,
  S_ = (e) => {
    if (lf.test(e)) {
      const t = lf.exec(e)[1],
        r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  E_ = (e) => {
    const { theme: t, prefix: r } = e,
      n = { nextPart: new Map(), validators: [] };
    return (
      T_(Object.entries(e.classGroups), r).forEach(([i, o]) => {
        Xu(o, n, i, t);
      }),
      n
    );
  },
  Xu = (e, t, r, n) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const i = s === "" ? t : uf(t, s);
        i.classGroupId = r;
        return;
      }
      if (typeof s == "function") {
        if (k_(s)) {
          Xu(s(n), t, r, n);
          return;
        }
        t.validators.push({ validator: s, classGroupId: r });
        return;
      }
      Object.entries(s).forEach(([i, o]) => {
        Xu(o, uf(t, i), r, n);
      });
    });
  },
  uf = (e, t) => {
    let r = e;
    return (
      t.split(xd).forEach((n) => {
        r.nextPart.has(n) ||
          r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(n));
      }),
      r
    );
  },
  k_ = (e) => e.isThemeGetter,
  T_ = (e, t) =>
    t
      ? e.map(([r, n]) => {
          const s = n.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([o, a]) => [t + o, a])
                )
              : i
          );
          return [r, s];
        })
      : e,
  C_ = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      r = new Map(),
      n = new Map();
    const s = (i, o) => {
      r.set(i, o), t++, t > e && ((t = 0), (n = r), (r = new Map()));
    };
    return {
      get(i) {
        let o = r.get(i);
        if (o !== void 0) return o;
        if ((o = n.get(i)) !== void 0) return s(i, o), o;
      },
      set(i, o) {
        r.has(i) ? r.set(i, o) : s(i, o);
      },
    };
  },
  uv = "!",
  R_ = (e) => {
    const { separator: t, experimentalParseClassName: r } = e,
      n = t.length === 1,
      s = t[0],
      i = t.length,
      o = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          h;
        for (let w = 0; w < a.length; w++) {
          let g = a[w];
          if (u === 0) {
            if (g === s && (n || a.slice(w, w + i) === t)) {
              l.push(a.slice(c, w)), (c = w + i);
              continue;
            }
            if (g === "/") {
              h = w;
              continue;
            }
          }
          g === "[" ? u++ : g === "]" && u--;
        }
        const f = l.length === 0 ? a : a.substring(c),
          d = f.startsWith(uv),
          y = d ? f.substring(1) : f,
          p = h && h > c ? h - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: d,
          baseClassName: y,
          maybePostfixModifierPosition: p,
        };
      };
    return r ? (a) => r({ className: a, parseClassName: o }) : o;
  },
  P_ = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let r = [];
    return (
      e.forEach((n) => {
        n[0] === "[" ? (t.push(...r.sort(), n), (r = [])) : r.push(n);
      }),
      t.push(...r.sort()),
      t
    );
  },
  O_ = (e) => ({ cache: C_(e.cacheSize), parseClassName: R_(e), ...b_(e) }),
  A_ = /\s+/,
  N_ = (e, t) => {
    const {
        parseClassName: r,
        getClassGroupId: n,
        getConflictingClassGroupIds: s,
      } = t,
      i = [],
      o = e.trim().split(A_);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const u = o[l],
        {
          modifiers: c,
          hasImportantModifier: h,
          baseClassName: f,
          maybePostfixModifierPosition: d,
        } = r(u);
      let y = !!d,
        p = n(y ? f.substring(0, d) : f);
      if (!p) {
        if (!y) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((p = n(f)), !p)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        y = !1;
      }
      const w = P_(c).join(":"),
        g = h ? w + uv : w,
        m = g + p;
      if (i.includes(m)) continue;
      i.push(m);
      const v = s(p, y);
      for (let _ = 0; _ < v.length; ++_) {
        const S = v[_];
        i.push(g + S);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function j_() {
  let e = 0,
    t,
    r,
    n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = cv(t)) && (n && (n += " "), (n += r));
  return n;
}
const cv = (e) => {
  if (typeof e == "string") return e;
  let t,
    r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = cv(e[n])) && (r && (r += " "), (r += t));
  return r;
};
function I_(e, ...t) {
  let r,
    n,
    s,
    i = o;
  function o(l) {
    const u = t.reduce((c, h) => h(c), e());
    return (r = O_(u)), (n = r.cache.get), (s = r.cache.set), (i = a), a(l);
  }
  function a(l) {
    const u = n(l);
    if (u) return u;
    const c = N_(l, r);
    return s(l, c), c;
  }
  return function () {
    return i(j_.apply(null, arguments));
  };
}
const ae = (e) => {
    const t = (r) => r[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  dv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  $_ = /^\d+\/\d+$/,
  L_ = new Set(["px", "full", "screen"]),
  D_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  M_ =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  U_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  F_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  z_ =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Zt = (e) => gs(e) || L_.has(e) || $_.test(e),
  Sr = (e) => Fs(e, "length", Q_),
  gs = (e) => !!e && !Number.isNaN(Number(e)),
  zl = (e) => Fs(e, "number", gs),
  Zs = (e) => !!e && Number.isInteger(Number(e)),
  B_ = (e) => e.endsWith("%") && gs(e.slice(0, -1)),
  G = (e) => dv.test(e),
  Er = (e) => D_.test(e),
  V_ = new Set(["length", "size", "percentage"]),
  W_ = (e) => Fs(e, V_, hv),
  H_ = (e) => Fs(e, "position", hv),
  q_ = new Set(["image", "url"]),
  K_ = (e) => Fs(e, q_, Y_),
  G_ = (e) => Fs(e, "", J_),
  ei = () => !0,
  Fs = (e, t, r) => {
    const n = dv.exec(e);
    return n
      ? n[1]
        ? typeof t == "string"
          ? n[1] === t
          : t.has(n[1])
        : r(n[2])
      : !1;
  },
  Q_ = (e) => M_.test(e) && !U_.test(e),
  hv = () => !1,
  J_ = (e) => F_.test(e),
  Y_ = (e) => z_.test(e),
  X_ = () => {
    const e = ae("colors"),
      t = ae("spacing"),
      r = ae("blur"),
      n = ae("brightness"),
      s = ae("borderColor"),
      i = ae("borderRadius"),
      o = ae("borderSpacing"),
      a = ae("borderWidth"),
      l = ae("contrast"),
      u = ae("grayscale"),
      c = ae("hueRotate"),
      h = ae("invert"),
      f = ae("gap"),
      d = ae("gradientColorStops"),
      y = ae("gradientColorStopPositions"),
      p = ae("inset"),
      w = ae("margin"),
      g = ae("opacity"),
      m = ae("padding"),
      v = ae("saturate"),
      _ = ae("scale"),
      S = ae("sepia"),
      E = ae("skew"),
      k = ae("space"),
      R = ae("translate"),
      A = () => ["auto", "contain", "none"],
      j = () => ["auto", "hidden", "clip", "visible", "scroll"],
      B = () => ["auto", G, t],
      D = () => [G, t],
      Q = () => ["", Zt, Sr],
      I = () => ["auto", gs, G],
      X = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      V = () => ["solid", "dashed", "dotted", "double", "none"],
      q = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      C = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      P = () => ["", "0", G],
      $ = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      K = () => [gs, G];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [ei],
        spacing: [Zt, Sr],
        blur: ["none", "", Er, G],
        brightness: K(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Er, G],
        borderSpacing: D(),
        borderWidth: Q(),
        contrast: K(),
        grayscale: P(),
        hueRotate: K(),
        invert: P(),
        gap: D(),
        gradientColorStops: [e],
        gradientColorStopPositions: [B_, Sr],
        inset: B(),
        margin: B(),
        opacity: K(),
        padding: D(),
        saturate: K(),
        scale: K(),
        sepia: P(),
        skew: K(),
        space: D(),
        translate: D(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", G] }],
        container: ["container"],
        columns: [{ columns: [Er] }],
        "break-after": [{ "break-after": $() }],
        "break-before": [{ "break-before": $() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...X(), G] }],
        overflow: [{ overflow: j() }],
        "overflow-x": [{ "overflow-x": j() }],
        "overflow-y": [{ "overflow-y": j() }],
        overscroll: [{ overscroll: A() }],
        "overscroll-x": [{ "overscroll-x": A() }],
        "overscroll-y": [{ "overscroll-y": A() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [p] }],
        "inset-x": [{ "inset-x": [p] }],
        "inset-y": [{ "inset-y": [p] }],
        start: [{ start: [p] }],
        end: [{ end: [p] }],
        top: [{ top: [p] }],
        right: [{ right: [p] }],
        bottom: [{ bottom: [p] }],
        left: [{ left: [p] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Zs, G] }],
        basis: [{ basis: B() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", G] }],
        grow: [{ grow: P() }],
        shrink: [{ shrink: P() }],
        order: [{ order: ["first", "last", "none", Zs, G] }],
        "grid-cols": [{ "grid-cols": [ei] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Zs, G] }, G] }],
        "col-start": [{ "col-start": I() }],
        "col-end": [{ "col-end": I() }],
        "grid-rows": [{ "grid-rows": [ei] }],
        "row-start-end": [{ row: ["auto", { span: [Zs, G] }, G] }],
        "row-start": [{ "row-start": I() }],
        "row-end": [{ "row-end": I() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", G] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", G] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...C()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...C(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...C(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [m] }],
        px: [{ px: [m] }],
        py: [{ py: [m] }],
        ps: [{ ps: [m] }],
        pe: [{ pe: [m] }],
        pt: [{ pt: [m] }],
        pr: [{ pr: [m] }],
        pb: [{ pb: [m] }],
        pl: [{ pl: [m] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t] }],
        "min-w": [{ "min-w": [G, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              G,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Er] },
              Er,
            ],
          },
        ],
        h: [{ h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [G, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Er, Sr] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              zl,
            ],
          },
        ],
        "font-family": [{ font: [ei] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              G,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", gs, zl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Zt,
              G,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", G] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", G] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...V(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Zt, Sr] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Zt, G] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: D() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              G,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", G] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...X(), H_] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", W_] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              K_,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [y] }],
        "gradient-via-pos": [{ via: [y] }],
        "gradient-to-pos": [{ to: [y] }],
        "gradient-from": [{ from: [d] }],
        "gradient-via": [{ via: [d] }],
        "gradient-to": [{ to: [d] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [{ border: [...V(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [{ divide: V() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...V()] }],
        "outline-offset": [{ "outline-offset": [Zt, G] }],
        "outline-w": [{ outline: [Zt, Sr] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: Q() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [Zt, Sr] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Er, G_] }],
        "shadow-color": [{ shadow: [ei] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [{ "mix-blend": [...q(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": q() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [r] }],
        brightness: [{ brightness: [n] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Er, G] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [h] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [S] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [r] }],
        "backdrop-brightness": [{ "backdrop-brightness": [n] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [h] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [S] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [o] }],
        "border-spacing-x": [{ "border-spacing-x": [o] }],
        "border-spacing-y": [{ "border-spacing-y": [o] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              G,
            ],
          },
        ],
        duration: [{ duration: K() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", G] }],
        delay: [{ delay: K() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", G] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [_] }],
        "scale-x": [{ "scale-x": [_] }],
        "scale-y": [{ "scale-y": [_] }],
        rotate: [{ rotate: [Zs, G] }],
        "translate-x": [{ "translate-x": [R] }],
        "translate-y": [{ "translate-y": [R] }],
        "skew-x": [{ "skew-x": [E] }],
        "skew-y": [{ "skew-y": [E] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              G,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              G,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": D() }],
        "scroll-mx": [{ "scroll-mx": D() }],
        "scroll-my": [{ "scroll-my": D() }],
        "scroll-ms": [{ "scroll-ms": D() }],
        "scroll-me": [{ "scroll-me": D() }],
        "scroll-mt": [{ "scroll-mt": D() }],
        "scroll-mr": [{ "scroll-mr": D() }],
        "scroll-mb": [{ "scroll-mb": D() }],
        "scroll-ml": [{ "scroll-ml": D() }],
        "scroll-p": [{ "scroll-p": D() }],
        "scroll-px": [{ "scroll-px": D() }],
        "scroll-py": [{ "scroll-py": D() }],
        "scroll-ps": [{ "scroll-ps": D() }],
        "scroll-pe": [{ "scroll-pe": D() }],
        "scroll-pt": [{ "scroll-pt": D() }],
        "scroll-pr": [{ "scroll-pr": D() }],
        "scroll-pb": [{ "scroll-pb": D() }],
        "scroll-pl": [{ "scroll-pl": D() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", G] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Zt, Sr, zl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Z_ = I_(X_);
function In(...e) {
  return Z_(sv(e));
}
const eb = i_,
  fv = x.forwardRef(({ className: e, ...t }, r) =>
    b.jsx(Yg, {
      ref: r,
      className: In(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
fv.displayName = Yg.displayName;
const tb = o_(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  pv = x.forwardRef(({ className: e, variant: t, ...r }, n) =>
    b.jsx(Xg, { ref: n, className: In(tb({ variant: t }), e), ...r })
  );
pv.displayName = Xg.displayName;
const rb = x.forwardRef(({ className: e, ...t }, r) =>
  b.jsx(tv, {
    ref: r,
    className: In(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t,
  })
);
rb.displayName = tv.displayName;
const mv = x.forwardRef(({ className: e, ...t }, r) =>
  b.jsx(rv, {
    ref: r,
    className: In(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: b.jsx(x_, { className: "h-4 w-4" }),
  })
);
mv.displayName = rv.displayName;
const gv = x.forwardRef(({ className: e, ...t }, r) =>
  b.jsx(Zg, { ref: r, className: In("text-sm font-semibold", e), ...t })
);
gv.displayName = Zg.displayName;
const vv = x.forwardRef(({ className: e, ...t }, r) =>
  b.jsx(ev, { ref: r, className: In("text-sm opacity-90", e), ...t })
);
vv.displayName = ev.displayName;
function nb() {
  const { toasts: e } = fx();
  return b.jsxs(eb, {
    children: [
      e.map(function ({ id: t, title: r, description: n, action: s, ...i }) {
        return b.jsxs(
          pv,
          {
            ...i,
            children: [
              b.jsxs("div", {
                className: "grid gap-1",
                children: [
                  r && b.jsx(gv, { children: r }),
                  n && b.jsx(vv, { children: n }),
                ],
              }),
              s,
              b.jsx(mv, {}),
            ],
          },
          t
        );
      }),
      b.jsx(fv, {}),
    ],
  });
}
var cf = ["light", "dark"],
  sb = "(prefers-color-scheme: dark)",
  ib = x.createContext(void 0),
  ob = { setTheme: (e) => {}, themes: [] },
  ab = () => {
    var e;
    return (e = x.useContext(ib)) != null ? e : ob;
  };
x.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: r,
    enableSystem: n,
    enableColorScheme: s,
    defaultTheme: i,
    value: o,
    attrs: a,
    nonce: l,
  }) => {
    let u = i === "system",
      c =
        r === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a
              .map((y) => `'${y}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${r}',s='setAttribute';`,
      h = s
        ? cf.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (y, p = !1, w = !0) => {
        let g = o ? o[y] : y,
          m = p ? y + "|| ''" : `'${g}'`,
          v = "";
        return (
          s &&
            w &&
            !p &&
            cf.includes(y) &&
            (v += `d.style.colorScheme = '${y}';`),
          r === "class"
            ? p || g
              ? (v += `c.add(${m})`)
              : (v += "null")
            : g && (v += `d[s](n,${m})`),
          v
        );
      },
      d = e
        ? `!function(){${c}${f(e)}}()`
        : n
        ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${sb}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f(
            "dark"
          )}}else{${f("light")}}}else if(e){${
            o ? `var x=${JSON.stringify(o)};` : ""
          }${f(o ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + f(i, !1, !1) + "}"
          }${h}}catch(e){}}()`
        : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${
            o ? `var x=${JSON.stringify(o)};` : ""
          }${f(o ? "x[e]" : "e", !0)}}else{${f(
            i,
            !1,
            !1
          )};}${h}}catch(t){}}();`;
    return x.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: d },
    });
  }
);
var lb = (e) => {
    switch (e) {
      case "success":
        return db;
      case "info":
        return fb;
      case "warning":
        return hb;
      case "error":
        return pb;
      default:
        return null;
    }
  },
  ub = Array(12).fill(0),
  cb = ({ visible: e, className: t }) =>
    N.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      N.createElement(
        "div",
        { className: "sonner-spinner" },
        ub.map((r, n) =>
          N.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  db = N.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    N.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  hb = N.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    N.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  fb = N.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    N.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  pb = N.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    N.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  mb = N.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    N.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    N.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  gb = () => {
    let [e, t] = N.useState(document.hidden);
    return (
      N.useEffect(() => {
        let r = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", r),
          () => window.removeEventListener("visibilitychange", r)
        );
      }, []),
      e
    );
  },
  Zu = 1,
  vb = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: r, ...n } = e,
            s =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Zu++,
            i = this.toasts.find((a) => a.id === s),
            o = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            i
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === s
                    ? (this.publish({ ...a, ...e, id: s, title: r }),
                      { ...a, ...e, id: s, dismissible: o, title: r })
                    : a
                ))
              : this.addToast({ title: r, ...n, dismissible: o, id: s }),
            s
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((r) => r({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let r;
          t.loading !== void 0 &&
            (r = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let n = e instanceof Promise ? e : e(),
            s = r !== void 0,
            i,
            o = n
              .then(async (l) => {
                if (((i = ["resolve", l]), N.isValidElement(l)))
                  (s = !1), this.create({ id: r, type: "default", message: l });
                else if (wb(l) && !l.ok) {
                  s = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: r,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  s = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: r,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (l) => {
                if (((i = ["reject", l]), t.error !== void 0)) {
                  s = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: r,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var l;
                s && (this.dismiss(r), (r = void 0)),
                  (l = t.finally) == null || l.call(t);
              }),
            a = () =>
              new Promise((l, u) =>
                o.then(() => (i[0] === "reject" ? u(i[1]) : l(i[1]))).catch(u)
              );
          return typeof r != "string" && typeof r != "number"
            ? { unwrap: a }
            : Object.assign(r, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let r = (t == null ? void 0 : t.id) || Zu++;
          return this.create({ jsx: e(r), id: r, ...t }), r;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  Ke = new vb(),
  yb = (e, t) => {
    let r = (t == null ? void 0 : t.id) || Zu++;
    return Ke.addToast({ title: e, ...t, id: r }), r;
  },
  wb = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  xb = yb,
  _b = () => Ke.toasts,
  bb = () => Ke.getActiveToasts(),
  Bl = Object.assign(
    xb,
    {
      success: Ke.success,
      info: Ke.info,
      warning: Ke.warning,
      error: Ke.error,
      custom: Ke.custom,
      message: Ke.message,
      promise: Ke.promise,
      dismiss: Ke.dismiss,
      loading: Ke.loading,
    },
    { getHistory: _b, getToasts: bb }
  );
function Sb(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0],
    n = document.createElement("style");
  (n.type = "text/css"),
    t === "top" && r.firstChild
      ? r.insertBefore(n, r.firstChild)
      : r.appendChild(n),
    n.styleSheet
      ? (n.styleSheet.cssText = e)
      : n.appendChild(document.createTextNode(e));
}
Sb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function To(e) {
  return e.label !== void 0;
}
var Eb = 3,
  kb = "32px",
  Tb = "16px",
  df = 4e3,
  Cb = 356,
  Rb = 14,
  Pb = 20,
  Ob = 200;
function kt(...e) {
  return e.filter(Boolean).join(" ");
}
function Ab(e) {
  let [t, r] = e.split("-"),
    n = [];
  return t && n.push(t), r && n.push(r), n;
}
var Nb = (e) => {
  var t, r, n, s, i, o, a, l, u, c, h;
  let {
      invert: f,
      toast: d,
      unstyled: y,
      interacting: p,
      setHeights: w,
      visibleToasts: g,
      heights: m,
      index: v,
      toasts: _,
      expanded: S,
      removeToast: E,
      defaultRichColors: k,
      closeButton: R,
      style: A,
      cancelButtonStyle: j,
      actionButtonStyle: B,
      className: D = "",
      descriptionClassName: Q = "",
      duration: I,
      position: X,
      gap: V,
      loadingIcon: q,
      expandByDefault: C,
      classNames: P,
      icons: $,
      closeButtonAriaLabel: K = "Close toast",
      pauseWhenPageIsHidden: U,
    } = e,
    [J, Z] = N.useState(null),
    [xe, Ie] = N.useState(null),
    [re, $n] = N.useState(!1),
    [gr, nn] = N.useState(!1),
    [vr, Ln] = N.useState(!1),
    [yr, ro] = N.useState(!1),
    [al, no] = N.useState(!1),
    [ll, Vs] = N.useState(0),
    [Dn, Md] = N.useState(0),
    Ws = N.useRef(d.duration || I || df),
    Ud = N.useRef(null),
    sn = N.useRef(null),
    Cy = v === 0,
    Ry = v + 1 <= g,
    ft = d.type,
    Mn = d.dismissible !== !1,
    Py = d.className || "",
    Oy = d.descriptionClassName || "",
    so = N.useMemo(
      () => m.findIndex((W) => W.toastId === d.id) || 0,
      [m, d.id]
    ),
    Ay = N.useMemo(() => {
      var W;
      return (W = d.closeButton) != null ? W : R;
    }, [d.closeButton, R]),
    Fd = N.useMemo(() => d.duration || I || df, [d.duration, I]),
    ul = N.useRef(0),
    Un = N.useRef(0),
    zd = N.useRef(0),
    Fn = N.useRef(null),
    [Ny, jy] = X.split("-"),
    Bd = N.useMemo(
      () => m.reduce((W, se, ce) => (ce >= so ? W : W + se.height), 0),
      [m, so]
    ),
    Vd = gb(),
    Iy = d.invert || f,
    cl = ft === "loading";
  (Un.current = N.useMemo(() => so * V + Bd, [so, Bd])),
    N.useEffect(() => {
      Ws.current = Fd;
    }, [Fd]),
    N.useEffect(() => {
      $n(!0);
    }, []),
    N.useEffect(() => {
      let W = sn.current;
      if (W) {
        let se = W.getBoundingClientRect().height;
        return (
          Md(se),
          w((ce) => [
            { toastId: d.id, height: se, position: d.position },
            ...ce,
          ]),
          () => w((ce) => ce.filter((_t) => _t.toastId !== d.id))
        );
      }
    }, [w, d.id]),
    N.useLayoutEffect(() => {
      if (!re) return;
      let W = sn.current,
        se = W.style.height;
      W.style.height = "auto";
      let ce = W.getBoundingClientRect().height;
      (W.style.height = se),
        Md(ce),
        w((_t) =>
          _t.find((bt) => bt.toastId === d.id)
            ? _t.map((bt) => (bt.toastId === d.id ? { ...bt, height: ce } : bt))
            : [{ toastId: d.id, height: ce, position: d.position }, ..._t]
        );
    }, [re, d.title, d.description, w, d.id]);
  let wr = N.useCallback(() => {
    nn(!0),
      Vs(Un.current),
      w((W) => W.filter((se) => se.toastId !== d.id)),
      setTimeout(() => {
        E(d);
      }, Ob);
  }, [d, E, w, Un]);
  N.useEffect(() => {
    if (
      (d.promise && ft === "loading") ||
      d.duration === 1 / 0 ||
      d.type === "loading"
    )
      return;
    let W;
    return (
      S || p || (U && Vd)
        ? (() => {
            if (zd.current < ul.current) {
              let se = new Date().getTime() - ul.current;
              Ws.current = Ws.current - se;
            }
            zd.current = new Date().getTime();
          })()
        : Ws.current !== 1 / 0 &&
          ((ul.current = new Date().getTime()),
          (W = setTimeout(() => {
            var se;
            (se = d.onAutoClose) == null || se.call(d, d), wr();
          }, Ws.current))),
      () => clearTimeout(W)
    );
  }, [S, p, d, ft, U, Vd, wr]),
    N.useEffect(() => {
      d.delete && wr();
    }, [wr, d.delete]);
  function $y() {
    var W, se, ce;
    return $ != null && $.loading
      ? N.createElement(
          "div",
          {
            className: kt(
              P == null ? void 0 : P.loader,
              (W = d == null ? void 0 : d.classNames) == null
                ? void 0
                : W.loader,
              "sonner-loader"
            ),
            "data-visible": ft === "loading",
          },
          $.loading
        )
      : q
      ? N.createElement(
          "div",
          {
            className: kt(
              P == null ? void 0 : P.loader,
              (se = d == null ? void 0 : d.classNames) == null
                ? void 0
                : se.loader,
              "sonner-loader"
            ),
            "data-visible": ft === "loading",
          },
          q
        )
      : N.createElement(cb, {
          className: kt(
            P == null ? void 0 : P.loader,
            (ce = d == null ? void 0 : d.classNames) == null
              ? void 0
              : ce.loader
          ),
          visible: ft === "loading",
        });
  }
  return N.createElement(
    "li",
    {
      tabIndex: 0,
      ref: sn,
      className: kt(
        D,
        Py,
        P == null ? void 0 : P.toast,
        (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast,
        P == null ? void 0 : P.default,
        P == null ? void 0 : P[ft],
        (r = d == null ? void 0 : d.classNames) == null ? void 0 : r[ft]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (n = d.richColors) != null ? n : k,
      "data-styled": !(d.jsx || d.unstyled || y),
      "data-mounted": re,
      "data-promise": !!d.promise,
      "data-swiped": al,
      "data-removed": gr,
      "data-visible": Ry,
      "data-y-position": Ny,
      "data-x-position": jy,
      "data-index": v,
      "data-front": Cy,
      "data-swiping": vr,
      "data-dismissible": Mn,
      "data-type": ft,
      "data-invert": Iy,
      "data-swipe-out": yr,
      "data-swipe-direction": xe,
      "data-expanded": !!(S || (C && re)),
      style: {
        "--index": v,
        "--toasts-before": v,
        "--z-index": _.length - v,
        "--offset": `${gr ? ll : Un.current}px`,
        "--initial-height": C ? "auto" : `${Dn}px`,
        ...A,
        ...d.style,
      },
      onDragEnd: () => {
        Ln(!1), Z(null), (Fn.current = null);
      },
      onPointerDown: (W) => {
        cl ||
          !Mn ||
          ((Ud.current = new Date()),
          Vs(Un.current),
          W.target.setPointerCapture(W.pointerId),
          W.target.tagName !== "BUTTON" &&
            (Ln(!0), (Fn.current = { x: W.clientX, y: W.clientY })));
      },
      onPointerUp: () => {
        var W, se, ce, _t;
        if (yr || !Mn) return;
        Fn.current = null;
        let bt = Number(
            ((W = sn.current) == null
              ? void 0
              : W.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          xr = Number(
            ((se = sn.current) == null
              ? void 0
              : se.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          on =
            new Date().getTime() -
            ((ce = Ud.current) == null ? void 0 : ce.getTime()),
          St = J === "x" ? bt : xr,
          _r = Math.abs(St) / on;
        if (Math.abs(St) >= Pb || _r > 0.11) {
          Vs(Un.current),
            (_t = d.onDismiss) == null || _t.call(d, d),
            Ie(
              J === "x" ? (bt > 0 ? "right" : "left") : xr > 0 ? "down" : "up"
            ),
            wr(),
            ro(!0),
            no(!1);
          return;
        }
        Ln(!1), Z(null);
      },
      onPointerMove: (W) => {
        var se, ce, _t, bt;
        if (
          !Fn.current ||
          !Mn ||
          ((se = window.getSelection()) == null
            ? void 0
            : se.toString().length) > 0
        )
          return;
        let xr = W.clientY - Fn.current.y,
          on = W.clientX - Fn.current.x,
          St = (ce = e.swipeDirections) != null ? ce : Ab(X);
        !J &&
          (Math.abs(on) > 1 || Math.abs(xr) > 1) &&
          Z(Math.abs(on) > Math.abs(xr) ? "x" : "y");
        let _r = { x: 0, y: 0 };
        J === "y"
          ? (St.includes("top") || St.includes("bottom")) &&
            ((St.includes("top") && xr < 0) ||
              (St.includes("bottom") && xr > 0)) &&
            (_r.y = xr)
          : J === "x" &&
            (St.includes("left") || St.includes("right")) &&
            ((St.includes("left") && on < 0) ||
              (St.includes("right") && on > 0)) &&
            (_r.x = on),
          (Math.abs(_r.x) > 0 || Math.abs(_r.y) > 0) && no(!0),
          (_t = sn.current) == null ||
            _t.style.setProperty("--swipe-amount-x", `${_r.x}px`),
          (bt = sn.current) == null ||
            bt.style.setProperty("--swipe-amount-y", `${_r.y}px`);
      },
    },
    Ay && !d.jsx
      ? N.createElement(
          "button",
          {
            "aria-label": K,
            "data-disabled": cl,
            "data-close-button": !0,
            onClick:
              cl || !Mn
                ? () => {}
                : () => {
                    var W;
                    wr(), (W = d.onDismiss) == null || W.call(d, d);
                  },
            className: kt(
              P == null ? void 0 : P.closeButton,
              (s = d == null ? void 0 : d.classNames) == null
                ? void 0
                : s.closeButton
            ),
          },
          (i = $ == null ? void 0 : $.close) != null ? i : mb
        )
      : null,
    d.jsx || x.isValidElement(d.title)
      ? d.jsx
        ? d.jsx
        : typeof d.title == "function"
        ? d.title()
        : d.title
      : N.createElement(
          N.Fragment,
          null,
          ft || d.icon || d.promise
            ? N.createElement(
                "div",
                {
                  "data-icon": "",
                  className: kt(
                    P == null ? void 0 : P.icon,
                    (o = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : o.icon
                  ),
                },
                d.promise || (d.type === "loading" && !d.icon)
                  ? d.icon || $y()
                  : null,
                d.type !== "loading"
                  ? d.icon || ($ == null ? void 0 : $[ft]) || lb(ft)
                  : null
              )
            : null,
          N.createElement(
            "div",
            {
              "data-content": "",
              className: kt(
                P == null ? void 0 : P.content,
                (a = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : a.content
              ),
            },
            N.createElement(
              "div",
              {
                "data-title": "",
                className: kt(
                  P == null ? void 0 : P.title,
                  (l = d == null ? void 0 : d.classNames) == null
                    ? void 0
                    : l.title
                ),
              },
              typeof d.title == "function" ? d.title() : d.title
            ),
            d.description
              ? N.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: kt(
                      Q,
                      Oy,
                      P == null ? void 0 : P.description,
                      (u = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof d.description == "function"
                    ? d.description()
                    : d.description
                )
              : null
          ),
          x.isValidElement(d.cancel)
            ? d.cancel
            : d.cancel && To(d.cancel)
            ? N.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: d.cancelButtonStyle || j,
                  onClick: (W) => {
                    var se, ce;
                    To(d.cancel) &&
                      Mn &&
                      ((ce = (se = d.cancel).onClick) == null || ce.call(se, W),
                      wr());
                  },
                  className: kt(
                    P == null ? void 0 : P.cancelButton,
                    (c = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : c.cancelButton
                  ),
                },
                d.cancel.label
              )
            : null,
          x.isValidElement(d.action)
            ? d.action
            : d.action && To(d.action)
            ? N.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: d.actionButtonStyle || B,
                  onClick: (W) => {
                    var se, ce;
                    To(d.action) &&
                      ((ce = (se = d.action).onClick) == null || ce.call(se, W),
                      !W.defaultPrevented && wr());
                  },
                  className: kt(
                    P == null ? void 0 : P.actionButton,
                    (h = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : h.actionButton
                  ),
                },
                d.action.label
              )
            : null
        )
  );
};
function hf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function jb(e, t) {
  let r = {};
  return (
    [e, t].forEach((n, s) => {
      let i = s === 1,
        o = i ? "--mobile-offset" : "--offset",
        a = i ? Tb : kb;
      function l(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          r[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof n == "number" || typeof n == "string"
        ? l(n)
        : typeof n == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            n[u] === void 0
              ? (r[`${o}-${u}`] = a)
              : (r[`${o}-${u}`] = typeof n[u] == "number" ? `${n[u]}px` : n[u]);
          })
        : l(a);
    }),
    r
  );
}
var Ib = x.forwardRef(function (e, t) {
  let {
      invert: r,
      position: n = "bottom-right",
      hotkey: s = ["altKey", "KeyT"],
      expand: i,
      closeButton: o,
      className: a,
      offset: l,
      mobileOffset: u,
      theme: c = "light",
      richColors: h,
      duration: f,
      style: d,
      visibleToasts: y = Eb,
      toastOptions: p,
      dir: w = hf(),
      gap: g = Rb,
      loadingIcon: m,
      icons: v,
      containerAriaLabel: _ = "Notifications",
      pauseWhenPageIsHidden: S,
    } = e,
    [E, k] = N.useState([]),
    R = N.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(E.filter((U) => U.position).map((U) => U.position))
          )
        ),
      [E, n]
    ),
    [A, j] = N.useState([]),
    [B, D] = N.useState(!1),
    [Q, I] = N.useState(!1),
    [X, V] = N.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    q = N.useRef(null),
    C = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    P = N.useRef(null),
    $ = N.useRef(!1),
    K = N.useCallback((U) => {
      k((J) => {
        var Z;
        return (
          ((Z = J.find((xe) => xe.id === U.id)) != null && Z.delete) ||
            Ke.dismiss(U.id),
          J.filter(({ id: xe }) => xe !== U.id)
        );
      });
    }, []);
  return (
    N.useEffect(
      () =>
        Ke.subscribe((U) => {
          if (U.dismiss) {
            k((J) => J.map((Z) => (Z.id === U.id ? { ...Z, delete: !0 } : Z)));
            return;
          }
          setTimeout(() => {
            Pg.flushSync(() => {
              k((J) => {
                let Z = J.findIndex((xe) => xe.id === U.id);
                return Z !== -1
                  ? [...J.slice(0, Z), { ...J[Z], ...U }, ...J.slice(Z + 1)]
                  : [U, ...J];
              });
            });
          });
        }),
      []
    ),
    N.useEffect(() => {
      if (c !== "system") {
        V(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? V("dark")
            : V("light")),
        typeof window > "u")
      )
        return;
      let U = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        U.addEventListener("change", ({ matches: J }) => {
          V(J ? "dark" : "light");
        });
      } catch {
        U.addListener(({ matches: Z }) => {
          try {
            V(Z ? "dark" : "light");
          } catch (xe) {
            console.error(xe);
          }
        });
      }
    }, [c]),
    N.useEffect(() => {
      E.length <= 1 && D(!1);
    }, [E]),
    N.useEffect(() => {
      let U = (J) => {
        var Z, xe;
        s.every((Ie) => J[Ie] || J.code === Ie) &&
          (D(!0), (Z = q.current) == null || Z.focus()),
          J.code === "Escape" &&
            (document.activeElement === q.current ||
              ((xe = q.current) != null &&
                xe.contains(document.activeElement))) &&
            D(!1);
      };
      return (
        document.addEventListener("keydown", U),
        () => document.removeEventListener("keydown", U)
      );
    }, [s]),
    N.useEffect(() => {
      if (q.current)
        return () => {
          P.current &&
            (P.current.focus({ preventScroll: !0 }),
            (P.current = null),
            ($.current = !1));
        };
    }, [q.current]),
    N.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${_} ${C}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      R.map((U, J) => {
        var Z;
        let [xe, Ie] = U.split("-");
        return E.length
          ? N.createElement(
              "ol",
              {
                key: U,
                dir: w === "auto" ? hf() : w,
                tabIndex: -1,
                ref: q,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": X,
                "data-y-position": xe,
                "data-lifted": B && E.length > 1 && !i,
                "data-x-position": Ie,
                style: {
                  "--front-toast-height": `${
                    ((Z = A[0]) == null ? void 0 : Z.height) || 0
                  }px`,
                  "--width": `${Cb}px`,
                  "--gap": `${g}px`,
                  ...d,
                  ...jb(l, u),
                },
                onBlur: (re) => {
                  $.current &&
                    !re.currentTarget.contains(re.relatedTarget) &&
                    (($.current = !1),
                    P.current &&
                      (P.current.focus({ preventScroll: !0 }),
                      (P.current = null)));
                },
                onFocus: (re) => {
                  (re.target instanceof HTMLElement &&
                    re.target.dataset.dismissible === "false") ||
                    $.current ||
                    (($.current = !0), (P.current = re.relatedTarget));
                },
                onMouseEnter: () => D(!0),
                onMouseMove: () => D(!0),
                onMouseLeave: () => {
                  Q || D(!1);
                },
                onDragEnd: () => D(!1),
                onPointerDown: (re) => {
                  (re.target instanceof HTMLElement &&
                    re.target.dataset.dismissible === "false") ||
                    I(!0);
                },
                onPointerUp: () => I(!1),
              },
              E.filter(
                (re) => (!re.position && J === 0) || re.position === U
              ).map((re, $n) => {
                var gr, nn;
                return N.createElement(Nb, {
                  key: re.id,
                  icons: v,
                  index: $n,
                  toast: re,
                  defaultRichColors: h,
                  duration:
                    (gr = p == null ? void 0 : p.duration) != null ? gr : f,
                  className: p == null ? void 0 : p.className,
                  descriptionClassName:
                    p == null ? void 0 : p.descriptionClassName,
                  invert: r,
                  visibleToasts: y,
                  closeButton:
                    (nn = p == null ? void 0 : p.closeButton) != null ? nn : o,
                  interacting: Q,
                  position: U,
                  style: p == null ? void 0 : p.style,
                  unstyled: p == null ? void 0 : p.unstyled,
                  classNames: p == null ? void 0 : p.classNames,
                  cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle,
                  actionButtonStyle: p == null ? void 0 : p.actionButtonStyle,
                  removeToast: K,
                  toasts: E.filter((vr) => vr.position == re.position),
                  heights: A.filter((vr) => vr.position == re.position),
                  setHeights: j,
                  expandByDefault: i,
                  gap: g,
                  loadingIcon: m,
                  expanded: B,
                  pauseWhenPageIsHidden: S,
                  swipeDirections: e.swipeDirections,
                });
              })
            )
          : null;
      })
    )
  );
});
const $b = ({ ...e }) => {
    const { theme: t = "system" } = ab();
    return b.jsx(Ib, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  Lb = ["top", "right", "bottom", "left"],
  Xr = Math.min,
  st = Math.max,
  ya = Math.round,
  Co = Math.floor,
  Jt = (e) => ({ x: e, y: e }),
  Db = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Mb = { start: "end", end: "start" };
function ec(e, t, r) {
  return st(e, Xr(t, r));
}
function hr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fr(e) {
  return e.split("-")[0];
}
function zs(e) {
  return e.split("-")[1];
}
function _d(e) {
  return e === "x" ? "y" : "x";
}
function bd(e) {
  return e === "y" ? "height" : "width";
}
const Ub = new Set(["top", "bottom"]);
function Kt(e) {
  return Ub.has(fr(e)) ? "y" : "x";
}
function Sd(e) {
  return _d(Kt(e));
}
function Fb(e, t, r) {
  r === void 0 && (r = !1);
  const n = zs(e),
    s = Sd(e),
    i = bd(s);
  let o =
    s === "x"
      ? n === (r ? "end" : "start")
        ? "right"
        : "left"
      : n === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (o = wa(o)), [o, wa(o)];
}
function zb(e) {
  const t = wa(e);
  return [tc(e), t, tc(t)];
}
function tc(e) {
  return e.replace(/start|end/g, (t) => Mb[t]);
}
const ff = ["left", "right"],
  pf = ["right", "left"],
  Bb = ["top", "bottom"],
  Vb = ["bottom", "top"];
function Wb(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? pf : ff) : t ? ff : pf;
    case "left":
    case "right":
      return t ? Bb : Vb;
    default:
      return [];
  }
}
function Hb(e, t, r, n) {
  const s = zs(e);
  let i = Wb(fr(e), r === "start", n);
  return (
    s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map(tc)))), i
  );
}
function wa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Db[t]);
}
function qb(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function yv(e) {
  return typeof e != "number"
    ? qb(e)
    : { top: e, right: e, bottom: e, left: e };
}
function xa(e) {
  const { x: t, y: r, width: n, height: s } = e;
  return {
    width: n,
    height: s,
    top: r,
    left: t,
    right: t + n,
    bottom: r + s,
    x: t,
    y: r,
  };
}
function mf(e, t, r) {
  let { reference: n, floating: s } = e;
  const i = Kt(t),
    o = Sd(t),
    a = bd(o),
    l = fr(t),
    u = i === "y",
    c = n.x + n.width / 2 - s.width / 2,
    h = n.y + n.height / 2 - s.height / 2,
    f = n[a] / 2 - s[a] / 2;
  let d;
  switch (l) {
    case "top":
      d = { x: c, y: n.y - s.height };
      break;
    case "bottom":
      d = { x: c, y: n.y + n.height };
      break;
    case "right":
      d = { x: n.x + n.width, y: h };
      break;
    case "left":
      d = { x: n.x - s.width, y: h };
      break;
    default:
      d = { x: n.x, y: n.y };
  }
  switch (zs(t)) {
    case "start":
      d[o] -= f * (r && u ? -1 : 1);
      break;
    case "end":
      d[o] += f * (r && u ? -1 : 1);
      break;
  }
  return d;
}
const Kb = async (e, t, r) => {
  const {
      placement: n = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
    } = r,
    a = i.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let u = await o.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: c, y: h } = mf(u, n, l),
    f = n,
    d = {},
    y = 0;
  for (let p = 0; p < a.length; p++) {
    const { name: w, fn: g } = a[p],
      {
        x: m,
        y: v,
        data: _,
        reset: S,
      } = await g({
        x: c,
        y: h,
        initialPlacement: n,
        placement: f,
        strategy: s,
        middlewareData: d,
        rects: u,
        platform: o,
        elements: { reference: e, floating: t },
      });
    (c = m ?? c),
      (h = v ?? h),
      (d = { ...d, [w]: { ...d[w], ..._ } }),
      S &&
        y <= 50 &&
        (y++,
        typeof S == "object" &&
          (S.placement && (f = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : S.rects),
          ({ x: c, y: h } = mf(u, f, l))),
        (p = -1));
  }
  return { x: c, y: h, placement: f, strategy: s, middlewareData: d };
};
async function $i(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: s, platform: i, rects: o, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: h = "floating",
      altBoundary: f = !1,
      padding: d = 0,
    } = hr(t, e),
    y = yv(d),
    w = a[f ? (h === "floating" ? "reference" : "floating") : h],
    g = xa(
      await i.getClippingRect({
        element:
          (r = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          r
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      })
    ),
    m =
      h === "floating"
        ? { x: n, y: s, width: o.floating.width, height: o.floating.height }
        : o.reference,
    v = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    _ = (await (i.isElement == null ? void 0 : i.isElement(v)))
      ? (await (i.getScale == null ? void 0 : i.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = xa(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: m,
            offsetParent: v,
            strategy: l,
          })
        : m
    );
  return {
    top: (g.top - S.top + y.top) / _.y,
    bottom: (S.bottom - g.bottom + y.bottom) / _.y,
    left: (g.left - S.left + y.left) / _.x,
    right: (S.right - g.right + y.right) / _.x,
  };
}
const Gb = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: r,
          y: n,
          placement: s,
          rects: i,
          platform: o,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = hr(e, t) || {};
      if (u == null) return {};
      const h = yv(c),
        f = { x: r, y: n },
        d = Sd(s),
        y = bd(d),
        p = await o.getDimensions(u),
        w = d === "y",
        g = w ? "top" : "left",
        m = w ? "bottom" : "right",
        v = w ? "clientHeight" : "clientWidth",
        _ = i.reference[y] + i.reference[d] - f[d] - i.floating[y],
        S = f[d] - i.reference[d],
        E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
      let k = E ? E[v] : 0;
      (!k || !(await (o.isElement == null ? void 0 : o.isElement(E)))) &&
        (k = a.floating[v] || i.floating[y]);
      const R = _ / 2 - S / 2,
        A = k / 2 - p[y] / 2 - 1,
        j = Xr(h[g], A),
        B = Xr(h[m], A),
        D = j,
        Q = k - p[y] - B,
        I = k / 2 - p[y] / 2 + R,
        X = ec(D, I, Q),
        V =
          !l.arrow &&
          zs(s) != null &&
          I !== X &&
          i.reference[y] / 2 - (I < D ? j : B) - p[y] / 2 < 0,
        q = V ? (I < D ? I - D : I - Q) : 0;
      return {
        [d]: f[d] + q,
        data: {
          [d]: X,
          centerOffset: I - X - q,
          ...(V && { alignmentOffset: q }),
        },
        reset: V,
      };
    },
  }),
  Qb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r, n;
          const {
              placement: s,
              middlewareData: i,
              rects: o,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: h = !0,
              fallbackPlacements: f,
              fallbackStrategy: d = "bestFit",
              fallbackAxisSideDirection: y = "none",
              flipAlignment: p = !0,
              ...w
            } = hr(e, t);
          if ((r = i.arrow) != null && r.alignmentOffset) return {};
          const g = fr(s),
            m = Kt(a),
            v = fr(a) === a,
            _ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            S = f || (v || !p ? [wa(a)] : zb(a)),
            E = y !== "none";
          !f && E && S.push(...Hb(a, p, y, _));
          const k = [a, ...S],
            R = await $i(t, w),
            A = [];
          let j = ((n = i.flip) == null ? void 0 : n.overflows) || [];
          if ((c && A.push(R[g]), h)) {
            const I = Fb(s, o, _);
            A.push(R[I[0]], R[I[1]]);
          }
          if (
            ((j = [...j, { placement: s, overflows: A }]),
            !A.every((I) => I <= 0))
          ) {
            var B, D;
            const I = (((B = i.flip) == null ? void 0 : B.index) || 0) + 1,
              X = k[I];
            if (
              X &&
              (!(h === "alignment" ? m !== Kt(X) : !1) ||
                j.every((C) => C.overflows[0] > 0 && Kt(C.placement) === m))
            )
              return {
                data: { index: I, overflows: j },
                reset: { placement: X },
              };
            let V =
              (D = j
                .filter((q) => q.overflows[0] <= 0)
                .sort((q, C) => q.overflows[1] - C.overflows[1])[0]) == null
                ? void 0
                : D.placement;
            if (!V)
              switch (d) {
                case "bestFit": {
                  var Q;
                  const q =
                    (Q = j
                      .filter((C) => {
                        if (E) {
                          const P = Kt(C.placement);
                          return P === m || P === "y";
                        }
                        return !0;
                      })
                      .map((C) => [
                        C.placement,
                        C.overflows
                          .filter((P) => P > 0)
                          .reduce((P, $) => P + $, 0),
                      ])
                      .sort((C, P) => C[1] - P[1])[0]) == null
                      ? void 0
                      : Q[0];
                  q && (V = q);
                  break;
                }
                case "initialPlacement":
                  V = a;
                  break;
              }
            if (s !== V) return { reset: { placement: V } };
          }
          return {};
        },
      }
    );
  };
function gf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function vf(e) {
  return Lb.some((t) => e[t] >= 0);
}
const Jb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: r } = t,
            { strategy: n = "referenceHidden", ...s } = hr(e, t);
          switch (n) {
            case "referenceHidden": {
              const i = await $i(t, { ...s, elementContext: "reference" }),
                o = gf(i, r.reference);
              return {
                data: { referenceHiddenOffsets: o, referenceHidden: vf(o) },
              };
            }
            case "escaped": {
              const i = await $i(t, { ...s, altBoundary: !0 }),
                o = gf(i, r.floating);
              return { data: { escapedOffsets: o, escaped: vf(o) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  wv = new Set(["left", "top"]);
async function Yb(e, t) {
  const { placement: r, platform: n, elements: s } = e,
    i = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)),
    o = fr(r),
    a = zs(r),
    l = Kt(r) === "y",
    u = wv.has(o) ? -1 : 1,
    c = i && l ? -1 : 1,
    h = hr(t, e);
  let {
    mainAxis: f,
    crossAxis: d,
    alignmentAxis: y,
  } = typeof h == "number"
    ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: h.mainAxis || 0,
        crossAxis: h.crossAxis || 0,
        alignmentAxis: h.alignmentAxis,
      };
  return (
    a && typeof y == "number" && (d = a === "end" ? y * -1 : y),
    l ? { x: d * c, y: f * u } : { x: f * u, y: d * c }
  );
}
const Xb = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var r, n;
          const { x: s, y: i, placement: o, middlewareData: a } = t,
            l = await Yb(t, e);
          return o === ((r = a.offset) == null ? void 0 : r.placement) &&
            (n = a.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: s + l.x, y: i + l.y, data: { ...l, placement: o } };
        },
      }
    );
  },
  Zb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: n, placement: s } = t,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (w) => {
                  let { x: g, y: m } = w;
                  return { x: g, y: m };
                },
              },
              ...l
            } = hr(e, t),
            u = { x: r, y: n },
            c = await $i(t, l),
            h = Kt(fr(s)),
            f = _d(h);
          let d = u[f],
            y = u[h];
          if (i) {
            const w = f === "y" ? "top" : "left",
              g = f === "y" ? "bottom" : "right",
              m = d + c[w],
              v = d - c[g];
            d = ec(m, d, v);
          }
          if (o) {
            const w = h === "y" ? "top" : "left",
              g = h === "y" ? "bottom" : "right",
              m = y + c[w],
              v = y - c[g];
            y = ec(m, y, v);
          }
          const p = a.fn({ ...t, [f]: d, [h]: y });
          return {
            ...p,
            data: { x: p.x - r, y: p.y - n, enabled: { [f]: i, [h]: o } },
          };
        },
      }
    );
  },
  e1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: r, y: n, placement: s, rects: i, middlewareData: o } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = hr(e, t),
            c = { x: r, y: n },
            h = Kt(s),
            f = _d(h);
          let d = c[f],
            y = c[h];
          const p = hr(a, t),
            w =
              typeof p == "number"
                ? { mainAxis: p, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...p };
          if (l) {
            const v = f === "y" ? "height" : "width",
              _ = i.reference[f] - i.floating[v] + w.mainAxis,
              S = i.reference[f] + i.reference[v] - w.mainAxis;
            d < _ ? (d = _) : d > S && (d = S);
          }
          if (u) {
            var g, m;
            const v = f === "y" ? "width" : "height",
              _ = wv.has(fr(s)),
              S =
                i.reference[h] -
                i.floating[v] +
                ((_ && ((g = o.offset) == null ? void 0 : g[h])) || 0) +
                (_ ? 0 : w.crossAxis),
              E =
                i.reference[h] +
                i.reference[v] +
                (_ ? 0 : ((m = o.offset) == null ? void 0 : m[h]) || 0) -
                (_ ? w.crossAxis : 0);
            y < S ? (y = S) : y > E && (y = E);
          }
          return { [f]: d, [h]: y };
        },
      }
    );
  },
  t1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var r, n;
          const { placement: s, rects: i, platform: o, elements: a } = t,
            { apply: l = () => {}, ...u } = hr(e, t),
            c = await $i(t, u),
            h = fr(s),
            f = zs(s),
            d = Kt(s) === "y",
            { width: y, height: p } = i.floating;
          let w, g;
          h === "top" || h === "bottom"
            ? ((w = h),
              (g =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = h), (w = f === "end" ? "top" : "bottom"));
          const m = p - c.top - c.bottom,
            v = y - c.left - c.right,
            _ = Xr(p - c[w], m),
            S = Xr(y - c[g], v),
            E = !t.middlewareData.shift;
          let k = _,
            R = S;
          if (
            ((r = t.middlewareData.shift) != null && r.enabled.x && (R = v),
            (n = t.middlewareData.shift) != null && n.enabled.y && (k = m),
            E && !f)
          ) {
            const j = st(c.left, 0),
              B = st(c.right, 0),
              D = st(c.top, 0),
              Q = st(c.bottom, 0);
            d
              ? (R = y - 2 * (j !== 0 || B !== 0 ? j + B : st(c.left, c.right)))
              : (k =
                  p - 2 * (D !== 0 || Q !== 0 ? D + Q : st(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: R, availableHeight: k });
          const A = await o.getDimensions(a.floating);
          return y !== A.width || p !== A.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Ka() {
  return typeof window < "u";
}
function Bs(e) {
  return xv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ut(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Xt(e) {
  var t;
  return (t = (xv(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function xv(e) {
  return Ka() ? e instanceof Node || e instanceof ut(e).Node : !1;
}
function Ut(e) {
  return Ka() ? e instanceof Element || e instanceof ut(e).Element : !1;
}
function Yt(e) {
  return Ka() ? e instanceof HTMLElement || e instanceof ut(e).HTMLElement : !1;
}
function yf(e) {
  return !Ka() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot;
}
const r1 = new Set(["inline", "contents"]);
function eo(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: s } = Ft(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !r1.has(s);
}
const n1 = new Set(["table", "td", "th"]);
function s1(e) {
  return n1.has(Bs(e));
}
const i1 = [":popover-open", ":modal"];
function Ga(e) {
  return i1.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const o1 = ["transform", "translate", "scale", "rotate", "perspective"],
  a1 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  l1 = ["paint", "layout", "strict", "content"];
function Ed(e) {
  const t = kd(),
    r = Ut(e) ? Ft(e) : e;
  return (
    o1.some((n) => (r[n] ? r[n] !== "none" : !1)) ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!t && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!t && (r.filter ? r.filter !== "none" : !1)) ||
    a1.some((n) => (r.willChange || "").includes(n)) ||
    l1.some((n) => (r.contain || "").includes(n))
  );
}
function u1(e) {
  let t = Zr(e);
  for (; Yt(t) && !$s(t); ) {
    if (Ed(t)) return t;
    if (Ga(t)) return null;
    t = Zr(t);
  }
  return null;
}
function kd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const c1 = new Set(["html", "body", "#document"]);
function $s(e) {
  return c1.has(Bs(e));
}
function Ft(e) {
  return ut(e).getComputedStyle(e);
}
function Qa(e) {
  return Ut(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Zr(e) {
  if (Bs(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (yf(e) && e.host) || Xt(e);
  return yf(t) ? t.host : t;
}
function _v(e) {
  const t = Zr(e);
  return $s(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Yt(t) && eo(t)
    ? t
    : _v(t);
}
function Li(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = _v(e),
    i = s === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = ut(s);
  if (i) {
    const a = rc(o);
    return t.concat(
      o,
      o.visualViewport || [],
      eo(s) ? s : [],
      a && r ? Li(a) : []
    );
  }
  return t.concat(s, Li(s, [], r));
}
function rc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bv(e) {
  const t = Ft(e);
  let r = parseFloat(t.width) || 0,
    n = parseFloat(t.height) || 0;
  const s = Yt(e),
    i = s ? e.offsetWidth : r,
    o = s ? e.offsetHeight : n,
    a = ya(r) !== i || ya(n) !== o;
  return a && ((r = i), (n = o)), { width: r, height: n, $: a };
}
function Td(e) {
  return Ut(e) ? e : e.contextElement;
}
function vs(e) {
  const t = Td(e);
  if (!Yt(t)) return Jt(1);
  const r = t.getBoundingClientRect(),
    { width: n, height: s, $: i } = bv(t);
  let o = (i ? ya(r.width) : r.width) / n,
    a = (i ? ya(r.height) : r.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const d1 = Jt(0);
function Sv(e) {
  const t = ut(e);
  return !kd() || !t.visualViewport
    ? d1
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function h1(e, t, r) {
  return t === void 0 && (t = !1), !r || (t && r !== ut(e)) ? !1 : t;
}
function An(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(),
    i = Td(e);
  let o = Jt(1);
  t && (n ? Ut(n) && (o = vs(n)) : (o = vs(e)));
  const a = h1(i, r, n) ? Sv(i) : Jt(0);
  let l = (s.left + a.x) / o.x,
    u = (s.top + a.y) / o.y,
    c = s.width / o.x,
    h = s.height / o.y;
  if (i) {
    const f = ut(i),
      d = n && Ut(n) ? ut(n) : n;
    let y = f,
      p = rc(y);
    for (; p && n && d !== y; ) {
      const w = vs(p),
        g = p.getBoundingClientRect(),
        m = Ft(p),
        v = g.left + (p.clientLeft + parseFloat(m.paddingLeft)) * w.x,
        _ = g.top + (p.clientTop + parseFloat(m.paddingTop)) * w.y;
      (l *= w.x),
        (u *= w.y),
        (c *= w.x),
        (h *= w.y),
        (l += v),
        (u += _),
        (y = ut(p)),
        (p = rc(y));
    }
  }
  return xa({ width: c, height: h, x: l, y: u });
}
function Cd(e, t) {
  const r = Qa(e).scrollLeft;
  return t ? t.left + r : An(Xt(e)).left + r;
}
function Ev(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(),
    s = n.left + t.scrollLeft - (r ? 0 : Cd(e, n)),
    i = n.top + t.scrollTop;
  return { x: s, y: i };
}
function f1(e) {
  let { elements: t, rect: r, offsetParent: n, strategy: s } = e;
  const i = s === "fixed",
    o = Xt(n),
    a = t ? Ga(t.floating) : !1;
  if (n === o || (a && i)) return r;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = Jt(1);
  const c = Jt(0),
    h = Yt(n);
  if (
    (h || (!h && !i)) &&
    ((Bs(n) !== "body" || eo(o)) && (l = Qa(n)), Yt(n))
  ) {
    const d = An(n);
    (u = vs(n)), (c.x = d.x + n.clientLeft), (c.y = d.y + n.clientTop);
  }
  const f = o && !h && !i ? Ev(o, l, !0) : Jt(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: r.y * u.y - l.scrollTop * u.y + c.y + f.y,
  };
}
function p1(e) {
  return Array.from(e.getClientRects());
}
function m1(e) {
  const t = Xt(e),
    r = Qa(e),
    n = e.ownerDocument.body,
    s = st(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
    i = st(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -r.scrollLeft + Cd(e);
  const a = -r.scrollTop;
  return (
    Ft(n).direction === "rtl" && (o += st(t.clientWidth, n.clientWidth) - s),
    { width: s, height: i, x: o, y: a }
  );
}
function g1(e, t) {
  const r = ut(e),
    n = Xt(e),
    s = r.visualViewport;
  let i = n.clientWidth,
    o = n.clientHeight,
    a = 0,
    l = 0;
  if (s) {
    (i = s.width), (o = s.height);
    const u = kd();
    (!u || (u && t === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
  }
  return { width: i, height: o, x: a, y: l };
}
const v1 = new Set(["absolute", "fixed"]);
function y1(e, t) {
  const r = An(e, !0, t === "fixed"),
    n = r.top + e.clientTop,
    s = r.left + e.clientLeft,
    i = Yt(e) ? vs(e) : Jt(1),
    o = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = s * i.x,
    u = n * i.y;
  return { width: o, height: a, x: l, y: u };
}
function wf(e, t, r) {
  let n;
  if (t === "viewport") n = g1(e, r);
  else if (t === "document") n = m1(Xt(e));
  else if (Ut(t)) n = y1(t, r);
  else {
    const s = Sv(e);
    n = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return xa(n);
}
function kv(e, t) {
  const r = Zr(e);
  return r === t || !Ut(r) || $s(r)
    ? !1
    : Ft(r).position === "fixed" || kv(r, t);
}
function w1(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = Li(e, [], !1).filter((a) => Ut(a) && Bs(a) !== "body"),
    s = null;
  const i = Ft(e).position === "fixed";
  let o = i ? Zr(e) : e;
  for (; Ut(o) && !$s(o); ) {
    const a = Ft(o),
      l = Ed(o);
    !l && a.position === "fixed" && (s = null),
      (
        i
          ? !l && !s
          : (!l && a.position === "static" && !!s && v1.has(s.position)) ||
            (eo(o) && !l && kv(e, o))
      )
        ? (n = n.filter((c) => c !== o))
        : (s = a),
      (o = Zr(o));
  }
  return t.set(e, n), n;
}
function x1(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: s } = e;
  const o = [
      ...(r === "clippingAncestors"
        ? Ga(t)
          ? []
          : w1(t, this._c)
        : [].concat(r)),
      n,
    ],
    a = o[0],
    l = o.reduce((u, c) => {
      const h = wf(t, c, s);
      return (
        (u.top = st(h.top, u.top)),
        (u.right = Xr(h.right, u.right)),
        (u.bottom = Xr(h.bottom, u.bottom)),
        (u.left = st(h.left, u.left)),
        u
      );
    }, wf(t, a, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function _1(e) {
  const { width: t, height: r } = bv(e);
  return { width: t, height: r };
}
function b1(e, t, r) {
  const n = Yt(t),
    s = Xt(t),
    i = r === "fixed",
    o = An(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Jt(0);
  function u() {
    l.x = Cd(s);
  }
  if (n || (!n && !i))
    if (((Bs(t) !== "body" || eo(s)) && (a = Qa(t)), n)) {
      const d = An(t, !0, i, t);
      (l.x = d.x + t.clientLeft), (l.y = d.y + t.clientTop);
    } else s && u();
  i && !n && s && u();
  const c = s && !n && !i ? Ev(s, a) : Jt(0),
    h = o.left + a.scrollLeft - l.x - c.x,
    f = o.top + a.scrollTop - l.y - c.y;
  return { x: h, y: f, width: o.width, height: o.height };
}
function Vl(e) {
  return Ft(e).position === "static";
}
function xf(e, t) {
  if (!Yt(e) || Ft(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return Xt(e) === r && (r = r.ownerDocument.body), r;
}
function Tv(e, t) {
  const r = ut(e);
  if (Ga(e)) return r;
  if (!Yt(e)) {
    let s = Zr(e);
    for (; s && !$s(s); ) {
      if (Ut(s) && !Vl(s)) return s;
      s = Zr(s);
    }
    return r;
  }
  let n = xf(e, t);
  for (; n && s1(n) && Vl(n); ) n = xf(n, t);
  return n && $s(n) && Vl(n) && !Ed(n) ? r : n || u1(e) || r;
}
const S1 = async function (e) {
  const t = this.getOffsetParent || Tv,
    r = this.getDimensions,
    n = await r(e.floating);
  return {
    reference: b1(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: n.width, height: n.height },
  };
};
function E1(e) {
  return Ft(e).direction === "rtl";
}
const k1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: f1,
  getDocumentElement: Xt,
  getClippingRect: x1,
  getOffsetParent: Tv,
  getElementRects: S1,
  getClientRects: p1,
  getDimensions: _1,
  getScale: vs,
  isElement: Ut,
  isRTL: E1,
};
function Cv(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function T1(e, t) {
  let r = null,
    n;
  const s = Xt(e);
  function i() {
    var a;
    clearTimeout(n), (a = r) == null || a.disconnect(), (r = null);
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const u = e.getBoundingClientRect(),
      { left: c, top: h, width: f, height: d } = u;
    if ((a || t(), !f || !d)) return;
    const y = Co(h),
      p = Co(s.clientWidth - (c + f)),
      w = Co(s.clientHeight - (h + d)),
      g = Co(c),
      v = {
        rootMargin: -y + "px " + -p + "px " + -w + "px " + -g + "px",
        threshold: st(0, Xr(1, l)) || 1,
      };
    let _ = !0;
    function S(E) {
      const k = E[0].intersectionRatio;
      if (k !== l) {
        if (!_) return o();
        k
          ? o(!1, k)
          : (n = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      k === 1 && !Cv(u, e.getBoundingClientRect()) && o(), (_ = !1);
    }
    try {
      r = new IntersectionObserver(S, { ...v, root: s.ownerDocument });
    } catch {
      r = new IntersectionObserver(S, v);
    }
    r.observe(e);
  }
  return o(!0), i;
}
function C1(e, t, r, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = n,
    u = Td(e),
    c = s || i ? [...(u ? Li(u) : []), ...Li(t)] : [];
  c.forEach((g) => {
    s && g.addEventListener("scroll", r, { passive: !0 }),
      i && g.addEventListener("resize", r);
  });
  const h = u && a ? T1(u, r) : null;
  let f = -1,
    d = null;
  o &&
    ((d = new ResizeObserver((g) => {
      let [m] = g;
      m &&
        m.target === u &&
        d &&
        (d.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var v;
          (v = d) == null || v.observe(t);
        }))),
        r();
    })),
    u && !l && d.observe(u),
    d.observe(t));
  let y,
    p = l ? An(e) : null;
  l && w();
  function w() {
    const g = An(e);
    p && !Cv(p, g) && r(), (p = g), (y = requestAnimationFrame(w));
  }
  return (
    r(),
    () => {
      var g;
      c.forEach((m) => {
        s && m.removeEventListener("scroll", r),
          i && m.removeEventListener("resize", r);
      }),
        h == null || h(),
        (g = d) == null || g.disconnect(),
        (d = null),
        l && cancelAnimationFrame(y);
    }
  );
}
const R1 = Xb,
  P1 = Zb,
  O1 = Qb,
  A1 = t1,
  N1 = Jb,
  _f = Gb,
  j1 = e1,
  I1 = (e, t, r) => {
    const n = new Map(),
      s = { platform: k1, ...r },
      i = { ...s.platform, _c: n };
    return Kb(e, t, { ...s, platform: i });
  };
var $1 = typeof document < "u",
  L1 = function () {},
  Ko = $1 ? x.useLayoutEffect : L1;
function _a(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, n, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r !== t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!_a(e[n], t[n])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (r = s.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[n])) return !1;
    for (n = r; n-- !== 0; ) {
      const i = s[n];
      if (!(i === "_owner" && e.$$typeof) && !_a(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Rv(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bf(e, t) {
  const r = Rv(e);
  return Math.round(t * r) / r;
}
function Wl(e) {
  const t = x.useRef(e);
  return (
    Ko(() => {
      t.current = e;
    }),
    t
  );
}
function D1(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: r = "absolute",
      middleware: n = [],
      platform: s,
      elements: { reference: i, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, h] = x.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, d] = x.useState(n);
  _a(f, n) || d(n);
  const [y, p] = x.useState(null),
    [w, g] = x.useState(null),
    m = x.useCallback((C) => {
      C !== E.current && ((E.current = C), p(C));
    }, []),
    v = x.useCallback((C) => {
      C !== k.current && ((k.current = C), g(C));
    }, []),
    _ = i || y,
    S = o || w,
    E = x.useRef(null),
    k = x.useRef(null),
    R = x.useRef(c),
    A = l != null,
    j = Wl(l),
    B = Wl(s),
    D = Wl(u),
    Q = x.useCallback(() => {
      if (!E.current || !k.current) return;
      const C = { placement: t, strategy: r, middleware: f };
      B.current && (C.platform = B.current),
        I1(E.current, k.current, C).then((P) => {
          const $ = { ...P, isPositioned: D.current !== !1 };
          I.current &&
            !_a(R.current, $) &&
            ((R.current = $),
            Xi.flushSync(() => {
              h($);
            }));
        });
    }, [f, t, r, B, D]);
  Ko(() => {
    u === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), h((C) => ({ ...C, isPositioned: !1 })));
  }, [u]);
  const I = x.useRef(!1);
  Ko(
    () => (
      (I.current = !0),
      () => {
        I.current = !1;
      }
    ),
    []
  ),
    Ko(() => {
      if ((_ && (E.current = _), S && (k.current = S), _ && S)) {
        if (j.current) return j.current(_, S, Q);
        Q();
      }
    }, [_, S, Q, j, A]);
  const X = x.useMemo(
      () => ({ reference: E, floating: k, setReference: m, setFloating: v }),
      [m, v]
    ),
    V = x.useMemo(() => ({ reference: _, floating: S }), [_, S]),
    q = x.useMemo(() => {
      const C = { position: r, left: 0, top: 0 };
      if (!V.floating) return C;
      const P = bf(V.floating, c.x),
        $ = bf(V.floating, c.y);
      return a
        ? {
            ...C,
            transform: "translate(" + P + "px, " + $ + "px)",
            ...(Rv(V.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: P, top: $ };
    }, [r, a, V.floating, c.x, c.y]);
  return x.useMemo(
    () => ({ ...c, update: Q, refs: X, elements: V, floatingStyles: q }),
    [c, Q, X, V, q]
  );
}
const M1 = (e) => {
    function t(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(r) {
        const { element: n, padding: s } = typeof e == "function" ? e(r) : e;
        return n && t(n)
          ? n.current != null
            ? _f({ element: n.current, padding: s }).fn(r)
            : {}
          : n
          ? _f({ element: n, padding: s }).fn(r)
          : {};
      },
    };
  },
  U1 = (e, t) => ({ ...R1(e), options: [e, t] }),
  F1 = (e, t) => ({ ...P1(e), options: [e, t] }),
  z1 = (e, t) => ({ ...j1(e), options: [e, t] }),
  B1 = (e, t) => ({ ...O1(e), options: [e, t] }),
  V1 = (e, t) => ({ ...A1(e), options: [e, t] }),
  W1 = (e, t) => ({ ...N1(e), options: [e, t] }),
  H1 = (e, t) => ({ ...M1(e), options: [e, t] });
var q1 = "Arrow",
  Pv = x.forwardRef((e, t) => {
    const { children: r, width: n = 10, height: s = 5, ...i } = e;
    return b.jsx(et.svg, {
      ...i,
      ref: t,
      width: n,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : b.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Pv.displayName = q1;
var K1 = Pv;
function G1(e) {
  const [t, r] = x.useState(void 0);
  return (
    Yr(() => {
      if (e) {
        r({ width: e.offsetWidth, height: e.offsetHeight });
        const n = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const i = s[0];
          let o, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (o = u.inlineSize), (a = u.blockSize);
          } else (o = e.offsetWidth), (a = e.offsetHeight);
          r({ width: o, height: a });
        });
        return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
      } else r(void 0);
    }, [e]),
    t
  );
}
var Ov = "Popper",
  [Av, Nv] = Wa(Ov),
  [OC, jv] = Av(Ov),
  Iv = "PopperAnchor",
  $v = x.forwardRef((e, t) => {
    const { __scopePopper: r, virtualRef: n, ...s } = e,
      i = jv(Iv, r),
      o = x.useRef(null),
      a = Mt(t, o);
    return (
      x.useEffect(() => {
        i.onAnchorChange((n == null ? void 0 : n.current) || o.current);
      }),
      n ? null : b.jsx(et.div, { ...s, ref: a })
    );
  });
$v.displayName = Iv;
var Rd = "PopperContent",
  [Q1, J1] = Av(Rd),
  Lv = x.forwardRef((e, t) => {
    var re, $n, gr, nn, vr, Ln;
    const {
        __scopePopper: r,
        side: n = "bottom",
        sideOffset: s = 0,
        align: i = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: h = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: d = "optimized",
        onPlaced: y,
        ...p
      } = e,
      w = jv(Rd, r),
      [g, m] = x.useState(null),
      v = Mt(t, (yr) => m(yr)),
      [_, S] = x.useState(null),
      E = G1(_),
      k = (E == null ? void 0 : E.width) ?? 0,
      R = (E == null ? void 0 : E.height) ?? 0,
      A = n + (i !== "center" ? "-" + i : ""),
      j =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      B = Array.isArray(u) ? u : [u],
      D = B.length > 0,
      Q = { padding: j, boundary: B.filter(X1), altBoundary: D },
      {
        refs: I,
        floatingStyles: X,
        placement: V,
        isPositioned: q,
        middlewareData: C,
      } = D1({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...yr) =>
          C1(...yr, { animationFrame: d === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          U1({ mainAxis: s + R, alignmentAxis: o }),
          l &&
            F1({
              mainAxis: !0,
              crossAxis: !1,
              limiter: h === "partial" ? z1() : void 0,
              ...Q,
            }),
          l && B1({ ...Q }),
          V1({
            ...Q,
            apply: ({
              elements: yr,
              rects: ro,
              availableWidth: al,
              availableHeight: no,
            }) => {
              const { width: ll, height: Vs } = ro.reference,
                Dn = yr.floating.style;
              Dn.setProperty("--radix-popper-available-width", `${al}px`),
                Dn.setProperty("--radix-popper-available-height", `${no}px`),
                Dn.setProperty("--radix-popper-anchor-width", `${ll}px`),
                Dn.setProperty("--radix-popper-anchor-height", `${Vs}px`);
            },
          }),
          _ && H1({ element: _, padding: a }),
          Z1({ arrowWidth: k, arrowHeight: R }),
          f && W1({ strategy: "referenceHidden", ...Q }),
        ],
      }),
      [P, $] = Uv(V),
      K = Jr(y);
    Yr(() => {
      q && (K == null || K());
    }, [q, K]);
    const U = (re = C.arrow) == null ? void 0 : re.x,
      J = ($n = C.arrow) == null ? void 0 : $n.y,
      Z = ((gr = C.arrow) == null ? void 0 : gr.centerOffset) !== 0,
      [xe, Ie] = x.useState();
    return (
      Yr(() => {
        g && Ie(window.getComputedStyle(g).zIndex);
      }, [g]),
      b.jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...X,
          transform: q ? X.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: xe,
          "--radix-popper-transform-origin": [
            (nn = C.transformOrigin) == null ? void 0 : nn.x,
            (vr = C.transformOrigin) == null ? void 0 : vr.y,
          ].join(" "),
          ...(((Ln = C.hide) == null ? void 0 : Ln.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: b.jsx(Q1, {
          scope: r,
          placedSide: P,
          onArrowChange: S,
          arrowX: U,
          arrowY: J,
          shouldHideArrow: Z,
          children: b.jsx(et.div, {
            "data-side": P,
            "data-align": $,
            ...p,
            ref: v,
            style: { ...p.style, animation: q ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Lv.displayName = Rd;
var Dv = "PopperArrow",
  Y1 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Mv = x.forwardRef(function (t, r) {
    const { __scopePopper: n, ...s } = t,
      i = J1(Dv, n),
      o = Y1[i.placedSide];
    return b.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: b.jsx(K1, {
        ...s,
        ref: r,
        style: { ...s.style, display: "block" },
      }),
    });
  });
Mv.displayName = Dv;
function X1(e) {
  return e !== null;
}
var Z1 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, g, m;
    const { placement: r, rects: n, middlewareData: s } = t,
      o = ((w = s.arrow) == null ? void 0 : w.centerOffset) !== 0,
      a = o ? 0 : e.arrowWidth,
      l = o ? 0 : e.arrowHeight,
      [u, c] = Uv(r),
      h = { start: "0%", center: "50%", end: "100%" }[c],
      f = (((g = s.arrow) == null ? void 0 : g.x) ?? 0) + a / 2,
      d = (((m = s.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
    let y = "",
      p = "";
    return (
      u === "bottom"
        ? ((y = o ? h : `${f}px`), (p = `${-l}px`))
        : u === "top"
        ? ((y = o ? h : `${f}px`), (p = `${n.floating.height + l}px`))
        : u === "right"
        ? ((y = `${-l}px`), (p = o ? h : `${d}px`))
        : u === "left" &&
          ((y = `${n.floating.width + l}px`), (p = o ? h : `${d}px`)),
      { data: { x: y, y: p } }
    );
  },
});
function Uv(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var eS = $v,
  tS = Lv,
  rS = Mv,
  [Ja, AC] = Wa("Tooltip", [Nv]),
  Pd = Nv(),
  Fv = "TooltipProvider",
  nS = 700,
  Sf = "tooltip.open",
  [sS, zv] = Ja(Fv),
  Bv = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: r = nS,
        skipDelayDuration: n = 300,
        disableHoverableContent: s = !1,
        children: i,
      } = e,
      o = x.useRef(!0),
      a = x.useRef(!1),
      l = x.useRef(0);
    return (
      x.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      b.jsx(sS, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: r,
        onOpen: x.useCallback(() => {
          window.clearTimeout(l.current), (o.current = !1);
        }, []),
        onClose: x.useCallback(() => {
          window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (o.current = !0), n));
        }, [n]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: x.useCallback((u) => {
          a.current = u;
        }, []),
        disableHoverableContent: s,
        children: i,
      })
    );
  };
Bv.displayName = Fv;
var Vv = "Tooltip",
  [NC, Ya] = Ja(Vv),
  nc = "TooltipTrigger",
  iS = x.forwardRef((e, t) => {
    const { __scopeTooltip: r, ...n } = e,
      s = Ya(nc, r),
      i = zv(nc, r),
      o = Pd(r),
      a = x.useRef(null),
      l = Mt(t, a, s.onTriggerChange),
      u = x.useRef(!1),
      c = x.useRef(!1),
      h = x.useCallback(() => (u.current = !1), []);
    return (
      x.useEffect(
        () => () => document.removeEventListener("pointerup", h),
        [h]
      ),
      b.jsx(eS, {
        asChild: !0,
        ...o,
        children: b.jsx(et.button, {
          "aria-describedby": s.open ? s.contentId : void 0,
          "data-state": s.stateAttribute,
          ...n,
          ref: l,
          onPointerMove: ke(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (s.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: ke(e.onPointerLeave, () => {
            s.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: ke(e.onPointerDown, () => {
            s.open && s.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", h, { once: !0 });
          }),
          onFocus: ke(e.onFocus, () => {
            u.current || s.onOpen();
          }),
          onBlur: ke(e.onBlur, s.onClose),
          onClick: ke(e.onClick, s.onClose),
        }),
      })
    );
  });
iS.displayName = nc;
var oS = "TooltipPortal",
  [jC, aS] = Ja(oS, { forceMount: void 0 }),
  Ls = "TooltipContent",
  Wv = x.forwardRef((e, t) => {
    const r = aS(Ls, e.__scopeTooltip),
      { forceMount: n = r.forceMount, side: s = "top", ...i } = e,
      o = Ya(Ls, e.__scopeTooltip);
    return b.jsx(gd, {
      present: n || o.open,
      children: o.disableHoverableContent
        ? b.jsx(Hv, { side: s, ...i, ref: t })
        : b.jsx(lS, { side: s, ...i, ref: t }),
    });
  }),
  lS = x.forwardRef((e, t) => {
    const r = Ya(Ls, e.__scopeTooltip),
      n = zv(Ls, e.__scopeTooltip),
      s = x.useRef(null),
      i = Mt(t, s),
      [o, a] = x.useState(null),
      { trigger: l, onClose: u } = r,
      c = s.current,
      { onPointerInTransitChange: h } = n,
      f = x.useCallback(() => {
        a(null), h(!1);
      }, [h]),
      d = x.useCallback(
        (y, p) => {
          const w = y.currentTarget,
            g = { x: y.clientX, y: y.clientY },
            m = fS(g, w.getBoundingClientRect()),
            v = pS(g, m),
            _ = mS(p.getBoundingClientRect()),
            S = vS([...v, ..._]);
          a(S), h(!0);
        },
        [h]
      );
    return (
      x.useEffect(() => () => f(), [f]),
      x.useEffect(() => {
        if (l && c) {
          const y = (w) => d(w, c),
            p = (w) => d(w, l);
          return (
            l.addEventListener("pointerleave", y),
            c.addEventListener("pointerleave", p),
            () => {
              l.removeEventListener("pointerleave", y),
                c.removeEventListener("pointerleave", p);
            }
          );
        }
      }, [l, c, d, f]),
      x.useEffect(() => {
        if (o) {
          const y = (p) => {
            const w = p.target,
              g = { x: p.clientX, y: p.clientY },
              m =
                (l == null ? void 0 : l.contains(w)) ||
                (c == null ? void 0 : c.contains(w)),
              v = !gS(g, o);
            m ? f() : v && (f(), u());
          };
          return (
            document.addEventListener("pointermove", y),
            () => document.removeEventListener("pointermove", y)
          );
        }
      }, [l, c, o, u, f]),
      b.jsx(Hv, { ...e, ref: i })
    );
  }),
  [uS, cS] = Ja(Vv, { isInside: !1 }),
  dS = gx("TooltipContent"),
  Hv = x.forwardRef((e, t) => {
    const {
        __scopeTooltip: r,
        children: n,
        "aria-label": s,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        ...a
      } = e,
      l = Ya(Ls, r),
      u = Pd(r),
      { onClose: c } = l;
    return (
      x.useEffect(
        () => (
          document.addEventListener(Sf, c),
          () => document.removeEventListener(Sf, c)
        ),
        [c]
      ),
      x.useEffect(() => {
        if (l.trigger) {
          const h = (f) => {
            const d = f.target;
            d != null && d.contains(l.trigger) && c();
          };
          return (
            window.addEventListener("scroll", h, { capture: !0 }),
            () => window.removeEventListener("scroll", h, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      b.jsx(md, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: c,
        children: b.jsxs(tS, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            b.jsx(dS, { children: n }),
            b.jsx(uS, {
              scope: r,
              isInside: !0,
              children: b.jsx(zx, {
                id: l.contentId,
                role: "tooltip",
                children: s || n,
              }),
            }),
          ],
        }),
      })
    );
  });
Wv.displayName = Ls;
var qv = "TooltipArrow",
  hS = x.forwardRef((e, t) => {
    const { __scopeTooltip: r, ...n } = e,
      s = Pd(r);
    return cS(qv, r).isInside ? null : b.jsx(rS, { ...s, ...n, ref: t });
  });
hS.displayName = qv;
function fS(e, t) {
  const r = Math.abs(t.top - e.y),
    n = Math.abs(t.bottom - e.y),
    s = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(r, n, s, i)) {
    case i:
      return "left";
    case s:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function pS(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push({ x: e.x - r, y: e.y + r }, { x: e.x + r, y: e.y + r });
      break;
    case "bottom":
      n.push({ x: e.x - r, y: e.y - r }, { x: e.x + r, y: e.y - r });
      break;
    case "left":
      n.push({ x: e.x + r, y: e.y - r }, { x: e.x + r, y: e.y + r });
      break;
    case "right":
      n.push({ x: e.x - r, y: e.y - r }, { x: e.x - r, y: e.y + r });
      break;
  }
  return n;
}
function mS(e) {
  const { top: t, right: r, bottom: n, left: s } = e;
  return [
    { x: s, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: s, y: n },
  ];
}
function gS(e, t) {
  const { x: r, y: n } = e;
  let s = !1;
  for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
    const a = t[i],
      l = t[o],
      u = a.x,
      c = a.y,
      h = l.x,
      f = l.y;
    c > n != f > n && r < ((h - u) * (n - c)) / (f - c) + u && (s = !s);
  }
  return s;
}
function vS(e) {
  const t = e.slice();
  return (
    t.sort((r, n) =>
      r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0
    ),
    yS(t)
  );
}
function yS(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        o = t[t.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) t.pop();
      else break;
    }
    t.push(s);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const s = e[n];
    for (; r.length >= 2; ) {
      const i = r[r.length - 1],
        o = r[r.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) r.pop();
      else break;
    }
    r.push(s);
  }
  return (
    r.pop(),
    t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y
      ? t
      : t.concat(r)
  );
}
var wS = Bv,
  Kv = Wv;
const xS = wS,
  _S = x.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) =>
    b.jsx(Kv, {
      ref: n,
      sideOffset: t,
      className: In(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...r,
    })
  );
_S.displayName = Kv.displayName;
var Xa = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Za = typeof window > "u" || "Deno" in globalThis;
function Rt() {}
function bS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function SS(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function ES(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function sc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ef(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a,
  } = e;
  if (o) {
    if (n) {
      if (t.queryHash !== Od(o, t.options)) return !1;
    } else if (!Mi(t.queryKey, o)) return !1;
  }
  if (r !== "all") {
    const l = t.isActive();
    if ((r === "active" && !l) || (r === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function kf(e, t) {
  const { exact: r, status: n, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (Di(t.options.mutationKey) !== Di(i)) return !1;
    } else if (!Mi(t.options.mutationKey, i)) return !1;
  }
  return !((n && t.state.status !== n) || (s && !s(t)));
}
function Od(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Di)(e);
}
function Di(e) {
  return JSON.stringify(e, (t, r) =>
    ic(r)
      ? Object.keys(r)
          .sort()
          .reduce((n, s) => ((n[s] = r[s]), n), {})
      : r
  );
}
function Mi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((r) => Mi(e[r], t[r]))
    : !1;
}
function Gv(e, t) {
  if (e === t) return e;
  const r = Tf(e) && Tf(t);
  if (r || (ic(e) && ic(t))) {
    const n = r ? e : Object.keys(e),
      s = n.length,
      i = r ? t : Object.keys(t),
      o = i.length,
      a = r ? [] : {},
      l = new Set(n);
    let u = 0;
    for (let c = 0; c < o; c++) {
      const h = r ? c : i[c];
      ((!r && l.has(h)) || r) && e[h] === void 0 && t[h] === void 0
        ? ((a[h] = void 0), u++)
        : ((a[h] = Gv(e[h], t[h])), a[h] === e[h] && e[h] !== void 0 && u++);
    }
    return s === o && u === s ? e : a;
  }
  return t;
}
function Tf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ic(e) {
  if (!Cf(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(
    !Cf(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Cf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function TS(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function CS(e, t, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
    ? Gv(e, t)
    : t;
}
function RS(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function PS(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Ad = Symbol();
function Qv(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Ad
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var yn,
  Nr,
  xs,
  ap,
  OS =
    ((ap = class extends Xa {
      constructor() {
        super();
        te(this, yn);
        te(this, Nr);
        te(this, xs);
        H(this, xs, (t) => {
          if (!Za && window.addEventListener) {
            const r = () => t();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, Nr) || this.setEventListener(T(this, xs));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, Nr)) == null || t.call(this), H(this, Nr, void 0));
      }
      setEventListener(t) {
        var r;
        H(this, xs, t),
          (r = T(this, Nr)) == null || r.call(this),
          H(
            this,
            Nr,
            t((n) => {
              typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        T(this, yn) !== t && (H(this, yn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof T(this, yn) == "boolean"
          ? T(this, yn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (yn = new WeakMap()),
    (Nr = new WeakMap()),
    (xs = new WeakMap()),
    ap),
  Jv = new OS(),
  _s,
  jr,
  bs,
  lp,
  AS =
    ((lp = class extends Xa {
      constructor() {
        super();
        te(this, _s, !0);
        te(this, jr);
        te(this, bs);
        H(this, bs, (t) => {
          if (!Za && window.addEventListener) {
            const r = () => t(!0),
              n = () => t(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", n, !1),
              () => {
                window.removeEventListener("online", r),
                  window.removeEventListener("offline", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, jr) || this.setEventListener(T(this, bs));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, jr)) == null || t.call(this), H(this, jr, void 0));
      }
      setEventListener(t) {
        var r;
        H(this, bs, t),
          (r = T(this, jr)) == null || r.call(this),
          H(this, jr, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        T(this, _s) !== t &&
          (H(this, _s, t),
          this.listeners.forEach((n) => {
            n(t);
          }));
      }
      isOnline() {
        return T(this, _s);
      }
    }),
    (_s = new WeakMap()),
    (jr = new WeakMap()),
    (bs = new WeakMap()),
    lp),
  ba = new AS();
function NS() {
  let e, t;
  const r = new Promise((s, i) => {
    (e = s), (t = i);
  });
  (r.status = "pending"), r.catch(() => {});
  function n(s) {
    Object.assign(r, s), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (s) => {
      n({ status: "fulfilled", value: s }), e(s);
    }),
    (r.reject = (s) => {
      n({ status: "rejected", reason: s }), t(s);
    }),
    r
  );
}
function jS(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Yv(e) {
  return (e ?? "online") === "online" ? ba.isOnline() : !0;
}
var Xv = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Hl(e) {
  return e instanceof Xv;
}
function Zv(e) {
  let t = !1,
    r = 0,
    n = !1,
    s;
  const i = NS(),
    o = (p) => {
      var w;
      n || (f(new Xv(p)), (w = e.abort) == null || w.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      Jv.isFocused() &&
      (e.networkMode === "always" || ba.isOnline()) &&
      e.canRun(),
    c = () => Yv(e.networkMode) && e.canRun(),
    h = (p) => {
      var w;
      n ||
        ((n = !0),
        (w = e.onSuccess) == null || w.call(e, p),
        s == null || s(),
        i.resolve(p));
    },
    f = (p) => {
      var w;
      n ||
        ((n = !0),
        (w = e.onError) == null || w.call(e, p),
        s == null || s(),
        i.reject(p));
    },
    d = () =>
      new Promise((p) => {
        var w;
        (s = (g) => {
          (n || u()) && p(g);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var p;
        (s = void 0), n || (p = e.onContinue) == null || p.call(e);
      }),
    y = () => {
      if (n) return;
      let p;
      const w = r === 0 ? e.initialPromise : void 0;
      try {
        p = w ?? e.fn();
      } catch (g) {
        p = Promise.reject(g);
      }
      Promise.resolve(p)
        .then(h)
        .catch((g) => {
          var E;
          if (n) return;
          const m = e.retry ?? (Za ? 0 : 3),
            v = e.retryDelay ?? jS,
            _ = typeof v == "function" ? v(r, g) : v,
            S =
              m === !0 ||
              (typeof m == "number" && r < m) ||
              (typeof m == "function" && m(r, g));
          if (t || !S) {
            f(g);
            return;
          }
          r++,
            (E = e.onFail) == null || E.call(e, r, g),
            TS(_)
              .then(() => (u() ? void 0 : d()))
              .then(() => {
                t ? f(g) : y();
              });
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (s == null || s(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? y() : d().then(y), i),
  };
}
var IS = (e) => setTimeout(e, 0);
function $S() {
  let e = [],
    t = 0,
    r = (a) => {
      a();
    },
    n = (a) => {
      a();
    },
    s = IS;
  const i = (a) => {
      t
        ? e.push(a)
        : s(() => {
            r(a);
          });
    },
    o = () => {
      const a = e;
      (e = []),
        a.length &&
          s(() => {
            n(() => {
              a.forEach((l) => {
                r(l);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        t--, t || o();
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      r = a;
    },
    setBatchNotifyFunction: (a) => {
      n = a;
    },
    setScheduler: (a) => {
      s = a;
    },
  };
}
var Ve = $S(),
  wn,
  up,
  ey =
    ((up = class {
      constructor() {
        te(this, wn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          SS(this.gcTime) &&
            H(
              this,
              wn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Za ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        T(this, wn) && (clearTimeout(T(this, wn)), H(this, wn, void 0));
      }
    }),
    (wn = new WeakMap()),
    up),
  Ss,
  xn,
  pt,
  _n,
  Me,
  Hi,
  bn,
  Ot,
  er,
  cp,
  LS =
    ((cp = class extends ey {
      constructor(t) {
        super();
        te(this, Ot);
        te(this, Ss);
        te(this, xn);
        te(this, pt);
        te(this, _n);
        te(this, Me);
        te(this, Hi);
        te(this, bn);
        H(this, bn, !1),
          H(this, Hi, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          H(this, _n, t.client),
          H(this, pt, T(this, _n).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          H(this, Ss, MS(this.options)),
          (this.state = t.state ?? T(this, Ss)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = T(this, Me)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...T(this, Hi), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          T(this, pt).remove(this);
      }
      setData(t, r) {
        const n = CS(this.state.data, t, this.options);
        return (
          $e(this, Ot, er).call(this, {
            data: n,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          n
        );
      }
      setState(t, r) {
        $e(this, Ot, er).call(this, {
          type: "setState",
          state: t,
          setStateOptions: r,
        });
      }
      cancel(t) {
        var n, s;
        const r = (n = T(this, Me)) == null ? void 0 : n.promise;
        return (
          (s = T(this, Me)) == null || s.cancel(t),
          r ? r.then(Rt).catch(Rt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(T(this, Ss));
      }
      isActive() {
        return this.observers.some((t) => kS(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Ad ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => sc(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !ES(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var r;
        const t = this.observers.find((n) => n.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = T(this, Me)) == null || r.continue();
      }
      onOnline() {
        var r;
        const t = this.observers.find((n) => n.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = T(this, Me)) == null || r.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          T(this, pt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((r) => r !== t)),
          this.observers.length ||
            (T(this, Me) &&
              (T(this, bn)
                ? T(this, Me).cancel({ revert: !0 })
                : T(this, Me).cancelRetry()),
            this.scheduleGc()),
          T(this, pt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          $e(this, Ot, er).call(this, { type: "invalidate" });
      }
      fetch(t, r) {
        var u, c, h;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (T(this, Me))
            return T(this, Me).continueRetry(), T(this, Me).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((d) => d.options.queryFn);
          f && this.setOptions(f.options);
        }
        const n = new AbortController(),
          s = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (H(this, bn, !0), n.signal),
            });
          },
          i = () => {
            const f = Qv(this.options, r),
              y = (() => {
                const p = {
                  client: T(this, _n),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return s(p), p;
              })();
            return (
              H(this, bn, !1),
              this.options.persister ? this.options.persister(f, y, this) : f(y)
            );
          },
          a = (() => {
            const f = {
              fetchOptions: r,
              options: this.options,
              queryKey: this.queryKey,
              client: T(this, _n),
              state: this.state,
              fetchFn: i,
            };
            return s(f), f;
          })();
        (u = this.options.behavior) == null || u.onFetch(a, this),
          H(this, xn, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            $e(this, Ot, er).call(this, {
              type: "fetch",
              meta: (h = a.fetchOptions) == null ? void 0 : h.meta,
            });
        const l = (f) => {
          var d, y, p, w;
          (Hl(f) && f.silent) ||
            $e(this, Ot, er).call(this, { type: "error", error: f }),
            Hl(f) ||
              ((y = (d = T(this, pt).config).onError) == null ||
                y.call(d, f, this),
              (w = (p = T(this, pt).config).onSettled) == null ||
                w.call(p, this.state.data, f, this)),
            this.scheduleGc();
        };
        return (
          H(
            this,
            Me,
            Zv({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: a.fetchFn,
              abort: n.abort.bind(n),
              onSuccess: (f) => {
                var d, y, p, w;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (g) {
                  l(g);
                  return;
                }
                (y = (d = T(this, pt).config).onSuccess) == null ||
                  y.call(d, f, this),
                  (w = (p = T(this, pt).config).onSettled) == null ||
                    w.call(p, f, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (f, d) => {
                $e(this, Ot, er).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: d,
                });
              },
              onPause: () => {
                $e(this, Ot, er).call(this, { type: "pause" });
              },
              onContinue: () => {
                $e(this, Ot, er).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            })
          ),
          T(this, Me).start()
        );
      }
    }),
    (Ss = new WeakMap()),
    (xn = new WeakMap()),
    (pt = new WeakMap()),
    (_n = new WeakMap()),
    (Me = new WeakMap()),
    (Hi = new WeakMap()),
    (bn = new WeakMap()),
    (Ot = new WeakSet()),
    (er = function (t) {
      const r = (n) => {
        switch (t.type) {
          case "failed":
            return {
              ...n,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...n, fetchStatus: "paused" };
          case "continue":
            return { ...n, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...n,
              ...DS(n.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              H(this, xn, void 0),
              {
                ...n,
                data: t.data,
                dataUpdateCount: n.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const s = t.error;
            return Hl(s) && s.revert && T(this, xn)
              ? { ...T(this, xn), fetchStatus: "idle" }
              : {
                  ...n,
                  error: s,
                  errorUpdateCount: n.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: n.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...n, isInvalidated: !0 };
          case "setState":
            return { ...n, ...t.state };
        }
      };
      (this.state = r(this.state)),
        Ve.batch(() => {
          this.observers.forEach((n) => {
            n.onQueryUpdate();
          }),
            T(this, pt).notify({ query: this, type: "updated", action: t });
        });
    }),
    cp);
function DS(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Yv(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function MS(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    r = t !== void 0,
    n = r
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Vt,
  dp,
  US =
    ((dp = class extends Xa {
      constructor(t = {}) {
        super();
        te(this, Vt);
        (this.config = t), H(this, Vt, new Map());
      }
      build(t, r, n) {
        const s = r.queryKey,
          i = r.queryHash ?? Od(s, r);
        let o = this.get(i);
        return (
          o ||
            ((o = new LS({
              client: t,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(r),
              state: n,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        T(this, Vt).has(t.queryHash) ||
          (T(this, Vt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const r = T(this, Vt).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && T(this, Vt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ve.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return T(this, Vt).get(t);
      }
      getAll() {
        return [...T(this, Vt).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((n) => Ef(r, n));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((n) => Ef(t, n)) : r;
      }
      notify(t) {
        Ve.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      onFocus() {
        Ve.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ve.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Vt = new WeakMap()),
    dp),
  Wt,
  ze,
  Sn,
  Ht,
  kr,
  hp,
  FS =
    ((hp = class extends ey {
      constructor(t) {
        super();
        te(this, Ht);
        te(this, Wt);
        te(this, ze);
        te(this, Sn);
        (this.mutationId = t.mutationId),
          H(this, ze, t.mutationCache),
          H(this, Wt, []),
          (this.state = t.state || zS()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        T(this, Wt).includes(t) ||
          (T(this, Wt).push(t),
          this.clearGcTimeout(),
          T(this, ze).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        H(
          this,
          Wt,
          T(this, Wt).filter((r) => r !== t)
        ),
          this.scheduleGc(),
          T(this, ze).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        T(this, Wt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : T(this, ze).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = T(this, Sn)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, o, a, l, u, c, h, f, d, y, p, w, g, m, v, _, S, E, k, R;
        const r = () => {
          $e(this, Ht, kr).call(this, { type: "continue" });
        };
        H(
          this,
          Sn,
          Zv({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, j) => {
              $e(this, Ht, kr).call(this, {
                type: "failed",
                failureCount: A,
                error: j,
              });
            },
            onPause: () => {
              $e(this, Ht, kr).call(this, { type: "pause" });
            },
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => T(this, ze).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          s = !T(this, Sn).canStart();
        try {
          if (n) r();
          else {
            $e(this, Ht, kr).call(this, {
              type: "pending",
              variables: t,
              isPaused: s,
            }),
              await ((o = (i = T(this, ze).config).onMutate) == null
                ? void 0
                : o.call(i, t, this));
            const j = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            j !== this.state.context &&
              $e(this, Ht, kr).call(this, {
                type: "pending",
                context: j,
                variables: t,
                isPaused: s,
              });
          }
          const A = await T(this, Sn).start();
          return (
            await ((c = (u = T(this, ze).config).onSuccess) == null
              ? void 0
              : c.call(u, A, t, this.state.context, this)),
            await ((f = (h = this.options).onSuccess) == null
              ? void 0
              : f.call(h, A, t, this.state.context)),
            await ((y = (d = T(this, ze).config).onSettled) == null
              ? void 0
              : y.call(
                  d,
                  A,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((w = (p = this.options).onSettled) == null
              ? void 0
              : w.call(p, A, null, t, this.state.context)),
            $e(this, Ht, kr).call(this, { type: "success", data: A }),
            A
          );
        } catch (A) {
          try {
            throw (
              (await ((m = (g = T(this, ze).config).onError) == null
                ? void 0
                : m.call(g, A, t, this.state.context, this)),
              await ((_ = (v = this.options).onError) == null
                ? void 0
                : _.call(v, A, t, this.state.context)),
              await ((E = (S = T(this, ze).config).onSettled) == null
                ? void 0
                : E.call(
                    S,
                    void 0,
                    A,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((R = (k = this.options).onSettled) == null
                ? void 0
                : R.call(k, void 0, A, t, this.state.context)),
              A)
            );
          } finally {
            $e(this, Ht, kr).call(this, { type: "error", error: A });
          }
        } finally {
          T(this, ze).runNext(this);
        }
      }
    }),
    (Wt = new WeakMap()),
    (ze = new WeakMap()),
    (Sn = new WeakMap()),
    (Ht = new WeakSet()),
    (kr = function (t) {
      const r = (n) => {
        switch (t.type) {
          case "failed":
            return {
              ...n,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...n, isPaused: !0 };
          case "continue":
            return { ...n, isPaused: !1 };
          case "pending":
            return {
              ...n,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...n,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...n,
              data: void 0,
              error: t.error,
              failureCount: n.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = r(this.state)),
        Ve.batch(() => {
          T(this, Wt).forEach((n) => {
            n.onMutationUpdate(t);
          }),
            T(this, ze).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    hp);
function zS() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var sr,
  At,
  qi,
  fp,
  BS =
    ((fp = class extends Xa {
      constructor(t = {}) {
        super();
        te(this, sr);
        te(this, At);
        te(this, qi);
        (this.config = t),
          H(this, sr, new Set()),
          H(this, At, new Map()),
          H(this, qi, 0);
      }
      build(t, r, n) {
        const s = new FS({
          mutationCache: this,
          mutationId: ++io(this, qi)._,
          options: t.defaultMutationOptions(r),
          state: n,
        });
        return this.add(s), s;
      }
      add(t) {
        T(this, sr).add(t);
        const r = Ro(t);
        if (typeof r == "string") {
          const n = T(this, At).get(r);
          n ? n.push(t) : T(this, At).set(r, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (T(this, sr).delete(t)) {
          const r = Ro(t);
          if (typeof r == "string") {
            const n = T(this, At).get(r);
            if (n)
              if (n.length > 1) {
                const s = n.indexOf(t);
                s !== -1 && n.splice(s, 1);
              } else n[0] === t && T(this, At).delete(r);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const r = Ro(t);
        if (typeof r == "string") {
          const n = T(this, At).get(r),
            s =
              n == null ? void 0 : n.find((i) => i.state.status === "pending");
          return !s || s === t;
        } else return !0;
      }
      runNext(t) {
        var n;
        const r = Ro(t);
        if (typeof r == "string") {
          const s =
            (n = T(this, At).get(r)) == null
              ? void 0
              : n.find((i) => i !== t && i.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Ve.batch(() => {
          T(this, sr).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            T(this, sr).clear(),
            T(this, At).clear();
        });
      }
      getAll() {
        return Array.from(T(this, sr));
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((n) => kf(r, n));
      }
      findAll(t = {}) {
        return this.getAll().filter((r) => kf(t, r));
      }
      notify(t) {
        Ve.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((r) => r.state.isPaused);
        return Ve.batch(() =>
          Promise.all(t.map((r) => r.continue().catch(Rt)))
        );
      }
    }),
    (sr = new WeakMap()),
    (At = new WeakMap()),
    (qi = new WeakMap()),
    fp);
function Ro(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Rf(e) {
  return {
    onFetch: (t, r) => {
      var c, h, f, d, y;
      const n = t.options,
        s =
          (f =
            (h = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : h.fetchMore) == null
            ? void 0
            : f.direction,
        i = ((d = t.state.data) == null ? void 0 : d.pages) || [],
        o = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let p = !1;
        const w = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (p = !0)
                  : t.signal.addEventListener("abort", () => {
                      p = !0;
                    }),
                t.signal
              ),
            });
          },
          g = Qv(t.options, t.fetchOptions),
          m = async (v, _, S) => {
            if (p) return Promise.reject();
            if (_ == null && v.pages.length) return Promise.resolve(v);
            const k = (() => {
                const B = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: _,
                  direction: S ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return w(B), B;
              })(),
              R = await g(k),
              { maxPages: A } = t.options,
              j = S ? PS : RS;
            return {
              pages: j(v.pages, R, A),
              pageParams: j(v.pageParams, _, A),
            };
          };
        if (s && i.length) {
          const v = s === "backward",
            _ = v ? VS : Pf,
            S = { pages: i, pageParams: o },
            E = _(n, S);
          a = await m(S, E, v);
        } else {
          const v = e ?? i.length;
          do {
            const _ = l === 0 ? o[0] ?? n.initialPageParam : Pf(n, a);
            if (l > 0 && _ == null) break;
            (a = await m(a, _)), l++;
          } while (l < v);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var p, w;
            return (w = (p = t.options).persister) == null
              ? void 0
              : w.call(
                  p,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  r
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Pf(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
}
function VS(e, { pages: t, pageParams: r }) {
  var n;
  return t.length > 0
    ? (n = e.getPreviousPageParam) == null
      ? void 0
      : n.call(e, t[0], t, r[0], r)
    : void 0;
}
var ge,
  Ir,
  $r,
  Es,
  ks,
  Lr,
  Ts,
  Cs,
  pp,
  WS =
    ((pp = class {
      constructor(e = {}) {
        te(this, ge);
        te(this, Ir);
        te(this, $r);
        te(this, Es);
        te(this, ks);
        te(this, Lr);
        te(this, Ts);
        te(this, Cs);
        H(this, ge, e.queryCache || new US()),
          H(this, Ir, e.mutationCache || new BS()),
          H(this, $r, e.defaultOptions || {}),
          H(this, Es, new Map()),
          H(this, ks, new Map()),
          H(this, Lr, 0);
      }
      mount() {
        io(this, Lr)._++,
          T(this, Lr) === 1 &&
            (H(
              this,
              Ts,
              Jv.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, ge).onFocus());
              })
            ),
            H(
              this,
              Cs,
              ba.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, ge).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        io(this, Lr)._--,
          T(this, Lr) === 0 &&
            ((e = T(this, Ts)) == null || e.call(this),
            H(this, Ts, void 0),
            (t = T(this, Cs)) == null || t.call(this),
            H(this, Cs, void 0));
      }
      isFetching(e) {
        return T(this, ge).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return T(this, Ir).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = T(this, ge).get(t.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          r = T(this, ge).build(this, t),
          n = r.state.data;
        return n === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              r.isStaleByTime(sc(t.staleTime, r)) &&
              this.prefetchQuery(t),
            Promise.resolve(n));
      }
      getQueriesData(e) {
        return T(this, ge)
          .findAll(e)
          .map(({ queryKey: t, state: r }) => {
            const n = r.data;
            return [t, n];
          });
      }
      setQueryData(e, t, r) {
        const n = this.defaultQueryOptions({ queryKey: e }),
          s = T(this, ge).get(n.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = bS(t, i);
        if (o !== void 0)
          return T(this, ge)
            .build(this, n)
            .setData(o, { ...r, manual: !0 });
      }
      setQueriesData(e, t, r) {
        return Ve.batch(() =>
          T(this, ge)
            .findAll(e)
            .map(({ queryKey: n }) => [n, this.setQueryData(n, t, r)])
        );
      }
      getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = T(this, ge).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(e) {
        const t = T(this, ge);
        Ve.batch(() => {
          t.findAll(e).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(e, t) {
        const r = T(this, ge);
        return Ve.batch(
          () => (
            r.findAll(e).forEach((n) => {
              n.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const r = { revert: !0, ...t },
          n = Ve.batch(() =>
            T(this, ge)
              .findAll(e)
              .map((s) => s.cancel(r))
          );
        return Promise.all(n).then(Rt).catch(Rt);
      }
      invalidateQueries(e, t = {}) {
        return Ve.batch(
          () => (
            T(this, ge)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          n = Ve.batch(() =>
            T(this, ge)
              .findAll(e)
              .filter((s) => !s.isDisabled() && !s.isStatic())
              .map((s) => {
                let i = s.fetch(void 0, r);
                return (
                  r.throwOnError || (i = i.catch(Rt)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(n).then(Rt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = T(this, ge).build(this, t);
        return r.isStaleByTime(sc(t.staleTime, r))
          ? r.fetch(t)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Rt).catch(Rt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Rf(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Rt).catch(Rt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Rf(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return ba.isOnline()
          ? T(this, Ir).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return T(this, ge);
      }
      getMutationCache() {
        return T(this, Ir);
      }
      getDefaultOptions() {
        return T(this, $r);
      }
      setDefaultOptions(e) {
        H(this, $r, e);
      }
      setQueryDefaults(e, t) {
        T(this, Es).set(Di(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...T(this, Es).values()],
          r = {};
        return (
          t.forEach((n) => {
            Mi(e, n.queryKey) && Object.assign(r, n.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(e, t) {
        T(this, ks).set(Di(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...T(this, ks).values()],
          r = {};
        return (
          t.forEach((n) => {
            Mi(e, n.mutationKey) && Object.assign(r, n.defaultOptions);
          }),
          r
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...T(this, $r).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Od(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Ad && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...T(this, $r).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        T(this, ge).clear(), T(this, Ir).clear();
      }
    }),
    (ge = new WeakMap()),
    (Ir = new WeakMap()),
    ($r = new WeakMap()),
    (Es = new WeakMap()),
    (ks = new WeakMap()),
    (Lr = new WeakMap()),
    (Ts = new WeakMap()),
    (Cs = new WeakMap()),
    pp),
  HS = x.createContext(void 0),
  qS = ({ client: e, children: t }) => (
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    b.jsx(HS.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Sa() {
  return (
    (Sa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Sa.apply(this, arguments)
  );
}
var Ur;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ur || (Ur = {}));
const Of = "popstate";
function KS(e) {
  e === void 0 && (e = {});
  function t(n, s) {
    let { pathname: i, search: o, hash: a } = n.location;
    return oc(
      "",
      { pathname: i, search: o, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function r(n, s) {
    return typeof s == "string" ? s : ry(s);
  }
  return QS(t, r, null, e);
}
function Ze(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ty(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function GS() {
  return Math.random().toString(36).substr(2, 8);
}
function Af(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function oc(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    Sa(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? el(t) : t,
      { state: r, key: (t && t.key) || n || GS() }
    )
  );
}
function ry(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function el(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function QS(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = n,
    o = s.history,
    a = Ur.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(Sa({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    a = Ur.Pop;
    let w = c(),
      g = w == null ? null : w - u;
    (u = w), l && l({ action: a, location: p.location, delta: g });
  }
  function f(w, g) {
    a = Ur.Push;
    let m = oc(p.location, w, g);
    u = c() + 1;
    let v = Af(m, u),
      _ = p.createHref(m);
    try {
      o.pushState(v, "", _);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      s.location.assign(_);
    }
    i && l && l({ action: a, location: p.location, delta: 1 });
  }
  function d(w, g) {
    a = Ur.Replace;
    let m = oc(p.location, w, g);
    u = c();
    let v = Af(m, u),
      _ = p.createHref(m);
    o.replaceState(v, "", _),
      i && l && l({ action: a, location: p.location, delta: 0 });
  }
  function y(w) {
    let g = s.location.origin !== "null" ? s.location.origin : s.location.href,
      m = typeof w == "string" ? w : ry(w);
    return (
      (m = m.replace(/ $/, "%20")),
      Ze(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, g)
    );
  }
  let p = {
    get action() {
      return a;
    },
    get location() {
      return e(s, o);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Of, h),
        (l = w),
        () => {
          s.removeEventListener(Of, h), (l = null);
        }
      );
    },
    createHref(w) {
      return t(s, w);
    },
    createURL: y,
    encodeLocation(w) {
      let g = y(w);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: f,
    replace: d,
    go(w) {
      return o.go(w);
    },
  };
  return p;
}
var Nf;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Nf || (Nf = {}));
function JS(e, t, r) {
  return r === void 0 && (r = "/"), YS(e, t, r, !1);
}
function YS(e, t, r, n) {
  let s = typeof t == "string" ? el(t) : t,
    i = iy(s.pathname || "/", r);
  if (i == null) return null;
  let o = ny(e);
  XS(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let u = uE(i);
    a = aE(o[l], u, n);
  }
  return a;
}
function ny(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let s = (i, o, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (Ze(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(n.length)));
    let u = ys([n, l.relativePath]),
      c = r.concat(l);
    i.children &&
      i.children.length > 0 &&
      (Ze(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      ny(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: iE(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) s(i, o);
      else for (let l of sy(i.path)) s(i, o, l);
    }),
    t
  );
}
function sy(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    s = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (n.length === 0) return s ? [i, ""] : [i];
  let o = sy(n.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? i : [i, l].join("/")))),
    s && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function XS(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : oE(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const ZS = /^:[\w-]+$/,
  eE = 3,
  tE = 2,
  rE = 1,
  nE = 10,
  sE = -2,
  jf = (e) => e === "*";
function iE(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(jf) && (n += sE),
    t && (n += tE),
    r
      .filter((s) => !jf(s))
      .reduce((s, i) => s + (ZS.test(i) ? eE : i === "" ? rE : nE), n)
  );
}
function oE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, s) => n === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function aE(e, t, r) {
  let { routesMeta: n } = e,
    s = {},
    i = "/",
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      u = a === n.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      h = If(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      f = l.route;
    if (
      (!h &&
        u &&
        r &&
        !n[n.length - 1].route.index &&
        (h = If(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !h)
    )
      return null;
    Object.assign(s, h.params),
      o.push({
        params: s,
        pathname: ys([i, h.pathname]),
        pathnameBase: cE(ys([i, h.pathnameBase])),
        route: f,
      }),
      h.pathnameBase !== "/" && (i = ys([i, h.pathnameBase]));
  }
  return o;
}
function If(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = lE(e.path, e.caseSensitive, e.end),
    s = t.match(r);
  if (!s) return null;
  let i = s[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: n.reduce((u, c, h) => {
      let { paramName: f, isOptional: d } = c;
      if (f === "*") {
        let p = a[h] || "";
        o = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[h];
      return (
        d && !y ? (u[f] = void 0) : (u[f] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function lE(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    ty(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            n.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (s += "\\/*$")
      : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), n]
  );
}
function uE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ty(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function iy(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
const ys = (e) => e.join("/").replace(/\/\/+/g, "/"),
  cE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function dE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const oy = ["post", "put", "patch", "delete"];
new Set(oy);
const hE = ["get", ...oy];
new Set(hE);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ea() {
  return (
    (Ea = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ea.apply(this, arguments)
  );
}
const fE = x.createContext(null),
  pE = x.createContext(null),
  ay = x.createContext(null),
  tl = x.createContext(null),
  rl = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ly = x.createContext(null);
function Nd() {
  return x.useContext(tl) != null;
}
function uy() {
  return Nd() || Ze(!1), x.useContext(tl).location;
}
function mE(e, t) {
  return gE(e, t);
}
function gE(e, t, r, n) {
  Nd() || Ze(!1);
  let { navigator: s } = x.useContext(ay),
    { matches: i } = x.useContext(rl),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = uy(),
    c;
  if (t) {
    var h;
    let w = typeof t == "string" ? el(t) : t;
    l === "/" || ((h = w.pathname) != null && h.startsWith(l)) || Ze(!1),
      (c = w);
  } else c = u;
  let f = c.pathname || "/",
    d = f;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    d = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let y = JS(e, { pathname: d }),
    p = _E(
      y &&
        y.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: ys([
              l,
              s.encodeLocation
                ? s.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : ys([
                    l,
                    s.encodeLocation
                      ? s.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      r,
      n
    );
  return t && p
    ? x.createElement(
        tl.Provider,
        {
          value: {
            location: Ea(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Ur.Pop,
          },
        },
        p
      )
    : p;
}
function vE() {
  let e = kE(),
    t = dE(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? x.createElement("pre", { style: s }, r) : null,
    null
  );
}
const yE = x.createElement(vE, null);
class wE extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          rl.Provider,
          { value: this.props.routeContext },
          x.createElement(ly.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function xE(e) {
  let { routeContext: t, match: r, children: n } = e,
    s = x.useContext(fE);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    x.createElement(rl.Provider, { value: t }, n)
  );
}
function _E(e, t, r, n) {
  var s;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var i;
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (
      (i = n) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      e = r.matches;
    else return null;
  }
  let o = e,
    a = (s = r) == null ? void 0 : s.errors;
  if (a != null) {
    let c = o.findIndex(
      (h) => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0
    );
    c >= 0 || Ze(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (r && n && n.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let h = o[c];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = c),
        h.route.id)
      ) {
        let { loaderData: f, errors: d } = r,
          y =
            h.route.loader &&
            f[h.route.id] === void 0 &&
            (!d || d[h.route.id] === void 0);
        if (h.route.lazy || y) {
          (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, h, f) => {
    let d,
      y = !1,
      p = null,
      w = null;
    r &&
      ((d = a && h.route.id ? a[h.route.id] : void 0),
      (p = h.route.errorElement || yE),
      l &&
        (u < 0 && f === 0
          ? ((y = !0), (w = null))
          : u === f &&
            ((y = !0), (w = h.route.hydrateFallbackElement || null))));
    let g = t.concat(o.slice(0, f + 1)),
      m = () => {
        let v;
        return (
          d
            ? (v = p)
            : y
            ? (v = w)
            : h.route.Component
            ? (v = x.createElement(h.route.Component, null))
            : h.route.element
            ? (v = h.route.element)
            : (v = c),
          x.createElement(xE, {
            match: h,
            routeContext: { outlet: c, matches: g, isDataRoute: r != null },
            children: v,
          })
        );
      };
    return r && (h.route.ErrorBoundary || h.route.errorElement || f === 0)
      ? x.createElement(wE, {
          location: r.location,
          revalidation: r.revalidation,
          component: p,
          error: d,
          children: m(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var ac = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(ac || {});
function bE(e) {
  let t = x.useContext(pE);
  return t || Ze(!1), t;
}
function SE(e) {
  let t = x.useContext(rl);
  return t || Ze(!1), t;
}
function EE(e) {
  let t = SE(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || Ze(!1), r.route.id;
}
function kE() {
  var e;
  let t = x.useContext(ly),
    r = bE(ac.UseRouteError),
    n = EE(ac.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function TE(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function lc(e) {
  Ze(!1);
}
function CE(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: s = Ur.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  Nd() && Ze(!1);
  let l = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: o,
        future: Ea({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, o]
    );
  typeof n == "string" && (n = el(n));
  let {
      pathname: c = "/",
      search: h = "",
      hash: f = "",
      state: d = null,
      key: y = "default",
    } = n,
    p = x.useMemo(() => {
      let w = iy(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: h, hash: f, state: d, key: y },
            navigationType: s,
          };
    }, [l, c, h, f, d, y, s]);
  return p == null
    ? null
    : x.createElement(
        ay.Provider,
        { value: u },
        x.createElement(tl.Provider, { children: r, value: p })
      );
}
function RE(e) {
  let { children: t, location: r } = e;
  return mE(uc(t), r);
}
new Promise(() => {});
function uc(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    x.Children.forEach(e, (n, s) => {
      if (!x.isValidElement(n)) return;
      let i = [...t, s];
      if (n.type === x.Fragment) {
        r.push.apply(r, uc(n.props.children, i));
        return;
      }
      n.type !== lc && Ze(!1), !n.props.index || !n.props.children || Ze(!1);
      let o = {
        id: n.props.id || i.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (o.children = uc(n.props.children, i)), r.push(o);
    }),
    r
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const PE = "6";
try {
  window.__reactRouterVersion = PE;
} catch {}
const OE = "startTransition",
  $f = Tp[OE];
function AE(e) {
  let { basename: t, children: r, future: n, window: s } = e,
    i = x.useRef();
  i.current == null && (i.current = KS({ window: s, v5Compat: !0 }));
  let o = i.current,
    [a, l] = x.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = n || {},
    c = x.useCallback(
      (h) => {
        u && $f ? $f(() => l(h)) : l(h);
      },
      [l, u]
    );
  return (
    x.useLayoutEffect(() => o.listen(c), [o, c]),
    x.useEffect(() => TE(n), [n]),
    x.createElement(CE, {
      basename: t,
      children: r,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: n,
    })
  );
}
var Lf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Lf || (Lf = {}));
var Df;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Df || (Df = {}));
const NE = () => {
    const e = x.useRef(null);
    return (
      x.useEffect(() => {
        const t = e.current;
        if (!t) return;
        const r = t.getContext("2d");
        if (!r) return;
        const n = () => {
          (t.width = window.innerWidth), (t.height = window.innerHeight);
        };
        n(), window.addEventListener("resize", n);
        const s = [],
          i = 100;
        for (let l = 0; l < i; l++)
          s.push({
            x: Math.random() * t.width,
            y: Math.random() * t.height,
            size: Math.random() * 2 + 0.5,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random(),
          });
        let o;
        const a = () => {
          r.clearRect(0, 0, t.width, t.height),
            s.forEach((l) => {
              (l.opacity += (Math.random() - 0.5) * 0.05),
                (l.opacity = Math.max(0.2, Math.min(1, l.opacity))),
                r.beginPath(),
                r.arc(l.x, l.y, l.size, 0, Math.PI * 2),
                (r.fillStyle = `rgba(255, 150, 200, ${l.opacity * 0.6})`),
                r.fill();
            }),
            (o = requestAnimationFrame(a));
        };
        return (
          a(),
          () => {
            window.removeEventListener("resize", n), cancelAnimationFrame(o);
          }
        );
      }, []),
      b.jsx("canvas", { ref: e, className: "starfield" })
    );
  },
  nl = "/assets/ovary-character-mJGTpPPp.png",
  jE = () => {
    const [e, t] = x.useState(!1),
      r = [
        { href: "#about", label: "ABOUT" },
        { href: "#meme-lab", label: "MEME-LAB" },
        { href: "#draw", label: "DRAW" },
        { href: "#how-to-buy", label: "HOW-TO-BUY" },
        { href: "#chart", label: "CHART" },
      ];
    return b.jsxs("nav", {
      className:
        "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border",
      children: [
        b.jsxs("div", {
          className:
            "container mx-auto px-4 py-3 flex items-center justify-between",
          children: [
            b.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                b.jsx("img", { src: nl, alt: "Ovary", className: "w-10 h-10" }),
                b.jsx("span", {
                  className:
                    "font-marker text-2xl text-foreground text-glow italic -skew-x-6",
                  children: "OVARY",
                }),
              ],
            }),
            b.jsxs("div", {
              className: "hidden md:flex items-center gap-8",
              children: [
                r.map((n) =>
                  b.jsx(
                    "a",
                    {
                      href: n.href,
                      className:
                        "font-marker text-muted-foreground hover:text-foreground transition-colors text-sm",
                      children: n.label,
                    },
                    n.href
                  )
                ),
                b.jsx("a", {
                  className: "btn-primary text-sm",
                  children: "BUY",
                  href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xdc48debe711985cdffaf0ca9c91757ac5ff61903",
                }),
              ],
            }),
            b.jsx("button", {
              onClick: () => t(!e),
              className: "md:hidden text-foreground",
              children: b.jsx("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: e
                  ? b.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12",
                    })
                  : b.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 6h16M4 12h16M4 18h16",
                    }),
              }),
            }),
          ],
        }),
        e &&
          b.jsx("div", {
            className: "md:hidden bg-background border-b border-border",
            children: b.jsxs("div", {
              className: "container mx-auto px-4 py-4 flex flex-col gap-4",
              children: [
                r.map((n) =>
                  b.jsx(
                    "a",
                    {
                      href: n.href,
                      className:
                        "font-marker text-muted-foreground hover:text-foreground transition-colors",
                      onClick: () => t(!1),
                      children: n.label,
                    },
                    n.href
                  )
                ),
                b.jsx("button", {
                  className: "btn-primary text-center w-full",
                  children: "BUY",
                }),
              ],
            }),
          }),
      ],
    });
  },
  IE = () => {
    const [e, t] = x.useState(!1),
      r = "0xdc48debe711985cdffaf0ca9c91757ac5ff61903",
      n = () => {
        navigator.clipboard.writeText(r), t(!0), setTimeout(() => t(!1), 2e3);
      };
    return b.jsx("section", {
      className:
        "min-h-screen flex flex-col items-center justify-center pt-20 relative",
      children: b.jsxs("div", {
        className: "container mx-auto px-4 text-center relative z-10",
        children: [
          b.jsx("div", {
            className: "mb-8 animate-float",
            children: b.jsx("div", {
              className: "inline-block p-6",
              children: b.jsx("img", {
                src: nl,
                alt: "Ovary",
                className:
                  "w-48 h-48 mx-auto drop-shadow-[0_0_30px_hsl(330,100%,60%)]",
              }),
            }),
          }),
          b.jsx("h1", {
            className:
              "font-marker text-7xl md:text-9xl lg:text-[10rem] text-foreground text-glow-strong mb-4 tracking-wide italic transform -skew-x-6",
            children: "OVARY",
          }),
          b.jsx("p", {
            className:
              "font-marker text-2xl md:text-4xl text-foreground/80 text-glow tracking-widest mb-12",
            children: "$OVARY",
          }),
          b.jsxs("div", {
            onClick: n,
            className:
              "inline-flex items-center gap-4 bg-primary text-primary-foreground px-6 py-4 rounded-xl cursor-pointer hover:scale-105 transition-transform box-glow max-w-full",
            children: [
              b.jsx("span", {
                className:
                  "font-mono text-xs md:text-sm truncate max-w-[200px] md:max-w-md",
                children: r,
              }),
              e
                ? b.jsx(c_, { className: "w-5 h-5 flex-shrink-0" })
                : b.jsx(h_, { className: "w-5 h-5 flex-shrink-0" }),
            ],
          }),
        ],
      }),
    });
  },
  $E = () =>
    b.jsx("section", {
      id: "about",
      className: "py-24 relative",
      children: b.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          b.jsx("h2", {
            className:
              "font-marker text-5xl md:text-7xl text-foreground text-glow-strong text-center mb-12 italic -skew-x-6",
            children: "THE STORY",
          }),
          b.jsxs("div", {
            className: "max-w-3xl mx-auto card-styled p-8 md:p-12",
            children: [
              b.jsx("h3", {
                className:
                  "font-marker text-xl md:text-2xl text-foreground mb-6",
                children:
                  "$TESTICLE hit 4M market cap. The world needed balance.",
              }),
              b.jsx("p", {
                className: "font-marker text-muted-foreground text-lg mb-8",
                children:
                  "The most logical opposite emerged. The community demanded equality. It became the ultimate counterpart in the meme coin ecosystem.",
              }),
              b.jsx("div", {
                className: "border-t border-primary/30 pt-6",
                children: b.jsx("p", {
                  className:
                    "font-marker text-xl md:text-2xl text-foreground italic",
                  children: `"IT'S JUST AN OVARY. BUT IT'S OUR OVARY."`,
                }),
              }),
            ],
          }),
        ],
      }),
    });
function sl(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
        (r[n[s]] = e[n[s]]);
  return r;
}
function LE(e, t, r, n) {
  function s(i) {
    return i instanceof r
      ? i
      : new r(function (o) {
          o(i);
        });
  }
  return new (r || (r = Promise))(function (i, o) {
    function a(c) {
      try {
        u(n.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(n.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? i(c.value) : s(c.value).then(a, l);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
const DE = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t));
class jd extends Error {
  constructor(t, r = "FunctionsError", n) {
    super(t), (this.name = r), (this.context = n);
  }
}
class ME extends jd {
  constructor(t) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      t
    );
  }
}
class Mf extends jd {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class Uf extends jd {
  constructor(t) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      t
    );
  }
}
var cc;
(function (e) {
  (e.Any = "any"),
    (e.ApNortheast1 = "ap-northeast-1"),
    (e.ApNortheast2 = "ap-northeast-2"),
    (e.ApSouth1 = "ap-south-1"),
    (e.ApSoutheast1 = "ap-southeast-1"),
    (e.ApSoutheast2 = "ap-southeast-2"),
    (e.CaCentral1 = "ca-central-1"),
    (e.EuCentral1 = "eu-central-1"),
    (e.EuWest1 = "eu-west-1"),
    (e.EuWest2 = "eu-west-2"),
    (e.EuWest3 = "eu-west-3"),
    (e.SaEast1 = "sa-east-1"),
    (e.UsEast1 = "us-east-1"),
    (e.UsWest1 = "us-west-1"),
    (e.UsWest2 = "us-west-2");
})(cc || (cc = {}));
class UE {
  constructor(t, { headers: r = {}, customFetch: n, region: s = cc.Any } = {}) {
    (this.url = t), (this.headers = r), (this.region = s), (this.fetch = DE(n));
  }
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  invoke(t) {
    return LE(this, arguments, void 0, function* (r, n = {}) {
      var s;
      let i, o;
      try {
        const { headers: a, method: l, body: u, signal: c, timeout: h } = n;
        let f = {},
          { region: d } = n;
        d || (d = this.region);
        const y = new URL(`${this.url}/${r}`);
        d &&
          d !== "any" &&
          ((f["x-region"] = d), y.searchParams.set("forceFunctionRegion", d));
        let p;
        u &&
        ((a && !Object.prototype.hasOwnProperty.call(a, "Content-Type")) || !a)
          ? (typeof Blob < "u" && u instanceof Blob) || u instanceof ArrayBuffer
            ? ((f["Content-Type"] = "application/octet-stream"), (p = u))
            : typeof u == "string"
            ? ((f["Content-Type"] = "text/plain"), (p = u))
            : typeof FormData < "u" && u instanceof FormData
            ? (p = u)
            : ((f["Content-Type"] = "application/json"),
              (p = JSON.stringify(u)))
          : u &&
            typeof u != "string" &&
            !(typeof Blob < "u" && u instanceof Blob) &&
            !(u instanceof ArrayBuffer) &&
            !(typeof FormData < "u" && u instanceof FormData)
          ? (p = JSON.stringify(u))
          : (p = u);
        let w = c;
        h &&
          ((o = new AbortController()),
          (i = setTimeout(() => o.abort(), h)),
          c
            ? ((w = o.signal), c.addEventListener("abort", () => o.abort()))
            : (w = o.signal));
        const g = yield this.fetch(y.toString(), {
            method: l || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, f), this.headers),
              a
            ),
            body: p,
            signal: w,
          }).catch((S) => {
            throw new ME(S);
          }),
          m = g.headers.get("x-relay-error");
        if (m && m === "true") throw new Mf(g);
        if (!g.ok) throw new Uf(g);
        let v = (
            (s = g.headers.get("Content-Type")) !== null && s !== void 0
              ? s
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          _;
        return (
          v === "application/json"
            ? (_ = yield g.json())
            : v === "application/octet-stream" || v === "application/pdf"
            ? (_ = yield g.blob())
            : v === "text/event-stream"
            ? (_ = g)
            : v === "multipart/form-data"
            ? (_ = yield g.formData())
            : (_ = yield g.text()),
          { data: _, error: null, response: g }
        );
      } catch (a) {
        return {
          data: null,
          error: a,
          response: a instanceof Uf || a instanceof Mf ? a.context : void 0,
        };
      } finally {
        i && clearTimeout(i);
      }
    });
  }
}
var FE = class extends Error {
    constructor(e) {
      super(e.message),
        (this.name = "PostgrestError"),
        (this.details = e.details),
        (this.hint = e.hint),
        (this.code = e.code);
    }
  },
  zE = class {
    constructor(e) {
      var t, r;
      (this.shouldThrowOnError = !1),
        (this.method = e.method),
        (this.url = e.url),
        (this.headers = new Headers(e.headers)),
        (this.schema = e.schema),
        (this.body = e.body),
        (this.shouldThrowOnError =
          (t = e.shouldThrowOnError) !== null && t !== void 0 ? t : !1),
        (this.signal = e.signal),
        (this.isMaybeSingle =
          (r = e.isMaybeSingle) !== null && r !== void 0 ? r : !1),
        e.fetch ? (this.fetch = e.fetch) : (this.fetch = fetch);
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    setHeader(e, t) {
      return (
        (this.headers = new Headers(this.headers)), this.headers.set(e, t), this
      );
    }
    then(e, t) {
      var r = this;
      this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? this.headers.set("Accept-Profile", this.schema)
          : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json");
      const n = this.fetch;
      let s = n(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (i) => {
        let o = null,
          a = null,
          l = null,
          u = i.status,
          c = i.statusText;
        if (i.ok) {
          var h, f;
          if (r.method !== "HEAD") {
            var d;
            const g = await i.text();
            g === "" ||
              (r.headers.get("Accept") === "text/csv" ||
              (r.headers.get("Accept") &&
                !((d = r.headers.get("Accept")) === null || d === void 0) &&
                d.includes("application/vnd.pgrst.plan+text"))
                ? (a = g)
                : (a = JSON.parse(g)));
          }
          const p =
              (h = r.headers.get("Prefer")) === null || h === void 0
                ? void 0
                : h.match(/count=(exact|planned|estimated)/),
            w =
              (f = i.headers.get("content-range")) === null || f === void 0
                ? void 0
                : f.split("/");
          p && w && w.length > 1 && (l = parseInt(w[1])),
            r.isMaybeSingle &&
              r.method === "GET" &&
              Array.isArray(a) &&
              (a.length > 1
                ? ((o = {
                    code: "PGRST116",
                    details: `Results contain ${a.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (a = null),
                  (l = null),
                  (u = 406),
                  (c = "Not Acceptable"))
                : a.length === 1
                ? (a = a[0])
                : (a = null));
        } else {
          var y;
          const p = await i.text();
          try {
            (o = JSON.parse(p)),
              Array.isArray(o) &&
                i.status === 404 &&
                ((a = []), (o = null), (u = 200), (c = "OK"));
          } catch {
            i.status === 404 && p === ""
              ? ((u = 204), (c = "No Content"))
              : (o = { message: p });
          }
          if (
            (o &&
              r.isMaybeSingle &&
              !(o == null || (y = o.details) === null || y === void 0) &&
              y.includes("0 rows") &&
              ((o = null), (u = 200), (c = "OK")),
            o && r.shouldThrowOnError)
          )
            throw new FE(o);
        }
        return { error: o, data: a, count: l, status: u, statusText: c };
      });
      return (
        this.shouldThrowOnError ||
          (s = s.catch((i) => {
            var o;
            let a = "";
            const l = i == null ? void 0 : i.cause;
            if (l) {
              var u, c, h, f;
              const y =
                  (u = l == null ? void 0 : l.message) !== null && u !== void 0
                    ? u
                    : "",
                p =
                  (c = l == null ? void 0 : l.code) !== null && c !== void 0
                    ? c
                    : "";
              (a = `${
                (h = i == null ? void 0 : i.name) !== null && h !== void 0
                  ? h
                  : "FetchError"
              }: ${i == null ? void 0 : i.message}`),
                (a += `

Caused by: ${
                  (f = l == null ? void 0 : l.name) !== null && f !== void 0
                    ? f
                    : "Error"
                }: ${y}`),
                p && (a += ` (${p})`),
                l != null &&
                  l.stack &&
                  (a += `
${l.stack}`);
            } else {
              var d;
              a =
                (d = i == null ? void 0 : i.stack) !== null && d !== void 0
                  ? d
                  : "";
            }
            return {
              error: {
                message: `${
                  (o = i == null ? void 0 : i.name) !== null && o !== void 0
                    ? o
                    : "FetchError"
                }: ${i == null ? void 0 : i.message}`,
                details: a,
                hint: "",
                code: "",
              },
              data: null,
              count: null,
              status: 0,
              statusText: "",
            };
          })),
        s.then(e, t)
      );
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  BE = class extends zE {
    select(e) {
      let t = !1;
      const r = (e ?? "*")
        .split("")
        .map((n) => (/\s/.test(n) && !t ? "" : (n === '"' && (t = !t), n)))
        .join("");
      return (
        this.url.searchParams.set("select", r),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(
      e,
      {
        ascending: t = !0,
        nullsFirst: r,
        foreignTable: n,
        referencedTable: s = n,
      } = {}
    ) {
      const i = s ? `${s}.order` : "order",
        o = this.url.searchParams.get(i);
      return (
        this.url.searchParams.set(
          i,
          `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${
            r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"
          }`
        ),
        this
      );
    }
    limit(e, { foreignTable: t, referencedTable: r = t } = {}) {
      const n = typeof r > "u" ? "limit" : `${r}.limit`;
      return this.url.searchParams.set(n, `${e}`), this;
    }
    range(e, t, { foreignTable: r, referencedTable: n = r } = {}) {
      const s = typeof n > "u" ? "offset" : `${n}.offset`,
        i = typeof n > "u" ? "limit" : `${n}.limit`;
      return (
        this.url.searchParams.set(s, `${e}`),
        this.url.searchParams.set(i, `${t - e + 1}`),
        this
      );
    }
    abortSignal(e) {
      return (this.signal = e), this;
    }
    single() {
      return (
        this.headers.set("Accept", "application/vnd.pgrst.object+json"), this
      );
    }
    maybeSingle() {
      return (
        this.method === "GET"
          ? this.headers.set("Accept", "application/json")
          : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        (this.isMaybeSingle = !0),
        this
      );
    }
    csv() {
      return this.headers.set("Accept", "text/csv"), this;
    }
    geojson() {
      return this.headers.set("Accept", "application/geo+json"), this;
    }
    explain({
      analyze: e = !1,
      verbose: t = !1,
      settings: r = !1,
      buffers: n = !1,
      wal: s = !1,
      format: i = "text",
    } = {}) {
      var o;
      const a = [
          e ? "analyze" : null,
          t ? "verbose" : null,
          r ? "settings" : null,
          n ? "buffers" : null,
          s ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        l =
          (o = this.headers.get("Accept")) !== null && o !== void 0
            ? o
            : "application/json";
      return (
        this.headers.set(
          "Accept",
          `application/vnd.pgrst.plan+${i}; for="${l}"; options=${a};`
        ),
        i === "json" ? this : this
      );
    }
    rollback() {
      return this.headers.append("Prefer", "tx=rollback"), this;
    }
    returns() {
      return this;
    }
    maxAffected(e) {
      return (
        this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${e}`),
        this
      );
    }
  };
const Ff = new RegExp("[,()]");
var Gn = class extends BE {
    eq(e, t) {
      return this.url.searchParams.append(e, `eq.${t}`), this;
    }
    neq(e, t) {
      return this.url.searchParams.append(e, `neq.${t}`), this;
    }
    gt(e, t) {
      return this.url.searchParams.append(e, `gt.${t}`), this;
    }
    gte(e, t) {
      return this.url.searchParams.append(e, `gte.${t}`), this;
    }
    lt(e, t) {
      return this.url.searchParams.append(e, `lt.${t}`), this;
    }
    lte(e, t) {
      return this.url.searchParams.append(e, `lte.${t}`), this;
    }
    like(e, t) {
      return this.url.searchParams.append(e, `like.${t}`), this;
    }
    likeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this
      );
    }
    likeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this
      );
    }
    ilike(e, t) {
      return this.url.searchParams.append(e, `ilike.${t}`), this;
    }
    ilikeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this
      );
    }
    ilikeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this
      );
    }
    regexMatch(e, t) {
      return this.url.searchParams.append(e, `match.${t}`), this;
    }
    regexIMatch(e, t) {
      return this.url.searchParams.append(e, `imatch.${t}`), this;
    }
    is(e, t) {
      return this.url.searchParams.append(e, `is.${t}`), this;
    }
    isDistinct(e, t) {
      return this.url.searchParams.append(e, `isdistinct.${t}`), this;
    }
    in(e, t) {
      const r = Array.from(new Set(t))
        .map((n) => (typeof n == "string" && Ff.test(n) ? `"${n}"` : `${n}`))
        .join(",");
      return this.url.searchParams.append(e, `in.(${r})`), this;
    }
    notIn(e, t) {
      const r = Array.from(new Set(t))
        .map((n) => (typeof n == "string" && Ff.test(n) ? `"${n}"` : `${n}`))
        .join(",");
      return this.url.searchParams.append(e, `not.in.(${r})`), this;
    }
    contains(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cs.${t}`)
          : Array.isArray(t)
          ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
          : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
        this
      );
    }
    containedBy(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cd.${t}`)
          : Array.isArray(t)
          ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
          : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
        this
      );
    }
    rangeGt(e, t) {
      return this.url.searchParams.append(e, `sr.${t}`), this;
    }
    rangeGte(e, t) {
      return this.url.searchParams.append(e, `nxl.${t}`), this;
    }
    rangeLt(e, t) {
      return this.url.searchParams.append(e, `sl.${t}`), this;
    }
    rangeLte(e, t) {
      return this.url.searchParams.append(e, `nxr.${t}`), this;
    }
    rangeAdjacent(e, t) {
      return this.url.searchParams.append(e, `adj.${t}`), this;
    }
    overlaps(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `ov.${t}`)
          : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
        this
      );
    }
    textSearch(e, t, { config: r, type: n } = {}) {
      let s = "";
      n === "plain"
        ? (s = "pl")
        : n === "phrase"
        ? (s = "ph")
        : n === "websearch" && (s = "w");
      const i = r === void 0 ? "" : `(${r})`;
      return this.url.searchParams.append(e, `${s}fts${i}.${t}`), this;
    }
    match(e) {
      return (
        Object.entries(e).forEach(([t, r]) => {
          this.url.searchParams.append(t, `eq.${r}`);
        }),
        this
      );
    }
    not(e, t, r) {
      return this.url.searchParams.append(e, `not.${t}.${r}`), this;
    }
    or(e, { foreignTable: t, referencedTable: r = t } = {}) {
      const n = r ? `${r}.or` : "or";
      return this.url.searchParams.append(n, `(${e})`), this;
    }
    filter(e, t, r) {
      return this.url.searchParams.append(e, `${t}.${r}`), this;
    }
  },
  VE = class {
    constructor(e, { headers: t = {}, schema: r, fetch: n }) {
      (this.url = e),
        (this.headers = new Headers(t)),
        (this.schema = r),
        (this.fetch = n);
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(e, t) {
      const { head: r = !1, count: n } = t ?? {},
        s = r ? "HEAD" : "GET";
      let i = !1;
      const o = (e ?? "*")
          .split("")
          .map((u) => (/\s/.test(u) && !i ? "" : (u === '"' && (i = !i), u)))
          .join(""),
        { url: a, headers: l } = this.cloneRequestState();
      return (
        a.searchParams.set("select", o),
        n && l.append("Prefer", `count=${n}`),
        new Gn({
          method: s,
          url: a,
          headers: l,
          schema: this.schema,
          fetch: this.fetch,
        })
      );
    }
    insert(e, { count: t, defaultToNull: r = !0 } = {}) {
      var n;
      const s = "POST",
        { url: i, headers: o } = this.cloneRequestState();
      if (
        (t && o.append("Prefer", `count=${t}`),
        r || o.append("Prefer", "missing=default"),
        Array.isArray(e))
      ) {
        const a = e.reduce((l, u) => l.concat(Object.keys(u)), []);
        if (a.length > 0) {
          const l = [...new Set(a)].map((u) => `"${u}"`);
          i.searchParams.set("columns", l.join(","));
        }
      }
      return new Gn({
        method: s,
        url: i,
        headers: o,
        schema: this.schema,
        body: e,
        fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
      });
    }
    upsert(
      e,
      {
        onConflict: t,
        ignoreDuplicates: r = !1,
        count: n,
        defaultToNull: s = !0,
      } = {}
    ) {
      var i;
      const o = "POST",
        { url: a, headers: l } = this.cloneRequestState();
      if (
        (l.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`),
        t !== void 0 && a.searchParams.set("on_conflict", t),
        n && l.append("Prefer", `count=${n}`),
        s || l.append("Prefer", "missing=default"),
        Array.isArray(e))
      ) {
        const u = e.reduce((c, h) => c.concat(Object.keys(h)), []);
        if (u.length > 0) {
          const c = [...new Set(u)].map((h) => `"${h}"`);
          a.searchParams.set("columns", c.join(","));
        }
      }
      return new Gn({
        method: o,
        url: a,
        headers: l,
        schema: this.schema,
        body: e,
        fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
      });
    }
    update(e, { count: t } = {}) {
      var r;
      const n = "PATCH",
        { url: s, headers: i } = this.cloneRequestState();
      return (
        t && i.append("Prefer", `count=${t}`),
        new Gn({
          method: n,
          url: s,
          headers: i,
          schema: this.schema,
          body: e,
          fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
        })
      );
    }
    delete({ count: e } = {}) {
      var t;
      const r = "DELETE",
        { url: n, headers: s } = this.cloneRequestState();
      return (
        e && s.append("Prefer", `count=${e}`),
        new Gn({
          method: r,
          url: n,
          headers: s,
          schema: this.schema,
          fetch: (t = this.fetch) !== null && t !== void 0 ? t : fetch,
        })
      );
    }
  },
  WE = class cy {
    constructor(t, { headers: r = {}, schema: n, fetch: s } = {}) {
      (this.url = t),
        (this.headers = new Headers(r)),
        (this.schemaName = n),
        (this.fetch = s);
    }
    from(t) {
      if (!t || typeof t != "string" || t.trim() === "")
        throw new Error(
          "Invalid relation name: relation must be a non-empty string."
        );
      return new VE(new URL(`${this.url}/${t}`), {
        headers: new Headers(this.headers),
        schema: this.schemaName,
        fetch: this.fetch,
      });
    }
    schema(t) {
      return new cy(this.url, {
        headers: this.headers,
        schema: t,
        fetch: this.fetch,
      });
    }
    rpc(t, r = {}, { head: n = !1, get: s = !1, count: i } = {}) {
      var o;
      let a;
      const l = new URL(`${this.url}/rpc/${t}`);
      let u;
      const c = (d) =>
          d !== null &&
          typeof d == "object" &&
          (!Array.isArray(d) || d.some(c)),
        h = n && Object.values(r).some(c);
      h
        ? ((a = "POST"), (u = r))
        : n || s
        ? ((a = n ? "HEAD" : "GET"),
          Object.entries(r)
            .filter(([d, y]) => y !== void 0)
            .map(([d, y]) => [
              d,
              Array.isArray(y) ? `{${y.join(",")}}` : `${y}`,
            ])
            .forEach(([d, y]) => {
              l.searchParams.append(d, y);
            }))
        : ((a = "POST"), (u = r));
      const f = new Headers(this.headers);
      return (
        h
          ? f.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal")
          : i && f.set("Prefer", `count=${i}`),
        new Gn({
          method: a,
          url: l,
          headers: f,
          schema: this.schemaName,
          body: u,
          fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
        })
      );
    }
  };
class HE {
  constructor() {}
  static detectEnvironment() {
    var t;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (
      typeof globalThis < "u" &&
      typeof globalThis.WebSocketPair < "u" &&
      typeof globalThis.WebSocket > "u"
    )
      return {
        type: "cloudflare",
        error:
          "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround:
          "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
      };
    if (
      (typeof globalThis < "u" && globalThis.EdgeRuntime) ||
      (typeof navigator < "u" &&
        !((t = navigator.userAgent) === null || t === void 0) &&
        t.includes("Vercel-Edge"))
    )
      return {
        type: "unsupported",
        error:
          "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround:
          "Use serverless functions or a different deployment target for WebSocket functionality.",
      };
    const r = globalThis.process;
    if (r) {
      const n = r.versions;
      if (n && n.node) {
        const s = n.node,
          i = parseInt(s.replace(/^v/, "").split(".")[0]);
        return i >= 22
          ? typeof globalThis.WebSocket < "u"
            ? { type: "native", constructor: globalThis.WebSocket }
            : {
                type: "unsupported",
                error: `Node.js ${i} detected but native WebSocket not found.`,
                workaround:
                  "Provide a WebSocket implementation via the transport option.",
              }
          : {
              type: "unsupported",
              error: `Node.js ${i} detected without native WebSocket support.`,
              workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
            };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround:
        "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
    };
  }
  static getWebSocketConstructor() {
    const t = this.detectEnvironment();
    if (t.constructor) return t.constructor;
    let r = t.error || "WebSocket not supported in this environment.";
    throw (
      (t.workaround &&
        (r += `

Suggested solution: ${t.workaround}`),
      new Error(r))
    );
  }
  static createWebSocket(t, r) {
    const n = this.getWebSocketConstructor();
    return new n(t, r);
  }
  static isWebSocketSupported() {
    try {
      const t = this.detectEnvironment();
      return t.type === "native" || t.type === "ws";
    } catch {
      return !1;
    }
  }
}
const qE = "2.90.1",
  KE = `realtime-js/${qE}`,
  dy = "1.0.0",
  GE = "2.0.0",
  zf = dy,
  dc = 1e4,
  QE = 1e3,
  JE = 100;
var Rr;
(function (e) {
  (e[(e.connecting = 0)] = "connecting"),
    (e[(e.open = 1)] = "open"),
    (e[(e.closing = 2)] = "closing"),
    (e[(e.closed = 3)] = "closed");
})(Rr || (Rr = {}));
var Se;
(function (e) {
  (e.closed = "closed"),
    (e.errored = "errored"),
    (e.joined = "joined"),
    (e.joining = "joining"),
    (e.leaving = "leaving");
})(Se || (Se = {}));
var jt;
(function (e) {
  (e.close = "phx_close"),
    (e.error = "phx_error"),
    (e.join = "phx_join"),
    (e.reply = "phx_reply"),
    (e.leave = "phx_leave"),
    (e.access_token = "access_token");
})(jt || (jt = {}));
var hc;
(function (e) {
  e.websocket = "websocket";
})(hc || (hc = {}));
var hn;
(function (e) {
  (e.Connecting = "connecting"),
    (e.Open = "open"),
    (e.Closing = "closing"),
    (e.Closed = "closed");
})(hn || (hn = {}));
class YE {
  constructor(t) {
    (this.HEADER_LENGTH = 1),
      (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
      (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
      (this.BINARY_ENCODING = 0),
      (this.JSON_ENCODING = 1),
      (this.BROADCAST_EVENT = "broadcast"),
      (this.allowedMetadataKeys = []),
      (this.allowedMetadataKeys = t ?? []);
  }
  encode(t, r) {
    if (
      t.event === this.BROADCAST_EVENT &&
      !(t.payload instanceof ArrayBuffer) &&
      typeof t.payload.event == "string"
    )
      return r(this._binaryEncodeUserBroadcastPush(t));
    let n = [t.join_ref, t.ref, t.topic, t.event, t.payload];
    return r(JSON.stringify(n));
  }
  _binaryEncodeUserBroadcastPush(t) {
    var r;
    return this._isArrayBuffer(
      (r = t.payload) === null || r === void 0 ? void 0 : r.payload
    )
      ? this._encodeBinaryUserBroadcastPush(t)
      : this._encodeJsonUserBroadcastPush(t);
  }
  _encodeBinaryUserBroadcastPush(t) {
    var r, n;
    const s =
      (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !==
        null && n !== void 0
        ? n
        : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(t, this.BINARY_ENCODING, s);
  }
  _encodeJsonUserBroadcastPush(t) {
    var r, n;
    const s =
        (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !==
          null && n !== void 0
          ? n
          : {},
      o = new TextEncoder().encode(JSON.stringify(s)).buffer;
    return this._encodeUserBroadcastPush(t, this.JSON_ENCODING, o);
  }
  _encodeUserBroadcastPush(t, r, n) {
    var s, i;
    const o = t.topic,
      a = (s = t.ref) !== null && s !== void 0 ? s : "",
      l = (i = t.join_ref) !== null && i !== void 0 ? i : "",
      u = t.payload.event,
      c = this.allowedMetadataKeys
        ? this._pick(t.payload, this.allowedMetadataKeys)
        : {},
      h = Object.keys(c).length === 0 ? "" : JSON.stringify(c);
    if (l.length > 255)
      throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
    if (a.length > 255)
      throw new Error(`ref length ${a.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`topic length ${o.length} exceeds maximum of 255`);
    if (u.length > 255)
      throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);
    if (h.length > 255)
      throw new Error(`metadata length ${h.length} exceeds maximum of 255`);
    const f =
        this.USER_BROADCAST_PUSH_META_LENGTH +
        l.length +
        a.length +
        o.length +
        u.length +
        h.length,
      d = new ArrayBuffer(this.HEADER_LENGTH + f);
    let y = new DataView(d),
      p = 0;
    y.setUint8(p++, this.KINDS.userBroadcastPush),
      y.setUint8(p++, l.length),
      y.setUint8(p++, a.length),
      y.setUint8(p++, o.length),
      y.setUint8(p++, u.length),
      y.setUint8(p++, h.length),
      y.setUint8(p++, r),
      Array.from(l, (g) => y.setUint8(p++, g.charCodeAt(0))),
      Array.from(a, (g) => y.setUint8(p++, g.charCodeAt(0))),
      Array.from(o, (g) => y.setUint8(p++, g.charCodeAt(0))),
      Array.from(u, (g) => y.setUint8(p++, g.charCodeAt(0))),
      Array.from(h, (g) => y.setUint8(p++, g.charCodeAt(0)));
    var w = new Uint8Array(d.byteLength + n.byteLength);
    return (
      w.set(new Uint8Array(d), 0),
      w.set(new Uint8Array(n), d.byteLength),
      w.buffer
    );
  }
  decode(t, r) {
    if (this._isArrayBuffer(t)) {
      let n = this._binaryDecode(t);
      return r(n);
    }
    if (typeof t == "string") {
      const n = JSON.parse(t),
        [s, i, o, a, l] = n;
      return r({ join_ref: s, ref: i, topic: o, event: a, payload: l });
    }
    return r({});
  }
  _binaryDecode(t) {
    const r = new DataView(t),
      n = r.getUint8(0),
      s = new TextDecoder();
    switch (n) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(t, r, s);
    }
  }
  _decodeUserBroadcast(t, r, n) {
    const s = r.getUint8(1),
      i = r.getUint8(2),
      o = r.getUint8(3),
      a = r.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const u = n.decode(t.slice(l, l + s));
    l = l + s;
    const c = n.decode(t.slice(l, l + i));
    l = l + i;
    const h = n.decode(t.slice(l, l + o));
    l = l + o;
    const f = t.slice(l, t.byteLength),
      d = a === this.JSON_ENCODING ? JSON.parse(n.decode(f)) : f,
      y = { type: this.BROADCAST_EVENT, event: c, payload: d };
    return (
      o > 0 && (y.meta = JSON.parse(h)),
      {
        join_ref: null,
        ref: null,
        topic: u,
        event: this.BROADCAST_EVENT,
        payload: y,
      }
    );
  }
  _isArrayBuffer(t) {
    var r;
    return (
      t instanceof ArrayBuffer ||
      ((r = t == null ? void 0 : t.constructor) === null || r === void 0
        ? void 0
        : r.name) === "ArrayBuffer"
    );
  }
  _pick(t, r) {
    return !t || typeof t != "object"
      ? {}
      : Object.fromEntries(Object.entries(t).filter(([n]) => r.includes(n)));
  }
}
class hy {
  constructor(t, r) {
    (this.callback = t),
      (this.timerCalc = r),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = t),
      (this.timerCalc = r);
  }
  reset() {
    (this.tries = 0), clearTimeout(this.timer), (this.timer = void 0);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(() => {
        (this.tries = this.tries + 1), this.callback();
      }, this.timerCalc(this.tries + 1)));
  }
}
var ie;
(function (e) {
  (e.abstime = "abstime"),
    (e.bool = "bool"),
    (e.date = "date"),
    (e.daterange = "daterange"),
    (e.float4 = "float4"),
    (e.float8 = "float8"),
    (e.int2 = "int2"),
    (e.int4 = "int4"),
    (e.int4range = "int4range"),
    (e.int8 = "int8"),
    (e.int8range = "int8range"),
    (e.json = "json"),
    (e.jsonb = "jsonb"),
    (e.money = "money"),
    (e.numeric = "numeric"),
    (e.oid = "oid"),
    (e.reltime = "reltime"),
    (e.text = "text"),
    (e.time = "time"),
    (e.timestamp = "timestamp"),
    (e.timestamptz = "timestamptz"),
    (e.timetz = "timetz"),
    (e.tsrange = "tsrange"),
    (e.tstzrange = "tstzrange");
})(ie || (ie = {}));
const Bf = (e, t, r = {}) => {
    var n;
    const s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
    return t
      ? Object.keys(t).reduce((i, o) => ((i[o] = XE(o, e, t, s)), i), {})
      : {};
  },
  XE = (e, t, r, n) => {
    const s = t.find((a) => a.name === e),
      i = s == null ? void 0 : s.type,
      o = r[e];
    return i && !n.includes(i) ? fy(i, o) : fc(o);
  },
  fy = (e, t) => {
    if (e.charAt(0) === "_") {
      const r = e.slice(1, e.length);
      return rk(t, r);
    }
    switch (e) {
      case ie.bool:
        return ZE(t);
      case ie.float4:
      case ie.float8:
      case ie.int2:
      case ie.int4:
      case ie.int8:
      case ie.numeric:
      case ie.oid:
        return ek(t);
      case ie.json:
      case ie.jsonb:
        return tk(t);
      case ie.timestamp:
        return nk(t);
      case ie.abstime:
      case ie.date:
      case ie.daterange:
      case ie.int4range:
      case ie.int8range:
      case ie.money:
      case ie.reltime:
      case ie.text:
      case ie.time:
      case ie.timestamptz:
      case ie.timetz:
      case ie.tsrange:
      case ie.tstzrange:
        return fc(t);
      default:
        return fc(t);
    }
  },
  fc = (e) => e,
  ZE = (e) => {
    switch (e) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return e;
    }
  },
  ek = (e) => {
    if (typeof e == "string") {
      const t = parseFloat(e);
      if (!Number.isNaN(t)) return t;
    }
    return e;
  },
  tk = (e) => {
    if (typeof e == "string")
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    return e;
  },
  rk = (e, t) => {
    if (typeof e != "string") return e;
    const r = e.length - 1,
      n = e[r];
    if (e[0] === "{" && n === "}") {
      let i;
      const o = e.slice(1, r);
      try {
        i = JSON.parse("[" + o + "]");
      } catch {
        i = o ? o.split(",") : [];
      }
      return i.map((a) => fy(t, a));
    }
    return e;
  },
  nk = (e) => (typeof e == "string" ? e.replace(" ", "T") : e),
  py = (e) => {
    const t = new URL(e);
    return (
      (t.protocol = t.protocol.replace(/^ws/i, "http")),
      (t.pathname = t.pathname
        .replace(/\/+$/, "")
        .replace(/\/socket\/websocket$/i, "")
        .replace(/\/socket$/i, "")
        .replace(/\/websocket$/i, "")),
      t.pathname === "" || t.pathname === "/"
        ? (t.pathname = "/api/broadcast")
        : (t.pathname = t.pathname + "/api/broadcast"),
      t.href
    );
  };
class ql {
  constructor(t, r, n = {}, s = dc) {
    (this.channel = t),
      (this.event = r),
      (this.payload = n),
      (this.timeout = s),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null);
  }
  resend(t) {
    (this.timeout = t),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send();
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(t) {
    this.payload = Object.assign(Object.assign({}, this.payload), t);
  }
  receive(t, r) {
    var n;
    return (
      this._hasReceived(t) &&
        r(
          (n = this.receivedResp) === null || n === void 0 ? void 0 : n.response
        ),
      this.recHooks.push({ status: t, callback: r }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    (this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref));
    const t = (r) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = r),
        this._matchReceive(r);
    };
    this.channel._on(this.refEvent, {}, t),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout));
  }
  trigger(t, r) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: t, response: r });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
  }
  _matchReceive({ status: t, response: r }) {
    this.recHooks.filter((n) => n.status === t).forEach((n) => n.callback(r));
  }
  _hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
}
var Vf;
(function (e) {
  (e.SYNC = "sync"), (e.JOIN = "join"), (e.LEAVE = "leave");
})(Vf || (Vf = {}));
class gi {
  constructor(t, r) {
    (this.channel = t),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.enabled = !1),
      (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
    const n = (r == null ? void 0 : r.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    this.channel._on(n.state, {}, (s) => {
      const { onJoin: i, onLeave: o, onSync: a } = this.caller;
      (this.joinRef = this.channel._joinRef()),
        (this.state = gi.syncState(this.state, s, i, o)),
        this.pendingDiffs.forEach((l) => {
          this.state = gi.syncDiff(this.state, l, i, o);
        }),
        (this.pendingDiffs = []),
        a();
    }),
      this.channel._on(n.diff, {}, (s) => {
        const { onJoin: i, onLeave: o, onSync: a } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(s)
          : ((this.state = gi.syncDiff(this.state, s, i, o)), a());
      }),
      this.onJoin((s, i, o) => {
        this.channel._trigger("presence", {
          event: "join",
          key: s,
          currentPresences: i,
          newPresences: o,
        });
      }),
      this.onLeave((s, i, o) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: s,
          currentPresences: i,
          leftPresences: o,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      });
  }
  static syncState(t, r, n, s) {
    const i = this.cloneDeep(t),
      o = this.transformState(r),
      a = {},
      l = {};
    return (
      this.map(i, (u, c) => {
        o[u] || (l[u] = c);
      }),
      this.map(o, (u, c) => {
        const h = i[u];
        if (h) {
          const f = c.map((w) => w.presence_ref),
            d = h.map((w) => w.presence_ref),
            y = c.filter((w) => d.indexOf(w.presence_ref) < 0),
            p = h.filter((w) => f.indexOf(w.presence_ref) < 0);
          y.length > 0 && (a[u] = y), p.length > 0 && (l[u] = p);
        } else a[u] = c;
      }),
      this.syncDiff(i, { joins: a, leaves: l }, n, s)
    );
  }
  static syncDiff(t, r, n, s) {
    const { joins: i, leaves: o } = {
      joins: this.transformState(r.joins),
      leaves: this.transformState(r.leaves),
    };
    return (
      n || (n = () => {}),
      s || (s = () => {}),
      this.map(i, (a, l) => {
        var u;
        const c = (u = t[a]) !== null && u !== void 0 ? u : [];
        if (((t[a] = this.cloneDeep(l)), c.length > 0)) {
          const h = t[a].map((d) => d.presence_ref),
            f = c.filter((d) => h.indexOf(d.presence_ref) < 0);
          t[a].unshift(...f);
        }
        n(a, c, l);
      }),
      this.map(o, (a, l) => {
        let u = t[a];
        if (!u) return;
        const c = l.map((h) => h.presence_ref);
        (u = u.filter((h) => c.indexOf(h.presence_ref) < 0)),
          (t[a] = u),
          s(a, u, l),
          u.length === 0 && delete t[a];
      }),
      t
    );
  }
  static map(t, r) {
    return Object.getOwnPropertyNames(t).map((n) => r(n, t[n]));
  }
  static transformState(t) {
    return (
      (t = this.cloneDeep(t)),
      Object.getOwnPropertyNames(t).reduce((r, n) => {
        const s = t[n];
        return (
          "metas" in s
            ? (r[n] = s.metas.map(
                (i) => (
                  (i.presence_ref = i.phx_ref),
                  delete i.phx_ref,
                  delete i.phx_ref_prev,
                  i
                )
              ))
            : (r[n] = s),
          r
        );
      }, {})
    );
  }
  static cloneDeep(t) {
    return JSON.parse(JSON.stringify(t));
  }
  onJoin(t) {
    this.caller.onJoin = t;
  }
  onLeave(t) {
    this.caller.onLeave = t;
  }
  onSync(t) {
    this.caller.onSync = t;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Wf;
(function (e) {
  (e.ALL = "*"),
    (e.INSERT = "INSERT"),
    (e.UPDATE = "UPDATE"),
    (e.DELETE = "DELETE");
})(Wf || (Wf = {}));
var vi;
(function (e) {
  (e.BROADCAST = "broadcast"),
    (e.PRESENCE = "presence"),
    (e.POSTGRES_CHANGES = "postgres_changes"),
    (e.SYSTEM = "system");
})(vi || (vi = {}));
var rr;
(function (e) {
  (e.SUBSCRIBED = "SUBSCRIBED"),
    (e.TIMED_OUT = "TIMED_OUT"),
    (e.CLOSED = "CLOSED"),
    (e.CHANNEL_ERROR = "CHANNEL_ERROR");
})(rr || (rr = {}));
class us {
  constructor(t, r = { config: {} }, n) {
    var s, i;
    if (
      ((this.topic = t),
      (this.params = r),
      (this.socket = n),
      (this.bindings = {}),
      (this.state = Se.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = t.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        r.config
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new ql(this, jt.join, this.params, this.timeout)),
      (this.rejoinTimer = new hy(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive("ok", () => {
        (this.state = Se.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((o) => o.send()),
          (this.pushBuffer = []);
      }),
      this._onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = Se.closed),
          this.socket._remove(this);
      }),
      this._onError((o) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, o),
          (this.state = Se.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = Se.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("error", (o) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, o),
          (this.state = Se.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(jt.reply, {}, (o, a) => {
        this._trigger(this._replyEventName(a), o);
      }),
      (this.presence = new gi(this)),
      (this.broadcastEndpointURL = py(this.socket.endPoint)),
      (this.private = this.params.config.private || !1),
      !this.private &&
        !(
          (i =
            (s = this.params.config) === null || s === void 0
              ? void 0
              : s.broadcast) === null || i === void 0
        ) &&
        i.replay)
    )
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  subscribe(t, r = this.timeout) {
    var n, s, i;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.state == Se.closed)
    ) {
      const {
          config: { broadcast: o, presence: a, private: l },
        } = this.params,
        u =
          (s =
            (n = this.bindings.postgres_changes) === null || n === void 0
              ? void 0
              : n.map((d) => d.filter)) !== null && s !== void 0
            ? s
            : [],
        c =
          (!!this.bindings[vi.PRESENCE] &&
            this.bindings[vi.PRESENCE].length > 0) ||
          ((i = this.params.config.presence) === null || i === void 0
            ? void 0
            : i.enabled) === !0,
        h = {},
        f = {
          broadcast: o,
          presence: Object.assign(Object.assign({}, a), { enabled: c }),
          postgres_changes: u,
          private: l,
        };
      this.socket.accessTokenValue &&
        (h.access_token = this.socket.accessTokenValue),
        this._onError((d) => (t == null ? void 0 : t(rr.CHANNEL_ERROR, d))),
        this._onClose(() => (t == null ? void 0 : t(rr.CLOSED))),
        this.updateJoinPayload(Object.assign({ config: f }, h)),
        (this.joinedOnce = !0),
        this._rejoin(r),
        this.joinPush
          .receive("ok", async ({ postgres_changes: d }) => {
            var y;
            if (
              (this.socket._isManualToken() || this.socket.setAuth(),
              d === void 0)
            ) {
              t == null || t(rr.SUBSCRIBED);
              return;
            } else {
              const p = this.bindings.postgres_changes,
                w =
                  (y = p == null ? void 0 : p.length) !== null && y !== void 0
                    ? y
                    : 0,
                g = [];
              for (let m = 0; m < w; m++) {
                const v = p[m],
                  {
                    filter: { event: _, schema: S, table: E, filter: k },
                  } = v,
                  R = d && d[m];
                if (
                  R &&
                  R.event === _ &&
                  us.isFilterValueEqual(R.schema, S) &&
                  us.isFilterValueEqual(R.table, E) &&
                  us.isFilterValueEqual(R.filter, k)
                )
                  g.push(Object.assign(Object.assign({}, v), { id: R.id }));
                else {
                  this.unsubscribe(),
                    (this.state = Se.errored),
                    t == null ||
                      t(
                        rr.CHANNEL_ERROR,
                        new Error(
                          "mismatch between server and client bindings for postgres changes"
                        )
                      );
                  return;
                }
              }
              (this.bindings.postgres_changes = g), t && t(rr.SUBSCRIBED);
              return;
            }
          })
          .receive("error", (d) => {
            (this.state = Se.errored),
              t == null ||
                t(
                  rr.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(d).join(", ") || "error")
                  )
                );
          })
          .receive("timeout", () => {
            t == null || t(rr.TIMED_OUT);
          });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(t, r = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: t },
      r.timeout || this.timeout
    );
  }
  async untrack(t = {}) {
    return await this.send({ type: "presence", event: "untrack" }, t);
  }
  on(t, r, n) {
    return (
      this.state === Se.joined &&
        t === vi.PRESENCE &&
        (this.socket.log(
          "channel",
          `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`
        ),
        this.unsubscribe().then(async () => await this.subscribe())),
      this._on(t, r, n)
    );
  }
  async httpSend(t, r, n = {}) {
    var s;
    if (r == null) return Promise.reject("Payload is required for httpSend()");
    const i = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json",
    };
    this.socket.accessTokenValue &&
      (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const o = {
        method: "POST",
        headers: i,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: t,
              payload: r,
              private: this.private,
            },
          ],
        }),
      },
      a = await this._fetchWithTimeout(
        this.broadcastEndpointURL,
        o,
        (s = n.timeout) !== null && s !== void 0 ? s : this.timeout
      );
    if (a.status === 202) return { success: !0 };
    let l = a.statusText;
    try {
      const u = await a.json();
      l = u.error || u.message || l;
    } catch {}
    return Promise.reject(new Error(l));
  }
  async send(t, r = {}) {
    var n, s;
    if (!this._canPush() && t.type === "broadcast") {
      console.warn(
        "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery."
      );
      const { event: i, payload: o } = t,
        a = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json",
        };
      this.socket.accessTokenValue &&
        (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const l = {
        method: "POST",
        headers: a,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: i,
              payload: o,
              private: this.private,
            },
          ],
        }),
      };
      try {
        const u = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          l,
          (n = r.timeout) !== null && n !== void 0 ? n : this.timeout
        );
        return (
          await ((s = u.body) === null || s === void 0 ? void 0 : s.cancel()),
          u.ok ? "ok" : "error"
        );
      } catch (u) {
        return u.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((i) => {
        var o, a, l;
        const u = this._push(t.type, t, r.timeout || this.timeout);
        t.type === "broadcast" &&
          !(
            !(
              (l =
                (a =
                  (o = this.params) === null || o === void 0
                    ? void 0
                    : o.config) === null || a === void 0
                  ? void 0
                  : a.broadcast) === null || l === void 0
            ) && l.ack
          ) &&
          i("ok"),
          u.receive("ok", () => i("ok")),
          u.receive("error", () => i("error")),
          u.receive("timeout", () => i("timed out"));
      });
  }
  updateJoinPayload(t) {
    this.joinPush.updatePayload(t);
  }
  unsubscribe(t = this.timeout) {
    this.state = Se.leaving;
    const r = () => {
      this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(jt.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let n = null;
    return new Promise((s) => {
      (n = new ql(this, jt.leave, {}, t)),
        n
          .receive("ok", () => {
            r(), s("ok");
          })
          .receive("timeout", () => {
            r(), s("timed out");
          })
          .receive("error", () => {
            s("error");
          }),
        n.send(),
        this._canPush() || n.trigger("ok", {});
    }).finally(() => {
      n == null || n.destroy();
    });
  }
  teardown() {
    this.pushBuffer.forEach((t) => t.destroy()),
      (this.pushBuffer = []),
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      (this.state = Se.closed),
      (this.bindings = {});
  }
  async _fetchWithTimeout(t, r, n) {
    const s = new AbortController(),
      i = setTimeout(() => s.abort(), n),
      o = await this.socket.fetch(
        t,
        Object.assign(Object.assign({}, r), { signal: s.signal })
      );
    return clearTimeout(i), o;
  }
  _push(t, r, n = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let s = new ql(this, t, r, n);
    return this._canPush() ? s.send() : this._addToPushBuffer(s), s;
  }
  _addToPushBuffer(t) {
    if (
      (t.startTimeout(), this.pushBuffer.push(t), this.pushBuffer.length > JE)
    ) {
      const r = this.pushBuffer.shift();
      r &&
        (r.destroy(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${r.event}`,
          r.payload
        ));
    }
  }
  _onMessage(t, r, n) {
    return r;
  }
  _isMember(t) {
    return this.topic === t;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(t, r, n) {
    var s, i;
    const o = t.toLocaleLowerCase(),
      { close: a, error: l, leave: u, join: c } = jt;
    if (n && [a, l, u, c].indexOf(o) >= 0 && n !== this._joinRef()) return;
    let f = this._onMessage(o, r, n);
    if (r && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o)
      ? (s = this.bindings.postgres_changes) === null ||
        s === void 0 ||
        s
          .filter((d) => {
            var y, p, w;
            return (
              ((y = d.filter) === null || y === void 0 ? void 0 : y.event) ===
                "*" ||
              ((w =
                (p = d.filter) === null || p === void 0 ? void 0 : p.event) ===
                null || w === void 0
                ? void 0
                : w.toLocaleLowerCase()) === o
            );
          })
          .map((d) => d.callback(f, n))
      : (i = this.bindings[o]) === null ||
        i === void 0 ||
        i
          .filter((d) => {
            var y, p, w, g, m, v, _, S;
            if (["broadcast", "presence", "postgres_changes"].includes(o))
              if ("id" in d) {
                const E = d.id,
                  k =
                    (y = d.filter) === null || y === void 0 ? void 0 : y.event;
                return (
                  E &&
                  ((p = r.ids) === null || p === void 0
                    ? void 0
                    : p.includes(E)) &&
                  (k === "*" ||
                    (k == null ? void 0 : k.toLocaleLowerCase()) ===
                      ((w = r.data) === null || w === void 0
                        ? void 0
                        : w.type.toLocaleLowerCase())) &&
                  (!(!((g = d.filter) === null || g === void 0) && g.table) ||
                    d.filter.table ===
                      ((m = r.data) === null || m === void 0
                        ? void 0
                        : m.table))
                );
              } else {
                const E =
                  (_ =
                    (v = d == null ? void 0 : d.filter) === null || v === void 0
                      ? void 0
                      : v.event) === null || _ === void 0
                    ? void 0
                    : _.toLocaleLowerCase();
                return (
                  E === "*" ||
                  E ===
                    ((S = r == null ? void 0 : r.event) === null || S === void 0
                      ? void 0
                      : S.toLocaleLowerCase())
                );
              }
            else return d.type.toLocaleLowerCase() === o;
          })
          .map((d) => {
            if (typeof f == "object" && "ids" in f) {
              const y = f.data,
                {
                  schema: p,
                  table: w,
                  commit_timestamp: g,
                  type: m,
                  errors: v,
                } = y;
              f = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: p,
                    table: w,
                    commit_timestamp: g,
                    eventType: m,
                    new: {},
                    old: {},
                    errors: v,
                  }
                ),
                this._getPayloadRecords(y)
              );
            }
            d.callback(f, n);
          });
  }
  _isClosed() {
    return this.state === Se.closed;
  }
  _isJoined() {
    return this.state === Se.joined;
  }
  _isJoining() {
    return this.state === Se.joining;
  }
  _isLeaving() {
    return this.state === Se.leaving;
  }
  _replyEventName(t) {
    return `chan_reply_${t}`;
  }
  _on(t, r, n) {
    const s = t.toLocaleLowerCase(),
      i = { type: s, filter: r, callback: n };
    return (
      this.bindings[s] ? this.bindings[s].push(i) : (this.bindings[s] = [i]),
      this
    );
  }
  _off(t, r) {
    const n = t.toLocaleLowerCase();
    return (
      this.bindings[n] &&
        (this.bindings[n] = this.bindings[n].filter((s) => {
          var i;
          return !(
            ((i = s.type) === null || i === void 0
              ? void 0
              : i.toLocaleLowerCase()) === n && us.isEqual(s.filter, r)
          );
        })),
      this
    );
  }
  static isEqual(t, r) {
    if (Object.keys(t).length !== Object.keys(r).length) return !1;
    for (const n in t) if (t[n] !== r[n]) return !1;
    return !0;
  }
  static isFilterValueEqual(t, r) {
    return (t ?? void 0) === (r ?? void 0);
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin();
  }
  _onClose(t) {
    this._on(jt.close, {}, t);
  }
  _onError(t) {
    this._on(jt.error, {}, (r) => t(r));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(t = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = Se.joining),
      this.joinPush.resend(t));
  }
  _getPayloadRecords(t) {
    const r = { new: {}, old: {} };
    return (
      (t.type === "INSERT" || t.type === "UPDATE") &&
        (r.new = Bf(t.columns, t.record)),
      (t.type === "UPDATE" || t.type === "DELETE") &&
        (r.old = Bf(t.columns, t.old_record)),
      r
    );
  }
}
const Kl = () => {},
  Po = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  sk = [1e3, 2e3, 5e3, 1e4],
  ik = 1e4,
  ok = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class ak {
  constructor(t, r) {
    var n;
    if (
      ((this.accessTokenValue = null),
      (this.apiKey = null),
      (this._manuallySetToken = !1),
      (this.channels = new Array()),
      (this.endPoint = ""),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.timeout = dc),
      (this.transport = null),
      (this.heartbeatIntervalMs = Po.HEARTBEAT_INTERVAL),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.heartbeatCallback = Kl),
      (this.ref = 0),
      (this.reconnectTimer = null),
      (this.vsn = zf),
      (this.logger = Kl),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new YE()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this.accessToken = null),
      (this._connectionState = "disconnected"),
      (this._wasManualDisconnect = !1),
      (this._authPromise = null),
      (this._heartbeatSentAt = null),
      (this._resolveFetch = (s) =>
        s ? (...i) => s(...i) : (...i) => fetch(...i)),
      !(
        !((n = r == null ? void 0 : r.params) === null || n === void 0) &&
        n.apikey
      ))
    )
      throw new Error("API key is required to connect to Realtime");
    (this.apiKey = r.params.apikey),
      (this.endPoint = `${t}/${hc.websocket}`),
      (this.httpEndpoint = py(t)),
      this._initializeOptions(r),
      this._setupReconnectionTimer(),
      (this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch));
  }
  connect() {
    if (
      !(
        this.isConnecting() ||
        this.isDisconnecting() ||
        (this.conn !== null && this.isConnected())
      )
    ) {
      if (
        (this._setConnectionState("connecting"),
        this.accessToken &&
          !this._authPromise &&
          this._setAuthSafely("connect"),
        this.transport)
      )
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = HE.createWebSocket(this.endpointURL());
        } catch (t) {
          this._setConnectionState("disconnected");
          const r = t.message;
          throw r.includes("Node.js")
            ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
            : new Error(`WebSocket not available: ${r}`);
        }
      this._setupConnectionHandlers();
    }
  }
  endpointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: this.vsn })
    );
  }
  disconnect(t, r) {
    if (!this.isDisconnecting())
      if ((this._setConnectionState("disconnecting", !0), this.conn)) {
        const n = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        (this.conn.onclose = () => {
          clearTimeout(n), this._setConnectionState("disconnected");
        }),
          typeof this.conn.close == "function" &&
            (t ? this.conn.close(t, r ?? "") : this.conn.close()),
          this._teardownConnection();
      } else this._setConnectionState("disconnected");
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(t) {
    const r = await t.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), r;
  }
  async removeAllChannels() {
    const t = await Promise.all(this.channels.map((r) => r.unsubscribe()));
    return (this.channels = []), this.disconnect(), t;
  }
  log(t, r, n) {
    this.logger(t, r, n);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Rr.connecting:
        return hn.Connecting;
      case Rr.open:
        return hn.Open;
      case Rr.closing:
        return hn.Closing;
      default:
        return hn.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === hn.Open;
  }
  isConnecting() {
    return this._connectionState === "connecting";
  }
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(t, r = { config: {} }) {
    const n = `realtime:${t}`,
      s = this.getChannels().find((i) => i.topic === n);
    if (s) return s;
    {
      const i = new us(`realtime:${t}`, r, this);
      return this.channels.push(i), i;
    }
  }
  push(t) {
    const { topic: r, event: n, payload: s, ref: i } = t,
      o = () => {
        this.encode(t, (a) => {
          var l;
          (l = this.conn) === null || l === void 0 || l.send(a);
        });
      };
    this.log("push", `${r} ${n} (${i})`, s),
      this.isConnected() ? o() : this.sendBuffer.push(o);
  }
  async setAuth(t = null) {
    this._authPromise = this._performAuth(t);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    var t;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      (this.pendingHeartbeatRef = null),
        (this._heartbeatSentAt = null),
        this.log(
          "transport",
          "heartbeat timeout. Attempting to re-establish connection"
        );
      try {
        this.heartbeatCallback("timeout");
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
      }
      (this._wasManualDisconnect = !1),
        (t = this.conn) === null ||
          t === void 0 ||
          t.close(QE, "heartbeat timeout"),
        setTimeout(() => {
          var r;
          this.isConnected() ||
            (r = this.reconnectTimer) === null ||
            r === void 0 ||
            r.scheduleTimeout();
        }, Po.HEARTBEAT_TIMEOUT_FALLBACK);
      return;
    }
    (this._heartbeatSentAt = Date.now()),
      (this.pendingHeartbeatRef = this._makeRef()),
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef,
      });
    try {
      this.heartbeatCallback("sent");
    } catch (r) {
      this.log("error", "error in heartbeat callback", r);
    }
    this._setAuthSafely("heartbeat");
  }
  onHeartbeat(t) {
    this.heartbeatCallback = t;
  }
  flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((t) => t()), (this.sendBuffer = []));
  }
  _makeRef() {
    let t = this.ref + 1;
    return (
      t === this.ref ? (this.ref = 0) : (this.ref = t), this.ref.toString()
    );
  }
  _leaveOpenTopic(t) {
    let r = this.channels.find(
      (n) => n.topic === t && (n._isJoined() || n._isJoining())
    );
    r &&
      (this.log("transport", `leaving duplicate topic "${t}"`),
      r.unsubscribe());
  }
  _remove(t) {
    this.channels = this.channels.filter((r) => r.topic !== t.topic);
  }
  _onConnMessage(t) {
    this.decode(t.data, (r) => {
      if (
        r.topic === "phoenix" &&
        r.event === "phx_reply" &&
        r.ref &&
        r.ref === this.pendingHeartbeatRef
      ) {
        const u = this._heartbeatSentAt
          ? Date.now() - this._heartbeatSentAt
          : void 0;
        try {
          this.heartbeatCallback(r.payload.status === "ok" ? "ok" : "error", u);
        } catch (c) {
          this.log("error", "error in heartbeat callback", c);
        }
        (this._heartbeatSentAt = null), (this.pendingHeartbeatRef = null);
      }
      const { topic: n, event: s, payload: i, ref: o } = r,
        a = o ? `(${o})` : "",
        l = i.status || "";
      this.log("receive", `${l} ${n} ${s} ${a}`.trim(), i),
        this.channels
          .filter((u) => u._isMember(n))
          .forEach((u) => u._trigger(s, i, o)),
        this._triggerStateCallbacks("message", r);
    });
  }
  _clearTimer(t) {
    var r;
    t === "heartbeat" && this.heartbeatTimer
      ? (clearInterval(this.heartbeatTimer), (this.heartbeatTimer = void 0))
      : t === "reconnect" &&
        ((r = this.reconnectTimer) === null || r === void 0 || r.reset());
  }
  _clearAllTimers() {
    this._clearTimer("heartbeat"), this._clearTimer("reconnect");
  }
  _setupConnectionHandlers() {
    this.conn &&
      ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"),
      (this.conn.onopen = () => this._onConnOpen()),
      (this.conn.onerror = (t) => this._onConnError(t)),
      (this.conn.onmessage = (t) => this._onConnMessage(t)),
      (this.conn.onclose = (t) => this._onConnClose(t)),
      this.conn.readyState === Rr.open && this._onConnOpen());
  }
  _teardownConnection() {
    if (this.conn) {
      if (
        this.conn.readyState === Rr.open ||
        this.conn.readyState === Rr.connecting
      )
        try {
          this.conn.close();
        } catch (t) {
          this.log("error", "Error closing connection", t);
        }
      (this.conn.onopen = null),
        (this.conn.onerror = null),
        (this.conn.onmessage = null),
        (this.conn.onclose = null),
        (this.conn = null);
    }
    this._clearAllTimers(),
      this._terminateWorker(),
      this.channels.forEach((t) => t.teardown());
  }
  _onConnOpen() {
    this._setConnectionState("connected"),
      this.log("transport", `connected to ${this.endpointURL()}`),
      (
        this._authPromise ||
        (this.accessToken && !this.accessTokenValue
          ? this.setAuth()
          : Promise.resolve())
      )
        .then(() => {
          this.flushSendBuffer();
        })
        .catch((r) => {
          this.log("error", "error waiting for auth on connect", r),
            this.flushSendBuffer();
        }),
      this._clearTimer("reconnect"),
      this.worker
        ? this.workerRef || this._startWorkerHeartbeat()
        : this._startHeartbeat(),
      this._triggerStateCallbacks("open");
  }
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this.sendHeartbeat(),
        this.heartbeatIntervalMs
      ));
  }
  _startWorkerHeartbeat() {
    this.workerUrl
      ? this.log("worker", `starting worker for from ${this.workerUrl}`)
      : this.log("worker", "starting default worker");
    const t = this._workerObjectUrl(this.workerUrl);
    (this.workerRef = new Worker(t)),
      (this.workerRef.onerror = (r) => {
        this.log("worker", "worker error", r.message), this._terminateWorker();
      }),
      (this.workerRef.onmessage = (r) => {
        r.data.event === "keepAlive" && this.sendHeartbeat();
      }),
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs,
      });
  }
  _terminateWorker() {
    this.workerRef &&
      (this.log("worker", "terminating worker"),
      this.workerRef.terminate(),
      (this.workerRef = void 0));
  }
  _onConnClose(t) {
    var r;
    this._setConnectionState("disconnected"),
      this.log("transport", "close", t),
      this._triggerChanError(),
      this._clearTimer("heartbeat"),
      this._wasManualDisconnect ||
        (r = this.reconnectTimer) === null ||
        r === void 0 ||
        r.scheduleTimeout(),
      this._triggerStateCallbacks("close", t);
  }
  _onConnError(t) {
    this._setConnectionState("disconnected"),
      this.log("transport", `${t}`),
      this._triggerChanError(),
      this._triggerStateCallbacks("error", t);
  }
  _triggerChanError() {
    this.channels.forEach((t) => t._trigger(jt.error));
  }
  _appendParams(t, r) {
    if (Object.keys(r).length === 0) return t;
    const n = t.match(/\?/) ? "&" : "?",
      s = new URLSearchParams(r);
    return `${t}${n}${s}`;
  }
  _workerObjectUrl(t) {
    let r;
    if (t) r = t;
    else {
      const n = new Blob([ok], { type: "application/javascript" });
      r = URL.createObjectURL(n);
    }
    return r;
  }
  _setConnectionState(t, r = !1) {
    (this._connectionState = t),
      t === "connecting"
        ? (this._wasManualDisconnect = !1)
        : t === "disconnecting" && (this._wasManualDisconnect = r);
  }
  async _performAuth(t = null) {
    let r,
      n = !1;
    if (t) (r = t), (n = !0);
    else if (this.accessToken)
      try {
        r = await this.accessToken();
      } catch (s) {
        this.log("error", "Error fetching access token from callback", s),
          (r = this.accessTokenValue);
      }
    else r = this.accessTokenValue;
    n
      ? (this._manuallySetToken = !0)
      : this.accessToken && (this._manuallySetToken = !1),
      this.accessTokenValue != r &&
        ((this.accessTokenValue = r),
        this.channels.forEach((s) => {
          const i = { access_token: r, version: KE };
          r && s.updateJoinPayload(i),
            s.joinedOnce &&
              s._isJoined() &&
              s._push(jt.access_token, { access_token: r });
        }));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(t = "general") {
    this._isManualToken() ||
      this.setAuth().catch((r) => {
        this.log("error", `Error setting auth in ${t}`, r);
      });
  }
  _triggerStateCallbacks(t, r) {
    try {
      this.stateChangeCallbacks[t].forEach((n) => {
        try {
          n(r);
        } catch (s) {
          this.log("error", `error in ${t} callback`, s);
        }
      });
    } catch (n) {
      this.log("error", `error triggering ${t} callbacks`, n);
    }
  }
  _setupReconnectionTimer() {
    this.reconnectTimer = new hy(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, Po.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  _initializeOptions(t) {
    var r, n, s, i, o, a, l, u, c, h, f, d;
    switch (
      ((this.transport =
        (r = t == null ? void 0 : t.transport) !== null && r !== void 0
          ? r
          : null),
      (this.timeout =
        (n = t == null ? void 0 : t.timeout) !== null && n !== void 0 ? n : dc),
      (this.heartbeatIntervalMs =
        (s = t == null ? void 0 : t.heartbeatIntervalMs) !== null &&
        s !== void 0
          ? s
          : Po.HEARTBEAT_INTERVAL),
      (this.worker =
        (i = t == null ? void 0 : t.worker) !== null && i !== void 0 ? i : !1),
      (this.accessToken =
        (o = t == null ? void 0 : t.accessToken) !== null && o !== void 0
          ? o
          : null),
      (this.heartbeatCallback =
        (a = t == null ? void 0 : t.heartbeatCallback) !== null && a !== void 0
          ? a
          : Kl),
      (this.vsn =
        (l = t == null ? void 0 : t.vsn) !== null && l !== void 0 ? l : zf),
      t != null && t.params && (this.params = t.params),
      t != null && t.logger && (this.logger = t.logger),
      ((t != null && t.logLevel) || (t != null && t.log_level)) &&
        ((this.logLevel = t.logLevel || t.log_level),
        (this.params = Object.assign(Object.assign({}, this.params), {
          log_level: this.logLevel,
        }))),
      (this.reconnectAfterMs =
        (u = t == null ? void 0 : t.reconnectAfterMs) !== null && u !== void 0
          ? u
          : (y) => sk[y - 1] || ik),
      this.vsn)
    ) {
      case dy:
        (this.encode =
          (c = t == null ? void 0 : t.encode) !== null && c !== void 0
            ? c
            : (y, p) => p(JSON.stringify(y))),
          (this.decode =
            (h = t == null ? void 0 : t.decode) !== null && h !== void 0
              ? h
              : (y, p) => p(JSON.parse(y)));
        break;
      case GE:
        (this.encode =
          (f = t == null ? void 0 : t.encode) !== null && f !== void 0
            ? f
            : this.serializer.encode.bind(this.serializer)),
          (this.decode =
            (d = t == null ? void 0 : t.decode) !== null && d !== void 0
              ? d
              : this.serializer.decode.bind(this.serializer));
        break;
      default:
        throw new Error(`Unsupported serializer version: ${this.vsn}`);
    }
    if (this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = t == null ? void 0 : t.workerUrl;
    }
  }
}
var Ui = class extends Error {
  constructor(e, t) {
    var r;
    super(e),
      (this.name = "IcebergError"),
      (this.status = t.status),
      (this.icebergType = t.icebergType),
      (this.icebergCode = t.icebergCode),
      (this.details = t.details),
      (this.isCommitStateUnknown =
        t.icebergType === "CommitStateUnknownException" ||
        ([500, 502, 504].includes(t.status) &&
          ((r = t.icebergType) == null ? void 0 : r.includes("CommitState")) ===
            !0));
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function lk(e, t, r) {
  const n = new URL(t, e);
  if (r)
    for (const [s, i] of Object.entries(r))
      i !== void 0 && n.searchParams.set(s, i);
  return n.toString();
}
async function uk(e) {
  return !e || e.type === "none"
    ? {}
    : e.type === "bearer"
    ? { Authorization: `Bearer ${e.token}` }
    : e.type === "header"
    ? { [e.name]: e.value }
    : e.type === "custom"
    ? await e.getHeaders()
    : {};
}
function ck(e) {
  const t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: r, path: n, query: s, body: i, headers: o }) {
      const a = lk(e.baseUrl, n, s),
        l = await uk(e.auth),
        u = await t(a, {
          method: r,
          headers: {
            ...(i ? { "Content-Type": "application/json" } : {}),
            ...l,
            ...o,
          },
          body: i ? JSON.stringify(i) : void 0,
        }),
        c = await u.text(),
        h = (u.headers.get("content-type") || "").includes("application/json"),
        f = h && c ? JSON.parse(c) : c;
      if (!u.ok) {
        const d = h ? f : void 0,
          y = d == null ? void 0 : d.error;
        throw new Ui(
          (y == null ? void 0 : y.message) ??
            `Request failed with status ${u.status}`,
          {
            status: u.status,
            icebergType: y == null ? void 0 : y.type,
            icebergCode: y == null ? void 0 : y.code,
            details: d,
          }
        );
      }
      return { status: u.status, headers: u.headers, data: f };
    },
  };
}
function Oo(e) {
  return e.join("");
}
var dk = class {
  constructor(e, t = "") {
    (this.client = e), (this.prefix = t);
  }
  async listNamespaces(e) {
    const t = e ? { parent: Oo(e.namespace) } : void 0;
    return (
      await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces`,
        query: t,
      })
    ).data.namespaces.map((n) => ({ namespace: n }));
  }
  async createNamespace(e, t) {
    const r = {
      namespace: e.namespace,
      properties: t == null ? void 0 : t.properties,
    };
    return (
      await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces`,
        body: r,
      })
    ).data;
  }
  async dropNamespace(e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Oo(e.namespace)}`,
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Oo(e.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(e) {
    try {
      return (
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${Oo(e.namespace)}`,
        }),
        !0
      );
    } catch (t) {
      if (t instanceof Ui && t.status === 404) return !1;
      throw t;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (r) {
      if (r instanceof Ui && r.status === 409) return;
      throw r;
    }
  }
};
function Bn(e) {
  return e.join("");
}
var hk = class {
    constructor(e, t = "", r) {
      (this.client = e), (this.prefix = t), (this.accessDelegation = r);
    }
    async listTables(e) {
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Bn(e.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(e, t) {
      const r = {};
      return (
        this.accessDelegation &&
          (r["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${Bn(e.namespace)}/tables`,
            body: t,
            headers: r,
          })
        ).data.metadata
      );
    }
    async updateTable(e, t) {
      const r = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${Bn(e.namespace)}/tables/${e.name}`,
        body: t,
      });
      return {
        "metadata-location": r.data["metadata-location"],
        metadata: r.data.metadata,
      };
    }
    async dropTable(e, t) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${Bn(e.namespace)}/tables/${e.name}`,
        query: { purgeRequested: String((t == null ? void 0 : t.purge) ?? !1) },
      });
    }
    async loadTable(e) {
      const t = {};
      return (
        this.accessDelegation &&
          (t["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${Bn(e.namespace)}/tables/${
              e.name
            }`,
            headers: t,
          })
        ).data.metadata
      );
    }
    async tableExists(e) {
      const t = {};
      this.accessDelegation &&
        (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: "HEAD",
            path: `${this.prefix}/namespaces/${Bn(e.namespace)}/tables/${
              e.name
            }`,
            headers: t,
          }),
          !0
        );
      } catch (r) {
        if (r instanceof Ui && r.status === 404) return !1;
        throw r;
      }
    }
    async createTableIfNotExists(e, t) {
      try {
        return await this.createTable(e, t);
      } catch (r) {
        if (r instanceof Ui && r.status === 409)
          return await this.loadTable({ namespace: e.namespace, name: t.name });
        throw r;
      }
    }
  },
  fk = class {
    constructor(e) {
      var n;
      let t = "v1";
      e.catalogName && (t += `/${e.catalogName}`);
      const r = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
      (this.client = ck({ baseUrl: r, auth: e.auth, fetchImpl: e.fetch })),
        (this.accessDelegation =
          (n = e.accessDelegation) == null ? void 0 : n.join(",")),
        (this.namespaceOps = new dk(this.client, t)),
        (this.tableOps = new hk(this.client, t, this.accessDelegation));
    }
    async listNamespaces(e) {
      return this.namespaceOps.listNamespaces(e);
    }
    async createNamespace(e, t) {
      return this.namespaceOps.createNamespace(e, t);
    }
    async dropNamespace(e) {
      await this.namespaceOps.dropNamespace(e);
    }
    async loadNamespaceMetadata(e) {
      return this.namespaceOps.loadNamespaceMetadata(e);
    }
    async listTables(e) {
      return this.tableOps.listTables(e);
    }
    async createTable(e, t) {
      return this.tableOps.createTable(e, t);
    }
    async updateTable(e, t) {
      return this.tableOps.updateTable(e, t);
    }
    async dropTable(e, t) {
      await this.tableOps.dropTable(e, t);
    }
    async loadTable(e) {
      return this.tableOps.loadTable(e);
    }
    async namespaceExists(e) {
      return this.namespaceOps.namespaceExists(e);
    }
    async tableExists(e) {
      return this.tableOps.tableExists(e);
    }
    async createNamespaceIfNotExists(e, t) {
      return this.namespaceOps.createNamespaceIfNotExists(e, t);
    }
    async createTableIfNotExists(e, t) {
      return this.tableOps.createTableIfNotExists(e, t);
    }
  },
  il = class extends Error {
    constructor(e) {
      super(e), (this.__isStorageError = !0), (this.name = "StorageError");
    }
  };
function he(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
var pk = class extends il {
    constructor(e, t, r) {
      super(e),
        (this.name = "StorageApiError"),
        (this.status = t),
        (this.statusCode = r);
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        statusCode: this.statusCode,
      };
    }
  },
  pc = class extends il {
    constructor(e, t) {
      super(e), (this.name = "StorageUnknownError"), (this.originalError = t);
    }
  };
const Id = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  mk = () => Response,
  mc = (e) => {
    if (Array.isArray(e)) return e.map((r) => mc(r));
    if (typeof e == "function" || e !== Object(e)) return e;
    const t = {};
    return (
      Object.entries(e).forEach(([r, n]) => {
        const s = r.replace(/([-_][a-z])/gi, (i) =>
          i.toUpperCase().replace(/[-_]/g, "")
        );
        t[s] = mc(n);
      }),
      t
    );
  },
  gk = (e) => {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  vk = (e) =>
    !e ||
    typeof e != "string" ||
    e.length === 0 ||
    e.length > 100 ||
    e.trim() !== e ||
    e.includes("/") ||
    e.includes("\\")
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e);
function Fi(e) {
  "@babel/helpers - typeof";
  return (
    (Fi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Fi(e)
  );
}
function yk(e, t) {
  if (Fi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wk(e) {
  var t = yk(e, "string");
  return Fi(t) == "symbol" ? t : t + "";
}
function xk(e, t, r) {
  return (
    (t = wk(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Hf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hf(Object(r), !0).forEach(function (n) {
          xk(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Hf(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
const Gl = (e) => {
    var t;
    return (
      e.msg ||
      e.message ||
      e.error_description ||
      (typeof e.error == "string"
        ? e.error
        : (t = e.error) === null || t === void 0
        ? void 0
        : t.message) ||
      JSON.stringify(e)
    );
  },
  _k = async (e, t, r) => {
    e instanceof (await mk()) && !(r != null && r.noResolveJson)
      ? e
          .json()
          .then((n) => {
            const s = e.status || 500,
              i = (n == null ? void 0 : n.statusCode) || s + "";
            t(new pk(Gl(n), s, i));
          })
          .catch((n) => {
            t(new pc(Gl(n), n));
          })
      : t(new pc(Gl(e), e));
  },
  bk = (e, t, r, n) => {
    const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
    return e === "GET" || !n
      ? s
      : (gk(n)
          ? ((s.headers = z(
              { "Content-Type": "application/json" },
              t == null ? void 0 : t.headers
            )),
            (s.body = JSON.stringify(n)))
          : (s.body = n),
        t != null && t.duplex && (s.duplex = t.duplex),
        z(z({}, s), r));
  };
async function to(e, t, r, n, s, i) {
  return new Promise((o, a) => {
    e(r, bk(t, n, s, i))
      .then((l) => {
        if (!l.ok) throw l;
        return n != null && n.noResolveJson ? l : l.json();
      })
      .then((l) => o(l))
      .catch((l) => _k(l, a, n));
  });
}
async function zi(e, t, r, n) {
  return to(e, "GET", t, r, n);
}
async function Pt(e, t, r, n, s) {
  return to(e, "POST", t, n, s, r);
}
async function gc(e, t, r, n, s) {
  return to(e, "PUT", t, n, s, r);
}
async function Sk(e, t, r, n) {
  return to(e, "HEAD", t, z(z({}, r), {}, { noResolveJson: !0 }), n);
}
async function $d(e, t, r, n, s) {
  return to(e, "DELETE", t, n, s, r);
}
var Ek = class {
  constructor(e, t) {
    (this.downloadFn = e), (this.shouldThrowOnError = t);
  }
  then(e, t) {
    return this.execute().then(e, t);
  }
  async execute() {
    var e = this;
    try {
      return { data: (await e.downloadFn()).body, error: null };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (he(t)) return { data: null, error: t };
      throw t;
    }
  }
};
let my;
my = Symbol.toStringTag;
var kk = class {
  constructor(e, t) {
    (this.downloadFn = e),
      (this.shouldThrowOnError = t),
      (this[my] = "BlobDownloadBuilder"),
      (this.promise = null);
  }
  asStream() {
    return new Ek(this.downloadFn, this.shouldThrowOnError);
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  async execute() {
    var e = this;
    try {
      return { data: await (await e.downloadFn()).blob(), error: null };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (he(t)) return { data: null, error: t };
      throw t;
    }
  }
};
const Tk = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  qf = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
var Ck = class {
  constructor(e, t = {}, r, n) {
    (this.shouldThrowOnError = !1),
      (this.url = e),
      (this.headers = t),
      (this.bucketId = r),
      (this.fetch = Id(n));
  }
  throwOnError() {
    return (this.shouldThrowOnError = !0), this;
  }
  async uploadOrUpdate(e, t, r, n) {
    var s = this;
    try {
      let i;
      const o = z(z({}, qf), n);
      let a = z(
        z({}, s.headers),
        e === "POST" && { "x-upsert": String(o.upsert) }
      );
      const l = o.metadata;
      typeof Blob < "u" && r instanceof Blob
        ? ((i = new FormData()),
          i.append("cacheControl", o.cacheControl),
          l && i.append("metadata", s.encodeMetadata(l)),
          i.append("", r))
        : typeof FormData < "u" && r instanceof FormData
        ? ((i = r),
          i.has("cacheControl") || i.append("cacheControl", o.cacheControl),
          l && !i.has("metadata") && i.append("metadata", s.encodeMetadata(l)))
        : ((i = r),
          (a["cache-control"] = `max-age=${o.cacheControl}`),
          (a["content-type"] = o.contentType),
          l && (a["x-metadata"] = s.toBase64(s.encodeMetadata(l))),
          ((typeof ReadableStream < "u" && i instanceof ReadableStream) ||
            (i &&
              typeof i == "object" &&
              "pipe" in i &&
              typeof i.pipe == "function")) &&
            !o.duplex &&
            (o.duplex = "half")),
        n != null && n.headers && (a = z(z({}, a), n.headers));
      const u = s._removeEmptyFolders(t),
        c = s._getFinalPath(u),
        h = await (e == "PUT" ? gc : Pt)(
          s.fetch,
          `${s.url}/object/${c}`,
          i,
          z({ headers: a }, o != null && o.duplex ? { duplex: o.duplex } : {})
        );
      return { data: { path: u, id: h.Id, fullPath: h.Key }, error: null };
    } catch (i) {
      if (s.shouldThrowOnError) throw i;
      if (he(i)) return { data: null, error: i };
      throw i;
    }
  }
  async upload(e, t, r) {
    return this.uploadOrUpdate("POST", e, t, r);
  }
  async uploadToSignedUrl(e, t, r, n) {
    var s = this;
    const i = s._removeEmptyFolders(e),
      o = s._getFinalPath(i),
      a = new URL(s.url + `/object/upload/sign/${o}`);
    a.searchParams.set("token", t);
    try {
      let l;
      const u = z({ upsert: qf.upsert }, n),
        c = z(z({}, s.headers), { "x-upsert": String(u.upsert) });
      return (
        typeof Blob < "u" && r instanceof Blob
          ? ((l = new FormData()),
            l.append("cacheControl", u.cacheControl),
            l.append("", r))
          : typeof FormData < "u" && r instanceof FormData
          ? ((l = r), l.append("cacheControl", u.cacheControl))
          : ((l = r),
            (c["cache-control"] = `max-age=${u.cacheControl}`),
            (c["content-type"] = u.contentType)),
        {
          data: {
            path: i,
            fullPath: (await gc(s.fetch, a.toString(), l, { headers: c })).Key,
          },
          error: null,
        }
      );
    } catch (l) {
      if (s.shouldThrowOnError) throw l;
      if (he(l)) return { data: null, error: l };
      throw l;
    }
  }
  async createSignedUploadUrl(e, t) {
    var r = this;
    try {
      let n = r._getFinalPath(e);
      const s = z({}, r.headers);
      t != null && t.upsert && (s["x-upsert"] = "true");
      const i = await Pt(
          r.fetch,
          `${r.url}/object/upload/sign/${n}`,
          {},
          { headers: s }
        ),
        o = new URL(r.url + i.url),
        a = o.searchParams.get("token");
      if (!a) throw new il("No token returned by API");
      return {
        data: { signedUrl: o.toString(), path: e, token: a },
        error: null,
      };
    } catch (n) {
      if (r.shouldThrowOnError) throw n;
      if (he(n)) return { data: null, error: n };
      throw n;
    }
  }
  async update(e, t, r) {
    return this.uploadOrUpdate("PUT", e, t, r);
  }
  async move(e, t, r) {
    var n = this;
    try {
      return {
        data: await Pt(
          n.fetch,
          `${n.url}/object/move`,
          {
            bucketId: n.bucketId,
            sourceKey: e,
            destinationKey: t,
            destinationBucket: r == null ? void 0 : r.destinationBucket,
          },
          { headers: n.headers }
        ),
        error: null,
      };
    } catch (s) {
      if (n.shouldThrowOnError) throw s;
      if (he(s)) return { data: null, error: s };
      throw s;
    }
  }
  async copy(e, t, r) {
    var n = this;
    try {
      return {
        data: {
          path: (
            await Pt(
              n.fetch,
              `${n.url}/object/copy`,
              {
                bucketId: n.bucketId,
                sourceKey: e,
                destinationKey: t,
                destinationBucket: r == null ? void 0 : r.destinationBucket,
              },
              { headers: n.headers }
            )
          ).Key,
        },
        error: null,
      };
    } catch (s) {
      if (n.shouldThrowOnError) throw s;
      if (he(s)) return { data: null, error: s };
      throw s;
    }
  }
  async createSignedUrl(e, t, r) {
    var n = this;
    try {
      let s = n._getFinalPath(e),
        i = await Pt(
          n.fetch,
          `${n.url}/object/sign/${s}`,
          z(
            { expiresIn: t },
            r != null && r.transform ? { transform: r.transform } : {}
          ),
          { headers: n.headers }
        );
      const o =
        r != null && r.download
          ? `&download=${r.download === !0 ? "" : r.download}`
          : "";
      return (
        (i = { signedUrl: encodeURI(`${n.url}${i.signedURL}${o}`) }),
        { data: i, error: null }
      );
    } catch (s) {
      if (n.shouldThrowOnError) throw s;
      if (he(s)) return { data: null, error: s };
      throw s;
    }
  }
  async createSignedUrls(e, t, r) {
    var n = this;
    try {
      const s = await Pt(
          n.fetch,
          `${n.url}/object/sign/${n.bucketId}`,
          { expiresIn: t, paths: e },
          { headers: n.headers }
        ),
        i =
          r != null && r.download
            ? `&download=${r.download === !0 ? "" : r.download}`
            : "";
      return {
        data: s.map((o) =>
          z(
            z({}, o),
            {},
            {
              signedUrl: o.signedURL
                ? encodeURI(`${n.url}${o.signedURL}${i}`)
                : null,
            }
          )
        ),
        error: null,
      };
    } catch (s) {
      if (n.shouldThrowOnError) throw s;
      if (he(s)) return { data: null, error: s };
      throw s;
    }
  }
  download(e, t) {
    const r =
        typeof (t == null ? void 0 : t.transform) < "u"
          ? "render/image/authenticated"
          : "object",
      n = this.transformOptsToQueryString(
        (t == null ? void 0 : t.transform) || {}
      ),
      s = n ? `?${n}` : "",
      i = this._getFinalPath(e),
      o = () =>
        zi(this.fetch, `${this.url}/${r}/${i}${s}`, {
          headers: this.headers,
          noResolveJson: !0,
        });
    return new kk(o, this.shouldThrowOnError);
  }
  async info(e) {
    var t = this;
    const r = t._getFinalPath(e);
    try {
      return {
        data: mc(
          await zi(t.fetch, `${t.url}/object/info/${r}`, { headers: t.headers })
        ),
        error: null,
      };
    } catch (n) {
      if (t.shouldThrowOnError) throw n;
      if (he(n)) return { data: null, error: n };
      throw n;
    }
  }
  async exists(e) {
    var t = this;
    const r = t._getFinalPath(e);
    try {
      return (
        await Sk(t.fetch, `${t.url}/object/${r}`, { headers: t.headers }),
        { data: !0, error: null }
      );
    } catch (n) {
      if (t.shouldThrowOnError) throw n;
      if (he(n) && n instanceof pc) {
        const s = n.originalError;
        if ([400, 404].includes(s == null ? void 0 : s.status))
          return { data: !1, error: n };
      }
      throw n;
    }
  }
  getPublicUrl(e, t) {
    const r = this._getFinalPath(e),
      n = [],
      s =
        t != null && t.download
          ? `download=${t.download === !0 ? "" : t.download}`
          : "";
    s !== "" && n.push(s);
    const i =
        typeof (t == null ? void 0 : t.transform) < "u"
          ? "render/image"
          : "object",
      o = this.transformOptsToQueryString(
        (t == null ? void 0 : t.transform) || {}
      );
    o !== "" && n.push(o);
    let a = n.join("&");
    return (
      a !== "" && (a = `?${a}`),
      { data: { publicUrl: encodeURI(`${this.url}/${i}/public/${r}${a}`) } }
    );
  }
  async remove(e) {
    var t = this;
    try {
      return {
        data: await $d(
          t.fetch,
          `${t.url}/object/${t.bucketId}`,
          { prefixes: e },
          { headers: t.headers }
        ),
        error: null,
      };
    } catch (r) {
      if (t.shouldThrowOnError) throw r;
      if (he(r)) return { data: null, error: r };
      throw r;
    }
  }
  async list(e, t, r) {
    var n = this;
    try {
      const s = z(z(z({}, Tk), t), {}, { prefix: e || "" });
      return {
        data: await Pt(
          n.fetch,
          `${n.url}/object/list/${n.bucketId}`,
          s,
          { headers: n.headers },
          r
        ),
        error: null,
      };
    } catch (s) {
      if (n.shouldThrowOnError) throw s;
      if (he(s)) return { data: null, error: s };
      throw s;
    }
  }
  async listV2(e, t) {
    var r = this;
    try {
      const n = z({}, e);
      return {
        data: await Pt(
          r.fetch,
          `${r.url}/object/list-v2/${r.bucketId}`,
          n,
          { headers: r.headers },
          t
        ),
        error: null,
      };
    } catch (n) {
      if (r.shouldThrowOnError) throw n;
      if (he(n)) return { data: null, error: n };
      throw n;
    }
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return (
      e.width && t.push(`width=${e.width}`),
      e.height && t.push(`height=${e.height}`),
      e.resize && t.push(`resize=${e.resize}`),
      e.format && t.push(`format=${e.format}`),
      e.quality && t.push(`quality=${e.quality}`),
      t.join("&")
    );
  }
};
const gy = "2.90.1",
  vy = { "X-Client-Info": `storage-js/${gy}` };
var Rk = class {
    constructor(e, t = {}, r, n) {
      this.shouldThrowOnError = !1;
      const s = new URL(e);
      n != null &&
        n.useNewHostname &&
        /supabase\.(co|in|red)$/.test(s.hostname) &&
        !s.hostname.includes("storage.supabase.") &&
        (s.hostname = s.hostname.replace("supabase.", "storage.supabase.")),
        (this.url = s.href.replace(/\/$/, "")),
        (this.headers = z(z({}, vy), t)),
        (this.fetch = Id(r));
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    async listBuckets(e) {
      var t = this;
      try {
        const r = t.listBucketOptionsToQueryString(e);
        return {
          data: await zi(t.fetch, `${t.url}/bucket${r}`, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    async getBucket(e) {
      var t = this;
      try {
        return {
          data: await zi(t.fetch, `${t.url}/bucket/${e}`, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    async createBucket(e, t = { public: !1 }) {
      var r = this;
      try {
        return {
          data: await Pt(
            r.fetch,
            `${r.url}/bucket`,
            {
              id: e,
              name: e,
              type: t.type,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: r.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (r.shouldThrowOnError) throw n;
        if (he(n)) return { data: null, error: n };
        throw n;
      }
    }
    async updateBucket(e, t) {
      var r = this;
      try {
        return {
          data: await gc(
            r.fetch,
            `${r.url}/bucket/${e}`,
            {
              id: e,
              name: e,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: r.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (r.shouldThrowOnError) throw n;
        if (he(n)) return { data: null, error: n };
        throw n;
      }
    }
    async emptyBucket(e) {
      var t = this;
      try {
        return {
          data: await Pt(
            t.fetch,
            `${t.url}/bucket/${e}/empty`,
            {},
            { headers: t.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    async deleteBucket(e) {
      var t = this;
      try {
        return {
          data: await $d(
            t.fetch,
            `${t.url}/bucket/${e}`,
            {},
            { headers: t.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    listBucketOptionsToQueryString(e) {
      const t = {};
      return (
        e &&
          ("limit" in e && (t.limit = String(e.limit)),
          "offset" in e && (t.offset = String(e.offset)),
          e.search && (t.search = e.search),
          e.sortColumn && (t.sortColumn = e.sortColumn),
          e.sortOrder && (t.sortOrder = e.sortOrder)),
        Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : ""
      );
    }
  },
  Pk = class {
    constructor(e, t = {}, r) {
      (this.shouldThrowOnError = !1),
        (this.url = e.replace(/\/$/, "")),
        (this.headers = z(z({}, vy), t)),
        (this.fetch = Id(r));
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    async createBucket(e) {
      var t = this;
      try {
        return {
          data: await Pt(
            t.fetch,
            `${t.url}/bucket`,
            { name: e },
            { headers: t.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    async listBuckets(e) {
      var t = this;
      try {
        const r = new URLSearchParams();
        (e == null ? void 0 : e.limit) !== void 0 &&
          r.set("limit", e.limit.toString()),
          (e == null ? void 0 : e.offset) !== void 0 &&
            r.set("offset", e.offset.toString()),
          e != null && e.sortColumn && r.set("sortColumn", e.sortColumn),
          e != null && e.sortOrder && r.set("sortOrder", e.sortOrder),
          e != null && e.search && r.set("search", e.search);
        const n = r.toString(),
          s = n ? `${t.url}/bucket?${n}` : `${t.url}/bucket`;
        return {
          data: await zi(t.fetch, s, { headers: t.headers }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    async deleteBucket(e) {
      var t = this;
      try {
        return {
          data: await $d(
            t.fetch,
            `${t.url}/bucket/${e}`,
            {},
            { headers: t.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    from(e) {
      var t = this;
      if (!vk(e))
        throw new il(
          "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters."
        );
      const r = new fk({
          baseUrl: this.url,
          catalogName: e,
          auth: { type: "custom", getHeaders: async () => t.headers },
          fetch: this.fetch,
        }),
        n = this.shouldThrowOnError;
      return new Proxy(r, {
        get(s, i) {
          const o = s[i];
          return typeof o != "function"
            ? o
            : async (...a) => {
                try {
                  return { data: await o.apply(s, a), error: null };
                } catch (l) {
                  if (n) throw l;
                  return { data: null, error: l };
                }
              };
        },
      });
    }
  };
const Ld = {
  "X-Client-Info": `storage-js/${gy}`,
  "Content-Type": "application/json",
};
var yy = class extends Error {
  constructor(e) {
    super(e),
      (this.__isStorageVectorsError = !0),
      (this.name = "StorageVectorsError");
  }
};
function it(e) {
  return typeof e == "object" && e !== null && "__isStorageVectorsError" in e;
}
var Ql = class extends yy {
    constructor(e, t, r) {
      super(e),
        (this.name = "StorageVectorsApiError"),
        (this.status = t),
        (this.statusCode = r);
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        statusCode: this.statusCode,
      };
    }
  },
  Ok = class extends yy {
    constructor(e, t) {
      super(e),
        (this.name = "StorageVectorsUnknownError"),
        (this.originalError = t);
    }
  };
const Dd = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  Ak = (e) => {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Kf = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  Nk = async (e, t, r) => {
    if (
      e &&
      typeof e == "object" &&
      "status" in e &&
      "ok" in e &&
      typeof e.status == "number" &&
      !(r != null && r.noResolveJson)
    ) {
      const n = e.status || 500,
        s = e;
      if (typeof s.json == "function")
        s.json()
          .then((i) => {
            const o =
              (i == null ? void 0 : i.statusCode) ||
              (i == null ? void 0 : i.code) ||
              n + "";
            t(new Ql(Kf(i), n, o));
          })
          .catch(() => {
            const i = n + "";
            t(new Ql(s.statusText || `HTTP ${n} error`, n, i));
          });
      else {
        const i = n + "";
        t(new Ql(s.statusText || `HTTP ${n} error`, n, i));
      }
    } else t(new Ok(Kf(e), e));
  },
  jk = (e, t, r, n) => {
    const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
    return n
      ? (Ak(n)
          ? ((s.headers = z(
              { "Content-Type": "application/json" },
              t == null ? void 0 : t.headers
            )),
            (s.body = JSON.stringify(n)))
          : (s.body = n),
        z(z({}, s), r))
      : s;
  };
async function Ik(e, t, r, n, s, i) {
  return new Promise((o, a) => {
    e(r, jk(t, n, s, i))
      .then((l) => {
        if (!l.ok) throw l;
        if (n != null && n.noResolveJson) return l;
        const u = l.headers.get("content-type");
        return !u || !u.includes("application/json") ? {} : l.json();
      })
      .then((l) => o(l))
      .catch((l) => Nk(l, a, n));
  });
}
async function ot(e, t, r, n, s) {
  return Ik(e, "POST", t, n, s, r);
}
var $k = class {
    constructor(e, t = {}, r) {
      (this.shouldThrowOnError = !1),
        (this.url = e.replace(/\/$/, "")),
        (this.headers = z(z({}, Ld), t)),
        (this.fetch = Dd(r));
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    async createIndex(e) {
      var t = this;
      try {
        return {
          data:
            (await ot(t.fetch, `${t.url}/CreateIndex`, e, {
              headers: t.headers,
            })) || {},
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (it(r)) return { data: null, error: r };
        throw r;
      }
    }
    async getIndex(e, t) {
      var r = this;
      try {
        return {
          data: await ot(
            r.fetch,
            `${r.url}/GetIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: r.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (r.shouldThrowOnError) throw n;
        if (it(n)) return { data: null, error: n };
        throw n;
      }
    }
    async listIndexes(e) {
      var t = this;
      try {
        return {
          data: await ot(t.fetch, `${t.url}/ListIndexes`, e, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (it(r)) return { data: null, error: r };
        throw r;
      }
    }
    async deleteIndex(e, t) {
      var r = this;
      try {
        return {
          data:
            (await ot(
              r.fetch,
              `${r.url}/DeleteIndex`,
              { vectorBucketName: e, indexName: t },
              { headers: r.headers }
            )) || {},
          error: null,
        };
      } catch (n) {
        if (r.shouldThrowOnError) throw n;
        if (it(n)) return { data: null, error: n };
        throw n;
      }
    }
  },
  Lk = class {
    constructor(e, t = {}, r) {
      (this.shouldThrowOnError = !1),
        (this.url = e.replace(/\/$/, "")),
        (this.headers = z(z({}, Ld), t)),
        (this.fetch = Dd(r));
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    async putVectors(e) {
      var t = this;
      try {
        if (e.vectors.length < 1 || e.vectors.length > 500)
          throw new Error("Vector batch size must be between 1 and 500 items");
        return {
          data:
            (await ot(t.fetch, `${t.url}/PutVectors`, e, {
              headers: t.headers,
            })) || {},
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (it(r)) return { data: null, error: r };
        throw r;
      }
    }
    async getVectors(e) {
      var t = this;
      try {
        return {
          data: await ot(t.fetch, `${t.url}/GetVectors`, e, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (it(r)) return { data: null, error: r };
        throw r;
      }
    }
    async listVectors(e) {
      var t = this;
      try {
        if (e.segmentCount !== void 0) {
          if (e.segmentCount < 1 || e.segmentCount > 16)
            throw new Error("segmentCount must be between 1 and 16");
          if (
            e.segmentIndex !== void 0 &&
            (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)
          )
            throw new Error(
              `segmentIndex must be between 0 and ${e.segmentCount - 1}`
            );
        }
        return {
          data: await ot(t.fetch, `${t.url}/ListVectors`, e, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (it(r)) return { data: null, error: r };
        throw r;
      }
    }
    async queryVectors(e) {
      var t = this;
      try {
        return {
          data: await ot(t.fetch, `${t.url}/QueryVectors`, e, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (it(r)) return { data: null, error: r };
        throw r;
      }
    }
    async deleteVectors(e) {
      var t = this;
      try {
        if (e.keys.length < 1 || e.keys.length > 500)
          throw new Error("Keys batch size must be between 1 and 500 items");
        return {
          data:
            (await ot(t.fetch, `${t.url}/DeleteVectors`, e, {
              headers: t.headers,
            })) || {},
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (it(r)) return { data: null, error: r };
        throw r;
      }
    }
  },
  Dk = class {
    constructor(e, t = {}, r) {
      (this.shouldThrowOnError = !1),
        (this.url = e.replace(/\/$/, "")),
        (this.headers = z(z({}, Ld), t)),
        (this.fetch = Dd(r));
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    async createBucket(e) {
      var t = this;
      try {
        return {
          data:
            (await ot(
              t.fetch,
              `${t.url}/CreateVectorBucket`,
              { vectorBucketName: e },
              { headers: t.headers }
            )) || {},
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (it(r)) return { data: null, error: r };
        throw r;
      }
    }
    async getBucket(e) {
      var t = this;
      try {
        return {
          data: await ot(
            t.fetch,
            `${t.url}/GetVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (it(r)) return { data: null, error: r };
        throw r;
      }
    }
    async listBuckets(e = {}) {
      var t = this;
      try {
        return {
          data: await ot(t.fetch, `${t.url}/ListVectorBuckets`, e, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (it(r)) return { data: null, error: r };
        throw r;
      }
    }
    async deleteBucket(e) {
      var t = this;
      try {
        return {
          data:
            (await ot(
              t.fetch,
              `${t.url}/DeleteVectorBucket`,
              { vectorBucketName: e },
              { headers: t.headers }
            )) || {},
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (it(r)) return { data: null, error: r };
        throw r;
      }
    }
  },
  Mk = class extends Dk {
    constructor(e, t = {}) {
      super(e, t.headers || {}, t.fetch);
    }
    from(e) {
      return new Uk(this.url, this.headers, e, this.fetch);
    }
    async createBucket(e) {
      var t = () => super.createBucket,
        r = this;
      return t().call(r, e);
    }
    async getBucket(e) {
      var t = () => super.getBucket,
        r = this;
      return t().call(r, e);
    }
    async listBuckets(e = {}) {
      var t = () => super.listBuckets,
        r = this;
      return t().call(r, e);
    }
    async deleteBucket(e) {
      var t = () => super.deleteBucket,
        r = this;
      return t().call(r, e);
    }
  },
  Uk = class extends $k {
    constructor(e, t, r, n) {
      super(e, t, n), (this.vectorBucketName = r);
    }
    async createIndex(e) {
      var t = () => super.createIndex,
        r = this;
      return t().call(
        r,
        z(z({}, e), {}, { vectorBucketName: r.vectorBucketName })
      );
    }
    async listIndexes(e = {}) {
      var t = () => super.listIndexes,
        r = this;
      return t().call(
        r,
        z(z({}, e), {}, { vectorBucketName: r.vectorBucketName })
      );
    }
    async getIndex(e) {
      var t = () => super.getIndex,
        r = this;
      return t().call(r, r.vectorBucketName, e);
    }
    async deleteIndex(e) {
      var t = () => super.deleteIndex,
        r = this;
      return t().call(r, r.vectorBucketName, e);
    }
    index(e) {
      return new Fk(
        this.url,
        this.headers,
        this.vectorBucketName,
        e,
        this.fetch
      );
    }
  },
  Fk = class extends Lk {
    constructor(e, t, r, n, s) {
      super(e, t, s), (this.vectorBucketName = r), (this.indexName = n);
    }
    async putVectors(e) {
      var t = () => super.putVectors,
        r = this;
      return t().call(
        r,
        z(
          z({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName }
        )
      );
    }
    async getVectors(e) {
      var t = () => super.getVectors,
        r = this;
      return t().call(
        r,
        z(
          z({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName }
        )
      );
    }
    async listVectors(e = {}) {
      var t = () => super.listVectors,
        r = this;
      return t().call(
        r,
        z(
          z({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName }
        )
      );
    }
    async queryVectors(e) {
      var t = () => super.queryVectors,
        r = this;
      return t().call(
        r,
        z(
          z({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName }
        )
      );
    }
    async deleteVectors(e) {
      var t = () => super.deleteVectors,
        r = this;
      return t().call(
        r,
        z(
          z({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName }
        )
      );
    }
  },
  zk = class extends Rk {
    constructor(e, t = {}, r, n) {
      super(e, t, r, n);
    }
    from(e) {
      return new Ck(this.url, this.headers, e, this.fetch);
    }
    get vectors() {
      return new Mk(this.url + "/vector", {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new Pk(this.url + "/iceberg", this.headers, this.fetch);
    }
  };
const wy = "2.90.1",
  Qn = 30 * 1e3,
  vc = 3,
  Jl = vc * Qn,
  Bk = "http://localhost:9999",
  Vk = "supabase.auth.token",
  Wk = { "X-Client-Info": `gotrue-js/${wy}` },
  yc = "X-Supabase-Api-Version",
  xy = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  Hk = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  qk = 10 * 60 * 1e3;
class Bi extends Error {
  constructor(t, r, n) {
    super(t),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = r),
      (this.code = n);
  }
}
function M(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class Kk extends Bi {
  constructor(t, r, n) {
    super(t, r, n),
      (this.name = "AuthApiError"),
      (this.status = r),
      (this.code = n);
  }
}
function Gk(e) {
  return M(e) && e.name === "AuthApiError";
}
class fn extends Bi {
  constructor(t, r) {
    super(t), (this.name = "AuthUnknownError"), (this.originalError = r);
  }
}
class mr extends Bi {
  constructor(t, r, n, s) {
    super(t, n, s), (this.name = r), (this.status = n);
  }
}
class rt extends mr {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Qk(e) {
  return M(e) && e.name === "AuthSessionMissingError";
}
class Vn extends mr {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0
    );
  }
}
class Ao extends mr {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class No extends mr {
  constructor(t, r = null) {
    super(t, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = r);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
function Jk(e) {
  return M(e) && e.name === "AuthImplicitGrantRedirectError";
}
class Gf extends mr {
  constructor(t, r = null) {
    super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = r);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class Yk extends mr {
  constructor() {
    super(
      "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
      "AuthPKCECodeVerifierMissingError",
      400,
      "pkce_code_verifier_not_found"
    );
  }
}
class wc extends mr {
  constructor(t, r) {
    super(t, "AuthRetryableFetchError", r, void 0);
  }
}
function Yl(e) {
  return M(e) && e.name === "AuthRetryableFetchError";
}
class Qf extends mr {
  constructor(t, r, n) {
    super(t, "AuthWeakPasswordError", r, "weak_password"), (this.reasons = n);
  }
}
class xc extends mr {
  constructor(t) {
    super(t, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const ka =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      ""
    ),
  Jf = ` 	
\r=`.split(""),
  Xk = (() => {
    const e = new Array(128);
    for (let t = 0; t < e.length; t += 1) e[t] = -1;
    for (let t = 0; t < Jf.length; t += 1) e[Jf[t].charCodeAt(0)] = -2;
    for (let t = 0; t < ka.length; t += 1) e[ka[t].charCodeAt(0)] = t;
    return e;
  })();
function Yf(e, t, r) {
  if (e !== null)
    for (t.queue = (t.queue << 8) | e, t.queuedBits += 8; t.queuedBits >= 6; ) {
      const n = (t.queue >> (t.queuedBits - 6)) & 63;
      r(ka[n]), (t.queuedBits -= 6);
    }
  else if (t.queuedBits > 0)
    for (
      t.queue = t.queue << (6 - t.queuedBits), t.queuedBits = 6;
      t.queuedBits >= 6;

    ) {
      const n = (t.queue >> (t.queuedBits - 6)) & 63;
      r(ka[n]), (t.queuedBits -= 6);
    }
}
function _y(e, t, r) {
  const n = Xk[e];
  if (n > -1)
    for (t.queue = (t.queue << 6) | n, t.queuedBits += 6; t.queuedBits >= 8; )
      r((t.queue >> (t.queuedBits - 8)) & 255), (t.queuedBits -= 8);
  else {
    if (n === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
  }
}
function Xf(e) {
  const t = [],
    r = (o) => {
      t.push(String.fromCodePoint(o));
    },
    n = { utf8seq: 0, codepoint: 0 },
    s = { queue: 0, queuedBits: 0 },
    i = (o) => {
      tT(o, n, r);
    };
  for (let o = 0; o < e.length; o += 1) _y(e.charCodeAt(o), s, i);
  return t.join("");
}
function Zk(e, t) {
  if (e <= 127) {
    t(e);
    return;
  } else if (e <= 2047) {
    t(192 | (e >> 6)), t(128 | (e & 63));
    return;
  } else if (e <= 65535) {
    t(224 | (e >> 12)), t(128 | ((e >> 6) & 63)), t(128 | (e & 63));
    return;
  } else if (e <= 1114111) {
    t(240 | (e >> 18)),
      t(128 | ((e >> 12) & 63)),
      t(128 | ((e >> 6) & 63)),
      t(128 | (e & 63));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function eT(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    let n = e.charCodeAt(r);
    if (n > 55295 && n <= 56319) {
      const s = ((n - 55296) * 1024) & 65535;
      (n = (((e.charCodeAt(r + 1) - 56320) & 65535) | s) + 65536), (r += 1);
    }
    Zk(n, t);
  }
}
function tT(e, t, r) {
  if (t.utf8seq === 0) {
    if (e <= 127) {
      r(e);
      return;
    }
    for (let n = 1; n < 6; n += 1)
      if (!((e >> (7 - n)) & 1)) {
        t.utf8seq = n;
        break;
      }
    if (t.utf8seq === 2) t.codepoint = e & 31;
    else if (t.utf8seq === 3) t.codepoint = e & 15;
    else if (t.utf8seq === 4) t.codepoint = e & 7;
    else throw new Error("Invalid UTF-8 sequence");
    t.utf8seq -= 1;
  } else if (t.utf8seq > 0) {
    if (e <= 127) throw new Error("Invalid UTF-8 sequence");
    (t.codepoint = (t.codepoint << 6) | (e & 63)),
      (t.utf8seq -= 1),
      t.utf8seq === 0 && r(t.codepoint);
  }
}
function ws(e) {
  const t = [],
    r = { queue: 0, queuedBits: 0 },
    n = (s) => {
      t.push(s);
    };
  for (let s = 0; s < e.length; s += 1) _y(e.charCodeAt(s), r, n);
  return new Uint8Array(t);
}
function rT(e) {
  const t = [];
  return eT(e, (r) => t.push(r)), new Uint8Array(t);
}
function vn(e) {
  const t = [],
    r = { queue: 0, queuedBits: 0 },
    n = (s) => {
      t.push(s);
    };
  return e.forEach((s) => Yf(s, r, n)), Yf(null, r, n), t.join("");
}
function nT(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function sT() {
  return Symbol("auth-callback");
}
const Oe = () => typeof window < "u" && typeof document < "u",
  an = { tested: !1, writable: !1 },
  by = () => {
    if (!Oe()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (an.tested) return an.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        (an.tested = !0),
        (an.writable = !0);
    } catch {
      (an.tested = !0), (an.writable = !1);
    }
    return an.writable;
  };
function iT(e) {
  const t = {},
    r = new URL(e);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((s, i) => {
        t[i] = s;
      });
    } catch {}
  return (
    r.searchParams.forEach((n, s) => {
      t[s] = n;
    }),
    t
  );
}
const Sy = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  oT = (e) =>
    typeof e == "object" &&
    e !== null &&
    "status" in e &&
    "ok" in e &&
    "json" in e &&
    typeof e.json == "function",
  Jn = async (e, t, r) => {
    await e.setItem(t, JSON.stringify(r));
  },
  ln = async (e, t) => {
    const r = await e.getItem(t);
    if (!r) return null;
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  },
  Pe = async (e, t) => {
    await e.removeItem(t);
  };
class ol {
  constructor() {
    this.promise = new ol.promiseConstructor((t, r) => {
      (this.resolve = t), (this.reject = r);
    });
  }
}
ol.promiseConstructor = Promise;
function Xl(e) {
  const t = e.split(".");
  if (t.length !== 3) throw new xc("Invalid JWT structure");
  for (let n = 0; n < t.length; n++)
    if (!Hk.test(t[n])) throw new xc("JWT not in base64url format");
  return {
    header: JSON.parse(Xf(t[0])),
    payload: JSON.parse(Xf(t[1])),
    signature: ws(t[2]),
    raw: { header: t[0], payload: t[1] },
  };
}
async function aT(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function lT(e, t) {
  return new Promise((n, s) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const o = await e(i);
          if (!t(i, null, o)) {
            n(o);
            return;
          }
        } catch (o) {
          if (!t(i, o)) {
            s(o);
            return;
          }
        }
    })();
  });
}
function uT(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function cT() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      n = r.length;
    let s = "";
    for (let i = 0; i < 56; i++) s += r.charAt(Math.floor(Math.random() * n));
    return s;
  }
  return crypto.getRandomValues(t), Array.from(t, uT).join("");
}
async function dT(e) {
  const r = new TextEncoder().encode(e),
    n = await crypto.subtle.digest("SHA-256", r),
    s = new Uint8Array(n);
  return Array.from(s)
    .map((i) => String.fromCharCode(i))
    .join("");
}
async function hT(e) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
      ),
      e
    );
  const r = await dT(e);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Wn(e, t, r = !1) {
  const n = cT();
  let s = n;
  r && (s += "/PASSWORD_RECOVERY"), await Jn(e, `${t}-code-verifier`, s);
  const i = await hT(n);
  return [i, n === i ? "plain" : "s256"];
}
const fT = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function pT(e) {
  const t = e.headers.get(yc);
  if (!t || !t.match(fT)) return null;
  try {
    return new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function mT(e) {
  if (!e) throw new Error("Missing exp claim");
  const t = Math.floor(Date.now() / 1e3);
  if (e <= t) throw new Error("JWT has expired");
}
function gT(e) {
  switch (e) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const vT = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Hn(e) {
  if (!vT.test(e))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not"
    );
}
function Zl() {
  const e = {};
  return new Proxy(e, {
    get: (t, r) => {
      if (r === "__isUserNotAvailableProxy") return !0;
      if (typeof r == "symbol") {
        const n = r.toString();
        if (
          n === "Symbol(Symbol.toPrimitive)" ||
          n === "Symbol(Symbol.toStringTag)" ||
          n === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`
      );
    },
    set: (t, r) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      );
    },
    deleteProperty: (t, r) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      );
    },
  });
}
function yT(e, t) {
  return new Proxy(e, {
    get: (r, n, s) => {
      if (n === "__isInsecureUserWarningProxy") return !0;
      if (typeof n == "symbol") {
        const i = n.toString();
        if (
          i === "Symbol(Symbol.toPrimitive)" ||
          i === "Symbol(Symbol.toStringTag)" ||
          i === "Symbol(util.inspect.custom)" ||
          i === "Symbol(nodejs.util.inspect.custom)"
        )
          return Reflect.get(r, n, s);
      }
      return (
        !t.value &&
          typeof n == "string" &&
          (console.warn(
            "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
          ),
          (t.value = !0)),
        Reflect.get(r, n, s)
      );
    },
  });
}
function Zf(e) {
  return JSON.parse(JSON.stringify(e));
}
const dn = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  wT = [502, 503, 504];
async function ep(e) {
  var t;
  if (!oT(e)) throw new wc(dn(e), 0);
  if (wT.includes(e.status)) throw new wc(dn(e), e.status);
  let r;
  try {
    r = await e.json();
  } catch (i) {
    throw new fn(dn(i), i);
  }
  let n;
  const s = pT(e);
  if (
    (s &&
    s.getTime() >= xy["2024-01-01"].timestamp &&
    typeof r == "object" &&
    r &&
    typeof r.code == "string"
      ? (n = r.code)
      : typeof r == "object" &&
        r &&
        typeof r.error_code == "string" &&
        (n = r.error_code),
    n)
  ) {
    if (n === "weak_password")
      throw new Qf(
        dn(r),
        e.status,
        ((t = r.weak_password) === null || t === void 0 ? void 0 : t.reasons) ||
          []
      );
    if (n === "session_not_found") throw new rt();
  } else if (
    typeof r == "object" &&
    r &&
    typeof r.weak_password == "object" &&
    r.weak_password &&
    Array.isArray(r.weak_password.reasons) &&
    r.weak_password.reasons.length &&
    r.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0)
  )
    throw new Qf(dn(r), e.status, r.weak_password.reasons);
  throw new Kk(dn(r), e.status || 500, n);
}
const xT = (e, t, r, n) => {
  const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
  return e === "GET"
    ? s
    : ((s.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        t == null ? void 0 : t.headers
      )),
      (s.body = JSON.stringify(n)),
      Object.assign(Object.assign({}, s), r));
};
async function F(e, t, r, n) {
  var s;
  const i = Object.assign({}, n == null ? void 0 : n.headers);
  i[yc] || (i[yc] = xy["2024-01-01"].name),
    n != null && n.jwt && (i.Authorization = `Bearer ${n.jwt}`);
  const o =
    (s = n == null ? void 0 : n.query) !== null && s !== void 0 ? s : {};
  n != null && n.redirectTo && (o.redirect_to = n.redirectTo);
  const a = Object.keys(o).length
      ? "?" + new URLSearchParams(o).toString()
      : "",
    l = await _T(
      e,
      t,
      r + a,
      { headers: i, noResolveJson: n == null ? void 0 : n.noResolveJson },
      {},
      n == null ? void 0 : n.body
    );
  return n != null && n.xform
    ? n == null
      ? void 0
      : n.xform(l)
    : { data: Object.assign({}, l), error: null };
}
async function _T(e, t, r, n, s, i) {
  const o = xT(t, n, s, i);
  let a;
  try {
    a = await e(r, Object.assign({}, o));
  } catch (l) {
    throw (console.error(l), new wc(dn(l), 0));
  }
  if ((a.ok || (await ep(a)), n != null && n.noResolveJson)) return a;
  try {
    return await a.json();
  } catch (l) {
    await ep(l);
  }
}
function Tt(e) {
  var t;
  let r = null;
  ET(e) &&
    ((r = Object.assign({}, e)),
    e.expires_at || (r.expires_at = nT(e.expires_in)));
  const n = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: r, user: n }, error: null };
}
function tp(e) {
  const t = Tt(e);
  return (
    !t.error &&
      e.weak_password &&
      typeof e.weak_password == "object" &&
      Array.isArray(e.weak_password.reasons) &&
      e.weak_password.reasons.length &&
      e.weak_password.message &&
      typeof e.weak_password.message == "string" &&
      e.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) &&
      (t.data.weak_password = e.weak_password),
    t
  );
}
function Ar(e) {
  var t;
  return {
    data: { user: (t = e.user) !== null && t !== void 0 ? t : e },
    error: null,
  };
}
function bT(e) {
  return { data: e, error: null };
}
function ST(e) {
  const {
      action_link: t,
      email_otp: r,
      hashed_token: n,
      redirect_to: s,
      verification_type: i,
    } = e,
    o = sl(e, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    a = {
      action_link: t,
      email_otp: r,
      hashed_token: n,
      redirect_to: s,
      verification_type: i,
    },
    l = Object.assign({}, o);
  return { data: { properties: a, user: l }, error: null };
}
function rp(e) {
  return e;
}
function ET(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
const eu = ["global", "local", "others"];
class kT {
  constructor({ url: t = "", headers: r = {}, fetch: n }) {
    (this.url = t),
      (this.headers = r),
      (this.fetch = Sy(n)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      }),
      (this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this),
      });
  }
  async signOut(t, r = eu[0]) {
    if (eu.indexOf(r) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${eu.join(", ")}`
      );
    try {
      return (
        await F(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
          headers: this.headers,
          jwt: t,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (n) {
      if (M(n)) return { data: null, error: n };
      throw n;
    }
  }
  async inviteUserByEmail(t, r = {}) {
    try {
      return await F(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: Ar,
      });
    } catch (n) {
      if (M(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async generateLink(t) {
    try {
      const { options: r } = t,
        n = sl(t, ["options"]),
        s = Object.assign(Object.assign({}, n), r);
      return (
        "newEmail" in n &&
          ((s.new_email = n == null ? void 0 : n.newEmail), delete s.newEmail),
        await F(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: s,
          headers: this.headers,
          xform: ST,
          redirectTo: r == null ? void 0 : r.redirectTo,
        })
      );
    } catch (r) {
      if (M(r)) return { data: { properties: null, user: null }, error: r };
      throw r;
    }
  }
  async createUser(t) {
    try {
      return await F(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: Ar,
      });
    } catch (r) {
      if (M(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async listUsers(t) {
    var r, n, s, i, o, a, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        c = await F(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (n =
                (r = t == null ? void 0 : t.page) === null || r === void 0
                  ? void 0
                  : r.toString()) !== null && n !== void 0
                ? n
                : "",
            per_page:
              (i =
                (s = t == null ? void 0 : t.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
          },
          xform: rp,
        });
      if (c.error) throw c.error;
      const h = await c.json(),
        f =
          (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
        d =
          (l =
            (a = c.headers.get("link")) === null || a === void 0
              ? void 0
              : a.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        d.length > 0 &&
          (d.forEach((y) => {
            const p = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)),
              w = JSON.parse(y.split(";")[1].split("=")[1]);
            u[`${w}Page`] = p;
          }),
          (u.total = parseInt(f))),
        { data: Object.assign(Object.assign({}, h), u), error: null }
      );
    } catch (u) {
      if (M(u)) return { data: { users: [] }, error: u };
      throw u;
    }
  }
  async getUserById(t) {
    Hn(t);
    try {
      return await F(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: Ar,
      });
    } catch (r) {
      if (M(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async updateUserById(t, r) {
    Hn(t);
    try {
      return await F(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: r,
        headers: this.headers,
        xform: Ar,
      });
    } catch (n) {
      if (M(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async deleteUser(t, r = !1) {
    Hn(t);
    try {
      return await F(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: { should_soft_delete: r },
        xform: Ar,
      });
    } catch (n) {
      if (M(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(t) {
    Hn(t.userId);
    try {
      const { data: r, error: n } = await F(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${t.userId}/factors`,
        {
          headers: this.headers,
          xform: (s) => ({ data: { factors: s }, error: null }),
        }
      );
      return { data: r, error: n };
    } catch (r) {
      if (M(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(t) {
    Hn(t.userId), Hn(t.id);
    try {
      return {
        data: await F(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${t.userId}/factors/${t.id}`,
          { headers: this.headers }
        ),
        error: null,
      };
    } catch (r) {
      if (M(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _listOAuthClients(t) {
    var r, n, s, i, o, a, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        c = await F(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (n =
                (r = t == null ? void 0 : t.page) === null || r === void 0
                  ? void 0
                  : r.toString()) !== null && n !== void 0
                ? n
                : "",
            per_page:
              (i =
                (s = t == null ? void 0 : t.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
          },
          xform: rp,
        });
      if (c.error) throw c.error;
      const h = await c.json(),
        f =
          (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
        d =
          (l =
            (a = c.headers.get("link")) === null || a === void 0
              ? void 0
              : a.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        d.length > 0 &&
          (d.forEach((y) => {
            const p = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)),
              w = JSON.parse(y.split(";")[1].split("=")[1]);
            u[`${w}Page`] = p;
          }),
          (u.total = parseInt(f))),
        { data: Object.assign(Object.assign({}, h), u), error: null }
      );
    } catch (u) {
      if (M(u)) return { data: { clients: [] }, error: u };
      throw u;
    }
  }
  async _createOAuthClient(t) {
    try {
      return await F(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: t,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null }),
      });
    } catch (r) {
      if (M(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _getOAuthClient(t) {
    try {
      return await F(
        this.fetch,
        "GET",
        `${this.url}/admin/oauth/clients/${t}`,
        { headers: this.headers, xform: (r) => ({ data: r, error: null }) }
      );
    } catch (r) {
      if (M(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _updateOAuthClient(t, r) {
    try {
      return await F(
        this.fetch,
        "PUT",
        `${this.url}/admin/oauth/clients/${t}`,
        {
          body: r,
          headers: this.headers,
          xform: (n) => ({ data: n, error: null }),
        }
      );
    } catch (n) {
      if (M(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _deleteOAuthClient(t) {
    try {
      return (
        await F(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${t}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (M(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _regenerateOAuthClientSecret(t) {
    try {
      return await F(
        this.fetch,
        "POST",
        `${this.url}/admin/oauth/clients/${t}/regenerate_secret`,
        { headers: this.headers, xform: (r) => ({ data: r, error: null }) }
      );
    } catch (r) {
      if (M(r)) return { data: null, error: r };
      throw r;
    }
  }
}
function np(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, r) => {
      e[t] = r;
    },
    removeItem: (t) => {
      delete e[t];
    },
  };
}
const qn = {
  debug: !!(
    globalThis &&
    by() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class Ey extends Error {
  constructor(t) {
    super(t), (this.isAcquireTimeout = !0);
  }
}
class TT extends Ey {}
async function CT(e, t, r) {
  qn.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
  const n = new globalThis.AbortController();
  return (
    t > 0 &&
      setTimeout(() => {
        n.abort(),
          qn.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock acquire timed out",
              e
            );
      }, t),
    await Promise.resolve().then(() =>
      globalThis.navigator.locks.request(
        e,
        t === 0
          ? { mode: "exclusive", ifAvailable: !0 }
          : { mode: "exclusive", signal: n.signal },
        async (s) => {
          if (s) {
            qn.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquired",
                e,
                s.name
              );
            try {
              return await r();
            } finally {
              qn.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: released",
                  e,
                  s.name
                );
            }
          } else {
            if (t === 0)
              throw (
                (qn.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: not immediately available",
                    e
                  ),
                new TT(
                  `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`
                ))
              );
            if (qn.debug)
              try {
                const i = await globalThis.navigator.locks.query();
                console.log(
                  "@supabase/gotrue-js: Navigator LockManager state",
                  JSON.stringify(i, null, "  ")
                );
              } catch (i) {
                console.warn(
                  "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                  i
                );
              }
            return (
              console.warn(
                "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
              ),
              await r()
            );
          }
        }
      )
    )
  );
}
function RT() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function ky(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e))
    throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  return e.toLowerCase();
}
function PT(e) {
  return parseInt(e, 16);
}
function OT(e) {
  const t = new TextEncoder().encode(e);
  return "0x" + Array.from(t, (n) => n.toString(16).padStart(2, "0")).join("");
}
function AT(e) {
  var t;
  const {
    chainId: r,
    domain: n,
    expirationTime: s,
    issuedAt: i = new Date(),
    nonce: o,
    notBefore: a,
    requestId: l,
    resources: u,
    scheme: c,
    uri: h,
    version: f,
  } = e;
  {
    if (!Number.isInteger(r))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`
      );
    if (!n)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.'
      );
    if (o && o.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`
      );
    if (!h)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.'
      );
    if (f !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`
      );
    if (
      !((t = e.statement) === null || t === void 0) &&
      t.includes(`
`)
    )
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`
      );
  }
  const d = ky(e.address),
    y = c ? `${c}://${n}` : n,
    p = e.statement
      ? `${e.statement}
`
      : "",
    w = `${y} wants you to sign in with your Ethereum account:
${d}

${p}`;
  let g = `URI: ${h}
Version: ${f}
Chain ID: ${r}${
    o
      ? `
Nonce: ${o}`
      : ""
  }
Issued At: ${i.toISOString()}`;
  if (
    (s &&
      (g += `
Expiration Time: ${s.toISOString()}`),
    a &&
      (g += `
Not Before: ${a.toISOString()}`),
    l &&
      (g += `
Request ID: ${l}`),
    u)
  ) {
    let m = `
Resources:`;
    for (const v of u) {
      if (!v || typeof v != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${v}`
        );
      m += `
- ${v}`;
    }
    g += m;
  }
  return `${w}
${g}`;
}
class _e extends Error {
  constructor({ message: t, code: r, cause: n, name: s }) {
    var i;
    super(t, { cause: n }),
      (this.__isWebAuthnError = !0),
      (this.name =
        (i = s ?? (n instanceof Error ? n.name : void 0)) !== null &&
        i !== void 0
          ? i
          : "Unknown Error"),
      (this.code = r);
  }
}
class Ta extends _e {
  constructor(t, r) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: r,
      message: t,
    }),
      (this.name = "WebAuthnUnknownError"),
      (this.originalError = r);
  }
}
function NT({ error: e, options: t }) {
  var r, n, s;
  const { publicKey: i } = t;
  if (!i) throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new _e({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e,
      });
  } else if (e.name === "ConstraintError") {
    if (
      ((r = i.authenticatorSelection) === null || r === void 0
        ? void 0
        : r.requireResidentKey) === !0
    )
      return new _e({
        message:
          "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: e,
      });
    if (
      t.mediation === "conditional" &&
      ((n = i.authenticatorSelection) === null || n === void 0
        ? void 0
        : n.userVerification) === "required"
    )
      return new _e({
        message:
          "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: e,
      });
    if (
      ((s = i.authenticatorSelection) === null || s === void 0
        ? void 0
        : s.userVerification) === "required"
    )
      return new _e({
        message:
          "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: e,
      });
  } else {
    if (e.name === "InvalidStateError")
      return new _e({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: e,
      });
    if (e.name === "NotAllowedError")
      return new _e({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e,
      });
    if (e.name === "NotSupportedError")
      return i.pubKeyCredParams.filter((a) => a.type === "public-key")
        .length === 0
        ? new _e({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: e,
          })
        : new _e({
            message:
              "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: e,
          });
    if (e.name === "SecurityError") {
      const o = window.location.hostname;
      if (Ty(o)) {
        if (i.rp.id !== o)
          return new _e({
            message: `The RP ID "${i.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e,
          });
      } else
        return new _e({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e,
        });
    } else if (e.name === "TypeError") {
      if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
        return new _e({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: e,
        });
    } else if (e.name === "UnknownError")
      return new _e({
        message:
          "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e,
      });
  }
  return new _e({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e,
  });
}
function jT({ error: e, options: t }) {
  const { publicKey: r } = t;
  if (!r) throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new _e({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e,
      });
  } else {
    if (e.name === "NotAllowedError")
      return new _e({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e,
      });
    if (e.name === "SecurityError") {
      const n = window.location.hostname;
      if (Ty(n)) {
        if (r.rpId !== n)
          return new _e({
            message: `The RP ID "${r.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e,
          });
      } else
        return new _e({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e,
        });
    } else if (e.name === "UnknownError")
      return new _e({
        message:
          "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e,
      });
  }
  return new _e({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e,
  });
}
class IT {
  createNewAbortSignal() {
    if (this.controller) {
      const r = new Error("Cancelling existing WebAuthn API call for new one");
      (r.name = "AbortError"), this.controller.abort(r);
    }
    const t = new AbortController();
    return (this.controller = t), t.signal;
  }
  cancelCeremony() {
    if (this.controller) {
      const t = new Error("Manually cancelling existing WebAuthn API call");
      (t.name = "AbortError"),
        this.controller.abort(t),
        (this.controller = void 0);
    }
  }
}
const $T = new IT();
function LT(e) {
  if (!e) throw new Error("Credential creation options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseCreationOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(e);
  const { challenge: t, user: r, excludeCredentials: n } = e,
    s = sl(e, ["challenge", "user", "excludeCredentials"]),
    i = ws(t).buffer,
    o = Object.assign(Object.assign({}, r), { id: ws(r.id).buffer }),
    a = Object.assign(Object.assign({}, s), { challenge: i, user: o });
  if (n && n.length > 0) {
    a.excludeCredentials = new Array(n.length);
    for (let l = 0; l < n.length; l++) {
      const u = n[l];
      a.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
        id: ws(u.id).buffer,
        type: u.type || "public-key",
        transports: u.transports,
      });
    }
  }
  return a;
}
function DT(e) {
  if (!e) throw new Error("Credential request options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseRequestOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  const { challenge: t, allowCredentials: r } = e,
    n = sl(e, ["challenge", "allowCredentials"]),
    s = ws(t).buffer,
    i = Object.assign(Object.assign({}, n), { challenge: s });
  if (r && r.length > 0) {
    i.allowCredentials = new Array(r.length);
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      i.allowCredentials[o] = Object.assign(Object.assign({}, a), {
        id: ws(a.id).buffer,
        type: a.type || "public-key",
        transports: a.transports,
      });
    }
  }
  return i;
}
function MT(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
  const r = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: vn(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: vn(new Uint8Array(e.response.clientDataJSON)),
    },
    type: "public-key",
    clientExtensionResults: e.getClientExtensionResults(),
    authenticatorAttachment:
      (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0,
  };
}
function UT(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
  const r = e,
    n = e.getClientExtensionResults(),
    s = e.response;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      authenticatorData: vn(new Uint8Array(s.authenticatorData)),
      clientDataJSON: vn(new Uint8Array(s.clientDataJSON)),
      signature: vn(new Uint8Array(s.signature)),
      userHandle: s.userHandle ? vn(new Uint8Array(s.userHandle)) : void 0,
    },
    type: "public-key",
    clientExtensionResults: n,
    authenticatorAttachment:
      (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0,
  };
}
function Ty(e) {
  return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function sp() {
  var e, t;
  return !!(
    Oe() &&
    "PublicKeyCredential" in window &&
    window.PublicKeyCredential &&
    "credentials" in navigator &&
    typeof ((e = navigator == null ? void 0 : navigator.credentials) === null ||
    e === void 0
      ? void 0
      : e.create) == "function" &&
    typeof ((t = navigator == null ? void 0 : navigator.credentials) === null ||
    t === void 0
      ? void 0
      : t.get) == "function"
  );
}
async function FT(e) {
  try {
    const t = await navigator.credentials.create(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new Ta("Browser returned unexpected credential type", t),
          }
      : { data: null, error: new Ta("Empty credential response", t) };
  } catch (t) {
    return { data: null, error: NT({ error: t, options: e }) };
  }
}
async function zT(e) {
  try {
    const t = await navigator.credentials.get(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new Ta("Browser returned unexpected credential type", t),
          }
      : { data: null, error: new Ta("Empty credential response", t) };
  } catch (t) {
    return { data: null, error: jT({ error: t, options: e }) };
  }
}
const BT = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  },
  VT = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct",
  };
function Ca(...e) {
  const t = (s) => s !== null && typeof s == "object" && !Array.isArray(s),
    r = (s) => s instanceof ArrayBuffer || ArrayBuffer.isView(s),
    n = {};
  for (const s of e)
    if (s)
      for (const i in s) {
        const o = s[i];
        if (o !== void 0)
          if (Array.isArray(o)) n[i] = o;
          else if (r(o)) n[i] = o;
          else if (t(o)) {
            const a = n[i];
            t(a) ? (n[i] = Ca(a, o)) : (n[i] = Ca(o));
          } else n[i] = o;
      }
  return n;
}
function WT(e, t) {
  return Ca(BT, e, t || {});
}
function HT(e, t) {
  return Ca(VT, e, t || {});
}
class qT {
  constructor(t) {
    (this.client = t),
      (this.enroll = this._enroll.bind(this)),
      (this.challenge = this._challenge.bind(this)),
      (this.verify = this._verify.bind(this)),
      (this.authenticate = this._authenticate.bind(this)),
      (this.register = this._register.bind(this));
  }
  async _enroll(t) {
    return this.client.mfa.enroll(
      Object.assign(Object.assign({}, t), { factorType: "webauthn" })
    );
  }
  async _challenge(
    { factorId: t, webauthn: r, friendlyName: n, signal: s },
    i
  ) {
    try {
      const { data: o, error: a } = await this.client.mfa.challenge({
        factorId: t,
        webauthn: r,
      });
      if (!o) return { data: null, error: a };
      const l = s ?? $T.createNewAbortSignal();
      if (o.webauthn.type === "create") {
        const { user: u } = o.webauthn.credential_options.publicKey;
        u.name || (u.name = `${u.id}:${n}`),
          u.displayName || (u.displayName = u.name);
      }
      switch (o.webauthn.type) {
        case "create": {
          const u = WT(
              o.webauthn.credential_options.publicKey,
              i == null ? void 0 : i.create
            ),
            { data: c, error: h } = await FT({ publicKey: u, signal: l });
          return c
            ? {
                data: {
                  factorId: t,
                  challengeId: o.id,
                  webauthn: { type: o.webauthn.type, credential_response: c },
                },
                error: null,
              }
            : { data: null, error: h };
        }
        case "request": {
          const u = HT(
              o.webauthn.credential_options.publicKey,
              i == null ? void 0 : i.request
            ),
            { data: c, error: h } = await zT(
              Object.assign(Object.assign({}, o.webauthn.credential_options), {
                publicKey: u,
                signal: l,
              })
            );
          return c
            ? {
                data: {
                  factorId: t,
                  challengeId: o.id,
                  webauthn: { type: o.webauthn.type, credential_response: c },
                },
                error: null,
              }
            : { data: null, error: h };
        }
      }
    } catch (o) {
      return M(o)
        ? { data: null, error: o }
        : { data: null, error: new fn("Unexpected error in challenge", o) };
    }
  }
  async _verify({ challengeId: t, factorId: r, webauthn: n }) {
    return this.client.mfa.verify({ factorId: r, challengeId: t, webauthn: n });
  }
  async _authenticate(
    {
      factorId: t,
      webauthn: {
        rpId: r = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    i
  ) {
    if (!r)
      return {
        data: null,
        error: new Bi("rpId is required for WebAuthn authentication"),
      };
    try {
      if (!sp())
        return {
          data: null,
          error: new fn("Browser does not support WebAuthn", null),
        };
      const { data: o, error: a } = await this.challenge(
        { factorId: t, webauthn: { rpId: r, rpOrigins: n }, signal: s },
        { request: i }
      );
      if (!o) return { data: null, error: a };
      const { webauthn: l } = o;
      return this._verify({
        factorId: t,
        challengeId: o.challengeId,
        webauthn: {
          type: l.type,
          rpId: r,
          rpOrigins: n,
          credential_response: l.credential_response,
        },
      });
    } catch (o) {
      return M(o)
        ? { data: null, error: o }
        : { data: null, error: new fn("Unexpected error in authenticate", o) };
    }
  }
  async _register(
    {
      friendlyName: t,
      webauthn: {
        rpId: r = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    i
  ) {
    if (!r)
      return {
        data: null,
        error: new Bi("rpId is required for WebAuthn registration"),
      };
    try {
      if (!sp())
        return {
          data: null,
          error: new fn("Browser does not support WebAuthn", null),
        };
      const { data: o, error: a } = await this._enroll({ friendlyName: t });
      if (!o)
        return (
          await this.client.mfa
            .listFactors()
            .then((c) => {
              var h;
              return (h = c.data) === null || h === void 0
                ? void 0
                : h.all.find(
                    (f) =>
                      f.factor_type === "webauthn" &&
                      f.friendly_name === t &&
                      f.status !== "unverified"
                  );
            })
            .then((c) =>
              c
                ? this.client.mfa.unenroll({
                    factorId: c == null ? void 0 : c.id,
                  })
                : void 0
            ),
          { data: null, error: a }
        );
      const { data: l, error: u } = await this._challenge(
        {
          factorId: o.id,
          friendlyName: o.friendly_name,
          webauthn: { rpId: r, rpOrigins: n },
          signal: s,
        },
        { create: i }
      );
      return l
        ? this._verify({
            factorId: o.id,
            challengeId: l.challengeId,
            webauthn: {
              rpId: r,
              rpOrigins: n,
              type: l.webauthn.type,
              credential_response: l.webauthn.credential_response,
            },
          })
        : { data: null, error: u };
    } catch (o) {
      return M(o)
        ? { data: null, error: o }
        : { data: null, error: new fn("Unexpected error in register", o) };
    }
  }
}
RT();
const KT = {
  url: Bk,
  storageKey: Vk,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Wk,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 1e4,
};
async function ip(e, t, r) {
  return await r();
}
const Kn = {};
class Vi {
  get jwks() {
    var t, r;
    return (r =
      (t = Kn[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !==
      null && r !== void 0
      ? r
      : { keys: [] };
  }
  set jwks(t) {
    Kn[this.storageKey] = Object.assign(
      Object.assign({}, Kn[this.storageKey]),
      { jwks: t }
    );
  }
  get jwks_cached_at() {
    var t, r;
    return (r =
      (t = Kn[this.storageKey]) === null || t === void 0
        ? void 0
        : t.cachedAt) !== null && r !== void 0
      ? r
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(t) {
    Kn[this.storageKey] = Object.assign(
      Object.assign({}, Kn[this.storageKey]),
      { cachedAt: t }
    );
  }
  constructor(t) {
    var r, n, s;
    (this.userStorage = null),
      (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.autoRefreshTickTimeout = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log);
    const i = Object.assign(Object.assign({}, KT), t);
    if (
      ((this.storageKey = i.storageKey),
      (this.instanceID =
        (r = Vi.nextInstanceID[this.storageKey]) !== null && r !== void 0
          ? r
          : 0),
      (Vi.nextInstanceID[this.storageKey] = this.instanceID + 1),
      (this.logDebugMessages = !!i.debug),
      typeof i.debug == "function" && (this.logger = i.debug),
      this.instanceID > 0 && Oe())
    ) {
      const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(o), this.logDebugMessages && console.trace(o);
    }
    if (
      ((this.persistSession = i.persistSession),
      (this.autoRefreshToken = i.autoRefreshToken),
      (this.admin = new kT({ url: i.url, headers: i.headers, fetch: i.fetch })),
      (this.url = i.url),
      (this.headers = i.headers),
      (this.fetch = Sy(i.fetch)),
      (this.lock = i.lock || ip),
      (this.detectSessionInUrl = i.detectSessionInUrl),
      (this.flowType = i.flowType),
      (this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader),
      (this.throwOnError = i.throwOnError),
      (this.lockAcquireTimeout = i.lockAcquireTimeout),
      i.lock
        ? (this.lock = i.lock)
        : this.persistSession &&
          Oe() &&
          !(
            (n = globalThis == null ? void 0 : globalThis.navigator) === null ||
            n === void 0
          ) &&
          n.locks
        ? (this.lock = CT)
        : (this.lock = ip),
      this.jwks ||
        ((this.jwks = { keys: [] }),
        (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new qT(this),
      }),
      (this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this),
      }),
      this.persistSession
        ? (i.storage
            ? (this.storage = i.storage)
            : by()
            ? (this.storage = globalThis.localStorage)
            : ((this.memoryStorage = {}),
              (this.storage = np(this.memoryStorage))),
          i.userStorage && (this.userStorage = i.userStorage))
        : ((this.memoryStorage = {}), (this.storage = np(this.memoryStorage))),
      Oe() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey
        );
      } catch (o) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          o
        );
      }
      (s = this.broadcastChannel) === null ||
        s === void 0 ||
        s.addEventListener("message", async (o) => {
          this._debug(
            "received broadcast notification from other tab or client",
            o
          ),
            await this._notifyAllSubscribers(o.data.event, o.data.session, !1);
        });
    }
    this.initialize();
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(t) {
    if (this.throwOnError && t && t.error) throw t.error;
    return t;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${
      this.instanceID
    } (${wy}) ${new Date().toISOString()}`;
  }
  _debug(...t) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...t), this;
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._initialize()
          ))()),
        await this.initializePromise);
  }
  async _initialize() {
    var t;
    try {
      let r = {},
        n = "none";
      if (
        (Oe() &&
          ((r = iT(window.location.href)),
          this._isImplicitGrantCallback(r)
            ? (n = "implicit")
            : (await this._isPKCECallback(r)) && (n = "pkce")),
        Oe() && this.detectSessionInUrl && n !== "none")
      ) {
        const { data: s, error: i } = await this._getSessionFromURL(r, n);
        if (i) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              i
            ),
            Jk(i))
          ) {
            const l =
              (t = i.details) === null || t === void 0 ? void 0 : t.code;
            if (
              l === "identity_already_exists" ||
              l === "identity_not_found" ||
              l === "single_identity_not_deletable"
            )
              return { error: i };
          }
          return { error: i };
        }
        const { session: o, redirectType: a } = s;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            o,
            "redirect type",
            a
          ),
          await this._saveSession(o),
          setTimeout(async () => {
            a === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o)
              : await this._notifyAllSubscribers("SIGNED_IN", o);
          }, 0),
          { error: null }
        );
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (r) {
      return M(r)
        ? this._returnResult({ error: r })
        : this._returnResult({
            error: new fn("Unexpected error during initialization", r),
          });
    } finally {
      await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end");
    }
  }
  async signInAnonymously(t) {
    var r, n, s;
    try {
      const i = await F(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (n =
                (r = t == null ? void 0 : t.options) === null || r === void 0
                  ? void 0
                  : r.data) !== null && n !== void 0
                ? n
                : {},
            gotrue_meta_security: {
              captcha_token:
                (s = t == null ? void 0 : t.options) === null || s === void 0
                  ? void 0
                  : s.captchaToken,
            },
          },
          xform: Tt,
        }),
        { data: o, error: a } = i;
      if (a || !o)
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      const l = o.session,
        u = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (i) {
      if (M(i))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async signUp(t) {
    var r, n, s;
    try {
      let i;
      if ("email" in t) {
        const { email: c, password: h, options: f } = t;
        let d = null,
          y = null;
        this.flowType === "pkce" &&
          ([d, y] = await Wn(this.storage, this.storageKey)),
          (i = await F(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: f == null ? void 0 : f.emailRedirectTo,
            body: {
              email: c,
              password: h,
              data:
                (r = f == null ? void 0 : f.data) !== null && r !== void 0
                  ? r
                  : {},
              gotrue_meta_security: {
                captcha_token: f == null ? void 0 : f.captchaToken,
              },
              code_challenge: d,
              code_challenge_method: y,
            },
            xform: Tt,
          }));
      } else if ("phone" in t) {
        const { phone: c, password: h, options: f } = t;
        i = await F(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: h,
            data:
              (n = f == null ? void 0 : f.data) !== null && n !== void 0
                ? n
                : {},
            channel:
              (s = f == null ? void 0 : f.channel) !== null && s !== void 0
                ? s
                : "sms",
            gotrue_meta_security: {
              captcha_token: f == null ? void 0 : f.captchaToken,
            },
          },
          xform: Tt,
        });
      } else
        throw new Ao(
          "You must provide either an email or phone number and a password"
        );
      const { data: o, error: a } = i;
      if (a || !o)
        return (
          await Pe(this.storage, `${this.storageKey}-code-verifier`),
          this._returnResult({ data: { user: null, session: null }, error: a })
        );
      const l = o.session,
        u = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (i) {
      if ((await Pe(this.storage, `${this.storageKey}-code-verifier`), M(i)))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async signInWithPassword(t) {
    try {
      let r;
      if ("email" in t) {
        const { email: i, password: o, options: a } = t;
        r = await F(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: i,
              password: o,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: tp,
          }
        );
      } else if ("phone" in t) {
        const { phone: i, password: o, options: a } = t;
        r = await F(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: i,
              password: o,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: tp,
          }
        );
      } else
        throw new Ao(
          "You must provide either an email or phone number and a password"
        );
      const { data: n, error: s } = r;
      if (s)
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      if (!n || !n.session || !n.user) {
        const i = new Vn();
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      }
      return (
        n.session &&
          (await this._saveSession(n.session),
          await this._notifyAllSubscribers("SIGNED_IN", n.session)),
        this._returnResult({
          data: Object.assign(
            { user: n.user, session: n.session },
            n.weak_password ? { weakPassword: n.weak_password } : null
          ),
          error: s,
        })
      );
    } catch (r) {
      if (M(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async signInWithOAuth(t) {
    var r, n, s, i;
    return await this._handleProviderSignIn(t.provider, {
      redirectTo:
        (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (n = t.options) === null || n === void 0 ? void 0 : n.scopes,
      queryParams:
        (s = t.options) === null || s === void 0 ? void 0 : s.queryParams,
      skipBrowserRedirect:
        (i = t.options) === null || i === void 0
          ? void 0
          : i.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(t) {
    return (
      await this.initializePromise,
      this._acquireLock(this.lockAcquireTimeout, async () =>
        this._exchangeCodeForSession(t)
      )
    );
  }
  async signInWithWeb3(t) {
    const { chain: r } = t;
    switch (r) {
      case "ethereum":
        return await this.signInWithEthereum(t);
      case "solana":
        return await this.signInWithSolana(t);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
    }
  }
  async signInWithEthereum(t) {
    var r, n, s, i, o, a, l, u, c, h, f;
    let d, y;
    if ("message" in t) (d = t.message), (y = t.signature);
    else {
      const { chain: p, wallet: w, statement: g, options: m } = t;
      let v;
      if (Oe())
        if (typeof w == "object") v = w;
        else {
          const A = window;
          if (
            "ethereum" in A &&
            typeof A.ethereum == "object" &&
            "request" in A.ethereum &&
            typeof A.ethereum.request == "function"
          )
            v = A.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead."
            );
        }
      else {
        if (typeof w != "object" || !(m != null && m.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments."
          );
        v = w;
      }
      const _ = new URL(
          (r = m == null ? void 0 : m.url) !== null && r !== void 0
            ? r
            : window.location.href
        ),
        S = await v
          .request({ method: "eth_requestAccounts" })
          .then((A) => A)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid"
            );
          });
      if (!S || S.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected."
        );
      const E = ky(S[0]);
      let k =
        (n = m == null ? void 0 : m.signInWithEthereum) === null || n === void 0
          ? void 0
          : n.chainId;
      if (!k) {
        const A = await v.request({ method: "eth_chainId" });
        k = PT(A);
      }
      const R = {
        domain: _.host,
        address: E,
        statement: g,
        uri: _.href,
        version: "1",
        chainId: k,
        nonce:
          (s = m == null ? void 0 : m.signInWithEthereum) === null ||
          s === void 0
            ? void 0
            : s.nonce,
        issuedAt:
          (o =
            (i = m == null ? void 0 : m.signInWithEthereum) === null ||
            i === void 0
              ? void 0
              : i.issuedAt) !== null && o !== void 0
            ? o
            : new Date(),
        expirationTime:
          (a = m == null ? void 0 : m.signInWithEthereum) === null ||
          a === void 0
            ? void 0
            : a.expirationTime,
        notBefore:
          (l = m == null ? void 0 : m.signInWithEthereum) === null ||
          l === void 0
            ? void 0
            : l.notBefore,
        requestId:
          (u = m == null ? void 0 : m.signInWithEthereum) === null ||
          u === void 0
            ? void 0
            : u.requestId,
        resources:
          (c = m == null ? void 0 : m.signInWithEthereum) === null ||
          c === void 0
            ? void 0
            : c.resources,
      };
      (d = AT(R)),
        (y = await v.request({ method: "personal_sign", params: [OT(d), E] }));
    }
    try {
      const { data: p, error: w } = await F(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: d, signature: y },
            !((h = t.options) === null || h === void 0) && h.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (f = t.options) === null || f === void 0
                        ? void 0
                        : f.captchaToken,
                  },
                }
              : null
          ),
          xform: Tt,
        }
      );
      if (w) throw w;
      if (!p || !p.session || !p.user) {
        const g = new Vn();
        return this._returnResult({
          data: { user: null, session: null },
          error: g,
        });
      }
      return (
        p.session &&
          (await this._saveSession(p.session),
          await this._notifyAllSubscribers("SIGNED_IN", p.session)),
        this._returnResult({ data: Object.assign({}, p), error: w })
      );
    } catch (p) {
      if (M(p))
        return this._returnResult({
          data: { user: null, session: null },
          error: p,
        });
      throw p;
    }
  }
  async signInWithSolana(t) {
    var r, n, s, i, o, a, l, u, c, h, f, d;
    let y, p;
    if ("message" in t) (y = t.message), (p = t.signature);
    else {
      const { chain: w, wallet: g, statement: m, options: v } = t;
      let _;
      if (Oe())
        if (typeof g == "object") _ = g;
        else {
          const E = window;
          if (
            "solana" in E &&
            typeof E.solana == "object" &&
            (("signIn" in E.solana && typeof E.solana.signIn == "function") ||
              ("signMessage" in E.solana &&
                typeof E.solana.signMessage == "function"))
          )
            _ = E.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead."
            );
        }
      else {
        if (typeof g != "object" || !(v != null && v.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments."
          );
        _ = g;
      }
      const S = new URL(
        (r = v == null ? void 0 : v.url) !== null && r !== void 0
          ? r
          : window.location.href
      );
      if ("signIn" in _ && _.signIn) {
        const E = await _.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                v == null ? void 0 : v.signInWithSolana
              ),
              { version: "1", domain: S.host, uri: S.href }
            ),
            m ? { statement: m } : null
          )
        );
        let k;
        if (Array.isArray(E) && E[0] && typeof E[0] == "object") k = E[0];
        else if (
          E &&
          typeof E == "object" &&
          "signedMessage" in E &&
          "signature" in E
        )
          k = E;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value"
          );
        if (
          "signedMessage" in k &&
          "signature" in k &&
          (typeof k.signedMessage == "string" ||
            k.signedMessage instanceof Uint8Array) &&
          k.signature instanceof Uint8Array
        )
          (y =
            typeof k.signedMessage == "string"
              ? k.signedMessage
              : new TextDecoder().decode(k.signedMessage)),
            (p = k.signature);
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields"
          );
      } else {
        if (
          !("signMessage" in _) ||
          typeof _.signMessage != "function" ||
          !("publicKey" in _) ||
          typeof _ != "object" ||
          !_.publicKey ||
          !("toBase58" in _.publicKey) ||
          typeof _.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API"
          );
        y = [
          `${S.host} wants you to sign in with your Solana account:`,
          _.publicKey.toBase58(),
          ...(m ? ["", m, ""] : [""]),
          "Version: 1",
          `URI: ${S.href}`,
          `Issued At: ${
            (s =
              (n = v == null ? void 0 : v.signInWithSolana) === null ||
              n === void 0
                ? void 0
                : n.issuedAt) !== null && s !== void 0
              ? s
              : new Date().toISOString()
          }`,
          ...(!(
            (i = v == null ? void 0 : v.signInWithSolana) === null ||
            i === void 0
          ) && i.notBefore
            ? [`Not Before: ${v.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (o = v == null ? void 0 : v.signInWithSolana) === null ||
            o === void 0
          ) && o.expirationTime
            ? [`Expiration Time: ${v.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (a = v == null ? void 0 : v.signInWithSolana) === null ||
            a === void 0
          ) && a.chainId
            ? [`Chain ID: ${v.signInWithSolana.chainId}`]
            : []),
          ...(!(
            (l = v == null ? void 0 : v.signInWithSolana) === null ||
            l === void 0
          ) && l.nonce
            ? [`Nonce: ${v.signInWithSolana.nonce}`]
            : []),
          ...(!(
            (u = v == null ? void 0 : v.signInWithSolana) === null ||
            u === void 0
          ) && u.requestId
            ? [`Request ID: ${v.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (h =
              (c = v == null ? void 0 : v.signInWithSolana) === null ||
              c === void 0
                ? void 0
                : c.resources) === null || h === void 0
          ) && h.length
            ? [
                "Resources",
                ...v.signInWithSolana.resources.map((k) => `- ${k}`),
              ]
            : []),
        ].join(`
`);
        const E = await _.signMessage(new TextEncoder().encode(y), "utf8");
        if (!E || !(E instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value"
          );
        p = E;
      }
    }
    try {
      const { data: w, error: g } = await F(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: y, signature: vn(p) },
            !((f = t.options) === null || f === void 0) && f.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (d = t.options) === null || d === void 0
                        ? void 0
                        : d.captchaToken,
                  },
                }
              : null
          ),
          xform: Tt,
        }
      );
      if (g) throw g;
      if (!w || !w.session || !w.user) {
        const m = new Vn();
        return this._returnResult({
          data: { user: null, session: null },
          error: m,
        });
      }
      return (
        w.session &&
          (await this._saveSession(w.session),
          await this._notifyAllSubscribers("SIGNED_IN", w.session)),
        this._returnResult({ data: Object.assign({}, w), error: g })
      );
    } catch (w) {
      if (M(w))
        return this._returnResult({
          data: { user: null, session: null },
          error: w,
        });
      throw w;
    }
  }
  async _exchangeCodeForSession(t) {
    const r = await ln(this.storage, `${this.storageKey}-code-verifier`),
      [n, s] = (r ?? "").split("/");
    try {
      if (!n && this.flowType === "pkce") throw new Yk();
      const { data: i, error: o } = await F(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: t, code_verifier: n },
          xform: Tt,
        }
      );
      if ((await Pe(this.storage, `${this.storageKey}-code-verifier`), o))
        throw o;
      if (!i || !i.session || !i.user) {
        const a = new Vn();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a,
        });
      }
      return (
        i.session &&
          (await this._saveSession(i.session),
          await this._notifyAllSubscribers("SIGNED_IN", i.session)),
        this._returnResult({
          data: Object.assign(Object.assign({}, i), {
            redirectType: s ?? null,
          }),
          error: o,
        })
      );
    } catch (i) {
      if ((await Pe(this.storage, `${this.storageKey}-code-verifier`), M(i)))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: i,
        });
      throw i;
    }
  }
  async signInWithIdToken(t) {
    try {
      const {
          options: r,
          provider: n,
          token: s,
          access_token: i,
          nonce: o,
        } = t,
        a = await F(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: n,
              id_token: s,
              access_token: i,
              nonce: o,
              gotrue_meta_security: {
                captcha_token: r == null ? void 0 : r.captchaToken,
              },
            },
            xform: Tt,
          }
        ),
        { data: l, error: u } = a;
      if (u)
        return this._returnResult({
          data: { user: null, session: null },
          error: u,
        });
      if (!l || !l.session || !l.user) {
        const c = new Vn();
        return this._returnResult({
          data: { user: null, session: null },
          error: c,
        });
      }
      return (
        l.session &&
          (await this._saveSession(l.session),
          await this._notifyAllSubscribers("SIGNED_IN", l.session)),
        this._returnResult({ data: l, error: u })
      );
    } catch (r) {
      if (M(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async signInWithOtp(t) {
    var r, n, s, i, o;
    try {
      if ("email" in t) {
        const { email: a, options: l } = t;
        let u = null,
          c = null;
        this.flowType === "pkce" &&
          ([u, c] = await Wn(this.storage, this.storageKey));
        const { error: h } = await F(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data:
              (r = l == null ? void 0 : l.data) !== null && r !== void 0
                ? r
                : {},
            create_user:
              (n = l == null ? void 0 : l.shouldCreateUser) !== null &&
              n !== void 0
                ? n
                : !0,
            gotrue_meta_security: {
              captcha_token: l == null ? void 0 : l.captchaToken,
            },
            code_challenge: u,
            code_challenge_method: c,
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo,
        });
        return this._returnResult({
          data: { user: null, session: null },
          error: h,
        });
      }
      if ("phone" in t) {
        const { phone: a, options: l } = t,
          { data: u, error: c } = await F(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: a,
                data:
                  (s = l == null ? void 0 : l.data) !== null && s !== void 0
                    ? s
                    : {},
                create_user:
                  (i = l == null ? void 0 : l.shouldCreateUser) !== null &&
                  i !== void 0
                    ? i
                    : !0,
                gotrue_meta_security: {
                  captcha_token: l == null ? void 0 : l.captchaToken,
                },
                channel:
                  (o = l == null ? void 0 : l.channel) !== null && o !== void 0
                    ? o
                    : "sms",
              },
            }
          );
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: u == null ? void 0 : u.message_id,
          },
          error: c,
        });
      }
      throw new Ao("You must provide either an email or phone number.");
    } catch (a) {
      if ((await Pe(this.storage, `${this.storageKey}-code-verifier`), M(a)))
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      throw a;
    }
  }
  async verifyOtp(t) {
    var r, n;
    try {
      let s, i;
      "options" in t &&
        ((s = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo),
        (i =
          (n = t.options) === null || n === void 0 ? void 0 : n.captchaToken));
      const { data: o, error: a } = await F(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, t), {
            gotrue_meta_security: { captcha_token: i },
          }),
          redirectTo: s,
          xform: Tt,
        }
      );
      if (a) throw a;
      if (!o) throw new Error("An error occurred on token verification.");
      const l = o.session,
        u = o.user;
      return (
        l != null &&
          l.access_token &&
          (await this._saveSession(l),
          await this._notifyAllSubscribers(
            t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            l
          )),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (s) {
      if (M(s))
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      throw s;
    }
  }
  async signInWithSSO(t) {
    var r, n, s, i, o;
    try {
      let a = null,
        l = null;
      this.flowType === "pkce" &&
        ([a, l] = await Wn(this.storage, this.storageKey));
      const u = await F(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  "providerId" in t ? { provider_id: t.providerId } : null
                ),
                "domain" in t ? { domain: t.domain } : null
              ),
              {
                redirect_to:
                  (n =
                    (r = t.options) === null || r === void 0
                      ? void 0
                      : r.redirectTo) !== null && n !== void 0
                    ? n
                    : void 0,
              }
            ),
            !((s = t == null ? void 0 : t.options) === null || s === void 0) &&
              s.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token: t.options.captchaToken,
                  },
                }
              : null
          ),
          {
            skip_http_redirect: !0,
            code_challenge: a,
            code_challenge_method: l,
          }
        ),
        headers: this.headers,
        xform: bT,
      });
      return (
        !((i = u.data) === null || i === void 0) &&
          i.url &&
          Oe() &&
          !(
            !((o = t.options) === null || o === void 0) && o.skipBrowserRedirect
          ) &&
          window.location.assign(u.data.url),
        this._returnResult(u)
      );
    } catch (a) {
      if ((await Pe(this.storage, `${this.storageKey}-code-verifier`), M(a)))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._reauthenticate()
      )
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: r },
          error: n,
        } = t;
        if (n) throw n;
        if (!r) throw new rt();
        const { error: s } = await F(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: r.access_token }
        );
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      });
    } catch (t) {
      if (M(t))
        return this._returnResult({
          data: { user: null, session: null },
          error: t,
        });
      throw t;
    }
  }
  async resend(t) {
    try {
      const r = `${this.url}/resend`;
      if ("email" in t) {
        const { email: n, type: s, options: i } = t,
          { error: o } = await F(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              email: n,
              type: s,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
            redirectTo: i == null ? void 0 : i.emailRedirectTo,
          });
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      } else if ("phone" in t) {
        const { phone: n, type: s, options: i } = t,
          { data: o, error: a } = await F(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              phone: n,
              type: s,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
          });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: o == null ? void 0 : o.message_id,
          },
          error: a,
        });
      }
      throw new Ao(
        "You must provide either an email or phone number and a type"
      );
    } catch (r) {
      if (M(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(this.lockAcquireTimeout, async () =>
        this._useSession(async (r) => r)
      )
    );
  }
  async _acquireLock(t, r) {
    this._debug("#_acquireLock", "begin", t);
    try {
      if (this.lockAcquired) {
        const n = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          s = (async () => (await n, await r()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await s;
              } catch {}
            })()
          ),
          s
        );
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey
        );
        try {
          this.lockAcquired = !0;
          const n = r();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await n;
                } catch {}
              })()
            ),
              await n;
            this.pendingInLock.length;

          ) {
            const s = [...this.pendingInLock];
            await Promise.all(s), this.pendingInLock.splice(0, s.length);
          }
          return await n;
        } finally {
          this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey
          ),
            (this.lockAcquired = !1);
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(t) {
    this._debug("#_useSession", "begin");
    try {
      const r = await this.__loadSession();
      return await t(r);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack
        );
    try {
      let t = null;
      const r = await ln(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", r),
        r !== null &&
          (this._isValidSession(r)
            ? (t = r)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid"
              ),
              await this._removeSession())),
        !t)
      )
        return { data: { session: null }, error: null };
      const n = t.expires_at ? t.expires_at * 1e3 - Date.now() < Jl : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${n ? "" : " not"} expired`,
          "expires_at",
          t.expires_at
        ),
        !n)
      ) {
        if (this.userStorage) {
          const o = await ln(this.userStorage, this.storageKey + "-user");
          o != null && o.user ? (t.user = o.user) : (t.user = Zl());
        }
        if (
          this.storage.isServer &&
          t.user &&
          !t.user.__isUserNotAvailableProxy
        ) {
          const o = { value: this.suppressGetSessionWarning };
          (t.user = yT(t.user, o)),
            o.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: t }, error: null };
      }
      const { data: s, error: i } = await this._callRefreshToken(
        t.refresh_token
      );
      return i
        ? this._returnResult({ data: { session: null }, error: i })
        : this._returnResult({ data: { session: s }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(t) {
    if (t) return await this._getUser(t);
    await this.initializePromise;
    const r = await this._acquireLock(
      this.lockAcquireTimeout,
      async () => await this._getUser()
    );
    return r.data.user && (this.suppressGetSessionWarning = !0), r;
  }
  async _getUser(t) {
    try {
      return t
        ? await F(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: t,
            xform: Ar,
          })
        : await this._useSession(async (r) => {
            var n, s, i;
            const { data: o, error: a } = r;
            if (a) throw a;
            return !(
              !((n = o.session) === null || n === void 0) && n.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new rt() }
              : await F(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (i =
                      (s = o.session) === null || s === void 0
                        ? void 0
                        : s.access_token) !== null && i !== void 0
                      ? i
                      : void 0,
                  xform: Ar,
                });
          });
    } catch (r) {
      if (M(r))
        return (
          Qk(r) &&
            (await this._removeSession(),
            await Pe(this.storage, `${this.storageKey}-code-verifier`)),
          this._returnResult({ data: { user: null }, error: r })
        );
      throw r;
    }
  }
  async updateUser(t, r = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._updateUser(t, r)
      )
    );
  }
  async _updateUser(t, r = {}) {
    try {
      return await this._useSession(async (n) => {
        const { data: s, error: i } = n;
        if (i) throw i;
        if (!s.session) throw new rt();
        const o = s.session;
        let a = null,
          l = null;
        this.flowType === "pkce" &&
          t.email != null &&
          ([a, l] = await Wn(this.storage, this.storageKey));
        const { data: u, error: c } = await F(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: r == null ? void 0 : r.emailRedirectTo,
            body: Object.assign(Object.assign({}, t), {
              code_challenge: a,
              code_challenge_method: l,
            }),
            jwt: o.access_token,
            xform: Ar,
          }
        );
        if (c) throw c;
        return (
          (o.user = u.user),
          await this._saveSession(o),
          await this._notifyAllSubscribers("USER_UPDATED", o),
          this._returnResult({ data: { user: o.user }, error: null })
        );
      });
    } catch (n) {
      if ((await Pe(this.storage, `${this.storageKey}-code-verifier`), M(n)))
        return this._returnResult({ data: { user: null }, error: n });
      throw n;
    }
  }
  async setSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._setSession(t)
      )
    );
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token) throw new rt();
      const r = Date.now() / 1e3;
      let n = r,
        s = !0,
        i = null;
      const { payload: o } = Xl(t.access_token);
      if ((o.exp && ((n = o.exp), (s = n <= r)), s)) {
        const { data: a, error: l } = await this._callRefreshToken(
          t.refresh_token
        );
        if (l)
          return this._returnResult({
            data: { user: null, session: null },
            error: l,
          });
        if (!a) return { data: { user: null, session: null }, error: null };
        i = a;
      } else {
        const { data: a, error: l } = await this._getUser(t.access_token);
        if (l) throw l;
        (i = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: n - r,
          expires_at: n,
        }),
          await this._saveSession(i),
          await this._notifyAllSubscribers("SIGNED_IN", i);
      }
      return this._returnResult({
        data: { user: i.user, session: i },
        error: null,
      });
    } catch (r) {
      if (M(r))
        return this._returnResult({
          data: { session: null, user: null },
          error: r,
        });
      throw r;
    }
  }
  async refreshSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._refreshSession(t)
      )
    );
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        if (!t) {
          const { data: o, error: a } = r;
          if (a) throw a;
          t = (n = o.session) !== null && n !== void 0 ? n : void 0;
        }
        if (!(t != null && t.refresh_token)) throw new rt();
        const { data: s, error: i } = await this._callRefreshToken(
          t.refresh_token
        );
        return i
          ? this._returnResult({
              data: { user: null, session: null },
              error: i,
            })
          : s
          ? this._returnResult({
              data: { user: s.user, session: s },
              error: null,
            })
          : this._returnResult({
              data: { user: null, session: null },
              error: null,
            });
      });
    } catch (r) {
      if (M(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async _getSessionFromURL(t, r) {
    try {
      if (!Oe()) throw new No("No browser detected.");
      if (t.error || t.error_description || t.error_code)
        throw new No(
          t.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: t.error || "unspecified_error",
            code: t.error_code || "unspecified_code",
          }
        );
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Gf("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new No("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (r === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code)
        )
          throw new Gf("No code detected.");
        const { data: m, error: v } = await this._exchangeCodeForSession(
          t.code
        );
        if (v) throw v;
        const _ = new URL(window.location.href);
        return (
          _.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", _.toString()),
          { data: { session: m.session, redirectType: null }, error: null }
        );
      }
      const {
        provider_token: n,
        provider_refresh_token: s,
        access_token: i,
        refresh_token: o,
        expires_in: a,
        expires_at: l,
        token_type: u,
      } = t;
      if (!i || !a || !o || !u) throw new No("No session defined in URL");
      const c = Math.round(Date.now() / 1e3),
        h = parseInt(a);
      let f = c + h;
      l && (f = parseInt(l));
      const d = f - c;
      d * 1e3 <= Qn &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${h}s`
        );
      const y = f - h;
      c - y >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            y,
            f,
            c
          )
        : c - y < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            y,
            f,
            c
          );
      const { data: p, error: w } = await this._getUser(i);
      if (w) throw w;
      const g = {
        provider_token: n,
        provider_refresh_token: s,
        access_token: i,
        expires_in: h,
        expires_at: f,
        refresh_token: o,
        token_type: u,
        user: p.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        this._returnResult({
          data: { session: g, redirectType: t.type },
          error: null,
        })
      );
    } catch (n) {
      if (M(n))
        return this._returnResult({
          data: { session: null, redirectType: null },
          error: n,
        });
      throw n;
    }
  }
  _isImplicitGrantCallback(t) {
    return typeof this.detectSessionInUrl == "function"
      ? this.detectSessionInUrl(new URL(window.location.href), t)
      : !!(t.access_token || t.error_description);
  }
  async _isPKCECallback(t) {
    const r = await ln(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && r);
  }
  async signOut(t = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._signOut(t)
      )
    );
  }
  async _signOut({ scope: t } = { scope: "global" }) {
    return await this._useSession(async (r) => {
      var n;
      const { data: s, error: i } = r;
      if (i) return this._returnResult({ error: i });
      const o =
        (n = s.session) === null || n === void 0 ? void 0 : n.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, t);
        if (
          a &&
          !(Gk(a) && (a.status === 404 || a.status === 401 || a.status === 403))
        )
          return this._returnResult({ error: a });
      }
      return (
        t !== "others" &&
          (await this._removeSession(),
          await Pe(this.storage, `${this.storageKey}-code-verifier`)),
        this._returnResult({ error: null })
      );
    });
  }
  onAuthStateChange(t) {
    const r = sT(),
      n = {
        id: r,
        callback: t,
        unsubscribe: () => {
          this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            r
          ),
            this.stateChangeEmitters.delete(r);
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", r),
      this.stateChangeEmitters.set(r, n),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(r);
        })
      ))(),
      { data: { subscription: n } }
    );
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (r) => {
      var n, s;
      try {
        const {
          data: { session: i },
          error: o,
        } = r;
        if (o) throw o;
        await ((n = this.stateChangeEmitters.get(t)) === null || n === void 0
          ? void 0
          : n.callback("INITIAL_SESSION", i)),
          this._debug("INITIAL_SESSION", "callback id", t, "session", i);
      } catch (i) {
        await ((s = this.stateChangeEmitters.get(t)) === null || s === void 0
          ? void 0
          : s.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", t, "error", i),
          console.error(i);
      }
    });
  }
  async resetPasswordForEmail(t, r = {}) {
    let n = null,
      s = null;
    this.flowType === "pkce" &&
      ([n, s] = await Wn(this.storage, this.storageKey, !0));
    try {
      return await F(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: n,
          code_challenge_method: s,
          gotrue_meta_security: { captcha_token: r.captchaToken },
        },
        headers: this.headers,
        redirectTo: r.redirectTo,
      });
    } catch (i) {
      if ((await Pe(this.storage, `${this.storageKey}-code-verifier`), M(i)))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async getUserIdentities() {
    var t;
    try {
      const { data: r, error: n } = await this.getUser();
      if (n) throw n;
      return this._returnResult({
        data: {
          identities: (t = r.user.identities) !== null && t !== void 0 ? t : [],
        },
        error: null,
      });
    } catch (r) {
      if (M(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async linkIdentity(t) {
    return "token" in t
      ? this.linkIdentityIdToken(t)
      : this.linkIdentityOAuth(t);
  }
  async linkIdentityOAuth(t) {
    var r;
    try {
      const { data: n, error: s } = await this._useSession(async (i) => {
        var o, a, l, u, c;
        const { data: h, error: f } = i;
        if (f) throw f;
        const d = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          t.provider,
          {
            redirectTo:
              (o = t.options) === null || o === void 0 ? void 0 : o.redirectTo,
            scopes:
              (a = t.options) === null || a === void 0 ? void 0 : a.scopes,
            queryParams:
              (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
            skipBrowserRedirect: !0,
          }
        );
        return await F(this.fetch, "GET", d, {
          headers: this.headers,
          jwt:
            (c =
              (u = h.session) === null || u === void 0
                ? void 0
                : u.access_token) !== null && c !== void 0
              ? c
              : void 0,
        });
      });
      if (s) throw s;
      return (
        Oe() &&
          !(
            !((r = t.options) === null || r === void 0) && r.skipBrowserRedirect
          ) &&
          window.location.assign(n == null ? void 0 : n.url),
        this._returnResult({
          data: { provider: t.provider, url: n == null ? void 0 : n.url },
          error: null,
        })
      );
    } catch (n) {
      if (M(n))
        return this._returnResult({
          data: { provider: t.provider, url: null },
          error: n,
        });
      throw n;
    }
  }
  async linkIdentityIdToken(t) {
    return await this._useSession(async (r) => {
      var n;
      try {
        const {
          error: s,
          data: { session: i },
        } = r;
        if (s) throw s;
        const {
            options: o,
            provider: a,
            token: l,
            access_token: u,
            nonce: c,
          } = t,
          h = await F(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              jwt:
                (n = i == null ? void 0 : i.access_token) !== null &&
                n !== void 0
                  ? n
                  : void 0,
              body: {
                provider: a,
                id_token: l,
                access_token: u,
                nonce: c,
                link_identity: !0,
                gotrue_meta_security: {
                  captcha_token: o == null ? void 0 : o.captchaToken,
                },
              },
              xform: Tt,
            }
          ),
          { data: f, error: d } = h;
        return d
          ? this._returnResult({
              data: { user: null, session: null },
              error: d,
            })
          : !f || !f.session || !f.user
          ? this._returnResult({
              data: { user: null, session: null },
              error: new Vn(),
            })
          : (f.session &&
              (await this._saveSession(f.session),
              await this._notifyAllSubscribers("USER_UPDATED", f.session)),
            this._returnResult({ data: f, error: d }));
      } catch (s) {
        if ((await Pe(this.storage, `${this.storageKey}-code-verifier`), M(s)))
          return this._returnResult({
            data: { user: null, session: null },
            error: s,
          });
        throw s;
      }
    });
  }
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (r) => {
        var n, s;
        const { data: i, error: o } = r;
        if (o) throw o;
        return await F(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${t.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (s =
                (n = i.session) === null || n === void 0
                  ? void 0
                  : n.access_token) !== null && s !== void 0
                ? s
                : void 0,
          }
        );
      });
    } catch (r) {
      if (M(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _refreshAccessToken(t) {
    const r = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      const n = Date.now();
      return await lT(
        async (s) => (
          s > 0 && (await aT(200 * Math.pow(2, s - 1))),
          this._debug(r, "refreshing attempt", s),
          await F(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: t }, headers: this.headers, xform: Tt }
          )
        ),
        (s, i) => {
          const o = 200 * Math.pow(2, s);
          return i && Yl(i) && Date.now() + o - n < Qn;
        }
      );
    } catch (n) {
      if ((this._debug(r, "error", n), M(n)))
        return this._returnResult({
          data: { session: null, user: null },
          error: n,
        });
      throw n;
    } finally {
      this._debug(r, "end");
    }
  }
  _isValidSession(t) {
    return (
      typeof t == "object" &&
      t !== null &&
      "access_token" in t &&
      "refresh_token" in t &&
      "expires_at" in t
    );
  }
  async _handleProviderSignIn(t, r) {
    const n = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        t,
        "options",
        r,
        "url",
        n
      ),
      Oe() && !r.skipBrowserRedirect && window.location.assign(n),
      { data: { provider: t, url: n }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var t, r;
    const n = "#_recoverAndRefresh()";
    this._debug(n, "begin");
    try {
      const s = await ln(this.storage, this.storageKey);
      if (s && this.userStorage) {
        let o = await ln(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !o &&
          ((o = { user: s.user }),
          await Jn(this.userStorage, this.storageKey + "-user", o)),
          (s.user =
            (t = o == null ? void 0 : o.user) !== null && t !== void 0
              ? t
              : Zl());
      } else if (s && !s.user && !s.user) {
        const o = await ln(this.storage, this.storageKey + "-user");
        o && o != null && o.user
          ? ((s.user = o.user),
            await Pe(this.storage, this.storageKey + "-user"),
            await Jn(this.storage, this.storageKey, s))
          : (s.user = Zl());
      }
      if (
        (this._debug(n, "session from storage", s), !this._isValidSession(s))
      ) {
        this._debug(n, "session is not valid"),
          s !== null && (await this._removeSession());
        return;
      }
      const i =
        ((r = s.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 -
          Date.now() <
        Jl;
      if (
        (this._debug(
          n,
          `session has${i ? "" : " not"} expired with margin of ${Jl}s`
        ),
        i)
      ) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: o } = await this._callRefreshToken(s.refresh_token);
          o &&
            (console.error(o),
            Yl(o) ||
              (this._debug(
                n,
                "refresh failed with a non-retryable error, removing the session",
                o
              ),
              await this._removeSession()));
        }
      } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: o, error: a } = await this._getUser(s.access_token);
          !a && o != null && o.user
            ? ((s.user = o.user),
              await this._saveSession(s),
              await this._notifyAllSubscribers("SIGNED_IN", s))
            : this._debug(
                n,
                "could not get user data, skipping SIGNED_IN notification"
              );
        } catch (o) {
          console.error("Error getting user data:", o),
            this._debug(
              n,
              "error getting user data, skipping SIGNED_IN notification",
              o
            );
        }
      else await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      this._debug(n, "error", s), console.error(s);
      return;
    } finally {
      this._debug(n, "end");
    }
  }
  async _callRefreshToken(t) {
    var r, n;
    if (!t) throw new rt();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const s = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      this.refreshingDeferred = new ol();
      const { data: i, error: o } = await this._refreshAccessToken(t);
      if (o) throw o;
      if (!i.session) throw new rt();
      await this._saveSession(i.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
      const a = { data: i.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (i) {
      if ((this._debug(s, "error", i), M(i))) {
        const o = { data: null, error: i };
        return (
          Yl(i) || (await this._removeSession()),
          (r = this.refreshingDeferred) === null ||
            r === void 0 ||
            r.resolve(o),
          o
        );
      }
      throw (
        ((n = this.refreshingDeferred) === null || n === void 0 || n.reject(i),
        i)
      );
    } finally {
      (this.refreshingDeferred = null), this._debug(s, "end");
    }
  }
  async _notifyAllSubscribers(t, r, n = !0) {
    const s = `#_notifyAllSubscribers(${t})`;
    this._debug(s, "begin", r, `broadcast = ${n}`);
    try {
      this.broadcastChannel &&
        n &&
        this.broadcastChannel.postMessage({ event: t, session: r });
      const i = [],
        o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
          try {
            await a.callback(t, r);
          } catch (l) {
            i.push(l);
          }
        });
      if ((await Promise.all(o), i.length > 0)) {
        for (let a = 0; a < i.length; a += 1) console.error(i[a]);
        throw i[0];
      }
    } finally {
      this._debug(s, "end");
    }
  }
  async _saveSession(t) {
    this._debug("#_saveSession()", t),
      (this.suppressGetSessionWarning = !0),
      await Pe(this.storage, `${this.storageKey}-code-verifier`);
    const r = Object.assign({}, t),
      n = r.user && r.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !n &&
        r.user &&
        (await Jn(this.userStorage, this.storageKey + "-user", {
          user: r.user,
        }));
      const s = Object.assign({}, r);
      delete s.user;
      const i = Zf(s);
      await Jn(this.storage, this.storageKey, i);
    } else {
      const s = Zf(r);
      await Jn(this.storage, this.storageKey, s);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"),
      (this.suppressGetSessionWarning = !1),
      await Pe(this.storage, this.storageKey),
      await Pe(this.storage, this.storageKey + "-code-verifier"),
      await Pe(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await Pe(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t &&
        Oe() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", t);
    } catch (r) {
      console.error("removing visibilitychange callback failed", r);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const t = setInterval(() => this._autoRefreshTokenTick(), Qn);
    (this.autoRefreshTicker = t),
      t && typeof t == "object" && typeof t.unref == "function"
        ? t.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(t);
    const r = setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
    (this.autoRefreshTickTimeout = r),
      r && typeof r == "object" && typeof r.unref == "function"
        ? r.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(r);
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const t = this.autoRefreshTicker;
    (this.autoRefreshTicker = null), t && clearInterval(t);
    const r = this.autoRefreshTickTimeout;
    (this.autoRefreshTickTimeout = null), r && clearTimeout(r);
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (r) => {
              const {
                data: { session: n },
              } = r;
              if (!n || !n.refresh_token || !n.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const s = Math.floor((n.expires_at * 1e3 - t) / Qn);
              this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${s} ticks, a tick lasts ${Qn}ms, refresh threshold is ${vc} ticks`
              ),
                s <= vc && (await this._callRefreshToken(n.refresh_token));
            });
          } catch (r) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              r
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof Ey)
        this._debug("auto refresh token tick lock not available");
      else throw t;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !Oe() || !(window != null && window.addEventListener))
    )
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      (this.visibilityChangedCallback = async () =>
        await this._onVisibilityChanged(!1)),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback
          ),
        await this._onVisibilityChanged(!0);
    } catch (t) {
      console.error("_handleVisibilityChange", t);
    }
  }
  async _onVisibilityChanged(t) {
    const r = `#_onVisibilityChanged(${t})`;
    this._debug(r, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          t ||
            (await this.initializePromise,
            await this._acquireLock(this.lockAcquireTimeout, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  r,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh();
  }
  async _getUrlForProvider(t, r, n) {
    const s = [`provider=${encodeURIComponent(r)}`];
    if (
      (n != null &&
        n.redirectTo &&
        s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),
      n != null && n.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [i, o] = await Wn(this.storage, this.storageKey),
        a = new URLSearchParams({
          code_challenge: `${encodeURIComponent(i)}`,
          code_challenge_method: `${encodeURIComponent(o)}`,
        });
      s.push(a.toString());
    }
    if (n != null && n.queryParams) {
      const i = new URLSearchParams(n.queryParams);
      s.push(i.toString());
    }
    return (
      n != null &&
        n.skipBrowserRedirect &&
        s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
      `${t}?${s.join("&")}`
    );
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        const { data: s, error: i } = r;
        return i
          ? this._returnResult({ data: null, error: i })
          : await F(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
              headers: this.headers,
              jwt:
                (n = s == null ? void 0 : s.session) === null || n === void 0
                  ? void 0
                  : n.access_token,
            });
      });
    } catch (r) {
      if (M(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n, s;
        const { data: i, error: o } = r;
        if (o) return this._returnResult({ data: null, error: o });
        const a = Object.assign(
            { friendly_name: t.friendlyName, factor_type: t.factorType },
            t.factorType === "phone"
              ? { phone: t.phone }
              : t.factorType === "totp"
              ? { issuer: t.issuer }
              : {}
          ),
          { data: l, error: u } = await F(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: a,
              headers: this.headers,
              jwt:
                (n = i == null ? void 0 : i.session) === null || n === void 0
                  ? void 0
                  : n.access_token,
            }
          );
        return u
          ? this._returnResult({ data: null, error: u })
          : (t.factorType === "totp" &&
              l.type === "totp" &&
              !((s = l == null ? void 0 : l.totp) === null || s === void 0) &&
              s.qr_code &&
              (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
            this._returnResult({ data: l, error: null }));
      });
    } catch (r) {
      if (M(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _verify(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: s, error: i } = r;
          if (i) return this._returnResult({ data: null, error: i });
          const o = Object.assign(
              { challenge_id: t.challengeId },
              "webauthn" in t
                ? {
                    webauthn: Object.assign(Object.assign({}, t.webauthn), {
                      credential_response:
                        t.webauthn.type === "create"
                          ? MT(t.webauthn.credential_response)
                          : UT(t.webauthn.credential_response),
                    }),
                  }
                : { code: t.code }
            ),
            { data: a, error: l } = await F(
              this.fetch,
              "POST",
              `${this.url}/factors/${t.factorId}/verify`,
              {
                body: o,
                headers: this.headers,
                jwt:
                  (n = s == null ? void 0 : s.session) === null || n === void 0
                    ? void 0
                    : n.access_token,
              }
            );
          return l
            ? this._returnResult({ data: null, error: l })
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + a.expires_in },
                  a
                )
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a),
              this._returnResult({ data: a, error: l }));
        });
      } catch (r) {
        if (M(r)) return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: s, error: i } = r;
          if (i) return this._returnResult({ data: null, error: i });
          const o = await F(
            this.fetch,
            "POST",
            `${this.url}/factors/${t.factorId}/challenge`,
            {
              body: t,
              headers: this.headers,
              jwt:
                (n = s == null ? void 0 : s.session) === null || n === void 0
                  ? void 0
                  : n.access_token,
            }
          );
          if (o.error) return o;
          const { data: a } = o;
          if (a.type !== "webauthn") return { data: a, error: null };
          switch (a.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, a.webauthn.credential_options),
                      { publicKey: LT(a.webauthn.credential_options.publicKey) }
                    ),
                  }),
                }),
                error: null,
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, a.webauthn.credential_options),
                      { publicKey: DT(a.webauthn.credential_options.publicKey) }
                    ),
                  }),
                }),
                error: null,
              };
          }
        });
      } catch (r) {
        if (M(r)) return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challengeAndVerify(t) {
    const { data: r, error: n } = await this._challenge({
      factorId: t.factorId,
    });
    return n
      ? this._returnResult({ data: null, error: n })
      : await this._verify({
          factorId: t.factorId,
          challengeId: r.id,
          code: t.code,
        });
  }
  async _listFactors() {
    var t;
    const {
      data: { user: r },
      error: n,
    } = await this.getUser();
    if (n) return { data: null, error: n };
    const s = { all: [], phone: [], totp: [], webauthn: [] };
    for (const i of (t = r == null ? void 0 : r.factors) !== null &&
    t !== void 0
      ? t
      : [])
      s.all.push(i), i.status === "verified" && s[i.factor_type].push(i);
    return { data: s, error: null };
  }
  async _getAuthenticatorAssuranceLevel() {
    var t, r;
    const {
      data: { session: n },
      error: s,
    } = await this.getSession();
    if (s) return this._returnResult({ data: null, error: s });
    if (!n)
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: [],
        },
        error: null,
      };
    const { payload: i } = Xl(n.access_token);
    let o = null;
    i.aal && (o = i.aal);
    let a = o;
    ((r =
      (t = n.user.factors) === null || t === void 0
        ? void 0
        : t.filter((c) => c.status === "verified")) !== null && r !== void 0
      ? r
      : []
    ).length > 0 && (a = "aal2");
    const u = i.amr || [];
    return {
      data: { currentLevel: o, nextLevel: a, currentAuthenticationMethods: u },
      error: null,
    };
  }
  async _getAuthorizationDetails(t) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: n },
          error: s,
        } = r;
        return s
          ? this._returnResult({ data: null, error: s })
          : n
          ? await F(
              this.fetch,
              "GET",
              `${this.url}/oauth/authorizations/${t}`,
              {
                headers: this.headers,
                jwt: n.access_token,
                xform: (i) => ({ data: i, error: null }),
              }
            )
          : this._returnResult({ data: null, error: new rt() });
      });
    } catch (r) {
      if (M(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _approveAuthorization(t, r) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: s },
          error: i,
        } = n;
        if (i) return this._returnResult({ data: null, error: i });
        if (!s) return this._returnResult({ data: null, error: new rt() });
        const o = await F(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${t}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "approve" },
            xform: (a) => ({ data: a, error: null }),
          }
        );
        return (
          o.data &&
            o.data.redirect_url &&
            Oe() &&
            !(r != null && r.skipBrowserRedirect) &&
            window.location.assign(o.data.redirect_url),
          o
        );
      });
    } catch (n) {
      if (M(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _denyAuthorization(t, r) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: s },
          error: i,
        } = n;
        if (i) return this._returnResult({ data: null, error: i });
        if (!s) return this._returnResult({ data: null, error: new rt() });
        const o = await F(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${t}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "deny" },
            xform: (a) => ({ data: a, error: null }),
          }
        );
        return (
          o.data &&
            o.data.redirect_url &&
            Oe() &&
            !(r != null && r.skipBrowserRedirect) &&
            window.location.assign(o.data.redirect_url),
          o
        );
      });
    } catch (n) {
      if (M(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: r },
          error: n,
        } = t;
        return n
          ? this._returnResult({ data: null, error: n })
          : r
          ? await F(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
              headers: this.headers,
              jwt: r.access_token,
              xform: (s) => ({ data: s, error: null }),
            })
          : this._returnResult({ data: null, error: new rt() });
      });
    } catch (t) {
      if (M(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _revokeOAuthGrant(t) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: n },
          error: s,
        } = r;
        return s
          ? this._returnResult({ data: null, error: s })
          : n
          ? (await F(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
              headers: this.headers,
              jwt: n.access_token,
              query: { client_id: t.clientId },
              noResolveJson: !0,
            }),
            { data: {}, error: null })
          : this._returnResult({ data: null, error: new rt() });
      });
    } catch (r) {
      if (M(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async fetchJwk(t, r = { keys: [] }) {
    let n = r.keys.find((a) => a.kid === t);
    if (n) return n;
    const s = Date.now();
    if (
      ((n = this.jwks.keys.find((a) => a.kid === t)),
      n && this.jwks_cached_at + qk > s)
    )
      return n;
    const { data: i, error: o } = await F(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers }
    );
    if (o) throw o;
    return !i.keys ||
      i.keys.length === 0 ||
      ((this.jwks = i),
      (this.jwks_cached_at = s),
      (n = i.keys.find((a) => a.kid === t)),
      !n)
      ? null
      : n;
  }
  async getClaims(t, r = {}) {
    try {
      let n = t;
      if (!n) {
        const { data: d, error: y } = await this.getSession();
        if (y || !d.session)
          return this._returnResult({ data: null, error: y });
        n = d.session.access_token;
      }
      const {
        header: s,
        payload: i,
        signature: o,
        raw: { header: a, payload: l },
      } = Xl(n);
      (r != null && r.allowExpired) || mT(i.exp);
      const u =
        !s.alg ||
        s.alg.startsWith("HS") ||
        !s.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(
              s.kid,
              r != null && r.keys
                ? { keys: r.keys }
                : r == null
                ? void 0
                : r.jwks
            );
      if (!u) {
        const { error: d } = await this.getUser(n);
        if (d) throw d;
        return { data: { claims: i, header: s, signature: o }, error: null };
      }
      const c = gT(s.alg),
        h = await crypto.subtle.importKey("jwk", u, c, !0, ["verify"]);
      if (!(await crypto.subtle.verify(c, h, o, rT(`${a}.${l}`))))
        throw new xc("Invalid JWT signature");
      return { data: { claims: i, header: s, signature: o }, error: null };
    } catch (n) {
      if (M(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
}
Vi.nextInstanceID = {};
const GT = Vi,
  QT = "2.90.1";
let ii = "";
typeof Deno < "u"
  ? (ii = "deno")
  : typeof document < "u"
  ? (ii = "web")
  : typeof navigator < "u" && navigator.product === "ReactNative"
  ? (ii = "react-native")
  : (ii = "node");
const JT = { "X-Client-Info": `supabase-js-${ii}/${QT}` },
  YT = { headers: JT },
  XT = { schema: "public" },
  ZT = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  eC = {};
function Wi(e) {
  "@babel/helpers - typeof";
  return (
    (Wi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wi(e)
  );
}
function tC(e, t) {
  if (Wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rC(e) {
  var t = tC(e, "string");
  return Wi(t) == "symbol" ? t : t + "";
}
function nC(e, t, r) {
  return (
    (t = rC(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function op(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? op(Object(r), !0).forEach(function (n) {
          nC(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : op(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
const sC = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  iC = () => Headers,
  oC = (e, t, r) => {
    const n = sC(r),
      s = iC();
    return async (i, o) => {
      var a;
      const l = (a = await t()) !== null && a !== void 0 ? a : e;
      let u = new s(o == null ? void 0 : o.headers);
      return (
        u.has("apikey") || u.set("apikey", e),
        u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
        n(i, ve(ve({}, o), {}, { headers: u }))
      );
    };
  };
function aC(e) {
  return e.endsWith("/") ? e : e + "/";
}
function lC(e, t) {
  var r, n;
  const { db: s, auth: i, realtime: o, global: a } = e,
    { db: l, auth: u, realtime: c, global: h } = t,
    f = {
      db: ve(ve({}, l), s),
      auth: ve(ve({}, u), i),
      realtime: ve(ve({}, c), o),
      storage: {},
      global: ve(
        ve(ve({}, h), a),
        {},
        {
          headers: ve(
            ve(
              {},
              (r = h == null ? void 0 : h.headers) !== null && r !== void 0
                ? r
                : {}
            ),
            (n = a == null ? void 0 : a.headers) !== null && n !== void 0
              ? n
              : {}
          ),
        }
      ),
      accessToken: async () => "",
    };
  return (
    e.accessToken ? (f.accessToken = e.accessToken) : delete f.accessToken, f
  );
}
function uC(e) {
  const t = e == null ? void 0 : e.trim();
  if (!t) throw new Error("supabaseUrl is required.");
  if (!t.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(aC(t));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var cC = class extends GT {
    constructor(e) {
      super(e);
    }
  },
  dC = class {
    constructor(e, t, r) {
      var n, s;
      (this.supabaseUrl = e), (this.supabaseKey = t);
      const i = uC(e);
      if (!t) throw new Error("supabaseKey is required.");
      (this.realtimeUrl = new URL("realtime/v1", i)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          "http",
          "ws"
        )),
        (this.authUrl = new URL("auth/v1", i)),
        (this.storageUrl = new URL("storage/v1", i)),
        (this.functionsUrl = new URL("functions/v1", i));
      const o = `sb-${i.hostname.split(".")[0]}-auth-token`,
        a = {
          db: XT,
          realtime: eC,
          auth: ve(ve({}, ZT), {}, { storageKey: o }),
          global: YT,
        },
        l = lC(r ?? {}, a);
      if (
        ((this.storageKey =
          (n = l.auth.storageKey) !== null && n !== void 0 ? n : ""),
        (this.headers =
          (s = l.global.headers) !== null && s !== void 0 ? s : {}),
        l.accessToken)
      )
        (this.accessToken = l.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (c, h) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(
                    h
                  )} is not possible`
                );
              },
            }
          ));
      else {
        var u;
        this.auth = this._initSupabaseAuthClient(
          (u = l.auth) !== null && u !== void 0 ? u : {},
          this.headers,
          l.global.fetch
        );
      }
      (this.fetch = oC(t, this._getAccessToken.bind(this), l.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          ve(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
            },
            l.realtime
          )
        )),
        this.accessToken &&
          this.accessToken()
            .then((c) => this.realtime.setAuth(c))
            .catch((c) =>
              console.warn("Failed to set initial Realtime auth token:", c)
            ),
        (this.rest = new WE(new URL("rest/v1", i).href, {
          headers: this.headers,
          schema: l.db.schema,
          fetch: this.fetch,
        })),
        (this.storage = new zk(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          r == null ? void 0 : r.storage
        )),
        l.accessToken || this._listenForAuthEvents();
    }
    get functions() {
      return new UE(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    from(e) {
      return this.rest.from(e);
    }
    schema(e) {
      return this.rest.schema(e);
    }
    rpc(e, t = {}, r = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(e, t, r);
    }
    channel(e, t = { config: {} }) {
      return this.realtime.channel(e, t);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(e) {
      return this.realtime.removeChannel(e);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var e = this,
        t,
        r;
      if (e.accessToken) return await e.accessToken();
      const { data: n } = await e.auth.getSession();
      return (t =
        (r = n.session) === null || r === void 0 ? void 0 : r.access_token) !==
        null && t !== void 0
        ? t
        : e.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: r,
        storage: n,
        userStorage: s,
        storageKey: i,
        flowType: o,
        lock: a,
        debug: l,
        throwOnError: u,
      },
      c,
      h
    ) {
      const f = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new cC({
        url: this.authUrl.href,
        headers: ve(ve({}, f), c),
        storageKey: i,
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: r,
        storage: n,
        userStorage: s,
        flowType: o,
        lock: a,
        debug: l,
        throwOnError: u,
        fetch: h,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (d) => d.toLowerCase() === "authorization"
        ),
      });
    }
    _initRealtimeClient(e) {
      return new ak(
        this.realtimeUrl.href,
        ve(
          ve({}, e),
          {},
          {
            params: ve(
              ve({}, { apikey: this.supabaseKey }),
              e == null ? void 0 : e.params
            ),
          }
        )
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((e, t) => {
        this._handleTokenChanged(
          e,
          "CLIENT",
          t == null ? void 0 : t.access_token
        );
      });
    }
    _handleTokenChanged(e, t, r) {
      (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") &&
      this.changedAccessToken !== r
        ? ((this.changedAccessToken = r), this.realtime.setAuth(r))
        : e === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          t == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  };
const hC = (e, t, r) => new dC(e, t, r);
function fC() {
  if (typeof window < "u") return !1;
  const e = globalThis.process;
  if (!e) return !1;
  const t = e.version;
  if (t == null) return !1;
  const r = t.match(/^v(\d+)\./);
  return r ? parseInt(r[1], 10) <= 18 : !1;
}
fC() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217"
  );
const pC = "https://dfejfnkvypxpkqypjbpk.supabase.co",
  mC =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmZWpmbmt2eXB4cGtxeXBqYnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5MDU5NTAsImV4cCI6MjA4MzQ4MTk1MH0.0B1psI8XOcXo30XltG9iPvccsjkJOrKwvV-h-eUXqm4",
  gC = hC(pC, mC, {
    auth: { storage: localStorage, persistSession: !0, autoRefreshToken: !0 },
  }),
  vC = () => {
    const [e, t] = x.useState(""),
      [r, n] = x.useState(""),
      [s, i] = x.useState(!1),
      [o, a] = x.useState(null),
      l = x.useRef(null),
      u = async () => {
        if (l.current) return l.current;
        const d = await fetch("/ovary-face.png", { cache: "force-cache" });
        if (!d.ok) throw new Error("Failed to load head image");
        const y = await d.blob(),
          p = await new Promise((w, g) => {
            const m = new FileReader();
            (m.onload = () => w(String(m.result))),
              (m.onerror = () => g(new Error("Failed to read head image"))),
              m.readAsDataURL(y);
          });
        return (l.current = p), p;
      },
      c = async () => {
        if (!e.trim()) {
          Bl.error("Please enter a scenario!");
          return;
        }
        i(!0), a(null);
        try {
          const d = await u(),
            { data: y, error: p } = await gC.functions.invoke("generate-meme", {
              body: { scenario: e, caption: r, headDataUrl: d },
            });
          if (p) throw new Error(p.message);
          if (y.error) throw new Error(y.error);
          y.imageUrl && (a(y.imageUrl), Bl.success("Meme generated!"));
        } catch (d) {
          console.error("Error generating meme:", d),
            Bl.error(
              d instanceof Error ? d.message : "Failed to generate meme"
            );
        } finally {
          i(!1);
        }
      },
      h = () => {
        const d = [
            "Ovary character driving a pink Lamborghini to the moon",
            "Ovary character at the beach wearing sunglasses flexing",
            "Ovary character on the moon planting a flag that says OVARY",
            "Ovary character winning a boxing match against a testicle",
            "Ovary character sitting on a throne made of money",
            "Ovary character doing a victory dance at a party",
          ],
          y = [
            "TO THE MOON",
            "FEELING FERTILE TODAY",
            "EGG-CELLENT GAINS",
            "OVARY-ACHIEVER",
            "PUMP IT",
            "WAGMI",
          ];
        t(d[Math.floor(Math.random() * d.length)]),
          n(y[Math.floor(Math.random() * y.length)]);
      },
      f = () => {
        if (!o) return;
        const d = document.createElement("a");
        (d.href = o), (d.download = "ovary-meme.png"), d.click();
      };
    return b.jsx("section", {
      id: "meme-lab",
      className: "py-24 relative",
      children: b.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          b.jsxs("div", {
            className: "text-center mb-12",
            children: [
              b.jsx("div", {
                className: "text-foreground text-4xl mb-4",
                children: "🧬",
              }),
              b.jsx("h2", {
                className:
                  "font-marker text-5xl md:text-7xl text-foreground text-glow-strong mb-4 italic -skew-x-6",
                children: "MEME-LAB",
              }),
              b.jsx("p", {
                className: "font-marker text-muted-foreground text-lg",
                children: "AI-POWERED MEME GENERATOR",
              }),
            ],
          }),
          b.jsx("div", {
            className: "max-w-4xl mx-auto card-styled p-8",
            children: b.jsxs("div", {
              className: "grid md:grid-cols-2 gap-8",
              children: [
                b.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    b.jsxs("div", {
                      children: [
                        b.jsx("label", {
                          className:
                            "font-marker text-foreground text-lg mb-2 block",
                          children: "SCENARIO",
                        }),
                        b.jsx("textarea", {
                          value: e,
                          onChange: (d) => t(d.target.value),
                          placeholder: "Ovary character in a pink Ferrari...",
                          className: "input-styled w-full h-32 resize-none",
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      children: [
                        b.jsx("label", {
                          className:
                            "font-marker text-foreground text-lg mb-2 block",
                          children: "CAPTION",
                        }),
                        b.jsx("input", {
                          type: "text",
                          value: r,
                          onChange: (d) => n(d.target.value),
                          placeholder: "TO THE MOON",
                          className: "input-styled w-full",
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      className: "flex gap-4",
                      children: [
                        b.jsxs("button", {
                          onClick: c,
                          disabled: s,
                          className:
                            "btn-primary flex items-center gap-2 flex-1 disabled:opacity-50",
                          children: [
                            b.jsx(__, { className: "w-5 h-5" }),
                            s ? "GENERATING..." : "GENERATE",
                          ],
                        }),
                        b.jsxs("button", {
                          onClick: h,
                          disabled: s,
                          className: "btn-outline flex items-center gap-2",
                          children: [
                            b.jsx(p_, { className: "w-5 h-5" }),
                            "RANDOM",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                b.jsx("div", {
                  className:
                    "border-2 border-primary/30 rounded-xl flex items-center justify-center min-h-64 bg-background/50 relative overflow-hidden",
                  children: s
                    ? b.jsxs("div", {
                        className: "text-center text-muted-foreground",
                        children: [
                          b.jsx("div", {
                            className:
                              "w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4",
                          }),
                          b.jsx("p", {
                            className: "font-marker",
                            children: "GENERATING MEME...",
                          }),
                        ],
                      })
                    : o
                    ? b.jsxs("div", {
                        className: "relative w-full h-full",
                        children: [
                          b.jsx("img", {
                            src: o,
                            alt: "Generated Meme",
                            className: "w-full h-full object-contain p-2",
                          }),
                          b.jsx("button", {
                            onClick: f,
                            className:
                              "absolute bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-lg hover:scale-105 transition-transform",
                            children: b.jsx(ov, { className: "w-5 h-5" }),
                          }),
                        ],
                      })
                    : b.jsx("img", {
                        src: nl,
                        alt: "Ovary Character",
                        className: "w-32 h-32 opacity-80",
                      }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  yC = [2, 4, 8, 12, 20],
  wC = () => {
    const e = x.useRef(null),
      [t, r] = x.useState(!1),
      [n, s] = x.useState("pen"),
      [i, o] = x.useState(4),
      [a, l] = x.useState({ x: 0, y: 0 });
    x.useEffect(() => {
      const p = e.current;
      if (!p) return;
      const w = p.getContext("2d");
      w && ((w.fillStyle = "#0a0a0a"), w.fillRect(0, 0, p.width, p.height));
    }, []);
    const u = (p) => {
        const w = e.current;
        if (!w) return { x: 0, y: 0 };
        const g = w.getBoundingClientRect(),
          m = w.width / g.width,
          v = w.height / g.height;
        return "touches" in p
          ? {
              x: (p.touches[0].clientX - g.left) * m,
              y: (p.touches[0].clientY - g.top) * v,
            }
          : { x: (p.clientX - g.left) * m, y: (p.clientY - g.top) * v };
      },
      c = (p) => {
        r(!0), l(u(p));
      },
      h = (p) => {
        if (!t) return;
        const w = e.current,
          g = w == null ? void 0 : w.getContext("2d");
        if (!g || !w) return;
        const m = u(p);
        g.beginPath(),
          g.moveTo(a.x, a.y),
          g.lineTo(m.x, m.y),
          (g.strokeStyle = n === "pen" ? "#ff4d94" : "#0a0a0a"),
          (g.lineWidth = n === "pen" ? i : i * 3),
          (g.lineCap = "round"),
          g.stroke(),
          l(m);
      },
      f = () => {
        r(!1);
      },
      d = () => {
        const p = e.current,
          w = p == null ? void 0 : p.getContext("2d");
        !w ||
          !p ||
          ((w.fillStyle = "#0a0a0a"), w.fillRect(0, 0, p.width, p.height));
      },
      y = () => {
        const p = e.current;
        if (!p) return;
        const w = document.createElement("a");
        (w.download = "ovary-art.png"), (w.href = p.toDataURL()), w.click();
      };
    return b.jsx("section", {
      id: "draw",
      className: "py-24 relative",
      children: b.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          b.jsxs("div", {
            className: "text-center mb-12",
            children: [
              b.jsx("h2", {
                className:
                  "font-marker text-5xl md:text-7xl text-foreground text-glow-strong mb-4 italic -skew-x-6",
                children: "DRAW SOMETHING CRUDE",
              }),
              b.jsx("p", {
                className: "font-marker text-muted-foreground text-lg",
                children: "THE $OVARY WAY",
              }),
            ],
          }),
          b.jsxs("div", {
            className: "max-w-3xl mx-auto card-styled p-6",
            children: [
              b.jsxs("div", {
                className: "flex flex-wrap justify-center gap-3 mb-4",
                children: [
                  b.jsx("button", {
                    onClick: () => s("pen"),
                    className: `p-4 rounded-lg transition-all ${
                      n === "pen"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    }`,
                    children: b.jsx(m_, { className: "w-6 h-6" }),
                  }),
                  b.jsx("button", {
                    onClick: () => s("eraser"),
                    className: `p-4 rounded-lg transition-all ${
                      n === "eraser"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    }`,
                    children: b.jsx(f_, { className: "w-6 h-6" }),
                  }),
                  b.jsx("button", {
                    onClick: d,
                    className:
                      "p-4 rounded-lg bg-destructive text-destructive-foreground",
                    children: b.jsx(v_, { className: "w-6 h-6" }),
                  }),
                  b.jsx("button", {
                    onClick: y,
                    className: "p-4 rounded-lg bg-green-600 text-white",
                    children: b.jsx(ov, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              b.jsxs("div", {
                className: "flex justify-center items-center gap-3 mb-4",
                children: [
                  b.jsx("span", {
                    className: "font-marker text-muted-foreground text-sm",
                    children: "THICKNESS:",
                  }),
                  b.jsx("div", {
                    className: "flex gap-2",
                    children: yC.map((p) =>
                      b.jsx(
                        "button",
                        {
                          onClick: () => o(p),
                          className: `w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                            i === p
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-foreground"
                          }`,
                          children: b.jsx("div", {
                            className: "rounded-full bg-current",
                            style: { width: p + 4, height: p + 4 },
                          }),
                        },
                        p
                      )
                    ),
                  }),
                ],
              }),
              b.jsx("div", {
                className:
                  "border-2 border-primary/50 rounded-xl overflow-hidden",
                children: b.jsx("canvas", {
                  ref: e,
                  width: 800,
                  height: 500,
                  className: "w-full cursor-crosshair touch-none",
                  onMouseDown: c,
                  onMouseMove: h,
                  onMouseUp: f,
                  onMouseLeave: f,
                  onTouchStart: c,
                  onTouchMove: h,
                  onTouchEnd: f,
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  xC = [
    {
      icon: w_,
      title: "WALLET",
      description: "Get Phantom. It's safe and pink (mostly).",
    },
    {
      icon: d_,
      title: "ETH",
      description: "Load up on ETH. Transfers are instant.",
    },
    {
      icon: g_,
      title: "UNISWAP",
      description: "Paste the CA on Uniswap search bar.",
    },
    {
      icon: av,
      title: "SWAP",
      description: "Swap ETH for $OVARY. Feel the power.",
    },
  ],
  _C = () =>
    b.jsx("section", {
      id: "how-to-buy",
      className: "py-24 relative",
      children: b.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          b.jsx("h2", {
            className:
              "font-marker text-5xl md:text-7xl text-foreground text-glow-strong text-center mb-12 italic -skew-x-6",
            children: "INSTRUCTIONS",
          }),
          b.jsx("div", {
            className: "grid md:grid-cols-2 gap-6 max-w-4xl mx-auto",
            children: xC.map((e, t) =>
              b.jsxs(
                "div",
                {
                  className: "card-styled p-8",
                  children: [
                    b.jsx("div", {
                      className: "bg-primary p-3 rounded-lg inline-block mb-4",
                      children: b.jsx(e.icon, {
                        className: "w-6 h-6 text-primary-foreground",
                      }),
                    }),
                    b.jsx("h3", {
                      className:
                        "font-marker text-2xl text-foreground mb-2 italic -skew-x-6",
                      children: e.title,
                    }),
                    b.jsx("p", {
                      className: "font-marker text-muted-foreground",
                      children: e.description,
                    }),
                  ],
                },
                t
              )
            ),
          }),
        ],
      }),
    }),
  bC = () =>
    b.jsx("section", {
      id: "chart",
      className: "py-24 relative",
      children: b.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          b.jsx("h2", {
            className:
              "font-marker text-5xl md:text-7xl text-foreground text-glow-strong text-center mb-12 italic -skew-x-6",
            children: "LIVE CHART",
          }),
          b.jsx("div", {
            className: "max-w-5xl mx-auto",
            children: b.jsx("div", {
              className: "card-styled overflow-hidden",
              children: b.jsx("div", {
                className: "aspect-[16/9] w-full",
                children: b.jsx("iframe", {
                  src: "https://dexscreener.com/ethereum/0x8103548c5691cea4b59410a4893b2294af8bd5a7?embed=1&theme=dark",
                  className: "w-full h-full border-0",
                  title: "DexScreener Chart",
                  allow: "clipboard-write",
                }),
              }),
            }),
          }),
        ],
      }),
    }),
  SC = () =>
    b.jsx("footer", {
      className: "py-16 border-t border-border",
      children: b.jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [
          b.jsx("img", {
            src: nl,
            alt: "Ovary",
            className: "w-20 h-20 mx-auto mb-8 opacity-80",
          }),
          b.jsxs("div", {
            className: "flex justify-center gap-6 mb-8",
            children: [
              b.jsx("a", {
                className:
                  "text-foreground hover:text-primary transition-colors",
                children: b.jsx(y_, { className: "w-8 h-8" }),
                href: "https://x.com/Ovary_coin",
              }),
              b.jsx("button", {
                className:
                  "text-foreground hover:text-primary transition-colors",
                children: b.jsx(av, { className: "w-8 h-8" }),
                href: "https://t.me/Ovary_coin",
              }),
            ],
          }),
          b.jsx("p", {
            className: "font-marker text-muted-foreground text-sm",
            children: "© 2026 $OVARY. DYOR. NO FINANCIAL ADVICE.",
          }),
        ],
      }),
    }),
  EC = () =>
    b.jsxs("div", {
      className: "min-h-screen bg-background overflow-x-hidden",
      children: [
        b.jsx(NE, {}),
        b.jsx(jE, {}),
        b.jsxs("main", {
          className: "relative z-10",
          children: [
            b.jsx(IE, {}),
            b.jsx($E, {}),
            b.jsx(vC, {}),
            b.jsx(wC, {}),
            b.jsx(_C, {}),
            b.jsx(bC, {}),
          ],
        }),
        b.jsx(SC, {}),
      ],
    }),
  kC = () => {
    const e = uy();
    return (
      x.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      b.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: b.jsxs("div", {
          className: "text-center",
          children: [
            b.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            b.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            b.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  TC = new WS(),
  CC = () =>
    b.jsx(qS, {
      client: TC,
      children: b.jsxs(xS, {
        children: [
          b.jsx(nb, {}),
          b.jsx($b, {}),
          b.jsx(AE, {
            children: b.jsxs(RE, {
              children: [
                b.jsx(lc, { path: "/", element: b.jsx(EC, {}) }),
                b.jsx(lc, { path: "*", element: b.jsx(kC, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
Og(document.getElementById("root")).render(b.jsx(CC, {}));
