import getDogRandomApi from './getDogRandomApi';

export type BreedNamesWithImages = {
  name: string;
  image: string;
};

async function getBreedNamesWithImageApi() {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/list/all', {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    const breedNames = Object.keys(data.message) as string[];

    if (!breedNames || breedNames.length === 0) {
      return [];
    }

    const breedsWithImagesPromises: Promise<BreedNamesWithImages>[] =
      breedNames.map(async (name) => {
        const imageUrl = await getDogRandomApi(name);
        return {
          name: name,
          image: imageUrl,
        };
      });

    const breedsWithImages = await Promise.all(breedsWithImagesPromises);

    return breedsWithImages;
  } catch (error) {
    console.error('Error fetching breedName with image:', error);
    return [];
  }
}

export default getBreedNamesWithImageApi;
