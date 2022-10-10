import sanityClient from '@sanity/client';

const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: process.env.SANITY_CDN,
  apiVersion: process.env.SANITY_APIVERSION,
};

export default sanityClient(sanityConfig);
