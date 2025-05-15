'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@styles/Modal.module.scss';

export default function CarouselModal({
  images,
  index,
  onClose,
}: {
  images: string[];
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    setCurrent(index);
  }, [index]);

  return (
    <div className={styles.overlay}>
      <button
        onClick={onClose}
        className={styles.closeButton}
        aria-label="Close modal"
      />
      <div className={styles.carousel}>
        <button
          onClick={prev}
          className={`${styles.navButton} ${styles.prevButton}`}
          aria-label="Previous image"
        />
        <div className={styles.imageContainer}>
          <Image
            key={images[current]}
            src={images[current]}
            alt={`Dog image ${current + 1} of ${images.length}`}
            className={styles.img}
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <button
          onClick={next}
          className={`${styles.navButton} ${styles.nextButton}`}
          aria-label="Next image"
        />
      </div>
    </div>
  );
}
