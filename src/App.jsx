import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getStarships from './services/sw-api'
import Card from './Components/Card'


function App() {

  const [ships, setShips] = useState([])
  let starShips;
  


  
  useEffect(() => {

    async function getShips() {
      starShips = await getStarships();
      setShips(starShips)
    }
    getShips();
    
    return () => {
      console.log('1')
    }
    
  }, [])




  return (
    <>
      <div id='box'>
        {
          
        ships.map((s, i) => {
          return <Card key={i} name={s.name} />
        })
        }
      </div>
      
    </>
  )
}

export default App
