// import { useState } from 'react'
import './App.css'

function App() {
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()

  const osc = ctx.createOscillator()

  osc.connect(ctx.destination)



  console.log(ctx.state)


  return (
    <div className="App">
      <button onClick={() => {
        osc.start()
        osc.stop(2)
        osc.onended = () => {
          console.log(ctx.state)
        }
      }}> Start</button >
    </div >
  )
}

// function App() {
//   let ctx = new (window.AudioContext || (window as any).webkitAudioContext)()

//   function playSoundWave(oscType: OscillatorType) {
//     const o = ctx.createOscillator()
//     o.type = oscType
//     o.connect(ctx.destination)
//     o.start()
//     o.stop(2)
//   }

//   function Oscillator(this: any, frequency: number, detune: number) {
//     this.osc = ctx.createOscillator()
//     this.osc.type = 'sawtooth'
//     this.osc.frequency.value = frequency
//     this.osc.detune.value = detune
//     this.osc.connect(ctx.destination)
//     this.osc.start()
//     this.osc.stop(3)
//   }

//   return (
//     <div className="App">
//       <button onClick={() => {
//         const osc1 = new Oscillator(440, 0);
//         const osc2 = new Oscillator(440, 15);
//       }
//       }>Turn on synth</button>
//     </div>
//   )
// }

export default App