import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

function App() {

  const api={
    key:'071d84434570415379cb5d58621f038c',
    base:'https://api.openweathermap.org/data/2.5/',
}

const [search,setSearch]=useState("")
const [weather,setWeather]=useState({})
const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === "404") {
          // Handle not found error
          console.error("City not found");
        } else {
          console.log(result);
          setWeather(result);
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  return (
 <>
      <div className='App w-full min-h-screen flex items-center justify-center bg-sky-400 '>
          <header className='App-header '>
         {/*Header*/}
         <h1 className='text-2xl mb-20'>Weather App</h1>
<div className='bg-sky-400  mb-10 flex flex-wrap'>
         {/*Search Box*/}
         <input type='text' placeholder='Search...'  onChange={(e)=>setSearch(e.target.value)}
          className=' h-10 bg-gray-800 text-white border border-gray-600 rounded-l-md px-4'
         />
<button onClick={searchPressed} className='bg-gray-800 text-white rounded-r-md px-4 py-2 pl-1'>Search</button>

</div>
<div className='mb-40 bg-gray-100 rounded-md '>
   <p>{weather.name && `Location: ${weather.name}`}</p>
<p>{weather.main && `Temperature: ${weather.main.temp}°C`}</p>
<p>{weather.weather && `Condition: ${weather.weather[0].main}`}</p>
<p>{weather.weather && `Description: ${weather.weather[0].description}`}</p>
<p>{weather.wind && `Wind Speed: ${weather.wind.speed}`}</p>
</div>
  </header>
      </div>
      
      </>
  )
}

export default App
