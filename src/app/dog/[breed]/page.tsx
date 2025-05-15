import getBreedImages from '@apis/getBreedImages';
import BreedDetail from '@components/BreedDetail';

interface BreedPageProps {
  params: {
    breed: string;
  };
}

export default async function BreedPage({ params }: BreedPageProps) {
  const { breed } = await params;
  const images = await getBreedImages(breed);

  return <BreedDetail breedName={breed} images={images} />;
}
