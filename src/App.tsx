import { useState } from 'react'
import './App.css'

function App() {
  function playSound(oscType: OscillatorType) {
    const ctx = new AudioContext()
    const o = ctx.createOscillator()
    o.type = oscType
    o.connect(ctx.destination)
    o.start()
    o.stop(2)
  }

  return (
    <div className="App">
      <button onClick={() => playSound("sine")}>Play Sine wave</button>
      <button onClick={() => playSound("square")}>Play Square wave</button>
      <button onClick={() => playSound("triangle")}>Play Triangle wave</button>
      <button onClick={() => playSound("sawtooth")}>Play Sawtooth wave</button>
    </div>
  )
}

export default App
