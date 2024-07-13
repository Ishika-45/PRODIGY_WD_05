import { useState } from 'react'
import './App.css'
import search from './assets/icons/search.svg'
import { useStateContext } from './Context'
import {BackgroundLayout, WeatherCard, MiniCard} from './Components'


function App() {

  const [input, setInput] = useState('');
  const {weather, thisLocation,values, place, setPlace} = useStateContext();

  const submitCity = () => {
    setPlace(input)
    setInput('')
  }
  
  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src = {search} alt = "search" className='w-[1.5rem] h-[1.5rem]'/>
          <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              submitCity()
          }
          }} type = "text" placeholder='Search City'className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)}/>
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className='w-full h-full flex flex-row flex-wrap justify-center items-center'>
         <WeatherCard
      temperature={weather.main?.temp} 
      windspeed={weather.wind?.speed} 
      humidity={weather.main?.humidity}
      place={thisLocation}
      heatIndex={weather.main?.feels_like}
      iconString={weather.weather?.[0].description}
      conditions={weather.weather?.[0].main}
    />
  

      <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
          {values && values.map((value, index) => (
            <MiniCard
              key={index}
              time={value.date} 
              temp={value.day.avgtemp_c} 
              risetime={value.astro.sunrise}
              settime={value.astro.sunset}
              iconString={value.day.condition.text}
            />
          ))}
        </div>
      </main>
    </div>   
  )
}

export default App
