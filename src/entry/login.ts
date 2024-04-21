import { ROOT, NEW_ROOT, BODY } from "./main";
import Login from "../components/Login.svelte";

if (!ROOT) {
  BODY.append(NEW_ROOT);
}

const app = new Login({
  target: ROOT ?? NEW_ROOT,
});

export default app;
