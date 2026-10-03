import { Link } from 'react-router-dom'
import './Header.css'
import Search from '../Search/Search'
import { useAuth } from '../../../context/auth'

const logo = `${import.meta.env.BASE_URL}favicon.svg`

function Header() {
    const { user, loading, signOut } = useAuth()

    return (
        <header className="Header">
            <div className="HeaderR">
                <Link to="/" aria-label="NizamLens home">
                    <img src={logo} alt="NizamLens" className="Logo" width={32} />
                </Link>
            </div>
            <div className="HeaderC">
                <Search />
            </div>
            <div className="HeaderL">
                {loading ? (
                    <span className="LoginBtn" style={{ visibility: 'hidden' }}>
                        Login
                    </span>
                ) : user ? (
                    <button type="button" className="LoginBtn" onClick={signOut}>
                        Log out
                    </button>
                ) : (
                    <Link to="/login" className="LoginBtn">Login</Link>
                )}
            </div>
        </header>
    )
}

export default Header