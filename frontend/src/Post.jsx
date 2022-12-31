import React from 'react'
// import Forms from './Forms'
import {createBook} from "./methods/find"
import "./Post.css"
// const {createBook}=require("./methods/find")
const Post = (props) => {
  return (<>
    <label htmlFor="name">NAME:</label>
    <input type="text" id='name' name='name' placeholder='Enter book name' /><br />
    <label htmlFor="author">author:</label>
    <input type="text" id='author' name='author' placeholder='Enter book author' /><br />
    <label htmlFor="price">price:</label>
    <input type="number" id='price' name='price' placeholder='Enter book price' /><br />
    <label htmlFor="desc">description:</label>
    {/* <textarea name="desc" id="desc" cols="30" rows="10"></textarea><br /> */}
    <input type="text" id='desc' name='desc' placeholder='Enter book desc...!' /><br />
    <label htmlFor="image">image:</label>
    <input type="text" id='image' name='images' placeholder='Enter image url of book' /><br />
    <button className='btn btn-primary'  onClick={createBook}>Submit</button> 
    {/* <Forms/> */}
   </>
  )
}

export default Post