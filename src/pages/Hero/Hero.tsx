import './Hero.css'

function Hero() {
    return (
        <section className="Hero">
            <div className="heroTop">
                <span className="mono">CREATIVE PORTFOLIO</span>
                <span className="mono">2026 — PRESENT</span>
            </div>

            <div className="heroMain">
                <div className="heroTitle">
                    <h1>
                        TEUKU
                        <br />
                        MUHAMMAD
                        <br />
                        NIZAM<span className="accent">.</span>
                    </h1>
                </div>

                <div className="heroInfo">
                    <p className="heroRole">
                        PHOTOGRAPHER.
                        <br />
                        DESIGNER.
                        <br />
                        BUILDER.
                    </p>

                    <p className="heroDescription">
                        Creating photographs, digital experiences,
                        and tools for creative work.
                    </p>

                    <div className="heroActions">
                        <button className="heroButton">
                            VIEW WORK
                        </button>

                        <button className="heroButton">
                            NIZAMLENS →
                        </button>
                    </div>
                </div>
            </div>

            <div className="heroBottom">
                <span className="mono">BASED IN INDONESIA</span>

                <span className="heroScroll">
                    SCROLL TO EXPLORE ↓
                </span>
            </div>
        </section>
    )
}

export default Hero