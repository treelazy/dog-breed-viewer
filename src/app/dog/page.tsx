import styles from '@styles/Home.module.scss';
import SearchInput from '@components/SearchInput';
import getBreedNamesWithImageApi from '@apis/getBreedNamesWithImageApi';
import BreadNameDetail from '@components/BreadNameDetail';

export default async function DogPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const allBreeds = await getBreedNamesWithImageApi();
  const searchParamsObj = await searchParams;
  const { query } = searchParamsObj || {};

  const currentQuery = query || '';

  return (
    <div className={styles.container}>
      <SearchInput initialQuery={currentQuery} />
      <BreadNameDetail allBreeds={allBreeds} initialQuery={currentQuery} />
    </div>
  );
}
