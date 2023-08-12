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
                        setExecutador(false)
                      }else if(e.target.value === "Executador"){
                        handleExecutador();
                        setExecutador(true)
                      }else{
                        setOrganizador(false);
                        setExecutador(false)
                      }
                   }}>
                     <option>Selecione..</option>
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
                            <div>
                                <label>Casa</label>
                                <input type='checkbox' name='Casa'/>
                                <input type='checkbox' name='Escola'/>
                                <label>Escola</label>
                            </div>
                            </div>
                            <div>
                                <button type="submit">Enviar</button>
                            </div>
                        </Formulario>
                    </Dados>
                 ):null } {executador && (
                    <div>
                        <p>ola</p>
                   </div>
                 )}
            </Cartao>  
        </ContainerInput>
        
    )
}