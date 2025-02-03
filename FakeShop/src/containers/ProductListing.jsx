import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import {setProducts} from "../redux/actions/productAction";
import axios from 'axios';

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async ()=>{
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
  }
  useEffect(()=>{
    fetchProducts();
  },[]);

  return (
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing