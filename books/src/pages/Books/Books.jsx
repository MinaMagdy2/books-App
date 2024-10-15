import React from 'react'
import Loading from '../../Component/Loading/Loading'
import axios from "axios";
import {  useEffect, useState } from "react";
export default function Books() {
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
    <div>
      <div className="row">
        
      { books.length?
        books.map((book)=>(   
         <div className="col-md-5 m-auto h-300 w-240">
           <img className='w-100' src={book.image} alt="" />
           <h4>{book.authors}</h4>
           <p>{book.subtitle}</p>
           <a href={book.url}>Refrence</a>

          </div>
          
      )) : <Loading/>}
      
     
      </div>
  
        
        
    </div>
  );
}
