//natuaral imports
import React, { Component } from 'react';
import {
    Text,
    View,
    AppRegistry
} from 'react-native';

import Style from './Style';
import InputButton from './InputButton';

/*First we will define a multi-dimensional array that represents the rows and inputs 
that will be displayed in the calculator. Next, we’ll create a function to dynamically 
generate the buttons, and call this from within render. This new function, 
_renderInputButtons, will iterate each row in the inputButtons array, and for each 
input in the row, create an InputButton and add it to the row.*/

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+'],
    ['c', 'ce']
];

//natural class, named ny the project name
class AwesomeProject2 extends Component {

// constructor was created may be we have to use state to update the ui based 
// on dynamic data that's why
    constructor(props) {
        super(props);

        this.state = {
            previousInputValue: 0,
            inputValue: 0,
            selectedSymbol: null
        }
    }

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                	<Text style={Style.displayText}>{this.state.inputValue}</Text>
                </View>
                <View style={Style.inputContainer}>
                  {this._renderInputButtons()}
                </View>
            </View>
        );
    }

    /**
     * For each row in `inputButtons`, create a row View and add create an InputButton 
     for each input in the row.
     */
    _renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];

            let inputRow = [];

            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <InputButton
                			value={input}
                			onPress={this._onInputButtonPressed.bind(this, input)}
                			key={r + "-" + i}
                		/>
                );
            }

            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
    }

    _onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input)
            case 'string':
                return this._handleStringInput(input)
        }
    }

    _handleNumberInput(num) {
        let inputValue = (this.state.inputValue * 10) + num;

        this.setState({
            inputValue: inputValue
        })
    }

    _handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                });
                break;

            case '=':
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null
                });
                break;

            case 'ce':
                this.setState(this.initialState);
                    break;

            case 'c':
                this.setState({inputValue: 0});
                break;

        }
    }

}

//natural registry
AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);