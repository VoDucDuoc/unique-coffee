"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8580],
  {
    33603: function (n, o, t) {
      t.d(o, {
        mL: function () {
          return i;
        },
        q0: function () {
          return l;
        },
      });
      var r = t(93355),
        e = function () {
          return { height: 0, opacity: 0 };
        },
        a = function (n) {
          return { height: n.scrollHeight, opacity: 1 };
        },
        c = function (n, o) {
          return (
            (null == o ? void 0 : o.deadline) === !0 ||
            "height" === o.propertyName
          );
        };
      (0, r.b)("bottomLeft", "bottomRight", "topLeft", "topRight");
      var l = function (n) {
          return void 0 !== n && ("topLeft" === n || "topRight" === n)
            ? "slide-down"
            : "slide-up";
        },
        i = function (n, o, t) {
          return void 0 !== t ? t : "".concat(n, "-").concat(o);
        };
      o.ZP = {
        motionName: "ant-motion-collapse",
        onAppearStart: e,
        onEnterStart: e,
        onAppearActive: a,
        onEnterActive: a,
        onLeaveStart: function (n) {
          return { height: n ? n.offsetHeight : 0 };
        },
        onLeaveActive: e,
        onAppearEnd: c,
        onEnterEnd: c,
        onLeaveEnd: c,
        motionDeadline: 500,
      };
    },
    93355: function (n, o, t) {
      t.d(o, {
        a: function () {
          return e;
        },
        b: function () {
          return r;
        },
      });
      var r = function () {
          for (var n = arguments.length, o = Array(n), t = 0; t < n; t++)
            o[t] = arguments[t];
          return o;
        },
        e = function () {
          for (var n = arguments.length, o = Array(n), t = 0; t < n; t++)
            o[t] = arguments[t];
          return o;
        };
    },
    90750: function (n, o, t) {
      t.d(o, {
        p: function () {
          return l;
        },
      });
      var r = t(85893),
        e = t(67294),
        a = t(25617),
        c = t(7400),
        l = function () {
          var n = (0, a.v9)(c.Ai),
            o = (0, e.useCallback)(
              function (o) {
                return !o || !n[o].isHide;
              },
              [n]
            ),
            t = (0, e.useCallback)(
              function (o) {
                if (o) {
                  var t,
                    e,
                    a = n[o];
                  if ("icon" === a.type && a.icon)
                    return (0, r.jsx)("i", {
                      "aria-hidden": !0,
                      className: "controlbar-item__icon ".concat(a.icon),
                    });
                  if (
                    "image" === a.type &&
                    (null === (t = a.image) || void 0 === t ? void 0 : t.src)
                  )
                    return (0, r.jsx)("img", {
                      className: "controlbar-item__img",
                      src:
                        null === (e = a.image) || void 0 === e ? void 0 : e.src,
                      alt: "img",
                    });
                }
                return "";
              },
              [n]
            );
          return (0, e.useMemo)(
            function () {
              return {
                onRenderContentControlbarItem: t,
                onCheckIsShowContentControlbarItem: o,
              };
            },
            [t, o]
          );
        };
    },
    43386: function (n, o, t) {
      t.d(o, {
        a: function () {
          return r;
        },
      });
      var r = {
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
    22022: function (n, o, t) {
      t.r(o);
      var r = t(41799),
        e = t(69396),
        a = t(828),
        c = t(85893),
        l = t(79505),
        i = t(7400),
        u = t(77939),
        s = t(67294),
        b = t(25617),
        f = t(5239),
        d = t(43386),
        p = t(90750),
        h = void 0,
        g = (0, s.memo)(function (n) {
          var o = n.krpanoRef,
            t = (0, p.p)(),
            g = t.onCheckIsShowContentControlbarItem,
            S = t.onRenderContentControlbarItem,
            m = (0, b.v9)(i.g5),
            v = (0, b.v9)(i.us),
            C = (0, a.Z)((0, f.tf)("stats"), 2),
            y = C[0],
            T = C[1],
            j = (0, s.useCallback)(
              function () {
                return T(function (n) {
                  return (0,
                  e.Z)((0, r.Z)({}, n), { isShowControlbar: !n.isShowControlbar });
                });
              },
              [T]
            ),
            x = (0, l.Q)({ krpanoRef: o }),
            w = x.onFullscreen,
            M = x.onToggleGyro,
            R = x.isShowIconFloorplan,
            _ = x.onToggleFloorplan,
            k = x.isShowIconMap,
            N = x.onToggleMap,
            P = x.isShowIconSoundProject,
            O = x.onTurnOffSoundProject,
            A = x.onTurnOnSoundProject;
          return (0,
          c.jsxs);
        });
      o.default = g;
    },
    8410: function (n, o, t) {
      t.d(o, {
        o: function () {
          return a;
        },
      });
      var r = t(67294),
        e = (0, t(98924).Z)() ? r.useLayoutEffect : r.useEffect;
      o.Z = e;
      var a = function (n, o) {
        var t = r.useRef(!0);
        e(function () {
          if (!t.current) return n();
        }, o),
          e(function () {
            return (
              (t.current = !1),
              function () {
                t.current = !0;
              }
            );
          }, []);
      };
    },
  },
]);
//# sourceMappingURL=8580.3362db82c3a1974c.js.map
