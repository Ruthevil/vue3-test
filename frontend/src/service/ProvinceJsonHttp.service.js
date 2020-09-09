import HttpCommonApiService from "./common/HttpCommonApi.service";

class ProvinceJsonHttpService {
    constructor() {
        this.httpCommonApiService = new HttpCommonApiService({
            baseURL: "/ly/province"
        })
    }

    querySingleProvinceJson(params) {
        let {adcode} = params;
        return this.httpCommonApiService.get(`/single?adcode=${adcode}`)
    }
}

export default new ProvinceJsonHttpService()
