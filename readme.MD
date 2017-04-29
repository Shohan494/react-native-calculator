//natuaral imports
//natural class, named ny the project name
//natural registry
//created src/ReactCalculator.js

//imported the code of index and ios
//with this piece of line: import AwesomeProject2 from './src/ReactCalculator';

//imported view from rn
//used flexblox for background

//created src/Style.js
//exported this file via: export default Style;
//imported the same file in ReactCalculator.js via: import Style from './Style';
//and replaced the previous view code with this:
import Style from './Style';
...

<View style={Style.rootContainer}>
    <View style={Style.displayContainer}></View>
    <View style={Style.inputContainer}></View>
</View>

//created InputButton.js, added some button style in Style.js
//InputButton.js file will provide the button elements for the App

//then in the ReactCalculator.js file, we have created the multi-dimensional array, for
// showing the button elements.. With this code:
const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

//then inside the inputContainer styled view, we have called a function with this code:
{this._renderInputButtons()}
//which will call the array that we have created earlier in a nice programetic way

//edited the InputButton.js file and changed its view to TouchableHighlight for enabling the touch event for mobile

//also another function added that after touching a button an laert will be shown which
//button was touched

//Using State
//State allows us to update the UI of our applications based on dynamic data. The first 
//thing we’ll use State for is to update the display based on the numbers entered by the 
//user.

//added a constructor to our ReactCalculator class to initialize the input number to zero:
//used the value which is immutable and can be changed only via setState, its is a state 
//value, so the styles for the display has been added and added inside the 
//ReactCalculator file with this code:
<View style={Style.displayContainer}>
	<Text style={Style.displayText}>{this.state.inputValue}</Text>
</View>

////THIS IS OUTSTANDING LOGIC
//Back in our _onInputButtonPressed function, we’ll check the type of input. If the type 
//is a Number, we’ll set the inputValue on the state equal to (inputValue * 10) + input. 
//That way, each time the user enters a number, it will be added to the end of the 
//existing inputValue, with each digit shifted once to the left. For example, typing 1 
//will result in (0 * 10) + 1 = 1 because the initial inputValue is zero. Typing a 
//subsequent 2 will result in (1 * 10) + 2 = 12, because the new inputValue was set to 1.

//edited the constructor with this:
constructor(props) {
    super(props);

    this.state = {
        previousInputValue: 0,
        inputValue: 0,
        selectedSymbol: null
    }
}

//arithmetic operations are done with the _handleStringInput function

//input button highlighted styles added
