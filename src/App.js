import React, { useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0);
  function increment(){
    setCount(count+1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={()=>setCount(0)}>Set back to 0</button>
    </>
  )
}

export default App;
