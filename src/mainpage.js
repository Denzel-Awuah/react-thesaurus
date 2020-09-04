import React from 'react';
import Display from './Display.js';
import Button from './Button.js';

import './mainpage.css';

class mainpage extends React.Component {


    render() {

        return (

            <div className="Calculator">

                <Display display={this.state.display} />



                <Button value="Means Like" className="Button BlackButton" onClick={this.handleButtonClick} />
                <Button value="Rhymes With" className="Button BlackButton" onClick={this.handleButtonClick} />
                <Button value="Starts With" className="Button BlackButton" onClick={this.handleButtonClick} />
                <Button value="Sounds Like" className="Button BlackButton" onClick={this.handleButtonClick} />

                <br />

                <Button  id="theWord" value="Results for word ___" className="Button LargeButton" onClick={this.handleButtonClick} />
               
                <br />

                <Button value="" className="Buttons GrayButton " onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton " onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />

                <br />

                <Button value="" className="Buttons GrayButton " onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton " onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />

                <br />

                <Button value="" className="Buttons GrayButton " onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton " onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />

                <br />

                <Button value="" className="Buttons GrayButton " onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton " onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />
                <Button value="" className="Buttons GrayButton" onClick={this.handleButtonClick} />



            </div>

        );
    }
    
  

}

export default mainpage;