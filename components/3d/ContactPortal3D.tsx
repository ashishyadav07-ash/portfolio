"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { WebGLCanvas } from "./WebGLCanvas";

const PortalScene: React.FC = () => {
  const portalRef = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (portalRef.current) {
      portalRef.current.rotation.z = Math.sin(time * 0.2) * 0.1;
      portalRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }

    if (ring1.current) {
      ring1.current.rotation.x += delta * 0.25;
      ring1.current.rotation.y += delta * 0.15;
    }
    if (ring2.current) {
      ring2.current.rotation.x -= delta * 0.2;
      ring2.current.rotation.z += delta * 0.3;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={portalRef}>
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 3, 3]} color="#8B5CF6" intensity={3} />
      <pointLight position={[-3, -3, -3]} color="#22D3EE" intensity={2} />
      <pointLight position={[0, 0, 0]} color="#EC4899" intensity={2} />

      {/* Main Outer Portal Ring */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5}>
        <mesh ref={ring1}>
          <torusGeometry args={[2.2, 0.04, 16, 80]} />
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#8B5CF6"
            emissiveIntensity={2}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Inner Nested Torus Ring */}
      <mesh ref={ring2} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[1.7, 0.03, 16, 80]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={1.8}
          roughness={0.1}
        />
      </mesh>

      {/* Internal Shimmering Core */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#EC4899"
          emissive="#EC4899"
          emissiveIntensity={1.2}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
};

export const ContactPortal3D: React.FC<{ className?: string }> = ({
  className = "w-full h-[400px] md:h-[550px]",
}) => {
  return (
    <WebGLCanvas
      className={className}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border-2 border-dashed border-violet/40 animate-spin-slow" />
        </div>
      }
    >
      <PortalScene />
    </WebGLCanvas>
  );
};
