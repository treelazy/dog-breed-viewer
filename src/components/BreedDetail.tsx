'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '@styles/Breed.module.scss';

const CarouselModal = dynamic(() => import('@components/CarouselModal'), {
  ssr: false,
});

type BreedDetailClientProps = {
  breedName: string;
  images: string[];
};

export default function BreedDetailClient({
  breedName,
  images,
}: BreedDetailClientProps) {
  const router = useRouter();
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const capitalizedBreedName = breedName
    ? breedName.charAt(0).toUpperCase() + breedName.slice(1)
    : 'Breed';

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <button
          onClick={() => router.push('/dog')}
          className={styles.backButton}
        />
        <h1 className={styles.breedTitle}>{capitalizedBreedName}</h1>
      </div>
      <div className={styles.mainContent}>
        {images.length > 0 ? (
          <div className={styles.grid}>
            {images.map((img, i) => (
              <div
                key={`${img}-${i}`}
                className={styles.gridItem}
                onClick={() => setModalIndex(i)}
              >
                <Image
                  fill
                  src={img}
                  alt={`${breedName} image ${i + 1}`}
                  className={styles.image}
                  priority={false}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noImagesText}>
            No images found for this breed, or they are still loading.
          </p>
        )}
      </div>
      {modalIndex !== null && (
        <CarouselModal
          images={images}
          index={modalIndex}
          onClose={() => setModalIndex(null)}
        />
      )}
    </div>
  );
}
