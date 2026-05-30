import "../App.css"
import { Link } from "react-router-dom"
import Menu from "../components/menu"

export default function Home() {
    return (

        <div className="main">
            <div className="containerOne">

                <Menu/>
                <main className="box">
                    <div className="titulo">
                        <h1>THIAGO</h1>
                        <h2>ENGENHEIRO DA</h2>
                        <h2>COMPUTAÇÃO</h2>
                    </div>

                    <div className="subtitulo">
                        <p>
                            REPOSITORIOS NO <a href="https://github.com/tss217">GITHUB:60<br /></a>
                            CONEXÕES NO LINDIN: 600
                        </p>

                        <p>
                            SKILLS: PYTHON, C++, REACT <br />
                            BACKEND, SQL, LiNUX, API
                        </p>

                        <p>
                       
                            ENTRE EM CONTATO<br />
                            PELO <a href="https://www.linkedin.com/in/thiago-s-silva-ts217/">LINKDIN </a>
                           
                        </p>
                    </div>
                </main>

            </div>
        </div>
        
    )
}