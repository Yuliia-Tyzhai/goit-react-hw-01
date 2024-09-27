import React from 'react';
import styles from './Profile.module.css';

const Profile = props => {
  const { name, tag, location, image, stats } = props;
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileImgContainer}>
        <img className={styles.profileImg} src={image} alt="User avatar" />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>

      <ul className={styles.profileList}>
        <li className={styles.profileListItem}>
          <span className={styles.profileListItemText}>Followers</span>
          <span className={styles.profileListItemAmount}>
            {stats.followers}
          </span>
        </li>
        <li className={styles.profileListItem}>
          <span className={styles.profileListItemText}>Views</span>
          <span className={styles.profileListItemAmount}>{stats.views}</span>
        </li>
        <li className={styles.profileListItem}>
          <span className={styles.profileListItemText}>Likes</span>
          <span className={styles.profileListItemAmount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
