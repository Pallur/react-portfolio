import "./contact.scss"
import Pdf from "./pdf/Pall_cv_isl.pdf"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Hafa samband</h1>
      <div className="contact-info">
        <div className="phone">
          <h2>Sími: 824 8916</h2>
        </div>
        <div className="email">
          <h2>Netfang: palliasgeir@gmail.com</h2>
        </div>
        <div className="resume">
          <h2>
            <a href= {Pdf} target="_blank" rel="noopener noreferrer"> Ferilskrá </a>
          </h2>
        </div>
        <div className="aboutsite">
          Síða gerð í React með Sass :)
        </div>
        
      </div>
        
    </div>
  )
}
