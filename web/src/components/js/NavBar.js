import { PrimaryButton } from '../../components/js/PrimaryButton';
import '../css/NavBar.css';

export function NavBar() {
    return (<div className='navbar'>

        <div className='navbar-leftside'>
            <div className='logo-frame noselect'>
                <div className='logo'>
                    <img src='/images/logo.svg' />
                </div>
            </div>

            <div className='menu-frame noselect'>
                <li><a href="/Signup">How its Work?</a></li>
                <li><a href="#">Reports</a></li>
            </div>
        </div>

        <div className='navbar-rightside'>
            <div className='btnlogin-frame'>
                <PrimaryButton text={'Login'}></PrimaryButton>
            </div>
        </div>
    </div>);
}
