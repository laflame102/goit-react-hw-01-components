import PropTypes from 'prop-types';
import {
  Img,
  Description,
  Tag,
  Stats,
  Item,
  ProfileItem,
  Username,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileItem>
      <Description>
        <Img src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>{tag}</Tag>
        <Tag>{location}</Tag>
      </Description>

      <Stats>
        <Item>
          <span>Followers</span>
          <span>{followers}</span>
        </Item>
        <Item>
          <span>Views</span>
          <span>{views}</span>
        </Item>
        <Item>
          <span>Likes</span>
          <span>{likes}</span>
        </Item>
      </Stats>
    </ProfileItem>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
