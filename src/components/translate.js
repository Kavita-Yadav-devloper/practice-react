import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios';

const Translate = () => {
  const[options, setOptions] = useState([])
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(()=>{
    axios.get('https://libretranslate.com/languages',
    {headers:{'accept': 'application/json'}}).then(res=>{
      console.log(res.data)
    })
  })

  
  return (
    <>
      <div className='App'>
        <div>
        From:
        <select>
          {<option value=""></option>}
          
        </select>
        To:
        <select>
          <option value='1'>first</option>
        </select>
      </div>
      <div>
        <textarea cols='50' rows='8'></textarea>
        </div>
        <div>
        <textarea cols='50' rows='8'></textarea>
        </div>
      <div>
        <button>Translate</button>
      </div>
      </div>
    </>
  )
}

export default Translate
