import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'

export const ThreeDModel = () => {
  // for  tablets as screens up to 1024px wide
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
const isMobile = useMediaQuery({ query: '(max-width: 768px)' })



  return (
    <Canvas
      camera={{ fov: 45, position: [0, 0, 15] }}
    //  style={{ width: '100%', height: '600px', background: 'linear-gradient(to bottom, #121112, #eaeaea)' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <spotLight position={[0, 10, 10]} angle={0.3} intensity={1.2} castShadow />

      {/*  scalp/head placeholder */}
      <mesh>
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial color="#ebd1e9" />
      </mesh>

      {/* Controls for rotation/zoom */}
      <OrbitControls
        enableZoom={!isTablet}   // disables zoom on tablets
        enablePan={false}
        maxDistance={30}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}
