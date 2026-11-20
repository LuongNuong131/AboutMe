import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { projects } from "../src/data/projects.js";
import { homeDescription, homeTitle, projectTitle, siteUrl } from "../src/data/site.js";

const dist = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", dist), "utf8");
const pagesBase = process.env.PORTFOLIO_BASE || "/";
const escape = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

function renderPage({ title, description, path, cover, noIndex = false }) {
  const imagePath = cover ? `projects/${cover.id}.webp` : "social-preview.jpg";
  const imageAlt = cover?.cover.alt.vi || homeTitle;
  const metadata = noIndex
    ? '<meta name="robots" content="noindex" />'
    : [
        `<link rel="canonical" href="${siteUrl}${path}" />`,
        '<meta property="og:locale" content="vi_VN" />',
        '<meta property="og:type" content="website" />',
        `<meta property="og:title" content="${escape(title)}" />`,
        `<meta property="og:description" content="${escape(description)}" />`,
        `<meta property="og:url" content="${siteUrl}${path}" />`,
        `<meta property="og:image" content="${siteUrl}/${imagePath}" />`,
        `<meta property="og:image:alt" content="${escape(imageAlt)}" />`,
        '<meta name="twitter:card" content="summary_large_image" />',
      ].join("\n    ");

  return template
    .replace('<title>Trần Quang Lương — Full-Stack Developer</title>', () => `<title>${escape(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, () => `<meta name="description" content="${escape(description)}" />`)
    .replace("<!-- portfolio-metadata -->", () => metadata);
}

const home = { title: homeTitle, description: homeDescription, path: "/" };
await writeFile(new URL("index.html", dist), renderPage(home));
await writeFile(new URL("404.html", dist), renderPage({ ...home, title: "Không tìm thấy trang | Trần Quang Lương", noIndex: true }));

for (const project of projects) {
  const path = `/project/${project.id}`;
  const page = renderPage({
    title: projectTitle(project),
    description: project.summary.vi,
    path,
    cover: project.cover ? project : undefined,
  });
  // GitHub Pages serves directory indexes. Vercel clean URLs serve extensionless HTML paths.
  const folder = pagesBase === "/" ? "project" : join("project", project.id);
  const filename = pagesBase === "/" ? `${project.id}.html` : "index.html";
  await mkdir(new URL(folder, dist), { recursive: true });
  await writeFile(new URL(join(folder, filename), dist), page);
}

const sitemap = ["/", ...projects.map(({ id }) => `/project/${id}`)]
  .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
  .join("\n");

if (pagesBase === "/") {
  await writeFile(new URL("sitemap.xml", dist), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`);
  await writeFile(new URL("robots.txt", dist), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
}
