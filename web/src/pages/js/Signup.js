import React from 'react'
import { NavBar } from '../../components/js/NavBar';
import '../css/Signup.css';
import { BackBar } from '../../components/js/BackBar';
import { PrimaryButton } from '../../components/js/PrimaryButton';


function Signup() {
    return (
        <div className='Signup'>

            <NavBar></NavBar>
            <BackBar title={'Sign Up'} path={'/'}></BackBar>

            <div className='profile-img'>
                <img src='images/profile.svg'></img>
            </div>

            <form class="form">

                <div className='userinfo-left-frame'>

                    <div className='userinfo-title'>
                        User Information
                    </div>

                    <div className='username-label'>
                        Username
                    </div>
                    <input className='input-username' type="text" placeholder="" />

                    <div className='wallet-label'>
                        Wallet
                    </div>
                    <input className='input-wallet' type="text" placeholder="" />

                    <div className='addwallet-frame'>
                        <div className='addwallet-btn'>
                            <PrimaryButton text={'Add Wallet'}></PrimaryButton>
                        </div>
                    </div>

                    <div className='name-label'>
                        Name
                    </div>
                    <input className='input-name' type="text" placeholder="" />

                    <div className='birthday-label'>
                        Birthday
                    </div>
                    <input className='input-birthday' type="text" placeholder="" />

                </div>


                <div className='contact-right-frame'>

                    <div className='contact-title'>
                        Contact
                    </div>

                    <div className='email-label'>
                        E-mail
                    </div>
                    <input className='input-email' type="text" placeholder="" />

                    <div className='phone-label'>
                        Phone Number
                    </div>
                    <input className='input-phone' type="text" placeholder="" />

                    <div className='discord-label'>
                        Discord
                    </div>
                    <input className='input-discord' type="text" placeholder="" />

                    <div className='twitter-label'>
                        Twitter
                    </div>
                    <input className='input-twitter' type="text" placeholder="" />

                    <div className='register-btn-frame'>
                        <div className='register-btn'>
                            <PrimaryButton text={'Register'}></PrimaryButton>
                        </div>
                    </div>


                </div>


            </form>


        </div>




    );
}

export default Signup;
