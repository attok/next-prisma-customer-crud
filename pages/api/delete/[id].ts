// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Prisma, PrismaClient } from '.prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { id }= req.query

  
  const prisma = new PrismaClient()

  try {
    const customer = await prisma.customer.delete({ 
      where: {
        id: +id
      }
     })

    res.status(200).json({id: id})
  } catch (e) {
    res.status(400).json({
      message: "Something went wrong. "
    })
  }
}
