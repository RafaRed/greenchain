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

                    <div className='username-input-frame'>
                        <input className='input-username' type="text" />
                    </div>

                    <div className='wallet-label'>
                        Wallet
                    </div>

                    <div className='wallet-input-frame'>
                        <input className='input-wallet' type="text" />
                    </div>

                    <div className='addwallet-frame'>
                        <div className='addwallet-btn'>
                            <PrimaryButton text={'Add Wallet'}></PrimaryButton>
                        </div>
                    </div>


                    <div className='name-label'>
                        Name
                    </div>

                    <div className='name-input-frame'>
                        <input className='input-name' type="text" />
                    </div>



                    <div className='birthday-label'>
                        Birthday
                    </div>

                    <div className='birthday-input-frame'>
                        <input className='input-birthday' type="text" />
                    </div>
                </div>


                <div className='contact-right-frame'>

                    <div className='contact-title'>
                        Contact
                    </div>

                    <div className='email-label'>
                        E-mail
                    </div>

                    <div className='email-input-frame'>
                        <input className='input-email' type="text" />
                    </div>

                    <div className='phone-label'>
                        Phone Number
                    </div>

                    <div className='phone-input-frame'>
                        <input className='input-phone' type="text" />
                    </div>

                    <div className='discord-label'>
                        Discord
                    </div>

                    <div className='discord-input-frame'>
                        <input className='input-discord' type="text" />
                    </div>


                    <div className='twitter-label'>
                        Twitter
                    </div>

                    <div className='twitter-input-frame'>
                        <input className='input-twitter' type="text" />
                    </div>

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
