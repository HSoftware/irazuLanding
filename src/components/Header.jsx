import firma from "../assets/images/firma_brillo.png"
import globe from "../assets/images/logo-globe-life.png"


export default function Header() {

return (
 <header> 
    <nav>
      <img src={firma} alt="Yrazú Carmona" className="firma-yrazu" />
      <img src={globe} alt="Globe Life – American Income Division" className="globe-life" />
    </nav>
  </header>
  )
}