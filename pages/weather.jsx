import React, { useEffect, useState } from 'react'
import Style from '../styles/Home.module.css'

const Weather = ({allData}) => {
  const [mydate,setDate]=useState()
  const [icon ,setIcon]=useState('')
   useEffect(()=>{
    var date=new Date().toLocaleString()
    setDate(date)

    },[])
    const {
      main,sky,temp,pressure,humidity,speed,all,country,sunset,name,
    }=allData
let sec=sunset
let time=new Date(sunset*1000)
let newdate=`${time.getHours()}:${time.getMinutes()}`
useEffect(()=>{
  if(main){
    switch(main){
      case 'Clouds':setIcon('wi wi-day-cloudy');break;
      case 'Haze':setIcon(' wi-fog');break;
      case 'Clear':setIcon(' wi-day-sunny');break;
      default:
      case 'Clouds':setIcon(' wi-day-sunny');break;
    }
  }
},[allData])


  return (
    <>
      <div className={Style.weatherPage}>
      {/* image icaon of weather */}
      <div className={Style.image}>
     <span className={Style.imageSun}><i className={`wi ${icon}`} style={{ fontSize: '5em' }}></i>
</span> 
    </div>
    {/* image information */}
    <div className={Style.weatherInfo}>
     {/* Info One */}
       <div className={Style.InfoOne}>
             <h1 className={Style.temp}>{temp}<sup>0</sup></h1>
             <h1 className={Style.cloud}>{main}</h1><br></br>
             <h1 className={Style.city}>{name},{country}</h1>
       </div>
       {/* info two */}
       <div className={Style.infoTwo}>
         <h1 className={Style.date }>{mydate}</h1>
       </div>
    </div>
      <div className={Style.weatherState}>
      <div className={Style.StateOne}>
        <p className={Style.sunSet}><i className={`wi wi-day-sunny`}></i></p>
        <p className={Style.time}>{newdate}:pm <br></br> SunSet</p>
        </div>
      <div className={Style.StateOne}>
        <span className={Style.sunSet}><i  className="wi wi-humidity"></i></span>
        <p className={Style.time}>{humidity}<br></br>Humidity</p>
      </div>
      
      <div className={Style.StateOne}>
        <span className={Style.sunSet}><i  className="wi wi-rain"></i></span>
        <p className={Style.time}>{pressure}<br></br>Pressure</p>
      </div>
      
      <div className={Style.StateOne}>
        <span className={Style.sunSet}><i  className="wi wi-strong-wind"></i></span>
        <p className={Style.time}>{speed}<br></br>Speed</p>
      </div>
      
       </div>
      {/* Last div */}
      </div>
    </>
  )
}

export default Weather
