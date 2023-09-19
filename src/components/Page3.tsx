import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

const Page3 = () => {

    const {state, dispatch} = useContext(ThemeContext)
    console.log(state);
    
  return (
    <div>
        <button onClick={()=>dispatch({type: "CHANGE_THEME"})}>Change Theme</button>
        <button onClick={()=>dispatch({type: "CHANGE_FONT",payload: 20})}>Change font Size</button>
    </div>
  )
}

export default Page3