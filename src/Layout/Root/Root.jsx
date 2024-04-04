
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='lg:mx-10'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
