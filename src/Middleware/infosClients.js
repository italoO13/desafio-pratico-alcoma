import moment from 'moment';
import fetchHistoric from '../Services/fetchHistoric';

const formatDate = (date) => {
  const dayMonthYear = date.split('/');
  const newDate = new Date(dayMonthYear[2], dayMonthYear[1] - 1, dayMonthYear[0]);
  return moment(newDate).format('YYYY/MM/DD');
};

const onlyUsersByClient = (users, selectClient, initialDate, finalDate) => {
  const dataFinFormat = moment(finalDate).format('YYYY/MM/DD');
  const dataInitFormat = moment(initialDate).format('YYYY/MM/DD');
  const usersClient = users.filter((user) => user.clientId === selectClient)
    .filter(
      (user) => user.lastConnection <= dataFinFormat && user.lastConnection >= dataInitFormat,
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

const userByClient = async ({ selectClient, initialDate, finalDate }) => {
  const users = await fetchHistoric();
  const usersUnique = onlyUsersByClient(users
    .map(formatUser), selectClient, initialDate, finalDate);
  return usersUnique;
};

export default userByClient;
