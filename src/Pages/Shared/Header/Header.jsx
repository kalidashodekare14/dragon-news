import moment from 'moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center space-y-3'>
                <img src={logo} alt="" />
                <p className='text-[18px] font-poppins'>Journalism Without Fear or Favour</p>
                <p className='text-xl font-poppins'>{moment().format("dddd, MMMM DD YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;