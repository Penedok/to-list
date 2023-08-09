import React from "react";
import { useState } from "react";

export default function App() {
  const  [tarefa, setTarefas] = useState();
  const [organizador, setOrganizador] = useState(false);
  
  const handleOrganizadorChange = () =>{
    setOrganizador(true)
  }

  const handleExecutadorChange = () =>{
    setOrganizador(false)
  }

  const hadleEnviaTarefa = (e) =>{
    e.preventDefault();
     console.log('Tarefa enviada', tarefa)
  }


  return (
    <section>
      <div>
        <h2>To List</h2>
        <p>Selecione quem é você!</p>
      </div>

      <div>
        <select onChange={(e) => {
         if(e.target.value === 'Organizador'){
          handleOrganizadorChange();
         }else{
          handleExecutadorChange()
         }
    }}> 
          <option>Organizador</option>
          <option>Executador</option>
        </select>
      </div>
          {organizador ? (
        <div>
          <form onSubmit={hadleEnviaTarefa}>
            <label>Nome da Tarefa</label>
            <input type="text" name="tarefa"
              onChange={(e) => {setTarefas(e.target.value = tarefa)}}
              
            />
            <button type="submit">Enviar Tarefa</button>
          </form>
        </div>
          ) : (
        <div>
          <ul>
            <li>dados mandados pelo Organizador</li>
          </ul>
        </div>
          )}
    </section>
  );
}


