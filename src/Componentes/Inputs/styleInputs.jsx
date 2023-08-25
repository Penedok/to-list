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
    background-image: linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% );
    margin: 2.5em 6em ;
    border:1px solid transparent;
    border-radius:1.5em;

`
export const Selecao =styled.div`
    display:flex;
    justify-content: center;
    background-color: 
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
    flex-direction: column;
    justify-content: center;
    aling-items:center;
    margin: 0 0 2em 0;
`
export const Coluna = styled.ul`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 0;
`
export const Linhas = styled.li`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;

`

export const Paragrafo =styled.p`
    font-size:22px;
    text-transform: uppercase;


`
export const CaixaBtn = styled.div`
    display:flex;
    justify-content: center;
    aling-items:center;


`
export const Btn = styled.button`
border-radius: 8px;
border: 1px solid transparent;
padding: 0.6em 1.2em;
margin: 0 0.5em;
font-size: 1em;
font-weight: 500;
font-family: inherit;
cursor: pointer;
transition: border-color 0.25s;

&:hover{
    background-color: #646cff;
}
&:focus,focus-visible{
    outline: 4px auto -webkit-focus-ring-color;
}

`
export const CaixaInput = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
aling-items:center;

`
export const ExecutadorLabel = styled.label`
border: 1px solid black;
border-radius: 8px;
background-color:#646cff;
cursor:pointer;
padding:0 1.5em;
margin: 0 1.5em;

`

export const Tarefacaixa = styled.div`
   display:flex;
` 
export const TopicoTarefa = styled.p`
    text-transform:uppercase;
    font-size:22px;
    color:#fcb045; 
    font-weight: 700;
`
export const FeitoInput = styled.input`
  margin: 0em 1em;
`;

export const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
 

  + label::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #000;
    background-color: #fff;
    transition: all 150ms;
  }

  &:checked + label::before {
    border-color: red;
    background-color: #00f;
  }
`;

