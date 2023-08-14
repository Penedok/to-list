import React from 'react';
import {ContainerInput, Selecao, Dados,Cartao,Select,Formulario} from './styleInputs'
import { useState } from 'react';

export default function Inputs (){

  const [tarefa, setTarefas] = useState([]);
  const [organizador, setOrganizador] = useState(false);
  const [executador, setExecutador] = useState(false);
  const [selecionaTarefa, setSelecionaTarefa] = useState('')

  const handleEnviaTarefa = (e)=>{
        e.preventDefault();
        if (e.target.tarefa.value.trim() === '') return ///remover espaço em branco 
    
        const novaTarefa ={
           topic: selecionaTarefa,
           tarefa: e.target.tarefa.value,
        };

        setTarefas([...tarefa, novaTarefa]);
        e.target.tarefa.value ='';


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
                        <button onClick={() => setSelecionaTarefa('Casa')}>Casa</button>
                        <button onClick={() =>  setSelecionaTarefa('Escola')}>Escola</button>
                          <Formulario onSubmit={handleEnviaTarefa}>
                            <div>
                                <label>Nome</label>
                                <input type="text" name="tarefa" />
                            <div>
                            </div>
                            </div>
                            <div>
                                <button type="submit">Enviar</button>
                            </div>
                        </Formulario>
                    </Dados>
                 ):null } {executador && (
                    <div>
                        <h2>Tarefas:</h2>
                        <ul>
                          {tarefa.map((tarefa, index) => (
                            <li key={index}>
                              <strong>{tarefa.topic}:</strong> {tarefa.tarefa}
                            </li>
                          ))}
                        </ul>
                   </div>
                 )}
            </Cartao>  
        </ContainerInput>
        
    )
}