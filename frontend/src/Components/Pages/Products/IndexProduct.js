import React from 'react';
import './Css/Style.css';
import { ProductProvider } from './Components/ProductContext';
import ListProduct from './Components/ListProduct';

function IndexProduct() {
  return (
    <div className="container-table">
      <ProductProvider>
        <ListProduct/>
      </ProductProvider>
    </div>
  );
}

export default IndexProduct;
