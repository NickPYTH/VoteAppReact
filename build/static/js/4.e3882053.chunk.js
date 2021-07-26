(this.webpackJsonpvote_app = this.webpackJsonpvote_app || []).push([
  [4],
  {
    283: function (e, s, t) {
      "use strict";
      t.r(s);
      t(0), t(21);
      var c = t(275),
        a = t.n(c),
        r = t(1),
        l = {
          height: "70vh",
          width: "100vw",
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100,
        };
      s.default = function (e) {
        if (e.visible) {
          var s = e.formName,
            t = e.formPass,
            c = "http://anketa-pvi.ru/" + e.formLink;
          return Object(r.jsx)("div", {
            style: l,
            children: Object(r.jsx)("div", {
              className: "modal-dialog",
              children: Object(r.jsxs)("div", {
                className: "modal-content",
                children: [
                  Object(r.jsx)("div", {
                    className: "modal-header",
                    children: Object(r.jsx)("h5", {
                      className: "modal-title",
                      children:
                        "\u0424\u043e\u0440\u043c\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0430",
                    }),
                  }),
                  Object(r.jsxs)("div", {
                    className: "modal-body",
                    children: [
                      Object(r.jsxs)("p", {
                        className: "text-center",
                        children: [
                          "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",
                          Object(r.jsx)("strong", { children: s }),
                          Object(r.jsx)("br", {}),
                        ],
                      }),
                      Object(r.jsxs)("p", {
                        className: "text-center",
                        children: [
                          "\u041f\u0430\u0440\u043e\u043b\u044c: ",
                          Object(r.jsx)("strong", { children: t }),
                          Object(r.jsx)("br", {}),
                        ],
                      }),
                      Object(r.jsxs)("p", {
                        className: "text-center",
                        children: [
                          "Cc\u044b\u043b\u043a\u0430 \u0438 QR \u043a\u043e\u0434 \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0444\u043e\u0440\u043c\u0435",
                          Object(r.jsx)("br", {}),
                          Object(r.jsx)("a", { href: c, children: c }),
                        ],
                      }),
                      Object(r.jsx)("div", {
                        className: "text-center mb-3",
                        children: Object(r.jsx)(a.a, {
                          value: c,
                          size: 128,
                          bgColor: "#FFFFFF",
                          fgColor: "#000000",
                          level: "L",
                        }),
                      }),
                      Object(r.jsxs)("p", {
                        className: "text-center",
                        children: [
                          "\u0414\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0444\u043e\u0440\u043c\u044b \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b ",
                          Object(r.jsx)("strong", {
                            children:
                              "\u0420\u0435\u0434\u0430\u043a\u0446\u0438\u044f",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(r.jsx)("div", {
                    className: "modal-footer",
                    children: Object(r.jsx)("a", {
                      href: c,
                      className: "btn btn-primary w-100",
                      children:
                        "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u0440\u043e\u0441\u0443",
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        return Object(r.jsx)("div", {});
      };
    },
  },
]);
//# sourceMappingURL=4.e3882053.chunk.js.map
