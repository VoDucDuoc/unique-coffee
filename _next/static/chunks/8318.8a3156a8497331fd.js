"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8318],
  {
    58318: function (n, e, t) {
      t.r(e),
        t.d(e, {
          ThemeBaseKrpano: function () {
            return u;
          },
        });
      var r = t(85893),
        o = t(67294),
        i = t(5152),
        a = t.n(i),
        d = t(5855),
        s = a()(
          function () {
            return Promise.all([
              t.e(9774),
              t.e(1649),
              t.e(1276),
              t.e(1382),
              t.e(4079),
              t.e(9505),
              t.e(6323),
              t.e(5098),
              t.e(518),
            ]).then(t.bind(t, 30518));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [30518];
              },
            },
            ssr: !1,
          }
        ),
        l = a()(
          function () {
            return Promise.all([
              t.e(1649),
              t.e(1276),
              t.e(4011),
              t.e(6655),
              t.e(3742),
              t.e(4674),
            ]).then(t.bind(t, 14674));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [14674];
              },
            },
            ssr: !1,
          }
        ),
        p = a()(
          function () {
            return Promise.all([
              t.e(1649),
              t.e(1276),
              t.e(7939),
              t.e(9505),
              t.e(5881),
            ]).then(t.bind(t, 48037));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [48037];
              },
            },
          }
        ),
        c = a()(
          function () {
            return t.e(9829).then(t.bind(t, 49829));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [49829];
              },
            },
          }
        ),
        m = a()(
          function () {
            return t.e(2017).then(t.bind(t, 62017));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [62017];
              },
            },
          }
        ),
        h = a()(
          function () {
            return t.e(3281).then(t.bind(t, 33281));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [33281];
              },
            },
          }
        ),
        u = (0, o.memo)(function (n) {
          var e = n.onChangeScene,
            t = n.onNextScene;
          return (0,
          r.jsxs)(d.t_, { children: [(0, r.jsx)(h, {}), (0, r.jsxs)(s, { onChangeScene: e, onNextScene: t, children: [(0, r.jsx)(l, { onChangeScene: e }), (0, r.jsx)(p, {})] }), (0, r.jsx)(c, {}), (0, r.jsx)(m, {})] });
        });
      e.default = u;
    },
    5855: function (n, e, t) {
      t.d(e, {
        NA: function () {
          return x;
        },
        OT: function () {
          return w;
        },
        Pg: function () {
          return b;
        },
        Pz: function () {
          return f;
        },
        bx: function () {
          return v;
        },
        ln: function () {
          return g;
        },
        t_: function () {
          return u;
        },
      });
      var r = t(7297),
        o = t(19521),
        i = t(83953),
        a = t(38505);
      function d() {
        var n = (0, r.Z)([
          "\n  width: 100%;\n  height: 100%;\n  color: var(--color-text);\n  ",
          ";\n  position: relative;\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  width: 100%;\n  padding: 12px;\n  pointer-events: none;\n  .--logo {\n    width: 100%;\n    display: flex;\n    cursor: pointer;\n    &.topLeft {\n      justify-content: flex-start;\n    }\n    &.topCenter {\n      justify-content: center;\n    }\n    &.topRight {\n      justify-content: flex-end;\n    }\n    img {\n      width: 100%;\n      height: auto;\n      pointer-events: auto;\n      max-height: max-content;\n    }\n    @media (max-width: 575px) {\n      img {\n        max-width: 45vw;\n      }\n    }\n  }\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  bottom: 8px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: max-content;\n  transform: translateY(0);\n  transition: var(--transition-smooth);\n  transition-duration: 0.5s;\n  width: 100%;\n  max-width: 60%;\n  z-index: 10;\n  @media (max-width: 1025px) {\n    max-width: 72%;\n  }\n  @media (max-width: 769px) {\n    max-width: 90%;\n    bottom: 42px;\n  }\n  @media (max-width: 575px) {\n    max-width: 95%;\n    bottom: 42px;\n    &.--controlbar-off {\n      bottom: 0px;\n    }\n  }\n\n  &.--controlbar {\n    &-off {\n      transform: translateY(100%);\n      bottom: 0px;\n    }\n  }\n\n  .--title {\n    display: flex;\n    align-items: center;\n    white-space: nowrap;\n    overflow: auto;\n    width: 100%;\n    > * {\n      font-size: 16px;\n      color: var(--color-text);\n      font-weight: 700;\n      text-shadow: 0 2px 6px rgb(0 0 0 / 0.5);\n      margin-bottom: 0.5rem;\n      @media (max-width: 575px) {\n        margin-bottom: 0.25rem;\n      }\n    }\n  }\n\n  .--mainPanel {\n    background: var(--color-primary);\n    color: var(--color-text);\n    padding: 0 0.25rem;\n    border-radius: 8px;\n    transition: var(--transition-regular);\n    @media (max-width: 575px) {\n    }\n    .controlBar {\n      display: flex;\n      justify-content: space-between;\n      overflow: auto;\n      > * {\n        display: flex;\n      }\n      .itemControlBtn {\n        width: 2.5rem;\n        height: 2.5rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 1.25rem;\n        margin-right: 0.5rem;\n        border-radius: 25px;\n        cursor: pointer;\n        transition: var(--transition-regular);\n        color: var(--color-text);\n        border: none;\n        background: none;\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            background: rgb(0 0 0 / 0.1);\n            text-shadow: 0 0 20px #fff;\n            i {\n              font-weight: 900;\n            }\n          }\n        }\n        &.active {\n          background: rgb(0 0 0 / 0.25);\n          text-shadow: 0 0 20px #fff;\n          i {\n            font-weight: 900;\n          }\n        }\n\n        &:last-child {\n          margin-right: 0;\n        }\n\n        @media (max-width: 575px) {\n          margin-right: 0;\n          width: 2.25rem;\n          height: 2.25rem;\n        }\n      }\n\n      .itemShowControlbar {\n        position: absolute;\n        bottom: 100%;\n        left: 50%;\n        transform: translateX(-50%);\n        transition: var(--transition-smooth);\n        transition-delay: 0.25s;\n        text-shadow: 0 2px 6px rgb(0 0 0 / 0.25);\n        font-size: 2rem;\n        &.--hide {\n          opacity: 0;\n          bottom: -40px;\n          transition-delay: 0s;\n        }\n        @media (max-width: 575px) {\n          bottom: 110%;\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, r.Z)([""]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: max-content;\n  background: var(--color-primary);\n  color: var(--color-text);\n  padding: 6px 0;\n  border-radius: 8px 0 0 8px;\n  z-index: 10;\n\n  @media (max-width: 640px) {\n    top: 15%;\n    bottom: initial;\n    padding: 0.25rem 0.25rem;\n  }\n\n  .itemSideBtn {\n    width: 2.5rem;\n    height: 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.25rem;\n    border-radius: 25px;\n    margin: 0.5rem 0;\n    transition: var(--transition-regular);\n    cursor: pointer;\n    color: var(--color-text);\n    img {\n      width: 1.5rem;\n    }\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        text-shadow: 0 0 20px #fff;\n        i {\n          font-weight: 900;\n        }\n      }\n    }\n    &:first-child {\n      margin-top: 0;\n    }\n    &:last-child {\n      margin-bottom: 0;\n    }\n    @media (max-width: 575px) {\n      width: 2.25rem;\n      height: 2.25rem;\n    }\n  }\n",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(90deg, #000, rgb(0 0 0 / 0));\n  padding: 0.5rem 2.5rem 0.5rem 0.5rem;\n  color: var(--color-text);\n  z-index: 10;\n  * {\n    color: var(--color-text);\n  }\n  > span {\n    display: block;\n    // text-transform: uppercase;\n    font-size: 90%;\n    // letter-spacing: 1px;\n    opacity: 0.75;\n  }\n  @media (max-width: 575px) {\n    > span {\n      display: inline;\n    }\n  }\n\n  a {\n    font-weight: 700;\n  }\n",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = (0, r.Z)([
          "\n  transition: var(--transition-smooth);\n  height: 120px;\n  overflow: hidden;\n  z-index: 10;\n  padding: 0.5rem 0.25rem;\n  &.hideNav {\n    height: 80px;\n  }\n\n  &.--hide {\n    height: 0;\n    padding: 0 0.25rem;\n  }\n  .--tabs {\n    .ant-tabs {\n      &-nav {\n        margin: 0;\n        &:before {\n          border: none;\n        }\n        &-more {\n          color: #fff;\n        }\n      }\n      &-tab {\n        margin: 0 0 0.5rem;\n        padding: 3px 6px;\n        border-radius: 4px;\n        border: 1px solid rgb(255 255 255 / 0.35);\n        margin-right: 0.5rem;\n        cursor: pointer;\n        transition: var(--transition-regular);\n        color: var(--color-text);\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            border-color: rgb(255 255 255 / 0.5);\n          }\n        }\n        &-active {\n          background: #fff;\n          color: var(--color-primary);\n        }\n      }\n      &-ink-bar {\n        display: none;\n      }\n    }\n    @media (max-width: 575px) {\n      padding: 0 0.25rem;\n      /* flex-wrap: nowrap;\n      overflow: auto; */\n      .ant-tabs-tab {\n        flex: 0 0 auto;\n      }\n    }\n  }\n\n  .itemScene {\n    width: 20%;\n    max-width: 124px;\n    height: 72px;\n    border-radius: 2px;\n    overflow: hidden;\n    position: relative;\n    border: 2px solid rgb(0 0 0 / 0.2);\n    margin: 0 0.25rem;\n    transition: var(--transition-regular);\n    cursor: pointer;\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        border-color: rgb(255 255 255 / 0.75);\n      }\n    }\n\n    &:first-child {\n      margin-left: 0;\n    }\n    &:last-child {\n      margin-right: 0;\n    }\n\n    &.active {\n      border-color: var(--color-text);\n    }\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      background: rgba(0, 0, 0, 1);\n    }\n\n    .--sceneTitle {\n      position: absolute;\n      bottom: 0;\n      padding: 0.25rem 0.75rem 0;\n      display: block;\n      width: 100%;\n      text-align: center;\n      color: var(--color-text);\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      font-size: 0.75rem;\n      text-shadow: 0 2px 3px rgb(0 0 0 / 0.35);\n      font-weight: 600;\n    }\n    @media (max-width: 575px) {\n      width: 40%;\n    }\n  }\n",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      var u = o.ZP.div.withConfig({
          displayName: "styled__ThemeBaseKrpanoWrapper",
          componentId: "Panoee__sc-55d636a-0",
        })(d(), a.b0),
        f = o.ZP.header.withConfig({
          displayName: "styled__HeaderWrapper",
          componentId: "Panoee__sc-55d636a-1",
        })(s()),
        x = o.ZP.div.withConfig({
          displayName: "styled__ControlbarWrapper",
          componentId: "Panoee__sc-55d636a-2",
        })(l()),
        g = (0, o.ZP)(i.ln).withConfig({
          displayName: "styled__ControlbarPopoverWrapper",
          componentId: "Panoee__sc-55d636a-3",
        })(p()),
        b = o.ZP.div.withConfig({
          displayName: "styled__SideToolbarWrapper",
          componentId: "Panoee__sc-55d636a-4",
        })(c()),
        w = o.ZP.div.withConfig({
          displayName: "styled__CopyrightWrapper",
          componentId: "Panoee__sc-55d636a-5",
        })(m()),
        v = o.ZP.div.withConfig({
          displayName: "styled__ListSceneWrapper",
          componentId: "Panoee__sc-55d636a-6",
        })(h());
    },
  },
]);
//# sourceMappingURL=8318.8a3156a8497331fd.js.map
