/**
 * Created by 86185 in 2020/8/16 on 10:34
 */
import axios from "axios"

class HttpCommonApiService {
    constructor(config = {baseURL: ""}) {
        this.instance = axios.create(Object.assign({
            baseURL: "",
            headers: {},

            transformRequest: [function (data, headers) {
                headers["Content-Type"] = "application/json";
                return data;
            }],

            transformResponse: [function (data) {
                return data;
            }]
        }, config))

    }

    get(url) {
        return this.instance.get(url);
    }

    post(url, params) {
        return this.instance.post(url, JSON.stringify(params));
    }
}

export default HttpCommonApiService;
