import "./intro.scss"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Forritun", "Technical Art", "Þrívídd"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/05.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hæ! Ég heiti</h2>
          <h1>Páll</h1>
          <h3>Ég sérhæfi mig í  <span ref={textRef}></span></h3>
        </div>

        
        <a href="#portfolio">
          <ArrowDownwardIcon className="icon"/>
        </a>
      </div>
      
    </div>
  )
}
