const React = require("react");
const Def = require("../default");

//NOTE: the curly braces between place in the function parameter shows a js trick called destructuring.
//It's a way to pull out the value of a key from an object. In this case, we are pulling out the value of the key place
//from the object that is passed into the function. This is the same as writing function edit_form(props)
//and then using props.place in the return statement (props.place.id, props.place.name, props.place.pic, etc.).

//The show.jsx view file in this repo branch is very similar to the edit.jsx view file, but the show.jsx file isn't using
//destructuring in order to show you how props are used. Normally you would be consistent and use destructuring in both since
//it's a good practice to use destructuring when you can and developers on the job will know it and probably expect to see it.

//What is props? Props is an object that is passed into a function. It contains all the data that is passed into the function.
//It's like a super object that contains all the data (with all the specific objects with their key-value pairs (such as
//place: name, place: pic, etc.) that are passed into a function (such as edit_form in this case).

function edit_form({ place }) {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form method="POST" action={`/places/${place.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-6"></div>
            <label htmlFor="name">Place Name</label>
            <input
              className="form-control"
              id="name"
              name="name"
              value={place.name}
              required
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="pic">Place Picture</label>
            <input
              className="form-control"
              id="pic"
              name="pic"
              value={place.pic}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              className="form-control"
              id="city"
              name="city"
              value={place.city}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              className="form-control"
              id="state"
              name="state"
              value={place.state}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input
              className="form-control"
              id="cuisines"
              name="cuisines"
              value={place.cuisines}
              required
            />
          </div>
          <div className="form-group">
            <label for="founded">Founded Year</label>
            <input
              className="form-control"
              id="founded"
              name="founded"
              value={place.founded}
            />
          </div>

          <input
            className="btn btn-primary"
            type="submit"
            value="Update Place"
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
