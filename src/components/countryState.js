import { useState } from 'react';
const countries = [{
  name: 'India' , states:[
    {
      name: 'indore'
    },
    {
      name: 'pune'
    }
  ]
},
{
  name: 'America' , states:[
    {
      name: 'new york'
    },
    {
      name: 'stanly'
    }
  ]
}
]
function CountryState() {
  const [Country , setCountry] = useState()
  const [Cities , setCity] = useState([])
  const [city , setCit] = useState()

  function handleCountry(event){
    setCountry(event.target.value)
    setCity(countries.find(ctr => ctr.name === event.target.value).states);
  }

  function handleCity(event){
    setCit(event.target.value)
  }
  return (
    <>
    <div className='justify-content-center d-flex w-100 vh-100 bg-dark text-white'>
    <div className='w-50 mt-5'>
    <h3>Select Country and Cities </h3>
    <select className='form-control' onChange={handleCountry}>
      <option>--Country--</option>
      {countries.map(ctr => (
<option value={ctr.name}>{ctr.name}</option>
      ))}
    </select>
    <br/>   
    <select className='form-contrl'  onChange={handleCity}>
    <option>--city--</option>
    {Cities.map(c=>(
      <option value={c.name}>{c.name}</option>
    ))}
    </select>
    </div>
     </div>
   
    </>
    
  );
}

export default CountryState;
