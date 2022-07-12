import '../css/Newreport.css';
import { BackBar } from '../../components/js/BackBar';
import { NavBar } from '../../components/js/NavBar';
import { Label } from '../../components/js/Label';
import { Title } from '../../components/js/Title';
import { InputText } from '../../components/js/InputText';
import { PrimaryButton } from '../../components/js/PrimaryButton';
import { Divider } from '../../components/js/Divider';


function Newreport() {
    return (
        <>
            <NavBar></NavBar>

            <div className="Newreport">



                <BackBar title={'New Report'} path={'/'}></BackBar>

                <div className='frame'>
                    <Title title='Informations'></Title>

                    <Label label={'Report Title'}></Label>
                    <InputText></InputText>

                    <Label label={'Description'}></Label>

                    <div className='textarea-frame'>
                        <textarea placeholder="" rows="4" cols="50"> </textarea>
                    </div>

                    <div className='images-title'>
                        Images
                    </div>

                    <div className='buttonchipsphotos-frame'>

                        <div className='addphotos-frame'>
                            <div className='addphotos-btn'>
                                <PrimaryButton text={'Add Photos'}></PrimaryButton>
                            </div>
                        </div>

                        <div className='nameimageanddelete-container noselect'>
                            <div className='chipphoto-text'>
                                image1.png
                            </div>
                            <div className='close-img'>
                                <img src='images/xmark.svg'></img>
                            </div>

                        </div>


                    </div>

                    <Divider></Divider>

                    <Title title='Report Location'></Title>

                    <Label label='Address'></Label>
                    <InputText></InputText>

                    <div className='row-inputs'>
                        <div className='label-input-country'>
                            <Label label='Country'></Label>
                            <InputText></InputText>
                        </div>

                        <div className='label-input-citydistrict'>
                            <Label label='City / District'></Label>
                            <InputText></InputText>
                        </div>

                        <div className='label-input-stateprovice'>
                            <Label label='State / Provice'></Label>
                            <InputText></InputText>
                        </div>
                    </div>


                    <div className='register-btn-frame'>
                        <div className='register-btn'>
                            <PrimaryButton text={'Submit'}></PrimaryButton>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );

}
export default Newreport;