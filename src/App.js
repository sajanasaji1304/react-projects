import logo from './logo.svg';
import './App.css';
import Another from './components/Another';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  function click(){
    setName('SAJANA')

  }

  return (
    <div className="App">
      
      <h1>helo {name}</h1>
      <button onClick={click}>click</button>
<Another/>

    </div>
  );
}

export default App;
