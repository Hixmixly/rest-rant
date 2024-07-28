const express = require('express');
const router = express.Router();
const db = require('../models');  

// GET /places
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', { places });
    })
    .catch(err => {
      console.log(err);
      res.render('error404');
    });
});

// POST /places
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places');
    })
    .catch(err => {
      console.log('err', err);
      res.render('error404');
    });
});

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new');
});

// GET /places/:id
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


// PUT /places/:id
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(place => {
      if (place) {
        res.redirect(`/places/${req.params.id}`);
      } else {
        res.render('error404');
      }
    })
    .catch(err => {
      console.log(err);
      res.render('error404');
    });
});

// DELETE /places/:id
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
      if (place) {
        res.redirect('/places');
      } else {
        res.render('error404');
      }
    })
    .catch(err => {
      console.log(err);
      res.render('error404');
    });
});

// GET /places/:id/edit
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      if (place) {
        res.render('places/edit', { place });
      } else {
        res.render('error404');
      }
    })
    .catch(err => {
      console.log(err);
      res.render('error404');
    });
});

// POST /places/:id/rant
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub');
});

// DELETE /places/:id/rant/:rantId
router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub');
});

module.exports = router;

