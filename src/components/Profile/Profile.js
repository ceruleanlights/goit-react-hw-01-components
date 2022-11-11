import styles from "./Profile.module.css";
// import React from 'react'

const Profile = (user) => {
   const { avatar, username, tag, location, followers, views, likes } = user;
   return (
      <div className={styles.profile}>
         <div className={styles.description}>
            <img src={avatar} alt="User avatar" className={styles.avatar} width={100} height={100} />
            <p className={styles.name}>{username}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
         </div>

         <ul className={styles.stats}>
            <li className={styles.statsItem}>
               <span className={styles.label}>Followers</span>
               <span className={styles.quantity}>{followers}</span>
            </li>
            <li className={styles.statsItem}>
               <span className={styles.label}>Views</span>
               <span className={styles.quantity}>{views}</span>
            </li>
            <li className={styles.statsItem}>
               <span className={styles.label}>Likes</span>
               <span className={styles.quantity}>{likes}</span>
            </li>
         </ul>
      </div>
   );
};

export default Profile;
