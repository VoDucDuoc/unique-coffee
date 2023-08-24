"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7976],
  {
    33603: function (e, t, n) {
      n.d(t, {
        mL: function () {
          return u;
        },
        q0: function () {
          return o;
        },
      });
      var r = n(93355),
        i = function () {
          return { height: 0, opacity: 0 };
        },
        c = function (e) {
          return { height: e.scrollHeight, opacity: 1 };
        },
        a = function (e, t) {
          return (
            (null == t ? void 0 : t.deadline) === !0 ||
            "height" === t.propertyName
          );
        };
      (0, r.b)("bottomLeft", "bottomRight", "topLeft", "topRight");
      var o = function (e) {
          return void 0 !== e && ("topLeft" === e || "topRight" === e)
            ? "slide-down"
            : "slide-up";
        },
        u = function (e, t, n) {
          return void 0 !== n ? n : "".concat(e, "-").concat(t);
        };
      t.ZP = {
        motionName: "ant-motion-collapse",
        onAppearStart: i,
        onEnterStart: i,
        onAppearActive: c,
        onEnterActive: c,
        onLeaveStart: function (e) {
          return { height: e ? e.offsetHeight : 0 };
        },
        onLeaveActive: i,
        onAppearEnd: a,
        onEnterEnd: a,
        onLeaveEnd: a,
        motionDeadline: 500,
      };
    },
    93355: function (e, t, n) {
      n.d(t, {
        a: function () {
          return i;
        },
        b: function () {
          return r;
        },
      });
      var r = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t;
        },
        i = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t;
        };
    },
    17350: function (e, t, n) {
      n.r(t);
      var r = n(828),
        i = n(85893),
        c = n(56075),
        a = n(5152),
        o = n.n(a),
        u = n(67294),
        s = n(57295),
        f = void 0,
        l = c.Z.Text,
        E = o()(
          function () {
            return Promise.all([n.e(1577), n.e(546)]).then(n.bind(n, 33730));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [33730];
              },
            },
          }
        ),
        d = (0, u.memo)(function (e) {
          var t = e.listScene,
            n = e.titleProject,
            c = e.sceneSelected,
            a = e.onNextScene,
            o = (0, r.Z)((0, u.useState)(""), 2),
            d = o[0],
            N = o[1],
            h = (0, u.useMemo)(
              function () {
                return (
                  t.filter(function (e) {
                    return e.title
                      .toLowerCase()
                      .includes(d.trim().toLowerCase());
                  }) || []
                );
              },
              [t, d]
            );
          return (0, i.jsxs)(s.bx, {
            children: [
              (0, i.jsx)("div", {
                className: "--header",
                children: (0, i.jsx)("div", {
                  className: "--title",
                  children: (0, i.jsx)(l, {
                    style: { width: "100%" },
                    ellipsis: { tooltip: n },
                    children: n,
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: "--search",
                children: (0, i.jsx)(E, {
                  onTriggerSearch: function (e) {
                    return N(e.value);
                  },
                }),
              }),
              (0, i.jsx)("div", {
                className: "--body hide-scrollbar",
                children: (0, i.jsx)("div", {
                  className: "--list",
                  children: h.map(function (e) {
                    var t, n, r;
                    return (0, i.jsxs)(
                      "div",
                      {
                        className: "--item ".concat(
                          (null == c ? void 0 : c.id) === e.id ? "active" : ""
                        ),
                        onClick: a.bind(f, e),
                        children: [
                          (0, i.jsx)("div", {
                            className: "--left",
                            children: (0, i.jsx)("div", {
                              className: "--thumb",
                              children: (0, i.jsx)("img", {
                                src:
                                  (null === (t = e.media) || void 0 === t
                                    ? void 0
                                    : t.src_thumb) ||
                                  (null === (n = e.media) || void 0 === n
                                    ? void 0
                                    : n.src_preview),
                                alt: e.title,
                              }),
                            }),
                          }),
                          (0, i.jsx),
                        ],
                      },
                      e.id
                    );
                  }),
                }),
              }),
            ],
          });
        });
      t.default = d;
    },
    48555: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return M;
        },
      });
      var r = n(87462),
        i = n(67294),
        c = n(50344);
      n(80334);
      var a = n(1413),
        o = n(42550),
        u = n(34203),
        s = n(91033),
        f = new Map(),
        l = new s.Z(function (e) {
          e.forEach(function (e) {
            var t,
              n = e.target;
            null === (t = f.get(n)) ||
              void 0 === t ||
              t.forEach(function (e) {
                return e(n);
              });
          });
        }),
        E = n(15671),
        d = n(43144),
        N = n(32531),
        h = n(73568),
        v = (function (e) {
          (0, N.Z)(n, e);
          var t = (0, h.Z)(n);
          function n() {
            return (0, E.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, d.Z)(n, [
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(i.Component),
        S = i.createContext(null),
        _ = i.forwardRef(function (e, t) {
          var n = e.children,
            r = e.disabled,
            c = i.useRef(null),
            s = i.useRef(null),
            E = i.useContext(S),
            d = "function" == typeof n,
            N = d ? n(c) : n,
            h = i.useRef({
              width: -1,
              height: -1,
              offsetWidth: -1,
              offsetHeight: -1,
            }),
            _ = !d && i.isValidElement(N) && (0, o.Yr)(N),
            A = _ ? N.ref : null,
            M = i.useMemo(
              function () {
                return (0, o.sQ)(A, c);
              },
              [A, c]
            ),
            R = function () {
              return (0, u.Z)(c.current) || (0, u.Z)(s.current);
            };
          i.useImperativeHandle(t, function () {
            return R();
          });
          var T = i.useRef(e);
          T.current = e;
          var m = i.useCallback(function (e) {
            var t = T.current,
              n = t.onResize,
              r = t.data,
              i = e.getBoundingClientRect(),
              c = i.width,
              o = i.height,
              u = e.offsetWidth,
              s = e.offsetHeight,
              f = Math.floor(c),
              l = Math.floor(o);
            if (
              h.current.width !== f ||
              h.current.height !== l ||
              h.current.offsetWidth !== u ||
              h.current.offsetHeight !== s
            ) {
              var d = { width: f, height: l, offsetWidth: u, offsetHeight: s };
              h.current = d;
              var N = (0, a.Z)(
                (0, a.Z)({}, d),
                {},
                {
                  offsetWidth: u === Math.round(c) ? c : u,
                  offsetHeight: s === Math.round(o) ? o : s,
                }
              );
              null == E || E(N, e, r),
                n &&
                  Promise.resolve().then(function () {
                    n(N, e);
                  });
            }
          }, []);
          return (
            i.useEffect(
              function () {
                var e = R();
                return (
                  e &&
                    !r &&
                    (f.has(e) || (f.set(e, new Set()), l.observe(e)),
                    f.get(e).add(m)),
                  function () {
                    f.has(e) &&
                      (f.get(e).delete(m),
                      f.get(e).size || (l.unobserve(e), f.delete(e)));
                  }
                );
              },
              [c.current, r]
            ),
            i.createElement(
              v,
              { ref: s },
              _ ? i.cloneElement(N, { ref: M }) : N
            )
          );
        }),
        A = i.forwardRef(function (e, t) {
          var n = e.children;
          return ("function" == typeof n ? [n] : (0, c.Z)(n)).map(function (
            n,
            c
          ) {
            var a =
              (null == n ? void 0 : n.key) ||
              "".concat("rc-observer-key", "-").concat(c);
            return i.createElement(
              _,
              (0, r.Z)({}, e, { key: a, ref: 0 === c ? t : void 0 }),
              n
            );
          });
        });
      A.Collection = function (e) {
        var t = e.children,
          n = e.onBatchResize,
          r = i.useRef(0),
          c = i.useRef([]),
          a = i.useContext(S),
          o = i.useCallback(
            function (e, t, i) {
              r.current += 1;
              var o = r.current;
              c.current.push({ size: e, element: t, data: i }),
                Promise.resolve().then(function () {
                  o === r.current &&
                    (null == n || n(c.current), (c.current = []));
                }),
                null == a || a(e, t, i);
            },
            [n, a]
          );
        return i.createElement(S.Provider, { value: o }, t);
      };
      var M = A;
    },
    15105: function (e, t) {
      var n = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function (e) {
          var t = e.keyCode;
          if (
            (e.altKey && !e.ctrlKey) ||
            e.metaKey ||
            (t >= n.F1 && t <= n.F12)
          )
            return !1;
          switch (t) {
            case n.ALT:
            case n.CAPS_LOCK:
            case n.CONTEXT_MENU:
            case n.CTRL:
            case n.DOWN:
            case n.END:
            case n.ESC:
            case n.HOME:
            case n.INSERT:
            case n.LEFT:
            case n.MAC_FF_META:
            case n.META:
            case n.NUMLOCK:
            case n.NUM_CENTER:
            case n.PAGE_DOWN:
            case n.PAGE_UP:
            case n.PAUSE:
            case n.PRINT_SCREEN:
            case n.RIGHT:
            case n.SHIFT:
            case n.UP:
            case n.WIN_KEY:
            case n.WIN_KEY_RIGHT:
              return !1;
            default:
              return !0;
          }
        },
        isCharacterKey: function (e) {
          if (
            (e >= n.ZERO && e <= n.NINE) ||
            (e >= n.NUM_ZERO && e <= n.NUM_MULTIPLY) ||
            (e >= n.A && e <= n.Z) ||
            (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
          )
            return !0;
          switch (e) {
            case n.SPACE:
            case n.QUESTION_MARK:
            case n.NUM_PLUS:
            case n.NUM_MINUS:
            case n.NUM_PERIOD:
            case n.NUM_DIVISION:
            case n.SEMICOLON:
            case n.DASH:
            case n.EQUALS:
            case n.COMMA:
            case n.PERIOD:
            case n.SLASH:
            case n.APOSTROPHE:
            case n.SINGLE_QUOTE:
            case n.OPEN_SQUARE_BRACKET:
            case n.BACKSLASH:
            case n.CLOSE_SQUARE_BRACKET:
              return !0;
            default:
              return !1;
          }
        },
      };
      t.Z = n;
    },
    8410: function (e, t, n) {
      n.d(t, {
        o: function () {
          return c;
        },
      });
      var r = n(67294),
        i = (0, n(98924).Z)() ? r.useLayoutEffect : r.useEffect;
      t.Z = i;
      var c = function (e, t) {
        var n = r.useRef(!0);
        i(function () {
          if (!n.current) return e();
        }, t),
          i(function () {
            return (
              (n.current = !1),
              function () {
                n.current = !0;
              }
            );
          }, []);
      };
    },
    98423: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(1413);
      function i(e, t) {
        var n = (0, r.Z)({}, e);
        return (
          Array.isArray(t) &&
            t.forEach(function (e) {
              delete n[e];
            }),
          n
        );
      }
    },
  },
]);
//# sourceMappingURL=7976.e2ab396d23d6a2e6.js.map
