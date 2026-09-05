"use client";

import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { WebGLCanvas } from "./WebGLCanvas";

interface NodeBadgeProps {
  label: string;
  position: [number, number, number];
  color: string;
  sublabel: string;
}

const NodeBadge: React.FC<NodeBadgeProps> = ({ label, position, color, sublabel }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      {/* 3D Anchor Node */}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 2 : 0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* HTML Overlay Label */}
      <Html center distanceFactor={8} position={[0, 0.25, 0]}>
        <div
          data-cursor="tech"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`pointer-events-auto select-none transition-all duration-300 transform ${
            hovered ? "scale-110 z-30" : "scale-100"
          }`}
        >
          <div
            className="px-2.5 py-1 rounded-md bg-[#0b0d12]/90 backdrop-blur-md border text-center shadow-lg cursor-pointer"
            style={{
              borderColor: hovered ? color : "rgba(255,255,255,0.15)",
              boxShadow: hovered ? `0 0 20px ${color}80` : "none",
            }}
          >
            <div className="font-mono font-bold text-[11px] tracking-wider text-white">
              {label}
            </div>
            <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest">
              {sublabel}
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
};

const ParticleCloud: React.FC<{ count?: number }> = ({ count = 80 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      p[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = radius * Math.cos(phi);
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
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
        size={0.035}
        color="#8B5CF6"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const CoreMesh: React.FC = () => {
  const coreRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const icosahedronRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (coreRef.current) {
      // Gentle mouse parallax tilt
      coreRef.current.rotation.y = THREE.MathUtils.lerp(
        coreRef.current.rotation.y,
        state.mouse.x * 0.5 + time * 0.1,
        0.05
      );
      coreRef.current.rotation.x = THREE.MathUtils.lerp(
        coreRef.current.rotation.x,
        -state.mouse.y * 0.3,
        0.05
      );
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.3;
      ring1Ref.current.rotation.x = Math.sin(time * 0.4) * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.25;
      ring2Ref.current.rotation.z = Math.cos(time * 0.3) * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * 0.2;
    }
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.y -= delta * 0.15;
      icosahedronRef.current.rotation.x += delta * 0.1;
    }
  });

  const nodes: { label: string; sublabel: string; color: string; pos: [number, number, number] }[] = [
    { label: "PHP", sublabel: "CORE ENGINE", color: "#8B5CF6", pos: [1.8, 0.6, 0.4] },
    { label: "LARAVEL", sublabel: "FRAMEWORK", color: "#EF4444", pos: [-1.7, 0.9, -0.5] },
    { label: "REST API", sublabel: "SERVICES", color: "#3B82F6", pos: [0.3, -1.8, 0.8] },
    { label: "MYSQL", sublabel: "DATABASE", color: "#22D3EE", pos: [-1.6, -0.8, 0.9] },
    { label: "AWS EC2", sublabel: "CLOUD INFRA", color: "#F59E0B", pos: [1.5, -1.1, -1.0] },
    { label: "OPENAI", sublabel: "INTELLIGENCE", color: "#10B981", pos: [0.2, 1.9, -0.7] },
  ];

  return (
    <group ref={coreRef}>
      {/* Ambient & Directional Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} color="#8B5CF6" intensity={2} />
      <pointLight position={[-5, -5, -5]} color="#22D3EE" intensity={1.5} />
      <pointLight position={[0, 0, 0]} color="#EC4899" intensity={1} />

      {/* Central Glowing Energy Nucleus */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#A78BFA"
            emissiveIntensity={1.5}
            roughness={0.1}
            metalness={0.9}
            wireframe={false}
          />
        </Sphere>
      </Float>

      {/* Outer Wireframe Icosahedron Core */}
      <mesh ref={icosahedronRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#0891B2"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Secondary Octahedron Lattice */}
      <mesh>
        <octahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#6D28D9"
          emissiveIntensity={0.3}
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Orbital Data Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.1, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={1}
        />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.4, 0.012, 16, 100]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={0.8}
        />
      </mesh>

      <mesh ref={ring3Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.7, 0.01, 16, 100]} />
        <meshStandardMaterial
          color="#EC4899"
          emissive="#EC4899"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Ambient Particle Field */}
      <ParticleCloud count={100} />

      {/* 3D Tech Nodes around the core */}
      {nodes.map((node) => (
        <NodeBadge
          key={node.label}
          label={node.label}
          sublabel={node.sublabel}
          color={node.color}
          position={node.pos}
        />
      ))}
    </group>
  );
};

export const EngineeringCore: React.FC<{ className?: string }> = ({
  className = "w-full h-[480px] md:h-[600px] lg:h-[700px]",
}) => {
  return (
    <WebGLCanvas
      className={className}
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      fallback={
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border-2 border-dashed border-violet/40 animate-spin-slow flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border border-cyan/40 animate-spin-reverse flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-violet via-cyan to-hotPink opacity-60 blur-lg animate-pulse-glow" />
            </div>
          </div>
        </div>
      }
    >
      <CoreMesh />
    </WebGLCanvas>
  );
};
