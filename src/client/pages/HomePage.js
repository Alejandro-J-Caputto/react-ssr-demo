import React, { useState } from 'react'

export const HomePage = () => {
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
            <img src="https://reactjs.org/logo-og.png" width="200" alt="logo react" />
            <button onClick={handleMessage}>CLICK ME</button>
            
        </div>
    )
}
export default {
    component: HomePage
};
// export default HomePage