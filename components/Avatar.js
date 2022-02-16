import Image from 'next/image';
import React from 'react'
import { useMoralis } from 'react-moralis';

function Avatar({ username, logoutOnPress }) {
    const { user, logout } = useMoralis();
    return (
        <Image
            src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get('username')}.svg`}
            alt='avatar'
            layout='fill'
            className='rounded-full bg-black hover:opacity-75 cursor-pointer'
            title='Click here to Logout..'
            onClick={() => logoutOnPress && logout()}
            priority
        />

    )
}

export default Avatar