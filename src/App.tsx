/** @format */

import React, { useState, MouseEvent } from 'react';
import Form from './comnpoment/form';
import logo from './logo.svg';

import FormLG from './LoginForm/formLG';
import './App.css';

// props
// state
// setState: asynchronous (batch update)
interface Product {
  id: number;
  name: string;
  quantity: number;
}

function App() {
  // functional component
  /*const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'T-shirt',
      quantity: 20,
    },
    {
      id: 2,
      name: 'Short',
      quantity: 50,
    },
  ]);

  const addProduct = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('e ', e);

    setProducts([
      ...products,
      { id: Date.now(), name: 'Long Sleeve Shirt', quantity: 30 },
    ]);
  };

  const reorderItem = (id: number) => {
    // code here

    setProducts((prevProducts) => {
      const productToMove = prevProducts.find((product) => product.id === id);
      if (productToMove) {
        const remainingProducts = prevProducts.filter(
          (product) => product.id !== id
        );
        return [productToMove, ...remainingProducts];
      }
      return prevProducts;
    });
  };*/
  return (
    
    <div className='App'>
      <FormLG></FormLG>
      {/* <Form firstname='AAA' lastname='BBB' /> */}
      {/*<button onClick={addProduct}>Add Product</button>
      <ul>
        {products.map((product) => (
          <li>
            <button onClick={() => reorderItem(product.id)}>
              <p>
                {product.name}{' '}
                <b>
                  <span>{product.quantity}</span>
                </b>
              </p>
            </button>
          </li>
        ))}
      </ul>*/}
    </div> 
  );
}

export default App;