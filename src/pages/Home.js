import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Home() {
  const [imageURL, setImageURL] = useState("./images/home1.png");

  useEffect(() => {
    getImageURL();
    window.addEventListener("resize", getImageURL);
    return () => {
      window.removeEventListener("resize", getImageURL);
    };
  }, []);

  const getImageURL = () => {
    const image =
      document.body.getBoundingClientRect().width >= 768
        ? "./images/home1.png"
        : "./images/home.png";
    setImageURL(image);
  };

  return (
    <section className="home">
      <header className="home__header">
        <h1 className="home__title">HeyGirl</h1>
        <p className="home__text">shop online</p>
        <Link to="/products/all" className="home__link">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </Link>
      </header>
      <img className="home__image" src={imageURL} alt="home" />
    </section>
  );
}

export default Home;
