import browser from "webextension-polyfill";
import api from "~/common/lib/api";

import injectScript from "./injectScript";
import shouldInject from "./shouldInject";

async function onstart() {
  const inject = await shouldInject();
  if (!inject) {
    return;
  }

  // window.webln
  injectScript(browser.runtime.getURL("js/inpageScriptWebLN.bundle.js"));

  // window.nostr
  const nostrEnabled = (await api.getSettings()).nostrEnabled;
  if (nostrEnabled) {
    injectScript(browser.runtime.getURL("js/inpageScriptNostr.bundle.js"));
  }
}

onstart();
