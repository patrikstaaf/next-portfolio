import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

// const secret = process.env.SANITY_WEBHOOK_SECRET;

import { isValidRequest } from '@sanity/webhook';

const secret = process.env.SANITY_WEBHOOK_SECRET;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    console.error('Must be a POST request');
    return res.status(401).json({ message: 'Must be a POST request' });
  }

  if (!isValidRequest(req, secret)) {
    res.status(401).json({ message: 'Invalid signature' });
    return;
  }

  try {
    const {
      body: { type, slug },
    } = req;

    switch (type) {
      case 'post':
        await res.revalidate(`/projects/${slug}`);
        return res.json({
          message: `Revalidated "${type}" with slug "${slug}"`,
        });
    }

    return res.json({ message: 'No managed type' });
  } catch (err) {
    return res.status(500).send({ message: 'Error revalidating' });
  }
}

// export default async function handler(req, res) {
//   const signature = req.headers[SIGNATURE_HEADER_NAME];
//   const body = await readBody(req); // Read the body into a string
//   if (!isValidSignature(body, signature, secret)) {
//     res.status(401).json({ success: false, message: 'Invalid signature' });
//     return;
//   }

//   try {
//     const {
//       body: { type, slug },
//     } = req;

//     switch (type) {
//       case 'post':
//         await res.revalidate(`/projects/${slug}`);
//         console.log('ok', { slug });
//         return res.json({
//           message: `Revalidated "${type}" with slug "${slug}"`,
//         });
//     }
//     return res.json({ message: 'No managed type' });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send({ message: 'Error revalidating' });
//   }
// }

// async function readBody(readable) {
//   const chunks = [];
//   for await (const chunk of readable) {
//     chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
//   }
//   return Buffer.concat(chunks).toString('utf8');
// }

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
