import React from 'react'
import ParticleBackground from 'react-particle-backgrounds'

const MyComponent = function() {

  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 100,
      height: 200,
      useBouncyWalls:true,
    },
    particle: {
      particleCount: 300,
      color: "#fff",
      minSize: 4,
      maxSize: 3
    },
    velocity: {
      minSpeed: 0.2,
      maxSpeed: 0.4
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.6,
      opacityTransitionTime: 10000
    }
  }

  return (
    <ParticleBackground settings={settings}/>
  )
}

export default MyComponent