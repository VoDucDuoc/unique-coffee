(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4412, 9636],
  {
    76489: function (n, o) {
      "use strict";
      function i(n) {
        return -1 !== n.indexOf("%") ? decodeURIComponent(n) : n;
      }
      /*!
       * cookie
       * Copyright(c) 2012-2014 Roman Shtylman
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */ (o.Q = function (n, o) {
        if ("string" != typeof n)
          throw TypeError("argument str must be a string");
        for (var t = {}, r = (o || {}).decode || i, e = 0; e < n.length; ) {
          var u = n.indexOf("=", e);
          if (-1 === u) break;
          var c = n.indexOf(";", e);
          if (-1 === c) c = n.length;
          else if (c < u) {
            e = n.lastIndexOf(";", u - 1) + 1;
            continue;
          }
          var l = n.slice(e, u).trim();
          if (void 0 === t[l]) {
            var d = n.slice(u + 1, c).trim();
            34 === d.charCodeAt(0) && (d = d.slice(1, -1)),
              (t[l] = (function (n, o) {
                try {
                  return o(n);
                } catch (o) {
                  return n;
                }
              })(d, r));
          }
          e = c + 1;
        }
        return t;
      }),
        Object.prototype.toString;
    },
    27078: function (n, o, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/collaboration",
        function () {
          return i(45962);
        },
      ]);
    },
    7400: function (n, o, i) {
      "use strict";
      i.d(o, {
        AA: function () {
          return C;
        },
        Ai: function () {
          return B;
        },
        Aq: function () {
          return nd;
        },
        B3: function () {
          return z;
        },
        B9: function () {
          return g;
        },
        CE: function () {
          return D;
        },
        CO: function () {
          return F;
        },
        Cx: function () {
          return h;
        },
        EC: function () {
          return O;
        },
        F7: function () {
          return J;
        },
        FT: function () {
          return P;
        },
        Fr: function () {
          return M;
        },
        IX: function () {
          return no;
        },
        Iy: function () {
          return ng;
        },
        J6: function () {
          return b;
        },
        JB: function () {
          return R;
        },
        M5: function () {
          return $;
        },
        M9: function () {
          return f;
        },
        N5: function () {
          return ne;
        },
        Nf: function () {
          return L;
        },
        Pl: function () {
          return K;
        },
        QR: function () {
          return T;
        },
        R8: function () {
          return ni;
        },
        S5: function () {
          return k;
        },
        U9: function () {
          return Z;
        },
        WA: function () {
          return S;
        },
        Y2: function () {
          return U;
        },
        Yc: function () {
          return nn;
        },
        Yd: function () {
          return I;
        },
        ZN: function () {
          return a;
        },
        _8: function () {
          return m;
        },
        aS: function () {
          return q;
        },
        bn: function () {
          return na;
        },
        cC: function () {
          return nc;
        },
        ci: function () {
          return nr;
        },
        d5: function () {
          return nl;
        },
        dm: function () {
          return E;
        },
        ej: function () {
          return ns;
        },
        eu: function () {
          return nv;
        },
        f5: function () {
          return W;
        },
        g5: function () {
          return y;
        },
        hd: function () {
          return x;
        },
        iD: function () {
          return A;
        },
        iV: function () {
          return j;
        },
        j1: function () {
          return H;
        },
        ji: function () {
          return G;
        },
        kN: function () {
          return nt;
        },
        kh: function () {
          return _;
        },
        nS: function () {
          return v;
        },
        oo: function () {
          return nu;
        },
        p8: function () {
          return p;
        },
        pG: function () {
          return nf;
        },
        pJ: function () {
          return V;
        },
        qC: function () {
          return w;
        },
        rK: function () {
          return d;
        },
        tI: function () {
          return s;
        },
        u$: function () {
          return Y;
        },
        us: function () {
          return N;
        },
      });
      var t = i(41799),
        r = i(68697),
        e = i(29750),
        u = i(33207),
        c = i(72853),
        l = function (n) {
          return n.app || u.E3;
        };
      (0, r.P1)([l], function (n) {
        return n;
      }),
        (0, r.P1)([l], function (n) {
          return n.loading;
        }),
        (0, r.P1)([l], function (n) {
          return n.error;
        }),
        (0, r.P1)([l], function (n) {
          return n.success;
        });
      var d = (0, r.P1)([l], function (n) {
          return n.token;
        }),
        f = (0, r.P1)([l], function (n) {
          return n.project;
        }),
        v = (0, r.P1)([f], function (n) {
          return (null == n ? void 0 : n.title) || void 0;
        }),
        a = (0, r.P1)([f], function (n) {
          var o;
          return (
            (null == n
              ? void 0
              : null === (o = n.first_scene) || void 0 === o
              ? void 0
              : o.media) || void 0
          );
        }),
        s = (0, r.P1)([f], function (n) {
          return (null == n ? void 0 : n.thumbnail) || void 0;
        }),
        g = (0, r.P1)([f], function (n) {
          return (null == n ? void 0 : n.featured_image) || void 0;
        }),
        P = (0, r.P1)([f], function (n) {
          var o, i;
          return (
            (null == n
              ? void 0
              : null === (o = n.config) || void 0 === o
              ? void 0
              : null === (i = o.design) || void 0 === i
              ? void 0
              : i.hotspotConfig) || void 0
          );
        }),
        p = (0, r.P1)([f], function (n) {
          var o, i;
          return (
            (null == n
              ? void 0
              : null === (o = n.config) || void 0 === o
              ? void 0
              : null === (i = o.design) || void 0 === i
              ? void 0
              : i.polygonConfig) || void 0
          );
        }),
        C = (0, r.P1)([f], function (n) {
          var o, i;
          return (
            (null == n
              ? void 0
              : null === (o = n.config) || void 0 === o
              ? void 0
              : null === (i = o.design) || void 0 === i
              ? void 0
              : i.themeConfig) || void 0
          );
        }),
        m = (0, r.P1)([f], function (n) {
          var o, i;
          return (
            (null == n
              ? void 0
              : null === (o = n.config) || void 0 === o
              ? void 0
              : null === (i = o.design) || void 0 === i
              ? void 0
              : i.popupConfig) || void 0
          );
        }),
        _ = (0, r.P1)([f], function (n) {
          var o, i;
          return (0,
          t.Z)({}, e.TR, null == n ? void 0 : null === (o = n.config) || void 0 === o ? void 0 : null === (i = o.design) || void 0 === i ? void 0 : i.formCaptureConfig);
        }),
        h = (0, r.P1)([f], function (n) {
          var o, i;
          return (0,
          t.Z)({}, e.AN, null == n ? void 0 : null === (o = n.config) || void 0 === o ? void 0 : null === (i = o.design) || void 0 === i ? void 0 : i.callToActionConfig);
        }),
        T = (0, r.P1)([f], function (n) {
          var o, i;
          return (
            (null == n
              ? void 0
              : null === (o = n.config) || void 0 === o
              ? void 0
              : null === (i = o.marketing) || void 0 === i
              ? void 0
              : i.meta_data) || void 0
          );
        }),
        b = (0, r.P1)([f], function (n) {
          var o, i, t;
          return (
            (null == n
              ? void 0
              : null === (o = n.config) || void 0 === o
              ? void 0
              : null === (i = o.marketing) || void 0 === i
              ? void 0
              : null === (t = i.analytic) || void 0 === t
              ? void 0
              : t.uid) || void 0
          );
        }),
        O = (0, r.P1)([f], function (n) {
          var o, i, t;
          return (
            (null == n
              ? void 0
              : null === (o = n.config) || void 0 === o
              ? void 0
              : null === (i = o.marketing) || void 0 === i
              ? void 0
              : null === (t = i.analytic) || void 0 === t
              ? void 0
              : t.ggTag) || "G-WWEDNMW7YE"
          );
        }),
        k = (0, r.P1)([f], function (n) {
          var o, i;
          return (
            (null == n
              ? void 0
              : null === (o = n.config) || void 0 === o
              ? void 0
              : null === (i = o.marketing) || void 0 === i
              ? void 0
              : i.script_chats) || void 0
          );
        }),
        S = (0, r.P1)([f], function (n) {
          var o, i;
          return (
            (null == n
              ? void 0
              : null === (o = n.config) || void 0 === o
              ? void 0
              : null === (i = o.setting) || void 0 === i
              ? void 0
              : i.intro_little_planet) || void 0
          );
        }),
        A = (0, r.P1)([f], function (n) {
          var o, i;
          return (
            (null == n
              ? void 0
              : null === (o = n.config) || void 0 === o
              ? void 0
              : null === (i = o.setting) || void 0 === i
              ? void 0
              : i.control_mode) || { mode: "drag" }
          );
        }),
        R = (0, r.P1)([f], function (n) {
          var o, i;
          return (
            (null == n
              ? void 0
              : null === (o = n.config) || void 0 === o
              ? void 0
              : null === (i = o.setting) || void 0 === i
              ? void 0
              : i.follow_mode) || { enable: !0 }
          );
        }),
        w = (0, r.P1)([f], function (n) {
          var o, i, t;
          return (
            (null == n
              ? void 0
              : null === (o = n.config) || void 0 === o
              ? void 0
              : null === (i = o.setting) || void 0 === i
              ? void 0
              : null === (t = i.general) || void 0 === t
              ? void 0
              : t.first_scene) || void 0
          );
        }),
        y = (0, r.P1)([f], function (n) {
          var o, i, t;
          return (
            (null == n
              ? void 0
              : null === (o = n.config) || void 0 === o
              ? void 0
              : null === (i = o.setting) || void 0 === i
              ? void 0
              : null === (t = i.general) || void 0 === t
              ? void 0
              : t.language) || "en"
          );
        }),
        E = (0, r.P1)([l], function (n) {
          return n.configAutoRotate || void 0;
        }),
        j = (0, r.P1)([l], function (n) {
          return n.configAutoChangeScene || void 0;
        }),
        N = (0, r.P1)([l], function (n) {
          return n.configSoundProject || void 0;
        }),
        F = (0, r.P1)([l], function (n) {
          return n.isFirstScene;
        }),
        Z = (0, r.P1)([l], function (n) {
          return n.listScene || [];
        }),
        M = (0, r.P1)([l], function (n) {
          return 1 === n.listGroup.length && "uncategory" === n.listGroup[0].id
            ? n.listGroup
            : n.listGroup.filter(function (n) {
                return "uncategory" !== n.id;
              });
        }),
        G = (0, r.P1)([M], function (n) {
          return n
            .reduce(function (n, o) {
              return n.push(o.scenes), n;
            }, [])
            .flat();
        }),
        I = (0, r.P1)([l], function (n) {
          return n.listPost || [];
        }),
        U = (0, r.P1)([l], function (n) {
          return n.sceneSelected || void 0;
        }),
        x = (0, r.P1)([l], function (n) {
          return n.prevSceneSelected || void 0;
        }),
        q = (0, r.P1)([l], function (n) {
          return n.hotspotSelected || void 0;
        }),
        L = (0, r.P1)([f, Z, M], function (n, o, i) {
          var t, r, e;
          return (
            null == n
              ? void 0
              : null === (t = n.config) || void 0 === t
              ? void 0
              : null === (r = t.setting) || void 0 === r
              ? void 0
              : null === (e = r.general) || void 0 === e
              ? void 0
              : e.first_scene
          )
            ? o.filter(function (o) {
                var i, t, r;
                return (
                  o.id ===
                  (null == n
                    ? void 0
                    : null === (i = n.config) || void 0 === i
                    ? void 0
                    : null === (t = i.setting) || void 0 === t
                    ? void 0
                    : null === (r = t.general) || void 0 === r
                    ? void 0
                    : r.first_scene)
                );
              })[0] || i[0].scenes[0]
            : i.length
            ? i[0].scenes[0]
            : void 0;
        }),
        D = (0, r.P1)([l], function (n) {
          return n.dataMap || void 0;
        }),
        J = (0, r.P1)([l], function (n) {
          return n.configMap || void 0;
        }),
        W = (0, r.P1)([l], function (n) {
          return n.listFloorplan || [];
        }),
        Y = (0, r.P1)([l], function (n) {
          return n.configFloorplan || void 0;
        });
      (0, r.P1)([l], function (n) {
        return n.configCollaboration || void 0;
      });
      var B = (0, r.P1)([l], function (n) {
          return n.configControlbar || void 0;
        }),
        Q = (0, r.P1)([l], function (n) {
          return n.listFormCapture || [];
        }),
        X = (0, r.P1)([l], function (n) {
          return n.configFormCapture || [];
        }),
        V = (0, r.P1)([l], function (n) {
          return n.hotspotSelectedTemporary || null;
        }),
        K = (0, r.P1)([l], function (n) {
          return n.isVisibleFormCapture;
        }),
        $ = (0, r.P1)([l], function (n) {
          return n.formCaptureConfigSelected || void 0;
        }),
        H = (0, r.P1)([Q, $], function (n, o) {
          return (
            (o &&
              o.form &&
              n.filter(function (n) {
                return n.id === (null == o ? void 0 : o.form);
              })[0]) ||
            void 0
          );
        }),
        z = (0, r.P1)([X], function (n) {
          return (0, c.cq)(n);
        }),
        nn = (0, r.P1)([X], function (n) {
          return (0, c.FR)(n);
        }),
        no = (0, r.P1)([X], function (n) {
          return (0, c.J8)(n);
        }),
        ni = (0, r.P1)([X], function (n) {
          return (0, c.O_)(n);
        }),
        nt = (0, r.P1)([Z, X], function (n, o) {
          return (0, c.fq)(n, o);
        }),
        nr = (0, r.P1)([Z, X], function (n, o) {
          return (0, c.$y)(n, o);
        }),
        ne = (0, r.P1)([l], function (n) {
          return n.configLogo || void 0;
        }),
        nu = (0, r.P1)([l], function (n) {
          return n.configNadir || void 0;
        }),
        nc = (0, r.P1)([l], function (n) {
          return n.configProtectPassword || void 0;
        }),
        nl = (0, r.P1)([l], function (n) {
          return n.configCopyRight || void 0;
        }),
        nd = (0, r.P1)([l], function (n) {
          return n.configPopupIntro || void 0;
        }),
        nf = (0, r.P1)([l], function (n) {
          return n.listCallToAction || [];
        }),
        nv = (0, r.P1)([l], function (n) {
          return n.infoUser || void 0;
        }),
        na = (0, r.P1)([l], function (n) {
          return n.listCommentSceneSelected || [];
        }),
        ns = (0, r.P1)([f, nv], function (n, o) {
          return (null == n ? void 0 : n.user) === (null == o ? void 0 : o.id);
        }),
        ng = (0, r.P1)([l], function (n) {
          return n.isAllowToAccessOnCollaborationMode;
        });
    },
    45962: function (n, o, i) {
      "use strict";
      i.r(o);
      var t = i(47568),
        r = i(41799),
        e = i(69396),
        u = i(29815),
        c = i(70655),
        l = i(85893),
        d = i(67294),
        f = i(33207),
        v = i(11163),
        a = i(25617),
        s = i(2962),
        g = i(7400),
        P = i(29750),
        p = i(11201),
        C = i(55323),
        m = i(5152),
        _ = i.n(m),
        h = i(76489),
        T = i(22617),
        b = _()(
          function () {
            return Promise.all([i.e(1577), i.e(6323), i.e(1870)]).then(
              i.bind(i, 70370)
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [70370];
              },
            },
          }
        ),
        O = _()(
          function () {
            return Promise.all([i.e(4974), i.e(828)]).then(i.bind(i, 44974));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [44974];
              },
            },
            loading: function () {
              return (0, l.jsx)("span", { children: "Home Loading" });
            },
          }
        );
      function k(n) {
        var o = n.isRedirectToTokenPage,
          i = void 0 !== o && o,
          t = n.isAllowToAccessOnCollaborationMode,
          c = n.passwordTourCookie,
          p = n.listProjectGuardOpenedCookie,
          C = n.listFormCaptureOpenedCookie,
          m = (0, v.useRouter)(),
          _ = (0, a.I0)(),
          h = (0, a.v9)(g.rK),
          T = (0, a.v9)(g.nS),
          k = (0, a.v9)(g.U9),
          S = (0, a.v9)(g.QR),
          A = (0, a.v9)(g.M9),
          R = (0, a.v9)(g.qC),
          w = (0, a.v9)(g.WA),
          y = (0, d.useMemo)(
            function () {
              return (
                k.filter(function (n) {
                  return n.id === R;
                })[0] || void 0
              );
            },
            [k, R]
          );
        return (
          (0, d.useEffect)(
            function () {
              !h &&
                m.isReady &&
                i &&
                window.open(
                  ""
                    .concat("https://studio.panoee.com", "/redirect")
                    .concat("/collaboration", "/")
                    .concat(m.query.tour, "/")
                    .concat(m.query.scene || ""),
                  "_self"
                );
            },
            [m.isReady, i]
          ),
          (0, d.useEffect)(
            function () {
              if (k && k.length) {
                var n = y ? (0, r.Z)({}, y) : (0, r.Z)({}, k[0]);
                m.query.scene &&
                  (n =
                    (0, r.Z)(
                      {},
                      k.filter(function (n) {
                        return n.id === m.query.scene;
                      })[0]
                    ) || (0, r.Z)({}, k[0])),
                  (n.config =
                    (0, r.Z)({}, null == n ? void 0 : n.config) || {}),
                  (n.config = (0, e.Z)((0, r.Z)({}, n.config), {
                    isLittlePlanet: (null == w ? void 0 : w.enable) || !1,
                    timeTransitionLittlePlanet:
                      (null == w ? void 0 : w.transition_time) || 2,
                  })),
                  _(f.Nw.setSceneSelected(n)),
                  t && _(f.Nw.setIsAllowToAccessOnCollaborationMode(t));
              }
            },
            [k.length]
          ),
          (0, l.jsx)
        );
      }
      (k.getInitialProps = C.Y.getInitialPageProps(function (n) {
        var o;
        return (
          (o = (0, t.Z)(function (o) {
            var i, t, e, u, l, d, v, a, s, g, P;
            return (0, c.__generator)(this, function (c) {
              switch (c.label) {
                case 0:
                  if (
                    ((i = o.query),
                    (t = o.req),
                    (u = {
                      listProjectGuardOpenedCookie:
                        ((e = (0, h.Q)(t.headers.cookie || "")) &&
                          e[T.g.LIST_PROJECT_PASS_GUARD]) ||
                        null,
                      passwordTourCookie: (e && e[T.g.PASSWORD_TOUR]) || null,
                      listFormCaptureOpenedCookie:
                        (e && e[T.g.LIST_FORM_CAPTURE_OPENED]) || null,
                    }),
                    !(i.tour && i.token))
                  )
                    return [3, 2];
                  return (
                    n.dispatch(
                      f.Nw.setToken(JSON.parse(JSON.stringify(i.token)))
                    ),
                    n.dispatch((0, f.b6)({ id: i.tour, isPublic: !0 })),
                    n.dispatch((0, f.YC)({ token: i.token })),
                    n.dispatch(p.uR),
                    [
                      4,
                      null === (l = n.sagaTask) || void 0 === l
                        ? void 0
                        : l.toPromise(),
                    ]
                  );
                case 1:
                  return (
                    c.sent(),
                    (P =
                      (!!(g = n.getState().app).infoUser &&
                        !!g.project &&
                        g.infoUser.id === g.project.user) ||
                      ((null === (d = g.configCollaboration) || void 0 === d
                        ? void 0
                        : d.isEnabled) &&
                        ((null === (v = g.configCollaboration) || void 0 === v
                          ? void 0
                          : v.isPublic) ||
                          ""
                            .concat(
                              null === (a = g.configCollaboration) ||
                                void 0 === a
                                ? void 0
                                : a.collaborations,
                              " "
                            )
                            .split(/\r?\n/)
                            .map(function (n) {
                              return n.trim();
                            })
                            .filter(function (n) {
                              return !!n;
                            })
                            .indexOf(
                              null === (s = g.infoUser) || void 0 === s
                                ? void 0
                                : s.email
                            ) > -1))),
                    [
                      2,
                      (0, r.Z)(
                        {
                          isRedirectToTokenPage: !1,
                          isAllowToAccessOnCollaborationMode: P,
                        },
                        u
                      ),
                    ]
                  );
                case 2:
                  return [
                    2,
                    (0, r.Z)(
                      {
                        isRedirectToTokenPage: !0,
                        isAllowToAccessOnCollaborationMode: !1,
                      },
                      u
                    ),
                  ];
              }
            });
          })),
          function (n) {
            return o.apply(this, arguments);
          }
        );
      })),
        (o.default = k);
    },
    22617: function (n, o, i) {
      "use strict";
      var t, r;
      i.d(o, {
        g: function () {
          return t;
        },
      }),
        ((r = t || (t = {})).PASSWORD_TOUR = "passwordTour"),
        (r.LIST_PROJECT_PASS_GUARD = "listProjectGuardOpened"),
        (r.LIST_FORM_CAPTURE_OPENED = "listFormCaptureOpened");
    },
  },
  function (n) {
    n.O(0, [3354, 9774, 2888, 179], function () {
      return n((n.s = 27078));
    }),
      (_N_E = n.O());
  },
]);
//# sourceMappingURL=collaboration-c750fea6682d845f.js.map
