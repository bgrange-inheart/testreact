import * as React from "react";
import Viewer3d  from "./Viewer3d.js";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div><h1>Hello from {this.props.compiler} and {this.props.framework}!</h1></div>;
    }
}