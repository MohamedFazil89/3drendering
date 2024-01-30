import { Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber';
import { Environment ,OrbitControls } from '@react-three/drei';
import Earth from '../public/Earth';

function earth() {

  return (
    <>
    <Canvas>
      <ambientLight  />
      <OrbitControls />
      <Suspense fallback={null}>
         <Earth />
      </Suspense >
      <Environment  preset='sunset' />
    </Canvas>


    </>
  )
}

export default earth
