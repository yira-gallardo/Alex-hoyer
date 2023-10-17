import styles from "@/styles/Show.module.css";

export const Show = ({ date, venue, city, tickets, isPast }) => {
  return (
    <div className={styles.showItem}>
      <div className={styles.check}>
        <div className={styles.checkBox}>
          {isPast && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              height="3rem"
              fill="currentColor"
              className="bi bi-check-lg"
              viewBox="0 0 16 16"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
          )}
        </div>
      </div>
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
      {/* <div className={styles.line} /> */}
    </div>
  );
};
