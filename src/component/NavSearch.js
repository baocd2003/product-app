import React from 'react'
import {useState} from 'react'
import './Nav.css'
import 'font-awesome/css/font-awesome.min.css'
import { useDispatch } from 'react-redux'
import {FaSearch} from 'react-icons/fa'
import {FaPlusCircle,FaWindowClose,FaAngleLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {searchProduct} from '../redux/act'
const NavSearch = () => {
  const dispatch = useDispatch()
  const [query,setQuery] = useState('');
  const handleQuery = (e) => {
	setQuery(e.target.value);
	dispatch(searchProduct(e.target.value))
  }
  return (
	<>
		{window.location.pathname === '/'?
		<div className="nav-search">
			<div className = 'search-bar'>
			<FaSearch/>
			<input 
				value = {query}
				placeholder="Search for product"
				onChange = {(e) => { 
					handleQuery(e)
				}}
			/>
			
			</div>
			<Link to  = '/addProduct'>
			<div className = "add-button">
				<div className = 'add'>
					Add
				</div>
				<FaPlusCircle/>
			</div>
			</Link>	
		</div>:
		(
			<div className = 'addPage'>
				<Link to = '/'>
				<div className = 'back-but'>
					<FaAngleLeft/>
					<label>
						Back
					</label>
				</div>
				</Link>
				<div className = 'cancel-but'>
					<FaWindowClose/>
					<label>Cancel</label>
				</div>
			</div>
		)}	
		</>
  )
}

export default NavSearch