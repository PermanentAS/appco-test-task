import React from "react";
import "./table.scss";
import { withRouter } from "react-router-dom";

const Table = ({ users, history }) => {
  const changeRoute = id => {
    history.push(`/user/${id}`)
  };

  const markup = users.map(
    ({
      id,
      first_name,
      last_name,
      email,
      gender,
      ip_address,
      clicks,
      page_views
    }) => {
      return (
        <tr key={id} onClick={() => changeRoute(id)}>
          <th scope="row">{id}</th>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{email}</td>
          <td>{gender}</td>
          <td>{ip_address}</td>
          <td>{clicks}</td>
          <td>{page_views}</td>
        </tr>
      );
    }
  );

  return (
    <div className="scroll">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">IP address</th>
            <th scope="col">Total clicks</th>
            <th scope="col">Total page views</th>
          </tr>
        </thead>
        <tbody>{markup}</tbody>
      </table>
    </div>
  );
};

export default withRouter(Table);
