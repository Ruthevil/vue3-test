/**
 * Created by 86185 in 2020/8/16 on 10:34
 */
import HttpCommonApiService from "./common/HttpCommonApi.service";

class SystemConfigHttpService {
    constructor() {
        this.httpCommonApiService = new HttpCommonApiService({
            baseURL: "/ly"
        })
    }

    /**
     * 获取系统配置参数
     * @returns {Promise<AxiosResponse<any>>}
     */
    getSysConfig() {
        return this.httpCommonApiService.get(`/config`)
    }
}

export default new SystemConfigHttpService()
