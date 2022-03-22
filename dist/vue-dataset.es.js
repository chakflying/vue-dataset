import { ref as b, computed as u, watch as L, provide as c, renderSlot as R, nextTick as j, inject as d, openBlock as f, createElementBlock as g, toDisplayString as i, createBlock as B, resolveDynamicComponent as M, withCtx as K, Fragment as A, renderList as F, createCommentVNode as z, defineProps as G, createElementVNode as _, normalizeClass as m, withModifiers as N } from "vue";
const W = {
  show: "Show",
  entries: "entries",
  previous: "Previous",
  next: "Next",
  showing: "Showing",
  showingTo: "to",
  showingOf: "of",
  showingEntries: "entries"
}, V = "...";
function q(t, s, n) {
  let e;
  return function() {
    const r = this, o = arguments;
    clearTimeout(e), n && !e && t.apply(r, o), e = setTimeout(function() {
      e = null, n || t.apply(r, o);
    }, s);
  };
}
function O(t) {
  for (const s in t)
    return !1;
  return !0;
}
function H(t, s) {
  const e = [], r = [];
  let o;
  if (e.push(1), t <= 1)
    return e;
  for (let a = s - 2; a <= s + 2; a++)
    a < t && a > 1 && e.push(a);
  e.push(t);
  for (let a = 0; a < e.length; a++)
    o && (e[a] - o === 2 ? r.push(o + 1) : e[a] - o !== 1 && r.push(V)), r.push(e[a]), o = e[a];
  return r;
}
function J(t, s = {}) {
  const n = [];
  let e;
  const r = t.length;
  return t = t.map(function(o, a) {
    return o[0] === "-" ? (n[a] = -1, o = o.substring(1)) : n[a] = 1, o;
  }), function(o, a) {
    for (e = 0; e < r; e++) {
      const l = t[e], h = s[l] ? s[l](o.value[l]) : o.value[l], S = s[l] ? s[l](a.value[l]) : a.value[l];
      if (h > S)
        return n[e];
      if (h < S)
        return -n[e];
    }
    return 0;
  };
}
function Q(t, s) {
  for (const n in s)
    t = t.filter(function(e) {
      const r = e.value;
      for (const o in r)
        if (o === n) {
          if (typeof s[n] == "function")
            return s[n](r[o]);
          if (s[n] === "" || r[o] === s[n])
            return !0;
        }
      return !1;
    });
  return t;
}
function U(t, s, n, e) {
  e = String(e).toLowerCase();
  for (const r in n)
    if (t.length === 0 || t.indexOf(r) !== -1) {
      const o = String(n[r]).toLowerCase();
      for (const a in s)
        if (a === r && typeof s[a] == "function") {
          const l = s[a](o, e, n);
          if (l === !0)
            return l;
        }
      if (o.indexOf(e) >= 0)
        return !0;
    }
  return !1;
}
const P = (t, s) => {
  const n = t.__vccOpts || t;
  for (const [e, r] of s)
    n[e] = r;
  return n;
}, X = {
  props: {
    dsData: {
      type: Array,
      default: () => []
    },
    dsFilterFields: {
      type: Object,
      default: () => ({})
    },
    dsSortby: {
      type: Array,
      default: () => []
    },
    dsSearchIn: {
      type: Array,
      default: () => []
    },
    dsSearchAs: {
      type: Object,
      default: () => ({})
    },
    dsSortAs: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t) {
    const s = b(1), n = b(""), e = b(10), r = b(W), o = b([]), a = (w) => {
      n.value = w;
    }, l = async (w) => {
      e.value = w, await j(), s.value > I.value && h(x.value[x.value.length - 1]);
    }, h = (w) => {
      s.value = w;
    }, S = u(() => (t.dsData, n.value, t.dsSortby, t.dsFilterFields, t.dsSearchIn, t.dsSearchAs, t.dsSortAs, Date.now())), T = u(() => o.value.slice(E.value, D.value)), x = u(() => H(I.value, s.value)), k = u(() => o.value.length), I = u(() => Math.ceil(k.value / e.value)), E = u(() => (s.value - 1) * e.value), D = u(() => s.value * e.value);
    return L(k, (w, p) => {
      h(1);
    }), L(S, (w, p) => {
      let v = [];
      !n.value && !t.dsSortby.length && O(t.dsFilterFields) ? v = t.dsData.map((y, C) => C) : (v = t.dsData.map((y, C) => ({ index: C, value: y })), O(t.dsFilterFields) || (v = Q(v, t.dsFilterFields)), n.value && (v = v.filter((y) => U(t.dsSearchIn, t.dsSearchAs, y.value, n.value))), t.dsSortby.length && v.sort(J(t.dsSortby, t.dsSortAs)), v = v.map((y) => y.index)), o.value = v;
    }, {
      immediate: !0
    }), c("dsIndexes", o), c("search", a), c("showEntries", l), c("setActive", h), c("datasetI18n", r), c("dsData", u(() => t.dsData)), c("dsRows", T), c("dsPages", x), c("dsResultsNumber", k), c("dsPagecount", I), c("dsFrom", E), c("dsTo", D), c("dsPage", s), {
      dsIndexes: o,
      dsShowEntries: e,
      dsResultsNumber: k,
      dsPage: s,
      dsPagecount: I,
      dsFrom: E,
      dsTo: D,
      dsRows: T,
      dsPages: x,
      search: a,
      showEntries: l,
      setActive: h
    };
  }
};
function Y(t, s, n, e, r, o) {
  return R(t.$slots, "default", {
    ds: {
      dsIndexes: e.dsIndexes,
      dsShowEntries: e.dsShowEntries,
      dsResultsNumber: e.dsResultsNumber,
      dsPage: e.dsPage,
      dsPagecount: e.dsPagecount,
      dsFrom: e.dsFrom,
      dsTo: e.dsTo,
      dsData: n.dsData,
      dsRows: e.dsRows,
      dsPages: e.dsPages,
      search: e.search,
      showEntries: e.showEntries,
      setActive: e.setActive
    }
  });
}
const we = /* @__PURE__ */ P(X, [["render", Y]]), Z = {
  setup() {
    const t = d("dsResultsNumber"), s = d("dsFrom"), n = d("dsTo"), e = u(() => t.value !== 0 ? s.value + 1 : 0), r = u(() => n.value >= t.value ? t.value : n.value);
    return {
      datasetI18n: d("datasetI18n"),
      dsResultsNumber: t,
      showing: e,
      showingTo: r
    };
  }
};
function $(t, s, n, e, r, o) {
  return f(), g("div", null, i(e.datasetI18n.showing) + " " + i(e.showing) + " " + i(e.datasetI18n.showingTo) + " " + i(e.showingTo) + " " + i(e.datasetI18n.showingOf) + " " + i(e.dsResultsNumber) + " " + i(e.datasetI18n.showingEntries), 1);
}
const be = /* @__PURE__ */ P(Z, [["render", $]]), ee = {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  setup() {
    const t = u(() => {
      const s = [];
      for (let n = d("dsFrom").value; n < d("dsTo").value; n++)
        s.push(n);
      return s;
    });
    return {
      dsData: d("dsData"),
      dsRows: d("dsRows"),
      indexes: t
    };
  }
};
function te(t, s, n, e, r, o) {
  return f(), B(M(n.tag), null, {
    default: K(() => [
      (f(!0), g(A, null, F(e.dsRows, (a, l) => R(t.$slots, "default", {
        row: e.dsData[a],
        rowIndex: a,
        index: e.indexes[l]
      })), 256)),
      e.dsRows.length ? z("", !0) : R(t.$slots, "noDataFound", { key: 0 })
    ]),
    _: 3
  });
}
const _e = /* @__PURE__ */ P(ee, [["render", te]]), se = {
  setup() {
    G({
      pageLinkClass: String
    });
    const t = b(V), s = d("dsPage"), n = d("dsPagecount"), e = u(() => s.value === 1), r = u(() => s.value === n.value || n.value === 0);
    return {
      datasetI18n: d("datasetI18n"),
      setActive: d("setActive"),
      dsPages: d("dsPages"),
      dsPagecount: n,
      dsPage: s,
      morePages: t,
      disabledPrevious: e,
      disabledNext: r
    };
  }
}, ne = { class: "pagination" }, ae = ["tabindex", "aria-disabled"], re = ["onClick"], oe = ["tabindex", "aria-disabled"];
function le(t, s, n, e, r, o) {
  return f(), g("ul", ne, [
    _("li", {
      class: m(["page-item", e.disabledPrevious && "disabled"])
    }, [
      _("a", {
        class: m(["page-link", t.pageLinkClass]),
        href: "#",
        tabindex: e.disabledPrevious ? "-1" : null,
        "aria-disabled": e.disabledPrevious ? "true" : null,
        onClick: s[0] || (s[0] = N((a) => e.setActive(e.dsPage !== 1 && e.dsPagecount !== 0 ? e.dsPage - 1 : e.dsPage), ["prevent"]))
      }, i(e.datasetI18n.previous), 11, ae)
    ], 2),
    (f(!0), g(A, null, F(e.dsPages, (a, l) => (f(), g("li", {
      key: l,
      class: m(["page-item", a === e.dsPage && "active", a === e.morePages && "disabled"])
    }, [
      a !== e.morePages ? (f(), g("a", {
        key: 0,
        class: m(["page-link", t.pageLinkClass]),
        href: "#",
        onClick: N((h) => e.setActive(a), ["prevent"])
      }, i(a), 11, re)) : (f(), g("span", {
        key: 1,
        class: m(["page-link", t.pageLinkClass])
      }, i(a), 3))
    ], 2))), 128)),
    _("li", {
      class: m(["page-item", e.disabledNext && "disabled"])
    }, [
      _("a", {
        class: m(["page-link", t.pageLinkClass]),
        href: "#",
        tabindex: e.disabledNext ? "-1" : null,
        "aria-disabled": e.disabledNext ? "true" : null,
        onClick: s[1] || (s[1] = N((a) => e.setActive(e.dsPage !== e.dsPagecount && e.dsPagecount !== 0 ? e.dsPage + 1 : e.dsPage), ["prevent"]))
      }, i(e.datasetI18n.next), 11, oe)
    ], 2)
  ]);
}
const ye = /* @__PURE__ */ P(se, [["render", le]]), de = {
  props: {
    dsSearchPlaceholder: {
      type: String,
      default: ""
    },
    wait: {
      type: Number,
      default: 0
    }
  },
  setup(t) {
    const s = d("search"), n = b(""), e = q((r) => {
      s(r);
    }, t.wait);
    return {
      dsSearch: n,
      input: e
    };
  }
}, ie = ["placeholder", "value"];
function ce(t, s, n, e, r, o) {
  return f(), g("input", {
    type: "text",
    placeholder: n.dsSearchPlaceholder,
    class: "form-input",
    value: e.dsSearch,
    onInput: s[0] || (s[0] = (a) => e.input(a.target.value))
  }, null, 40, ie);
}
const Pe = /* @__PURE__ */ P(de, [["render", ce]]), ue = {
  props: {
    selectClass: {
      type: String,
      default: ""
    },
    dsShowEntries: {
      type: Number,
      default: 10
    },
    dsShowEntriesLovs: {
      type: Array,
      default: () => [
        { value: 5, text: 5 },
        { value: 10, text: 10 },
        { value: 25, text: 25 },
        { value: 50, text: 50 },
        { value: 100, text: 100 }
      ]
    }
  },
  emits: ["changed"],
  setup(t, { emit: s }) {
    const n = d("showEntries"), e = (r) => {
      s("changed", Number(r.target.value)), n(Number(r.target.value));
    };
    return n(Number(t.dsShowEntries)), {
      datasetI18n: d("datasetI18n"),
      change: e
    };
  }
}, fe = { class: "form-inline" }, ge = ["value"], ve = ["value"];
function he(t, s, n, e, r, o) {
  return f(), g("div", fe, [
    _("label", null, i(e.datasetI18n.show), 1),
    _("select", {
      value: n.dsShowEntries,
      class: m(["form-input", n.selectClass]),
      onChange: s[0] || (s[0] = (...a) => e.change && e.change(...a))
    }, [
      (f(!0), g(A, null, F(n.dsShowEntriesLovs, (a) => (f(), g("option", {
        key: a.value,
        value: a.value
      }, i(a.text), 9, ve))), 128))
    ], 42, ge),
    _("label", null, i(e.datasetI18n.entries), 1)
  ]);
}
const Se = /* @__PURE__ */ P(ue, [["render", he]]);
export {
  we as Dataset,
  be as DatasetInfo,
  _e as DatasetItem,
  ye as DatasetPager,
  Pe as DatasetSearch,
  Se as DatasetShow
};
