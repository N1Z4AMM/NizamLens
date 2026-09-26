import './App.css'
import Header from './components/Header/Header'
import Hero from './pages/Hero/Hero'
import Photography from './pages/Photography/Photography'
import Desain from './pages/Desain/Desain'
import Experiments from './pages/Experiments/Experiments'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <Photography />
                <Desain />
                <Experiments />
            </main>
            <Footer />
        </div>
    )
}

export default App