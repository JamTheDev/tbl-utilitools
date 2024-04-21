import App from './App.svelte'

const ROOT = document.getElementById('app');
const NEW_ROOT = document.createElement("div");
const BODY: HTMLElement = document.querySelector("body>#page-wrapper")!;

BODY.style.position = "relative";
BODY.style.opacity = "0";

NEW_ROOT.className = "app";

NEW_ROOT.style.position = "absolute";
NEW_ROOT.style.width = "100svw";
NEW_ROOT.style.height = "100svh";
NEW_ROOT.style.zIndex = "2000";

if (!ROOT)
  BODY.append(NEW_ROOT);

const app = new App({
  target: ROOT ?? NEW_ROOT,
})

export default app
