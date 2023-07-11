import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const TakeNotes = (props) =>
{
    const [expand, setExpand] = useState(false);
    const handleExpand = () =>
    {   
        setExpand(true);
    }
    const handleDblClick = () =>
    {
        setExpand(false);
    }
    const [notes, setNotes] = useState({
        title:"",
        content:"",
    })

    const handleInputNotes = (event) =>
    {
        const value = event.target.value;
        const name = event.target.name;
        setNotes( (prevData) => {
            return{
                ...prevData,
                [name]: value,
            }
        } )
        console.log(notes)
    }

    const handleAddBtn = () =>
    {
        props.passOriHandleAddBtn(notes);
        setNotes({
            title:"",
            content:"",
        })
    }
    return(
        <>
            <div className="note-area">
                <div className="note-box">
                    {expand ? <input type="text" placeholder="Title" onChange={handleInputNotes} value={notes.title} name="title" /> : null}
                    <textarea cols="30" rows="10" placeholder="Enter text here" onChange={handleInputNotes} value={notes.content} name="content" onClick={handleExpand} onDoubleClick={handleDblClick} ></textarea>

                    <div className="addBtn">
                        {expand ? <button onClick={handleAddBtn}> <AddIcon></AddIcon> </button> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakeNotes;