import React from 'react'
import Card from './Card'
import {useSelector} from 'react-redux'
import {toast, ToastContainer} from 'react-toastify'
import './ProductList.css'
const ProductList = () =>  {
  const {product : list ,query} = useSelector((state) => state.products)
  const needSearch = list.filter(item => item.title.includes(query))
  console.log(list.length);
   const deleteSuccess = () => toast.success('Product deleted successfully')
  return (
	<div className="product-list">
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
     {needSearch.length ? needSearch.map(item => (
       <Card item = {item} deleteSuccess = {deleteSuccess} />
     )):<div>abc</div>}
  </div>
  )}

export default ProductList