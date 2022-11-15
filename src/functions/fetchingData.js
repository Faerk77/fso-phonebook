const fetchingData = async (signal) => {
    try {
      const response = await fetch(API_URL, { signal });
      if (!response.ok) throw new Error('Server Error');
      const data = await response.json();
      return { data, error: null };
    } catch (err) {
      if (err.name === 'AbortError') return { error: 'abort' };
      return { error: err.message };
    }
    };

export {fetchingData}