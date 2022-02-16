import React from 'react'
import { useMoralis } from 'react-moralis';
import Image from 'next/image';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

function Header() {
    const { user, logout } = useMoralis();
    return (
        <div>
            <div className='text-pink-500 sticky top-0 p-5 z-50 shadow-sm border-b-2 border-pink-700 bg-black'>
                <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
                    <div className='relative h-48 w-48 mx-auto hidden lg:inline-grid'>
                        <Image
                            objectFit='scale-down'
                            layout='fill'
                            src='/zil-logo.png'
                            alt='logo'
                        />
                    </div>
                    <div className='col-span-4 text-left lg:text-center'>
                        <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'>
                            {/* Avatar */}
                            <Avatar logoutOnPress={logout} />
                        </div>
                        {/* Welcome Message */}
                        <h1 className='text-3xl'>Welcome to the Zildev Metaverse</h1>
                        {/* Username */}
                        <h2 className='text-5xl font-bold truncate'>{user.getUsername()}</h2>
                        {/* change username */}
                        <ChangeUsername />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header