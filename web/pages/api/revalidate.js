import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

export default async function handler(req, res) {
  // if (req.method !== 'POST') {
  //   console.error('Must be a POST request');
  //   return res.status(401).json({ message: 'Must be a POST request' });
  // }

  // if (!isValidRequest(req, secret)) {
  //   res.status(401).json({ message: 'Invalid signature' });
  //   return;
  // }

  try {
    // const signature = req.headers[SIGNATURE_HEADER_NAME].toString();
    // if (
    //   !isValidSignature(
    //     JSON.stringify(req.body),
    //     signature,
    //     process.env.SANITY_WEBHOOK_SECRET
    //   )
    // )
    //   return res.status(401).json({ msg: 'Invalid request' });

    const { slug } = req.body;
    await res.revalidate(`/projects/${slug}`);
    await res.revalidate(`/projects`);
  } catch (error) {
    res.status(500).json({ err: error });
  }

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
