import React,{useState} from 'react'
import './Card.css'
import moment from 'moment'
import { useDispatch } from "react-redux";
import {FaBitbucket} from 'react-icons/fa'
import {deleteProduct} from '../redux/act'
import Update from './Update'
function Card  ({item ,id, deleteSuccess})  {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteProduct(item))
    deleteSuccess()
  }
  const [newData,setNewData] = useState(0)
  const [show,setShow] = useState(false);
  const handleChangeData = (e) => {
      setNewData(e.target.value)
  }

  const handleUpdate = () =>{
      setShow(!show);
  }
  console.log(item);
  const time = moment(item.createdAt).fromNow();
  const a = newData;
  console.log(a);
  return (
	<div className = 'card'>
    <div className = 'cardInfo'>
      <label>{item.title}</label>
      <label>{item.category.category}</label>
      <label>{time}</label>
    </div>
    <div className='card-amount'>
      <div className = 'today-amount'>Today Amount: {newData ? a : item.todayAmount}</div>
      <div className = 'amount-data'>Total Amount: {newData? item.totalAmount - a :item.totalAmount }</div>
      <div className = 'delete' onClick = {handleDelete}><FaBitbucket/></div>
      {show ? (
          <input onChange = {handleChangeData} value = {a} placeholder = 'Update new amount for today'/>
      ):null} 
      <button onClick = {handleUpdate}>Update</button>
    </div>
  </div>
  )
}

export default Card