const express=require('express');
const router=express.Router();
const mapsController=require('../controllers/map.controller');
const authMiddleware=require('../middleware/auth.middleware');
 const {query}=require('express-validator');

router.get('/get-coordinates',authMiddleware.authUser, query('address').notEmpty().withMessage('Address is required'),        mapsController.getAddressCoordinates);
router.get('/get-distance-time',authMiddleware.authUser, query('origin').notEmpty().withMessage('Origin is required'), query('destination').notEmpty().withMessage('Destination is required'), mapsController.getDistanceTime);
router.get('/get-suggestions', authMiddleware.authUser, query('input').notEmpty().withMessage('Input is required'), mapsController.getAutoCompleteSuggestions);


module.exports=router;
