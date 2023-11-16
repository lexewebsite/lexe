import solid from "solid-start/vite";
import staticAdpater from "solid-start-static";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({ ssr: true, adapter: staticAdpater() })],
});
