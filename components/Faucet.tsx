
import { useState } from 'react'

export default function Faucet() {
  const [status, setStatus] = useState('')

  async function claim() {
    const address = "0xUserWalletHere"
    const res = await fetch(`/api/faucet?address=${address}`)
    const data = await res.json()
    setStatus(data.message || data.error)
  }

  return (
    <div>
      <button onClick={claim} style={{ padding: '10px 20px', fontSize: '16px' }}>💧 Claim 1 REGIS</button>
      <p>{status}</p>
    </div>
  )
}
