// import { isValidRequest } from '@sanity/webhook';

// const secret = process.env.SANITY_WEBHOOK_SECRET;

// import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

import { isValidRequest } from '@sanity/webhook';

const secret = process.env.SANITY_WEBHOOK_SECRET;

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     console.error('Must be a POST request');
//     return res.status(401).json({ message: 'Must be a POST request' });
//   }

//   if (!isValidRequest(req, secret)) {
//     return res.status(401).json({ message: 'Invalid signature' });
//   }

//   try {
//     const {
//       body: { type, slug },
//     } = req;

//     switch (type) {
//       case 'post':
//         await res.unstable_revalidate(`/projects/${slug}`);
//         return res.json({
//           message: `Revalidated "${type}" with slug "${slug}"`,
//         });
//     }

//     return res.json({ message: 'No managed type' });
//   } catch (err) {
//     return res.status(500).send({ message: 'Error revalidating' });
//   }
// }

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    console.error('Must be a POST request');
    return res.status(400).json({ message: 'Must be a POST request' });
  }

  if (req.query.secret !== secret) {
    return res.status(401).json({ message: 'Invalid secret' });
  }

  try {
    const body = req.body;
    if (!body) {
      return res.status(400).send('Bad request, no body');
    }

    const slugToRevalidate = body.slugToRevalidate;
    if (slugToRevalidate) {
      await res.unstable_revalidate(`/projects/${slugToRevalidate}`);
      return res.json({ revalidated: true });
    }
  } catch (err) {
    return res.status(500).send({ message: 'Error revalidating' });
  }
}
