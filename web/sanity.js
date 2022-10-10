import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: process.env.SANITY_CDN,
  apiVersion: process.env.SANITY_APIVERSION,
});
