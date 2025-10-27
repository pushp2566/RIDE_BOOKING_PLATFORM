const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');


module.exports.getAddressCoordinates = async (req, res) => {
    const address = req.query.address;

    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const coordinates = await mapService.getAddressCoordinates(address);
        res.json(coordinates);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.getDistanceTime = async (req, res) => {
    const origin = req.query.origin;
    const destination = req.query.destination;  
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const distanceTime = await mapService.getDistanceTime(origin, destination);
        res.json(distanceTime);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.getAutoCompleteSuggestions = async (req, res) => {
    const input = req.query.input;

    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const suggestions = await mapService.getAutoCompleteSuggestions(input);
        res.json(suggestions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
