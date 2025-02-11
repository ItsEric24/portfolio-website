import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'

function AnimatedSphere() {
  const sphereRef = useRef()

  return (
    <Sphere ref={sphereRef} args={[1, 100, 100]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#ffd700"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={1}
      />
    </Sphere>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedSphere />
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}