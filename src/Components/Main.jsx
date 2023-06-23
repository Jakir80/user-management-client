import React from 'react';
import AllUser from './AllUser';
import UserBanner from './UserBanner';

const Main = () => {
    return (
        <div>
            <UserBanner></UserBanner>
            <AllUser></AllUser>
        </div>
    );
};

export default Main;