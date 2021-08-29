import React, { useEffect } from "react";
import { 
  Button,
   Modal,
  Popconfirm,
  message
 } from "antd";

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

const FavWords = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [favouriteWords, setFavouriteWords] = useState([]);
  const [toggleAddButton, setToggleAddButton] = useState(true);

  const enteredValue = useSelector((state) => state.value);


  // useEffect(() => {
  //   getFavouriteWords();
  // },[]);

  //Handles Antonyms button
  const getFavouriteWords = (event) => {

    fetch("/spring-rest-thesaurus-app/api/favwords")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFavouriteWords(data);
      })
      .catch(err => console.log(err));

  }

  const showModal = () => {
    setIsModalVisible(true);
    getFavouriteWords();
    if (enteredValue.length > 0) {
      setToggleAddButton(false);
    } else {
      setToggleAddButton(true);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  //Add the Word to the MySql Database 
  const handleAddWordToDb = () => {


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ favouriteWord: enteredValue })
    };
    fetch('/spring-rest-thesaurus-app/api/favwords', requestOptions)
      .then(response => response.json())
      .then(data =>{
        console.log("Succuessfully added " + enteredValue + " to you favourite words list");
        getFavouriteWords();
      });
  }



  function confirmDelete(wordId) {
    console.log(wordId);

    fetch('/spring-rest-thesaurus-app/api/favwords/'+wordId, { method: 'DELETE' })
    .then(() => {
      message.success('Successfully deleted');
      getFavouriteWords();
    });
  }


  
  function cancel(e) {
    console.log(e);
    message.error('Did not delete');
  }









  const handleDeleteWord = () => {
    console.log("delete method clicked")
  }



  return (
    <>
      <div className="col-6 col-md-4 favWordBtn">
        <Button className="operationBtns" type="primary" onClick={showModal}>
          Favourite Words
        </Button>
        <Modal title="Favourite Words" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="row">
            <div className="col-6 col-md-6">
              {favouriteWords.map((word) => (
               <div
               key={word.id}>
               <p className="favWordp">{word.favouriteWord}</p>
                  <Popconfirm
                  title="Are you sure to delete this word?"
                  onConfirm={() => confirmDelete(word.id)}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No">
                  <Button type="primary" size={"small"}  style={{ marginLeft: '15px' }} >Delete</Button>
                </Popconfirm><hr className="favwordDivider"></hr></div>
              ))}
            </div>
            <div className="col-6 col-md-6">
              {enteredValue.length <= 0 &&
                <h2>No Word Entered </h2>}
              {enteredValue.length > 0 &&
                <h2>{props.enteredWord}</h2>}
            </div>
          </div>

          <Button type="primary" disabled={toggleAddButton} size={"large"} onClick={handleAddWordToDb}>Add Current Word</Button>
        </Modal>
      </div>
    </>
  )

}

export default FavWords;