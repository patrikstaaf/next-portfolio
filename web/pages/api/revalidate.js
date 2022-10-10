// import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

// const secret = process.env.SANITY_WEBHOOK_SECRET;

// import { isValidRequest } from '@sanity/webhook';

const secret = process.env.SANITY_WEBHOOK_SECRET;

export default async function handler(req, res) {
  // if (req.method !== 'POST') {
  //   console.error('Must be a POST request');
  //   return res.status(401).json({ message: 'Must be a POST request' });
  // }

  // if (!isValidRequest(req, secret)) {
  //   res.status(401).json({ message: 'Invalid signature' });
  //   return;
  // }

  console.log(req.body);
  console.log('slug', req.body.slug);
  console.log('type', req.body.type);

  // try {
  //   const {
  //     body: { type, slug },
  //   } = req;

  //   switch (type) {
  //     case 'post':
  //       await res.revalidate(`/projects/${slug}`);
  //       return res.json({
  //         message: `Revalidated "${type}" with slug "${slug}"`,
  //       });
  //   }

  //   return res.json({ message: 'No managed type' });
  // } catch (err) {
  //   return res.status(500).send({ message: 'Error revalidating' });
  // }
}
