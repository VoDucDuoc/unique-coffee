"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2626],
  {
    5239: function (e, t, n) {
      n.d(t, {
        EB: function () {
          return l;
        },
        FN: function () {
          return r;
        },
        Oj: function () {
          return i;
        },
        gU: function () {
          return u;
        },
        tf: function () {
          return a;
        },
        yG: function () {
          return s;
        },
      });
      var o = n(62845),
        i = (0, o.r8)({ vlookat: void 0 }).useGlobalState,
        l = (0, o.r8)({ hlookat: void 0 }).useGlobalState,
        r = (0, o.r8)({ zoom: void 0 }).useGlobalState,
        s = (0, o.r8)({
          loading: !1,
          krpanoRef: void 0,
          commentSceneSelected: null,
          isShowDialogCreateCommentScene: !1,
          commentSceneTemporary: null,
        }).useGlobalState,
        a = (0, o.r8)({
          stats: { isShowControlbar: !0, btnDirectionActive: "" },
        }).useGlobalState,
        u = (0, o.r8)({
          state: {
            isLoaded: !1,
            idPostProjectSelected: "",
            visibleDialogPostProject: !1,
            idPostSceneSelected: "",
            visibleDialogPostScene: !1,
            isSoundOnScene: !1,
            isVisibleMap: !0,
            isVisibleFloorplan: !0,
            isVisiblePopupIntro: void 0,
            isActiveModeMultipleStaging: !1,
          },
        }).useGlobalState;
    },
    59031: function (e, t, n) {
      n.d(t, {
        $: function () {
          return c;
        },
      });
      var o = n(47568),
        i = n(828),
        l = n(70655),
        r = n(35077),
        s = n(25617),
        a = n(67294),
        u = n(7400),
        c = function (e) {
          var t = e.idPost,
            n = (0, s.v9)(u.Yd),
            c = (0, i.Z)((0, a.useState)(!1), 2),
            d = c[0],
            f = c[1],
            v = (0, i.Z)((0, a.useState)(void 0), 2),
            p = v[0],
            b = v[1],
            h = (0, a.useCallback)(
              (0, o.Z)(function () {
                var e;
                return (0, l.__generator)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      f(!0), (o.label = 1);
                    case 1:
                      if (
                        (o.trys.push([1, 4, 5, 6]),
                        (e = n.find(function (e) {
                          return e.id === t;
                        })))
                      )
                        return [3, 3];
                      return [4, (0, r.r)(t)];
                    case 2:
                      (e = o.sent().data.data), (o.label = 3);
                    case 3:
                      return b(e), [3, 6];
                    case 4:
                      return o.sent(), b(void 0), [3, 6];
                    case 5:
                      return f(!1), [7];
                    case 6:
                      return [2];
                  }
                });
              }),
              [t, n]
            );
          return (
            (0, a.useEffect)(
              function () {
                return (
                  t ? h() : b(void 0),
                  function () {
                    f(!1), b(void 0);
                  }
                );
              },
              [t]
            ),
            (0, a.useMemo)(
              function () {
                return { loading: d, detailPost: p, onGetDetailPost: h };
              },
              [p, d, h]
            )
          );
        };
    },
    72626: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Header: function () {
            return S;
          },
        });
      var o = n(828),
        i = n(85893),
        l = n(5239),
        r = n(59031),
        s = n(79505),
        a = n(7400),
        u = n(5152),
        c = n.n(u),
        d = n(67294),
        f = n(25617),
        v = n(83953),
        p = void 0,
        b = c()(
          function () {
            return n.e(1933).then(n.bind(n, 61933));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [61933];
              },
            },
          }
        ),
        h = c()(
          function () {
            return Promise.all([n.e(1382), n.e(2704)]).then(n.bind(n, 82704));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [82704];
              },
            },
          }
        ),
        S = (0, d.memo)(function (e) {
          var t = e.isShowListScene,
            n = (0, f.v9)(a.M9),
            u = (0, f.v9)(a.Y2),
            c = (0, o.Z)((0, l.gU)("state"), 1)[0],
            S = (0, s.Q)({}),
            g = S.onToggleInfoScene,
            m = S.onCloseDialogPostScene,
            j = (0, r.$)({ idPost: c.idPostSceneSelected }),
            P = j.loading,
            y = j.detailPost;
          return (
            (0, d.useEffect)(
              function () {
                return (
                  (null == u ? void 0 : u.post) ? g(!0) : g(!1),
                  function () {
                    g(!1);
                  }
                );
              },
              [u]
            ),
            (0, i.jsxs)(v.Pz, {
              className: "topInfo ".concat(t ? "showSidebar" : ""),
              children: [
                (0, i.jsx)(b, {}),
                (0, i.jsxs),
              ],
            })
          );
        });
      t.default = S;
    },
    35077: function (e, t, n) {
      n.d(t, {
        r: function () {
          return i;
        },
      });
      var o = n(33618),
        i = function (e) {
          return o.R.$get("/post/getPublish", { id: e });
        };
    },
    62845: function (e, t, n) {
      n.d(t, {
        r8: function () {
          return s;
        },
      });
      var o = n(67294);
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      let l = Symbol(),
        r = (e, t) => {
          let n = Object.keys(t),
            r = t,
            s = null,
            a = {};
          n.forEach((e) => {
            a[e] = new Set();
          });
          let u = (t, n) => (n.type === l ? (n.r ? n.r(t) : n.e) : e(t, n)),
            c = (e, t) => {
              let n = (n) => {
                var o;
                return i({}, n, {
                  [e]: ((o = n[e]), "function" == typeof t ? t(o) : t),
                });
              };
              if (s) s({ type: l, r: n });
              else {
                r = n(r);
                let t = r[e];
                a[e].forEach((e) => e(t));
              }
            },
            d = (e, t) => {
              n.forEach((n) => {
                let o = t[n];
                e[n] !== o && a[n].forEach((e) => e(o));
              });
            };
          return {
            useGlobalStateProvider: () => {
              let [e, t] = (0, o.useReducer)(u, r);
              (0, o.useEffect)(() => {
                if (s) throw Error("Only one global state provider is allowed");
                return (
                  (s = t),
                  t({ type: l, e: r }),
                  () => {
                    s = null;
                  }
                );
              }, []);
              let n = (0, o.useRef)(e);
              d(n.current, e),
                (n.current = e),
                (0, o.useEffect)(() => {
                  r = e;
                }, [e]);
            },
            useGlobalState: (e) => {
              let [t, n] = (0, o.useState)(r[e]);
              return (
                (0, o.useEffect)(
                  () => (
                    a[e].add(n),
                    n(r[e]),
                    () => {
                      a[e].delete(n);
                    }
                  ),
                  [e]
                ),
                [t, (0, o.useCallback)((t) => c(e, t), [e])]
              );
            },
            getGlobalState: (e) => r[e],
            setGlobalState: c,
            getState: () => r,
            setState: (e) => {
              if (s) s({ type: l, e: e });
              else {
                let t = r;
                d(t, (r = e));
              }
            },
            dispatch: (t) => {
              if (s) s(t);
              else {
                let n = r;
                d(n, (r = e(r, t)));
              }
              return t;
            },
          };
        },
        s = (e) => r((e, t) => e, e),
        a = (e, t = e(void 0, { type: void 0 }), n) =>
          n ? n(a)(e, t) : r(e, t);
    },
  },
]);
//# sourceMappingURL=2626.cb4bb04e2d509780.js.map
