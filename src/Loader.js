import React from 'react'

const modal = {
  height: "70vh",
  width:"100vw",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
}

export default () => (
  <div style={modal}>
    <div style={{ display: 'flex', justifyContent: 'center', margin: '.5rem' }}>
    <div class="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  </div>
)