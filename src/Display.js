import React, { useState } from 'react';
import './Display.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { 
  Button,
  notification,
  Card
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { wordActions } from './store';
import { env } from 'yargs';


const Display = (props) => {

  // const [value , setValue]  = useState("");
  // const [words , setWords]  = useState([]);

  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);
  const words = useSelector((state) => state.allWords);

  //Runs when user starts typing a word 
  const handleChange = (event) => {
    dispatch(wordActions.updateValue(event.target.value));
  }


  const submitEvent = (event) => {
    event.preventDefault();
  }

  //Clear all the words 
 const clearWords= () =>{
    //setWords([]);
    dispatch(wordActions.updateWords([]));
  }


  const openNotification = (data, operation) => {
    notification.open({
      message: 'You Performed the ' + operation + " Operation",
      description:
        'Operation returned '+ data.length + " results.",
      onClick: () => {
        console.log('Notification Clicked!');
      },
      className: 'notification-box',
    });
  };





//----Operation Buttons-----\\

//Handles Means like button
const meansLike = (event) => {
  let operation = "Similar Meaning"
  event.preventDefault();
  const tvalue = value.trim;
  if(tvalue === "" || tvalue === null){
    alert("You must enter a word first!");
  }
  else{
    fetch("https://api.datamuse.com//words?ml="+value)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      clearWords();
      //setWords(data);
      dispatch(wordActions.updateWords(data));
      checkWords(data, operation);      
    })
    .catch(err => console.log(err));
  }
}


//Handles Ryhmes with button
const ryhmesWith = (event) => {
  let operation = "Rhymes With";
  event.preventDefault();
  const tvalue = value.trim;
  if(tvalue === "" || tvalue === null){
    alert("You must enter a word first!");
  }
  else{
    fetch("https://api.datamuse.com	/words?rel_rhy="+value)
    .then(res => res.json())
    .then(data => {
      clearWords();
     // setWords(data); 
     dispatch(wordActions.updateWords(data));
      checkWords(data, operation);     
    })
    .catch(err => console.log(err));
  }
}


//Handles Starts with button
const startsWith = (event) =>{
  let operation = "Starts With"
  event.preventDefault();
  const tvalue = value.trim;
  if(tvalue === "" || tvalue === null){
    alert("You must enter a word first!");
  }
  else{
    fetch("https://api.datamuse.com/words?sp="+value+"*")
    .then(res => res.json())
    .then(data => {
      clearWords();
      //setWords(data); 
      dispatch(wordActions.updateWords(data));
      checkWords(data, operation);     
    })
    .catch(err => console.log(err));
  }
}


//Handles Sounds Like Button
const soundsLike = (event) => {
  let operation = "Sounds Like"
  event.preventDefault();
  const tvalue = value.trim;
  if(tvalue === "" || tvalue === null){
    alert("You must enter a word first!");
  }
  else{
    fetch("https://api.datamuse.com/words?sl="+value)
    .then(res => res.json())
    .then(data => {
      clearWords();
     // setWords(data); 
     dispatch(wordActions.updateWords(data)); 
      checkWords(data, operation);})
    .catch(err => console.log(err));
  }
}

//Handles Synonyms button
const synonyms = (event) => {
  let operation = "Synonyms";
  event.preventDefault();
  const tvalue = value.trim;
  if(tvalue === "" || tvalue === null){
    alert("You must enter a word first!");
  }
  else{
    fetch("https://api.datamuse.com	/words?rel_syn="+value)
    .then(res => res.json())
    .then(data => {
      clearWords();
      //setWords(data);  
      dispatch(wordActions.updateWords(data));
      checkWords(data, operation);  
    })
    .catch(err => console.log(err));
  }
}


//Handles Antonyms button
const antonyms = (event) => {
  let operation = "Antonyms";
  event.preventDefault();
  const tvalue = value.trim;
  if(tvalue === "" || tvalue === null){
    alert("You must enter a word first!");
  }
  else{
    fetch("https://api.datamuse.com	/words?rel_ant="+value)
    .then(res => res.json())
    .then(data => {
      clearWords();
      //setWords(data);       
      dispatch(wordActions.updateWords(data));
      checkWords(data, operation);
    })
    .catch(err => console.log(err));
  }
}

const checkWords = (data, operation) => {

 

  if(data.length === 0 && value === "") {
    alert("You must enter a word before performing an operation !")
  }
  else if(data.length === 0){
    alert("Couldn't find any results for the operation on word: " + value )
  }
  else{
    openNotification(data, operation);
  }



}


//Updates word when user is typing
const changeWord = (event) => {
  //setValue(event.target.innerHTML);
  dispatch(wordActions.updateValue(event.target.innerHTML));
}



//--------------------------------------------------------------------------------------------------------------\\  
    
       return (
      <div className="wordprocessor">

          <h1 className="title">Welcome to the Word Processor / Thesaurus App!</h1>

            <form  id="initial-word-form"  onSubmit={submitEvent}>
                <input id="word-input" value={value} onChange={handleChange} className="Display" type="text"  placeholder="Enter word to process" ></input>
            </form>

             
              <h3><span className="theword">{value}</span></h3>



            <div className="col-md-12 row" >
              
              <Button type="primary" className="operationBtns" onClick={meansLike} >Similar Meaning</Button>
              <Button type="primary" className="operationBtns" onClick={ryhmesWith} >Rhymes With</Button>
              <Button type="primary" className="operationBtns" onClick={startsWith} >Starts With</Button>
                  {/* <button onClick={meansLike}className="operationBtns">Similar Meaning</button>
                  <button onClick={ryhmesWith} className="operationBtns">Rhymes With</button>
                  <button onClick={startsWith}className="operationBtns">Starts With</button> */}
            </div>
            <div className="col-md-12 row">
            <Button type="primary" className="operationBtns" onClick={soundsLike} >Sounds Like</Button>
              <Button type="primary" className="operationBtns" onClick={synonyms} >Synonyms</Button>
              <Button type="primary" className="operationBtns" onClick={antonyms} >Antonyms</Button>
                  {/* <button onClick={soundsLike}className="operationBtns">Sounds Like</button>
                  <button onClick={synonyms}className="operationBtns">Synonyms</button>
                  <button onClick={antonyms}className="operationBtns">Antonyms</button> */}
            </div>

       
          

          <h3 className="select" > Select an operation to perform on a word/phrase</h3>
          





         <div className="container thepage">
              
              <br/>
              <br/>
       
              <div className="col-md-12">
                {words.map((word) =>  (
                    <button
                    key={word.word} 
                    className="raise" 
                    onClick={changeWord}>{word.word}</button>
                ))}
              </div>
  

        </div>



          


    </div>
   );
}



export default Display;