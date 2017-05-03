import * as React from 'react'

export interface HelloProps {
    name: String,
}

export class Hello extends React.Component<HelloProps, any> {
    render() {
        return <div>
            <h2>Hello {this.props.name}!</h2>
        </div>
    }
}