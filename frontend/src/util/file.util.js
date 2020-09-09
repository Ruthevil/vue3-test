/**
 * Created by 86185 in 2020/7/11 on 10:42
 */
class FileUtil {
    constructor() {
    }

    /**
     * 格式化文件单位
     * @param value
     * @return {string} 文件大小(kb)
     */
    formatFileSize(value = "") {
        let i, unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
        for (i = 0; i < unit.length && value >= 1024; i++) {
            value /= 1024
        }
        return (Math.round(value * 100) / 100 || 0) + unit[i]
    }

    /**
     * base64数据导出文件下载
     * @param filename
     * @param data
     */
    downloadFile(filename, data) {
        let downloadLink = document.createElement("a");
        if (downloadLink) {
            document.body.appendChild(downloadLink);
            downloadLink.style = "display:none";
            downloadLink.download = filename;
            downloadLink.href = data;
            if (document.createEvent) {
                let downloadEvent = document.createEvent("MouseEvents");
                downloadEvent.initEvent("click", true, false);
                downloadLink.dispatchEvent(downloadEvent);
            } else if (document.createEventObject) {
                downloadLink.fireEvent("onclick");
            } else if (typeof downloadLink.onclick === "function") {
                downloadLink.onclick();
            }
            document.body.removeChild(downloadLink);
        }
    }

}

export default new FileUtil()
