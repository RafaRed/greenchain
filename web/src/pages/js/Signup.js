import { useState, React } from 'react';
import { NavBar } from '../../components/js/NavBar';
import '../css/Signup.css';
import { BackBar } from '../../components/js/BackBar';
import { PrimaryButton } from '../../components/js/buttons/PrimaryButton'
import { Title } from '../../components/js/Title';
import { Label } from '../../components/js/Label';
import { InputText } from '../../components/js/InputText';
import { handleOnChangeData } from '../../utils/utils';
import { sendRegister } from '../../model/Calls/server';

function Signup() {
    const [register, setRegister] = useState({})
    const [registerStatus, setRegisterStatus] = useState("Register")
    var wallet = localStorage.getItem("greenchain-account");
    return (
        <>
            <NavBar></NavBar>

            <div className='Signup'>

                <BackBar title={'Sign Up'} path={'/'}></BackBar>

                <div className='profile-img'>
                    <img src='/images/mavatar.svg'></img>
                </div>

                <form className="form">

                    <div className='userinfo-left-frame'>

                        <Title title={'User Informations'}></Title>

                        <Label label={'Username'}></Label>
                        <InputText onChange={(e) =>
                            handleOnChangeData(e, register, setRegister, "username")
                        }></InputText>

                        <Label label={'Wallet'}></Label>
                        <InputText disabled={true} value={wallet} onChange={(e) =>
                            handleOnChangeData(e, register, setRegister, "wallet")
                        }></InputText>


                        <Label label={'Name'}></Label>
                        <InputText onChange={(e) =>
                            handleOnChangeData(e, register, setRegister, "name")
                        }></InputText>

                        <Label label={'Birthday'}></Label>
                        <InputText placeholder='mm/dd/yyyy' onChange={(e) =>
                            handleOnChangeData(e, register, setRegister, "birthday")
                        }></InputText>

                    </div>

                    <div className='contact-right-frame'>

                        <Title title={'Contact'}></Title>

                        <Label label={'E-mail'}></Label>
                        <InputText onChange={(e) =>
                            handleOnChangeData(e, register, setRegister, "email")
                        }></InputText>

                        <Label label={'Phone Number'}></Label>
                        <InputText onChange={(e) =>
                            handleOnChangeData(e, register, setRegister, "phone")
                        }></InputText>

                        <Label label={'Discord'}></Label>
                        <InputText placeholder='user#3333' onChange={(e) =>
                            handleOnChangeData(e, register, setRegister, "discord")
                        }></InputText>

                        <Label label={'Twitter'}></Label>
                        <InputText placeholder='@usertwitter' onChange={(e) =>
                            handleOnChangeData(e, register, setRegister, "twitter")
                        }></InputText>

                        <div className='register-btn-frame'>
                            <div className='register-btn'>
                                <PrimaryButton text={registerStatus} onClick={() => UserRegister(register, wallet, setRegisterStatus)}></PrimaryButton>
                            </div>
                        </div>

                    </div>

                </form>

            </div>

        </>);
}

function UserRegister(register, wallet, setRegisterStatus) {
    register['avatar'] = ""
    register['wallet'] = wallet
    setRegisterStatus("Loader")
    sendRegister(register).then(response => {
        window.location.href = "/"
        setRegisterStatus("Register")
    })
}


export default Signup;
