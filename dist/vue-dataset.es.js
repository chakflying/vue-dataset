import { ref as _, computed as u, watch as L, provide as c, renderSlot as R, nextTick as B, inject as d, openBlock as f, createElementBlock as g, toDisplayString as i, createBlock as M, resolveDynamicComponent as K, withCtx as z, Fragment as A, renderList as F, createCommentVNode as G, createElementVNode as b, normalizeClass as m, withModifiers as N } from "vue";
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
function p(t, n, s) {
  let e;
  return function() {
    const r = this, o = arguments;
    clearTimeout(e), s && !e && t.apply(r, o), e = setTimeout(function() {
      e = null, s || t.apply(r, o);
    }, n);
  };
}
function O(t) {
  for (const n in t)
    return !1;
  return !0;
}
function q(t, n) {
  const e = [], r = [];
  let o;
  if (e.push(1), t <= 1)
    return e;
  for (let a = n - 2; a <= n + 2; a++)
    a < t && a > 1 && e.push(a);
  e.push(t);
  for (let a = 0; a < e.length; a++)
    o && (e[a] - o === 2 ? r.push(o + 1) : e[a] - o !== 1 && r.push(V)), r.push(e[a]), o = e[a];
  return r;
}
function H(t, n = {}) {
  const s = [];
  let e;
  const r = t.length;
  return t = t.map(function(o, a) {
    return o[0] === "-" ? (s[a] = -1, o = o.substring(1)) : s[a] = 1, o;
  }), function(o, a) {
    for (e = 0; e < r; e++) {
      const l = t[e], h = n[l] ? n[l](o.value[l]) : o.value[l], x = n[l] ? n[l](a.value[l]) : a.value[l];
      if (h > x)
        return s[e];
      if (h < x)
        return -s[e];
    }
    return 0;
  };
}
function J(t, n) {
  for (const s in n)
    t = t.filter(function(e) {
      const r = e.value;
      for (const o in r)
        if (o === s) {
          if (typeof n[s] == "function")
            return n[s](r[o]);
          if (n[s] === "" || r[o] === n[s])
            return !0;
        }
      return !1;
    });
  return t;
}
function Q(t, n, s, e) {
  e = String(e).toLowerCase();
  for (const r in s)
    if (t.length === 0 || t.indexOf(r) !== -1) {
      const o = String(s[r]).toLowerCase();
      for (const a in n)
        if (a === r && typeof n[a] == "function") {
          const l = n[a](o, e, s);
          if (l === !0)
            return l;
        }
      if (o.indexOf(e) >= 0)
        return !0;
    }
  return !1;
}
const P = (t, n) => {
  const s = t.__vccOpts || t;
  for (const [e, r] of n)
    s[e] = r;
  return s;
}, U = {
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
    const n = _(1), s = _(""), e = _(10), r = _(W), o = _([]), a = (w) => {
      s.value = w;
    }, l = async (w) => {
      e.value = w, await B(), n.value > I.value && h(S.value[S.value.length - 1]);
    }, h = (w) => {
      n.value = w;
    }, x = u(() => (t.dsData, s.value, t.dsSortby, t.dsFilterFields, t.dsSearchIn, t.dsSearchAs, t.dsSortAs, Date.now())), T = u(() => o.value.slice(E.value, D.value)), S = u(() => q(I.value, n.value)), k = u(() => o.value.length), I = u(() => Math.ceil(k.value / e.value)), E = u(() => (n.value - 1) * e.value), D = u(() => n.value * e.value);
    return L(k, (w, j) => {
      h(1);
    }), L(x, (w, j) => {
      let v = [];
      !s.value && !t.dsSortby.length && O(t.dsFilterFields) ? v = t.dsData.map((y, C) => C) : (v = t.dsData.map((y, C) => ({ index: C, value: y })), O(t.dsFilterFields) || (v = J(v, t.dsFilterFields)), s.value && (v = v.filter((y) => Q(t.dsSearchIn, t.dsSearchAs, y.value, s.value))), t.dsSortby.length && v.sort(H(t.dsSortby, t.dsSortAs)), v = v.map((y) => y.index)), o.value = v;
    }, {
      immediate: !0
    }), c("dsIndexes", o), c("search", a), c("showEntries", l), c("setActive", h), c("datasetI18n", r), c("dsData", u(() => t.dsData)), c("dsRows", T), c("dsPages", S), c("dsResultsNumber", k), c("dsPagecount", I), c("dsFrom", E), c("dsTo", D), c("dsPage", n), {
      dsIndexes: o,
      dsShowEntries: e,
      dsResultsNumber: k,
      dsPage: n,
      dsPagecount: I,
      dsFrom: E,
      dsTo: D,
      dsRows: T,
      dsPages: S,
      search: a,
      showEntries: l,
      setActive: h
    };
  }
};
function X(t, n, s, e, r, o) {
  return R(t.$slots, "default", {
    ds: {
      dsIndexes: e.dsIndexes,
      dsShowEntries: e.dsShowEntries,
      dsResultsNumber: e.dsResultsNumber,
      dsPage: e.dsPage,
      dsPagecount: e.dsPagecount,
      dsFrom: e.dsFrom,
      dsTo: e.dsTo,
      dsData: s.dsData,
      dsRows: e.dsRows,
      dsPages: e.dsPages,
      search: e.search,
      showEntries: e.showEntries,
      setActive: e.setActive
    }
  });
}
const me = /* @__PURE__ */ P(U, [["render", X]]), Y = {
  setup() {
    const t = d("dsResultsNumber"), n = d("dsFrom"), s = d("dsTo"), e = u(() => t.value !== 0 ? n.value + 1 : 0), r = u(() => s.value >= t.value ? t.value : s.value);
    return {
      datasetI18n: d("datasetI18n"),
      dsResultsNumber: t,
      showing: e,
      showingTo: r
    };
  }
};
function Z(t, n, s, e, r, o) {
  return f(), g("div", null, i(e.datasetI18n.showing) + " " + i(e.showing) + " " + i(e.datasetI18n.showingTo) + " " + i(e.showingTo) + " " + i(e.datasetI18n.showingOf) + " " + i(e.dsResultsNumber) + " " + i(e.datasetI18n.showingEntries), 1);
}
const we = /* @__PURE__ */ P(Y, [["render", Z]]), $ = {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  setup() {
    const t = u(() => {
      const n = [];
      for (let s = d("dsFrom").value; s < d("dsTo").value; s++)
        n.push(s);
      return n;
    });
    return {
      dsData: d("dsData"),
      dsRows: d("dsRows"),
      indexes: t
    };
  }
};
function ee(t, n, s, e, r, o) {
  return f(), M(K(s.tag), null, {
    default: z(() => [
      (f(!0), g(A, null, F(e.dsRows, (a, l) => R(t.$slots, "default", {
        row: e.dsData[a],
        rowIndex: a,
        index: e.indexes[l]
      })), 256)),
      e.dsRows.length ? G("", !0) : R(t.$slots, "noDataFound", { key: 0 })
    ]),
    _: 3
  });
}
const _e = /* @__PURE__ */ P($, [["render", ee]]), te = {
  props: {
    pageLinkClass: {
      type: String,
      default: ""
    }
  },
  setup() {
    const t = _(V), n = d("dsPage"), s = d("dsPagecount"), e = u(() => n.value === 1), r = u(() => n.value === s.value || s.value === 0);
    return {
      datasetI18n: d("datasetI18n"),
      setActive: d("setActive"),
      dsPages: d("dsPages"),
      dsPagecount: s,
      dsPage: n,
      morePages: t,
      disabledPrevious: e,
      disabledNext: r
    };
  }
}, se = { class: "pagination" }, ne = ["tabindex", "aria-disabled"], ae = ["onClick"], re = ["tabindex", "aria-disabled"];
function oe(t, n, s, e, r, o) {
  return f(), g("ul", se, [
    b("li", {
      class: m(["page-item", e.disabledPrevious && "disabled"])
    }, [
      b("a", {
        class: m(["page-link", s.pageLinkClass]),
        href: "#",
        tabindex: e.disabledPrevious ? "-1" : null,
        "aria-disabled": e.disabledPrevious ? "true" : null,
        onClick: n[0] || (n[0] = N((a) => e.setActive(e.dsPage !== 1 && e.dsPagecount !== 0 ? e.dsPage - 1 : e.dsPage), ["prevent"]))
      }, i(e.datasetI18n.previous), 11, ne)
    ], 2),
    (f(!0), g(A, null, F(e.dsPages, (a, l) => (f(), g("li", {
      key: l,
      class: m(["page-item", a === e.dsPage && "active", a === e.morePages && "disabled"])
    }, [
      a !== e.morePages ? (f(), g("a", {
        key: 0,
        class: m(["page-link", s.pageLinkClass]),
        href: "#",
        onClick: N((h) => e.setActive(a), ["prevent"])
      }, i(a), 11, ae)) : (f(), g("span", {
        key: 1,
        class: m(["page-link", s.pageLinkClass])
      }, i(a), 3))
    ], 2))), 128)),
    b("li", {
      class: m(["page-item", e.disabledNext && "disabled"])
    }, [
      b("a", {
        class: m(["page-link", s.pageLinkClass]),
        href: "#",
        tabindex: e.disabledNext ? "-1" : null,
        "aria-disabled": e.disabledNext ? "true" : null,
        onClick: n[1] || (n[1] = N((a) => e.setActive(e.dsPage !== e.dsPagecount && e.dsPagecount !== 0 ? e.dsPage + 1 : e.dsPage), ["prevent"]))
      }, i(e.datasetI18n.next), 11, re)
    ], 2)
  ]);
}
const be = /* @__PURE__ */ P(te, [["render", oe]]), le = {
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
    const n = d("search"), s = _(""), e = p((r) => {
      n(r);
    }, t.wait);
    return {
      dsSearch: s,
      input: e
    };
  }
}, de = ["placeholder", "value"];
function ie(t, n, s, e, r, o) {
  return f(), g("input", {
    type: "text",
    placeholder: s.dsSearchPlaceholder,
    class: "form-input",
    value: e.dsSearch,
    onInput: n[0] || (n[0] = (a) => e.input(a.target.value))
  }, null, 40, de);
}
const ye = /* @__PURE__ */ P(le, [["render", ie]]), ce = {
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
        { value: 10, text: 10 },
        { value: 25, text: 25 },
        { value: 50, text: 50 },
        { value: 100, text: 100 }
      ]
    }
  },
  emits: ["changed"],
  setup(t, { emit: n }) {
    const s = d("showEntries"), e = (r) => {
      n("changed", Number(r.target.value)), s(Number(r.target.value));
    };
    return s(Number(t.dsShowEntries)), {
      datasetI18n: d("datasetI18n"),
      change: e
    };
  }
}, ue = { class: "form-inline" }, fe = ["value"], ge = ["value"];
function ve(t, n, s, e, r, o) {
  return f(), g("div", ue, [
    b("label", null, i(e.datasetI18n.show), 1),
    b("select", {
      value: s.dsShowEntries,
      class: m(["form-input", s.selectClass]),
      onChange: n[0] || (n[0] = (...a) => e.change && e.change(...a))
    }, [
      (f(!0), g(A, null, F(s.dsShowEntriesLovs, (a) => (f(), g("option", {
        key: a.value,
        value: a.value
      }, i(a.text), 9, ge))), 128))
    ], 42, fe),
    b("label", null, i(e.datasetI18n.entries), 1)
  ]);
}
const Pe = /* @__PURE__ */ P(ce, [["render", ve]]);
export {
  me as Dataset,
  we as DatasetInfo,
  _e as DatasetItem,
  be as DatasetPager,
  ye as DatasetSearch,
  Pe as DatasetShow
};
