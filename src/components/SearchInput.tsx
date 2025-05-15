'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '@styles/Home.module.scss';

export default function SearchInput({
  initialQuery,
}: {
  initialQuery: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    const params = new URLSearchParams(searchParams.toString());
    if (newQuery) {
      params.set('query', newQuery);
    } else {
      params.delete('query');
    }
    router.push(`/dog?${params.toString()}`, { scroll: false });
  };

  const handleClearSearch = () => {
    setQuery('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('query');
    router.push(`/dog?${params.toString()}`, { scroll: false });
    const inputElement = document.querySelector<HTMLInputElement>(
      `.${styles.input}`,
    );
    if (inputElement) {
      inputElement.focus();
    }
  };

  const getPlaceholderText = () => {
    if (isFocused) {
      return 'Input breed name to search';
    }
    return 'Click to search';
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder={getPlaceholderText()}
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`${styles.input} ${
          !isFocused ? styles.inputEmptyUnfocused : ''
        }`}
      />
      {query && (
        <button
          onClick={handleClearSearch}
          className={styles.clearButton}
          aria-label="Clear search"
        />
      )}
    </div>
  );
}
