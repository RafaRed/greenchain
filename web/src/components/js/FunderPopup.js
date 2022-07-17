import React, { useState, useEffect, useRef } from "react";
import { sendFundTask } from "../../model/Calls/server";
import { handleOnChangeData } from "../../utils/utils";
import "../css/FunderPopup.css";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { InputText } from "./InputText";
import { Label } from "./Label";
import { Title } from "./Title";

function FunderPopup(props) {
  const [fund, setFund] = useState({})
  const [fundButtonText, setFundButtonText] = useState("Fund")
  console.log(props)
  return props.openPopup ? (
    <div className="popup">
      <div className="popup-inner">
        <div className='register-btn-frame'>
          <div className="close-frame" onClick={() => props.setOpenPopup(false)}>
            <img src="/images/close.svg"></img>
          </div>
        </div>

        <div className="fundtask-frame">

          <Title title='Fund a Task'></Title>

          <Label label={"How much would you like to help?"}></Label>

          <InputText value={''} placeholder='$USDT' type='number' onChange={(e) =>
            handleOnChangeData(e, fund, setFund, "value")
          }></InputText>

          <div className='register-btn-frame'>
            <PrimaryButton text={fundButtonText} onClick={()=>FundTask(props.task_id,props.report_id,props.user_id,fund['value'],setFundButtonText)}></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

function FundTask(task_id, report_id, user_id, donation,setFundButtonText){
  setFundButtonText("Loader")
  sendFundTask({"user_id":user_id,"report_id":report_id,"task_id":task_id,"donation":donation }).then(()=>{
    window.location.reload(false)
  })
}

export default FunderPopup;
