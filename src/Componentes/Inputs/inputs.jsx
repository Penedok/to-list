import React from 'react';
import {ContainerInput, Selecao, Dados,Cartao,Select,Formulario} from './styleInputs'
import { useState } from 'react';

export default function Inputs (){

  const [tarefa, setTarefas] = useState();
  const [organizador, setOrganizador] = useState(false);
  const [executador, setExecutador] = useState(false);

  const handleEnviaTarefa = (e)=>{
        e.preventDefault()
        console.log("Tarefa enviada, " + tarefa)    
  }

  const handleOrganizador =() =>{
      setOrganizador(true);
  }
  const handleExecutador =()=>{
     setOrganizador(false)
  }

    return(
        <ContainerInput>
           <Cartao>
                <Selecao>
                   <h2>Diga-nos quem é você...</h2>
                   <Select onChange={(e)=>{
                      if(e.target.value === "Organizador"){
                        handleOrganizador();
                      }else if(e.target.value === "Executador"){
                        handleExecutador();
                      }
                      
                   }}>
                    
                     <option>Organizador</option>
                     <option>Executador</option>
                   </Select>
                </Selecao>
                  {organizador ? (
                <Dados>
                    <Formulario onSubmit={handleEnviaTarefa}>
                        <div>
                           <label>Nome</label>
                           <input type="text" name="Tarefa" onChange={(e) =>{setTarefas(e.target.value)}}/>
                         </div>
                         <div>
                           <button type="submit">Enviar</button>
                         </div>
                    </Formulario>
                </Dados>
                 ):(
                    <div>
                        <p>ola</p>
                   </div>
                 )}
            </Cartao>  
        </ContainerInput>
        
    )
}