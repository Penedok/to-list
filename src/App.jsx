import React from "react";
import { useState } from "react";

function App() {

  const [tarefas, setTarefas] = useState('');

  function handleEnviaTarefa(e){
    e.preventDefault();
      console.log(tarefas)
  }
  


  return (
    <>
      <section>
        <div>
          <h2>To List</h2>
          <p>Selecione quem é você!</p>
        </div>
        <div>
          <select>
            <option>Organizador</option>
            <option>Executador</option>
          </select>
        </div>
        <div>
          <form onSubmit={handleEnviaTarefa}>
            <label>Nome da Tarefa</label>
            <input  type="text"  name="tarefa" onChange={(e) =>{
               setTarefas({tarefas:e.target.value}) 
            }}/>
            <input type="submit"/>
             
          </form>
        </div>
      </section>  
     
      
    </>
  )
}

export default App
