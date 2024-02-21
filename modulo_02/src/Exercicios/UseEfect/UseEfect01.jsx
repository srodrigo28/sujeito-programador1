import "./useEfect.css"

import { useEffect, useState } from 'react'

export function UseEfect01(){
    const [input, setInput] = useState('')
    const [tarefas, setTarefas] = useState([])

    function handleRegisterTarefa(e){
        e.preventDefault()
    
        setTarefas([...tarefas, input])
        setInput('')
      }

      useEffect(() => {
        const tarefasStorage = localStorage.getItem('@tarefa');
    
        if(tarefasStorage){
          setTarefas(JSON.parse(tarefasStorage))
        }
      }, []);
     
      useEffect(() => {
        localStorage.setItem('@tarefa', JSON.stringify(tarefas))
      }, [tarefas])

    return(
        <>
            <h1>UseEfect 01</h1>
             <form onSubmit={handleRegisterTarefa}>
                <input 
                    type="text"
                    placeholder='tarefa'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button>Cadastrar</button>
                </form>
                <ul>
                {tarefas.map((tarefa) => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
                </ul>
        </>
    )
}