/**
 * Created by baidm in 2020/9/5 on 9:35
 */
const fs = require("fs");
const path = require("path");

class ReadFileUtil {
    constructor(fileName) {
        this.prePath = `${path.resolve("./data/provinceJson")}`;
        this.filePath = path.resolve(`${this.prePath}/${fileName}`);
    }

    readFile() {
        let fileStr = fs.readFileSync(this.filePath, "utf-8");
        return JSON.parse(fileStr)
    }
}

export default ReadFileUtil