import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
// import { updateBook } from './methods/find'
import axios from 'axios';
import { updateBook } from './methods/find';
async function Udate(id){

        let res =  await axios.get(`http://localhost:5000/book/${id}`);
        let posts = res.data;
    
        return posts;
    }
    const Update = () => {
      
      let { id } = useParams();
    const [update,setUpdate]=useState({})
    // axios.get(`http://localhost:5000/book/${id}`).then(res=>setUpdate(res.data.book))
    const [image,setImage]=useState('') ;
    const [name,setName]=useState('') ;
    const [desc,setDesc]=useState('') ;
    const [author,setAuthor]=useState('') ;
    const [price,setPrice]=useState(0) ;
    useEffect( () => {
      Udate(id).then((data)=>setUpdate(data.book))    
    }, [])
    const handleNameChange = (e) => {
      e.preventDefault(); // prevent the default action
      setName(e.target.value); // set name to e.target.value (event)
    };
    const handleAuthorChange = (e) => {
      e.preventDefault(); // prevent the default action
      setAuthor(e.target.value); // set name to e.target.value (event)
    };
    const handleImageChange = (e) => {
      e.preventDefault(); // prevent the default action
      setImage(e.target.value); // set name to e.target.value (event)
    };
    const handleDescChange = (e) => {
      e.preventDefault(); // prevent the default action
      setDesc(e.target.value); // set name to e.target.value (event)
    };
    const handlePriceChange = (e) => {
      e.preventDefault(); // prevent the default action
      setPrice(e.target.value); // set name to e.target.value (event)
    };
    console.log(update.name)
  return (
    <div><label htmlFor="name">NAME:</label>
    <input type="text" id='name' name='name' placeholder='Enter book name' value={name ?name : update.name} onChange={handleNameChange}/><br />
    <label htmlFor="author">author:</label>
    <input type="text" id='author' name='author' placeholder='Enter book author' value={author ?author : update.author} onChange={handleAuthorChange}/><br />
    <label htmlFor="price">price:</label>
    <input type="number" id='price' name='price' placeholder='Enter book price' value={price ?price : update.price} onChange={handlePriceChange}/><br />
    <label htmlFor="desc">description:</label>
    <textarea name="desc" id="desc" cols="30" rows="10" value={desc ?desc : update.desc} onChange={handleDescChange}></textarea>
    {/* <input type="text" id='desc' name='desc' placeholder='Enter book desc...!' value={update.desc} /><br /> */}
    <label htmlFor="image">image:</label>
    <input type="text" id='image' name='images' placeholder='Enter image url of book' value={image ?image : update.image} onChange={handleImageChange}/><br />
    <button  onClick={()=>{updateBook(update._id)}}>UPDATE</button>
    </div>
    // update && update.map((book,i)=>(
        // <Book name={book.name} desc={book.desc} author ={book.author} price={book.price} image={book.image} key={i} idd={book._id} />
        // <h1 >{update.name}</h1>
      // ))
  )
}

export default Update