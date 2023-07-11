import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const AddedNoteBox = (props) => {
    const handleDltBtn = () =>
    {
        props.passOriHandleDltBtn(props.id);
    }
    return(
        <>
                <div className="box">
                    <div className="box-content">
                        <h1> {props.passTitle} </h1>
                        <p> {props.passContent} </p>
                        <button className="dltBtn" onClick={handleDltBtn}> <DeleteIcon/>  </button>
                        <button className="editBtn"> <EditIcon/>  </button>
                    </div>
                </div>
        </>
    )
}

export default AddedNoteBox;