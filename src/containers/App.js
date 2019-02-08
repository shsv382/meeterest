import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { setGender, requestUsers } from '../actions';

import Loading from '../components/Loading';
import Header from '../components/Header';
import StartPage from '../components/StartPage';
import Users from '../components/Users';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



const mapStateToProps = (state) => {
  return {
    selfGender:  state.setSelfGender.selfGender,
    users:       state.requestUsers.users,
    isPending:   state.requestUsers.isPending,
    error:       state.requestUsers.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSelfGender: (event) => dispatch(setGender(event.target.dataset.gender)),
    onRequestUsers: () => requestUsers(dispatch)
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selfGender: "male",
      findingGender: "female"
    }
  }

  componentDidMount() {
    this.props.onRequestUsers()
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => 
              <StartPage  selfGender={this.props.selfGender}
                    setSelfGender={this.props.onSetSelfGender} />
            } />
            <Route path="/users" render={(props) => 
              <Users isPending={this.props.isPending} users={this.props.users} />
            } />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
