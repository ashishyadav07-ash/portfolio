"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Line, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { WebGLCanvas } from "./WebGLCanvas";

export interface ApiCategoryNode {
  id: string;
  name: string;
  category: string;
  pos: [number, number, number];
  accent: string;
}

export const apiCategories: ApiCategoryNode[] = [
  { id: "ai", name: "AI", category: "OpenAI / LLM", pos: [2.1, 1.1, 0.3], accent: "#3155FF" },
  { id: "payments", name: "PAYMENTS", category: "Gateways & Billing", pos: [2.3, -1.0, -0.4], accent: "#FF6B5A" },
  { id: "messaging", name: "MESSAGING", category: "WhatsApp Business", pos: [-2.0, 1.2, -0.3], accent: "#3155FF" },
  { id: "identity", name: "IDENTITY", category: "Aadhaar e-KYC", pos: [-2.2, -1.1, 0.5], accent: "#FF6B5A" },
  { id: "social", name: "SOCIAL", category: "OAuth 2.0 PKCE", pos: [0.3, 2.1, -0.6], accent: "#F2B84B" },
  { id: "geolocation", name: "GEOLOCATION", category: "Spatial Maps", pos: [-0.4, -2.1, 0.4], accent: "#AAB8FF" },
];

const NetworkScene: React.FC<{ activeNodeId?: string | null }> = ({ activeNodeId }) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const packetRef = useRef<THREE.Mesh>(null);

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
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.2;
      coreRef.current.rotation.z += delta * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.15;
    }

    // Packet traveling from center to active node
    if (packetRef.current) {
      const activeNode = apiCategories.find((c) => c.id === activeNodeId) || apiCategories[0];
      const cycle = (time * 1.5) % 1;
      packetRef.current.position.x = activeNode.pos[0] * cycle;
      packetRef.current.position.y = activeNode.pos[1] * cycle;
      packetRef.current.position.z = activeNode.pos[2] * cycle;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.7} color="#FAF8F3" />
      <directionalLight position={[4, 5, 4]} color="#FFFFFF" intensity={1.4} />
      <pointLight position={[0, 0, 0]} color="#3155FF" intensity={2} distance={8} />
      <pointLight position={[-3, -3, 3]} color="#FF6B5A" intensity={1.2} distance={7} />

      {/* Central REST API Core */}
      <Float speed={1.5} floatIntensity={0.3}>
        {/* Core Octahedron in Warm Silver */}
        <mesh ref={coreRef} position={[0, 0, 0]}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#D5D8DF"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Cobalt Blue Outer Wireframe Cage */}
        <mesh position={[0, 0, 0]}>
          <dodecahedronGeometry args={[0.95, 1]} />
          <meshStandardMaterial
            color="#3155FF"
            wireframe
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Cobalt Blue Orbital Ring */}
        <mesh ref={ringRef} position={[0, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[1.2, 1.24, 24]} />
          <meshStandardMaterial
            color="#3155FF"
            side={THREE.DoubleSide}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Connection Beams (Cobalt Blue lines) and Soft Glass Spheres */}
      {apiCategories.map((node) => {
        const isSelected = activeNodeId === node.id;
        return (
          <group key={node.id}>
            {/* Translucent Cobalt Data Connection Line */}
            <Line
              points={[[0, 0, 0], node.pos]}
              color="#3155FF"
              lineWidth={isSelected ? 2.5 : 1.4}
              transparent
              opacity={isSelected ? 0.95 : 0.45}
            />

            {/* Soft Glass Spheres with Node Indicator */}
            <group position={node.pos}>
              <Sphere args={[isSelected ? 0.24 : 0.18, 16, 16]}>
                <meshStandardMaterial
                  color="#FFFFFF"
                  transparent
                  opacity={0.65}
                  roughness={0.1}
                  metalness={0.2}
                />
              </Sphere>

              {/* Inner Node Core */}
              <Sphere args={[0.1, 12, 12]}>
                <meshStandardMaterial
                  color={node.accent}
                  roughness={0.2}
                  metalness={0.7}
                />
              </Sphere>
            </group>
          </group>
        );
      })}

      {/* Traveling Data Packet */}
      <mesh ref={packetRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshStandardMaterial
          color="#F2B84B"
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
};

export const ApiNetwork3D: React.FC<{
  className?: string;
  activeNodeId?: string | null;
  selectedCategory?: string | null;
}> = ({ className = "w-full h-[320px] md:h-[400px]", activeNodeId, selectedCategory }) => {
  const currentActiveId = activeNodeId || (selectedCategory ? selectedCategory.toLowerCase() : null);

  return (
    <WebGLCanvas
      className={className}
      camera={{ position: [0, 0, 5.8], fov: 45 }}
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border border-cobalt/30 animate-spin-slow flex items-center justify-center">
            <span className="font-mono text-xs text-cobalt font-bold">REST API</span>
          </div>
        </div>
      }
    >
      <NetworkScene activeNodeId={currentActiveId} />
    </WebGLCanvas>
  );
};
