import React, { useState } from 'react';
import './Display.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  Button,
  notification,
  Card,
  Modal
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { wordActions } from './store';
import { env } from 'yargs';
import UserInputForm from './components/UserInputForm';
import FavWords from './components/FavWords';
import Operations from './components/Operations';


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
  const clearWords = () => {
    //setWords([]);
    dispatch(wordActions.updateWords([]));
  }


  // const openNotification = (data, operation) => {
  //   notification.open({
  //     message: 'You Performed the ' + operation + " Operation",
  //     description:
  //       'Operation returned ' + data.length + " results.",
  //     onClick: () => {
  //       console.log('Notification Clicked!');
  //     },
  //     className: 'notification-box',
  //   });
  // };


  const openNotificationWithIcon = (type, operation, data) => {
    notification[type]({
      message: ((type === 'success') ? 'Successful Operation!': "ERROR!"),
      description:
       ((type === 'success') ? operation+ ' operation returned ' + data.length + ' results!': "Operation returned 0 results!"),
    });
  }; 
  
  const openNotificationWithIconNullError = (type, operation, data) => {
    notification[type]({
      message: 'Error!',
      description:'You Must Enter a Word First!',
    });
  };




  //----Operation Buttons-----\\

  //Handles Means like button
  const meansLike = (event) => {
    let operation = "Similar Meaning"
    event.preventDefault();
    const tvalue = value.trim;
    if (tvalue === "" || tvalue === null) {
      alert("You must enter a word first!");
    }
    else {
      fetch("https://api.datamuse.com//words?ml=" + value)
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
    if (tvalue === "" || tvalue === null) {
      alert("You must enter a word first!");
    }
    else {
      fetch("https://api.datamuse.com	/words?rel_rhy=" + value)
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
  const startsWith = (event) => {
    let operation = "Starts With"
    event.preventDefault();
    const tvalue = value.trim;
    if (tvalue === "" || tvalue === null) {
      alert("You must enter a word first!");
    }
    else {
      fetch("https://api.datamuse.com/words?sp=" + value + "*")
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
    if (tvalue === "" || tvalue === null) {
      alert("You must enter a word first!");
    }
    else {
      fetch("https://api.datamuse.com/words?sl=" + value)
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

  //Handles Synonyms button
  const synonyms = (event) => {
    let operation = "Synonyms";
    event.preventDefault();
    const tvalue = value.trim;
    if (tvalue === "" || tvalue === null) {
      alert("You must enter a word first!");
    }
    else {
      fetch("https://api.datamuse.com	/words?rel_syn=" + value)
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
    if (tvalue === "" || tvalue === null) {
      alert("You must enter a word first!");
    }
    else {
      fetch("https://api.datamuse.com	/words?rel_ant=" + value)
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



    if (data.length === 0 && value === "") {
      //alert("You must enter a word before performing an operation !")
      openNotificationWithIconNullError('error' , operation, data);

    }
    else if (data.length === 0) {
      openNotificationWithIcon('warning' , operation, data);
    }
    else {
      //openNotification(data, operation);
      openNotificationWithIcon('success' , operation, data);
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


      <div className="row firstRow">
      
        <UserInputForm submitEvent={submitEvent} value={value} handleChange={handleChange} />
       
        <FavWords enteredWord={value}/>
       
      </div>



      <h3><span className="theword">{value}</span></h3>



      <Operations 
       meansLike={meansLike}
       ryhmesWith={ryhmesWith} 
       startsWith={startsWith} 
       soundsLike={soundsLike} 
       synonyms={synonyms} 
       antonyms={antonyms} />




      <h3 className="select" > Select an operation to perform on a word/phrase</h3>




      <div className="container ">

        <br />
        <br />

        <div className="allWords">
          <Card title="Operation Results" bordered={true} style={{ width: 900, backgroundColor: "#a1d9a9be" }}>
            {words.map((word) => (
              <button
                key={word.word}
                className="raise"
                onClick={changeWord}>{word.word}</button>
            ))}
          </Card>
        </div>


      </div>






    </div>
  );
}



export default Display;