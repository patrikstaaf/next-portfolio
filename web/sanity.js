import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NEXT_PUBLIC_SANITY_CDN,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_APIVERSION,
});
