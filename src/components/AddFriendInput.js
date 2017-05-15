import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    return (
      <div>

      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Type the name of a friend"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}/>

      <div onChange={this.setGender.bind(this)} className={classnames('form-control', styles.addFriendInput)}>
        <input type="radio" value="Male" name="gender" checked={this.state.gender === 'Male'} /> Male

        <input type="radio" value="Female" name="gender" checked={this.state.gender === 'Female'} /> Female
      </div>

      <button className={classnames('form-control btn btn-primary', styles.addFriendInput)} onClick={this.handleSubmit.bind(this)}>
        Add
      </button>

      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      gender: this.props.gender || 'Male'
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
      this.props.addFriend(this.state.name,this.state.gender);
      this.setState({ name: '', gender: 'Male' });
  }

  setGender(event) {
  this.setState({ gender: event.target.value});
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
