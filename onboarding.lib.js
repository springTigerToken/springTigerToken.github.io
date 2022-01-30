/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/@metamask/onboarding@1.0.1/dist/metamask-onboarding.cjs.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"use strict";
function _interopDefault(e) {
    return e && "object" == typeof e && "default" in e ? e.
            default:
        e
}
// var Bowser = _interopDefault(require("bowser"));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(e, t, r, n) {
    return new(r || (r = Promise))((function(o, i) {
        function a(e) {
            try {
                d(n.next(e))
            } catch(e) {
                i(e)
            }
        }
        function s(e) {
            try {
                d(n.
                throw (e))
            } catch(e) {
                i(e)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t: new r((function(e) {
                e(t)
            }))).then(a, s)
        }
        d((n = n.apply(e, t || [])).next())
    }))
}
function __generator(e, t) {
    var r, n, o, i, a = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return i = {
        next: s(0),
        throw: s(1),
        return: s(2)
    },
    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this
    }),
        i;
    function s(i) {
        return function(s) {
            return function(i) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; a;) try {
                    if (r = 1, n && (o = 2 & i[0] ? n.
                        return: i[0] ? n.
                        throw || ((o = n.
                        return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                        case 0:
                        case 1:
                            o = i;
                            break;
                        case 4:
                            return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                        case 5:
                            a.label++,
                                n = i[1],
                                i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                                a.trys.pop();
                            continue;
                        default:
                            if (! (o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < o[1]) {
                                a.label = o[1],
                                    o = i;
                                break
                            }
                            if (o && a.label < o[2]) {
                                a.label = o[2],
                                    a.ops.push(i);
                                break
                            }
                            o[2] && a.ops.pop(),
                                a.trys.pop();
                            continue
                    }
                    i = t.call(e, a)
                } catch(e) {
                    i = [6, e],
                        n = 0
                } finally {
                    r = o = 0
                }
                if (5 & i[0]) throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            } ([i, s])
        }
    }
}
var ONBOARDING_STATE = {
        INSTALLED: "INSTALLED",
        NOT_INSTALLED: "NOT_INSTALLED",
        REGISTERED: "REGISTERED",
        REGISTERING: "REGISTERING",
        RELOADING: "RELOADING"
    },
    EXTENSION_DOWNLOAD_URL = {
        CHROME: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
        FIREFOX: "https://addons.mozilla.org/firefox/addon/ether-metamask/",
        DEFAULT: "https://metamask.io"
    },
    REGISTRATION_IN_PROGRESS = "REGISTRATION_IN_PROGRESS",
    FORWARDER_ID = "FORWARDER_ID",
    MetaMaskOnboarding = function() {
        function e(t) {
            var r = void 0 === t ? {}: t,
                n = r.forwarderOrigin,
                o = void 0 === n ? "https://fwd.metamask.io": n,
                i = r.forwarderMode,
                a = void 0 === i ? e.FORWARDER_MODE.INJECT: i;
            this.forwarderOrigin = o,
                this.forwarderMode = a,
                this.state = e.isMetaMaskInstalled() ? ONBOARDING_STATE.INSTALLED: ONBOARDING_STATE.NOT_INSTALLED;
            var s = e._detectBrowser();
            this.downloadUrl = s ? EXTENSION_DOWNLOAD_URL[s] : EXTENSION_DOWNLOAD_URL.DEFAULT,
                this._onMessage = this._onMessage.bind(this),
                this._onMessageFromForwarder = this._onMessageFromForwarder.bind(this),
                this._openForwarder = this._openForwarder.bind(this),
                this._openDownloadPage = this._openDownloadPage.bind(this),
                this.startOnboarding = this.startOnboarding.bind(this),
                this.stopOnboarding = this.stopOnboarding.bind(this),
                window.addEventListener("message", this._onMessage),
            a === e.FORWARDER_MODE.INJECT && "true" === sessionStorage.getItem(REGISTRATION_IN_PROGRESS) && e._injectForwarder(this.forwarderOrigin)
        }
        return e.prototype._onMessage = function(e) {
            if (e.origin === this.forwarderOrigin) return "metamask:reload" === e.data.type ? this._onMessageFromForwarder(e) : void console.debug("Unknown message from '" + e.origin + "' with data " + JSON.stringify(e.data))
        },
            e.prototype._onMessageUnknownStateError = function(e) {
                throw new Error("Unknown state: '" + e + "'")
            },
            e.prototype._onMessageFromForwarder = function(t) {
                return __awaiter(this, void 0, void 0, (function() {
                    return __generator(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                switch (this.state) {
                                    case ONBOARDING_STATE.RELOADING:
                                        return [3, 1];
                                    case ONBOARDING_STATE.NOT_INSTALLED:
                                        return [3, 2];
                                    case ONBOARDING_STATE.INSTALLED:
                                        return [3, 3];
                                    case ONBOARDING_STATE.REGISTERING:
                                        return [3, 5];
                                    case ONBOARDING_STATE.REGISTERED:
                                        return [3, 6]
                                }
                                return [3, 7];
                            case 1:
                                return console.debug("Ignoring message while reloading"),
                                    [3, 8];
                            case 2:
                                return console.debug("Reloading now to register with MetaMask"),
                                    this.state = ONBOARDING_STATE.RELOADING,
                                    location.reload(),
                                    [3, 8];
                            case 3:
                                return console.debug("Registering with MetaMask"),
                                    this.state = ONBOARDING_STATE.REGISTERING,
                                    [4, e._register()];
                            case 4:
                                return r.sent(),
                                    this.state = ONBOARDING_STATE.REGISTERED,
                                    t.source.postMessage({
                                            type: "metamask:registrationCompleted"
                                        },
                                        t.origin),
                                    this.stopOnboarding(),
                                    [3, 8];
                            case 5:
                                return console.debug("Already registering - ignoring reload message"),
                                    [3, 8];
                            case 6:
                                return console.debug("Already registered - ignoring reload message"),
                                    [3, 8];
                            case 7:
                                this._onMessageUnknownStateError(this.state),
                                    r.label = 8;
                            case 8:
                                return [2]
                        }
                    }))
                }))
            },
            e.prototype.startOnboarding = function() {
                sessionStorage.setItem(REGISTRATION_IN_PROGRESS, "true"),
                    this._openDownloadPage(),
                    this._openForwarder()
            },
            e.prototype.stopOnboarding = function() {
                "true" === sessionStorage.getItem(REGISTRATION_IN_PROGRESS) && (this.forwarderMode === e.FORWARDER_MODE.INJECT && (console.debug("Removing forwarder"), e._removeForwarder()), sessionStorage.setItem(REGISTRATION_IN_PROGRESS, "false"))
            },
            e.prototype._openForwarder = function() {
                this.forwarderMode === e.FORWARDER_MODE.OPEN_TAB ? window.open(this.forwarderOrigin, "_blank") : e._injectForwarder(this.forwarderOrigin)
            },
            e.prototype._openDownloadPage = function() {
                window.open(this.downloadUrl, "_blank")
            },
            e.isMetaMaskInstalled = function() {
                return Boolean(window.ethereum && window.ethereum.isMetaMask)
            },
            e._register = function() {
                return window.ethereum.request({
                    method: "wallet_registerOnboarding"
                })
            },
            e._injectForwarder = function(e) {
                var t = document.body,
                    r = document.createElement("iframe");
                r.setAttribute("height", "0"),
                    r.setAttribute("width", "0"),
                    r.setAttribute("style", "display: none;"),
                    r.setAttribute("src", e),
                    r.setAttribute("id", FORWARDER_ID),
                    t.insertBefore(r, t.children[0])
            },
            e._removeForwarder = function() {
                var e;
                null === (e = document.getElementById(FORWARDER_ID)) || void 0 === e || e.remove()
            },
            e._detectBrowser = function() {
                return "CHROME"
                // var e = Bowser.parse(window.navigator.userAgent);
                // return "Firefox" === e.browser.name ? "FIREFOX": ["Chrome", "Chromium"].includes(e.browser.name || "") ? "CHROME": null
            },
            e.FORWARDER_MODE = {
                INJECT: "INJECT",
                OPEN_TAB: "OPEN_TAB"
            },
            e
    } ();
// module.exports = Onboarding;
//# sourceMappingURL=/sm/0d8ee1576f369ab445c183e9e4118dff54648f80e41991e440fbbfff2625650b.map