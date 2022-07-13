import { injected } from "./Connectors";
import { useWeb3React } from "@web3-react/core";
import { useState, React, useEffect } from 'react';
import { PrimaryButton } from "../../components/js/PrimaryButton";


function Metamask(props) {
	const { active, account, library, connector, activate, deactivate } =
		useWeb3React();

	const {
		active: networkActive,
		error: networkError,
		activate: activateNetwork,
	} = useWeb3React();

  const [wallet,setWallet] = useState()
  var acc = localStorage.getItem("greenchain-account")
  var username_local = localStorage.getItem("greenchain-username")
  
	async function updateLocalstorageWithWallet() {

		injected.isAuthorized().then((isAuthorized) => {
			if (isAuthorized && !networkActive && !networkError) {
				activateNetwork(injected)
        injected.getAccount().then((response)=>{
          setWallet(response)
          acc = localStorage.setItem("greenchain-account", response);
        })
        
        
			}
		});
	}

  async function logout(){
    console.log("logout")
    localStorage.clear()
    deactivate();
    setWallet(account);
    
  }


	async function connect(to) {
    console.log("connect")
    await activate(injected);
    updateLocalstorageWithWallet();
	}
  var username = username_local === null ? "Username" : username_local 
  var buttonText = acc === null ? "Connect" : username
  var action = acc === null ? ()=>connect() : ()=>logout()
  
 	return (
		<PrimaryButton text={buttonText} onClick={action}></PrimaryButton>
	);
}

export default Metamask;
