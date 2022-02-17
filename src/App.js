import React,{useState,useEffect} from 'react';
import Nav from './components/Nav';
import { getAllProducts,deleteProduct } from '../src/config/Myservice'
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Home from './components/Home';
import Addproduct from './components/Addproduct';
function App() {
  const [search , setsearch]= useState("text search");
  const [datalist , setdatalist]= useState([]);
  const searchtext = (text)=>{
    setsearch(text)
  }
  useEffect(()=>{
    getAllProducts()
    .then(res=>{
    
      setdatalist(res.data);
     
    })
 },[])

  return (
    <>
    <Router>
      <Nav  textsearch = {searchtext}/>
      <section className='container'>
           <Routes>
               <Route path="/" element={<Home data={search} datalist={datalist}/>} />
               <Route path="/addproduct" element={<Addproduct />} />
               <Route path="/addproduct/:id" element={<Addproduct />} />
           </Routes>
      </section>
      </Router>
    </>
    
  );
}

export default App;
