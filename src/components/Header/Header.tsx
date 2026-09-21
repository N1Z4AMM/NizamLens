import './Header.css'
import Logo from '/NizamLens.svg'
import DownloadHover from '../DownloadHover/DownloadHover'
import { LuMenu } from "react-icons/lu";
import MobileMenu from '../Menu/Menu'
import { useState } from 'react'
import MoreBtn from '../MoreBtn/MoreBtn';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function ShowMenu() {
        setIsMenuOpen(prev => !prev)
    }

    return (
        <>
        <header className={`Header ${isMenuOpen ? 'hidden' : ''}`}>
            <div className="left">
                <img src={Logo} alt="NizamLens" title='NizamLens' width={40}/>
                <span>NIZAMLENS</span>
            </div>
            <div className="center">
                <div className='content'>
                    <span className='mono'>DOCS</span>
                </div>
                <div className='content'>
                    <span className='mono'>ABOUT</span>
                </div>
                <div className='content'>
                    <span className='mono'>TOOLS</span>
                    <MoreBtn />
                </div>
                <div className='content'>
                    <span className='mono'>DOWNLOAD</span>
                    <MoreBtn />
                </div>
            </div>
            <div className="right">
                <button>LOGIN</button>
                <button className='gsd'>GET STARTED</button>
                <LuMenu className='menuBtn' onClick={ShowMenu} color='var(--icon)' strokeWidth={3} size={16}/>
            </div>
            </header>
            <MobileMenu className={isMenuOpen ? 'MobileMenu show' : 'MobileMenu'} />
            <DownloadHover />
        </>
    )
}

export default Header