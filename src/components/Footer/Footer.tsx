import './Footer.css'
import Logo from '/NizamLens.svg'
import { FaGithub, FaTiktok, FaInstagram } from "react-icons/fa";

function Footer() {

    return (
        <footer className="Footer">
            <div className="Brand">
                <img className='Logo' src={Logo} alt='Logo' />
            </div>
            <div className="FooterContent">
                <span>Email</span>
                <span>Privacy</span>
                <span>Terms</span>
                <span>Accessibility</span>
            </div>
            <div className="Socials">
                <a href="https://www.tiktok.com/@nizam2858684878">
                    <FaTiktok className='SocialsIcons' />
                </a>
                <a href="https://www.instagram.com/n1z4amm/">
                    <FaInstagram className='SocialsIcons' />
                </a>
                <a href="https://github.com/N1Z4AMM">
                    <FaGithub className='SocialsIcons' />
                </a>
            </div>
        </footer>
    )
}

export default Footer