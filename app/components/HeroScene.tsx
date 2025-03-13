import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { Group } from 'three'
import styles from './HeroScene.module.css'

function Smartphone() {
  const { scene } = useGLTF('/models/smartphone.glb')
  const ref = useRef<Group>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.2
  })

  return (
    <primitive 
      object={scene} 
      scale={0.4}
      position={[-4, -0.2, 1]}
      rotation={[-Math.PI/6, Math.PI/6, 0]}
    />
  )
}

function Laptop() {
  const { scene } = useGLTF('/models/windows_10_laptop.glb')
  const ref = useRef<Group>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = Math.PI/2 + state.clock.elapsedTime * 0.1
  })

  return (
    <primitive 
      object={scene} 
      scale={12}
      position={[4, 0.5, 0]}
      rotation={[Math.PI/6, Math.PI/2 - Math.PI/6, 0]}
    />
  )
}

function LoadingFallback() {
  return null
}

export default function HeroScene() {
  return (
    <div className={styles.sceneContainer}>
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 40,
          near: 0.1,
          far: 100
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1.8} />
        <directionalLight position={[3, 3, 2]} intensity={2} />
        <directionalLight position={[-3, 3, -2]} intensity={1.5} />
        <pointLight position={[4, 2, 3]} intensity={1} />
        <pointLight position={[-4, 1, -2]} intensity={0.8} color="#ffffff" />
        <pointLight position={[0, 3, 0]} intensity={1} color="#ffffff" />
        <pointLight position={[-4, -1, 1]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-3.8, 0, 1.2]} intensity={0.6} color="#ffffff" />
        <pointLight position={[-4.2, -0.2, 0.8]} intensity={0.6} color="#ffffff" />
        <pointLight position={[-3.8, -0.4, 1]} intensity={0.6} color="#ffffff" />
        <Suspense fallback={<LoadingFallback />}>
          <Laptop />
          <Smartphone />
        </Suspense>
      </Canvas>
    </div>
  )
}
