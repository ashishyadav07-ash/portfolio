"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { WebGLCanvas } from "./WebGLCanvas";

const stages = [
  { name: "REQUEST", pos: [-2.6, 0, 0] as [number, number, number], color: "#FF6B5A", isGlass: false },
  { name: "APPLICATION", pos: [-1.3, 0.55, 0.2] as [number, number, number], color: "#3155FF", isGlass: true },
  { name: "BUSINESS LOGIC", pos: [0, -0.1, -0.15] as [number, number, number], color: "#D5D8DF", isGlass: true },
  { name: "DATABASE", pos: [1.3, 0.5, 0.2] as [number, number, number], color: "#3155FF", isGlass: true },
  { name: "RESPONSE", pos: [2.6, 0, 0] as [number, number, number], color: "#FF6B5A", isGlass: false },
];

const BackendScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef<THREE.Mesh>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
      groupRef.current.position.y = Math.sin(time * 0.6) * 0.03;
    }

    nodeRefs.current.forEach((mesh, idx) => {
      if (mesh) {
        mesh.rotation.y += delta * (0.15 + idx * 0.04);
        mesh.rotation.x += delta * (0.1 + idx * 0.02);
      }
    });

    if (pulseRef.current) {
      const cycle = (time * 0.7) % 4;
      const progress = cycle / 4;
      pulseRef.current.position.x = -2.6 + progress * 5.2;
      pulseRef.current.position.y = Math.sin(progress * Math.PI * 2) * 0.42;
      pulseRef.current.position.z = Math.cos(progress * Math.PI * 2) * 0.18;
    }
  });

  const linePoints: [number, number, number][] = stages.map((s) => s.pos);

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.8} color="#FAF8F3" />
      <directionalLight position={[4, 5, 4]} color="#FFFFFF" intensity={1.5} />
      <pointLight position={[-3, 2, 2]} color="#FF6B5A" intensity={1.5} distance={8} />
      <pointLight position={[3, -2, 2]} color="#3155FF" intensity={2} distance={8} />

      {/* Main Flow Connection Line */}
      <Line
        points={linePoints}
        color="#3155FF"
        lineWidth={2.2}
      />

      {/* Stage Architectural Glass/Metallic Panels */}
      {stages.map((stage, idx) => (
        <group key={stage.name} position={stage.pos}>
          {stage.isGlass ? (
            <mesh
              ref={(el) => {
                nodeRefs.current[idx] = el;
              }}
            >
              <boxGeometry args={[0.7, 0.7, 0.7]} />
              <meshStandardMaterial
                color="#FFFFFF"
                transparent
                opacity={0.65}
                roughness={0.12}
                metalness={0.2}
              />
            </mesh>
          ) : (
            <mesh
              ref={(el) => {
                nodeRefs.current[idx] = el;
              }}
            >
              <boxGeometry args={[0.55, 0.55, 0.55]} />
              <meshStandardMaterial
                color={stage.color}
                roughness={0.2}
                metalness={0.75}
              />
            </mesh>
          )}

          {/* Small Cobalt Edge / Ring Accent */}
          {stage.isGlass && (
            <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
              <boxGeometry args={[0.74, 0.74, 0.74]} />
              <meshStandardMaterial
                color="#3155FF"
                wireframe
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>
          )}
        </group>
      ))}

      {/* Data Packet Traversing Pipeline */}
      <mesh ref={pulseRef} position={[-2.6, 0, 0]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial
          color="#F2B84B"
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
};

export const BackendArch3D: React.FC<{ className?: string }> = ({
  className = "w-full h-[280px] md:h-[350px]",
}) => {
  return (
    <WebGLCanvas
      className={className}
      camera={{ position: [0, 0, 5.2], fov: 44 }}
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex items-center gap-3 text-xs font-mono text-ivory/80">
            <span className="text-coral">REQUEST</span>
            <span>→</span>
            <span className="text-cobalt">APPLICATION</span>
            <span>→</span>
            <span className="text-ivory">LOGIC</span>
            <span>→</span>
            <span className="text-cobalt">DATABASE</span>
            <span>→</span>
            <span className="text-coral">RESPONSE</span>
          </div>
        </div>
      }
    >
      <BackendScene />
    </WebGLCanvas>
  );
};
