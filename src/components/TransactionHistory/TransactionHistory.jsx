import React from 'react';
import styles from './TransactionHistory.module.css';

const TransactionHistory = props => {
  const { items } = props;
  return (
    <table className={styles.transactionHistoryTable}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableHeadRaw}>
          <th className={styles.tableHeadItem}>Type</th>
          <th className={styles.tableHeadItem}>Amount</th>
          <th className={styles.tableHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {items.map(transaction => (
          <tr className={styles.tableBodyRaw} key={transaction.id}>
            <td className={styles.tableBodyItem}>{transaction.type}</td>
            <td className={styles.tableBodyItem}>{transaction.amount}</td>
            <td className={styles.tableBodyItem}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
