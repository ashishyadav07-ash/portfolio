"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { WebGLCanvas } from "./WebGLCanvas";

const NeuralScene: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { positions, linePositions } = useMemo(() => {
    const particleCount = 45;
    const pos = new Float32Array(particleCount * 3);
    const coords: THREE.Vector3[] = [];

    for (let i = 0; i < particleCount; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 3.5,
        (Math.random() - 0.5) * 3
      );
      coords.push(v);
      pos[i * 3] = v.x;
      pos[i * 3 + 1] = v.y;
      pos[i * 3 + 2] = v.z;
    }

    const lines: number[] = [];
    for (let i = 0; i < coords.length; i++) {
      for (let j = i + 1; j < coords.length; j++) {
        const dist = coords[i].distanceTo(coords[j]);
        if (dist < 1.6) {
          lines.push(coords[i].x, coords[i].y, coords[i].z);
          lines.push(coords[j].x, coords[j].y, coords[j].z);
        }
      }
    }

    return {
      positions: pos,
      linePositions: new Float32Array(lines),
    };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.08;
      pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.08;
      linesRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} color="#8B5CF6" intensity={2} />
      <pointLight position={[-3, -3, -3]} color="#22D3EE" intensity={2} />

      {/* Neural Synapse Points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#22D3EE"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Synapse Connection Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#8B5CF6"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};

export const AiNeuralCloud: React.FC<{ className?: string }> = ({
  className = "w-full h-[360px] md:h-[450px]",
}) => {
  return (
    <WebGLCanvas
      className={className}
      camera={{ position: [0, 0, 5], fov: 45 }}
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border border-cyan/40 animate-pulse-glow" />
        </div>
      }
    >
      <NeuralScene />
    </WebGLCanvas>
  );
};
