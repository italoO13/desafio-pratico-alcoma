import fetchHistoric from '../Services/fetchHistoric';

const uniqueClient = async () => {
  const data = await fetchHistoric();
  const users = data.map((user) => user.client_id);
  return [...new Set(users)];
};

export default uniqueClient;
