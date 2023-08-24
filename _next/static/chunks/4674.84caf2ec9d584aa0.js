(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4674],
  {
    14674: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          Controlbar: function () {
            return x;
          },
          default: function () {
            return b;
          },
        });
      var c = t(828),
        r = t(85893),
        i = t(5152),
        o = t.n(i),
        u = t(67294),
        l = t(25617),
        a = t(7400),
        s = t(5855),
        d = t(44526),
        f = t(79612);
      t(21699);
      var v = function (e) {
          var n = e.onSetRef,
            t = e.scenesGroupActive,
            c = e.sceneSelected;
          return (0, r.jsx)(f.Z, {
            elementType: "div",
            className: "carousel",
            flickityRef: function (e) {
              e && n(e);
            },
            options: {
              freeScroll: !0,
              freeScrollFriction: 0.03,
              contain: !0,
              prevNextButtons: !1,
              pageDots: !1,
              lazyLoad: !0,
              cellAlign: "left",
            },
            children: t.map(function (e) {
              var n, t;
              return (0,
              r.jsxs)("div", { className: "".concat((null == c ? void 0 : c.id) === e.id ? "active" : "", " itemScene"), children: [(0, r.jsx)("img", { src: e.screenshot || (null === (n = e.media) || void 0 === n ? void 0 : n.src_thumb) || (null === (t = e.media) || void 0 === t ? void 0 : t.src_preview) || "", alt: "" }), (0, r.jsx)("h2", { className: "--sceneTitle", children: e.title })] }, e.id);
            }),
          });
        },
        h = t(81100),
        S = (0, u.forwardRef)(function (e, n) {
          var t = e.onChangeScene,
            i = e.isShowListScene,
            o = (0, u.useRef)(null),
            f = (0, c.Z)((0, u.useState)(!1), 2),
            S = f[0],
            m = f[1],
            x = (0, l.v9)(a.Fr),
            b = (0, l.v9)(a.Y2),
            p = (0, u.useMemo)(
              function () {
                var e;
                return 1 === x.length && "uncategory" === x[0].id
                  ? "uncategory"
                  : (null ===
                      (e = x.filter(function (e) {
                        return (null == b ? void 0 : b.group) === e.id;
                      })[0]) || void 0 === e
                      ? void 0
                      : e.id) || "";
              },
              [x, b]
            ),
            g = (0, u.useMemo)(
              function () {
                var e;
                return (
                  (null ===
                    (e = x.filter(function (e) {
                      return e.id === p;
                    })[0]) || void 0 === e
                    ? void 0
                    : e.scenes) || []
                );
              },
              [p, x]
            ),
            N = (0, u.useMemo)(
              function () {
                return g.findIndex(function (e) {
                  return e.id === (null == b ? void 0 : b.id);
                });
              },
              [b, g]
            ),
            k = (0, u.useCallback)(
              function (e, n, c, r) {
                c && t(g[r]);
              },
              [t, g]
            );
          return (
            (0, u.useImperativeHandle)(n, function () {
              return {
                onPrevScene: function () {
                  if (0 !== N) {
                    var e = N - 1;
                    t(g[e]), o.current.select(e, !1);
                  }
                },
                onNextScene: function () {
                  if (N + 1 !== g.length) {
                    var e = N + 1;
                    t(g[e]), o.current.select(e, !1);
                  }
                },
              };
            }),
            (0, u.useEffect)(function () {
              m(!0);
            }, []),
            (0, u.useEffect)(
              function () {
                var e;
                return (
                  (null == o ? void 0 : o.current) &&
                    (null === (e = o.current) ||
                      void 0 === e ||
                      e.on("staticClick", k)),
                  function () {
                    var e;
                    (null == o ? void 0 : o.current) &&
                      (null === (e = o.current) ||
                        void 0 === e ||
                        e.off("staticClick", k));
                  }
                );
              },
              [p, k, S]
            ),
            (0, r.jsxs)(s.bx, {
              className: ""
                .concat(i ? "" : "--hide", " ")
                .concat(
                  1 === x.length && "uncategory" === x[0].id ? "hideNav" : ""
                ),
              children: [
                1 === x.length && "uncategory" === x[0].id
                  ? S &&
                    (0, r.jsx)(v, {
                      sceneSelected: b,
                      scenesGroupActive: g,
                      onSetRef: function (e) {
                        if (!o.current && e) {
                          var n;
                          (o.current = e),
                            null === (n = o.current) ||
                              void 0 === n ||
                              n.on("staticClick", k);
                        }
                      },
                    })
                  : (0, r.jsx)(d.Z, {
                      activeKey: p,
                      tabPosition: "top",
                      onTabClick: function (e) {
                        var n = x.filter(function (n) {
                          return n.id === e;
                        })[0];
                        n.scenes && ((o.current = null), t(n.scenes[0]));
                      },
                      className: "--tabs",
                      children: x.map(function (e) {
                        return (0, r.jsx)(
                          d.Z.TabPane,
                          {
                            tab: "".concat(e.name || "N/A"),
                            className: "itemSceneCate ".concat(
                              p === e.id ? "active" : ""
                            ),
                            children:
                              p === e.id &&
                              S &&
                              (0, r.jsx)(
                                v,
                                {
                                  sceneSelected: b,
                                  scenesGroupActive: g,
                                  onSetRef: function (e) {
                                    if (!o.current) {
                                      var n;
                                      (o.current = e),
                                        null === (n = o.current) ||
                                          void 0 === n ||
                                          n.on("staticClick", k);
                                    }
                                  },
                                },
                                p
                              ),
                          },
                          e.id
                        );
                      }),
                    }),
                (0, r.jsx)(h.H, {}),
              ],
            })
          );
        }),
        m = o()(
          function () {
            return Promise.all([t.e(7939), t.e(9505), t.e(8609)]).then(
              t.bind(t, 48609)
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [48609];
              },
            },
          }
        ),
        x = (0, u.memo)(function (e) {
          var n = e.krpanoRef,
            t = e.onChangeScene,
            i = (0, u.useRef)(null),
            o = (0, l.v9)(a.AA),
            d = (0, l.v9)(a.Y2),
            f = (0, l.v9)(a.M9),
            v = (0, c.Z)((0, u.useState)(!1), 2),
            h = v[0],
            x = v[1],
            b = (0, c.Z)((0, u.useState)(!0), 2),
            p = b[0],
            g = b[1],
            N = (0, u.useCallback)(function () {
              return g(function (e) {
                return !e;
              });
            }, []),
            k = (0, u.useCallback)(function () {
              return x(function (e) {
                return !e;
              });
            }, []),
            C = (0, u.useCallback)(function () {
              var e;
              return null === (e = i.current) || void 0 === e
                ? void 0
                : e.onPrevScene();
            }, []),
            j = (0, u.useCallback)(function () {
              var e;
              return null === (e = i.current) || void 0 === e
                ? void 0
                : e.onNextScene();
            }, []);
          return (
            (0, u.useEffect)(
              function () {
                var e;
                (null == o ? void 0 : o.selected) === "basekrpano" &&
                  x(
                    !!(null == o
                      ? void 0
                      : null === (e = o.config) || void 0 === e
                      ? void 0
                      : e.autoOpenSceneList)
                  );
              },
              [o]
            ),
            // (0, r.jsxs)(s.NA, {
            //   className: "--controlbar-".concat(p ? "on" : "off"),
            //   children: [
            //     (0, r.jsxs)("div", {
            //       className: "--title hide-scrollbar",
            //       children: [
            //         (0, r.jsx)("h1", { children: f.title || "N/A" }),
            //         (0, r.jsx)("span", { children: " \xa0\xb7\xa0 " }),
            //         (0, r.jsx)("span", {
            //           children: (null == d ? void 0 : d.title) || "N/A",
            //         }),
            //       ],
            //     }),
            //     (0, r.jsxs)("div", {
            //       className: "--mainPanel",
            //       children: [
            //         (0, r.jsx)(S, {
            //           ref: i,
            //           onChangeScene: t,
            //           isShowListScene: h,
            //         }),
            //         (0, r.jsx)(m, {
            //           krpanoRef: n,
            //           onPrevScene: C,
            //           onNextScene: j,
            //           isShowListScene: h,
            //           isShowControlbar: p,
            //           onToggleListScene: k,
            //           onToggleControlbar: N,
            //         }),
            //       ],
            //     }),
            //   ],
            // })
          );
        }),
        b = x;
    },
    21699: function () {},
  },
]);
//# sourceMappingURL=4674.84caf2ec9d584aa0.js.map
