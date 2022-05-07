import "./portfolio.scss"
import { useState } from "react";

export default function Portfolio() {

  const [selected, setSelected] = useState("aduco")

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
        Aduco er tölvuleikur gerður í UE4 sem lokaverkafni í RADE 2022. {"\n"}
        Leikurinn gerist í illa förnum heimi þar sem vélmenni ráða ríkjum. {"\n"}
        Spilari þarf að ferðast yfir auðna jörð til að finna bróður sinn. {"\n"}

        </text>
        <h2>
          <a href="https://p0llur.itch.io/aduco"> Download now! </a>
        </h2>
      </div>
      </div>
      
      
    </div>
    
  )
}
