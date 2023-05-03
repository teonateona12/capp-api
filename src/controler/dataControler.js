import fs from "fs";

export function getData(req, res) {
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

export function addData(req, res) {
  const newData = req.body;
  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
    } else {
      const jsonData = JSON.parse(data);
      jsonData.push(newData);
      fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
        if (err) {
          res.status(500).send("Error writing file");
        } else {
          res.status(200).send("Data added to file");
        }
      });
    }
  });
}
