"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

type StarFieldProps = { speed: number };

function StarField({ speed }: StarFieldProps) {
  const stars = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(420 * 3);
    const pseudoRandom = (seed: number) => {
      const value = Math.sin(seed * 12.9898) * 43758.5453;
      return value - Math.floor(value);
    };

    for (let index = 0; index < 420; index += 1) {
      const offset = index * 3;
      values[offset] = (pseudoRandom(index + 1) - 0.5) * 14;
      values[offset + 1] = (pseudoRandom(index + 97) - 0.5) * 9;
      values[offset + 2] = -pseudoRandom(index + 193) * 5;
    }

    return values;
  }, []);

  useFrame((state) => {
    if (!stars.current) return;
    stars.current.rotation.z = state.clock.elapsedTime * speed * 0.012;
    stars.current.position.y = Math.sin(state.clock.elapsedTime * speed * 0.22) * 0.08;
  });

  return (
    <points ref={stars}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#f7f2e8"
        size={0.026}
        sizeAttenuation
        transparent
        opacity={0.72}
        depthWrite={false}
      />
    </points>
  );
}

interface AnimatedHeroWithWebGLGlitterProps {
  className?: string;
  speed?: number;
}

export function AnimatedHeroWithWebGLGlitter({
  className = "",
  speed = 0.65,
}: AnimatedHeroWithWebGLGlitterProps) {
  return (
    <div className={`hero-glitter ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      >
        <StarField speed={speed} />
      </Canvas>
    </div>
  );
}
