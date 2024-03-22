const router = require ('express').Router()
const places = require ('../models/places.js')

// GET /places
router.get('/', (req, res) => {
  
res.render('places/index', {places})

    })
    
module.exports = router
