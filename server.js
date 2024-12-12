const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/mysite', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Schéma de la base de données pour les éléments du site
const itemSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
});

const Item = mongoose.model('Item', itemSchema);

// Endpoint pour récupérer les éléments
app.get('/api/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// Endpoint pour ajouter un nouvel élément (pour l'admin)
app.post('/api/items', async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
});

// Endpoint pour mettre à jour un élément (pour l'admin)
app.put('/api/items/:id', async (req, res) => {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
});

// Endpoint pour supprimer un élément (pour l'admin)
app.delete('/api/items/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
