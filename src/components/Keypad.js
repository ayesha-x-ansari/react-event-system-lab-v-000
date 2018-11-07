<<<<<<< HEAD
import React from 'react';
=======
const React = require('react');
>>>>>>> aa9dcc4e44a3fd3f05a7a8bd2da0ff81657835f0

class Keypad extends React.Component {
  constructor() {
    super();

    this.handleInputPassword = this.handleInputPassword.bind(this);
  }

  handleInputPassword() {
    console.log('Entering password...');
  }

  render() {
<<<<<<< HEAD
    debugger
=======
>>>>>>> aa9dcc4e44a3fd3f05a7a8bd2da0ff81657835f0
    return (
      <div>
        <input type="password" onKeyUp={this.handleInputPassword}/>
      </div>
    );
  }
}

<<<<<<< HEAD
export default Keypad;
=======
<<<<<<< HEAD
export default Keypad;
=======
module.exports = Keypad;
>>>>>>> aa9dcc4e44a3fd3f05a7a8bd2da0ff81657835f0
>>>>>>> 71cdab1037c99a80a36813df8e10e482f6cda79c
