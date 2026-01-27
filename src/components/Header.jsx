import firma from "../assets/images/firma.png"
import globe from "../assets/images/logo-globe-life.png"
import carta from "../assets/images/logo-carta-business-group.png"

import "./Header.css"

export default function Header() {
return (
 <header className="container-fluid">
    <nav className="d-flex flex-column flex-md-row align-items-center justify-content-between width-md-80 py-4">
      <img src={firma} alt="Yrazú Carmona" className="image-yrazu" />
      <div className="d-flex flex-column justify-content-center">
          <img src={globe} alt="Globe Life – American Income Division" className="globe-life" />
          <img src={carta} alt="Carta Business Group" className="carta-bussiness" />
      </div>      
    </nav>
  </header>
  )
}