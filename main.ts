import { serve, serveStatic } from "https://deno.land/x/sift@0.4.3/mod.ts";

serve({
  // You can serve a single file.
  "/": serveStatic("readme.txt", { baseUrl: import.meta.url }),
});
