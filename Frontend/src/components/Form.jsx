import React, { useState,useEffect } from 'react'
import { createCustomShortURL, createShortURL } from '../Service/BackendConnection';

function Form() {
  const [longURL, setLongURL] = useState("")
  const [shortURL, setShortURL] = useState("")
  const [result, setResult] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("SUBMIT HIT",longURL,shortURL);
  try {
    if(shortURL.length==0){
      const data = await createShortURL(longURL);
      console.log("RESPONSE",data);
      setResult(`${window.location.origin}/URL/${data.shortURL}`);
    }
    else{
      const data = await createCustomShortURL(longURL,shortURL);
      console.log("RESPONSE",data);
      setResult(`${window.location.origin}/URL/${data.shortURL}`);
    }
  } catch (err) {
    console.log(err);
    setResult("Something broke. Obviously.");
  }
};

const handleChangeLongURL = (e)=>{
    setLongURL(e.target.value);
};

const handleChangeShortURL = (e)=>{
    setShortURL(e.target.value);
};

  return (
    <div id='form' className='bg-red-400 flex justify-center items-center h-screen'>
      <form className='grid  grid-cols-1 grid-rows-3 justify-items-start items-start bg-blue-300 rounded-lg border h-64 w-64' onSubmit={handleSubmit}>
        <p className='row-span-1 self-center text-white font-bold px-8 text-lg mx-auto'>Generate Short Link</p>
        <div className='grid-row-2 mx-auto'> 
        <p className='font-bold italic'>Enter The URL:</p>
        <input 
          type='text'
          id="longURL"
          value={longURL}
          className='bg-white border mx-auto'
          required
          onChange={handleChangeLongURL}/>
        <p className='font-bold italic'>Enter The short url code:</p>
        <input 
          type='text'
          id="shortURL"
          value={shortURL}
          placeholder='Enter a 7 digit Code'
          className='bg-white border mx-auto'
          onChange={handleChangeShortURL}/>
        </div>
        <button 
          type='submit'
          className='grid-row-3 mx-auto flex justify-center items-center bg-white hover:bg-yellow-100 rounded-md border px-px py-0.5'>
          Submit
        </button>
      
      </form>
      {result.length==0?
      <></>
      :
      <div>
        <p> Generated Short Url: {result}</p>  
      </div>
      }
    </div>
  )
}

export default Form