import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from "react-moralis";


export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />
  return (
    <div className="">
      <Head>
        <title>Metaverse Challenge</title>
        <meta name="description" content="Metaverse Challenge Zildev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the App</h1>
      <button
        className='bg-yellow-400 hover:bg-yellow-500 rounded-lg p-3 animate-pulse hover:animate-none font-bold'
        onClick={() => logout()}
      >Logout</button>

    </div>
  )
}
