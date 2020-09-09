/**
 * Created by 86185 in 2020/7/11 on 10:44
 */
class StringUtil {
    constructor() {
    }

    /**
     * 字符串去掉开头和结尾的空格
     * @param value
     * @return {void | string | *}
     */
    strTrim(value = "") {
        return value.replace(/(^\s*)|(\s*$)/g, "")
    }

    /**
     * 字符串去掉开头的空格
     * @param value
     * @return {void | string | *}
     */
    strTrimLeft(value = "") {
        return value.replace(/^\s*/g, "")
    }

    /**
     * 字符串去掉结尾的空格
     * @param value
     * @return {void | string | *}
     */
    strTrimRight(value = "") {
        return value.replace(/\s*$/g, "")
    }

    /**
     * 字符串是否包含某个子串
     * @param value
     * @param target
     * @return {boolean}
     */
    strInclude(value = "", target = "") {
        return value.includes(target)
    }

    /**
     * 字符串是否以某个子串开头
     * @param value
     * @param target
     * @return {boolean}
     */
    strStartWith(value = "", target = "") {
        return value.startsWith(target)
    }

    /**
     * 字符串的某个子串替换为另一个子串
     * @param value
     * @param src
     * @param target
     * @return {void | string | *}
     */
    strReplace(value = "", src = "", target = "") {
        return value.replace(new RegExp(src, "g"), target)
    }

    /**
     * 字符串转换为大写
     * @param value
     * @return {string}
     */
    strUppercase(value = "") {
        return value.toUpperCase()
    }

    /**
     * 字符串转换为小写
     * @param value
     * @return {string}
     */
    strLowercase(value = "") {
        return value.toLowerCase()
    }

    /**
     * 字符串首字母大写
     * @param value
     * @return {string}
     */
    strCapital(value = "") {
        let strTemp = value.toLowerCase();
        return strTemp.charAt(0).toUpperCase() + strTemp.slice(1)
    }
}

export default new StringUtil()
