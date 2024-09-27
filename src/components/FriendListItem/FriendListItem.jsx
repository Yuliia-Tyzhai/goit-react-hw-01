import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  return (
    <div className={styles.friendListItemContainer}>
      <img
        className={styles.friendListItemImg}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <div className={styles.friendDetails}>
        <p className={styles.friendName}>{name}</p>
        <p
          className={`${styles.onlineOffline} ${
            isOnline ? styles.online : styles.offline
          }`}
        >
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  );
};

export default FriendListItem;
