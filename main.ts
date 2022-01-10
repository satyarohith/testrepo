import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

function handler(req: Request): Promise<Response> {
  const url = new URL("./main.ts", import.meta.url);
  return fetch(url);
}

console.log("Listening on http://localhost:8000");
await serve(handler);
