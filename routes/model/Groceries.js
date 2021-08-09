const mongoose = require ("mongoose");

const grocerySchema = new mongoose.Schema ({
 grocery: {
     type: String
 },
 purchased: {
     type: Boolean,
 },

})

module.exports = mongoose.model('grocery', grocerySchema)






