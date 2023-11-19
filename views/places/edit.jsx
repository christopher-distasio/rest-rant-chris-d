const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Place Name</label>
              <input
                className="form-control col-sm-6"
                id="name"
                name="name"
                value={data.place.name}
                required
              />
              <div className="form-group col-sm-6">
                <label htmlFor="pic">Place Picture</label>
                <input
                  className="form-control col-sm-6"
                  id="pic"
                  name="pic"
                  value={data.place.pic}
                />
              </div>
              <div className="form-group col-sm-6" >
                <label htmlFor="city">City</label>
                <input
                  className="form-control col-sm-6"
                  id="city"
                  name="city"
                  value={city}
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="state">State</label>
                <input
                  className="form-control col-sm-6"
                  id="state"
                  name="state"
                  value={state}
                />
              </div>
              <div className="form-group col-sm-6" >
                <label htmlFor="cuisines">Cuisines</label>
                <input
                  className="form-control col-sm-6"
                  id="cuisines"
                  name="cuisines"
                  value={cuisines}
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
