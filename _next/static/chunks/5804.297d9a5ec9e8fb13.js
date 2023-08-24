"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5804],
  {
    5804: function (e, n, i) {
      i.r(n),
        i.d(n, {
          ListScene: function () {
            return u;
          },
        });
      var s = i(828),
        a = i(85893),
        c = i(7400),
        o = i(27556),
        t = i(67294),
        l = i(25617),
        r = i(83953),
        u = (0, t.memo)(function (e) {
          var n = e.isShowListScene,
            i = e.setIsShowListScene,
            u = e.onChangeScene,
            d = (0, t.useRef)(null),
            f = (0, t.useRef)(null),
            h = (0, l.v9)(c.Fr),
            m = (0, l.v9)(c.ji),
            v = (0, l.v9)(c.Y2),
            p = (0, s.Z)((0, t.useState)([]), 2),
            g = p[0],
            x = p[1],
            j = (0, t.useCallback)(
              function (e) {
                x((0, o.tl)(g, e));
              },
              [g]
            ),
            N = function (e) {
              e.stopPropagation(), i(!0);
            },
            S = function (e) {
              e.stopPropagation(), i(!1);
            };
          return (
            (0, t.useEffect)(
              function () {
                d.current &&
                  f.current &&
                  !n &&
                  d.current.scrollTo({
                    top: f.current.offsetTop - 50,
                    behavior: "smooth",
                  });
              },
              [n, v]
            ),
            (0, a.jsxs)(r.bx, {
              onMouseOver: N,
              onMouseLeave: S,
              className: "leftSidebar ".concat(n ? "active" : ""),
              onTouchStart: S,
              children: [
                (0, a.jsx)("div", {
                  className: "closeBtn ".concat(n ? "show" : "hide"),
                  onClick: S,
                  children: (0, a.jsx)("i", {
                    "aria-hidden": !0,
                    className: "fal fa-times",
                  }),
                }),
                (0, a.jsx),
                (0, a.jsx)("div", {
                  className: "gallery",
                  ref: d,
                  onTouchStart: function (e) {
                    e.stopPropagation();
                  },
                  children: h.map(function (e) {
                    return (0, a.jsxs)(
                      "div",
                      {
                        className: "galleryGroup",
                        children: [
                          "Uncategory" !== e.name &&
                            (0, a.jsxs)("div", {
                              className: "galleryGroupName",
                              onClick: function (n) {
                                n.stopPropagation(), j(e.id);
                              },
                              children: [
                                (0, a.jsx)("h5", { children: e.name }),
                                (0, a.jsx)("i", {
                                  className: "fal fa-angle-".concat(
                                    g.indexOf(e.id) > -1 ? "up" : "down"
                                  ),
                                }),
                              ],
                            }),
                          !!e.scenes.length &&
                            (0, a.jsx)("div", {
                              className: "galleryThumb ".concat(
                                g.indexOf(e.id) > -1 ? "hide" : "show"
                              ),
                              children: e.scenes.map(function (e) {
                                var n, i, s;
                                return (0, a.jsxs)(
                                  "div",
                                  {
                                    className: "galleryImg ".concat(
                                      (null == v ? void 0 : v.id) === e.id
                                        ? "active"
                                        : ""
                                    ),
                                    ref: function (n) {
                                      (null == v ? void 0 : v.id) === e.id &&
                                        (f.current = n);
                                    },
                                    onClick: function (n) {
                                      n.stopPropagation(), u(e);
                                    },
                                    children: [
                                      (0, a.jsx)("img", {
                                        src:
                                          e.screenshot ||
                                          (null === (n = e.media) ||
                                          void 0 === n
                                            ? void 0
                                            : n.src_thumb) ||
                                          (null === (i = e.media) ||
                                          void 0 === i
                                            ? void 0
                                            : i.src_preview) ||
                                          (null === (s = e.media) ||
                                          void 0 === s
                                            ? void 0
                                            : s.src) ||
                                          "",
                                        alt: "",
                                      }),
                                      (0, a.jsx)("h2", {
                                        className: "--menuSceneTitle",
                                        children: e.title,
                                      }),
                                    ],
                                  },
                                  e.id
                                );
                              }),
                            }),
                        ],
                      },
                      e.id
                    );
                  }),
                }),
              ],
            })
          );
        });
      n.default = u;
    },
  },
]);
//# sourceMappingURL=5804.297d9a5ec9e8fb13.js.map
