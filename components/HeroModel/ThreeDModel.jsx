import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { Model } from './RoomThreed.jsx'
import ThreeDLights from '../ui/ThreeDLights'

export const ThreeDModel = () => {


  //   tablets screens  1024px 
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
const isMobile = useMediaQuery({ query: '(max-width: 768px)' })



  return (
    <Canvas
      camera={{ fov: 45, position: [0, 0, 8] }}
  
    >
    
{/*lights */}

      {/*  scalp/head placeholder */}

    
     

      {/* Controls for rotation/zoom */}
      <OrbitControls
        enableZoom={!isTablet}   // disables zoom on tablets
        enablePan={false}
        maxDistance={25}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />


      <ThreeDLights />

  <Model  scale = {isMobile? 0.5 :0.7 } 
  
  rotation ={[0, -Math.PI /4, 0]}
  
  />

    </Canvas> 
  )
}
