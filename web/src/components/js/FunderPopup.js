import React , {useState,useEffect} from "react";
import { handleOnChangeData } from "../../utils/utils";
import "../css/FunderPopup.css";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { InputText } from "./InputText";
import { Label } from "./Label";

function FunderPopup(props) {
    const [fund,setFund] = useState(0)

  return props.openPopup ? (
    <div className="popup">
      <div className="popup-inner">

          <button className="close-btn" onClick={() => props.setOpenPopup(false)}>
            close
          </button>
          <Label label={"Fund a task"}></Label>
          <InputText value={0} onChange={(e) =>
							handleOnChangeData(e, fund, setFund, "title")
						}></InputText>
          <PrimaryButton text={"Donate"}></PrimaryButton>

      </div>
    </div>
  ) : (
    ""
  );
}

export default FunderPopup;
