import fs from "fs";

export function getData({ req, res }) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Error reading file");
      return;
    }
    res.setHeader("Content-Type", "application/json");
    res.end(data);
  });
}
