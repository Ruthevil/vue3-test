/**
 * Created by baidm in 2020/9/8 on 21:32
 */
module.exports = {
    plugins: {
        "autoprefixer": {},
        "postcss-px-to-viewport": {
            unitToConvert: "px",                            // 要转换的单位
            viewportWidth: 1920,                            // viewport的宽度
            viewportHeight: 1080,                           // viewport的高度
            unitPrecision: 3,                               // 指定px转换为视图单位的最小位数
            selectorBlackList: [".ignore", ".hairlines"],   // 指定不转换成视图单位的类
            minPixelValue: 1,                               // 最小阈值，小于等于该值时不转换
            mediaQuery: false,                              // 是否在媒体查询时也转换成目标视图单位
        }
    }
};