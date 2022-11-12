import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends &&
        friends.map((friend) => {
          const { id, isOnline, name, avatar } = friend;
          return (
            <li className={styles.friendListItem} key={id}>
              <span className={styles.friendStatus}>{isOnline ? "🟢" : "🔴"}</span>
              <img className={styles.friendAvatar} alt="User avatar" src={avatar} width={48} />
              <p className={styles.friendName}>{name}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default FriendList;
