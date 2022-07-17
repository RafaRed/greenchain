import React, { useState, useEffect } from "react";
import { handleOnChangeData } from "../../utils/utils";
import "../css/FunderPopup.css";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { InputText } from "./InputText";
import { Label } from "./Label";
import { Title } from "./Title";

function FunderPopup(props) {
  const [fund, setFund] = useState(0)

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

          <InputText value={''} placeholder='$USDT' onChange={(e) =>
            handleOnChangeData(e, fund, setFund, "title")
          }></InputText>

          <div className='register-btn-frame'>
            <PrimaryButton text={"Fund"}></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default FunderPopup;
