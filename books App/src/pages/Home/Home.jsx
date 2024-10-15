import React from 'react'
import Loading from '../../Component/Loading/Loading'
import axios from "axios";
import {  useEffect, useState } from "react";
export default function Home() {
  let [books, setBooks] = useState([]);
 useEffect(()=>{
  getData();
 },[])
 
 async function getData(){
  let {data:{books:fetchBooks}}= await axios.get('https://www.dbooks.org/api/recent'
  )
  // .then(({data:{books:fetchBooks}})=>{console.log({books:fetchBooks})   
  // }).catch((err)=>{console.log(err)})
  setBooks(fetchBooks)
  console.log(fetchBooks)
  
 }
 
 
  return (
    <div className="container">
     
      <div className="row">
        
      { books.length?
        books.map((book)=>(   
         <div className="col-md-3">
           <img className='w-100' src={book.image} alt="" />
           <h5>{book.title}</h5>
           <p>{book.authors}</p>
          </div>
          
      )) : <Loading/>}
      
     
      </div>
  
        
        
    </div>
  );
}
