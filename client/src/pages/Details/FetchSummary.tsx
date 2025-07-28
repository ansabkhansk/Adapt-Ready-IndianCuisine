import { useEffect, useState } from 'react';

// To Fetch summary from Wikipedia for any dish if available in Wikipedia.
export default function useWikipediaSummary(dishName?: string) {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setSummary(null);
    setError(null);
    setLoading(true);
    if (!dishName) return;
    const fetchSummary = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(dishName)}`,
        );

        const data = await res.json();
        if (data.extract) {
          setSummary(data.extract.split('.').slice(0, 2).join(' ') + '.');
        } else {
          setSummary('No summary found.');
        }
      } catch {
        setError('No information available.');
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [dishName]);

  return { summary, loading, error };
};
