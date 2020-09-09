/**
 * Created by 86185 in 2020/8/2 on 10:28
 */
class ObjectUtil {
    constructor() {
    }

    /**
     * 剔除对象中指定的属性
     * @param object
     * @param props
     * @returns {{}}
     */
    // let data={
    //     id:1,
    //     title:"xxx",
    //     comment:[]
    // }
    // omit(data,["id"])
    // =>{title: "xxx", comment: Array(0)}
    omit(object, props = []) {
        let res = {};
        Object.keys(object).forEach(key => {
            if (!props.includes(key)) {
                res[key] = typeof object[key] === "object" && object[key] !== null ?
                    JSON.parse(JSON.stringify(object[key])) :
                    object[key]
            }
        })
        return res
    }
}

export default new ObjectUtil()