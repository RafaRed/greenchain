import { useState, React } from 'react';
import { NavBar } from '../../components/js/NavBar';
import '../css/Signup.css';
import { BackBar } from '../../components/js/BackBar';
import { PrimaryButton } from '../../components/js/PrimaryButton';
import { Title } from '../../components/js/Title';
import { Label } from '../../components/js/Label';
import { InputText } from '../../components/js/InputText';
import { handleOnChangeData } from '../../utils/utils';
import { sendRegister } from '../../model/Calls/server';

function Signup() {
    const [register, setRegister] = useState({})
    return (
        <>
            <NavBar></NavBar>

            <div className='Signup'>

                <BackBar title={'Sign Up'} path={'/'}></BackBar>

                <div className='profile-img'>
                    <img src='images/mavatar.svg'></img>
                </div>

                <form class="form">

                    <div className='userinfo-left-frame'>

                        <Title title={'User Informations'}></Title>

                        <Label label={'Username'}></Label>
                        <InputText onChange={(e) =>
                            handleOnChangeData(e, register, setRegister, "username")
                        }></InputText>

                        <Label label={'Wallet'}></Label>
                        <InputText onChange={(e) =>
                            handleOnChangeData(e, register, setRegister, "wallet")
                        }></InputText>

                        <div className='addwallet-frame'>
                            <div className='addwallet-btn'>
                                <PrimaryButton text={'Add Wallet'}></PrimaryButton>
                            </div>
                        </div>

                        <Label label={'Name'}></Label>
                        <InputText onChange={(e) =>
                            handleOnChangeData(e, register, setRegister, "name")
                        }></InputText>

                        <Label label={'Birthday'}></Label>
                        <InputText onChange={(e) =>
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
                        <InputText onChange={(e) =>
                            handleOnChangeData(e, register, setRegister, "discord")
                        }></InputText>

                        <Label label={'Twitter'}></Label>
                        <InputText onChange={(e) =>
                            handleOnChangeData(e, register, setRegister, "twitter")
                        }></InputText>

                        <div className='register-btn-frame'>
                            <div className='register-btn'>
                                <PrimaryButton text={'Register'} onClick={() => UserRegister(register)}></PrimaryButton>
                            </div>
                        </div>

                    </div>

                </form>

            </div>

        </>);
}

function UserRegister(register) {
    register['avatar'] = ""
    sendRegister(register).then(response => {

    })
}

export default Signup;
