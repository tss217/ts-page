import "../App.css"
import { useEffect, useState } from "react"
import Menu from "../components/menu"

export default function Home() {
    const [repos, setRepos] = useState(0)

    useEffect(() => {
        fetch("https://api.github.com/users/tss217")
            .then(response => response.json())
            .then(data => {
                setRepos(data.public_repos)
            })
            .catch(error => {
                console.error("Erro ao buscar repositórios:", error)
            })
    }, [])

    return (
        <div className="main">
            <div className="containerOne">

                <Menu />

                <main className="box">
                    <div className="titulo">
                        <h1>THIAGO</h1>
                        <h2>ENGENHEIRO DA</h2>
                        <h2>COMPUTAÇÃO</h2>
                    </div>

                    <div className="subtitulo">
                        <p>
                            REPOSITÓRIOS NO <a href="https://github.com/tss217">GITHUB: {repos}<br /></a>
                            CONEXÕES NO LINKEDIN: 600
                        </p>

                        <p>
                            SKILLS: PYTHON, C++, REACT <br />
                            BACKEND, SQL, LINUX, API
                        </p>

                        <p>
                            ENTRE EM CONTATO<br />
                            PELO <a href="https://www.linkedin.com/in/thiago-s-silva-ts217/">LINKEDIN</a>
                        </p>
                    </div>
                </main>

            </div>
        </div>
    )
}