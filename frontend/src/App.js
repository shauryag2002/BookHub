// import logo from './logo.svg';
// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import axioss from 'axios';
// import Route from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import {  
  // BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';  
import { useEffect } from 'react';
// import Book from './Book';
import Post from './Post';
// import { Axios } from 'axios';
import Home from './Home';
import About from './About';
import Update from './Update';
// import { Navbar } from 'react-bootstrap/Navbar';
// import Navbar from './Navbarr';
// import Navbarr from './Navbarr';
async function renderPosts () {

    let res =  await axios.get('https://bookhubapi-shauryag2002.vercel.app/book');
    let posts = res.data;
    
    return posts;
}
function App() {
  // const [books, setBooks] = useState([])
  useEffect(() => {
 renderPosts().then((data)=>console.log(data.book))    
}, [])
// console.log(books)
  return (<div>
    <nav>
        <ul  className="navbar">
            
            <li className="marginx"><Link to="/">BookHub</Link></li>
            <li className="marging"><Link to="/"> Home</Link></li>
            <li className="margin"><Link to="/about">About</Link></li>
            <li className="margin"><Link to="/add">ADD</Link></li>
            {/* <li className="margin"><a href="/services">services</a></li> */}
            {/* <li className="margin"> */}
          {/* <Routes >
              <Route path='/book' element={<Post/>}/>
          </Routes> */}
              {/* </li> */}
        </ul>
    </nav>
    {/* <Navbarr/> */}
    <div className='flex'>

    <Routes >
              <Route path='/add' element={<Post/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/:id' element={<Update/>}/>

          </Routes>
    </div>
    
  </div>)
}

export default App;
