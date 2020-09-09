/**
 * Created by 86185 in 2020/8/23 on 9:02
 */
const log4js = require("log4js");

log4js.configure({
    appenders: {
        //控制台输出
        console: {
            type: "console"
        },
        //请求转发日志
        info: {
            type: "dateFile",    //指定日志文件按时间打印
            filename: "logs/info",  //指定输出文件路径
            pattern: ".yyyy-MM-dd.log",
            alwaysIncludePattern: true
        },
        //错误日志
        error: {
            type: "dateFile",
            filename: "logs/error",
            pattern: ".yyyy-MM-dd.log",
            alwaysIncludePattern: true
        },
        //其他日志
        other: {
            type: "dateFile",
            filename: "logs/other",
            pattern: ".yyyy-MM-dd.log",
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {appenders: ["console", "info"], level: "debug"},
        error: {appenders: ["console", "error"], level: "error"},
    }
})

export default log4js
