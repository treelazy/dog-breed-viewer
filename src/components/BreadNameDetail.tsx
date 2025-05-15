import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/Home.module.scss';
import { BreedNamesWithImages } from '@apis/getBreedNamesWithImageApi';

const BreadNameDetail = ({
  allBreeds,
  initialQuery,
}: {
  allBreeds: BreedNamesWithImages[];
  initialQuery: string;
}) => {
  const filteredBreeds = allBreeds.filter((breed) =>
    breed.name.toLowerCase().includes(initialQuery.toLowerCase()),
  );
  if (filteredBreeds.length > 0) {
    return (
      <div className={styles.breedList}>
        {filteredBreeds.map((breed) => (
          <div key={breed.name} className={styles.breedItem}>
            <div className={styles.avatarContainer}>
              <Image
                fill
                className={styles.breedAvatar}
                src={breed.image}
                alt={breed.name}
                priority={false}
              />
            </div>
            <Link
              href={`/dog/${breed.name}`}
              className={styles.breedLink}
              prefetch={false}
            >
              <span className={styles.breedName}>{breed.name}</span>
            </Link>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <p className={styles.noResults}>No breeds found for "{initialQuery}".</p>
    );
  }
};

export default BreadNameDetail;
