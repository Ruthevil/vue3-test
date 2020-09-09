/**
 * Created by 86185 in 2020/7/11 on 10:44
 */
class UrlUtil {
    constructor() {
    }

    /**
     * 是否是正确的URL
     * @param value
     * @return {boolean}
     */
    isUrl(value = "") {
        const a = document.createElement('a');
        a.href = value;
        return [
            /^(http|https):$/.test(a.protocol),
            a.host,
            a.pathname !== value,
            a.pathname !== `/${value}`
        ].find(x => !x) === undefined
    }

    /**
     * 获取URL后面拼接的参数
     * @param value
     * @return {string|null}
     */
    getQueryString(value = "") {
        const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        const url = window.location.href;
        const search = url.substring(url.lastIndexOf('?') + 1);
        const r = search.match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
}

export default new UrlUtil()
