import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [values, setValues] = useState([]);
  const [weather, setWeather] = useState({});
  const [place, setPlace] = useState('Jaipur');
  const [thisLocation, setLocation] = useState('');

  const fetchWeather = async () => {
    const options = {
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather',
      params: {
        q: place,
        appid: import.meta.env.VITE_API_KEY,
        units: 'metric',
      },
    };
    try {
      const response = await axios.request(options);
      setLocation(response.data.name);
      setWeather({
        ...response.data,
        conditions: response.data.weather[0]?.description || 'N/A'
      });
    } catch (e) {
      console.error('Error fetching weather data:', e);
      alert(e.response?.data?.message || 'This place does not exist or an error occurred');
    }
  };
  const fetchforecastData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: {
            q: place,
            appid: import.meta.env.VITE_API_KEY,
            units: 'metric',
          },
      });
      setValues(response.data.list);
    } catch (error) {
      console.error('Error fetching other data:', error);
      alert('Error fetching other data. Please try again later.');
    }
  };

  useEffect(() => {
    fetchWeather(),fetchforecastData();
  }, [place]);

  return (
    <StateContext.Provider value={{
      weather,
      setPlace,
      values,
      thisLocation,
      place,
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
