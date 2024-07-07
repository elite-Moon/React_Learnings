import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import './SearchFunction.css';

const TMDB_API_URL = 'https://api.themoviedb.org/3/search/movie';
const TMDB_API_KEY = 'ca81cd9ae475a62c718729c5405ff98c'; // Replace with your TMDB API key

const SearchFunction = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState({});

  const fetchResults = useCallback(
    debounce(async (searchQuery, pageNumber) => {
      if (cache[`${searchQuery}_${pageNumber}`]) {
        setResults(cache[`${searchQuery}_${pageNumber}`]);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(TMDB_API_URL, {
          params: {
            api_key: TMDB_API_KEY,
            query: searchQuery,
            page: pageNumber,
          },
        });
        const newResults = response.data.results.slice(0, 5); // Fetch only 5 results per page
        setResults(newResults);
        setCache((prevCache) => ({
          ...prevCache,
          [`${searchQuery}_${pageNumber}`]: newResults,
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 500),
    [cache]
  );

  useEffect(() => {
    if (query.length >= 3) {
      fetchResults(query, page);
    }
  }, [query, page, fetchResults]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setPage(1); // Reset to the first page when query changes
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className='container mt-5'>
      <h2>
        Search Functionality Task -{' '}
        <p style={{ color: '#007bff' }}>CreativeScript </p>
      </h2>
      <input
        type='text'
        className='form-control'
        value={query}
        onChange={handleInputChange}
        placeholder='Search...'
      />
      <div className='mt-3'>
        {results.map((result, index) => (
          <div key={index} className='alert alert-secondary'>
            {result.title}
          </div>
        ))}
      </div>
      {loading && <div className='text-center animated-button'>Loading...</div>}
      {results.length > 0 && !loading && (
        <div className='d-flex justify-content-between mt-3'>
          <button
            className='btn btn-primary animated-button'
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Previous
          </button>

          <button
            className='btn btn-primary animated-button'
            onClick={handleNextPage}
          >
            Next / Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchFunction;
