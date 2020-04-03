import * as React from "react";

export interface HelloProps { title: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div><h1>{this.props.title}</h1></div>;
    }
}