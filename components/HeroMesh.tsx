"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface HeroMeshInnerProps {
  mouse: { x: number; y: number; active: boolean };
}

function HeroMeshInner({ mouse }: HeroMeshInnerProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Desktop vs Mobile segments
  const segments = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return isMobile ? [80, 50] : [120, 80];
  }, []);

  // Store original positions for reference
  const [originalPositions, geometry] = useMemo(() => {
    const geo = new THREE.PlaneGeometry(
      viewport.width * 1.5,
      viewport.height * 1.5,
      segments[0],
      segments[1]
    );
    const pos = geo.attributes.position.array.slice() as Float32Array;
    return [pos, geo];
  }, [viewport.width, viewport.height, segments]);

  const hoverStrength = useRef(0);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const posAttr = meshRef.current.geometry.attributes.position;
    const positions = posAttr.array as Float32Array;

    // Ease hover strength
    const targetStrength = mouse.active ? 1 : 0;
    hoverStrength.current = THREE.MathUtils.lerp(hoverStrength.current, targetStrength, 0.05);

    // Warp parameters
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const warpRadius = isMobile ? 2.5 : 4.0; 
    const warpStrength = (isMobile ? 0.6 : 1.2) * hoverStrength.current;
    const waveFreq = 0.5;
    const waveAmp = 0.15;

    for (let i = 0; i < positions.length; i += 3) {
      const x = originalPositions[i];
      const y = originalPositions[i + 1];
      const z = originalPositions[i + 2];

      // 1. Idle Wave
      let newZ = z + Math.sin(x * waveFreq + time) * waveAmp + Math.cos(y * waveFreq + time) * waveAmp;

      // 2. Interactive Warp
      if (hoverStrength.current > 0.01) {
        // Convert mouse NDC to world space roughly
        const mx = mouse.x * viewport.width * 0.75;
        const my = mouse.y * viewport.height * 0.75;
        
        const dx = x - mx;
        const dy = y - my;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        if (dist < warpRadius) {
          // Gaussian-ish falloff
          const influence = Math.exp(-distSq / (2 * warpRadius * warpRadius / 9));
          newZ += influence * warpStrength;
        }
      }

      positions[i + 2] = newZ;
    }

    posAttr.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-0.2, 0, 0]}>
      <meshBasicMaterial 
        color="#8B5CF6" 
        wireframe 
        transparent 
        opacity={0.08} 
      />
    </mesh>
  );
}

export const HeroMesh = ({ mouse }: { mouse: { x: number; y: number; active: boolean } }) => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <Canvas 
        dpr={[1, 1.5]} 
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ pointerEvents: 'none' }}
      >
        <HeroMeshInner mouse={mouse} />
      </Canvas>
    </div>
  );
};
