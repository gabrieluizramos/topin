import './App.css';
import { useState } from 'react';
import Button from './components/button';

function App() {
  let [nome, setNome] = useState('Gabriel');
  
  window.setTimeout(() => {
    setNome("Gabriel Ramos")
  }, 1000);

  const onClickButton = (valor) => {
    console.log('valor atual é ', valor);
  };

  return (
    <div className="App">
      <Button type="Ronaldo" text="Pinto" nome={nome} onUpdate={onClickButton}>
        clica ai por props
      </Button>
    </div>
  );
}

export default App;
