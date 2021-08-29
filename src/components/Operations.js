import React from "react";
import { Button } from "antd";

const Operations = (props) => {


    return (
    <>
      <div className="row">
        <div className="col-6 col-md-12">
          <Button type="primary" className="operationBtns" onClick={props.meansLike} >Similar Meaning</Button>
          <Button type="primary" className="operationBtns" onClick={props.ryhmesWith} >Rhymes With</Button>
          <Button type="primary" className="operationBtns" onClick={props.startsWith} >Starts With</Button>
        </div>
      </div>

      <div className="row">
        <div className="col-6 col-md-12">
        <Button type="primary" className="operationBtns" onClick={props.soundsLike} >Sounds Like</Button>
          <Button type="primary" className="operationBtns" onClick={props.synonyms} >Synonyms</Button>
          <Button type="primary" className="operationBtns" onClick={props.antonyms} >Antonyms</Button>
          </div>
      </div>
    </>

)}

export default Operations;