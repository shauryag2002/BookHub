import React from 'react'
import Book from './Book';
import  axios from 'axios';
import { useState,useEffect } from 'react';
async function renderPosts () {

    let res =  await axios.get('https://bookhubapi-shauryag2002.vercel.app/book');
    let posts = res.data;
    
    return posts;
}
const Home = () => {
    const [books, setBooks] = useState([])
  useEffect(() => {
 renderPosts().then((data)=>setBooks(data.book))    
}, [])
    // let books;
  return (
       books && books.map((book,i)=>(
          <Book name={book.name} desc={book.desc} author ={book.author} price={book.price} image={book.image} key={i} idd={book._id} />
        ))
  )
}

export default Home