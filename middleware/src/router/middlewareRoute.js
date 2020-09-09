/**
 * Created by 86185 in 2020/8/15 on 16:46
 */
const path = require("path");

import log4js from "@/util/log.util"
import ReadFileUtil from "@/util/readFile.util"
import parseUrlParamsFilter from "@/filter/parseUrlParams.filter"

const logger = log4js.getLogger("default");

class MiddlewareRouter {
    constructor(app, router, config) {
        this.app = app;
        this.router = router;
        this.createRoute(config);
    }

    createRoute(config) {

        let staticPath = config.frontendDir || path.join(__dirname, "../../frontend/public");

        logger.info(`开启静态资源服务：${staticPath} -> ${config.contextPath}`);

        this.router.get(`${config.contextPath}/config`, async (ctx, next) => {

            ctx.response.body = config;

        });

        this.router.get(`${config.contextPath}/province/single`, async (ctx, next) => {

            let paramsObj = parseUrlParamsFilter(ctx.request.url);

            let file = new ReadFileUtil(`${paramsObj["adcode"]}.json`).readFile();
            if (file) {
                ctx.response.body = {
                    status: 200,
                    data: file,
                    message: "success"
                };
            } else {
                ctx.response.body = {
                    status: 500,
                    data: null,
                    message: "error"
                };
            }
        })

    }
}

export default MiddlewareRouter
