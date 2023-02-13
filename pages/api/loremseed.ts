import type { NextApiRequest, NextApiResponse } from 'next'
import { seed } from '../../seed'

type Data = {
  text: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const data = seed();
  console.log(data);
  res.status(200).json(data);
}


