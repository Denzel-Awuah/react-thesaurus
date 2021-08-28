import React from "react";
import { Button, Modal } from "antd";
import { useState } from "react";

const FavWords = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false);


  const showModal = () => {
    setIsModalVisible(true);
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

  return (
    <>
      <div class="col-6 col-md-4 favWordBtn">
        <Button type="primary" onClick={showModal}>
          Favourite Words
        </Button>
        <Modal title="Favourite Words" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div class="row">
            <div class="col-6 col-md-6">
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </div>
            <div class="col-6 col-md-6"><h2>{props.enteredWord}</h2></div>
          </div>

          <Button type="primary" size={"small"} onClick={handleAddWordToDb}>Add Current Word</Button>
        </Modal>
      </div>
    </>
  )

}

export default FavWords;