import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/404.jpg';

const NotFoundPage = () => {
    return (
        <div className='text-center'>
           <img src={image} className="w-6/12 mx-auto" alt="" /> 
           <Link to="/foodMonster" className='my-5 text-white btn btn-error'>Về Trang chủ</Link>
        </div>
    );
};

export default NotFoundPage;