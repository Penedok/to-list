import React from "react";
import { useState } from "react";

export default function App() {

  const [tarefa, setTarefas] = useState();
  const [organizador, setOrganizador] = useState(false);
  const [mensagem, setMensagem]= useState();

  const handleEnviaTarefa = (e) =>{
        e.preventDefault() 
        console.log(tarefa)   
  }
  const handleOrganizador =() =>{
      setOrganizador(true);
      
  }
  const handleExecutador =()=>{
    setOrganizador(false);
  }
 
  const h1 = document.createElement('h1');
  h1.textContent = 'Meu site incrivel'
  

  return (
    <section>
      <div>
        <h2>To List</h2>
        <p>Selecione quem é você!</p>
      </div>

      <div>
        <select onChange={(e) => {
           if(e.target.value === 'Organizador') {
            handleOrganizador()
          }
          else{
            handleExecutador()
          }
        }} >
           <option>Selecione</option>
          <option>Organizador</option>
          <option>Executador</option>
        </select>
      </div>
        {organizador ? (
        <div>
          <form onSubmit={handleEnviaTarefa}>
            <div>
              <label>Nome da Tarefa</label>
              <input type="text" name="tarefa" onChange={(e) => {setTarefas(e.target.value)}} 
              />
            </div>  
            <div>
              <label>Casa</label>
              <input type="checkbox" name='Casa' />
            </div> 
            <div>
              <label>Escolar</label>
              <input type="checkbox" name='Escolar' />
            </div>  
            <button type="submit" name='tarefa'>Enviar Tarefa</button>
          </form>
        </div>
          ): (
        <div>
          <ul>
            <li>
              <span onChange={(e)=> {setMensagem(e.target.value)}}></span>
              <span></span>
              <input type="checkbox"/>

            </li>
          </ul>
        </div>
          )}
    </section>
  );
}


