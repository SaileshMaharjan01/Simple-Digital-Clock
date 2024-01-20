import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const time=new Date().toLocaleTimeString()
  const[ctime,setCtime]=useState(time)
  useEffect(()=>{
    const interval=setInterval(()=>{
      setCtime(new Date().toLocaleTimeString())
    },1000)
  
    return ()=>clearInterval(interval)
  },[])
  

  return (
    <div className="app">{ctime}</div>
  )
}

export default App