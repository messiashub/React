import React from 'react'
import Header from './Header'
import Counter from './Counter'
import './App.css';

function App() {
    return (
        <div>
            <Header name="ProgBr" link={["Sobre", "Comprar", "Contato", "Login"]}></Header>
            <Counter count ={0}></Counter>
        </div>
    );
}



export default App;