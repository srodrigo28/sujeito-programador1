import "./useEfect.css"
import { useState, useEffect } from "react"

export function UseEfect02(){

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [entradas, setEntradas] = useState([])

    function handleRegisterEntrada(e){
        e.preventDefault()
  
        setEntradas([...entradas, name, price])
        setName('')
        setPrice('')
    }

    useEffect(() => {
        const EntradasStorage = localStorage.getItem('@EntradasStorage');
    
        if(EntradasStorage){
            setEntradas(JSON.parse(EntradasStorage))
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('@EntradasStorage', JSON.stringify(entradas))
    }, [entradas])

    return(
        <>
            <h1>UseEfect 01</h1>
            <form onSubmit={handleRegisterEntrada}>
                <div className="group-input">
                    <input 
                        type="text" 
                        value={name}
                        placeholder="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type="text"
                        value={price}
                        placeholder="price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button>Cadastrar</button>
            </form>

            <div className="div">
                <ul>
                    {entradas.map((entrada) => (
                        <li key={entrada}>{entrada}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}