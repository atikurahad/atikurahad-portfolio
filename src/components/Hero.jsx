import React from "react";
import "../styles/hero.css";

function Hero() {
  return (
    <>
      <section className="hero-main">
        <article className="hero-details">
          <p className="hero-name">
            {" "}
            I'm Web Developer <br />
            Atikur Rahaman Ahad
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus luctusnec ullamcorper mattis, pulvinar dapibus leop
            llamcorper, lorem ipsum.
          </p>
          <button className="btn" onClick={()=>alert("coming")}>Learn More</button>
        </article>

        <img
          className="dev-img"
          src="https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/64d6bd51ab17a00828b644bf_header.webp"
          alt="developer-image"
        />
      </section>
    </>
  );
}

export default Hero;
