import "./portfolio.scss"
// import { useState } from "react";

export default function Portfolio() {

  // const [selected, setSelected] = useState("aduco")

  return (
    <div className="portfolio" id="portfolio">
      <h1>Aduco</h1>
      
      <div className="wholeContainer">
      <div className="imageContainers">
        <div className="container">
          <div className="item">
            <img 
              src="assets/menace_01.png" 
              alt="" 
            />
          </div>
        </div>
        <div className="container">
          <div className="item">
            <img 
              src="assets/light_01.png" 
              alt="" 
            />
          </div>
        </div>
        <div className="container">
          <div className="item">
            <img 
              src="assets/butterfly_01.png" 
              alt="" 
            />
          </div>
        </div>
        <div className="container">
          <div className="item">
            <img 
              src="assets/subway_01.png" 
              alt="" 
            />
          </div>
        </div>

        

      </div>
      <div className="textRight">
        <text className="infoText"> 
        Aduco is a video game made in UE4 as a graduation project from RADE 2022.{"\n"}
        The player must traverse a wasteland in search for his brother, {"\n"}
        but be aware there are dangers ahead! {"\n"}

        </text>
        <h2>
          <a href="https://p0llur.itch.io/aduco" target="_blank" rel="noopener noreferrer"> Download now! </a>
        </h2>
      </div>
      </div>
      
      
    </div>
    
  )
}
