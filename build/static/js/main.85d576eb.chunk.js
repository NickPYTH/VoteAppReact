(this.webpackJsonpvote_app = this.webpackJsonpvote_app || []).push([
  [0],
  {
    111: function (e, t, n) {},
    112: function (e, t, n) {},
    113: function (e, t, n) {},
    114: function (e, t, n) {},
    243: function (e, t, n) {},
    250: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(0),
        a = n.n(c),
        s = n(21),
        i = n.n(s),
        r = (n(111), n(112), n(113), n(114), n(37)),
        o = n(9),
        l = n(38),
        d = n(42),
        u = n(3),
        j = a.a.createContext(),
        b = n(270),
        m = n(1);
      var p = function (e) {
        var t = e.todo,
          n = e.index,
          a = Object(c.useContext)(j).removeTodo,
          s = Object(c.useContext)(j).changeQuestionTitle,
          i = Object(c.useContext)(j).changeQuestionDescription,
          r = Object(c.useContext)(j).changeQuestionComment,
          o = Object(c.useState)(!1),
          l = Object(u.a)(o, 2),
          d = l[0],
          p = l[1],
          h = Object(c.useState)(""),
          x = Object(u.a)(h, 2),
          O = x[0],
          v = x[1],
          f = Object(c.useState)(""),
          g = Object(u.a)(f, 2),
          N = g[0],
          y = g[1];
        return Object(m.jsx)("div", {
          children: Object(m.jsx)("div", {
            id: n + 1,
            className: "card mb-3",
            children: Object(m.jsxs)("div", {
              className: "card-body",
              children: [
                Object(m.jsxs)("div", {
                  className: "mb-2 d-flex justify-content-between",
                  children: [
                    Object(m.jsx)("span", {
                      className: "badge badge-primary d-none d-lg-flex",
                      children:
                        "\u041e\u0442\u0432\u0435\u0442\u044b \u043e\u0442 1 \u0434\u043e 5",
                    }),
                    Object(m.jsxs)("span", {
                      className: "badge badge-primary",
                      children: [
                        "\u041d\u043e\u043c\u0435\u0440 \u0432\u043e\u043f\u0440\u043e\u0441\u0430: ",
                        n + 1,
                      ],
                    }),
                    Object(m.jsx)("span", {
                      style: { cursor: "pointer" },
                      onClick: a.bind(null, t.id),
                      className: "badge badge-danger",
                      children: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
                    }),
                  ],
                }),
                Object(m.jsxs)("div", {
                  className: "input-group mb-3",
                  children: [
                    Object(m.jsx)("div", {
                      className: "input-group-prepend d-none d-lg-flex",
                      children: Object(m.jsx)("span", {
                        style: { width: "14rem" },
                        className: "input-group-text",
                        children:
                          "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0430",
                      }),
                    }),
                    Object(m.jsx)("div", {
                      className:
                        "input-group-prepend d-flex d-lg-none w-100 mb-1",
                      children: Object(m.jsx)("div", {
                        className: "input-group-text w-100",
                        children:
                          "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0430",
                      }),
                    }),
                    Object(m.jsx)("input", {
                      required: !0,
                      onChange: function (e) {
                        v(e.target.value), s(n, e.target.value);
                      },
                      defaultValue: O,
                      type: "text",
                      className: "form-control",
                    }),
                  ],
                }),
                Object(m.jsxs)("div", {
                  className: "input-group mb-3 ",
                  children: [
                    Object(m.jsx)("div", {
                      className: "input-group-prepend d-none d-lg-flex",
                      children: Object(m.jsx)("span", {
                        style: { width: "14rem" },
                        className: "input-group-text",
                        children:
                          "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",
                      }),
                    }),
                    Object(m.jsx)("div", {
                      className:
                        "input-group-prepend d-flex d-lg-none w-100 mb-1",
                      children: Object(m.jsx)("div", {
                        className: "input-group-text w-100",
                        children:
                          "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",
                      }),
                    }),
                    Object(m.jsx)("input", {
                      required: !0,
                      type: "text",
                      className: "form-control",
                      onChange: function (e) {
                        y(e.target.value), i(n, e.target.value);
                      },
                      defaultValue: N,
                    }),
                  ],
                }),
                Object(m.jsxs)("div", {
                  className:
                    "input-group justify-content-lg-start justify-content-center",
                  children: [
                    Object(m.jsx)("div", {
                      className: "input-group-prepend d-none d-lg-flex",
                      children: Object(m.jsx)("span", {
                        style: { width: "14rem" },
                        className: "input-group-text",
                        children:
                          "\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043e\u0442\u0432\u0435\u0442\u0430",
                      }),
                    }),
                    Object(m.jsx)("div", {
                      className: "input-group-prepend d-flex d-lg-none w-100",
                      children: Object(m.jsx)("div", {
                        className: "input-group-text w-100",
                        children:
                          "\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043e\u0442\u0432\u0435\u0442\u0430",
                      }),
                    }),
                    Object(m.jsxs)("div", {
                      className: "d-flex justify-content-center m-lg-0 m-2",
                      children: [
                        Object(m.jsx)("button", {
                          type: "button",
                          className: "btn btn-outline-secondary ml-2",
                          children: "1",
                        }),
                        Object(m.jsx)("button", {
                          type: "button",
                          className: "btn btn-outline-secondary ml-2",
                          children: "2",
                        }),
                        Object(m.jsx)("button", {
                          type: "button",
                          className: "btn btn-outline-secondary ml-2",
                          children: "3",
                        }),
                        Object(m.jsx)("button", {
                          type: "button",
                          className: "btn btn-outline-secondary ml-2",
                          children: "4",
                        }),
                        Object(m.jsx)("button", {
                          type: "button",
                          className: "btn btn-outline-secondary ml-2",
                          children: "5",
                        }),
                      ],
                    }),
                    Object(m.jsxs)("div", {
                      className: "input-group-prepend mt-3 w-100",
                      children: [
                        Object(m.jsx)("div", {
                          style: { width: "14rem" },
                          className: "input-group-text rounded-left",
                          children:
                            "\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u043e\u0442\u0432\u0435\u0442\u0443",
                        }),
                        Object(m.jsx)(b.a, {
                          name: "checkedB",
                          color: "primary",
                          onChange: function () {
                            p(!d), r(n, !d);
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      var h = function (e) {
        var t = Object(c.useContext)(j).removeSubs,
          n = 0;
        return Object(m.jsx)("div", {
          children: e.answers.map(function (c) {
            return (
              (n += 1),
              Object(m.jsxs)("div", {
                className: "input-group mb-3",
                children: [
                  Object(m.jsxs)("div", {
                    className: "input-group-prepend",
                    children: [
                      Object(m.jsxs)("span", {
                        style: { width: "14rem" },
                        className: "input-group-text d-lg-flex d-none",
                        children: [n, " \u043e\u0442\u0432\u0435\u0442"],
                      }),
                      Object(m.jsxs)("span", {
                        className: "input-group-text d-lg-none d-flex",
                        children: [n, " \u043e\u0442\u0432\u0435\u0442"],
                      }),
                    ],
                  }),
                  Object(m.jsx)("div", {
                    name: c.key,
                    style: { overflowX: "" },
                    className: "form-control",
                    children: c.value,
                  }),
                  Object(m.jsx)("button", {
                    className: "btn btn-outline-danger ml-2",
                    onClick: t.bind(null, c.key, e.index, c.value),
                    children: "x",
                  }),
                ],
              })
            );
          }),
        });
      };
      var x = function (e) {
        var t = e.todo,
          n = e.index,
          s = e.onChange,
          i = Object(c.useState)(!1),
          r = Object(u.a)(i, 2),
          o = r[0],
          l = r[1],
          d = Object(c.useContext)(j).removeTodo,
          p = a.a.useState([]),
          x = Object(u.a)(p, 2),
          O = x[0],
          v = x[1],
          f = a.a.useState(""),
          g = Object(u.a)(f, 2),
          N = g[0],
          y = g[1],
          C = Object(c.useContext)(j).changeQuestionTitle,
          w = Object(c.useContext)(j).changeQuestionDescription,
          _ = Object(c.useState)(""),
          S = Object(u.a)(_, 2),
          k = S[0],
          q = S[1],
          T = Object(c.useState)(""),
          I = Object(u.a)(T, 2),
          B = I[0],
          G = I[1];
        function V(e, t) {
          s("custom", e, t);
        }
        return Object(m.jsx)(j.Provider, {
          value: {
            removeSubs: function (e, t, n) {
              var c = [];
              O.map(function (t) {
                t.key != e &&
                  (c = c.concat({
                    ques_index: t.ques_index,
                    key: t.key,
                    value: t.value,
                  }));
              }),
                v(c),
                s("custom", t, n, !0);
            },
            addValue: function (e, t) {
              O.map(function (n) {
                n.key == e && (n.value = t);
              });
            },
            getCurrentValue: function (e) {
              return (
                O.map(function (t) {
                  if (t.key == e) return t.value;
                }),
                1
              );
            },
          },
          children: Object(m.jsx)("div", {
            children: Object(m.jsx)("div", {
              id: n + 1,
              className: "card mb-3",
              children: Object(m.jsxs)("div", {
                className: "card-body",
                children: [
                  Object(m.jsxs)("div", {
                    className: "mb-2 d-flex justify-content-between",
                    children: [
                      Object(m.jsx)("span", {
                        className: "badge badge-primary",
                        children:
                          "\u0421\u0432\u043e\u0438 \u043e\u0442\u0432\u0435\u0442\u044b",
                      }),
                      Object(m.jsxs)("span", {
                        className: "badge badge-primary d-none d-lg-flex",
                        children: [
                          "\u041d\u043e\u043c\u0435\u0440 \u0432\u043e\u043f\u0440\u043e\u0441\u0430: ",
                          n + 1,
                        ],
                      }),
                      Object(m.jsx)("span", {
                        style: { cursor: "pointer" },
                        onClick: d.bind(null, t.id),
                        className: "badge badge-danger",
                        children: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
                      }),
                    ],
                  }),
                  Object(m.jsxs)("div", {
                    className: "input-group mb-3",
                    children: [
                      Object(m.jsx)("div", {
                        className: "input-group-prepend d-lg-flex d-none",
                        children: Object(m.jsx)("span", {
                          style: { width: "14rem" },
                          className: "input-group-text",
                          children:
                            "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0430",
                        }),
                      }),
                      Object(m.jsx)("div", {
                        className:
                          "input-group-prepend w-100 d-lg-none d-flex mb-1",
                        children: Object(m.jsx)("div", {
                          className: "input-group-text w-100",
                          children:
                            "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0430",
                        }),
                      }),
                      Object(m.jsx)("input", {
                        required: !0,
                        type: "text",
                        className: "form-control",
                        onChange: function (e) {
                          q(e.target.value), C(n, e.target.value);
                        },
                        defaultValue: k,
                      }),
                    ],
                  }),
                  Object(m.jsxs)("div", {
                    className: "input-group mb-3",
                    children: [
                      Object(m.jsx)("div", {
                        className: "input-group-prepend d-none d-lg-flex",
                        children: Object(m.jsx)("span", {
                          style: { width: "14rem" },
                          className: "input-group-text",
                          children:
                            "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",
                        }),
                      }),
                      Object(m.jsx)("div", {
                        className:
                          "input-group-prepend w-100 d-lg-none d-flex mb-1",
                        children: Object(m.jsx)("div", {
                          className: "input-group-text w-100",
                          children:
                            "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",
                        }),
                      }),
                      Object(m.jsx)("input", {
                        required: !0,
                        type: "text",
                        className: "form-control",
                        onChange: function (e) {
                          G(e.target.value), w(n, e.target.value);
                        },
                        defaultValue: B,
                      }),
                    ],
                  }),
                  Object(m.jsx)(h, { index: n, answers: O }),
                  Object(m.jsxs)("div", {
                    className: "input-group text-center text-lg-center",
                    children: [
                      Object(m.jsx)("div", {
                        className: "col-12 col-lg-9 mb-1",
                        children: Object(m.jsx)("input", {
                          placeholder:
                            "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0442\u0432\u0435\u0442",
                          type: "text",
                          className: "form-control",
                          value: N,
                          onChange: function (e) {
                            return y(e.target.value);
                          },
                        }),
                      }),
                      Object(m.jsx)("div", {
                        className: "col-12 col-lg-3",
                        children: Object(m.jsx)("button", {
                          className: "btn btn-outline-secondary",
                          onClick: function () {
                            v(
                              O.concat({
                                ques_index: n + 1,
                                key: Math.random(),
                                value: N,
                              })
                            ),
                              V(n, N),
                              y("");
                          },
                          children:
                            "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442",
                        }),
                      }),
                      Object(m.jsxs)("div", {
                        className: "input-group-prepend mt-3 w-100",
                        children: [
                          Object(m.jsx)("div", {
                            style: { width: "14rem" },
                            className: "input-group-text rounded-left",
                            children:
                              "\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u043e\u0442\u0432\u0435\u0442\u0443",
                          }),
                          Object(m.jsx)(b.a, {
                            name: "checkedB",
                            color: "primary",
                            onChange: function () {
                              l(!o), V(n, !o);
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var O = function (e) {
        var t = Object(c.useContext)(j).removeTodo,
          n = Object(c.useContext)(j).changeTodo;
        return Object(m.jsxs)("div", {
          className: "col-12",
          children: [
            Object(m.jsx)("div", {
              className: "col-12",
              children: e.questionsList.map(function (c) {
                if (e.group_id == c.group_id) {
                  var a = "".concat(Math.floor(1e3 * Math.random()), "-min");
                  return Object(m.jsx)("div", {
                    children: Object(m.jsxs)("div", {
                      className: "input-group mb-2",
                      children: [
                        Object(m.jsx)(
                          "input",
                          {
                            style: { width: "18px" },
                            className: "form-control font-weight-normal mr-2",
                            defaultValue: c.value,
                            onChange: function (t) {
                              n(t, e.group_id, c.child_id);
                            },
                          },
                          a
                        ),
                        Object(m.jsx)("button", {
                          onClick: function (n) {
                            return (
                              (a = e.group_id), (s = c.child_id), void t(a, s)
                            );
                            var a, s;
                          },
                          className: "btn btn-outline-danger",
                          children: "\u0445",
                        }),
                      ],
                    }),
                  });
                }
              }),
            }),
            Object(m.jsx)("form", {
              className: "col-lg-6 col-12",
              onSubmit: function (t) {
                t.preventDefault(), e.onCreate(e.group_id);
              },
              children: Object(m.jsx)("button", {
                className: "btn btn-outline-secondary",
                children:
                  "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442",
              }),
            }),
          ],
        });
      };
      var v = function (e) {
        var t = Object(c.useContext)(j),
          n = t.removeGroup,
          s = t.changeGroupChild,
          i = t.removeGroupChild,
          r = t.addGroupChild,
          o = a.a.useState(new Map()),
          l = Object(u.a)(o, 2),
          d = l[0],
          b = l[1],
          p = Object(c.useContext)(j).changeTitle,
          h = a.a.useState([]),
          x = Object(u.a)(h, 2),
          v = x[0],
          f = x[1];
        function g(e, t) {
          var n = [],
            c = 0;
          v.map(function (t) {
            t.group_id == e && (c += 1);
          }),
            c > 1 &&
              (v.map(function (e) {
                t != e.child_id && n.push(e);
              }),
              f(n),
              i(n, t));
        }
        function N(t) {
          var n = {
            ques_index: e.index,
            group_id: t,
            group_name: d.get(t),
            child_id: Math.random(),
            value: "",
          };
          f(v.concat([n])), r(n);
        }
        return Object(m.jsx)(j.Provider, {
          value: {
            removeTodo: g,
            changeTodo: function (e, t, n) {
              var c = v;
              c.map(function (t) {
                n == t.child_id && (t.value = e.target.value);
              }),
                f(c),
                s(c);
            },
          },
          children: Object(m.jsx)("div", {
            children: e.groups.map(function (e) {
              var t = d.get(e.key);
              return Object(m.jsxs)("div", {
                children: [
                  Object(m.jsxs)("div", {
                    className: "row",
                    children: [
                      Object(m.jsx)("div", {
                        className: "col-12 justify-content-center",
                        children: Object(m.jsx)("div", {
                          className: "input-group mb-3",
                          children: Object(m.jsx)(
                            "input",
                            {
                              placeholder:
                                "\u0418\u043c\u044f \u0433\u0440\u0443\u043f\u043f\u044b",
                              type: "text",
                              className: "form-control",
                              onChange: function (t) {
                                p(t.target, e.key),
                                  (function (e, t) {
                                    if ("string" == typeof d) {
                                      var n = new Map();
                                      n.set(t, e.value), b(n);
                                    } else d.set(t, e.value), b(d);
                                  })(t.target, e.key);
                              },
                              defaultValue: t,
                            },
                            e.key
                          ),
                        }),
                      }),
                      Object(m.jsx)(O, {
                        group_id: e.key,
                        questionsList: v,
                        onCreate: N,
                        onRemove: g,
                      }),
                    ],
                  }),
                  Object(m.jsx)("button", {
                    className: "btn btn-outline-danger mt-3 mb-3",
                    onClick: n.bind(null, e.key, v),
                    children:
                      "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443",
                  }),
                ],
              });
            }),
          }),
        });
      };
      var f = function (e) {
        var t = e.todo,
          n = e.index,
          s = e.onChange,
          i = Object(c.useState)(!1),
          r = Object(u.a)(i, 2),
          o = r[0],
          l = r[1],
          d = Object(c.useContext)(j).removeTodo,
          p = Object(c.useContext)(j),
          h = p.changeGroupChild,
          x = p.removeGroupChild,
          O = p.addGroupChild,
          f = p.removeGroupInGroupQuestion,
          g = p.switchCommentInGroupQuestion,
          N = a.a.useState([]),
          y = Object(u.a)(N, 2),
          C = y[0],
          w = y[1],
          _ = Object(c.useContext)(j).changeQuestionTitle,
          S = Object(c.useContext)(j).changeQuestionDescription,
          k = Object(c.useState)(""),
          q = Object(u.a)(k, 2),
          T = q[0],
          I = q[1],
          B = Object(c.useState)(""),
          G = Object(u.a)(B, 2),
          V = G[0],
          F = G[1];
        return Object(m.jsx)(j.Provider, {
          value: {
            removeGroup: function (e, t) {
              var n = [],
                c = [];
              t.map(function (t) {
                t.group_id != e && c.push(t);
              }),
                C.map(function (t) {
                  t.key != e && n.push(t);
                }),
                w(n),
                f(e);
            },
            addChild: function (e, t) {
              var c = C;
              "object" == typeof t &&
                "" !== t.get(e) &&
                (c.map(function (n) {
                  n.key === e &&
                    n.childs.push({
                      key: Math.random(),
                      value: t,
                      group_key: e,
                    });
                }),
                w(c),
                s("groups", n, c, null));
            },
            removeChild: function (e, t) {
              var c = C;
              c.map(function (n) {
                if (n.key === e) {
                  var c = [];
                  n.childs.map(function (e) {
                    e.key != t && c.push(e);
                  }),
                    (n.childs = c);
                }
              }),
                w(c),
                s("groups", n, c, null);
            },
            changeTitle: function (e, t) {
              var c = C;
              c.map(function (n) {
                n.key === t && (n.title = e.value);
              }),
                w(c),
                s("groups", n, c, null);
            },
            onChange: s,
            addGroupChild: O,
            changeGroupChild: h,
            removeGroupChild: x,
          },
          children: Object(m.jsx)("div", {
            children: Object(m.jsx)("div", {
              id: n + 1,
              className: "card mb-3",
              children: Object(m.jsxs)("div", {
                className: "card-body",
                children: [
                  Object(m.jsxs)("div", {
                    className: "mb-2 d-flex justify-content-between",
                    children: [
                      Object(m.jsx)("span", {
                        className: "badge badge-primary",
                        children:
                          "\u0413\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b",
                      }),
                      Object(m.jsxs)("span", {
                        className: "badge badge-primary d-none d-lg-flex",
                        children: [
                          "\u041d\u043e\u043c\u0435\u0440 \u0432\u043ed\u043f\u0440\u043e\u0441\u0430: ",
                          n + 1,
                        ],
                      }),
                      Object(m.jsx)("span", {
                        style: { cursor: "pointer" },
                        onClick: d.bind(null, t.id),
                        className: "badge badge-danger",
                        children: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
                      }),
                    ],
                  }),
                  Object(m.jsxs)("div", {
                    className: "input-group mb-3",
                    children: [
                      Object(m.jsx)("div", {
                        className: "input-group-prepend d-none d-lg-flex",
                        children: Object(m.jsx)("span", {
                          style: { width: "14rem" },
                          className: "input-group-text",
                          children:
                            "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0430",
                        }),
                      }),
                      Object(m.jsx)("div", {
                        className:
                          "input-group-prepend d-lg-none d-flex w-100 mb-1",
                        children: Object(m.jsx)("div", {
                          className: "input-group-text w-100",
                          children:
                            "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0430",
                        }),
                      }),
                      Object(m.jsx)("input", {
                        required: !0,
                        type: "text",
                        className: "form-control",
                        onChange: function (e) {
                          I(e.target.value), _(n, e.target.value);
                        },
                        defaultValue: T,
                      }),
                    ],
                  }),
                  Object(m.jsxs)("div", {
                    className: "input-group mb-3",
                    children: [
                      Object(m.jsx)("div", {
                        className: "input-group-prepend d-none d-lg-flex",
                        children: Object(m.jsx)("span", {
                          style: { width: "14rem" },
                          className: "input-group-text",
                          children:
                            "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",
                        }),
                      }),
                      Object(m.jsx)("div", {
                        className:
                          "input-group-prepend d-lg-none d-flex w-100 mb-1",
                        children: Object(m.jsx)("div", {
                          className: "input-group-text w-100",
                          children:
                            "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",
                        }),
                      }),
                      Object(m.jsx)("input", {
                        required: !0,
                        type: "text",
                        className: "form-control",
                        onChange: function (e) {
                          F(e.target.value), S(n, e.target.value);
                        },
                        defaultValue: V,
                      }),
                    ],
                  }),
                  Object(m.jsx)(v, { groups: C, index: n + 1 }),
                  Object(m.jsx)("div", {
                    className:
                      "d-flex justify-content-lg-start justify-content-center",
                    children: Object(m.jsx)("button", {
                      className: "btn btn-outline-secondary",
                      onClick: function () {
                        w(
                          C.concat({
                            ques_index: n + 1,
                            key: Math.random(),
                            childs: new Map(),
                            title: "",
                          })
                        );
                      },
                      children:
                        "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443",
                    }),
                  }),
                  Object(m.jsxs)("div", {
                    className: "input-group-prepend mt-3 w-100",
                    children: [
                      Object(m.jsx)("div", {
                        style: { width: "14rem" },
                        className: "input-group-text rounded-left",
                        children:
                          "\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u043e\u0442\u0432\u0435\u0442\u0443",
                      }),
                      Object(m.jsx)(b.a, {
                        name: "checkedB",
                        color: "primary",
                        onChange: function () {
                          l(!o), g(n, !o);
                        },
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var g = function (e) {
        return Object(m.jsx)("div", {
          children: e.questionsList.map(function (t, n) {
            return "numbers" === t.title
              ? Object(m.jsx)(
                  p,
                  { todo: t, index: n, onChange: e.onToggle },
                  t.id
                )
              : "custom" === t.title
              ? Object(m.jsx)(
                  x,
                  { todo: t, index: n, onChange: e.onToggle },
                  t.id
                )
              : "group" === t.title
              ? Object(m.jsx)(
                  f,
                  { todo: t, index: n, onChange: e.onToggle },
                  t.id
                )
              : void 0;
          }),
        });
      };
      var N = function (e) {
          var t = e.onCreate;
          return (
            (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t = Object(c.useState)(e),
                n = Object(u.a)(t, 2),
                a = n[0],
                s = n[1];
            })(""),
            Object(m.jsxs)("div", {
              className: "d-flex justify-content-lg-start row",
              children: [
                Object(m.jsx)("form", {
                  className: "col-12 col-lg-4 mb-1",
                  onSubmit: function (e) {
                    e.preventDefault(), t("numbers");
                  },
                  children: Object(m.jsx)("button", {
                    className: "btn btn-outline-secondary w-100",
                    type: "submit",
                    children: "\u041e\u0442\u0432\u0435\u0442\u044b 1-5",
                  }),
                }),
                Object(m.jsx)("form", {
                  className: " col-12 col-lg-4 mb-1",
                  onSubmit: function (e) {
                    e.preventDefault(), t("custom");
                  },
                  children: Object(m.jsx)("button", {
                    className: "btn btn-outline-secondary w-100",
                    type: "submit",
                    children:
                      "\u0421\u0432\u043e\u0438 \u043e\u0442\u0432\u0435\u0442\u044b",
                  }),
                }),
                Object(m.jsx)("form", {
                  className: "col-12  col-lg-4 mb-1",
                  onSubmit: function (e) {
                    e.preventDefault(), t("group");
                  },
                  children: Object(m.jsx)("button", {
                    className: "btn btn-outline-secondary w-100",
                    type: "submit",
                    children:
                      "\u0413\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b",
                  }),
                }),
              ],
            })
          );
        },
        y = {
          height: "70vh",
          width: "100vw",
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100,
        },
        C = function () {
          return Object(m.jsx)("div", {
            style: y,
            children: Object(m.jsx)("div", {
              style: {
                display: "flex",
                justifyContent: "center",
                margin: ".5rem",
              },
              children: Object(m.jsxs)("div", {
                class: "lds-facebook",
                children: [
                  Object(m.jsx)("div", {}),
                  Object(m.jsx)("div", {}),
                  Object(m.jsx)("div", {}),
                ],
              }),
            }),
          });
        },
        w = n(29),
        _ =
          (n(20),
          a.a.lazy(function () {
            return new Promise(function (e) {
              setTimeout(function () {
                e(Promise.all([n.e(3), n.e(4)]).then(n.bind(null, 283)));
              }, 0);
            });
          }));
      function S() {
        var e = a.a.useState({
            name: "",
            description: "",
            date: "",
            isInf: !1,
            isTryToSend: !1,
          }),
          t = Object(u.a)(e, 2),
          c = t[0],
          s = t[1];
        document.title =
          "VF | \u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440";
        var i = a.a.useState(!1),
          r = Object(u.a)(i, 2),
          o = r[0],
          l = r[1],
          d = a.a.useState(!1),
          p = Object(u.a)(d, 2),
          h = p[0],
          x = p[1],
          O = a.a.useState(!1),
          v = Object(u.a)(O, 2),
          f = v[0],
          y = v[1],
          S = a.a.useState([]),
          k = Object(u.a)(S, 2),
          q = k[0],
          T = k[1],
          I = a.a.useState(0),
          B = Object(u.a)(I, 2),
          G = B[0],
          V = B[1],
          F = a.a.useState(),
          P = Object(u.a)(F, 2),
          J = P[0],
          E = P[1],
          X = a.a.useState(!1),
          z = Object(u.a)(X, 2),
          M = z[0],
          Q = z[1];
        function D() {
          var e = !1,
            t = n(20),
            a = new Map();
          (a.set("form_name", c.name),
          a.set("form_description", c.description),
          a.set("questions", q),
          c.isInf || "" == c.date.trim()
            ? (a.set("form_date", "inf"), l(!0))
            : a.set("form_date", c.date),
          (c.isTryToSend = !0),
          0 == a.get("questions").length)
            ? y(!0)
            : (y(!1),
              a.get("questions").map(function (t) {
                "" == t.question_title.trim() && (e = !0);
              }),
              a.get("questions").map(function (t) {
                "group" == t.title
                  ? t.data.map(function (t) {
                      ("" != t.group_name && void 0 != t.group_name) ||
                        (e = !0),
                        Object.values(t).includes("") && (e = !0);
                    })
                  : "custom" == t.title
                  ? ("" == t.question_title && (e = !0),
                    Object.values(t.data).includes("") && (e = !0))
                  : "numbers" == t.title && "" == t.question_title && (e = !0);
              }),
              x(e),
              e ||
                t({
                  method: "post",
                  url: "http://188.225.83.42:8000/api/create_form",
                  headers: {
                    Authorization:
                      "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
                    "Content-Type": "application/json",
                  },
                  data: JSON.stringify(Object.fromEntries(a)),
                })
                  .then(function (e) {
                    var t = e.data.link;
                    E(t), Q(!0);
                  })
                  .catch(function (e) {
                    console.log(e);
                  }));
        }
        return Object(m.jsxs)(j.Provider, {
          value: {
            removeTodo: function (e) {
              V(G - 1);
              var t = 1;
              T(
                q.filter(function (t) {
                  return t.id !== e;
                })
              ),
                q.map(function (n) {
                  n.id !== e && ((n.questionNumber = t), (t += 1));
                });
            },
            removeGroupInGroupQuestion: function (e) {
              var t = q,
                n = [];
              t.map(function (t) {
                "group" == t.title &&
                  t.data.map(function (t) {
                    t.group_id != e && n.push(t);
                  }),
                  (t.data = n);
              }),
                T(t);
            },
            switchCommentInGroupQuestion: function (e, t) {
              var n = q;
              n.map(function (n) {
                "group" == n.title &&
                  n.questionNumber == e + 1 &&
                  (n.isComment = t);
              }),
                T(n);
            },
            addGroupChild: function (e) {
              var t = q;
              t.map(function (t) {
                t.data.push(e);
              }),
                T(t);
            },
            changeGroupChild: function (e) {
              var t = q;
              t.map(function (t) {
                t.data.map(function (t) {
                  e.map(function (e) {
                    t.key == e.group_id &&
                      (t.childs.has(e.child_id)
                        ? (t.childs.delete(e.child_id),
                          t.childs.set(e.child_id, e.value))
                        : t.childs.set(e.child_id, e.value));
                  });
                });
              }),
                T(t);
            },
            removeGroupChild: function (e, t) {
              var n = q,
                c = [];
              n.map(function (e) {
                e.data.map(function (e) {
                  e.child_id != t && c.push(e);
                }),
                  (e.data = c),
                  (c = []);
              }),
                T(n);
            },
            changeQuestionTitle: function (e, t) {
              var n = q;
              n.map(function (n) {
                n.questionNumber == e + 1 && (n.question_title = t);
              }),
                T(n);
            },
            changeQuestionDescription: function (e, t) {
              var n = q;
              n.map(function (n) {
                n.questionNumber == e + 1 && (n.question_description = t);
              }),
                T(n);
            },
            changeQuestionComment: function (e, t) {
              var n = q;
              n.map(function (n) {
                n.questionNumber == e + 1 && (n.isComment = t);
              }),
                T(n);
            },
          },
          children: [
            M
              ? Object(m.jsx)(a.a.Suspense, {
                  fallback: Object(m.jsx)(C, {}),
                  children: Object(m.jsx)(_, {
                    onCreate: _,
                    visible: M,
                    formName: c.name,
                    formPass: c.description,
                    formLink: J,
                  }),
                })
              : Object(m.jsx)("div", {}),
            Object(m.jsx)("div", {
              className: "container mt-4 mt-lg-5",
              style: M ? { opacity: "0.4" } : { opacity: "1" },
              children: Object(m.jsxs)("div", {
                className: "row",
                children: [
                  Object(m.jsxs)("div", {
                    className: "col-12",
                    children: [
                      Object(m.jsx)("div", {
                        className: "card mb-3",
                        children: Object(m.jsxs)("div", {
                          className: "card-body",
                          children: [
                            Object(m.jsxs)("div", {
                              className: "input-group mb-3",
                              children: [
                                Object(m.jsx)("div", {
                                  className: "input-group-prepend w-100 mb-1",
                                  children: Object(m.jsx)("div", {
                                    className:
                                      "input-group-text d-lg-none d-flex w-100",
                                    children:
                                      "\u0418\u043c\u044f \u0444\u043e\u0440\u043c\u044b",
                                  }),
                                }),
                                Object(m.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(m.jsx)("span", {
                                    style: { width: "14rem" },
                                    className:
                                      "input-group-text d-lg-flex d-none",
                                    children:
                                      "\u0418\u043c\u044f \u0444\u043e\u0440\u043c\u044b",
                                  }),
                                }),
                                Object(m.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  onChange: function (e) {
                                    s({
                                      name: e.target.value,
                                      description: c.description,
                                      date: c.date,
                                      isInf: c.isInf,
                                      isTryToSend: c.isTryToSend,
                                    });
                                  },
                                  required: !0,
                                  defaultValue: c.name,
                                }),
                              ],
                            }),
                            Object(m.jsxs)("div", {
                              className: "input-group",
                              children: [
                                Object(m.jsx)("div", {
                                  className: "input-group-prepend w-100 mb-1",
                                  children: Object(m.jsx)("div", {
                                    className:
                                      "input-group-text d-lg-none d-flex w-100",
                                    children:
                                      "\u041f\u0430\u0440\u043e\u043b\u044c \u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c",
                                  }),
                                }),
                                Object(m.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(m.jsx)("span", {
                                    style: { width: "14rem" },
                                    className:
                                      "input-group-text d-lg-flex d-none",
                                    children:
                                      "\u041f\u0430\u0440\u043e\u043b\u044c \u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c",
                                  }),
                                }),
                                Object(m.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  onChange: function (e) {
                                    s({
                                      name: c.name,
                                      description: e.target.value,
                                      date: c.date,
                                      isInf: c.isInf,
                                      isTryToSend: c.isTryToSend,
                                    });
                                  },
                                  defaultValue: c.description,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(m.jsx)("div", {
                        className: "card mb-3",
                        children: Object(m.jsx)("div", {
                          className: "card-body",
                          children: Object(m.jsxs)("div", {
                            className: "input-group",
                            children: [
                              Object(m.jsx)("div", {
                                className: "input-group-prepend w-100 mb-1",
                                children: Object(m.jsx)("div", {
                                  className:
                                    "input-group-text d-lg-none d-flex w-100",
                                  children:
                                    "\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",
                                }),
                              }),
                              Object(m.jsxs)("div", {
                                className:
                                  "input-group-prepend d-lg-none d-flex w-100 mb-1",
                                children: [
                                  Object(m.jsx)("div", {
                                    className: "input-group-text  w-100",
                                    children:
                                      "\u0411\u0435\u0441\u0441\u0440\u043e\u0447\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430",
                                  }),
                                  Object(m.jsx)(b.a, {
                                    name: "checkedB",
                                    color: "primary",
                                    onChange: function (e) {
                                      s({
                                        name: c.name,
                                        description: c.description,
                                        date: e.target.value,
                                        isInf: !c.isInf,
                                        isTryToSend: c.isTryToSend,
                                      });
                                    },
                                  }),
                                ],
                              }),
                              Object(m.jsx)("div", {
                                className:
                                  "input-group-prepend d-lg-flex d-none",
                                children: Object(m.jsxs)("span", {
                                  style: { width: "15rem" },
                                  className: "input-group-text",
                                  children: [
                                    "\u0411\u0435\u0441\u0441\u0440\u043e\u0447\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430",
                                    Object(m.jsx)(b.a, {
                                      name: "checkedB",
                                      color: "primary",
                                      onChange: function (e) {
                                        s({
                                          name: c.name,
                                          description: c.description,
                                          date: e.target.value,
                                          isInf: !c.isInf,
                                          isTryToSend: c.isTryToSend,
                                        });
                                      },
                                    }),
                                  ],
                                }),
                              }),
                              Object(m.jsx)("div", {
                                className: "input-group-prepend",
                                children: Object(m.jsx)("span", {
                                  style: { width: "14rem" },
                                  className:
                                    "input-group-text d-none d-lg-flex",
                                  hidden: c.isInf,
                                  children:
                                    "\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",
                                }),
                              }),
                              Object(m.jsx)("input", {
                                type: "date",
                                className: "form-control m-2",
                                onChange: function (e) {
                                  s({
                                    name: c.name,
                                    description: c.description,
                                    date: e.target.value,
                                    isInf: c.isInf,
                                    isTryToSend: c.isTryToSend,
                                  });
                                },
                                defaultValue: c.date,
                                hidden: c.isInf,
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(m.jsx)(g, {
                        questionsList: q,
                        onToggle: function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : void 0,
                            n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : void 0,
                            c =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : void 0;
                          if ("numbers" === e)
                            (a = q).map(function (e) {
                              e.questionNumber == t &&
                                ((e.data = [1, 2, 3, 4, 5]),
                                (e.data.isComment = n));
                            }),
                              T(a);
                          else if ("custom" === e) {
                            if (void 0 === c)
                              (a = q).map(function (e) {
                                e.questionNumber == t + 1 &&
                                  (!0 === n || !1 === n
                                    ? (e.isComment = n)
                                    : e.data.push(n));
                              }),
                                T(a);
                            else
                              (a = q).map(function (e) {
                                e.questionNumber == t + 1 &&
                                  (e.data = e.data.filter(function (e) {
                                    return e != n;
                                  }));
                              }),
                                T(a);
                          } else if ("groups" === e) {
                            var a;
                            (a = q).map(function (e) {
                              e.questionNumber == t &&
                                (!0 === n || !1 === n
                                  ? (e.isComment = n)
                                  : (e.data = n));
                            }),
                              T(a);
                          }
                        },
                      }),
                      Object(m.jsx)(N, {
                        onCreate: function (e) {
                          var t = G;
                          V(G + 1),
                            T(
                              q.concat([
                                {
                                  questionNumber: t + 1,
                                  title: e,
                                  question_title: "",
                                  question_description: "",
                                  id: Date.now(),
                                  data: [],
                                  isComment: !1,
                                },
                              ])
                            );
                        },
                      }),
                      Object(m.jsxs)("div", {
                        className: "row",
                        children: [
                          "" == c.name.trim() &&
                            o &&
                            Object(m.jsx)("div", {
                              className:
                                "col-12 mt-2 justify-content-center text-center",
                              children: Object(m.jsxs)("div", {
                                className: "alert alert-info",
                                role: "alert",
                                children: [
                                  Object(m.jsx)(w.c, { size: 20 }),
                                  " \u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0438\u043c\u044f \u0444\u043e\u0440\u043c\u044b",
                                ],
                              }),
                            }),
                          "" != c.name.trim() &&
                            c.name.trim().length < 2 &&
                            o &&
                            Object(m.jsx)("div", {
                              className:
                                "col-12 mt-2 justify-content-center text-center",
                              children: Object(m.jsxs)("div", {
                                className: "alert alert-info",
                                role: "alert",
                                children: [
                                  Object(m.jsx)(w.c, { size: 20 }),
                                  " \u0418\u043c\u044f \u0444\u043e\u0440\u043c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0447\u0435 2 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",
                                ],
                              }),
                            }),
                          "" == c.description.trim() &&
                            o &&
                            Object(m.jsx)("div", {
                              className:
                                "col-12 justify-content-center text-center",
                              children: Object(m.jsxs)("div", {
                                className: "alert alert-info",
                                role: "alert",
                                children: [
                                  Object(m.jsx)(w.b, { size: 20 }),
                                  " \u0417\u0430\u0449\u0438\u0442\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c \u0444\u043e\u0440\u043c\u044b",
                                ],
                              }),
                            }),
                          "" != c.description.trim() &&
                            c.description.trim().length < 3 &&
                            o &&
                            Object(m.jsx)("div", {
                              className:
                                "col-12 mt-2 justify-content-center text-center",
                              children: Object(m.jsxs)("div", {
                                className: "alert alert-info",
                                role: "alert",
                                children: [
                                  Object(m.jsx)(w.c, { size: 20 }),
                                  " \u041f\u0430\u0440\u043e\u043b\u044c \u0444\u043e\u0440\u043c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0447\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",
                                ],
                              }),
                            }),
                          h &&
                            Object(m.jsx)("div", {
                              className:
                                "col-12 justify-content-center text-center",
                              children: Object(m.jsxs)("div", {
                                className: "alert alert-info",
                                role: "alert",
                                children: [
                                  o,
                                  Object(m.jsx)(w.d, { size: 20 }),
                                  " \u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0443\u0441\u0442\u044b\u0435 \u043f\u043e\u043b\u044f",
                                ],
                              }),
                            }),
                          f &&
                            Object(m.jsx)("div", {
                              className:
                                "col-12 justify-content-center text-center",
                              children: Object(m.jsxs)("div", {
                                className: "alert alert-info",
                                role: "alert",
                                children: [
                                  o,
                                  Object(m.jsx)(w.e, { size: 20 }),
                                  " \u041a\u0430\u0436\u0435\u0442\u0441\u044f \u0412\u044b \u0437\u0430\u0431\u044b\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b",
                                ],
                              }),
                            }),
                          "" == c.date.trim() &&
                            o &&
                            Object(m.jsx)("div", {
                              className:
                                "col-12 justify-content-center text-center",
                              children: Object(m.jsxs)("div", {
                                className: "alert alert-info",
                                role: "alert",
                                children: [
                                  o,
                                  Object(m.jsx)(w.a, { size: 20 }),
                                  " \u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u0430 \u0434\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",
                                  Object(m.jsx)("strong", {
                                    children:
                                      "\u0431\u0435\u0441\u0441\u0440\u043e\u0447\u043d\u043e",
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  Object(m.jsx)("div", {
                    className:
                      "col-12  d-lg-flex d-none justify-content-lg-center",
                    children: Object(m.jsx)("button", {
                      className: "btn btn-outline-secondary m-2",
                      onClick: D,
                      type: "submit",
                      children: "\u0421\u043e\u0437\u0434\u0430\u0442\u044c",
                    }),
                  }),
                  Object(m.jsx)("div", {
                    className: "col-12 text-center d-lg-none d-flex",
                    children: Object(m.jsx)("button", {
                      className: "btn btn-outline-secondary mt-2 mb-2 w-100",
                      onClick: D,
                      type: "submit",
                      children: "\u0421\u043e\u0437\u0434\u0430\u0442\u044c",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var k = function (e) {
        var t = a.a.useState(),
          n = Object(u.a)(t, 2),
          c = n[0],
          s = n[1];
        return (
          void 0 == c && e.onChange(e.data.question_name, "5"),
          Object(m.jsx)("div", {
            className: "card w-100 mb-3",
            children: Object(m.jsxs)("div", {
              className: "card-body",
              children: [
                Object(m.jsx)("h5", {
                  className: "card-title",
                  children: e.data.question_name,
                }),
                Object(m.jsx)("p", {
                  className: "card-text",
                  children: e.data.question_description,
                }),
                Object(m.jsxs)("div", {
                  class: "input-group mb-3",
                  children: [
                    Object(m.jsx)("div", {
                      class: "input-group-prepend",
                      children: Object(m.jsx)("label", {
                        class: "input-group-text",
                        for: "inputGroupSelect01",
                        children:
                          "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0446\u0435\u043d\u043a\u0443",
                      }),
                    }),
                    Object(m.jsxs)("select", {
                      class: "custom-select",
                      defaultValue: c,
                      onChange: function (t) {
                        s(t.target.value),
                          e.onChange(e.data.question_name, t.target.value);
                      },
                      children: [
                        Object(m.jsx)("option", {
                          selected: !0,
                          value: "5",
                          children: "5",
                        }),
                        Object(m.jsx)("option", { value: "4", children: "4" }),
                        Object(m.jsx)("option", { value: "3", children: "3" }),
                        Object(m.jsx)("option", { value: "2", children: "2" }),
                        Object(m.jsx)("option", { value: "1", children: "1" }),
                      ],
                    }),
                  ],
                }),
                e.data.question_comment
                  ? Object(m.jsxs)("div", {
                      class: "form-group",
                      children: [
                        Object(m.jsx)("label", {
                          for: "exampleFormControlTextarea1",
                          children:
                            "\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",
                        }),
                        Object(m.jsx)("textarea", {
                          onChange: function (t) {
                            e.onCommentChange(
                              e.data.question_name,
                              t.target.value
                            );
                          },
                          class: "form-control",
                          rows: "3",
                        }),
                      ],
                    })
                  : Object(m.jsx)("div", {}),
              ],
            }),
          })
        );
      };
      var q = function (e) {
        var t = a.a.useState(),
          n = Object(u.a)(t, 2),
          c = n[0],
          s = n[1],
          i = [],
          r = [];
        e.data.answers.map(function (e) {
          i.find(function (t) {
            return t.value == e.group;
          }) || i.push({ key: Math.random(), value: e.group });
        });
        var o = a.a.useState(i[0]),
          l = Object(u.a)(o, 2),
          d = l[0],
          j = l[1];
        e.data.answers.map(function (e) {
          r.push(e);
        });
        var b = [];
        r.map(function (e) {
          e.group == r[0].group && b.push(e.answer);
        }),
          void 0 == c && e.onChange(e.data.question_name, b[0]);
        var p = a.a.useState(b),
          h = Object(u.a)(p, 2),
          x = h[0],
          O = h[1];
        return Object(m.jsx)("div", {
          className: "card w-100 mb-3",
          children: Object(m.jsxs)("div", {
            className: "card-body",
            children: [
              Object(m.jsx)("h5", {
                className: "card-title",
                children: e.data.question_name,
              }),
              Object(m.jsx)("p", {
                className: "card-text",
                children: e.data.question_description,
              }),
              Object(m.jsxs)("div", {
                class: "input-group mb-3 justify-content-between",
                children: [
                  Object(m.jsxs)("div", {
                    className: "d-flex mb-2",
                    children: [
                      Object(m.jsx)("div", {
                        class: "input-group-prepend",
                        children: Object(m.jsx)("label", {
                          class: "input-group-text",
                          for: "inputGroupSelect01",
                          children:
                            "C\u043d\u0430\u0447\u0430\u043b\u0430 \u0442\u0443\u0442",
                        }),
                      }),
                      Object(m.jsx)("select", {
                        id: "select",
                        defaultValue: d,
                        onChange: function (e) {
                          var t = [];
                          j(e.target.value),
                            r.map(function (n) {
                              n.group == e.target.value && t.push(n.answer);
                            }),
                            O(t);
                        },
                        children: i.map(function (e) {
                          return Object(m.jsx)("option", {
                            value: e.value,
                            children: e.value,
                          });
                        }),
                      }),
                    ],
                  }),
                  Object(m.jsxs)("div", {
                    className: "d-flex mb-2",
                    children: [
                      Object(m.jsx)("div", {
                        class: "input-group-prepend",
                        children: Object(m.jsx)("label", {
                          class: "input-group-text",
                          for: "inputGroupSelect01",
                          children:
                            "\u0410 \u043f\u043e\u0442\u043e\u043c \u0442\u0443\u0442",
                        }),
                      }),
                      Object(m.jsxs)("select", {
                        id: "select",
                        onChange: function (t) {
                          s(t.target.value),
                            e.onChange(e.data.question_name, t.target.value);
                        },
                        children: [
                          Object(m.jsx)("option", {
                            value: "default",
                            children:
                              "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435",
                          }),
                          x.map(function (e) {
                            return Object(m.jsx)("option", {
                              value: e,
                              children: e,
                            });
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.data.question_comment
                ? Object(m.jsxs)("div", {
                    class: "form-group",
                    children: [
                      Object(m.jsx)("label", {
                        for: "exampleFormControlTextarea1",
                        children:
                          "\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",
                      }),
                      Object(m.jsx)("textarea", {
                        onChange: function (t) {
                          e.onCommentChange(
                            e.data.question_name,
                            t.target.value
                          );
                        },
                        class: "form-control",
                        rows: "3",
                      }),
                    ],
                  })
                : Object(m.jsx)("div", {}),
            ],
          }),
        });
      };
      var T = function (e) {
          var t = a.a.useState(),
            n = Object(u.a)(t, 2),
            c = n[0],
            s = n[1];
          return (
            void 0 == c &&
              e.onChange(e.data.question_name, e.data.answers[0].answer),
            Object(m.jsx)("div", {
              className: "card w-100 mb-3",
              children: Object(m.jsxs)("div", {
                className: "card-body",
                children: [
                  Object(m.jsx)("h5", {
                    className: "card-title",
                    children: e.data.question_name,
                  }),
                  Object(m.jsx)("p", {
                    className: "card-text",
                    children: e.data.question_description,
                  }),
                  Object(m.jsxs)("div", {
                    class: "input-group mb-3",
                    children: [
                      Object(m.jsx)("div", {
                        class: "input-group-prepend",
                        children: Object(m.jsx)("label", {
                          class: "input-group-text",
                          for: "inputGroupSelect01",
                          children:
                            "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0442\u0432\u0435\u0442",
                        }),
                      }),
                      Object(m.jsx)("select", {
                        class: "custom-select",
                        id: "inputGroupSelect01",
                        onChange: function (t) {
                          s(t.target.value),
                            e.onChange(e.data.question_name, t.target.value);
                        },
                        children: e.data.answers.map(function (e) {
                          return Object(m.jsx)("option", {
                            value: e.answer,
                            children: e.answer,
                          });
                        }),
                      }),
                    ],
                  }),
                  e.data.question_comment
                    ? Object(m.jsxs)("div", {
                        class: "form-group",
                        children: [
                          Object(m.jsx)("label", {
                            for: "exampleFormControlTextarea1",
                            children:
                              "\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",
                          }),
                          Object(m.jsx)("textarea", {
                            onChange: function (t) {
                              e.onCommentChange(
                                e.data.question_name,
                                t.target.value
                              );
                            },
                            class: "form-control",
                            rows: "3",
                          }),
                        ],
                      })
                    : Object(m.jsx)("div", {}),
                ],
              }),
            })
          );
        },
        I = n(71),
        B = n.n(I);
      var G = function (e) {
          var t = a.a.useState(!0),
            s = Object(u.a)(t, 2),
            i = s[0],
            r = s[1],
            o = a.a.useState(),
            l = Object(u.a)(o, 2),
            d = l[0],
            j = l[1],
            b = a.a.useState(new Map()),
            p = Object(u.a)(b, 2),
            h = p[0],
            x = p[1],
            O = a.a.useState(new Map()),
            v = Object(u.a)(O, 2),
            f = v[0],
            g = v[1],
            N = a.a.useState(!1),
            y = Object(u.a)(N, 2),
            w = y[0],
            _ = y[1];
          function S(e, t) {
            var n = h;
            void 0 == n.get(e) || n.delete(e), n.set(e, t), x(n);
          }
          function I(e, t) {
            var n = f;
            void 0 == n.get(e) || n.delete(e), n.set(e, t), g(n);
          }
          return (
            Object(c.useEffect)(function () {
              n(20)({
                method: "post",
                url: "http://188.225.83.42:8000/api/get_form",
                headers: {
                  Authorization:
                    "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
                  "Content-Type": "application/json",
                },
                data: JSON.stringify({ form_key: e.formKey }),
              })
                .then(function (e) {
                  var t = JSON.parse(e.data);
                  j(t), r(!1);
                  var n = t[0].date.slice(0, 10),
                    c = new Date().toISOString().slice(0, 10);
                  new Date(n) - new Date(c) < 0 && _(!0);
                })
                .catch(function (e) {
                  r(!1), console.log(e);
                });
            }, []),
            i
              ? Object(m.jsx)("div", { children: Object(m.jsx)(C, {}) })
              : Object(m.jsx)("div", {
                  className: "container mt-3",
                  children: Object(m.jsx)("div", {
                    className: "row",
                    children: Object(m.jsxs)("div", {
                      className: "col-12",
                      children: [
                        Object(m.jsx)("div", {
                          className: "text-center mb-3 h4",
                          children: d[0].form_name,
                        }),
                        d.map(function (e) {
                          return "numbers" == e.question_type
                            ? Object(m.jsx)(k, {
                                data: e,
                                onChange: S,
                                onCommentChange: I,
                              })
                            : "custom" == e.question_type
                            ? Object(m.jsx)(T, {
                                data: e,
                                onChange: S,
                                onCommentChange: I,
                              })
                            : "group" == e.question_type
                            ? Object(m.jsx)(q, {
                                data: e,
                                onChange: S,
                                onCommentChange: I,
                              })
                            : void 0;
                        }),
                        Object(m.jsx)("div", {
                          className: "w-100 text-center mb-3",
                          children:
                            1 == w
                              ? Object(m.jsx)("button", {
                                  className: "btn btn-secondary",
                                  disabled: !0,
                                  children:
                                    "\u0413\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u043e",
                                })
                              : Object(m.jsx)("div", {
                                  children:
                                    void 0 == B.a.get(e.formKey)
                                      ? Object(m.jsx)("button", {
                                          className: "btn btn-secondary",
                                          onClick: function () {
                                            var t = {
                                              form_key: e.formKey,
                                              answers: Object.fromEntries(h),
                                              comments: Object.fromEntries(f),
                                            };
                                            n(20)({
                                              method: "post",
                                              url: "http://188.225.83.42:8000/api/send_form",
                                              headers: {
                                                Authorization:
                                                  "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
                                                "Content-Type":
                                                  "application/json",
                                              },
                                              data: t,
                                            })
                                              .then(function (t) {
                                                B.a.set(e.formKey, !0),
                                                  (document.location.href =
                                                    "http://anketa-pvi.ru/results/" +
                                                    e.formKey);
                                              })
                                              .catch(function (e) {
                                                console.log(e);
                                              });
                                          },
                                          children:
                                            "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",
                                        })
                                      : Object(m.jsx)("button", {
                                          className: "btn btn-secondary",
                                          disabled: !0,
                                          children:
                                            "\u0412\u044b \u0443\u0436\u0435 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043b\u0438",
                                        }),
                                }),
                        }),
                      ],
                    }),
                  }),
                })
          );
        },
        V = n(40),
        F = { scales: { yAxes: [{ ticks: { beginAtZero: !0 } }] } };
      var P = function (e) {
          var t = a.a.useState(!0),
            s = Object(u.a)(t, 2),
            i = s[0],
            r = s[1],
            o = a.a.useState(),
            l = Object(u.a)(o, 2),
            d = l[0],
            j = l[1];
          return (
            (document.title =
              "VF | \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"),
            Object(c.useEffect)(function () {
              n(20)({
                method: "post",
                url: "http://188.225.83.42:8000/api/get_form_public_results",
                headers: {
                  Authorization:
                    "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
                  "Content-Type": "application/json",
                },
                data: JSON.stringify({ form_key: e.formKey }),
              })
                .then(function (e) {
                  var t = e.data;
                  j(t), r(!1);
                })
                .catch(function (e) {
                  r(!1), console.log(e);
                });
            }, []),
            i
              ? Object(m.jsx)("div", { children: Object(m.jsx)(C, {}) })
              : Object(m.jsx)("div", {
                  className: "container mt-3",
                  children: Object(m.jsxs)("div", {
                    className: "row",
                    children: [
                      Object(m.jsx)("div", {
                        className: "w-100 text-center h3",
                        children:
                          "\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",
                      }),
                      d.questions.map(function (e) {
                        for (
                          var t = e.answers, n = {}, c = 0;
                          c < t.length;
                          ++c
                        ) {
                          var a = t[c];
                          void 0 != n[a] ? ++n[a] : (n[a] = 1);
                        }
                        return Object(m.jsx)("div", {
                          className: "col-12 col-lg-6",
                          children: Object(m.jsx)(V.a, {
                            data: {
                              labels: Object.keys(n),
                              datasets: [
                                {
                                  label: e.question,
                                  backgroundColor: "#6c757d",
                                  data: Object.values(n),
                                },
                              ],
                            },
                            options: F,
                          }),
                        });
                      }),
                    ],
                  }),
                })
          );
        },
        J = function () {
          return Object(m.jsx)("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              margin: ".5rem",
            },
            children: Object(m.jsxs)("div", {
              class: "lds-facebook",
              children: [
                Object(m.jsx)("div", {}),
                Object(m.jsx)("div", {}),
                Object(m.jsx)("div", {}),
              ],
            }),
          });
        },
        E = { scales: { yAxes: [{ ticks: { beginAtZero: !0 } }] } };
      var X = function (e) {
        var t = a.a.useState(!0),
          s = Object(u.a)(t, 2),
          i = s[0],
          r = s[1],
          o = a.a.useState(),
          l = Object(u.a)(o, 2),
          d = l[0],
          j = l[1],
          b = a.a.useState(""),
          p = Object(u.a)(b, 2),
          h = p[0],
          x = p[1];
        return (
          Object(c.useEffect)(function () {
            n(20)({
              method: "post",
              url: "http://188.225.83.42:8000/api/get_form_private_results",
              headers: {
                Authorization:
                  "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
                "Content-Type": "application/json",
              },
              data: JSON.stringify({ form_key: e.formKey }),
            })
              .then(function (e) {
                var t = e.data;
                j(t), x(t.file_link), r(!1);
              })
              .catch(function (e) {
                r(!1), console.log(e);
              });
          }, []),
          i
            ? Object(m.jsx)("div", { children: Object(m.jsx)(C, {}) })
            : Object(m.jsxs)("div", {
                className: "container mt-3",
                children: [
                  Object(m.jsxs)("div", {
                    className: "row",
                    children: [
                      Object(m.jsx)("div", {
                        className: "w-100 text-center h3",
                        children:
                          "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",
                      }),
                      d.questions.map(function (e) {
                        for (
                          var t = e.answers, n = {}, c = 0;
                          c < t.length;
                          ++c
                        ) {
                          var a = t[c];
                          void 0 != n[a] ? ++n[a] : (n[a] = 1);
                        }
                        return Object(m.jsx)("div", {
                          className: "col-12 col-lg-6",
                          children: Object(m.jsx)(V.a, {
                            data: {
                              labels: Object.keys(n),
                              datasets: [
                                {
                                  label: e.question,
                                  backgroundColor: "#6c757d",
                                  data: Object.values(n),
                                },
                              ],
                            },
                            options: E,
                          }),
                        });
                      }),
                    ],
                  }),
                  Object(m.jsx)("div", {
                    className: "w-100 text-center",
                    children: Object(m.jsx)("a", {
                      href: h,
                      className: "btn btn-outline-secondary",
                      children:
                        "\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0442\u0441\u0442\u0438\u043a\u0443",
                    }),
                  }),
                ],
              })
        );
      };
      var z = function (e) {
          document.title =
            "VF | \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430";
          var t = a.a.useState(""),
            c = Object(u.a)(t, 2),
            s = c[0],
            i = c[1],
            r = a.a.useState(""),
            o = Object(u.a)(r, 2),
            l = o[0],
            d = o[1],
            j = a.a.useState(!1),
            b = Object(u.a)(j, 2),
            p = b[0],
            h = b[1],
            x = a.a.useState(!1),
            O = Object(u.a)(x, 2),
            v = O[0],
            f = O[1],
            g = a.a.useState(!1),
            N = Object(u.a)(g, 2),
            y = N[0],
            C = N[1],
            w = a.a.useState(),
            _ = Object(u.a)(w, 2),
            S = _[0],
            k = _[1],
            q = a.a.useState(!1),
            T = Object(u.a)(q, 2),
            I = T[0],
            B = T[1],
            G = a.a.useState([
              "#pa$$word$",
              "%passw0rd!",
              "@pa$$word|",
              "+passw0rd-",
              "-pa$$word#",
              "+password&",
              "!pa$$ord@",
              "$passw0rd+",
              "^password%",
              "|passw0rd(",
            ]),
            V = Object(u.a)(G, 2),
            F = V[0];
          return (
            V[1],
            y && void 0 != S
              ? Object(m.jsx)("div", {
                  children: Object(m.jsx)(X, { formKey: S }),
                })
              : Object(m.jsx)("div", {
                  className: "container mt-3 mt-lg-5",
                  children: Object(m.jsx)("div", {
                    className: "row",
                    children: Object(m.jsx)("div", {
                      className: "col-12",
                      children: Object(m.jsxs)("div", {
                        children: [
                          Object(m.jsx)("p", {
                            className: "h3 text-center",
                            children:
                              "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438",
                          }),
                          Object(m.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(m.jsx)("label", {
                                children:
                                  "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u043e\u0440\u043c\u044b",
                              }),
                              Object(m.jsx)("input", {
                                type: "email",
                                className: "form-control",
                                placeholder:
                                  "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u0430\u0448\u0435\u0439 \u0444\u043e\u0440\u043c\u044b",
                                onChange: function (e) {
                                  i(e.target.value);
                                },
                                defaultValue: s,
                              }),
                            ],
                          }),
                          Object(m.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(m.jsx)("label", {
                                children:
                                  "\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0442 \u0444\u043e\u0440\u043c\u044b",
                              }),
                              Object(m.jsx)("input", {
                                type: "password",
                                className: "form-control",
                                placeholder:
                                  "\u0412\u0430\u0448 \u043e\u0447\u0435\u043d\u044c \u043d\u0430\u0434\u0451\u0436\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
                                onChange: function (e) {
                                  d(e.target.value);
                                },
                                defaultValue: l,
                              }),
                              Object(m.jsxs)("small", {
                                className: "form-text text-muted",
                                children: [
                                  "( \u2022_\u2022) ",
                                  F[
                                    (function (e, t) {
                                      var n =
                                        e - 0.5 + Math.random() * (t - e + 1);
                                      return Math.round(n);
                                    })(0, 9)
                                  ],
                                  " (\u2022_\u2022 )",
                                ],
                              }),
                            ],
                          }),
                          Object(m.jsxs)("div", {
                            className: "form-check mb-2",
                            children: [
                              Object(m.jsx)("input", {
                                type: "checkbox",
                                className: "form-check-input",
                                onChange: function () {
                                  h(!p);
                                },
                                defaultValue: p,
                              }),
                              Object(m.jsx)("label", {
                                className: "form-check-label",
                                children:
                                  "\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",
                              }),
                            ],
                          }),
                          Object(m.jsxs)("div", {
                            className: "w-100 text-center",
                            children: [
                              v
                                ? Object(m.jsx)("div", {
                                    class: "alert alert-primary",
                                    role: "alert",
                                    children:
                                      "\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",
                                  })
                                : Object(m.jsx)("div", {}),
                              I
                                ? Object(m.jsx)(J, {})
                                : Object(m.jsx)("button", {
                                    type: "submit",
                                    className: "btn btn-secondary",
                                    onClick: function () {
                                      var e, t;
                                      (e = s),
                                        (t = l),
                                        B(!0),
                                        n(20)({
                                          method: "post",
                                          url: "http://188.225.83.42:8000/api/login_private_stats",
                                          headers: {
                                            Authorization:
                                              "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
                                            "Content-Type": "application/json",
                                          },
                                          data: JSON.stringify({
                                            form_name: e,
                                            password: t,
                                          }),
                                        })
                                          .then(function (e) {
                                            "Failed" == e.data
                                              ? f(!0)
                                              : (f(!1), C(!0), k(e.data)),
                                              B(!1);
                                          })
                                          .catch(function (e) {
                                            B(!1), console.log(e);
                                          });
                                    },
                                    children: "\u0412\u043e\u0439\u0442\u0438",
                                  }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                })
          );
        },
        M = (n(243), n.p + "static/media/build2.f613bad6.gif");
      var Q = function (e) {
        return Object(m.jsx)("div", {
          className: "container mt-3",
          children: Object(m.jsxs)("div", {
            className: "row",
            children: [
              Object(m.jsx)("div", {
                className: "w-100 text-center h3 mt-3",
                children:
                  "\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435",
              }),
              Object(m.jsx)("div", {
                class: "col-12 text-center",
                children: Object(m.jsx)("img", { src: M }),
              }),
            ],
          }),
        });
      };
      function D() {
        var e = { fontSize: "20px" };
        return (
          (document.title = "VoteForms"),
          Object(m.jsx)("div", {
            children: Object(m.jsxs)(r.a, {
              children: [
                Object(m.jsxs)(d.a, {
                  collapseOnSelect: !0,
                  expand: "lg",
                  bg: "dark",
                  variant: "dark",
                  children: [
                    Object(m.jsx)(d.a.Brand, {
                      children: Object(m.jsx)(r.b, {
                        style: {
                          fontSize: "32px",
                          color: "white",
                          outline: "none",
                        },
                        to: "/",
                        children: "Vote Forms",
                      }),
                    }),
                    Object(m.jsx)(d.a.Toggle, {
                      "aria-controls": "responsive-navbar-nav",
                    }),
                    Object(m.jsxs)(d.a.Collapse, {
                      id: "responsive-navbar-nav",
                      children: [
                        Object(m.jsx)(l.a, { className: "mr-auto" }),
                        Object(m.jsxs)(l.a, {
                          children: [
                            Object(m.jsx)(l.a.Link, {
                              children: Object(m.jsx)(r.b, {
                                style: e,
                                to: "/constructor",
                                className: "nav-link active h4",
                                children:
                                  "\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440",
                              }),
                            }),
                            Object(m.jsx)(l.a.Link, {
                              children: Object(m.jsx)(r.b, {
                                style: e,
                                to: "/edit",
                                className: "nav-link active h4",
                                children:
                                  "\u0420\u0435\u0434\u0430\u043a\u0446\u0438\u044f",
                              }),
                            }),
                            Object(m.jsx)(l.a.Link, {
                              children: Object(m.jsx)(r.b, {
                                style: e,
                                to: "/stats",
                                className: "nav-link active h4",
                                children:
                                  "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(m.jsxs)(o.c, {
                  children: [
                    Object(m.jsx)(o.a, {
                      exact: !0,
                      path: "/results/:a([0-9]+)",
                      render: function (e) {
                        var t = e.match;
                        return Object(m.jsx)(P, { formKey: t.params.a });
                      },
                    }),
                    Object(m.jsx)(o.a, {
                      exact: !0,
                      path: "/:a([0-9]+)",
                      render: function (e) {
                        var t = e.match;
                        return Object(m.jsx)(G, { formKey: t.params.a });
                      },
                    }),
                    Object(m.jsx)(o.a, {
                      path: "/constructor",
                      children: Object(m.jsx)(S, {}),
                    }),
                    Object(m.jsx)(o.a, {
                      path: "/edit",
                      children: Object(m.jsx)(Q, {}),
                    }),
                    Object(m.jsx)(o.a, {
                      path: "/stats",
                      children: Object(m.jsx)(z, {}),
                    }),
                    Object(m.jsx)(o.a, {
                      path: "/",
                      children: Object(m.jsx)(Y, {}),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function Y() {
        return Object(m.jsx)("div", {
          class: "jumbotron jumbotron-fluid",
          children: Object(m.jsxs)("div", {
            class: "container",
            children: [
              Object(m.jsx)("h1", {
                class: "display-4",
                children: "\u041e\u043f\u0430\u0447\u043a\u0438!",
              }),
              Object(m.jsx)("p", {
                class: "lead",
                children:
                  "\u0422\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 :)",
              }),
            ],
          }),
        });
      }
      var A = function (e) {
        e &&
          e instanceof Function &&
          n
            .e(5)
            .then(n.bind(null, 284))
            .then(function (t) {
              var n = t.getCLS,
                c = t.getFID,
                a = t.getFCP,
                s = t.getLCP,
                i = t.getTTFB;
              n(e), c(e), a(e), s(e), i(e);
            });
      };
      i.a.render(
        Object(m.jsx)(a.a.StrictMode, { children: Object(m.jsx)(D, {}) }),
        document.getElementById("root")
      ),
        A();
    },
  },
  [[250, 1, 2]],
]);
//# sourceMappingURL=main.85d576eb.chunk.js.map
