"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6366],
  {
    16366: function (n, e, t) {
      t.r(e);
      var o = t(41799),
        r = t(69396),
        i = t(828),
        a = t(85893),
        l = t(5239),
        c = t(91612),
        s = t(87270),
        d = t(7400),
        u = t(33207),
        f = t(5152),
        p = t.n(f),
        m = t(67294),
        h = t(25617),
        b = t(57295),
        g = p()(
          function () {
            return Promise.all([
              t.e(1649),
              t.e(1276),
              t.e(6994),
              t.e(6942),
              t.e(7976),
            ]).then(t.bind(t, 17350));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [17350];
              },
            },
          }
        ),
        x = p()(
          function () {
            return Promise.all([
              t.e(1649),
              t.e(1276),
              t.e(4011),
              t.e(6994),
              t.e(6655),
              t.e(6942),
              t.e(8439),
            ]).then(t.bind(t, 28439));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [28439];
              },
            },
          }
        ),
        v = p()(
          function () {
            return Promise.all([t.e(1382), t.e(1583)]).then(t.bind(t, 11583));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [11583];
              },
            },
          }
        ),
        S = p()(
          function () {
            return Promise.all([t.e(1382), t.e(2704)]).then(t.bind(t, 82704));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [82704];
              },
            },
          }
        ),
        w = (0, m.memo)(function () {
          var n = (0, h.I0)(),
            e = (0, i.Z)((0, m.useState)(""), 2),
            t = e[0],
            f = e[1],
            p = (0, s.Z)().onNextScene,
            w = (0, h.v9)(d.U9),
            y = (0, h.v9)(d.nS),
            k = (0, h.v9)(d.Y2),
            C = (0, c.d)(),
            P = C.onCreateCommentScene,
            G = C.onUpdateCommentScene,
            _ = C.onDeleteCommentScene,
            j = C.listCommentSceneGroupByParent,
            Z = C.listCommentSceneGroupByParentActive,
            N = C.listCommentSceneGroupByParentResolved,
            E = (0, i.Z)((0, l.yG)("isShowDialogCreateCommentScene"), 2),
            O = E[0],
            D = E[1],
            I = (0, i.Z)((0, l.yG)("commentSceneTemporary"), 1)[0],
            B = (0, i.Z)((0, l.yG)("krpanoRef"), 1)[0],
            R = (0, i.Z)((0, l.yG)("commentSceneSelected"), 2)[1],
            W = (0, i.Z)((0, l.yG)("loading"), 1)[0];
          (0, m.useEffect)(
            function () {
              B &&
                (j.forEach(function (n) {
                  B.onAddCommentScene(n);
                }),
                B.call("followmouse_disable();"),
                B.set(
                  "cursors.standard",
                  "url(".concat("/static", "/core/comment.svg) 4 12, auto")
                ));
            },
            [null == k ? void 0 : k.id, B]
          ),
            (0, m.useEffect)(
              function () {
                return (
                  n(
                    u.Nw.setListCommentSceneSelected(
                      (null == k ? void 0 : k.commentScenes) || []
                    )
                  ),
                  function () {
                    n(u.Nw.setListCommentSceneSelected([])), R(null);
                  }
                );
              },
              [null == k ? void 0 : k.id]
            );
          var A = (0, m.useCallback)(function () {
              return f("");
            }, []),
            L = (0, m.useCallback)(
              function (n) {
                f("detail"), p(n);
              },
              [p]
            ),
            T = (0, m.useCallback)(
              function () {
                D(!1);
              },
              [D]
            ),
            z = (0, m.useCallback)(
              function (n) {
                B.focusOnCommentScene(n, function () {
                  R(null);
                });
              },
              [B, R]
            ),
            M = (0, m.useCallback)(
              function (n) {
                B.focusOnCommentScene(n, function () {
                  R(n);
                });
              },
              [B, R]
            ),
            U = (0, m.useCallback)(
              function (n) {
                return G(n);
              },
              [G]
            ),
            F = (0, m.useCallback)(
              function (n) {
                return _(n);
              },
              [_]
            ),
            V = (0, m.useCallback)(
              function (n) {
                P((0, r.Z)((0, o.Z)({}, I), { message: n }), B);
              },
              [B, P, I]
            );
          return (0,
          a.jsxs)(b.um, { children: [(0, a.jsx)(S, { loading: W, children: "detail" === t ? (0, a.jsx)(x, { listScene: w, onNextScene: p, titleProject: y, onBack: A, sceneSelected: k, listCommentSceneGroupByParentActive: Z, listCommentSceneGroupByParentResolved: N, onMoveToCommentScene: z, onSelectCommentScene: M, onUpdateCommentScene: U, onDeleteCommentScene: F }) : (0, a.jsx)(g, { listScene: w, titleProject: y, sceneSelected: k, onNextScene: L }) }), (0, a.jsx)("div", { className: "--guide", children: (0, a.jsxs)("div", { className: "--center", children: [(0, a.jsx)("i", { "aria-hidden": !0, className: "fas fa-info-circle" }), (0, a.jsx)("small", { children: "Double click into your scene to create comment" })] }) }), O && (0, a.jsx)(v, { visible: O, onCancel: T, onCreateCommentScene: V })] });
        });
      e.default = w;
    },
    57295: function (n, e, t) {
      t.d(e, {
        FX: function () {
          return m;
        },
        bx: function () {
          return p;
        },
        gn: function () {
          return h;
        },
        um: function () {
          return f;
        },
      });
      var o = t(7297),
        r = t(38505),
        i = t(19521),
        a = t(95898);
      function l() {
        var n = (0, o.Z)([
          "\n  width: 30%;\n  max-width: 360px;\n  height: 100%;\n  background: var(--color-dark);\n  padding: 12px;\n  position: relative;\n  .--guide {\n    padding: 8px 12px;\n    background: var(--color-dark);\n    color: #fff;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    max-width: 100%;\n    border-top: 1px solid rgba(255, 255, 255, 0.2);\n    line-height: initial;\n    .--center {\n      display: flex;\n      width: max-content;\n      i {\n        margin-right: 8px;\n      }\n    }\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        var n = (0, o.Z)([
          "\n  color: #fff;\n  height: 100%;\n  .--header {\n    .--title {\n      font-weight: 600;\n      .ant-typography {\n        color: #fff;\n        font-size: 15px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n    }\n  }\n  .--search {\n    margin: 8px 0;\n  }\n  .--body {\n    height: calc(100% - 100px);\n    overflow: auto;\n    .--list {\n      height: 100%;\n      .--item {\n        display: flex;\n        align-items: center;\n        padding: 10px 0;\n        cursor: pointer;\n        position: relative;\n        background: var(--color-dark-2);\n        color: #fff;\n        margin-bottom: 6px;\n        border-radius: 8px;\n        padding: 8px 4px;\n        transition: all 0.15s ease-out;\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            background: var(--color-dark-3);\n          }\n        }\n        .--left {\n          width: 140px;\n          margin-left: 4px;\n          .--thumb {\n            border-radius: 6px;\n            width: 100%;\n            height: 54px;\n            overflow: hidden;\n            img {\n              object-fit: cover;\n              width: 100%;\n              height: 100%;\n            }\n          }\n          margin-right: 12px;\n        }\n        .--right {\n          width: 100%;\n          .--info {\n            .mainTxt {\n              font-weight: 600;\n              display: -webkit-box;\n              -webkit-line-clamp: 2;\n              -webkit-box-orient: vertical;\n              overflow: hidden;\n            }\n            .subTxt {\n              opacity: 0.5;\n            }\n          }\n        }\n        &.active {\n          background: #fff;\n          color: initial;\n          .--left {\n            .--thumb {\n              box-shadow: 0 0 0 4px var(--color-theme);\n            }\n          }\n        }\n        &:not(:last-child) {\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  .--header {\n    width: 100%;\n    display: flex;\n    .--left {\n      padding-right: 8px;\n      i {\n        cursor: pointer;\n        width: 24px;\n        height: 24px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 50%;\n        background: var(--color-dark-2);\n      }\n    }\n    .--right {\n      width: calc(100% - 40px);\n      .--title {\n        width: 100%;\n        font-weight: 600;\n        .ant-typography {\n          color: #fff;\n          font-size: 15px;\n        }\n      }\n      .--select {\n        width: max-content;\n        max-width: 100%;\n        background: var(--color-dark-2);\n        padding: 0px 4px;\n        border-radius: 6px;\n        .ant-select {\n          width: auto;\n          max-width: 100%;\n          &-single {\n            &.ant-select-show-arrow .ant-select-selection-item {\n              padding-right: 32px;\n            }\n          }\n          &-selector {\n            padding: 0;\n          }\n          color: #fff;\n          &-arrow {\n            color: #fff;\n            margin-left: 4px;\n          }\n        }\n      }\n    }\n  }\n\n  .--body {\n    height: 100%;\n    .ant-tabs {\n      .ant-tabs-ink-bar {\n        background: var(--color-theme);\n      }\n      color: #fff;\n      &-nav {\n        &:before {\n          border-bottom: 1px solid rgba(255, 255, 255, 0.25);\n        }\n        &-wrap,\n        &-list {\n          width: 100%;\n        }\n      }\n      .ant-tabs-tab-active {\n        color: var(--color-theme);\n      }\n      &-tab {\n        width: 100%;\n        + .ant-tabs-tab {\n          margin: 0;\n        }\n        &-btn {\n          width: 100%;\n          text-align: center;\n          color: inherit;\n        }\n      }\n    }\n    .--list {\n      max-height: 100%;\n      overflow: auto;\n      .--item {\n        display: flex;\n        padding: 12px 0;\n        .stt {\n          width: 24px;\n          height: 24px;\n          background: var(--color-dark-2);\n          color: #fff;\n          border-radius: 50%;\n          margin: 8px 8px 0 0;\n          font-size: 12px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex: 0 0 auto;\n        }\n        ",
          " {\n          .info {\n            cursor: pointer;\n            span {\n              margin-left: 8px;\n            }\n          }\n        }\n        .checkbox {\n          margin-left: 12px;\n          .ant-checkbox-inner {\n            background-color: unset;\n          }\n        }\n        &:not(:last-child) {\n          border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, o.Z)([""]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function u() {
        var n = (0, o.Z)([
          "\n  ",
          ";\n  color: inherit;\n  img {\n    width: 48px;\n    height: auto;\n    flex: 0 0 auto;\n    border-radius: 4px;\n    margin-right: 0.5rem;\n  }\n",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      var f = i.ZP.div.withConfig({
          displayName: "styled__CollaborationWrapper",
          componentId: "Panoee__sc-3cb5401e-0",
        })(l()),
        p = i.ZP.div.withConfig({
          displayName: "styled__ListSceneWrapper",
          componentId: "Panoee__sc-3cb5401e-1",
        })(c()),
        m = i.ZP.div.withConfig({
          displayName: "styled__ListCommentWrapper",
          componentId: "Panoee__sc-3cb5401e-2",
        })(s(), a.s2);
      i.ZP.div.withConfig({
        displayName: "styled__DetailCommentWrapper",
        componentId: "Panoee__sc-3cb5401e-3",
      })(d());
      var h = i.ZP.div.withConfig({
        displayName: "styled__SelectOptionWithImageWrapper",
        componentId: "Panoee__sc-3cb5401e-4",
      })(u(), r.i3);
    },
    5239: function (n, e, t) {
      t.d(e, {
        EB: function () {
          return i;
        },
        FN: function () {
          return a;
        },
        Oj: function () {
          return r;
        },
        gU: function () {
          return s;
        },
        tf: function () {
          return c;
        },
        yG: function () {
          return l;
        },
      });
      var o = t(62845),
        r = (0, o.r8)({ vlookat: void 0 }).useGlobalState,
        i = (0, o.r8)({ hlookat: void 0 }).useGlobalState,
        a = (0, o.r8)({ zoom: void 0 }).useGlobalState,
        l = (0, o.r8)({
          loading: !1,
          krpanoRef: void 0,
          commentSceneSelected: null,
          isShowDialogCreateCommentScene: !1,
          commentSceneTemporary: null,
        }).useGlobalState,
        c = (0, o.r8)({
          stats: { isShowControlbar: !0, btnDirectionActive: "" },
        }).useGlobalState,
        s = (0, o.r8)({
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
    62845: function (n, e, t) {
      t.d(e, {
        r8: function () {
          return l;
        },
      });
      var o = t(67294);
      function r() {
        return (r =
          Object.assign ||
          function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
            }
            return n;
          }).apply(this, arguments);
      }
      let i = Symbol(),
        a = (n, e) => {
          let t = Object.keys(e),
            a = e,
            l = null,
            c = {};
          t.forEach((n) => {
            c[n] = new Set();
          });
          let s = (e, t) => (t.type === i ? (t.r ? t.r(e) : t.e) : n(e, t)),
            d = (n, e) => {
              let t = (t) => {
                var o;
                return r({}, t, {
                  [n]: ((o = t[n]), "function" == typeof e ? e(o) : e),
                });
              };
              if (l) l({ type: i, r: t });
              else {
                a = t(a);
                let e = a[n];
                c[n].forEach((n) => n(e));
              }
            },
            u = (n, e) => {
              t.forEach((t) => {
                let o = e[t];
                n[t] !== o && c[t].forEach((n) => n(o));
              });
            };
          return {
            useGlobalStateProvider: () => {
              let [n, e] = (0, o.useReducer)(s, a);
              (0, o.useEffect)(() => {
                if (l) throw Error("Only one global state provider is allowed");
                return (
                  (l = e),
                  e({ type: i, e: a }),
                  () => {
                    l = null;
                  }
                );
              }, []);
              let t = (0, o.useRef)(n);
              u(t.current, n),
                (t.current = n),
                (0, o.useEffect)(() => {
                  a = n;
                }, [n]);
            },
            useGlobalState: (n) => {
              let [e, t] = (0, o.useState)(a[n]);
              return (
                (0, o.useEffect)(
                  () => (
                    c[n].add(t),
                    t(a[n]),
                    () => {
                      c[n].delete(t);
                    }
                  ),
                  [n]
                ),
                [e, (0, o.useCallback)((e) => d(n, e), [n])]
              );
            },
            getGlobalState: (n) => a[n],
            setGlobalState: d,
            getState: () => a,
            setState: (n) => {
              if (l) l({ type: i, e: n });
              else {
                let e = a;
                u(e, (a = n));
              }
            },
            dispatch: (e) => {
              if (l) l(e);
              else {
                let t = a;
                u(t, (a = n(a, e)));
              }
              return e;
            },
          };
        },
        l = (n) => a((n, e) => n, n),
        c = (n, e = n(void 0, { type: void 0 }), t) =>
          t ? t(c)(n, e) : a(n, e);
    },
  },
]);
//# sourceMappingURL=6366.08c83375f3d703fa.js.map
