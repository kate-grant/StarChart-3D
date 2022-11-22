import React, { StrictMode, useEffect } from "react";
import { connect } from "react-redux";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
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
    const nightsky = new THREE.Color(0x2e3057);
    const starlight = new THREE.Color(0xe3f8fa);
    const icelight = new THREE.Color(0x4df0ff);
    const brightlight = new THREE.Color(0xffffff);
    console.log("props", this.props);
    const stars = this.props.stars;
    const radius = d3.scaleLinear([6, -1], [0, 2]);
    const bVColor = d3
      .scaleLinear([-0.4, 0.4, 2])
      .range(["#ff8f85", "#FFFFFF", "#2f7afa"]);
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
            let starColor = starlight;
            console.log("before color");
            if (star.colorIndex && this.props.colorIndex === true) {
              console.log("in color");
              starColor = bVColor(star.colorIndex);
              console.log(starColor);
            }

            if (
              this.props.constellation != "" &&
              star.constellationAbr === this.props.constellation
            ) {
              return (
                <>
                  <mesh position={pos}>
                    <sphereGeometry attach="geometry" args={[r * 0.2, 9, 9]} />
                    <meshStandardMaterial
                      className={star.constellation}
                      color={brightlight}
                    />
                  </mesh>
                  <mesh position={pos}>
                    <sphereGeometry attach="geometry" args={[r * 0.8, 9, 9]} />
                    <meshPhongMaterial
                      className="glow"
                      transparent
                      color={icelight}
                      opacity={0.5}
                    />
                  </mesh>
                </>
              );
            } else {
              if (star.properName === "Sol") {
                starColor = "yellow";
              }
              return (
                <mesh position={pos}>
                  <sphereGeometry attach="geometry" args={[r * 0.2, 9, 9]} />
                  <meshStandardMaterial
                    className={star.constellation}
                    color={starColor}
                  />
                </mesh>
              );
            }
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
    constellation: state.constellation,
    colorIndex: state.colorIndex,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadStars: () => dispatch(fetchStars()),
  };
};

export default connect(mapState, mapDispatch)(StarChart);
