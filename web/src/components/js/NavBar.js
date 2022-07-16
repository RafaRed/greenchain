import { PrimaryButton } from '../../components/js/PrimaryButton';
import Metamask from '../../model/metamask/Metamask';
import '../css/NavBar.css';
import "../css/Loader.css"
export function NavBar() {
    return (<div className='navbar'>

        <div className='navbar-leftside'>
            <div className='logo-frame noselect'>
                <div className='logo' onClick={() => { window.location.href = "/" }}>
                    <img src='/images/logo.svg' />
                </div>
            </div>

            <div className='menu-frame noselect'>
                <li><a href="/#anchor">How its Work?</a></li>
                <li><a href="/#reports">Reports</a></li>
            </div>
        </div>

        <div className='navbar-rightside'>
            <div className='btnlogin-frame'>
                <Metamask></Metamask>
            </div>
        </div>
    </div>);
}
