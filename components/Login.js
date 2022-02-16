import react from 'react';
import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Login() {
    const { authenticate } = useMoralis();
    return (
        <div className='bg-black relative'>
            <h1>Login Screen</h1>
            <div className='flex flex-col absolute z-50 h-4/6 justify-center items-center w-full space-y-4'>
                {/* Metaverse Logo */}
                <Image src='/zil-logo.png'
                    width={260}
                    height={60}
                    className='object-cover'
                    alt='metaverse logo'
                />

                {/* Login Button */}
                <button
                    className='bg-yellow-500 hover:bg-yellow-600 rounded-lg p-3 animate-pulse hover:animate-none font-bold text-gray-800'
                    onClick={() => authenticate()}
                >Login to the METAVERSE</button>
            </div>
            <div className='w-full h-screen'>
                <Image src='https://links.papareact.com/55n'
                    layout='fill'
                    objectFit='cover'
                    alt='metaverse background'
                />
                {/* Login Form */}
            </div>
        </div>
    )
}

export default Login