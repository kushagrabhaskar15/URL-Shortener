import React, { useState } from 'react'

function Form() {
  const [url, setUrl] = useState("")
  const [result, setResult] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

try {
  const res = await fetch("http://localhost:8080/URL/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      longURL: url
    })
  })

    const data = await res.json()
    setResult(`${window.location.origin}/${data.shortURL}`)
    } catch (err) {
      setResult("Something broke. Obviously.")
    }
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} 
      className='border rounded shadow-md m-[5rem]'>
        <p className="font-bold text-2xl">Shorten Your URL</p>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
        />

        <button className="bg-red-500 hover:bg-green-500 cursor-pointer">
          Submit
        </button>
      </form>

      {result && (
        <p>
          Short URL: <a href={result}>{result}</a>
        </p>
      )}
    </div>
  )
}

export default Form