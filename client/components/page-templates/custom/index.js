import React, { Component } from "react";
import withAuthorization from "../../../hocs/withAuthorization";
import Footer from "../../../layout/Footer";
import { db } from "../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.styl";
class CustomPage extends Component {
  state = {
    users: null
  };
  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState({
        users: snapshot.val()
      })
    );
  }
  render() {
    const { className } = this.props;
    const { users } = this.state;
    return (
      <div className="custom-page">
        <section className={className}>
          {!!users ? (
            <UserList users={users} />
          ) : (
            <div>
              <FontAwesomeIcon icon="fa-spinner" />
              <p>loading users...</p>
            </div>
          )}
          <Footer />
        </section>
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <div className="user-list">
    <h3>List of Users</h3>
    {Object.keys(users).map(key => (
      <div className="user" key={"user-" + key}>
        <div className="profile-picture">
          <img src={users[key].profile_picture} />
        </div>
        <div className="user-info">
          <p className="name" key={key}>
            {users[key].name}
          </p>
          <p className="email" key={key}>
            {users[key].email}
          </p>
        </div>
      </div>
    ))}
  </div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(CustomPage);
