"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { WebGLCanvas } from "./WebGLCanvas";

const ContactScene: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        state.mouse.x * 0.3 + time * 0.06,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -state.mouse.y * 0.2,
        0.05
      );
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.z += delta * 0.08;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z -= delta * 0.12;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.9} color="#FAF8F3" />
      <directionalLight position={[4, 5, 4]} color="#FFFFFF" intensity={1.6} />
      <pointLight position={[-3, -3, 2]} color="#FF6B5A" intensity={2} distance={8} />
      <pointLight position={[3, -3, -2]} color="#3155FF" intensity={2.5} distance={8} />

      {/* Floating Evolving Translucent Ivory & Coral Sculpture */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial
            color="#FFFFFF"
            transparent
            opacity={0.65}
            roughness={0.1}
            metalness={0.2}
          />
        </mesh>
      </Float>

      {/* Deep Ink Inner Core */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#111318"
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Outer Evolving Torus Ring 1 (Cobalt) */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.025, 16, 48]} />
        <meshStandardMaterial
          color="#FFFFFF"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Torus Ring 2 (Coral) */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.5, 0.02, 16, 48]} />
        <meshStandardMaterial
          color="#FF6B5A"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
};

export const EvolvingSculpture3D: React.FC<{ className?: string }> = ({
  className = "w-full h-[400px] md:h-[550px]",
}) => {
  return (
    <WebGLCanvas
      className={className}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border border-coral animate-spin-slow" />
        </div>
      }
    >
      <ContactScene />
    </WebGLCanvas>
  );
};
