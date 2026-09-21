import './Menu.css'
import Logo from '/NizamLens.svg'
import { MdExpandMore, MdExpandLess, MdClose } from "react-icons/md"

type MenuProps = {
    className?: string
}

function Menu({ className }: MenuProps) {
    return(
        <div className={`Menu ${className ?? ''}`.trim()}>
            <div className="top">
                <div className="left">
                    <img src={Logo} alt="NizamLens" title='NizamLens' width={40} />
                <span>NIZAMLENS</span>
                </div>
                <div className="right">
                    <MdClose className='closeBtn' color='var(--icon)' size={16} />
                </div>
            </div>
            <div className="center">
                <div className="content">
                    <span className='mono'>DOCS</span>
                </div>
                <div className="content">
                    <span className='mono'>ABOUT</span>
                </div>
                <div className="content">
                    <span className='mono'>TOOLS</span>
                    <MdExpandMore className='more' color='var(--icon)' />
                    <MdExpandLess className='less' color='var(--icon)' />
                </div>
                <div className="content">
                    <span className='mono'>DOWNLOAD</span>
                    <MdExpandMore className='more' color='var(--icon)' />
                    <MdExpandLess className='less' color='var(--icon)' />
                </div>
            </div>
            <div className="bottom">
                <button>LOGIN</button>
                <button className='gsd'>GET STARTED</button>
            </div>
        </div>
    )
}

export default Menu