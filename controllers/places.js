const router = require("express").Router();
const db = require("../models");

//INDEX
router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})


//NEW
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })
    
router.get("/new", (req, res) => {
  res.render("places/new");
});


//SHOW
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

//NOTE: CANVAS ACTIVITY INSTRUCTIONS FOR REST-RANT PART 8 DON'T INCLUDE HOW TO CODE THE //EDIT AND //DELETE ROUTES;

//STUDENTS CAN USE THE INSTRUCTIONS FOR THE BREADCRUD HELPER METHODS PART 1 ACTIVITY JUST BEFORE IT AS A GUIDE


//EDIT
router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});


//DELETE
router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});


//RANTS
router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;