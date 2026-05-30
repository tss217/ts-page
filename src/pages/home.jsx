import "../App.css"
import { Link } from "react-router-dom"

export default function Home() {
    return (

        <div className="main">
            <div className="containerOne">

                <nav className="menu">
                    <Link to="/">HOME</Link>
                    <a href="#habilidades">HABILIDADES</a>
                    <Link to="/">SOBRE</Link>
                </nav>

                <main className="box">
                    <div className="titulo">
                        <h1>THIAGO</h1>
                        <h2>ENGENHEIRO DA</h2>
                        <h2>COMPUTAÇÃO</h2>
                    </div>

                    <div className="subtitulo">
                        <p>
                            REPOSITORIOS NO GITHUB:60<br />
                            CONEXÃO NO LINDIN: 600
                        </p>

                        <p>
                            SKILLS: PYTHON, C++, REACT <br />
                            BACKEND, SQL, LUNUX, API
                        </p>

                        <p>
                       
                            ENTRE EM CONTATO<br />
                            PELO LINKDIN  
                           
                        </p>
                    </div>
                </main>

            </div>
        </div>
        
    )
}