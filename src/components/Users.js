import React from 'react';
import Loading from '../components/Loading';
import './Users.scss';

class Users extends React.Component {
	
	render() { 
		return this.props.isPending ? <Loading /> :
		this.props.users.map((user, i) => {
          return (
          	<div className="users">
	            <User
	              key={i}
	              id={user.id}
	              name={user.name}
	              email={user.email}
	              />
	        </div>
          );
		})	
	}
}

export default Users;

const User = ({ name, email, id }) => {
  return (
    <div>
      <img alt='user' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}