import React from "react";


const UserInputForm = (props) => {

    return(
    <>
    <div className="col-6 col-md-4 enterWord"><h3 className="enterH">Enter a Word/Phrase:</h3></div>
    <div className="col-6 col-md-4 wordForm">

      <form id="word-form" onSubmit={props.submitEvent}>
        <input id="word-input" value={props.value} onChange={props.handleChange} className="Display" type="text" placeholder="Enter word to process" ></input>
      </form>

    </div>
    </>
  )

}

export default UserInputForm;