import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '20750145-48a02e7da0211861018627a61';

const pixabayApi = {
  async fetchImages(query = '', page = 1) {
    const { data } = await axios.get(
      `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );
    return data.hits;
  },
};

export default pixabayApi;
