(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "058ffd3c-9bca-402f-ab1e-86ea4c1f4d7d", e._sentryDebugIdIdentifier = "sentry-dbid-058ffd3c-9bca-402f-ab1e-86ea4c1f4d7d");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $542a13ca2fa5b484$export$5b6b19405a83ff9d as t, $72abaeab4d80592f$export$78efe591171d7d45 as n, $ea3928288112382f$export$439d29a4e110a164 as r, $f2ff30fde7b014be$export$3ddf2d174ce01153 as i, $fe21c36db05242bb$export$a98f0dcb43a68a25 as a, $fe21c36db05242bb$export$d7b12c4107be0d61 as o, ACCENTS as s, ApiError as c, Button as l, ButtonLink as u, CLOUD_LOCATIONS as d, CLOUD_PROXY_HELP as f, CONFIGURATION_KEY as p, CONFIGURATION_URL as m, Checkbox as h, Chip as g, CommandSteps as _, Disclosure as v, E3 as y, ErrorText as b, Eu as x, ExternalLink as S, Fact as C, FactList as w, FieldLabel as T, Footer as E, Help as D, Input as O, L1 as k, LIBRARY_FOLDER_HELP as A, Label as j, LinkButton as M, LoadingDots as N, M6 as ee, MEDIA_SOURCE_ICONS as te, MENU_POPOVER_SURFACE as ne, MotionConfigContext as re, Note as P, PICK_FOLDER_URL as ie, POLICY_COLUMNS as ae, POLICY_COVER_NOTE as oe, POLICY_MATRIX as se, POLICY_SUMMARY as ce, PathLine as le, ProcessingMode as ue, Progress as de, Rows as fe, SEGMENT as pe, SEGMENTED_TRACK as me, SETTINGS_KEY as he, Section as F, SectionSkeleton as ge, SegmentedRadioGroup as _e, Select as ve, Select$1 as ye, SelectItem as be, SettingsCard as xe, SettingsRow as Se, SortableBoardTabs as Ce, SourceLabel as we, SourceMark as Te, Stack as I, StatusLabel as Ee, Switch as De, TaskCenterLink as Oe, Uz as ke, WithPromise as Ae, __commonJSMin as je, __exportAll as Me, __toESM as Ne, _p as Pe, animate as Fe, apiGet as Ie, apiSend as L, asNumber as Le, busyProps as R, calcGeneratorVelocity as Re, cancelFrame as ze, cardClass as Be, cloudProxySkeleton as Ve, clsx as z, collectMotionValues as He, confirmModal as Ue, cx as We, d6 as Ge, devicesSkeleton as Ke, errorMessage as qe, fetchConfiguration as Je, fetchLibraryProcessing as Ye, fetchSettings as Xe, fmtSize as Ze, frame as Qe, interpolate as $e, isMotionValue as et, javBrowserSkeleton as tt, l1 as nt, motion as rt, motionValue as it, overlayHost as at, peachHistory$1 as ot, previewLibraryColor as st, processingActive as ct, providerIcon as lt, queryClient as ut, randomId as dt, rememberShape as ft, require_jsx_runtime as pt, require_react as mt, require_react_dom as ht, require_with_selector as gt, resolveStartTime as _t, restartEffectText as vt, settingsPath as yt, shellNavigate as bt, sourceDefaultCost as xt, spring as St, time as Ct, useAction as wt, useClientUpdates as Tt, useConstant as Et, useIsomorphicLayoutEffect as Dt, useLibraryTints as Ot, useOrderedLibraries as kt, useQuery as At, useQueryClient as jt, useReducedMotion as Mt, useSaveSettings as Nt, we as Pt, z3 as Ft } from "./peach-app.js";
import { CodeBlock as It } from "./peach-app.code-block-5D8eSV-F.js";
import { FolderField as Lt, FolderFieldLine as Rt, FolderRow as zt, MEDIA_SOURCES as Bt, MediaReadPolicy as Vt, MediaReadPolicyHelp as Ht, SourceSelect as Ut, isCloudSource as Wt, sourceMark as Gt, useFolderRows as Kt } from "./peach-app.folder-rows-BWBfTyUD.js";
import { ConnectionStatus as qt } from "./peach-app.connection-status-DI6kgn3i.js";
// node_modules/motion-dom/dist/es/utils/transform.mjs
function Jt(...e) {
	let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], a = e[2 + n], o = e[3 + n], s = $e(i, a, o);
	return t ? s(r) : s;
}
// node_modules/motion-dom/dist/es/animation/FollowAnimation.mjs
var Yt = /* @__PURE__ */ new Set(), Xt = ({ timestamp: e }) => {
	Yt.forEach((t) => t.tick(e));
}, Zt = class extends Ae {
	constructor(e) {
		super(), this.state = "idle", this.startTime = 0, this.currentTime = 0, this.started = !1, this.hasNextTarget = !1, this.nextTarget = 0, this.stop = () => {
			this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, this.options = e, this.factory = e.type, this.generator = this.factory(e);
		let { driver: t } = e;
		t && (this.driver = t((e) => this.tick(e))), this.startTime = this.now(), this.state = "running", this.driver ? this.driver.start() : (Yt.size || Qe.update(Xt, !0), Yt.add(this));
	}
	setTarget(e, t) {
		this.nextTarget = e, this.nextVelocity = t, this.hasNextTarget = !0;
	}
	retarget(e, t) {
		let { options: n, generator: r } = this;
		n.keyframes = e, n.velocity = t, this.startTime = this.now(), this.currentTime = 0, r.retarget ? r.retarget(e, t) : this.generator = this.factory(n);
	}
	tick(e) {
		let { options: t, hasNextTarget: n } = this, { delay: r = 0, onUpdate: i, onPlay: a } = t;
		this.started || (this.startTime = _t(this.startTime, e));
		let o = Math.round(e - this.startTime) - r, s = this.currentTime = Math.max(0, o), c = this.generator.next(s), l = o < 0 ? t.keyframes[0] : c.value;
		if (n) {
			this.hasNextTarget = !1;
			let { keyframes: e } = t;
			e[0] = l, e[1] = this.nextTarget, this.retarget(e, this.nextVelocity ?? this.getGeneratorVelocity());
		}
		(n || !this.started) && (this.started = !0, a?.()), this.state === "running" && (i?.(l), c.done && o >= 0 && !n && !this.hasNextTarget && this.state === "running" && (this.notifyFinished(), this.teardown(), this.state = "finished", t.onComplete?.()));
	}
	getGeneratorVelocity() {
		return Re(this.generator, this.currentTime, this.options.velocity);
	}
	now() {
		return this.driver ? this.driver.now() : Ct.now();
	}
	teardown() {
		this.state = "idle", this.driver ? this.driver.stop() : (Yt.delete(this), Yt.size || ze(Xt));
	}
};
// node_modules/motion-dom/dist/es/value/utils/follow.mjs
function Qt(e, t, n) {
	let r = e.get(), i = null, a, o = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0, s = (e) => a(o ? e + o : e), c = () => e.events.animationStart?.notify(), l = () => {
		i &&= (i.stop(), null), e.animation = void 0;
	};
	if (e.attach((t, r) => {
		a = r;
		let o = Le(t);
		if (i?.state === "running") {
			i.setTarget(o, n.velocity);
			return;
		}
		let u = Le(e.get()), d = i ? i.getGeneratorVelocity() : e.getVelocity();
		if (l(), u === o) return;
		let f = i = new Zt({
			keyframes: [u, o],
			velocity: d,
			restDelta: .001,
			restSpeed: .01,
			...n,
			onUpdate: s,
			onPlay: c
		});
		e.animation = f, f.then(() => {
			i === f && (i = null, e.animation = void 0, e.events.animationComplete?.notify());
		});
	}, l), et(t)) {
		let r = n.skipInitialAnimation === !0, i = (t) => {
			r ? (r = !1, e.jump($t(t, o), !1)) : e.set($t(t, o));
		}, a = t.on("change", i), s = t.get();
		Le(s) - Le(e.get()) && i(s);
		let c = e.on("destroy", a);
		return () => {
			a(), c(), l();
		};
	}
	return l;
}
function $t(e, t) {
	return t ? e + t : e;
}
// node_modules/motion-dom/dist/es/value/spring-value.mjs
function en(e, t, n) {
	return Qt(e, t, {
		...n,
		type: St
	});
}
// node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs
var B = /* @__PURE__ */ Ne(mt(), 1);
function tn(e, t, n) {
	(0, B.useInsertionEffect)(() => e.on(t, n), [
		e,
		t,
		n
	]);
}
// node_modules/framer-motion/dist/es/value/use-motion-value.mjs
function nn(e) {
	let t = Et(() => it(e)), { isStatic: n } = (0, B.useContext)(re);
	if (n) {
		let [, n] = (0, B.useState)(e);
		(0, B.useEffect)(() => t.on("change", n), []);
	}
	return t;
}
// node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function rn(e, t) {
	let n = nn(t()), r = () => n.set(t());
	return r(), Dt(() => {
		let t = () => Qe.preRender(r, !1, !0), n = e.map((e) => e.on("change", t));
		return r(), () => {
			n.forEach((e) => e()), ze(r);
		};
	}), n;
}
// node_modules/framer-motion/dist/es/value/use-computed.mjs
function an(e) {
	He.current = [], e();
	let t = rn(He.current, e);
	return He.current = void 0, t;
}
// node_modules/framer-motion/dist/es/value/use-follow-value.mjs
function on(e, t, n) {
	let { isStatic: r } = (0, B.useContext)(re), i = () => et(e) ? e.get() : e;
	if (r) return an(i);
	let a = nn(i());
	return (0, B.useInsertionEffect)(() => n(a, e, t), [a, JSON.stringify(t)]), a;
}
// node_modules/framer-motion/dist/es/value/use-spring.mjs
function sn(e, t = {}) {
	return on(e, t, en);
}
// node_modules/framer-motion/dist/es/value/use-transform.mjs
function cn(e, t, n, r) {
	if (typeof e == "function") return an(e);
	if (n !== void 0 && !Array.isArray(n) && typeof t != "function") return un(e, t, n, r);
	let i = typeof t == "function" ? t : Jt(t, n, r), a = Array.isArray(e) ? ln(e, i) : ln([e], ([e]) => i(e)), o = Array.isArray(e) ? void 0 : e.accelerate;
	if (o && !o.isTransformed && typeof t != "function" && Array.isArray(n) && r?.clamp !== !1 && !r?.mixer) {
		let e = r?.ease;
		a.accelerate = {
			...o,
			times: [
				0,
				...t,
				1
			],
			keyframes: [
				n[0],
				...n,
				n[n.length - 1]
			],
			isTransformed: !0,
			...e ? { ease: Array.isArray(e) ? [e[0], ...e] : e } : {}
		};
	}
	return a;
}
function ln(e, t) {
	let n = Et(() => []);
	return rn(e, () => {
		n.length = 0;
		let r = e.length;
		for (let t = 0; t < r; t++) n[t] = e[t].get();
		return t(n);
	});
}
function un(e, t, n, r) {
	let i = Et(() => Object.keys(n)), a = Et(() => ({}));
	for (let o of i) a[o] = cn(e, t, n[o], r);
	return a;
}
// src/react/settings/configuration-panel.ts
var dn = "flex flex-col gap-6";
function fn(e) {
	return e ? {
		className: e.active ? `${dn} ui-board-group-active` : dn,
		"data-board-group": String(e.index),
		id: e.id,
		role: "tabpanel",
		"aria-labelledby": e.labelledBy
	} : { className: dn };
}
// src/react/settings/userscript-probe.ts
function pn() {
	let e = (0, B.useRef)(null), [t, n] = (0, B.useState)(0), [r, i] = (0, B.useState)("checking");
	return (0, B.useEffect)(() => {
		let t = dt(), n = !1, r = e.current, a, o = () => {
			n = !0, clearInterval(u), i("missing");
		}, s = () => {
			n || (clearTimeout(a), a = setTimeout(o, 3e3), c());
		}, c = () => e.current?.contentWindow?.postMessage({
			type: "peach-userscript:probe",
			nonce: t
		}, window.location.origin), l = (r) => {
			!n && r.source === e.current?.contentWindow && r.origin === window.location.origin && r.data?.type === "peach-userscript:ready" && r.data.nonce === t && r.data.protocol === 1 && typeof r.data.version == "string" && /^\d{1,5}\.\d{1,5}\.\d{1,5}$/.test(r.data.version) && typeof r.data.paired == "boolean" && (n = !0, clearInterval(u), clearTimeout(a), i({
				version: r.data.version,
				paired: r.data.paired
			}));
		};
		window.addEventListener("message", l);
		let u = setInterval(c, 250);
		return a = setTimeout(o, 15e3), r?.addEventListener("load", s), r?.contentDocument?.readyState === "complete" && r.contentDocument.URL !== "about:blank" && s(), c(), () => {
			clearInterval(u), clearTimeout(a), r?.removeEventListener("load", s), window.removeEventListener("message", l);
		};
	}, [t]), {
		frame: e,
		attempt: t,
		status: r,
		retry: () => {
			r !== "checking" && (i("checking"), n((e) => e + 1));
		}
	};
}
// src/react/settings/userscript-status.tsx
var V = pt();
function mn(e, t) {
	let n = e.split(".").map(Number), r = t.split(".").map(Number);
	for (let e = 0; e < 3; e++) if (n[e] !== r[e]) return n[e] > r[e];
	return !0;
}
function hn({ enabled: e, release: t }) {
	let { frame: n, attempt: r, status: i, retry: a } = pn(), o = typeof i == "object", s = o && !mn(i.version, t.minimum_version), c = o && !mn(i.version, t.version), u = i === "checking" ? "progress" : i === "missing" ? "neutral" : s || c || !i.paired ? "warning" : "success", d = i === "checking" ? "检测中" : i === "missing" ? "未检测到" : s ? "需更新" : c ? "可更新" : i.paired ? "已连接" : "待配对", f = i === "checking" ? "checking" : i === "missing" ? "missing" : s ? "required" : c ? "available" : i.paired ? e ? "enabled" : "disabled" : "unpaired";
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)("iframe", {
		ref: n,
		title: "Pear 用户脚本检测",
		hidden: !0,
		src: "/integrations/peach-userscript-bridge"
	}, r), /* @__PURE__ */ (0, V.jsxs)("div", {
		"aria-live": "polite",
		"data-userscript-status": "",
		className: Be({
			variant: "raised",
			bordered: "line",
			className: "flex flex-col gap-3"
		}),
		children: [
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, V.jsx)("span", {
					className: "text-body-medium text-text-primary",
					children: "Pear 用户脚本"
				}), /* @__PURE__ */ (0, V.jsx)(qt, {
					tone: u,
					children: /* @__PURE__ */ (0, V.jsx)("span", {
						"data-copy-key": `userscript.${f}.status`,
						children: d
					})
				})]
			}),
			o ? /* @__PURE__ */ (0, V.jsxs)("p", {
				"data-copy-key": "userscript.installed.version",
				className: "text-body-regular text-text-secondary",
				children: ["用户脚本 v", i.version]
			}) : null,
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, V.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: "浏览器添加"
				}), /* @__PURE__ */ (0, V.jsx)(Ee, {
					tone: e ? "success" : "neutral",
					children: /* @__PURE__ */ (0, V.jsx)("span", {
						"data-copy-key": `userscript.adding.${e ? "enabled" : "disabled"}`,
						children: e ? "已启用" : "未启用"
					})
				})]
			}),
			/* @__PURE__ */ (0, V.jsx)("p", {
				"data-copy-key": `userscript.${f}.message`,
				className: "text-caption-1-regular text-text-secondary",
				children: i === "checking" ? "正在检测当前浏览器的用户脚本。" : i === "missing" ? "确认脚本已启用并更新至最新版。Chrome 还需在 Tampermonkey 扩展详情中开启「允许用户脚本」或开发者模式，并允许访问当前 Pear 站点；刷新页面后重新检测。" : s ? `请更新至 v${t.minimum_version} 或更高版本。` : c ? `用户脚本 v${t.version} 可更新。` : i.paired ? e ? "可在支持的站点直接加入 Pear 馆藏。" : "启用浏览器添加后，可在支持的站点直接加入 Pear 馆藏。" : "生成令牌后复制配对信息，在用户脚本设置中粘贴并保存。"
			}),
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					i === "missing" || s || c ? /* @__PURE__ */ (0, V.jsx)(S, {
						href: t.install_url,
						children: /* @__PURE__ */ (0, V.jsx)("span", {
							"data-copy-key": `userscript.${i === "missing" ? "install" : "update"}.action`,
							children: s || c ? "更新用户脚本" : "安装 Pear 用户脚本"
						})
					}) : null,
					i === "missing" ? /* @__PURE__ */ (0, V.jsx)(S, {
						href: "https://www.tampermonkey.net/faq.php#Q209",
						children: "Tampermonkey 权限设置说明"
					}) : null,
					/* @__PURE__ */ (0, V.jsx)(l, {
						variant: "secondary",
						type: "button",
						...R(i === "checking"),
						onClick: a,
						children: "重新检测"
					})
				]
			})
		]
	})] });
}
// src/react/settings/jav-browser-settings.tsx
var gn = "/api/configuration/jav-browser";
function _n({ receipt: e, refreshKey: t }) {
	let n = At({
		queryKey: ["jav-browser-settings", t],
		queryFn: ({ signal: e }) => Ie(gn, e),
		refetchOnMount: "always",
		refetchOnWindowFocus: "always"
	});
	return n.error && !n.data ? /* @__PURE__ */ (0, V.jsx)(b, { children: qe(n.error) }) : n.isFetching && !n.data ? /* @__PURE__ */ (0, V.jsx)(ge, {
		label: "正在读取浏览器添加设置",
		html: tt
	}) : n.data ? /* @__PURE__ */ (0, V.jsx)(vn, {
		initial: n.data,
		receipt: e
	}) : null;
}
function vn({ initial: e, receipt: t }) {
	let [n, r] = (0, B.useState)(e), [i, a] = (0, B.useState)(e.provider), [o, s] = (0, B.useState)(""), c = wt();
	(0, B.useEffect)(() => {
		ft("javBrowser", {
			enabled: e.enabled,
			ready: e.providers.some((t) => t.key === e.provider && t.configured && t.target)
		}), r(e), a((t) => e.providers.some((e) => e.key === t) ? t : e.provider), e.enabled || s("");
	}, [e]);
	let u = (e) => {
		c.run(e, (t) => L(gn, {
			action: e,
			provider: i
		}, "POST", t), (n) => {
			let { token: i = "", ...o } = n;
			r(o), a(o.provider), s(i), t(e === "disable" ? "已关闭浏览器添加" : "已生成专用令牌");
		});
	}, d = n.providers.some((e) => e.key === i && e.configured && e.target);
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		guide: "browser",
		title: "浏览器添加 JAV",
		children: [/* @__PURE__ */ (0, V.jsxs)(I, { children: [/* @__PURE__ */ (0, V.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, V.jsx)(hn, {
					enabled: n.enabled,
					release: n.userscript
				}),
				/* @__PURE__ */ (0, V.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, V.jsx)(T, { children: "浏览器添加的下载渠道" }), /* @__PURE__ */ (0, V.jsx)(ye, {
						"aria-label": "浏览器添加的下载渠道",
						selectedKey: i || null,
						placeholder: "暂无可用渠道",
						onSelectionChange: (e) => {
							e !== null && a(String(e));
						},
						isDisabled: !n.providers.length || !!c.busy,
						children: n.providers.map((e) => /* @__PURE__ */ (0, V.jsx)(be, {
							id: e.key,
							textValue: e.label,
							children: /* @__PURE__ */ (0, V.jsx)(we, {
								source: e.key,
								label: e.label
							})
						}, e.key))
					})]
				}),
				d ? null : /* @__PURE__ */ (0, V.jsx)(D, { children: "请在媒体库中添加支持云下载的网盘，并配置账号与目标目录。" }),
				n.problems?.map((e) => /* @__PURE__ */ (0, V.jsx)(D, { children: e }, e)),
				n.enabled && n.active_provider && !n.providers.some((e) => e.key === n.active_provider) ? /* @__PURE__ */ (0, V.jsx)(D, { children: "已启用的下载渠道不可用，请选择渠道并更新令牌。" }) : null,
				/* @__PURE__ */ (0, V.jsx)(O, {
					label: "Pear 地址",
					value: window.location.origin,
					isReadOnly: !0,
					autoComplete: "off"
				}),
				o ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
					/* @__PURE__ */ (0, V.jsx)(O, {
						label: "浏览器添加专用令牌",
						type: "password",
						value: o,
						isReadOnly: !0,
						autoComplete: "new-password"
					}),
					/* @__PURE__ */ (0, V.jsx)("div", { children: /* @__PURE__ */ (0, V.jsx)(l, {
						variant: "secondary",
						type: "button",
						onClick: () => {
							c.run("copy", async () => navigator.clipboard.writeText(JSON.stringify({
								peach_pairing: 1,
								base: window.location.origin,
								token: o
							})), () => t("已复制配对信息"));
						},
						...R(c.busy === "copy"),
						children: "复制配对信息"
					}) }),
					/* @__PURE__ */ (0, V.jsx)(D, { children: "在用户脚本设置的「Pear 地址」中粘贴配对信息，即可填好地址与令牌。" })
				] }) : null
			]
		}), c.error ? /* @__PURE__ */ (0, V.jsx)(b, { children: c.error }) : null] }), /* @__PURE__ */ (0, V.jsxs)(E, { children: [n.enabled ? /* @__PURE__ */ (0, V.jsx)(l, {
			variant: "secondary",
			type: "button",
			disabled: !!c.busy,
			onClick: () => u("disable"),
			children: "关闭浏览器添加"
		}) : null, /* @__PURE__ */ (0, V.jsx)(l, {
			type: "button",
			disabled: !n.available || !d || !!c.busy,
			onClick: () => u(n.enabled ? "rotate" : "enable"),
			...R(c.busy === "enable" || c.busy === "rotate"),
			children: n.enabled ? "更新渠道与令牌" : "启用并生成令牌"
		})] })]
	});
}
// src/react/settings/download-settings.tsx
var yn = "/api/configuration/downloads", bn = "/api/configuration/downloads/check", xn = "/api/configuration/downloads/folder", Sn = "/api/configuration/downloads/pikpak/login", Cn = "/api/configuration/downloads/pikpak/logout", wn = "/api/configuration/downloads/pikpak/browser-login", Tn = 2e3, En = lt("pikpak");
function Dn({ initial: e, receipt: t, panel: n, issues: r }) {
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		...fn(n),
		children: [r, e ? /* @__PURE__ */ (0, V.jsx)(On, {
			initial: e,
			receipt: t
		}) : null]
	});
}
function On({ initial: e, receipt: t }) {
	let [n, r] = (0, B.useState)(e), [i, a] = (0, B.useState)("");
	(0, B.useEffect)(() => {
		r((t) => ({
			...t,
			media_sources: e.media_sources,
			pikpak_roots: e.pikpak_roots
		}));
	}, [e.media_sources, e.pikpak_roots]);
	let o = n.media_sources ?? [], s = o.includes("pikpak"), c = o.some((e) => d.includes(e)), l = s && (n.pikpak.logged_in || !!i.trim());
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
		c ? /* @__PURE__ */ (0, V.jsx)(kn, {
			state: n,
			settle: r,
			receipt: t,
			pikpakAccount: l
		}) : null,
		s ? /* @__PURE__ */ (0, V.jsx)(Mn, {
			state: n,
			settle: r,
			receipt: t,
			username: i,
			setUsername: a
		}) : null,
		/* @__PURE__ */ (0, V.jsx)(_n, {
			receipt: t,
			refreshKey: JSON.stringify([
				n.media_sources,
				n.config,
				n.token_set,
				n.pikpak.logged_in
			])
		})
	] });
}
function kn({ state: e, settle: t, receipt: n, pikpakAccount: r }) {
	let [i, a] = (0, B.useState)(e.config), [o, s] = (0, B.useState)(""), [c, u] = (0, B.useState)(String(e.config.wait_hours)), [d, f] = (0, B.useState)(null), [p, m] = (0, B.useState)(""), [h, g] = (0, B.useState)(An), [_, v] = (0, B.useState)(""), [y, x] = (0, B.useState)(!1), S = wt(), C = e.media_sources ?? [], w = C.includes("115"), k = C.includes("pikpak"), A = (e) => i.targets[e] ?? "", j = (e, t) => a({
		...i,
		targets: {
			...i.targets,
			[e]: t
		}
	}), M = w && !(!h.target || h.target.exists || A("115") !== h.target.path), ee = (e, t, n = "") => {
		let r = t.target ? e.suggested_target : null, i = !!(r && n && r.path === n), o = t.root ? e.suggested_pikpak_root : "";
		a((n) => ({
			...n,
			clouddrive_address: t.address && e.address ? e.address : n.clouddrive_address,
			targets: r && !i ? {
				...n.targets,
				115: r.path
			} : n.targets,
			pikpak_root: o || n.pikpak_root
		})), f(e), m(t.address ? e.address : ""), g({
			target: r,
			root: o,
			saved: i
		}), x(!1), v("");
	};
	return (0, B.useEffect)(() => {
		if (!e.available || !e.config.clouddrive_address || !e.token_set) return;
		let t = {
			address: !1,
			target: !e.config.targets[115],
			root: !e.config.pikpak_root
		};
		S.run("auto", (e) => Ie(bn, e), (e) => ee(e, t), (e) => v(qe(e)));
	}, []), /* @__PURE__ */ (0, V.jsxs)(F, {
		guide: "download",
		title: "云下载",
		onSubmit: (e) => {
			if (e.preventDefault(), M) {
				x(!0);
				return;
			}
			let l = !A("115").trim(), d = {
				...i,
				wait_hours: c,
				token: o,
				pikpak_account: r
			};
			S.run("save", (e) => L(yn, d, "POST", e), (e) => {
				let { report: r, ...i } = e;
				t(i), a(i.config), u(String(i.config.wait_hours)), s(""), r ? ee(r, {
					address: !i.config.clouddrive_address,
					target: l,
					root: !i.config.pikpak_root
				}, i.config.targets[115] ?? "") : (f(null), m(""), g(An), x(!1), v("")), n("已保存配置");
			}, (e) => v(qe(e)));
		},
		children: [
			e.problems?.length ? /* @__PURE__ */ (0, V.jsx)(I, { children: /* @__PURE__ */ (0, V.jsx)(P, {
				tone: "error",
				title: "云下载配置需要检查",
				children: e.problems.join("\n")
			}) }) : null,
			/* @__PURE__ */ (0, V.jsxs)(I, { children: [
				/* @__PURE__ */ (0, V.jsx)(O, {
					label: "CloudDrive2 地址",
					placeholder: "留空自动查找",
					autoComplete: "off",
					maxLength: 200,
					value: i.clouddrive_address,
					isDisabled: !e.available,
					onChange: (e) => a({
						...i,
						clouddrive_address: e
					})
				}),
				/* @__PURE__ */ (0, V.jsx)(O, {
					label: "CloudDrive2 API 令牌",
					type: "password",
					autoComplete: "off",
					maxLength: 400,
					placeholder: e.token_set ? "已保存，留空不改" : "在 CloudDrive2「设置 → API 令牌」中生成",
					hint: "需要离线任务权限。",
					value: o,
					isDisabled: !e.available,
					onChange: s
				}),
				w ? /* @__PURE__ */ (0, V.jsx)(O, {
					label: /* @__PURE__ */ (0, V.jsx)(we, {
						source: "115",
						label: "115 目标目录"
					}),
					placeholder: "留空时根据媒体库目录自动填写",
					autoComplete: "off",
					maxLength: 300,
					validationBehavior: "aria",
					isInvalid: M,
					hint: M ? y ? "先新建这个目录，或填写已有目录。" : "这个目录不存在。" : "应位于自动入库的云端路径前缀内。",
					value: A("115"),
					isDisabled: !e.available,
					onChange: (e) => j("115", e)
				}) : null,
				k ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(O, {
					label: /* @__PURE__ */ (0, V.jsx)(we, {
						source: "pikpak",
						label: "PikPak 目标目录"
					}),
					placeholder: "以 / 开头的网盘路径",
					autoComplete: "off",
					maxLength: 300,
					hint: "目录要已经存在。",
					value: A("pikpak"),
					isDisabled: !e.available,
					onChange: (e) => j("pikpak", e)
				}), /* @__PURE__ */ (0, V.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, V.jsx)(T, { children: /* @__PURE__ */ (0, V.jsx)(we, {
						source: "pikpak",
						label: "PikPak 根目录对应的媒体目录"
					}) }), e.pikpak_roots.length ? /* @__PURE__ */ (0, V.jsx)(ye, {
						"aria-label": "PikPak 根目录对应的媒体目录",
						selectedKey: i.pikpak_root || null,
						isDisabled: !e.available,
						placeholder: "检查时根据媒体库目录选择",
						onSelectionChange: (e) => a({
							...i,
							pikpak_root: e === null ? "" : String(e)
						}),
						children: e.pikpak_roots.map((e) => /* @__PURE__ */ (0, V.jsx)(be, {
							id: e,
							children: e
						}, e))
					}) : /* @__PURE__ */ (0, V.jsx)(D, { children: "先在「媒体库与入库」添加 PikPak 挂载文件夹。" })]
				})] }) : null,
				/* @__PURE__ */ (0, V.jsx)(O, {
					label: "等待上限（小时）",
					type: "number",
					inputMode: "numeric",
					autoComplete: "off",
					hint: `超时标为停滞；可填 1–${e.max_wait_hours} 小时。`,
					value: c,
					isDisabled: !e.available,
					onChange: u
				})
			] }),
			S.busy === "auto" ? /* @__PURE__ */ (0, V.jsx)(I, {
				divided: !0,
				children: /* @__PURE__ */ (0, V.jsx)(N, { label: "正在检查 CloudDrive2" })
			}) : null,
			d ? /* @__PURE__ */ (0, V.jsx)(jn, {
				report: d,
				detected: p,
				suggested: h,
				create: e.available ? (e) => {
					let t = {
						clouddrive_address: i.clouddrive_address,
						token: o,
						path: e,
						pikpak_root: i.pikpak_root,
						pikpak_account: r
					};
					S.run("folder", (e) => L(xn, t, "POST", e), (t) => {
						f(t), g((t) => ({
							...t,
							target: {
								path: e,
								exists: !0
							}
						})), x(!1), v(""), n("已新建目录");
					}, (e) => v(qe(e)));
				} : void 0,
				creating: S.busy === "folder"
			}) : null,
			_ || S.error ? /* @__PURE__ */ (0, V.jsx)(I, {
				divided: !0,
				children: /* @__PURE__ */ (0, V.jsx)(b, { children: _ || S.error })
			}) : null,
			/* @__PURE__ */ (0, V.jsxs)(E, {
				status: e.available ? void 0 : "云下载只在允许修改数据库的设备上可用。",
				children: [/* @__PURE__ */ (0, V.jsx)(l, {
					variant: "secondary",
					onClick: () => {
						let e = {
							address: !i.clouddrive_address.trim(),
							target: !A("115").trim(),
							root: !i.pikpak_root
						}, t = {
							clouddrive_address: i.clouddrive_address,
							token: o,
							target: A("115"),
							pikpak_root: i.pikpak_root,
							pikpak_account: r
						};
						S.run("check", (e) => L(bn, t, "POST", e), (t) => ee(t, e), (e) => v(qe(e)));
					},
					disabled: !e.available,
					...R(S.busy === "check"),
					children: "检查连接"
				}), /* @__PURE__ */ (0, V.jsx)(l, {
					type: "submit",
					disabled: !e.available,
					...R(S.busy === "save"),
					children: "保存配置"
				})]
			})
		]
	});
}
var An = {
	target: null,
	root: "",
	saved: !1
};
function jn({ report: e, detected: t, suggested: n, create: r, creating: i }) {
	let a = n.target, o = !!(t || a || n.root || e.permissions.length || e.folder || e.quota);
	return !o && !e.problems.length ? null : /* @__PURE__ */ (0, V.jsxs)(I, {
		divided: !0,
		children: [o ? /* @__PURE__ */ (0, V.jsxs)(w, { children: [
			t ? /* @__PURE__ */ (0, V.jsx)(C, {
				term: "CloudDrive2 地址",
				children: `探测到 ${t}，保存配置后生效`
			}) : null,
			a?.exists ? /* @__PURE__ */ (0, V.jsx)(C, {
				term: /* @__PURE__ */ (0, V.jsx)(we, {
					source: "115",
					label: "115 目标目录"
				}),
				children: n.saved ? `已根据媒体库目录填入 ${a.path}` : `根据媒体库目录填入 ${a.path}，保存配置后生效`
			}) : null,
			a && !a.exists ? /* @__PURE__ */ (0, V.jsxs)(C, {
				term: /* @__PURE__ */ (0, V.jsx)(we, {
					source: "115",
					label: "115 目标目录"
				}),
				children: [`${a.path} 不存在`, r ? /* @__PURE__ */ (0, V.jsx)(l, {
					variant: "secondary",
					size: "small",
					onClick: () => r(a.path),
					...R(i),
					children: "新建这个目录"
				}) : null]
			}) : null,
			n.root ? /* @__PURE__ */ (0, V.jsx)(C, {
				term: /* @__PURE__ */ (0, V.jsx)(we, {
					source: "pikpak",
					label: "PikPak 根目录"
				}),
				children: `根据媒体库目录填入 ${n.root}，保存配置后生效`
			}) : null,
			e.permissions.length ? /* @__PURE__ */ (0, V.jsx)(C, {
				term: "离线权限",
				children: e.missing.length ? e.missing.map((e) => /* @__PURE__ */ (0, V.jsx)(g, {
					variant: "caption",
					color: "yellow",
					children: `缺 ${e}`
				}, e)) : /* @__PURE__ */ (0, V.jsx)(g, {
					variant: "caption",
					color: "lime",
					children: "齐全"
				})
			}) : null,
			e.folder ? /* @__PURE__ */ (0, V.jsx)(C, {
				term: "目标目录",
				children: e.folder.can_offline ? `${e.folder.path} 可以离线下载` : `${e.folder.path} 不支持离线下载`
			}) : null,
			e.quota ? /* @__PURE__ */ (0, V.jsx)(C, {
				term: /* @__PURE__ */ (0, V.jsx)(we, {
					source: "115",
					label: "115 离线配额"
				}),
				children: `本月还剩 ${e.quota.left} 条，共 ${e.quota.total} 条`
			}) : null
		] }) : null, e.problems.map((e) => /* @__PURE__ */ (0, V.jsx)(b, { children: e }, e))]
	});
}
function Mn({ state: e, settle: t, receipt: n, username: r, setUsername: i }) {
	let [a, o] = (0, B.useState)(""), [s, c] = (0, B.useState)(!1), [u, d] = (0, B.useState)(""), [f, p] = (0, B.useState)(""), [m, g] = (0, B.useState)(""), _ = wt(), v = e.pikpak, y = e.pikpak_browser, x = y.state === "waiting";
	(0, B.useEffect)(() => {
		if (!x) return;
		let e = new AbortController(), r, i = async () => {
			try {
				let r = await Ie(wn, e.signal);
				if (e.signal.aborted || (t(r), r.pikpak_browser.state === "done" ? n("已登录 PikPak") : r.pikpak_browser.state !== "waiting" && g(r.pikpak_browser.message), r.pikpak_browser.state !== "waiting")) return;
			} catch (t) {
				if (e.signal.aborted) return;
				p(qe(t));
			}
			r = setTimeout(i, Tn);
		};
		return r = setTimeout(i, Tn), () => {
			e.abort(), clearTimeout(r);
		};
	}, [x]);
	let T = () => {
		g(""), _.run("browser", (e) => L(wn, {}, "POST", e), (e) => {
			t(e), p("");
		}, (e) => p(qe(e)));
	}, k = () => {
		_.run("cancel", (e) => L(`${wn}/cancel`, {}, "POST", e), (e) => {
			t(e), p(""), g(e.pikpak_browser.message);
		}, (e) => p(qe(e)));
	}, A = (e) => {
		if (e.preventDefault(), v.logged_in) return;
		let i = {
			username: r,
			password: a,
			remember: s
		};
		_.run("login", (e) => L(Sn, i, "POST", e), (e) => {
			t(e.settings), p(""), e.ok ? (d(""), o(""), n("已登录 PikPak")) : d(e.captcha_url ?? "");
		}, (e) => p(qe(e)));
	}, j = () => {
		_.run("logout", (e) => L(Cn, {}, "POST", e), (e) => {
			t(e), p(""), n("已登出 PikPak");
		}, (e) => p(qe(e)));
	}, M = /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
		/* @__PURE__ */ (0, V.jsx)(O, {
			label: "账号",
			placeholder: "邮箱或手机号",
			autoComplete: "username",
			maxLength: 200,
			value: r,
			isDisabled: !e.available,
			onChange: i
		}),
		/* @__PURE__ */ (0, V.jsx)(O, {
			label: "密码",
			type: "password",
			autoComplete: "current-password",
			maxLength: 200,
			value: a,
			isDisabled: !e.available,
			onChange: o
		}),
		/* @__PURE__ */ (0, V.jsx)(h, {
			isSelected: s,
			isDisabled: !e.available,
			onChange: c,
			children: "保存密码，登录过期时自动重新登录"
		}),
		u ? /* @__PURE__ */ (0, V.jsx)(P, {
			tone: "warning",
			title: "需要人机验证",
			extra: /* @__PURE__ */ (0, V.jsx)("div", {
				className: "pt-2",
				children: /* @__PURE__ */ (0, V.jsx)(S, {
					href: u,
					children: "打开 PikPak 验证页"
				})
			}),
			children: "在浏览器里完成验证后，回到这里再点一次「登录」。"
		}) : null
	] }), ee = /* @__PURE__ */ (0, V.jsx)(l, {
		type: "submit",
		variant: "primary",
		disabled: !e.available || x,
		...R(_.busy === "login"),
		children: "登录"
	}), te = y.state === "timeout" || y.state === "failed";
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		guide: "pikpak",
		title: "PikPak 账号",
		icon: /* @__PURE__ */ (0, V.jsx)(En, {}),
		onSubmit: A,
		aside: /* @__PURE__ */ (0, V.jsx)(Ee, {
			tone: v.logged_in ? "success" : x ? "progress" : te ? "error" : "neutral",
			children: v.logged_in ? "已登录" : x ? "等待登录" : te ? "登录未完成" : "待登录"
		}),
		children: [
			v.logged_in ? /* @__PURE__ */ (0, V.jsxs)(w, { children: [/* @__PURE__ */ (0, V.jsx)(C, {
				term: "账号",
				children: v.username || "已登录"
			}), v.method === "browser" ? /* @__PURE__ */ (0, V.jsx)(C, {
				term: "登录方式",
				children: "浏览器登录，由 Pear 续期"
			}) : /* @__PURE__ */ (0, V.jsx)(C, {
				term: "密码",
				children: v.remember ? "已保存，登录过期时自动重新登录" : "未保存，登录过期后需要回到这里重新登录"
			})] }) : /* @__PURE__ */ (0, V.jsxs)(I, { children: [m ? te ? /* @__PURE__ */ (0, V.jsx)(b, { children: m }) : /* @__PURE__ */ (0, V.jsx)(D, {
				role: "status",
				children: m
			}) : null, M] }),
			f || _.error ? /* @__PURE__ */ (0, V.jsx)(I, {
				divided: !0,
				children: /* @__PURE__ */ (0, V.jsx)(b, { children: f || _.error })
			}) : null,
			/* @__PURE__ */ (0, V.jsx)(E, {
				status: !v.logged_in && x ? /* @__PURE__ */ (0, V.jsx)(N, { label: y.message || "等你在浏览器窗口里登录 PikPak" }) : null,
				children: v.logged_in ? /* @__PURE__ */ (0, V.jsx)(l, {
					variant: "secondary",
					onClick: j,
					disabled: !e.available,
					...R(_.busy === "logout"),
					children: "登出"
				}) : /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [y.available ? x ? /* @__PURE__ */ (0, V.jsx)(l, {
					variant: "secondary",
					type: "button",
					onClick: k,
					...R(_.busy === "cancel"),
					children: "取消"
				}) : /* @__PURE__ */ (0, V.jsx)(l, {
					variant: "secondary",
					type: "button",
					onClick: T,
					disabled: !e.available,
					...R(_.busy === "browser"),
					children: "用浏览器登录"
				}) : null, ee] })
			})
		]
	});
}
// src/react/settings/ledger-backup-settings.tsx
var Nn = "/api/configuration/ledger-backups", Pn = 1500, Fn = (e) => (/* @__PURE__ */ new Date(e.modified_at * 1e3)).toLocaleString();
function In(e) {
	return [e.source === "manual" ? "手动" : `自动 · ${e.purpose}`, Ze(e.bytes)].join(" · ");
}
function Ln({ job: e, label: t }) {
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		"aria-live": "polite",
		className: "flex flex-col gap-2",
		children: [
			e.total ? /* @__PURE__ */ (0, V.jsx)(de, {
				label: t,
				value: e.done || 0,
				max: e.total
			}) : /* @__PURE__ */ (0, V.jsx)(N, { label: t }),
			/* @__PURE__ */ (0, V.jsx)(D, { children: e.stage || t }),
			/* @__PURE__ */ (0, V.jsx)(Oe, {})
		]
	});
}
function Rn({ receipt: e }) {
	let [t, n] = (0, B.useState)(null), [r, i] = (0, B.useState)(""), a = wt(), o = t?.backup.status === "running", s = t?.restore.status === "running", c = o || s, u = (0, B.useRef)({
		backup: !1,
		restore: !1
	});
	if ((0, B.useEffect)(() => {
		let e = new AbortController();
		return Ie(Nn, e.signal).then(n, (t) => {
			e.signal.aborted || i(String(t?.message || t));
		}), () => e.abort();
	}, []), (0, B.useEffect)(() => {
		if (!c) return;
		let e = new AbortController(), t = setTimeout(() => {
			Ie(Nn, e.signal).then(n, () => {
				e.signal.aborted || n((e) => e && { ...e });
			});
		}, Pn);
		return () => {
			e.abort(), clearTimeout(t);
		};
	}, [t]), (0, B.useEffect)(() => {
		if (t) for (let n of ["backup", "restore"]) {
			let r = t[n];
			r.status === "running" ? u.current[n] = !0 : u.current[n] && (u.current[n] = !1, r.status === "complete" && e(n === "backup" ? `已备份账本：${r.name}` : `已从备份恢复账本，恢复前的账本另存为 ${r.saved}。刷新页面查看恢复后的资料`));
		}
	}, [t]), !t) return /* @__PURE__ */ (0, V.jsx)(F, {
		id: "ledgerBackups",
		guide: "ledger-backups",
		title: "账本备份",
		children: /* @__PURE__ */ (0, V.jsx)(I, { children: r ? /* @__PURE__ */ (0, V.jsx)(b, { children: r }) : /* @__PURE__ */ (0, V.jsx)(N, { label: "正在读取备份列表" }) })
	});
	let d = () => void a.run("backup", (e) => L(`${Nn}/backup`, {}, "POST", e), n), f = (e) => void Ue({
		title: "从备份恢复账本",
		danger: !0,
		body: `将用 ${Fn(e)} 的备份（${In(e)}）替换当前账本，此后的资料、观看记录与复核结论回到备份时的状态。替换前先把当前账本另存为一份备份；恢复期间不能启动新任务。`,
		confirmLabel: "替换当前账本",
		onConfirm: async () => {
			u.current.restore = !0, n(await L(`${Nn}/restore`, {
				id: e.id,
				confirm: !0
			}));
		}
	}), p = [t.backup, t.restore].find((e) => e.status === "failed"), m = t.last_restore, h = o ? "正在备份…" : s ? "正在恢复…" : t.backups.length ? `共 ${t.backups.length} 份可恢复的备份` : "还没有备份";
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		id: "ledgerBackups",
		guide: "ledger-backups",
		title: "账本备份",
		children: [
			/* @__PURE__ */ (0, V.jsxs)(I, { children: [
				/* @__PURE__ */ (0, V.jsx)(D, { children: "账本保存全部资料、观看记录与复核结论。手动备份与写入前的自动备份放在一起，保留最近 5 份和 24 小时内的备份。" }),
				t.writer ? null : /* @__PURE__ */ (0, V.jsxs)(D, { children: ["这台电脑不是账本写入端，只能在写入端恢复：", t.writer_reason] }),
				o ? /* @__PURE__ */ (0, V.jsx)(Ln, {
					job: t.backup,
					label: "备份进度"
				}) : null,
				s ? /* @__PURE__ */ (0, V.jsx)(Ln, {
					job: t.restore,
					label: "恢复进度"
				}) : null,
				p ? /* @__PURE__ */ (0, V.jsx)(b, { children: p.error || "任务没有完成" }) : null,
				m ? m.outcome === "kept" || m.outcome === "completed" ? /* @__PURE__ */ (0, V.jsx)(D, { children: m.message }) : /* @__PURE__ */ (0, V.jsx)(b, { children: m.message }) : null,
				a.error ? /* @__PURE__ */ (0, V.jsx)(b, { children: a.error }) : null
			] }),
			t.backups.length ? /* @__PURE__ */ (0, V.jsx)("div", {
				className: "border-t border-separator-border",
				"data-ledger-backups": "",
				children: /* @__PURE__ */ (0, V.jsx)(fe, { children: t.backups.map((e) => /* @__PURE__ */ (0, V.jsx)(Se, {
					label: Fn(e),
					description: In(e),
					children: /* @__PURE__ */ (0, V.jsx)(l, {
						variant: "secondary",
						disabled: !t.writer || c,
						onClick: () => f(e),
						children: "恢复"
					})
				}, e.id)) })
			}) : null,
			/* @__PURE__ */ (0, V.jsx)(E, {
				status: /* @__PURE__ */ (0, V.jsx)("p", { children: h }),
				children: /* @__PURE__ */ (0, V.jsx)(l, {
					disabled: c,
					onClick: d,
					...R(a.busy === "backup" || o),
					children: "立即备份"
				})
			})
		]
	});
}
// src/react/settings/library-sharing-settings.tsx
function zn({ initial: e, receipt: t }) {
	let [n, r] = (0, B.useState)(e), [i, a] = (0, B.useState)(null), [o, s] = (0, B.useState)(!1), [c, u] = (0, B.useState)(!1), d = (0, B.useMemo)(() => i ? JSON.stringify(i.data, null, 2) : "", [i]), f = wt(), p = n.participation, m = {
		"not-attempted": "尚未发送",
		queued: "等待发送",
		accepted: "已发送",
		failed: "发送失败",
		unknown: "结果未取得",
		blocked: "已拦截"
	}, g = {
		queued: "progress",
		accepted: "success",
		failed: "error",
		unknown: "warning",
		blocked: "warning"
	}, _ = (e) => void f.run("save", (t) => L("/api/configuration/library-sharing", {
		enabled: e,
		schema: n.schema,
		consent: c,
		preview_token: i?.token
	}, "POST", t), (e) => {
		r(e), a(null), u(!1), s(!1), t("已保存馆藏与口味上传选项");
	}), y = () => {
		let e = URL.createObjectURL(new Blob([d], { type: "application/json" })), t = document.createElement("a");
		t.href = e, t.download = "peach-library-taste-preview.json", document.body.append(t);
		try {
			t.click();
		} finally {
			t.remove(), setTimeout(() => URL.revokeObjectURL(e), 1e3);
		}
	};
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
		/* @__PURE__ */ (0, V.jsx)(fe, { children: /* @__PURE__ */ (0, V.jsx)(Se, {
			label: "上传馆藏与口味明细",
			description: "每周分享馆藏、偏好与容量统计，需先预览并同意。",
			children: /* @__PURE__ */ (0, V.jsx)(De, {
				"aria-label": "上传馆藏与口味明细",
				isSelected: n.enabled,
				onChange: (e) => e ? s(!0) : _(!1),
				...R(f.busy === "save")
			})
		}) }),
		n.available ? null : /* @__PURE__ */ (0, V.jsx)(I, {
			divided: !0,
			children: /* @__PURE__ */ (0, V.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, V.jsx)(Ee, { children: "上传服务未配置" })
			})
		}),
		n.consent_state === "needs-consent" ? /* @__PURE__ */ (0, V.jsxs)(I, {
			divided: !0,
			children: [/* @__PURE__ */ (0, V.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, V.jsx)(Ee, {
					tone: "warning",
					children: "待重新同意"
				})
			}), /* @__PURE__ */ (0, V.jsx)(D, { children: "字段已更新，需重新预览并同意。" })]
		}) : null,
		/* @__PURE__ */ (0, V.jsx)(I, {
			divided: !0,
			children: /* @__PURE__ */ (0, V.jsxs)(v, {
				summary: "馆藏统计字段与发送规则",
				children: [/* @__PURE__ */ (0, V.jsx)("ul", {
					className: "list-disc space-y-2 pl-5",
					children: n.fields.map((e) => /* @__PURE__ */ (0, V.jsx)("li", { children: /* @__PURE__ */ (0, V.jsx)(D, { children: e }) }, e))
				}), /* @__PURE__ */ (0, V.jsx)(D, { children: n.notice })]
			})
		}),
		p ? /* @__PURE__ */ (0, V.jsxs)(I, {
			divided: !0,
			children: [/* @__PURE__ */ (0, V.jsx)(w, { children: /* @__PURE__ */ (0, V.jsx)(C, {
				term: "参与状态",
				children: /* @__PURE__ */ (0, V.jsx)(Ee, {
					"aria-label": "参与状态",
					tone: p.pending_state ? "progress" : g[p.status] || "neutral",
					children: p.pending_state ? `待发送${p.pending_state === "disabled" ? "关闭" : "开启"}状态` : m[p.status] || "结果未取得"
				})
			}) }), n.last_sent_at ? /* @__PURE__ */ (0, V.jsxs)(D, { children: ["上次发送：", new Date(n.last_sent_at).toLocaleDateString()] }) : null]
		}) : null,
		n.enabled && n.last_attempt?.status === "failed" ? /* @__PURE__ */ (0, V.jsxs)(I, {
			divided: !0,
			children: [/* @__PURE__ */ (0, V.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, V.jsx)(Ee, {
					tone: n.last_attempt.attempted ? "error" : "warning",
					children: n.last_attempt.attempted ? "上传失败" : "待重新准备"
				})
			}), /* @__PURE__ */ (0, V.jsx)(b, { children: n.last_attempt.attempted ? "馆藏与口味上传失败，本周不再发送。" : "馆藏与口味上传未完成，将自动重新准备。" })]
		}) : null,
		n.enabled && n.last_attempt?.status === "waiting-data" ? /* @__PURE__ */ (0, V.jsxs)(I, {
			divided: !0,
			children: [/* @__PURE__ */ (0, V.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, V.jsx)(Ee, { children: "等待数据" })
			}), /* @__PURE__ */ (0, V.jsx)(D, { children: "等待可分析的馆藏或偏好数据。" })]
		}) : null,
		n.enabled && n.last_attempt?.status === "unknown" ? /* @__PURE__ */ (0, V.jsxs)(I, {
			divided: !0,
			children: [/* @__PURE__ */ (0, V.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, V.jsx)(Ee, {
					tone: "warning",
					children: "结果未取得"
				})
			}), /* @__PURE__ */ (0, V.jsx)(D, { children: "未取得上传结果，本周不再发送。" })]
		}) : null,
		i ? /* @__PURE__ */ (0, V.jsxs)(I, {
			divided: !0,
			children: [
				/* @__PURE__ */ (0, V.jsxs)(D, { children: [
					"预览含 ",
					i.data.library.length,
					" 部作品和 ",
					i.data.coverage.uncoded_items,
					" 条无编号汇总，约 ",
					(i.bytes / 1024).toFixed(1),
					" KiB。"
				] }),
				/* @__PURE__ */ (0, V.jsx)(D, { children: "随机标识用于实例去重。状态每日一次；关闭后仅补发一次关闭状态。" }),
				/* @__PURE__ */ (0, V.jsx)(v, {
					summary: "上传数据预览",
					defaultOpen: !0,
					children: /* @__PURE__ */ (0, V.jsx)(It, {
						code: d,
						language: "json",
						label: "馆藏与口味上传预览",
						maxCharacters: 24e3
					})
				}),
				d.length > 24e3 ? /* @__PURE__ */ (0, V.jsx)(D, { children: "显示前 24,000 个字符，下载可查看完整内容。" }) : null,
				/* @__PURE__ */ (0, V.jsx)(l, {
					variant: "secondary",
					onClick: y,
					children: "下载完整预览"
				}),
				n.enabled ? null : /* @__PURE__ */ (0, V.jsx)(h, {
					isSelected: c,
					onChange: u,
					children: "我已查看上传预览，同意上传馆藏与口味明细"
				})
			]
		}) : null,
		f.error ? /* @__PURE__ */ (0, V.jsx)(I, {
			divided: !0,
			children: /* @__PURE__ */ (0, V.jsx)(b, { children: f.error })
		}) : null,
		/* @__PURE__ */ (0, V.jsxs)(E, { children: [
			o && !n.enabled ? /* @__PURE__ */ (0, V.jsx)(l, {
				variant: "secondary",
				onClick: () => {
					s(!1), a(null), u(!1);
				},
				children: "取消"
			}) : null,
			p ? /* @__PURE__ */ (0, V.jsx)(l, {
				variant: "secondary",
				onClick: () => void f.run("refresh", async (e) => {
					let t = await Ie("/api/configuration", e);
					if (!t.library_sharing) throw Error("馆藏上传状态未取得");
					return t.library_sharing;
				}, r),
				...R(f.busy === "refresh"),
				children: "刷新发送状态"
			}) : null,
			/* @__PURE__ */ (0, V.jsx)(l, {
				variant: "secondary",
				onClick: () => {
					s(!0), f.run("preview", (e) => Ie("/api/configuration/library-sharing/preview", e), (e) => {
						a(e), u(!1);
					});
				},
				...R(f.busy === "preview"),
				children: "预览上传内容"
			}),
			!n.enabled && i ? /* @__PURE__ */ (0, V.jsx)(l, {
				variant: "primary",
				disabled: !c,
				onClick: () => _(!0),
				...R(f.busy === "save"),
				children: "同意并开启上传"
			}) : null
		] })
	] });
}
// src/react/settings/remote-reporting-settings.tsx
function Bn({ value: e, onChange: t, busy: n = !1 }) {
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(fe, { children: /* @__PURE__ */ (0, V.jsx)(Se, {
		label: "发送版本统计与错误诊断（推荐）",
		description: "上传版本、系统信息、故障类型、代码位置与发生次数。",
		children: /* @__PURE__ */ (0, V.jsx)(De, {
			"aria-label": "发送版本统计与错误诊断（推荐）",
			isSelected: e.usage && e.errors,
			onChange: (n) => t({
				...e,
				usage: n,
				errors: n
			}),
			...R(n)
		})
	}) }), e.available ? null : /* @__PURE__ */ (0, V.jsx)(I, {
		divided: !0,
		children: /* @__PURE__ */ (0, V.jsx)("span", {
			className: "self-start",
			children: /* @__PURE__ */ (0, V.jsx)(Ee, { children: "上传服务未配置" })
		})
	})] });
}
function Vn({ initial: e, receipt: t }) {
	let [n, r] = (0, B.useState)(e), i = wt(), a = Object.values(n.delivery ?? {}).flatMap((e) => e.last_sent_at ? [Date.parse(e.last_sent_at)] : []).filter(Number.isFinite), o = a.length ? Math.max(...a) : null;
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
		/* @__PURE__ */ (0, V.jsx)(Bn, {
			value: n,
			busy: i.busy === "save",
			onChange: (e) => {
				i.run("save", (t) => L("/api/configuration/remote-reporting", {
					usage: e.usage,
					errors: e.errors
				}, "POST", t), (e) => {
					r(e), t("已保存诊断选项");
				});
			}
		}),
		/* @__PURE__ */ (0, V.jsxs)(I, {
			divided: !0,
			children: [/* @__PURE__ */ (0, V.jsxs)(v, {
				summary: "统计字段与发送规则",
				children: [
					/* @__PURE__ */ (0, V.jsx)(D, { children: n.fields.usage }),
					/* @__PURE__ */ (0, V.jsx)(D, { children: n.fields.errors }),
					/* @__PURE__ */ (0, V.jsx)(D, { children: n.notice })
				]
			}), o === null ? null : /* @__PURE__ */ (0, V.jsxs)(D, { children: ["上次发送：", new Date(o).toLocaleDateString()] })]
		}),
		i.error ? /* @__PURE__ */ (0, V.jsx)(I, {
			divided: !0,
			children: /* @__PURE__ */ (0, V.jsx)(b, { children: i.error })
		}) : null
	] });
}
// src/react/components/animated-number.tsx
var Hn = .6;
function Un({ value: e, format: t = (e) => Math.round(e).toLocaleString(), className: n }) {
	let r = Mt(), [i, a] = (0, B.useState)(e), o = (0, B.useRef)(e);
	return (0, B.useEffect)(() => {
		if (r || o.current === e) {
			o.current = e, a(e);
			return;
		}
		let t = Fe(o.current, e, {
			duration: Hn,
			ease: "easeOut",
			onUpdate: (e) => {
				o.current = e, a(e);
			}
		});
		return () => t.stop();
	}, [e, r]), /* @__PURE__ */ (0, V.jsx)("span", {
		className: n ? `tabular-nums ${n}` : "tabular-nums",
		children: t(i)
	});
}
// node_modules/recharts/es6/util/excludeEventProps.js
var Wn = /* @__PURE__ */ "dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture".split(".");
function Gn(e) {
	return typeof e == "string" && Wn.includes(e);
}
// node_modules/recharts/es6/util/svgPropertiesNoEvents.js
var Kn = /* @__PURE__ */ new Set(/* @__PURE__ */ "aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle".split("."));
function qn(e) {
	return typeof e == "string" && Kn.has(e);
}
function Jn(e) {
	return typeof e == "string" && e.startsWith("data-");
}
function Yn(e) {
	if (typeof e != "object" || !e) return {};
	var t = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (qn(n) || Jn(n)) && (t[n] = e[n]);
	return t;
}
function Xn(e) {
	if (e == null) return null;
	if (/*#__PURE__*/ (0, B.isValidElement)(e) && typeof e.props == "object" && e.props !== null) {
		var t = e.props;
		return Yn(t);
	}
	return typeof e == "object" && !Array.isArray(e) ? Yn(e) : null;
}
// node_modules/recharts/es6/util/svgPropertiesAndEvents.js
function Zn(e) {
	var t = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (qn(n) || Jn(n) || Gn(n)) && (t[n] = e[n]);
	return t;
}
function Qn(e) {
	return e == null ? null : /*#__PURE__*/ (0, B.isValidElement)(e) ? Zn(e.props) : typeof e == "object" && !Array.isArray(e) ? Zn(e) : null;
}
// node_modules/recharts/es6/container/Surface.js
var $n = [
	"children",
	"width",
	"height",
	"viewBox",
	"className",
	"style",
	"title",
	"desc"
];
function er() {
	return er = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, er.apply(null, arguments);
}
function tr(e, t) {
	if (e == null) return {};
	var n, r, i = nr(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function nr(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var rr = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = e.children, r = e.width, i = e.height, a = e.viewBox, o = e.className, s = e.style, c = e.title, l = e.desc, u = tr(e, $n), d = a || {
		width: r,
		height: i,
		x: 0,
		y: 0
	}, f = z("recharts-surface", o);
	return /*#__PURE__*/ B.createElement("svg", er({}, Zn(u), {
		className: f,
		width: r,
		height: i,
		style: s,
		viewBox: `${d.x} ${d.y} ${d.width} ${d.height}`,
		ref: t
	}), /*#__PURE__*/ B.createElement("title", null, c), /*#__PURE__*/ B.createElement("desc", null, l), n);
}), ir = ["children", "className"];
function ar() {
	return ar = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ar.apply(null, arguments);
}
function or(e, t) {
	if (e == null) return {};
	var n, r, i = sr(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function sr(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var cr = /*#__PURE__*/ B.forwardRef((e, t) => {
	var n = e.children, r = e.className, i = or(e, ir), a = z("recharts-layer", r);
	return /*#__PURE__*/ B.createElement("g", ar({ className: a }, Zn(i), { ref: t }), n);
});
// node_modules/es-toolkit/dist/_internal/isUnsafeProperty.mjs
function lr(e) {
	return e === "__proto__";
}
// node_modules/es-toolkit/dist/compat/_internal/isDeepKey.mjs
var ur = /\.|(\[(?:[^[\]]*|(["'])(?:(?!\2)[^\\]|\\.)*?\2)\])/;
function dr(e) {
	switch (typeof e) {
		case "number":
		case "symbol": return !1;
		case "string": return e === "" || e.startsWith(".") || e.endsWith(".") ? !1 : ur.test(e);
		default: return !1;
	}
}
// node_modules/es-toolkit/dist/compat/_internal/toKey.mjs
function fr(e) {
	return typeof e == "string" || typeof e == "symbol" ? e : Object.is(e?.valueOf?.(), -0) ? "-0" : String(e);
}
// node_modules/es-toolkit/dist/compat/predicate/isSymbol.mjs
function pr(e) {
	return typeof e == "symbol" || e instanceof Symbol;
}
// node_modules/es-toolkit/dist/compat/util/toString.mjs
function mr(e) {
	return e == null ? "" : hr(e);
}
function hr(e) {
	if (typeof e == "string") return e;
	if (Array.isArray(e)) return e.map(hr).join(",");
	if (pr(e)) return e.toString();
	let t = e + "";
	return t === "0" && Object.is(Number(e), -0) ? "-0" : t;
}
// node_modules/es-toolkit/dist/compat/util/toPath.mjs
function gr(e) {
	if (Array.isArray(e)) return e.map(fr);
	if (typeof e == "symbol") return [e];
	e = mr(e);
	let t = [], n = e.length;
	if (n === 0) return t;
	let r = 0, i = "", a = "", o = !1, s = !1, c = /^-?\d+(?:\.\d+)?$/;
	for (e.charCodeAt(0) === 46 && t.push(""); r < n;) {
		let l = e[r];
		if (a) l === "\\" && r + 1 < n ? (r++, i += e[r]) : l === a ? a = "" : i += l;
		else if (o) {
			if (l === "\"" || l === "'") a = l, s = !0;
			else if (l === "]") {
				if (o = !1, !s && i.includes(".") && !c.test(i)) {
					let e = i.split(".");
					for (let n = 0; n < e.length; n++) e[n] !== "" && t.push(e[n]);
				} else t.push(i);
				i = "";
			} else i += l;
		} else if (l === "[") o = !0, s = !1, i &&= (t.push(i), "");
		else if (l === ".") {
			i &&= (t.push(i), "");
			let n = e[r + 1];
			(n === void 0 || n === ".") && t.push("");
		} else i += l;
		r++;
	}
	return i && t.push(i), t;
}
// node_modules/es-toolkit/dist/compat/object/get.mjs
function _r(e, t, n) {
	if (e == null) return n;
	switch (typeof t) {
		case "string": {
			if (lr(t)) return n;
			let r = e[t];
			return r === void 0 ? dr(t) && !Object.hasOwn(e, t) ? _r(e, gr(t), n) : n : r;
		}
		case "number":
		case "symbol": {
			typeof t == "number" && (t = fr(t));
			let r = e[t];
			return r === void 0 ? n : r;
		}
		default: {
			if (Array.isArray(t)) return vr(e, t, n);
			if (t = Object.is(t?.valueOf(), -0) ? "-0" : String(t), lr(t)) return n;
			let r = e[t];
			return r === void 0 ? n : r;
		}
	}
}
function vr(e, t, n) {
	if (t.length === 0) return n;
	let r = e;
	for (let e = 0; e < t.length; e++) {
		if (r == null || lr(t[e])) return n;
		r = r[t[e]];
	}
	return r === void 0 ? n : r;
}
// node_modules/recharts/es6/util/round.js
var yr = 4;
function br(e) {
	var t = 10 ** (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yr), n = Math.round(e * t) / t;
	return Object.is(n, -0) ? 0 : n;
}
function xr(e) {
	var t = [...arguments].slice(1);
	return e.reduce((e, n, r) => {
		var i = t[r - 1];
		return typeof i == "string" ? e + i + n : i === void 0 ? e + n : e + br(i) + n;
	}, "");
}
// node_modules/recharts/es6/util/DataUtils.js
var Sr = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, Cr = (e) => typeof e == "number" && e != +e, wr = (e) => typeof e == "string" && e.length > 1 && e.indexOf("%") === e.length - 1, H = (e) => (typeof e == "number" || e instanceof Number) && !Cr(e), Tr = (e) => H(e) || typeof e == "string", Er = 0, Dr = (e) => {
	var t = ++Er;
	return `${e || ""}${t}`;
}, Or = function(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
	if (!H(e) && typeof e != "string") return n;
	var i;
	if (wr(e)) {
		if (t == null) return n;
		var a = e.indexOf("%");
		i = t * parseFloat(e.slice(0, a)) / 100;
	} else i = +e;
	return Cr(i) && (i = n), r && t != null && i > t && (i = t), i;
}, kr = (e) => {
	if (!Array.isArray(e)) return !1;
	for (var t = e.length, n = {}, r = 0; r < t; r++) if (!n[String(e[r])]) n[String(e[r])] = !0;
	else return !0;
	return !1;
};
function U(e, t, n) {
	return H(e) && H(t) ? br(e + n * (t - e)) : t;
}
function Ar(e, t, n) {
	if (e && e.length) return e.find((e) => e && (typeof t == "function" ? t(e) : _r(e, t)) === n);
}
var jr = (e) => e == null, Mr = (e) => jr(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
function Nr(e) {
	return e != null;
}
function Pr() {}
// node_modules/recharts/es6/cartesian/cartesianViewBoxToTrapezoid.js
function Fr(e) {
	if (e) return {
		x: e.x,
		y: e.y,
		upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
		lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
		width: e.width,
		height: e.height
	};
}
// node_modules/recharts/es6/cartesian/getCartesianPosition.js
function Ir(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Lr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ir(Object(n), !0).forEach(function(t) {
			Rr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ir(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Rr(e, t, n) {
	return (t = zr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function zr(e) {
	var t = Br(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Br(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Vr = (e) => {
	var t = e.viewBox, n = e.position, r = e.offset, i = r === void 0 ? 0 : r, a = e.parentViewBox, o = e.clamp, s = Fr(t), c = s.x, l = s.y, u = s.height, d = s.upperWidth, f = s.lowerWidth, p = c, m = c + (d - f) / 2, h = (p + m) / 2, g = (d + f) / 2, _ = p + d / 2, v = u >= 0 ? 1 : -1, y = v * i, b = v > 0 ? "end" : "start", x = v > 0 ? "start" : "end", S = d >= 0 ? 1 : -1, C = S * i, w = S > 0 ? "end" : "start", T = S > 0 ? "start" : "end", E = a;
	if (n === "top") {
		var D = {
			x: p + d / 2,
			y: l - y,
			horizontalAnchor: "middle",
			verticalAnchor: b
		};
		return o && E && (D.height = Math.max(l - E.y, 0), D.width = d), D;
	}
	if (n === "bottom") {
		var O = {
			x: m + f / 2,
			y: l + u + y,
			horizontalAnchor: "middle",
			verticalAnchor: x
		};
		return o && E && (O.height = Math.max(E.y + E.height - (l + u), 0), O.width = f), O;
	}
	if (n === "left") {
		var k = {
			x: h - C,
			y: l + u / 2,
			horizontalAnchor: w,
			verticalAnchor: "middle"
		};
		return o && E && (k.width = Math.max(k.x - E.x, 0), k.height = u), k;
	}
	if (n === "right") {
		var A = {
			x: h + g + C,
			y: l + u / 2,
			horizontalAnchor: T,
			verticalAnchor: "middle"
		};
		return o && E && (A.width = Math.max(E.x + E.width - A.x, 0), A.height = u), A;
	}
	var j = o && E ? {
		width: g,
		height: u
	} : {};
	return n === "insideLeft" ? Lr({
		x: h + C,
		y: l + u / 2,
		horizontalAnchor: T,
		verticalAnchor: "middle"
	}, j) : n === "insideRight" ? Lr({
		x: h + g - C,
		y: l + u / 2,
		horizontalAnchor: w,
		verticalAnchor: "middle"
	}, j) : n === "insideTop" ? Lr({
		x: p + d / 2,
		y: l + y,
		horizontalAnchor: "middle",
		verticalAnchor: x
	}, j) : n === "insideBottom" ? Lr({
		x: m + f / 2,
		y: l + u - y,
		horizontalAnchor: "middle",
		verticalAnchor: b
	}, j) : n === "insideTopLeft" ? Lr({
		x: p + C,
		y: l + y,
		horizontalAnchor: T,
		verticalAnchor: x
	}, j) : n === "insideTopRight" ? Lr({
		x: p + d - C,
		y: l + y,
		horizontalAnchor: w,
		verticalAnchor: x
	}, j) : n === "insideBottomLeft" ? Lr({
		x: m + C,
		y: l + u - y,
		horizontalAnchor: T,
		verticalAnchor: b
	}, j) : n === "insideBottomRight" ? Lr({
		x: m + f - C,
		y: l + u - y,
		horizontalAnchor: w,
		verticalAnchor: b
	}, j) : n && typeof n == "object" && (H(n.x) || wr(n.x)) && (H(n.y) || wr(n.y)) ? Lr({
		x: c + Or(n.x, g),
		y: l + Or(n.y, u),
		horizontalAnchor: "end",
		verticalAnchor: "end"
	}, j) : Lr({
		x: _,
		y: l + u / 2,
		horizontalAnchor: "middle",
		verticalAnchor: "middle"
	}, j);
}, Hr = [
	"top",
	"left",
	"right",
	"bottom"
];
function Ur(e) {
	return e == null ? !1 : typeof e == "object" || Hr.includes(e);
}
// node_modules/recharts/es6/context/legendPortalContext.js
var Wr = /*#__PURE__*/ (0, B.createContext)(null), Gr = () => (0, B.useContext)(Wr);
// node_modules/victory-vendor/node_modules/d3-shape/src/constant.js
function Kr(e) {
	return function() {
		return e;
	};
}
// node_modules/victory-vendor/node_modules/d3-shape/src/math.js
var qr = Math.cos, Jr = Math.sin, Yr = Math.sqrt, Xr = Math.PI;
Xr / 2;
var Zr = 2 * Xr, Qr = Math.PI, $r = 2 * Qr, ei = 1e-6, ti = $r - ei;
function ni(e) {
	this._ += e[0];
	for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function ri(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
	if (t > 15) return ni;
	let n = 10 ** t;
	return function(e) {
		this._ += e[0];
		for (let t = 1, r = e.length; t < r; ++t) this._ += Math.round(arguments[t] * n) / n + e[t];
	};
}
var ii = class {
	constructor(e) {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? ni : ri(e);
	}
	moveTo(e, t) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}`;
	}
	closePath() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
	}
	lineTo(e, t) {
		this._append`L${this._x1 = +e},${this._y1 = +t}`;
	}
	quadraticCurveTo(e, t, n, r) {
		this._append`Q${+e},${+t},${this._x1 = +n},${this._y1 = +r}`;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		this._append`C${+e},${+t},${+n},${+r},${this._x1 = +i},${this._y1 = +a}`;
	}
	arcTo(e, t, n, r, i) {
		if (e = +e, t = +t, n = +n, r = +r, i = +i, i < 0) throw Error(`negative radius: ${i}`);
		let a = this._x1, o = this._y1, s = n - e, c = r - t, l = a - e, u = o - t, d = l * l + u * u;
		if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = t}`;
		else if (d > ei) {
			if (!(Math.abs(u * s - c * l) > ei) || !i) this._append`L${this._x1 = e},${this._y1 = t}`;
			else {
				let f = n - a, p = r - o, m = s * s + c * c, h = f * f + p * p, g = Math.sqrt(m), _ = Math.sqrt(d), v = i * Math.tan((Qr - Math.acos((m + d - h) / (2 * g * _))) / 2), y = v / _, b = v / g;
				Math.abs(y - 1) > ei && this._append`L${e + y * l},${t + y * u}`, this._append`A${i},${i},0,0,${+(u * f > l * p)},${this._x1 = e + b * s},${this._y1 = t + b * c}`;
			}
		}
	}
	arc(e, t, n, r, i, a) {
		if (e = +e, t = +t, n = +n, a = !!a, n < 0) throw Error(`negative radius: ${n}`);
		let o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, l = t + s, u = 1 ^ a, d = a ? r - i : i - r;
		this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > ei || Math.abs(this._y1 - l) > ei) && this._append`L${c},${l}`, n && (d < 0 && (d = d % $r + $r), d > ti ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${this._x1 = c},${this._y1 = l}` : d > ei && this._append`A${n},${n},0,${+(d >= Qr)},${u},${this._x1 = e + n * Math.cos(i)},${this._y1 = t + n * Math.sin(i)}`);
	}
	rect(e, t, n, r) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${n = +n}v${+r}h${-n}Z`;
	}
	toString() {
		return this._;
	}
};
ii.prototype;
// node_modules/victory-vendor/node_modules/d3-shape/src/path.js
function ai(e) {
	let t = 3;
	return e.digits = function(n) {
		if (!arguments.length) return t;
		if (n == null) t = null;
		else {
			let e = Math.floor(n);
			if (!(e >= 0)) throw RangeError(`invalid digits: ${n}`);
			t = e;
		}
		return e;
	}, () => new ii(t);
}
Array.prototype.slice;
function oi(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/linear.js
function si(e) {
	this._context = e;
}
si.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: this._context.lineTo(e, t);
		}
	}
};
function ci(e) {
	return new si(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/point.js
function li(e) {
	return e[0];
}
function ui(e) {
	return e[1];
}
// node_modules/victory-vendor/node_modules/d3-shape/src/line.js
function di(e, t) {
	var n = Kr(!0), r = null, i = ci, a = null, o = ai(s);
	e = typeof e == "function" ? e : e === void 0 ? li : Kr(e), t = typeof t == "function" ? t : t === void 0 ? ui : Kr(t);
	function s(s) {
		var c, l = (s = oi(s)).length, u, d = !1, f;
		for (r ?? (a = i(f = o())), c = 0; c <= l; ++c) !(c < l && n(u = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(u, c, s), +t(u, c, s));
		if (f) return a = null, f + "" || null;
	}
	return s.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Kr(+t), s) : e;
	}, s.y = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Kr(+e), s) : t;
	}, s.defined = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : Kr(!!e), s) : n;
	}, s.curve = function(e) {
		return arguments.length ? (i = e, r != null && (a = i(r)), s) : i;
	}, s.context = function(e) {
		return arguments.length ? (e == null ? r = a = null : a = i(r = e), s) : r;
	}, s;
}
// node_modules/victory-vendor/node_modules/d3-shape/src/area.js
function fi(e, t, n) {
	var r = null, i = Kr(!0), a = null, o = ci, s = null, c = ai(l);
	e = typeof e == "function" ? e : e === void 0 ? li : Kr(+e), t = typeof t == "function" ? t : Kr(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? ui : Kr(+n);
	function l(l) {
		var u, d, f, p = (l = oi(l)).length, m, h = !1, g, _ = Array(p), v = Array(p);
		for (a ?? (s = o(g = c())), u = 0; u <= p; ++u) {
			if (!(u < p && i(m = l[u], u, l)) === h) {
				if (h = !h) d = u, s.areaStart(), s.lineStart();
				else {
					for (s.lineEnd(), s.lineStart(), f = u - 1; f >= d; --f) s.point(_[f], v[f]);
					s.lineEnd(), s.areaEnd();
				}
			}
			h && (_[u] = +e(m, u, l), v[u] = +t(m, u, l), s.point(r ? +r(m, u, l) : _[u], n ? +n(m, u, l) : v[u]));
		}
		if (g) return s = null, g + "" || null;
	}
	function u() {
		return di().defined(i).curve(o).context(a);
	}
	return l.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Kr(+t), r = null, l) : e;
	}, l.x0 = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Kr(+t), l) : e;
	}, l.x1 = function(e) {
		return arguments.length ? (r = e == null ? null : typeof e == "function" ? e : Kr(+e), l) : r;
	}, l.y = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Kr(+e), n = null, l) : t;
	}, l.y0 = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Kr(+e), l) : t;
	}, l.y1 = function(e) {
		return arguments.length ? (n = e == null ? null : typeof e == "function" ? e : Kr(+e), l) : n;
	}, l.lineX0 = l.lineY0 = function() {
		return u().x(e).y(t);
	}, l.lineY1 = function() {
		return u().x(e).y(n);
	}, l.lineX1 = function() {
		return u().x(r).y(t);
	}, l.defined = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : Kr(!!e), l) : i;
	}, l.curve = function(e) {
		return arguments.length ? (o = e, a != null && (s = o(a)), l) : o;
	}, l.context = function(e) {
		return arguments.length ? (e == null ? a = s = null : s = o(a = e), l) : a;
	}, l;
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/bump.js
var pi = class {
	constructor(e, t) {
		this._context = e, this._x = t;
	}
	areaStart() {
		this._line = 0;
	}
	areaEnd() {
		this._line = NaN;
	}
	lineStart() {
		this._point = 0;
	}
	lineEnd() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	}
	point(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, t, e, t) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + t) / 2, e, this._y0, e, t);
		}
		this._x0 = e, this._y0 = t;
	}
};
function mi(e) {
	return new pi(e, !0);
}
function hi(e) {
	return new pi(e, !1);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/symbol/circle.js
var gi = { draw(e, t) {
	let n = Yr(t / Xr);
	e.moveTo(n, 0), e.arc(0, 0, n, 0, Zr);
} }, _i = { draw(e, t) {
	let n = Yr(t / 5) / 2;
	e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
} }, vi = Yr(1 / 3), yi = vi * 2, bi = { draw(e, t) {
	let n = Yr(t / yi), r = n * vi;
	e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
} }, xi = { draw(e, t) {
	let n = Yr(t), r = -n / 2;
	e.rect(r, r, n, n);
} }, Si = .8908130915292852, Ci = Jr(Xr / 10) / Jr(7 * Xr / 10), wi = Jr(Zr / 10) * Ci, Ti = -qr(Zr / 10) * Ci, Ei = { draw(e, t) {
	let n = Yr(t * Si), r = wi * n, i = Ti * n;
	e.moveTo(0, -n), e.lineTo(r, i);
	for (let t = 1; t < 5; ++t) {
		let a = Zr * t / 5, o = qr(a), s = Jr(a);
		e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i);
	}
	e.closePath();
} }, Di = Yr(3), Oi = { draw(e, t) {
	let n = -Yr(t / (Di * 3));
	e.moveTo(0, n * 2), e.lineTo(-Di * n, -n), e.lineTo(Di * n, -n), e.closePath();
} }, ki = -.5, Ai = Yr(3) / 2, ji = 1 / Yr(12), Mi = (ji / 2 + 1) * 3, Ni = { draw(e, t) {
	let n = Yr(t / Mi), r = n / 2, i = n * ji, a = r, o = n * ji + n, s = -a, c = o;
	e.moveTo(r, i), e.lineTo(a, o), e.lineTo(s, c), e.lineTo(ki * r - Ai * i, Ai * r + ki * i), e.lineTo(ki * a - Ai * o, Ai * a + ki * o), e.lineTo(ki * s - Ai * c, Ai * s + ki * c), e.lineTo(ki * r + Ai * i, ki * i - Ai * r), e.lineTo(ki * a + Ai * o, ki * o - Ai * a), e.lineTo(ki * s + Ai * c, ki * c - Ai * s), e.closePath();
} };
// node_modules/victory-vendor/node_modules/d3-shape/src/symbol.js
function Pi(e, t) {
	let n = null, r = ai(i);
	e = typeof e == "function" ? e : Kr(e || gi), t = typeof t == "function" ? t : Kr(t === void 0 ? 64 : +t);
	function i() {
		let i;
		if (n ||= i = r(), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), i) return n = null, i + "" || null;
	}
	return i.type = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Kr(t), i) : e;
	}, i.size = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Kr(+e), i) : t;
	}, i.context = function(e) {
		return arguments.length ? (n = e ?? null, i) : n;
	}, i;
}
// node_modules/victory-vendor/node_modules/d3-shape/src/noop.js
function Fi() {}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/basis.js
function Ii(e, t, n) {
	e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + n) / 6);
}
function Li(e) {
	this._context = e;
}
Li.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 3: Ii(this, this._x1, this._y1);
			case 2: this._context.lineTo(this._x1, this._y1);
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
			default: Ii(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function Ri(e) {
	return new Li(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/basisClosed.js
function zi(e) {
	this._context = e;
}
zi.prototype = {
	areaStart: Fi,
	areaEnd: Fi,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x2, this._y2), this._context.closePath();
				break;
			case 2:
				this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
				break;
			case 3: this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
		}
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._x2 = e, this._y2 = t;
				break;
			case 1:
				this._point = 2, this._x3 = e, this._y3 = t;
				break;
			case 2:
				this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
				break;
			default: Ii(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function Bi(e) {
	return new zi(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/basisOpen.js
function Vi(e) {
	this._context = e;
}
Vi.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				var n = (this._x0 + 4 * this._x1 + e) / 6, r = (this._y0 + 4 * this._y1 + t) / 6;
				this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
				break;
			case 3: this._point = 4;
			default: Ii(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function Hi(e) {
	return new Vi(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/linearClosed.js
function Ui(e) {
	this._context = e;
}
Ui.prototype = {
	areaStart: Fi,
	areaEnd: Fi,
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		this._point && this._context.closePath();
	},
	point: function(e, t) {
		e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
	}
};
function Wi(e) {
	return new Ui(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/monotone.js
function Gi(e) {
	return e < 0 ? -1 : 1;
}
function Ki(e, t, n) {
	var r = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (r || i < 0 && -0), o = (n - e._y1) / (i || r < 0 && -0), s = (a * i + o * r) / (r + i);
	return (Gi(a) + Gi(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(s)) || 0;
}
function qi(e, t) {
	var n = e._x1 - e._x0;
	return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Ji(e, t, n) {
	var r = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - r) / 3;
	e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function Yi(e) {
	this._context = e;
}
Yi.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
			case 3: Ji(this, this._t0, qi(this, this._t0));
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		var n = NaN;
		if (e = +e, t = +t, e !== this._x1 || t !== this._y1) {
			switch (this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, Ji(this, qi(this, n = Ki(this, e, t)), n);
					break;
				default: Ji(this, this._t0, n = Ki(this, e, t));
			}
			this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
		}
	}
};
function Xi(e) {
	this._context = new Zi(e);
}
(Xi.prototype = Object.create(Yi.prototype)).point = function(e, t) {
	Yi.prototype.point.call(this, t, e);
};
function Zi(e) {
	this._context = e;
}
Zi.prototype = {
	moveTo: function(e, t) {
		this._context.moveTo(t, e);
	},
	closePath: function() {
		this._context.closePath();
	},
	lineTo: function(e, t) {
		this._context.lineTo(t, e);
	},
	bezierCurveTo: function(e, t, n, r, i, a) {
		this._context.bezierCurveTo(t, e, r, n, a, i);
	}
};
function Qi(e) {
	return new Yi(e);
}
function $i(e) {
	return new Xi(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/natural.js
function ea(e) {
	this._context = e;
}
ea.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = [], this._y = [];
	},
	lineEnd: function() {
		var e = this._x, t = this._y, n = e.length;
		if (n) {
			if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), n === 2) this._context.lineTo(e[1], t[1]);
			else for (var r = ta(e), i = ta(t), a = 0, o = 1; o < n; ++a, ++o) this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], e[o], t[o]);
		}
		(this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
	},
	point: function(e, t) {
		this._x.push(+e), this._y.push(+t);
	}
};
function ta(e) {
	var t, n = e.length - 1, r, i = Array(n), a = Array(n), o = Array(n);
	for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
	for (i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) r = i[t] / a[t - 1], a[t] -= r, o[t] -= r * o[t - 1];
	for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
	for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
	return [i, a];
}
function na(e) {
	return new ea(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/step.js
function ra(e, t) {
	this._context = e, this._t = t;
}
ra.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = this._y = NaN, this._point = 0;
	},
	lineEnd: function() {
		0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e, t);
			else {
				var n = this._x * (1 - this._t) + e * this._t;
				this._context.lineTo(n, this._y), this._context.lineTo(n, t);
			}
		}
		this._x = e, this._y = t;
	}
};
function ia(e) {
	return new ra(e, .5);
}
function aa(e) {
	return new ra(e, 0);
}
function oa(e) {
	return new ra(e, 1);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/offset/none.js
function sa(e, t) {
	if ((o = e.length) > 1) for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n) for (i = a, a = e[t[n]], r = 0; r < s; ++r) a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
// node_modules/victory-vendor/node_modules/d3-shape/src/order/none.js
function ca(e) {
	for (var t = e.length, n = Array(t); --t >= 0;) n[t] = t;
	return n;
}
// node_modules/victory-vendor/node_modules/d3-shape/src/stack.js
function la(e, t) {
	return e[t];
}
function ua(e) {
	let t = [];
	return t.key = e, t;
}
function da() {
	var e = Kr([]), t = ca, n = sa, r = la;
	function i(i) {
		var a = Array.from(e.apply(this, arguments), ua), o, s = a.length, c = -1, l;
		for (let e of i) for (o = 0, ++c; o < s; ++o) (a[o][c] = [0, +r(e, a[o].key, c, i)]).data = e;
		for (o = 0, l = oi(t(a)); o < s; ++o) a[l[o]].index = o;
		return n(a, l), a;
	}
	return i.keys = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Kr(Array.from(t)), i) : e;
	}, i.value = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Kr(+e), i) : r;
	}, i.order = function(e) {
		return arguments.length ? (t = e == null ? ca : typeof e == "function" ? e : Kr(Array.from(e)), i) : t;
	}, i.offset = function(e) {
		return arguments.length ? (n = e ?? sa, i) : n;
	}, i;
}
// node_modules/victory-vendor/node_modules/d3-shape/src/offset/expand.js
function fa(e, t) {
	if ((r = e.length) > 0) {
		for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
			for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
			if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
		}
		sa(e, t);
	}
}
// node_modules/victory-vendor/node_modules/d3-shape/src/offset/silhouette.js
function pa(e, t) {
	if ((i = e.length) > 0) {
		for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
			for (var o = 0, s = 0; o < i; ++o) s += e[o][n][1] || 0;
			r[n][1] += r[n][0] = -s / 2;
		}
		sa(e, t);
	}
}
// node_modules/victory-vendor/node_modules/d3-shape/src/offset/wiggle.js
function ma(e, t) {
	if ((o = e.length) > 0 && (a = (i = e[t[0]]).length) > 0) {
		for (var n = 0, r = 1, i, a, o; r < a; ++r) {
			for (var s = 0, c = 0, l = 0; s < o; ++s) {
				for (var u = e[t[s]], d = u[r][1] || 0, f = (d - (u[r - 1][1] || 0)) / 2, p = 0; p < s; ++p) {
					var m = e[t[p]], h = m[r][1] || 0, g = m[r - 1][1] || 0;
					f += h - g;
				}
				c += d, l += f * d;
			}
			i[r - 1][1] += i[r - 1][0] = n, c && (n -= l / c);
		}
		i[r - 1][1] += i[r - 1][0] = n, sa(e, t);
	}
}
// node_modules/recharts/es6/shape/Symbols.js
var ha = [
	"type",
	"size",
	"sizeType"
];
function ga() {
	return ga = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ga.apply(null, arguments);
}
function _a(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function va(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? _a(Object(n), !0).forEach(function(t) {
			ya(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _a(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ya(e, t, n) {
	return (t = ba(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ba(e) {
	var t = xa(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function xa(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Sa(e, t) {
	if (e == null) return {};
	var n, r, i = Ca(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Ca(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var wa = {
	symbolCircle: gi,
	symbolCross: _i,
	symbolDiamond: bi,
	symbolSquare: xi,
	symbolStar: Ei,
	symbolTriangle: Oi,
	symbolWye: Ni
}, Ta = Math.PI / 180, Ea = (e) => wa[`symbol${Mr(e)}`] || gi, Da = (e, t, n) => {
	if (t === "area") return e;
	switch (n) {
		case "cross": return 5 * e * e / 9;
		case "diamond": return .5 * e * e / Math.sqrt(3);
		case "square": return e * e;
		case "star":
			var r = 18 * Ta;
			return 1.25 * e * e * (Math.tan(r) - Math.tan(r * 2) * Math.tan(r) ** 2);
		case "triangle": return Math.sqrt(3) * e * e / 4;
		case "wye": return (21 - 10 * Math.sqrt(3)) * e * e / 8;
		default: return Math.PI * e * e / 4;
	}
}, Oa = (e, t) => {
	wa[`symbol${Mr(e)}`] = t;
}, ka = (e) => {
	var t = e.type, n = t === void 0 ? "circle" : t, r = e.size, i = r === void 0 ? 64 : r, a = e.sizeType, o = a === void 0 ? "area" : a, s = va(va({}, Sa(e, ha)), {}, {
		type: n,
		size: i,
		sizeType: o
	}), c = "circle";
	typeof n == "string" && (c = n);
	var l = () => {
		var e = Ea(c), t = Pi().type(e).size(Da(i, o, c))();
		if (t !== null) return t;
	}, u = s.className, d = s.cx, f = s.cy, p = Zn(s);
	return H(d) && H(f) && H(i) ? /*#__PURE__*/ B.createElement("path", ga({}, p, {
		className: z("recharts-symbols", u),
		transform: `translate(${d}, ${f})`,
		d: l()
	})) : null;
};
ka.registerSymbol = Oa;
// node_modules/recharts/es6/util/types.js
var Aa = (e) => "radius" in e && "startAngle" in e && "endAngle" in e, ja = (e, t) => {
	if (!e || typeof e == "function" || typeof e == "boolean") return null;
	var n = e;
	if (/*#__PURE__*/ (0, B.isValidElement)(e) && (n = e.props), typeof n != "object" && typeof n != "function") return null;
	var r = {};
	return Object.keys(n).forEach((e) => {
		Gn(e) && typeof n[e] == "function" && (r[e] = t || ((t) => n[e](n, t)));
	}), r;
}, Ma = (e, t, n) => (r) => (e(t, n, r), null), Na = (e, t, n) => {
	if (e === null || typeof e != "object" && typeof e != "function") return null;
	var r = null;
	return Object.keys(e).forEach((i) => {
		var a = e[i];
		Gn(i) && typeof a == "function" && (r ||= {}, r[i] = Ma(a, t, n));
	}), r;
};
// node_modules/recharts/es6/util/resolveDefaultProps.js
function Pa(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Fa(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Pa(Object(n), !0).forEach(function(t) {
			Ia(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pa(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ia(e, t, n) {
	return (t = La(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function La(e) {
	var t = Ra(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ra(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function za(e, t) {
	var n = Fa({}, e), r = t;
	return Object.keys(t).reduce((e, t) => (e[t] === void 0 && r[t] !== void 0 && (e[t] = r[t]), e), n);
}
// node_modules/recharts/es6/component/DefaultLegendContent.js
function Ba() {
	return Ba = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ba.apply(null, arguments);
}
function Va(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ha(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Va(Object(n), !0).forEach(function(t) {
			Ua(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Va(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ua(e, t, n) {
	return (t = Wa(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Wa(e) {
	var t = Ga(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ga(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Ka = 32, qa = {
	align: "center",
	iconSize: 14,
	inactiveColor: "#ccc",
	layout: "horizontal",
	verticalAlign: "middle",
	labelStyle: {}
};
function Ja(e) {
	if (typeof e == "object" && e && "strokeDasharray" in e) return String(e.strokeDasharray);
}
function Ya(e) {
	var t = e.data, n = e.iconType, r = e.inactiveColor, i = Ka / 2, a = Ka / 6, o = Ka / 3, s = t.inactive ? r : t.color, c = n ?? t.type;
	if (c === "none") return null;
	if (c === "plainline") return /*#__PURE__*/ B.createElement("line", {
		strokeWidth: 4,
		fill: "none",
		stroke: s,
		strokeDasharray: Ja(t.payload),
		x1: 0,
		y1: i,
		x2: Ka,
		y2: i,
		className: "recharts-legend-icon"
	});
	if (c === "line") return /*#__PURE__*/ B.createElement("path", {
		strokeWidth: 4,
		fill: "none",
		stroke: s,
		d: `M0,${i}h${o}
            A${a},${a},0,1,1,${2 * o},${i}
            H${Ka}M${2 * o},${i}
            A${a},${a},0,1,1,${o},${i}`,
		className: "recharts-legend-icon"
	});
	if (c === "rect") return /*#__PURE__*/ B.createElement("path", {
		stroke: "none",
		fill: s,
		d: `M0,${Ka / 8}h${Ka}v${Ka * 3 / 4}h${-Ka}z`,
		className: "recharts-legend-icon"
	});
	if (/*#__PURE__*/ B.isValidElement(t.legendIcon)) {
		var l = Ha({}, t);
		return delete l.legendIcon, /*#__PURE__*/ B.cloneElement(t.legendIcon, l);
	}
	return /*#__PURE__*/ B.createElement(ka, {
		fill: s,
		cx: i,
		cy: i,
		size: Ka,
		sizeType: "diameter",
		type: c
	});
}
function Xa(e) {
	var t = e.payload, n = e.iconSize, r = e.layout, i = e.formatter, a = e.inactiveColor, o = e.iconType, s = e.labelStyle, c = {
		x: 0,
		y: 0,
		width: Ka,
		height: Ka
	}, l = {
		display: r === "horizontal" ? "inline-block" : "block",
		marginRight: 10,
		whiteSpace: "nowrap"
	}, u = {
		display: "inline-block",
		verticalAlign: "middle",
		marginRight: 4
	};
	return t.map((t, r) => {
		var d = t.formatter || i, f = z({
			"recharts-legend-item": !0,
			[`legend-item-${r}`]: !0,
			inactive: t.inactive
		});
		if (t.type === "none") return null;
		var p = typeof s == "object" ? Ha({}, s) : {};
		p.color = t.inactive ? a : p.color || t.color, p.whiteSpace ??= "normal", p.overflowWrap ??= "break-word";
		var m = d ? d(t.value, t, r) : t.value;
		return /*#__PURE__*/ B.createElement("li", Ba({
			className: f,
			style: l,
			key: `legend-item-${r}`
		}, Na(e, t, r)), /*#__PURE__*/ B.createElement(rr, {
			width: n,
			height: n,
			viewBox: c,
			style: u,
			"aria-label": t.value == null ? "legend icon" : `${t.value} legend icon`
		}, /*#__PURE__*/ B.createElement(Ya, {
			data: t,
			iconType: o,
			inactiveColor: a
		})), /*#__PURE__*/ B.createElement("span", {
			className: "recharts-legend-item-text",
			style: p
		}, m));
	});
}
var Za = (e) => {
	var t = za(e, qa), n = t.payload, r = t.layout, i = t.align;
	if (!n || !n.length) return null;
	var a = {
		padding: 0,
		margin: 0,
		textAlign: r === "horizontal" ? i : "left"
	};
	return /*#__PURE__*/ B.createElement("ul", {
		className: "recharts-default-legend",
		style: a
	}, /*#__PURE__*/ B.createElement(Xa, Ba({}, t, { payload: n })));
};
// node_modules/es-toolkit/dist/array/uniqBy.mjs
function Qa(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r = 0; r < e.length; r++) {
		let i = e[r], a = t(i, r, e);
		n.has(a) || n.set(a, i);
	}
	return Array.from(n.values());
}
// node_modules/es-toolkit/dist/function/ary.mjs
function $a(e, t) {
	return function(...n) {
		return e.apply(this, n.slice(0, t));
	};
}
// node_modules/es-toolkit/dist/function/identity.mjs
function eo(e) {
	return e;
}
// node_modules/es-toolkit/dist/predicate/isLength.mjs
function to(e) {
	return Number.isSafeInteger(e) && e >= 0;
}
// node_modules/es-toolkit/dist/compat/predicate/isArrayLike.mjs
function no(e) {
	return e != null && typeof e != "function" && to(e.length);
}
// node_modules/es-toolkit/dist/compat/object/property.mjs
function ro(e) {
	return function(t) {
		return _r(t, e);
	};
}
// node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
function io(e) {
	return e == null || typeof e != "object" && typeof e != "function";
}
// node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
function ao(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
// node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
function oo(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
// node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
function so(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
// node_modules/es-toolkit/dist/compat/_internal/tags.mjs
var co = "[object RegExp]", lo = "[object String]", uo = "[object Number]", fo = "[object Boolean]", po = "[object Arguments]", mo = "[object Symbol]", ho = "[object Date]", go = "[object Map]", _o = "[object Set]", vo = "[object Array]", yo = "[object Function]", bo = "[object ArrayBuffer]", xo = "[object Object]", So = "[object Error]", Co = "[object DataView]", wo = "[object Uint8Array]", To = "[object Uint8ClampedArray]", Eo = "[object Uint16Array]", Do = "[object Uint32Array]", Oo = "[object BigUint64Array]", ko = "[object Int8Array]", Ao = "[object Int16Array]", jo = "[object Int32Array]", Mo = "[object BigInt64Array]", No = "[object Float32Array]", Po = "[object Float64Array]", Fo = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
	return this;
})();
// node_modules/es-toolkit/dist/predicate/isBuffer.mjs
function Io(e) {
	return Fo.Buffer !== void 0 && Fo.Buffer.isBuffer(e);
}
// node_modules/es-toolkit/dist/object/cloneDeepWith.mjs
function Lo(e, t) {
	return Ro(e, void 0, e, /* @__PURE__ */ new Map(), t);
}
function Ro(e, t, n, r = /* @__PURE__ */ new Map(), i = void 0) {
	let a = i?.(e, t, n, r);
	if (a !== void 0) return a;
	if (io(e)) return e;
	if (r.has(e)) return r.get(e);
	if (Array.isArray(e)) {
		let t = Array(e.length);
		r.set(e, t);
		for (let a = 0; a < e.length; a++) t[a] = Ro(e[a], a, n, r, i);
		return Object.hasOwn(e, "index") && (t.index = e.index), Object.hasOwn(e, "input") && (t.input = e.input), t;
	}
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof RegExp) {
		let t = new RegExp(e.source, e.flags);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof Map) {
		let t = /* @__PURE__ */ new Map();
		r.set(e, t);
		for (let [a, o] of e) t.set(a, Ro(o, a, n, r, i));
		return t;
	}
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Set();
		r.set(e, t);
		for (let a of e) t.add(Ro(a, void 0, n, r, i));
		return t;
	}
	if (Io(e)) return e.subarray();
	if (ao(e)) {
		let t = new (Object.getPrototypeOf(e)).constructor(e.length);
		r.set(e, t);
		for (let a = 0; a < e.length; a++) t[a] = Ro(e[a], a, n, r, i);
		return t;
	}
	if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
	if (e instanceof DataView) {
		let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
		return r.set(e, t), zo(t, e, n, r, i), t;
	}
	if (typeof File < "u" && e instanceof File) {
		let t = new File([e], e.name, { type: e.type });
		return r.set(e, t), zo(t, e, n, r, i), t;
	}
	if (typeof Blob < "u" && e instanceof Blob) {
		let t = new Blob([e], { type: e.type });
		return r.set(e, t), zo(t, e, n, r, i), t;
	}
	if (e instanceof Error) {
		let t = structuredClone(e);
		return r.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, t.constructor = e.constructor, zo(t, e, n, r, i), t;
	}
	if (e instanceof Boolean) {
		let t = new Boolean(e.valueOf());
		return r.set(e, t), zo(t, e, n, r, i), t;
	}
	if (e instanceof Number) {
		let t = new Number(e.valueOf());
		return r.set(e, t), zo(t, e, n, r, i), t;
	}
	if (e instanceof String) {
		let t = new String(e.valueOf());
		return r.set(e, t), zo(t, e, n, r, i), t;
	}
	if (typeof e == "object" && Bo(e)) {
		let t = Object.create(Object.getPrototypeOf(e));
		return r.set(e, t), zo(t, e, n, r, i), t;
	}
	return e;
}
function zo(e, t, n = e, r, i) {
	let a = [...Object.keys(t), ...oo(t)];
	for (let o = 0; o < a.length; o++) {
		let s = a[o], c = Object.getOwnPropertyDescriptor(e, s);
		(c == null || c.writable) && (e[s] = Ro(t[s], s, n, r, i));
	}
}
function Bo(e) {
	switch (so(e)) {
		case po:
		case vo:
		case bo:
		case Co:
		case fo:
		case ho:
		case No:
		case Po:
		case ko:
		case Ao:
		case jo:
		case go:
		case uo:
		case xo:
		case co:
		case _o:
		case lo:
		case mo:
		case wo:
		case To:
		case Eo:
		case Do: return !0;
		default: return !1;
	}
}
// node_modules/es-toolkit/dist/object/cloneDeep.mjs
function Vo(e) {
	return Ro(e, void 0, e, /* @__PURE__ */ new Map(), void 0);
}
// node_modules/es-toolkit/dist/compat/util/eq.mjs
function Ho(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
// node_modules/es-toolkit/dist/compat/predicate/isObject.mjs
function Uo(e) {
	return e !== null && (typeof e == "object" || typeof e == "function");
}
// node_modules/es-toolkit/dist/compat/predicate/isMatchWith.mjs
function Wo(e, t, n) {
	return typeof n == "function" ? Go(e, t, function e(t, r, i, a, o, s) {
		let c = n(t, r, i, a, o, s);
		return c === void 0 ? Go(t, r, e, s, !1) : !!c;
	}, /* @__PURE__ */ new Map(), !0) : Wo(e, t, () => void 0);
}
function Go(e, t, n, r, i = !1) {
	if (t === e) return !0;
	switch (typeof t) {
		case "object": return Ko(e, t, n, r, i);
		case "function": return Object.keys(t).length > 0 ? Go(e, { ...t }, n, r, i) : Ho(e, t);
		default: return Uo(e) && i ? typeof t != "string" || t === "" : Ho(e, t);
	}
}
function Ko(e, t, n, r, i = !1) {
	if (t == null) return !0;
	if (Array.isArray(t)) return Jo(e, t, n, r);
	if (t instanceof Map) return qo(e, t, n, r);
	if (t instanceof Set) return Yo(e, t, n, r);
	let a = Object.keys(t);
	if (e == null) return i && a.length === 0;
	if (i) io(e) && (e = Object(e));
	else {
		let t = so(e);
		if (t !== "[object Object]" && t !== "[object Arguments]") return !1;
	}
	if (a.length === 0) return !0;
	if (r?.has(t)) return r.get(t) === e;
	r?.set(t, e);
	try {
		for (let i = 0; i < a.length; i++) {
			let o = a[i];
			if (!(o in e) || t[o] === void 0 && e[o] !== void 0 || t[o] === null && e[o] !== null || !n(e[o], t[o], o, e, t, r)) return !1;
		}
		return !0;
	} finally {
		r?.delete(t);
	}
}
function qo(e, t, n, r) {
	if (t.size === 0) return !0;
	if (!(e instanceof Map)) return !1;
	for (let [i, a] of t.entries()) if (n(e.get(i), a, i, e, t, r) === !1) return !1;
	return !0;
}
function Jo(e, t, n, r) {
	if (t.length === 0) return !0;
	if (!Array.isArray(e)) return !1;
	let i = /* @__PURE__ */ new Set();
	for (let a = 0; a < t.length; a++) {
		let o = t[a], s = !1;
		for (let c = 0; c < e.length; c++) {
			if (i.has(c)) continue;
			let l = e[c], u = !1;
			if (n(l, o, a, e, t, r) && (u = !0), u) {
				i.add(c), s = !0;
				break;
			}
		}
		if (!s) return !1;
	}
	return !0;
}
function Yo(e, t, n, r) {
	return t.size === 0 || e instanceof Set && Jo([...e], [...t], n, r);
}
// node_modules/es-toolkit/dist/compat/predicate/isMatch.mjs
function Xo(e, t) {
	return Wo(e, t, () => void 0);
}
// node_modules/es-toolkit/dist/compat/predicate/matches.mjs
function Zo(e) {
	return e = Vo(e), (t) => Xo(t, e);
}
// node_modules/es-toolkit/dist/compat/object/cloneDeepWith.mjs
function Qo(e, t) {
	return Lo(e, (n, r, i, a) => {
		let o = t?.(n, r, i, a);
		if (o !== void 0) return o;
		if (typeof e == "object") {
			if (so(e) === "[object Object]" && typeof e.constructor != "function") {
				let t = {};
				return a.set(e, t), zo(t, e, i, a), t;
			}
			switch (Object.prototype.toString.call(e)) {
				case uo:
				case lo:
				case fo: {
					let t = new e.constructor(e?.valueOf());
					return zo(t, e), t;
				}
				case po: {
					let t = {};
					return zo(t, e), t.length = e.length, t[Symbol.iterator] = e[Symbol.iterator], t;
				}
				default: return;
			}
		}
	});
}
// node_modules/es-toolkit/dist/compat/object/cloneDeep.mjs
function $o(e) {
	return Qo(e);
}
// node_modules/es-toolkit/dist/compat/_internal/isIndex.mjs
var es = /^(?:0|[1-9]\d*)$/;
function ts(e, t = 2 ** 53 - 1) {
	switch (typeof e) {
		case "number": return Number.isInteger(e) && e >= 0 && e < t;
		case "symbol": return !1;
		case "string": return es.test(e);
	}
}
// node_modules/es-toolkit/dist/compat/predicate/isArguments.mjs
function ns(e) {
	return typeof e == "object" && !!e && so(e) === "[object Arguments]";
}
// node_modules/es-toolkit/dist/compat/object/has.mjs
function rs(e, t) {
	let n;
	if (n = Array.isArray(t) ? t : typeof t == "string" && dr(t) && !(t in Object(e)) ? gr(t) : [t], n.length === 0) return !1;
	let r = e;
	for (let e = 0; e < n.length; e++) {
		let t = fr(n[e]);
		if ((r == null || !Object.hasOwn(r, t)) && !((Array.isArray(r) || ns(r)) && ts(t) && Number(t) < r.length)) return !1;
		r = r[t];
	}
	return !0;
}
// node_modules/es-toolkit/dist/compat/predicate/matchesProperty.mjs
function is(e, t) {
	switch (typeof e) {
		case "object":
			Object.is(e?.valueOf(), -0) && (e = "-0");
			break;
		case "number": e = fr(e);
	}
	return t = $o(t), function(n) {
		let r = _r(n, e);
		return r === void 0 ? rs(n, e) : t === void 0 ? r === void 0 : Xo(r, t);
	};
}
// node_modules/es-toolkit/dist/compat/util/iteratee.mjs
function as(e) {
	if (e == null) return eo;
	switch (typeof e) {
		case "function": return e;
		case "object": return Array.isArray(e) && e.length === 2 ? is(e[0], e[1]) : Zo(e);
		default: return ro(e);
	}
}
// node_modules/es-toolkit/dist/compat/_internal/normalizeZero.mjs
function os(e) {
	return e === 0 ? 0 : e;
}
// node_modules/es-toolkit/dist/compat/array/uniqBy.mjs
function ss(e, t = eo) {
	return no(e) ? Qa(Array.from(e), $a(as(t), 1)).map(os) : [];
}
// node_modules/recharts/es6/util/payload/getUniqPayload.js
function cs(e, t, n) {
	return t === !0 ? ss(e, n) : typeof t == "function" ? ss(e, t) : e;
}
// node_modules/recharts/es6/state/RechartsReduxContext.js
var ls = /*#__PURE__*/ (0, B.createContext)(null), us = gt(), ds = (e) => e, W = () => {
	var e = (0, B.useContext)(ls);
	return e ? e.store.dispatch : ds;
}, fs = () => {}, ps = () => fs, ms = (e, t) => e === t;
function G(e) {
	var t = (0, B.useContext)(ls), n = (0, B.useMemo)(() => t ? (t) => {
		if (t != null) return e(t);
	} : fs, [t, e]);
	return (0, us.useSyncExternalStoreWithSelector)(t ? t.subscription.addNestedSub : ps, t ? t.store.getState : fs, t ? t.store.getState : fs, n, ms);
}
// node_modules/reselect/dist/reselect.mjs
function hs(e, t = `expected a function, instead received ${typeof e}`) {
	if (typeof e != "function") throw TypeError(t);
}
function gs(e, t = "expected all items to be functions, instead received the following types: ") {
	if (!e.every((e) => typeof e == "function")) {
		let n = e.map((e) => typeof e == "function" ? `function ${e.name || "unnamed"}()` : typeof e).join(", ");
		throw TypeError(`${t}[${n}]`);
	}
}
var _s = (e) => Array.isArray(e) ? e : [e];
function vs(e) {
	let t = Array.isArray(e[0]) ? e[0] : e;
	return gs(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function ys(e, t) {
	let n = [], { length: r } = e;
	for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
	return n;
}
var bs = class {
	constructor(e) {
		this.value = e;
	}
	deref() {
		return this.value;
	}
}, xs = typeof WeakRef > "u" ? bs : WeakRef, Ss = 0, Cs = 1;
function ws() {
	return {
		s: Ss,
		v: void 0,
		o: null,
		p: null
	};
}
function Ts(e) {
	return e instanceof xs ? e.deref() : e;
}
function Es(e, t = {}) {
	let n = ws(), { resultEqualityCheck: r } = t, i, a = 0;
	function o() {
		let t = n, { length: o } = arguments;
		for (let e = 0, n = o; e < n; e++) {
			let n = arguments[e];
			if (typeof n == "function" || typeof n == "object" && n) {
				let e = t.o;
				e === null && (t.o = e = /* @__PURE__ */ new WeakMap());
				let r = e.get(n);
				r === void 0 ? (t = ws(), e.set(n, t)) : t = r;
			} else {
				let e = t.p;
				e === null && (t.p = e = /* @__PURE__ */ new Map());
				let r = e.get(n);
				r === void 0 ? (t = ws(), e.set(n, t)) : t = r;
			}
		}
		let s = t, c;
		if (t.s === Cs) c = t.v;
		else if (c = e.apply(null, arguments), a++, r) {
			let e = Ts(i);
			e != null && r(e, c) && (c = e, a !== 0 && a--), i = typeof c == "object" && c || typeof c == "function" ? /* @__PURE__ */ new xs(c) : c;
		}
		return s.s = Cs, s.v = c, c;
	}
	return o.clearCache = () => {
		n = ws(), o.resetResultsCount();
	}, o.resultsCount = () => a, o.resetResultsCount = () => {
		a = 0;
	}, o;
}
function Ds(e, ...t) {
	let n = typeof e == "function" ? {
		memoize: e,
		memoizeOptions: t
	} : e, r = (...e) => {
		let t = 0, r = 0, i, a = {}, o = e.pop();
		typeof o == "object" && (a = o, o = e.pop()), hs(o, `createSelector expects an output function after the inputs, but received: [${typeof o}]`);
		let { memoize: s, memoizeOptions: c = [], argsMemoize: l = Es, argsMemoizeOptions: u = [] } = {
			...n,
			...a
		}, d = _s(c), f = _s(u), p = vs(e), m = s(function() {
			return t++, o.apply(null, arguments);
		}, ...d), h = l(function() {
			r++;
			let e = ys(p, arguments);
			return i = m.apply(null, e), i;
		}, ...f);
		return Object.assign(h, {
			resultFunc: o,
			memoizedResultFunc: m,
			dependencies: p,
			dependencyRecomputations: () => r,
			resetDependencyRecomputations: () => {
				r = 0;
			},
			lastResult: () => i,
			recomputations: () => t,
			resetRecomputations: () => {
				t = 0;
			},
			memoize: s,
			argsMemoize: l
		});
	};
	return Object.assign(r, { withTypes: () => r }), r;
}
var K = /* @__PURE__ */ Ds(Es);
// node_modules/es-toolkit/dist/array/flatten.mjs
function Os(e, t = 1) {
	let n = [], r = Math.floor(t), i = (e, t) => {
		for (let a = 0; a < e.length; a++) {
			let o = e[a];
			Array.isArray(o) && t < r ? i(o, t + 1) : n.push(o);
		}
	};
	return i(e, 0), n;
}
// node_modules/es-toolkit/dist/compat/_internal/isIterateeCall.mjs
function ks(e, t, n) {
	return Uo(n) && (typeof t == "number" && no(n) && ts(t) && t < n.length || typeof t == "string" && t in n) ? Ho(n[t], e) : !1;
}
// node_modules/es-toolkit/dist/compat/_internal/compareValues.mjs
function As(e) {
	return typeof e == "symbol" ? 1 : e === null ? 2 : e === void 0 ? 3 : e === e ? 0 : 4;
}
var js = (e, t, n) => {
	if (e !== t) {
		let r = As(e), i = As(t);
		if (r === i && r === 0) {
			if (e < t) return n === "desc" ? 1 : -1;
			if (e > t) return n === "desc" ? -1 : 1;
		}
		return n === "desc" ? i - r : r - i;
	}
	return 0;
}, Ms = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ns = /^\w*$/;
function Ps(e, t) {
	return Array.isArray(e) ? !1 : typeof e == "number" || typeof e == "boolean" || e == null || pr(e) ? !0 : typeof e == "string" && (Ns.test(e) || !Ms.test(e)) || t != null && Object.hasOwn(t, e);
}
// node_modules/es-toolkit/dist/compat/array/orderBy.mjs
function Fs(e, t, n, r) {
	if (e == null) return [];
	n = r ? void 0 : n, Array.isArray(e) || (e = no(e) ? Array.from(e) : Object.values(e)), Array.isArray(t) || (t = t == null ? [null] : [t]), t.length === 0 && (t = [null]), Array.isArray(n) || (n = n == null ? [] : [n]), n = n.map((e) => String(e));
	let i = (e, t) => {
		let n = e, r = 0;
		for (; r < t.length && n != null; ++r) n = n[t[r]];
		return r > 0 && r === t.length ? n : void 0;
	}, a = (e, t) => {
		if (e == null) return t;
		if (t != null) return typeof e == "object" && "key" in e ? Object.hasOwn(t, e.key) ? t[e.key] : i(t, e.path) : typeof e == "function" ? e(t) : Array.isArray(e) ? i(t, e) : t[e];
	}, o = t.map((e) => (Array.isArray(e) && e.length === 1 && (e = e[0]), e == null || typeof e == "function" || Array.isArray(e) || Ps(e) ? e : {
		key: e,
		path: gr(e)
	}));
	return e.map((e) => ({
		original: e,
		criteria: o.map((t) => a(t, e))
	})).slice().sort((e, t) => {
		for (let r = 0; r < o.length; r++) {
			let i = js(e.criteria[r], t.criteria[r], n[r]);
			if (i !== 0) return i;
		}
		return 0;
	}).map((e) => e.original);
}
// node_modules/es-toolkit/dist/compat/array/sortBy.mjs
function Is(e, ...t) {
	let n = t.length;
	return n > 1 && ks(e, t[0], t[1]) ? t = [] : n > 2 && ks(t[0], t[1], t[2]) && (t = [t[0]]), Fs(e, Os(t), ["asc"]);
}
// node_modules/recharts/es6/state/selectors/legendSelectors.js
var Ls = (e) => e.legend.settings, Rs = (e) => e.legend.size, zs = K([(e) => e.legend.payload, Ls], (e, t) => {
	var n = t.itemSorter, r = e.flat(1);
	return n ? Is(r, n) : r;
});
// node_modules/recharts/es6/context/legendPayloadContext.js
function Bs() {
	return G(zs);
}
// node_modules/recharts/es6/util/useElementOffset.js
function Vs(e, t) {
	return Ks(e) || Gs(e, t) || Us(e, t) || Hs();
}
function Hs() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Us(e, t) {
	if (e) {
		if (typeof e == "string") return Ws(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ws(e, t) : void 0;
	}
}
function Ws(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Gs(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Ks(e) {
	if (Array.isArray(e)) return e;
}
var qs = 1;
function Js(e, t) {
	return Math.abs(e.height - t.height) > qs || Math.abs(e.left - t.left) > qs || Math.abs(e.top - t.top) > qs || Math.abs(e.width - t.width) > qs;
}
function Ys(e) {
	var t = e.getBoundingClientRect();
	return {
		height: t.height,
		left: t.left,
		top: t.top,
		width: t.width
	};
}
function Xs() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = Vs((0, B.useState)({
		height: 0,
		left: 0,
		top: 0,
		width: 0
	}), 2), n = t[0], r = t[1], i = (0, B.useRef)(null), a = (0, B.useRef)(n);
	a.current = n;
	var o = (0, B.useCallback)((e) => {
		if (i.current != null && (i.current.disconnect(), i.current = null), e != null) {
			var t = Ys(e);
			if (Js(t, a.current) && r(t), typeof ResizeObserver < "u") {
				var n = new ResizeObserver(() => {
					var t = Ys(e);
					Js(t, a.current) && r(t);
				});
				n.observe(e), i.current = n;
			}
		}
	}, [...e]);
	return (0, B.useEffect)(() => () => {
		var e;
		(e = i.current) == null || e.disconnect();
	}, []), [n, o];
}
// node_modules/redux/dist/redux.mjs
function Zs(e) {
	return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Qs = typeof Symbol == "function" && Symbol.observable || "@@observable", $s = () => Math.random().toString(36).substring(7).split("").join("."), ec = {
	INIT: `@@redux/INIT${/* @__PURE__ */ $s()}`,
	REPLACE: `@@redux/REPLACE${/* @__PURE__ */ $s()}`,
	PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${$s()}`
};
function tc(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function nc(e, t, n) {
	if (typeof e != "function") throw Error(Zs(2));
	if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw Error(Zs(0));
	if (typeof t == "function" && n === void 0 && (n = t, t = void 0), n !== void 0) {
		if (typeof n != "function") throw Error(Zs(1));
		return n(nc)(e, t);
	}
	let r = e, i = t, a = /* @__PURE__ */ new Map(), o = a, s = 0, c = !1;
	function l() {
		o === a && (o = /* @__PURE__ */ new Map(), a.forEach((e, t) => {
			o.set(t, e);
		}));
	}
	function u() {
		if (c) throw Error(Zs(3));
		return i;
	}
	function d(e) {
		if (typeof e != "function") throw Error(Zs(4));
		if (c) throw Error(Zs(5));
		let t = !0;
		l();
		let n = s++;
		return o.set(n, e), function() {
			if (t) {
				if (c) throw Error(Zs(6));
				t = !1, l(), o.delete(n), a = null;
			}
		};
	}
	function f(e) {
		if (!tc(e)) throw Error(Zs(7));
		if (e.type === void 0) throw Error(Zs(8));
		if (typeof e.type != "string") throw Error(Zs(17));
		if (c) throw Error(Zs(9));
		try {
			c = !0, i = r(i, e);
		} finally {
			c = !1;
		}
		return (a = o).forEach((e) => {
			e();
		}), e;
	}
	function p(e) {
		if (typeof e != "function") throw Error(Zs(10));
		r = e, f({ type: ec.REPLACE });
	}
	function m() {
		let e = d;
		return {
			subscribe(t) {
				if (typeof t != "object" || !t) throw Error(Zs(11));
				function n() {
					let e = t;
					e.next && e.next(u());
				}
				return n(), { unsubscribe: e(n) };
			},
			[Qs]() {
				return this;
			}
		};
	}
	return f({ type: ec.INIT }), {
		dispatch: f,
		subscribe: d,
		getState: u,
		replaceReducer: p,
		[Qs]: m
	};
}
function rc(e) {
	Object.keys(e).forEach((t) => {
		let n = e[t];
		if (n(void 0, { type: ec.INIT }) === void 0) throw Error(Zs(12));
		if (n(void 0, { type: ec.PROBE_UNKNOWN_ACTION() }) === void 0) throw Error(Zs(13));
	});
}
function ic(e) {
	let t = Object.keys(e), n = {};
	for (let r = 0; r < t.length; r++) {
		let i = t[r];
		typeof e[i] == "function" && (n[i] = e[i]);
	}
	let r = Object.keys(n), i;
	try {
		rc(n);
	} catch (e) {
		i = e;
	}
	return function(e = {}, t) {
		if (i) throw i;
		let a = !1, o = {};
		for (let i = 0; i < r.length; i++) {
			let s = r[i], c = n[s], l = e[s], u = c(l, t);
			if (u === void 0) throw t && t.type, Error(Zs(14));
			o[s] = u, a ||= u !== l;
		}
		return a ||= r.length !== Object.keys(e).length, a ? o : e;
	};
}
function ac(...e) {
	return e.length === 0 ? (e) => e : e.length === 1 ? e[0] : e.reduce((e, t) => (...n) => e(t(...n)));
}
function oc(...e) {
	return (t) => (n, r) => {
		let i = t(n, r), a = () => {
			throw Error(Zs(15));
		}, o = {
			getState: i.getState,
			dispatch: (e, ...t) => a(e, ...t)
		};
		return a = ac(...e.map((e) => e(o)))(i.dispatch), {
			...i,
			dispatch: a
		};
	};
}
function sc(e) {
	return tc(e) && "type" in e && typeof e.type == "string";
}
// node_modules/immer/dist/immer.mjs
var cc = Symbol.for("immer-nothing"), lc = Symbol.for("immer-draftable"), uc = Symbol.for("immer-state");
function dc(e, ...t) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var fc = Object, pc = fc.getPrototypeOf, mc = "constructor", hc = "prototype", gc = "configurable", _c = "enumerable", vc = "writable", yc = "value", bc = (e) => !!e && !!e[uc];
function xc(e) {
	return e ? wc(e) || jc(e) || !!e[lc] || !!e[mc]?.[lc] || Mc(e) || Nc(e) : !1;
}
var Sc = fc[hc][mc].toString(), Cc = /* @__PURE__ */ new WeakMap();
function wc(e) {
	if (!e || !Pc(e)) return !1;
	let t = pc(e);
	if (t === null || t === fc[hc]) return !0;
	let n = fc.hasOwnProperty.call(t, mc) && t[mc];
	if (n === Object) return !0;
	if (!Fc(n)) return !1;
	let r = Cc.get(n);
	return r === void 0 && (r = Function.toString.call(n), Cc.set(n, r)), r === Sc;
}
function Tc(e, t, n = !0) {
	Ec(e) === 0 ? (n ? Reflect.ownKeys(e) : fc.keys(e)).forEach((n) => {
		t(n, e[n], e);
	}) : e.forEach((n, r) => t(r, n, e));
}
function Ec(e) {
	let t = e[uc];
	return t ? t.type_ : jc(e) ? 1 : Mc(e) ? 2 : Nc(e) ? 3 : 0;
}
var Dc = (e, t, n = Ec(e)) => n === 2 ? e.has(t) : fc[hc].hasOwnProperty.call(e, t), Oc = (e, t, n = Ec(e)) => n === 2 ? e.get(t) : e[t], kc = (e, t, n, r = Ec(e)) => {
	r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
};
function Ac(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var jc = Array.isArray, Mc = (e) => e instanceof Map, Nc = (e) => e instanceof Set, Pc = (e) => typeof e == "object", Fc = (e) => typeof e == "function", Ic = (e) => typeof e == "boolean";
function Lc(e) {
	let t = +e;
	return Number.isInteger(t) && String(t) === e;
}
var Rc = (e) => e.copy_ || e.base_, zc = (e) => e.modified_ ? e.copy_ : e.base_;
function Bc(e, t) {
	if (Mc(e)) return new Map(e);
	if (Nc(e)) return new Set(e);
	if (jc(e)) return Array[hc].slice.call(e);
	let n = wc(e);
	if (t === !0 || t === "class_only" && !n) {
		let t = fc.getOwnPropertyDescriptors(e);
		delete t[uc];
		let n = Reflect.ownKeys(t);
		for (let r = 0; r < n.length; r++) {
			let i = n[r], a = t[i];
			a[vc] === !1 && (a[vc] = !0, a[gc] = !0), (a.get || a.set) && (t[i] = {
				[gc]: !0,
				[vc]: !0,
				[_c]: a[_c],
				[yc]: e[i]
			});
		}
		return fc.create(pc(e), t);
	}
	{
		let t = pc(e);
		if (t !== null && n) return { ...e };
		let r = fc.create(t);
		return fc.assign(r, e);
	}
}
function Vc(e, t = !1) {
	return Wc(e) || bc(e) || !xc(e) || (Ec(e) > 1 && fc.defineProperties(e, {
		set: Uc,
		add: Uc,
		clear: Uc,
		delete: Uc
	}), fc.freeze(e), t && Tc(e, (e, t) => {
		Vc(t, !0);
	}, !1)), e;
}
function Hc() {
	dc(2);
}
var Uc = { [yc]: Hc };
function Wc(e) {
	return e === null || !Pc(e) || fc.isFrozen(e);
}
var Gc = "MapSet", Kc = "Patches", qc = "ArrayMethods", Jc = {};
function Yc(e) {
	let t = Jc[e];
	return t || dc(0, e), t;
}
var Xc = (e) => !!Jc[e], Zc, Qc = () => Zc, $c = (e, t) => ({
	drafts_: [],
	parent_: e,
	immer_: t,
	canAutoFreeze_: !0,
	unfinalizedDrafts_: 0,
	handledSet_: /* @__PURE__ */ new Set(),
	processedForPatches_: /* @__PURE__ */ new Set(),
	mapSetPlugin_: Xc(Gc) ? Yc(Gc) : void 0,
	arrayMethodsPlugin_: Xc(qc) ? Yc(qc) : void 0
});
function el(e, t) {
	t && (e.patchPlugin_ = Yc(Kc), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function tl(e) {
	nl(e), e.drafts_.forEach(il), e.drafts_ = null;
}
function nl(e) {
	e === Zc && (Zc = e.parent_);
}
var rl = (e) => Zc = $c(Zc, e);
function il(e) {
	let t = e[uc];
	t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function al(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let n = t.drafts_[0];
	if (e !== void 0 && e !== n) {
		n[uc].modified_ && (tl(t), dc(4)), xc(e) && (e = ol(t, e));
		let { patchPlugin_: r } = t;
		r && r.generateReplacementPatches_(n[uc].base_, e, t);
	} else e = ol(t, n);
	return sl(t, e, !0), tl(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e === cc ? void 0 : e;
}
function ol(e, t) {
	if (Wc(t)) return t;
	let n = t[uc];
	if (!n) return hl(t, e.handledSet_, e);
	if (!ll(n, e)) return t;
	if (!n.modified_) return n.base_;
	if (!n.finalized_) {
		let { callbacks_: t } = n;
		if (t) for (; t.length > 0;) t.pop()(e);
		pl(n, e);
	}
	return n.copy_;
}
function sl(e, t, n = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Vc(t, n);
}
function cl(e) {
	e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var ll = (e, t) => e.scope_ === t, ul = [];
function dl(e, t, n, r) {
	let i = Rc(e), a = e.type_;
	if (r !== void 0 && Oc(i, r, a) === t) {
		kc(i, r, n, a);
		return;
	}
	if (!e.draftLocations_) {
		let t = e.draftLocations_ = /* @__PURE__ */ new Map();
		Tc(i, (e, n) => {
			if (bc(n)) {
				let r = t.get(n) || [];
				r.push(e), t.set(n, r);
			}
		});
	}
	let o = e.draftLocations_.get(t) ?? ul;
	for (let e of o) kc(i, e, n, a);
}
function fl(e, t, n) {
	e.callbacks_.push(function(r) {
		let i = t;
		if (!i || !ll(i, r)) return;
		r.mapSetPlugin_?.fixSetContents(i);
		let a = zc(i);
		dl(e, i.draft_ ?? i, a, n), pl(i, r);
	});
}
function pl(e, t) {
	if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
		let { patchPlugin_: n } = t;
		if (n) {
			let r = n.getPath(e);
			r && n.generatePatches_(e, r, t);
		}
		cl(e);
	}
}
function ml(e, t, n) {
	let { scope_: r } = e;
	if (bc(n)) {
		let i = n[uc];
		ll(i, r) && i.callbacks_.push(function() {
			wl(e), dl(e, n, zc(i), t);
		});
	} else xc(n) && e.callbacks_.push(function() {
		let i = Rc(e);
		e.type_ === 3 ? i.has(n) && hl(n, r.handledSet_, r) : Oc(i, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && hl(Oc(e.copy_, t, e.type_), r.handledSet_, r);
	});
}
function hl(e, t, n) {
	return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || bc(e) || t.has(e) || !xc(e) || Wc(e) || (t.add(e), Tc(e, (r, i) => {
		if (bc(i)) {
			let t = i[uc];
			ll(t, n) && (kc(e, r, zc(t), e.type_), cl(t));
		} else xc(i) && hl(i, t, n);
	})), e;
}
function gl(e, t) {
	let n = jc(e), r = {
		type_: +!!n,
		scope_: t ? t.scope_ : Qc(),
		modified_: !1,
		finalized_: !1,
		assigned_: void 0,
		parent_: t,
		base_: e,
		draft_: null,
		copy_: null,
		revoke_: null,
		isManual_: !1,
		callbacks_: void 0
	}, i = r, a = _l;
	n && (i = [r], a = vl);
	let { revoke: o, proxy: s } = Proxy.revocable(i, a);
	return r.draft_ = s, r.revoke_ = o, [s, r];
}
var _l = {
	get(e, t) {
		if (t === uc) return e;
		let n = e.scope_.arrayMethodsPlugin_, r = e.type_ === 1 && typeof t == "string";
		if (r && n?.isArrayOperationMethod(t)) return n.createMethodInterceptor(e, t);
		let i = Rc(e);
		if (!Dc(i, t, e.type_)) return xl(e, i, t);
		let a = i[t];
		if (e.finalized_ || !xc(a) || r && e.operationMethod && n?.isMutatingArrayMethod(e.operationMethod) && Lc(t)) return a;
		if (a === yl(e.base_, t) || bl(e, t, a)) {
			wl(e);
			let n = e.type_ === 1 ? +t : t, r = El(e.scope_, a, e, n);
			return e.copy_[n] = r;
		}
		return a;
	},
	has(e, t) {
		return t in Rc(e);
	},
	ownKeys(e) {
		return Reflect.ownKeys(Rc(e));
	},
	set(e, t, n) {
		let r = Sl(Rc(e), t);
		if (r?.set) return r.set.call(e.draft_, n), !0;
		if (!e.modified_) {
			let r = yl(Rc(e), t), i = r?.[uc];
			if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_.delete(t), !0;
			if (Ac(n, r) && (n !== void 0 || Dc(e.base_, t, e.type_))) return !0;
			wl(e), Cl(e);
		}
		return e.copy_[t] === n && (n !== void 0 || Dc(e.copy_, t, e.type_)) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_.set(t, !0), ml(e, t, n)), !0;
	},
	deleteProperty(e, t) {
		return wl(e), yl(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), Cl(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = Rc(e), r = Reflect.getOwnPropertyDescriptor(n, t);
		return r && {
			[vc]: !0,
			[gc]: e.type_ !== 1 || t !== "length",
			[_c]: r[_c],
			[yc]: n[t]
		};
	},
	defineProperty() {
		dc(11);
	},
	getPrototypeOf(e) {
		return pc(e.base_);
	},
	setPrototypeOf() {
		dc(12);
	}
}, vl = {};
for (let e in _l) {
	let t = _l[e];
	vl[e] = function() {
		let e = arguments;
		return e[0] = e[0][0], t.apply(this, e);
	};
}
vl.deleteProperty = function(e, t) {
	return vl.set.call(this, e, t, void 0);
}, vl.set = function(e, t, n) {
	return _l.set.call(this, e[0], t, n, e[0]);
};
function yl(e, t) {
	let n = e[uc];
	return (n ? Rc(n) : e)[t];
}
function bl(e, t, n) {
	return e.type_ !== 1 || !e.allIndicesReassigned_ || e.assigned_?.get(t) || !xc(n) || n[uc] ? !1 : e.baseRefs_.has(n);
}
function xl(e, t, n) {
	let r = Sl(t, n);
	return r ? yc in r ? r[yc] : r.get?.call(e.draft_) : void 0;
}
function Sl(e, t) {
	if (!(t in e)) return;
	let n = pc(e);
	for (; n;) {
		let e = Object.getOwnPropertyDescriptor(n, t);
		if (e) return e;
		n = pc(n);
	}
}
function Cl(e) {
	e.modified_ || (e.modified_ = !0, e.parent_ && Cl(e.parent_));
}
function wl(e) {
	e.copy_ ||= (e.assigned_ = /* @__PURE__ */ new Map(), Bc(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Tl = class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (e, t, n) => {
			if (Fc(e) && !Fc(t)) {
				let n = t;
				t = e;
				let r = this;
				return function(e = n, ...i) {
					return r.produce(e, (e) => t.call(this, e, ...i));
				};
			}
			Fc(t) || dc(6), n !== void 0 && !Fc(n) && dc(7);
			let r;
			if (xc(e)) {
				let i = rl(this), a = El(i, e, void 0), o = !0;
				try {
					r = t(a), o = !1;
				} finally {
					o ? tl(i) : nl(i);
				}
				return el(i, n), al(r, i);
			}
			if (!e || !Pc(e)) {
				if (r = t(e), r === void 0 && (r = e), r === cc && (r = void 0), this.autoFreeze_ && Vc(r, !0), n) {
					let t = [], i = [];
					Yc(Kc).generateReplacementPatches_(e, r, {
						patches_: t,
						inversePatches_: i
					}), n(t, i);
				}
				return r;
			}
			dc(1, e);
		}, this.produceWithPatches = (e, t) => {
			if (Fc(e)) return (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n));
			let n, r;
			return [
				this.produce(e, t, (e, t) => {
					n = e, r = t;
				}),
				n,
				r
			];
		}, Ic(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze), Ic(e?.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), Ic(e?.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
	}
	createDraft(e) {
		xc(e) || dc(8), bc(e) && (e = Dl(e));
		let t = rl(this), n = El(t, e, void 0);
		return n[uc].isManual_ = !0, nl(t), n;
	}
	finishDraft(e, t) {
		let n = e && e[uc];
		n && n.isManual_ || dc(9);
		let { scope_: r } = n;
		return el(r, t), al(void 0, r);
	}
	setAutoFreeze(e) {
		this.autoFreeze_ = e;
	}
	setUseStrictShallowCopy(e) {
		this.useStrictShallowCopy_ = e;
	}
	setUseStrictIteration(e) {
		this.useStrictIteration_ = e;
	}
	shouldUseStrictIteration() {
		return this.useStrictIteration_;
	}
	applyPatches(e, t) {
		let n;
		for (n = t.length - 1; n >= 0; n--) {
			let r = t[n];
			if (r.path.length === 0 && r.op === "replace") {
				e = r.value;
				break;
			}
		}
		n > -1 && (t = t.slice(n + 1));
		let r = Yc(Kc).applyPatches_;
		return bc(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
	}
};
function El(e, t, n, r) {
	let [i, a] = Mc(t) ? Yc(Gc).proxyMap_(t, n) : Nc(t) ? Yc(Gc).proxySet_(t, n) : gl(t, n);
	return (n?.scope_ ?? Qc()).drafts_.push(i), a.callbacks_ = n?.callbacks_ ?? [], a.key_ = r, n && r !== void 0 ? fl(n, a, r) : a.callbacks_.push(function(e) {
		e.mapSetPlugin_?.fixSetContents(a);
		let { patchPlugin_: t } = e;
		a.modified_ && t && t.generatePatches_(a, [], e);
	}), i;
}
function Dl(e) {
	return bc(e) || dc(10, e), Ol(e);
}
function Ol(e) {
	if (!xc(e) || Wc(e)) return e;
	let t = e[uc], n, r = !0;
	if (t) {
		if (!t.modified_) return t.base_;
		t.finalized_ = !0, n = Bc(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
	} else n = Bc(e, !0);
	return Tc(n, (e, t) => {
		kc(n, e, Ol(t));
	}, r), t && (t.finalized_ = !1), n;
}
globalThis.Iterator?.from;
var kl = new Tl().produce, q = (e) => e;
// node_modules/redux-thunk/dist/redux-thunk.mjs
function Al(e) {
	return ({ dispatch: t, getState: n }) => (r) => (i) => typeof i == "function" ? i(t, n, e) : r(i);
}
var jl = Al(), Ml = Al, Nl = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
	if (arguments.length !== 0) return typeof arguments[0] == "object" ? ac : ac.apply(null, arguments);
};
typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
function Pl(e, t) {
	function n(...n) {
		if (t) {
			let r = t(...n);
			if (!r) throw Error(Hu(0));
			return {
				type: e,
				payload: r.payload,
				..."meta" in r && { meta: r.meta },
				..."error" in r && { error: r.error }
			};
		}
		return {
			type: e,
			payload: n[0]
		};
	}
	return n.toString = () => `${e}`, n.type = e, n.match = (t) => sc(t) && t.type === e, n;
}
var Fl = class e extends Array {
	constructor(...t) {
		super(...t), Object.setPrototypeOf(this, e.prototype);
	}
	static get [Symbol.species]() {
		return e;
	}
	concat(...e) {
		return super.concat.apply(this, e);
	}
	prepend(...t) {
		return t.length === 1 && Array.isArray(t[0]) ? new e(...t[0].concat(this)) : new e(...t.concat(this));
	}
};
function Il(e) {
	return xc(e) ? kl(e, () => {}) : e;
}
function Ll(e, t, n) {
	return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function Rl(e) {
	return typeof e == "boolean";
}
var zl = () => function(e) {
	let { thunk: t = !0, immutableCheck: n = !0, serializableCheck: r = !0, actionCreatorCheck: i = !0 } = e ?? {}, a = new Fl();
	return t && (Rl(t) ? a.push(jl) : a.push(Ml(t.extraArgument))), a;
}, Bl = "RTK_autoBatch", J = () => (e) => ({
	payload: e,
	meta: { [Bl]: !0 }
}), Vl = (e) => (t) => {
	setTimeout(t, e);
}, Hl = (e, t) => (n) => {
	let r = !1, i = () => {
		r || (r = !0, cancelAnimationFrame(a), clearTimeout(o), n());
	}, a = e(i), o = setTimeout(i, t);
}, Ul = (e = { type: "raf" }) => (t) => (...n) => {
	let r = t(...n), i = !0, a = !1, o = !1, s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? Hl(window.requestAnimationFrame, 100) : Vl(10) : e.type === "callback" ? e.queueNotification : Vl(e.timeout), l = () => {
		o = !1, a && (a = !1, s.forEach((e) => e()));
	};
	return Object.assign({}, r, {
		subscribe(e) {
			let t = r.subscribe(() => i && e());
			return s.add(e), () => {
				t(), s.delete(e);
			};
		},
		dispatch(e) {
			try {
				return i = !e?.meta?.[Bl], a = !i, a && (o || (o = !0, c(l))), r.dispatch(e);
			} finally {
				i = !0;
			}
		}
	});
}, Wl = (e) => function(t) {
	let { autoBatch: n = !0 } = t ?? {}, r = new Fl(e);
	return n && r.push(Ul(typeof n == "object" ? n : void 0)), r;
};
function Gl(e) {
	let t = zl(), { reducer: n = void 0, middleware: r, devTools: i = !0, duplicateMiddlewareCheck: a = !0, preloadedState: o = void 0, enhancers: s = void 0 } = e || {}, c;
	if (typeof n == "function") c = n;
	else if (tc(n)) c = ic(n);
	else throw Error(Hu(1));
	let l;
	l = typeof r == "function" ? r(t) : t();
	let u = ac;
	i && (u = Nl({
		trace: !1,
		...typeof i == "object" && i
	}));
	let d = Wl(oc(...l)), f = typeof s == "function" ? s(d) : d(), p = u(...f);
	return nc(c, o, p);
}
function Kl(e) {
	let t = {}, n = [], r, i = {
		addCase(e, n) {
			let r = typeof e == "string" ? e : e.type;
			if (!r) throw Error(Hu(28));
			if (r in t) throw Error(Hu(29));
			return t[r] = n, i;
		},
		addAsyncThunk(e, r) {
			return r.pending && (t[e.pending.type] = r.pending), r.rejected && (t[e.rejected.type] = r.rejected), r.fulfilled && (t[e.fulfilled.type] = r.fulfilled), r.settled && n.push({
				matcher: e.settled,
				reducer: r.settled
			}), i;
		},
		addMatcher(e, t) {
			return n.push({
				matcher: e,
				reducer: t
			}), i;
		},
		addDefaultCase(e) {
			return r = e, i;
		}
	};
	return e(i), [
		t,
		n,
		r
	];
}
function ql(e) {
	return typeof e == "function";
}
function Jl(e, t) {
	let [n, r, i] = Kl(t), a;
	if (ql(e)) a = () => Il(e());
	else {
		let t = Il(e);
		a = () => t;
	}
	function o(e = a(), t) {
		let o = [n[t.type], ...r.filter(({ matcher: e }) => e(t)).map(({ reducer: e }) => e)];
		return o.filter((e) => !!e).length === 0 && (o = [i]), o.reduce((e, n) => {
			if (n) {
				if (bc(e)) {
					let r = n(e, t);
					return r === void 0 ? e : r;
				}
				if (xc(e)) return kl(e, (e) => n(e, t));
				{
					let r = n(e, t);
					if (r === void 0) {
						if (e === null) return e;
						throw Error("A case reducer on a non-draftable value must not return undefined");
					}
					return r;
				}
			}
			return e;
		}, e);
	}
	return o.getInitialState = a, o;
}
var Yl = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Xl = (e = 21) => {
	let t = "", n = e;
	for (; n--;) t += Yl[Math.random() * 64 | 0];
	return t;
}, Zl = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Ql(e, t) {
	return `${e}/${t}`;
}
function $l({ creators: e } = {}) {
	let t = e?.asyncThunk?.[Zl];
	return function(e) {
		let { name: n, reducerPath: r = n } = e;
		if (!n) throw Error(Hu(11));
		let i = (typeof e.reducers == "function" ? e.reducers(nu()) : e.reducers) || {}, a = Object.keys(i), o = {
			sliceCaseReducersByName: {},
			sliceCaseReducersByType: {},
			actionCreators: {},
			sliceMatchers: []
		}, s = {
			addCase(e, t) {
				let n = typeof e == "string" ? e : e.type;
				if (!n) throw Error(Hu(12));
				if (n in o.sliceCaseReducersByType) throw Error(Hu(13));
				return o.sliceCaseReducersByType[n] = t, s;
			},
			addMatcher(e, t) {
				return o.sliceMatchers.push({
					matcher: e,
					reducer: t
				}), s;
			},
			exposeAction(e, t) {
				return o.actionCreators[e] = t, s;
			},
			exposeCaseReducer(e, t) {
				return o.sliceCaseReducersByName[e] = t, s;
			}
		};
		a.forEach((r) => {
			let a = i[r], o = {
				reducerName: r,
				type: Ql(n, r),
				createNotation: typeof e.reducers == "function"
			};
			iu(a) ? ou(o, a, s, t) : ru(o, a, s);
		});
		function c() {
			let [t = {}, n = [], r = void 0] = typeof e.extraReducers == "function" ? Kl(e.extraReducers) : [e.extraReducers], i = {
				...t,
				...o.sliceCaseReducersByType
			};
			return Jl(e.initialState, (e) => {
				for (let t in i) e.addCase(t, i[t]);
				for (let t of o.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
				for (let t of n) e.addMatcher(t.matcher, t.reducer);
				r && e.addDefaultCase(r);
			});
		}
		let l = (e) => e, u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new WeakMap(), f;
		function p(e, t) {
			return f ||= c(), f(e, t);
		}
		function m() {
			return f ||= c(), f.getInitialState();
		}
		function h(t, n = !1) {
			function r(e) {
				let i = e[t];
				return i === void 0 && n && (i = Ll(d, r, m)), i;
			}
			function i(t = l) {
				return Ll(Ll(u, n, () => /* @__PURE__ */ new WeakMap()), t, () => {
					let r = {};
					for (let [i, a] of Object.entries(e.selectors ?? {})) r[i] = eu(a, t, () => Ll(d, t, m), n);
					return r;
				});
			}
			return {
				reducerPath: t,
				getSelectors: i,
				get selectors() {
					return i(r);
				},
				selectSlice: r
			};
		}
		let g = {
			name: n,
			reducer: p,
			actions: o.actionCreators,
			caseReducers: o.sliceCaseReducersByName,
			getInitialState: m,
			...h(r),
			injectInto(e, { reducerPath: t, ...n } = {}) {
				let i = t ?? r;
				return e.inject({
					reducerPath: i,
					reducer: p
				}, n), {
					...g,
					...h(i, !0)
				};
			}
		};
		return g;
	};
}
function eu(e, t, n, r) {
	function i(i, ...a) {
		let o = t(i);
		return o === void 0 && r && (o = n()), e(o, ...a);
	}
	return i.unwrapped = e, i;
}
var tu = /* @__PURE__ */ $l();
function nu() {
	function e(e, t) {
		return {
			_reducerDefinitionType: "asyncThunk",
			payloadCreator: e,
			...t
		};
	}
	return e.withTypes = () => e, {
		reducer(e) {
			return Object.assign({ [e.name](...t) {
				return e(...t);
			} }[e.name], { _reducerDefinitionType: "reducer" });
		},
		preparedReducer(e, t) {
			return {
				_reducerDefinitionType: "reducerWithPrepare",
				prepare: e,
				reducer: t
			};
		},
		asyncThunk: e
	};
}
function ru({ type: e, reducerName: t, createNotation: n }, r, i) {
	let a, o;
	if ("reducer" in r) {
		if (n && !au(r)) throw Error(Hu(17));
		a = r.reducer, o = r.prepare;
	} else a = r;
	i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, o ? Pl(e, o) : Pl(e));
}
function iu(e) {
	return e._reducerDefinitionType === "asyncThunk";
}
function au(e) {
	return e._reducerDefinitionType === "reducerWithPrepare";
}
function ou({ type: e, reducerName: t }, n, r, i) {
	if (!i) throw Error(Hu(18));
	let { payloadCreator: a, fulfilled: o, pending: s, rejected: c, settled: l, options: u } = n, d = i(e, a, u);
	r.exposeAction(t, d), o && r.addCase(d.fulfilled, o), s && r.addCase(d.pending, s), c && r.addCase(d.rejected, c), l && r.addMatcher(d.settled, l), r.exposeCaseReducer(t, {
		fulfilled: o || su,
		pending: s || su,
		rejected: c || su,
		settled: l || su
	});
}
function su() {}
var cu = "task", lu = "listener", uu = "completed", du = "cancelled", fu = `task-${du}`, pu = `task-${uu}`, mu = `${lu}-${du}`, hu = `${lu}-${uu}`, gu = class {
	constructor(e) {
		this.code = e, this.message = `${cu} ${du} (reason: ${e})`;
	}
	code;
	name = "TaskAbortError";
	message;
}, _u = (e, t) => {
	if (typeof e != "function") throw TypeError(Hu(32));
}, vu = () => {}, yu = (e, t = vu) => (e.catch(t), e), bu = (e, t) => (e.addEventListener("abort", t, { once: !0 }), () => e.removeEventListener("abort", t)), xu = (e) => {
	if (e.aborted) throw new gu(e.reason);
};
function Su(e, t) {
	let n = vu;
	return new Promise((r, i) => {
		let a = () => i(new gu(e.reason));
		e.aborted ? a() : (n = bu(e, a), t.finally(() => n()).then(r, i));
	}).finally(() => {
		n = vu;
	});
}
var Cu = async (e, t) => {
	try {
		return await Promise.resolve(), {
			status: "ok",
			value: await e()
		};
	} catch (e) {
		return {
			status: e instanceof gu ? "cancelled" : "rejected",
			error: e
		};
	} finally {
		t?.();
	}
}, wu = (e) => (t) => yu(Su(e, t).then((t) => (xu(e), t))), Tu = (e) => {
	let t = wu(e);
	return (e) => t(new Promise((t) => setTimeout(t, e)));
}, { assign: Eu } = Object, Du = {}, Ou = "listenerMiddleware", ku = (e, t) => {
	let n = (t) => bu(e, () => t.abort(e.reason));
	return (r, i) => {
		_u(r, "taskExecutor");
		let a = new AbortController();
		n(a);
		let o = Cu(async () => {
			xu(e), xu(a.signal);
			let t = await r({
				pause: wu(a.signal),
				delay: Tu(a.signal),
				signal: a.signal
			});
			return xu(a.signal), t;
		}, () => a.abort(pu));
		return i?.autoJoin && t.push(o.catch(vu)), {
			result: wu(e)(o),
			cancel() {
				a.abort(fu);
			}
		};
	};
}, Au = (e, t) => {
	let n = async (n, r) => {
		xu(t);
		let i = () => {}, a = [new Promise((t, r) => {
			let a = e({
				predicate: n,
				effect: (e, n) => {
					n.unsubscribe(), t([
						e,
						n.getState(),
						n.getOriginalState()
					]);
				}
			});
			i = () => {
				a(), r();
			};
		})];
		r != null && a.push(new Promise((e) => setTimeout(e, r, null)));
		try {
			let e = await Su(t, Promise.race(a));
			return xu(t), e;
		} finally {
			i();
		}
	};
	return ((e, t) => yu(n(e, t)));
}, ju = (e) => {
	let { type: t, actionCreator: n, matcher: r, predicate: i, effect: a } = e;
	if (t) i = Pl(t).match;
	else if (n) t = n.type, i = n.match;
	else if (r) i = r;
	else if (!i) throw Error(Hu(21));
	return _u(a, "options.listener"), {
		predicate: i,
		type: t,
		effect: a
	};
}, Mu = /* @__PURE__ */ Eu((e) => {
	let { type: t, predicate: n, effect: r } = ju(e);
	return {
		id: Xl(),
		effect: r,
		type: t,
		predicate: n,
		pending: /* @__PURE__ */ new Set(),
		unsubscribe: () => {
			throw Error(Hu(22));
		}
	};
}, { withTypes: () => Mu }), Nu = (e, t) => {
	let { type: n, effect: r, predicate: i } = ju(t);
	return Array.from(e.values()).find((e) => (typeof n == "string" ? e.type === n : e.predicate === i) && e.effect === r);
}, Pu = (e) => {
	e.pending.forEach((e) => {
		e.abort(mu);
	});
}, Fu = (e, t) => () => {
	for (let e of t.keys()) Pu(e);
	e.clear();
}, Iu = (e, t, n) => {
	try {
		e(t, n);
	} catch (e) {
		setTimeout(() => {
			throw e;
		}, 0);
	}
}, Lu = /* @__PURE__ */ Eu(/* @__PURE__ */ Pl(`${Ou}/add`), { withTypes: () => Lu }), Ru = /* @__PURE__ */ Pl(`${Ou}/removeAll`), zu = /* @__PURE__ */ Eu(/* @__PURE__ */ Pl(`${Ou}/remove`), { withTypes: () => zu }), Bu = (...e) => {
	console.error(`${Ou}/error`, ...e);
}, Vu = (e = {}) => {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = (e) => {
		let t = n.get(e) ?? 0;
		n.set(e, t + 1);
	}, i = (e) => {
		let t = n.get(e) ?? 1;
		t === 1 ? n.delete(e) : n.set(e, t - 1);
	}, { extra: a, onError: o = Bu } = e;
	_u(o, "onError");
	let s = (e) => (e.unsubscribe = () => t.delete(e.id), t.set(e.id, e), (t) => {
		e.unsubscribe(), t?.cancelActive && Pu(e);
	}), c = ((e) => {
		let n = Nu(t, e) ?? Mu(e);
		return s(n);
	});
	Eu(c, { withTypes: () => c });
	let l = (e) => {
		let n = Nu(t, e);
		return n && (n.unsubscribe(), e.cancelActive && Pu(n)), !!n;
	};
	Eu(l, { withTypes: () => l });
	let u = async (e, n, s, l) => {
		let u = new AbortController(), d = Au(c, u.signal), f = [];
		try {
			e.pending.add(u), r(e), await Promise.resolve(e.effect(n, Eu({}, s, {
				getOriginalState: l,
				condition: (e, t) => d(e, t).then(Boolean),
				take: d,
				delay: Tu(u.signal),
				pause: wu(u.signal),
				extra: a,
				signal: u.signal,
				fork: ku(u.signal, f),
				unsubscribe: e.unsubscribe,
				subscribe: () => {
					t.set(e.id, e);
				},
				cancelActiveListeners: () => {
					e.pending.forEach((e, t, n) => {
						e !== u && (e.abort(mu), n.delete(e));
					});
				},
				cancel: () => {
					u.abort(mu), e.pending.delete(u);
				},
				throwIfCancelled: () => {
					xu(u.signal);
				}
			})));
		} catch (e) {
			e instanceof gu || Iu(o, e, { raisedBy: "effect" });
		} finally {
			await Promise.all(f), u.abort(hu), i(e), e.pending.delete(u);
		}
	}, d = Fu(t, n);
	return {
		middleware: (e) => (n) => (r) => {
			if (!sc(r)) return n(r);
			if (Lu.match(r)) return c(r.payload);
			if (Ru.match(r)) {
				d();
				return;
			}
			if (zu.match(r)) return l(r.payload);
			let i = e.getState(), a = () => {
				if (i === Du) throw Error(Hu(23));
				return i;
			}, s;
			try {
				if (s = n(r), t.size > 0) {
					let n = e.getState(), s = Array.from(t.values());
					for (let t of s) {
						let s = !1;
						try {
							s = t.predicate(r, n, i);
						} catch (e) {
							s = !1, Iu(o, e, { raisedBy: "predicate" });
						}
						s && u(t, r, e, a);
					}
				}
			} finally {
				i = Du;
			}
			return s;
		},
		startListening: c,
		stopListening: l,
		clearListeners: d
	};
};
function Hu(e) {
	return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
// node_modules/recharts/es6/state/layoutSlice.js
var Uu = tu({
	name: "chartLayout",
	initialState: {
		layoutType: "horizontal",
		width: 0,
		height: 0,
		margin: {
			top: 5,
			right: 5,
			bottom: 5,
			left: 5
		},
		scale: 1
	},
	reducers: {
		setLayout(e, t) {
			e.layoutType = t.payload;
		},
		setChartSize(e, t) {
			e.width = t.payload.width, e.height = t.payload.height;
		},
		setMargin(e, t) {
			e.margin.top = t.payload.top ?? 0, e.margin.right = t.payload.right ?? 0, e.margin.bottom = t.payload.bottom ?? 0, e.margin.left = t.payload.left ?? 0;
		},
		setScale(e, t) {
			e.scale = t.payload;
		}
	}
}), Wu = Uu.actions, Gu = Wu.setMargin, Ku = Wu.setLayout, qu = Wu.setChartSize, Ju = Wu.setScale, Yu = Uu.reducer;
// node_modules/recharts/es6/util/getSliced.js
function Xu(e, t, n) {
	return Array.isArray(e) && e && t + n !== 0 ? e.slice(t, n + 1) : e;
}
// node_modules/recharts/es6/util/isWellBehavedNumber.js
function Y(e) {
	return Number.isFinite(e);
}
function Zu(e) {
	return typeof e == "number" && e > 0 && Number.isFinite(e);
}
// node_modules/recharts/es6/util/ChartUtils.js
function Qu(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $u(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Qu(Object(n), !0).forEach(function(t) {
			ed(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qu(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ed(e, t, n) {
	return (t = td(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function td(e) {
	var t = nd(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function nd(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function X(e, t, n) {
	return jr(e) || jr(t) ? n : Tr(t) ? _r(e, t, n) : typeof t == "function" ? t(e) : n;
}
var rd = (e, t, n) => {
	if (t && n) {
		var r = n.width, i = n.height, a = t.align, o = t.verticalAlign, s = t.layout, c = t.position, l = t.offset, u = l === void 0 ? 0 : l;
		if (c != null) {
			if (Ur(c)) {
				if (c === "top" && H(e.top)) return $u($u({}, e), {}, { top: e.top + (i || 0) + u });
				if (c === "bottom" && H(e.bottom)) return $u($u({}, e), {}, { bottom: e.bottom + (i || 0) + u });
				if (c === "left" && H(e.left)) return $u($u({}, e), {}, { left: e.left + (r || 0) + u });
				if (c === "right" && H(e.right)) return $u($u({}, e), {}, { right: e.right + (r || 0) + u });
			}
			return e;
		}
		if ((s === "vertical" || s === "horizontal" && o === "middle") && a !== "center" && H(e[a])) return $u($u({}, e), {}, { [a]: e[a] + (r || 0) });
		if ((s === "horizontal" || s === "vertical" && a === "center") && o !== "middle" && H(e[o])) return $u($u({}, e), {}, { [o]: e[o] + (i || 0) });
	}
	return e;
}, id = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", ad = (e, t, n, r) => {
	if (r) return e.map((e) => e.coordinate);
	var i, a, o = e.map((e) => (e.coordinate === t && (i = !0), e.coordinate === n && (a = !0), e.coordinate));
	return i || o.push(t), a || o.push(n), o;
}, od = (e, t, n) => {
	if (!e) return null;
	var r = e.duplicateDomain, i = e.type, a = e.range, o = e.scale, s = e.realScaleType, c = e.isCategorical, l = e.categoricalDomain, u = e.tickCount, d = e.ticks, f = e.niceTicks, p = e.axisType;
	if (!o) return null;
	var m = s === "scaleBand" && o.bandwidth ? o.bandwidth() / 2 : 2, h = (t || n) && i === "category" && o.bandwidth ? o.bandwidth() / m : 0;
	return h = p === "angleAxis" && a && a.length >= 2 ? Sr(a[0] - a[1]) * 2 * h : h, t && (d || f) ? (d || f || []).map((e, t) => {
		var n = r ? r.indexOf(e) : e, i = o.map(n);
		return Y(i) ? {
			coordinate: i + h,
			value: e,
			offset: h,
			index: t
		} : null;
	}).filter(Nr) : c && l ? l.map((e, t) => {
		var n = o.map(e);
		return Y(n) ? {
			coordinate: n + h,
			value: e,
			index: t,
			offset: h
		} : null;
	}).filter(Nr) : o.ticks && !n && u != null ? o.ticks(u).map((e, t) => {
		var n = o.map(e);
		return Y(n) ? {
			coordinate: n + h,
			value: e,
			index: t,
			offset: h
		} : null;
	}).filter(Nr) : o.domain().map((e, t) => {
		var n = o.map(e);
		return Y(n) ? {
			coordinate: n + h,
			value: r ? r[e] : e,
			index: t,
			offset: h
		} : null;
	}).filter(Nr);
}, sd = (e, t) => {
	if (!t || t.length !== 2 || !H(t[0]) || !H(t[1])) return e;
	var n = Math.min(t[0], t[1]), r = Math.max(t[0], t[1]), i = [e[0], e[1]];
	return (!H(e[0]) || e[0] < n) && (i[0] = n), (!H(e[1]) || e[1] > r) && (i[1] = r), i[0] > r && (i[0] = r), i[1] < n && (i[1] = n), i;
}, cd = {
	sign: (e) => {
		var t = e.length;
		if (!(t <= 0)) {
			var n = e[0]?.length;
			if (!(n == null || n <= 0)) for (var r = 0; r < n; ++r) for (var i = 0, a = 0, o = 0; o < t; ++o) {
				var s = e[o]?.[r];
				if (s != null) {
					var c = s[1], l = s[0], u = Cr(c) ? l : c;
					u >= 0 ? (s[0] = i, i += u, s[1] = i) : (s[0] = a, a += u, s[1] = a);
				}
			}
		}
	},
	expand: fa,
	none: sa,
	silhouette: pa,
	wiggle: ma,
	positive: (e) => {
		var t = e.length;
		if (!(t <= 0)) {
			var n = e[0]?.length;
			if (!(n == null || n <= 0)) for (var r = 0; r < n; ++r) for (var i = 0, a = 0; a < t; ++a) {
				var o = e[a]?.[r];
				if (o != null) {
					var s = Cr(o[1]) ? o[0] : o[1];
					s >= 0 ? (o[0] = i, i += s, o[1] = i) : (o[0] = 0, o[1] = 0);
				}
			}
		}
	}
}, ld = (e, t, n) => {
	var r = cd[n] ?? sa, i = da().keys(t).value((e, t) => Number(X(e, t, 0))).order(ca).offset(r)(e);
	return i.forEach((n, r) => {
		n.forEach((n, i) => {
			var a = X(e[i], t[r], 0);
			Array.isArray(a) && a.length === 2 && H(a[0]) && H(a[1]) && (n[0] = a[0], n[1] = a[1]);
		});
	}), i;
};
function ud(e) {
	return e == null ? void 0 : String(e);
}
function dd(e) {
	var t = e.axis, n = e.ticks, r = e.bandSize, i = e.entry, a = e.index, o = e.dataKey;
	if (t.type === "category") {
		if (!t.allowDuplicatedCategory && t.dataKey && !jr(i[t.dataKey])) {
			var s = Ar(n, "value", i[t.dataKey]);
			if (s) return s.coordinate + r / 2;
		}
		return n != null && n[a] ? n[a].coordinate + r / 2 : null;
	}
	var c = X(i, jr(o) ? t.dataKey : o), l = t.scale.map(c);
	return H(l) ? l : null;
}
var fd = (e) => {
	var t = e.axis, n = e.ticks, r = e.offset, i = e.bandSize, a = e.entry, o = e.index;
	if (t.type === "category") return n[o] ? n[o].coordinate + r : null;
	var s = X(a, t.dataKey, t.scale.domain()[o]);
	if (jr(s)) return null;
	var c = t.scale.map(s);
	return H(c) ? c - i / 2 + r : null;
}, pd = (e) => {
	var t = e.numericAxis, n = t.scale.domain();
	if (t.type === "number") {
		var r = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
		return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
	}
	return n[0];
}, md = (e) => {
	var t = e.flat(2).filter(H);
	return [Math.min(...t), Math.max(...t)];
}, hd = (e) => [e[0] === Infinity ? 0 : e[0], e[1] === -Infinity ? 0 : e[1]], gd = (e, t, n) => {
	if (e != null && Object.keys(e).length !== 0) return hd(Object.keys(e).reduce((r, i) => {
		var a = e[i];
		if (!a) return r;
		var o = a.stackedData.reduce((e, r) => {
			var i = md(Xu(r, t, n));
			return !Y(i[0]) || !Y(i[1]) ? e : [Math.min(e[0], i[0]), Math.max(e[1], i[1])];
		}, [Infinity, -Infinity]);
		return [Math.min(o[0], r[0]), Math.max(o[1], r[1])];
	}, [Infinity, -Infinity]));
}, _d = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, vd = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, yd = (e, t, n) => {
	if (e && e.scale && e.scale.bandwidth) {
		var r = e.scale.bandwidth();
		if (!n || r > 0) return r;
	}
	if (e && t && t.length >= 2) {
		for (var i = Is(t, (e) => e.coordinate), a = [], o = 0, s = 1, c = i.length; s < c; s++) {
			var l = (i[s]?.coordinate || 0) - (i[s - 1]?.coordinate || 0);
			a.push(l), o = Math.max(l, o);
		}
		var u = o * 1e-4, d = Infinity;
		for (var f of a) f > u && (d = Math.min(f, d));
		return d === Infinity ? 0 : d;
	}
	return n ? void 0 : 0;
};
function bd(e) {
	var t = e.tooltipEntrySettings, n = e.dataKey, r = e.payload, i = e.value, a = e.name;
	return $u($u({}, t), {}, {
		dataKey: n,
		payload: r,
		value: i,
		name: a
	});
}
function xd(e, t) {
	if (e != null) return String(e);
	if (typeof t == "string") return t;
}
var Sd = (e, t) => {
	if (t === "horizontal") return e.relativeX;
	if (t === "vertical") return e.relativeY;
}, Cd = (e, t) => t === "centric" ? e.angle : e.radius, wd = (e) => e.layout.width, Td = (e) => e.layout.height, Ed = (e) => e.layout.scale, Dd = (e) => e.layout.margin, Od = K((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), kd = K((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), Ad = "data-recharts-item-index", jd = "data-recharts-item-id";
// node_modules/recharts/es6/state/selectors/selectChartOffsetInternal.js
function Md(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Nd(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Md(Object(n), !0).forEach(function(t) {
			Pd(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Md(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Pd(e, t, n) {
	return (t = Fd(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Fd(e) {
	var t = Id(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Id(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Ld = (e) => e.brush.height;
function Rd(e) {
	return kd(e).reduce((e, t) => t.orientation === "left" && !t.mirror && !t.hide ? e + (typeof t.width == "number" ? t.width : 60) : e, 0);
}
function zd(e) {
	return kd(e).reduce((e, t) => t.orientation === "right" && !t.mirror && !t.hide ? e + (typeof t.width == "number" ? t.width : 60) : e, 0);
}
function Bd(e) {
	return Od(e).reduce((e, t) => t.orientation === "top" && !t.mirror && !t.hide ? e + (typeof t.height == "number" ? t.height : 30) : e, 0);
}
function Vd(e) {
	return Od(e).reduce((e, t) => t.orientation === "bottom" && !t.mirror && !t.hide ? e + (typeof t.height == "number" ? t.height : 30) : e, 0);
}
var Hd = K([
	wd,
	Td,
	Dd,
	Ld,
	Rd,
	zd,
	Bd,
	Vd,
	Ls,
	Rs
], (e, t, n, r, i, a, o, s, c, l) => {
	var u = {
		left: (n.left || 0) + i,
		right: (n.right || 0) + a
	}, d = Nd(Nd({}, {
		top: (n.top || 0) + o,
		bottom: (n.bottom || 0) + s
	}), u), f = d.bottom;
	d.bottom += r, d = rd(d, c, l);
	var p = e - d.left - d.right, m = t - d.top - d.bottom;
	return Nd(Nd({ brushBottom: f }, d), {}, {
		width: Math.max(p, 0),
		height: Math.max(m, 0)
	});
}), Ud = K(Hd, (e) => ({
	x: e.left,
	y: e.top,
	width: e.width,
	height: e.height
})), Wd = K(wd, Td, (e, t) => ({
	x: 0,
	y: 0,
	width: e,
	height: t
})), Gd = /*#__PURE__*/ (0, B.createContext)(null), Kd = () => (0, B.useContext)(Gd) != null, qd = (e) => e.brush, Jd = K([
	qd,
	Hd,
	Dd
], (e, t, n) => ({
	height: e.height,
	x: H(e.x) ? e.x : t.left,
	y: H(e.y) ? e.y : t.top + t.height + t.brushBottom - (n?.bottom || 0),
	width: H(e.width) ? e.width : t.width
}));
// node_modules/es-toolkit/dist/function/debounce.mjs
function Yd(e, t, { signal: n, edges: r } = {}) {
	let i, a = null, o = r != null && r.includes("leading"), s = r == null || r.includes("trailing"), c = () => {
		a !== null && (e.apply(i, a), i = void 0, a = null);
	}, l = () => {
		s && c(), p();
	}, u = null, d = () => {
		u != null && clearTimeout(u), u = setTimeout(() => {
			u = null, l();
		}, t);
	}, f = () => {
		u !== null && (clearTimeout(u), u = null);
	}, p = () => {
		f(), i = void 0, a = null;
	}, m = () => {
		c();
	}, h = function(...e) {
		if (n?.aborted) return;
		i = this, a = e;
		let t = u == null;
		d(), o && t && c();
	};
	return h.schedule = d, h.cancel = p, h.flush = m, n?.addEventListener("abort", p, { once: !0 }), h;
}
// node_modules/es-toolkit/dist/compat/function/debounce.mjs
function Xd(e, t = 0, n = {}) {
	typeof n != "object" && (n = {});
	let { leading: r = !1, trailing: i = !0, maxWait: a } = n, o = [, ,];
	r && (o[0] = "leading"), i && (o[1] = "trailing");
	let s, c = null, l = Yd(function(...t) {
		s = e.apply(this, t), c = null;
	}, t, { edges: o }), u = function(...t) {
		return a != null && (c === null && (c = Date.now()), Date.now() - c >= a) ? ((r || i) && (s = e.apply(this, t)), c = Date.now(), l.cancel(), l.schedule(), s) : (l.apply(this, t), s);
	};
	return u.cancel = l.cancel, u.flush = () => (l.flush(), s), u;
}
// node_modules/es-toolkit/dist/compat/function/throttle.mjs
function Zd(e, t = 0, n = {}) {
	let { leading: r = !0, trailing: i = !0 } = n;
	return Xd(e, t, {
		leading: r,
		maxWait: t,
		trailing: i
	});
}
// node_modules/recharts/es6/util/LogUtils.js
var Qd = function(e, t) {
	var n = [...arguments].slice(2);
	if (typeof console < "u" && console.warn && (t === void 0 && console.warn("LogUtils requires an error message argument"), !e)) {
		if (t === void 0) console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
		else {
			var r = 0;
			console.warn(t.replace(/%s/g, () => n[r++]));
		}
	}
}, $d = {
	width: "100%",
	height: "100%",
	debounce: 0,
	minWidth: 0,
	initialDimension: {
		width: -1,
		height: -1
	}
}, ef = (e, t, n) => {
	var r = n.width, i = r === void 0 ? $d.width : r, a = n.height, o = a === void 0 ? $d.height : a, s = n.aspect, c = n.maxHeight, l = wr(i) ? e : Number(i), u = wr(o) ? t : Number(o);
	return s && s > 0 && (l ? u = l / s : u && (l = u * s), c && u != null && u > c && (u = c)), {
		calculatedWidth: l,
		calculatedHeight: u
	};
}, tf = {
	width: 0,
	height: 0,
	overflow: "visible"
}, nf = {
	width: 0,
	overflowX: "visible"
}, rf = {
	height: 0,
	overflowY: "visible"
}, af = {}, of = (e) => {
	var t = e.width, n = e.height, r = wr(t), i = wr(n);
	return r && i ? tf : r ? nf : i ? rf : af;
};
function sf(e) {
	var t = e.width, n = e.height, r = e.aspect, i = t, a = n;
	return i === void 0 && a === void 0 ? (i = $d.width, a = $d.height) : i === void 0 ? i = r && r > 0 ? void 0 : $d.width : a === void 0 && (a = r && r > 0 ? void 0 : $d.height), {
		width: i,
		height: a
	};
}
// node_modules/recharts/es6/component/ResponsiveContainer.js
var cf = [
	"aspect",
	"initialDimension",
	"width",
	"height",
	"minWidth",
	"minHeight",
	"maxHeight",
	"children",
	"debounce",
	"id",
	"className",
	"onResize",
	"style"
];
function lf() {
	return lf = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, lf.apply(null, arguments);
}
function uf(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function df(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? uf(Object(n), !0).forEach(function(t) {
			ff(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uf(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ff(e, t, n) {
	return (t = pf(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function pf(e) {
	var t = mf(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function mf(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function hf(e, t) {
	return bf(e) || yf(e, t) || _f(e, t) || gf();
}
function gf() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _f(e, t) {
	if (e) {
		if (typeof e == "string") return vf(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vf(e, t) : void 0;
	}
}
function vf(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function yf(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function bf(e) {
	if (Array.isArray(e)) return e;
}
function xf(e, t) {
	if (e == null) return {};
	var n, r, i = Sf(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Sf(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Cf = /*#__PURE__*/ (0, B.createContext)($d.initialDimension);
function wf(e) {
	return Zu(e.width) && Zu(e.height);
}
function Tf(e) {
	var t = e.children, n = e.width, r = e.height, i = (0, B.useMemo)(() => ({
		width: n,
		height: r
	}), [n, r]);
	return wf(i) ? /*#__PURE__*/ B.createElement(Cf.Provider, { value: i }, t) : null;
}
var Ef = () => (0, B.useContext)(Cf), Df = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = e.aspect, r = e.initialDimension, i = r === void 0 ? $d.initialDimension : r, a = e.width, o = e.height, s = e.minWidth, c = s === void 0 ? $d.minWidth : s, l = e.minHeight, u = e.maxHeight, d = e.children, f = e.debounce, p = f === void 0 ? $d.debounce : f, m = e.id, h = e.className, g = e.onResize, _ = e.style, v = _ === void 0 ? {} : _, y = xf(e, cf), b = (0, B.useRef)(null), x = (0, B.useRef)();
	x.current = g, (0, B.useImperativeHandle)(t, () => b.current);
	var S = hf((0, B.useState)({
		containerWidth: i.width,
		containerHeight: i.height
	}), 2), C = S[0], w = S[1], T = (0, B.useCallback)((e, t) => {
		w((n) => {
			var r = Math.round(e), i = Math.round(t);
			return n.containerWidth === r && n.containerHeight === i ? n : {
				containerWidth: r,
				containerHeight: i
			};
		});
	}, []);
	(0, B.useEffect)(() => {
		if (b.current == null || typeof ResizeObserver > "u") return Pr;
		var e = (e) => {
			var t, n = e[0];
			if (n != null) {
				var r = n.contentRect, i = r.width, a = r.height;
				T(i, a), (t = x.current) == null || t.call(x, i, a);
			}
		};
		p > 0 && (e = Zd(e, p, {
			trailing: !0,
			leading: !1
		}));
		var t = new ResizeObserver(e), n = b.current.getBoundingClientRect(), r = n.width, i = n.height;
		return T(r, i), t.observe(b.current), () => {
			t.disconnect();
		};
	}, [T, p]);
	var E = C.containerWidth, D = C.containerHeight;
	Qd(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
	var O = ef(E, D, {
		width: a,
		height: o,
		aspect: n,
		maxHeight: u
	}), k = O.calculatedWidth, A = O.calculatedHeight;
	return Qd(E < 0 || D < 0 || k != null && k > 0 || A != null && A > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", k, A, a, o, c, l, n), /*#__PURE__*/ B.createElement("div", lf({
		id: m ? `${m}` : void 0,
		className: z("recharts-responsive-container", h),
		style: df(df({}, v), {}, {
			width: a,
			height: o,
			minWidth: c,
			minHeight: l,
			maxHeight: u
		}),
		ref: b
	}, y), /*#__PURE__*/ B.createElement("div", { style: of({
		width: a,
		height: o
	}) }, /*#__PURE__*/ B.createElement(Tf, {
		width: k,
		height: A
	}, d)));
}), Of = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = Ef();
	if (Zu(n.width) && Zu(n.height)) return e.children;
	var r = sf({
		width: e.width,
		height: e.height,
		aspect: e.aspect
	}), i = r.width, a = r.height, o = ef(void 0, void 0, {
		width: i,
		height: a,
		aspect: e.aspect,
		maxHeight: e.maxHeight
	}), s = o.calculatedWidth, c = o.calculatedHeight;
	return H(s) && H(c) ? /*#__PURE__*/ B.createElement(Tf, {
		width: s,
		height: c
	}, e.children) : /*#__PURE__*/ B.createElement(Df, lf({}, e, {
		width: i,
		height: a,
		ref: t
	}));
}), kf = () => {
	var e = Kd(), t = G(Ud), n = G(Jd), r = G(qd)?.padding;
	return !e || !n || !r ? t : {
		width: n.width - r.left - r.right,
		height: n.height - r.top - r.bottom,
		x: r.left,
		y: r.top
	};
}, Af = {
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	width: 0,
	height: 0,
	brushBottom: 0
}, jf = () => G(Hd) ?? Af, Mf = () => G(wd), Nf = () => G(Td), Pf = () => G((e) => e.layout.margin), Z = (e) => e.layout.layoutType, Ff = () => G(Z), If = () => {
	var e = Ff();
	if (e === "horizontal" || e === "vertical") return e;
}, Lf = (e) => {
	var t = e.layout.layoutType;
	if (t === "centric" || t === "radial") return t;
}, Rf = () => G(Lf), zf = () => Ff() !== void 0, Bf = (e) => {
	var t = W(), n = Kd(), r = e.width, i = e.height, a = Ef(), o = r, s = i;
	return a && (o = a.width > 0 ? a.width : r, s = a.height > 0 ? a.height : i), (0, B.useEffect)(() => {
		!n && Zu(o) && Zu(s) && t(qu({
			width: o,
			height: s
		}));
	}, [
		t,
		n,
		o,
		s
	]), null;
}, Vf = tu({
	name: "legend",
	initialState: {
		settings: {
			layout: "horizontal",
			align: "center",
			verticalAlign: "bottom",
			itemSorter: "value",
			position: void 0,
			offset: 0
		},
		size: {
			width: 0,
			height: 0
		},
		payload: []
	},
	reducers: {
		setLegendSize(e, t) {
			e.size.width = t.payload.width, e.size.height = t.payload.height;
		},
		setLegendSettings(e, t) {
			e.settings.align = t.payload.align, e.settings.layout = t.payload.layout, e.settings.verticalAlign = t.payload.verticalAlign, e.settings.itemSorter = t.payload.itemSorter, e.settings.position = t.payload.position, e.settings.offset = t.payload.offset;
		},
		addLegendPayload: {
			reducer(e, t) {
				e.payload.push(q(t.payload));
			},
			prepare: J()
		},
		replaceLegendPayload: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next, a = Dl(e).payload.indexOf(q(r));
				a > -1 && (e.payload[a] = q(i));
			},
			prepare: J()
		},
		removeLegendPayload: {
			reducer(e, t) {
				var n = Dl(e).payload.indexOf(q(t.payload));
				n > -1 && e.payload.splice(n, 1);
			},
			prepare: J()
		}
	}
}), Hf = Vf.actions, Uf = Hf.setLegendSize, Wf = Hf.setLegendSettings, Gf = Hf.addLegendPayload, Kf = Hf.replaceLegendPayload, qf = Hf.removeLegendPayload, Jf = Vf.reducer, Yf = /* @__PURE__ */ je(((e) => {
	var t = mt();
	t.useSyncExternalStore, t.useRef, t.useEffect, t.useMemo, t.useDebugValue;
}));
(/* @__PURE__ */ je(((e, t) => {
	t.exports = Yf();
})))();
function Xf(e) {
	e();
}
function Zf() {
	let e = null, t = null;
	return {
		clear() {
			e = null, t = null;
		},
		notify() {
			Xf(() => {
				let t = e;
				for (; t;) t.callback(), t = t.next;
			});
		},
		get() {
			let t = [], n = e;
			for (; n;) t.push(n), n = n.next;
			return t;
		},
		subscribe(n) {
			let r = !0, i = t = {
				callback: n,
				next: null,
				prev: t
			};
			return i.prev ? i.prev.next = i : e = i, function() {
				r && e !== null && (r = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
			};
		}
	};
}
var Qf = {
	notify() {},
	get: () => []
};
function $f(e, t) {
	let n, r = Qf, i = 0, a = !1;
	function o(e) {
		u();
		let t = r.subscribe(e), n = !1;
		return () => {
			n || (n = !0, t(), d());
		};
	}
	function s() {
		r.notify();
	}
	function c() {
		m.onStateChange && m.onStateChange();
	}
	function l() {
		return a;
	}
	function u() {
		i++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = Zf());
	}
	function d() {
		i--, n && i === 0 && (n(), n = void 0, r.clear(), r = Qf);
	}
	function f() {
		a || (a = !0, u());
	}
	function p() {
		a && (a = !1, d());
	}
	let m = {
		addNestedSub: o,
		notifyNestedSubs: s,
		handleChangeWrapper: c,
		isSubscribed: l,
		trySubscribe: f,
		tryUnsubscribe: p,
		getListeners: () => r
	};
	return m;
}
var ep = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, tp = typeof navigator < "u" && navigator.product === "ReactNative", np = ep || tp ? B.useLayoutEffect : B.useEffect;
function rp(e, t) {
	return e === t ? e !== 0 || t !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function ip(e, t) {
	if (rp(e, t)) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r = 0; r < n.length; r++) if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !rp(e[n[r]], t[n[r]])) return !1;
	return !0;
}
var ap = /* @__PURE__ */ Symbol.for("react-redux-context"), op = typeof globalThis < "u" ? globalThis : {};
function sp() {
	if (!B.createContext) return {};
	let e = op[ap] ??= /* @__PURE__ */ new Map(), t = e.get(B.createContext);
	return t || (t = B.createContext(null), e.set(B.createContext, t)), t;
}
var cp = /* @__PURE__ */ sp();
function lp(e) {
	let { children: t, context: n, serverState: r, store: i } = e, a = B.useMemo(() => {
		let e = $f(i);
		return {
			store: i,
			subscription: e,
			getServerState: r ? () => r : void 0
		};
	}, [i, r]), o = B.useMemo(() => i.getState(), [i]);
	np(() => {
		let { subscription: e } = a;
		return e.onStateChange = e.notifyNestedSubs, e.trySubscribe(), o !== i.getState() && e.notifyNestedSubs(), () => {
			e.tryUnsubscribe(), e.onStateChange = void 0;
		};
	}, [a, o]);
	let s = n || cp;
	return /* @__PURE__ */ B.createElement(s.Provider, { value: a }, t);
}
var up = lp, dp = /* @__PURE__ */ new Set([
	"axisLine",
	"tickLine",
	"activeBar",
	"activeDot",
	"activeLabel",
	"activeShape",
	"allowEscapeViewBox",
	"background",
	"cursor",
	"dot",
	"label",
	"line",
	"margin",
	"padding",
	"position",
	"shape",
	"style",
	"tick",
	"wrapperStyle",
	"radius",
	"throttledEvents"
]);
function fp(e, t) {
	return e == null && t == null ? !0 : typeof e == "number" && typeof t == "number" ? e === t || e !== e && t !== t : e === t;
}
function pp(e, t) {
	for (var n of /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)])) if (dp.has(n)) {
		if (e[n] == null && t[n] == null) continue;
		if (!ip(e[n], t[n])) return !1;
	} else if (!fp(e[n], t[n])) return !1;
	return !0;
}
// node_modules/recharts/es6/state/selectors/selectLegendArea.js
var mp = K([
	wd,
	Td,
	Dd
], (e, t, n) => ({
	x: n.left || 0,
	y: n.top || 0,
	width: Math.max(e - (n.left || 0) - (n.right || 0), 0),
	height: Math.max(t - (n.top || 0) - (n.bottom || 0), 0)
}));
// node_modules/recharts/es6/cartesian/cartesianPositionToCSSTranslate.js
function hp(e, t) {
	return e === "start" && t === "start" ? "" : `translate(${e === "inherit" ? "0" : {
		start: "0",
		middle: "-50%",
		end: "-100%"
	}[e]}, ${{
		start: "0",
		middle: "-50%",
		end: "-100%"
	}[t] ?? "0"})`;
}
// node_modules/recharts/es6/component/Legend.js
var gp = /* @__PURE__ */ Ne(ht()), _p = ["contextPayload"];
function vp() {
	return vp = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, vp.apply(null, arguments);
}
function yp(e, t) {
	return wp(e) || Cp(e, t) || xp(e, t) || bp();
}
function bp() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function xp(e, t) {
	if (e) {
		if (typeof e == "string") return Sp(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Sp(e, t) : void 0;
	}
}
function Sp(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Cp(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function wp(e) {
	if (Array.isArray(e)) return e;
}
function Tp(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ep(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Tp(Object(n), !0).forEach(function(t) {
			Dp(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tp(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Dp(e, t, n) {
	return (t = Op(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Op(e) {
	var t = kp(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function kp(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Ap(e, t) {
	if (e == null) return {};
	var n, r, i = jp(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function jp(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Mp(e) {
	return e.value;
}
function Np(e) {
	var t = e.contextPayload, n = Ap(e, _p), r = cs(t, e.payloadUniqBy, Mp), i = Ep(Ep({}, n), {}, { payload: r });
	return /*#__PURE__*/ B.isValidElement(e.content) ? /*#__PURE__*/ B.cloneElement(e.content, i) : typeof e.content == "function" ? /*#__PURE__*/ B.createElement(e.content, i) : /*#__PURE__*/ B.createElement(Za, i);
}
function Pp(e) {
	return e === "left" || e === "right" || e === "insideLeft" || e === "insideRight" ? "vertical" : "horizontal";
}
function Fp(e, t) {
	return t == null ? null : Ur(t) ? mp(e) : Ud(e);
}
function Ip(e, t, n) {
	return e === "top" ? { top: n.height + t } : e === "bottom" ? { top: -n.height - t } : e === "left" ? { left: n.width + t } : e === "right" ? { left: -n.width - t } : {};
}
function Lp(e, t, n, r, i, a) {
	var o = t.layout, s = t.align, c = t.verticalAlign, l, u;
	return e && (e.left !== void 0 && e.left !== null || e.right !== void 0 && e.right !== null) || (l = s === "center" && o === "vertical" ? { left: ((r || 0) - a.width) / 2 } : s === "right" ? { right: n && n.right || 0 } : { left: n && n.left || 0 }), e && (e.top !== void 0 && e.top !== null || e.bottom !== void 0 && e.bottom !== null) || (u = c === "middle" ? { top: ((i || 0) - a.height) / 2 } : c === "bottom" ? { bottom: n && n.bottom || 0 } : { top: n && n.top || 0 }), Ep(Ep({}, l), u);
}
function Rp(e) {
	var t = e.align, n = e.layout, r = e.verticalAlign, i = e.itemSorter, a = e.position, o = e.offset, s = W();
	return (0, B.useLayoutEffect)(() => {
		s(Wf({
			align: t,
			layout: n,
			verticalAlign: r,
			itemSorter: i,
			position: a,
			offset: o
		}));
	}, [
		s,
		t,
		n,
		r,
		i,
		a,
		o
	]), null;
}
function zp(e) {
	var t = e.width, n = e.height, r = W();
	return (0, B.useLayoutEffect)(() => {
		r(Uf({
			width: t,
			height: n
		}));
	}, [
		r,
		t,
		n
	]), (0, B.useLayoutEffect)(() => () => {
		r(Uf({
			width: 0,
			height: 0
		}));
	}, [r]), null;
}
function Bp(e, t, n, r) {
	return e === "vertical" && t != null ? { height: t } : e === "horizontal" ? { width: n || r } : null;
}
var Vp = {
	align: "center",
	iconSize: 14,
	inactiveColor: "#ccc",
	itemSorter: "value",
	labelStyle: {},
	layout: "auto",
	verticalAlign: "bottom",
	offset: 0
};
function Hp(e) {
	var t = za(e, Vp), n = e.layout && e.layout !== "auto" ? e.layout : Pp(t.position), r = Bs(), i = Gr(), a = Pf(), o = G((e) => Fp(e, t.position)), s = t.width, c = t.height, l = t.wrapperStyle, u = t.portal, d = u == null && (t.position == null || Ur(t.position)), f = yp(Xs([r]), 2), p = f[0], m = f[1], h = Mf(), g = Nf();
	if (h == null || g == null || t.position != null && o == null) return null;
	var _ = Bp(n, c, s, h - (a?.left || 0) - (a?.right || 0)), v = t.position == null ? null : Vr({
		viewBox: o ?? {
			x: 0,
			y: 0,
			width: h,
			height: g
		},
		position: t.position,
		offset: t.offset ?? 0
	}), y = Ip(t.position, t.offset ?? 0, p), b = n === "vertical" ? (o?.width ?? 0) / 2 : o?.width ?? 0, x = n === "horizontal" ? (o?.height ?? 0) / 2 : o?.height ?? 0, S = v ? {
		width: "max-content",
		height: "max-content",
		maxWidth: b,
		maxHeight: x,
		overflowY: "auto",
		top: v.y + (y.top ?? 0),
		left: v.x + (y.left ?? 0),
		transform: hp(v.horizontalAnchor, v.verticalAnchor)
	} : Lp(l, t, a, h, g, p), C = u ? l : Ep(Ep({
		position: "absolute",
		width: _?.width || s || "auto",
		height: _?.height || c || "auto"
	}, S), l), w = u ?? i;
	if (w == null || r == null) return null;
	var T = /*#__PURE__*/ B.createElement("div", {
		className: "recharts-legend-wrapper",
		style: C,
		ref: m
	}, /*#__PURE__*/ B.createElement(Rp, {
		layout: n,
		align: t.align,
		verticalAlign: t.verticalAlign,
		itemSorter: t.itemSorter,
		position: t.position,
		offset: t.offset
	}), d && /*#__PURE__*/ B.createElement(zp, p), /*#__PURE__*/ B.createElement(Np, vp({}, t, { layout: n }, _, {
		margin: a,
		chartWidth: h,
		chartHeight: g,
		contextPayload: r
	})));
	return /*#__PURE__*/ (0, gp.createPortal)(T, w);
}
var Up = /*#__PURE__*/ B.memo(Hp, pp);
Up.displayName = "Legend";
// node_modules/recharts/es6/component/DefaultTooltipContent.js
function Wp() {
	return Wp = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Wp.apply(null, arguments);
}
function Gp(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Kp(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Gp(Object(n), !0).forEach(function(t) {
			qp(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gp(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function qp(e, t, n) {
	return (t = Jp(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Jp(e) {
	var t = Yp(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Yp(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Xp(e, t) {
	return tm(e) || em(e, t) || Qp(e, t) || Zp();
}
function Zp() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Qp(e, t) {
	if (e) {
		if (typeof e == "string") return $p(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $p(e, t) : void 0;
	}
}
function $p(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function em(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function tm(e) {
	if (Array.isArray(e)) return e;
}
function nm(e) {
	return Array.isArray(e) && Tr(e[0]) && Tr(e[1]) ? e.join(" ~ ") : e;
}
var rm = {
	separator: " : ",
	contentStyle: {
		margin: 0,
		padding: 10,
		backgroundColor: "#fff",
		border: "1px solid #ccc",
		whiteSpace: "nowrap"
	},
	itemStyle: {
		display: "block",
		paddingTop: 4,
		paddingBottom: 4,
		color: "#000"
	},
	labelStyle: {},
	accessibilityLayer: !1
};
function im(e, t) {
	return t == null ? e : Is(e, t);
}
var am = (e) => {
	var t = e.separator, n = t === void 0 ? rm.separator : t, r = e.contentStyle, i = e.itemStyle, a = e.labelStyle, o = a === void 0 ? rm.labelStyle : a, s = e.payload, c = e.formatter, l = e.itemSorter, u = e.wrapperClassName, d = e.labelClassName, f = e.label, p = e.labelFormatter, m = e.accessibilityLayer, h = m === void 0 ? rm.accessibilityLayer : m, g = () => {
		if (s && s.length) {
			var e = {
				padding: 0,
				margin: 0
			}, t = im(s, l).map((e, t) => {
				if (!e || e.type === "none") return null;
				var r = e.formatter || c || nm, a = e.value, o = e.name, l = a, u = o;
				if (r) {
					var d = r(a, o, e, t, s);
					if (Array.isArray(d)) {
						var f = Xp(d, 2);
						l = f[0], u = f[1];
					} else if (d != null) l = d;
					else return null;
				}
				var p = Kp(Kp({}, rm.itemStyle), {}, { color: e.color || rm.itemStyle.color }, i);
				return /*#__PURE__*/ B.createElement("li", {
					className: "recharts-tooltip-item",
					key: `tooltip-item-${t}`,
					style: p
				}, Tr(u) ? /*#__PURE__*/ B.createElement("span", { className: "recharts-tooltip-item-name" }, u) : null, Tr(u) ? /*#__PURE__*/ B.createElement("span", { className: "recharts-tooltip-item-separator" }, n) : null, /*#__PURE__*/ B.createElement("span", { className: "recharts-tooltip-item-value" }, l), /*#__PURE__*/ B.createElement("span", { className: "recharts-tooltip-item-unit" }, e.unit || ""));
			});
			return /*#__PURE__*/ B.createElement("ul", {
				className: "recharts-tooltip-item-list",
				style: e
			}, t);
		}
		return null;
	}, _ = Kp(Kp({}, rm.contentStyle), r), v = Kp({ margin: 0 }, o), y = !jr(f), b = y ? f : "", x = z("recharts-default-tooltip", u), S = z("recharts-tooltip-label", d);
	y && p && s != null && (b = p(f, s));
	var C = h ? {
		role: "status",
		"aria-live": "assertive"
	} : {};
	return /*#__PURE__*/ B.createElement("div", Wp({
		className: x,
		style: _
	}, C), /*#__PURE__*/ B.createElement("p", {
		className: S,
		style: v
	}, /*#__PURE__*/ B.isValidElement(b) ? b : `${b}`), g());
}, om = "recharts-tooltip-wrapper", sm = { visibility: "hidden" };
function cm(e) {
	var t = e.coordinate, n = e.translateX, r = e.translateY;
	return z(om, {
		[`${om}-right`]: H(n) && t && H(t.x) && n >= t.x,
		[`${om}-left`]: H(n) && t && H(t.x) && n < t.x,
		[`${om}-bottom`]: H(r) && t && H(t.y) && r >= t.y,
		[`${om}-top`]: H(r) && t && H(t.y) && r < t.y
	});
}
function lm(e) {
	var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, i = e.offset, a = e.position, o = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, l = e.viewBoxDimension;
	if (a && H(a[r])) return a[r];
	var u = n[r] - s - (i > 0 ? i : 0), d = n[r] + i;
	if (t[r]) return o[r] ? u : d;
	var f = c[r];
	return f == null ? 0 : o[r] ? Math.max(u < f ? d : u, f) : l == null ? 0 : d + s > f + l ? Math.max(u, f) : Math.max(d, f);
}
function um(e) {
	var t = e.translateX, n = e.translateY;
	return { transform: e.useTranslate3d ? `translate3d(${t}px, ${n}px, 0)` : `translate(${t}px, ${n}px)` };
}
function dm(e) {
	var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTop, i = e.offsetLeft, a = e.position, o = e.reverseDirection, s = e.tooltipBox, c = e.useTranslate3d, l = e.viewBox, u, d, f;
	return s && s.height > 0 && s.width > 0 && n ? (d = lm({
		allowEscapeViewBox: t,
		coordinate: n,
		key: "x",
		offset: i,
		position: a,
		reverseDirection: o,
		tooltipDimension: s.width,
		viewBox: l,
		viewBoxDimension: l.width
	}), f = lm({
		allowEscapeViewBox: t,
		coordinate: n,
		key: "y",
		offset: r,
		position: a,
		reverseDirection: o,
		tooltipDimension: s.height,
		viewBox: l,
		viewBoxDimension: l.height
	}), u = um({
		translateX: d,
		translateY: f,
		useTranslate3d: c
	})) : u = sm, {
		cssProperties: u,
		cssClasses: cm({
			translateX: d,
			translateY: f,
			coordinate: n
		})
	};
}
var fm = {
	devToolsEnabled: !0,
	isSsr: !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout)
};
// node_modules/recharts/es6/util/usePrefersReducedMotion.js
function pm(e, t) {
	return vm(e) || _m(e, t) || hm(e, t) || mm();
}
function mm() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function hm(e, t) {
	if (e) {
		if (typeof e == "string") return gm(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gm(e, t) : void 0;
	}
}
function gm(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function _m(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function vm(e) {
	if (Array.isArray(e)) return e;
}
function ym() {
	var e = pm((0, B.useState)(() => fm.isSsr || !window.matchMedia ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches), 2), t = e[0], n = e[1];
	return (0, B.useEffect)(() => {
		if (window.matchMedia) {
			var e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = () => {
				n(e.matches);
			};
			return e.addEventListener("change", t), () => {
				e.removeEventListener("change", t);
			};
		}
	}, []), t;
}
// node_modules/recharts/es6/component/TooltipBoundingBox.js
function bm(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function xm(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? bm(Object(n), !0).forEach(function(t) {
			Sm(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bm(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Sm(e, t, n) {
	return (t = Cm(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Cm(e) {
	var t = wm(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function wm(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Tm(e, t) {
	return Am(e) || km(e, t) || Dm(e, t) || Em();
}
function Em() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Dm(e, t) {
	if (e) {
		if (typeof e == "string") return Om(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Om(e, t) : void 0;
	}
}
function Om(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function km(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Am(e) {
	if (Array.isArray(e)) return e;
}
function jm(e) {
	if (!(e.prefersReducedMotion && e.isAnimationActive === "auto") && e.isAnimationActive && e.active) {
		var t = typeof e.animationEasing == "string" ? e.animationEasing : "ease";
		return `transform ${e.animationDuration}ms ${t}`;
	}
}
function Mm(e) {
	var t = ym(), n = Tm(B.useState(() => ({
		dismissed: !1,
		dismissedAtCoordinate: {
			x: 0,
			y: 0
		}
	})), 2), r = n[0], i = n[1];
	B.useEffect(() => {
		var t = (t) => {
			t.key === "Escape" && i({
				dismissed: !0,
				dismissedAtCoordinate: {
					x: e.coordinate?.x ?? 0,
					y: e.coordinate?.y ?? 0
				}
			});
		};
		return document.addEventListener("keydown", t), () => {
			document.removeEventListener("keydown", t);
		};
	}, [e.coordinate?.x, e.coordinate?.y]), r.dismissed && ((e.coordinate?.x ?? 0) !== r.dismissedAtCoordinate.x || (e.coordinate?.y ?? 0) !== r.dismissedAtCoordinate.y) && i(xm(xm({}, r), {}, { dismissed: !1 }));
	var a = dm({
		allowEscapeViewBox: e.allowEscapeViewBox,
		coordinate: e.coordinate,
		offsetLeft: typeof e.offset == "number" ? e.offset : e.offset.x,
		offsetTop: typeof e.offset == "number" ? e.offset : e.offset.y,
		position: e.position,
		reverseDirection: e.reverseDirection,
		tooltipBox: e.lastBoundingBox,
		useTranslate3d: e.useTranslate3d,
		viewBox: e.viewBox
	}), o = a.cssClasses, s = a.cssProperties, c = xm(xm({}, e.hasPortalFromProps ? {} : xm(xm({ transition: jm({
		prefersReducedMotion: t,
		isAnimationActive: e.isAnimationActive,
		active: e.active,
		animationDuration: e.animationDuration,
		animationEasing: e.animationEasing
	}) }, s), {}, {
		pointerEvents: "none",
		position: "absolute",
		top: 0,
		left: 0
	})), {}, { visibility: !r.dismissed && e.active && e.hasPayload ? "visible" : "hidden" }, e.wrapperStyle);
	return /*#__PURE__*/ B.createElement("div", {
		xmlns: "http://www.w3.org/1999/xhtml",
		tabIndex: -1,
		className: o,
		style: c,
		ref: e.innerRef
	}, e.children);
}
var Nm = /*#__PURE__*/ B.memo(Mm), Pm = () => G((e) => e.rootProps.accessibilityLayer) ?? !0;
// node_modules/recharts/es6/shape/Curve.js
function Fm() {
	return Fm = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Fm.apply(null, arguments);
}
function Im(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Lm(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Im(Object(n), !0).forEach(function(t) {
			Rm(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Im(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Rm(e, t, n) {
	return (t = zm(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function zm(e) {
	var t = Bm(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Bm(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Vm = {
	curveBasisClosed: Bi,
	curveBasisOpen: Hi,
	curveBasis: Ri,
	curveBumpX: mi,
	curveBumpY: hi,
	curveLinearClosed: Wi,
	curveLinear: ci,
	curveMonotoneX: Qi,
	curveMonotoneY: $i,
	curveNatural: na,
	curveStep: ia,
	curveStepAfter: oa,
	curveStepBefore: aa
}, Hm = (e) => Y(e.x) && Y(e.y), Um = (e) => e.base != null && Hm(e.base) && Hm(e), Wm = (e) => e.x, Gm = (e) => e.y, Km = (e, t) => {
	if (typeof e == "function") return e;
	var n = `curve${Mr(e)}`;
	if ((n === "curveMonotone" || n === "curveBump") && t) {
		var r = Vm[`${n}${t === "vertical" ? "Y" : "X"}`];
		if (r) return r;
	}
	return Vm[n] || ci;
}, qm = {
	connectNulls: !1,
	type: "linear"
}, Jm = (e) => {
	var t = e.type, n = t === void 0 ? qm.type : t, r = e.points, i = r === void 0 ? [] : r, a = e.baseLine, o = e.layout, s = e.connectNulls, c = s === void 0 ? qm.connectNulls : s, l = Km(n, o), u = c ? i.filter(Hm) : i;
	if (Array.isArray(a)) {
		var d, f = i.map((e, t) => Lm(Lm({}, e), {}, { base: a[t] }));
		return d = o === "vertical" ? fi().y(Gm).x1(Wm).x0((e) => e.base.x) : fi().x(Wm).y1(Gm).y0((e) => e.base.y), d.defined(Um).curve(l)(c ? f.filter(Um) : f);
	}
	return (o === "vertical" && H(a) ? fi().y(Gm).x1(Wm).x0(a) : H(a) ? fi().x(Wm).y1(Gm).y0(a) : di().x(Wm).y(Gm)).defined(Hm).curve(l)(u);
}, Ym = (e) => {
	var t = e.className, n = e.points, r = e.path, i = e.pathRef, a = Ff();
	if ((!n || !n.length) && !r) return null;
	var o = {
		type: e.type,
		points: e.points,
		baseLine: e.baseLine,
		layout: e.layout || a,
		connectNulls: e.connectNulls
	}, s = n && n.length ? Jm(o) : r;
	return /*#__PURE__*/ B.createElement("path", Fm({}, Yn(e), ja(e), {
		className: z("recharts-curve", t),
		d: s === null ? void 0 : s,
		ref: i
	}));
}, Xm = [
	"x",
	"y",
	"top",
	"left",
	"width",
	"height",
	"className"
];
function Zm() {
	return Zm = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Zm.apply(null, arguments);
}
function Qm(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $m(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Qm(Object(n), !0).forEach(function(t) {
			eh(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qm(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function eh(e, t, n) {
	return (t = th(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function th(e) {
	var t = nh(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function nh(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function rh(e, t) {
	if (e == null) return {};
	var n, r, i = ih(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function ih(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var ah = (e, t, n, r, i, a) => `M${e},${i}v${r}M${a},${t}h${n}`, oh = (e) => {
	var t = e.x, n = t === void 0 ? 0 : t, r = e.y, i = r === void 0 ? 0 : r, a = e.top, o = a === void 0 ? 0 : a, s = e.left, c = s === void 0 ? 0 : s, l = e.width, u = l === void 0 ? 0 : l, d = e.height, f = d === void 0 ? 0 : d, p = e.className, m = rh(e, Xm), h = $m({
		x: n,
		y: i,
		top: o,
		left: c,
		width: u,
		height: f
	}, m);
	return !H(n) || !H(i) || !H(u) || !H(f) || !H(o) || !H(c) ? null : /*#__PURE__*/ B.createElement("path", Zm({}, Zn(h), {
		className: z("recharts-cross", p),
		d: ah(n, i, u, f, o, c)
	}));
};
// node_modules/recharts/es6/util/cursor/getCursorRectangle.js
function sh(e, t, n, r) {
	var i = r / 2;
	return {
		stroke: "none",
		fill: "#ccc",
		x: e === "horizontal" ? t.x - i : n.left + .5,
		y: e === "horizontal" ? n.top + .5 : t.y - i,
		width: e === "horizontal" ? r : n.width - 1,
		height: e === "horizontal" ? n.height - 1 : r
	};
}
var ch = (e, t) => [
	0,
	3 * e,
	3 * t - 6 * e,
	3 * e - 3 * t + 1
], lh = (e, t) => e.map((e, n) => e * t ** n).reduce((e, t) => e + t), uh = (e, t) => (n) => lh(ch(e, t), n), dh = (e, t) => (n) => lh([...ch(e, t).map((e, t) => e * t).slice(1), 0], n), fh = (e) => {
	var t, n = e.split("(");
	if (n.length !== 2 || n[0] !== "cubic-bezier") return null;
	var r = (t = n[1]) == null || (t = t.split(")")[0]) == null ? void 0 : t.split(",");
	if (r == null || r.length !== 4) return null;
	var i = r.map((e) => parseFloat(e));
	return [
		i[0],
		i[1],
		i[2],
		i[3]
	];
}, ph = function() {
	var e = [...arguments];
	if (e.length === 1) switch (e[0]) {
		case "linear": return [
			0,
			0,
			1,
			1
		];
		case "ease": return [
			.25,
			.1,
			.25,
			1
		];
		case "ease-in": return [
			.42,
			0,
			1,
			1
		];
		case "ease-out": return [
			.42,
			0,
			.58,
			1
		];
		case "ease-in-out": return [
			0,
			0,
			.58,
			1
		];
		default:
			var t = fh(e[0]);
			if (t) return t;
	}
	return e.length === 4 ? e : [
		0,
		0,
		1,
		1
	];
}, mh = (e, t, n, r) => {
	var i = uh(e, n), a = uh(t, r), o = dh(e, n), s = (e) => e > 1 ? 1 : e < 0 ? 0 : e, c = (e) => {
		for (var t = e > 1 ? 1 : e, n = t, r = 0; r < 8; ++r) {
			var c = i(n) - t, l = o(n);
			if (Math.abs(c - t) < 1e-4 || l < 1e-4) return a(n);
			n = s(n - c / l);
		}
		return a(n);
	};
	return c.isStepper = !1, c;
}, hh = function() {
	return mh(...ph(...arguments));
}, gh = function() {
	for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.stiff, n = t === void 0 ? 100 : t, r = e.damping, i = r === void 0 ? 8 : r, a = e.dt, o = a === void 0 ? 16.67 : a, s = 1, c = [0], l = 0, u = 0, d = 1e4, f = 0; f < d;) {
		var p = -(l - s) * n, m = u * i;
		if (u += (p - m) * o / 1e3, l += u * o / 1e3, c.push(l), Math.abs(l - s) < 1e-4 && Math.abs(u) < 1e-4) break;
		f++;
	}
	c[c.length - 1] = s;
	var h = c.length - 1;
	return (e) => {
		if (e <= 0) return 0;
		if (e >= 1) return s;
		var t = e * h, n = Math.floor(t), r = t - n;
		return (c[n] ?? 0) + ((c[n + 1] ?? 0) - (c[n] ?? 0)) * r;
	};
}, _h = (e) => {
	if (typeof e == "string") switch (e) {
		case "ease":
		case "ease-in-out":
		case "ease-out":
		case "ease-in":
		case "linear": return hh(e);
		case "spring": return gh();
		default: if (e.split("(")[0] === "cubic-bezier") return hh(e);
	}
	return typeof e == "function" ? e : null;
}, vh = /*#__PURE__*/ (0, B.createContext)((e, t, n) => {
	var r, i = (a) => {
		var o = t.tick(a);
		if (t.getState() === "active") {
			if (n(t.getInterpolated()), t.getProgress() === 1) {
				t.complete(), r = void 0;
				return;
			}
			r = e.setTimeout(i, o);
		} else r = e.setTimeout(i, o);
	};
	return r = e.setTimeout(i, 0), () => r?.();
});
vh.Provider;
function yh(e) {
	var t = (0, B.useContext)(vh);
	return (0, B.useMemo)(() => e ?? t, [e, t]);
}
// node_modules/recharts/es6/animation/AnimationHandle.js
function bh(e, t, n) {
	return (t = xh(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function xh(e) {
	var t = Sh(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Sh(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Ch = "init", wh = "pending", Th = "active", Eh = "completed";
function Dh(e) {
	return Math.max(0, e);
}
var Oh = class {
	getAnimationStartedTime() {
		return this.animationStartedTime;
	}
	getBeginStartedTime() {
		return this.beginStartedTime;
	}
	constructor(e) {
		var t;
		bh(this, "state", Ch), this.animationId = e.animationId, this.onAnimationEnd = e.onAnimationEnd, this.animationDuration = Dh(e.animationDuration), this.animationBegin = Dh(e.animationBegin), this.progress = 0, this.from = e.from, this.to = e.to, this.easing = e.easing, (t = e.onAnimationStart) == null || t.call(e);
	}
	getState() {
		return this.state;
	}
	getEasing() {
		return this.easing;
	}
	getAnimationDuration() {
		return this.animationDuration;
	}
	tick(e) {
		if (this.getState() === Ch) return this.state = wh, this.beginStartedTime = e, this.animationBegin;
		if (this.getState() === wh) {
			if (this.beginStartedTime == null) throw Error();
			var t = e - this.beginStartedTime;
			return t >= this.animationBegin ? (this.state = Th, this.animationStartedTime = e, this.nextAnimationUpdate(0)) : Dh(this.animationBegin - t);
		}
		if (this.getState() === Th) {
			if (this.animationStartedTime == null) throw Error();
			var n = e - this.animationStartedTime;
			return this.setProgress(n / this.animationDuration), this.nextAnimationUpdate(n);
		}
		return 0;
	}
	setProgress(e) {
		this.progress = Math.min(1, Math.max(0, e));
	}
	getProgress() {
		return this.progress;
	}
	complete() {
		if (this.progress = 1, this.state === "active") {
			var e;
			(e = this.onAnimationEnd) == null || e.call(this);
		}
		this.state = Eh;
	}
	getFrom() {
		return this.from;
	}
	getTo() {
		return this.to;
	}
	getAnimationId() {
		return this.animationId;
	}
	getAnimationBegin() {
		return this.animationBegin;
	}
}, kh = class extends Oh {
	nextAnimationUpdate() {
		return 0;
	}
	getInterpolated() {
		return this.easing(U(this.getFrom(), this.getTo(), this.getProgress()));
	}
}, Ah = class {
	setTimeout(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), r = null, i = (a) => {
			a - n >= t ? e(a) : r = requestAnimationFrame(i);
		};
		return r = requestAnimationFrame(i), () => {
			r != null && cancelAnimationFrame(r);
		};
	}
};
// node_modules/recharts/es6/animation/JavascriptAnimate.js
function jh(e, t) {
	return Ih(e) || Fh(e, t) || Nh(e, t) || Mh();
}
function Mh() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Nh(e, t) {
	if (e) {
		if (typeof e == "string") return Ph(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ph(e, t) : void 0;
	}
}
function Ph(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Fh(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Ih(e) {
	if (Array.isArray(e)) return e;
}
var Lh = {
	begin: 0,
	duration: 1e3,
	easing: "ease",
	isActive: !0,
	canBegin: !0,
	onAnimationEnd: () => {},
	onAnimationStart: () => {}
}, Rh = 0, zh = 1;
function Bh(e) {
	var t = za(e, Lh), n = t.animationId, r = t.isActive, i = t.canBegin, a = t.duration, o = t.easing, s = t.begin, c = t.onAnimationEnd, l = t.onAnimationStart, u = t.children, d = ym(), f = r === "auto" ? !fm.isSsr && !d : r, p = yh(t.animationController), m = jh((0, B.useState)(f ? Rh : zh), 2), h = m[0], g = m[1];
	return (0, B.useEffect)(() => {
		f || g(zh);
	}, [f]), (0, B.useEffect)(() => {
		var e = _h(o);
		return !f || !i || e == null ? Pr : p(new Ah(), new kh({
			animationId: n,
			easing: e,
			animationDuration: a,
			animationBegin: s,
			onAnimationStart: l,
			onAnimationEnd: c,
			from: Rh,
			to: zh
		}), g);
	}, [
		p,
		n,
		f,
		i,
		a,
		o,
		s,
		l,
		c
	]), u(Number(h));
}
// node_modules/recharts/es6/util/useAnimationId.js
function Vh(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", n = (0, B.useRef)(Dr(t)), r = (0, B.useRef)(e);
	return r.current !== e && (n.current = Dr(t), r.current = e), n.current;
}
// node_modules/recharts/es6/animation/util.js
var Hh = (e) => e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`), Uh = (e, t, n) => e.map((e) => `${Hh(e)} ${t}ms ${n}`).join(","), Wh = ["radius"], Gh = ["radius"], Kh, qh, Jh, Yh, Xh, Zh, Qh, $h, eg, tg;
function ng(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function rg(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ng(Object(n), !0).forEach(function(t) {
			ig(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ng(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ig(e, t, n) {
	return (t = ag(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ag(e) {
	var t = og(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function og(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function sg() {
	return sg = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, sg.apply(null, arguments);
}
function cg(e, t) {
	if (e == null) return {};
	var n, r, i = lg(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function lg(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function ug(e, t) {
	return hg(e) || mg(e, t) || fg(e, t) || dg();
}
function dg() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function fg(e, t) {
	if (e) {
		if (typeof e == "string") return pg(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pg(e, t) : void 0;
	}
}
function pg(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function mg(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function hg(e) {
	if (Array.isArray(e)) return e;
}
function gg(e, t) {
	return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var _g = (e, t, n, r, i) => {
	var a = br(n), o = br(r), s = Math.min(Math.abs(a) / 2, Math.abs(o) / 2), c = o >= 0 ? 1 : -1, l = a >= 0 ? 1 : -1, u = +(o >= 0 && a >= 0 || o < 0 && a < 0), d;
	if (s > 0 && Array.isArray(i)) {
		for (var f = [
			0,
			0,
			0,
			0
		], p = 0, m = 4; p < m; p++) {
			var h = i[p] ?? 0;
			f[p] = h > s ? s : h;
		}
		d = xr(Kh ||= gg([
			"M",
			",",
			""
		]), e, t + c * f[0]), f[0] > 0 && (d += xr(qh ||= gg([
			"A ",
			",",
			",0,0,",
			",",
			",",
			""
		]), f[0], f[0], u, e + l * f[0], t)), d += xr(Jh ||= gg([
			"L ",
			",",
			""
		]), e + n - l * f[1], t), f[1] > 0 && (d += xr(Yh ||= gg([
			"A ",
			",",
			",0,0,",
			",\n        ",
			",",
			""
		]), f[1], f[1], u, e + n, t + c * f[1])), d += xr(Xh ||= gg([
			"L ",
			",",
			""
		]), e + n, t + r - c * f[2]), f[2] > 0 && (d += xr(Zh ||= gg([
			"A ",
			",",
			",0,0,",
			",\n        ",
			",",
			""
		]), f[2], f[2], u, e + n - l * f[2], t + r)), d += xr(Qh ||= gg([
			"L ",
			",",
			""
		]), e + l * f[3], t + r), f[3] > 0 && (d += xr($h ||= gg([
			"A ",
			",",
			",0,0,",
			",\n        ",
			",",
			""
		]), f[3], f[3], u, e, t + r - c * f[3])), d += "Z";
	} else if (s > 0 && i === +i && i > 0) {
		var g = Math.min(s, i);
		d = xr(eg ||= gg(/* @__PURE__ */ "M .,.\n            A .,.,0,0,.,.,.\n            L .,.\n            A .,.,0,0,.,.,.\n            L .,.\n            A .,.,0,0,.,.,.\n            L .,.\n            A .,.,0,0,.,.,. Z".split(".")), e, t + c * g, g, g, u, e + l * g, t, e + n - l * g, t, g, g, u, e + n, t + c * g, e + n, t + r - c * g, g, g, u, e + n - l * g, t + r, e + l * g, t + r, g, g, u, e, t + r - c * g);
	} else d = xr(tg ||= gg([
		"M ",
		",",
		" h ",
		" v ",
		" h ",
		" Z"
	]), e, t, n, r, -n);
	return d;
}, vg = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	radius: 0,
	isAnimationActive: !1,
	isUpdateAnimationActive: !1,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease"
}, yg = (e) => {
	var t = za(e, vg), n = (0, B.useRef)(null), r = ug((0, B.useState)(-1), 2), i = r[0], a = r[1];
	(0, B.useEffect)(() => {
		if (n.current && n.current.getTotalLength) try {
			var e = n.current.getTotalLength();
			e && a(e);
		} catch {}
	}, []);
	var o = t.x, s = t.y, c = t.width, l = t.height, u = t.radius, d = t.className, f = t.animationEasing, p = t.animationDuration, m = t.animationBegin, h = t.isAnimationActive, g = t.isUpdateAnimationActive, _ = (0, B.useRef)(c), v = (0, B.useRef)(l), y = (0, B.useRef)(o), b = (0, B.useRef)(s), x = Vh((0, B.useMemo)(() => ({
		x: o,
		y: s,
		width: c,
		height: l,
		radius: u
	}), [
		o,
		s,
		c,
		l,
		u
	]), "rectangle-");
	if (o !== +o || s !== +s || c !== +c || l !== +l || c === 0 || l === 0) return null;
	var S = z("recharts-rectangle", d);
	if (!g) {
		var C = Zn(t);
		C.radius;
		var w = cg(C, Wh);
		return /*#__PURE__*/ B.createElement("path", sg({}, w, {
			x: br(o),
			y: br(s),
			width: br(c),
			height: br(l),
			radius: typeof u == "number" ? u : void 0,
			className: S,
			d: _g(o, s, c, l, u)
		}));
	}
	var T = _.current, E = v.current, D = y.current, O = b.current, k = `0px ${i === -1 ? 1 : i}px`, A = `${i}px ${i}px`, j = Uh(["strokeDasharray"], p, typeof f == "string" ? f : vg.animationEasing);
	return /*#__PURE__*/ B.createElement(Bh, {
		animationId: x,
		key: x,
		canBegin: i > 0,
		duration: p,
		easing: f,
		isActive: g,
		begin: m
	}, (e) => {
		var r = U(T, c, e), i = U(E, l, e), a = U(D, o, e), d = U(O, s, e);
		n.current && (_.current = r, v.current = i, y.current = a, b.current = d);
		var f = h ? e > 0 ? {
			transition: j,
			strokeDasharray: A
		} : { strokeDasharray: k } : { strokeDasharray: A }, p = Zn(t);
		p.radius;
		var m = cg(p, Gh);
		return /*#__PURE__*/ B.createElement("path", sg({}, m, {
			radius: typeof u == "number" ? u : void 0,
			className: S,
			d: _g(a, d, r, i, u),
			ref: n,
			style: rg(rg({}, f), t.style)
		}));
	});
};
// node_modules/recharts/es6/util/PolarUtils.js
function bg(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function xg(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? bg(Object(n), !0).forEach(function(t) {
			Sg(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bg(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Sg(e, t, n) {
	return (t = Cg(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Cg(e) {
	var t = wg(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function wg(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Tg = Math.PI / 180, Eg = (e) => e * 180 / Math.PI, Dg = (e, t, n, r) => ({
	x: e + Math.cos(-Tg * r) * n,
	y: t + Math.sin(-Tg * r) * n
}), Og = function(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: 0,
		height: 0,
		brushBottom: 0
	};
	return Math.min(Math.abs(e - (n.left || 0) - (n.right || 0)), Math.abs(t - (n.top || 0) - (n.bottom || 0))) / 2;
}, kg = (e, t) => {
	var n = e.x, r = e.y, i = t.x, a = t.y;
	return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
}, Ag = (e, t) => {
	var n = e.x, r = e.y, i = t.cx, a = t.cy, o = kg({
		x: n,
		y: r
	}, {
		x: i,
		y: a
	});
	if (o <= 0) return {
		radius: o,
		angle: 0
	};
	var s = (n - i) / o, c = Math.acos(s);
	return r > a && (c = 2 * Math.PI - c), {
		radius: o,
		angle: Eg(c),
		angleInRadian: c
	};
}, jg = (e) => {
	var t = e.startAngle, n = e.endAngle, r = Math.floor(t / 360), i = Math.floor(n / 360), a = Math.min(r, i);
	return {
		startAngle: t - a * 360,
		endAngle: n - a * 360
	};
}, Mg = (e, t) => {
	var n = t.startAngle, r = t.endAngle, i = Math.floor(n / 360), a = Math.floor(r / 360);
	return e + Math.min(i, a) * 360;
}, Ng = (e, t) => {
	var n = e.relativeX, r = e.relativeY, i = Ag({
		x: n,
		y: r
	}, t), a = i.radius, o = i.angle, s = t.innerRadius, c = t.outerRadius;
	if (a < s || a > c || a === 0) return null;
	var l = jg(t), u = l.startAngle, d = l.endAngle, f = o, p;
	if (u <= d) {
		for (; f > d;) f -= 360;
		for (; f < u;) f += 360;
		p = f >= u && f <= d;
	} else {
		for (; f > u;) f -= 360;
		for (; f < d;) f += 360;
		p = f >= d && f <= u;
	}
	return p ? xg(xg({}, t), {}, {
		radius: a,
		angle: Mg(f, t)
	}) : null;
};
// node_modules/recharts/es6/util/cursor/getRadialCursorPoints.js
function Pg(e) {
	var t = e.cx, n = e.cy, r = e.radius, i = e.startAngle, a = e.endAngle;
	return {
		points: [Dg(t, n, r, i), Dg(t, n, r, a)],
		cx: t,
		cy: n,
		radius: r,
		startAngle: i,
		endAngle: a
	};
}
// node_modules/recharts/es6/shape/Sector.js
var Fg, Ig, Lg, Rg, zg, Bg, Vg;
function Hg() {
	return Hg = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Hg.apply(null, arguments);
}
function Ug(e, t) {
	return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var Wg = (e, t) => Sr(t - e) * Math.min(Math.abs(t - e), 359.999), Gg = (e) => {
	var t = e.cx, n = e.cy, r = e.radius, i = e.angle, a = e.sign, o = e.isExternal, s = e.cornerRadius, c = e.cornerIsExternal, l = s * (o ? 1 : -1) + r, u = Math.asin(s / l) / Tg, d = c ? i : i + a * u, f = Dg(t, n, l, d), p = Dg(t, n, r, d), m = c ? i - a * u : i;
	return {
		center: f,
		circleTangency: p,
		lineTangency: Dg(t, n, l * Math.cos(u * Tg), m),
		theta: u
	};
}, Kg = (e) => {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.startAngle, o = e.endAngle, s = Wg(a, o), c = a + s, l = Dg(t, n, i, a), u = Dg(t, n, i, c), d = xr(Fg ||= Ug([
		"M ",
		",",
		"\n    A ",
		",",
		",0,\n    ",
		",",
		",\n    ",
		",",
		"\n  "
	]), l.x, l.y, i, i, +(Math.abs(s) > 180), +(a > c), u.x, u.y);
	if (r > 0) {
		var f = Dg(t, n, r, a), p = Dg(t, n, r, c);
		d += xr(Ig ||= Ug([
			"L ",
			",",
			"\n            A ",
			",",
			",0,\n            ",
			",",
			",\n            ",
			",",
			" Z"
		]), p.x, p.y, r, r, +(Math.abs(s) > 180), +(a <= c), f.x, f.y);
	} else d += xr(Lg ||= Ug([
		"L ",
		",",
		" Z"
	]), t, n);
	return d;
}, qg = (e) => {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.cornerRadius, o = e.forceCornerRadius, s = e.cornerIsExternal, c = e.startAngle, l = e.endAngle, u = Sr(l - c), d = Gg({
		cx: t,
		cy: n,
		radius: i,
		angle: c,
		sign: u,
		cornerRadius: a,
		cornerIsExternal: s
	}), f = d.circleTangency, p = d.lineTangency, m = d.theta, h = Gg({
		cx: t,
		cy: n,
		radius: i,
		angle: l,
		sign: -u,
		cornerRadius: a,
		cornerIsExternal: s
	}), g = h.circleTangency, _ = h.lineTangency, v = h.theta, y = s ? Math.abs(c - l) : Math.abs(c - l) - m - v;
	if (y < 0) return o ? xr(Rg ||= Ug([
		"M ",
		",",
		"\n        a",
		",",
		",0,0,1,",
		",0\n        a",
		",",
		",0,0,1,",
		",0\n      "
	]), p.x, p.y, a, a, a * 2, a, a, -a * 2) : Kg({
		cx: t,
		cy: n,
		innerRadius: r,
		outerRadius: i,
		startAngle: c,
		endAngle: l
	});
	var b = xr(zg ||= Ug([
		"M ",
		",",
		"\n    A",
		",",
		",0,0,",
		",",
		",",
		"\n    A",
		",",
		",0,",
		",",
		",",
		",",
		"\n    A",
		",",
		",0,0,",
		",",
		",",
		"\n  "
	]), p.x, p.y, a, a, +(u < 0), f.x, f.y, i, i, +(y > 180), +(u < 0), g.x, g.y, a, a, +(u < 0), _.x, _.y);
	if (r > 0) {
		var x = Gg({
			cx: t,
			cy: n,
			radius: r,
			angle: c,
			sign: u,
			isExternal: !0,
			cornerRadius: a,
			cornerIsExternal: s
		}), S = x.circleTangency, C = x.lineTangency, w = x.theta, T = Gg({
			cx: t,
			cy: n,
			radius: r,
			angle: l,
			sign: -u,
			isExternal: !0,
			cornerRadius: a,
			cornerIsExternal: s
		}), E = T.circleTangency, D = T.lineTangency, O = T.theta, k = s ? Math.abs(c - l) : Math.abs(c - l) - w - O;
		if (k < 0 && a === 0) return `${b}L${t},${n}Z`;
		b += xr(Bg ||= Ug([
			"L",
			",",
			"\n      A",
			",",
			",0,0,",
			",",
			",",
			"\n      A",
			",",
			",0,",
			",",
			",",
			",",
			"\n      A",
			",",
			",0,0,",
			",",
			",",
			"Z"
		]), D.x, D.y, a, a, +(u < 0), E.x, E.y, r, r, +(k > 180), +(u > 0), S.x, S.y, a, a, +(u < 0), C.x, C.y);
	} else b += xr(Vg ||= Ug([
		"L",
		",",
		"Z"
	]), t, n);
	return b;
}, Jg = {
	cx: 0,
	cy: 0,
	innerRadius: 0,
	outerRadius: 0,
	startAngle: 0,
	endAngle: 0,
	cornerRadius: 0,
	forceCornerRadius: !1,
	cornerIsExternal: !1
}, Yg = (e) => {
	var t = za(e, Jg), n = t.cx, r = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, c = t.cornerIsExternal, l = t.startAngle, u = t.endAngle, d = t.className;
	if (a < i || l === u) return null;
	var f = z("recharts-sector", d), p = a - i, m = Or(o, p, 0, !0), h = m > 0 && Math.abs(l - u) < 360 ? qg({
		cx: n,
		cy: r,
		innerRadius: i,
		outerRadius: a,
		cornerRadius: Math.min(m, p / 2),
		forceCornerRadius: s,
		cornerIsExternal: c,
		startAngle: l,
		endAngle: u
	}) : Kg({
		cx: n,
		cy: r,
		innerRadius: i,
		outerRadius: a,
		startAngle: l,
		endAngle: u
	});
	return /*#__PURE__*/ B.createElement("path", Hg({}, Zn(t), {
		className: f,
		d: h
	}));
};
// node_modules/recharts/es6/util/cursor/getCursorPoints.js
function Xg(e, t, n) {
	if (e === "horizontal") return [{
		x: t.x,
		y: n.top
	}, {
		x: t.x,
		y: n.top + n.height
	}];
	if (e === "vertical") return [{
		x: n.left,
		y: t.y
	}, {
		x: n.left + n.width,
		y: t.y
	}];
	if (Aa(t)) {
		if (e === "centric") {
			var r = t.cx, i = t.cy, a = t.innerRadius, o = t.outerRadius, s = t.angle, c = Dg(r, i, a, s), l = Dg(r, i, o, s);
			return [{
				x: c.x,
				y: c.y
			}, {
				x: l.x,
				y: l.y
			}];
		}
		return Pg(t);
	}
}
// node_modules/es-toolkit/dist/compat/util/toNumber.mjs
function Zg(e) {
	return pr(e) ? NaN : Number(e);
}
// node_modules/es-toolkit/dist/compat/util/toFinite.mjs
function Qg(e) {
	return e ? (e = Zg(e), e === Infinity || e === -Infinity ? (e < 0 ? -1 : 1) * Number.MAX_VALUE : e === e ? e : 0) : e === 0 ? e : 0;
}
// node_modules/es-toolkit/dist/compat/math/range.mjs
function $g(e, t, n) {
	n && typeof n != "number" && ks(e, t, n) && (t = n = void 0), e = Qg(e), t === void 0 ? (t = e, e = 0) : t = Qg(t), n = n === void 0 ? e < t ? 1 : -1 : Qg(n);
	let r = Math.max(Math.ceil((t - e) / (n || 1)), 0), i = Array(r);
	for (let t = 0; t < r; t++) i[t] = e, e += n;
	return i;
}
// node_modules/recharts/es6/state/selectors/dataSelectors.js
var e_ = (e) => e.chartData, t_ = K([e_], (e) => {
	var t = e.chartData == null ? 0 : e.chartData.length - 1;
	return {
		chartData: e.chartData,
		computedData: e.computedData,
		dataEndIndex: t,
		dataStartIndex: 0
	};
}), n_ = (e, t, n, r) => r ? t_(e) : e_(e), r_ = (e, t, n) => n ? t_(e) : e_(e), i_ = K([n_], (e) => {
	var t = e.chartData, n = e.dataStartIndex, r = e.dataEndIndex;
	return t == null ? [] : t.slice(n, r + 1);
}), a_ = K([t_], (e) => {
	var t = e.chartData, n = e.dataStartIndex, r = e.dataEndIndex;
	return t == null ? [] : t.slice(n, r + 1);
}), o_ = K([e_], (e) => {
	var t = e.chartData, n = e.dataStartIndex, r = e.dataEndIndex;
	return t == null ? [] : t.slice(n, r + 1);
});
// node_modules/recharts/es6/util/isDomainSpecifiedByUser.js
function s_(e, t) {
	return f_(e) || d_(e, t) || l_(e, t) || c_();
}
function c_() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function l_(e, t) {
	if (e) {
		if (typeof e == "string") return u_(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u_(e, t) : void 0;
	}
}
function u_(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function d_(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function f_(e) {
	if (Array.isArray(e)) return e;
}
function p_(e) {
	if (Array.isArray(e) && e.length === 2) {
		var t = s_(e, 2), n = t[0], r = t[1];
		if (Y(n) && Y(r)) return !0;
	}
	return !1;
}
function m_(e, t, n) {
	return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function h_(e, t) {
	if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
		var n = s_(e, 2), r = n[0], i = n[1], a, o;
		if (Y(r)) a = r;
		else if (typeof r == "function") return;
		if (Y(i)) o = i;
		else if (typeof i == "function") return;
		var s = [a, o];
		if (p_(s)) return s;
	}
}
function g_(e, t, n) {
	if (n || t != null) {
		if (typeof e == "function" && t != null) try {
			var r = e(t, n);
			if (p_(r)) return m_(r, t, n);
		} catch {}
		if (Array.isArray(e) && e.length === 2) {
			var i = s_(e, 2), a = i[0], o = i[1], s, c;
			if (a === "auto") t != null && (s = Math.min(...t));
			else if (H(a)) s = a;
			else if (typeof a == "function") try {
				t != null && (s = a(t?.[0]));
			} catch {}
			else if (typeof a == "string" && _d.test(a)) {
				var l = _d.exec(a);
				if (l == null || l[1] == null || t == null) s = void 0;
				else {
					var u = +l[1];
					s = t[0] - u;
				}
			} else s = t?.[0];
			if (o === "auto") t != null && (c = Math.max(...t));
			else if (H(o)) c = o;
			else if (typeof o == "function") try {
				t != null && (c = o(t?.[1]));
			} catch {}
			else if (typeof o == "string" && vd.test(o)) {
				var d = vd.exec(o);
				if (d == null || d[1] == null || t == null) c = void 0;
				else {
					var f = +d[1];
					c = t[1] + f;
				}
			} else c = t?.[1];
			var p = [s, c];
			if (p_(p)) return t == null ? p : m_(p, t, n);
		}
	}
}
// node_modules/recharts/es6/util/scale/util/arithmetic.js
var Q = /* @__PURE__ */ Ne((/* @__PURE__ */ je(((e, t, n) => {
	(function(e) {
		var n = 1e9, r = {
			precision: 20,
			rounding: 4,
			toExpNeg: -7,
			toExpPos: 21,
			LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
		}, i = !0, a = "[DecimalError] ", o = a + "Invalid argument: ", s = a + "Exponent out of range: ", c = Math.floor, l = Math.pow, u = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, d, f = 1e7, p = 7, m = 9007199254740991, h = c(m / p), g = {};
		g.absoluteValue = g.abs = function() {
			var e = new this.constructor(this);
			return e.s &&= 1, e;
		}, g.comparedTo = g.cmp = function(e) {
			var t, n, r, i, a = this;
			if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
			if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
			for (r = a.d.length, i = e.d.length, t = 0, n = r < i ? r : i; t < n; ++t) if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
			return r === i ? 0 : r > i ^ a.s < 0 ? 1 : -1;
		}, g.decimalPlaces = g.dp = function() {
			var e = this, t = e.d.length - 1, n = (t - e.e) * p;
			if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) n--;
			return n < 0 ? 0 : n;
		}, g.dividedBy = g.div = function(e) {
			return b(this, new this.constructor(e));
		}, g.dividedToIntegerBy = g.idiv = function(e) {
			var t = this, n = t.constructor;
			return D(b(t, new n(e), 0, 1), n.precision);
		}, g.equals = g.eq = function(e) {
			return !this.cmp(e);
		}, g.exponent = function() {
			return S(this);
		}, g.greaterThan = g.gt = function(e) {
			return this.cmp(e) > 0;
		}, g.greaterThanOrEqualTo = g.gte = function(e) {
			return this.cmp(e) >= 0;
		}, g.isInteger = g.isint = function() {
			return this.e > this.d.length - 2;
		}, g.isNegative = g.isneg = function() {
			return this.s < 0;
		}, g.isPositive = g.ispos = function() {
			return this.s > 0;
		}, g.isZero = function() {
			return this.s === 0;
		}, g.lessThan = g.lt = function(e) {
			return this.cmp(e) < 0;
		}, g.lessThanOrEqualTo = g.lte = function(e) {
			return this.cmp(e) < 1;
		}, g.logarithm = g.log = function(e) {
			var t, n = this, r = n.constructor, o = r.precision, s = o + 5;
			if (e === void 0) e = new r(10);
			else if (e = new r(e), e.s < 1 || e.eq(d)) throw Error(a + "NaN");
			if (n.s < 1) throw Error(a + (n.s ? "NaN" : "-Infinity"));
			return n.eq(d) ? new r(0) : (i = !1, t = b(T(n, s), T(e, s), s), i = !0, D(t, o));
		}, g.minus = g.sub = function(e) {
			var t = this;
			return e = new t.constructor(e), t.s == e.s ? O(t, e) : _(t, (e.s = -e.s, e));
		}, g.modulo = g.mod = function(e) {
			var t, n = this, r = n.constructor, o = r.precision;
			if (e = new r(e), !e.s) throw Error(a + "NaN");
			return n.s ? (i = !1, t = b(n, e, 0, 1).times(e), i = !0, n.minus(t)) : D(new r(n), o);
		}, g.naturalExponential = g.exp = function() {
			return x(this);
		}, g.naturalLogarithm = g.ln = function() {
			return T(this);
		}, g.negated = g.neg = function() {
			var e = new this.constructor(this);
			return e.s = -e.s || 0, e;
		}, g.plus = g.add = function(e) {
			var t = this;
			return e = new t.constructor(e), t.s == e.s ? _(t, e) : O(t, (e.s = -e.s, e));
		}, g.precision = g.sd = function(e) {
			var t, n, r, i = this;
			if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(o + e);
			if (t = S(i) + 1, r = i.d.length - 1, n = r * p + 1, r = i.d[r], r) {
				for (; r % 10 == 0; r /= 10) n--;
				for (r = i.d[0]; r >= 10; r /= 10) n++;
			}
			return e && t > n ? t : n;
		}, g.squareRoot = g.sqrt = function() {
			var e, t, n, r, o, s, l, u = this, d = u.constructor;
			if (u.s < 1) {
				if (!u.s) return new d(0);
				throw Error(a + "NaN");
			}
			for (e = S(u), i = !1, o = Math.sqrt(+u), o == 0 || o == 1 / 0 ? (t = y(u.d), (t.length + e) % 2 == 0 && (t += "0"), o = Math.sqrt(t), e = c((e + 1) / 2) - (e < 0 || e % 2), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), r = new d(t)) : r = new d(o.toString()), n = d.precision, o = l = n + 3;;) if (s = r, r = s.plus(b(u, s, l + 2)).times(.5), y(s.d).slice(0, l) === (t = y(r.d)).slice(0, l)) {
				if (t = t.slice(l - 3, l + 1), o == l && t == "4999") {
					if (D(s, n + 1, 0), s.times(s).eq(u)) {
						r = s;
						break;
					}
				} else if (t != "9999") break;
				l += 4;
			}
			return i = !0, D(r, n);
		}, g.times = g.mul = function(e) {
			var t, n, r, a, o, s, c, l, u, d = this, p = d.constructor, m = d.d, h = (e = new p(e)).d;
			if (!d.s || !e.s) return new p(0);
			for (e.s *= d.s, n = d.e + e.e, l = m.length, u = h.length, l < u && (o = m, m = h, h = o, s = l, l = u, u = s), o = [], s = l + u, r = s; r--;) o.push(0);
			for (r = u; --r >= 0;) {
				for (t = 0, a = l + r; a > r;) c = o[a] + h[r] * m[a - r - 1] + t, o[a--] = c % f | 0, t = c / f | 0;
				o[a] = (o[a] + t) % f | 0;
			}
			for (; !o[--s];) o.pop();
			return t ? ++n : o.shift(), e.d = o, e.e = n, i ? D(e, p.precision) : e;
		}, g.toDecimalPlaces = g.todp = function(e, t) {
			var r = this, i = r.constructor;
			return r = new i(r), e === void 0 ? r : (v(e, 0, n), t === void 0 ? t = i.rounding : v(t, 0, 8), D(r, e + S(r) + 1, t));
		}, g.toExponential = function(e, t) {
			var r, i = this, a = i.constructor;
			return e === void 0 ? r = k(i, !0) : (v(e, 0, n), t === void 0 ? t = a.rounding : v(t, 0, 8), i = D(new a(i), e + 1, t), r = k(i, !0, e + 1)), r;
		}, g.toFixed = function(e, t) {
			var r, i, a = this, o = a.constructor;
			return e === void 0 ? k(a) : (v(e, 0, n), t === void 0 ? t = o.rounding : v(t, 0, 8), i = D(new o(a), e + S(a) + 1, t), r = k(i.abs(), !1, e + S(i) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
		}, g.toInteger = g.toint = function() {
			var e = this, t = e.constructor;
			return D(new t(e), S(e) + 1, t.rounding);
		}, g.toNumber = function() {
			return +this;
		}, g.toPower = g.pow = function(e) {
			var t, n, r, o, s, l, u = this, f = u.constructor, h = 12, g = +(e = new f(e));
			if (!e.s) return new f(d);
			if (u = new f(u), !u.s) {
				if (e.s < 1) throw Error(a + "Infinity");
				return u;
			}
			if (u.eq(d)) return u;
			if (r = f.precision, e.eq(d)) return D(u, r);
			if (t = e.e, n = e.d.length - 1, l = t >= n, s = u.s, !l) {
				if (s < 0) throw Error(a + "NaN");
			} else if ((n = g < 0 ? -g : g) <= m) {
				for (o = new f(d), t = Math.ceil(r / p + 4), i = !1; n % 2 && (o = o.times(u), A(o.d, t)), n = c(n / 2), n !== 0;) u = u.times(u), A(u.d, t);
				return i = !0, e.s < 0 ? new f(d).div(o) : D(o, r);
			}
			return s = s < 0 && e.d[Math.max(t, n)] & 1 ? -1 : 1, u.s = 1, i = !1, o = e.times(T(u, r + h)), i = !0, o = x(o), o.s = s, o;
		}, g.toPrecision = function(e, t) {
			var r, i, a = this, o = a.constructor;
			return e === void 0 ? (r = S(a), i = k(a, r <= o.toExpNeg || r >= o.toExpPos)) : (v(e, 1, n), t === void 0 ? t = o.rounding : v(t, 0, 8), a = D(new o(a), e, t), r = S(a), i = k(a, e <= r || r <= o.toExpNeg, e)), i;
		}, g.toSignificantDigits = g.tosd = function(e, t) {
			var r = this, i = r.constructor;
			return e === void 0 ? (e = i.precision, t = i.rounding) : (v(e, 1, n), t === void 0 ? t = i.rounding : v(t, 0, 8)), D(new i(r), e, t);
		}, g.toString = g.valueOf = g.val = g.toJSON = function() {
			var e = this, t = S(e), n = e.constructor;
			return k(e, t <= n.toExpNeg || t >= n.toExpPos);
		};
		function _(e, t) {
			var n, r, a, o, s, c, l, u, d = e.constructor, m = d.precision;
			if (!e.s || !t.s) return t.s || (t = new d(e)), i ? D(t, m) : t;
			if (l = e.d, u = t.d, s = e.e, a = t.e, l = l.slice(), o = s - a, o) {
				for (o < 0 ? (r = l, o = -o, c = u.length) : (r = u, a = s, c = l.length), s = Math.ceil(m / p), c = s > c ? s + 1 : c + 1, o > c && (o = c, r.length = 1), r.reverse(); o--;) r.push(0);
				r.reverse();
			}
			for (c = l.length, o = u.length, c - o < 0 && (o = c, r = u, u = l, l = r), n = 0; o;) n = (l[--o] = l[o] + u[o] + n) / f | 0, l[o] %= f;
			for (n && (l.unshift(n), ++a), c = l.length; l[--c] == 0;) l.pop();
			return t.d = l, t.e = a, i ? D(t, m) : t;
		}
		function v(e, t, n) {
			if (e !== ~~e || e < t || e > n) throw Error(o + e);
		}
		function y(e) {
			var t, n, r, i = e.length - 1, a = "", o = e[0];
			if (i > 0) {
				for (a += o, t = 1; t < i; t++) r = e[t] + "", n = p - r.length, n && (a += w(n)), a += r;
				o = e[t], r = o + "", n = p - r.length, n && (a += w(n));
			} else if (o === 0) return "0";
			for (; o % 10 == 0;) o /= 10;
			return a + o;
		}
		var b = (function() {
			function e(e, t) {
				var n, r = 0, i = e.length;
				for (e = e.slice(); i--;) n = e[i] * t + r, e[i] = n % f | 0, r = n / f | 0;
				return r && e.unshift(r), e;
			}
			function t(e, t, n, r) {
				var i, a;
				if (n != r) a = n > r ? 1 : -1;
				else for (i = a = 0; i < n; i++) if (e[i] != t[i]) {
					a = e[i] > t[i] ? 1 : -1;
					break;
				}
				return a;
			}
			function n(e, t, n) {
				for (var r = 0; n--;) e[n] -= r, r = +(e[n] < t[n]), e[n] = r * f + e[n] - t[n];
				for (; !e[0] && e.length > 1;) e.shift();
			}
			return function(r, i, o, s) {
				var c, l, u, d, m, h, g, _, v, y, b, x, C, w, T, E, O, k, A = r.constructor, j = r.s == i.s ? 1 : -1, M = r.d, N = i.d;
				if (!r.s) return new A(r);
				if (!i.s) throw Error(a + "Division by zero");
				for (l = r.e - i.e, O = N.length, T = M.length, g = new A(j), _ = g.d = [], u = 0; N[u] == (M[u] || 0);) ++u;
				if (N[u] > (M[u] || 0) && --l, x = o == null ? o = A.precision : s ? o + (S(r) - S(i)) + 1 : o, x < 0) return new A(0);
				if (x = x / p + 2 | 0, u = 0, O == 1) for (d = 0, N = N[0], x++; (u < T || d) && x--; u++) C = d * f + (M[u] || 0), _[u] = C / N | 0, d = C % N | 0;
				else {
					for (d = f / (N[0] + 1) | 0, d > 1 && (N = e(N, d), M = e(M, d), O = N.length, T = M.length), w = O, v = M.slice(0, O), y = v.length; y < O;) v[y++] = 0;
					k = N.slice(), k.unshift(0), E = N[0], N[1] >= f / 2 && ++E;
					do
						d = 0, c = t(N, v, O, y), c < 0 ? (b = v[0], O != y && (b = b * f + (v[1] || 0)), d = b / E | 0, d > 1 ? (d >= f && (d = f - 1), m = e(N, d), h = m.length, y = v.length, c = t(m, v, h, y), c == 1 && (d--, n(m, O < h ? k : N, h))) : (d == 0 && (c = d = 1), m = N.slice()), h = m.length, h < y && m.unshift(0), n(v, m, y), c == -1 && (y = v.length, c = t(N, v, O, y), c < 1 && (d++, n(v, O < y ? k : N, y))), y = v.length) : c === 0 && (d++, v = [0]), _[u++] = d, c && v[0] ? v[y++] = M[w] || 0 : (v = [M[w]], y = 1);
					while ((w++ < T || v[0] !== void 0) && x--);
				}
				return _[0] || _.shift(), g.e = l, D(g, s ? o + S(g) + 1 : o);
			};
		})();
		function x(e, t) {
			var n, r, a, o, c, u, f = 0, p = 0, m = e.constructor, h = m.precision;
			if (S(e) > 16) throw Error(s + S(e));
			if (!e.s) return new m(d);
			for (t == null ? (i = !1, u = h) : u = t, c = new m(.03125); e.abs().gte(.1);) e = e.times(c), p += 5;
			for (r = Math.log(l(2, p)) / Math.LN10 * 2 + 5 | 0, u += r, n = a = o = new m(d), m.precision = u;;) {
				if (a = D(a.times(e), u), n = n.times(++f), c = o.plus(b(a, n, u)), y(c.d).slice(0, u) === y(o.d).slice(0, u)) {
					for (; p--;) o = D(o.times(o), u);
					return m.precision = h, t == null ? (i = !0, D(o, h)) : o;
				}
				o = c;
			}
		}
		function S(e) {
			for (var t = e.e * p, n = e.d[0]; n >= 10; n /= 10) t++;
			return t;
		}
		function C(e, t, n) {
			if (t > e.LN10.sd()) throw i = !0, n && (e.precision = n), Error(a + "LN10 precision limit exceeded");
			return D(new e(e.LN10), t);
		}
		function w(e) {
			for (var t = ""; e--;) t += "0";
			return t;
		}
		function T(e, t) {
			var n, r, o, s, c, l, u, f, p, m = 1, h = 10, g = e, _ = g.d, v = g.constructor, x = v.precision;
			if (g.s < 1) throw Error(a + (g.s ? "NaN" : "-Infinity"));
			if (g.eq(d)) return new v(0);
			if (t == null ? (i = !1, f = x) : f = t, g.eq(10)) return t ?? (i = !0), C(v, f);
			if (f += h, v.precision = f, n = y(_), r = n.charAt(0), s = S(g), Math.abs(s) < 0x5543df729c000) {
				for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3;) g = g.times(e), n = y(g.d), r = n.charAt(0), m++;
				s = S(g), r > 1 ? (g = new v("0." + n), s++) : g = new v(r + "." + n.slice(1));
			} else return u = C(v, f + 2, x).times(s + ""), g = T(new v(r + "." + n.slice(1)), f - h).plus(u), v.precision = x, t == null ? (i = !0, D(g, x)) : g;
			for (l = c = g = b(g.minus(d), g.plus(d), f), p = D(g.times(g), f), o = 3;;) {
				if (c = D(c.times(p), f), u = l.plus(b(c, new v(o), f)), y(u.d).slice(0, f) === y(l.d).slice(0, f)) return l = l.times(2), s !== 0 && (l = l.plus(C(v, f + 2, x).times(s + ""))), l = b(l, new v(m), f), v.precision = x, t == null ? (i = !0, D(l, x)) : l;
				l = u, o += 2;
			}
		}
		function E(e, t) {
			var n, r, a;
			for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48;) ++r;
			for (a = t.length; t.charCodeAt(a - 1) === 48;) --a;
			if (t = t.slice(r, a), t) {
				if (a -= r, n = n - r - 1, e.e = c(n / p), e.d = [], r = (n + 1) % p, n < 0 && (r += p), r < a) {
					for (r && e.d.push(+t.slice(0, r)), a -= p; r < a;) e.d.push(+t.slice(r, r += p));
					t = t.slice(r), r = p - t.length;
				} else r -= a;
				for (; r--;) t += "0";
				if (e.d.push(+t), i && (e.e > h || e.e < -h)) throw Error(s + n);
			} else e.s = 0, e.e = 0, e.d = [0];
			return e;
		}
		function D(e, t, n) {
			var r, a, o, u, d, m, g, _, v = e.d;
			for (u = 1, o = v[0]; o >= 10; o /= 10) u++;
			if (r = t - u, r < 0) r += p, a = t, g = v[_ = 0];
			else {
				if (_ = Math.ceil((r + 1) / p), o = v.length, _ >= o) return e;
				for (g = o = v[_], u = 1; o >= 10; o /= 10) u++;
				r %= p, a = r - p + u;
			}
			if (n !== void 0 && (o = l(10, u - a - 1), d = g / o % 10 | 0, m = t < 0 || v[_ + 1] !== void 0 || g % o, m = n < 4 ? (d || m) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : d > 5 || d == 5 && (n == 4 || m || n == 6 && (r > 0 ? a > 0 ? g / l(10, u - a) : 0 : v[_ - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7))), t < 1 || !v[0]) return m ? (o = S(e), v.length = 1, t = t - o - 1, v[0] = l(10, (p - t % p) % p), e.e = c(-t / p) || 0) : (v.length = 1, v[0] = e.e = e.s = 0), e;
			if (r == 0 ? (v.length = _, o = 1, _--) : (v.length = _ + 1, o = l(10, p - r), v[_] = a > 0 ? (g / l(10, u - a) % l(10, a) | 0) * o : 0), m) for (;;) if (_ == 0) {
				(v[0] += o) == f && (v[0] = 1, ++e.e);
				break;
			} else {
				if (v[_] += o, v[_] != f) break;
				v[_--] = 0, o = 1;
			}
			for (r = v.length; v[--r] === 0;) v.pop();
			if (i && (e.e > h || e.e < -h)) throw Error(s + S(e));
			return e;
		}
		function O(e, t) {
			var n, r, a, o, s, c, l, u, d, m, h = e.constructor, g = h.precision;
			if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new h(e), i ? D(t, g) : t;
			if (l = e.d, m = t.d, r = t.e, u = e.e, l = l.slice(), s = u - r, s) {
				for (d = s < 0, d ? (n = l, s = -s, c = m.length) : (n = m, r = u, c = l.length), a = Math.max(Math.ceil(g / p), c) + 2, s > a && (s = a, n.length = 1), n.reverse(), a = s; a--;) n.push(0);
				n.reverse();
			} else {
				for (a = l.length, c = m.length, d = a < c, d && (c = a), a = 0; a < c; a++) if (l[a] != m[a]) {
					d = l[a] < m[a];
					break;
				}
				s = 0;
			}
			for (d && (n = l, l = m, m = n, t.s = -t.s), c = l.length, a = m.length - c; a > 0; --a) l[c++] = 0;
			for (a = m.length; a > s;) {
				if (l[--a] < m[a]) {
					for (o = a; o && l[--o] === 0;) l[o] = f - 1;
					--l[o], l[a] += f;
				}
				l[a] -= m[a];
			}
			for (; l[--c] === 0;) l.pop();
			for (; l[0] === 0; l.shift()) --r;
			return l[0] ? (t.d = l, t.e = r, i ? D(t, g) : t) : new h(0);
		}
		function k(e, t, n) {
			var r, i = S(e), a = y(e.d), o = a.length;
			return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + w(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + w(-i - 1) + a, n && (r = n - o) > 0 && (a += w(r))) : i >= o ? (a += w(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + w(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += w(r))), e.s < 0 ? "-" + a : a;
		}
		function A(e, t) {
			if (e.length > t) return e.length = t, !0;
		}
		function j(e) {
			var t, n, r;
			function i(e) {
				var t = this;
				if (!(t instanceof i)) return new i(e);
				if (t.constructor = i, e instanceof i) t.s = e.s, t.e = e.e, t.d = (e = e.d) ? e.slice() : e;
				else {
					if (typeof e == "number") {
						if (e * 0 != 0) throw Error(o + e);
						if (e > 0) t.s = 1;
						else if (e < 0) e = -e, t.s = -1;
						else {
							t.s = 0, t.e = 0, t.d = [0];
							return;
						}
						if (e === ~~e && e < 1e7) {
							t.e = 0, t.d = [e];
							return;
						}
						return E(t, e.toString());
					}
					if (typeof e != "string") throw Error(o + e);
					if (e.charCodeAt(0) === 45 ? (e = e.slice(1), t.s = -1) : t.s = 1, u.test(e)) E(t, e);
					else throw Error(o + e);
				}
			}
			if (i.prototype = g, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = j, i.config = i.set = M, e === void 0 && (e = {}), e) for (r = [
				"precision",
				"rounding",
				"toExpNeg",
				"toExpPos",
				"LN10"
			], t = 0; t < r.length;) e.hasOwnProperty(n = r[t++]) || (e[n] = this[n]);
			return i.config(e), i;
		}
		function M(e) {
			if (!e || typeof e != "object") throw Error(a + "Object expected");
			var t, r, i, s = [
				"precision",
				1,
				n,
				"rounding",
				0,
				8,
				"toExpNeg",
				-1 / 0,
				0,
				"toExpPos",
				0,
				1 / 0
			];
			for (t = 0; t < s.length; t += 3) if ((i = e[r = s[t]]) !== void 0) {
				if (c(i) === i && i >= s[t + 1] && i <= s[t + 2]) this[r] = i;
				else throw Error(o + r + ": " + i);
			}
			if ((i = e[r = "LN10"]) !== void 0) {
				if (i == Math.LN10) this[r] = new this(i);
				else throw Error(o + r + ": " + i);
			}
			return this;
		}
		r = j(r), r.default = r.Decimal = r, d = new r(1), typeof define == "function" && define.amd ? define(function() {
			return r;
		}) : t !== void 0 && t.exports ? t.exports = r : (e ||= typeof self < "u" && self && self.self == self ? self : Function("return this")(), e.Decimal = r);
	})(n);
})))());
function __(e) {
	return e === 0 ? 1 : Math.floor(new Q.default(e).abs().log(10).toNumber()) + 1;
}
function v_(e, t, n) {
	for (var r = new Q.default(e), i = 0, a = []; r.lt(t) && i < 1e5;) a.push(r.toNumber()), r = r.add(n), i++;
	return a;
}
// node_modules/recharts/es6/util/scale/getNiceTickValues.js
function y_(e, t) {
	return w_(e) || C_(e, t) || x_(e, t) || b_();
}
function b_() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function x_(e, t) {
	if (e) {
		if (typeof e == "string") return S_(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? S_(e, t) : void 0;
	}
}
function S_(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function C_(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function w_(e) {
	if (Array.isArray(e)) return e;
}
var T_ = (e) => {
	var t = y_(e, 2), n = t[0], r = t[1], i = n, a = r;
	return n > r && (i = r, a = n), [i, a];
}, E_ = (e, t, n) => {
	if (e.lte(0)) return new Q.default(0);
	var r = __(e.toNumber()), i = new Q.default(10).pow(r), a = e.div(i), o = r === 1 ? .1 : .05, s = new Q.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
	return t ? new Q.default(s.toNumber()) : new Q.default(Math.ceil(s.toNumber()));
}, D_ = (e, t, n) => {
	if (e.lte(0)) return new Q.default(0);
	var r = [
		1,
		2,
		2.5,
		5
	], i = e.toNumber(), a = Math.floor(new Q.default(i).abs().log(10).toNumber()), o = new Q.default(10).pow(a), s = e.div(o).toNumber(), c = r.findIndex((e) => e >= s - 1e-10);
	if (c === -1 && (o = o.mul(10), c = 0), c += n, c >= r.length) {
		var l = Math.floor(c / r.length);
		c %= r.length, o = o.mul(new Q.default(10).pow(l));
	}
	var u = r[c] ?? 1, d = new Q.default(u).mul(o);
	return t ? d : new Q.default(Math.ceil(d.toNumber()));
}, O_ = (e, t, n) => {
	var r = new Q.default(1), i = new Q.default(e);
	if (!i.isint() && n) {
		var a = Math.abs(e);
		a < 1 ? (r = new Q.default(10).pow(__(e) - 1), i = new Q.default(Math.floor(i.div(r).toNumber())).mul(r)) : a > 1 && (i = new Q.default(Math.floor(e)));
	} else e === 0 ? i = new Q.default(Math.floor((t - 1) / 2)) : n || (i = new Q.default(Math.floor(e)));
	for (var o = Math.floor((t - 1) / 2), s = [], c = 0; c < t; c++) s.push(i.add(new Q.default(c - o).mul(r)).toNumber());
	return s;
}, k_ = function(e, t, n, r) {
	var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : E_;
	if (!Number.isFinite((t - e) / (n - 1))) return {
		step: new Q.default(0),
		tickMin: new Q.default(0),
		tickMax: new Q.default(0)
	};
	var o = a(new Q.default(t).sub(e).div(n - 1), r, i), s;
	e <= 0 && t >= 0 ? s = new Q.default(0) : (s = new Q.default(e).add(t).div(2), s = s.sub(new Q.default(s).mod(o)));
	var c = Math.ceil(s.sub(e).div(o).toNumber()), l = Math.ceil(new Q.default(t).sub(s).div(o).toNumber()), u = c + l + 1;
	return u > n ? k_(e, t, n, r, i + 1, a) : (u < n && (l = t > 0 ? l + (n - u) : l, c = t > 0 ? c : c + (n - u)), {
		step: o,
		tickMin: s.sub(new Q.default(c).mul(o)),
		tickMax: s.add(new Q.default(l).mul(o))
	});
}, A_ = function(e) {
	var t = y_(e, 2), n = t[0], r = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", s = Math.max(i, 2), c = y_(T_([n, r]), 2), l = c[0], u = c[1];
	if (l === -Infinity || u === Infinity) {
		var d = u === Infinity ? [l, ...Array(i - 1).fill(Infinity)] : [...Array(i - 1).fill(-Infinity), u];
		return n > r ? d.reverse() : d;
	}
	if (l === u) return O_(l, i, a);
	var f = k_(l, u, s, a, 0, o === "snap125" ? D_ : E_), p = f.step, m = f.tickMin, h = f.tickMax, g = v_(m, h.add(new Q.default(.1).mul(p)), p);
	return n > r ? g.reverse() : g;
}, j_ = function(e, t) {
	var n = y_(e, 2), r = n[0], i = n[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", s = y_(T_([r, i]), 2), c = s[0], l = s[1];
	if (c === -Infinity || l === Infinity) return [r, i];
	if (c === l) return [c];
	var u = o === "snap125" ? D_ : E_, d = Math.max(t, 2), f = u(new Q.default(l).sub(c).div(d - 1), a, 0), p = [...v_(new Q.default(c), new Q.default(l), f), l];
	if (a === !1) {
		p = p.map((e) => Math.round(e));
		var m = p.length - 1;
		m > 0 && p[m] === p[m - 1] && (p = p.slice(0, m));
	}
	return r > i ? p.reverse() : p;
}, M_ = (e) => e.rootProps.maxBarSize, N_ = (e) => e.rootProps.barGap, P_ = (e) => e.rootProps.barCategoryGap, F_ = (e) => e.rootProps.barSize, I_ = (e) => e.rootProps.stackOffset, L_ = (e) => e.rootProps.reverseStackOrder, R_ = (e) => e.options.chartName, z_ = (e) => e.rootProps.syncId, B_ = (e) => e.rootProps.syncMethod, V_ = (e) => e.options.eventEmitter, H_ = (e) => e.rootProps.baseValue, U_ = {
	grid: -100,
	barBackground: -50,
	area: 100,
	cursorRectangle: 200,
	bar: 300,
	line: 400,
	axis: 500,
	scatter: 600,
	activeBar: 1e3,
	cursorLine: 1100,
	activeDot: 1200,
	label: 2e3
}, W_ = {
	allowDecimals: !1,
	allowDuplicatedCategory: !0,
	allowDataOverflow: !1,
	angle: 0,
	angleAxisId: 0,
	axisLine: !0,
	axisLineType: "polygon",
	cx: 0,
	cy: 0,
	hide: !1,
	includeHidden: !1,
	label: !1,
	niceTicks: "auto",
	orientation: "outer",
	reversed: !1,
	scale: "auto",
	tick: !0,
	tickLine: !0,
	tickSize: 8,
	type: "auto",
	zIndex: U_.axis
}, G_ = {
	allowDataOverflow: !1,
	allowDecimals: !1,
	allowDuplicatedCategory: !0,
	angle: 0,
	axisLine: !0,
	includeHidden: !1,
	hide: !1,
	niceTicks: "auto",
	label: !1,
	orientation: "right",
	radiusAxisId: 0,
	reversed: !1,
	scale: "auto",
	stroke: "#ccc",
	tick: !0,
	tickCount: 5,
	tickLine: !0,
	type: "auto",
	zIndex: U_.axis
}, K_ = (e, t) => {
	if (e && t) return e != null && e.reversed ? [t[1], t[0]] : t;
};
// node_modules/recharts/es6/util/getAxisTypeBasedOnLayout.js
function q_(e, t, n) {
	if (n !== "auto") return n;
	if (e != null) return id(e, t) ? "category" : "number";
}
// node_modules/recharts/es6/state/selectors/polarAxisSelectors.js
function J_(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Y_(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? J_(Object(n), !0).forEach(function(t) {
			X_(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J_(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function X_(e, t, n) {
	return (t = Z_(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Z_(e) {
	var t = Q_(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Q_(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var $_ = {
	allowDataOverflow: W_.allowDataOverflow,
	allowDecimals: W_.allowDecimals,
	allowDuplicatedCategory: !1,
	dataKey: void 0,
	domain: void 0,
	id: W_.angleAxisId,
	includeHidden: !1,
	name: void 0,
	reversed: W_.reversed,
	scale: W_.scale,
	tick: W_.tick,
	tickCount: void 0,
	ticks: void 0,
	type: W_.type,
	unit: void 0,
	niceTicks: "auto"
}, ev = {
	allowDataOverflow: G_.allowDataOverflow,
	allowDecimals: G_.allowDecimals,
	allowDuplicatedCategory: G_.allowDuplicatedCategory,
	dataKey: void 0,
	domain: void 0,
	id: G_.radiusAxisId,
	includeHidden: G_.includeHidden,
	name: void 0,
	reversed: G_.reversed,
	scale: G_.scale,
	tick: G_.tick,
	tickCount: G_.tickCount,
	ticks: void 0,
	type: G_.type,
	unit: void 0,
	niceTicks: "auto"
}, tv = K([(e, t) => {
	if (t != null) return e.polarAxis.angleAxis[t];
}, Lf], (e, t) => {
	if (e != null) return e;
	var n = q_(t, "angleAxis", $_.type) ?? "category";
	return Y_(Y_({}, $_), {}, { type: n });
}), nv = K([(e, t) => e.polarAxis.radiusAxis[t], Lf], (e, t) => {
	if (e != null) return e;
	var n = q_(t, "radiusAxis", ev.type) ?? "category";
	return Y_(Y_({}, ev), {}, { type: n });
}), rv = (e) => e.polarOptions, iv = K([
	wd,
	Td,
	Hd
], Og), av = K([rv, iv], (e, t) => {
	if (e != null) return Or(e.innerRadius, t, 0);
}), ov = K([rv, iv], (e, t) => {
	if (e != null) return Or(e.outerRadius, t, t * .8);
}), sv = K([rv], (e) => e == null ? [0, 0] : [e.startAngle, e.endAngle]);
K([tv, sv], K_);
var cv = K([
	iv,
	av,
	ov
], (e, t, n) => {
	if (e != null && t != null && n != null) return [t, n];
});
K([nv, cv], K_);
var lv = K([
	Z,
	rv,
	av,
	ov,
	wd,
	Td
], (e, t, n, r, i, a) => {
	if (!(e !== "centric" && e !== "radial" || t == null || n == null || r == null)) {
		var o = t.cx, s = t.cy, c = t.startAngle, l = t.endAngle;
		return {
			cx: Or(o, i, i / 2),
			cy: Or(s, a, a / 2),
			innerRadius: n,
			outerRadius: r,
			startAngle: c,
			endAngle: l,
			clockWise: !1
		};
	}
}), uv = (e, t) => t, dv = (e, t, n) => n;
// node_modules/recharts/es6/util/stacks/getStackSeriesIdentifier.js
function fv(e) {
	return e?.id;
}
// node_modules/recharts/es6/state/selectors/combiners/combineDisplayedStackedData.js
function pv(e, t, n) {
	var r = t.chartData, i = r === void 0 ? [] : r, a = n.allowDuplicatedCategory, o = n.dataKey, s = /* @__PURE__ */ new Map();
	return e.forEach((e) => {
		var t = e.data ?? i;
		if (t != null && t.length !== 0) {
			var n = fv(e);
			t.forEach((t, r) => {
				var i = o == null || a ? r : String(X(t, o, null)), c = X(t, e.dataKey, 0), l = s.has(i) ? s.get(i) : {};
				Object.assign(l, { [n]: c }), s.set(i, l);
			});
		}
	}), Array.from(s.values());
}
// node_modules/recharts/es6/state/types/StackedGraphicalItem.js
function mv(e) {
	return "stackId" in e && e.stackId != null && e.dataKey != null;
}
// node_modules/recharts/es6/state/selectors/numberDomainEqualityCheck.js
var hv = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
// node_modules/recharts/es6/state/selectors/arrayEqualityCheck.js
function gv(e, t) {
	return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function _v(e, t) {
	if (e.length === t.length) {
		for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
		return !0;
	}
	return !1;
}
// node_modules/recharts/es6/state/selectors/selectTooltipAxisType.js
var vv = (e) => {
	var t = Z(e);
	return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, yv = (e) => e.tooltip.settings.axisId;
// node_modules/recharts/es6/util/scale/RechartsScale.js
function bv(e) {
	if (e != null) {
		var t = e.ticks, n = e.bandwidth, r = e.range(), i = [Math.min(...r), Math.max(...r)];
		return {
			domain: () => e.domain(),
			range: function(e) {
				function t() {
					return e.apply(this, arguments);
				}
				return t.toString = function() {
					return e.toString();
				}, t;
			}(() => i),
			rangeMin: () => i[0],
			rangeMax: () => i[1],
			isInRange(e) {
				var t = i[0], n = i[1];
				return t <= n ? e >= t && e <= n : e >= n && e <= t;
			},
			bandwidth: n ? () => n.call(e) : void 0,
			ticks: t ? (n) => t.call(e, n) : void 0,
			map: (t, n) => {
				var r = e(t);
				if (r != null) {
					if (e.bandwidth && n != null && n.position) {
						var i = e.bandwidth();
						switch (n.position) {
							case "middle":
								r += i / 2;
								break;
							case "end": r += i;
						}
					}
					return r;
				}
			}
		};
	}
}
// node_modules/recharts/es6/state/selectors/combiners/combineCheckedDomain.js
var xv = (e, t) => {
	if (t != null) switch (e) {
		case "linear":
			if (!p_(t)) {
				for (var n, r, i = 0; i < t.length; i++) {
					var a = t[i];
					Y(a) && ((n === void 0 || a < n) && (n = a), (r === void 0 || a > r) && (r = a));
				}
				return n !== void 0 && r !== void 0 ? [n, r] : void 0;
			}
			return t;
		default: return t;
	}
};
// node_modules/d3-array/src/ascending.js
function Sv(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
// node_modules/d3-array/src/bisector.js
function Cv(e) {
	let t = e, n = e;
	e.length === 1 && (t = (t, n) => e(t) - n, n = wv(e));
	function r(e, t, r, i) {
		for (r ??= 0, i ??= e.length; r < i;) {
			let a = r + i >>> 1;
			n(e[a], t) < 0 ? r = a + 1 : i = a;
		}
		return r;
	}
	function i(e, t, r, i) {
		for (r ??= 0, i ??= e.length; r < i;) {
			let a = r + i >>> 1;
			n(e[a], t) > 0 ? i = a : r = a + 1;
		}
		return r;
	}
	function a(e, n, i, a) {
		i ??= 0, a ??= e.length;
		let o = r(e, n, i, a - 1);
		return o > i && t(e[o - 1], n) > -t(e[o], n) ? o - 1 : o;
	}
	return {
		left: r,
		center: a,
		right: i
	};
}
function wv(e) {
	return (t, n) => Sv(e(t), n);
}
// node_modules/d3-array/src/number.js
function Tv(e) {
	return e === null ? NaN : +e;
}
function* Ev(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
// node_modules/d3-array/src/bisect.js
var Dv = Cv(Sv), Ov = Dv.right;
Dv.left, Cv(Tv).center;
// node_modules/internmap/src/index.js
var kv = class extends Map {
	constructor(e, t = Nv) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(Av(this, e));
	}
	has(e) {
		return super.has(Av(this, e));
	}
	set(e, t) {
		return super.set(jv(this, e), t);
	}
	delete(e) {
		return super.delete(Mv(this, e));
	}
};
function Av({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function jv({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function Mv({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(n), e.delete(r)), n;
}
function Nv(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
// node_modules/d3-array/src/ticks.js
var Pv = Math.sqrt(50), Fv = Math.sqrt(10), Iv = Math.sqrt(2);
function Lv(e, t, n) {
	var r, i = -1, a, o, s;
	if (t = +t, e = +e, n = +n, e === t && n > 0) return [e];
	if ((r = t < e) && (a = e, e = t, t = a), (s = Rv(e, t, n)) === 0 || !isFinite(s)) return [];
	if (s > 0) {
		let n = Math.round(e / s), r = Math.round(t / s);
		for (n * s < e && ++n, r * s > t && --r, o = Array(a = r - n + 1); ++i < a;) o[i] = (n + i) * s;
	} else {
		s = -s;
		let n = Math.round(e * s), r = Math.round(t * s);
		for (n / s < e && ++n, r / s > t && --r, o = Array(a = r - n + 1); ++i < a;) o[i] = (n + i) / s;
	}
	return r && o.reverse(), o;
}
function Rv(e, t, n) {
	var r = (t - e) / Math.max(0, n), i = Math.floor(Math.log(r) / Math.LN10), a = r / 10 ** i;
	return i >= 0 ? (a >= Pv ? 10 : a >= Fv ? 5 : a >= Iv ? 2 : 1) * 10 ** i : -(10 ** -i) / (a >= Pv ? 10 : a >= Fv ? 5 : a >= Iv ? 2 : 1);
}
function zv(e, t, n) {
	var r = Math.abs(t - e) / Math.max(0, n), i = 10 ** Math.floor(Math.log(r) / Math.LN10), a = r / i;
	return a >= Pv ? i *= 10 : a >= Fv ? i *= 5 : a >= Iv && (i *= 2), t < e ? -i : i;
}
// node_modules/d3-array/src/max.js
function Bv(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n < t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n < i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
// node_modules/d3-array/src/min.js
function Vv(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n > t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
// node_modules/d3-array/src/quickselect.js
function Hv(e, t, n = 0, r = e.length - 1, i = Sv) {
	for (; r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1);
			Hv(e, t, Math.max(n, Math.floor(t - o * c / a + l)), Math.min(r, Math.floor(t + (a - o) * c / a + l)), i);
		}
		let a = e[t], o = n, s = r;
		for (Uv(e, n, t), i(e[r], a) > 0 && Uv(e, n, r); o < s;) {
			for (Uv(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? Uv(e, n, s) : (++s, Uv(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function Uv(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
// node_modules/d3-array/src/quantile.js
function Wv(e, t, n) {
	if (e = Float64Array.from(Ev(e, n)), r = e.length) {
		if ((t = +t) <= 0 || r < 2) return Vv(e);
		if (t >= 1) return Bv(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = Bv(Hv(e, a).subarray(0, a + 1));
		return o + (Vv(e.subarray(a + 1)) - o) * (i - a);
	}
}
function Gv(e, t, n = Tv) {
	if (r = e.length) {
		if ((t = +t) <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
// node_modules/d3-array/src/range.js
function Kv(e, t, n) {
	e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
	for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;) a[r] = e + r * n;
	return a;
}
// node_modules/d3-scale/src/init.js
function qv(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default: this.range(t).domain(e);
	}
	return this;
}
function Jv(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			typeof e == "function" ? this.interpolator(e) : this.range(e);
			break;
		default: this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
	}
	return this;
}
// node_modules/d3-scale/src/ordinal.js
var Yv = Symbol("implicit");
function Xv() {
	var e = new kv(), t = [], n = [], r = Yv;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== Yv) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new kv();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return Xv(t, n).unknown(r);
	}, qv.apply(i, arguments), i;
}
// node_modules/d3-scale/src/band.js
function Zv() {
	var e = Xv().unknown(void 0), t = e.domain, n = e.range, r = 0, i = 1, a, o, s = !1, c = 0, l = 0, u = .5;
	delete e.unknown;
	function d() {
		var e = t().length, d = i < r, f = d ? i : r, p = d ? r : i;
		a = (p - f) / Math.max(1, e - c + l * 2), s && (a = Math.floor(a)), f += (p - f - a * (e - c)) * u, o = a * (1 - c), s && (f = Math.round(f), o = Math.round(o));
		var m = Kv(e).map(function(e) {
			return f + a * e;
		});
		return n(d ? m.reverse() : m);
	}
	return e.domain = function(e) {
		return arguments.length ? (t(e), d()) : t();
	}, e.range = function(e) {
		return arguments.length ? ([r, i] = e, r = +r, i = +i, d()) : [r, i];
	}, e.rangeRound = function(e) {
		return [r, i] = e, r = +r, i = +i, s = !0, d();
	}, e.bandwidth = function() {
		return o;
	}, e.step = function() {
		return a;
	}, e.round = function(e) {
		return arguments.length ? (s = !!e, d()) : s;
	}, e.padding = function(e) {
		return arguments.length ? (c = Math.min(1, l = +e), d()) : c;
	}, e.paddingInner = function(e) {
		return arguments.length ? (c = Math.min(1, e), d()) : c;
	}, e.paddingOuter = function(e) {
		return arguments.length ? (l = +e, d()) : l;
	}, e.align = function(e) {
		return arguments.length ? (u = Math.max(0, Math.min(1, e)), d()) : u;
	}, e.copy = function() {
		return Zv(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
	}, qv.apply(d(), arguments);
}
function Qv(e) {
	var t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
		return Qv(t());
	}, e;
}
function $v() {
	return Qv(Zv.apply(null, arguments).paddingInner(1));
}
// node_modules/d3-color/src/define.js
function ey(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function ty(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
// node_modules/d3-color/src/color.js
function ny() {}
var ry = .7, iy = 1 / ry, ay = "\\s*([+-]?\\d+)\\s*", oy = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", sy = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", cy = /^#([0-9a-f]{3,8})$/, ly = RegExp(`^rgb\\(${ay},${ay},${ay}\\)$`), uy = RegExp(`^rgb\\(${sy},${sy},${sy}\\)$`), dy = RegExp(`^rgba\\(${ay},${ay},${ay},${oy}\\)$`), fy = RegExp(`^rgba\\(${sy},${sy},${sy},${oy}\\)$`), py = RegExp(`^hsl\\(${oy},${sy},${sy}\\)$`), my = RegExp(`^hsla\\(${oy},${sy},${sy},${oy}\\)$`), hy = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
ey(ny, by, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: gy,
	formatHex: gy,
	formatHex8: _y,
	formatHsl: vy,
	formatRgb: yy,
	toString: yy
});
function gy() {
	return this.rgb().formatHex();
}
function _y() {
	return this.rgb().formatHex8();
}
function vy() {
	return Ny(this).formatHsl();
}
function yy() {
	return this.rgb().formatRgb();
}
function by(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = cy.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? xy(t) : n === 3 ? new Ty(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Sy(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Sy(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ly.exec(e)) ? new Ty(t[1], t[2], t[3], 1) : (t = uy.exec(e)) ? new Ty(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = dy.exec(e)) ? Sy(t[1], t[2], t[3], t[4]) : (t = fy.exec(e)) ? Sy(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = py.exec(e)) ? My(t[1], t[2] / 100, t[3] / 100, 1) : (t = my.exec(e)) ? My(t[1], t[2] / 100, t[3] / 100, t[4]) : hy.hasOwnProperty(e) ? xy(hy[e]) : e === "transparent" ? new Ty(NaN, NaN, NaN, 0) : null;
}
function xy(e) {
	return new Ty(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Sy(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new Ty(e, t, n, r);
}
function Cy(e) {
	return e instanceof ny || (e = by(e)), e ? (e = e.rgb(), new Ty(e.r, e.g, e.b, e.opacity)) : new Ty();
}
function wy(e, t, n, r) {
	return arguments.length === 1 ? Cy(e) : new Ty(e, t, n, r ?? 1);
}
function Ty(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ey(Ty, wy, ty(ny, {
	brighter(e) {
		return e = e == null ? iy : iy ** +e, new Ty(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? ry : ry ** +e, new Ty(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new Ty(Ay(this.r), Ay(this.g), Ay(this.b), ky(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: Ey,
	formatHex: Ey,
	formatHex8: Dy,
	formatRgb: Oy,
	toString: Oy
}));
function Ey() {
	return `#${jy(this.r)}${jy(this.g)}${jy(this.b)}`;
}
function Dy() {
	return `#${jy(this.r)}${jy(this.g)}${jy(this.b)}${jy((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Oy() {
	let e = ky(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${Ay(this.r)}, ${Ay(this.g)}, ${Ay(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ky(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ay(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function jy(e) {
	return e = Ay(e), (e < 16 ? "0" : "") + e.toString(16);
}
function My(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Fy(e, t, n, r);
}
function Ny(e) {
	if (e instanceof Fy) return new Fy(e.h, e.s, e.l, e.opacity);
	if (e instanceof ny || (e = by(e)), !e) return new Fy();
	if (e instanceof Fy) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new Fy(o, s, c, e.opacity);
}
function Py(e, t, n, r) {
	return arguments.length === 1 ? Ny(e) : new Fy(e, t, n, r ?? 1);
}
function Fy(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ey(Fy, Py, ty(ny, {
	brighter(e) {
		return e = e == null ? iy : iy ** +e, new Fy(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? ry : ry ** +e, new Fy(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new Ty(Ry(e >= 240 ? e - 240 : e + 120, i, r), Ry(e, i, r), Ry(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new Fy(Iy(this.h), Ly(this.s), Ly(this.l), ky(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = ky(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Iy(this.h)}, ${Ly(this.s) * 100}%, ${Ly(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Iy(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ly(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Ry(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
// node_modules/d3-interpolate/src/constant.js
var zy = (e) => () => e;
// node_modules/d3-interpolate/src/color.js
function By(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Vy(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Hy(e) {
	return (e = +e) == 1 ? Uy : function(t, n) {
		return n - t ? Vy(t, n, e) : zy(isNaN(t) ? n : t);
	};
}
function Uy(e, t) {
	var n = t - e;
	return n ? By(e, n) : zy(isNaN(e) ? t : e);
}
// node_modules/d3-interpolate/src/rgb.js
var Wy = (function e(t) {
	var n = Hy(t);
	function r(e, t) {
		var r = n((e = wy(e)).r, (t = wy(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = Uy(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
// node_modules/d3-interpolate/src/numberArray.js
function Gy(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function Ky(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
// node_modules/d3-interpolate/src/array.js
function qy(e, t) {
	for (var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o = 0; o < r; ++o) i[o] = nb(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
// node_modules/d3-interpolate/src/date.js
function Jy(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
// node_modules/d3-interpolate/src/number.js
function Yy(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
// node_modules/d3-interpolate/src/object.js
function Xy(e, t) {
	var n = {}, r = {}, i;
	for (i in typeof e == "object" && e || (e = {}), typeof t == "object" && t || (t = {}), t) i in e ? n[i] = nb(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
// node_modules/d3-interpolate/src/string.js
var Zy = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qy = new RegExp(Zy.source, "g");
function $y(e) {
	return function() {
		return e;
	};
}
function eb(e) {
	return function(t) {
		return e(t) + "";
	};
}
function tb(e, t) {
	var n = Zy.lastIndex = Qy.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Zy.exec(e)) && (i = Qy.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: Yy(r, i)
	})), n = Qy.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? eb(c[0].x) : $y(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
// node_modules/d3-interpolate/src/value.js
function nb(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? zy(t) : (n === "number" ? Yy : n === "string" ? (r = by(t)) ? (t = r, Wy) : tb : t instanceof by ? Wy : t instanceof Date ? Jy : Ky(t) ? Gy : Array.isArray(t) ? qy : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Xy : Yy)(e, t);
}
// node_modules/d3-interpolate/src/round.js
function rb(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
// node_modules/d3-interpolate/src/piecewise.js
function ib(e, t) {
	t === void 0 && (t = e, e = nb);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
// node_modules/d3-scale/src/constant.js
function ab(e) {
	return function() {
		return e;
	};
}
// node_modules/d3-scale/src/number.js
function ob(e) {
	return +e;
}
// node_modules/d3-scale/src/continuous.js
var sb = [0, 1];
function cb(e) {
	return e;
}
function lb(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : ab(isNaN(t) ? NaN : .5);
}
function ub(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function db(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = lb(i, r), a = n(o, a)) : (r = lb(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function fb(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = lb(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = Ov(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function pb(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function mb() {
	var e = sb, t = sb, n = nb, r, i, a, o = cb, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== cb && (o = ub(e[0], e[n - 1])), s = n > 2 ? fb : db, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), Yy))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, ob), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = rb, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : cb, u()) : o !== cb;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function hb() {
	return mb()(cb, cb);
}
// node_modules/d3-format/src/formatDecimal.js
function gb(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function _b(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
// node_modules/d3-format/src/exponent.js
function vb(e) {
	return e = _b(Math.abs(e)), e ? e[1] : NaN;
}
// node_modules/d3-format/src/formatGroup.js
function yb(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
// node_modules/d3-format/src/formatNumerals.js
function bb(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
// node_modules/d3-format/src/formatSpecifier.js
var xb = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Sb(e) {
	if (!(t = xb.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new Cb({
		fill: t[1],
		align: t[2],
		sign: t[3],
		symbol: t[4],
		zero: t[5],
		width: t[6],
		comma: t[7],
		precision: t[8] && t[8].slice(1),
		trim: t[9],
		type: t[10]
	});
}
Sb.prototype = Cb.prototype;
function Cb(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Cb.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
// node_modules/d3-format/src/formatTrim.js
function wb(e) {
	out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n) switch (e[n]) {
		case ".":
			r = i = n;
			break;
		case "0":
			r === 0 && (r = n), i = n;
			break;
		default:
			if (!+e[n]) break out;
			r > 0 && (r = 0);
	}
	return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
// node_modules/d3-format/src/formatPrefixAuto.js
var Tb;
function Eb(e, t) {
	var n = _b(e, t);
	if (!n) return Tb = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (Tb = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + _b(e, Math.max(0, t + a - 1))[0];
}
// node_modules/d3-format/src/formatRounded.js
function Db(e, t) {
	var n = _b(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
// node_modules/d3-format/src/formatTypes.js
var Ob = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: gb,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => Db(e * 100, t),
	r: Db,
	s: Eb,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
// node_modules/d3-format/src/identity.js
function kb(e) {
	return e;
}
// node_modules/d3-format/src/locale.js
var Ab = Array.prototype.map, jb = [
	"y",
	"z",
	"a",
	"f",
	"p",
	"n",
	"µ",
	"m",
	"",
	"k",
	"M",
	"G",
	"T",
	"P",
	"E",
	"Z",
	"Y"
];
function Mb(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? kb : yb(Ab.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? kb : bb(Ab.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = Sb(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, g = e.comma, _ = e.precision, v = e.trim, y = e.type;
		y === "n" ? (g = !0, y = "g") : Ob[y] || (_ === void 0 && (_ = 12), v = !0, y = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var b = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""), x = (p === "$" ? r : /[%p]/.test(y) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), S = Ob[y], C = /[defgprs%]/.test(y);
		_ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
		function w(e) {
			var n = b, r = x, o, l, p;
			if (y === "c") r = S(e) + r, e = "";
			else {
				e = +e;
				var w = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : S(Math.abs(e), _), v && (e = wb(e)), w && +e == 0 && f !== "+" && (w = !1), n = (w ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (y === "s" && !isNaN(e) && Tb !== void 0 ? jb[8 + Tb / 3] : "") + r + (w && f === "(" ? ")" : ""), C) {
					for (o = -1, l = e.length; ++o < l;) if (p = e.charCodeAt(o), 48 > p || p > 57) {
						r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r, e = e.slice(0, o);
						break;
					}
				}
			}
			g && !m && (e = t(e, Infinity));
			var T = n.length + e.length + r.length, E = T < h ? Array(h - T + 1).join(u) : "";
			switch (g && m && (e = t(E + e, E.length ? h - r.length : Infinity), E = ""), d) {
				case "<":
					e = n + e + r + E;
					break;
				case "=":
					e = n + E + e + r;
					break;
				case "^":
					e = E.slice(0, T = E.length >> 1) + n + e + r + E.slice(T);
					break;
				default: e = E + n + e + r;
			}
			return a(e);
		}
		return w.toString = function() {
			return e + "";
		}, w;
	}
	function u(e, t) {
		var n = Math.max(-8, Math.min(8, Math.floor(vb(t) / 3))) * 3, r = 10 ** -n, i = l((e = Sb(e), e.type = "f", e), { suffix: jb[8 + n / 3] });
		return function(e) {
			return i(r * e);
		};
	}
	return {
		format: l,
		formatPrefix: u
	};
}
// node_modules/d3-format/src/defaultLocale.js
var Nb, Pb, Fb;
Ib({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function Ib(e) {
	return Nb = Mb(e), Pb = Nb.format, Fb = Nb.formatPrefix, Nb;
}
// node_modules/d3-format/src/precisionFixed.js
function Lb(e) {
	return Math.max(0, -vb(Math.abs(e)));
}
// node_modules/d3-format/src/precisionPrefix.js
function Rb(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(vb(t) / 3))) * 3 - vb(Math.abs(e)));
}
// node_modules/d3-format/src/precisionRound.js
function zb(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, vb(t) - vb(e)) + 1;
}
// node_modules/d3-scale/src/tickFormat.js
function Bb(e, t, n, r) {
	var i = zv(e, t, n), a;
	switch (r = Sb(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = Rb(i, o)) && (r.precision = a), Fb(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = zb(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%": r.precision == null && !isNaN(a = Lb(i)) && (r.precision = a - (r.type === "%") * 2);
	}
	return Pb(r);
}
// node_modules/d3-scale/src/linear.js
function Vb(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return Lv(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return Bb(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = Rv(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function Hb() {
	var e = hb();
	return e.copy = function() {
		return pb(e, Hb());
	}, qv.apply(e, arguments), Vb(e);
}
// node_modules/d3-scale/src/identity.js
function Ub(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, ob), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return Ub(e).unknown(t);
	}, e = arguments.length ? Array.from(e, ob) : [0, 1], Vb(n);
}
// node_modules/d3-scale/src/nice.js
function Wb(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
// node_modules/d3-scale/src/log.js
function Gb(e) {
	return Math.log(e);
}
function Kb(e) {
	return Math.exp(e);
}
function qb(e) {
	return -Math.log(-e);
}
function Jb(e) {
	return -Math.exp(-e);
}
function Yb(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Xb(e) {
	return e === 10 ? Yb : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Zb(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Qb(e) {
	return (t, n) => -e(-t, n);
}
function $b(e) {
	let t = e(Gb, Kb), n = t.domain, r = 10, i, a;
	function o() {
		return i = Zb(r), a = Xb(r), n()[0] < 0 ? (i = Qb(i), a = Qb(a), e(qb, Jb)) : e(Gb, Kb), t;
	}
	return t.base = function(e) {
		return arguments.length ? (r = +e, o()) : r;
	}, t.domain = function(e) {
		return arguments.length ? (n(e), o()) : n();
	}, t.ticks = (e) => {
		let t = n(), o = t[0], s = t[t.length - 1], c = s < o;
		c && ([o, s] = [s, o]);
		let l = i(o), u = i(s), d, f, p = e == null ? 10 : +e, m = [];
		if (!(r % 1) && u - l < p) {
			if (l = Math.floor(l), u = Math.ceil(u), o > 0) {
				for (; l <= u; ++l) for (d = 1; d < r; ++d) if (f = l < 0 ? d / a(-l) : d * a(l), !(f < o)) {
					if (f > s) break;
					m.push(f);
				}
			} else for (; l <= u; ++l) for (d = r - 1; d >= 1; --d) if (f = l > 0 ? d / a(-l) : d * a(l), !(f < o)) {
				if (f > s) break;
				m.push(f);
			}
			m.length * 2 < p && (m = Lv(o, s, p));
		} else m = Lv(l, u, Math.min(u - l, p)).map(a);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = Sb(n)).precision == null && (n.trim = !0), n = Pb(n)), e === Infinity) return n;
		let o = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / a(Math.round(i(e)));
			return t * r < r - .5 && (t *= r), t <= o ? n(e) : "";
		};
	}, t.nice = () => n(Wb(n(), {
		floor: (e) => a(Math.floor(i(e))),
		ceil: (e) => a(Math.ceil(i(e)))
	})), t;
}
function ex() {
	let e = $b(mb()).domain([1, 10]);
	return e.copy = () => pb(e, ex()).base(e.base()), qv.apply(e, arguments), e;
}
// node_modules/d3-scale/src/symlog.js
function tx(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function nx(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function rx(e) {
	var t = 1, n = e(tx(t), nx(t));
	return n.constant = function(n) {
		return arguments.length ? e(tx(t = +n), nx(t)) : t;
	}, Vb(n);
}
function ix() {
	var e = rx(mb());
	return e.copy = function() {
		return pb(e, ix()).constant(e.constant());
	}, qv.apply(e, arguments);
}
// node_modules/d3-scale/src/pow.js
function ax(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function ox(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function sx(e) {
	return e < 0 ? -e * e : e * e;
}
function cx(e) {
	var t = e(cb, cb), n = 1;
	function r() {
		return n === 1 ? e(cb, cb) : n === .5 ? e(ox, sx) : e(ax(n), ax(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, Vb(t);
}
function lx() {
	var e = cx(mb());
	return e.copy = function() {
		return pb(e, lx()).exponent(e.exponent());
	}, qv.apply(e, arguments), e;
}
function ux() {
	return lx.apply(null, arguments).exponent(.5);
}
// node_modules/d3-scale/src/radial.js
function dx(e) {
	return Math.sign(e) * e * e;
}
function fx(e) {
	return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function px() {
	var e = hb(), t = [0, 1], n = !1, r;
	function i(t) {
		var i = fx(e(t));
		return isNaN(i) ? r : n ? Math.round(i) : i;
	}
	return i.invert = function(t) {
		return e.invert(dx(t));
	}, i.domain = function(t) {
		return arguments.length ? (e.domain(t), i) : e.domain();
	}, i.range = function(n) {
		return arguments.length ? (e.range((t = Array.from(n, ob)).map(dx)), i) : t.slice();
	}, i.rangeRound = function(e) {
		return i.range(e).round(!0);
	}, i.round = function(e) {
		return arguments.length ? (n = !!e, i) : n;
	}, i.clamp = function(t) {
		return arguments.length ? (e.clamp(t), i) : e.clamp();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return px(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
	}, qv.apply(i, arguments), Vb(i);
}
// node_modules/d3-scale/src/quantile.js
function mx() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = Gv(e, r / i);
		return a;
	}
	function a(e) {
		return e == null || isNaN(e = +e) ? r : t[Ov(n, e)];
	}
	return a.invertExtent = function(r) {
		var i = t.indexOf(r);
		return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
	}, a.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(Sv), i();
	}, a.range = function(e) {
		return arguments.length ? (t = Array.from(e), i()) : t.slice();
	}, a.unknown = function(e) {
		return arguments.length ? (r = e, a) : r;
	}, a.quantiles = function() {
		return n.slice();
	}, a.copy = function() {
		return mx().domain(e).range(t).unknown(r);
	}, qv.apply(a, arguments);
}
// node_modules/d3-scale/src/quantize.js
function hx() {
	var e = 0, t = 1, n = 1, r = [.5], i = [0, 1], a;
	function o(e) {
		return e != null && e <= e ? i[Ov(r, e, 0, n)] : a;
	}
	function s() {
		var i = -1;
		for (r = Array(n); ++i < n;) r[i] = ((i + 1) * t - (i - n) * e) / (n + 1);
		return o;
	}
	return o.domain = function(n) {
		return arguments.length ? ([e, t] = n, e = +e, t = +t, s()) : [e, t];
	}, o.range = function(e) {
		return arguments.length ? (n = (i = Array.from(e)).length - 1, s()) : i.slice();
	}, o.invertExtent = function(a) {
		var o = i.indexOf(a);
		return o < 0 ? [NaN, NaN] : o < 1 ? [e, r[0]] : o >= n ? [r[n - 1], t] : [r[o - 1], r[o]];
	}, o.unknown = function(e) {
		return arguments.length && (a = e), o;
	}, o.thresholds = function() {
		return r.slice();
	}, o.copy = function() {
		return hx().domain([e, t]).range(i).unknown(a);
	}, qv.apply(Vb(o), arguments);
}
// node_modules/d3-scale/src/threshold.js
function gx() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[Ov(e, i, 0, r)] : n;
	}
	return i.domain = function(n) {
		return arguments.length ? (e = Array.from(n), r = Math.min(e.length, t.length - 1), i) : e.slice();
	}, i.range = function(n) {
		return arguments.length ? (t = Array.from(n), r = Math.min(e.length, t.length - 1), i) : t.slice();
	}, i.invertExtent = function(n) {
		var r = t.indexOf(n);
		return [e[r - 1], e[r]];
	}, i.unknown = function(e) {
		return arguments.length ? (n = e, i) : n;
	}, i.copy = function() {
		return gx().domain(e).range(t).unknown(n);
	}, qv.apply(i, arguments);
}
// node_modules/d3-time/src/interval.js
var _x = /* @__PURE__ */ new Date(), vx = /* @__PURE__ */ new Date();
function yx(e, t, n, r) {
	function i(t) {
		return e(t = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+t)), t;
	}
	return i.floor = (t) => (e(t = /* @__PURE__ */ new Date(+t)), t), i.ceil = (n) => (e(n = /* @__PURE__ */ new Date(n - 1)), t(n, 1), e(n), n), i.round = (e) => {
		let t = i(e), n = i.ceil(e);
		return e - t < n - e ? t : n;
	}, i.offset = (e, n) => (t(e = /* @__PURE__ */ new Date(+e), n == null ? 1 : Math.floor(n)), e), i.range = (n, r, a) => {
		let o = [];
		if (n = i.ceil(n), a = a == null ? 1 : Math.floor(a), !(n < r) || !(a > 0)) return o;
		let s;
		do
			o.push(s = /* @__PURE__ */ new Date(+n)), t(n, a), e(n);
		while (s < n && n < r);
		return o;
	}, i.filter = (n) => yx((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) {
			if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
			else for (; --r >= 0;) for (; t(e, 1), !n(e););
		}
	}), n && (i.count = (t, r) => (_x.setTime(+t), vx.setTime(+r), e(_x), e(vx), Math.floor(n(_x, vx))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
// node_modules/d3-time/src/millisecond.js
var bx = yx(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
bx.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? yx((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : bx), bx.range;
// node_modules/d3-time/src/duration.js
var xx = 1e3, Sx = xx * 60, Cx = Sx * 60, wx = Cx * 24, Tx = wx * 7, Ex = wx * 30, Dx = wx * 365, Ox = yx((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * xx);
}, (e, t) => (t - e) / xx, (e) => e.getUTCSeconds());
Ox.range;
// node_modules/d3-time/src/minute.js
var kx = yx((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * xx);
}, (e, t) => {
	e.setTime(+e + t * Sx);
}, (e, t) => (t - e) / Sx, (e) => e.getMinutes());
kx.range;
var Ax = yx((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * Sx);
}, (e, t) => (t - e) / Sx, (e) => e.getUTCMinutes());
Ax.range;
// node_modules/d3-time/src/hour.js
var jx = yx((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * xx - e.getMinutes() * Sx);
}, (e, t) => {
	e.setTime(+e + t * Cx);
}, (e, t) => (t - e) / Cx, (e) => e.getHours());
jx.range;
var Mx = yx((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * Cx);
}, (e, t) => (t - e) / Cx, (e) => e.getUTCHours());
Mx.range;
// node_modules/d3-time/src/day.js
var Nx = yx((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Sx) / wx, (e) => e.getDate() - 1);
Nx.range;
var Px = yx((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / wx, (e) => e.getUTCDate() - 1);
Px.range;
var Fx = yx((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / wx, (e) => Math.floor(e / wx));
Fx.range;
// node_modules/d3-time/src/week.js
function Ix(e) {
	return yx((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Sx) / Tx);
}
var Lx = Ix(0), Rx = Ix(1), zx = Ix(2), Bx = Ix(3), Vx = Ix(4), Hx = Ix(5), Ux = Ix(6);
Lx.range, Rx.range, zx.range, Bx.range, Vx.range, Hx.range, Ux.range;
function Wx(e) {
	return yx((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / Tx);
}
var Gx = Wx(0), Kx = Wx(1), qx = Wx(2), Jx = Wx(3), Yx = Wx(4), Xx = Wx(5), Zx = Wx(6);
Gx.range, Kx.range, qx.range, Jx.range, Yx.range, Xx.range, Zx.range;
// node_modules/d3-time/src/month.js
var Qx = yx((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Qx.range;
var $x = yx((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
$x.range;
// node_modules/d3-time/src/year.js
var eS = yx((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
eS.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : yx((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), eS.range;
var tS = yx((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
tS.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : yx((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), tS.range;
// node_modules/d3-time/src/ticks.js
function nS(e, t, n, r, i, a) {
	let o = [
		[
			Ox,
			1,
			xx
		],
		[
			Ox,
			5,
			5 * xx
		],
		[
			Ox,
			15,
			15 * xx
		],
		[
			Ox,
			30,
			30 * xx
		],
		[
			a,
			1,
			Sx
		],
		[
			a,
			5,
			5 * Sx
		],
		[
			a,
			15,
			15 * Sx
		],
		[
			a,
			30,
			30 * Sx
		],
		[
			i,
			1,
			Cx
		],
		[
			i,
			3,
			3 * Cx
		],
		[
			i,
			6,
			6 * Cx
		],
		[
			i,
			12,
			12 * Cx
		],
		[
			r,
			1,
			wx
		],
		[
			r,
			2,
			2 * wx
		],
		[
			n,
			1,
			Tx
		],
		[
			t,
			1,
			Ex
		],
		[
			t,
			3,
			3 * Ex
		],
		[
			e,
			1,
			Dx
		]
	];
	function s(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : c(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function c(t, n, r) {
		let i = Math.abs(n - t) / r, a = Cv(([, , e]) => e).right(o, i);
		if (a === o.length) return e.every(zv(t / Dx, n / Dx, r));
		if (a === 0) return bx.every(Math.max(zv(t, n, r), 1));
		let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
		return s.every(c);
	}
	return [s, c];
}
var [rS, iS] = nS(tS, $x, Gx, Fx, Mx, Ax), [aS, oS] = nS(eS, Qx, Lx, Nx, jx, kx);
// node_modules/d3-time-format/src/locale.js
function sS(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function cS(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function lS(e, t, n) {
	return {
		y: e,
		m: t,
		d: n,
		H: 0,
		M: 0,
		S: 0,
		L: 0
	};
}
function uS(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = gS(i), u = _S(i), d = gS(a), f = _S(a), p = gS(o), m = _S(o), h = gS(s), g = _S(s), _ = gS(c), v = _S(c), y = {
		a: N,
		A: ee,
		b: te,
		B: ne,
		c: null,
		d: RS,
		e: RS,
		f: US,
		g: eC,
		G: nC,
		H: zS,
		I: BS,
		j: VS,
		L: HS,
		m: WS,
		M: GS,
		p: re,
		q: P,
		Q: TC,
		s: EC,
		S: KS,
		u: qS,
		U: JS,
		V: XS,
		w: ZS,
		W: QS,
		x: null,
		X: null,
		y: $S,
		Y: tC,
		Z: rC,
		"%": wC
	}, b = {
		a: ie,
		A: ae,
		b: oe,
		B: se,
		c: null,
		d: iC,
		e: iC,
		f: lC,
		g: bC,
		G: SC,
		H: aC,
		I: oC,
		j: sC,
		L: cC,
		m: uC,
		M: dC,
		p: ce,
		q: le,
		Q: TC,
		s: EC,
		S: fC,
		u: pC,
		U: mC,
		V: gC,
		w: _C,
		W: vC,
		x: null,
		X: null,
		y: yC,
		Y: xC,
		Z: CC,
		"%": wC
	}, x = {
		a: E,
		A: D,
		b: O,
		B: k,
		c: A,
		d: OS,
		e: OS,
		f: PS,
		g: wS,
		G: CS,
		H: AS,
		I: AS,
		j: kS,
		L: NS,
		m: DS,
		M: jS,
		p: T,
		q: ES,
		Q: IS,
		s: LS,
		S: MS,
		u: yS,
		U: bS,
		V: xS,
		w: vS,
		W: SS,
		x: j,
		X: M,
		y: wS,
		Y: CS,
		Z: TS,
		"%": FS
	};
	y.x = S(n, y), y.X = S(r, y), y.c = S(t, y), b.x = S(n, b), b.X = S(r, b), b.c = S(t, b);
	function S(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = dS[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function C(e, t) {
		return function(n) {
			var r = lS(1900, void 0, 1), i = w(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = cS(lS(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? Kx.ceil(a) : Kx(a), a = Px.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = sS(lS(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? Rx.ceil(a) : Rx(a), a = Nx.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? cS(lS(r.y, 0, 1)).getUTCDay() : sS(lS(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, cS(r)) : sS(r);
		};
	}
	function w(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = x[s in dS ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
			} else if (s != n.charCodeAt(r++)) return -1;
		}
		return r;
	}
	function T(e, t, n) {
		var r = l.exec(t.slice(n));
		return r ? (e.p = u.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function E(e, t, n) {
		var r = p.exec(t.slice(n));
		return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function D(e, t, n) {
		var r = d.exec(t.slice(n));
		return r ? (e.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function O(e, t, n) {
		var r = _.exec(t.slice(n));
		return r ? (e.m = v.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function k(e, t, n) {
		var r = h.exec(t.slice(n));
		return r ? (e.m = g.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function A(e, n, r) {
		return w(e, t, n, r);
	}
	function j(e, t, r) {
		return w(e, n, t, r);
	}
	function M(e, t, n) {
		return w(e, r, t, n);
	}
	function N(e) {
		return o[e.getDay()];
	}
	function ee(e) {
		return a[e.getDay()];
	}
	function te(e) {
		return c[e.getMonth()];
	}
	function ne(e) {
		return s[e.getMonth()];
	}
	function re(e) {
		return i[+(e.getHours() >= 12)];
	}
	function P(e) {
		return 1 + ~~(e.getMonth() / 3);
	}
	function ie(e) {
		return o[e.getUTCDay()];
	}
	function ae(e) {
		return a[e.getUTCDay()];
	}
	function oe(e) {
		return c[e.getUTCMonth()];
	}
	function se(e) {
		return s[e.getUTCMonth()];
	}
	function ce(e) {
		return i[+(e.getUTCHours() >= 12)];
	}
	function le(e) {
		return 1 + ~~(e.getUTCMonth() / 3);
	}
	return {
		format: function(e) {
			var t = S(e += "", y);
			return t.toString = function() {
				return e;
			}, t;
		},
		parse: function(e) {
			var t = C(e += "", !1);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcFormat: function(e) {
			var t = S(e += "", b);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcParse: function(e) {
			var t = C(e += "", !0);
			return t.toString = function() {
				return e;
			}, t;
		}
	};
}
var dS = {
	"-": "",
	_: " ",
	0: "0"
}, fS = /^\s*\d+/, pS = /^%/, mS = /[\\^$*+?|[\]().{}]/g;
function $(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function hS(e) {
	return e.replace(mS, "\\$&");
}
function gS(e) {
	return RegExp("^(?:" + e.map(hS).join("|") + ")", "i");
}
function _S(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function vS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function yS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function bS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function xS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function SS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function CS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function wS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function TS(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function ES(e, t, n) {
	var r = fS.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function DS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function OS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function kS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function AS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function jS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function MS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function NS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function PS(e, t, n) {
	var r = fS.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function FS(e, t, n) {
	var r = pS.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function IS(e, t, n) {
	var r = fS.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function LS(e, t, n) {
	var r = fS.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function RS(e, t) {
	return $(e.getDate(), t, 2);
}
function zS(e, t) {
	return $(e.getHours(), t, 2);
}
function BS(e, t) {
	return $(e.getHours() % 12 || 12, t, 2);
}
function VS(e, t) {
	return $(1 + Nx.count(eS(e), e), t, 3);
}
function HS(e, t) {
	return $(e.getMilliseconds(), t, 3);
}
function US(e, t) {
	return HS(e, t) + "000";
}
function WS(e, t) {
	return $(e.getMonth() + 1, t, 2);
}
function GS(e, t) {
	return $(e.getMinutes(), t, 2);
}
function KS(e, t) {
	return $(e.getSeconds(), t, 2);
}
function qS(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function JS(e, t) {
	return $(Lx.count(eS(e) - 1, e), t, 2);
}
function YS(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? Vx(e) : Vx.ceil(e);
}
function XS(e, t) {
	return e = YS(e), $(Vx.count(eS(e), e) + (eS(e).getDay() === 4), t, 2);
}
function ZS(e) {
	return e.getDay();
}
function QS(e, t) {
	return $(Rx.count(eS(e) - 1, e), t, 2);
}
function $S(e, t) {
	return $(e.getFullYear() % 100, t, 2);
}
function eC(e, t) {
	return e = YS(e), $(e.getFullYear() % 100, t, 2);
}
function tC(e, t) {
	return $(e.getFullYear() % 1e4, t, 4);
}
function nC(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? Vx(e) : Vx.ceil(e), $(e.getFullYear() % 1e4, t, 4);
}
function rC(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + $(t / 60 | 0, "0", 2) + $(t % 60, "0", 2);
}
function iC(e, t) {
	return $(e.getUTCDate(), t, 2);
}
function aC(e, t) {
	return $(e.getUTCHours(), t, 2);
}
function oC(e, t) {
	return $(e.getUTCHours() % 12 || 12, t, 2);
}
function sC(e, t) {
	return $(1 + Px.count(tS(e), e), t, 3);
}
function cC(e, t) {
	return $(e.getUTCMilliseconds(), t, 3);
}
function lC(e, t) {
	return cC(e, t) + "000";
}
function uC(e, t) {
	return $(e.getUTCMonth() + 1, t, 2);
}
function dC(e, t) {
	return $(e.getUTCMinutes(), t, 2);
}
function fC(e, t) {
	return $(e.getUTCSeconds(), t, 2);
}
function pC(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function mC(e, t) {
	return $(Gx.count(tS(e) - 1, e), t, 2);
}
function hC(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? Yx(e) : Yx.ceil(e);
}
function gC(e, t) {
	return e = hC(e), $(Yx.count(tS(e), e) + (tS(e).getUTCDay() === 4), t, 2);
}
function _C(e) {
	return e.getUTCDay();
}
function vC(e, t) {
	return $(Kx.count(tS(e) - 1, e), t, 2);
}
function yC(e, t) {
	return $(e.getUTCFullYear() % 100, t, 2);
}
function bC(e, t) {
	return e = hC(e), $(e.getUTCFullYear() % 100, t, 2);
}
function xC(e, t) {
	return $(e.getUTCFullYear() % 1e4, t, 4);
}
function SC(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? Yx(e) : Yx.ceil(e), $(e.getUTCFullYear() % 1e4, t, 4);
}
function CC() {
	return "+0000";
}
function wC() {
	return "%";
}
function TC(e) {
	return +e;
}
function EC(e) {
	return Math.floor(e / 1e3);
}
// node_modules/d3-time-format/src/defaultLocale.js
var DC, OC, kC;
AC({
	dateTime: "%x, %X",
	date: "%-m/%-d/%Y",
	time: "%-I:%M:%S %p",
	periods: ["AM", "PM"],
	days: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	shortDays: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	months: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	shortMonths: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	]
});
function AC(e) {
	return DC = uS(e), OC = DC.format, DC.parse, kC = DC.utcFormat, DC.utcParse, DC;
}
// node_modules/d3-scale/src/time.js
function jC(e) {
	return new Date(e);
}
function MC(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function NC(e, t, n, r, i, a, o, s, c, l) {
	var u = hb(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), g = l("%I %p"), _ = l("%a %d"), v = l("%b %d"), y = l("%B"), b = l("%Y");
	function x(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? g : r(e) < e ? i(e) < e ? _ : v : n(e) < e ? y : b)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, MC)) : f().map(jC);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? x : l(t);
	}, u.nice = function(e) {
		var n = f();
		return e && typeof e.range == "function" || (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(Wb(n, e)) : u;
	}, u.copy = function() {
		return pb(u, NC(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function PC() {
	return qv.apply(NC(aS, oS, eS, Qx, Lx, Nx, jx, kx, Ox, OC).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
// node_modules/d3-scale/src/utcTime.js
function FC() {
	return qv.apply(NC(rS, iS, tS, $x, Gx, Px, Mx, Ax, Ox, kC).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
// node_modules/d3-scale/src/sequential.js
function IC() {
	var e = 0, t = 1, n, r, i, a, o = cb, s = !1, c;
	function l(e) {
		return e == null || isNaN(e = +e) ? c : o(i === 0 ? .5 : (e = (a(e) - n) * i, s ? Math.max(0, Math.min(1, e)) : e));
	}
	l.domain = function(o) {
		return arguments.length ? ([e, t] = o, n = a(e = +e), r = a(t = +t), i = n === r ? 0 : 1 / (r - n), l) : [e, t];
	}, l.clamp = function(e) {
		return arguments.length ? (s = !!e, l) : s;
	}, l.interpolator = function(e) {
		return arguments.length ? (o = e, l) : o;
	};
	function u(e) {
		return function(t) {
			var n, r;
			return arguments.length ? ([n, r] = t, o = e(n, r), l) : [o(0), o(1)];
		};
	}
	return l.range = u(nb), l.rangeRound = u(rb), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function LC(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function RC() {
	var e = Vb(IC()(cb));
	return e.copy = function() {
		return LC(e, RC());
	}, Jv.apply(e, arguments);
}
function zC() {
	var e = $b(IC()).domain([1, 10]);
	return e.copy = function() {
		return LC(e, zC()).base(e.base());
	}, Jv.apply(e, arguments);
}
function BC() {
	var e = rx(IC());
	return e.copy = function() {
		return LC(e, BC()).constant(e.constant());
	}, Jv.apply(e, arguments);
}
function VC() {
	var e = cx(IC());
	return e.copy = function() {
		return LC(e, VC()).exponent(e.exponent());
	}, Jv.apply(e, arguments);
}
function HC() {
	return VC.apply(null, arguments).exponent(.5);
}
// node_modules/d3-scale/src/sequentialQuantile.js
function UC() {
	var e = [], t = cb;
	function n(n) {
		if (n != null && !isNaN(n = +n)) return t((Ov(e, n, 1) - 1) / (e.length - 1));
	}
	return n.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(Sv), n;
	}, n.interpolator = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.range = function() {
		return e.map((n, r) => t(r / (e.length - 1)));
	}, n.quantiles = function(t) {
		return Array.from({ length: t + 1 }, (n, r) => Wv(e, r / t));
	}, n.copy = function() {
		return UC(t).domain(e);
	}, Jv.apply(n, arguments);
}
// node_modules/d3-scale/src/diverging.js
function WC() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = cb, u, d = !1, f;
	function p(e) {
		return isNaN(e = +e) ? f : (e = .5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c), l(d ? Math.max(0, Math.min(1, e)) : e));
	}
	p.domain = function(l) {
		return arguments.length ? ([e, t, n] = l, i = u(e = +e), a = u(t = +t), o = u(n = +n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p) : [
			e,
			t,
			n
		];
	}, p.clamp = function(e) {
		return arguments.length ? (d = !!e, p) : d;
	}, p.interpolator = function(e) {
		return arguments.length ? (l = e, p) : l;
	};
	function m(e) {
		return function(t) {
			var n, r, i;
			return arguments.length ? ([n, r, i] = t, l = ib(e, [
				n,
				r,
				i
			]), p) : [
				l(0),
				l(.5),
				l(1)
			];
		};
	}
	return p.range = m(nb), p.rangeRound = m(rb), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function GC() {
	var e = Vb(WC()(cb));
	return e.copy = function() {
		return LC(e, GC());
	}, Jv.apply(e, arguments);
}
function KC() {
	var e = $b(WC()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return LC(e, KC()).base(e.base());
	}, Jv.apply(e, arguments);
}
function qC() {
	var e = rx(WC());
	return e.copy = function() {
		return LC(e, qC()).constant(e.constant());
	}, Jv.apply(e, arguments);
}
function JC() {
	var e = cx(WC());
	return e.copy = function() {
		return LC(e, JC()).exponent(e.exponent());
	}, Jv.apply(e, arguments);
}
function YC() {
	return JC.apply(null, arguments).exponent(.5);
}
// node_modules/victory-vendor/es/d3-scale.js
var XC = /* @__PURE__ */ Me({
	scaleBand: () => Zv,
	scaleDiverging: () => GC,
	scaleDivergingLog: () => KC,
	scaleDivergingPow: () => JC,
	scaleDivergingSqrt: () => YC,
	scaleDivergingSymlog: () => qC,
	scaleIdentity: () => Ub,
	scaleImplicit: () => Yv,
	scaleLinear: () => Hb,
	scaleLog: () => ex,
	scaleOrdinal: () => Xv,
	scalePoint: () => $v,
	scalePow: () => lx,
	scaleQuantile: () => mx,
	scaleQuantize: () => hx,
	scaleRadial: () => px,
	scaleSequential: () => RC,
	scaleSequentialLog: () => zC,
	scaleSequentialPow: () => VC,
	scaleSequentialQuantile: () => UC,
	scaleSequentialSqrt: () => HC,
	scaleSequentialSymlog: () => BC,
	scaleSqrt: () => ux,
	scaleSymlog: () => ix,
	scaleThreshold: () => gx,
	scaleTime: () => PC,
	scaleUtc: () => FC,
	tickFormat: () => Bb
});
// node_modules/recharts/es6/state/selectors/combiners/combineConfiguredScale.js
function ZC(e) {
	var t = XC;
	if (e in t && typeof t[e] == "function") return t[e]();
	var n = `scale${Mr(e)}`;
	if (n in t && typeof t[n] == "function") return t[n]();
}
function QC(e, t, n) {
	if (typeof e == "function") return e.copy().domain(t).range(n);
	if (e != null) {
		var r = ZC(e);
		if (r != null) return r.domain(t).range(n), r;
	}
}
function $C(e, t, n, r) {
	if (n != null && r != null) return typeof e.scale == "function" ? QC(e.scale, n, r) : QC(t, n, r);
}
// node_modules/recharts/es6/state/selectors/combiners/combineRealScaleType.js
function ew(e) {
	return `scale${Mr(e)}`;
}
function tw(e) {
	return ew(e) in XC;
}
var nw = (e, t, n) => {
	if (e != null) {
		var r = e.scale, i = e.type;
		if (r === "auto") return i === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !t) ? "point" : i === "category" ? "band" : "linear";
		if (typeof r == "string") return tw(r) ? r : "point";
	}
};
// node_modules/recharts/es6/util/scale/createCategoricalInverse.js
function rw(e, t) {
	for (var n = 0, r = e.length, i = e[0] < e[e.length - 1]; n < r;) {
		var a = Math.floor((n + r) / 2);
		(i ? e[a] < t : e[a] > t) ? n = a + 1 : r = a;
	}
	return n;
}
function iw(e, t) {
	if (e) {
		var n = t ?? e.domain(), r = n.map((t) => e(t) ?? 0), i = e.range();
		if (!(n.length === 0 || i.length < 2)) return (e) => {
			var t = rw(r, e);
			if (t <= 0) return n[0];
			if (t >= n.length) return n[n.length - 1];
			var i = r[t - 1] ?? 0, a = r[t] ?? 0;
			return Math.abs(e - i) <= Math.abs(e - a) ? n[t - 1] : n[t];
		};
	}
}
// node_modules/recharts/es6/state/selectors/combiners/combineInverseScaleFunction.js
function aw(e) {
	if (e != null) return "invert" in e && typeof e.invert == "function" ? e.invert.bind(e) : iw(e, void 0);
}
// node_modules/recharts/es6/state/selectors/axisSelectors.js
function ow(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function sw(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ow(Object(n), !0).forEach(function(t) {
			cw(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ow(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function cw(e, t, n) {
	return (t = lw(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function lw(e) {
	var t = uw(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function uw(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function dw(e, t) {
	return gw(e) || hw(e, t) || pw(e, t) || fw();
}
function fw() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function pw(e, t) {
	if (e) {
		if (typeof e == "string") return mw(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? mw(e, t) : void 0;
	}
}
function mw(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function hw(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function gw(e) {
	if (Array.isArray(e)) return e;
}
var _w = [0, "auto"], vw = {
	allowDataOverflow: !1,
	allowDecimals: !0,
	allowDuplicatedCategory: !0,
	angle: 0,
	dataKey: void 0,
	domain: void 0,
	height: 30,
	hide: !0,
	id: 0,
	includeHidden: !1,
	interval: "preserveEnd",
	minTickGap: 5,
	mirror: !1,
	name: void 0,
	orientation: "bottom",
	padding: {
		left: 0,
		right: 0
	},
	reversed: !1,
	scale: "auto",
	tick: !0,
	tickCount: 5,
	tickFormatter: void 0,
	ticks: void 0,
	type: "category",
	unit: void 0,
	niceTicks: "auto"
}, yw = (e, t) => e.cartesianAxis.xAxis[t], bw = (e, t) => yw(e, t) ?? vw, xw = {
	allowDataOverflow: !1,
	allowDecimals: !0,
	allowDuplicatedCategory: !0,
	angle: 0,
	dataKey: void 0,
	domain: _w,
	hide: !0,
	id: 0,
	includeHidden: !1,
	interval: "preserveEnd",
	minTickGap: 5,
	mirror: !1,
	name: void 0,
	orientation: "left",
	padding: {
		top: 0,
		bottom: 0
	},
	reversed: !1,
	scale: "auto",
	tick: !0,
	tickCount: 5,
	tickFormatter: void 0,
	ticks: void 0,
	type: "number",
	unit: void 0,
	niceTicks: "auto",
	width: 60
}, Sw = (e, t) => e.cartesianAxis.yAxis[t], Cw = (e, t) => Sw(e, t) ?? xw, ww = {
	domain: [0, "auto"],
	includeHidden: !1,
	reversed: !1,
	allowDataOverflow: !1,
	allowDuplicatedCategory: !1,
	dataKey: void 0,
	id: 0,
	name: "",
	range: [64, 64],
	scale: "auto",
	type: "number",
	unit: ""
}, Tw = (e, t) => e.cartesianAxis.zAxis[t] ?? ww, Ew = (e, t, n) => {
	switch (t) {
		case "xAxis": return bw(e, n);
		case "yAxis": return Cw(e, n);
		case "zAxis": return Tw(e, n);
		case "angleAxis": return tv(e, n);
		case "radiusAxis": return nv(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, Dw = (e, t, n) => {
	switch (t) {
		case "xAxis": return bw(e, n);
		case "yAxis": return Cw(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, Ow = (e, t, n) => {
	switch (t) {
		case "xAxis": return bw(e, n);
		case "yAxis": return Cw(e, n);
		case "angleAxis": return tv(e, n);
		case "radiusAxis": return nv(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, kw = (e) => e.graphicalItems.cartesianItems.some((e) => e.type === "bar") || e.graphicalItems.polarItems.some((e) => e.type === "radialBar");
function Aw(e, t) {
	return (n) => {
		switch (e) {
			case "xAxis": return "xAxisId" in n && n.xAxisId === t;
			case "yAxis": return "yAxisId" in n && n.yAxisId === t;
			case "zAxis": return "zAxisId" in n && n.zAxisId === t;
			case "angleAxis": return "angleAxisId" in n && n.angleAxisId === t;
			case "radiusAxis": return "radiusAxisId" in n && n.radiusAxisId === t;
			default: return !1;
		}
	};
}
var jw = (e) => e.graphicalItems.cartesianItems, Mw = K([uv, dv], Aw), Nw = (e, t, n) => e.filter(n).filter((e) => t?.includeHidden === !0 || !e.hide), Pw = K([
	jw,
	Ew,
	Mw
], Nw, { memoizeOptions: { resultEqualityCheck: gv } }), Fw = K([Pw], (e) => e.filter((e) => e.type === "area" || e.type === "bar").filter(mv)), Iw = (e) => e.filter((e) => !("stackId" in e) || e.stackId === void 0), Lw = K([Pw], Iw), Rw = (e) => e.map((e) => e.data).filter(Boolean).flat(1), zw = K([Pw], (e) => e.some((e) => !e.data)), Bw = K([Pw], Rw, { memoizeOptions: { resultEqualityCheck: gv } }), Vw = (e, t) => {
	var n = t.chartData, r = n === void 0 ? [] : n, i = t.dataStartIndex, a = t.dataEndIndex;
	return e.length > 0 ? e : r.slice(i, a + 1);
}, Hw = K([Bw, n_], Vw), Uw = (e, t, n) => t?.dataKey == null ? n.length > 0 ? n.map((e) => e.dataKey).flatMap((t) => e.map((e) => ({ value: X(e, t) }))) : e.map((e) => ({ value: e })) : e.map((e) => ({ value: X(e, t.dataKey) })), Ww = (e, t, n, r, i, a) => {
	var o = r.chartData, s = o === void 0 ? [] : o, c = r.dataStartIndex, l = r.dataEndIndex, u = Uw(e, t, n);
	return i && t?.dataKey != null && a.length > 0 ? [...s.slice(c, l + 1).map((e) => ({ value: X(e, t.dataKey) })).filter((e) => e.value != null), ...u] : u;
}, Gw = K([
	Hw,
	Ew,
	Pw,
	n_,
	zw,
	Bw
], Ww);
function Kw(e) {
	if (Tr(e) || e instanceof Date) {
		var t = Number(e);
		if (Y(t)) return t;
	}
}
function qw(e) {
	if (Array.isArray(e)) {
		var t = [Kw(e[0]), Kw(e[1])];
		return p_(t) ? t : void 0;
	}
	var n = Kw(e);
	if (n != null) return [n, n];
}
function Jw(e) {
	return e.map(Kw).filter(Nr);
}
function Yw(e, t) {
	var n = Kw(e), r = Kw(t);
	return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
}
var Xw = K([Gw], (e) => e?.map((e) => e.value).sort(Yw));
function Zw(e, t) {
	switch (e) {
		case "xAxis": return t.direction === "x";
		case "yAxis": return t.direction === "y";
		default: return !1;
	}
}
function Qw(e, t, n) {
	if (!n || !n.length) return [];
	var r;
	if (typeof t == "number" && !Cr(t)) r = t;
	else if (Array.isArray(t)) {
		var i = Jw(t);
		i.length > 0 && (r = Math.max(...i));
	}
	return r == null ? [] : Jw(n.flatMap((t) => {
		var n = X(e, t.dataKey), i, a;
		if (Array.isArray(n)) {
			var o = dw(n, 2);
			i = o[0], a = o[1];
		} else i = a = n;
		if (Y(i) && Y(a)) return [r - i, r + a];
	}));
}
var $w = (e) => Ow(e, vv(e), yv(e)), eT = K([$w], (e) => e?.dataKey), tT = K([
	Fw,
	n_,
	$w
], pv), nT = (e, t, n, r) => {
	var i = t.reduce((e, t) => {
		if (t.stackId == null) return e;
		var n = e[t.stackId];
		return n ??= [], n.push(t), e[t.stackId] = n, e;
	}, {});
	return Object.fromEntries(Object.entries(i).map((t) => {
		var i = dw(t, 2), a = i[0], o = i[1], s = r ? [...o].reverse() : o;
		return [a, {
			stackedData: ld(e, s.map(fv), n),
			graphicalItems: s
		}];
	}));
}, rT = K([
	tT,
	Fw,
	I_,
	L_
], nT), iT = (e, t, n, r) => {
	var i = t.dataStartIndex, a = t.dataEndIndex;
	if (r == null && n !== "zAxis") return gd(e, i, a);
}, aT = K([Ew], (e) => e.allowDataOverflow), oT = (e) => {
	if (e == null || !("domain" in e)) return _w;
	if (e.domain != null) return e.domain;
	if ("ticks" in e && e.ticks != null) {
		if (e.type === "number") {
			var t = Jw(e.ticks);
			return [Math.min(...t), Math.max(...t)];
		}
		if (e.type === "category") return e.ticks.map(String);
	}
	return e?.domain ?? _w;
}, sT = K([Ew], oT), cT = K([sT, aT], h_), lT = K([
	rT,
	e_,
	uv,
	cT
], iT, { memoizeOptions: { resultEqualityCheck: hv } }), uT = (e) => e.errorBars, dT = (e, t, n) => e.flatMap((e) => t[e.id]).filter(Boolean).filter((e) => Zw(n, e)), fT = function() {
	var e = [...arguments].filter(Boolean);
	if (e.length !== 0) {
		var t = e.flat();
		return [Math.min(...t), Math.max(...t)];
	}
}, pT = function(e, t, n, r, i) {
	var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], o, s;
	if (n.length > 0 && n.forEach((e) => {
		var n = e.data == null ? a : [...e.data], c = r[e.id]?.filter((e) => Zw(i, e));
		n.forEach((n) => {
			var r = X(n, t.dataKey ?? e.dataKey), i = Qw(n, r, c);
			if (i.length >= 2) {
				var a = Math.min(...i), l = Math.max(...i);
				(o == null || a < o) && (o = a), (s == null || l > s) && (s = l);
			}
			var u = qw(r);
			u != null && (o = o == null ? u[0] : Math.min(o, u[0]), s = s == null ? u[1] : Math.max(s, u[1]));
		});
	}), t?.dataKey != null && n.length === 0 && e.forEach((e) => {
		var n = qw(X(e, t.dataKey));
		n != null && (o = o == null ? n[0] : Math.min(o, n[0]), s = s == null ? n[1] : Math.max(s, n[1]));
	}), Y(o) && Y(s)) return [o, s];
}, mT = K([
	Hw,
	Ew,
	Lw,
	uT,
	uv,
	i_
], pT, { memoizeOptions: { resultEqualityCheck: hv } });
function hT(e) {
	var t = e.value;
	if (Tr(t) || t instanceof Date) return t;
}
var gT = (e, t, n) => {
	var r = e.map(hT).filter((e) => e != null);
	return n && (t.dataKey == null || t.allowDuplicatedCategory && kr(r)) ? $g(0, e.length) : t.allowDuplicatedCategory ? r : Array.from(new Set(r));
}, _T = (e) => e.referenceElements.dots, vT = (e, t, n) => e.filter((e) => e.ifOverflow === "extendDomain").filter((e) => t === "xAxis" ? e.xAxisId === n : e.yAxisId === n), yT = K([
	_T,
	uv,
	dv
], vT), bT = (e) => e.referenceElements.areas, xT = K([
	bT,
	uv,
	dv
], vT), ST = (e) => e.referenceElements.lines, CT = K([
	ST,
	uv,
	dv
], vT), wT = (e, t) => {
	if (e != null) {
		var n = Jw(e.map((e) => t === "xAxis" ? e.x : e.y));
		if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
	}
}, TT = K(yT, uv, wT), ET = (e, t) => {
	if (e != null) {
		var n = Jw(e.flatMap((e) => [t === "xAxis" ? e.x1 : e.y1, t === "xAxis" ? e.x2 : e.y2]));
		if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
	}
}, DT = K([xT, uv], ET);
function OT(e) {
	if (e.x != null) return Jw([e.x]);
	var t = e.segment?.map((e) => e.x);
	return t == null || t.length === 0 ? [] : Jw(t);
}
function kT(e) {
	if (e.y != null) return Jw([e.y]);
	var t = e.segment?.map((e) => e.y);
	return t == null || t.length === 0 ? [] : Jw(t);
}
var AT = (e, t) => {
	if (e != null) {
		var n = e.flatMap((e) => t === "xAxis" ? OT(e) : kT(e));
		if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
	}
}, jT = K(TT, K([CT, uv], AT), DT, (e, t, n) => fT(e, n, t)), MT = (e, t, n, r, i, a, o, s, c) => {
	if (n != null) return n;
	var l = o === "vertical" && s === "xAxis" || o === "horizontal" && s === "yAxis" ? fT(r, a, i) : fT(a, i), u = g_(t, l, e.allowDataOverflow);
	return u == null && e.allowDataOverflow && l == null && c != null ? c : u;
}, NT = K([
	Ew,
	sT,
	cT,
	lT,
	mT,
	jT,
	Z,
	uv,
	K([Ew], (e) => {
		if (e != null && e.type === "number" && "ticks" in e && e.ticks != null) {
			var t = Jw(e.ticks);
			if (t.length !== 0) return [Math.min(...t), Math.max(...t)];
		}
	}, { memoizeOptions: { resultEqualityCheck: hv } })
], MT, { memoizeOptions: { resultEqualityCheck: hv } }), PT = [0, 1], FT = (e, t, n, r, i, a, o) => {
	if (e != null && n != null && n.length !== 0 || o !== void 0) {
		var s = e.dataKey, c = e.type, l = id(t, a);
		return l && s == null ? $g(0, n?.length ?? 0) : c === "category" ? gT(r, e, l) : i === "expand" && !l ? PT : o;
	}
}, IT = K([
	Ew,
	Z,
	Hw,
	Gw,
	I_,
	uv,
	NT
], FT), LT = K([
	Ew,
	kw,
	R_
], nw), RT = (e, t, n) => {
	var r = t.niceTicks;
	if (r !== "none") {
		var i = oT(t), a = Array.isArray(i) && (i[0] === "auto" || i[1] === "auto");
		if ((r === "snap125" || r === "adaptive") && t != null && t.tickCount && p_(e)) {
			if (a) return A_(e, t.tickCount, t.allowDecimals, r);
			if (t.type === "number") return j_(e, t.tickCount, t.allowDecimals, r);
		}
		if (r === "auto" && n === "linear" && t != null && t.tickCount) {
			if (a && p_(e)) return A_(e, t.tickCount, t.allowDecimals, "adaptive");
			if (t.type === "number" && p_(e)) return j_(e, t.tickCount, t.allowDecimals, "adaptive");
		}
	}
}, zT = K([
	IT,
	Ow,
	LT
], RT), BT = (e, t, n, r) => {
	if (r !== "angleAxis" && e?.type === "number" && p_(t) && Array.isArray(n) && n.length > 0) {
		var i = t[0], a = n[0] ?? 0, o = t[1], s = n[n.length - 1] ?? 0;
		return [Math.min(i, a), Math.max(o, s)];
	}
	return t;
}, VT = K([
	Ew,
	IT,
	zT,
	uv
], BT), HT = K(K(Gw, Ew, (e, t) => {
	if (t && t.type === "number") {
		var n = Infinity, r = Array.from(Jw(e.map((e) => e.value))).sort((e, t) => e - t), i = r[0], a = r[r.length - 1];
		if (i == null || a == null) return Infinity;
		var o = a - i;
		if (o === 0) return Infinity;
		for (var s = 0; s < r.length - 1; s++) {
			var c = r[s], l = r[s + 1];
			if (c != null && l != null) {
				var u = l - c;
				n = Math.min(n, u);
			}
		}
		return n / o;
	}
}), Z, P_, Hd, (e, t, n, r, i) => i, (e, t, n, r, i) => {
	if (!Y(e)) return 0;
	var a = t === "vertical" ? r.height : r.width;
	if (i === "gap") return e * a / 2;
	if (i === "no-gap") {
		var o = Or(n, e * a), s = e * a / 2;
		return s - o - (s - o) / a * o;
	}
	return 0;
}), UT = (e, t, n) => {
	var r = bw(e, t);
	return r == null || typeof r.padding != "string" ? 0 : HT(e, "xAxis", t, n, r.padding);
}, WT = (e, t, n) => {
	var r = Cw(e, t);
	return r == null || typeof r.padding != "string" ? 0 : HT(e, "yAxis", t, n, r.padding);
}, GT = K(bw, UT, (e, t) => {
	if (e == null) return {
		left: 0,
		right: 0
	};
	var n = e.padding;
	return typeof n == "string" ? {
		left: t,
		right: t
	} : {
		left: (n.left ?? 0) + t,
		right: (n.right ?? 0) + t
	};
}), KT = K(Cw, WT, (e, t) => {
	if (e == null) return {
		top: 0,
		bottom: 0
	};
	var n = e.padding;
	return typeof n == "string" ? {
		top: t,
		bottom: t
	} : {
		top: (n.top ?? 0) + t,
		bottom: (n.bottom ?? 0) + t
	};
}), qT = K([
	Hd,
	GT,
	Jd,
	qd,
	(e, t, n) => n
], (e, t, n, r, i) => {
	var a = r.padding;
	return i ? [a.left, n.width - a.right] : [e.left + t.left, e.left + e.width - t.right];
}), JT = K([
	Hd,
	Z,
	KT,
	Jd,
	qd,
	(e, t, n) => n
], (e, t, n, r, i, a) => {
	var o = i.padding;
	return a ? [r.height - o.bottom, o.top] : t === "horizontal" ? [e.top + e.height - n.bottom, e.top + n.top] : [e.top + n.top, e.top + e.height - n.bottom];
}), YT = (e, t, n, r) => {
	switch (t) {
		case "xAxis": return qT(e, n, r);
		case "yAxis": return JT(e, n, r);
		case "zAxis": return Tw(e, n)?.range;
		case "angleAxis": return sv(e);
		case "radiusAxis": return cv(e, n);
		default: return;
	}
}, XT = K([Ew, YT], K_), ZT = K([
	Ew,
	LT,
	K([LT, VT], xv),
	XT
], $C), QT = (e, t, n, r) => {
	if (n != null && n.dataKey != null) {
		var i = n.type, a = n.scale;
		if (id(e, r) && (i === "number" || a !== "auto")) return t.map((e) => e.value);
	}
}, $T = K([
	Z,
	Gw,
	Ow,
	uv
], QT), eE = K([ZT], bv);
K([ZT], aw), K([ZT, Xw], iw), K([
	Pw,
	uT,
	uv
], dT);
function tE(e, t) {
	return e.id < t.id ? -1 : +(e.id > t.id);
}
var nE = (e, t) => t, rE = (e, t, n) => n, iE = K(Od, nE, rE, (e, t, n) => e.filter((e) => e.orientation === t).filter((e) => e.mirror === n).sort(tE)), aE = K(kd, nE, rE, (e, t, n) => e.filter((e) => e.orientation === t).filter((e) => e.mirror === n).sort(tE)), oE = (e, t) => {
	var n = typeof t.height == "number" ? t.height : 30;
	return {
		width: e.width,
		height: n
	};
}, sE = (e, t) => ({
	width: typeof t.width == "number" ? t.width : 60,
	height: e.height
}), cE = K(Hd, bw, oE), lE = (e, t, n) => {
	switch (t) {
		case "top": return e.top;
		case "bottom": return n - e.bottom;
		default: return 0;
	}
}, uE = (e, t, n) => {
	switch (t) {
		case "left": return e.left;
		case "right": return n - e.right;
		default: return 0;
	}
}, dE = K(Td, Hd, iE, nE, rE, (e, t, n, r, i) => {
	var a = {}, o;
	return n.forEach((n) => {
		var s = oE(t, n);
		o ??= lE(t, r, e);
		var c = r === "top" && !i || r === "bottom" && i;
		a[n.id] = o - Number(c) * s.height, o += (c ? -1 : 1) * s.height;
	}), a;
}), fE = K(wd, Hd, aE, nE, rE, (e, t, n, r, i) => {
	var a = {}, o;
	return n.forEach((n) => {
		var s = sE(t, n);
		o ??= uE(t, r, e);
		var c = r === "left" && !i || r === "right" && i;
		a[n.id] = o - Number(c) * s.width, o += (c ? -1 : 1) * s.width;
	}), a;
}), pE = K([
	Hd,
	bw,
	(e, t) => {
		var n = bw(e, t);
		if (n != null) return dE(e, n.orientation, n.mirror);
	},
	(e, t) => t
], (e, t, n, r) => {
	if (t != null) {
		var i = n?.[r];
		return i == null ? {
			x: e.left,
			y: 0
		} : {
			x: e.left,
			y: i
		};
	}
}), mE = K([
	Hd,
	Cw,
	(e, t) => {
		var n = Cw(e, t);
		if (n != null) return fE(e, n.orientation, n.mirror);
	},
	(e, t) => t
], (e, t, n, r) => {
	if (t != null) {
		var i = n?.[r];
		return i == null ? {
			x: 0,
			y: e.top
		} : {
			x: i,
			y: e.top
		};
	}
}), hE = K(Hd, Cw, (e, t) => ({
	width: typeof t.width == "number" ? t.width : 60,
	height: e.height
})), gE = (e, t, n) => {
	switch (t) {
		case "xAxis": return cE(e, n).width;
		case "yAxis": return hE(e, n).height;
		default: return;
	}
}, _E = (e, t, n, r) => {
	if (n != null) {
		var i = n.allowDuplicatedCategory, a = n.type, o = n.dataKey, s = id(e, r), c = t.map((e) => e.value), l = c.filter((e) => e != null);
		if (o && s && a === "category" && i && kr(l)) return c;
	}
}, vE = K([
	Z,
	Gw,
	Ew,
	uv
], _E), yE = K([
	Z,
	Dw,
	LT,
	eE,
	vE,
	$T,
	YT,
	zT,
	uv
], (e, t, n, r, i, a, o, s, c) => {
	if (t != null) {
		var l = id(e, c);
		return {
			angle: t.angle,
			interval: t.interval,
			minTickGap: t.minTickGap,
			orientation: t.orientation,
			tick: t.tick,
			tickCount: t.tickCount,
			tickFormatter: t.tickFormatter,
			ticks: t.ticks,
			type: t.type,
			unit: t.unit,
			axisType: c,
			categoricalDomain: a,
			duplicateDomain: i,
			isCategorical: l,
			niceTicks: s,
			range: o,
			realScaleType: n,
			scale: r
		};
	}
}), bE = K([
	Z,
	Ow,
	LT,
	eE,
	zT,
	YT,
	vE,
	$T,
	uv
], (e, t, n, r, i, a, o, s, c) => {
	if (t != null && r != null) {
		var l = id(e, c), u = t.type, d = t.ticks, f = t.tickCount, p = n === "scaleBand" && typeof r.bandwidth == "function" ? r.bandwidth() / 2 : 2, m = u === "category" && r.bandwidth ? r.bandwidth() / p : 0;
		m = c === "angleAxis" && a != null && a.length >= 2 ? Sr(a[0] - a[1]) * 2 * m : m;
		var h = d || i;
		return h ? h.map((e, t) => {
			var n = o ? o.indexOf(e) : e, i = r.map(n);
			return Y(i) ? {
				index: t,
				coordinate: i + m,
				value: e,
				offset: m
			} : null;
		}).filter(Nr) : l && s ? s.map((e, t) => {
			var n = r.map(e);
			return Y(n) ? {
				coordinate: n + m,
				value: e,
				index: t,
				offset: m
			} : null;
		}).filter(Nr) : r.ticks ? r.ticks(f).map((e, t) => {
			var n = r.map(e);
			return Y(n) ? {
				coordinate: n + m,
				value: e,
				index: t,
				offset: m
			} : null;
		}).filter(Nr) : r.domain().map((e, t) => {
			var n = r.map(e);
			return Y(n) ? {
				coordinate: n + m,
				value: o ? o[e] : e,
				index: t,
				offset: m
			} : null;
		}).filter(Nr);
	}
}), xE = K([
	Z,
	Ow,
	eE,
	YT,
	vE,
	$T,
	uv
], (e, t, n, r, i, a, o) => {
	if (t != null && n != null && r != null && r[0] !== r[1]) {
		var s = id(e, o), c = t.tickCount, l = 0;
		return l = o === "angleAxis" && r?.length >= 2 ? Sr(r[0] - r[1]) * 2 * l : l, s && a ? a.map((e, t) => {
			var r = n.map(e);
			return Y(r) ? {
				coordinate: r + l,
				value: e,
				index: t,
				offset: l
			} : null;
		}).filter(Nr) : n.ticks ? n.ticks(c).map((e, t) => {
			var r = n.map(e);
			return Y(r) ? {
				coordinate: r + l,
				value: e,
				index: t,
				offset: l
			} : null;
		}).filter(Nr) : n.domain().map((e, t) => {
			var r = n.map(e);
			return Y(r) ? {
				coordinate: r + l,
				value: i ? i[e] : e,
				index: t,
				offset: l
			} : null;
		}).filter(Nr);
	}
}), SE = K(Ew, eE, (e, t) => {
	if (e != null && t != null) return sw(sw({}, e), {}, { scale: t });
});
K((e, t, n) => Tw(e, n), K([K([
	Ew,
	LT,
	IT,
	XT
], $C)], bv), (e, t) => {
	if (e != null && t != null) return sw(sw({}, e), {}, { scale: t });
});
var CE = K([
	Z,
	Od,
	kd
], (e, t, n) => {
	switch (e) {
		case "horizontal": return t.some((e) => e.reversed) ? "right-to-left" : "left-to-right";
		case "vertical": return n.some((e) => e.reversed) ? "bottom-to-top" : "top-to-bottom";
		case "centric":
		case "radial": return "left-to-right";
		default: return;
	}
});
K([(e, t, n) => e.renderedTicks[t]?.[n]], (e) => {
	if (e && e.length !== 0) return (t) => {
		var n = Infinity, r = e[0];
		for (var i of e) {
			var a = Math.abs(i.coordinate - t);
			a < n && (n = a, r = i);
		}
		return r?.value;
	};
});
// node_modules/recharts/es6/state/selectors/selectTooltipEventType.js
var wE = (e) => e.options.defaultTooltipEventType, TE = (e) => e.options.validateTooltipEventTypes;
function EE(e, t, n) {
	if (e == null) return t;
	var r = e ? "axis" : "item";
	return n == null ? t : n.includes(r) ? r : t;
}
function DE(e, t) {
	return EE(t, wE(e), TE(e));
}
function OE(e) {
	return G((t) => DE(t, e));
}
// node_modules/recharts/es6/state/selectors/combiners/combineActiveLabel.js
var kE = (e, t) => {
	var n, r = Number(t);
	if (!(Cr(r) || t == null)) return r >= 0 ? e == null || (n = e[r]) == null ? void 0 : n.value : void 0;
}, AE = (e) => e.tooltip.settings, jE = {
	active: !1,
	index: null,
	dataKey: void 0,
	graphicalItemId: void 0,
	coordinate: void 0
}, ME = tu({
	name: "tooltip",
	initialState: {
		itemInteraction: {
			click: jE,
			hover: jE
		},
		axisInteraction: {
			click: jE,
			hover: jE
		},
		keyboardInteraction: jE,
		syncInteraction: {
			active: !1,
			index: null,
			dataKey: void 0,
			label: void 0,
			coordinate: void 0,
			sourceViewBox: void 0,
			graphicalItemId: void 0
		},
		tooltipItemPayloads: [],
		settings: {
			shared: void 0,
			trigger: "hover",
			axisId: 0,
			active: !1,
			defaultIndex: void 0
		}
	},
	reducers: {
		addTooltipEntrySettings: {
			reducer(e, t) {
				e.tooltipItemPayloads.push(q(t.payload));
			},
			prepare: J()
		},
		replaceTooltipEntrySettings: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next, a = Dl(e).tooltipItemPayloads.indexOf(q(r));
				a > -1 && (e.tooltipItemPayloads[a] = q(i));
			},
			prepare: J()
		},
		removeTooltipEntrySettings: {
			reducer(e, t) {
				var n = Dl(e).tooltipItemPayloads.indexOf(q(t.payload));
				n > -1 && e.tooltipItemPayloads.splice(n, 1);
			},
			prepare: J()
		},
		setTooltipSettingsState(e, t) {
			e.settings = t.payload;
		},
		setActiveMouseOverItemIndex(e, t) {
			e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.keyboardInteraction.active = !1, e.itemInteraction.hover.active = !0, e.itemInteraction.hover.index = t.payload.activeIndex, e.itemInteraction.hover.dataKey = t.payload.activeDataKey, e.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
		},
		mouseLeaveChart(e) {
			e.itemInteraction.hover.active = !1, e.axisInteraction.hover.active = !1;
		},
		mouseLeaveItem(e) {
			e.itemInteraction.hover.active = !1;
		},
		setActiveClickItemIndex(e, t) {
			e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.itemInteraction.click.active = !0, e.keyboardInteraction.active = !1, e.itemInteraction.click.index = t.payload.activeIndex, e.itemInteraction.click.dataKey = t.payload.activeDataKey, e.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.click.coordinate = t.payload.activeCoordinate;
		},
		setMouseOverAxisIndex(e, t) {
			e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.axisInteraction.hover.active = !0, e.keyboardInteraction.active = !1, e.axisInteraction.hover.index = t.payload.activeIndex, e.axisInteraction.hover.dataKey = t.payload.activeDataKey, e.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
		},
		setMouseClickAxisIndex(e, t) {
			e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.keyboardInteraction.active = !1, e.axisInteraction.click.active = !0, e.axisInteraction.click.index = t.payload.activeIndex, e.axisInteraction.click.dataKey = t.payload.activeDataKey, e.axisInteraction.click.coordinate = t.payload.activeCoordinate;
		},
		setSyncInteraction(e, t) {
			e.syncInteraction = t.payload;
		},
		setKeyboardInteraction(e, t) {
			e.keyboardInteraction.active = t.payload.active, e.keyboardInteraction.index = t.payload.activeIndex, e.keyboardInteraction.coordinate = t.payload.activeCoordinate;
		}
	}
}), NE = ME.actions, PE = NE.addTooltipEntrySettings, FE = NE.replaceTooltipEntrySettings, IE = NE.removeTooltipEntrySettings, LE = NE.setTooltipSettingsState, RE = NE.setActiveMouseOverItemIndex, zE = NE.mouseLeaveItem, BE = NE.mouseLeaveChart, VE = NE.setActiveClickItemIndex, HE = NE.setMouseOverAxisIndex, UE = NE.setMouseClickAxisIndex, WE = NE.setSyncInteraction, GE = NE.setKeyboardInteraction, KE = ME.reducer;
// node_modules/recharts/es6/state/selectors/combiners/combineTooltipInteractionState.js
function qE(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function JE(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? qE(Object(n), !0).forEach(function(t) {
			YE(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qE(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function YE(e, t, n) {
	return (t = XE(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function XE(e) {
	var t = ZE(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ZE(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function QE(e, t, n) {
	return t === "axis" ? n === "click" ? e.axisInteraction.click : e.axisInteraction.hover : n === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function $E(e) {
	return e.index != null;
}
var eD = (e, t, n, r) => {
	if (t == null) return jE;
	var i = QE(e, t, n);
	if (i == null) return jE;
	if (i.active) return i;
	if (e.keyboardInteraction.active) return e.keyboardInteraction;
	if (e.syncInteraction.active && e.syncInteraction.index != null) return e.syncInteraction;
	var a = e.settings.active === !0;
	if ($E(i)) {
		if (a) return JE(JE({}, i), {}, { active: !0 });
	} else if (r != null) return {
		active: !0,
		coordinate: void 0,
		dataKey: void 0,
		index: r,
		graphicalItemId: void 0
	};
	return JE(JE({}, jE), {}, { coordinate: i.coordinate });
};
// node_modules/recharts/es6/state/selectors/combiners/combineActiveTooltipIndex.js
function tD(e) {
	if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
	if (e instanceof Date) {
		var t = e.valueOf();
		return Number.isFinite(t) ? t : void 0;
	}
	var n = Number(e);
	return Number.isFinite(n) ? n : void 0;
}
function nD(e, t) {
	var n = tD(e), r = t[0], i = t[1];
	return n !== void 0 && n >= Math.min(r, i) && n <= Math.max(r, i);
}
function rD(e, t, n) {
	if (n == null || t == null) return !0;
	var r = X(e, t);
	return r == null || !p_(n) || nD(r, n);
}
var iD = (e, t, n, r) => {
	var i = e?.index;
	if (i == null) return null;
	var a = Number(i);
	if (!Y(a)) return i;
	var o = 0, s = Infinity;
	t.length > 0 && (s = t.length - 1);
	var c = Math.max(o, Math.min(a, s)), l = t[c];
	return l == null || rD(l, n, r) ? String(c) : null;
}, aD = (e, t, n, r, i, a, o) => {
	if (a != null) {
		var s = o[0]?.getPosition(a);
		if (s != null) return s;
		var c = i?.[Number(a)];
		if (c) switch (n) {
			case "horizontal": return {
				x: c.coordinate,
				y: (r.top + t) / 2
			};
			default: return {
				x: (r.left + e) / 2,
				y: c.coordinate
			};
		}
	}
}, oD = (e, t, n, r) => {
	if (t === "axis") return e.tooltipItemPayloads;
	if (e.tooltipItemPayloads.length === 0) return [];
	var i = n === "hover" ? e.itemInteraction.hover.graphicalItemId : e.itemInteraction.click.graphicalItemId;
	if (e.syncInteraction.active && i == null) return e.tooltipItemPayloads;
	if (i == null && (r != null || e.keyboardInteraction.active)) {
		var a = e.tooltipItemPayloads[0];
		return a == null ? [] : [a];
	}
	return e.tooltipItemPayloads.filter((e) => e.settings?.graphicalItemId === i);
}, sD = (e) => e.options.tooltipPayloadSearcher, cD = (e) => e.tooltip;
// node_modules/recharts/es6/state/selectors/combiners/combineTooltipPayload.js
function lD(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function uD(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? lD(Object(n), !0).forEach(function(t) {
			dD(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lD(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function dD(e, t, n) {
	return (t = fD(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function fD(e) {
	var t = pD(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function pD(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function mD(e) {
	if (typeof e == "string" || typeof e == "number") return e;
}
function hD(e) {
	if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
}
function gD(e) {
	if (typeof e == "string" || typeof e == "number") return e;
	if (typeof e == "function") return (t) => e(t);
}
function _D(e) {
	if (typeof e == "string") return e;
}
function vD(e) {
	if (typeof e == "object" && e) return {
		name: "name" in e ? mD(e.name) : void 0,
		unit: "unit" in e ? hD(e.unit) : void 0,
		dataKey: "dataKey" in e ? gD(e.dataKey) : void 0,
		payload: "payload" in e ? e.payload : void 0,
		color: "color" in e ? _D(e.color) : void 0,
		fill: "fill" in e ? _D(e.fill) : void 0
	};
}
function yD(e, t) {
	return e ?? t;
}
var bD = (e, t, n, r, i, a, o) => {
	if (t != null && a != null) {
		var s = n.chartData, c = n.computedData, l = n.dataStartIndex, u = n.dataEndIndex;
		return e.reduce((e, n) => {
			var d = n.dataDefinedOnItem, f = n.settings, p = yD(d, s), m = Array.isArray(p) ? Xu(p, l, u) : p, h = f?.dataKey ?? r, g = f?.nameKey, _;
			return r && Array.isArray(m) && !Array.isArray(m[0]) && o === "axis" ? (_ = Ar(m, r, i), _ ??= a(m, t, c, g)) : _ = a(m, t, c, g), Array.isArray(_) ? _.forEach((t) => {
				var n = vD(t), r = n?.name, i = n?.dataKey, a = n?.payload, o = uD(uD({}, f), {}, {
					name: r,
					unit: n?.unit,
					color: n?.color ?? f?.color,
					fill: n?.fill ?? f?.fill
				});
				e.push(bd({
					tooltipEntrySettings: o,
					dataKey: i,
					payload: a,
					value: X(a, i),
					name: r == null ? void 0 : String(r)
				}));
			}) : e.push(bd({
				tooltipEntrySettings: f,
				dataKey: h,
				payload: _,
				value: X(_, h),
				name: X(_, g) ?? f?.name
			})), e;
		}, []);
	}
}, xD = K([
	$w,
	kw,
	R_
], nw), SD = K([
	K([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]),
	$w,
	K([vv, yv], Aw)
], Nw, { memoizeOptions: { resultEqualityCheck: gv } }), CD = K([SD], (e) => e.filter(mv)), wD = K([SD], Rw, { memoizeOptions: { resultEqualityCheck: gv } }), TD = K([SD], (e) => e.some((e) => !e.data)), ED = K([wD, e_], Vw), DD = K([
	CD,
	e_,
	$w
], pv), OD = K([
	ED,
	$w,
	SD,
	e_,
	TD,
	wD
], Ww), kD = K([$w], oT), AD = K([kD, K([$w], (e) => e.allowDataOverflow)], h_), jD = K([
	K([
		DD,
		K([SD], (e) => e.filter(mv)),
		I_,
		L_
	], nT),
	e_,
	vv,
	AD
], iT), MD = K([
	ED,
	$w,
	K([SD], Iw),
	uT,
	vv,
	o_
], pT, { memoizeOptions: { resultEqualityCheck: hv } }), ND = K([K([
	_T,
	vv,
	yv
], vT), vv], wT), PD = K([K([
	bT,
	vv,
	yv
], vT), vv], ET), FD = K([
	$w,
	Z,
	ED,
	OD,
	I_,
	vv,
	K([
		$w,
		kD,
		AD,
		jD,
		MD,
		K([
			ND,
			K([K([
				ST,
				vv,
				yv
			], vT), vv], AT),
			PD
		], fT),
		Z,
		vv
	], MT)
], FT), ID = K([
	$w,
	FD,
	K([
		FD,
		$w,
		xD
	], RT),
	vv
], BT), LD = (e) => YT(e, vv(e), yv(e), !1), RD = K([$w, LD], K_), zD = K([K([
	$w,
	xD,
	ID,
	RD
], $C)], bv), BD = K([
	Z,
	$w,
	xD,
	zD,
	LD,
	K([
		Z,
		OD,
		$w,
		vv
	], _E),
	K([
		Z,
		OD,
		$w,
		vv
	], QT),
	vv
], (e, t, n, r, i, a, o, s) => {
	if (t) {
		var c = t.type, l = id(e, s);
		if (r) {
			var u = n === "scaleBand" && r.bandwidth ? r.bandwidth() / 2 : 2, d = c === "category" && r.bandwidth ? r.bandwidth() / u : 0;
			return d = s === "angleAxis" && i != null && i?.length >= 2 ? Sr(i[0] - i[1]) * 2 * d : d, l && o ? o.map((e, t) => {
				var n = r.map(e);
				return Y(n) ? {
					coordinate: n + d,
					value: e,
					index: t,
					offset: d
				} : null;
			}).filter(Nr) : r.domain().map((e, t) => {
				var n = r.map(e);
				return Y(n) ? {
					coordinate: n + d,
					value: a ? a[e] : e,
					index: t,
					offset: d
				} : null;
			}).filter(Nr);
		}
	}
}), VD = K([
	wE,
	TE,
	AE
], (e, t, n) => EE(n.shared, e, t)), HD = (e) => e.tooltip.settings.trigger, UD = (e) => e.tooltip.settings.defaultIndex, WD = K([
	cD,
	VD,
	HD,
	UD
], eD), GD = K([
	WD,
	ED,
	eT,
	FD
], iD), KD = K([BD, GD], kE), qD = K([WD], (e) => {
	if (e) return e.dataKey;
}), JD = K([WD], (e) => {
	if (e) return e.graphicalItemId;
}), YD = K([
	cD,
	VD,
	HD,
	UD
], oD), XD = K([WD, K([
	wd,
	Td,
	Z,
	Hd,
	BD,
	UD,
	YD
], aD)], (e, t) => e != null && e.coordinate ? e.coordinate : t), ZD = K([WD], (e) => e?.active ?? !1), QD = K([K([
	YD,
	GD,
	e_,
	eT,
	KD,
	sD,
	VD
], bD)], (e) => {
	if (e != null) {
		var t = e.map((e) => e.payload).filter((e) => e != null);
		return Array.from(new Set(t));
	}
});
// node_modules/recharts/es6/context/useTooltipAxis.js
function $D(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function eO(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? $D(Object(n), !0).forEach(function(t) {
			tO(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $D(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function tO(e, t, n) {
	return (t = nO(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function nO(e) {
	var t = rO(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function rO(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var iO = () => G($w), aO = () => {
	var e = iO(), t = G(BD), n = G(zD);
	return yd(!e || !n ? void 0 : eO(eO({}, e), {}, { scale: n }), t);
};
// node_modules/recharts/es6/util/getActiveCoordinate.js
function oO(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function sO(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? oO(Object(n), !0).forEach(function(t) {
			cO(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oO(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function cO(e, t, n) {
	return (t = lO(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function lO(e) {
	var t = uO(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function uO(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var dO = (e, t, n, r) => {
	var i = t.find((e) => e && e.index === n);
	if (i) {
		if (e === "horizontal") return {
			x: i.coordinate,
			y: r.relativeY
		};
		if (e === "vertical") return {
			x: r.relativeX,
			y: i.coordinate
		};
	}
	return {
		x: 0,
		y: 0
	};
}, fO = (e, t, n, r) => {
	var i = t.find((e) => e && e.index === n);
	if (i) {
		if (e === "centric") {
			var a = i.coordinate, o = r.radius;
			return sO(sO(sO({}, r), Dg(r.cx, r.cy, o, a)), {}, {
				angle: a,
				radius: o
			});
		}
		var s = i.coordinate, c = r.angle;
		return sO(sO(sO({}, r), Dg(r.cx, r.cy, s, c)), {}, {
			angle: c,
			radius: s
		});
	}
	return {
		angle: 0,
		clockWise: !1,
		cx: 0,
		cy: 0,
		endAngle: 0,
		innerRadius: 0,
		outerRadius: 0,
		radius: 0,
		startAngle: 0,
		x: 0,
		y: 0
	};
};
function pO(e, t) {
	var n = e.relativeX, r = e.relativeY;
	return n >= t.left && n <= t.left + t.width && r >= t.top && r <= t.top + t.height;
}
var mO = (e, t, n, r, i) => {
	var a = t?.length ?? 0;
	if (a <= 1 || e == null) return 0;
	if (r === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6) for (var o = i[1] - i[0], s = (t, n, r) => [
		e,
		e + o,
		e - o
	].some((e) => (r ? e >= t : e > t) && e <= n), c = 0; c < a; c++) {
		var l = c > 0 ? n[c - 1]?.coordinate : n[a - 1]?.coordinate, u = n[c]?.coordinate, d = c >= a - 1 ? n[0]?.coordinate : n[c + 1]?.coordinate, f = void 0;
		if (l != null && u != null && d != null) {
			if (Sr(u - l) !== Sr(d - u)) {
				var p = [];
				if (Sr(d - u) === Sr(i[1] - i[0])) {
					f = d;
					var m = u + i[1] - i[0];
					p[0] = Math.min(m, (m + l) / 2), p[1] = Math.max(m, (m + l) / 2);
				} else {
					f = l;
					var h = d + i[1] - i[0];
					p[0] = Math.min(u, (h + u) / 2), p[1] = Math.max(u, (h + u) / 2);
				}
				var g = [Math.min(u, (f + u) / 2), Math.max(u, (f + u) / 2)];
				if (s(g[0], g[1], !1) || s(p[0], p[1], !0)) return n[c]?.index;
			} else {
				var _ = Math.min(l, d), v = Math.max(l, d);
				if (s((_ + u) / 2, (v + u) / 2, !1)) return n[c]?.index;
			}
		}
	}
	else if (t) for (var y = 0; y < a; y++) {
		var b = t[y];
		if (b != null) {
			var x = t[y + 1], S = t[y - 1];
			if (y === 0 && x != null && e <= (b.coordinate + x.coordinate) / 2 || y === a - 1 && S != null && e > (b.coordinate + S.coordinate) / 2 || y > 0 && y < a - 1 && S != null && x != null && e > (b.coordinate + S.coordinate) / 2 && e <= (b.coordinate + x.coordinate) / 2) return b.index;
		}
	}
	return -1;
}, hO = () => G(R_), gO = (e, t) => t, _O = (e, t, n) => n, vO = (e, t, n, r) => r, yO = K(BD, (e) => Is(e, (e) => e.coordinate)), bO = K([
	cD,
	gO,
	_O,
	vO
], eD), xO = K([
	bO,
	ED,
	eT,
	FD
], iD), SO = (e, t, n) => {
	if (t != null) {
		var r = cD(e);
		return t === "axis" ? n === "hover" ? r.axisInteraction.hover.dataKey : r.axisInteraction.click.dataKey : n === "hover" ? r.itemInteraction.hover.dataKey : r.itemInteraction.click.dataKey;
	}
}, CO = K([
	cD,
	gO,
	_O,
	vO
], oD), wO = K([
	wd,
	Td,
	Z,
	Hd,
	BD,
	vO,
	CO
], aD), TO = K([bO, wO], (e, t) => e.coordinate ?? t), EO = K([BD, xO], kE), DO = K([
	CO,
	xO,
	e_,
	eT,
	EO,
	sD,
	gO
], bD), OO = K([bO, xO], (e, t) => ({
	isActive: e.active && t != null,
	activeIndex: t
})), kO = (e, t, n, r, i, a, o) => {
	if (e && n && r && i && pO(e, o)) {
		var s = mO(Sd(e, t), a, i, n, r), c = dO(t, i, s, e);
		return {
			activeIndex: String(s),
			activeCoordinate: c
		};
	}
}, AO = (e, t, n, r, i, a, o) => {
	if (e && r && i && a && n) {
		var s = Ng(e, n);
		if (s) {
			var c = mO(Cd(s, t), o, a, r, i), l = fO(t, a, c, s);
			return {
				activeIndex: String(c),
				activeCoordinate: l
			};
		}
	}
}, jO = (e, t, n, r, i, a, o, s) => {
	if (e && t && r && i && a) return t === "horizontal" || t === "vertical" ? kO(e, t, r, i, a, o, s) : AO(e, t, n, r, i, a, o);
}, MO = K((e) => e.zIndex.zIndexMap, (e, t) => t, (e, t, n) => n, (e, t, n) => {
	if (t != null) {
		var r = e[t];
		if (r != null) return n ? r.panoramaElement : r.element;
	}
}), NO = K((e) => e.zIndex.zIndexMap, (e) => {
	var t = Object.keys(e).map((e) => parseInt(e, 10)).concat(Object.values(U_));
	return Array.from(new Set(t)).sort((e, t) => e - t);
}, { memoizeOptions: { resultEqualityCheck: _v } });
// node_modules/recharts/es6/state/zIndexSlice.js
function PO(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function FO(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? PO(Object(n), !0).forEach(function(t) {
			IO(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : PO(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function IO(e, t, n) {
	return (t = LO(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function LO(e) {
	var t = RO(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function RO(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var zO = { zIndexMap: Object.values(U_).reduce((e, t) => FO(FO({}, e), {}, { [t]: {
	element: void 0,
	panoramaElement: void 0,
	consumers: 0
} }), {}) }, BO = new Set(Object.values(U_));
function VO(e) {
	return BO.has(e);
}
var HO = tu({
	name: "zIndex",
	initialState: zO,
	reducers: {
		registerZIndexPortal: {
			reducer: (e, t) => {
				var n = t.payload.zIndex;
				e.zIndexMap[n] ? e.zIndexMap[n].consumers += 1 : e.zIndexMap[n] = {
					consumers: 1,
					element: void 0,
					panoramaElement: void 0
				};
			},
			prepare: J()
		},
		unregisterZIndexPortal: {
			reducer: (e, t) => {
				var n = t.payload.zIndex;
				e.zIndexMap[n] && (--e.zIndexMap[n].consumers, e.zIndexMap[n].consumers <= 0 && !VO(n) && delete e.zIndexMap[n]);
			},
			prepare: J()
		},
		registerZIndexPortalElement: {
			reducer: (e, t) => {
				var n = t.payload, r = n.zIndex, i = n.element, a = n.isPanorama;
				e.zIndexMap[r] ? a ? e.zIndexMap[r].panoramaElement = q(i) : e.zIndexMap[r].element = q(i) : e.zIndexMap[r] = {
					consumers: 0,
					element: a ? void 0 : q(i),
					panoramaElement: a ? q(i) : void 0
				};
			},
			prepare: J()
		},
		unregisterZIndexPortalElement: {
			reducer: (e, t) => {
				var n = t.payload.zIndex;
				e.zIndexMap[n] && (t.payload.isPanorama ? e.zIndexMap[n].panoramaElement = void 0 : e.zIndexMap[n].element = void 0);
			},
			prepare: J()
		}
	}
}), UO = HO.actions, WO = UO.registerZIndexPortal, GO = UO.unregisterZIndexPortal, KO = UO.registerZIndexPortalElement, qO = UO.unregisterZIndexPortalElement, JO = HO.reducer;
// node_modules/recharts/es6/zIndex/ZIndexLayer.js
function YO(e) {
	var t = e.zIndex, n = e.children, r = zf() && t !== void 0 && t !== 0, i = Kd(), a = (0, B.useRef)(void 0), o = (0, B.useRef)(/* @__PURE__ */ new Set()), s = W(), c = G((e) => MO(e, t, i));
	if ((0, B.useLayoutEffect)(() => {
		if (!r) {
			var e = o.current;
			e.forEach((e) => {
				s(GO({ zIndex: e }));
			}), e.clear(), a.current = void 0;
		} else if (o.current.has(t) || (s(WO({ zIndex: t })), o.current.add(t)), c) {
			a.current = c;
			var n = o.current;
			n.forEach((e) => {
				e !== t && (s(GO({ zIndex: e })), n.delete(e));
			});
		}
	}, [
		s,
		t,
		r,
		c
	]), (0, B.useLayoutEffect)(() => {
		var e = o.current;
		return () => {
			e.forEach((e) => {
				s(GO({ zIndex: e }));
			}), e.clear();
		};
	}, [s]), !r) return n;
	var l = c ?? a.current;
	return l ? /*#__PURE__*/ (0, gp.createPortal)(n, l) : null;
}
// node_modules/recharts/es6/component/Cursor.js
function XO() {
	return XO = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, XO.apply(null, arguments);
}
function ZO(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function QO(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ZO(Object(n), !0).forEach(function(t) {
			$O(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ZO(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function $O(e, t, n) {
	return (t = ek(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ek(e) {
	var t = tk(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function tk(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function nk(e) {
	var t = e.cursor, n = e.cursorComp, r = e.cursorProps;
	return /*#__PURE__*/ (0, B.isValidElement)(t) ? /*#__PURE__*/ (0, B.cloneElement)(t, r) : /*#__PURE__*/ (0, B.createElement)(n, r);
}
function rk(e) {
	var t = e.coordinate, n = e.payload, r = e.index, i = e.offset, a = e.tooltipAxisBandSize, o = e.layout, s = e.cursor, c = e.tooltipEventType, l = e.chartName, u = t, d = n, f = r;
	if (!s || !u || l !== "ScatterChart" && c !== "axis") return null;
	var p, m, h;
	if (l === "ScatterChart") p = u, m = oh, h = U_.cursorLine;
	else if (l === "BarChart") p = sh(o, u, i, a), m = yg, h = U_.cursorRectangle;
	else if (o === "radial" && Aa(u)) {
		var g = Pg(u), _ = g.cx, v = g.cy, y = g.radius;
		p = {
			cx: _,
			cy: v,
			startAngle: g.startAngle,
			endAngle: g.endAngle,
			innerRadius: y,
			outerRadius: y
		}, m = Yg, h = U_.cursorLine;
	} else p = { points: Xg(o, u, i) }, m = Ym, h = U_.cursorLine;
	var b = typeof s == "object" && "className" in s ? s.className : void 0, x = QO(QO(QO(QO({
		stroke: "#ccc",
		pointerEvents: "none"
	}, i), p), Xn(s)), {}, {
		payload: d,
		payloadIndex: f,
		className: z("recharts-tooltip-cursor", b)
	});
	return /*#__PURE__*/ B.createElement(YO, { zIndex: e.zIndex ?? h }, /*#__PURE__*/ B.createElement(nk, {
		cursor: s,
		cursorComp: m,
		cursorProps: x
	}));
}
function ik(e) {
	var t = aO(), n = jf(), r = Ff(), i = hO();
	return t == null || n == null || r == null || i == null ? null : /*#__PURE__*/ B.createElement(rk, XO({}, e, {
		offset: n,
		layout: r,
		tooltipAxisBandSize: t,
		chartName: i
	}));
}
// node_modules/recharts/es6/context/tooltipPortalContext.js
var ak = /*#__PURE__*/ (0, B.createContext)(null), ok = () => (0, B.useContext)(ak), sk = (/* @__PURE__ */ Ne((/* @__PURE__ */ je(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = "~";
	function i() {}
	Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1));
	function a(e, t, n) {
		this.fn = e, this.context = t, this.once = n || !1;
	}
	function o(e, t, n, i, o) {
		if (typeof n != "function") throw TypeError("The listener must be a function");
		var s = new a(n, i || e, o), c = r ? r + t : t;
		return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e;
	}
	function s(e, t) {
		--e._eventsCount === 0 ? e._events = new i() : delete e._events[t];
	}
	function c() {
		this._events = new i(), this._eventsCount = 0;
	}
	c.prototype.eventNames = function() {
		var e = [], t, i;
		if (this._eventsCount === 0) return e;
		for (i in t = this._events) n.call(t, i) && e.push(r ? i.slice(1) : i);
		return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
	}, c.prototype.listeners = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		if (!n) return [];
		if (n.fn) return [n.fn];
		for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
		return o;
	}, c.prototype.listenerCount = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		return n ? n.fn ? 1 : n.length : 0;
	}, c.prototype.emit = function(e, t, n, i, a, o) {
		var s = r ? r + e : e;
		if (!this._events[s]) return !1;
		var c = this._events[s], l = arguments.length, u, d;
		if (c.fn) {
			switch (c.once && this.removeListener(e, c.fn, void 0, !0), l) {
				case 1: return c.fn.call(c.context), !0;
				case 2: return c.fn.call(c.context, t), !0;
				case 3: return c.fn.call(c.context, t, n), !0;
				case 4: return c.fn.call(c.context, t, n, i), !0;
				case 5: return c.fn.call(c.context, t, n, i, a), !0;
				case 6: return c.fn.call(c.context, t, n, i, a, o), !0;
			}
			for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
			c.fn.apply(c.context, u);
		} else {
			var f = c.length, p;
			for (d = 0; d < f; d++) switch (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l) {
				case 1:
					c[d].fn.call(c[d].context);
					break;
				case 2:
					c[d].fn.call(c[d].context, t);
					break;
				case 3:
					c[d].fn.call(c[d].context, t, n);
					break;
				case 4:
					c[d].fn.call(c[d].context, t, n, i);
					break;
				default:
					if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
					c[d].fn.apply(c[d].context, u);
			}
		}
		return !0;
	}, c.prototype.on = function(e, t, n) {
		return o(this, e, t, n, !1);
	}, c.prototype.once = function(e, t, n) {
		return o(this, e, t, n, !0);
	}, c.prototype.removeListener = function(e, t, n, i) {
		var a = r ? r + e : e;
		if (!this._events[a]) return this;
		if (!t) return s(this, a), this;
		var o = this._events[a];
		if (o.fn) o.fn !== t || i && !o.once || n && o.context !== n || s(this, a);
		else {
			for (var c = 0, l = [], u = o.length; c < u; c++) (o[c].fn !== t || i && !o[c].once || n && o[c].context !== n) && l.push(o[c]);
			l.length ? this._events[a] = l.length === 1 ? l[0] : l : s(this, a);
		}
		return this;
	}, c.prototype.removeAllListeners = function(e) {
		var t;
		return e ? (t = r ? r + e : e, this._events[t] && s(this, t)) : (this._events = new i(), this._eventsCount = 0), this;
	}, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, t !== void 0 && (t.exports = c);
})))(), 1)).default, ck = new sk(), lk = "recharts.syncEvent.tooltip", uk = "recharts.syncEvent.brush", dk = (e, t) => {
	if (t && Array.isArray(e)) {
		var n = Number.parseInt(t, 10);
		if (!Cr(n)) return e[n];
	}
}, fk = tu({
	name: "options",
	initialState: {
		chartName: "",
		tooltipPayloadSearcher: () => void 0,
		eventEmitter: void 0,
		defaultTooltipEventType: "axis"
	},
	reducers: { createEventEmitter: (e) => {
		e.eventEmitter ??= Symbol("rechartsEventEmitter");
	} }
}), pk = fk.reducer, mk = fk.actions.createEventEmitter;
// node_modules/recharts/es6/synchronisation/syncSelectors.js
function hk(e) {
	return e.tooltip.syncInteraction;
}
var gk = tu({
	name: "chartData",
	initialState: {
		chartData: void 0,
		computedData: void 0,
		dataStartIndex: 0,
		dataEndIndex: 0
	},
	reducers: {
		setChartData(e, t) {
			e.chartData = q(t.payload), t.payload == null ? (e.dataStartIndex = 0, e.dataEndIndex = 0) : t.payload.length > 0 && e.dataEndIndex !== t.payload.length - 1 && (e.dataEndIndex = t.payload.length - 1);
		},
		setComputedData(e, t) {
			e.computedData = t.payload;
		},
		setDataStartEndIndexes(e, t) {
			var n = t.payload, r = n.startIndex, i = n.endIndex;
			r != null && (e.dataStartIndex = r), i != null && (e.dataEndIndex = i);
		}
	}
}), _k = gk.actions, vk = _k.setChartData, yk = _k.setDataStartEndIndexes;
_k.setComputedData;
var bk = gk.reducer, xk = ["x", "y"];
function Sk(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ck(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Sk(Object(n), !0).forEach(function(t) {
			wk(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sk(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function wk(e, t, n) {
	return (t = Tk(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Tk(e) {
	var t = Ek(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ek(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Dk(e, t) {
	if (e == null) return {};
	var n, r, i = Ok(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Ok(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function kk() {
	var e = G(z_), t = G(V_), n = W(), r = G(B_), i = G(BD), a = Ff(), o = kf(), s = G((e) => e.rootProps.className);
	(0, B.useEffect)(() => {
		if (e == null) return Pr;
		var s = (s, c, l) => {
			if (t !== l && e === s) {
				if (c.payload.active === !1) n(WE({
					active: !1,
					coordinate: void 0,
					dataKey: void 0,
					index: null,
					label: void 0,
					sourceViewBox: void 0,
					graphicalItemId: void 0
				}));
				else if (r === "index") {
					var u;
					if (o && c != null && (u = c.payload) != null && u.coordinate && c.payload.sourceViewBox) {
						var d = c.payload.coordinate, f = d.x, p = d.y, m = Dk(d, xk), h = c.payload.sourceViewBox, g = h.x, _ = h.y, v = h.width, y = h.height, b = Ck(Ck({}, m), {}, {
							x: o.x + (v ? (f - g) / v : 0) * o.width,
							y: o.y + (y ? (p - _) / y : 0) * o.height
						});
						n(Ck(Ck({}, c), {}, { payload: Ck(Ck({}, c.payload), {}, { coordinate: b }) }));
					} else n(c);
				} else if (i != null) {
					var x;
					typeof r == "function" ? x = i[r(i, {
						activeTooltipIndex: c.payload.index == null ? void 0 : Number(c.payload.index),
						isTooltipActive: c.payload.active,
						activeIndex: c.payload.index == null ? void 0 : Number(c.payload.index),
						activeLabel: c.payload.label,
						activeDataKey: c.payload.dataKey,
						activeCoordinate: c.payload.coordinate
					})] : r === "value" && (x = i.find((e) => String(e.value) === c.payload.label));
					var S = c.payload.coordinate;
					if (S == null || o == null) n(WE({
						active: !1,
						coordinate: void 0,
						dataKey: void 0,
						index: null,
						label: void 0,
						sourceViewBox: void 0,
						graphicalItemId: void 0
					}));
					else if (x == null) n(WE({
						active: !1,
						coordinate: void 0,
						dataKey: void 0,
						index: null,
						label: void 0,
						sourceViewBox: c.payload.sourceViewBox,
						graphicalItemId: void 0
					}));
					else {
						var C = S.x, w = S.y, T = Math.min(C, o.x + o.width), E = Math.min(w, o.y + o.height), D = {
							x: a === "horizontal" ? x.coordinate : T,
							y: a === "horizontal" ? E : x.coordinate
						};
						n(WE({
							active: c.payload.active,
							coordinate: D,
							dataKey: c.payload.dataKey,
							index: String(x.index),
							label: c.payload.label,
							sourceViewBox: c.payload.sourceViewBox,
							graphicalItemId: c.payload.graphicalItemId
						}));
					}
				}
			}
		};
		return ck.on(lk, s), () => {
			ck.off(lk, s);
		};
	}, [
		s,
		n,
		t,
		e,
		r,
		i,
		a,
		o
	]);
}
function Ak() {
	var e = G(z_), t = G(V_), n = W();
	(0, B.useEffect)(() => {
		if (e == null) return Pr;
		var r = (r, i, a) => {
			t !== a && e === r && n(yk(i));
		};
		return ck.on(uk, r), () => {
			ck.off(uk, r);
		};
	}, [
		n,
		t,
		e
	]);
}
function jk() {
	var e = W();
	(0, B.useEffect)(() => {
		e(mk());
	}, [e]), kk(), Ak();
}
function Mk(e, t, n, r, i, a) {
	var o = G((n) => SO(n, e, t)), s = G(JD), c = G(V_), l = G(z_), u = G(B_), d = G(hk)?.sourceViewBox != null, f = kf();
	(0, B.useEffect)(() => {
		if (!d && l != null && c != null) {
			var e = WE({
				active: a,
				coordinate: n,
				dataKey: o,
				index: i,
				label: typeof r == "number" ? String(r) : r,
				sourceViewBox: f,
				graphicalItemId: s
			});
			ck.emit(lk, l, e, c);
		}
	}, [
		d,
		n,
		o,
		s,
		i,
		r,
		c,
		l,
		u,
		a,
		f
	]);
}
// node_modules/recharts/es6/component/Tooltip.js
function Nk(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Pk(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Nk(Object(n), !0).forEach(function(t) {
			Fk(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nk(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Fk(e, t, n) {
	return (t = Ik(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ik(e) {
	var t = Lk(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Lk(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Rk(e, t) {
	return Uk(e) || Hk(e, t) || Bk(e, t) || zk();
}
function zk() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Bk(e, t) {
	if (e) {
		if (typeof e == "string") return Vk(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vk(e, t) : void 0;
	}
}
function Vk(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Hk(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Uk(e) {
	if (Array.isArray(e)) return e;
}
function Wk(e) {
	return e.dataKey;
}
function Gk(e, t) {
	return /*#__PURE__*/ B.isValidElement(e) ? /*#__PURE__*/ B.cloneElement(e, t) : typeof e == "function" ? /*#__PURE__*/ B.createElement(e, t) : /*#__PURE__*/ B.createElement(am, t);
}
var Kk = [], qk = {
	allowEscapeViewBox: {
		x: !1,
		y: !1
	},
	animationDuration: 400,
	animationEasing: "ease",
	axisId: 0,
	contentStyle: {},
	cursor: !0,
	filterNull: !0,
	includeHidden: !1,
	isAnimationActive: "auto",
	itemSorter: "name",
	itemStyle: {},
	labelStyle: {},
	offset: 10,
	reverseDirection: {
		x: !1,
		y: !1
	},
	separator: " : ",
	trigger: "hover",
	useTranslate3d: !1,
	wrapperStyle: {}
};
function Jk(e) {
	var t = za(e, qk), n = t.active, r = t.allowEscapeViewBox, i = t.animationDuration, a = t.animationEasing, o = t.content, s = t.filterNull, c = t.isAnimationActive, l = t.offset, u = t.payloadUniqBy, d = t.position, f = t.reverseDirection, p = t.useTranslate3d, m = t.wrapperStyle, h = t.cursor, g = t.shared, _ = t.trigger, v = t.defaultIndex, y = t.portal, b = t.axisId, x = W(), S = typeof v == "number" ? String(v) : v;
	(0, B.useEffect)(() => {
		x(LE({
			shared: g,
			trigger: _,
			axisId: b,
			active: n,
			defaultIndex: S
		}));
	}, [
		x,
		g,
		_,
		b,
		n,
		S
	]);
	var C = kf(), w = Pm(), T = OE(g), E = G((e) => OO(e, T, _, S)) ?? {}, D = E.activeIndex, O = E.isActive, k = G((e) => DO(e, T, _, S)), A = G((e) => EO(e, T, _, S)), j = G((e) => TO(e, T, _, S)), M = k, N = ok(), ee = n ?? O ?? !1, te = Rk(Xs([M, ee]), 2), ne = te[0], re = te[1], P = T === "axis" ? A : void 0;
	Mk(T, _, j, P, D, ee);
	var ie = y ?? N;
	if (ie == null || C == null || T == null) return null;
	var ae = M ?? Kk;
	ee || (ae = Kk), s && ae.length && (ae = cs(ae.filter((e) => e.value != null && (e.hide !== !0 || t.includeHidden)), u, Wk));
	var oe = ae.length > 0, se = Pk(Pk({}, t), {}, {
		payload: ae,
		label: P,
		active: ee,
		activeIndex: D,
		coordinate: j,
		accessibilityLayer: w
	}), ce = /*#__PURE__*/ B.createElement(Nm, {
		allowEscapeViewBox: r,
		animationDuration: i,
		animationEasing: a,
		isAnimationActive: c,
		active: ee,
		coordinate: j,
		hasPayload: oe,
		offset: l,
		position: d,
		reverseDirection: f,
		useTranslate3d: p,
		viewBox: C,
		wrapperStyle: m,
		lastBoundingBox: ne,
		innerRef: re,
		hasPortalFromProps: !!y
	}, Gk(o, se));
	return /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ (0, gp.createPortal)(ce, ie), ee && /*#__PURE__*/ B.createElement(ik, {
		cursor: h,
		tooltipEventType: T,
		coordinate: j,
		payload: ae,
		index: D
	}));
}
// node_modules/recharts/es6/component/Cell.js
var Yk = (e) => null;
Yk.displayName = "Cell";
// node_modules/recharts/es6/util/LRUCache.js
function Xk(e, t, n) {
	return (t = Zk(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Zk(e) {
	var t = Qk(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Qk(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var $k = class {
	constructor(e) {
		Xk(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = e;
	}
	get(e) {
		var t = this.cache.get(e);
		return t !== void 0 && (this.cache.delete(e), this.cache.set(e, t)), t;
	}
	set(e, t) {
		if (this.cache.has(e)) this.cache.delete(e);
		else if (this.cache.size >= this.maxSize) {
			var n = this.cache.keys().next().value;
			n != null && this.cache.delete(n);
		}
		this.cache.set(e, t);
	}
	clear() {
		this.cache.clear();
	}
	size() {
		return this.cache.size;
	}
};
// node_modules/recharts/es6/util/DOMUtils.js
function eA(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function tA(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? eA(Object(n), !0).forEach(function(t) {
			nA(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eA(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function nA(e, t, n) {
	return (t = rA(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function rA(e) {
	var t = iA(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function iA(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var aA = tA({}, {
	cacheSize: 2e3,
	enableCache: !0
}), oA = new $k(aA.cacheSize), sA = {
	position: "absolute",
	top: "-20000px",
	left: 0,
	padding: 0,
	margin: 0,
	border: "none",
	whiteSpace: "pre"
}, cA = "recharts_measurement_span";
function lA(e, t) {
	return `${e}|${t.fontSize || ""}|${t.fontFamily || ""}|${t.fontWeight || ""}|${t.fontStyle || ""}|${t.letterSpacing || ""}|${t.textTransform || ""}`;
}
var uA = (e, t) => {
	try {
		var n = document.getElementById(cA);
		n || (n = document.createElement("span"), n.setAttribute("id", cA), n.setAttribute("aria-hidden", "true"), document.body.appendChild(n)), Object.assign(n.style, sA, t), n.textContent = `${e}`;
		var r = n.getBoundingClientRect();
		return {
			width: r.width,
			height: r.height
		};
	} catch {
		return {
			width: 0,
			height: 0
		};
	}
}, dA = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	if (e == null || fm.isSsr) return {
		width: 0,
		height: 0
	};
	if (!aA.enableCache) return uA(e, t);
	var n = lA(e, t), r = oA.get(n);
	if (r) return r;
	var i = uA(e, t);
	return oA.set(n, i), i;
}, fA;
function pA(e, t) {
	return vA(e) || _A(e, t) || hA(e, t) || mA();
}
function mA() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function hA(e, t) {
	if (e) {
		if (typeof e == "string") return gA(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gA(e, t) : void 0;
	}
}
function gA(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function _A(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function vA(e) {
	if (Array.isArray(e)) return e;
}
function yA(e, t, n) {
	return (t = bA(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function bA(e) {
	var t = xA(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function xA(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var SA = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, CA = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, wA = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/, TA = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, EA = {
	cm: 96 / 2.54,
	mm: 96 / 25.4,
	pt: 96 / 72,
	pc: 16,
	in: 96,
	Q: 96 / 101.6,
	px: 1
}, DA = [
	"cm",
	"mm",
	"pt",
	"pc",
	"in",
	"Q",
	"px"
];
function OA(e) {
	return DA.includes(e);
}
var kA = "NaN";
function AA(e, t) {
	return e * EA[t];
}
var jA = class e {
	static parse(t) {
		var n = pA(TA.exec(t) ?? [], 3), r = n[1], i = n[2];
		return r == null ? e.NaN : new e(parseFloat(r), i ?? "");
	}
	constructor(e, t) {
		this.num = e, this.unit = t, this.num = e, this.unit = t, Cr(e) && (this.unit = ""), t !== "" && !wA.test(t) && (this.num = NaN, this.unit = ""), OA(t) && (this.num = AA(e, t), this.unit = "px");
	}
	add(t) {
		return this.unit === t.unit ? new e(this.num + t.num, this.unit) : new e(NaN, "");
	}
	subtract(t) {
		return this.unit === t.unit ? new e(this.num - t.num, this.unit) : new e(NaN, "");
	}
	multiply(t) {
		return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new e(NaN, "") : new e(this.num * t.num, this.unit || t.unit);
	}
	divide(t) {
		return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new e(NaN, "") : new e(this.num / t.num, this.unit || t.unit);
	}
	toString() {
		return `${this.num}${this.unit}`;
	}
	isNaN() {
		return Cr(this.num);
	}
};
fA = jA, yA(jA, "NaN", new fA(NaN, ""));
function MA(e) {
	if (e == null || e.includes(kA)) return kA;
	for (var t = e; t.includes("*") || t.includes("/");) {
		var n = pA(SA.exec(t) ?? [], 4), r = n[1], i = n[2], a = n[3], o = jA.parse(r ?? ""), s = jA.parse(a ?? ""), c = i === "*" ? o.multiply(s) : o.divide(s);
		if (c.isNaN()) return kA;
		t = t.replace(SA, c.toString());
	}
	for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t);) {
		var l = pA(CA.exec(t) ?? [], 4), u = l[1], d = l[2], f = l[3], p = jA.parse(u ?? ""), m = jA.parse(f ?? ""), h = d === "+" ? p.add(m) : p.subtract(m);
		if (h.isNaN()) return kA;
		t = t.replace(CA, h.toString());
	}
	return t;
}
var NA = /\(([^()]*)\)/;
function PA(e) {
	for (var t = e, n; (n = NA.exec(t)) != null;) {
		var r = pA(n, 2)[1];
		t = t.replace(NA, MA(r));
	}
	return t;
}
function FA(e) {
	var t = e.replace(/\s+/g, "");
	return t = PA(t), t = MA(t), t;
}
function IA(e) {
	try {
		return FA(e);
	} catch {
		return kA;
	}
}
function LA(e) {
	var t = IA(e.slice(5, -1));
	return t === kA ? "" : t;
}
// node_modules/recharts/es6/component/Text.js
var RA = [
	"x",
	"y",
	"lineHeight",
	"capHeight",
	"fill",
	"scaleToFit",
	"textAnchor",
	"verticalAnchor"
], zA = [
	"dx",
	"dy",
	"angle",
	"className",
	"breakAll"
];
function BA() {
	return BA = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, BA.apply(null, arguments);
}
function VA(e, t) {
	if (e == null) return {};
	var n, r, i = HA(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function HA(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function UA(e, t) {
	return JA(e) || qA(e, t) || GA(e, t) || WA();
}
function WA() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function GA(e, t) {
	if (e) {
		if (typeof e == "string") return KA(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? KA(e, t) : void 0;
	}
}
function KA(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function qA(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function JA(e) {
	if (Array.isArray(e)) return e;
}
var YA = /[ \f\n\r\t\v\u2028\u2029]+/, XA = (e) => {
	var t = e.children, n = e.breakAll, r = e.style;
	try {
		var i = [];
		return jr(t) || (i = n ? t.toString().split("") : t.toString().split(YA)), {
			wordsWithComputedWidth: i.map((e) => ({
				word: e,
				width: dA(e, r).width
			})),
			spaceWidth: n ? 0 : dA("\xA0", r).width
		};
	} catch {
		return null;
	}
};
function ZA(e) {
	return e === "start" || e === "middle" || e === "end" || e === "inherit";
}
function QA(e) {
	return jr(e) || typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
var $A = (e, t, n, r) => e.reduce((e, i) => {
	var a = i.word, o = i.width, s = e[e.length - 1];
	if (s && o != null && (t == null || r || s.width + o + n < Number(t))) s.words.push(a), s.width += o + n;
	else {
		var c = {
			words: [a],
			width: o
		};
		e.push(c);
	}
	return e;
}, []), ej = (e) => e.reduce((e, t) => e.width > t.width ? e : t), tj = "…", nj = (e, t, n, r, i, a, o, s) => {
	var c = XA({
		breakAll: n,
		style: r,
		children: e.slice(0, t) + tj
	});
	if (!c) return [!1, []];
	var l = $A(c.wordsWithComputedWidth, a, o, s);
	return [l.length > i || ej(l).width > Number(a), l];
}, rj = (e, t, n, r, i) => {
	var a = e.maxLines, o = e.children, s = e.style, c = e.breakAll, l = H(a), u = String(o), d = $A(t, r, n, i);
	if (!l || i || !(d.length > a || ej(d).width > Number(r))) return d;
	for (var f = 0, p = u.length - 1, m = 0, h; f <= p && m <= u.length - 1;) {
		var g = Math.floor((f + p) / 2), _ = UA(nj(u, g - 1, c, s, a, r, n, i), 2), v = _[0], y = _[1], b = UA(nj(u, g, c, s, a, r, n, i), 1)[0];
		if (!v && !b && (f = g + 1), v && b && (p = g - 1), !v && b) {
			h = y;
			break;
		}
		m++;
	}
	return h || d;
}, ij = (e) => [{
	words: jr(e) ? [] : e.toString().split(YA),
	width: void 0
}], aj = (e) => {
	var t = e.width, n = e.scaleToFit, r = e.children, i = e.style, a = e.breakAll, o = e.maxLines;
	if ((t || n) && !fm.isSsr) {
		var s, c, l = XA({
			breakAll: a,
			children: r,
			style: i
		});
		if (l) {
			var u = l.wordsWithComputedWidth, d = l.spaceWidth;
			s = u, c = d;
		} else return ij(r);
		return rj({
			breakAll: a,
			children: r,
			maxLines: o,
			style: i
		}, s, c, t, !!n);
	}
	return ij(r);
}, oj = "#808080", sj = {
	angle: 0,
	breakAll: !1,
	capHeight: "0.71em",
	fill: oj,
	lineHeight: "1em",
	scaleToFit: !1,
	textAnchor: "start",
	verticalAnchor: "end",
	x: 0,
	y: 0
}, cj = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = za(e, sj), r = n.x, i = n.y, a = n.lineHeight, o = n.capHeight, s = n.fill, c = n.scaleToFit, l = n.textAnchor, u = n.verticalAnchor, d = VA(n, RA), f = (0, B.useMemo)(() => aj({
		breakAll: d.breakAll,
		children: d.children,
		maxLines: d.maxLines,
		scaleToFit: c,
		style: d.style,
		width: d.width
	}), [
		d.breakAll,
		d.children,
		d.maxLines,
		c,
		d.style,
		d.width
	]), p = d.dx, m = d.dy, h = d.angle, g = d.className, _ = d.breakAll, v = VA(d, zA);
	if (!Tr(r) || !Tr(i) || f.length === 0) return null;
	var y = Number(r) + (H(p) ? p : 0), b = Number(i) + (H(m) ? m : 0);
	if (!Y(y) || !Y(b)) return null;
	var x;
	switch (u) {
		case "start":
			x = LA(`calc(${o})`);
			break;
		case "middle":
			x = LA(`calc(${(f.length - 1) / 2} * -${a} + (${o} / 2))`);
			break;
		default: x = LA(`calc(${f.length - 1} * -${a})`);
	}
	var S = [], C = f[0];
	if (c && C != null) {
		var w = C.width, T = d.width;
		S.push(`scale(${H(T) && H(w) ? T / w : 1})`);
	}
	return h && S.push(`rotate(${h}, ${y}, ${b})`), S.length && (v.transform = S.join(" ")), /*#__PURE__*/ B.createElement("text", BA({}, Zn(v), {
		ref: t,
		x: y,
		y: b,
		className: z("recharts-text", g),
		textAnchor: l,
		fill: s.includes("url") ? oj : s
	}), f.map((e, t) => {
		var n = e.words.join(_ ? "" : " ");
		return /*#__PURE__*/ B.createElement("tspan", {
			x: y,
			dy: t === 0 ? x : a,
			key: `${n}-${t}`
		}, n);
	}));
});
cj.displayName = "Text";
// node_modules/recharts/es6/component/Label.js
var lj = ["labelRef"], uj = ["content"];
function dj(e, t) {
	if (e == null) return {};
	var n, r, i = fj(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function fj(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function pj(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function mj(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? pj(Object(n), !0).forEach(function(t) {
			hj(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pj(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function hj(e, t, n) {
	return (t = gj(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function gj(e) {
	var t = _j(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function _j(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function vj() {
	return vj = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, vj.apply(null, arguments);
}
var yj = /*#__PURE__*/ (0, B.createContext)(null), bj = (e) => {
	var t = e.x, n = e.y, r = e.upperWidth, i = e.lowerWidth, a = e.width, o = e.height, s = e.children, c = (0, B.useMemo)(() => ({
		x: t,
		y: n,
		upperWidth: r,
		lowerWidth: i,
		width: a,
		height: o
	}), [
		t,
		n,
		r,
		i,
		a,
		o
	]);
	return /*#__PURE__*/ B.createElement(yj.Provider, { value: c }, s);
}, xj = () => {
	var e = (0, B.useContext)(yj), t = kf();
	return e || (t ? Fr(t) : void 0);
}, Sj = /*#__PURE__*/ (0, B.createContext)(null), Cj = (e) => {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.startAngle, o = e.endAngle, s = e.clockWise, c = e.children, l = (0, B.useMemo)(() => ({
		cx: t,
		cy: n,
		innerRadius: r,
		outerRadius: i,
		startAngle: a,
		endAngle: o,
		clockWise: s
	}), [
		t,
		n,
		r,
		i,
		a,
		o,
		s
	]);
	return /*#__PURE__*/ B.createElement(Sj.Provider, { value: l }, c);
}, wj = () => {
	var e = (0, B.useContext)(Sj), t = G(lv);
	return e || t;
}, Tj = (e) => {
	var t = e.value, n = e.formatter, r = jr(e.children) ? t : e.children;
	return typeof n == "function" ? n(r) : r;
}, Ej = (e) => e != null && typeof e == "function", Dj = (e, t) => Sr(t - e) * Math.min(Math.abs(t - e), 360), Oj = (e, t, n, r, i) => {
	var a = e.offset, o = e.className, s = i.cx, c = i.cy, l = i.innerRadius, u = i.outerRadius, d = i.startAngle, f = i.endAngle, p = i.clockWise, m = (l + u) / 2, h = Dj(d, f), g = h >= 0 ? 1 : -1, _, v;
	switch (t) {
		case "insideStart":
			_ = d + g * a, v = p;
			break;
		case "insideEnd":
			_ = f - g * a, v = !p;
			break;
		case "end":
			_ = f + g * a, v = p;
			break;
		default: throw Error(`Unsupported position ${t}`);
	}
	v = h <= 0 ? v : !v;
	var y = Dg(s, c, m, _), b = Dg(s, c, m, _ + (v ? 1 : -1) * 359), x = `M${y.x},${y.y}
    A${m},${m},0,1,${+!v},
    ${b.x},${b.y}`, S = jr(e.id) ? Dr("recharts-radial-line-") : e.id;
	return /*#__PURE__*/ B.createElement("text", vj({}, r, {
		dominantBaseline: "central",
		className: z("recharts-radial-bar-label", o)
	}), /*#__PURE__*/ B.createElement("defs", null, /*#__PURE__*/ B.createElement("path", {
		id: S,
		d: x
	})), /*#__PURE__*/ B.createElement("textPath", { xlinkHref: `#${S}` }, n));
}, kj = (e, t, n) => {
	var r = e.cx, i = e.cy, a = e.innerRadius, o = e.outerRadius, s = (e.startAngle + e.endAngle) / 2;
	if (n === "outside") {
		var c = Dg(r, i, o + t, s), l = c.x;
		return {
			x: l,
			y: c.y,
			textAnchor: l >= r ? "start" : "end",
			verticalAnchor: "middle"
		};
	}
	if (n === "center") return {
		x: r,
		y: i,
		textAnchor: "middle",
		verticalAnchor: "middle"
	};
	if (n === "centerTop") return {
		x: r,
		y: i,
		textAnchor: "middle",
		verticalAnchor: "start"
	};
	if (n === "centerBottom") return {
		x: r,
		y: i,
		textAnchor: "middle",
		verticalAnchor: "end"
	};
	var u = Dg(r, i, (a + o) / 2, s);
	return {
		x: u.x,
		y: u.y,
		textAnchor: "middle",
		verticalAnchor: "middle"
	};
}, Aj = (e) => e != null && "cx" in e && H(e.cx), jj = {
	angle: 0,
	offset: 5,
	zIndex: U_.label,
	position: "middle",
	textBreakAll: !1
};
function Mj(e) {
	if (!Aj(e)) return e;
	var t = e.cx, n = e.cy, r = e.outerRadius, i = r * 2;
	return {
		x: t - r,
		y: n - r,
		width: i,
		upperWidth: i,
		lowerWidth: i,
		height: i
	};
}
function Nj(e) {
	var t = za(e, jj), n = t.viewBox, r = t.parentViewBox, i = t.position, a = t.value, o = t.children, s = t.content, c = t.className, l = c === void 0 ? "" : c, u = t.textBreakAll, d = t.labelRef, f = wj(), p = xj(), m = n == null ? i === "center" ? p : f ?? p : Aj(n) ? n : Fr(n), h, g, _ = Mj(m);
	if (!m || jr(a) && jr(o) && !/*#__PURE__*/ (0, B.isValidElement)(s) && typeof s != "function") return null;
	var v = Aj(m) && (i === "insideStart" || i === "insideEnd" || i === "end");
	if (Aj(m)) v || (g = kj(m, t.offset, t.position));
	else if (_) {
		var y = Vr({
			viewBox: _,
			position: i,
			offset: t.offset,
			parentViewBox: Aj(r) ? void 0 : r,
			clamp: !0
		});
		g = mj(mj({
			x: y.x,
			y: y.y,
			textAnchor: y.horizontalAnchor,
			verticalAnchor: y.verticalAnchor
		}, y.width === void 0 ? {} : { width: y.width }), y.height === void 0 ? {} : { height: y.height });
	}
	var b = mj(mj(mj(mj({}, g?.x === void 0 ? {} : { x: g.x }), g?.y === void 0 ? {} : { y: g.y }), t), {}, { viewBox: m });
	if (/*#__PURE__*/ (0, B.isValidElement)(s)) {
		b.labelRef;
		var x = dj(b, lj);
		return /*#__PURE__*/ (0, B.cloneElement)(s, x);
	}
	if (typeof s == "function") {
		b.content;
		var S = dj(b, uj);
		if (h = /*#__PURE__*/ (0, B.createElement)(s, S), /*#__PURE__*/ (0, B.isValidElement)(h)) return h;
	} else h = Tj(t);
	var C = Zn(t);
	return v && Aj(m) ? Oj(t, i, h, C, m) : g == null ? null : /*#__PURE__*/ B.createElement(YO, { zIndex: t.zIndex }, /*#__PURE__*/ B.createElement(cj, vj({
		ref: d,
		className: z("recharts-label", l)
	}, C, g, {
		textAnchor: ZA(C.textAnchor) ? C.textAnchor : g.textAnchor,
		breakAll: u
	}), h));
}
Nj.displayName = "Label";
var Pj = (e, t, n) => {
	if (!e) return null;
	var r = {
		viewBox: t,
		labelRef: n
	};
	return e === !0 ? /*#__PURE__*/ B.createElement(Nj, vj({ key: "label-implicit" }, r)) : Tr(e) ? /*#__PURE__*/ B.createElement(Nj, vj({
		key: "label-implicit",
		value: e
	}, r)) : /*#__PURE__*/ (0, B.isValidElement)(e) ? e.type === Nj ? /*#__PURE__*/ (0, B.cloneElement)(e, mj({ key: "label-implicit" }, r)) : /*#__PURE__*/ B.createElement(Nj, vj({
		key: "label-implicit",
		content: e
	}, r)) : Ej(e) ? /*#__PURE__*/ B.createElement(Nj, vj({
		key: "label-implicit",
		content: e
	}, r)) : e && typeof e == "object" ? /*#__PURE__*/ B.createElement(Nj, vj({}, e, { key: "label-implicit" }, r)) : null;
};
function Fj(e) {
	var t = e.label, n = e.labelRef;
	return Pj(t, xj(), n) || null;
}
// node_modules/recharts/es6/component/LabelList.js
var Ij = ["valueAccessor"], Lj = [
	"dataKey",
	"clockWise",
	"id",
	"textBreakAll",
	"zIndex"
];
function Rj() {
	return Rj = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Rj.apply(null, arguments);
}
function zj(e, t) {
	if (e == null) return {};
	var n, r, i = Bj(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Bj(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Vj = (e) => {
	var t = Array.isArray(e.value) ? e.value[e.value.length - 1] : e.value;
	if (QA(t)) return t;
}, Hj = /*#__PURE__*/ (0, B.createContext)(void 0), Uj = Hj.Provider, Wj = /*#__PURE__*/ (0, B.createContext)(void 0), Gj = Wj.Provider;
function Kj() {
	return (0, B.useContext)(Hj);
}
function qj() {
	return (0, B.useContext)(Wj);
}
function Jj(e) {
	var t = e.valueAccessor, n = t === void 0 ? Vj : t, r = zj(e, Ij), i = r.dataKey;
	r.clockWise;
	var a = r.id, o = r.textBreakAll, s = r.zIndex, c = zj(r, Lj), l = Kj(), u = qj(), d = l || u;
	return !d || !d.length ? null : /*#__PURE__*/ B.createElement(YO, { zIndex: s ?? U_.label }, /*#__PURE__*/ B.createElement(cr, { className: "recharts-label-list" }, d.map((e, t) => {
		var s = jr(i) ? n(e, t) : X(e.payload, i), l = jr(a) ? {} : { id: `${a}-${t}` };
		return /*#__PURE__*/ B.createElement(Nj, Rj({ key: `label-${t}` }, Zn(e), c, l, {
			fill: r.fill ?? e.fill,
			parentViewBox: e.parentViewBox,
			value: s,
			textBreakAll: o,
			viewBox: e.viewBox,
			index: t,
			zIndex: 0
		}));
	})));
}
Jj.displayName = "LabelList";
function Yj(e) {
	var t = e.label;
	return t ? t === !0 ? /*#__PURE__*/ B.createElement(Jj, { key: "labelList-implicit" }) : /*#__PURE__*/ B.isValidElement(t) || Ej(t) ? /*#__PURE__*/ B.createElement(Jj, {
		key: "labelList-implicit",
		content: t
	}) : typeof t == "object" ? /*#__PURE__*/ B.createElement(Jj, Rj({ key: "labelList-implicit" }, t, { type: String(t.type) })) : null : null;
}
// node_modules/recharts/es6/shape/Dot.js
function Xj() {
	return Xj = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Xj.apply(null, arguments);
}
var Zj = (e) => {
	var t = e.cx, n = e.cy, r = e.r, i = e.className, a = z("recharts-dot", i);
	return H(t) && H(n) && H(r) ? /*#__PURE__*/ B.createElement("circle", Xj({}, Yn(e), ja(e), {
		className: a,
		cx: t,
		cy: n,
		r
	})) : null;
}, Qj = (e) => e.graphicalItems.polarItems, $j = K([
	Qj,
	Ew,
	K([uv, dv], Aw)
], Nw), eM = K([K([$j], Rw), t_], Vw), tM = K([
	eM,
	Ew,
	$j
], Uw);
K([
	eM,
	Ew,
	$j
], (e, t, n) => n.length > 0 ? e.flatMap((e) => n.flatMap((n) => ({
	value: X(e, t.dataKey ?? n.dataKey),
	errorDomain: []
}))).filter(Boolean) : t?.dataKey == null ? e.map((e) => ({
	value: e,
	errorDomain: []
})) : e.map((e) => ({
	value: X(e, t.dataKey),
	errorDomain: []
})));
var nM = () => void 0, rM = K([
	Ew,
	Z,
	eM,
	tM,
	I_,
	uv,
	K([
		Ew,
		sT,
		cT,
		nM,
		K([
			eM,
			Ew,
			$j,
			uT,
			uv,
			a_
		], pT),
		nM,
		Z,
		uv
	], MT)
], FT);
K([LT, K([
	Ew,
	rM,
	K([
		rM,
		Ow,
		LT
	], RT),
	uv
], BT)], xv);
// node_modules/recharts/es6/state/polarAxisSlice.js
var iM = tu({
	name: "polarAxis",
	initialState: {
		radiusAxis: {},
		angleAxis: {}
	},
	reducers: {
		addRadiusAxis(e, t) {
			e.radiusAxis[t.payload.id] = q(t.payload);
		},
		removeRadiusAxis(e, t) {
			delete e.radiusAxis[t.payload.id];
		},
		addAngleAxis(e, t) {
			e.angleAxis[t.payload.id] = q(t.payload);
		},
		removeAngleAxis(e, t) {
			delete e.angleAxis[t.payload.id];
		}
	}
}), aM = iM.actions;
aM.addRadiusAxis, aM.removeRadiusAxis, aM.addAngleAxis, aM.removeAngleAxis;
var oM = iM.reducer;
// node_modules/recharts/es6/util/getClassNameFromUnknown.js
function sM(e) {
	return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
// node_modules/recharts/es6/state/selectors/pieSelectors.js
function cM(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function lM(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? cM(Object(n), !0).forEach(function(t) {
			uM(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cM(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function uM(e, t, n) {
	return (t = dM(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function dM(e) {
	var t = fM(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function fM(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var pM = K([Qj, (e, t) => t], (e, t) => e.filter((e) => e.type === "pie").find((e) => e.id === t)), mM = [], hM = (e, t, n) => n?.length === 0 ? mM : n, gM = K([
	t_,
	pM,
	hM
], (e, t, n) => {
	var r = e.chartData;
	if (t != null) {
		var i = t?.data != null && t.data.length > 0 ? t.data : r;
		if (i && i.length || n == null || (i = n.map((e) => lM(lM({}, t.presentationProps), e.props))), i != null) return i;
	}
}), _M = K([
	gM,
	pM,
	hM
], (e, t, n) => {
	if (e != null && t != null) return e.map((e, r) => {
		var i, a = X(e, t.nameKey, t.name), o = n != null && (i = n[r]) != null && (i = i.props) != null && i.fill ? n[r].props.fill : typeof e == "object" && e && "fill" in e ? e.fill : t.fill;
		return {
			value: xd(a, t.dataKey),
			dataKey: t.dataKey,
			color: o,
			payload: e,
			type: t.legendType
		};
	});
}), vM = K([
	gM,
	pM,
	hM,
	Hd
], (e, t, n, r) => {
	if (t != null && e != null) return aP({
		offset: r,
		pieSettings: t,
		displayedData: e,
		cells: n
	});
}), yM = /* @__PURE__ */ je(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition");
	function m(e) {
		if (typeof e == "object" && e) {
			var m = e.$$typeof;
			switch (m) {
				case t: switch (e = e.type, e) {
					case r:
					case a:
					case i:
					case l:
					case u:
					case p: return e;
					default: switch (e &&= e.$$typeof, e) {
						case s:
						case c:
						case f:
						case d: return e;
						case o: return e;
						default: return m;
					}
				}
				case n: return m;
			}
		}
	}
	e.isFragment = function(e) {
		return m(e) === r;
	};
})), bM = (/* @__PURE__ */ je(((e, t) => {
	t.exports = yM();
})))(), xM = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", SM = null, CM = null, wM = (e) => {
	if (e === SM && Array.isArray(CM)) return CM;
	var t = [];
	return B.Children.forEach(e, (e) => {
		jr(e) || ((0, bM.isFragment)(e) ? t = t.concat(wM(e.props.children)) : t.push(e));
	}), CM = t, SM = e, t;
};
function TM(e, t) {
	var n = [], r = [];
	return r = Array.isArray(t) ? t.map((e) => xM(e)) : [xM(t)], wM(e).forEach((e) => {
		var t = _r(e, "type.displayName") || _r(e, "type.name");
		t && r.indexOf(t) !== -1 && n.push(e);
	}), n;
}
var EM = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0;
// node_modules/recharts/es6/util/ActiveShapeUtils.js
function DM(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function OM(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? DM(Object(n), !0).forEach(function(t) {
			kM(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : DM(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function kM(e, t, n) {
	return (t = AM(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function AM(e) {
	var t = jM(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function jM(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function MM(e, t) {
	return OM(OM({}, t), e);
}
function NM(e) {
	return /*#__PURE__*/ (0, B.isValidElement)(e) ? e.props : e;
}
function PM(e, t) {
	return /*#__PURE__*/ (0, B.cloneElement)(e, MM(NM(e), t));
}
function FM(e) {
	if ("index" in e) {
		var t = e.index;
		return typeof t == "number" || typeof t == "string" ? t : void 0;
	}
}
function IM(e) {
	return "isActive" in e && e.isActive === !0;
}
function LM(e) {
	var t = e.option, n = e.DefaultShape, r = e.shapeProps, i = e.activeClassName, a = i === void 0 ? "recharts-active-shape" : i, o = e.inActiveClassName, s = o === void 0 ? "recharts-shape" : o, c = FM(r), l = /*#__PURE__*/ (0, B.isValidElement)(t) ? PM(t, r) : t === n ? /*#__PURE__*/ B.createElement(n, r) : typeof t == "function" ? t(r, c) : typeof t == "object" ? /*#__PURE__*/ B.createElement(n, MM(t, r)) : /*#__PURE__*/ B.createElement(n, r);
	return IM(r) ? /*#__PURE__*/ B.createElement(cr, { className: a }, l) : /*#__PURE__*/ B.createElement(cr, { className: s }, l);
}
// node_modules/recharts/es6/context/tooltipContext.js
var RM = (e, t, n) => {
	var r = W();
	return (i, a) => (o) => {
		e?.(i, a, o), r(RE({
			activeIndex: String(a),
			activeDataKey: t,
			activeCoordinate: i.tooltipPosition,
			activeGraphicalItemId: n
		}));
	};
}, zM = (e) => {
	var t = W();
	return (n, r) => (i) => {
		e?.(n, r, i), t(zE());
	};
}, BM = (e, t, n) => {
	var r = W();
	return (i, a) => (o) => {
		e?.(i, a, o), r(VE({
			activeIndex: String(a),
			activeDataKey: t,
			activeCoordinate: i.tooltipPosition,
			activeGraphicalItemId: n
		}));
	};
};
// node_modules/recharts/es6/state/SetTooltipEntrySettings.js
function VM(e) {
	var t = e.tooltipEntrySettings, n = W(), r = Kd(), i = (0, B.useRef)(null);
	return (0, B.useLayoutEffect)(() => {
		r || (i.current === null ? n(PE(t)) : i.current !== t && n(FE({
			prev: i.current,
			next: t
		})), i.current = t);
	}, [
		t,
		n,
		r
	]), (0, B.useLayoutEffect)(() => () => {
		i.current &&= (n(IE(i.current)), null);
	}, [n]), null;
}
// node_modules/recharts/es6/state/SetLegendPayload.js
function HM(e) {
	var t = e.legendPayload, n = W(), r = Kd(), i = (0, B.useRef)(null);
	return (0, B.useLayoutEffect)(() => {
		r || (i.current === null ? n(Gf(t)) : i.current !== t && n(Kf({
			prev: i.current,
			next: t
		})), i.current = t);
	}, [
		n,
		r,
		t
	]), (0, B.useLayoutEffect)(() => () => {
		i.current &&= (n(qf(i.current)), null);
	}, [n]), null;
}
function UM(e) {
	var t = e.legendPayload, n = W(), r = G(Z), i = (0, B.useRef)(null);
	return (0, B.useLayoutEffect)(() => {
		(r === "centric" || r === "radial") && (i.current === null ? n(Gf(t)) : i.current !== t && n(Kf({
			prev: i.current,
			next: t
		})), i.current = t);
	}, [
		n,
		r,
		t
	]), (0, B.useLayoutEffect)(() => () => {
		i.current &&= (n(qf(i.current)), null);
	}, [n]), null;
}
// node_modules/recharts/es6/animation/matchBy.js
function WM(e, t) {
	return YM(e) || JM(e, t) || KM(e, t) || GM();
}
function GM() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function KM(e, t) {
	if (e) {
		if (typeof e == "string") return qM(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qM(e, t) : void 0;
	}
}
function qM(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function JM(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function YM(e) {
	if (Array.isArray(e)) return e;
}
var XM = "index", ZM = "append";
function QM(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], r = [];
	for (var i of n) r.push({
		status: "removed",
		prev: i
	});
	for (var a = 0; a < t.length; a++) {
		var o = e[a], s = t[a];
		o == null ? r.push({
			status: "added",
			next: s
		}) : r.push({
			status: "matched",
			prev: o,
			next: s
		});
	}
	return r;
}
function $M(e, t) {
	var n = e.length / t.length;
	return QM(t.map((t, r) => e[Math.floor(r * n)]), t);
}
function eN(e, t) {
	return QM(t.map((t, n) => e[n]), t);
}
function tN(e, t) {
	for (var n = /* @__PURE__ */ new Map(), r = 0; r < e.length; r++) {
		var i = e[r];
		if (i != null) {
			var a = t(i, r);
			a != null && !n.has(a) && n.set(a, i);
		}
	}
	return n;
}
function nN(e, t, n) {
	var r = tN(e, n), i = /* @__PURE__ */ new Set(), a = t.map((e, t) => {
		var a = n(e, t);
		if (a != null) {
			var o = r.get(a);
			if (o !== void 0) return i.add(a), o;
		}
	}), o = [];
	for (var s of r) {
		var c = WM(s, 2), l = c[0], u = c[1];
		i.has(l) || o.push(u);
	}
	return QM(a, t, o);
}
function rN(e, t, n) {
	return t == null ? null : e == null ? t.map((e) => ({
		status: "added",
		next: e
	})) : n === "index" ? $M(e, t) : n === "append" ? eN(e, t) : nN(e, t, n);
}
// node_modules/recharts/es6/animation/useAnimationStartSnapshot.js
function iN(e, t) {
	var n = (0, B.useRef)(e), r = (0, B.useRef)(t.current), i = (0, B.useRef)(!0);
	n.current !== e && (n.current = e, r.current = t.current, i.current = !1);
	var a = (0, B.useCallback)(function(e, n) {
		var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
		n === 0 ? i.current = !0 : (n === 1 && (r.current = e), n > 0 && i.current && a && (t.current = e));
	}, [t]);
	return {
		startValue: r.current,
		syncStepValue: a
	};
}
// node_modules/recharts/es6/animation/AnimatedItems.js
function aN(e, t) {
	return uN(e) || lN(e, t) || sN(e, t) || oN();
}
function oN() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function sN(e, t) {
	if (e) {
		if (typeof e == "string") return cN(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? cN(e, t) : void 0;
	}
}
function cN(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function lN(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function uN(e) {
	if (Array.isArray(e)) return e;
}
function dN(e, t) {
	var n = aN((0, B.useState)(!1), 2), r = n[0], i = n[1];
	return {
		isAnimating: r,
		handleAnimationStart: (0, B.useCallback)(() => {
			typeof e == "function" && e(), i(!0);
		}, [e]),
		handleAnimationEnd: (0, B.useCallback)(() => {
			typeof t == "function" && t(), i(!1);
		}, [t])
	};
}
function fN(e) {
	var t = e.animationInput, n = e.animationIdPrefix, r = e.items, i = e.previousItemsRef, a = e.isAnimationActive, o = e.animationBegin, s = e.animationDuration, c = e.animationEasing, l = e.onAnimationStart, u = e.onAnimationEnd, d = e.animationInterpolateFn, f = e.animationMatchBy, p = e.shouldUpdatePreviousRef, m = e.children, h = e.layout, g = Vh(t, n), _ = iN(g, i), v = _.startValue ?? null, y = rN(v, r, f ?? XM);
	return /*#__PURE__*/ B.createElement(Bh, {
		animationId: g,
		begin: o,
		duration: s,
		isActive: a,
		easing: c,
		onAnimationEnd: u,
		onAnimationStart: l,
		key: g
	}, (e) => {
		var t = v == null, n = r == null ? r : d(y, e, h), i = p ? p(e) : e > 0;
		return _.syncStepValue(n, e, i), n == null ? null : m(n, e, t);
	});
}
function pN(e, t) {
	return vN(e) || _N(e, t) || hN(e, t) || mN();
}
function mN() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function hN(e, t) {
	if (e) {
		if (typeof e == "string") return gN(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gN(e, t) : void 0;
	}
}
function gN(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function _N(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function vN(e) {
	if (Array.isArray(e)) return e;
}
var yN = B.useId ?? (() => pN(B.useState(() => Dr("uid-")), 1)[0]);
// node_modules/recharts/es6/util/useUniqueId.js
function bN(e, t) {
	var n = yN();
	return t || (e ? `${e}-${n}` : n);
}
// node_modules/recharts/es6/context/RegisterGraphicalItemId.js
var xN = /*#__PURE__*/ (0, B.createContext)(void 0), SN = (e) => {
	var t = e.id, n = e.type, r = e.children, i = bN(`recharts-${n}`, t);
	return /*#__PURE__*/ B.createElement(xN.Provider, { value: i }, r(i));
}, CN = tu({
	name: "graphicalItems",
	initialState: {
		cartesianItems: [],
		polarItems: []
	},
	reducers: {
		addCartesianGraphicalItem: {
			reducer(e, t) {
				e.cartesianItems.push(q(t.payload));
			},
			prepare: J()
		},
		replaceCartesianGraphicalItem: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next, a = Dl(e).cartesianItems.indexOf(q(r));
				a > -1 && (e.cartesianItems[a] = q(i));
			},
			prepare: J()
		},
		removeCartesianGraphicalItem: {
			reducer(e, t) {
				var n = Dl(e).cartesianItems.indexOf(q(t.payload));
				n > -1 && e.cartesianItems.splice(n, 1);
			},
			prepare: J()
		},
		addPolarGraphicalItem: {
			reducer(e, t) {
				e.polarItems.push(q(t.payload));
			},
			prepare: J()
		},
		removePolarGraphicalItem: {
			reducer(e, t) {
				var n = Dl(e).polarItems.indexOf(q(t.payload));
				n > -1 && e.polarItems.splice(n, 1);
			},
			prepare: J()
		},
		replacePolarGraphicalItem: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next, a = Dl(e).polarItems.indexOf(q(r));
				a > -1 && (e.polarItems[a] = q(i));
			},
			prepare: J()
		}
	}
}), wN = CN.actions, TN = wN.addCartesianGraphicalItem, EN = wN.replaceCartesianGraphicalItem, DN = wN.removeCartesianGraphicalItem, ON = wN.addPolarGraphicalItem, kN = wN.removePolarGraphicalItem, AN = wN.replacePolarGraphicalItem, jN = CN.reducer, MN = /*#__PURE__*/ (0, B.memo)((e) => {
	var t = W(), n = (0, B.useRef)(null);
	return (0, B.useLayoutEffect)(() => {
		n.current === null ? t(TN(e)) : n.current !== e && t(EN({
			prev: n.current,
			next: e
		})), n.current = e;
	}, [t, e]), (0, B.useLayoutEffect)(() => () => {
		n.current &&= (t(DN(n.current)), null);
	}, [t]), null;
}), NN = /*#__PURE__*/ (0, B.memo)((e) => {
	var t = W(), n = (0, B.useRef)(null);
	return (0, B.useLayoutEffect)(() => {
		n.current === null ? t(ON(e)) : n.current !== e && t(AN({
			prev: n.current,
			next: e
		})), n.current = e;
	}, [t, e]), (0, B.useLayoutEffect)(() => () => {
		n.current &&= (t(kN(n.current)), null);
	}, [t]), null;
}), PN = ["key"], FN = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], IN = ["id"], LN = ["id"];
function RN() {
	return RN = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, RN.apply(null, arguments);
}
function zN(e, t) {
	if (e == null) return {};
	var n, r, i = BN(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function BN(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function VN(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function HN(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? VN(Object(n), !0).forEach(function(t) {
			UN(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : VN(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function UN(e, t, n) {
	return (t = WN(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function WN(e) {
	var t = GN(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function GN(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var KN = Yg;
function qN(e) {
	var t = (0, B.useMemo)(() => TM(e.children, Yk), [e.children]), n = G((n) => _M(n, e.id, t));
	return n == null ? null : /*#__PURE__*/ B.createElement(UM, { legendPayload: n });
}
function JN(e) {
	if (e != null && typeof e != "boolean" && typeof e != "function") {
		if (/*#__PURE__*/ B.isValidElement(e)) {
			var t = e.props?.fill;
			return typeof t == "string" ? t : void 0;
		}
		var n = e.fill;
		return typeof n == "string" ? n : void 0;
	}
}
var YN = /*#__PURE__*/ B.memo((e) => {
	var t = e.dataKey, n = e.nameKey, r = e.sectors, i = e.stroke, a = e.strokeWidth, o = e.fill, s = e.name, c = e.hide, l = e.tooltipType, u = e.formatter, d = e.id, f = e.activeShape, p = JN(f), m = {
		dataDefinedOnItem: r.map((e) => {
			var t = e.tooltipPayload;
			return p == null || t == null ? t : t.map((e) => HN(HN({}, e), {}, {
				color: p,
				fill: p
			}));
		}),
		getPosition: (e) => r[Number(e)]?.tooltipPosition,
		settings: {
			stroke: i,
			strokeWidth: a,
			fill: o,
			dataKey: t,
			nameKey: n,
			name: xd(s, t),
			hide: c,
			type: l,
			color: o,
			unit: "",
			formatter: u,
			graphicalItemId: d
		}
	};
	return /*#__PURE__*/ B.createElement(VM, { tooltipEntrySettings: m });
}), XN = (e, t) => e > t ? "start" : e < t ? "end" : "middle", ZN = (e, t, n) => Or(typeof t == "function" ? t(e) : t, n, n * .8), QN = (e, t, n) => {
	var r = t.top, i = t.left, a = t.width, o = t.height, s = Og(a, o);
	return {
		cx: i + Or(e.cx, a, a / 2),
		cy: r + Or(e.cy, o, o / 2),
		innerRadius: Or(e.innerRadius, s, 0),
		outerRadius: ZN(n, e.outerRadius, s),
		maxRadius: e.maxRadius || Math.sqrt(a * a + o * o) / 2
	};
}, $N = (e, t) => Sr(t - e) * Math.min(Math.abs(t - e), 360), eP = (e, t) => {
	if (/*#__PURE__*/ B.isValidElement(e)) return /*#__PURE__*/ B.cloneElement(e, t);
	if (typeof e == "function") return e(t);
	var n = z("recharts-pie-label-line", typeof e == "boolean" ? "" : e.className);
	t.key;
	var r = zN(t, PN);
	return /*#__PURE__*/ B.createElement(Ym, RN({}, r, {
		type: "linear",
		className: n
	}));
}, tP = (e, t, n) => {
	if (/*#__PURE__*/ B.isValidElement(e)) return /*#__PURE__*/ B.cloneElement(e, t);
	var r = n;
	if (typeof e == "function" && (r = e(t), /*#__PURE__*/ B.isValidElement(r))) return r;
	var i = z("recharts-pie-label-text", sM(e));
	return /*#__PURE__*/ B.createElement(cj, RN({}, t, {
		alignmentBaseline: "middle",
		className: i
	}), r);
};
function nP(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = n.label, a = n.labelLine, o = n.dataKey;
	if (!r || !i || !t) return null;
	var s = Yn(n), c = Xn(i), l = Xn(a), u = typeof i == "object" && "offsetRadius" in i && typeof i.offsetRadius == "number" && i.offsetRadius || 20, d = t.map((e, t) => {
		var n = (e.startAngle + e.endAngle) / 2, r = Dg(e.cx, e.cy, e.outerRadius + u, n), d = HN(HN(HN(HN({}, s), e), {}, { stroke: "none" }, c), {}, {
			index: t,
			textAnchor: XN(r.x, e.cx)
		}, r), f = HN(HN(HN(HN({}, s), e), {}, {
			fill: "none",
			stroke: e.fill
		}, l), {}, {
			index: t,
			points: [Dg(e.cx, e.cy, e.outerRadius, n), r],
			key: "line"
		});
		return /*#__PURE__*/ B.createElement(YO, {
			zIndex: U_.label,
			key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${t}`
		}, /*#__PURE__*/ B.createElement(cr, null, a && eP(a, f), tP(i, d, X(e, o))));
	});
	return /*#__PURE__*/ B.createElement(cr, { className: "recharts-pie-labels" }, d);
}
function rP(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = n.label;
	return typeof i == "object" && i && "position" in i ? /*#__PURE__*/ B.createElement(Yj, { label: i }) : /*#__PURE__*/ B.createElement(nP, {
		sectors: t,
		props: n,
		showLabels: r
	});
}
function iP(e) {
	var t = e.sectors, n = e.activeShape, r = e.inactiveShape, i = e.allOtherPieProps, a = e.shape, o = e.id, s = e.animationElapsedTime, c = e.isAnimating, l = e.isEntrance, u = G(GD), d = G(qD), f = G(JD), p = i.onMouseEnter, m = i.onClick, h = i.onMouseLeave, g = zN(i, FN), _ = RM(p, i.dataKey, o), v = zM(h), y = BM(m, i.dataKey, o);
	return t == null || t.length === 0 ? null : /*#__PURE__*/ B.createElement(B.Fragment, null, t.map((e, p) => {
		if (e?.startAngle === 0 && e?.endAngle === 0 && t.length !== 1) return null;
		var m = f == null || f === o, h = String(p) === u && (d == null || i.dataKey === d) && m, b = n && h ? n : u ? r : null, x = HN(HN({}, e), {}, {
			stroke: e.stroke,
			tabIndex: -1,
			index: p,
			isActive: h,
			animationElapsedTime: s,
			isAnimating: c,
			isEntrance: l,
			[Ad]: p,
			[jd]: o
		});
		return /*#__PURE__*/ B.createElement(cr, RN({
			key: `sector-${e?.startAngle}-${e?.endAngle}-${e.midAngle}-${p}`,
			tabIndex: -1,
			className: "recharts-pie-sector"
		}, Na(g, e, p), {
			onMouseEnter: _(e, p),
			onMouseLeave: v(e, p),
			onClick: y(e, p)
		}), /*#__PURE__*/ B.createElement(LM, {
			option: b ?? a,
			DefaultShape: KN,
			shapeProps: x
		}));
	}));
}
function aP(e) {
	var t = e.pieSettings, n = e.displayedData, r = e.cells, i = e.offset, a = t.cornerRadius, o = t.startAngle, s = t.endAngle, c = t.dataKey, l = t.nameKey, u = t.tooltipType, d = Math.abs(t.minAngle), f = $N(o, s), p = Math.abs(f), m = n.length <= 1 ? 0 : t.paddingAngle ?? 0, h = n.filter((e) => X(e, c, 0) !== 0).length, g = (p >= 360 ? h : h - 1) * m, _ = n.reduce((e, t) => {
		var n = X(t, c, 0);
		return e + (H(n) ? n : 0);
	}, 0), v = d > 0 && _ > 0 && n.some((e) => {
		var t = X(e, c, 0), n = (H(t) ? t : 0) / _;
		return t !== 0 && n * p < d;
	}) ? d : 0, y = p - h * v - g, b;
	if (_ > 0) {
		var x;
		b = n.map((e, n) => {
			var s = X(e, c, 0), d = X(e, l, n), p = QN(t, i, e), h = (H(s) ? s : 0) / _, g, b = HN(HN({}, e), r && r[n] && r[n].props), S = b != null && "fill" in b && typeof b.fill == "string" ? b.fill : t.fill;
			g = n ? x.endAngle + Sr(f) * m * (s === 0 ? 0 : 1) : o;
			var C = g + Sr(f) * ((s === 0 ? 0 : v) + h * y), w = (g + C) / 2, T = (p.innerRadius + p.outerRadius) / 2, E = [{
				name: d,
				value: s,
				payload: b,
				dataKey: c,
				type: u,
				color: S,
				fill: S,
				graphicalItemId: t.id
			}], D = Dg(p.cx, p.cy, T, w);
			return x = HN(HN(HN(HN({}, t.presentationProps), {}, {
				percent: h,
				cornerRadius: typeof a == "string" ? parseFloat(a) : a,
				name: d,
				tooltipPayload: E,
				midAngle: w,
				middleRadius: T,
				tooltipPosition: D
			}, b), p), {}, {
				value: s,
				dataKey: c,
				startAngle: g,
				endAngle: C,
				payload: b,
				paddingAngle: s === 0 ? 0 : Sr(f) * m
			}), x;
		});
	}
	return b;
}
function oP(e) {
	var t = e.showLabels, n = e.sectors, r = e.children, i = (0, B.useMemo)(() => !t || !n ? [] : n.map((e) => ({
		value: e.value,
		payload: e.payload,
		clockWise: !1,
		parentViewBox: void 0,
		viewBox: {
			cx: e.cx,
			cy: e.cy,
			innerRadius: e.innerRadius,
			outerRadius: e.outerRadius,
			startAngle: e.startAngle,
			endAngle: e.endAngle,
			clockWise: !1
		},
		fill: e.fill
	})), [n, t]);
	return /*#__PURE__*/ B.createElement(Gj, { value: t ? i : void 0 }, r);
}
var sP = (e, t) => {
	if (e == null) return [];
	var n = [], r = e.find((e) => e.status !== "removed"), i = r ? r.next.startAngle : 0;
	return e.forEach((e, r) => {
		if (e.status !== "removed") {
			var a = r > 0 ? _r(e.next, "paddingAngle", 0) : 0;
			if (e.status === "matched") {
				var o = U(e.prev.endAngle - e.prev.startAngle, e.next.endAngle - e.next.startAngle, t), s = HN(HN({}, e.next), {}, {
					startAngle: i + a,
					endAngle: i + o + a
				});
				n.push(s), i = s.endAngle;
			} else {
				var c = U(0, e.next.endAngle - e.next.startAngle, t), l = HN(HN({}, e.next), {}, {
					startAngle: i + a,
					endAngle: i + c + a
				});
				n.push(l), i = l.endAngle;
			}
		}
	}), n;
};
function cP(e) {
	var t = e.props, n = e.previousSectorsRef, r = e.id, i = t.sectors, a = t.activeShape, o = t.inactiveShape, s = t.animationInterpolateFn, c = dN(t.onAnimationStart, t.onAnimationEnd), l = c.isAnimating, u = c.handleAnimationStart, d = c.handleAnimationEnd, f = Rf();
	if (f == null) return null;
	var p = i[0];
	return /*#__PURE__*/ B.createElement(oP, {
		showLabels: !l,
		sectors: i
	}, /*#__PURE__*/ B.createElement(fN, {
		animationInput: t,
		animationIdPrefix: "recharts-pie-",
		items: i,
		previousItemsRef: n,
		isAnimationActive: t.isAnimationActive,
		animationBegin: t.animationBegin,
		animationDuration: t.animationDuration,
		animationEasing: t.animationEasing,
		onAnimationStart: u,
		onAnimationEnd: d,
		animationInterpolateFn: s,
		animationMatchBy: t.animationMatchBy,
		layout: f
	}, (e, n, i) => /*#__PURE__*/ B.createElement(cr, null, /*#__PURE__*/ B.createElement(iP, {
		sectors: e,
		activeShape: a,
		inactiveShape: o,
		allOtherPieProps: t,
		shape: t.shape,
		id: r,
		animationElapsedTime: n,
		isAnimating: l || n < 1,
		isEntrance: i
	}))), /*#__PURE__*/ B.createElement(rP, {
		showLabels: !l,
		sectors: i,
		props: t
	}), /*#__PURE__*/ B.createElement(Cj, {
		cx: p?.cx ?? 0,
		cy: p?.cy ?? 0,
		innerRadius: p?.innerRadius ?? 0,
		outerRadius: p?.outerRadius ?? 0,
		startAngle: t.startAngle,
		endAngle: t.endAngle,
		clockWise: !1
	}, t.children));
}
var lP = {
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	animationInterpolateFn: sP,
	animationMatchBy: ZM,
	cx: "50%",
	cy: "50%",
	dataKey: "value",
	endAngle: 360,
	fill: "#808080",
	hide: !1,
	innerRadius: 0,
	isAnimationActive: "auto",
	label: !1,
	labelLine: !0,
	legendType: "rect",
	minAngle: 0,
	nameKey: "name",
	outerRadius: "80%",
	paddingAngle: 0,
	rootTabIndex: 0,
	shape: KN,
	startAngle: 0,
	stroke: "#fff",
	zIndex: U_.area
};
function uP(e) {
	var t = e.id, n = zN(e, IN), r = e.hide, i = e.className, a = e.rootTabIndex, o = (0, B.useMemo)(() => TM(e.children, Yk), [e.children]), s = G((e) => vM(e, t, o)), c = (0, B.useRef)(null), l = z("recharts-pie", i);
	return r || s == null ? (c.current = null, /*#__PURE__*/ B.createElement(cr, {
		tabIndex: a,
		className: l
	})) : /*#__PURE__*/ B.createElement(YO, { zIndex: e.zIndex }, /*#__PURE__*/ B.createElement(YN, {
		dataKey: e.dataKey,
		nameKey: e.nameKey,
		sectors: s,
		stroke: e.stroke,
		strokeWidth: e.strokeWidth,
		fill: e.fill,
		name: e.name,
		hide: e.hide,
		tooltipType: e.tooltipType,
		formatter: e.formatter,
		id: t,
		activeShape: e.activeShape
	}), /*#__PURE__*/ B.createElement(cr, {
		tabIndex: a,
		className: l
	}, /*#__PURE__*/ B.createElement(cP, {
		props: HN(HN({}, n), {}, { sectors: s }),
		previousSectorsRef: c,
		id: t
	})));
}
function dP(e) {
	var t = za(e, lP), n = t.id, r = zN(t, LN), i = Yn(r);
	return /*#__PURE__*/ B.createElement(SN, {
		id: n,
		type: "pie"
	}, (e) => /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(NN, {
		type: "pie",
		id: e,
		data: r.data,
		dataKey: r.dataKey,
		hide: r.hide,
		angleAxisId: 0,
		radiusAxisId: 0,
		name: r.name,
		nameKey: r.nameKey,
		tooltipType: r.tooltipType,
		legendType: r.legendType,
		fill: r.fill,
		cx: r.cx,
		cy: r.cy,
		startAngle: r.startAngle,
		endAngle: r.endAngle,
		paddingAngle: r.paddingAngle,
		minAngle: r.minAngle,
		innerRadius: r.innerRadius,
		outerRadius: r.outerRadius,
		cornerRadius: r.cornerRadius,
		presentationProps: i,
		maxRadius: t.maxRadius
	}), /*#__PURE__*/ B.createElement(qN, RN({}, r, { id: e })), /*#__PURE__*/ B.createElement(uP, RN({}, r, { id: e }))));
}
var fP = dP;
fP.displayName = "Pie";
// node_modules/recharts/es6/component/Dots.js
var pP = ["points"];
function mP(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function hP(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? mP(Object(n), !0).forEach(function(t) {
			gP(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mP(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function gP(e, t, n) {
	return (t = _P(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function _P(e) {
	var t = vP(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function vP(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function yP() {
	return yP = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, yP.apply(null, arguments);
}
function bP(e, t) {
	if (e == null) return {};
	var n, r, i = xP(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function xP(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function SP(e) {
	var t = e.option, n = e.dotProps, r = e.className;
	if (/*#__PURE__*/ (0, B.isValidElement)(t)) return /*#__PURE__*/ (0, B.cloneElement)(t, n);
	if (typeof t == "function") return t(n);
	var i = z(r, typeof t == "boolean" ? "" : t.className), a = n ?? {};
	a.points;
	var o = bP(a, pP);
	return /*#__PURE__*/ B.createElement(Zj, yP({}, o, { className: i }));
}
function CP(e, t) {
	return e == null ? !1 : t ? !0 : e.length === 1;
}
function wP(e) {
	var t = e.points, n = e.dot, r = e.className, i = e.dotClassName, a = e.dataKey, o = e.baseProps, s = e.needClip, c = e.clipPathId, l = e.zIndex, u = l === void 0 ? U_.scatter : l;
	if (!CP(t, n)) return null;
	var d = EM(n), f = Qn(n), p = t.map((e, r) => {
		var s = hP(hP(hP({ r: 3 }, o), f), {}, {
			index: r,
			cx: e.x ?? void 0,
			cy: e.y ?? void 0,
			dataKey: a,
			value: e.value,
			payload: e.payload,
			points: t
		});
		return /*#__PURE__*/ B.createElement(SP, {
			key: `dot-${r}`,
			option: n,
			dotProps: s,
			className: i
		});
	}), m = {};
	return s && c != null && (m.clipPath = `url(#clipPath-${d ? "" : "dots-"}${c})`), /*#__PURE__*/ B.createElement(YO, { zIndex: u }, /*#__PURE__*/ B.createElement(cr, yP({ className: r }, m), p));
}
// node_modules/recharts/es6/state/cartesianAxisSlice.js
function TP(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function EP(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? TP(Object(n), !0).forEach(function(t) {
			DP(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : TP(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function DP(e, t, n) {
	return (t = OP(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function OP(e) {
	var t = kP(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function kP(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var AP = tu({
	name: "cartesianAxis",
	initialState: {
		xAxis: {},
		yAxis: {},
		zAxis: {}
	},
	reducers: {
		addXAxis: {
			reducer(e, t) {
				e.xAxis[t.payload.id] = q(t.payload);
			},
			prepare: J()
		},
		replaceXAxis: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next;
				e.xAxis[r.id] !== void 0 && (r.id !== i.id && delete e.xAxis[r.id], e.xAxis[i.id] = q(i));
			},
			prepare: J()
		},
		removeXAxis: {
			reducer(e, t) {
				delete e.xAxis[t.payload.id];
			},
			prepare: J()
		},
		addYAxis: {
			reducer(e, t) {
				e.yAxis[t.payload.id] = q(t.payload);
			},
			prepare: J()
		},
		replaceYAxis: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next;
				e.yAxis[r.id] !== void 0 && (r.id !== i.id && delete e.yAxis[r.id], e.yAxis[i.id] = q(i));
			},
			prepare: J()
		},
		removeYAxis: {
			reducer(e, t) {
				delete e.yAxis[t.payload.id];
			},
			prepare: J()
		},
		addZAxis: {
			reducer(e, t) {
				e.zAxis[t.payload.id] = q(t.payload);
			},
			prepare: J()
		},
		replaceZAxis: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next;
				e.zAxis[r.id] !== void 0 && (r.id !== i.id && delete e.zAxis[r.id], e.zAxis[i.id] = q(i));
			},
			prepare: J()
		},
		removeZAxis: {
			reducer(e, t) {
				delete e.zAxis[t.payload.id];
			},
			prepare: J()
		},
		updateYAxisWidth(e, t) {
			var n = t.payload, r = n.id, i = n.width, a = e.yAxis[r];
			if (a) {
				var o = a.widthHistory || [];
				if (o.length === 3 && o[0] === o[2] && i === o[1] && i !== a.width && Math.abs(i - (o[0] ?? 0)) <= 1) return;
				var s = [...o, i].slice(-3);
				e.yAxis[r] = EP(EP({}, a), {}, {
					width: i,
					widthHistory: s
				});
			}
		},
		updateXAxisHeight(e, t) {
			var n = t.payload, r = n.id, i = n.height, a = e.xAxis[r];
			if (a) {
				var o = a.heightHistory || [];
				if (o.length === 3 && o[0] === o[2] && i === o[1] && i !== a.height && Math.abs(i - (o[0] ?? 0)) <= 1) return;
				var s = [...o, i].slice(-3);
				e.xAxis[r] = EP(EP({}, a), {}, {
					height: i,
					heightHistory: s
				});
			}
		}
	}
}), jP = AP.actions, MP = jP.addXAxis, NP = jP.replaceXAxis, PP = jP.removeXAxis, FP = jP.addYAxis, IP = jP.replaceYAxis, LP = jP.removeYAxis;
jP.addZAxis, jP.replaceZAxis, jP.removeZAxis;
var RP = jP.updateYAxisWidth, zP = jP.updateXAxisHeight, BP = AP.reducer, VP = K([
	K([Hd], (e) => ({
		top: e.top,
		bottom: e.bottom,
		left: e.left,
		right: e.right
	})),
	wd,
	Td
], (e, t, n) => {
	if (e && t != null && n != null) return {
		x: e.left,
		y: e.top,
		width: Math.max(0, t - e.left - e.right),
		height: Math.max(0, n - e.top - e.bottom)
	};
}), HP = () => G(VP), UP = () => G(QD);
// node_modules/recharts/es6/component/ActivePoints.js
function WP(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function GP(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? WP(Object(n), !0).forEach(function(t) {
			KP(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : WP(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function KP(e, t, n) {
	return (t = qP(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function qP(e) {
	var t = JP(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function JP(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var YP = (e) => {
	var t = e.point, n = e.childIndex, r = e.mainColor, i = e.activeDot, a = e.dataKey, o = e.clipPath;
	if (i === !1 || t.x == null || t.y == null) return null;
	var s = GP(GP(GP({}, {
		index: n,
		dataKey: a,
		cx: t.x,
		cy: t.y,
		r: 4,
		fill: r ?? "none",
		strokeWidth: 2,
		stroke: "#fff",
		payload: t.payload,
		value: t.value
	}), Xn(i)), ja(i)), c = /*#__PURE__*/ (0, B.isValidElement)(i) ? /*#__PURE__*/ (0, B.cloneElement)(i, s) : typeof i == "function" ? i(s) : /*#__PURE__*/ B.createElement(Zj, s);
	return /*#__PURE__*/ B.createElement(cr, {
		className: "recharts-active-dot",
		clipPath: o
	}, c);
};
function XP(e) {
	var t = e.points, n = e.mainColor, r = e.activeDot, i = e.itemDataKey, a = e.clipPath, o = e.zIndex, s = o === void 0 ? U_.activeDot : o, c = G(GD), l = UP();
	if (t == null || l == null) return null;
	var u = t.find((e) => l.includes(e.payload));
	return jr(u) ? null : /*#__PURE__*/ B.createElement(YO, { zIndex: s }, /*#__PURE__*/ B.createElement(YP, {
		point: u,
		childIndex: Number(c),
		mainColor: n,
		dataKey: i,
		activeDot: r,
		clipPath: a
	}));
}
// node_modules/recharts/es6/state/selectors/combiners/combineBarSizeList.js
function ZP(e, t) {
	return nF(e) || tF(e, t) || $P(e, t) || QP();
}
function QP() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $P(e, t) {
	if (e) {
		if (typeof e == "string") return eF(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? eF(e, t) : void 0;
	}
}
function eF(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function tF(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function nF(e) {
	if (Array.isArray(e)) return e;
}
var rF = (e, t, n) => {
	var r = n ?? e;
	if (!jr(r)) return Or(r, t, 0);
}, iF = (e, t, n) => {
	var r = {}, i = e.filter(mv), a = e.filter((e) => e.stackId == null), o = i.reduce((e, t) => {
		var n = e[t.stackId];
		return n ??= [], n.push(t), e[t.stackId] = n, e;
	}, r), s = Object.entries(o).map((e) => {
		var r = ZP(e, 2), i = r[0], a = r[1];
		return {
			stackId: i,
			dataKeys: a.map((e) => e.dataKey),
			barSize: rF(t, n, a[0]?.barSize)
		};
	}), c = a.map((e) => ({
		stackId: void 0,
		dataKeys: [e.dataKey].filter((e) => e != null),
		barSize: rF(t, n, e.barSize)
	}));
	return [...s, ...c];
};
// node_modules/recharts/es6/state/selectors/combiners/combineAllBarPositions.js
function aF(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function oF(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? aF(Object(n), !0).forEach(function(t) {
			sF(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : aF(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function sF(e, t, n) {
	return (t = cF(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function cF(e) {
	var t = lF(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function lF(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function uF(e, t, n, r, i) {
	var a = r.length;
	if (!(a < 1)) {
		var o = Or(e, n, 0, !0), s, c = [];
		if (Y(r[0]?.barSize)) {
			var l = !1, u = n / a, d = r.reduce((e, t) => e + (t.barSize || 0), 0);
			d += (a - 1) * o, d >= n && (d -= (a - 1) * o, o = 0), d >= n && u > 0 && (l = !0, u *= .9, d = a * u);
			var f = {
				offset: Math.round((n - d) / 2) - o,
				size: 0
			};
			s = r.reduce((e, t) => {
				var n = {
					stackId: t.stackId,
					dataKeys: t.dataKeys,
					position: {
						offset: f.offset + f.size + o,
						size: l ? u : t.barSize ?? 0
					}
				}, r = [...e, n];
				return f = n.position, r;
			}, c);
		} else {
			var p = Or(t, n, 0, !0);
			n - 2 * p - (a - 1) * o <= 0 && (o = 0);
			var m = (n - 2 * p - (a - 1) * o) / a;
			m > 1 && (m = Math.round(m));
			var h = Y(i) ? Math.min(m, i) : m;
			s = r.reduce((e, t, n) => [...e, {
				stackId: t.stackId,
				dataKeys: t.dataKeys,
				position: {
					offset: p + a * (m - h) / 2 + (h + o) * n,
					size: h
				}
			}], c);
		}
		return s;
	}
}
var dF = (e, t, n, r, i, a, o) => {
	var s = jr(o) ? t : o, c = uF(n, r, i === a ? a : i, e, s);
	return i !== a && c != null && (c = c.map((e) => oF(oF({}, e), {}, { position: oF(oF({}, e.position), {}, { offset: e.position.offset - i / 2 }) }))), c;
}, fF = (e, t) => {
	var n = fv(t);
	if (e && n != null && t != null) {
		var r = t.stackId;
		if (r != null) {
			var i = e[r];
			if (i) {
				var a = i.stackedData;
				if (a) return a.find((e) => e.key === n);
			}
		}
	}
}, pF = (e, t) => {
	if (e != null && t != null) {
		var n = e.find((e) => e.stackId === t.stackId && t.dataKey != null && e.dataKeys.includes(t.dataKey));
		if (n != null) return n.position;
	}
};
// node_modules/recharts/es6/zIndex/getZIndexFromUnknown.js
function mF(e, t) {
	return e && typeof e == "object" && "zIndex" in e && typeof e.zIndex == "number" && Y(e.zIndex) ? e.zIndex : t;
}
// node_modules/recharts/es6/context/chartDataContext.js
var hF = (e) => {
	var t = e.chartData, n = W(), r = Kd();
	return (0, B.useEffect)(() => r ? () => {} : (n(vk(t)), () => {
		n(vk(void 0));
	}), [
		t,
		n,
		r
	]), null;
}, gF = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	padding: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	}
}, _F = tu({
	name: "brush",
	initialState: gF,
	reducers: { setBrushSettings(e, t) {
		return t.payload == null ? gF : t.payload;
	} }
});
_F.actions.setBrushSettings;
var vF = _F.reducer, yF = (e, t) => {
	var n = e.x, r = e.y, i = t.x, a = t.y;
	return {
		x: Math.min(n, i),
		y: Math.min(r, a),
		width: Math.abs(i - n),
		height: Math.abs(a - r)
	};
}, bF = (e) => {
	var t = e.x1, n = e.y1, r = e.x2, i = e.y2;
	return yF({
		x: t,
		y: n
	}, {
		x: r,
		y: i
	});
};
function xF(e) {
	return (e % 180 + 180) % 180;
}
var SF = function(e) {
	var t = e.width, n = e.height, r = xF(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0) * Math.PI / 180, i = Math.atan(n / t), a = r > i && r < Math.PI - i ? n / Math.sin(r) : t / Math.cos(r);
	return Math.abs(a);
}, CF = tu({
	name: "referenceElements",
	initialState: {
		dots: [],
		areas: [],
		lines: []
	},
	reducers: {
		addDot: (e, t) => {
			e.dots.push(t.payload);
		},
		removeDot: (e, t) => {
			var n = Dl(e).dots.findIndex((e) => e === t.payload);
			n !== -1 && e.dots.splice(n, 1);
		},
		addArea: (e, t) => {
			e.areas.push(t.payload);
		},
		removeArea: (e, t) => {
			var n = Dl(e).areas.findIndex((e) => e === t.payload);
			n !== -1 && e.areas.splice(n, 1);
		},
		addLine: (e, t) => {
			e.lines.push(q(t.payload));
		},
		removeLine: (e, t) => {
			var n = Dl(e).lines.findIndex((e) => e === t.payload);
			n !== -1 && e.lines.splice(n, 1);
		}
	}
}), wF = CF.actions;
wF.addDot, wF.removeDot, wF.addArea, wF.removeArea;
var TF = wF.addLine, EF = wF.removeLine, DF = CF.reducer;
// node_modules/recharts/es6/container/ClipPathProvider.js
function OF(e, t) {
	return NF(e) || MF(e, t) || AF(e, t) || kF();
}
function kF() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function AF(e, t) {
	if (e) {
		if (typeof e == "string") return jF(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jF(e, t) : void 0;
	}
}
function jF(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function MF(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function NF(e) {
	if (Array.isArray(e)) return e;
}
var PF = /*#__PURE__*/ (0, B.createContext)(void 0), FF = (e) => {
	var t = e.children, n = OF((0, B.useState)(`${Dr("recharts")}-clip`), 1)[0], r = HP();
	if (r == null) return null;
	var i = r.x, a = r.y, o = r.width, s = r.height;
	return /*#__PURE__*/ B.createElement(PF.Provider, { value: n }, /*#__PURE__*/ B.createElement("defs", null, /*#__PURE__*/ B.createElement("clipPath", { id: n }, /*#__PURE__*/ B.createElement("rect", {
		x: i,
		y: a,
		height: s,
		width: o
	}))), t);
}, IF = () => (0, B.useContext)(PF), LF = class {
	constructor(e) {
		var t = e.x, n = e.y;
		this.xAxisScale = t, this.yAxisScale = n;
	}
	map(e, t) {
		var n = t.position;
		return {
			x: this.xAxisScale.map(e.x, { position: n }) ?? 0,
			y: this.yAxisScale.map(e.y, { position: n }) ?? 0
		};
	}
	mapWithFallback(e, t) {
		var n = t.position, r = t.fallback, i = r === "rangeMin" ? this.yAxisScale.rangeMin() : r === "rangeMax" ? this.yAxisScale.rangeMax() : 0, a = r === "rangeMin" ? this.xAxisScale.rangeMin() : r === "rangeMax" ? this.xAxisScale.rangeMax() : 0;
		return {
			x: this.xAxisScale.map(e.x, { position: n }) ?? a,
			y: this.yAxisScale.map(e.y, { position: n }) ?? i
		};
	}
	isInRange(e) {
		var t = e.x, n = e.y, r = t == null || this.xAxisScale.isInRange(t), i = n == null || this.yAxisScale.isInRange(n);
		return r && i;
	}
};
// node_modules/recharts/es6/cartesian/ReferenceLine.js
function RF(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function zF(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? RF(Object(n), !0).forEach(function(t) {
			BF(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : RF(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function BF(e, t, n) {
	return (t = VF(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function VF(e) {
	var t = HF(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function HF(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function UF() {
	return UF = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, UF.apply(null, arguments);
}
var WF = (e, t) => {
	var n;
	if (/*#__PURE__*/ B.isValidElement(e)) n = /*#__PURE__*/ B.cloneElement(e, t);
	else if (typeof e == "function") n = e(t);
	else {
		if (!Y(t.x1) || !Y(t.y1) || !Y(t.x2) || !Y(t.y2)) return null;
		n = /*#__PURE__*/ B.createElement("line", UF({}, t, { className: "recharts-reference-line-line" }));
	}
	return n;
}, GF = (e, t, n, r, i, a) => {
	var o = a.x, s = a.width, c = i.map(e, { position: n });
	if (!Y(c) || t === "discard" && !i.isInRange(c)) return null;
	var l = [{
		x: o + s,
		y: c
	}, {
		x: o,
		y: c
	}];
	return r === "left" ? l.reverse() : l;
}, KF = (e, t, n, r, i, a) => {
	var o = a.y, s = a.height, c = i.map(e, { position: n });
	if (!Y(c) || t === "discard" && !i.isInRange(c)) return null;
	var l = [{
		x: c,
		y: o + s
	}, {
		x: c,
		y: o
	}];
	return r === "top" ? l.reverse() : l;
}, qF = (e, t, n, r) => {
	var i = [r.mapWithFallback(e[0], {
		position: n,
		fallback: "rangeMin"
	}), r.mapWithFallback(e[1], {
		position: n,
		fallback: "rangeMax"
	})];
	return t === "discard" && i.some((e) => !r.isInRange(e)) ? null : i;
}, JF = (e, t, n, r, i, a, o) => {
	var s = o.x, c = o.y, l = o.segment, u = o.ifOverflow, d = Tr(s);
	return Tr(c) ? GF(c, u, r, a, t, n) : d ? KF(s, u, r, i, e, n) : l != null && l.length === 2 ? qF(l, u, r, new LF({
		x: e,
		y: t
	})) : null;
};
function YF(e) {
	var t = W();
	return (0, B.useEffect)(() => (t(TF(e)), () => {
		t(EF(e));
	})), null;
}
function XF(e) {
	var t = e.xAxisId, n = e.yAxisId, r = e.shape, i = e.className, a = e.ifOverflow, o = Kd(), s = IF(), c = G((e) => bw(e, t)), l = G((e) => Cw(e, n)), u = G((e) => eE(e, "xAxis", t, o)), d = G((e) => eE(e, "yAxis", n, o)), f = kf();
	if (!s || !f || c == null || l == null || u == null || d == null) return null;
	var p = JF(u, d, f, e.position, c.orientation, l.orientation, e);
	if (!p) return null;
	var m = p[0], h = p[1];
	if (m == null || h == null) return null;
	var g = m.x, _ = m.y, v = h.x, y = h.y, b = zF(zF({ clipPath: a === "hidden" ? `url(#${s})` : void 0 }, Zn(e)), {}, {
		x1: g,
		y1: _,
		x2: v,
		y2: y
	}), x = bF({
		x1: g,
		y1: _,
		x2: v,
		y2: y
	});
	return /*#__PURE__*/ B.createElement(YO, { zIndex: e.zIndex }, /*#__PURE__*/ B.createElement(cr, { className: z("recharts-reference-line", i) }, WF(r, b), /*#__PURE__*/ B.createElement(bj, UF({}, x, {
		lowerWidth: x.width,
		upperWidth: x.width
	}), /*#__PURE__*/ B.createElement(Fj, { label: e.label }), e.children)));
}
var ZF = {
	ifOverflow: "discard",
	xAxisId: 0,
	yAxisId: 0,
	fill: "none",
	label: !1,
	stroke: "#ccc",
	fillOpacity: 1,
	strokeWidth: 1,
	position: "middle",
	zIndex: U_.line
};
function QF(e) {
	var t = za(e, ZF);
	return /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(YF, {
		yAxisId: t.yAxisId,
		xAxisId: t.xAxisId,
		ifOverflow: t.ifOverflow,
		x: t.x,
		y: t.y,
		segment: t.segment
	}), /*#__PURE__*/ B.createElement(XF, t));
}
QF.displayName = "ReferenceLine";
// node_modules/es-toolkit/dist/function/noop.mjs
function $F() {}
// node_modules/es-toolkit/dist/predicate/isPlainObject.mjs
function eI(e) {
	if (!e || typeof e != "object") return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null ? !1 : Object.prototype.toString.call(e) === "[object Object]";
}
// node_modules/es-toolkit/dist/predicate/isEqualWith.mjs
function tI(e, t, n) {
	return nI(e, t, void 0, void 0, void 0, void 0, n);
}
function nI(e, t, n, r, i, a, o) {
	let s = o(e, t, n, r, i, a);
	if (s !== void 0) return s;
	if (typeof e == typeof t) switch (typeof e) {
		case "bigint":
		case "string":
		case "boolean":
		case "symbol":
		case "undefined": return e === t;
		case "number": return e === t || Object.is(e, t);
		case "function": return e === t;
		case "object": return rI(e, t, a, o);
	}
	return rI(e, t, a, o);
}
function rI(e, t, n, r) {
	if (Object.is(e, t)) return !0;
	let i = so(e), a = so(t);
	if (i === "[object Arguments]" && (i = xo), a === "[object Arguments]" && (a = xo), i !== a) return !1;
	switch (i) {
		case lo: return e.toString() === t.toString();
		case uo: return Ho(e.valueOf(), t.valueOf());
		case fo:
		case ho:
		case mo: return Object.is(e.valueOf(), t.valueOf());
		case co: return e.source === t.source && e.flags === t.flags;
		case yo: return e === t;
	}
	n ??= /* @__PURE__ */ new Map();
	let o = n.get(e), s = n.get(t);
	if (o != null && s != null) return o === t;
	n.set(e, t), n.set(t, e);
	try {
		switch (i) {
			case go:
				if (e.size !== t.size) return !1;
				for (let [i, a] of e.entries()) if (!t.has(i) || !nI(a, t.get(i), i, e, t, n, r)) return !1;
				return !0;
			case _o: {
				if (e.size !== t.size) return !1;
				let i = Array.from(e.values()), a = Array.from(t.values());
				for (let o = 0; o < i.length; o++) {
					let s = i[o], c = a.findIndex((i) => nI(s, i, void 0, e, t, n, r));
					if (c === -1) return !1;
					a.splice(c, 1);
				}
				return !0;
			}
			case vo:
			case wo:
			case To:
			case Eo:
			case Do:
			case Oo:
			case ko:
			case Ao:
			case jo:
			case Mo:
			case No:
			case Po:
				if (Io(e) !== Io(t) || e.length !== t.length) return !1;
				for (let i = 0; i < e.length; i++) if (!nI(e[i], t[i], i, e, t, n, r)) return !1;
				return !0;
			case bo: return e.byteLength === t.byteLength && rI(new Uint8Array(e), new Uint8Array(t), n, r);
			case Co: return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : rI(new Uint8Array(e), new Uint8Array(t), n, r);
			case So: return e.name === t.name && e.message === t.message;
			case xo: {
				if (!(rI(e.constructor, t.constructor, n, r) || eI(e) && eI(t))) return !1;
				let i = [...Object.keys(e), ...oo(e)], a = [...Object.keys(t), ...oo(t)];
				if (i.length !== a.length) return !1;
				for (let a = 0; a < i.length; a++) {
					let o = i[a], s = e[o];
					if (!Object.hasOwn(t, o)) return !1;
					let c = t[o];
					if (!nI(s, c, o, e, t, n, r)) return !1;
				}
				return !0;
			}
			default: return !1;
		}
	} finally {
		n.delete(e), n.delete(t);
	}
}
// node_modules/es-toolkit/dist/predicate/isEqual.mjs
function iI(e, t) {
	return tI(e, t, $F);
}
// node_modules/recharts/es6/util/getEveryNth.js
function aI(e, t) {
	if (t < 1) return [];
	if (t === 1) return e;
	for (var n = [], r = 0; r < e.length; r += t) {
		var i = e[r];
		i !== void 0 && n.push(i);
	}
	return n;
}
// node_modules/recharts/es6/util/TickUtils.js
function oI(e, t, n) {
	return SF({
		width: e.width + t.width,
		height: e.height + t.height
	}, n);
}
function sI(e, t, n) {
	var r = n === "width", i = e.x, a = e.y, o = e.width, s = e.height;
	return t === 1 ? {
		start: r ? i : a,
		end: r ? i + o : a + s
	} : {
		start: r ? i + o : a + s,
		end: r ? i : a
	};
}
function cI(e, t, n, r, i) {
	if (e * t < e * r || e * t > e * i) return !1;
	var a = n();
	return e * (t - e * a / 2 - r) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function lI(e, t) {
	return aI(e, t + 1);
}
// node_modules/recharts/es6/cartesian/getEquidistantTicks.js
function uI(e, t, n, r, i) {
	for (var a = (r || []).slice(), o = t.start, s = t.end, c = 0, l = 1, u = o, d = function() {
		var t = r?.[c];
		if (t === void 0) return { v: aI(r, l) };
		var a = c, d, f = () => (d === void 0 && (d = n(t, a)), d), p = t.coordinate, m = c === 0 || cI(e, p, f, u, s);
		m || (c = 0, u = o, l += 1), m && (u = p + e * (f() / 2 + i), c += l);
	}, f; l <= a.length;) if (f = d(), f) return f.v;
	return [];
}
function dI(e, t, n, r, i) {
	var a = (r || []).slice().length;
	if (a === 0) return [];
	for (var o = t.start, s = t.end, c = 1; c <= a; c++) {
		for (var l = (a - 1) % c, u = o, d = !0, f = function() {
			var t = r[m];
			if (t == null) return 0;
			var a = m, o, c = () => (o === void 0 && (o = n(t, a)), o), f = t.coordinate, p = m === l || cI(e, f, c, u, s);
			if (!p) return d = !1, 1;
			p && (u = f + e * (c() / 2 + i));
		}, p, m = l; m < a && (p = f(), p === 0 || p !== 1); m += c);
		if (d) {
			for (var h = [], g = l; g < a; g += c) {
				var _ = r[g];
				_ != null && h.push(_);
			}
			return h;
		}
	}
	return [];
}
// node_modules/recharts/es6/cartesian/getTicks.js
function fI(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function pI(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? fI(Object(n), !0).forEach(function(t) {
			mI(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fI(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function mI(e, t, n) {
	return (t = hI(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function hI(e) {
	var t = gI(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function gI(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function _I(e, t, n, r, i) {
	for (var a = (r || []).slice(), o = a.length, s = t.start, c = t.end, l = function(t) {
		var r = a[t];
		if (r == null) return 1;
		var l = r, u, d = () => (u === void 0 && (u = n(r, t)), u);
		if (t === o - 1) {
			var f = e * (l.coordinate + e * d() / 2 - c);
			a[t] = l = pI(pI({}, l), {}, { tickCoord: f > 0 ? l.coordinate - f * e : l.coordinate });
		} else a[t] = l = pI(pI({}, l), {}, { tickCoord: l.coordinate });
		l.tickCoord != null && cI(e, l.tickCoord, d, s, c) && (c = l.tickCoord - e * (d() / 2 + i), a[t] = pI(pI({}, l), {}, { isShow: !0 }));
	}, u = o - 1; u >= 0; u--) if (l(u)) continue;
	return a;
}
function vI(e, t, n, r, i, a) {
	var o = (r || []).slice(), s = o.length, c = t.start, l = t.end;
	if (a) {
		var u = r[s - 1];
		if (u != null) {
			var d = n(u, s - 1), f = e * (u.coordinate + e * d / 2 - l);
			o[s - 1] = u = pI(pI({}, u), {}, { tickCoord: f > 0 ? u.coordinate - f * e : u.coordinate }), u.tickCoord != null && cI(e, u.tickCoord, () => d, c, l) && (l = u.tickCoord - e * (d / 2 + i), o[s - 1] = pI(pI({}, u), {}, { isShow: !0 }));
		}
	}
	for (var p = a ? s - 1 : s, m = function(t) {
		var r = o[t];
		if (r == null) return 1;
		var a = r, s, u = () => (s === void 0 && (s = n(r, t)), s);
		if (t === 0) {
			var d = e * (a.coordinate - e * u() / 2 - c);
			o[t] = a = pI(pI({}, a), {}, { tickCoord: d < 0 ? a.coordinate - d * e : a.coordinate });
		} else o[t] = a = pI(pI({}, a), {}, { tickCoord: a.coordinate });
		a.tickCoord != null && cI(e, a.tickCoord, u, c, l) && (c = a.tickCoord + e * (u() / 2 + i), o[t] = pI(pI({}, a), {}, { isShow: !0 }));
	}, h = 0; h < p; h++) if (m(h)) continue;
	return o;
}
function yI(e, t, n) {
	var r = e.tick, i = e.ticks, a = e.viewBox, o = e.minTickGap, s = e.orientation, c = e.interval, l = e.tickFormatter, u = e.unit, d = e.angle;
	if (!i || !i.length || !r) return [];
	if (H(c) || fm.isSsr) return lI(i, H(c) ? c : 0) ?? [];
	var f = [], p = s === "top" || s === "bottom" ? "width" : "height", m = u && p === "width" ? dA(u, {
		fontSize: t,
		letterSpacing: n
	}) : {
		width: 0,
		height: 0
	}, h = (e, r) => {
		var i = typeof l == "function" ? l(e.value, r) : e.value;
		return p === "width" ? oI(dA(i, {
			fontSize: t,
			letterSpacing: n
		}), m, d) : dA(i, {
			fontSize: t,
			letterSpacing: n
		})[p];
	}, g = i[0], _ = i[1], v = i.length >= 2 && g != null && _ != null ? Sr(_.coordinate - g.coordinate) : 1, y = sI(a, v, p);
	return c === "equidistantPreserveStart" ? uI(v, y, h, i, o) : c === "equidistantPreserveEnd" ? dI(v, y, h, i, o) : (f = c === "preserveStart" || c === "preserveStartEnd" ? vI(v, y, h, i, o, c === "preserveStartEnd") : _I(v, y, h, i, o), f.filter((e) => e.isShow));
}
// node_modules/recharts/es6/util/YAxisUtils.js
var bI = (e) => {
	var t = e.ticks, n = e.label, r = e.labelGapWithTick, i = r === void 0 ? 5 : r, a = e.tickSize, o = a === void 0 ? 0 : a, s = e.tickMargin, c = s === void 0 ? 0 : s, l = 0;
	if (t) {
		Array.from(t).forEach((e) => {
			if (e) {
				var t = e.getBoundingClientRect();
				t.width > l && (l = t.width);
			}
		});
		var u = n ? n.getBoundingClientRect().width : 0, d = o + c, f = l + d + u + (n ? i : 0);
		return Math.round(f);
	}
	return 0;
}, xI = (e) => {
	var t = e.ticks, n = e.label, r = e.labelGapWithTick, i = r === void 0 ? 5 : r, a = e.tickSize, o = a === void 0 ? 0 : a, s = e.tickMargin, c = s === void 0 ? 0 : s, l = 0;
	if (t) {
		Array.from(t).forEach((e) => {
			if (e) {
				var t = e.getBoundingClientRect();
				t.height > l && (l = t.height);
			}
		});
		var u = n ? n.getBoundingClientRect().height : 0, d = o + c, f = l + d + u + (n ? i : 0);
		return Math.round(f);
	}
	return 0;
}, SI = tu({
	name: "renderedTicks",
	initialState: {
		xAxis: {},
		yAxis: {}
	},
	reducers: {
		setRenderedTicks: (e, t) => {
			var n = t.payload, r = n.axisType, i = n.axisId, a = n.ticks;
			e[r][i] = q(a);
		},
		removeRenderedTicks: (e, t) => {
			var n = t.payload, r = n.axisType, i = n.axisId;
			delete e[r][i];
		}
	}
}), CI = SI.actions, wI = CI.setRenderedTicks, TI = CI.removeRenderedTicks, EI = SI.reducer, DI = [
	"axisLine",
	"width",
	"height",
	"className",
	"hide",
	"ticks",
	"axisType",
	"axisId"
];
function OI(e, t) {
	return NI(e) || MI(e, t) || AI(e, t) || kI();
}
function kI() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function AI(e, t) {
	if (e) {
		if (typeof e == "string") return jI(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jI(e, t) : void 0;
	}
}
function jI(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function MI(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function NI(e) {
	if (Array.isArray(e)) return e;
}
function PI(e, t) {
	if (e == null) return {};
	var n, r, i = FI(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function FI(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function II() {
	return II = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, II.apply(null, arguments);
}
function LI(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function RI(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? LI(Object(n), !0).forEach(function(t) {
			zI(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : LI(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function zI(e, t, n) {
	return (t = BI(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function BI(e) {
	var t = VI(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function VI(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var HI = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	viewBox: {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	},
	orientation: "bottom",
	ticks: [],
	stroke: "#666",
	tickLine: !0,
	axisLine: !0,
	tick: !0,
	mirror: !1,
	minTickGap: 5,
	tickSize: 6,
	tickMargin: 2,
	interval: "preserveEnd",
	zIndex: U_.axis
};
function UI(e) {
	var t = e.x, n = e.y, r = e.width, i = e.height, a = e.orientation, o = e.mirror, s = e.axisLine, c = e.otherSvgProps;
	if (!s) return null;
	var l = RI(RI(RI({}, c), Yn(s)), {}, { fill: "none" });
	if (a === "top" || a === "bottom") {
		var u = +(a === "top" && !o || a === "bottom" && o);
		l = RI(RI({}, l), {}, {
			x1: t,
			y1: n + u * i,
			x2: t + r,
			y2: n + u * i
		});
	} else {
		var d = +(a === "left" && !o || a === "right" && o);
		l = RI(RI({}, l), {}, {
			x1: t + d * r,
			y1: n,
			x2: t + d * r,
			y2: n + i
		});
	}
	return /*#__PURE__*/ B.createElement("line", II({}, l, { className: z("recharts-cartesian-axis-line", _r(s, "className")) }));
}
function WI(e, t, n, r, i, a, o, s, c) {
	var l, u, d, f, p, m, h = s ? -1 : 1, g = e.tickSize || o, _ = H(e.tickCoord) ? e.tickCoord : e.coordinate;
	switch (a) {
		case "top":
			l = u = e.coordinate, f = n + +!s * i, d = f - h * g, m = d - h * c, p = _;
			break;
		case "left":
			d = f = e.coordinate, u = t + +!s * r, l = u - h * g, p = l - h * c, m = _;
			break;
		case "right":
			d = f = e.coordinate, u = t + +s * r, l = u + h * g, p = l + h * c, m = _;
			break;
		default: l = u = e.coordinate, f = n + +s * i, d = f + h * g, m = d + h * c, p = _;
	}
	return {
		line: {
			x1: l,
			y1: d,
			x2: u,
			y2: f
		},
		tick: {
			x: p,
			y: m
		}
	};
}
function GI(e, t) {
	switch (e) {
		case "left": return t ? "start" : "end";
		case "right": return t ? "end" : "start";
		default: return "middle";
	}
}
function KI(e, t) {
	switch (e) {
		case "left":
		case "right": return "middle";
		case "top": return t ? "start" : "end";
		default: return t ? "end" : "start";
	}
}
function qI(e) {
	var t = e.option, n = e.tickProps, r = e.value, i, a = z(n.className, "recharts-cartesian-axis-tick-value");
	if (/*#__PURE__*/ B.isValidElement(t)) i = /*#__PURE__*/ B.cloneElement(t, RI(RI({}, n), {}, { className: a }));
	else if (typeof t == "function") i = t(RI(RI({}, n), {}, { className: a }));
	else {
		var o = "recharts-cartesian-axis-tick-value";
		typeof t != "boolean" && (o = z(o, sM(t))), i = /*#__PURE__*/ B.createElement(cj, II({}, n, { className: o }), r);
	}
	return i;
}
function JI(e) {
	var t = e.ticks, n = e.axisType, r = e.axisId, i = W(), a = (0, B.useRef)(null);
	return (0, B.useEffect)(() => {
		if (r != null && n != null) {
			var e = t.map((e) => ({
				value: e.value,
				coordinate: e.coordinate,
				offset: e.offset,
				index: e.index
			})), o = a.current;
			o != null && o.axisId === r && o.axisType === n && iI(o.ticks, e) || (a.current = {
				ticks: e,
				axisId: r,
				axisType: n
			}, i(wI({
				ticks: e,
				axisId: r,
				axisType: n
			})));
		}
	}, [
		i,
		t,
		r,
		n
	]), (0, B.useEffect)(() => r == null || n == null ? Pr : () => {
		i(TI({
			axisId: r,
			axisType: n
		}));
	}, [
		i,
		r,
		n
	]), null;
}
var YI = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = e.ticks, r = n === void 0 ? [] : n, i = e.tick, a = e.tickLine, o = e.stroke, s = e.tickFormatter, c = e.unit, l = e.padding, u = e.tickTextProps, d = e.orientation, f = e.mirror, p = e.x, m = e.y, h = e.width, g = e.height, _ = e.tickSize, v = e.tickMargin, y = e.fontSize, b = e.letterSpacing, x = e.getTicksConfig, S = e.events, C = e.axisType, w = e.axisId, T = yI(RI(RI({}, x), {}, { ticks: r }), y, b), E = Yn(x), D = Xn(i), O = ZA(E.textAnchor) ? E.textAnchor : GI(d, f), k = KI(d, f), A = {};
	typeof a == "object" && (A = a);
	var j = RI(RI({}, E), {}, { fill: "none" }, A), M = T.map((e) => RI({ entry: e }, WI(e, p, m, h, g, d, _, f, v))), N = M.map((e) => {
		var t = e.entry, n = e.line;
		return /*#__PURE__*/ B.createElement(cr, {
			className: "recharts-cartesian-axis-tick",
			key: `tick-${t.value}-${t.coordinate}-${t.tickCoord}`
		}, a && /*#__PURE__*/ B.createElement("line", II({}, j, n, { className: z("recharts-cartesian-axis-tick-line", _r(a, "className")) })));
	}), ee = M.map((e, t) => {
		var n = e.entry, r = e.tick, a = RI(RI({}, RI(RI(RI(RI({ verticalAnchor: k }, E), {}, {
			textAnchor: O,
			stroke: "none",
			fill: o
		}, r), {}, {
			index: t,
			payload: n,
			visibleTicksCount: T.length,
			tickFormatter: s,
			padding: l
		}, u), {}, { angle: u?.angle ?? E.angle ?? 0 })), D);
		return /*#__PURE__*/ B.createElement(cr, II({
			className: "recharts-cartesian-axis-tick-label",
			key: `tick-label-${n.value}-${n.coordinate}-${n.tickCoord}`
		}, Na(S, n, t)), i && /*#__PURE__*/ B.createElement(qI, {
			option: i,
			tickProps: a,
			value: `${typeof s == "function" ? s(n.value, t) : n.value}${c || ""}`
		}));
	});
	return /*#__PURE__*/ B.createElement("g", { className: `recharts-cartesian-axis-ticks recharts-${C}-ticks` }, /*#__PURE__*/ B.createElement(JI, {
		ticks: T,
		axisId: w,
		axisType: C
	}), ee.length > 0 && /*#__PURE__*/ B.createElement(YO, { zIndex: U_.label }, /*#__PURE__*/ B.createElement("g", {
		className: `recharts-cartesian-axis-tick-labels recharts-${C}-tick-labels`,
		ref: t
	}, ee)), N.length > 0 && /*#__PURE__*/ B.createElement("g", { className: `recharts-cartesian-axis-tick-lines recharts-${C}-tick-lines` }, N));
}), XI = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = e.axisLine, r = e.width, i = e.height, a = e.className, o = e.hide, s = e.ticks, c = e.axisType, l = e.axisId, u = PI(e, DI), d = OI((0, B.useState)(""), 2), f = d[0], p = d[1], m = OI((0, B.useState)(""), 2), h = m[0], g = m[1], _ = (0, B.useRef)(null);
	(0, B.useImperativeHandle)(t, () => ({
		getCalculatedWidth: () => bI({
			ticks: _.current,
			label: e.labelRef?.current,
			labelGapWithTick: 5,
			tickSize: e.tickSize,
			tickMargin: e.tickMargin
		}),
		getCalculatedHeight: () => xI({
			ticks: _.current,
			label: e.labelRef?.current,
			labelGapWithTick: 5,
			tickSize: e.tickSize,
			tickMargin: e.tickMargin
		})
	}));
	var v = (0, B.useCallback)((e) => {
		if (e) {
			var t = e.getElementsByClassName("recharts-cartesian-axis-tick-value");
			_.current = t;
			var n = t[0];
			if (n) {
				var r = window.getComputedStyle(n), i = r.fontSize, a = r.letterSpacing;
				(i !== f || a !== h) && (p(i), g(a));
			}
		}
	}, [f, h]);
	return o || r != null && r <= 0 || i != null && i <= 0 ? null : /*#__PURE__*/ B.createElement(YO, { zIndex: e.zIndex }, /*#__PURE__*/ B.createElement(cr, { className: z("recharts-cartesian-axis", a) }, /*#__PURE__*/ B.createElement(UI, {
		x: e.x,
		y: e.y,
		width: r,
		height: i,
		orientation: e.orientation,
		mirror: e.mirror,
		axisLine: n,
		otherSvgProps: Yn(e)
	}), /*#__PURE__*/ B.createElement(YI, {
		ref: v,
		axisType: c,
		events: u,
		fontSize: f,
		getTicksConfig: e,
		height: e.height,
		letterSpacing: h,
		mirror: e.mirror,
		orientation: e.orientation,
		padding: e.padding,
		stroke: e.stroke,
		tick: e.tick,
		tickFormatter: e.tickFormatter,
		tickLine: e.tickLine,
		tickMargin: e.tickMargin,
		tickSize: e.tickSize,
		tickTextProps: e.tickTextProps,
		ticks: s,
		unit: e.unit,
		width: e.width,
		x: e.x,
		y: e.y,
		axisId: l
	}), /*#__PURE__*/ B.createElement(bj, {
		x: e.x,
		y: e.y,
		width: e.width,
		height: e.height,
		lowerWidth: e.width,
		upperWidth: e.width
	}, /*#__PURE__*/ B.createElement(Fj, {
		label: e.label,
		labelRef: e.labelRef
	}), e.children)));
}), ZI = /*#__PURE__*/ B.forwardRef((e, t) => {
	var n = za(e, HI);
	return /*#__PURE__*/ B.createElement(XI, II({}, n, { ref: t }));
});
ZI.displayName = "CartesianAxis";
// node_modules/recharts/es6/theme/RechartsThemeContext.js
var QI = /*#__PURE__*/ (0, B.createContext)({ grid: {
	stroke: "#ccc",
	fill: "none"
} });
QI.Provider;
var $I = () => (0, B.useContext)(QI), eL = [
	"x1",
	"y1",
	"x2",
	"y2",
	"key"
], tL = ["offset"], nL = ["xAxisId", "yAxisId"], rL = ["xAxisId", "yAxisId"];
function iL(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function aL(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? iL(Object(n), !0).forEach(function(t) {
			oL(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iL(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function oL(e, t, n) {
	return (t = sL(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function sL(e) {
	var t = cL(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function cL(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function lL() {
	return lL = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, lL.apply(null, arguments);
}
function uL(e, t) {
	if (e == null) return {};
	var n, r, i = dL(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function dL(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var fL = (e) => {
	var t = e.fill;
	if (!t || t === "none") return null;
	var n = e.fillOpacity, r = e.x, i = e.y, a = e.width, o = e.height, s = e.ry;
	return /*#__PURE__*/ B.createElement("rect", {
		x: r,
		y: i,
		ry: s,
		width: a,
		height: o,
		stroke: "none",
		fill: t,
		fillOpacity: n,
		className: "recharts-cartesian-grid-bg"
	});
};
function pL(e) {
	var t = e.option, n = e.lineItemProps, r;
	if (/*#__PURE__*/ B.isValidElement(t)) r = /*#__PURE__*/ B.cloneElement(t, n);
	else if (typeof t == "function") r = t(n);
	else {
		var i = n.x1, a = n.y1, o = n.x2, s = n.y2, c = n.key, l = Yn(uL(n, eL)) ?? {};
		l.offset;
		var u = uL(l, tL), d = Array.isArray(u.strokeDasharray) ? u.strokeDasharray.join(",") : u.strokeDasharray;
		r = /*#__PURE__*/ B.createElement("line", lL({}, u, {
			strokeDasharray: d,
			x1: i,
			y1: a,
			x2: o,
			y2: s,
			fill: "none",
			key: c
		}));
	}
	return r;
}
function mL(e) {
	var t = e.x, n = e.width, r = e.horizontal, i = r === void 0 || r, a = e.horizontalPoints;
	if (!i || !a || !a.length) return null;
	e.xAxisId, e.yAxisId;
	var o = uL(e, nL), s = a.map((e, r) => {
		var a = aL(aL({}, o), {}, {
			x1: t,
			y1: e,
			x2: t + n,
			y2: e,
			key: `line-${r}`,
			index: r
		});
		return /*#__PURE__*/ B.createElement(pL, {
			key: `line-${r}`,
			option: i,
			lineItemProps: a
		});
	});
	return /*#__PURE__*/ B.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, s);
}
function hL(e) {
	var t = e.y, n = e.height, r = e.vertical, i = r === void 0 || r, a = e.verticalPoints;
	if (!i || !a || !a.length) return null;
	e.xAxisId, e.yAxisId;
	var o = uL(e, rL), s = a.map((e, r) => {
		var a = aL(aL({}, o), {}, {
			x1: e,
			y1: t,
			x2: e,
			y2: t + n,
			key: `line-${r}`,
			index: r
		});
		return /*#__PURE__*/ B.createElement(pL, {
			option: i,
			lineItemProps: a,
			key: `line-${r}`
		});
	});
	return /*#__PURE__*/ B.createElement("g", { className: "recharts-cartesian-grid-vertical" }, s);
}
function gL(e) {
	var t = e.horizontalFill, n = e.fillOpacity, r = e.x, i = e.y, a = e.width, o = e.height, s = e.horizontalPoints, c = e.horizontal;
	if (!(c === void 0 || c) || !t || !t.length || s == null) return null;
	var l = s.map((e) => Math.round(e + i - i)).sort((e, t) => e - t);
	i !== l[0] && l.unshift(0);
	var u = l.map((e, s) => {
		var c = l[s + 1], u = c == null ? i + o - e : c - e;
		if (u <= 0) return null;
		var d = s % t.length;
		return /*#__PURE__*/ B.createElement("rect", {
			key: `react-${s}`,
			y: e,
			x: r,
			height: u,
			width: a,
			stroke: "none",
			fill: t[d],
			fillOpacity: n,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /*#__PURE__*/ B.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, u);
}
function _L(e) {
	var t = e.vertical, n = t === void 0 || t, r = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, s = e.width, c = e.height, l = e.verticalPoints;
	if (!n || !r || !r.length) return null;
	var u = l.map((e) => Math.round(e + a - a)).sort((e, t) => e - t);
	a !== u[0] && u.unshift(0);
	var d = u.map((e, t) => {
		var n = u[t + 1], l = n == null ? a + s - e : n - e;
		if (l <= 0) return null;
		var d = t % r.length;
		return /*#__PURE__*/ B.createElement("rect", {
			key: `react-${t}`,
			x: e,
			y: o,
			width: l,
			height: c,
			stroke: "none",
			fill: r[d],
			fillOpacity: i,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /*#__PURE__*/ B.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, d);
}
var vL = (e, t) => {
	var n = e.xAxis, r = e.width, i = e.height, a = e.offset;
	return ad(yI(aL(aL(aL({}, HI), n), {}, {
		ticks: od(n, !0),
		viewBox: {
			x: 0,
			y: 0,
			width: r,
			height: i
		}
	})), a.left, a.left + a.width, t);
}, yL = (e, t) => {
	var n = e.yAxis, r = e.width, i = e.height, a = e.offset;
	return ad(yI(aL(aL(aL({}, HI), n), {}, {
		ticks: od(n, !0),
		viewBox: {
			x: 0,
			y: 0,
			width: r,
			height: i
		}
	})), a.top, a.top + a.height, t);
}, bL = {
	horizontal: !0,
	vertical: !0,
	horizontalPoints: [],
	verticalPoints: [],
	verticalFill: [],
	horizontalFill: [],
	xAxisId: 0,
	yAxisId: 0,
	syncWithTicks: !1,
	zIndex: U_.grid
};
function xL(e) {
	var t = Mf(), n = Nf(), r = jf(), i = aL(aL({}, za(e, bL)), {}, {
		x: H(e.x) ? e.x : r.left,
		y: H(e.y) ? e.y : r.top,
		width: H(e.width) ? e.width : r.width,
		height: H(e.height) ? e.height : r.height
	}), a = i.xAxisId, o = i.yAxisId, s = i.x, c = i.y, l = i.width, u = i.height, d = i.syncWithTicks, f = i.horizontalValues, p = i.verticalValues, m = Kd(), h = G((e) => yE(e, "xAxis", a, m)), g = G((e) => yE(e, "yAxis", o, m)), _ = $I(), v = {
		stroke: i.stroke ?? _.grid.stroke,
		strokeWidth: i.strokeWidth ?? _.grid.strokeWidth,
		strokeOpacity: i.strokeOpacity ?? _.grid.strokeOpacity,
		strokeDasharray: i.strokeDasharray ?? _.grid.strokeDasharray
	};
	if (!Zu(l) || !Zu(u) || !H(s) || !H(c)) return null;
	var y = i.verticalCoordinatesGenerator || vL, b = i.horizontalCoordinatesGenerator || yL, x = i.horizontalPoints, S = i.verticalPoints;
	if ((!x || !x.length) && typeof b == "function") {
		var C = f && f.length, w = b({
			yAxis: g ? aL(aL({}, g), {}, { ticks: C ? f : g.ticks }) : void 0,
			width: t ?? l,
			height: n ?? u,
			offset: r
		}, C ? !0 : d);
		Qd(Array.isArray(w), `horizontalCoordinatesGenerator should return Array but instead it returned [${typeof w}]`), Array.isArray(w) && (x = w);
	}
	if ((!S || !S.length) && typeof y == "function") {
		var T = p && p.length, E = y({
			xAxis: h ? aL(aL({}, h), {}, { ticks: T ? p : h.ticks }) : void 0,
			width: t ?? l,
			height: n ?? u,
			offset: r
		}, T ? !0 : d);
		Qd(Array.isArray(E), `verticalCoordinatesGenerator should return Array but instead it returned [${typeof E}]`), Array.isArray(E) && (S = E);
	}
	return /*#__PURE__*/ B.createElement(YO, { zIndex: i.zIndex }, /*#__PURE__*/ B.createElement("g", { className: "recharts-cartesian-grid" }, /*#__PURE__*/ B.createElement(fL, {
		fill: i.fill ?? _.grid.fill,
		fillOpacity: i.fillOpacity ?? _.grid.fillOpacity,
		x: i.x,
		y: i.y,
		width: i.width,
		height: i.height,
		ry: i.ry
	}), /*#__PURE__*/ B.createElement(gL, lL({}, i, { horizontalPoints: x })), /*#__PURE__*/ B.createElement(_L, lL({}, i, { verticalPoints: S })), /*#__PURE__*/ B.createElement(mL, lL({}, i, v, {
		offset: r,
		horizontalPoints: x,
		xAxis: h,
		yAxis: g
	})), /*#__PURE__*/ B.createElement(hL, lL({}, i, v, {
		offset: r,
		verticalPoints: S,
		xAxis: h,
		yAxis: g
	}))));
}
xL.displayName = "CartesianGrid";
// node_modules/recharts/es6/cartesian/LineDrawShape.js
var SL = [
	"animationElapsedTime",
	"isAnimating",
	"isEntrance",
	"visibleLength",
	"strokeDasharray",
	"connectNulls"
];
function CL() {
	return CL = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, CL.apply(null, arguments);
}
function wL(e, t) {
	if (e == null) return {};
	var n, r, i = TL(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function TL(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function EL(e) {
	try {
		return e && e.getTotalLength && e.getTotalLength() || 0;
	} catch {
		return 0;
	}
}
function DL(e, t) {
	return `${t}px ${e}px`;
}
function OL(e) {
	return e.length % 2 == 0 ? e : [...e, ...e];
}
function kL(e, t) {
	for (var n = [], r = 0; r < t; ++r) n.push(...e);
	return n;
}
function AL(e, t, n) {
	var r = OL(n), i = r.reduce((e, t) => e + t, 0);
	if (!i) return DL(t, e);
	for (var a = Math.floor(e / i), o = e % i, s = [], c = 0, l = 0; c < r.length; l += (u = r[c]) ?? 0, ++c) {
		var u, d = r[c];
		if (d != null && l + d > o) {
			s = [...r.slice(0, c), o - l];
			break;
		}
	}
	var f = s.length % 2 == 0 ? [0, t] : [t];
	return [
		...kL(r, a),
		...s,
		...f
	].map((e) => `${e}px`).join(", ");
}
function jL(e, t, n) {
	return e ? AL(n, t, `${e}`.split(/[,\s]+/gim).map((e) => parseFloat(e))) : DL(t, n);
}
function ML(e) {
	e.animationElapsedTime, e.isAnimating, e.isEntrance;
	var t = e.visibleLength, n = e.strokeDasharray, r = e.connectNulls, i = wL(e, SL), a = r ?? !1, o;
	if (t != null) {
		var s = i.pathRef;
		o = jL(n, EL(s?.current ?? null), t);
	} else n != null && (o = String(n));
	return /*#__PURE__*/ B.createElement(Ym, CL({}, i, {
		connectNulls: a,
		strokeDasharray: o
	}));
}
// node_modules/recharts/es6/cartesian/useAnimatedLineLength.js
function NL(e) {
	var t = (0, B.useRef)(0), n = (0, B.useRef)(0), r = (0, B.useRef)(!1), i = (0, B.useRef)(e);
	return i.current !== e && (t.current = n.current, i.current = e), (0, B.useCallback)((e, i) => {
		if (r.current) return null;
		var a = Math.min(br(t.current + e * i), i);
		return e > 0 && i > 0 && (n.current = Math.max(n.current, a), a >= i) ? (r.current = !0, null) : a;
	}, []);
}
// node_modules/recharts/es6/state/errorBarSlice.js
var PL = tu({
	name: "errorBars",
	initialState: {},
	reducers: {
		addErrorBar: (e, t) => {
			var n = t.payload, r = n.itemId, i = n.errorBar;
			e[r] || (e[r] = []), e[r].push(i);
		},
		replaceErrorBar: (e, t) => {
			var n = t.payload, r = n.itemId, i = n.prev, a = n.next;
			e[r] && (e[r] = e[r].map((e) => e.dataKey === i.dataKey && e.direction === i.direction ? a : e));
		},
		removeErrorBar: (e, t) => {
			var n = t.payload, r = n.itemId, i = n.errorBar;
			e[r] && (e[r] = e[r].filter((e) => e.dataKey !== i.dataKey || e.direction !== i.direction));
		}
	}
}), FL = PL.actions;
FL.addErrorBar, FL.replaceErrorBar, FL.removeErrorBar;
var IL = PL.reducer, LL = ["children"];
function RL(e, t) {
	if (e == null) return {};
	var n, r, i = zL(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function zL(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var BL = /*#__PURE__*/ (0, B.createContext)({
	data: [],
	xAxisId: "xAxis-0",
	yAxisId: "yAxis-0",
	dataPointFormatter: () => ({
		x: 0,
		y: 0,
		value: 0
	}),
	errorBarOffset: 0
});
function VL(e) {
	var t = e.children, n = RL(e, LL);
	return /*#__PURE__*/ B.createElement(BL.Provider, { value: n }, t);
}
// node_modules/recharts/es6/cartesian/GraphicalItemClipPath.js
function HL(e, t) {
	var n = G((t) => bw(t, e)), r = G((e) => Cw(e, t)), i = n?.allowDataOverflow ?? vw.allowDataOverflow, a = r?.allowDataOverflow ?? xw.allowDataOverflow;
	return {
		needClip: i || a,
		needClipX: i,
		needClipY: a
	};
}
function UL(e) {
	var t = e.xAxisId, n = e.yAxisId, r = e.clipPathId, i = HP(), a = HL(t, n), o = a.needClipX, s = a.needClipY, c = a.needClip, l = G((e) => qT(e, t, !1)), u = G((e) => JT(e, n, !1));
	if (!c || !i) return null;
	var d = i.x, f = i.y, p = i.width, m = i.height, h = o && l ? Math.min(l[0], l[1]) : d - p / 2, g = s && u ? Math.min(u[0], u[1]) : f - m / 2, _ = o && l ? Math.abs(l[1] - l[0]) : p * 2, v = s && u ? Math.abs(u[1] - u[0]) : m * 2;
	return /*#__PURE__*/ B.createElement("clipPath", { id: `clipPath-${r}` }, /*#__PURE__*/ B.createElement("rect", {
		x: h,
		y: g,
		width: _,
		height: v
	}));
}
// node_modules/recharts/es6/state/selectors/lineSelectors.js
var WL = (e, t, n, r) => SE(e, "xAxis", t, r), GL = (e, t, n, r) => xE(e, "xAxis", t, r), KL = (e, t, n, r) => SE(e, "yAxis", n, r), qL = (e, t, n, r) => xE(e, "yAxis", n, r), JL = K([
	Z,
	WL,
	KL,
	GL,
	qL
], (e, t, n, r, i) => id(e, "xAxis") ? yd(t, r, !1) : yd(n, i, !1)), YL = (e, t, n, r, i) => i;
function XL(e) {
	return e.type === "line";
}
var ZL = K([
	Z,
	WL,
	KL,
	GL,
	qL,
	K([jw, YL], (e, t) => e.filter(XL).find((e) => e.id === t)),
	JL,
	n_
], (e, t, n, r, i, a, o, s) => {
	var c = s.chartData, l = s.dataStartIndex, u = s.dataEndIndex;
	if (!(a == null || t == null || n == null || r == null || i == null || r.length === 0 || i.length === 0 || o == null || e !== "horizontal" && e !== "vertical")) {
		var d = a.dataKey, f = a.data, p = f != null && f.length > 0 ? f : c?.slice(l, u + 1);
		if (p != null) return CR({
			layout: e,
			xAxis: t,
			yAxis: n,
			xAxisTicks: r,
			yAxisTicks: i,
			dataKey: d,
			bandSize: o,
			displayedData: p
		});
	}
});
// node_modules/recharts/es6/util/getRadiusAndStrokeWidthFromDot.js
function QL(e) {
	var t = Xn(e), n = 3, r = 2;
	if (t != null) {
		var i = t.r, a = t.strokeWidth, o = Number(i), s = Number(a);
		return (Number.isNaN(o) || o < 0) && (o = n), (Number.isNaN(s) || s < 0) && (s = r), {
			r: o,
			strokeWidth: s
		};
	}
	return {
		r: n,
		strokeWidth: r
	};
}
// node_modules/recharts/es6/cartesian/Line.js
var $L = ["id"], eR = [
	"type",
	"layout",
	"connectNulls",
	"needClip",
	"shape",
	"strokeDasharray"
], tR = [
	"activeDot",
	"animateNewValues",
	"animationBegin",
	"animationDuration",
	"animationEasing",
	"connectNulls",
	"dot",
	"hide",
	"isAnimationActive",
	"label",
	"legendType",
	"xAxisId",
	"yAxisId",
	"id"
];
function nR() {
	return nR = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, nR.apply(null, arguments);
}
function rR(e, t) {
	if (e == null) return {};
	var n, r, i = iR(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function iR(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function aR(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function oR(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? aR(Object(n), !0).forEach(function(t) {
			sR(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : aR(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function sR(e, t, n) {
	return (t = cR(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function cR(e) {
	var t = lR(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function lR(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function uR(e) {
	try {
		return e && e.getTotalLength && e.getTotalLength() || 0;
	} catch {
		return 0;
	}
}
function dR(e) {
	var t = 0, n = 0;
	for (var r of e) r.status === "matched" && r.prev.x != null && r.next.x != null && (t += r.next.x - r.prev.x, n++);
	return n > 0 ? t / n : 0;
}
var fR = {
	activeDot: !0,
	animateNewValues: !0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationInterpolateFn: (e, t) => {
		if (e == null) return [];
		if (t === 1) return e.flatMap((e) => e.status === "removed" ? [] : [e.next]);
		var n = dR(e), r = [];
		for (var i of e) if (i.status === "matched") r.push(oR(oR({}, i.next), {}, {
			x: U(i.prev.x, i.next.x, t),
			y: U(i.prev.y, i.next.y, t)
		}));
		else if (i.status === "added") {
			if (i.next.x != null) {
				var a = i.next.x - n;
				r.push(oR(oR({}, i.next), {}, {
					x: U(a, i.next.x, t),
					y: i.next.y
				}));
			} else r.push(i.next);
		} else if (i.status === "removed" && i.prev.x != null) {
			var o = i.prev.x + n;
			r.push(oR(oR({}, i.prev), {}, {
				x: U(i.prev.x, o, t),
				y: i.prev.y
			}));
		}
		return r;
	},
	animationMatchBy: XM,
	connectNulls: !1,
	dot: !0,
	fill: "#fff",
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "line",
	shape: ML,
	stroke: "#3182bd",
	strokeWidth: 1,
	xAxisId: 0,
	yAxisId: 0,
	zIndex: U_.line,
	type: "linear"
}, pR = (e) => {
	var t = e.dataKey, n = e.name, r = e.stroke, i = e.legendType;
	return [{
		inactive: e.hide,
		dataKey: t,
		type: i,
		color: r,
		value: xd(n, t),
		payload: e
	}];
}, mR = /*#__PURE__*/ B.memo((e) => {
	var t = e.dataKey, n = e.data, r = e.stroke, i = e.strokeWidth, a = e.fill, o = e.name, s = e.hide, c = e.unit, l = e.formatter, u = e.tooltipType, d = e.id, f = {
		dataDefinedOnItem: n,
		getPosition: Pr,
		settings: {
			stroke: r,
			strokeWidth: i,
			fill: a,
			dataKey: t,
			nameKey: void 0,
			name: xd(o, t),
			hide: s,
			type: u,
			color: r,
			unit: c,
			formatter: l,
			graphicalItemId: d
		}
	};
	return /*#__PURE__*/ B.createElement(VM, { tooltipEntrySettings: f });
});
function hR(e) {
	var t = e.clipPathId, n = e.points, r = e.props, i = r.dot, a = r.dataKey, o = r.needClip;
	r.id;
	var s = Yn(rR(r, $L));
	return /*#__PURE__*/ B.createElement(wP, {
		points: n,
		dot: i,
		className: "recharts-line-dots",
		dotClassName: "recharts-line-dot",
		dataKey: a,
		baseProps: s,
		needClip: o,
		clipPathId: t
	});
}
function gR(e) {
	var t = e.showLabels, n = e.children, r = e.points, i = (0, B.useMemo)(() => r?.map((e) => {
		var t = {
			x: e.x ?? 0,
			y: e.y ?? 0,
			width: 0,
			lowerWidth: 0,
			upperWidth: 0,
			height: 0
		};
		return oR(oR({}, t), {}, {
			value: e.value,
			payload: e.payload,
			viewBox: t,
			parentViewBox: void 0,
			fill: void 0
		});
	}), [r]);
	return /*#__PURE__*/ B.createElement(Uj, { value: t ? i : void 0 }, n);
}
function _R(e) {
	var t = e.clipPathId, n = e.pathRef, r = e.points, i = e.props, a = e.animationElapsedTime, o = e.isAnimating, s = e.isEntrance, c = e.visibleLength, l = i.type, u = i.layout, d = i.connectNulls, f = i.needClip, p = i.shape, m = i.strokeDasharray, h = oR(oR({}, Zn(rR(i, eR))), {}, {
		fill: "none",
		className: "recharts-line-curve",
		clipPath: f ? `url(#clipPath-${t})` : void 0,
		points: r,
		type: l,
		layout: u,
		connectNulls: d,
		strokeDasharray: m ?? i.strokeDasharray,
		pathRef: n,
		animationElapsedTime: a,
		isAnimating: o,
		isEntrance: i.animateNewValues ? s : !1,
		visibleLength: c
	});
	return /*#__PURE__*/ B.createElement(B.Fragment, null, r?.length > 1 && /*#__PURE__*/ B.createElement(LM, {
		option: p,
		DefaultShape: fR.shape,
		shapeProps: h
	}), /*#__PURE__*/ B.createElement(hR, {
		points: r,
		clipPathId: t,
		props: i
	}));
}
function vR(e) {
	var t = e.clipPathId, n = e.props, r = e.pathRef, i = e.previousPointsRef, a = n.points, o = n.isAnimationActive, s = n.animationBegin, c = n.animationDuration, l = n.animationEasing, u = n.animationMatchBy, d = n.animationInterpolateFn, f = n.layout, p = uR(r.current), m = dN(n.onAnimationStart, n.onAnimationEnd), h = m.isAnimating, g = m.handleAnimationStart, _ = m.handleAnimationEnd, v = !h, y = NL(a), b = (0, B.useCallback)((e) => e > 0 && p > 0, [p]);
	return /*#__PURE__*/ B.createElement(gR, {
		points: a,
		showLabels: v
	}, n.children, /*#__PURE__*/ B.createElement(fN, {
		animationInput: a,
		animationIdPrefix: "recharts-line-",
		items: a,
		previousItemsRef: i,
		isAnimationActive: o,
		animationBegin: s,
		animationDuration: c,
		animationEasing: l,
		onAnimationStart: g,
		onAnimationEnd: _,
		animationInterpolateFn: d,
		animationMatchBy: u,
		shouldUpdatePreviousRef: b,
		layout: f
	}, (e, i, a) => {
		var o = h || i < 1, s = o ? y(i, p) : null;
		return /*#__PURE__*/ B.createElement(_R, {
			props: n,
			points: e,
			clipPathId: t,
			pathRef: r,
			animationElapsedTime: i,
			isAnimating: o,
			isEntrance: a,
			visibleLength: s
		});
	}), /*#__PURE__*/ B.createElement(Yj, { label: n.label }));
}
function yR(e) {
	var t = e.clipPathId, n = e.props, r = (0, B.useRef)(null), i = (0, B.useRef)(null);
	return /*#__PURE__*/ B.createElement(vR, {
		props: n,
		clipPathId: t,
		previousPointsRef: r,
		pathRef: i
	});
}
var bR = (e, t) => ({
	x: e.x ?? void 0,
	y: e.y ?? void 0,
	value: e.value,
	errorVal: X(e.payload, t)
}), xR = class extends B.Component {
	render() {
		var e = this.props, t = e.hide, n = e.dot, r = e.points, i = e.className, a = e.xAxisId, o = e.yAxisId, s = e.top, c = e.left, l = e.width, u = e.height, d = e.id, f = e.needClip, p = e.zIndex;
		if (t) return null;
		var m = z("recharts-line", i), h = d, g = QL(n), _ = g.r, v = g.strokeWidth, y = EM(n), b = _ * 2 + v, x = f ? `url(#clipPath-${y ? "" : "dots-"}${h})` : void 0;
		return /*#__PURE__*/ B.createElement(YO, { zIndex: p }, /*#__PURE__*/ B.createElement(cr, { className: m }, f && /*#__PURE__*/ B.createElement("defs", null, /*#__PURE__*/ B.createElement(UL, {
			clipPathId: h,
			xAxisId: a,
			yAxisId: o
		}), !y && /*#__PURE__*/ B.createElement("clipPath", { id: `clipPath-dots-${h}` }, /*#__PURE__*/ B.createElement("rect", {
			x: c - b / 2,
			y: s - b / 2,
			width: l + b,
			height: u + b
		}))), /*#__PURE__*/ B.createElement(VL, {
			xAxisId: a,
			yAxisId: o,
			data: r,
			dataPointFormatter: bR,
			errorBarOffset: 0
		}, /*#__PURE__*/ B.createElement(yR, {
			props: this.props,
			clipPathId: h
		}))), /*#__PURE__*/ B.createElement(XP, {
			activeDot: this.props.activeDot,
			points: r,
			mainColor: this.props.stroke,
			itemDataKey: this.props.dataKey,
			clipPath: x
		}));
	}
};
function SR(e) {
	var t = za(e, fR), n = t.activeDot, r = t.animateNewValues, i = t.animationBegin, a = t.animationDuration, o = t.animationEasing, s = t.connectNulls, c = t.dot, l = t.hide, u = t.isAnimationActive, d = t.label, f = t.legendType, p = t.xAxisId, m = t.yAxisId, h = t.id, g = rR(t, tR), _ = HL(p, m).needClip, v = HP(), y = Ff(), b = Kd(), x = G((e) => ZL(e, p, m, b, h));
	if (y !== "horizontal" && y !== "vertical" || x == null || v == null) return null;
	var S = v.height, C = v.width, w = v.x, T = v.y;
	return /*#__PURE__*/ B.createElement(xR, nR({}, g, {
		id: h,
		connectNulls: s,
		dot: c,
		activeDot: n,
		animateNewValues: r,
		animationBegin: i,
		animationDuration: a,
		animationEasing: o,
		isAnimationActive: u,
		hide: l,
		label: d,
		legendType: f,
		xAxisId: p,
		yAxisId: m,
		points: x,
		layout: y,
		height: S,
		width: C,
		left: w,
		top: T,
		needClip: _
	}));
}
function CR(e) {
	var t = e.layout, n = e.xAxis, r = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, s = e.bandSize;
	return e.displayedData.map((e, c) => {
		var l = X(e, o);
		if (t === "horizontal") return {
			x: dd({
				axis: n,
				ticks: i,
				bandSize: s,
				entry: e,
				index: c
			}),
			y: (jr(l) ? null : r.scale.map(l)) ?? null,
			value: l,
			payload: e
		};
		var u = jr(l) ? null : n.scale.map(l), d = dd({
			axis: r,
			ticks: a,
			bandSize: s,
			entry: e,
			index: c
		});
		return u == null || d == null ? null : {
			x: u,
			y: d,
			value: l,
			payload: e
		};
	}).filter(Boolean);
}
function wR(e) {
	var t = za(e, fR), n = Kd();
	return /*#__PURE__*/ B.createElement(SN, {
		id: t.id,
		type: "line"
	}, (e) => /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(HM, { legendPayload: pR(t) }), /*#__PURE__*/ B.createElement(mR, {
		dataKey: t.dataKey,
		data: t.data,
		stroke: t.stroke,
		strokeWidth: t.strokeWidth,
		fill: t.fill,
		name: t.name,
		hide: t.hide,
		unit: t.unit,
		formatter: t.formatter,
		tooltipType: t.tooltipType,
		id: e
	}), /*#__PURE__*/ B.createElement(MN, {
		type: "line",
		id: e,
		data: t.data,
		xAxisId: t.xAxisId,
		yAxisId: t.yAxisId,
		zAxisId: 0,
		dataKey: t.dataKey,
		hide: t.hide,
		isPanorama: n
	}), /*#__PURE__*/ B.createElement(SR, nR({}, t, { id: e }))));
}
var TR = /*#__PURE__*/ B.memo(wR, pp);
TR.displayName = "Line";
// node_modules/recharts/es6/state/selectors/graphicalItemSelectors.js
function ER(e, t) {
	return e.graphicalItems.cartesianItems.find((e) => e.id === t)?.xAxisId ?? 0;
}
function DR(e, t) {
	return e.graphicalItems.cartesianItems.find((e) => e.id === t)?.yAxisId ?? 0;
}
// node_modules/recharts/es6/state/selectors/areaSelectors.js
var OR = (e, t, n) => SE(e, "xAxis", ER(e, t), n), kR = (e, t, n) => xE(e, "xAxis", ER(e, t), n), AR = (e, t, n) => SE(e, "yAxis", DR(e, t), n), jR = (e, t, n) => xE(e, "yAxis", DR(e, t), n), MR = K([
	Z,
	OR,
	AR,
	kR,
	jR
], (e, t, n, r, i) => id(e, "xAxis") ? yd(t, r, !1) : yd(n, i, !1)), NR = K([jw, (e, t) => t], (e, t) => e.filter((e) => e.type === "area").find((e) => e.id === t)), PR = (e) => id(Z(e), "xAxis") ? "yAxis" : "xAxis", FR = (e, t) => PR(e) === "yAxis" ? DR(e, t) : ER(e, t), IR = (e, t, n) => rT(e, PR(e), FR(e, t), n), LR = K([
	Z,
	OR,
	AR,
	kR,
	jR,
	K([NR, IR], (e, t) => {
		if (e != null && t != null) {
			var n = e.stackId, r = fv(e);
			if (n != null && r != null) {
				var i = (t[n]?.stackedData)?.find((e) => e.key === r);
				if (i != null) return i.map((e) => [e[0], e[1]]);
			}
		}
	}),
	r_,
	MR,
	NR,
	H_,
	K([NR, IR], (e, t) => {
		if (e != null && e.stackId != null && t != null) {
			var n = t[e.stackId];
			if (n != null) return n.graphicalItems.map((e) => e.dataKey).filter(Nr);
		}
	})
], (e, t, n, r, i, a, o, s, c, l, u) => {
	var d = o.chartData, f = o.dataStartIndex, p = o.dataEndIndex;
	if (!(c == null || e !== "horizontal" && e !== "vertical" || t == null || n == null || r == null || i == null || r.length === 0 || i.length === 0 || s == null)) {
		var m = c.data, h = m && m.length > 0 ? m : d?.slice(f, p + 1);
		if (h != null) return gz({
			layout: e,
			xAxis: t,
			yAxis: n,
			xAxisTicks: r,
			yAxisTicks: i,
			dataStartIndex: f,
			areaSettings: c,
			stackedData: a,
			displayedData: h,
			chartBaseValue: l,
			bandSize: s,
			stackDataKeys: u
		});
	}
}), RR = [
	"animationElapsedTime",
	"isAnimating",
	"isEntrance",
	"layout",
	"isRange",
	"stroke",
	"connectNulls"
], zR = ["id", "baseLine"];
function BR() {
	return BR = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, BR.apply(null, arguments);
}
function VR(e, t) {
	if (e == null) return {};
	var n, r, i = HR(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function HR(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function UR(e) {
	var t = e.alpha, n = e.baseLine, r = e.points, i = e.strokeWidth, a = r[0]?.x, o = r[r.length - 1]?.x;
	if (!Y(a) || !Y(o)) return null;
	var s = t * Math.abs(a - o), c = Math.max(...r.map((e) => e.y || 0));
	return H(n) ? c = Math.max(n, c) : n && Array.isArray(n) && n.length && (c = Math.max(...n.map((e) => e.y || 0), c)), H(c) ? /*#__PURE__*/ B.createElement("rect", {
		x: a < o ? a : a - s,
		y: 0,
		width: s,
		height: Math.floor(c + (i ? parseInt(`${i}`, 10) : 1))
	}) : null;
}
function WR(e) {
	var t = e.alpha, n = e.baseLine, r = e.points, i = e.strokeWidth, a = r[0]?.y, o = r[r.length - 1]?.y;
	if (!Y(a) || !Y(o)) return null;
	var s = t * Math.abs(a - o), c = Math.max(...r.map((e) => e.x || 0));
	return H(n) ? c = Math.max(n, c) : n && Array.isArray(n) && n.length && (c = Math.max(...n.map((e) => e.x || 0), c)), H(c) ? /*#__PURE__*/ B.createElement("rect", {
		x: 0,
		y: a < o ? a : a - s,
		width: c + (i ? parseInt(`${i}`, 10) : 1),
		height: Math.floor(s)
	}) : null;
}
function GR(e) {
	var t = e.alpha, n = e.layout, r = e.points, i = e.baseLine, a = e.strokeWidth;
	return n === "vertical" ? /*#__PURE__*/ B.createElement(WR, {
		alpha: t,
		points: r,
		baseLine: i,
		strokeWidth: a
	}) : /*#__PURE__*/ B.createElement(UR, {
		alpha: t,
		points: r,
		baseLine: i,
		strokeWidth: a
	});
}
function KR(e) {
	var t = e.animationElapsedTime, n = t === void 0 ? 1 : t, r = e.isAnimating, i = r !== void 0 && r, a = e.isEntrance, o = a !== void 0 && a, s = e.layout, c = e.isRange, l = e.stroke, u = e.connectNulls, d = VR(e, RR), f = s === "vertical" ? "vertical" : "horizontal", p = u ?? !1, m = yN(), h = d.id, g = d.baseLine, _ = Yn(VR(d, zR)), v = /*#__PURE__*/ B.createElement(Ym, BR({}, d, {
		id: h,
		baseLine: g,
		connectNulls: p,
		stroke: "none",
		className: "recharts-area-area",
		layout: f
	})), y = l !== "none" && /*#__PURE__*/ B.createElement(Ym, BR({}, _, {
		className: "recharts-area-curve",
		layout: f,
		type: d.type,
		connectNulls: p,
		fill: "none",
		stroke: l,
		points: d.points
	})), b = l !== "none" && c && Array.isArray(g) && /*#__PURE__*/ B.createElement(Ym, BR({}, _, {
		className: "recharts-area-curve",
		layout: f,
		type: d.type,
		connectNulls: p,
		fill: "none",
		stroke: l,
		points: g
	}));
	return o && (i || n < 1) ? /*#__PURE__*/ B.createElement(cr, null, /*#__PURE__*/ B.createElement("defs", null, /*#__PURE__*/ B.createElement("clipPath", { id: m }, /*#__PURE__*/ B.createElement(GR, {
		alpha: n,
		points: d.points ?? [],
		baseLine: g,
		layout: f,
		strokeWidth: d.strokeWidth
	}))), /*#__PURE__*/ B.createElement(cr, { clipPath: `url(#${m})` }, v, y, b)) : /*#__PURE__*/ B.createElement(B.Fragment, null, v, y, b);
}
// node_modules/recharts/es6/cartesian/Area.js
var qR = ["id"], JR = [
	"activeDot",
	"animationBegin",
	"animationDuration",
	"animationEasing",
	"connectNulls",
	"dot",
	"fill",
	"fillOpacity",
	"hide",
	"isAnimationActive",
	"legendType",
	"stroke",
	"xAxisId",
	"yAxisId"
];
function YR() {
	return YR = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, YR.apply(null, arguments);
}
function XR(e, t) {
	if (e == null) return {};
	var n, r, i = ZR(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function ZR(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function QR(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $R(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? QR(Object(n), !0).forEach(function(t) {
			ez(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : QR(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ez(e, t, n) {
	return (t = tz(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function tz(e) {
	var t = nz(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function nz(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var rz = {
	activeDot: !0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: XM,
	animationInterpolateFn: (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "matched" ? [$R($R({}, e.next), {}, {
		x: U(e.prev.x, e.next.x, t),
		y: U(e.prev.y, e.next.y, t)
	})] : e.status === "added" ? [e.next] : []),
	connectNulls: !1,
	dot: !1,
	fill: "#3182bd",
	fillOpacity: .6,
	hide: !1,
	isAnimationActive: "auto",
	legendType: "line",
	stroke: "#3182bd",
	strokeWidth: 1,
	type: "linear",
	label: !1,
	shape: KR,
	xAxisId: 0,
	yAxisId: 0,
	zIndex: U_.area
};
function iz(e, t) {
	return e && e !== "none" ? e : t;
}
var az = (e) => {
	var t = e.dataKey, n = e.name, r = e.stroke, i = e.fill, a = e.legendType;
	return [{
		inactive: e.hide,
		dataKey: t,
		type: a,
		color: iz(r, i),
		value: xd(n, t),
		payload: e
	}];
}, oz = /*#__PURE__*/ B.memo((e) => {
	var t = e.dataKey, n = e.data, r = e.stroke, i = e.strokeWidth, a = e.fill, o = e.name, s = e.hide, c = e.unit, l = e.formatter, u = e.tooltipType, d = e.id, f = {
		dataDefinedOnItem: n,
		getPosition: Pr,
		settings: {
			stroke: r,
			strokeWidth: i,
			fill: a,
			dataKey: t,
			nameKey: void 0,
			name: xd(o, t),
			hide: s,
			type: u,
			color: iz(r, a),
			unit: c,
			formatter: l,
			graphicalItemId: d
		}
	};
	return /*#__PURE__*/ B.createElement(VM, { tooltipEntrySettings: f });
});
function sz(e) {
	var t = e.clipPathId, n = e.points, r = e.props, i = r.needClip, a = r.dot, o = r.dataKey, s = Yn(r);
	return /*#__PURE__*/ B.createElement(wP, {
		points: n,
		dot: a,
		className: "recharts-area-dots",
		dotClassName: "recharts-area-dot",
		dataKey: o,
		baseProps: s,
		needClip: i,
		clipPathId: t
	});
}
function cz(e) {
	var t = e.showLabels, n = e.children, r = e.points.map((e) => {
		var t = {
			x: e.x ?? 0,
			y: e.y ?? 0,
			width: 0,
			lowerWidth: 0,
			upperWidth: 0,
			height: 0
		};
		return $R($R({}, t), {}, {
			value: e.value,
			payload: e.payload,
			parentViewBox: void 0,
			viewBox: t,
			fill: void 0
		});
	});
	return /*#__PURE__*/ B.createElement(Uj, { value: t ? r : void 0 }, n);
}
function lz(e) {
	var t = e.points, n = e.baseLine, r = e.needClip, i = e.clipPathId, a = e.props, o = e.animationElapsedTime, s = e.isAnimating, c = e.isEntrance, l = a.layout, u = a.type, d = a.stroke, f = a.connectNulls, p = a.isRange, m = a.shape, h = a.id, g = XR(a, qR), _ = $R($R({}, Zn(g)), {}, {
		id: h,
		points: t,
		connectNulls: f,
		type: u,
		baseLine: n,
		layout: l,
		stroke: d,
		isRange: p,
		animationElapsedTime: o,
		isAnimating: s,
		isEntrance: c
	});
	return /*#__PURE__*/ B.createElement(B.Fragment, null, t?.length > 1 && /*#__PURE__*/ B.createElement(cr, { clipPath: r ? `url(#clipPath-${i})` : void 0 }, /*#__PURE__*/ B.createElement(LM, {
		option: m,
		DefaultShape: rz.shape,
		shapeProps: _
	})), /*#__PURE__*/ B.createElement(sz, {
		points: t,
		props: g,
		clipPathId: i
	}));
}
function uz(e, t, n) {
	return H(e) ? U(H(t) ? t : void 0, e, n) : jr(e) || Cr(e) ? U(H(t) ? t : void 0, 0, n) : e;
}
function dz(e) {
	var t = e.needClip, n = e.clipPathId, r = e.props, i = e.previousPointsRef, a = e.previousBaselineRef, o = r.points, s = r.baseLine, c = r.isAnimationActive, l = r.animationBegin, u = r.animationDuration, d = r.animationEasing, f = r.animationMatchBy, p = r.animationInterpolateFn, m = (0, B.useMemo)(() => ({
		points: o,
		baseLine: s
	}), [o, s]), h = iN(m, a), g = If(), _ = dN(r.onAnimationStart, r.onAnimationEnd), v = _.isAnimating, y = _.handleAnimationStart, b = _.handleAnimationEnd, x = h.startValue;
	if (g == null) return null;
	var S = Array.isArray(s) && Array.isArray(x) ? rN(x, s, f) : Array.isArray(s) ? rN(null, s, f) : null;
	return /*#__PURE__*/ B.createElement(fN, {
		animationInput: m,
		animationIdPrefix: "recharts-area-",
		items: o,
		previousItemsRef: i,
		isAnimationActive: c,
		animationBegin: l,
		animationDuration: u,
		animationEasing: d,
		onAnimationStart: y,
		onAnimationEnd: b,
		animationInterpolateFn: p,
		animationMatchBy: f,
		layout: g
	}, (e, i, a) => {
		var c = i === 1 ? s : Array.isArray(s) ? p(S, i, g) : a ? s : uz(s, x, i);
		return h.syncStepValue(c, i), /*#__PURE__*/ B.createElement(cz, {
			showLabels: !v,
			points: o
		}, r.children, /*#__PURE__*/ B.createElement(lz, {
			points: e,
			baseLine: c,
			needClip: t,
			clipPathId: n,
			props: r,
			animationElapsedTime: i,
			isAnimating: v || i < 1,
			isEntrance: a
		}), /*#__PURE__*/ B.createElement(Yj, { label: r.label }));
	});
}
function fz(e) {
	var t = e.needClip, n = e.clipPathId, r = e.props, i = (0, B.useRef)(null), a = (0, B.useRef)();
	return /*#__PURE__*/ B.createElement(dz, {
		needClip: t,
		clipPathId: n,
		props: r,
		previousPointsRef: i,
		previousBaselineRef: a
	});
}
var pz = class extends B.PureComponent {
	render() {
		var e = this.props, t = e.hide, n = e.dot, r = e.points, i = e.className, a = e.top, o = e.left, s = e.needClip, c = e.xAxisId, l = e.yAxisId, u = e.width, d = e.height, f = e.id, p = e.baseLine, m = e.zIndex;
		if (t) return null;
		var h = z("recharts-area", i), g = f, _ = QL(n), v = _.r, y = _.strokeWidth, b = EM(n), x = v * 2 + y, S = s ? `url(#clipPath-${b ? "" : "dots-"}${g})` : void 0;
		return /*#__PURE__*/ B.createElement(YO, { zIndex: m }, /*#__PURE__*/ B.createElement(cr, { className: h }, s && /*#__PURE__*/ B.createElement("defs", null, /*#__PURE__*/ B.createElement(UL, {
			clipPathId: g,
			xAxisId: c,
			yAxisId: l
		}), !b && /*#__PURE__*/ B.createElement("clipPath", { id: `clipPath-dots-${g}` }, /*#__PURE__*/ B.createElement("rect", {
			x: o - x / 2,
			y: a - x / 2,
			width: u + x,
			height: d + x
		}))), /*#__PURE__*/ B.createElement(fz, {
			needClip: s,
			clipPathId: g,
			props: this.props
		})), /*#__PURE__*/ B.createElement(XP, {
			points: r,
			mainColor: iz(this.props.stroke, this.props.fill),
			itemDataKey: this.props.dataKey,
			activeDot: this.props.activeDot,
			clipPath: S
		}), this.props.isRange && Array.isArray(p) && /*#__PURE__*/ B.createElement(XP, {
			points: p,
			mainColor: iz(this.props.stroke, this.props.fill),
			itemDataKey: this.props.dataKey,
			activeDot: this.props.activeDot,
			clipPath: S
		}));
	}
};
function mz(e) {
	var t = e.activeDot, n = e.animationBegin, r = e.animationDuration, i = e.animationEasing, a = e.connectNulls, o = e.dot, s = e.fill, c = e.fillOpacity, l = e.hide, u = e.isAnimationActive, d = e.legendType, f = e.stroke, p = e.xAxisId, m = e.yAxisId, h = XR(e, JR), g = Ff(), _ = hO(), v = HL(p, m).needClip, y = Kd(), b = G((t) => LR(t, e.id, y)) ?? {}, x = b.points, S = b.isRange, C = b.baseLine, w = HP();
	if (g !== "horizontal" && g !== "vertical" || w == null || _ !== "AreaChart" && _ !== "ComposedChart") return null;
	var T = w.height, E = w.width, D = w.x, O = w.y;
	return !x || !x.length ? null : /*#__PURE__*/ B.createElement(pz, YR({}, h, {
		activeDot: t,
		animationBegin: n,
		animationDuration: r,
		animationEasing: i,
		baseLine: C,
		connectNulls: a,
		dot: o,
		fill: s,
		fillOpacity: c,
		height: T,
		hide: l,
		layout: g,
		isAnimationActive: u,
		isRange: S,
		legendType: d,
		needClip: v,
		points: x,
		stroke: f,
		width: E,
		left: D,
		top: O,
		xAxisId: p,
		yAxisId: m
	}));
}
var hz = (e, t, n, r, i) => {
	var a = n ?? t;
	if (H(a)) return a;
	var o = e === "horizontal" ? i : r, s = o.scale.domain();
	if (o.type === "number") {
		var c = Math.max(s[0], s[1]), l = Math.min(s[0], s[1]);
		return a === "dataMin" ? l : a === "dataMax" || c < 0 ? c : Math.max(Math.min(s[0], s[1]), 0);
	}
	return a === "dataMin" ? s[0] : a === "dataMax" ? s[1] : s[0];
};
function gz(e) {
	var t = e.areaSettings, n = t.connectNulls, r = t.baseValue, i = t.dataKey, a = e.stackedData, o = e.layout, s = e.chartBaseValue, c = e.xAxis, l = e.yAxis, u = e.displayedData, d = e.dataStartIndex, f = e.xAxisTicks, p = e.yAxisTicks, m = e.bandSize, h = e.stackDataKeys, g = a && a.length, _ = hz(o, s, r, c, l), v = o === "horizontal", y = !1, b = u.map((e, t) => {
		var r;
		if (g) r = a[d + t];
		else {
			var o = X(e, i);
			Array.isArray(o) ? (r = o, y = !0) : r = [_, o];
		}
		var s = r?.[1] ?? null, u = X(e, i), b = g && u == null && h != null && h.length > 0 && h.every((t) => X(e, t) == null), x = s == null || g && !n && u == null || b;
		return v ? {
			x: dd({
				axis: c,
				ticks: f,
				bandSize: m,
				entry: e,
				index: t
			}),
			y: x ? null : l.scale.map(s) ?? null,
			value: r,
			payload: e
		} : {
			x: x ? null : c.scale.map(s) ?? null,
			y: dd({
				axis: l,
				ticks: p,
				bandSize: m,
				entry: e,
				index: t
			}),
			value: r,
			payload: e
		};
	});
	return {
		points: b,
		baseLine: (g || y ? b.map((e) => {
			var t = Array.isArray(e.value) ? e.value[0] : null;
			return v ? {
				x: e.x,
				y: t != null && e.y != null ? l.scale.map(t) ?? null : null,
				payload: e.payload
			} : {
				x: t == null ? null : c.scale.map(t) ?? null,
				y: e.y,
				payload: e.payload
			};
		}) : v ? l.scale.map(_) : c.scale.map(_)) ?? 0,
		isRange: y
	};
}
function _z(e) {
	var t = za(e, rz), n = Kd();
	return /*#__PURE__*/ B.createElement(SN, {
		id: t.id,
		type: "area"
	}, (e) => /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(HM, { legendPayload: az(t) }), /*#__PURE__*/ B.createElement(oz, {
		dataKey: t.dataKey,
		data: t.data,
		stroke: t.stroke,
		strokeWidth: t.strokeWidth,
		fill: t.fill,
		name: t.name,
		hide: t.hide,
		unit: t.unit,
		formatter: t.formatter,
		tooltipType: t.tooltipType,
		id: e
	}), /*#__PURE__*/ B.createElement(MN, {
		type: "area",
		id: e,
		data: t.data,
		dataKey: t.dataKey,
		xAxisId: t.xAxisId,
		yAxisId: t.yAxisId,
		zAxisId: 0,
		stackId: ud(t.stackId),
		hide: t.hide,
		barSize: void 0,
		baseValue: t.baseValue,
		isPanorama: n,
		connectNulls: t.connectNulls
	}), /*#__PURE__*/ B.createElement(mz, YR({}, t, { id: e }))));
}
var vz = /*#__PURE__*/ B.memo(_z, pp);
vz.displayName = "Area";
// node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var yz = "Invariant failed";
function bz(e, t) {
	if (!e) throw Error(yz);
}
// node_modules/recharts/es6/util/BarUtils.js
var xz = ["option"];
function Sz(e, t) {
	if (e == null) return {};
	var n, r, i = Cz(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Cz(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var wz = yg;
function Tz(e) {
	var t = e.option, n = Sz(e, xz);
	return /*#__PURE__*/ B.createElement(LM, {
		option: t,
		DefaultShape: wz,
		shapeProps: n,
		activeClassName: "recharts-active-bar",
		inActiveClassName: "recharts-inactive-bar"
	});
}
var Ez = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
	return (n, r) => {
		if (H(e)) return e;
		var i = H(n) || jr(n);
		return i ? e(n, r) : (!i && bz(!1, `minPointSize callback function received a value with type of ${typeof n}. Currently only numbers or null/undefined are supported.`), t);
	};
}, Dz = (e, t, n) => n, Oz = K([jw, (e, t) => t], (e, t) => e.filter((e) => e.type === "bar").find((e) => e.id === t)), kz = K([Oz], (e) => e?.maxBarSize), Az = (e, t, n, r) => r, jz = K([
	Z,
	jw,
	ER,
	DR,
	Dz
], (e, t, n, r, i) => t.filter((t) => e === "horizontal" ? t.xAxisId === n : t.yAxisId === r).filter((e) => e.isPanorama === i).filter((e) => e.hide === !1).filter((e) => e.type === "bar")), Mz = (e, t, n) => {
	var r = Z(e), i = ER(e, t), a = DR(e, t);
	if (i != null && a != null) return r === "horizontal" ? rT(e, "yAxis", a, n) : rT(e, "xAxis", i, n);
}, Nz = K([
	jz,
	F_,
	(e, t) => {
		var n = Z(e), r = ER(e, t), i = DR(e, t);
		if (r != null && i != null) return n === "horizontal" ? gE(e, "xAxis", r) : gE(e, "yAxis", i);
	}
], iF), Pz = (e, t, n) => {
	var r = Oz(e, t);
	if (r == null) return 0;
	var i = ER(e, t), a = DR(e, t);
	if (i == null || a == null) return 0;
	var o = Z(e), s = M_(e), c = r.maxBarSize, l = jr(c) ? s : c, u, d;
	return o === "horizontal" ? (u = SE(e, "xAxis", i, n), d = xE(e, "xAxis", i, n)) : (u = SE(e, "yAxis", a, n), d = xE(e, "yAxis", a, n)), yd(u, d, !0) ?? l ?? 0;
}, Fz = (e, t, n) => {
	var r = Z(e), i = ER(e, t), a = DR(e, t);
	if (i != null && a != null) {
		var o, s;
		return r === "horizontal" ? (o = SE(e, "xAxis", i, n), s = xE(e, "xAxis", i, n)) : (o = SE(e, "yAxis", a, n), s = xE(e, "yAxis", a, n)), yd(o, s);
	}
}, Iz = K([
	Hd,
	Wd,
	(e, t, n) => {
		var r = ER(e, t);
		if (r != null) return SE(e, "xAxis", r, n);
	},
	(e, t, n) => {
		var r = DR(e, t);
		if (r != null) return SE(e, "yAxis", r, n);
	},
	(e, t, n) => {
		var r = ER(e, t);
		if (r != null) return xE(e, "xAxis", r, n);
	},
	(e, t, n) => {
		var r = DR(e, t);
		if (r != null) return xE(e, "yAxis", r, n);
	},
	K([K([
		Nz,
		M_,
		N_,
		P_,
		Pz,
		Fz,
		kz
	], dF), Oz], pF),
	Z,
	r_,
	Fz,
	K([Mz, Oz], fF),
	Oz,
	Az
], (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
	var p = c.chartData, m = c.dataStartIndex, h = c.dataEndIndex;
	if (!(d == null || o == null || t == null || s !== "horizontal" && s !== "vertical" || n == null || r == null || i == null || a == null || l == null)) {
		var g = d.data, _ = g != null && g.length > 0 ? g : p?.slice(m, h + 1);
		if (_ != null) return TB({
			layout: s,
			barSettings: d,
			pos: o,
			parentViewBox: t,
			bandSize: l,
			xAxis: n,
			yAxis: r,
			xAxisTicks: i,
			yAxisTicks: a,
			stackedData: u,
			displayedData: _,
			offset: e,
			cells: f,
			dataStartIndex: m
		});
	}
}), Lz = ["index"];
function Rz() {
	return Rz = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Rz.apply(null, arguments);
}
function zz(e, t) {
	if (e == null) return {};
	var n, r, i = Bz(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Bz(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Vz = /*#__PURE__*/ (0, B.createContext)(void 0), Hz = (e) => {
	var t = (0, B.useContext)(Vz);
	if (t != null) return t.stackId;
	if (e != null) return ud(e);
}, Uz = (e, t) => `recharts-bar-stack-clip-path-${e}-${t}`, Wz = (e) => {
	var t = (0, B.useContext)(Vz);
	if (t != null) {
		var n = t.stackId;
		return `url(#${Uz(n, e)})`;
	}
}, Gz = (e) => {
	var t = e.index, n = zz(e, Lz), r = Wz(t);
	return /*#__PURE__*/ B.createElement(cr, Rz({
		className: "recharts-bar-stack-layer",
		clipPath: r
	}, n));
}, Kz = [
	"onMouseEnter",
	"onMouseLeave",
	"onClick"
], qz = [
	"value",
	"background",
	"tooltipPosition"
], Jz = ["id"], Yz = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
];
function Xz(e, t) {
	return tB(e) || eB(e, t) || Qz(e, t) || Zz();
}
function Zz() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Qz(e, t) {
	if (e) {
		if (typeof e == "string") return $z(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $z(e, t) : void 0;
	}
}
function $z(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function eB(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function tB(e) {
	if (Array.isArray(e)) return e;
}
function nB() {
	return nB = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, nB.apply(null, arguments);
}
function rB(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function iB(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? rB(Object(n), !0).forEach(function(t) {
			aB(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rB(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function aB(e, t, n) {
	return (t = oB(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function oB(e) {
	var t = sB(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function sB(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function cB(e, t) {
	if (e == null) return {};
	var n, r, i = lB(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function lB(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var uB = (e) => {
	var t = e.dataKey, n = e.name, r = e.fill, i = e.legendType;
	return [{
		inactive: e.hide,
		dataKey: t,
		type: i,
		color: r,
		value: xd(n, t),
		payload: e
	}];
}, dB = /*#__PURE__*/ B.memo((e) => {
	var t = e.dataKey, n = e.stroke, r = e.strokeWidth, i = e.fill, a = e.name, o = e.hide, s = e.unit, c = e.formatter, l = e.tooltipType, u = e.id, d = {
		dataDefinedOnItem: void 0,
		getPosition: Pr,
		settings: {
			stroke: n,
			strokeWidth: r,
			fill: i,
			dataKey: t,
			nameKey: void 0,
			name: xd(a, t),
			hide: o,
			type: l,
			color: i,
			unit: s,
			formatter: c,
			graphicalItemId: u
		}
	};
	return /*#__PURE__*/ B.createElement(VM, { tooltipEntrySettings: d });
});
function fB(e) {
	var t = G(GD), n = e.data, r = e.dataKey, i = e.background, a = e.allOtherBarProps, o = a.onMouseEnter, s = a.onMouseLeave, c = a.onClick, l = cB(a, Kz), u = RM(o, r, a.id), d = zM(s), f = BM(c, r, a.id);
	if (!i || n == null) return null;
	var p = Xn(i);
	return /*#__PURE__*/ B.createElement(YO, { zIndex: mF(i, U_.barBackground) }, n.map((e, n) => {
		e.value;
		var a = e.background;
		e.tooltipPosition;
		var o = cB(e, qz);
		if (!a) return null;
		var s = u(e, e.originalDataIndex), c = d(e, e.originalDataIndex), m = f(e, e.originalDataIndex), h = iB(iB(iB(iB(iB({
			option: i,
			isActive: String(e.originalDataIndex) === t
		}, o), {}, { fill: "#eee" }, a), p), Na(l, e, n)), {}, {
			onMouseEnter: s,
			onMouseLeave: c,
			onClick: m,
			dataKey: r,
			index: n,
			className: "recharts-bar-background-rectangle"
		});
		return /*#__PURE__*/ B.createElement(Tz, nB({ key: `background-bar-${n}` }, h));
	}));
}
function pB(e) {
	var t = e.showLabels, n = e.children, r = e.rects?.map((e) => {
		var t = {
			x: e.x,
			y: e.y,
			width: e.width,
			lowerWidth: e.width,
			upperWidth: e.width,
			height: e.height
		};
		return iB(iB({}, t), {}, {
			value: e.value,
			payload: e.payload,
			parentViewBox: e.parentViewBox,
			viewBox: t,
			fill: e.fill
		});
	});
	return /*#__PURE__*/ B.createElement(Uj, { value: t ? r : void 0 }, n);
}
function mB(e) {
	var t = e.shape, n = e.activeBar, r = e.baseProps, i = e.entry, a = e.index, o = e.dataKey, s = G(GD), c = G(qD), l = n && String(i.originalDataIndex) === s && (c == null || o === c), u = s != null && (String(i.originalDataIndex) !== s || c != null && o !== c), d = Xz((0, B.useState)(!1), 2), f = d[0], p = d[1], m = Xz((0, B.useState)(!1), 2), h = m[0], g = m[1];
	(0, B.useEffect)(() => {
		var e;
		return l ? (p(!0), e = requestAnimationFrame(() => {
			g(!0);
		})) : (g(!1), u && p(!1)), () => {
			cancelAnimationFrame(e);
		};
	}, [l, u]);
	var _ = (0, B.useCallback)(() => {
		l || p(!1);
	}, [l]), v = l && h, y = l || f, b = l ? n === !0 ? t : n : t, x = /*#__PURE__*/ B.createElement(Tz, nB({}, r, { name: String(r.name) }, i, {
		isActive: v,
		option: b,
		index: a,
		dataKey: o,
		animationElapsedTime: e.animationElapsedTime,
		isAnimating: e.isAnimating,
		isEntrance: e.isEntrance,
		onTransitionEnd: _
	}));
	return y ? /*#__PURE__*/ B.createElement(YO, { zIndex: U_.activeBar }, /*#__PURE__*/ B.createElement(Gz, { index: i.originalDataIndex }, x)) : x;
}
function hB(e) {
	var t = e.shape, n = e.baseProps, r = e.entry, i = e.index, a = e.dataKey;
	return /*#__PURE__*/ B.createElement(Tz, nB({}, n, { name: String(n.name) }, r, {
		isActive: !1,
		option: t,
		index: i,
		dataKey: a,
		animationElapsedTime: e.animationElapsedTime,
		isAnimating: e.isAnimating,
		isEntrance: e.isEntrance
	}));
}
function gB(e) {
	var t = e.data, n = e.props, r = e.animationElapsedTime, i = e.isAnimating, a = e.isEntrance, o = Yn(n) ?? {}, s = o.id, c = cB(o, Jz), l = n.shape, u = n.dataKey, d = n.activeBar, f = n.onMouseEnter, p = n.onClick, m = n.onMouseLeave, h = cB(n, Yz), g = RM(f, u, s), _ = zM(m), v = BM(p, u, s);
	return t ? /*#__PURE__*/ B.createElement(B.Fragment, null, t.map((e, t) => /*#__PURE__*/ B.createElement(Gz, nB({
		index: e.originalDataIndex,
		key: `rectangle-${e?.x}-${e?.y}-${e?.value}-${t}`,
		className: "recharts-bar-rectangle"
	}, Na(h, e, t), {
		onMouseEnter: g(e, e.originalDataIndex),
		onMouseLeave: _(e, e.originalDataIndex),
		onClick: v(e, e.originalDataIndex)
	}), d ? /*#__PURE__*/ B.createElement(mB, {
		shape: l,
		activeBar: d,
		baseProps: c,
		entry: e,
		index: t,
		dataKey: u,
		animationElapsedTime: r,
		isAnimating: i,
		isEntrance: a
	}) : /*#__PURE__*/ B.createElement(hB, {
		shape: l,
		baseProps: c,
		entry: e,
		index: t,
		dataKey: u,
		animationElapsedTime: r,
		isAnimating: i,
		isEntrance: a
	})))) : null;
}
var _B = (e, t, n) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => {
	if (e.status === "removed") return n === "horizontal" ? [iB(iB({}, e.prev), {}, {
		height: U(e.prev.height, 0, t),
		y: U(e.prev.y, e.prev.y + e.prev.height, t)
	})] : [iB(iB({}, e.prev), {}, { width: U(e.prev.width, 0, t) })];
	if (e.status === "matched") return [iB(iB({}, e.next), {}, {
		x: U(e.prev.x, e.next.x, t),
		y: U(e.prev.y, e.next.y, t),
		width: U(e.prev.width, e.next.width, t),
		height: U(e.prev.height, e.next.height, t)
	})];
	var r = e.next;
	return n === "horizontal" ? [iB(iB({}, r), {}, {
		height: U(0, r.height, t),
		y: U(r.stackedBarStart, r.y, t)
	})] : [iB(iB({}, r), {}, {
		width: U(0, r.width, t),
		x: U(r.stackedBarStart, r.x, t)
	})];
});
function vB(e) {
	var t = e.props, n = e.previousRectanglesRef, r = t.data, i = t.isAnimationActive, a = t.animationBegin, o = t.animationDuration, s = t.animationEasing, c = t.animationInterpolateFn, l = t.layout, u = dN(t.onAnimationStart, t.onAnimationEnd), d = u.isAnimating, f = u.handleAnimationStart, p = u.handleAnimationEnd;
	return /*#__PURE__*/ B.createElement(pB, {
		showLabels: !d,
		rects: r
	}, /*#__PURE__*/ B.createElement(fN, {
		animationInput: r,
		animationIdPrefix: "recharts-bar-",
		items: r,
		previousItemsRef: n,
		isAnimationActive: i,
		animationBegin: a,
		animationDuration: o,
		animationEasing: s,
		onAnimationStart: f,
		onAnimationEnd: p,
		animationInterpolateFn: c,
		animationMatchBy: t.animationMatchBy,
		layout: l
	}, (e, n, r) => /*#__PURE__*/ B.createElement(cr, null, /*#__PURE__*/ B.createElement(gB, {
		props: t,
		data: e,
		animationElapsedTime: n,
		isAnimating: d || n < 1,
		isEntrance: r
	}))), /*#__PURE__*/ B.createElement(Yj, { label: t.label }), t.children);
}
function yB(e) {
	var t = (0, B.useRef)(null);
	return /*#__PURE__*/ B.createElement(vB, {
		previousRectanglesRef: t,
		props: e
	});
}
var bB = 0, xB = (e, t) => {
	var n = Array.isArray(e.value) ? e.value[1] : e.value;
	return {
		x: e.x,
		y: e.y,
		value: n,
		errorVal: X(e, t)
	};
}, SB = class extends B.PureComponent {
	render() {
		var e = this.props, t = e.hide, n = e.data, r = e.dataKey, i = e.className, a = e.xAxisId, o = e.yAxisId, s = e.needClip, c = e.background, l = e.id;
		if (t || n == null) return null;
		var u = z("recharts-bar", i), d = l;
		return /*#__PURE__*/ B.createElement(cr, {
			className: u,
			id: l
		}, s && /*#__PURE__*/ B.createElement("defs", null, /*#__PURE__*/ B.createElement(UL, {
			clipPathId: d,
			xAxisId: a,
			yAxisId: o
		})), /*#__PURE__*/ B.createElement(cr, {
			className: "recharts-bar-rectangles",
			clipPath: s ? `url(#clipPath-${d})` : void 0
		}, /*#__PURE__*/ B.createElement(fB, {
			data: n,
			dataKey: r,
			background: c,
			allOtherBarProps: this.props
		}), /*#__PURE__*/ B.createElement(yB, this.props)));
	}
}, CB = {
	activeBar: !1,
	animationBegin: 0,
	animationDuration: 400,
	animationEasing: "ease",
	animationInterpolateFn: _B,
	animationMatchBy: ZM,
	background: !1,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "rect",
	minPointSize: bB,
	shape: wz,
	xAxisId: 0,
	yAxisId: 0,
	zIndex: U_.bar
};
function wB(e) {
	var t = e.xAxisId, n = e.yAxisId, r = e.hide, i = e.legendType, a = e.minPointSize, o = e.activeBar, s = e.animationBegin, c = e.animationDuration, l = e.animationEasing, u = e.isAnimationActive, d = HL(t, n).needClip, f = Ff(), p = Kd(), m = TM(e.children, Yk), h = G((t) => Iz(t, e.id, p, m));
	if (f !== "vertical" && f !== "horizontal") return null;
	var g, _ = h?.[0];
	return g = _ == null || _.height == null || _.width == null ? 0 : f === "vertical" ? _.height / 2 : _.width / 2, /*#__PURE__*/ B.createElement(VL, {
		xAxisId: t,
		yAxisId: n,
		data: h,
		dataPointFormatter: xB,
		errorBarOffset: g
	}, /*#__PURE__*/ B.createElement(SB, nB({}, e, {
		layout: f,
		needClip: d,
		data: h,
		xAxisId: t,
		yAxisId: n,
		hide: r,
		legendType: i,
		minPointSize: a,
		activeBar: o,
		animationBegin: s,
		animationDuration: c,
		animationEasing: l,
		isAnimationActive: u
	})));
}
function TB(e) {
	var t = e.layout, n = e.barSettings, r = n.dataKey, i = n.minPointSize, a = n.hasCustomShape, o = e.pos, s = e.bandSize, c = e.xAxis, l = e.yAxis, u = e.xAxisTicks, d = e.yAxisTicks, f = e.stackedData, p = e.displayedData, m = e.offset, h = e.cells, g = e.parentViewBox, _ = e.dataStartIndex, v = t === "horizontal" ? l : c, y = f ? v.scale.domain() : null, b = pd({ numericAxis: v }), x = v.scale.map(b);
	return p.map((e, n) => {
		var p, v, S, C, w, T;
		if (f) {
			var E = f[n + _];
			if (E == null) return null;
			p = sd(E, y);
		} else p = X(e, r), Array.isArray(p) || (p = [b, p]);
		var D = Ez(i, bB)(p[1], n);
		if (t === "horizontal") {
			var O = l.scale.map(p[0]), k = l.scale.map(p[1]);
			if (O == null || k == null) return null;
			v = fd({
				axis: c,
				ticks: u,
				bandSize: s,
				offset: o.offset,
				entry: e,
				index: n
			}), S = k ?? O ?? void 0, C = o.size;
			var A = O - k;
			if (w = Cr(A) ? 0 : A, T = {
				x: v,
				y: m.top,
				width: C,
				height: m.height
			}, Math.abs(D) > 0 && Math.abs(w) < Math.abs(D)) {
				var j = Sr(w || D) * (Math.abs(D) - Math.abs(w));
				S -= j, w += j;
			}
		} else {
			var M = c.scale.map(p[0]), N = c.scale.map(p[1]);
			if (M == null || N == null) return null;
			if (v = M, S = fd({
				axis: l,
				ticks: d,
				bandSize: s,
				offset: o.offset,
				entry: e,
				index: n
			}), C = N - M, w = o.size, T = {
				x: m.left,
				y: S,
				width: m.width,
				height: w
			}, Math.abs(D) > 0 && Math.abs(C) < Math.abs(D)) {
				var ee = Sr(C || D) * (Math.abs(D) - Math.abs(C));
				C += ee;
			}
		}
		return v == null || S == null || C == null || w == null || !a && (C === 0 || w === 0) ? null : iB(iB({}, e), {}, {
			stackedBarStart: x,
			x: v,
			y: S,
			width: C,
			height: w,
			value: f ? p : p[1],
			payload: e,
			background: T,
			tooltipPosition: {
				x: v + C / 2,
				y: S + w / 2
			},
			parentViewBox: g,
			originalDataIndex: n
		}, h && h[n] && h[n].props);
	}).filter(Boolean);
}
function EB(e) {
	var t = za(e, CB), n = Hz(t.stackId), r = Kd();
	return /*#__PURE__*/ B.createElement(SN, {
		id: t.id,
		type: "bar"
	}, (e) => /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(HM, { legendPayload: uB(t) }), /*#__PURE__*/ B.createElement(dB, {
		dataKey: t.dataKey,
		stroke: t.stroke,
		strokeWidth: t.strokeWidth,
		fill: t.fill,
		name: t.name,
		hide: t.hide,
		unit: t.unit,
		formatter: t.formatter,
		tooltipType: t.tooltipType,
		id: e
	}), /*#__PURE__*/ B.createElement(MN, {
		type: "bar",
		id: e,
		data: void 0,
		xAxisId: t.xAxisId,
		yAxisId: t.yAxisId,
		zAxisId: 0,
		dataKey: t.dataKey,
		stackId: n,
		hide: t.hide,
		barSize: t.barSize,
		minPointSize: t.minPointSize,
		maxBarSize: t.maxBarSize,
		isPanorama: r,
		hasCustomShape: t.shape != null && t.shape !== wz
	}), /*#__PURE__*/ B.createElement(YO, { zIndex: t.zIndex }, /*#__PURE__*/ B.createElement(wB, nB({}, t, { id: e })))));
}
var DB = /*#__PURE__*/ B.memo(EB, pp);
DB.displayName = "Bar";
// node_modules/recharts/es6/util/axisPropsAreEqual.js
var OB = ["domain", "range"], kB = ["domain", "range"];
function AB(e, t) {
	if (e == null) return {};
	var n, r, i = jB(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function jB(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function MB(e, t) {
	return e === t ? !0 : Array.isArray(e) && e.length === 2 && Array.isArray(t) && t.length === 2 ? e[0] === t[0] && e[1] === t[1] : !1;
}
function NB(e, t) {
	if (e === t) return !0;
	var n = e.domain, r = e.range, i = AB(e, OB), a = t.domain, o = t.range, s = AB(t, kB);
	return !MB(n, a) || !MB(r, o) ? !1 : pp(i, s);
}
// node_modules/recharts/es6/cartesian/XAxis.js
var PB = ["type"], FB = [
	"dangerouslySetInnerHTML",
	"ticks",
	"scale"
], IB = ["id", "scale"];
function LB() {
	return LB = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, LB.apply(null, arguments);
}
function RB(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function zB(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? RB(Object(n), !0).forEach(function(t) {
			BB(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : RB(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function BB(e, t, n) {
	return (t = VB(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function VB(e) {
	var t = HB(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function HB(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function UB(e, t) {
	if (e == null) return {};
	var n, r, i = WB(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function WB(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function GB(e) {
	var t = W(), n = (0, B.useRef)(null), r = If(), i = e.type, a = UB(e, PB), o = q_(r, "xAxis", i), s = (0, B.useMemo)(() => {
		if (o != null) return zB(zB({}, a), {}, { type: o });
	}, [a, o]);
	return (0, B.useLayoutEffect)(() => {
		s != null && (n.current === null ? t(MP(s)) : n.current !== s && t(NP({
			prev: n.current,
			next: s
		})), n.current = s);
	}, [s, t]), (0, B.useLayoutEffect)(() => () => {
		n.current &&= (t(PP(n.current)), null);
	}, [t]), null;
}
var KB = (e) => {
	var t = e.xAxisId, n = e.className, r = e.height, i = e.label, a = (0, B.useRef)(null), o = (0, B.useRef)(null), s = G(Wd), c = Kd(), l = W(), u = "xAxis", d = G((e) => bE(e, u, t, c)), f = G((e) => cE(e, t)), p = G((e) => pE(e, t)), m = G((e) => yw(e, t));
	if ((0, B.useLayoutEffect)(() => {
		if (!(r !== "auto" || !f || Ej(i) || /*#__PURE__*/ (0, B.isValidElement)(i) || m == null)) {
			var e = a.current;
			if (e) {
				var n = e.getCalculatedHeight();
				Math.round(f.height) !== Math.round(n) && l(zP({
					id: t,
					height: n
				}));
			}
		}
	}, [
		d,
		f,
		l,
		i,
		t,
		r,
		m
	]), f == null || p == null || m == null) return null;
	e.dangerouslySetInnerHTML, e.ticks, e.scale;
	var h = UB(e, FB);
	m.id, m.scale;
	var g = UB(m, IB);
	return /*#__PURE__*/ B.createElement(ZI, LB({}, h, g, {
		ref: a,
		labelRef: o,
		x: p.x,
		y: p.y,
		width: f.width,
		height: f.height,
		className: z(`recharts-${u} ${u}`, n),
		viewBox: s,
		ticks: d,
		axisType: u,
		axisId: t
	}));
}, qB = {
	allowDataOverflow: vw.allowDataOverflow,
	allowDecimals: vw.allowDecimals,
	allowDuplicatedCategory: vw.allowDuplicatedCategory,
	angle: vw.angle,
	axisLine: HI.axisLine,
	height: vw.height,
	hide: !1,
	includeHidden: vw.includeHidden,
	interval: vw.interval,
	label: !1,
	minTickGap: vw.minTickGap,
	mirror: vw.mirror,
	orientation: vw.orientation,
	padding: vw.padding,
	reversed: vw.reversed,
	scale: vw.scale,
	tick: vw.tick,
	tickCount: vw.tickCount,
	tickLine: HI.tickLine,
	tickSize: HI.tickSize,
	type: vw.type,
	niceTicks: vw.niceTicks,
	xAxisId: 0
}, JB = /*#__PURE__*/ B.memo((e) => {
	var t = za(e, qB);
	return /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(GB, {
		allowDataOverflow: t.allowDataOverflow,
		allowDecimals: t.allowDecimals,
		allowDuplicatedCategory: t.allowDuplicatedCategory,
		angle: t.angle,
		dataKey: t.dataKey,
		domain: t.domain,
		height: t.height,
		hide: t.hide,
		id: t.xAxisId,
		includeHidden: t.includeHidden,
		interval: t.interval,
		minTickGap: t.minTickGap,
		mirror: t.mirror,
		name: t.name,
		orientation: t.orientation,
		padding: t.padding,
		reversed: t.reversed,
		scale: t.scale,
		tick: t.tick,
		tickCount: t.tickCount,
		tickFormatter: t.tickFormatter,
		ticks: t.ticks,
		type: t.type,
		unit: t.unit,
		niceTicks: t.niceTicks
	}), /*#__PURE__*/ B.createElement(KB, t));
}, NB);
JB.displayName = "XAxis";
// node_modules/recharts/es6/cartesian/YAxis.js
var YB = ["type"], XB = [
	"dangerouslySetInnerHTML",
	"ticks",
	"scale"
], ZB = ["id", "scale"];
function QB() {
	return QB = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, QB.apply(null, arguments);
}
function $B(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function eV(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? $B(Object(n), !0).forEach(function(t) {
			tV(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $B(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function tV(e, t, n) {
	return (t = nV(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function nV(e) {
	var t = rV(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function rV(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function iV(e, t) {
	if (e == null) return {};
	var n, r, i = aV(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function aV(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function oV(e) {
	var t = W(), n = (0, B.useRef)(null), r = If(), i = e.type, a = iV(e, YB), o = q_(r, "yAxis", i), s = (0, B.useMemo)(() => {
		if (o != null) return eV(eV({}, a), {}, { type: o });
	}, [o, a]);
	return (0, B.useLayoutEffect)(() => {
		s != null && (n.current === null ? t(FP(s)) : n.current !== s && t(IP({
			prev: n.current,
			next: s
		})), n.current = s);
	}, [s, t]), (0, B.useLayoutEffect)(() => () => {
		n.current &&= (t(LP(n.current)), null);
	}, [t]), null;
}
function sV(e) {
	var t = e.yAxisId, n = e.className, r = e.width, i = e.label, a = (0, B.useRef)(null), o = (0, B.useRef)(null), s = G(Wd), c = Kd(), l = W(), u = "yAxis", d = G((e) => hE(e, t)), f = G((e) => mE(e, t)), p = G((e) => bE(e, u, t, c)), m = G((e) => Sw(e, t));
	if ((0, B.useLayoutEffect)(() => {
		if (!(r !== "auto" || !d || Ej(i) || /*#__PURE__*/ (0, B.isValidElement)(i) || m == null)) {
			var e = a.current;
			if (e) {
				var n = e.getCalculatedWidth();
				Math.round(d.width) !== Math.round(n) && l(RP({
					id: t,
					width: n
				}));
			}
		}
	}, [
		p,
		d,
		l,
		i,
		t,
		r,
		m
	]), d == null || f == null || m == null) return null;
	e.dangerouslySetInnerHTML, e.ticks, e.scale;
	var h = iV(e, XB);
	m.id, m.scale;
	var g = iV(m, ZB);
	return /*#__PURE__*/ B.createElement(ZI, QB({}, h, g, {
		ref: a,
		labelRef: o,
		x: f.x,
		y: f.y,
		tickTextProps: r === "auto" ? { width: void 0 } : { width: r },
		width: d.width,
		height: d.height,
		className: z(`recharts-${u} ${u}`, n),
		viewBox: s,
		ticks: p,
		axisType: u,
		axisId: t
	}));
}
var cV = {
	allowDataOverflow: xw.allowDataOverflow,
	allowDecimals: xw.allowDecimals,
	allowDuplicatedCategory: xw.allowDuplicatedCategory,
	angle: xw.angle,
	axisLine: HI.axisLine,
	hide: !1,
	includeHidden: xw.includeHidden,
	interval: xw.interval,
	label: !1,
	minTickGap: xw.minTickGap,
	mirror: xw.mirror,
	orientation: xw.orientation,
	padding: xw.padding,
	reversed: xw.reversed,
	scale: xw.scale,
	tick: xw.tick,
	tickCount: xw.tickCount,
	tickLine: HI.tickLine,
	tickSize: HI.tickSize,
	type: xw.type,
	niceTicks: xw.niceTicks,
	width: xw.width,
	yAxisId: 0
}, lV = /*#__PURE__*/ B.memo((e) => {
	var t = za(e, cV);
	return /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(oV, {
		interval: t.interval,
		id: t.yAxisId,
		scale: t.scale,
		type: t.type,
		domain: t.domain,
		allowDataOverflow: t.allowDataOverflow,
		dataKey: t.dataKey,
		allowDuplicatedCategory: t.allowDuplicatedCategory,
		allowDecimals: t.allowDecimals,
		tickCount: t.tickCount,
		padding: t.padding,
		includeHidden: t.includeHidden,
		reversed: t.reversed,
		ticks: t.ticks,
		width: t.width,
		orientation: t.orientation,
		mirror: t.mirror,
		hide: t.hide,
		unit: t.unit,
		name: t.name,
		angle: t.angle,
		minTickGap: t.minTickGap,
		tick: t.tick,
		tickFormatter: t.tickFormatter,
		niceTicks: t.niceTicks
	}), /*#__PURE__*/ B.createElement(sV, t));
}, NB);
lV.displayName = "YAxis";
var uV = K([
	(e, t) => t,
	Z,
	lv,
	vv,
	RD,
	BD,
	yO,
	Hd
], jO);
// node_modules/recharts/es6/util/getRelativeCoordinate.js
function dV(e) {
	return "getBBox" in e.currentTarget && typeof e.currentTarget.getBBox == "function";
}
function fV(e) {
	var t = e.currentTarget.getBoundingClientRect(), n, r;
	if (dV(e)) {
		var i = e.currentTarget.getBBox();
		n = i.width > 0 ? t.width / i.width : 1, r = i.height > 0 ? t.height / i.height : 1;
	} else {
		var a = e.currentTarget;
		n = a.offsetWidth > 0 ? t.width / a.offsetWidth : 1, r = a.offsetHeight > 0 ? t.height / a.offsetHeight : 1;
	}
	var o = (e, i) => ({
		relativeX: Math.round((e - t.left) / n),
		relativeY: Math.round((i - t.top) / r)
	});
	return "touches" in e ? Array.from(e.touches).map((e) => o(e.clientX, e.clientY)) : o(e.clientX, e.clientY);
}
// node_modules/recharts/es6/state/mouseEventsMiddleware.js
var pV = Pl("mouseClick"), mV = Vu();
mV.startListening({
	actionCreator: pV,
	effect: (e, t) => {
		var n = e.payload, r = uV(t.getState(), fV(n));
		r?.activeIndex != null && t.dispatch(UE({
			activeIndex: r.activeIndex,
			activeDataKey: void 0,
			activeCoordinate: r.activeCoordinate
		}));
	}
});
var hV = Pl("mouseMove"), gV = Vu(), _V = null, vV = null, yV = null;
gV.startListening({
	actionCreator: hV,
	effect: (e, t) => {
		var n = e.payload, r = t.getState().eventSettings, i = r.throttleDelay, a = r.throttledEvents, o = a === "all" || a?.includes("mousemove");
		_V !== null && (cancelAnimationFrame(_V), _V = null), vV === null || typeof i == "number" && o || (clearTimeout(vV), vV = null), yV = fV(n);
		var s = () => {
			var e = t.getState(), n = DE(e, e.tooltip.settings.shared);
			if (!yV) _V = null, vV = null;
			else {
				if (n === "axis") {
					var r = uV(e, yV);
					r?.activeIndex == null ? t.dispatch(BE()) : t.dispatch(HE({
						activeIndex: r.activeIndex,
						activeDataKey: void 0,
						activeCoordinate: r.activeCoordinate
					}));
				}
				_V = null, vV = null;
			}
		};
		o ? i === "raf" ? _V = requestAnimationFrame(s) : typeof i == "number" && vV === null && (vV = setTimeout(s, i)) : s();
	}
});
// node_modules/recharts/es6/state/reduxDevtoolsJsonStringifyReplacer.js
function bV(e, t) {
	return t instanceof HTMLElement ? `HTMLElement <${t.tagName} class="${t.className}">` : t === window ? "global.window" : e === "children" && typeof t == "object" && t ? "<<CHILDREN>>" : t;
}
// node_modules/recharts/es6/state/rootPropsSlice.js
var xV = {
	accessibilityLayer: !0,
	barCategoryGap: "10%",
	barGap: 4,
	barSize: void 0,
	className: void 0,
	maxBarSize: void 0,
	stackOffset: "none",
	syncId: void 0,
	syncMethod: "index",
	baseValue: void 0,
	reverseStackOrder: !1
}, SV = tu({
	name: "rootProps",
	initialState: xV,
	reducers: { updateOptions: (e, t) => {
		e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = t.payload.barGap ?? xV.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className, e.baseValue = t.payload.baseValue, e.reverseStackOrder = t.payload.reverseStackOrder;
	} }
}), CV = SV.reducer, wV = SV.actions.updateOptions, TV = tu({
	name: "polarOptions",
	initialState: null,
	reducers: { updatePolarOptions: (e, t) => e === null ? t.payload : (e.startAngle = t.payload.startAngle, e.endAngle = t.payload.endAngle, e.cx = t.payload.cx, e.cy = t.payload.cy, e.innerRadius = t.payload.innerRadius, e.outerRadius = t.payload.outerRadius, e) }
}), EV = TV.actions.updatePolarOptions, DV = TV.reducer, OV = Pl("keyDown"), kV = Pl("focus"), AV = Pl("blur"), jV = Vu(), MV = null, NV = null, PV = null;
jV.startListening({
	actionCreator: OV,
	effect: (e, t) => {
		PV = e.payload, MV !== null && (cancelAnimationFrame(MV), MV = null);
		var n = t.getState().eventSettings, r = n.throttleDelay, i = n.throttledEvents, a = i === "all" || i.includes("keydown");
		NV === null || typeof r == "number" && a || (clearTimeout(NV), NV = null);
		var o = () => {
			try {
				var e = t.getState();
				if (e.rootProps.accessibilityLayer === !1) return;
				var n = e.tooltip.keyboardInteraction, r = PV;
				if (r !== "ArrowRight" && r !== "ArrowLeft" && r !== "Enter") return;
				var i = iD(n, ED(e), eT(e), FD(e)), a = i == null ? -1 : Number(i), o = !Number.isFinite(a) || a < 0, s = BD(e), c = ED(e), l = DE(e, e.tooltip.settings.shared);
				if (r === "Enter") {
					if (o) return;
					var u = wO(e, l, "hover", String(n.index));
					t.dispatch(GE({
						active: !n.active,
						activeIndex: n.index,
						activeCoordinate: u
					}));
					return;
				}
				var d = CE(e) === "left-to-right" ? 1 : -1, f = r === "ArrowRight" ? 1 : -1, p;
				if (o) {
					var m = eT(e), h = FD(e), g = f * d, _ = (e) => ({
						active: !1,
						index: String(e),
						dataKey: void 0,
						graphicalItemId: void 0,
						coordinate: void 0
					});
					if (p = -1, g > 0) {
						for (var v = 0; v < c.length; v++) if (iD(_(v), c, m, h) != null) {
							p = v;
							break;
						}
					} else for (var y = c.length - 1; y >= 0; y--) if (iD(_(y), c, m, h) != null) {
						p = y;
						break;
					}
					if (p < 0) return;
				} else {
					p = a + f * d;
					var b = s?.length || c.length;
					if (b === 0 || p >= b || p < 0) return;
				}
				var x = wO(e, l, "hover", String(p));
				t.dispatch(GE({
					active: !0,
					activeIndex: p.toString(),
					activeCoordinate: x
				}));
			} finally {
				MV = null, NV = null;
			}
		};
		a ? r === "raf" ? MV = requestAnimationFrame(o) : typeof r == "number" && NV === null && (o(), PV = null, NV = setTimeout(() => {
			PV ? o() : (NV = null, MV = null);
		}, r)) : o();
	}
}), jV.startListening({
	actionCreator: kV,
	effect: (e, t) => {
		var n = t.getState();
		if (n.rootProps.accessibilityLayer !== !1) {
			var r = n.tooltip.keyboardInteraction;
			if (!r.active && r.index == null) {
				var i = "0", a = wO(n, DE(n, n.tooltip.settings.shared), "hover", String(i));
				t.dispatch(GE({
					active: !0,
					activeIndex: i,
					activeCoordinate: a
				}));
			}
		}
	}
}), jV.startListening({
	actionCreator: AV,
	effect: (e, t) => {
		var n = t.getState();
		if (n.rootProps.accessibilityLayer !== !1) {
			var r = n.tooltip.keyboardInteraction;
			r.active && t.dispatch(GE({
				active: !1,
				activeIndex: r.index,
				activeCoordinate: r.coordinate
			}));
		}
	}
});
// node_modules/recharts/es6/util/createEventProxy.js
function FV(e) {
	e.persist();
	var t = e.currentTarget;
	return new Proxy(e, { get: (e, n) => {
		if (n === "currentTarget") return t;
		var r = Reflect.get(e, n);
		return typeof r == "function" ? r.bind(e) : r;
	} });
}
// node_modules/recharts/es6/state/externalEventsMiddleware.js
var IV = Pl("externalEvent"), LV = Vu(), RV = /* @__PURE__ */ new Map(), zV = /* @__PURE__ */ new Map(), BV = /* @__PURE__ */ new Map();
LV.startListening({
	actionCreator: IV,
	effect: (e, t) => {
		var n = e.payload, r = n.handler, i = n.reactEvent;
		if (r != null) {
			var a = i.type, o = FV(i);
			BV.set(a, {
				handler: r,
				reactEvent: o
			});
			var s = RV.get(a);
			s !== void 0 && (cancelAnimationFrame(s), RV.delete(a));
			var c = t.getState().eventSettings, l = c.throttleDelay, u = c.throttledEvents, d = u === "all" || u?.includes(a), f = zV.get(a);
			f === void 0 || typeof l == "number" && d || (clearTimeout(f), zV.delete(a));
			var p = () => {
				var e = BV.get(a);
				try {
					if (!e) return;
					var n = e.handler, r = e.reactEvent, i = t.getState(), o = {
						activeCoordinate: XD(i),
						activeDataKey: qD(i),
						activeIndex: GD(i),
						activeLabel: KD(i),
						activeTooltipIndex: GD(i),
						isTooltipActive: ZD(i)
					};
					n && n(o, r);
				} finally {
					RV.delete(a), zV.delete(a), BV.delete(a);
				}
			};
			if (!d) p();
			else if (l === "raf") {
				var m = requestAnimationFrame(p);
				RV.set(a, m);
			} else if (typeof l == "number") {
				if (!zV.has(a)) {
					p();
					var h = setTimeout(p, l);
					zV.set(a, h);
				}
			} else p();
		}
	}
});
var VV = K([
	K([cD], (e) => e.tooltipItemPayloads),
	(e, t) => t,
	(e, t, n) => n
], (e, t, n) => {
	if (t != null) {
		var r = e.find((e) => e.settings.graphicalItemId === n);
		if (r != null) {
			var i = r.getPosition;
			if (i != null) return i(t);
		}
	}
}), HV = Pl("touchMove"), UV = Vu(), WV = null, GV = null, KV = null, qV = null;
UV.startListening({
	actionCreator: HV,
	effect: (e, t) => {
		var n = e.payload;
		if (n.touches != null && n.touches.length !== 0) {
			qV = FV(n);
			var r = t.getState().eventSettings, i = r.throttleDelay, a = r.throttledEvents, o = a === "all" || a.includes("touchmove");
			WV !== null && (cancelAnimationFrame(WV), WV = null), GV === null || typeof i == "number" && o || (clearTimeout(GV), GV = null), KV = Array.from(n.touches).map((e) => fV({
				clientX: e.clientX,
				clientY: e.clientY,
				currentTarget: n.currentTarget
			}));
			var s = () => {
				if (qV != null) {
					var e = t.getState(), n = DE(e, e.tooltip.settings.shared);
					if (n === "axis") {
						var r = KV?.[0];
						if (r == null) {
							WV = null, GV = null;
							return;
						}
						var i = uV(e, r);
						i?.activeIndex != null && t.dispatch(HE({
							activeIndex: i.activeIndex,
							activeDataKey: void 0,
							activeCoordinate: i.activeCoordinate
						}));
					} else if (n === "item") {
						var a = qV.touches[0];
						if (document.elementFromPoint == null || a == null) return;
						var o = document.elementFromPoint(a.clientX, a.clientY);
						if (!o || !o.getAttribute) return;
						var s = o.getAttribute(Ad), c = o.getAttribute("data-recharts-item-id") ?? void 0, l = SD(e).find((e) => e.id === c);
						if (s == null || l == null || c == null) return;
						var u = l.dataKey, d = VV(e, s, c);
						t.dispatch(RE({
							activeDataKey: u,
							activeIndex: s,
							activeCoordinate: d,
							activeGraphicalItemId: c
						}));
					}
					WV = null, GV = null;
				}
			};
			o ? i === "raf" ? WV = requestAnimationFrame(s) : typeof i == "number" && GV === null && (s(), qV = null, GV = setTimeout(() => {
				qV ? s() : (GV = null, WV = null);
			}, i)) : s();
		}
	}
});
// node_modules/recharts/es6/state/eventSettingsSlice.js
var JV = {
	throttleDelay: "raf",
	throttledEvents: [
		"mousemove",
		"touchmove",
		"pointermove",
		"scroll",
		"wheel"
	]
}, YV = tu({
	name: "eventSettings",
	initialState: JV,
	reducers: { setEventSettings: (e, t) => {
		t.payload.throttleDelay != null && (e.throttleDelay = t.payload.throttleDelay), t.payload.throttledEvents != null && (e.throttledEvents = q(t.payload.throttledEvents));
	} }
}), XV = YV.actions.setEventSettings, ZV = YV.reducer, QV = ic({
	brush: vF,
	cartesianAxis: BP,
	chartData: bk,
	errorBars: IL,
	eventSettings: ZV,
	graphicalItems: jN,
	layout: Yu,
	legend: Jf,
	options: pk,
	polarAxis: oM,
	polarOptions: DV,
	referenceElements: DF,
	renderedTicks: EI,
	rootProps: CV,
	tooltip: KE,
	zIndex: JO
}), $V = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
	return Gl({
		reducer: QV,
		preloadedState: e,
		middleware: (e) => e({
			serializableCheck: !1,
			immutableCheck: ![
				"commonjs",
				"es6",
				"production"
			].includes("es6")
		}).concat([
			mV.middleware,
			gV.middleware,
			jV.middleware,
			LV.middleware,
			UV.middleware
		]),
		enhancers: (e) => {
			var t = e;
			return typeof e == "function" && (t = e()), t.concat(Ul({ type: "raf" }));
		},
		devTools: fm.devToolsEnabled && {
			serialize: { replacer: bV },
			name: `recharts-${t}`
		}
	});
};
// node_modules/recharts/es6/state/RechartsStoreProvider.js
function eH(e) {
	var t = e.preloadedState, n = e.children, r = e.reduxStoreName, i = Kd(), a = (0, B.useRef)(null);
	if (i) return n;
	a.current ??= $V(t, r);
	var o = ls;
	return /*#__PURE__*/ B.createElement(up, {
		context: o,
		store: a.current
	}, n);
}
// node_modules/recharts/es6/state/ReportMainChartProps.js
function tH(e) {
	var t = e.layout, n = e.margin, r = W(), i = Kd();
	return (0, B.useEffect)(() => {
		i || (r(Ku(t)), r(Gu(n)));
	}, [
		r,
		i,
		t,
		n
	]), null;
}
var nH = /*#__PURE__*/ (0, B.memo)(tH, pp);
// node_modules/recharts/es6/state/ReportChartProps.js
function rH(e) {
	var t = W();
	return (0, B.useEffect)(() => {
		t(wV(e));
	}, [t, e]), null;
}
var iH = /*#__PURE__*/ (0, B.memo)((e) => {
	var t = W();
	return (0, B.useEffect)(() => {
		t(XV(e));
	}, [t, e]), null;
}, pp);
// node_modules/recharts/es6/zIndex/ZIndexPortal.js
function aH(e) {
	var t = e.zIndex, n = e.isPanorama, r = (0, B.useRef)(null), i = W();
	return (0, B.useLayoutEffect)(() => (r.current && i(KO({
		zIndex: t,
		element: r.current,
		isPanorama: n
	})), () => {
		i(qO({
			zIndex: t,
			isPanorama: n
		}));
	}), [
		i,
		t,
		n
	]), /*#__PURE__*/ B.createElement("g", {
		tabIndex: -1,
		ref: r,
		className: `recharts-zIndex-layer_${t}`
	});
}
function oH(e) {
	var t = e.children, n = e.isPanorama, r = G(NO);
	if (!r || r.length === 0) return t;
	var i = r.filter((e) => e < 0), a = r.filter((e) => e > 0);
	return /*#__PURE__*/ B.createElement(B.Fragment, null, i.map((e) => /*#__PURE__*/ B.createElement(aH, {
		key: e,
		zIndex: e,
		isPanorama: n
	})), t, a.map((e) => /*#__PURE__*/ B.createElement(aH, {
		key: e,
		zIndex: e,
		isPanorama: n
	})));
}
// node_modules/recharts/es6/container/RootSurface.js
var sH = ["children"];
function cH(e, t) {
	if (e == null) return {};
	var n, r, i = lH(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function lH(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function uH() {
	return uH = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, uH.apply(null, arguments);
}
var dH = {
	width: "100%",
	height: "100%",
	display: "block"
}, fH = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = Mf(), r = Nf(), i = Pm();
	if (!Zu(n) || !Zu(r)) return null;
	var a = e.children, o = e.otherAttributes, s = e.title, c = e.desc, l, u;
	return o != null && (l = typeof o.tabIndex == "number" ? o.tabIndex : i ? 0 : void 0, u = typeof o.role == "string" ? o.role : i ? "application" : void 0), /*#__PURE__*/ B.createElement(rr, uH({}, o, {
		title: s,
		desc: c,
		role: u,
		tabIndex: l,
		width: n,
		height: r,
		style: dH,
		ref: t
	}), a);
}), pH = (e) => {
	var t = e.children, n = G(Jd);
	if (!n) return null;
	var r = n.width, i = n.height, a = n.y, o = n.x;
	return /*#__PURE__*/ B.createElement(rr, {
		width: r,
		height: i,
		x: o,
		y: a
	}, t);
}, mH = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = e.children, r = cH(e, sH);
	return Kd() ? /*#__PURE__*/ B.createElement(pH, null, /*#__PURE__*/ B.createElement(oH, { isPanorama: !0 }, n)) : /*#__PURE__*/ B.createElement(fH, uH({ ref: t }, r), /*#__PURE__*/ B.createElement(oH, { isPanorama: !1 }, n));
});
// node_modules/recharts/es6/util/useReportScale.js
function hH(e, t) {
	return bH(e) || yH(e, t) || _H(e, t) || gH();
}
function gH() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _H(e, t) {
	if (e) {
		if (typeof e == "string") return vH(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vH(e, t) : void 0;
	}
}
function vH(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function yH(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function bH(e) {
	if (Array.isArray(e)) return e;
}
function xH() {
	var e = W(), t = hH((0, B.useState)(null), 2), n = t[0], r = t[1], i = G(Ed);
	return (0, B.useEffect)(() => {
		if (n != null) {
			var t = n.getBoundingClientRect().width / n.offsetWidth;
			Y(t) && t !== i && e(Ju(t));
		}
	}, [
		n,
		e,
		i
	]), r;
}
// node_modules/recharts/es6/chart/RechartsWrapper.js
function SH(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function CH(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? SH(Object(n), !0).forEach(function(t) {
			wH(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : SH(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function wH(e, t, n) {
	return (t = TH(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function TH(e) {
	var t = EH(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function EH(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function DH() {
	return DH = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, DH.apply(null, arguments);
}
function OH(e, t) {
	return NH(e) || MH(e, t) || AH(e, t) || kH();
}
function kH() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function AH(e, t) {
	if (e) {
		if (typeof e == "string") return jH(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jH(e, t) : void 0;
	}
}
function jH(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function MH(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function NH(e) {
	if (Array.isArray(e)) return e;
}
var PH = () => (jk(), null);
function FH(e) {
	if (typeof e == "number") return e;
	if (typeof e == "string") {
		var t = parseFloat(e);
		if (!Number.isNaN(t)) return t;
	}
	return 0;
}
var IH = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = (0, B.useRef)(null), r = OH((0, B.useState)({
		containerWidth: FH(e.style?.width),
		containerHeight: FH(e.style?.height)
	}), 2), i = r[0], a = r[1], o = (0, B.useCallback)((e, t) => {
		a((n) => {
			var r = Math.round(e), i = Math.round(t);
			return n.containerWidth === r && n.containerHeight === i ? n : {
				containerWidth: r,
				containerHeight: i
			};
		});
	}, []), s = (0, B.useCallback)((e) => {
		if (typeof t == "function" && t(e), n.current != null && (n.current.disconnect(), n.current = null), e != null && typeof ResizeObserver < "u") {
			var r = e.getBoundingClientRect(), i = r.width, a = r.height;
			o(i, a);
			var s = new ResizeObserver((e) => {
				var t = e[0];
				if (t != null) {
					var n = t.contentRect, r = n.width, i = n.height;
					o(r, i);
				}
			});
			s.observe(e), n.current = s;
		}
	}, [t, o]);
	return (0, B.useEffect)(() => () => {
		n.current?.disconnect();
	}, [o]), /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(Bf, {
		width: i.containerWidth,
		height: i.containerHeight
	}), /*#__PURE__*/ B.createElement("div", DH({ ref: s }, e)));
}), LH = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = e.width, r = e.height, i = OH((0, B.useState)({
		containerWidth: FH(n),
		containerHeight: FH(r)
	}), 2), a = i[0], o = i[1], s = (0, B.useCallback)((e, t) => {
		o((n) => {
			var r = Math.round(e), i = Math.round(t);
			return n.containerWidth === r && n.containerHeight === i ? n : {
				containerWidth: r,
				containerHeight: i
			};
		});
	}, []), c = (0, B.useCallback)((e) => {
		if (typeof t == "function" && t(e), e != null) {
			var n = e.getBoundingClientRect(), r = n.width, i = n.height;
			s(r, i);
		}
	}, [t, s]);
	return /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(Bf, {
		width: a.containerWidth,
		height: a.containerHeight
	}), /*#__PURE__*/ B.createElement("div", DH({ ref: c }, e)));
}), RH = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = e.width, r = e.height;
	return /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(Bf, {
		width: n,
		height: r
	}), /*#__PURE__*/ B.createElement("div", DH({ ref: t }, e)));
}), zH = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = e.width, r = e.height;
	return typeof n == "string" || typeof r == "string" ? /*#__PURE__*/ B.createElement(LH, DH({}, e, { ref: t })) : typeof n == "number" && typeof r == "number" ? /*#__PURE__*/ B.createElement(RH, DH({}, e, {
		width: n,
		height: r,
		ref: t
	})) : /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(Bf, {
		width: n,
		height: r
	}), /*#__PURE__*/ B.createElement("div", DH({ ref: t }, e)));
});
function BH(e) {
	return e ? IH : zH;
}
var VH = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = e.children, r = e.className, i = e.height, a = e.onClick, o = e.onContextMenu, s = e.onDoubleClick, c = e.onMouseDown, l = e.onMouseEnter, u = e.onMouseLeave, d = e.onMouseMove, f = e.onMouseUp, p = e.onTouchEnd, m = e.onTouchMove, h = e.onTouchStart, g = e.style, _ = e.width, v = e.responsive, y = e.dispatchTouchEvents, b = y === void 0 || y, x = (0, B.useRef)(null), S = W(), C = OH((0, B.useState)(null), 2), w = C[0], T = C[1], E = OH((0, B.useState)(null), 2), D = E[0], O = E[1], k = xH(), A = Ef(), j = A?.width > 0 ? A.width : _, M = A?.height > 0 ? A.height : i, N = (0, B.useCallback)((e) => {
		k(e), typeof t == "function" && t(e), T(e), O(e), e != null && (x.current = e);
	}, [
		k,
		t,
		T,
		O
	]), ee = (0, B.useCallback)((e) => {
		S(pV(e)), S(IV({
			handler: a,
			reactEvent: e
		}));
	}, [S, a]), te = (0, B.useCallback)((e) => {
		S(hV(e)), S(IV({
			handler: l,
			reactEvent: e
		}));
	}, [S, l]), ne = (0, B.useCallback)((e) => {
		S(BE()), S(IV({
			handler: u,
			reactEvent: e
		}));
	}, [S, u]), re = (0, B.useCallback)((e) => {
		S(hV(e)), S(IV({
			handler: d,
			reactEvent: e
		}));
	}, [S, d]), P = (0, B.useCallback)(() => {
		S(kV());
	}, [S]), ie = (0, B.useCallback)(() => {
		S(AV());
	}, [S]), ae = (0, B.useCallback)((e) => {
		S(OV(e.key));
	}, [S]), oe = (0, B.useCallback)((e) => {
		S(IV({
			handler: o,
			reactEvent: e
		}));
	}, [S, o]), se = (0, B.useCallback)((e) => {
		S(IV({
			handler: s,
			reactEvent: e
		}));
	}, [S, s]), ce = (0, B.useCallback)((e) => {
		S(IV({
			handler: c,
			reactEvent: e
		}));
	}, [S, c]), le = (0, B.useCallback)((e) => {
		S(IV({
			handler: f,
			reactEvent: e
		}));
	}, [S, f]), ue = (0, B.useCallback)((e) => {
		S(IV({
			handler: h,
			reactEvent: e
		}));
	}, [S, h]), de = (0, B.useCallback)((e) => {
		b && S(HV(e)), S(IV({
			handler: m,
			reactEvent: e
		}));
	}, [
		S,
		b,
		m
	]), fe = (0, B.useCallback)((e) => {
		S(IV({
			handler: p,
			reactEvent: e
		}));
	}, [S, p]), pe = BH(v);
	return /*#__PURE__*/ B.createElement(ak.Provider, { value: w }, /*#__PURE__*/ B.createElement(Wr.Provider, { value: D }, /*#__PURE__*/ B.createElement(pe, {
		width: j ?? g?.width,
		height: M ?? g?.height,
		className: z("recharts-wrapper", r),
		style: CH({
			position: "relative",
			cursor: "default",
			width: j,
			height: M
		}, g),
		onClick: ee,
		onContextMenu: oe,
		onDoubleClick: se,
		onFocus: P,
		onBlur: ie,
		onKeyDown: ae,
		onMouseDown: ce,
		onMouseEnter: te,
		onMouseLeave: ne,
		onMouseMove: re,
		onMouseUp: le,
		onTouchEnd: fe,
		onTouchMove: de,
		onTouchStart: ue,
		ref: N
	}, /*#__PURE__*/ B.createElement(PH, null), n)));
}), HH = [
	"width",
	"height",
	"responsive",
	"children",
	"className",
	"style",
	"compact",
	"title",
	"desc"
];
function UH(e, t) {
	if (e == null) return {};
	var n, r, i = WH(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function WH(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var GH = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = e.width, r = e.height, i = e.responsive, a = e.children, o = e.className, s = e.style, c = e.compact, l = e.title, u = e.desc, d = Yn(UH(e, HH));
	return c ? /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(Bf, {
		width: n,
		height: r
	}), /*#__PURE__*/ B.createElement(mH, {
		otherAttributes: d,
		title: l,
		desc: u
	}, a)) : /*#__PURE__*/ B.createElement(VH, {
		className: o,
		style: s,
		width: n,
		height: r,
		responsive: i ?? !1,
		onClick: e.onClick,
		onMouseLeave: e.onMouseLeave,
		onMouseEnter: e.onMouseEnter,
		onMouseMove: e.onMouseMove,
		onMouseDown: e.onMouseDown,
		onMouseUp: e.onMouseUp,
		onContextMenu: e.onContextMenu,
		onDoubleClick: e.onDoubleClick,
		onTouchStart: e.onTouchStart,
		onTouchMove: e.onTouchMove,
		onTouchEnd: e.onTouchEnd
	}, /*#__PURE__*/ B.createElement(mH, {
		otherAttributes: d,
		title: l,
		desc: u,
		ref: t
	}, /*#__PURE__*/ B.createElement(FF, null, a)));
});
// node_modules/recharts/es6/chart/CartesianChart.js
function KH() {
	return KH = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, KH.apply(null, arguments);
}
function qH(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function JH(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? qH(Object(n), !0).forEach(function(t) {
			YH(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qH(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function YH(e, t, n) {
	return (t = XH(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function XH(e) {
	var t = ZH(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ZH(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var QH = JH({
	accessibilityLayer: !0,
	barCategoryGap: "10%",
	barGap: 4,
	layout: "horizontal",
	margin: {
		top: 5,
		right: 5,
		bottom: 5,
		left: 5
	},
	responsive: !1,
	reverseStackOrder: !1,
	stackOffset: "none",
	syncMethod: "index"
}, JV), $H = /*#__PURE__*/ (0, B.forwardRef)(function(e, t) {
	var n = za(e.categoricalChartProps, QH), r = e.chartName, i = e.defaultTooltipEventType, a = e.validateTooltipEventTypes, o = e.tooltipPayloadSearcher, s = e.categoricalChartProps, c = {
		chartName: r,
		defaultTooltipEventType: i,
		validateTooltipEventTypes: a,
		tooltipPayloadSearcher: o,
		eventEmitter: void 0
	};
	return /*#__PURE__*/ B.createElement(eH, {
		preloadedState: { options: c },
		reduxStoreName: s.id ?? r
	}, /*#__PURE__*/ B.createElement(hF, { chartData: s.data }), /*#__PURE__*/ B.createElement(nH, {
		layout: n.layout,
		margin: n.margin
	}), /*#__PURE__*/ B.createElement(iH, {
		throttleDelay: n.throttleDelay,
		throttledEvents: n.throttledEvents
	}), /*#__PURE__*/ B.createElement(rH, {
		baseValue: n.baseValue,
		accessibilityLayer: n.accessibilityLayer,
		barCategoryGap: n.barCategoryGap,
		maxBarSize: n.maxBarSize,
		stackOffset: n.stackOffset,
		barGap: n.barGap,
		barSize: n.barSize,
		syncId: n.syncId,
		syncMethod: n.syncMethod,
		className: n.className,
		reverseStackOrder: n.reverseStackOrder
	}), /*#__PURE__*/ B.createElement(GH, KH({}, n, { ref: t })));
}), eU = ["axis"], tU = /*#__PURE__*/ (0, B.forwardRef)((e, t) => /*#__PURE__*/ B.createElement($H, {
	chartName: "LineChart",
	defaultTooltipEventType: "axis",
	validateTooltipEventTypes: eU,
	tooltipPayloadSearcher: dk,
	categoricalChartProps: e,
	ref: t
})), nU = ["axis", "item"], rU = /*#__PURE__*/ (0, B.forwardRef)((e, t) => /*#__PURE__*/ B.createElement($H, {
	chartName: "BarChart",
	defaultTooltipEventType: "axis",
	validateTooltipEventTypes: nU,
	tooltipPayloadSearcher: dk,
	categoricalChartProps: e,
	ref: t
}));
// node_modules/recharts/es6/state/ReportPolarOptions.js
function iU(e) {
	var t = W();
	return (0, B.useEffect)(() => {
		t(EV(e));
	}, [t, e]), null;
}
// node_modules/recharts/es6/chart/PolarChart.js
var aU = ["layout"];
function oU() {
	return oU = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, oU.apply(null, arguments);
}
function sU(e, t) {
	if (e == null) return {};
	var n, r, i = cU(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function cU(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function lU(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function uU(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? lU(Object(n), !0).forEach(function(t) {
			dU(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lU(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function dU(e, t, n) {
	return (t = fU(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function fU(e) {
	var t = pU(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function pU(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var mU = uU({
	accessibilityLayer: !0,
	stackOffset: "none",
	barCategoryGap: "10%",
	barGap: 4,
	margin: {
		top: 5,
		right: 5,
		bottom: 5,
		left: 5
	},
	reverseStackOrder: !1,
	syncMethod: "index",
	layout: "radial",
	responsive: !1,
	cx: "50%",
	cy: "50%",
	innerRadius: 0,
	outerRadius: "80%"
}, JV), hU = /*#__PURE__*/ (0, B.forwardRef)(function(e, t) {
	var n = za(e.categoricalChartProps, mU), r = n.layout, i = sU(n, aU), a = e.chartName, o = {
		chartName: a,
		defaultTooltipEventType: e.defaultTooltipEventType,
		validateTooltipEventTypes: e.validateTooltipEventTypes,
		tooltipPayloadSearcher: e.tooltipPayloadSearcher,
		eventEmitter: void 0
	};
	return /*#__PURE__*/ B.createElement(eH, {
		preloadedState: { options: o },
		reduxStoreName: n.id ?? a
	}, /*#__PURE__*/ B.createElement(hF, { chartData: n.data }), /*#__PURE__*/ B.createElement(nH, {
		layout: r,
		margin: n.margin
	}), /*#__PURE__*/ B.createElement(iH, {
		throttleDelay: n.throttleDelay,
		throttledEvents: n.throttledEvents
	}), /*#__PURE__*/ B.createElement(rH, {
		baseValue: void 0,
		accessibilityLayer: n.accessibilityLayer,
		barCategoryGap: n.barCategoryGap,
		maxBarSize: n.maxBarSize,
		stackOffset: n.stackOffset,
		barGap: n.barGap,
		barSize: n.barSize,
		syncId: n.syncId,
		syncMethod: n.syncMethod,
		className: n.className,
		reverseStackOrder: n.reverseStackOrder
	}), /*#__PURE__*/ B.createElement(iU, {
		cx: n.cx,
		cy: n.cy,
		startAngle: n.startAngle,
		endAngle: n.endAngle,
		innerRadius: n.innerRadius,
		outerRadius: n.outerRadius
	}), /*#__PURE__*/ B.createElement(GH, oU({}, i, { ref: t })));
});
// node_modules/recharts/es6/chart/PieChart.js
function gU(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function _U(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? gU(Object(n), !0).forEach(function(t) {
			vU(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gU(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function vU(e, t, n) {
	return (t = yU(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function yU(e) {
	var t = bU(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function bU(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var xU = ["item"], SU = _U(_U({}, mU), {}, {
	layout: "centric",
	startAngle: 0,
	endAngle: 360
}), CU = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = za(e, SU);
	return /*#__PURE__*/ B.createElement(hU, {
		chartName: "PieChart",
		defaultTooltipEventType: "item",
		validateTooltipEventTypes: xU,
		tooltipPayloadSearcher: dk,
		categoricalChartProps: n,
		ref: t
	});
}), wU = ["axis"], TU = /*#__PURE__*/ (0, B.forwardRef)((e, t) => /*#__PURE__*/ B.createElement($H, {
	chartName: "AreaChart",
	defaultTooltipEventType: "axis",
	validateTooltipEventTypes: wU,
	tooltipPayloadSearcher: dk,
	categoricalChartProps: e,
	ref: t
}));
// src/react/charts/cn.ts
function EU(...e) {
	return We(z(e));
}
// src/react/evilcharts/registry/ui/recharts-chart.tsx
var DU = {
	light: "",
	dark: ".dark"
}, OU = Object.keys(DU);
function kU(e) {
	for (let [t, n] of Object.entries(e)) if (n.colors && !OU.some((e) => n.colors?.[e] !== void 0)) throw Error(`[EvilCharts] Invalid chart config for "${t}": colors object must have at least one theme key (${OU.join(", ")}). Received empty object or invalid keys.`);
}
var AU = B.createContext(null);
function jU() {
	let e = B.useContext(AU);
	if (!e) throw Error("useChart must be used within a <ChartContainer />");
	return e;
}
function MU({ id: e, config: t, initialDimension: n = {
	width: 320,
	height: 200
}, className: r, children: i, footer: a, ...o }) {
	let s = B.useId(), c = `chart-${e ?? s.replace(/:/g, "")}`;
	return kU(t), /* @__PURE__ */ (0, V.jsx)(AU.Provider, {
		value: { config: t },
		children: /* @__PURE__ */ (0, V.jsxs)("div", {
			"data-slot": "chart",
			"data-chart": c,
			className: EU("min-h-0 w-full flex-1", "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border relative flex flex-col justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", !a && "aspect-video", r),
			...o,
			children: [
				/* @__PURE__ */ (0, V.jsx)(FU, {
					id: c,
					config: t
				}),
				/* @__PURE__ */ (0, V.jsx)(Of, {
					className: "min-h-0 w-full flex-1",
					initialDimension: n,
					children: i
				}),
				a
			]
		})
	});
}
function NU({ isLoading: e }) {
	return e ? /* @__PURE__ */ (0, V.jsx)("div", {
		className: "pointer-events-none absolute inset-0 z-20 flex items-center justify-center",
		children: /* @__PURE__ */ (0, V.jsxs)("div", {
			className: "text-primary bg-background flex items-center justify-center gap-2 rounded-md border px-2 py-0.5 text-sm",
			children: [/* @__PURE__ */ (0, V.jsx)("div", { className: "border-border border-t-primary h-3 w-3 animate-spin rounded-full border" }), /* @__PURE__ */ (0, V.jsx)("span", { children: "Loading" })]
		})
	}) : null;
}
function PU(e, t) {
	let n = e.length;
	if (n >= t) return e.slice(0, t);
	let r = [], i = Math.floor(t / n), a = t % n;
	for (let t = 0; t < n; t++) {
		let o = i + +(t >= n - a);
		for (let n = 0; n < o; n++) r.push(e[t]);
	}
	return r;
}
var FU = ({ id: e, config: t }) => {
	let n = Object.entries(t).filter(([, e]) => e.colors);
	if (!n.length) return null;
	let r = (e) => n.flatMap(([t, n]) => {
		let r = n.colors?.[e];
		return !r || !Array.isArray(r) || r.length === 0 ? [] : PU(r, LU(n)).map((e, n) => `  --color-${t}-${n}: ${e};`);
	}).filter(Boolean).join("\n"), i = Object.entries(DU).map(([t, n]) => `${n} [data-chart=${e}] {\n${r(t)}\n}`).join("\n");
	return /* @__PURE__ */ (0, V.jsx)("style", { dangerouslySetInnerHTML: { __html: i } });
};
function IU(e, t, n) {
	if (typeof t != "object" || !t) return;
	let r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, i = n;
	return n in t && typeof t[n] == "string" ? i = t[n] : r && n in r && typeof r[n] == "string" && (i = r[n]), i in e ? e[i] : e[n];
}
function LU(e) {
	if (!e.colors) return 1;
	let t = OU.map((t) => e.colors?.[t]?.length ?? 0);
	return Math.max(...t, 1);
}
var RU = (e = 10, t = 0, n = 70) => {
	let r = n - t;
	return Array.from({ length: e }, () => ({ loading: Math.floor(Math.random() * r) + t }));
}, zU = {
	sm: "rounded-sm",
	md: "rounded-md",
	lg: "rounded-lg",
	xl: "rounded-xl"
}, BU = {
	default: "bg-background",
	"frosted-glass": "bg-background/70 backdrop-blur-sm"
};
function VU({ active: e, payload: t, className: n, indicator: r = "dot", hideLabel: i = !1, hideIndicator: a = !1, label: o, labelFormatter: s, labelClassName: c, formatter: l, nameKey: u, labelKey: d, selected: f, roundness: p = "lg", variant: m = "default" }) {
	let { config: h } = jU(), g = B.useMemo(() => {
		if (i || !t?.length) return null;
		let [e] = t, n = `${d ?? e?.dataKey ?? e?.name ?? "value"}`, r = IU(h, e, n), a = !d && typeof o == "string" ? h[o]?.label ?? o : r?.label;
		return s ? /* @__PURE__ */ (0, V.jsx)("div", {
			className: EU("font-medium", c),
			children: s(a, t)
		}) : a ? /* @__PURE__ */ (0, V.jsx)("div", {
			className: EU("font-medium", c),
			children: a
		}) : null;
	}, [
		o,
		s,
		t,
		i,
		c,
		h,
		d
	]);
	if (!e || !t?.length) return /* @__PURE__ */ (0, V.jsx)("span", { className: "p-4" });
	let _ = t.length === 1 && r !== "dot";
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		className: EU("border-border/50 grid min-w-32 items-start gap-1.5 border px-2.5 py-1.5 text-xs shadow-xl", zU[p], BU[m], n),
		children: [_ ? null : g, /* @__PURE__ */ (0, V.jsx)("div", {
			className: "grid gap-1.5",
			children: t.filter((e) => e.type !== "none").map((e, t) => {
				let n = `${(u && e.payload ? e.payload[u] : void 0) ?? e.name ?? e.dataKey ?? "value"}`, i = IU(h, e, n), o = i ? LU(i) : 1;
				return /* @__PURE__ */ (0, V.jsx)("div", {
					className: EU("[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5", r === "dot" && "items-center", f != null && f !== e.dataKey && "opacity-30"),
					children: l && e?.value !== void 0 && e.name ? l(e.value, e.name, e, t, e.payload) : /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [i?.icon ? /* @__PURE__ */ (0, V.jsx)(i.icon, {}) : !a && /* @__PURE__ */ (0, V.jsx)("div", {
						className: EU("shrink-0 rounded-[2px]", {
							"h-2.5 w-2.5": r === "dot",
							"w-1": r === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent!": r === "dashed",
							"my-0.5": _ && r === "dashed"
						}),
						style: HU(n, o)
					}), /* @__PURE__ */ (0, V.jsxs)("div", {
						className: EU("flex flex-1 justify-between gap-4 leading-none", _ ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ (0, V.jsxs)("div", {
							className: "grid gap-1.5",
							children: [_ ? g : null, /* @__PURE__ */ (0, V.jsx)("span", {
								className: "text-muted-foreground",
								children: i?.label ?? e.name
							})]
						}), e.value != null && /* @__PURE__ */ (0, V.jsx)("span", {
							className: "text-foreground font-mono font-medium tabular-nums",
							children: typeof e.value == "number" ? e.value.toLocaleString() : String(e.value)
						})]
					})] })
				}, t);
			})
		})]
	});
}
function HU(e, t) {
	return t <= 1 ? { background: `var(--color-${e}-0)` } : { background: `linear-gradient(to right, ${Array.from({ length: t }, (n, r) => `var(--color-${e}-${r}) ${r / (t - 1) * 100}%`).join(", ")})` };
}
var UU = ({ animationDuration: e = 200, ...t }) => /* @__PURE__ */ (0, V.jsx)(Jk, {
	animationDuration: e,
	...t
});
// src/react/evilcharts/registry/ui/recharts-legend.tsx
function WU({ className: e, hideIcon: t = !1, nameKey: n, payload: r, verticalAlign: i, align: a = "right", selected: o, onSelectChange: s, isClickable: c, variant: l = "rounded-square" }) {
	let { config: u } = jU();
	return r?.length ? /* @__PURE__ */ (0, V.jsx)("div", {
		className: EU("flex items-center gap-4 select-none", a === "left" && "justify-start", a === "center" && "justify-center", a === "right" && "justify-end", i === "top" ? "pb-4" : "pt-4", e),
		children: r.filter((e) => e.type !== "none").map((e) => {
			let r = `${(n && e.payload ? e.payload[n] : void 0) ?? e.value ?? e.dataKey ?? "value"}`, i = IU(u, e, r), a = o === null || o === r, d = i ? LU(i) : 1;
			return /* @__PURE__ */ (0, V.jsxs)("div", {
				className: EU("[&>svg]:text-muted-foreground flex items-center gap-1.5 transition-opacity [&>svg]:h-3 [&>svg]:w-3", !a && "opacity-30", c && "cursor-pointer"),
				onClick: () => {
					c && s?.(o === r ? null : r);
				},
				children: [i?.icon && !t ? /* @__PURE__ */ (0, V.jsx)(i.icon, {}) : /* @__PURE__ */ (0, V.jsx)(GU, {
					variant: l,
					dataKey: r,
					colorsCount: d
				}), i?.label]
			}, r);
		})
	}) : null;
}
function GU({ variant: e, dataKey: t, colorsCount: n }) {
	let r = KU(t, n), i = qU(t, n);
	switch (e) {
		case "square": return /* @__PURE__ */ (0, V.jsx)("div", {
			className: "h-2 w-2 shrink-0",
			style: r
		});
		case "circle": return /* @__PURE__ */ (0, V.jsx)("div", {
			className: "h-2 w-2 shrink-0 rounded-full",
			style: r
		});
		case "circle-outline": return /* @__PURE__ */ (0, V.jsx)("div", {
			className: "h-2.5 w-2.5 shrink-0 rounded-full p-[1.5px]",
			style: i
		});
		case "vertical-bar": return /* @__PURE__ */ (0, V.jsx)("div", {
			className: "h-3 w-1 shrink-0 rounded-[2px]",
			style: r
		});
		case "horizontal-bar": return /* @__PURE__ */ (0, V.jsx)("div", {
			className: "h-1 w-3 shrink-0 rounded-[2px]",
			style: r
		});
		case "rounded-square-outline": return /* @__PURE__ */ (0, V.jsx)("div", {
			className: "h-2.5 w-2.5 shrink-0 rounded-[3px] p-[1.5px]",
			style: i
		});
		default: return /* @__PURE__ */ (0, V.jsx)("div", {
			className: "h-2 w-2 shrink-0 rounded-[2px]",
			style: r
		});
	}
}
function KU(e, t) {
	return t <= 1 ? { backgroundColor: `var(--color-${e}-0)` } : { background: `linear-gradient(to right, ${Array.from({ length: t }, (n, r) => `var(--color-${e}-${r}) ${r / (t - 1) * 100}%`).join(", ")})` };
}
function qU(e, t) {
	let n = {
		WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
		WebkitMaskComposite: "xor",
		mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
		maskComposite: "exclude"
	};
	return t <= 1 ? {
		backgroundColor: `var(--color-${e}-0)`,
		...n
	} : {
		background: `linear-gradient(to right, ${Array.from({ length: t }, (n, r) => `var(--color-${e}-${r}) ${r / (t - 1) * 100}%`).join(", ")})`,
		...n
	};
}
var JU = Up, YU = () => null, XU = {
	stiffness: 300,
	damping: 35,
	mass: .8
};
function ZU({ range: e, totalPoints: t, containerRef: n, commit: r }) {
	let i = B.useRef(null), [a, o] = B.useState(!1), s = (0, B.useCallback)((e) => !n.current || t <= 1 ? 0 : Math.round(e / n.current.getBoundingClientRect().width * (t - 1)), [t, n]), c = (0, B.useCallback)((t, n) => {
		t.preventDefault(), t.target.setPointerCapture(t.pointerId), i.current = {
			type: n,
			originX: t.clientX,
			originRange: { ...e }
		}, o(!0);
	}, [e]), l = (0, B.useCallback)((e) => {
		let n = i.current;
		if (!n) return;
		let a = s(e.clientX - n.originX), { type: o, originRange: c } = n;
		if (o === "left") r({
			startIndex: c.startIndex + a,
			endIndex: c.endIndex
		}, "left");
		else if (o === "right") r({
			startIndex: c.startIndex,
			endIndex: c.endIndex + a
		}, "right");
		else {
			let e = c.endIndex - c.startIndex, n = c.startIndex + a, i = n + e;
			n < 0 && (n = 0, i = e), i > t - 1 && (i = t - 1, n = Math.max(0, i - e)), r({
				startIndex: n,
				endIndex: i
			}, "middle");
		}
	}, [
		s,
		t,
		r
	]), u = (0, B.useCallback)((e) => {
		e.target.releasePointerCapture(e.pointerId), i.current = null, o(!1);
	}, []);
	return {
		isDragging: a,
		bind: (0, B.useCallback)((e) => ({
			onPointerDown: (t) => c(t, e),
			onPointerMove: l,
			onPointerUp: u
		}), [
			c,
			l,
			u
		])
	};
}
function QU({ data: e, chartConfig: t, dataKeys: n, xDataKey: r, variant: i = "area", height: a = 56, className: o, stacked: s = !1, strokeVariant: c = "solid", connectNulls: l = !1, barRadius: u, startIndex: d, endIndex: f, defaultStartIndex: p = 0, defaultEndIndex: m, onChange: h, formatLabel: g, curveType: _ = "monotone", minSpan: v = 2, showLabels: y = !0, skipStyle: b = !1 }) {
	let x = B.useRef(null), S = B.useMemo(() => n ?? Object.keys(t), [n, t]), C = e.length, w = B.useId().replace(/:/g, ""), T = d !== void 0 && f !== void 0, [E, D] = B.useState(() => ({
		startIndex: Math.max(0, Math.min(p, C - 1)),
		endIndex: Math.max(0, Math.min(m ?? C - 1, C - 1))
	})), O = B.useRef(E);
	(0, B.useEffect)(() => {
		T || D((e) => {
			let t = {
				startIndex: Math.min(e.startIndex, Math.max(0, C - 1)),
				endIndex: Math.min(e.endIndex, Math.max(0, C - 1))
			};
			return O.current = t, t;
		});
	}, [C, T]);
	let k = (0, B.useCallback)((e, t) => {
		let { startIndex: n, endIndex: r } = e, i = Math.max(0, C - 1);
		if (n = Math.max(0, Math.min(n, i)), r = Math.max(0, Math.min(r, i)), t === "left") {
			let e = Math.max(0, r - v);
			return n = Math.min(n, e), {
				startIndex: n,
				endIndex: r
			};
		}
		if (t === "right") {
			let e = Math.min(i, n + v);
			return r = Math.max(r, e), {
				startIndex: n,
				endIndex: r
			};
		}
		return r - n < v && (r = Math.min(n + v, i), r - n < v && (n = Math.max(0, r - v))), {
			startIndex: n,
			endIndex: r
		};
	}, [C, v]), { isDragging: A, bind: j } = ZU({
		range: E,
		totalPoints: C,
		containerRef: x,
		commit: (0, B.useCallback)((e, t) => {
			let n = k(e, t), r = O.current;
			(r.startIndex !== n.startIndex || r.endIndex !== n.endIndex) && (O.current = n, D(n), B.startTransition(() => {
				h?.(n);
			}));
		}, [k, h])
	}), M = E;
	(0, B.useEffect)(() => {
		if (T && !A) {
			let e = {
				startIndex: d,
				endIndex: f
			};
			D(e), O.current = e;
		}
	}, [
		T,
		d,
		f,
		A
	]);
	let N = C > 1 ? M.startIndex / (C - 1) * 100 : 0, ee = C > 1 ? M.endIndex / (C - 1) * 100 : 100, te = nn(N), ne = nn(ee);
	te.get() !== N && te.set(N), ne.get() !== ee && ne.set(ee);
	let re = sn(te, XU), P = sn(ne, XU), ie = cn(re, (e) => `${e}%`), ae = cn(P, (e) => `${e}%`), oe = cn(re, (e) => `${e}%`), se = cn(P, (e) => `${Math.max(0, 100 - e)}%`), ce = nn(`${Math.max(0, ee - N)}%`), le = (0, B.useCallback)(() => {
		ce.set(`${Math.max(0, P.get() - re.get())}%`);
	}, [
		re,
		P,
		ce
	]);
	tn(re, "change", le), tn(P, "change", le);
	let ue = (0, B.useCallback)((t) => {
		if (!r) return String(t);
		let n = e[t]?.[r];
		return g ? g(n, t) : String(n ?? t);
	}, [
		e,
		r,
		g
	]);
	return C === 0 ? null : /* @__PURE__ */ (0, V.jsxs)("div", {
		ref: x,
		"data-chart": b ? void 0 : w,
		className: EU("group relative select-none", o),
		style: { height: a },
		children: [
			!b && /* @__PURE__ */ (0, V.jsx)(FU, {
				id: w,
				config: t
			}),
			/* @__PURE__ */ (0, V.jsx)("div", {
				className: "absolute inset-0 overflow-hidden rounded-md",
				children: /* @__PURE__ */ (0, V.jsx)(eW, {
					data: e,
					keys: S,
					chartConfig: t,
					variant: i,
					curveType: _,
					chartId: w,
					stacked: s,
					strokeVariant: c === "animated-dashed" ? "dashed" : c,
					connectNulls: l,
					barRadius: u
				})
			}),
			/* @__PURE__ */ (0, V.jsx)(rt.div, {
				className: "bg-background/70 pointer-events-none absolute inset-y-0 left-0 rounded-l-md backdrop-blur-[2px]",
				style: { width: oe }
			}),
			/* @__PURE__ */ (0, V.jsx)(rt.div, {
				className: "bg-background/70 pointer-events-none absolute inset-y-0 right-0 rounded-r-md backdrop-blur-[2px]",
				style: { width: se }
			}),
			/* @__PURE__ */ (0, V.jsx)(rt.div, {
				className: "absolute inset-y-0 cursor-grab touch-none rounded-sm border active:cursor-grabbing",
				style: {
					left: ie,
					width: ce
				},
				...j("middle")
			}),
			/* @__PURE__ */ (0, V.jsx)($U, {
				side: "left",
				position: ie,
				label: y ? ue(M.startIndex) : void 0,
				bind: j("left")
			}),
			/* @__PURE__ */ (0, V.jsx)($U, {
				side: "right",
				position: ae,
				label: y ? ue(M.endIndex) : void 0,
				bind: j("right")
			})
		]
	});
}
function $U({ side: e, position: t, label: n, bind: r }) {
	let i = e === "left";
	return /* @__PURE__ */ (0, V.jsxs)(rt.div, {
		className: "absolute inset-y-0 z-10",
		style: { left: t },
		children: [/* @__PURE__ */ (0, V.jsx)("div", {
			className: EU("group absolute inset-y-0 flex w-3 cursor-ew-resize touch-none items-center justify-center after:absolute after:inset-y-0 after:-left-4 after:w-11 after:content-['']", i ? "" : "-translate-x-full"),
			...r,
			children: /* @__PURE__ */ (0, V.jsx)("div", {
				className: EU("bg-muted-foreground group-hover:bg-foreground relative flex h-4 w-1.5 items-center justify-center rounded-md transition-colors", i ? "-left-[5.5px]" : "-right-[5.5px]"),
				children: /* @__PURE__ */ (0, V.jsxs)("div", {
					className: "flex flex-col gap-[2px]",
					children: [
						/* @__PURE__ */ (0, V.jsx)("div", { className: "bg-background/70 h-[2px] w-[2px] rounded-full" }),
						/* @__PURE__ */ (0, V.jsx)("div", { className: "bg-background/70 h-[2px] w-[2px] rounded-full" }),
						/* @__PURE__ */ (0, V.jsx)("div", { className: "bg-background/70 h-[2px] w-[2px] rounded-full" })
					]
				})
			})
		}), n && /* @__PURE__ */ (0, V.jsx)("div", {
			className: EU("bg-foreground text-background pointer-events-none absolute -bottom-3 -translate-y-1/2 rounded-[3px] px-1 py-px text-[8px] leading-tight font-medium whitespace-nowrap opacity-0 group-hover:opacity-100", i ? "left-1.5" : "right-1.5"),
			children: n
		})]
	});
}
function eW({ data: e, keys: t, chartConfig: n, variant: r, curveType: i, chartId: a, stacked: o, strokeVariant: s = "solid", connectNulls: c = !1, barRadius: l }) {
	let u = B.useMemo(() => Object.entries(n).filter(([e]) => t.includes(e)).map(([e, t]) => ({
		dataKey: e,
		colorsCount: LU(t)
	})), [n, t]), d = s === "dashed" || s === "animated-dashed" ? "4 4" : void 0, f = /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [r === "area" && /* @__PURE__ */ (0, V.jsxs)("linearGradient", {
		id: `${a}-zm-vertical-fade`,
		x1: "0",
		y1: "0",
		x2: "0",
		y2: "1",
		children: [/* @__PURE__ */ (0, V.jsx)("stop", {
			offset: "0%",
			stopColor: "white",
			stopOpacity: .15
		}), /* @__PURE__ */ (0, V.jsx)("stop", {
			offset: "100%",
			stopColor: "white",
			stopOpacity: 0
		})]
	}), u.map(({ dataKey: e, colorsCount: t }) => {
		let n = t === 1 ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${e}-0)`
		}), /* @__PURE__ */ (0, V.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${e}-0)`
		})] }) : Array.from({ length: t }, (n, r) => /* @__PURE__ */ (0, V.jsx)("stop", {
			offset: `${r / (t - 1) * 100}%`,
			stopColor: `var(--color-${e}-${r}, var(--color-${e}-0))`
		}, r));
		return /* @__PURE__ */ (0, V.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)("linearGradient", {
			id: `${a}-zm-${e}`,
			x1: "0",
			y1: "0",
			x2: "0",
			y2: "1",
			children: n
		}), r === "area" && /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)("mask", {
			id: `${a}-zm-fill-mask-${e}`,
			children: /* @__PURE__ */ (0, V.jsx)("rect", {
				width: "100%",
				height: "100%",
				fill: `url(#${a}-zm-vertical-fade)`
			})
		}), /* @__PURE__ */ (0, V.jsx)("pattern", {
			id: `${a}-zm-fill-${e}`,
			patternUnits: "userSpaceOnUse",
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, V.jsx)("rect", {
				width: "100%",
				height: "100%",
				fill: `url(#${a}-zm-${e})`,
				mask: `url(#${a}-zm-fill-mask-${e})`
			})
		})] })] }, e);
	})] });
	if (r === "line") return /* @__PURE__ */ (0, V.jsx)(Of, {
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, V.jsxs)(tU, {
			data: e,
			margin: {
				top: 4,
				right: 0,
				bottom: 0,
				left: 0
			},
			children: [/* @__PURE__ */ (0, V.jsx)("defs", { children: f }), t.map((e) => /* @__PURE__ */ (0, V.jsx)(TR, {
				type: i,
				dataKey: e,
				stroke: `url(#${a}-zm-${e})`,
				strokeWidth: 1,
				strokeOpacity: .5,
				strokeDasharray: d,
				connectNulls: c,
				dot: !1,
				activeDot: !1,
				isAnimationActive: !1
			}, e))]
		})
	});
	if (r === "bar") {
		let n = l ?? 3;
		return /* @__PURE__ */ (0, V.jsx)(Of, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, V.jsxs)(rU, {
				data: e,
				margin: {
					top: 2,
					right: 0,
					bottom: 0,
					left: 0
				},
				barGap: 2,
				barSize: 14,
				children: [/* @__PURE__ */ (0, V.jsx)("defs", { children: f }), t.map((e) => /* @__PURE__ */ (0, V.jsx)(DB, {
					dataKey: e,
					fill: `url(#${a}-zm-${e})`,
					fillOpacity: .35,
					stackId: o ? "zm-stack" : void 0,
					isAnimationActive: !1,
					radius: [
						n,
						n,
						n,
						n
					]
				}, e))]
			})
		});
	}
	return /* @__PURE__ */ (0, V.jsx)(Of, {
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, V.jsxs)(TU, {
			data: e,
			margin: {
				top: 4,
				right: 0,
				bottom: 0,
				left: 0
			},
			children: [/* @__PURE__ */ (0, V.jsx)("defs", { children: f }), t.map((e) => /* @__PURE__ */ (0, V.jsx)(vz, {
				type: i,
				dataKey: e,
				stroke: `url(#${a}-zm-${e})`,
				fill: `url(#${a}-zm-fill-${e})`,
				strokeWidth: 1,
				strokeOpacity: .5,
				strokeDasharray: d,
				connectNulls: c,
				fillOpacity: 1,
				stackId: o ? "zm-stack" : void 0,
				dot: !1,
				activeDot: !1,
				isAnimationActive: !1
			}, e))]
		})
	});
}
function tW({ data: e, defaultStartIndex: t = 0, defaultEndIndex: n }) {
	let [r, i] = B.useState({
		startIndex: t,
		endIndex: n ?? Math.max(0, e.length - 1)
	}), a = B.useDeferredValue(r);
	return (0, B.useEffect)(() => {
		i({
			startIndex: 0,
			endIndex: Math.max(0, e.length - 1)
		});
	}, [e.length]), {
		range: r,
		visibleData: B.useMemo(() => e.slice(a.startIndex, a.endIndex + 1), [
			e,
			a.startIndex,
			a.endIndex
		]),
		brushProps: {
			startIndex: r.startIndex,
			endIndex: r.endIndex,
			onChange: i
		}
	};
}
var nW = {
	dots: ({ id: e }) => /* @__PURE__ */ (0, V.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "20",
		height: "20",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, V.jsx)("circle", {
			className: "text-border dark:text-border",
			cx: "2",
			cy: "2",
			r: "1",
			fill: "currentColor"
		})
	}),
	grid: ({ id: e }) => /* @__PURE__ */ (0, V.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "20",
		height: "20",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, V.jsx)("path", {
			className: "text-border dark:text-border",
			d: "M 20 0 L 0 0 0 20",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "0.5"
		})
	}),
	plus: ({ id: e }) => /* @__PURE__ */ (0, V.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "16",
		height: "16",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, V.jsx)("path", {
			className: "text-border dark:text-border",
			d: "M 8 4 L 8 12 M 4 8 L 12 8",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "0.5",
			strokeLinecap: "round"
		})
	}),
	bubbles: ({ id: e }) => /* @__PURE__ */ (0, V.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "100",
		height: "100",
		patternUnits: "userSpaceOnUse",
		patternTransform: "scale(0.6667)",
		children: /* @__PURE__ */ (0, V.jsx)("path", {
			className: "text-border dark:text-border",
			d: "M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z",
			fill: "currentColor",
			fillOpacity: "0.4",
			fillRule: "evenodd"
		})
	}),
	"cross-hatch": ({ id: e }) => /* @__PURE__ */ (0, V.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "20",
		height: "20",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, V.jsx)("path", {
			className: "text-border/60 dark:text-border/50",
			d: "M 0 0 L 20 20 M 20 0 L 0 20",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "0.5"
		})
	}),
	"diagonal-lines": ({ id: e }) => /* @__PURE__ */ (0, V.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "6",
		height: "6",
		patternUnits: "userSpaceOnUse",
		patternTransform: "rotate(45)",
		children: /* @__PURE__ */ (0, V.jsx)("line", {
			className: "text-border dark:text-border",
			x1: "0",
			y1: "0",
			x2: "0",
			y2: "6",
			stroke: "currentColor",
			strokeWidth: "0.5"
		})
	}),
	"falling-triangles": ({ id: e }) => /* @__PURE__ */ (0, V.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "18",
		height: "36",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, V.jsx)("path", {
			className: "text-border dark:text-border",
			d: "M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z",
			transform: "scale(0.5)",
			fill: "currentColor",
			fillOpacity: "0.4"
		})
	}),
	"4-pointed-star": ({ id: e }) => /* @__PURE__ */ (0, V.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "16",
		height: "16",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, V.jsx)("polygon", {
			className: "text-border dark:text-border",
			fillRule: "evenodd",
			points: "5 3 8 4 5 5 4 8 3 5 0 4 3 3 4 0 5 3",
			fill: "currentColor",
			fillOpacity: "0.4"
		})
	}),
	"tiny-checkers": ({ id: e }) => /* @__PURE__ */ (0, V.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "8",
		height: "8",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, V.jsx)("path", {
			className: "text-border dark:text-border",
			fillRule: "evenodd",
			d: "M0 0h4v4H0V0zm4 4h4v4H4V4z",
			fill: "currentColor",
			fillOpacity: "0.2"
		})
	}),
	"overlapping-circles": ({ id: e }) => /* @__PURE__ */ (0, V.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "40",
		height: "40",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, V.jsx)("path", {
			className: "text-border dark:text-border",
			fillRule: "evenodd",
			d: "M25 25c0-2.762 2.238-5 5-5s5 2.238 5 5-2.238 5-5 5c0 2.762-2.238 5-5 5s-5-2.238-5-5 2.238-5 5-5zM5 5c0-2.762 2.238-5 5-5s5 2.238 5 5-2.238 5-5 5c0 2.762-2.238 5-5 5S0 12.762 0 10s2.238-5 5-5zm5 4c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm20 20c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4z",
			fill: "currentColor",
			fillOpacity: "0.4"
		})
	}),
	"wiggle-lines": ({ id: e }) => /* @__PURE__ */ (0, V.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "52",
		height: "26",
		patternUnits: "userSpaceOnUse",
		patternTransform: "scale(0.6)",
		children: /* @__PURE__ */ (0, V.jsx)("path", {
			className: "text-border dark:text-border",
			d: "M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z",
			fill: "currentColor",
			fillOpacity: "0.4"
		})
	})
};
function rW({ variant: e }) {
	let t = (0, B.useId)().replace(/:/g, ""), n = `${t}-bg-${e}`, r = `${t}-bg-edge-fade`, i = `${t}-bg-blur`, a = nW[e];
	return /* @__PURE__ */ (0, V.jsxs)(YO, {
		zIndex: -1,
		children: [/* @__PURE__ */ (0, V.jsxs)("defs", { children: [
			/* @__PURE__ */ (0, V.jsx)(a, { id: n }),
			/* @__PURE__ */ (0, V.jsx)("filter", {
				id: i,
				children: /* @__PURE__ */ (0, V.jsx)("feGaussianBlur", { stdDeviation: "25" })
			}),
			/* @__PURE__ */ (0, V.jsx)("mask", {
				id: r,
				maskUnits: "userSpaceOnUse",
				children: /* @__PURE__ */ (0, V.jsx)("rect", {
					x: "8%",
					y: "20%",
					width: "85%",
					height: "60%",
					fill: "white",
					filter: `url(#${i})`
				})
			})
		] }), /* @__PURE__ */ (0, V.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${n})`,
			mask: `url(#${r})`
		})]
	});
}
// src/react/evilcharts/registry/charts/recharts-bar-chart.tsx
var iW = 2, aW = "loading", oW = 2e3, sW = "evil-stacked", cW = .5, lW = .05, uW = [
	0,
	.7,
	.5,
	1
], dW = (0, B.createContext)(null);
function fW() {
	let e = (0, B.use)(dW);
	if (!e) throw Error("Bar chart parts (<Bar />, <XAxis />, …) must be used within <EvilBarChart />");
	return e;
}
function pW({ config: e, data: t, children: n, className: r, chartProps: i, stackType: a = "default", layout: o = "vertical", barRadius: s = iW, animationType: c = "left-to-right", barGap: l, barCategoryGap: u, backgroundVariant: d, defaultSelectedDataKey: f = null, onSelectionChange: p, isLoading: m = !1, loadingBars: h, xDataKey: g }) {
	let _ = (0, B.useId)().replace(/:/g, ""), [v] = (0, B.useState)(() => Date.now()), [y, b] = (0, B.useState)(f), [x, S] = (0, B.useState)(!1), { loadingData: C, onShimmerExit: w } = NW(m, h), { visibleData: T, brushProps: E } = tW({ data: t }), D = (0, B.useMemo)(() => {
		let e = B.Children.toArray(n), t = e.find((e) => (0, B.isValidElement)(e) && e.type === YU), r = (0, B.isValidElement)(t) ? t.props : {};
		return {
			slot: {
				present: (0, B.isValidElement)(t),
				height: r.height,
				formatLabel: r.formatLabel,
				onChange: r.onChange
			},
			chartChildren: e.filter((e) => !((0, B.isValidElement)(e) && e.type === YU))
		};
	}, [n]), O = D.slot.present, k = a === "stacked" || a === "percent", A = o === "horizontal", j = O && !m ? T : t, M = (0, B.useCallback)((e) => {
		b(e), p?.(e);
	}, [p]), N = (0, B.useMemo)(() => ({
		config: e,
		isStacked: k,
		isHorizontal: A,
		isLoading: m,
		barRadius: s,
		animationType: c,
		introStartedAt: v,
		dataLength: j.length,
		selectedDataKey: y,
		selectDataKey: M,
		isMouseInChart: x
	}), [
		e,
		k,
		A,
		m,
		s,
		c,
		v,
		j.length,
		y,
		M,
		x
	]);
	return /* @__PURE__ */ (0, V.jsx)(dW, {
		value: N,
		children: /* @__PURE__ */ (0, V.jsxs)(MU, {
			className: r,
			config: e,
			footer: O && !m && /* @__PURE__ */ (0, V.jsx)(QU, {
				data: t,
				chartConfig: e,
				xDataKey: g,
				variant: "bar",
				barRadius: s,
				height: D.slot.height,
				formatLabel: D.slot.formatLabel,
				stacked: k,
				skipStyle: !0,
				className: "mt-1",
				...E,
				onChange: (e) => {
					E.onChange(e), D.slot.onChange?.(e);
				}
			}),
			children: [/* @__PURE__ */ (0, V.jsx)(NU, { isLoading: m }), /* @__PURE__ */ (0, V.jsxs)(rU, {
				id: _,
				accessibilityLayer: !0,
				layout: A ? "vertical" : "horizontal",
				data: m ? C : j,
				barGap: l,
				barCategoryGap: u,
				stackOffset: a === "percent" ? "expand" : void 0,
				onMouseEnter: () => S(!0),
				onMouseLeave: () => S(!1),
				...i,
				children: [
					d && /* @__PURE__ */ (0, V.jsx)(rW, { variant: d }),
					/* @__PURE__ */ (0, V.jsx)(QF, { color: "white" }),
					D.chartChildren,
					m && /* @__PURE__ */ (0, V.jsx)(PW, {
						chartId: _,
						onShimmerExit: w
					})
				]
			})]
		})
	});
}
function mW({ dataKey: e, variant: t = "default", radius: n, animationType: r, isClickable: i = !1, enableHoverHighlight: a = !1, glowing: o = !1, bufferBar: s = !1, barProps: c }) {
	let { config: l, isStacked: u, isHorizontal: d, isLoading: f, barRadius: p, animationType: m, introStartedAt: h, dataLength: g, selectedDataKey: _, selectDataKey: v, isMouseInChart: y } = fW(), b = (0, B.useId)().replace(/:/g, ""), x = Mt();
	if (f) return null;
	let S = n ?? p, C = _ === e, w = x ? "none" : r ?? m, T = {
		id: b,
		dataKey: e,
		variant: t,
		barRadius: S,
		glowing: o,
		bufferBar: s,
		isClickable: i,
		enableHoverHighlight: a,
		isMouseInChart: y,
		isHorizontal: d,
		introStartedAt: h,
		selectedDataKey: _,
		dataLength: g,
		onClick: () => {
			i && v(C ? null : e);
		}
	};
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(DB, {
		dataKey: e,
		stackId: u ? sW : void 0,
		fill: `url(#${b}-colors-${e})`,
		radius: S,
		isAnimationActive: !1,
		style: i || a ? { cursor: "pointer" } : void 0,
		shape: (e) => /* @__PURE__ */ (0, V.jsx)(bW, {
			...e,
			...T,
			animationType: w
		}),
		activeBar: (e) => /* @__PURE__ */ (0, V.jsx)(bW, {
			...e,
			...T,
			animationType: "none"
		}),
		...c
	}), /* @__PURE__ */ (0, V.jsxs)("defs", { children: [
		/* @__PURE__ */ (0, V.jsx)(wW, {
			id: b,
			dataKey: e,
			config: l
		}),
		t === "hatched" && /* @__PURE__ */ (0, V.jsx)(TW, {
			id: b,
			dataKey: e
		}),
		t === "duotone" && /* @__PURE__ */ (0, V.jsx)(DW, {
			id: b,
			dataKey: e,
			config: l
		}),
		t === "duotone-reverse" && /* @__PURE__ */ (0, V.jsx)(OW, {
			id: b,
			dataKey: e,
			config: l
		}),
		t === "gradient" && /* @__PURE__ */ (0, V.jsx)(kW, {
			id: b,
			dataKey: e
		}),
		t === "stripped" && /* @__PURE__ */ (0, V.jsx)(AW, {
			id: b,
			dataKey: e
		}),
		s && /* @__PURE__ */ (0, V.jsx)(EW, {
			id: b,
			dataKey: e
		}),
		o && /* @__PURE__ */ (0, V.jsx)(jW, {
			id: b,
			dataKey: e
		})
	] })] });
}
function hW({ tickLine: e = !1, axisLine: t = !1, tickMargin: n = 8, minTickGap: r = 8, type: i, ...a }) {
	let { isLoading: o, isHorizontal: s } = fW();
	return o ? null : /* @__PURE__ */ (0, V.jsx)(JB, {
		tickLine: e,
		axisLine: t,
		tickMargin: n,
		minTickGap: r,
		type: i ?? (s ? "number" : "category"),
		...a
	});
}
function gW({ tickLine: e = !1, axisLine: t = !1, tickMargin: n = 8, minTickGap: r = 8, width: i = "auto", type: a, ...o }) {
	let { isLoading: s, isHorizontal: c } = fW();
	return s ? null : /* @__PURE__ */ (0, V.jsx)(lV, {
		tickLine: e,
		axisLine: t,
		tickMargin: n,
		minTickGap: r,
		width: i,
		type: a ?? (c ? "category" : "number"),
		...o
	});
}
function _W({ strokeDasharray: e = "3 3", vertical: t, horizontal: n, ...r }) {
	let { isHorizontal: i } = fW();
	return /* @__PURE__ */ (0, V.jsx)(xL, {
		strokeDasharray: e,
		vertical: t ?? i,
		horizontal: n ?? !i,
		...r
	});
}
function vW({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, selectedDataKey: i } = fW();
	return r ? null : /* @__PURE__ */ (0, V.jsx)(UU, {
		cursor: !1,
		defaultIndex: n,
		content: /* @__PURE__ */ (0, V.jsx)(VU, {
			selected: i,
			roundness: t,
			variant: e
		})
	});
}
function yW({ variant: e, align: t = "right", verticalAlign: n = "top", isClickable: r = !1 }) {
	let { selectedDataKey: i, selectDataKey: a } = fW();
	return /* @__PURE__ */ (0, V.jsx)(JU, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, V.jsx)(WU, {
			selected: i,
			onSelectChange: a,
			isClickable: r,
			variant: e
		})
	});
}
var bW = (e) => {
	let { x: t = 0, y: n = 0, width: r = 0, height: i = 0, id: a, dataKey: o, variant: s, barRadius: c, glowing: l, bufferBar: u, isClickable: d, enableHoverHighlight: f, isMouseInChart: p, isHorizontal: m = !1, animationType: h = "none", introStartedAt: g = 0, selectedDataKey: _, isActive: v, dataLength: y = 0, onClick: b } = e, x = typeof e.index == "number" ? e.index : -1, S = u && y > 0 && x === y - 1, C = s === "stripped", w = xW(h, x, y, m, g), T = S ? `url(#${a}-buffer-hatched-${o})` : SW(s, a, o), E = l ? `url(#${a}-bar-glow-${o})` : void 0, D = CW({
		isClickable: d,
		selectedDataKey: _,
		dataKey: o,
		enableHoverHighlight: f,
		isMouseInChart: p,
		isActive: v
	}), O = d || f ? { cursor: "pointer" } : void 0, k = C ? [
		c,
		c,
		0,
		0
	] : c, A = /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(yg, {
		x: t,
		y: n,
		width: r,
		opacity: D,
		height: Math.max(0, i - 3),
		radius: k,
		fill: T,
		filter: E,
		stroke: S ? `url(#${a}-colors-${o})` : void 0,
		strokeWidth: S ? 1 : void 0
	}), C && /* @__PURE__ */ (0, V.jsx)(yg, {
		x: t,
		y: n - 4,
		width: r,
		height: 2,
		radius: 1,
		fill: `url(#${a}-colors-${o})`
	})] });
	return /* @__PURE__ */ (0, V.jsxs)("g", {
		style: O,
		onClick: b,
		children: [/* @__PURE__ */ (0, V.jsx)(yg, {
			...e,
			fill: "transparent"
		}), w ? /* @__PURE__ */ (0, V.jsx)(rt.g, {
			initial: w.initial,
			animate: w.animate,
			transition: w.transition,
			style: w.style,
			children: A
		}) : A]
	});
}, xW = (e, t, n, r, i) => {
	if (e === "none" || t < 0 || n <= 0) return null;
	let a = n - 1, o = a / 2, s;
	switch (e) {
		case "right-to-left":
			s = a - t;
			break;
		case "center-out":
			s = Math.abs(t - o);
			break;
		case "edges-in":
			s = o - Math.abs(t - o);
			break;
		default: s = t;
	}
	let c = s * lW * 1e3, l = cW * 1e3, u = c + l, d = Date.now() - i;
	if (d >= u) return null;
	let f = d <= c ? 0 : (d - c) / l, p = {
		duration: (u - Math.max(d, c)) / 1e3,
		ease: uW,
		delay: Math.max(0, c - d) / 1e3
	};
	return r ? {
		initial: { scaleX: f },
		animate: { scaleX: 1 },
		transition: p,
		style: { originX: 0 }
	} : {
		initial: { scaleY: f },
		animate: { scaleY: 1 },
		transition: p,
		style: { originY: 1 }
	};
}, SW = (e, t, n) => {
	switch (e) {
		case "hatched": return `url(#${t}-hatched-${n})`;
		case "duotone": return `url(#${t}-duotone-${n})`;
		case "duotone-reverse": return `url(#${t}-duotone-reverse-${n})`;
		case "gradient": return `url(#${t}-gradient-${n})`;
		case "stripped": return `url(#${t}-stripped-${n})`;
		default: return `url(#${t}-colors-${n})`;
	}
}, CW = ({ isClickable: e, selectedDataKey: t, dataKey: n, enableHoverHighlight: r, isMouseInChart: i, isActive: a }) => {
	let o = e && t !== null ? t === null || t === n ? 1 : .15 : 1;
	return r && i ? a ? o : o * .3 : o;
}, wW = ({ id: e, dataKey: t, config: n }) => {
	let r = LU(n[t] ?? {});
	return /* @__PURE__ */ (0, V.jsx)("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "0",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${t}-0)`
		}), /* @__PURE__ */ (0, V.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${t}-0)`
		})] }) : Array.from({ length: r }, (e, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ (0, V.jsx)("stop", {
				offset: i,
				stopColor: `var(--color-${t}-${n}, var(--color-${t}-0))`
			}, i);
		})
	});
}, TW = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
	/* @__PURE__ */ (0, V.jsxs)("pattern", {
		id: `${e}-hatched-mask-pattern`,
		x: "0",
		y: "0",
		width: "5",
		height: "5",
		patternUnits: "userSpaceOnUse",
		patternTransform: "rotate(-45)",
		children: [/* @__PURE__ */ (0, V.jsx)("rect", {
			width: "5",
			height: "5",
			fill: "white",
			fillOpacity: .3
		}), /* @__PURE__ */ (0, V.jsx)("rect", {
			width: "1.5",
			height: "5",
			fill: "white",
			fillOpacity: 1
		})]
	}),
	/* @__PURE__ */ (0, V.jsx)("mask", {
		id: `${e}-hatched-mask-${t}`,
		children: /* @__PURE__ */ (0, V.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-hatched-mask-pattern)`
		})
	}),
	/* @__PURE__ */ (0, V.jsx)("pattern", {
		id: `${e}-hatched-${t}`,
		patternUnits: "userSpaceOnUse",
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, V.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-colors-${t})`,
			mask: `url(#${e}-hatched-mask-${t})`
		})
	})
] }), EW = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
	/* @__PURE__ */ (0, V.jsxs)("pattern", {
		id: `${e}-buffer-hatched-mask-pattern`,
		x: "0",
		y: "0",
		width: "5",
		height: "5",
		patternUnits: "userSpaceOnUse",
		patternTransform: "rotate(-45)",
		children: [/* @__PURE__ */ (0, V.jsx)("rect", {
			width: "5",
			height: "5",
			fill: "black",
			fillOpacity: 0
		}), /* @__PURE__ */ (0, V.jsx)("rect", {
			width: "1",
			height: "5",
			fill: "white",
			fillOpacity: 1
		})]
	}),
	/* @__PURE__ */ (0, V.jsx)("mask", {
		id: `${e}-buffer-hatched-mask-${t}`,
		children: /* @__PURE__ */ (0, V.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-buffer-hatched-mask-pattern)`
		})
	}),
	/* @__PURE__ */ (0, V.jsx)("pattern", {
		id: `${e}-buffer-hatched-${t}`,
		patternUnits: "userSpaceOnUse",
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, V.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-colors-${t})`,
			mask: `url(#${e}-buffer-hatched-mask-${t})`
		})
	})
] }), DW = ({ id: e, dataKey: t, config: n }) => {
	let r = LU(n[t] ?? {});
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
		/* @__PURE__ */ (0, V.jsxs)("linearGradient", {
			id: `${e}-duotone-mask-gradient-${t}`,
			gradientUnits: "objectBoundingBox",
			x1: "0",
			y1: "0",
			x2: "1",
			y2: "0",
			children: [/* @__PURE__ */ (0, V.jsx)("stop", {
				offset: "50%",
				stopColor: "white",
				stopOpacity: .4
			}), /* @__PURE__ */ (0, V.jsx)("stop", {
				offset: "50%",
				stopColor: "white",
				stopOpacity: 1
			})]
		}),
		/* @__PURE__ */ (0, V.jsx)("linearGradient", {
			id: `${e}-duotone-colors-${t}`,
			gradientUnits: "objectBoundingBox",
			x1: "0",
			y1: "0",
			x2: "0",
			y2: "1",
			children: r === 1 ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)("stop", {
				offset: "0%",
				stopColor: `var(--color-${t}-0)`
			}), /* @__PURE__ */ (0, V.jsx)("stop", {
				offset: "100%",
				stopColor: `var(--color-${t}-0)`
			})] }) : Array.from({ length: r }, (e, n) => {
				let i = `${n / (r - 1) * 100}%`;
				return /* @__PURE__ */ (0, V.jsx)("stop", {
					offset: i,
					stopColor: `var(--color-${t}-${n}, var(--color-${t}-0))`
				}, i);
			})
		}),
		/* @__PURE__ */ (0, V.jsx)("mask", {
			id: `${e}-duotone-mask-${t}`,
			maskContentUnits: "objectBoundingBox",
			children: /* @__PURE__ */ (0, V.jsx)("rect", {
				x: "0",
				y: "0",
				width: "1",
				height: "1",
				fill: `url(#${e}-duotone-mask-gradient-${t})`
			})
		}),
		/* @__PURE__ */ (0, V.jsx)("pattern", {
			id: `${e}-duotone-${t}`,
			patternUnits: "objectBoundingBox",
			patternContentUnits: "objectBoundingBox",
			width: "1",
			height: "1",
			children: /* @__PURE__ */ (0, V.jsx)("rect", {
				x: "0",
				y: "0",
				width: "1",
				height: "1",
				fill: `url(#${e}-duotone-colors-${t})`,
				mask: `url(#${e}-duotone-mask-${t})`
			})
		})
	] });
}, OW = ({ id: e, dataKey: t, config: n }) => {
	let r = LU(n[t] ?? {});
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
		/* @__PURE__ */ (0, V.jsxs)("linearGradient", {
			id: `${e}-duotone-reverse-mask-gradient-${t}`,
			gradientUnits: "objectBoundingBox",
			x1: "0",
			y1: "0",
			x2: "1",
			y2: "0",
			children: [/* @__PURE__ */ (0, V.jsx)("stop", {
				offset: "50%",
				stopColor: "white",
				stopOpacity: 1
			}), /* @__PURE__ */ (0, V.jsx)("stop", {
				offset: "50%",
				stopColor: "white",
				stopOpacity: .4
			})]
		}),
		/* @__PURE__ */ (0, V.jsx)("linearGradient", {
			id: `${e}-duotone-reverse-colors-${t}`,
			gradientUnits: "objectBoundingBox",
			x1: "0",
			y1: "0",
			x2: "0",
			y2: "1",
			children: r === 1 ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)("stop", {
				offset: "0%",
				stopColor: `var(--color-${t}-0)`
			}), /* @__PURE__ */ (0, V.jsx)("stop", {
				offset: "100%",
				stopColor: `var(--color-${t}-0)`
			})] }) : Array.from({ length: r }, (e, n) => {
				let i = `${n / (r - 1) * 100}%`;
				return /* @__PURE__ */ (0, V.jsx)("stop", {
					offset: i,
					stopColor: `var(--color-${t}-${n}, var(--color-${t}-0))`
				}, i);
			})
		}),
		/* @__PURE__ */ (0, V.jsx)("mask", {
			id: `${e}-duotone-reverse-mask-${t}`,
			maskContentUnits: "objectBoundingBox",
			children: /* @__PURE__ */ (0, V.jsx)("rect", {
				x: "0",
				y: "0",
				width: "1",
				height: "1",
				fill: `url(#${e}-duotone-reverse-mask-gradient-${t})`
			})
		}),
		/* @__PURE__ */ (0, V.jsx)("pattern", {
			id: `${e}-duotone-reverse-${t}`,
			patternUnits: "objectBoundingBox",
			patternContentUnits: "objectBoundingBox",
			width: "1",
			height: "1",
			children: /* @__PURE__ */ (0, V.jsx)("rect", {
				x: "0",
				y: "0",
				width: "1",
				height: "1",
				fill: `url(#${e}-duotone-reverse-colors-${t})`,
				mask: `url(#${e}-duotone-reverse-mask-${t})`
			})
		})
	] });
}, kW = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
	/* @__PURE__ */ (0, V.jsxs)("linearGradient", {
		id: `${e}-gradient-mask-gradient`,
		x1: "0",
		y1: "0",
		x2: "0",
		y2: "1",
		children: [/* @__PURE__ */ (0, V.jsx)("stop", {
			offset: "20%",
			stopColor: "white",
			stopOpacity: 1
		}), /* @__PURE__ */ (0, V.jsx)("stop", {
			offset: "90%",
			stopColor: "white",
			stopOpacity: 0
		})]
	}),
	/* @__PURE__ */ (0, V.jsx)("mask", {
		id: `${e}-gradient-mask-${t}`,
		children: /* @__PURE__ */ (0, V.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-gradient-mask-gradient)`
		})
	}),
	/* @__PURE__ */ (0, V.jsx)("pattern", {
		id: `${e}-gradient-${t}`,
		patternUnits: "userSpaceOnUse",
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, V.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-colors-${t})`,
			mask: `url(#${e}-gradient-mask-${t})`
		})
	})
] }), AW = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
	/* @__PURE__ */ (0, V.jsxs)("linearGradient", {
		id: `${e}-stripped-mask-gradient`,
		x1: "0",
		y1: "0",
		x2: "0",
		y2: "1",
		children: [/* @__PURE__ */ (0, V.jsx)("stop", {
			offset: "0%",
			stopColor: "white",
			stopOpacity: .2
		}), /* @__PURE__ */ (0, V.jsx)("stop", {
			offset: "100%",
			stopColor: "white",
			stopOpacity: .2
		})]
	}),
	/* @__PURE__ */ (0, V.jsx)("mask", {
		id: `${e}-stripped-mask-${t}`,
		children: /* @__PURE__ */ (0, V.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-stripped-mask-gradient)`
		})
	}),
	/* @__PURE__ */ (0, V.jsx)("pattern", {
		id: `${e}-stripped-${t}`,
		patternUnits: "userSpaceOnUse",
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, V.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-colors-${t})`,
			mask: `url(#${e}-stripped-mask-${t})`
		})
	})
] }), jW = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, V.jsxs)("filter", {
	id: `${e}-bar-glow-${t}`,
	x: "-100%",
	y: "-100%",
	width: "300%",
	height: "300%",
	children: [
		/* @__PURE__ */ (0, V.jsx)("feGaussianBlur", {
			in: "SourceGraphic",
			stdDeviation: "8",
			result: "blur"
		}),
		/* @__PURE__ */ (0, V.jsx)("feColorMatrix", {
			in: "blur",
			type: "matrix",
			values: "1 0 0 0 0\n                0 1 0 0 0\n                0 0 1 0 0\n                0 0 0 0.5 0",
			result: "glow"
		}),
		/* @__PURE__ */ (0, V.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, V.jsx)("feMergeNode", { in: "glow" }), /* @__PURE__ */ (0, V.jsx)("feMergeNode", { in: "SourceGraphic" })] })
	]
}), MW = (e = 17, t = .05, n = .9) => Array.from({ length: e }, (r, i) => {
	let a = i / (e - 1), o = t + Math.sin(a * Math.PI) ** 2 * (n - t);
	return {
		offset: `${(a * 100).toFixed(0)}%`,
		opacity: Number(o.toFixed(3))
	};
});
function NW(e, t = 12) {
	let [n, r] = (0, B.useState)(!1), i = (0, B.useCallback)(() => {
		e && r((e) => !e);
	}, [e]);
	return {
		loadingData: (0, B.useMemo)(() => RU(t, 20, 80), [t, n]),
		onShimmerExit: i
	};
}
var PW = ({ chartId: e, onShimmerExit: t }) => /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(DB, {
	dataKey: aW,
	fill: "currentColor",
	fillOpacity: .15,
	radius: iW,
	isAnimationActive: !1,
	legendType: "none",
	style: { mask: `url(#${e}-loading-mask)` }
}), /* @__PURE__ */ (0, V.jsx)("defs", { children: /* @__PURE__ */ (0, V.jsx)(FW, {
	chartId: e,
	onShimmerExit: t
}) })] }), FW = ({ chartId: e, onShimmerExit: t }) => {
	let n = MW(), r = (0, B.useRef)(-1);
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
		/* @__PURE__ */ (0, V.jsx)("linearGradient", {
			id: `${e}-loading-mask-gradient`,
			x1: "0",
			y1: "0",
			x2: "1",
			y2: "0",
			children: n.map(({ offset: e, opacity: t }) => /* @__PURE__ */ (0, V.jsx)("stop", {
				offset: e,
				stopColor: "white",
				stopOpacity: t
			}, e))
		}),
		/* @__PURE__ */ (0, V.jsx)("pattern", {
			id: `${e}-loading-mask-pattern`,
			patternUnits: "objectBoundingBox",
			patternContentUnits: "objectBoundingBox",
			patternTransform: "rotate(25)",
			width: 3,
			height: "1",
			x: "0",
			y: "0",
			children: /* @__PURE__ */ (0, V.jsx)(rt.rect, {
				y: "0",
				width: "1",
				height: "1",
				fill: `url(#${e}-loading-mask-gradient)`,
				initial: { x: -1 },
				animate: { x: 2 },
				transition: {
					duration: oW / 1e3,
					ease: "linear",
					repeat: Infinity,
					repeatType: "loop"
				},
				onUpdate: (e) => {
					let n = typeof e.x == "number" ? e.x : -1, i = r.current;
					n >= 1 && i < 1 && t(), r.current = n;
				}
			})
		}),
		/* @__PURE__ */ (0, V.jsx)("mask", {
			id: `${e}-loading-mask`,
			maskUnits: "userSpaceOnUse",
			children: /* @__PURE__ */ (0, V.jsx)("rect", {
				width: "100%",
				height: "100%",
				fill: `url(#${e}-loading-mask-pattern)`
			})
		})
	] });
};
pW.Bar = mW, pW.XAxis = hW, pW.YAxis = gW, pW.Grid = _W, pW.Tooltip = vW, pW.Legend = yW, pW.Brush = YU;
// src/react/evilcharts/registry/charts/recharts-pie-chart.tsx
var IW = 5, LW = 2e3, RW = 0, zW = "80%", BW = 0, VW = 0, HW = 0, UW = 360, WW = [], GW = (0, B.createContext)(null);
function KW() {
	let e = (0, B.use)(GW);
	if (!e) throw Error("Pie chart parts (<Pie />, <Tooltip />, …) must be used within <EvilPieChart />");
	return e;
}
function qW({ config: e, data: t, dataKey: n, nameKey: r, children: i, className: a, chartProps: o, defaultSelectedSector: s = null, onSelectionChange: c, isLoading: l = !1 }) {
	let [u, d] = (0, B.useState)(s), f = (0, B.useCallback)((e) => {
		if (d(e), e === null) {
			c?.(null);
			return;
		}
		let i = t.find((t) => t[r] === e);
		i && c?.({
			dataKey: e,
			value: i[n]
		});
	}, [
		t,
		n,
		r,
		c
	]), p = (0, B.useMemo)(() => ({
		config: e,
		data: t,
		dataKey: n,
		nameKey: r,
		isLoading: l,
		selectedSector: u,
		selectSector: f
	}), [
		e,
		t,
		n,
		r,
		l,
		u,
		f
	]);
	return /* @__PURE__ */ (0, V.jsx)(GW, {
		value: p,
		children: /* @__PURE__ */ (0, V.jsxs)(MU, {
			className: a,
			config: e,
			children: [/* @__PURE__ */ (0, V.jsx)(NU, { isLoading: l }), /* @__PURE__ */ (0, V.jsx)(CU, {
				id: "evil-charts-pie-chart",
				accessibilityLayer: !0,
				...o,
				children: i
			})]
		})
	});
}
function JW({ variant: e = "gradient", innerRadius: t = RW, outerRadius: n = zW, cornerRadius: r = BW, paddingAngle: i = VW, startAngle: a = HW, endAngle: o = UW, isClickable: s = !1, glowingSectors: c = WW, children: l, pieProps: u }) {
	let { config: d, data: f, dataKey: p, nameKey: m, isLoading: h, selectedSector: g, selectSector: _ } = KW(), v = (0, B.useId)().replace(/:/g, "");
	if (h) return /* @__PURE__ */ (0, V.jsx)(fP, {
		data: nG,
		dataKey: "value",
		nameKey: "name",
		innerRadius: t,
		outerRadius: n,
		cornerRadius: r,
		paddingAngle: i,
		startAngle: a,
		endAngle: o,
		strokeWidth: 0,
		isAnimationActive: !1,
		shape: (e) => /* @__PURE__ */ (0, V.jsx)(rG, { ...e })
	});
	let y = $W(l, p), b = f.map((e) => ({
		...e,
		fill: `url(#${v}-colors-${e[m]})`
	}));
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(fP, {
		data: b,
		dataKey: p,
		nameKey: m,
		innerRadius: t,
		outerRadius: n,
		cornerRadius: r,
		paddingAngle: i,
		startAngle: a,
		endAngle: o,
		strokeWidth: 0,
		isAnimationActive: !0,
		style: s ? { cursor: "pointer" } : void 0,
		onClick: (e, t) => {
			if (!s) return;
			let n = f[t]?.[m];
			_(g === n ? null : n);
		},
		shape: (e) => {
			let t = f[e.index ?? 0]?.[m], n = c.includes(t), r = s && g !== null && g !== t;
			return /* @__PURE__ */ (0, V.jsx)(Yg, {
				...e,
				fill: `url(#${v}-colors-${t})`,
				filter: n ? `url(#${v}-glow-${t})` : void 0,
				stroke: i < 0 ? "var(--background)" : "none",
				strokeWidth: i < 0 ? 5 : 0,
				opacity: r ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...u,
		children: y
	}), /* @__PURE__ */ (0, V.jsxs)("defs", { children: [/* @__PURE__ */ (0, V.jsx)(eG, {
		id: v,
		config: d,
		variant: e
	}), c.length > 0 && /* @__PURE__ */ (0, V.jsx)(tG, {
		id: v,
		glowingSectors: c
	})] })] });
}
var YW = () => null;
function XW({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, nameKey: i } = KW();
	return r ? null : /* @__PURE__ */ (0, V.jsx)(UU, {
		defaultIndex: n,
		content: /* @__PURE__ */ (0, V.jsx)(VU, {
			nameKey: i,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}
function ZW({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: i, selectedSector: a, selectSector: o } = KW();
	return /* @__PURE__ */ (0, V.jsx)(JU, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, V.jsx)(WU, {
			selected: a,
			onSelectChange: o,
			isClickable: r,
			nameKey: i,
			variant: e
		})
	});
}
function QW({ variant: e = "dots" }) {
	return /* @__PURE__ */ (0, V.jsx)(rW, { variant: e });
}
var $W = (e, t) => {
	let n = null;
	return B.Children.forEach(e, (e) => {
		if (!(0, B.isValidElement)(e) || e.type !== YW) return;
		let { dataKey: r, labelListProps: i } = e.props;
		n = /* @__PURE__ */ (0, V.jsx)(Jj, {
			dataKey: r ?? t,
			stroke: "none",
			fontSize: 12,
			fontWeight: 500,
			fill: "currentColor",
			className: "fill-background",
			...i
		});
	}), n;
}, eG = ({ id: e, config: t }) => /* @__PURE__ */ (0, V.jsx)(V.Fragment, { children: Object.entries(t).map(([t, n]) => {
	let r = LU(n);
	return /* @__PURE__ */ (0, V.jsx)("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${t}-0)`
		}), /* @__PURE__ */ (0, V.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${t}-0)`
		})] }) : Array.from({ length: r }, (e, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ (0, V.jsx)("stop", {
				offset: i,
				stopColor: `var(--color-${t}-${n}, var(--color-${t}-0))`
			}, i);
		})
	}, `${e}-colors-${t}`);
}) }), tG = ({ id: e, glowingSectors: t }) => /* @__PURE__ */ (0, V.jsx)(V.Fragment, { children: t.map((t) => /* @__PURE__ */ (0, V.jsxs)("filter", {
	id: `${e}-glow-${t}`,
	x: "-100%",
	y: "-100%",
	width: "300%",
	height: "300%",
	children: [
		/* @__PURE__ */ (0, V.jsx)("feGaussianBlur", {
			in: "SourceGraphic",
			stdDeviation: "8",
			result: "blur"
		}),
		/* @__PURE__ */ (0, V.jsx)("feColorMatrix", {
			in: "blur",
			type: "matrix",
			values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0",
			result: "glow"
		}),
		/* @__PURE__ */ (0, V.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, V.jsx)("feMergeNode", { in: "glow" }), /* @__PURE__ */ (0, V.jsx)("feMergeNode", { in: "SourceGraphic" })] })
	]
}, `${e}-glow-${t}`)) }), nG = Array.from({ length: IW }, (e, t) => ({
	name: `loading${t}`,
	value: 100 / IW
})), rG = (e) => {
	let { index: t = 0, ...n } = e, r = t / IW * (LW / 1e3);
	return /* @__PURE__ */ (0, V.jsx)(rt.g, {
		initial: { opacity: .15 },
		animate: { opacity: [
			.15,
			.5,
			.15
		] },
		transition: {
			duration: LW / 1e3,
			delay: r,
			repeat: Infinity,
			ease: "easeInOut"
		},
		children: /* @__PURE__ */ (0, V.jsx)(Yg, {
			...n,
			fill: "currentColor"
		})
	});
};
qW.Pie = JW, qW.Label = YW, qW.Tooltip = XW, qW.Legend = ZW, qW.Background = QW, `${Be({ radius: "chart" })}`;
var iG = (e) => ({ light: [e] }), aG = "flex min-w-32 flex-col gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl";
function oG({ swatch: e, name: t, value: n, format: r = (e) => e.toLocaleString() }) {
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		className: "flex w-full items-center gap-2",
		children: [e, /* @__PURE__ */ (0, V.jsxs)("div", {
			className: "flex flex-1 items-center justify-between gap-4 leading-none",
			children: [/* @__PURE__ */ (0, V.jsx)("span", {
				className: "text-muted-foreground",
				children: t
			}), /* @__PURE__ */ (0, V.jsx)("span", {
				className: "font-mono font-medium tabular-nums text-foreground",
				children: r(n)
			})]
		})]
	});
}
var sG = "size-2.5 shrink-0 rounded-xs";
function cG({ active: e, payload: t, label: n, nameKey: r, valueKey: i, hideLabel: a, format: o }) {
	let { config: s } = jU(), c = (t ?? []).filter((e) => e.type !== "none");
	if (!e || !c.length) return /* @__PURE__ */ (0, V.jsx)("span", { className: "p-4" });
	let l = a || typeof n != "string" ? null : s[n]?.label ?? n;
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		className: aG,
		children: [l ? /* @__PURE__ */ (0, V.jsx)("div", {
			className: "font-medium text-foreground",
			children: l
		}) : null, c.map((e, t) => {
			let n = e.payload ?? {}, a = `${(r ? n[r] : void 0) ?? e.name ?? e.dataKey ?? "value"}`, c = IU(s, e, a), l = i ? n[i] : e.value;
			return /* @__PURE__ */ (0, V.jsx)(oG, {
				name: c?.label ?? e.name,
				value: Number(l ?? 0),
				format: o,
				swatch: /* @__PURE__ */ (0, V.jsx)("i", {
					className: sG,
					style: { background: `var(--color-${a}-0)` }
				})
			}, a + t);
		})]
	});
}
function lG({ nameKey: e, valueKey: t, hideLabel: n, format: r }) {
	return /* @__PURE__ */ (0, V.jsx)(UU, {
		cursor: !1,
		content: /* @__PURE__ */ (0, V.jsx)(cG, {
			nameKey: e,
			valueKey: t,
			hideLabel: n,
			format: r
		})
	});
}
// src/react/settings/storage-charts.tsx
var uG = {
	database: "var(--color-chart-1)",
	backups: "var(--color-chart-2)",
	playback: "var(--color-chart-3)",
	thumbnails: "var(--color-chart-4)",
	previews: "var(--color-chart-5)",
	downloads: "var(--color-chart-6)",
	sources: "var(--color-chart-7)",
	records: "var(--color-chart-8)",
	tools: "var(--color-chart-9)"
}, dG = "var(--color-text-tertiary)", fG = {
	database: "bg-chart-1",
	backups: "bg-chart-2",
	playback: "bg-chart-3",
	thumbnails: "bg-chart-4",
	previews: "bg-chart-5",
	downloads: "bg-chart-6",
	sources: "bg-chart-7",
	records: "bg-chart-8",
	tools: "bg-chart-9"
}, pG = (e) => Ze(e);
function mG(e) {
	let t = e.filter((e) => uG[e.key] && e.bytes > 0).map((e) => ({
		key: e.key,
		label: e.label,
		bytes: e.bytes,
		color: uG[e.key]
	})), n = e.filter((e) => !uG[e.key]).reduce((e, t) => e + t.bytes, 0);
	return n > 0 ? [...t, {
		key: "rest",
		label: "其余",
		bytes: n,
		color: dG
	}] : t;
}
function hG({ storage: e }) {
	let t = e.usage, n = mG(t.categories), r = Object.fromEntries(n.map((e) => [e.key, {
		label: e.label,
		colors: iG(e.color)
	}])), i = n.map((e) => ({
		slice: e.key,
		value: e.bytes
	}));
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		className: "flex flex-col gap-5 md:flex-row md:items-center",
		children: [/* @__PURE__ */ (0, V.jsxs)("div", {
			className: "relative mx-auto size-48 flex-none",
			role: "img",
			"aria-label": `数据目录共 ${pG(t.total_bytes)}，各类占比`,
			children: [/* @__PURE__ */ (0, V.jsxs)(qW, {
				data: i,
				dataKey: "value",
				nameKey: "slice",
				config: r,
				className: "aspect-square size-48 flex-none",
				children: [/* @__PURE__ */ (0, V.jsx)(qW.Pie, {
					innerRadius: "68%",
					outerRadius: "100%",
					paddingAngle: 1,
					cornerRadius: 3
				}), /* @__PURE__ */ (0, V.jsx)(lG, {
					nameKey: "slice",
					hideLabel: !0,
					format: pG
				})]
			}), /* @__PURE__ */ (0, V.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, V.jsx)("b", {
					className: "text-title-2-medium tabular-nums text-text-primary",
					children: pG(t.total_bytes)
				}), /* @__PURE__ */ (0, V.jsxs)("small", {
					className: "text-caption-1-regular tabular-nums text-text-secondary",
					children: [t.total_files.toLocaleString(), " 个文件"]
				})]
			})]
		}), /* @__PURE__ */ (0, V.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-4",
			children: [/* @__PURE__ */ (0, V.jsx)("ul", {
				className: "flex flex-wrap gap-x-4 gap-y-1.5",
				"aria-label": "图例",
				children: n.map((e) => /* @__PURE__ */ (0, V.jsxs)("li", {
					className: "flex items-center gap-1.5 text-caption-1-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, V.jsx)("i", {
							"aria-hidden": !0,
							className: `${sG} ${fG[e.key] || "bg-text-tertiary"}`
						}),
						e.label,
						/* @__PURE__ */ (0, V.jsx)("span", {
							className: "tabular-nums text-text-primary",
							children: pG(e.bytes)
						})
					]
				}, e.key))
			}), /* @__PURE__ */ (0, V.jsx)(gG, { storage: e })]
		})]
	});
}
function gG({ storage: e }) {
	if (e.total_bytes === null || e.free_bytes === null || !e.usage) return null;
	let t = Math.min(e.usage.total_bytes, e.total_bytes), n = e.free_bytes, r = Math.max(0, e.total_bytes - n - t), i = {
		peach: {
			label: "Pear 数据",
			colors: iG("var(--color-border-focus-ring)")
		},
		others: {
			label: "其他文件",
			colors: iG(dG)
		},
		free: {
			label: "可用",
			colors: iG("var(--color-background-tertiary-default)")
		}
	};
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, V.jsxs)("p", {
			className: "text-caption-1-regular text-text-secondary",
			children: [
				"所在磁盘共 ",
				pG(e.total_bytes),
				e.system_drive ? "（系统盘）" : "",
				"，Pear 占 ",
				((t) => {
					let n = t / e.total_bytes * 100;
					return n < .1 ? "不到 0.1%" : `${n.toFixed(+(n < 10))}%`;
				})(t),
				"， 可用 ",
				pG(n)
			]
		}), /* @__PURE__ */ (0, V.jsxs)(pW, {
			data: [{
				disk: "磁盘",
				peach: t,
				others: r,
				free: n
			}],
			config: i,
			layout: "horizontal",
			stackType: "percent",
			barRadius: 4,
			chartProps: { margin: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			} },
			className: "aspect-auto h-6 flex-none",
			children: [
				/* @__PURE__ */ (0, V.jsx)(pW.YAxis, {
					dataKey: "disk",
					hide: !0
				}),
				/* @__PURE__ */ (0, V.jsx)(pW.XAxis, { hide: !0 }),
				/* @__PURE__ */ (0, V.jsx)(pW.Bar, { dataKey: "peach" }),
				/* @__PURE__ */ (0, V.jsx)(pW.Bar, { dataKey: "others" }),
				/* @__PURE__ */ (0, V.jsx)(pW.Bar, { dataKey: "free" }),
				/* @__PURE__ */ (0, V.jsx)(lG, {
					hideLabel: !0,
					format: pG
				})
			]
		})]
	});
}
// src/react/components/configuration-fields.tsx
function _G({ id: e, label: t, value: n, onChange: r, options: i, isDisabled: a, isInvalid: s, children: c }) {
	let l = `${e}-label`;
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ (0, V.jsx)(j, {
				id: l,
				elementType: "span",
				children: t
			}),
			/* @__PURE__ */ (0, V.jsx)(_e, {
				id: e,
				"aria-labelledby": l,
				orientation: "horizontal",
				className: me,
				value: n,
				onChange: r,
				isDisabled: a,
				isInvalid: s,
				children: i.map((e) => /* @__PURE__ */ (0, V.jsx)(o, {
					value: e.value,
					className: pe,
					children: e.label
				}, e.value))
			}),
			c
		]
	});
}
function vG({ prefix: e, suffix: t, unit: n, fieldClassName: r, ...i }) {
	let a = () => /* @__PURE__ */ (0, V.jsx)("span", {
		"aria-hidden": n ? !0 : void 0,
		className: We("shrink-0 text-body-regular text-text-secondary", n ? "w-10" : "pr-1"),
		children: n ? /* @__PURE__ */ (0, V.jsx)("span", {
			className: "absolute inset-y-0 right-0 flex items-center border-l border-border-button-default px-2",
			children: n
		}) : t
	});
	return /* @__PURE__ */ (0, V.jsx)(O, {
		...i,
		fieldClassName: r,
		leadingAddon: e ? /* @__PURE__ */ (0, V.jsx)("span", {
			className: "shrink-0 pl-1 text-body-regular text-text-secondary",
			children: e
		}) : void 0,
		trailingIcon: n || t ? a : void 0
	});
}
// src/react/settings/storage-budget-settings.tsx
var yG = [
	[
		"minimum_free_gib",
		"磁盘保留空间",
		"留空自动保留 5%，最低 1 GiB、最高 40 GiB"
	],
	[
		"data_max_gib",
		"Pear 数据上限",
		"达到上限暂停补修与缓存写入"
	],
	[
		"cache_max_gib",
		"Pear 缓存上限",
		"播放、网络媒体与缩略图缓存"
	]
];
function bG({ initial: e, after: t, receipt: n }) {
	let [r, i] = (0, B.useState)(e.policy), a = wt(e.error), [o, s] = (0, B.useState)("");
	(0, B.useEffect)(() => {
		if (!r?.enabled || e.policy?.external_cache_path) return;
		let t = new AbortController();
		return s("正在读取 CloudDrive 缓存目录…"), Ie("/api/configuration/storage/external-cache", t.signal).then((e) => {
			if (t.signal.aborted) return;
			let n = e.path;
			n ? (i((e) => e && !e.external_cache_path ? {
				...e,
				external_cache_path: n
			} : e), s("已自动读取，保存配置后生效")) : s("CloudDrive 未配置，可手动填写缓存目录");
		}).catch((e) => {
			t.signal.aborted || s(`${qe(e)}；可手动填写。`);
		}), () => t.abort();
	}, [r?.enabled, e.policy?.external_cache_path]);
	let c = (e, t) => i((n) => n && {
		...n,
		[e]: t
	}), u = e.last_check;
	return r ? /* @__PURE__ */ (0, V.jsxs)(F, {
		id: "storageBudgetSettings",
		title: "容量保护",
		onSubmit: (e) => {
			e.preventDefault(), a.run("save", (e) => L("/api/configuration/storage/policy", r, "POST", e), (e) => {
				s(""), t(e), n("已保存容量保护设置");
			});
		},
		children: [
			/* @__PURE__ */ (0, V.jsxs)(fe, { children: [/* @__PURE__ */ (0, V.jsx)(Se, {
				label: "启用容量保护",
				description: "超限时先清理可重建缓存，仍超限则暂停写入",
				children: /* @__PURE__ */ (0, V.jsx)(De, {
					"aria-label": "启用容量保护",
					isSelected: r.enabled,
					isDisabled: !!a.busy,
					onChange: (e) => c("enabled", e)
				})
			}), r.enabled ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [yG.map(([e, t, n]) => /* @__PURE__ */ (0, V.jsx)(Se, {
				label: t,
				description: n,
				children: /* @__PURE__ */ (0, V.jsx)(vG, {
					"aria-label": `${t}（GiB）`,
					unit: "GiB",
					inputMode: "numeric",
					pattern: "[0-9]*",
					size: "small",
					className: "w-32 shrink-0",
					placeholder: e === "minimum_free_gib" ? "自动" : "不限",
					value: r[e] ? String(r[e]) : "",
					onChange: (t) => c(e, Number(t)),
					isDisabled: !!a.busy
				})
			}, e)), /* @__PURE__ */ (0, V.jsx)(Se, {
				label: "自动清理缓存",
				description: "先清理可重建缩略图，仍超限则暂停",
				children: /* @__PURE__ */ (0, V.jsx)(De, {
					"aria-label": "自动清理缓存",
					isSelected: r.auto_clean,
					isDisabled: !!a.busy,
					onChange: (e) => c("auto_clean", e)
				})
			})] }) : null] }),
			r.enabled ? /* @__PURE__ */ (0, V.jsx)(I, {
				divided: !0,
				children: /* @__PURE__ */ (0, V.jsx)(O, {
					label: "外部缓存目录",
					hint: o || "自动读取本机 CloudDrive，也可手动填写；不自动清理",
					value: r.external_cache_path,
					size: "small",
					className: "w-full",
					placeholder: "未设置",
					onChange: (e) => c("external_cache_path", e),
					isDisabled: !!a.busy
				})
			}) : null,
			r.enabled && r.external_cache_path ? /* @__PURE__ */ (0, V.jsx)(fe, { children: /* @__PURE__ */ (0, V.jsx)(Se, {
				label: "外部缓存上限",
				description: "达到上限暂停补修，留空只检查磁盘余量",
				children: /* @__PURE__ */ (0, V.jsx)(vG, {
					"aria-label": "外部缓存上限（GiB）",
					unit: "GiB",
					size: "small",
					className: "w-32 shrink-0",
					placeholder: "不限",
					inputMode: "numeric",
					pattern: "[0-9]*",
					value: r.external_cache_max_gib ? String(r.external_cache_max_gib) : "",
					onChange: (e) => c("external_cache_max_gib", Number(e)),
					isDisabled: !!a.busy
				})
			}) }) : null,
			/* @__PURE__ */ (0, V.jsxs)(I, {
				divided: !0,
				children: [
					r.enabled ? /* @__PURE__ */ (0, V.jsx)(D, { children: "推荐值待取得使用数据后给出。上限留空表示不限，在途任务可能超出。" }) : null,
					r.enabled && u?.paused ? /* @__PURE__ */ (0, V.jsxs)(b, { children: [u.reasons.join("；"), "。调整或清理后，在任务中心重试补修。"] }) : null,
					a.error ? /* @__PURE__ */ (0, V.jsx)(b, { children: a.error }) : null
				]
			}),
			/* @__PURE__ */ (0, V.jsx)(E, { children: /* @__PURE__ */ (0, V.jsx)(l, {
				type: "submit",
				...R(a.busy === "save"),
				children: "保存配置"
			}) })
		]
	}) : /* @__PURE__ */ (0, V.jsx)(F, {
		title: "容量保护",
		children: /* @__PURE__ */ (0, V.jsx)(I, { children: /* @__PURE__ */ (0, V.jsx)(b, { children: a.error || "容量设置未取得" }) })
	});
}
// src/react/settings/storage-settings.tsx
var xG = "/api/configuration/storage", SG = 1500, CG = 864e5, wG = (e) => e instanceof c && e.body?.errors?.target || qe(e);
function TG(e) {
	if (e.free_bytes === null || e.total_bytes === null) return "未取得";
	let t = `${Ze(e.free_bytes)} 可用，共 ${Ze(e.total_bytes)}`;
	return e.system_drive ? `${t}（系统盘）` : t;
}
var EG = (e) => e.cleanable && e.reclaimable > 0;
function DG({ job: e }) {
	let t = e.files || 0, n = e.expected_files || 0, r = /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
		"已统计 ",
		/* @__PURE__ */ (0, V.jsx)(Un, { value: t }),
		" 个文件 · ",
		/* @__PURE__ */ (0, V.jsx)(Un, {
			value: e.bytes || 0,
			format: Ze
		})
	] });
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		"aria-live": "polite",
		className: "flex flex-col gap-2",
		children: [n ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(de, {
			label: "统计进度",
			value: Math.min(t, n * .99),
			max: n
		}), /* @__PURE__ */ (0, V.jsxs)(D, { children: [
			r,
			"，上次共 ",
			n.toLocaleString(),
			" 个"
		] })] }) : /* @__PURE__ */ (0, V.jsx)(N, { label: "正在统计占用空间" }), n ? null : /* @__PURE__ */ (0, V.jsx)(D, { children: r })]
	});
}
function OG({ category: e, selected: t, disabled: n, onToggle: r }) {
	let i = EG(e), a = e.cleanable ? e.reclaimable > 0 ? `清理后${e.note}` : "没有可以清理的文件" : `不能清理：${e.note}`;
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		"data-category": e.key,
		className: "flex min-h-13 w-full items-start gap-3 border-b border-separator-border py-2.5 pr-3 last:border-b-0",
		children: [
			/* @__PURE__ */ (0, V.jsx)(h, {
				"aria-label": `清理${e.label}`,
				isSelected: t,
				isDisabled: !i || n,
				onChange: r,
				className: "mt-0.5"
			}),
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-0.5",
				children: [
					/* @__PURE__ */ (0, V.jsxs)("p", {
						className: "flex items-center gap-2 text-body-regular text-text-primary",
						children: [/* @__PURE__ */ (0, V.jsx)("i", {
							"aria-hidden": !0,
							className: `size-2.5 shrink-0 rounded-xs ${fG[e.key] || "bg-text-tertiary"}`
						}), e.label]
					}),
					/* @__PURE__ */ (0, V.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: e.description
					}),
					/* @__PURE__ */ (0, V.jsx)("p", {
						className: "text-caption-1-regular text-text-tertiary",
						children: a
					})
				]
			}),
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "flex shrink-0 flex-col items-end gap-0.5 text-right",
				children: [/* @__PURE__ */ (0, V.jsx)(Un, {
					value: e.bytes,
					format: Ze,
					className: "text-body-regular text-text-primary"
				}), i ? /* @__PURE__ */ (0, V.jsxs)("span", {
					className: "text-caption-1-regular text-text-secondary",
					children: ["可释放 ", Ze(e.reclaimable)]
				}) : null]
			})
		]
	});
}
function kG({ initial: e, receipt: t }) {
	let [n, r] = (0, B.useState)(e), [i, a] = (0, B.useState)(""), [o, s] = (0, B.useState)(/* @__PURE__ */ new Set()), c = wt(), u = n.job.state !== "idle", d = (0, B.useRef)(u);
	(0, B.useEffect)(() => {
		e.usage || e.job.state !== "idle" || document.body.classList.contains("peach-guiding") || c.run("measure", (e) => L(`${xG}/measure`, {}, "POST", e), r);
	}, []), (0, B.useEffect)(() => {
		if (!u) return;
		let e = new AbortController(), t = setTimeout(() => {
			Ie(xG, e.signal).then(r, () => {
				e.signal.aborted || r((e) => ({ ...e }));
			});
		}, SG);
		return () => {
			e.abort(), clearTimeout(t);
		};
	}, [n]), (0, B.useEffect)(() => {
		u ? d.current = !0 : d.current && (d.current = !1, s(/* @__PURE__ */ new Set()), n.job.error || t(n.job.message || "已统计占用空间"));
	}, [u]);
	let f = () => void c.run("measure", (e) => L(`${xG}/measure`, {}, "POST", e), r), p = n.usage, m = p?.categories.filter(EG) ?? [], h = m.filter((e) => o.has(e.key)), g = (e, t) => {
		if (!e.length) return;
		let n = e.reduce((e, t) => e + t.reclaimable, 0);
		Ue({
			title: t,
			body: `将删除 ${Ze(n)}：${e.map((e) => `${e.label} ${Ze(e.reclaimable)}（清理后${e.note}）`).join("；")}。`,
			confirmLabel: `清理 ${Ze(n)}`,
			danger: e.some((e) => e.key === "backups"),
			onConfirm: async () => r(await L(`${xG}/clean`, { categories: e.map((e) => e.key) }))
		});
	}, v = () => void c.run("relocate", async (e) => {
		let t = (await L(ie, { initial: n.data_root }, "POST", e)).path;
		if (!t) return;
		let r = n.usage ? Ze(n.usage.total_bytes) : "";
		await Ue({
			title: "迁移数据目录",
			body: `将 ${r} 数据从 ${n.data_root} 移到 ${t}。迁移期间 Pear 会退出，完成后自动重新打开；原位置的数据在新位置核对无误后删除。`,
			confirmLabel: "迁移数据目录",
			onConfirm: async () => {
				try {
					a((await L(`${xG}/relocate`, { target: t })).message);
				} catch (e) {
					throw Error(wG(e));
				}
			}
		});
	}, () => void 0), y = n.relocation.last, x = y && (y.state === "error" || (y.notes?.length ?? 0) > 0 || Date.now() - y.finished_at * 1e3 < CG), S = p?.categories.find((e) => e.key === n.job.category)?.label, T = i || (n.job.state === "cleaning" ? `正在清理${S || ""}…` : n.job.state === "measuring" ? "正在统计占用空间…" : h.length ? `已选 ${h.length} 类，可释放 ${Ze(h.reduce((e, t) => e + t.reclaimable, 0))}` : p ? `统计于 ${(/* @__PURE__ */ new Date(p.measured_at * 1e3)).toLocaleString()}` : ""), O = u || !!i, k = (e) => (t) => s((n) => {
		let r = new Set(n);
		return t ? r.add(e) : r.delete(e), r;
	});
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsxs)(F, {
		id: "storageSettings",
		guide: "storage",
		title: "存储空间",
		children: [
			/* @__PURE__ */ (0, V.jsxs)(w, { children: [/* @__PURE__ */ (0, V.jsx)(C, {
				term: "数据目录",
				children: /* @__PURE__ */ (0, V.jsx)(le, {
					path: n.data_root,
					className: "text-body-regular text-text-primary",
					onRevealed: t
				})
			}), /* @__PURE__ */ (0, V.jsx)(C, {
				term: "所在磁盘",
				children: TG(n)
			})] }),
			/* @__PURE__ */ (0, V.jsxs)(I, {
				divided: !0,
				children: [
					n.job.state === "measuring" ? /* @__PURE__ */ (0, V.jsx)(DG, { job: n.job }) : null,
					p?.capacity_error ? /* @__PURE__ */ (0, V.jsxs)(b, { children: ["容量统计不完整：", p.capacity_error] }) : null,
					p?.allocated_bytes == null ? null : /* @__PURE__ */ (0, V.jsxs)(D, { children: [
						"Pear 数据实际占盘 ",
						Ze(p.allocated_bytes),
						"；分类图按文件大小统计。"
					] }),
					p ? /* @__PURE__ */ (0, V.jsxs)("div", {
						"data-storage-result": "",
						className: Be({
							variant: "outlined",
							padding: "none",
							className: "flex flex-col"
						}),
						children: [/* @__PURE__ */ (0, V.jsx)("div", {
							className: "border-b border-separator-border p-4",
							children: /* @__PURE__ */ (0, V.jsx)(hG, { storage: n })
						}), /* @__PURE__ */ (0, V.jsx)("div", {
							className: "flex flex-col pl-4",
							children: p.categories.map((e) => /* @__PURE__ */ (0, V.jsx)(OG, {
								category: e,
								selected: o.has(e.key),
								disabled: O,
								onToggle: k(e.key)
							}, e.key))
						})]
					}) : n.job.state === "measuring" ? null : /* @__PURE__ */ (0, V.jsx)(D, { children: "统计后显示各类数据的占用，并可清理缓存与旧备份。" }),
					n.relocation.available ? null : /* @__PURE__ */ (0, V.jsx)(D, { children: n.relocation.message }),
					!n.relocation.available && n.relocation.steps?.length ? /* @__PURE__ */ (0, V.jsx)(_, {
						label: "在宿主机上迁移",
						steps: n.relocation.steps
					}) : null,
					n.job.error ? /* @__PURE__ */ (0, V.jsx)(b, { children: n.job.message }) : null,
					c.error ? /* @__PURE__ */ (0, V.jsx)(b, { children: c.error }) : null,
					x && y ? y.state === "error" ? /* @__PURE__ */ (0, V.jsx)(b, { children: y.message }) : /* @__PURE__ */ (0, V.jsx)(D, { children: [y.message, ...y.notes ?? []].join("；") }) : null
				]
			}),
			/* @__PURE__ */ (0, V.jsxs)(E, {
				status: T ? /* @__PURE__ */ (0, V.jsx)("p", {
					role: i ? "status" : void 0,
					children: T
				}) : null,
				children: [
					p ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(l, {
						variant: "secondary",
						disabled: O || !h.length,
						...R(n.job.state === "cleaning" && h.length > 0),
						onClick: () => g(h, "清理所选数据"),
						children: "清理所选"
					}), /* @__PURE__ */ (0, V.jsx)(l, {
						variant: "secondary",
						disabled: O || !m.length,
						onClick: () => g(m, "清理全部可清理的数据"),
						children: "全部清理"
					})] }) : null,
					/* @__PURE__ */ (0, V.jsx)(l, {
						variant: "secondary",
						disabled: O || !n.relocation.available || !p,
						onClick: v,
						...R(c.busy === "relocate"),
						children: "更改位置"
					}),
					/* @__PURE__ */ (0, V.jsx)(l, {
						disabled: !!i || n.job.state === "cleaning",
						onClick: f,
						...R(c.busy === "measure" || n.job.state === "measuring"),
						children: p ? "重新统计" : "统计占用"
					})
				]
			})
		]
	}), n.budget ? /* @__PURE__ */ (0, V.jsx)(bG, {
		initial: n.budget,
		after: r,
		receipt: t
	}) : null] });
}
// src/react/settings/maintenance-settings.tsx
var AG = [
	["6", "每 6 小时"],
	["24", "每天"],
	["168", "每周"]
];
function jG({ data: e, receipt: t, reopenTutorial: n, panel: r }) {
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		...fn(r),
		children: [
			e.storage ? /* @__PURE__ */ (0, V.jsx)(kG, {
				initial: e.storage,
				receipt: t
			}) : null,
			e.storage ? /* @__PURE__ */ (0, V.jsx)(Rn, { receipt: t }) : null,
			e.remote_reporting || e.library_sharing ? /* @__PURE__ */ (0, V.jsxs)(F, {
				id: "librarySharing",
				guide: "reporting",
				title: "数据上传",
				children: [e.remote_reporting ? /* @__PURE__ */ (0, V.jsx)(Vn, {
					initial: e.remote_reporting,
					receipt: t
				}) : null, e.library_sharing ? /* @__PURE__ */ (0, V.jsx)("div", {
					className: "border-t border-separator-border",
					children: /* @__PURE__ */ (0, V.jsx)(zn, {
						initial: e.library_sharing,
						receipt: t
					})
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, V.jsx)(PG, {
				facts: e.facts,
				receipt: t
			}),
			/* @__PURE__ */ (0, V.jsx)(MG, {
				receipt: t,
				reopenTutorial: n
			}),
			e.uninstall ? /* @__PURE__ */ (0, V.jsx)(FG, {
				uninstall: e.uninstall,
				receipt: t
			}) : null
		]
	});
}
function MG({ reopenTutorial: e }) {
	return /* @__PURE__ */ (0, V.jsx)("section", {
		"aria-label": "新手教程",
		className: "w-full",
		children: /* @__PURE__ */ (0, V.jsx)(xe, { children: /* @__PURE__ */ (0, V.jsx)(fe, { children: /* @__PURE__ */ (0, V.jsx)(Se, {
			label: "新手教程",
			description: "在所有设备上恢复右上角教程入口，保留已读进度",
			children: /* @__PURE__ */ (0, V.jsx)(l, {
				variant: "secondary",
				onClick: () => void e(),
				children: "重新打开"
			})
		}) }) })
	});
}
function NG({ initial: e, receipt: t }) {
	let [n, r] = (0, B.useState)(e.mode), [i, a] = (0, B.useState)(e.interval_hours), o = wt(e.error), s = (r) => {
		r.preventDefault(), e.available && o.run("save", (e) => L("/api/configuration/automatic-updates", {
			mode: n,
			interval_hours: i
		}, "POST", e), () => t("已保存配置"));
	}, c = e.available ? e.download_available ? "下载完成后在这里确认重启安装。" : void 0 : "自动更新需要由托盘管理的服务。";
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		id: "automaticUpdates",
		guide: "automatic-updates",
		title: "自动更新",
		onSubmit: s,
		children: [
			/* @__PURE__ */ (0, V.jsxs)(fe, { children: [
				/* @__PURE__ */ (0, V.jsx)(Se, {
					label: "自动检查新版本",
					children: /* @__PURE__ */ (0, V.jsx)(De, {
						"aria-label": "自动检查新版本",
						isSelected: n !== "off",
						isDisabled: !e.available,
						onChange: (e) => r(e ? "check" : "off")
					})
				}),
				/* @__PURE__ */ (0, V.jsx)(Se, {
					label: "自动下载更新",
					description: "发现新版本后先下载，重启安装前会询问。",
					children: /* @__PURE__ */ (0, V.jsx)(De, {
						"aria-label": "自动下载更新",
						isSelected: n === "download",
						isDisabled: !e.available || !e.download_available || n === "off",
						onChange: (e) => r(e ? "download" : "check")
					})
				}),
				/* @__PURE__ */ (0, V.jsx)(Se, {
					label: "检查频率",
					description: c,
					children: /* @__PURE__ */ (0, V.jsx)(ye, {
						"aria-label": "检查频率",
						selectedKey: String(i),
						isDisabled: !e.available,
						onSelectionChange: (e) => {
							e !== null && a(Number(e));
						},
						children: AG.map(([e, t]) => /* @__PURE__ */ (0, V.jsx)(be, {
							id: e,
							children: t
						}, e))
					})
				})
			] }),
			o.error ? /* @__PURE__ */ (0, V.jsx)(I, {
				divided: !0,
				children: /* @__PURE__ */ (0, V.jsx)(b, { children: o.error })
			}) : null,
			/* @__PURE__ */ (0, V.jsx)(E, { children: /* @__PURE__ */ (0, V.jsx)(l, {
				type: "submit",
				disabled: !e.available,
				...R(o.busy === "save"),
				children: "保存配置"
			}) })
		]
	});
}
function PG({ facts: e, receipt: t }) {
	let [n, r] = (0, B.useState)(null), i = n ?? e, a = wt(), o = (e) => void a.run(e, (t) => L("/api/configuration/media-tools", { tool: e }, "POST", t), (e) => {
		r(e.facts), t(e.message);
	});
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		guide: "facts",
		title: "运行信息",
		children: [/* @__PURE__ */ (0, V.jsx)(w, { children: i.map(({ term: e, value: t, install_tool: n, download_url: r, download_label: i }) => /* @__PURE__ */ (0, V.jsx)(C, {
			term: e,
			children: n ? /* @__PURE__ */ (0, V.jsxs)("span", {
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, V.jsx)("span", {
					className: "min-w-0",
					children: t
				}), /* @__PURE__ */ (0, V.jsx)(l, {
					size: "small",
					className: "shrink-0",
					onClick: () => o(n),
					...R(a.busy === n),
					children: "安装"
				})]
			}) : /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [t, r ? /* @__PURE__ */ (0, V.jsx)(S, {
				href: r,
				children: i
			}) : null] })
		}, e)) }), a.error ? /* @__PURE__ */ (0, V.jsx)(b, { children: a.error }) : null]
	});
}
function FG({ uninstall: e, receipt: t }) {
	let [n, r] = (0, B.useState)(!1), [i, a] = (0, B.useState)(""), o = () => void Ue({
		title: "卸载 Pear",
		danger: !0,
		body: n ? "将退出 Pear，移除程序、开机自启、桌面图标、设置、本地数据库、观看记录、凭据和缓存。原始媒体文件保留。" : "将退出 Pear 并移除程序、开机自启和桌面图标。设置、本地数据库、观看记录与缓存保留。",
		confirmLabel: "卸载 Pear",
		onConfirm: async () => {
			let e = await L("/api/configuration/uninstall", {
				delete_data: n,
				confirmation: "卸载 Pear"
			});
			a(e.message);
		}
	}), s = i || e.message, c = [.../* @__PURE__ */ new Set([e.data_root, ...e.directories])];
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		id: "uninstallPear",
		guide: "uninstall",
		title: "卸载 Pear",
		children: [
			e.available ? /* @__PURE__ */ (0, V.jsx)(I, { children: /* @__PURE__ */ (0, V.jsx)(D, { children: "卸载移除 Pear 程序本身，原始媒体文件保留。" }) }) : null,
			/* @__PURE__ */ (0, V.jsx)(fe, { children: /* @__PURE__ */ (0, V.jsx)(Se, {
				label: "完全卸载",
				description: "同时删除设置、本地数据库、观看记录、凭据和缓存",
				children: /* @__PURE__ */ (0, V.jsx)(De, {
					"aria-label": "完全卸载",
					isSelected: n,
					isDisabled: !e.full_available || !!i,
					onChange: r
				})
			}) }),
			/* @__PURE__ */ (0, V.jsx)(I, {
				divided: !0,
				children: /* @__PURE__ */ (0, V.jsx)(v, {
					summary: "数据目录",
					children: c.map((e) => /* @__PURE__ */ (0, V.jsx)(le, {
						path: e,
						className: "text-body-2-regular text-text-secondary",
						onRevealed: t
					}, e))
				})
			}),
			/* @__PURE__ */ (0, V.jsx)(E, {
				status: s ? /* @__PURE__ */ (0, V.jsx)("p", {
					role: i ? "status" : void 0,
					children: s
				}) : null,
				children: /* @__PURE__ */ (0, V.jsx)(l, {
					variant: "danger",
					disabled: !e.available || !!i,
					onClick: o,
					children: "卸载 Pear"
				})
			})
		]
	});
}
// src/react/settings/docker-update.tsx
var IG = 3e3, LG = 9e5;
function RG(e) {
	let [t, n] = (0, B.useState)({ state: "idle" }), r = wt(), i = (0, B.useRef)(0);
	return (0, B.useEffect)(() => {
		if (t.state !== "updating") return;
		let r = new AbortController(), a, o = async () => {
			try {
				let t = (await Ie("/api/client-updates", r.signal)).runtime?.version;
				if (!r.signal.aborted && t && t !== e) {
					n({
						state: "done",
						version: t
					});
					return;
				}
			} catch {}
			r.signal.aborted || (Date.now() - i.current > LG ? n({ state: "timeout" }) : a = setTimeout(o, IG));
		};
		return a = setTimeout(o, IG), () => {
			r.abort(), clearTimeout(a);
		};
	}, [t.state, e]), {
		job: t,
		run: () => r.run("docker-update", (e) => L("/api/configuration/docker-update", {}, "POST", e), () => {
			i.current = Date.now(), n({ state: "updating" });
		}),
		busy: r.busy === "docker-update",
		error: r.error
	};
}
function zG({ job: e }) {
	return e.state === "updating" ? /* @__PURE__ */ (0, V.jsx)(D, {
		role: "status",
		children: "Watchtower 正在拉取新镜像并重建容器。期间 Pear 会断开一会儿，新版本启动后这里会提示刷新。"
	}) : e.state === "done" ? /* @__PURE__ */ (0, V.jsxs)(D, {
		role: "status",
		children: [
			"已更新到 Pear ",
			e.version,
			"，刷新页面即可使用。"
		]
	}) : e.state === "timeout" ? /* @__PURE__ */ (0, V.jsxs)(I, { children: [/* @__PURE__ */ (0, V.jsx)(b, { children: "15 分钟内没有看到新版本启动。在 compose.yaml 所在目录查看 Watchtower 与 Pear 的日志：" }), /* @__PURE__ */ (0, V.jsx)(_, {
		label: "查看更新日志",
		steps: [{
			text: "Watchtower 的拉取与重建记录",
			command: "docker compose logs watchtower"
		}, {
			text: "Pear 的启动与数据库迁移记录",
			command: "docker compose logs peach"
		}]
	})] }) : null;
}
// src/react/settings/release-updates.tsx
var BG = /* @__PURE__ */ new Set([
	"downloading",
	"verifying",
	"extracting",
	"preparing",
	"restarting",
	"installing"
]), VG = [
	65,
	75,
	90
], HG = 120, UG = "https://github.com/peach-mitao/peach/releases";
function WG({ initial: e, initialJob: t }) {
	let [n, r] = (0, B.useState)(e), [i, a] = (0, B.useState)(t || {
		state: "idle",
		progress: 0
	}), [o, s] = (0, B.useState)(""), c = wt(), d = (0, B.useRef)(!1), f = (0, B.useRef)(!0), p = BG.has(i.state), m = RG(e.current_version), h = n.state === "available" && !!n.one_click?.available, g = m.job.state === "updating", v = () => void Ue({
		title: "一键更新",
		body: `Watchtower 会拉取 Pear ${n.latest_version || ""} 的镜像并重建容器，/data 数据卷保留。重建期间 Pear 暂时断开，进行中的任务在启动后续跑；有待执行的数据库迁移时，启动前先备份再迁移。`,
		confirmLabel: "开始更新",
		cancelLabel: "取消",
		onConfirm: m.run
	});
	(0, B.useEffect)(() => (f.current = !0, () => {
		f.current = !1;
	}), []);
	let y = async () => {
		let e = await L("/api/configuration/update-restart", {});
		f.current && a(e);
	}, x = () => void Ue({
		title: "更新已准备好",
		body: `Pear ${i.version || ""} 将在重启后安装。`,
		confirmLabel: "立即重启",
		cancelLabel: "稍后",
		onConfirm: y
	});
	(0, B.useEffect)(() => {
		i.state !== "ready" || d.current || (d.current = !0, x());
	}, [i.state]), (0, B.useEffect)(() => {
		let e = new AbortController(), t = BG.has(i.state) ? 1e3 : 3e4, n, o = 0, c = async () => {
			try {
				let t = await Ie("/api/configuration/update-status", e.signal);
				if (e.signal.aborted) return;
				a(t), o = 0, t.state === "complete" && r((e) => ({
					...e,
					current_version: t.version || e.current_version,
					state: "current",
					message: "已是最新测试版。"
				}));
				let n = await Ie("/api/configuration/automatic-updates", e.signal);
				!e.signal.aborted && n.result && r(n.result);
			} catch {
				o += 1, o >= HG && !e.signal.aborted && s("尚未连接到 Pear，请检查托盘后刷新页面。");
			}
			!e.signal.aborted && o < HG && (n = setTimeout(c, t));
		};
		return n = setTimeout(c, t), () => {
			e.abort(), clearTimeout(n);
		};
	}, [i.state]);
	let T = () => {
		p || (d.current = !1, s(""), c.run("download", (e) => L("/api/configuration/update", {}, "POST", e), a));
	}, O = () => void c.run("check", (e) => Ie("/api/configuration/updates", e), r, (t) => {
		r({
			...e,
			state: "error"
		}), c.setError(qe(t));
	}), k = c.error || o || m.error, A = i.state === "downloading" && i.total ? `${((i.downloaded || 0) / 1048576).toFixed(1)} / ${(i.total / 1048576).toFixed(1)} MB` : `${i.progress}%`;
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		id: "releaseUpdates",
		guide: "updates",
		title: "检查更新",
		aside: /* @__PURE__ */ (0, V.jsx)(Ee, {
			tone: k || n.state === "error" || i.state === "error" || m.job.state === "timeout" ? "error" : p || g ? "progress" : m.job.state === "done" ? "success" : n.state === "available" ? "warning" : n.state === "unchecked" ? "neutral" : "success",
			children: k || n.state === "error" || i.state === "error" ? "检查未完成" : m.job.state === "timeout" ? "更新未完成" : p ? "准备更新中" : g ? "正在更新" : m.job.state === "done" ? "已更新" : i.state === "ready" ? "可安装" : n.state === "available" ? "有可用更新" : n.state === "unchecked" ? "尚未检查" : "检查完成"
		}),
		children: [
			/* @__PURE__ */ (0, V.jsxs)(w, { children: [
				/* @__PURE__ */ (0, V.jsx)(C, {
					term: "当前版本",
					children: m.job.state === "done" ? m.job.version : n.current_version
				}),
				/* @__PURE__ */ (0, V.jsx)(C, {
					term: "安装方式",
					children: n.installation
				}),
				/* @__PURE__ */ (0, V.jsx)(C, {
					term: "更新通道",
					children: n.channel
				}),
				/* @__PURE__ */ (0, V.jsx)(C, {
					term: "最新版本",
					children: n.latest_version || "未取得"
				}),
				n.package_kind ? /* @__PURE__ */ (0, V.jsxs)(C, {
					term: "下载内容",
					children: [n.package_kind === "update" ? "应用更新包" : n.package_kind === "installer" ? "macOS 安装镜像" : "应用与工具", n.asset_size ? ` · ${(n.asset_size / 1048576).toFixed(1)} MB` : ""]
				}) : null
			] }),
			n.package_kind === "update" ? /* @__PURE__ */ (0, V.jsx)(D, { children: "应用更新包复用已安装工具；工具缺失、损坏或版本变化时会另行下载所需工具包。" }) : n.package_kind === "full" ? /* @__PURE__ */ (0, V.jsx)(D, { children: "本次更新包含媒体工具。" }) : n.package_kind === "installer" ? /* @__PURE__ */ (0, V.jsx)(D, { children: "下载后打开镜像，把 Pear 拖入「应用程序」替换旧版本，数据目录与设置保留；提示已损坏时按发布页说明移除隔离标记。" }) : null,
			n.state === "unchecked" && !n.checked_at && !k && i.state === "idle" ? null : /* @__PURE__ */ (0, V.jsxs)(I, {
				divided: !0,
				children: [
					n.checked_at ? /* @__PURE__ */ (0, V.jsxs)(D, { children: ["检查于 ", (/* @__PURE__ */ new Date(n.checked_at * 1e3)).toLocaleString()] }) : null,
					m.job.state === "done" ? null : n.state === "available" && !k ? /* @__PURE__ */ (0, V.jsx)(P, {
						tone: "info",
						title: "有可用更新",
						children: n.message
					}) : k || n.state === "error" ? /* @__PURE__ */ (0, V.jsx)(b, { children: k || n.message }) : n.state === "unchecked" ? null : /* @__PURE__ */ (0, V.jsx)(D, {
						role: "status",
						children: n.message
					}),
					n.state === "available" && !k && !h && m.job.state === "idle" && n.steps?.length ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(_, {
						label: "在宿主机上更新",
						steps: n.steps
					}), /* @__PURE__ */ (0, V.jsx)(D, { children: n.one_click?.reason || "用 compose 的 watchtower profile 启动 Watchtower 后，可以在这里一键更新，启用前先读 Docker 部署说明。" })] }) : null,
					/* @__PURE__ */ (0, V.jsx)(zG, { job: m.job }),
					i.state === "error" ? /* @__PURE__ */ (0, V.jsx)(b, { children: i.message }) : null,
					i.state !== "idle" && i.state !== "error" ? /* @__PURE__ */ (0, V.jsxs)("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, V.jsx)(de, {
								label: "更新准备进度",
								value: i.progress,
								stops: VG
							}),
							/* @__PURE__ */ (0, V.jsxs)(D, { children: ["下载 → 校验 → 解压 → 准备安装 · ", i.message] }),
							/* @__PURE__ */ (0, V.jsx)(D, { children: A })
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, V.jsxs)(E, {
				status: /* @__PURE__ */ (0, V.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, V.jsx)(S, {
							href: "https://peach.video/#download",
							children: "官网"
						}),
						/* @__PURE__ */ (0, V.jsx)(S, {
							href: "https://github.com/peach-mitao/peach",
							children: "GitHub"
						}),
						/* @__PURE__ */ (0, V.jsx)(S, {
							href: n.release_url || UG,
							children: "查看发布页"
						})
					]
				}),
				children: [
					/* @__PURE__ */ (0, V.jsx)(l, {
						variant: i.state === "ready" || h || n.state === "available" && n.installation === "独立测试包" ? "secondary" : "primary",
						disabled: p || g,
						onClick: O,
						...R(c.busy === "check"),
						children: "检查更新"
					}),
					m.job.state === "done" ? /* @__PURE__ */ (0, V.jsx)(l, {
						variant: "primary",
						onClick: () => window.location.reload(),
						children: "刷新页面"
					}) : h ? /* @__PURE__ */ (0, V.jsx)(l, {
						variant: "primary",
						onClick: v,
						...R(g || m.busy),
						children: "一键更新"
					}) : null,
					n.state === "available" && n.in_app_update && i.state !== "ready" ? /* @__PURE__ */ (0, V.jsx)(l, {
						variant: "primary",
						onClick: T,
						...R(p || c.busy === "download"),
						children: "下载并安装"
					}) : n.state === "available" && n.installation === "独立测试包" && n.asset_url ? /* @__PURE__ */ (0, V.jsx)(u, {
						variant: "primary",
						href: n.asset_url,
						children: "下载新版本"
					}) : null,
					i.state === "ready" ? /* @__PURE__ */ (0, V.jsx)(l, {
						variant: "primary",
						onClick: x,
						children: "重启安装"
					}) : null
				]
			})
		]
	});
}
// src/react/settings/upgrade-repairs.tsx
var GG = {
	pending: "等待修复",
	running: "正在修复",
	failed: "需要重试",
	review: "需要复核",
	complete: "已完成",
	unavailable: "当前部署未启用"
};
function KG() {
	let { snapshot: e } = Tt(), [t, n] = (0, B.useState)(null), r = wt();
	(0, B.useEffect)(() => n(null), [e]);
	let i = t ?? e?.repairs, a = i?.state || "pending", o = i?.items.reduce((e, t) => e + (t.pending || 0), 0) || 0, s = i?.items.reduce((e, t) => e + (t.failed || 0), 0) || 0, c = i?.items.reduce((e, t) => e + (t.review_count || 0), 0) || 0;
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		id: "upgradeRepairs",
		title: "自动修复",
		aside: /* @__PURE__ */ (0, V.jsx)(Ee, {
			tone: a === "failed" ? "error" : a === "running" ? "progress" : a === "review" ? "warning" : a === "complete" ? "success" : "neutral",
			children: /* @__PURE__ */ (0, V.jsx)("span", {
				"data-copy-key": `upgradeRepairs.${a}.status`,
				children: GG[a] || "未取得"
			}, a)
		}),
		children: [
			/* @__PURE__ */ (0, V.jsx)(I, { children: /* @__PURE__ */ (0, V.jsx)(D, { children: "升级后自动修正资料、更新缓存。" }) }),
			/* @__PURE__ */ (0, V.jsxs)(w, { children: [
				/* @__PURE__ */ (0, V.jsx)(C, {
					term: "待完成",
					children: /* @__PURE__ */ (0, V.jsxs)("span", { children: [/* @__PURE__ */ (0, V.jsx)(Un, { value: o }), " 项"] })
				}),
				/* @__PURE__ */ (0, V.jsx)(C, {
					term: "失败",
					children: /* @__PURE__ */ (0, V.jsxs)("span", { children: [/* @__PURE__ */ (0, V.jsx)(Un, { value: s }), " 项"] })
				}),
				/* @__PURE__ */ (0, V.jsx)(C, {
					term: "待复核",
					children: /* @__PURE__ */ (0, V.jsxs)("span", { children: [/* @__PURE__ */ (0, V.jsx)(Un, { value: c }), " 项"] })
				})
			] }),
			i?.message || r.error ? /* @__PURE__ */ (0, V.jsx)(I, { children: /* @__PURE__ */ (0, V.jsx)(b, { children: r.error || i?.message }) }) : null,
			a === "running" ? /* @__PURE__ */ (0, V.jsxs)(I, { children: [/* @__PURE__ */ (0, V.jsx)(D, { children: "资料与预览正在后台补全。" }), /* @__PURE__ */ (0, V.jsx)(Oe, {})] }) : null,
			/* @__PURE__ */ (0, V.jsx)(E, {
				status: c ? /* @__PURE__ */ (0, V.jsx)(S, {
					href: "/api/configuration/upgrade-repairs/review",
					children: "下载复核记录"
				}) : void 0,
				children: /* @__PURE__ */ (0, V.jsx)(l, {
					size: "small",
					variant: "secondary",
					disabled: !i?.available || a === "running" || !!r.busy || !s && a !== "failed",
					onClick: () => void r.run("retry", (e) => L("/api/configuration/upgrade-repairs/retry", {}, "POST", e), (e) => {
						n(e), document.dispatchEvent(new Event("peach:client-updates"));
					}),
					children: "重试失败项"
				})
			})
		]
	});
}
// src/react/settings/general-settings.tsx
function qG({ data: e, receipt: t, panel: n }) {
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		...fn(n),
		children: [
			e.updates ? /* @__PURE__ */ (0, V.jsx)(WG, {
				initial: e.updates,
				initialJob: e.update_job
			}) : null,
			/* @__PURE__ */ (0, V.jsx)(KG, {}),
			e.automatic_updates ? /* @__PURE__ */ (0, V.jsx)(NG, {
				initial: e.automatic_updates,
				receipt: t
			}) : null,
			e.startup ? /* @__PURE__ */ (0, V.jsx)(JG, {
				startup: e.startup,
				receipt: t
			}) : null
		]
	});
}
function JG({ startup: e, receipt: t }) {
	let [n, r] = (0, B.useState)(e.enabled), [i, a] = (0, B.useState)(e.silent), [o, s] = (0, B.useState)(e.desktop), c = wt(), u = e.available && !e.desktop_message;
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		guide: "startup",
		title: "开机自启",
		onSubmit: (r) => {
			r.preventDefault(), e.available && c.run("save", (e) => L("/api/configuration/startup", {
				enabled: n,
				silent: i,
				desktop: o
			}, "POST", e), () => t("已保存配置"));
		},
		children: [
			/* @__PURE__ */ (0, V.jsxs)(fe, { children: [
				/* @__PURE__ */ (0, V.jsx)(Se, {
					label: "开机后启动 Pear",
					children: /* @__PURE__ */ (0, V.jsx)(De, {
						"aria-label": "开机后启动 Pear",
						isSelected: n,
						isDisabled: !e.available,
						onChange: r
					})
				}),
				/* @__PURE__ */ (0, V.jsx)(Se, {
					label: "只启动托盘，不打开网页",
					description: "开机后在后台运行，需要时从托盘打开页面。",
					children: /* @__PURE__ */ (0, V.jsx)(De, {
						"aria-label": "只启动托盘，不打开网页",
						isSelected: i,
						isDisabled: !e.available || !n,
						onChange: a
					})
				}),
				/* @__PURE__ */ (0, V.jsx)(Se, {
					label: "在桌面创建快捷方式",
					description: e.desktop_message || void 0,
					children: /* @__PURE__ */ (0, V.jsx)(De, {
						"aria-label": "在桌面创建快捷方式",
						isSelected: o,
						isDisabled: !u,
						onChange: s
					})
				})
			] }),
			e.message || c.error ? /* @__PURE__ */ (0, V.jsxs)(I, {
				divided: !0,
				children: [e.message ? /* @__PURE__ */ (0, V.jsx)(D, { children: e.message }) : null, c.error ? /* @__PURE__ */ (0, V.jsx)(b, { children: c.error }) : null]
			}) : null,
			/* @__PURE__ */ (0, V.jsx)(E, { children: /* @__PURE__ */ (0, V.jsx)(l, {
				type: "submit",
				disabled: !e.available,
				...R(c.busy === "save"),
				children: "保存配置"
			}) })
		]
	});
}
// src/react/restart-redirect.ts
var YG = 8e3, XG = [
	{
		name: "机械硬盘，或内存 8 GB 以内",
		cache: "10–20 GiB",
		read: "256 / 128 KB",
		task: "1 个"
	},
	{
		name: "SATA SSD，内存 8–16 GB",
		cache: "20–50 GiB",
		read: "256 / 128 KB",
		task: "1–2 个"
	},
	{
		name: "NVMe SSD，内存 16 GB 以上",
		cache: "50–100 GiB",
		read: "256 / 128 KB",
		task: "2 个起步"
	}
], ZG = [
	["cache", "缓存上限"],
	["read", "读取长度（默认 / 最小）"],
	["task", "同时处理视频"]
];
function QG() {
	return /* @__PURE__ */ (0, V.jsx)("div", {
		className: "@container flex flex-col gap-3",
		children: /* @__PURE__ */ (0, V.jsxs)(v, {
			summary: "CloudDrive 设置帮助",
			children: [
				/* @__PURE__ */ (0, V.jsxs)(D, { children: ["先将 CloudDrive2 或 OpenList 中的网盘挂载为本机文件夹，再在这里选择。", /* @__PURE__ */ (0, V.jsx)(S, {
					href: "https://www.clouddrive2.com/help.html",
					children: "挂载帮助"
				})] }),
				/* @__PURE__ */ (0, V.jsx)(D, { children: "缓存按所在硬盘和可用内存选起步值，再根据播放表现调整。" }),
				/* @__PURE__ */ (0, V.jsx)(D, { children: "文件操作需要挂载工具和网盘账号授予写入权限。光鸭云盘的上传、建文件夹、改名和移动需要 CloudDrive2 v1.1.0 或更高版本，删除和复制暂不支持。" }),
				/* @__PURE__ */ (0, V.jsx)("ul", {
					"aria-label": "按缓存所在硬盘分档",
					className: "flex flex-col gap-2",
					children: XG.map((e) => /* @__PURE__ */ (0, V.jsxs)("li", {
						className: "flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3",
						children: [/* @__PURE__ */ (0, V.jsx)("p", {
							className: "text-body-medium text-text-primary",
							children: e.name
						}), /* @__PURE__ */ (0, V.jsx)("dl", {
							className: "inline-grid grid-cols-1 gap-2 @md:grid-cols-3",
							children: ZG.map(([t, n]) => /* @__PURE__ */ (0, V.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, V.jsx)("dt", {
									className: "text-caption-1-regular text-text-secondary",
									children: n
								}), /* @__PURE__ */ (0, V.jsx)("dd", {
									className: "text-body-regular text-text-primary",
									children: e[t]
								})]
							}, t))
						})]
					}, e.name))
				}),
				/* @__PURE__ */ (0, V.jsxs)("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, V.jsx)("li", { children: "缓存上限和清理方式填在 CloudDrive「设置」里，清理方式选 LRU。上限不要填 0，系统盘至少留 40 GiB；填完重开设置页确认存住了。" }),
						/* @__PURE__ */ (0, V.jsx)("li", { children: "读取长度和下载线程填在每个网盘各自的下载设置里，线程都从 2 开始。" }),
						/* @__PURE__ */ (0, V.jsx)("li", { children: "Buffer Cache 占内存，磁盘缓存和文件夹缓存占硬盘，改一个管不住另外两个。" })
					]
				}),
				/* @__PURE__ */ (0, V.jsx)(D, { children: /* @__PURE__ */ (0, V.jsx)(S, {
					href: "https://github.com/peach-mitao/peach/blob/master/docs/CLOUDDRIVE.md",
					children: "完整配置与调优说明"
				}) })
			]
		})
	});
}
// src/react/settings/cloud-proxy-settings.tsx
var $G = "/api/configuration/cloud-proxies", eK = [
	["direct", "直连"],
	["system", "跟随系统"],
	["http", "HTTP 代理"],
	["socks5", "SOCKS5 代理"]
];
function tK({ receipt: e }) {
	let [t, n] = (0, B.useState)(null), [r, i] = (0, B.useState)(!0), a = (0, B.useRef)(/* @__PURE__ */ new Set()), o = (0, B.useRef)(/* @__PURE__ */ new Set()), [s, c] = (0, B.useState)(!1), u = (0, B.useRef)(() => void 0), d = wt(), p = () => {
		o.current.size || d.run("refresh", (e) => Ie($G, e), (e) => {
			a.current.clear(), n(e), i(!1);
		}, (e) => {
			i(!1), d.setError(e instanceof Error ? e.message : "无法读取网盘代理");
		});
	};
	return u.current = p, (0, B.useEffect)(() => {
		u.current();
		let e = () => {
			a.current.size || u.current();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, []), (0, B.useEffect)(() => {
		if (!t) return;
		let e = (e) => e.mode === "http" || e.mode === "socks5";
		ft("cloudProxy", {
			configured: t.configured !== !1,
			unlinked: t.unlinked?.length ?? 0,
			accounts: t.accounts.map((t) => [e(t.data), e(t.api)])
		});
	}, [t]), r ? /* @__PURE__ */ (0, V.jsx)(ge, {
		label: "正在读取网盘代理",
		html: Ve
	}) : /* @__PURE__ */ (0, V.jsxs)(F, {
		guide: "cloud-proxy",
		title: "CloudDrive 代理",
		children: [/* @__PURE__ */ (0, V.jsxs)(I, { children: [/* @__PURE__ */ (0, V.jsx)(D, { children: f }), /* @__PURE__ */ (0, V.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				d.error ? /* @__PURE__ */ (0, V.jsxs)(P, {
					tone: "error",
					title: "没有读取配置",
					children: [
						d.error,
						" ",
						/* @__PURE__ */ (0, V.jsx)(M, {
							href: "/settings/downloads",
							size: "small",
							children: "下载设置"
						})
					]
				}) : null,
				t?.configured === !1 ? /* @__PURE__ */ (0, V.jsxs)(D, { children: ["填写 CloudDrive2 地址和 API 令牌后，在这里设置各网盘账号的代理。 ", /* @__PURE__ */ (0, V.jsx)(M, {
					href: "/settings/downloads",
					size: "small",
					children: "下载设置"
				})] }) : t?.accounts.length === 0 && !t.unlinked?.length ? /* @__PURE__ */ (0, V.jsx)(D, { children: "还没有使用 CloudDrive 的媒体库。" }) : null,
				t?.unlinked?.map((e) => /* @__PURE__ */ (0, V.jsxs)("div", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, V.jsx)(T, { children: /* @__PURE__ */ (0, V.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, V.jsx)(Te, { mark: Gt(e.location) }), e.name]
					}) }), /* @__PURE__ */ (0, V.jsx)(D, { children: "尚未匹配 CloudDrive 账号" })]
				}, e.root)),
				t?.accounts.map((t) => /* @__PURE__ */ (0, V.jsx)(nK, {
					initial: t,
					receipt: e,
					onDirty: () => a.current.add(t.id),
					onSaving: (e) => {
						e ? o.current.add(t.id) : o.current.delete(t.id), c(!!o.current.size);
					},
					onSaved: (e) => {
						a.current.delete(e.id), n((t) => t && {
							...t,
							accounts: t.accounts.map((t) => t.id === e.id ? e : t)
						});
					}
				}, t.id + t.revision))
			]
		})] }), /* @__PURE__ */ (0, V.jsx)(E, { children: /* @__PURE__ */ (0, V.jsx)(l, {
			variant: "secondary",
			disabled: s,
			onClick: p,
			...R(d.busy === "refresh"),
			children: "重新读取"
		}) })]
	});
}
function nK({ initial: e, receipt: t, onDirty: n, onSaved: r, onSaving: i }) {
	let [a, o] = (0, B.useState)(e), [s, c] = (0, B.useState)([]), u = a.libraries?.map((e) => e.name).join("、") || a.name, d = wt(), f = (e, t) => {
		o((n) => ({
			...n,
			[e]: t
		})), c((t) => t.includes(e) ? t : [...t, e]), n();
	};
	return /* @__PURE__ */ (0, V.jsxs)("form", {
		"aria-label": `${u} 代理`,
		onSubmit: (e) => {
			e.preventDefault(), i(!0), d.run("save", (e) => L($G, {
				id: a.id,
				revision: a.revision,
				...s.includes("api") ? { api: a.api } : {},
				...s.includes("data") ? { data: a.data } : {}
			}, "POST", e), (e) => {
				o(e), c([]), r(e), t("已保存 CloudDrive 代理");
			}).finally(() => i(!1));
		},
		className: "flex min-w-0 flex-col gap-4 border-t border-separator-border pt-4",
		children: [
			/* @__PURE__ */ (0, V.jsx)(T, { children: /* @__PURE__ */ (0, V.jsxs)("span", {
				className: "inline-flex items-center gap-2",
				children: [/* @__PURE__ */ (0, V.jsx)(Te, { mark: Gt(a.libraries?.[0]?.location || (a.cloud === "115open" ? "115" : a.cloud.toLowerCase())) }), u]
			}) }),
			/* @__PURE__ */ (0, V.jsxs)(D, { children: [
				a.name,
				" · ",
				a.path
			] }),
			/* @__PURE__ */ (0, V.jsx)(rK, {
				label: "数据代理",
				value: a.data,
				disabled: !a.writable || !!d.busy,
				onChange: (e) => f("data", e)
			}),
			/* @__PURE__ */ (0, V.jsx)(rK, {
				label: "API 代理",
				value: a.api,
				disabled: !a.writable || !!d.busy,
				onChange: (e) => f("api", e)
			}),
			a.writable ? null : /* @__PURE__ */ (0, V.jsx)(D, { children: "API 令牌需要“修改云盘”权限才能保存。" }),
			d.error ? /* @__PURE__ */ (0, V.jsx)(P, {
				tone: "error",
				title: "没有保存",
				children: d.error
			}) : null,
			/* @__PURE__ */ (0, V.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, V.jsx)(l, {
					type: "submit",
					disabled: !a.writable || !s.length,
					...R(d.busy === "save"),
					children: "保存配置"
				})
			})
		]
	});
}
function rK({ label: e, value: t, disabled: n, onChange: r }) {
	let i = t.mode === "http" || t.mode === "socks5";
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, V.jsx)(T, { children: e }),
			/* @__PURE__ */ (0, V.jsxs)(ye, {
				"aria-label": e,
				selectedKey: t.mode,
				isDisabled: n,
				onSelectionChange: (e) => {
					e && r({
						...t,
						mode: String(e)
					});
				},
				children: [t.mode === "unknown" ? /* @__PURE__ */ (0, V.jsx)(be, {
					id: "unknown",
					children: "无法识别的代理类型"
				}) : null, eK.map(([e, t]) => /* @__PURE__ */ (0, V.jsx)(be, {
					id: e,
					children: t
				}, e))]
			}),
			i ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, V.jsx)(O, {
					className: "min-w-40 flex-1",
					label: `${e}地址`,
					value: t.host,
					autoComplete: "off",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						host: e
					})
				}), /* @__PURE__ */ (0, V.jsx)(O, {
					className: "w-full sm:w-28",
					label: `${e}端口`,
					value: t.port ? String(t.port) : "",
					inputMode: "numeric",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						port: Number(e)
					})
				})]
			}), /* @__PURE__ */ (0, V.jsxs)(v, {
				summary: "代理认证",
				children: [
					/* @__PURE__ */ (0, V.jsx)(O, {
						label: `${e}用户名`,
						value: t.username,
						autoComplete: "off",
						isDisabled: n,
						onChange: (e) => r({
							...t,
							username: e
						})
					}),
					/* @__PURE__ */ (0, V.jsx)(O, {
						label: `${e}密码`,
						type: "password",
						value: t.password || "",
						autoComplete: "new-password",
						isDisabled: n,
						placeholder: t.password_set ? "已保存，留空不改" : "可选",
						onChange: (e) => r({
							...t,
							password: e
						})
					}),
					t.password_set ? /* @__PURE__ */ (0, V.jsx)(h, {
						isSelected: !!t.clear_password,
						isDisabled: n,
						onChange: (e) => r({
							...t,
							clear_password: e
						}),
						children: "清除已保存的密码"
					}) : null
				]
			})] }) : null
		]
	});
}
// src/react/settings/library-icon-picker.tsx
var iK = [
	["", "自动识别"],
	["hard-drive", "磁盘"],
	["database", "资料库"],
	["heart", "心动"],
	["heart-hand", "亲密"],
	["flame", "热情"],
	["cherry", "樱桃"],
	["lollipop", "甜心"],
	["candy", "糖果"],
	["banana", "香蕉"],
	["droplets", "湿润"],
	["venus", "女性"],
	["mars", "男性"],
	["venus-and-mars", "情侣"],
	["gem", "精选"],
	["crown", "女王"],
	["ribbon", "丝带"],
	["shirt", "制服"],
	["graduation-cap", "学生"],
	["stethoscope", "护士"],
	["glasses", "眼镜"],
	["footprints", "足迹"],
	["hand", "手部"],
	["flower", "花朵"],
	["venetian-mask", "角色扮演"],
	["rabbit", "兔女郎"],
	["paw-print", "兽耳"],
	["dumbbell", "健身"],
	["bed-double", "卧室"],
	["bath", "浴室"],
	["key-round", "私密"],
	["wine", "微醺"],
	["cigarette", "烟"],
	["moon", "夜色"],
	["sparkles", "幻想"],
	["camera", "写真"],
	["video", "影片"],
	["film", "电影"],
	["image", "图集"],
	["gamepad-2", "游戏"],
	["star", "收藏"],
	["tags", "主题"]
];
function aK(e) {
	let t = e === "local" ? "" : te[e];
	return t ? [t, "自动识别"] : ["hard-drive", "默认"];
}
var oK = "auto";
function sK({ value: n, label: r, kind: s = "local", onChange: c }) {
	let u = (0, B.useRef)(null), [d, f] = (0, B.useState)(!1), [p, m] = (0, B.useState)(n), [h, g] = aK(s);
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(l, {
		ref: u,
		variant: "secondary",
		className: "self-start",
		"aria-label": r,
		"aria-haspopup": "dialog",
		"aria-expanded": d,
		onClick: () => {
			m(n), f(!0);
		},
		children: /* @__PURE__ */ (0, V.jsxs)("span", {
			"data-icon-choice": !0,
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, V.jsx)(Te, { mark: n || h }), ((e) => e && iK.find(([t]) => t === e)?.[1] || g)(n)]
		})
	}), /* @__PURE__ */ (0, V.jsx)(t, {
		triggerRef: u,
		isOpen: d,
		onOpenChange: f,
		placement: "bottom start",
		offset: 4,
		className: ne,
		children: /* @__PURE__ */ (0, V.jsxs)(i, {
			"aria-label": `${r}可选图标`,
			className: "flex w-72 flex-col gap-3 outline-none",
			children: [
				/* @__PURE__ */ (0, V.jsx)(e, {
					slot: "title",
					className: "px-1 text-body-medium text-text-primary",
					children: "选择媒体库图标"
				}),
				/* @__PURE__ */ (0, V.jsx)(a, {
					"aria-label": "可选图标",
					value: p || oK,
					onChange: (e) => m(e === oK ? "" : e),
					className: "inline-grid grid-cols-7 gap-1",
					children: iK.map(([e, t]) => /* @__PURE__ */ (0, V.jsx)(o, {
						value: e || oK,
						"aria-label": e ? t : g,
						className: "flex h-10 cursor-pointer items-center justify-center rounded-lg text-foreground-icon-secondary outline-none hover:bg-dropdown-item-hover-background focus-visible:ring-2 focus-visible:ring-border-focus-ring data-selected:bg-dropdown-item-hover-background data-selected:text-text-primary",
						children: /* @__PURE__ */ (0, V.jsx)(Te, { mark: e || h })
					}, e || oK))
				}),
				/* @__PURE__ */ (0, V.jsxs)("div", {
					className: "flex justify-end gap-2 border-t border-separator-border pt-2.5",
					children: [/* @__PURE__ */ (0, V.jsx)(l, {
						variant: "secondary",
						onClick: () => f(!1),
						children: "取消"
					}), /* @__PURE__ */ (0, V.jsx)(l, {
						disabled: p === n,
						onClick: () => {
							c(p), f(!1);
						},
						children: "应用"
					})]
				})
			]
		})
	})] });
}
// src/react/settings/library-policy-settings.tsx
var cK = [
	["probe", "读取视频信息"],
	["metadata", "联网补资料"],
	["cover", "联网补封面"],
	["people", "联网补人物图片"],
	["preview", "生成九宫格预览"]
], lK = [
	"probe",
	"metadata",
	"cover",
	"people",
	"preview"
], uK = [
	[
		"auto",
		"自动补全",
		"缺什么联网补什么"
	],
	[
		"local",
		"仅使用本地资料",
		"不联网，只用本地 NFO 和图片"
	],
	[
		"custom",
		"自定义",
		"逐项选择要做的步骤"
	]
];
function dK() {
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		"data-policy-legend": "",
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, V.jsx)(D, { children: ce }), /* @__PURE__ */ (0, V.jsxs)(v, {
			summary: "三种处理方式对比",
			children: [/* @__PURE__ */ (0, V.jsxs)("table", {
				"data-policy-matrix": "",
				className: "text-body-2-regular",
				children: [/* @__PURE__ */ (0, V.jsx)("thead", { children: /* @__PURE__ */ (0, V.jsxs)("tr", { children: [/* @__PURE__ */ (0, V.jsx)("th", {
					scope: "col",
					children: /* @__PURE__ */ (0, V.jsx)(r, { children: "步骤" })
				}), ae.map((e) => /* @__PURE__ */ (0, V.jsx)("th", {
					scope: "col",
					children: e
				}, e))] }) }), /* @__PURE__ */ (0, V.jsx)("tbody", { children: se.map(([e, ...t]) => /* @__PURE__ */ (0, V.jsxs)("tr", { children: [/* @__PURE__ */ (0, V.jsx)("th", {
					scope: "row",
					children: e
				}), t.map((e, t) => /* @__PURE__ */ (0, V.jsx)("td", {
					"data-policy-cell": e === "✓" ? "on" : e === "—" ? "off" : "choice",
					children: e === "✓" ? /* @__PURE__ */ (0, V.jsx)("span", {
						"aria-label": "做",
						children: "✓"
					}) : e === "—" ? /* @__PURE__ */ (0, V.jsx)("span", {
						"aria-label": "不做",
						children: "—"
					}) : e
				}, ae[t]))] }, e)) })]
			}), /* @__PURE__ */ (0, V.jsx)(D, { children: oe })]
		})]
	});
}
function fK({ name: e, value: t, onChange: n }) {
	return /* @__PURE__ */ (0, V.jsx)(ve, {
		"data-guide-target": "library-policy",
		className: "w-full",
		"aria-label": `${e} 处理方式`,
		selectedKey: t,
		prefix: "处理方式",
		renderValue: /* @__PURE__ */ (0, V.jsx)("span", {
			className: "truncate",
			children: uK.find(([e]) => e === t)?.[1]
		}),
		onSelectionChange: (e) => n(String(e)),
		children: uK.map(([e, t, n]) => /* @__PURE__ */ (0, V.jsx)(be, {
			id: e,
			textValue: t,
			children: /* @__PURE__ */ (0, V.jsxs)("span", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, V.jsx)("span", { children: t }), /* @__PURE__ */ (0, V.jsx)("span", {
					className: "text-body-2-regular text-text-secondary whitespace-normal",
					children: n
				})]
			})
		}, e))
	});
}
function pK({ name: e, value: t, onChange: n }) {
	return /* @__PURE__ */ (0, V.jsx)(v, {
		defaultOpen: !0,
		summary: `${e} 的处理步骤（${t.length}/${cK.length}）`,
		children: /* @__PURE__ */ (0, V.jsx)("div", {
			className: "flex flex-wrap gap-x-6 gap-y-2",
			role: "group",
			"aria-label": `${e} 处理步骤`,
			children: cK.map(([e, r]) => /* @__PURE__ */ (0, V.jsx)(h, {
				isSelected: t.includes(e),
				onChange: (r) => n(r ? [...t, e] : t.filter((t) => t !== e)),
				children: r
			}, e))
		})
	});
}
function mK({ id: e, name: r, value: a, onChange: o }) {
	let c = (0, B.useRef)(null), [l, u] = (0, B.useState)(!1), d = s.find(([e]) => e === a)?.[1] || "无颜色", f = (t) => {
		o(t), st(e, t), u(!1);
	};
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsxs)("button", {
		ref: c,
		type: "button",
		className: "text-body-medium",
		"data-glow-chip": "",
		"data-library-color-trigger": "",
		"aria-haspopup": "dialog",
		"aria-expanded": l,
		"aria-label": `${r || "未命名媒体库"} 来源色：${d}`,
		title: d,
		onClick: () => u(!0),
		children: [
			/* @__PURE__ */ (0, V.jsx)("span", {
				"aria-hidden": !0,
				className: "text-text-tertiary",
				children: "来源色"
			}),
			a ? /* @__PURE__ */ (0, V.jsx)("span", {
				"data-glow-ball": "",
				"aria-hidden": "true",
				"data-accent-ball": a
			}) : /* @__PURE__ */ (0, V.jsx)("span", {
				"data-glow-ball": "",
				"data-library-none": "",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, V.jsx)("span", { children: d })
		]
	}), /* @__PURE__ */ (0, V.jsx)(n, {
		getContainer: () => at(c.current),
		children: /* @__PURE__ */ (0, V.jsx)(t, {
			triggerRef: c,
			isOpen: l,
			onOpenChange: u,
			placement: "bottom start",
			offset: 8,
			containerPadding: 12,
			className: ne,
			children: /* @__PURE__ */ (0, V.jsxs)(i, {
				"aria-label": `${r || "未命名媒体库"} 来源色`,
				className: "outline-none",
				children: [/* @__PURE__ */ (0, V.jsx)("p", {
					className: "px-1 pb-2 text-body-medium text-text-primary",
					children: "选择来源色"
				}), /* @__PURE__ */ (0, V.jsxs)("div", {
					"data-accent-grid": "",
					"data-library-colors": "",
					role: "group",
					children: [/* @__PURE__ */ (0, V.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": !a,
						title: "无颜色",
						"aria-label": "无颜色",
						onClick: () => f(""),
						children: /* @__PURE__ */ (0, V.jsx)("span", {
							"data-glow-ball": "",
							"data-library-none": "",
							"aria-hidden": "true"
						})
					}), s.map(([e, t]) => /* @__PURE__ */ (0, V.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": e === a,
						title: t,
						"aria-label": t,
						onClick: () => f(e),
						children: /* @__PURE__ */ (0, V.jsx)("span", {
							"data-glow-ball": "",
							"aria-hidden": "true",
							"data-accent-ball": e
						})
					}, e))]
				})]
			})
		})
	})] });
}
// src/react/settings/push-discovery-settings.tsx
var hK = "/api/configuration/push-discovery", gK = "/api/configuration/push-discovery/secret";
function _K({ initial: e, receipt: t }) {
	let [n, r] = (0, B.useState)(e), [i, a] = (0, B.useState)(e.prefixes), [o, s] = (0, B.useState)(""), c = wt(), u = n.media_roots, [d, f] = (0, B.useState)(e), p = (e, n) => {
		r(e), f(e), a(e.prefixes), s(""), t(n);
	}, m = (e, t) => a((n) => n.map((n, r) => r === e ? {
		...n,
		...t
	} : n)), h = (e) => {
		e.preventDefault();
		let t = {
			enabled: n.enabled,
			watch_local: n.watch_local,
			cloud: n.cloud,
			prefixes: i
		};
		c.run("save", (e) => L(hK, t, "POST", e), (e) => p(e, "已保存配置"), (e) => s(qe(e)));
	}, g = () => {
		c.run("secret", (e) => L(gK, {}, "POST", e), (e) => p(e, "已更换共享密钥"), (e) => s(qe(e)));
	}, _ = `已入库 ${d.queue.ingested} 个文件` + (d.queue.failed ? `，${d.queue.failed} 个入库失败` : "") + (d.queue.pending ? `，队列里还有 ${d.queue.pending} 条` : ""), y = d.local_running ? `正在监视 ${d.local_roots.join("、")}` : d.local_message || "没有运行";
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		id: "pushDiscovery",
		guide: "discovery",
		title: "自动发现新文件",
		onSubmit: h,
		children: [
			/* @__PURE__ */ (0, V.jsx)(I, { children: /* @__PURE__ */ (0, V.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, V.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: "本机监视"
				}), /* @__PURE__ */ (0, V.jsx)(Ee, {
					tone: !d.enabled || !d.watch_local ? "neutral" : d.local_running ? "progress" : "warning",
					children: !d.enabled || !d.watch_local ? "未启用" : d.local_running ? "运行中" : "未运行"
				})]
			}) }),
			/* @__PURE__ */ (0, V.jsxs)(fe, { children: [
				/* @__PURE__ */ (0, V.jsx)(Se, {
					label: "发现新文件后自动入库",
					description: d.enabled ? _ : void 0,
					children: /* @__PURE__ */ (0, V.jsx)(De, {
						"aria-label": "发现新文件后自动入库",
						isSelected: n.enabled,
						isDisabled: !n.available,
						onChange: (e) => r({
							...n,
							enabled: e
						})
					})
				}),
				/* @__PURE__ */ (0, V.jsx)(Se, {
					label: "监视本机文件夹",
					description: d.enabled && d.watch_local ? y : void 0,
					children: /* @__PURE__ */ (0, V.jsx)(De, {
						"aria-label": "监视本机文件夹",
						isSelected: n.watch_local,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							watch_local: e
						})
					})
				}),
				/* @__PURE__ */ (0, V.jsx)(Se, {
					label: "接收 CloudDrive2 通知",
					description: "网盘目录有变化时由 CloudDrive2 推送过来。",
					children: /* @__PURE__ */ (0, V.jsx)(De, {
						"aria-label": "接收 CloudDrive2 通知",
						isSelected: n.cloud,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							cloud: e
						})
					})
				}),
				d.enabled && d.cloud ? /* @__PURE__ */ (0, V.jsx)(Se, {
					label: "Webhook 配置",
					description: d.config_toml ? "贴进 CloudDrive2「设置 → Webhooks」，需要会员；更换密钥后要重贴。" : d.origin ? "还没有共享密钥，保存配置后生成。" : "要先有 CloudDrive2 能访问的局域网地址才能生成。"
				}) : null
			] }),
			d.enabled && d.queue.last_error ? /* @__PURE__ */ (0, V.jsx)(I, {
				divided: !0,
				children: /* @__PURE__ */ (0, V.jsx)(P, {
					tone: "error",
					title: "最近一次入库失败",
					children: d.queue.last_error
				})
			}) : null,
			d.enabled && d.cloud && d.config_toml ? /* @__PURE__ */ (0, V.jsx)(I, {
				divided: !0,
				children: /* @__PURE__ */ (0, V.jsx)("div", {
					className: "flex flex-col gap-3",
					children: /* @__PURE__ */ (0, V.jsxs)(v, {
						summary: "查看配置",
						children: [/* @__PURE__ */ (0, V.jsx)(It, {
							code: d.config_toml,
							language: "toml",
							label: "CloudDrive2 配置",
							bounded: !1,
							copyLabel: "复制配置",
							onCopy: () => t("已复制 CloudDrive2 配置")
						}), /* @__PURE__ */ (0, V.jsx)(D, { children: "Windows 桌面版粘贴后显示「无效」时，把这段存成 .toml 文件，放进 %LOCALAPPDATA%\\CloudDrive.WinUI\\webhooks\\ 目录。" })]
					})
				})
			}) : null,
			n.enabled && n.cloud ? /* @__PURE__ */ (0, V.jsx)(I, {
				divided: !0,
				children: /* @__PURE__ */ (0, V.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, V.jsx)(T, { children: "云端路径前缀" }),
						/* @__PURE__ */ (0, V.jsx)("div", {
							role: "group",
							"aria-label": "云端路径前缀",
							className: "flex flex-col gap-3",
							children: i.map((e, t) => /* @__PURE__ */ (0, V.jsxs)("div", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, V.jsx)(O, {
										className: "min-w-0 flex-1",
										"aria-label": `云端路径前缀 ${t + 1}`,
										placeholder: "/115",
										autoComplete: "off",
										maxLength: 200,
										value: e.prefix,
										onChange: (e) => m(t, { prefix: e })
									}),
									/* @__PURE__ */ (0, V.jsx)(ve, {
										"aria-label": `前缀 ${t + 1} 对应的媒体根`,
										prefix: "对应目录",
										selectedKey: e.root,
										onSelectionChange: (e) => {
											e !== null && m(t, { root: String(e) });
										},
										children: u.map((e) => /* @__PURE__ */ (0, V.jsx)(be, {
											id: e,
											children: e
										}, e))
									}),
									/* @__PURE__ */ (0, V.jsx)(l, {
										variant: "danger",
										iconOnly: !0,
										leadingIcon: ee,
										"aria-label": "移除这一条",
										onClick: () => a((e) => e.filter((e, n) => n !== t))
									})
								]
							}, t))
						}),
						/* @__PURE__ */ (0, V.jsx)("div", { children: /* @__PURE__ */ (0, V.jsx)(l, {
							variant: "secondary",
							onClick: () => a((e) => [...e, {
								prefix: "",
								root: u[0] ?? ""
							}]),
							children: "添加前缀"
						}) })
					]
				})
			}) : null,
			o || c.error ? /* @__PURE__ */ (0, V.jsx)(I, {
				divided: !0,
				children: /* @__PURE__ */ (0, V.jsx)(b, { children: o || c.error })
			}) : null,
			/* @__PURE__ */ (0, V.jsxs)(E, { children: [d.enabled && d.cloud && d.config_toml ? /* @__PURE__ */ (0, V.jsx)(l, {
				variant: "secondary",
				onClick: g,
				disabled: !n.available,
				...R(c.busy === "secret"),
				children: "更换密钥"
			}) : null, /* @__PURE__ */ (0, V.jsx)(l, {
				type: "submit",
				disabled: !n.available,
				...R(c.busy === "save"),
				children: "保存配置"
			})] })
		]
	});
}
// src/react/settings/media-settings.tsx
async function vK(e) {
	let t;
	try {
		t = await Ye();
	} catch {
		return !0;
	}
	if (!ct(t)) return !0;
	let { confirmed: n } = await Ue({
		title: "扫描与采集正在进行",
		body: vt(t, e),
		confirmLabel: "仍然保存"
	});
	return n;
}
var yK = (e) => Bt.find(([t]) => t === e)?.[1] ?? e, bK = [...Bt, ["smb", "SMB 共享"]], xK = (e) => e.library_icon || aK(e.transport === "smb" ? "smb" : e.location)[0], SK = async (e) => (await L(ie, { initial: e })).path, CK = (e) => ({
	library_id: e.library_id,
	library: e.library,
	library_icon: e.library_icon,
	library_color: e.library_color,
	library_policy: e.library_policy,
	library_stages: e.library_stages
}), wK = (e) => e.library_stages ? lK.filter((t) => e.library_stages.split(",").includes(t)) : [], TK = (e = "") => ({
	path: e,
	transport: e.startsWith("smb://") ? "smb" : "filesystem",
	location: "local",
	root: "",
	library_id: dt(),
	library: "",
	library_icon: "",
	library_color: "",
	library_policy: "auto",
	library_stages: "",
	cost: "free"
});
function EK(e) {
	let t = e.media_sources?.filter((e) => Bt.some(([t]) => t === e.location));
	return t?.length ? t.map((e) => ({
		transport: e.transport === "smb" || e.path.startsWith("smb://") ? "smb" : "filesystem",
		smb_username: e.smb_username,
		smb_password: "",
		smb_encrypt: e.smb_encrypt,
		smb_password_saved: e.smb_password_saved,
		path: e.path,
		location: e.location,
		root: e.root,
		library: e.library || "",
		library_icon: e.library_icon || "",
		library_color: e.library_color || "",
		library_policy: e.library_policy || "auto",
		library_stages: e.library_stages || "",
		root_id: e.root_id,
		library_id: e.library_id || dt(),
		cost: e.cost ?? xt(e.location)
	})) : (e.media_dirs.length ? e.media_dirs : [""]).map((e) => TK(e));
}
var DK = (e) => !(e instanceof c) || e.status !== 400 ? null : e.body?.errors ?? null;
function OK({ data: e, receipt: t, panel: n }) {
	let r = !!e.media_sources?.some((e) => Wt(e.location));
	return (0, B.useEffect)(() => {
		if (e.editable) {
			let t = /* @__PURE__ */ new Map();
			for (let n of EK(e)) t.set(n.library_id, (t.get(n.library_id) ?? 0) + 1);
			ft("media", {
				folders: [...t.values()],
				cloud: r
			});
		}
		let t = e.push_discovery;
		t && ft("discovery", {
			enabled: t.enabled,
			watchLocal: t.watch_local,
			cloud: t.cloud,
			webhook: t.enabled && t.cloud && !!t.config_toml,
			prefixes: t.prefixes.length
		});
	}, [e, r]), /* @__PURE__ */ (0, V.jsxs)("div", {
		...fn(n),
		children: [
			e.editable ? /* @__PURE__ */ (0, V.jsx)(kK, {
				data: e,
				receipt: t
			}) : /* @__PURE__ */ (0, V.jsx)(P, {
				tone: "neutral",
				title: "只读",
				children: e.notice
			}),
			e.editable ? null : /* @__PURE__ */ (0, V.jsx)(jK, { data: e }),
			r ? /* @__PURE__ */ (0, V.jsx)(tK, { receipt: t }) : null,
			e.push_discovery ? /* @__PURE__ */ (0, V.jsx)(_K, {
				initial: e.push_discovery,
				receipt: t
			}) : null
		]
	});
}
function kK({ data: e, receipt: t }) {
	let { rows: n, edit: r, add: i, remove: a, errors: o, setErrors: s, picking: c, pick: u, inputRef: d } = Kt({
		initial: () => EK(e),
		blank: () => TK(),
		pickFolder: SK,
		describe: qe
	}), [f, p] = (0, B.useState)(!1), [g, _] = (0, B.useState)(!1), [v, y] = (0, B.useState)(""), [b, x] = (0, B.useState)({}), [C, w] = (0, B.useState)(null), T = (0, B.useRef)(e.revision), k = (0, B.useRef)(!1), j = wt();
	Ot();
	let N = (e, t) => {
		n.forEach((i, a) => {
			i.library_id === n[e].library_id && r(a, t);
		});
	}, ee = kt([...n.reduce((e, t) => e.has(t.library_id) ? e : e.set(t.library_id, t), /* @__PURE__ */ new Map()).values()], (e) => e.library_id), [te, ne] = (0, B.useState)(null);
	(0, B.useEffect)(() => {
		if (!te) return;
		let e = document.querySelector(`[data-library-key="${CSS.escape(te)}"] [data-library-head] input`);
		e?.scrollIntoView({ block: "center" }), e?.focus(), ne(null);
	}, [te]);
	let re = (e, t) => {
		let i = n.find((e) => e.library_id === t);
		if (i) {
			r(e, CK(i));
			return;
		}
		let a = dt();
		r(e, {
			library_id: a,
			library: "",
			library_icon: "",
			library_color: "",
			library_policy: "auto",
			library_stages: ""
		}), ne(a);
	};
	(0, B.useEffect)(() => {
		if (!C) return;
		let e = setTimeout(() => location.assign(C.url), YG);
		return () => clearTimeout(e);
	}, [C]);
	let ie = (e) => {
		e.preventDefault();
		let t = n.findIndex((e) => !e.cost);
		if (t >= 0) {
			_(!0);
			let n = e.currentTarget;
			requestAnimationFrame(() => n.querySelector(`[data-media-read-policy="${t}"] button`)?.focus());
		} else j.busy || k.current || (y(""), k.current = !0, vK(f).then((e) => {
			k.current = !1, e && ae();
		}));
	}, ae = () => {
		j.run("save", (t) => L(m, {
			revision: T.current,
			media_dirs: n.map((e) => e.path),
			...e.media_sources ? { media_sources: n } : {},
			port: String(e.port),
			scan_now: f
		}, "POST", t), (e) => {
			T.current = e.revision, s([]), t("已保存配置"), w(e);
		}, (e) => {
			let t = DK(e);
			s(t?.media_dirs ?? []), (!t || t.port) && y(t?.port || qe(e));
		});
	};
	if (C) return /* @__PURE__ */ (0, V.jsx)(F, {
		guide: "media",
		title: "媒体库与目录",
		children: /* @__PURE__ */ (0, V.jsx)(I, { children: /* @__PURE__ */ (0, V.jsxs)(P, {
			tone: "success",
			title: "配置已保存",
			children: [
				"Pear 正在重新启动。稍后自动跳转，或点击",
				/* @__PURE__ */ (0, V.jsx)(M, {
					href: C.url,
					size: "small",
					children: "进入馆藏"
				}),
				"。"
			]
		}) })
	});
	let oe = (t) => e.media_sources?.find((e) => e.root_id === t.root_id && e.path === t.path), se = n.some((e) => Wt(e.location)), ce = se ? (e.mount_dependencies ?? []).filter((e) => !e.available) : [];
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		guide: "media",
		title: "媒体库与目录",
		onSubmit: ie,
		children: [/* @__PURE__ */ (0, V.jsxs)(I, { children: [
			/* @__PURE__ */ (0, V.jsx)(dK, {}),
			/* @__PURE__ */ (0, V.jsx)("div", {
				role: "group",
				"aria-label": "媒体库与目录",
				className: "flex flex-col gap-4",
				children: ee.map((e) => {
					let t = n.findIndex((t) => t.library_id === e.library_id), s = n.map((e, t) => ({
						row: e,
						index: t
					})).filter(({ row: t }) => t.library_id === e.library_id), f = e.library_policy, p = e.library || "未命名媒体库";
					return /* @__PURE__ */ (0, V.jsxs)("div", {
						"data-library-block": "",
						"data-library-key": e.library_id,
						className: Be({
							variant: "raised",
							padding: "none",
							className: "flex flex-col p-2"
						}),
						"data-library": e.library_color ? e.library_id : void 0,
						children: [
							/* @__PURE__ */ (0, V.jsxs)("div", {
								"data-library-head": "",
								children: [
									/* @__PURE__ */ (0, V.jsx)(sK, {
										label: `${p} 图标`,
										value: e.library_icon,
										kind: e.transport === "smb" ? "smb" : e.location,
										onChange: (e) => N(t, { library_icon: e })
									}),
									/* @__PURE__ */ (0, V.jsx)(O, {
										className: "w-full",
										"aria-label": `${p} 名称`,
										maxLength: 80,
										placeholder: "媒体库名称",
										value: e.library,
										onChange: (e) => N(t, { library: e })
									}),
									/* @__PURE__ */ (0, V.jsx)(mK, {
										id: e.library_id,
										name: e.library,
										value: e.library_color,
										onChange: (e) => N(t, { library_color: e })
									}),
									/* @__PURE__ */ (0, V.jsx)(fK, {
										name: p,
										value: f,
										onChange: (n) => N(t, {
											library_policy: n,
											library_stages: n === "custom" ? e.library_stages || lK.join(",") : ""
										})
									})
								]
							}),
							f === "custom" ? /* @__PURE__ */ (0, V.jsx)(pK, {
								name: p,
								value: wK(e),
								onChange: (e) => N(t, { library_stages: lK.filter((t) => e.includes(t)).join(",") })
							}) : null,
							/* @__PURE__ */ (0, V.jsxs)("div", {
								"data-library-folders": "",
								role: "group",
								"aria-label": `${p} 的文件夹`,
								children: [s.map(({ row: t, index: i }) => /* @__PURE__ */ (0, V.jsxs)(zt, {
									label: `媒体目录 ${i + 1}`,
									path: t.path,
									onPath: (e) => r(i, {
										path: e,
										transport: e.startsWith("smb://") ? "smb" : t.transport
									}),
									error: o[i],
									inputRef: d(i),
									picking: c === i,
									onPick: () => void u(i),
									onRemove: n.length > 1 ? () => a(i) : void 0,
									status: oe(t) ? /* @__PURE__ */ (0, V.jsx)(AK, { online: oe(t)?.online }) : null,
									children: [/* @__PURE__ */ (0, V.jsxs)(Rt, { children: [
										/* @__PURE__ */ (0, V.jsx)(Ut, {
											index: i,
											value: t.transport === "smb" ? "smb" : t.location,
											options: bK,
											onChange: (e) => {
												let n = e === "smb";
												r(i, {
													transport: n ? "smb" : "filesystem",
													location: n ? "local" : e,
													cost: n || e === "local" ? "free" : "",
													path: n ? t.path.startsWith("smb://") ? t.path : "smb://" : t.path.startsWith("smb://") ? "" : t.path
												}), x((e) => {
													let t = { ...e };
													return delete t[i], t;
												});
											}
										}),
										/* @__PURE__ */ (0, V.jsx)(Vt, {
											index: i,
											cost: t.cost,
											onChange: (e) => r(i, { cost: e }),
											error: g && !t.cost ? "请选择媒体读取策略" : void 0
										}),
										t.root_id && !oe(t) ? /* @__PURE__ */ (0, V.jsx)(Lt, {
											label: "变更方式",
											className: "w-full @lg:w-auto @lg:flex-1",
											children: /* @__PURE__ */ (0, V.jsxs)(ye, {
												className: "w-full",
												"aria-label": `目录变更方式 ${i + 1}`,
												placeholder: "选择目录变更方式",
												selectedKey: t.change_mode || null,
												onSelectionChange: (e) => {
													e === "add" ? r(i, {
														root_id: void 0,
														root: "",
														change_mode: ""
													}) : r(i, { change_mode: "relocate" });
												},
												children: [/* @__PURE__ */ (0, V.jsx)(be, {
													id: "relocate",
													children: "重定位此目录，保留文件记录"
												}), /* @__PURE__ */ (0, V.jsx)(be, {
													id: "add",
													children: "添加另一目录"
												})]
											})
										}) : null,
										ee.length > 1 ? /* @__PURE__ */ (0, V.jsx)(Lt, {
											label: "移到媒体库",
											className: "w-full @lg:w-48",
											children: /* @__PURE__ */ (0, V.jsxs)(ye, {
												className: "w-full",
												"aria-label": `目录所属媒体库 ${i + 1}`,
												selectedKey: t.library_id,
												renderValue: /* @__PURE__ */ (0, V.jsxs)("span", {
													className: "flex min-w-0 items-center gap-2",
													children: [/* @__PURE__ */ (0, V.jsx)(Te, { mark: xK(e) }), /* @__PURE__ */ (0, V.jsx)("span", {
														className: "truncate",
														children: p
													})]
												}),
												onSelectionChange: (e) => {
													e && re(i, String(e));
												},
												children: [ee.map((e) => /* @__PURE__ */ (0, V.jsx)(be, {
													id: e.library_id,
													textValue: e.library || "未命名媒体库",
													children: /* @__PURE__ */ (0, V.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, V.jsx)(Te, { mark: xK(e) }), /* @__PURE__ */ (0, V.jsx)("span", {
															className: "truncate",
															children: e.library || "未命名媒体库"
														})]
													})
												}, e.library_id)), s.length > 1 ? /* @__PURE__ */ (0, V.jsx)(be, {
													id: "new",
													textValue: "新建媒体库",
													children: /* @__PURE__ */ (0, V.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, V.jsx)(Te, { mark: "plus" }), /* @__PURE__ */ (0, V.jsx)("span", { children: "新建媒体库" })]
													})
												}) : null]
											})
										}) : null
									] }), t.transport === "smb" ? /* @__PURE__ */ (0, V.jsxs)("div", {
										className: "flex w-full flex-col gap-2",
										children: [
											/* @__PURE__ */ (0, V.jsxs)(Rt, { children: [/* @__PURE__ */ (0, V.jsx)(Lt, {
												label: "SMB 账号",
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, V.jsx)(O, {
													"aria-label": `SMB 账号 ${i + 1}`,
													value: t.smb_username || "",
													autoComplete: "off",
													onChange: (e) => r(i, { smb_username: e })
												})
											}), /* @__PURE__ */ (0, V.jsx)(Lt, {
												label: "SMB 密码",
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, V.jsx)(O, {
													"aria-label": `SMB 密码 ${i + 1}`,
													type: "password",
													value: t.smb_password || "",
													autoComplete: "new-password",
													placeholder: t.smb_password_saved ? "留空保留已保存密码" : "",
													onChange: (e) => r(i, { smb_password: e })
												})
											})] }),
											/* @__PURE__ */ (0, V.jsx)(h, {
												isSelected: t.smb_encrypt || !1,
												onChange: (e) => r(i, { smb_encrypt: e }),
												children: "要求 SMB 加密"
											}),
											/* @__PURE__ */ (0, V.jsx)(h, {
												isSelected: t.smb_clear || !1,
												onChange: (e) => r(i, { smb_clear: e }),
												children: "移除已保存的 SMB 账号"
											}),
											/* @__PURE__ */ (0, V.jsx)(l, {
												className: "self-start",
												variant: "secondary",
												...R(j.busy === `smb-${i}`),
												onClick: () => void j.run(`smb-${i}`, (e) => L("/api/configuration/smb/test", t, "POST", e), (e) => x((t) => ({
													...t,
													[i]: {
														message: "共享目录可读取",
														directories: e.directories
													}
												})), (e) => x((t) => ({
													...t,
													[i]: {
														message: qe(e),
														directories: []
													}
												}))),
												children: "测试连接"
											}),
											b[i] ? /* @__PURE__ */ (0, V.jsx)(D, { children: b[i].message }) : null,
											b[i]?.directories.length ? /* @__PURE__ */ (0, V.jsx)(ye, {
												"aria-label": `SMB 子目录 ${i + 1}`,
												placeholder: "进入子目录",
												selectedKey: null,
												onSelectionChange: (e) => {
													e && (r(i, { path: t.path.replace(/\/$/, "") + "/" + encodeURIComponent(String(e)) }), x((e) => ({
														...e,
														[i]: {
															message: "请测试此子目录",
															directories: []
														}
													})));
												},
												children: b[i].directories.map((e) => /* @__PURE__ */ (0, V.jsx)(be, {
													id: e,
													children: e
												}, e))
											}) : null,
											/* @__PURE__ */ (0, V.jsx)(D, { children: "地址填写 smb://服务器/共享/目录。按共享账号权限读写；整理和删除由对应操作触发，资料和预览保存在 Pear 数据目录。" })
										]
									}) : null]
								}, i)), /* @__PURE__ */ (0, V.jsx)("div", {
									className: "flex",
									children: /* @__PURE__ */ (0, V.jsx)(l, {
										variant: "secondary",
										"aria-label": `给 ${p} 添加文件夹`,
										onClick: () => {
											i(), r(n.length, {
												...CK(e),
												location: e.location,
												cost: e.cost
											});
										},
										children: "添加文件夹"
									})
								})]
							})
						]
					}, e.library_id);
				})
			}),
			/* @__PURE__ */ (0, V.jsx)(l, {
				variant: "secondary",
				className: "self-start",
				onClick: i,
				children: "添加媒体库"
			}),
			/* @__PURE__ */ (0, V.jsx)(D, { children: A }),
			se ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(Ht, {}), /* @__PURE__ */ (0, V.jsx)(QG, {})] }) : null,
			ce.map((e) => /* @__PURE__ */ (0, V.jsxs)(D, { children: [
				"未检测到 ",
				e.name,
				"。",
				/* @__PURE__ */ (0, V.jsxs)(S, {
					href: e.download_url,
					children: ["下载 ", e.name]
				})
			] }, e.name)),
			/* @__PURE__ */ (0, V.jsx)(h, {
				isSelected: f,
				onChange: p,
				children: "保存后扫描并补全资料"
			}),
			v ? /* @__PURE__ */ (0, V.jsx)(P, {
				tone: "error",
				title: "没有保存",
				children: v
			}) : null
		] }), /* @__PURE__ */ (0, V.jsx)(E, {
			status: "保存后 Pear 会重新启动。",
			children: /* @__PURE__ */ (0, V.jsx)(l, {
				type: "submit",
				...R(j.busy === "save"),
				children: "保存配置"
			})
		})]
	});
}
function AK({ online: e }) {
	return /* @__PURE__ */ (0, V.jsx)(qt, { online: e });
}
function jK({ data: e }) {
	let t = e.media_sources, n = wt();
	return t ? /* @__PURE__ */ (0, V.jsxs)(F, {
		guide: "mounts",
		title: "挂载状态",
		children: [
			/* @__PURE__ */ (0, V.jsx)(w, { children: t.map((e, t) => /* @__PURE__ */ (0, V.jsxs)(C, {
				term: /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(Te, { mark: Gt(e.location) }), yK(e.location)] }),
				children: [e.path || "未配置挂载点", /* @__PURE__ */ (0, V.jsx)(AK, { online: e.online })]
			}, t)) }),
			n.error ? /* @__PURE__ */ (0, V.jsx)(I, {
				divided: !0,
				children: /* @__PURE__ */ (0, V.jsx)(b, { children: n.error })
			}) : null,
			/* @__PURE__ */ (0, V.jsx)(E, { children: /* @__PURE__ */ (0, V.jsx)(l, {
				variant: "secondary",
				onClick: () => void n.run("refresh", (e) => Je(e), (e) => ut.setQueryData(p, e)),
				...R(n.busy === "refresh"),
				children: "刷新挂载状态"
			}) })
		]
	}) : null;
}
// src/react/settings/service-preferences.tsx
function MK({ receipt: e }) {
	let t = At({
		queryKey: he,
		queryFn: ({ signal: e }) => Xe(e)
	}), n = Nt(), r = n.error || t.error;
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		title: "后台任务",
		children: [/* @__PURE__ */ (0, V.jsx)(fe, { children: /* @__PURE__ */ (0, V.jsx)(Se, {
			label: "默认处理速度",
			description: "新任务使用此档位。运行中的任务可在活动页单独调整。",
			children: /* @__PURE__ */ (0, V.jsx)(ue, {
				value: t.data?.taskSpeedMode || "standard",
				busy: !t.data || n.isPending,
				onChange: (t) => n.mutate({ taskSpeedMode: t }, { onSuccess: () => e("已保存默认处理速度") })
			})
		}) }), r ? /* @__PURE__ */ (0, V.jsx)(I, {
			divided: !0,
			children: /* @__PURE__ */ (0, V.jsx)(b, { children: qe(r) })
		}) : null]
	});
}
// src/react/settings/password-pair.tsx
function NK({ label: e, password: t, confirmation: n, onPassword: r, onConfirmation: i, disabled: a = !1, passwordError: o, passwordHint: s, confirmationError: c, confirmationInvalid: l = !1 }) {
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(O, {
		id: "access-password",
		type: "password",
		label: e,
		autoComplete: "new-password",
		maxLength: 256,
		value: t,
		onChange: r,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && !!o,
		hint: a ? s : o || s
	}), /* @__PURE__ */ (0, V.jsx)(O, {
		id: "access-confirm",
		type: "password",
		label: "确认访问密码",
		autoComplete: "new-password",
		maxLength: 256,
		value: n,
		onChange: i,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && (!!c || l),
		hint: a ? void 0 : c
	})] });
}
// src/react/settings/access-settings.tsx
var PK = {
	legacy: "当前使用系统生成的访问口令。改设自己的密码，或关闭登录要求。",
	locked: "访问设置无法读取，请在本机检查配置文件。",
	password: "已设置密码。新设备需要登录，登录时勾选「保持登录」可保持 30 天。"
};
function FK({ initial: e, receipt: t, devices: n, after: r }) {
	let [i, a] = (0, B.useState)(e), [o, s] = (0, B.useState)(""), [u, d] = (0, B.useState)(""), [f, p] = (0, B.useState)(""), [m, g] = (0, B.useState)(!1), [_, v] = (0, B.useState)({}), y = (0, B.useRef)(null), x = wt(), S = (e) => {
		e.preventDefault();
		let n = {};
		i.mode === "password" && !o && (n.current_password = "请输入当前访问密码"), m || ((u.length < 8 || u.length > 256) && (n.password = "访问密码需为 8–256 个字符"), u !== f && (n.confirmation = "两次输入的密码不一致")), v(n), Object.keys(n).length ? requestAnimationFrame(() => y.current?.querySelector("input[aria-invalid=\"true\"]")?.focus()) : x.run("save", (e) => L("/api/configuration/access", {
			revision: i.revision,
			action: m ? "disable" : "set",
			confirm_disable: m,
			current_password: o,
			password: m ? "" : u,
			confirmation: m ? "" : f
		}, "POST", e), (e) => {
			a(e), s(""), d(""), p(""), g(!1), v({}), t(e.mode === "open" ? "已关闭访问密码" : "已保存配置");
		}, (e) => {
			let t = e instanceof c ? e.body : null, n = t?.errors || t?.detail?.errors;
			n ? v(n) : x.setError(qe(e));
		});
	}, C = PK[i.mode], w = i.mode !== "locked";
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
		/* @__PURE__ */ (0, V.jsxs)(F, {
			guide: "access",
			title: "访问密码",
			onSubmit: S,
			children: [/* @__PURE__ */ (0, V.jsx)("div", {
				ref: y,
				children: /* @__PURE__ */ (0, V.jsxs)(I, { children: [
					C ? /* @__PURE__ */ (0, V.jsx)(D, { children: C }) : null,
					i.mode === "open" ? /* @__PURE__ */ (0, V.jsx)(P, {
						tone: "warning",
						title: "未设置访问密码",
						children: "能连接到 Pear 的设备打开地址就能看馆藏，不需要登录。"
					}) : null,
					i.mode === "password" || i.mode === "legacy" ? /* @__PURE__ */ (0, V.jsx)(h, {
						isSelected: m,
						onChange: g,
						children: "关闭访问密码"
					}) : null,
					i.mode === "password" ? /* @__PURE__ */ (0, V.jsx)(O, {
						id: "access-current",
						type: "password",
						label: "当前访问密码",
						autoComplete: "current-password",
						maxLength: 256,
						value: o,
						onChange: s,
						isRequired: !0,
						validationBehavior: "aria",
						isInvalid: !!_.current_password,
						hint: _.current_password
					}) : null,
					w && !m ? /* @__PURE__ */ (0, V.jsx)(NK, {
						label: i.mode === "password" ? "新访问密码" : "设置访问密码",
						password: u,
						confirmation: f,
						onPassword: d,
						onConfirmation: p,
						passwordError: _.password,
						confirmationError: _.confirmation,
						passwordHint: "至少 8 个字符。保存后其他设备需要重新登录。"
					}) : null,
					m ? /* @__PURE__ */ (0, V.jsx)(P, {
						tone: "warning",
						title: "访问范围",
						children: "保存后，能连接到 Pear 的设备将直接访问馆藏。"
					}) : null,
					x.error ? /* @__PURE__ */ (0, V.jsx)(b, { children: x.error }) : null
				] })
			}), w ? /* @__PURE__ */ (0, V.jsx)(E, { children: /* @__PURE__ */ (0, V.jsx)(l, {
				type: "submit",
				...R(x.busy === "save"),
				children: "保存配置"
			}) }) : null]
		}),
		n && (i.mode === "password" || i.mode === "legacy") ? n(i) : null,
		r ? r(i) : null
	] });
}
// src/react/settings/api-token-settings.tsx
var IK = "/api/configuration/access/token/rotate";
function LK(e, t) {
	let n = "用旧口令的脚本和 API 调用会立即失效。", r = e === "legacy" ? `其他浏览器现在用这串口令登录，会全部退出，需要输入新口令重新登录；本机保持登录。${n}` : e === "open" ? `浏览器不需要登录，不受影响。${n}` : `用访问密码登录的浏览器不受影响。${n}`;
	return t ? `${r}另一台电脑要换成同一份口令文件，两台之间才能继续互取复核结果。` : r;
}
function RK({ initial: e, mode: t, receipt: n }) {
	let [r, i] = (0, B.useState)(e), [a, o] = (0, B.useState)(null), s = wt(), c = jt();
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		title: "访问口令",
		children: [/* @__PURE__ */ (0, V.jsxs)(I, { children: [
			/* @__PURE__ */ (0, V.jsx)(D, { children: "脚本和 API 调用在 X-Token 请求头里携带访问口令。口令只存在这台电脑上，页面不显示。" }),
			a ? /* @__PURE__ */ (0, V.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "flex min-w-0 flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ (0, V.jsx)(O, {
							className: "min-w-0 flex-1",
							label: "新访问口令",
							value: a.token,
							isReadOnly: !0,
							autoComplete: "off"
						}), /* @__PURE__ */ (0, V.jsx)(l, {
							variant: "secondary",
							"aria-label": "复制新访问口令",
							onClick: () => void s.run("copy", () => navigator.clipboard.writeText(a.token), () => n("已复制口令")),
							children: "复制口令"
						})]
					}),
					s.error ? /* @__PURE__ */ (0, V.jsx)(D, {
						role: "status",
						children: "复制失败，请选中口令复制。"
					}) : null,
					/* @__PURE__ */ (0, V.jsx)(P, {
						tone: "info",
						title: "新口令只显示这一次",
						children: "已经生效，不用重启。离开本页后不再显示，之后在终端运行 peach token 查看。"
					})
				]
			}) : null,
			a?.relogin ? /* @__PURE__ */ (0, V.jsx)(P, {
				tone: "warning",
				title: "本机需要重新登录",
				children: "刷新页面后用新口令登录。"
			}) : null,
			r.rotatable ? null : /* @__PURE__ */ (0, V.jsx)(D, { children: r.reason })
		] }), r.rotatable ? /* @__PURE__ */ (0, V.jsx)(E, {
			status: "更换后立即生效。",
			children: /* @__PURE__ */ (0, V.jsx)(l, {
				variant: "secondary",
				onClick: () => void Ue({
					title: "更换访问口令",
					body: LK(t, r.paired),
					confirmLabel: "更换口令",
					onConfirm: async () => {
						let e = await L(IK, {});
						i(e), o(e), e.mode === "legacy" && c.invalidateQueries({ queryKey: ["access-sessions"] }), n(e.signed_out ? `已更换访问口令，${e.signed_out} 台设备需要重新登录` : "已更换访问口令");
					}
				}),
				children: "更换口令"
			})
		}) : null]
	});
}
// src/react/settings/certificate-trust.tsx
function zK({ rows: e, label: t }) {
	let n = e.length + 8, r = e.flatMap((e, t) => [...e].flatMap((e, n) => e === "1" ? [`M${n + 4} ${t + 4}h1v1h-1z`] : [])).join("");
	return /* @__PURE__ */ (0, V.jsx)("svg", {
		role: "img",
		"aria-label": t,
		viewBox: `0 0 ${n} ${n}`,
		shapeRendering: "crispEdges",
		className: "size-40 shrink-0 rounded-lg bg-white text-black",
		children: /* @__PURE__ */ (0, V.jsx)("path", {
			d: r,
			fill: "currentColor"
		})
	});
}
var BK = [
	["iPhone／iPad", "用相机扫码，在 Safari 中允许下载描述文件；到「设置 → 通用 → VPN 与设备管理」安装它，再到「设置 → 通用 → 关于本机 → 证书信任设置」打开这张证书的完全信任。"],
	["Android", "扫码下载后，到「设置 → 安全 → 加密与凭据 → 安装证书 → CA 证书」选择下载的文件。菜单名称因厂商而异。"],
	["电脑", "点「下载证书」。Windows 双击文件，安装到「受信任的根证书颁发机构」；macOS 在「钥匙串访问」里把它设为「始终信任」。"]
];
function VK({ initial: e }) {
	let t = At({
		queryKey: ["ca-certificate"],
		initialData: e,
		queryFn: ({ signal: e }) => Ie("/api/configuration/certificate", e),
		staleTime: Infinity,
		refetchInterval: Math.max(60, e.expires_in - 60) * 1e3
	}).data, n = t.fingerprint.split(":"), r = [
		0,
		8,
		16,
		24
	].map((e) => n.slice(e, e + 8).join(":"));
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		title: "其他设备信任 HTTPS 证书",
		children: [
			/* @__PURE__ */ (0, V.jsxs)(I, { children: [/* @__PURE__ */ (0, V.jsx)(D, { children: "手机、平板和其他电脑第一次打开 HTTPS 地址时会提示证书不受信任。在那台设备上安装并信任本机 CA 证书后不再提示。证书只含公开部分，不含私钥。" }), /* @__PURE__ */ (0, V.jsxs)("div", {
				className: "flex min-w-0 flex-wrap items-start gap-4",
				children: [/* @__PURE__ */ (0, V.jsx)(zK, {
					rows: t.qr,
					label: "手机扫码下载本机 CA 证书"
				}), /* @__PURE__ */ (0, V.jsxs)("div", {
					className: "flex min-w-0 flex-1 basis-64 flex-col gap-2",
					children: [/* @__PURE__ */ (0, V.jsxs)(w, { children: [/* @__PURE__ */ (0, V.jsx)(C, {
						term: "SHA-256 指纹",
						children: /* @__PURE__ */ (0, V.jsx)("span", {
							className: "flex max-w-sm flex-wrap justify-end gap-x-2 font-mono text-caption-1-regular",
							children: r.map((e, t) => /* @__PURE__ */ (0, V.jsx)("span", {
								className: "whitespace-nowrap",
								children: e
							}, t))
						})
					}), /* @__PURE__ */ (0, V.jsx)(C, {
						term: "有效期至",
						children: t.not_after
					})] }), /* @__PURE__ */ (0, V.jsx)(D, { children: "二维码 10 分钟内有效，页面开着时会自动更新。Android 打不开 .local 地址时，在这台电脑上改用局域网 IP 打开本页再扫码。" })]
				})]
			})] }),
			/* @__PURE__ */ (0, V.jsx)(fe, { children: BK.map(([e, t]) => /* @__PURE__ */ (0, V.jsx)(Se, {
				label: e,
				description: t
			}, e)) }),
			/* @__PURE__ */ (0, V.jsx)(I, {
				divided: !0,
				children: /* @__PURE__ */ (0, V.jsx)(D, { children: "装好后在设备的证书详情里核对 SHA-256 指纹，与上面一致才算装对。" })
			}),
			/* @__PURE__ */ (0, V.jsx)(E, { children: /* @__PURE__ */ (0, V.jsx)(u, {
				href: t.download,
				download: "peach-local-ca.crt",
				leadingIcon: Pt,
				children: "下载证书"
			}) })
		]
	});
}
var HK = {
	version: 1,
	note: "浏览器品牌标识仅用于识别相应数据源；商标归各自所有者。",
	icons: [
		{
			id: "chrome",
			aliases: [
				"chrome",
				"Google Chrome",
				"谷歌浏览器"
			],
			file: "chrome.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/chrome/chrome_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "eccdfe9d867373e2da66eedfcaaab40cbcdf6a221b83d6ee1400895a3e4c8046",
			bytes: 3166
		},
		{
			id: "chrome-beta",
			aliases: ["chrome-beta", "chrome beta"],
			file: "chrome-beta.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/chrome-beta/chrome-beta_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "34d7c73511f666e282e6ffca64315b53c287402de0e594976574a20e9031434f",
			bytes: 3731
		},
		{
			id: "chrome-dev",
			aliases: ["chrome-dev", "chrome dev"],
			file: "chrome-dev.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/chrome-dev/chrome-dev_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "3cc498eae83afeefb6f3ab5d24f4edead0ce6597e3afb91e4dcdaff923bb5a0a",
			bytes: 3706
		},
		{
			id: "chrome-canary",
			aliases: ["chrome-canary", "chrome canary"],
			file: "chrome-canary.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/chrome-canary/chrome-canary_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "590d38919b0c3df5dffeb1d4cbe9a24b211920932bcc367778f4962270e0997c",
			bytes: 1858
		},
		{
			id: "chromium",
			aliases: ["chromium", "Chromium浏览器"],
			file: "chromium.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/chromium/chromium_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "9fc23dba1ec6765aee3e6c200ee1b77a7e4ac56a25dd5a89027d3b01f3389d21",
			bytes: 2035
		},
		{
			id: "edge",
			aliases: [
				"edge",
				"Microsoft Edge",
				"微软Edge"
			],
			file: "edge.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/edge/edge_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "a189a6054451f74073ba27c9e0ff35f46402263a2f883a74b9f6a89bb42b7975",
			bytes: 3574
		},
		{
			id: "edge-beta",
			aliases: ["edge-beta", "edge beta"],
			file: "edge-beta.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/edge-beta/edge-beta_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "074d4b135e89f1621d55a48831196b5c95b27084e15ffeee7bd3ef869a06e394",
			bytes: 3820
		},
		{
			id: "edge-dev",
			aliases: ["edge-dev", "edge dev"],
			file: "edge-dev.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/edge-dev/edge-dev_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "70df54bb62d68ae61f042b54bced912ba87f334675b625963fa82bba172e2501",
			bytes: 3671
		},
		{
			id: "edge-canary",
			aliases: ["edge-canary", "edge canary"],
			file: "edge-canary.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/edge-canary/edge-canary_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "b0ec80dc2b855f7dc6b4ecee8735c3a397d5803a7a4801011c545d765e5ac705",
			bytes: 3728
		},
		{
			id: "firefox",
			aliases: [
				"firefox",
				"Mozilla Firefox",
				"火狐浏览器"
			],
			file: "firefox.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/firefox/firefox_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "98c4837a6cdce28d66cd51ea1e13cf130a5ac7bd097579a6714ad8345c16d3c9",
			bytes: 3943
		},
		{
			id: "firefox-beta",
			aliases: ["firefox-beta", "firefox beta"],
			file: "firefox-beta.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/firefox-beta/firefox-beta_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "2f25600de1c538cdf5965541c1f4960ef0a0da76fc0030b5a36af8288b9dac94",
			bytes: 4365
		},
		{
			id: "firefox-developer-edition",
			aliases: [
				"firefox-developer-edition",
				"firefox developer edition",
				"Firefox Developer Edition",
				"Firefox Dev"
			],
			file: "firefox-developer-edition.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/firefox-developer-edition/firefox-developer-edition_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "482ee0acf9deccbaf0253801f0a2ded2798b33166e3696fc1ae97f15788a335c",
			bytes: 4463
		},
		{
			id: "firefox-nightly",
			aliases: ["firefox-nightly", "firefox nightly"],
			file: "firefox-nightly.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/firefox-nightly/firefox-nightly_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "4082cba90a03962cd7be1ef6a8e7b3915d8b8e5411f919fbeb4d4f62684aa4cb",
			bytes: 4124
		},
		{
			id: "brave",
			aliases: ["brave"],
			file: "brave.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/brave/brave_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "fc67ee59d32612dc08eac9461fae8840441e888cceae7c07465ebdbfa58c5d63",
			bytes: 2416
		},
		{
			id: "brave-beta",
			aliases: ["brave-beta", "brave beta"],
			file: "brave-beta.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/brave-beta/brave-beta_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "fb029b4501f68c803429385b496bee9c3ce16710f8f12f9bae9f7db74bce2e1a",
			bytes: 3085
		},
		{
			id: "brave-dev",
			aliases: ["brave-dev", "brave dev"],
			file: "brave-dev.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/brave-dev/brave-dev_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "1797ab7fc86b1952851082f1dbeb7ff6816525d2654cdc0e455f7dd6d109a0da",
			bytes: 3837
		},
		{
			id: "brave-nightly",
			aliases: ["brave-nightly", "brave nightly"],
			file: "brave-nightly.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/brave-nightly/brave-nightly_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "e2f0e7506642d7491521f10250d0ede60c2a1e89ea7fdb6f8a2a366189643de4",
			bytes: 3929
		},
		{
			id: "vivaldi",
			aliases: ["vivaldi"],
			file: "vivaldi.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/vivaldi/vivaldi_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "2cef8b72a605bfd4b3a665e88773ff6e915972db1e874fd3373f34d8e43c03d1",
			bytes: 2657
		},
		{
			id: "vivaldi-snapshot",
			aliases: ["vivaldi-snapshot", "vivaldi snapshot"],
			file: "vivaldi-snapshot.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/vivaldi-snapshot/vivaldi-snapshot_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "d7adcb47765e5982d50565a4db328c6656d19503252f49855ae891dc655df22e",
			bytes: 2286
		},
		{
			id: "opera",
			aliases: ["opera"],
			file: "opera.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/opera/opera_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "907f47f584ca0f83446680a2ce1b4dc4dc81ac2e2bec0090e5b4ac98ccade4d4",
			bytes: 2152
		},
		{
			id: "opera-beta",
			aliases: ["opera-beta", "opera beta"],
			file: "opera-beta.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/opera-beta/opera-beta_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "1a5164ba569241ac87ceb2878190a261d52a63e4218ee16290f6adde7fe1380e",
			bytes: 4225
		},
		{
			id: "opera-developer",
			aliases: ["opera-developer", "opera developer"],
			file: "opera-developer.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/opera-developer/opera-developer_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "b5f0fbb90b11daa64b1642beddb00ae73120f46184f6a31e83584a6d2c91efc2",
			bytes: 3854
		},
		{
			id: "opera-gx",
			aliases: ["opera-gx", "opera gx"],
			file: "opera-gx.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/opera-gx/opera-gx_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "d92a6e2dbecfdbc0e4986d6eabce5f7c75804699fe8a7b64fe0c0167617a7d0e",
			bytes: 1504
		},
		{
			id: "opera-neon",
			aliases: ["opera-neon", "opera neon"],
			file: "opera-neon.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/opera-neon/opera-neon_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "12d0a029aa3f3b5e70805bb2c39304efdb1db75e59e9ba89f05f880dc0b6aa1a",
			bytes: 3385
		},
		{
			id: "opera-mini",
			aliases: ["opera-mini", "opera mini"],
			file: "opera-mini.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/opera-mini/opera-mini_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "2509f1615ead4c8ddb25dfcc6024ba2e2b98f4da2a012a4039882597903646f9",
			bytes: 3009
		},
		{
			id: "safari",
			aliases: ["safari", "Apple Safari"],
			file: "safari.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/safari/safari_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "5a4608283c36615ebcfb0762f64cfe5706b03bfdcedc5810fe10ee883ca4fff0",
			bytes: 4497
		},
		{
			id: "safari-technology-preview",
			aliases: ["safari-technology-preview", "safari technology preview"],
			file: "safari-technology-preview.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/safari-technology-preview/safari-technology-preview_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "29a6403e566b4b53f125bcdb7381d86eb14558e84d7ff4eb9f74e559fd4d8c72",
			bytes: 4404
		},
		{
			id: "samsung-internet",
			aliases: [
				"samsung-internet",
				"samsung internet",
				"Samsung Internet Browser"
			],
			file: "samsung-internet.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/samsung-internet/samsung-internet_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "239c8d26b38cba9fa9468555a93637b29de64d2f0f2769ddd007d78c564288b0",
			bytes: 1814
		},
		{
			id: "tor",
			aliases: ["tor"],
			file: "tor.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/tor/tor_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "54bae0a77f813c2c9bf7594b52e98931630a450a5ea42dced26e0df3f432fe01",
			bytes: 3685
		},
		{
			id: "tor-alpha",
			aliases: ["tor-alpha", "tor alpha"],
			file: "tor-alpha.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/tor-alpha/tor-alpha_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "9b8b2dfae28ac7fcb452e25225ce337b954ab9c8dc7939364ed1219c9c42864a",
			bytes: 3643
		},
		{
			id: "yandex",
			aliases: ["yandex"],
			file: "yandex.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/yandex/yandex_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "803d73b46b135e783ef9984a35ffcb0b43f31cfe8d6be4a1371598ebdc549f89",
			bytes: 3139
		},
		{
			id: "uc",
			aliases: ["uc", "UC浏览器"],
			file: "uc.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/uc/uc_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "7bfd919258b12a5900a8d19eabe1a16a0f7f50eaebe872fb7f13f6929cdf4c1e",
			bytes: 2853
		},
		{
			id: "dolphin",
			aliases: ["dolphin"],
			file: "dolphin.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/dolphin/dolphin_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "2c796d4a3ac4303edc73e33c3a36d709fbaa644b701d98ca1460aa6679c19aa9",
			bytes: 2018
		},
		{
			id: "maxthon",
			aliases: [
				"maxthon",
				"傲游",
				"傲游浏览器"
			],
			file: "maxthon.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/maxthon/maxthon_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "f807f58b4a0550a5470a713a4737054c5d5ecebe61687c77e77b2bfab1c544c5",
			bytes: 1375
		},
		{
			id: "midori",
			aliases: ["midori"],
			file: "midori.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/midori/midori_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "b3149a3d9dcbe8158078f8c47a39e839c2609f2dbce574e6175d4ef7f381f0d4",
			bytes: 4288
		},
		{
			id: "falkon",
			aliases: ["falkon"],
			file: "falkon.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/falkon/falkon_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "93992beb736d43622ddc085b41955aea13a735c011928c56076b5ed5c74d694c",
			bytes: 4285
		},
		{
			id: "pale-moon",
			aliases: ["pale-moon", "pale moon"],
			file: "pale-moon.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/pale-moon/pale-moon_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "6ffacc33960787e0411897a33524bb03c78df9204cf7dbfc5f063f4b5e73d5e1",
			bytes: 4771
		},
		{
			id: "seamonkey",
			aliases: ["seamonkey"],
			file: "seamonkey.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/seamonkey/seamonkey_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "37dd8ccb6700d83b030614329253af2ac68c44084c887a2d5ca10ea91aa066a5",
			bytes: 4525
		},
		{
			id: "web",
			aliases: [
				"web",
				"Epiphany",
				"GNOME Web"
			],
			file: "web.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/web/web_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "3f149719ecd35cefa8dae87a699550fbfa44b4d2d3b4b4c90ade545c3b9754a8",
			bytes: 2678
		},
		{
			id: "qutebrowser",
			aliases: ["qutebrowser"],
			file: "qutebrowser.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/qutebrowser/qutebrowser_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "8134a7f55a2ca191361ba3ecc5219e3d707a945c7e91e38da310ee12ffeee3eb",
			bytes: 3818
		},
		{
			id: "epic",
			aliases: ["epic"],
			file: "epic.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/epic/epic_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "53dfd851e21ab4f0727891cb2e330503cc250c05216d825be016e84e98ea4dd4",
			bytes: 5534
		},
		{
			id: "icecat",
			aliases: ["icecat"],
			file: "icecat.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/icecat/icecat_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "828718a56d67123abe3526fd42835ffbbb05769791922c2a0564dae92762ecc9",
			bytes: 5700
		},
		{
			id: "basilisk",
			aliases: ["basilisk"],
			file: "basilisk.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/basilisk/basilisk_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "9a0b3f467fe972e7a3e805fcc4b719eccfb1bb1d29d9a9f3afec7cc9dc2349f3",
			bytes: 2331
		},
		{
			id: "avant",
			aliases: ["avant"],
			file: "avant.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/avant/avant_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "a4c66ad8bc25ce59f71713f7c93629cd17b989d886cb8beacf178730631b01a5",
			bytes: 4586
		},
		{
			id: "otter",
			aliases: ["otter"],
			file: "otter.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/otter/otter_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "8fea2736a78b36e8c9eabfd5c47e7b46f28209aa9f1e2a199a54cfeeac290812",
			bytes: 5220
		},
		{
			id: "netsurf",
			aliases: ["netsurf"],
			file: "netsurf.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/netsurf/netsurf_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "d57d4ff6fb7052d5228932da17955232ecc5051908cf6580d73c6db3d2b248bd",
			bytes: 4003
		},
		{
			id: "puffin",
			aliases: ["puffin"],
			file: "puffin.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/puffin/puffin_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "e182c2f54a37e0e1ff6a9469f1cb65bb8299f9b5eaca162c29b7cb9f6cc79768",
			bytes: 3697
		},
		{
			id: "aside",
			aliases: ["aside", "Aside Browser"],
			file: "aside.png",
			content_type: "image/png",
			source_url: "https://aside.com/icon.png?icon.0lfc1q-r_ms2e.png",
			source_page: "https://aside.com/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "949971a69f8643358bd52875a02a53e60136a88790487c83e42a24cb39f0adea",
			bytes: 27423
		},
		{
			id: "zen",
			aliases: ["zen", "Zen Browser"],
			file: "zen.svg",
			content_type: "image/svg+xml",
			source_url: "https://zen-browser.app/favicon.svg",
			source_page: "https://zen-browser.app/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "090a9ce0283dc66359be584bd1db9227faf4f15fc666f261759852e2519c7c68",
			bytes: 531
		},
		{
			id: "qq",
			aliases: [
				"qq",
				"QQBrowser",
				"QQ浏览器"
			],
			file: "qq.ico",
			content_type: "image/x-icon",
			source_url: "https://browser.qq.com/favicon.ico",
			source_page: "https://browser.qq.com/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "0c4cfdc5683b15f0b3b1019db71edfa975cadccbd61ce2f340acbdc4b114dbed",
			bytes: 2047
		},
		{
			id: "360se",
			aliases: ["360se", "360安全浏览器"],
			file: "360se.png",
			content_type: "image/png",
			source_url: "https://p4.ssl.qhimg.com/t110b9a93016f838be146a5b14d.png",
			source_page: "https://browser.360.cn/se/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "3363c9c2dd239ab6ac3a59501bf609cc2a94664ab5a1b8f0f0a2bec21aaab34a",
			bytes: 2219
		},
		{
			id: "360chrome",
			aliases: ["360chrome", "360极速浏览器"],
			file: "360chrome.ico",
			content_type: "image/x-icon",
			source_url: "https://browser.360.cn/ee/favicon.ico",
			source_page: "https://browser.360.cn/ee/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "eb11e02318a389cf4b9e06a8ca66694d2d544fbe8bfd28555e2189727675bd8e",
			bytes: 5430
		},
		{
			id: "sogou",
			aliases: [
				"sogou",
				"搜狗",
				"搜狗浏览器",
				"Sogou Explorer"
			],
			file: "sogou.ico",
			content_type: "image/x-icon",
			source_url: "https://sogou.browser.qq.com/favicon.ico",
			source_page: "https://ie.sogou.com/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "d9b78205c61561e23594886cc7bd24a5842a36602384f059efe670455c40c74f",
			bytes: 5430
		},
		{
			id: "arc",
			aliases: ["arc"],
			file: "arc.png",
			content_type: "image/png",
			source_url: "https://arc.net/favicon.png",
			source_page: "https://arc.net/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "2e6881ee4ea7b22e3bdd97f2432b7ce5bb3e3d5bbbdb5457a4a4f8b69a43e7bd",
			bytes: 1586
		},
		{
			id: "librewolf",
			aliases: ["librewolf"],
			file: "librewolf.svg",
			content_type: "image/svg+xml",
			source_url: "https://librewolf.net/icon.svg",
			source_page: "https://librewolf.net/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "b85d68f1b5b47b9b2c3a3e6b5f5a0f887577e0eb6ee8387fb7b81f5f8e4017c4",
			bytes: 5916
		},
		{
			id: "floorp",
			aliases: ["floorp"],
			file: "floorp.svg",
			content_type: "image/svg+xml",
			source_url: "https://floorp.app/icon.svg?51b46abeef3fc9d9",
			source_page: "https://floorp.app/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "15cf85f15cd722524008cb621763eb8560561048df210cf3a6180732c254f49b",
			bytes: 2199
		},
		{
			id: "waterfox",
			aliases: ["waterfox"],
			file: "waterfox.svg",
			content_type: "image/svg+xml",
			source_url: "https://www.waterfox.com/favicons/favicon.svg",
			source_page: "https://www.waterfox.net/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "05294e9a22b85b32fa632657ac3c2258f56d37f30931ababc494fe8a4b86ea7a",
			bytes: 9266
		},
		{
			id: "duckduckgo",
			aliases: ["duckduckgo"],
			file: "duckduckgo.png",
			content_type: "image/png",
			source_url: "https://duckduckgo.com/static-assets/favicons/DDG-iOS-icon_152x152.png",
			source_page: "https://duckduckgo.com/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "f6e52a35e8854ebf14c9b8442302f6f7d5d0063f0215b7210edf4676d7fd7369",
			bytes: 3576
		},
		{
			id: "115",
			aliases: [
				"115",
				"115浏览器",
				"115 Browser"
			],
			file: "115.ico",
			content_type: "image/x-icon",
			source_url: "https://115.com/",
			source_page: "https://115.com/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "fba0c364bb745bef18683be03f08b086cb5e46498b8c1dbd32ecdee6624303fe",
			bytes: 63051,
			extraction: {
				method: "PE resource extraction",
				executable: "115chrome.exe",
				executable_sha256: "31d3c29ffade6eb30504173b299d396a42758b2093c442b2adebe83f03750ae9",
				resource_group: "IDR_MAINFRAME"
			}
		},
		{
			id: "360chromex",
			aliases: [
				"360chromex",
				"360极速X",
				"360极速浏览器X"
			],
			file: "360chrome.ico",
			content_type: "image/x-icon",
			source_url: "https://browser.360.cn/ee/favicon.ico",
			source_page: "https://browser.360.cn/ee/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "eb11e02318a389cf4b9e06a8ca66694d2d544fbe8bfd28555e2189727675bd8e",
			bytes: 5430
		},
		{
			id: "quark",
			aliases: [
				"quark",
				"夸克",
				"夸克浏览器"
			],
			file: "quark.png",
			content_type: "image/png",
			source_url: "https://gw.alicdn.com/imgextra/i3/O1CN018r2tKf28YP7ev0fPF_!!6000000007944-2-tps-48-48.png",
			source_page: "https://www.quark.cn/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "824e079d7d987305f2a0d15de5b1dfe0dc8cb7131afe1dbdaf1ea3ae3dd2d740",
			bytes: 1210
		},
		{
			id: "2345",
			aliases: [
				"2345",
				"2345浏览器",
				"2345加速浏览器"
			],
			file: "2345.png",
			content_type: "image/png",
			source_url: "https://img.onlinedown.net/download/202306/190435-649ac2436780c.png",
			source_page: "https://www.onlinedown.net/soft/111609.htm",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "4c7a1b786d1208c89e00027c46544debe27a6f684b859cfd116b4e796703d38e",
			bytes: 29648
		}
	]
}, UK = (e) => e.normalize("NFKC").toLowerCase().replace(/[\s_-]/g, ""), WK = new Map(HK.icons.flatMap((e) => e.aliases.map((t) => [UK(t), e.id])));
function GK(e) {
	return WK.get(UK(e));
}
function KK({ name: e, className: t }) {
	let [n, r] = (0, B.useState)(""), i = GK(e);
	return i && n !== i ? /* @__PURE__ */ (0, V.jsx)("img", {
		src: `/browser-icon/${i}`,
		width: 24,
		height: 24,
		alt: "",
		"aria-hidden": !0,
		loading: "lazy",
		className: `${t ?? "size-6 shrink-0"} object-contain`,
		onError: () => r(i)
	}) : /* @__PURE__ */ (0, V.jsx)(y, {
		"aria-hidden": !0,
		className: `${t ?? "size-5 shrink-0"} text-foreground-icon-secondary`
	});
}
// src/react/settings/device-sessions.tsx
var qK = "/api/configuration/access/sessions", JK = (e) => e.device || "未识别的浏览器", YK = {
	glyph: k,
	brand: "apple"
}, XK = {
	glyph: nt,
	brand: "android"
}, ZK = {
	iPhone: {
		platform: YK,
		terminal: Pe
	},
	iPad: {
		platform: YK,
		terminal: x
	},
	Android: {
		platform: XK,
		terminal: Pe
	},
	"Android 平板": {
		platform: XK,
		terminal: x
	},
	ChromeOS: {
		platform: { browser: "chrome" },
		terminal: Ft
	},
	Windows: {
		platform: {
			glyph: ke,
			brand: "windows"
		},
		terminal: Ft
	},
	macOS: {
		platform: YK,
		terminal: Ft
	},
	Linux: { terminal: Ft }
}, QK = "inline size-4 -mt-0.5 mr-1 align-middle";
function $K({ platform: e }) {
	if ("browser" in e) return /* @__PURE__ */ (0, V.jsx)(KK, {
		name: e.browser,
		className: QK
	});
	let { glyph: t, brand: n } = e;
	return /* @__PURE__ */ (0, V.jsx)(t, {
		"aria-hidden": !0,
		"data-platform-mark": n,
		className: QK
	});
}
function eq({ row: e }) {
	if (!e.device) return JK(e);
	let t = e.device.split(" · "), n = ZK[t.at(-1) ?? ""] ? t.pop() : "", r = t.join(" · "), i = n ? ZK[n].platform : void 0;
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
		r ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [GK(r) ? /* @__PURE__ */ (0, V.jsx)(KK, {
			name: r,
			className: QK
		}) : null, r] }) : null,
		r && n ? " · " : null,
		n ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [i ? /* @__PURE__ */ (0, V.jsx)($K, { platform: i }) : null, n] }) : null
	] });
}
function tq({ row: e }) {
	let t = ZK[e.device.split(" · ").at(-1) ?? ""]?.terminal ?? Ge;
	return /* @__PURE__ */ (0, V.jsx)(t, {
		"aria-hidden": !0,
		className: "size-5 shrink-0 text-foreground-icon-secondary"
	});
}
function nq({ row: e, children: t }) {
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		className: "flex min-h-13 w-full items-center justify-between gap-4 border-b border-separator-border py-2.5 pr-2.5 last:border-b-0",
		children: [/* @__PURE__ */ (0, V.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, V.jsx)(tq, { row: e }), /* @__PURE__ */ (0, V.jsxs)("div", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, V.jsx)("p", {
					className: "text-body-regular text-text-primary",
					children: /* @__PURE__ */ (0, V.jsx)(eq, { row: e })
				}), /* @__PURE__ */ (0, V.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: aq(e)
				})]
			})]
		}), t]
	});
}
function rq(e, t = Date.now() / 1e3) {
	let n = Math.max(0, t - e);
	return n < 60 ? "刚刚" : n < 3600 ? `${Math.floor(n / 60)} 分钟前` : n < 86400 ? `${Math.floor(n / 3600)} 小时前` : n < 2592e3 ? `${Math.floor(n / 86400)} 天前` : (/* @__PURE__ */ new Date(e * 1e3)).toLocaleDateString("zh-CN");
}
function iq(e) {
	return e.network === "loopback" ? "运行 Pear 的电脑" : e.network ? e.remote ? `公网入口 · ${e.network}` : e.network : "";
}
var aq = (e) => [`最近活动 ${rq(e.last_seen)}`, iq(e)].filter(Boolean).join(" · ");
function oq({ revision: e, receipt: t }) {
	let n = At({
		queryKey: ["access-sessions", e],
		refetchOnMount: "always",
		queryFn: ({ signal: e }) => Ie(qK, e)
	});
	return n.error ? /* @__PURE__ */ (0, V.jsx)(F, {
		title: "已登录的设备",
		children: /* @__PURE__ */ (0, V.jsx)(I, { children: /* @__PURE__ */ (0, V.jsx)(b, { children: qe(n.error) }) })
	}) : n.isFetching || !n.data ? /* @__PURE__ */ (0, V.jsx)(ge, {
		label: "正在读取已登录的设备",
		html: Ke
	}) : /* @__PURE__ */ (0, V.jsx)(sq, {
		initial: n.data,
		receipt: t
	});
}
function sq({ initial: e, receipt: t }) {
	let [n, r] = (0, B.useState)(e);
	(0, B.useEffect)(() => r(e), [e]);
	let i = n.sessions.filter((e) => !e.current);
	(0, B.useEffect)(() => {
		ft("devices", {
			rows: Math.min(n.sessions.length, 8),
			manageable: n.manageable && i.length > 0
		});
	}, [n, i.length]);
	let a = (e) => void Ue({
		title: "撤销这台设备的登录",
		body: `${JK(e)}（${aq(e)}）下次打开 Pear 需要重新输入访问密码。`,
		confirmLabel: "撤销登录",
		onConfirm: async () => {
			r(await L(`${qK}/revoke`, {
				revision: n.revision,
				id: e.id
			})), t("已撤销登录");
		}
	});
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		title: "已登录的设备",
		children: [
			n.sessions.length ? /* @__PURE__ */ (0, V.jsx)(fe, { children: n.sessions.map((e) => /* @__PURE__ */ (0, V.jsx)(nq, {
				row: e,
				children: e.current ? /* @__PURE__ */ (0, V.jsx)(g, {
					color: "blue",
					variant: "caption",
					children: "本机"
				}) : n.manageable ? /* @__PURE__ */ (0, V.jsx)(l, {
					size: "small",
					variant: "secondary",
					"aria-label": `撤销 ${JK(e)} 的登录`,
					onClick: () => a(e),
					children: "撤销"
				}) : null
			}, e.id)) }) : /* @__PURE__ */ (0, V.jsx)(I, { children: /* @__PURE__ */ (0, V.jsx)(D, { children: "还没有浏览器用访问密码登录过。" }) }),
			!n.manageable && i.length ? /* @__PURE__ */ (0, V.jsx)(I, {
				divided: !0,
				children: /* @__PURE__ */ (0, V.jsx)(D, { children: "在运行 Pear 的电脑上打开这一页才能撤销。" })
			}) : null,
			n.manageable && i.length ? /* @__PURE__ */ (0, V.jsx)(E, {
				status: "修改访问密码会让全部设备退出。",
				children: /* @__PURE__ */ (0, V.jsx)(l, {
					variant: "secondary",
					onClick: () => void Ue({
						title: "撤销其他设备的登录",
						body: `除本机以外的 ${i.length} 台设备下次打开 Pear 需要重新输入访问密码。`,
						confirmLabel: "撤销登录",
						onConfirm: async () => {
							let e = await L(`${qK}/revoke`, {
								revision: n.revision,
								scope: "others"
							});
							r(e), t(`已撤销 ${e.removed} 台设备的登录`);
						}
					}),
					children: "撤销其他设备"
				})
			}) : null
		]
	});
}
// src/react/settings/port-settings.tsx
var cq = [{
	value: "0.0.0.0",
	label: "同一局域网的设备"
}, {
	value: "127.0.0.1",
	label: "只有这台电脑"
}];
function lq({ data: e, receipt: t }) {
	let n = e.network, r = n ? n.editable : e.editable && e.port_editable !== !1, [i, a] = (0, B.useState)(n?.host ?? "127.0.0.1"), [o, s] = (0, B.useState)(n?.mdns_name ?? "peach"), [u, d] = (0, B.useState)(String(e.port)), [f, p] = (0, B.useState)({}), [h, g] = (0, B.useState)(null), _ = wt();
	return (0, B.useEffect)(() => {
		if (!h) return;
		let e = setTimeout(() => location.assign(h.url), YG);
		return () => clearTimeout(e);
	}, [h]), h ? /* @__PURE__ */ (0, V.jsx)(F, {
		guide: "port",
		title: "访问地址",
		children: /* @__PURE__ */ (0, V.jsx)(I, { children: /* @__PURE__ */ (0, V.jsxs)(P, {
			tone: "success",
			title: "配置已保存",
			children: ["Pear 正在重新启动。", /* @__PURE__ */ (0, V.jsx)(M, {
				href: h.url,
				size: "small",
				children: "返回网络与访问"
			})]
		}) })
	}) : /* @__PURE__ */ (0, V.jsxs)(F, {
		guide: "port",
		title: "访问地址",
		onSubmit: r ? (r) => {
			r.preventDefault(), p({}), _.run("save", (t) => L(m, {
				revision: e.revision,
				media_dirs: e.media_dirs,
				...e.media_sources ? { media_sources: e.media_sources } : {},
				port: u,
				scan_now: !1,
				...n?.editable ? {
					host: i,
					...i === "0.0.0.0" ? { mdns_name: o } : {}
				} : {}
			}, "POST", t), (e) => {
				g({ url: new URL("/settings/network", e.url).href }), t("已保存配置");
			}, (e) => {
				let t = e instanceof c && e.status === 400 ? e.body?.errors : null;
				t && (t.port || t.host || t.mdns_name) ? p(t) : _.setError(qe(e));
			});
		} : void 0,
		children: [/* @__PURE__ */ (0, V.jsxs)(I, { children: [
			n ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(uq, {
				label: "本机地址",
				value: n.local_url,
				receipt: t
			}), n.lan_url || n.ip_url ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
				/* @__PURE__ */ (0, V.jsx)(uq, {
					label: "手机连接地址",
					value: n.lan_url || n.ip_url,
					receipt: t
				}),
				n.lan_url && n.ip_url ? /* @__PURE__ */ (0, V.jsx)(uq, {
					label: "备用 IP 地址",
					value: n.ip_url,
					receipt: t
				}) : null,
				/* @__PURE__ */ (0, V.jsxs)(D, { children: ["手机与电脑连接同一 Wi-Fi。", n.ip_url && n.lan_url ? "名称地址打不开时，可尝试备用 IP 地址。" : ""] })
			] }) : /* @__PURE__ */ (0, V.jsx)(D, { children: n.scope === "local" ? "当前只允许这台电脑访问，手机无法连接。" : "局域网连接地址未取得，请检查电脑的网络连接和服务启动配置。" })] }) : null,
			r ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [n?.editable ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(_G, {
				id: "configHost",
				label: "谁可以访问",
				value: i,
				onChange: a,
				options: cq,
				isDisabled: !!_.busy,
				isInvalid: !!f.host,
				children: f.host ? /* @__PURE__ */ (0, V.jsx)(b, { children: f.host }) : null
			}), i === "0.0.0.0" ? /* @__PURE__ */ (0, V.jsx)(vG, {
				id: "configMdnsName",
				label: "局域网访问地址",
				value: o,
				onChange: s,
				prefix: n.local_url.startsWith("https:") ? "https://" : "http://",
				suffix: ".local",
				autoComplete: "off",
				spellCheck: "false",
				maxLength: 63,
				isDisabled: !!_.busy,
				validationBehavior: "aria",
				isInvalid: !!f.mdns_name,
				hint: f.mdns_name || void 0
			}) : null] }) : null, /* @__PURE__ */ (0, V.jsx)(vG, {
				id: "configPort",
				label: "端口",
				prefix: "localhost:",
				inputMode: "numeric",
				value: u,
				onChange: d,
				isDisabled: !!_.busy,
				validationBehavior: "aria",
				isInvalid: !!f.port,
				hint: f.port
			})] }) : /* @__PURE__ */ (0, V.jsx)(D, { children: e.notice || "访问范围、名称与端口由服务启动配置管理。" }),
			n?.editable && i === "0.0.0.0" && n.scope === "local" ? /* @__PURE__ */ (0, V.jsx)(D, { children: "保存并重启后显示手机连接地址。可在下方设置访问密码。" }) : null,
			_.error ? /* @__PURE__ */ (0, V.jsx)(P, {
				tone: "error",
				title: "没有保存",
				children: _.error
			}) : null
		] }), r ? /* @__PURE__ */ (0, V.jsx)(E, {
			status: "保存后 Pear 会重启，并跳转到新地址。",
			children: /* @__PURE__ */ (0, V.jsx)(l, {
				type: "submit",
				...R(_.busy === "save"),
				children: "保存配置"
			})
		}) : null]
	});
}
function uq({ label: e, value: t, receipt: n }) {
	let r = wt();
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, V.jsxs)("div", {
			className: "flex min-w-0 flex-wrap items-end gap-2",
			children: [/* @__PURE__ */ (0, V.jsx)(O, {
				className: "min-w-0 flex-1",
				label: e,
				value: t,
				isReadOnly: !0,
				autoComplete: "off"
			}), /* @__PURE__ */ (0, V.jsx)(l, {
				variant: "secondary",
				"aria-label": `复制${e}`,
				onClick: () => void r.run("copy", () => navigator.clipboard.writeText(t), () => n("已复制地址")),
				children: "复制地址"
			})]
		}), r.error ? /* @__PURE__ */ (0, V.jsx)(D, {
			role: "status",
			children: "复制失败，请选中地址复制。"
		}) : null]
	});
}
// src/react/settings/peach-proxy-fields.tsx
var dq = [
	["environment", "跟随环境"],
	["direct", "直连"],
	["proxy", "自定义"]
];
function fq({ mode: e, onChange: t, labelledBy: n }) {
	return /* @__PURE__ */ (0, V.jsx)(ye, {
		"aria-label": n ? void 0 : "连接方式",
		"aria-labelledby": n,
		selectedKey: e,
		onSelectionChange: (e) => {
			e !== null && t(String(e));
		},
		children: dq.map(([e, t]) => /* @__PURE__ */ (0, V.jsx)(be, {
			id: e,
			children: t
		}, e))
	});
}
function pq({ id: e, value: t, onChange: n, saved: r = !1, error: i }) {
	return /* @__PURE__ */ (0, V.jsx)(O, {
		id: e,
		type: "password",
		label: "代理地址",
		autoComplete: "off",
		spellCheck: "false",
		value: t,
		onChange: n,
		placeholder: r ? "已保存，留空保留" : "http://127.0.0.1:7890",
		validationBehavior: "aria",
		isInvalid: !!i,
		hint: i
	});
}
// src/react/settings/tunnel-settings.tsx
var mq = 2e3, hq = [["quick", "临时链接"], ["named", "命名隧道"]], gq = {
	quick: "临时预览用，地址随机，重启后会变。启动前要先设置访问密码。",
	named: "使用你在 Cloudflare 绑定的固定域名。启动前要先设置访问密码。"
};
function _q({ revision: e, initial: t, receipt: n }) {
	let [r, i] = (0, B.useState)(t), [a, s] = (0, B.useState)(e), [u, d] = (0, B.useState)(t.mode), [f, m] = (0, B.useState)(t.hostname), [h, g] = (0, B.useState)(""), [_, v] = (0, B.useState)({}), y = wt(), x = r.state === "starting" || r.state === "running", C = r.named_available && u === "named";
	(0, B.useEffect)(() => {
		if (r.state !== "starting") return;
		let e = new AbortController(), t = window.setInterval(() => {
			Je(e.signal).then((t) => {
				!e.signal.aborted && t.tunnel && (ut.setQueryData(p, t), i(t.tunnel), s(t.revision));
			}).catch(() => void 0);
		}, mq);
		return () => {
			e.abort(), window.clearInterval(t);
		};
	}, [r.state]);
	let w = (e, t, n) => {
		v({}), y.run(e, (e) => L("/api/configuration/tunnel", {
			revision: a,
			enabled: t,
			mode: u,
			hostname: f,
			token: h
		}, "POST", e), (e) => {
			i(e), s(e.revision), d(e.mode), m(e.hostname), g(""), n(e);
		}, (e) => {
			let t = e instanceof c ? e.body : null, n = t?.errors || t?.detail?.errors;
			n ? v(n) : y.setError(qe(e));
		});
	};
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		id: "tunnel",
		guide: "tunnel",
		title: "Cloudflare 公网入口",
		onSubmit: (e) => {
			e.preventDefault(), w("save", x, () => n("已保存配置"));
		},
		aside: /* @__PURE__ */ (0, V.jsx)(Ee, {
			tone: r.error ? "error" : x ? "progress" : "neutral",
			children: r.error ? "连接失败" : r.state === "running" ? "运行中" : r.state === "starting" ? "连接中" : "已停止"
		}),
		children: [/* @__PURE__ */ (0, V.jsxs)(I, { children: [
			r.named_available ? /* @__PURE__ */ (0, V.jsx)(_e, {
				"aria-label": "公网入口的形态（二选一）",
				value: u,
				isDisabled: x,
				onChange: (e) => d(e),
				className: me,
				children: hq.map(([e, t]) => /* @__PURE__ */ (0, V.jsx)(o, {
					value: e,
					className: pe,
					children: t
				}, e))
			}) : null,
			/* @__PURE__ */ (0, V.jsx)(D, { children: gq[C ? "named" : "quick"] }),
			C ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(O, {
				id: "tunnel-hostname",
				label: "公开主机名",
				autoComplete: "off",
				maxLength: 253,
				value: f,
				onChange: m,
				isDisabled: x,
				validationBehavior: "aria",
				isInvalid: !!_.hostname,
				hint: _.hostname || "Cloudflare Zero Trust 里指向这台电脑的主机名。"
			}), /* @__PURE__ */ (0, V.jsx)(O, {
				id: "tunnel-token",
				type: "password",
				label: "隧道令牌",
				autoComplete: "off",
				maxLength: 2048,
				value: h,
				onChange: g,
				isDisabled: x,
				validationBehavior: "aria",
				hint: r.token_set ? "已保存，留空不改。" : "在 Cloudflare Zero Trust 的隧道详情页复制。"
			})] }) : null,
			r.available ? null : /* @__PURE__ */ (0, V.jsx)(P, {
				tone: "warning",
				title: "找不到 cloudflared",
				children: "安装官方 cloudflared，或用设置文件的 tunnel.binary 与 PEACH_CLOUDFLARED 指定路径。"
			}),
			r.state === "running" && r.url ? /* @__PURE__ */ (0, V.jsx)(P, {
				tone: "info",
				title: "公网地址",
				children: /* @__PURE__ */ (0, V.jsx)(S, {
					href: r.url,
					children: r.url
				})
			}) : null,
			r.state === "starting" ? /* @__PURE__ */ (0, V.jsx)(P, {
				tone: "info",
				title: "正在连接",
				children: "正在等待 cloudflared 连上 Cloudflare 边缘。"
			}) : null,
			r.error ? /* @__PURE__ */ (0, V.jsx)(b, { children: r.error }) : null,
			y.error ? /* @__PURE__ */ (0, V.jsx)(b, { children: y.error }) : null
		] }), /* @__PURE__ */ (0, V.jsxs)(E, {
			status: r.enabled ? "Pear 重启后自动恢复。" : void 0,
			children: [/* @__PURE__ */ (0, V.jsx)(l, {
				variant: r.named_available ? "secondary" : "primary",
				onClick: () => w("toggle", !x, (e) => n(e.enabled ? "公网入口已启动" : "公网入口已停止")),
				...R(y.busy === "toggle"),
				children: x ? "停止公网入口" : "启动公网入口"
			}), r.named_available ? /* @__PURE__ */ (0, V.jsx)(l, {
				type: "submit",
				...R(y.busy === "save"),
				children: "保存配置"
			}) : null]
		})]
	});
}
// src/react/settings/network-settings.tsx
function vq({ data: e, receipt: t, panel: n, issues: r }) {
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		...fn(n),
		children: [
			r,
			e.network || e.editable && e.port_editable !== !1 && !e.section_errors?.media_sources ? /* @__PURE__ */ (0, V.jsx)(lq, {
				data: e,
				receipt: t
			}) : null,
			e.access ? /* @__PURE__ */ (0, V.jsx)(FK, {
				initial: e.access,
				receipt: t,
				devices: (e) => /* @__PURE__ */ (0, V.jsx)(oq, {
					revision: e.revision,
					receipt: t
				}),
				after: e.api_token ? (n) => /* @__PURE__ */ (0, V.jsx)(RK, {
					initial: e.api_token,
					mode: n.mode,
					receipt: t
				}) : void 0
			}) : null,
			e.certificate ? /* @__PURE__ */ (0, V.jsx)(VK, { initial: e.certificate }) : null,
			e.tunnel ? /* @__PURE__ */ (0, V.jsx)(_q, {
				revision: e.revision,
				initial: e.tunnel,
				receipt: t
			}) : null,
			e.peach_proxy ? /* @__PURE__ */ (0, V.jsx)(yq, {
				initial: e.peach_proxy,
				receipt: t
			}) : null
		]
	});
}
function yq({ initial: e, receipt: t }) {
	let [n, r] = (0, B.useState)(e), [i, a] = (0, B.useState)(e.mode), [o, s] = (0, B.useState)(""), c = wt();
	return /* @__PURE__ */ (0, V.jsxs)(F, {
		id: "peachProxy",
		guide: "proxy",
		title: "Pear 代理",
		onSubmit: (e) => {
			e.preventDefault(), c.run("save", (e) => L("/api/configuration/peach-proxy", {
				mode: i,
				proxy: o
			}, "POST", e), (e) => {
				r(e), s(""), t("已保存配置");
			});
		},
		children: [
			/* @__PURE__ */ (0, V.jsx)(fe, { children: /* @__PURE__ */ (0, V.jsx)(Se, {
				label: "连接方式",
				description: "Pear 访问外网和采集来源时使用。",
				children: /* @__PURE__ */ (0, V.jsx)(fq, {
					mode: i,
					onChange: a
				})
			}) }),
			i === "proxy" || n.needs_selection || c.error ? /* @__PURE__ */ (0, V.jsxs)(I, {
				divided: !0,
				children: [
					i === "proxy" ? /* @__PURE__ */ (0, V.jsx)(pq, {
						id: "peachProxyAddress",
						value: o,
						onChange: s,
						saved: n.proxy_saved
					}) : null,
					n.needs_selection ? /* @__PURE__ */ (0, V.jsx)(P, {
						tone: "warning",
						title: "需要选择连接方式",
						children: "已有来源的代理地址不同，请选择公共连接方式。"
					}) : null,
					c.error ? /* @__PURE__ */ (0, V.jsx)(b, { children: c.error }) : null
				]
			}) : null,
			/* @__PURE__ */ (0, V.jsx)(E, { children: /* @__PURE__ */ (0, V.jsx)(l, {
				type: "submit",
				...R(c.busy === "save"),
				children: "保存配置"
			}) })
		]
	});
}
// src/react/settings/configuration-shape.ts
function bq(e) {
	let t = e.downloads;
	if (!t) return null;
	let n = t.media_sources ?? [];
	return {
		cloud: n.some((e) => d.includes(e)),
		has115: n.includes("115"),
		pikpak: n.includes("pikpak"),
		pikpakRoots: t.pikpak_roots.length > 0,
		pikpakLoggedIn: t.pikpak.logged_in,
		browserLogin: t.pikpak_browser.available
	};
}
function xq(e) {
	let t = e.tunnel;
	return {
		port: !!(e.editable && e.port_editable !== !1),
		addresses: e.network ? 1 + Number(!!(e.network.lan_url || e.network.ip_url)) + Number(!!(e.network.lan_url && e.network.ip_url)) : 0,
		networkEditable: !!e.network?.editable,
		lan: e.network?.host === "0.0.0.0",
		proxyAddress: e.peach_proxy?.mode === "proxy" || !!e.peach_proxy?.needs_selection,
		access: e.access?.mode ?? "",
		tunnelNamed: !!t?.named_available,
		tunnelNamedMode: !!(t?.named_available && t.mode === "named"),
		tunnelNote: !!(t && (!t.available || t.state === "starting" || t.state === "running" && t.url))
	};
}
function Sq(e) {
	let t = e.updates, n = e.update_job?.state ?? "idle", r = !t || t.state === "unchecked" && !t.checked_at && n === "idle", i = +!!t?.package_kind + (r ? 0 : +!!t?.checked_at + (t?.state === "unchecked" ? 0 : 1) + (n === "idle" ? 0 : 1)), a = e.automatic_updates, o = e.storage;
	return {
		releaseFacts: t?.package_kind ? 5 : 4,
		releaseNotes: i,
		autoUpdateHelp: !(!a || a.available && !a.download_available),
		startupNote: !!e.startup?.message,
		desktopNote: !!e.startup?.desktop_message,
		storageRows: o?.usage?.categories.length ?? 0,
		storageNotes: o && !o.relocation.available ? 1 : 0,
		reporting: !!e.remote_reporting,
		reportingIdle: !(!e.remote_reporting || e.remote_reporting.available),
		sharing: !!e.library_sharing,
		sharingNotice: !!e.library_sharing?.notice,
		sharingIdle: !(!e.library_sharing || e.library_sharing.available),
		facts: e.facts.map((e) => e.term),
		uninstall: !!e.uninstall,
		uninstallHelp: !!e.uninstall?.available
	};
}
// src/react/settings/configuration-page.tsx
function Cq({ receipt: e, reopenTutorial: t, section: n = "", diagnostics: r }) {
	let i = At({
		queryKey: p,
		queryFn: ({ signal: e }) => Je(e)
	}), a = i.data;
	return a ? /* @__PURE__ */ (0, V.jsx)(Eq, {
		data: a,
		receipt: e,
		reopenTutorial: t,
		section: n,
		diagnostics: r,
		refreshing: i.isFetching,
		reload: () => {
			i.refetch({ cancelRefetch: !1 });
		}
	}) : /* @__PURE__ */ (0, V.jsx)("div", {
		className: "ui-configpage",
		children: /* @__PURE__ */ (0, V.jsx)(P, {
			tone: "error",
			title: "配置读取失败",
			children: i.error ? qe(i.error) : "未取得配置，请刷新页面重试。"
		})
	});
}
function wq({ data: e, sections: t, reload: n, refreshing: r }) {
	return /* @__PURE__ */ (0, V.jsx)(V.Fragment, { children: t.map((t) => {
		let i = e.section_errors?.[t];
		return i ? /* @__PURE__ */ (0, V.jsx)(P, {
			tone: "error",
			title: i.title,
			action: /* @__PURE__ */ (0, V.jsx)(l, {
				variant: "secondary",
				size: "small",
				onClick: n,
				...R(r),
				children: "重新读取"
			}),
			children: i.message
		}, t) : null;
	}) });
}
var Tq = 0;
function Eq({ data: e, receipt: t, reopenTutorial: n, section: r, diagnostics: i, reload: a, refreshing: o }) {
	let [s] = (0, B.useState)(() => `board-tabs-${++Tq}`), [c, l] = (0, B.useState)(r), u = (0, B.useRef)(null), d = (0, B.useRef)(c);
	(0, B.useEffect)(() => {
		l(r);
	}, [r]), (0, B.useEffect)(() => {
		let t = bq(e);
		t && ft("downloads", t), ft("network", xq(e)), ft("maintenance", Sq(e));
	}, [e]), (0, B.useLayoutEffect)(() => {
		if (d.current === c) return;
		d.current = c;
		let e = u.current?.querySelector(".ui-board-local-nav"), t = u.current?.querySelector(".ui-board-group-active");
		if (!e || !t) return;
		let n = parseFloat(getComputedStyle(e).top);
		if (!Number.isFinite(n) || e.getBoundingClientRect().top > n + 1) return;
		let r = matchMedia("(max-width:900px)").matches ? e.getBoundingClientRect().bottom + 8 : n;
		window.scrollTo(0, Math.max(0, window.scrollY + t.getBoundingClientRect().top - r));
	}, [c]);
	let f = (e) => {
		l(e), bt(yt(e), {
			replace: !0,
			state: ot.navigation.location.state
		});
	}, [p, m] = (0, B.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, B.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => m(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let h = {
		data: e,
		receipt: t
	}, g = (t) => /* @__PURE__ */ (0, V.jsx)(wq, {
		data: e,
		sections: t,
		reload: a,
		refreshing: o
	}), _ = [
		"peach_proxy",
		"access",
		"tunnel",
		"push_discovery",
		...e.editable && e.port_editable !== !1 ? ["media_sources"] : []
	], v = !!(e.peach_proxy || e.access || e.tunnel || e.editable && e.port_editable !== !1 || _.some((t) => e.section_errors?.[t])), y = e.downloads, b = [
		{
			id: "library",
			title: "媒体库与入库",
			body: (n) => /* @__PURE__ */ (0, V.jsxs)("div", {
				...fn(n),
				children: [
					g([
						"media_sources",
						"library_count",
						"mount_dependencies"
					]),
					!e.section_errors?.media_sources && !e.section_errors?.library_count ? /* @__PURE__ */ (0, V.jsx)(OK, { ...h }) : null,
					/* @__PURE__ */ (0, V.jsx)(MK, { receipt: t })
				]
			})
		},
		...y || e.section_errors?.downloads ? [{
			id: "downloads",
			title: "下载渠道",
			body: (e) => /* @__PURE__ */ (0, V.jsx)(Dn, {
				initial: y,
				receipt: t,
				panel: e,
				issues: g(["downloads"])
			})
		}] : [],
		...v ? [{
			id: "network",
			title: "网络与访问",
			body: (e) => /* @__PURE__ */ (0, V.jsx)(vq, {
				...h,
				panel: e,
				issues: g(_)
			})
		}] : [],
		{
			id: "maintenance",
			title: "应用与维护",
			body: (e) => /* @__PURE__ */ (0, V.jsxs)("div", {
				...fn(e),
				children: [
					g([
						"startup",
						"uninstall",
						"storage",
						"remote_reporting",
						"library_sharing",
						"updates",
						"update_job",
						"automatic_updates",
						"facts"
					]),
					/* @__PURE__ */ (0, V.jsx)(qG, { ...h }),
					/* @__PURE__ */ (0, V.jsx)(jG, {
						...h,
						reopenTutorial: n
					})
				]
			})
		},
		{
			id: "diagnostics",
			title: "系统诊断",
			body: (e) => /* @__PURE__ */ (0, V.jsx)("div", {
				...fn(e),
				children: e.active ? i : null
			})
		}
	], x = Math.max(0, b.findIndex((e) => e.title === c));
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		ref: u,
		className: "ui-configpage",
		children: [/* @__PURE__ */ (0, V.jsx)("div", {
			className: "ui-board-local-nav",
			"data-section-nav": "",
			children: /* @__PURE__ */ (0, V.jsx)(Ce, {
				group: "configuration",
				label: "配置分区",
				value: b[x].id,
				tabs: b.map(({ id: e, title: t }) => ({
					value: e,
					label: t
				})),
				sectionItems: !0,
				panelPrefix: s,
				orientation: p ? "horizontal" : "vertical",
				className: "",
				onChange: (e) => f(b.find((t) => t.id === e).title)
			})
		}), b.map(({ id: e, title: t, body: n }, r) => /* @__PURE__ */ (0, V.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)("h2", {
			className: "ui-configgroup",
			children: t
		}), n({
			index: r,
			id: `${s}-panel-${e}`,
			labelledBy: `${s}-tab-${e}`,
			active: r === x
		})] }, t))]
	});
}
export { Cq as ConfigurationPage };

//# debugId=058ffd3c-9bca-402f-ab1e-86ea4c1f4d7d