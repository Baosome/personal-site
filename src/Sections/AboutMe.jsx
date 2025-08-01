import "./AboutMe.css"
import Cards from "../AdditionalComponents/Cards/Cards.jsx"


function AboutMe() {
    return (
        <>
            <section id="AboutMe">
                <div className="Main">
                    <h1>About Me</h1>
                    <div className="Info">
                        <p className="Me">I’m a software developer with a background in computer science and hands-on experience in
                            building secure, scalable systems. I enjoy designing and developing applications that bring
                            ideas to life, from backend services and APIs to responsive front-end interfaces. My work in
                            cybersecurity and systems engineering has given me a strong foundation in problem-solving and
                            writing reliable, efficient code, but my real passion is in creating software that’s practical,
                            user-friendly, and impactful</p>
                        <div className={"CardsGroup"}>
                            <div className={"CardsHero"}>
                                <Cards text={"C++"} ></Cards>
                                <Cards text={"Java"} ></Cards>
                                <Cards text={"Lua"} ></Cards>
                            </div>
                            <div className={"CardsHero"}>
                                <Cards text={"Python"} ></Cards>
                                <Cards text={"JavaScript"} ></Cards>
                                <Cards text={"HTML"} ></Cards>
                                <Cards text={"CSS"} ></Cards>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe