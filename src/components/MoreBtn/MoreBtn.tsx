import './MoreBtn.css'
import { MdExpandMore, MdExpandLess } from "react-icons/md"

function MoreBtn() {

    function ToggleExpand(){
        document.querySelector('.Expand')?.classList.toggle('ExpandMode')
    }

    return(
        
        <div className="Expand" onClick={ToggleExpand}>
            <MdExpandMore className='more' color='var(--icon)' />
            <MdExpandLess className='less' color='var(--icon)' />
        </div>
    )
}

export default MoreBtn