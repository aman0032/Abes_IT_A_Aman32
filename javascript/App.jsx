import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )

//   import Card from './Components/Card'
//   function App(){
//     retrn (
//       <div>
//         <Card></Card>
//       </div>
//     )
//   }

import './card.css'
function Card(props){
  return (
    <div id="adi">
      <img src="https://i.pinimg.com/736x/dd/e8/cd/dde8cd9319441299226c6da45f5682f5.jpg"></img>


    </div>
  )
}
}

import './App.css'
import {Navbar1} from './Components/Navbar'
import {Pricing} from './Components/Pricing'
import {Grid} from './Components/Grid'
import { Card } from './Components/Card'
import UseeState from './Components/UseeState'
import Count from './Components/Count'
import Link1 from './Components/Link1'
 function App() {
  return (
    <div>
      {/* Abes College
      <Navbar1 />
      <Grid /> 
      <UseeState /> */}
      <Link1 />
      <Count />
    </div>
  )
 }    

export default App