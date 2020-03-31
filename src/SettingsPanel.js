import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Form} from 'react-bootstrap';
import * as THREE from "three";

  class SettingsPanel extends React.Component {
    constructor(props)
    {
        super(props);
    }

    handleColor() 
    {
        let col = new THREE.Color(Math.random(), Math.random(), Math.random());
        this.props.onColorChange(col);
    }

    render() {
        let colStr = '#'+this.props.cubeColor.getHexString();
        return (
            <Nav defaultActiveKey="/home" className="flex-column" >
                <Button style={{'backgroundColor': colStr, 'color': '#000000'}}  onClick={() => this.handleColor()}>
                    Color
                </Button>
                <Form>
                    <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Option"
                    />
                    <Form.Check 
                    type="checkbox"
                    label="Option"
                    id="disabled-custom-switch"
                    />
                </Form>
            </Nav>
        );
    }
  }

  export default SettingsPanel