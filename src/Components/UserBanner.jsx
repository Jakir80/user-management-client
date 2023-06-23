import { Link } from 'react-router-dom';
const UserBanner = () => {
    return (
        <div>
            <div className="bg-cover p-60 bg-center bg-no-repeat mt-8" style={{ backgroundImage: 'url("banner.jpg")' }} >
                <h1 className='text-4xl text-white text-center mb-4 font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>
                    User Management Application
                </h1>
                <p className='text-white text-center text-3xl font-semibold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>Here is some user created anyone <br /> can want that he/she can update user information, delete a user, or create a user</p>
            </div>
            <div className="text-center">
                <button className='mt-14 p-6 text-3xl font-semibold bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-4 rounded-md mx-auto'>
                    <Link to='/createuser'>Creates User </Link>
                </button>

            </div>
        </div>
    );
};

export default UserBanner;
