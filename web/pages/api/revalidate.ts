import { isValidRequest } from '@sanity/webhook';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const secret = process.env.SANITY_WEBHOOK_SECRET;

  // if (req.method !== 'POST') {
  //   console.error('Must be a POST request');
  //   return res.status(401).json({ message: 'Must be a POST request' });
  // }

  // if (!isValidRequest(req, secret!)) {
  //   res.status(401).json({ message: 'Invalid signature' });
  //   return;
  // }

  // if (req.query.secret !== process.env.SANITY_WEBHOOK_SECRET) {
  //   return res.status(401).json({ message: 'Invalid token' });
  // }

  try {
    const { slug } = req.body;
    await res.revalidate(`/projects/${slug}`);
    await res.revalidate(`/projects`);
    return res.json({ revalidated: true });
  } catch (error) {
    res.status(500).json({ err: error });
  }
}
