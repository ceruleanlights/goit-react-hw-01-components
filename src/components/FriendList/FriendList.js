import styles from "./FriendList.module.css";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends &&
        friends.map((friend) => {
          const { id, isOnline, name, avatar } = friend;
          return <FriendListItem key={id} isOnline={isOnline} name={name} avatar={avatar} />;
        })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
