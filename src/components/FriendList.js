import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
 import {Pagination} from 'react-bootstrap';
class FriendList extends Component {
  render () {
    //Pagination
    const friendsPage = this.props.friends;
    const friendsPerPage = 2;
    const pages = Math.ceil(friendsPage.length / friendsPerPage);
    const startOffset = (this.state.activePage - 1) * friendsPerPage;
    let startCount = 0;

    return (
      <div>
      <ul className={styles.friendList}>
        {
          this.props.friends.map((friend, index) => {
            if (index >= startOffset && startCount < friendsPerPage) {
              startCount++;
              return (
                <FriendListItem
                  key={index}
                  id={index}
                  name={friend.name}
                  gender={friend.gender}
                  starred={friend.starred}
                  {...this.props.actions} />
              );
            }
          })
        }
      </ul>

      <Pagination className="pull-right" bsSize="medium" maxButtons={10} first last next
          prev boundaryLinks items={pages} activePage={this.state.activePage} onSelect={this.handleSelect}/>
      </div>
    );
  }

  constructor (props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activePage: 1,
    };
  }

  handleSelect(eventKey) {
    this.setState({activePage: eventKey});
  }
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
