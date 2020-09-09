/**
 * Created by baidm in 2020/9/8 on 22:04
 */
module.exports = {
    // 项目嵌套文件夹的基础入口路径
    base: "",
    // 生成的生产环境构建文件的目录
    outputDir: "./public/dist",
    // 放置生成的静态资源 (js、css、img、fonts) 的目录,相对于outputDir
    assetsDir: "static",
    // 指定生成的index.html的输出路径，相对于outputDir，也可以是一个绝对路径
    indexPath: "index.html",
    // 为stylus文件定义全局变量
    cssPreprocessOptions: {
        stylus: {
            modifyVars: {
                "preprocess-custom-color": "green"
            }
        }
    },
    jsx: {},
    // 自定义模块转换配置
    vueCustomBlockTransforms: {
        i18n: ({code}) => {
            // return transformed code
        }
    },
    port: 9999,
    proxy: {
        "/ly": {
            target: "http://localhost:5000",
            changeOrigin: true,
        },
    },
    optimizeDeps: {
        include: ["lodash"]
    },
    alias: {
        "@": "./src"
    },
    external: ["vue", "js"],
}
