const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");

//TODO:  http://localhost/tracks GET,POST,PUT,DELETE


router.get("/", getItems);

// router.post("/:id", getItem);

router.post("/", createItem);

// router.put("/:id", updateItem);

// router.delete("/:id", deleteItem);





module.exports = router;