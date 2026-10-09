// Tell Bing (and the other IndexNow engines) which pages changed, so they
// recrawl now instead of whenever. Run after a deploy is live:
//   node scripts/indexnow.mjs            every URL in the live sitemap
//   node scripts/indexnow.mjs /blog/x    just these paths
// The key file public/9b13a06973694a0643004f043a0e1c0a.txt proves the site owns the key.
const SITE = "https://www.auserene.com";
const KEY = "9b13a06973694a0643004f043a0e1c0a";

const paths = process.argv.slice(2);
let urls;
if (paths.length) {
  urls = paths.map((p) => new URL(p, SITE).href);
} else {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls }),
});
console.log(res.status, res.statusText, `(${urls.length} URLs)`);
