import React from 'react';


import './Words.css';

class Words extends React.Component {
  
    render() {
        return (
           
         <div className="words">
            <div className="container"> 
                    <div className="row">
                            <div className="col-md-4">
                                <p>Word 1</p>
                                <p>Word 2</p>
                                <p>Word 3</p>
                                <p>Word 4</p>
                            </div>
                            <div className="col-md-4">
                            <p>Word 5</p>
                            <p>Word 6</p>
                            <p>Word 7</p>
                            <p>Word 8</p>
                            </div>
                            <div className="col-md-4">
                            <p>Word 5</p>
                            <p>Word 6</p>
                            <p>Word 7</p>
                            <p>Word 8</p>
                            </div>
                    </div>
             </div>
         </div>
          
         
        );
    }   

}



export default Words;