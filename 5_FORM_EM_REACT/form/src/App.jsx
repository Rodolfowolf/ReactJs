
import './App.css';
import MyForm from './components/MyForm';

function App() {



  return (
    <div>
      <h2>Forms</h2>
      <MyForm user={{name: "Rodolfo", email:"rodolfo@gmail.com", bio:"Sou DevOps", role:"admin"}}/>
    </div>
  );
}

export default App
