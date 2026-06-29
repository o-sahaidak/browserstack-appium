const fs = require("fs");
const path = require("path");
const https = require("https");

const username = "oleksandr_uISVN2";
const accessKey = "qzEccQsnSiA1EvCjqnqa";
const filePath = "WikipediaSample.apk";

const fileContent = fs.readFileSync(filePath);
const boundary = "----FormBoundary" + Math.random().toString(36).slice(2);

const header = Buffer.from(
    `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="WikipediaSample.apk"\r\nContent-Type: application/vnd.android.package-archive\r\n\r\n`,
);
const footer = Buffer.from(`\r\n--${boundary}--\r\n`);
const body = Buffer.concat([header, fileContent, footer]);

const options = {
  hostname: "api-cloud.browserstack.com",
  path: "/app-automate/upload",
  method: "POST",
  headers: {
    Authorization:
      "Basic " + Buffer.from(`${username}:${accessKey}`).toString("base64"),
    "Content-Type": `multipart/form-data; boundary=${boundary}`,
    "Content-Length": body.length,
  },
};

const req = https.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => console.log("Response:", data));
});

req.on("error", (e) => console.error("Error:", e));
req.write(body);
req.end();
