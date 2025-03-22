import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useState, useRef } from 'react'
import { Object3D } from 'three'
import styles from './HeroScene.module.css'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normaliser la position entre -1 et 1
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = (event.clientY / window.innerHeight) * 2 - 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mousePosition
}

function Smartphone() {
  const { scene } = useGLTF('/models/smartphone.glb')
  const mousePosition = useMousePosition()
  const isMobile = useIsMobile()
  const ref = useRef<Object3D>(null)

  const tiltAmount = 0.15
  const baseRotationX = -Math.PI/6
  const baseRotationY = Math.PI/6

  useFrame((state) => {
    if (!ref.current) return
    const baseY = isMobile ? -1.4 : -0.2
    const floatOffset = -Math.sin(state.clock.elapsedTime * 1) * 0.08
    ref.current.position.y = baseY + floatOffset
  })

  return (
    <primitive 
      ref={ref}
      object={scene} 
      scale={isMobile ? 0.3 : 0.4}
      position={[isMobile ? -1.5 : -4, -0.2, 1]}
      rotation={[
        baseRotationX + mousePosition.y * tiltAmount,
        baseRotationY + mousePosition.x * tiltAmount,
        0
      ]}
    />
  )
}

function Laptop() {
  const { scene } = useGLTF('/models/windows_10_laptop.glb')
  const mousePosition = useMousePosition()
  const isMobile = useIsMobile()
  const ref = useRef<Object3D>(null)

  const tiltAmount = 0.15
  const baseRotationX = Math.PI/6
  const baseRotationY = Math.PI/2 - Math.PI/6

  useFrame((state) => {
    if (!ref.current) return
    const floatOffset = Math.sin(state.clock.elapsedTime * 1) * 0.08
    ref.current.position.y = 0.5 + floatOffset
  })

  return (
    <primitive 
      ref={ref}
      object={scene} 
      scale={12}
      position={[isMobile ? 1.5 : 4, 0.5, 0]}
      rotation={[
        baseRotationX + mousePosition.y * tiltAmount,
        baseRotationY + mousePosition.x * tiltAmount,
        0
      ]}
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
