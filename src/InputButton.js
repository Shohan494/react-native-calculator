// InputButton.js

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import Style from './Style';

//this class can be imported thats why here it has been exported

/*
The Text view uses this.props.value. Props are essentially static data that we can 
pass to child components, as we’ll see when we return to the ReactCalculator class 
shortly.
*/
export default class InputButton extends Component {
    render() {
        return (
            <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
}
