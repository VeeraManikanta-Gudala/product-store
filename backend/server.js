import express from 'express';
import {connectDB} from './config/db.js'; // Assuming db.js is in the same directory
import Product from './models/product.model.js';
import { connect } from 'mongoose';

const app = express();

app.post('/api/products', async (req,res) => {
    const produt = req.body;
    if(!produt.name || !produt.price || !produt.description) {
        return res.status(400).json({message: 'Please fill all the fields'});
    };
    const newProduct = new Product(produt)
    try{
        await newProduct.save();
    }catch(error) {
        console.error("Error in creating the product" + error);
        res.status(500).json({message: 'Internal Server Error'});
    // connectDB();
    }
});


app.listen(3000, () => {
    connectDB();
    console.log('Connected to MongoDB');
  console.log('Server is running on port 3000');
});

// S1nOhte5SMC8V9if