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


function show(props) {
  return (
    <Def>
      <main>
        <br/><br/>
        <div className="row">
          <div className="col-sm-6">
            <img id="show-image" src={props.place.pic} alt={props.place.name} />
          </div>
          <div className="col-sm-6">
            <h1>{props.place.name}</h1>
            <h2>Rated</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <p>
              Located {props.place.city}, {props.place.state}, and serving{" "}
              {props.place.cuisines}
            </p>
          </div>
        </div>
        <br/><br/><br/>
        <div className="row">
          <h2>Comments</h2>
          <p>no comments yet!</p>
        </div>
        <br/><br/>
        <div className="row">
          <a className="col-sm-1 edit-button"
            href={`/places/${props.place.id}/edit`}
          >
            Edit
          </a>
          <form
            method="POST"
            action={`/places/${props.place.id}?_method=DELETE`}
            className="col-sm-1 delete-form"
          >
            <button type="submit" className="btn btn-danger delete-button">
              Delete
            </button>
          </form>
        </div>
        <br/>
      </main>
    </Def>
  );
}

module.exports = show;
