const { Schema, model } = require('../connection');


const mySchema = new Schema({
    productname: String,
    price: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: String, required: true },
});
module.exports = model('product', mySchema);

