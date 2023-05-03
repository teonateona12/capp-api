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

export function updateData(req, res) {
  const data = JSON.parse(fs.readFileSync("data.json"));
  const id = req.params.id;

  const updateData = req.body;
  const index = data.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).send("Data not found");
  }

  data[index] = { ...data[index], ...updateData };

  fs.writeFileSync("data.json", JSON.stringify(data));

  res.send(data[index]);
}
export function deleteData(req, res) {
  const data = JSON.parse(fs.readFileSync("data.json"));
  const id = req.params.id;
  const index = data.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).send("Data not found");
  }
  const deletedItem = data.splice(index, 1)[0];
  fs.writeFileSync("data.json", JSON.stringify(data));
  res.send(deletedItem);
}
