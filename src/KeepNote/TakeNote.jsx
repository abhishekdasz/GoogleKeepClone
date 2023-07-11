import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const TakeNote = (props) => {
    const [note, setNote] = useState({
        title:"",
        content:"",
    });

    const handleInputNotes = (event) =>
    {
        const value= event.target.value;
        const name= event.target.name;

        setNote((prevData)=>{
            return {
                ...prevData,
                [name]: value,
            }
        })
        console.log(note)
    }
    const handleAddBtn = () => 
    {
        props.PassAddBtn();
    }
    return(
        <>
                <div className="note-area">
                    <div className="note-box">
                        <input type="text" placeholder="Title" name="title" value={note.title}  onChange={handleInputNotes} />
                        <textarea cols="50" rows="10" placeholder="Write a Note" name="content" value={note.content} onChange={handleInputNotes}> </textarea>

                        <div className="addBtn">
                            <button onClick={handleAddBtn}> <AddIcon/> </button>
                        </div>     
                    </div>
                </div>
        </>
    )
}

export default TakeNote;