import styles from "@/styles/Show.module.css";

export const Show = ({ date, venue, city, tickets }) => {
  return (
    <div className={styles.showItem}>
      <div className={styles.left}>{date}</div>
      <div className={styles.center}>
        <div className={styles.venue}>
          <div>{venue}</div>
          <div>{city}</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.buttonPrimary}>
          <a href={tickets} target="_blank" rel="noreferrer">
            Boletos
          </a>
        </div>
      </div>
    </div>
  );
};
