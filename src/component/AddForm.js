import React from 'react'
import {useState} from 'react'
import {FaCaretDown} from 'react-icons/fa'
import { useDispatch } from "react-redux";
import {addProduct} from '../redux/act'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
function AddForm  ()  {
  const [title,setTitle] = useState('');
  const [totalAmount,setTotalAmount] = useState('');
  const [category,setCategory] = useState();
  const [catOpen,setCatOpen] = useState(false);
  const [todayAmount,setTodayAmount] = useState('');
  const [back,setBack] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = [
    { 
      id:1, 
      category:'Food'
    }, 
    { 
      id:2, 
      category:'Computers'
    }, 
    { 
      id:3, 
      category:'Vehicles'
    }, 
    { 
      id:4, 
      category:'Machines'
    }
  ]
  const handleChangeTitle = (e) => {  
      setTitle(e.target.value);
  }

  const handleChangeAmount = (e) => {  
    setTotalAmount(e.target.value);
  }

  const handleTodayAmount = (e) => { 
    setTodayAmount(e.target.value);
  }

  const openDrop = () => {
    setCatOpen(!catOpen);
    console.log(catOpen)
  }

  const handleCategory = (e) => {
      setCategory(e);
      setCatOpen(false)
  }

  const handleAdd = () => {
    if(title === '' || totalAmount === '' || !category){
      console.log('abc');
      const notice = () => toast('Please enter data')
      notice();
      return;
     }
     else{
      navigate('/')
    }
    const data = {
      title,
      totalAmount,
      todayAmount,
      category,
      createdAt:new Date()
    };
    dispatch(addProduct(data))
  }
  return (
	<div className = 'add-form'>
    <ToastContainer
      position="top-right"
      autoClose={1400}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      <div className = 'title'>
        <label>Title</label>
        <input value = {title} onChange = {handleChangeTitle}/>
      </div>
      <div className = 'amount'>
       <label>Total Amount</label> 
        <input value = {totalAmount} onChange = {handleChangeAmount}/>
      </div>
      <div className = 'todayAmount'>
        <label>Today Amount</label>
        <input value = {todayAmount} onChange = {handleTodayAmount}/>
      </div>
      <div className = 'category-container'>
        <div className = 'category'>
          <div className = 'cat-dropdown' onClick = {openDrop}>
            <label>{category ? category.category : 'Category'}</label>
            <FaCaretDown/>
          </div>
          {catOpen && (<div className = 'cat-container'>
            {categories.map(e => (
              <div className = 'cat-item' key = {e.id} onClick = {() => handleCategory(e)}>
                <label>{e.category}</label>
              </div>
            ))}
          </div>)}
        </div>
      </div>
      <div className = 'form-add' onClick = {handleAdd}>Add</div>
  </div>
  )
}

export default AddForm