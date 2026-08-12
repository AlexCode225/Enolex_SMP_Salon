import React from 'react'

const ThreeDLights = () => {
  return (
    <>
      {/* Gentle ambient fill so shadows aren’t pitch black */}
      <ambientLight intensity={0.3} color="#ffffff" />

      {/* Strong key light angled from the front to highlight scalp detail */}
      <directionalLight
        position={[0, 10, 10]}
        intensity={2}
        color="#ffffff"
        castShadow
      />

      {/* Overhead spotlight */}
      <spotLight
        position={[0, 15, 0]}       // directly above
        angle={0.4}                 // wider cone to cover scalp
        penumbra={0.8}              // softer edges
        intensity={6}               // brighter for scalp visibility
        color="#fdfdfd"
        castShadow
      />

      {/* Rim light from behind to separate mannequin from background */}
      <directionalLight
        position={[0, -5, -10]}
        intensity={1.2}
        color="#a0c8ff"
      />

      {/* Subtle balanced fill */}
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ffe0b3" />
      <pointLight position={[5, 5, -5]} intensity={0.5} color="#b3ffd9" />
    </>
  )
}

export default ThreeDLights
