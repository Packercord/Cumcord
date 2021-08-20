// API Utils
import logger from "../util/logger";
import webpackModules from "webpackModules";
import commonModules from "commonModules";
import patcher from "./patcher/patcher";
import settings from "./ui/settings/settings";

// Plugin management
import storage from "./plugins/storage";
import { unloadPlugin } from "./plugins/pluginHandler";

function uninject() {
  for (let plugin of Object.keys(window.cumcord.plugins.pluginCache)) {
    try {
      unloadPlugin(plugin);
    } catch { }
  }

  patcher.unpatchAll();
  patcher.unpatchAllCss();

  window.cumcord = undefined;
  delete window.cumcord;
  return true;
}

async function initializeAPI() {
  logger.log("Initializing Cumcord API");

  window.cumcord = {
    uninject,
    modules: {
      webpackModules,
      common: commonModules,
    },
    plugins: {},
    patcher,
    cum: () => { logger.log("8==D ~~~") }
  };

  await storage.initializePlugins();
  settings.initializeSettings();
}

export default initializeAPI;
