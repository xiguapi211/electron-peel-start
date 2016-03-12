'use strict';

import React, { Component } from 'react';

export default class Header extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            name: this.props.name
        }    
    };
    
    render () {
        let name = this.state.name;
        return (
            <span>{name}</span>
        );
    };
}
