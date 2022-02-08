import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

function handler(req: Request): Promise<Response> {
  
  return new Response("hello")
}

console.log("Listening on http://localhost:8000");
await serve(handler);
