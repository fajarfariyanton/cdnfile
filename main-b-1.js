/*<script>*/
/*!
 * jQuery JavaScript Library v2.0.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:30Z
 */
!function (a, b) {
    function c(a) {
        var b = a.length, c = fb.type(a);
        return fb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a) {
        var b = ob[a] = {};
        return fb.each(a.match(hb) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function e() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = fb.expando + Math.random()
    }

    function f(a, c, d) {
        var e;
        if (d === b && 1 === a.nodeType)if (e = "data-" + c.replace(sb, "-$1").toLowerCase(), d = a.getAttribute(e), "string" == typeof d) {
            try {
                d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : rb.test(d) ? JSON.parse(d) : d
            } catch (f) {
            }
            pb.set(a, c, d)
        } else d = b;
        return d
    }

    function g() {
        return !0
    }

    function h() {
        return !1
    }

    function i() {
        try {
            return T.activeElement
        } catch (a) {
        }
    }

    function j(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function k(a, b, c) {
        if (fb.isFunction(b))return fb.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType)return fb.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Cb.test(b))return fb.filter(b, a, c);
            b = fb.filter(b, a)
        }
        return fb.grep(a, function (a) {
            return bb.call(b, a) >= 0 !== c
        })
    }

    function l(a, b) {
        return fb.nodeName(a, "table") && fb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function m(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function n(a) {
        var b = Nb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function o(a, b) {
        for (var c = a.length, d = 0; c > d; d++)qb.set(a[d], "globalEval", !b || qb.get(b[d], "globalEval"))
    }

    function p(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (qb.hasData(a) && (f = qb.access(a), g = qb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)for (c = 0, d = j[e].length; d > c; c++)fb.event.add(b, e, j[e][c])
            }
            pb.hasData(a) && (h = pb.access(a), i = fb.extend({}, h), pb.set(b, i))
        }
    }

    function q(a, c) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return c === b || c && fb.nodeName(a, c) ? fb.merge([a], d) : d
    }

    function r(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Kb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function s(a, b) {
        if (b in a)return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = _b.length; e--;)if (b = _b[e] + c, b in a)return b;
        return d
    }

    function t(a, b) {
        return a = b || a, "none" === fb.css(a, "display") || !fb.contains(a.ownerDocument, a)
    }

    function u(b) {
        return a.getComputedStyle(b, null)
    }

    function v(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = qb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && t(d) && (f[g] = qb.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), (c && "none" !== c || !e) && qb.set(d, "olddisplay", e ? c : fb.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function w(a, b, c) {
        var d = Ub.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function x(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += fb.css(a, c + $b[f], !0, e)), d ? ("content" === c && (g -= fb.css(a, "padding" + $b[f], !0, e)), "margin" !== c && (g -= fb.css(a, "border" + $b[f] + "Width", !0, e))) : (g += fb.css(a, "padding" + $b[f], !0, e), "padding" !== c && (g += fb.css(a, "border" + $b[f] + "Width", !0, e)));
        return g
    }

    function y(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = u(a), g = fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Qb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Vb.test(e))return e;
            d = g && (fb.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function z(a) {
        var b = T, c = Xb[a];
        return c || (c = A(a, b), "none" !== c && c || (Rb = (Rb || fb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (Rb[0].contentWindow || Rb[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = A(a, b), Rb.detach()), Xb[a] = c), c
    }

    function A(a, b) {
        var c = fb(b.createElement(a)).appendTo(b.body), d = fb.css(c[0], "display");
        return c.remove(), d
    }

    function B(a, b, c, d) {
        var e;
        if (fb.isArray(b))fb.each(b, function (b, e) {
            c || bc.test(a) ? d(a, e) : B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== fb.type(b))d(a, b); else for (e in b)B(a + "[" + e + "]", b[e], c, d)
    }

    function C(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(hb) || [];
            if (fb.isFunction(c))for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function D(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, fb.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }

        var f = {}, g = a === sc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function E(a, c) {
        var d, e, f = fb.ajaxSettings.flatOptions || {};
        for (d in c)c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        return e && fb.extend(!0, a, e), a
    }

    function F(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes; "*" === j[0];)j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
        if (e)for (f in i)if (i[f] && i[f].test(e)) {
            j.unshift(f);
            break
        }
        if (j[0]in d)g = j[0]; else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function G(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"])b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    function H() {
        return setTimeout(function () {
            Bc = b
        }), Bc = fb.now()
    }

    function I(a, b, c) {
        for (var d, e = (Hc[b] || []).concat(Hc["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function J(a, b, c) {
        var d, e, f = 0, g = Gc.length, h = fb.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return !1;
            for (var b = Bc || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: fb.extend({}, b),
            opts: fb.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Bc || H(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = fb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; d > c; c++)j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (K(k, j.opts.specialEasing); g > f; f++)if (d = Gc[f].call(j, a, k, j.opts))return d;
        return fb.map(k, I, j), fb.isFunction(j.opts.start) && j.opts.start.call(a, j), fb.fx.timer(fb.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function K(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = fb.camelCase(c), e = b[d], f = a[c], fb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fb.cssHooks[d], g && "expand"in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function L(a, c, d) {
        var e, f, g, h, i, j, k = this, l = {}, m = a.style, n = a.nodeType && t(a), o = qb.get(a, "fxshow");
        d.queue || (i = fb._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, j = i.empty.fire, i.empty.fire = function () {
            i.unqueued || j()
        }), i.unqueued++, k.always(function () {
            k.always(function () {
                i.unqueued--, fb.queue(a, "fx").length || i.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in c || "width"in c) && (d.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === fb.css(a, "display") && "none" === fb.css(a, "float") && (m.display = "inline-block")), d.overflow && (m.overflow = "hidden", k.always(function () {
            m.overflow = d.overflow[0], m.overflowX = d.overflow[1], m.overflowY = d.overflow[2]
        }));
        for (e in c)if (f = c[e], Dc.exec(f)) {
            if (delete c[e], g = g || "toggle" === f, f === (n ? "hide" : "show")) {
                if ("show" !== f || !o || o[e] === b)continue;
                n = !0
            }
            l[e] = o && o[e] || fb.style(a, e)
        }
        if (!fb.isEmptyObject(l)) {
            o ? "hidden"in o && (n = o.hidden) : o = qb.access(a, "fxshow", {}), g && (o.hidden = !n), n ? fb(a).show() : k.done(function () {
                fb(a).hide()
            }), k.done(function () {
                var b;
                qb.remove(a, "fxshow");
                for (b in l)fb.style(a, b, l[b])
            });
            for (e in l)h = I(n ? o[e] : 0, e, k), e in o || (o[e] = h.start, n && (h.end = h.start, h.start = "width" === e || "height" === e ? 1 : 0))
        }
    }

    function M(a, b, c, d, e) {
        return new M.prototype.init(a, b, c, d, e)
    }

    function N(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = $b[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function O(a) {
        return fb.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    var P, Q, R = typeof b, S = a.location, T = a.document, U = T.documentElement, V = a.jQuery, W = a.$, X = {}, Y = [], Z = "2.0.3", $ = Y.concat, _ = Y.push, ab = Y.slice, bb = Y.indexOf, cb = X.toString, db = X.hasOwnProperty, eb = Z.trim, fb = function (a, b) {
        return new fb.fn.init(a, b, P)
    }, gb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, hb = /\S+/g, ib = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, jb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, kb = /^-ms-/, lb = /-([\da-z])/gi, mb = function (a, b) {
        return b.toUpperCase()
    }, nb = function () {
        T.removeEventListener("DOMContentLoaded", nb, !1), a.removeEventListener("load", nb, !1), fb.ready()
    };
    fb.fn = fb.prototype = {
        jquery: Z, constructor: fb, init: function (a, c, d) {
            var e, f;
            if (!a)return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ib.exec(a), !e || !e[1] && c)return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof fb ? c[0] : c, fb.merge(this, fb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : T, !0)), jb.test(e[1]) && fb.isPlainObject(c))for (e in c)fb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this
                }
                return f = T.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = T, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), fb.makeArray(a, this))
        }, selector: "", length: 0, toArray: function () {
            return ab.call(this)
        }, get: function (a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        }, pushStack: function (a) {
            var b = fb.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return fb.each(this, a, b)
        }, ready: function (a) {
            return fb.ready.promise().done(a), this
        }, slice: function () {
            return this.pushStack(ab.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, map: function (a) {
            return this.pushStack(fb.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: _, sort: [].sort, splice: [].splice
    }, fb.fn.init.prototype = fb.fn, fb.extend = fb.fn.extend = function () {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || fb.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)if (null != (a = arguments[i]))for (c in a)d = h[c], e = a[c], h !== e && (k && e && (fb.isPlainObject(e) || (f = fb.isArray(e))) ? (f ? (f = !1, g = d && fb.isArray(d) ? d : []) : g = d && fb.isPlainObject(d) ? d : {}, h[c] = fb.extend(k, g, e)) : e !== b && (h[c] = e));
        return h
    }, fb.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""), noConflict: function (b) {
            return a.$ === fb && (a.$ = W), b && a.jQuery === fb && (a.jQuery = V), fb
        }, isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? fb.readyWait++ : fb.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --fb.readyWait : fb.isReady) || (fb.isReady = !0, a !== !0 && --fb.readyWait > 0 || (Q.resolveWith(T, [fb]), fb.fn.trigger && fb(T).trigger("ready").off("ready")))
        }, isFunction: function (a) {
            return "function" === fb.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, type: function (a) {
            return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? X[cb.call(a)] || "object" : typeof a
        }, isPlainObject: function (a) {
            if ("object" !== fb.type(a) || a.nodeType || fb.isWindow(a))return !1;
            try {
                if (a.constructor && !db.call(a.constructor.prototype, "isPrototypeOf"))return !1
            } catch (b) {
                return !1
            }
            return !0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, error: function (a) {
            throw new Error(a)
        }, parseHTML: function (a, b, c) {
            if (!a || "string" != typeof a)return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || T;
            var d = jb.exec(a), e = !c && [];
            return d ? [b.createElement(d[1])] : (d = fb.buildFragment([a], b, e), e && fb(e).remove(), fb.merge([], d.childNodes))
        }, parseJSON: JSON.parse, parseXML: function (a) {
            var c, d;
            if (!a || "string" != typeof a)return null;
            try {
                d = new DOMParser, c = d.parseFromString(a, "text/xml")
            } catch (e) {
                c = b
            }
            return (!c || c.getElementsByTagName("parsererror").length) && fb.error("Invalid XML: " + a), c
        }, noop: function () {
        }, globalEval: function (a) {
            var b, c = eval;
            a = fb.trim(a), a && (1 === a.indexOf("use strict") ? (b = T.createElement("script"), b.text = a, T.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(kb, "ms-").replace(lb, mb)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h)for (; g > f && (e = b.apply(a[f], d), e !== !1); f++); else for (f in a)if (e = b.apply(a[f], d), e === !1)break
            } else if (h)for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++); else for (f in a)if (e = b.call(a[f], f, a[f]), e === !1)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : eb.call(a)
        }, makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fb.merge(d, "string" == typeof a ? [a] : a) : _.call(d, a)), d
        }, inArray: function (a, b, c) {
            return null == b ? -1 : bb.call(b, a, c)
        }, merge: function (a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d)for (; d > f; f++)a[e++] = c[f]; else for (; c[f] !== b;)a[e++] = c[f++];
            return a.length = e, a
        }, grep: function (a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; g > f; f++)d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        }, map: function (a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)for (; g > f; f++)e = b(a[f], f, d), null != e && (i[i.length] = e); else for (f in a)e = b(a[f], f, d), null != e && (i[i.length] = e);
            return $.apply([], i)
        }, guid: 1, proxy: function (a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c], c = a, a = d), fb.isFunction(a) ? (e = ab.call(arguments, 2), f = function () {
                return a.apply(c || this, e.concat(ab.call(arguments)))
            }, f.guid = a.guid = a.guid || fb.guid++, f) : b
        }, access: function (a, c, d, e, f, g, h) {
            var i = 0, j = a.length, k = null == d;
            if ("object" === fb.type(d)) {
                f = !0;
                for (i in d)fb.access(a, c, i, d[i], !0, g, h)
            } else if (e !== b && (f = !0, fb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function (a, b, c) {
                    return k.call(fb(a), c)
                })), c))for (; j > i; i++)c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
        }, now: Date.now, swap: function (a, b, c, d) {
            var e, f, g = {};
            for (f in b)g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)a.style[f] = g[f];
            return e
        }
    }), fb.ready.promise = function (b) {
        return Q || (Q = fb.Deferred(), "complete" === T.readyState ? setTimeout(fb.ready) : (T.addEventListener("DOMContentLoaded", nb, !1), a.addEventListener("load", nb, !1))), Q.promise(b)
    }, fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        X["[object " + b + "]"] = b.toLowerCase()
    }), P = fb(T), /*!
     * Sizzle CSS Selector Engine v1.9.4-pre
     * http://sizzlejs.com/
     *
     * Copyright 2013 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2013-06-03
     */
        function (a, b) {
            function c(a, b, c, d) {
                var e, f, g, h, i, j, k, l, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a)return c;
                if (1 !== (h = b.nodeType) && 9 !== h)return [];
                if (I && !d) {
                    if (e = tb.exec(a))if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode)return c;
                            if (f.id === g)return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)return c.push(f), c
                    } else {
                        if (e[2])return ab.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName)return ab.apply(c, b.getElementsByClassName(g)), c
                    }
                    if (x.qsa && (!J || !J.test(a))) {
                        if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wb, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;)j[i] = l + n(j[i]);
                            o = nb.test(a) && b.parentNode || b, p = j.join(",")
                        }
                        if (p)try {
                            return ab.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {
                        } finally {
                            k || b.removeAttribute("id")
                        }
                    }
                }
                return v(a.replace(kb, "$1"), b, c, d)
            }

            function d() {
                function a(c, d) {
                    return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d
                }

                var b = [];
                return a
            }

            function e(a) {
                return a[N] = !0, a
            }

            function f(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function g(a, b) {
                for (var c = a.split("|"), d = a.length; d--;)z.attrHandle[c[d]] = b
            }

            function h(a, b) {
                var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
                if (d)return d;
                if (c)for (; c = c.nextSibling;)if (c === b)return -1;
                return a ? 1 : -1
            }

            function i(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function j(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function k(a) {
                return e(function (b) {
                    return b = +b, e(function (c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function l() {
            }

            function m(a, b) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k)return b ? 0 : k.slice(0);
                for (h = a, i = [], j = z.preFilter; h;) {
                    (!d || (e = lb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = mb.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(kb, " ")
                    }), h = h.slice(d.length));
                    for (g in z.filter)!(e = rb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d)break
                }
                return b ? h.length : h ? c.error(a) : S(a, i).slice(0)
            }

            function n(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
                return d
            }

            function o(a, b, c) {
                var d = b.dir, e = c && "parentNode" === d, f = Q++;
                return b.first ? function (b, c, f) {
                    for (; b = b[d];)if (1 === b.nodeType || e)return a(b, c, f)
                } : function (b, c, g) {
                    var h, i, j, k = P + " " + f;
                    if (g) {
                        for (; b = b[d];)if ((1 === b.nodeType || e) && a(b, c, g))return !0
                    } else for (; b = b[d];)if (1 === b.nodeType || e)if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                        if ((h = i[1]) === !0 || h === y)return h === !0
                    } else if (i = j[d] = [k], i[1] = a(b, c, g) || y, i[1] === !0)return !0
                }
            }

            function p(a) {
                return a.length > 1 ? function (b, c, d) {
                    for (var e = a.length; e--;)if (!a[e](b, c, d))return !1;
                    return !0
                } : a[0]
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function r(a, b, c, d, f, g) {
                return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function (e, g, h, i) {
                    var j, k, l, m = [], n = [], o = g.length, p = e || u(b || "*", h.nodeType ? [h] : h, []), r = !a || !e && b ? p : q(p, m, a, h, i), s = c ? f || (e ? a : o || d) ? [] : g : r;
                    if (c && c(r, s, h, i), d)for (j = q(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                    if (e) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                                f(null, s = [], j, i)
                            }
                            for (k = s.length; k--;)(l = s[k]) && (j = f ? cb.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                        }
                    } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : ab.apply(g, s)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function (a) {
                    return a === b
                }, g, !0), j = o(function (a) {
                    return cb.call(b, a) > -1
                }, g, !0), k = [function (a, c, d) {
                    return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                }]; e > h; h++)if (c = z.relative[a[h].type])k = [o(p(k), c)]; else {
                    if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !z.relative[a[d].type]; d++);
                        return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(kb, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                    }
                    k.push(c)
                }
                return p(k)
            }

            function t(a, b) {
                var d = 0, f = b.length > 0, g = a.length > 0, h = function (e, h, i, j, k) {
                    var l, m, n, o = [], p = 0, r = "0", s = e && [], t = null != k, u = D, v = e || g && z.find.TAG("*", k && h.parentNode || h), w = P += null == u ? 1 : Math.random() || .1;
                    for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                        if (g && l) {
                            for (m = 0; n = a[m++];)if (n(l, h, i)) {
                                j.push(l);
                                break
                            }
                            t && (P = w, y = ++d)
                        }
                        f && ((l = !n && l) && p--, e && s.push(l))
                    }
                    if (p += r, f && r !== p) {
                        for (m = 0; n = b[m++];)n(s, o, h, i);
                        if (e) {
                            if (p > 0)for (; r--;)s[r] || o[r] || (o[r] = $.call(j));
                            o = q(o)
                        }
                        ab.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                    }
                    return t && (P = w, D = u), s
                };
                return f ? e(h) : h
            }

            function u(a, b, d) {
                for (var e = 0, f = b.length; f > e; e++)c(a, b[e], d);
                return d
            }

            function v(a, b, c, d) {
                var e, f, g, h, i, j = m(a);
                if (!d && 1 === j.length) {
                    if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                        if (b = (z.find.ID(g.matches[0].replace(xb, yb), b) || [])[0], !b)return c;
                        a = a.slice(f.shift().value.length)
                    }
                    for (e = rb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]);)if ((i = z.find[h]) && (d = i(g.matches[0].replace(xb, yb), nb.test(f[0].type) && b.parentNode || b))) {
                        if (f.splice(e, 1), a = d.length && n(f), !a)return ab.apply(c, d), c;
                        break
                    }
                }
                return C(a, j)(d, b, !I, c, nb.test(a)), c
            }

            var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date, O = a.document, P = 0, Q = 0, R = d(), S = d(), T = d(), U = !1, V = function (a, b) {
                return a === b ? (U = !0, 0) : 0
            }, W = typeof b, X = 1 << 31, Y = {}.hasOwnProperty, Z = [], $ = Z.pop, _ = Z.push, ab = Z.push, bb = Z.slice, cb = Z.indexOf || function (a) {
                    for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
                    return -1
                }, db = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", eb = "[\\x20\\t\\r\\n\\f]", gb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", hb = gb.replace("w", "w#"), ib = "\\[" + eb + "*(" + gb + ")" + eb + "*(?:([*^$|!~]?=)" + eb + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + hb + ")|)|)" + eb + "*\\]", jb = ":(" + gb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ib.replace(3, 8) + ")*)|.*)\\)|)", kb = new RegExp("^" + eb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eb + "+$", "g"), lb = new RegExp("^" + eb + "*," + eb + "*"), mb = new RegExp("^" + eb + "*([>+~]|" + eb + ")" + eb + "*"), nb = new RegExp(eb + "*[+~]"), ob = new RegExp("=" + eb + "*([^\\]'\"]*)" + eb + "*\\]", "g"), pb = new RegExp(jb), qb = new RegExp("^" + hb + "$"), rb = {
                ID: new RegExp("^#(" + gb + ")"),
                CLASS: new RegExp("^\\.(" + gb + ")"),
                TAG: new RegExp("^(" + gb.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ib),
                PSEUDO: new RegExp("^" + jb),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + eb + "*(even|odd|(([+-]|)(\\d*)n|)" + eb + "*(?:([+-]|)" + eb + "*(\\d+)|))" + eb + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + db + ")$", "i"),
                needsContext: new RegExp("^" + eb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + eb + "*((?:-\\d)?\\d*)" + eb + "*\\)|)(?=[^-]|$)", "i")
            }, sb = /^[^{]+\{\s*\[native \w/, tb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ub = /^(?:input|select|textarea|button)$/i, vb = /^h\d$/i, wb = /'|\\/g, xb = new RegExp("\\\\([\\da-f]{1,6}" + eb + "?|(" + eb + ")|.)", "ig"), yb = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
            try {
                ab.apply(Z = bb.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType
            } catch (zb) {
                ab = {
                    apply: Z.length ? function (a, b) {
                        _.apply(a, bb.call(b))
                    } : function (a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            B = c.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, x = c.support = {}, F = c.setDocument = function (a) {
                var b = a ? a.ownerDocument || a : O, c = b.defaultView;
                return b !== G && 9 === b.nodeType && b.documentElement ? (G = b, H = b.documentElement, I = !B(b), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function () {
                    F()
                }), x.attributes = f(function (a) {
                    return a.className = "i", !a.getAttribute("className")
                }), x.getElementsByTagName = f(function (a) {
                    return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length
                }), x.getElementsByClassName = f(function (a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                }), x.getById = f(function (a) {
                    return H.appendChild(a).id = N, !b.getElementsByName || !b.getElementsByName(N).length
                }), x.getById ? (z.find.ID = function (a, b) {
                    if (typeof b.getElementById !== W && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, z.filter.ID = function (a) {
                    var b = a.replace(xb, yb);
                    return function (a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete z.find.ID, z.filter.ID = function (a) {
                    var b = a.replace(xb, yb);
                    return function (a) {
                        var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), z.find.TAG = x.getElementsByTagName ? function (a, b) {
                    return typeof b.getElementsByTagName !== W ? b.getElementsByTagName(a) : void 0
                } : function (a, b) {
                    var c, d = [], e = 0, f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];)1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, z.find.CLASS = x.getElementsByClassName && function (a, b) {
                    return typeof b.getElementsByClassName !== W && I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (x.qsa = sb.test(b.querySelectorAll)) && (f(function (a) {
                    a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + eb + "*(?:value|" + db + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
                }), f(function (a) {
                    var c = b.createElement("input");
                    c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + eb + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (x.matchesSelector = sb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function (a) {
                    x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", jb)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), M = sb.test(H.contains) || H.compareDocumentPosition ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function (a, b) {
                    if (b)for (; b = b.parentNode;)if (b === a)return !0;
                    return !1
                }, V = H.compareDocumentPosition ? function (a, c) {
                    if (a === c)return U = !0, 0;
                    var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                    return d ? 1 & d || !x.sortDetached && c.compareDocumentPosition(a) === d ? a === b || M(O, a) ? -1 : c === b || M(O, c) ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                } : function (a, c) {
                    var d, e = 0, f = a.parentNode, g = c.parentNode, i = [a], j = [c];
                    if (a === c)return U = !0, 0;
                    if (!f || !g)return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0;
                    if (f === g)return h(a, c);
                    for (d = a; d = d.parentNode;)i.unshift(d);
                    for (d = c; d = d.parentNode;)j.unshift(d);
                    for (; i[e] === j[e];)e++;
                    return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, b) : G
            }, c.matches = function (a, b) {
                return c(a, null, null, b)
            }, c.matchesSelector = function (a, b) {
                if ((a.ownerDocument || a) !== G && F(a), b = b.replace(ob, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b)))try {
                    var d = L.call(a, b);
                    if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
                } catch (e) {
                }
                return c(b, G, null, [a]).length > 0
            }, c.contains = function (a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, c.attr = function (a, c) {
                (a.ownerDocument || a) !== G && F(a);
                var d = z.attrHandle[c.toLowerCase()], e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
                return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
            }, c.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, c.uniqueSort = function (a) {
                var b, c = [], d = 0, e = 0;
                if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                    for (; b = a[e++];)b === a[e] && (d = c.push(e));
                    for (; d--;)a.splice(c[d], 1)
                }
                return a
            }, A = c.getText = function (a) {
                var b, c = "", d = 0, e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent)return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)c += A(a)
                    } else if (3 === e || 4 === e)return a.nodeValue
                } else for (; b = a[d]; d++)c += A(b);
                return c
            }, z = c.selectors = {
                cacheLength: 50,
                createPseudo: e,
                match: rb,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(xb, yb), a[3] = (a[4] || a[5] || "").replace(xb, yb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    }, CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
                    }, PSEUDO: function (a) {
                        var c, d = !a[5] && a[2];
                        return rb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pb.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(xb, yb).toLowerCase();
                        return "*" === a ? function () {
                            return !0
                        } : function (a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    }, CLASS: function (a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + eb + ")" + a + "(" + eb + "|$)")) && R(a, function (a) {
                                return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "")
                            })
                    }, ATTR: function (a, b, d) {
                        return function (e) {
                            var f = c.attr(e, a);
                            return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    }, CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                        return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        } : function (b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)m = j[1]; else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    }, PSEUDO: function (a, b) {
                        var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                        return f[N] ? f(b) : f.length > 1 ? (d = [a, a, "", b], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function (a, c) {
                            for (var d, e = f(a, b), g = e.length; g--;)d = cb.call(a, e[g]), a[d] = !(c[d] = e[g])
                        }) : function (a) {
                            return f(a, 0, d)
                        }) : f
                    }
                },
                pseudos: {
                    not: e(function (a) {
                        var b = [], c = [], d = C(a.replace(kb, "$1"));
                        return d[N] ? e(function (a, b, c, e) {
                            for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, e, f) {
                            return b[0] = a, d(b, null, f, c), !c.pop()
                        }
                    }), has: e(function (a) {
                        return function (b) {
                            return c(a, b).length > 0
                        }
                    }), contains: e(function (a) {
                        return function (b) {
                            return (b.textContent || b.innerText || A(b)).indexOf(a) > -1
                        }
                    }), lang: e(function (a) {
                        return qb.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xb, yb).toLowerCase(), function (b) {
                            var c;
                            do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                    }), target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    }, root: function (a) {
                        return a === H
                    }, focus: function (a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    }, enabled: function (a) {
                        return a.disabled === !1
                    }, disabled: function (a) {
                        return a.disabled === !0
                    }, checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    }, selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    }, empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType)return !1;
                        return !0
                    }, parent: function (a) {
                        return !z.pseudos.empty(a)
                    }, header: function (a) {
                        return vb.test(a.nodeName)
                    }, input: function (a) {
                        return ub.test(a.nodeName)
                    }, button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    }, text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                    }, first: k(function () {
                        return [0]
                    }), last: k(function (a, b) {
                        return [b - 1]
                    }), eq: k(function (a, b, c) {
                        return [0 > c ? c + b : c]
                    }), even: k(function (a, b) {
                        for (var c = 0; b > c; c += 2)a.push(c);
                        return a
                    }), odd: k(function (a, b) {
                        for (var c = 1; b > c; c += 2)a.push(c);
                        return a
                    }), lt: k(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                        return a
                    }), gt: k(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                        return a
                    })
                }
            }, z.pseudos.nth = z.pseudos.eq;
            for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})z.pseudos[w] = i(w);
            for (w in{submit: !0, reset: !0})z.pseudos[w] = j(w);
            l.prototype = z.filters = z.pseudos, z.setFilters = new l, C = c.compile = function (a, b) {
                var c, d = [], e = [], f = T[a + " "];
                if (!f) {
                    for (b || (b = m(a)), c = b.length; c--;)f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d))
                }
                return f
            }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), x.sortDetached = f(function (a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), f(function (a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || g("type|href|height|width", function (a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), x.attributes && f(function (a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || g("value", function (a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), f(function (a) {
                return null == a.getAttribute("disabled")
            }) || g(db, function (a, b, c) {
                var d;
                return c ? void 0 : (d = a.getAttributeNode(b)) && d.specified ? d.value : a[b] === !0 ? b.toLowerCase() : null
            }), fb.find = c, fb.expr = c.selectors, fb.expr[":"] = fb.expr.pseudos, fb.unique = c.uniqueSort, fb.text = c.getText, fb.isXMLDoc = c.isXML, fb.contains = c.contains
        }(a);
    var ob = {};
    fb.Callbacks = function (a) {
        a = "string" == typeof a ? ob[a] || d(a) : fb.extend({}, a);
        var c, e, f, g, h, i, j = [], k = !a.once && [], l = function (b) {
            for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break
            }
            f = !1, j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable())
        }, m = {
            add: function () {
                if (j) {
                    var b = j.length;
                    !function d(b) {
                        fb.each(b, function (b, c) {
                            var e = fb.type(c);
                            "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                        })
                    }(arguments), f ? h = j.length : c && (g = b, l(c))
                }
                return this
            }, remove: function () {
                return j && fb.each(arguments, function (a, b) {
                    for (var c; (c = fb.inArray(b, j, c)) > -1;)j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
                }), this
            }, has: function (a) {
                return a ? fb.inArray(a, j) > -1 : !(!j || !j.length)
            }, empty: function () {
                return j = [], h = 0, this
            }, disable: function () {
                return j = k = c = b, this
            }, disabled: function () {
                return !j
            }, lock: function () {
                return k = b, c || m.disable(), this
            }, locked: function () {
                return !k
            }, fireWith: function (a, b) {
                return !j || e && !k || (b = b || [], b = [a, b.slice ? b.slice() : b], f ? k.push(b) : l(b)), this
            }, fire: function () {
                return m.fireWith(this, arguments), this
            }, fired: function () {
                return !!e
            }
        };
        return m
    }, fb.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", fb.Callbacks("once memory"), "resolved"], ["reject", "fail", fb.Callbacks("once memory"), "rejected"], ["notify", "progress", fb.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return fb.Deferred(function (c) {
                        fb.each(b, function (b, f) {
                            var g = f[0], h = fb.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = h && h.apply(this, arguments);
                                a && fb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? fb.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, fb.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b, c, d, e = 0, f = ab.call(arguments), g = f.length, h = 1 !== g || a && fb.isFunction(a.promise) ? g : 0, i = 1 === h ? a : fb.Deferred(), j = function (a, c, d) {
                return function (e) {
                    c[a] = this, d[a] = arguments.length > 1 ? ab.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1)for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)f[e] && fb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), fb.support = function (b) {
        var c = T.createElement("input"), d = T.createDocumentFragment(), e = T.createElement("div"), f = T.createElement("select"), g = f.appendChild(T.createElement("option"));
        return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, c = T.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, b.focusinBubbles = "onfocusin"in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === e.style.backgroundClip, fb(function () {
            var c, d, f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", g = T.getElementsByTagName("body")[0];
            g && (c = T.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", fb.swap(g, null != g.style.zoom ? {zoom: 1} : {}, function () {
                b.boxSizing = 4 === e.offsetWidth
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {width: "4px"}).width, d = e.appendChild(T.createElement("div")), d.style.cssText = e.style.cssText = f, d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), g.removeChild(c))
        }), b) : b
    }({});
    var pb, qb, rb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, sb = /([A-Z])/g;
    e.uid = 1, e.accepts = function (a) {
        return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0
    }, e.prototype = {
        key: function (a) {
            if (!e.accepts(a))return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = e.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, fb.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)f[b] = c; else if (fb.isEmptyObject(f))fb.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
            return f
        }, get: function (a, c) {
            var d = this.cache[this.key(a)];
            return c === b ? d : d[c]
        }, access: function (a, c, d) {
            var e;
            return c === b || c && "string" == typeof c && d === b ? (e = this.get(a, c), e !== b ? e : this.get(a, fb.camelCase(c))) : (this.set(a, c, d), d !== b ? d : c)
        }, remove: function (a, c) {
            var d, e, f, g = this.key(a), h = this.cache[g];
            if (c === b)this.cache[g] = {}; else {
                fb.isArray(c) ? e = c.concat(c.map(fb.camelCase)) : (f = fb.camelCase(c), c in h ? e = [c, f] : (e = f, e = e in h ? [e] : e.match(hb) || [])), d = e.length;
                for (; d--;)delete h[e[d]]
            }
        }, hasData: function (a) {
            return !fb.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    }, pb = new e, qb = new e, fb.extend({
        acceptData: e.accepts, hasData: function (a) {
            return pb.hasData(a) || qb.hasData(a)
        }, data: function (a, b, c) {
            return pb.access(a, b, c)
        }, removeData: function (a, b) {
            pb.remove(a, b)
        }, _data: function (a, b, c) {
            return qb.access(a, b, c)
        }, _removeData: function (a, b) {
            qb.remove(a, b)
        }
    }), fb.fn.extend({
        data: function (a, c) {
            var d, e, g = this[0], h = 0, i = null;
            if (a === b) {
                if (this.length && (i = pb.get(g), 1 === g.nodeType && !qb.get(g, "hasDataAttrs"))) {
                    for (d = g.attributes; h < d.length; h++)e = d[h].name, 0 === e.indexOf("data-") && (e = fb.camelCase(e.slice(5)), f(g, e, i[e]));
                    qb.set(g, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof a ? this.each(function () {
                pb.set(this, a)
            }) : fb.access(this, function (c) {
                var d, e = fb.camelCase(a);
                if (g && c === b) {
                    if (d = pb.get(g, a), d !== b)return d;
                    if (d = pb.get(g, e), d !== b)return d;
                    if (d = f(g, e, b), d !== b)return d
                } else this.each(function () {
                    var d = pb.get(this, e);
                    pb.set(this, e, c), -1 !== a.indexOf("-") && d !== b && pb.set(this, a, c)
                })
            }, null, c, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                pb.remove(this, a)
            })
        }
    }), fb.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = qb.get(a, b), c && (!d || fb.isArray(c) ? d = qb.access(a, b, fb.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = fb.queue(a, b), d = c.length, e = c.shift(), f = fb._queueHooks(a, b), g = function () {
                fb.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return qb.get(a, c) || qb.access(a, c, {
                    empty: fb.Callbacks("once memory").add(function () {
                        qb.remove(a, [b + "queue", c])
                    })
                })
        }
    }), fb.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? fb.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = fb.queue(this, a, c);
                fb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && fb.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                fb.dequeue(this, a)
            })
        }, delay: function (a, b) {
            return a = fb.fx ? fb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            var d, e = 1, f = fb.Deferred(), g = this, h = this.length, i = function () {
                --e || f.resolveWith(g, [g])
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;)d = qb.get(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var tb, ub, vb = /[\t\r\n\f]/g, wb = /\r/g, xb = /^(?:input|select|textarea|button)$/i;
    fb.fn.extend({
        attr: function (a, b) {
            return fb.access(this, fb.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                fb.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return fb.access(this, fb.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[fb.propFix[a] || a]
            })
        }, addClass: function (a) {
            var b, c, d, e, f, g = 0, h = this.length, i = "string" == typeof a && a;
            if (fb.isFunction(a))return this.each(function (b) {
                fb(this).addClass(a.call(this, b, this.className))
            });
            if (i)for (b = (a || "").match(hb) || []; h > g; g++)if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : " ")) {
                for (f = 0; e = b[f++];)d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                c.className = fb.trim(d)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g = 0, h = this.length, i = 0 === arguments.length || "string" == typeof a && a;
            if (fb.isFunction(a))return this.each(function (b) {
                fb(this).removeClass(a.call(this, b, this.className))
            });
            if (i)for (b = (a || "").match(hb) || []; h > g; g++)if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : "")) {
                for (f = 0; e = b[f++];)for (; d.indexOf(" " + e + " ") >= 0;)d = d.replace(" " + e + " ", " ");
                c.className = a ? fb.trim(d) : ""
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(fb.isFunction(a) ? function (c) {
                fb(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c)for (var b, d = 0, e = fb(this), f = a.match(hb) || []; b = f[d++];)e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else(c === R || "boolean" === c) && (this.className && qb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : qb.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vb, " ").indexOf(b) >= 0)return !0;
            return !1
        }, val: function (a) {
            var c, d, e, f = this[0];
            {
                if (arguments.length)return e = fb.isFunction(a), this.each(function (d) {
                    var f;
                    1 === this.nodeType && (f = e ? a.call(this, d, fb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : fb.isArray(f) && (f = fb.map(f, function (a) {
                        return null == a ? "" : a + ""
                    })), c = fb.valHooks[this.type] || fb.valHooks[this.nodeName.toLowerCase()], c && "set"in c && c.set(this, f, "value") !== b || (this.value = f))
                });
                if (f)return c = fb.valHooks[f.type] || fb.valHooks[f.nodeName.toLowerCase()], c && "get"in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(wb, "") : null == d ? "" : d)
            }
        }
    }), fb.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (fb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fb.nodeName(c.parentNode, "optgroup"))) {
                        if (b = fb(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    for (var c, d, e = a.options, f = fb.makeArray(b), g = e.length; g--;)d = e[g], (d.selected = fb.inArray(fb(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }, attr: function (a, c, d) {
            var e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)return typeof a.getAttribute === R ? fb.prop(a, c, d) : (1 === g && fb.isXMLDoc(a) || (c = c.toLowerCase(), e = fb.attrHooks[c] || (fb.expr.match.bool.test(c) ? ub : tb)), d === b ? e && "get"in e && null !== (f = e.get(a, c)) ? f : (f = fb.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set"in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : void fb.removeAttr(a, c))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(hb);
            if (f && 1 === a.nodeType)for (; c = f[e++];)d = fb.propFix[c] || c, fb.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!fb.support.radioValue && "radio" === b && fb.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h)return g = 1 !== h || !fb.isXMLDoc(a), g && (c = fb.propFix[c] || c, f = fb.propHooks[c]), d !== b ? f && "set"in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get"in f && null !== (e = f.get(a, c)) ? e : a[c]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || xb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), ub = {
        set: function (a, b, c) {
            return b === !1 ? fb.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, fb.each(fb.expr.match.bool.source.match(/\w+/g), function (a, c) {
        var d = fb.expr.attrHandle[c] || fb.find.attr;
        fb.expr.attrHandle[c] = function (a, c, e) {
            var f = fb.expr.attrHandle[c], g = e ? b : (fb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return fb.expr.attrHandle[c] = f, g
        }
    }), fb.support.optSelected || (fb.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), fb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        fb.propFix[this.toLowerCase()] = this
    }), fb.each(["radio", "checkbox"], function () {
        fb.valHooks[this] = {
            set: function (a, b) {
                return fb.isArray(b) ? a.checked = fb.inArray(fb(a).val(), b) >= 0 : void 0
            }
        }, fb.support.checkOn || (fb.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var yb = /^key/, zb = /^(?:mouse|contextmenu)|click/, Ab = /^(?:focusinfocus|focusoutblur)$/, Bb = /^([^.]*)(?:\.(.+)|)$/;
    fb.event = {
        global: {},
        add: function (a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = qb.get(a);
            if (r) {
                for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = fb.guid++), (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function (a) {
                    return typeof fb === R || a && fb.event.triggered === a.type ? b : fb.event.dispatch.apply(h.elem, arguments)
                }, h.elem = a), c = (c || "").match(hb) || [""], k = c.length; k--;)i = Bb.exec(c[k]) || [], o = q = i[1], p = (i[2] || "").split(".").sort(), o && (m = fb.event.special[o] || {}, o = (f ? m.delegateType : m.bindType) || o, m = fb.event.special[o] || {}, l = fb.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && fb.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, g), (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, l) : n.push(l), fb.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = qb.hasData(a) && qb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(hb) || [""], j = b.length; j--;)if (h = Bb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = fb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;)k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fb.removeEvent(a, n, q.handle), delete i[n])
                } else for (n in i)fb.event.remove(a, n + b[j], c, d, !0);
                fb.isEmptyObject(i) && (delete q.handle, qb.remove(a, "events"))
            }
        },
        trigger: function (c, d, e, f) {
            var g, h, i, j, k, l, m, n = [e || T], o = db.call(c, "type") ? c.type : c, p = db.call(c, "namespace") ? c.namespace.split(".") : [];
            if (h = i = e = e || T, 3 !== e.nodeType && 8 !== e.nodeType && !Ab.test(o + fb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), k = o.indexOf(":") < 0 && "on" + o, c = c[fb.expando] ? c : new fb.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : fb.makeArray(d, [c]), m = fb.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
                if (!f && !m.noBubble && !fb.isWindow(e)) {
                    for (j = m.delegateType || o, Ab.test(j + o) || (h = h.parentNode); h; h = h.parentNode)n.push(h), i = h;
                    i === (e.ownerDocument || T) && n.push(i.defaultView || i.parentWindow || a)
                }
                for (g = 0; (h = n[g++]) && !c.isPropagationStopped();)c.type = g > 1 ? j : m.bindType || o, l = (qb.get(h, "events") || {})[c.type] && qb.get(h, "handle"), l && l.apply(h, d), l = k && h[k], l && fb.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
                return c.type = o, f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !fb.acceptData(e) || k && fb.isFunction(e[o]) && !fb.isWindow(e) && (i = e[k], i && (e[k] = null), fb.event.triggered = o, e[o](), fb.event.triggered = b, i && (e[k] = i)), c.result
            }
        },
        dispatch: function (a) {
            a = fb.event.fix(a);
            var c, d, e, f, g, h = [], i = ab.call(arguments), j = (qb.get(this, "events") || {})[a.type] || [], k = fb.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = fb.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped();)for (a.currentTarget = f.elem, d = 0; (g = f.handlers[d++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((fb.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, c) {
            var d, e, f, g, h = [], i = c.delegateCount, j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type))for (; j !== this; j = j.parentNode || this)if (j.disabled !== !0 || "click" !== a.type) {
                for (e = [], d = 0; i > d; d++)g = c[d], f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? fb(f, this).index(j) >= 0 : fb.find(f, this, null, [j]).length), e[f] && e.push(g);
                e.length && h.push({elem: j, handlers: e})
            }
            return i < c.length && h.push({elem: this, handlers: c.slice(i)}), h
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var d, e, f, g = c.button;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || T, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[fb.expando])return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = zb.test(e) ? this.mouseHooks : yb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fb.Event(f), b = d.length; b--;)c = d[b], a[c] = f[c];
            return a.target || (a.target = T), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== i() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === i() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && fb.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return fb.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = fb.extend(new fb.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? fb.event.trigger(e, null, b) : fb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, fb.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, fb.Event = function (a, b) {
        return this instanceof fb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, b && fb.extend(this, b), this.timeStamp = a && a.timeStamp || fb.now(), void(this[fb.expando] = !0)) : new fb.Event(a, b)
    }, fb.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = g, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = g, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = g, this.stopPropagation()
        }
    }, fb.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        fb.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !fb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), fb.support.focusinBubbles || fb.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = 0, d = function (a) {
            fb.event.simulate(b, a.target, fb.event.fix(a), !0)
        };
        fb.event.special[b] = {
            setup: function () {
                0 === c++ && T.addEventListener(a, d, !0)
            }, teardown: function () {
                0 === --c && T.removeEventListener(a, d, !0)
            }
        }
    }), fb.fn.extend({
        on: function (a, c, d, e, f) {
            var g, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a)this.on(i, c, d, a[i], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1)e = h; else if (!e)return this;
            return 1 === f && (g = e, e = function (a) {
                return fb().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = fb.guid++)), this.each(function () {
                fb.event.add(this, a, e, d, c)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj)return e = a.handleObj, fb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a)this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = h), this.each(function () {
                fb.event.remove(this, a, d, c)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                fb.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? fb.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Cb = /^.[^:#\[\.,]*$/, Db = /^(?:parents|prev(?:Until|All))/, Eb = fb.expr.match.needsContext, Fb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fb.fn.extend({
        find: function (a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)return this.pushStack(fb(a).filter(function () {
                for (b = 0; e > b; b++)if (fb.contains(d[b], this))return !0
            }));
            for (b = 0; e > b; b++)fb.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? fb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        }, has: function (a) {
            var b = fb(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)if (fb.contains(this, b[a]))return !0
            })
        }, not: function (a) {
            return this.pushStack(k(this, a || [], !0))
        }, filter: function (a) {
            return this.pushStack(k(this, a || [], !1))
        }, is: function (a) {
            return !!k(this, "string" == typeof a && Eb.test(a) ? fb(a) : a || [], !1).length
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Eb.test(a) || "string" != typeof a ? fb(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fb.find.matchesSelector(c, a))) {
                c = f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? fb.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? bb.call(fb(a), this[0]) : bb.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            var c = "string" == typeof a ? fb(a, b) : fb.makeArray(a && a.nodeType ? [a] : a), d = fb.merge(this.get(), c);
            return this.pushStack(fb.unique(d))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), fb.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return fb.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return fb.dir(a, "parentNode", c)
        }, next: function (a) {
            return j(a, "nextSibling")
        }, prev: function (a) {
            return j(a, "previousSibling")
        }, nextAll: function (a) {
            return fb.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return fb.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return fb.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return fb.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return fb.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return fb.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || fb.merge([], a.childNodes)
        }
    }, function (a, b) {
        fb.fn[a] = function (c, d) {
            var e = fb.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fb.filter(d, e)), this.length > 1 && (Fb[a] || fb.unique(e), Db.test(a) && e.reverse()), this.pushStack(e)
        }
    }), fb.extend({
        filter: function (a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fb.find.matchesSelector(d, a) ? [d] : [] : fb.find.matches(a, fb.grep(b, function (a) {
                return 1 === a.nodeType
            }))
        }, dir: function (a, c, d) {
            for (var e = [], f = d !== b; (a = a[c]) && 9 !== a.nodeType;)if (1 === a.nodeType) {
                if (f && fb(a).is(d))break;
                e.push(a)
            }
            return e
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Gb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Hb = /<([\w:]+)/, Ib = /<|&#?\w+;/, Jb = /<(?:script|style|link)/i, Kb = /^(?:checkbox|radio)$/i, Lb = /checked\s*(?:[^=]|=\s*.checked.)/i, Mb = /^$|\/(?:java|ecma)script/i, Nb = /^true\/(.*)/, Ob = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Pb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Pb.optgroup = Pb.option, Pb.tbody = Pb.tfoot = Pb.colgroup = Pb.caption = Pb.thead, Pb.th = Pb.td, fb.fn.extend({
        text: function (a) {
            return fb.access(this, function (a) {
                return a === b ? fb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? fb.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || fb.cleanData(q(c)), c.parentNode && (b && fb.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (fb.cleanData(q(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return fb.clone(this, a, b)
            })
        }, html: function (a) {
            return fb.access(this, function (a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b && 1 === c.nodeType)return c.innerHTML;
                if ("string" == typeof a && !Jb.test(a) && !Pb[(Hb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Gb, "<$1></$2>");
                    try {
                        for (; e > d; d++)c = this[d] || {}, 1 === c.nodeType && (fb.cleanData(q(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (f) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = fb.map(this, function (a) {
                return [a.nextSibling, a.parentNode]
            }), b = 0;
            return this.domManip(arguments, function (c) {
                var d = a[b++], e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), fb(this).remove(), e.insertBefore(c, d))
            }, !0), b ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b, c) {
            a = $.apply([], a);
            var d, e, f, g, h, i, j = 0, k = this.length, l = this, o = k - 1, p = a[0], r = fb.isFunction(p);
            if (r || !(1 >= k || "string" != typeof p || fb.support.checkClone) && Lb.test(p))return this.each(function (d) {
                var e = l.eq(d);
                r && (a[0] = p.call(this, d, e.html())), e.domManip(a, b, c)
            });
            if (k && (d = fb.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 1 === d.childNodes.length && (d = e), e)) {
                for (f = fb.map(q(d, "script"), m), g = f.length; k > j; j++)h = d, j !== o && (h = fb.clone(h, !0, !0), g && fb.merge(f, q(h, "script"))), b.call(this[j], h, j);
                if (g)for (i = f[f.length - 1].ownerDocument, fb.map(f, n), j = 0; g > j; j++)h = f[j], Mb.test(h.type || "") && !qb.access(h, "globalEval") && fb.contains(i, h) && (h.src ? fb._evalUrl(h.src) : fb.globalEval(h.textContent.replace(Ob, "")))
            }
            return this
        }
    }), fb.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        fb.fn[a] = function (a) {
            for (var c, d = [], e = fb(a), f = e.length - 1, g = 0; f >= g; g++)c = g === f ? this : this.clone(!0), fb(e[g])[b](c), _.apply(d, c.get());
            return this.pushStack(d)
        }
    }), fb.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = fb.contains(a.ownerDocument, a);
            if (!(fb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fb.isXMLDoc(a)))for (g = q(h), f = q(a), d = 0, e = f.length; e > d; d++)r(f[d], g[d]);
            if (b)if (c)for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++)p(f[d], g[d]); else p(a, h);
            return g = q(h, "script"), g.length > 0 && o(g, !i && q(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++)if (e = a[k], e || 0 === e)if ("object" === fb.type(e))fb.merge(n, e.nodeType ? [e] : e); else if (Ib.test(e)) {
                for (f = f || m.appendChild(b.createElement("div")), g = (Hb.exec(e) || ["", ""])[1].toLowerCase(), h = Pb[g] || Pb._default, f.innerHTML = h[1] + e.replace(Gb, "<$1></$2>") + h[2], j = h[0]; j--;)f = f.lastChild;
                fb.merge(n, f.childNodes), f = m.firstChild, f.textContent = ""
            } else n.push(b.createTextNode(e));
            for (m.textContent = "", k = 0; e = n[k++];)if ((!d || -1 === fb.inArray(e, d)) && (i = fb.contains(e.ownerDocument, e), f = q(m.appendChild(e), "script"), i && o(f), c))for (j = 0; e = f[j++];)Mb.test(e.type || "") && c.push(e);
            return m
        }, cleanData: function (a) {
            for (var c, d, f, g, h, i, j = fb.event.special, k = 0; (d = a[k]) !== b; k++) {
                if (e.accepts(d) && (h = d[qb.expando], h && (c = qb.cache[h]))) {
                    if (f = Object.keys(c.events || {}), f.length)for (i = 0; (g = f[i]) !== b; i++)j[g] ? fb.event.remove(d, g) : fb.removeEvent(d, g, c.handle);
                    qb.cache[h] && delete qb.cache[h]
                }
                delete pb.cache[d[pb.expando]]
            }
        }, _evalUrl: function (a) {
            return fb.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }
    }), fb.fn.extend({
        wrapAll: function (a) {
            var b;
            return fb.isFunction(a) ? this.each(function (b) {
                fb(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = fb(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a = this; a.firstElementChild;)a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return this.each(fb.isFunction(a) ? function (b) {
                fb(this).wrapInner(a.call(this, b))
            } : function () {
                var b = fb(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = fb.isFunction(a);
            return this.each(function (c) {
                fb(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                fb.nodeName(this, "body") || fb(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Qb, Rb, Sb = /^(none|table(?!-c[ea]).+)/, Tb = /^margin/, Ub = new RegExp("^(" + gb + ")(.*)$", "i"), Vb = new RegExp("^(" + gb + ")(?!px)[a-z%]+$", "i"), Wb = new RegExp("^([+-])=(" + gb + ")", "i"), Xb = {BODY: "block"}, Yb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Zb = {
        letterSpacing: 0,
        fontWeight: 400
    }, $b = ["Top", "Right", "Bottom", "Left"], _b = ["Webkit", "O", "Moz", "ms"];
    fb.fn.extend({
        css: function (a, c) {
            return fb.access(this, function (a, c, d) {
                var e, f, g = {}, h = 0;
                if (fb.isArray(c)) {
                    for (e = u(a), f = c.length; f > h; h++)g[c[h]] = fb.css(a, c[h], !1, e);
                    return g
                }
                return d !== b ? fb.style(a, c, d) : fb.css(a, c)
            }, a, c, arguments.length > 1)
        }, show: function () {
            return v(this, !0)
        }, hide: function () {
            return v(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                t(this) ? fb(this).show() : fb(this).hide()
            })
        }
    }), fb.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Qb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = fb.camelCase(c), j = a.style;
                return c = fb.cssProps[i] || (fb.cssProps[i] = s(j, i)), h = fb.cssHooks[c] || fb.cssHooks[i], d === b ? h && "get"in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, "string" === g && (f = Wb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(fb.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || fb.cssNumber[i] || (d += "px"), fb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set"in h && (d = h.set(a, d, e)) === b || (j[c] = d)), void 0)
            }
        },
        css: function (a, c, d, e) {
            var f, g, h, i = fb.camelCase(c);
            return c = fb.cssProps[i] || (fb.cssProps[i] = s(a.style, i)), h = fb.cssHooks[c] || fb.cssHooks[i], h && "get"in h && (f = h.get(a, !0, d)), f === b && (f = Qb(a, c, e)), "normal" === f && c in Zb && (f = Zb[c]), "" === d || d ? (g = parseFloat(f), d === !0 || fb.isNumeric(g) ? g || 0 : f) : f
        }
    }), Qb = function (a, c, d) {
        var e, f, g, h = d || u(a), i = h ? h.getPropertyValue(c) || h[c] : b, j = a.style;
        return h && ("" !== i || fb.contains(a.ownerDocument, a) || (i = fb.style(a, c)), Vb.test(i) && Tb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
    }, fb.each(["height", "width"], function (a, b) {
        fb.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? 0 === a.offsetWidth && Sb.test(fb.css(a, "display")) ? fb.swap(a, Yb, function () {
                    return y(a, b, d)
                }) : y(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && u(a);
                return w(a, c, d ? x(a, b, d, fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), fb(function () {
        fb.support.reliableMarginRight || (fb.cssHooks.marginRight = {
            get: function (a, b) {
                return b ? fb.swap(a, {display: "inline-block"}, Qb, [a, "marginRight"]) : void 0
            }
        }), !fb.support.pixelPosition && fb.fn.position && fb.each(["top", "left"], function (a, b) {
            fb.cssHooks[b] = {
                get: function (a, c) {
                    return c ? (c = Qb(a, b), Vb.test(c) ? fb(a).position()[b] + "px" : c) : void 0
                }
            }
        })
    }), fb.expr && fb.expr.filters && (fb.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, fb.expr.filters.visible = function (a) {
        return !fb.expr.filters.hidden(a)
    }), fb.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        fb.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + $b[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Tb.test(a) || (fb.cssHooks[a + b].set = w)
    });
    var ac = /%20/g, bc = /\[\]$/, cc = /\r?\n/g, dc = /^(?:submit|button|image|reset|file)$/i, ec = /^(?:input|select|textarea|keygen)/i;
    fb.fn.extend({
        serialize: function () {
            return fb.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = fb.prop(this, "elements");
                return a ? fb.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !fb(this).is(":disabled") && ec.test(this.nodeName) && !dc.test(a) && (this.checked || !Kb.test(a))
            }).map(function (a, b) {
                var c = fb(this).val();
                return null == c ? null : fb.isArray(c) ? fb.map(c, function (a) {
                    return {name: b.name, value: a.replace(cc, "\r\n")}
                }) : {name: b.name, value: c.replace(cc, "\r\n")}
            }).get()
        }
    }), fb.param = function (a, c) {
        var d, e = [], f = function (a, b) {
            b = fb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (c === b && (c = fb.ajaxSettings && fb.ajaxSettings.traditional), fb.isArray(a) || a.jquery && !fb.isPlainObject(a))fb.each(a, function () {
            f(this.name, this.value)
        }); else for (d in a)B(d, a[d], c, f);
        return e.join("&").replace(ac, "+")
    }, fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        fb.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), fb.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var fc, gc, hc = fb.now(), ic = /\?/, jc = /#.*$/, kc = /([?&])_=[^&]*/, lc = /^(.*?):[ \t]*([^\r\n]*)$/gm, mc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, nc = /^(?:GET|HEAD)$/, oc = /^\/\//, pc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, qc = fb.fn.load, rc = {}, sc = {}, tc = "*/".concat("*");
    try {
        gc = S.href
    } catch (uc) {
        gc = T.createElement("a"), gc.href = "", gc = gc.href
    }
    fc = pc.exec(gc.toLowerCase()) || [], fb.fn.load = function (a, c, d) {
        if ("string" != typeof a && qc)return qc.apply(this, arguments);
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i), a = a.slice(0, i)), fb.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), h.length > 0 && fb.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c
        }).done(function (a) {
            g = arguments, h.html(e ? fb("<div>").append(fb.parseHTML(a)).find(e) : a)
        }).complete(d && function (a, b) {
            h.each(d, g || [a.responseText, b, a])
        }), this
    }, fb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        fb.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), fb.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gc,
            type: "GET",
            isLocal: mc.test(fc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": fb.parseJSON, "text xml": fb.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? E(E(a, fb.ajaxSettings), b) : E(fb.ajaxSettings, a)
        },
        ajaxPrefilter: C(rc),
        ajaxTransport: C(sc),
        ajax: function (a, c) {
            function d(a, c, d, h) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), e = b, g = h || "", w.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, d && (t = F(m, w, d)), t = G(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fb.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fb.etag[f] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fb.active || fb.event.trigger("ajaxStop")))
            }

            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = fb.ajaxSetup({}, c), n = m.context || m, o = m.context && (n.nodeType || n.jquery) ? fb(n) : fb.event, p = fb.Deferred(), q = fb.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === u) {
                        if (!h)for (h = {}; b = lc.exec(g);)h[b[1].toLowerCase()] = b[2];
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === u ? g : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b), this
                },
                overrideMimeType: function (a) {
                    return u || (m.mimeType = a), this
                },
                statusCode: function (a) {
                    var b;
                    if (a)if (2 > u)for (b in a)r[b] = [r[b], a[b]]; else w.always(a[w.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || v;
                    return e && e.abort(b), d(0, b), this
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || gc) + "").replace(jc, "").replace(oc, fc[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fb.trim(m.dataType || "*").toLowerCase().match(hb) || [""], null == m.crossDomain && (j = pc.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === fc[1] && j[2] === fc[2] && (j[3] || ("http:" === j[1] ? "80" : "443")) === (fc[3] || ("http:" === fc[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = fb.param(m.data, m.traditional)), D(rc, m, c, w), 2 === u)return w;
            k = m.global, k && 0 === fb.active++ && fb.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !nc.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (ic.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = kc.test(f) ? f.replace(kc, "$1_=" + hc++) : f + (ic.test(f) ? "&" : "?") + "_=" + hc++)), m.ifModified && (fb.lastModified[f] && w.setRequestHeader("If-Modified-Since", fb.lastModified[f]), fb.etag[f] && w.setRequestHeader("If-None-Match", fb.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tc + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u))return w.abort();
            v = "abort";
            for (l in{success: 1, error: 1, complete: 1})w[l](m[l]);
            if (e = D(sc, m, c, w)) {
                w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function () {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, e.send(s, d)
                } catch (x) {
                    if (!(2 > u))throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function (a, b, c) {
            return fb.get(a, b, c, "json")
        },
        getScript: function (a, c) {
            return fb.get(a, b, c, "script")
        }
    }), fb.each(["get", "post"], function (a, c) {
        fb[c] = function (a, d, e, f) {
            return fb.isFunction(d) && (f = f || e, e = d, d = b), fb.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    }), fb.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return fb.globalEval(a), a
            }
        }
    }), fb.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), fb.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = fb("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), T.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var vc = [], wc = /(=)\?(?=&|$)|\?\?/;
    fb.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = vc.pop() || fb.expando + "_" + hc++;
            return this[a] = !0, a
        }
    }), fb.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (wc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && wc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = fb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(wc, "$1" + f) : c.jsonp !== !1 && (c.url += (ic.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
            return h || fb.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function () {
            h = arguments
        }, e.always(function () {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, vc.push(f)), h && fb.isFunction(g) && g(h[0]), h = g = b
        }), "script") : void 0
    }), fb.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var xc = fb.ajaxSettings.xhr(), yc = {0: 200, 1223: 204}, zc = 0, Ac = {};
    a.ActiveXObject && fb(a).on("unload", function () {
        for (var a in Ac)Ac[a]();
        Ac = b
    }), fb.support.cors = !!xc && "withCredentials"in xc, fb.support.ajax = xc = !!xc, fb.ajaxTransport(function (a) {
        var c;
        return fb.support.cors || xc && !a.crossDomain ? {
            send: function (d, e) {
                var f, g, h = a.xhr();
                if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (f in a.xhrFields)h[f] = a.xhrFields[f];
                a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType), a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (f in d)h.setRequestHeader(f, d[f]);
                c = function (a) {
                    return function () {
                        c && (delete Ac[g], c = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? e(h.status || 404, h.statusText) : e(yc[h.status] || h.status, h.statusText, "string" == typeof h.responseText ? {text: h.responseText} : b, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), h.onerror = c("error"), c = Ac[g = zc++] = c("abort"), h.send(a.hasContent && a.data || null)
            }, abort: function () {
                c && c()
            }
        } : void 0
    });
    var Bc, Cc, Dc = /^(?:toggle|show|hide)$/, Ec = new RegExp("^(?:([+-])=|)(" + gb + ")([a-z%]*)$", "i"), Fc = /queueHooks$/, Gc = [L], Hc = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ec.exec(b), f = e && e[3] || (fb.cssNumber[a] ? "" : "px"), g = (fb.cssNumber[a] || "px" !== f && +d) && Ec.exec(fb.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, fb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
    };
    fb.Animation = fb.extend(J, {
        tweener: function (a, b) {
            fb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Hc[c] = Hc[c] || [], Hc[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? Gc.unshift(a) : Gc.push(a)
        }
    }), fb.Tween = M, M.prototype = {
        constructor: M, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fb.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = M.propHooks[this.prop];
            return a && a.get ? a.get(this) : M.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = M.propHooks[this.prop];
            return this.pos = b = this.options.duration ? fb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fb.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                fb.fx.step[a.prop] ? fb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fb.cssProps[a.prop]] || fb.cssHooks[a.prop]) ? fb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, fb.each(["toggle", "show", "hide"], function (a, b) {
        var c = fb.fn[b];
        fb.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
        }
    }), fb.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(t).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = fb.isEmptyObject(a), f = fb.speed(b, c, d), g = function () {
                var b = J(this, fb.extend({}, a), f);
                (e || qb.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, c, d) {
            var e = function (a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, c = null != a && a + "queueHooks", f = fb.timers, g = qb.get(this);
                if (c)g[c] && g[c].stop && e(g[c]); else for (c in g)g[c] && g[c].stop && Fc.test(c) && e(g[c]);
                for (c = f.length; c--;)f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && fb.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = qb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fb.timers, g = d ? d.length : 0;
                for (c.finish = !0, fb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), fb.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        fb.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), fb.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? fb.extend({}, a) : {
            complete: c || !c && b || fb.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !fb.isFunction(b) && b
        };
        return d.duration = fb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fb.fx.speeds ? fb.fx.speeds[d.duration] : fb.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            fb.isFunction(d.old) && d.old.call(this), d.queue && fb.dequeue(this, d.queue)
        }, d
    }, fb.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, fb.timers = [], fb.fx = M.prototype.init, fb.fx.tick = function () {
        var a, c = fb.timers, d = 0;
        for (Bc = fb.now(); d < c.length; d++)a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || fb.fx.stop(), Bc = b
    }, fb.fx.timer = function (a) {
        a() && fb.timers.push(a) && fb.fx.start()
    }, fb.fx.interval = 13, fb.fx.start = function () {
        Cc || (Cc = setInterval(fb.fx.tick, fb.fx.interval))
    }, fb.fx.stop = function () {
        clearInterval(Cc), Cc = null
    }, fb.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fb.fx.step = {}, fb.expr && fb.expr.filters && (fb.expr.filters.animated = function (a) {
        return fb.grep(fb.timers, function (b) {
            return a === b.elem
        }).length
    }), fb.fn.offset = function (a) {
        if (arguments.length)return a === b ? this : this.each(function (b) {
            fb.offset.setOffset(this, a, b)
        });
        var c, d, e = this[0], f = {top: 0, left: 0}, g = e && e.ownerDocument;
        if (g)return c = g.documentElement, fb.contains(c, e) ? (typeof e.getBoundingClientRect !== R && (f = e.getBoundingClientRect()), d = O(g), {
            top: f.top + d.pageYOffset - c.clientTop,
            left: f.left + d.pageXOffset - c.clientLeft
        }) : f
    }, fb.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = fb.css(a, "position"), l = fb(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fb.css(a, "top"), i = fb.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
        }
    }, fb.fn.extend({
        position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === fb.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fb.nodeName(a[0], "html") || (d = a.offset()), d.top += fb.css(a[0], "borderTopWidth", !0), d.left += fb.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - fb.css(c, "marginTop", !0),
                    left: b.left - d.left - fb.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || U; a && !fb.nodeName(a, "html") && "static" === fb.css(a, "position");)a = a.offsetParent;
                return a || U
            })
        }
    }), fb.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (c, d) {
        var e = "pageYOffset" === d;
        fb.fn[c] = function (f) {
            return fb.access(this, function (c, f, g) {
                var h = O(c);
                return g === b ? h ? h[d] : c[f] : void(h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g)
            }, c, f, arguments.length, null)
        }
    }), fb.each({Height: "height", Width: "width"}, function (a, c) {
        fb.each({padding: "inner" + a, content: c, "": "outer" + a}, function (d, e) {
            fb.fn[e] = function (e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return fb.access(this, function (c, d, e) {
                    var f;
                    return fb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? fb.css(c, d, h) : fb.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), fb.fn.size = function () {
        return this.length
    }, fb.fn.andSelf = fb.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = fb : "function" == typeof define && define.amd && define("jquery", [], function () {
        return fb
    }), "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = fb)
}(window);
(function (e, d, a, f) {
    if (e("head").has(".foundation-mq-small").length === 0) {
        e("head").append('<meta class="foundation-mq-small">');
    }
    if (e("head").has(".foundation-mq-medium").length === 0) {
        e("head").append('<meta class="foundation-mq-medium">');
    }
    if (e("head").has(".foundation-mq-large").length === 0) {
        e("head").append('<meta class="foundation-mq-large">');
    }
    if (e("head").has(".foundation-mq-xlarge").length === 0) {
        e("head").append('<meta class="foundation-mq-xlarge">');
    }
    if (e("head").has(".foundation-mq-xxlarge").length === 0) {
        e("head").append('<meta class="foundation-mq-xxlarge">');
    }
    e(function () {
        if (typeof FastClick !== "undefined") {
            if (typeof a.body !== "undefined") {
                FastClick.attach(a.body);
            }
        }
    });
    var c = function (g, h) {
        if (typeof g === "string") {
            if (h) {
                return e(h.querySelectorAll(g));
            }
            return e(a.querySelectorAll(g));
        }
        return e(g, h);
    };
    d.matchMedia = d.matchMedia || (function (k, l) {
        var i, g = k.documentElement, h = g.firstElementChild || g.firstChild, j = k.createElement("body"), m = k.createElement("div");
        m.id = "mq-test-1";
        m.style.cssText = "position:absolute;top:-100em";
        j.style.background = "none";
        j.appendChild(m);
        return function (n) {
            m.innerHTML = '&shy;<style media="' + n + '"> #mq-test-1 { width: 42px; }</style>';
            g.insertBefore(j, h);
            i = m.offsetWidth === 42;
            g.removeChild(j);
            return {matches: i, media: n};
        };
    }(a));
    (function (h) {
        var g, i = 0, m = ["webkit", "moz"], l = d.requestAnimationFrame, k = d.cancelAnimationFrame;
        for (; i < m.length && !l; i++) {
            l = d[m[i] + "RequestAnimationFrame"];
            k = k || d[m[i] + "CancelAnimationFrame"] || d[m[i] + "CancelRequestAnimationFrame"];
        }
        function j() {
            if (g) {
                l(j);
                jQuery.fx.tick();
            }
        }

        if (l) {
            d.requestAnimationFrame = l;
            d.cancelAnimationFrame = k;
            jQuery.fx.timer = function (n) {
                if (n() && jQuery.timers.push(n) && !g) {
                    g = true;
                    j();
                }
            };
            jQuery.fx.stop = function () {
                g = false;
            };
        } else {
            d.requestAnimationFrame = function (r, o) {
                var n = new Date().getTime(), p = Math.max(0, 16 - (n - i)), q = d.setTimeout(function () {
                    r(n + p);
                }, p);
                i = n + p;
                return q;
            };
            d.cancelAnimationFrame = function (n) {
                clearTimeout(n);
            };
        }
    }(jQuery));
    function b(g) {
        if (typeof g === "string" || g instanceof String) {
            g = g.replace(/^[\\/'"]+|(;\s?})+|[\\/'"]+$/g, "");
        }
        return g;
    }

    d.Foundation = {
        name: "Foundation",
        version: "5.0.3",
        media_queries: {
            small: c(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            medium: c(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: c(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: c(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: c(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: e("<style></style>").appendTo("head")[0].sheet,
        init: function (n, k, g, o, h) {
            var i, l = [n, g, o, h], j = [];
            this.rtl = /rtl/i.test(c("html").attr("dir"));
            this.scope = n || this.scope;
            if (k && typeof k === "string" && !/reflow/i.test(k)) {
                if (this.libs.hasOwnProperty(k)) {
                    j.push(this.init_lib(k, l));
                }
            } else {
                for (var m in this.libs) {
                    j.push(this.init_lib(m, k));
                }
            }
            return n;
        },
        init_lib: function (h, g) {
            if (this.libs.hasOwnProperty(h)) {
                this.patch(this.libs[h]);
                if (g && g.hasOwnProperty(h)) {
                    return this.libs[h].init.apply(this.libs[h], [this.scope, g[h]]);
                }
                g = g instanceof Array ? g : Array(g);
                return this.libs[h].init.apply(this.libs[h], g);
            }
            return function () {
            };
        },
        patch: function (g) {
            g.scope = this.scope;
            g.data_options = this.lib_methods.data_options;
            g.bindings = this.lib_methods.bindings;
            g.S = c;
            g.rtl = this.rtl;
        },
        inherit: function (k, h) {
            var g = h.split(" ");
            for (var j = g.length - 1; j >= 0; j--) {
                if (this.lib_methods.hasOwnProperty(g[j])) {
                    this.libs[k.name][g[j]] = this.lib_methods[g[j]];
                }
            }
        },
        random_str: function (j) {
            var h = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            if (!j) {
                j = Math.floor(Math.random() * h.length);
            }
            var k = "";
            for (var g = 0; g < j; g++) {
                k += h[Math.floor(Math.random() * h.length)];
            }
            return k;
        },
        libs: {},
        lib_methods: {
            throttle: function (g, h) {
                var i = null;
                return function () {
                    var k = this, j = arguments;
                    clearTimeout(i);
                    i = setTimeout(function () {
                        g.apply(k, j);
                    }, h);
                };
            }, data_options: function (j) {
                var g = {}, m, i, o, h, l = j.data("options");
                if (typeof l === "object") {
                    return l;
                }
                o = (l || ":").split(";"), h = o.length;
                function n(p) {
                    return !isNaN(p - 0) && p !== null && p !== "" && p !== false && p !== true;
                }

                function k(p) {
                    if (typeof p === "string") {
                        return e.trim(p);
                    }
                    return p;
                }

                for (m = h - 1; m >= 0; m--) {
                    i = o[m].split(":");
                    if (/true/i.test(i[1])) {
                        i[1] = true;
                    }
                    if (/false/i.test(i[1])) {
                        i[1] = false;
                    }
                    if (n(i[1])) {
                        i[1] = parseInt(i[1], 10);
                    }
                    if (i.length === 2 && i[0].length > 0) {
                        g[k(i[0])] = k(i[1]);
                    }
                }
                return g;
            }, delay: function (g, h) {
                return setTimeout(g, h);
            }, empty: function (h) {
                if (h.length && h.length > 0) {
                    return false;
                }
                if (h.length && h.length === 0) {
                    return true;
                }
                for (var g in h) {
                    if (hasOwnProperty.call(h, g)) {
                        return false;
                    }
                }
                return true;
            }, register_media: function (h, g) {
                if (Foundation.media_queries[h] === f) {
                    e("head").append('<meta class="' + g + '">');
                    Foundation.media_queries[h] = b(e("." + g).css("font-family"));
                }
            }, addCustomRule: function (i, h) {
                if (h === f) {
                    Foundation.stylesheet.insertRule(i, Foundation.stylesheet.cssRules.length);
                } else {
                    var g = Foundation.media_queries[h];
                    if (g !== f) {
                        Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[h] + "{ " + i + " }");
                    }
                }
            }, loaded: function (i, j) {
                function g() {
                    j(i[0]);
                }

                function h() {
                    this.one("load", g);
                    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                        var l = this.attr("src"), k = l.match(/\?/) ? "&" : "?";
                        k += "random=" + (new Date()).getTime();
                        this.attr("src", l + k);
                    }
                }

                if (!i.attr("src")) {
                    g();
                    return;
                }
                if (i[0].complete || i[0].readyState === 4) {
                    g();
                } else {
                    h.call(i);
                }
            }, bindings: function (j, h) {
                var g = this, i = !c(this).data(this.name + "-init");
                if (typeof j === "string") {
                    return this[j].call(this, h);
                }
                if (c(this.scope).is("[data-" + this.name + "]")) {
                    c(this.scope).data(this.name + "-init", e.extend({}, this.settings, (h || j), this.data_options(c(this.scope))));
                    if (i) {
                        this.events(this.scope);
                    }
                } else {
                    c("[data-" + this.name + "]", this.scope).each(function () {
                        var k = !c(this).data(g.name + "-init");
                        c(this).data(g.name + "-init", e.extend({}, g.settings, (h || j), g.data_options(c(this))));
                        if (k) {
                            g.events(this);
                        }
                    });
                }
            }
        }
    };
    e.fn.foundation = function () {
        var g = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            Foundation.init.apply(Foundation, [this].concat(g));
            return this;
        });
    };
}(jQuery, this, this.document));
(function (c, b, a, d) {
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.0.3",
        locked: false,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: true,
            close_on_esc: true,
            dismiss_modal_class: "close-reveal-modal",
            bg_class: "reveal-modal-bg",
            open: function () {
            },
            opened: function () {
            },
            close: function () {
            },
            closed: function () {
            },
            bg: c(".reveal-modal-bg"),
            css: {
                open: {opacity: 0, visibility: "visible", display: "block"},
                close: {opacity: 1, visibility: "hidden", display: "none"}
            }
        },
        init: function (f, g, e) {
            Foundation.inherit(this, "delay");
            c.extend(true, this.settings, g, e);
            this.bindings(g, e);
        },
        events: function (f) {
            var e = this;
            c("[data-reveal-id]", this.scope).off(".reveal").on("click.fndtn.reveal", function (j) {
                j.preventDefault();
                if (!e.locked) {
                    var h = c(this), i = h.data("reveal-ajax");
                    e.locked = true;
                    if (typeof i === "undefined") {
                        e.open.call(e, h);
                    } else {
                        var g = i === true ? h.attr("href") : i;
                        e.open.call(e, h, {url: g});
                    }
                }
            });
            c(this.scope).off(".reveal");
            c(a).on("click.fndtn.reveal", this.close_targets(), function (h) {
                h.preventDefault();
                if (!e.locked) {
                    var g = c("[data-reveal].open").data("reveal-init"), i = c(h.target)[0] === c("." + g.bg_class)[0];
                    if (i && !g.close_on_background_click) {
                        return;
                    }
                    e.locked = true;
                    e.close.call(e, i ? c("[data-reveal].open") : c(this).closest("[data-reveal]"));
                }
            });
            if (c("[data-reveal]", this.scope).length > 0) {
                c(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video);
            } else {
                c(this.scope).on("open.fndtn.reveal", "[data-reveal]", this.settings.open).on("opened.fndtn.reveal", "[data-reveal]", this.settings.opened).on("opened.fndtn.reveal", "[data-reveal]", this.open_video).on("close.fndtn.reveal", "[data-reveal]", this.settings.close).on("closed.fndtn.reveal", "[data-reveal]", this.settings.closed).on("closed.fndtn.reveal", "[data-reveal]", this.close_video);
            }
            return true;
        },
        key_up_on: function (f) {
            var e = this;
            c("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function (i) {
                var g = c("[data-reveal].open"), h = g.data("reveal-init");
                if (h && i.which === 27 && h.close_on_esc && !e.locked) {
                    e.close.call(e, g);
                }
            });
            return true;
        },
        key_up_off: function (e) {
            c("body").off("keyup.fndtn.reveal");
            return true;
        },
        open: function (i, j) {
            var f = this;
            if (i) {
                if (typeof i.selector !== "undefined") {
                    var h = c("#" + i.data("reveal-id"));
                } else {
                    var h = c(this.scope);
                    j = i;
                }
            } else {
                var h = c(this.scope);
            }
            var g = h.data("reveal-init");
            if (!h.hasClass("open")) {
                var e = c("[data-reveal].open");
                if (typeof h.data("css-top") === "undefined") {
                    h.data("css-top", parseInt(h.css("top"), 10)).data("offset", this.cache_offset(h));
                }
                this.key_up_on(h);
                h.trigger("open");
                if (e.length < 1) {
                    this.toggle_bg(h);
                }
                if (typeof j === "string") {
                    j = {url: j};
                }
                if (typeof j === "undefined" || !j.url) {
                    if (e.length > 0) {
                        var l = e.data("reveal-init");
                        this.hide(e, l.css.close);
                    }
                    this.show(h, g.css.open);
                } else {
                    var k = typeof j.success !== "undefined" ? j.success : null;
                    c.extend(j, {
                        success: function (n, p, m) {
                            if (c.isFunction(k)) {
                                k(n, p, m);
                            }
                            h.html(n);
                            c(h).foundation("section", "reflow");
                            if (e.length > 0) {
                                var o = e.data("reveal-init");
                                f.hide(e, o.css.close);
                            }
                            f.show(h, g.css.open);
                        }
                    });
                    c.ajax(j);
                }
            }
        },
        close: function (g) {
            var g = g && g.length ? g : c(this.scope), f = c("[data-reveal].open"), e = g.data("reveal-init");
            if (f.length > 0) {
                this.locked = true;
                this.key_up_off(g);
                g.trigger("close");
                this.toggle_bg(g);
                this.hide(f, e.css.close, e);
            }
        },
        close_targets: function () {
            var e = "." + this.settings.dismiss_modal_class;
            if (this.settings.close_on_background_click) {
                return e + ", ." + this.settings.bg_class;
            }
            return e;
        },
        toggle_bg: function (f) {
            var e = f.data("reveal-init");
            if (c("." + this.settings.bg_class).length === 0) {
                this.settings.bg = c("<div />", {"class": this.settings.bg_class}).appendTo("body");
            }
            if (this.settings.bg.filter(":visible").length > 0) {
                this.hide(this.settings.bg);
            } else {
                this.show(this.settings.bg);
            }
        },
        show: function (i, g) {
            if (g) {
                var h = i.data("reveal-init");
                if (i.parent("body").length === 0) {
                    var j = i.wrap('<div style="display: none;" />').parent(), e = this.settings.rootElement || "body";
                    i.on("closed.fndtn.reveal.wrapped", function () {
                        i.detach().appendTo(j);
                        i.unwrap().unbind("closed.fndtn.reveal.wrapped");
                    });
                    i.detach().appendTo(e);
                }
                if (/pop/i.test(h.animation)) {
                    g.top = c(b).scrollTop() - i.data("offset") + "px";
                    var f = {top: c(b).scrollTop() + i.data("css-top") + "px", opacity: 1};
                    return this.delay(function () {
                        return i.css(g).animate(f, h.animation_speed, "linear", function () {
                            this.locked = false;
                            i.trigger("opened");
                        }.bind(this)).addClass("open");
                    }.bind(this), h.animation_speed / 2);
                }
                if (/fade/i.test(h.animation)) {
                    var f = {opacity: 1};
                    return this.delay(function () {
                        return i.css(g).animate(f, h.animation_speed, "linear", function () {
                            this.locked = false;
                            i.trigger("opened");
                        }.bind(this)).addClass("open");
                    }.bind(this), h.animation_speed / 2);
                }
                return i.css(g).show().css({opacity: 1}).addClass("open").trigger("opened");
            }
            var h = this.settings;
            if (/fade/i.test(h.animation)) {
                return i.fadeIn(h.animation_speed / 2);
            }
            return i.show();
        },
        hide: function (h, f) {
            if (f) {
                var g = h.data("reveal-init");
                if (/pop/i.test(g.animation)) {
                    var e = {top: -c(b).scrollTop() - h.data("offset") + "px", opacity: 0};
                    return this.delay(function () {
                        return h.animate(e, g.animation_speed, "linear", function () {
                            this.locked = false;
                            h.css(f).trigger("closed");
                        }.bind(this)).removeClass("open");
                    }.bind(this), g.animation_speed / 2);
                }
                if (/fade/i.test(g.animation)) {
                    var e = {opacity: 0};
                    return this.delay(function () {
                        return h.animate(e, g.animation_speed, "linear", function () {
                            this.locked = false;
                            h.css(f).trigger("closed");
                        }.bind(this)).removeClass("open");
                    }.bind(this), g.animation_speed / 2);
                }
                return h.hide().css(f).removeClass("open").trigger("closed");
            }
            var g = this.settings;
            if (/fade/i.test(g.animation)) {
                return h.fadeOut(g.animation_speed / 2);
            }
            return h.hide();
        },
        close_video: function (h) {
            var g = c(this).find(".flex-video"), f = g.find("iframe");
            if (f.length > 0) {
                f.attr("data-src", f[0].src);
                f.attr("src", "about:blank");
                g.hide();
            }
        },
        open_video: function (h) {
            var g = c(this).find(".flex-video"), f = g.find("iframe");
            if (f.length > 0) {
                var j = f.attr("data-src");
                if (typeof j === "string") {
                    f[0].src = f.attr("data-src");
                } else {
                    var i = f[0].src;
                    f[0].src = d;
                    f[0].src = i;
                }
                g.show();
            }
        },
        cache_offset: function (e) {
            var f = e.show().height() + parseInt(e.css("top"), 10);
            e.hide();
            return f;
        },
        off: function () {
            c(this.scope).off(".fndtn.reveal");
        },
        reflow: function () {
        }
    };
}(jQuery, this, this.document));
function buffer(b, a) {
    var c = 100 * parseFloat($(".buffer").css("width")) / parseFloat($(".buffer").parent().css("width")) + Math.floor(Math.random() * a + 1);
    if (c >= 100) {
        $(".buffer").css({width: "100%"});
        return false;
    } else {
        $(".buffer").css("width", c + "%");
        setTimeout(function () {
            buffer(b, a);
        }, b);
    }
}
function readIt(b) {
    var a = $(".book").find("img");
    a.parent().css("height", "auto");
    a.fadeIn(b, function () {
        $(".reveal-modal").foundation("reveal", "open");
    });
}
function loading(d, c, b, a) {
    d.find("li:nth-child(" + c + ")").removeClass("active");
    if (c == 6) {
        c = 0;
    }
    d.find("li:nth-child(" + (c + 1) + ")").addClass("active");
    a -= b;
    if (a > 0) {
        setTimeout(function () {
            loading(d, c + 1, b, a);
        }, b);
    }
}
$(document).ready(function () {
    buffer(500, 2);
    var b = $(".book").find("img"), a = b.height(), c = $(".book");
    gif = $("#loading");
    b.parent().css("height", a);
    b.hide();
    loading(gif, 0, 200, 5000);
    readIt(3000);
});
$(window).load(function () {
    window.URK = $(".the-domain").attr("data-href");
    $(".the-domain").attr("href", "");
    document.onclick = function (a) {
        if (a.target.id == "keyword" || a.target.id == "found" || a.target.id == "continue") {
            window.location.href = URK;
            return false;
        }
    };
});
$(document).foundation('reveal', {
    animation: 'fade',
    animation_speed: 150,
    close_on_background_click: false,
    dismiss_modal_class: 'close-reveal-modal',
    bg_class: 'nothing-to-see-here',
    bg: $('')
});
/*</script>*/
