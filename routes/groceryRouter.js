const express = require("express");
const router = express.Router();

const {
    getGroceries,
    createGrocery,
    updateGrocery,
    deleteGrocery,
    sortGroceryByDate,
    sortGroceryByPurchased
} = require("./controller/groceriesController")

router.get("/", function (req, res, next){
    res.json(true);
});

router.get("/get-all-groceries", getGroceries);
router.post("/create-new-grocery", createGrocery );
router.put("/update-grocery-by-id/:id", updateGrocery);
router.delete("/delete-grocery-by-id/:id", deleteGrocery);
router.get("/get-grocery-by-sort", sortGroceryByDate);
router.get("/get-grocery-by-purchased", sortGroceryByPurchased);

module.exports = router;