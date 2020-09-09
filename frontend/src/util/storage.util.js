/**
 * Created by 86185 in 2020/7/11 on 10:43
 */
class StorageUtil {
    constructor() {
    }

    /**
     * localStorage set，默认存1天
     * @param key
     * @param value
     * @param expire
     */
    localStorageSet(key = "", value = Object.create(null), expire = 1000 * 60 * 60 * 24) {
        localStorage.setItem(key, JSON.stringify(value));
        setTimeout(() => {
            localStorage.removeItem(key)
        }, expire)
    }

    /**
     * localStorage get
     * @param key
     * @return {string}
     */
    localStorageGet(key = "") {
        return localStorage.getItem(key)
    }

    /**
     * localStorage remove
     * @param key
     */
    localStorageRemove(key = "") {
        localStorage.removeItem(key)
    }

    /**
     * localStorage clear
     */
    localStorageClear() {
        localStorage.clear()
    }

    /**
     * sessionStorage set，默认存1天
     * @param key
     * @param value
     * @param expire
     */
    sessionStorageSet(key = "", value = Object.create(null), expire = 1000 * 60 * 60 * 24) {
        sessionStorage.setItem(key, JSON.stringify(value));
        setTimeout(() => {
            sessionStorage.removeItem(key)
        }, expire)
    }

    /**
     * sessionStorage get
     * @param key
     */
    sessionStorageGet(key = "") {
        sessionStorage.getItem(key)
    }

    /**
     * sessionStorage remove
     * @param key
     */
    sessionStorageRemove(key = "") {
        sessionStorage.removeItem(key)
    }

    /**
     * sessionStorage clear
     */
    sessionStorageClear() {
        sessionStorage.clear()
    }

    /**
     * cookie set，默认存1天
     * @param key
     * @param value
     * @param expire
     */
    cookieSet(key = "", value = Object.create(null), expire = 1000 * 60 * 60 * 24) {
        let date = new Date();
        date.setDate(date.getTime() + expire);
        document.cookie = `${key}=${value};expires=${date.toLocaleString()}`;
    }

    /**
     * cookie get
     * @param key
     * @return {string}
     */
    cookieGet(key = "") {
        let cookieStr = unescape(document.cookie);
        let arr = cookieStr.split(";");
        let cookieValue = "";
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i].split("=");
            if (temp[0] === key) {
                cookieValue = temp[1];
                break;
            }
        }
        return cookieValue
    }

    /**
     * cookie remove
     * @param key
     */
    cookieRemove(key = "") {
        document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
    }
}

export default new StorageUtil()
