import "../css/Newreport.css";
import { React, useState, useRef } from "react";
import { BackBar } from "../../components/js/BackBar";
import { NavBar } from "../../components/js/NavBar";
import { Label } from "../../components/js/Label";
import { Title } from "../../components/js/Title";
import { InputText } from "../../components/js/InputText";
import { PrimaryButton } from "../../components/js/PrimaryButton";
import { Divider } from "../../components/js/Divider";
import {
	getBase64,
	handleOnChangeData,
	handleOnChangeDataData,
} from "../../utils/utils";
import { sendReport } from "../../model/Calls/server";

function Newreport() {
	const [report, setReport] = useState({});
	const [location, setLocation] = useState({});
	const [userid, setUserid] = useState(0);
	const fileInput = useRef(null);
    const [buttonSubmitName, setButtonSubmitName] = useState("Submit");
	
	const selectFile = () => {
		fileInput.current.click();
	};
	const [files, setFiles] = useState([]);

	return (
		<>
			<NavBar></NavBar>

			<div className="Newreport">
				<BackBar title={"New Report"} path={"/"}></BackBar>

				<div className="frame">
					<Title title="Informations"></Title>

					<Label label={"Report Title"}></Label>
					<InputText
						onChange={(e) =>
							handleOnChangeData(e, report, setReport, "title")
						}></InputText>

					<Label label={"Description"}></Label>

					<div className="textarea-frame">
						<textarea
							placeholder=""
							rows="4"
							cols="50"
							onChange={(e) =>
								handleOnChangeData(e, report, setReport, "description")
							}>
							{" "}
						</textarea>
					</div>

					<div className="images-title">Images</div>

					<div className="buttonchipsphotos-frame">
						<div className="addphotos-frame">
							<div className="addphotos-btn">
								<PrimaryButton text={"Add Photos"} onClick={selectFile}></PrimaryButton>
								<input
									ref={fileInput}
									onChange={(e) => addImage(e, files, setFiles)}
									type="file"
									style={{ display: "none" }}
								/>
							</div>
						</div>
						<RenderFiles files={files}></RenderFiles>
					</div>

					<Divider></Divider>

					<Title title="Report Location"></Title>

					<Label label="Address"></Label>
					<InputText
						onChange={(e) =>
							handleOnChangeData(e, location, setLocation, "address")
						}></InputText>

					<div className="row-inputs">
						<div className="label-input-country">
							<Label label="Country"></Label>
							<InputText
								onChange={(e) =>
									handleOnChangeData(e, location, setLocation, "country")
								}></InputText>
						</div>

						<div className="label-input-citydistrict">
							<Label label="City / District"></Label>
							<InputText
								onChange={(e) =>
									handleOnChangeData(e, location, setLocation, "city")
								}></InputText>
						</div>

						<div className="label-input-stateprovice">
							<Label label="State / Provice"></Label>
							<InputText
								onChange={(e) =>
									handleOnChangeData(e, location, setLocation, "state")
								}></InputText>
						</div>
					</div>

					<div className="register-btn-frame">
						<div className="register-btn">
							<PrimaryButton
								text={buttonSubmitName}
								onClick={() => createReport(location, report, files, setButtonSubmitName)}></PrimaryButton>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}


async function createReport(location, report, files, setButtonSubmitName) {
	report["location"] = location;
	report["userid"] = localStorage.getItem("greenchain-userid");
	report["images"] = [];
	for (var i = 0; i < files.length; i++) {
		var base64 = await getBase64(files[i])
		report["images"].push(base64);
	}
	console.log(report)
	setButtonSubmitName("Loader")
	sendReport(report).then(()=>{
		window.location.href="/"
	})
}

function addImage(e, files, setFiles) {
	const file = e.target.files[0];
	if (file.type === "image/jpeg" || file.type === "image/png") {
		const temp_state = [...files];
		temp_state.push(file);
		setFiles(temp_state);
	}
}

function RenderFiles(props) {
	var chips = [];
	for (var i = 0; i < props.files.length; i++) {
		chips.push(
			<div className="nameimageanddelete-container noselect">
				<div className="chipphoto-text" key={i}>
					{props.files[i].name}
				</div>
				<div className="close-img">
					<img src="/images/xmark.svg"></img>
				</div>
			</div>
		);
	}
	return chips;
}

export default Newreport;
