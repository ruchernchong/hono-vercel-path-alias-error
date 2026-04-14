import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { FOO } from "@/constants";

const app = new Hono();

const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/backend/hono",
  FOO,
];

app.get("/", (c) => {
  return c.text(welcomeStrings.join("\n\n"));
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);

export default app;
