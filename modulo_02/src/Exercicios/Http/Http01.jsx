import { useState, useEffect } from "react";

import "./http01.css"

export function Http01(){
    const [nutri, setNutri] = useState([])
    const url = "https://sujeitoprogramador.com/rn-api/?api=posts";

    useEffect(() => {
        function loadApi(){
            fetch(url)
            .then((r) => r.json())
            .then((json) => {
                console.log(json);
                setNutri(json); //carrega nutri
            })
        }

        loadApi();

    }, [])
    

    return(
        <div className="container">
            <header> Http 01 </header>

                {nutri.map((item) => (
                    <article key={item.id} className="post">
                        <strong className="title"> {item.titulo} </strong>
                        <img src={item.capa} alt={item.titulo}  className="capa"/>
                        <p className="subtitulo">{item.subtitulo}</p>
                        <a href="#" className="botao">Acessar</a>
                    </article>
                ))}
        </div>
    )
}