
import type { NextApiRequest, NextApiResponse } from 'next'

let claimHistory: { [address: string]: number } = {}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query
  if (!address || typeof address !== 'string') {
    return res.status(400).json({ error: 'Missing wallet address' })
  }

  const now = Date.now()
  const lastClaim = claimHistory[address] || 0
  const oneDay = 24 * 60 * 60 * 1000

  if (now - lastClaim < oneDay) {
    return res.status(429).json({ error: 'You can only claim once per day' })
  }

  claimHistory[address] = now

  return res.status(200).json({ success: true, message: '1 REGIS sent!' })
}
