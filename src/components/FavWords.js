import React, { useEffect } from "react";
import { Button, Modal } from "antd";
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
    let operation = "Antonyms";

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
    if(enteredValue.length > 0){
      setToggleAddButton(false);
    }else{
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

  }


  const handleDeleteWord = () => {

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
                <p
                  key={word.id}
                  className=""
                  onClick={getFavouriteWords}>{word.favouriteWord}<Button type="primary" size={"small"} style={{ marginLeft: '15px' }} onClick={handleDeleteWord}>Delete</Button><hr></hr></p>
              ))}
            </div>
            <div className="col-6 col-md-6">
              {enteredValue.length <= 0 &&
                <h2>No Word Entered </h2>}
              {enteredValue.length > 0 &&
                <h2>{props.enteredWord}</h2>}
            </div>
          </div>

          <Button type="primary" disabled={toggleAddButton} size={"large"} onClick={getFavouriteWords}>Add Current Word</Button>
        </Modal>
      </div>
    </>
  )

}

export default FavWords;