"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import { useThree, Object3DNode, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countriesData from "@/app/data/globe.json";
import Globe from "react-globe.gl";

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

export function World() {
  const [countries, setCountries] = useState<{
    features: {
      type: string;
      geometry: { type: string; coordinates: number[][][][] };
      properties: { name: string };
      id: string;
    }[];
  }>({ features: [] });

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
    <Globe
      backgroundColor="rgba(0,0,0,0)"
      hexPolygonsData={countries.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.3}
      hexPolygonUseDots={true}
      hexPolygonColor={() => "#FFCC15"}
    />
  );
}
