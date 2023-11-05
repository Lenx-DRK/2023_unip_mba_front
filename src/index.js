import React from "react";
import ReactDOM from 'react-dom'
import './Styles.css'

const App= () => {
    

const estiloBotao = {marginTop:12, paddingTop:8,paddingBottom:8,width:'100%',
backgroundColor:'blueviolet', color:'white',border: 'none',
borderRadius:'none' }

const textoDoRotulo = 'Nome:'

const ObterTextoDoBotao = () =>{
    return 'Enviar'
}

//expressão JSX
    return(
    
    <div style={{margin: 'auto', width: 768, backgroundColor:'#EEE', 
    padding:12, borderRadius:8 }}>

    <label htmlFor='nome' style={{display: 'block', marginBottom:4}}>
    {textoDoRotulo}
    </label>
    
    <input type='text' id='nome' style={{paddingTop: 8, paddingBottom:8,
    borderStyle: 'hidden', width:'100%', borderRadius: 8, outline:'none',boxSizing:'border-box'}}/>
    
    <button style={estiloBotao}>{ObterTextoDoBotao()}</button>

    </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)