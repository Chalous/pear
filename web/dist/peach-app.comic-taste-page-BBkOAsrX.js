(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bf6b2eca-7774-4de8-ae24-6565ede9cf2e", e._sentryDebugIdIdentifier = "sentry-dbid-bf6b2eca-7774-4de8-ae24-6565ede9cf2e");
	} catch {}
})();
import { apiGet as e, cardClass as t, require_jsx_runtime as n, useQuery as r } from "./peach-app.js";
import { Page as i } from "./peach-app.page-QAncjzM1.js";
// src/react/taste/comic-taste-page.tsx
var a = n();
function o({ title: e, rows: n }) {
	return /* @__PURE__ */ (0, a.jsxs)("section", {
		className: t(),
		children: [/* @__PURE__ */ (0, a.jsx)("h2", {
			className: "text-title-2-semibold",
			children: e
		}), n.length ? /* @__PURE__ */ (0, a.jsx)("ol", { children: n.map((e) => /* @__PURE__ */ (0, a.jsxs)("li", {
			className: "flex justify-between gap-3 py-1",
			children: [/* @__PURE__ */ (0, a.jsx)("span", { children: e.name }), /* @__PURE__ */ (0, a.jsxs)("span", { children: [e.books, " 本"] })]
		}, e.name)) }) : /* @__PURE__ */ (0, a.jsxs)("p", { children: [
			"暂无可统计的",
			e,
			"。"
		] })]
	});
}
function s() {
	let n = r({
		queryKey: ["comic-taste"],
		queryFn: ({ signal: t }) => e("/api/comic-taste", t)
	});
	if (n.isError) return /* @__PURE__ */ (0, a.jsx)(i, { children: /* @__PURE__ */ (0, a.jsxs)("p", {
		role: "alert",
		children: ["读取漫画口味失败。", /* @__PURE__ */ (0, a.jsx)("button", {
			onClick: () => void n.refetch(),
			children: "重试"
		})]
	}) });
	if (!n.data) return /* @__PURE__ */ (0, a.jsx)(i, { children: /* @__PURE__ */ (0, a.jsx)("p", { children: "正在读取漫画记录…" }) });
	let s = n.data;
	return /* @__PURE__ */ (0, a.jsxs)(i, { children: [
		/* @__PURE__ */ (0, a.jsxs)("section", {
			className: t(),
			children: [
				/* @__PURE__ */ (0, a.jsx)("h2", {
					className: "text-title-2-semibold",
					children: "漫画阅读与反馈"
				}),
				/* @__PURE__ */ (0, a.jsxs)("p", { children: [
					"有阅读进度 ",
					s.read_books,
					" 本，有反馈 ",
					s.feedback_books,
					" 本。"
				] }),
				/* @__PURE__ */ (0, a.jsxs)("p", { children: [
					"喜欢 ",
					s.likes,
					" 次，高潮 ",
					s.orgasms,
					" 次。"
				] })
			]
		}),
		/* @__PURE__ */ (0, a.jsx)("p", { children: "按留下过喜欢或高潮反馈的馆藏漫画本数排序，每本在同一项下计一次。展示前 20 项。" }),
		/* @__PURE__ */ (0, a.jsx)(o, {
			title: "标签",
			rows: s.tags
		}),
		/* @__PURE__ */ (0, a.jsx)(o, {
			title: "作者",
			rows: s.authors
		})
	] });
}
export { s as ComicTastePage };

//# debugId=bf6b2eca-7774-4de8-ae24-6565ede9cf2e