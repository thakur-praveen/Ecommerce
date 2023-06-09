import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client =  sanityClient({
    projectId: 'gnd9y6lb',
    dataset: 'production',
    apiVersion: '2022-10-27',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
console.log(client);
const builder = imageUrlBuilder(client);



export const urlFor = (source) => builder.image(source);



