import React, { Component } from 'react';
import { propTypes } from './commonProptypes';
import { DebugRender } from './DebugRender';

export class Choice extends Component {

    render() {
        return React.createElement(DebugRender, this.props);
    }
}

Choice.propTypes = propTypes;