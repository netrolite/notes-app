import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid"

export default function App() {
  const [idElems, setIdElems] = useState([])
  useEffect(() => {
    for (let i = 0; i < 50; i++) {
      let id = nanoid(30)
      setIdElems(prevState => [...prevState, <p key={id}>{id}</p>])
    }
  }, [])
    
  console.log(idElems)
  
  return (
    <main>
      <h1>Test</h1>
      {idElems}
    </main>
  );
}