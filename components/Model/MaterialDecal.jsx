"use client";
import { Decal, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function MaterialDecal({
  position,
  rotation,
  scale,
  map,
  updateMap = null,
  range
}) {
  const defaultRef = useRef(null);
  const updateRef = useRef(null);
  const scroll = useScroll();
  useFrame(() => {
    if (updateMap != null) {
      const currOffset = scroll.offset;
      if (currOffset > range[0] && currOffset < range[1]) {
        var newMappedValue = (currOffset - range[0]) / (range[1] - range[0]);
        defaultRef.current.opacity = 1 - newMappedValue;
        defaultRef.current.transparent = true;
        defaultRef.current.needsUpdate = true;
      } else if (currOffset > range[1]) {
        defaultRef.current.opacity = 0;
        defaultRef.current.transparent = true;
        defaultRef.current.needsUpdate = true;
      } else {
        defaultRef.current.opacity = 1;
        defaultRef.current.transparent = true;
        defaultRef.current.needsUpdate = true;
      }
    }
  });

  return (
    <>
      <Decal
        position={position} // Position of the decal
        rotation={rotation} // Rotation of the decal (can be a vector or a degree in radians)
        scale={scale} // Scale of the decal
      >
        <meshBasicMaterial
          ref={defaultRef}
          map={map}
          polygonOffset
          polygonOffsetFactor={-1} // The material should take precedence over the original
        />
      </Decal>
      {updateMap == null ? (
        ""
      ) : (
        <Decal
          position={position} // Position of the decal
          rotation={rotation} // Rotation of the decal (can be a vector or a degree in radians)
          scale={scale} // Scale of the decal
        >
          <meshBasicMaterial
            ref={updateRef}
            map={updateMap}
            polygonOffset
            polygonOffsetFactor={-1} // The material should take precedence over the original
          />
        </Decal>
      )}
    </>
  );
}
