import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";

export default function Portfolio() {

  const [selected, setSelected] = useState("aduco")

  const list = [
    {
      id: "aduco",
      title: "Aduco",
    },
    {
      id: "archviz",
      title: "Arch Viz",
    },
    {
      id: "art",
      title: "Art",
    },
    {
      id: "hans",
      title: "Hans",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>(
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected} 
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
          <div className="item">
            <img 
              src="" 
              alt="" 
            />
            <h3>Eitthvað</h3>
          </div>
      </div>
      <div className="container">
          <div className="item">
            <img 
              src="" 
              alt="" 
            />
            <h3>Eitthvað</h3>
          </div>
      </div>
      <div className="container">
          <div className="item">
            <img 
              src="" 
              alt="" 
            />
            <h3>Eitthvað</h3>
          </div>
      </div>
      <div className="container">
          <div className="item">
            <img 
              src="" 
              alt="" 
            />
            <h3>Eitthvað</h3>
          </div>
      </div>
      
    </div>
  )
}
