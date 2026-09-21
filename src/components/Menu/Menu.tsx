import './Menu.css'
import Logo from '/NizamLens.svg'
import { MdExpandMore, MdExpandLess } from "react-icons/md"

type MenuProps = {
    className?: string
}

function Menu({ className }: MenuProps) {
    return(
        <div className={`Menu ${className ?? ''}`.trim()}>
            <div className="top">
                <img src={Logo} alt="NizamLens" title='NizamLens' />
                <span>NIZAMLENS</span>
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

            </div>
        </div>
    )
}

export default Menu