const URL_API = 'https://api-staging.vagalumewifi.com.br/api/tests/infoTeste';

const fetchAcessAll = async () => {
  try {
    const response = await fetch(URL_API);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchAcessAll;
