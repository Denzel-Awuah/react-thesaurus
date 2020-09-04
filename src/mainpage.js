import React from 'react';
import Display from './Display.js';
import Words from './Words.js';

import './Mainpage.css';

class Mainpage extends React.Component {

   

    render() {

        return (

            <div className="App">

                <Display />
                <Words />

            </div>

        );
    }
    
  

}

export default Mainpage;