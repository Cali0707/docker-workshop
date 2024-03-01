const fs = require("fs");
const path = require("path");

var sum = 0;
for (i = 0; i < 10000; i++) {
    sum += i
}

baseDir = process.env.BASE_DIR ?? "."    

fs.mkdirSync(baseDir, { recursive: true})

filePath = path.resolve(baseDir + "/result.txt")

fs.writeFileSync(filePath, Buffer.from(sum.toString() + "\n"))

setInterval(() => {}, 5 * 60 * 1000)
