
// SHOW (view one place)
router.get("/:id", (req, res) => {
  // MISSING LINE HERE
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// UPDATE (update place in db)
router.put("/:id", (req, res) => {
  console.log(req.params.id);
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => {
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err) => {
      // MISSING LINE HERE
    });
});



  // Directions:
  
  //Discuss and write your answer each question after the // below it.
  
// 1  What should go on the missing line?
// 
// 2  How does the missing line affect the flow of data in the route?
//
// 3  What is the purpose of this route in the app?
//
// 4  Why would a user want this functionality?
//
// 5  Which views are involved in this route? Describe what each of these views shows the user and its purpose. 
  
 
  
// You don’t have to explain everything in technical terms, but you do need to be able to explain what's going on in the code
// in general and the answers to the questions above specifically.
  