import React from "react";
import { Link } from "react-router-dom";
import { getUser } from "./actions/users";
// import "../styles/SingleView.css";
import  users from './randomUsers.json'


class SingleView extends React.Component {
  state = {
    img: "",
    name: "",
    email: "",
    phone: "",
    location: ""
  };
  componentDidMount() {
    // const user = getUser(this.props.match.params.id);
    const user = users.filter(i => i.id == this.props.match.params.id)
  
    this.setState({
      img: user[0].picture.thumbnail,
      name: `${user[0].name.first} ${user[0].name.last}`,
      email: user[0].email,
      phone: user[0].phone,
      location: `${user[0].location.city}, ${user[0].location.state}`
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="profile">
          <div className="backButton">
            <Link to="/">&larr;</Link>
          </div>
          <p>
            {" "}
            <img className="photo" src={this.state.img} />
          </p>
          <p className="info">{this.state.name}</p>
          <p className="info">{this.state.email}</p>
          <p className="info">{this.state.phone}</p>
          <p className="info">{this.state.location}</p>
        </div>
      </div>
    );
  }
}

export default SingleView;
