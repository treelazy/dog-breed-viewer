type DogApiResponse = {
  message: string[];
  status: string;
};

async function getBreedImages(breed: string | undefined): Promise<string[]> {
  if (!breed || Array.isArray(breed)) {
    console.error('Invalid breed parameter provided to getBreedImages:', breed);
    return [];
  }
  try {
    const apiUrl = `https://dog.ceo/api/breed/${encodeURIComponent(
      breed,
    )}/images/random/50`;
    const response = await fetch(apiUrl);

    const data: DogApiResponse = await response.json();

    if (data.status === 'success' && Array.isArray(data.message)) {
      return data.message;
    } else {
      console.error(
        'Failed to fetch breed images or unexpected API response format:',
        data,
      );
      return [];
    }
  } catch (error) {
    console.error('Error fetching breed images from API:', error);
    return [];
  }
}

export default getBreedImages;
