"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { WebGLCanvas } from "./WebGLCanvas";

const ParticleTrails: React.FC<{ count?: number }> = ({ count = 75 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.6 + Math.random() * 1.8;
      const height = (Math.random() - 0.5) * 3;
      p[i * 3] = radius * Math.cos(theta);
      p[i * 3 + 1] = height;
      p[i * 3 + 2] = radius * Math.sin(theta);
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.12;
      pointsRef.current.rotation.x += delta * 0.04;
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
        size={0.04}
        color="#FF6B5A"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const SculptureMesh: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const knotRef = useRef<THREE.Mesh>(null);
  const block1Ref = useRef<THREE.Mesh>(null);
  const block2Ref = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Smooth cursor parallax
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        state.mouse.x * 0.6 + time * 0.15,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -state.mouse.y * 0.4,
        0.05
      );
      groupRef.current.position.y = Math.sin(time * 0.6) * 0.08;
    }

    if (knotRef.current) {
      knotRef.current.rotation.z += delta * 0.2;
    }
    if (block1Ref.current) {
      block1Ref.current.rotation.x += delta * 0.3;
      block1Ref.current.rotation.y += delta * 0.2;
    }
    if (block2Ref.current) {
      block2Ref.current.rotation.y -= delta * 0.25;
      block2Ref.current.rotation.z += delta * 0.15;
    }
    if (sphereRef.current) {
      sphereRef.current.position.x = Math.sin(time * 0.8) * 1.2;
      sphereRef.current.position.z = Math.cos(time * 0.8) * 1.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 5, 4]} color="#FFFFFF" intensity={1.5} />
      <pointLight position={[-4, -3, 3]} color="#FF6B5A" intensity={2} />
      <pointLight position={[3, -4, -3]} color="#4263FF" intensity={2} />

      {/* Main Glass Ribbon Form */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
        <mesh ref={knotRef}>
          <torusKnotGeometry args={[1.2, 0.22, 128, 32, 2, 3]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            roughness={0.1}
            metalness={0.1}
            transmission={0.85}
            thickness={1.2}
            ior={1.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.9}
          />
        </mesh>
      </Float>

      {/* Intersecting Architectural Coral Cube */}
      <mesh ref={block1Ref} position={[0.8, 0.6, 0.4]}>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial
          color="#FF6B5A"
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>

      {/* Intersecting Electric Blue Wireframe Block */}
      <mesh ref={block2Ref} position={[-0.9, -0.7, -0.3]}>
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        <meshStandardMaterial
          color="#4263FF"
          wireframe
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Orbiting Soft Lime Telemetry Sphere */}
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial
          color="#C8F36A"
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Particle Data Flow Trails */}
      <ParticleTrails count={90} />
    </group>
  );
};

export const FlowingRibbon3D: React.FC<{ className?: string }> = ({
  className = "w-full h-[450px] md:h-[580px] lg:h-[650px]",
}) => {
  return (
    <WebGLCanvas
      className={className}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-56 h-56 rounded-full border-2 border-coral/30 animate-spin-slow flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border border-electricBlue/40 animate-float-gentle" />
          </div>
        </div>
      }
    >
      <SculptureMesh />
    </WebGLCanvas>
  );
};
