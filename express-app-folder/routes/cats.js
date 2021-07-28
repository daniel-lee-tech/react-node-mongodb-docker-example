var express = require("express");
var router = express.Router();

var Cat = require("../mongoose/models/Cat");

router.get("/", async function (req, res, next) {
  const allCats = await Cat.find({});
  res.send(allCats);
});

router.get("/adopted", async function (req, res, next) {
  const adoptedCats = await Cat.getAdoptedKitties();
  res.send(adoptedCats);
});

router.post("/", function (req, res, send) {
  let newCat = new Cat(req.body);
  newCat.save().then(() => {
    res.sendStatus(200);
  });
});

router.put("/:id", async function (req, res, send) {
  const id = req.params.id;
  Cat.replaceOne({ _id: id }, req.body).then(() => res.sendStatus(200));
});

router.delete("/:id", async function (req, res, send) {
  const id = req.params.id;
  Cat.deleteOne({ _id: id }).then(() => res.sendStatus(200));
});

module.exports = router;
