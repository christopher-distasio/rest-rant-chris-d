const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant!</h1>
        <div>
          <img id="home-image" src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
          <div>
            Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on{" "}
            <a href="UNSPLASH_LINK">Unsplash</a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
