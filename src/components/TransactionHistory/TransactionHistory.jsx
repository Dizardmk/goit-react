import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <>
    <table className={styles.transactionHistory}>
      <thead className={styles.header}>
        <tr className={styles.headerTitle}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.bodyTitle}>
            <td className={styles.bodyItem}>{type}</td>
            <td className={styles.bodyItem}>{amount}</td>
            <td className={styles.bodyItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
