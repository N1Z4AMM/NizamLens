import './Search.css'
import { useEffect, useRef, useState } from 'react'
import { LuSearch } from "react-icons/lu";

function Search() {
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key !== '/') return

            const target = e.target as HTMLElement
            const isTyping =
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.isContentEditable
            if (isTyping) return

            e.preventDefault() 
            inputRef.current?.focus()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <div className="Search">
            <LuSearch color='#E8E8E8' className='SearchIcon' />
            <input
                ref={inputRef}
                type="search"
                name="Search"
                placeholder='Search...'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {value.length === 0 && <div className="ShorcutKey">/</div>}
        </div>
    )
}

export default Search