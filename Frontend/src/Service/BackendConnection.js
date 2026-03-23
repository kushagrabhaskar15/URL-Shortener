const SHORTEN_URL = import.meta.env.VITE_SHORTEN_URL;
const CUSTOM_URL = import.meta.env.VITE_CUSTOM_URL;

export async function createShortURL(url){
  try{
    const res = await fetch(SHORTEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        longURL: url
      })
    });

    if(!res.ok){
      throw new Error(`Server Error ${res.status}`)
    }

    const data = await res.json();
    return data;
  }
  catch(err){
    console.log(`Something Broke in the connection:  ${err}`)
    throw err;
  }
};

export async function createCustomShortURL(enteredLongURL,enteredShortURL) {
  try{
    const res = await fetch(CUSTOM_URL,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        longURL: enteredLongURL,
        shortURL: enteredShortURL
      })
    });

    if(!res.ok){
      throw new Error(`Server Error: ${res.err}`);
    }

    const data = await res.json();
    return data;
  }
  catch(err){
    console.log(`Error: ${err}`);
    throw err;
  }
};