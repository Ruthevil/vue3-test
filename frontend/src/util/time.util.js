/**
 * Created by 86185 in 2020/8/23 on 9:15
 */
class TimeUtil {
    constructor() {
    }

    /**
     * 补零
     * @param n
     * @returns {*|string}
     */
    add0(n) {
        return n > 10 ? n : `0${n}`
    }

    /**
     * 获取年份
     * @param time
     * @return {number}
     */
    getYear(time = new Date()) {
        return time.getFullYear()
    }

    /**
     * 获取月份
     * @param time
     * @param fillFlag
     * @return {*}
     */
    getMonth(time = new Date(), fillFlag = true) {
        let month = time.getMonth() + 1;
        return fillFlag && this.add0(month)
    }

    /**
     * 获取日
     * @param time
     * @param fileFlag
     * @return {*}
     */
    getDay(time = new Date(), fileFlag = true) {
        let day = time.getDate();
        return fileFlag && this.add0(day)
    }

    /**
     * 获取星期
     * @param time
     * @return {number}
     */
    getWeekDay(time = new Date()) {
        return time.getDay()
    }

    /**
     * 获取某个月的天数，默认当前月的天数
     * @param year
     * @param month
     * @return {number}
     */
    getMonthDays(year = new Date().getFullYear(), month = new Date().getMonth()) {
        let date = new Date(year, month, 0);
        return date.getDate()
    }

    /**
     * 获取格式化时间，默认yyyy-MM-dd hh:mm:ss
     * @param time
     * @param separator
     * @return {string}
     */
    getFormatTime(time = new Date(), separator = "-") {
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let second = time.getSeconds();
        let arr = [month, day, hours, minutes, second];
        arr.forEach((item, index) => {
            arr[index] = this.add0(item)
        });
        return `${year}${separator}${month}${separator}${day} ${hours}:${minutes}:${second}`
    }

    /**
     * 时间戳转化为时间对象并格式化
     * @param timeStamp
     * @param separator
     * @return {string}
     */
    timeStampToFormat(timeStamp = new Date().getTime(), separator = "-") {
        return this.getFormatTime(new Date(timeStamp), separator)
    }

    /**
     * 时间字符串转换为时间戳
     * @param timeStr yyyy/mm/dd 或 yyyy-mm-dd 或 yyyy-mm-dd hh:mm 或 yyyy-mm-dd hh:mm:ss
     * @return {number}
     */
    formatToTimeStamp(timeStr) {
        return new Date(timeStr.replace(/-/g, "/")).getTime()
    }

    /**
     * 比较时间
     * @param timeStr1 yyyy/mm/dd 或 yyyy-mm-dd 或 yyyy-mm-dd hh:mm 或 yyyy-mm-dd hh:mm:ss
     * @param timeStr2 yyyy/mm/dd 或 yyyy-mm-dd 或 yyyy-mm-dd hh:mm 或 yyyy-mm-dd hh:mm:ss
     * @return {boolean}
     */
    compareTime(timeStr1, timeStr2) {
        return new Date(timeStr1.replace(/-/g, "-")).getTime() < new Date(timeStr2.replace(/-/g, "-")).getTime()
    }

    /**
     * 获取今天开始之后的一周时间
     * @returns {string[]}  ["2020/8/2", "2020/8/3", "2020/8/4", "2020/8/5", "2020/8/6", "2020/8/7", "2020/8/8"]
     */
    getWeekTimeAfter() {
        return [...new Array(7)].map((item, index) => new Date(Date.now() + index * 8.64e7).toLocaleDateString())
    }

    /**
     * 获取今天开始之前的一周时间
     * @returns {string[]}  ["2020/8/2", "2020/8/1", "2020/7/31", "2020/7/30", "2020/7/29", "2020/7/28", "2020/7/27"]
     */
    getWeekTimeBefore() {
        return [...new Array(7)].map((item, index) => new Date(Date.now() - index * 8.64e7).toLocaleDateString())
    }

    /**
     *
     * @param format
     * @param timestamp
     * @returns {*}
     */
    superFormatDate(format = "Y-M-D h:m:s", timestamp = Date.now()) {
        let date = new Date(timestamp);
        let dateInfo = {
            Y: date.getFullYear(),
            M: (date.getMonth() + 1).toString(),
            D: date.getDate(),
            h: date.getHours(),
            m: date.getMinutes(),
            s: date.getSeconds()
        };
        return format
            .replace("Y", dateInfo.Y)
            .replace("M", this.add0(dateInfo.M))
            .replace("D", this.add0(dateInfo.D))
            .replace("h", this.add0(dateInfo.h))
            .replace("m", this.add0(dateInfo.m))
            .replace("s", this.add0(dateInfo.s))
    }
}

module.exports = new TimeUtil()