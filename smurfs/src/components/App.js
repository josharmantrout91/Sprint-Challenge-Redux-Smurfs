import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Fragment>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div className="smurfs_wrapper">
            {this.props.characters && <Smurfs smurfs={this.props.smurfs} />}
          </div>
          {this.props.error && <p className="error">{this.props.error}</p>}
          {this.props.fetching && <h2>Just Waitin on some Smurfs...</h2>}
          <AddSmurfForm />
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.charsReducer.smurfs,
  fetching: state.charsReducer.fetching
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
