
// CREATE (post new place to db)
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      // MISSING LINE HERE
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// NEW (view form to create new place)
// MISSING LINE HERE



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
// 5  Trace the flow of views from what this route renders back to home page at
// http://localhost:3000/
 
  
// You don’t have to explain everything in technical terms, but you do need to be able to explain what's going on in the code
// in general and the answers to the questions above specifically.
  