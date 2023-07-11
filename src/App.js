import { useState } from 'react';
import './App.css';
import AddedNoteBox from './KeepNote/AddedNoteBox';
import Header from './KeepNote/header';
import SideBar from './KeepNote/SideBar';
import TakeNotes from './KeepNote/TakeNotes';

const App = (props) => {
  const [addNote,setAddNote]= useState([]);
  const origHandleAddBtn = (notes) =>
  {
    setAddNote((prevValue)=>{
        return[
          ...prevValue,
          notes,
        ]
    })
    console.log(addNote);
  }

  const origHandleDltBtn = (id) =>
  {
    setAddNote((prevValue)=>{
      let newArr = prevValue.filter( (arrEle, index) =>{
        return index !== id;
      } )
      return newArr;
    })
  }

  return (
    <>
      <Header/>
      <div className="sideBarNotes">
        <SideBar/>
        <TakeNotes passOriHandleAddBtn={origHandleAddBtn} />
      </div>
      <div className='box-container'> 
      {addNote.map((currValue, index)=>{
        return <AddedNoteBox key={index} id={index} passTitle={currValue.title} passContent={currValue.content} passOriHandleDltBtn={origHandleDltBtn} /> 
      }) }
      </div>
      {/* <AddedNoteBox/> */}
    </>
  );
}

export default App;




      {/* <TakeNote PassAddBtn = { handleOrAddBtn }  PassTitle = { addNote }  /> */}