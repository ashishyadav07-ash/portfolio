"use client";

import React, { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { WebGLCanvas } from "./WebGLCanvas";

const AmbientDataParticles: React.FC<{ count?: number }> = ({ count = 25 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.0 + Math.random() * 0.9;
      const y = (Math.random() - 0.5) * 1.8;
      p[i * 3] = radius * Math.cos(theta);
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = radius * Math.sin(theta);
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#3155FF"
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const ArchitectureSculptureMesh: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const mainCoreRef = useRef<THREE.Mesh>(null);
  const silverPlateRef = useRef<THREE.Mesh>(null);
  const glassLayerRef = useRef<THREE.Mesh>(null);
  const cobaltRing1Ref = useRef<THREE.Mesh>(null);
  const cobaltRing2Ref = useRef<THREE.Mesh>(null);
  const coralOrbitRef = useRef<THREE.Mesh>(null);
  const amberBlock1Ref = useRef<THREE.Mesh>(null);
  const amberBlock2Ref = useRef<THREE.Mesh>(null);

  const [isHovered, setIsHovered] = useState(false);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Smooth luxurious floating with calibrated subtle parallax
      const floatY = Math.sin(time * (Math.PI / 3.5)) * 0.07;
      const targetParallaxX = state.mouse.x * 0.18;
      const targetParallaxY = -state.mouse.y * 0.12;

      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        floatY + targetParallaxY,
        0.04
      );
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        targetParallaxX,
        0.04
      );

      // Controlled subtle rotation
      const targetRotY = state.mouse.x * 0.22 + Math.sin(time * 0.2) * 0.04;
      const targetRotX = -state.mouse.y * 0.12 + 0.08;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.04
      );
    }

    if (mainCoreRef.current) {
      mainCoreRef.current.rotation.y += delta * 0.1;
      mainCoreRef.current.rotation.z += delta * 0.05;
    }

    if (silverPlateRef.current) {
      silverPlateRef.current.rotation.y -= delta * 0.06;
      silverPlateRef.current.rotation.x += delta * 0.03;
    }

    if (glassLayerRef.current) {
      glassLayerRef.current.rotation.y += delta * 0.05;
    }

    if (cobaltRing1Ref.current) {
      cobaltRing1Ref.current.rotation.z += delta * 0.08;
    }

    if (cobaltRing2Ref.current) {
      cobaltRing2Ref.current.rotation.x -= delta * 0.07;
      cobaltRing2Ref.current.rotation.y += delta * 0.05;
    }

    if (coralOrbitRef.current) {
      const angle = time * 0.5;
      coralOrbitRef.current.position.x = Math.cos(angle) * 1.55;
      coralOrbitRef.current.position.z = Math.sin(angle) * 1.55;
      coralOrbitRef.current.position.y = Math.sin(angle * 2) * 0.22;
    }

    if (amberBlock1Ref.current) {
      amberBlock1Ref.current.rotation.y += delta * 0.2;
      amberBlock1Ref.current.rotation.x += delta * 0.15;
    }

    if (amberBlock2Ref.current) {
      amberBlock2Ref.current.rotation.z -= delta * 0.18;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {/* Studio Lighting Setup: Key light, Blue rim light, Warm coral fill, Ambient */}
      <ambientLight intensity={isHovered ? 0.9 : 0.75} color="#FAF8F3" />
      <directionalLight position={[5, 6, 4]} color="#FFFFFF" intensity={isHovered ? 1.6 : 1.35} />
      <directionalLight position={[-4, -2, -3]} color="#AAB8FF" intensity={0.8} />
      <pointLight position={[3.5, -2, 2.5]} color="#3155FF" intensity={isHovered ? 2.2 : 1.8} distance={9} />
      <pointLight position={[-3, 3.5, -2]} color="#FF6B5A" intensity={1.3} distance={8} />

      {/* Main Structure: Graphite / Dark Metallic Architectural Octahedron Core */}
      <mesh ref={mainCoreRef} position={[0, 0, 0]}>
        <octahedronGeometry args={[1.05, 0]} />
        <meshStandardMaterial
          color="#1E2026"
          metalness={0.78}
          roughness={0.32}
        />
      </mesh>

      {/* Secondary Surfaces: Soft Silver Engineered Plate */}
      <mesh ref={silverPlateRef} position={[-0.22, -0.12, -0.12]} rotation={[-0.3, 0.7, -0.3]}>
        <boxGeometry args={[1.45, 0.07, 1.25]} />
        <meshStandardMaterial
          color="#D5D8DF"
          metalness={0.92}
          roughness={0.2}
        />
      </mesh>

      {/* Transparent Layer: White Glass Plate */}
      <mesh ref={glassLayerRef} position={[0.18, 0.12, 0.22]} rotation={[0.35, 0.55, 0.15]}>
        <boxGeometry args={[1.65, 0.05, 1.65]} />
        <meshStandardMaterial
          color="#FFFFFF"
          transparent
          opacity={0.65}
          roughness={0.08}
          metalness={0.15}
        />
      </mesh>

      {/* Structural Ring 1: Electric Cobalt Blue */}
      <mesh ref={cobaltRing1Ref} position={[0, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.58, 0.026, 24, 64]} />
        <meshStandardMaterial
          color="#3155FF"
          metalness={0.85}
          roughness={0.18}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* Structural Ring 2: Electric Cobalt Blue Outer Frame */}
      <mesh ref={cobaltRing2Ref} position={[0, 0, 0]} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[1.80, 0.022, 24, 64]} />
        <meshStandardMaterial
          color="#3155FF"
          metalness={0.88}
          roughness={0.16}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Small Orbiting Coral Sphere */}
      <mesh ref={coralOrbitRef} position={[1.55, 0, 0]}>
        <sphereGeometry args={[0.11, 20, 20]} />
        <meshStandardMaterial
          color="#FF6B5A"
          roughness={0.18}
          metalness={0.65}
        />
      </mesh>

      {/* Static Coral Detail Node */}
      <mesh position={[-0.7, 0.8, -0.3]}>
        <sphereGeometry args={[0.085, 20, 20]} />
        <meshStandardMaterial
          color="#FF6B5A"
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>

      {/* Small Floating Golden Amber Micro-Blocks */}
      <mesh ref={amberBlock1Ref} position={[0.78, 0.68, 0.4]}>
        <boxGeometry args={[0.13, 0.13, 0.13]} />
        <meshStandardMaterial
          color="#F2B84B"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      <mesh ref={amberBlock2Ref} position={[-0.72, -0.62, 0.45]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial
          color="#F2B84B"
          roughness={0.25}
          metalness={0.75}
        />
      </mesh>

      {/* Delicate Ambient Data Particles */}
      <AmbientDataParticles count={25} />

      {/* Expansive Soft Contact Shadow - zero hard edges */}
      <ContactShadows
        position={[0, -2.0, 0]}
        opacity={0.22}
        scale={12}
        blur={2.8}
        far={4.5}
        resolution={256}
        frames={1}
        color="#111318"
      />
    </group>
  );
};

export const SystemArchitecture3D: React.FC<{ className?: string }> = ({
  className = "w-full h-[460px] sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[740px]",
}) => {
  return (
    <WebGLCanvas
      className={className}
      camera={{ position: [0, 0, 7.6], fov: 38 }}
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-cobalt/30 animate-spin-slow flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border border-coral/30 animate-float-gentle flex items-center justify-center">
              <div className="w-28 h-28 border border-deepInk/20 rotate-45" />
            </div>
          </div>
        </div>
      }
    >
      <ArchitectureSculptureMesh />
    </WebGLCanvas>
  );
};

