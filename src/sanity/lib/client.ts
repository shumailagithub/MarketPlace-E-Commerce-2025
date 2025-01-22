import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.TOKEN,
});

// Handle the API_KEY separately if needed
// const apiKey = process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY;
