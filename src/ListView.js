import React from "react";
// import "../styles/ListView.css";
import { Link } from "react-router-dom";
import { getAllUsers } from "./actions/users";
import  users from './randomUsers.json'

class ListView extends React.Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    this.setState({
      contacts: users
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>My Contacts</h1>
        </header>
        <ul>
          {this.state.contacts.map(user => (
            <li key={"user-" + user.id}>
              <Link to={"/user/" + user.id}>
                <img src={user.picture.thumbnail} alt="pic" /> <span>{user.name.first} {user.name.last}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListView;









/*import React from 'react'
import { Link } from 'react-router-dom'
/*import { getAllUsers} from './actions/users'*/


/*const ListView = props => (
    <div>
        <h1>List View</h1>
        <Link to="/user"
    </div>
)




/*class ListView extends React.Component {
    state = {
        users: []
    }
componentDidMount() {
    this.setState ({
        users: getAllUsers()
    })
}

    render() {
        return (
            <div>
                <ul>
                    {this.state.users.map(user => (
                        <li><Link to={"/user/"+user.id}>
                            <img src={user.img}/> {user.name}
                        </Link></li>
                    ))}
                </ul>
            </div>
        )
    }
// */

// export default ListView