const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: './docz/',

  siteMetadata: {
    title: '后台配置文档',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'E:\\__docz\\my-docz-app\\.docz',
        base: './docz/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: '后台配置文档',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'E:\\__docz\\my-docz-app',
          templates:
            'E:\\__docz\\my-docz-app\\node_modules\\docz-core\\dist\\templates',
          docz: 'E:\\__docz\\my-docz-app\\.docz',
          cache: 'E:\\__docz\\my-docz-app\\.docz\\.cache',
          app: 'E:\\__docz\\my-docz-app\\.docz\\app',
          appPackageJson: 'E:\\__docz\\my-docz-app\\package.json',
          appTsConfig: 'E:\\__docz\\my-docz-app\\tsconfig.json',
          gatsbyConfig: 'E:\\__docz\\my-docz-app\\gatsby-config.js',
          gatsbyBrowser: 'E:\\__docz\\my-docz-app\\gatsby-browser.js',
          gatsbyNode: 'E:\\__docz\\my-docz-app\\gatsby-node.js',
          gatsbySSR: 'E:\\__docz\\my-docz-app\\gatsby-ssr.js',
          importsJs: 'E:\\__docz\\my-docz-app\\.docz\\app\\imports.js',
          rootJs: 'E:\\__docz\\my-docz-app\\.docz\\app\\root.jsx',
          indexJs: 'E:\\__docz\\my-docz-app\\.docz\\app\\index.jsx',
          indexHtml: 'E:\\__docz\\my-docz-app\\.docz\\app\\index.html',
          db: 'E:\\__docz\\my-docz-app\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
