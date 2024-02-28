export function logResult(stream, operation, x, y, result) {
  stream.write(JSON.stringify({ operation, x, y, result }) + "\n");
}

export function parseRequest(req, res, callback) {
  if (req.body === undefined) {
    return res.status(500).send({ message: "something went wrong" });
  }

  var { x, y } = req.body;
  if (x === undefined || y == undefined) {
    return res.status(400).send({ message: "bad request" });
  }

  x = parseFloat(x);
  if (x == NaN) {
    return res.status(400).send({ message: "invalid variable", variable: "x" });
  }

  y = parseFloat(y);
  if (y === NaN) {
    return res.status(400).send({ message: "invalid variable", variable: "y" });
  }

  callback(x, y);
}
