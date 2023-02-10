import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendCollection, Item } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendCollection>
      {friends.map(friend => (
        <Item key={friend.id}>
          <FriendListItem friend={friend} />
        </Item>
      ))}
    </FriendCollection>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
