const axios = require('axios');

module.exports.getAddressCoordinates = async (address) => {
    
    // --- API key and 'axios' call commented out for testing ---

    // const apiKey = process.env.GOOGLE_MAPS_API;
    // const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

    // try {
    //     const response = await axios.get(url);

    //     if (response.data.status === 'OK') {
    //         const location = response.data.results[0].geometry.location;
    //         return {
    //             ltd: location.lat, // Note: This might be a typo for 'lat'
    //             lng: location.lng
    //         };
    //     } else {
    //         throw new Error('Unable to fetch coordinates');
    //     }
    // } catch (error) {
    //     console.error(error);
    //     throw error;
    // }

    // --- New code to return random coordinates ---
    
    console.log(`Mocking random coordinates for address: ${address}`);
    
    // Latitude is between -90 and +90
    const randomLat = Math.random() * 180 - 90;
    
    // Longitude is between -180 and +180
    const randomLng = Math.random() * 360 - 180;
    
    // Returning with 'ltd' to match the key in your original code
    return {
        ltd: randomLat, 
        lng: randomLng
    };
};



module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    /*
    // --- Google Maps API logic commented out ---

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        
        if (response.data.status === 'OK') {
            
            if (response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                throw new Error('No routes found');
            }

            return response.data.rows[0].elements[0];
        
        } else {
            throw new Error('Unable to fetch distance and time');
        }

    } catch (error) {
        console.error(error); 
        throw error;
    }
    */

    // --- New code to return random distance and time ---
    
    console.log(`Mocking random distance/time for: ${origin} to ${destination}`);

    // Generate random distance (e.g., 1km to 30km)
    const randomDistanceInMeters = Math.floor(Math.random() * 30000) + 1000;
    
    // Generate random time (e.g., 5 mins to 60 mins)
    const randomTimeInSeconds = Math.floor(Math.random() * 3300) + 300;

    // Return a mock object matching the Google Maps structure
    return {
        distance: {
            text: `${(randomDistanceInMeters / 1000).toFixed(1)} km`,
            value: randomDistanceInMeters
        },
        duration: {
            text: `${Math.ceil(randomTimeInSeconds / 60)} mins`,
            value: randomTimeInSeconds
        },
        status: 'OK'
    };
};




module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('Query is required');
    }

    /*
    // --- Google Maps API logic commented out ---
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            // Original code would return this:
            // return response.data.predictions; 
            
            // New code returns just the description strings:
            return response.data.predictions.map(p => p.description);
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (err) { 
        console.error(err);
        throw err;
    }
    */

    // --- New code to return random/mock suggestions ---

    console.log(`Mocking autocomplete suggestions for input: ${input}`);

    const mockPredictions = [
        {
            description: "123 Main Street, Bhopal, Madhya Pradesh",
            place_id: "mock_place_id_1"
        },
        {
            description: "Bhopal Railway Station, Bhopal, Madhya Pradesh",
            place_id: "mock_place_id_2"
        },
        {
            description: "New Market, Bhopal, Madhya Pradesh",
            place_id: "mock_place_id_3"
        },
        {
            description: "Van Vihar National Park, Bhopal, Madhya Pradesh",
            place_id: "mock_place_id_4"
        }
    ];

    const filteredResults = mockPredictions.filter(p => 
        p.description.toLowerCase().includes(input.toLowerCase())
    );
    
    // Decide which array of objects to use
    const resultsToFormat = filteredResults.length > 0 ? filteredResults : mockPredictions;

    // --- THIS IS THE FIX ---
    // Convert the array of objects into an array of strings
    const descriptions = resultsToFormat.map(prediction => prediction.description);

    return descriptions;
};