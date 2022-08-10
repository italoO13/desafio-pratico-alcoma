import fetchAcessAll from '../Services/fetchAcessAll';

const generalAcess = async () => {
  const acess = await fetchAcessAll();
  return { general: acess.total, online: acess.online, offline: acess.total - acess.online };
};

export default generalAcess;
