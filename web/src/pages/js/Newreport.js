import '../css/Newreport.css';
import { BackBar } from '../../components/js/BackBar';
import { NavBar } from '../../components/js/NavBar';
import { Label } from '../../components/js/Label';
import { Title } from '../../components/js/Title';
import { InputText } from '../../components/js/InputText';

function Newreport() {
    return (
        <div className="Newreport">

            <NavBar></NavBar>

            <BackBar title={'New Report'} path={'/'}></BackBar>

            <div className='frame'>
                <Title title='Informations'></Title>

                <Label label={'Report Title'}></Label>
                <InputText></InputText>

                <Label label={'Description'}></Label>

                <textarea placeholder="" rows="4" cols="50"> </textarea>

                <div className='images-title'>
                    Images
                </div>

            </div>

        </div>);
}
export default Newreport;