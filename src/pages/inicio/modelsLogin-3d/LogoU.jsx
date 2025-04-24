import { useGLTF } from "@react-three/drei";

const LogoU = (props) => {
  const {nodes,materials} = useGLTF("models-3d/Logo-U.glb");

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Curve"
          geometry={nodes.Curve.geometry}
          material={materials['SVGMat.003']}
          position={[0, 0, 0]}
          rotation={[1.578, 0.012, -0.046]}
        />
      </group>
    </group>
  );
};

export default LogoU;

useGLTF.preload("models-3d/Logo-U.glb");
