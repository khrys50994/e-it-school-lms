const express = require('express');
const Resource = require('../models/Resource');
const router = express.Router();

router.post('/add', async (req, res) => {
    const { title, content } = req.body;
    const newResource = new Resource({ title, content });
    await newResource.save();
    res.status(201).send('Resource added');
});

router.get('/all', async (req, res) => {
    const resources = await Resource.find();
    res.json(resources);
});

module.exports = router;
