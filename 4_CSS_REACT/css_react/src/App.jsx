import { useState } from 'react'
import "./App.css";
import MyComponents from "./components/MyComponents";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] =useState ("Rodolfo");
  const redTitle = false;
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* CSS global*/}
    <h1>React com CSS style</h1>
    {/* CSS de componente*/}
    <MyComponents />
    <p>Este paragrafo e do app.jsx</p>
    {/* CSS Inline dinamico */}
    <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinamico</h2>
    <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinamico</h2>
    
    <h2 
    style={

    name === "Rodolfo"
     ? {color: "green", backgroundColor: "#000"}
     : null
     }
     >
     Teste nome
     </h2>
     {/** classe dinamica */}
     <h2 className={redTitle ? "red-title" : "title"}>
      Este titulo vai ter classe dinamica
     </h2>

     {/* CSS Modules */}
     <Title />
    </div>
  );
}

export default App
