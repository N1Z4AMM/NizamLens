import './Footer.css'
import Logo from '/NizamLens.svg'

function Footer() {
    return(
        <div className="Footer">
            <div className="Brand">
                <div className="BrandContent">
                <img src={Logo} alt="Logo" className='Logo'/>
                <span>NIZAMLENS</span>
                </div>
            </div>
            <div className="Pages">
                <div className="PagesTop">
                    <span>Pages</span>
                </div>
                <div className="PagesContent">
                    <span>01 - Photography </span>
                    <span>02 - Desain </span>    
                    <span>03 - Experiments</span>    
                    <span>04 - About</span> 
                </div>
            </div>
            <div className="Bottom">
                <span>NIZAMLENS</span>
                <span>© 2026</span>
                <span>INDONESIA</span>
            </div>
        </div>
    )
}

export default Footer