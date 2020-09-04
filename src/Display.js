import React from 'react';
import './Display.css';


class Display extends React.Component {

  submitEvent(event){
    event.preventDefault();
  }

    render() {
        return (
            <form  id="initial-word-form" onSubmit={this.submitEvent}>
                <input id="word-input" className="Display" type="text" placeholder="Enter initial word..." ></input>

            </form>
        );
    }

}



export default Display;