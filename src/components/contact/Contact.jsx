import "./contact.scss"
import Pdf from "./pdf/Pall_cv_eng.pdf"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact me</h1>
      <div className="contact-info">
        <div className="phone">
          <h2>Phone: 824 8916</h2>
        </div>
        <div className="email">
          <h2>Email: palliasgeir@gmail.com</h2>
        </div>
        <div className="resume">
          <h2>
            <a href= {Pdf} target="_blank" rel="noopener noreferrer"> Resume </a>
          </h2>
        </div>
        <div className="aboutsite">
          Website created in React with Sass :)
        </div>
        <div className="cattax">
          <img 
            src="assets/kata.JPG" 
            alt="" 
          />
          <dir>
            Cat Tax
          </dir>
          
        </div>
        
      </div>
        
    </div>
  )
}
