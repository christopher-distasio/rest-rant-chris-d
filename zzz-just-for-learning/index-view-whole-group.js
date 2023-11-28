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
  
  
  
// 1  What should go on the missing line?
// 2  How does the missing line affect the flow of data in the route?
// 3  What is the purpose of this route in the app?
// 4  Why would a user want this functionality?
// 5  Which views are involved in this route? Describe what each of these views shows the user and its purpose. 
  
 
  
//   You don’t have to explain everything in technical terms, but you do need to show you understand what’s going on in each route
  
  
  