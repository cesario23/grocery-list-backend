const Grocery = require("../model/Groceries")

async function getGroceries(req, res){
    try{
    let allGroceries = await Grocery.find({});
    res.json({ payload: allGroceries})
    }catch(e){
        res.status(500).json({message: e.message, error: e})
    }
}

async function createGrocery(req, res) {
    try{
    let createdGrocery = new Grocery({
        grocery: req.body.grocery,
    })
    let savedGrocery = await createdGrocery.save();
    res.json({ payload: savedGrocery});
    }catch(e){
        res.status(500).json({message: e.message, error: e})
    }
}

async function updateGrocery(req, res){
    try{
        let updatedGrocery = await Grocery.findByIdAndUpdate(
           {_id: req.params.id},
           req.body,
           {
               new: true,
           } 
        );
        res.json({payload: updatedGrocery});

    }catch(e){
        res.status(500).json({
            message: e.message,
            error: e
        })
    }
}

async function deleteGrocery(req, res){
    try{
    let deletedGrocery = await Grocery.findByIdAndRemove(req.params.id);
    res.json({ payload: deletedGrocery});
    }catch(e){
        res.status(500).json({message: e.message, error: e})
    }
}

async function sortGroceryByDate(req, res){
    try{
   let sort = req.query.sort;
   let sortOrder = sort === "desc" ? -1 : 1;
   let foundGrocery = await Grocery.find({}).sort({dateAdded: sortOrder});
   
   res.json({ payload: foundGrocery});
    }catch(e){
        res.status(500).json({message: e.message, error: e})
    }
}

async function sortGroceryByPurchased(req, res){
    try{
   let isPurchased = req.body.purchased;
   let isPurchasedOrder = isPurchased === "true" ? true : false;
   let sortByDate = req.query.sort ? req.query.sort : null;
   let finalSort;
   if(!sortByDate){
       finalSort = null
   }else{
       finalSort = sortByDate === "asc" ? 1 : -1;
   }
   let foundGrocery = await Grocery.find({ isPurchased: isPurchasedOrder}).sort({
       dateAdded: finalSort,
   })
   res.json({payload: foundGrocery});
    }catch(e){
        res.status(500).json({message: e.message, error: e})
    }
}


module.exports ={
    getGroceries,
    createGrocery,
    updateGrocery,
    deleteGrocery,
    sortGroceryByDate,
    sortGroceryByPurchased,
}