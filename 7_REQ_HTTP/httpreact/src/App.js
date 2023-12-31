import './App.css';

import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products";


function App() {
  const [products, setProducts] = useState([]);

  //1 - resgatando dados
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  console.log(products);
  return (
    <div className='App'>
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
