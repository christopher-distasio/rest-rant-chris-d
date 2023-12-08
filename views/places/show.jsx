const React = require("react");
const Def = require("../default");

//Unlike the edit.jsx file, the show.jsx file here isn't using destructuring in order to show you how props are used.

//(Normally you would be consistent and use destructuring in both since it's a good practice to use destructuring
//when you can and developers on the job will know it and probably expect to see it.)

//What is props? Props is an object that is passed into a function. It contains all the data that is passed into the function.
//It's like a super object that contains all the data (with all the specific objects with their key-value pairs (such as
//place: name, place: pic, etc.) that are passed into a function (such as show in this case).

//You don't have to use the word props per se, you can use any word you want, but props is the convention word to use/call the
//super object that contains all the data that is passed into a function. For example, you could use the word data, or
//superObject, or even "fluffy", but you just shouldn't :)

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  let rating = <h3 className="inactive">Not yet rated</h3>;
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "⭐️";
    }
    rating = <h3>{stars}</h3>;
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars;
      }, 0);
      let averageRating = Math.round(sumRatings / data.place.comments.length);
      let stars = "";
      for (let i = 0; i < averageRating; i++) {
        stars += "⭐️";
      }
      rating = <h3>{stars}</h3>;
    }

    comments = data.place.comments.map((c) => {
      return (
        <div className="border col-sm-4">
          <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form
            method="POST"
            action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}
          >
            <input
              type="submit"
              className="btn btn-danger"
              value="Delete Comment"
            />
          </form>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img id="show-image" src={data.place.pic} alt={data.place.name} />
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            {rating}
            <br />
            <h2>Description</h2>
            <h2>{data.place.showEstablished()}</h2>

            <h3>Serving {data.place.cuisines}</h3>
          </div>
          <div className="row">
            <a
              className="col-sm-1 edit-button"
              href={`/places/${data.place.id}/edit`}
            >
              Edit
            </a>
            <form
              method="POST"
              action={`/places/${data.place.id}?_method=DELETE`}
              className="col-sm-1 delete-form"
            >
              <button type="submit" className="btn btn-danger delete-button">
                Delete
              </button>
            </form>
          </div>
          <br />
          <br />
          <hr />
          <h2>Comments</h2>
          {comments}
        </div>

        <h2>Got Your Own Rant or Rave?</h2>
        <form action={`/places/${data.place.id}/comment`} method="POST">
          <div className="row">
            <div className="form-group col-sm-12">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-4">
              <label htmlFor="author">Author</label>
              <input id="author" name="author" className="form-control" />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="stars">Star Rating</label>
              <input
                type="range"
                step="0.5"
                min="1"
                max="5"
                id="stars"
                name="stars"
                className="form-control"
              />
            </div>
            <div className="form-group col-sm-2">
              <label htmlFor="rant">Rant?</label>
              <input
                type="checkbox"
                id="rant"
                name="rant"
                className="form-control"
              />
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add Comment"
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = show;

{
  /* Stub for new comment form from GH CoPilot to be coded for adding a new comment form to the show page.
  Then remember to look over this form and send this prompt to read over and make sure you understand
  what's going on.
*/
}
{
  /* <form action={`/places/${props.place.id}/comment`} method="POST">
    <div className="form-group">
      <label htmlFor="author">Author</label>
      <input type="text" id="author" name="author" className="form-control" />
    </div>
    <div className="form-group">
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" className="form-control"></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="starRating">Star Rating</label>
      <input type="number" id="starRating" name="starRating" step="0.5" className="form-control" />
    </div>
    <div className="form-group form-check">
      <input type="checkbox" id="rant" name="rant" className="form-check-input" />
      <label className="form-check-label" htmlFor="rant">Rant</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
*/
}
