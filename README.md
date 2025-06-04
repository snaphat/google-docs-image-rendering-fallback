# 🌙 Google Docs Image Rendering Fallback 🌙

## About

Userscript that spoofs the user agent to mimic Firefox, prompting Google Docs to *prefer* its non-canvas-based image rendering path. This can aid in dark-mode rendering.

This is especially useful when using browser-level or extension-based dark modes such as:

- **Auto Dark Mode for Web Contents** (built into Chromium via `chrome://flags/#enable-force-dark`)
- **Dark Reader** ([darkreader.org](https://darkreader.org) / [Chrome extension](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh))
- **Midnight Lizard** ([Chrome extension](https://chrome.google.com/webstore/detail/midnight-lizard/pbnndmlekkboofhnbonilimejonapojg))

Google Docs determines how to render images by directly reading `navigator.userAgent` in JavaScript. Methods like devtools overrides, browser flags, or extensions do **not** affect this runtime value. This script overrides the property at **document start**, ensuring the spoof is in place before any page scripts execute.

- Minimal script that overrides `navigator.userAgent`
- Executes at `document-start`

## Userscript Installation

### Step 1: Install a user-script manager

* Chrome Users:
  * Install [ViolentMonkey](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag), or [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
* Edge Users:
  * Install [ViolentMonkey](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao), or [TamperMonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd).
* Opera Users:
  * Install [TamperMonkey](https://addons.opera.com/en/extensions/details/tampermonkey-beta/).
* Firefox Users:
  * Install [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/), [ViolentMonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/), or [TamperMonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/).

### Step 2: Install the script

* Click [here](https://raw.githubusercontent.com/snaphat/google-docs-image-rendering-fallback/main/google-docs-image-rendering-fallback.user.js) to install the script.
