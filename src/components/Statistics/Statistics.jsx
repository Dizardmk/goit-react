import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777216).toString(16);
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={styles.item}
          key={id}
          style={{ backgroundColor: randomColor() }}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
