import React, { useState,useEffect } from 'react'
import { createShortURL } from '../Service/BackendConnection';

function Form() {
  const [url, setUrl] = useState("")
  const [result, setResult] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("SUBMIT HIT",url);
  try {
    const data = await createShortURL(url);
    console.log("RESPONSE",data);
    setResult(`${window.location.origin}/URL/${data.shortURL}`);
  } catch (err) {
    console.log(err);
    setResult("Something broke. Obviously.");
  }
};

const handleChange = (e)=>{
    setUrl(e.target.value);
};

  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='grid grid-cols-1 grid-rows-3 justify-items-start items-start bg-blue-300 rounded-lg border h-[15rem] w-[15rem]' onSubmit={handleSubmit}>
        <p className='row-span-1 self-center text-white font-bold px-[2rem] text-lg mx-auto'>Generate Short Link</p>
        <div className='grid-row-2 mx-auto'> 
        <p className='font-bold italic'>Enter The URL:</p>
        <input 
          type='text'
          id="longURL"
          value={url}
          className='bg-white border mx-auto'
          onChange={handleChange}/>
        </div>
        <button 
          type='submit'
          className='grid-row-3 mx-auto flex justify-center items-center bg-white hover:bg-yellow-100 rounded-md border px-[1rem] py-0.5'>
          Submit
        </button>
        
      {result.length==0?
      <></>
      :
      <div>
        <p> Generated Short Url: {result}</p>  
      </div>
      }
      </form>
    </div>
  )
}

export default Form