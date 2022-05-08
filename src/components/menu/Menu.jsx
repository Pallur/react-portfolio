import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Heim</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Aduco</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">Verkefni</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Hafa samband</a>
            </li>
        </ul>
    </div>
  )
}
