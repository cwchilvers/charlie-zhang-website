import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'an04js69',
    dataset: 'production',
    useCdn: true, 
});

export default client;