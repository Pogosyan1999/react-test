import React,{useState} from "react";
import style from "./style.module.scss";
import Form from "../../../components/form/Form";

const Herobutton = (props) => {
 const [popup, setPopup] = useState(false);
  return (
    <>
      <button className={style.btn} onClick = {()=>{setPopup(true)}}>Начать зарабатывать на NFT</button>
      <Form trigger = {popup} setTrigger = {setPopup}/>
    </>
  );
};

export default Herobutton;
