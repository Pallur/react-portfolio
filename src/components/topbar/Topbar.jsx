import "./topbar.scss";
// import {Person, Mail} from "@material-ui/icons"
import { Person, Mail } from '@mui/icons-material';
// import { useTranslation } from "react-i18next";
// import LanguageSelect from "./languageSelect";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">Páll</a>
            <div className="itemContainer">
              <Person className="icon"/>
              <span>+354 824 8916</span>
            </div>
            <div className="itemContainer">
              <Mail className="icon"/>
              <span>palliasgeir@gmail.com</span>
            </div>
          </div>
         
          
          <div className="right">
           <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
           </div>
          </div>
        </div>
    </div>
  )
}
