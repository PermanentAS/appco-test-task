const users = require("./src/users.json");
const users_statistic = require("./src/users_statistic.json");
const moment = require("moment");

const usersWithStats = users
  .map(user => {
    const statistic = users_statistic.filter(
      field => user.id === field.user_id
    );
    user = { ...user, statistic };
    return user;
  })
  .sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });

const getUsers = (page, usersPerPage) => {
  const usersArr = users.slice((page - 1) * usersPerPage, page * usersPerPage);

  const respArray = usersArr.map(user => {
    let page_views = 0;
    let clicks = 0;
    const userWithStats = usersWithStats.find(({ id }) => id === user.id);
    userWithStats.statistic.forEach(field => {
      page_views += field.page_views;
      clicks += field.clicks;
    });

    user = { ...user, clicks: clicks, page_views: page_views };
    return user;
  });

  return respArray;
};

const getUserStats = (id, fromDate, toDate) => {
  const userWithStats = usersWithStats.find(user => id === user.id);

  let filteredByDateStats = [];

  for (
    let dateIterator = moment(fromDate);
    dateIterator.isBefore(moment(toDate).add(1, "d"));
    dateIterator.add(1, "d")
  ) {
    const dateStat = userWithStats.statistic.find(field =>
      dateIterator.isSame(field.date)
    );

    if (dateStat !== undefined) {
      filteredByDateStats.push(dateStat);
    } else {
      filteredByDateStats.push({
        user_id: id,
        date: dateIterator.format("YYYY-MM-DD"),
        page_views: 0,
        clicks: 0
      });
    }
  }

  return {
    userInfo: {
      id: userWithStats.id,
      first_name: userWithStats.first_name,
      last_name: userWithStats.last_name
    },
    userStats: filteredByDateStats
  };
};

exports.getUsers = getUsers;
exports.getUserStats = getUserStats;
