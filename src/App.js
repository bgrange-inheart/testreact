import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Viewer3d from './Viewer3d';
import SettingsPanel from './SettingsPanel.js';
import {Container} from 'react-bootstrap';
import * as THREE from "three";

  class App extends React.Component {
    constructor(props) {
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
        this.cube = new THREE.Mesh( geometry, this.material );
        scene.add( this.cube );
            let light = new THREE.PointLight( 0xffffff, 1, 0 );
        light.position.set( 20, 0, 200 );
        scene.add(light);

        return scene;
    }

    handleColorChange(color)
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
                <Viewer3d cubeColor={this.state.cubeColor} scene={this.state.scene}/>
            </Container>        
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  