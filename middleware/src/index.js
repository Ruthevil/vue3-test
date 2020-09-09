const koa = require("koa");
const router = require("koa-router")();

import MiddlewareRouter from "@/router/middlewareRoute"
import log4js from "@/util/log.util"
import config from "@/util/config.util"

const logger = log4js.getLogger("default");

const app = new koa();

new MiddlewareRouter(app, router, config);

app.use(router.routes());

app.listen(config.middlewarePort);

logger.info(`√ Server is running on http://${config.middlewareIp}:${config.middlewarePort}${config.contextPath}`);
