
import React from "react";
import "../App.css";

function Home() {
  return (
    <>
      <div className="section1">
        <div className="row">
          <h5 className="mt-5">
            Epic Games: An American Video Game And Software Developer
            <br />
            And Publisher Based In Cary, North Carolina
          </h5>
        </div>
        <div className="image"></div>

        <div className="row mt-4">
          <p>
            Create, play, and battle with friends for free in Fortnite. Be the
            last player standing in Battle Royale and Zero Build, experience a
            concert or live event, or discover over a million creator-made
            games, including racing, parkour, zombie survival, and more. Each
            Fortnite island has an individual age rating so you can find the one
            that's right for you and your friends. Find it all in Fortnite ...
            Drop In.
          </p>
        </div>

        <button className="btn">View Website</button>

        <div className="images-row">
          <div className="image-small-container">
            <img
              className="image-small"
              src="https://wallpapercave.com/wp/wp7177115.jpg"
              alt=""
            />
            <h6>
              Explore Large, Destructible <br /> Environments Where No Two Games{" "}
              <br /> Are Ever the Same
            </h6>
          </div>
          <div className="image-small-container">
            <img
              className="image-small"
              src="https://wallpaperaccess.com/full/2530453.jpg"
              alt=""
            />
            <h6>
              Team Up With Friends By Sprinting, <br /> Climbing And Smashing
              Your Way To <br /> Earn Your Victory Royale
            </h6>
          </div>
          <div className="image-small-container">
            <img
              className="image-small"
              src="https://tse4.mm.bing.net/th?id=OIP.3KOqHBKFwLl8mI1gZdWljgHaEK&pid=Api&P=0&h=180"
              alt=""
            />
            <h6>
              Discover Even More Ways To Play <br /> Across Thousands of
              Creator-Made <br /> Game Genres
            </h6>
          </div>
        </div>

        <div className="section2">
          <h3>Our Contribution</h3>
          <p>
            Our core offering extends beyond mere profit generation; we
            emphasize the growth and active involvement of our user community.
            Collaborating with us represents an investment, rather than a mere
            expenditure. Our dedication to providing distinctive digital
            interactions guarantees unparalleled benefits for our clientele.
          </p>
        </div>

        <div className="words-row">
          <div className="words-small-container">
            <h1>5 M</h1>
            <h6>
              Daily User <br /> Engagements
            </h6>
          </div>
          <div className="words-small-container">
            <h1>$500K</h1>
            <h6>
              Revenue Surge for an <br /> Platform
            </h6>
          </div>
          <div className="words-small-container">
            <h1>10X</h1>
            <h6>
              ROAS on all our <br /> marketing campaigns
            </h6>
          </div>
        </div>

        <h2>Interested In Delving Deeper Into The Project?</h2>

        <div className="section3">
          <p>
            If you'd like to explore further details about our initiatives or
            any of our affiliated brands, don't hesitate to connect. You can
            reach out to us via email at <b>hello@abc.com</b> or give us a call
            at <b>+91 480 20802730</b>.
          </p>

          <div className="end">
          <button className="btn btn-outline">Ring us on Skype</button>
          <button className="btn btn-white">Contact Us</button>
        </div>
        </div>

      

        <footer>
          <h5>&copy; 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</h5>
        </footer>

      </div>
    </>
  );
}

export default Home;
