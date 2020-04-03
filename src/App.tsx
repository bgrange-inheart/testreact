import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Viewer3d } from './components/Viewer3d';
import { SettingsPanel } from './components/SettingsPanel';
import {Container} from 'react-bootstrap';
import * as THREE from "three";

interface AppProps {}
interface AppState { cubeColor: THREE.Color, scene: THREE.Scene }

  class App extends React.Component<{}, AppState> {
      material: THREE.MeshPhongMaterial;

    constructor(props: AppProps) {
      super(props);
      this.state = {
        cubeColor: new THREE.Color(1, 1, 1),
        scene: this.createScene()
      };
    }

    createScene() {
        let scene = new THREE.Scene();
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        this.material = new THREE.MeshPhongMaterial( {
            color: 0xFFFFFF,
            emissive: 0x072534,
            side: THREE.DoubleSide,
            flatShading: true
        } );
        let cube = new THREE.Mesh( geometry, this.material );
        scene.add(cube);
            let light = new THREE.PointLight( 0xffffff, 1, 0 );
        light.position.set( 20, 0, 200 );
        scene.add(light);

        return scene;
    }

    handleColorChange(color: THREE.Color)
    {
        this.setState({cubeColor:color});
        this.material.color = color;
        this.material.needsUpdate = true;
    }

    render() {
      return (
        <div className="app">
            <SettingsPanel cubeColor={this.state.cubeColor} onColorChange={col=>this.handleColorChange(col)} />
            <Container fluid>
                <Viewer3d scene={this.state.scene}/>
            </Container>        
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  