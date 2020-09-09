/**
 * Created by baidm in 2020/9/5 on 10:20
 */
const _ = require("lodash");

export default function (url) {
    let paramsStr = url.split("?")[1];
    let paramsStrArr = _.compact(paramsStr && paramsStr.split("&"));
    let tempArr = null, paramsObj = {sourceUrl: url};
    _.map(paramsStrArr, function (str) {
        tempArr = str.split("=");
        paramsObj[tempArr[0]] = tempArr[1];
    });
    return paramsObj;
}