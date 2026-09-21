import './Header.css'
import Logo from '/NizamLens.svg'
import { MdExpandMore, MdExpandLess } from "react-icons/md"
import DownloadHover from '../DownloadHover/DownloadHover'
import { LuMenu } from "react-icons/lu";
import MobileMenu from '../Menu/Menu'

function Header() {
    return (
        <>
        <header className='Header'>
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
                    <MdExpandMore className='more' color='var(--icon)' />
                    <MdExpandLess className='less' color='var(--icon)' />
                </div>
                <div className='content'>
                    <span className='mono'>DOWNLOAD</span>
                    <MdExpandMore className='more' color='var(--icon)' />
                    <MdExpandLess className='less' color='var(--icon)' />
                </div>
            </div>
            <div className="right">
                <span>LOGIN</span>
                <button>GET STARTED</button>
                <LuMenu className='menuBtn' color='var(--icon)' strokeWidth={3} size={16}/>
            </div>
            </header>
            <MobileMenu className="MobileMenu" />
            <DownloadHover />
        </>
    )
}

export default Header