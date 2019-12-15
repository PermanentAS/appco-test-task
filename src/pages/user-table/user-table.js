import React, { useState, useEffect } from "react";
import UserHeader from "./../../components/user-header";
import UserFooter from "./../../components/user-footer";
import Table from "./../../components/table";
import Breadcrumb from "./../../components/breadcrumb";
import Pagination from "./../../components/pagination";
import "./user-table.scss";
import Axios from "axios";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const breadcrumbData = [
    { title: "Main Page", path: "/" },
    { title: "User statistic", path: "/users" }
  ];

  useEffect(() => {
    Axios.get(`/users`, { params: { page: currentPage, usersPerPage: 15 } })
      .then(data => data.data)
      .then(users => {
        setUsers(users);
      });
  }, [currentPage]);

  const paginationClickHandler = page => {
    if (page <= 1) {
      setCurrentPage(prev => {
        return 1;
      });
    } else {
      setCurrentPage(prev => {
        return page;
      });
    }
  };

  return (
    <div className="user-statistics">
      <UserHeader />
      <div className="container">
        <Breadcrumb data={breadcrumbData} />
        <h2>Users statistics</h2>
        <Table users={users} />
        <Pagination
          paginationClickHandler={paginationClickHandler}
          currentPage={currentPage}
        />
      </div>
      <UserFooter />
    </div>
  );
};

export default UserTable;
