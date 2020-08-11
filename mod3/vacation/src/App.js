import React from 'react'
import Card from './Card'
import vacationSpots from './vacationSpots'

function App() {
  const vacationCard = vacationSpots.map((spot, index) =>
    <Card 
      key={spot.place + index} 
      place={spot.place} 
      price={spot.price} 
      timeToGo={spot.timeToGo}
    />
  )
  
  return (
    <div className={"app"}>
      {vacationCard}
    </div>
  )
}

export default App