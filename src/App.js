import React from "react";
import "./styles.css";
import MyJumbotron from "./components/jumbotron";
import MyNav from "./components/navbar";

export default function App() {
  return (
    <div className="App">
      <MyNav />
      <MyJumbotron
        cardTitle="Travels"
        textInCard="Morocco"
        myImage="./images-jumbotron/P1030326.JPG"
        author="JP Brown"
      />

      <MyJumbotron
        cardTitle="Books"
        textInCard="The Ruthless Elimination of Hurry"
        myImage="./images-jumbotron/r-e-o-h.jpg"
        author="John Mark Colmer"
      />

      <MyJumbotron
        cardTitle="Songs"
        textInCard="Mama saturn"
        myImage="./images-jumbotron/mama-saturn"
        author="Tanerélle"
      />
    </div>
  );
}
