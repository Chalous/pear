(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8eab9d5b-7605-401c-af51-f68f321a78d2", e._sentryDebugIdIdentifier = "sentry-dbid-8eab9d5b-7605-401c-af51-f68f321a78d2");
	} catch {}
})();
import { Button as e, __toESM as t, apiGet as n, cardClass as r, openComicReader as i, require_jsx_runtime as a, require_react as o, useInfiniteQuery as s, useQuery as c } from "./peach-app.js";
import { Page as l } from "./peach-app.page-QAncjzM1.js";
// src/react/taste/reading-history.tsx
var u = /* @__PURE__ */ t(o(), 1), d = a();
function f(e) {
	return [
		e.getFullYear(),
		String(e.getMonth() + 1).padStart(2, "0"),
		String(e.getDate()).padStart(2, "0")
	].join("-");
}
function p() {
	let [t, a] = (0, u.useState)(() => f(/* @__PURE__ */ new Date())), [o, c] = (0, u.useState)(""), [l, p] = (0, u.useState)(!1), m = /* @__PURE__ */ new Date(t + "T00:00:00"), h = new Date(m);
	h.setDate(h.getDate() + 1);
	let g = s({
		queryKey: ["comic-visits", t],
		initialPageParam: null,
		queryFn: ({ signal: e, pageParam: t }) => n("/api/comic-visits?" + new URLSearchParams({
			start: String(m.getTime()),
			end: String(h.getTime()),
			limit: "200",
			...t ? {
				after: String(t.after),
				after_id: t.after_id
			} : {}
		}), e),
		getNextPageParam: (e) => e.next ?? void 0,
		refetchOnMount: "always"
	}), _ = g.data?.pages.flatMap((e) => e.visits) ?? [], v = g.data?.pages[0]?.previous, y = async (e) => {
		if (!(l || e.page_id == null)) {
			p(!0), c("");
			try {
				await i(e.asset_id, {
					toast: c,
					failure: () => c("打开阅读器失败，请重试")
				}, { pageId: e.page_id });
			} finally {
				p(!1);
			}
		}
	};
	return /* @__PURE__ */ (0, d.jsxs)("section", {
		className: r(),
		children: [
			/* @__PURE__ */ (0, d.jsx)("h2", {
				className: "text-title-2-semibold",
				children: "阅读痕迹"
			}),
			/* @__PURE__ */ (0, d.jsxs)("label", { children: ["阅读日期 ", /* @__PURE__ */ (0, d.jsx)("input", {
				type: "date",
				value: t,
				onChange: (e) => {
					e.target.value && (a(e.target.value), c(""));
				}
			})] }),
			v != null && /* @__PURE__ */ (0, d.jsx)(e, {
				size: "small",
				variant: "secondary",
				onClick: () => a(f(new Date(v))),
				children: "上一个有阅读记录的日期"
			}),
			/* @__PURE__ */ (0, d.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: "按时间排列，点击记录回到起始页。每次加载 200 条。"
			}),
			o ? /* @__PURE__ */ (0, d.jsx)("p", {
				role: "status",
				children: o
			}) : null,
			/* @__PURE__ */ (0, d.jsxs)("div", {
				className: "max-h-105 overflow-y-auto",
				tabIndex: 0,
				"aria-label": "阅读痕迹列表",
				children: [g.isError && !_.length ? /* @__PURE__ */ (0, d.jsx)(e, {
					onClick: () => void g.refetch(),
					children: "读取失败，重试"
				}) : g.isPending ? /* @__PURE__ */ (0, d.jsx)("p", { children: "正在读取…" }) : _.length ? /* @__PURE__ */ (0, d.jsx)("ol", { children: _.map((e) => /* @__PURE__ */ (0, d.jsx)("li", {
					className: "border-b border-separator-border py-2",
					children: /* @__PURE__ */ (0, d.jsxs)("button", {
						className: "w-full text-left",
						disabled: l || e.page_id == null,
						onClick: () => void y(e),
						children: [
							/* @__PURE__ */ (0, d.jsx)("time", { children: new Date(e.viewed_at).toLocaleTimeString() }),
							" · ",
							/* @__PURE__ */ (0, d.jsx)("strong", { children: e.name }),
							/* @__PURE__ */ (0, d.jsxs)("span", { children: [
								" · 第 ",
								e.first_page === e.last_page ? e.first_page : e.first_page + "–" + e.last_page,
								" 页"
							] }),
							e.page_id == null ? /* @__PURE__ */ (0, d.jsx)("span", { children: " · 对应页已不可用" }) : null
						]
					})
				}, e.id)) }) : /* @__PURE__ */ (0, d.jsx)("p", { children: "这一天没有逐页阅读记录。" }), g.hasNextPage ? /* @__PURE__ */ (0, d.jsx)(e, {
					size: "small",
					variant: "secondary",
					disabled: g.isFetchingNextPage,
					onClick: () => void g.fetchNextPage(),
					children: g.isFetchNextPageError ? "加载失败，重试" : g.isFetchingNextPage ? "正在加载…" : "加载更多"
				}) : null]
			})
		]
	});
}
// src/react/stats/comic-stats-page.tsx
function m() {
	let e = (/* @__PURE__ */ new Date()).getTimezoneOffset(), t = c({
		queryKey: ["comic-stats", e],
		queryFn: ({ signal: t }) => n("/api/stats?offset=" + e, t)
	});
	if (t.isError) return /* @__PURE__ */ (0, d.jsx)(l, { children: /* @__PURE__ */ (0, d.jsx)("button", {
		onClick: () => void t.refetch(),
		children: "统计读取失败，重试"
	}) });
	if (!t.data) return /* @__PURE__ */ (0, d.jsx)(l, { children: /* @__PURE__ */ (0, d.jsx)("p", { children: "正在统计漫画…" }) });
	let i = t.data;
	return /* @__PURE__ */ (0, d.jsxs)(l, { children: [/* @__PURE__ */ (0, d.jsxs)("section", {
		className: r(),
		children: [
			/* @__PURE__ */ (0, d.jsx)("h2", {
				className: "text-title-2-semibold",
				children: "漫画馆藏与阅读"
			}),
			/* @__PURE__ */ (0, d.jsxs)("div", {
				className: "inline-grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, d.jsxs)("div", { children: [/* @__PURE__ */ (0, d.jsx)("h3", { children: "馆藏" }), /* @__PURE__ */ (0, d.jsxs)("p", { children: [
						i.books,
						" 本 · ",
						i.pages,
						" 页"
					] })] }),
					/* @__PURE__ */ (0, d.jsxs)("div", { children: [/* @__PURE__ */ (0, d.jsx)("h3", { children: "阅读" }), /* @__PURE__ */ (0, d.jsxs)("p", { children: [
						i.read_books,
						" 本 · ",
						i.read_pages,
						" 页 · ",
						i.reading_days,
						" 天"
					] })] }),
					/* @__PURE__ */ (0, d.jsxs)("div", { children: [
						/* @__PURE__ */ (0, d.jsx)("h3", { children: "喜欢" }),
						/* @__PURE__ */ (0, d.jsxs)("p", { children: [
							i.liked_books,
							" 本有喜欢标记 · ",
							i.liked_pages,
							" 页"
						] }),
						/* @__PURE__ */ (0, d.jsxs)("p", { children: [
							"其中整本喜欢 ",
							i.whole_liked_books,
							" 本"
						] }),
						/* @__PURE__ */ (0, d.jsx)("a", {
							href: "/flagged",
							children: "查看喜欢的漫画"
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, d.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: "阅读页数按实际显示过的页去重，喜欢页数按有效的页标记去重。整本喜欢单独计数。阅读痕迹从启用记录后开始统计。"
			})
		]
	}), /* @__PURE__ */ (0, d.jsx)(p, {})] });
}
export { m as ComicStatsPage };

//# debugId=8eab9d5b-7605-401c-af51-f68f321a78d2