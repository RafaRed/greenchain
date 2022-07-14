import { injected } from "./Connectors";
import { useWeb3React } from "@web3-react/core";
import { useState, React, useEffect } from "react";
import { PrimaryButton } from "../../components/js/PrimaryButton";
import { getUserId, getUsername } from "../Calls/server";


function Metamask(props) {
	const { active, account, library, connector, activate, deactivate } =
		useWeb3React();

	const {
		active: networkActive,
		error: networkError,
		activate: activateNetwork,
	} = useWeb3React();

	const [wallet, setWallet] = useState();
	const [loginButtonText, setLoginButtonText] = useState()
	var acc = localStorage.getItem("greenchain-account");
	var username_local = localStorage.getItem("greenchain-username");
	var userid_local = localStorage.getItem("greenchain-userid");

	async function updateUsername() {
		if (acc !== null && acc !== undefined) {
			console.log(acc);
			getUserId({ wallet: acc }).then((data) => {
				if ("id" in data) {
					localStorage.setItem("greenchain-userid", data["id"]);
					userid_local = data["id"];
				} else {
					if (window.location.pathname !== "/Signup") {
						window.location.href = "/Signup";
					}
					else{
						setLoginButtonText("Registering...")
					}
				}

				if (userid_local !== null) {
					getUsername({ user_id: data["id"] }).then((data) => {
						if ("username" in data) {
							localStorage.setItem("greenchain-username", data["username"]);
							userid_local = data["username"];
							window.location.reload(false);
						} else {
							console.log(data);
						}
					});
				}
			});
		}
	}

	async function updateLocalstorageWithWallet() {
		injected.isAuthorized().then((isAuthorized) => {
			if (isAuthorized && !networkActive && !networkError) {
				activateNetwork(injected);
				injected.getAccount().then((response) => {
					setWallet(response);
					acc = localStorage.setItem("greenchain-account", response);
					redirectToRegister();
				});
			}
		});
	}

	async function redirectToRegister() {
		if (acc !== null && (username_local === null || userid_local === null)) {
			updateUsername();
			/*if(window.location.pathname !== "/Signup"){
        window.location.href = "/Signup"
      }*/
		}
	}

	async function logout() {
		console.log("logout");
		localStorage.clear();
		deactivate();
		setWallet(account);
		window.location.href = "/";
	}

	async function connect(to) {
		console.log("connect");
		await activate(injected);
		updateLocalstorageWithWallet();
	}

	useEffect(()=>{
		setLoginButtonText(username_local === null ? "Loader" : username_local)
	},[])
	
	var buttonText = acc === null ? "Connect" : loginButtonText;
	var action = acc === null ? () => connect() : () => logout();
	redirectToRegister();

	return <PrimaryButton text={buttonText} onClick={action}></PrimaryButton>;
}

export default Metamask;
