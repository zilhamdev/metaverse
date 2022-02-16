import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from "react-moralis";
import Header from '../components/Header';
import Messages from '../components/Messages';


export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />
  return (
    <div className='h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden'>
      <Head>
        <title>Metaverse Challenge</title>
        <meta name="description" content="Metaverse Challenge Zildev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the App</h1>
      <div className='max-w-screen-2xl mx-auto'>
        {/* Header */}
        <Header />
        {/* Message */}
        <Messages />
        {/* Footer */}
      </div>

    </div>
  )
}
