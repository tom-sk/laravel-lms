function p(o, e, r, c, n, i, l, _) {
    var t = typeof o == "function" ? o.options : o;
    e && ((t.render = e), (t.staticRenderFns = r), (t._compiled = !0)),
        c && (t.functional = !0),
        i && (t._scopeId = "data-v-" + i);
    var a;
    if (
        (l
            ? ((a = function (s) {
                  (s =
                      s ||
                      (this.$vnode && this.$vnode.ssrContext) ||
                      (this.parent &&
                          this.parent.$vnode &&
                          this.parent.$vnode.ssrContext)),
                      !s &&
                          typeof __VUE_SSR_CONTEXT__ < "u" &&
                          (s = __VUE_SSR_CONTEXT__),
                      n && n.call(this, s),
                      s &&
                          s._registeredComponents &&
                          s._registeredComponents.add(l);
              }),
              (t._ssrRegister = a))
            : n &&
              (a = _
                  ? function () {
                        n.call(
                            this,
                            (t.functional ? this.parent : this).$root.$options
                                .shadowRoot
                        );
                    }
                  : n),
        a)
    )
        if (t.functional) {
            t._injectStyles = a;
            var f = t.render;
            t.render = function (h, d) {
                return a.call(d), f(h, d);
            };
        } else {
            var u = t.beforeCreate;
            t.beforeCreate = u ? [].concat(u, a) : [a];
        }
    return { exports: o, options: t };
}
const v = {
    mixins: [Fieldtype],
    data() {
        return { show: !1 };
    },
    computed: {
        inputType() {
            return this.show ? "text" : "password";
        },
    },
};
var m = function () {
        var e = this,
            r = e._self._c;
        return r(
            "div",
            [
                r("text-input", {
                    attrs: { type: e.inputType, value: e.value },
                    on: { input: e.updateDebounced },
                }),
                r("label", [
                    r("input", {
                        directives: [
                            {
                                name: "model",
                                rawName: "v-model",
                                value: e.show,
                                expression: "show",
                            },
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                            checked: Array.isArray(e.show)
                                ? e._i(e.show, null) > -1
                                : e.show,
                        },
                        on: {
                            change: function (c) {
                                var n = e.show,
                                    i = c.target,
                                    l = !!i.checked;
                                if (Array.isArray(n)) {
                                    var _ = null,
                                        t = e._i(n, _);
                                    i.checked
                                        ? t < 0 && (e.show = n.concat([_]))
                                        : t > -1 &&
                                          (e.show = n
                                              .slice(0, t)
                                              .concat(n.slice(t + 1)));
                                } else e.show = l;
                            },
                        },
                    }),
                    e._v(" Show Password"),
                ]),
            ],
            1
        );
    },
    w = [],
    y = p(v, m, w, !1, null, null, null, null);
const $ = y.exports,
    C = {
        mixins: [Fieldtype],
        data() {
            return {};
        },
    };
var g = function () {
        var e = this,
            r = e._self._c;
        return r(
            "div",
            { staticClass: "example-fieldtype-container" },
            [
                e._v(" This is the example feild type!!! "),
                r("text-input", {
                    attrs: { value: e.value },
                    on: { input: e.update },
                }),
            ],
            1
        );
    },
    R = [],
    T = p(C, g, R, !1, null, null, null, null);
const b = T.exports;
Statamic.booting(() => {
    Statamic.$components.register("toggle_password-fieldtype", $),
        Statamic.$components.register("example-fieldtype", b);
});
