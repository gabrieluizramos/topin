import './App.css';
import { useState } from 'react';

import HookButton from './components/button.hook';
import ClassButton from './components/button.class';

function App() {
  let [nome, setNome] = useState('Gabriel');
  
  window.setTimeout(() => {
    setNome("Gabriel Ramos")
  }, 2000);

  const onClickButton = (valor) => {
    console.log('valor atual é ', valor);
  };

  return (
    <div className="App">
      <HookButton type="Ronaldo" text="Pinto" nome={nome} onUpdate={onClickButton}>
        [botao com hook] texto passado via children
      </HookButton>
      <ClassButton onUpdate={onClickButton}>
        [botao com class] texto passado via children
      </ClassButton>
    </div>
  );
}

export default App;
