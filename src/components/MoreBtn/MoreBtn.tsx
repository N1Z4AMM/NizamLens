import { useState } from 'react'
import './MoreBtn.css'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

function MoreBtn() {
    const [expanded, setExpanded] = useState(false)

    function ToggleExpand() {
        setExpanded(prev => !prev)
    }

    return (
        <div
            className={`Expand ${expanded ? 'ExpandMode' : ''}`}
            onClick={ToggleExpand}
            aria-expanded={expanded}
        >
            <MdExpandMore
                className="more"
                color="var(--icon)"
            />

            <MdExpandLess
                className="less"
                color="var(--icon)"
            />
        </div>
    )
}

export default MoreBtn