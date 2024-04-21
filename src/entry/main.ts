import "../app.scss"

const ROOT = document.getElementById("app");
const NEW_ROOT = document.createElement("div");
const BODY: HTMLElement = document.querySelector("body>#page-wrapper")!;

BODY.style.position = "relative";

for (const iterator of BODY.children) {
    if (!iterator.classList.contains("app")) {
        (iterator as HTMLElement).style.opacity = "0";
    }
}

NEW_ROOT.className = "app";

NEW_ROOT.style.position = "absolute";
NEW_ROOT.style.width = "100svw";
NEW_ROOT.style.height = "100svh";
NEW_ROOT.style.zIndex = "2000";
NEW_ROOT.style.opacity = "1";

export { BODY, NEW_ROOT, ROOT };
