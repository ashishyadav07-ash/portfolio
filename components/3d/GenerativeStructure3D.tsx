"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { WebGLCanvas } from "./WebGLCanvas";

const GenerativeMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerWireRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        state.mouse.x * 0.4 + time * 0.08,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -state.mouse.y * 0.25,
        0.05
      );
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.18;
      meshRef.current.rotation.z += delta * 0.1;
      meshRef.current.scale.setScalar(1 + Math.sin(time * 1.1) * 0.04);
    }
    if (outerWireRef.current) {
      outerWireRef.current.rotation.y -= delta * 0.12;
      outerWireRef.current.rotation.x += delta * 0.06;
    }
    if (torusRef.current) {
      torusRef.current.rotation.z += delta * 0.14;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.8} color="#FAF8F3" />
      <directionalLight position={[4, 5, 4]} color="#FFFFFF" intensity={1.5} />
      <pointLight position={[3, 3, 3]} color="#3155FF" intensity={2} distance={8} />
      <pointLight position={[-3, -3, 2]} color="#FF6B5A" intensity={1.5} distance={8} />

      {/* Central Morphing Generative Core - Translucent White Glass & Cobalt */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshStandardMaterial
            color="#FFFFFF"
            transparent
            opacity={0.65}
            roughness={0.12}
            metalness={0.15}
          />
        </mesh>
      </Float>

      {/* Outer Evolving Electric Cobalt Blue Wireframe Cage */}
      <mesh ref={outerWireRef}>
        <dodecahedronGeometry args={[1.65, 0]} />
        <meshStandardMaterial
          color="#3155FF"
          wireframe
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Lavender Blue Orbital Ring */}
      <mesh ref={torusRef} position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[1.85, 0.02, 16, 48]} />
        <meshStandardMaterial
          color="#AAB8FF"
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>

      {/* Small Coral Micro Indicator Node */}
      <mesh position={[1.3, 0.8, 0.5]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial
          color="#FF6B5A"
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
};

export const GenerativeStructure3D: React.FC<{ className?: string }> = ({
  className = "w-full h-[300px] md:h-[380px]",
}) => {
  return (
    <WebGLCanvas
      className={className}
      camera={{ position: [0, 0, 5.2], fov: 44 }}
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border-2 border-cobalt/30 animate-spin-slow flex items-center justify-center">
            <span className="font-mono text-xs text-cobalt font-bold">OPENAI CORE</span>
          </div>
        </div>
      }
    >
      <GenerativeMesh />
    </WebGLCanvas>
  );
};
