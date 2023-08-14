import styled from "styled-components";


export const ContainerInput = styled.div`
    display:flex;
    justify-content: center;
    flex-direction:column;
    aling-items:center;
`
export const Cartao = styled.div`
    display:flex;
    justify-content: center;
    flex-direction:column;
    aling-items:center;
    background: linear-gradient(180deg, rgba(26,36,0,1) 0%, rgba(95,177,61,1) 3%, rgba(0,212,255,1) 100%) no-repeat;
    margin: 2.5em 6em ;
    border:1px solid transparent;
    border-radius:1.5em;

`
export const Selecao =styled.div`
    display:flex;
    justify-content: center;
    
    aling-items:center;
`
export const Dados = styled.div`
    display:flex;
    justify-content: center;
    aling-items:center;
`
export const Select = styled.select`
  margin:1.7em 0.8em;
  border: 1px solid transparent;
  border-radius:2em;
  padding: 0 1em;  
`
export const Formulario = styled.form`
    display:flex;
    justify-content: center;
    aling-items:center;
    margin: 0 0 2em 0;
`
export const Coluna = styled.ul`
    list-style-type: none;
    padding: 0;
`
export const Lista = styled.li`
    margin-top: 5px;

`
export const Btn = styled.button`
border-radius: 8px;
border: 1px solid transparent;
padding: 0.6em 1.2em;
font-size: 1em;
font-weight: 500;
font-family: inherit;
background-color: #1a1a1a;
cursor: pointer;
transition: border-color 0.25s;

&:hover{
    border-color: #646cff;
}
&:focus,focus-visible{
    outline: 4px auto -webkit-focus-ring-color;
}




`
export const TituloLista = styled.h2`
    color:#0000;
`