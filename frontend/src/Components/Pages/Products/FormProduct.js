import React from 'react';
import './Css/Style.css';
import { ProductProvider } from './Components/ProductContext';
import Form from './Components/Form';

function FormProduct() {
  return (
    <div className="container-table">
      <ProductProvider>
        <Form/>
      </ProductProvider>
    </div>
  );
}

export default FormProduct;
