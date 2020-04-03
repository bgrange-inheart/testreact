import * as React from "react";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


export interface Viewer3dProps { scene: THREE.Scene; }

export class Viewer3d extends React.Component<Viewer3dProps, {}> {
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;
    renderer: THREE.Renderer;
    el: HTMLDivElement;

    sceneSetup() {
        // get container dimensions and use them for scene sizing
        const width = this.el.clientWidth;
        const height = window.innerHeight;

        this.camera = new THREE.PerspectiveCamera(
            75, // fov = field of view
            width / height, // aspect ratio
            0.1, // near plane
            1000 // far plane
        );
        this.controls = new OrbitControls( this.camera, this.el );

        // set some distance from a cube that is located at z = 0
        this.camera.position.z = 5;
    
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( width, height );
        this.el.appendChild( this.renderer.domElement ); // mount using React ref
    }

    componentDidMount() {
        this.sceneSetup();
        this.startAnimationLoop();
        window.addEventListener('resize', this.handleWindowResize.bind(this));
    }

    handleWindowResize() {
        const width = this.el.clientWidth;
        const height = window.innerHeight;
        console.log(this.el.clientWidth, this.el.clientHeight);
    
        this.renderer.setSize( width, height );
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    startAnimationLoop() {
        this.renderer.render( this.props.scene, this.camera );
        window.requestAnimationFrame(this.startAnimationLoop.bind(this));
    }

  render() {
    return (
        <div ref={ref => (this.el = ref)} ></div>
    )
  }

}
