import React, { useState } from 'react'
import logo from '../../assets/img/react-logo.png';
export const Home = () => {
    const [planet, setPlanet] = useState('World')
    const handleMessage = () => {
        if(planet === 'World') {
            setPlanet('Patataas')
        } else {
            setPlanet('World')
        }
        return
    }
    return (
        <div>
            <h1>Hello {planet}</h1>
            <img src={logo} alt="logo react" />
            <button onClick={handleMessage}>CLICK ME</button>
            
        </div>
    )
}
export default Home;