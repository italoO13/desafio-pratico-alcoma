import fetchHistoric from '../Services/fetchHistoric';

const formatDate = (date) => {
  const dayMonthYear = date.split('/');
  return new Date(dayMonthYear[2], dayMonthYear[1] - 1, dayMonthYear[0]);
};

const onlyUsersByClient = (users, client, dataFin, dataInit) => {
  const dataFinFormat = formatDate(dataFin);
  const dataInitFormat = formatDate(dataInit);
  const usersClient = users.filter((user) => user.clientId === client)
    .filter(
      (user) => user.lastConnection >= dataInitFormat && user.lastConnection <= dataFinFormat,
    );
  return [...new Set(usersClient.map((user) => user.userId))].length;
};

const formatUser = ({
  last_connection: lastConnection,
  client_id: clientId,
  user_id: userId,
}) => ({
  lastConnection: formatDate(lastConnection),
  clientId,
  userId,
});

const userByClient = async (client, dataFin, dataInit) => {
  const users = await fetchHistoric();
  const usersUnique = onlyUsersByClient(users.map(formatUser), client, dataFin, dataInit);
  return usersUnique;
};

export default userByClient;
