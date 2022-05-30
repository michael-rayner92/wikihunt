import axios from 'axios';

/**
 * Wikipedia API Error Handler
 * @returns Error message as a string
 */
export const wikiApiErrorHandler = (err: unknown) => {
  if (axios.isAxiosError(err)) {
    return new Error(err.message);
  }

  return new Error('An unexpected error occurred');
};
