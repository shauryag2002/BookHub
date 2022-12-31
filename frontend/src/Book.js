import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteBook } from './methods/find'
import { Link } from 'react-router-dom'
import "./book.css"
const Book = (props) => {
  return (
      <div className='marginn'>
        <img className='width_height' src={props.image} alt={props.name} />
    <div className='name'>{props.name}</div>
    <div className='width'>{props.desc.slice(0,100)}</div>
    <div>{props.author}</div>
    <div>Price: Rs.{props.price}</div>
    <Link className='btn btn-primary' to={`/${props.idd}`}>UPDATE</Link>
    {/* <button onClick={()=>{updateBook(props.idd)}} >UPDATE</button> */}
    <button className='btn btn-primary' onClick={()=>{deleteBook(props.idd)}}>DELETE</button>
    </div>
    // <div>{props.name}</div>
  )
}

export default Book