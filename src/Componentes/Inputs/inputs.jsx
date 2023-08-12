


export default function Inputs (){
    return(
        <div>
           <div>
              <h2>Diga-nos quem é você?!</h2>
              <select>
                <option>Selecione..</option>
                <option>Organizador</option>
                <option>Executador</option>
              </select>
           </div>
           <div>
              <form>
                 <div>
                    <label>Nome</label>
                    <input type="text" name="Tarefa"/>
                 </div>
                 <div>
                    <button type="submit">Enviar</button>
                 </div>
              </form>
           </div>

        </div>
      
    )
}