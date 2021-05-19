const express  = require('express');

const {getCafeterias, addCafeteria} = require('../controllers/cafeterias');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('FREEEE PALESTINEE !!!!'); 
// });

router.route('/').get(getCafeterias).post(addCafeteria);


module.exports = router ; 