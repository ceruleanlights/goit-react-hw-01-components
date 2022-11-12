import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={styles.friendListItem}>
      <span className={styles.friendStatus}>{isOnline ? "🟢" : "🔴"}</span>
      <img className={styles.friendAvatar} alt="User avatar" src={avatar} width={48} />
      <p className={styles.friendName}>{name}</p>
    </li>
  );
};

FriendListItem.prototype = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
