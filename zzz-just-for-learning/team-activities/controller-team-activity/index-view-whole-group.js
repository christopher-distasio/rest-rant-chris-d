//INDEX (view all places)

router.get("/", (req, res) => {
    db.Place.find()
      .then((places) => {
//   MISSING LINE
      })
      .catch((err) => {
        console.log(err);
        res.render("error404");
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
  
  
  