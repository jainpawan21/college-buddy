import React from 'react'
import './Loader.css'
export default function Loader() {
  return (
    <div style={{
      height: '88vh',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
     <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
