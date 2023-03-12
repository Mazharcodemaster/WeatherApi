import React, { useEffect, useState } from "react"
import Style from '../styles/Home.module.css'
import { Input } from '@chakra-ui/react'
import Weather from "./weather"
import axios from "axios"

export default function Home() {
  const [cityName,setcityName]=useState('Faisalabad')
const [allData,setAllData]=useState({})

  const Searcher=async ()=>{
  
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=2cead19529c231f83c7ebda4f70cf5ce`;
    const response = await axios.get(url);
    // const weatherData = response.data;
    const {main,sky}=response.data.weather[0]
    const {temp,pressure,humidity}=response.data.main
    const {speed}=response.data.wind
    const {all}=response.data.clouds
    const {country,sunset}=response.data.sys
    const {name}=response.data

    const weatherAllData={
      main,sky,temp,pressure,humidity,speed,all,country,sunset,name,
    }
    
  setAllData(weatherAllData)
  }
   catch (error) {
    alert('Enter the correct spelling of city')
    console.error(error);
  }

  }
  useEffect(()=>{
    Searcher()
    },[])    
  
  return (
  <>
      <div className={Style.main}>
      {/* input */}
      <div className={Style.input}>
      <Input value={cityName} onChange={(e)=>setcityName(e.target.value)} className={Style.searcher} width='300px'height={'30px'}  variant='outline' placeholder='search' />
      <button onClick={Searcher} className={Style.btn}>Search</button>
      </div>
      <Weather allData={allData}/>

      </div>
          </>
  )

  }