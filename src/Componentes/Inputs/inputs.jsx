import React from 'react';
import {ContainerInput, Selecao, Dados,Cartao,Select,Formulario,
   TituloLista, Coluna, Lista,Btn,CaixaBtn,CaixaInput, ExecutadorLabel} from './styleInputs'
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

  const apaga =() =>{
    const deleta = document.querySelector('.opcoes')
    deleta.parentNode.removeChild(deleta)


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
                        <CaixaBtn>
                          <Btn onClick={() => setSelecionaTarefa('Casa')}>Casa</Btn>
                          <Btn onClick={() =>  setSelecionaTarefa('Escola')}>Escola</Btn>
                        </CaixaBtn>  
                         <CaixaInput>
                          
                             <label>Nome</label>
                             <input type="text" name="tarefa" />
                             <button type="submit">Enviar</button>
                        </CaixaInput>
                       
                          <div>
                            
                          </div>
                      </Formulario>
                    </Dados>
                 ):null } {executador && (
                    <div>
                        <TituloLista>Tarefas:</TituloLista>
                        <Coluna >
                          {tarefa.map((tarefa, index) => (
                            <Lista className='opcoes' key={index}>
                              <input type='checkbox' placeholder='Feito' id='feito' className='input-checkbox'/>
                              <strong>{tarefa.topic}:</strong> {tarefa.tarefa}
                              <ExecutadorLabel for="feito"> Feito   </ExecutadorLabel>
                            </Lista>
                          ))}
                        </Coluna>
                   </div>
                 )}
            </Cartao>  
        </ContainerInput>
        
    )
}