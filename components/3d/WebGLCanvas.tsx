"use client";

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";

interface WebGLCanvasProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
  camera?: {
    position?: [number, number, number];
    fov?: number;
  };
}

export const WebGLCanvas: React.FC<WebGLCanvasProps> = ({
  children,
  className = "w-full h-full",
  fallback,
  camera = { position: [0, 0, 7], fov: 45 },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [isInView, setIsInView] = useState<boolean>(true);
  const [dpr, setDpr] = useState<number>(1);

  useEffect(() => {
    // Check WebGL context support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(Boolean(gl));
      // Cap DPR at 1.25 for buttery smooth 60-120fps performance on all devices
      setDpr(Math.min(window.devicePixelRatio || 1, 1.25));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "150px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (hasWebGL === false) {
    return (
      <div className={`${className} flex items-center justify-center bg-radial-glow`}>
        {fallback || (
          <div className="text-zinc-500 font-mono text-xs tracking-wider">
            [2D ACCELERATED FALLBACK]
          </div>
        )}
      </div>
    );
  }

  if (hasWebGL === null) {
    return <div ref={containerRef} className={className} />;
  }

  return (
    <div ref={containerRef} className={`${className} transform-gpu will-change-transform`}>
      <Canvas
        camera={camera}
        dpr={dpr}
        frameloop={isInView ? "always" : "never"}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          precision: "mediump",
          stencil: false,
          depth: true,
        }}
      >
        <Suspense fallback={null}>{isInView && children}</Suspense>
      </Canvas>
    </div>
  );
};
