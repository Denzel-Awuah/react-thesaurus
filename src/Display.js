import React from 'react';
import './Display.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Display extends React.Component {

  constructor(props){
    super(props);

     //Default State
     this.state = {
       value:"",  //value entered by user
       button1: "", button2: "",   button3: "", button4: "",
       button5: "", button6: "", button7: "", button8: "",
       button9: "",button10: "",button11: "", button12: "",
       button13: "",button14: "",button15: "",button16: "",
       button17: "",button18: "", button19: "",button20: "",
       button21: "", button22: "", button23: "",button24: "",
       button25: "", button26: "", button27: "", button28: "",
       button29: "", button30: "",button31: "", button32: "",
       button33: "", button34: "",button35: "",button36: "",
       button37: "", button38: "", button39: "", button40: "",
       button41: "", button42: "", button43: "", button44: "",
       button45: "", button46: "", button47: "", button48: "",
     
     }

     //Event Methods
     this.handleChange = this.handleChange.bind(this);
     this.submitEvent = this.submitEvent.bind(this);
     this.meansLike = this.meansLike.bind(this);
     this.ryhmesWith = this.ryhmesWith.bind(this);
     this.synonyms = this.synonyms.bind(this);
     this.antonyms = this.antonyms.bind(this);
     this.startsWith = this.startsWith.bind(this);
     this.soundsLike = this.soundsLike.bind(this);
     this.changeWord = this.changeWord.bind(this);
  }


  //Runs when user starts typing a word 
  handleChange(event) {
    this.setState({value: event.target.value});
  }


  submitEvent(event){
    event.preventDefault();
  }

  //Clear all the words 
  clearWords(){
    this.setState({button1: ""});
    this.setState({button2: ""});
    this.setState({button3: ""});
    this.setState({button4: ""});
    this.setState({button5: ""});
    this.setState({button6: ""});
    this.setState({button7: ""});
    this.setState({button8: ""});
    this.setState({button9: ""});
    this.setState({button10: ""});
    this.setState({button11: ""});
    this.setState({button12: ""});
    this.setState({button13: ""});
    this.setState({button14: ""});
    this.setState({button15: ""});
    this.setState({button16: ""});
    this.setState({button17: ""});
    this.setState({button18: ""});
    this.setState({button19: ""});
    this.setState({button20: ""});
    this.setState({button21: ""});
    this.setState({button22: ""});
    this.setState({button23: ""});
    this.setState({button24: ""});
    this.setState({button25: ""});
    this.setState({button26: ""});
    this.setState({button27: ""});
    this.setState({button28: ""});
    this.setState({button29: ""});
    this.setState({button30: ""});
    this.setState({button31: ""});
    this.setState({button32: ""});
    this.setState({button33: ""});
    this.setState({button34: ""});
    this.setState({button35: ""});
    this.setState({button36: ""});
    this.setState({button37: ""});
    this.setState({button38: ""});
    this.setState({button39: ""});
    this.setState({button40: ""});
    this.setState({button41: ""});
    this.setState({button42: ""});
    this.setState({button43: ""});
    this.setState({button44: ""});
    this.setState({button45: ""});
    this.setState({button46: ""});
    this.setState({button47: ""});
    this.setState({button48: ""});

  }

//Populate the word buttons
addWords(data){

  if(data.length > 1){
  this.setState({button1: data[0].word});
  this.setState({button2: data[1].word});
  this.setState({button3: data[2].word});
  this.setState({button4: data[3].word});
  this.setState({button5: data[4].word});
  this.setState({button6: data[5].word});
  this.setState({button7: data[6].word});
  this.setState({button8: data[7].word});
  this.setState({button9: data[8].word});
  this.setState({button10: data[9].word});
  this.setState({button11: data[10].word});
  this.setState({button12: data[11].word});
  this.setState({button13: data[12].word});
  this.setState({button14: data[13].word});
  this.setState({button15: data[14].word});
  this.setState({button16: data[15].word});
  this.setState({button17: data[16].word});
  this.setState({button18: data[17].word});
  this.setState({button19: data[18].word});
  this.setState({button20: data[19].word});
  this.setState({button21: data[20].word});
  this.setState({button22: data[21].word});
  this.setState({button23: data[22].word});
  this.setState({button24: data[23].word});
  this.setState({button25: data[24].word});
  this.setState({button26: data[25].word});
  this.setState({button27: data[26].word});
  this.setState({button28: data[27].word});
  this.setState({button29: data[28].word});
  this.setState({button30: data[29].word});
  this.setState({button31: data[30].word});
  this.setState({button32: data[31].word});
  this.setState({button33: data[32].word});
  this.setState({button34: data[33].word});
  this.setState({button35: data[34].word});
  this.setState({button36: data[35].word});
  this.setState({button37: data[36].word});
  this.setState({button38: data[37].word});
  this.setState({button39: data[38].word});
  this.setState({button40: data[39].word});
  this.setState({button41: data[40].word});
  this.setState({button42: data[41].word});
  this.setState({button43: data[42].word});
  this.setState({button44: data[43].word});
  this.setState({button45: data[44].word});
  this.setState({button46: data[45].word});
  this.setState({button47: data[46].word});
  this.setState({button48: data[47].word});  
  }else{
    alert("Could not find any results for the word: "+ this.state.value);
  }
  
  // for (let index = 0; index < 16; index++) {
  //   let tempindex = index+1;
  //   let tempButton = "button"+tempindex;
  //   this.setState({tempButton:  data[index].word});   
  // }
  
}


