


import {ContainerInput, Selecao, Dados,Cartao,Select} from './styleInputs'

export default function Inputs (){
    return(
        <ContainerInput>
           <Cartao>
                <Selecao>
                   <h2>Diga-nos quem é você...</h2>
                   <Select>
                     <option>Selecione..</option>
                     <option>Organizador</option>
                     <option>Executador</option>
                   </Select>
                </Selecao>
                <Dados>
                    <form>
                        <div>
                           <label>Nome</label>
                           <input type="text" name="Tarefa"/>
                         </div>
                         <div>
                           <button type="submit">Enviar</button>
                         </div>
                    </form>
                </Dados>
            </Cartao>  
        </ContainerInput>
        
    )
}