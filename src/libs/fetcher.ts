import axios from 'axios';
const config = {
  headers: {
    'X-RapidAPI-Key': 'f38dd210e1mshdd62715b0497ea4p10480fjsnf762bef6b9d7',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
  },
};
const fetcher = (url: string) => axios.get(url, config).then((res) => res.data);

export default fetcher;
