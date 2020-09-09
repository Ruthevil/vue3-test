/**
 * Created by 86185 in 2020/7/11 on 10:41
 */
class ArrayUtil {
    constructor() {
    }

    /**
     * 数组并集，返回新数组
     * @param arrOne
     * @param arrTwo
     * @return {*[]}
     */
    union(arrOne = [], arrTwo = []) {
        return arrOne.concat(arrTwo.filter(value => !arrOne.includes(value)))
    }

    /**
     * 数组并集，返回新Set
     * @param arrOne
     * @param arrTwo
     * @return {Set<*>}
     */
    unionSet(arrOne = [], arrTwo = []) {
        let setOne = new Set(arrOne);
        let setTwo = new Set(arrTwo);
        return new Set([...setOne, ...setTwo])
    }

    /**
     * 数组交集，返回新数组
     * @param arrOne
     * @param arrTwo
     * @return {*[]}
     */
    intersection(arrOne = [], arrTwo = []) {
        return arrOne.filter(value => arrTwo.includes(value))
    }

    /**
     * 数组交集，返回新Set
     * @param arrOne
     * @param arrTwo
     * @return {Set<*>}
     */
    intersectionSet(arrOne = [], arrTwo = []) {
        let setOne = new Set(arrOne);
        let setTwo = new Set(arrTwo);
        return new Set([...setOne].filter(value => setTwo.has(value)))
    }

    /**
     * 数组差集，返回新数组
     * @param arrOne
     * @param arrTwo
     * @return {*[]}
     */
    // difference([1,2,3],[2,4,5]) => [1,3,4,5]
    difference(arrOne = [], arrTwo = []) {
        return arrOne.concat(arrTwo).filter(value => !arrOne.includes(value) || !arrTwo.includes(value))
    }

    /**
     * 数组差集，返回新Set
     * @param arrOne
     * @param arrTwo
     * @return {Set<*>}
     */
    // differenceSet([1,2,3],[2,4,5]) => (1,3,4,5)
    differenceSet(arrOne = [], arrTwo = []) {
        let setOne = new Set(arrOne);
        let setTwo = new Set(arrTwo);
        return new Set([...setOne, ...setTwo].filter(value => !setOne.has(value) || !setTwo.has(value)))
    }

    /**
     * 两个数组合并成一个数组对象，返回新的数组对象
     * @param arrOne
     * @param arrTwo
     * @return {{}[]}
     */
    // arrToObj(["a","b"],["c"]) => [{a: "c"},{b: undefined}]
    // arrToObj(["c"],["a","b"]) => [{a: "c"},{b: undefined}]
    arrToObj(arrOne = [], arrTwo = []) {
        let lenOne = arrOne.length;
        let lenTwo = arrTwo.length;
        if (lenOne > lenTwo) {
            return arrOne.map((key, index) => ({[key]: arrTwo[index]}))
        } else {
            return arrTwo.map((key, index) => ({[key]: arrOne[index]}))
        }
    }

    /**
     * 数组合并，返回新数组
     * @param arrOne
     * @param arrTwo
     * @return {*[]}
     */
    arrConcat(arrOne = [], arrTwo = []) {
        return [...arrOne, ...arrTwo]
    }

    /**
     * 数组求和，返回新数组
     * @param arr
     * @return {*}
     */
    arrSum(arr = []) {
        return arr.reduce((prev, cur) => prev + cur, 0)
    }

    /**
     * 数组最大值
     * @param arr
     * @return {number}
     */
    arrMax(arr = []) {
        return Math.max(...arr)
    }

    /**
     * 数组最小值
     * @param arr
     * @return {number}
     */
    arrMin(arr = []) {
        return Math.min(...arr)
    }

    /**
     * 数组去重
     * @param arr
     * @return {*}
     */
    arrRemoveRepeat(arr = []) {
        return arr.from(new Set(arr))
    }

    /**
     * 数组排序
     * @param arr
     * @param asc
     * @return {this}
     */
    arrSort(arr = [], asc = true) {
        return arr.sort((a, b) => (asc ? a - b : b - a))
    }

    /**
     * 数组是否包含某个值
     * @param arr
     * @param value
     * @return {boolean}
     */
    arrIsInclude(arr = [], value) {
        return arr.includes(value)
    }

    /**
     * 是否是数组
     * @param arr
     * @return {arg is any[]}
     */
    arrJudge(arr = []) {
        return Array.isArray(arr)
    }
}

export default new ArrayUtil()
