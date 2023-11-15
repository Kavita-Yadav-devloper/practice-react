import { useState } from 'react';
const countries = [{
    name: 'India' , states:[
      {
        name: 'Madhya pradesh',
        cities:['Indore','Bhopal', 'Ujaain','Harda' , 'dewas']
      },
      {
        name: 'Gujrat',
        cities:['Surat','Vadodra','Ahamdabad' ,'Jaam Nagar', 'Gandhi Nagar']
      },
      {
        name: 'Uttar Pradesh',
        cities:['Kanpur','Aagra', 'Bareli']
      }
    ]
  },
  {
    name: 'America' , states:[
      {
        name: 'new york',
        cities:['ab' , 'bc' , 'cd']
      },
      {
        name: 'stanly',
        cities:['ef', 'gh' ,'ij']
      }
    ]
  },{
    name : 'Pakistan' , states:[
      {
        name : 'karachi',
        cities:['paler' , 'nipon' ,'dheka']
      }
    ]
  }
  ]
const CountryStateCity = () => {
  const [country , setCountry] = useState('--Country--')
  const [state , setState] = useState('--State--')
  const [city , setCity] = useState('--City--')
  const [states , setStates] = useState([])
  const [cities , setCities] = useState([])

  const  changeCountry = (event) => {
    setCountry(event.target.value)
    setStates(countries.find(ctr => ctr.name === event.target.value).states);
  }

  function changeState(event){
    setState(event.target.value)
    setCities(states.find(state => state.name === event.target.value).cities)
  }

  function changeCity(event){
    setCity(event.target.value)
  }
 return (
          <>
          <div className='justify-content-center d-flex w-100 vh-100 bg-dark text-white'>
          <div className='w-50 mt-5'>
          <h3>Select Country and State and cities </h3>
          <select className='form-control'  value={country} onChange={changeCountry}>
            <option>--Country--</option>
            {countries.map((ctr) => (
             <option value={ctr.name}>{ctr.name}</option>
            ))}
          </select>
          <br/>   
          <select className='form-control' value={state} onChange={changeState}>
              <option>--State--</option>
              {states.map((state) =>  (
              <option value={state.name}>{state.name}</option>
              ))}
          </select>
      
          <select className='form-control' value={city} onChange={changeCity}>
          <option>--City--</option>
          {cities.map(city=>(
            <option value={city}>{city}</option>
          ))}
          </select>
          </div>
          </div>
          </>
 )
}

export default CountryStateCity;
