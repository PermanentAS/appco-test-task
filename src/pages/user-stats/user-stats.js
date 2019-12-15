import React, { useState, useEffect } from "react";
import UserHeader from "./../../components/user-header";
import UserFooter from "./../../components/user-footer";
import Breadcrumb from "./../../components/breadcrumb";
import "./user-stats.scss";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Chart from "./../../components/chart";

const UserStats = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  let fullname =
    user === null
      ? ""
      : `${user.userInfo.first_name} ${user.userInfo.last_name}`;

  const breadcrumbData = [
    { title: "Main Page", path: "/" },
    { title: "User statistic", path: "/users" },
    { title: fullname, path: `/user/${id}` }
  ];

  let labels = [];
  let clicks = [];
  let page_views = [];

  if (user !== null) {
    labels = [...user.userStats.map(user => user.date)];
    clicks = [...user.userStats.map(user => user.clicks)];
    page_views = [...user.userStats.map(user => user.page_views)];
  }

  useEffect(() => {
    Axios.get(`/user`, {
      params: { id: id, fromDate: "2019-10-24", toDate: "2019-10-30" }
    })
      .then(data => data.data)
      .then(user => {
        setUser(user);
      });
  }, [id]);

  return (
    <div className="user-stats">
      <UserHeader />
      <div className="container">
        <Breadcrumb data={breadcrumbData} />
        <h2>{fullname}</h2>
        <h3>Clicks</h3>
        <Chart data={{ labels: [...labels], data: [...clicks], fullname }} />
        <h3>Views</h3>
        <Chart data={{ labels: [...labels], data: [...page_views], fullname }} />
      </div>
      <UserFooter />
    </div>
  );
};

export default UserStats;
