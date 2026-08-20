import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the personal AI field notes", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>偏航记录｜个人 AI 观察笔记<\/title>/);
  assert.match(html, /今天值得知道的，不只是又发布了什么/);
  assert.match(html, /三个值得展开的信号/);
  assert.match(html, /我的判断/);
  assert.match(html, /仍待确认/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("keeps content separate from presentation", async () => {
  const [content, page, css] = await Promise.all([
    readFile(new URL("../app/content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(content, /export const leadStories/);
  assert.match(content, /export const quickSignals/);
  assert.match(page, /leadStories\.map/);
  assert.match(css, /prefers-reduced-motion/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
