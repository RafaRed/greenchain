import React, { useState, useEffect } from "react";
import { handleOnChangeData } from "../../utils/utils";
import "../css/ContactPopup.css";
import { InputText } from "./InputText";
import { Label } from "./Label";
import { Title } from "./Title";

function ContactPopup(props) {
    const [fund, setFund] = useState(0)
    console.log(props.task)

    return props.openPopup ? (
        <div className="popup">
            <div className="popup-inner">
                <div className='register-btn-frame'>
                    <div className="close-frame" onClick={() => props.setOpenPopup(false)}>
                        <img src="/images/close.svg"></img>
                    </div>
                </div>

                <div className="fundtask-frame">

                    <Title title='Contact'></Title>

                    <Label label={"E-mail"}></Label>

                    <InputText value={props.user.email} onChange={(e) =>
                        handleOnChangeData(e, fund, setFund, "title")
                    }> </InputText>

                    <Label label={"Discord"}></Label>
                    <InputText value={props.user.discord} onChange={(e) =>
                        handleOnChangeData(e, fund, setFund, "title")
                    }> </InputText>

                    <Label label={"Twitter"}></Label>
                    <InputText value={props.user.twitter} onChange={(e) =>
                        handleOnChangeData(e, fund, setFund, "title")
                    }> </InputText>


                    <Label label={"Phone"}></Label>
                    <InputText value={props.user.email} onChange={(e) =>
                        handleOnChangeData(e, fund, setFund, "title")
                    }> </InputText>
                </div>
            </div>
        </div>
    ) : (
        ""
    );
}

export default ContactPopup;
