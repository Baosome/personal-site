import "./AboutMe.css"
import Cards from "../AdditionalComponents/Cards/Cards.jsx"
import cplus from "../assets/languages-svg/Cplusplus2.svg"
import css from "../assets/languages-svg/css.svg"
import htmlsvg from "../assets/languages-svg/html.svg"
import java from "../assets/languages-svg/java.svg"
import lua from "../assets/languages-svg/lua.svg"
import javascript from "../assets/languages-svg/javascript.svg"
import python from "../assets/languages-svg/python.svg"
import AWS from "../assets/framework-svg/aw.svg"
import Jira from "../assets/framework-svg/jira.svg"
import Vite from "../assets/framework-svg/vite.svg"
import Docker from "../assets/framework-svg/docker.svg"
import Springboot from "../assets/framework-svg/springboot.svg"
import reactsvg from "../assets/framework-svg/react.svg"
import tailwind from "../assets/framework-svg/tailwind.svg"
import bootstrap from "../assets/framework-svg/bootstrap.svg"
import intellij from "../assets/framework-svg/intellij.svg"
import vscode from "../assets/framework-svg/vs-code.svg"




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
                                <Cards text={"C++"} iconSrc={cplus} ></Cards>
                                <Cards text={"Java"} iconSrc={java} ></Cards>
                                <Cards text={"Lua"} iconSrc={lua}></Cards>
                            </div>
                            <div className={"CardsHero"}>
                                <Cards text={"Python"} iconSrc={python}></Cards>
                                <Cards text={"Java Script"} iconSrc={javascript} ></Cards>
                                <Cards text={"HTML"} iconSrc={htmlsvg}></Cards>
                                <Cards text={"CSS"} iconSrc={css} ></Cards>
                            </div>
                            <div className={"CardsHero"}>
                                <Cards text={"AWS"} iconSrc={AWS}></Cards>
                                <Cards text={"Jira"} iconSrc={Jira} ></Cards>
                                <Cards text={"Vite"} iconSrc={Vite}></Cards>
                                <Cards text={"Docker"} iconSrc={Docker} ></Cards>
                            </div>
                            <div className={"CardsHero"}>
                                <Cards text={"Spring Boot"} iconSrc={Springboot}></Cards>
                                <Cards text={"React"} iconSrc={reactsvg} ></Cards>
                                <Cards text={"Tailwind"} iconSrc={tailwind}></Cards>
                                <Cards text={"Boot strap"} iconSrc={bootstrap} ></Cards>
                            </div>
                            <div className={"CardsHero"}>
                                <Cards text={"IntelliJ"} iconSrc={intellij}></Cards>
                                <Cards text={"Vs Code"} iconSrc={vscode} ></Cards>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default AboutMe