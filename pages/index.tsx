
import Head from 'next/head'
import Faucet from '../components/Faucet'

export default function Home() {
  return (
    <div style={{ 
      backgroundImage: "url('/galaxy-bg.jpg')", 
      backgroundSize: 'cover', 
      minHeight: '100vh', 
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <Head>
        <title>Regis L3 DApp</title>
        <link rel="icon" href="/regis-logo.png" />
      </Head>
      <img src="/regis-logo.png" alt="Regis Logo" style={{ width: 120, marginBottom: 20 }} />
      <h1>🚀 Welcome to Regis L3</h1>
      <p>Claim 1 $REGIS per day</p>
      <Faucet />
      <img src="/pepe-meme.png" alt="Pepe Meme" style={{ width: 200, marginTop: 40 }} />
    </div>
  )
}
