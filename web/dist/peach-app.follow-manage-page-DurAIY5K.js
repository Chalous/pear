(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9080938b-af2f-4b5d-942a-15d15869ed78", e._sentryDebugIdIdentifier = "sentry-dbid-9080938b-af2f-4b5d-942a-15d15869ed78");
	} catch {}
})();
import { createPaginatedRowModel as e, createSortedRowModel as t, useTableSelection as n } from "./peach-app.use-table-selection-CnuGRvGn.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as r, $542a13ca2fa5b484$export$5b6b19405a83ff9d as i, $76d00c5a4edb230a$export$76ccd210b9029917 as a, $76d00c5a4edb230a$export$816b5d811295e6bc as o, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as s, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as c, $76d00c5a4edb230a$export$f850895b287ef28e as l, $ea3928288112382f$export$439d29a4e110a164 as u, $l as d, Button as f, ButtonLink as p, Bx as ee, COLUMN_SORT as m, Checkbox as h, ChevronSortDown as g, Chip as _, CollapseChevron as v, CollapseRegion as y, DataTableFooter as te, DataTableFrame as ne, DataTableSort as b, EmptyFocusButton as x, EmptyState as re, ErrorText as S, ExternalLink as C, FEEDS_KEY as w, FOLLOW_CHECK_KEY as ie, FOLLOW_CREDENTIALS_KEY as T, FOLLOW_MANAGE_KEY as E, FOLLOW_MANAGE_NAV as D, FOLLOW_RESOLVE_KEY as O, FieldLabel as k, Help as A, Input as j, LAYOUTS as M, LoadingDots as N, M6 as P, MENU_ITEM as F, MENU_ITEM_INTERACTIVE as I, MENU_POPOVER_SURFACE as ae, ModalFrame as L, Note as R, P7 as z, SORT_DEFAULT_DIR as B, SORT_OPTIONS as V, STAT_STRIP_SIX as H, Select as oe, SelectItem as se, SelectionDock as ce, SelectionPopover as U, SiteLabel as W, SortDirectionIcon as le, SortableBoardTabs as G, Switch as ue, Table as de, TableColumnControls as fe, TableColumnResizer as pe, TableSelectionHeader as me, TagManager as he, TaskProgress as ge, Un as _e, Wt as K, Xf as ve, __toESM as ye, addAlias as be, addSource as xe, authorAvatar as Se, authorGroups as Ce, authorInitial as we, authorName as Te, avatarInner as Ee, busyProps as q, cardClass as De, checkEvidenceGap as Oe, checkFailures as ke, checkFeeds as Ae, checkReceipt as je, checkSummary as Me, checkedText as Ne, clickedBlank as Pe, columnVisibilityFeature as J, composingKey as Fe, confirmModal as Ie, createColumnHelper as Le, credentialDone as Re, cx as ze, dZ as Be, dropSources as Ve, du as He, errorHeadline as Ue, errorMessage as Y, feedIntervalText as X, fetchCheckJob as We, fetchCredentials as Ge, fetchFeeds as Z, fetchFollow as Ke, fetchPending as qe, fetchResolveJob as Je, fetchSuggestions as Ye, flexRender as Xe, followFeedByName as Ze, followFeedEntity as Qe, followSuggestKey as $e, groupByAuthor as et, isBroken as tt, isLayout as nt, keepSelected as rt, l7 as it, localTime as at, lookupFeedActor as ot, mapLimit as st, markItem as ct, pageSizeOf as lt, pageWindow as ut, patchSource as dt, pv as ft, queryClient as pt, reloadFollowManage as mt, removeAlias as ht, removeFeed as gt, removeSource as _t, renameAliasGroup as vt, require_jsx_runtime as yt, require_react as bt, resolveFollowSort as xt, rowPaginationFeature as St, rowSelectionFeature as Ct, rowSortingFeature as wt, selectionState as Tt, setFeedEnabled as Et, setSourceEnabled as Dt, sortLabel as Ot, sourceIconUrl as kt, startCheck as At, startResolve as jt, statusText as Mt, tableFeatures as Nt, tableRows as Pt, toggleGroup as Ft, useAction as It, useBackgroundJob as Lt, useMutation as Rt, useQuery as zt, useTable as Bt, useTablePreferences as Vt } from "./peach-app.js";
import { Page as Ht } from "./peach-app.page-QAncjzM1.js";
import { MarkImage as Ut } from "./peach-app.site-mark-D_VlIyJz.js";
import { LEGACY_AVATAR_IMG as Wt } from "./peach-app.legacy-avatar-NSITxLRS.js";
// src/react/follow-manage/source-view.tsx
var Q = /* @__PURE__ */ ye(bt(), 1), $ = yt();
function Gt({ provider: e }) {
	return /* @__PURE__ */ (0, $.jsx)(Ut, { src: kt(e) });
}
function Kt({ group: e, name: t }) {
	let { src: n, fallback: r } = Se(e), [i, a] = (0, Q.useState)(0), o = [n, r].filter(Boolean)[i];
	return o ? /* @__PURE__ */ (0, $.jsx)("img", {
		src: o,
		alt: "",
		width: 32,
		height: 32,
		loading: "lazy",
		referrerPolicy: "no-referrer",
		onError: () => a(i + 1),
		className: "size-8 shrink-0 rounded-full bg-background-tertiary-default object-cover"
	}) : /* @__PURE__ */ (0, $.jsx)("span", {
		title: "没有可用头像",
		className: "inline-grid size-8 shrink-0 place-items-center rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary",
		children: we(t)
	});
}
function qt({ source: e }) {
	let t = !e.enabled || e.history_exhausted ? "gray" : tt(e) ? "rose" : e.enabled && e.last_status === "ok" ? "lime" : e.enabled ? "yellow" : "gray";
	return /* @__PURE__ */ (0, $.jsx)(_, {
		variant: "caption",
		color: t,
		children: Mt(e)
	});
}
function Jt({ source: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("a", {
		href: e.url,
		target: "_blank",
		rel: "noopener noreferrer",
		title: "打开原来源",
		className: "max-w-full min-w-0 self-start text-body-medium wrap-anywhere text-text-primary underline-offset-2 hover:underline",
		children: [e.label, /* @__PURE__ */ (0, $.jsx)(K, {
			"aria-hidden": !0,
			className: "size-(--icon-inline) shrink-0"
		})]
	});
}
function Yt({ text: e, prefix: t = "", tone: n = "error" }) {
	let r = (0, Q.useRef)(null), [i, a] = (0, Q.useState)(!1), [o, s] = (0, Q.useState)(!1), c = Ue(e);
	(0, Q.useLayoutEffect)(() => {
		let e = r.current;
		if (!e || i) return;
		let t = () => s(e.scrollWidth > e.clientWidth + 1);
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, [c, i]);
	let l = o || c !== String(e || "").trim();
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 max-w-full flex-col items-start gap-0.5",
		children: [/* @__PURE__ */ (0, $.jsxs)("small", {
			ref: r,
			"data-error-line": "",
			className: `max-w-full text-caption-1-regular ${n === "error" ? "text-text-error-primary" : "text-text-secondary"} ${i ? "whitespace-pre-line wrap-anywhere" : "block truncate"}`,
			children: [t, i ? e : c]
		}), l ? /* @__PURE__ */ (0, $.jsx)(f, {
			variant: "ghost",
			size: "small",
			"data-error-line-toggle": "",
			"data-error-details-toggle": "",
			"aria-expanded": i,
			className: "-ml-2",
			onClick: () => a(!i),
			children: i ? "收起详情" : "查看详情"
		}) : null]
	});
}
// src/react/follow-manage/add-source.tsx
var Xt = ze(F, I, "text-body-2-medium"), Zt = "粘贴来源链接，或输入创作者名、id…", Qt = "添加创作者关注", $t = "查找中（首次按名字查要下载创作者索引，可能几十秒）", en = "识别中", tn = "站内没有查到来源", nn = "/settings/subscriptions", rn = (e, t) => `${e}:${t.url}`;
function an({ field: e, menu: t, options: n, active: r, busy: a, onPick: o, onClose: s }) {
	return (0, Q.useEffect)(() => {
		t.current?.querySelector("[aria-current=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [t, r]), /* @__PURE__ */ (0, $.jsxs)(i, {
		ref: t,
		triggerRef: e,
		isOpen: !0,
		isNonModal: !0,
		shouldFlip: !1,
		onOpenChange: (e) => {
			e || s();
		},
		placement: "bottom start",
		offset: 4,
		"aria-label": "来源建议",
		className: ze(ae, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !n.length ? /* @__PURE__ */ (0, $.jsx)("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ (0, $.jsx)(N, { label: "正在查找建议" })
		}) : null, n.map((e, t) => /* @__PURE__ */ (0, $.jsxs)(Q.Fragment, { children: [e.group === n[t - 1]?.group ? null : /* @__PURE__ */ (0, $.jsx)("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ (0, $.jsxs)("button", {
			type: "button",
			"aria-current": t === r ? "true" : void 0,
			className: t === r ? ze(Xt, "bg-background-secondary-default") : Xt,
			onMouseDown: (e) => e.preventDefault(),
			onClick: () => o(e.value),
			children: [
				/* @__PURE__ */ (0, $.jsx)("span", {
					className: "min-w-0 grow truncate text-left",
					children: e.value
				}),
				e.matched ? /* @__PURE__ */ (0, $.jsx)("span", {
					className: "shrink-0 text-caption-1-regular text-text-tertiary",
					children: e.matched
				}) : null,
				e.n ? /* @__PURE__ */ (0, $.jsx)("span", {
					className: "shrink-0 text-caption-1-regular tabular-nums text-text-tertiary",
					children: e.n.toLocaleString()
				}) : null
			]
		})] }, `${e.group}-${e.value}`))]
	});
}
function on({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? "全部来源" : `${i}/${r.length} 个来源`;
	return /* @__PURE__ */ (0, $.jsx)(U, {
		label: "来源筛选",
		triggerLabel: a,
		leadingIcon: d,
		empty: "暂无可用来源",
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ (0, $.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, $.jsx)(Gt, { provider: e.provider }), e.provider_label]
			})
		})),
		onChange: (e, r) => {
			let i = new Set(t);
			r ? i.delete(e) : i.add(e), n(i);
		},
		actions: [
			{
				label: "全选",
				disabled: !r.length,
				onPress: () => n(/* @__PURE__ */ new Set())
			},
			{
				label: "全不选",
				disabled: !r.length,
				onPress: () => n(new Set(r.map((e) => e.provider_label)))
			},
			{
				label: "凭据设置",
				href: nn
			}
		]
	});
}
function sn({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, $.jsx)(R, {
		tone: "error",
		title: e.line,
		children: e.error || "查找失败"
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: De({
			variant: "outlined",
			padding: "none",
			className: "flex flex-col gap-2 p-4"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsx)("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			a.length ? a.map((e) => {
				let n = rn(t, e);
				return /* @__PURE__ */ (0, $.jsx)(h, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ (0, $.jsxs)("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, $.jsx)(Gt, { provider: e.provider }),
							/* @__PURE__ */ (0, $.jsx)("b", {
								className: "text-body-medium",
								children: e.provider_label
							}),
							/* @__PURE__ */ (0, $.jsx)("span", {
								className: "min-w-0 break-words",
								children: e.label
							}),
							/* @__PURE__ */ (0, $.jsx)("small", {
								className: "text-caption-1-regular text-text-secondary",
								children: e.known ? "已经关注" : e.evidence
							})
						]
					})
				}, n);
			}) : /* @__PURE__ */ (0, $.jsx)(A, { children: tn }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: e.evidence
				}), /* @__PURE__ */ (0, $.jsx)(C, {
					href: e.url,
					children: `${e.label}：${e.query}`
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ (0, $.jsx)(A, { children: o.map(([e, t]) => `${e}：${t}`).join("；") }) : null
		]
	});
}
function cn({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, Q.useState)(""), [o, s] = (0, Q.useState)(!1), [c, l] = (0, Q.useState)(""), [u, d] = (0, Q.useState)(""), [p, ee] = (0, Q.useState)(!1), [m, h] = (0, Q.useState)(null), [g, _] = (0, Q.useState)(-1), v = (0, Q.useRef)(null), y = (0, Q.useRef)(null), [te, ne] = (0, Q.useState)(/* @__PURE__ */ new Set()), [b, x] = (0, Q.useState)(/* @__PURE__ */ new Set()), [re, S] = (0, Q.useState)(""), [C, w] = (0, Q.useState)(0);
	(0, Q.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			d("");
			return;
		}
		let t = setTimeout(() => d(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let ie = zt({
		queryKey: $e(u),
		queryFn: ({ signal: e }) => Ye(u, e),
		enabled: u.length > 0 && p && !o && m !== i
	}), T = (0, Q.useMemo)(() => (ie.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: t.matched || "",
		n: t.n || 0,
		group: e.label
	}))), [ie.data]), { job: E, running: D, outcome: A, start: M, dismiss: N } = Lt({
		queryKey: O,
		queryFn: ({ signal: e }) => Je(e),
		start: (e) => jt([e]),
		onStarted: () => x(/* @__PURE__ */ new Set()),
		onError: (e) => S(Y(e)),
		onFinish: (e) => {
			e.status === "failed" && S(e.error || "查找失败");
		}
	}), P = (e) => {
		let t = e.trim();
		!t || n || o || D || M.isPending || (S(""), _(-1), l(t), a(t), d(""), h(t), M.mutate(t));
	}, F = ie.isFetching, I = p && !o && m !== i && (T.length > 0 || F), ae = () => {
		_(-1), h(i);
	}, L = (e) => {
		if (!(o || Fe(e.nativeEvent))) {
			if (e.key === "Escape" && I) ae();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!T.length) return;
				if (e.preventDefault(), !I) {
					h(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				_((e) => {
					let n = e + t;
					return n < 0 ? T.length - 1 : n >= T.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), P(T[g]?.value || i));
		}
	}, z = A?.results || [], B = z.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !te.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: rn(t, e)
	})).filter((e) => !b.has(e.key))), V = Rt({
		mutationFn: async (e) => {
			let t = [], n = [];
			w(0);
			for (let r of e) {
				try {
					let e = await xe(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(`${r.candidate.label}：${Y(e)}`);
				}
				w((e) => e + 1);
			}
			if (n.length) try {
				await At(n);
			} catch (e) {
				t.push(Y(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			mt(), e.failures.length ? S(e.failures.join("；")) : (S(""), N(), r(`已添加 ${e.sources.length} 个关注来源`));
		},
		onError: (e) => S(Y(e))
	}), H = e.suggestions || [], oe = !c.includes("/");
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": Qt,
		className: De({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Qt
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						ref: v,
						className: "min-w-64 grow",
						onFocus: () => ee(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !y.current?.contains(t) && ee(!1);
						},
						children: [/* @__PURE__ */ (0, $.jsx)(j, {
							"aria-label": "来源链接、名字或 id",
							placeholder: Zt,
							value: i,
							leadingIcon: ft,
							enterKeyHint: "search",
							isDisabled: n,
							onChange: a,
							onCompositionStart: () => {
								s(!0), _(-1);
							},
							onCompositionEnd: (e) => {
								s(!1), a(e.currentTarget.value);
							},
							onKeyDown: L
						}), I ? /* @__PURE__ */ (0, $.jsx)(an, {
							field: v,
							menu: y,
							options: T,
							active: g,
							busy: F,
							onPick: P,
							onClose: ae
						}) : null]
					}),
					/* @__PURE__ */ (0, $.jsx)(on, {
						credentials: t,
						hidden: te,
						onHidden: ne
					}),
					/* @__PURE__ */ (0, $.jsx)(f, {
						variant: "primary",
						disabled: n || !i.trim(),
						...q(D || M.isPending),
						onClick: () => P(i),
						children: "查找"
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [D || M.isPending ? /* @__PURE__ */ (0, $.jsx)(ge, {
					embedded: !0,
					label: E?.message || (E?.total ? `查找中：${E.checked || 0}/${E.total}` : oe ? $t : en),
					value: E?.checked,
					total: E?.total
				}) : null, re ? /* @__PURE__ */ (0, $.jsx)(R, {
					tone: "error",
					title: "这一次没有完成",
					children: re
				}) : null]
			}),
			z.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, $.jsx)(k, { children: "查找结果" }),
					z.map((e, t) => /* @__PURE__ */ (0, $.jsx)(sn, {
						row: e,
						at: t,
						hidden: te,
						unpicked: b,
						onPick: (e, t) => {
							let n = new Set(b);
							t ? n.delete(e) : n.add(e), x(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, $.jsx)(f, {
								variant: "secondary",
								size: "small",
								onClick: () => N(),
								children: "关闭"
							}),
							/* @__PURE__ */ (0, $.jsx)(f, {
								variant: "primary",
								size: "small",
								disabled: n || !B.length,
								...q(V.isPending),
								onClick: () => V.mutate(B),
								children: `添加选中（${B.length}）`
							}),
							V.isPending ? /* @__PURE__ */ (0, $.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: `添加中… ${C}/${B.length}`
							}) : null
						]
					})
				]
			}) : null,
			H.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: "猜你喜欢"
				}), H.map((e) => /* @__PURE__ */ (0, $.jsx)(f, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: `浏览历史里出现 ${e.visits} 次${e.origin ? ` · ${e.origin}` : ""}`,
					onClick: () => P(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var ln = "输入女优名，到 JavDB 找她的演员页", un = "添加 JAV 订阅";
function dn(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.candidates) t.has(r.id) && r.held_by && n.set(r.held_by.id, r.held_by.name);
	if (n.size > 1) return {
		text: `所勾的卡分属数据库里不同的人：${[...n.values()].join("、")}，先去合并再订`,
		blocked: !0
	};
	let [r] = n.values();
	return r ? {
		text: `会登记到「${r}」名下`,
		blocked: !1
	} : e.known ? {
		text: `会登记到数据库里的「${e.known.name}」名下`,
		blocked: !1
	} : {
		text: `数据库里还没有「${e.q}」，会新建一位`,
		blocked: !1
	};
}
function fn({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)(h, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ (0, $.jsxs)("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.names.join("、")
					}),
					e.record ? /* @__PURE__ */ (0, $.jsx)(_, {
						variant: "caption",
						color: "neutral",
						children: e.record
					}) : null,
					e.held_by ? /* @__PURE__ */ (0, $.jsx)("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: `已在「${e.held_by.name}」名下`
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, $.jsx)(C, {
			href: e.url,
			children: e.id
		})]
	});
}
function pn({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, Q.useState)(""), [a, o] = (0, Q.useState)(null), [s, c] = (0, Q.useState)(/* @__PURE__ */ new Set()), l = It(), u = () => {
		let t = r.trim();
		t && !e && l.run("lookup", (e) => ot(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, d = (e) => {
		e.key === "Enter" && !Fe(e.nativeEvent) && (e.preventDefault(), u());
	}, p = () => {
		o(null), c(/* @__PURE__ */ new Set()), l.setError("");
	}, ee = () => {
		a && l.run("follow", (e) => Ze(a.q, [...s], e), (e) => {
			t(e.created ? `已新建「${e.entity_name}」并订阅她的新作` : `已订阅「${e.entity_name}」的新作`), i(""), p(), n();
		});
	}, m = () => {
		let e = a?.known;
		e && l.run("known", (t) => Qe(e.id, t), () => {
			t(`已订阅「${e.name}」的新作`), i(""), p(), n();
		});
	}, h = a ? dn(a, s) : null, g = a && !a.candidates.length && a.known?.subscribable ? a.known : null;
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": un,
		className: De({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: un
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ (0, $.jsx)(j, {
						"aria-label": "女优名",
						placeholder: ln,
						value: r,
						leadingIcon: ft,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: d
					})
				}), /* @__PURE__ */ (0, $.jsx)(f, {
					variant: "primary",
					disabled: e || !r.trim(),
					...q(l.busy === "lookup"),
					onClick: u,
					children: "查找"
				})]
			}),
			l.error ? /* @__PURE__ */ (0, $.jsx)(R, {
				tone: "error",
				title: "这一次没有完成",
				children: l.error
			}) : null,
			a ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					a.unavailable ? /* @__PURE__ */ (0, $.jsx)(R, {
						tone: "warning",
						title: "JavDB 这一次没有搜成",
						children: a.unavailable
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(k, { children: "JavDB 上的演员卡" }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ (0, $.jsx)(fn, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ (0, $.jsx)(A, { children: a.unavailable ? "这一次没有拿到演员卡。" : "JavDB 上没有搜到这个名字。" }),
					a.candidates.length ? /* @__PURE__ */ (0, $.jsx)(A, {
						role: "status",
						children: s.size ? h.text : "勾选她的演员卡；有碼与無碼两条记录都是她的话，两张都勾。"
					}) : null,
					g ? /* @__PURE__ */ (0, $.jsx)(A, {
						role: "status",
						children: g.following ? `数据库里的「${g.name}」已经在订阅新作。` : `数据库里的「${g.name}」已有 JavDB 或 DMM 编号，可以直接订阅。`
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, $.jsx)(f, {
								variant: "secondary",
								size: "small",
								onClick: p,
								children: "关闭"
							}),
							a.candidates.length ? /* @__PURE__ */ (0, $.jsx)(f, {
								variant: "primary",
								size: "small",
								disabled: e || !s.size || h.blocked,
								...q(l.busy === "follow"),
								onClick: ee,
								children: `添加订阅（${s.size}）`
							}) : null,
							g && !g.following ? /* @__PURE__ */ (0, $.jsx)(f, {
								variant: "primary",
								size: "small",
								disabled: e,
								...q(l.busy === "known"),
								onClick: m,
								children: `订阅「${g.name}」`
							}) : null
						]
					})
				]
			}) : null
		]
	});
}
// src/react/follow-manage/alias-rename-dialog.tsx
function mn({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, $.jsx)(L, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: "修改统一名称",
		children: e ? /* @__PURE__ */ (0, $.jsx)(hn, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function hn({ group: e, close: t, receipt: n }) {
	let [i, a] = (0, Q.useState)(e.canonical_name), o = It();
	return /* @__PURE__ */ (0, $.jsxs)("form", {
		onSubmit: (r) => {
			r.preventDefault(), i.trim() && i.trim() !== e.canonical_name && o.run("rename", (t) => vt(e.canonical_key, i.trim(), t), () => {
				mt(), n(`已把统一名称改为 ${i.trim()}`), t();
			});
		},
		className: "flex min-h-0 flex-col gap-4 p-5",
		children: [
			/* @__PURE__ */ (0, $.jsx)(r, {
				slot: "title",
				className: "text-title-2-semibold text-text-primary",
				children: "修改统一名称"
			}),
			/* @__PURE__ */ (0, $.jsxs)("p", {
				className: "text-body-2-regular wrap-anywhere text-text-secondary",
				children: ["当前名称：", e.canonical_name]
			}),
			/* @__PURE__ */ (0, $.jsx)(j, {
				"aria-label": "统一名称",
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(k, { children: "选择已有别名" }), /* @__PURE__ */ (0, $.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: e.aliases.map((e) => /* @__PURE__ */ (0, $.jsx)(f, {
						variant: "secondary",
						size: "small",
						onClick: () => a(e.name),
						children: e.name
					}, e.key))
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "原名称保留为别名，关联档案和作品署名会同步更新。"
			}),
			o.error ? /* @__PURE__ */ (0, $.jsx)(R, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(f, {
					variant: "secondary",
					onClick: t,
					children: "取消"
				}), /* @__PURE__ */ (0, $.jsx)(f, {
					type: "submit",
					variant: "primary",
					disabled: !i.trim() || i.trim() === e.canonical_name,
					...q(!!o.busy),
					children: "修改统一名称"
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var gn = (e) => `将移除别名「${e}」，对应来源恢复为独立创作者组。`, _n = Nt({
	rowSelectionFeature: Ct,
	rowSortingFeature: wt,
	rowPaginationFeature: St,
	columnVisibilityFeature: J,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), vn = _n, yn = {
	id: "select",
	label: "选择",
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, bn = {
	id: "canonical",
	label: "统一名称",
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, xn = [
	yn,
	bn,
	{
		id: "alias",
		label: "平台别名",
		width: 240
	},
	{
		id: "evidence",
		label: "依据",
		width: 320
	},
	{
		id: "actions",
		label: "操作",
		width: 112
	}
], Sn = [
	yn,
	bn,
	{
		id: "aliases",
		label: "平台别名",
		width: 400
	},
	{
		id: "actions",
		label: "操作",
		width: 184,
		min: 168
	}
], Cn = (e) => e.alias;
function wn(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function Tn({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)(Kt, {
			group: wn(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, $.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function En({ groups: e, suggestions: t, sources: r = [], readOnly: i, toast: u }) {
	let d = Vt("alias-suggestions", xn), p = Vt("alias-saved", Sn), [ee, m] = (0, Q.useState)(null), [_, v] = (0, Q.useState)({}), [y, C] = (0, Q.useState)({}), w = n(() => v({})), ie = n(() => C({})), [T, E] = (0, Q.useState)([]), [D, O] = (0, Q.useState)([]), [A, M] = (0, Q.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [N, P] = (0, Q.useState)({
		pageIndex: 0,
		pageSize: 20
	}), F = {
		...A,
		pageIndex: Math.min(A.pageIndex, Math.max(0, Math.ceil(t.length / A.pageSize) - 1))
	}, I = {
		...N,
		pageIndex: Math.min(N.pageIndex, Math.max(0, Math.ceil(e.length / N.pageSize) - 1))
	}, [ae, L] = (0, Q.useState)(""), [R, B] = (0, Q.useState)(""), [V, H] = (0, Q.useState)(""), oe = Rt({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await be(n.canonical, n.alias);
				} catch (n) {
					throw t && mt(), Error(`${Y(n)}（还有 ${e.length - t} 组没有合并）`);
				}
				t += 1;
			}
			return {
				done: t,
				items: e
			};
		},
		onSuccess: (e) => {
			L(""), v({}), mt(), u(`已合并 ${e.done} 组创作者别名`);
		},
		onError: (e) => L(Y(e))
	}), se = Rt({
		mutationFn: (e) => be(e.canonical, e.alias),
		onSuccess: () => {
			L(""), B(""), H(""), mt(), u("已保存创作者别名");
		},
		onError: (e) => L(Y(e))
	}), U = Rt({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await ht(e), n += 1;
			} catch (e) {
				throw Error(`${Y(e)}（已移除 ${n} 个别名，还有 ${t.length - n} 个未移除）`);
			} finally {
				mt();
			}
		},
		onSuccess: () => {
			L(""), C({}), u("已移除创作者别名");
		},
		onError: (e) => L(Y(e))
	}), W = (e, t) => {
		e.length && Ie({
			title: t ? "合并全部创作者别名" : "合并所选创作者别名",
			body: `将合并以下 ${e.length} 组创作者：${e.map((e) => `「${e.alias}」归入「${e.canonical}」`).join("；")}。`,
			confirmLabel: t ? "合并全部别名" : "合并所选别名",
			onConfirm: () => oe.mutateAsync(e)
		});
	}, le = (e) => void Ie({
		title: "移除创作者别名",
		body: gn(e),
		confirmLabel: "移除创作者别名",
		onConfirm: () => U.mutateAsync(e)
	}), G = (0, Q.useRef)({
		sources: r,
		readOnly: i,
		merging: oe.isPending,
		removing: U.isPending,
		merge: W,
		remove: le,
		rename: m
	});
	G.current = {
		sources: r,
		readOnly: i,
		merging: oe.isPending,
		removing: U.isPending,
		merge: W,
		remove: le,
		rename: m
	};
	let ue = (0, Q.useMemo)(() => {
		let e = Le();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, $.jsx)(me, {
					table: e.table,
					label: "全选待合并别名"
				}),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(h, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": `选择别名 ${e.row.original.alias}，归入 ${e.row.original.canonical}`,
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(Tn, {
					sources: G.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: "平台别名",
				cell: (e) => e.getValue()
			}),
			e.accessor("evidence", {
				header: "依据",
				cell: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: e.getValue()
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(f, {
					variant: "secondary",
					size: "small",
					disabled: G.current.readOnly,
					...q(G.current.merging),
					onClick: () => G.current.merge([e.row.original], !1),
					children: "合并"
				})
			})
		]);
	}, []), he = (0, Q.useMemo)(() => {
		let e = Le();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, $.jsx)(me, {
					table: e,
					label: "全选已保存别名"
				}),
				cell: ({ row: e }) => /* @__PURE__ */ (0, $.jsx)(h, {
					slot: null,
					"aria-label": `选择已保存别名 ${e.original.canonical_name}`,
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(Tn, {
					sources: G.current.sources,
					name: e.getValue(),
					canonicalKey: e.row.original.canonical_key
				})
			}),
			e.accessor("aliases", {
				header: "平台别名",
				sortFn: (e, t) => e.original.aliases.map((e) => e.name).join(" ").localeCompare(t.original.aliases.map((e) => e.name).join(" "), "zh-CN"),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
					className: "flex flex-wrap items-center gap-1.5",
					children: e.getValue().map((e) => /* @__PURE__ */ (0, $.jsxs)("span", {
						className: "inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary",
						children: [e.name, /* @__PURE__ */ (0, $.jsx)(f, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: z,
							"aria-label": `移除别名 ${e.name}`,
							disabled: G.current.readOnly,
							...q(G.current.removing),
							onClick: () => G.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: ({ row: e }) => /* @__PURE__ */ (0, $.jsx)(f, {
					variant: "secondary",
					size: "small",
					disabled: G.current.readOnly,
					"aria-label": `修改 ${e.original.canonical_name} 的统一名称`,
					onClick: () => G.current.rename(e.original),
					children: "修改统一名称"
				})
			})
		]);
	}, []), ge = Bt({
		features: _n,
		data: t,
		columns: ue,
		getRowId: Cn,
		state: {
			rowSelection: _,
			sorting: T,
			pagination: F,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			w(), v(e);
		},
		onSortingChange: (e) => {
			E(e), M((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: M,
		enableRowSelection: !0
	}), _e = Bt({
		features: vn,
		data: e,
		columns: he,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: y,
			sorting: D,
			pagination: I,
			columnVisibility: p.visibility
		},
		onColumnVisibilityChange: p.change,
		onRowSelectionChange: (e) => {
			ie(), C(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			O(e), P((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: P
	}), K = ge.getSelectedRowModel().rows.map((e) => e.original), ye = _e.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), xe = q(oe.isPending);
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: De({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: "创作者别名"
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(k, { children: "手动添加别名" }), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, $.jsx)(j, {
							"aria-label": "统一名称",
							placeholder: "在 Pear 中统一显示的名称",
							value: R,
							onChange: B,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, $.jsx)(j, {
							"aria-label": "平台别名",
							placeholder: "平台别名",
							value: V,
							onChange: H,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "primary",
							disabled: i || !R.trim() || !V.trim(),
							...q(se.isPending),
							onClick: () => se.mutate({
								canonical: R.trim(),
								alias: V.trim()
							}),
							children: "保存别名"
						})
					]
				})]
			}),
			ae ? /* @__PURE__ */ (0, $.jsx)(S, { children: ae }) : null,
			t.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, $.jsx)(k, { children: "待合并" }), /* @__PURE__ */ (0, $.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${t.length} 组`
							})]
						}), /* @__PURE__ */ (0, $.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, $.jsx)(f, {
									variant: "primary",
									size: "small",
									disabled: i,
									...xe,
									onClick: () => W(t, !0),
									children: `全部合并（${t.length}）`
								}),
								/* @__PURE__ */ (0, $.jsx)(b, {
									label: "待合并创作者别名",
									sorting: T,
									options: [
										{
											id: "canonical",
											label: "统一名称"
										},
										{
											id: "alias",
											label: "平台别名"
										},
										{
											id: "evidence",
											label: "依据"
										}
									],
									onChange: (e) => {
										E(e), M((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, $.jsx)(fe, {
									preferences: d,
									label: "待合并创作者别名"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, $.jsxs)(ce, {
						label: "待合并别名批量操作",
						visible: K.length > 0,
						count: `已选 ${K.length} 组`,
						children: [/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...xe,
							onClick: () => W(K, !1),
							children: `合并所选（${K.length}）`
						}), /* @__PURE__ */ (0, $.jsx)(f, {
							variant: "ghost",
							size: "small",
							onClick: () => v({}),
							children: "取消选择"
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)(ne, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => ge.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, $.jsxs)(de, {
							"aria-label": "待合并创作者别名",
							size: "sm",
							sortDescriptor: T[0] ? {
								column: T[0].id,
								direction: T[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => ge.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, $.jsxs)(l, { children: [ge.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, $.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Xe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, $.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, $.jsx)(g, {})
									}) : null]
								}), /* @__PURE__ */ (0, $.jsx)(pe, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, $.jsx)(o, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, $.jsx)(a, { children: ge.getRowModel().rows.map((e) => /* @__PURE__ */ (0, $.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, $.jsx)(c, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, $.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ (0, $.jsx)(te, {
						label: "待合并创作者别名",
						unit: "组",
						total: t.length,
						pagination: F,
						onChange: M
					})
				]
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, $.jsx)(k, { children: "已保存别名" }), /* @__PURE__ */ (0, $.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${e.length} 组`
							})]
						}), /* @__PURE__ */ (0, $.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, $.jsx)(b, {
								label: "已保存创作者别名",
								sorting: D,
								options: [{
									id: "canonical",
									label: "统一名称"
								}, {
									id: "aliases",
									label: "平台别名"
								}],
								onChange: (e) => {
									O(e), P((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, $.jsx)(fe, {
								preferences: p,
								label: "已保存创作者别名"
							})]
						})]
					}),
					/* @__PURE__ */ (0, $.jsxs)(ce, {
						label: "已保存别名批量操作",
						visible: ye.length > 0,
						count: `已选 ${ye.length} 个别名`,
						children: [/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...q(U.isPending),
							onClick: () => void Ie({
								title: "移除所选创作者别名",
								body: `将移除以下 ${ye.length} 个别名，对应来源恢复为独立创作者组。`,
								items: ye,
								confirmLabel: "移除所选别名",
								onConfirm: () => U.mutateAsync(ye)
							}),
							children: `移除所选别名（${ye.length}）`
						}), /* @__PURE__ */ (0, $.jsx)(f, {
							variant: "ghost",
							size: "small",
							onClick: () => C({}),
							children: "取消选择"
						})]
					}),
					e.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(ne, {
						follow: !0,
						preferences: p,
						onRowClick: (e) => _e.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, $.jsxs)(de, {
							"aria-label": "已保存创作者别名",
							size: "sm",
							sortDescriptor: D[0] ? {
								column: D[0].id,
								direction: D[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => _e.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, $.jsxs)(l, { children: [_e.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, $.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...p.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Xe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, $.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, $.jsx)(g, {})
									}) : null]
								}), /* @__PURE__ */ (0, $.jsx)(pe, {
									preferences: p,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, $.jsx)(o, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: p.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, $.jsx)(a, { children: _e.getRowModel().rows.map((e) => /* @__PURE__ */ (0, $.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, $.jsx)(c, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, $.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ (0, $.jsx)(te, {
						label: "已保存创作者别名",
						unit: "组",
						total: e.length,
						pagination: I,
						onChange: P
					})] }) : /* @__PURE__ */ (0, $.jsx)(re, {
						size: "compact",
						icon: ve,
						title: "还没有保存创作者别名",
						actions: i ? void 0 : /* @__PURE__ */ (0, $.jsx)(x, {
							target: "input[aria-label=\"统一名称\"]",
							children: "添加别名"
						}),
						children: "填写统一名称，以及该创作者在其他平台使用的名字。"
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(mn, {
				group: ee,
				close: () => m(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var Dn = Nt({
	rowPaginationFeature: St,
	rowSelectionFeature: Ct,
	rowSortingFeature: wt,
	columnVisibilityFeature: J,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), On = {
	select: "选择",
	name: "名称",
	kind: "类型",
	origin: "来源",
	status: "状态",
	interval: "频率",
	fetched: "上次拉取",
	fresh: "上次新增",
	actions: "操作"
}, kn = /* @__PURE__ */ new Set(["actions"]), An = Object.entries(On).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : e === "origin" ? 184 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), jn = () => pt.invalidateQueries({
	queryKey: w,
	exact: !0
}), Mn = (e) => e.name || e.url;
function Nn(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function Pn({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ (0, $.jsx)(_, {
		variant: "caption",
		color: "rose",
		children: "拉取失败"
	}) : e.last_fetched_at ? /* @__PURE__ */ (0, $.jsx)(_, {
		variant: "caption",
		color: "lime",
		children: "正常"
	}) : /* @__PURE__ */ (0, $.jsx)(_, {
		variant: "caption",
		color: "gray",
		children: "未检查"
	}) : /* @__PURE__ */ (0, $.jsx)(_, {
		variant: "caption",
		color: "gray",
		children: "已暂停"
	});
}
function Fn({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${Wt}`,
		dangerouslySetInnerHTML: { __html: Ee(Mn(e), t, null, "performer") }
	});
}
var In = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function Ln(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function Rn(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return Ie({
		title: n ? "移除订阅源" : `移除 ${e.length} 条订阅源`,
		body: n ? `将移除订阅源「${Mn(n)}」，之后不再拉取它的新作；已经拉到的新作保留。` : "将移除所选订阅源，之后不再拉取它们的新作；已经拉到的新作保留。",
		confirmLabel: n ? "移除订阅源" : "移除所选订阅源",
		danger: !0,
		onConfirm: t
	});
}
function zn({ readOnly: e, toast: t, onAdd: n, selection: r }) {
	let i = zt({
		queryKey: w,
		queryFn: ({ signal: e }) => Z(e)
	}), d = It(), p = Vt("jav-feeds", An), m = i.data, _ = (0, Q.useMemo)(() => m?.sources ?? [], [m]), [v, y] = (0, Q.useState)(/* @__PURE__ */ new Set()), x = r?.ids ?? v, C = r?.onChange ?? y, [ie, T] = (0, Q.useState)(1), [E, D] = (0, Q.useState)(20), [O, k] = (0, Q.useState)([]), j = ut(_.length, E, ie);
	(0, Q.useEffect)(() => {
		T((e) => Math.min(e, j.pages));
	}, [j.pages]), (0, Q.useEffect)(() => {
		C((e) => {
			let t = new Set(_.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [_, C]);
	let M = Rt({
		mutationFn: async (e) => {
			let t = await st(e.ids, 4, async (t) => {
				e.action === "remove" ? await gt(t) : await Et(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (C(/* @__PURE__ */ new Set()), jn(), e.action === "remove" && r && t(`已移除 ${r} 条订阅源`), n.length) {
				let e = n[0];
				d.setError(`${n.length} 条没有写入：${e.ok ? "" : Y(e.error)}`);
			}
		},
		onError: (e) => d.setError(Y(e))
	}), N = (0, Q.useMemo)(() => Ln(_), [_]), F = (0, Q.useRef)({
		readOnly: e,
		shared: N,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	F.current = {
		readOnly: e,
		shared: N,
		busy: d.busy,
		toggle: (e, t) => void d.run(`enabled-${e.id}`, (n) => Et(e.id, t, n), () => void jn()),
		fetch: (e) => void d.run(`check-${e.id}`, (t) => Ae(t, [e.id]), () => void jn()),
		remove: (e) => void Rn([e], async () => {
			await gt(e.id), t(`已移除订阅源「${Mn(e)}」`), jn();
		})
	};
	let I = (0, Q.useMemo)(() => {
		let e = Le(), t = (e) => () => On[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, $.jsx)(me, {
					table: e.table,
					label: "全选本页订阅源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(h, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${Mn(e.row.original)}`
				})
			}),
			e.accessor(Mn, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = In(e.row.original, F.current.shared);
					return /* @__PURE__ */ (0, $.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, $.jsx)(Fn, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ (0, $.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								title: `站上这一页挂在「${t}」名下`,
								children: t
							}) : null
						]
					});
				}
			}),
			e.accessor((e) => e.kind_label, {
				id: "kind",
				header: t("kind"),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
					className: "whitespace-nowrap",
					children: e.getValue()
				})
			}),
			e.accessor((e) => e.url, {
				id: "origin",
				header: t("origin"),
				cell: (e) => /* @__PURE__ */ (0, $.jsxs)("a", {
					href: e.getValue(),
					target: "_blank",
					rel: "noopener noreferrer",
					title: "打开来源页面",
					className: "max-w-full text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ (0, $.jsx)(W, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : e.row.original.kind.startsWith("dmm") ? "dmm" : Nn(e.getValue()),
						label: Nn(e.getValue())
					}), /* @__PURE__ */ (0, $.jsx)(K, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? "拉取失败" : e.enabled ? "已启用" : "已暂停", {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(Pn, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
					className: "whitespace-nowrap",
					children: X(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? at(e.row.original.last_fetched_at) : "还没拉过"
				})
			}),
			e.accessor((e) => e.last_new_count, {
				id: "fresh",
				header: t("fresh"),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: `${e.getValue()} 条`
				})
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, $.jsx)(ue, {
							"aria-label": `启用 ${Mn(e.row.original)}`,
							isSelected: e.row.original.enabled,
							isDisabled: F.current.readOnly,
							onChange: (t) => F.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Be,
							"aria-label": `拉取 ${Mn(e.row.original)}`,
							disabled: F.current.readOnly,
							...q(F.current.busy === `check-${e.row.original.id}`),
							onClick: () => F.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: P,
							"aria-label": `移除 ${Mn(e.row.original)}`,
							disabled: F.current.readOnly,
							onClick: () => F.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), ae = (0, Q.useMemo)(() => Object.fromEntries([...x].map((e) => [String(e), !0])), [x]), L = Bt({
		features: Dn,
		data: _,
		columns: I,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: ae,
			sorting: O,
			pagination: {
				pageIndex: j.page - 1,
				pageSize: E
			},
			columnVisibility: p.visibility
		},
		onColumnVisibilityChange: p.change,
		onSortingChange: (e) => {
			k(e), T(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			r?.onActivate();
			let t = typeof e == "function" ? e(ae) : e;
			C(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!m) return i.error ? /* @__PURE__ */ (0, $.jsx)(R, {
		tone: "error",
		title: "打不开订阅源",
		children: Y(i.error)
	}) : /* @__PURE__ */ (0, $.jsx)(A, { children: "正在读订阅源。" });
	let z = () => void d.run("check", (e) => Ae(e), () => void jn()), B = (e) => {
		r?.onActivate(), C((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, V = _.filter((e) => x.has(e.id)), H = _.filter((e) => e.last_error);
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-label": "JAV 订阅列表",
			className: De({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			children: [
				/* @__PURE__ */ (0, $.jsxs)("div", {
					"data-responsive-toolbar": "",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-toolbar-heading": "",
						children: [/* @__PURE__ */ (0, $.jsx)("h3", {
							className: "text-title-2-medium text-text-primary",
							children: "JAV 订阅源"
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: `${_.length.toLocaleString()} 个订阅源 · ${(Number(m.unread) || 0).toLocaleString()} 条未看`
						})]
					}), /* @__PURE__ */ (0, $.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, $.jsx)(f, {
								onClick: z,
								disabled: e,
								...q(d.busy === "check"),
								children: "立即拉取"
							}),
							/* @__PURE__ */ (0, $.jsx)(fe, {
								preferences: p,
								label: "JAV 订阅源"
							}),
							/* @__PURE__ */ (0, $.jsx)(b, {
								label: "JAV 订阅源",
								sorting: O,
								onChange: (e) => {
									k(e), T(1);
								},
								options: [
									"name",
									"kind",
									"origin",
									"status",
									"interval",
									"fetched",
									"fresh"
								].map((e) => ({
									id: e,
									label: On[e]
								}))
							})
						]
					})]
				}),
				H.length || d.error ? /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [H.length ? /* @__PURE__ */ (0, $.jsx)(R, {
						tone: "error",
						title: `${H.length.toLocaleString()} 条订阅源拉取失败`,
						extra: /* @__PURE__ */ (0, $.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: H.map((e) => /* @__PURE__ */ (0, $.jsx)("li", {
								className: "min-w-0 truncate",
								title: e.last_error || "",
								children: `${Mn(e)}：${Ue(e.last_error || "") || "未说明原因"}`
							}, e.id))
						}),
						children: "这些订阅源这一轮没有取到新条目。"
					}) : null, d.error ? /* @__PURE__ */ (0, $.jsx)(S, { children: d.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, $.jsxs)(ce, {
					visible: V.length > 0,
					label: "订阅源批量操作",
					count: `已选 ${V.length} 条订阅源`,
					children: [
						/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...q(M.isPending),
							onClick: () => M.mutate({
								ids: V.map((e) => e.id),
								action: "enabled"
							}),
							children: "启用"
						}),
						/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...q(M.isPending),
							onClick: () => M.mutate({
								ids: V.map((e) => e.id),
								action: "paused"
							}),
							children: "暂停"
						}),
						/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "danger",
							size: "small",
							disabled: e,
							...q(M.isPending),
							onClick: () => void Rn(V, () => M.mutateAsync({
								ids: V.map((e) => e.id),
								action: "remove"
							})),
							children: "移除"
						}),
						/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "ghost",
							size: "small",
							onClick: () => C(/* @__PURE__ */ new Set()),
							children: "取消选择"
						})
					]
				}),
				_.length ? /* @__PURE__ */ (0, $.jsx)(ne, {
					follow: !0,
					preferences: p,
					onRowClick: (e) => B(Number(e)),
					children: /* @__PURE__ */ (0, $.jsxs)(de, {
						"aria-label": "JAV 订阅源",
						size: "sm",
						sortDescriptor: O[0] ? {
							column: O[0].id,
							direction: O[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => L.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, $.jsxs)(l, { children: [L.getHeaderGroups()[0].headers.map((e) => {
							let t = Xe(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, $.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...p.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [kn.has(e.column.id) ? /* @__PURE__ */ (0, $.jsx)(u, { children: t }) : /* @__PURE__ */ (0, $.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ (0, $.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, $.jsx)(g, {})
									}) : null]
								}), /* @__PURE__ */ (0, $.jsx)(pe, {
									preferences: p,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ (0, $.jsx)(o, {
							id: "remaining-space",
							"aria-label": "行空白区域",
							"data-table-space": "",
							width: p.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ (0, $.jsx)(a, { children: L.getRowModel().rows.map((e) => /* @__PURE__ */ (0, $.jsxs)(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, $.jsx)(c, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, $.jsx)(c, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ (0, $.jsx)(re, {
					icon: ee,
					title: "还没有订阅源",
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ (0, $.jsx)(f, {
						variant: "secondary",
						onClick: n,
						children: "添加订阅"
					}),
					children: "在「添加关注」按女优名添加，或在人物页点「订阅新作」。"
				}),
				_.length ? /* @__PURE__ */ (0, $.jsx)(te, {
					label: "JAV 订阅",
					total: j.total,
					unit: "个订阅源",
					pagination: {
						pageIndex: j.page - 1,
						pageSize: E
					},
					onChange: (e) => {
						D(e.pageSize), T(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, $.jsx)("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ (0, $.jsx)("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${(Number(m.unread) || 0).toLocaleString()} · 已启用 ${_.filter((e) => e.enabled).length.toLocaleString()} / ${_.length.toLocaleString()}`
					})
				})
			]
		})
	});
}
// src/react/follow-manage/source-list.tsx
var Bn = Nt({
	rowPaginationFeature: St,
	rowSelectionFeature: Ct,
	rowSortingFeature: wt,
	columnVisibilityFeature: J,
	paginatedRowModel: e()
}), Vn = (e) => (Number(e) || 0).toLocaleString(), Hn = Object.fromEntries(Object.entries(m).map(([e, t]) => [t, e])), Un = 740;
function Wn() {
	let [e, t] = (0, Q.useState)(!1), n = (0, Q.useRef)(null), r = (0, Q.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < Un));
		r.observe(e), n.current = r, t(e.clientWidth < Un);
	}, []);
	return (0, Q.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var Gn = {
	select: "选择",
	author: "创作者",
	source: "来源",
	provider: "站点",
	status: "状态",
	checked: "上次检查",
	actions: "操作"
}, Kn = Object.entries(Gn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
}));
function qn({ source: e, selected: t, onToggle: n, handlers: r }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-selected": t || void 0,
		"data-follow-source-row": "",
		className: "flex min-h-16 flex-wrap items-center gap-3 px-2 py-3 last:rounded-b-lg max-sm:gap-x-2",
		onClick: (e) => {
			Pe(e, e.currentTarget) && n(!t);
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)(h, {
				isSelected: t,
				onChange: n,
				"aria-label": `选择 ${e.label}`
			}),
			/* @__PURE__ */ (0, $.jsxs)("span", {
				className: "flex min-w-0 grow basis-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					"data-follow-source-site": "",
					className: "flex shrink-0 items-center text-body-medium",
					children: /* @__PURE__ */ (0, $.jsx)(Gt, { provider: e.provider })
				}), /* @__PURE__ */ (0, $.jsx)(Jt, { source: e })]
			}),
			/* @__PURE__ */ (0, $.jsx)(u, { children: e.provider_label }),
			/* @__PURE__ */ (0, $.jsx)(qt, { source: e }),
			e.last_error ? /* @__PURE__ */ (0, $.jsxs)("span", {
				"data-follow-source-error": "",
				className: "flex min-w-0 basis-full gap-3 max-sm:gap-x-2 sm:order-last",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					"aria-hidden": !0,
					className: "w-4 shrink-0"
				}), /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex min-w-0 grow gap-1.5",
					children: [/* @__PURE__ */ (0, $.jsx)("span", {
						"aria-hidden": !0,
						className: "w-(--icon-inline) shrink-0 text-body-medium"
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						className: "min-w-0 grow",
						children: /* @__PURE__ */ (0, $.jsx)(Yt, { text: e.last_error })
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: Ne(e)
					}),
					/* @__PURE__ */ (0, $.jsx)(ue, {
						"aria-label": `启用 ${e.label}`,
						isSelected: e.enabled,
						isDisabled: r.readOnly,
						onChange: (t) => r.toggle(e, t)
					}),
					/* @__PURE__ */ (0, $.jsxs)("span", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Be,
							"aria-label": `检查 ${e.label} 的更新`,
							disabled: !e.enabled || r.readOnly,
							...q(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ (0, $.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: P,
							"aria-label": `移除 ${e.label}`,
							disabled: r.readOnly,
							onClick: () => r.remove(e)
						})]
					})
				]
			})
		]
	});
}
function Jn({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: a, onToggleGroup: o, onToggle: s }) {
	let c = e.map((e) => e.id), l = e.filter((e) => e.enabled).map((e) => e.id), d = e.filter(tt).length, p = [...new Set(e.map((e) => e.provider_label || e.provider))].join("、"), ee = `follow-author-${e[0].id}`, m = Tt(r, c);
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": `${t} 的关注来源`,
		className: De({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ (0, $.jsx)(Kt, {
					group: e,
					name: t
				}),
				/* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex min-w-0 grow basis-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)("b", {
						className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
						children: t
					}), /* @__PURE__ */ (0, $.jsxs)("span", {
						"data-follow-author-sites": "",
						className: "flex min-w-0 flex-wrap items-center gap-1 text-body-2-regular",
						title: p,
						children: [
							e.map((e) => /* @__PURE__ */ (0, $.jsx)(Gt, { provider: e.provider }, e.id)),
							/* @__PURE__ */ (0, $.jsx)(u, { children: `来源：${p}` }),
							d ? /* @__PURE__ */ (0, $.jsx)("span", {
								className: "ml-1 shrink-0 text-text-error-primary",
								children: `${d} 个失败`
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)("span", {
					"data-follow-author-controls": "",
					className: "flex flex-none items-center gap-2 max-sm:w-full max-sm:justify-end",
					children: [/* @__PURE__ */ (0, $.jsx)(f, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: Be,
						"aria-label": `检查 ${t} 的全部来源`,
						disabled: !l.length || i.readOnly,
						...q(i.busy),
						onClick: () => i.check(l)
					}), /* @__PURE__ */ (0, $.jsxs)("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "secondary",
							size: "small",
							leadingIcon: it,
							"aria-pressed": m.all ? "true" : m.some ? "mixed" : "false",
							"aria-label": `${m.all ? "取消全选" : "全选"} ${t} 的来源`,
							onClick: () => o(!m.all),
							children: m.all ? "取消全选" : "全选"
						}), /* @__PURE__ */ (0, $.jsx)(f, {
							variant: "secondary",
							size: "small",
							"aria-expanded": n,
							"aria-controls": ee,
							leadingIcon: v,
							"aria-label": `${n ? "收起" : "展开"} ${t} 的来源`,
							onClick: () => a(!n),
							children: n ? "收起" : "展开"
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, $.jsx)(y, {
			id: ee,
			open: n,
			"data-source-divider": !0,
			children: e.map((e) => /* @__PURE__ */ (0, $.jsx)(qn, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => s(e.id, t)
			}, e.id))
		})]
	});
}
function Yn(e) {
	let { data: t, sort: n, dir: r, page: i, layout: d, pageSize: p, selected: _, readOnly: y, onSort: b, onPage: x, onLayout: S, onPageSize: C, onSelected: w, toast: T, openFollow: E, onAdd: D } = e, O = t.sources, k = (0, Q.useMemo)(() => t.author_aliases || [], [t.author_aliases]), A = t.counts || {}, [j, N] = (0, Q.useState)(/* @__PURE__ */ new Set()), [F, I] = Wn(), [ae, L] = (0, Q.useState)(""), z = (0, Q.useMemo)(() => Ce(O, n, r, k), [
		O,
		n,
		r,
		k
	]), H = (0, Q.useMemo)(() => Pt(z, n, r, k), [
		z,
		n,
		r,
		k
	]), { job: U, running: W, outcome: G, start: he } = Lt({
		queryKey: ie,
		queryFn: ({ signal: e }) => We(e),
		start: (e) => At(e),
		onError: (e) => L(Y(e)),
		onFinish: (e) => {
			mt(), T(e.status === "failed" ? e.error || "检查失败" : je(e));
		}
	}), K = (e) => {
		W || he.isPending || (L(""), he.mutate(e));
	}, ve = (e, t) => w(Ft(_, [e], t)), ye = (e, t) => w(Ft(_, e, t)), be = Rt({
		mutationFn: (e) => _t(e),
		onSuccess: (e, t) => {
			Ve([t]), w(Ft(_, [t], !1)), T("已取消关注来源");
		},
		onError: (e) => L(Y(e))
	}), xe = Rt({
		mutationFn: (e) => Dt(e.id, e.enabled),
		onSuccess: (e, t) => {
			dt(t.id, { enabled: t.enabled }), L("");
		},
		onError: (e) => L(Y(e))
	}), Se = (e) => void Ie({
		title: "取消关注来源",
		body: "将移除这个来源及已抓取的条目，媒体文件保留。",
		confirmLabel: "取消关注来源",
		danger: !0,
		onConfirm: () => be.mutateAsync(e.id)
	}), we = Rt({
		mutationFn: async (e) => {
			let t = await st(e.ids, 4, async (t) => {
				e.action === "remove" ? await _t(t) : await Dt(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") Ve(e.done);
			else for (let t of e.done) dt(t, { enabled: e.action === "enabled" });
			w(Ft(_, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			if (t.length) {
				L(`${t.length}/${e.ids.length} 个来源未更新：${Y(t[0]?.error)}`);
				return;
			}
			L("");
			let n = e.action === "remove" ? "删除" : e.action === "enabled" ? "启用" : "暂停";
			T(`已${n} ${e.done.length} 个关注来源`);
		},
		onError: (e) => L(Y(e))
	}), Ee = Rt({
		mutationFn: async (e) => {
			let t = ((await qe()).groups || []).flatMap((e) => [
				e.primary,
				...e.variants,
				...e.duplicates
			]).filter((e) => e.status === "new").map((e) => e.id);
			return {
				ids: t,
				failed: (await st(t, 6, (t) => ct(t, e))).filter((e) => !e.ok)
			};
		},
		onSuccess: (e) => {
			mt(), e.failed.length ? L(`批量更新 ${e.failed.length}/${e.ids.length} 项未完成`) : (L(""), T(`已批量标记 ${e.ids.length} 项`));
		},
		onError: (e) => L(Y(e))
	}), Ae = (e, t) => xe.mutate({
		id: e.id,
		enabled: t
	}), Pe = (0, Q.useRef)({
		check: K,
		toggle: Ae,
		remove: Se,
		busy: !1,
		readOnly: y
	});
	Pe.current = {
		check: K,
		toggle: Ae,
		remove: Se,
		busy: W || he.isPending,
		readOnly: y
	};
	let J = Pe.current, Fe = (0, Q.useMemo)(() => {
		let e = Le(), t = (e) => () => Gn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, $.jsx)(me, {
					table: e.table,
					label: "全选本页来源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(h, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${e.row.original.source.label}`
				})
			}),
			e.accessor((e) => e.author, {
				id: "author",
				header: t("author"),
				cell: (e) => /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, $.jsx)(Kt, {
						group: e.row.original.group,
						name: e.row.original.author
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.row.original.author
					})]
				})
			}),
			e.accessor((e) => e.source.label, {
				id: "source",
				header: t("source"),
				cell: (e) => /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, $.jsx)(Jt, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ (0, $.jsx)(Yt, { text: e.row.original.source.last_error }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, $.jsx)(Gt, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(qt, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => Ne(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, $.jsx)(ue, {
							"aria-label": `启用 ${e.row.original.source.label}`,
							isSelected: e.row.original.source.enabled,
							isDisabled: J.readOnly,
							onChange: (t) => Pe.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Be,
							"aria-label": `检查 ${e.row.original.source.label} 的更新`,
							disabled: !e.row.original.source.enabled || J.readOnly,
							...q(J.busy),
							onClick: () => Pe.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: P,
							"aria-label": `移除 ${e.row.original.source.label}`,
							disabled: J.readOnly,
							onClick: () => Pe.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [J]), Re = (0, Q.useMemo)(() => {
		let e = Hn[n];
		return e ? [{
			id: e,
			desc: r === "desc"
		}] : [];
	}, [n, r]), ze = (0, Q.useMemo)(() => Object.fromEntries([..._].map((e) => [String(e), !0])), [_]), X = d === "table", Ge = Vt("follow-sources", Kn), Z = ut(X ? H.length : z.length, p, i), Ke = Bt({
		features: Bn,
		data: H,
		columns: Fe,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: Re,
			rowSelection: ze,
			pagination: {
				pageIndex: Z.page - 1,
				pageSize: p
			},
			columnVisibility: Ge.visibility
		},
		onColumnVisibilityChange: Ge.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(Re) : e)[0];
			if (!t) return;
			let n = m[t.id];
			n && b(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(ze) : e;
			w(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: Z.page - 1,
				pageSize: p
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === p ? n.pageIndex !== t.pageIndex && x(n.pageIndex + 1) : C(n.pageSize);
		}
	}), Je = Ke.getRowModel().rows, Ye = X ? Je.map((e) => e.original.source.id) : z.slice(Z.start, Z.end).flatMap((e) => e.map((e) => e.id)), Ze = Tt(_, Ye), Qe = [..._], $e = ke(G), et = O.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), tt = Oe(G), nt = z.length > 0 && j.size >= z.length;
	return O.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: De({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				ref: F,
				"data-follow-toolbar": "",
				"data-responsive-toolbar": "",
				children: [/* @__PURE__ */ (0, $.jsxs)("span", {
					"data-follow-toolbar-heading": "",
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ (0, $.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "关注列表"
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: `${O.length.toLocaleString()} 个来源${A.new ? ` · ${Vn(A.new)} 条未看` : ""}`
					})]
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						et.length ? /* @__PURE__ */ (0, $.jsx)(f, {
							variant: "secondary",
							disabled: y,
							...q(J.busy),
							onClick: () => K(et),
							children: "检查失败项"
						}) : null,
						/* @__PURE__ */ (0, $.jsx)(f, {
							variant: "primary",
							leadingIcon: Be,
							disabled: y,
							"aria-label": "检查全部",
							iconOnly: I,
							...q(J.busy),
							onClick: () => K([]),
							children: "检查全部"
						}),
						/* @__PURE__ */ (0, $.jsxs)("span", {
							"data-follow-toolbar-controls": "",
							className: "contents",
							children: [
								/* @__PURE__ */ (0, $.jsxs)("span", {
									"data-button-group": !0,
									role: "group",
									"aria-label": "关注列表版式",
									children: [/* @__PURE__ */ (0, $.jsx)(f, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: _e,
										"aria-label": M[0][1],
										"aria-pressed": !X,
										onClick: () => S("default")
									}), /* @__PURE__ */ (0, $.jsx)(f, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: He,
										"aria-label": M[1][1],
										"aria-pressed": X,
										onClick: () => S("table")
									})]
								}),
								X ? /* @__PURE__ */ (0, $.jsx)(fe, {
									preferences: Ge,
									label: "关注来源"
								}) : null,
								/* @__PURE__ */ (0, $.jsxs)("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ (0, $.jsx)(oe, {
										"aria-label": "关注列表排序",
										prefix: "排序",
										selectedKey: n,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											b(t, B[t]);
										},
										children: V.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(se, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ (0, $.jsx)(f, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: le,
										"data-icon-state": r === "asc" ? "a" : "b",
										"aria-label": Ot(n, r),
										onClick: () => b(n, r === "asc" ? "desc" : "asc")
									})]
								}),
								X ? null : /* @__PURE__ */ (0, $.jsx)(f, {
									variant: "secondary",
									iconOnly: I,
									leadingIcon: v,
									"aria-expanded": !nt,
									"aria-label": nt ? "全部展开" : "全部收起",
									onClick: () => N(nt ? /* @__PURE__ */ new Set() : new Set(z.map((e) => String(e[0].author_key || e[0].id)))),
									children: nt ? "全部展开" : "全部收起"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [
					W ? /* @__PURE__ */ (0, $.jsx)(ge, {
						embedded: !0,
						label: U?.message || (U?.total ? `${U.older ? "抓取历史" : "检查更新"}：已完成 ${U.checked || 0}/${U.total} 个来源` : "正在准备检查任务"),
						value: U?.checked,
						total: U?.total
					}) : null,
					ae ? /* @__PURE__ */ (0, $.jsx)(R, {
						tone: "error",
						title: "操作未完成",
						children: ae
					}) : null,
					!W && G?.results?.length ? /* @__PURE__ */ (0, $.jsx)(R, {
						tone: "neutral",
						title: "检查结果",
						children: Me(G)
					}) : null,
					$e.length ? /* @__PURE__ */ (0, $.jsx)(R, {
						tone: "error",
						title: `${$e.length} 个来源检查失败`,
						extra: /* @__PURE__ */ (0, $.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: $e.map((e, t) => /* @__PURE__ */ (0, $.jsx)("li", { children: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}：${Ue(e.error || "") || "未说明原因"}` }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: "这些来源这一轮没有取到更新。"
					}) : null,
					tt ? /* @__PURE__ */ (0, $.jsx)(R, {
						tone: "warning",
						children: `条目已保存，但这次未保存来源的原始响应：${tt}`
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)(ce, {
				label: "关注来源批量操作",
				visible: Qe.length > 0,
				count: `已选 ${Qe.length} 个来源`,
				children: [
					/* @__PURE__ */ (0, $.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: y,
						...q(J.busy),
						onClick: () => K(Qe),
						children: "检查所选"
					}),
					/* @__PURE__ */ (0, $.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: y,
						...q(we.isPending),
						onClick: () => we.mutate({
							ids: Qe,
							action: "enabled"
						}),
						children: "启用"
					}),
					/* @__PURE__ */ (0, $.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: y,
						...q(we.isPending),
						onClick: () => we.mutate({
							ids: Qe,
							action: "paused"
						}),
						children: "暂停"
					}),
					/* @__PURE__ */ (0, $.jsx)(f, {
						variant: "danger",
						size: "small",
						disabled: y,
						...q(we.isPending),
						onClick: () => void Ie({
							title: `删除 ${Qe.length} 个关注来源`,
							body: "将移除所选关注来源及其已抓取条目，媒体文件保留。",
							confirmLabel: "删除所选来源",
							danger: !0,
							onConfirm: () => we.mutateAsync({
								ids: Qe,
								action: "remove"
							})
						}),
						children: "删除"
					}),
					/* @__PURE__ */ (0, $.jsx)(f, {
						variant: "ghost",
						size: "small",
						onClick: () => w(/* @__PURE__ */ new Set()),
						children: "取消选择"
					})
				]
			}),
			X ? /* @__PURE__ */ (0, $.jsx)(ne, {
				follow: !0,
				preferences: Ge,
				onRowClick: (e) => ve(Number(e), !_.has(Number(e))),
				children: /* @__PURE__ */ (0, $.jsxs)(de, {
					"aria-label": "关注来源",
					size: "sm",
					sortDescriptor: Re[0] ? {
						column: Re[0].id,
						direction: Re[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => Ke.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ (0, $.jsxs)(l, { children: [Ke.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in m, n = Xe(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ (0, $.jsx)(o, {
							id: e.id,
							allowsSorting: t,
							isRowHeader: e.column.id === "source",
							...Ge.columnProps(e.id),
							children: ({ sortDirection: r }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [e.id === "select" ? n : t ? /* @__PURE__ */ (0, $.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [n, /* @__PURE__ */ (0, $.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": r || void 0,
									children: /* @__PURE__ */ (0, $.jsx)(g, {})
								})]
							}) : /* @__PURE__ */ (0, $.jsx)(u, { children: n }), /* @__PURE__ */ (0, $.jsx)(pe, {
								preferences: Ge,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ (0, $.jsx)(o, {
						id: "remaining-space",
						"aria-label": "行空白区域",
						"data-table-space": "",
						width: Ge.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, $.jsx)(a, {
						renderEmptyState: () => "这一页没有来源",
						children: Je.map((e) => /* @__PURE__ */ (0, $.jsxs)(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, $.jsx)(c, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, $.jsx)(c, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(h, {
				isSelected: Ze.all,
				isIndeterminate: Ze.some,
				onChange: (e) => ye(Ye, e),
				"aria-label": "全选本页来源",
				children: "全选本页"
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex flex-col gap-3",
				children: z.slice(Z.start, Z.end).map((e) => {
					let t = String(e[0].author_key || e[0].id);
					return /* @__PURE__ */ (0, $.jsx)(Jn, {
						group: e,
						name: Te(e, k),
						handlers: J,
						selected: _,
						open: !j.has(t),
						onOpen: (e) => {
							let n = new Set(j);
							e ? n.delete(t) : n.add(t), N(n);
						},
						onToggleGroup: (t) => ye(e.map((e) => e.id), t),
						onToggle: ve
					}, t);
				})
			})] }),
			/* @__PURE__ */ (0, $.jsx)(te, {
				label: "关注列表",
				total: Z.total,
				pagination: {
					pageIndex: Z.page - 1,
					pageSize: p
				},
				unit: X ? "个来源" : "位创作者",
				pageUnit: X ? "条" : "位",
				onChange: (e) => {
					e.pageSize === p ? Ke.setPageIndex(e.pageIndex) : Ke.setPageSize(e.pageSize);
				}
			}),
			A.new ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${Vn(A.new)} · 已看 ${Vn(A.seen)} · 已保存 ${Vn(A.saved)} · 已忽略 ${Vn(A.ignored)}`
					}),
					/* @__PURE__ */ (0, $.jsx)(f, {
						variant: "secondary",
						size: "small",
						onClick: E,
						children: "去看更新"
					}),
					/* @__PURE__ */ (0, $.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: y,
						...q(Ee.isPending),
						onClick: () => void Ie({
							title: "标记已看",
							body: "将把当前未看作品标记为已看。",
							confirmLabel: "标记已看",
							onConfirm: () => Ee.mutateAsync("seen")
						}),
						children: "全部标记已看"
					}),
					/* @__PURE__ */ (0, $.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: y,
						...q(Ee.isPending),
						onClick: () => void Ie({
							title: "标记已忽略",
							body: "将把当前未看作品标记为已忽略。",
							confirmLabel: "标记已忽略",
							onConfirm: () => Ee.mutateAsync("ignored")
						}),
						children: "全部忽略"
					})
				]
			}) : null
		]
	}) : /* @__PURE__ */ (0, $.jsx)(re, {
		icon: ee,
		title: "还没有关注来源",
		actions: /* @__PURE__ */ (0, $.jsx)(f, {
			variant: "primary",
			size: "small",
			onClick: D,
			children: "添加关注"
		}),
		children: "关注来源及其检查状态会显示在这里。"
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var Xn = (e) => D.some(([t]) => t === e);
function Zn({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: De({
			padding: "none",
			className: "flex flex-col gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-body-medium text-text-secondary",
			children: e
		}), /* @__PURE__ */ (0, $.jsxs)("b", {
			"data-follow-reading": "",
			className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${t >= 1e6 ? "text-headline-medium" : t >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "min-w-0 wrap-anywhere",
				children: t.toLocaleString()
			}), /* @__PURE__ */ (0, $.jsx)("small", {
				className: "whitespace-nowrap text-body-2-regular text-text-secondary",
				children: ` ${n}`
			})]
		})]
	});
}
function Qn(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, Q.useState)(Xn(e.tab) ? e.tab : "list"), [u, d] = (0, Q.useState)(Math.max(1, Math.floor(e.page) || 1)), [f, ee] = (0, Q.useState)(() => xt(e.sort, e.dir).sort), [m, h] = (0, Q.useState)(() => xt(e.sort, e.dir).dir), [g, _] = (0, Q.useState)(nt(e.layout) ? e.layout : "default"), [v, y] = (0, Q.useState)(lt(e.pageSize)), [te, ne] = (0, Q.useState)(/* @__PURE__ */ new Set()), [b, x] = (0, Q.useState)(/* @__PURE__ */ new Set()), re = zt({
		queryKey: E,
		queryFn: ({ signal: e }) => Ke(e)
	}), S = zt({
		queryKey: T,
		queryFn: ({ signal: e }) => Ge(e)
	}), ie = zt({
		queryKey: w,
		queryFn: ({ signal: e }) => Z(e)
	}), O = re.data || { sources: [] }, k = S.data || {
		root: "",
		providers: []
	}, A = O.sources;
	(0, Q.useEffect)(() => {
		ne((e) => {
			let t = rt(e, A);
			return t.size === e.size ? e : t;
		});
	}, [A]);
	let j = (e) => {
		let n = e.sort ?? f, r = e.dir ?? m;
		t({
			tab: e.tab ?? c,
			page: e.page ?? u,
			sort: n === "checked" ? "" : n,
			dir: r === B[n] ? "" : r
		});
	}, M = et(A), N = A.filter(tt).length, P = A.filter((e) => e.enabled).length, F = (k.providers || []).filter((e) => e.requirement === "required" && !Re(e)).length, I = new Set((ie.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ (0, $.jsxs)(Ht, { children: [
		a ? /* @__PURE__ */ (0, $.jsx)(R, {
			tone: "warning",
			title: "本机只能浏览",
			extra: s ? /* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, $.jsx)(C, {
					href: s,
					children: "前往写入端管理关注"
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ (0, $.jsxs)("div", {
			className: H,
			"aria-label": "关注概览",
			children: [
				/* @__PURE__ */ (0, $.jsx)(Zn, {
					term: "关注创作者",
					figure: M.length,
					unit: "位"
				}),
				/* @__PURE__ */ (0, $.jsx)(Zn, {
					term: "启用来源",
					figure: P,
					unit: `/ ${A.length}`
				}),
				/* @__PURE__ */ (0, $.jsx)(Zn, {
					term: "检查失败",
					figure: N,
					unit: "个来源"
				}),
				/* @__PURE__ */ (0, $.jsx)(Zn, {
					term: "未看更新",
					figure: O.counts?.new || 0,
					unit: "条"
				}),
				/* @__PURE__ */ (0, $.jsx)(Zn, {
					term: "JAV 订阅",
					figure: I,
					unit: "位"
				}),
				/* @__PURE__ */ (0, $.jsx)(Zn, {
					term: "未看新作",
					figure: ie.data?.unread || 0,
					unit: "条"
				})
			]
		}),
		/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, $.jsx)("div", {
					"data-section-nav": !0,
					children: /* @__PURE__ */ (0, $.jsx)(G, {
						group: "follow",
						label: "关注管理区域",
						value: c,
						panelPrefix: "follow",
						sectionItems: !0,
						tabs: D.map(([e, t]) => ({
							value: e,
							label: t
						})),
						className: "",
						itemClassName: "cursor-pointer whitespace-nowrap",
						onChange: (e) => {
							ne(/* @__PURE__ */ new Set()), x(/* @__PURE__ */ new Set()), l(e), j({ tab: e });
						}
					})
				}),
				c === "list" ? /* @__PURE__ */ (0, $.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-list",
					"aria-labelledby": "follow-tab-list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, $.jsx)(zn, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							l("add"), j({ tab: "add" });
						},
						selection: {
							ids: b,
							onChange: x,
							onActivate: () => ne(/* @__PURE__ */ new Set())
						}
					}), /* @__PURE__ */ (0, $.jsx)(Yn, {
						data: O,
						sort: f,
						dir: m,
						page: u,
						layout: g,
						pageSize: v,
						selected: te,
						readOnly: a,
						toast: r,
						openFollow: i,
						onAdd: () => {
							l("add"), j({ tab: "add" });
						},
						onSort: (e, t) => {
							ee(e), h(t), d(1), j({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							d(e), j({ page: e });
						},
						onSelected: (e) => {
							ne(e), x(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							_(e), d(1), n({ layout: e }), j({ page: 1 });
						},
						onPageSize: (e) => {
							y(e), d(1), n({ pageSize: e }), j({ page: 1 });
						}
					})]
				}) : null,
				c === "add" ? /* @__PURE__ */ (0, $.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-add",
					"aria-labelledby": "follow-tab-add",
					className: "flex flex-col gap-8",
					children: [
						/* @__PURE__ */ (0, $.jsx)(cn, {
							data: O,
							credentials: k,
							readOnly: a,
							toast: r
						}),
						/* @__PURE__ */ (0, $.jsx)(pn, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								ie.refetch(), l("list"), j({ tab: "list" });
							}
						}),
						/* @__PURE__ */ (0, $.jsx)(En, {
							groups: O.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: O.alias_suggestions || [],
							sources: O.sources
						})
					]
				}) : null,
				c === "tags" ? /* @__PURE__ */ (0, $.jsx)("div", {
					role: "tabpanel",
					id: "follow-panel-tags",
					"aria-labelledby": "follow-tab-tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ (0, $.jsx)(he, { scope: "online" })
				}) : null
			]
		}),
		/* @__PURE__ */ (0, $.jsx)("div", { children: /* @__PURE__ */ (0, $.jsxs)(p, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: ["来源与订阅设置", F ? `（${F}）` : ""]
		}) })
	] });
}
export { Qn as FollowManagePage };

//# debugId=9080938b-af2f-4b5d-942a-15d15869ed78