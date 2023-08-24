"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5587],
  {
    33603: function (e, t, n) {
      n.d(t, {
        mL: function () {
          return i;
        },
        q0: function () {
          return c;
        },
      });
      var o = n(93355),
        r = function () {
          return { height: 0, opacity: 0 };
        },
        l = function (e) {
          return { height: e.scrollHeight, opacity: 1 };
        },
        a = function (e, t) {
          return (
            (null == t ? void 0 : t.deadline) === !0 ||
            "height" === t.propertyName
          );
        };
      (0, o.b)("bottomLeft", "bottomRight", "topLeft", "topRight");
      var c = function (e) {
          return void 0 !== e && ("topLeft" === e || "topRight" === e)
            ? "slide-down"
            : "slide-up";
        },
        i = function (e, t, n) {
          return void 0 !== n ? n : "".concat(e, "-").concat(t);
        };
      t.ZP = {
        motionName: "ant-motion-collapse",
        onAppearStart: r,
        onEnterStart: r,
        onAppearActive: l,
        onEnterActive: l,
        onLeaveStart: function (e) {
          return { height: e ? e.offsetHeight : 0 };
        },
        onLeaveActive: r,
        onAppearEnd: a,
        onEnterEnd: a,
        onLeaveEnd: a,
        motionDeadline: 500,
      };
    },
    93355: function (e, t, n) {
      n.d(t, {
        a: function () {
          return r;
        },
        b: function () {
          return o;
        },
      });
      var o = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t;
        },
        r = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t;
        };
    },
    10808: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var o = n(87462),
        r = n(67294),
        l = n(53124),
        a = n(77939),
        c = function (e) {
          return e ? ("function" == typeof e ? e() : e) : null;
        },
        i = n(33603),
        u = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              0 > t.indexOf(o) &&
              (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, o = Object.getOwnPropertySymbols(e);
              r < o.length;
              r++
            )
              0 > t.indexOf(o[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          return n;
        },
        s = function (e) {
          var t = e.title,
            n = e.content,
            o = e.prefixCls;
          return t || n
            ? r.createElement(
                r.Fragment,
                null,
                t &&
                  r.createElement(
                    "div",
                    { className: "".concat(o, "-title") },
                    c(t)
                  ),
                r.createElement(
                  "div",
                  { className: "".concat(o, "-inner-content") },
                  c(n)
                )
              )
            : null;
        },
        d = r.forwardRef(function (e, t) {
          var n = e.prefixCls,
            c = e.title,
            d = e.content,
            f = e._overlay,
            p = e.placement,
            b = e.trigger,
            h = e.mouseEnterDelay,
            m = e.mouseLeaveDelay,
            g = e.overlayStyle,
            S = u(e, [
              "prefixCls",
              "title",
              "content",
              "_overlay",
              "placement",
              "trigger",
              "mouseEnterDelay",
              "mouseLeaveDelay",
              "overlayStyle",
            ]),
            v = r.useContext(l.E_).getPrefixCls,
            _ = v("popover", n),
            y = v();
          return r.createElement(
            a.Z,
            (0, o.Z)(
              {
                placement: void 0 === p ? "top" : p,
                trigger: void 0 === b ? "hover" : b,
                mouseEnterDelay: void 0 === h ? 0.1 : h,
                mouseLeaveDelay: void 0 === m ? 0.1 : m,
                overlayStyle: void 0 === g ? {} : g,
              },
              S,
              {
                prefixCls: _,
                ref: t,
                overlay:
                  f ||
                  r.createElement(s, { prefixCls: _, title: c, content: d }),
                transitionName: (0, i.mL)(y, "zoom-big", S.transitionName),
              }
            )
          );
        });
    },
    5239: function (e, t, n) {
      n.d(t, {
        EB: function () {
          return l;
        },
        FN: function () {
          return a;
        },
        Oj: function () {
          return r;
        },
        gU: function () {
          return u;
        },
        tf: function () {
          return i;
        },
        yG: function () {
          return c;
        },
      });
      var o = n(62845),
        r = (0, o.r8)({ vlookat: void 0 }).useGlobalState,
        l = (0, o.r8)({ hlookat: void 0 }).useGlobalState,
        a = (0, o.r8)({ zoom: void 0 }).useGlobalState,
        c = (0, o.r8)({
          loading: !1,
          krpanoRef: void 0,
          commentSceneSelected: null,
          isShowDialogCreateCommentScene: !1,
          commentSceneTemporary: null,
        }).useGlobalState,
        i = (0, o.r8)({
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
    90750: function (e, t, n) {
      n.d(t, {
        p: function () {
          return c;
        },
      });
      var o = n(85893),
        r = n(67294),
        l = n(25617),
        a = n(7400),
        c = function () {
          var e = (0, l.v9)(a.Ai),
            t = (0, r.useCallback)(
              function (t) {
                return !t || !e[t].isHide;
              },
              [e]
            ),
            n = (0, r.useCallback)(
              function (t) {
                if (t) {
                  var n,
                    r,
                    l = e[t];
                  if ("icon" === l.type && l.icon)
                    return (0, o.jsx)("i", {
                      "aria-hidden": !0,
                      className: "controlbar-item__icon ".concat(l.icon),
                    });
                  if (
                    "image" === l.type &&
                    (null === (n = l.image) || void 0 === n ? void 0 : n.src)
                  )
                    return (0, o.jsx)("img", {
                      className: "controlbar-item__img",
                      src:
                        null === (r = l.image) || void 0 === r ? void 0 : r.src,
                      alt: "img",
                    });
                }
                return "";
              },
              [e]
            );
          return (0, r.useMemo)(
            function () {
              return {
                onRenderContentControlbarItem: n,
                onCheckIsShowContentControlbarItem: t,
              };
            },
            [n, t]
          );
        };
    },
    43386: function (e, t, n) {
      n.d(t, {
        a: function () {
          return o;
        },
      });
      var o = {
        en: {
          dialogConfirmSoundTitle: "Auto play sound on this website?",
          btnOK: "OK",
          btnCancel: "Cancel",
          controlbarFirstScene: "Go to first scene",
          controlbarInfoTour: "Info Tour",
          controlbarInfoScene: "Info Scene",
          controlbarMap: "Google Map",
          controlbarFloorplan: "Floorplan",
          controlbarTurnOnSoundProject: "Unmute sound",
          controlbarTurnOffSoundProject: "Mute sound",
          controlbarSoundScene: "Sound scene",
          controlbarStopRotate: "Stop Rotate",
          controlbarStartRotate: "Rotate",
          controlbarStartAutoPlayScene: "Auto play scene",
          controlbarStopAutoPlayScene: "Stop auto play scene",
          controlbarVRMode: "VR Mode",
          controlbarFullscreen: "Toggle Fullscreen",
          controlbarViewNormal: "View Normal",
          controlbarViewPlanet: "View Little Planet",
          controlbarViewMirrorBall: "View Mirror Ball",
          controlbarSettingColor: "Change color",
          controlbarTurnOffModeMultipleStaging: "Disable Staging",
          controlbarTurnOnModeMultipleStaging: "Enable Staging",
        },
        vi: {
          dialogConfirmSoundTitle: "Tự động ph\xe1t nhạc?",
          btnOK: "OK",
          btnCancel: "Huỷ bỏ",
          controlbarFirstScene: "Cảnh đầu ti\xean",
          controlbarInfoTour: "Th\xf4ng tin tour",
          controlbarInfoScene: "Th\xf4ng tin cảnh",
          controlbarFloorplan: "Floorplan",
          controlbarMap: "Google Map",
          controlbarTurnOnSoundProject: "Bật \xe2m lượng",
          controlbarTurnOffSoundProject: "Tắt \xe2m lượng",
          controlbarSoundScene: "\xc2m thanh cảnh",
          controlbarStopRotate: "Dừng xoay",
          controlbarStartRotate: "Xoay",
          controlbarStartAutoPlayScene: "Tự động chuyển cảnh",
          controlbarStopAutoPlayScene: "Dừng tự động chuyển cảnh",
          controlbarVRMode: "Chế độ VR",
          controlbarFullscreen: "Chuyển đổi chế độ to\xe0n m\xe0n h\xecnh",
          controlbarViewNormal: "Chế độ mặc định",
          controlbarViewPlanet: "Chế độ to\xe0n cầu",
          controlbarViewMirrorBall: "Chế độ gương",
          controlbarSettingColor: "Thay đổi m\xe0u",
          controlbarTurnOffModeMultipleStaging: "Tắt chế độ Staging",
          controlbarTurnOnModeMultipleStaging: "Bật chế độ Staging",
        },
      };
    },
    71978: function (e, t, n) {
      n.r(t);
      var o = n(828),
        r = n(85893),
        l = n(5239),
        a = n(90750),
        c = n(79505),
        i = n(43386),
        u = n(7400),
        s = n(77939),
        d = n(10808),
        f = n(67294),
        p = n(25617),
        b = n(83953),
        h = void 0,
        m = (0, f.memo)(function (e) {
          var t = e.krpanoRef,
            n = (0, o.Z)((0, l.gU)("state"), 1)[0],
            f = n.isSoundOnScene,
            m = n.isActiveModeMultipleStaging,
            g = (0, a.p)(),
            S = g.onRenderContentControlbarItem,
            v = g.onCheckIsShowContentControlbarItem,
            _ = (0, p.v9)(u.g5),
            y = (0, p.v9)(u.us),
            x = (0, c.Q)({ krpanoRef: t }),
            j = x.onVR,
            C = x.onToggleGyro,
            w = x.onFullscreen,
            M = x.onToFirstScene,
            P = x.onViewNormal,
            T = x.onViewMirrorBall,
            O = x.onViewPlannet,
            N = x.isChangeScene,
            k = x.isShowIconChangeScene,
            E = x.onChangeAutoChangeScene,
            R = x.isRotate,
            I = x.isShowIconRotate,
            A = x.onToggleRotate,
            V = x.isShowIconInfoPlace,
            F = x.onShowInfoPlace,
            G = x.isShowIconSoundScene,
            Z = x.onToggleSoundScene,
            L = x.isShowIconSoundProject,
            D = x.onTurnOffSoundProject,
            B = x.onTurnOnSoundProject,
            z = x.isShowIconFloorplan,
            H = x.onToggleFloorplan,
            K = x.isShowIconMap,
            U = x.onToggleMap,
            q = x.isShowIconMultipleStaging,
            Q = x.onToggleModeMultipleStaging;
          return (0, r.jsxs);
        });
      t.default = m;
    },
    8410: function (e, t, n) {
      n.d(t, {
        o: function () {
          return l;
        },
      });
      var o = n(67294),
        r = (0, n(98924).Z)() ? o.useLayoutEffect : o.useEffect;
      t.Z = r;
      var l = function (e, t) {
        var n = o.useRef(!0);
        r(function () {
          if (!n.current) return e();
        }, t),
          r(function () {
            return (
              (n.current = !1),
              function () {
                n.current = !0;
              }
            );
          }, []);
      };
    },
    62845: function (e, t, n) {
      n.d(t, {
        r8: function () {
          return c;
        },
      });
      var o = n(67294);
      function r() {
        return (r =
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
        a = (e, t) => {
          let n = Object.keys(t),
            a = t,
            c = null,
            i = {};
          n.forEach((e) => {
            i[e] = new Set();
          });
          let u = (t, n) => (n.type === l ? (n.r ? n.r(t) : n.e) : e(t, n)),
            s = (e, t) => {
              let n = (n) => {
                var o;
                return r({}, n, {
                  [e]: ((o = n[e]), "function" == typeof t ? t(o) : t),
                });
              };
              if (c) c({ type: l, r: n });
              else {
                a = n(a);
                let t = a[e];
                i[e].forEach((e) => e(t));
              }
            },
            d = (e, t) => {
              n.forEach((n) => {
                let o = t[n];
                e[n] !== o && i[n].forEach((e) => e(o));
              });
            };
          return {
            useGlobalStateProvider: () => {
              let [e, t] = (0, o.useReducer)(u, a);
              (0, o.useEffect)(() => {
                if (c) throw Error("Only one global state provider is allowed");
                return (
                  (c = t),
                  t({ type: l, e: a }),
                  () => {
                    c = null;
                  }
                );
              }, []);
              let n = (0, o.useRef)(e);
              d(n.current, e),
                (n.current = e),
                (0, o.useEffect)(() => {
                  a = e;
                }, [e]);
            },
            useGlobalState: (e) => {
              let [t, n] = (0, o.useState)(a[e]);
              return (
                (0, o.useEffect)(
                  () => (
                    i[e].add(n),
                    n(a[e]),
                    () => {
                      i[e].delete(n);
                    }
                  ),
                  [e]
                ),
                [t, (0, o.useCallback)((t) => s(e, t), [e])]
              );
            },
            getGlobalState: (e) => a[e],
            setGlobalState: s,
            getState: () => a,
            setState: (e) => {
              if (c) c({ type: l, e: e });
              else {
                let t = a;
                d(t, (a = e));
              }
            },
            dispatch: (t) => {
              if (c) c(t);
              else {
                let n = a;
                d(n, (a = e(a, t)));
              }
              return t;
            },
          };
        },
        c = (e) => a((e, t) => e, e),
        i = (e, t = e(void 0, { type: void 0 }), n) =>
          n ? n(i)(e, t) : a(e, t);
    },
  },
]);
//# sourceMappingURL=5587.1e004b2002165755.js.map
