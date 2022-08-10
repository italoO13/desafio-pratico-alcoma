const URL_API = 'https://api-staging.vagalumewifi.com.br/api/tests/apiTeste';

const fetchHistoric = async () => {
  try {
    const response = await fetch(URL_API);
    const data = await response.json();
    return data.connected;
  } catch (error) {
    return error;
  }
};

export default fetchHistoric;
