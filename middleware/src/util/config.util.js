/**
 * Created by 86185 in 2020/8/16 on 13:50
 */
const fs = require("fs");
const path = require("path");

import log4js from "@/util/log.util"

const logger = log4js.getLogger("default");

class ConfigUtil {
    constructor() {
        this.config = this.queryConfigFromFile();
    }

    queryConfigFromFile() {

        let fileRes = fs.readFileSync(path.resolve("config.json"), "utf-8");

        let config = JSON.parse(fileRes);

        logger.info("config：\n", config);

        return config;
    }

    getConfig() {
        return this.config;
    }
}

export default new ConfigUtil().getConfig()
