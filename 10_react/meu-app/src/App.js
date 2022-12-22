import React from 'react';
import Header from './Header';
import Counter from './Counter';


function App() {
  return (
    <div>
      <Header name="Progbr" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>
      <Counter count={5}></Counter>
    </div>

  );
}

export default App;
