const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("E:\\__docz\\my-docz-app\\.docz\\.cache\\dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("E:\\__docz\\my-docz-app\\README.md"))),
  "component---src-components-components-mdx": hot(preferDefault(require("E:\\__docz\\my-docz-app\\src\\components\\components.mdx"))),
  "component---src-components-config-mdx": hot(preferDefault(require("E:\\__docz\\my-docz-app\\src\\components\\Config.mdx"))),
  "component---src-components-pages-mdx": hot(preferDefault(require("E:\\__docz\\my-docz-app\\src\\components\\Pages.mdx"))),
  "component---src-index-mdx": hot(preferDefault(require("E:\\__docz\\my-docz-app\\src\\index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("E:\\__docz\\my-docz-app\\.docz\\src\\pages\\404.js")))
}

