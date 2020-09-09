/**
 * Created by 86185 in 2020/8/16 on 17:07
 */
import SystemConfigHttpService from "./service/SystemConfigHttp.service"

export default function (cb) {

    SystemConfigHttpService.getSysConfig().then(({data}) => {
        window.$config = JSON.parse(data);
        cb();
    }).catch(error => {
        console.log(error);
    })
}
