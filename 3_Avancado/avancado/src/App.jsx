import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './assets/car.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';

function App() {
  const [count, setCount] = useState(0)
  const name = "de";
  const [userName] = useState("Cris");

  return (
    <>
    <h1>Avancado em React</h1>
    {/* imagem em public */ }
    <div>
      <h1>Imagem em public</h1>
      <img src="/wallpaper.jpg" alt="Imagem em public"></img>
    </div>
      {/*Imagem em asset*/}
      <div>
        <h1>Imagem em assets</h1>
        <img src={Car} alt="Foto do meu primeiro carro no Canada"></img>
      </div>
      <div>
        <ManageData />
      </div>
      <div>
        <ListRender />
      </div>
      <div>
        <ConditionalRender />
      </div>
      <div>
        <ShowUserName name={userName}/>
      </div>
    </>
  )
}

export default App
