// ==UserScript==
// @name         Google Docs Image Rendering Fallback
// @description  Spoofs the Firefox user agent to make Google Docs fall back to non-canvas image rendering while preserving canvas rendering for text.
// @version      0.0.1
// @match        https://docs.google.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

navigator.__defineGetter__("userAgent", () => "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0");
