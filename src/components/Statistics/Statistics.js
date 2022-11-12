import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
  ];
  const getColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <section className="statistics">
      {title && <h2 className={styles.statisticsTitle}>{title}</h2>}

      <ul className={styles.statsList}>
        {stats.map((item) => (
          <li style={{ backgroundColor: getColor() }} key={item.id} className={styles.statsListItem}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
