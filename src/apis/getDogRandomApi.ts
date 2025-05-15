type DogRandomApiResponse = {
  message: string;
  status: string;
};

async function getDogRandomApi(breed: string): Promise<string> {
  if (!breed) {
    console.error(
      'Invalid breed parameter provided to getDogRandomApi:',
      breed,
    );
    return '';
  }
  try {
    const apiUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 },
    });

    const data: DogRandomApiResponse = await response.json();

    if (data.status === 'success' && data.message) {
      return data.message;
    } else {
      console.error(
        'Failed to fetch random images or unexpected API response format:',
        data,
      );
      return '';
    }
  } catch (error) {
    console.error('Error fetching random images from API:', error);
    return '';
  }
}

export default getDogRandomApi;
