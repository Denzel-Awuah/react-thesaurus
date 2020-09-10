import React from 'react';
import Display from './Display.js';


class Engine extends React.Component {

    constructor(props){
        super(props);
        const proxyURL = "https://cors.io/?"; // This is in order to bypass the 'Access-Control-Allow-Origin' error
        const maxRelatedWordDistance = 10; 
    }

    submitEvent(event){
        event.preventDefault();
        this.initialWordInput = Display.initialWordInput;
        const newInitialWordInput = this.initialWordInput.value.trim().toLowerCase();
        if(newInitialWordInput) {
            this.relatedWord.text = newInitialWordInput;
            this.history.innerHTML = `<span>${newInitialWordInput}</span>`;
            this.initialWordInput.value = "";
            this.initialWordInput.blur();
          }
      }
    
      getWords(event){
        event.preventDefault();
        fetch("https://api.datamuse.com/words?rel_rhy=denzel")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
      }


}

export default Engine;