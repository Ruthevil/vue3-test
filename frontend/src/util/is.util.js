/**
 * Created by 86185 in 2020/7/11 on 10:42
 */
class IsUtil {
    constructor() {
    }

    /**
     * 判断是否是数字
     * @param value
     * @return {boolean}
     */
    isNumber(value = "") {
        return /^\d{1,}$/g.test(value)
    }

    /**
     * 判断是否是字母
     * @param value
     * @return {boolean}
     */
    isLetter(value = "") {
        return /^[a-zA-Z]+$/g.test(value)
    }

    /**
     * 判断是否全部是小写字母
     * @param value
     * @return {boolean}
     */
    isLowercaseLetter(value = "") {
        return /^[a-z]+$/g.test(value)
    }

    /**
     * 判断是否全部是大写字母
     * @param value
     * @return {boolean}
     */
    isUppercaseLetter(value = "") {
        return /^[A-Z]+$/g.test(value)
    }

    /**
     * 判断是否是数字或字母
     * @param value
     * @return {boolean}
     */
    isNumberOrLetter(value = "") {
        return /^[0-9a-zA-Z]+$/g.test(value)
    }

    /**
     * 判断是否是字母和数字的组合
     * @param value
     * @return {boolean}
     */
    isNumberAndLetter(value = "") {
        return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/g.test(value)
    }

    /**
     * 判断是否是中文
     * @param value
     * @return {boolean}
     */
    isChinese(value = "") {
        return /^[\u4E00-\u9FA5]+$/g.test(value)
    }

    /**
     * 判断是否是中文、数字、字母
     * @param value
     * @return {boolean}
     */
    isChineseNumberLetter(value = "") {
        return /^[0-9a-zA-Z\u4E00-\u9FA5]+$/g.test(value)
    }

    /**
     * 判断是否是邮箱
     * @param value
     * @return {boolean}
     */
    isEmail(value = "") {
        const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;
        return reg.test(value)
    }

    /**
     * 判断是否是手机号
     * @param value
     * @return {boolean}
     */
    isPhone(value = "") {
        return /^((\+|00)86)?1[3-9]\d{9}$/g.test(value)
    }

    /**
     *类型判断
     * @param target
     * @param type
     * @returns {boolean}
     * isType([],"Array")   =>  true
     * isType(/\d/,"Regexp")    =>  true
     * isType(new Date(),"Date")    =>  true
     * isType(function(){},"Function")  =>  true
     * isType(Symbol(),"Symbol")    =>  true
     */
    isType(target, type) {
        let targetType = Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
        return targetType === type.toLowerCase()
    }

    /**
     * 检测是否为PC浏览器
     * @returns {boolean}
     */
    isPCBrowser() {
        let e = window.navigator.userAgent.toLowerCase(),
            t = "ipad" === e.match(/ipad/i),
            i = "iphone" === e.match(/iphone/i),
            r = "midp" === e.match(/midp/i),
            n = "rv:1.2.3.4" === e.match(/rv:1.2.3.4/i),
            a = "ucweb" === e.match(/ucweb/i),
            o = "android" === e.match(/android/i),
            s = "window ce" === e.match(/window ce/i),
            l = "window mobile" === e.match(/window mobile/i);
        return !(t || i || r || n || a || 0 || s || l)
    }

    /**
     * 识别浏览器及平台
     * @returns {string}
     */
    getPlatformInfo() {
        // 运行环境是浏览器
        let inBrowser = typeof window !== "undefined";
        // 运行环境是微信
        let inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
        let weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
        // 运行环境是UA判断
        let UA = inBrowser && window.navigator.userAgent.toLowerCase();
        if (UA) {
            let platforms = {
                IE: /msie|trident/.test(UA),
                IE9: UA.indexOf("msie 9.0") > 0,
                Edge: UA.indexOf("edge/") > 0,
                Android: UA.indexOf("android") > 0 || (weexPlatform === "android"),
                IOS: /iphone|ipad|ipod|ios/.test(UA) || (weexPlatform === "ios"),
                Chrome: /chrome\/\d+/.test(UA) && !(UA.indexOf("edge/") > 0)
            }
            for (const key in platforms) {
                if (platforms.hasOwnProperty(key)) {
                    if (platforms[key]) return key
                }
            }
        }
    }
}

export default new IsUtil()
