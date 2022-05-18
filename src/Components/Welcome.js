import React, { useEffect, useRef } from "react";

// 3d
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const CoinRing = ({ position }) => {
  const ringRef = useRef(null);
  const { viewport } = useThree();
  useFrame(() => {
    ringRef.current.rotation.y -= 0.01;
  });
  return (
    <mesh position={position} scale={viewport.width / 20} ref={ringRef}>
      <torusBufferGeometry args={[4, 0.5, 40, 50]} />
      <meshPhongMaterial color={0xf44d4d} shininess={100} />
    </mesh>
  );
};

const Coin = ({ pic, position }) => {
  // Load the Images
  const textureMap = useLoader(TextureLoader, pic);

  const coinRef = useRef(null);
  const { viewport } = useThree();

  useEffect(() => {
    if (coinRef) coinRef.current.rotation.x = Math.PI / 2;
  }, [coinRef]);

  useFrame(() => {
    coinRef.current.rotation.z += 0.01;
  });
  const obj = (
    <mesh position={position} scale={viewport.width / 20} ref={coinRef}>
      <cylinderGeometry args={[4, 4, 0.5, 64]} />
      <meshBasicMaterial map={textureMap} color={0xffffff} />
    </mesh>
  );
  return obj;
};

const Welcome = ({ pic }) => {
  return (
    <section className="welcome">
      <Canvas
        style={{
          height: "50vh",
        }}
      >
        <ambientLight intensity={0.5} color={0xffffff} />
        <pointLight color={0xffffff} position={[5, 5, 5]} />
        <OrbitControls />
        <Coin position={[0, 0, 0]} pic={pic} />
        <CoinRing position={[0, 0, 0]} />
      </Canvas>
    </section>
  );
};

export default Welcome;
