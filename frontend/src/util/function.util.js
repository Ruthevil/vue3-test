/**
 * Created by 86185 in 2020/7/11 on 18:58
 */
class FunctionUtil {
    constructor() {
    }

    /**
     * 节流
     * @param func
     * @param delay
     * @return {function(...[*]=)}
     */
    throttle(func, delay) {
        let timer = null;
        return function () {
            if (!timer) {
                timer = setTimeout(() => {
                    func.apply(this, arguments);
                    // 或者直接 func()
                    timer = null
                }, delay)
            }
        }
    }

    /**
     * 防抖
     * @param fn
     * @param wait
     * @return {function(...[*]=)}
     */
    debounce(fn, wait) {
        let timeout = null;
        return function () {
            if (timeout) clearTimeout(timeout); // 如果多次触发将上次记录延迟清除掉
            timeout = setTimeout(() => {
                fn.apply(this, arguments);
                // 或者直接 fn()
                timeout = null
            }, wait)
        }
    }
}

export default new FunctionUtil()
