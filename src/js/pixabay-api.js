import axios from 'axios';

const searchHendler = async ({ query, page }) => {
  const axiosParams = {
    params: {
      key: '19040716-d2ab54626dacf9b7f6f91612a',
      q: query,
      page,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  return axios.get(`https://pixabay.com/api/`, axiosParams);
};

export default searchHendler;
