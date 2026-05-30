import "../App.css"
import EmBreve from "../components/embreve"
import Menu from "../components/menu"

export default function Sobre() {
    return(

        <div className="main">
            
            <div className="containerOne">
                <Menu/>
                <main className="box">
                    <div className="titulo">
                        <EmBreve />
                    </div>
                </main>
            </div>
        </div>
       
    ) 
}