


import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('models/hand-painted_woman_head_low_poly.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.30}  position={[0, -50, 0]}     >
        <mesh geometry={nodes.Merged_FBM_01_eyes1_Merged_FBM_01_eyes10_0.geometry} material={materials.Merged_FBM_01_eyes10} />
        <mesh geometry={nodes.Merged_FBM_01_eyes1_Merged_FBM_01_eyes11_0.geometry} material={materials.Merged_FBM_01_eyes11} />
      </group>
    </group>
  )
}

useGLTF.preload('models/hand-painted_woman_head_low_poly.glb')
