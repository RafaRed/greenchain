import React from 'react'
import { NavBar } from '../../components/js/NavBar';
import '../css/Signup.css';
import { BackBar } from '../../components/js/BackBar';
import { PrimaryButton } from '../../components/js/PrimaryButton';
import { Title } from '../../components/js/Title';
import { Label } from '../../components/js/Label';
import { InputText } from '../../components/js/InputText';

function Signup() {
    return (
        <>
            <NavBar></NavBar>

            <div className='Signup'>

                <BackBar title={'Sign Up'} path={'/'}></BackBar>

                <div className='profile-img'>
                    <img src='images/profile.svg'></img>
                </div>

                <form class="form">

                    <div className='userinfo-left-frame'>

                        <Title title={'User Informations'}></Title>

                        <Label label={'Username'}></Label>
                        <InputText></InputText>

                        <Label label={'Wallet'}></Label>
                        <InputText></InputText>

                        <div className='addwallet-frame'>
                            <div className='addwallet-btn'>
                                <PrimaryButton text={'Add Wallet'}></PrimaryButton>
                            </div>
                        </div>

                        <Label label={'Name'}></Label>
                        <InputText></InputText>

                        <Label label={'Birthday'}></Label>
                        <InputText></InputText>

                    </div>

                    <div className='contact-right-frame'>

                        <Title title={'Contact'}></Title>

                        <Label label={'E-mail'}></Label>
                        <InputText></InputText>

                        <Label label={'Phone Number'}></Label>
                        <InputText></InputText>

                        <Label label={'Discord'}></Label>
                        <InputText></InputText>

                        <Label label={'Twitter'}></Label>
                        <InputText></InputText>

                        <div className='register-btn-frame'>
                            <div className='register-btn'>
                                <PrimaryButton text={'Register'}></PrimaryButton>
                            </div>
                        </div>

                    </div>

                </form>

            </div>

        </>);
}

export default Signup;