//----Operation Buttons-----\\

//Handles Means like button
meansLike(event){
  event.preventDefault();
  const tvalue = this.state.value;
  if(tvalue == "" || tvalue == null){
    alert("You must enter a word first!");
  }
  else{
    fetch("https://api.datamuse.com//words?ml="+this.state.value)
    .then(res => res.json())
    .then(data => {
      this.clearWords();
      this.addWords(data);
      console.log(data);
    })
    .catch(err => console.log(err));
  }
}
//Handles Ryhmes with button
ryhmesWith(event){
  event.preventDefault();
  const tvalue = this.state.value;
  if(tvalue == "" || tvalue == null){
    alert("You must enter a word first!");
  }
  else{
    fetch("https://api.datamuse.com	/words?rel_rhy="+this.state.value)
    .then(res => res.json())
    .then(data => {
      this.clearWords();
      console.log(data);
      this.addWords(data);
      
    })
    .catch(err => console.log(err));
  }
}
//Handles Starts with button
startsWith(event){
  event.preventDefault();
  const tvalue = this.state.value;
  if(tvalue == "" || tvalue == null){
    alert("You must enter a word first!");
  }
  else{
    fetch("https://api.datamuse.com/words?sp="+this.state.value+"*")
    .then(res => res.json())
    .then(data => {
      this.clearWords();
      this.addWords(data);
      console.log(data);
    })
    .catch(err => console.log(err));
  }
}
//Handles Sounds Like Button
soundsLike(event){
  event.preventDefault();
  const tvalue = this.state.value;
  if(tvalue == "" || tvalue == null){
    alert("You must enter a word first!");
  }
  else{
    fetch("https://api.datamuse.com/words?sl="+this.state.value)
    .then(res => res.json())
    .then(data => {
      this.clearWords();
      this.addWords(data);
      console.log(data);
    })
    .catch(err => console.log(err));
  }
}
//Handles Synonyms button
synonyms(event){
  event.preventDefault();
  const tvalue = this.state.value;
  if(tvalue == "" || tvalue == null){
    alert("You must enter a word first!");
  }
  else{
    fetch("https://api.datamuse.com	/words?rel_syn="+this.state.value)
    .then(res => res.json())
    .then(data => {
      this.clearWords();
      console.log(data);
      this.addWords(data);
      
    })
    .catch(err => console.log(err));
  }
}
//Handles Antonyms button
antonyms(event){
  event.preventDefault();
  const tvalue = this.state.value;
  if(tvalue == "" || tvalue == null){
    alert("You must enter a word first!");
  }
  else{
    fetch("https://api.datamuse.com	/words?rel_ant="+this.state.value)
    .then(res => res.json())
    .then(data => {
      this.clearWords();
      console.log(data);
      this.addWords(data);
      
    })
    .catch(err => console.log(err));
  }
}


//Updates word when user is typing
changeWord(event){
  this.setState({value: event.target.innerHTML});
}





//--------------------------------------------------------------------------------------------------------------\\  
    render() {
        return (
    
    
      <div className="wordprocessor">
            <form  id="initial-word-form"  onSubmit={this.submitEvent}>
                <input id="word-input" value={this.state.value} onChange={this.handleChange} className="Display" type="text"  placeholder="Enter initial word..." ></input>
            </form>

             
              


              <h3><span className="theword">{this.state.value}</span></h3>



            <div className="col-md-12">
                  <button onClick={this.meansLike}className="operationBtns">Similar Meaning</button>
                  <button onClick={this.ryhmesWith} className="operationBtns">Rhymes With</button>
                  <button onClick={this.startsWith}className="operationBtns">Starts With</button>
                  <button onClick={this.soundsLike}className="operationBtns">Sounds Like</button>
                  <button onClick={this.synonyms}className="operationBtns">Synonyms</button>
                  <button onClick={this.antonyms}className="operationBtns">Antonyms</button>
            </div>

            <br/>           
            <br/>
            <br/>           
            <br/>
            
          

          <h3>&#8593; Select an operation to perform on a word/phrase &#8593;</h3>
          
         <div className="container thepage">
         <br/>
         <br/>
            <div className="col-md-12">
              <button className="raise" onClick={this.changeWord}>{this.state.button1}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button2}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button3}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button4}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button5}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button6}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button7}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button8}</button>
            </div>
              

            <div className="col-md-12">
              <button className="raise" onClick={this.changeWord}>{this.state.button9}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button10}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button11}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button12}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button13}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button14}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button15}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button16}</button>
            </div>

            <div className="col-md-12">
              <button className="raise" onClick={this.changeWord}>{this.state.button17}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button18}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button19}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button20}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button21}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button22}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button23}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button24}</button>
            </div>


            <div className="col-md-12">
              <button className="raise" onClick={this.changeWord}>{this.state.button25}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button26}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button27}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button28}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button29}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button30}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button31}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button32}</button>
            </div>


            <div className="col-md-12">
              <button className="raise" onClick={this.changeWord}>{this.state.button33}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button34}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button35}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button36}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button37}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button38}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button39}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button40}</button>
            </div>


            <div className="col-md-12">
              <button className="raise" onClick={this.changeWord}>{this.state.button41}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button42}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button43}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button44}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button45}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button46}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button47}</button>
              <button className="raise" onClick={this.changeWord}>{this.state.button48}</button>
            </div>

        </div>



          


    </div>


        );
    }

}



export default Display;