import React, { StrictMode, useEffect } from "react";
import { connect } from "react-redux";
import * as THREE from "three";
import { Canvas, useThree, useFrame, calculateDpr } from "@react-three/fiber";
import { fetchStars } from "../redux/starReducer.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as d3 from "d3";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.enablePan = false;
    //controls.endableRotate = true;
    controls.enableZoom = true;
    controls.minDistance = 20;
    controls.maxDistance = 200;
    controls.rotateSpeed = -1;
    //return controls;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

class StarChart extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      console.log("in componentdidmount");
      await this.props.loadStars();
      console.log(this.props.stars);
    } catch (error) {
      console.error();
      throw error;
    }
  }

  render() {
    const nightsky = new THREE.Color(0x071b2b);
    console.log("props", this.props);
    const stars = this.props.stars;
    const radius = d3.scaleLinear([6, -1], [0, 2]);
    return (
      <Canvas
        camera={{
          fov: 75,
          aspect: window.innerWidth / window.innerHeight,
          near: 1,
          far: 1000,
          position: [0, 0, 100],
        }}
      >
        <CameraController />

        <color attach="background" args={[nightsky]} />
        {stars.map((star) => {
          const r = Math.round(radius(star.magnitude) * 10) / 10;
          if (r > 0) {
            const pos = new THREE.Vector3().setFromSphericalCoords(
              100,
              Math.PI / 2 - star.decrad,
              star.rarad
            );
            let starColor = "hotpink";
            if (star.constellationAbr === "Her") {
              starColor = "blue";
              console.log(star);
            }
            if (star.constellationAbr === "Ori") {
              starColor = "green";
              console.log(star);
            }
            console.log("in map");
            return (
              <mesh position={pos}>
                <sphereGeometry attach="geometry" args={[r, 9, 9]} />
                <meshStandardMaterial color={starColor} />
              </mesh>
            );
          }
        })}
        <pointLight position={[10, 10, 10]} />
        <mesh position={[5, 10, 10]}>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <mesh position={[20, 50, 50]}>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    );
  }
}
const mapState = (state) => {
  return {
    stars: state.stars,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadStars: () => dispatch(fetchStars()),
  };
};

export default connect(mapState, mapDispatch)(StarChart);
