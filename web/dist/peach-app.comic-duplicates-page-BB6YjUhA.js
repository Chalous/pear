(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4b5a7aae-c4bd-4ba7-a18a-b4c29cf9a9b1", e._sentryDebugIdIdentifier = "sentry-dbid-4b5a7aae-c4bd-4ba7-a18a-b4c29cf9a9b1");
	} catch {}
})();
import { apiGet as e, cardClass as t, require_jsx_runtime as n, useQuery as r } from "./peach-app.js";
import { Page as i } from "./peach-app.page-QAncjzM1.js";
// src/react/duplicates/comic-duplicates-page.tsx
var a = n();
function o({ openItem: n }) {
	let o = r({
		queryKey: ["comic-duplicates"],
		queryFn: ({ signal: t }) => e("/api/duplicates", t)
	});
	return /* @__PURE__ */ (0, a.jsxs)(i, { children: [
		/* @__PURE__ */ (0, a.jsx)("h2", {
			className: "text-title-2-semibold",
			children: "可能重复的漫画"
		}),
		/* @__PURE__ */ (0, a.jsx)("p", { children: "忽略方括号内容、标点和大小写，核对正文名与作者。卷数和话数中的数字参与比较。" }),
		o.isError ? /* @__PURE__ */ (0, a.jsx)("button", {
			onClick: () => void o.refetch(),
			children: "读取失败，重试"
		}) : o.data ? /* @__PURE__ */ (0, a.jsxs)(a.Fragment, { children: [/* @__PURE__ */ (0, a.jsxs)("p", { children: [
			"找到 ",
			o.data.total,
			" 对可能重复的漫画。请打开核对版本和内容。"
		] }), o.data.pairs.map((e) => /* @__PURE__ */ (0, a.jsxs)("section", {
			className: t(),
			children: [/* @__PURE__ */ (0, a.jsxs)("p", { children: [
				e.reason,
				" · ",
				e.author_status,
				" · 名称相似度 ",
				Math.round(e.similarity * 100),
				"%"
			] }), e.files.map((e) => /* @__PURE__ */ (0, a.jsxs)("div", {
				className: "py-2",
				children: [
					/* @__PURE__ */ (0, a.jsx)("button", {
						onClick: () => n(e.id),
						children: e.name
					}),
					/* @__PURE__ */ (0, a.jsxs)("p", { children: [
						"作者：",
						e.creator || "未取得",
						" · ",
						e.location
					] }),
					/* @__PURE__ */ (0, a.jsx)("p", {
						className: "break-all",
						children: e.path
					})
				]
			}, e.id))]
		}, e.files.map((e) => e.id).join("-")))] }) : /* @__PURE__ */ (0, a.jsx)("p", { children: "正在比较漫画名称…" })
	] });
}
export { o as DuplicatesPage };

//# debugId=4b5a7aae-c4bd-4ba7-a18a-b4c29cf9a9b1