const https = require("https");
const fs = require("fs");

const request = https.get(
  "https://www.youtube.com/watch?v=CpvpZKO0Lmk",
  res => {
    let download = fs.createWriteStream("./Tom&Jerry.html");
    res.pipe(download);

    res.on("end", () => {
      console.log("Response Finished: Jerry outsmarted Tom! Poor Tom!");
    });
  }
);



request.end();
//run node request.js
