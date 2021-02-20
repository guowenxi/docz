// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---readme-md": () => import("./../../../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-components-components-mdx": () => import("./../../../../src/components/components.mdx" /* webpackChunkName: "component---src-components-components-mdx" */),
  "component---src-components-config-mdx": () => import("./../../../../src/components/Config.mdx" /* webpackChunkName: "component---src-components-config-mdx" */),
  "component---src-components-pages-mdx": () => import("./../../../../src/components/Pages.mdx" /* webpackChunkName: "component---src-components-pages-mdx" */),
  "component---src-index-mdx": () => import("./../../../../src/index.mdx" /* webpackChunkName: "component---src-index-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

