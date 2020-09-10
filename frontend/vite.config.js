/**
 * Created by baidm in 2020/9/8 on 22:04
 */
const path = require("path");

module.exports = {
    /**
     * Environment mode
     */
    mode: "",
    hostname: "",
    port: 9999,
    open: true,
    /**
     * Configure https.
     */
    https: false,
    httpsOptions: {},
    /**
     * Base public path when served in production.
     * @default '/'
     */
    base: "/",
    /**
     * Directory relative from `root` where build output will be placed. If the
     * directory exists, it will be removed before the build.
     * @default 'dist'
     */
    outDir: "dist",
    /**
     * Directory relative from `outDir` where the built js/css/image assets will
     * be placed.
     * @default '_assets'
     */
    assetsDir: "static",
    /**
     * Static asset files smaller than this number (in bytes) will be inlined as
     * base64 strings. Default limit is `4096` (4kb). Set to `0` to disable.
     * @default 4096
     */
    assetsInlineLimit: 4096,
    /**
     * Whether to code-split CSS. When enabled, CSS in async chunks will be
     * inlined as strings in the chunk and inserted via dynamically created
     * style tags when the chunk is loaded.
     * @default true
     */
    cssCodeSplit: true,
    /**
     * Whether to generate sourcemap
     * @default false
     */
    sourcemap: false,
    /**
     * Transpile target for esbuild.
     * @default 'es2020'
     */
    esbuildTarget:'es2020',
    /**
     * Configure custom proxy rules for the dev server. Uses
     * [`koa-proxies`](https://github.com/vagusX/koa-proxies) which in turn uses
     * [`http-proxy`](https://github.com/http-party/node-http-proxy). Each key can
     * be a path Full options
     * [here](https://github.com/http-party/node-http-proxy#options).
     *
     * Example `vite.config.js`:
     * ``` js
     * module.exports = {
     *   proxy: {
     *     // string shorthand
     *     '/foo': 'http://localhost:4567/foo',
     *     // with options
     *     '/api': {
     *       target: 'http://jsonplaceholder.typicode.com',
     *       changeOrigin: true,
     *       rewrite: path => path.replace(/^\/api/, '')
     *     }
     *   }
     * }
     * ```
     */
    proxy: {
        "/ly": {
            target: "http://localhost:5000",
            changeOrigin: true,
        }
    },
    /**
     * CSS preprocess options
     */
    cssPreprocessOptions: {
        stylus: {
            modifyVars: {
                "preprocess-custom-color":
                    "green"
            }
        }
    },
    /**
     * Configure what to use for jsx factory and fragment.
     * @default 'vue'
     */
    jsx: {},
    /**
     * Enable esbuild
     * @default true
     */
    enableEsbuild: true,
    /**
     * Transform functions for Vue custom blocks.
     *
     * Example `vue.config.js`:
     * ``` js
     * module.exports = {
     *   vueCustomBlockTransforms: {
     *     i18n: src => `export default Comp => { ... }`
     *   }
     * }
     * ```
     */
    vueCustomBlockTransforms: {
        i18n: ({code}) => {
            // return transformed code
        }
    },
    /**
     * Configure dep optimization behavior.
     *
     * Example `vite.config.js`:
     * ``` js
     * module.exports = {
     *   optimizeDeps: {
     *     exclude: ['dep-a', 'dep-b']
     *   }
     * }
     * ```
     */
    optimizeDeps: {
        include: ["lodash"]
    },
    /**
     * Import alias. The entries can either be exact request -> request mappings
     * (exact, no wildcard syntax), or request path -> fs directory mappings.
     * When using directory mappings, the key **must start and end with a slash**.
     *
     * Example `vite.config.js`:
     * ``` js
     * module.exports = {
     *   alias: {
     *     // alias package names
     *     'react': '@pika/react',
     *     'react-dom': '@pika/react-dom'
     *
     *     // alias a path to a fs directory
     *     // the key must start and end with a slash
     *     '/@foo/': path.resolve(__dirname, 'some-special-dir')
     *   }
     * }
     * ```
     */
    alias: {
        "/@/": path.resolve(__dirname, "./src")
    },
};
