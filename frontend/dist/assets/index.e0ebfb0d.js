function Rx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const r in i)
        if (r !== "default" && !(r in e)) {
          const s = Object.getOwnPropertyDescriptor(i, r);
          s &&
            Object.defineProperty(
              e,
              r,
              s.get ? s : { enumerable: !0, get: () => i[r] }
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
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && i(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
var zx =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Ax(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var A = { exports: {} },
  ft = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ns = Symbol.for("react.element"),
  Ix = Symbol.for("react.portal"),
  Nx = Symbol.for("react.fragment"),
  Bx = Symbol.for("react.strict_mode"),
  Fx = Symbol.for("react.profiler"),
  jx = Symbol.for("react.provider"),
  Wx = Symbol.for("react.context"),
  Hx = Symbol.for("react.forward_ref"),
  Vx = Symbol.for("react.suspense"),
  Zx = Symbol.for("react.memo"),
  Ux = Symbol.for("react.lazy"),
  lp = Symbol.iterator;
function $x(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lp && e[lp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ug = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  $g = Object.assign,
  Yg = {};
function uo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yg),
    (this.updater = n || Ug);
}
uo.prototype.isReactComponent = {};
uo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
uo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Kg() {}
Kg.prototype = uo.prototype;
function Wh(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yg),
    (this.updater = n || Ug);
}
var Hh = (Wh.prototype = new Kg());
Hh.constructor = Wh;
$g(Hh, uo.prototype);
Hh.isPureReactComponent = !0;
var up = Array.isArray,
  Xg = Object.prototype.hasOwnProperty,
  Vh = { current: null },
  Gg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qg(e, t, n) {
  var i,
    r = {},
    s = null,
    a = null;
  if (t != null)
    for (i in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Xg.call(t, i) && !Gg.hasOwnProperty(i) && (r[i] = t[i]);
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    for (var c = Array(u), d = 0; d < u; d++) c[d] = arguments[d + 2];
    r.children = c;
  }
  if (e && e.defaultProps)
    for (i in ((u = e.defaultProps), u)) r[i] === void 0 && (r[i] = u[i]);
  return {
    $$typeof: Ns,
    type: e,
    key: s,
    ref: a,
    props: r,
    _owner: Vh.current,
  };
}
function Yx(e, t) {
  return {
    $$typeof: Ns,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Zh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ns;
}
function Kx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cp = /\/+/g;
function $u(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Kx("" + e.key)
    : t.toString(36);
}
function Ga(e, t, n, i, r) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ns:
          case Ix:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (r = r(a)),
      (e = i === "" ? "." + $u(a, 0) : i),
      up(r)
        ? ((n = ""),
          e != null && (n = e.replace(cp, "$&/") + "/"),
          Ga(r, t, n, "", function (d) {
            return d;
          }))
        : r != null &&
          (Zh(r) &&
            (r = Yx(
              r,
              n +
                (!r.key || (a && a.key === r.key)
                  ? ""
                  : ("" + r.key).replace(cp, "$&/") + "/") +
                e
            )),
          t.push(r)),
      1
    );
  if (((a = 0), (i = i === "" ? "." : i + ":"), up(e)))
    for (var u = 0; u < e.length; u++) {
      s = e[u];
      var c = i + $u(s, u);
      a += Ga(s, t, n, c, r);
    }
  else if (((c = $x(e)), typeof c == "function"))
    for (e = c.call(e), u = 0; !(s = e.next()).done; )
      (s = s.value), (c = i + $u(s, u++)), (a += Ga(s, t, n, c, r));
  else if (s === "object")
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
  return a;
}
function wa(e, t, n) {
  if (e == null) return e;
  var i = [],
    r = 0;
  return (
    Ga(e, i, "", "", function (s) {
      return t.call(n, s, r++);
    }),
    i
  );
}
function Xx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ke = { current: null },
  Qa = { transition: null },
  Gx = {
    ReactCurrentDispatcher: ke,
    ReactCurrentBatchConfig: Qa,
    ReactCurrentOwner: Vh,
  };
ft.Children = {
  map: wa,
  forEach: function (e, t, n) {
    wa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Zh(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ft.Component = uo;
ft.Fragment = Nx;
ft.Profiler = Fx;
ft.PureComponent = Wh;
ft.StrictMode = Bx;
ft.Suspense = Vx;
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gx;
ft.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var i = $g({}, e.props),
    r = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = Vh.current)),
      t.key !== void 0 && (r = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (c in t)
      Xg.call(t, c) &&
        !Gg.hasOwnProperty(c) &&
        (i[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) i.children = n;
  else if (1 < c) {
    u = Array(c);
    for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
    i.children = u;
  }
  return { $$typeof: Ns, type: e.type, key: r, ref: s, props: i, _owner: a };
};
ft.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: jx, _context: e }),
    (e.Consumer = e)
  );
};
ft.createElement = Qg;
ft.createFactory = function (e) {
  var t = Qg.bind(null, e);
  return (t.type = e), t;
};
ft.createRef = function () {
  return { current: null };
};
ft.forwardRef = function (e) {
  return { $$typeof: Hx, render: e };
};
ft.isValidElement = Zh;
ft.lazy = function (e) {
  return { $$typeof: Ux, _payload: { _status: -1, _result: e }, _init: Xx };
};
ft.memo = function (e, t) {
  return { $$typeof: Zx, type: e, compare: t === void 0 ? null : t };
};
ft.startTransition = function (e) {
  var t = Qa.transition;
  Qa.transition = {};
  try {
    e();
  } finally {
    Qa.transition = t;
  }
};
ft.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ft.useCallback = function (e, t) {
  return ke.current.useCallback(e, t);
};
ft.useContext = function (e) {
  return ke.current.useContext(e);
};
ft.useDebugValue = function () {};
ft.useDeferredValue = function (e) {
  return ke.current.useDeferredValue(e);
};
ft.useEffect = function (e, t) {
  return ke.current.useEffect(e, t);
};
ft.useId = function () {
  return ke.current.useId();
};
ft.useImperativeHandle = function (e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
ft.useInsertionEffect = function (e, t) {
  return ke.current.useInsertionEffect(e, t);
};
ft.useLayoutEffect = function (e, t) {
  return ke.current.useLayoutEffect(e, t);
};
ft.useMemo = function (e, t) {
  return ke.current.useMemo(e, t);
};
ft.useReducer = function (e, t, n) {
  return ke.current.useReducer(e, t, n);
};
ft.useRef = function (e) {
  return ke.current.useRef(e);
};
ft.useState = function (e) {
  return ke.current.useState(e);
};
ft.useSyncExternalStore = function (e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
ft.useTransition = function () {
  return ke.current.useTransition();
};
ft.version = "18.2.0";
(function (e) {
  e.exports = ft;
})(A);
const qg = Ax(A.exports),
  Ac = Rx({ __proto__: null, default: qg }, [A.exports]);
var Ic = {},
  Uh = { exports: {} },
  Be = {},
  Jg = { exports: {} },
  t_ = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, J) {
    var W = z.length;
    z.push(J);
    t: for (; 0 < W; ) {
      var Q = (W - 1) >>> 1,
        ot = z[Q];
      if (0 < r(ot, J)) (z[Q] = J), (z[W] = ot), (W = Q);
      else break t;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function i(z) {
    if (z.length === 0) return null;
    var J = z[0],
      W = z.pop();
    if (W !== J) {
      z[0] = W;
      t: for (var Q = 0, ot = z.length, Ot = ot >>> 1; Q < Ot; ) {
        var wt = 2 * (Q + 1) - 1,
          at = z[wt],
          lt = wt + 1,
          oe = z[lt];
        if (0 > r(at, W))
          lt < ot && 0 > r(oe, at)
            ? ((z[Q] = oe), (z[lt] = W), (Q = lt))
            : ((z[Q] = at), (z[wt] = W), (Q = wt));
        else if (lt < ot && 0 > r(oe, W)) (z[Q] = oe), (z[lt] = W), (Q = lt);
        else break t;
      }
    }
    return J;
  }
  function r(z, J) {
    var W = z.sortIndex - J.sortIndex;
    return W !== 0 ? W : z.id - J.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      u = a.now();
    e.unstable_now = function () {
      return a.now() - u;
    };
  }
  var c = [],
    d = [],
    p = 1,
    g = null,
    m = 3,
    v = !1,
    y = !1,
    S = !1,
    M = typeof setTimeout == "function" ? setTimeout : null,
    w = typeof clearTimeout == "function" ? clearTimeout : null,
    b = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function P(z) {
    for (var J = n(d); J !== null; ) {
      if (J.callback === null) i(d);
      else if (J.startTime <= z)
        i(d), (J.sortIndex = J.expirationTime), t(c, J);
      else break;
      J = n(d);
    }
  }
  function C(z) {
    if (((S = !1), P(z), !y))
      if (n(c) !== null) (y = !0), ut(E);
      else {
        var J = n(d);
        J !== null && _t(C, J.startTime - z);
      }
  }
  function E(z, J) {
    (y = !1), S && ((S = !1), w(N), (N = -1)), (v = !0);
    var W = m;
    try {
      for (
        P(J), g = n(c);
        g !== null && (!(g.expirationTime > J) || (z && !K()));

      ) {
        var Q = g.callback;
        if (typeof Q == "function") {
          (g.callback = null), (m = g.priorityLevel);
          var ot = Q(g.expirationTime <= J);
          (J = e.unstable_now()),
            typeof ot == "function" ? (g.callback = ot) : g === n(c) && i(c),
            P(J);
        } else i(c);
        g = n(c);
      }
      if (g !== null) var Ot = !0;
      else {
        var wt = n(d);
        wt !== null && _t(C, wt.startTime - J), (Ot = !1);
      }
      return Ot;
    } finally {
      (g = null), (m = W), (v = !1);
    }
  }
  var R = !1,
    D = null,
    N = -1,
    V = 5,
    Z = -1;
  function K() {
    return !(e.unstable_now() - Z < V);
  }
  function X() {
    if (D !== null) {
      var z = e.unstable_now();
      Z = z;
      var J = !0;
      try {
        J = D(!0, z);
      } finally {
        J ? Pt() : ((R = !1), (D = null));
      }
    } else R = !1;
  }
  var Pt;
  if (typeof b == "function")
    Pt = function () {
      b(X);
    };
  else if (typeof MessageChannel < "u") {
    var rt = new MessageChannel(),
      q = rt.port2;
    (rt.port1.onmessage = X),
      (Pt = function () {
        q.postMessage(null);
      });
  } else
    Pt = function () {
      M(X, 0);
    };
  function ut(z) {
    (D = z), R || ((R = !0), Pt());
  }
  function _t(z, J) {
    N = M(function () {
      z(e.unstable_now());
    }, J);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), ut(E));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (z) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = m;
      }
      var W = m;
      m = J;
      try {
        return z();
      } finally {
        m = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, J) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var W = m;
      m = z;
      try {
        return J();
      } finally {
        m = W;
      }
    }),
    (e.unstable_scheduleCallback = function (z, J, W) {
      var Q = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? Q + W : Q))
          : (W = Q),
        z)
      ) {
        case 1:
          var ot = -1;
          break;
        case 2:
          ot = 250;
          break;
        case 5:
          ot = 1073741823;
          break;
        case 4:
          ot = 1e4;
          break;
        default:
          ot = 5e3;
      }
      return (
        (ot = W + ot),
        (z = {
          id: p++,
          callback: J,
          priorityLevel: z,
          startTime: W,
          expirationTime: ot,
          sortIndex: -1,
        }),
        W > Q
          ? ((z.sortIndex = W),
            t(d, z),
            n(c) === null &&
              z === n(d) &&
              (S ? (w(N), (N = -1)) : (S = !0), _t(C, W - Q)))
          : ((z.sortIndex = ot), t(c, z), y || v || ((y = !0), ut(E))),
        z
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (z) {
      var J = m;
      return function () {
        var W = m;
        m = J;
        try {
          return z.apply(this, arguments);
        } finally {
          m = W;
        }
      };
    });
})(t_);
(function (e) {
  e.exports = t_;
})(Jg);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var e_ = A.exports,
  Ne = Jg.exports;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var n_ = new Set(),
  fs = {};
function dr(e, t) {
  qr(e, t), qr(e + "Capture", t);
}
function qr(e, t) {
  for (fs[e] = t, e = 0; e < t.length; e++) n_.add(t[e]);
}
var Yn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Nc = Object.prototype.hasOwnProperty,
  Qx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hp = {},
  dp = {};
function qx(e) {
  return Nc.call(dp, e)
    ? !0
    : Nc.call(hp, e)
    ? !1
    : Qx.test(e)
    ? (dp[e] = !0)
    : ((hp[e] = !0), !1);
}
function Jx(e, t, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function tw(e, t, n, i) {
  if (t === null || typeof t > "u" || Jx(e, t, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
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
function Ce(e, t, n, i, r, s, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a);
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  me[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  me[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  me[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  me[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  me[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  me[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  me[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var $h = /[\-:]([a-z])/g;
function Yh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($h, Yh);
    me[t] = new Ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($h, Yh);
    me[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace($h, Yh);
  me[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  me[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  me[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Kh(e, t, n, i) {
  var r = me.hasOwnProperty(t) ? me[t] : null;
  (r !== null
    ? r.type !== 0
    : i ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (tw(t, n, r, i) && (n = null),
    i || r === null
      ? qx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : r.mustUseProperty
      ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
      : ((t = r.attributeName),
        (i = r.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((r = r.type),
            (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
}
var Qn = e_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ba = Symbol.for("react.element"),
  Or = Symbol.for("react.portal"),
  Dr = Symbol.for("react.fragment"),
  Xh = Symbol.for("react.strict_mode"),
  Bc = Symbol.for("react.profiler"),
  i_ = Symbol.for("react.provider"),
  r_ = Symbol.for("react.context"),
  Gh = Symbol.for("react.forward_ref"),
  Fc = Symbol.for("react.suspense"),
  jc = Symbol.for("react.suspense_list"),
  Qh = Symbol.for("react.memo"),
  ai = Symbol.for("react.lazy"),
  o_ = Symbol.for("react.offscreen"),
  fp = Symbol.iterator;
function Eo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fp && e[fp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $t = Object.assign,
  Yu;
function Uo(e) {
  if (Yu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yu = (t && t[1]) || "";
    }
  return (
    `
` +
    Yu +
    e
  );
}
var Ku = !1;
function Xu(e, t) {
  if (!e || Ku) return "";
  Ku = !0;
  var n = Error.prepareStackTrace;
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
        } catch (d) {
          var i = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          i = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        i = d;
      }
      e();
    }
  } catch (d) {
    if (d && i && typeof d.stack == "string") {
      for (
        var r = d.stack.split(`
`),
          s = i.stack.split(`
`),
          a = r.length - 1,
          u = s.length - 1;
        1 <= a && 0 <= u && r[a] !== s[u];

      )
        u--;
      for (; 1 <= a && 0 <= u; a--, u--)
        if (r[a] !== s[u]) {
          if (a !== 1 || u !== 1)
            do
              if ((a--, u--, 0 > u || r[a] !== s[u])) {
                var c =
                  `
` + r[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= u);
          break;
        }
    }
  } finally {
    (Ku = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Uo(e) : "";
}
function ew(e) {
  switch (e.tag) {
    case 5:
      return Uo(e.type);
    case 16:
      return Uo("Lazy");
    case 13:
      return Uo("Suspense");
    case 19:
      return Uo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Xu(e.type, !1)), e;
    case 11:
      return (e = Xu(e.type.render, !1)), e;
    case 1:
      return (e = Xu(e.type, !0)), e;
    default:
      return "";
  }
}
function Wc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dr:
      return "Fragment";
    case Or:
      return "Portal";
    case Bc:
      return "Profiler";
    case Xh:
      return "StrictMode";
    case Fc:
      return "Suspense";
    case jc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case r_:
        return (e.displayName || "Context") + ".Consumer";
      case i_:
        return (e._context.displayName || "Context") + ".Provider";
      case Gh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Qh:
        return (
          (t = e.displayName || null), t !== null ? t : Wc(e.type) || "Memo"
        );
      case ai:
        (t = e._payload), (e = e._init);
        try {
          return Wc(e(t));
        } catch {}
    }
  return null;
}
function nw(e) {
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
      return Wc(t);
    case 8:
      return t === Xh ? "StrictMode" : "Mode";
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
function ki(e) {
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
function s_(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function iw(e) {
  var t = s_(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (a) {
          (i = "" + a), s.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (a) {
          i = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Sa(e) {
  e._valueTracker || (e._valueTracker = iw(e));
}
function a_(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    i = "";
  return (
    e && (i = s_(e) ? (e.checked ? "true" : "false") : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ul(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Hc(e, t) {
  var n = t.checked;
  return $t({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function pp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    i = t.checked != null ? t.checked : t.defaultChecked;
  (n = ki(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function l_(e, t) {
  (t = t.checked), t != null && Kh(e, "checked", t, !1);
}
function Vc(e, t) {
  l_(e, t);
  var n = ki(t.value),
    i = t.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (i === "submit" || i === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zc(e, t.type, ki(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function mp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var i = t.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Zc(e, t, n) {
  (t !== "number" || ul(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $o = Array.isArray;
function Zr(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {};
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++)
      (r = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== r && (e[n].selected = r),
        r && i && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ki(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        (e[r].selected = !0), i && (e[r].defaultSelected = !0);
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function Uc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return $t({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if ($o(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ki(n) };
}
function u_(e, t) {
  var n = ki(t.value),
    i = ki(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = "" + i);
}
function _p(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function c_(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $c(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? c_(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Pa,
  h_ = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, i, r);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Pa = Pa || document.createElement("div"),
          Pa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Pa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ps(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qo = {
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
  rw = ["Webkit", "ms", "Moz", "O"];
Object.keys(qo).forEach(function (e) {
  rw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qo[t] = qo[e]);
  });
});
function d_(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (qo.hasOwnProperty(e) && qo[e])
    ? ("" + t).trim()
    : t + "px";
}
function f_(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = d_(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, r) : (e[n] = r);
    }
}
var ow = $t(
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
function Yc(e, t) {
  if (t) {
    if (ow[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function Kc(e, t) {
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
var Xc = null;
function qh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Gc = null,
  Ur = null,
  $r = null;
function vp(e) {
  if ((e = js(e))) {
    if (typeof Gc != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Kl(t)), Gc(e.stateNode, e.type, t));
  }
}
function p_(e) {
  Ur ? ($r ? $r.push(e) : ($r = [e])) : (Ur = e);
}
function m_() {
  if (Ur) {
    var e = Ur,
      t = $r;
    if ((($r = Ur = null), vp(e), t)) for (e = 0; e < t.length; e++) vp(t[e]);
  }
}
function g_(e, t) {
  return e(t);
}
function __() {}
var Gu = !1;
function v_(e, t, n) {
  if (Gu) return e(t, n);
  Gu = !0;
  try {
    return g_(e, t, n);
  } finally {
    (Gu = !1), (Ur !== null || $r !== null) && (__(), m_());
  }
}
function ms(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var i = Kl(n);
  if (i === null) return null;
  n = i[t];
  t: switch (t) {
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
      (i = !i.disabled) ||
        ((e = e.type),
        (i = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !i);
      break t;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var Qc = !1;
if (Yn)
  try {
    var To = {};
    Object.defineProperty(To, "passive", {
      get: function () {
        Qc = !0;
      },
    }),
      window.addEventListener("test", To, To),
      window.removeEventListener("test", To, To);
  } catch {
    Qc = !1;
  }
function sw(e, t, n, i, r, s, a, u, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (p) {
    this.onError(p);
  }
}
var Jo = !1,
  cl = null,
  hl = !1,
  qc = null,
  aw = {
    onError: function (e) {
      (Jo = !0), (cl = e);
    },
  };
function lw(e, t, n, i, r, s, a, u, c) {
  (Jo = !1), (cl = null), sw.apply(aw, arguments);
}
function uw(e, t, n, i, r, s, a, u, c) {
  if ((lw.apply(this, arguments), Jo)) {
    if (Jo) {
      var d = cl;
      (Jo = !1), (cl = null);
    } else throw Error(j(198));
    hl || ((hl = !0), (qc = d));
  }
}
function fr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function y_(e) {
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
function yp(e) {
  if (fr(e) !== e) throw Error(j(188));
}
function cw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = fr(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, i = t; ; ) {
    var r = n.return;
    if (r === null) break;
    var s = r.alternate;
    if (s === null) {
      if (((i = r.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (r.child === s.child) {
      for (s = r.child; s; ) {
        if (s === n) return yp(r), e;
        if (s === i) return yp(r), t;
        s = s.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== i.return) (n = r), (i = s);
    else {
      for (var a = !1, u = r.child; u; ) {
        if (u === n) {
          (a = !0), (n = r), (i = s);
          break;
        }
        if (u === i) {
          (a = !0), (i = r), (n = s);
          break;
        }
        u = u.sibling;
      }
      if (!a) {
        for (u = s.child; u; ) {
          if (u === n) {
            (a = !0), (n = s), (i = r);
            break;
          }
          if (u === i) {
            (a = !0), (i = s), (n = r);
            break;
          }
          u = u.sibling;
        }
        if (!a) throw Error(j(189));
      }
    }
    if (n.alternate !== i) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function x_(e) {
  return (e = cw(e)), e !== null ? w_(e) : null;
}
function w_(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = w_(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var b_ = Ne.unstable_scheduleCallback,
  xp = Ne.unstable_cancelCallback,
  hw = Ne.unstable_shouldYield,
  dw = Ne.unstable_requestPaint,
  Gt = Ne.unstable_now,
  fw = Ne.unstable_getCurrentPriorityLevel,
  Jh = Ne.unstable_ImmediatePriority,
  S_ = Ne.unstable_UserBlockingPriority,
  dl = Ne.unstable_NormalPriority,
  pw = Ne.unstable_LowPriority,
  P_ = Ne.unstable_IdlePriority,
  Zl = null,
  Ln = null;
function mw(e) {
  if (Ln && typeof Ln.onCommitFiberRoot == "function")
    try {
      Ln.onCommitFiberRoot(Zl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dn = Math.clz32 ? Math.clz32 : vw,
  gw = Math.log,
  _w = Math.LN2;
function vw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((gw(e) / _w) | 0)) | 0;
}
var ka = 64,
  Ca = 4194304;
function Yo(e) {
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
function fl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var u = a & ~r;
    u !== 0 ? (i = Yo(u)) : ((s &= a), s !== 0 && (i = Yo(s)));
  } else (a = n & ~r), a !== 0 ? (i = Yo(a)) : s !== 0 && (i = Yo(s));
  if (i === 0) return 0;
  if (
    t !== 0 &&
    t !== i &&
    (t & r) === 0 &&
    ((r = i & -i), (s = t & -t), r >= s || (r === 16 && (s & 4194240) !== 0))
  )
    return t;
  if (((i & 4) !== 0 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      (n = 31 - dn(t)), (r = 1 << n), (i |= e[n]), (t &= ~r);
  return i;
}
function yw(e, t) {
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
function xw(e, t) {
  for (
    var n = e.suspendedLanes,
      i = e.pingedLanes,
      r = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var a = 31 - dn(s),
      u = 1 << a,
      c = r[a];
    c === -1
      ? ((u & n) === 0 || (u & i) !== 0) && (r[a] = yw(u, t))
      : c <= t && (e.expiredLanes |= u),
      (s &= ~u);
  }
}
function Jc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function k_() {
  var e = ka;
  return (ka <<= 1), (ka & 4194240) === 0 && (ka = 64), e;
}
function Qu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Bs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dn(t)),
    (e[t] = n);
}
function ww(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var i = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - dn(n),
      s = 1 << r;
    (t[r] = 0), (i[r] = -1), (e[r] = -1), (n &= ~s);
  }
}
function td(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var i = 31 - dn(n),
      r = 1 << i;
    (r & t) | (e[i] & t) && (e[i] |= t), (n &= ~r);
  }
}
var Tt = 0;
function C_(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var L_,
  ed,
  M_,
  E_,
  T_,
  th = !1,
  La = [],
  gi = null,
  _i = null,
  vi = null,
  gs = new Map(),
  _s = new Map(),
  ui = [],
  bw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function wp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      gi = null;
      break;
    case "dragenter":
    case "dragleave":
      _i = null;
      break;
    case "mouseover":
    case "mouseout":
      vi = null;
      break;
    case "pointerover":
    case "pointerout":
      gs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _s.delete(t.pointerId);
  }
}
function Oo(e, t, n, i, r, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r],
      }),
      t !== null && ((t = js(t)), t !== null && ed(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      r !== null && t.indexOf(r) === -1 && t.push(r),
      e);
}
function Sw(e, t, n, i, r) {
  switch (t) {
    case "focusin":
      return (gi = Oo(gi, e, t, n, i, r)), !0;
    case "dragenter":
      return (_i = Oo(_i, e, t, n, i, r)), !0;
    case "mouseover":
      return (vi = Oo(vi, e, t, n, i, r)), !0;
    case "pointerover":
      var s = r.pointerId;
      return gs.set(s, Oo(gs.get(s) || null, e, t, n, i, r)), !0;
    case "gotpointercapture":
      return (
        (s = r.pointerId), _s.set(s, Oo(_s.get(s) || null, e, t, n, i, r)), !0
      );
  }
  return !1;
}
function O_(e) {
  var t = Xi(e.target);
  if (t !== null) {
    var n = fr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = y_(n)), t !== null)) {
          (e.blockedOn = t),
            T_(e.priority, function () {
              M_(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function qa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = eh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var i = new n.constructor(n.type, n);
      (Xc = i), n.target.dispatchEvent(i), (Xc = null);
    } else return (t = js(n)), t !== null && ed(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function bp(e, t, n) {
  qa(e) && n.delete(t);
}
function Pw() {
  (th = !1),
    gi !== null && qa(gi) && (gi = null),
    _i !== null && qa(_i) && (_i = null),
    vi !== null && qa(vi) && (vi = null),
    gs.forEach(bp),
    _s.forEach(bp);
}
function Do(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    th ||
      ((th = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, Pw)));
}
function vs(e) {
  function t(r) {
    return Do(r, e);
  }
  if (0 < La.length) {
    Do(La[0], e);
    for (var n = 1; n < La.length; n++) {
      var i = La[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
  }
  for (
    gi !== null && Do(gi, e),
      _i !== null && Do(_i, e),
      vi !== null && Do(vi, e),
      gs.forEach(t),
      _s.forEach(t),
      n = 0;
    n < ui.length;
    n++
  )
    (i = ui[n]), i.blockedOn === e && (i.blockedOn = null);
  for (; 0 < ui.length && ((n = ui[0]), n.blockedOn === null); )
    O_(n), n.blockedOn === null && ui.shift();
}
var Yr = Qn.ReactCurrentBatchConfig,
  pl = !0;
function kw(e, t, n, i) {
  var r = Tt,
    s = Yr.transition;
  Yr.transition = null;
  try {
    (Tt = 1), nd(e, t, n, i);
  } finally {
    (Tt = r), (Yr.transition = s);
  }
}
function Cw(e, t, n, i) {
  var r = Tt,
    s = Yr.transition;
  Yr.transition = null;
  try {
    (Tt = 4), nd(e, t, n, i);
  } finally {
    (Tt = r), (Yr.transition = s);
  }
}
function nd(e, t, n, i) {
  if (pl) {
    var r = eh(e, t, n, i);
    if (r === null) ac(e, t, i, ml, n), wp(e, i);
    else if (Sw(r, e, t, n, i)) i.stopPropagation();
    else if ((wp(e, i), t & 4 && -1 < bw.indexOf(e))) {
      for (; r !== null; ) {
        var s = js(r);
        if (
          (s !== null && L_(s),
          (s = eh(e, t, n, i)),
          s === null && ac(e, t, i, ml, n),
          s === r)
        )
          break;
        r = s;
      }
      r !== null && i.stopPropagation();
    } else ac(e, t, i, null, n);
  }
}
var ml = null;
function eh(e, t, n, i) {
  if (((ml = null), (e = qh(i)), (e = Xi(e)), e !== null))
    if (((t = fr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = y_(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ml = e), null;
}
function D_(e) {
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
      switch (fw()) {
        case Jh:
          return 1;
        case S_:
          return 4;
        case dl:
        case pw:
          return 16;
        case P_:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hi = null,
  id = null,
  Ja = null;
function R_() {
  if (Ja) return Ja;
  var e,
    t = id,
    n = t.length,
    i,
    r = "value" in hi ? hi.value : hi.textContent,
    s = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++);
  var a = n - e;
  for (i = 1; i <= a && t[n - i] === r[s - i]; i++);
  return (Ja = r.slice(e, 1 < i ? 1 - i : void 0));
}
function tl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ma() {
  return !0;
}
function Sp() {
  return !1;
}
function Fe(e) {
  function t(n, i, r, s, a) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(s) : s[u]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ma
        : Sp),
      (this.isPropagationStopped = Sp),
      this
    );
  }
  return (
    $t(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ma));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ma));
      },
      persist: function () {},
      isPersistent: Ma,
    }),
    t
  );
}
var co = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  rd = Fe(co),
  Fs = $t({}, co, { view: 0, detail: 0 }),
  Lw = Fe(Fs),
  qu,
  Ju,
  Ro,
  Ul = $t({}, Fs, {
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
    getModifierState: od,
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
        : (e !== Ro &&
            (Ro && e.type === "mousemove"
              ? ((qu = e.screenX - Ro.screenX), (Ju = e.screenY - Ro.screenY))
              : (Ju = qu = 0),
            (Ro = e)),
          qu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ju;
    },
  }),
  Pp = Fe(Ul),
  Mw = $t({}, Ul, { dataTransfer: 0 }),
  Ew = Fe(Mw),
  Tw = $t({}, Fs, { relatedTarget: 0 }),
  tc = Fe(Tw),
  Ow = $t({}, co, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dw = Fe(Ow),
  Rw = $t({}, co, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zw = Fe(Rw),
  Aw = $t({}, co, { data: 0 }),
  kp = Fe(Aw),
  Iw = {
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
  Nw = {
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
  Bw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Fw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Bw[e]) ? !!t[e] : !1;
}
function od() {
  return Fw;
}
var jw = $t({}, Fs, {
    key: function (e) {
      if (e.key) {
        var t = Iw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = tl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Nw[e.keyCode] || "Unidentified"
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
    getModifierState: od,
    charCode: function (e) {
      return e.type === "keypress" ? tl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? tl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ww = Fe(jw),
  Hw = $t({}, Ul, {
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
  Cp = Fe(Hw),
  Vw = $t({}, Fs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: od,
  }),
  Zw = Fe(Vw),
  Uw = $t({}, co, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $w = Fe(Uw),
  Yw = $t({}, Ul, {
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
  Kw = Fe(Yw),
  Xw = [9, 13, 27, 32],
  sd = Yn && "CompositionEvent" in window,
  ts = null;
Yn && "documentMode" in document && (ts = document.documentMode);
var Gw = Yn && "TextEvent" in window && !ts,
  z_ = Yn && (!sd || (ts && 8 < ts && 11 >= ts)),
  Lp = String.fromCharCode(32),
  Mp = !1;
function A_(e, t) {
  switch (e) {
    case "keyup":
      return Xw.indexOf(t.keyCode) !== -1;
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
function I_(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Rr = !1;
function Qw(e, t) {
  switch (e) {
    case "compositionend":
      return I_(t);
    case "keypress":
      return t.which !== 32 ? null : ((Mp = !0), Lp);
    case "textInput":
      return (e = t.data), e === Lp && Mp ? null : e;
    default:
      return null;
  }
}
function qw(e, t) {
  if (Rr)
    return e === "compositionend" || (!sd && A_(e, t))
      ? ((e = R_()), (Ja = id = hi = null), (Rr = !1), e)
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
      return z_ && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Jw = {
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
function Ep(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Jw[e.type] : t === "textarea";
}
function N_(e, t, n, i) {
  p_(i),
    (t = gl(t, "onChange")),
    0 < t.length &&
      ((n = new rd("onChange", "change", null, n, i)),
      e.push({ event: n, listeners: t }));
}
var es = null,
  ys = null;
function t1(e) {
  K_(e, 0);
}
function $l(e) {
  var t = Ir(e);
  if (a_(t)) return e;
}
function e1(e, t) {
  if (e === "change") return t;
}
var B_ = !1;
if (Yn) {
  var ec;
  if (Yn) {
    var nc = "oninput" in document;
    if (!nc) {
      var Tp = document.createElement("div");
      Tp.setAttribute("oninput", "return;"),
        (nc = typeof Tp.oninput == "function");
    }
    ec = nc;
  } else ec = !1;
  B_ = ec && (!document.documentMode || 9 < document.documentMode);
}
function Op() {
  es && (es.detachEvent("onpropertychange", F_), (ys = es = null));
}
function F_(e) {
  if (e.propertyName === "value" && $l(ys)) {
    var t = [];
    N_(t, ys, e, qh(e)), v_(t1, t);
  }
}
function n1(e, t, n) {
  e === "focusin"
    ? (Op(), (es = t), (ys = n), es.attachEvent("onpropertychange", F_))
    : e === "focusout" && Op();
}
function i1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $l(ys);
}
function r1(e, t) {
  if (e === "click") return $l(t);
}
function o1(e, t) {
  if (e === "input" || e === "change") return $l(t);
}
function s1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pn = typeof Object.is == "function" ? Object.is : s1;
function xs(e, t) {
  if (pn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    i = Object.keys(t);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!Nc.call(t, r) || !pn(e[r], t[r])) return !1;
  }
  return !0;
}
function Dp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Rp(e, t) {
  var n = Dp(e);
  e = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = e + n.textContent.length), e <= t && i >= t))
        return { node: n, offset: t - e };
      e = i;
    }
    t: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break t;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Dp(n);
  }
}
function j_(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? j_(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function W_() {
  for (var e = window, t = ul(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ul(e.document);
  }
  return t;
}
function ad(e) {
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
function a1(e) {
  var t = W_(),
    n = e.focusedElem,
    i = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    j_(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && ad(n)) {
      if (
        ((t = i.start),
        (e = i.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var r = n.textContent.length,
          s = Math.min(i.start, r);
        (i = i.end === void 0 ? s : Math.min(i.end, r)),
          !e.extend && s > i && ((r = i), (i = s), (s = r)),
          (r = Rp(n, s));
        var a = Rp(n, i);
        r &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          s > i
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var l1 = Yn && "documentMode" in document && 11 >= document.documentMode,
  zr = null,
  nh = null,
  ns = null,
  ih = !1;
function zp(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ih ||
    zr == null ||
    zr !== ul(i) ||
    ((i = zr),
    "selectionStart" in i && ad(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (ns && xs(ns, i)) ||
      ((ns = i),
      (i = gl(nh, "onSelect")),
      0 < i.length &&
        ((t = new rd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = zr))));
}
function Ea(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ar = {
    animationend: Ea("Animation", "AnimationEnd"),
    animationiteration: Ea("Animation", "AnimationIteration"),
    animationstart: Ea("Animation", "AnimationStart"),
    transitionend: Ea("Transition", "TransitionEnd"),
  },
  ic = {},
  H_ = {};
Yn &&
  ((H_ = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ar.animationend.animation,
    delete Ar.animationiteration.animation,
    delete Ar.animationstart.animation),
  "TransitionEvent" in window || delete Ar.transitionend.transition);
function Yl(e) {
  if (ic[e]) return ic[e];
  if (!Ar[e]) return e;
  var t = Ar[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in H_) return (ic[e] = t[n]);
  return e;
}
var V_ = Yl("animationend"),
  Z_ = Yl("animationiteration"),
  U_ = Yl("animationstart"),
  $_ = Yl("transitionend"),
  Y_ = new Map(),
  Ap =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ei(e, t) {
  Y_.set(e, t), dr(t, [e]);
}
for (var rc = 0; rc < Ap.length; rc++) {
  var oc = Ap[rc],
    u1 = oc.toLowerCase(),
    c1 = oc[0].toUpperCase() + oc.slice(1);
  Ei(u1, "on" + c1);
}
Ei(V_, "onAnimationEnd");
Ei(Z_, "onAnimationIteration");
Ei(U_, "onAnimationStart");
Ei("dblclick", "onDoubleClick");
Ei("focusin", "onFocus");
Ei("focusout", "onBlur");
Ei($_, "onTransitionEnd");
qr("onMouseEnter", ["mouseout", "mouseover"]);
qr("onMouseLeave", ["mouseout", "mouseover"]);
qr("onPointerEnter", ["pointerout", "pointerover"]);
qr("onPointerLeave", ["pointerout", "pointerover"]);
dr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
dr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
dr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
dr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
dr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ko =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  h1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));
function Ip(e, t, n) {
  var i = e.type || "unknown-event";
  (e.currentTarget = n), uw(i, t, void 0, e), (e.currentTarget = null);
}
function K_(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      r = i.event;
    i = i.listeners;
    t: {
      var s = void 0;
      if (t)
        for (var a = i.length - 1; 0 <= a; a--) {
          var u = i[a],
            c = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), c !== s && r.isPropagationStopped())) break t;
          Ip(r, u, d), (s = c);
        }
      else
        for (a = 0; a < i.length; a++) {
          if (
            ((u = i[a]),
            (c = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            c !== s && r.isPropagationStopped())
          )
            break t;
          Ip(r, u, d), (s = c);
        }
    }
  }
  if (hl) throw ((e = qc), (hl = !1), (qc = null), e);
}
function Nt(e, t) {
  var n = t[lh];
  n === void 0 && (n = t[lh] = new Set());
  var i = e + "__bubble";
  n.has(i) || (X_(t, e, 2, !1), n.add(i));
}
function sc(e, t, n) {
  var i = 0;
  t && (i |= 4), X_(n, e, i, t);
}
var Ta = "_reactListening" + Math.random().toString(36).slice(2);
function ws(e) {
  if (!e[Ta]) {
    (e[Ta] = !0),
      n_.forEach(function (n) {
        n !== "selectionchange" && (h1.has(n) || sc(n, !1, e), sc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ta] || ((t[Ta] = !0), sc("selectionchange", !1, t));
  }
}
function X_(e, t, n, i) {
  switch (D_(t)) {
    case 1:
      var r = kw;
      break;
    case 4:
      r = Cw;
      break;
    default:
      r = nd;
  }
  (n = r.bind(null, t, n, e)),
    (r = void 0),
    !Qc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (r = !0),
    i
      ? r !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: r })
        : e.addEventListener(t, n, !0)
      : r !== void 0
      ? e.addEventListener(t, n, { passive: r })
      : e.addEventListener(t, n, !1);
}
function ac(e, t, n, i, r) {
  var s = i;
  if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
    t: for (;;) {
      if (i === null) return;
      var a = i.tag;
      if (a === 3 || a === 4) {
        var u = i.stateNode.containerInfo;
        if (u === r || (u.nodeType === 8 && u.parentNode === r)) break;
        if (a === 4)
          for (a = i.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === r || (c.nodeType === 8 && c.parentNode === r))
            )
              return;
            a = a.return;
          }
        for (; u !== null; ) {
          if (((a = Xi(u)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            i = s = a;
            continue t;
          }
          u = u.parentNode;
        }
      }
      i = i.return;
    }
  v_(function () {
    var d = s,
      p = qh(n),
      g = [];
    t: {
      var m = Y_.get(e);
      if (m !== void 0) {
        var v = rd,
          y = e;
        switch (e) {
          case "keypress":
            if (tl(n) === 0) break t;
          case "keydown":
          case "keyup":
            v = Ww;
            break;
          case "focusin":
            (y = "focus"), (v = tc);
            break;
          case "focusout":
            (y = "blur"), (v = tc);
            break;
          case "beforeblur":
          case "afterblur":
            v = tc;
            break;
          case "click":
            if (n.button === 2) break t;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Pp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ew;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Zw;
            break;
          case V_:
          case Z_:
          case U_:
            v = Dw;
            break;
          case $_:
            v = $w;
            break;
          case "scroll":
            v = Lw;
            break;
          case "wheel":
            v = Kw;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = zw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Cp;
        }
        var S = (t & 4) !== 0,
          M = !S && e === "scroll",
          w = S ? (m !== null ? m + "Capture" : null) : m;
        S = [];
        for (var b = d, P; b !== null; ) {
          P = b;
          var C = P.stateNode;
          if (
            (P.tag === 5 &&
              C !== null &&
              ((P = C),
              w !== null && ((C = ms(b, w)), C != null && S.push(bs(b, C, P)))),
            M)
          )
            break;
          b = b.return;
        }
        0 < S.length &&
          ((m = new v(m, y, null, n, p)), g.push({ event: m, listeners: S }));
      }
    }
    if ((t & 7) === 0) {
      t: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Xc &&
            (y = n.relatedTarget || n.fromElement) &&
            (Xi(y) || y[Kn]))
        )
          break t;
        if (
          (v || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = d),
              (y = y ? Xi(y) : null),
              y !== null &&
                ((M = fr(y)), y !== M || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = d)),
          v !== y)
        ) {
          if (
            ((S = Pp),
            (C = "onMouseLeave"),
            (w = "onMouseEnter"),
            (b = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Cp),
              (C = "onPointerLeave"),
              (w = "onPointerEnter"),
              (b = "pointer")),
            (M = v == null ? m : Ir(v)),
            (P = y == null ? m : Ir(y)),
            (m = new S(C, b + "leave", v, n, p)),
            (m.target = M),
            (m.relatedTarget = P),
            (C = null),
            Xi(p) === d &&
              ((S = new S(w, b + "enter", y, n, p)),
              (S.target = P),
              (S.relatedTarget = M),
              (C = S)),
            (M = C),
            v && y)
          )
            e: {
              for (S = v, w = y, b = 0, P = S; P; P = Mr(P)) b++;
              for (P = 0, C = w; C; C = Mr(C)) P++;
              for (; 0 < b - P; ) (S = Mr(S)), b--;
              for (; 0 < P - b; ) (w = Mr(w)), P--;
              for (; b--; ) {
                if (S === w || (w !== null && S === w.alternate)) break e;
                (S = Mr(S)), (w = Mr(w));
              }
              S = null;
            }
          else S = null;
          v !== null && Np(g, m, v, S, !1),
            y !== null && M !== null && Np(g, M, y, S, !0);
        }
      }
      t: {
        if (
          ((m = d ? Ir(d) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var E = e1;
        else if (Ep(m))
          if (B_) E = o1;
          else {
            E = i1;
            var R = n1;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = r1);
        if (E && (E = E(e, d))) {
          N_(g, E, n, p);
          break t;
        }
        R && R(e, m, d),
          e === "focusout" &&
            (R = m._wrapperState) &&
            R.controlled &&
            m.type === "number" &&
            Zc(m, "number", m.value);
      }
      switch (((R = d ? Ir(d) : window), e)) {
        case "focusin":
          (Ep(R) || R.contentEditable === "true") &&
            ((zr = R), (nh = d), (ns = null));
          break;
        case "focusout":
          ns = nh = zr = null;
          break;
        case "mousedown":
          ih = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ih = !1), zp(g, n, p);
          break;
        case "selectionchange":
          if (l1) break;
        case "keydown":
        case "keyup":
          zp(g, n, p);
      }
      var D;
      if (sd)
        t: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break t;
            case "compositionend":
              N = "onCompositionEnd";
              break t;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break t;
          }
          N = void 0;
        }
      else
        Rr
          ? A_(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (z_ &&
          n.locale !== "ko" &&
          (Rr || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Rr && (D = R_())
            : ((hi = p),
              (id = "value" in hi ? hi.value : hi.textContent),
              (Rr = !0))),
        (R = gl(d, N)),
        0 < R.length &&
          ((N = new kp(N, e, null, n, p)),
          g.push({ event: N, listeners: R }),
          D ? (N.data = D) : ((D = I_(n)), D !== null && (N.data = D)))),
        (D = Gw ? Qw(e, n) : qw(e, n)) &&
          ((d = gl(d, "onBeforeInput")),
          0 < d.length &&
            ((p = new kp("onBeforeInput", "beforeinput", null, n, p)),
            g.push({ event: p, listeners: d }),
            (p.data = D)));
    }
    K_(g, t);
  });
}
function bs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gl(e, t) {
  for (var n = t + "Capture", i = []; e !== null; ) {
    var r = e,
      s = r.stateNode;
    r.tag === 5 &&
      s !== null &&
      ((r = s),
      (s = ms(e, n)),
      s != null && i.unshift(bs(e, s, r)),
      (s = ms(e, t)),
      s != null && i.push(bs(e, s, r))),
      (e = e.return);
  }
  return i;
}
function Mr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Np(e, t, n, i, r) {
  for (var s = t._reactName, a = []; n !== null && n !== i; ) {
    var u = n,
      c = u.alternate,
      d = u.stateNode;
    if (c !== null && c === i) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      r
        ? ((c = ms(n, s)), c != null && a.unshift(bs(n, c, u)))
        : r || ((c = ms(n, s)), c != null && a.push(bs(n, c, u)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var d1 = /\r\n?/g,
  f1 = /\u0000|\uFFFD/g;
function Bp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      d1,
      `
`
    )
    .replace(f1, "");
}
function Oa(e, t, n) {
  if (((t = Bp(t)), Bp(e) !== t && n)) throw Error(j(425));
}
function _l() {}
var rh = null,
  oh = null;
function sh(e, t) {
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
var ah = typeof setTimeout == "function" ? setTimeout : void 0,
  p1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Fp = typeof Promise == "function" ? Promise : void 0,
  m1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Fp < "u"
      ? function (e) {
          return Fp.resolve(null).then(e).catch(g1);
        }
      : ah;
function g1(e) {
  setTimeout(function () {
    throw e;
  });
}
function lc(e, t) {
  var n = t,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((e.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          e.removeChild(r), vs(t);
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = r;
  } while (n);
  vs(t);
}
function yi(e) {
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
function jp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ho = Math.random().toString(36).slice(2),
  kn = "__reactFiber$" + ho,
  Ss = "__reactProps$" + ho,
  Kn = "__reactContainer$" + ho,
  lh = "__reactEvents$" + ho,
  _1 = "__reactListeners$" + ho,
  v1 = "__reactHandles$" + ho;
function Xi(e) {
  var t = e[kn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Kn] || n[kn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = jp(e); e !== null; ) {
          if ((n = e[kn])) return n;
          e = jp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function js(e) {
  return (
    (e = e[kn] || e[Kn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ir(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Kl(e) {
  return e[Ss] || null;
}
var uh = [],
  Nr = -1;
function Ti(e) {
  return { current: e };
}
function Ft(e) {
  0 > Nr || ((e.current = uh[Nr]), (uh[Nr] = null), Nr--);
}
function It(e, t) {
  Nr++, (uh[Nr] = e.current), (e.current = t);
}
var Ci = {},
  we = Ti(Ci),
  Te = Ti(!1),
  or = Ci;
function Jr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ci;
  var i = e.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    s;
  for (s in n) r[s] = t[s];
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function Oe(e) {
  return (e = e.childContextTypes), e != null;
}
function vl() {
  Ft(Te), Ft(we);
}
function Wp(e, t, n) {
  if (we.current !== Ci) throw Error(j(168));
  It(we, t), It(Te, n);
}
function G_(e, t, n) {
  var i = e.stateNode;
  if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in t)) throw Error(j(108, nw(e) || "Unknown", r));
  return $t({}, n, i);
}
function yl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ci),
    (or = we.current),
    It(we, e),
    It(Te, Te.current),
    !0
  );
}
function Hp(e, t, n) {
  var i = e.stateNode;
  if (!i) throw Error(j(169));
  n
    ? ((e = G_(e, t, or)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      Ft(Te),
      Ft(we),
      It(we, e))
    : Ft(Te),
    It(Te, n);
}
var Wn = null,
  Xl = !1,
  uc = !1;
function Q_(e) {
  Wn === null ? (Wn = [e]) : Wn.push(e);
}
function y1(e) {
  (Xl = !0), Q_(e);
}
function Oi() {
  if (!uc && Wn !== null) {
    uc = !0;
    var e = 0,
      t = Tt;
    try {
      var n = Wn;
      for (Tt = 1; e < n.length; e++) {
        var i = n[e];
        do i = i(!0);
        while (i !== null);
      }
      (Wn = null), (Xl = !1);
    } catch (r) {
      throw (Wn !== null && (Wn = Wn.slice(e + 1)), b_(Jh, Oi), r);
    } finally {
      (Tt = t), (uc = !1);
    }
  }
  return null;
}
var Br = [],
  Fr = 0,
  xl = null,
  wl = 0,
  Ye = [],
  Ke = 0,
  sr = null,
  Vn = 1,
  Zn = "";
function Ui(e, t) {
  (Br[Fr++] = wl), (Br[Fr++] = xl), (xl = e), (wl = t);
}
function q_(e, t, n) {
  (Ye[Ke++] = Vn), (Ye[Ke++] = Zn), (Ye[Ke++] = sr), (sr = e);
  var i = Vn;
  e = Zn;
  var r = 32 - dn(i) - 1;
  (i &= ~(1 << r)), (n += 1);
  var s = 32 - dn(t) + r;
  if (30 < s) {
    var a = r - (r % 5);
    (s = (i & ((1 << a) - 1)).toString(32)),
      (i >>= a),
      (r -= a),
      (Vn = (1 << (32 - dn(t) + r)) | (n << r) | i),
      (Zn = s + e);
  } else (Vn = (1 << s) | (n << r) | i), (Zn = e);
}
function ld(e) {
  e.return !== null && (Ui(e, 1), q_(e, 1, 0));
}
function ud(e) {
  for (; e === xl; )
    (xl = Br[--Fr]), (Br[Fr] = null), (wl = Br[--Fr]), (Br[Fr] = null);
  for (; e === sr; )
    (sr = Ye[--Ke]),
      (Ye[Ke] = null),
      (Zn = Ye[--Ke]),
      (Ye[Ke] = null),
      (Vn = Ye[--Ke]),
      (Ye[Ke] = null);
}
var Ie = null,
  Ae = null,
  jt = !1,
  cn = null;
function J_(e, t) {
  var n = Ge(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (Ae = yi(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = sr !== null ? { id: Vn, overflow: Zn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ge(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ie = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ch(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hh(e) {
  if (jt) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Vp(e, t)) {
        if (ch(e)) throw Error(j(418));
        t = yi(n.nextSibling);
        var i = Ie;
        t && Vp(e, t)
          ? J_(i, n)
          : ((e.flags = (e.flags & -4097) | 2), (jt = !1), (Ie = e));
      }
    } else {
      if (ch(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (jt = !1), (Ie = e);
    }
  }
}
function Zp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function Da(e) {
  if (e !== Ie) return !1;
  if (!jt) return Zp(e), (jt = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !sh(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (ch(e)) throw (tv(), Error(j(418)));
    for (; t; ) J_(e, t), (t = yi(t.nextSibling));
  }
  if ((Zp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    t: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = yi(e.nextSibling);
              break t;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Ie ? yi(e.stateNode.nextSibling) : null;
  return !0;
}
function tv() {
  for (var e = Ae; e; ) e = yi(e.nextSibling);
}
function to() {
  (Ae = Ie = null), (jt = !1);
}
function cd(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
var x1 = Qn.ReactCurrentBatchConfig;
function an(e, t) {
  if (e && e.defaultProps) {
    (t = $t({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var bl = Ti(null),
  Sl = null,
  jr = null,
  hd = null;
function dd() {
  hd = jr = Sl = null;
}
function fd(e) {
  var t = bl.current;
  Ft(bl), (e._currentValue = t);
}
function dh(e, t, n) {
  for (; e !== null; ) {
    var i = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
        : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Kr(e, t) {
  (Sl = e),
    (hd = jr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Ee = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (hd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), jr === null)) {
      if (Sl === null) throw Error(j(308));
      (jr = e), (Sl.dependencies = { lanes: 0, firstContext: e });
    } else jr = jr.next = e;
  return t;
}
var Gi = null;
function pd(e) {
  Gi === null ? (Gi = [e]) : Gi.push(e);
}
function ev(e, t, n, i) {
  var r = t.interleaved;
  return (
    r === null ? ((n.next = n), pd(t)) : ((n.next = r.next), (r.next = n)),
    (t.interleaved = n),
    Xn(e, i)
  );
}
function Xn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var li = !1;
function md(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function nv(e, t) {
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
function Un(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function xi(e, t, n) {
  var i = e.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), (yt & 2) !== 0)) {
    var r = i.pending;
    return (
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (i.pending = t),
      Xn(e, n)
    );
  }
  return (
    (r = i.interleaved),
    r === null ? ((t.next = t), pd(i)) : ((t.next = r.next), (r.next = t)),
    (i.interleaved = t),
    Xn(e, n)
  );
}
function el(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var i = t.lanes;
    (i &= e.pendingLanes), (n |= i), (t.lanes = n), td(e, n);
  }
}
function Up(e, t) {
  var n = e.updateQueue,
    i = e.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (r = s = a) : (s = s.next = a), (n = n.next);
      } while (n !== null);
      s === null ? (r = s = t) : (s = s.next = t);
    } else r = s = t;
    (n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: s,
      shared: i.shared,
      effects: i.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Pl(e, t, n, i) {
  var r = e.updateQueue;
  li = !1;
  var s = r.firstBaseUpdate,
    a = r.lastBaseUpdate,
    u = r.shared.pending;
  if (u !== null) {
    r.shared.pending = null;
    var c = u,
      d = c.next;
    (c.next = null), a === null ? (s = d) : (a.next = d), (a = c);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== a &&
        (u === null ? (p.firstBaseUpdate = d) : (u.next = d),
        (p.lastBaseUpdate = c)));
  }
  if (s !== null) {
    var g = r.baseState;
    (a = 0), (p = d = c = null), (u = s);
    do {
      var m = u.lane,
        v = u.eventTime;
      if ((i & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        t: {
          var y = e,
            S = u;
          switch (((m = t), (v = n), S.tag)) {
            case 1:
              if (((y = S.payload), typeof y == "function")) {
                g = y.call(v, g, m);
                break t;
              }
              g = y;
              break t;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = S.payload),
                (m = typeof y == "function" ? y.call(v, g, m) : y),
                m == null)
              )
                break t;
              g = $t({}, g, m);
              break t;
            case 2:
              li = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = r.effects),
          m === null ? (r.effects = [u]) : m.push(u));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((d = p = v), (c = g)) : (p = p.next = v),
          (a |= m);
      if (((u = u.next), u === null)) {
        if (((u = r.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (r.lastBaseUpdate = m),
          (r.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (c = g),
      (r.baseState = c),
      (r.firstBaseUpdate = d),
      (r.lastBaseUpdate = p),
      (t = r.shared.interleaved),
      t !== null)
    ) {
      r = t;
      do (a |= r.lane), (r = r.next);
      while (r !== t);
    } else s === null && (r.shared.lanes = 0);
    (lr |= a), (e.lanes = a), (e.memoizedState = g);
  }
}
function $p(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var i = e[t],
        r = i.callback;
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != "function"))
          throw Error(j(191, r));
        r.call(i);
      }
    }
}
var iv = new e_.Component().refs;
function fh(e, t, n, i) {
  (t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : $t({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Gl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? fr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var i = Pe(),
      r = bi(e),
      s = Un(i, r);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = xi(e, s, r)),
      t !== null && (fn(t, e, r, i), el(t, e, r));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var i = Pe(),
      r = bi(e),
      s = Un(i, r);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = xi(e, s, r)),
      t !== null && (fn(t, e, r, i), el(t, e, r));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pe(),
      i = bi(e),
      r = Un(n, i);
    (r.tag = 2),
      t != null && (r.callback = t),
      (t = xi(e, r, i)),
      t !== null && (fn(t, e, i, n), el(t, e, i));
  },
};
function Yp(e, t, n, i, r, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(i, s, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !xs(n, i) || !xs(r, s)
      : !0
  );
}
function rv(e, t, n) {
  var i = !1,
    r = Ci,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Je(s))
      : ((r = Oe(t) ? or : we.current),
        (i = t.contextTypes),
        (s = (i = i != null) ? Jr(e, r) : Ci)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Gl),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Kp(e, t, n, i) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && Gl.enqueueReplaceState(t, t.state, null);
}
function ph(e, t, n, i) {
  var r = e.stateNode;
  (r.props = n), (r.state = e.memoizedState), (r.refs = iv), md(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (r.context = Je(s))
    : ((s = Oe(t) ? or : we.current), (r.context = Jr(e, s))),
    (r.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (fh(e, t, s, n), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((t = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      t !== r.state && Gl.enqueueReplaceState(r, r.state, null),
      Pl(e, n, r, i),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function zo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(j(147, e));
      var r = i,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var u = r.refs;
            u === iv && (u = r.refs = {}),
              a === null ? delete u[s] : (u[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Ra(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Xp(e) {
  var t = e._init;
  return t(e._payload);
}
function ov(e) {
  function t(w, b) {
    if (e) {
      var P = w.deletions;
      P === null ? ((w.deletions = [b]), (w.flags |= 16)) : P.push(b);
    }
  }
  function n(w, b) {
    if (!e) return null;
    for (; b !== null; ) t(w, b), (b = b.sibling);
    return null;
  }
  function i(w, b) {
    for (w = new Map(); b !== null; )
      b.key !== null ? w.set(b.key, b) : w.set(b.index, b), (b = b.sibling);
    return w;
  }
  function r(w, b) {
    return (w = Si(w, b)), (w.index = 0), (w.sibling = null), w;
  }
  function s(w, b, P) {
    return (
      (w.index = P),
      e
        ? ((P = w.alternate),
          P !== null
            ? ((P = P.index), P < b ? ((w.flags |= 2), b) : P)
            : ((w.flags |= 2), b))
        : ((w.flags |= 1048576), b)
    );
  }
  function a(w) {
    return e && w.alternate === null && (w.flags |= 2), w;
  }
  function u(w, b, P, C) {
    return b === null || b.tag !== 6
      ? ((b = gc(P, w.mode, C)), (b.return = w), b)
      : ((b = r(b, P)), (b.return = w), b);
  }
  function c(w, b, P, C) {
    var E = P.type;
    return E === Dr
      ? p(w, b, P.props.children, C, P.key)
      : b !== null &&
        (b.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === ai &&
            Xp(E) === b.type))
      ? ((C = r(b, P.props)), (C.ref = zo(w, b, P)), (C.return = w), C)
      : ((C = al(P.type, P.key, P.props, null, w.mode, C)),
        (C.ref = zo(w, b, P)),
        (C.return = w),
        C);
  }
  function d(w, b, P, C) {
    return b === null ||
      b.tag !== 4 ||
      b.stateNode.containerInfo !== P.containerInfo ||
      b.stateNode.implementation !== P.implementation
      ? ((b = _c(P, w.mode, C)), (b.return = w), b)
      : ((b = r(b, P.children || [])), (b.return = w), b);
  }
  function p(w, b, P, C, E) {
    return b === null || b.tag !== 7
      ? ((b = er(P, w.mode, C, E)), (b.return = w), b)
      : ((b = r(b, P)), (b.return = w), b);
  }
  function g(w, b, P) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (b = gc("" + b, w.mode, P)), (b.return = w), b;
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case ba:
          return (
            (P = al(b.type, b.key, b.props, null, w.mode, P)),
            (P.ref = zo(w, null, b)),
            (P.return = w),
            P
          );
        case Or:
          return (b = _c(b, w.mode, P)), (b.return = w), b;
        case ai:
          var C = b._init;
          return g(w, C(b._payload), P);
      }
      if ($o(b) || Eo(b))
        return (b = er(b, w.mode, P, null)), (b.return = w), b;
      Ra(w, b);
    }
    return null;
  }
  function m(w, b, P, C) {
    var E = b !== null ? b.key : null;
    if ((typeof P == "string" && P !== "") || typeof P == "number")
      return E !== null ? null : u(w, b, "" + P, C);
    if (typeof P == "object" && P !== null) {
      switch (P.$$typeof) {
        case ba:
          return P.key === E ? c(w, b, P, C) : null;
        case Or:
          return P.key === E ? d(w, b, P, C) : null;
        case ai:
          return (E = P._init), m(w, b, E(P._payload), C);
      }
      if ($o(P) || Eo(P)) return E !== null ? null : p(w, b, P, C, null);
      Ra(w, P);
    }
    return null;
  }
  function v(w, b, P, C, E) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (w = w.get(P) || null), u(b, w, "" + C, E);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case ba:
          return (w = w.get(C.key === null ? P : C.key) || null), c(b, w, C, E);
        case Or:
          return (w = w.get(C.key === null ? P : C.key) || null), d(b, w, C, E);
        case ai:
          var R = C._init;
          return v(w, b, P, R(C._payload), E);
      }
      if ($o(C) || Eo(C)) return (w = w.get(P) || null), p(b, w, C, E, null);
      Ra(b, C);
    }
    return null;
  }
  function y(w, b, P, C) {
    for (
      var E = null, R = null, D = b, N = (b = 0), V = null;
      D !== null && N < P.length;
      N++
    ) {
      D.index > N ? ((V = D), (D = null)) : (V = D.sibling);
      var Z = m(w, D, P[N], C);
      if (Z === null) {
        D === null && (D = V);
        break;
      }
      e && D && Z.alternate === null && t(w, D),
        (b = s(Z, b, N)),
        R === null ? (E = Z) : (R.sibling = Z),
        (R = Z),
        (D = V);
    }
    if (N === P.length) return n(w, D), jt && Ui(w, N), E;
    if (D === null) {
      for (; N < P.length; N++)
        (D = g(w, P[N], C)),
          D !== null &&
            ((b = s(D, b, N)), R === null ? (E = D) : (R.sibling = D), (R = D));
      return jt && Ui(w, N), E;
    }
    for (D = i(w, D); N < P.length; N++)
      (V = v(D, w, N, P[N], C)),
        V !== null &&
          (e && V.alternate !== null && D.delete(V.key === null ? N : V.key),
          (b = s(V, b, N)),
          R === null ? (E = V) : (R.sibling = V),
          (R = V));
    return (
      e &&
        D.forEach(function (K) {
          return t(w, K);
        }),
      jt && Ui(w, N),
      E
    );
  }
  function S(w, b, P, C) {
    var E = Eo(P);
    if (typeof E != "function") throw Error(j(150));
    if (((P = E.call(P)), P == null)) throw Error(j(151));
    for (
      var R = (E = null), D = b, N = (b = 0), V = null, Z = P.next();
      D !== null && !Z.done;
      N++, Z = P.next()
    ) {
      D.index > N ? ((V = D), (D = null)) : (V = D.sibling);
      var K = m(w, D, Z.value, C);
      if (K === null) {
        D === null && (D = V);
        break;
      }
      e && D && K.alternate === null && t(w, D),
        (b = s(K, b, N)),
        R === null ? (E = K) : (R.sibling = K),
        (R = K),
        (D = V);
    }
    if (Z.done) return n(w, D), jt && Ui(w, N), E;
    if (D === null) {
      for (; !Z.done; N++, Z = P.next())
        (Z = g(w, Z.value, C)),
          Z !== null &&
            ((b = s(Z, b, N)), R === null ? (E = Z) : (R.sibling = Z), (R = Z));
      return jt && Ui(w, N), E;
    }
    for (D = i(w, D); !Z.done; N++, Z = P.next())
      (Z = v(D, w, N, Z.value, C)),
        Z !== null &&
          (e && Z.alternate !== null && D.delete(Z.key === null ? N : Z.key),
          (b = s(Z, b, N)),
          R === null ? (E = Z) : (R.sibling = Z),
          (R = Z));
    return (
      e &&
        D.forEach(function (X) {
          return t(w, X);
        }),
      jt && Ui(w, N),
      E
    );
  }
  function M(w, b, P, C) {
    if (
      (typeof P == "object" &&
        P !== null &&
        P.type === Dr &&
        P.key === null &&
        (P = P.props.children),
      typeof P == "object" && P !== null)
    ) {
      switch (P.$$typeof) {
        case ba:
          t: {
            for (var E = P.key, R = b; R !== null; ) {
              if (R.key === E) {
                if (((E = P.type), E === Dr)) {
                  if (R.tag === 7) {
                    n(w, R.sibling),
                      (b = r(R, P.props.children)),
                      (b.return = w),
                      (w = b);
                    break t;
                  }
                } else if (
                  R.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === ai &&
                    Xp(E) === R.type)
                ) {
                  n(w, R.sibling),
                    (b = r(R, P.props)),
                    (b.ref = zo(w, R, P)),
                    (b.return = w),
                    (w = b);
                  break t;
                }
                n(w, R);
                break;
              } else t(w, R);
              R = R.sibling;
            }
            P.type === Dr
              ? ((b = er(P.props.children, w.mode, C, P.key)),
                (b.return = w),
                (w = b))
              : ((C = al(P.type, P.key, P.props, null, w.mode, C)),
                (C.ref = zo(w, b, P)),
                (C.return = w),
                (w = C));
          }
          return a(w);
        case Or:
          t: {
            for (R = P.key; b !== null; ) {
              if (b.key === R)
                if (
                  b.tag === 4 &&
                  b.stateNode.containerInfo === P.containerInfo &&
                  b.stateNode.implementation === P.implementation
                ) {
                  n(w, b.sibling),
                    (b = r(b, P.children || [])),
                    (b.return = w),
                    (w = b);
                  break t;
                } else {
                  n(w, b);
                  break;
                }
              else t(w, b);
              b = b.sibling;
            }
            (b = _c(P, w.mode, C)), (b.return = w), (w = b);
          }
          return a(w);
        case ai:
          return (R = P._init), M(w, b, R(P._payload), C);
      }
      if ($o(P)) return y(w, b, P, C);
      if (Eo(P)) return S(w, b, P, C);
      Ra(w, P);
    }
    return (typeof P == "string" && P !== "") || typeof P == "number"
      ? ((P = "" + P),
        b !== null && b.tag === 6
          ? (n(w, b.sibling), (b = r(b, P)), (b.return = w), (w = b))
          : (n(w, b), (b = gc(P, w.mode, C)), (b.return = w), (w = b)),
        a(w))
      : n(w, b);
  }
  return M;
}
var eo = ov(!0),
  sv = ov(!1),
  Ws = {},
  Mn = Ti(Ws),
  Ps = Ti(Ws),
  ks = Ti(Ws);
function Qi(e) {
  if (e === Ws) throw Error(j(174));
  return e;
}
function gd(e, t) {
  switch ((It(ks, t), It(Ps, e), It(Mn, Ws), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $c(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = $c(t, e));
  }
  Ft(Mn), It(Mn, t);
}
function no() {
  Ft(Mn), Ft(Ps), Ft(ks);
}
function av(e) {
  Qi(ks.current);
  var t = Qi(Mn.current),
    n = $c(t, e.type);
  t !== n && (It(Ps, e), It(Mn, n));
}
function _d(e) {
  Ps.current === e && (Ft(Mn), Ft(Ps));
}
var Zt = Ti(0);
function kl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
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
var cc = [];
function vd() {
  for (var e = 0; e < cc.length; e++)
    cc[e]._workInProgressVersionPrimary = null;
  cc.length = 0;
}
var nl = Qn.ReactCurrentDispatcher,
  hc = Qn.ReactCurrentBatchConfig,
  ar = 0,
  Ut = null,
  ne = null,
  le = null,
  Cl = !1,
  is = !1,
  Cs = 0,
  w1 = 0;
function ge() {
  throw Error(j(321));
}
function yd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pn(e[n], t[n])) return !1;
  return !0;
}
function xd(e, t, n, i, r, s) {
  if (
    ((ar = s),
    (Ut = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (nl.current = e === null || e.memoizedState === null ? k1 : C1),
    (e = n(i, r)),
    is)
  ) {
    s = 0;
    do {
      if (((is = !1), (Cs = 0), 25 <= s)) throw Error(j(301));
      (s += 1),
        (le = ne = null),
        (t.updateQueue = null),
        (nl.current = L1),
        (e = n(i, r));
    } while (is);
  }
  if (
    ((nl.current = Ll),
    (t = ne !== null && ne.next !== null),
    (ar = 0),
    (le = ne = Ut = null),
    (Cl = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function wd() {
  var e = Cs !== 0;
  return (Cs = 0), e;
}
function Pn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (Ut.memoizedState = le = e) : (le = le.next = e), le;
}
function tn() {
  if (ne === null) {
    var e = Ut.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = le === null ? Ut.memoizedState : le.next;
  if (t !== null) (le = t), (ne = e);
  else {
    if (e === null) throw Error(j(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      le === null ? (Ut.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function Ls(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function dc(e) {
  var t = tn(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var i = ne,
    r = i.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (r !== null) {
      var a = r.next;
      (r.next = s.next), (s.next = a);
    }
    (i.baseQueue = r = s), (n.pending = null);
  }
  if (r !== null) {
    (s = r.next), (i = i.baseState);
    var u = (a = null),
      c = null,
      d = s;
    do {
      var p = d.lane;
      if ((ar & p) === p)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (i = d.hasEagerState ? d.eagerState : e(i, d.action));
      else {
        var g = {
          lane: p,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        c === null ? ((u = c = g), (a = i)) : (c = c.next = g),
          (Ut.lanes |= p),
          (lr |= p);
      }
      d = d.next;
    } while (d !== null && d !== s);
    c === null ? (a = i) : (c.next = u),
      pn(i, t.memoizedState) || (Ee = !0),
      (t.memoizedState = i),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = i);
  }
  if (((e = n.interleaved), e !== null)) {
    r = e;
    do (s = r.lane), (Ut.lanes |= s), (lr |= s), (r = r.next);
    while (r !== e);
  } else r === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fc(e) {
  var t = tn(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var i = n.dispatch,
    r = n.pending,
    s = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var a = (r = r.next);
    do (s = e(s, a.action)), (a = a.next);
    while (a !== r);
    pn(s, t.memoizedState) || (Ee = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, i];
}
function lv() {}
function uv(e, t) {
  var n = Ut,
    i = tn(),
    r = t(),
    s = !pn(i.memoizedState, r);
  if (
    (s && ((i.memoizedState = r), (Ee = !0)),
    (i = i.queue),
    bd(dv.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || s || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ms(9, hv.bind(null, n, i, r, t), void 0, null),
      ue === null)
    )
      throw Error(j(349));
    (ar & 30) !== 0 || cv(n, t, r);
  }
  return r;
}
function cv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ut.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ut.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hv(e, t, n, i) {
  (t.value = n), (t.getSnapshot = i), fv(t) && pv(e);
}
function dv(e, t, n) {
  return n(function () {
    fv(t) && pv(e);
  });
}
function fv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pn(e, n);
  } catch {
    return !0;
  }
}
function pv(e) {
  var t = Xn(e, 1);
  t !== null && fn(t, e, 1, -1);
}
function Gp(e) {
  var t = Pn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ls,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = P1.bind(null, Ut, e)),
    [t.memoizedState, e]
  );
}
function Ms(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = Ut.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ut.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  );
}
function mv() {
  return tn().memoizedState;
}
function il(e, t, n, i) {
  var r = Pn();
  (Ut.flags |= e),
    (r.memoizedState = Ms(1 | t, n, void 0, i === void 0 ? null : i));
}
function Ql(e, t, n, i) {
  var r = tn();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (ne !== null) {
    var a = ne.memoizedState;
    if (((s = a.destroy), i !== null && yd(i, a.deps))) {
      r.memoizedState = Ms(t, n, s, i);
      return;
    }
  }
  (Ut.flags |= e), (r.memoizedState = Ms(1 | t, n, s, i));
}
function Qp(e, t) {
  return il(8390656, 8, e, t);
}
function bd(e, t) {
  return Ql(2048, 8, e, t);
}
function gv(e, t) {
  return Ql(4, 2, e, t);
}
function _v(e, t) {
  return Ql(4, 4, e, t);
}
function vv(e, t) {
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
function yv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ql(4, 4, vv.bind(null, t, e), n)
  );
}
function Sd() {}
function xv(e, t) {
  var n = tn();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && yd(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e);
}
function wv(e, t) {
  var n = tn();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && yd(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function bv(e, t, n) {
  return (ar & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n))
    : (pn(n, t) || ((n = k_()), (Ut.lanes |= n), (lr |= n), (e.baseState = !0)),
      t);
}
function b1(e, t) {
  var n = Tt;
  (Tt = n !== 0 && 4 > n ? n : 4), e(!0);
  var i = hc.transition;
  hc.transition = {};
  try {
    e(!1), t();
  } finally {
    (Tt = n), (hc.transition = i);
  }
}
function Sv() {
  return tn().memoizedState;
}
function S1(e, t, n) {
  var i = bi(e);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pv(e))
  )
    kv(t, n);
  else if (((n = ev(e, t, n, i)), n !== null)) {
    var r = Pe();
    fn(n, e, i, r), Cv(n, t, i);
  }
}
function P1(e, t, n) {
  var i = bi(e),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pv(e)) kv(t, r);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          u = s(a, n);
        if (((r.hasEagerState = !0), (r.eagerState = u), pn(u, a))) {
          var c = t.interleaved;
          c === null
            ? ((r.next = r), pd(t))
            : ((r.next = c.next), (c.next = r)),
            (t.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = ev(e, t, r, i)),
      n !== null && ((r = Pe()), fn(n, e, i, r), Cv(n, t, i));
  }
}
function Pv(e) {
  var t = e.alternate;
  return e === Ut || (t !== null && t === Ut);
}
function kv(e, t) {
  is = Cl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Cv(e, t, n) {
  if ((n & 4194240) !== 0) {
    var i = t.lanes;
    (i &= e.pendingLanes), (n |= i), (t.lanes = n), td(e, n);
  }
}
var Ll = {
    readContext: Je,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  k1 = {
    readContext: Je,
    useCallback: function (e, t) {
      return (Pn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: Qp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        il(4194308, 4, vv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return il(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return il(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var i = Pn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (i.memoizedState = i.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (i.queue = e),
        (e = e.dispatch = S1.bind(null, Ut, e)),
        [i.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Gp,
    useDebugValue: Sd,
    useDeferredValue: function (e) {
      return (Pn().memoizedState = e);
    },
    useTransition: function () {
      var e = Gp(!1),
        t = e[0];
      return (e = b1.bind(null, e[1])), (Pn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var i = Ut,
        r = Pn();
      if (jt) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(j(349));
        (ar & 30) !== 0 || cv(i, t, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (r.queue = s),
        Qp(dv.bind(null, i, s, e), [e]),
        (i.flags |= 2048),
        Ms(9, hv.bind(null, i, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pn(),
        t = ue.identifierPrefix;
      if (jt) {
        var n = Zn,
          i = Vn;
        (n = (i & ~(1 << (32 - dn(i) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Cs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = w1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  C1 = {
    readContext: Je,
    useCallback: xv,
    useContext: Je,
    useEffect: bd,
    useImperativeHandle: yv,
    useInsertionEffect: gv,
    useLayoutEffect: _v,
    useMemo: wv,
    useReducer: dc,
    useRef: mv,
    useState: function () {
      return dc(Ls);
    },
    useDebugValue: Sd,
    useDeferredValue: function (e) {
      var t = tn();
      return bv(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = dc(Ls)[0],
        t = tn().memoizedState;
      return [e, t];
    },
    useMutableSource: lv,
    useSyncExternalStore: uv,
    useId: Sv,
    unstable_isNewReconciler: !1,
  },
  L1 = {
    readContext: Je,
    useCallback: xv,
    useContext: Je,
    useEffect: bd,
    useImperativeHandle: yv,
    useInsertionEffect: gv,
    useLayoutEffect: _v,
    useMemo: wv,
    useReducer: fc,
    useRef: mv,
    useState: function () {
      return fc(Ls);
    },
    useDebugValue: Sd,
    useDeferredValue: function (e) {
      var t = tn();
      return ne === null ? (t.memoizedState = e) : bv(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = fc(Ls)[0],
        t = tn().memoizedState;
      return [e, t];
    },
    useMutableSource: lv,
    useSyncExternalStore: uv,
    useId: Sv,
    unstable_isNewReconciler: !1,
  };
function io(e, t) {
  try {
    var n = "",
      i = t;
    do (n += ew(i)), (i = i.return);
    while (i);
    var r = n;
  } catch (s) {
    r =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: r, digest: null };
}
function pc(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function mh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var M1 = typeof WeakMap == "function" ? WeakMap : Map;
function Lv(e, t, n) {
  (n = Un(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = t.value;
  return (
    (n.callback = function () {
      El || ((El = !0), (kh = i)), mh(e, t);
    }),
    n
  );
}
function Mv(e, t, n) {
  (n = Un(-1, n)), (n.tag = 3);
  var i = e.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var r = t.value;
    (n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        mh(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        mh(e, t),
          typeof i != "function" &&
            (wi === null ? (wi = new Set([this])) : wi.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function qp(e, t, n) {
  var i = e.pingCache;
  if (i === null) {
    i = e.pingCache = new M1();
    var r = new Set();
    i.set(t, r);
  } else (r = i.get(t)), r === void 0 && ((r = new Set()), i.set(t, r));
  r.has(n) || (r.add(n), (e = H1.bind(null, e, t, n)), t.then(e, e));
}
function Jp(e) {
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
function tm(e, t, n, i, r) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Un(-1, 1)), (t.tag = 2), xi(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = r), e);
}
var E1 = Qn.ReactCurrentOwner,
  Ee = !1;
function Se(e, t, n, i) {
  t.child = e === null ? sv(t, null, n, i) : eo(t, e.child, n, i);
}
function em(e, t, n, i, r) {
  n = n.render;
  var s = t.ref;
  return (
    Kr(t, r),
    (i = xd(e, t, n, i, s, r)),
    (n = wd()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        Gn(e, t, r))
      : (jt && n && ld(t), (t.flags |= 1), Se(e, t, i, r), t.child)
  );
}
function nm(e, t, n, i, r) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Od(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Ev(e, t, s, i, r))
      : ((e = al(n.type, null, i, t, t.mode, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), (e.lanes & r) === 0)) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xs), n(a, i) && e.ref === t.ref)
    )
      return Gn(e, t, r);
  }
  return (
    (t.flags |= 1),
    (e = Si(s, i)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ev(e, t, n, i, r) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (xs(s, i) && e.ref === t.ref)
      if (((Ee = !1), (t.pendingProps = i = s), (e.lanes & r) !== 0))
        (e.flags & 131072) !== 0 && (Ee = !0);
      else return (t.lanes = e.lanes), Gn(e, t, r);
  }
  return gh(e, t, n, i, r);
}
function Tv(e, t, n) {
  var i = t.pendingProps,
    r = i.children,
    s = e !== null ? e.memoizedState : null;
  if (i.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        It(Hr, ze),
        (ze |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          It(Hr, ze),
          (ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = s !== null ? s.baseLanes : n),
        It(Hr, ze),
        (ze |= i);
    }
  else
    s !== null ? ((i = s.baseLanes | n), (t.memoizedState = null)) : (i = n),
      It(Hr, ze),
      (ze |= i);
  return Se(e, t, r, n), t.child;
}
function Ov(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function gh(e, t, n, i, r) {
  var s = Oe(n) ? or : we.current;
  return (
    (s = Jr(t, s)),
    Kr(t, r),
    (n = xd(e, t, n, i, s, r)),
    (i = wd()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        Gn(e, t, r))
      : (jt && i && ld(t), (t.flags |= 1), Se(e, t, n, r), t.child)
  );
}
function im(e, t, n, i, r) {
  if (Oe(n)) {
    var s = !0;
    yl(t);
  } else s = !1;
  if ((Kr(t, r), t.stateNode === null))
    rl(e, t), rv(t, n, i), ph(t, n, i, r), (i = !0);
  else if (e === null) {
    var a = t.stateNode,
      u = t.memoizedProps;
    a.props = u;
    var c = a.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Je(d))
      : ((d = Oe(n) ? or : we.current), (d = Jr(t, d)));
    var p = n.getDerivedStateFromProps,
      g =
        typeof p == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== i || c !== d) && Kp(t, a, i, d)),
      (li = !1);
    var m = t.memoizedState;
    (a.state = m),
      Pl(t, i, a, r),
      (c = t.memoizedState),
      u !== i || m !== c || Te.current || li
        ? (typeof p == "function" && (fh(t, n, p, i), (c = t.memoizedState)),
          (u = li || Yp(t, n, u, i, m, c, d))
            ? (g ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = i),
              (t.memoizedState = c)),
          (a.props = i),
          (a.state = c),
          (a.context = d),
          (i = u))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (i = !1));
  } else {
    (a = t.stateNode),
      nv(e, t),
      (u = t.memoizedProps),
      (d = t.type === t.elementType ? u : an(t.type, u)),
      (a.props = d),
      (g = t.pendingProps),
      (m = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Je(c))
        : ((c = Oe(n) ? or : we.current), (c = Jr(t, c)));
    var v = n.getDerivedStateFromProps;
    (p =
      typeof v == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== g || m !== c) && Kp(t, a, i, c)),
      (li = !1),
      (m = t.memoizedState),
      (a.state = m),
      Pl(t, i, a, r);
    var y = t.memoizedState;
    u !== g || m !== y || Te.current || li
      ? (typeof v == "function" && (fh(t, n, v, i), (y = t.memoizedState)),
        (d = li || Yp(t, n, d, i, m, y, c) || !1)
          ? (p ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(i, y, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(i, y, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = i),
            (t.memoizedState = y)),
        (a.props = i),
        (a.state = y),
        (a.context = c),
        (i = d))
      : (typeof a.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (i = !1));
  }
  return _h(e, t, n, i, s, r);
}
function _h(e, t, n, i, r, s) {
  Ov(e, t);
  var a = (t.flags & 128) !== 0;
  if (!i && !a) return r && Hp(t, n, !1), Gn(e, t, s);
  (i = t.stateNode), (E1.current = t);
  var u =
    a && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = eo(t, e.child, null, s)), (t.child = eo(t, null, u, s)))
      : Se(e, t, u, s),
    (t.memoizedState = i.state),
    r && Hp(t, n, !0),
    t.child
  );
}
function Dv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wp(e, t.context, !1),
    gd(e, t.containerInfo);
}
function rm(e, t, n, i, r) {
  return to(), cd(r), (t.flags |= 256), Se(e, t, n, i), t.child;
}
var vh = { dehydrated: null, treeContext: null, retryLane: 0 };
function yh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rv(e, t, n) {
  var i = t.pendingProps,
    r = Zt.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    u;
  if (
    ((u = a) ||
      (u = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    u
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (r |= 1),
    It(Zt, r & 1),
    e === null)
  )
    return (
      hh(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((a = i.children),
          (e = i.fallback),
          s
            ? ((i = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              (i & 1) === 0 && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = tu(a, i, 0, null)),
              (e = er(e, i, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = yh(n)),
              (t.memoizedState = vh),
              e)
            : Pd(t, a))
    );
  if (((r = e.memoizedState), r !== null && ((u = r.dehydrated), u !== null)))
    return T1(e, t, a, i, u, r, n);
  if (s) {
    (s = i.fallback), (a = t.mode), (r = e.child), (u = r.sibling);
    var c = { mode: "hidden", children: i.children };
    return (
      (a & 1) === 0 && t.child !== r
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = c),
          (t.deletions = null))
        : ((i = Si(r, c)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      u !== null ? (s = Si(u, s)) : ((s = er(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (i.return = t),
      (i.sibling = s),
      (t.child = i),
      (i = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? yh(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = vh),
      i
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (i = Si(s, { mode: "visible", children: i.children })),
    (t.mode & 1) === 0 && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function Pd(e, t) {
  return (
    (t = tu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function za(e, t, n, i) {
  return (
    i !== null && cd(i),
    eo(t, e.child, null, n),
    (e = Pd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function T1(e, t, n, i, r, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (i = pc(Error(j(422)))), za(e, t, a, i))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = i.fallback),
        (r = t.mode),
        (i = tu({ mode: "visible", children: i.children }, r, 0, null)),
        (s = er(s, r, a, null)),
        (s.flags |= 2),
        (i.return = t),
        (s.return = t),
        (i.sibling = s),
        (t.child = i),
        (t.mode & 1) !== 0 && eo(t, e.child, null, a),
        (t.child.memoizedState = yh(a)),
        (t.memoizedState = vh),
        s);
  if ((t.mode & 1) === 0) return za(e, t, a, null);
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var u = i.dgst;
    return (i = u), (s = Error(j(419))), (i = pc(s, i, void 0)), za(e, t, a, i);
  }
  if (((u = (a & e.childLanes) !== 0), Ee || u)) {
    if (((i = ue), i !== null)) {
      switch (a & -a) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
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
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = (r & (i.suspendedLanes | a)) !== 0 ? 0 : r),
        r !== 0 &&
          r !== s.retryLane &&
          ((s.retryLane = r), Xn(e, r), fn(i, e, r, -1));
    }
    return Td(), (i = pc(Error(j(421)))), za(e, t, a, i);
  }
  return r.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = V1.bind(null, e)),
      (r._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ae = yi(r.nextSibling)),
      (Ie = t),
      (jt = !0),
      (cn = null),
      e !== null &&
        ((Ye[Ke++] = Vn),
        (Ye[Ke++] = Zn),
        (Ye[Ke++] = sr),
        (Vn = e.id),
        (Zn = e.overflow),
        (sr = t)),
      (t = Pd(t, i.children)),
      (t.flags |= 4096),
      t);
}
function om(e, t, n) {
  e.lanes |= t;
  var i = e.alternate;
  i !== null && (i.lanes |= t), dh(e.return, t, n);
}
function mc(e, t, n, i, r) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = i),
      (s.tail = n),
      (s.tailMode = r));
}
function zv(e, t, n) {
  var i = t.pendingProps,
    r = i.revealOrder,
    s = i.tail;
  if ((Se(e, t, i.children, n), (i = Zt.current), (i & 2) !== 0))
    (i = (i & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      t: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && om(e, n, t);
        else if (e.tag === 19) om(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break t;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break t;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    i &= 1;
  }
  if ((It(Zt, i), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = t.child, r = null; n !== null; )
          (e = n.alternate),
            e !== null && kl(e) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = t.child), (t.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          mc(t, !1, r, n, s);
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && kl(e) === null)) {
            t.child = r;
            break;
          }
          (e = r.sibling), (r.sibling = n), (n = r), (r = e);
        }
        mc(t, !0, n, null, s);
        break;
      case "together":
        mc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function rl(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Gn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (lr |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Si(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Si(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function O1(e, t, n) {
  switch (t.tag) {
    case 3:
      Dv(t), to();
      break;
    case 5:
      av(t);
      break;
    case 1:
      Oe(t.type) && yl(t);
      break;
    case 4:
      gd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var i = t.type._context,
        r = t.memoizedProps.value;
      It(bl, i._currentValue), (i._currentValue = r);
      break;
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (It(Zt, Zt.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? Rv(e, t, n)
          : (It(Zt, Zt.current & 1),
            (e = Gn(e, t, n)),
            e !== null ? e.sibling : null);
      It(Zt, Zt.current & 1);
      break;
    case 19:
      if (((i = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (i) return zv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((r = t.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        It(Zt, Zt.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Tv(e, t, n);
  }
  return Gn(e, t, n);
}
var Av, xh, Iv, Nv;
Av = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
xh = function () {};
Iv = function (e, t, n, i) {
  var r = e.memoizedProps;
  if (r !== i) {
    (e = t.stateNode), Qi(Mn.current);
    var s = null;
    switch (n) {
      case "input":
        (r = Hc(e, r)), (i = Hc(e, i)), (s = []);
        break;
      case "select":
        (r = $t({}, r, { value: void 0 })),
          (i = $t({}, i, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (r = Uc(e, r)), (i = Uc(e, i)), (s = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof i.onClick == "function" &&
          (e.onclick = _l);
    }
    Yc(n, i);
    var a;
    n = null;
    for (d in r)
      if (!i.hasOwnProperty(d) && r.hasOwnProperty(d) && r[d] != null)
        if (d === "style") {
          var u = r[d];
          for (a in u) u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (fs.hasOwnProperty(d)
              ? s || (s = [])
              : (s = s || []).push(d, null));
    for (d in i) {
      var c = i[d];
      if (
        ((u = r != null ? r[d] : void 0),
        i.hasOwnProperty(d) && c !== u && (c != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (a in u)
              !u.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                u[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (s || (s = []), s.push(d, n)), (n = c);
        else
          d === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (u = u ? u.__html : void 0),
              c != null && u !== c && (s = s || []).push(d, c))
            : d === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (s = s || []).push(d, "" + c)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (fs.hasOwnProperty(d)
                ? (c != null && d === "onScroll" && Nt("scroll", e),
                  s || u === c || (s = []))
                : (s = s || []).push(d, c));
    }
    n && (s = s || []).push("style", n);
    var d = s;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Nv = function (e, t, n, i) {
  n !== i && (t.flags |= 4);
};
function Ao(e, t) {
  if (!jt)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling);
        i === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (i.sibling = null);
    }
}
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    i = 0;
  if (t)
    for (var r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = e),
        (r = r.sibling);
  else
    for (r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = e),
        (r = r.sibling);
  return (e.subtreeFlags |= i), (e.childLanes = n), t;
}
function D1(e, t, n) {
  var i = t.pendingProps;
  switch ((ud(t), t.tag)) {
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
      return _e(t), null;
    case 1:
      return Oe(t.type) && vl(), _e(t), null;
    case 3:
      return (
        (i = t.stateNode),
        no(),
        Ft(Te),
        Ft(we),
        vd(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (Da(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), cn !== null && (Mh(cn), (cn = null)))),
        xh(e, t),
        _e(t),
        null
      );
    case 5:
      _d(t);
      var r = Qi(ks.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Iv(e, t, n, i, r),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(j(166));
          return _e(t), null;
        }
        if (((e = Qi(Mn.current)), Da(t))) {
          (i = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((i[kn] = t), (i[Ss] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Nt("cancel", i), Nt("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              Nt("load", i);
              break;
            case "video":
            case "audio":
              for (r = 0; r < Ko.length; r++) Nt(Ko[r], i);
              break;
            case "source":
              Nt("error", i);
              break;
            case "img":
            case "image":
            case "link":
              Nt("error", i), Nt("load", i);
              break;
            case "details":
              Nt("toggle", i);
              break;
            case "input":
              pp(i, s), Nt("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!s.multiple }),
                Nt("invalid", i);
              break;
            case "textarea":
              gp(i, s), Nt("invalid", i);
          }
          Yc(n, s), (r = null);
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var u = s[a];
              a === "children"
                ? typeof u == "string"
                  ? i.textContent !== u &&
                    (s.suppressHydrationWarning !== !0 &&
                      Oa(i.textContent, u, e),
                    (r = ["children", u]))
                  : typeof u == "number" &&
                    i.textContent !== "" + u &&
                    (s.suppressHydrationWarning !== !0 &&
                      Oa(i.textContent, u, e),
                    (r = ["children", "" + u]))
                : fs.hasOwnProperty(a) &&
                  u != null &&
                  a === "onScroll" &&
                  Nt("scroll", i);
            }
          switch (n) {
            case "input":
              Sa(i), mp(i, s, !0);
              break;
            case "textarea":
              Sa(i), _p(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (i.onclick = _l);
          }
          (i = r), (t.updateQueue = i), i !== null && (t.flags |= 4);
        } else {
          (a = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = c_(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof i.is == "string"
                ? (e = a.createElement(n, { is: i.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    i.multiple
                      ? (a.multiple = !0)
                      : i.size && (a.size = i.size)))
              : (e = a.createElementNS(e, n)),
            (e[kn] = t),
            (e[Ss] = i),
            Av(e, t, !1, !1),
            (t.stateNode = e);
          t: {
            switch (((a = Kc(n, i)), n)) {
              case "dialog":
                Nt("cancel", e), Nt("close", e), (r = i);
                break;
              case "iframe":
              case "object":
              case "embed":
                Nt("load", e), (r = i);
                break;
              case "video":
              case "audio":
                for (r = 0; r < Ko.length; r++) Nt(Ko[r], e);
                r = i;
                break;
              case "source":
                Nt("error", e), (r = i);
                break;
              case "img":
              case "image":
              case "link":
                Nt("error", e), Nt("load", e), (r = i);
                break;
              case "details":
                Nt("toggle", e), (r = i);
                break;
              case "input":
                pp(e, i), (r = Hc(e, i)), Nt("invalid", e);
                break;
              case "option":
                r = i;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = $t({}, i, { value: void 0 })),
                  Nt("invalid", e);
                break;
              case "textarea":
                gp(e, i), (r = Uc(e, i)), Nt("invalid", e);
                break;
              default:
                r = i;
            }
            Yc(n, r), (u = r);
            for (s in u)
              if (u.hasOwnProperty(s)) {
                var c = u[s];
                s === "style"
                  ? f_(e, c)
                  : s === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && h_(e, c))
                  : s === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && ps(e, c)
                    : typeof c == "number" && ps(e, "" + c)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (fs.hasOwnProperty(s)
                      ? c != null && s === "onScroll" && Nt("scroll", e)
                      : c != null && Kh(e, s, c, a));
              }
            switch (n) {
              case "input":
                Sa(e), mp(e, i, !1);
                break;
              case "textarea":
                Sa(e), _p(e);
                break;
              case "option":
                i.value != null && e.setAttribute("value", "" + ki(i.value));
                break;
              case "select":
                (e.multiple = !!i.multiple),
                  (s = i.value),
                  s != null
                    ? Zr(e, !!i.multiple, s, !1)
                    : i.defaultValue != null &&
                      Zr(e, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = _l);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
          }
          i && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) Nv(e, t, e.memoizedProps, i);
      else {
        if (typeof i != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = Qi(ks.current)), Qi(Mn.current), Da(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[kn] = t),
            (s = i.nodeValue !== n) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                Oa(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Oa(i.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[kn] = t),
            (t.stateNode = i);
      }
      return _e(t), null;
    case 13:
      if (
        (Ft(Zt),
        (i = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (jt && Ae !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          tv(), to(), (t.flags |= 98560), (s = !1);
        else if (((s = Da(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(j(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(j(317));
            s[kn] = t;
          } else
            to(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          _e(t), (s = !1);
        } else cn !== null && (Mh(cn), (cn = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((i = i !== null),
          i !== (e !== null && e.memoizedState !== null) &&
            i &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (Zt.current & 1) !== 0
                ? ie === 0 && (ie = 3)
                : Td())),
          t.updateQueue !== null && (t.flags |= 4),
          _e(t),
          null);
    case 4:
      return (
        no(), xh(e, t), e === null && ws(t.stateNode.containerInfo), _e(t), null
      );
    case 10:
      return fd(t.type._context), _e(t), null;
    case 17:
      return Oe(t.type) && vl(), _e(t), null;
    case 19:
      if ((Ft(Zt), (s = t.memoizedState), s === null)) return _e(t), null;
      if (((i = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (i) Ao(s, !1);
        else {
          if (ie !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((a = kl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Ao(s, !1),
                    i = a.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    i = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = i),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return It(Zt, (Zt.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Gt() > ro &&
            ((t.flags |= 128), (i = !0), Ao(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!i)
          if (((e = kl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ao(s, !0),
              s.tail === null && s.tailMode === "hidden" && !a.alternate && !jt)
            )
              return _e(t), null;
          } else
            2 * Gt() - s.renderingStartTime > ro &&
              n !== 1073741824 &&
              ((t.flags |= 128), (i = !0), Ao(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = s.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Gt()),
          (t.sibling = null),
          (n = Zt.current),
          It(Zt, i ? (n & 1) | 2 : n & 1),
          t)
        : (_e(t), null);
    case 22:
    case 23:
      return (
        Ed(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && (t.mode & 1) !== 0
          ? (ze & 1073741824) !== 0 &&
            (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function R1(e, t) {
  switch ((ud(t), t.tag)) {
    case 1:
      return (
        Oe(t.type) && vl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        no(),
        Ft(Te),
        Ft(we),
        vd(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return _d(t), null;
    case 13:
      if (
        (Ft(Zt), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        to();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ft(Zt), null;
    case 4:
      return no(), null;
    case 10:
      return fd(t.type._context), null;
    case 22:
    case 23:
      return Ed(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Aa = !1,
  ye = !1,
  z1 = typeof WeakSet == "function" ? WeakSet : Set,
  Y = null;
function Wr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        Yt(e, t, i);
      }
    else n.current = null;
}
function wh(e, t, n) {
  try {
    n();
  } catch (i) {
    Yt(e, t, i);
  }
}
var sm = !1;
function A1(e, t) {
  if (((rh = pl), (e = W_()), ad(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      t: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var r = i.anchorOffset,
            s = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break t;
          }
          var a = 0,
            u = -1,
            c = -1,
            d = 0,
            p = 0,
            g = e,
            m = null;
          e: for (;;) {
            for (
              var v;
              g !== n || (r !== 0 && g.nodeType !== 3) || (u = a + r),
                g !== s || (i !== 0 && g.nodeType !== 3) || (c = a + i),
                g.nodeType === 3 && (a += g.nodeValue.length),
                (v = g.firstChild) !== null;

            )
              (m = g), (g = v);
            for (;;) {
              if (g === e) break e;
              if (
                (m === n && ++d === r && (u = a),
                m === s && ++p === i && (c = a),
                (v = g.nextSibling) !== null)
              )
                break;
              (g = m), (m = g.parentNode);
            }
            g = v;
          }
          n = u === -1 || c === -1 ? null : { start: u, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (oh = { focusedElem: e, selectionRange: n }, pl = !1, Y = t; Y !== null; )
    if (((t = Y), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Y = e);
    else
      for (; Y !== null; ) {
        t = Y;
        try {
          var y = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var S = y.memoizedProps,
                    M = y.memoizedState,
                    w = t.stateNode,
                    b = w.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : an(t.type, S),
                      M
                    );
                  w.__reactInternalSnapshotBeforeUpdate = b;
                }
                break;
              case 3:
                var P = t.stateNode.containerInfo;
                P.nodeType === 1
                  ? (P.textContent = "")
                  : P.nodeType === 9 &&
                    P.documentElement &&
                    P.removeChild(P.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (C) {
          Yt(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Y = e);
          break;
        }
        Y = t.return;
      }
  return (y = sm), (sm = !1), y;
}
function rs(e, t, n) {
  var i = t.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & e) === e) {
        var s = r.destroy;
        (r.destroy = void 0), s !== void 0 && wh(t, n, s);
      }
      r = r.next;
    } while (r !== i);
  }
}
function ql(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Bv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[kn], delete t[Ss], delete t[lh], delete t[_1], delete t[v1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Fv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function am(e) {
  t: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Fv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue t;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sh(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = _l));
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Sh(e, t, n), e = e.sibling; e !== null; ) Sh(e, t, n), (e = e.sibling);
}
function Ph(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Ph(e, t, n), e = e.sibling; e !== null; ) Ph(e, t, n), (e = e.sibling);
}
var he = null,
  ln = !1;
function oi(e, t, n) {
  for (n = n.child; n !== null; ) jv(e, t, n), (n = n.sibling);
}
function jv(e, t, n) {
  if (Ln && typeof Ln.onCommitFiberUnmount == "function")
    try {
      Ln.onCommitFiberUnmount(Zl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ye || Wr(n, t);
    case 6:
      var i = he,
        r = ln;
      (he = null),
        oi(e, t, n),
        (he = i),
        (ln = r),
        he !== null &&
          (ln
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null &&
        (ln
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8
              ? lc(e.parentNode, n)
              : e.nodeType === 1 && lc(e, n),
            vs(e))
          : lc(he, n.stateNode));
      break;
    case 4:
      (i = he),
        (r = ln),
        (he = n.stateNode.containerInfo),
        (ln = !0),
        oi(e, t, n),
        (he = i),
        (ln = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ye &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        r = i = i.next;
        do {
          var s = r,
            a = s.destroy;
          (s = s.tag),
            a !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && wh(n, t, a),
            (r = r.next);
        } while (r !== i);
      }
      oi(e, t, n);
      break;
    case 1:
      if (
        !ye &&
        (Wr(n, t),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          (i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount();
        } catch (u) {
          Yt(n, t, u);
        }
      oi(e, t, n);
      break;
    case 21:
      oi(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ye = (i = ye) || n.memoizedState !== null), oi(e, t, n), (ye = i))
        : oi(e, t, n);
      break;
    default:
      oi(e, t, n);
  }
}
function lm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new z1()),
      t.forEach(function (i) {
        var r = Z1.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(r, r));
      });
  }
}
function sn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      try {
        var s = e,
          a = t,
          u = a;
        t: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (he = u.stateNode), (ln = !1);
              break t;
            case 3:
              (he = u.stateNode.containerInfo), (ln = !0);
              break t;
            case 4:
              (he = u.stateNode.containerInfo), (ln = !0);
              break t;
          }
          u = u.return;
        }
        if (he === null) throw Error(j(160));
        jv(s, a, r), (he = null), (ln = !1);
        var c = r.alternate;
        c !== null && (c.return = null), (r.return = null);
      } catch (d) {
        Yt(r, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Wv(t, e), (t = t.sibling);
}
function Wv(e, t) {
  var n = e.alternate,
    i = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((sn(t, e), bn(e), i & 4)) {
        try {
          rs(3, e, e.return), ql(3, e);
        } catch (S) {
          Yt(e, e.return, S);
        }
        try {
          rs(5, e, e.return);
        } catch (S) {
          Yt(e, e.return, S);
        }
      }
      break;
    case 1:
      sn(t, e), bn(e), i & 512 && n !== null && Wr(n, n.return);
      break;
    case 5:
      if (
        (sn(t, e),
        bn(e),
        i & 512 && n !== null && Wr(n, n.return),
        e.flags & 32)
      ) {
        var r = e.stateNode;
        try {
          ps(r, "");
        } catch (S) {
          Yt(e, e.return, S);
        }
      }
      if (i & 4 && ((r = e.stateNode), r != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          u = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            u === "input" && s.type === "radio" && s.name != null && l_(r, s),
              Kc(u, a);
            var d = Kc(u, s);
            for (a = 0; a < c.length; a += 2) {
              var p = c[a],
                g = c[a + 1];
              p === "style"
                ? f_(r, g)
                : p === "dangerouslySetInnerHTML"
                ? h_(r, g)
                : p === "children"
                ? ps(r, g)
                : Kh(r, p, g, d);
            }
            switch (u) {
              case "input":
                Vc(r, s);
                break;
              case "textarea":
                u_(r, s);
                break;
              case "select":
                var m = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? Zr(r, !!s.multiple, v, !1)
                  : m !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Zr(r, !!s.multiple, s.defaultValue, !0)
                      : Zr(r, !!s.multiple, s.multiple ? [] : "", !1));
            }
            r[Ss] = s;
          } catch (S) {
            Yt(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((sn(t, e), bn(e), i & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (r = e.stateNode), (s = e.memoizedProps);
        try {
          r.nodeValue = s;
        } catch (S) {
          Yt(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (sn(t, e), bn(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vs(t.containerInfo);
        } catch (S) {
          Yt(e, e.return, S);
        }
      break;
    case 4:
      sn(t, e), bn(e);
      break;
    case 13:
      sn(t, e),
        bn(e),
        (r = e.child),
        r.flags & 8192 &&
          ((s = r.memoizedState !== null),
          (r.stateNode.isHidden = s),
          !s ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (Ld = Gt())),
        i & 4 && lm(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ye = (d = ye) || p), sn(t, e), (ye = d)) : sn(t, e),
        bn(e),
        i & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !p && (e.mode & 1) !== 0)
        )
          for (Y = e, p = e.child; p !== null; ) {
            for (g = Y = p; Y !== null; ) {
              switch (((m = Y), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rs(4, m, m.return);
                  break;
                case 1:
                  Wr(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (i = m), (n = m.return);
                    try {
                      (t = i),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (S) {
                      Yt(i, n, S);
                    }
                  }
                  break;
                case 5:
                  Wr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    cm(g);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (Y = v)) : cm(g);
            }
            p = p.sibling;
          }
        t: for (p = null, g = e; ; ) {
          if (g.tag === 5) {
            if (p === null) {
              p = g;
              try {
                (r = g.stateNode),
                  d
                    ? ((s = r.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((u = g.stateNode),
                      (c = g.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (u.style.display = d_("display", a)));
              } catch (S) {
                Yt(e, e.return, S);
              }
            }
          } else if (g.tag === 6) {
            if (p === null)
              try {
                g.stateNode.nodeValue = d ? "" : g.memoizedProps;
              } catch (S) {
                Yt(e, e.return, S);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break t;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break t;
            p === g && (p = null), (g = g.return);
          }
          p === g && (p = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      sn(t, e), bn(e), i & 4 && lm(e);
      break;
    case 21:
      break;
    default:
      sn(t, e), bn(e);
  }
}
function bn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      t: {
        for (var n = e.return; n !== null; ) {
          if (Fv(n)) {
            var i = n;
            break t;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode;
          i.flags & 32 && (ps(r, ""), (i.flags &= -33));
          var s = am(e);
          Ph(e, s, r);
          break;
        case 3:
        case 4:
          var a = i.stateNode.containerInfo,
            u = am(e);
          Sh(e, u, a);
          break;
        default:
          throw Error(j(161));
      }
    } catch (c) {
      Yt(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function I1(e, t, n) {
  (Y = e), Hv(e);
}
function Hv(e, t, n) {
  for (var i = (e.mode & 1) !== 0; Y !== null; ) {
    var r = Y,
      s = r.child;
    if (r.tag === 22 && i) {
      var a = r.memoizedState !== null || Aa;
      if (!a) {
        var u = r.alternate,
          c = (u !== null && u.memoizedState !== null) || ye;
        u = Aa;
        var d = ye;
        if (((Aa = a), (ye = c) && !d))
          for (Y = r; Y !== null; )
            (a = Y),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? hm(r)
                : c !== null
                ? ((c.return = a), (Y = c))
                : hm(r);
        for (; s !== null; ) (Y = s), Hv(s), (s = s.sibling);
        (Y = r), (Aa = u), (ye = d);
      }
      um(e);
    } else
      (r.subtreeFlags & 8772) !== 0 && s !== null
        ? ((s.return = r), (Y = s))
        : um(e);
  }
}
function um(e) {
  for (; Y !== null; ) {
    var t = Y;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || ql(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !ye)
                if (n === null) i.componentDidMount();
                else {
                  var r =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : an(t.type, n.memoizedProps);
                  i.componentDidUpdate(
                    r,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && $p(t, s, i);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                $p(t, a, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
                var d = t.alternate;
                if (d !== null) {
                  var p = d.memoizedState;
                  if (p !== null) {
                    var g = p.dehydrated;
                    g !== null && vs(g);
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
              throw Error(j(163));
          }
        ye || (t.flags & 512 && bh(t));
      } catch (m) {
        Yt(t, t.return, m);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function cm(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function hm(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ql(4, t);
          } catch (c) {
            Yt(t, n, c);
          }
          break;
        case 1:
          var i = t.stateNode;
          if (typeof i.componentDidMount == "function") {
            var r = t.return;
            try {
              i.componentDidMount();
            } catch (c) {
              Yt(t, r, c);
            }
          }
          var s = t.return;
          try {
            bh(t);
          } catch (c) {
            Yt(t, s, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            bh(t);
          } catch (c) {
            Yt(t, a, c);
          }
      }
    } catch (c) {
      Yt(t, t.return, c);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (Y = u);
      break;
    }
    Y = t.return;
  }
}
var N1 = Math.ceil,
  Ml = Qn.ReactCurrentDispatcher,
  kd = Qn.ReactCurrentOwner,
  qe = Qn.ReactCurrentBatchConfig,
  yt = 0,
  ue = null,
  te = null,
  fe = 0,
  ze = 0,
  Hr = Ti(0),
  ie = 0,
  Es = null,
  lr = 0,
  Jl = 0,
  Cd = 0,
  os = null,
  Le = null,
  Ld = 0,
  ro = 1 / 0,
  jn = null,
  El = !1,
  kh = null,
  wi = null,
  Ia = !1,
  di = null,
  Tl = 0,
  ss = 0,
  Ch = null,
  ol = -1,
  sl = 0;
function Pe() {
  return (yt & 6) !== 0 ? Gt() : ol !== -1 ? ol : (ol = Gt());
}
function bi(e) {
  return (e.mode & 1) === 0
    ? 1
    : (yt & 2) !== 0 && fe !== 0
    ? fe & -fe
    : x1.transition !== null
    ? (sl === 0 && (sl = k_()), sl)
    : ((e = Tt),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : D_(e.type))),
      e);
}
function fn(e, t, n, i) {
  if (50 < ss) throw ((ss = 0), (Ch = null), Error(j(185)));
  Bs(e, n, i),
    ((yt & 2) === 0 || e !== ue) &&
      (e === ue && ((yt & 2) === 0 && (Jl |= n), ie === 4 && ci(e, fe)),
      De(e, i),
      n === 1 &&
        yt === 0 &&
        (t.mode & 1) === 0 &&
        ((ro = Gt() + 500), Xl && Oi()));
}
function De(e, t) {
  var n = e.callbackNode;
  xw(e, t);
  var i = fl(e, e === ue ? fe : 0);
  if (i === 0)
    n !== null && xp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && xp(n), t === 1))
      e.tag === 0 ? y1(dm.bind(null, e)) : Q_(dm.bind(null, e)),
        m1(function () {
          (yt & 6) === 0 && Oi();
        }),
        (n = null);
    else {
      switch (C_(i)) {
        case 1:
          n = Jh;
          break;
        case 4:
          n = S_;
          break;
        case 16:
          n = dl;
          break;
        case 536870912:
          n = P_;
          break;
        default:
          n = dl;
      }
      n = Gv(n, Vv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Vv(e, t) {
  if (((ol = -1), (sl = 0), (yt & 6) !== 0)) throw Error(j(327));
  var n = e.callbackNode;
  if (Xr() && e.callbackNode !== n) return null;
  var i = fl(e, e === ue ? fe : 0);
  if (i === 0) return null;
  if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = Ol(e, i);
  else {
    t = i;
    var r = yt;
    yt |= 2;
    var s = Uv();
    (ue !== e || fe !== t) && ((jn = null), (ro = Gt() + 500), tr(e, t));
    do
      try {
        j1();
        break;
      } catch (u) {
        Zv(e, u);
      }
    while (1);
    dd(),
      (Ml.current = s),
      (yt = r),
      te !== null ? (t = 0) : ((ue = null), (fe = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((r = Jc(e)), r !== 0 && ((i = r), (t = Lh(e, r)))), t === 1)
    )
      throw ((n = Es), tr(e, 0), ci(e, i), De(e, Gt()), n);
    if (t === 6) ci(e, i);
    else {
      if (
        ((r = e.current.alternate),
        (i & 30) === 0 &&
          !B1(r) &&
          ((t = Ol(e, i)),
          t === 2 && ((s = Jc(e)), s !== 0 && ((i = s), (t = Lh(e, s)))),
          t === 1))
      )
        throw ((n = Es), tr(e, 0), ci(e, i), De(e, Gt()), n);
      switch (((e.finishedWork = r), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          $i(e, Le, jn);
          break;
        case 3:
          if (
            (ci(e, i), (i & 130023424) === i && ((t = Ld + 500 - Gt()), 10 < t))
          ) {
            if (fl(e, 0) !== 0) break;
            if (((r = e.suspendedLanes), (r & i) !== i)) {
              Pe(), (e.pingedLanes |= e.suspendedLanes & r);
              break;
            }
            e.timeoutHandle = ah($i.bind(null, e, Le, jn), t);
            break;
          }
          $i(e, Le, jn);
          break;
        case 4:
          if ((ci(e, i), (i & 4194240) === i)) break;
          for (t = e.eventTimes, r = -1; 0 < i; ) {
            var a = 31 - dn(i);
            (s = 1 << a), (a = t[a]), a > r && (r = a), (i &= ~s);
          }
          if (
            ((i = r),
            (i = Gt() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                ? 480
                : 1080 > i
                ? 1080
                : 1920 > i
                ? 1920
                : 3e3 > i
                ? 3e3
                : 4320 > i
                ? 4320
                : 1960 * N1(i / 1960)) - i),
            10 < i)
          ) {
            e.timeoutHandle = ah($i.bind(null, e, Le, jn), i);
            break;
          }
          $i(e, Le, jn);
          break;
        case 5:
          $i(e, Le, jn);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return De(e, Gt()), e.callbackNode === n ? Vv.bind(null, e) : null;
}
function Lh(e, t) {
  var n = os;
  return (
    e.current.memoizedState.isDehydrated && (tr(e, t).flags |= 256),
    (e = Ol(e, t)),
    e !== 2 && ((t = Le), (Le = n), t !== null && Mh(t)),
    e
  );
}
function Mh(e) {
  Le === null ? (Le = e) : Le.push.apply(Le, e);
}
function B1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!pn(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
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
function ci(e, t) {
  for (
    t &= ~Cd,
      t &= ~Jl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - dn(t),
      i = 1 << n;
    (e[n] = -1), (t &= ~i);
  }
}
function dm(e) {
  if ((yt & 6) !== 0) throw Error(j(327));
  Xr();
  var t = fl(e, 0);
  if ((t & 1) === 0) return De(e, Gt()), null;
  var n = Ol(e, t);
  if (e.tag !== 0 && n === 2) {
    var i = Jc(e);
    i !== 0 && ((t = i), (n = Lh(e, i)));
  }
  if (n === 1) throw ((n = Es), tr(e, 0), ci(e, t), De(e, Gt()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $i(e, Le, jn),
    De(e, Gt()),
    null
  );
}
function Md(e, t) {
  var n = yt;
  yt |= 1;
  try {
    return e(t);
  } finally {
    (yt = n), yt === 0 && ((ro = Gt() + 500), Xl && Oi());
  }
}
function ur(e) {
  di !== null && di.tag === 0 && (yt & 6) === 0 && Xr();
  var t = yt;
  yt |= 1;
  var n = qe.transition,
    i = Tt;
  try {
    if (((qe.transition = null), (Tt = 1), e)) return e();
  } finally {
    (Tt = i), (qe.transition = n), (yt = t), (yt & 6) === 0 && Oi();
  }
}
function Ed() {
  (ze = Hr.current), Ft(Hr);
}
function tr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), p1(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var i = n;
      switch ((ud(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && vl();
          break;
        case 3:
          no(), Ft(Te), Ft(we), vd();
          break;
        case 5:
          _d(i);
          break;
        case 4:
          no();
          break;
        case 13:
          Ft(Zt);
          break;
        case 19:
          Ft(Zt);
          break;
        case 10:
          fd(i.type._context);
          break;
        case 22:
        case 23:
          Ed();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (te = e = Si(e.current, null)),
    (fe = ze = t),
    (ie = 0),
    (Es = null),
    (Cd = Jl = lr = 0),
    (Le = os = null),
    Gi !== null)
  ) {
    for (t = 0; t < Gi.length; t++)
      if (((n = Gi[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          (s.next = r), (i.next = a);
        }
        n.pending = i;
      }
    Gi = null;
  }
  return e;
}
function Zv(e, t) {
  do {
    var n = te;
    try {
      if ((dd(), (nl.current = Ll), Cl)) {
        for (var i = Ut.memoizedState; i !== null; ) {
          var r = i.queue;
          r !== null && (r.pending = null), (i = i.next);
        }
        Cl = !1;
      }
      if (
        ((ar = 0),
        (le = ne = Ut = null),
        (is = !1),
        (Cs = 0),
        (kd.current = null),
        n === null || n.return === null)
      ) {
        (ie = 1), (Es = t), (te = null);
        break;
      }
      t: {
        var s = e,
          a = n.return,
          u = n,
          c = t;
        if (
          ((t = fe),
          (u.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var d = c,
            p = u,
            g = p.tag;
          if ((p.mode & 1) === 0 && (g === 0 || g === 11 || g === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = Jp(a);
          if (v !== null) {
            (v.flags &= -257),
              tm(v, a, u, s, t),
              v.mode & 1 && qp(s, d, t),
              (t = v),
              (c = d);
            var y = t.updateQueue;
            if (y === null) {
              var S = new Set();
              S.add(c), (t.updateQueue = S);
            } else y.add(c);
            break t;
          } else {
            if ((t & 1) === 0) {
              qp(s, d, t), Td();
              break t;
            }
            c = Error(j(426));
          }
        } else if (jt && u.mode & 1) {
          var M = Jp(a);
          if (M !== null) {
            (M.flags & 65536) === 0 && (M.flags |= 256),
              tm(M, a, u, s, t),
              cd(io(c, u));
            break t;
          }
        }
        (s = c = io(c, u)),
          ie !== 4 && (ie = 2),
          os === null ? (os = [s]) : os.push(s),
          (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var w = Lv(s, c, t);
              Up(s, w);
              break t;
            case 1:
              u = c;
              var b = s.type,
                P = s.stateNode;
              if (
                (s.flags & 128) === 0 &&
                (typeof b.getDerivedStateFromError == "function" ||
                  (P !== null &&
                    typeof P.componentDidCatch == "function" &&
                    (wi === null || !wi.has(P))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var C = Mv(s, u, t);
                Up(s, C);
                break t;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Yv(n);
    } catch (E) {
      (t = E), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Uv() {
  var e = Ml.current;
  return (Ml.current = Ll), e === null ? Ll : e;
}
function Td() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    ue === null ||
      ((lr & 268435455) === 0 && (Jl & 268435455) === 0) ||
      ci(ue, fe);
}
function Ol(e, t) {
  var n = yt;
  yt |= 2;
  var i = Uv();
  (ue !== e || fe !== t) && ((jn = null), tr(e, t));
  do
    try {
      F1();
      break;
    } catch (r) {
      Zv(e, r);
    }
  while (1);
  if ((dd(), (yt = n), (Ml.current = i), te !== null)) throw Error(j(261));
  return (ue = null), (fe = 0), ie;
}
function F1() {
  for (; te !== null; ) $v(te);
}
function j1() {
  for (; te !== null && !hw(); ) $v(te);
}
function $v(e) {
  var t = Xv(e.alternate, e, ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? Yv(e) : (te = t),
    (kd.current = null);
}
function Yv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = D1(n, t, ze)), n !== null)) {
        te = n;
        return;
      }
    } else {
      if (((n = R1(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (te = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function $i(e, t, n) {
  var i = Tt,
    r = qe.transition;
  try {
    (qe.transition = null), (Tt = 1), W1(e, t, n, i);
  } finally {
    (qe.transition = r), (Tt = i);
  }
  return null;
}
function W1(e, t, n, i) {
  do Xr();
  while (di !== null);
  if ((yt & 6) !== 0) throw Error(j(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (ww(e, s),
    e === ue && ((te = ue = null), (fe = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Ia ||
      ((Ia = !0),
      Gv(dl, function () {
        return Xr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || s)
  ) {
    (s = qe.transition), (qe.transition = null);
    var a = Tt;
    Tt = 1;
    var u = yt;
    (yt |= 4),
      (kd.current = null),
      A1(e, n),
      Wv(n, e),
      a1(oh),
      (pl = !!rh),
      (oh = rh = null),
      (e.current = n),
      I1(n),
      dw(),
      (yt = u),
      (Tt = a),
      (qe.transition = s);
  } else e.current = n;
  if (
    (Ia && ((Ia = !1), (di = e), (Tl = r)),
    (s = e.pendingLanes),
    s === 0 && (wi = null),
    mw(n.stateNode),
    De(e, Gt()),
    t !== null)
  )
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      (r = t[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
  if (El) throw ((El = !1), (e = kh), (kh = null), e);
  return (
    (Tl & 1) !== 0 && e.tag !== 0 && Xr(),
    (s = e.pendingLanes),
    (s & 1) !== 0 ? (e === Ch ? ss++ : ((ss = 0), (Ch = e))) : (ss = 0),
    Oi(),
    null
  );
}
function Xr() {
  if (di !== null) {
    var e = C_(Tl),
      t = qe.transition,
      n = Tt;
    try {
      if (((qe.transition = null), (Tt = 16 > e ? 16 : e), di === null))
        var i = !1;
      else {
        if (((e = di), (di = null), (Tl = 0), (yt & 6) !== 0))
          throw Error(j(331));
        var r = yt;
        for (yt |= 4, Y = e.current; Y !== null; ) {
          var s = Y,
            a = s.child;
          if ((Y.flags & 16) !== 0) {
            var u = s.deletions;
            if (u !== null) {
              for (var c = 0; c < u.length; c++) {
                var d = u[c];
                for (Y = d; Y !== null; ) {
                  var p = Y;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rs(8, p, s);
                  }
                  var g = p.child;
                  if (g !== null) (g.return = p), (Y = g);
                  else
                    for (; Y !== null; ) {
                      p = Y;
                      var m = p.sibling,
                        v = p.return;
                      if ((Bv(p), p === d)) {
                        Y = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (Y = m);
                        break;
                      }
                      Y = v;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var S = y.child;
                if (S !== null) {
                  y.child = null;
                  do {
                    var M = S.sibling;
                    (S.sibling = null), (S = M);
                  } while (S !== null);
                }
              }
              Y = s;
            }
          }
          if ((s.subtreeFlags & 2064) !== 0 && a !== null)
            (a.return = s), (Y = a);
          else
            t: for (; Y !== null; ) {
              if (((s = Y), (s.flags & 2048) !== 0))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rs(9, s, s.return);
                }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (Y = w);
                break t;
              }
              Y = s.return;
            }
        }
        var b = e.current;
        for (Y = b; Y !== null; ) {
          a = Y;
          var P = a.child;
          if ((a.subtreeFlags & 2064) !== 0 && P !== null)
            (P.return = a), (Y = P);
          else
            t: for (a = b; Y !== null; ) {
              if (((u = Y), (u.flags & 2048) !== 0))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ql(9, u);
                  }
                } catch (E) {
                  Yt(u, u.return, E);
                }
              if (u === a) {
                Y = null;
                break t;
              }
              var C = u.sibling;
              if (C !== null) {
                (C.return = u.return), (Y = C);
                break t;
              }
              Y = u.return;
            }
        }
        if (
          ((yt = r), Oi(), Ln && typeof Ln.onPostCommitFiberRoot == "function")
        )
          try {
            Ln.onPostCommitFiberRoot(Zl, e);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (Tt = n), (qe.transition = t);
    }
  }
  return !1;
}
function fm(e, t, n) {
  (t = io(n, t)),
    (t = Lv(e, t, 1)),
    (e = xi(e, t, 1)),
    (t = Pe()),
    e !== null && (Bs(e, 1, t), De(e, t));
}
function Yt(e, t, n) {
  if (e.tag === 3) fm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        fm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (wi === null || !wi.has(i)))
        ) {
          (e = io(n, e)),
            (e = Mv(t, e, 1)),
            (t = xi(t, e, 1)),
            (e = Pe()),
            t !== null && (Bs(t, 1, e), De(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function H1(e, t, n) {
  var i = e.pingCache;
  i !== null && i.delete(t),
    (t = Pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (fe & n) === n &&
      (ie === 4 || (ie === 3 && (fe & 130023424) === fe && 500 > Gt() - Ld)
        ? tr(e, 0)
        : (Cd |= n)),
    De(e, t);
}
function Kv(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = Ca), (Ca <<= 1), (Ca & 130023424) === 0 && (Ca = 4194304)));
  var n = Pe();
  (e = Xn(e, t)), e !== null && (Bs(e, t, n), De(e, n));
}
function V1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Kv(e, n);
}
function Z1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var i = e.stateNode,
        r = e.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      i = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  i !== null && i.delete(t), Kv(e, n);
}
var Xv;
Xv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Ee = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (Ee = !1), O1(e, t, n);
      Ee = (e.flags & 131072) !== 0;
    }
  else (Ee = !1), jt && (t.flags & 1048576) !== 0 && q_(t, wl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type;
      rl(e, t), (e = t.pendingProps);
      var r = Jr(t, we.current);
      Kr(t, n), (r = xd(null, t, i, e, r, n));
      var s = wd();
      return (
        (t.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oe(i) ? ((s = !0), yl(t)) : (s = !1),
            (t.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            md(t),
            (r.updater = Gl),
            (t.stateNode = r),
            (r._reactInternals = t),
            ph(t, i, e, n),
            (t = _h(null, t, i, !0, s, n)))
          : ((t.tag = 0), jt && s && ld(t), Se(null, t, r, n), (t = t.child)),
        t
      );
    case 16:
      i = t.elementType;
      t: {
        switch (
          (rl(e, t),
          (e = t.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (t.type = i),
          (r = t.tag = $1(i)),
          (e = an(i, e)),
          r)
        ) {
          case 0:
            t = gh(null, t, i, e, n);
            break t;
          case 1:
            t = im(null, t, i, e, n);
            break t;
          case 11:
            t = em(null, t, i, e, n);
            break t;
          case 14:
            t = nm(null, t, i, an(i.type, e), n);
            break t;
        }
        throw Error(j(306, i, ""));
      }
      return t;
    case 0:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : an(i, r)),
        gh(e, t, i, r, n)
      );
    case 1:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : an(i, r)),
        im(e, t, i, r, n)
      );
    case 3:
      t: {
        if ((Dv(t), e === null)) throw Error(j(387));
        (i = t.pendingProps),
          (s = t.memoizedState),
          (r = s.element),
          nv(e, t),
          Pl(t, i, null, n);
        var a = t.memoizedState;
        if (((i = a.element), s.isDehydrated))
          if (
            ((s = {
              element: i,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (r = io(Error(j(423)), t)), (t = rm(e, t, i, n, r));
            break t;
          } else if (i !== r) {
            (r = io(Error(j(424)), t)), (t = rm(e, t, i, n, r));
            break t;
          } else
            for (
              Ae = yi(t.stateNode.containerInfo.firstChild),
                Ie = t,
                jt = !0,
                cn = null,
                n = sv(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((to(), i === r)) {
            t = Gn(e, t, n);
            break t;
          }
          Se(e, t, i, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        av(t),
        e === null && hh(t),
        (i = t.type),
        (r = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = r.children),
        sh(i, r) ? (a = null) : s !== null && sh(i, s) && (t.flags |= 32),
        Ov(e, t),
        Se(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && hh(t), null;
    case 13:
      return Rv(e, t, n);
    case 4:
      return (
        gd(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = eo(t, null, i, n)) : Se(e, t, i, n),
        t.child
      );
    case 11:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : an(i, r)),
        em(e, t, i, r, n)
      );
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      t: {
        if (
          ((i = t.type._context),
          (r = t.pendingProps),
          (s = t.memoizedProps),
          (a = r.value),
          It(bl, i._currentValue),
          (i._currentValue = a),
          s !== null)
        )
          if (pn(s.value, a)) {
            if (s.children === r.children && !Te.current) {
              t = Gn(e, t, n);
              break t;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var u = s.dependencies;
              if (u !== null) {
                a = s.child;
                for (var c = u.firstContext; c !== null; ) {
                  if (c.context === i) {
                    if (s.tag === 1) {
                      (c = Un(-1, n & -n)), (c.tag = 2);
                      var d = s.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var p = d.pending;
                        p === null
                          ? (c.next = c)
                          : ((c.next = p.next), (p.next = c)),
                          (d.pending = c);
                      }
                    }
                    (s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      dh(s.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(j(341));
                (a.lanes |= n),
                  (u = a.alternate),
                  u !== null && (u.lanes |= n),
                  dh(a, n, t),
                  (a = s.sibling);
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    (s.return = a.return), (a = s);
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        Se(e, t, r.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (r = t.type),
        (i = t.pendingProps.children),
        Kr(t, n),
        (r = Je(r)),
        (i = i(r)),
        (t.flags |= 1),
        Se(e, t, i, n),
        t.child
      );
    case 14:
      return (
        (i = t.type),
        (r = an(i, t.pendingProps)),
        (r = an(i.type, r)),
        nm(e, t, i, r, n)
      );
    case 15:
      return Ev(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : an(i, r)),
        rl(e, t),
        (t.tag = 1),
        Oe(i) ? ((e = !0), yl(t)) : (e = !1),
        Kr(t, n),
        rv(t, i, r),
        ph(t, i, r, n),
        _h(null, t, i, !0, e, n)
      );
    case 19:
      return zv(e, t, n);
    case 22:
      return Tv(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Gv(e, t) {
  return b_(e, t);
}
function U1(e, t, n, i) {
  (this.tag = e),
    (this.key = n),
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
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ge(e, t, n, i) {
  return new U1(e, t, n, i);
}
function Od(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $1(e) {
  if (typeof e == "function") return Od(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Gh)) return 11;
    if (e === Qh) return 14;
  }
  return 2;
}
function Si(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ge(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function al(e, t, n, i, r, s) {
  var a = 2;
  if (((i = e), typeof e == "function")) Od(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    t: switch (e) {
      case Dr:
        return er(n.children, r, s, t);
      case Xh:
        (a = 8), (r |= 8);
        break;
      case Bc:
        return (
          (e = Ge(12, n, t, r | 2)), (e.elementType = Bc), (e.lanes = s), e
        );
      case Fc:
        return (e = Ge(13, n, t, r)), (e.elementType = Fc), (e.lanes = s), e;
      case jc:
        return (e = Ge(19, n, t, r)), (e.elementType = jc), (e.lanes = s), e;
      case o_:
        return tu(n, r, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case i_:
              a = 10;
              break t;
            case r_:
              a = 9;
              break t;
            case Gh:
              a = 11;
              break t;
            case Qh:
              a = 14;
              break t;
            case ai:
              (a = 16), (i = null);
              break t;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ge(a, n, t, r)), (t.elementType = e), (t.type = i), (t.lanes = s), t
  );
}
function er(e, t, n, i) {
  return (e = Ge(7, e, i, t)), (e.lanes = n), e;
}
function tu(e, t, n, i) {
  return (
    (e = Ge(22, e, i, t)),
    (e.elementType = o_),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function gc(e, t, n) {
  return (e = Ge(6, e, null, t)), (e.lanes = n), e;
}
function _c(e, t, n) {
  return (
    (t = Ge(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Y1(e, t, n, i, r) {
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
    (this.eventTimes = Qu(0)),
    (this.expirationTimes = Qu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qu(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function Dd(e, t, n, i, r, s, a, u, c) {
  return (
    (e = new Y1(e, t, n, u, c)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ge(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    md(s),
    e
  );
}
function K1(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Or,
    key: i == null ? null : "" + i,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qv(e) {
  if (!e) return Ci;
  e = e._reactInternals;
  t: {
    if (fr(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break t;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break t;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return G_(e, n, t);
  }
  return t;
}
function qv(e, t, n, i, r, s, a, u, c) {
  return (
    (e = Dd(n, i, !0, e, r, s, a, u, c)),
    (e.context = Qv(null)),
    (n = e.current),
    (i = Pe()),
    (r = bi(n)),
    (s = Un(i, r)),
    (s.callback = t != null ? t : null),
    xi(n, s, r),
    (e.current.lanes = r),
    Bs(e, r, i),
    De(e, i),
    e
  );
}
function eu(e, t, n, i) {
  var r = t.current,
    s = Pe(),
    a = bi(r);
  return (
    (n = Qv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Un(s, a)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    (e = xi(r, t, a)),
    e !== null && (fn(e, r, a, s), el(e, r, a)),
    a
  );
}
function Dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Rd(e, t) {
  pm(e, t), (e = e.alternate) && pm(e, t);
}
function X1() {
  return null;
}
var Jv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function zd(e) {
  this._internalRoot = e;
}
nu.prototype.render = zd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  eu(e, t, null, null);
};
nu.prototype.unmount = zd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ur(function () {
      eu(null, e, null, null);
    }),
      (t[Kn] = null);
  }
};
function nu(e) {
  this._internalRoot = e;
}
nu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = E_();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ui.length && t !== 0 && t < ui[n].priority; n++);
    ui.splice(n, 0, e), n === 0 && O_(e);
  }
};
function Ad(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function iu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function mm() {}
function G1(e, t, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var d = Dl(a);
        s.call(d);
      };
    }
    var a = qv(t, i, e, 0, null, !1, !1, "", mm);
    return (
      (e._reactRootContainer = a),
      (e[Kn] = a.current),
      ws(e.nodeType === 8 ? e.parentNode : e),
      ur(),
      a
    );
  }
  for (; (r = e.lastChild); ) e.removeChild(r);
  if (typeof i == "function") {
    var u = i;
    i = function () {
      var d = Dl(c);
      u.call(d);
    };
  }
  var c = Dd(e, 0, !1, null, null, !1, !1, "", mm);
  return (
    (e._reactRootContainer = c),
    (e[Kn] = c.current),
    ws(e.nodeType === 8 ? e.parentNode : e),
    ur(function () {
      eu(t, c, n, i);
    }),
    c
  );
}
function ru(e, t, n, i, r) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var c = Dl(a);
        u.call(c);
      };
    }
    eu(t, a, e, r);
  } else a = G1(n, t, e, r, i);
  return Dl(a);
}
L_ = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Yo(t.pendingLanes);
        n !== 0 &&
          (td(t, n | 1),
          De(t, Gt()),
          (yt & 6) === 0 && ((ro = Gt() + 500), Oi()));
      }
      break;
    case 13:
      ur(function () {
        var i = Xn(e, 1);
        if (i !== null) {
          var r = Pe();
          fn(i, e, 1, r);
        }
      }),
        Rd(e, 1);
  }
};
ed = function (e) {
  if (e.tag === 13) {
    var t = Xn(e, 134217728);
    if (t !== null) {
      var n = Pe();
      fn(t, e, 134217728, n);
    }
    Rd(e, 134217728);
  }
};
M_ = function (e) {
  if (e.tag === 13) {
    var t = bi(e),
      n = Xn(e, t);
    if (n !== null) {
      var i = Pe();
      fn(n, e, t, i);
    }
    Rd(e, t);
  }
};
E_ = function () {
  return Tt;
};
T_ = function (e, t) {
  var n = Tt;
  try {
    return (Tt = e), t();
  } finally {
    Tt = n;
  }
};
Gc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Vc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var i = n[t];
          if (i !== e && i.form === e.form) {
            var r = Kl(i);
            if (!r) throw Error(j(90));
            a_(i), Vc(i, r);
          }
        }
      }
      break;
    case "textarea":
      u_(e, n);
      break;
    case "select":
      (t = n.value), t != null && Zr(e, !!n.multiple, t, !1);
  }
};
g_ = Md;
__ = ur;
var Q1 = { usingClientEntryPoint: !1, Events: [js, Ir, Kl, p_, m_, Md] },
  Io = {
    findFiberByHostInstance: Xi,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  q1 = {
    bundleType: Io.bundleType,
    version: Io.version,
    rendererPackageName: Io.rendererPackageName,
    rendererConfig: Io.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = x_(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Io.findFiberByHostInstance || X1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Na.isDisabled && Na.supportsFiber)
    try {
      (Zl = Na.inject(q1)), (Ln = Na);
    } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q1;
Be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ad(t)) throw Error(j(200));
  return K1(e, t, null, n);
};
Be.createRoot = function (e, t) {
  if (!Ad(e)) throw Error(j(299));
  var n = !1,
    i = "",
    r = Jv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = Dd(e, 1, !1, null, null, n, !1, i, r)),
    (e[Kn] = t.current),
    ws(e.nodeType === 8 ? e.parentNode : e),
    new zd(t)
  );
};
Be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = x_(t)), (e = e === null ? null : e.stateNode), e;
};
Be.flushSync = function (e) {
  return ur(e);
};
Be.hydrate = function (e, t, n) {
  if (!iu(t)) throw Error(j(200));
  return ru(null, e, t, !0, n);
};
Be.hydrateRoot = function (e, t, n) {
  if (!Ad(e)) throw Error(j(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    s = "",
    a = Jv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = qv(t, null, e, 1, n != null ? n : null, r, !1, s, a)),
    (e[Kn] = t.current),
    ws(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      (n = i[e]),
        (r = n._getVersion),
        (r = r(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, r])
          : t.mutableSourceEagerHydrationData.push(n, r);
  return new nu(t);
};
Be.render = function (e, t, n) {
  if (!iu(t)) throw Error(j(200));
  return ru(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function (e) {
  if (!iu(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (ur(function () {
        ru(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Kn] = null);
        });
      }),
      !0)
    : !1;
};
Be.unstable_batchedUpdates = Md;
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!iu(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return ru(e, t, n, !1, i);
};
Be.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Be);
})(Uh);
var gm = Uh.exports;
(Ic.createRoot = gm.createRoot), (Ic.hydrateRoot = gm.hydrateRoot);
const Hs = A.exports.createContext(void 0),
  J1 = Hs.Provider,
  Vs = (e) => {
    const [t, n] = A.exports.useState(!1),
      [i, r] = A.exports.useState(void 0),
      [s, a] = A.exports.useState(void 0),
      [u, c] = A.exports.useState(void 0);
    return [
      A.exports.useCallback(async () => {
        t || n(!0), r(!0), a(void 0), c(void 0);
        try {
          const g = await (await fetch(`/data/${e}`)).json();
          r(!1), c(g);
        } catch (p) {
          console.error(p), r(!1), a(p);
        }
      }, [e, t]),
      { called: t, loading: i, error: s, data: u },
    ];
  };
/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vt() {
  return (
    (Vt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    Vt.apply(this, arguments)
  );
}
var ee;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ee || (ee = {}));
const _m = "popstate";
function tb(e) {
  e === void 0 && (e = {});
  function t(i, r) {
    let { pathname: s, search: a, hash: u } = i.location;
    return nr(
      "",
      { pathname: s, search: a, hash: u },
      (r.state && r.state.usr) || null,
      (r.state && r.state.key) || "default"
    );
  }
  function n(i, r) {
    return typeof r == "string" ? r : mn(r);
  }
  return nb(t, n, null, e);
}
function eb() {
  return Math.random().toString(36).substr(2, 8);
}
function vm(e) {
  return { usr: e.state, key: e.key };
}
function nr(e, t, n, i) {
  return (
    n === void 0 && (n = null),
    Vt(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? qn(t) : t,
      { state: n, key: (t && t.key) || i || eb() }
    )
  );
}
function mn(e) {
  let { pathname: t = "/", search: n = "", hash: i = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (t += i.charAt(0) === "#" ? i : "#" + i),
    t
  );
}
function qn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let i = e.indexOf("?");
    i >= 0 && ((t.search = e.substr(i)), (e = e.substr(0, i))),
      e && (t.pathname = e);
  }
  return t;
}
function Ts(e) {
  let t =
      typeof window < "u" &&
      typeof window.location < "u" &&
      window.location.origin !== "null"
        ? window.location.origin
        : "unknown://unknown",
    n = typeof e == "string" ? e : mn(e);
  return new URL(n, t);
}
function nb(e, t, n, i) {
  i === void 0 && (i = {});
  let { window: r = document.defaultView, v5Compat: s = !1 } = i,
    a = r.history,
    u = ee.Pop,
    c = null;
  function d() {
    (u = ee.Pop), c && c({ action: u, location: m.location });
  }
  function p(v, y) {
    u = ee.Push;
    let S = nr(m.location, v, y);
    n && n(S, v);
    let M = vm(S),
      w = m.createHref(S);
    try {
      a.pushState(M, "", w);
    } catch {
      r.location.assign(w);
    }
    s && c && c({ action: u, location: m.location });
  }
  function g(v, y) {
    u = ee.Replace;
    let S = nr(m.location, v, y);
    n && n(S, v);
    let M = vm(S),
      w = m.createHref(S);
    a.replaceState(M, "", w), s && c && c({ action: u, location: m.location });
  }
  let m = {
    get action() {
      return u;
    },
    get location() {
      return e(r, a);
    },
    listen(v) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        r.addEventListener(_m, d),
        (c = v),
        () => {
          r.removeEventListener(_m, d), (c = null);
        }
      );
    },
    createHref(v) {
      return t(r, v);
    },
    encodeLocation(v) {
      let y = Ts(mn(v));
      return Vt({}, v, {
        pathname: y.pathname,
        search: y.search,
        hash: y.hash,
      });
    },
    push: p,
    replace: g,
    go(v) {
      return a.go(v);
    },
  };
  return m;
}
var de;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(de || (de = {}));
function ib(e) {
  return e.index === !0;
}
function ty(e, t, n) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = new Set()),
    e.map((i, r) => {
      let s = [...t, r],
        a = typeof i.id == "string" ? i.id : s.join("-");
      return (
        dt(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        dt(
          !n.has(a),
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        n.add(a),
        ib(i)
          ? Vt({}, i, { id: a })
          : Vt({}, i, {
              id: a,
              children: i.children ? ty(i.children, s, n) : void 0,
            })
      );
    })
  );
}
function Xo(e, t, n) {
  n === void 0 && (n = "/");
  let i = typeof t == "string" ? qn(t) : t,
    r = ny(i.pathname || "/", n);
  if (r == null) return null;
  let s = ey(e);
  rb(s);
  let a = null;
  for (let u = 0; a == null && u < s.length; ++u) a = fb(s[u], gb(r));
  return a;
}
function ey(e, t, n, i) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    i === void 0 && (i = ""),
    e.forEach((r, s) => {
      let a = {
        relativePath: r.path || "",
        caseSensitive: r.caseSensitive === !0,
        childrenIndex: s,
        route: r,
      };
      a.relativePath.startsWith("/") &&
        (dt(
          a.relativePath.startsWith(i),
          'Absolute route path "' +
            a.relativePath +
            '" nested under path ' +
            ('"' + i + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes."
        ),
        (a.relativePath = a.relativePath.slice(i.length)));
      let u = $n([i, a.relativePath]),
        c = n.concat(a);
      r.children &&
        r.children.length > 0 &&
        (dt(
          r.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + u + '".')
        ),
        ey(r.children, t, c, u)),
        !(r.path == null && !r.index) &&
          t.push({ path: u, score: hb(u, r.index), routesMeta: c });
    }),
    t
  );
}
function rb(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : db(
          t.routesMeta.map((i) => i.childrenIndex),
          n.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
const ob = /^:\w+$/,
  sb = 3,
  ab = 2,
  lb = 1,
  ub = 10,
  cb = -2,
  ym = (e) => e === "*";
function hb(e, t) {
  let n = e.split("/"),
    i = n.length;
  return (
    n.some(ym) && (i += cb),
    t && (i += ab),
    n
      .filter((r) => !ym(r))
      .reduce((r, s) => r + (ob.test(s) ? sb : s === "" ? lb : ub), i)
  );
}
function db(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, r) => i === t[r])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function fb(e, t) {
  let { routesMeta: n } = e,
    i = {},
    r = "/",
    s = [];
  for (let a = 0; a < n.length; ++a) {
    let u = n[a],
      c = a === n.length - 1,
      d = r === "/" ? t : t.slice(r.length) || "/",
      p = pb(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        d
      );
    if (!p) return null;
    Object.assign(i, p.params);
    let g = u.route;
    s.push({
      params: i,
      pathname: $n([r, p.pathname]),
      pathnameBase: xb($n([r, p.pathnameBase])),
      route: g,
    }),
      p.pathnameBase !== "/" && (r = $n([r, p.pathnameBase]));
  }
  return s;
}
function pb(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, i] = mb(e.path, e.caseSensitive, e.end),
    r = t.match(n);
  if (!r) return null;
  let s = r[0],
    a = s.replace(/(.)\/+$/, "$1"),
    u = r.slice(1);
  return {
    params: i.reduce((d, p, g) => {
      if (p === "*") {
        let m = u[g] || "";
        a = s.slice(0, s.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (d[p] = _b(u[g] || "", p)), d;
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e,
  };
}
function mb(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Id(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let i = [],
    r =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (a, u) => (i.push(u), "([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (i.push("*"),
        (r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (r += "\\/*$")
      : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r, t ? void 0 : "i"), i]
  );
}
function gb(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Id(
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
function _b(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Id(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function ny(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    i = e.charAt(n);
  return i && i !== "/" ? null : e.slice(n) || "/";
}
function dt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Id(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function vb(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: i = "",
    hash: r = "",
  } = typeof e == "string" ? qn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : yb(n, t)) : t,
    search: wb(i),
    hash: bb(r),
  };
}
function yb(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((r) => {
      r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function vc(e, t, n, i) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(i) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ou(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Nd(e, t, n, i) {
  i === void 0 && (i = !1);
  let r;
  typeof e == "string"
    ? (r = qn(e))
    : ((r = Vt({}, e)),
      dt(
        !r.pathname || !r.pathname.includes("?"),
        vc("?", "pathname", "search", r)
      ),
      dt(
        !r.pathname || !r.pathname.includes("#"),
        vc("#", "pathname", "hash", r)
      ),
      dt(!r.search || !r.search.includes("#"), vc("#", "search", "hash", r)));
  let s = e === "" || r.pathname === "",
    a = s ? "/" : r.pathname,
    u;
  if (i || a == null) u = n;
  else {
    let g = t.length - 1;
    if (a.startsWith("..")) {
      let m = a.split("/");
      for (; m[0] === ".."; ) m.shift(), (g -= 1);
      r.pathname = m.join("/");
    }
    u = g >= 0 ? t[g] : "/";
  }
  let c = vb(r, u),
    d = a && a !== "/" && a.endsWith("/"),
    p = (s || a === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (d || p) && (c.pathname += "/"), c;
}
const $n = (e) => e.join("/").replace(/\/\/+/g, "/"),
  xb = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  wb = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  bb = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class xm extends Error {}
class Sb {
  constructor(t) {
    (this.pendingKeys = new Set()),
      (this.subscriber = void 0),
      dt(
        t && typeof t == "object" && !Array.isArray(t),
        "defer() only accepts plain objects"
      );
    let n;
    (this.abortPromise = new Promise((r, s) => (n = s))),
      (this.controller = new AbortController());
    let i = () => n(new xm("Deferred data aborted"));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener("abort", i)),
      this.controller.signal.addEventListener("abort", i),
      (this.data = Object.entries(t).reduce((r, s) => {
        let [a, u] = s;
        return Object.assign(r, { [a]: this.trackPromise(a, u) });
      }, {}));
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.pendingKeys.add(t);
    let i = Promise.race([n, this.abortPromise]).then(
      (r) => this.onSettle(i, t, null, r),
      (r) => this.onSettle(i, t, r)
    );
    return (
      i.catch(() => {}),
      Object.defineProperty(i, "_tracked", { get: () => !0 }),
      i
    );
  }
  onSettle(t, n, i, r) {
    if (this.controller.signal.aborted && i instanceof xm)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, "_error", { get: () => i }),
        Promise.reject(i)
      );
    this.pendingKeys.delete(n), this.done && this.unlistenAbortSignal();
    const s = this.subscriber;
    return i
      ? (Object.defineProperty(t, "_error", { get: () => i }),
        s && s(!1),
        Promise.reject(i))
      : (Object.defineProperty(t, "_data", { get: () => r }), s && s(!1), r);
  }
  subscribe(t) {
    this.subscriber = t;
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeys.forEach((n, i) => this.pendingKeys.delete(i));
    let t = this.subscriber;
    t && t(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let i = () => this.cancel();
      t.addEventListener("abort", i),
        (n = await new Promise((r) => {
          this.subscribe((s) => {
            t.removeEventListener("abort", i), (s || this.done) && r(s);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeys.size === 0;
  }
  get unwrappedData() {
    return (
      dt(
        this.data !== null && this.done,
        "Can only unwrap data on initialized and settled deferreds"
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [i, r] = n;
        return Object.assign(t, { [i]: kb(r) });
      }, {})
    );
  }
}
function Pb(e) {
  return e instanceof Promise && e._tracked === !0;
}
function kb(e) {
  if (!Pb(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
class fo {
  constructor(t, n, i) {
    (this.status = t), (this.statusText = n || ""), (this.data = i);
  }
}
function iy(e) {
  return e instanceof fo;
}
const yc = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Cb = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Lb =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Mb = !Lb;
function Eb(e) {
  dt(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let t = ty(e.routes),
    n = null,
    i = new Set(),
    r = null,
    s = null,
    a = null,
    u = !1,
    c = Xo(t, e.history.location, e.basename),
    d = null;
  if (c == null) {
    let { matches: I, route: H, error: U } = km(t);
    (c = I), (d = { [H.id]: U });
  }
  let p = !c.some((I) => I.route.loader) || e.hydrationData != null,
    g,
    m = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: c,
      initialized: p,
      navigation: yc,
      restoreScrollPosition: null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
    },
    v = ee.Pop,
    y = !1,
    S,
    M = !1,
    w = !1,
    b = [],
    P = [],
    C = new Map(),
    E = 0,
    R = -1,
    D = new Map(),
    N = new Set(),
    V = new Map(),
    Z = new Map();
  function K() {
    return (
      (n = e.history.listen((I) => {
        let { action: H, location: U } = I;
        return z(H, U);
      })),
      m.initialized || z(ee.Pop, m.location),
      g
    );
  }
  function X() {
    n && n(), i.clear(), S && S.abort(), m.fetchers.forEach((I, H) => mr(H));
  }
  function Pt(I) {
    return i.add(I), () => i.delete(I);
  }
  function rt(I) {
    (m = Vt({}, m, I)), i.forEach((H) => H(m));
  }
  function q(I, H) {
    var U;
    let tt =
        m.actionData != null &&
        m.navigation.formMethod != null &&
        m.navigation.state === "loading" &&
        ((U = m.navigation.formAction) == null ? void 0 : U.split("?")[0]) ===
          I.pathname,
      nt = H.loaderData
        ? { loaderData: wc(m.loaderData, H.loaderData, H.matches || []) }
        : {};
    rt(
      Vt({}, tt ? {} : { actionData: null }, H, nt, {
        historyAction: v,
        location: I,
        initialized: !0,
        navigation: yc,
        revalidation: "idle",
        restoreScrollPosition: m.navigation.formData
          ? !1
          : vr(I, H.matches || m.matches),
        preventScrollReset: y,
      })
    ),
      M ||
        v === ee.Pop ||
        (v === ee.Push
          ? e.history.push(I, I.state)
          : v === ee.Replace && e.history.replace(I, I.state)),
      (v = ee.Pop),
      (y = !1),
      (M = !1),
      (w = !1),
      (b = []),
      (P = []);
  }
  async function ut(I, H) {
    if (typeof I == "number") {
      e.history.go(I);
      return;
    }
    let { path: U, submission: tt, error: nt } = wm(I, H),
      mt = nr(m.location, U, H && H.state);
    mt = e.history.encodeLocation(mt);
    let St = (H && H.replace) === !0 || tt != null ? ee.Replace : ee.Push,
      Lt =
        H && "preventScrollReset" in H ? H.preventScrollReset === !0 : void 0;
    return await z(St, mt, {
      submission: tt,
      pendingError: nt,
      preventScrollReset: Lt,
      replace: H && H.replace,
    });
  }
  function _t() {
    if (
      (oe(),
      rt({ revalidation: "loading" }),
      m.navigation.state !== "submitting")
    ) {
      if (m.navigation.state === "idle") {
        z(m.historyAction, m.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      z(v || m.historyAction, m.navigation.location, {
        overrideNavigation: m.navigation,
      });
    }
  }
  async function z(I, H, U) {
    S && S.abort(),
      (S = null),
      (v = I),
      (M = (U && U.startUninterruptedRevalidation) === !0),
      Js(m.location, m.matches),
      (y = (U && U.preventScrollReset) === !0);
    let tt = U && U.overrideNavigation,
      nt = Xo(t, H, e.basename);
    if (!nt) {
      let { matches: se, route: On, error: We } = km(t);
      po(), q(H, { matches: se, loaderData: {}, errors: { [On.id]: We } });
      return;
    }
    if (Ab(m.location, H)) {
      q(H, { matches: nt });
      return;
    }
    S = new AbortController();
    let mt = Bo(H, S.signal, U && U.submission),
      St,
      Lt;
    if (U && U.pendingError) Lt = { [Vr(nt).route.id]: U.pendingError };
    else if (U && U.submission) {
      let se = await J(mt, H, U.submission, nt, { replace: U.replace });
      if (se.shortCircuited) return;
      (St = se.pendingActionData),
        (Lt = se.pendingActionError),
        (tt = Vt({ state: "loading", location: H }, U.submission));
    }
    let {
      shortCircuited: kt,
      loaderData: Mt,
      errors: Dt,
    } = await W(mt, H, nt, tt, U && U.submission, U && U.replace, St, Lt);
    kt || ((S = null), q(H, { matches: nt, loaderData: Mt, errors: Dt }));
  }
  async function J(I, H, U, tt, nt) {
    oe();
    let mt = Vt({ state: "submitting", location: H }, U);
    rt({ navigation: mt });
    let St,
      Lt = Tm(tt, H);
    if (!Lt.route.action) St = Cm(H);
    else if (
      ((St = await No("action", I, Lt, tt, g.basename)), I.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Gr(St)) {
      let kt = Vt(
        { state: "loading", location: nr(m.location, St.location) },
        U
      );
      return await at(St, kt, nt && nt.replace), { shortCircuited: !0 };
    }
    if (as(St)) {
      let kt = Vr(tt, Lt.route.id);
      return (
        (nt && nt.replace) !== !0 && (v = ee.Push),
        { pendingActionError: { [kt.route.id]: St.error } }
      );
    }
    if (qi(St)) throw new Error("defer() is not supported in actions");
    return { pendingActionData: { [Lt.route.id]: St.data } };
  }
  async function W(I, H, U, tt, nt, mt, St, Lt) {
    let kt = tt;
    kt ||
      (kt = {
        state: "loading",
        location: H,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      });
    let [Mt, Dt] = bm(m, U, nt, H, w, b, P, St, Lt, V);
    if (
      (po(
        (ae) =>
          !(U && U.some((Qt) => Qt.route.id === ae)) ||
          (Mt && Mt.some((Qt) => Qt.route.id === ae))
      ),
      Mt.length === 0 && Dt.length === 0)
    )
      return (
        q(H, {
          matches: U,
          loaderData: wc(m.loaderData, {}, U),
          errors: Lt || null,
          actionData: St || null,
        }),
        { shortCircuited: !0 }
      );
    M ||
      (Dt.forEach((ae) => {
        let [Qt] = ae,
          ei = m.fetchers.get(Qt),
          Ai = {
            state: "loading",
            data: ei && ei.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          };
        m.fetchers.set(Qt, Ai);
      }),
      rt(
        Vt(
          { navigation: kt, actionData: St || m.actionData || null },
          Dt.length > 0 ? { fetchers: new Map(m.fetchers) } : {}
        )
      )),
      (R = ++E),
      Dt.forEach((ae) => {
        let [Qt] = ae;
        return C.set(Qt, S);
      });
    let {
      results: se,
      loaderResults: On,
      fetcherResults: We,
    } = await lt(m.matches, U, Mt, Dt, I);
    if (I.signal.aborted) return { shortCircuited: !0 };
    Dt.forEach((ae) => {
      let [Qt] = ae;
      return C.delete(Qt);
    });
    let Dn = Lm(se);
    if (Dn) {
      let ae = xc(m, Dn);
      return await at(Dn, ae, mt), { shortCircuited: !0 };
    }
    let { loaderData: yr, errors: ti } = Pm(m, U, Mt, On, Lt, Dt, We, Z);
    Z.forEach((ae, Qt) => {
      ae.subscribe((ei) => {
        (ei || ae.done) && Z.delete(Qt);
      });
    }),
      zi();
    let Rn = _r(R);
    return Vt(
      { loaderData: yr, errors: ti },
      Rn || Dt.length > 0 ? { fetchers: new Map(m.fetchers) } : {}
    );
  }
  function Q(I) {
    return m.fetchers.get(I) || Cb;
  }
  function ot(I, H, U, tt) {
    if (Mb)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    C.has(I) && Jn(I);
    let nt = Xo(t, U, e.basename);
    if (!nt) {
      je(I, H, new fo(404, "Not Found", null));
      return;
    }
    let { path: mt, submission: St } = wm(U, tt, !0),
      Lt = Tm(nt, mt);
    if (St) {
      Ot(I, H, mt, Lt, nt, St);
      return;
    }
    V.set(I, [mt, Lt, nt]), wt(I, H, mt, Lt, nt);
  }
  async function Ot(I, H, U, tt, nt, mt) {
    if ((oe(), V.delete(I), !tt.route.action)) {
      let { error: Re } = Cm(U);
      je(I, H, Re);
      return;
    }
    let St = m.fetchers.get(I),
      Lt = Vt({ state: "submitting" }, mt, { data: St && St.data });
    m.fetchers.set(I, Lt), rt({ fetchers: new Map(m.fetchers) });
    let kt = new AbortController(),
      Mt = Bo(U, kt.signal, mt);
    C.set(I, kt);
    let Dt = await No("action", Mt, tt, nt, g.basename);
    if (Mt.signal.aborted) {
      C.get(I) === kt && C.delete(I);
      return;
    }
    if (Gr(Dt)) {
      C.delete(I), N.add(I);
      let Re = Vt({ state: "loading" }, mt, { data: void 0 });
      m.fetchers.set(I, Re), rt({ fetchers: new Map(m.fetchers) });
      let nn = Vt(
        { state: "loading", location: nr(m.location, Dt.location) },
        mt
      );
      await at(Dt, nn);
      return;
    }
    if (as(Dt)) {
      je(I, H, Dt.error);
      return;
    }
    qi(Dt) && dt(!1, "defer() is not supported in actions");
    let se = m.navigation.location || m.location,
      On = Bo(se, kt.signal),
      We =
        m.navigation.state !== "idle"
          ? Xo(t, m.navigation.location, e.basename)
          : m.matches;
    dt(We, "Didn't find any matches after fetcher action");
    let Dn = ++E;
    D.set(I, Dn);
    let yr = Vt({ state: "loading", data: Dt.data }, mt);
    m.fetchers.set(I, yr);
    let [ti, Rn] = bm(
      m,
      We,
      mt,
      se,
      w,
      b,
      P,
      { [tt.route.id]: Dt.data },
      void 0,
      V
    );
    Rn.filter((Re) => {
      let [nn] = Re;
      return nn !== I;
    }).forEach((Re) => {
      let [nn] = Re,
        ea = m.fetchers.get(nn),
        vu = {
          state: "loading",
          data: ea && ea.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
      m.fetchers.set(nn, vu), C.set(nn, kt);
    }),
      rt({ fetchers: new Map(m.fetchers) });
    let {
      results: ae,
      loaderResults: Qt,
      fetcherResults: ei,
    } = await lt(m.matches, We, ti, Rn, On);
    if (kt.signal.aborted) return;
    D.delete(I),
      C.delete(I),
      Rn.forEach((Re) => {
        let [nn] = Re;
        return C.delete(nn);
      });
    let Ai = Lm(ae);
    if (Ai) {
      let Re = xc(m, Ai);
      await at(Ai, Re);
      return;
    }
    let { loaderData: mo, errors: go } = Pm(
        m,
        m.matches,
        ti,
        Qt,
        void 0,
        Rn,
        ei,
        Z
      ),
      ta = {
        state: "idle",
        data: Dt.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
    m.fetchers.set(I, ta);
    let _u = _r(Dn);
    m.navigation.state === "loading" && Dn > R
      ? (dt(v, "Expected pending action"),
        S && S.abort(),
        q(m.navigation.location, {
          matches: We,
          loaderData: mo,
          errors: go,
          fetchers: new Map(m.fetchers),
        }))
      : (rt(
          Vt(
            { errors: go, loaderData: wc(m.loaderData, mo, We) },
            _u ? { fetchers: new Map(m.fetchers) } : {}
          )
        ),
        (w = !1));
  }
  async function wt(I, H, U, tt, nt) {
    let mt = m.fetchers.get(I),
      St = {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        data: mt && mt.data,
      };
    m.fetchers.set(I, St), rt({ fetchers: new Map(m.fetchers) });
    let Lt = new AbortController(),
      kt = Bo(U, Lt.signal);
    C.set(I, Lt);
    let Mt = await No("loader", kt, tt, nt, g.basename);
    if (
      (qi(Mt) && (Mt = (await ay(Mt, kt.signal, !0)) || Mt),
      C.get(I) === Lt && C.delete(I),
      kt.signal.aborted)
    )
      return;
    if (Gr(Mt)) {
      let se = xc(m, Mt);
      await at(Mt, se);
      return;
    }
    if (as(Mt)) {
      let se = Vr(m.matches, H);
      m.fetchers.delete(I),
        rt({
          fetchers: new Map(m.fetchers),
          errors: { [se.route.id]: Mt.error },
        });
      return;
    }
    dt(!qi(Mt), "Unhandled fetcher deferred data");
    let Dt = {
      state: "idle",
      data: Mt.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
    };
    m.fetchers.set(I, Dt), rt({ fetchers: new Map(m.fetchers) });
  }
  async function at(I, H, U) {
    I.revalidate && (w = !0),
      dt(H.location, "Expected a location on the redirect navigation"),
      (S = null);
    let tt = U === !0 ? ee.Replace : ee.Push;
    await z(tt, H.location, { overrideNavigation: H });
  }
  async function lt(I, H, U, tt, nt) {
    let mt = await Promise.all([
        ...U.map((kt) => No("loader", nt, kt, H, g.basename)),
        ...tt.map((kt) => {
          let [, Mt, Dt, se] = kt;
          return No("loader", Bo(Mt, nt.signal), Dt, se, g.basename);
        }),
      ]),
      St = mt.slice(0, U.length),
      Lt = mt.slice(U.length);
    return (
      await Promise.all([
        Mm(I, U, St, nt.signal, !1, m.loaderData),
        Mm(
          I,
          tt.map((kt) => {
            let [, , Mt] = kt;
            return Mt;
          }),
          Lt,
          nt.signal,
          !0
        ),
      ]),
      { results: mt, loaderResults: St, fetcherResults: Lt }
    );
  }
  function oe() {
    (w = !0),
      b.push(...po()),
      V.forEach((I, H) => {
        C.has(H) && (P.push(H), Jn(H));
      });
  }
  function je(I, H, U) {
    let tt = Vr(m.matches, H);
    mr(I), rt({ errors: { [tt.route.id]: U }, fetchers: new Map(m.fetchers) });
  }
  function mr(I) {
    C.has(I) && Jn(I),
      V.delete(I),
      D.delete(I),
      N.delete(I),
      m.fetchers.delete(I);
  }
  function Jn(I) {
    let H = C.get(I);
    dt(H, "Expected fetch controller: " + I), H.abort(), C.delete(I);
  }
  function gr(I) {
    for (let H of I) {
      let tt = {
        state: "idle",
        data: Q(H).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
      m.fetchers.set(H, tt);
    }
  }
  function zi() {
    let I = [];
    for (let H of N) {
      let U = m.fetchers.get(H);
      dt(U, "Expected fetcher: " + H),
        U.state === "loading" && (N.delete(H), I.push(H));
    }
    gr(I);
  }
  function _r(I) {
    let H = [];
    for (let [U, tt] of D)
      if (tt < I) {
        let nt = m.fetchers.get(U);
        dt(nt, "Expected fetcher: " + U),
          nt.state === "loading" && (Jn(U), D.delete(U), H.push(U));
      }
    return gr(H), H.length > 0;
  }
  function po(I) {
    let H = [];
    return (
      Z.forEach((U, tt) => {
        (!I || I(tt)) && (U.cancel(), H.push(tt), Z.delete(tt));
      }),
      H
    );
  }
  function qs(I, H, U) {
    if (
      ((r = I), (a = H), (s = U || ((tt) => tt.key)), !u && m.navigation === yc)
    ) {
      u = !0;
      let tt = vr(m.location, m.matches);
      tt != null && rt({ restoreScrollPosition: tt });
    }
    return () => {
      (r = null), (a = null), (s = null);
    };
  }
  function Js(I, H) {
    if (r && s && a) {
      let U = H.map((nt) => Em(nt, m.loaderData)),
        tt = s(I, U) || I.key;
      r[tt] = a();
    }
  }
  function vr(I, H) {
    if (r && s && a) {
      let U = H.map((mt) => Em(mt, m.loaderData)),
        tt = s(I, U) || I.key,
        nt = r[tt];
      if (typeof nt == "number") return nt;
    }
    return null;
  }
  return (
    (g = {
      get basename() {
        return e.basename;
      },
      get state() {
        return m;
      },
      get routes() {
        return t;
      },
      initialize: K,
      subscribe: Pt,
      enableScrollRestoration: qs,
      navigate: ut,
      fetch: ot,
      revalidate: _t,
      createHref: (I) => e.history.createHref(I),
      getFetcher: Q,
      deleteFetcher: mr,
      dispose: X,
      _internalFetchControllers: C,
      _internalActiveDeferreds: Z,
    }),
    g
  );
}
const Tb = new Set(["POST", "PUT", "PATCH", "DELETE"]);
[...Tb];
function wm(e, t, n) {
  n === void 0 && (n = !1);
  let i = typeof e == "string" ? e : mn(e);
  if (!t || (!("formMethod" in t) && !("formData" in t))) return { path: i };
  if (t.formMethod != null && t.formMethod !== "get")
    return {
      path: i,
      submission: {
        formMethod: t.formMethod,
        formAction: sy(i),
        formEncType:
          (t && t.formEncType) || "application/x-www-form-urlencoded",
        formData: t.formData,
      },
    };
  if (!t.formData) return { path: i };
  let r = qn(i);
  try {
    let s = oy(t.formData);
    n && r.search && ly(r.search) && s.append("index", ""),
      (r.search = "?" + s);
  } catch {
    return {
      path: i,
      error: new fo(
        400,
        "Bad Request",
        "Cannot submit binary form data using GET"
      ),
    };
  }
  return { path: mn(r) };
}
function xc(e, t) {
  let {
    formMethod: n,
    formAction: i,
    formEncType: r,
    formData: s,
  } = e.navigation;
  return {
    state: "loading",
    location: nr(e.location, t.location),
    formMethod: n || void 0,
    formAction: i || void 0,
    formEncType: r || void 0,
    formData: s || void 0,
  };
}
function Ob(e, t) {
  let n = e;
  if (t) {
    let i = e.findIndex((r) => r.route.id === t);
    i >= 0 && (n = e.slice(0, i));
  }
  return n;
}
function bm(e, t, n, i, r, s, a, u, c, d) {
  let p = c ? Object.values(c)[0] : u ? Object.values(u)[0] : null,
    g = c ? Object.keys(c)[0] : void 0,
    v = Ob(t, g).filter(
      (S, M) =>
        S.route.loader != null &&
        (Db(e.loaderData, e.matches[M], S) ||
          s.some((w) => w === S.route.id) ||
          Sm(e.location, e.matches[M], n, i, S, r, p))
    ),
    y = [];
  return (
    d &&
      d.forEach((S, M) => {
        let [w, b, P] = S;
        a.includes(M)
          ? y.push([M, w, b, P])
          : r && Sm(w, b, n, w, b, r, p) && y.push([M, w, b, P]);
      }),
    [v, y]
  );
}
function Db(e, t, n) {
  let i = !t || n.route.id !== t.route.id,
    r = e[n.route.id] === void 0;
  return i || r;
}
function ry(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Sm(e, t, n, i, r, s, a) {
  let u = Ts(e),
    c = t.params,
    d = Ts(i),
    p = r.params,
    g = ry(t, r) || u.toString() === d.toString() || u.search !== d.search || s;
  if (r.route.shouldRevalidate) {
    let m = r.route.shouldRevalidate(
      Vt({ currentUrl: u, currentParams: c, nextUrl: d, nextParams: p }, n, {
        actionResult: a,
        defaultShouldRevalidate: g,
      })
    );
    if (typeof m == "boolean") return m;
  }
  return g;
}
async function No(e, t, n, i, r, s, a) {
  s === void 0 && (s = !1), a === void 0 && (a = !1);
  let u,
    c,
    d,
    p = new Promise((m, v) => (d = v)),
    g = () => d();
  t.signal.addEventListener("abort", g);
  try {
    let m = n.route[e];
    dt(
      m,
      "Could not find the " + e + ' to run on the "' + n.route.id + '" route'
    ),
      (c = await Promise.race([m({ request: t, params: n.params }), p]));
  } catch (m) {
    (u = de.error), (c = m);
  } finally {
    t.signal.removeEventListener("abort", g);
  }
  if (c instanceof Response) {
    let m = c.status;
    if (m >= 300 && m <= 399) {
      let S = c.headers.get("Location");
      dt(
        S,
        "Redirects returned/thrown from loaders/actions must have a Location header"
      );
      let M = i.slice(0, i.indexOf(n) + 1),
        w = ou(M).map((C) => C.pathnameBase),
        b = Ts(t.url).pathname,
        P = Nd(S, w, b);
      if (
        (dt(
          mn(P),
          "Unable to resolve redirect location: " + c.headers.get("Location")
        ),
        r)
      ) {
        let C = P.pathname;
        P.pathname = C === "/" ? r : $n([r, C]);
      }
      if (((S = mn(P)), s)) throw (c.headers.set("Location", S), c);
      return {
        type: de.redirect,
        status: m,
        location: S,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (a) throw { type: u || de.data, response: c };
    let v,
      y = c.headers.get("Content-Type");
    return (
      y && y.startsWith("application/json")
        ? (v = await c.json())
        : (v = await c.text()),
      u === de.error
        ? { type: u, error: new fo(m, c.statusText, v), headers: c.headers }
        : { type: de.data, data: v, statusCode: c.status, headers: c.headers }
    );
  }
  return u === de.error
    ? { type: u, error: c }
    : c instanceof Sb
    ? { type: de.deferred, deferredData: c }
    : { type: de.data, data: c };
}
function Bo(e, t, n) {
  let i = Ts(sy(e)).toString(),
    r = { signal: t };
  if (n) {
    let { formMethod: s, formEncType: a, formData: u } = n;
    (r.method = s.toUpperCase()),
      (r.body = a === "application/x-www-form-urlencoded" ? oy(u) : u);
  }
  return new Request(i, r);
}
function oy(e) {
  let t = new URLSearchParams();
  for (let [n, i] of e.entries())
    dt(
      typeof i == "string",
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
    ),
      t.append(n, i);
  return t;
}
function Rb(e, t, n, i, r) {
  let s = {},
    a = null,
    u,
    c = !1,
    d = {};
  return (
    n.forEach((p, g) => {
      let m = t[g].route.id;
      if (
        (dt(!Gr(p), "Cannot handle redirect results in processLoaderData"),
        as(p))
      ) {
        let v = Vr(e, m),
          y = p.error;
        i && ((y = Object.values(i)[0]), (i = void 0)),
          (a = Object.assign(a || {}, { [v.route.id]: y })),
          c || ((c = !0), (u = iy(p.error) ? p.error.status : 500)),
          p.headers && (d[m] = p.headers);
      } else
        qi(p)
          ? (r && r.set(m, p.deferredData), (s[m] = p.deferredData.data))
          : ((s[m] = p.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !c &&
              (u = p.statusCode),
            p.headers && (d[m] = p.headers));
    }),
    i && (a = i),
    { loaderData: s, errors: a, statusCode: u || 200, loaderHeaders: d }
  );
}
function Pm(e, t, n, i, r, s, a, u) {
  let { loaderData: c, errors: d } = Rb(t, n, i, r, u);
  for (let p = 0; p < s.length; p++) {
    let [g, , m] = s[p];
    dt(
      a !== void 0 && a[p] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let v = a[p];
    if (as(v)) {
      let y = Vr(e.matches, m.route.id);
      (d && d[y.route.id]) || (d = Vt({}, d, { [y.route.id]: v.error })),
        e.fetchers.delete(g);
    } else {
      if (Gr(v)) throw new Error("Unhandled fetcher revalidation redirect");
      if (qi(v)) throw new Error("Unhandled fetcher deferred data");
      {
        let y = {
          state: "idle",
          data: v.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
        e.fetchers.set(g, y);
      }
    }
  }
  return { loaderData: c, errors: d };
}
function wc(e, t, n) {
  let i = Vt({}, t);
  return (
    n.forEach((r) => {
      let s = r.route.id;
      t[s] === void 0 && e[s] !== void 0 && (i[s] = e[s]);
    }),
    i
  );
}
function Vr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((i) => i.route.id === t) + 1) : [...e])
      .reverse()
      .find((i) => i.route.hasErrorBoundary === !0) || e[0]
  );
}
function zb(e, t, n) {
  let i = e.find((r) => r.index || !r.path || r.path === "/") || {
    id: "__shim-" + t + "-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: i }],
    route: i,
    error: new fo(t, n, null),
  };
}
function km(e) {
  return zb(e, 404, "Not Found");
}
function Cm(e) {
  let t = typeof e == "string" ? e : mn(e);
  return (
    console.warn(
      "You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for " +
        ("[" + t + "]")
    ),
    { type: de.error, error: new fo(405, "Method Not Allowed", "") }
  );
}
function Lm(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Gr(n)) return n;
  }
}
function sy(e) {
  let t = typeof e == "string" ? qn(e) : e;
  return mn(Vt({}, t, { hash: "" }));
}
function Ab(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function qi(e) {
  return e.type === de.deferred;
}
function as(e) {
  return e.type === de.error;
}
function Gr(e) {
  return (e && e.type) === de.redirect;
}
async function Mm(e, t, n, i, r, s) {
  for (let a = 0; a < n.length; a++) {
    let u = n[a],
      c = t[a],
      d = e.find((g) => g.route.id === c.route.id),
      p = d != null && !ry(d, c) && (s && s[c.route.id]) !== void 0;
    qi(u) &&
      (r || p) &&
      (await ay(u, i, r).then((g) => {
        g && (n[a] = g || n[a]);
      }));
  }
}
async function ay(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: de.data, data: e.deferredData.unwrappedData };
      } catch (r) {
        return { type: de.error, error: r };
      }
    return { type: de.data, data: e.deferredData.data };
  }
}
function ly(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Em(e, t) {
  let { route: n, pathname: i, params: r } = e;
  return { id: n.id, pathname: i, params: r, data: t[n.id], handle: n.handle };
}
function Tm(e, t) {
  let n = typeof t == "string" ? qn(t).search : t.search;
  if (e[e.length - 1].route.index && ly(n || "")) return e[e.length - 1];
  let i = ou(e);
  return i[i.length - 1];
}
var su = { exports: {} },
  au = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ib = A.exports,
  Nb = Symbol.for("react.element"),
  Bb = Symbol.for("react.fragment"),
  Fb = Object.prototype.hasOwnProperty,
  jb = Ib.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wb = { key: !0, ref: !0, __self: !0, __source: !0 };
function uy(e, t, n) {
  var i,
    r = {},
    s = null,
    a = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (i in t) Fb.call(t, i) && !Wb.hasOwnProperty(i) && (r[i] = t[i]);
  if (e && e.defaultProps)
    for (i in ((t = e.defaultProps), t)) r[i] === void 0 && (r[i] = t[i]);
  return {
    $$typeof: Nb,
    type: e,
    key: s,
    ref: a,
    props: r,
    _owner: jb.current,
  };
}
au.Fragment = Bb;
au.jsx = uy;
au.jsxs = uy;
(function (e) {
  e.exports = au;
})(su);
const Tn = su.exports.Fragment,
  B = su.exports.jsx,
  vt = su.exports.jsxs;
/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Rl() {
  return (
    (Rl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    Rl.apply(this, arguments)
  );
}
function Hb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Vb = typeof Object.is == "function" ? Object.is : Hb,
  { useState: Zb, useEffect: Ub, useLayoutEffect: $b, useDebugValue: Yb } = Ac;
function Kb(e, t, n) {
  const i = t(),
    [{ inst: r }, s] = Zb({ inst: { value: i, getSnapshot: t } });
  return (
    $b(() => {
      (r.value = i), (r.getSnapshot = t), bc(r) && s({ inst: r });
    }, [e, i, t]),
    Ub(
      () => (
        bc(r) && s({ inst: r }),
        e(() => {
          bc(r) && s({ inst: r });
        })
      ),
      [e]
    ),
    Yb(i),
    i
  );
}
function bc(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const i = t();
    return !Vb(n, i);
  } catch {
    return !0;
  }
}
function Xb(e, t, n) {
  return t();
}
const Gb =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Qb = !Gb,
  qb = Qb ? Xb : Kb,
  Jb = "useSyncExternalStore" in Ac ? ((e) => e.useSyncExternalStore)(Ac) : qb,
  tS = A.exports.createContext(null),
  cy = A.exports.createContext(null),
  lu = A.exports.createContext(null),
  Bd = A.exports.createContext(null),
  uu = A.exports.createContext(null),
  Di = A.exports.createContext({ outlet: null, matches: [] }),
  hy = A.exports.createContext(null);
function eS(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Zs() || dt(!1);
  let { basename: i, navigator: r } = A.exports.useContext(Bd),
    { hash: s, pathname: a, search: u } = Fd(e, { relative: n }),
    c = a;
  return (
    i !== "/" && (c = a === "/" ? i : $n([i, a])),
    r.createHref({ pathname: c, search: u, hash: s })
  );
}
function Zs() {
  return A.exports.useContext(uu) != null;
}
function Us() {
  return Zs() || dt(!1), A.exports.useContext(uu).location;
}
function dy() {
  Zs() || dt(!1);
  let { basename: e, navigator: t } = A.exports.useContext(Bd),
    { matches: n } = A.exports.useContext(Di),
    { pathname: i } = Us(),
    r = JSON.stringify(ou(n).map((u) => u.pathnameBase)),
    s = A.exports.useRef(!1);
  return (
    A.exports.useEffect(() => {
      s.current = !0;
    }),
    A.exports.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof u == "number") {
          t.go(u);
          return;
        }
        let d = Nd(u, JSON.parse(r), i, c.relative === "path");
        e !== "/" &&
          (d.pathname = d.pathname === "/" ? e : $n([e, d.pathname])),
          (c.replace ? t.replace : t.push)(d, c.state, c);
      },
      [e, t, r, i]
    )
  );
}
const nS = A.exports.createContext(null);
function iS(e) {
  let t = A.exports.useContext(Di).outlet;
  return t && B(nS.Provider, { value: e, children: t });
}
function rS() {
  let { matches: e } = A.exports.useContext(Di),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Fd(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: i } = A.exports.useContext(Di),
    { pathname: r } = Us(),
    s = JSON.stringify(ou(i).map((a) => a.pathnameBase));
  return A.exports.useMemo(
    () => Nd(e, JSON.parse(s), r, n === "path"),
    [e, s, r, n]
  );
}
function oS(e, t) {
  Zs() || dt(!1);
  let n = A.exports.useContext(lu),
    { matches: i } = A.exports.useContext(Di),
    r = i[i.length - 1],
    s = r ? r.params : {};
  r && r.pathname;
  let a = r ? r.pathnameBase : "/";
  r && r.route;
  let u = Us(),
    c;
  if (t) {
    var d;
    let y = typeof t == "string" ? qn(t) : t;
    a === "/" ||
      ((d = y.pathname) == null ? void 0 : d.startsWith(a)) ||
      dt(!1),
      (c = y);
  } else c = u;
  let p = c.pathname || "/",
    g = a === "/" ? p : p.slice(a.length) || "/",
    m = Xo(e, { pathname: g }),
    v = uS(
      m &&
        m.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, s, y.params),
            pathname: $n([a, y.pathname]),
            pathnameBase: y.pathnameBase === "/" ? a : $n([a, y.pathnameBase]),
          })
        ),
      i,
      n || void 0
    );
  return t && v
    ? B(uu.Provider, {
        value: {
          location: Rl(
            {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
            },
            c
          ),
          navigationType: ee.Pop,
        },
        children: v,
      })
    : v;
}
function sS() {
  let e = fy(),
    t = iy(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = "rgba(200,200,200, 0.5)",
    r = { padding: "0.5rem", backgroundColor: i },
    s = { padding: "2px 4px", backgroundColor: i };
  return vt(Tn, {
    children: [
      B("h2", { children: "Unhandled Thrown Error!" }),
      B("h3", { style: { fontStyle: "italic" }, children: t }),
      n ? B("pre", { style: r, children: n }) : null,
      B("p", { children: "\u{1F4BF} Hey developer \u{1F44B}" }),
      vt("p", {
        children: [
          "You can provide a way better UX than this when your app throws errors by providing your own\xA0",
          B("code", { style: s, children: "errorElement" }),
          " props on\xA0",
          B("code", { style: s, children: "<Route>" }),
        ],
      }),
    ],
  });
}
class aS extends A.exports.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? B(hy.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function lS(e) {
  let { routeContext: t, match: n, children: i } = e,
    r = A.exports.useContext(tS);
  return (
    r && n.route.errorElement && (r._deepestRenderedBoundaryId = n.route.id),
    B(Di.Provider, { value: t, children: i })
  );
}
function uS(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let i = e,
    r = n == null ? void 0 : n.errors;
  if (r != null) {
    let s = i.findIndex(
      (a) => a.route.id && (r == null ? void 0 : r[a.route.id])
    );
    s >= 0 || dt(!1), (i = i.slice(0, Math.min(i.length, s + 1)));
  }
  return i.reduceRight((s, a, u) => {
    let c = a.route.id ? (r == null ? void 0 : r[a.route.id]) : null,
      d = n ? a.route.errorElement || B(sS, {}) : null,
      p = () =>
        B(lS, {
          match: a,
          routeContext: { outlet: s, matches: t.concat(i.slice(0, u + 1)) },
          children: c ? d : a.route.element !== void 0 ? a.route.element : s,
        });
    return n && (a.route.errorElement || u === 0)
      ? B(aS, { location: n.location, component: d, error: c, children: p() })
      : p();
  }, null);
}
var Om;
(function (e) {
  e.UseRevalidator = "useRevalidator";
})(Om || (Om = {}));
var Os;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Os || (Os = {}));
function jd(e) {
  let t = A.exports.useContext(lu);
  return t || dt(!1), t;
}
function cS() {
  return jd(Os.UseNavigation).navigation;
}
function hS() {
  let e = jd(Os.UseLoaderData),
    t = A.exports.useContext(Di);
  t || dt(!1);
  let n = t.matches[t.matches.length - 1];
  return n.route.id || dt(!1), e.loaderData[n.route.id];
}
function fy() {
  var e;
  let t = A.exports.useContext(hy),
    n = jd(Os.UseRouteError),
    i = A.exports.useContext(Di),
    r = i.matches[i.matches.length - 1];
  return (
    t ||
    (i || dt(!1),
    r.route.id || dt(!1),
    (e = n.errors) == null ? void 0 : e[r.route.id])
  );
}
function dS(e) {
  let { fallbackElement: t, router: n } = e,
    i = Jb(
      n.subscribe,
      () => n.state,
      () => n.state
    ),
    r = A.exports.useMemo(
      () => ({
        createHref: n.createHref,
        go: (a) => n.navigate(a),
        push: (a, u, c) =>
          n.navigate(a, {
            state: u,
            preventScrollReset: c == null ? void 0 : c.preventScrollReset,
          }),
        replace: (a, u, c) =>
          n.navigate(a, {
            replace: !0,
            state: u,
            preventScrollReset: c == null ? void 0 : c.preventScrollReset,
          }),
      }),
      [n]
    ),
    s = n.basename || "/";
  return B(cy.Provider, {
    value: { router: n, navigator: r, static: !1, basename: s },
    children: B(lu.Provider, {
      value: i,
      children: B(mS, {
        basename: n.basename,
        location: n.state.location,
        navigationType: n.state.historyAction,
        navigator: r,
        children: n.state.initialized ? B(gS, {}) : t,
      }),
    }),
  });
}
function fS(e) {
  return iS(e.context);
}
function pS(e) {
  dt(!1);
}
function mS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: i,
    navigationType: r = ee.Pop,
    navigator: s,
    static: a = !1,
  } = e;
  Zs() && dt(!1);
  let u = t.replace(/^\/*/, "/"),
    c = A.exports.useMemo(
      () => ({ basename: u, navigator: s, static: a }),
      [u, s, a]
    );
  typeof i == "string" && (i = qn(i));
  let {
      pathname: d = "/",
      search: p = "",
      hash: g = "",
      state: m = null,
      key: v = "default",
    } = i,
    y = A.exports.useMemo(() => {
      let S = ny(d, u);
      return S == null
        ? null
        : { pathname: S, search: p, hash: g, state: m, key: v };
    }, [u, d, p, g, m, v]);
  return y == null
    ? null
    : B(Bd.Provider, {
        value: c,
        children: B(uu.Provider, {
          children: n,
          value: { location: y, navigationType: r },
        }),
      });
}
function gS(e) {
  let { children: t, location: n } = e,
    i = A.exports.useContext(cy),
    r = i && !t ? i.router.routes : Eh(t);
  return oS(r, n);
}
var Dm;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Dm || (Dm = {}));
new Promise(() => {});
function Eh(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    A.exports.Children.forEach(e, (i, r) => {
      if (!A.exports.isValidElement(i)) return;
      if (i.type === A.exports.Fragment) {
        n.push.apply(n, Eh(i.props.children, t));
        return;
      }
      i.type !== pS && dt(!1), !i.props.index || !i.props.children || dt(!1);
      let s = [...t, r],
        a = {
          id: i.props.id || s.join("-"),
          caseSensitive: i.props.caseSensitive,
          element: i.props.element,
          index: i.props.index,
          path: i.props.path,
          loader: i.props.loader,
          action: i.props.action,
          errorElement: i.props.errorElement,
          hasErrorBoundary: i.props.errorElement != null,
          shouldRevalidate: i.props.shouldRevalidate,
          handle: i.props.handle,
        };
      i.props.children && (a.children = Eh(i.props.children, s)), n.push(a);
    }),
    n
  );
}
function py(e) {
  return e.map((t) => {
    let n = Rl({}, t);
    return (
      n.hasErrorBoundary == null &&
        (n.hasErrorBoundary = n.errorElement != null),
      n.children && (n.children = py(n.children)),
      n
    );
  });
}
/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function my(e, t) {
  if (e == null) return {};
  var n = {},
    i = Object.keys(e),
    r,
    s;
  for (s = 0; s < i.length; s++)
    (r = i[s]), !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function _S(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function vS(e, t) {
  return e.button === 0 && (!t || t === "_self") && !_S(e);
}
const yS = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  xS = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function wS(e, t) {
  var n;
  return Eb({
    basename: t == null ? void 0 : t.basename,
    history: tb({ window: t == null ? void 0 : t.window }),
    hydrationData:
      (t == null ? void 0 : t.hydrationData) ||
      ((n = window) == null ? void 0 : n.__staticRouterHydrationData),
    routes: py(e),
  }).initialize();
}
const gy = A.exports.forwardRef(function (t, n) {
    let {
        onClick: i,
        relative: r,
        reloadDocument: s,
        replace: a,
        state: u,
        target: c,
        to: d,
        preventScrollReset: p,
      } = t,
      g = my(t, yS),
      m = eS(d, { relative: r }),
      v = SS(d, {
        replace: a,
        state: u,
        target: c,
        preventScrollReset: p,
        relative: r,
      });
    function y(S) {
      i && i(S), S.defaultPrevented || v(S);
    }
    return B("a", { ...g, href: m, onClick: s ? i : y, ref: n, target: c });
  }),
  bS = A.exports.forwardRef(function (t, n) {
    let {
        "aria-current": i = "page",
        caseSensitive: r = !1,
        className: s = "",
        end: a = !1,
        style: u,
        to: c,
        children: d,
      } = t,
      p = my(t, xS),
      g = Fd(c, { relative: p.relative }),
      m = Us(),
      v = A.exports.useContext(lu),
      y = g.pathname,
      S = m.pathname,
      M =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null;
    r ||
      ((S = S.toLowerCase()),
      (M = M ? M.toLowerCase() : null),
      (y = y.toLowerCase()));
    let w = S === y || (!a && S.startsWith(y) && S.charAt(y.length) === "/"),
      b =
        M != null &&
        (M === y || (!a && M.startsWith(y) && M.charAt(y.length) === "/")),
      P = w ? i : void 0,
      C;
    typeof s == "function"
      ? (C = s({ isActive: w, isPending: b }))
      : (C = [s, w ? "active" : null, b ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let E = typeof u == "function" ? u({ isActive: w, isPending: b }) : u;
    return B(gy, {
      ...p,
      "aria-current": P,
      className: C,
      ref: n,
      style: E,
      to: c,
      children: typeof d == "function" ? d({ isActive: w, isPending: b }) : d,
    });
  });
var Rm;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Rm || (Rm = {}));
var zm;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(zm || (zm = {}));
function SS(e, t) {
  let {
      target: n,
      replace: i,
      state: r,
      preventScrollReset: s,
      relative: a,
    } = t === void 0 ? {} : t,
    u = dy(),
    c = Us(),
    d = Fd(e, { relative: a });
  return A.exports.useCallback(
    (p) => {
      if (vS(p, n)) {
        p.preventDefault();
        let g = i !== void 0 ? i : mn(c) === mn(d);
        u(e, { replace: g, state: r, preventScrollReset: s, relative: a });
      }
    },
    [c, u, d, i, r, n, e, s, a]
  );
}
async function PS() {
  return {
    schools: await (await fetch("/data/basic_school_information.json")).json(),
  };
}
function kS() {
  hS();
  const e = cS(),
    [t, { data: n }] = Vs("basic_school_information.json");
  return (
    A.exports.useEffect(() => {
      (async () => await t())();
    }, []),
    B(J1, {
      value: n,
      children: vt("div", {
        className: "App",
        children: [
          vt("header", {
            children: [
              B("h1", { children: "Alberta School Explorer" }),
              B("nav", {
                children: B("ul", {
                  children: [
                    ["Home", "/"],
                    ["School List", "schools"],
                    ["Map", "map"],
                    ["Academics", "academics"],
                    ["Athletics", "athletics"],
                    ["Accessibility", "accessibility"],
                  ].map(([i, r]) =>
                    B(
                      "li",
                      {
                        children: B(bS, {
                          className: ({ isActive: s, isPending: a }) =>
                            s ? "active" : a ? "pending" : "",
                          to: r,
                          children: i,
                        }),
                      },
                      i
                    )
                  ),
                }),
              }),
            ],
          }),
          B("div", {
            id: "main",
            className: e === "loading" ? "loading" : "",
            children: B(fS, {}),
          }),
        ],
      }),
    })
  );
}
const Am = () => {
  const e = fy();
  return (
    console.error(e),
    vt("div", {
      id: "error-page",
      children: [
        " ",
        B("h1", { children: "Oops!" }),
        " ",
        B("p", { children: "Sorry, an unexpected error has occurred." }),
        " ",
        B("pre", { children: e.statusText || e.message }),
        " ",
      ],
    })
  );
};
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ function Nn() {}
const CS = (function () {
  let e = 0;
  return function () {
    return e++;
  };
})();
function Ct(e) {
  return e === null || typeof e > "u";
}
function Bt(e) {
  if (Array.isArray && Array.isArray(e)) return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function xt(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
const pe = (e) => (typeof e == "number" || e instanceof Number) && isFinite(+e);
function $e(e, t) {
  return pe(e) ? e : t;
}
function ht(e, t) {
  return typeof e > "u" ? t : e;
}
const LS = (e, t) =>
    typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : e / t,
  _y = (e, t) =>
    typeof e == "string" && e.endsWith("%") ? (parseFloat(e) / 100) * t : +e;
function At(e, t, n) {
  if (e && typeof e.call == "function") return e.apply(n, t);
}
function Et(e, t, n, i) {
  let r, s, a;
  if (Bt(e))
    if (((s = e.length), i)) for (r = s - 1; r >= 0; r--) t.call(n, e[r], r);
    else for (r = 0; r < s; r++) t.call(n, e[r], r);
  else if (xt(e))
    for (a = Object.keys(e), s = a.length, r = 0; r < s; r++)
      t.call(n, e[a[r]], a[r]);
}
function zl(e, t) {
  let n, i, r, s;
  if (!e || !t || e.length !== t.length) return !1;
  for (n = 0, i = e.length; n < i; ++n)
    if (
      ((r = e[n]),
      (s = t[n]),
      r.datasetIndex !== s.datasetIndex || r.index !== s.index)
    )
      return !1;
  return !0;
}
function Al(e) {
  if (Bt(e)) return e.map(Al);
  if (xt(e)) {
    const t = Object.create(null),
      n = Object.keys(e),
      i = n.length;
    let r = 0;
    for (; r < i; ++r) t[n[r]] = Al(e[n[r]]);
    return t;
  }
  return e;
}
function vy(e) {
  return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
}
function MS(e, t, n, i) {
  if (!vy(e)) return;
  const r = t[e],
    s = n[e];
  xt(r) && xt(s) ? Ds(r, s, i) : (t[e] = Al(s));
}
function Ds(e, t, n) {
  const i = Bt(t) ? t : [t],
    r = i.length;
  if (!xt(e)) return e;
  n = n || {};
  const s = n.merger || MS;
  for (let a = 0; a < r; ++a) {
    if (((t = i[a]), !xt(t))) continue;
    const u = Object.keys(t);
    for (let c = 0, d = u.length; c < d; ++c) s(u[c], e, t, n);
  }
  return e;
}
function ls(e, t) {
  return Ds(e, t, { merger: ES });
}
function ES(e, t, n) {
  if (!vy(e)) return;
  const i = t[e],
    r = n[e];
  xt(i) && xt(r)
    ? ls(i, r)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = Al(r));
}
const Im = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
function Li(e, t) {
  return (Im[t] || (Im[t] = TS(t)))(e);
}
function TS(e) {
  const t = OS(e);
  return (n) => {
    for (const i of t) {
      if (i === "") break;
      n = n && n[i];
    }
    return n;
  };
}
function OS(e) {
  const t = e.split("."),
    n = [];
  let i = "";
  for (const r of t)
    (i += r),
      i.endsWith("\\") ? (i = i.slice(0, -1) + ".") : (n.push(i), (i = ""));
  return n;
}
function Wd(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const en = (e) => typeof e < "u",
  Mi = (e) => typeof e == "function",
  Nm = (e, t) => {
    if (e.size !== t.size) return !1;
    for (const n of e) if (!t.has(n)) return !1;
    return !0;
  };
function DS(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const Wt = Math.PI,
  Rt = 2 * Wt,
  RS = Rt + Wt,
  Il = Number.POSITIVE_INFINITY,
  zS = Wt / 180,
  Kt = Wt / 2,
  Fo = Wt / 4,
  Bm = (Wt * 2) / 3,
  Xe = Math.log10,
  En = Math.sign;
function Fm(e) {
  const t = Math.round(e);
  e = us(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor(Xe(e))),
    i = e / n;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function AS(e) {
  const t = [],
    n = Math.sqrt(e);
  let i;
  for (i = 1; i < n; i++) e % i === 0 && (t.push(i), t.push(e / i));
  return n === (n | 0) && t.push(n), t.sort((r, s) => r - s).pop(), t;
}
function oo(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function us(e, t, n) {
  return Math.abs(e - t) < n;
}
function IS(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function yy(e, t, n) {
  let i, r, s;
  for (i = 0, r = e.length; i < r; i++)
    (s = e[i][n]),
      isNaN(s) || ((t.min = Math.min(t.min, s)), (t.max = Math.max(t.max, s)));
}
function hn(e) {
  return e * (Wt / 180);
}
function Hd(e) {
  return e * (180 / Wt);
}
function jm(e) {
  if (!pe(e)) return;
  let t = 1,
    n = 0;
  for (; Math.round(e * t) / t !== e; ) (t *= 10), n++;
  return n;
}
function xy(e, t) {
  const n = t.x - e.x,
    i = t.y - e.y,
    r = Math.sqrt(n * n + i * i);
  let s = Math.atan2(i, n);
  return s < -0.5 * Wt && (s += Rt), { angle: s, distance: r };
}
function Th(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function NS(e, t) {
  return ((e - t + RS) % Rt) - Wt;
}
function un(e) {
  return ((e % Rt) + Rt) % Rt;
}
function Rs(e, t, n, i) {
  const r = un(e),
    s = un(t),
    a = un(n),
    u = un(s - r),
    c = un(a - r),
    d = un(r - s),
    p = un(r - a);
  return r === s || r === a || (i && s === a) || (u > c && d < p);
}
function xe(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function BS(e) {
  return xe(e, -32768, 32767);
}
function fi(e, t, n, i = 1e-6) {
  return e >= Math.min(t, n) - i && e <= Math.max(t, n) + i;
}
function Vd(e, t, n) {
  n = n || ((a) => e[a] < t);
  let i = e.length - 1,
    r = 0,
    s;
  for (; i - r > 1; ) (s = (r + i) >> 1), n(s) ? (r = s) : (i = s);
  return { lo: r, hi: i };
}
const Ji = (e, t, n, i) =>
    Vd(e, n, i ? (r) => e[r][t] <= n : (r) => e[r][t] < n),
  FS = (e, t, n) => Vd(e, n, (i) => e[i][t] >= n);
function jS(e, t, n) {
  let i = 0,
    r = e.length;
  for (; i < r && e[i] < t; ) i++;
  for (; r > i && e[r - 1] > n; ) r--;
  return i > 0 || r < e.length ? e.slice(i, r) : e;
}
const wy = ["push", "pop", "shift", "splice", "unshift"];
function WS(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    wy.forEach((n) => {
      const i = "_onData" + Wd(n),
        r = e[n];
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value(...s) {
          const a = r.apply(this, s);
          return (
            e._chartjs.listeners.forEach((u) => {
              typeof u[i] == "function" && u[i](...s);
            }),
            a
          );
        },
      });
    });
}
function Wm(e, t) {
  const n = e._chartjs;
  if (!n) return;
  const i = n.listeners,
    r = i.indexOf(t);
  r !== -1 && i.splice(r, 1),
    !(i.length > 0) &&
      (wy.forEach((s) => {
        delete e[s];
      }),
      delete e._chartjs);
}
function by(e) {
  const t = new Set();
  let n, i;
  for (n = 0, i = e.length; n < i; ++n) t.add(e[n]);
  return t.size === i ? e : Array.from(t);
}
const Sy = (function () {
  return typeof window > "u"
    ? function (e) {
        return e();
      }
    : window.requestAnimationFrame;
})();
function Py(e, t, n) {
  const i = n || ((a) => Array.prototype.slice.call(a));
  let r = !1,
    s = [];
  return function (...a) {
    (s = i(a)),
      r ||
        ((r = !0),
        Sy.call(window, () => {
          (r = !1), e.apply(t, s);
        }));
  };
}
function HS(e, t) {
  let n;
  return function (...i) {
    return (
      t ? (clearTimeout(n), (n = setTimeout(e, t, i))) : e.apply(this, i), t
    );
  };
}
const Zd = (e) => (e === "start" ? "left" : e === "end" ? "right" : "center"),
  ve = (e, t, n) => (e === "start" ? t : e === "end" ? n : (t + n) / 2),
  VS = (e, t, n, i) =>
    e === (i ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;
function ky(e, t, n) {
  const i = t.length;
  let r = 0,
    s = i;
  if (e._sorted) {
    const { iScale: a, _parsed: u } = e,
      c = a.axis,
      { min: d, max: p, minDefined: g, maxDefined: m } = a.getUserBounds();
    g &&
      (r = xe(
        Math.min(
          Ji(u, a.axis, d).lo,
          n ? i : Ji(t, c, a.getPixelForValue(d)).lo
        ),
        0,
        i - 1
      )),
      m
        ? (s =
            xe(
              Math.max(
                Ji(u, a.axis, p, !0).hi + 1,
                n ? 0 : Ji(t, c, a.getPixelForValue(p), !0).hi + 1
              ),
              r,
              i
            ) - r)
        : (s = i - r);
  }
  return { start: r, count: s };
}
function Cy(e) {
  const { xScale: t, yScale: n, _scaleRanges: i } = e,
    r = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max };
  if (!i) return (e._scaleRanges = r), !0;
  const s =
    i.xmin !== t.min ||
    i.xmax !== t.max ||
    i.ymin !== n.min ||
    i.ymax !== n.max;
  return Object.assign(i, r), s;
}
const Ba = (e) => e === 0 || e === 1,
  Hm = (e, t, n) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * Rt) / n)),
  Vm = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * Rt) / n) + 1,
  cs = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => -e * (e - 2),
    easeInOutQuad: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => (e -= 1) * e * e + 1,
    easeInOutCubic: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: (e) =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: (e) => -Math.cos(e * Kt) + 1,
    easeOutSine: (e) => Math.sin(e * Kt),
    easeInOutSine: (e) => -0.5 * (Math.cos(Wt * e) - 1),
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: (e) =>
      Ba(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: (e) =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: (e) => (Ba(e) ? e : Hm(e, 0.075, 0.3)),
    easeOutElastic: (e) => (Ba(e) ? e : Vm(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return Ba(e)
        ? e
        : e < 0.5
        ? 0.5 * Hm(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * Vm(e * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158);
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
    },
    easeInOutBack(e) {
      let t = 1.70158;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    },
    easeInBounce: (e) => 1 - cs.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    },
    easeInOutBounce: (e) =>
      e < 0.5
        ? cs.easeInBounce(e * 2) * 0.5
        : cs.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  };
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */ function $s(e) {
  return (e + 0.5) | 0;
}
const pi = (e, t, n) => Math.max(Math.min(e, n), t);
function Go(e) {
  return pi($s(e * 2.55), 0, 255);
}
function Pi(e) {
  return pi($s(e * 255), 0, 255);
}
function Hn(e) {
  return pi($s(e / 2.55) / 100, 0, 1);
}
function Zm(e) {
  return pi($s(e * 100), 0, 100);
}
const Ue = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Oh = [..."0123456789ABCDEF"],
  ZS = (e) => Oh[e & 15],
  US = (e) => Oh[(e & 240) >> 4] + Oh[e & 15],
  Fa = (e) => (e & 240) >> 4 === (e & 15),
  $S = (e) => Fa(e.r) && Fa(e.g) && Fa(e.b) && Fa(e.a);
function YS(e) {
  var t = e.length,
    n;
  return (
    e[0] === "#" &&
      (t === 4 || t === 5
        ? (n = {
            r: 255 & (Ue[e[1]] * 17),
            g: 255 & (Ue[e[2]] * 17),
            b: 255 & (Ue[e[3]] * 17),
            a: t === 5 ? Ue[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (n = {
            r: (Ue[e[1]] << 4) | Ue[e[2]],
            g: (Ue[e[3]] << 4) | Ue[e[4]],
            b: (Ue[e[5]] << 4) | Ue[e[6]],
            a: t === 9 ? (Ue[e[7]] << 4) | Ue[e[8]] : 255,
          })),
    n
  );
}
const KS = (e, t) => (e < 255 ? t(e) : "");
function XS(e) {
  var t = $S(e) ? ZS : US;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + KS(e.a, t) : void 0;
}
const GS =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ly(e, t, n) {
  const i = t * Math.min(n, 1 - n),
    r = (s, a = (s + e / 30) % 12) =>
      n - i * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [r(0), r(8), r(4)];
}
function QS(e, t, n) {
  const i = (r, s = (r + e / 60) % 6) =>
    n - n * t * Math.max(Math.min(s, 4 - s, 1), 0);
  return [i(5), i(3), i(1)];
}
function qS(e, t, n) {
  const i = Ly(e, 1, 0.5);
  let r;
  for (t + n > 1 && ((r = 1 / (t + n)), (t *= r), (n *= r)), r = 0; r < 3; r++)
    (i[r] *= 1 - t - n), (i[r] += t);
  return i;
}
function JS(e, t, n, i, r) {
  return e === r
    ? (t - n) / i + (t < n ? 6 : 0)
    : t === r
    ? (n - e) / i + 2
    : (e - t) / i + 4;
}
function Ud(e) {
  const n = e.r / 255,
    i = e.g / 255,
    r = e.b / 255,
    s = Math.max(n, i, r),
    a = Math.min(n, i, r),
    u = (s + a) / 2;
  let c, d, p;
  return (
    s !== a &&
      ((p = s - a),
      (d = u > 0.5 ? p / (2 - s - a) : p / (s + a)),
      (c = JS(n, i, r, p, s)),
      (c = c * 60 + 0.5)),
    [c | 0, d || 0, u]
  );
}
function $d(e, t, n, i) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, i)).map(Pi);
}
function Yd(e, t, n) {
  return $d(Ly, e, t, n);
}
function tP(e, t, n) {
  return $d(qS, e, t, n);
}
function eP(e, t, n) {
  return $d(QS, e, t, n);
}
function My(e) {
  return ((e % 360) + 360) % 360;
}
function nP(e) {
  const t = GS.exec(e);
  let n = 255,
    i;
  if (!t) return;
  t[5] !== i && (n = t[6] ? Go(+t[5]) : Pi(+t[5]));
  const r = My(+t[2]),
    s = +t[3] / 100,
    a = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (i = tP(r, s, a))
      : t[1] === "hsv"
      ? (i = eP(r, s, a))
      : (i = Yd(r, s, a)),
    { r: i[0], g: i[1], b: i[2], a: n }
  );
}
function iP(e, t) {
  var n = Ud(e);
  (n[0] = My(n[0] + t)), (n = Yd(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2]);
}
function rP(e) {
  if (!e) return;
  const t = Ud(e),
    n = t[0],
    i = Zm(t[1]),
    r = Zm(t[2]);
  return e.a < 255
    ? `hsla(${n}, ${i}%, ${r}%, ${Hn(e.a)})`
    : `hsl(${n}, ${i}%, ${r}%)`;
}
const Um = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  $m = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function oP() {
  const e = {},
    t = Object.keys($m),
    n = Object.keys(Um);
  let i, r, s, a, u;
  for (i = 0; i < t.length; i++) {
    for (a = u = t[i], r = 0; r < n.length; r++)
      (s = n[r]), (u = u.replace(s, Um[s]));
    (s = parseInt($m[a], 16)),
      (e[u] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
  }
  return e;
}
let ja;
function sP(e) {
  ja || ((ja = oP()), (ja.transparent = [0, 0, 0, 0]));
  const t = ja[e.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const aP =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function lP(e) {
  const t = aP.exec(e);
  let n = 255,
    i,
    r,
    s;
  if (!!t) {
    if (t[7] !== i) {
      const a = +t[7];
      n = t[8] ? Go(a) : pi(a * 255, 0, 255);
    }
    return (
      (i = +t[1]),
      (r = +t[3]),
      (s = +t[5]),
      (i = 255 & (t[2] ? Go(i) : pi(i, 0, 255))),
      (r = 255 & (t[4] ? Go(r) : pi(r, 0, 255))),
      (s = 255 & (t[6] ? Go(s) : pi(s, 0, 255))),
      { r: i, g: r, b: s, a: n }
    );
  }
}
function uP(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Hn(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  );
}
const Sc = (e) =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  Er = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
function cP(e, t, n) {
  const i = Er(Hn(e.r)),
    r = Er(Hn(e.g)),
    s = Er(Hn(e.b));
  return {
    r: Pi(Sc(i + n * (Er(Hn(t.r)) - i))),
    g: Pi(Sc(r + n * (Er(Hn(t.g)) - r))),
    b: Pi(Sc(s + n * (Er(Hn(t.b)) - s))),
    a: e.a + n * (t.a - e.a),
  };
}
function Wa(e, t, n) {
  if (e) {
    let i = Ud(e);
    (i[t] = Math.max(0, Math.min(i[t] + i[t] * n, t === 0 ? 360 : 1))),
      (i = Yd(i)),
      (e.r = i[0]),
      (e.g = i[1]),
      (e.b = i[2]);
  }
}
function Ey(e, t) {
  return e && Object.assign(t || {}, e);
}
function Ym(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = Pi(e[3])))
      : ((t = Ey(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Pi(t.a))),
    t
  );
}
function hP(e) {
  return e.charAt(0) === "r" ? lP(e) : nP(e);
}
class Nl {
  constructor(t) {
    if (t instanceof Nl) return t;
    const n = typeof t;
    let i;
    n === "object"
      ? (i = Ym(t))
      : n === "string" && (i = YS(t) || sP(t) || hP(t)),
      (this._rgb = i),
      (this._valid = !!i);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Ey(this._rgb);
    return t && (t.a = Hn(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Ym(t);
  }
  rgbString() {
    return this._valid ? uP(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? XS(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? rP(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const i = this.rgb,
        r = t.rgb;
      let s;
      const a = n === s ? 0.5 : n,
        u = 2 * a - 1,
        c = i.a - r.a,
        d = ((u * c === -1 ? u : (u + c) / (1 + u * c)) + 1) / 2;
      (s = 1 - d),
        (i.r = 255 & (d * i.r + s * r.r + 0.5)),
        (i.g = 255 & (d * i.g + s * r.g + 0.5)),
        (i.b = 255 & (d * i.b + s * r.b + 0.5)),
        (i.a = a * i.a + (1 - a) * r.a),
        (this.rgb = i);
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = cP(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new Nl(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = Pi(t)), this;
  }
  clearer(t) {
    const n = this._rgb;
    return (n.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      n = $s(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = n), this;
  }
  opaquer(t) {
    const n = this._rgb;
    return (n.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return Wa(this._rgb, 2, t), this;
  }
  darken(t) {
    return Wa(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Wa(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Wa(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return iP(this._rgb, t), this;
  }
}
function Ty(e) {
  return new Nl(e);
}
function Oy(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Km(e) {
  return Oy(e) ? e : Ty(e);
}
function Pc(e) {
  return Oy(e) ? e : Ty(e).saturate(0.5).darken(0.1).hexString();
}
const cr = Object.create(null),
  Dh = Object.create(null);
function hs(e, t) {
  if (!t) return e;
  const n = t.split(".");
  for (let i = 0, r = n.length; i < r; ++i) {
    const s = n[i];
    e = e[s] || (e[s] = Object.create(null));
  }
  return e;
}
function kc(e, t, n) {
  return typeof t == "string" ? Ds(hs(e, t), n) : Ds(hs(e, ""), t);
}
class dP {
  constructor(t) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (n, i) => Pc(i.backgroundColor)),
      (this.hoverBorderColor = (n, i) => Pc(i.borderColor)),
      (this.hoverColor = (n, i) => Pc(i.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t);
  }
  set(t, n) {
    return kc(this, t, n);
  }
  get(t) {
    return hs(this, t);
  }
  describe(t, n) {
    return kc(Dh, t, n);
  }
  override(t, n) {
    return kc(cr, t, n);
  }
  route(t, n, i, r) {
    const s = hs(this, t),
      a = hs(this, i),
      u = "_" + n;
    Object.defineProperties(s, {
      [u]: { value: s[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const c = this[u],
            d = a[r];
          return xt(c) ? Object.assign({}, d, c) : ht(c, d);
        },
        set(c) {
          this[u] = c;
        },
      },
    });
  }
}
var pt = new dP({
  _scriptable: (e) => !e.startsWith("on"),
  _indexable: (e) => e !== "events",
  hover: { _fallback: "interaction" },
  interaction: { _scriptable: !1, _indexable: !1 },
});
function fP(e) {
  return !e || Ct(e.size) || Ct(e.family)
    ? null
    : (e.style ? e.style + " " : "") +
        (e.weight ? e.weight + " " : "") +
        e.size +
        "px " +
        e.family;
}
function Bl(e, t, n, i, r) {
  let s = t[r];
  return (
    s || ((s = t[r] = e.measureText(r).width), n.push(r)), s > i && (i = s), i
  );
}
function pP(e, t, n, i) {
  i = i || {};
  let r = (i.data = i.data || {}),
    s = (i.garbageCollect = i.garbageCollect || []);
  i.font !== t &&
    ((r = i.data = {}), (s = i.garbageCollect = []), (i.font = t)),
    e.save(),
    (e.font = t);
  let a = 0;
  const u = n.length;
  let c, d, p, g, m;
  for (c = 0; c < u; c++)
    if (((g = n[c]), g != null && Bt(g) !== !0)) a = Bl(e, r, s, a, g);
    else if (Bt(g))
      for (d = 0, p = g.length; d < p; d++)
        (m = g[d]), m != null && !Bt(m) && (a = Bl(e, r, s, a, m));
  e.restore();
  const v = s.length / 2;
  if (v > n.length) {
    for (c = 0; c < v; c++) delete r[s[c]];
    s.splice(0, v);
  }
  return a;
}
function Vi(e, t, n) {
  const i = e.currentDevicePixelRatio,
    r = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - r) * i) / i + r;
}
function Xm(e, t) {
  (t = t || e.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore();
}
function Rh(e, t, n, i) {
  Dy(e, t, n, i, null);
}
function Dy(e, t, n, i, r) {
  let s, a, u, c, d, p;
  const g = t.pointStyle,
    m = t.rotation,
    v = t.radius;
  let y = (m || 0) * zS;
  if (
    g &&
    typeof g == "object" &&
    ((s = g.toString()),
    s === "[object HTMLImageElement]" || s === "[object HTMLCanvasElement]")
  ) {
    e.save(),
      e.translate(n, i),
      e.rotate(y),
      e.drawImage(g, -g.width / 2, -g.height / 2, g.width, g.height),
      e.restore();
    return;
  }
  if (!(isNaN(v) || v <= 0)) {
    switch ((e.beginPath(), g)) {
      default:
        r ? e.ellipse(n, i, r / 2, v, 0, 0, Rt) : e.arc(n, i, v, 0, Rt),
          e.closePath();
        break;
      case "triangle":
        e.moveTo(n + Math.sin(y) * v, i - Math.cos(y) * v),
          (y += Bm),
          e.lineTo(n + Math.sin(y) * v, i - Math.cos(y) * v),
          (y += Bm),
          e.lineTo(n + Math.sin(y) * v, i - Math.cos(y) * v),
          e.closePath();
        break;
      case "rectRounded":
        (d = v * 0.516),
          (c = v - d),
          (a = Math.cos(y + Fo) * c),
          (u = Math.sin(y + Fo) * c),
          e.arc(n - a, i - u, d, y - Wt, y - Kt),
          e.arc(n + u, i - a, d, y - Kt, y),
          e.arc(n + a, i + u, d, y, y + Kt),
          e.arc(n - u, i + a, d, y + Kt, y + Wt),
          e.closePath();
        break;
      case "rect":
        if (!m) {
          (c = Math.SQRT1_2 * v),
            (p = r ? r / 2 : c),
            e.rect(n - p, i - c, 2 * p, 2 * c);
          break;
        }
        y += Fo;
      case "rectRot":
        (a = Math.cos(y) * v),
          (u = Math.sin(y) * v),
          e.moveTo(n - a, i - u),
          e.lineTo(n + u, i - a),
          e.lineTo(n + a, i + u),
          e.lineTo(n - u, i + a),
          e.closePath();
        break;
      case "crossRot":
        y += Fo;
      case "cross":
        (a = Math.cos(y) * v),
          (u = Math.sin(y) * v),
          e.moveTo(n - a, i - u),
          e.lineTo(n + a, i + u),
          e.moveTo(n + u, i - a),
          e.lineTo(n - u, i + a);
        break;
      case "star":
        (a = Math.cos(y) * v),
          (u = Math.sin(y) * v),
          e.moveTo(n - a, i - u),
          e.lineTo(n + a, i + u),
          e.moveTo(n + u, i - a),
          e.lineTo(n - u, i + a),
          (y += Fo),
          (a = Math.cos(y) * v),
          (u = Math.sin(y) * v),
          e.moveTo(n - a, i - u),
          e.lineTo(n + a, i + u),
          e.moveTo(n + u, i - a),
          e.lineTo(n - u, i + a);
        break;
      case "line":
        (a = r ? r / 2 : Math.cos(y) * v),
          (u = Math.sin(y) * v),
          e.moveTo(n - a, i - u),
          e.lineTo(n + a, i + u);
        break;
      case "dash":
        e.moveTo(n, i), e.lineTo(n + Math.cos(y) * v, i + Math.sin(y) * v);
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function zs(e, t, n) {
  return (
    (n = n || 0.5),
    !t ||
      (e &&
        e.x > t.left - n &&
        e.x < t.right + n &&
        e.y > t.top - n &&
        e.y < t.bottom + n)
  );
}
function Kd(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip();
}
function Xd(e) {
  e.restore();
}
function mP(e, t, n, i, r) {
  if (!t) return e.lineTo(n.x, n.y);
  if (r === "middle") {
    const s = (t.x + n.x) / 2;
    e.lineTo(s, t.y), e.lineTo(s, n.y);
  } else (r === "after") != !!i ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
  e.lineTo(n.x, n.y);
}
function gP(e, t, n, i) {
  if (!t) return e.lineTo(n.x, n.y);
  e.bezierCurveTo(
    i ? t.cp1x : t.cp2x,
    i ? t.cp1y : t.cp2y,
    i ? n.cp2x : n.cp1x,
    i ? n.cp2y : n.cp1y,
    n.x,
    n.y
  );
}
function hr(e, t, n, i, r, s = {}) {
  const a = Bt(t) ? t : [t],
    u = s.strokeWidth > 0 && s.strokeColor !== "";
  let c, d;
  for (e.save(), e.font = r.string, _P(e, s), c = 0; c < a.length; ++c)
    (d = a[c]),
      u &&
        (s.strokeColor && (e.strokeStyle = s.strokeColor),
        Ct(s.strokeWidth) || (e.lineWidth = s.strokeWidth),
        e.strokeText(d, n, i, s.maxWidth)),
      e.fillText(d, n, i, s.maxWidth),
      vP(e, n, i, d, s),
      (i += r.lineHeight);
  e.restore();
}
function _P(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    Ct(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline);
}
function vP(e, t, n, i, r) {
  if (r.strikethrough || r.underline) {
    const s = e.measureText(i),
      a = t - s.actualBoundingBoxLeft,
      u = t + s.actualBoundingBoxRight,
      c = n - s.actualBoundingBoxAscent,
      d = n + s.actualBoundingBoxDescent,
      p = r.strikethrough ? (c + d) / 2 : d;
    (e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = r.decorationWidth || 2),
      e.moveTo(a, p),
      e.lineTo(u, p),
      e.stroke();
  }
}
function As(e, t) {
  const { x: n, y: i, w: r, h: s, radius: a } = t;
  e.arc(n + a.topLeft, i + a.topLeft, a.topLeft, -Kt, Wt, !0),
    e.lineTo(n, i + s - a.bottomLeft),
    e.arc(n + a.bottomLeft, i + s - a.bottomLeft, a.bottomLeft, Wt, Kt, !0),
    e.lineTo(n + r - a.bottomRight, i + s),
    e.arc(
      n + r - a.bottomRight,
      i + s - a.bottomRight,
      a.bottomRight,
      Kt,
      0,
      !0
    ),
    e.lineTo(n + r, i + a.topRight),
    e.arc(n + r - a.topRight, i + a.topRight, a.topRight, 0, -Kt, !0),
    e.lineTo(n + a.topLeft, i);
}
const yP = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
  xP = new RegExp(
    /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
  );
function wP(e, t) {
  const n = ("" + e).match(yP);
  if (!n || n[1] === "normal") return t * 1.2;
  switch (((e = +n[2]), n[3])) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const bP = (e) => +e || 0;
function Gd(e, t) {
  const n = {},
    i = xt(t),
    r = i ? Object.keys(t) : t,
    s = xt(e) ? (i ? (a) => ht(e[a], e[t[a]]) : (a) => e[a]) : () => e;
  for (const a of r) n[a] = bP(s(a));
  return n;
}
function Ry(e) {
  return Gd(e, { top: "y", right: "x", bottom: "y", left: "x" });
}
function ir(e) {
  return Gd(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function be(e) {
  const t = Ry(e);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function re(e, t) {
  (e = e || {}), (t = t || pt.font);
  let n = ht(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let i = ht(e.style, t.style);
  i &&
    !("" + i).match(xP) &&
    (console.warn('Invalid font style specified: "' + i + '"'), (i = ""));
  const r = {
    family: ht(e.family, t.family),
    lineHeight: wP(ht(e.lineHeight, t.lineHeight), n),
    size: n,
    style: i,
    weight: ht(e.weight, t.weight),
    string: "",
  };
  return (r.string = fP(r)), r;
}
function Ha(e, t, n, i) {
  let r = !0,
    s,
    a,
    u;
  for (s = 0, a = e.length; s < a; ++s)
    if (
      ((u = e[s]),
      u !== void 0 &&
        (t !== void 0 && typeof u == "function" && ((u = u(t)), (r = !1)),
        n !== void 0 && Bt(u) && ((u = u[n % u.length]), (r = !1)),
        u !== void 0))
    )
      return i && !r && (i.cacheable = !1), u;
}
function SP(e, t, n) {
  const { min: i, max: r } = e,
    s = _y(t, (r - i) / 2),
    a = (u, c) => (n && u === 0 ? 0 : u + c);
  return { min: a(i, -Math.abs(s)), max: a(r, s) };
}
function Ri(e, t) {
  return Object.assign(Object.create(e), t);
}
function Qd(e, t = [""], n = e, i, r = () => e[0]) {
  en(i) || (i = Ny("_fallback", e));
  const s = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: n,
    _fallback: i,
    _getTarget: r,
    override: (a) => Qd([a, ...e], t, n, i),
  };
  return new Proxy(s, {
    deleteProperty(a, u) {
      return delete a[u], delete a._keys, delete e[0][u], !0;
    },
    get(a, u) {
      return Ay(a, u, () => OP(u, t, e, a));
    },
    getOwnPropertyDescriptor(a, u) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], u);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    has(a, u) {
      return Qm(a).includes(u);
    },
    ownKeys(a) {
      return Qm(a);
    },
    set(a, u, c) {
      const d = a._storage || (a._storage = r());
      return (a[u] = d[u] = c), delete a._keys, !0;
    },
  });
}
function so(e, t, n, i) {
  const r = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: zy(e, i),
    setContext: (s) => so(e, s, n, i),
    override: (s) => so(e.override(s), t, n, i),
  };
  return new Proxy(r, {
    deleteProperty(s, a) {
      return delete s[a], delete e[a], !0;
    },
    get(s, a, u) {
      return Ay(s, a, () => kP(s, a, u));
    },
    getOwnPropertyDescriptor(s, a) {
      return s._descriptors.allKeys
        ? Reflect.has(e, a)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    has(s, a) {
      return Reflect.has(e, a);
    },
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    set(s, a, u) {
      return (e[a] = u), delete s[a], !0;
    },
  });
}
function zy(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = t.scriptable,
    _indexable: i = t.indexable,
    _allKeys: r = t.allKeys,
  } = e;
  return {
    allKeys: r,
    scriptable: n,
    indexable: i,
    isScriptable: Mi(n) ? n : () => n,
    isIndexable: Mi(i) ? i : () => i,
  };
}
const PP = (e, t) => (e ? e + Wd(t) : t),
  qd = (e, t) =>
    xt(t) &&
    e !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Ay(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
  const i = n();
  return (e[t] = i), i;
}
function kP(e, t, n) {
  const { _proxy: i, _context: r, _subProxy: s, _descriptors: a } = e;
  let u = i[t];
  return (
    Mi(u) && a.isScriptable(t) && (u = CP(t, u, e, n)),
    Bt(u) && u.length && (u = LP(t, u, e, a.isIndexable)),
    qd(t, u) && (u = so(u, r, s && s[t], a)),
    u
  );
}
function CP(e, t, n, i) {
  const { _proxy: r, _context: s, _subProxy: a, _stack: u } = n;
  if (u.has(e))
    throw new Error(
      "Recursion detected: " + Array.from(u).join("->") + "->" + e
    );
  return (
    u.add(e),
    (t = t(s, a || i)),
    u.delete(e),
    qd(e, t) && (t = Jd(r._scopes, r, e, t)),
    t
  );
}
function LP(e, t, n, i) {
  const { _proxy: r, _context: s, _subProxy: a, _descriptors: u } = n;
  if (en(s.index) && i(e)) t = t[s.index % t.length];
  else if (xt(t[0])) {
    const c = t,
      d = r._scopes.filter((p) => p !== c);
    t = [];
    for (const p of c) {
      const g = Jd(d, r, e, p);
      t.push(so(g, s, a && a[e], u));
    }
  }
  return t;
}
function Iy(e, t, n) {
  return Mi(e) ? e(t, n) : e;
}
const MP = (e, t) => (e === !0 ? t : typeof e == "string" ? Li(t, e) : void 0);
function EP(e, t, n, i, r) {
  for (const s of t) {
    const a = MP(n, s);
    if (a) {
      e.add(a);
      const u = Iy(a._fallback, n, r);
      if (en(u) && u !== n && u !== i) return u;
    } else if (a === !1 && en(i) && n !== i) return null;
  }
  return !1;
}
function Jd(e, t, n, i) {
  const r = t._rootScopes,
    s = Iy(t._fallback, n, i),
    a = [...e, ...r],
    u = new Set();
  u.add(i);
  let c = Gm(u, a, n, s || n, i);
  return c === null ||
    (en(s) && s !== n && ((c = Gm(u, a, s, c, i)), c === null))
    ? !1
    : Qd(Array.from(u), [""], r, s, () => TP(t, n, i));
}
function Gm(e, t, n, i, r) {
  for (; n; ) n = EP(e, t, n, i, r);
  return n;
}
function TP(e, t, n) {
  const i = e._getTarget();
  t in i || (i[t] = {});
  const r = i[t];
  return Bt(r) && xt(n) ? n : r;
}
function OP(e, t, n, i) {
  let r;
  for (const s of t)
    if (((r = Ny(PP(s, e), n)), en(r))) return qd(e, r) ? Jd(n, i, e, r) : r;
}
function Ny(e, t) {
  for (const n of t) {
    if (!n) continue;
    const i = n[e];
    if (en(i)) return i;
  }
}
function Qm(e) {
  let t = e._keys;
  return t || (t = e._keys = DP(e._scopes)), t;
}
function DP(e) {
  const t = new Set();
  for (const n of e)
    for (const i of Object.keys(n).filter((r) => !r.startsWith("_"))) t.add(i);
  return Array.from(t);
}
function By(e, t, n, i) {
  const { iScale: r } = e,
    { key: s = "r" } = this._parsing,
    a = new Array(i);
  let u, c, d, p;
  for (u = 0, c = i; u < c; ++u)
    (d = u + n), (p = t[d]), (a[u] = { r: r.parse(Li(p, s), d) });
  return a;
}
const RP = Number.EPSILON || 1e-14,
  ao = (e, t) => t < e.length && !e[t].skip && e[t],
  Fy = (e) => (e === "x" ? "y" : "x");
function zP(e, t, n, i) {
  const r = e.skip ? t : e,
    s = t,
    a = n.skip ? t : n,
    u = Th(s, r),
    c = Th(a, s);
  let d = u / (u + c),
    p = c / (u + c);
  (d = isNaN(d) ? 0 : d), (p = isNaN(p) ? 0 : p);
  const g = i * d,
    m = i * p;
  return {
    previous: { x: s.x - g * (a.x - r.x), y: s.y - g * (a.y - r.y) },
    next: { x: s.x + m * (a.x - r.x), y: s.y + m * (a.y - r.y) },
  };
}
function AP(e, t, n) {
  const i = e.length;
  let r,
    s,
    a,
    u,
    c,
    d = ao(e, 0);
  for (let p = 0; p < i - 1; ++p)
    if (((c = d), (d = ao(e, p + 1)), !(!c || !d))) {
      if (us(t[p], 0, RP)) {
        n[p] = n[p + 1] = 0;
        continue;
      }
      (r = n[p] / t[p]),
        (s = n[p + 1] / t[p]),
        (u = Math.pow(r, 2) + Math.pow(s, 2)),
        !(u <= 9) &&
          ((a = 3 / Math.sqrt(u)),
          (n[p] = r * a * t[p]),
          (n[p + 1] = s * a * t[p]));
    }
}
function IP(e, t, n = "x") {
  const i = Fy(n),
    r = e.length;
  let s,
    a,
    u,
    c = ao(e, 0);
  for (let d = 0; d < r; ++d) {
    if (((a = u), (u = c), (c = ao(e, d + 1)), !u)) continue;
    const p = u[n],
      g = u[i];
    a &&
      ((s = (p - a[n]) / 3),
      (u[`cp1${n}`] = p - s),
      (u[`cp1${i}`] = g - s * t[d])),
      c &&
        ((s = (c[n] - p) / 3),
        (u[`cp2${n}`] = p + s),
        (u[`cp2${i}`] = g + s * t[d]));
  }
}
function NP(e, t = "x") {
  const n = Fy(t),
    i = e.length,
    r = Array(i).fill(0),
    s = Array(i);
  let a,
    u,
    c,
    d = ao(e, 0);
  for (a = 0; a < i; ++a)
    if (((u = c), (c = d), (d = ao(e, a + 1)), !!c)) {
      if (d) {
        const p = d[t] - c[t];
        r[a] = p !== 0 ? (d[n] - c[n]) / p : 0;
      }
      s[a] = u
        ? d
          ? En(r[a - 1]) !== En(r[a])
            ? 0
            : (r[a - 1] + r[a]) / 2
          : r[a - 1]
        : r[a];
    }
  AP(e, r, s), IP(e, s, t);
}
function Va(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function BP(e, t) {
  let n,
    i,
    r,
    s,
    a,
    u = zs(e[0], t);
  for (n = 0, i = e.length; n < i; ++n)
    (a = s),
      (s = u),
      (u = n < i - 1 && zs(e[n + 1], t)),
      s &&
        ((r = e[n]),
        a &&
          ((r.cp1x = Va(r.cp1x, t.left, t.right)),
          (r.cp1y = Va(r.cp1y, t.top, t.bottom))),
        u &&
          ((r.cp2x = Va(r.cp2x, t.left, t.right)),
          (r.cp2y = Va(r.cp2y, t.top, t.bottom))));
}
function FP(e, t, n, i, r) {
  let s, a, u, c;
  if (
    (t.spanGaps && (e = e.filter((d) => !d.skip)),
    t.cubicInterpolationMode === "monotone")
  )
    NP(e, r);
  else {
    let d = i ? e[e.length - 1] : e[0];
    for (s = 0, a = e.length; s < a; ++s)
      (u = e[s]),
        (c = zP(d, u, e[Math.min(s + 1, a - (i ? 0 : 1)) % a], t.tension)),
        (u.cp1x = c.previous.x),
        (u.cp1y = c.previous.y),
        (u.cp2x = c.next.x),
        (u.cp2y = c.next.y),
        (d = u);
  }
  t.capBezierPoints && BP(e, n);
}
function jy() {
  return typeof window < "u" && typeof document < "u";
}
function tf(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Fl(e, t, n) {
  let i;
  return (
    typeof e == "string"
      ? ((i = parseInt(e, 10)),
        e.indexOf("%") !== -1 && (i = (i / 100) * t.parentNode[n]))
      : (i = e),
    i
  );
}
const cu = (e) => window.getComputedStyle(e, null);
function jP(e, t) {
  return cu(e).getPropertyValue(t);
}
const WP = ["top", "right", "bottom", "left"];
function rr(e, t, n) {
  const i = {};
  n = n ? "-" + n : "";
  for (let r = 0; r < 4; r++) {
    const s = WP[r];
    i[s] = parseFloat(e[t + "-" + s + n]) || 0;
  }
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const HP = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function VP(e, t) {
  const n = e.touches,
    i = n && n.length ? n[0] : e,
    { offsetX: r, offsetY: s } = i;
  let a = !1,
    u,
    c;
  if (HP(r, s, e.target)) (u = r), (c = s);
  else {
    const d = t.getBoundingClientRect();
    (u = i.clientX - d.left), (c = i.clientY - d.top), (a = !0);
  }
  return { x: u, y: c, box: a };
}
function Yi(e, t) {
  if ("native" in e) return e;
  const { canvas: n, currentDevicePixelRatio: i } = t,
    r = cu(n),
    s = r.boxSizing === "border-box",
    a = rr(r, "padding"),
    u = rr(r, "border", "width"),
    { x: c, y: d, box: p } = VP(e, n),
    g = a.left + (p && u.left),
    m = a.top + (p && u.top);
  let { width: v, height: y } = t;
  return (
    s && ((v -= a.width + u.width), (y -= a.height + u.height)),
    {
      x: Math.round((((c - g) / v) * n.width) / i),
      y: Math.round((((d - m) / y) * n.height) / i),
    }
  );
}
function ZP(e, t, n) {
  let i, r;
  if (t === void 0 || n === void 0) {
    const s = tf(e);
    if (!s) (t = e.clientWidth), (n = e.clientHeight);
    else {
      const a = s.getBoundingClientRect(),
        u = cu(s),
        c = rr(u, "border", "width"),
        d = rr(u, "padding");
      (t = a.width - d.width - c.width),
        (n = a.height - d.height - c.height),
        (i = Fl(u.maxWidth, s, "clientWidth")),
        (r = Fl(u.maxHeight, s, "clientHeight"));
    }
  }
  return { width: t, height: n, maxWidth: i || Il, maxHeight: r || Il };
}
const Cc = (e) => Math.round(e * 10) / 10;
function UP(e, t, n, i) {
  const r = cu(e),
    s = rr(r, "margin"),
    a = Fl(r.maxWidth, e, "clientWidth") || Il,
    u = Fl(r.maxHeight, e, "clientHeight") || Il,
    c = ZP(e, t, n);
  let { width: d, height: p } = c;
  if (r.boxSizing === "content-box") {
    const g = rr(r, "border", "width"),
      m = rr(r, "padding");
    (d -= m.width + g.width), (p -= m.height + g.height);
  }
  return (
    (d = Math.max(0, d - s.width)),
    (p = Math.max(0, i ? Math.floor(d / i) : p - s.height)),
    (d = Cc(Math.min(d, a, c.maxWidth))),
    (p = Cc(Math.min(p, u, c.maxHeight))),
    d && !p && (p = Cc(d / 2)),
    { width: d, height: p }
  );
}
function qm(e, t, n) {
  const i = t || 1,
    r = Math.floor(e.height * i),
    s = Math.floor(e.width * i);
  (e.height = r / i), (e.width = s / i);
  const a = e.canvas;
  return (
    a.style &&
      (n || (!a.style.height && !a.style.width)) &&
      ((a.style.height = `${e.height}px`), (a.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== i || a.height !== r || a.width !== s
      ? ((e.currentDevicePixelRatio = i),
        (a.height = r),
        (a.width = s),
        e.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0)
      : !1
  );
}
const $P = (function () {
  let e = !1;
  try {
    const t = {
      get passive() {
        return (e = !0), !1;
      },
    };
    window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t);
  } catch {}
  return e;
})();
function Jm(e, t) {
  const n = jP(e, t),
    i = n && n.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function Ki(e, t, n, i) {
  return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) };
}
function YP(e, t, n, i) {
  return {
    x: e.x + n * (t.x - e.x),
    y:
      i === "middle"
        ? n < 0.5
          ? e.y
          : t.y
        : i === "after"
        ? n < 1
          ? e.y
          : t.y
        : n > 0
        ? t.y
        : e.y,
  };
}
function KP(e, t, n, i) {
  const r = { x: e.cp2x, y: e.cp2y },
    s = { x: t.cp1x, y: t.cp1y },
    a = Ki(e, r, n),
    u = Ki(r, s, n),
    c = Ki(s, t, n),
    d = Ki(a, u, n),
    p = Ki(u, c, n);
  return Ki(d, p, n);
}
const tg = new Map();
function XP(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let i = tg.get(n);
  return i || ((i = new Intl.NumberFormat(e, t)), tg.set(n, i)), i;
}
function Ys(e, t, n) {
  return XP(t, n).format(e);
}
const GP = function (e, t) {
    return {
      x(n) {
        return e + e + t - n;
      },
      setWidth(n) {
        t = n;
      },
      textAlign(n) {
        return n === "center" ? n : n === "right" ? "left" : "right";
      },
      xPlus(n, i) {
        return n - i;
      },
      leftForLtr(n, i) {
        return n - i;
      },
    };
  },
  QP = function () {
    return {
      x(e) {
        return e;
      },
      setWidth(e) {},
      textAlign(e) {
        return e;
      },
      xPlus(e, t) {
        return e + t;
      },
      leftForLtr(e, t) {
        return e;
      },
    };
  };
function Qr(e, t, n) {
  return e ? GP(t, n) : QP();
}
function Wy(e, t) {
  let n, i;
  (t === "ltr" || t === "rtl") &&
    ((n = e.canvas.style),
    (i = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
    n.setProperty("direction", t, "important"),
    (e.prevTextDirection = i));
}
function Hy(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty("direction", t[0], t[1]));
}
function Vy(e) {
  return e === "angle"
    ? { between: Rs, compare: NS, normalize: un }
    : { between: fi, compare: (t, n) => t - n, normalize: (t) => t };
}
function eg({ start: e, end: t, count: n, loop: i, style: r }) {
  return {
    start: e % n,
    end: t % n,
    loop: i && (t - e + 1) % n === 0,
    style: r,
  };
}
function qP(e, t, n) {
  const { property: i, start: r, end: s } = n,
    { between: a, normalize: u } = Vy(i),
    c = t.length;
  let { start: d, end: p, loop: g } = e,
    m,
    v;
  if (g) {
    for (d += c, p += c, m = 0, v = c; m < v && a(u(t[d % c][i]), r, s); ++m)
      d--, p--;
    (d %= c), (p %= c);
  }
  return p < d && (p += c), { start: d, end: p, loop: g, style: e.style };
}
function JP(e, t, n) {
  if (!n) return [e];
  const { property: i, start: r, end: s } = n,
    a = t.length,
    { compare: u, between: c, normalize: d } = Vy(i),
    { start: p, end: g, loop: m, style: v } = qP(e, t, n),
    y = [];
  let S = !1,
    M = null,
    w,
    b,
    P;
  const C = () => c(r, P, w) && u(r, P) !== 0,
    E = () => u(s, w) === 0 || c(s, P, w),
    R = () => S || C(),
    D = () => !S || E();
  for (let N = p, V = p; N <= g; ++N)
    (b = t[N % a]),
      !b.skip &&
        ((w = d(b[i])),
        w !== P &&
          ((S = c(w, r, s)),
          M === null && R() && (M = u(w, r) === 0 ? N : V),
          M !== null &&
            D() &&
            (y.push(eg({ start: M, end: N, loop: m, count: a, style: v })),
            (M = null)),
          (V = N),
          (P = w)));
  return (
    M !== null && y.push(eg({ start: M, end: g, loop: m, count: a, style: v })),
    y
  );
}
function tk(e, t) {
  const n = [],
    i = e.segments;
  for (let r = 0; r < i.length; r++) {
    const s = JP(i[r], e.points, t);
    s.length && n.push(...s);
  }
  return n;
}
function ek(e, t, n, i) {
  let r = 0,
    s = t - 1;
  if (n && !i) for (; r < t && !e[r].skip; ) r++;
  for (; r < t && e[r].skip; ) r++;
  for (r %= t, n && (s += r); s > r && e[s % t].skip; ) s--;
  return (s %= t), { start: r, end: s };
}
function nk(e, t, n, i) {
  const r = e.length,
    s = [];
  let a = t,
    u = e[t],
    c;
  for (c = t + 1; c <= n; ++c) {
    const d = e[c % r];
    d.skip || d.stop
      ? u.skip ||
        ((i = !1),
        s.push({ start: t % r, end: (c - 1) % r, loop: i }),
        (t = a = d.stop ? c : null))
      : ((a = c), u.skip && (t = c)),
      (u = d);
  }
  return a !== null && s.push({ start: t % r, end: a % r, loop: i }), s;
}
function ik(e, t) {
  const n = e.points,
    i = e.options.spanGaps,
    r = n.length;
  if (!r) return [];
  const s = !!e._loop,
    { start: a, end: u } = ek(n, r, s, i);
  if (i === !0) return ng(e, [{ start: a, end: u, loop: s }], n, t);
  const c = u < a ? u + r : u,
    d = !!e._fullLoop && a === 0 && u === r - 1;
  return ng(e, nk(n, a, c, d), n, t);
}
function ng(e, t, n, i) {
  return !i || !i.setContext || !n ? t : rk(e, t, n, i);
}
function rk(e, t, n, i) {
  const r = e._chart.getContext(),
    s = ig(e.options),
    {
      _datasetIndex: a,
      options: { spanGaps: u },
    } = e,
    c = n.length,
    d = [];
  let p = s,
    g = t[0].start,
    m = g;
  function v(y, S, M, w) {
    const b = u ? -1 : 1;
    if (y !== S) {
      for (y += c; n[y % c].skip; ) y -= b;
      for (; n[S % c].skip; ) S += b;
      y % c !== S % c &&
        (d.push({ start: y % c, end: S % c, loop: M, style: w }),
        (p = w),
        (g = S % c));
    }
  }
  for (const y of t) {
    g = u ? g : y.start;
    let S = n[g % c],
      M;
    for (m = g + 1; m <= y.end; m++) {
      const w = n[m % c];
      (M = ig(
        i.setContext(
          Ri(r, {
            type: "segment",
            p0: S,
            p1: w,
            p0DataIndex: (m - 1) % c,
            p1DataIndex: m % c,
            datasetIndex: a,
          })
        )
      )),
        ok(M, p) && v(g, m - 1, y.loop, p),
        (S = w),
        (p = M);
    }
    g < m - 1 && v(g, m - 1, y.loop, p);
  }
  return d;
}
function ig(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor,
  };
}
function ok(e, t) {
  return t && JSON.stringify(e) !== JSON.stringify(t);
}
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ class sk {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, n, i, r) {
    const s = n.listeners[r],
      a = n.duration;
    s.forEach((u) =>
      u({
        chart: t,
        initial: n.initial,
        numSteps: a,
        currentStep: Math.min(i - n.start, a),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Sy.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((i, r) => {
      if (!i.running || !i.items.length) return;
      const s = i.items;
      let a = s.length - 1,
        u = !1,
        c;
      for (; a >= 0; --a)
        (c = s[a]),
          c._active
            ? (c._total > i.duration && (i.duration = c._total),
              c.tick(t),
              (u = !0))
            : ((s[a] = s[s.length - 1]), s.pop());
      u && (r.draw(), this._notify(r, i, t, "progress")),
        s.length ||
          ((i.running = !1),
          this._notify(r, i, t, "complete"),
          (i.initial = !1)),
        (n += s.length);
    }),
      (this._lastDate = t),
      n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let i = n.get(t);
    return (
      i ||
        ((i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        n.set(t, i)),
      i
    );
  }
  listen(t, n, i) {
    this._getAnims(t).listeners[n].push(i);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    !n ||
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((i, r) => Math.max(i, r._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const n = this._charts.get(t);
    return !(!n || !n.running || !n.items.length);
  }
  stop(t) {
    const n = this._charts.get(t);
    if (!n || !n.items.length) return;
    const i = n.items;
    let r = i.length - 1;
    for (; r >= 0; --r) i[r].cancel();
    (n.items = []), this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Bn = new sk();
const rg = "transparent",
  ak = {
    boolean(e, t, n) {
      return n > 0.5 ? t : e;
    },
    color(e, t, n) {
      const i = Km(e || rg),
        r = i.valid && Km(t || rg);
      return r && r.valid ? r.mix(i, n).hexString() : t;
    },
    number(e, t, n) {
      return e + (t - e) * n;
    },
  };
class lk {
  constructor(t, n, i, r) {
    const s = n[i];
    r = Ha([t.to, r, s, t.from]);
    const a = Ha([t.from, s, r]);
    (this._active = !0),
      (this._fn = t.fn || ak[t.type || typeof a]),
      (this._easing = cs[t.easing] || cs.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = n),
      (this._prop = i),
      (this._from = a),
      (this._to = r),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, n, i) {
    if (this._active) {
      this._notify(!1);
      const r = this._target[this._prop],
        s = i - this._start,
        a = this._duration - s;
      (this._start = i),
        (this._duration = Math.floor(Math.max(a, t.duration))),
        (this._total += s),
        (this._loop = !!t.loop),
        (this._to = Ha([t.to, n, r, t.from])),
        (this._from = Ha([t.from, r, n]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const n = t - this._start,
      i = this._duration,
      r = this._prop,
      s = this._from,
      a = this._loop,
      u = this._to;
    let c;
    if (((this._active = s !== u && (a || n < i)), !this._active)) {
      (this._target[r] = u), this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[r] = s;
      return;
    }
    (c = (n / i) % 2),
      (c = a && c > 1 ? 2 - c : c),
      (c = this._easing(Math.min(1, Math.max(0, c)))),
      (this._target[r] = this._fn(s, u, c));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, i) => {
      t.push({ res: n, rej: i });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej",
      i = this._promises || [];
    for (let r = 0; r < i.length; r++) i[r][n]();
  }
}
const uk = ["x", "y", "borderWidth", "radius", "tension"],
  ck = ["color", "borderColor", "backgroundColor"];
pt.set("animation", {
  delay: void 0,
  duration: 1e3,
  easing: "easeOutQuart",
  fn: void 0,
  from: void 0,
  loop: void 0,
  to: void 0,
  type: void 0,
});
const hk = Object.keys(pt.animation);
pt.describe("animation", {
  _fallback: !1,
  _indexable: !1,
  _scriptable: (e) => e !== "onProgress" && e !== "onComplete" && e !== "fn",
});
pt.set("animations", {
  colors: { type: "color", properties: ck },
  numbers: { type: "number", properties: uk },
});
pt.describe("animations", { _fallback: "animation" });
pt.set("transitions", {
  active: { animation: { duration: 400 } },
  resize: { animation: { duration: 0 } },
  show: {
    animations: {
      colors: { from: "transparent" },
      visible: { type: "boolean", duration: 0 },
    },
  },
  hide: {
    animations: {
      colors: { to: "transparent" },
      visible: { type: "boolean", easing: "linear", fn: (e) => e | 0 },
    },
  },
});
class Zy {
  constructor(t, n) {
    (this._chart = t), (this._properties = new Map()), this.configure(n);
  }
  configure(t) {
    if (!xt(t)) return;
    const n = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const r = t[i];
      if (!xt(r)) return;
      const s = {};
      for (const a of hk) s[a] = r[a];
      ((Bt(r.properties) && r.properties) || [i]).forEach((a) => {
        (a === i || !n.has(a)) && n.set(a, s);
      });
    });
  }
  _animateOptions(t, n) {
    const i = n.options,
      r = fk(t, i);
    if (!r) return [];
    const s = this._createAnimations(r, i);
    return (
      i.$shared &&
        dk(t.options.$animations, i).then(
          () => {
            t.options = i;
          },
          () => {}
        ),
      s
    );
  }
  _createAnimations(t, n) {
    const i = this._properties,
      r = [],
      s = t.$animations || (t.$animations = {}),
      a = Object.keys(n),
      u = Date.now();
    let c;
    for (c = a.length - 1; c >= 0; --c) {
      const d = a[c];
      if (d.charAt(0) === "$") continue;
      if (d === "options") {
        r.push(...this._animateOptions(t, n));
        continue;
      }
      const p = n[d];
      let g = s[d];
      const m = i.get(d);
      if (g)
        if (m && g.active()) {
          g.update(m, p, u);
          continue;
        } else g.cancel();
      if (!m || !m.duration) {
        t[d] = p;
        continue;
      }
      (s[d] = g = new lk(m, t, d, p)), r.push(g);
    }
    return r;
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const i = this._createAnimations(t, n);
    if (i.length) return Bn.add(this._chart, i), !0;
  }
}
function dk(e, t) {
  const n = [],
    i = Object.keys(t);
  for (let r = 0; r < i.length; r++) {
    const s = e[i[r]];
    s && s.active() && n.push(s.wait());
  }
  return Promise.all(n);
}
function fk(e, t) {
  if (!t) return;
  let n = e.options;
  if (!n) {
    e.options = t;
    return;
  }
  return (
    n.$shared &&
      (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
    n
  );
}
function og(e, t) {
  const n = (e && e.options) || {},
    i = n.reverse,
    r = n.min === void 0 ? t : 0,
    s = n.max === void 0 ? t : 0;
  return { start: i ? s : r, end: i ? r : s };
}
function pk(e, t, n) {
  if (n === !1) return !1;
  const i = og(e, n),
    r = og(t, n);
  return { top: r.end, right: i.end, bottom: r.start, left: i.start };
}
function mk(e) {
  let t, n, i, r;
  return (
    xt(e)
      ? ((t = e.top), (n = e.right), (i = e.bottom), (r = e.left))
      : (t = n = i = r = e),
    { top: t, right: n, bottom: i, left: r, disabled: e === !1 }
  );
}
function Uy(e, t) {
  const n = [],
    i = e._getSortedDatasetMetas(t);
  let r, s;
  for (r = 0, s = i.length; r < s; ++r) n.push(i[r].index);
  return n;
}
function sg(e, t, n, i = {}) {
  const r = e.keys,
    s = i.mode === "single";
  let a, u, c, d;
  if (t !== null) {
    for (a = 0, u = r.length; a < u; ++a) {
      if (((c = +r[a]), c === n)) {
        if (i.all) continue;
        break;
      }
      (d = e.values[c]), pe(d) && (s || t === 0 || En(t) === En(d)) && (t += d);
    }
    return t;
  }
}
function gk(e) {
  const t = Object.keys(e),
    n = new Array(t.length);
  let i, r, s;
  for (i = 0, r = t.length; i < r; ++i) (s = t[i]), (n[i] = { x: s, y: e[s] });
  return n;
}
function ag(e, t) {
  const n = e && e.options.stacked;
  return n || (n === void 0 && t.stack !== void 0);
}
function _k(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function vk(e) {
  const { min: t, max: n, minDefined: i, maxDefined: r } = e.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: r ? n : Number.POSITIVE_INFINITY,
  };
}
function yk(e, t, n) {
  const i = e[t] || (e[t] = {});
  return i[n] || (i[n] = {});
}
function lg(e, t, n, i) {
  for (const r of t.getMatchingVisibleMetas(i).reverse()) {
    const s = e[r.index];
    if ((n && s > 0) || (!n && s < 0)) return r.index;
  }
  return null;
}
function ug(e, t) {
  const { chart: n, _cachedMeta: i } = e,
    r = n._stacks || (n._stacks = {}),
    { iScale: s, vScale: a, index: u } = i,
    c = s.axis,
    d = a.axis,
    p = _k(s, a, i),
    g = t.length;
  let m;
  for (let v = 0; v < g; ++v) {
    const y = t[v],
      { [c]: S, [d]: M } = y,
      w = y._stacks || (y._stacks = {});
    (m = w[d] = yk(r, p, S)),
      (m[u] = M),
      (m._top = lg(m, a, !0, i.type)),
      (m._bottom = lg(m, a, !1, i.type));
  }
}
function Lc(e, t) {
  const n = e.scales;
  return Object.keys(n)
    .filter((i) => n[i].axis === t)
    .shift();
}
function xk(e, t) {
  return Ri(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function wk(e, t, n) {
  return Ri(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data",
  });
}
function jo(e, t) {
  const n = e.controller.index,
    i = e.vScale && e.vScale.axis;
  if (!!i) {
    t = t || e._parsed;
    for (const r of t) {
      const s = r._stacks;
      if (!s || s[i] === void 0 || s[i][n] === void 0) return;
      delete s[i][n];
    }
  }
}
const Mc = (e) => e === "reset" || e === "none",
  cg = (e, t) => (t ? e : Object.assign({}, e)),
  bk = (e, t, n) =>
    e && !t.hidden && t._stacked && { keys: Uy(n, !0), values: null };
class gn {
  constructor(t, n) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = ag(t.vScale, t)),
      this.addElements();
  }
  updateIndex(t) {
    this.index !== t && jo(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      n = this._cachedMeta,
      i = this.getDataset(),
      r = (g, m, v, y) => (g === "x" ? m : g === "r" ? y : v),
      s = (n.xAxisID = ht(i.xAxisID, Lc(t, "x"))),
      a = (n.yAxisID = ht(i.yAxisID, Lc(t, "y"))),
      u = (n.rAxisID = ht(i.rAxisID, Lc(t, "r"))),
      c = n.indexAxis,
      d = (n.iAxisID = r(c, s, a, u)),
      p = (n.vAxisID = r(c, a, s, u));
    (n.xScale = this.getScaleForId(s)),
      (n.yScale = this.getScaleForId(a)),
      (n.rScale = this.getScaleForId(u)),
      (n.iScale = this.getScaleForId(d)),
      (n.vScale = this.getScaleForId(p));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const n = this._cachedMeta;
    return t === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Wm(this._data, this), t._stacked && jo(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      n = t.data || (t.data = []),
      i = this._data;
    if (xt(n)) this._data = gk(n);
    else if (i !== n) {
      if (i) {
        Wm(i, this);
        const r = this._cachedMeta;
        jo(r), (r._parsed = []);
      }
      n && Object.isExtensible(n) && WS(n, this),
        (this._syncList = []),
        (this._data = n);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta,
      i = this.getDataset();
    let r = !1;
    this._dataCheck();
    const s = n._stacked;
    (n._stacked = ag(n.vScale, n)),
      n.stack !== i.stack && ((r = !0), jo(n), (n.stack = i.stack)),
      this._resyncElements(t),
      (r || s !== n._stacked) && ug(this, n._parsed);
  }
  configure() {
    const t = this.chart.config,
      n = t.datasetScopeKeys(this._type),
      i = t.getOptionScopes(this.getDataset(), n, !0);
    (this.options = t.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, n) {
    const { _cachedMeta: i, _data: r } = this,
      { iScale: s, _stacked: a } = i,
      u = s.axis;
    let c = t === 0 && n === r.length ? !0 : i._sorted,
      d = t > 0 && i._parsed[t - 1],
      p,
      g,
      m;
    if (this._parsing === !1) (i._parsed = r), (i._sorted = !0), (m = r);
    else {
      Bt(r[t])
        ? (m = this.parseArrayData(i, r, t, n))
        : xt(r[t])
        ? (m = this.parseObjectData(i, r, t, n))
        : (m = this.parsePrimitiveData(i, r, t, n));
      const v = () => g[u] === null || (d && g[u] < d[u]);
      for (p = 0; p < n; ++p)
        (i._parsed[p + t] = g = m[p]), c && (v() && (c = !1), (d = g));
      i._sorted = c;
    }
    a && ug(this, m);
  }
  parsePrimitiveData(t, n, i, r) {
    const { iScale: s, vScale: a } = t,
      u = s.axis,
      c = a.axis,
      d = s.getLabels(),
      p = s === a,
      g = new Array(r);
    let m, v, y;
    for (m = 0, v = r; m < v; ++m)
      (y = m + i),
        (g[m] = { [u]: p || s.parse(d[y], y), [c]: a.parse(n[y], y) });
    return g;
  }
  parseArrayData(t, n, i, r) {
    const { xScale: s, yScale: a } = t,
      u = new Array(r);
    let c, d, p, g;
    for (c = 0, d = r; c < d; ++c)
      (p = c + i),
        (g = n[p]),
        (u[c] = { x: s.parse(g[0], p), y: a.parse(g[1], p) });
    return u;
  }
  parseObjectData(t, n, i, r) {
    const { xScale: s, yScale: a } = t,
      { xAxisKey: u = "x", yAxisKey: c = "y" } = this._parsing,
      d = new Array(r);
    let p, g, m, v;
    for (p = 0, g = r; p < g; ++p)
      (m = p + i),
        (v = n[m]),
        (d[p] = { x: s.parse(Li(v, u), m), y: a.parse(Li(v, c), m) });
    return d;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, i) {
    const r = this.chart,
      s = this._cachedMeta,
      a = n[t.axis],
      u = { keys: Uy(r, !0), values: n._stacks[t.axis] };
    return sg(u, a, s.index, { mode: i });
  }
  updateRangeFromParsed(t, n, i, r) {
    const s = i[n.axis];
    let a = s === null ? NaN : s;
    const u = r && i._stacks[n.axis];
    r && u && ((r.values = u), (a = sg(r, s, this._cachedMeta.index))),
      (t.min = Math.min(t.min, a)),
      (t.max = Math.max(t.max, a));
  }
  getMinMax(t, n) {
    const i = this._cachedMeta,
      r = i._parsed,
      s = i._sorted && t === i.iScale,
      a = r.length,
      u = this._getOtherScale(t),
      c = bk(n, i, this.chart),
      d = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: p, max: g } = vk(u);
    let m, v;
    function y() {
      v = r[m];
      const S = v[u.axis];
      return !pe(v[t.axis]) || p > S || g < S;
    }
    for (
      m = 0;
      m < a && !(!y() && (this.updateRangeFromParsed(d, t, v, c), s));
      ++m
    );
    if (s) {
      for (m = a - 1; m >= 0; --m)
        if (!y()) {
          this.updateRangeFromParsed(d, t, v, c);
          break;
        }
    }
    return d;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed,
      i = [];
    let r, s, a;
    for (r = 0, s = n.length; r < s; ++r)
      (a = n[r][t.axis]), pe(a) && i.push(a);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = n.iScale,
      r = n.vScale,
      s = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(s[i.axis]) : "",
      value: r ? "" + r.getLabelForValue(s[r.axis]) : "",
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"),
      (n._clip = mk(
        ht(this.options.clip, pk(n.xScale, n.yScale, this.getMaxOverflow()))
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      n = this.chart,
      i = this._cachedMeta,
      r = i.data || [],
      s = n.chartArea,
      a = [],
      u = this._drawStart || 0,
      c = this._drawCount || r.length - u,
      d = this.options.drawActiveElementsOnTop;
    let p;
    for (i.dataset && i.dataset.draw(t, s, u, c), p = u; p < u + c; ++p) {
      const g = r[p];
      g.hidden || (g.active && d ? a.push(g) : g.draw(t, s));
    }
    for (p = 0; p < a.length; ++p) a[p].draw(t, s);
  }
  getStyle(t, n) {
    const i = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, n, i) {
    const r = this.getDataset();
    let s;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const a = this._cachedMeta.data[t];
      (s = a.$context || (a.$context = wk(this.getContext(), t, a))),
        (s.parsed = this.getParsed(t)),
        (s.raw = r.data[t]),
        (s.index = s.dataIndex = t);
    } else
      (s =
        this.$context ||
        (this.$context = xk(this.chart.getContext(), this.index))),
        (s.dataset = r),
        (s.index = s.datasetIndex = this.index);
    return (s.active = !!n), (s.mode = i), s;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", i) {
    const r = n === "active",
      s = this._cachedDataOpts,
      a = t + "-" + n,
      u = s[a],
      c = this.enableOptionSharing && en(i);
    if (u) return cg(u, c);
    const d = this.chart.config,
      p = d.datasetElementScopeKeys(this._type, t),
      g = r ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      m = d.getOptionScopes(this.getDataset(), p),
      v = Object.keys(pt.elements[t]),
      y = () => this.getContext(i, r),
      S = d.resolveNamedOptions(m, v, y, g);
    return S.$shared && ((S.$shared = c), (s[a] = Object.freeze(cg(S, c)))), S;
  }
  _resolveAnimations(t, n, i) {
    const r = this.chart,
      s = this._cachedDataOpts,
      a = `animation-${n}`,
      u = s[a];
    if (u) return u;
    let c;
    if (r.options.animation !== !1) {
      const p = this.chart.config,
        g = p.datasetAnimationScopeKeys(this._type, n),
        m = p.getOptionScopes(this.getDataset(), g);
      c = p.createResolver(m, this.getContext(t, i, n));
    }
    const d = new Zy(r, c && c.animations);
    return c && c._cacheable && (s[a] = Object.freeze(d)), d;
  }
  getSharedOptions(t) {
    if (!!t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, n) {
    return !n || Mc(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const i = this.resolveDataElementOptions(t, n),
      r = this._sharedOptions,
      s = this.getSharedOptions(i),
      a = this.includeOptions(n, s) || s !== r;
    return (
      this.updateSharedOptions(s, n, i), { sharedOptions: s, includeOptions: a }
    );
  }
  updateElement(t, n, i, r) {
    Mc(r) ? Object.assign(t, i) : this._resolveAnimations(n, r).update(t, i);
  }
  updateSharedOptions(t, n, i) {
    t && !Mc(n) && this._resolveAnimations(void 0, n).update(t, i);
  }
  _setStyle(t, n, i, r) {
    t.active = r;
    const s = this.getStyle(n, r);
    this._resolveAnimations(n, i, r).update(t, {
      options: (!r && this.getSharedOptions(s)) || s,
    });
  }
  removeHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const n = this._data,
      i = this._cachedMeta.data;
    for (const [u, c, d] of this._syncList) this[u](c, d);
    this._syncList = [];
    const r = i.length,
      s = n.length,
      a = Math.min(s, r);
    a && this.parse(0, a),
      s > r
        ? this._insertElements(r, s - r, t)
        : s < r && this._removeElements(s, r - s);
  }
  _insertElements(t, n, i = !0) {
    const r = this._cachedMeta,
      s = r.data,
      a = t + n;
    let u;
    const c = (d) => {
      for (d.length += n, u = d.length - 1; u >= a; u--) d[u] = d[u - n];
    };
    for (c(s), u = t; u < a; ++u) s[u] = new this.dataElementType();
    this._parsing && c(r._parsed),
      this.parse(t, n),
      i && this.updateElements(s, t, n, "reset");
  }
  updateElements(t, n, i, r) {}
  _removeElements(t, n) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const r = i._parsed.splice(t, n);
      i._stacked && jo(i, r);
    }
    i.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [n, i, r] = t;
      this[n](i, r);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, n) {
    n && this._sync(["_removeElements", t, n]);
    const i = arguments.length - 2;
    i && this._sync(["_insertElements", t, i]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
gn.defaults = {};
gn.prototype.datasetElementType = null;
gn.prototype.dataElementType = null;
function Sk(e, t) {
  if (!e._cache.$bar) {
    const n = e.getMatchingVisibleMetas(t);
    let i = [];
    for (let r = 0, s = n.length; r < s; r++)
      i = i.concat(n[r].controller.getAllParsedValues(e));
    e._cache.$bar = by(i.sort((r, s) => r - s));
  }
  return e._cache.$bar;
}
function Pk(e) {
  const t = e.iScale,
    n = Sk(t, e.type);
  let i = t._length,
    r,
    s,
    a,
    u;
  const c = () => {
    a === 32767 ||
      a === -32768 ||
      (en(u) && (i = Math.min(i, Math.abs(a - u) || i)), (u = a));
  };
  for (r = 0, s = n.length; r < s; ++r) (a = t.getPixelForValue(n[r])), c();
  for (u = void 0, r = 0, s = t.ticks.length; r < s; ++r)
    (a = t.getPixelForTick(r)), c();
  return i;
}
function kk(e, t, n, i) {
  const r = n.barThickness;
  let s, a;
  return (
    Ct(r)
      ? ((s = t.min * n.categoryPercentage), (a = n.barPercentage))
      : ((s = r * i), (a = 1)),
    { chunk: s / i, ratio: a, start: t.pixels[e] - s / 2 }
  );
}
function Ck(e, t, n, i) {
  const r = t.pixels,
    s = r[e];
  let a = e > 0 ? r[e - 1] : null,
    u = e < r.length - 1 ? r[e + 1] : null;
  const c = n.categoryPercentage;
  a === null && (a = s - (u === null ? t.end - t.start : u - s)),
    u === null && (u = s + s - a);
  const d = s - ((s - Math.min(a, u)) / 2) * c;
  return {
    chunk: ((Math.abs(u - a) / 2) * c) / i,
    ratio: n.barPercentage,
    start: d,
  };
}
function Lk(e, t, n, i) {
  const r = n.parse(e[0], i),
    s = n.parse(e[1], i),
    a = Math.min(r, s),
    u = Math.max(r, s);
  let c = a,
    d = u;
  Math.abs(a) > Math.abs(u) && ((c = u), (d = a)),
    (t[n.axis] = d),
    (t._custom = { barStart: c, barEnd: d, start: r, end: s, min: a, max: u });
}
function $y(e, t, n, i) {
  return Bt(e) ? Lk(e, t, n, i) : (t[n.axis] = n.parse(e, i)), t;
}
function hg(e, t, n, i) {
  const r = e.iScale,
    s = e.vScale,
    a = r.getLabels(),
    u = r === s,
    c = [];
  let d, p, g, m;
  for (d = n, p = n + i; d < p; ++d)
    (m = t[d]),
      (g = {}),
      (g[r.axis] = u || r.parse(a[d], d)),
      c.push($y(m, g, s, d));
  return c;
}
function Ec(e) {
  return e && e.barStart !== void 0 && e.barEnd !== void 0;
}
function Mk(e, t, n) {
  return e !== 0 ? En(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1);
}
function Ek(e) {
  let t, n, i, r, s;
  return (
    e.horizontal
      ? ((t = e.base > e.x), (n = "left"), (i = "right"))
      : ((t = e.base < e.y), (n = "bottom"), (i = "top")),
    t ? ((r = "end"), (s = "start")) : ((r = "start"), (s = "end")),
    { start: n, end: i, reverse: t, top: r, bottom: s }
  );
}
function Tk(e, t, n, i) {
  let r = t.borderSkipped;
  const s = {};
  if (!r) {
    e.borderSkipped = s;
    return;
  }
  if (r === !0) {
    e.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: a, end: u, reverse: c, top: d, bottom: p } = Ek(e);
  r === "middle" &&
    n &&
    ((e.enableBorderRadius = !0),
    (n._top || 0) === i
      ? (r = d)
      : (n._bottom || 0) === i
      ? (r = p)
      : ((s[dg(p, a, u, c)] = !0), (r = d))),
    (s[dg(r, a, u, c)] = !0),
    (e.borderSkipped = s);
}
function dg(e, t, n, i) {
  return i ? ((e = Ok(e, t, n)), (e = fg(e, n, t))) : (e = fg(e, t, n)), e;
}
function Ok(e, t, n) {
  return e === t ? n : e === n ? t : e;
}
function fg(e, t, n) {
  return e === "start" ? t : e === "end" ? n : e;
}
function Dk(e, { inflateAmount: t }, n) {
  e.inflateAmount = t === "auto" ? (n === 1 ? 0.33 : 0) : t;
}
class ef extends gn {
  parsePrimitiveData(t, n, i, r) {
    return hg(t, n, i, r);
  }
  parseArrayData(t, n, i, r) {
    return hg(t, n, i, r);
  }
  parseObjectData(t, n, i, r) {
    const { iScale: s, vScale: a } = t,
      { xAxisKey: u = "x", yAxisKey: c = "y" } = this._parsing,
      d = s.axis === "x" ? u : c,
      p = a.axis === "x" ? u : c,
      g = [];
    let m, v, y, S;
    for (m = i, v = i + r; m < v; ++m)
      (S = n[m]),
        (y = {}),
        (y[s.axis] = s.parse(Li(S, d), m)),
        g.push($y(Li(S, p), y, a, m));
    return g;
  }
  updateRangeFromParsed(t, n, i, r) {
    super.updateRangeFromParsed(t, n, i, r);
    const s = i._custom;
    s &&
      n === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, s.min)), (t.max = Math.max(t.max, s.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      { iScale: i, vScale: r } = n,
      s = this.getParsed(t),
      a = s._custom,
      u = Ec(a)
        ? "[" + a.start + ", " + a.end + "]"
        : "" + r.getLabelForValue(s[r.axis]);
    return { label: "" + i.getLabelForValue(s[i.axis]), value: u };
  }
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const n = this._cachedMeta;
    this.updateElements(n.data, 0, n.data.length, t);
  }
  updateElements(t, n, i, r) {
    const s = r === "reset",
      {
        index: a,
        _cachedMeta: { vScale: u },
      } = this,
      c = u.getBasePixel(),
      d = u.isHorizontal(),
      p = this._getRuler(),
      { sharedOptions: g, includeOptions: m } = this._getSharedOptions(n, r);
    for (let v = n; v < n + i; v++) {
      const y = this.getParsed(v),
        S =
          s || Ct(y[u.axis])
            ? { base: c, head: c }
            : this._calculateBarValuePixels(v),
        M = this._calculateBarIndexPixels(v, p),
        w = (y._stacks || {})[u.axis],
        b = {
          horizontal: d,
          base: S.base,
          enableBorderRadius:
            !w || Ec(y._custom) || a === w._top || a === w._bottom,
          x: d ? S.head : M.center,
          y: d ? M.center : S.head,
          height: d ? M.size : Math.abs(S.size),
          width: d ? Math.abs(S.size) : M.size,
        };
      m &&
        (b.options =
          g || this.resolveDataElementOptions(v, t[v].active ? "active" : r));
      const P = b.options || t[v].options;
      Tk(b, P, w, a), Dk(b, P, p.ratio), this.updateElement(t[v], v, b, r);
    }
  }
  _getStacks(t, n) {
    const { iScale: i } = this._cachedMeta,
      r = i
        .getMatchingVisibleMetas(this._type)
        .filter((c) => c.controller.options.grouped),
      s = i.options.stacked,
      a = [],
      u = (c) => {
        const d = c.controller.getParsed(n),
          p = d && d[c.vScale.axis];
        if (Ct(p) || isNaN(p)) return !0;
      };
    for (const c of r)
      if (
        !(n !== void 0 && u(c)) &&
        ((s === !1 ||
          a.indexOf(c.stack) === -1 ||
          (s === void 0 && c.stack === void 0)) &&
          a.push(c.stack),
        c.index === t)
      )
        break;
    return a.length || a.push(void 0), a;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, n, i) {
    const r = this._getStacks(t, i),
      s = n !== void 0 ? r.indexOf(n) : -1;
    return s === -1 ? r.length - 1 : s;
  }
  _getRuler() {
    const t = this.options,
      n = this._cachedMeta,
      i = n.iScale,
      r = [];
    let s, a;
    for (s = 0, a = n.data.length; s < a; ++s)
      r.push(i.getPixelForValue(this.getParsed(s)[i.axis], s));
    const u = t.barThickness;
    return {
      min: u || Pk(n),
      pixels: r,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: t.grouped,
      ratio: u ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: n, _stacked: i },
        options: { base: r, minBarLength: s },
      } = this,
      a = r || 0,
      u = this.getParsed(t),
      c = u._custom,
      d = Ec(c);
    let p = u[n.axis],
      g = 0,
      m = i ? this.applyStack(n, u, i) : p,
      v,
      y;
    m !== p && ((g = m - p), (m = p)),
      d &&
        ((p = c.barStart),
        (m = c.barEnd - c.barStart),
        p !== 0 && En(p) !== En(c.barEnd) && (g = 0),
        (g += p));
    const S = !Ct(r) && !d ? r : g;
    let M = n.getPixelForValue(S);
    if (
      (this.chart.getDataVisibility(t)
        ? (v = n.getPixelForValue(g + m))
        : (v = M),
      (y = v - M),
      Math.abs(y) < s)
    ) {
      (y = Mk(y, n, a) * s), p === a && (M -= y / 2);
      const w = n.getPixelForDecimal(0),
        b = n.getPixelForDecimal(1),
        P = Math.min(w, b),
        C = Math.max(w, b);
      (M = Math.max(Math.min(M, C), P)), (v = M + y);
    }
    if (M === n.getPixelForValue(a)) {
      const w = (En(y) * n.getLineWidthForValue(a)) / 2;
      (M += w), (y -= w);
    }
    return { size: y, base: M, head: v, center: v + y / 2 };
  }
  _calculateBarIndexPixels(t, n) {
    const i = n.scale,
      r = this.options,
      s = r.skipNull,
      a = ht(r.maxBarThickness, 1 / 0);
    let u, c;
    if (n.grouped) {
      const d = s ? this._getStackCount(t) : n.stackCount,
        p = r.barThickness === "flex" ? Ck(t, n, r, d) : kk(t, n, r, d),
        g = this._getStackIndex(
          this.index,
          this._cachedMeta.stack,
          s ? t : void 0
        );
      (u = p.start + p.chunk * g + p.chunk / 2),
        (c = Math.min(a, p.chunk * p.ratio));
    } else
      (u = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
        (c = Math.min(a, n.min * n.ratio));
    return { base: u - c / 2, head: u + c / 2, center: u, size: c };
  }
  draw() {
    const t = this._cachedMeta,
      n = t.vScale,
      i = t.data,
      r = i.length;
    let s = 0;
    for (; s < r; ++s)
      this.getParsed(s)[n.axis] !== null && i[s].draw(this._ctx);
  }
}
ef.id = "bar";
ef.defaults = {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "base", "width", "height"],
    },
  },
};
ef.overrides = {
  scales: {
    _index_: { type: "category", offset: !0, grid: { offset: !0 } },
    _value_: { type: "linear", beginAtZero: !0 },
  },
};
class nf extends gn {
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
  }
  parsePrimitiveData(t, n, i, r) {
    const s = super.parsePrimitiveData(t, n, i, r);
    for (let a = 0; a < s.length; a++)
      s[a]._custom = this.resolveDataElementOptions(a + i).radius;
    return s;
  }
  parseArrayData(t, n, i, r) {
    const s = super.parseArrayData(t, n, i, r);
    for (let a = 0; a < s.length; a++) {
      const u = n[i + a];
      s[a]._custom = ht(u[2], this.resolveDataElementOptions(a + i).radius);
    }
    return s;
  }
  parseObjectData(t, n, i, r) {
    const s = super.parseObjectData(t, n, i, r);
    for (let a = 0; a < s.length; a++) {
      const u = n[i + a];
      s[a]._custom = ht(
        u && u.r && +u.r,
        this.resolveDataElementOptions(a + i).radius
      );
    }
    return s;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let n = 0;
    for (let i = t.length - 1; i >= 0; --i)
      n = Math.max(n, t[i].size(this.resolveDataElementOptions(i)) / 2);
    return n > 0 && n;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      { xScale: i, yScale: r } = n,
      s = this.getParsed(t),
      a = i.getLabelForValue(s.x),
      u = r.getLabelForValue(s.y),
      c = s._custom;
    return {
      label: n.label,
      value: "(" + a + ", " + u + (c ? ", " + c : "") + ")",
    };
  }
  update(t) {
    const n = this._cachedMeta.data;
    this.updateElements(n, 0, n.length, t);
  }
  updateElements(t, n, i, r) {
    const s = r === "reset",
      { iScale: a, vScale: u } = this._cachedMeta,
      { sharedOptions: c, includeOptions: d } = this._getSharedOptions(n, r),
      p = a.axis,
      g = u.axis;
    for (let m = n; m < n + i; m++) {
      const v = t[m],
        y = !s && this.getParsed(m),
        S = {},
        M = (S[p] = s ? a.getPixelForDecimal(0.5) : a.getPixelForValue(y[p])),
        w = (S[g] = s ? u.getBasePixel() : u.getPixelForValue(y[g]));
      (S.skip = isNaN(M) || isNaN(w)),
        d &&
          ((S.options =
            c || this.resolveDataElementOptions(m, v.active ? "active" : r)),
          s && (S.options.radius = 0)),
        this.updateElement(v, m, S, r);
    }
  }
  resolveDataElementOptions(t, n) {
    const i = this.getParsed(t);
    let r = super.resolveDataElementOptions(t, n);
    r.$shared && (r = Object.assign({}, r, { $shared: !1 }));
    const s = r.radius;
    return (
      n !== "active" && (r.radius = 0), (r.radius += ht(i && i._custom, s)), r
    );
  }
}
nf.id = "bubble";
nf.defaults = {
  datasetElementType: !1,
  dataElementType: "point",
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "borderWidth", "radius"],
    },
  },
};
nf.overrides = {
  scales: { x: { type: "linear" }, y: { type: "linear" } },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
      },
    },
  },
};
function Rk(e, t, n) {
  let i = 1,
    r = 1,
    s = 0,
    a = 0;
  if (t < Rt) {
    const u = e,
      c = u + t,
      d = Math.cos(u),
      p = Math.sin(u),
      g = Math.cos(c),
      m = Math.sin(c),
      v = (P, C, E) => (Rs(P, u, c, !0) ? 1 : Math.max(C, C * n, E, E * n)),
      y = (P, C, E) => (Rs(P, u, c, !0) ? -1 : Math.min(C, C * n, E, E * n)),
      S = v(0, d, g),
      M = v(Kt, p, m),
      w = y(Wt, d, g),
      b = y(Wt + Kt, p, m);
    (i = (S - w) / 2),
      (r = (M - b) / 2),
      (s = -(S + w) / 2),
      (a = -(M + b) / 2);
  }
  return { ratioX: i, ratioY: r, offsetX: s, offsetY: a };
}
class Ks extends gn {
  constructor(t, n) {
    super(t, n),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(t, n) {
    const i = this.getDataset().data,
      r = this._cachedMeta;
    if (this._parsing === !1) r._parsed = i;
    else {
      let s = (c) => +i[c];
      if (xt(i[t])) {
        const { key: c = "value" } = this._parsing;
        s = (d) => +Li(i[d], c);
      }
      let a, u;
      for (a = t, u = t + n; a < u; ++a) r._parsed[a] = s(a);
    }
  }
  _getRotation() {
    return hn(this.options.rotation - 90);
  }
  _getCircumference() {
    return hn(this.options.circumference);
  }
  _getRotationExtents() {
    let t = Rt,
      n = -Rt;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i)) {
        const r = this.chart.getDatasetMeta(i).controller,
          s = r._getRotation(),
          a = r._getCircumference();
        (t = Math.min(t, s)), (n = Math.max(n, s + a));
      }
    return { rotation: t, circumference: n - t };
  }
  update(t) {
    const n = this.chart,
      { chartArea: i } = n,
      r = this._cachedMeta,
      s = r.data,
      a =
        this.getMaxBorderWidth() + this.getMaxOffset(s) + this.options.spacing,
      u = Math.max((Math.min(i.width, i.height) - a) / 2, 0),
      c = Math.min(LS(this.options.cutout, u), 1),
      d = this._getRingWeight(this.index),
      { circumference: p, rotation: g } = this._getRotationExtents(),
      { ratioX: m, ratioY: v, offsetX: y, offsetY: S } = Rk(g, p, c),
      M = (i.width - a) / m,
      w = (i.height - a) / v,
      b = Math.max(Math.min(M, w) / 2, 0),
      P = _y(this.options.radius, b),
      C = Math.max(P * c, 0),
      E = (P - C) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = y * P),
      (this.offsetY = S * P),
      (r.total = this.calculateTotal()),
      (this.outerRadius = P - E * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - E * d, 0)),
      this.updateElements(s, 0, s.length, t);
  }
  _circumference(t, n) {
    const i = this.options,
      r = this._cachedMeta,
      s = this._getCircumference();
    return (n && i.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      r._parsed[t] === null ||
      r.data[t].hidden
      ? 0
      : this.calculateCircumference((r._parsed[t] * s) / Rt);
  }
  updateElements(t, n, i, r) {
    const s = r === "reset",
      a = this.chart,
      u = a.chartArea,
      d = a.options.animation,
      p = (u.left + u.right) / 2,
      g = (u.top + u.bottom) / 2,
      m = s && d.animateScale,
      v = m ? 0 : this.innerRadius,
      y = m ? 0 : this.outerRadius,
      { sharedOptions: S, includeOptions: M } = this._getSharedOptions(n, r);
    let w = this._getRotation(),
      b;
    for (b = 0; b < n; ++b) w += this._circumference(b, s);
    for (b = n; b < n + i; ++b) {
      const P = this._circumference(b, s),
        C = t[b],
        E = {
          x: p + this.offsetX,
          y: g + this.offsetY,
          startAngle: w,
          endAngle: w + P,
          circumference: P,
          outerRadius: y,
          innerRadius: v,
        };
      M &&
        (E.options =
          S || this.resolveDataElementOptions(b, C.active ? "active" : r)),
        (w += P),
        this.updateElement(C, b, E, r);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      n = t.data;
    let i = 0,
      r;
    for (r = 0; r < n.length; r++) {
      const s = t._parsed[r];
      s !== null &&
        !isNaN(s) &&
        this.chart.getDataVisibility(r) &&
        !n[r].hidden &&
        (i += Math.abs(s));
    }
    return i;
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(t) ? Rt * (Math.abs(t) / n) : 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = this.chart,
      r = i.data.labels || [],
      s = Ys(n._parsed[t], i.options.locale);
    return { label: r[t] || "", value: s };
  }
  getMaxBorderWidth(t) {
    let n = 0;
    const i = this.chart;
    let r, s, a, u, c;
    if (!t) {
      for (r = 0, s = i.data.datasets.length; r < s; ++r)
        if (i.isDatasetVisible(r)) {
          (a = i.getDatasetMeta(r)), (t = a.data), (u = a.controller);
          break;
        }
    }
    if (!t) return 0;
    for (r = 0, s = t.length; r < s; ++r)
      (c = u.resolveDataElementOptions(r)),
        c.borderAlign !== "inner" &&
          (n = Math.max(n, c.borderWidth || 0, c.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(t) {
    let n = 0;
    for (let i = 0, r = t.length; i < r; ++i) {
      const s = this.resolveDataElementOptions(i);
      n = Math.max(n, s.offset || 0, s.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(t) {
    let n = 0;
    for (let i = 0; i < t; ++i)
      this.chart.isDatasetVisible(i) && (n += this._getRingWeight(i));
    return n;
  }
  _getRingWeight(t) {
    return Math.max(ht(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
Ks.id = "doughnut";
Ks.defaults = {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: { animateRotate: !0, animateScale: !1 },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing",
      ],
    },
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r",
};
Ks.descriptors = {
  _scriptable: (e) => e !== "spacing",
  _indexable: (e) => e !== "spacing",
};
Ks.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(e) {
          const t = e.data;
          if (t.labels.length && t.datasets.length) {
            const {
              labels: { pointStyle: n },
            } = e.legend.options;
            return t.labels.map((i, r) => {
              const a = e.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: i,
                fillStyle: a.backgroundColor,
                strokeStyle: a.borderColor,
                lineWidth: a.borderWidth,
                pointStyle: n,
                hidden: !e.getDataVisibility(r),
                index: r,
              };
            });
          }
          return [];
        },
      },
      onClick(e, t, n) {
        n.chart.toggleDataVisibility(t.index), n.chart.update();
      },
    },
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(e) {
          let t = e.label;
          const n = ": " + e.formattedValue;
          return Bt(t) ? ((t = t.slice()), (t[0] += n)) : (t += n), t;
        },
      },
    },
  },
};
class hu extends gn {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(t) {
    const n = this._cachedMeta,
      { dataset: i, data: r = [], _dataset: s } = n,
      a = this.chart._animationsDisabled;
    let { start: u, count: c } = ky(n, r, a);
    (this._drawStart = u),
      (this._drawCount = c),
      Cy(n) && ((u = 0), (c = r.length)),
      (i._chart = this.chart),
      (i._datasetIndex = this.index),
      (i._decimated = !!s._decimated),
      (i.points = r);
    const d = this.resolveDatasetElementOptions(t);
    this.options.showLine || (d.borderWidth = 0),
      (d.segment = this.options.segment),
      this.updateElement(i, void 0, { animated: !a, options: d }, t),
      this.updateElements(r, u, c, t);
  }
  updateElements(t, n, i, r) {
    const s = r === "reset",
      { iScale: a, vScale: u, _stacked: c, _dataset: d } = this._cachedMeta,
      { sharedOptions: p, includeOptions: g } = this._getSharedOptions(n, r),
      m = a.axis,
      v = u.axis,
      { spanGaps: y, segment: S } = this.options,
      M = oo(y) ? y : Number.POSITIVE_INFINITY,
      w = this.chart._animationsDisabled || s || r === "none";
    let b = n > 0 && this.getParsed(n - 1);
    for (let P = n; P < n + i; ++P) {
      const C = t[P],
        E = this.getParsed(P),
        R = w ? C : {},
        D = Ct(E[v]),
        N = (R[m] = a.getPixelForValue(E[m], P)),
        V = (R[v] =
          s || D
            ? u.getBasePixel()
            : u.getPixelForValue(c ? this.applyStack(u, E, c) : E[v], P));
      (R.skip = isNaN(N) || isNaN(V) || D),
        (R.stop = P > 0 && Math.abs(E[m] - b[m]) > M),
        S && ((R.parsed = E), (R.raw = d.data[P])),
        g &&
          (R.options =
            p || this.resolveDataElementOptions(P, C.active ? "active" : r)),
        w || this.updateElement(C, P, R, r),
        (b = E);
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      n = t.dataset,
      i = (n.options && n.options.borderWidth) || 0,
      r = t.data || [];
    if (!r.length) return i;
    const s = r[0].size(this.resolveDataElementOptions(0)),
      a = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
    return Math.max(i, s, a) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw();
  }
}
hu.id = "line";
hu.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1,
};
hu.overrides = {
  scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
};
class rf extends gn {
  constructor(t, n) {
    super(t, n), (this.innerRadius = void 0), (this.outerRadius = void 0);
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = this.chart,
      r = i.data.labels || [],
      s = Ys(n._parsed[t].r, i.options.locale);
    return { label: r[t] || "", value: s };
  }
  parseObjectData(t, n, i, r) {
    return By.bind(this)(t, n, i, r);
  }
  update(t) {
    const n = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(n, 0, n.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta,
      n = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
    return (
      t.data.forEach((i, r) => {
        const s = this.getParsed(r).r;
        !isNaN(s) &&
          this.chart.getDataVisibility(r) &&
          (s < n.min && (n.min = s), s > n.max && (n.max = s));
      }),
      n
    );
  }
  _updateRadius() {
    const t = this.chart,
      n = t.chartArea,
      i = t.options,
      r = Math.min(n.right - n.left, n.bottom - n.top),
      s = Math.max(r / 2, 0),
      a = Math.max(i.cutoutPercentage ? (s / 100) * i.cutoutPercentage : 1, 0),
      u = (s - a) / t.getVisibleDatasetCount();
    (this.outerRadius = s - u * this.index),
      (this.innerRadius = this.outerRadius - u);
  }
  updateElements(t, n, i, r) {
    const s = r === "reset",
      a = this.chart,
      c = a.options.animation,
      d = this._cachedMeta.rScale,
      p = d.xCenter,
      g = d.yCenter,
      m = d.getIndexAngle(0) - 0.5 * Wt;
    let v = m,
      y;
    const S = 360 / this.countVisibleElements();
    for (y = 0; y < n; ++y) v += this._computeAngle(y, r, S);
    for (y = n; y < n + i; y++) {
      const M = t[y];
      let w = v,
        b = v + this._computeAngle(y, r, S),
        P = a.getDataVisibility(y)
          ? d.getDistanceFromCenterForValue(this.getParsed(y).r)
          : 0;
      (v = b), s && (c.animateScale && (P = 0), c.animateRotate && (w = b = m));
      const C = {
        x: p,
        y: g,
        innerRadius: 0,
        outerRadius: P,
        startAngle: w,
        endAngle: b,
        options: this.resolveDataElementOptions(y, M.active ? "active" : r),
      };
      this.updateElement(M, y, C, r);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let n = 0;
    return (
      t.data.forEach((i, r) => {
        !isNaN(this.getParsed(r).r) && this.chart.getDataVisibility(r) && n++;
      }),
      n
    );
  }
  _computeAngle(t, n, i) {
    return this.chart.getDataVisibility(t)
      ? hn(this.resolveDataElementOptions(t, n).angle || i)
      : 0;
  }
}
rf.id = "polarArea";
rf.defaults = {
  dataElementType: "arc",
  animation: { animateRotate: !0, animateScale: !0 },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius",
      ],
    },
  },
  indexAxis: "r",
  startAngle: 0,
};
rf.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(e) {
          const t = e.data;
          if (t.labels.length && t.datasets.length) {
            const {
              labels: { pointStyle: n },
            } = e.legend.options;
            return t.labels.map((i, r) => {
              const a = e.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: i,
                fillStyle: a.backgroundColor,
                strokeStyle: a.borderColor,
                lineWidth: a.borderWidth,
                pointStyle: n,
                hidden: !e.getDataVisibility(r),
                index: r,
              };
            });
          }
          return [];
        },
      },
      onClick(e, t, n) {
        n.chart.toggleDataVisibility(t.index), n.chart.update();
      },
    },
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(e) {
          return e.chart.data.labels[e.dataIndex] + ": " + e.formattedValue;
        },
      },
    },
  },
  scales: {
    r: {
      type: "radialLinear",
      angleLines: { display: !1 },
      beginAtZero: !0,
      grid: { circular: !0 },
      pointLabels: { display: !1 },
      startAngle: 0,
    },
  },
};
class Yy extends Ks {}
Yy.id = "pie";
Yy.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: "100%" };
class of extends gn {
  getLabelAndValue(t) {
    const n = this._cachedMeta.vScale,
      i = this.getParsed(t);
    return {
      label: n.getLabels()[t],
      value: "" + n.getLabelForValue(i[n.axis]),
    };
  }
  parseObjectData(t, n, i, r) {
    return By.bind(this)(t, n, i, r);
  }
  update(t) {
    const n = this._cachedMeta,
      i = n.dataset,
      r = n.data || [],
      s = n.iScale.getLabels();
    if (((i.points = r), t !== "resize")) {
      const a = this.resolveDatasetElementOptions(t);
      this.options.showLine || (a.borderWidth = 0);
      const u = { _loop: !0, _fullLoop: s.length === r.length, options: a };
      this.updateElement(i, void 0, u, t);
    }
    this.updateElements(r, 0, r.length, t);
  }
  updateElements(t, n, i, r) {
    const s = this._cachedMeta.rScale,
      a = r === "reset";
    for (let u = n; u < n + i; u++) {
      const c = t[u],
        d = this.resolveDataElementOptions(u, c.active ? "active" : r),
        p = s.getPointPositionForValue(u, this.getParsed(u).r),
        g = a ? s.xCenter : p.x,
        m = a ? s.yCenter : p.y,
        v = {
          x: g,
          y: m,
          angle: p.angle,
          skip: isNaN(g) || isNaN(m),
          options: d,
        };
      this.updateElement(c, u, v, r);
    }
  }
}
of.id = "radar";
of.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: { line: { fill: "start" } },
};
of.overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } };
class _n {
  constructor() {
    (this.x = void 0),
      (this.y = void 0),
      (this.active = !1),
      (this.options = void 0),
      (this.$animations = void 0);
  }
  tooltipPosition(t) {
    const { x: n, y: i } = this.getProps(["x", "y"], t);
    return { x: n, y: i };
  }
  hasValue() {
    return oo(this.x) && oo(this.y);
  }
  getProps(t, n) {
    const i = this.$animations;
    if (!n || !i) return this;
    const r = {};
    return (
      t.forEach((s) => {
        r[s] = i[s] && i[s].active() ? i[s]._to : this[s];
      }),
      r
    );
  }
}
_n.defaults = {};
_n.defaultRoutes = void 0;
const Ky = {
  values(e) {
    return Bt(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0) return "0";
    const i = this.chart.options.locale;
    let r,
      s = e;
    if (n.length > 1) {
      const d = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (d < 1e-4 || d > 1e15) && (r = "scientific"), (s = zk(e, n));
    }
    const a = Xe(Math.abs(s)),
      u = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
      c = { notation: r, minimumFractionDigits: u, maximumFractionDigits: u };
    return Object.assign(c, this.options.ticks.format), Ys(e, i, c);
  },
  logarithmic(e, t, n) {
    if (e === 0) return "0";
    const i = e / Math.pow(10, Math.floor(Xe(e)));
    return i === 1 || i === 2 || i === 5 ? Ky.numeric.call(this, e, t, n) : "";
  },
};
function zk(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var du = { formatters: Ky };
pt.set("scale", {
  display: !0,
  offset: !1,
  reverse: !1,
  beginAtZero: !1,
  bounds: "ticks",
  grace: 0,
  grid: {
    display: !0,
    lineWidth: 1,
    drawBorder: !0,
    drawOnChartArea: !0,
    drawTicks: !0,
    tickLength: 8,
    tickWidth: (e, t) => t.lineWidth,
    tickColor: (e, t) => t.color,
    offset: !1,
    borderDash: [],
    borderDashOffset: 0,
    borderWidth: 1,
  },
  title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: !1,
    textStrokeWidth: 0,
    textStrokeColor: "",
    padding: 3,
    display: !0,
    autoSkip: !0,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: du.formatters.values,
    minor: {},
    major: {},
    align: "center",
    crossAlign: "near",
    showLabelBackdrop: !1,
    backdropColor: "rgba(255, 255, 255, 0.75)",
    backdropPadding: 2,
  },
});
pt.route("scale.ticks", "color", "", "color");
pt.route("scale.grid", "color", "", "borderColor");
pt.route("scale.grid", "borderColor", "", "borderColor");
pt.route("scale.title", "color", "", "color");
pt.describe("scale", {
  _fallback: !1,
  _scriptable: (e) =>
    !e.startsWith("before") &&
    !e.startsWith("after") &&
    e !== "callback" &&
    e !== "parser",
  _indexable: (e) => e !== "borderDash" && e !== "tickBorderDash",
});
pt.describe("scales", { _fallback: "scale" });
pt.describe("scale.ticks", {
  _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
  _indexable: (e) => e !== "backdropPadding",
});
function Ak(e, t) {
  const n = e.options.ticks,
    i = n.maxTicksLimit || Ik(e),
    r = n.major.enabled ? Bk(t) : [],
    s = r.length,
    a = r[0],
    u = r[s - 1],
    c = [];
  if (s > i) return Fk(t, c, r, s / i), c;
  const d = Nk(r, t, i);
  if (s > 0) {
    let p, g;
    const m = s > 1 ? Math.round((u - a) / (s - 1)) : null;
    for (Za(t, c, d, Ct(m) ? 0 : a - m, a), p = 0, g = s - 1; p < g; p++)
      Za(t, c, d, r[p], r[p + 1]);
    return Za(t, c, d, u, Ct(m) ? t.length : u + m), c;
  }
  return Za(t, c, d), c;
}
function Ik(e) {
  const t = e.options.offset,
    n = e._tickSize(),
    i = e._length / n + (t ? 0 : 1),
    r = e._maxLength / n;
  return Math.floor(Math.min(i, r));
}
function Nk(e, t, n) {
  const i = jk(e),
    r = t.length / n;
  if (!i) return Math.max(r, 1);
  const s = AS(i);
  for (let a = 0, u = s.length - 1; a < u; a++) {
    const c = s[a];
    if (c > r) return c;
  }
  return Math.max(r, 1);
}
function Bk(e) {
  const t = [];
  let n, i;
  for (n = 0, i = e.length; n < i; n++) e[n].major && t.push(n);
  return t;
}
function Fk(e, t, n, i) {
  let r = 0,
    s = n[0],
    a;
  for (i = Math.ceil(i), a = 0; a < e.length; a++)
    a === s && (t.push(e[a]), r++, (s = n[r * i]));
}
function Za(e, t, n, i, r) {
  const s = ht(i, 0),
    a = Math.min(ht(r, e.length), e.length);
  let u = 0,
    c,
    d,
    p;
  for (
    n = Math.ceil(n), r && ((c = r - i), (n = c / Math.floor(c / n))), p = s;
    p < 0;

  )
    u++, (p = Math.round(s + u * n));
  for (d = Math.max(s, 0); d < a; d++)
    d === p && (t.push(e[d]), u++, (p = Math.round(s + u * n)));
}
function jk(e) {
  const t = e.length;
  let n, i;
  if (t < 2) return !1;
  for (i = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== i) return !1;
  return i;
}
const Wk = (e) => (e === "left" ? "right" : e === "right" ? "left" : e),
  pg = (e, t, n) => (t === "top" || t === "left" ? e[t] + n : e[t] - n);
function mg(e, t) {
  const n = [],
    i = e.length / t,
    r = e.length;
  let s = 0;
  for (; s < r; s += i) n.push(e[Math.floor(s)]);
  return n;
}
function Hk(e, t, n) {
  const i = e.ticks.length,
    r = Math.min(t, i - 1),
    s = e._startPixel,
    a = e._endPixel,
    u = 1e-6;
  let c = e.getPixelForTick(r),
    d;
  if (
    !(
      n &&
      (i === 1
        ? (d = Math.max(c - s, a - c))
        : t === 0
        ? (d = (e.getPixelForTick(1) - c) / 2)
        : (d = (c - e.getPixelForTick(r - 1)) / 2),
      (c += r < t ? d : -d),
      c < s - u || c > a + u)
    )
  )
    return c;
}
function Vk(e, t) {
  Et(e, (n) => {
    const i = n.gc,
      r = i.length / 2;
    let s;
    if (r > t) {
      for (s = 0; s < r; ++s) delete n.data[i[s]];
      i.splice(0, r);
    }
  });
}
function Wo(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function gg(e, t) {
  if (!e.display) return 0;
  const n = re(e.font, t),
    i = be(e.padding);
  return (Bt(e.text) ? e.text.length : 1) * n.lineHeight + i.height;
}
function Zk(e, t) {
  return Ri(e, { scale: t, type: "scale" });
}
function Uk(e, t, n) {
  return Ri(e, { tick: n, index: t, type: "tick" });
}
function $k(e, t, n) {
  let i = Zd(e);
  return ((n && t !== "right") || (!n && t === "right")) && (i = Wk(i)), i;
}
function Yk(e, t, n, i) {
  const { top: r, left: s, bottom: a, right: u, chart: c } = e,
    { chartArea: d, scales: p } = c;
  let g = 0,
    m,
    v,
    y;
  const S = a - r,
    M = u - s;
  if (e.isHorizontal()) {
    if (((v = ve(i, s, u)), xt(n))) {
      const w = Object.keys(n)[0],
        b = n[w];
      y = p[w].getPixelForValue(b) + S - t;
    } else
      n === "center" ? (y = (d.bottom + d.top) / 2 + S - t) : (y = pg(e, n, t));
    m = u - s;
  } else {
    if (xt(n)) {
      const w = Object.keys(n)[0],
        b = n[w];
      v = p[w].getPixelForValue(b) - M + t;
    } else
      n === "center" ? (v = (d.left + d.right) / 2 - M + t) : (v = pg(e, n, t));
    (y = ve(i, a, r)), (g = n === "left" ? -Kt : Kt);
  }
  return { titleX: v, titleY: y, maxWidth: m, rotation: g };
}
class pr extends _n {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, n) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: i, _suggestedMax: r } = this;
    return (
      (t = $e(t, Number.POSITIVE_INFINITY)),
      (n = $e(n, Number.NEGATIVE_INFINITY)),
      (i = $e(i, Number.POSITIVE_INFINITY)),
      (r = $e(r, Number.NEGATIVE_INFINITY)),
      { min: $e(t, i), max: $e(n, r), minDefined: pe(t), maxDefined: pe(n) }
    );
  }
  getMinMax(t) {
    let { min: n, max: i, minDefined: r, maxDefined: s } = this.getUserBounds(),
      a;
    if (r && s) return { min: n, max: i };
    const u = this.getMatchingVisibleMetas();
    for (let c = 0, d = u.length; c < d; ++c)
      (a = u[c].controller.getMinMax(this, t)),
        r || (n = Math.min(n, a.min)),
        s || (i = Math.max(i, a.max));
    return (
      (n = s && n > i ? i : n),
      (i = r && n > i ? n : i),
      { min: $e(n, $e(i, n)), max: $e(i, $e(n, i)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    At(this.options.beforeUpdate, [this]);
  }
  update(t, n, i) {
    const { beginAtZero: r, grace: s, ticks: a } = this.options,
      u = a.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = SP(this, s, r)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const c = u < this.ticks.length;
    this._convertTicksToLabels(c ? mg(this.ticks, u) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      a.display &&
        (a.autoSkip || a.source === "auto") &&
        ((this.ticks = Ak(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      c && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      n,
      i;
    this.isHorizontal()
      ? ((n = this.left), (i = this.right))
      : ((n = this.top), (i = this.bottom), (t = !t)),
      (this._startPixel = n),
      (this._endPixel = i),
      (this._reversePixels = t),
      (this._length = i - n),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    At(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    At(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    At(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), At(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    At(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let i, r, s;
    for (i = 0, r = t.length; i < r; i++)
      (s = t[i]), (s.label = At(n.callback, [s.value, i, t], this));
  }
  afterTickToLabelConversion() {
    At(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    At(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      n = t.ticks,
      i = this.ticks.length,
      r = n.minRotation || 0,
      s = n.maxRotation;
    let a = r,
      u,
      c,
      d;
    if (
      !this._isVisible() ||
      !n.display ||
      r >= s ||
      i <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = r;
      return;
    }
    const p = this._getLabelSizes(),
      g = p.widest.width,
      m = p.highest.height,
      v = xe(this.chart.width - g, 0, this.maxWidth);
    (u = t.offset ? this.maxWidth / i : v / (i - 1)),
      g + 6 > u &&
        ((u = v / (i - (t.offset ? 0.5 : 1))),
        (c =
          this.maxHeight -
          Wo(t.grid) -
          n.padding -
          gg(t.title, this.chart.options.font)),
        (d = Math.sqrt(g * g + m * m)),
        (a = Hd(
          Math.min(
            Math.asin(xe((p.highest.height + 6) / u, -1, 1)),
            Math.asin(xe(c / d, -1, 1)) - Math.asin(xe(m / d, -1, 1))
          )
        )),
        (a = Math.max(r, Math.min(s, a)))),
      (this.labelRotation = a);
  }
  afterCalculateLabelRotation() {
    At(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    At(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: i, title: r, grid: s },
      } = this,
      a = this._isVisible(),
      u = this.isHorizontal();
    if (a) {
      const c = gg(r, n.options.font);
      if (
        (u
          ? ((t.width = this.maxWidth), (t.height = Wo(s) + c))
          : ((t.height = this.maxHeight), (t.width = Wo(s) + c)),
        i.display && this.ticks.length)
      ) {
        const {
            first: d,
            last: p,
            widest: g,
            highest: m,
          } = this._getLabelSizes(),
          v = i.padding * 2,
          y = hn(this.labelRotation),
          S = Math.cos(y),
          M = Math.sin(y);
        if (u) {
          const w = i.mirror ? 0 : M * g.width + S * m.height;
          t.height = Math.min(this.maxHeight, t.height + w + v);
        } else {
          const w = i.mirror ? 0 : S * g.width + M * m.height;
          t.width = Math.min(this.maxWidth, t.width + w + v);
        }
        this._calculatePadding(d, p, M, S);
      }
    }
    this._handleMargins(),
      u
        ? ((this.width = this._length =
            n.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            n.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, n, i, r) {
    const {
        ticks: { align: s, padding: a },
        position: u,
      } = this.options,
      c = this.labelRotation !== 0,
      d = u !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const p = this.getPixelForTick(0) - this.left,
        g = this.right - this.getPixelForTick(this.ticks.length - 1);
      let m = 0,
        v = 0;
      c
        ? d
          ? ((m = r * t.width), (v = i * n.height))
          : ((m = i * t.height), (v = r * n.width))
        : s === "start"
        ? (v = n.width)
        : s === "end"
        ? (m = t.width)
        : s !== "inner" && ((m = t.width / 2), (v = n.width / 2)),
        (this.paddingLeft = Math.max(
          ((m - p + a) * this.width) / (this.width - p),
          0
        )),
        (this.paddingRight = Math.max(
          ((v - g + a) * this.width) / (this.width - g),
          0
        ));
    } else {
      let p = n.height / 2,
        g = t.height / 2;
      s === "start"
        ? ((p = 0), (g = t.height))
        : s === "end" && ((p = n.height), (g = 0)),
        (this.paddingTop = p + a),
        (this.paddingBottom = g + a);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    At(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options;
    return n === "top" || n === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let n, i;
    for (n = 0, i = t.length; n < i; n++)
      Ct(t[n].label) && (t.splice(n, 1), i--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let i = this.ticks;
      n < i.length && (i = mg(i, n)),
        (this._labelSizes = t = this._computeLabelSizes(i, i.length));
    }
    return t;
  }
  _computeLabelSizes(t, n) {
    const { ctx: i, _longestTextCache: r } = this,
      s = [],
      a = [];
    let u = 0,
      c = 0,
      d,
      p,
      g,
      m,
      v,
      y,
      S,
      M,
      w,
      b,
      P;
    for (d = 0; d < n; ++d) {
      if (
        ((m = t[d].label),
        (v = this._resolveTickFontOptions(d)),
        (i.font = y = v.string),
        (S = r[y] = r[y] || { data: {}, gc: [] }),
        (M = v.lineHeight),
        (w = b = 0),
        !Ct(m) && !Bt(m))
      )
        (w = Bl(i, S.data, S.gc, w, m)), (b = M);
      else if (Bt(m))
        for (p = 0, g = m.length; p < g; ++p)
          (P = m[p]),
            !Ct(P) && !Bt(P) && ((w = Bl(i, S.data, S.gc, w, P)), (b += M));
      s.push(w), a.push(b), (u = Math.max(w, u)), (c = Math.max(b, c));
    }
    Vk(r, n);
    const C = s.indexOf(u),
      E = a.indexOf(c),
      R = (D) => ({ width: s[D] || 0, height: a[D] || 0 });
    return {
      first: R(0),
      last: R(n - 1),
      widest: R(C),
      highest: R(E),
      widths: s,
      heights: a,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, n) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const n = this._startPixel + t * this._length;
    return BS(this._alignToPixels ? Vi(this.chart, n, 0) : n);
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: n } = this;
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
  }
  getContext(t) {
    const n = this.ticks || [];
    if (t >= 0 && t < n.length) {
      const i = n[t];
      return i.$context || (i.$context = Uk(this.getContext(), t, i));
    }
    return this.$context || (this.$context = Zk(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      n = hn(this.labelRotation),
      i = Math.abs(Math.cos(n)),
      r = Math.abs(Math.sin(n)),
      s = this._getLabelSizes(),
      a = t.autoSkipPadding || 0,
      u = s ? s.widest.width + a : 0,
      c = s ? s.highest.height + a : 0;
    return this.isHorizontal()
      ? c * i > u * r
        ? u / i
        : c / r
      : c * r < u * i
      ? c / i
      : u / r;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis,
      i = this.chart,
      r = this.options,
      { grid: s, position: a } = r,
      u = s.offset,
      c = this.isHorizontal(),
      p = this.ticks.length + (u ? 1 : 0),
      g = Wo(s),
      m = [],
      v = s.setContext(this.getContext()),
      y = v.drawBorder ? v.borderWidth : 0,
      S = y / 2,
      M = function (q) {
        return Vi(i, q, y);
      };
    let w, b, P, C, E, R, D, N, V, Z, K, X;
    if (a === "top")
      (w = M(this.bottom)),
        (R = this.bottom - g),
        (N = w - S),
        (Z = M(t.top) + S),
        (X = t.bottom);
    else if (a === "bottom")
      (w = M(this.top)),
        (Z = t.top),
        (X = M(t.bottom) - S),
        (R = w + S),
        (N = this.top + g);
    else if (a === "left")
      (w = M(this.right)),
        (E = this.right - g),
        (D = w - S),
        (V = M(t.left) + S),
        (K = t.right);
    else if (a === "right")
      (w = M(this.left)),
        (V = t.left),
        (K = M(t.right) - S),
        (E = w + S),
        (D = this.left + g);
    else if (n === "x") {
      if (a === "center") w = M((t.top + t.bottom) / 2 + 0.5);
      else if (xt(a)) {
        const q = Object.keys(a)[0],
          ut = a[q];
        w = M(this.chart.scales[q].getPixelForValue(ut));
      }
      (Z = t.top), (X = t.bottom), (R = w + S), (N = R + g);
    } else if (n === "y") {
      if (a === "center") w = M((t.left + t.right) / 2);
      else if (xt(a)) {
        const q = Object.keys(a)[0],
          ut = a[q];
        w = M(this.chart.scales[q].getPixelForValue(ut));
      }
      (E = w - S), (D = E - g), (V = t.left), (K = t.right);
    }
    const Pt = ht(r.ticks.maxTicksLimit, p),
      rt = Math.max(1, Math.ceil(p / Pt));
    for (b = 0; b < p; b += rt) {
      const q = s.setContext(this.getContext(b)),
        ut = q.lineWidth,
        _t = q.color,
        z = q.borderDash || [],
        J = q.borderDashOffset,
        W = q.tickWidth,
        Q = q.tickColor,
        ot = q.tickBorderDash || [],
        Ot = q.tickBorderDashOffset;
      (P = Hk(this, b, u)),
        P !== void 0 &&
          ((C = Vi(i, P, ut)),
          c ? (E = D = V = K = C) : (R = N = Z = X = C),
          m.push({
            tx1: E,
            ty1: R,
            tx2: D,
            ty2: N,
            x1: V,
            y1: Z,
            x2: K,
            y2: X,
            width: ut,
            color: _t,
            borderDash: z,
            borderDashOffset: J,
            tickWidth: W,
            tickColor: Q,
            tickBorderDash: ot,
            tickBorderDashOffset: Ot,
          }));
    }
    return (this._ticksLength = p), (this._borderValue = w), m;
  }
  _computeLabelItems(t) {
    const n = this.axis,
      i = this.options,
      { position: r, ticks: s } = i,
      a = this.isHorizontal(),
      u = this.ticks,
      { align: c, crossAlign: d, padding: p, mirror: g } = s,
      m = Wo(i.grid),
      v = m + p,
      y = g ? -p : v,
      S = -hn(this.labelRotation),
      M = [];
    let w,
      b,
      P,
      C,
      E,
      R,
      D,
      N,
      V,
      Z,
      K,
      X,
      Pt = "middle";
    if (r === "top")
      (R = this.bottom - y), (D = this._getXAxisLabelAlignment());
    else if (r === "bottom")
      (R = this.top + y), (D = this._getXAxisLabelAlignment());
    else if (r === "left") {
      const q = this._getYAxisLabelAlignment(m);
      (D = q.textAlign), (E = q.x);
    } else if (r === "right") {
      const q = this._getYAxisLabelAlignment(m);
      (D = q.textAlign), (E = q.x);
    } else if (n === "x") {
      if (r === "center") R = (t.top + t.bottom) / 2 + v;
      else if (xt(r)) {
        const q = Object.keys(r)[0],
          ut = r[q];
        R = this.chart.scales[q].getPixelForValue(ut) + v;
      }
      D = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (r === "center") E = (t.left + t.right) / 2 - v;
      else if (xt(r)) {
        const q = Object.keys(r)[0],
          ut = r[q];
        E = this.chart.scales[q].getPixelForValue(ut);
      }
      D = this._getYAxisLabelAlignment(m).textAlign;
    }
    n === "y" &&
      (c === "start" ? (Pt = "top") : c === "end" && (Pt = "bottom"));
    const rt = this._getLabelSizes();
    for (w = 0, b = u.length; w < b; ++w) {
      (P = u[w]), (C = P.label);
      const q = s.setContext(this.getContext(w));
      (N = this.getPixelForTick(w) + s.labelOffset),
        (V = this._resolveTickFontOptions(w)),
        (Z = V.lineHeight),
        (K = Bt(C) ? C.length : 1);
      const ut = K / 2,
        _t = q.color,
        z = q.textStrokeColor,
        J = q.textStrokeWidth;
      let W = D;
      a
        ? ((E = N),
          D === "inner" &&
            (w === b - 1
              ? (W = this.options.reverse ? "left" : "right")
              : w === 0
              ? (W = this.options.reverse ? "right" : "left")
              : (W = "center")),
          r === "top"
            ? d === "near" || S !== 0
              ? (X = -K * Z + Z / 2)
              : d === "center"
              ? (X = -rt.highest.height / 2 - ut * Z + Z)
              : (X = -rt.highest.height + Z / 2)
            : d === "near" || S !== 0
            ? (X = Z / 2)
            : d === "center"
            ? (X = rt.highest.height / 2 - ut * Z)
            : (X = rt.highest.height - K * Z),
          g && (X *= -1))
        : ((R = N), (X = ((1 - K) * Z) / 2));
      let Q;
      if (q.showLabelBackdrop) {
        const ot = be(q.backdropPadding),
          Ot = rt.heights[w],
          wt = rt.widths[w];
        let at = R + X - ot.top,
          lt = E - ot.left;
        switch (Pt) {
          case "middle":
            at -= Ot / 2;
            break;
          case "bottom":
            at -= Ot;
            break;
        }
        switch (D) {
          case "center":
            lt -= wt / 2;
            break;
          case "right":
            lt -= wt;
            break;
        }
        Q = {
          left: lt,
          top: at,
          width: wt + ot.width,
          height: Ot + ot.height,
          color: q.backdropColor,
        };
      }
      M.push({
        rotation: S,
        label: C,
        font: V,
        color: _t,
        strokeColor: z,
        strokeWidth: J,
        textOffset: X,
        textAlign: W,
        textBaseline: Pt,
        translation: [E, R],
        backdrop: Q,
      });
    }
    return M;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-hn(this.labelRotation)) return t === "top" ? "left" : "right";
    let r = "center";
    return (
      n.align === "start"
        ? (r = "left")
        : n.align === "end"
        ? (r = "right")
        : n.align === "inner" && (r = "inner"),
      r
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: n,
        ticks: { crossAlign: i, mirror: r, padding: s },
      } = this.options,
      a = this._getLabelSizes(),
      u = t + s,
      c = a.widest.width;
    let d, p;
    return (
      n === "left"
        ? r
          ? ((p = this.right + s),
            i === "near"
              ? (d = "left")
              : i === "center"
              ? ((d = "center"), (p += c / 2))
              : ((d = "right"), (p += c)))
          : ((p = this.right - u),
            i === "near"
              ? (d = "right")
              : i === "center"
              ? ((d = "center"), (p -= c / 2))
              : ((d = "left"), (p = this.left)))
        : n === "right"
        ? r
          ? ((p = this.left + s),
            i === "near"
              ? (d = "right")
              : i === "center"
              ? ((d = "center"), (p -= c / 2))
              : ((d = "left"), (p -= c)))
          : ((p = this.left + u),
            i === "near"
              ? (d = "left")
              : i === "center"
              ? ((d = "center"), (p += c / 2))
              : ((d = "right"), (p = this.right)))
        : (d = "right"),
      { textAlign: d, x: p }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      n = this.options.position;
    if (n === "left" || n === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (n === "top" || n === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: n },
      left: i,
      top: r,
      width: s,
      height: a,
    } = this;
    n && (t.save(), (t.fillStyle = n), t.fillRect(i, r, s, a), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display) return 0;
    const r = this.ticks.findIndex((s) => s.value === t);
    return r >= 0 ? n.setContext(this.getContext(r)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid,
      i = this.ctx,
      r =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let s, a;
    const u = (c, d, p) => {
      !p.width ||
        !p.color ||
        (i.save(),
        (i.lineWidth = p.width),
        (i.strokeStyle = p.color),
        i.setLineDash(p.borderDash || []),
        (i.lineDashOffset = p.borderDashOffset),
        i.beginPath(),
        i.moveTo(c.x, c.y),
        i.lineTo(d.x, d.y),
        i.stroke(),
        i.restore());
    };
    if (n.display)
      for (s = 0, a = r.length; s < a; ++s) {
        const c = r[s];
        n.drawOnChartArea && u({ x: c.x1, y: c.y1 }, { x: c.x2, y: c.y2 }, c),
          n.drawTicks &&
            u(
              { x: c.tx1, y: c.ty1 },
              { x: c.tx2, y: c.ty2 },
              {
                color: c.tickColor,
                width: c.tickWidth,
                borderDash: c.tickBorderDash,
                borderDashOffset: c.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: n,
        options: { grid: i },
      } = this,
      r = i.setContext(this.getContext()),
      s = i.drawBorder ? r.borderWidth : 0;
    if (!s) return;
    const a = i.setContext(this.getContext(0)).lineWidth,
      u = this._borderValue;
    let c, d, p, g;
    this.isHorizontal()
      ? ((c = Vi(t, this.left, s) - s / 2),
        (d = Vi(t, this.right, a) + a / 2),
        (p = g = u))
      : ((p = Vi(t, this.top, s) - s / 2),
        (g = Vi(t, this.bottom, a) + a / 2),
        (c = d = u)),
      n.save(),
      (n.lineWidth = r.borderWidth),
      (n.strokeStyle = r.borderColor),
      n.beginPath(),
      n.moveTo(c, p),
      n.lineTo(d, g),
      n.stroke(),
      n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const i = this.ctx,
      r = this._computeLabelArea();
    r && Kd(i, r);
    const s =
      this._labelItems || (this._labelItems = this._computeLabelItems(t));
    let a, u;
    for (a = 0, u = s.length; a < u; ++a) {
      const c = s[a],
        d = c.font,
        p = c.label;
      c.backdrop &&
        ((i.fillStyle = c.backdrop.color),
        i.fillRect(
          c.backdrop.left,
          c.backdrop.top,
          c.backdrop.width,
          c.backdrop.height
        ));
      let g = c.textOffset;
      hr(i, p, 0, g, d, c);
    }
    r && Xd(i);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: n, title: i, reverse: r },
    } = this;
    if (!i.display) return;
    const s = re(i.font),
      a = be(i.padding),
      u = i.align;
    let c = s.lineHeight / 2;
    n === "bottom" || n === "center" || xt(n)
      ? ((c += a.bottom),
        Bt(i.text) && (c += s.lineHeight * (i.text.length - 1)))
      : (c += a.top);
    const {
      titleX: d,
      titleY: p,
      maxWidth: g,
      rotation: m,
    } = Yk(this, c, n, u);
    hr(t, i.text, 0, 0, s, {
      color: i.color,
      maxWidth: g,
      rotation: m,
      textAlign: $k(u, n, r),
      textBaseline: "middle",
      translation: [d, p],
    });
  }
  draw(t) {
    !this._isVisible() ||
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      n = (t.ticks && t.ticks.z) || 0,
      i = ht(t.grid && t.grid.z, -1);
    return !this._isVisible() || this.draw !== pr.prototype.draw
      ? [
          {
            z: n,
            draw: (r) => {
              this.draw(r);
            },
          },
        ]
      : [
          {
            z: i,
            draw: (r) => {
              this.drawBackground(), this.drawGrid(r), this.drawTitle();
            },
          },
          {
            z: i + 1,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: n,
            draw: (r) => {
              this.drawLabels(r);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + "AxisID",
      r = [];
    let s, a;
    for (s = 0, a = n.length; s < a; ++s) {
      const u = n[s];
      u[i] === this.id && (!t || u.type === t) && r.push(u);
    }
    return r;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return re(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Ua {
  constructor(t, n, i) {
    (this.type = t),
      (this.scope = n),
      (this.override = i),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let i;
    Gk(n) && (i = this.register(n));
    const r = this.items,
      s = t.id,
      a = this.scope + "." + s;
    if (!s) throw new Error("class does not have id: " + t);
    return (
      s in r ||
        ((r[s] = t),
        Kk(t, a, i),
        this.override && pt.override(t.id, t.overrides)),
      a
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items,
      i = t.id,
      r = this.scope;
    i in n && delete n[i],
      r && i in pt[r] && (delete pt[r][i], this.override && delete cr[i]);
  }
}
function Kk(e, t, n) {
  const i = Ds(Object.create(null), [
    n ? pt.get(n) : {},
    pt.get(t),
    e.defaults,
  ]);
  pt.set(t, i),
    e.defaultRoutes && Xk(t, e.defaultRoutes),
    e.descriptors && pt.describe(t, e.descriptors);
}
function Xk(e, t) {
  Object.keys(t).forEach((n) => {
    const i = n.split("."),
      r = i.pop(),
      s = [e].concat(i).join("."),
      a = t[n].split("."),
      u = a.pop(),
      c = a.join(".");
    pt.route(s, r, c, u);
  });
}
function Gk(e) {
  return "id" in e && "defaults" in e;
}
class Qk {
  constructor() {
    (this.controllers = new Ua(gn, "datasets", !0)),
      (this.elements = new Ua(_n, "elements")),
      (this.plugins = new Ua(Object, "plugins")),
      (this.scales = new Ua(pr, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, n, i) {
    [...n].forEach((r) => {
      const s = i || this._getRegistryForType(r);
      i || s.isForType(r) || (s === this.plugins && r.id)
        ? this._exec(t, s, r)
        : Et(r, (a) => {
            const u = i || this._getRegistryForType(a);
            this._exec(t, u, a);
          });
    });
  }
  _exec(t, n, i) {
    const r = Wd(t);
    At(i["before" + r], [], i), n[t](i), At(i["after" + r], [], i);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n];
      if (i.isForType(t)) return i;
    }
    return this.plugins;
  }
  _get(t, n, i) {
    const r = n.get(t);
    if (r === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return r;
  }
}
var Cn = new Qk();
class sf extends gn {
  update(t) {
    const n = this._cachedMeta,
      { data: i = [] } = n,
      r = this.chart._animationsDisabled;
    let { start: s, count: a } = ky(n, i, r);
    if (
      ((this._drawStart = s),
      (this._drawCount = a),
      Cy(n) && ((s = 0), (a = i.length)),
      this.options.showLine)
    ) {
      const { dataset: u, _dataset: c } = n;
      (u._chart = this.chart),
        (u._datasetIndex = this.index),
        (u._decimated = !!c._decimated),
        (u.points = i);
      const d = this.resolveDatasetElementOptions(t);
      (d.segment = this.options.segment),
        this.updateElement(u, void 0, { animated: !r, options: d }, t);
    }
    this.updateElements(i, s, a, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType &&
      t &&
      (this.datasetElementType = Cn.getElement("line")),
      super.addElements();
  }
  updateElements(t, n, i, r) {
    const s = r === "reset",
      { iScale: a, vScale: u, _stacked: c, _dataset: d } = this._cachedMeta,
      p = this.resolveDataElementOptions(n, r),
      g = this.getSharedOptions(p),
      m = this.includeOptions(r, g),
      v = a.axis,
      y = u.axis,
      { spanGaps: S, segment: M } = this.options,
      w = oo(S) ? S : Number.POSITIVE_INFINITY,
      b = this.chart._animationsDisabled || s || r === "none";
    let P = n > 0 && this.getParsed(n - 1);
    for (let C = n; C < n + i; ++C) {
      const E = t[C],
        R = this.getParsed(C),
        D = b ? E : {},
        N = Ct(R[y]),
        V = (D[v] = a.getPixelForValue(R[v], C)),
        Z = (D[y] =
          s || N
            ? u.getBasePixel()
            : u.getPixelForValue(c ? this.applyStack(u, R, c) : R[y], C));
      (D.skip = isNaN(V) || isNaN(Z) || N),
        (D.stop = C > 0 && Math.abs(R[v] - P[v]) > w),
        M && ((D.parsed = R), (D.raw = d.data[C])),
        m &&
          (D.options =
            g || this.resolveDataElementOptions(C, E.active ? "active" : r)),
        b || this.updateElement(E, C, D, r),
        (P = R);
    }
    this.updateSharedOptions(g, r, p);
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      n = t.data || [];
    if (!this.options.showLine) {
      let u = 0;
      for (let c = n.length - 1; c >= 0; --c)
        u = Math.max(u, n[c].size(this.resolveDataElementOptions(c)) / 2);
      return u > 0 && u;
    }
    const i = t.dataset,
      r = (i.options && i.options.borderWidth) || 0;
    if (!n.length) return r;
    const s = n[0].size(this.resolveDataElementOptions(0)),
      a = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(r, s, a) / 2;
  }
}
sf.id = "scatter";
sf.defaults = {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1,
};
sf.overrides = {
  interaction: { mode: "point" },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(e) {
          return "(" + e.label + ", " + e.formattedValue + ")";
        },
      },
    },
  },
  scales: { x: { type: "linear" }, y: { type: "linear" } },
};
function Zi() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class zh {
  constructor(t) {
    this.options = t || {};
  }
  init(t) {}
  formats() {
    return Zi();
  }
  parse(t, n) {
    return Zi();
  }
  format(t, n) {
    return Zi();
  }
  add(t, n, i) {
    return Zi();
  }
  diff(t, n, i) {
    return Zi();
  }
  startOf(t, n, i) {
    return Zi();
  }
  endOf(t, n) {
    return Zi();
  }
}
zh.override = function (e) {
  Object.assign(zh.prototype, e);
};
var qk = { _date: zh };
function Jk(e, t, n, i) {
  const { controller: r, data: s, _sorted: a } = e,
    u = r._cachedMeta.iScale;
  if (u && t === u.axis && t !== "r" && a && s.length) {
    const c = u._reversePixels ? FS : Ji;
    if (i) {
      if (r._sharedOptions) {
        const d = s[0],
          p = typeof d.getRange == "function" && d.getRange(t);
        if (p) {
          const g = c(s, t, n - p),
            m = c(s, t, n + p);
          return { lo: g.lo, hi: m.hi };
        }
      }
    } else return c(s, t, n);
  }
  return { lo: 0, hi: s.length - 1 };
}
function Xs(e, t, n, i, r) {
  const s = e.getSortedVisibleDatasetMetas(),
    a = n[t];
  for (let u = 0, c = s.length; u < c; ++u) {
    const { index: d, data: p } = s[u],
      { lo: g, hi: m } = Jk(s[u], t, a, r);
    for (let v = g; v <= m; ++v) {
      const y = p[v];
      y.skip || i(y, d, v);
    }
  }
}
function tC(e) {
  const t = e.indexOf("x") !== -1,
    n = e.indexOf("y") !== -1;
  return function (i, r) {
    const s = t ? Math.abs(i.x - r.x) : 0,
      a = n ? Math.abs(i.y - r.y) : 0;
    return Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2));
  };
}
function Tc(e, t, n, i, r) {
  const s = [];
  return (
    (!r && !e.isPointInArea(t)) ||
      Xs(
        e,
        n,
        t,
        function (u, c, d) {
          (!r && !zs(u, e.chartArea, 0)) ||
            (u.inRange(t.x, t.y, i) &&
              s.push({ element: u, datasetIndex: c, index: d }));
        },
        !0
      ),
    s
  );
}
function eC(e, t, n, i) {
  let r = [];
  function s(a, u, c) {
    const { startAngle: d, endAngle: p } = a.getProps(
        ["startAngle", "endAngle"],
        i
      ),
      { angle: g } = xy(a, { x: t.x, y: t.y });
    Rs(g, d, p) && r.push({ element: a, datasetIndex: u, index: c });
  }
  return Xs(e, n, t, s), r;
}
function nC(e, t, n, i, r, s) {
  let a = [];
  const u = tC(n);
  let c = Number.POSITIVE_INFINITY;
  function d(p, g, m) {
    const v = p.inRange(t.x, t.y, r);
    if (i && !v) return;
    const y = p.getCenterPoint(r);
    if (!(!!s || e.isPointInArea(y)) && !v) return;
    const M = u(t, y);
    M < c
      ? ((a = [{ element: p, datasetIndex: g, index: m }]), (c = M))
      : M === c && a.push({ element: p, datasetIndex: g, index: m });
  }
  return Xs(e, n, t, d), a;
}
function Oc(e, t, n, i, r, s) {
  return !s && !e.isPointInArea(t)
    ? []
    : n === "r" && !i
    ? eC(e, t, n, r)
    : nC(e, t, n, i, r, s);
}
function _g(e, t, n, i, r) {
  const s = [],
    a = n === "x" ? "inXRange" : "inYRange";
  let u = !1;
  return (
    Xs(e, n, t, (c, d, p) => {
      c[a](t[n], r) &&
        (s.push({ element: c, datasetIndex: d, index: p }),
        (u = u || c.inRange(t.x, t.y, r)));
    }),
    i && !u ? [] : s
  );
}
var iC = {
  evaluateInteractionItems: Xs,
  modes: {
    index(e, t, n, i) {
      const r = Yi(t, e),
        s = n.axis || "x",
        a = n.includeInvisible || !1,
        u = n.intersect ? Tc(e, r, s, i, a) : Oc(e, r, s, !1, i, a),
        c = [];
      return u.length
        ? (e.getSortedVisibleDatasetMetas().forEach((d) => {
            const p = u[0].index,
              g = d.data[p];
            g &&
              !g.skip &&
              c.push({ element: g, datasetIndex: d.index, index: p });
          }),
          c)
        : [];
    },
    dataset(e, t, n, i) {
      const r = Yi(t, e),
        s = n.axis || "xy",
        a = n.includeInvisible || !1;
      let u = n.intersect ? Tc(e, r, s, i, a) : Oc(e, r, s, !1, i, a);
      if (u.length > 0) {
        const c = u[0].datasetIndex,
          d = e.getDatasetMeta(c).data;
        u = [];
        for (let p = 0; p < d.length; ++p)
          u.push({ element: d[p], datasetIndex: c, index: p });
      }
      return u;
    },
    point(e, t, n, i) {
      const r = Yi(t, e),
        s = n.axis || "xy",
        a = n.includeInvisible || !1;
      return Tc(e, r, s, i, a);
    },
    nearest(e, t, n, i) {
      const r = Yi(t, e),
        s = n.axis || "xy",
        a = n.includeInvisible || !1;
      return Oc(e, r, s, n.intersect, i, a);
    },
    x(e, t, n, i) {
      const r = Yi(t, e);
      return _g(e, r, "x", n.intersect, i);
    },
    y(e, t, n, i) {
      const r = Yi(t, e);
      return _g(e, r, "y", n.intersect, i);
    },
  },
};
const Xy = ["left", "top", "right", "bottom"];
function Ho(e, t) {
  return e.filter((n) => n.pos === t);
}
function vg(e, t) {
  return e.filter((n) => Xy.indexOf(n.pos) === -1 && n.box.axis === t);
}
function Vo(e, t) {
  return e.sort((n, i) => {
    const r = t ? i : n,
      s = t ? n : i;
    return r.weight === s.weight ? r.index - s.index : r.weight - s.weight;
  });
}
function rC(e) {
  const t = [];
  let n, i, r, s, a, u;
  for (n = 0, i = (e || []).length; n < i; ++n)
    (r = e[n]),
      ({
        position: s,
        options: { stack: a, stackWeight: u = 1 },
      } = r),
      t.push({
        index: n,
        box: r,
        pos: s,
        horizontal: r.isHorizontal(),
        weight: r.weight,
        stack: a && s + a,
        stackWeight: u,
      });
  return t;
}
function oC(e) {
  const t = {};
  for (const n of e) {
    const { stack: i, pos: r, stackWeight: s } = n;
    if (!i || !Xy.includes(r)) continue;
    const a = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 });
    a.count++, (a.weight += s);
  }
  return t;
}
function sC(e, t) {
  const n = oC(e),
    { vBoxMaxWidth: i, hBoxMaxHeight: r } = t;
  let s, a, u;
  for (s = 0, a = e.length; s < a; ++s) {
    u = e[s];
    const { fullSize: c } = u.box,
      d = n[u.stack],
      p = d && u.stackWeight / d.weight;
    u.horizontal
      ? ((u.width = p ? p * i : c && t.availableWidth), (u.height = r))
      : ((u.width = i), (u.height = p ? p * r : c && t.availableHeight));
  }
  return n;
}
function aC(e) {
  const t = rC(e),
    n = Vo(
      t.filter((d) => d.box.fullSize),
      !0
    ),
    i = Vo(Ho(t, "left"), !0),
    r = Vo(Ho(t, "right")),
    s = Vo(Ho(t, "top"), !0),
    a = Vo(Ho(t, "bottom")),
    u = vg(t, "x"),
    c = vg(t, "y");
  return {
    fullSize: n,
    leftAndTop: i.concat(s),
    rightAndBottom: r.concat(c).concat(a).concat(u),
    chartArea: Ho(t, "chartArea"),
    vertical: i.concat(r).concat(c),
    horizontal: s.concat(a).concat(u),
  };
}
function yg(e, t, n, i) {
  return Math.max(e[n], t[n]) + Math.max(e[i], t[i]);
}
function Gy(e, t) {
  (e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right));
}
function lC(e, t, n, i) {
  const { pos: r, box: s } = n,
    a = e.maxPadding;
  if (!xt(r)) {
    n.size && (e[r] -= n.size);
    const g = i[n.stack] || { size: 0, count: 1 };
    (g.size = Math.max(g.size, n.horizontal ? s.height : s.width)),
      (n.size = g.size / g.count),
      (e[r] += n.size);
  }
  s.getPadding && Gy(a, s.getPadding());
  const u = Math.max(0, t.outerWidth - yg(a, e, "left", "right")),
    c = Math.max(0, t.outerHeight - yg(a, e, "top", "bottom")),
    d = u !== e.w,
    p = c !== e.h;
  return (
    (e.w = u),
    (e.h = c),
    n.horizontal ? { same: d, other: p } : { same: p, other: d }
  );
}
function uC(e) {
  const t = e.maxPadding;
  function n(i) {
    const r = Math.max(t[i] - e[i], 0);
    return (e[i] += r), r;
  }
  (e.y += n("top")), (e.x += n("left")), n("right"), n("bottom");
}
function cC(e, t) {
  const n = t.maxPadding;
  function i(r) {
    const s = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      r.forEach((a) => {
        s[a] = Math.max(t[a], n[a]);
      }),
      s
    );
  }
  return i(e ? ["left", "right"] : ["top", "bottom"]);
}
function Qo(e, t, n, i) {
  const r = [];
  let s, a, u, c, d, p;
  for (s = 0, a = e.length, d = 0; s < a; ++s) {
    (u = e[s]),
      (c = u.box),
      c.update(u.width || t.w, u.height || t.h, cC(u.horizontal, t));
    const { same: g, other: m } = lC(t, n, u, i);
    (d |= g && r.length), (p = p || m), c.fullSize || r.push(u);
  }
  return (d && Qo(r, t, n, i)) || p;
}
function $a(e, t, n, i, r) {
  (e.top = n),
    (e.left = t),
    (e.right = t + i),
    (e.bottom = n + r),
    (e.width = i),
    (e.height = r);
}
function xg(e, t, n, i) {
  const r = n.padding;
  let { x: s, y: a } = t;
  for (const u of e) {
    const c = u.box,
      d = i[u.stack] || { count: 1, placed: 0, weight: 1 },
      p = u.stackWeight / d.weight || 1;
    if (u.horizontal) {
      const g = t.w * p,
        m = d.size || c.height;
      en(d.start) && (a = d.start),
        c.fullSize
          ? $a(c, r.left, a, n.outerWidth - r.right - r.left, m)
          : $a(c, t.left + d.placed, a, g, m),
        (d.start = a),
        (d.placed += g),
        (a = c.bottom);
    } else {
      const g = t.h * p,
        m = d.size || c.width;
      en(d.start) && (s = d.start),
        c.fullSize
          ? $a(c, s, r.top, m, n.outerHeight - r.bottom - r.top)
          : $a(c, s, t.top + d.placed, m, g),
        (d.start = s),
        (d.placed += g),
        (s = c.right);
    }
  }
  (t.x = s), (t.y = a);
}
pt.set("layout", {
  autoPadding: !0,
  padding: { top: 0, right: 0, bottom: 0, left: 0 },
});
var Qe = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                t.draw(n);
              },
            },
          ];
        }),
      e.boxes.push(t);
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1;
    n !== -1 && e.boxes.splice(n, 1);
  },
  configure(e, t, n) {
    (t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight);
  },
  update(e, t, n, i) {
    if (!e) return;
    const r = be(e.options.layout.padding),
      s = Math.max(t - r.width, 0),
      a = Math.max(n - r.height, 0),
      u = aC(e.boxes),
      c = u.vertical,
      d = u.horizontal;
    Et(e.boxes, (S) => {
      typeof S.beforeLayout == "function" && S.beforeLayout();
    });
    const p =
        c.reduce(
          (S, M) => (M.box.options && M.box.options.display === !1 ? S : S + 1),
          0
        ) || 1,
      g = Object.freeze({
        outerWidth: t,
        outerHeight: n,
        padding: r,
        availableWidth: s,
        availableHeight: a,
        vBoxMaxWidth: s / 2 / p,
        hBoxMaxHeight: a / 2,
      }),
      m = Object.assign({}, r);
    Gy(m, be(i));
    const v = Object.assign(
        { maxPadding: m, w: s, h: a, x: r.left, y: r.top },
        r
      ),
      y = sC(c.concat(d), g);
    Qo(u.fullSize, v, g, y),
      Qo(c, v, g, y),
      Qo(d, v, g, y) && Qo(c, v, g, y),
      uC(v),
      xg(u.leftAndTop, v, g, y),
      (v.x += v.w),
      (v.y += v.h),
      xg(u.rightAndBottom, v, g, y),
      (e.chartArea = {
        left: v.left,
        top: v.top,
        right: v.left + v.w,
        bottom: v.top + v.h,
        height: v.h,
        width: v.w,
      }),
      Et(u.chartArea, (S) => {
        const M = S.box;
        Object.assign(M, e.chartArea),
          M.update(v.w, v.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Qy {
  acquireContext(t, n) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, i) {}
  removeEventListener(t, n, i) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, i, r) {
    return (
      (n = Math.max(0, n || t.width)),
      (i = i || t.height),
      { width: n, height: Math.max(0, r ? Math.floor(n / r) : i) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class hC extends Qy {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const ll = "$chartjs",
  dC = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  wg = (e) => e === null || e === "";
function fC(e, t) {
  const n = e.style,
    i = e.getAttribute("height"),
    r = e.getAttribute("width");
  if (
    ((e[ll] = {
      initial: {
        height: i,
        width: r,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || "block"),
    (n.boxSizing = n.boxSizing || "border-box"),
    wg(r))
  ) {
    const s = Jm(e, "width");
    s !== void 0 && (e.width = s);
  }
  if (wg(i))
    if (e.style.height === "") e.height = e.width / (t || 2);
    else {
      const s = Jm(e, "height");
      s !== void 0 && (e.height = s);
    }
  return e;
}
const qy = $P ? { passive: !0 } : !1;
function pC(e, t, n) {
  e.addEventListener(t, n, qy);
}
function mC(e, t, n) {
  e.canvas.removeEventListener(t, n, qy);
}
function gC(e, t) {
  const n = dC[e.type] || e.type,
    { x: i, y: r } = Yi(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: i !== void 0 ? i : null,
    y: r !== void 0 ? r : null,
  };
}
function jl(e, t) {
  for (const n of e) if (n === t || n.contains(t)) return !0;
}
function _C(e, t, n) {
  const i = e.canvas,
    r = new MutationObserver((s) => {
      let a = !1;
      for (const u of s)
        (a = a || jl(u.addedNodes, i)), (a = a && !jl(u.removedNodes, i));
      a && n();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
function vC(e, t, n) {
  const i = e.canvas,
    r = new MutationObserver((s) => {
      let a = !1;
      for (const u of s)
        (a = a || jl(u.removedNodes, i)), (a = a && !jl(u.addedNodes, i));
      a && n();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
const Is = new Map();
let bg = 0;
function Jy() {
  const e = window.devicePixelRatio;
  e !== bg &&
    ((bg = e),
    Is.forEach((t, n) => {
      n.currentDevicePixelRatio !== e && t();
    }));
}
function yC(e, t) {
  Is.size || window.addEventListener("resize", Jy), Is.set(e, t);
}
function xC(e) {
  Is.delete(e), Is.size || window.removeEventListener("resize", Jy);
}
function wC(e, t, n) {
  const i = e.canvas,
    r = i && tf(i);
  if (!r) return;
  const s = Py((u, c) => {
      const d = r.clientWidth;
      n(u, c), d < r.clientWidth && n();
    }, window),
    a = new ResizeObserver((u) => {
      const c = u[0],
        d = c.contentRect.width,
        p = c.contentRect.height;
      (d === 0 && p === 0) || s(d, p);
    });
  return a.observe(r), yC(e, s), a;
}
function Dc(e, t, n) {
  n && n.disconnect(), t === "resize" && xC(e);
}
function bC(e, t, n) {
  const i = e.canvas,
    r = Py(
      (s) => {
        e.ctx !== null && n(gC(s, e));
      },
      e,
      (s) => {
        const a = s[0];
        return [a, a.offsetX, a.offsetY];
      }
    );
  return pC(i, t, r), r;
}
class SC extends Qy {
  acquireContext(t, n) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (fC(t, n), i) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[ll]) return !1;
    const i = n[ll].initial;
    ["height", "width"].forEach((s) => {
      const a = i[s];
      Ct(a) ? n.removeAttribute(s) : n.setAttribute(s, a);
    });
    const r = i.style || {};
    return (
      Object.keys(r).forEach((s) => {
        n.style[s] = r[s];
      }),
      (n.width = n.width),
      delete n[ll],
      !0
    );
  }
  addEventListener(t, n, i) {
    this.removeEventListener(t, n);
    const r = t.$proxies || (t.$proxies = {}),
      a = { attach: _C, detach: vC, resize: wC }[n] || bC;
    r[n] = a(t, n, i);
  }
  removeEventListener(t, n) {
    const i = t.$proxies || (t.$proxies = {}),
      r = i[n];
    if (!r) return;
    (({ attach: Dc, detach: Dc, resize: Dc }[n] || mC)(t, n, r),
      (i[n] = void 0));
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, i, r) {
    return UP(t, n, i, r);
  }
  isAttached(t) {
    const n = tf(t);
    return !!(n && n.isConnected);
  }
}
function PC(e) {
  return !jy() || (typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
    ? hC
    : SC;
}
class kC {
  constructor() {
    this._init = [];
  }
  notify(t, n, i, r) {
    n === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const s = r ? this._descriptors(t).filter(r) : this._descriptors(t),
      a = this._notify(s, t, n, i);
    return (
      n === "afterDestroy" &&
        (this._notify(s, t, "stop"), this._notify(this._init, t, "uninstall")),
      a
    );
  }
  _notify(t, n, i, r) {
    r = r || {};
    for (const s of t) {
      const a = s.plugin,
        u = a[i],
        c = [n, r, s.options];
      if (At(u, c, a) === !1 && r.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    Ct(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const n = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const i = t && t.config,
      r = ht(i.options && i.options.plugins, {}),
      s = CC(i);
    return r === !1 && !n ? [] : MC(t, s, r, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [],
      i = this._cache,
      r = (s, a) =>
        s.filter((u) => !a.some((c) => u.plugin.id === c.plugin.id));
    this._notify(r(n, i), t, "stop"), this._notify(r(i, n), t, "start");
  }
}
function CC(e) {
  const t = {},
    n = [],
    i = Object.keys(Cn.plugins.items);
  for (let s = 0; s < i.length; s++) n.push(Cn.getPlugin(i[s]));
  const r = e.plugins || [];
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    n.indexOf(a) === -1 && (n.push(a), (t[a.id] = !0));
  }
  return { plugins: n, localIds: t };
}
function LC(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function MC(e, { plugins: t, localIds: n }, i, r) {
  const s = [],
    a = e.getContext();
  for (const u of t) {
    const c = u.id,
      d = LC(i[c], r);
    d !== null &&
      s.push({
        plugin: u,
        options: EC(e.config, { plugin: u, local: n[c] }, d, a),
      });
  }
  return s;
}
function EC(e, { plugin: t, local: n }, i, r) {
  const s = e.pluginScopeKeys(t),
    a = e.getOptionScopes(i, s);
  return (
    n && t.defaults && a.push(t.defaults),
    e.createResolver(a, r, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Ah(e, t) {
  const n = pt.datasets[e] || {};
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x"
  );
}
function TC(e, t) {
  let n = e;
  return (
    e === "_index_" ? (n = t) : e === "_value_" && (n = t === "x" ? "y" : "x"),
    n
  );
}
function OC(e, t) {
  return e === t ? "_index_" : "_value_";
}
function DC(e) {
  if (e === "top" || e === "bottom") return "x";
  if (e === "left" || e === "right") return "y";
}
function Ih(e, t) {
  return e === "x" || e === "y"
    ? e
    : t.axis || DC(t.position) || e.charAt(0).toLowerCase();
}
function RC(e, t) {
  const n = cr[e.type] || { scales: {} },
    i = t.scales || {},
    r = Ah(e.type, t),
    s = Object.create(null),
    a = Object.create(null);
  return (
    Object.keys(i).forEach((u) => {
      const c = i[u];
      if (!xt(c))
        return console.error(`Invalid scale configuration for scale: ${u}`);
      if (c._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${u}`
        );
      const d = Ih(u, c),
        p = OC(d, r),
        g = n.scales || {};
      (s[d] = s[d] || u),
        (a[u] = ls(Object.create(null), [{ axis: d }, c, g[d], g[p]]));
    }),
    e.data.datasets.forEach((u) => {
      const c = u.type || e.type,
        d = u.indexAxis || Ah(c, t),
        g = (cr[c] || {}).scales || {};
      Object.keys(g).forEach((m) => {
        const v = TC(m, d),
          y = u[v + "AxisID"] || s[v] || v;
        (a[y] = a[y] || Object.create(null)),
          ls(a[y], [{ axis: v }, i[y], g[m]]);
      });
    }),
    Object.keys(a).forEach((u) => {
      const c = a[u];
      ls(c, [pt.scales[c.type], pt.scale]);
    }),
    a
  );
}
function t0(e) {
  const t = e.options || (e.options = {});
  (t.plugins = ht(t.plugins, {})), (t.scales = RC(e, t));
}
function e0(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  );
}
function zC(e) {
  return (e = e || {}), (e.data = e0(e.data)), t0(e), e;
}
const Sg = new Map(),
  n0 = new Set();
function Ya(e, t) {
  let n = Sg.get(e);
  return n || ((n = t()), Sg.set(e, n), n0.add(n)), n;
}
const Zo = (e, t, n) => {
  const i = Li(t, n);
  i !== void 0 && e.add(i);
};
class AC {
  constructor(t) {
    (this._config = zC(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = e0(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), t0(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Ya(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, n) {
    return Ya(`${t}.transition.${n}`, () => [
      [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, n) {
    return Ya(`${t}-${n}`, () => [
      [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id,
      i = this.type;
    return Ya(`${i}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, n) {
    const i = this._scopeCache;
    let r = i.get(t);
    return (!r || n) && ((r = new Map()), i.set(t, r)), r;
  }
  getOptionScopes(t, n, i) {
    const { options: r, type: s } = this,
      a = this._cachedScopes(t, i),
      u = a.get(n);
    if (u) return u;
    const c = new Set();
    n.forEach((p) => {
      t && (c.add(t), p.forEach((g) => Zo(c, t, g))),
        p.forEach((g) => Zo(c, r, g)),
        p.forEach((g) => Zo(c, cr[s] || {}, g)),
        p.forEach((g) => Zo(c, pt, g)),
        p.forEach((g) => Zo(c, Dh, g));
    });
    const d = Array.from(c);
    return (
      d.length === 0 && d.push(Object.create(null)), n0.has(n) && a.set(n, d), d
    );
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [t, cr[n] || {}, pt.datasets[n] || {}, { type: n }, pt, Dh];
  }
  resolveNamedOptions(t, n, i, r = [""]) {
    const s = { $shared: !0 },
      { resolver: a, subPrefixes: u } = Pg(this._resolverCache, t, r);
    let c = a;
    if (NC(a, n)) {
      (s.$shared = !1), (i = Mi(i) ? i() : i);
      const d = this.createResolver(t, i, u);
      c = so(a, i, d);
    }
    for (const d of n) s[d] = c[d];
    return s;
  }
  createResolver(t, n, i = [""], r) {
    const { resolver: s } = Pg(this._resolverCache, t, i);
    return xt(n) ? so(s, n, void 0, r) : s;
  }
}
function Pg(e, t, n) {
  let i = e.get(t);
  i || ((i = new Map()), e.set(t, i));
  const r = n.join();
  let s = i.get(r);
  return (
    s ||
      ((s = {
        resolver: Qd(t, n),
        subPrefixes: n.filter((u) => !u.toLowerCase().includes("hover")),
      }),
      i.set(r, s)),
    s
  );
}
const IC = (e) =>
  xt(e) && Object.getOwnPropertyNames(e).reduce((t, n) => t || Mi(e[n]), !1);
function NC(e, t) {
  const { isScriptable: n, isIndexable: i } = zy(e);
  for (const r of t) {
    const s = n(r),
      a = i(r),
      u = (a || s) && e[r];
    if ((s && (Mi(u) || IC(u))) || (a && Bt(u))) return !0;
  }
  return !1;
}
var BC = "3.9.1";
const FC = ["top", "bottom", "left", "right", "chartArea"];
function kg(e, t) {
  return e === "top" || e === "bottom" || (FC.indexOf(e) === -1 && t === "x");
}
function Cg(e, t) {
  return function (n, i) {
    return n[e] === i[e] ? n[t] - i[t] : n[e] - i[e];
  };
}
function Lg(e) {
  const t = e.chart,
    n = t.options.animation;
  t.notifyPlugins("afterRender"), At(n && n.onComplete, [e], t);
}
function jC(e) {
  const t = e.chart,
    n = t.options.animation;
  At(n && n.onProgress, [e], t);
}
function i0(e) {
  return (
    jy() && typeof e == "string"
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  );
}
const Wl = {},
  r0 = (e) => {
    const t = i0(e);
    return Object.values(Wl)
      .filter((n) => n.canvas === t)
      .pop();
  };
function WC(e, t, n) {
  const i = Object.keys(e);
  for (const r of i) {
    const s = +r;
    if (s >= t) {
      const a = e[r];
      delete e[r], (n > 0 || s > t) && (e[s + n] = a);
    }
  }
}
function HC(e, t, n, i) {
  return !n || e.type === "mouseout" ? null : i ? t : e;
}
class Gs {
  constructor(t, n) {
    const i = (this.config = new AC(n)),
      r = i0(t),
      s = r0(r);
    if (s)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          s.id +
          "' must be destroyed before the canvas with ID '" +
          s.canvas.id +
          "' can be reused."
      );
    const a = i.createResolver(i.chartOptionScopes(), this.getContext());
    (this.platform = new (i.platform || PC(r))()),
      this.platform.updateConfig(i);
    const u = this.platform.acquireContext(r, a.aspectRatio),
      c = u && u.canvas,
      d = c && c.height,
      p = c && c.width;
    if (
      ((this.id = CS()),
      (this.ctx = u),
      (this.canvas = c),
      (this.width = p),
      (this.height = d),
      (this._options = a),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new kC()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = HS((g) => this.update(g), a.resizeDelay || 0)),
      (this._dataChanges = []),
      (Wl[this.id] = this),
      !u || !c)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item"
      );
      return;
    }
    Bn.listen(this, "complete", Lg),
      Bn.listen(this, "progress", jC),
      this._initialize(),
      this.attached && this.update();
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: n },
      width: i,
      height: r,
      _aspectRatio: s,
    } = this;
    return Ct(t) ? (n && s ? s : r ? i / r : null) : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  _initialize() {
    return (
      this.notifyPlugins("beforeInit"),
      this.options.responsive
        ? this.resize()
        : qm(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins("afterInit"),
      this
    );
  }
  clear() {
    return Xm(this.canvas, this.ctx), this;
  }
  stop() {
    return Bn.stop(this), this;
  }
  resize(t, n) {
    Bn.running(this)
      ? (this._resizeBeforeDraw = { width: t, height: n })
      : this._resize(t, n);
  }
  _resize(t, n) {
    const i = this.options,
      r = this.canvas,
      s = i.maintainAspectRatio && this.aspectRatio,
      a = this.platform.getMaximumSize(r, t, n, s),
      u = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
      c = this.width ? "resize" : "attach";
    (this.width = a.width),
      (this.height = a.height),
      (this._aspectRatio = this.aspectRatio),
      qm(this, u, !0) &&
        (this.notifyPlugins("resize", { size: a }),
        At(i.onResize, [this, a], this),
        this.attached && this._doResize(c) && this.render());
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {};
    Et(n, (i, r) => {
      i.id = r;
    });
  }
  buildOrUpdateScales() {
    const t = this.options,
      n = t.scales,
      i = this.scales,
      r = Object.keys(i).reduce((a, u) => ((a[u] = !1), a), {});
    let s = [];
    n &&
      (s = s.concat(
        Object.keys(n).map((a) => {
          const u = n[a],
            c = Ih(a, u),
            d = c === "r",
            p = c === "x";
          return {
            options: u,
            dposition: d ? "chartArea" : p ? "bottom" : "left",
            dtype: d ? "radialLinear" : p ? "category" : "linear",
          };
        })
      )),
      Et(s, (a) => {
        const u = a.options,
          c = u.id,
          d = Ih(c, u),
          p = ht(u.type, a.dtype);
        (u.position === void 0 || kg(u.position, d) !== kg(a.dposition)) &&
          (u.position = a.dposition),
          (r[c] = !0);
        let g = null;
        if (c in i && i[c].type === p) g = i[c];
        else {
          const m = Cn.getScale(p);
          (g = new m({ id: c, type: p, ctx: this.ctx, chart: this })),
            (i[g.id] = g);
        }
        g.init(u, t);
      }),
      Et(r, (a, u) => {
        a || delete i[u];
      }),
      Et(i, (a) => {
        Qe.configure(this, a, a.options), Qe.addBox(this, a);
      });
  }
  _updateMetasets() {
    const t = this._metasets,
      n = this.data.datasets.length,
      i = t.length;
    if ((t.sort((r, s) => r.index - s.index), i > n)) {
      for (let r = n; r < i; ++r) this._destroyDatasetMeta(r);
      t.splice(n, i - n);
    }
    this._sortedMetasets = t.slice(0).sort(Cg("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: { datasets: n },
    } = this;
    t.length > n.length && delete this._stacks,
      t.forEach((i, r) => {
        n.filter((s) => s === i._dataset).length === 0 &&
          this._destroyDatasetMeta(r);
      });
  }
  buildOrUpdateControllers() {
    const t = [],
      n = this.data.datasets;
    let i, r;
    for (this._removeUnreferencedMetasets(), i = 0, r = n.length; i < r; i++) {
      const s = n[i];
      let a = this.getDatasetMeta(i);
      const u = s.type || this.config.type;
      if (
        (a.type &&
          a.type !== u &&
          (this._destroyDatasetMeta(i), (a = this.getDatasetMeta(i))),
        (a.type = u),
        (a.indexAxis = s.indexAxis || Ah(u, this.options)),
        (a.order = s.order || 0),
        (a.index = i),
        (a.label = "" + s.label),
        (a.visible = this.isDatasetVisible(i)),
        a.controller)
      )
        a.controller.updateIndex(i), a.controller.linkScales();
      else {
        const c = Cn.getController(u),
          { datasetElementType: d, dataElementType: p } = pt.datasets[u];
        Object.assign(c.prototype, {
          dataElementType: Cn.getElement(p),
          datasetElementType: d && Cn.getElement(d),
        }),
          (a.controller = new c(this, i)),
          t.push(a.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    Et(
      this.data.datasets,
      (t, n) => {
        this.getDatasetMeta(n).controller.reset();
      },
      this
    );
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const n = this.config;
    n.update();
    const i = (this._options = n.createResolver(
        n.chartOptionScopes(),
        this.getContext()
      )),
      r = (this._animationsDisabled = !i.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
    )
      return;
    const s = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let a = 0;
    for (let d = 0, p = this.data.datasets.length; d < p; d++) {
      const { controller: g } = this.getDatasetMeta(d),
        m = !r && s.indexOf(g) === -1;
      g.buildOrUpdateElements(m), (a = Math.max(+g.getMaxOverflow(), a));
    }
    (a = this._minPadding = i.layout.autoPadding ? a : 0),
      this._updateLayout(a),
      r ||
        Et(s, (d) => {
          d.reset();
        }),
      this._updateDatasets(t),
      this.notifyPlugins("afterUpdate", { mode: t }),
      this._layers.sort(Cg("z", "_idx"));
    const { _active: u, _lastEvent: c } = this;
    c
      ? this._eventHandler(c, !0)
      : u.length && this._updateHoverStyles(u, u, !0),
      this.render();
  }
  _updateScales() {
    Et(this.scales, (t) => {
      Qe.removeBox(this, t);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options,
      n = new Set(Object.keys(this._listeners)),
      i = new Set(t.events);
    (!Nm(n, i) || !!this._responsiveListeners !== t.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      n = this._getUniformDataChanges() || [];
    for (const { method: i, start: r, count: s } of n) {
      const a = i === "_removeElements" ? -s : s;
      WC(t, r, a);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length) return;
    this._dataChanges = [];
    const n = this.data.datasets.length,
      i = (s) =>
        new Set(
          t
            .filter((a) => a[0] === s)
            .map((a, u) => u + "," + a.splice(1).join(","))
        ),
      r = i(0);
    for (let s = 1; s < n; s++) if (!Nm(r, i(s))) return;
    return Array.from(r)
      .map((s) => s.split(","))
      .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
    Qe.update(this, this.width, this.height, t);
    const n = this.chartArea,
      i = n.width <= 0 || n.height <= 0;
    (this._layers = []),
      Et(
        this.boxes,
        (r) => {
          (i && r.position === "chartArea") ||
            (r.configure && r.configure(), this._layers.push(...r._layers()));
        },
        this
      ),
      this._layers.forEach((r, s) => {
        r._idx = s;
      }),
      this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (
      this.notifyPlugins("beforeDatasetsUpdate", {
        mode: t,
        cancelable: !0,
      }) !== !1
    ) {
      for (let n = 0, i = this.data.datasets.length; n < i; ++n)
        this.getDatasetMeta(n).controller.configure();
      for (let n = 0, i = this.data.datasets.length; n < i; ++n)
        this._updateDataset(n, Mi(t) ? t({ datasetIndex: n }) : t);
      this.notifyPlugins("afterDatasetsUpdate", { mode: t });
    }
  }
  _updateDataset(t, n) {
    const i = this.getDatasetMeta(t),
      r = { meta: i, index: t, mode: n, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", r) !== !1 &&
      (i.controller._update(n),
      (r.cancelable = !1),
      this.notifyPlugins("afterDatasetUpdate", r));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
      (Bn.has(this)
        ? this.attached && !Bn.running(this) && Bn.start(this)
        : (this.draw(), Lg({ chart: this })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: i, height: r } = this._resizeBeforeDraw;
      this._resize(i, r), (this._resizeBeforeDraw = null);
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
    )
      return;
    const n = this._layers;
    for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea);
    for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const n = this._sortedMetasets,
      i = [];
    let r, s;
    for (r = 0, s = n.length; r < s; ++r) {
      const a = n[r];
      (!t || a.visible) && i.push(a);
    }
    return i;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const n = this.ctx,
      i = t._clip,
      r = !i.disabled,
      s = this.chartArea,
      a = { meta: t, index: t.index, cancelable: !0 };
    this.notifyPlugins("beforeDatasetDraw", a) !== !1 &&
      (r &&
        Kd(n, {
          left: i.left === !1 ? 0 : s.left - i.left,
          right: i.right === !1 ? this.width : s.right + i.right,
          top: i.top === !1 ? 0 : s.top - i.top,
          bottom: i.bottom === !1 ? this.height : s.bottom + i.bottom,
        }),
      t.controller.draw(),
      r && Xd(n),
      (a.cancelable = !1),
      this.notifyPlugins("afterDatasetDraw", a));
  }
  isPointInArea(t) {
    return zs(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, n, i, r) {
    const s = iC.modes[n];
    return typeof s == "function" ? s(this, t, i, r) : [];
  }
  getDatasetMeta(t) {
    const n = this.data.datasets[t],
      i = this._metasets;
    let r = i.filter((s) => s && s._dataset === n).pop();
    return (
      r ||
        ((r = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (n && n.order) || 0,
          index: t,
          _dataset: n,
          _parsed: [],
          _sorted: !1,
        }),
        i.push(r)),
      r
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = Ri(null, { chart: this, type: "chart" }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const n = this.data.datasets[t];
    if (!n) return !1;
    const i = this.getDatasetMeta(t);
    return typeof i.hidden == "boolean" ? !i.hidden : !n.hidden;
  }
  setDatasetVisibility(t, n) {
    const i = this.getDatasetMeta(t);
    i.hidden = !n;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, n, i) {
    const r = i ? "show" : "hide",
      s = this.getDatasetMeta(t),
      a = s.controller._resolveAnimations(void 0, r);
    en(n)
      ? ((s.data[n].hidden = !i), this.update())
      : (this.setDatasetVisibility(t, i),
        a.update(s, { visible: i }),
        this.update((u) => (u.datasetIndex === t ? r : void 0)));
  }
  hide(t, n) {
    this._updateVisibility(t, n, !1);
  }
  show(t, n) {
    this._updateVisibility(t, n, !0);
  }
  _destroyDatasetMeta(t) {
    const n = this._metasets[t];
    n && n.controller && n.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, n;
    for (
      this.stop(), Bn.remove(this), t = 0, n = this.data.datasets.length;
      t < n;
      ++t
    )
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: n } = this;
    this._stop(),
      this.config.clearCache(),
      t &&
        (this.unbindEvents(),
        Xm(t, n),
        this.platform.releaseContext(n),
        (this.canvas = null),
        (this.ctx = null)),
      this.notifyPlugins("destroy"),
      delete Wl[this.id],
      this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0);
  }
  bindUserEvents() {
    const t = this._listeners,
      n = this.platform,
      i = (s, a) => {
        n.addEventListener(this, s, a), (t[s] = a);
      },
      r = (s, a, u) => {
        (s.offsetX = a), (s.offsetY = u), this._eventHandler(s);
      };
    Et(this.options.events, (s) => i(s, r));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners,
      n = this.platform,
      i = (c, d) => {
        n.addEventListener(this, c, d), (t[c] = d);
      },
      r = (c, d) => {
        t[c] && (n.removeEventListener(this, c, d), delete t[c]);
      },
      s = (c, d) => {
        this.canvas && this.resize(c, d);
      };
    let a;
    const u = () => {
      r("attach", u),
        (this.attached = !0),
        this.resize(),
        i("resize", s),
        i("detach", a);
    };
    (a = () => {
      (this.attached = !1),
        r("resize", s),
        this._stop(),
        this._resize(0, 0),
        i("attach", u);
    }),
      n.isAttached(this.canvas) ? u() : a();
  }
  unbindEvents() {
    Et(this._listeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }),
      (this._listeners = {}),
      Et(this._responsiveListeners, (t, n) => {
        this.platform.removeEventListener(this, n, t);
      }),
      (this._responsiveListeners = void 0);
  }
  updateHoverStyle(t, n, i) {
    const r = i ? "set" : "remove";
    let s, a, u, c;
    for (
      n === "dataset" &&
        ((s = this.getDatasetMeta(t[0].datasetIndex)),
        s.controller["_" + r + "DatasetHoverStyle"]()),
        u = 0,
        c = t.length;
      u < c;
      ++u
    ) {
      a = t[u];
      const d = a && this.getDatasetMeta(a.datasetIndex).controller;
      d && d[r + "HoverStyle"](a.element, a.datasetIndex, a.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const n = this._active || [],
      i = t.map(({ datasetIndex: s, index: a }) => {
        const u = this.getDatasetMeta(s);
        if (!u) throw new Error("No dataset found at index " + s);
        return { datasetIndex: s, element: u.data[a], index: a };
      });
    !zl(i, n) &&
      ((this._active = i),
      (this._lastEvent = null),
      this._updateHoverStyles(i, n));
  }
  notifyPlugins(t, n, i) {
    return this._plugins.notify(this, t, n, i);
  }
  _updateHoverStyles(t, n, i) {
    const r = this.options.hover,
      s = (c, d) =>
        c.filter(
          (p) =>
            !d.some(
              (g) => p.datasetIndex === g.datasetIndex && p.index === g.index
            )
        ),
      a = s(n, t),
      u = i ? t : s(t, n);
    a.length && this.updateHoverStyle(a, r.mode, !1),
      u.length && r.mode && this.updateHoverStyle(u, r.mode, !0);
  }
  _eventHandler(t, n) {
    const i = {
        event: t,
        replay: n,
        cancelable: !0,
        inChartArea: this.isPointInArea(t),
      },
      r = (a) =>
        (a.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", i, r) === !1) return;
    const s = this._handleEvent(t, n, i.inChartArea);
    return (
      (i.cancelable = !1),
      this.notifyPlugins("afterEvent", i, r),
      (s || i.changed) && this.render(),
      this
    );
  }
  _handleEvent(t, n, i) {
    const { _active: r = [], options: s } = this,
      a = n,
      u = this._getActiveElements(t, r, i, a),
      c = DS(t),
      d = HC(t, this._lastEvent, i, c);
    i &&
      ((this._lastEvent = null),
      At(s.onHover, [t, u, this], this),
      c && At(s.onClick, [t, u, this], this));
    const p = !zl(u, r);
    return (
      (p || n) && ((this._active = u), this._updateHoverStyles(u, r, n)),
      (this._lastEvent = d),
      p
    );
  }
  _getActiveElements(t, n, i, r) {
    if (t.type === "mouseout") return [];
    if (!i) return n;
    const s = this.options.hover;
    return this.getElementsAtEventForMode(t, s.mode, s, r);
  }
}
const Mg = () => Et(Gs.instances, (e) => e._plugins.invalidate()),
  si = !0;
Object.defineProperties(Gs, {
  defaults: { enumerable: si, value: pt },
  instances: { enumerable: si, value: Wl },
  overrides: { enumerable: si, value: cr },
  registry: { enumerable: si, value: Cn },
  version: { enumerable: si, value: BC },
  getChart: { enumerable: si, value: r0 },
  register: {
    enumerable: si,
    value: (...e) => {
      Cn.add(...e), Mg();
    },
  },
  unregister: {
    enumerable: si,
    value: (...e) => {
      Cn.remove(...e), Mg();
    },
  },
});
function o0(e, t, n) {
  const {
    startAngle: i,
    pixelMargin: r,
    x: s,
    y: a,
    outerRadius: u,
    innerRadius: c,
  } = t;
  let d = r / u;
  e.beginPath(),
    e.arc(s, a, u, i - d, n + d),
    c > r
      ? ((d = r / c), e.arc(s, a, c, n + d, i - d, !0))
      : e.arc(s, a, r, n + Kt, i - Kt),
    e.closePath(),
    e.clip();
}
function VC(e) {
  return Gd(e, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function ZC(e, t, n, i) {
  const r = VC(e.options.borderRadius),
    s = (n - t) / 2,
    a = Math.min(s, (i * t) / 2),
    u = (c) => {
      const d = ((n - Math.min(s, c)) * i) / 2;
      return xe(c, 0, Math.min(s, d));
    };
  return {
    outerStart: u(r.outerStart),
    outerEnd: u(r.outerEnd),
    innerStart: xe(r.innerStart, 0, a),
    innerEnd: xe(r.innerEnd, 0, a),
  };
}
function Tr(e, t, n, i) {
  return { x: n + e * Math.cos(t), y: i + e * Math.sin(t) };
}
function Nh(e, t, n, i, r, s) {
  const { x: a, y: u, startAngle: c, pixelMargin: d, innerRadius: p } = t,
    g = Math.max(t.outerRadius + i + n - d, 0),
    m = p > 0 ? p + i + n + d : 0;
  let v = 0;
  const y = r - c;
  if (i) {
    const q = p > 0 ? p - i : 0,
      ut = g > 0 ? g - i : 0,
      _t = (q + ut) / 2,
      z = _t !== 0 ? (y * _t) / (_t + i) : y;
    v = (y - z) / 2;
  }
  const S = Math.max(0.001, y * g - n / Wt) / g,
    M = (y - S) / 2,
    w = c + M + v,
    b = r - M - v,
    {
      outerStart: P,
      outerEnd: C,
      innerStart: E,
      innerEnd: R,
    } = ZC(t, m, g, b - w),
    D = g - P,
    N = g - C,
    V = w + P / D,
    Z = b - C / N,
    K = m + E,
    X = m + R,
    Pt = w + E / K,
    rt = b - R / X;
  if ((e.beginPath(), s)) {
    if ((e.arc(a, u, g, V, Z), C > 0)) {
      const _t = Tr(N, Z, a, u);
      e.arc(_t.x, _t.y, C, Z, b + Kt);
    }
    const q = Tr(X, b, a, u);
    if ((e.lineTo(q.x, q.y), R > 0)) {
      const _t = Tr(X, rt, a, u);
      e.arc(_t.x, _t.y, R, b + Kt, rt + Math.PI);
    }
    if ((e.arc(a, u, m, b - R / m, w + E / m, !0), E > 0)) {
      const _t = Tr(K, Pt, a, u);
      e.arc(_t.x, _t.y, E, Pt + Math.PI, w - Kt);
    }
    const ut = Tr(D, w, a, u);
    if ((e.lineTo(ut.x, ut.y), P > 0)) {
      const _t = Tr(D, V, a, u);
      e.arc(_t.x, _t.y, P, w - Kt, V);
    }
  } else {
    e.moveTo(a, u);
    const q = Math.cos(V) * g + a,
      ut = Math.sin(V) * g + u;
    e.lineTo(q, ut);
    const _t = Math.cos(Z) * g + a,
      z = Math.sin(Z) * g + u;
    e.lineTo(_t, z);
  }
  e.closePath();
}
function UC(e, t, n, i, r) {
  const { fullCircles: s, startAngle: a, circumference: u } = t;
  let c = t.endAngle;
  if (s) {
    Nh(e, t, n, i, a + Rt, r);
    for (let d = 0; d < s; ++d) e.fill();
    isNaN(u) || ((c = a + (u % Rt)), u % Rt === 0 && (c += Rt));
  }
  return Nh(e, t, n, i, c, r), e.fill(), c;
}
function $C(e, t, n) {
  const { x: i, y: r, startAngle: s, pixelMargin: a, fullCircles: u } = t,
    c = Math.max(t.outerRadius - a, 0),
    d = t.innerRadius + a;
  let p;
  for (
    n && o0(e, t, s + Rt), e.beginPath(), e.arc(i, r, d, s + Rt, s, !0), p = 0;
    p < u;
    ++p
  )
    e.stroke();
  for (e.beginPath(), e.arc(i, r, c, s, s + Rt), p = 0; p < u; ++p) e.stroke();
}
function YC(e, t, n, i, r, s) {
  const { options: a } = t,
    { borderWidth: u, borderJoinStyle: c } = a,
    d = a.borderAlign === "inner";
  !u ||
    (d
      ? ((e.lineWidth = u * 2), (e.lineJoin = c || "round"))
      : ((e.lineWidth = u), (e.lineJoin = c || "bevel")),
    t.fullCircles && $C(e, t, d),
    d && o0(e, t, r),
    Nh(e, t, n, i, r, s),
    e.stroke());
}
class af extends _n {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      t && Object.assign(this, t);
  }
  inRange(t, n, i) {
    const r = this.getProps(["x", "y"], i),
      { angle: s, distance: a } = xy(r, { x: t, y: n }),
      {
        startAngle: u,
        endAngle: c,
        innerRadius: d,
        outerRadius: p,
        circumference: g,
      } = this.getProps(
        [
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        i
      ),
      m = this.options.spacing / 2,
      y = ht(g, c - u) >= Rt || Rs(s, u, c),
      S = fi(a, d + m, p + m);
    return y && S;
  }
  getCenterPoint(t) {
    const {
        x: n,
        y: i,
        startAngle: r,
        endAngle: s,
        innerRadius: a,
        outerRadius: u,
      } = this.getProps(
        [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        t
      ),
      { offset: c, spacing: d } = this.options,
      p = (r + s) / 2,
      g = (a + u + d + c) / 2;
    return { x: n + Math.cos(p) * g, y: i + Math.sin(p) * g };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: n, circumference: i } = this,
      r = (n.offset || 0) / 2,
      s = (n.spacing || 0) / 2,
      a = n.circular;
    if (
      ((this.pixelMargin = n.borderAlign === "inner" ? 0.33 : 0),
      (this.fullCircles = i > Rt ? Math.floor(i / Rt) : 0),
      i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    t.save();
    let u = 0;
    if (r) {
      u = r / 2;
      const d = (this.startAngle + this.endAngle) / 2;
      t.translate(Math.cos(d) * u, Math.sin(d) * u),
        this.circumference >= Wt && (u = r);
    }
    (t.fillStyle = n.backgroundColor), (t.strokeStyle = n.borderColor);
    const c = UC(t, this, u, s, a);
    YC(t, this, u, s, c, a), t.restore();
  }
}
af.id = "arc";
af.defaults = {
  borderAlign: "center",
  borderColor: "#fff",
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0,
};
af.defaultRoutes = { backgroundColor: "backgroundColor" };
function s0(e, t, n = t) {
  (e.lineCap = ht(n.borderCapStyle, t.borderCapStyle)),
    e.setLineDash(ht(n.borderDash, t.borderDash)),
    (e.lineDashOffset = ht(n.borderDashOffset, t.borderDashOffset)),
    (e.lineJoin = ht(n.borderJoinStyle, t.borderJoinStyle)),
    (e.lineWidth = ht(n.borderWidth, t.borderWidth)),
    (e.strokeStyle = ht(n.borderColor, t.borderColor));
}
function KC(e, t, n) {
  e.lineTo(n.x, n.y);
}
function XC(e) {
  return e.stepped
    ? mP
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? gP
    : KC;
}
function a0(e, t, n = {}) {
  const i = e.length,
    { start: r = 0, end: s = i - 1 } = n,
    { start: a, end: u } = t,
    c = Math.max(r, a),
    d = Math.min(s, u),
    p = (r < a && s < a) || (r > u && s > u);
  return {
    count: i,
    start: c,
    loop: t.loop,
    ilen: d < c && !p ? i + d - c : d - c,
  };
}
function GC(e, t, n, i) {
  const { points: r, options: s } = t,
    { count: a, start: u, loop: c, ilen: d } = a0(r, n, i),
    p = XC(s);
  let { move: g = !0, reverse: m } = i || {},
    v,
    y,
    S;
  for (v = 0; v <= d; ++v)
    (y = r[(u + (m ? d - v : v)) % a]),
      !y.skip &&
        (g ? (e.moveTo(y.x, y.y), (g = !1)) : p(e, S, y, m, s.stepped),
        (S = y));
  return c && ((y = r[(u + (m ? d : 0)) % a]), p(e, S, y, m, s.stepped)), !!c;
}
function QC(e, t, n, i) {
  const r = t.points,
    { count: s, start: a, ilen: u } = a0(r, n, i),
    { move: c = !0, reverse: d } = i || {};
  let p = 0,
    g = 0,
    m,
    v,
    y,
    S,
    M,
    w;
  const b = (C) => (a + (d ? u - C : C)) % s,
    P = () => {
      S !== M && (e.lineTo(p, M), e.lineTo(p, S), e.lineTo(p, w));
    };
  for (c && ((v = r[b(0)]), e.moveTo(v.x, v.y)), m = 0; m <= u; ++m) {
    if (((v = r[b(m)]), v.skip)) continue;
    const C = v.x,
      E = v.y,
      R = C | 0;
    R === y
      ? (E < S ? (S = E) : E > M && (M = E), (p = (g * p + C) / ++g))
      : (P(), e.lineTo(C, E), (y = R), (g = 0), (S = M = E)),
      (w = E);
  }
  P();
}
function Bh(e) {
  const t = e.options,
    n = t.borderDash && t.borderDash.length;
  return !e._decimated &&
    !e._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== "monotone" &&
    !t.stepped &&
    !n
    ? QC
    : GC;
}
function qC(e) {
  return e.stepped
    ? YP
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? KP
    : Ki;
}
function JC(e, t, n, i) {
  let r = t._path;
  r || ((r = t._path = new Path2D()), t.path(r, n, i) && r.closePath()),
    s0(e, t.options),
    e.stroke(r);
}
function tL(e, t, n, i) {
  const { segments: r, options: s } = t,
    a = Bh(t);
  for (const u of r)
    s0(e, s, u.style),
      e.beginPath(),
      a(e, t, u, { start: n, end: n + i - 1 }) && e.closePath(),
      e.stroke();
}
const eL = typeof Path2D == "function";
function nL(e, t, n, i) {
  eL && !t.options.segment ? JC(e, t, n, i) : tL(e, t, n, i);
}
class Qs extends _n {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, n) {
    const i = this.options;
    if (
      (i.tension || i.cubicInterpolationMode === "monotone") &&
      !i.stepped &&
      !this._pointsUpdated
    ) {
      const r = i.spanGaps ? this._loop : this._fullLoop;
      FP(this._points, i, t, r, n), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = ik(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      n = this.points;
    return t.length && n[t[0].start];
  }
  last() {
    const t = this.segments,
      n = this.points,
      i = t.length;
    return i && n[t[i - 1].end];
  }
  interpolate(t, n) {
    const i = this.options,
      r = t[n],
      s = this.points,
      a = tk(this, { property: n, start: r, end: r });
    if (!a.length) return;
    const u = [],
      c = qC(i);
    let d, p;
    for (d = 0, p = a.length; d < p; ++d) {
      const { start: g, end: m } = a[d],
        v = s[g],
        y = s[m];
      if (v === y) {
        u.push(v);
        continue;
      }
      const S = Math.abs((r - v[n]) / (y[n] - v[n])),
        M = c(v, y, S, i.stepped);
      (M[n] = t[n]), u.push(M);
    }
    return u.length === 1 ? u[0] : u;
  }
  pathSegment(t, n, i) {
    return Bh(this)(t, this, n, i);
  }
  path(t, n, i) {
    const r = this.segments,
      s = Bh(this);
    let a = this._loop;
    (n = n || 0), (i = i || this.points.length - n);
    for (const u of r) a &= s(t, this, u, { start: n, end: n + i - 1 });
    return !!a;
  }
  draw(t, n, i, r) {
    const s = this.options || {};
    (this.points || []).length &&
      s.borderWidth &&
      (t.save(), nL(t, this, i, r), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
Qs.id = "line";
Qs.defaults = {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0,
};
Qs.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor",
};
Qs.descriptors = {
  _scriptable: !0,
  _indexable: (e) => e !== "borderDash" && e !== "fill",
};
function Eg(e, t, n, i) {
  const r = e.options,
    { [n]: s } = e.getProps([n], i);
  return Math.abs(t - s) < r.radius + r.hitRadius;
}
class fu extends _n {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      t && Object.assign(this, t);
  }
  inRange(t, n, i) {
    const r = this.options,
      { x: s, y: a } = this.getProps(["x", "y"], i);
    return (
      Math.pow(t - s, 2) + Math.pow(n - a, 2) <
      Math.pow(r.hitRadius + r.radius, 2)
    );
  }
  inXRange(t, n) {
    return Eg(this, t, "x", n);
  }
  inYRange(t, n) {
    return Eg(this, t, "y", n);
  }
  getCenterPoint(t) {
    const { x: n, y: i } = this.getProps(["x", "y"], t);
    return { x: n, y: i };
  }
  size(t) {
    t = t || this.options || {};
    let n = t.radius || 0;
    n = Math.max(n, (n && t.hoverRadius) || 0);
    const i = (n && t.borderWidth) || 0;
    return (n + i) * 2;
  }
  draw(t, n) {
    const i = this.options;
    this.skip ||
      i.radius < 0.1 ||
      !zs(this, n, this.size(i) / 2) ||
      ((t.strokeStyle = i.borderColor),
      (t.lineWidth = i.borderWidth),
      (t.fillStyle = i.backgroundColor),
      Rh(t, i, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
fu.id = "point";
fu.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0,
};
fu.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor",
};
function l0(e, t) {
  const {
    x: n,
    y: i,
    base: r,
    width: s,
    height: a,
  } = e.getProps(["x", "y", "base", "width", "height"], t);
  let u, c, d, p, g;
  return (
    e.horizontal
      ? ((g = a / 2),
        (u = Math.min(n, r)),
        (c = Math.max(n, r)),
        (d = i - g),
        (p = i + g))
      : ((g = s / 2),
        (u = n - g),
        (c = n + g),
        (d = Math.min(i, r)),
        (p = Math.max(i, r))),
    { left: u, top: d, right: c, bottom: p }
  );
}
function mi(e, t, n, i) {
  return e ? 0 : xe(t, n, i);
}
function iL(e, t, n) {
  const i = e.options.borderWidth,
    r = e.borderSkipped,
    s = Ry(i);
  return {
    t: mi(r.top, s.top, 0, n),
    r: mi(r.right, s.right, 0, t),
    b: mi(r.bottom, s.bottom, 0, n),
    l: mi(r.left, s.left, 0, t),
  };
}
function rL(e, t, n) {
  const { enableBorderRadius: i } = e.getProps(["enableBorderRadius"]),
    r = e.options.borderRadius,
    s = ir(r),
    a = Math.min(t, n),
    u = e.borderSkipped,
    c = i || xt(r);
  return {
    topLeft: mi(!c || u.top || u.left, s.topLeft, 0, a),
    topRight: mi(!c || u.top || u.right, s.topRight, 0, a),
    bottomLeft: mi(!c || u.bottom || u.left, s.bottomLeft, 0, a),
    bottomRight: mi(!c || u.bottom || u.right, s.bottomRight, 0, a),
  };
}
function oL(e) {
  const t = l0(e),
    n = t.right - t.left,
    i = t.bottom - t.top,
    r = iL(e, n / 2, i / 2),
    s = rL(e, n / 2, i / 2);
  return {
    outer: { x: t.left, y: t.top, w: n, h: i, radius: s },
    inner: {
      x: t.left + r.l,
      y: t.top + r.t,
      w: n - r.l - r.r,
      h: i - r.t - r.b,
      radius: {
        topLeft: Math.max(0, s.topLeft - Math.max(r.t, r.l)),
        topRight: Math.max(0, s.topRight - Math.max(r.t, r.r)),
        bottomLeft: Math.max(0, s.bottomLeft - Math.max(r.b, r.l)),
        bottomRight: Math.max(0, s.bottomRight - Math.max(r.b, r.r)),
      },
    },
  };
}
function Rc(e, t, n, i) {
  const r = t === null,
    s = n === null,
    u = e && !(r && s) && l0(e, i);
  return u && (r || fi(t, u.left, u.right)) && (s || fi(n, u.top, u.bottom));
}
function sL(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
}
function aL(e, t) {
  e.rect(t.x, t.y, t.w, t.h);
}
function zc(e, t, n = {}) {
  const i = e.x !== n.x ? -t : 0,
    r = e.y !== n.y ? -t : 0,
    s = (e.x + e.w !== n.x + n.w ? t : 0) - i,
    a = (e.y + e.h !== n.y + n.h ? t : 0) - r;
  return { x: e.x + i, y: e.y + r, w: e.w + s, h: e.h + a, radius: e.radius };
}
class lf extends _n {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t);
  }
  draw(t) {
    const {
        inflateAmount: n,
        options: { borderColor: i, backgroundColor: r },
      } = this,
      { inner: s, outer: a } = oL(this),
      u = sL(a.radius) ? As : aL;
    t.save(),
      (a.w !== s.w || a.h !== s.h) &&
        (t.beginPath(),
        u(t, zc(a, n, s)),
        t.clip(),
        u(t, zc(s, -n, a)),
        (t.fillStyle = i),
        t.fill("evenodd")),
      t.beginPath(),
      u(t, zc(s, n)),
      (t.fillStyle = r),
      t.fill(),
      t.restore();
  }
  inRange(t, n, i) {
    return Rc(this, t, n, i);
  }
  inXRange(t, n) {
    return Rc(this, t, null, n);
  }
  inYRange(t, n) {
    return Rc(this, null, t, n);
  }
  getCenterPoint(t) {
    const {
      x: n,
      y: i,
      base: r,
      horizontal: s,
    } = this.getProps(["x", "y", "base", "horizontal"], t);
    return { x: s ? (n + r) / 2 : n, y: s ? i : (i + r) / 2 };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
lf.id = "bar";
lf.defaults = {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0,
};
lf.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor",
};
const Tg = (e, t) => {
    let { boxHeight: n = t, boxWidth: i = t } = e;
    return (
      e.usePointStyle &&
        ((n = Math.min(n, t)), (i = e.pointStyleWidth || Math.min(i, t))),
      { boxWidth: i, boxHeight: n, itemHeight: Math.max(t, n) }
    );
  },
  lL = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index;
class Og extends _n {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n, i) {
    (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let n = At(t.generateLabels, [this.chart], this) || [];
    t.filter && (n = n.filter((i) => t.filter(i, this.chart.data))),
      t.sort && (n = n.sort((i, r) => t.sort(i, r, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n);
  }
  fit() {
    const { options: t, ctx: n } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels,
      r = re(i.font),
      s = r.size,
      a = this._computeTitleHeight(),
      { boxWidth: u, itemHeight: c } = Tg(i, s);
    let d, p;
    (n.font = r.string),
      this.isHorizontal()
        ? ((d = this.maxWidth), (p = this._fitRows(a, s, u, c) + 10))
        : ((p = this.maxHeight), (d = this._fitCols(a, s, u, c) + 10)),
      (this.width = Math.min(d, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(p, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, n, i, r) {
    const {
        ctx: s,
        maxWidth: a,
        options: {
          labels: { padding: u },
        },
      } = this,
      c = (this.legendHitBoxes = []),
      d = (this.lineWidths = [0]),
      p = r + u;
    let g = t;
    (s.textAlign = "left"), (s.textBaseline = "middle");
    let m = -1,
      v = -p;
    return (
      this.legendItems.forEach((y, S) => {
        const M = i + n / 2 + s.measureText(y.text).width;
        (S === 0 || d[d.length - 1] + M + 2 * u > a) &&
          ((g += p), (d[d.length - (S > 0 ? 0 : 1)] = 0), (v += p), m++),
          (c[S] = { left: 0, top: v, row: m, width: M, height: r }),
          (d[d.length - 1] += M + u);
      }),
      g
    );
  }
  _fitCols(t, n, i, r) {
    const {
        ctx: s,
        maxHeight: a,
        options: {
          labels: { padding: u },
        },
      } = this,
      c = (this.legendHitBoxes = []),
      d = (this.columnSizes = []),
      p = a - t;
    let g = u,
      m = 0,
      v = 0,
      y = 0,
      S = 0;
    return (
      this.legendItems.forEach((M, w) => {
        const b = i + n / 2 + s.measureText(M.text).width;
        w > 0 &&
          v + r + 2 * u > p &&
          ((g += m + u),
          d.push({ width: m, height: v }),
          (y += m + u),
          S++,
          (m = v = 0)),
          (c[w] = { left: y, top: v, col: S, width: b, height: r }),
          (m = Math.max(m, b)),
          (v += r + u);
      }),
      (g += m),
      d.push({ width: m, height: v }),
      g
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: i,
          labels: { padding: r },
          rtl: s,
        },
      } = this,
      a = Qr(s, this.left, this.width);
    if (this.isHorizontal()) {
      let u = 0,
        c = ve(i, this.left + r, this.right - this.lineWidths[u]);
      for (const d of n)
        u !== d.row &&
          ((u = d.row),
          (c = ve(i, this.left + r, this.right - this.lineWidths[u]))),
          (d.top += this.top + t + r),
          (d.left = a.leftForLtr(a.x(c), d.width)),
          (c += d.width + r);
    } else {
      let u = 0,
        c = ve(i, this.top + t + r, this.bottom - this.columnSizes[u].height);
      for (const d of n)
        d.col !== u &&
          ((u = d.col),
          (c = ve(
            i,
            this.top + t + r,
            this.bottom - this.columnSizes[u].height
          ))),
          (d.top = c),
          (d.left += this.left + r),
          (d.left = a.leftForLtr(a.x(d.left), d.width)),
          (c += d.height + r);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Kd(t, this), this._draw(), Xd(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: i, ctx: r } = this,
      { align: s, labels: a } = t,
      u = pt.color,
      c = Qr(t.rtl, this.left, this.width),
      d = re(a.font),
      { color: p, padding: g } = a,
      m = d.size,
      v = m / 2;
    let y;
    this.drawTitle(),
      (r.textAlign = c.textAlign("left")),
      (r.textBaseline = "middle"),
      (r.lineWidth = 0.5),
      (r.font = d.string);
    const { boxWidth: S, boxHeight: M, itemHeight: w } = Tg(a, m),
      b = function (D, N, V) {
        if (isNaN(S) || S <= 0 || isNaN(M) || M < 0) return;
        r.save();
        const Z = ht(V.lineWidth, 1);
        if (
          ((r.fillStyle = ht(V.fillStyle, u)),
          (r.lineCap = ht(V.lineCap, "butt")),
          (r.lineDashOffset = ht(V.lineDashOffset, 0)),
          (r.lineJoin = ht(V.lineJoin, "miter")),
          (r.lineWidth = Z),
          (r.strokeStyle = ht(V.strokeStyle, u)),
          r.setLineDash(ht(V.lineDash, [])),
          a.usePointStyle)
        ) {
          const K = {
              radius: (M * Math.SQRT2) / 2,
              pointStyle: V.pointStyle,
              rotation: V.rotation,
              borderWidth: Z,
            },
            X = c.xPlus(D, S / 2),
            Pt = N + v;
          Dy(r, K, X, Pt, a.pointStyleWidth && S);
        } else {
          const K = N + Math.max((m - M) / 2, 0),
            X = c.leftForLtr(D, S),
            Pt = ir(V.borderRadius);
          r.beginPath(),
            Object.values(Pt).some((rt) => rt !== 0)
              ? As(r, { x: X, y: K, w: S, h: M, radius: Pt })
              : r.rect(X, K, S, M),
            r.fill(),
            Z !== 0 && r.stroke();
        }
        r.restore();
      },
      P = function (D, N, V) {
        hr(r, V.text, D, N + w / 2, d, {
          strikethrough: V.hidden,
          textAlign: c.textAlign(V.textAlign),
        });
      },
      C = this.isHorizontal(),
      E = this._computeTitleHeight();
    C
      ? (y = {
          x: ve(s, this.left + g, this.right - i[0]),
          y: this.top + g + E,
          line: 0,
        })
      : (y = {
          x: this.left + g,
          y: ve(s, this.top + E + g, this.bottom - n[0].height),
          line: 0,
        }),
      Wy(this.ctx, t.textDirection);
    const R = w + g;
    this.legendItems.forEach((D, N) => {
      (r.strokeStyle = D.fontColor || p), (r.fillStyle = D.fontColor || p);
      const V = r.measureText(D.text).width,
        Z = c.textAlign(D.textAlign || (D.textAlign = a.textAlign)),
        K = S + v + V;
      let X = y.x,
        Pt = y.y;
      c.setWidth(this.width),
        C
          ? N > 0 &&
            X + K + g > this.right &&
            ((Pt = y.y += R),
            y.line++,
            (X = y.x = ve(s, this.left + g, this.right - i[y.line])))
          : N > 0 &&
            Pt + R > this.bottom &&
            ((X = y.x = X + n[y.line].width + g),
            y.line++,
            (Pt = y.y =
              ve(s, this.top + E + g, this.bottom - n[y.line].height)));
      const rt = c.x(X);
      b(rt, Pt, D),
        (X = VS(Z, X + S + v, C ? X + K : this.right, t.rtl)),
        P(c.x(X), Pt, D),
        C ? (y.x += K + g) : (y.y += R);
    }),
      Hy(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      n = t.title,
      i = re(n.font),
      r = be(n.padding);
    if (!n.display) return;
    const s = Qr(t.rtl, this.left, this.width),
      a = this.ctx,
      u = n.position,
      c = i.size / 2,
      d = r.top + c;
    let p,
      g = this.left,
      m = this.width;
    if (this.isHorizontal())
      (m = Math.max(...this.lineWidths)),
        (p = this.top + d),
        (g = ve(t.align, g, this.right - m));
    else {
      const y = this.columnSizes.reduce((S, M) => Math.max(S, M.height), 0);
      p =
        d +
        ve(
          t.align,
          this.top,
          this.bottom - y - t.labels.padding - this._computeTitleHeight()
        );
    }
    const v = ve(u, g, g + m);
    (a.textAlign = s.textAlign(Zd(u))),
      (a.textBaseline = "middle"),
      (a.strokeStyle = n.color),
      (a.fillStyle = n.color),
      (a.font = i.string),
      hr(a, n.text, v, p, i);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      n = re(t.font),
      i = be(t.padding);
    return t.display ? n.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, n) {
    let i, r, s;
    if (fi(t, this.left, this.right) && fi(n, this.top, this.bottom)) {
      for (s = this.legendHitBoxes, i = 0; i < s.length; ++i)
        if (
          ((r = s[i]),
          fi(t, r.left, r.left + r.width) && fi(n, r.top, r.top + r.height))
        )
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!uL(t.type, n)) return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const r = this._hoveredItem,
        s = lL(r, i);
      r && !s && At(n.onLeave, [t, r, this], this),
        (this._hoveredItem = i),
        i && !s && At(n.onHover, [t, i, this], this);
    } else i && At(n.onClick, [t, i, this], this);
  }
}
function uL(e, t) {
  return !!(
    ((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === "click" || e === "mouseup"))
  );
}
var cL = {
  id: "legend",
  _element: Og,
  start(e, t, n) {
    const i = (e.legend = new Og({ ctx: e.ctx, options: n, chart: e }));
    Qe.configure(e, i, n), Qe.addBox(e, i);
  },
  stop(e) {
    Qe.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const i = e.legend;
    Qe.configure(e, i, n), (i.options = n);
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const i = t.datasetIndex,
        r = n.chart;
      r.isDatasetVisible(i)
        ? (r.hide(i), (t.hidden = !0))
        : (r.show(i), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: { usePointStyle: n, pointStyle: i, textAlign: r, color: s },
          } = e.legend.options;
        return e._getSortedDatasetMetas().map((a) => {
          const u = a.controller.getStyle(n ? 0 : void 0),
            c = be(u.borderWidth);
          return {
            text: t[a.index].label,
            fillStyle: u.backgroundColor,
            fontColor: s,
            hidden: !a.visible,
            lineCap: u.borderCapStyle,
            lineDash: u.borderDash,
            lineDashOffset: u.borderDashOffset,
            lineJoin: u.borderJoinStyle,
            lineWidth: (c.width + c.height) / 4,
            strokeStyle: u.borderColor,
            pointStyle: i || u.pointStyle,
            rotation: u.rotation,
            textAlign: r || u.textAlign,
            borderRadius: 0,
            datasetIndex: a.index,
          };
        }, this);
      },
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => !["generateLabels", "filter", "sort"].includes(e),
    },
  },
};
class u0 extends _n {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n) {
    const i = this.options;
    if (((this.left = 0), (this.top = 0), !i.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = n);
    const r = Bt(i.text) ? i.text.length : 1;
    this._padding = be(i.padding);
    const s = r * re(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = s) : (this.width = s);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: n, left: i, bottom: r, right: s, options: a } = this,
      u = a.align;
    let c = 0,
      d,
      p,
      g;
    return (
      this.isHorizontal()
        ? ((p = ve(u, i, s)), (g = n + t), (d = s - i))
        : (a.position === "left"
            ? ((p = i + t), (g = ve(u, r, n)), (c = Wt * -0.5))
            : ((p = s - t), (g = ve(u, n, r)), (c = Wt * 0.5)),
          (d = r - n)),
      { titleX: p, titleY: g, maxWidth: d, rotation: c }
    );
  }
  draw() {
    const t = this.ctx,
      n = this.options;
    if (!n.display) return;
    const i = re(n.font),
      s = i.lineHeight / 2 + this._padding.top,
      { titleX: a, titleY: u, maxWidth: c, rotation: d } = this._drawArgs(s);
    hr(t, n.text, 0, 0, i, {
      color: n.color,
      maxWidth: c,
      rotation: d,
      textAlign: Zd(n.align),
      textBaseline: "middle",
      translation: [a, u],
    });
  }
}
function hL(e, t) {
  const n = new u0({ ctx: e.ctx, options: t, chart: e });
  Qe.configure(e, n, t), Qe.addBox(e, n), (e.titleBlock = n);
}
var dL = {
  id: "title",
  _element: u0,
  start(e, t, n) {
    hL(e, n);
  },
  stop(e) {
    const t = e.titleBlock;
    Qe.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, n) {
    const i = e.titleBlock;
    Qe.configure(e, i, n), (i.options = n);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const ds = {
  average(e) {
    if (!e.length) return !1;
    let t,
      n,
      i = 0,
      r = 0,
      s = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const a = e[t].element;
      if (a && a.hasValue()) {
        const u = a.tooltipPosition();
        (i += u.x), (r += u.y), ++s;
      }
    }
    return { x: i / s, y: r / s };
  },
  nearest(e, t) {
    if (!e.length) return !1;
    let n = t.x,
      i = t.y,
      r = Number.POSITIVE_INFINITY,
      s,
      a,
      u;
    for (s = 0, a = e.length; s < a; ++s) {
      const c = e[s].element;
      if (c && c.hasValue()) {
        const d = c.getCenterPoint(),
          p = Th(t, d);
        p < r && ((r = p), (u = c));
      }
    }
    if (u) {
      const c = u.tooltipPosition();
      (n = c.x), (i = c.y);
    }
    return { x: n, y: i };
  },
};
function Sn(e, t) {
  return t && (Bt(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function Fn(e) {
  return (typeof e == "string" || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e;
}
function fL(e, t) {
  const { element: n, datasetIndex: i, index: r } = t,
    s = e.getDatasetMeta(i).controller,
    { label: a, value: u } = s.getLabelAndValue(r);
  return {
    chart: e,
    label: a,
    parsed: s.getParsed(r),
    raw: e.data.datasets[i].data[r],
    formattedValue: u,
    dataset: s.getDataset(),
    dataIndex: r,
    datasetIndex: i,
    element: n,
  };
}
function Dg(e, t) {
  const n = e.chart.ctx,
    { body: i, footer: r, title: s } = e,
    { boxWidth: a, boxHeight: u } = t,
    c = re(t.bodyFont),
    d = re(t.titleFont),
    p = re(t.footerFont),
    g = s.length,
    m = r.length,
    v = i.length,
    y = be(t.padding);
  let S = y.height,
    M = 0,
    w = i.reduce(
      (C, E) => C + E.before.length + E.lines.length + E.after.length,
      0
    );
  if (
    ((w += e.beforeBody.length + e.afterBody.length),
    g &&
      (S += g * d.lineHeight + (g - 1) * t.titleSpacing + t.titleMarginBottom),
    w)
  ) {
    const C = t.displayColors ? Math.max(u, c.lineHeight) : c.lineHeight;
    S += v * C + (w - v) * c.lineHeight + (w - 1) * t.bodySpacing;
  }
  m && (S += t.footerMarginTop + m * p.lineHeight + (m - 1) * t.footerSpacing);
  let b = 0;
  const P = function (C) {
    M = Math.max(M, n.measureText(C).width + b);
  };
  return (
    n.save(),
    (n.font = d.string),
    Et(e.title, P),
    (n.font = c.string),
    Et(e.beforeBody.concat(e.afterBody), P),
    (b = t.displayColors ? a + 2 + t.boxPadding : 0),
    Et(i, (C) => {
      Et(C.before, P), Et(C.lines, P), Et(C.after, P);
    }),
    (b = 0),
    (n.font = p.string),
    Et(e.footer, P),
    n.restore(),
    (M += y.width),
    { width: M, height: S }
  );
}
function pL(e, t) {
  const { y: n, height: i } = t;
  return n < i / 2 ? "top" : n > e.height - i / 2 ? "bottom" : "center";
}
function mL(e, t, n, i) {
  const { x: r, width: s } = i,
    a = n.caretSize + n.caretPadding;
  if ((e === "left" && r + s + a > t.width) || (e === "right" && r - s - a < 0))
    return !0;
}
function gL(e, t, n, i) {
  const { x: r, width: s } = n,
    {
      width: a,
      chartArea: { left: u, right: c },
    } = e;
  let d = "center";
  return (
    i === "center"
      ? (d = r <= (u + c) / 2 ? "left" : "right")
      : r <= s / 2
      ? (d = "left")
      : r >= a - s / 2 && (d = "right"),
    mL(d, e, t, n) && (d = "center"),
    d
  );
}
function Rg(e, t, n) {
  const i = n.yAlign || t.yAlign || pL(e, n);
  return { xAlign: n.xAlign || t.xAlign || gL(e, t, n, i), yAlign: i };
}
function _L(e, t) {
  let { x: n, width: i } = e;
  return t === "right" ? (n -= i) : t === "center" && (n -= i / 2), n;
}
function vL(e, t, n) {
  let { y: i, height: r } = e;
  return (
    t === "top" ? (i += n) : t === "bottom" ? (i -= r + n) : (i -= r / 2), i
  );
}
function zg(e, t, n, i) {
  const { caretSize: r, caretPadding: s, cornerRadius: a } = e,
    { xAlign: u, yAlign: c } = n,
    d = r + s,
    { topLeft: p, topRight: g, bottomLeft: m, bottomRight: v } = ir(a);
  let y = _L(t, u);
  const S = vL(t, c, d);
  return (
    c === "center"
      ? u === "left"
        ? (y += d)
        : u === "right" && (y -= d)
      : u === "left"
      ? (y -= Math.max(p, m) + r)
      : u === "right" && (y += Math.max(g, v) + r),
    { x: xe(y, 0, i.width - t.width), y: xe(S, 0, i.height - t.height) }
  );
}
function Ka(e, t, n) {
  const i = be(n.padding);
  return t === "center"
    ? e.x + e.width / 2
    : t === "right"
    ? e.x + e.width - i.right
    : e.x + i.left;
}
function Ag(e) {
  return Sn([], Fn(e));
}
function yL(e, t, n) {
  return Ri(e, { tooltip: t, tooltipItems: n, type: "tooltip" });
}
function Ig(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
class Fh extends _n {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart || t._chart),
      (this._chart = this.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const n = this.chart,
      i = this.options.setContext(this.getContext()),
      r = i.enabled && n.options.animation && i.animations,
      s = new Zy(this.chart, r);
    return r._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = yL(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, n) {
    const { callbacks: i } = n,
      r = i.beforeTitle.apply(this, [t]),
      s = i.title.apply(this, [t]),
      a = i.afterTitle.apply(this, [t]);
    let u = [];
    return (u = Sn(u, Fn(r))), (u = Sn(u, Fn(s))), (u = Sn(u, Fn(a))), u;
  }
  getBeforeBody(t, n) {
    return Ag(n.callbacks.beforeBody.apply(this, [t]));
  }
  getBody(t, n) {
    const { callbacks: i } = n,
      r = [];
    return (
      Et(t, (s) => {
        const a = { before: [], lines: [], after: [] },
          u = Ig(i, s);
        Sn(a.before, Fn(u.beforeLabel.call(this, s))),
          Sn(a.lines, u.label.call(this, s)),
          Sn(a.after, Fn(u.afterLabel.call(this, s))),
          r.push(a);
      }),
      r
    );
  }
  getAfterBody(t, n) {
    return Ag(n.callbacks.afterBody.apply(this, [t]));
  }
  getFooter(t, n) {
    const { callbacks: i } = n,
      r = i.beforeFooter.apply(this, [t]),
      s = i.footer.apply(this, [t]),
      a = i.afterFooter.apply(this, [t]);
    let u = [];
    return (u = Sn(u, Fn(r))), (u = Sn(u, Fn(s))), (u = Sn(u, Fn(a))), u;
  }
  _createItems(t) {
    const n = this._active,
      i = this.chart.data,
      r = [],
      s = [],
      a = [];
    let u = [],
      c,
      d;
    for (c = 0, d = n.length; c < d; ++c) u.push(fL(this.chart, n[c]));
    return (
      t.filter && (u = u.filter((p, g, m) => t.filter(p, g, m, i))),
      t.itemSort && (u = u.sort((p, g) => t.itemSort(p, g, i))),
      Et(u, (p) => {
        const g = Ig(t.callbacks, p);
        r.push(g.labelColor.call(this, p)),
          s.push(g.labelPointStyle.call(this, p)),
          a.push(g.labelTextColor.call(this, p));
      }),
      (this.labelColors = r),
      (this.labelPointStyles = s),
      (this.labelTextColors = a),
      (this.dataPoints = u),
      u
    );
  }
  update(t, n) {
    const i = this.options.setContext(this.getContext()),
      r = this._active;
    let s,
      a = [];
    if (!r.length) this.opacity !== 0 && (s = { opacity: 0 });
    else {
      const u = ds[i.position].call(this, r, this._eventPosition);
      (a = this._createItems(i)),
        (this.title = this.getTitle(a, i)),
        (this.beforeBody = this.getBeforeBody(a, i)),
        (this.body = this.getBody(a, i)),
        (this.afterBody = this.getAfterBody(a, i)),
        (this.footer = this.getFooter(a, i));
      const c = (this._size = Dg(this, i)),
        d = Object.assign({}, u, c),
        p = Rg(this.chart, i, d),
        g = zg(i, d, p, this.chart);
      (this.xAlign = p.xAlign),
        (this.yAlign = p.yAlign),
        (s = {
          opacity: 1,
          x: g.x,
          y: g.y,
          width: c.width,
          height: c.height,
          caretX: u.x,
          caretY: u.y,
        });
    }
    (this._tooltipItems = a),
      (this.$context = void 0),
      s && this._resolveAnimations().update(this, s),
      t &&
        i.external &&
        i.external.call(this, { chart: this.chart, tooltip: this, replay: n });
  }
  drawCaret(t, n, i, r) {
    const s = this.getCaretPosition(t, i, r);
    n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
  }
  getCaretPosition(t, n, i) {
    const { xAlign: r, yAlign: s } = this,
      { caretSize: a, cornerRadius: u } = i,
      { topLeft: c, topRight: d, bottomLeft: p, bottomRight: g } = ir(u),
      { x: m, y: v } = t,
      { width: y, height: S } = n;
    let M, w, b, P, C, E;
    return (
      s === "center"
        ? ((C = v + S / 2),
          r === "left"
            ? ((M = m), (w = M - a), (P = C + a), (E = C - a))
            : ((M = m + y), (w = M + a), (P = C - a), (E = C + a)),
          (b = M))
        : (r === "left"
            ? (w = m + Math.max(c, p) + a)
            : r === "right"
            ? (w = m + y - Math.max(d, g) - a)
            : (w = this.caretX),
          s === "top"
            ? ((P = v), (C = P - a), (M = w - a), (b = w + a))
            : ((P = v + S), (C = P + a), (M = w + a), (b = w - a)),
          (E = P)),
      { x1: M, x2: w, x3: b, y1: P, y2: C, y3: E }
    );
  }
  drawTitle(t, n, i) {
    const r = this.title,
      s = r.length;
    let a, u, c;
    if (s) {
      const d = Qr(i.rtl, this.x, this.width);
      for (
        t.x = Ka(this, i.titleAlign, i),
          n.textAlign = d.textAlign(i.titleAlign),
          n.textBaseline = "middle",
          a = re(i.titleFont),
          u = i.titleSpacing,
          n.fillStyle = i.titleColor,
          n.font = a.string,
          c = 0;
        c < s;
        ++c
      )
        n.fillText(r[c], d.x(t.x), t.y + a.lineHeight / 2),
          (t.y += a.lineHeight + u),
          c + 1 === s && (t.y += i.titleMarginBottom - u);
    }
  }
  _drawColorBox(t, n, i, r, s) {
    const a = this.labelColors[i],
      u = this.labelPointStyles[i],
      { boxHeight: c, boxWidth: d, boxPadding: p } = s,
      g = re(s.bodyFont),
      m = Ka(this, "left", s),
      v = r.x(m),
      y = c < g.lineHeight ? (g.lineHeight - c) / 2 : 0,
      S = n.y + y;
    if (s.usePointStyle) {
      const M = {
          radius: Math.min(d, c) / 2,
          pointStyle: u.pointStyle,
          rotation: u.rotation,
          borderWidth: 1,
        },
        w = r.leftForLtr(v, d) + d / 2,
        b = S + c / 2;
      (t.strokeStyle = s.multiKeyBackground),
        (t.fillStyle = s.multiKeyBackground),
        Rh(t, M, w, b),
        (t.strokeStyle = a.borderColor),
        (t.fillStyle = a.backgroundColor),
        Rh(t, M, w, b);
    } else {
      (t.lineWidth = xt(a.borderWidth)
        ? Math.max(...Object.values(a.borderWidth))
        : a.borderWidth || 1),
        (t.strokeStyle = a.borderColor),
        t.setLineDash(a.borderDash || []),
        (t.lineDashOffset = a.borderDashOffset || 0);
      const M = r.leftForLtr(v, d - p),
        w = r.leftForLtr(r.xPlus(v, 1), d - p - 2),
        b = ir(a.borderRadius);
      Object.values(b).some((P) => P !== 0)
        ? (t.beginPath(),
          (t.fillStyle = s.multiKeyBackground),
          As(t, { x: M, y: S, w: d, h: c, radius: b }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = a.backgroundColor),
          t.beginPath(),
          As(t, { x: w, y: S + 1, w: d - 2, h: c - 2, radius: b }),
          t.fill())
        : ((t.fillStyle = s.multiKeyBackground),
          t.fillRect(M, S, d, c),
          t.strokeRect(M, S, d, c),
          (t.fillStyle = a.backgroundColor),
          t.fillRect(w, S + 1, d - 2, c - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, n, i) {
    const { body: r } = this,
      {
        bodySpacing: s,
        bodyAlign: a,
        displayColors: u,
        boxHeight: c,
        boxWidth: d,
        boxPadding: p,
      } = i,
      g = re(i.bodyFont);
    let m = g.lineHeight,
      v = 0;
    const y = Qr(i.rtl, this.x, this.width),
      S = function (N) {
        n.fillText(N, y.x(t.x + v), t.y + m / 2), (t.y += m + s);
      },
      M = y.textAlign(a);
    let w, b, P, C, E, R, D;
    for (
      n.textAlign = a,
        n.textBaseline = "middle",
        n.font = g.string,
        t.x = Ka(this, M, i),
        n.fillStyle = i.bodyColor,
        Et(this.beforeBody, S),
        v = u && M !== "right" ? (a === "center" ? d / 2 + p : d + 2 + p) : 0,
        C = 0,
        R = r.length;
      C < R;
      ++C
    ) {
      for (
        w = r[C],
          b = this.labelTextColors[C],
          n.fillStyle = b,
          Et(w.before, S),
          P = w.lines,
          u &&
            P.length &&
            (this._drawColorBox(n, t, C, y, i),
            (m = Math.max(g.lineHeight, c))),
          E = 0,
          D = P.length;
        E < D;
        ++E
      )
        S(P[E]), (m = g.lineHeight);
      Et(w.after, S);
    }
    (v = 0), (m = g.lineHeight), Et(this.afterBody, S), (t.y -= s);
  }
  drawFooter(t, n, i) {
    const r = this.footer,
      s = r.length;
    let a, u;
    if (s) {
      const c = Qr(i.rtl, this.x, this.width);
      for (
        t.x = Ka(this, i.footerAlign, i),
          t.y += i.footerMarginTop,
          n.textAlign = c.textAlign(i.footerAlign),
          n.textBaseline = "middle",
          a = re(i.footerFont),
          n.fillStyle = i.footerColor,
          n.font = a.string,
          u = 0;
        u < s;
        ++u
      )
        n.fillText(r[u], c.x(t.x), t.y + a.lineHeight / 2),
          (t.y += a.lineHeight + i.footerSpacing);
    }
  }
  drawBackground(t, n, i, r) {
    const { xAlign: s, yAlign: a } = this,
      { x: u, y: c } = t,
      { width: d, height: p } = i,
      {
        topLeft: g,
        topRight: m,
        bottomLeft: v,
        bottomRight: y,
      } = ir(r.cornerRadius);
    (n.fillStyle = r.backgroundColor),
      (n.strokeStyle = r.borderColor),
      (n.lineWidth = r.borderWidth),
      n.beginPath(),
      n.moveTo(u + g, c),
      a === "top" && this.drawCaret(t, n, i, r),
      n.lineTo(u + d - m, c),
      n.quadraticCurveTo(u + d, c, u + d, c + m),
      a === "center" && s === "right" && this.drawCaret(t, n, i, r),
      n.lineTo(u + d, c + p - y),
      n.quadraticCurveTo(u + d, c + p, u + d - y, c + p),
      a === "bottom" && this.drawCaret(t, n, i, r),
      n.lineTo(u + v, c + p),
      n.quadraticCurveTo(u, c + p, u, c + p - v),
      a === "center" && s === "left" && this.drawCaret(t, n, i, r),
      n.lineTo(u, c + g),
      n.quadraticCurveTo(u, c, u + g, c),
      n.closePath(),
      n.fill(),
      r.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart,
      i = this.$animations,
      r = i && i.x,
      s = i && i.y;
    if (r || s) {
      const a = ds[t.position].call(this, this._active, this._eventPosition);
      if (!a) return;
      const u = (this._size = Dg(this, t)),
        c = Object.assign({}, a, this._size),
        d = Rg(n, t, c),
        p = zg(t, c, d, n);
      (r._to !== p.x || s._to !== p.y) &&
        ((this.xAlign = d.xAlign),
        (this.yAlign = d.yAlign),
        (this.width = u.width),
        (this.height = u.height),
        (this.caretX = a.x),
        (this.caretY = a.y),
        this._resolveAnimations().update(this, p));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i) return;
    this._updateAnimationTarget(n);
    const r = { width: this.width, height: this.height },
      s = { x: this.x, y: this.y };
    i = Math.abs(i) < 0.001 ? 0 : i;
    const a = be(n.padding),
      u =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    n.enabled &&
      u &&
      (t.save(),
      (t.globalAlpha = i),
      this.drawBackground(s, t, r, n),
      Wy(t, n.textDirection),
      (s.y += a.top),
      this.drawTitle(s, t, n),
      this.drawBody(s, t, n),
      this.drawFooter(s, t, n),
      Hy(t, n.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const i = this._active,
      r = t.map(({ datasetIndex: u, index: c }) => {
        const d = this.chart.getDatasetMeta(u);
        if (!d) throw new Error("Cannot find a dataset at index " + u);
        return { datasetIndex: u, element: d.data[c], index: c };
      }),
      s = !zl(i, r),
      a = this._positionChanged(r, n);
    (s || a) &&
      ((this._active = r),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, n, i = !0) {
    if (n && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const r = this.options,
      s = this._active || [],
      a = this._getActiveElements(t, s, n, i),
      u = this._positionChanged(a, t),
      c = n || !zl(a, s) || u;
    return (
      c &&
        ((this._active = a),
        (r.enabled || r.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
      c
    );
  }
  _getActiveElements(t, n, i, r) {
    const s = this.options;
    if (t.type === "mouseout") return [];
    if (!r) return n;
    const a = this.chart.getElementsAtEventForMode(t, s.mode, s, i);
    return s.reverse && a.reverse(), a;
  }
  _positionChanged(t, n) {
    const { caretX: i, caretY: r, options: s } = this,
      a = ds[s.position].call(this, t, n);
    return a !== !1 && (i !== a.x || r !== a.y);
  }
}
Fh.positioners = ds;
var xL = {
  id: "tooltip",
  _element: Fh,
  positioners: ds,
  afterInit(e, t, n) {
    n && (e.tooltip = new Fh({ chart: e, options: n }));
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const n = { tooltip: t };
      if (e.notifyPlugins("beforeTooltipDraw", n) === !1) return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay;
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: {
      beforeTitle: Nn,
      title(e) {
        if (e.length > 0) {
          const t = e[0],
            n = t.chart.data.labels,
            i = n ? n.length : 0;
          if (this && this.options && this.options.mode === "dataset")
            return t.dataset.label || "";
          if (t.label) return t.label;
          if (i > 0 && t.dataIndex < i) return n[t.dataIndex];
        }
        return "";
      },
      afterTitle: Nn,
      beforeBody: Nn,
      beforeLabel: Nn,
      label(e) {
        if (this && this.options && this.options.mode === "dataset")
          return e.label + ": " + e.formattedValue || e.formattedValue;
        let t = e.dataset.label || "";
        t && (t += ": ");
        const n = e.formattedValue;
        return Ct(n) || (t += n), t;
      },
      labelColor(e) {
        const n = e.chart
          .getDatasetMeta(e.datasetIndex)
          .controller.getStyle(e.dataIndex);
        return {
          borderColor: n.borderColor,
          backgroundColor: n.backgroundColor,
          borderWidth: n.borderWidth,
          borderDash: n.borderDash,
          borderDashOffset: n.borderDashOffset,
          borderRadius: 0,
        };
      },
      labelTextColor() {
        return this.options.bodyColor;
      },
      labelPointStyle(e) {
        const n = e.chart
          .getDatasetMeta(e.datasetIndex)
          .controller.getStyle(e.dataIndex);
        return { pointStyle: n.pointStyle, rotation: n.rotation };
      },
      afterLabel: Nn,
      afterBody: Nn,
      beforeFooter: Nn,
      footer: Nn,
      afterFooter: Nn,
    },
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const wL = (e, t, n, i) => (
  typeof t == "string"
    ? ((n = e.push(t) - 1), i.unshift({ index: n, label: t }))
    : isNaN(t) && (n = null),
  n
);
function bL(e, t, n, i) {
  const r = e.indexOf(t);
  if (r === -1) return wL(e, t, n, i);
  const s = e.lastIndexOf(t);
  return r !== s ? n : r;
}
const SL = (e, t) => (e === null ? null : xe(Math.round(e), 0, t));
class Hl extends pr {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const n = this._addedLabels;
    if (n.length) {
      const i = this.getLabels();
      for (const { index: r, label: s } of n) i[r] === s && i.splice(r, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, n) {
    if (Ct(t)) return null;
    const i = this.getLabels();
    return (
      (n =
        isFinite(n) && i[n] === t ? n : bL(i, t, ht(n, t), this._addedLabels)),
      SL(n, i.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let { min: i, max: r } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (t || (i = 0), n || (r = this.getLabels().length - 1)),
      (this.min = i),
      (this.max = r);
  }
  buildTicks() {
    const t = this.min,
      n = this.max,
      i = this.options.offset,
      r = [];
    let s = this.getLabels();
    (s = t === 0 && n === s.length - 1 ? s : s.slice(t, n + 1)),
      (this._valueRange = Math.max(s.length - (i ? 0 : 1), 1)),
      (this._startValue = this.min - (i ? 0.5 : 0));
    for (let a = t; a <= n; a++) r.push({ value: a });
    return r;
  }
  getLabelForValue(t) {
    const n = this.getLabels();
    return t >= 0 && t < n.length ? n[t] : t;
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
Hl.id = "category";
Hl.defaults = { ticks: { callback: Hl.prototype.getLabelForValue } };
function PL(e, t) {
  const n = [],
    {
      bounds: r,
      step: s,
      min: a,
      max: u,
      precision: c,
      count: d,
      maxTicks: p,
      maxDigits: g,
      includeBounds: m,
    } = e,
    v = s || 1,
    y = p - 1,
    { min: S, max: M } = t,
    w = !Ct(a),
    b = !Ct(u),
    P = !Ct(d),
    C = (M - S) / (g + 1);
  let E = Fm((M - S) / y / v) * v,
    R,
    D,
    N,
    V;
  if (E < 1e-14 && !w && !b) return [{ value: S }, { value: M }];
  (V = Math.ceil(M / E) - Math.floor(S / E)),
    V > y && (E = Fm((V * E) / y / v) * v),
    Ct(c) || ((R = Math.pow(10, c)), (E = Math.ceil(E * R) / R)),
    r === "ticks"
      ? ((D = Math.floor(S / E) * E), (N = Math.ceil(M / E) * E))
      : ((D = S), (N = M)),
    w && b && s && IS((u - a) / s, E / 1e3)
      ? ((V = Math.round(Math.min((u - a) / E, p))),
        (E = (u - a) / V),
        (D = a),
        (N = u))
      : P
      ? ((D = w ? a : D), (N = b ? u : N), (V = d - 1), (E = (N - D) / V))
      : ((V = (N - D) / E),
        us(V, Math.round(V), E / 1e3)
          ? (V = Math.round(V))
          : (V = Math.ceil(V)));
  const Z = Math.max(jm(E), jm(D));
  (R = Math.pow(10, Ct(c) ? Z : c)),
    (D = Math.round(D * R) / R),
    (N = Math.round(N * R) / R);
  let K = 0;
  for (
    w &&
    (m && D !== a
      ? (n.push({ value: a }),
        D < a && K++,
        us(Math.round((D + K * E) * R) / R, a, Ng(a, C, e)) && K++)
      : D < a && K++);
    K < V;
    ++K
  )
    n.push({ value: Math.round((D + K * E) * R) / R });
  return (
    b && m && N !== u
      ? n.length && us(n[n.length - 1].value, u, Ng(u, C, e))
        ? (n[n.length - 1].value = u)
        : n.push({ value: u })
      : (!b || N === u) && n.push({ value: N }),
    n
  );
}
function Ng(e, t, { horizontal: n, minRotation: i }) {
  const r = hn(i),
    s = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
    a = 0.75 * t * ("" + e).length;
  return Math.min(t / s, a);
}
class Vl extends pr {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    return Ct(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: n, maxDefined: i } = this.getUserBounds();
    let { min: r, max: s } = this;
    const a = (c) => (r = n ? r : c),
      u = (c) => (s = i ? s : c);
    if (t) {
      const c = En(r),
        d = En(s);
      c < 0 && d < 0 ? u(0) : c > 0 && d > 0 && a(0);
    }
    if (r === s) {
      let c = 1;
      (s >= Number.MAX_SAFE_INTEGER || r <= Number.MIN_SAFE_INTEGER) &&
        (c = Math.abs(s * 0.05)),
        u(s + c),
        t || a(r - c);
    }
    (this.min = r), (this.max = s);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: n, stepSize: i } = t,
      r;
    return (
      i
        ? ((r = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          r > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`
            ),
            (r = 1e3)))
        : ((r = this.computeTickLimit()), (n = n || 11)),
      n && (r = Math.min(n, r)),
      r
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      n = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const r = {
        maxTicks: i,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      s = this._range || this,
      a = PL(r, s);
    return (
      t.bounds === "ticks" && yy(a, this, "value"),
      t.reverse
        ? (a.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      a
    );
  }
  configure() {
    const t = this.ticks;
    let n = this.min,
      i = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const r = (i - n) / Math.max(t.length - 1, 1) / 2;
      (n -= r), (i += r);
    }
    (this._startValue = n), (this._endValue = i), (this._valueRange = i - n);
  }
  getLabelForValue(t) {
    return Ys(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class uf extends Vl {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = pe(t) ? t : 0),
      (this.max = pe(n) ? n : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      n = t ? this.width : this.height,
      i = hn(this.options.ticks.minRotation),
      r = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
      s = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, s.lineHeight / r));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
uf.id = "linear";
uf.defaults = { ticks: { callback: du.formatters.numeric } };
function Bg(e) {
  return e / Math.pow(10, Math.floor(Xe(e))) === 1;
}
function kL(e, t) {
  const n = Math.floor(Xe(t.max)),
    i = Math.ceil(t.max / Math.pow(10, n)),
    r = [];
  let s = $e(e.min, Math.pow(10, Math.floor(Xe(t.min)))),
    a = Math.floor(Xe(s)),
    u = Math.floor(s / Math.pow(10, a)),
    c = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
  do
    r.push({ value: s, major: Bg(s) }),
      ++u,
      u === 10 && ((u = 1), ++a, (c = a >= 0 ? 1 : c)),
      (s = Math.round(u * Math.pow(10, a) * c) / c);
  while (a < n || (a === n && u < i));
  const d = $e(e.max, s);
  return r.push({ value: d, major: Bg(s) }), r;
}
class c0 extends pr {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    const i = Vl.prototype.parse.apply(this, [t, n]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return pe(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = pe(t) ? Math.max(0, t) : null),
      (this.max = pe(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let i = this.min,
      r = this.max;
    const s = (c) => (i = t ? i : c),
      a = (c) => (r = n ? r : c),
      u = (c, d) => Math.pow(10, Math.floor(Xe(c)) + d);
    i === r && (i <= 0 ? (s(1), a(10)) : (s(u(i, -1)), a(u(r, 1)))),
      i <= 0 && s(u(r, -1)),
      r <= 0 && a(u(i, 1)),
      this._zero &&
        this.min !== this._suggestedMin &&
        i === u(this.min, 0) &&
        s(u(i, -1)),
      (this.min = i),
      (this.max = r);
  }
  buildTicks() {
    const t = this.options,
      n = { min: this._userMin, max: this._userMax },
      i = kL(n, this);
    return (
      t.bounds === "ticks" && yy(i, this, "value"),
      t.reverse
        ? (i.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      i
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : Ys(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = Xe(t)),
      (this._valueRange = Xe(this.max) - Xe(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (Xe(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
c0.id = "logarithmic";
c0.defaults = {
  ticks: { callback: du.formatters.logarithmic, major: { enabled: !0 } },
};
function jh(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const n = be(t.backdropPadding);
    return ht(t.font && t.font.size, pt.font.size) + n.height;
  }
  return 0;
}
function CL(e, t, n) {
  return (
    (n = Bt(n) ? n : [n]), { w: pP(e, t.string, n), h: n.length * t.lineHeight }
  );
}
function Fg(e, t, n, i, r) {
  return e === i || e === r
    ? { start: t - n / 2, end: t + n / 2 }
    : e < i || e > r
    ? { start: t - n, end: t }
    : { start: t, end: t + n };
}
function LL(e) {
  const t = {
      l: e.left + e._padding.left,
      r: e.right - e._padding.right,
      t: e.top + e._padding.top,
      b: e.bottom - e._padding.bottom,
    },
    n = Object.assign({}, t),
    i = [],
    r = [],
    s = e._pointLabels.length,
    a = e.options.pointLabels,
    u = a.centerPointLabels ? Wt / s : 0;
  for (let c = 0; c < s; c++) {
    const d = a.setContext(e.getPointLabelContext(c));
    r[c] = d.padding;
    const p = e.getPointPosition(c, e.drawingArea + r[c], u),
      g = re(d.font),
      m = CL(e.ctx, g, e._pointLabels[c]);
    i[c] = m;
    const v = un(e.getIndexAngle(c) + u),
      y = Math.round(Hd(v)),
      S = Fg(y, p.x, m.w, 0, 180),
      M = Fg(y, p.y, m.h, 90, 270);
    ML(n, t, v, S, M);
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b),
    (e._pointLabelItems = EL(e, i, r));
}
function ML(e, t, n, i, r) {
  const s = Math.abs(Math.sin(n)),
    a = Math.abs(Math.cos(n));
  let u = 0,
    c = 0;
  i.start < t.l
    ? ((u = (t.l - i.start) / s), (e.l = Math.min(e.l, t.l - u)))
    : i.end > t.r && ((u = (i.end - t.r) / s), (e.r = Math.max(e.r, t.r + u))),
    r.start < t.t
      ? ((c = (t.t - r.start) / a), (e.t = Math.min(e.t, t.t - c)))
      : r.end > t.b &&
        ((c = (r.end - t.b) / a), (e.b = Math.max(e.b, t.b + c)));
}
function EL(e, t, n) {
  const i = [],
    r = e._pointLabels.length,
    s = e.options,
    a = jh(s) / 2,
    u = e.drawingArea,
    c = s.pointLabels.centerPointLabels ? Wt / r : 0;
  for (let d = 0; d < r; d++) {
    const p = e.getPointPosition(d, u + a + n[d], c),
      g = Math.round(Hd(un(p.angle + Kt))),
      m = t[d],
      v = DL(p.y, m.h, g),
      y = TL(g),
      S = OL(p.x, m.w, y);
    i.push({
      x: p.x,
      y: v,
      textAlign: y,
      left: S,
      top: v,
      right: S + m.w,
      bottom: v + m.h,
    });
  }
  return i;
}
function TL(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function OL(e, t, n) {
  return n === "right" ? (e -= t) : n === "center" && (e -= t / 2), e;
}
function DL(e, t, n) {
  return (
    n === 90 || n === 270 ? (e -= t / 2) : (n > 270 || n < 90) && (e -= t), e
  );
}
function RL(e, t) {
  const {
    ctx: n,
    options: { pointLabels: i },
  } = e;
  for (let r = t - 1; r >= 0; r--) {
    const s = i.setContext(e.getPointLabelContext(r)),
      a = re(s.font),
      {
        x: u,
        y: c,
        textAlign: d,
        left: p,
        top: g,
        right: m,
        bottom: v,
      } = e._pointLabelItems[r],
      { backdropColor: y } = s;
    if (!Ct(y)) {
      const S = ir(s.borderRadius),
        M = be(s.backdropPadding);
      n.fillStyle = y;
      const w = p - M.left,
        b = g - M.top,
        P = m - p + M.width,
        C = v - g + M.height;
      Object.values(S).some((E) => E !== 0)
        ? (n.beginPath(),
          As(n, { x: w, y: b, w: P, h: C, radius: S }),
          n.fill())
        : n.fillRect(w, b, P, C);
    }
    hr(n, e._pointLabels[r], u, c + a.lineHeight / 2, a, {
      color: s.color,
      textAlign: d,
      textBaseline: "middle",
    });
  }
}
function h0(e, t, n, i) {
  const { ctx: r } = e;
  if (n) r.arc(e.xCenter, e.yCenter, t, 0, Rt);
  else {
    let s = e.getPointPosition(0, t);
    r.moveTo(s.x, s.y);
    for (let a = 1; a < i; a++)
      (s = e.getPointPosition(a, t)), r.lineTo(s.x, s.y);
  }
}
function zL(e, t, n, i) {
  const r = e.ctx,
    s = t.circular,
    { color: a, lineWidth: u } = t;
  (!s && !i) ||
    !a ||
    !u ||
    n < 0 ||
    (r.save(),
    (r.strokeStyle = a),
    (r.lineWidth = u),
    r.setLineDash(t.borderDash),
    (r.lineDashOffset = t.borderDashOffset),
    r.beginPath(),
    h0(e, n, s, i),
    r.closePath(),
    r.stroke(),
    r.restore());
}
function AL(e, t, n) {
  return Ri(e, { label: n, index: t, type: "pointLabel" });
}
class pu extends Vl {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = be(jh(this.options) / 2)),
      n = (this.width = this.maxWidth - t.width),
      i = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + n / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(n, i) / 2));
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1);
    (this.min = pe(t) && !isNaN(t) ? t : 0),
      (this.max = pe(n) && !isNaN(n) ? n : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / jh(this.options));
  }
  generateTickLabels(t) {
    Vl.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((n, i) => {
          const r = At(this.options.pointLabels.callback, [n, i], this);
          return r || r === 0 ? r : "";
        })
        .filter((n, i) => this.chart.getDataVisibility(i)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? LL(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, n, i, r) {
    (this.xCenter += Math.floor((t - n) / 2)),
      (this.yCenter += Math.floor((i - r) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, n, i, r)
      ));
  }
  getIndexAngle(t) {
    const n = Rt / (this._pointLabels.length || 1),
      i = this.options.startAngle || 0;
    return un(t * n + hn(i));
  }
  getDistanceFromCenterForValue(t) {
    if (Ct(t)) return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
  }
  getValueForDistanceFromCenter(t) {
    if (Ct(t)) return NaN;
    const n = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || [];
    if (t >= 0 && t < n.length) {
      const i = n[t];
      return AL(this.getContext(), t, i);
    }
  }
  getPointPosition(t, n, i = 0) {
    const r = this.getIndexAngle(t) - Kt + i;
    return {
      x: Math.cos(r) * n + this.xCenter,
      y: Math.sin(r) * n + this.yCenter,
      angle: r,
    };
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: n, top: i, right: r, bottom: s } = this._pointLabelItems[t];
    return { left: n, top: i, right: r, bottom: s };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: n },
    } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(),
        i.beginPath(),
        h0(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          n,
          this._pointLabels.length
        ),
        i.closePath(),
        (i.fillStyle = t),
        i.fill(),
        i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      n = this.options,
      { angleLines: i, grid: r } = n,
      s = this._pointLabels.length;
    let a, u, c;
    if (
      (n.pointLabels.display && RL(this, s),
      r.display &&
        this.ticks.forEach((d, p) => {
          if (p !== 0) {
            u = this.getDistanceFromCenterForValue(d.value);
            const g = r.setContext(this.getContext(p - 1));
            zL(this, g, u, s);
          }
        }),
      i.display)
    ) {
      for (t.save(), a = s - 1; a >= 0; a--) {
        const d = i.setContext(this.getPointLabelContext(a)),
          { color: p, lineWidth: g } = d;
        !g ||
          !p ||
          ((t.lineWidth = g),
          (t.strokeStyle = p),
          t.setLineDash(d.borderDash),
          (t.lineDashOffset = d.borderDashOffset),
          (u = this.getDistanceFromCenterForValue(
            n.ticks.reverse ? this.min : this.max
          )),
          (c = this.getPointPosition(a, u)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(c.x, c.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      n = this.options,
      i = n.ticks;
    if (!i.display) return;
    const r = this.getIndexAngle(0);
    let s, a;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(r),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((u, c) => {
        if (c === 0 && !n.reverse) return;
        const d = i.setContext(this.getContext(c)),
          p = re(d.font);
        if (
          ((s = this.getDistanceFromCenterForValue(this.ticks[c].value)),
          d.showLabelBackdrop)
        ) {
          (t.font = p.string),
            (a = t.measureText(u.label).width),
            (t.fillStyle = d.backdropColor);
          const g = be(d.backdropPadding);
          t.fillRect(
            -a / 2 - g.left,
            -s - p.size / 2 - g.top,
            a + g.width,
            p.size + g.height
          );
        }
        hr(t, u.label, 0, -s, p, { color: d.color });
      }),
      t.restore();
  }
  drawTitle() {}
}
pu.id = "radialLinear";
pu.defaults = {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0,
  },
  grid: { circular: !1 },
  startAngle: 0,
  ticks: { showLabelBackdrop: !0, callback: du.formatters.numeric },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: { size: 10 },
    callback(e) {
      return e;
    },
    padding: 5,
    centerPointLabels: !1,
  },
};
pu.defaultRoutes = {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color",
};
pu.descriptors = { angleLines: { _fallback: "grid" } };
const mu = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Me = Object.keys(mu);
function IL(e, t) {
  return e - t;
}
function jg(e, t) {
  if (Ct(t)) return null;
  const n = e._adapter,
    { parser: i, round: r, isoWeekday: s } = e._parseOpts;
  let a = t;
  return (
    typeof i == "function" && (a = i(a)),
    pe(a) || (a = typeof i == "string" ? n.parse(a, i) : n.parse(a)),
    a === null
      ? null
      : (r &&
          (a =
            r === "week" && (oo(s) || s === !0)
              ? n.startOf(a, "isoWeek", s)
              : n.startOf(a, r)),
        +a)
  );
}
function Wg(e, t, n, i) {
  const r = Me.length;
  for (let s = Me.indexOf(e); s < r - 1; ++s) {
    const a = mu[Me[s]],
      u = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
    if (a.common && Math.ceil((n - t) / (u * a.size)) <= i) return Me[s];
  }
  return Me[r - 1];
}
function NL(e, t, n, i, r) {
  for (let s = Me.length - 1; s >= Me.indexOf(n); s--) {
    const a = Me[s];
    if (mu[a].common && e._adapter.diff(r, i, a) >= t - 1) return a;
  }
  return Me[n ? Me.indexOf(n) : 0];
}
function BL(e) {
  for (let t = Me.indexOf(e) + 1, n = Me.length; t < n; ++t)
    if (mu[Me[t]].common) return Me[t];
}
function Hg(e, t, n) {
  if (!n) e[t] = !0;
  else if (n.length) {
    const { lo: i, hi: r } = Vd(n, t),
      s = n[i] >= t ? n[i] : n[r];
    e[s] = !0;
  }
}
function FL(e, t, n, i) {
  const r = e._adapter,
    s = +r.startOf(t[0].value, i),
    a = t[t.length - 1].value;
  let u, c;
  for (u = s; u <= a; u = +r.add(u, 1, i))
    (c = n[u]), c >= 0 && (t[c].major = !0);
  return t;
}
function Vg(e, t, n) {
  const i = [],
    r = {},
    s = t.length;
  let a, u;
  for (a = 0; a < s; ++a)
    (u = t[a]), (r[u] = a), i.push({ value: u, major: !1 });
  return s === 0 || !n ? i : FL(e, i, r, n);
}
class gu extends pr {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, n) {
    const i = t.time || (t.time = {}),
      r = (this._adapter = new qk._date(t.adapters.date));
    r.init(n),
      ls(i.displayFormats, r.formats()),
      (this._parseOpts = {
        parser: i.parser,
        round: i.round,
        isoWeekday: i.isoWeekday,
      }),
      super.init(t),
      (this._normalized = n.normalized);
  }
  parse(t, n) {
    return t === void 0 ? null : jg(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      n = this._adapter,
      i = t.time.unit || "day";
    let { min: r, max: s, minDefined: a, maxDefined: u } = this.getUserBounds();
    function c(d) {
      !a && !isNaN(d.min) && (r = Math.min(r, d.min)),
        !u && !isNaN(d.max) && (s = Math.max(s, d.max));
    }
    (!a || !u) &&
      (c(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        c(this.getMinMax(!1))),
      (r = pe(r) && !isNaN(r) ? r : +n.startOf(Date.now(), i)),
      (s = pe(s) && !isNaN(s) ? s : +n.endOf(Date.now(), i) + 1),
      (this.min = Math.min(r, s - 1)),
      (this.max = Math.max(r + 1, s));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY;
    return t.length && ((n = t[0]), (i = t[t.length - 1])), { min: n, max: i };
  }
  buildTicks() {
    const t = this.options,
      n = t.time,
      i = t.ticks,
      r = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      r.length &&
      ((this.min = this._userMin || r[0]),
      (this.max = this._userMax || r[r.length - 1]));
    const s = this.min,
      a = this.max,
      u = jS(r, s, a);
    return (
      (this._unit =
        n.unit ||
        (i.autoSkip
          ? Wg(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
          : NL(this, u.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !i.major.enabled || this._unit === "year" ? void 0 : BL(this._unit)),
      this.initOffsets(r),
      t.reverse && u.reverse(),
      Vg(this, u, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t) {
    let n = 0,
      i = 0,
      r,
      s;
    this.options.offset &&
      t.length &&
      ((r = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (n = 1 - r)
        : (n = (this.getDecimalForValue(t[1]) - r) / 2),
      (s = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (i = s)
        : (i = (s - this.getDecimalForValue(t[t.length - 2])) / 2));
    const a = t.length < 3 ? 0.5 : 0.25;
    (n = xe(n, 0, a)),
      (i = xe(i, 0, a)),
      (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) });
  }
  _generate() {
    const t = this._adapter,
      n = this.min,
      i = this.max,
      r = this.options,
      s = r.time,
      a = s.unit || Wg(s.minUnit, n, i, this._getLabelCapacity(n)),
      u = ht(s.stepSize, 1),
      c = a === "week" ? s.isoWeekday : !1,
      d = oo(c) || c === !0,
      p = {};
    let g = n,
      m,
      v;
    if (
      (d && (g = +t.startOf(g, "isoWeek", c)),
      (g = +t.startOf(g, d ? "day" : a)),
      t.diff(i, n, a) > 1e5 * u)
    )
      throw new Error(
        n + " and " + i + " are too far apart with stepSize of " + u + " " + a
      );
    const y = r.ticks.source === "data" && this.getDataTimestamps();
    for (m = g, v = 0; m < i; m = +t.add(m, u, a), v++) Hg(p, m, y);
    return (
      (m === i || r.bounds === "ticks" || v === 1) && Hg(p, m, y),
      Object.keys(p)
        .sort((S, M) => S - M)
        .map((S) => +S)
    );
  }
  getLabelForValue(t) {
    const n = this._adapter,
      i = this.options.time;
    return i.tooltipFormat
      ? n.format(t, i.tooltipFormat)
      : n.format(t, i.displayFormats.datetime);
  }
  _tickFormatFunction(t, n, i, r) {
    const s = this.options,
      a = s.time.displayFormats,
      u = this._unit,
      c = this._majorUnit,
      d = u && a[u],
      p = c && a[c],
      g = i[n],
      m = c && p && g && g.major,
      v = this._adapter.format(t, r || (m ? p : d)),
      y = s.ticks.callback;
    return y ? At(y, [v, n, i], this) : v;
  }
  generateTickLabels(t) {
    let n, i, r;
    for (n = 0, i = t.length; n < i; ++n)
      (r = t[n]), (r.label = this._tickFormatFunction(r.value, n, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets,
      i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + i) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks,
      i = this.ctx.measureText(t).width,
      r = hn(this.isHorizontal() ? n.maxRotation : n.minRotation),
      s = Math.cos(r),
      a = Math.sin(r),
      u = this._resolveTickFontOptions(0).size;
    return { w: i * s + u * a, h: i * a + u * s };
  }
  _getLabelCapacity(t) {
    const n = this.options.time,
      i = n.displayFormats,
      r = i[n.unit] || i.millisecond,
      s = this._tickFormatFunction(t, 0, Vg(this, [t], this._majorUnit), r),
      a = this._getLabelSize(s),
      u =
        Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) -
        1;
    return u > 0 ? u : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      n,
      i;
    if (t.length) return t;
    const r = this.getMatchingVisibleMetas();
    if (this._normalized && r.length)
      return (this._cache.data = r[0].controller.getAllParsedValues(this));
    for (n = 0, i = r.length; n < i; ++n)
      t = t.concat(r[n].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, i;
    if (t.length) return t;
    const r = this.getLabels();
    for (n = 0, i = r.length; n < i; ++n) t.push(jg(this, r[n]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return by(t.sort(IL));
  }
}
gu.id = "time";
gu.defaults = {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {},
  },
  ticks: { source: "auto", major: { enabled: !1 } },
};
function Xa(e, t, n) {
  let i = 0,
    r = e.length - 1,
    s,
    a,
    u,
    c;
  n
    ? (t >= e[i].pos && t <= e[r].pos && ({ lo: i, hi: r } = Ji(e, "pos", t)),
      ({ pos: s, time: u } = e[i]),
      ({ pos: a, time: c } = e[r]))
    : (t >= e[i].time &&
        t <= e[r].time &&
        ({ lo: i, hi: r } = Ji(e, "time", t)),
      ({ time: s, pos: u } = e[i]),
      ({ time: a, pos: c } = e[r]));
  const d = a - s;
  return d ? u + ((c - u) * (t - s)) / d : u;
}
class d0 extends gu {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(t));
    (this._minPos = Xa(n, this.min)),
      (this._tableRange = Xa(n, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: i } = this,
      r = [],
      s = [];
    let a, u, c, d, p;
    for (a = 0, u = t.length; a < u; ++a)
      (d = t[a]), d >= n && d <= i && r.push(d);
    if (r.length < 2)
      return [
        { time: n, pos: 0 },
        { time: i, pos: 1 },
      ];
    for (a = 0, u = r.length; a < u; ++a)
      (p = r[a + 1]),
        (c = r[a - 1]),
        (d = r[a]),
        Math.round((p + c) / 2) !== d && s.push({ time: d, pos: a / (u - 1) });
    return s;
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const n = this.getDataTimestamps(),
      i = this.getLabelTimestamps();
    return (
      n.length && i.length
        ? (t = this.normalize(n.concat(i)))
        : (t = n.length ? n : i),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (Xa(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end;
    return Xa(this._table, i * this._tableRange + this._minPos, !0);
  }
}
d0.id = "timeseries";
d0.defaults = gu.defaults;
const f0 = "label";
function Zg(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function jL(e, t) {
  Object.assign(e.options, t);
}
function p0(e, t) {
  e.labels = t;
}
function m0(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : f0;
  const i = [];
  e.datasets = t.map((r) => {
    const s = e.datasets.find((a) => a[n] === r[n]);
    return !s || !r.data || i.includes(s)
      ? { ...r }
      : (i.push(s), Object.assign(s, r), s);
  });
}
function WL(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f0;
  const n = { labels: [], datasets: [] };
  return p0(n, e.labels), m0(n, e.datasets, t), n;
}
function HL(e, t) {
  let {
    height: n = 150,
    width: i = 300,
    redraw: r = !1,
    datasetIdKey: s,
    type: a,
    data: u,
    options: c,
    plugins: d = [],
    fallbackContent: p,
    updateMode: g,
    ...m
  } = e;
  const v = A.exports.useRef(null),
    y = A.exports.useRef(),
    S = () => {
      !v.current ||
        ((y.current = new Gs(v.current, {
          type: a,
          data: WL(u, s),
          options: c && { ...c },
          plugins: d,
        })),
        Zg(t, y.current));
    },
    M = () => {
      Zg(t, null), y.current && (y.current.destroy(), (y.current = null));
    };
  return (
    A.exports.useEffect(() => {
      !r && y.current && c && jL(y.current, c);
    }, [r, c]),
    A.exports.useEffect(() => {
      !r && y.current && p0(y.current.config.data, u.labels);
    }, [r, u.labels]),
    A.exports.useEffect(() => {
      !r && y.current && u.datasets && m0(y.current.config.data, u.datasets, s);
    }, [r, u.datasets]),
    A.exports.useEffect(() => {
      !y.current || (r ? (M(), setTimeout(S)) : y.current.update(g));
    }, [r, c, u.labels, u.datasets, g]),
    A.exports.useEffect(() => {
      !y.current || (M(), setTimeout(S));
    }, [a]),
    A.exports.useEffect(() => (S(), () => M()), []),
    B("canvas", {
      ...Object.assign({ ref: v, role: "img", height: n, width: i }, m),
      children: p,
    })
  );
}
const VL = A.exports.forwardRef(HL);
function ZL(e, t) {
  return (
    Gs.register(t),
    A.exports.forwardRef((n, i) =>
      B(VL, { ...Object.assign({}, n, { ref: i, type: e }) })
    )
  );
}
const UL = ZL("line", hu),
  g0 = ({ code: e, exam: t }) => {
    const [n, i] = A.exports.useState({}),
      [r, { data: s }] = Vs("diploma_information_by_school.json");
    return (
      A.exports.useEffect(() => {
        r();
      }, []),
      A.exports.useEffect(() => {
        if (!e || !t) {
          i({});
          return;
        }
        const a = s[e][t];
        i(
          Object.entries(a).reduce(
            (u, [c, d]) => ((u[c] = d === "" ? void 0 : d), u),
            {}
          )
        );
      }, [e, t]),
      B(Tn, {
        children: B(UL, {
          data: {
            labels: Object.keys(n),
            datasets: [
              {
                label: "Exam Results",
                data: Object.values(n).map((a) => Number(a)),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          },
          options: { responsive: !0 },
        }),
      })
    );
  },
  $L = () => {
    const e = A.exports.useContext(Hs),
      [t, { data: n }] = Vs("diploma_information_by_school.json"),
      [i, r] = A.exports.useState([]),
      [s, a] = A.exports.useState(""),
      [u, c] = A.exports.useState([]),
      [d, p] = A.exports.useState("");
    return (
      A.exports.useEffect(() => {
        !e ||
          !n ||
          r(
            Object.keys(n)
              .map((g) => {
                const m = e[g],
                  v = m ? m.schoolName : void 0;
                return { code: g, name: v };
              })
              .filter((g) => !!g.name)
          );
      }, [e, n]),
      A.exports.useEffect(() => {
        if (!s) {
          c([]);
          return;
        }
        const g = n[s];
        if (!g) {
          c([]);
          return;
        }
        console.log({ schoolInfo: g }),
          c(
            Object.entries(g)
              .filter((m) => {
                const [v, y] = m;
                return !Object.values(y).every((S) => S === "");
              })
              .map(([m, v]) => m)
          );
      }, [s]),
      A.exports.useEffect(() => {
        (async () => t())();
      }, []),
      !e || !n
        ? null
        : vt(Tn, {
            children: [
              B("h2", { children: "Diploma Exam Results" }),
              vt("label", {
                children: [
                  "Choose School ",
                  B("br", {}),
                  vt("select", {
                    name: "school",
                    id: "school",
                    onChange: (g) => {
                      p(""), a(g.target.value);
                    },
                    value: s,
                    children: [
                      B("option", { value: "", children: "None" }, "null"),
                      i.map((g) =>
                        B("option", { value: g.code, children: g.name }, g.code)
                      ),
                    ],
                  }),
                ],
              }),
              B("br", {}),
              vt("label", {
                children: [
                  "Choose Exam ",
                  B("br", {}),
                  vt("select", {
                    id: "exam",
                    name: "exam",
                    onChange: (g) => {
                      p(g.target.value);
                    },
                    value: d,
                    children: [
                      B("option", { value: "", children: "None" }, "null"),
                      u.map((g) => B("option", { value: g, children: g }, g)),
                    ],
                  }),
                ],
              }),
              B(g0, { code: s, exam: d }),
            ],
          })
    );
  },
  YL = () =>
    vt(Tn, {
      children: [
        B("h2", { children: "Academics" }),
        vt("section", {
          children: [B("h3", { children: "Diploma Exam Results" }), B($L, {})],
        }),
        vt("section", {
          children: [
            B("h3", { children: "Provincial Achievement Results" }),
            B("p", { children: "No provincial achievement results found" }),
          ],
        }),
      ],
    }),
  KL = () => {
    const e = A.exports.useContext(Hs),
      { id: t } = rS(),
      [n, { data: i }] = Vs("diploma_information_by_school.json"),
      [r, s] = A.exports.useState(),
      [a, u] = A.exports.useState([]),
      [c, d] = A.exports.useState([]),
      [p, g] = A.exports.useState("");
    return (
      A.exports.useEffect(() => {
        if (e && t) {
          const m = Object.entries(e).find(([v, y]) => v === t);
          if (m) {
            const [v, y] = m;
            s(y);
          }
        }
      }, [e, t]),
      A.exports.useEffect(() => {
        r &&
          u([
            [
              "Address",
              [
                r.schoolAddress1,
                r.schoolAddress2,
                r.schoolCity,
                r.schoolProvince,
                r.schoolPostalCode,
              ].join(", "),
            ],
            [
              "Phone Number",
              r.schoolPhone
                ? B("a", {
                    href: `tel:${r.schoolPhone}`,
                    children: r.schoolPhone,
                  })
                : void 0,
            ],
          ]);
      }, [r]),
      A.exports.useEffect(() => {
        if (!t || !i) {
          d([]);
          return;
        }
        const m = i[t];
        if (!m) {
          d([]);
          return;
        }
        d(
          Object.entries(m)
            .filter((v) => {
              const [y, S] = v;
              return !Object.values(S).every((M) => M === "");
            })
            .map(([v, y]) => v)
        );
      }, [t, i]),
      A.exports.useEffect(() => {
        n();
      }, []),
      r
        ? vt(Tn, {
            children: [
              B("h2", { children: r.schoolName }),
              vt("section", {
                id: "basicInformation",
                children: [
                  B("h3", { children: "Basic Information" }),
                  B("ul", {
                    children: a
                      .filter(([m, v]) => !!v)
                      .map(([m, v]) =>
                        vt(
                          "li",
                          {
                            children: [
                              B("span", { className: "label", children: m }),
                              ":",
                              " ",
                              B("span", { className: "info", children: v }),
                            ],
                          },
                          m
                        )
                      ),
                  }),
                ],
              }),
              vt("section", {
                children: [
                  B("h3", { children: "Academics" }),
                  vt("section", {
                    children: [
                      B("h4", { children: "Diploma Exam Results" }),
                      c.length > 0
                        ? vt(Tn, {
                            children: [
                              vt("label", {
                                children: [
                                  "Choose Exam ",
                                  B("br", {}),
                                  vt("select", {
                                    id: "exam",
                                    name: "exam",
                                    onChange: (m) => {
                                      g(m.target.value);
                                    },
                                    value: p,
                                    children: [
                                      B(
                                        "option",
                                        { value: "", children: "None" },
                                        "null"
                                      ),
                                      c.map((m) =>
                                        B(
                                          "option",
                                          { value: m, children: m },
                                          m
                                        )
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                              B(g0, { code: t, exam: p }),
                            ],
                          })
                        : B("p", {
                            children: "No Diploma Exam Information Found",
                          }),
                    ],
                  }),
                ],
              }),
              vt("section", {
                children: [
                  B("h3", { children: "Athletics" }),
                  B("p", { children: "No athletic information found" }),
                ],
              }),
              vt("section", {
                children: [
                  B("h3", { children: "Accessibility" }),
                  B("p", { children: "No accessibility information found" }),
                ],
              }),
            ],
          })
        : B("h2", { children: "No Information Found" })
    );
  };
const XL = () =>
  vt("div", {
    children: [
      B("h2", { children: "Home" }),
      B("p", {
        children:
          "This is the homepage for the Alberta School Explorer! Choose an option on the left.",
      }),
    ],
  });
const GL = () => {
  const e = A.exports.useContext(Hs),
    t = dy();
  return e
    ? vt(Tn, {
        children: [
          B("h2", { children: "Basic School Information" }),
          vt("table", {
            children: [
              B("thead", {
                children: B("tr", {
                  children: [
                    "Name",
                    "Address 1",
                    "Address 2",
                    "City",
                    "Province",
                    "Postal Code",
                    "Phone",
                  ].map((n) => B("th", { children: n })),
                }),
              }),
              B("tbody", {
                children: Object.entries(e).map(
                  ([
                    n,
                    {
                      schoolName: i,
                      schoolAddress1: r,
                      schoolAddress2: s,
                      schoolCity: a,
                      schoolProvince: u,
                      schoolPostalCode: c,
                      schoolPhone: d,
                    },
                  ]) =>
                    vt("tr", {
                      onClick: () => t(`${n}`),
                      children: [
                        B("td", { children: i }),
                        B("td", { children: r }),
                        B("td", { children: s }),
                        B("td", { children: a }),
                        B("td", { children: u }),
                        B("td", { children: c }),
                        B("td", { children: d }),
                      ],
                    })
                ),
              }),
            ],
          }),
        ],
      })
    : vt(Tn, {
        children: [
          B("h2", { children: "Basic School Information" }),
          B("p", { children: "No school information found" }),
        ],
      });
};
function _0(e, t) {
  const n = A.exports.useRef(t);
  A.exports.useEffect(
    function () {
      t !== n.current &&
        e.attributionControl != null &&
        (n.current != null && e.attributionControl.removeAttribution(n.current),
        t != null && e.attributionControl.addAttribution(t)),
        (n.current = t);
    },
    [e, t]
  );
}
const QL = 1;
function qL(e) {
  return Object.freeze({ __version: QL, map: e });
}
function JL(e, t) {
  return Object.freeze({ ...e, ...t });
}
const v0 = A.exports.createContext(null),
  y0 = v0.Provider;
function x0() {
  const e = A.exports.useContext(v0);
  if (e == null)
    throw new Error(
      "No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>"
    );
  return e;
}
function tM(e) {
  function t(n, i) {
    const { instance: r, context: s } = e(n).current;
    return (
      A.exports.useImperativeHandle(i, () => r),
      n.children == null ? null : B(y0, { value: s, children: n.children })
    );
  }
  return A.exports.forwardRef(t);
}
function eM(e) {
  function t(n, i) {
    const [r, s] = A.exports.useState(!1),
      { instance: a } = e(n, s).current;
    A.exports.useImperativeHandle(i, () => a),
      A.exports.useEffect(
        function () {
          r && a.update();
        },
        [a, r, n.children]
      );
    const u = a._contentNode;
    return u ? Uh.exports.createPortal(n.children, u) : null;
  }
  return A.exports.forwardRef(t);
}
function nM(e) {
  function t(n, i) {
    const { instance: r } = e(n).current;
    return A.exports.useImperativeHandle(i, () => r), null;
  }
  return A.exports.forwardRef(t);
}
function w0(e, t) {
  const n = A.exports.useRef();
  A.exports.useEffect(
    function () {
      return (
        t != null && e.instance.on(t),
        (n.current = t),
        function () {
          n.current != null && e.instance.off(n.current), (n.current = null);
        }
      );
    },
    [e, t]
  );
}
function cf(e, t) {
  var i;
  const n = (i = e.pane) != null ? i : t.pane;
  return n ? { ...e, pane: n } : e;
}
function iM(e, t) {
  return function (i, r) {
    const s = x0(),
      a = e(cf(i, s), s);
    return (
      _0(s.map, i.attribution),
      w0(a.current, i.eventHandlers),
      t(a.current, s, i, r),
      a
    );
  };
}
var lo = { exports: {} };
/* @preserve
 * Leaflet 1.9.2, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function (e, t) {
  (function (n, i) {
    i(t);
  })(zx, function (n) {
    var i = "1.9.2";
    function r(o) {
      var l, h, f, _;
      for (h = 1, f = arguments.length; h < f; h++) {
        _ = arguments[h];
        for (l in _) o[l] = _[l];
      }
      return o;
    }
    var s =
      Object.create ||
      (function () {
        function o() {}
        return function (l) {
          return (o.prototype = l), new o();
        };
      })();
    function a(o, l) {
      var h = Array.prototype.slice;
      if (o.bind) return o.bind.apply(o, h.call(arguments, 1));
      var f = h.call(arguments, 2);
      return function () {
        return o.apply(l, f.length ? f.concat(h.call(arguments)) : arguments);
      };
    }
    var u = 0;
    function c(o) {
      return "_leaflet_id" in o || (o._leaflet_id = ++u), o._leaflet_id;
    }
    function d(o, l, h) {
      var f, _, x, k;
      return (
        (k = function () {
          (f = !1), _ && (x.apply(h, _), (_ = !1));
        }),
        (x = function () {
          f
            ? (_ = arguments)
            : (o.apply(h, arguments), setTimeout(k, l), (f = !0));
        }),
        x
      );
    }
    function p(o, l, h) {
      var f = l[1],
        _ = l[0],
        x = f - _;
      return o === f && h ? o : ((((o - _) % x) + x) % x) + _;
    }
    function g() {
      return !1;
    }
    function m(o, l) {
      if (l === !1) return o;
      var h = Math.pow(10, l === void 0 ? 6 : l);
      return Math.round(o * h) / h;
    }
    function v(o) {
      return o.trim ? o.trim() : o.replace(/^\s+|\s+$/g, "");
    }
    function y(o) {
      return v(o).split(/\s+/);
    }
    function S(o, l) {
      Object.prototype.hasOwnProperty.call(o, "options") ||
        (o.options = o.options ? s(o.options) : {});
      for (var h in l) o.options[h] = l[h];
      return o.options;
    }
    function M(o, l, h) {
      var f = [];
      for (var _ in o)
        f.push(
          encodeURIComponent(h ? _.toUpperCase() : _) +
            "=" +
            encodeURIComponent(o[_])
        );
      return (!l || l.indexOf("?") === -1 ? "?" : "&") + f.join("&");
    }
    var w = /\{ *([\w_ -]+) *\}/g;
    function b(o, l) {
      return o.replace(w, function (h, f) {
        var _ = l[f];
        if (_ === void 0)
          throw new Error("No value provided for variable " + h);
        return typeof _ == "function" && (_ = _(l)), _;
      });
    }
    var P =
      Array.isArray ||
      function (o) {
        return Object.prototype.toString.call(o) === "[object Array]";
      };
    function C(o, l) {
      for (var h = 0; h < o.length; h++) if (o[h] === l) return h;
      return -1;
    }
    var E = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function R(o) {
      return window["webkit" + o] || window["moz" + o] || window["ms" + o];
    }
    var D = 0;
    function N(o) {
      var l = +new Date(),
        h = Math.max(0, 16 - (l - D));
      return (D = l + h), window.setTimeout(o, h);
    }
    var V = window.requestAnimationFrame || R("RequestAnimationFrame") || N,
      Z =
        window.cancelAnimationFrame ||
        R("CancelAnimationFrame") ||
        R("CancelRequestAnimationFrame") ||
        function (o) {
          window.clearTimeout(o);
        };
    function K(o, l, h) {
      if (h && V === N) o.call(l);
      else return V.call(window, a(o, l));
    }
    function X(o) {
      o && Z.call(window, o);
    }
    var Pt = {
      __proto__: null,
      extend: r,
      create: s,
      bind: a,
      get lastId() {
        return u;
      },
      stamp: c,
      throttle: d,
      wrapNum: p,
      falseFn: g,
      formatNum: m,
      trim: v,
      splitWords: y,
      setOptions: S,
      getParamString: M,
      template: b,
      isArray: P,
      indexOf: C,
      emptyImageUrl: E,
      requestFn: V,
      cancelFn: Z,
      requestAnimFrame: K,
      cancelAnimFrame: X,
    };
    function rt() {}
    (rt.extend = function (o) {
      var l = function () {
          S(this),
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks();
        },
        h = (l.__super__ = this.prototype),
        f = s(h);
      (f.constructor = l), (l.prototype = f);
      for (var _ in this)
        Object.prototype.hasOwnProperty.call(this, _) &&
          _ !== "prototype" &&
          _ !== "__super__" &&
          (l[_] = this[_]);
      return (
        o.statics && r(l, o.statics),
        o.includes && (q(o.includes), r.apply(null, [f].concat(o.includes))),
        r(f, o),
        delete f.statics,
        delete f.includes,
        f.options &&
          ((f.options = h.options ? s(h.options) : {}),
          r(f.options, o.options)),
        (f._initHooks = []),
        (f.callInitHooks = function () {
          if (!this._initHooksCalled) {
            h.callInitHooks && h.callInitHooks.call(this),
              (this._initHooksCalled = !0);
            for (var x = 0, k = f._initHooks.length; x < k; x++)
              f._initHooks[x].call(this);
          }
        }),
        l
      );
    }),
      (rt.include = function (o) {
        var l = this.prototype.options;
        return (
          r(this.prototype, o),
          o.options &&
            ((this.prototype.options = l), this.mergeOptions(o.options)),
          this
        );
      }),
      (rt.mergeOptions = function (o) {
        return r(this.prototype.options, o), this;
      }),
      (rt.addInitHook = function (o) {
        var l = Array.prototype.slice.call(arguments, 1),
          h =
            typeof o == "function"
              ? o
              : function () {
                  this[o].apply(this, l);
                };
        return (
          (this.prototype._initHooks = this.prototype._initHooks || []),
          this.prototype._initHooks.push(h),
          this
        );
      });
    function q(o) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        o = P(o) ? o : [o];
        for (var l = 0; l < o.length; l++)
          o[l] === L.Mixin.Events &&
            console.warn(
              "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
              new Error().stack
            );
      }
    }
    var ut = {
      on: function (o, l, h) {
        if (typeof o == "object") for (var f in o) this._on(f, o[f], l);
        else {
          o = y(o);
          for (var _ = 0, x = o.length; _ < x; _++) this._on(o[_], l, h);
        }
        return this;
      },
      off: function (o, l, h) {
        if (!arguments.length) delete this._events;
        else if (typeof o == "object") for (var f in o) this._off(f, o[f], l);
        else {
          o = y(o);
          for (var _ = arguments.length === 1, x = 0, k = o.length; x < k; x++)
            _ ? this._off(o[x]) : this._off(o[x], l, h);
        }
        return this;
      },
      _on: function (o, l, h, f) {
        if (typeof l != "function") {
          console.warn("wrong listener type: " + typeof l);
          return;
        }
        if (this._listens(o, l, h) === !1) {
          h === this && (h = void 0);
          var _ = { fn: l, ctx: h };
          f && (_.once = !0),
            (this._events = this._events || {}),
            (this._events[o] = this._events[o] || []),
            this._events[o].push(_);
        }
      },
      _off: function (o, l, h) {
        var f, _, x;
        if (!!this._events && ((f = this._events[o]), !!f)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (_ = 0, x = f.length; _ < x; _++) f[_].fn = g;
            delete this._events[o];
            return;
          }
          if (typeof l != "function") {
            console.warn("wrong listener type: " + typeof l);
            return;
          }
          var k = this._listens(o, l, h);
          if (k !== !1) {
            var T = f[k];
            this._firingCount &&
              ((T.fn = g), (this._events[o] = f = f.slice())),
              f.splice(k, 1);
          }
        }
      },
      fire: function (o, l, h) {
        if (!this.listens(o, h)) return this;
        var f = r({}, l, {
          type: o,
          target: this,
          sourceTarget: (l && l.sourceTarget) || this,
        });
        if (this._events) {
          var _ = this._events[o];
          if (_) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var x = 0, k = _.length; x < k; x++) {
              var T = _[x],
                O = T.fn;
              T.once && this.off(o, O, T.ctx), O.call(T.ctx || this, f);
            }
            this._firingCount--;
          }
        }
        return h && this._propagateEvent(f), this;
      },
      listens: function (o, l, h, f) {
        typeof o != "string" && console.warn('"string" type argument expected');
        var _ = l;
        typeof l != "function" && ((f = !!l), (_ = void 0), (h = void 0));
        var x = this._events && this._events[o];
        if (x && x.length && this._listens(o, _, h) !== !1) return !0;
        if (f) {
          for (var k in this._eventParents)
            if (this._eventParents[k].listens(o, l, h, f)) return !0;
        }
        return !1;
      },
      _listens: function (o, l, h) {
        if (!this._events) return !1;
        var f = this._events[o] || [];
        if (!l) return !!f.length;
        h === this && (h = void 0);
        for (var _ = 0, x = f.length; _ < x; _++)
          if (f[_].fn === l && f[_].ctx === h) return _;
        return !1;
      },
      once: function (o, l, h) {
        if (typeof o == "object") for (var f in o) this._on(f, o[f], l, !0);
        else {
          o = y(o);
          for (var _ = 0, x = o.length; _ < x; _++) this._on(o[_], l, h, !0);
        }
        return this;
      },
      addEventParent: function (o) {
        return (
          (this._eventParents = this._eventParents || {}),
          (this._eventParents[c(o)] = o),
          this
        );
      },
      removeEventParent: function (o) {
        return this._eventParents && delete this._eventParents[c(o)], this;
      },
      _propagateEvent: function (o) {
        for (var l in this._eventParents)
          this._eventParents[l].fire(
            o.type,
            r({ layer: o.target, propagatedFrom: o.target }, o),
            !0
          );
      },
    };
    (ut.addEventListener = ut.on),
      (ut.removeEventListener = ut.clearAllEventListeners = ut.off),
      (ut.addOneTimeEventListener = ut.once),
      (ut.fireEvent = ut.fire),
      (ut.hasEventListeners = ut.listens);
    var _t = rt.extend(ut);
    function z(o, l, h) {
      (this.x = h ? Math.round(o) : o), (this.y = h ? Math.round(l) : l);
    }
    var J =
      Math.trunc ||
      function (o) {
        return o > 0 ? Math.floor(o) : Math.ceil(o);
      };
    z.prototype = {
      clone: function () {
        return new z(this.x, this.y);
      },
      add: function (o) {
        return this.clone()._add(W(o));
      },
      _add: function (o) {
        return (this.x += o.x), (this.y += o.y), this;
      },
      subtract: function (o) {
        return this.clone()._subtract(W(o));
      },
      _subtract: function (o) {
        return (this.x -= o.x), (this.y -= o.y), this;
      },
      divideBy: function (o) {
        return this.clone()._divideBy(o);
      },
      _divideBy: function (o) {
        return (this.x /= o), (this.y /= o), this;
      },
      multiplyBy: function (o) {
        return this.clone()._multiplyBy(o);
      },
      _multiplyBy: function (o) {
        return (this.x *= o), (this.y *= o), this;
      },
      scaleBy: function (o) {
        return new z(this.x * o.x, this.y * o.y);
      },
      unscaleBy: function (o) {
        return new z(this.x / o.x, this.y / o.y);
      },
      round: function () {
        return this.clone()._round();
      },
      _round: function () {
        return (
          (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
        );
      },
      floor: function () {
        return this.clone()._floor();
      },
      _floor: function () {
        return (
          (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
        );
      },
      ceil: function () {
        return this.clone()._ceil();
      },
      _ceil: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      trunc: function () {
        return this.clone()._trunc();
      },
      _trunc: function () {
        return (this.x = J(this.x)), (this.y = J(this.y)), this;
      },
      distanceTo: function (o) {
        o = W(o);
        var l = o.x - this.x,
          h = o.y - this.y;
        return Math.sqrt(l * l + h * h);
      },
      equals: function (o) {
        return (o = W(o)), o.x === this.x && o.y === this.y;
      },
      contains: function (o) {
        return (
          (o = W(o)),
          Math.abs(o.x) <= Math.abs(this.x) && Math.abs(o.y) <= Math.abs(this.y)
        );
      },
      toString: function () {
        return "Point(" + m(this.x) + ", " + m(this.y) + ")";
      },
    };
    function W(o, l, h) {
      return o instanceof z
        ? o
        : P(o)
        ? new z(o[0], o[1])
        : o == null
        ? o
        : typeof o == "object" && "x" in o && "y" in o
        ? new z(o.x, o.y)
        : new z(o, l, h);
    }
    function Q(o, l) {
      if (!!o)
        for (var h = l ? [o, l] : o, f = 0, _ = h.length; f < _; f++)
          this.extend(h[f]);
    }
    Q.prototype = {
      extend: function (o) {
        var l, h;
        if (!o) return this;
        if (o instanceof z || typeof o[0] == "number" || "x" in o) l = h = W(o);
        else if (((o = ot(o)), (l = o.min), (h = o.max), !l || !h)) return this;
        return (
          !this.min && !this.max
            ? ((this.min = l.clone()), (this.max = h.clone()))
            : ((this.min.x = Math.min(l.x, this.min.x)),
              (this.max.x = Math.max(h.x, this.max.x)),
              (this.min.y = Math.min(l.y, this.min.y)),
              (this.max.y = Math.max(h.y, this.max.y))),
          this
        );
      },
      getCenter: function (o) {
        return W(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          o
        );
      },
      getBottomLeft: function () {
        return W(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return W(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (o) {
        var l, h;
        return (
          typeof o[0] == "number" || o instanceof z ? (o = W(o)) : (o = ot(o)),
          o instanceof Q ? ((l = o.min), (h = o.max)) : (l = h = o),
          l.x >= this.min.x &&
            h.x <= this.max.x &&
            l.y >= this.min.y &&
            h.y <= this.max.y
        );
      },
      intersects: function (o) {
        o = ot(o);
        var l = this.min,
          h = this.max,
          f = o.min,
          _ = o.max,
          x = _.x >= l.x && f.x <= h.x,
          k = _.y >= l.y && f.y <= h.y;
        return x && k;
      },
      overlaps: function (o) {
        o = ot(o);
        var l = this.min,
          h = this.max,
          f = o.min,
          _ = o.max,
          x = _.x > l.x && f.x < h.x,
          k = _.y > l.y && f.y < h.y;
        return x && k;
      },
      isValid: function () {
        return !!(this.min && this.max);
      },
      pad: function (o) {
        var l = this.min,
          h = this.max,
          f = Math.abs(l.x - h.x) * o,
          _ = Math.abs(l.y - h.y) * o;
        return ot(W(l.x - f, l.y - _), W(h.x + f, h.y + _));
      },
      equals: function (o) {
        return o
          ? ((o = ot(o)),
            this.min.equals(o.getTopLeft()) &&
              this.max.equals(o.getBottomRight()))
          : !1;
      },
    };
    function ot(o, l) {
      return !o || o instanceof Q ? o : new Q(o, l);
    }
    function Ot(o, l) {
      if (!!o)
        for (var h = l ? [o, l] : o, f = 0, _ = h.length; f < _; f++)
          this.extend(h[f]);
    }
    Ot.prototype = {
      extend: function (o) {
        var l = this._southWest,
          h = this._northEast,
          f,
          _;
        if (o instanceof at) (f = o), (_ = o);
        else if (o instanceof Ot) {
          if (((f = o._southWest), (_ = o._northEast), !f || !_)) return this;
        } else return o ? this.extend(lt(o) || wt(o)) : this;
        return (
          !l && !h
            ? ((this._southWest = new at(f.lat, f.lng)),
              (this._northEast = new at(_.lat, _.lng)))
            : ((l.lat = Math.min(f.lat, l.lat)),
              (l.lng = Math.min(f.lng, l.lng)),
              (h.lat = Math.max(_.lat, h.lat)),
              (h.lng = Math.max(_.lng, h.lng))),
          this
        );
      },
      pad: function (o) {
        var l = this._southWest,
          h = this._northEast,
          f = Math.abs(l.lat - h.lat) * o,
          _ = Math.abs(l.lng - h.lng) * o;
        return new Ot(
          new at(l.lat - f, l.lng - _),
          new at(h.lat + f, h.lng + _)
        );
      },
      getCenter: function () {
        return new at(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new at(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new at(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (o) {
        typeof o[0] == "number" || o instanceof at || "lat" in o
          ? (o = lt(o))
          : (o = wt(o));
        var l = this._southWest,
          h = this._northEast,
          f,
          _;
        return (
          o instanceof Ot
            ? ((f = o.getSouthWest()), (_ = o.getNorthEast()))
            : (f = _ = o),
          f.lat >= l.lat && _.lat <= h.lat && f.lng >= l.lng && _.lng <= h.lng
        );
      },
      intersects: function (o) {
        o = wt(o);
        var l = this._southWest,
          h = this._northEast,
          f = o.getSouthWest(),
          _ = o.getNorthEast(),
          x = _.lat >= l.lat && f.lat <= h.lat,
          k = _.lng >= l.lng && f.lng <= h.lng;
        return x && k;
      },
      overlaps: function (o) {
        o = wt(o);
        var l = this._southWest,
          h = this._northEast,
          f = o.getSouthWest(),
          _ = o.getNorthEast(),
          x = _.lat > l.lat && f.lat < h.lat,
          k = _.lng > l.lng && f.lng < h.lng;
        return x && k;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(",");
      },
      equals: function (o, l) {
        return o
          ? ((o = wt(o)),
            this._southWest.equals(o.getSouthWest(), l) &&
              this._northEast.equals(o.getNorthEast(), l))
          : !1;
      },
      isValid: function () {
        return !!(this._southWest && this._northEast);
      },
    };
    function wt(o, l) {
      return o instanceof Ot ? o : new Ot(o, l);
    }
    function at(o, l, h) {
      if (isNaN(o) || isNaN(l))
        throw new Error("Invalid LatLng object: (" + o + ", " + l + ")");
      (this.lat = +o), (this.lng = +l), h !== void 0 && (this.alt = +h);
    }
    at.prototype = {
      equals: function (o, l) {
        if (!o) return !1;
        o = lt(o);
        var h = Math.max(
          Math.abs(this.lat - o.lat),
          Math.abs(this.lng - o.lng)
        );
        return h <= (l === void 0 ? 1e-9 : l);
      },
      toString: function (o) {
        return "LatLng(" + m(this.lat, o) + ", " + m(this.lng, o) + ")";
      },
      distanceTo: function (o) {
        return je.distance(this, lt(o));
      },
      wrap: function () {
        return je.wrapLatLng(this);
      },
      toBounds: function (o) {
        var l = (180 * o) / 40075017,
          h = l / Math.cos((Math.PI / 180) * this.lat);
        return wt([this.lat - l, this.lng - h], [this.lat + l, this.lng + h]);
      },
      clone: function () {
        return new at(this.lat, this.lng, this.alt);
      },
    };
    function lt(o, l, h) {
      return o instanceof at
        ? o
        : P(o) && typeof o[0] != "object"
        ? o.length === 3
          ? new at(o[0], o[1], o[2])
          : o.length === 2
          ? new at(o[0], o[1])
          : null
        : o == null
        ? o
        : typeof o == "object" && "lat" in o
        ? new at(o.lat, "lng" in o ? o.lng : o.lon, o.alt)
        : l === void 0
        ? null
        : new at(o, l, h);
    }
    var oe = {
        latLngToPoint: function (o, l) {
          var h = this.projection.project(o),
            f = this.scale(l);
          return this.transformation._transform(h, f);
        },
        pointToLatLng: function (o, l) {
          var h = this.scale(l),
            f = this.transformation.untransform(o, h);
          return this.projection.unproject(f);
        },
        project: function (o) {
          return this.projection.project(o);
        },
        unproject: function (o) {
          return this.projection.unproject(o);
        },
        scale: function (o) {
          return 256 * Math.pow(2, o);
        },
        zoom: function (o) {
          return Math.log(o / 256) / Math.LN2;
        },
        getProjectedBounds: function (o) {
          if (this.infinite) return null;
          var l = this.projection.bounds,
            h = this.scale(o),
            f = this.transformation.transform(l.min, h),
            _ = this.transformation.transform(l.max, h);
          return new Q(f, _);
        },
        infinite: !1,
        wrapLatLng: function (o) {
          var l = this.wrapLng ? p(o.lng, this.wrapLng, !0) : o.lng,
            h = this.wrapLat ? p(o.lat, this.wrapLat, !0) : o.lat,
            f = o.alt;
          return new at(h, l, f);
        },
        wrapLatLngBounds: function (o) {
          var l = o.getCenter(),
            h = this.wrapLatLng(l),
            f = l.lat - h.lat,
            _ = l.lng - h.lng;
          if (f === 0 && _ === 0) return o;
          var x = o.getSouthWest(),
            k = o.getNorthEast(),
            T = new at(x.lat - f, x.lng - _),
            O = new at(k.lat - f, k.lng - _);
          return new Ot(T, O);
        },
      },
      je = r({}, oe, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (o, l) {
          var h = Math.PI / 180,
            f = o.lat * h,
            _ = l.lat * h,
            x = Math.sin(((l.lat - o.lat) * h) / 2),
            k = Math.sin(((l.lng - o.lng) * h) / 2),
            T = x * x + Math.cos(f) * Math.cos(_) * k * k,
            O = 2 * Math.atan2(Math.sqrt(T), Math.sqrt(1 - T));
          return this.R * O;
        },
      }),
      mr = 6378137,
      Jn = {
        R: mr,
        MAX_LATITUDE: 85.0511287798,
        project: function (o) {
          var l = Math.PI / 180,
            h = this.MAX_LATITUDE,
            f = Math.max(Math.min(h, o.lat), -h),
            _ = Math.sin(f * l);
          return new z(
            this.R * o.lng * l,
            (this.R * Math.log((1 + _) / (1 - _))) / 2
          );
        },
        unproject: function (o) {
          var l = 180 / Math.PI;
          return new at(
            (2 * Math.atan(Math.exp(o.y / this.R)) - Math.PI / 2) * l,
            (o.x * l) / this.R
          );
        },
        bounds: (function () {
          var o = mr * Math.PI;
          return new Q([-o, -o], [o, o]);
        })(),
      };
    function gr(o, l, h, f) {
      if (P(o)) {
        (this._a = o[0]), (this._b = o[1]), (this._c = o[2]), (this._d = o[3]);
        return;
      }
      (this._a = o), (this._b = l), (this._c = h), (this._d = f);
    }
    gr.prototype = {
      transform: function (o, l) {
        return this._transform(o.clone(), l);
      },
      _transform: function (o, l) {
        return (
          (l = l || 1),
          (o.x = l * (this._a * o.x + this._b)),
          (o.y = l * (this._c * o.y + this._d)),
          o
        );
      },
      untransform: function (o, l) {
        return (
          (l = l || 1),
          new z((o.x / l - this._b) / this._a, (o.y / l - this._d) / this._c)
        );
      },
    };
    function zi(o, l, h, f) {
      return new gr(o, l, h, f);
    }
    var _r = r({}, je, {
        code: "EPSG:3857",
        projection: Jn,
        transformation: (function () {
          var o = 0.5 / (Math.PI * Jn.R);
          return zi(o, 0.5, -o, 0.5);
        })(),
      }),
      po = r({}, _r, { code: "EPSG:900913" });
    function qs(o) {
      return document.createElementNS("http://www.w3.org/2000/svg", o);
    }
    function Js(o, l) {
      var h = "",
        f,
        _,
        x,
        k,
        T,
        O;
      for (f = 0, x = o.length; f < x; f++) {
        for (T = o[f], _ = 0, k = T.length; _ < k; _++)
          (O = T[_]), (h += (_ ? "L" : "M") + O.x + " " + O.y);
        h += l ? (G.svg ? "z" : "x") : "";
      }
      return h || "M0 0";
    }
    var vr = document.documentElement.style,
      I = "ActiveXObject" in window,
      H = I && !document.addEventListener,
      U = "msLaunchUri" in navigator && !("documentMode" in document),
      tt = vn("webkit"),
      nt = vn("android"),
      mt = vn("android 2") || vn("android 3"),
      St = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      Lt = nt && vn("Google") && St < 537 && !("AudioNode" in window),
      kt = !!window.opera,
      Mt = !U && vn("chrome"),
      Dt = vn("gecko") && !tt && !kt && !I,
      se = !Mt && vn("safari"),
      On = vn("phantom"),
      We = "OTransition" in vr,
      Dn = navigator.platform.indexOf("Win") === 0,
      yr = I && "transition" in vr,
      ti =
        "WebKitCSSMatrix" in window &&
        "m11" in new window.WebKitCSSMatrix() &&
        !mt,
      Rn = "MozPerspective" in vr,
      ae = !window.L_DISABLE_3D && (yr || ti || Rn) && !We && !On,
      Qt = typeof orientation < "u" || vn("mobile"),
      ei = Qt && tt,
      Ai = Qt && ti,
      mo = !window.PointerEvent && window.MSPointerEvent,
      go = !!(window.PointerEvent || mo),
      ta = "ontouchstart" in window || !!window.TouchEvent,
      _u = !window.L_NO_TOUCH && (ta || go),
      Re = Qt && kt,
      nn = Qt && Dt,
      ea =
        (window.devicePixelRatio ||
          window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      vu = (function () {
        var o = !1;
        try {
          var l = Object.defineProperty({}, "passive", {
            get: function () {
              o = !0;
            },
          });
          window.addEventListener("testPassiveEventSupport", g, l),
            window.removeEventListener("testPassiveEventSupport", g, l);
        } catch {}
        return o;
      })(),
      S0 = (function () {
        return !!document.createElement("canvas").getContext;
      })(),
      yu = !!(document.createElementNS && qs("svg").createSVGRect),
      P0 =
        !!yu &&
        (function () {
          var o = document.createElement("div");
          return (
            (o.innerHTML = "<svg/>"),
            (o.firstChild && o.firstChild.namespaceURI) ===
              "http://www.w3.org/2000/svg"
          );
        })(),
      k0 =
        !yu &&
        (function () {
          try {
            var o = document.createElement("div");
            o.innerHTML = '<v:shape adj="1"/>';
            var l = o.firstChild;
            return (
              (l.style.behavior = "url(#default#VML)"),
              l && typeof l.adj == "object"
            );
          } catch {
            return !1;
          }
        })(),
      C0 = navigator.platform.indexOf("Mac") === 0,
      L0 = navigator.platform.indexOf("Linux") === 0;
    function vn(o) {
      return navigator.userAgent.toLowerCase().indexOf(o) >= 0;
    }
    var G = {
        ie: I,
        ielt9: H,
        edge: U,
        webkit: tt,
        android: nt,
        android23: mt,
        androidStock: Lt,
        opera: kt,
        chrome: Mt,
        gecko: Dt,
        safari: se,
        phantom: On,
        opera12: We,
        win: Dn,
        ie3d: yr,
        webkit3d: ti,
        gecko3d: Rn,
        any3d: ae,
        mobile: Qt,
        mobileWebkit: ei,
        mobileWebkit3d: Ai,
        msPointer: mo,
        pointer: go,
        touch: _u,
        touchNative: ta,
        mobileOpera: Re,
        mobileGecko: nn,
        retina: ea,
        passiveEvents: vu,
        canvas: S0,
        svg: yu,
        vml: k0,
        inlineSvg: P0,
        mac: C0,
        linux: L0,
      },
      ff = G.msPointer ? "MSPointerDown" : "pointerdown",
      pf = G.msPointer ? "MSPointerMove" : "pointermove",
      mf = G.msPointer ? "MSPointerUp" : "pointerup",
      gf = G.msPointer ? "MSPointerCancel" : "pointercancel",
      xu = { touchstart: ff, touchmove: pf, touchend: mf, touchcancel: gf },
      _f = { touchstart: R0, touchmove: na, touchend: na, touchcancel: na },
      xr = {},
      vf = !1;
    function M0(o, l, h) {
      return (
        l === "touchstart" && D0(),
        _f[l]
          ? ((h = _f[l].bind(this, h)), o.addEventListener(xu[l], h, !1), h)
          : (console.warn("wrong event specified:", l), L.Util.falseFn)
      );
    }
    function E0(o, l, h) {
      if (!xu[l]) {
        console.warn("wrong event specified:", l);
        return;
      }
      o.removeEventListener(xu[l], h, !1);
    }
    function T0(o) {
      xr[o.pointerId] = o;
    }
    function O0(o) {
      xr[o.pointerId] && (xr[o.pointerId] = o);
    }
    function yf(o) {
      delete xr[o.pointerId];
    }
    function D0() {
      vf ||
        (document.addEventListener(ff, T0, !0),
        document.addEventListener(pf, O0, !0),
        document.addEventListener(mf, yf, !0),
        document.addEventListener(gf, yf, !0),
        (vf = !0));
    }
    function na(o, l) {
      if (l.pointerType !== (l.MSPOINTER_TYPE_MOUSE || "mouse")) {
        l.touches = [];
        for (var h in xr) l.touches.push(xr[h]);
        (l.changedTouches = [l]), o(l);
      }
    }
    function R0(o, l) {
      l.MSPOINTER_TYPE_TOUCH &&
        l.pointerType === l.MSPOINTER_TYPE_TOUCH &&
        ce(l),
        na(o, l);
    }
    function z0(o) {
      var l = {},
        h,
        f;
      for (f in o) (h = o[f]), (l[f] = h && h.bind ? h.bind(o) : h);
      return (
        (o = l),
        (l.type = "dblclick"),
        (l.detail = 2),
        (l.isTrusted = !1),
        (l._simulated = !0),
        l
      );
    }
    var A0 = 200;
    function I0(o, l) {
      o.addEventListener("dblclick", l);
      var h = 0,
        f;
      function _(x) {
        if (x.detail !== 1) {
          f = x.detail;
          return;
        }
        if (
          !(
            x.pointerType === "mouse" ||
            (x.sourceCapabilities && !x.sourceCapabilities.firesTouchEvents)
          )
        ) {
          var k = Pf(x);
          if (
            !(
              k.some(function (O) {
                return O instanceof HTMLLabelElement && O.attributes.for;
              }) &&
              !k.some(function (O) {
                return (
                  O instanceof HTMLInputElement ||
                  O instanceof HTMLSelectElement
                );
              })
            )
          ) {
            var T = Date.now();
            T - h <= A0 ? (f++, f === 2 && l(z0(x))) : (f = 1), (h = T);
          }
        }
      }
      return o.addEventListener("click", _), { dblclick: l, simDblclick: _ };
    }
    function N0(o, l) {
      o.removeEventListener("dblclick", l.dblclick),
        o.removeEventListener("click", l.simDblclick);
    }
    var wu = oa([
        "transform",
        "webkitTransform",
        "OTransform",
        "MozTransform",
        "msTransform",
      ]),
      _o = oa([
        "webkitTransition",
        "transition",
        "OTransition",
        "MozTransition",
        "msTransition",
      ]),
      xf =
        _o === "webkitTransition" || _o === "OTransition"
          ? _o + "End"
          : "transitionend";
    function wf(o) {
      return typeof o == "string" ? document.getElementById(o) : o;
    }
    function vo(o, l) {
      var h = o.style[l] || (o.currentStyle && o.currentStyle[l]);
      if ((!h || h === "auto") && document.defaultView) {
        var f = document.defaultView.getComputedStyle(o, null);
        h = f ? f[l] : null;
      }
      return h === "auto" ? null : h;
    }
    function bt(o, l, h) {
      var f = document.createElement(o);
      return (f.className = l || ""), h && h.appendChild(f), f;
    }
    function Ht(o) {
      var l = o.parentNode;
      l && l.removeChild(o);
    }
    function ia(o) {
      for (; o.firstChild; ) o.removeChild(o.firstChild);
    }
    function wr(o) {
      var l = o.parentNode;
      l && l.lastChild !== o && l.appendChild(o);
    }
    function br(o) {
      var l = o.parentNode;
      l && l.firstChild !== o && l.insertBefore(o, l.firstChild);
    }
    function bu(o, l) {
      if (o.classList !== void 0) return o.classList.contains(l);
      var h = ra(o);
      return h.length > 0 && new RegExp("(^|\\s)" + l + "(\\s|$)").test(h);
    }
    function ct(o, l) {
      if (o.classList !== void 0)
        for (var h = y(l), f = 0, _ = h.length; f < _; f++)
          o.classList.add(h[f]);
      else if (!bu(o, l)) {
        var x = ra(o);
        Su(o, (x ? x + " " : "") + l);
      }
    }
    function Xt(o, l) {
      o.classList !== void 0
        ? o.classList.remove(l)
        : Su(o, v((" " + ra(o) + " ").replace(" " + l + " ", " ")));
    }
    function Su(o, l) {
      o.className.baseVal === void 0
        ? (o.className = l)
        : (o.className.baseVal = l);
    }
    function ra(o) {
      return (
        o.correspondingElement && (o = o.correspondingElement),
        o.className.baseVal === void 0 ? o.className : o.className.baseVal
      );
    }
    function He(o, l) {
      "opacity" in o.style
        ? (o.style.opacity = l)
        : "filter" in o.style && B0(o, l);
    }
    function B0(o, l) {
      var h = !1,
        f = "DXImageTransform.Microsoft.Alpha";
      try {
        h = o.filters.item(f);
      } catch {
        if (l === 1) return;
      }
      (l = Math.round(l * 100)),
        h
          ? ((h.Enabled = l !== 100), (h.Opacity = l))
          : (o.style.filter += " progid:" + f + "(opacity=" + l + ")");
    }
    function oa(o) {
      for (var l = document.documentElement.style, h = 0; h < o.length; h++)
        if (o[h] in l) return o[h];
      return !1;
    }
    function Ii(o, l, h) {
      var f = l || new z(0, 0);
      o.style[wu] =
        (G.ie3d
          ? "translate(" + f.x + "px," + f.y + "px)"
          : "translate3d(" + f.x + "px," + f.y + "px,0)") +
        (h ? " scale(" + h + ")" : "");
    }
    function qt(o, l) {
      (o._leaflet_pos = l),
        G.any3d
          ? Ii(o, l)
          : ((o.style.left = l.x + "px"), (o.style.top = l.y + "px"));
    }
    function Ni(o) {
      return o._leaflet_pos || new z(0, 0);
    }
    var yo, xo, Pu;
    if ("onselectstart" in document)
      (yo = function () {
        it(window, "selectstart", ce);
      }),
        (xo = function () {
          zt(window, "selectstart", ce);
        });
    else {
      var wo = oa([
        "userSelect",
        "WebkitUserSelect",
        "OUserSelect",
        "MozUserSelect",
        "msUserSelect",
      ]);
      (yo = function () {
        if (wo) {
          var o = document.documentElement.style;
          (Pu = o[wo]), (o[wo] = "none");
        }
      }),
        (xo = function () {
          wo && ((document.documentElement.style[wo] = Pu), (Pu = void 0));
        });
    }
    function ku() {
      it(window, "dragstart", ce);
    }
    function Cu() {
      zt(window, "dragstart", ce);
    }
    var sa, Lu;
    function Mu(o) {
      for (; o.tabIndex === -1; ) o = o.parentNode;
      !o.style ||
        (aa(),
        (sa = o),
        (Lu = o.style.outline),
        (o.style.outline = "none"),
        it(window, "keydown", aa));
    }
    function aa() {
      !sa ||
        ((sa.style.outline = Lu),
        (sa = void 0),
        (Lu = void 0),
        zt(window, "keydown", aa));
    }
    function bf(o) {
      do o = o.parentNode;
      while ((!o.offsetWidth || !o.offsetHeight) && o !== document.body);
      return o;
    }
    function Eu(o) {
      var l = o.getBoundingClientRect();
      return {
        x: l.width / o.offsetWidth || 1,
        y: l.height / o.offsetHeight || 1,
        boundingClientRect: l,
      };
    }
    var F0 = {
      __proto__: null,
      TRANSFORM: wu,
      TRANSITION: _o,
      TRANSITION_END: xf,
      get: wf,
      getStyle: vo,
      create: bt,
      remove: Ht,
      empty: ia,
      toFront: wr,
      toBack: br,
      hasClass: bu,
      addClass: ct,
      removeClass: Xt,
      setClass: Su,
      getClass: ra,
      setOpacity: He,
      testProp: oa,
      setTransform: Ii,
      setPosition: qt,
      getPosition: Ni,
      get disableTextSelection() {
        return yo;
      },
      get enableTextSelection() {
        return xo;
      },
      disableImageDrag: ku,
      enableImageDrag: Cu,
      preventOutline: Mu,
      restoreOutline: aa,
      getSizedParentNode: bf,
      getScale: Eu,
    };
    function it(o, l, h, f) {
      if (l && typeof l == "object") for (var _ in l) Ou(o, _, l[_], h);
      else {
        l = y(l);
        for (var x = 0, k = l.length; x < k; x++) Ou(o, l[x], h, f);
      }
      return this;
    }
    var yn = "_leaflet_events";
    function zt(o, l, h, f) {
      if (arguments.length === 1) Sf(o), delete o[yn];
      else if (l && typeof l == "object") for (var _ in l) Du(o, _, l[_], h);
      else if (((l = y(l)), arguments.length === 2))
        Sf(o, function (T) {
          return C(l, T) !== -1;
        });
      else for (var x = 0, k = l.length; x < k; x++) Du(o, l[x], h, f);
      return this;
    }
    function Sf(o, l) {
      for (var h in o[yn]) {
        var f = h.split(/\d/)[0];
        (!l || l(f)) && Du(o, f, null, null, h);
      }
    }
    var Tu = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel",
    };
    function Ou(o, l, h, f) {
      var _ = l + c(h) + (f ? "_" + c(f) : "");
      if (o[yn] && o[yn][_]) return this;
      var x = function (T) {
          return h.call(f || o, T || window.event);
        },
        k = x;
      !G.touchNative && G.pointer && l.indexOf("touch") === 0
        ? (x = M0(o, l, x))
        : G.touch && l === "dblclick"
        ? (x = I0(o, x))
        : "addEventListener" in o
        ? l === "touchstart" ||
          l === "touchmove" ||
          l === "wheel" ||
          l === "mousewheel"
          ? o.addEventListener(
              Tu[l] || l,
              x,
              G.passiveEvents ? { passive: !1 } : !1
            )
          : l === "mouseenter" || l === "mouseleave"
          ? ((x = function (T) {
              (T = T || window.event), zu(o, T) && k(T);
            }),
            o.addEventListener(Tu[l], x, !1))
          : o.addEventListener(l, k, !1)
        : o.attachEvent("on" + l, x),
        (o[yn] = o[yn] || {}),
        (o[yn][_] = x);
    }
    function Du(o, l, h, f, _) {
      _ = _ || l + c(h) + (f ? "_" + c(f) : "");
      var x = o[yn] && o[yn][_];
      if (!x) return this;
      !G.touchNative && G.pointer && l.indexOf("touch") === 0
        ? E0(o, l, x)
        : G.touch && l === "dblclick"
        ? N0(o, x)
        : "removeEventListener" in o
        ? o.removeEventListener(Tu[l] || l, x, !1)
        : o.detachEvent("on" + l, x),
        (o[yn][_] = null);
    }
    function Bi(o) {
      return (
        o.stopPropagation
          ? o.stopPropagation()
          : o.originalEvent
          ? (o.originalEvent._stopped = !0)
          : (o.cancelBubble = !0),
        this
      );
    }
    function Ru(o) {
      return Ou(o, "wheel", Bi), this;
    }
    function bo(o) {
      return (
        it(o, "mousedown touchstart dblclick contextmenu", Bi),
        (o._leaflet_disable_click = !0),
        this
      );
    }
    function ce(o) {
      return o.preventDefault ? o.preventDefault() : (o.returnValue = !1), this;
    }
    function Fi(o) {
      return ce(o), Bi(o), this;
    }
    function Pf(o) {
      if (o.composedPath) return o.composedPath();
      for (var l = [], h = o.target; h; ) l.push(h), (h = h.parentNode);
      return l;
    }
    function kf(o, l) {
      if (!l) return new z(o.clientX, o.clientY);
      var h = Eu(l),
        f = h.boundingClientRect;
      return new z(
        (o.clientX - f.left) / h.x - l.clientLeft,
        (o.clientY - f.top) / h.y - l.clientTop
      );
    }
    var j0 =
      G.linux && G.chrome
        ? window.devicePixelRatio
        : G.mac
        ? window.devicePixelRatio * 3
        : window.devicePixelRatio > 0
        ? 2 * window.devicePixelRatio
        : 1;
    function Cf(o) {
      return G.edge
        ? o.wheelDeltaY / 2
        : o.deltaY && o.deltaMode === 0
        ? -o.deltaY / j0
        : o.deltaY && o.deltaMode === 1
        ? -o.deltaY * 20
        : o.deltaY && o.deltaMode === 2
        ? -o.deltaY * 60
        : o.deltaX || o.deltaZ
        ? 0
        : o.wheelDelta
        ? (o.wheelDeltaY || o.wheelDelta) / 2
        : o.detail && Math.abs(o.detail) < 32765
        ? -o.detail * 20
        : o.detail
        ? (o.detail / -32765) * 60
        : 0;
    }
    function zu(o, l) {
      var h = l.relatedTarget;
      if (!h) return !0;
      try {
        for (; h && h !== o; ) h = h.parentNode;
      } catch {
        return !1;
      }
      return h !== o;
    }
    var W0 = {
        __proto__: null,
        on: it,
        off: zt,
        stopPropagation: Bi,
        disableScrollPropagation: Ru,
        disableClickPropagation: bo,
        preventDefault: ce,
        stop: Fi,
        getPropagationPath: Pf,
        getMousePosition: kf,
        getWheelDelta: Cf,
        isExternalTarget: zu,
        addListener: it,
        removeListener: zt,
      },
      Lf = _t.extend({
        run: function (o, l, h, f) {
          this.stop(),
            (this._el = o),
            (this._inProgress = !0),
            (this._duration = h || 0.25),
            (this._easeOutPower = 1 / Math.max(f || 0.5, 0.2)),
            (this._startPos = Ni(o)),
            (this._offset = l.subtract(this._startPos)),
            (this._startTime = +new Date()),
            this.fire("start"),
            this._animate();
        },
        stop: function () {
          !this._inProgress || (this._step(!0), this._complete());
        },
        _animate: function () {
          (this._animId = K(this._animate, this)), this._step();
        },
        _step: function (o) {
          var l = +new Date() - this._startTime,
            h = this._duration * 1e3;
          l < h
            ? this._runFrame(this._easeOut(l / h), o)
            : (this._runFrame(1), this._complete());
        },
        _runFrame: function (o, l) {
          var h = this._startPos.add(this._offset.multiplyBy(o));
          l && h._round(), qt(this._el, h), this.fire("step");
        },
        _complete: function () {
          X(this._animId), (this._inProgress = !1), this.fire("end");
        },
        _easeOut: function (o) {
          return 1 - Math.pow(1 - o, this._easeOutPower);
        },
      }),
      gt = _t.extend({
        options: {
          crs: _r,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0,
        },
        initialize: function (o, l) {
          (l = S(this, l)),
            (this._handlers = []),
            (this._layers = {}),
            (this._zoomBoundLayers = {}),
            (this._sizeChanged = !0),
            this._initContainer(o),
            this._initLayout(),
            (this._onResize = a(this._onResize, this)),
            this._initEvents(),
            l.maxBounds && this.setMaxBounds(l.maxBounds),
            l.zoom !== void 0 && (this._zoom = this._limitZoom(l.zoom)),
            l.center &&
              l.zoom !== void 0 &&
              this.setView(lt(l.center), l.zoom, { reset: !0 }),
            this.callInitHooks(),
            (this._zoomAnimated =
              _o && G.any3d && !G.mobileOpera && this.options.zoomAnimation),
            this._zoomAnimated &&
              (this._createAnimProxy(),
              it(this._proxy, xf, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers);
        },
        setView: function (o, l, h) {
          if (
            ((l = l === void 0 ? this._zoom : this._limitZoom(l)),
            (o = this._limitCenter(lt(o), l, this.options.maxBounds)),
            (h = h || {}),
            this._stop(),
            this._loaded && !h.reset && h !== !0)
          ) {
            h.animate !== void 0 &&
              ((h.zoom = r({ animate: h.animate }, h.zoom)),
              (h.pan = r({ animate: h.animate, duration: h.duration }, h.pan)));
            var f =
              this._zoom !== l
                ? this._tryAnimatedZoom && this._tryAnimatedZoom(o, l, h.zoom)
                : this._tryAnimatedPan(o, h.pan);
            if (f) return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(o, l, h.pan && h.pan.noMoveStart), this;
        },
        setZoom: function (o, l) {
          return this._loaded
            ? this.setView(this.getCenter(), o, { zoom: l })
            : ((this._zoom = o), this);
        },
        zoomIn: function (o, l) {
          return (
            (o = o || (G.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom + o, l)
          );
        },
        zoomOut: function (o, l) {
          return (
            (o = o || (G.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom - o, l)
          );
        },
        setZoomAround: function (o, l, h) {
          var f = this.getZoomScale(l),
            _ = this.getSize().divideBy(2),
            x = o instanceof z ? o : this.latLngToContainerPoint(o),
            k = x.subtract(_).multiplyBy(1 - 1 / f),
            T = this.containerPointToLatLng(_.add(k));
          return this.setView(T, l, { zoom: h });
        },
        _getBoundsCenterZoom: function (o, l) {
          (l = l || {}), (o = o.getBounds ? o.getBounds() : wt(o));
          var h = W(l.paddingTopLeft || l.padding || [0, 0]),
            f = W(l.paddingBottomRight || l.padding || [0, 0]),
            _ = this.getBoundsZoom(o, !1, h.add(f));
          if (
            ((_ = typeof l.maxZoom == "number" ? Math.min(l.maxZoom, _) : _),
            _ === 1 / 0)
          )
            return { center: o.getCenter(), zoom: _ };
          var x = f.subtract(h).divideBy(2),
            k = this.project(o.getSouthWest(), _),
            T = this.project(o.getNorthEast(), _),
            O = this.unproject(k.add(T).divideBy(2).add(x), _);
          return { center: O, zoom: _ };
        },
        fitBounds: function (o, l) {
          if (((o = wt(o)), !o.isValid()))
            throw new Error("Bounds are not valid.");
          var h = this._getBoundsCenterZoom(o, l);
          return this.setView(h.center, h.zoom, l);
        },
        fitWorld: function (o) {
          return this.fitBounds(
            [
              [-90, -180],
              [90, 180],
            ],
            o
          );
        },
        panTo: function (o, l) {
          return this.setView(o, this._zoom, { pan: l });
        },
        panBy: function (o, l) {
          if (((o = W(o).round()), (l = l || {}), !o.x && !o.y))
            return this.fire("moveend");
          if (l.animate !== !0 && !this.getSize().contains(o))
            return (
              this._resetView(
                this.unproject(this.project(this.getCenter()).add(o)),
                this.getZoom()
              ),
              this
            );
          if (
            (this._panAnim ||
              ((this._panAnim = new Lf()),
              this._panAnim.on(
                {
                  step: this._onPanTransitionStep,
                  end: this._onPanTransitionEnd,
                },
                this
              )),
            l.noMoveStart || this.fire("movestart"),
            l.animate !== !1)
          ) {
            ct(this._mapPane, "leaflet-pan-anim");
            var h = this._getMapPanePos().subtract(o).round();
            this._panAnim.run(
              this._mapPane,
              h,
              l.duration || 0.25,
              l.easeLinearity
            );
          } else this._rawPanBy(o), this.fire("move").fire("moveend");
          return this;
        },
        flyTo: function (o, l, h) {
          if (((h = h || {}), h.animate === !1 || !G.any3d))
            return this.setView(o, l, h);
          this._stop();
          var f = this.project(this.getCenter()),
            _ = this.project(o),
            x = this.getSize(),
            k = this._zoom;
          (o = lt(o)), (l = l === void 0 ? k : l);
          var T = Math.max(x.x, x.y),
            O = T * this.getZoomScale(k, l),
            F = _.distanceTo(f) || 1,
            $ = 1.42,
            et = $ * $;
          function st(Jt) {
            var xa = Jt ? -1 : 1,
              Ex = Jt ? O : T,
              Tx = O * O - T * T + xa * et * et * F * F,
              Ox = 2 * Ex * et * F,
              Uu = Tx / Ox,
              ap = Math.sqrt(Uu * Uu + 1) - Uu,
              Dx = ap < 1e-9 ? -18 : Math.log(ap);
            return Dx;
          }
          function Ze(Jt) {
            return (Math.exp(Jt) - Math.exp(-Jt)) / 2;
          }
          function Hi(Jt) {
            return (Math.exp(Jt) + Math.exp(-Jt)) / 2;
          }
          function ya(Jt) {
            return Ze(Jt) / Hi(Jt);
          }
          var ri = st(0);
          function Zu(Jt) {
            return T * (Hi(ri) / Hi(ri + $ * Jt));
          }
          function kx(Jt) {
            return (T * (Hi(ri) * ya(ri + $ * Jt) - Ze(ri))) / et;
          }
          function Cx(Jt) {
            return 1 - Math.pow(1 - Jt, 1.5);
          }
          var Lx = Date.now(),
            op = (st(1) - ri) / $,
            Mx = h.duration ? 1e3 * h.duration : 1e3 * op * 0.8;
          function sp() {
            var Jt = (Date.now() - Lx) / Mx,
              xa = Cx(Jt) * op;
            Jt <= 1
              ? ((this._flyToFrame = K(sp, this)),
                this._move(
                  this.unproject(
                    f.add(_.subtract(f).multiplyBy(kx(xa) / F)),
                    k
                  ),
                  this.getScaleZoom(T / Zu(xa), k),
                  { flyTo: !0 }
                ))
              : this._move(o, l)._moveEnd(!0);
          }
          return this._moveStart(!0, h.noMoveStart), sp.call(this), this;
        },
        flyToBounds: function (o, l) {
          var h = this._getBoundsCenterZoom(o, l);
          return this.flyTo(h.center, h.zoom, l);
        },
        setMaxBounds: function (o) {
          return (
            (o = wt(o)),
            this.listens("moveend", this._panInsideMaxBounds) &&
              this.off("moveend", this._panInsideMaxBounds),
            o.isValid()
              ? ((this.options.maxBounds = o),
                this._loaded && this._panInsideMaxBounds(),
                this.on("moveend", this._panInsideMaxBounds))
              : ((this.options.maxBounds = null), this)
          );
        },
        setMinZoom: function (o) {
          var l = this.options.minZoom;
          return (
            (this.options.minZoom = o),
            this._loaded &&
            l !== o &&
            (this.fire("zoomlevelschange"),
            this.getZoom() < this.options.minZoom)
              ? this.setZoom(o)
              : this
          );
        },
        setMaxZoom: function (o) {
          var l = this.options.maxZoom;
          return (
            (this.options.maxZoom = o),
            this._loaded &&
            l !== o &&
            (this.fire("zoomlevelschange"),
            this.getZoom() > this.options.maxZoom)
              ? this.setZoom(o)
              : this
          );
        },
        panInsideBounds: function (o, l) {
          this._enforcingBounds = !0;
          var h = this.getCenter(),
            f = this._limitCenter(h, this._zoom, wt(o));
          return (
            h.equals(f) || this.panTo(f, l), (this._enforcingBounds = !1), this
          );
        },
        panInside: function (o, l) {
          l = l || {};
          var h = W(l.paddingTopLeft || l.padding || [0, 0]),
            f = W(l.paddingBottomRight || l.padding || [0, 0]),
            _ = this.project(this.getCenter()),
            x = this.project(o),
            k = this.getPixelBounds(),
            T = ot([k.min.add(h), k.max.subtract(f)]),
            O = T.getSize();
          if (!T.contains(x)) {
            this._enforcingBounds = !0;
            var F = x.subtract(T.getCenter()),
              $ = T.extend(x).getSize().subtract(O);
            (_.x += F.x < 0 ? -$.x : $.x),
              (_.y += F.y < 0 ? -$.y : $.y),
              this.panTo(this.unproject(_), l),
              (this._enforcingBounds = !1);
          }
          return this;
        },
        invalidateSize: function (o) {
          if (!this._loaded) return this;
          o = r({ animate: !1, pan: !0 }, o === !0 ? { animate: !0 } : o);
          var l = this.getSize();
          (this._sizeChanged = !0), (this._lastCenter = null);
          var h = this.getSize(),
            f = l.divideBy(2).round(),
            _ = h.divideBy(2).round(),
            x = f.subtract(_);
          return !x.x && !x.y
            ? this
            : (o.animate && o.pan
                ? this.panBy(x)
                : (o.pan && this._rawPanBy(x),
                  this.fire("move"),
                  o.debounceMoveend
                    ? (clearTimeout(this._sizeTimer),
                      (this._sizeTimer = setTimeout(
                        a(this.fire, this, "moveend"),
                        200
                      )))
                    : this.fire("moveend")),
              this.fire("resize", { oldSize: l, newSize: h }));
        },
        stop: function () {
          return (
            this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire("viewreset"),
            this._stop()
          );
        },
        locate: function (o) {
          if (
            ((o = this._locateOptions = r({ timeout: 1e4, watch: !1 }, o)),
            !("geolocation" in navigator))
          )
            return (
              this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported.",
              }),
              this
            );
          var l = a(this._handleGeolocationResponse, this),
            h = a(this._handleGeolocationError, this);
          return (
            o.watch
              ? (this._locationWatchId = navigator.geolocation.watchPosition(
                  l,
                  h,
                  o
                ))
              : navigator.geolocation.getCurrentPosition(l, h, o),
            this
          );
        },
        stopLocate: function () {
          return (
            navigator.geolocation &&
              navigator.geolocation.clearWatch &&
              navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
          );
        },
        _handleGeolocationError: function (o) {
          if (!!this._container._leaflet_id) {
            var l = o.code,
              h =
                o.message ||
                (l === 1
                  ? "permission denied"
                  : l === 2
                  ? "position unavailable"
                  : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire("locationerror", {
                code: l,
                message: "Geolocation error: " + h + ".",
              });
          }
        },
        _handleGeolocationResponse: function (o) {
          if (!!this._container._leaflet_id) {
            var l = o.coords.latitude,
              h = o.coords.longitude,
              f = new at(l, h),
              _ = f.toBounds(o.coords.accuracy * 2),
              x = this._locateOptions;
            if (x.setView) {
              var k = this.getBoundsZoom(_);
              this.setView(f, x.maxZoom ? Math.min(k, x.maxZoom) : k);
            }
            var T = { latlng: f, bounds: _, timestamp: o.timestamp };
            for (var O in o.coords)
              typeof o.coords[O] == "number" && (T[O] = o.coords[O]);
            this.fire("locationfound", T);
          }
        },
        addHandler: function (o, l) {
          if (!l) return this;
          var h = (this[o] = new l(this));
          return this._handlers.push(h), this.options[o] && h.enable(), this;
        },
        remove: function () {
          if (
            (this._initEvents(!0),
            this.options.maxBounds &&
              this.off("moveend", this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
          )
            throw new Error(
              "Map container is being reused by another instance"
            );
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            (this._container._leaflet_id = void 0),
              (this._containerId = void 0);
          }
          this._locationWatchId !== void 0 && this.stopLocate(),
            this._stop(),
            Ht(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest &&
              (X(this._resizeRequest), (this._resizeRequest = null)),
            this._clearHandlers(),
            this._loaded && this.fire("unload");
          var o;
          for (o in this._layers) this._layers[o].remove();
          for (o in this._panes) Ht(this._panes[o]);
          return (
            (this._layers = []),
            (this._panes = []),
            delete this._mapPane,
            delete this._renderer,
            this
          );
        },
        createPane: function (o, l) {
          var h =
              "leaflet-pane" +
              (o ? " leaflet-" + o.replace("Pane", "") + "-pane" : ""),
            f = bt("div", h, l || this._mapPane);
          return o && (this._panes[o] = f), f;
        },
        getCenter: function () {
          return (
            this._checkIfLoaded(),
            this._lastCenter && !this._moved()
              ? this._lastCenter.clone()
              : this.layerPointToLatLng(this._getCenterLayerPoint())
          );
        },
        getZoom: function () {
          return this._zoom;
        },
        getBounds: function () {
          var o = this.getPixelBounds(),
            l = this.unproject(o.getBottomLeft()),
            h = this.unproject(o.getTopRight());
          return new Ot(l, h);
        },
        getMinZoom: function () {
          return this.options.minZoom === void 0
            ? this._layersMinZoom || 0
            : this.options.minZoom;
        },
        getMaxZoom: function () {
          return this.options.maxZoom === void 0
            ? this._layersMaxZoom === void 0
              ? 1 / 0
              : this._layersMaxZoom
            : this.options.maxZoom;
        },
        getBoundsZoom: function (o, l, h) {
          (o = wt(o)), (h = W(h || [0, 0]));
          var f = this.getZoom() || 0,
            _ = this.getMinZoom(),
            x = this.getMaxZoom(),
            k = o.getNorthWest(),
            T = o.getSouthEast(),
            O = this.getSize().subtract(h),
            F = ot(this.project(T, f), this.project(k, f)).getSize(),
            $ = G.any3d ? this.options.zoomSnap : 1,
            et = O.x / F.x,
            st = O.y / F.y,
            Ze = l ? Math.max(et, st) : Math.min(et, st);
          return (
            (f = this.getScaleZoom(Ze, f)),
            $ &&
              ((f = Math.round(f / ($ / 100)) * ($ / 100)),
              (f = l ? Math.ceil(f / $) * $ : Math.floor(f / $) * $)),
            Math.max(_, Math.min(x, f))
          );
        },
        getSize: function () {
          return (
            (!this._size || this._sizeChanged) &&
              ((this._size = new z(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0
              )),
              (this._sizeChanged = !1)),
            this._size.clone()
          );
        },
        getPixelBounds: function (o, l) {
          var h = this._getTopLeftPoint(o, l);
          return new Q(h, h.add(this.getSize()));
        },
        getPixelOrigin: function () {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        getPixelWorldBounds: function (o) {
          return this.options.crs.getProjectedBounds(
            o === void 0 ? this.getZoom() : o
          );
        },
        getPane: function (o) {
          return typeof o == "string" ? this._panes[o] : o;
        },
        getPanes: function () {
          return this._panes;
        },
        getContainer: function () {
          return this._container;
        },
        getZoomScale: function (o, l) {
          var h = this.options.crs;
          return (l = l === void 0 ? this._zoom : l), h.scale(o) / h.scale(l);
        },
        getScaleZoom: function (o, l) {
          var h = this.options.crs;
          l = l === void 0 ? this._zoom : l;
          var f = h.zoom(o * h.scale(l));
          return isNaN(f) ? 1 / 0 : f;
        },
        project: function (o, l) {
          return (
            (l = l === void 0 ? this._zoom : l),
            this.options.crs.latLngToPoint(lt(o), l)
          );
        },
        unproject: function (o, l) {
          return (
            (l = l === void 0 ? this._zoom : l),
            this.options.crs.pointToLatLng(W(o), l)
          );
        },
        layerPointToLatLng: function (o) {
          var l = W(o).add(this.getPixelOrigin());
          return this.unproject(l);
        },
        latLngToLayerPoint: function (o) {
          var l = this.project(lt(o))._round();
          return l._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function (o) {
          return this.options.crs.wrapLatLng(lt(o));
        },
        wrapLatLngBounds: function (o) {
          return this.options.crs.wrapLatLngBounds(wt(o));
        },
        distance: function (o, l) {
          return this.options.crs.distance(lt(o), lt(l));
        },
        containerPointToLayerPoint: function (o) {
          return W(o).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function (o) {
          return W(o).add(this._getMapPanePos());
        },
        containerPointToLatLng: function (o) {
          var l = this.containerPointToLayerPoint(W(o));
          return this.layerPointToLatLng(l);
        },
        latLngToContainerPoint: function (o) {
          return this.layerPointToContainerPoint(
            this.latLngToLayerPoint(lt(o))
          );
        },
        mouseEventToContainerPoint: function (o) {
          return kf(o, this._container);
        },
        mouseEventToLayerPoint: function (o) {
          return this.containerPointToLayerPoint(
            this.mouseEventToContainerPoint(o)
          );
        },
        mouseEventToLatLng: function (o) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(o));
        },
        _initContainer: function (o) {
          var l = (this._container = wf(o));
          if (l) {
            if (l._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          it(l, "scroll", this._onScroll, this), (this._containerId = c(l));
        },
        _initLayout: function () {
          var o = this._container;
          (this._fadeAnimated = this.options.fadeAnimation && G.any3d),
            ct(
              o,
              "leaflet-container" +
                (G.touch ? " leaflet-touch" : "") +
                (G.retina ? " leaflet-retina" : "") +
                (G.ielt9 ? " leaflet-oldie" : "") +
                (G.safari ? " leaflet-safari" : "") +
                (this._fadeAnimated ? " leaflet-fade-anim" : "")
            );
          var l = vo(o, "position");
          l !== "absolute" &&
            l !== "relative" &&
            l !== "fixed" &&
            (o.style.position = "relative"),
            this._initPanes(),
            this._initControlPos && this._initControlPos();
        },
        _initPanes: function () {
          var o = (this._panes = {});
          (this._paneRenderers = {}),
            (this._mapPane = this.createPane("mapPane", this._container)),
            qt(this._mapPane, new z(0, 0)),
            this.createPane("tilePane"),
            this.createPane("overlayPane"),
            this.createPane("shadowPane"),
            this.createPane("markerPane"),
            this.createPane("tooltipPane"),
            this.createPane("popupPane"),
            this.options.markerZoomAnimation ||
              (ct(o.markerPane, "leaflet-zoom-hide"),
              ct(o.shadowPane, "leaflet-zoom-hide"));
        },
        _resetView: function (o, l, h) {
          qt(this._mapPane, new z(0, 0));
          var f = !this._loaded;
          (this._loaded = !0),
            (l = this._limitZoom(l)),
            this.fire("viewprereset");
          var _ = this._zoom !== l;
          this._moveStart(_, h)._move(o, l)._moveEnd(_),
            this.fire("viewreset"),
            f && this.fire("load");
        },
        _moveStart: function (o, l) {
          return o && this.fire("zoomstart"), l || this.fire("movestart"), this;
        },
        _move: function (o, l, h, f) {
          l === void 0 && (l = this._zoom);
          var _ = this._zoom !== l;
          return (
            (this._zoom = l),
            (this._lastCenter = o),
            (this._pixelOrigin = this._getNewPixelOrigin(o)),
            f
              ? h && h.pinch && this.fire("zoom", h)
              : ((_ || (h && h.pinch)) && this.fire("zoom", h),
                this.fire("move", h)),
            this
          );
        },
        _moveEnd: function (o) {
          return o && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function () {
          return (
            X(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
          );
        },
        _rawPanBy: function (o) {
          qt(this._mapPane, this._getMapPanePos().subtract(o));
        },
        _getZoomSpan: function () {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function () {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function () {
          if (!this._loaded) throw new Error("Set map center and zoom first.");
        },
        _initEvents: function (o) {
          (this._targets = {}), (this._targets[c(this._container)] = this);
          var l = o ? zt : it;
          l(
            this._container,
            "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
            this._handleDOMEvent,
            this
          ),
            this.options.trackResize &&
              l(window, "resize", this._onResize, this),
            G.any3d &&
              this.options.transform3DLimit &&
              (o ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function () {
          X(this._resizeRequest),
            (this._resizeRequest = K(function () {
              this.invalidateSize({ debounceMoveend: !0 });
            }, this));
        },
        _onScroll: function () {
          (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
        },
        _onMoveEnd: function () {
          var o = this._getMapPanePos();
          Math.max(Math.abs(o.x), Math.abs(o.y)) >=
            this.options.transform3DLimit &&
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function (o, l) {
          for (
            var h = [],
              f,
              _ = l === "mouseout" || l === "mouseover",
              x = o.target || o.srcElement,
              k = !1;
            x;

          ) {
            if (
              ((f = this._targets[c(x)]),
              f &&
                (l === "click" || l === "preclick") &&
                this._draggableMoved(f))
            ) {
              k = !0;
              break;
            }
            if (
              (f && f.listens(l, !0) && ((_ && !zu(x, o)) || (h.push(f), _))) ||
              x === this._container
            )
              break;
            x = x.parentNode;
          }
          return (
            !h.length && !k && !_ && this.listens(l, !0) && (h = [this]), h
          );
        },
        _isClickDisabled: function (o) {
          for (; o && o !== this._container; ) {
            if (o._leaflet_disable_click) return !0;
            o = o.parentNode;
          }
        },
        _handleDOMEvent: function (o) {
          var l = o.target || o.srcElement;
          if (
            !(
              !this._loaded ||
              l._leaflet_disable_events ||
              (o.type === "click" && this._isClickDisabled(l))
            )
          ) {
            var h = o.type;
            h === "mousedown" && Mu(l), this._fireDOMEvent(o, h);
          }
        },
        _mouseEvents: [
          "click",
          "dblclick",
          "mouseover",
          "mouseout",
          "contextmenu",
        ],
        _fireDOMEvent: function (o, l, h) {
          if (o.type === "click") {
            var f = r({}, o);
            (f.type = "preclick"), this._fireDOMEvent(f, f.type, h);
          }
          var _ = this._findEventTargets(o, l);
          if (h) {
            for (var x = [], k = 0; k < h.length; k++)
              h[k].listens(l, !0) && x.push(h[k]);
            _ = x.concat(_);
          }
          if (!!_.length) {
            l === "contextmenu" && ce(o);
            var T = _[0],
              O = { originalEvent: o };
            if (
              o.type !== "keypress" &&
              o.type !== "keydown" &&
              o.type !== "keyup"
            ) {
              var F = T.getLatLng && (!T._radius || T._radius <= 10);
              (O.containerPoint = F
                ? this.latLngToContainerPoint(T.getLatLng())
                : this.mouseEventToContainerPoint(o)),
                (O.layerPoint = this.containerPointToLayerPoint(
                  O.containerPoint
                )),
                (O.latlng = F
                  ? T.getLatLng()
                  : this.layerPointToLatLng(O.layerPoint));
            }
            for (k = 0; k < _.length; k++)
              if (
                (_[k].fire(l, O, !0),
                O.originalEvent._stopped ||
                  (_[k].options.bubblingMouseEvents === !1 &&
                    C(this._mouseEvents, l) !== -1))
              )
                return;
          }
        },
        _draggableMoved: function (o) {
          return (
            (o = o.dragging && o.dragging.enabled() ? o : this),
            (o.dragging && o.dragging.moved()) ||
              (this.boxZoom && this.boxZoom.moved())
          );
        },
        _clearHandlers: function () {
          for (var o = 0, l = this._handlers.length; o < l; o++)
            this._handlers[o].disable();
        },
        whenReady: function (o, l) {
          return (
            this._loaded
              ? o.call(l || this, { target: this })
              : this.on("load", o, l),
            this
          );
        },
        _getMapPanePos: function () {
          return Ni(this._mapPane) || new z(0, 0);
        },
        _moved: function () {
          var o = this._getMapPanePos();
          return o && !o.equals([0, 0]);
        },
        _getTopLeftPoint: function (o, l) {
          var h =
            o && l !== void 0
              ? this._getNewPixelOrigin(o, l)
              : this.getPixelOrigin();
          return h.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function (o, l) {
          var h = this.getSize()._divideBy(2);
          return this.project(o, l)
            ._subtract(h)
            ._add(this._getMapPanePos())
            ._round();
        },
        _latLngToNewLayerPoint: function (o, l, h) {
          var f = this._getNewPixelOrigin(h, l);
          return this.project(o, l)._subtract(f);
        },
        _latLngBoundsToNewLayerBounds: function (o, l, h) {
          var f = this._getNewPixelOrigin(h, l);
          return ot([
            this.project(o.getSouthWest(), l)._subtract(f),
            this.project(o.getNorthWest(), l)._subtract(f),
            this.project(o.getSouthEast(), l)._subtract(f),
            this.project(o.getNorthEast(), l)._subtract(f),
          ]);
        },
        _getCenterLayerPoint: function () {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function (o) {
          return this.latLngToLayerPoint(o).subtract(
            this._getCenterLayerPoint()
          );
        },
        _limitCenter: function (o, l, h) {
          if (!h) return o;
          var f = this.project(o, l),
            _ = this.getSize().divideBy(2),
            x = new Q(f.subtract(_), f.add(_)),
            k = this._getBoundsOffset(x, h, l);
          return k.round().equals([0, 0]) ? o : this.unproject(f.add(k), l);
        },
        _limitOffset: function (o, l) {
          if (!l) return o;
          var h = this.getPixelBounds(),
            f = new Q(h.min.add(o), h.max.add(o));
          return o.add(this._getBoundsOffset(f, l));
        },
        _getBoundsOffset: function (o, l, h) {
          var f = ot(
              this.project(l.getNorthEast(), h),
              this.project(l.getSouthWest(), h)
            ),
            _ = f.min.subtract(o.min),
            x = f.max.subtract(o.max),
            k = this._rebound(_.x, -x.x),
            T = this._rebound(_.y, -x.y);
          return new z(k, T);
        },
        _rebound: function (o, l) {
          return o + l > 0
            ? Math.round(o - l) / 2
            : Math.max(0, Math.ceil(o)) - Math.max(0, Math.floor(l));
        },
        _limitZoom: function (o) {
          var l = this.getMinZoom(),
            h = this.getMaxZoom(),
            f = G.any3d ? this.options.zoomSnap : 1;
          return f && (o = Math.round(o / f) * f), Math.max(l, Math.min(h, o));
        },
        _onPanTransitionStep: function () {
          this.fire("move");
        },
        _onPanTransitionEnd: function () {
          Xt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function (o, l) {
          var h = this._getCenterOffset(o)._trunc();
          return (l && l.animate) !== !0 && !this.getSize().contains(h)
            ? !1
            : (this.panBy(h, l), !0);
        },
        _createAnimProxy: function () {
          var o = (this._proxy = bt(
            "div",
            "leaflet-proxy leaflet-zoom-animated"
          ));
          this._panes.mapPane.appendChild(o),
            this.on(
              "zoomanim",
              function (l) {
                var h = wu,
                  f = this._proxy.style[h];
                Ii(
                  this._proxy,
                  this.project(l.center, l.zoom),
                  this.getZoomScale(l.zoom, 1)
                ),
                  f === this._proxy.style[h] &&
                    this._animatingZoom &&
                    this._onZoomTransitionEnd();
              },
              this
            ),
            this.on("load moveend", this._animMoveEnd, this),
            this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function () {
          Ht(this._proxy),
            this.off("load moveend", this._animMoveEnd, this),
            delete this._proxy;
        },
        _animMoveEnd: function () {
          var o = this.getCenter(),
            l = this.getZoom();
          Ii(this._proxy, this.project(o, l), this.getZoomScale(l, 1));
        },
        _catchTransitionEnd: function (o) {
          this._animatingZoom &&
            o.propertyName.indexOf("transform") >= 0 &&
            this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function () {
          return !this._container.getElementsByClassName(
            "leaflet-zoom-animated"
          ).length;
        },
        _tryAnimatedZoom: function (o, l, h) {
          if (this._animatingZoom) return !0;
          if (
            ((h = h || {}),
            !this._zoomAnimated ||
              h.animate === !1 ||
              this._nothingToAnimate() ||
              Math.abs(l - this._zoom) > this.options.zoomAnimationThreshold)
          )
            return !1;
          var f = this.getZoomScale(l),
            _ = this._getCenterOffset(o)._divideBy(1 - 1 / f);
          return h.animate !== !0 && !this.getSize().contains(_)
            ? !1
            : (K(function () {
                this._moveStart(!0, !1)._animateZoom(o, l, !0);
              }, this),
              !0);
        },
        _animateZoom: function (o, l, h, f) {
          !this._mapPane ||
            (h &&
              ((this._animatingZoom = !0),
              (this._animateToCenter = o),
              (this._animateToZoom = l),
              ct(this._mapPane, "leaflet-zoom-anim")),
            this.fire("zoomanim", { center: o, zoom: l, noUpdate: f }),
            this._tempFireZoomEvent ||
              (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(a(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function () {
          !this._animatingZoom ||
            (this._mapPane && Xt(this._mapPane, "leaflet-zoom-anim"),
            (this._animatingZoom = !1),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire("zoom"),
            delete this._tempFireZoomEvent,
            this.fire("move"),
            this._moveEnd(!0));
        },
      });
    function H0(o, l) {
      return new gt(o, l);
    }
    var rn = rt.extend({
        options: { position: "topright" },
        initialize: function (o) {
          S(this, o);
        },
        getPosition: function () {
          return this.options.position;
        },
        setPosition: function (o) {
          var l = this._map;
          return (
            l && l.removeControl(this),
            (this.options.position = o),
            l && l.addControl(this),
            this
          );
        },
        getContainer: function () {
          return this._container;
        },
        addTo: function (o) {
          this.remove(), (this._map = o);
          var l = (this._container = this.onAdd(o)),
            h = this.getPosition(),
            f = o._controlCorners[h];
          return (
            ct(l, "leaflet-control"),
            h.indexOf("bottom") !== -1
              ? f.insertBefore(l, f.firstChild)
              : f.appendChild(l),
            this._map.on("unload", this.remove, this),
            this
          );
        },
        remove: function () {
          return this._map
            ? (Ht(this._container),
              this.onRemove && this.onRemove(this._map),
              this._map.off("unload", this.remove, this),
              (this._map = null),
              this)
            : this;
        },
        _refocusOnMap: function (o) {
          this._map &&
            o &&
            o.screenX > 0 &&
            o.screenY > 0 &&
            this._map.getContainer().focus();
        },
      }),
      So = function (o) {
        return new rn(o);
      };
    gt.include({
      addControl: function (o) {
        return o.addTo(this), this;
      },
      removeControl: function (o) {
        return o.remove(), this;
      },
      _initControlPos: function () {
        var o = (this._controlCorners = {}),
          l = "leaflet-",
          h = (this._controlContainer = bt(
            "div",
            l + "control-container",
            this._container
          ));
        function f(_, x) {
          var k = l + _ + " " + l + x;
          o[_ + x] = bt("div", k, h);
        }
        f("top", "left"),
          f("top", "right"),
          f("bottom", "left"),
          f("bottom", "right");
      },
      _clearControlPos: function () {
        for (var o in this._controlCorners) Ht(this._controlCorners[o]);
        Ht(this._controlContainer),
          delete this._controlCorners,
          delete this._controlContainer;
      },
    });
    var Mf = rn.extend({
        options: {
          collapsed: !0,
          position: "topright",
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function (o, l, h, f) {
            return h < f ? -1 : f < h ? 1 : 0;
          },
        },
        initialize: function (o, l, h) {
          S(this, h),
            (this._layerControlInputs = []),
            (this._layers = []),
            (this._lastZIndex = 0),
            (this._handlingClick = !1);
          for (var f in o) this._addLayer(o[f], f);
          for (f in l) this._addLayer(l[f], f, !0);
        },
        onAdd: function (o) {
          this._initLayout(),
            this._update(),
            (this._map = o),
            o.on("zoomend", this._checkDisabledLayers, this);
          for (var l = 0; l < this._layers.length; l++)
            this._layers[l].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function (o) {
          return rn.prototype.addTo.call(this, o), this._expandIfNotCollapsed();
        },
        onRemove: function () {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var o = 0; o < this._layers.length; o++)
            this._layers[o].layer.off("add remove", this._onLayerChange, this);
        },
        addBaseLayer: function (o, l) {
          return this._addLayer(o, l), this._map ? this._update() : this;
        },
        addOverlay: function (o, l) {
          return this._addLayer(o, l, !0), this._map ? this._update() : this;
        },
        removeLayer: function (o) {
          o.off("add remove", this._onLayerChange, this);
          var l = this._getLayer(c(o));
          return (
            l && this._layers.splice(this._layers.indexOf(l), 1),
            this._map ? this._update() : this
          );
        },
        expand: function () {
          ct(this._container, "leaflet-control-layers-expanded"),
            (this._section.style.height = null);
          var o = this._map.getSize().y - (this._container.offsetTop + 50);
          return (
            o < this._section.clientHeight
              ? (ct(this._section, "leaflet-control-layers-scrollbar"),
                (this._section.style.height = o + "px"))
              : Xt(this._section, "leaflet-control-layers-scrollbar"),
            this._checkDisabledLayers(),
            this
          );
        },
        collapse: function () {
          return Xt(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function () {
          var o = "leaflet-control-layers",
            l = (this._container = bt("div", o)),
            h = this.options.collapsed;
          l.setAttribute("aria-haspopup", !0), bo(l), Ru(l);
          var f = (this._section = bt("section", o + "-list"));
          h &&
            (this._map.on("click", this.collapse, this),
            it(
              l,
              {
                mouseenter: function () {
                  it(f, "click", ce),
                    this.expand(),
                    setTimeout(function () {
                      zt(f, "click", ce);
                    });
                },
                mouseleave: this.collapse,
              },
              this
            ));
          var _ = (this._layersLink = bt("a", o + "-toggle", l));
          (_.href = "#"),
            (_.title = "Layers"),
            _.setAttribute("role", "button"),
            it(_, "click", ce),
            it(_, "focus", this.expand, this),
            h || this.expand(),
            (this._baseLayersList = bt("div", o + "-base", f)),
            (this._separator = bt("div", o + "-separator", f)),
            (this._overlaysList = bt("div", o + "-overlays", f)),
            l.appendChild(f);
        },
        _getLayer: function (o) {
          for (var l = 0; l < this._layers.length; l++)
            if (this._layers[l] && c(this._layers[l].layer) === o)
              return this._layers[l];
        },
        _addLayer: function (o, l, h) {
          this._map && o.on("add remove", this._onLayerChange, this),
            this._layers.push({ layer: o, name: l, overlay: h }),
            this.options.sortLayers &&
              this._layers.sort(
                a(function (f, _) {
                  return this.options.sortFunction(
                    f.layer,
                    _.layer,
                    f.name,
                    _.name
                  );
                }, this)
              ),
            this.options.autoZIndex &&
              o.setZIndex &&
              (this._lastZIndex++, o.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed();
        },
        _update: function () {
          if (!this._container) return this;
          ia(this._baseLayersList),
            ia(this._overlaysList),
            (this._layerControlInputs = []);
          var o,
            l,
            h,
            f,
            _ = 0;
          for (h = 0; h < this._layers.length; h++)
            (f = this._layers[h]),
              this._addItem(f),
              (l = l || f.overlay),
              (o = o || !f.overlay),
              (_ += f.overlay ? 0 : 1);
          return (
            this.options.hideSingleBase &&
              ((o = o && _ > 1),
              (this._baseLayersList.style.display = o ? "" : "none")),
            (this._separator.style.display = l && o ? "" : "none"),
            this
          );
        },
        _onLayerChange: function (o) {
          this._handlingClick || this._update();
          var l = this._getLayer(c(o.target)),
            h = l.overlay
              ? o.type === "add"
                ? "overlayadd"
                : "overlayremove"
              : o.type === "add"
              ? "baselayerchange"
              : null;
          h && this._map.fire(h, l);
        },
        _createRadioElement: function (o, l) {
          var h =
              '<input type="radio" class="leaflet-control-layers-selector" name="' +
              o +
              '"' +
              (l ? ' checked="checked"' : "") +
              "/>",
            f = document.createElement("div");
          return (f.innerHTML = h), f.firstChild;
        },
        _addItem: function (o) {
          var l = document.createElement("label"),
            h = this._map.hasLayer(o.layer),
            f;
          o.overlay
            ? ((f = document.createElement("input")),
              (f.type = "checkbox"),
              (f.className = "leaflet-control-layers-selector"),
              (f.defaultChecked = h))
            : (f = this._createRadioElement(
                "leaflet-base-layers_" + c(this),
                h
              )),
            this._layerControlInputs.push(f),
            (f.layerId = c(o.layer)),
            it(f, "click", this._onInputClick, this);
          var _ = document.createElement("span");
          _.innerHTML = " " + o.name;
          var x = document.createElement("span");
          l.appendChild(x), x.appendChild(f), x.appendChild(_);
          var k = o.overlay ? this._overlaysList : this._baseLayersList;
          return k.appendChild(l), this._checkDisabledLayers(), l;
        },
        _onInputClick: function () {
          var o = this._layerControlInputs,
            l,
            h,
            f = [],
            _ = [];
          this._handlingClick = !0;
          for (var x = o.length - 1; x >= 0; x--)
            (l = o[x]),
              (h = this._getLayer(l.layerId).layer),
              l.checked ? f.push(h) : l.checked || _.push(h);
          for (x = 0; x < _.length; x++)
            this._map.hasLayer(_[x]) && this._map.removeLayer(_[x]);
          for (x = 0; x < f.length; x++)
            this._map.hasLayer(f[x]) || this._map.addLayer(f[x]);
          (this._handlingClick = !1), this._refocusOnMap();
        },
        _checkDisabledLayers: function () {
          for (
            var o = this._layerControlInputs,
              l,
              h,
              f = this._map.getZoom(),
              _ = o.length - 1;
            _ >= 0;
            _--
          )
            (l = o[_]),
              (h = this._getLayer(l.layerId).layer),
              (l.disabled =
                (h.options.minZoom !== void 0 && f < h.options.minZoom) ||
                (h.options.maxZoom !== void 0 && f > h.options.maxZoom));
        },
        _expandIfNotCollapsed: function () {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
      }),
      V0 = function (o, l, h) {
        return new Mf(o, l, h);
      },
      Au = rn.extend({
        options: {
          position: "topleft",
          zoomInText: '<span aria-hidden="true">+</span>',
          zoomInTitle: "Zoom in",
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          zoomOutTitle: "Zoom out",
        },
        onAdd: function (o) {
          var l = "leaflet-control-zoom",
            h = bt("div", l + " leaflet-bar"),
            f = this.options;
          return (
            (this._zoomInButton = this._createButton(
              f.zoomInText,
              f.zoomInTitle,
              l + "-in",
              h,
              this._zoomIn
            )),
            (this._zoomOutButton = this._createButton(
              f.zoomOutText,
              f.zoomOutTitle,
              l + "-out",
              h,
              this._zoomOut
            )),
            this._updateDisabled(),
            o.on("zoomend zoomlevelschange", this._updateDisabled, this),
            h
          );
        },
        onRemove: function (o) {
          o.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function () {
          return (this._disabled = !0), this._updateDisabled(), this;
        },
        enable: function () {
          return (this._disabled = !1), this._updateDisabled(), this;
        },
        _zoomIn: function (o) {
          !this._disabled &&
            this._map._zoom < this._map.getMaxZoom() &&
            this._map.zoomIn(
              this._map.options.zoomDelta * (o.shiftKey ? 3 : 1)
            );
        },
        _zoomOut: function (o) {
          !this._disabled &&
            this._map._zoom > this._map.getMinZoom() &&
            this._map.zoomOut(
              this._map.options.zoomDelta * (o.shiftKey ? 3 : 1)
            );
        },
        _createButton: function (o, l, h, f, _) {
          var x = bt("a", h, f);
          return (
            (x.innerHTML = o),
            (x.href = "#"),
            (x.title = l),
            x.setAttribute("role", "button"),
            x.setAttribute("aria-label", l),
            bo(x),
            it(x, "click", Fi),
            it(x, "click", _, this),
            it(x, "click", this._refocusOnMap, this),
            x
          );
        },
        _updateDisabled: function () {
          var o = this._map,
            l = "leaflet-disabled";
          Xt(this._zoomInButton, l),
            Xt(this._zoomOutButton, l),
            this._zoomInButton.setAttribute("aria-disabled", "false"),
            this._zoomOutButton.setAttribute("aria-disabled", "false"),
            (this._disabled || o._zoom === o.getMinZoom()) &&
              (ct(this._zoomOutButton, l),
              this._zoomOutButton.setAttribute("aria-disabled", "true")),
            (this._disabled || o._zoom === o.getMaxZoom()) &&
              (ct(this._zoomInButton, l),
              this._zoomInButton.setAttribute("aria-disabled", "true"));
        },
      });
    gt.mergeOptions({ zoomControl: !0 }),
      gt.addInitHook(function () {
        this.options.zoomControl &&
          ((this.zoomControl = new Au()), this.addControl(this.zoomControl));
      });
    var Z0 = function (o) {
        return new Au(o);
      },
      Ef = rn.extend({
        options: {
          position: "bottomleft",
          maxWidth: 100,
          metric: !0,
          imperial: !0,
        },
        onAdd: function (o) {
          var l = "leaflet-control-scale",
            h = bt("div", l),
            f = this.options;
          return (
            this._addScales(f, l + "-line", h),
            o.on(f.updateWhenIdle ? "moveend" : "move", this._update, this),
            o.whenReady(this._update, this),
            h
          );
        },
        onRemove: function (o) {
          o.off(
            this.options.updateWhenIdle ? "moveend" : "move",
            this._update,
            this
          );
        },
        _addScales: function (o, l, h) {
          o.metric && (this._mScale = bt("div", l, h)),
            o.imperial && (this._iScale = bt("div", l, h));
        },
        _update: function () {
          var o = this._map,
            l = o.getSize().y / 2,
            h = o.distance(
              o.containerPointToLatLng([0, l]),
              o.containerPointToLatLng([this.options.maxWidth, l])
            );
          this._updateScales(h);
        },
        _updateScales: function (o) {
          this.options.metric && o && this._updateMetric(o),
            this.options.imperial && o && this._updateImperial(o);
        },
        _updateMetric: function (o) {
          var l = this._getRoundNum(o),
            h = l < 1e3 ? l + " m" : l / 1e3 + " km";
          this._updateScale(this._mScale, h, l / o);
        },
        _updateImperial: function (o) {
          var l = o * 3.2808399,
            h,
            f,
            _;
          l > 5280
            ? ((h = l / 5280),
              (f = this._getRoundNum(h)),
              this._updateScale(this._iScale, f + " mi", f / h))
            : ((_ = this._getRoundNum(l)),
              this._updateScale(this._iScale, _ + " ft", _ / l));
        },
        _updateScale: function (o, l, h) {
          (o.style.width = Math.round(this.options.maxWidth * h) + "px"),
            (o.innerHTML = l);
        },
        _getRoundNum: function (o) {
          var l = Math.pow(10, (Math.floor(o) + "").length - 1),
            h = o / l;
          return (
            (h = h >= 10 ? 10 : h >= 5 ? 5 : h >= 3 ? 3 : h >= 2 ? 2 : 1), l * h
          );
        },
      }),
      U0 = function (o) {
        return new Ef(o);
      },
      $0 =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
      Iu = rn.extend({
        options: {
          position: "bottomright",
          prefix:
            '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
            (G.inlineSvg ? $0 + " " : "") +
            "Leaflet</a>",
        },
        initialize: function (o) {
          S(this, o), (this._attributions = {});
        },
        onAdd: function (o) {
          (o.attributionControl = this),
            (this._container = bt("div", "leaflet-control-attribution")),
            bo(this._container);
          for (var l in o._layers)
            o._layers[l].getAttribution &&
              this.addAttribution(o._layers[l].getAttribution());
          return (
            this._update(),
            o.on("layeradd", this._addAttribution, this),
            this._container
          );
        },
        onRemove: function (o) {
          o.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function (o) {
          o.layer.getAttribution &&
            (this.addAttribution(o.layer.getAttribution()),
            o.layer.once(
              "remove",
              function () {
                this.removeAttribution(o.layer.getAttribution());
              },
              this
            ));
        },
        setPrefix: function (o) {
          return (this.options.prefix = o), this._update(), this;
        },
        addAttribution: function (o) {
          return o
            ? (this._attributions[o] || (this._attributions[o] = 0),
              this._attributions[o]++,
              this._update(),
              this)
            : this;
        },
        removeAttribution: function (o) {
          return o
            ? (this._attributions[o] &&
                (this._attributions[o]--, this._update()),
              this)
            : this;
        },
        _update: function () {
          if (!!this._map) {
            var o = [];
            for (var l in this._attributions)
              this._attributions[l] && o.push(l);
            var h = [];
            this.options.prefix && h.push(this.options.prefix),
              o.length && h.push(o.join(", ")),
              (this._container.innerHTML = h.join(
                ' <span aria-hidden="true">|</span> '
              ));
          }
        },
      });
    gt.mergeOptions({ attributionControl: !0 }),
      gt.addInitHook(function () {
        this.options.attributionControl && new Iu().addTo(this);
      });
    var Y0 = function (o) {
      return new Iu(o);
    };
    (rn.Layers = Mf),
      (rn.Zoom = Au),
      (rn.Scale = Ef),
      (rn.Attribution = Iu),
      (So.layers = V0),
      (So.zoom = Z0),
      (So.scale = U0),
      (So.attribution = Y0);
    var xn = rt.extend({
      initialize: function (o) {
        this._map = o;
      },
      enable: function () {
        return this._enabled
          ? this
          : ((this._enabled = !0), this.addHooks(), this);
      },
      disable: function () {
        return this._enabled
          ? ((this._enabled = !1), this.removeHooks(), this)
          : this;
      },
      enabled: function () {
        return !!this._enabled;
      },
    });
    xn.addTo = function (o, l) {
      return o.addHandler(l, this), this;
    };
    var K0 = { Events: ut },
      Tf = G.touch ? "touchstart mousedown" : "mousedown",
      ni = _t.extend({
        options: { clickTolerance: 3 },
        initialize: function (o, l, h, f) {
          S(this, f),
            (this._element = o),
            (this._dragStartTarget = l || o),
            (this._preventOutline = h);
        },
        enable: function () {
          this._enabled ||
            (it(this._dragStartTarget, Tf, this._onDown, this),
            (this._enabled = !0));
        },
        disable: function () {
          !this._enabled ||
            (ni._dragging === this && this.finishDrag(!0),
            zt(this._dragStartTarget, Tf, this._onDown, this),
            (this._enabled = !1),
            (this._moved = !1));
        },
        _onDown: function (o) {
          if (
            !!this._enabled &&
            ((this._moved = !1), !bu(this._element, "leaflet-zoom-anim"))
          ) {
            if (o.touches && o.touches.length !== 1) {
              ni._dragging === this && this.finishDrag();
              return;
            }
            if (
              !(
                ni._dragging ||
                o.shiftKey ||
                (o.which !== 1 && o.button !== 1 && !o.touches)
              ) &&
              ((ni._dragging = this),
              this._preventOutline && Mu(this._element),
              ku(),
              yo(),
              !this._moving)
            ) {
              this.fire("down");
              var l = o.touches ? o.touches[0] : o,
                h = bf(this._element);
              (this._startPoint = new z(l.clientX, l.clientY)),
                (this._startPos = Ni(this._element)),
                (this._parentScale = Eu(h));
              var f = o.type === "mousedown";
              it(document, f ? "mousemove" : "touchmove", this._onMove, this),
                it(
                  document,
                  f ? "mouseup" : "touchend touchcancel",
                  this._onUp,
                  this
                );
            }
          }
        },
        _onMove: function (o) {
          if (!!this._enabled) {
            if (o.touches && o.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var l = o.touches && o.touches.length === 1 ? o.touches[0] : o,
              h = new z(l.clientX, l.clientY)._subtract(this._startPoint);
            (!h.x && !h.y) ||
              Math.abs(h.x) + Math.abs(h.y) < this.options.clickTolerance ||
              ((h.x /= this._parentScale.x),
              (h.y /= this._parentScale.y),
              ce(o),
              this._moved ||
                (this.fire("dragstart"),
                (this._moved = !0),
                ct(document.body, "leaflet-dragging"),
                (this._lastTarget = o.target || o.srcElement),
                window.SVGElementInstance &&
                  this._lastTarget instanceof window.SVGElementInstance &&
                  (this._lastTarget = this._lastTarget.correspondingUseElement),
                ct(this._lastTarget, "leaflet-drag-target")),
              (this._newPos = this._startPos.add(h)),
              (this._moving = !0),
              (this._lastEvent = o),
              this._updatePosition());
          }
        },
        _updatePosition: function () {
          var o = { originalEvent: this._lastEvent };
          this.fire("predrag", o),
            qt(this._element, this._newPos),
            this.fire("drag", o);
        },
        _onUp: function () {
          !this._enabled || this.finishDrag();
        },
        finishDrag: function (o) {
          Xt(document.body, "leaflet-dragging"),
            this._lastTarget &&
              (Xt(this._lastTarget, "leaflet-drag-target"),
              (this._lastTarget = null)),
            zt(document, "mousemove touchmove", this._onMove, this),
            zt(document, "mouseup touchend touchcancel", this._onUp, this),
            Cu(),
            xo(),
            this._moved &&
              this._moving &&
              this.fire("dragend", {
                noInertia: o,
                distance: this._newPos.distanceTo(this._startPos),
              }),
            (this._moving = !1),
            (ni._dragging = !1);
        },
      });
    function Of(o, l) {
      if (!l || !o.length) return o.slice();
      var h = l * l;
      return (o = Q0(o, h)), (o = G0(o, h)), o;
    }
    function Df(o, l, h) {
      return Math.sqrt(Po(o, l, h, !0));
    }
    function X0(o, l, h) {
      return Po(o, l, h);
    }
    function G0(o, l) {
      var h = o.length,
        f = typeof Uint8Array != void 0 + "" ? Uint8Array : Array,
        _ = new f(h);
      (_[0] = _[h - 1] = 1), Nu(o, _, l, 0, h - 1);
      var x,
        k = [];
      for (x = 0; x < h; x++) _[x] && k.push(o[x]);
      return k;
    }
    function Nu(o, l, h, f, _) {
      var x = 0,
        k,
        T,
        O;
      for (T = f + 1; T <= _ - 1; T++)
        (O = Po(o[T], o[f], o[_], !0)), O > x && ((k = T), (x = O));
      x > h && ((l[k] = 1), Nu(o, l, h, f, k), Nu(o, l, h, k, _));
    }
    function Q0(o, l) {
      for (var h = [o[0]], f = 1, _ = 0, x = o.length; f < x; f++)
        q0(o[f], o[_]) > l && (h.push(o[f]), (_ = f));
      return _ < x - 1 && h.push(o[x - 1]), h;
    }
    var Rf;
    function zf(o, l, h, f, _) {
      var x = f ? Rf : ji(o, h),
        k = ji(l, h),
        T,
        O,
        F;
      for (Rf = k; ; ) {
        if (!(x | k)) return [o, l];
        if (x & k) return !1;
        (T = x || k),
          (O = la(o, l, T, h, _)),
          (F = ji(O, h)),
          T === x ? ((o = O), (x = F)) : ((l = O), (k = F));
      }
    }
    function la(o, l, h, f, _) {
      var x = l.x - o.x,
        k = l.y - o.y,
        T = f.min,
        O = f.max,
        F,
        $;
      return (
        h & 8
          ? ((F = o.x + (x * (O.y - o.y)) / k), ($ = O.y))
          : h & 4
          ? ((F = o.x + (x * (T.y - o.y)) / k), ($ = T.y))
          : h & 2
          ? ((F = O.x), ($ = o.y + (k * (O.x - o.x)) / x))
          : h & 1 && ((F = T.x), ($ = o.y + (k * (T.x - o.x)) / x)),
        new z(F, $, _)
      );
    }
    function ji(o, l) {
      var h = 0;
      return (
        o.x < l.min.x ? (h |= 1) : o.x > l.max.x && (h |= 2),
        o.y < l.min.y ? (h |= 4) : o.y > l.max.y && (h |= 8),
        h
      );
    }
    function q0(o, l) {
      var h = l.x - o.x,
        f = l.y - o.y;
      return h * h + f * f;
    }
    function Po(o, l, h, f) {
      var _ = l.x,
        x = l.y,
        k = h.x - _,
        T = h.y - x,
        O = k * k + T * T,
        F;
      return (
        O > 0 &&
          ((F = ((o.x - _) * k + (o.y - x) * T) / O),
          F > 1
            ? ((_ = h.x), (x = h.y))
            : F > 0 && ((_ += k * F), (x += T * F))),
        (k = o.x - _),
        (T = o.y - x),
        f ? k * k + T * T : new z(_, x)
      );
    }
    function Ve(o) {
      return !P(o[0]) || (typeof o[0][0] != "object" && typeof o[0][0] < "u");
    }
    function Af(o) {
      return (
        console.warn(
          "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
        ),
        Ve(o)
      );
    }
    function If(o, l) {
      var h, f, _, x, k, T, O, F;
      if (!o || o.length === 0) throw new Error("latlngs not passed");
      Ve(o) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (o = o[0]));
      var $ = [];
      for (var et in o) $.push(l.project(lt(o[et])));
      var st = $.length;
      for (h = 0, f = 0; h < st - 1; h++) f += $[h].distanceTo($[h + 1]) / 2;
      if (f === 0) F = $[0];
      else
        for (h = 0, x = 0; h < st - 1; h++)
          if (
            ((k = $[h]), (T = $[h + 1]), (_ = k.distanceTo(T)), (x += _), x > f)
          ) {
            (O = (x - f) / _),
              (F = [T.x - O * (T.x - k.x), T.y - O * (T.y - k.y)]);
            break;
          }
      return l.unproject(W(F));
    }
    var J0 = {
      __proto__: null,
      simplify: Of,
      pointToSegmentDistance: Df,
      closestPointOnSegment: X0,
      clipSegment: zf,
      _getEdgeIntersection: la,
      _getBitCode: ji,
      _sqClosestPointOnSegment: Po,
      isFlat: Ve,
      _flat: Af,
      polylineCenter: If,
    };
    function Nf(o, l, h) {
      var f,
        _ = [1, 4, 2, 8],
        x,
        k,
        T,
        O,
        F,
        $,
        et,
        st;
      for (x = 0, $ = o.length; x < $; x++) o[x]._code = ji(o[x], l);
      for (T = 0; T < 4; T++) {
        for (et = _[T], f = [], x = 0, $ = o.length, k = $ - 1; x < $; k = x++)
          (O = o[x]),
            (F = o[k]),
            O._code & et
              ? F._code & et ||
                ((st = la(F, O, et, l, h)), (st._code = ji(st, l)), f.push(st))
              : (F._code & et &&
                  ((st = la(F, O, et, l, h)),
                  (st._code = ji(st, l)),
                  f.push(st)),
                f.push(O));
        o = f;
      }
      return o;
    }
    function Bf(o, l) {
      var h, f, _, x, k, T, O, F, $;
      if (!o || o.length === 0) throw new Error("latlngs not passed");
      Ve(o) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (o = o[0]));
      var et = [];
      for (var st in o) et.push(l.project(lt(o[st])));
      var Ze = et.length;
      for (T = O = F = 0, h = 0, f = Ze - 1; h < Ze; f = h++)
        (_ = et[h]),
          (x = et[f]),
          (k = _.y * x.x - x.y * _.x),
          (O += (_.x + x.x) * k),
          (F += (_.y + x.y) * k),
          (T += k * 3);
      return T === 0 ? ($ = et[0]) : ($ = [O / T, F / T]), l.unproject(W($));
    }
    var tx = { __proto__: null, clipPolygon: Nf, polygonCenter: Bf },
      Bu = {
        project: function (o) {
          return new z(o.lng, o.lat);
        },
        unproject: function (o) {
          return new at(o.y, o.x);
        },
        bounds: new Q([-180, -90], [180, 90]),
      },
      Fu = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new Q(
          [-2003750834279e-5, -1549657073972e-5],
          [2003750834279e-5, 1876465623138e-5]
        ),
        project: function (o) {
          var l = Math.PI / 180,
            h = this.R,
            f = o.lat * l,
            _ = this.R_MINOR / h,
            x = Math.sqrt(1 - _ * _),
            k = x * Math.sin(f),
            T =
              Math.tan(Math.PI / 4 - f / 2) /
              Math.pow((1 - k) / (1 + k), x / 2);
          return (
            (f = -h * Math.log(Math.max(T, 1e-10))), new z(o.lng * l * h, f)
          );
        },
        unproject: function (o) {
          for (
            var l = 180 / Math.PI,
              h = this.R,
              f = this.R_MINOR / h,
              _ = Math.sqrt(1 - f * f),
              x = Math.exp(-o.y / h),
              k = Math.PI / 2 - 2 * Math.atan(x),
              T = 0,
              O = 0.1,
              F;
            T < 15 && Math.abs(O) > 1e-7;
            T++
          )
            (F = _ * Math.sin(k)),
              (F = Math.pow((1 - F) / (1 + F), _ / 2)),
              (O = Math.PI / 2 - 2 * Math.atan(x * F) - k),
              (k += O);
          return new at(k * l, (o.x * l) / h);
        },
      },
      ex = { __proto__: null, LonLat: Bu, Mercator: Fu, SphericalMercator: Jn },
      nx = r({}, je, {
        code: "EPSG:3395",
        projection: Fu,
        transformation: (function () {
          var o = 0.5 / (Math.PI * Fu.R);
          return zi(o, 0.5, -o, 0.5);
        })(),
      }),
      Ff = r({}, je, {
        code: "EPSG:4326",
        projection: Bu,
        transformation: zi(1 / 180, 1, -1 / 180, 0.5),
      }),
      ix = r({}, oe, {
        projection: Bu,
        transformation: zi(1, 0, -1, 0),
        scale: function (o) {
          return Math.pow(2, o);
        },
        zoom: function (o) {
          return Math.log(o) / Math.LN2;
        },
        distance: function (o, l) {
          var h = l.lng - o.lng,
            f = l.lat - o.lat;
          return Math.sqrt(h * h + f * f);
        },
        infinite: !0,
      });
    (oe.Earth = je),
      (oe.EPSG3395 = nx),
      (oe.EPSG3857 = _r),
      (oe.EPSG900913 = po),
      (oe.EPSG4326 = Ff),
      (oe.Simple = ix);
    var on = _t.extend({
      options: {
        pane: "overlayPane",
        attribution: null,
        bubblingMouseEvents: !0,
      },
      addTo: function (o) {
        return o.addLayer(this), this;
      },
      remove: function () {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function (o) {
        return o && o.removeLayer(this), this;
      },
      getPane: function (o) {
        return this._map.getPane(o ? this.options[o] || o : this.options.pane);
      },
      addInteractiveTarget: function (o) {
        return (this._map._targets[c(o)] = this), this;
      },
      removeInteractiveTarget: function (o) {
        return delete this._map._targets[c(o)], this;
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      _layerAdd: function (o) {
        var l = o.target;
        if (!!l.hasLayer(this)) {
          if (
            ((this._map = l),
            (this._zoomAnimated = l._zoomAnimated),
            this.getEvents)
          ) {
            var h = this.getEvents();
            l.on(h, this),
              this.once(
                "remove",
                function () {
                  l.off(h, this);
                },
                this
              );
          }
          this.onAdd(l), this.fire("add"), l.fire("layeradd", { layer: this });
        }
      },
    });
    gt.include({
      addLayer: function (o) {
        if (!o._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var l = c(o);
        return this._layers[l]
          ? this
          : ((this._layers[l] = o),
            (o._mapToAdd = this),
            o.beforeAdd && o.beforeAdd(this),
            this.whenReady(o._layerAdd, o),
            this);
      },
      removeLayer: function (o) {
        var l = c(o);
        return this._layers[l]
          ? (this._loaded && o.onRemove(this),
            delete this._layers[l],
            this._loaded &&
              (this.fire("layerremove", { layer: o }), o.fire("remove")),
            (o._map = o._mapToAdd = null),
            this)
          : this;
      },
      hasLayer: function (o) {
        return c(o) in this._layers;
      },
      eachLayer: function (o, l) {
        for (var h in this._layers) o.call(l, this._layers[h]);
        return this;
      },
      _addLayers: function (o) {
        o = o ? (P(o) ? o : [o]) : [];
        for (var l = 0, h = o.length; l < h; l++) this.addLayer(o[l]);
      },
      _addZoomLimit: function (o) {
        (!isNaN(o.options.maxZoom) || !isNaN(o.options.minZoom)) &&
          ((this._zoomBoundLayers[c(o)] = o), this._updateZoomLevels());
      },
      _removeZoomLimit: function (o) {
        var l = c(o);
        this._zoomBoundLayers[l] &&
          (delete this._zoomBoundLayers[l], this._updateZoomLevels());
      },
      _updateZoomLevels: function () {
        var o = 1 / 0,
          l = -1 / 0,
          h = this._getZoomSpan();
        for (var f in this._zoomBoundLayers) {
          var _ = this._zoomBoundLayers[f].options;
          (o = _.minZoom === void 0 ? o : Math.min(o, _.minZoom)),
            (l = _.maxZoom === void 0 ? l : Math.max(l, _.maxZoom));
        }
        (this._layersMaxZoom = l === -1 / 0 ? void 0 : l),
          (this._layersMinZoom = o === 1 / 0 ? void 0 : o),
          h !== this._getZoomSpan() && this.fire("zoomlevelschange"),
          this.options.maxZoom === void 0 &&
            this._layersMaxZoom &&
            this.getZoom() > this._layersMaxZoom &&
            this.setZoom(this._layersMaxZoom),
          this.options.minZoom === void 0 &&
            this._layersMinZoom &&
            this.getZoom() < this._layersMinZoom &&
            this.setZoom(this._layersMinZoom);
      },
    });
    var Sr = on.extend({
        initialize: function (o, l) {
          S(this, l), (this._layers = {});
          var h, f;
          if (o) for (h = 0, f = o.length; h < f; h++) this.addLayer(o[h]);
        },
        addLayer: function (o) {
          var l = this.getLayerId(o);
          return (
            (this._layers[l] = o), this._map && this._map.addLayer(o), this
          );
        },
        removeLayer: function (o) {
          var l = o in this._layers ? o : this.getLayerId(o);
          return (
            this._map &&
              this._layers[l] &&
              this._map.removeLayer(this._layers[l]),
            delete this._layers[l],
            this
          );
        },
        hasLayer: function (o) {
          var l = typeof o == "number" ? o : this.getLayerId(o);
          return l in this._layers;
        },
        clearLayers: function () {
          return this.eachLayer(this.removeLayer, this);
        },
        invoke: function (o) {
          var l = Array.prototype.slice.call(arguments, 1),
            h,
            f;
          for (h in this._layers)
            (f = this._layers[h]), f[o] && f[o].apply(f, l);
          return this;
        },
        onAdd: function (o) {
          this.eachLayer(o.addLayer, o);
        },
        onRemove: function (o) {
          this.eachLayer(o.removeLayer, o);
        },
        eachLayer: function (o, l) {
          for (var h in this._layers) o.call(l, this._layers[h]);
          return this;
        },
        getLayer: function (o) {
          return this._layers[o];
        },
        getLayers: function () {
          var o = [];
          return this.eachLayer(o.push, o), o;
        },
        setZIndex: function (o) {
          return this.invoke("setZIndex", o);
        },
        getLayerId: function (o) {
          return c(o);
        },
      }),
      rx = function (o, l) {
        return new Sr(o, l);
      },
      Wi = Sr.extend({
        addLayer: function (o) {
          return this.hasLayer(o)
            ? this
            : (o.addEventParent(this),
              Sr.prototype.addLayer.call(this, o),
              this.fire("layeradd", { layer: o }));
        },
        removeLayer: function (o) {
          return this.hasLayer(o)
            ? (o in this._layers && (o = this._layers[o]),
              o.removeEventParent(this),
              Sr.prototype.removeLayer.call(this, o),
              this.fire("layerremove", { layer: o }))
            : this;
        },
        setStyle: function (o) {
          return this.invoke("setStyle", o);
        },
        bringToFront: function () {
          return this.invoke("bringToFront");
        },
        bringToBack: function () {
          return this.invoke("bringToBack");
        },
        getBounds: function () {
          var o = new Ot();
          for (var l in this._layers) {
            var h = this._layers[l];
            o.extend(h.getBounds ? h.getBounds() : h.getLatLng());
          }
          return o;
        },
      }),
      ox = function (o, l) {
        return new Wi(o, l);
      },
      Pr = rt.extend({
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          crossOrigin: !1,
        },
        initialize: function (o) {
          S(this, o);
        },
        createIcon: function (o) {
          return this._createIcon("icon", o);
        },
        createShadow: function (o) {
          return this._createIcon("shadow", o);
        },
        _createIcon: function (o, l) {
          var h = this._getIconUrl(o);
          if (!h) {
            if (o === "icon")
              throw new Error(
                "iconUrl not set in Icon options (see the docs)."
              );
            return null;
          }
          var f = this._createImg(h, l && l.tagName === "IMG" ? l : null);
          return (
            this._setIconStyles(f, o),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (f.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            f
          );
        },
        _setIconStyles: function (o, l) {
          var h = this.options,
            f = h[l + "Size"];
          typeof f == "number" && (f = [f, f]);
          var _ = W(f),
            x = W(
              (l === "shadow" && h.shadowAnchor) ||
                h.iconAnchor ||
                (_ && _.divideBy(2, !0))
            );
          (o.className = "leaflet-marker-" + l + " " + (h.className || "")),
            x &&
              ((o.style.marginLeft = -x.x + "px"),
              (o.style.marginTop = -x.y + "px")),
            _ && ((o.style.width = _.x + "px"), (o.style.height = _.y + "px"));
        },
        _createImg: function (o, l) {
          return (l = l || document.createElement("img")), (l.src = o), l;
        },
        _getIconUrl: function (o) {
          return (
            (G.retina && this.options[o + "RetinaUrl"]) ||
            this.options[o + "Url"]
          );
        },
      });
    function sx(o) {
      return new Pr(o);
    }
    var ko = Pr.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41],
        },
        _getIconUrl: function (o) {
          return (
            typeof ko.imagePath != "string" &&
              (ko.imagePath = this._detectIconPath()),
            (this.options.imagePath || ko.imagePath) +
              Pr.prototype._getIconUrl.call(this, o)
          );
        },
        _stripUrl: function (o) {
          var l = function (h, f, _) {
            var x = f.exec(h);
            return x && x[_];
          };
          return (
            (o = l(o, /^url\((['"])?(.+)\1\)$/, 2)),
            o && l(o, /^(.*)marker-icon\.png$/, 1)
          );
        },
        _detectIconPath: function () {
          var o = bt("div", "leaflet-default-icon-path", document.body),
            l = vo(o, "background-image") || vo(o, "backgroundImage");
          if ((document.body.removeChild(o), (l = this._stripUrl(l)), l))
            return l;
          var h = document.querySelector('link[href$="leaflet.css"]');
          return h ? h.href.substring(0, h.href.length - 11 - 1) : "";
        },
      }),
      jf = xn.extend({
        initialize: function (o) {
          this._marker = o;
        },
        addHooks: function () {
          var o = this._marker._icon;
          this._draggable || (this._draggable = new ni(o, o, !0)),
            this._draggable
              .on(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd,
                },
                this
              )
              .enable(),
            ct(o, "leaflet-marker-draggable");
        },
        removeHooks: function () {
          this._draggable
            .off(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .disable(),
            this._marker._icon &&
              Xt(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function () {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function (o) {
          var l = this._marker,
            h = l._map,
            f = this._marker.options.autoPanSpeed,
            _ = this._marker.options.autoPanPadding,
            x = Ni(l._icon),
            k = h.getPixelBounds(),
            T = h.getPixelOrigin(),
            O = ot(k.min._subtract(T).add(_), k.max._subtract(T).subtract(_));
          if (!O.contains(x)) {
            var F = W(
              (Math.max(O.max.x, x.x) - O.max.x) / (k.max.x - O.max.x) -
                (Math.min(O.min.x, x.x) - O.min.x) / (k.min.x - O.min.x),
              (Math.max(O.max.y, x.y) - O.max.y) / (k.max.y - O.max.y) -
                (Math.min(O.min.y, x.y) - O.min.y) / (k.min.y - O.min.y)
            ).multiplyBy(f);
            h.panBy(F, { animate: !1 }),
              this._draggable._newPos._add(F),
              this._draggable._startPos._add(F),
              qt(l._icon, this._draggable._newPos),
              this._onDrag(o),
              (this._panRequest = K(this._adjustPan.bind(this, o)));
          }
        },
        _onDragStart: function () {
          (this._oldLatLng = this._marker.getLatLng()),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function (o) {
          this._marker.options.autoPan &&
            (X(this._panRequest),
            (this._panRequest = K(this._adjustPan.bind(this, o))));
        },
        _onDrag: function (o) {
          var l = this._marker,
            h = l._shadow,
            f = Ni(l._icon),
            _ = l._map.layerPointToLatLng(f);
          h && qt(h, f),
            (l._latlng = _),
            (o.latlng = _),
            (o.oldLatLng = this._oldLatLng),
            l.fire("move", o).fire("drag", o);
        },
        _onDragEnd: function (o) {
          X(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire("moveend").fire("dragend", o);
        },
      }),
      ua = on.extend({
        options: {
          icon: new ko(),
          interactive: !0,
          keyboard: !0,
          title: "",
          alt: "Marker",
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: "markerPane",
          shadowPane: "shadowPane",
          bubblingMouseEvents: !1,
          autoPanOnFocus: !0,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10,
        },
        initialize: function (o, l) {
          S(this, l), (this._latlng = lt(o));
        },
        onAdd: function (o) {
          (this._zoomAnimated =
            this._zoomAnimated && o.options.markerZoomAnimation),
            this._zoomAnimated && o.on("zoomanim", this._animateZoom, this),
            this._initIcon(),
            this.update();
        },
        onRemove: function (o) {
          this.dragging &&
            this.dragging.enabled() &&
            ((this.options.draggable = !0), this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && o.off("zoomanim", this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow();
        },
        getEvents: function () {
          return { zoom: this.update, viewreset: this.update };
        },
        getLatLng: function () {
          return this._latlng;
        },
        setLatLng: function (o) {
          var l = this._latlng;
          return (
            (this._latlng = lt(o)),
            this.update(),
            this.fire("move", { oldLatLng: l, latlng: this._latlng })
          );
        },
        setZIndexOffset: function (o) {
          return (this.options.zIndexOffset = o), this.update();
        },
        getIcon: function () {
          return this.options.icon;
        },
        setIcon: function (o) {
          return (
            (this.options.icon = o),
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
          );
        },
        getElement: function () {
          return this._icon;
        },
        update: function () {
          if (this._icon && this._map) {
            var o = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(o);
          }
          return this;
        },
        _initIcon: function () {
          var o = this.options,
            l = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
            h = o.icon.createIcon(this._icon),
            f = !1;
          h !== this._icon &&
            (this._icon && this._removeIcon(),
            (f = !0),
            o.title && (h.title = o.title),
            h.tagName === "IMG" && (h.alt = o.alt || "")),
            ct(h, l),
            o.keyboard &&
              ((h.tabIndex = "0"), h.setAttribute("role", "button")),
            (this._icon = h),
            o.riseOnHover &&
              this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex,
              }),
            this.options.autoPanOnFocus &&
              it(h, "focus", this._panOnFocus, this);
          var _ = o.icon.createShadow(this._shadow),
            x = !1;
          _ !== this._shadow && (this._removeShadow(), (x = !0)),
            _ && (ct(_, l), (_.alt = "")),
            (this._shadow = _),
            o.opacity < 1 && this._updateOpacity(),
            f && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            _ && x && this.getPane(o.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function () {
          this.options.riseOnHover &&
            this.off({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            }),
            this.options.autoPanOnFocus &&
              zt(this._icon, "focus", this._panOnFocus, this),
            Ht(this._icon),
            this.removeInteractiveTarget(this._icon),
            (this._icon = null);
        },
        _removeShadow: function () {
          this._shadow && Ht(this._shadow), (this._shadow = null);
        },
        _setPos: function (o) {
          this._icon && qt(this._icon, o),
            this._shadow && qt(this._shadow, o),
            (this._zIndex = o.y + this.options.zIndexOffset),
            this._resetZIndex();
        },
        _updateZIndex: function (o) {
          this._icon && (this._icon.style.zIndex = this._zIndex + o);
        },
        _animateZoom: function (o) {
          var l = this._map
            ._latLngToNewLayerPoint(this._latlng, o.zoom, o.center)
            .round();
          this._setPos(l);
        },
        _initInteraction: function () {
          if (
            !!this.options.interactive &&
            (ct(this._icon, "leaflet-interactive"),
            this.addInteractiveTarget(this._icon),
            jf)
          ) {
            var o = this.options.draggable;
            this.dragging &&
              ((o = this.dragging.enabled()), this.dragging.disable()),
              (this.dragging = new jf(this)),
              o && this.dragging.enable();
          }
        },
        setOpacity: function (o) {
          return (
            (this.options.opacity = o), this._map && this._updateOpacity(), this
          );
        },
        _updateOpacity: function () {
          var o = this.options.opacity;
          this._icon && He(this._icon, o), this._shadow && He(this._shadow, o);
        },
        _bringToFront: function () {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function () {
          this._updateZIndex(0);
        },
        _panOnFocus: function () {
          var o = this._map;
          if (!!o) {
            var l = this.options.icon.options,
              h = l.iconSize ? W(l.iconSize) : W(0, 0),
              f = l.iconAnchor ? W(l.iconAnchor) : W(0, 0);
            o.panInside(this._latlng, {
              paddingTopLeft: f,
              paddingBottomRight: h.subtract(f),
            });
          }
        },
        _getPopupAnchor: function () {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function () {
          return this.options.icon.options.tooltipAnchor;
        },
      });
    function ax(o, l) {
      return new ua(o, l);
    }
    var ii = on.extend({
        options: {
          stroke: !0,
          color: "#3388ff",
          weight: 3,
          opacity: 1,
          lineCap: "round",
          lineJoin: "round",
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: 0.2,
          fillRule: "evenodd",
          interactive: !0,
          bubblingMouseEvents: !0,
        },
        beforeAdd: function (o) {
          this._renderer = o.getRenderer(this);
        },
        onAdd: function () {
          this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this);
        },
        onRemove: function () {
          this._renderer._removePath(this);
        },
        redraw: function () {
          return this._map && this._renderer._updatePath(this), this;
        },
        setStyle: function (o) {
          return (
            S(this, o),
            this._renderer &&
              (this._renderer._updateStyle(this),
              this.options.stroke &&
                o &&
                Object.prototype.hasOwnProperty.call(o, "weight") &&
                this._updateBounds()),
            this
          );
        },
        bringToFront: function () {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        bringToBack: function () {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function () {
          return this._path;
        },
        _reset: function () {
          this._project(), this._update();
        },
        _clickTolerance: function () {
          return (
            (this.options.stroke ? this.options.weight / 2 : 0) +
            (this._renderer.options.tolerance || 0)
          );
        },
      }),
      ca = ii.extend({
        options: { fill: !0, radius: 10 },
        initialize: function (o, l) {
          S(this, l),
            (this._latlng = lt(o)),
            (this._radius = this.options.radius);
        },
        setLatLng: function (o) {
          var l = this._latlng;
          return (
            (this._latlng = lt(o)),
            this.redraw(),
            this.fire("move", { oldLatLng: l, latlng: this._latlng })
          );
        },
        getLatLng: function () {
          return this._latlng;
        },
        setRadius: function (o) {
          return (this.options.radius = this._radius = o), this.redraw();
        },
        getRadius: function () {
          return this._radius;
        },
        setStyle: function (o) {
          var l = (o && o.radius) || this._radius;
          return ii.prototype.setStyle.call(this, o), this.setRadius(l), this;
        },
        _project: function () {
          (this._point = this._map.latLngToLayerPoint(this._latlng)),
            this._updateBounds();
        },
        _updateBounds: function () {
          var o = this._radius,
            l = this._radiusY || o,
            h = this._clickTolerance(),
            f = [o + h, l + h];
          this._pxBounds = new Q(this._point.subtract(f), this._point.add(f));
        },
        _update: function () {
          this._map && this._updatePath();
        },
        _updatePath: function () {
          this._renderer._updateCircle(this);
        },
        _empty: function () {
          return (
            this._radius && !this._renderer._bounds.intersects(this._pxBounds)
          );
        },
        _containsPoint: function (o) {
          return (
            o.distanceTo(this._point) <= this._radius + this._clickTolerance()
          );
        },
      });
    function lx(o, l) {
      return new ca(o, l);
    }
    var ju = ca.extend({
      initialize: function (o, l, h) {
        if (
          (typeof l == "number" && (l = r({}, h, { radius: l })),
          S(this, l),
          (this._latlng = lt(o)),
          isNaN(this.options.radius))
        )
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      setRadius: function (o) {
        return (this._mRadius = o), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var o = [this._radius, this._radiusY || this._radius];
        return new Ot(
          this._map.layerPointToLatLng(this._point.subtract(o)),
          this._map.layerPointToLatLng(this._point.add(o))
        );
      },
      setStyle: ii.prototype.setStyle,
      _project: function () {
        var o = this._latlng.lng,
          l = this._latlng.lat,
          h = this._map,
          f = h.options.crs;
        if (f.distance === je.distance) {
          var _ = Math.PI / 180,
            x = this._mRadius / je.R / _,
            k = h.project([l + x, o]),
            T = h.project([l - x, o]),
            O = k.add(T).divideBy(2),
            F = h.unproject(O).lat,
            $ =
              Math.acos(
                (Math.cos(x * _) - Math.sin(l * _) * Math.sin(F * _)) /
                  (Math.cos(l * _) * Math.cos(F * _))
              ) / _;
          (isNaN($) || $ === 0) && ($ = x / Math.cos((Math.PI / 180) * l)),
            (this._point = O.subtract(h.getPixelOrigin())),
            (this._radius = isNaN($) ? 0 : O.x - h.project([F, o - $]).x),
            (this._radiusY = O.y - k.y);
        } else {
          var et = f.unproject(
            f.project(this._latlng).subtract([this._mRadius, 0])
          );
          (this._point = h.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - h.latLngToLayerPoint(et).x);
        }
        this._updateBounds();
      },
    });
    function ux(o, l, h) {
      return new ju(o, l, h);
    }
    var zn = ii.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (o, l) {
        S(this, l), this._setLatLngs(o);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (o) {
        return this._setLatLngs(o), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (o) {
        for (
          var l = 1 / 0, h = null, f = Po, _, x, k = 0, T = this._parts.length;
          k < T;
          k++
        )
          for (var O = this._parts[k], F = 1, $ = O.length; F < $; F++) {
            (_ = O[F - 1]), (x = O[F]);
            var et = f(o, _, x, !0);
            et < l && ((l = et), (h = f(o, _, x)));
          }
        return h && (h.distance = Math.sqrt(l)), h;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return If(this._defaultShape(), this._map.options.crs);
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (o, l) {
        return (
          (l = l || this._defaultShape()),
          (o = lt(o)),
          l.push(o),
          this._bounds.extend(o),
          this.redraw()
        );
      },
      _setLatLngs: function (o) {
        (this._bounds = new Ot()), (this._latlngs = this._convertLatLngs(o));
      },
      _defaultShape: function () {
        return Ve(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (o) {
        for (var l = [], h = Ve(o), f = 0, _ = o.length; f < _; f++)
          h
            ? ((l[f] = lt(o[f])), this._bounds.extend(l[f]))
            : (l[f] = this._convertLatLngs(o[f]));
        return l;
      },
      _project: function () {
        var o = new Q();
        (this._rings = []),
          this._projectLatlngs(this._latlngs, this._rings, o),
          this._bounds.isValid() &&
            o.isValid() &&
            ((this._rawPxBounds = o), this._updateBounds());
      },
      _updateBounds: function () {
        var o = this._clickTolerance(),
          l = new z(o, o);
        !this._rawPxBounds ||
          (this._pxBounds = new Q([
            this._rawPxBounds.min.subtract(l),
            this._rawPxBounds.max.add(l),
          ]));
      },
      _projectLatlngs: function (o, l, h) {
        var f = o[0] instanceof at,
          _ = o.length,
          x,
          k;
        if (f) {
          for (k = [], x = 0; x < _; x++)
            (k[x] = this._map.latLngToLayerPoint(o[x])), h.extend(k[x]);
          l.push(k);
        } else for (x = 0; x < _; x++) this._projectLatlngs(o[x], l, h);
      },
      _clipPoints: function () {
        var o = this._renderer._bounds;
        if (
          ((this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(o)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var l = this._parts,
            h,
            f,
            _,
            x,
            k,
            T,
            O;
          for (h = 0, _ = 0, x = this._rings.length; h < x; h++)
            for (O = this._rings[h], f = 0, k = O.length; f < k - 1; f++)
              (T = zf(O[f], O[f + 1], o, f, !0)),
                T &&
                  ((l[_] = l[_] || []),
                  l[_].push(T[0]),
                  (T[1] !== O[f + 1] || f === k - 2) && (l[_].push(T[1]), _++));
        }
      },
      _simplifyPoints: function () {
        for (
          var o = this._parts,
            l = this.options.smoothFactor,
            h = 0,
            f = o.length;
          h < f;
          h++
        )
          o[h] = Of(o[h], l);
      },
      _update: function () {
        !this._map ||
          (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (o, l) {
        var h,
          f,
          _,
          x,
          k,
          T,
          O = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(o)) return !1;
        for (h = 0, x = this._parts.length; h < x; h++)
          for (
            T = this._parts[h], f = 0, k = T.length, _ = k - 1;
            f < k;
            _ = f++
          )
            if (!(!l && f === 0) && Df(o, T[_], T[f]) <= O) return !0;
        return !1;
      },
    });
    function cx(o, l) {
      return new zn(o, l);
    }
    zn._flat = Af;
    var kr = zn.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Bf(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function (o) {
        var l = zn.prototype._convertLatLngs.call(this, o),
          h = l.length;
        return (
          h >= 2 && l[0] instanceof at && l[0].equals(l[h - 1]) && l.pop(), l
        );
      },
      _setLatLngs: function (o) {
        zn.prototype._setLatLngs.call(this, o),
          Ve(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return Ve(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var o = this._renderer._bounds,
          l = this.options.weight,
          h = new z(l, l);
        if (
          ((o = new Q(o.min.subtract(h), o.max.add(h))),
          (this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(o)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var f = 0, _ = this._rings.length, x; f < _; f++)
            (x = Nf(this._rings[f], o, !0)), x.length && this._parts.push(x);
        }
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (o) {
        var l = !1,
          h,
          f,
          _,
          x,
          k,
          T,
          O,
          F;
        if (!this._pxBounds || !this._pxBounds.contains(o)) return !1;
        for (x = 0, O = this._parts.length; x < O; x++)
          for (
            h = this._parts[x], k = 0, F = h.length, T = F - 1;
            k < F;
            T = k++
          )
            (f = h[k]),
              (_ = h[T]),
              f.y > o.y != _.y > o.y &&
                o.x < ((_.x - f.x) * (o.y - f.y)) / (_.y - f.y) + f.x &&
                (l = !l);
        return l || zn.prototype._containsPoint.call(this, o, !0);
      },
    });
    function hx(o, l) {
      return new kr(o, l);
    }
    var An = Wi.extend({
      initialize: function (o, l) {
        S(this, l), (this._layers = {}), o && this.addData(o);
      },
      addData: function (o) {
        var l = P(o) ? o : o.features,
          h,
          f,
          _;
        if (l) {
          for (h = 0, f = l.length; h < f; h++)
            (_ = l[h]),
              (_.geometries || _.geometry || _.features || _.coordinates) &&
                this.addData(_);
          return this;
        }
        var x = this.options;
        if (x.filter && !x.filter(o)) return this;
        var k = ha(o, x);
        return k
          ? ((k.feature = pa(o)),
            (k.defaultOptions = k.options),
            this.resetStyle(k),
            x.onEachFeature && x.onEachFeature(o, k),
            this.addLayer(k))
          : this;
      },
      resetStyle: function (o) {
        return o === void 0
          ? this.eachLayer(this.resetStyle, this)
          : ((o.options = r({}, o.defaultOptions)),
            this._setLayerStyle(o, this.options.style),
            this);
      },
      setStyle: function (o) {
        return this.eachLayer(function (l) {
          this._setLayerStyle(l, o);
        }, this);
      },
      _setLayerStyle: function (o, l) {
        o.setStyle &&
          (typeof l == "function" && (l = l(o.feature)), o.setStyle(l));
      },
    });
    function ha(o, l) {
      var h = o.type === "Feature" ? o.geometry : o,
        f = h ? h.coordinates : null,
        _ = [],
        x = l && l.pointToLayer,
        k = (l && l.coordsToLatLng) || Wu,
        T,
        O,
        F,
        $;
      if (!f && !h) return null;
      switch (h.type) {
        case "Point":
          return (T = k(f)), Wf(x, o, T, l);
        case "MultiPoint":
          for (F = 0, $ = f.length; F < $; F++)
            (T = k(f[F])), _.push(Wf(x, o, T, l));
          return new Wi(_);
        case "LineString":
        case "MultiLineString":
          return (O = da(f, h.type === "LineString" ? 0 : 1, k)), new zn(O, l);
        case "Polygon":
        case "MultiPolygon":
          return (O = da(f, h.type === "Polygon" ? 1 : 2, k)), new kr(O, l);
        case "GeometryCollection":
          for (F = 0, $ = h.geometries.length; F < $; F++) {
            var et = ha(
              {
                geometry: h.geometries[F],
                type: "Feature",
                properties: o.properties,
              },
              l
            );
            et && _.push(et);
          }
          return new Wi(_);
        case "FeatureCollection":
          for (F = 0, $ = h.features.length; F < $; F++) {
            var st = ha(h.features[F], l);
            st && _.push(st);
          }
          return new Wi(_);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function Wf(o, l, h, f) {
      return o ? o(l, h) : new ua(h, f && f.markersInheritOptions && f);
    }
    function Wu(o) {
      return new at(o[1], o[0], o[2]);
    }
    function da(o, l, h) {
      for (var f = [], _ = 0, x = o.length, k; _ < x; _++)
        (k = l ? da(o[_], l - 1, h) : (h || Wu)(o[_])), f.push(k);
      return f;
    }
    function Hu(o, l) {
      return (
        (o = lt(o)),
        o.alt !== void 0
          ? [m(o.lng, l), m(o.lat, l), m(o.alt, l)]
          : [m(o.lng, l), m(o.lat, l)]
      );
    }
    function fa(o, l, h, f) {
      for (var _ = [], x = 0, k = o.length; x < k; x++)
        _.push(l ? fa(o[x], Ve(o[x]) ? 0 : l - 1, h, f) : Hu(o[x], f));
      return !l && h && _.push(_[0]), _;
    }
    function Cr(o, l) {
      return o.feature ? r({}, o.feature, { geometry: l }) : pa(l);
    }
    function pa(o) {
      return o.type === "Feature" || o.type === "FeatureCollection"
        ? o
        : { type: "Feature", properties: {}, geometry: o };
    }
    var Vu = {
      toGeoJSON: function (o) {
        return Cr(this, {
          type: "Point",
          coordinates: Hu(this.getLatLng(), o),
        });
      },
    };
    ua.include(Vu),
      ju.include(Vu),
      ca.include(Vu),
      zn.include({
        toGeoJSON: function (o) {
          var l = !Ve(this._latlngs),
            h = fa(this._latlngs, l ? 1 : 0, !1, o);
          return Cr(this, {
            type: (l ? "Multi" : "") + "LineString",
            coordinates: h,
          });
        },
      }),
      kr.include({
        toGeoJSON: function (o) {
          var l = !Ve(this._latlngs),
            h = l && !Ve(this._latlngs[0]),
            f = fa(this._latlngs, h ? 2 : l ? 1 : 0, !0, o);
          return (
            l || (f = [f]),
            Cr(this, { type: (h ? "Multi" : "") + "Polygon", coordinates: f })
          );
        },
      }),
      Sr.include({
        toMultiPoint: function (o) {
          var l = [];
          return (
            this.eachLayer(function (h) {
              l.push(h.toGeoJSON(o).geometry.coordinates);
            }),
            Cr(this, { type: "MultiPoint", coordinates: l })
          );
        },
        toGeoJSON: function (o) {
          var l =
            this.feature && this.feature.geometry && this.feature.geometry.type;
          if (l === "MultiPoint") return this.toMultiPoint(o);
          var h = l === "GeometryCollection",
            f = [];
          return (
            this.eachLayer(function (_) {
              if (_.toGeoJSON) {
                var x = _.toGeoJSON(o);
                if (h) f.push(x.geometry);
                else {
                  var k = pa(x);
                  k.type === "FeatureCollection"
                    ? f.push.apply(f, k.features)
                    : f.push(k);
                }
              }
            }),
            h
              ? Cr(this, { geometries: f, type: "GeometryCollection" })
              : { type: "FeatureCollection", features: f }
          );
        },
      });
    function Hf(o, l) {
      return new An(o, l);
    }
    var dx = Hf,
      ma = on.extend({
        options: {
          opacity: 1,
          alt: "",
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: "",
          zIndex: 1,
          className: "",
        },
        initialize: function (o, l, h) {
          (this._url = o), (this._bounds = wt(l)), S(this, h);
        },
        onAdd: function () {
          this._image ||
            (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive &&
              (ct(this._image, "leaflet-interactive"),
              this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset();
        },
        onRemove: function () {
          Ht(this._image),
            this.options.interactive &&
              this.removeInteractiveTarget(this._image);
        },
        setOpacity: function (o) {
          return (
            (this.options.opacity = o),
            this._image && this._updateOpacity(),
            this
          );
        },
        setStyle: function (o) {
          return o.opacity && this.setOpacity(o.opacity), this;
        },
        bringToFront: function () {
          return this._map && wr(this._image), this;
        },
        bringToBack: function () {
          return this._map && br(this._image), this;
        },
        setUrl: function (o) {
          return (this._url = o), this._image && (this._image.src = o), this;
        },
        setBounds: function (o) {
          return (this._bounds = wt(o)), this._map && this._reset(), this;
        },
        getEvents: function () {
          var o = { zoom: this._reset, viewreset: this._reset };
          return this._zoomAnimated && (o.zoomanim = this._animateZoom), o;
        },
        setZIndex: function (o) {
          return (this.options.zIndex = o), this._updateZIndex(), this;
        },
        getBounds: function () {
          return this._bounds;
        },
        getElement: function () {
          return this._image;
        },
        _initImage: function () {
          var o = this._url.tagName === "IMG",
            l = (this._image = o ? this._url : bt("img"));
          if (
            (ct(l, "leaflet-image-layer"),
            this._zoomAnimated && ct(l, "leaflet-zoom-animated"),
            this.options.className && ct(l, this.options.className),
            (l.onselectstart = g),
            (l.onmousemove = g),
            (l.onload = a(this.fire, this, "load")),
            (l.onerror = a(this._overlayOnError, this, "error")),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (l.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            o)
          ) {
            this._url = l.src;
            return;
          }
          (l.src = this._url), (l.alt = this.options.alt);
        },
        _animateZoom: function (o) {
          var l = this._map.getZoomScale(o.zoom),
            h = this._map._latLngBoundsToNewLayerBounds(
              this._bounds,
              o.zoom,
              o.center
            ).min;
          Ii(this._image, h, l);
        },
        _reset: function () {
          var o = this._image,
            l = new Q(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast())
            ),
            h = l.getSize();
          qt(o, l.min),
            (o.style.width = h.x + "px"),
            (o.style.height = h.y + "px");
        },
        _updateOpacity: function () {
          He(this._image, this.options.opacity);
        },
        _updateZIndex: function () {
          this._image &&
            this.options.zIndex !== void 0 &&
            this.options.zIndex !== null &&
            (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function () {
          this.fire("error");
          var o = this.options.errorOverlayUrl;
          o && this._url !== o && ((this._url = o), (this._image.src = o));
        },
        getCenter: function () {
          return this._bounds.getCenter();
        },
      }),
      fx = function (o, l, h) {
        return new ma(o, l, h);
      },
      Vf = ma.extend({
        options: {
          autoplay: !0,
          loop: !0,
          keepAspectRatio: !0,
          muted: !1,
          playsInline: !0,
        },
        _initImage: function () {
          var o = this._url.tagName === "VIDEO",
            l = (this._image = o ? this._url : bt("video"));
          if (
            (ct(l, "leaflet-image-layer"),
            this._zoomAnimated && ct(l, "leaflet-zoom-animated"),
            this.options.className && ct(l, this.options.className),
            (l.onselectstart = g),
            (l.onmousemove = g),
            (l.onloadeddata = a(this.fire, this, "load")),
            o)
          ) {
            for (
              var h = l.getElementsByTagName("source"), f = [], _ = 0;
              _ < h.length;
              _++
            )
              f.push(h[_].src);
            this._url = h.length > 0 ? f : [l.src];
            return;
          }
          P(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(l.style, "objectFit") &&
              (l.style.objectFit = "fill"),
            (l.autoplay = !!this.options.autoplay),
            (l.loop = !!this.options.loop),
            (l.muted = !!this.options.muted),
            (l.playsInline = !!this.options.playsInline);
          for (var x = 0; x < this._url.length; x++) {
            var k = bt("source");
            (k.src = this._url[x]), l.appendChild(k);
          }
        },
      });
    function px(o, l, h) {
      return new Vf(o, l, h);
    }
    var Zf = ma.extend({
      _initImage: function () {
        var o = (this._image = this._url);
        ct(o, "leaflet-image-layer"),
          this._zoomAnimated && ct(o, "leaflet-zoom-animated"),
          this.options.className && ct(o, this.options.className),
          (o.onselectstart = g),
          (o.onmousemove = g);
      },
    });
    function mx(o, l, h) {
      return new Zf(o, l, h);
    }
    var wn = on.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: "",
        pane: void 0,
        content: "",
      },
      initialize: function (o, l) {
        o && (o instanceof L.LatLng || P(o))
          ? ((this._latlng = lt(o)), S(this, l))
          : (S(this, o), (this._source = l)),
          this.options.content && (this._content = this.options.content);
      },
      openOn: function (o) {
        return (
          (o = arguments.length ? o : this._source._map),
          o.hasLayer(this) || o.addLayer(this),
          this
        );
      },
      close: function () {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function (o) {
        return (
          this._map
            ? this.close()
            : (arguments.length ? (this._source = o) : (o = this._source),
              this._prepareOpen(),
              this.openOn(o._map)),
          this
        );
      },
      onAdd: function (o) {
        (this._zoomAnimated = o._zoomAnimated),
          this._container || this._initLayout(),
          o._fadeAnimated && He(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          o._fadeAnimated && He(this._container, 1),
          this.bringToFront(),
          this.options.interactive &&
            (ct(this._container, "leaflet-interactive"),
            this.addInteractiveTarget(this._container));
      },
      onRemove: function (o) {
        o._fadeAnimated
          ? (He(this._container, 0),
            (this._removeTimeout = setTimeout(
              a(Ht, void 0, this._container),
              200
            )))
          : Ht(this._container),
          this.options.interactive &&
            (Xt(this._container, "leaflet-interactive"),
            this.removeInteractiveTarget(this._container));
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (o) {
        return (
          (this._latlng = lt(o)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (o) {
        return (this._content = o), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        !this._map ||
          ((this._container.style.visibility = "hidden"),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ""),
          this._adjustPan());
      },
      getEvents: function () {
        var o = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (o.zoomanim = this._animateZoom), o;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && wr(this._container), this;
      },
      bringToBack: function () {
        return this._map && br(this._container), this;
      },
      _prepareOpen: function (o) {
        var l = this._source;
        if (!l._map) return !1;
        if (l instanceof Wi) {
          l = null;
          var h = this._source._layers;
          for (var f in h)
            if (h[f]._map) {
              l = h[f];
              break;
            }
          if (!l) return !1;
          this._source = l;
        }
        if (!o)
          if (l.getCenter) o = l.getCenter();
          else if (l.getLatLng) o = l.getLatLng();
          else if (l.getBounds) o = l.getBounds().getCenter();
          else throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(o), this._map && this.update(), !0;
      },
      _updateContent: function () {
        if (!!this._content) {
          var o = this._contentNode,
            l =
              typeof this._content == "function"
                ? this._content(this._source || this)
                : this._content;
          if (typeof l == "string") o.innerHTML = l;
          else {
            for (; o.hasChildNodes(); ) o.removeChild(o.firstChild);
            o.appendChild(l);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function () {
        if (!!this._map) {
          var o = this._map.latLngToLayerPoint(this._latlng),
            l = W(this.options.offset),
            h = this._getAnchor();
          this._zoomAnimated
            ? qt(this._container, o.add(h))
            : (l = l.add(o).add(h));
          var f = (this._containerBottom = -l.y),
            _ = (this._containerLeft =
              -Math.round(this._containerWidth / 2) + l.x);
          (this._container.style.bottom = f + "px"),
            (this._container.style.left = _ + "px");
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    });
    gt.include({
      _initOverlay: function (o, l, h, f) {
        var _ = l;
        return (
          _ instanceof o || (_ = new o(f).setContent(l)), h && _.setLatLng(h), _
        );
      },
    }),
      on.include({
        _initOverlay: function (o, l, h, f) {
          var _ = h;
          return (
            _ instanceof o
              ? (S(_, f), (_._source = this))
              : ((_ = l && !f ? l : new o(f, this)), _.setContent(h)),
            _
          );
        },
      });
    var ga = wn.extend({
        options: {
          pane: "popupPane",
          offset: [0, 7],
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: "",
        },
        openOn: function (o) {
          return (
            (o = arguments.length ? o : this._source._map),
            !o.hasLayer(this) &&
              o._popup &&
              o._popup.options.autoClose &&
              o.removeLayer(o._popup),
            (o._popup = this),
            wn.prototype.openOn.call(this, o)
          );
        },
        onAdd: function (o) {
          wn.prototype.onAdd.call(this, o),
            o.fire("popupopen", { popup: this }),
            this._source &&
              (this._source.fire("popupopen", { popup: this }, !0),
              this._source instanceof ii || this._source.on("preclick", Bi));
        },
        onRemove: function (o) {
          wn.prototype.onRemove.call(this, o),
            o.fire("popupclose", { popup: this }),
            this._source &&
              (this._source.fire("popupclose", { popup: this }, !0),
              this._source instanceof ii || this._source.off("preclick", Bi));
        },
        getEvents: function () {
          var o = wn.prototype.getEvents.call(this);
          return (
            (this.options.closeOnClick !== void 0
              ? this.options.closeOnClick
              : this._map.options.closePopupOnClick) &&
              (o.preclick = this.close),
            this.options.keepInView && (o.moveend = this._adjustPan),
            o
          );
        },
        _initLayout: function () {
          var o = "leaflet-popup",
            l = (this._container = bt(
              "div",
              o +
                " " +
                (this.options.className || "") +
                " leaflet-zoom-animated"
            )),
            h = (this._wrapper = bt("div", o + "-content-wrapper", l));
          if (
            ((this._contentNode = bt("div", o + "-content", h)),
            bo(l),
            Ru(this._contentNode),
            it(l, "contextmenu", Bi),
            (this._tipContainer = bt("div", o + "-tip-container", l)),
            (this._tip = bt("div", o + "-tip", this._tipContainer)),
            this.options.closeButton)
          ) {
            var f = (this._closeButton = bt("a", o + "-close-button", l));
            f.setAttribute("role", "button"),
              f.setAttribute("aria-label", "Close popup"),
              (f.href = "#close"),
              (f.innerHTML = '<span aria-hidden="true">&#215;</span>'),
              it(
                f,
                "click",
                function (_) {
                  ce(_), this.close();
                },
                this
              );
          }
        },
        _updateLayout: function () {
          var o = this._contentNode,
            l = o.style;
          (l.width = ""), (l.whiteSpace = "nowrap");
          var h = o.offsetWidth;
          (h = Math.min(h, this.options.maxWidth)),
            (h = Math.max(h, this.options.minWidth)),
            (l.width = h + 1 + "px"),
            (l.whiteSpace = ""),
            (l.height = "");
          var f = o.offsetHeight,
            _ = this.options.maxHeight,
            x = "leaflet-popup-scrolled";
          _ && f > _ ? ((l.height = _ + "px"), ct(o, x)) : Xt(o, x),
            (this._containerWidth = this._container.offsetWidth);
        },
        _animateZoom: function (o) {
          var l = this._map._latLngToNewLayerPoint(
              this._latlng,
              o.zoom,
              o.center
            ),
            h = this._getAnchor();
          qt(this._container, l.add(h));
        },
        _adjustPan: function (o) {
          if (!!this.options.autoPan) {
            this._map._panAnim && this._map._panAnim.stop();
            var l = this._map,
              h = parseInt(vo(this._container, "marginBottom"), 10) || 0,
              f = this._container.offsetHeight + h,
              _ = this._containerWidth,
              x = new z(this._containerLeft, -f - this._containerBottom);
            x._add(Ni(this._container));
            var k = l.layerPointToContainerPoint(x),
              T = W(this.options.autoPanPadding),
              O = W(this.options.autoPanPaddingTopLeft || T),
              F = W(this.options.autoPanPaddingBottomRight || T),
              $ = l.getSize(),
              et = 0,
              st = 0;
            k.x + _ + F.x > $.x && (et = k.x + _ - $.x + F.x),
              k.x - et - O.x < 0 && (et = k.x - O.x),
              k.y + f + F.y > $.y && (st = k.y + f - $.y + F.y),
              k.y - st - O.y < 0 && (st = k.y - O.y),
              (et || st) &&
                l
                  .fire("autopanstart")
                  .panBy([et, st], { animate: o && o.type === "moveend" });
          }
        },
        _getAnchor: function () {
          return W(
            this._source && this._source._getPopupAnchor
              ? this._source._getPopupAnchor()
              : [0, 0]
          );
        },
      }),
      gx = function (o, l) {
        return new ga(o, l);
      };
    gt.mergeOptions({ closePopupOnClick: !0 }),
      gt.include({
        openPopup: function (o, l, h) {
          return this._initOverlay(ga, o, l, h).openOn(this), this;
        },
        closePopup: function (o) {
          return (o = arguments.length ? o : this._popup), o && o.close(), this;
        },
      }),
      on.include({
        bindPopup: function (o, l) {
          return (
            (this._popup = this._initOverlay(ga, this._popup, o, l)),
            this._popupHandlersAdded ||
              (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !0)),
            this
          );
        },
        unbindPopup: function () {
          return (
            this._popup &&
              (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !1),
              (this._popup = null)),
            this
          );
        },
        openPopup: function (o) {
          return (
            this._popup &&
              this._popup._prepareOpen(o || this._latlng) &&
              this._popup.openOn(this._map),
            this
          );
        },
        closePopup: function () {
          return this._popup && this._popup.close(), this;
        },
        togglePopup: function () {
          return this._popup && this._popup.toggle(this), this;
        },
        isPopupOpen: function () {
          return this._popup ? this._popup.isOpen() : !1;
        },
        setPopupContent: function (o) {
          return this._popup && this._popup.setContent(o), this;
        },
        getPopup: function () {
          return this._popup;
        },
        _openPopup: function (o) {
          if (!(!this._popup || !this._map)) {
            Fi(o);
            var l = o.layer || o.target;
            if (this._popup._source === l && !(l instanceof ii)) {
              this._map.hasLayer(this._popup)
                ? this.closePopup()
                : this.openPopup(o.latlng);
              return;
            }
            (this._popup._source = l), this.openPopup(o.latlng);
          }
        },
        _movePopup: function (o) {
          this._popup.setLatLng(o.latlng);
        },
        _onKeyPress: function (o) {
          o.originalEvent.keyCode === 13 && this._openPopup(o);
        },
      });
    var _a = wn.extend({
        options: {
          pane: "tooltipPane",
          offset: [0, 0],
          direction: "auto",
          permanent: !1,
          sticky: !1,
          opacity: 0.9,
        },
        onAdd: function (o) {
          wn.prototype.onAdd.call(this, o),
            this.setOpacity(this.options.opacity),
            o.fire("tooltipopen", { tooltip: this }),
            this._source &&
              (this.addEventParent(this._source),
              this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function (o) {
          wn.prototype.onRemove.call(this, o),
            o.fire("tooltipclose", { tooltip: this }),
            this._source &&
              (this.removeEventParent(this._source),
              this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function () {
          var o = wn.prototype.getEvents.call(this);
          return this.options.permanent || (o.preclick = this.close), o;
        },
        _initLayout: function () {
          var o = "leaflet-tooltip",
            l =
              o +
              " " +
              (this.options.className || "") +
              " leaflet-zoom-" +
              (this._zoomAnimated ? "animated" : "hide");
          (this._contentNode = this._container = bt("div", l)),
            this._container.setAttribute("role", "tooltip"),
            this._container.setAttribute("id", "leaflet-tooltip-" + c(this));
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (o) {
          var l,
            h,
            f = this._map,
            _ = this._container,
            x = f.latLngToContainerPoint(f.getCenter()),
            k = f.layerPointToContainerPoint(o),
            T = this.options.direction,
            O = _.offsetWidth,
            F = _.offsetHeight,
            $ = W(this.options.offset),
            et = this._getAnchor();
          T === "top"
            ? ((l = O / 2), (h = F))
            : T === "bottom"
            ? ((l = O / 2), (h = 0))
            : T === "center"
            ? ((l = O / 2), (h = F / 2))
            : T === "right"
            ? ((l = 0), (h = F / 2))
            : T === "left"
            ? ((l = O), (h = F / 2))
            : k.x < x.x
            ? ((T = "right"), (l = 0), (h = F / 2))
            : ((T = "left"), (l = O + ($.x + et.x) * 2), (h = F / 2)),
            (o = o.subtract(W(l, h, !0)).add($).add(et)),
            Xt(_, "leaflet-tooltip-right"),
            Xt(_, "leaflet-tooltip-left"),
            Xt(_, "leaflet-tooltip-top"),
            Xt(_, "leaflet-tooltip-bottom"),
            ct(_, "leaflet-tooltip-" + T),
            qt(_, o);
        },
        _updatePosition: function () {
          var o = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(o);
        },
        setOpacity: function (o) {
          (this.options.opacity = o), this._container && He(this._container, o);
        },
        _animateZoom: function (o) {
          var l = this._map._latLngToNewLayerPoint(
            this._latlng,
            o.zoom,
            o.center
          );
          this._setPosition(l);
        },
        _getAnchor: function () {
          return W(
            this._source &&
              this._source._getTooltipAnchor &&
              !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0]
          );
        },
      }),
      _x = function (o, l) {
        return new _a(o, l);
      };
    gt.include({
      openTooltip: function (o, l, h) {
        return this._initOverlay(_a, o, l, h).openOn(this), this;
      },
      closeTooltip: function (o) {
        return o.close(), this;
      },
    }),
      on.include({
        bindTooltip: function (o, l) {
          return (
            this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            (this._tooltip = this._initOverlay(_a, this._tooltip, o, l)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent &&
              this._map &&
              this._map.hasLayer(this) &&
              this.openTooltip(),
            this
          );
        },
        unbindTooltip: function () {
          return (
            this._tooltip &&
              (this._initTooltipInteractions(!0),
              this.closeTooltip(),
              (this._tooltip = null)),
            this
          );
        },
        _initTooltipInteractions: function (o) {
          if (!(!o && this._tooltipHandlersAdded)) {
            var l = o ? "off" : "on",
              h = { remove: this.closeTooltip, move: this._moveTooltip };
            this._tooltip.options.permanent
              ? (h.add = this._openTooltip)
              : ((h.mouseover = this._openTooltip),
                (h.mouseout = this.closeTooltip),
                (h.click = this._openTooltip),
                this._map
                  ? this._addFocusListeners()
                  : (h.add = this._addFocusListeners)),
              this._tooltip.options.sticky && (h.mousemove = this._moveTooltip),
              this[l](h),
              (this._tooltipHandlersAdded = !o);
          }
        },
        openTooltip: function (o) {
          return (
            this._tooltip &&
              this._tooltip._prepareOpen(o) &&
              (this._tooltip.openOn(this._map),
              this.getElement
                ? this._setAriaDescribedByOnLayer(this)
                : this.eachLayer &&
                  this.eachLayer(this._setAriaDescribedByOnLayer, this)),
            this
          );
        },
        closeTooltip: function () {
          if (this._tooltip) return this._tooltip.close();
        },
        toggleTooltip: function () {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        isTooltipOpen: function () {
          return this._tooltip.isOpen();
        },
        setTooltipContent: function (o) {
          return this._tooltip && this._tooltip.setContent(o), this;
        },
        getTooltip: function () {
          return this._tooltip;
        },
        _addFocusListeners: function () {
          this.getElement
            ? this._addFocusListenersOnLayer(this)
            : this.eachLayer &&
              this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function (o) {
          var l = o.getElement();
          l &&
            (it(
              l,
              "focus",
              function () {
                (this._tooltip._source = o), this.openTooltip();
              },
              this
            ),
            it(l, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function (o) {
          var l = o.getElement();
          l && l.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function (o) {
          !this._tooltip ||
            !this._map ||
            (this._map.dragging && this._map.dragging.moving()) ||
            ((this._tooltip._source = o.layer || o.target),
            this.openTooltip(this._tooltip.options.sticky ? o.latlng : void 0));
        },
        _moveTooltip: function (o) {
          var l = o.latlng,
            h,
            f;
          this._tooltip.options.sticky &&
            o.originalEvent &&
            ((h = this._map.mouseEventToContainerPoint(o.originalEvent)),
            (f = this._map.containerPointToLayerPoint(h)),
            (l = this._map.layerPointToLatLng(f))),
            this._tooltip.setLatLng(l);
        },
      });
    var Uf = Pr.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: "leaflet-div-icon",
      },
      createIcon: function (o) {
        var l = o && o.tagName === "DIV" ? o : document.createElement("div"),
          h = this.options;
        if (
          (h.html instanceof Element
            ? (ia(l), l.appendChild(h.html))
            : (l.innerHTML = h.html !== !1 ? h.html : ""),
          h.bgPos)
        ) {
          var f = W(h.bgPos);
          l.style.backgroundPosition = -f.x + "px " + -f.y + "px";
        }
        return this._setIconStyles(l, "icon"), l;
      },
      createShadow: function () {
        return null;
      },
    });
    function vx(o) {
      return new Uf(o);
    }
    Pr.Default = ko;
    var Co = on.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: G.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: "tilePane",
        className: "",
        keepBuffer: 2,
      },
      initialize: function (o) {
        S(this, o);
      },
      onAdd: function () {
        this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView();
      },
      beforeAdd: function (o) {
        o._addZoomLimit(this);
      },
      onRemove: function (o) {
        this._removeAllTiles(),
          Ht(this._container),
          o._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function () {
        return (
          this._map && (wr(this._container), this._setAutoZIndex(Math.max)),
          this
        );
      },
      bringToBack: function () {
        return (
          this._map && (br(this._container), this._setAutoZIndex(Math.min)),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (o) {
        return (this.options.opacity = o), this._updateOpacity(), this;
      },
      setZIndex: function (o) {
        return (this.options.zIndex = o), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        if (this._map) {
          this._removeAllTiles();
          var o = this._clampZoom(this._map.getZoom());
          o !== this._tileZoom && ((this._tileZoom = o), this._updateLevels()),
            this._update();
        }
        return this;
      },
      getEvents: function () {
        var o = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = d(
                this._onMoveEnd,
                this.options.updateInterval,
                this
              )),
            (o.move = this._onMove)),
          this._zoomAnimated && (o.zoomanim = this._animateZoom),
          o
        );
      },
      createTile: function () {
        return document.createElement("div");
      },
      getTileSize: function () {
        var o = this.options.tileSize;
        return o instanceof z ? o : new z(o, o);
      },
      _updateZIndex: function () {
        this._container &&
          this.options.zIndex !== void 0 &&
          this.options.zIndex !== null &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (o) {
        for (
          var l = this.getPane().children,
            h = -o(-1 / 0, 1 / 0),
            f = 0,
            _ = l.length,
            x;
          f < _;
          f++
        )
          (x = l[f].style.zIndex),
            l[f] !== this._container && x && (h = o(h, +x));
        isFinite(h) &&
          ((this.options.zIndex = h + o(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (!!this._map && !G.ielt9) {
          He(this._container, this.options.opacity);
          var o = +new Date(),
            l = !1,
            h = !1;
          for (var f in this._tiles) {
            var _ = this._tiles[f];
            if (!(!_.current || !_.loaded)) {
              var x = Math.min(1, (o - _.loaded) / 200);
              He(_.el, x),
                x < 1
                  ? (l = !0)
                  : (_.active ? (h = !0) : this._onOpaqueTile(_),
                    (_.active = !0));
            }
          }
          h && !this._noPrune && this._pruneTiles(),
            l &&
              (X(this._fadeFrame),
              (this._fadeFrame = K(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: g,
      _initContainer: function () {
        this._container ||
          ((this._container = bt(
            "div",
            "leaflet-layer " + (this.options.className || "")
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var o = this._tileZoom,
          l = this.options.maxZoom;
        if (o !== void 0) {
          for (var h in this._levels)
            (h = Number(h)),
              this._levels[h].el.children.length || h === o
                ? ((this._levels[h].el.style.zIndex = l - Math.abs(o - h)),
                  this._onUpdateLevel(h))
                : (Ht(this._levels[h].el),
                  this._removeTilesAtZoom(h),
                  this._onRemoveLevel(h),
                  delete this._levels[h]);
          var f = this._levels[o],
            _ = this._map;
          return (
            f ||
              ((f = this._levels[o] = {}),
              (f.el = bt(
                "div",
                "leaflet-tile-container leaflet-zoom-animated",
                this._container
              )),
              (f.el.style.zIndex = l),
              (f.origin = _.project(
                _.unproject(_.getPixelOrigin()),
                o
              ).round()),
              (f.zoom = o),
              this._setZoomTransform(f, _.getCenter(), _.getZoom()),
              g(f.el.offsetWidth),
              this._onCreateLevel(f)),
            (this._level = f),
            f
          );
        }
      },
      _onUpdateLevel: g,
      _onRemoveLevel: g,
      _onCreateLevel: g,
      _pruneTiles: function () {
        if (!!this._map) {
          var o,
            l,
            h = this._map.getZoom();
          if (h > this.options.maxZoom || h < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (o in this._tiles) (l = this._tiles[o]), (l.retain = l.current);
          for (o in this._tiles)
            if (((l = this._tiles[o]), l.current && !l.active)) {
              var f = l.coords;
              this._retainParent(f.x, f.y, f.z, f.z - 5) ||
                this._retainChildren(f.x, f.y, f.z, f.z + 2);
            }
          for (o in this._tiles) this._tiles[o].retain || this._removeTile(o);
        }
      },
      _removeTilesAtZoom: function (o) {
        for (var l in this._tiles)
          this._tiles[l].coords.z === o && this._removeTile(l);
      },
      _removeAllTiles: function () {
        for (var o in this._tiles) this._removeTile(o);
      },
      _invalidateAll: function () {
        for (var o in this._levels)
          Ht(this._levels[o].el),
            this._onRemoveLevel(Number(o)),
            delete this._levels[o];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function (o, l, h, f) {
        var _ = Math.floor(o / 2),
          x = Math.floor(l / 2),
          k = h - 1,
          T = new z(+_, +x);
        T.z = +k;
        var O = this._tileCoordsToKey(T),
          F = this._tiles[O];
        return F && F.active
          ? ((F.retain = !0), !0)
          : (F && F.loaded && (F.retain = !0),
            k > f ? this._retainParent(_, x, k, f) : !1);
      },
      _retainChildren: function (o, l, h, f) {
        for (var _ = 2 * o; _ < 2 * o + 2; _++)
          for (var x = 2 * l; x < 2 * l + 2; x++) {
            var k = new z(_, x);
            k.z = h + 1;
            var T = this._tileCoordsToKey(k),
              O = this._tiles[T];
            if (O && O.active) {
              O.retain = !0;
              continue;
            } else O && O.loaded && (O.retain = !0);
            h + 1 < f && this._retainChildren(_, x, h + 1, f);
          }
      },
      _resetView: function (o) {
        var l = o && (o.pinch || o.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), l, l);
      },
      _animateZoom: function (o) {
        this._setView(o.center, o.zoom, !0, o.noUpdate);
      },
      _clampZoom: function (o) {
        var l = this.options;
        return l.minNativeZoom !== void 0 && o < l.minNativeZoom
          ? l.minNativeZoom
          : l.maxNativeZoom !== void 0 && l.maxNativeZoom < o
          ? l.maxNativeZoom
          : o;
      },
      _setView: function (o, l, h, f) {
        var _ = Math.round(l);
        (this.options.maxZoom !== void 0 && _ > this.options.maxZoom) ||
        (this.options.minZoom !== void 0 && _ < this.options.minZoom)
          ? (_ = void 0)
          : (_ = this._clampZoom(_));
        var x = this.options.updateWhenZooming && _ !== this._tileZoom;
        (!f || x) &&
          ((this._tileZoom = _),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          _ !== void 0 && this._update(o),
          h || this._pruneTiles(),
          (this._noPrune = !!h)),
          this._setZoomTransforms(o, l);
      },
      _setZoomTransforms: function (o, l) {
        for (var h in this._levels)
          this._setZoomTransform(this._levels[h], o, l);
      },
      _setZoomTransform: function (o, l, h) {
        var f = this._map.getZoomScale(h, o.zoom),
          _ = o.origin
            .multiplyBy(f)
            .subtract(this._map._getNewPixelOrigin(l, h))
            .round();
        G.any3d ? Ii(o.el, _, f) : qt(o.el, _);
      },
      _resetGrid: function () {
        var o = this._map,
          l = o.options.crs,
          h = (this._tileSize = this.getTileSize()),
          f = this._tileZoom,
          _ = this._map.getPixelWorldBounds(this._tileZoom);
        _ && (this._globalTileRange = this._pxBoundsToTileRange(_)),
          (this._wrapX = l.wrapLng &&
            !this.options.noWrap && [
              Math.floor(o.project([0, l.wrapLng[0]], f).x / h.x),
              Math.ceil(o.project([0, l.wrapLng[1]], f).x / h.y),
            ]),
          (this._wrapY = l.wrapLat &&
            !this.options.noWrap && [
              Math.floor(o.project([l.wrapLat[0], 0], f).y / h.x),
              Math.ceil(o.project([l.wrapLat[1], 0], f).y / h.y),
            ]);
      },
      _onMoveEnd: function () {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function (o) {
        var l = this._map,
          h = l._animatingZoom
            ? Math.max(l._animateToZoom, l.getZoom())
            : l.getZoom(),
          f = l.getZoomScale(h, this._tileZoom),
          _ = l.project(o, this._tileZoom).floor(),
          x = l.getSize().divideBy(f * 2);
        return new Q(_.subtract(x), _.add(x));
      },
      _update: function (o) {
        var l = this._map;
        if (!!l) {
          var h = this._clampZoom(l.getZoom());
          if (
            (o === void 0 && (o = l.getCenter()), this._tileZoom !== void 0)
          ) {
            var f = this._getTiledPixelBounds(o),
              _ = this._pxBoundsToTileRange(f),
              x = _.getCenter(),
              k = [],
              T = this.options.keepBuffer,
              O = new Q(
                _.getBottomLeft().subtract([T, -T]),
                _.getTopRight().add([T, -T])
              );
            if (
              !(
                isFinite(_.min.x) &&
                isFinite(_.min.y) &&
                isFinite(_.max.x) &&
                isFinite(_.max.y)
              )
            )
              throw new Error("Attempted to load an infinite number of tiles");
            for (var F in this._tiles) {
              var $ = this._tiles[F].coords;
              ($.z !== this._tileZoom || !O.contains(new z($.x, $.y))) &&
                (this._tiles[F].current = !1);
            }
            if (Math.abs(h - this._tileZoom) > 1) {
              this._setView(o, h);
              return;
            }
            for (var et = _.min.y; et <= _.max.y; et++)
              for (var st = _.min.x; st <= _.max.x; st++) {
                var Ze = new z(st, et);
                if (((Ze.z = this._tileZoom), !!this._isValidTile(Ze))) {
                  var Hi = this._tiles[this._tileCoordsToKey(Ze)];
                  Hi ? (Hi.current = !0) : k.push(Ze);
                }
              }
            if (
              (k.sort(function (ri, Zu) {
                return ri.distanceTo(x) - Zu.distanceTo(x);
              }),
              k.length !== 0)
            ) {
              this._loading || ((this._loading = !0), this.fire("loading"));
              var ya = document.createDocumentFragment();
              for (st = 0; st < k.length; st++) this._addTile(k[st], ya);
              this._level.el.appendChild(ya);
            }
          }
        }
      },
      _isValidTile: function (o) {
        var l = this._map.options.crs;
        if (!l.infinite) {
          var h = this._globalTileRange;
          if (
            (!l.wrapLng && (o.x < h.min.x || o.x > h.max.x)) ||
            (!l.wrapLat && (o.y < h.min.y || o.y > h.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var f = this._tileCoordsToBounds(o);
        return wt(this.options.bounds).overlaps(f);
      },
      _keyToBounds: function (o) {
        return this._tileCoordsToBounds(this._keyToTileCoords(o));
      },
      _tileCoordsToNwSe: function (o) {
        var l = this._map,
          h = this.getTileSize(),
          f = o.scaleBy(h),
          _ = f.add(h),
          x = l.unproject(f, o.z),
          k = l.unproject(_, o.z);
        return [x, k];
      },
      _tileCoordsToBounds: function (o) {
        var l = this._tileCoordsToNwSe(o),
          h = new Ot(l[0], l[1]);
        return this.options.noWrap || (h = this._map.wrapLatLngBounds(h)), h;
      },
      _tileCoordsToKey: function (o) {
        return o.x + ":" + o.y + ":" + o.z;
      },
      _keyToTileCoords: function (o) {
        var l = o.split(":"),
          h = new z(+l[0], +l[1]);
        return (h.z = +l[2]), h;
      },
      _removeTile: function (o) {
        var l = this._tiles[o];
        !l ||
          (Ht(l.el),
          delete this._tiles[o],
          this.fire("tileunload", {
            tile: l.el,
            coords: this._keyToTileCoords(o),
          }));
      },
      _initTile: function (o) {
        ct(o, "leaflet-tile");
        var l = this.getTileSize();
        (o.style.width = l.x + "px"),
          (o.style.height = l.y + "px"),
          (o.onselectstart = g),
          (o.onmousemove = g),
          G.ielt9 && this.options.opacity < 1 && He(o, this.options.opacity);
      },
      _addTile: function (o, l) {
        var h = this._getTilePos(o),
          f = this._tileCoordsToKey(o),
          _ = this.createTile(this._wrapCoords(o), a(this._tileReady, this, o));
        this._initTile(_),
          this.createTile.length < 2 && K(a(this._tileReady, this, o, null, _)),
          qt(_, h),
          (this._tiles[f] = { el: _, coords: o, current: !0 }),
          l.appendChild(_),
          this.fire("tileloadstart", { tile: _, coords: o });
      },
      _tileReady: function (o, l, h) {
        l && this.fire("tileerror", { error: l, tile: h, coords: o });
        var f = this._tileCoordsToKey(o);
        (h = this._tiles[f]),
          h &&
            ((h.loaded = +new Date()),
            this._map._fadeAnimated
              ? (He(h.el, 0),
                X(this._fadeFrame),
                (this._fadeFrame = K(this._updateOpacity, this)))
              : ((h.active = !0), this._pruneTiles()),
            l ||
              (ct(h.el, "leaflet-tile-loaded"),
              this.fire("tileload", { tile: h.el, coords: o })),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire("load"),
              G.ielt9 || !this._map._fadeAnimated
                ? K(this._pruneTiles, this)
                : setTimeout(a(this._pruneTiles, this), 250)));
      },
      _getTilePos: function (o) {
        return o.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (o) {
        var l = new z(
          this._wrapX ? p(o.x, this._wrapX) : o.x,
          this._wrapY ? p(o.y, this._wrapY) : o.y
        );
        return (l.z = o.z), l;
      },
      _pxBoundsToTileRange: function (o) {
        var l = this.getTileSize();
        return new Q(
          o.min.unscaleBy(l).floor(),
          o.max.unscaleBy(l).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function () {
        for (var o in this._tiles) if (!this._tiles[o].loaded) return !1;
        return !0;
      },
    });
    function yx(o) {
      return new Co(o);
    }
    var Lr = Co.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: "abc",
        errorTileUrl: "",
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1,
      },
      initialize: function (o, l) {
        (this._url = o),
          (l = S(this, l)),
          l.detectRetina && G.retina && l.maxZoom > 0
            ? ((l.tileSize = Math.floor(l.tileSize / 2)),
              l.zoomReverse
                ? (l.zoomOffset--,
                  (l.minZoom = Math.min(l.maxZoom, l.minZoom + 1)))
                : (l.zoomOffset++,
                  (l.maxZoom = Math.max(l.minZoom, l.maxZoom - 1))),
              (l.minZoom = Math.max(0, l.minZoom)))
            : l.zoomReverse
            ? (l.minZoom = Math.min(l.maxZoom, l.minZoom))
            : (l.maxZoom = Math.max(l.minZoom, l.maxZoom)),
          typeof l.subdomains == "string" &&
            (l.subdomains = l.subdomains.split("")),
          this.on("tileunload", this._onTileRemove);
      },
      setUrl: function (o, l) {
        return (
          this._url === o && l === void 0 && (l = !0),
          (this._url = o),
          l || this.redraw(),
          this
        );
      },
      createTile: function (o, l) {
        var h = document.createElement("img");
        return (
          it(h, "load", a(this._tileOnLoad, this, l, h)),
          it(h, "error", a(this._tileOnError, this, l, h)),
          (this.options.crossOrigin || this.options.crossOrigin === "") &&
            (h.crossOrigin =
              this.options.crossOrigin === !0 ? "" : this.options.crossOrigin),
          typeof this.options.referrerPolicy == "string" &&
            (h.referrerPolicy = this.options.referrerPolicy),
          (h.alt = ""),
          (h.src = this.getTileUrl(o)),
          h
        );
      },
      getTileUrl: function (o) {
        var l = {
          r: G.retina ? "@2x" : "",
          s: this._getSubdomain(o),
          x: o.x,
          y: o.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var h = this._globalTileRange.max.y - o.y;
          this.options.tms && (l.y = h), (l["-y"] = h);
        }
        return b(this._url, r(l, this.options));
      },
      _tileOnLoad: function (o, l) {
        G.ielt9 ? setTimeout(a(o, this, null, l), 0) : o(null, l);
      },
      _tileOnError: function (o, l, h) {
        var f = this.options.errorTileUrl;
        f && l.getAttribute("src") !== f && (l.src = f), o(h, l);
      },
      _onTileRemove: function (o) {
        o.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var o = this._tileZoom,
          l = this.options.maxZoom,
          h = this.options.zoomReverse,
          f = this.options.zoomOffset;
        return h && (o = l - o), o + f;
      },
      _getSubdomain: function (o) {
        var l = Math.abs(o.x + o.y) % this.options.subdomains.length;
        return this.options.subdomains[l];
      },
      _abortLoading: function () {
        var o, l;
        for (o in this._tiles)
          if (
            this._tiles[o].coords.z !== this._tileZoom &&
            ((l = this._tiles[o].el),
            (l.onload = g),
            (l.onerror = g),
            !l.complete)
          ) {
            l.src = E;
            var h = this._tiles[o].coords;
            Ht(l),
              delete this._tiles[o],
              this.fire("tileabort", { tile: l, coords: h });
          }
      },
      _removeTile: function (o) {
        var l = this._tiles[o];
        if (!!l)
          return (
            l.el.setAttribute("src", E), Co.prototype._removeTile.call(this, o)
          );
      },
      _tileReady: function (o, l, h) {
        if (!(!this._map || (h && h.getAttribute("src") === E)))
          return Co.prototype._tileReady.call(this, o, l, h);
      },
    });
    function $f(o, l) {
      return new Lr(o, l);
    }
    var Yf = Lr.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1,
        version: "1.1.1",
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (o, l) {
        this._url = o;
        var h = r({}, this.defaultWmsParams);
        for (var f in l) f in this.options || (h[f] = l[f]);
        l = S(this, l);
        var _ = l.detectRetina && G.retina ? 2 : 1,
          x = this.getTileSize();
        (h.width = x.x * _), (h.height = x.y * _), (this.wmsParams = h);
      },
      onAdd: function (o) {
        (this._crs = this.options.crs || o.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var l = this._wmsVersion >= 1.3 ? "crs" : "srs";
        (this.wmsParams[l] = this._crs.code), Lr.prototype.onAdd.call(this, o);
      },
      getTileUrl: function (o) {
        var l = this._tileCoordsToNwSe(o),
          h = this._crs,
          f = ot(h.project(l[0]), h.project(l[1])),
          _ = f.min,
          x = f.max,
          k = (
            this._wmsVersion >= 1.3 && this._crs === Ff
              ? [_.y, _.x, x.y, x.x]
              : [_.x, _.y, x.x, x.y]
          ).join(","),
          T = Lr.prototype.getTileUrl.call(this, o);
        return (
          T +
          M(this.wmsParams, T, this.options.uppercase) +
          (this.options.uppercase ? "&BBOX=" : "&bbox=") +
          k
        );
      },
      setParams: function (o, l) {
        return r(this.wmsParams, o), l || this.redraw(), this;
      },
    });
    function xx(o, l) {
      return new Yf(o, l);
    }
    (Lr.WMS = Yf), ($f.wms = xx);
    var In = on.extend({
        options: { padding: 0.1 },
        initialize: function (o) {
          S(this, o), c(this), (this._layers = this._layers || {});
        },
        onAdd: function () {
          this._container ||
            (this._initContainer(),
            this._zoomAnimated && ct(this._container, "leaflet-zoom-animated")),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on("update", this._updatePaths, this);
        },
        onRemove: function () {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function () {
          var o = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd,
          };
          return this._zoomAnimated && (o.zoomanim = this._onAnimZoom), o;
        },
        _onAnimZoom: function (o) {
          this._updateTransform(o.center, o.zoom);
        },
        _onZoom: function () {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function (o, l) {
          var h = this._map.getZoomScale(l, this._zoom),
            f = this._map.getSize().multiplyBy(0.5 + this.options.padding),
            _ = this._map.project(this._center, l),
            x = f
              .multiplyBy(-h)
              .add(_)
              .subtract(this._map._getNewPixelOrigin(o, l));
          G.any3d ? Ii(this._container, x, h) : qt(this._container, x);
        },
        _reset: function () {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var o in this._layers) this._layers[o]._reset();
        },
        _onZoomEnd: function () {
          for (var o in this._layers) this._layers[o]._project();
        },
        _updatePaths: function () {
          for (var o in this._layers) this._layers[o]._update();
        },
        _update: function () {
          var o = this.options.padding,
            l = this._map.getSize(),
            h = this._map.containerPointToLayerPoint(l.multiplyBy(-o)).round();
          (this._bounds = new Q(h, h.add(l.multiplyBy(1 + o * 2)).round())),
            (this._center = this._map.getCenter()),
            (this._zoom = this._map.getZoom());
        },
      }),
      Kf = In.extend({
        options: { tolerance: 0 },
        getEvents: function () {
          var o = In.prototype.getEvents.call(this);
          return (o.viewprereset = this._onViewPreReset), o;
        },
        _onViewPreReset: function () {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function () {
          In.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function () {
          var o = (this._container = document.createElement("canvas"));
          it(o, "mousemove", this._onMouseMove, this),
            it(
              o,
              "click dblclick mousedown mouseup contextmenu",
              this._onClick,
              this
            ),
            it(o, "mouseout", this._handleMouseOut, this),
            (o._leaflet_disable_events = !0),
            (this._ctx = o.getContext("2d"));
        },
        _destroyContainer: function () {
          X(this._redrawRequest),
            delete this._ctx,
            Ht(this._container),
            zt(this._container),
            delete this._container;
        },
        _updatePaths: function () {
          if (!this._postponeUpdatePaths) {
            var o;
            this._redrawBounds = null;
            for (var l in this._layers) (o = this._layers[l]), o._update();
            this._redraw();
          }
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            In.prototype._update.call(this);
            var o = this._bounds,
              l = this._container,
              h = o.getSize(),
              f = G.retina ? 2 : 1;
            qt(l, o.min),
              (l.width = f * h.x),
              (l.height = f * h.y),
              (l.style.width = h.x + "px"),
              (l.style.height = h.y + "px"),
              G.retina && this._ctx.scale(2, 2),
              this._ctx.translate(-o.min.x, -o.min.y),
              this.fire("update");
          }
        },
        _reset: function () {
          In.prototype._reset.call(this),
            this._postponeUpdatePaths &&
              ((this._postponeUpdatePaths = !1), this._updatePaths());
        },
        _initPath: function (o) {
          this._updateDashArray(o), (this._layers[c(o)] = o);
          var l = (o._order = { layer: o, prev: this._drawLast, next: null });
          this._drawLast && (this._drawLast.next = l),
            (this._drawLast = l),
            (this._drawFirst = this._drawFirst || this._drawLast);
        },
        _addPath: function (o) {
          this._requestRedraw(o);
        },
        _removePath: function (o) {
          var l = o._order,
            h = l.next,
            f = l.prev;
          h ? (h.prev = f) : (this._drawLast = f),
            f ? (f.next = h) : (this._drawFirst = h),
            delete o._order,
            delete this._layers[c(o)],
            this._requestRedraw(o);
        },
        _updatePath: function (o) {
          this._extendRedrawBounds(o),
            o._project(),
            o._update(),
            this._requestRedraw(o);
        },
        _updateStyle: function (o) {
          this._updateDashArray(o), this._requestRedraw(o);
        },
        _updateDashArray: function (o) {
          if (typeof o.options.dashArray == "string") {
            var l = o.options.dashArray.split(/[, ]+/),
              h = [],
              f,
              _;
            for (_ = 0; _ < l.length; _++) {
              if (((f = Number(l[_])), isNaN(f))) return;
              h.push(f);
            }
            o.options._dashArray = h;
          } else o.options._dashArray = o.options.dashArray;
        },
        _requestRedraw: function (o) {
          !this._map ||
            (this._extendRedrawBounds(o),
            (this._redrawRequest =
              this._redrawRequest || K(this._redraw, this)));
        },
        _extendRedrawBounds: function (o) {
          if (o._pxBounds) {
            var l = (o.options.weight || 0) + 1;
            (this._redrawBounds = this._redrawBounds || new Q()),
              this._redrawBounds.extend(o._pxBounds.min.subtract([l, l])),
              this._redrawBounds.extend(o._pxBounds.max.add([l, l]));
          }
        },
        _redraw: function () {
          (this._redrawRequest = null),
            this._redrawBounds &&
              (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            (this._redrawBounds = null);
        },
        _clear: function () {
          var o = this._redrawBounds;
          if (o) {
            var l = o.getSize();
            this._ctx.clearRect(o.min.x, o.min.y, l.x, l.y);
          } else
            this._ctx.save(),
              this._ctx.setTransform(1, 0, 0, 1, 0, 0),
              this._ctx.clearRect(
                0,
                0,
                this._container.width,
                this._container.height
              ),
              this._ctx.restore();
        },
        _draw: function () {
          var o,
            l = this._redrawBounds;
          if ((this._ctx.save(), l)) {
            var h = l.getSize();
            this._ctx.beginPath(),
              this._ctx.rect(l.min.x, l.min.y, h.x, h.y),
              this._ctx.clip();
          }
          this._drawing = !0;
          for (var f = this._drawFirst; f; f = f.next)
            (o = f.layer),
              (!l || (o._pxBounds && o._pxBounds.intersects(l))) &&
                o._updatePath();
          (this._drawing = !1), this._ctx.restore();
        },
        _updatePoly: function (o, l) {
          if (!!this._drawing) {
            var h,
              f,
              _,
              x,
              k = o._parts,
              T = k.length,
              O = this._ctx;
            if (!!T) {
              for (O.beginPath(), h = 0; h < T; h++) {
                for (f = 0, _ = k[h].length; f < _; f++)
                  (x = k[h][f]), O[f ? "lineTo" : "moveTo"](x.x, x.y);
                l && O.closePath();
              }
              this._fillStroke(O, o);
            }
          }
        },
        _updateCircle: function (o) {
          if (!(!this._drawing || o._empty())) {
            var l = o._point,
              h = this._ctx,
              f = Math.max(Math.round(o._radius), 1),
              _ = (Math.max(Math.round(o._radiusY), 1) || f) / f;
            _ !== 1 && (h.save(), h.scale(1, _)),
              h.beginPath(),
              h.arc(l.x, l.y / _, f, 0, Math.PI * 2, !1),
              _ !== 1 && h.restore(),
              this._fillStroke(h, o);
          }
        },
        _fillStroke: function (o, l) {
          var h = l.options;
          h.fill &&
            ((o.globalAlpha = h.fillOpacity),
            (o.fillStyle = h.fillColor || h.color),
            o.fill(h.fillRule || "evenodd")),
            h.stroke &&
              h.weight !== 0 &&
              (o.setLineDash &&
                o.setLineDash((l.options && l.options._dashArray) || []),
              (o.globalAlpha = h.opacity),
              (o.lineWidth = h.weight),
              (o.strokeStyle = h.color),
              (o.lineCap = h.lineCap),
              (o.lineJoin = h.lineJoin),
              o.stroke());
        },
        _onClick: function (o) {
          for (
            var l = this._map.mouseEventToLayerPoint(o),
              h,
              f,
              _ = this._drawFirst;
            _;
            _ = _.next
          )
            (h = _.layer),
              h.options.interactive &&
                h._containsPoint(l) &&
                (!(o.type === "click" || o.type === "preclick") ||
                  !this._map._draggableMoved(h)) &&
                (f = h);
          this._fireEvent(f ? [f] : !1, o);
        },
        _onMouseMove: function (o) {
          if (
            !(
              !this._map ||
              this._map.dragging.moving() ||
              this._map._animatingZoom
            )
          ) {
            var l = this._map.mouseEventToLayerPoint(o);
            this._handleMouseHover(o, l);
          }
        },
        _handleMouseOut: function (o) {
          var l = this._hoveredLayer;
          l &&
            (Xt(this._container, "leaflet-interactive"),
            this._fireEvent([l], o, "mouseout"),
            (this._hoveredLayer = null),
            (this._mouseHoverThrottled = !1));
        },
        _handleMouseHover: function (o, l) {
          if (!this._mouseHoverThrottled) {
            for (var h, f, _ = this._drawFirst; _; _ = _.next)
              (h = _.layer),
                h.options.interactive && h._containsPoint(l) && (f = h);
            f !== this._hoveredLayer &&
              (this._handleMouseOut(o),
              f &&
                (ct(this._container, "leaflet-interactive"),
                this._fireEvent([f], o, "mouseover"),
                (this._hoveredLayer = f))),
              this._fireEvent(
                this._hoveredLayer ? [this._hoveredLayer] : !1,
                o
              ),
              (this._mouseHoverThrottled = !0),
              setTimeout(
                a(function () {
                  this._mouseHoverThrottled = !1;
                }, this),
                32
              );
          }
        },
        _fireEvent: function (o, l, h) {
          this._map._fireDOMEvent(l, h || l.type, o);
        },
        _bringToFront: function (o) {
          var l = o._order;
          if (!!l) {
            var h = l.next,
              f = l.prev;
            if (h) h.prev = f;
            else return;
            f ? (f.next = h) : h && (this._drawFirst = h),
              (l.prev = this._drawLast),
              (this._drawLast.next = l),
              (l.next = null),
              (this._drawLast = l),
              this._requestRedraw(o);
          }
        },
        _bringToBack: function (o) {
          var l = o._order;
          if (!!l) {
            var h = l.next,
              f = l.prev;
            if (f) f.next = h;
            else return;
            h ? (h.prev = f) : f && (this._drawLast = f),
              (l.prev = null),
              (l.next = this._drawFirst),
              (this._drawFirst.prev = l),
              (this._drawFirst = l),
              this._requestRedraw(o);
          }
        },
      });
    function Xf(o) {
      return G.canvas ? new Kf(o) : null;
    }
    var Lo = (function () {
        try {
          return (
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
            function (o) {
              return document.createElement("<lvml:" + o + ' class="lvml">');
            }
          );
        } catch {}
        return function (o) {
          return document.createElement(
            "<" + o + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      })(),
      wx = {
        _initContainer: function () {
          this._container = bt("div", "leaflet-vml-container");
        },
        _update: function () {
          this._map._animatingZoom ||
            (In.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function (o) {
          var l = (o._container = Lo("shape"));
          ct(l, "leaflet-vml-shape " + (this.options.className || "")),
            (l.coordsize = "1 1"),
            (o._path = Lo("path")),
            l.appendChild(o._path),
            this._updateStyle(o),
            (this._layers[c(o)] = o);
        },
        _addPath: function (o) {
          var l = o._container;
          this._container.appendChild(l),
            o.options.interactive && o.addInteractiveTarget(l);
        },
        _removePath: function (o) {
          var l = o._container;
          Ht(l), o.removeInteractiveTarget(l), delete this._layers[c(o)];
        },
        _updateStyle: function (o) {
          var l = o._stroke,
            h = o._fill,
            f = o.options,
            _ = o._container;
          (_.stroked = !!f.stroke),
            (_.filled = !!f.fill),
            f.stroke
              ? (l || (l = o._stroke = Lo("stroke")),
                _.appendChild(l),
                (l.weight = f.weight + "px"),
                (l.color = f.color),
                (l.opacity = f.opacity),
                f.dashArray
                  ? (l.dashStyle = P(f.dashArray)
                      ? f.dashArray.join(" ")
                      : f.dashArray.replace(/( *, *)/g, " "))
                  : (l.dashStyle = ""),
                (l.endcap = f.lineCap.replace("butt", "flat")),
                (l.joinstyle = f.lineJoin))
              : l && (_.removeChild(l), (o._stroke = null)),
            f.fill
              ? (h || (h = o._fill = Lo("fill")),
                _.appendChild(h),
                (h.color = f.fillColor || f.color),
                (h.opacity = f.fillOpacity))
              : h && (_.removeChild(h), (o._fill = null));
        },
        _updateCircle: function (o) {
          var l = o._point.round(),
            h = Math.round(o._radius),
            f = Math.round(o._radiusY || h);
          this._setPath(
            o,
            o._empty()
              ? "M0 0"
              : "AL " +
                  l.x +
                  "," +
                  l.y +
                  " " +
                  h +
                  "," +
                  f +
                  " 0," +
                  65535 * 360
          );
        },
        _setPath: function (o, l) {
          o._path.v = l;
        },
        _bringToFront: function (o) {
          wr(o._container);
        },
        _bringToBack: function (o) {
          br(o._container);
        },
      },
      va = G.vml ? Lo : qs,
      Mo = In.extend({
        _initContainer: function () {
          (this._container = va("svg")),
            this._container.setAttribute("pointer-events", "none"),
            (this._rootGroup = va("g")),
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function () {
          Ht(this._container),
            zt(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize;
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            In.prototype._update.call(this);
            var o = this._bounds,
              l = o.getSize(),
              h = this._container;
            (!this._svgSize || !this._svgSize.equals(l)) &&
              ((this._svgSize = l),
              h.setAttribute("width", l.x),
              h.setAttribute("height", l.y)),
              qt(h, o.min),
              h.setAttribute("viewBox", [o.min.x, o.min.y, l.x, l.y].join(" ")),
              this.fire("update");
          }
        },
        _initPath: function (o) {
          var l = (o._path = va("path"));
          o.options.className && ct(l, o.options.className),
            o.options.interactive && ct(l, "leaflet-interactive"),
            this._updateStyle(o),
            (this._layers[c(o)] = o);
        },
        _addPath: function (o) {
          this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(o._path),
            o.addInteractiveTarget(o._path);
        },
        _removePath: function (o) {
          Ht(o._path),
            o.removeInteractiveTarget(o._path),
            delete this._layers[c(o)];
        },
        _updatePath: function (o) {
          o._project(), o._update();
        },
        _updateStyle: function (o) {
          var l = o._path,
            h = o.options;
          !l ||
            (h.stroke
              ? (l.setAttribute("stroke", h.color),
                l.setAttribute("stroke-opacity", h.opacity),
                l.setAttribute("stroke-width", h.weight),
                l.setAttribute("stroke-linecap", h.lineCap),
                l.setAttribute("stroke-linejoin", h.lineJoin),
                h.dashArray
                  ? l.setAttribute("stroke-dasharray", h.dashArray)
                  : l.removeAttribute("stroke-dasharray"),
                h.dashOffset
                  ? l.setAttribute("stroke-dashoffset", h.dashOffset)
                  : l.removeAttribute("stroke-dashoffset"))
              : l.setAttribute("stroke", "none"),
            h.fill
              ? (l.setAttribute("fill", h.fillColor || h.color),
                l.setAttribute("fill-opacity", h.fillOpacity),
                l.setAttribute("fill-rule", h.fillRule || "evenodd"))
              : l.setAttribute("fill", "none"));
        },
        _updatePoly: function (o, l) {
          this._setPath(o, Js(o._parts, l));
        },
        _updateCircle: function (o) {
          var l = o._point,
            h = Math.max(Math.round(o._radius), 1),
            f = Math.max(Math.round(o._radiusY), 1) || h,
            _ = "a" + h + "," + f + " 0 1,0 ",
            x = o._empty()
              ? "M0 0"
              : "M" +
                (l.x - h) +
                "," +
                l.y +
                _ +
                h * 2 +
                ",0 " +
                _ +
                -h * 2 +
                ",0 ";
          this._setPath(o, x);
        },
        _setPath: function (o, l) {
          o._path.setAttribute("d", l);
        },
        _bringToFront: function (o) {
          wr(o._path);
        },
        _bringToBack: function (o) {
          br(o._path);
        },
      });
    G.vml && Mo.include(wx);
    function Gf(o) {
      return G.svg || G.vml ? new Mo(o) : null;
    }
    gt.include({
      getRenderer: function (o) {
        var l =
          o.options.renderer ||
          this._getPaneRenderer(o.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          l || (l = this._renderer = this._createRenderer()),
          this.hasLayer(l) || this.addLayer(l),
          l
        );
      },
      _getPaneRenderer: function (o) {
        if (o === "overlayPane" || o === void 0) return !1;
        var l = this._paneRenderers[o];
        return (
          l === void 0 &&
            ((l = this._createRenderer({ pane: o })),
            (this._paneRenderers[o] = l)),
          l
        );
      },
      _createRenderer: function (o) {
        return (this.options.preferCanvas && Xf(o)) || Gf(o);
      },
    });
    var Qf = kr.extend({
      initialize: function (o, l) {
        kr.prototype.initialize.call(this, this._boundsToLatLngs(o), l);
      },
      setBounds: function (o) {
        return this.setLatLngs(this._boundsToLatLngs(o));
      },
      _boundsToLatLngs: function (o) {
        return (
          (o = wt(o)),
          [
            o.getSouthWest(),
            o.getNorthWest(),
            o.getNorthEast(),
            o.getSouthEast(),
          ]
        );
      },
    });
    function bx(o, l) {
      return new Qf(o, l);
    }
    (Mo.create = va),
      (Mo.pointsToPath = Js),
      (An.geometryToLayer = ha),
      (An.coordsToLatLng = Wu),
      (An.coordsToLatLngs = da),
      (An.latLngToCoords = Hu),
      (An.latLngsToCoords = fa),
      (An.getFeature = Cr),
      (An.asFeature = pa),
      gt.mergeOptions({ boxZoom: !0 });
    var qf = xn.extend({
      initialize: function (o) {
        (this._map = o),
          (this._container = o._container),
          (this._pane = o._panes.overlayPane),
          (this._resetStateTimeout = 0),
          o.on("unload", this._destroy, this);
      },
      addHooks: function () {
        it(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function () {
        zt(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function () {
        return this._moved;
      },
      _destroy: function () {
        Ht(this._pane), delete this._pane;
      },
      _resetState: function () {
        (this._resetStateTimeout = 0), (this._moved = !1);
      },
      _clearDeferredResetState: function () {
        this._resetStateTimeout !== 0 &&
          (clearTimeout(this._resetStateTimeout),
          (this._resetStateTimeout = 0));
      },
      _onMouseDown: function (o) {
        if (!o.shiftKey || (o.which !== 1 && o.button !== 1)) return !1;
        this._clearDeferredResetState(),
          this._resetState(),
          yo(),
          ku(),
          (this._startPoint = this._map.mouseEventToContainerPoint(o)),
          it(
            document,
            {
              contextmenu: Fi,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseMove: function (o) {
        this._moved ||
          ((this._moved = !0),
          (this._box = bt("div", "leaflet-zoom-box", this._container)),
          ct(this._container, "leaflet-crosshair"),
          this._map.fire("boxzoomstart")),
          (this._point = this._map.mouseEventToContainerPoint(o));
        var l = new Q(this._point, this._startPoint),
          h = l.getSize();
        qt(this._box, l.min),
          (this._box.style.width = h.x + "px"),
          (this._box.style.height = h.y + "px");
      },
      _finish: function () {
        this._moved &&
          (Ht(this._box), Xt(this._container, "leaflet-crosshair")),
          xo(),
          Cu(),
          zt(
            document,
            {
              contextmenu: Fi,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseUp: function (o) {
        if (
          !(o.which !== 1 && o.button !== 1) &&
          (this._finish(), !!this._moved)
        ) {
          this._clearDeferredResetState(),
            (this._resetStateTimeout = setTimeout(
              a(this._resetState, this),
              0
            ));
          var l = new Ot(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(l).fire("boxzoomend", { boxZoomBounds: l });
        }
      },
      _onKeyDown: function (o) {
        o.keyCode === 27 &&
          (this._finish(), this._clearDeferredResetState(), this._resetState());
      },
    });
    gt.addInitHook("addHandler", "boxZoom", qf),
      gt.mergeOptions({ doubleClickZoom: !0 });
    var Jf = xn.extend({
      addHooks: function () {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function () {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function (o) {
        var l = this._map,
          h = l.getZoom(),
          f = l.options.zoomDelta,
          _ = o.originalEvent.shiftKey ? h - f : h + f;
        l.options.doubleClickZoom === "center"
          ? l.setZoom(_)
          : l.setZoomAround(o.containerPoint, _);
      },
    });
    gt.addInitHook("addHandler", "doubleClickZoom", Jf),
      gt.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0,
      });
    var tp = xn.extend({
      addHooks: function () {
        if (!this._draggable) {
          var o = this._map;
          (this._draggable = new ni(o._mapPane, o._container)),
            this._draggable.on(
              {
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            ),
            this._draggable.on("predrag", this._onPreDragLimit, this),
            o.options.worldCopyJump &&
              (this._draggable.on("predrag", this._onPreDragWrap, this),
              o.on("zoomend", this._onZoomEnd, this),
              o.whenReady(this._onZoomEnd, this));
        }
        ct(this._map._container, "leaflet-grab leaflet-touch-drag"),
          this._draggable.enable(),
          (this._positions = []),
          (this._times = []);
      },
      removeHooks: function () {
        Xt(this._map._container, "leaflet-grab"),
          Xt(this._map._container, "leaflet-touch-drag"),
          this._draggable.disable();
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      moving: function () {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function () {
        var o = this._map;
        if (
          (o._stop(),
          this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
        ) {
          var l = wt(this._map.options.maxBounds);
          (this._offsetLimit = ot(
            this._map.latLngToContainerPoint(l.getNorthWest()).multiplyBy(-1),
            this._map
              .latLngToContainerPoint(l.getSouthEast())
              .multiplyBy(-1)
              .add(this._map.getSize())
          )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity)
            ));
        } else this._offsetLimit = null;
        o.fire("movestart").fire("dragstart"),
          o.options.inertia && ((this._positions = []), (this._times = []));
      },
      _onDrag: function (o) {
        if (this._map.options.inertia) {
          var l = (this._lastTime = +new Date()),
            h = (this._lastPos =
              this._draggable._absPos || this._draggable._newPos);
          this._positions.push(h), this._times.push(l), this._prunePositions(l);
        }
        this._map.fire("move", o).fire("drag", o);
      },
      _prunePositions: function (o) {
        for (; this._positions.length > 1 && o - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function () {
        var o = this._map.getSize().divideBy(2),
          l = this._map.latLngToLayerPoint([0, 0]);
        (this._initialWorldOffset = l.subtract(o).x),
          (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
      },
      _viscousLimit: function (o, l) {
        return o - (o - l) * this._viscosity;
      },
      _onPreDragLimit: function () {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var o = this._draggable._newPos.subtract(this._draggable._startPos),
            l = this._offsetLimit;
          o.x < l.min.x && (o.x = this._viscousLimit(o.x, l.min.x)),
            o.y < l.min.y && (o.y = this._viscousLimit(o.y, l.min.y)),
            o.x > l.max.x && (o.x = this._viscousLimit(o.x, l.max.x)),
            o.y > l.max.y && (o.y = this._viscousLimit(o.y, l.max.y)),
            (this._draggable._newPos = this._draggable._startPos.add(o));
        }
      },
      _onPreDragWrap: function () {
        var o = this._worldWidth,
          l = Math.round(o / 2),
          h = this._initialWorldOffset,
          f = this._draggable._newPos.x,
          _ = ((f - l + h) % o) + l - h,
          x = ((f + l + h) % o) - l - h,
          k = Math.abs(_ + h) < Math.abs(x + h) ? _ : x;
        (this._draggable._absPos = this._draggable._newPos.clone()),
          (this._draggable._newPos.x = k);
      },
      _onDragEnd: function (o) {
        var l = this._map,
          h = l.options,
          f = !h.inertia || o.noInertia || this._times.length < 2;
        if ((l.fire("dragend", o), f)) l.fire("moveend");
        else {
          this._prunePositions(+new Date());
          var _ = this._lastPos.subtract(this._positions[0]),
            x = (this._lastTime - this._times[0]) / 1e3,
            k = h.easeLinearity,
            T = _.multiplyBy(k / x),
            O = T.distanceTo([0, 0]),
            F = Math.min(h.inertiaMaxSpeed, O),
            $ = T.multiplyBy(F / O),
            et = F / (h.inertiaDeceleration * k),
            st = $.multiplyBy(-et / 2).round();
          !st.x && !st.y
            ? l.fire("moveend")
            : ((st = l._limitOffset(st, l.options.maxBounds)),
              K(function () {
                l.panBy(st, {
                  duration: et,
                  easeLinearity: k,
                  noMoveStart: !0,
                  animate: !0,
                });
              }));
        }
      },
    });
    gt.addInitHook("addHandler", "dragging", tp),
      gt.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
    var ep = xn.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173],
      },
      initialize: function (o) {
        (this._map = o),
          this._setPanDelta(o.options.keyboardPanDelta),
          this._setZoomDelta(o.options.zoomDelta);
      },
      addHooks: function () {
        var o = this._map._container;
        o.tabIndex <= 0 && (o.tabIndex = "0"),
          it(
            o,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.on(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      removeHooks: function () {
        this._removeHooks(),
          zt(
            this._map._container,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.off(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      _onMouseDown: function () {
        if (!this._focused) {
          var o = document.body,
            l = document.documentElement,
            h = o.scrollTop || l.scrollTop,
            f = o.scrollLeft || l.scrollLeft;
          this._map._container.focus(), window.scrollTo(f, h);
        }
      },
      _onFocus: function () {
        (this._focused = !0), this._map.fire("focus");
      },
      _onBlur: function () {
        (this._focused = !1), this._map.fire("blur");
      },
      _setPanDelta: function (o) {
        var l = (this._panKeys = {}),
          h = this.keyCodes,
          f,
          _;
        for (f = 0, _ = h.left.length; f < _; f++) l[h.left[f]] = [-1 * o, 0];
        for (f = 0, _ = h.right.length; f < _; f++) l[h.right[f]] = [o, 0];
        for (f = 0, _ = h.down.length; f < _; f++) l[h.down[f]] = [0, o];
        for (f = 0, _ = h.up.length; f < _; f++) l[h.up[f]] = [0, -1 * o];
      },
      _setZoomDelta: function (o) {
        var l = (this._zoomKeys = {}),
          h = this.keyCodes,
          f,
          _;
        for (f = 0, _ = h.zoomIn.length; f < _; f++) l[h.zoomIn[f]] = o;
        for (f = 0, _ = h.zoomOut.length; f < _; f++) l[h.zoomOut[f]] = -o;
      },
      _addHooks: function () {
        it(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function () {
        zt(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function (o) {
        if (!(o.altKey || o.ctrlKey || o.metaKey)) {
          var l = o.keyCode,
            h = this._map,
            f;
          if (l in this._panKeys)
            (!h._panAnim || !h._panAnim._inProgress) &&
              ((f = this._panKeys[l]),
              o.shiftKey && (f = W(f).multiplyBy(3)),
              h.panBy(f),
              h.options.maxBounds && h.panInsideBounds(h.options.maxBounds));
          else if (l in this._zoomKeys)
            h.setZoom(h.getZoom() + (o.shiftKey ? 3 : 1) * this._zoomKeys[l]);
          else if (l === 27 && h._popup && h._popup.options.closeOnEscapeKey)
            h.closePopup();
          else return;
          Fi(o);
        }
      },
    });
    gt.addInitHook("addHandler", "keyboard", ep),
      gt.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60,
      });
    var np = xn.extend({
      addHooks: function () {
        it(this._map._container, "wheel", this._onWheelScroll, this),
          (this._delta = 0);
      },
      removeHooks: function () {
        zt(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function (o) {
        var l = Cf(o),
          h = this._map.options.wheelDebounceTime;
        (this._delta += l),
          (this._lastMousePos = this._map.mouseEventToContainerPoint(o)),
          this._startTime || (this._startTime = +new Date());
        var f = Math.max(h - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer),
          (this._timer = setTimeout(a(this._performZoom, this), f)),
          Fi(o);
      },
      _performZoom: function () {
        var o = this._map,
          l = o.getZoom(),
          h = this._map.options.zoomSnap || 0;
        o._stop();
        var f = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          _ = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(f))))) / Math.LN2,
          x = h ? Math.ceil(_ / h) * h : _,
          k = o._limitZoom(l + (this._delta > 0 ? x : -x)) - l;
        (this._delta = 0),
          (this._startTime = null),
          k &&
            (o.options.scrollWheelZoom === "center"
              ? o.setZoom(l + k)
              : o.setZoomAround(this._lastMousePos, l + k));
      },
    });
    gt.addInitHook("addHandler", "scrollWheelZoom", np);
    var Sx = 600;
    gt.mergeOptions({
      tapHold: G.touchNative && G.safari && G.mobile,
      tapTolerance: 15,
    });
    var ip = xn.extend({
      addHooks: function () {
        it(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function () {
        zt(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function (o) {
        if ((clearTimeout(this._holdTimeout), o.touches.length === 1)) {
          var l = o.touches[0];
          (this._startPos = this._newPos = new z(l.clientX, l.clientY)),
            (this._holdTimeout = setTimeout(
              a(function () {
                this._cancel(),
                  this._isTapValid() &&
                    (it(document, "touchend", ce),
                    it(
                      document,
                      "touchend touchcancel",
                      this._cancelClickPrevent
                    ),
                    this._simulateEvent("contextmenu", l));
              }, this),
              Sx
            )),
            it(
              document,
              "touchend touchcancel contextmenu",
              this._cancel,
              this
            ),
            it(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function o() {
        zt(document, "touchend", ce), zt(document, "touchend touchcancel", o);
      },
      _cancel: function () {
        clearTimeout(this._holdTimeout),
          zt(document, "touchend touchcancel contextmenu", this._cancel, this),
          zt(document, "touchmove", this._onMove, this);
      },
      _onMove: function (o) {
        var l = o.touches[0];
        this._newPos = new z(l.clientX, l.clientY);
      },
      _isTapValid: function () {
        return (
          this._newPos.distanceTo(this._startPos) <=
          this._map.options.tapTolerance
        );
      },
      _simulateEvent: function (o, l) {
        var h = new MouseEvent(o, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: l.screenX,
          screenY: l.screenY,
          clientX: l.clientX,
          clientY: l.clientY,
        });
        (h._simulated = !0), l.target.dispatchEvent(h);
      },
    });
    gt.addInitHook("addHandler", "tapHold", ip),
      gt.mergeOptions({ touchZoom: G.touch, bounceAtZoomLimits: !0 });
    var rp = xn.extend({
      addHooks: function () {
        ct(this._map._container, "leaflet-touch-zoom"),
          it(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function () {
        Xt(this._map._container, "leaflet-touch-zoom"),
          zt(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function (o) {
        var l = this._map;
        if (
          !(
            !o.touches ||
            o.touches.length !== 2 ||
            l._animatingZoom ||
            this._zooming
          )
        ) {
          var h = l.mouseEventToContainerPoint(o.touches[0]),
            f = l.mouseEventToContainerPoint(o.touches[1]);
          (this._centerPoint = l.getSize()._divideBy(2)),
            (this._startLatLng = l.containerPointToLatLng(this._centerPoint)),
            l.options.touchZoom !== "center" &&
              (this._pinchStartLatLng = l.containerPointToLatLng(
                h.add(f)._divideBy(2)
              )),
            (this._startDist = h.distanceTo(f)),
            (this._startZoom = l.getZoom()),
            (this._moved = !1),
            (this._zooming = !0),
            l._stop(),
            it(document, "touchmove", this._onTouchMove, this),
            it(document, "touchend touchcancel", this._onTouchEnd, this),
            ce(o);
        }
      },
      _onTouchMove: function (o) {
        if (!(!o.touches || o.touches.length !== 2 || !this._zooming)) {
          var l = this._map,
            h = l.mouseEventToContainerPoint(o.touches[0]),
            f = l.mouseEventToContainerPoint(o.touches[1]),
            _ = h.distanceTo(f) / this._startDist;
          if (
            ((this._zoom = l.getScaleZoom(_, this._startZoom)),
            !l.options.bounceAtZoomLimits &&
              ((this._zoom < l.getMinZoom() && _ < 1) ||
                (this._zoom > l.getMaxZoom() && _ > 1)) &&
              (this._zoom = l._limitZoom(this._zoom)),
            l.options.touchZoom === "center")
          ) {
            if (((this._center = this._startLatLng), _ === 1)) return;
          } else {
            var x = h._add(f)._divideBy(2)._subtract(this._centerPoint);
            if (_ === 1 && x.x === 0 && x.y === 0) return;
            this._center = l.unproject(
              l.project(this._pinchStartLatLng, this._zoom).subtract(x),
              this._zoom
            );
          }
          this._moved || (l._moveStart(!0, !1), (this._moved = !0)),
            X(this._animRequest);
          var k = a(
            l._move,
            l,
            this._center,
            this._zoom,
            { pinch: !0, round: !1 },
            void 0
          );
          (this._animRequest = K(k, this, !0)), ce(o);
        }
      },
      _onTouchEnd: function () {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        (this._zooming = !1),
          X(this._animRequest),
          zt(document, "touchmove", this._onTouchMove, this),
          zt(document, "touchend touchcancel", this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              );
      },
    });
    gt.addInitHook("addHandler", "touchZoom", rp),
      (gt.BoxZoom = qf),
      (gt.DoubleClickZoom = Jf),
      (gt.Drag = tp),
      (gt.Keyboard = ep),
      (gt.ScrollWheelZoom = np),
      (gt.TapHold = ip),
      (gt.TouchZoom = rp),
      (n.Bounds = Q),
      (n.Browser = G),
      (n.CRS = oe),
      (n.Canvas = Kf),
      (n.Circle = ju),
      (n.CircleMarker = ca),
      (n.Class = rt),
      (n.Control = rn),
      (n.DivIcon = Uf),
      (n.DivOverlay = wn),
      (n.DomEvent = W0),
      (n.DomUtil = F0),
      (n.Draggable = ni),
      (n.Evented = _t),
      (n.FeatureGroup = Wi),
      (n.GeoJSON = An),
      (n.GridLayer = Co),
      (n.Handler = xn),
      (n.Icon = Pr),
      (n.ImageOverlay = ma),
      (n.LatLng = at),
      (n.LatLngBounds = Ot),
      (n.Layer = on),
      (n.LayerGroup = Sr),
      (n.LineUtil = J0),
      (n.Map = gt),
      (n.Marker = ua),
      (n.Mixin = K0),
      (n.Path = ii),
      (n.Point = z),
      (n.PolyUtil = tx),
      (n.Polygon = kr),
      (n.Polyline = zn),
      (n.Popup = ga),
      (n.PosAnimation = Lf),
      (n.Projection = ex),
      (n.Rectangle = Qf),
      (n.Renderer = In),
      (n.SVG = Mo),
      (n.SVGOverlay = Zf),
      (n.TileLayer = Lr),
      (n.Tooltip = _a),
      (n.Transformation = gr),
      (n.Util = Pt),
      (n.VideoOverlay = Vf),
      (n.bind = a),
      (n.bounds = ot),
      (n.canvas = Xf),
      (n.circle = ux),
      (n.circleMarker = lx),
      (n.control = So),
      (n.divIcon = vx),
      (n.extend = r),
      (n.featureGroup = ox),
      (n.geoJSON = Hf),
      (n.geoJson = dx),
      (n.gridLayer = yx),
      (n.icon = sx),
      (n.imageOverlay = fx),
      (n.latLng = lt),
      (n.latLngBounds = wt),
      (n.layerGroup = rx),
      (n.map = H0),
      (n.marker = ax),
      (n.point = W),
      (n.polygon = hx),
      (n.polyline = cx),
      (n.popup = gx),
      (n.rectangle = bx),
      (n.setOptions = S),
      (n.stamp = c),
      (n.svg = Gf),
      (n.svgOverlay = mx),
      (n.tileLayer = $f),
      (n.tooltip = _x),
      (n.transformation = zi),
      (n.version = i),
      (n.videoOverlay = px);
    var Px = window.L;
    (n.noConflict = function () {
      return (window.L = Px), this;
    }),
      (window.L = n);
  });
})(lo, lo.exports);
function hf(e, t, n) {
  return Object.freeze({ instance: e, context: t, container: n });
}
function df(e, t) {
  return t == null
    ? function (i, r) {
        const s = A.exports.useRef();
        return s.current || (s.current = e(i, r)), s;
      }
    : function (i, r) {
        const s = A.exports.useRef();
        s.current || (s.current = e(i, r));
        const a = A.exports.useRef(i),
          { instance: u } = s.current;
        return (
          A.exports.useEffect(
            function () {
              a.current !== i && (t(u, i, a.current), (a.current = i));
            },
            [u, i, r]
          ),
          s
        );
      };
}
function rM(e, t) {
  A.exports.useEffect(
    function () {
      var r;
      return (
        ((r = t.layerContainer) != null ? r : t.map).addLayer(e.instance),
        function () {
          var a;
          (a = t.layerContainer) == null || a.removeLayer(e.instance),
            t.map.removeLayer(e.instance);
        }
      );
    },
    [t, e]
  );
}
function b0(e) {
  return function (n) {
    const i = x0(),
      r = e(cf(n, i), i);
    return (
      _0(i.map, n.attribution),
      w0(r.current, n.eventHandlers),
      rM(r.current, i),
      r
    );
  };
}
function oM(e, t) {
  const n = df(e, t),
    i = b0(n);
  return tM(i);
}
function sM(e, t) {
  const n = df(e),
    i = iM(n, t);
  return eM(i);
}
function aM(e, t) {
  const n = df(e, t),
    i = b0(n);
  return nM(i);
}
function lM(e, t, n) {
  const { opacity: i, zIndex: r } = t;
  i != null && i !== n.opacity && e.setOpacity(i),
    r != null && r !== n.zIndex && e.setZIndex(r);
}
function uM(
  {
    bounds: e,
    boundsOptions: t,
    center: n,
    children: i,
    className: r,
    id: s,
    placeholder: a,
    style: u,
    whenReady: c,
    zoom: d,
    ...p
  },
  g
) {
  const [m] = A.exports.useState({ className: r, id: s, style: u }),
    [v, y] = A.exports.useState(null);
  A.exports.useImperativeHandle(
    g,
    () => {
      var w;
      return (w = v == null ? void 0 : v.map) != null ? w : null;
    },
    [v]
  );
  const S = A.exports.useCallback((w) => {
    if (w !== null && v === null) {
      const b = new lo.exports.Map(w, p);
      n != null && d != null ? b.setView(n, d) : e != null && b.fitBounds(e, t),
        c != null && b.whenReady(c),
        y(qL(b));
    }
  }, []);
  A.exports.useEffect(
    () => () => {
      v == null || v.map.remove();
    },
    [v]
  );
  const M = v ? B(y0, { value: v, children: i }) : a != null ? a : null;
  return B("div", { ...m, ref: S, children: M });
}
const cM = A.exports.forwardRef(uM),
  hM = oM(
    function ({ position: t, ...n }, i) {
      const r = new lo.exports.Marker(t, n);
      return hf(r, JL(i, { overlayContainer: r }));
    },
    function (t, n, i) {
      n.position !== i.position && t.setLatLng(n.position),
        n.icon != null && n.icon !== i.icon && t.setIcon(n.icon),
        n.zIndexOffset != null &&
          n.zIndexOffset !== i.zIndexOffset &&
          t.setZIndexOffset(n.zIndexOffset),
        n.opacity != null && n.opacity !== i.opacity && t.setOpacity(n.opacity),
        t.dragging != null &&
          n.draggable !== i.draggable &&
          (n.draggable === !0 ? t.dragging.enable() : t.dragging.disable());
    }
  ),
  dM = sM(
    function (t, n) {
      const i = new lo.exports.Popup(t, n.overlayContainer);
      return hf(i, n);
    },
    function (t, n, { position: i }, r) {
      A.exports.useEffect(
        function () {
          const { instance: a } = t;
          function u(d) {
            d.popup === a && (a.update(), r(!0));
          }
          function c(d) {
            d.popup === a && r(!1);
          }
          return (
            n.map.on({ popupopen: u, popupclose: c }),
            n.overlayContainer == null
              ? (i != null && a.setLatLng(i), a.openOn(n.map))
              : n.overlayContainer.bindPopup(a),
            function () {
              var p;
              n.map.off({ popupopen: u, popupclose: c }),
                (p = n.overlayContainer) == null || p.unbindPopup(),
                n.map.removeLayer(a);
            }
          );
        },
        [t, n, r, i]
      );
    }
  ),
  fM = aM(function ({ url: t, ...n }, i) {
    const r = new lo.exports.TileLayer(t, cf(n, i));
    return hf(r, i);
  }, lM);
Gs.register(Hl, uf, fu, Qs, dL, xL, cL);
const pM = () => {
    const e = A.exports.useContext(Hs),
      [t, { data: n }] = Vs("school_location_information.json"),
      [i, r] = A.exports.useState({});
    return (
      A.exports.useEffect(() => {
        (async () => t())();
      }, []),
      A.exports.useEffect(() => {
        if (!n || !e) return;
        console.log({ data: n });
        const s = Object.entries(n).reduce((a, [u, c]) => {
          const d = Object.entries(e).find(([p, g]) => u === p);
          return d
            ? (console.log({ matchingBasicInformation: d }),
              (a[u] = { name: d[1].schoolName, lat: c.lat, lng: c.lng }),
              a)
            : null;
        }, {});
        console.log({ latLngInfo: s }), r(s);
      }, [n, e]),
      vt("div", {
        style: { flexGrow: 1 },
        children: [
          B("h2", { children: "Map Test" }),
          vt(cM, {
            center: [51.0447, -114.0719],
            zoom: 13,
            scrollWheelZoom: !1,
            style: { height: "500px", width: "85vw" },
            children: [
              " ",
              B(fM, {
                attribution:
                  '\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              }),
              " ",
              i
                ? Object.entries(i).map(([s, a]) =>
                    B(hM, {
                      position: [a.lat, a.lng],
                      children: vt(dM, {
                        children: [
                          B("h3", { children: a.name }),
                          B(gy, {
                            to: `/schools/${s}`,
                            children: "Additional Information",
                          }),
                        ],
                      }),
                    })
                  )
                : null,
            ],
          }),
        ],
      })
    );
  },
  mM = () =>
    vt(Tn, {
      children: [
        B("h2", { children: "Athletics" }),
        B("p", { children: "No athletics information found." }),
      ],
    }),
  gM = () =>
    vt(Tn, {
      children: [
        B("h2", { children: "Accessibility" }),
        B("p", { children: "No accessibility information found" }),
      ],
    }),
  _M = wS([
    {
      path: "/",
      element: B(kS, {}),
      errorElement: B(Am, {}),
      loader: PS,
      children: [
        {
          errorElement: B(Am, {}),
          children: [
            { index: !0, element: B(XL, {}) },
            {
              path: "schools",
              children: [
                { index: !0, element: B(GL, {}) },
                { path: ":id", element: B(KL, {}) },
              ],
            },
            { path: "map", element: B(pM, {}) },
            { path: "academics", element: B(YL, {}) },
            { path: "athletics", element: B(mM, {}) },
            { path: "accessibility", element: B(gM, {}) },
          ],
        },
      ],
    },
  ]);
Ic.createRoot(document.getElementById("root")).render(
  B(qg.StrictMode, { children: B(dS, { router: _M }) })
);
