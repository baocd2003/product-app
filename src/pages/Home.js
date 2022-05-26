import React from 'react'
import NavSearch from '../component/NavSearch'
import './Home.css'
import ProductList from '../component/ProductList'
const Home = () => {
  return (
	<div className = 'home-container'>
		<NavSearch/>
		<ProductList/>
	</div>
  )
}

export default Home