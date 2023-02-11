import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID ahwDJKh9FmKipfuDpkpvePobh7U_5bbL_z28AB33hHc',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
