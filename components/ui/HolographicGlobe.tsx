"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
    const meshRef = useRef<THREE.Mesh>(null);
    const particlesRef = useRef<THREE.Points>(null);

    // Create particles around the globe
    const particles = useMemo(() => {
        const count = 1000;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const radius = 2.5 + Math.random() * 0.5;

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
        }

        return positions;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (meshRef.current) {
            meshRef.current.rotation.y = time * 0.1;
            meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
        }

        if (particlesRef.current) {
            particlesRef.current.rotation.y = time * 0.05;
        }
    });

    return (
        <group>
            {/* Main holographic globe */}
            <Sphere ref={meshRef} args={[2, 64, 64]}>
                <MeshDistortMaterial
                    color="#00E4FF"
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                    roughness={0.4}
                    metalness={0.8}
                    wireframe={true}
                    transparent={true}
                    opacity={0.6}
                />
            </Sphere>

            {/* Particle field */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particles.length / 3}
                        array={particles}
                        itemSize={3}
                        args={[particles, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.02}
                    color="#4C45FF"
                    transparent={true}
                    opacity={0.6}
                    sizeAttenuation={true}
                />
            </points>

            {/* Inner glow sphere */}
            <Sphere args={[1.8, 32, 32]}>
                <meshBasicMaterial
                    color="#00E4FF"
                    transparent={true}
                    opacity={0.1}
                />
            </Sphere>
        </group>
    );
}

export default function HolographicGlobe() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Globe />
            </Canvas>
        </div>
    );
}
