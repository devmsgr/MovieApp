import axios from 'axios';

const endpoint = 'https://api.themoviedb.org/3/movie/popular';
const apiKey = '0edfb9380f4623d95caa156c65e3d4a2';

export const getPopularMovie = async ({
  page,
  language,
}: {
  page: number;
  language: string;
}) => {
  return await axios.get(endpoint, {
    params: {
      api_key: apiKey,
      page: page,
      language: language,
      pageSize: 20,
    },
  });
};
