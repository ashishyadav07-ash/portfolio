"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Line, Box, Octahedron } from "@react-three/drei";
import * as THREE from "three";
import { WebGLCanvas } from "./WebGLCanvas";

const squadNodes = [
  { name: "DEV 01", pos: [1.6, 1.1, 0.2] as [number, number, number], color: "#3155FF" },
  { name: "DEV 02", pos: [-1.6, 1.1, -0.2] as [number, number, number], color: "#3155FF" },
  { name: "DEV 03", pos: [1.6, -1.1, -0.2] as [number, number, number], color: "#FF6B4A" },
  { name: "DEV 04", pos: [-1.6, -1.1, 0.2] as [number, number, number], color: "#FF6B4A" },
];

const SquadScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

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
      coreRef.current.rotation.y += delta * 0.25;
      coreRef.current.rotation.z += delta * 0.1;
    }
    nodeRefs.current.forEach((mesh) => {
      if (mesh) {
        mesh.rotation.x += delta * 0.2;
        mesh.rotation.y += delta * 0.2;
      }
    });
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.8} color="#FAF8F3" />
      <directionalLight position={[4, 5, 4]} color="#FFFFFF" intensity={1.5} />
      <pointLight position={[0, 0, 0]} color="#3155FF" intensity={1.8} distance={7} />

      {/* Central Architectural Leadership Core */}
      <Float speed={1.6} floatIntensity={0.3}>
        <mesh ref={coreRef}>
          <octahedronGeometry args={[0.85, 0]} />
          <meshStandardMaterial
            color="#D0D2D9"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* 4 Connected Squad Nodes */}
      {squadNodes.map((node, idx) => (
        <group key={node.name}>
          <Line
            points={[[0, 0, 0], node.pos]}
            color="#3155FF"
            lineWidth={2}
          />
          <group position={node.pos}>
            <Box
              ref={(el) => {
                nodeRefs.current[idx] = el;
              }}
              args={[0.42, 0.42, 0.42]}
            >
              <meshStandardMaterial
                color={node.color}
                roughness={0.2}
                metalness={0.7}
              />
            </Box>
          </group>
        </group>
      ))}
    </group>
  );
};

export const TeamSport3D: React.FC<{ className?: string }> = ({
  className = "w-full h-[280px] md:h-[350px]",
}) => {
  return (
    <WebGLCanvas
      className={className}
      camera={{ position: [0, 0, 5], fov: 45 }}
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border border-cobalt/30 flex items-center justify-center font-mono text-xs text-cobalt font-bold">
            4 DEV SQUAD
          </div>
        </div>
      }
    >
      <SquadScene />
    </WebGLCanvas>
  );
};
